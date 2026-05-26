'use strict';

/* ═══════════════════════════════════════════════════════
   avance.js  —  Seguimiento de progreso · materias propias
   ═══════════════════════════════════════════════════════ */

/* ── STORAGE ─────────────────────────────────────────── */
const SK = 'ukishima_avance_v2';

function _load() {
  try { return JSON.parse(localStorage.getItem(SK) || 'null') || { subjects: [], progress: {} }; }
  catch { return { subjects: [], progress: {} }; }
}
function _persist(d)         { localStorage.setItem(SK, JSON.stringify(d)); }
function getSubjects()       { return _load().subjects || []; }
function saveSubjects(subs)  { const d = _load(); d.subjects = subs; _persist(d); }
function getProgress(id)     { return (_load().progress || {})[id] || { tareas: [], examenes: [] }; }
function saveProgress(id, p) { const d = _load(); (d.progress = d.progress || {})[id] = p; _persist(d); }

/* ── UID ─────────────────────────────────────────────── */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* ── COLOR PALETTE ───────────────────────────────────── */
const PAL = [
  { bg: '#0c3228', ac: '#3fc99a' },
  { bg: '#18153d', ac: '#7b6ed8' },
  { bg: '#2b1238', ac: '#c46fd6' },
  { bg: '#0c2d14', ac: '#3fc46f' },
  { bg: '#321414', ac: '#d65050' },
  { bg: '#2b1e0c', ac: '#d6944e' },
  { bg: '#2b0c1e', ac: '#d64e8a' },
  { bg: '#0c1e32', ac: '#4e94d6' },
  { bg: '#1e2b0c', ac: '#8ad64e' },
  { bg: '#32200c', ac: '#d6b44e' },
  { bg: '#0c2b2b', ac: '#4ed6d6' },
  { bg: '#2b0c0c', ac: '#d66b4e' },
];
function getColor(idx) { return PAL[idx % PAL.length]; }

/* ── PROGRESS % ──────────────────────────────────────── */
function calcPct(id) {
  const { tareas, examenes } = getProgress(id);
  const parts = [];
  if (tareas.length)
    parts.push(tareas.filter(t => t.done).length / tareas.length);
  const graded = examenes.filter(e => e.grade != null);
  if (graded.length)
    parts.push(graded.reduce((s, e) => s + e.grade, 0) / graded.length / 10);
  return parts.length ? Math.round(parts.reduce((a, b) => a + b, 0) / parts.length * 100) : 0;
}

/* ── GRADE COLOR ─────────────────────────────────────── */
function gradeColor(g) {
  if (g == null || isNaN(g)) return 'rgba(232,245,242,0.28)';
  if (g < 6)  return '#d65050';
  if (g < 7)  return '#d6944e';
  if (g < 8)  return '#d6b44e';
  return '#3fc99a';
}

