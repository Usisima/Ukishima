// ==================== DOM HELPERS ====================
const OPT_POOL_MAP = [
  ['opt_BI_',   OPTATIVAS_BLOQUE_I],
  ['opt_BII_',  OPTATIVAS_BLOQUE_II],
  ['opt_BIII_', OPTATIVAS_BLOQUE_III],
];

function findMat(id) {
  for (const sem of CURRICULUM) {
    for (const m of sem.materias) {
      if (m.id === id) return m;
    }
  }
  for (const sem of CURRICULUM) {
    for (let i = 0; i < (sem.optativas || 0); i++) {
      if (`opt_${sem.semestre}_${i}` === id) {
        const opt = getOptSlot(sem.semestre, i);
        return opt ? { ...enrichOptativa(opt), id } : null;
      }
    }
  }
  for (const [prefix, pool] of OPT_POOL_MAP) {
    if (id.startsWith(prefix)) {
      const idx = parseInt(id.slice(prefix.length));
      if (!isNaN(idx) && pool[idx]) return { ...enrichOptativa(pool[idx]), id };
    }
  }
  return null;
}

function findSemForMat(matId) {
  for (const sem of CURRICULUM) {
    if (sem.materias.some(m => m.id === matId)) return sem;
  }
  return null;
}

// ==================== UPDATE FUNCTIONS ====================
function updateGlobalBadge() {
  const badge = document.getElementById('global-pct');
  if (badge) badge.textContent = `${getGlobalPct()}%`;
}

function updateSemCredits(semNum) {
  const sem = CURRICULUM.find(s => s.semestre === semNum);
  if (!sem) return;
  const fixed = sem.materias.reduce((s, m) => s + m.creditos, 0);
  const opts = Array.from({ length: sem.optativas || 0 }, (_, i) => getOptSlot(semNum, i))
    .filter(Boolean).reduce((s, o) => s + (o.creditos || 0), 0);
  const badge = document.getElementById(`sem-credits-${semNum}`);
  if (badge) badge.textContent = `${fixed + opts} créditos`;
}

function rerenderAllOptSlots() {
  CURRICULUM.forEach(s => {
    for (let i = 0; i < (s.optativas || 0); i++) {
      rerenderOptSlot(s.semestre, i);
    }
  });
}

function scrollCarouselToSelected(wrap) {
  const viewport = wrap.querySelector('.opt-carousel-viewport');
  const items = Array.from(wrap.querySelectorAll('.opt-item'));
  const selectedIdx = items.findIndex(el => el.classList.contains('selected'));
  if (viewport && selectedIdx >= 0) {
    const ITEM_H = 70;
    const VP_H = 220;
    viewport.scrollTop = Math.max(0, selectedIdx * ITEM_H - (VP_H - ITEM_H) / 2);
  }
}

function updateCircProgress(matId, pct) {
  const card = document.getElementById(`card-${matId}`);
  if (!card) return;
  const CIRC = 107;
  const fg = card.querySelector('.circ-fg');
  const num = card.querySelector('.circ-num');
  if (fg) fg.style.strokeDashoffset = (CIRC - (pct / 100) * CIRC).toFixed(2);
  if (num) num.textContent = `${pct}%`;
}

function updateSemProgress(semNum) {
  const sem = CURRICULUM.find(s => s.semestre === semNum);
  if (!sem || !sem.materias.length) return;
  const pct = getSemPct(sem);
  const bar = document.getElementById(`sem-bar-${semNum}`);
  const lbl = document.getElementById(`sem-pct-${semNum}`);
  if (bar) bar.style.width = `${pct}%`;
  if (lbl) lbl.textContent = `${pct}%`;
}

function rerenderOptSlot(semNum, slotIdx) {
  const sem = CURRICULUM.find(s => s.semestre === semNum);
  if (!sem) return;
  const container = document.getElementById(`opt-slot-${semNum}-${slotIdx}-container`);
  if (!container) return;
  container.innerHTML = renderOptativaSlotContent(sem, slotIdx);
}

