// ==================== INICIALIZACIÓN ====================
async function init() {
  console.log('🚀 Iniciando aplicación...');
  
  // 1. Cargar datos enriquecidos
  await UI.loadEnrichedData();
  
  // 2. Renderizar todos los semestres
  const root = document.getElementById('root');
  if (!root) {
    console.error('❌ No se encontró el elemento #root');
    return;
  }
  
  root.innerHTML = CURRICULUM.map((sem, index) => UI.renderSemester(sem, index)).join('');
  
  // 3. Configurar event listeners
  setupEventListeners();
  
  // 4. Actualizar UI inicial
  UI.updateAllUI();
  
  console.log('✅ Aplicación lista');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  const root = document.getElementById('root');
  
  // Click events
  root.addEventListener('click', handleClick);
  
  // Change events (checkboxes)
  root.addEventListener('change', handleChange);
}

function handleClick(e) {
  // Toggle card open/close
  const toggleCard = e.target.closest('[data-toggle-card]');
  if (toggleCard) {
    const materiaId = toggleCard.dataset.toggleCard;
    const card = document.querySelector(`[data-materia="${materiaId}"]`);
    if (card) {
      const isOpen = !card.classList.contains('open');
      card.classList.toggle('open');
      State.setCardOpen(materiaId, isOpen);
    }
    return;
  }
  
  // Switch tabs
  const tab = e.target.closest('[data-tab-target]');
  if (tab) {
    const targetId = tab.dataset.tabTarget;
    const cardBody = tab.closest('.card-body');
    cardBody.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    cardBody.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
    return;
  }
  
  // Toggle tema collapse (solo si está completado)
  const temaToggle = e.target.closest('[data-tema-toggle]');
  if (temaToggle && !e.target.closest('.tema-checkbox')) {
    const [materiaId, temaIdx] = temaToggle.dataset.temaToggle.split('-').reduce((acc, val, idx, arr) => {
      if (idx === arr.length - 1) return [arr.slice(0, -1).join('-'), val];
      return acc;
    }, []);
    
    const temaEl = document.getElementById(`tema-${temaToggle.dataset.temaToggle}`);
    if (temaEl && temaEl.classList.contains('done')) {
      const isCollapsed = !temaEl.classList.contains('collapsed');
      temaEl.classList.toggle('collapsed');
      State.setTemaCollapsed(materiaId, parseInt(temaIdx), isCollapsed);
    }
    return;
  }
  
  // Toggle book expand
  const bookToggle = e.target.closest('[data-toggle-book]');
  if (bookToggle) {
    const bookCard = document.querySelector(`[data-book="${bookToggle.dataset.toggleBook}"]`);
    if (bookCard) bookCard.classList.toggle('open');
    return;
  }
  
  // Toggle complementary bibliography
  const compToggle = e.target.closest('[data-toggle-comp]');
  if (compToggle) {
    const compSection = document.querySelector(`[data-comp="${compToggle.dataset.toggleComp}"]`);
    if (compSection) compSection.classList.toggle('open');
    return;
  }
  
  // Navigate to subsecuente materia
  const navLink = e.target.closest('[data-nav]');
  if (navLink) {
    const targetId = navLink.dataset.nav;
    const targetCard = document.getElementById(`card-${targetId}`);
    if (targetCard) {
      targetCard.classList.add('open');
      State.setCardOpen(targetId, true);
      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlight-pulse');
        setTimeout(() => targetCard.classList.remove('highlight-pulse'), 1600);
      }, 100);
    }
    return;
  }
}

function handleChange(e) {
  // Tema checkbox
  const temaCheck = e.target.closest('.tema-checkbox');
  if (temaCheck) {
    const materiaId = temaCheck.dataset.temaCheck;
    const temaIdx = parseInt(temaCheck.dataset.temaIdx);
    const checked = temaCheck.checked;
    
    State.setTemaDone(materiaId, temaIdx, checked);
    
    const temaEl = document.getElementById(`tema-${materiaId}-${temaIdx}`);
    if (temaEl) {
      temaEl.classList.toggle('done', checked);
      if (!checked) {
        temaEl.classList.remove('collapsed');
        State.setTemaCollapsed(materiaId, temaIdx, false);
      }
    }
    
    UI.updateAllUI();
    return;
  }
  
  // Book chapter checkbox
  const capCheck = e.target.closest('.cap-check');
  if (capCheck) {
    const materiaId = capCheck.dataset.mid;
    const bookIdx = parseInt(capCheck.dataset.bi);
    const container = document.querySelector(`[data-caps="${materiaId}-${bookIdx}"]`);
    
    if (container) {
      const allChecks = container.querySelectorAll('.cap-check');
      const states = Array.from(allChecks).map(cb => cb.checked);
      State.setBookCaps(materiaId, bookIdx, states);
      
      allChecks.forEach(cb => {
        cb.closest('.chap-item')?.classList.toggle('read', cb.checked);
      });
      
      UI.updateAllUI();
    }
    return;
  }
}

// ==================== INICIAR CUANDO EL DOM ESTÉ LISTO ====================
document.addEventListener('DOMContentLoaded', init);