/* ── HTML ESCAPE ─────────────────────────────────────── */
const esc = s => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ══════════════════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════════════════ */
const R = {

  /* ── HOME: subject cards ── */
  home() {
    document.getElementById('av-header-title').textContent = 'Avance';
    document.getElementById('av-back').style.display = 'none';
    document.getElementById('av-add-pill').style.display = 'flex';

    const main = document.getElementById('av-main');
    const subs = getSubjects();

    /* Empty state */
    if (!subs.length) {
      main.innerHTML = `
        <div class="av-empty-state">
          <div class="av-empty-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none"
                 stroke="currentColor" stroke-width="1.3" stroke-linecap="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6"  y1="20" x2="6"  y2="14"/>
              <line x1="2"  y1="20" x2="22" y2="20"/>
            </svg>
          </div>
          <div class="av-empty-title">Sin materias</div>
          <div class="av-empty-body">Toca <strong>+ Materia</strong> arriba para agregar tu primera materia.</div>
        </div>`;
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    /* Group by semestre */
    const bySem = {};
    for (const sub of subs) {
      const k = sub.semestre || '';
      (bySem[k] = bySem[k] || []).push(sub);
    }
    const semKeys = Object.keys(bySem).sort((a, b) => {
      if (a === '') return 1;
      if (b === '') return -1;
      return Number(a) - Number(b);
    });

    let html = '';
    for (const sem of semKeys) {
      html += `<div class="av-sem-label">${sem ? `Semestre ${esc(sem)}°` : 'Sin semestre'}</div>`;

      for (const sub of bySem[sem]) {
        const { bg, ac } = getColor(sub.colorIdx || 0);
        const p = calcPct(sub.id);
        const { tareas, examenes } = getProgress(sub.id);
        const done   = tareas.filter(t => t.done).length;
        const graded = examenes.filter(e => e.grade != null);
        const avgEx  = graded.length
          ? (graded.reduce((s, e) => s + e.grade, 0) / graded.length).toFixed(1)
          : null;

        const firstLetter = sub.name.charAt(0).toUpperCase();

        /* Meta: profesor — días · hora */
        const metaParts = [];
        if (sub.profesor) metaParts.push(sub.profesor);
        const sched = [];
        if (sub.dias && sub.dias.length) sched.push(sub.dias.join(' · '));
        if (sub.hora) sched.push(sub.hora);
        if (sched.length) metaParts.push(sched.join('  '));
        const metaText = metaParts.join(' — ');

        /* Stat chips */
        let chips = '';
        if (tareas.length) {
          const allDone = done === tareas.length;
          chips += `<span class="av-chip${allDone ? ' av-chip--done' : ''}">${done}/${tareas.length} tareas</span>`;
        }
        if (examenes.length) {
          if (avgEx != null) {
            const gc = gradeColor(parseFloat(avgEx));
            chips += `<span class="av-chip" style="color:${gc};border-color:${gc}44">${avgEx} prom</span>`;
          } else {
            chips += `<span class="av-chip">${examenes.length} ex.</span>`;
          }
        }
        if (!chips) chips = `<span class="av-chip av-chip--empty">Sin registros</span>`;

        html += `
        <div class="av-card" style="--pb:${bg};--pa:${ac}" onclick="Nav.detail('${esc(sub.id)}')">
          <div class="av-card-thumb">
            <span class="av-card-initial">${esc(firstLetter)}</span>
          </div>
          <div class="av-card-content">
            <div class="av-card-row1">
              <span class="av-card-name">${esc(sub.name)}</span>
              <span class="av-card-pct" style="color:${ac}">${p}%</span>
            </div>
            ${metaText ? `<div class="av-card-meta">${esc(metaText)}</div>` : ''}
            <div class="av-card-progress">
              <div class="av-card-bar" style="width:${p}%;background:${ac}"></div>
            </div>
            <div class="av-card-chips">${chips}</div>
          </div>
          <div class="av-card-arrow">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                 stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>`;
      }
    }

    main.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  /* ── DETAIL: tasks + grades ── */
  detail(subId) {
    const subs = getSubjects();
    const sub  = subs.find(s => s.id === subId);
    if (!sub) { R.home(); return; }

    const { bg, ac } = getColor(sub.colorIdx || 0);
    document.getElementById('av-header-title').textContent = sub.name;
    document.getElementById('av-back').style.display = 'flex';
    document.getElementById('av-add-pill').style.display = 'none';

    const { tareas, examenes } = getProgress(subId);
    const p      = calcPct(subId);
    const done   = tareas.filter(t => t.done).length;
    const graded = examenes.filter(e => e.grade != null);
    const avgEx  = graded.length
      ? (graded.reduce((s, e) => s + e.grade, 0) / graded.length).toFixed(1)
      : null;

    const firstLetter = sub.name.charAt(0).toUpperCase();

    /* Schedule tag */
    const sched = [];
    if (sub.dias && sub.dias.length) sched.push(sub.dias.join(' · '));
    if (sub.hora) sched.push(sub.hora);
    const schedText = sched.join('  ');

    /* Tarea rows */
    const tareaRows = tareas.length
      ? tareas.map((t, i) => `
        <div class="av-item${t.done ? ' av-item--done' : ''}">
          <button class="av-check${t.done ? ' av-check--on' : ''}"
                  onclick="A.toggleTarea('${esc(subId)}',${i})"
                  aria-label="${t.done ? 'Desmarcar' : 'Marcar completa'}">
            ${t.done ? `<svg viewBox="0 0 24 24" width="13" height="13" fill="none"
                             stroke="currentColor" stroke-width="3" stroke-linecap="round">
                           <polyline points="20 6 9 17 4 12"/>
                         </svg>` : ''}
          </button>
          <span class="av-item-text">${esc(t.text)}</span>
          <button class="av-del" onclick="A.delTarea('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin tareas registradas</div>`;

    /* Exam rows */
    const examRows = examenes.length
      ? examenes.map((e, i) => `
        <div class="av-exam-item">
          <span class="av-item-text">${esc(e.text)}</span>
          <div class="av-grade-wrap">
            <input class="av-grade-inp" type="number" min="0" max="10" step="0.5"
              value="${e.grade != null ? e.grade : ''}"
              placeholder="—"
              style="color:${gradeColor(e.grade)}"
              oninput="this.style.color=gradeColor(parseFloat(this.value))"
              onchange="A.setGrade('${esc(subId)}',${i},this.value)"
              autocomplete="off">
            <span class="av-grade-slash">/10</span>
          </div>
          <button class="av-del" onclick="A.delExamen('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin exámenes registrados</div>`;

    document.getElementById('av-main').innerHTML = `
      <div class="av-detail">

        <!-- Hero banner -->
        <div class="av-hero" style="--pb:${bg};--pa:${ac}">
          <div class="av-hero-top">
            <div class="av-hero-letter">${esc(firstLetter)}</div>
            <div class="av-hero-info">
              ${sub.profesor ? `<div class="av-hero-prof">${esc(sub.profesor)}</div>` : ''}
              ${schedText ? `<div class="av-hero-sched">${esc(schedText)}</div>` : ''}
            </div>
            <div class="av-hero-pct" id="av-hero-pct" style="color:${ac}">${p}%</div>
          </div>
          <div class="av-hero-bar-wrap">
            <div class="av-hero-bar" id="av-hero-bar" style="width:${p}%;background:${ac}"></div>
          </div>
          <div class="av-hero-meta">
            <span>${done} / ${tareas.length} tareas completadas</span>
            ${avgEx != null ? `<span>Promedio: <strong style="color:${gradeColor(parseFloat(avgEx))}">${avgEx}</strong></span>` : ''}
          </div>
        </div>

        <!-- Tareas -->
        <div class="av-section">
          <div class="av-sec-head">
            <span class="av-sec-title">Tareas</span>
            <button class="av-sec-add" onclick="A.openModal('tarea','${esc(subId)}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5"  y1="12" x2="19" y2="12"/>
              </svg>
              Agregar
            </button>
          </div>
          ${tareaRows}
        </div>

        <!-- Exámenes -->
        <div class="av-section">
          <div class="av-sec-head">
            <span class="av-sec-title">Exámenes</span>
            <button class="av-sec-add" onclick="A.openModal('examen','${esc(subId)}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5"  y1="12" x2="19" y2="12"/>
              </svg>
              Agregar
            </button>
          </div>
          ${examRows}
        </div>

        <!-- Delete -->
        <div class="av-section av-section--del">
          <button class="av-del-sub-btn" onclick="A.delSubject('${esc(subId)}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
            </svg>
            Eliminar materia
          </button>
        </div>

      </div>`;

    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  _refreshHero(subId) {
    const p   = calcPct(subId);
    const pEl = document.getElementById('av-hero-pct');
    const bEl = document.getElementById('av-hero-bar');
    if (pEl) pEl.textContent = p + '%';
    if (bEl) bEl.style.width = p + '%';
  },
};

/* ══════════════════════════════════════════════════════
   MODAL: tarea / examen
   ══════════════════════════════════════════════════════ */
let _modalCtx = null;

const Modal = {
  open(type, subId) {
    _modalCtx = { type, subId };
    document.getElementById('av-modal-title').textContent =
      type === 'tarea' ? 'Nueva tarea' : 'Nuevo examen';
    document.getElementById('av-modal-inp').value = '';
    document.getElementById('av-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('av-modal-inp').focus(), 80);
  },
  close() {
    _modalCtx = null;
    document.getElementById('av-modal').style.display = 'none';
  },
  confirm() {
    if (!_modalCtx) return;
    const text = document.getElementById('av-modal-inp').value.trim();
    if (!text) { document.getElementById('av-modal-inp').focus(); return; }
    const { type, subId } = _modalCtx;
    const p = getProgress(subId);
    if (type === 'tarea') p.tareas.push({ text, done: false });
    else                  p.examenes.push({ text, grade: null });
    saveProgress(subId, p);
    Modal.close();
    R.detail(subId);
  },
};

/* ══════════════════════════════════════════════════════
   MODAL: agregar materia
   ══════════════════════════════════════════════════════ */
const SubModal = {
  open() {
    document.getElementById('av-sub-name').value = '';
    document.getElementById('av-sub-prof').value = '';
    document.getElementById('av-sub-hora').value = '';
    document.getElementById('av-sub-sem').value  = '';
    document.querySelectorAll('.av-day-btn').forEach(b => b.classList.remove('av-day-btn--on'));
    document.getElementById('av-sub-modal').style.display = 'flex';
    setTimeout(() => document.getElementById('av-sub-name').focus(), 80);
  },
  close() {
    document.getElementById('av-sub-modal').style.display = 'none';
  },
  confirm() {
    const name = document.getElementById('av-sub-name').value.trim();
    if (!name) { document.getElementById('av-sub-name').focus(); return; }

    const profesor = document.getElementById('av-sub-prof').value.trim();
    const hora     = document.getElementById('av-sub-hora').value;
    const semestre = document.getElementById('av-sub-sem').value;
    const dias     = [...document.querySelectorAll('.av-day-btn--on')].map(b => b.dataset.day);

    const subs     = getSubjects();
    const colorIdx = subs.length;

    subs.push({ id: uid(), name, profesor, dias, hora, semestre, colorIdx });
    saveSubjects(subs);
    SubModal.close();
    R.home();
  },
};

/* ══════════════════════════════════════════════════════
   ACTIONS  (global — called from inline HTML handlers)
   ══════════════════════════════════════════════════════ */
const A = {
  openSubModal:      () => SubModal.open(),
  closeSubModal:     () => SubModal.close(),
  confirmAddSubject: () => SubModal.confirm(),
  openModal:         (type, subId) => Modal.open(type, subId),

  toggleTarea(subId, idx) {
    const p = getProgress(subId);
    p.tareas[idx].done = !p.tareas[idx].done;
    saveProgress(subId, p);
    R.detail(subId);
  },

  delTarea(subId, idx) {
    const p = getProgress(subId);
    p.tareas.splice(idx, 1);
    saveProgress(subId, p);
    R.detail(subId);
  },

  delExamen(subId, idx) {
    const p = getProgress(subId);
    p.examenes.splice(idx, 1);
    saveProgress(subId, p);
    R.detail(subId);
  },

  setGrade(subId, idx, val) {
    const n = parseFloat(val);
    const p = getProgress(subId);
    p.examenes[idx].grade = isNaN(n) ? null : Math.max(0, Math.min(10, n));
    saveProgress(subId, p);
    R._refreshHero(subId);
  },

  delSubject(subId) {
    let subs = getSubjects().filter(s => s.id !== subId);
    saveSubjects(subs);
    const d = _load(); delete (d.progress = d.progress || {})[subId]; _persist(d);
    history.pushState({ view: 'home' }, '', '#');
    Nav._goHome();
  },
};

/* ══════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════ */
const S = { view: 'home', subId: null };

const Nav = {
  detail(subId) {
    S.view = 'detail'; S.subId = subId;
    history.pushState({ view: 'detail', subId }, '', `#mat/${subId}`);
    R.detail(subId);
  },
  _goHome() {
    S.view = 'home'; S.subId = null;
    R.home();
  },
};

/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
(function init() {
  history.scrollRestoration = 'manual';

  const hash = location.hash;
  if (hash.startsWith('#mat/')) {
    const id = hash.slice(5);
    if (getSubjects().find(s => s.id === id)) { S.view = 'detail'; S.subId = id; }
  }
  history.replaceState({ view: S.view, subId: S.subId || undefined }, '', location.href);

  if (S.view === 'detail' && S.subId) R.detail(S.subId);
  else                                 Nav._goHome();

  document.getElementById('av-back').addEventListener('click', () => {
    history.pushState({ view: 'home' }, '', '#');
    Nav._goHome();
  });

  window.addEventListener('popstate', e => {
    const st = e.state || {};
    S.view  = st.view  || 'home';
    S.subId = st.subId || null;
    if (S.view === 'detail' && S.subId) R.detail(S.subId);
    else                                 Nav._goHome();
  });

  /* Tarea / examen modal */
  document.getElementById('av-modal-cancel').addEventListener('click', () => Modal.close());
  document.getElementById('av-modal-ok').addEventListener('click',     () => Modal.confirm());
  document.getElementById('av-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('av-modal')) Modal.close();
  });
  document.getElementById('av-modal-inp').addEventListener('keydown', e => {
    if (e.key === 'Enter')  Modal.confirm();
    if (e.key === 'Escape') Modal.close();
  });

  /* Subject modal */
  document.getElementById('av-sub-cancel').addEventListener('click', () => SubModal.close());
  document.getElementById('av-sub-ok').addEventListener('click',     () => SubModal.confirm());
  document.getElementById('av-sub-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('av-sub-modal')) SubModal.close();
  });
  document.getElementById('av-sub-name').addEventListener('keydown', e => {
    if (e.key === 'Escape') SubModal.close();
  });

  /* Day button toggles */
  document.getElementById('av-days-row').addEventListener('click', e => {
    const btn = e.target.closest('.av-day-btn');
    if (btn) btn.classList.toggle('av-day-btn--on');
  });
})();