// ==================== DISC SCRUBBER (temarios) ====================
const TemDisc = {
  secs: [], rot: 0, isOpen: false,
  R: 580, LEDGE: 460, STEP: 0.07, SPEED: 4.5,

  reset() { this.secs = []; this.rot = 0; },

  build() {
    this.secs = [];
    if (TEM_VIEW === 'optativas') {
      document.querySelectorAll('.opt-bloque-section').forEach(bloqEl => {
        const headEl = bloqEl.querySelector('.opt-bloque-head');
        const raw = headEl?.querySelector('.opt-bloque-title')?.textContent.trim() || '';
        this.secs.push({ label: raw, el: headEl, isCh: true });
        bloqEl.querySelectorAll('.card').forEach(card => {
          const name = card.querySelector('.card-name')?.textContent.trim() || '';
          const target = card.querySelector('.card-head') || card;
          this.secs.push({ label: name, el: target, isCh: false });
        });
      });
    } else {
      document.querySelectorAll('.semester').forEach(semEl => {
        const headEl = semEl.querySelector('.sem-header');
        const raw = headEl?.querySelector('.sem-title')?.textContent.trim() || '';
        this.secs.push({ label: raw, el: headEl, isCh: true });
        semEl.querySelectorAll('.card').forEach(card => {
          const name = card.querySelector('.card-name')?.textContent.trim() || '';
          const target = card.querySelector('.card-head') || card;
          this.secs.push({ label: name, el: target, isCh: false });
        });
      });
    }
  },

  _clamp(v) { return Math.max(0, Math.min(Math.max(0, this.secs.length - 1), v)); },

  _render() {
    const wrap = document.getElementById('tem-disc-wrap');
    if (!wrap) return;
    const W = window.innerWidth, H = window.innerHeight;
    const R = this.R, L = this.LEDGE, S = this.STEP;
    const btnRect = document.getElementById('tem-disc-btn')?.getBoundingClientRect();
    const cy = btnRect ? (btnRect.top + btnRect.bottom) / 2 : H / 2;
    const active = Math.round(this._clamp(this.rot));
    const buf = [];

    // ── Selector needle ─────────────────────────────────────────
    const armLen = R - L - 36; // needle tip reaches center-item position
    buf.push(
      `<div style="position:absolute;right:36px;top:${(cy - 0.5).toFixed(0)}px;` +
      `width:${armLen}px;height:1px;` +
      `background:linear-gradient(to left,rgba(155,191,181,0.7),rgba(155,191,181,0.04));` +
      `pointer-events:none;z-index:4;"></div>` +
      `<div style="position:absolute;right:${(35 + armLen).toFixed(0)}px;top:${(cy - 3.5).toFixed(0)}px;` +
      `width:7px;height:7px;border-radius:50%;` +
      `background:rgba(155,191,181,0.6);box-shadow:0 0 6px rgba(155,191,181,0.4);` +
      `pointer-events:none;z-index:4;"></div>`
    );

    // ── Items ───────────────────────────────────────────────────
    this.secs.forEach((sec, i) => {
      const theta = (i - this.rot) * S;
      const arcX  = W + L - R * Math.cos(theta);
      const arcY  = cy + R * Math.sin(theta);
      if (arcY < -40 || arcY > H + 40) return;
      const rightDist = W - arcX;
      const pillMaxW = Math.max(50, W + L - R - 8); // fixed at center — never reflows
      const maxW = sec.isCh ? pillMaxW : Math.max(50, Math.min(W - 14, arcX - 8));
      const opacity = Math.max(0.04, 1 - Math.abs(theta) * 0.9);
      const isAct  = i === active;
      const tickW  = sec.isCh ? 9 : 5;
      const tickH  = sec.isCh ? 2 : 1;
      const tickC  = `rgba(155,191,181,${(opacity * 0.85).toFixed(3)})`;

      buf.push(
        `<div style="position:absolute;right:36px;top:${arcY.toFixed(1)}px;` +
        `width:${tickW}px;height:${tickH}px;background:${tickC};` +
        `transform:translateY(-50%);pointer-events:none;z-index:3;border-radius:1px;"></div>` +
        `<div class="disc-item${sec.isCh ? ' is-ch' : ' is-sub'}${isAct ? ' is-active' : ''}" data-i="${i}" ` +
        `style="right:${rightDist.toFixed(1)}px;top:${arcY.toFixed(1)}px;` +
        `max-width:${maxW.toFixed(0)}px;opacity:${opacity.toFixed(3)}">${sec.label}</div>`
      );
    });

    wrap.innerHTML = buf.join('');
  },

  _snapTo(target, cb) {
    const go = () => {
      const diff = target - this.rot;
      if (Math.abs(diff) < 0.02) { this.rot = target; this._render(); cb?.(); return; }
      this.rot += diff * 0.22;
      this._render();
      requestAnimationFrame(go);
    };
    go();
  },

  scrollTo(i) {
    const sec = this.secs[i];
    if (!sec?.el) return;
    const hH = document.querySelector('.header')?.offsetHeight      || 0;
    const tH = document.querySelector('.tem-tabs-bar')?.offsetHeight || 0;
    if (!sec.isCh) {
      const card = sec.el.closest('.card');
      if (card) {
        const root = document.getElementById('root');
        root.classList.add('disc-snap');
        document.querySelectorAll('#root .card.open').forEach(c => { if (c !== card) c.classList.remove('open'); });
        card.classList.add('open');
        requestAnimationFrame(() => {
          const top = sec.el.getBoundingClientRect().top + window.scrollY - hH - tH - 10;
          root.classList.remove('disc-snap');
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        });
        return;
      }
    }
    const top = sec.el.getBoundingClientRect().top + window.scrollY - hH - tH - 10;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  },

  _currentIdx() {
    const hH = document.querySelector('.header')?.offsetHeight      || 0;
    const tH = document.querySelector('.tem-tabs-bar')?.offsetHeight || 0;
    const topEdge = hH + tH + 10;
    let best = 0;
    this.secs.forEach((s, i) => {
      if (!s.el) return;
      if (s.el.getBoundingClientRect().top <= topEdge) best = i;
    });
    return best;
  },

  _blockFn: null,

  open() {
    if (!this.secs.length) this.build();
    if (!this.secs.length) return;
    this.rot = this._currentIdx();
    this.isOpen = true;
    if (!this._blockFn) {
      this._blockFn = e => e.preventDefault();
      document.addEventListener('touchmove', this._blockFn, { passive: false });
    }
    const wrap = document.getElementById('tem-disc-wrap');
    if (wrap) wrap.style.display = 'block';
    document.getElementById('tem-disc-btn')?.classList.add('is-open');
    this._render();
  },

  close() {
    this.isOpen = false;
    if (this._blockFn) {
      document.removeEventListener('touchmove', this._blockFn);
      this._blockFn = null;
    }
    const wrap = document.getElementById('tem-disc-wrap');
    if (wrap) wrap.style.display = 'none';
    document.getElementById('tem-disc-btn')?.classList.remove('is-open');
  },

  setVisible(v) {
    const btn = document.getElementById('tem-disc-btn');
    if (!btn) return;
    if (v) {
      this.build();
      requestAnimationFrame(() => {
        btn.style.display = this.secs.length ? 'flex' : 'none';
      });
    } else {
      btn.style.display = 'none';
      this.close();
    }
  },

  init() {
    const btn  = document.getElementById('tem-disc-btn');
    const wrap = document.getElementById('tem-disc-wrap');
    if (!btn) return;
    let startY = 0, startRot = 0, dragging = false;
    let _tmm = null, _tmu = null;
    const _detach = () => {
      if (_tmm) { document.removeEventListener('touchmove', _tmm); _tmm = null; }
      if (_tmu) { document.removeEventListener('touchend',  _tmu); _tmu = null; }
    };
    const onStart = (y) => {
      if (!this.secs.length) this.build();
      if (!this.secs.length) return;
      if (!this.isOpen) { this.rot = this._currentIdx(); this.open(); }
      dragging = true; startY = y; startRot = this.rot;
      _detach();
      _tmm = e => {
        e.preventDefault();
        this.rot = this._clamp(startRot + (e.touches[0].clientY - startY) * this.SPEED / (this.R * this.STEP));
        this._render();
      };
      _tmu = () => {
        _detach();
        if (!dragging) return;
        dragging = false;
        const t = Math.round(this._clamp(this.rot));
        this._snapTo(t, () => { this.scrollTo(t); setTimeout(() => this.close(), 380); });
      };
      document.addEventListener('touchmove', _tmm, { passive: false });
      document.addEventListener('touchend',  _tmu, { passive: false });
    };
    btn.addEventListener('touchstart', e => { e.preventDefault(); onStart(e.touches[0].clientY); }, { passive: false });
    btn.addEventListener('touchcancel', () => { _detach(); if (dragging) { dragging = false; this.close(); } });
    if (wrap) {
      wrap.addEventListener('touchstart',  e => { e.preventDefault(); onStart(e.touches[0].clientY); }, { passive: false });
      wrap.addEventListener('touchcancel', () => { _detach(); if (dragging) { dragging = false; this.close(); } });
    }
    const onMD = e => {
      e.preventDefault();
      if (!this.secs.length) this.build();
      if (!this.secs.length) return;
      if (!this.isOpen) { this.rot = this._currentIdx(); this.open(); }
      let sy = e.clientY, sr = this.rot;
      const mm = ev => { this.rot = this._clamp(sr + (ev.clientY - sy) * this.SPEED / (this.R * this.STEP)); this._render(); };
      const mu = () => {
        document.removeEventListener('mousemove', mm);
        document.removeEventListener('mouseup',   mu);
        const t = Math.round(this._clamp(this.rot));
        this._snapTo(t, () => { this.scrollTo(t); setTimeout(() => this.close(), 380); });
      };
      document.addEventListener('mousemove', mm);
      document.addEventListener('mouseup',   mu);
    };
    btn.addEventListener('mousedown', onMD);
    if (wrap) wrap.addEventListener('mousedown', onMD);
    document.addEventListener('touchstart', e => {
      if (!this.isOpen || dragging) return;
      if (!wrap?.contains(e.target) && !btn.contains(e.target)) this.close();
    }, { passive: true });
  },
};

