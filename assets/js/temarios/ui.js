// ==================== CONSTANTES DERIVADAS ====================
const OPTATIVAS_OTRAS_SAFE = (typeof OPTATIVAS_OTRAS !== 'undefined' ? OPTATIVAS_OTRAS : []);

// Escapado HTML para todo texto interpolado en innerHTML
function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let _nameToIdCache = null;
function _getNameToId() {
  if (_nameToIdCache) return _nameToIdCache;
  const map = {};
  CURRICULUM.forEach(s => s.materias.forEach(m => { map[m.name] = m.id; }));
  [['BI', OPTATIVAS_BLOQUE_I], ['BII', OPTATIVAS_BLOQUE_II], ['BIII', OPTATIVAS_BLOQUE_III],
   ['OTRAS', OPTATIVAS_OTRAS_SAFE]]
    .forEach(([key, pool]) => pool.forEach((opt, i) => { map[opt.name] = `opt_${key}_${i}`; }));
  _nameToIdCache = map;
  return map;
}

let _allMatsCache = null;

// ==================== COMP BIB SECTION ====================
function renderCompBib(matId, bibComp) {
  if (!bibComp || !bibComp.length) return '';
  const entries = bibComp.map(b => `<div class="comp-entry">${esc(b)}</div>`).join('');
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
  const nameToId = _getNameToId();
  const tags = subsecuentes.map(name => {
    const id = nameToId[name];
    const cls = id ? 'subsec-tag' : 'subsec-tag no-link';
    const attr = id ? `data-scroll-to="${id}"` : '';
    return `<span class="${cls}" ${attr}>${esc(name)} <span class="subsec-tag-arrow">→</span></span>`;
  }).join('');
  return `<div class="subsec-block">
    <div class="subsec-label">Materias subsecuentes</div>
    <div class="subsec-tags">${tags}</div>
  </div>`;
}

// ==================== TRONCO COMÚN — renderers ====================
function renderTemaItemTronco(tema, i) {
  const subtemas = (tema.subtemas || []).map(s => `<div class="subtema">${esc(s)}</div>`).join('');
  return `<div class="tema-item">
    <div class="tema-head">
      <div class="tema-head-left">
        <span class="tema-num">${tema.num || i + 1}</span>
        <span class="tema-name">${esc(tema.name)}</span>
      </div>
      <div class="tema-meta"><span class="tema-hrs-badge">${tema.horas}h</span></div>
    </div>
    <div class="tema-subtemas">${subtemas}</div>
  </div>`;
}

function renderCardBodyTronco(mat) {
  const temaItems = (mat.temario || []).map((t, i) => renderTemaItemTronco(t, i)).join('');
  const bibButtons = (mat.bibBasicas || []).map((bib, i) => {
    // Optativas usan el nombre como clave (el id posicional opt_BI_N no existe en libros-data)
    const libKey = mat.id.startsWith('opt_') ? encodeURIComponent(mat.name) : mat.id;
    const url = `libros.html#libro-mat/${libKey}/${i}`;
    const parts = bib.name.split('—').map(s => s.trim());
    const authorPart = parts[0] || bib.name;
    const titlePart  = parts[1] || '';
    return `<a class="bib-btn" href="${url}">
      <span class="bib-btn-dot"></span>
      <span class="bib-btn-name"><b>${esc(authorPart)}</b>${titlePart ? ' — ' + esc(titlePart) : ''}</span>
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

function renderCardTronco(mat, extraClass) {
  const iconSrc = mat.icon || 'assets/images/d0.webp';
  const cls = extraClass ? `card ${extraClass}` : 'card';
  return `<div class="${cls}" id="card-${mat.id}">
    <div class="card-head" data-toggle="${mat.id}">
      <div class="card-icon"><img src="${iconSrc}" alt="${esc(mat.name)}" loading="lazy" decoding="async" onerror="this.src='assets/images/d0.webp'"></div>
      <div class="card-info">
        <div class="card-name">${esc(mat.name)}</div>
        <div class="card-meta">
          ${mat._tag ? `<span class="meta-pill meta-tag">${esc(mat._tag)}</span>` : ''}
          <span class="meta-pill">Clave <b>${esc(mat.clave || '—')}</b></span>
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
      <span class="sem-title">${esc(sem.titulo)}</span>
      <span class="sem-credits-badge">${totalCreds} créditos</span>
    </div>
    <div class="sem-grid">${cards}</div>
  </div>`;
}

// ==================== OPTATIVAS VIEW ====================
function renderOptativasView() {
  const BLOQUES = [
    { key: 'BI',    num: 'I',     pool: OPTATIVAS_BLOQUE_I,   semLabel: 'Semestre 2 · 3 · 4', creds: 40 },
    { key: 'BII',   num: 'II',   pool: OPTATIVAS_BLOQUE_II,  semLabel: 'Semestre 5 · 6',      creds: 40 },
    { key: 'BIII',  num: 'III',  pool: OPTATIVAS_BLOQUE_III, semLabel: 'Semestre 7 · 8',      creds: 80 },
    { key: 'OTRAS', num: 'Otras', pool: OPTATIVAS_OTRAS_SAFE, semLabel: 'Sin bloque asignado', creds: null },
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
        ${b.creds != null ? `<span class="opt-bloque-badge">${b.creds} créditos</span>` : ''}
      </div>
      <div class="sem-grid">${cards}</div>
    </div>`;
  }).join('');
}

