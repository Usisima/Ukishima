/* ═══════════════════════════════════════════════
   libros.js  —  NotePlayer · Subpágina Libros
   ═══════════════════════════════════════════════ */

/* ── SAMPLE DATA (reemplazar con data.js real) ── */
const LIBROS = [
  { id:1, title:"Cálculo: Una Variable", author:"James Stewart", cat:"calculo", emoji:"📘", edition:"8ª ed.", topics:["Límites","Derivadas","Integrales","Series"], desc:"Texto clásico de cálculo diferencial e integral para una variable, ampliamente usado en ingeniería y ciencias." },
  { id:2, title:"Álgebra Lineal y sus Aplicaciones", author:"David Lay", cat:"algebra", emoji:"📐", edition:"5ª ed.", topics:["Vectores","Matrices","Espacios vectoriales","Transformaciones"], desc:"Introducción rigurosa y aplicada al álgebra lineal, con enfoque en la comprensión geométrica." },
  { id:3, title:"Probabilidad y Estadística", author:"Walpole & Myers", cat:"estadistica", emoji:"📊", edition:"9ª ed.", topics:["Probabilidad","Variables aleatorias","Inferencia","Regresión"], desc:"Manual completo de probabilidad y estadística matemática para ingenieros y científicos." },
  { id:4, title:"Análisis Real", author:"Walter Rudin", cat:"analisis", emoji:"📗", edition:"3ª ed.", topics:["Sucesiones","Continuidad","Diferenciabilidad","Integración"], desc:"Texto fundacional del análisis real moderno, conocido por su rigor y concisión." },
  { id:5, title:"Geometría Diferencial de Curvas y Superficies", author:"Do Carmo", cat:"geometria", emoji:"🔺", edition:"2ª ed.", topics:["Curvas","Superficies","Curvatura","Geodésicas"], desc:"Referencia estándar en geometría diferencial clásica, indispensable para física teórica y matemáticas avanzadas." },
  { id:6, title:"Cálculo Multivariable", author:"James Stewart", cat:"calculo", emoji:"📙", edition:"8ª ed.", topics:["Vectores 3D","Derivadas parciales","Integrales múltiples","Stokes"], desc:"Continuación del cálculo de una variable, con extensión a funciones de varias variables y cálculo vectorial." },
  { id:7, title:"Álgebra Abstracta", author:"Dummit & Foote", cat:"algebra", emoji:"🔷", edition:"3ª ed.", topics:["Grupos","Anillos","Campos","Teoría de Galois"], desc:"Texto exhaustivo de álgebra abstracta, referencia principal en licenciaturas y posgrados de matemáticas." },
  { id:8, title:"Estadística Matemática", author:"Hogg, McKean & Craig", cat:"estadistica", emoji:"📉", edition:"8ª ed.", topics:["Distribuciones","Estimación","Pruebas de hipótesis","Análisis no paramétrico"], desc:"Tratamiento riguroso de la estadística matemática con fundamentos de teoría de la probabilidad." },
  { id:9, title:"Topología General", author:"James Munkres", cat:"analisis", emoji:"🔵", edition:"2ª ed.", topics:["Espacios métricos","Compacidad","Conexidad","Espacios de Hausdorff"], desc:"Introducción canónica a la topología general, usado en prácticamente todos los programas de matemáticas." },
  { id:10, title:"Geometría Euclidiana y sus Generalizaciones", author:"Robin Hartshorne", cat:"geometria", emoji:"📏", edition:"1ª ed.", topics:["Axiomas de Euclides","Geometría no euclidiana","Geometría proyectiva"], desc:"Explora los fundamentos de la geometría desde Euclides hasta las geometrías modernas." },
];

/* ── STATE ────────────────────────────────────── */
const state = {
  view: 'grid',        // 'grid' | 'list'
  filter: 'all',       // category key
  sort: 'title',       // 'title' | 'author' | 'cat'
  query: '',
  favs: loadFavs(),
  searchOpen: false,
  filterOpen: false,
};

function loadFavs() {
  try { return JSON.parse(localStorage.getItem('libros_favs') || '[]'); }
  catch { return []; }
}
function saveFavs() {
  try { localStorage.setItem('libros_favs', JSON.stringify(state.favs)); }
  catch {}
}
function isFav(id) { return state.favs.includes(id); }
function toggleFav(id) {
  if (isFav(id)) state.favs = state.favs.filter(f => f !== id);
  else state.favs.push(id);
  saveFavs();
}

