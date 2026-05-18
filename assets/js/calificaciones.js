// ==================== CALIFICACIONES STORAGE KEY ====================
const SK_GRADES = 'mat_grades_v1';

// ==================== PERSISTENCE ====================
function loadGrades() {
  try { return JSON.parse(localStorage.getItem(SK_GRADES) || '{}'); }
  catch { return {}; }
}

function saveGrades(db) {
  localStorage.setItem(SK_GRADES, JSON.stringify(db));
}

let gradesDB = loadGrades();

function getGrade(matId, field) {
  return gradesDB[matId] ? gradesDB[matId][field] ?? '' : '';
}

function setGrade(matId, field, value) {
  if (!gradesDB[matId]) gradesDB[matId] = {};
  gradesDB[matId][field] = value;
  saveGrades(gradesDB);
}

// ==================== GRADE FIELDS PER SUBJECT ====================
// Each subject has: Primer Parcial, Segundo Parcial, Tercer Parcial, Final
const GRADE_FIELDS = [
  { key: 'p1',    label: 'Primer Parcial' },
  { key: 'p2',    label: 'Segundo Parcial' },
  { key: 'p3',    label: 'Tercer Parcial' },
  { key: 'final', label: 'Examen Final' },
];

// ==================== AVERAGE CALCULATION ====================
function calcAverage(matId) {
  const vals = GRADE_FIELDS.map(f => {
    const v = parseFloat(getGrade(matId, f.key));
    return isNaN(v) ? null : Math.min(10, Math.max(0, v));
  }).filter(v => v !== null);
  if (!vals.length) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

function semGPA(materias) {
  const avgs = materias.map(m => calcAverage(m.id)).filter(v => v !== null);
  if (!avgs.length) return null;
  return avgs.reduce((a, b) => a + b, 0) / avgs.length;
}

function globalGPA() {
  const all = CURRICULUM.flatMap(s => s.materias);
  const avgs = all.map(m => calcAverage(m.id)).filter(v => v !== null);
  if (!avgs.length) return null;
  return avgs.reduce((a, b) => a + b, 0) / avgs.length;
}

// ==================== GRADE DISPLAY CLASS ====================
function gradeClass(avg) {
  if (avg === null) return 'grade-none';
  if (avg >= 9)     return 'grade-good';
  if (avg >= 7)     return 'grade-ok';
  return 'grade-low';
}

function fmtGrade(avg) {
  if (avg === null) return '—';
  return avg.toFixed(1);
}

// ==================== RENDER: CARD BODY ====================
function renderCalBody(mat) {
  const fields = GRADE_FIELDS.map(f => {
    const val = getGrade(mat.id, f.key);
    return `<div class="cal-field">
      <label for="gf-${mat.id}-${f.key}">${f.label}</label>
      <input
        id="gf-${mat.id}-${f.key}"
        type="number"
        min="0"
        max="10"
        step="0.1"
        placeholder="—"
        value="${val}"
        data-grade-mat="${mat.id}"
        data-grade-field="${f.key}"
      >
    </div>`;
  }).join('');

  const avg = calcAverage(mat.id);
  const avgText = fmtGrade(avg);

  return `<div class="cal-body">
    <div class="cal-inputs-grid">${fields}</div>
    <div class="cal-average-row">
      <span class="cal-avg-label">Promedio</span>
      <span class="cal-avg-value" id="cal-avg-${mat.id}">${avgText}</span>
    </div>
  </div>`;
}

// ==================== RENDER: SUBJECT CARD ====================
function renderCalCard(mat) {
  const avg = calcAverage(mat.id);
  const cls = gradeClass(avg);
  const display = fmtGrade(avg);

  const iconHtml = mat.icon
    ? `<img src="${mat.icon}" alt="${mat.name}" onerror="this.style.display='none'">`
    : '';

  return `<div class="cal-card" id="cal-card-${mat.id}" data-cal-materia="${mat.id}">
    <div class="cal-card-head" data-cal-toggle="${mat.id}">
      <div class="cal-card-icon">${iconHtml}</div>
      <div class="cal-card-info">
        <div class="cal-card-name">${mat.name}</div>
        <div class="cal-card-meta">
          <span class="meta-pill">Clave <b>${mat.clave}</b></span>
          <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
        </div>
      </div>
      <div class="cal-grade-display ${cls}" id="cal-disp-${mat.id}">${display}</div>
    </div>
    ${renderCalBody(mat)}
  </div>`;
}

// ==================== RENDER: SEMESTER SECTION ====================
function renderCalSemester(sem) {
  const gpa = semGPA(sem.materias);
  const gpaText = gpa !== null ? `Promedio ${gpa.toFixed(2)}` : 'Sin calificaciones';
  const barPct = gpa !== null ? (gpa / 10 * 100).toFixed(1) : '0';

  const cards = sem.materias.map(renderCalCard).join('');

  return `<div class="cal-semester" id="cal-sem-${sem.semestre}">
    <div class="cal-sem-header">
      <span class="cal-sem-title">${sem.titulo}</span>
      <span class="cal-gpa-badge" id="cal-gpa-badge-${sem.semestre}">${gpaText}</span>
    </div>
    <div class="cal-sem-gpa-row">
      <div class="cal-sem-bar-track">
        <div class="cal-sem-bar-fill" id="cal-sem-bar-${sem.semestre}" style="width:${barPct}%"></div>
      </div>
    </div>
    ${cards}
  </div>`;
}

// ==================== UPDATE UI ====================
function updateCalUI() {
  // Global badge: show GPA or progress pct
  const gpa = globalGPA();
  const badge = document.getElementById('global-pct');
  if (badge) {
    badge.textContent = gpa !== null ? `${gpa.toFixed(2)}` : `${getGlobalPct()}%`;
  }

  CURRICULUM.forEach(sem => {
    const sg = semGPA(sem.materias);
    const badge = document.getElementById(`cal-gpa-badge-${sem.semestre}`);
    const bar = document.getElementById(`cal-sem-bar-${sem.semestre}`);
    if (badge) badge.textContent = sg !== null ? `Promedio ${sg.toFixed(2)}` : 'Sin calificaciones';
    if (bar)   bar.style.width = sg !== null ? `${(sg / 10 * 100).toFixed(1)}%` : '0%';

    sem.materias.forEach(mat => {
      const avg = calcAverage(mat.id);
      const disp = document.getElementById(`cal-disp-${mat.id}`);
      const avgEl = document.getElementById(`cal-avg-${mat.id}`);
      if (disp) {
        disp.textContent = fmtGrade(avg);
        disp.className = `cal-grade-display ${gradeClass(avg)}`;
      }
      if (avgEl) avgEl.textContent = fmtGrade(avg);
    });
  });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.innerHTML = CURRICULUM.map(renderCalSemester).join('');

  // Set initial global badge
  updateCalUI();

  // ==================== EVENT: TOGGLE CARD ====================
  root.addEventListener('click', e => {
    const toggle = e.target.closest('[data-cal-toggle]');
    if (toggle) {
      const matId = toggle.dataset.calToggle;
      const card = document.getElementById(`cal-card-${matId}`);
      if (card) card.classList.toggle('open');
    }
  });

  // ==================== EVENT: GRADE INPUT ====================
  root.addEventListener('input', e => {
    const inp = e.target.closest('[data-grade-mat]');
    if (!inp) return;
    const { gradeMat, gradeField } = inp.dataset;
    const raw = inp.value.trim();
    if (raw === '') {
      setGrade(gradeMat, gradeField, '');
    } else {
      const num = parseFloat(raw);
      if (!isNaN(num)) setGrade(gradeMat, gradeField, Math.min(10, Math.max(0, num)));
    }
    updateCalUI();
  });

  // Clamp value on blur
  root.addEventListener('blur', e => {
    const inp = e.target.closest('[data-grade-mat]');
    if (!inp) return;
    if (inp.value !== '') {
      const num = parseFloat(inp.value);
      if (!isNaN(num)) inp.value = Math.min(10, Math.max(0, num));
    }
  }, true);
});
