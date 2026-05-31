// ==================== UPDATE FUNCTIONS ====================
function updateGlobalBadge() {
  const badge = document.getElementById('global-pct');
  if (badge) badge.textContent = `${getGlobalPct()}%`;
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

    // ── Arc guide (dashed circle) ────────────────────────────────
    buf.push(
      `<svg style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:visible" aria-hidden="true">` +
      `<circle cx="${(W + L).toFixed(0)}" cy="${cy.toFixed(0)}" r="${R}" ` +
      `fill="none" stroke="rgba(155,191,181,0.13)" stroke-width="1" stroke-dasharray="2 8" stroke-linecap="round"/>` +
      `</svg>`
    );

    // ── Selector needle ─────────────────────────────────────────
    const armLen = R - L - 48; // tip aligns with active tick mark
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
      const maxW = Math.max(50, W + L - R - 8);
      const opacity = Math.max(0.04, 1 - Math.abs(theta) * 0.9);
      const isAct  = i === active;
      const tickW  = sec.isCh ? 9 : 5;
      const tickH  = sec.isCh ? 2 : 1;
      const tickC  = `rgba(155,191,181,${(opacity * 0.85).toFixed(3)})`;
      const tickR  = Math.max(3, rightDist - tickW - 3);

      buf.push(
        `<div style="position:absolute;right:${tickR.toFixed(1)}px;top:${arcY.toFixed(1)}px;` +
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
    document.documentElement.style.overflow = 'hidden'; // freeze page scroll
    if (!this._blockFn) {
      this._blockFn = e => e.preventDefault();
      document.addEventListener('touchmove', this._blockFn, { passive: false });
    }
    const wrap = document.getElementById('tem-disc-wrap');
    if (wrap) {
      wrap.style.display = 'block';
      wrap.classList.remove('disc-opening');
      void wrap.offsetWidth; // force reflow → restart animation
      wrap.classList.add('disc-opening');
    }
    document.getElementById('tem-disc-btn')?.classList.add('is-open');
    this._render();
  },

  close() {
    this.isOpen = false;
    document.documentElement.style.overflow = ''; // restore scroll
    if (this._blockFn) {
      document.removeEventListener('touchmove', this._blockFn);
      this._blockFn = null;
    }
    const wrap = document.getElementById('tem-disc-wrap');
    if (wrap) {
      wrap.classList.remove('disc-opening');
      wrap.classList.add('disc-closing');
      setTimeout(() => {
        wrap.style.display = 'none';
        wrap.classList.remove('disc-closing');
      }, 280);
    }
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
        this._snapTo(t, () => { this.scrollTo(t); this.close(); });
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
        this._snapTo(t, () => { this.scrollTo(t); this.close(); });
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
  let i = 0;
  root.querySelectorAll('.card').forEach(card => {
    if (!card.classList.contains('card-search-hidden')) {
      card.style.animationDelay = `${Math.min(i * 38, 480)}ms`;
      i++;
    }
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
  // Reset instantáneo para no chocar con el scroll programático posterior
  document.documentElement.style.scrollBehavior = 'auto';
  document.documentElement.scrollTop = 0;
  document.documentElement.style.scrollBehavior = '';
  stagger(root);
  katexRoot(root);
  TemDisc.reset();
  requestAnimationFrame(() => TemDisc.setVisible(view === 'tronco' || view === 'optativas'));
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) return;

  // Stamp initial entry so back from #search stays in the SPA
  history.scrollRestoration = 'manual';
  history.replaceState({ view: 'tronco' }, '', location.href);

  renderView(root, 'tronco');
  updateGlobalBadge();

  // ── Helper: reset search state ───────────────────────
  const resetSearch = () => {
    TEM_QUERY = '';
    const si = document.getElementById('tem-search-input');
    if (si) si.value = '';
    const sc = document.getElementById('tem-search-clear');
    if (sc) sc.style.display = 'none';
  };

  // ── Helper: navigate to a tab with history entry ─────
  const navTo = (view) => {
    resetSearch();
    history.pushState({ view }, '', view === 'tronco' ? '#' : `#${view}`);
    renderView(root, view);
    if (view === 'search') {
      const inp = document.getElementById('tem-search-input');
      if (inp) setTimeout(() => inp.focus(), 60);
    }
  };

  // ── Browser back/forward ─────────────────────────────
  window.addEventListener('popstate', e => {
    resetSearch();
    renderView(root, (e.state || {}).view || 'tronco', '');
  });

  // ── Tab switching ────────────────────────────────────
  const temTabs = document.getElementById('tem-tabs');
  if (temTabs) {
    temTabs.addEventListener('click', e => {
      const tab = e.target.closest('[data-view]');
      if (!tab) return;
      navTo(tab.dataset.view);
    });
  }

  // ── Search input ─────────────────────────────────────
  const searchInput = document.getElementById('tem-search-input');
  const searchClear = document.getElementById('tem-search-clear');
  if (searchInput) {
    let _searchTimer;
    searchInput.addEventListener('input', () => {
      TEM_QUERY = searchInput.value;
      if (searchClear) searchClear.style.display = TEM_QUERY ? 'flex' : 'none';
      clearTimeout(_searchTimer);
      _searchTimer = setTimeout(() => {
        updateSearchResults(root, TEM_QUERY);
      }, 150);
    });
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        clearTimeout(_searchTimer);
        searchInput.value = '';
        TEM_QUERY = '';
        searchClear.style.display = 'none';
        updateSearchResults(root, '');
        searchInput.focus();
      });
    }
  }

  // ==================== CLICK EVENTS ====================
  root.addEventListener('click', e => {

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
      const targetView = id.startsWith('opt_B') ? 'optativas' : 'tronco';
      const needSwitch = TEM_VIEW !== targetView;
      if (needSwitch) renderView(root, targetView);

      const doScroll = () => {
        const card = document.getElementById(`card-${id}`);
        if (!card) return;
        const hH = document.querySelector('.header')?.offsetHeight      || 0;
        const tH = document.querySelector('.tem-tabs-bar')?.offsetHeight || 0;
        let absTop = 0, el = card;
        while (el) { absTop += el.offsetTop; el = el.offsetParent; }
        card.getAnimations().forEach(a => a.finish());
        card.classList.add('open', 'highlight-pulse');
        setTimeout(() => {
          card.classList.remove('highlight-pulse');
          requestAnimationFrame(() => card.getAnimations().forEach(a => a.finish()));
        }, 1600);
        window.scrollTo({ top: Math.max(0, absTop - hH - tH - 10), behavior: 'smooth' });
      };

      if (needSwitch) {
        requestAnimationFrame(() => requestAnimationFrame(doScroll));
      } else {
        doScroll();
      }
      return;
    }

    // ── Card toggle ─────────────────────────────────────
    const toggle = e.target.closest('[data-toggle]');
    if (toggle) {
      const card = document.getElementById(`card-${toggle.dataset.toggle}`);
      if (card) card.classList.toggle('open');
    }
  });

  TemDisc.init();
});