/* ── FILTER + SORT ────────────────────────────── */
function getFiltered() {
  let list = [...LIBROS];
  if (state.filter !== 'all') list = list.filter(b => b.cat === state.filter);
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.cat.includes(q) ||
      b.topics.some(t => t.toLowerCase().includes(q))
    );
  }
  list.sort((a, b) => {
    if (state.sort === 'title') return a.title.localeCompare(b.title, 'es');
    if (state.sort === 'author') return a.author.localeCompare(b.author, 'es');
    if (state.sort === 'cat') return a.cat.localeCompare(b.cat, 'es');
    return 0;
  });
  return list;
}

/* ── STATS ────────────────────────────────────── */
function updateStats() {
  document.getElementById('stat-total').textContent = LIBROS.length;
  document.getElementById('stat-favs').textContent = state.favs.length;
  const cats = new Set(LIBROS.map(b => b.cat));
  document.getElementById('stat-cats').textContent = cats.size;
}

/* ── COVER COLOR ──────────────────────────────── */
const catColors = {
  calculo:    'linear-gradient(135deg,#1a2540,#2d3f6e)',
  algebra:    'linear-gradient(135deg,#1e2830,#2e4a3e)',
  estadistica:'linear-gradient(135deg,#25201a,#4a3728)',
  geometria:  'linear-gradient(135deg,#1e1a2a,#3d2e58)',
  analisis:   'linear-gradient(135deg,#1a2520,#284038)',
};
function coverBg(book) { return catColors[book.cat] || 'var(--s2)'; }

/* ── RENDER RECENT ────────────────────────────── */
function renderRecent() {
  const recent = [...LIBROS].slice(-5).reverse();
  const container = document.getElementById('recent-scroll');
  container.innerHTML = recent.map(b => `
    <div class="mini-card" onclick="openModal(${b.id})">
      <div class="mini-cover" style="background:${coverBg(b)}">
        <span>${b.emoji}</span>
        <div class="fav-dot ${isFav(b.id) ? 'faved' : ''}"
          onclick="event.stopPropagation();favToggleGrid(${b.id},this)">
          ${isFav(b.id) ? '♥' : '♡'}
        </div>
      </div>
      <div class="mini-info">
        <div class="mini-title">${b.title}</div>
        <div class="mini-meta">${b.author}</div>
      </div>
    </div>
  `).join('');
}

/* ── RENDER GRID ──────────────────────────────── */
function renderGrid(books) {
  const grid = document.getElementById('lib-grid');
  const empty = document.getElementById('empty-state');
  if (!books.length) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  grid.innerHTML = books.map((b, i) => `
    <div class="lib-grid-card" style="animation-delay:${i * 30}ms" onclick="openModal(${b.id})">
      <div class="lib-grid-cover" style="background:${coverBg(b)}">
        <span>${b.emoji}</span>
        <div class="lib-cat-badge">${b.cat}</div>
        <div class="fav-dot ${isFav(b.id) ? 'faved' : ''}"
          onclick="event.stopPropagation();favToggleGrid(${b.id},this)">
          ${isFav(b.id) ? '♥' : '♡'}
        </div>
      </div>
      <div class="lib-grid-info">
        <div class="lib-grid-name">${b.title}</div>
        <div class="lib-grid-auth">${b.author}</div>
      </div>
    </div>
  `).join('');
}

/* ── RENDER LIST ──────────────────────────────── */
function renderList(books) {
  const list = document.getElementById('lib-list');
  if (!books.length) { list.innerHTML = ''; return; }
  list.innerHTML = books.map((b, i) => `
    <div class="lib-list-item" style="animation-delay:${i * 25}ms" onclick="openModal(${b.id})">
      <div class="ll-cover" style="background:${coverBg(b)}">
        <span>${b.emoji}</span>
      </div>
      <div class="ll-info">
        <div class="ll-title">${b.title}</div>
        <div class="ll-author">${b.author}</div>
        <span class="ll-cat">${b.cat}</span>
      </div>
      <div class="ll-actions">
        <button class="ll-fav ${isFav(b.id) ? 'faved' : ''}"
          onclick="event.stopPropagation();favToggleList(${b.id},this)">
          ${isFav(b.id) ? '♥' : '♡'}
        </button>
        <span class="ll-open">Ver →</span>
      </div>
    </div>
  `).join('');
}

