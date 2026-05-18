// ==================== DATOS ENRIQUECIDOS (SE CARGAN ASÍNCRONAMENTE) ====================
let enrichedData = {};

async function loadEnrichedData() {
  try {
    const response = await fetch('../../data/optativas-data.json');
    enrichedData = await response.json();
    console.log('✅ Datos enriquecidos cargados');
  } catch (error) {
    console.warn('⚠️ No se pudieron cargar datos enriquecidos:', error);
  }
}

// ==================== FUNCIONES DE ENRIQUECIMIENTO ====================
function enrichMateria(mat) {
  const extra = enrichedData[mat.name];
  if (!extra) return mat;
  return { ...mat, ...extra };
}

// ==================== RENDERIZADO DE COMPONENTES ====================
function renderTemario(mat) {
  if (!mat.temario || mat.temario.length === 0) {
    return '<div style="padding:1rem;color:var(--text-dim);font-size:12px;">Temario en construcción</div>';
  }
  
  return mat.temario.map((tema, index) => {
    const done = State.getTemaDone(mat.id, index);
    const collapsed = done && State.getTemaCollapsed(mat.id, index);
    const horas = tema.horas || ((tema.subtemas || []).length * 2);
    const subtemas = (tema.subtemas || [])
      .map(s => `<div class="subtema">${s}</div>`)
      .join('');
    
    return `
      <div class="tema-item ${done ? 'done' : ''} ${collapsed ? 'collapsed' : ''}" id="tema-${mat.id}-${index}">
        <div class="tema-head" data-tema-toggle="${mat.id}-${index}">
          <div class="tema-head-left">
            <span class="tema-num">${tema.num}</span>
            <span class="tema-name">${tema.name}</span>
          </div>
          <div class="tema-meta">
            <span class="tema-hrs-badge">${horas}h</span>
            <svg class="tema-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="3,5 7,9 11,5"/>
            </svg>
            <input class="tema-checkbox" type="checkbox" ${done ? 'checked' : ''} 
                   data-tema-check="${mat.id}" data-tema-idx="${index}" 
                   onclick="event.stopPropagation()">
          </div>
        </div>
        <div class="tema-subtemas">${subtemas}</div>
      </div>`;
  }).join('');
}

function renderBiblio(mat) {
  const books = (mat.bibBasicas || []).map((bk, bi) => {
    const caps = State.getBookCaps(mat.id, bi);
    const done = caps.filter(Boolean).length;
    const pct = bk.caps.length ? Math.round(done / bk.caps.length * 100) : 0;
    
    const chapters = bk.caps.map((c, ci) => {
      const checked = caps[ci] === true;
      return `
        <div class="chap-item ${checked ? 'read' : ''}">
          <input class="cap-check" type="checkbox" ${checked ? 'checked' : ''} 
                 data-mid="${mat.id}" data-bi="${bi}" data-ci="${ci}">
          <span class="chap-label">${c}</span>
        </div>`;
    }).join('');
    
    return `
      <div class="book-card" data-book="${mat.id}-${bi}">
        <div class="book-head" data-toggle-book="${mat.id}-${bi}">
          <div class="book-dot"></div>
          <span class="book-name">${bk.name}</span>
          <div class="book-right">
            <span class="book-pct-badge" data-book-pct="${mat.id}-${bi}">${pct}%</span>
            <svg class="bk-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <polyline points="3,5 7,9 11,5"/>
            </svg>
          </div>
        </div>
        <div class="book-prog-bar">
          <div class="book-prog-fill" data-book-bar="${mat.id}-${bi}" style="width:${pct}%"></div>
        </div>
        <div class="book-body">
          <div class="chapters-list" data-caps="${mat.id}-${bi}">${chapters}</div>
        </div>
      </div>`;
  }).join('');
  
  const comp = (mat.bibComp || [])
    .map(c => `<div class="comp-entry">${c}</div>`)
    .join('') || '<div class="comp-entry">Sin referencias complementarias</div>';
  
  return `
    <div class="sec-label">Bibliografía Básica</div>
    <div style="padding:0 1rem">${books}</div>
    <div class="comp-section" data-comp="${mat.id}">
      <div class="comp-toggle" data-toggle-comp="${mat.id}">
        <span class="comp-title">Complementaria · ${(mat.bibComp || []).length}</span>
        <svg class="comp-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
          <polyline points="3,5 7,9 11,5"/>
        </svg>
      </div>
      <div class="comp-body">${comp}</div>
    </div>`;
}

function renderSubsecuentes(mat) {
  const tags = (mat.subsecuentes || []).map(name => {
    const found = CURRICULUM.flatMap(s => s.materias).find(m => m.name === name);
    if (found) {
      return `<span class="subsec-tag" data-nav="${found.id}">${name} <span class="subsec-tag-arrow">↗</span></span>`;
    }
    return `<span class="subsec-tag no-link">${name}</span>`;
  }).join('');
  
  return `
    <div class="subsec-block">
      <div class="subsec-label">Materias Subsecuentes</div>
      <div class="subsec-tags">${tags || '<span class="subsec-tag no-link">—</span>'}</div>
    </div>`;
}

