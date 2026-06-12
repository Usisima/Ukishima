// ==================== UPDATE FUNCTIONS ====================
function updateGlobalBadge() {
  const badge = document.getElementById('global-pct');
  if (badge) badge.textContent = `${getGlobalPct()}%`;
}

// ==================== DISC SCRUBBER (temarios) ====================
const TemDisc = {
  secs: [], rot: 0, isOpen: false,
  R: 580, LEDGE: 460, STEP: 0.07, SPEED: 4.5,

  reset() { this.secs = []; this.rot = 0; this._nodes = null; },

  build() {
    this.secs = [];
    this._nodes = null;
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

  _nodes: null, _cy: 0, _W: 0, _H: 0,

  // Crea los nodos una sola vez por apertura; _render solo actualiza estilos
  _buildNodes() {
    const wrap = document.getElementById('tem-disc-wrap');
    if (!wrap) return;
    const W = window.innerWidth, H = window.innerHeight;
    const R = this.R, L = this.LEDGE;
    const btnRect = document.getElementById('tem-disc-btn')?.getBoundingClientRect();
    const cy = btnRect ? (btnRect.top + btnRect.bottom) / 2 : H / 2;
    this._cy = cy; this._W = W; this._H = H;

    const armLen = R - L - 48; // tip aligns with active tick mark
    wrap.innerHTML =
      `<svg style="position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:visible" aria-hidden="true">` +
      `<circle cx="${(W + L).toFixed(0)}" cy="${cy.toFixed(0)}" r="${R}" ` +
      `fill="none" stroke="rgba(155,191,181,0.13)" stroke-width="1" stroke-dasharray="2 8" stroke-linecap="round"/>` +
      `</svg>` +
      `<div style="position:absolute;right:36px;top:${(cy - 0.5).toFixed(0)}px;` +
      `width:${armLen}px;height:1px;` +
      `background:linear-gradient(to left,rgba(155,191,181,0.7),rgba(155,191,181,0.04));` +
      `pointer-events:none;z-index:4;"></div>` +
      `<div style="position:absolute;right:${(35 + armLen).toFixed(0)}px;top:${(cy - 3.5).toFixed(0)}px;` +
      `width:7px;height:7px;border-radius:50%;` +
      `background:rgba(155,191,181,0.6);box-shadow:0 0 6px rgba(155,191,181,0.4);` +
      `pointer-events:none;z-index:4;"></div>`;

    const maxW = Math.max(50, W + L - R - 8);
    const frag = document.createDocumentFragment();
    this._nodes = this.secs.map((sec, i) => {
      const tick = document.createElement('div');
      const tickW = sec.isCh ? 9 : 5;
      tick.style.cssText =
        `position:absolute;width:${tickW}px;height:${sec.isCh ? 2 : 1}px;` +
        `transform:translateY(-50%);pointer-events:none;z-index:3;border-radius:1px;display:none;`;
      const label = document.createElement('div');
      label.className = `disc-item${sec.isCh ? ' is-ch' : ' is-sub'}`;
      label.dataset.i = i;
      label.style.maxWidth = `${maxW.toFixed(0)}px`;
      label.style.display = 'none';
      label.textContent = sec.label;
      frag.appendChild(tick);
      frag.appendChild(label);
      return { tick, label, tickW };
    });
    wrap.appendChild(frag);
  },

  _render() {
    if (!this._nodes || window.innerWidth !== this._W || window.innerHeight !== this._H) {
      this._buildNodes();
      if (!this._nodes) return;
    }
    const W = this._W, H = this._H, cy = this._cy;
    const R = this.R, L = this.LEDGE, S = this.STEP;
    const active = Math.round(this._clamp(this.rot));

    this._nodes.forEach((node, i) => {
      const theta = (i - this.rot) * S;
      const arcY  = cy + R * Math.sin(theta);
      if (arcY < -40 || arcY > H + 40) {
        node.tick.style.display = 'none';
        node.label.style.display = 'none';
        return;
      }
      const arcX = W + L - R * Math.cos(theta);
      const rightDist = W - arcX;
      const opacity = Math.max(0.04, 1 - Math.abs(theta) * 0.9);
      const top = `${arcY.toFixed(1)}px`;

      node.tick.style.display = '';
      node.tick.style.top = top;
      node.tick.style.right = `${Math.max(3, rightDist - node.tickW - 3).toFixed(1)}px`;
      node.tick.style.background = `rgba(155,191,181,${(opacity * 0.85).toFixed(3)})`;

      node.label.style.display = '';
      node.label.style.top = top;
      node.label.style.right = `${rightDist.toFixed(1)}px`;
      node.label.style.opacity = opacity.toFixed(3);
      node.label.classList.toggle('is-active', i === active);
    });

    const btn = document.getElementById('tem-disc-btn');
    if (btn) {
      btn.setAttribute('aria-valuenow', active);
      const lbl = this.secs[active]?.label;
      if (lbl) btn.setAttribute('aria-valuetext', lbl);
    }
  },

  _snapId: 0,
  _snapTo(target, cb) {
    cancelAnimationFrame(this._snapId);
    const go = () => {
      const diff = target - this.rot;
      if (Math.abs(diff) < 0.02) { this.rot = target; this._render(); cb?.(); return; }
      this.rot += diff * 0.22;
      this._render();
      this._snapId = requestAnimationFrame(go);
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
    this._buildNodes();
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

    // ── Accesibilidad: el botón es un slider operable con teclado ──
    btn.tabIndex = 0;
    btn.setAttribute('role', 'slider');
    btn.setAttribute('aria-label', 'Navegador de secciones');
    btn.setAttribute('aria-orientation', 'vertical');
    btn.setAttribute('aria-valuemin', '0');

    const ensureOpen = () => {
      if (!this.secs.length) this.build();
      if (!this.secs.length) return false;
      btn.setAttribute('aria-valuemax', String(this.secs.length - 1));
      if (!this.isOpen) { this.rot = this._currentIdx(); this.open(); }
      return true;
    };

    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (!ensureOpen()) return;
        const t = this._clamp(Math.round(this.rot) + (e.key === 'ArrowDown' ? 1 : -1));
        this._snapTo(t);
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (!this.isOpen) return;
        e.preventDefault();
        const t = Math.round(this._clamp(this.rot));
        this.scrollTo(t);
        this.close();
      } else if (e.key === 'Escape' && this.isOpen) {
        e.preventDefault();
        this.close();
      }
    });

    // ── Rueda del mouse (desktop) ──
    let _wheelT = null;
    const onWheel = e => {
      e.preventDefault();
      if (!ensureOpen()) return;
      cancelAnimationFrame(this._snapId);
      this.rot = this._clamp(this.rot + (e.deltaY > 0 ? 0.6 : -0.6));
      this._render();
      clearTimeout(_wheelT);
      _wheelT = setTimeout(() => {
        const t = Math.round(this._clamp(this.rot));
        this._snapTo(t, () => { this.scrollTo(t); this.close(); });
      }, 350);
    };
    btn.addEventListener('wheel', onWheel, { passive: false });
    if (wrap) wrap.addEventListener('wheel', onWheel, { passive: false });

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

// Abre una card por id, la resalta y hace scroll hasta ella
function scrollToCard(id) {
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

  // Deep-link inicial: #optativas, #search, o #mat/<id> (compartible)
  const _hash = location.hash || '';
  let _initView = 'tronco';
  let _deepLinkId = null;
  if (_hash === '#optativas' || _hash === '#search') {
    _initView = _hash.slice(1);
  } else if (_hash.startsWith('#mat/')) {
    _deepLinkId = decodeURIComponent(_hash.slice(5));
    _initView = _deepLinkId.startsWith('opt_') ? 'optativas' : 'tronco';
  }

  // Stamp initial entry so back from #search stays in the SPA
  history.scrollRestoration = 'manual';
  history.replaceState({ view: _initView }, '', location.href);

  renderView(root, _initView);
  updateGlobalBadge();

  if (_deepLinkId) {
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToCard(_deepLinkId)));
  }

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

      if (needSwitch) {
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToCard(id)));
      } else {
        scrollToCard(id);
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
