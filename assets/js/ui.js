// ==================== CIRCULAR PROGRESS ====================
function renderCirc(pct) {
  const CIRC = 107;
  const offset = CIRC - (pct / 100) * CIRC;
  return `<div class="circ-wrap">
    <svg class="circ-svg" viewBox="0 0 46 46">
      <circle class="circ-bg" cx="23" cy="23" r="17"/>
      <circle class="circ-fg" cx="23" cy="23" r="17" style="stroke-dashoffset:${offset.toFixed(2)}"/>
    </svg>
    <span class="circ-num">${pct}%</span>
  </div>`;
}

// ==================== TEMA ITEM ====================
function renderTemaItem(matId, i, tema) {
  const done = getTemaDone(matId, i);
  const collapsed = done && getTemaCollapsed(matId, i);
  const cls = ['tema-item', done ? 'done' : '', collapsed ? 'collapsed' : ''].filter(Boolean).join(' ');
  const subtemas = (tema.subtemas || []).map(s => `<div class="subtema">${s}</div>`).join('');
  return `<div class="${cls}" data-mat="${matId}" data-tema="${i}">
    <div class="tema-head">
      <input type="checkbox" class="tema-checkbox" ${done ? 'checked' : ''}
        data-tc-mat="${matId}" data-tc-idx="${i}" aria-label="${tema.name}">
      <div class="tema-head-left">
        <span class="tema-num">${tema.num || i + 1}</span>
        <span class="tema-name">${tema.name}</span>
      </div>
      <div class="tema-meta">
        <span class="tema-hrs-badge">${tema.horas}h</span>
        <svg class="tema-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
      </div>
    </div>
    <div class="tema-subtemas">${subtemas}</div>
  </div>`;
}

// ==================== BOOK CARD (bibliografía básica) ====================
function renderBookCard(matId, bookIdx, bib) {
  const caps = getBookCaps(matId, bookIdx);
  const total = (bib.caps || []).length;
  const read = caps.filter(Boolean).length;
  const pct = total ? Math.round(read / total * 100) : 0;
  const chapItems = (bib.caps || []).map((cap, ci) => {
    const isRead = caps[ci] === true;
    return `<div class="chap-item${isRead ? ' read' : ''}">
      <input type="checkbox" class="cap-check" ${isRead ? 'checked' : ''}
        data-bk-mat="${matId}" data-bk-book="${bookIdx}" data-bk-cap="${ci}" aria-label="${cap}">
      <label class="chap-label"
        data-bk-mat="${matId}" data-bk-book="${bookIdx}" data-bk-cap="${ci}">${cap}</label>
    </div>`;
  }).join('');
  return `<div class="book-card" id="bk-${matId}-${bookIdx}">
    <div class="book-head" data-bk-toggle="${matId}-${bookIdx}">
      <div class="book-dot"></div>
      <span class="book-name">${bib.name}</span>
      <div class="book-right">
        <span class="book-pct-badge" id="bkpct-${matId}-${bookIdx}">${pct}%</span>
        <svg class="bk-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="book-prog-bar">
      <div class="book-prog-fill" id="bkbar-${matId}-${bookIdx}" style="width:${pct}%"></div>
    </div>
    <div class="book-body">
      <div class="chapters-list">${chapItems}</div>
    </div>
  </div>`;
}

// ==================== COMP BIB SECTION ====================
function renderCompBib(matId, bibComp) {
  if (!bibComp || !bibComp.length) return '';
  const entries = bibComp.map(b => `<div class="comp-entry">${b}</div>`).join('');
  return `<div class="comp-section" id="comp-${matId}">
    <div class="comp-toggle" data-comp-toggle="${matId}">
      <span class="comp-title">Bibliografía complementaria</span>
      <svg class="comp-chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    <div class="comp-body">${entries}</div>
  </div>`;
}

// ==================== SUBSECUENTES ====================
function renderSubsecuentes(subsecuentes) {
  if (!subsecuentes || !subsecuentes.length) return '';
  const nameToId = {};
  CURRICULUM.forEach(s => s.materias.forEach(m => { nameToId[m.name] = m.id; }));
  const tags = subsecuentes.map(name => {
    const id = nameToId[name];
    const cls = id ? 'subsec-tag' : 'subsec-tag no-link';
    const attr = id ? `data-scroll-to="${id}"` : '';
    return `<span class="${cls}" ${attr}>${name} <span class="subsec-tag-arrow">→</span></span>`;
  }).join('');
  return `<div class="subsec-block">
    <div class="subsec-label">Materias subsecuentes</div>
    <div class="subsec-tags">${tags}</div>
  </div>`;
}

// ==================== CARD BODY ====================
function renderCardBody(mat) {
  const temaItems = (mat.temario || [])
    .map((t, i) => renderTemaItem(mat.id, i, t)).join('');
  const bibCards = (mat.bibBasicas || [])
    .map((b, i) => renderBookCard(mat.id, i, b)).join('');

  const temarioPanel = `<div class="tab-panel active" id="tp-temario-${mat.id}">
    ${temaItems || '<div class="empty-card">Sin temario registrado</div>'}
  </div>`;

  const bibPanel = `<div class="tab-panel" id="tp-bib-${mat.id}">
    ${bibCards ? `<div class="sec-label">Básica</div>${bibCards}` : ''}
    ${renderCompBib(mat.id, mat.bibComp)}
  </div>`;

  return `<div class="card-body">
    <div class="tabs" id="tabs-${mat.id}">
      <div class="tab active" data-tab="temario" data-card="${mat.id}">Temario</div>
      <div class="tab" data-tab="bib" data-card="${mat.id}">Bibliografía</div>
    </div>
    ${temarioPanel}
    ${bibPanel}
    ${renderSubsecuentes(mat.subsecuentes)}
  </div>`;
}