// ==================== SEARCH RESULTS ====================
const _SRCH_POOLS = [
  { key: 'BI',    pool: OPTATIVAS_BLOQUE_I },
  { key: 'BII',   pool: OPTATIVAS_BLOQUE_II },
  { key: 'BIII',  pool: OPTATIVAS_BLOQUE_III },
  { key: 'OTRAS', pool: OPTATIVAS_OTRAS_SAFE },
];

function _allSearchMats() {
  if (_allMatsCache) return _allMatsCache;
  const fixed = CURRICULUM.flatMap(s => s.materias.map(m => ({ ...m })));
  const opts = _SRCH_POOLS.flatMap(({ key, pool }) =>
    pool.map((opt, i) => ({ ...enrichOptativa(opt), id: `opt_${key}_${i}` }))
  );
  _allMatsCache = [...fixed, ...opts].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  // Índice de búsqueda precalculado: nombre + clave + temario + subtemas
  _allMatsCache.forEach(m => {
    m._idx = _searchNorm([
      m.name, m.clave,
      ...(m.temario || []).flatMap(t => [t.name, ...(t.subtemas || [])]),
    ].join(' '));
  });
  return _allMatsCache;
}

function _searchNorm(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function _searchHit(mat, words) {
  if (!words.length) return true;
  const idx = mat._idx || _searchNorm(`${mat.name} ${mat.clave}`);
  return words.every(w => idx.includes(w));
}

// Renderiza TODAS las cards de una vez; las no-coincidentes quedan ocultas.
// Solo se llama en el render inicial de la vista search.
function renderSearchResults(query) {
  const words = _searchNorm((query || '').trim()).split(/\s+/).filter(Boolean);
  const all = _allSearchMats();
  const cards = all.map(mat =>
    renderCardTronco(mat, _searchHit(mat, words) ? '' : 'card-search-hidden')
  ).join('');
  const hasMatch = all.some(mat => _searchHit(mat, words));
  const empty = (!hasMatch && words.length) ? '<div class="search-empty">Sin resultados</div>' : '';
  return `<div class="sem-grid">${cards}</div>${empty}`;
}

// Actualiza la vista sin re-render: anima out las que dejan de coincidir,
// anima in las que pasan a coincidir. Las ya visibles y coincidentes no se tocan.
function updateSearchResults(root, query) {
  const words = _searchNorm((query || '').trim()).split(/\s+/).filter(Boolean);
  const allMats = _allSearchMats();
  const matMap = new Map(allMats.map(m => [m.id, m]));

  let matchCount = 0;
  let revealIdx = 0;

  root.querySelectorAll('.card').forEach(card => {
    const mat = matMap.get(card.id.slice(5)); // strip 'card-'
    const matches = mat ? _searchHit(mat, words) : false;
    const isHidden = card.classList.contains('card-search-hidden');
    const isExiting = card.classList.contains('card-search-exit');

    if (matches) {
      matchCount++;
      if (isExiting) {
        // Cancelar salida en curso
        card.classList.remove('card-search-exit');
      } else if (isHidden) {
        // Revelar con animación de entrada
        card.style.animationDelay = `${Math.min(revealIdx * 28, 220)}ms`;
        card.classList.remove('card-search-hidden');
        void card.offsetWidth; // fuerza reflow para reiniciar cardSlideIn
        revealIdx++;
      }
      // ya visible y sigue coincidiendo → sin cambios
    } else {
      if (!isHidden && !isExiting) {
        card.classList.add('card-search-exit');
        const done = () => {
          card.removeEventListener('animationend', done);
          card.classList.remove('card-search-exit');
          card.classList.add('card-search-hidden');
        };
        card.addEventListener('animationend', done);
      }
    }
  });

  // Mensaje "Sin resultados"
  let emptyEl = root.querySelector('.search-empty');
  if (matchCount === 0 && words.length) {
    if (!emptyEl) {
      emptyEl = document.createElement('div');
      emptyEl.className = 'search-empty';
      emptyEl.textContent = 'Sin resultados';
      root.appendChild(emptyEl);
    }
  } else if (emptyEl) {
    emptyEl.remove();
  }
}

