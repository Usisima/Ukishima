// ==================== DOM HELPERS ====================
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

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = CURRICULUM.map(renderSemester).join('');
  updateGlobalBadge();

  // Staggered card entrance
  root.querySelectorAll('.card').forEach((card, i) => {
    card.style.animationDelay = `${Math.min(i * 38, 480)}ms`;
  });

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
      const card = document.getElementById(`card-${id}`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('open', 'highlight-pulse');
        setTimeout(() => card.classList.remove('highlight-pulse'), 1600);
      }
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
});
