// ==================== CONFIGURACIÓN LOCAL STORAGE ====================
const SK_TEMA = 'mat_tema_v1';
const SK_BOOK = 'mat_book_v1';
const SK_COLLAPSED = 'mat_collapsed_v1';
const SK_OPTATIVAS = 'mat_optativas_v1';
const SK_CARD_OPEN = 'mat_card_open_v1';

// ==================== FUNCIONES DE PERSISTENCIA ====================
function loadDB(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}');
  } catch (e) {
    console.warn('Error loading from localStorage:', e);
    return {};
  }
}

function saveDB(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('Error saving to localStorage:', e);
  }
}

// ==================== ESTADO INICIAL ====================
let temaDB = loadDB(SK_TEMA);
let bookDB = loadDB(SK_BOOK);
let collapsedDB = loadDB(SK_COLLAPSED);
let optDB = loadDB(SK_OPTATIVAS);
let cardOpenDB = loadDB(SK_CARD_OPEN);

// ==================== FUNCIONES DE TEMAS ====================
function getTemaDone(materiaId, temaIndex) {
  return temaDB[`${materiaId}_${temaIndex}`] === true;
}

function setTemaDone(materiaId, temaIndex, value) {
  temaDB[`${materiaId}_${temaIndex}`] = value;
  saveDB(SK_TEMA, temaDB);
}

function getTemaCollapsed(materiaId, temaIndex) {
  return collapsedDB[`${materiaId}_${temaIndex}`] === true;
}

function setTemaCollapsed(materiaId, temaIndex, value) {
  collapsedDB[`${materiaId}_${temaIndex}`] = value;
  saveDB(SK_COLLAPSED, collapsedDB);
}

// ==================== FUNCIONES DE LIBROS ====================
function getBookCaps(materiaId, bookIndex) {
  return bookDB[`${materiaId}_${bookIndex}`] || [];
}

function setBookCaps(materiaId, bookIndex, capsArray) {
  bookDB[`${materiaId}_${bookIndex}`] = capsArray;
  saveDB(SK_BOOK, bookDB);
}

// ==================== FUNCIONES DE OPTATIVAS ====================
function getOptSlot(semestre, slot) {
  return optDB[`${semestre}_${slot}`] || null;
}

function setOptSlot(semestre, slot, optativa) {
  optDB[`${semestre}_${slot}`] = optativa;
  saveDB(SK_OPTATIVAS, optDB);
}

function clearOptSlot(semestre, slot) {
  delete optDB[`${semestre}_${slot}`];
  saveDB(SK_OPTATIVAS, optDB);
}

function getAllChosenOptNames() {
  return Object.values(optDB).filter(Boolean).map(o => o.name);
}

// ==================== FUNCIONES DE CARDS ABIERTAS ====================
function getCardOpen(materiaId) {
  return cardOpenDB[materiaId] === true;
}

function setCardOpen(materiaId, value) {
  cardOpenDB[materiaId] = value;
  saveDB(SK_CARD_OPEN, cardOpenDB);
}

// ==================== CÁLCULOS DE PROGRESO ====================
function getMateriaProgress(mat) {
  if (!mat.temario || mat.temario.length === 0) return 0;
  
  let totalHoras = 0;
  let doneHoras = 0;
  
  mat.temario.forEach((tema, index) => {
    const horas = tema.horas || ((tema.subtemas || []).length * 2);
    totalHoras += horas;
    if (getTemaDone(mat.id, index)) {
      doneHoras += horas;
    }
  });
  
  return totalHoras === 0 ? 0 : Math.min(100, Math.round((doneHoras / totalHoras) * 100));
}

function isMateriaComplete(mat) {
  return getMateriaProgress(mat) === 100;
}

function getGlobalPct() {
  const todasLasMaterias = CURRICULUM.flatMap(s => s.materias);
  const optativasSeleccionadas = Object.values(optDB).filter(Boolean);
  const todas = [...todasLasMaterias, ...optativasSeleccionadas];
  
  const creditosCompletados = todas
    .filter(m => isMateriaComplete(m))
    .reduce((sum, m) => sum + (m.creditos || 0), 0);
  
  return Math.min(100, Math.round((creditosCompletados / TOTAL_CREDITOS) * 100));
}

function getSemPct(sem) {
  const totalCreditos = sem.materias.reduce((s, m) => s + m.creditos, 0);
  if (totalCreditos === 0) return 0;
  
  const creditosCompletados = sem.materias
    .filter(m => isMateriaComplete(m))
    .reduce((s, m) => s + m.creditos, 0);
  
  return Math.min(100, Math.round((creditosCompletados / totalCreditos) * 100));
}

// ==================== EXPORTAR FUNCIONES GLOBALMENTE ====================
window.State = {
  getTemaDone,
  setTemaDone,
  getTemaCollapsed,
  setTemaCollapsed,
  getBookCaps,
  setBookCaps,
  getOptSlot,
  setOptSlot,
  clearOptSlot,
  getAllChosenOptNames,
  getCardOpen,
  setCardOpen,
  getMateriaProgress,
  isMateriaComplete,
  getGlobalPct,
  getSemPct
};