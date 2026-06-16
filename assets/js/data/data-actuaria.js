'use strict';

/* ═══════════════════════════════════════════════════════
   data-actuaria.js  —  Actuaría · Plan 2015 · FC·UNAM
   ───────────────────────────────────────────────────────
   Total 438 créditos: 398 obligatorios (36 asignaturas) +
   40 optativos (4 optativas). Además 6 inglés sin créditos.
   Materias con nombre + créditos (sin temario ni bibliografía
   por ahora). Se registra en el registro multi-carrera (UK).
   ═══════════════════════════════════════════════════════ */
(function () {
  if (typeof window.UK === 'undefined' || !UK.registerData) return;

  // Ícono determinista por nombre: materias/optativas con el mismo nombre
  // (aquí o en otra carrera) comparten ícono — y por tanto color.
  var ICON_N = (window.UK && UK.ICON_COUNT) || 132;
  function iconFor(name) {
    var h = 5381;
    for (var i = 0; i < name.length; i++) h = ((h << 5) + h + name.charCodeAt(i)) >>> 0;
    return 'assets/images/d' + (h % ICON_N) + '.webp';
  }
  function slug(n) {
    return 'act_' + n.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  }
  var _ci = 0;
  function M(name, creditos) {
    var m = { id: slug(name), name: name, creditos: creditos, icon: iconFor(name),
              colorIdx: _ci % 12, hue: (_ci * 47) % 360, temario: [] };
    _ci++; return m;
  }
  function S(semestre, titulo, materias) {
    materias.forEach(function (m) { m.semestre = String(semestre); });
    return { semestre: semestre, titulo: titulo, optativas: 0, materias: materias };
  }
  var _oi = 0;
  function O(name, creditos) {
    return { name: name, clave: '—', creditos: creditos, icon: iconFor(name), colorIdx: _oi++ % 12 };
  }
  function B(key, label, pool) {
    // Título: solo el nombre del campo (sin el prefijo "Campo de").
    return { key: key, label: label.replace(/^Campo de\s+/, ''), semLabel: '', creds: null, pool: pool };
  }

  var CURRICULUM = [
    S(1, 'Primer Semestre', [
      M('Cálculo Diferencial e Integral I', 18),
      M('Álgebra Superior I', 10),
      M('Geometría Analítica I', 10),
      M('Teoría del Seguro', 12),
      M('Inglés I', 0),
    ]),
    S(2, 'Segundo Semestre', [
      M('Cálculo Diferencial e Integral II', 18),
      M('Álgebra Superior II', 10),
      M('Geometría Analítica II', 10),
      M('Contabilidad', 10),
      M('Programación', 10),
      M('Inglés II', 0),
    ]),
    S(3, 'Tercer Semestre', [
      M('Cálculo Diferencial e Integral III', 18),
      M('Álgebra Lineal I', 10),
      M('Probabilidad I', 10),
      M('Matemáticas Financieras', 10),
      M('Manejo de Datos', 10),
      M('Inglés III', 0),
    ]),
    S(4, 'Cuarto Semestre', [
      M('Cálculo Diferencial e Integral IV', 18),
      M('Ecuaciones Diferenciales I', 10),
      M('Probabilidad II', 10),
      M('Matemáticas Actuariales del Seguro de Personas I', 12),
      M('Investigación de Operaciones', 10),
      M('Inglés IV', 0),
    ]),
    S(5, 'Quinto Semestre', [
      M('Análisis Matemático I', 10),
      M('Procesos Estocásticos I', 10),
      M('Inferencia Estadística', 10),
      M('Matemáticas Actuariales del Seguro de Personas II', 12),
      M('Mercados Financieros y Valuación de Instrumentos', 10),
      M('Economía', 10),
    ]),
    S(6, 'Sexto Semestre', [
      M('Análisis Numérico', 10),
      M('Demografía', 10),
      M('Modelos no Paramétricos y de Regresión', 10),
      M('Matemáticas Actuariales para Seguro de Daños, Fianzas y Reaseguro', 10),
      M('Métodos Cuantitativos en Finanzas', 10),
      M('Inglés V', 0),
    ]),
    S(7, 'Séptimo Semestre', [
      M('Modelos de Supervivencia y de Series de Tiempo', 10),
      M('Seguridad Social', 10),
      M('Análisis del México Contemporáneo', 10),
      M('Inglés VI', 0),
    ]),
    S(8, 'Octavo Semestre', [
      M('Teoría del Riesgo', 10),
      M('Pensiones Privadas', 10),
      M('Administración Actuarial del Riesgo', 10),
    ]),
  ];

  // Optativas (4 a elegir = 40 créditos), organizadas en 6 campos.
  var OPT_BLOQUES = [
    B('seguros', 'Campo de Seguros', [
      O('Administración de Riesgos', 10),
      O('Auditoría Actuarial', 10),
      O('Contabilidad de Seguros', 10),
      O('Fianzas', 10),
      O('Legislación en Seguro Privado y Social', 10),
      O('Mercadotecnia de Seguros', 10),
      O('Reaseguro', 10),
      O('Seminario de Aplicaciones Actuariales I', 10),
      O('Seminario de Aplicaciones Actuariales II', 10),
    ]),
    B('finanzas', 'Campo de Finanzas', [
      O('Administración de Riesgos Financieros', 10),
      O('Administración Financiera', 10),
      O('Carteras de Inversión', 10),
      O('Finanzas Corporativas', 10),
      O('Productos Financieros Derivados', 10),
      O('Seminario de Finanzas I', 10),
      O('Seminario de Finanzas II', 10),
    ]),
    B('prob_estadistica', 'Campo de Probabilidad y Estadística', [
      O('Análisis de Supervivencia', 10),
      O('Análisis Estadístico de Encuestas Complejas', 10),
      O('Análisis Multivariado', 10),
      O('Control Estadístico de la Calidad', 10),
      O('Diseño de Experimentos', 10),
      O('Estadística Bayesiana', 10),
      O('Métodos Estadísticos para la Calificación Crediticia', 10),
      O('Modelos Lineales', 10),
      O('Modelos Lineales Generalizados', 10),
      O('Muestreo', 10),
      O('Procesos Estocásticos II', 10),
      O('Seminario de Estadística I', 10),
      O('Seminario de Estadística II', 10),
      O('Series de Tiempo', 10),
      O('Simulación Estocástica', 10),
    ]),
    B('inv_operaciones', 'Campo de Investigación de Operaciones', [
      O('Planeación Estratégica', 10),
      O('Programación Dinámica', 10),
      O('Programación Entera', 10),
      O('Programación Lineal', 10),
      O('Programación no Lineal', 10),
      O('Seminario de Investigación de Operaciones', 10),
      O('Temas Selectos de Investigación de Operaciones', 10),
      O('Teoría de Decisiones', 10),
      O('Teoría de Redes', 10),
    ]),
    B('computacion', 'Campo de Computación', [
      O('Bases de Datos', 10),
      O('Temas Selectos de Análisis Numérico', 10),
    ]),
    B('ciencias_sociales', 'Campo de Ciencias Sociales', [
      O('Demografía Avanzada', 10),
      O('Econometría I', 10),
      O('Econometría II', 10),
      O('Temas Selectos de Economía', 10),
      O('Introducción a la Administración', 10),
      O('Introducción a la Investigación Social', 10),
      O('Teoría de Juegos en Economía', 10),
    ]),
  ];

  var DEFAULTS = [];
  CURRICULUM.forEach(function (s) {
    s.materias.forEach(function (m) {
      DEFAULTS.push({ id: m.id, name: m.name, semestre: String(s.semestre),
                      colorIdx: m.colorIdx, hue: m.hue, profesor: '', dias: [], hora: '' });
    });
  });

  UK.registerData('actuaria', {
    TOTAL_CREDITOS: 438,
    CURRICULUM: CURRICULUM,
    OPT_DATA: {},
    OPT_BLOQUES: OPT_BLOQUES,
    LIBRARY: [],
    DEFAULTS: DEFAULTS,
  });
})();