/* ── RENDER ALL ───────────────────────────────── */
function render() {
  const books = getFiltered();
  updateStats();
  if (state.view === 'grid') {
    document.getElementById('grid-section').classList.remove('hidden');
    document.getElementById('list-section').classList.add('hidden');
    renderGrid(books);
  } else {
    document.getElementById('grid-section').classList.add('hidden');
    document.getElementById('list-section').classList.remove('hidden');
    renderList(books);
  }
}

/* ── FAV TOGGLE (inline, no modal) ───────────── */
function favToggleGrid(id, el) {
  toggleFav(id);
  el.textContent = isFav(id) ? '♥' : '♡';
  el.classList.toggle('faved', isFav(id));
  updateStats();
}
function favToggleList(id, el) {
  toggleFav(id);
  el.textContent = isFav(id) ? '♥' : '♡';
  el.classList.toggle('faved', isFav(id));
  updateStats();
}

/* ── MODAL ────────────────────────────────────── */
function openModal(id) {
  const b = LIBROS.find(x => x.id === id);
  if (!b) return;
  const modal = document.getElementById('book-modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-header">
      <div class="modal-cover" style="background:${coverBg(b)}">
        <span>${b.emoji}</span>
      </div>
      <div class="modal-meta">
        <div class="modal-title">${b.title}</div>
        <div class="modal-author">${b.author}</div>
        <span class="modal-cat">${b.cat}</span>
        <div class="modal-edition">${b.edition}</div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="action-btn primary" onclick="alert('Abrir PDF…')">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        Leer PDF
      </button>
      <button class="action-btn ${isFav(id) ? 'faved' : ''}" id="modal-fav-btn" onclick="modalToggleFav(${id})">
        ${isFav(id) ? '♥ Guardado' : '♡ Guardar'}
      </button>
    </div>
    <div class="modal-desc-label">Descripción</div>
    <p class="modal-desc">${b.desc}</p>
    <div class="modal-desc-label" style="margin-top:1rem">Temas</div>
    <div class="modal-topics">
      ${b.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('book-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function modalToggleFav(id) {
  toggleFav(id);
  const btn = document.getElementById('modal-fav-btn');
  if (btn) {
    btn.textContent = isFav(id) ? '♥ Guardado' : '♡ Guardar';
    btn.classList.toggle('faved', isFav(id));
  }
  updateStats();
  render();
}

/* ── CONTROLS ─────────────────────────────────── */
document.getElementById('modal-backdrop').addEventListener('click', closeModal);

// Search toggle
document.getElementById('btn-search-toggle').addEventListener('click', () => {
  state.searchOpen = !state.searchOpen;
  const wrap = document.getElementById('search-bar-wrap');
  wrap.style.display = state.searchOpen ? 'block' : 'none';
  if (state.searchOpen) document.getElementById('lib-search-input').focus();
  else { state.query = ''; document.getElementById('lib-search-input').value = ''; render(); }
  document.getElementById('btn-search-toggle').classList.toggle('active', state.searchOpen);
});

// Filter toggle
document.getElementById('btn-filter').addEventListener('click', () => {
  state.filterOpen = !state.filterOpen;
  const wrap = document.getElementById('filter-chips-wrap');
  wrap.style.display = state.filterOpen ? 'block' : 'none';
  document.getElementById('btn-filter').classList.toggle('active', state.filterOpen);
});

// Search input
document.getElementById('lib-search-input').addEventListener('input', e => {
  state.query = e.target.value.trim();
  document.getElementById('lib-search-clear').classList.toggle('visible', !!state.query);
  render();
});
document.getElementById('lib-search-clear').addEventListener('click', () => {
  state.query = '';
  document.getElementById('lib-search-input').value = '';
  document.getElementById('lib-search-clear').classList.remove('visible');
  render();
});

// Filter chips
document.getElementById('filter-chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  state.filter = chip.dataset.cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
  render();
});

// Sort
document.getElementById('sort-options').addEventListener('click', e => {
  const btn = e.target.closest('.sort-btn');
  if (!btn) return;
  state.sort = btn.dataset.sort;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.toggle('active', b === btn));
  render();
});

// View toggle
document.getElementById('view-toggle').addEventListener('click', () => {
  state.view = state.view === 'grid' ? 'list' : 'grid';
  document.getElementById('vt-grid').style.display = state.view === 'grid' ? 'block' : 'none';
  document.getElementById('vt-list').style.display = state.view === 'list' ? 'block' : 'none';
  render();
});

// Close modal on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── INIT ─────────────────────────────────────── */
renderRecent();
render();