// ==================== VIEW STATE ====================
let TEM_VIEW = 'tronco';
let TEM_QUERY = '';

function katexRoot(root) {
  if (typeof renderMathInElement === 'undefined') return;
  try {
    renderMathInElement(root, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  } catch(e) {}
}

function stagger(root) {
  root.querySelectorAll('.card').forEach((card, i) => {
    card.style.animationDelay = `${Math.min(i * 38, 480)}ms`;
  });
}

function renderView(root, view, query) {
  TEM_VIEW = view;
  const searchBar = document.getElementById('tem-search-bar');
  if (searchBar) searchBar.style.display = view === 'search' ? 'flex' : 'none';
  document.querySelectorAll('.tem-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.view === view);
  });
  if (view === 'tronco') {
    root.innerHTML = CURRICULUM.map(renderSemesterTronco).filter(Boolean).join('');
  } else if (view === 'optativas') {
    root.innerHTML = renderOptativasView();
  } else {
    TEM_QUERY = query !== undefined ? query : TEM_QUERY;
    root.innerHTML = renderSearchResults(TEM_QUERY);
  }
  document.documentElement.scrollTop = 0;
  stagger(root);
  katexRoot(root);
  TemDisc.reset();
  requestAnimationFrame(() => TemDisc.setVisible(view === 'tronco' || view === 'optativas'));
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) return;

  renderView(root, 'tronco');
  updateGlobalBadge();

  // ── Tab switching ────────────────────────────────────
  const temTabs = document.getElementById('tem-tabs');
  if (temTabs) {
    temTabs.addEventListener('click', e => {
      const tab = e.target.closest('[data-view]');
      if (!tab) return;
      renderView(root, tab.dataset.view);
      if (tab.dataset.view === 'search') {
        const inp = document.getElementById('tem-search-input');
        if (inp) setTimeout(() => inp.focus(), 60);
      }
    });
  }

  // ── Search input ─────────────────────────────────────
  const searchInput = document.getElementById('tem-search-input');
  const searchClear = document.getElementById('tem-search-clear');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      TEM_QUERY = searchInput.value;
      if (searchClear) searchClear.style.display = TEM_QUERY ? 'flex' : 'none';
      root.innerHTML = renderSearchResults(TEM_QUERY);
      stagger(root);
      katexRoot(root);
    });
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        TEM_QUERY = '';
        searchClear.style.display = 'none';
        root.innerHTML = renderSearchResults('');
        searchInput.focus();
      });
    }
  }

  // ==================== CLICK EVENTS ====================
  root.addEventListener('click', e => {

    // ── Tab switch ──────────────────────────────────────
    const tab = e.target.closest('[data-tab]');
    if (tab) {
      const cardId = tab.dataset.card;
      const tabName = tab.dataset.tab;
      const tabsEl = document.getElementById(`tabs-${cardId}`);
      if (tabsEl) {
        tabsEl.querySelectorAll('.tab').forEach(t => {
          t.classList.toggle('active', t.dataset.tab === tabName);
        });
      }
      ['temario', 'bib'].forEach(name => {
        const panel = document.getElementById(`tp-${name}-${cardId}`);
        if (panel) panel.classList.toggle('active', name === tabName);
      });
      return;
    }

    // ── Book card toggle ────────────────────────────────
    const bkToggle = e.target.closest('[data-bk-toggle]');
    if (bkToggle && !e.target.closest('.cap-check') && !e.target.closest('.chap-label')) {
      const key = bkToggle.dataset.bkToggle;
      const bkCard = document.getElementById(`bk-${key}`);
      if (bkCard) bkCard.classList.toggle('open');
      return;
    }

    // ── Chapter label click ─────────────────────────────
    const chapLabel = e.target.closest('.chap-label[data-bk-mat]');
    if (chapLabel) {
      const { bkMat, bkBook, bkCap } = chapLabel.dataset;
      const inp = root.querySelector(
        `.cap-check[data-bk-mat="${bkMat}"][data-bk-book="${bkBook}"][data-bk-cap="${bkCap}"]`
      );
      if (inp) {
        inp.checked = !inp.checked;
        inp.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return;
    }

    // ── Complementary bib toggle ────────────────────────
    const compToggle = e.target.closest('[data-comp-toggle]');
    if (compToggle) {
      const sect = document.getElementById(`comp-${compToggle.dataset.compToggle}`);
      if (sect) sect.classList.toggle('open');
      return;
    }

    // ── Subsecuente scroll ──────────────────────────────
    const subsecTag = e.target.closest('[data-scroll-to]');
    if (subsecTag) {
      const id = subsecTag.dataset.scrollTo;
      const needSwitch = TEM_VIEW !== 'tronco';
      if (needSwitch) renderView(root, 'tronco');
      setTimeout(() => {
        const card = document.getElementById(`card-${id}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('open', 'highlight-pulse');
          setTimeout(() => card.classList.remove('highlight-pulse'), 1600);
        }
      }, needSwitch ? 60 : 0);
      return;
    }

    // ── Optativa: add ───────────────────────────────────
    const addBtn = e.target.closest('[data-opt-add-sem]');
    if (addBtn) {
      const sem = parseInt(addBtn.dataset.optAddSem);
      const slot = parseInt(addBtn.dataset.optAddSlot);
      const wrap = document.getElementById(`opt-slot-${sem}-${slot}-wrap`);
      if (wrap) {
        const opening = !wrap.classList.contains('open');
        wrap.classList.toggle('open', opening);
        addBtn.classList.toggle('open', opening);
        if (opening) scrollCarouselToSelected(wrap);
      }
      return;
    }

    // ── Optativa: change ────────────────────────────────
    const changeBtn = e.target.closest('[data-opt-change-sem]');
    if (changeBtn) {
      const sem = parseInt(changeBtn.dataset.optChangeSem);
      const slot = parseInt(changeBtn.dataset.optChangeSlot);
      const wrap = document.getElementById(`opt-slot-${sem}-${slot}-wrap`);
      if (wrap) {
        wrap.classList.toggle('open');
        if (wrap.classList.contains('open')) scrollCarouselToSelected(wrap);
      }
      return;
    }

    // ── Optativa: remove ────────────────────────────────
    const removeBtn = e.target.closest('[data-opt-remove-sem]');
    if (removeBtn) {
      const sem = parseInt(removeBtn.dataset.optRemoveSem);
      const slot = parseInt(removeBtn.dataset.optRemoveSlot);
      clearOptSlot(sem, slot);
      rerenderAllOptSlots();
      updateSemProgress(sem);
      updateSemCredits(sem);
      updateGlobalBadge();
      return;
    }

    // ── Optativa: pick ──────────────────────────────────
    const optPick = e.target.closest('[data-opt-pick]');
    if (optPick) {
      const name = optPick.dataset.optPick;
      const sem = parseInt(optPick.dataset.optSem);
      const slot = parseInt(optPick.dataset.optSlot);
      const opt = getOptativasPool(sem).find(o => o.name === name);
      if (opt) {
        setOptSlot(sem, slot, opt);
        rerenderAllOptSlots();
        updateSemProgress(sem);
        updateSemCredits(sem);
        updateGlobalBadge();
      }
      return;
    }

    // ── Card toggle (must be last — widest selector) ────
    const toggle = e.target.closest('[data-toggle]');
    if (toggle && !e.target.closest('.opt-change-row')) {
      const matId = toggle.dataset.toggle;
      const card = document.getElementById(`card-${matId}`);
      if (card) card.classList.toggle('open');
    }
  });

  // ── Tema head click (collapse subtemas when done) ───
  root.addEventListener('click', e => {
    const temaHead = e.target.closest('.tema-head');
    if (!temaHead || e.target.closest('.tema-checkbox')) return;
    const item = temaHead.closest('.tema-item');
    if (!item || !item.classList.contains('done')) return;
    const matId = item.dataset.mat;
    const idx = parseInt(item.dataset.tema);
    const collapsed = !item.classList.contains('collapsed');
    item.classList.toggle('collapsed', collapsed);
    setTemaCollapsed(matId, idx, collapsed);
  }, true);

  // ==================== CHANGE EVENTS ====================
  root.addEventListener('change', e => {

    // ── Tema checkbox ───────────────────────────────────
    const tc = e.target.closest('.tema-checkbox');
    if (tc) {
      const matId = tc.dataset.tcMat;
      const idx = parseInt(tc.dataset.tcIdx);
      const done = tc.checked;
      setTemaDone(matId, idx, done);
      if (done) {
        tc.classList.remove('popping');
        void tc.offsetWidth;
        tc.classList.add('popping');
        tc.addEventListener('animationend', () => tc.classList.remove('popping'), { once: true });
      }
      const item = tc.closest('.tema-item');
      if (item) {
        item.classList.toggle('done', done);
        if (!done) {
          item.classList.remove('collapsed');
          setTemaCollapsed(matId, idx, false);
        }
      }
      const mat = findMat(matId);
      if (mat) {
        const pct = getMateriaProgress(mat);
        updateCircProgress(matId, pct);
        let sem = findSemForMat(matId);
        if (!sem) {
          const m = matId.match(/^opt_(\d+)_/);
          if (m) sem = CURRICULUM.find(s => s.semestre === parseInt(m[1]));
        }
        if (sem) updateSemProgress(sem.semestre);
      }
      updateGlobalBadge();
      return;
    }

    // ── Chapter checkbox ────────────────────────────────
    const cc = e.target.closest('.cap-check');
    if (cc) {
      const matId = cc.dataset.bkMat;
      const bookIdx = parseInt(cc.dataset.bkBook);
      const capIdx = parseInt(cc.dataset.bkCap);
      const caps = getBookCaps(matId, bookIdx);
      caps[capIdx] = cc.checked;
      setBookCaps(matId, bookIdx, caps);
      const mat = findMat(matId);
      if (mat && mat.bibBasicas && mat.bibBasicas[bookIdx]) {
        const bib = mat.bibBasicas[bookIdx];
        const total = (bib.caps || []).length;
        const read = caps.filter(Boolean).length;
        const pct = total ? Math.round(read / total * 100) : 0;
        const bar = document.getElementById(`bkbar-${matId}-${bookIdx}`);
        const badge = document.getElementById(`bkpct-${matId}-${bookIdx}`);
        if (bar) bar.style.width = `${pct}%`;
        if (badge) badge.textContent = `${pct}%`;
        const chapItem = cc.closest('.chap-item');
        if (chapItem) chapItem.classList.toggle('read', cc.checked);
      }
    }
  });

  TemDisc.init();
});