// ==================== SUBJECT CARD ====================
function renderCard(mat) {
  const pct = getMateriaProgress(mat);
  const iconSrc = mat.icon || 'assets/images/d0.jpg';
  const iconHtml = `<img src="${iconSrc}" alt="${mat.name}" onerror="this.style.display='none'">`;
  return `<div class="card" id="card-${mat.id}">
    <div class="card-head" data-toggle="${mat.id}">
      <div class="card-icon">${iconHtml}</div>
      <div class="card-info">
        <div class="card-name">${mat.name}</div>
        <div class="card-meta">
          <span class="meta-pill">Clave <b>${mat.clave || '—'}</b></span>
          <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
        </div>
      </div>
      ${renderCirc(pct)}
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    ${renderCardBody(mat)}
  </div>`;
}

// ==================== OPTATIVA POOL ITEM ====================
function renderOptItem(opt, semNum, slotIdx) {
  const chosen = getOptSlot(semNum, slotIdx);
  const isSelected = chosen && chosen.name === opt.name;
  // Skip optativas already picked in another slot
  if (!isSelected && getAllChosenOptNames().includes(opt.name)) return '';
  const initials = opt.name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('').toUpperCase() || opt.name[0].toUpperCase();
  return `<div class="opt-item${isSelected ? ' selected' : ''}"
    data-opt-pick="${opt.name}" data-opt-sem="${semNum}" data-opt-slot="${slotIdx}">
    <div class="opt-item-icon">${initials}</div>
    <div class="opt-item-info">
      <div class="opt-item-name">${opt.name}</div>
      <div class="opt-item-meta">
        <span class="meta-pill"><b>${opt.creditos}</b> créditos</span>
      </div>
    </div>
  </div>`;
}

// ==================== OPTATIVA SLOT CONTENT ====================
function renderOptativaSlotContent(sem, slotIdx) {
  const chosen = getOptSlot(sem.semestre, slotIdx);
  const pool = getOptativasPool(sem.semestre);
  const slotId = `opt-slot-${sem.semestre}-${slotIdx}`;
  const carouselHtml = `<div class="opt-carousel-wrap" id="${slotId}-wrap">
    <div class="opt-carousel-viewport">
      <div class="opt-carousel-inner">
        <div class="opt-carousel-list">
          ${pool.map(o => renderOptItem(o, sem.semestre, slotIdx)).join('')}
        </div>
      </div>
    </div>
    <div class="opt-carousel-footer">
      <span class="opt-carousel-pos">${pool.length} opciones disponibles</span>
    </div>
  </div>`;

  if (chosen) {
    const mat = { ...enrichOptativa(chosen), id: `opt_${sem.semestre}_${slotIdx}` };
    const pct = getMateriaProgress(mat);
    const iconSrc = mat.icon || 'assets/images/d0.jpg';
    const iconHtml = `<img src="${iconSrc}" alt="${mat.name}" onerror="this.style.display='none'">`;
    return `<div class="card" id="card-opt_${sem.semestre}_${slotIdx}">
      <div class="card-head" data-toggle="opt_${sem.semestre}_${slotIdx}">
        <div class="card-icon">${iconHtml}</div>
        <div class="card-info">
          <div class="card-name">${mat.name}</div>
          <div class="card-meta">
            <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
            <span class="meta-pill">Optativa</span>
          </div>
        </div>
        ${renderCirc(pct)}
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="opt-change-row">
        <button class="opt-change-btn"
          data-opt-change-sem="${sem.semestre}" data-opt-change-slot="${slotIdx}">Cambiar</button>
        <button class="opt-remove-btn"
          data-opt-remove-sem="${sem.semestre}" data-opt-remove-slot="${slotIdx}">Quitar</button>
      </div>
      ${renderCardBody(mat)}
    </div>
    ${carouselHtml}`;
  }

  return `<button class="add-optativa-btn" id="${slotId}-btn"
    data-opt-add-sem="${sem.semestre}" data-opt-add-slot="${slotIdx}">
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    Añadir optativa
  </button>
  ${carouselHtml}`;
}

// ==================== OPTATIVA SLOT WRAPPER ====================
function renderOptativaSlot(sem, slotIdx) {
  return `<div id="opt-slot-${sem.semestre}-${slotIdx}-container">
    ${renderOptativaSlotContent(sem, slotIdx)}
  </div>`;
}

// ==================== SEMESTER SECTION ====================
function renderSemester(sem) {
  const pct = getSemPct(sem);
  const fixedCredits = sem.materias.reduce((s, m) => s + m.creditos, 0);
  const optCredits = Array.from({ length: sem.optativas || 0 }, (_, i) => getOptSlot(sem.semestre, i))
    .filter(Boolean).reduce((s, o) => s + (o.creditos || 0), 0);
  const tc = fixedCredits + optCredits;
  const cards = sem.materias.map(renderCard).join('');
  let optSlots = '';
  for (let i = 0; i < (sem.optativas || 0); i++) {
    optSlots += renderOptativaSlot(sem, i);
  }
  return `<div class="semester" id="sem-${sem.semestre}">
    <div class="sem-header">
      <span class="sem-title">${sem.titulo}</span>
      <span class="sem-credits-badge" id="sem-credits-${sem.semestre}">${tc} créditos</span>
    </div>
    <div class="sem-prog-row">
      <div class="sem-bar-track">
        <div class="sem-bar-fill" id="sem-bar-${sem.semestre}" style="width:${pct}%"></div>
      </div>
      <span class="sem-pct" id="sem-pct-${sem.semestre}">${pct}%</span>
    </div>
    <div class="sem-grid">
      ${cards}
      ${optSlots}
    </div>
  </div>`;
}