function renderCard(mat) {
  const pct = State.getMateriaProgress(mat);
  const offset = 107 - (107 * pct / 100);
  const cardId = `card-${mat.id}`;
  const isOpen = State.getCardOpen(mat.id);
  
  return `
    <div class="card ${isOpen ? 'open' : ''}" id="${cardId}" data-materia="${mat.id}">
      <div class="card-head" data-toggle-card="${mat.id}">
        <div class="card-icon">
          <img src="${mat.icon || '../assets/images/default.jpg'}" alt="${mat.name}" 
               onerror="this.src='../assets/images/default.jpg'">
        </div>
        <div class="card-info">
          <div class="card-name">${mat.name}</div>
          <div class="card-meta">
            <span class="meta-pill">Clave <b>${mat.clave || 'OPT'}</b></span>
            <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">
          <div class="circ-wrap">
            <svg class="circ-svg" viewBox="0 0 46 46">
              <circle class="circ-bg" cx="23" cy="23" r="17"/>
              <circle class="circ-fg" cx="23" cy="23" r="17" style="stroke-dashoffset:${offset}"/>
            </svg>
            <span class="circ-num">${pct}%</span>
          </div>
          <svg class="chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="5,7 10,13 15,7"/>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <div class="tabs">
          <div class="tab active" data-tab-target="${mat.id}-temario">Temario</div>
          <div class="tab" data-tab-target="${mat.id}-biblio">Bibliografía</div>
        </div>
        <div class="tab-panel active" id="${mat.id}-temario">${renderTemario(mat)}</div>
        <div class="tab-panel" id="${mat.id}-biblio" style="padding:0">${renderBiblio(mat)}</div>
        ${renderSubsecuentes(mat)}
      </div>
    </div>`;
}

function renderSemester(sem, index) {
  const pct = State.getSemPct(sem);
  const totalCreditos = sem.materias.reduce((s, m) => s + m.creditos, 0) + (sem.optativas * 10);
  
  // Enriquece materias obligatorias
  const enrichedMaterias = sem.materias.map(m => enrichMateria(m));
  
  // Obtiene optativas seleccionadas
  const optativasHTML = [];
  for (let i = 0; i < sem.optativas; i++) {
    const opt = State.getOptSlot(sem.semestre, i);
    if (opt) {
      const enriched = enrichMateria(opt);
      optativasHTML.push(renderCard(enriched));
    }
  }
  
  const cardsHTML = enrichedMaterias.map(m => renderCard(m)).join('');
  
  const content = cardsHTML + optativasHTML.join('') || 
    '<div class="empty-card">· · · por cursar · · ·</div>';
  
  return `
    <section class="semester" id="semester-${sem.semestre}">
      <div class="sem-header">
        <span class="sem-title">${sem.titulo}</span>
        ${totalCreditos ? `<span class="sem-credits-badge">${totalCreditos} créditos</span>` : ''}
      </div>
      <div class="sem-prog-row">
        <div class="sem-bar-track">
          <div class="sem-bar-fill" id="sem-fill-${index}" style="width:${pct}%"></div>
        </div>
        <span class="sem-pct" id="sem-pct-${index}">${pct}%</span>
      </div>
      <div class="sem-grid">${content}</div>
    </section>`;
}

function updateAllUI() {
  // Actualiza progreso global
  const globalBadge = document.getElementById('global-pct');
  if (globalBadge) {
    globalBadge.textContent = `${State.getGlobalPct()}%`;
  }
  
  // Actualiza cada semestre
  CURRICULUM.forEach((sem, i) => {
    const pct = State.getSemPct(sem);
    const fillBar = document.getElementById(`sem-fill-${i}`);
    const pctText = document.getElementById(`sem-pct-${i}`);
    
    if (fillBar) fillBar.style.width = `${pct}%`;
    if (pctText) pctText.textContent = `${pct}%`;
    
    // Actualiza progreso de cada materia
    sem.materias.forEach(mat => {
      const p = State.getMateriaProgress(mat);
      const cardEl = document.getElementById(`card-${mat.id}`);
      if (cardEl) {
        const fg = cardEl.querySelector('.circ-fg');
        const cn = cardEl.querySelector('.circ-num');
        if (fg) fg.style.strokeDashoffset = 107 - (107 * p / 100);
        if (cn) cn.textContent = `${p}%`;
      }
    });
  });
}

// ==================== EXPORTAR ====================
window.UI = {
  loadEnrichedData,
  renderSemester,
  renderCard,
  updateAllUI
};