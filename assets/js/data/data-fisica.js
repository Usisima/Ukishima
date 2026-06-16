'use strict';

/* ═══════════════════════════════════════════════════════
   data-fisica.js  —  Física · Plan 2002 · FC·UNAM
   ───────────────────────────────────────────────────────
   Total 418 créditos: 358 obligatorios + 60 optativos.
   9 semestres. Optativas organizadas por Área de conocimiento.
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
    return 'fis_' + n.toLowerCase()
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
  function A(key, label, pool) {
    // Título: solo el nombre del área (sin el prefijo "Área").
    return { key: key, label: label.replace(/^Área\s+/, ''), semLabel: '', creds: null, pool: pool };
  }

  var CURRICULUM = [
    S(1, 'Primer Semestre', [
      M('Física Contemporánea', 6),
      M('Álgebra', 10),
      M('Geometría Analítica I', 10),
      M('Cálculo Diferencial e Integral I', 18),
      M('Computación', 6),
    ]),
    S(2, 'Segundo Semestre', [
      M('Mecánica Vectorial', 12),
      M('Laboratorio de Mecánica', 6),
      M('Geometría Analítica II', 10),
      M('Cálculo Diferencial e Integral II', 18),
    ]),
    S(3, 'Tercer Semestre', [
      M('Fenómenos Colectivos', 12),
      M('Laboratorio de Fenómenos Colectivos', 6),
      M('Álgebra Lineal I', 10),
      M('Cálculo Diferencial e Integral III', 18),
    ]),
    S(4, 'Cuarto Semestre', [
      M('Electromagnetismo I', 12),
      M('Laboratorio de Electromagnetismo', 6),
      M('Ecuaciones Diferenciales I', 10),
      M('Cálculo Diferencial e Integral IV', 18),
    ]),
    S(5, 'Quinto Semestre', [
      M('Introducción a la Física Cuántica', 12),
      M('Óptica', 12),
      M('Laboratorio de Óptica', 6),
      M('Variable Compleja I', 10),
    ]),
    S(6, 'Sexto Semestre', [
      M('Mecánica Analítica', 12),
      M('Termodinámica', 12),
      M('Matemáticas Avanzadas de la Física', 10),
      M('Relatividad', 6),
    ]),
    S(7, 'Séptimo Semestre', [
      M('Electromagnetismo II', 12),
      M('Mecánica Cuántica', 12),
      M('Laboratorio de Electrónica', 6),
      M('Física Computacional', 12),
    ]),
    S(8, 'Octavo Semestre', [
      M('Física Atómica y Materia Condensada', 6),
      M('Laboratorio de Física Contemporánea I', 6),
      M('Dinámica de Medios Deformables', 12),
      M('Física Estadística', 12),
    ]),
    S(9, 'Noveno Semestre', [
      M('Física Nuclear y Subnuclear', 6),
      M('Laboratorio de Física Contemporánea II', 6),
    ]),
  ];

  // Optativas (60 créditos a cubrir), organizadas por Área de conocimiento.
  var OPT_BLOQUES = [
    A('acustica', 'Área Acústica', [
      O('Introducción a la Acústica Contemporánea', 9),
      O('Acústica en Fluidos', 9),
      O('Acústica en Sólidos', 9),
      O('Temas Selectos de Acústica I', 6),
      O('Temas Selectos de Acústica II', 6),
      O('Temas Selectos de Acústica III', 6),
    ]),
    A('astrofisica', 'Área Astrofísica', [
      O('Astrofísica General', 6),
      O('Estructura, Dinámica y Evolución de la Galaxia', 6),
      O('Materia Interestelar', 6),
      O('Astrofísica Extragaláctica y Cosmología', 6),
      O('Astrofísica Estelar', 6),
      O('Temas Selectos de Astrofísica I', 6),
      O('Temas Selectos de Astrofísica II', 6),
      O('Temas Selectos de Astrofísica III', 6),
    ]),
    A('biofisica', 'Área Biofísica y Física Médica', [
      O('Introducción a la Biofísica y Física Médica', 6),
      O('Biofísica General', 9),
      O('Física y Medicina', 9),
      O('Métodos Físicos para el Estudio de Sistemas Biológicos', 6),
      O('Métodos Físicos para el Diagnóstico y Tratamiento en Medicina', 6),
      O('Temas Selectos de Biofísica y Física Médica I', 6),
      O('Temas Selectos de Biofísica y Física Médica II', 6),
    ]),
    A('ciencias_tierra', 'Área Ciencias de la Tierra', [
      O('Introducción a las Ciencias de la Tierra', 6),
      O('Geofísica Aplicada', 9),
      O('Geomagnetismo y Tectónica de Placas', 9),
      O('Geología y Geofísica Aplicada', 9),
      O('Dinámica de Fluidos Geofísicos', 9),
      O('Física del Interior de la Tierra', 6),
      O('Sismología y Vulcanología', 9),
      O('Introducción a la Física Espacial', 6),
      O('Introducción a la Oceanografía Física', 6),
      O('Introducción a los Plasmas Espaciales', 9),
      O('Meteorología', 6),
      O('Dinámica del Clima', 9),
      O('Meteorología y Sociedad', 9),
      O('Temas Selectos de Ciencias de la Tierra I', 6),
      O('Temas Selectos de Ciencias de la Tierra II', 6),
      O('Temas Selectos de Ciencias de la Tierra III', 6),
    ]),
    A('electronica', 'Área Electrónica e Instrumentación', [
      O('Circuitos Digitales con Laboratorio', 9),
      O('Máquinas Digitales con Laboratorio', 9),
      O('Señales y Circuitos Eléctricos', 9),
      O('Adquisición y Procesamiento de Señales', 9),
      O('Instrumentación Científica', 9),
      O('Robótica y Control', 9),
      O('Temas Selectos de Electrónica e Instrumentación I', 9),
      O('Temas Selectos de Electrónica e Instrumentación II', 9),
      O('Temas Selectos de Electrónica e Instrumentación III', 9),
    ]),
    A('estado_solido', 'Área Estado Sólido', [
      O('Introducción al Estado Sólido', 6),
      O('Estado Sólido I', 12),
      O('Estado Sólido II', 12),
      O('Temas Selectos de Estado Sólido I', 6),
      O('Temas Selectos de Estado Sólido II', 6),
      O('Temas Selectos de Estado Sólido III', 6),
    ]),
    A('filosofia_historia', 'Área Filosofía e Historia de la Física', [
      O('Filosofía de la Física I', 6),
      O('Filosofía de la Física II', 6),
      O('Temas Selectos de Filosofía de la Física', 6),
      O('Historia de la Física I', 6),
      O('Historia de la Física II', 6),
      O('Temas Selectos de la Historia de la Física', 6),
    ]),
    A('fisica_atomica', 'Área Física Atómica y Molecular', [
      O('Introducción a la Física Atómica y Molecular', 12),
      O('Temas Selectos de Física Atómica y Molecular I', 6),
      O('Temas Selectos de Física Atómica y Molecular II', 6),
    ]),
    A('fisica_computacional', 'Área Física Computacional', [
      O('Métodos Numéricos y Algoritmos Computacionales', 6),
      O('Temas Selectos de Física Computacional I', 6),
      O('Temas Selectos de Física Computacional II', 6),
      O('Temas Selectos de Física Computacional III', 6),
    ]),
    A('fisica_materiales', 'Área Física de Materiales', [
      O('Introducción a la Física de los Materiales', 12),
      O('Propiedades Mecánicas', 8),
      O('Física de la Materia Condensada Blanda', 8),
      O('Estructura Electrónica de los Materiales', 8),
      O('Temas Selectos de Física de los Materiales I', 6),
      O('Temas Selectos de Física de los Materiales II', 6),
      O('Temas Selectos de Física de los Materiales III', 6),
    ]),
    A('particulas', 'Área Física de Partículas Elementales', [
      O('Introducción a la Física de las Partículas Elementales I', 6),
      O('Introducción a la Física de las Partículas Elementales II (El Modelo Estándar)', 6),
      O('Temas Selectos de Física de Partículas Elementales I', 6),
      O('Temas Selectos de Física de Partículas Elementales II', 6),
      O('Temas Selectos de Física de Partículas Elementales III', 6),
    ]),
    A('plasmas', 'Área Física de Plasmas', [
      O('Física de Plasmas I', 6),
      O('Física de Plasmas II', 6),
      O('Física de los Plasmas de Baja Temperatura', 6),
      O('Fusión Nuclear Controlada', 6),
      O('Temas Selectos de Física de Plasmas I', 6),
      O('Temas Selectos de Física de Plasmas II', 6),
    ]),
    A('radiaciones', 'Área Física de Radiaciones', [
      O('Introducción a la Física de Radiaciones', 6),
      O('Dosimetría de la Radiación', 9),
      O('Seguridad Radiológica', 7),
      O('Técnicas de Radioisótopos', 9),
      O('Temas Selectos de Física de Radiaciones I', 6),
      O('Temas Selectos de Física de Radiaciones II', 6),
      O('Temas Selectos de Física de Radiaciones III', 6),
    ]),
    A('fisica_matematica', 'Área Física Matemática y Teórica', [
      O('Simetrías en Mecánica Cuántica', 6),
      O('Topología y Geometría Diferencial para Físicos', 6),
      O('Temas Selectos de Física Matemática y Teórica I', 6),
      O('Temas Selectos de Física Matemática y Teórica II', 6),
      O('Temas Selectos de Física Matemática y Teórica III', 6),
    ]),
    A('fisica_nuclear', 'Área Física Nuclear', [
      O('Introducción a la Física Nuclear', 9),
      O('Temas Selectos de Física Nuclear I', 6),
      O('Temas Selectos de Física Nuclear II', 6),
      O('Temas Selectos de Física Nuclear III', 6),
    ]),
    A('materia_condensada', 'Área Materia Condensada Suave', [
      O('Introducción a los Sistemas Químicos y Biológicos', 12),
      O('Materia Condensada Suave', 12),
      O('Temas Selectos de Materia Condensada Suave', 6),
    ]),
    A('fluidos', 'Área Mecánica de Fluidos', [
      O('Elementos de Mecánica de Fluidos', 6),
      O('Mecánica de Fluidos Avanzada', 6),
      O('Temas Selectos de Mecánica de Fluidos I', 6),
      O('Temas Selectos de Mecánica de Fluidos II', 6),
      O('Temas Selectos de Mecánica de Fluidos III', 6),
    ]),
    A('optica', 'Área Óptica', [
      O('Introducción a la Óptica Cuántica', 12),
      O('Láseres', 9),
      O('Óptica Geométrica', 6),
      O('Óptica de Fourier', 6),
      O('Temas Selectos de Óptica I', 6),
      O('Temas Selectos de Óptica II', 6),
      O('Temas Selectos de Óptica III', 6),
    ]),
    A('relatividad', 'Área Relatividad, Cosmología y Gravitación', [
      O('Gravitación y Relatividad General', 6),
      O('Cosmología Física', 6),
      O('Astrofísica Relativista', 6),
      O('Temas Selectos de Relatividad, Cosmología y Gravitación I', 6),
      O('Temas Selectos de Relatividad, Cosmología y Gravitación II', 6),
      O('Temas Selectos de Relatividad, Cosmología y Gravitación III', 6),
    ]),
    A('tecnicas_especiales', 'Área Técnicas Especiales', [
      O('Introducción a la Fotografía Científica', 9),
      O('Fotografía Digital', 9),
      O('Temas Selectos de Fotografía', 9),
      O('Taller', 6),
      O('Aplicaciones de Taller', 6),
      O('Introducción a la Tecnología de Vacío y Aplicaciones', 9),
      O('Técnicas de Crecimiento de Películas Delgadas y Recubrimiento en Vacío', 9),
      O('Temas Selectos de Tecnología del Vacío I', 6),
      O('Temas Selectos de Tecnología del Vacío II', 6),
    ]),
    A('termo_estadistica', 'Área Termodinámica y Física Estadística', [
      O('Fenómenos Cooperativos I', 6),
      O('Fenómenos Cooperativos II', 6),
      O('Temas Selectos de Termodinámica y Física Estadística I', 6),
      O('Temas Selectos de Termodinámica y Física Estadística II', 6),
      O('Temas Selectos de Termodinámica y Física Estadística III', 6),
    ]),
  ];

  var DEFAULTS = [];
  CURRICULUM.forEach(function (s) {
    s.materias.forEach(function (m) {
      DEFAULTS.push({ id: m.id, name: m.name, semestre: String(s.semestre),
                      colorIdx: m.colorIdx, hue: m.hue, profesor: '', dias: [], hora: '' });
    });
  });

  UK.registerData('fisica', {
    TOTAL_CREDITOS: 418,
    CURRICULUM: CURRICULUM,
    OPT_DATA: {},
    OPT_BLOQUES: OPT_BLOQUES,
    LIBRARY: [],
    DEFAULTS: DEFAULTS,
  });
})();
