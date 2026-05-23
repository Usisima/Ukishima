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
  const iconHtml = `<img src="${iconSrc}" alt="${mat.name}" onerror="this.src='assets/images/d0.jpg'">`;
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
  const iconSrc = opt.icon || 'assets/images/d0.jpg';
  return `<div class="opt-item${isSelected ? ' selected' : ''}"
    data-opt-pick="${opt.name}" data-opt-sem="${semNum}" data-opt-slot="${slotIdx}">
    <div class="opt-item-icon"><img src="${iconSrc}" alt="" onerror="this.src='assets/images/d0.jpg'"></div>
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
    const iconHtml = `<img src="${iconSrc}" alt="${mat.name}" onerror="this.src='assets/images/d0.jpg'">`;
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

// ==================== TRONCO COMÚN — simplified renderers ====================
function renderTemaItemTronco(tema, i) {
  const subtemas = (tema.subtemas || []).map(s => `<div class="subtema">${s}</div>`).join('');
  return `<div class="tema-item">
    <div class="tema-head">
      <div class="tema-head-left">
        <span class="tema-num">${tema.num || i + 1}</span>
        <span class="tema-name">${tema.name}</span>
      </div>
      <div class="tema-meta"><span class="tema-hrs-badge">${tema.horas}h</span></div>
    </div>
    <div class="tema-subtemas">${subtemas}</div>
  </div>`;
}

function renderCardBodyTronco(mat) {
  const temaItems = (mat.temario || []).map((t, i) => renderTemaItemTronco(t, i)).join('');
  const bibButtons = (mat.bibBasicas || []).map((bib, i) => {
    const url = `libros.html#libro-mat/${mat.id}/${i}`;
    const parts = bib.name.split('—').map(s => s.trim());
    const authorPart = parts[0] || bib.name;
    const titlePart  = parts[1] || '';
    return `<a class="bib-btn" href="${url}">
      <span class="bib-btn-dot"></span>
      <span class="bib-btn-name"><b>${authorPart}</b>${titlePart ? ' — ' + titlePart : ''}</span>
      <span class="bib-btn-arrow">→</span>
    </a>`;
  }).join('');
  const compBib = renderCompBib(mat.id, mat.bibComp);
  return `<div class="card-body-tronco">
    <div class="tronco-temario-section">
      ${temaItems || '<div class="empty-card">Sin temario registrado</div>'}
    </div>
    ${bibButtons || compBib ? `<div class="tronco-bib-section">
      <div class="tronco-sec-label">Bibliografía</div>
      ${bibButtons}
      ${compBib}
    </div>` : ''}
    ${renderSubsecuentes(mat.subsecuentes)}
  </div>`;
}

function renderCardTronco(mat) {
  const iconSrc = mat.icon || 'assets/images/d0.jpg';
  return `<div class="card" id="card-${mat.id}">
    <div class="card-head" data-toggle="${mat.id}">
      <div class="card-icon"><img src="${iconSrc}" alt="${mat.name}" onerror="this.src='assets/images/d0.jpg'"></div>
      <div class="card-info">
        <div class="card-name">${mat.name}</div>
        <div class="card-meta">
          ${mat._tag ? `<span class="meta-pill meta-tag">${mat._tag}</span>` : ''}
          <span class="meta-pill">Clave <b>${mat.clave || '—'}</b></span>
          <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
        </div>
      </div>
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
    ${renderCardBodyTronco(mat)}
  </div>`;
}

// ==================== SEMESTER SECTION (tronco — no optativa slots, no progress) ====================
function renderSemesterTronco(sem) {
  if (!sem.materias.length) return '';
  const totalCreds = sem.materias.reduce((s, m) => s + (m.creditos || 0), 0);
  const cards = sem.materias.map(renderCardTronco).join('');
  return `<div class="semester" id="sem-${sem.semestre}">
    <div class="sem-header">
      <span class="sem-title">${sem.titulo}</span>
      <span class="sem-credits-badge">${totalCreds} créditos</span>
    </div>
    <div class="sem-grid">${cards}</div>
  </div>`;
}

// ==================== OPTATIVAS VIEW ====================
function renderOptativasView() {
  const BLOQUES = [
    { key: 'BI',   num: 'I',   pool: OPTATIVAS_BLOQUE_I,   semLabel: 'Semestre 2 · 3 · 4', creds: 40 },
    { key: 'BII',  num: 'II',  pool: OPTATIVAS_BLOQUE_II,  semLabel: 'Semestre 5 · 6',      creds: 40 },
    { key: 'BIII', num: 'III', pool: OPTATIVAS_BLOQUE_III, semLabel: 'Semestre 7 · 8',      creds: 80 },
  ];
  return BLOQUES.map(b => {
    const cards = b.pool.map((opt, i) => {
      const mat = { ...enrichOptativa(opt), id: `opt_${b.key}_${i}` };
      return renderCardTronco(mat);
    }).join('');
    return `<div class="opt-bloque-section">
      <div class="opt-bloque-head">
        <div class="opt-bloque-head-left">
          <span class="opt-bloque-title">Bloque ${b.num}</span>
          <span class="opt-bloque-sem-label">${b.semLabel}</span>
        </div>
        <span class="opt-bloque-badge">${b.creds} créditos</span>
      </div>
      <div class="sem-grid">${cards}</div>
    </div>`;
  }).join('');
}

// ==================== SEARCH RESULTS ====================
const _SRCH_POOLS = [
  { key: 'BI',   pool: OPTATIVAS_BLOQUE_I },
  { key: 'BII',  pool: OPTATIVAS_BLOQUE_II },
  { key: 'BIII', pool: OPTATIVAS_BLOQUE_III },
];

function _allSearchMats() {
  const fixed = CURRICULUM.flatMap(s =>
    s.materias.map(m => ({ ...m, _tag: 'Sem. ' + s.semestre }))
  );
  const BLOQUE_NAMES = ['I', 'II', 'III'];
  const opts = _SRCH_POOLS.flatMap(({ key, pool }, bi) =>
    pool.map((opt, i) => ({
      ...enrichOptativa(opt),
      id: `opt_${key}_${i}`,
      _tag: 'Bloque ' + BLOQUE_NAMES[bi],
    }))
  );
  return [...fixed, ...opts].sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

function renderSearchResults(query) {
  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  const q = norm((query || '').trim());
  if (!q) {
    const all = _allSearchMats();
    return '<div class="sem-grid">' + all.map(renderCardTronco).join('') + '</div>';
  }
  const words = q.split(/\s+/);
  function hit(text) {
    const t = norm(text);
    return words.every(w => t.includes(w));
  }
  const matches = _allSearchMats().filter(mat =>
    hit(mat.name) || hit(mat.clave)
  );
  if (!matches.length) return '<div class="search-empty">Sin resultados</div>';
  return '<div class="sem-grid">' + matches.map(renderCardTronco).join('') + '</div>';
}

// ==================== SEMESTER SECTION (full — with optativa slots) ====================
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
