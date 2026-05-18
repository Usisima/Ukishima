// ==================== SCROLL HANDLER PARA CAROUSEL ====================
function handleCarouselScroll(e) {
  const vp = e.target.closest('.opt-carousel-viewport');
  if (!vp) return;
  const sem = parseInt(vp.id.replace('opt-vp-', ''));
  const items = vp.querySelectorAll('.opt-item');
  if (!items.length) return;
  
  const vpRect = vp.getBoundingClientRect();
  const vpCenter = vpRect.top + vpRect.height / 2;
  let closestIdx = 0, closestDist = Infinity;
  
  items.forEach((item, i) => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const dist = Math.abs(itemCenter - vpCenter);
    if (dist < closestDist) { closestDist = dist; closestIdx = i; }
  });
  
  const cs = getCarousel(sem);
  cs.selectedIdx = closestIdx;
  items.forEach((item, i) => item.classList.toggle('selected', i === closestIdx));
  
  const posEl = document.getElementById(`opt-pos-${sem}`);
  if (posEl) posEl.textContent = `${closestIdx + 1} / ${getAvailableOpts(sem).length}`;
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  const root = document.getElementById('root');
  root.innerHTML = CURRICULUM.map((sem, i) => renderSemester(sem, i)).join('');

  // ==================== EVENT LISTENERS ====================
  root.addEventListener('click', e => {
    // Toggle carousel
    const tc2 = e.target.closest('[data-toggle-carousel]');
    if (tc2) {
      const sem = parseInt(tc2.dataset.toggleCarousel);
      const cs = getCarousel(sem);
      cs.open = !cs.open;
      tc2.classList.toggle('open', cs.open);
      const wrap = document.getElementById(`opt-carousel-${sem}`);
      if (wrap) wrap.classList.toggle('open', cs.open);
      return;
    }
    
    // Select optativa
    const oi = e.target.closest('[data-opt-item]');
    if (oi) {
      const [sem, itemIdx] = oi.dataset.optItem.split('-').map(Number);
      const available = getAvailableOpts(sem);
      const chosen = available[itemIdx];
      if (!chosen) return;

      const semObj = CURRICULUM.find(s => s.semestre === sem);
      let slot = -1;
      for (let i = 0; i < (semObj.optativas || 0); i++) {
        if (!getOptSlot(sem, i)) { slot = i; break; }
      }
      if (slot < 0) return;

      setOptSlot(sem, slot, chosen);
      const cs = getCarousel(sem);
      cs.open = false;
      cs.selectedIdx = 0;
      rerenderSemester(sem);
      updateAllUI();
      return;
    }
    
    // Remove optativa
    const orb = e.target.closest('[data-opt-remove]');
    if (orb) {
      const [sem, slot] = orb.dataset.optRemove.split('-').map(Number);
      clearOptSlot(sem, slot);
      rerenderSemester(sem);
      updateAllUI();
      return;
    }
    
    // Toggle card
    const ct = e.target.closest('[data-toggle-card]');
    if (ct) {
      document.querySelector(`[data-materia="${ct.dataset.toggleCard}"]`)?.classList.toggle('open');
      return;
    }
    
    // Switch tab
    const tab = e.target.closest('[data-tab-target]');
    if (tab) {
      const tid = tab.dataset.tabTarget;
      tab.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tab.closest('.card-body').querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === tid));
      return;
    }
    
    // Toggle tema collapse
    const th = e.target.closest('[data-tema-toggle]');
    if (th && !e.target.closest('.tema-checkbox')) {
      const key = th.dataset.temaToggle;
      const allIds = CURRICULUM.flatMap(s => s.materias).map(m => m.id);
      let materiaId = null, temaIdx = null;
      for (const id of allIds) {
        if (key.startsWith(id + '-')) {
          materiaId = id;
          temaIdx = parseInt(key.slice(id.length + 1));
          break;
        }
      }
      if (!materiaId) return;
      const temaEl = document.getElementById(`tema-${materiaId}-${temaIdx}`);
      if (!temaEl || !temaEl.classList.contains('done')) return;
      const isCollapsed = temaEl.classList.contains('collapsed');
      temaEl.classList.toggle('collapsed', !isCollapsed);
      setTemaCollapsed(materiaId, temaIdx, !isCollapsed);
      return;
    }
    
    // Toggle book
    const bt = e.target.closest('[data-toggle-book]');
    if (bt) {
      document.querySelector(`[data-book="${bt.dataset.toggleBook}"]`)?.classList.toggle('open');
      return;
    }
    
    // Toggle complementary bibliography
    const compt = e.target.closest('[data-toggle-comp]');
    if (compt) {
      document.querySelector(`[data-comp="${compt.dataset.toggleComp}"]`)?.classList.toggle('open');
      return;
    }
    
    // Navigate to subsecuente
    const nav = e.target.closest('[data-nav]');
    if (nav) {
      const mid = nav.dataset.nav;
      const cardEl = document.getElementById(buildMateriaId(mid));
      if (cardEl) {
        cardEl.classList.add('open');
        setTimeout(() => {
          const head = cardEl.querySelector('.card-head');
          const hh = document.querySelector('.header')?.offsetHeight || 0;
          window.scrollTo({
            top: (head || cardEl).getBoundingClientRect().top + window.scrollY - hh - 12,
            behavior: 'smooth'
          });
          cardEl.classList.add('highlight-pulse');
          setTimeout(() => cardEl.classList.remove('highlight-pulse'), 1600);
        }, 100);
      }
    }
  });

  // ==================== CHANGE EVENTS ====================
  root.addEventListener('change', e => {
    // Tema checkbox
    const tc = e.target.closest('.tema-checkbox');
    if (tc) {
      const mid = tc.dataset.temaCheck, ti = parseInt(tc.dataset.temaIdx), checked = tc.checked;
      setTemaDone(mid, ti, checked);
      const temaEl = document.getElementById(`tema-${mid}-${ti}`);
      if (temaEl) {
        temaEl.classList.toggle('done', checked);
        if (!checked) {
          temaEl.classList.remove('collapsed');
          setTemaCollapsed(mid, ti, false);
        }
      }
      updateAllUI();
      return;
    }
    
    // Book chapter checkbox
    const cc = e.target.closest('.cap-check');
    if (cc) {
      const { mid, bi } = cc.dataset, biN = parseInt(bi);
      const container = document.querySelector(`[data-caps="${mid}-${biN}"]`);
      const allCaps = container.querySelectorAll('.cap-check');
      const states = Array.from(allCaps).map(cb => cb.checked);
      setBookCaps(mid, biN, states);
      allCaps.forEach(cb => cb.closest('.chap-item')?.classList.toggle('read', cb.checked));
      updateAllUI();
    }
  });

  // Scroll en carousel
  root.addEventListener('scroll', handleCarouselScroll, true);
});