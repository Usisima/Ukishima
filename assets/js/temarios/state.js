// ==================== CONFIGURACIÓN LOCAL STORAGE ====================
const SK_TEMA = 'mat_tema_v1';
const SK_BOOK = 'mat_book_v1';
const SK_COLLAPSED = 'mat_collapsed_v1';
const SK_OPTATIVAS = 'mat_optativas_v1';

// ==================== FUNCIONES DE PERSISTENCIA ====================
function loadDB(k) {
  try { return JSON.parse(localStorage.getItem(k) || '{}'); }
  catch { return {}; }
}

function saveDB(k, d) {
  try { localStorage.setItem(k, JSON.stringify(d)); }
  catch (e) { console.warn('[state] No se pudo guardar en localStorage:', e); }
}

// ==================== ESTADO ====================
let temaDB = loadDB(SK_TEMA);
let bookDB = loadDB(SK_BOOK);
let collapsedDB = loadDB(SK_COLLAPSED);
let optDB = loadDB(SK_OPTATIVAS);

// ==================== TEMAS ====================
function getTemaDone(m, i) { return temaDB[`${m}_${i}`] === true; }
function setTemaDone(m, i, v) {
  temaDB[`${m}_${i}`] = v;
  saveDB(SK_TEMA, temaDB);
}

function getTemaCollapsed(m, i) { return collapsedDB[`${m}_${i}`] === true; }
function setTemaCollapsed(m, i, v) {
  collapsedDB[`${m}_${i}`] = v;
  saveDB(SK_COLLAPSED, collapsedDB);
}

// ==================== LIBROS ====================
function getBookCaps(m, b) { return bookDB[`${m}_${b}`] || []; }
function setBookCaps(m, b, a) {
  bookDB[`${m}_${b}`] = a;
  saveDB(SK_BOOK, bookDB);
}

// ==================== OPTATIVAS ====================
function getOptSlot(sem, slot) { return optDB[`${sem}_${slot}`] || null; }
function setOptSlot(sem, slot, opt) {
  optDB[`${sem}_${slot}`] = opt;
  saveDB(SK_OPTATIVAS, optDB);
}
function clearOptSlot(sem, slot) {
  delete optDB[`${sem}_${slot}`];
  saveDB(SK_OPTATIVAS, optDB);
}
function getAllChosenOptNames() {
  return Object.values(optDB).filter(Boolean).map(o => o.name);
}

// ==================== CÁLCULOS DE PROGRESO ====================
function getMateriaProgress(mat) {
  let t = 0, d = 0;
  (mat.temario || []).forEach((tema, i) => {
    const h = tema.horas || ((tema.subtemas || []).length * 2);
    t += h;
    if (getTemaDone(mat.id, i)) d += h;
  });
  return t === 0 ? 0 : Math.min(100, Math.round(d / t * 100));
}

function isComplete(mat) { return getMateriaProgress(mat) === 100; }

function getGlobalPct() {
  const allMats = CURRICULUM.flatMap(s => s.materias);
  const done = allMats.filter(m => isComplete(m)).reduce((s, m) => s + m.creditos, 0);
  return Math.min(100, Math.round(done / TOTAL_CREDITOS * 100));
}

function getSemPct(sem) {
  const tc = sem.materias.reduce((s, m) => s + m.creditos, 0);
  if (!tc) return 0;
  const dc = sem.materias.filter(m => isComplete(m)).reduce((s, m) => s + m.creditos, 0);
  return Math.min(100, Math.round(dc / tc * 100));
}

