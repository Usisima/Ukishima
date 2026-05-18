// ==================== MAPA CURRICULAR ==================== //
// Depends on: data.js (CURRICULUM, TOTAL_CREDITOS)
//             state.js (getMateriaProgress, getGlobalPct, getOptSlot)

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Build horizontal scroll columns
  root.innerHTML = CURRICULUM.map(sem => renderSemColumn(sem)).join('');

  // Update global badge
  document.getElementById('global-pct').textContent = getGlobalPct() + '%';

  // Modal events
  document.getElementById('map-backdrop').addEventListener('click', closeModal);

  // Touch-to-swipe-down to close modal
  let touchStartY = 0;
  const sheet = document.querySelector('.map-sheet');
  sheet.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  sheet.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - touchStartY;
    if (delta > 60) closeModal();
  }, { passive: true });

  // Delegate click on materia nodes
  root.addEventListener('click', e => {
    const node = e.target.closest('[data-mat-id]');
    if (node) openModal(node.dataset.matId, node.dataset.semNum);
  });

  // Keyboard: activate focused node on Enter/Space
  root.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const node = e.target.closest('[data-mat-id]');
      if (node) {
        e.preventDefault();
        openModal(node.dataset.matId, node.dataset.semNum);
      }
    }
  });

  // Mark active nav item
  document.querySelectorAll('.nav-item').forEach(a => {
    if (a.getAttribute('href') === 'mapa.html') {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});

// ==================== RENDER COLUMN ==================== //
function renderSemColumn(sem) {
  const materiaCards = sem.materias.map(mat => {
    const pct = getMateriaProgress(mat);
    const stateClass = pct === 100 ? 'completed' : pct > 0 ? 'in-progress' : '';
    const iconHtml = mat.icon
      ? `<div class="mat-node-icon"><img src="${mat.icon}" alt="" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`
      : '';
    return `<div class="mat-node ${stateClass}" data-mat-id="${mat.id}" data-sem-num="${sem.semestre}" role="button" tabindex="0" aria-label="${mat.name}">
      ${iconHtml}
      <div class="mat-node-name">${mat.name}</div>
      <div class="mat-node-meta">${mat.creditos} cr.</div>
      <div class="mat-node-bar"><div class="mat-node-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');

  // Optativa slots
  const optSlots = [];
  for (let i = 0; i < (sem.optativas || 0); i++) {
    const opt = getOptSlot(sem.semestre, i);
    if (opt) {
      const optMat = { id: `opt_${sem.semestre}_${i}`, temario: [], ...opt };
      const pct = getMateriaProgress(optMat);
      const stateClass = pct === 100 ? 'completed' : pct > 0 ? 'in-progress' : '';
      const iconHtml = opt.icon
        ? `<div class="mat-node-icon"><img src="${opt.icon}" alt="" loading="lazy" onerror="this.parentElement.style.display='none'"></div>`
        : '';
      optSlots.push(`<div class="mat-node mat-node-opt filled ${stateClass}" data-mat-id="opt_${sem.semestre}_${i}" data-sem-num="${sem.semestre}" role="button" tabindex="0" aria-label="${opt.name} (optativa)">
        ${iconHtml}
        <div class="mat-node-name">${opt.name}</div>
        <div class="mat-node-meta">Opt. · ${opt.creditos} cr.</div>
        <div class="mat-node-bar"><div class="mat-node-bar-fill" style="width:${pct}%"></div></div>
      </div>`);
    } else {
      optSlots.push(`<div class="mat-node mat-node-opt" aria-label="Optativa sin asignar">
        <div class="mat-node-name" style="color:var(--ink3)">Optativa</div>
        <div class="mat-node-meta">— sin asignar</div>
      </div>`);
    }
  }

  return `<div class="sem-column">
    <div class="sem-col-header">
      <div class="sem-col-num">Sem ${sem.semestre}</div>
      <div class="sem-col-title">${sem.titulo || 'Semestre ' + sem.semestre}</div>
    </div>
    ${materiaCards}
    ${optSlots.join('')}
  </div>`;
}

// ==================== MODAL ==================== //
function openModal(matId, semNum) {
  // Search mandatory materias first
  let mat = CURRICULUM.flatMap(s => s.materias).find(m => m.id === matId);

  // Fall back to optativa slot
  if (!mat && matId.startsWith('opt_')) {
    const parts = matId.split('_');
    const sem = parseInt(parts[1]);
    const slot = parseInt(parts[2]);
    const opt = getOptSlot(sem, slot);
    if (opt) {
      mat = {
        id: matId,
        name: opt.name,
        creditos: opt.creditos,
        icon: opt.icon || '',
        temario: opt.temario || [],
        clave: 'OPT'
      };
    }
  }

  if (!mat) return;

  const pct = getMateriaProgress(mat);
  const isOpt = mat.clave === 'OPT';
  const isComplete = pct === 100;

  // Icon block (only if icon exists)
  const iconHtml = mat.icon
    ? `<div class="map-sheet-icon"><img src="${mat.icon}" alt="" style="width:100%;height:100%;object-fit:cover" onerror="this.parentElement.style.display='none'"></div>`
    : '';

  // Clave pill
  const clavePill = isOpt
    ? `<span class="meta-pill">Optativa</span>`
    : `<span class="meta-pill">Clave <b>${mat.clave}</b></span>`;

  // Completion pill
  const completePill = isComplete
    ? `<span class="meta-pill" style="color:var(--gold);border-color:rgba(94,207,190,0.3)">✓ Completada</span>`
    : '';

  // Semester pill
  const semPill = semNum
    ? `<span class="meta-pill">Sem. <b>${semNum}</b></span>`
    : '';

  // Go button — link to temarios.html with anchor
  const goBtn = !isOpt || (mat.temario && mat.temario.length > 0)
    ? `<a href="temarios.html#${matId}" class="map-go-btn">Ver en Temarios →</a>`
    : `<a href="temarios.html" class="map-go-btn">Ver en Temarios →</a>`;

  const body = document.getElementById('map-sheet-body');
  body.innerHTML = `
    ${iconHtml}
    <div class="map-sheet-title">${mat.name}</div>
    <div class="map-sheet-meta">
      ${clavePill}
      <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
      ${semPill}
      ${completePill}
    </div>
    <div class="map-prog-label">Progreso del temario</div>
    <div class="map-prog-track"><div class="map-prog-fill" style="width:${pct}%"></div></div>
    <div class="map-prog-pct">${pct}%</div>
    ${goBtn}
  `;

  document.getElementById('map-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('map-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard accessibility: close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
