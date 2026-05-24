/* ═══════════════════════════════════════════════
   libros-data.js  —  Bibliografía UNAM FC · Matemáticas
   ═══════════════════════════════════════════════ */

/* ──────────────────────────────────────────────
   PDF: bookId → { title, driveId }
   driveId = ID del archivo en Google Drive.
   Sustituir con los IDs reales de tus archivos.
   ────────────────────────────────────────────── */
const PDF = {
  as1_b1: { title: "Álgebra Superior — Cárdenas, Lluis, Raggi & Tomás", driveId: "" },
  as1_b2: { title: "Álgebra Elemental — Nachbin", driveId: "" },
  as2_b1: { title: "Álgebra Superior — Cárdenas, Lluis, Raggi & Tomás", driveId: "" },
  as2_b2: { title: "Álgebra Elemental — Nachbin", driveId: "" },
  cd1_b1: { title: "Cálculo Infinitesimal — Spivak", driveId: "" },
  cd1_b2: { title: "Cálculo con Geometría Analítica — Thomas & Finney", driveId: "" },
  ga1_b1: { title: "Geometría Analítica — Ramírez Galarza", driveId: "" },
  ga1_b2: { title: "Geometría Superior — Efimov", driveId: "" },
  al1_b1: { title: "Álgebra Lineal — Hoffman & Kunze", driveId: "" },
  al1_b2: { title: "Álgebra Lineal — Friedberg, Insel & Spence", driveId: "" },
  cd2_b1: { title: "Cálculo Infinitesimal — Spivak", driveId: "" },
  cd2_b2: { title: "Cálculo con Geometría Analítica — Thomas & Finney", driveId: "" },
  ga2_b1: { title: "Geometría Analítica — Ramírez Galarza", driveId: "" },
  ga2_b2: { title: "Geometría Superior — Efimov", driveId: "" },
  cd1_b3: { title: "Cálculo Diferencial e Integral — Arizmendi et al.", driveId: "" },
  cd1_b4: { title: "Differential and Integral Calculus — Courant", driveId: "" },
  cd1_b5: { title: "A First Course in Calculus — Lang", driveId: "" },
  cd2_b3: { title: "Cálculo Diferencial e Integral — Arizmendi et al.", driveId: "" },
  cd2_b4: { title: "Differential and Integral Calculus — Courant", driveId: "" },
  cd2_b5: { title: "A First Course in Calculus — Lang", driveId: "" },
  cd3_b1: { title: "Cálculo Vectorial — Marsden & Tromba", driveId: "" },
  cd3_b2: { title: "Cálculo — Thomas & Finney (Varias Variables)", driveId: "" },
  cd3_b3: { title: "Calculus Vol. II — Apostol", driveId: "" },
  cd3_b4: { title: "Differential and Integral Calculus Vol. II — Courant", driveId: "" },
  cd3_b5: { title: "Introduction to Calculus and Analysis Vol. II — Courant & John", driveId: "" },
  cd3_b6: { title: "Calculus of Several Variables — Lang", driveId: "" },
  al2_b1: { title: "Linear Algebra — Curtis", driveId: "" },
  al2_b2: { title: "Álgebra Lineal — Lang", driveId: "" },
  al2_b3: { title: "Fundamentals of Linear Algebra — Nomizu", driveId: "" },
  al2_b4: { title: "Álgebra Lineal — Rincón Mora", driveId: "" },
  cd4_b1: { title: "Cálculo Vectorial — Marsden & Tromba", driveId: "" },
  cd4_b2: { title: "Cálculo — Thomas & Finney (Varias Variables)", driveId: "" },
  cd4_b3: { title: "Calculus Vol. II — Apostol", driveId: "" },
  cd4_b4: { title: "Differential and Integral Calculus Vol. II — Courant", driveId: "" },
  cd4_b5: { title: "Introduction to Calculus and Analysis Vol. II — Courant & John", driveId: "" },
  cd4_b6: { title: "Calculus of Several Variables — Lang", driveId: "" },
  ga1_b3: { title: "Geometría — Bracho", driveId: "" },
  ga1_b4: { title: "Modern Analytic Geometry — Preston & Lovaglia", driveId: "" },
  ga2_b3: { title: "Geometría — Bracho", driveId: "" },
  ga2_b4: { title: "Modern Analytic Geometry — Preston & Lovaglia", driveId: "" },
  al1_b3: { title: "Linear Algebra — Curtis", driveId: "" },
  al1_b4: { title: "Linear Algebra — Lang", driveId: "" },
  al1_b5: { title: "Fundamentals of Linear Algebra — Nomizu", driveId: "" },
  al1_b6: { title: "Álgebra Lineal — Rincón Mora", driveId: "" },
  ed_b1:  { title: "Ordinary Differential Equations — Arnold", driveId: "" },
  ed_b2:  { title: "Differential Equations — Blanchard, Devaney & Hall", driveId: "" },
  ed_b3:  { title: "Differential Equations and Their Applications — Braun", driveId: "" },
  ed_b4:  { title: "Elementary Differential Equations — Derrick & Grossman", driveId: "" },
  ana_b1: { title: "Principles of Mathematical Analysis — Rudin", driveId: "" },
  ana_b2: { title: "Elementos de Análisis Funcional — Kolmogorov & Fomin", driveId: "" },
  ana_b3: { title: "Mathematical Analysis — Apostol", driveId: "" },
  ana_b4: { title: "Introduction to Real Analysis — Bartle & Sherbert", driveId: "" },
  ana_b5: { title: "Postmodern Analysis — Jost", driveId: "" },
  ana_b6: { title: "Measure and Integral — Wheeden & Zygmund", driveId: "" },
  an2_b1: { title: "Principles of Mathematical Analysis — Rudin", driveId: "" },
  an2_b2: { title: "Measure and Integral — Wheeden & Zygmund", driveId: "" },
  an2_b3: { title: "Mathematical Analysis — Apostol", driveId: "" },
  an2_b4: { title: "Introduction to Real Analysis — Bartle & Sherbert", driveId: "" },
  an2_b5: { title: "Postmodern Analysis — Jost", driveId: "" },
  an2_b6: { title: "Elementos de Análisis Funcional — Kolmogorov & Fomin", driveId: "" },
  vc1_b1: { title: "Complex Analysis — Ahlfors", driveId: "" },
  vc1_b2: { title: "Complex Variables and Applications — Churchill & Brown", driveId: "" },
  vc1_b3: { title: "Variable Compleja — Lascurain Orive", driveId: "" },
  vc1_b4: { title: "Basic Complex Analysis — Marsden & Hoffman", driveId: "" },
  alm_b1: { title: "Topics in Algebra — Herstein", driveId: "" },
  alm_b2: { title: "A First Course in Abstract Algebra — Fraleigh", driveId: "" },
  alm_b3: { title: "An Introduction to the Theory of Groups — Rotman", driveId: "" },
  // ── Conjuntos Convexos (optativa, Bloque I) ──
  cc_b1:  { title: "Euclidean Geometry and Convexity — Benson", driveId: "" },
  cc_b2:  { title: "División de Figuras en Partes Menores — Boltianski & Golberg", driveId: "" },
  cc_b3:  { title: "Geometric Inequalities — Kazarinoff", driveId: "" },
  cc_b4:  { title: "Lo Antiguo y lo Nuevo acerca de los Conjuntos Convexos — Hadwiger", driveId: "" },
  cc_b5:  { title: "Combinatorial Geometry in the Plane — Hadwiger & Debrunner", driveId: "" },
  cc_b6:  { title: "Convex Figures — Yaglom & Boltianski", driveId: "" },
  // ── Diseño de Sistemas Digitales (optativa, Bloque I) ──
  dsd_b1: { title: "Digital Design — Mano", driveId: "" },
  // ── Electromagnetismo I (optativa, Bloque I) ──
  em1_b1: { title: "Fundamentos de Física Vol. II — Halliday, Resnick & Walker", driveId: "" },
  em1_b2: { title: "Electromagnetism: Principles and Applications — Lorrain & Corson", driveId: "" },
  em1_b3: { title: "Electricidad y Magnetismo — Purcell", driveId: "" },
  em1_b4: { title: "Física Vol. II — Resnick, Halliday & Krane", driveId: "" },
  em1_b5: { title: "Física II — Serway & Jewett", driveId: "" },
  em1_b6: { title: "Electricidad y Magnetismo — Serway", driveId: "" },
  em1_b7: { title: "Space Time Physics — Taylor & Wheeler", driveId: "" },
  em1_b8: { title: "Introducción a la Teoría Especial de la Relatividad — Resnick", driveId: "" },
  // ── Fenómenos Colectivos (optativa, Bloque I) ──
  fc_b1:  { title: "Introducción al estudio de la mecánica, materia y ondas — Ingard & Kraushaar", driveId: "" },
  fc_b2:  { title: "Termodinámica Clásica — Carmona", driveId: "" },
  fc_b3:  { title: "Physical Hydrodynamics — Guyon, Hullin, Petit & Mitescu", driveId: "" },
  fc_b4:  { title: "Physics of Waves — Elmore & Heald", driveId: "" },
  // ── Conjuntos y Lógica (optativa, Bloque I) ──
  cyl_b1: { title: "Sobre un Curso de Análisis Lógico — Amor", driveId: "" },
  cyl_b2: { title: "Elementos de Lógica Formal — Badesa, Jané & Jansana", driveId: "" },
  cyl_b3: { title: "Lógica Elemental — Fernández, Preisser, Segura & Torres", driveId: "" },
  cyl_b4: { title: "Teoría de Conjuntos y Temas Afines — Lipschutz", driveId: "" },
  cyl_b5: { title: "Cómo Entender y Hacer Demostraciones en Matemáticas — Solow", driveId: "" },
  cyl_b6: { title: "El Método de la Inducción Matemática — Sominski", driveId: "" },
  cyl_b7: { title: "Manual de Lógica para Estudiantes de Matemáticas — Zubieta", driveId: "" },
  cyl_b8: { title: "Taller de Lógica Matemática — Zubieta", driveId: "" },
  // ── Geometría Moderna II (optativa, Bloque I) ──
  gm2_b1: { title: "An Introduction to the Modern Geometry of the Triangle and the Circle — Altshiller", driveId: "" },
  gm2_b2: { title: "Non-euclidean Geometry — Menschkowsky", driveId: "" },
  gm2_b3: { title: "Introducción a la Geometría Moderna — Shively", driveId: "" },
  // ── Geometría Proyectiva (optativa, Bloque I) ──
  gp_b1:  { title: "The Octonians — Baez", driveId: "" },
  gp_b2:  { title: "Projective Geometry: From Foundations to Applications — Beutelspacher & Rosenbaum", driveId: "" },
  gp_b3:  { title: "Projective Geometry — Coxeter", driveId: "" },
  gp_b4:  { title: "Foundations of Projective Geometry — Hartshorne", driveId: "" },
  gp_b5:  { title: "Projective Geometry and its Application to Computer Graphics — Penna", driveId: "" },
  gp_b6:  { title: "Elementos de Geometría Proyectiva — Seidenberg", driveId: "" },
  // ── Gráficas y Juegos (optativa, Bloque I) ──
  gyj_b1: { title: "Graphs — Berge", driveId: "" },
  gyj_b2: { title: "Graph Theory with Applications — Bondy & Murty", driveId: "" },
  gyj_b3: { title: "Introductory Graph Theory — Chartrand", driveId: "" },
  gyj_b4: { title: "Graph Theory — Harary", driveId: "" },
  // ── Introducción a Ciencias de la Computación II (optativa, Bloque I) ──
  icc2_b1: { title: "Fundamentals of Computing II — Tucker, Bradley, Cupper et al.", driveId: "" },
  icc2_b2: { title: "Estructuras de Datos — Magidin", driveId: "" },
  // ── Introducción a la Geometría Avanzada (optativa, Bloque I) ──
  iga_b1:  { title: "Fundamentos de Geometría — Coxeter", driveId: "" },
  iga_b2:  { title: "Projective Geometry — Coxeter", driveId: "" },
  iga_b3:  { title: "Non-euclidean Geometry — Coxeter", driveId: "" },
  iga_b4:  { title: "Geometry Revisited — Coxeter", driveId: "" },
  iga_b5:  { title: "Introducción a la Geometría Avanzada — Ramírez-Galarza & Seade", driveId: "" },
  iga_b6:  { title: "Invitación a las Geometrías No-euclideanas — Ramírez-Galarza & Sienra", driveId: "" },
  iga_b7:  { title: "Geometry and the Imagination — Hilbert & Cohn-Vossen", driveId: "" },
  iga_b8:  { title: "Transformation Geometry — Martin", driveId: "" },
  // ── Matemáticas Discretas (optativa, Bloque I) ──
  md_b1:  { title: "Mathematical Structures For Computer Science — Gersting", driveId: "" },
  md_b2:  { title: "A Logical Approach to Discrete Math — Gries & Schneider", driveId: "" },
  // ── Álgebra Moderna II (optativa, Bloque II) ──
  am2_b1: { title: "Álgebra Abstracta — Fraleigh", driveId: "" },
  am2_b2: { title: "Álgebra Moderna — Herstein", driveId: "" },
  am2_b3: { title: "Galois Theory — Stewart", driveId: "" },
};

/* ──────────────────────────────────────────────
   LIBRARY: organizado por materia.
   Tipos de nota:
     def  →  Definición
     teo  →  Teorema
     cor  →  Corolario
     dem  →  Demostración
     eje  →  Ejemplo
     obs  →  Observación
   ────────────────────────────────────────────── */
const LIBRARY = [
  {
    subject: "Álgebra Superior I",
    matId: "algebra_superior_1",
    color: "linear-gradient(135deg,#061412,#0f2920)",
    books: [
      {
        id: "as1_b1",
        title: "Álgebra Superior",
        author: "Cárdenas, Lluis, Raggi & Tomás",
        edition: "Trillas, 1974",
        chapters: []
      },
      {
        id: "as1_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986",
        chapters: []
      },
    ]
  },

  {
    subject: "Álgebra Superior II",
    matId: "algebra_superior_2",
    color: "linear-gradient(135deg,#0a0612,#180e2a)",
    books: [
      {
        id: "as2_b1",
        title: "Álgebra Superior",
        author: "Cárdenas, Lluis, Raggi & Tomás",
        edition: "Trillas, 1974",
        chapters: []
      },
      {
        id: "as2_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986",
        chapters: []
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral I",
    matId: "calculo_1",
    color: "linear-gradient(135deg,#070d1a,#0e1f3a)",
    books: [
      {
        id: "cd1_b1",
        title: "Cálculo Infinitesimal",
        author: "Michael Spivak",
        edition: "2ª ed. Reverté, 1998",
        chapters: []
      },
      {
        id: "cd1_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987",
        chapters: []
      },
      {
        id: "cd1_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: []
      },
      {
        id: "cd1_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937",
        chapters: []
      },
      {
        id: "cd1_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986",
        chapters: []
      },
    ]
  },

  {
    subject: "Geometría Analítica I",
    matId: "geo_analitica_1",
    color: "linear-gradient(135deg,#120a1a,#271540)",
    books: [
      {
        id: "ga1_b1",
        title: "Geometría Analítica: Una Introducción a la Geometría",
        author: "Ana Irene Ramírez Galarza",
        edition: "Las Prensas de Ciencias, UNAM, 2004",
        chapters: []
      },
      {
        id: "ga1_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984",
        chapters: []
      },
      {
        id: "ga1_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009",
        chapters: []
      },
      {
        id: "ga1_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970",
        chapters: []
      },
    ]
  },

  {
    subject: "Geometría Analítica II",
    matId: "geo_analitica_2",
    color: "linear-gradient(135deg,#1a0e26,#301845)",
    books: [
      {
        id: "ga2_b1",
        title: "Geometría Analítica: Una Introducción a la Geometría",
        author: "Ana Irene Ramírez Galarza",
        edition: "Las Prensas de Ciencias, UNAM, 1998",
        chapters: []
      },
      {
        id: "ga2_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984",
        chapters: []
      },
      {
        id: "ga2_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009",
        chapters: []
      },
      {
        id: "ga2_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970",
        chapters: []
      },
    ]
  },

  {
    subject: "Álgebra Lineal I",
    matId: "algebra_lineal_1",
    color: "linear-gradient(135deg,#0a1a0e,#133322)",
    books: [
      {
        id: "al1_b1",
        title: "Álgebra Lineal",
        author: "Hoffman & Kunze",
        edition: "Prentice Hall, 1973",
        chapters: []
      },
      {
        id: "al1_b2",
        title: "Álgebra Lineal",
        author: "Friedberg, Insel & Spence",
        edition: "Publicaciones Cultural, 1982",
        chapters: []
      },
      {
        id: "al1_b3",
        title: "Linear Algebra",
        author: "Morton L. Curtis",
        edition: "Springer, 1984",
        chapters: []
      },
      {
        id: "al1_b4",
        title: "Linear Algebra",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: []
      },
      {
        id: "al1_b5",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966",
        chapters: []
      },
      {
        id: "al1_b6",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: []
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral II",
    matId: "calculo_2",
    color: "linear-gradient(135deg,#070d1a,#0e1f3a)",
    books: [
      {
        id: "cd2_b1",
        title: "Cálculo Infinitesimal",
        author: "Michael Spivak",
        edition: "2ª ed. Reverté, 1998",
        chapters: []
      },
      {
        id: "cd2_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987",
        chapters: []
      },
      {
        id: "cd2_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: []
      },
      {
        id: "cd2_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937",
        chapters: []
      },
      {
        id: "cd2_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986",
        chapters: []
      },
    ]
  },

  {
    subject: "Ecuaciones Diferenciales I",
    matId: "ecuaciones_diferenciales_1",
    color: "linear-gradient(135deg,#0d0a07,#2a1e0e)",
    books: [
      {
        id: "ed_b1",
        title: "Ordinary Differential Equations",
        author: "V.I. Arnold",
        edition: "Springer, 1992",
        chapters: []
      },
      {
        id: "ed_b2",
        title: "Differential Equations",
        author: "Blanchard, Devaney & Hall",
        edition: "4ª ed. Cengage, 2012",
        chapters: []
      },
      {
        id: "ed_b3",
        title: "Differential Equations and Their Applications",
        author: "Martin Braun",
        edition: "4ª ed. Springer, 1993",
        chapters: []
      },
      {
        id: "ed_b4",
        title: "Elementary Differential Equations",
        author: "Derrick & Grossman",
        edition: "4ª ed. Addison-Wesley, 1997",
        chapters: []
      },
    ]
  },

  {
    subject: "Análisis Matemático I",
    matId: "analisis_matematico_1",
    color: "linear-gradient(135deg,#0a1209,#162519)",
    books: [
      {
        id: "ana_b3",
 title: "Análisis Matemático",
 author: "Tom M. Apostol",
 edition: "2ª ed. Reverté, 1977",
 chapters: [
          {
            num: 1, title: "El sistema de los números reales y el sistema de los números complejos",
            notes: [
      { type:"sublabel", label:"Axiomas de campo y orden" },
      { type:"def", label:"Axioma 1", tex:"$$\\begin{aligned} x + y &= y + x \\\\ xy &= yx \\end{aligned}$$", description:"Leyes conmutativas", dem:null, sourcePage:"p. 2" },
      { type:"def", label:"Axioma 2", tex:"$$\\begin{aligned} x + (y + z) &= (x + y) + z \\\\ x(yz) &= (xy)z \\end{aligned}$$", description:"Leyes asociativas", dem:null, sourcePage:"p. 2" },
      { type:"def", label:"Axioma 3", tex:"$$x(y + z) = xy + xz$$", description:"Ley distributiva", dem:null, sourcePage:"p. 2" },
      { type:"def", label:"Axioma 4", tex:"Dados dos números reales cualesquiera $x$ e $y$ existe un número real $z$ tal que $x + z = y$. Dicho número $z$ se designará por $y - x$; el número $x - x$ se designará por $0$. Escribiremos $-x$ en vez de $0 - x$ y al número $-x$ lo llamaremos opuesto de $x$.", dem:null, sourcePage:"p. 2" },
      { type:"def", label:"Axioma 5", tex:"Existe, por lo menos, un número real $x \\neq 0$. Si $x$ e $y$ son dos números reales con $x \\neq 0$, entonces existe un número $z$ tal que $xz = y$. Dicho número $z$ se designará por $y/x$; el número $x/x$ se designará por $1$. Escribiremos $x^{-1}$ en vez de $1/x$ si $x \\neq 0$ y a $x^{-1}$ lo llamaremos recíproco o inverso de $x$.", dem:null, sourcePage:"p. 2" },
      { type:"def", label:"Ley de tricotomía", tex:"Se verifica una y sólo una de las relaciones $x = y$, $x < y$, $x > y$.", description:"Ley de tricotomía. ($x > y$ significa lo mismo que $y < x$.)", dem:null, sourcePage:"p. 3" },
      { type:"def", label:"Axioma 7", tex:"$$x < y \\implies x + z < y + z \\quad \\forall\\, z$$", dem:null, sourcePage:"p. 3" },
      { type:"def", label:"Axioma 8", tex:"$$x > 0 \\quad \\text{e} \\quad y > 0 \\implies xy > 0$$", dem:null, sourcePage:"p. 3" },
      { type:"def", label:"Ley de transitividad", tex:"$$x > y \\quad \\text{e} \\quad y > z \\implies x > z$$", description:"Ley de transitividad.", dem:null, sourcePage:"p. 3" },
      { type:"obs", label:"Nota", tex:"Un número real $x$ se llama positivo si $x > 0$ y negativo si $x < 0$. Designaremos por $\\mathbb{R}^{+}$ el conjunto de todos los números reales positivos y por $\\mathbb{R}^{-}$ el de todos los negativos. El simbolismo $x \\leq y$ abrevia '$x < y$ o $x = y$'. Un número real $x$ se llama no negativo si $x \\geq 0$.", dem:null, sourcePage:"p. 3" },
      { type:"sublabel", label:"Teoremas y consecuencias" },
      { type:"teo", label:"Principio de aproximación por épsilon", tex:"Sean $a$ y $b$ números reales tales que $a \\leq b + \\varepsilon$ para cada $\\varepsilon > 0$. Entonces $a \\leq b$.", dem:"Si $b < a$, entonces la desigualdad no se satisface para $\\varepsilon = (a-b)/2$, puesto que $b + \\varepsilon = (a+b)/2 < a$. Por el axioma 6, resulta $a \\leq b$. $\\blacksquare$", sourcePage:"p. 3" },
      { type:"def", label:"Intervalos", tex:"Supongamos $a < b$. $$\\begin{aligned} (a,b) &= \\{x : a < x < b\\} \\\\ [a,b] &= \\{x : a \\leq x \\leq b\\} \\\\ (a,b] &= \\{x : a < x \\leq b\\} \\\\ [a,b) &= \\{x : a \\leq x < b\\} \\end{aligned}$$ Los intervalos infinitos: $$\\begin{aligned} (a,+\\infty) &= \\{x : x > a\\}, & [a,+\\infty) &= \\{x : x \\geq a\\} \\\\ (-\\infty,a) &= \\{x : x < a\\}, & (-\\infty,a] &= \\{x : x \\leq a\\} \\end{aligned}$$ Los símbolos $+\\infty$ y $-\\infty$ no son números reales.", dem:null, sourcePage:"pp. 4-5" },
      { type:"sublabel", label:"Enteros y aritmética" },
      { type:"def", label:"Conjunto inductivo", tex:"Un conjunto de números reales se denomina conjunto inductivo si: (a) el número $1$ está en el conjunto; (b) para cada $x$ del conjunto, el número $x+1$ está también en el conjunto.", dem:null, sourcePage:"p. 5" },
      { type:"def", label:"Enteros positivos", tex:"Un número real se denomina entero positivo si pertenece a cada uno de los conjuntos inductivos. El conjunto de los enteros positivos se designa por $\\mathbb{Z}^{+}$.", note:"$\\mathbb{Z}^{+}$ es el menor conjunto inductivo (principio de inducción). Los opuestos de los enteros positivos son los enteros negativos. Junto con el $0$ forman el conjunto $\\mathbb{Z}$ de los enteros.", dem:null, sourcePage:"p. 5" },
      { type:"teo", label:"Todo entero mayor que 1 es primo o producto de primos", tex:"Cada entero $n > 1$ es primo o producto de primos.", dem:"Por inducción sobre $n$. Trivial para $n=2$. Si $n$ no es primo, admite $d$ con $1 < d < n$, luego $n = cd$ con $1 < c < n$. Como $c$ y $d$ son $< n$, cada uno es primo o producto de primos. $\\blacksquare$", sourcePage:"p. 6" },
      { type:"teo", label:"Divisor común como combinación lineal", tex:"Cada par de enteros $a$ y $b$ admite un divisor común $d$ de la forma $$d = ax + by$$ donde $x$ e $y$ son enteros. Además, cada divisor común de $a$ y $b$ divide a $d$.", note:"El no negativo de entre $d$ y $-d$ se denomina máximo común divisor, $\\operatorname{mcd}(a,b)$ o $(a,b)$. Si $(a,b)=1$, se dice que $a$ y $b$ son primos entre sí.", dem:"Por inducción sobre $n = a + b$ (con $a,b \\geq 0$). Si $n = 0$: $d = 0$, $x = y = 0$. Si $b = 0$: $d = a$, $x = 1$, $y = 0$. Si $b \\geq 1$: aplicar hipótesis a $a-b$ y $b$ (suma $\\leq n-1$), obteniéndose $d = (a-b)x + by = ax + (y-x)b$. Todo divisor común divide a $d$ pues divide a $a$ y $b$. El caso $a < 0$ o $b < 0$ se reduce a $|a|$, $|b|$. $\\blacksquare$", sourcePage:"p. 6" },
      { type:"teo", label:"Lema de Euclides", tex:"Si $a \\mid bc$ y $(a,b) = 1$, entonces $a \\mid c$.", dem:"Como $(a,b)=1$, existen $x,y$ con $1 = ax+by$. Entonces $c = acx+bcy$. Como $a \\mid acx$ y $a \\mid bcy$, se tiene $a \\mid c$. $\\blacksquare$", sourcePage:"p. 7" },
      { type:"teo", label:"Primo que divide un producto", tex:"Si un número primo $p$ divide a $ab$, entonces $p \\mid a$ o $p \\mid b$. En general, si $p$ divide a $a_1 \\cdots a_k$, entonces $p$ divide a uno de los factores.", dem:"Supongamos $p \\mid ab$ y $p \\nmid a$. Sea $d=(p,a)$; entonces $d \\mid p$, luego $d=1$ o $d=p$. Como $d \\mid a$ y $p \\nmid a$, $d=1$. Por el lema de Euclides, $p \\mid b$. El caso general por inducción sobre $k$. $\\blacksquare$", sourcePage:"p. 7" },
      { type:"teo", label:"Teorema de descomposición única", tex:"Cada entero $n > 1$ puede ser representado como producto de factores primos, y si se prescinde del orden de los factores la representación es única.", dem:"Por inducción sobre $n$. Si $n = p_1 \\cdots p_s = q_1 \\cdots q_t$, entonces $p_1 \\mid q_1 \\cdots q_t$, luego $p_1 = q_1$. Dividiendo: $n/p_1 = p_2 \\cdots p_s = q_2 \\cdots q_t$. Por hipótesis de inducción las descomposiciones de $n/p_1$ son idénticas. $\\blacksquare$", sourcePage:"pp. 7-8" },
      { type:"teo", label:"Irracionalidad de $\\sqrt{n}$", tex:"Si $n$ es un entero positivo que no sea un cuadrado perfecto, entonces $\\sqrt{n}$ es irracional.", dem:"Supongamos primero que $n$ no admite divisores $> 1$ que sean cuadrados perfectos. Si $\\sqrt{n} = a/b$ con $(a,b)=1$, entonces $nb^2 = a^2$. Como $n \\mid a^2$ y $n$ no tiene factores cuadráticos, $n \\mid a$, luego $a = cn$. Sustituyendo: $b^2 = nc^2$, por lo que $n \\mid b$. Contradicción con $(a,b)=1$. Si $n = m^2 k$ con $k$ libre de cuadrados, entonces $\\sqrt{n} = m\\sqrt{k}$; si $\\sqrt{n}$ fuese racional, $\\sqrt{k}$ también lo sería. $\\blacksquare$", sourcePage:"pp. 8-9" },
      { type:"teo", label:"Irracionalidad de $e$", tex:"El número $e$ es irracional.", note:"Para una demostración de la irracionalidad de $\\pi$, ver Ejercicio 7.33.", dem:"Se prueba que $e^{-1}$ es irracional. La serie $e^{-1} = \\sum_{k=0}^{\\infty} (-1)^k/k!$ es alternada con términos decrecientes, luego $0 < e^{-1} - s_{2k-1} < 1/(2k)!$. Multiplicando por $(2k-1)!$: el término $(2k-1)! s_{2k-1}$ es entero, y $0 < (2k-1)!(e^{-1} - s_{2k-1}) < 1/2$. Si $e^{-1}$ fuese racional, $(2k-1)! e^{-1}$ sería entero para $k$ suficientemente grande, dejando una diferencia de enteros estrictamente entre $0$ y $1/2$, imposible. $\\blacksquare$", sourcePage:"p. 9" },
      { type:"sublabel", label:"Completitud de ℝ" },
      { type:"def", label:"Cota superior y supremo", tex:"Sea $S$ un conjunto de números reales. Si existe $b \\in \\mathbb{R}$ tal que $x \\leq b$ para todo $x \\in S$, decimos que $b$ es una cota superior de $S$. Si una cota superior $b$ es también elemento de $S$, se denomina elemento máximo y se escribe $b = \\max S$. Un número $b$ es el supremo de $S$ si: (i) $b$ es cota superior de $S$, y (ii) ningún número menor que $b$ es cota superior de $S$. Se escribe $b = \\sup S$.", dem:null, sourcePage:"p. 10" },
      { type:"def", label:"Cota inferior e ínfimo", tex:"Sea $S$ un conjunto de números reales. Si existe $b \\in \\mathbb{R}$ tal que $b \\leq x$ para todo $x \\in S$, decimos que $b$ es una cota inferior de $S$. Si una cota inferior $b$ es elemento de $S$, se denomina elemento mínimo y se escribe $b = \\min S$. Un número $b$ es el ínfimo de $S$ si: (i) $b$ es cota inferior de $S$, y (ii) ningún número mayor que $b$ es cota inferior de $S$. Se escribe $b = \\inf S$.", dem:null, sourcePage:"pp. 10-11" },
      { type:"def", label:"Axioma de completitud", tex:"Todo conjunto no vacío $S$ de números reales que esté acotado superiormente admite un supremo; es decir, existe un número real $b$ tal que $b = \\sup S$.", dem:null, sourcePage:"p. 11" },
      { type:"teo", label:"Propiedad de la aproximación", tex:"Sea $S$ no vacío con supremo $b = \\sup S$. Entonces, para cada $a < b$ existe un $x \\in S$ tal que $a < x \\leq b$.", dem:"Todo $x \\in S$ cumple $x \\leq b$. Si fuese $x \\leq a$ para todo $x \\in S$, $a$ sería cota superior menor que el supremo, contradicción. $\\blacksquare$", sourcePage:"p. 12" },
      { type:"teo", label:"Propiedad aditiva del supremo", tex:"Sean $A$ y $B$ subconjuntos no vacíos de $\\mathbb{R}$, y $C = \\{x + y : x \\in A,\\, y \\in B\\}$. Si $A$ y $B$ tienen supremo, entonces $$\\sup C = \\sup A + \\sup B.$$", dem:"Sea $a = \\sup A$, $b = \\sup B$. Para todo $z = x+y \\in C$: $z \\leq a+b$, luego $c = \\sup C \\leq a+b$. Para cualquier $\\varepsilon > 0$, por el Teorema 1.14 existen $x \\in A$ y $y \\in B$ con $a - \\varepsilon < x$ y $b - \\varepsilon < y$, luego $a + b - 2\\varepsilon < x+y \\leq c$. Por el Teorema 1.1, $a+b \\leq c$. $\\blacksquare$", sourcePage:"p. 12" },
      { type:"teo", label:"Propiedad de la comparación", tex:"Sean $S$ y $T$ subconjuntos no vacíos de $\\mathbb{R}$ tales que $s \\leq t$ para todo $s \\in S$ y todo $t \\in T$. Si $T$ tiene supremo, entonces $S$ tiene supremo y $\\sup S \\leq \\sup T$.", dem:null, sourcePage:"p. 13" },
      { type:"teo", label:"$\\mathbb{Z}^+$ no está acotado superiormente", tex:"El conjunto $\\mathbb{Z}^{+}$ de los enteros positivos $1, 2, 3, \\ldots$ no está acotado superiormente.", dem:"Si $\\mathbb{Z}^{+}$ estuviese acotado superiormente, tendría supremo $a = \\sup \\mathbb{Z}^{+}$. Por el Teorema 1.14, $a - 1 < n$ para algún $n \\in \\mathbb{Z}^{+}$, luego $n+1 > a$. Pero $n+1 \\in \\mathbb{Z}^{+}$, contradicción. $\\blacksquare$", sourcePage:"p. 13" },
      { type:"teo", label:"Propiedad arquimediana", tex:"Para cada número real $x$ existe un entero positivo $n$ tal que $n > x$.", dem:"Si no existiese tal $n$, $x$ sería cota superior de $\\mathbb{Z}^+$, contradiciendo que $\\mathbb{Z}^+$ no está acotado. $\\blacksquare$", sourcePage:"p. 13" },
      { type:"teo", label:"Propiedad arquimediana (forma general)", tex:"Si $x > 0$ e $y$ es un número real arbitrario, existe un entero positivo $n$ tal que $nx > y$.", dem:"Aplicar la propiedad arquimediana a $y/x$. $\\blacksquare$", sourcePage:"p. 13" },
      { type:"teo", label:"Densidad de $\\mathbb{Q}$ en $\\mathbb{R}$", tex:"Si $x > 0$ e $y < z$, existe un número racional $r$ tal que $y < r < z$.", dem:"Existe $n \\in \\mathbb{Z}^+$ con $n(z-y) > 1$. Sea $m$ el menor entero con $m > ny$; entonces $ny < m \\leq ny+1 < nz$. Dividiendo: $y < m/n < z$. $\\blacksquare$", sourcePage:"pp. 13-14" },
      { type:"sublabel", label:"Valor absoluto" },
      { type:"def", label:"Valor absoluto", tex:"$$|x| = \\begin{cases} x & \\text{si } x \\geq 0, \\\\ -x & \\text{si } x < 0. \\end{cases}$$", dem:null, sourcePage:"p. 15" },
      { type:"teo", label:"Desigualdad triangular", tex:"Para todo $x, y \\in \\mathbb{R}$: $$|x + y| \\leq |x| + |y|.$$", dem:"De $-|x| \\leq x \\leq |x|$ y $-|y| \\leq y \\leq |y|$, sumando: $-(|x|+|y|) \\leq x+y \\leq |x|+|y|$, lo que equivale a $|x+y| \\leq |x|+|y|$. $\\blacksquare$", sourcePage:"p. 15" },
      { type:"teo", label:"Desigualdad triangular inversa", tex:"Para todo $x, y \\in \\mathbb{R}$: $$\\big||x| - |y|\\big| \\leq |x - y|.$$", dem:"De la desigualdad triangular: $|x| = |(x-y)+y| \\leq |x-y|+|y|$, luego $|x|-|y| \\leq |x-y|$. Por simetría $|y|-|x| \\leq |x-y|$. $\\blacksquare$", sourcePage:"p. 16" },
      { type:"sublabel", label:"Números complejos ℂ" },
      { type:"def", label:"Número complejo", tex:"Un número complejo es un par ordenado $(x_1, x_2) \\in \\mathbb{R}^2$. La suma y el producto se definen por $$\\begin{aligned} (x_1,x_2)+(y_1,y_2) &= (x_1+y_1,\\, x_2+y_2) \\\\ (x_1,x_2)(y_1,y_2) &= (x_1 y_1 - x_2 y_2,\\, x_1 y_2 + x_2 y_1) \\end{aligned}$$ El conjunto de todos los números complejos se designa por $\\mathbb{C}$.", dem:null, sourcePage:"p. 19" },
      { type:"teo", label:"Leyes algebraicas en $\\mathbb{C}$", tex:"Las operaciones de suma y multiplicación en $\\mathbb{C}$ satisfacen las leyes conmutativa, asociativa y distributiva.", dem:"Solo se demuestra la distributiva. Si $x=(x_1,x_2)$, $y=(y_1,y_2)$, $z=(z_1,z_2)$: $$x(y+z) = (x_1 y_1+x_1 z_1-x_2 y_2-x_2 z_2,\\; x_1 y_2+x_1 z_2+x_2 y_1+x_2 z_1) = xy+xz.$$ $\\blacksquare$", sourcePage:"pp. 19-20" },
      { type:"def", label:"Unidad imaginaria", tex:"El número complejo $(0,1)$ se representa por $i$ y se llama unidad imaginaria. Se cumple $i^2 = -1$.", dem:null, sourcePage:"p. 22" },
      { type:"def", label:"Forma binómica", tex:"Todo número complejo $(x_1, x_2)$ puede escribirse como $z = x_1 + ix_2$, donde $\\operatorname{Re}(z) = x_1$ es la parte real e $\\operatorname{Im}(z) = x_2$ es la parte imaginaria.", dem:null, sourcePage:"p. 22" },
      { type:"def", label:"Conjugado complejo", tex:"Si $z = x_1 + ix_2$, el conjugado de $z$ es $\\bar{z} = x_1 - ix_2$. Se tiene $z\\bar{z} = x_1^2 + x_2^2 \\geq 0$.", dem:null, sourcePage:"p. 22" },
      { type:"sublabel", label:"Módulo y desigualdades" },
      { type:"def", label:"Módulo de un número complejo", tex:"El módulo o valor absoluto de $z = (x_1,x_2) \\in \\mathbb{C}$ es $$|z| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{z\\bar{z}}.$$", dem:null, sourcePage:"p. 23" },
      { type:"teo", label:"Desigualdad triangular en $\\mathbb{C}$", tex:"Para todo $z, w \\in \\mathbb{C}$: $$|z + w| \\leq |z| + |w|.$$", dem:"Se tiene $|z+w|^2 = z\\bar{z} + z\\bar{w} + \\bar{z}w + w\\bar{w} = |z|^2 + 2\\operatorname{Re}(z\\bar{w}) + |w|^2 \\leq (|z|+|w|)^2$. $\\blacksquare$", sourcePage:"p. 24" },
      { type:"teo", label:"Desigualdad de Cauchy-Schwarz", tex:"Si $a_1, \\ldots, a_n$ y $b_1, \\ldots, b_n$ son números reales cualesquiera, se tiene $$\\left(\\sum_{k=1}^{n} a_k b_k\\right)^2 \\leq \\left(\\sum_{k=1}^{n} a_k^2\\right)\\left(\\sum_{k=1}^{n} b_k^2\\right).$$ La igualdad se verifica si y sólo si existe $x \\in \\mathbb{R}$ tal que $a_k x + b_k = 0$ para cada $k$.", note:"En notación vectorial: $(\\mathbf{a} \\cdot \\mathbf{b})^2 \\leq \\|\\mathbf{a}\\|^2 \\|\\mathbf{b}\\|^2$.", dem:"Sea $A = \\sum a_k^2$, $B = \\sum a_k b_k$, $C = \\sum b_k^2$. La suma $\\sum(a_k x + b_k)^2 \\geq 0$ puede escribirse $Ax^2 + 2Bx + C \\geq 0$. Si $A > 0$, tomando $x = -B/A$ se obtiene $B^2 - AC \\leq 0$. Si $A = 0$, la demostración es trivial. $\\blacksquare$", sourcePage:"p. 17" },
      { type:"def", label:"Sistema ampliado de los números reales $\\mathbb{R}^*$", tex:"El sistema ampliado $\\mathbb{R}^*$ es el conjunto $\\mathbb{R}$ junto con dos símbolos $+\\infty$ y $-\\infty$ que satisfacen: (a) si $x \\in \\mathbb{R}$: $x + (+\\infty) = +\\infty$, $x + (-\\infty) = -\\infty$, $x/(\\pm\\infty) = 0$; (b) si $x > 0$: $x(+\\infty) = +\\infty$, $x(-\\infty) = -\\infty$; (c) si $x < 0$: $x(+\\infty) = -\\infty$, $x(-\\infty) = +\\infty$; (d) $(+\\infty)+(+\\infty) = +\\infty$, $(-\\infty)+(-\\infty) = -\\infty$, $(+\\infty)(+\\infty) = (-\\infty)(-\\infty) = +\\infty$, $(+\\infty)(-\\infty) = -\\infty$; (e) si $x \\in \\mathbb{R}$: $-\\infty < x < +\\infty$.", dem:null, sourcePage:"p. 18" },
      { type:"def", label:"Entorno de $\\pm\\infty$", tex:"Cada intervalo abierto $(a, +\\infty)$ se denomina entorno de $+\\infty$. Cada intervalo abierto $(-\\infty, a)$ se denomina entorno de $-\\infty$.", dem:null, sourcePage:"p. 18" },
      { type:"sublabel", label:"Estructura algebraica de ℂ" },
      { type:"teo", label:"Elementos neutros en $\\mathbb{C}$", tex:"$$\\begin{aligned} (x_1,x_2)+(0,0) &= (x_1,x_2) \\\\ (x_1,x_2)(1,0) &= (x_1,x_2) \\\\ (x_1,x_2)+(-x_1,-x_2) &= (0,0) \\end{aligned}$$", dem:"Inmediata a partir de las definiciones. $\\blacksquare$", sourcePage:"p. 20" },
      { type:"teo", label:"Resta en $\\mathbb{C}$", tex:"Dados $x = (x_1,x_2)$ e $y = (y_1,y_2)$, existe $z \\in \\mathbb{C}$ tal que $x + z = y$. De hecho, $z = (y_1-x_1, y_2-x_2)$. Este $z$ se designa por $y - x$; el número $(-x_1,-x_2)$ se designa por $-x$.", dem:null, sourcePage:"p. 20" },
      { type:"teo", label:"Signo y producto en $\\mathbb{C}$", tex:"Para cualquier par de números complejos $x$ e $y$: $$(-x)y = x(-y) = -(xy) = (-1,0)(xy).$$", dem:null, sourcePage:"p. 20" },
      { type:"def", label:"Inverso y cociente en $\\mathbb{C}$", tex:"Si $x = (x_1,x_2) \\neq (0,0)$ e $y \\in \\mathbb{C}$, se define $$\\begin{aligned} x^{-1} &= \\left(\\frac{x_1}{x_1^2+x_2^2},\\, \\frac{-x_2}{x_1^2+x_2^2}\\right) \\\\ y/x &= y\\,x^{-1} \\end{aligned}$$", dem:null, sourcePage:"p. 21" },
      { type:"teo", label:"División en $\\mathbb{C}$", tex:"Si $x, y \\in \\mathbb{C}$ con $x \\neq (0,0)$, existe $z \\in \\mathbb{C}$ tal que $xz = y$, a saber $z = yx^{-1}$.", dem:null, sourcePage:"p. 21" },
      { type:"teo", label:"Complejos de parte imaginaria nula", tex:"$$\\begin{aligned} (x_1,0)+(y_1,0) &= (x_1+y_1,0) \\\\ (x_1,0)(y_1,0) &= (x_1 y_1,0) \\\\ (x_1,0)/(y_1,0) &= (x_1/y_1,0) \\quad (y_1 \\neq 0) \\end{aligned}$$", note:"Los números complejos de la forma $(x,0)$ tienen las mismas propiedades aritméticas que los reales. Por ello se identifica $(x,0)$ con $x \\in \\mathbb{R}$.", dem:null, sourcePage:"p. 21" },
      { type:"teo", label:"Representación binómica", tex:"Cada número complejo $x = (x_1,x_2)$ puede representarse en la forma $x = x_1 + ix_2$.", dem:"$x_1=(x_1,0)$, $ix_2=(0,1)(x_2,0)=(0,x_2)$, luego $x_1+ix_2=(x_1,x_2)$. $\\blacksquare$", sourcePage:"p. 22" },
      { type:"teo", label:"$i^2 = -1$", tex:"$$i^2 = (0,1)(0,1) = (-1,0) = -1.$$", dem:null, sourcePage:"p. 22" },
      { type:"teo", label:"Propiedades del módulo", tex:"Para $x, y \\in \\mathbb{C}$: $$\\begin{aligned} |\\,(0,0)\\,| &= 0, \\quad |x| > 0 \\text{ si } x \\neq 0 \\\\ |xy| &= |x||y| \\\\ |x/y| &= |x|/|y| \\quad (y \\neq 0) \\\\ |(x_1,0)| &= |x_1| \\end{aligned}$$", dem:"Para $|xy|^2$: $(x_1 y_1 - x_2 y_2)^2 + (x_1 y_2 + x_2 y_1)^2 = (x_1^2+x_2^2)(y_1^2+y_2^2) = |x|^2|y|^2$. La (iii) se deduce de (ii). $\\blacksquare$", sourcePage:"p. 23" },
    ]
          },
          {
            num: 2, title: "Nociones básicas de teoría de conjuntos",
            notes: [
              { type:"sublabel", label:"Relaciones y funciones" },
              { type:"def", label:"Producto cartesiano", tex:"El producto cartesiano de dos conjuntos $A$ y $B$ es el conjunto de todos los pares ordenados: $$A\\times B=\\{(a,b):a\\in A,\\, b\\in B\\}.$$", dem:null, sourcePage:"p. 35" },
              { type:"def", label:"Relación", tex:"Una relación entre $A$ y $B$ es cualquier subconjunto $R\\subseteq A\\times B$. Se escribe $aRb$ si $(a,b)\\in R$.", dem:null, sourcePage:"p. 36" },
              { type:"def", label:"Función", tex:"Una función $f:A\\to B$ es una relación $f\\subseteq A\\times B$ tal que para cada $a\\in A$ existe exactamente un $b\\in B$ con $(a,b)\\in f$. Se escribe $f(a)=b$. $A$ es el dominio y $B$ el codominio.", dem:null, sourcePage:"p. 36" },
              { type:"def", label:"Imagen e imagen inversa", tex:"Si $f:A\\to B$ y $S\\subseteq A$, la imagen de $S$ bajo $f$ es $f(S)=\\{f(a):a\\in S\\}$. La imagen inversa de $T\\subseteq B$ es $f^{-1}(T)=\\{a\\in A:f(a)\\in T\\}$.", dem:null, sourcePage:"p. 37" },
              { type:"def", label:"Composición de funciones", tex:"Si $f:A\\to B$ y $g:B\\to C$, la composición $g\\circ f:A\\to C$ se define por $(g\\circ f)(a)=g(f(a))$.", dem:null, sourcePage:"p. 38" },
              { type:"sublabel", label:"Tipos de funciones" },
              { type:"def", label:"Función inyectiva", tex:"$f:A\\to B$ es inyectiva si $f(a_1)=f(a_2)\\Rightarrow a_1=a_2$.", dem:null, sourcePage:"p. 38" },
              { type:"def", label:"Función sobreyectiva", tex:"$f:A\\to B$ es sobreyectiva si para cada $b\\in B$ existe $a\\in A$ con $f(a)=b$, es decir, $f(A)=B$.", dem:null, sourcePage:"p. 38" },
              { type:"def", label:"Función biyectiva", tex:"$f:A\\to B$ es biyectiva si es inyectiva y sobreyectiva. Entonces existe $f^{-1}:B\\to A$ con $f^{-1}(f(a))=a$ y $f(f^{-1}(b))=b$.", dem:null, sourcePage:"p. 39" },
              { type:"sublabel", label:"Clases de equivalencia" },
              { type:"def", label:"Relación de equivalencia", tex:"Una relación $\\sim$ sobre $A$ es de equivalencia si: (i) reflexiva: $a\\sim a$; (ii) simétrica: $a\\sim b\\Rightarrow b\\sim a$; (iii) transitiva: $a\\sim b$ y $b\\sim c\\Rightarrow a\\sim c$.", dem:null, sourcePage:"p. 40" },
              { type:"def", label:"Clase de equivalencia", tex:"La clase de equivalencia de $a\\in A$ es $[a]=\\{x\\in A: x\\sim a\\}$. El conjunto cociente es $A/\\!\\sim\\;=\\{[a]:a\\in A\\}$.", dem:null, sourcePage:"p. 40" },
              { type:"teo", label:"Partición en clases de equivalencia", tex:"Si $\\sim$ es de equivalencia sobre $A$, el cociente $A/\\!\\sim$ forma una partición de $A$: los elementos son no vacíos, disjuntos dos a dos, y su unión es $A$.", dem:"Todo $a\\in[a]$, luego la unión es $A$. Si $[a]\\cap[b]\\ni c$, entonces $a\\sim c\\sim b$, luego $[a]=[b]$. $\\blacksquare$", sourcePage:"p. 41" },
              { type:"sublabel", label:"Conjuntos numerables" },
              { type:"def", label:"Conjunto finito y numerable", tex:"$A$ es finito si existe una biyección de $\\{1,\\ldots,n\\}$ en $A$ para algún $n$, o $A=\\emptyset$. Es numerable si existe una biyección de $\\mathbb{Z}^+$ en $A$.", dem:null, sourcePage:"p. 45" },
              { type:"teo", label:"$\\mathbb{Q}$ es numerable", tex:"El conjunto de los racionales $\\mathbb{Q}$ es numerable.", dem:"Los racionales positivos se enumeran recorriendo la tabla de pares $(p,q)$ por diagonales. $\\mathbb{Q}$ es la unión de este conjunto, sus opuestos y $\\{0\\}$, que es unión numerable de conjuntos numerables. $\\blacksquare$", sourcePage:"p. 46" },
              { type:"teo", label:"$\\mathbb{R}$ no es numerable", tex:"El intervalo $(0,1)$, y por tanto $\\mathbb{R}$, no es numerable.", dem:"Argumento diagonal de Cantor: dada cualquier función $f:\\mathbb{Z}^+\\to(0,1)$, se construye $x=0.d_1d_2\\ldots$ donde $d_n\\neq$ el $n$-ésimo decimal de $f(n)$. Entonces $x\\in(0,1)$ y $x\\neq f(n)$ para todo $n$. $\\blacksquare$", sourcePage:"p. 47" },
            ]
          },
          {
            num: 3, title: "Topología elemental de la recta real",
            notes: [
              { type:"sublabel", label:"Espacios métricos" },
              { type:"def", label:"Espacio métrico", tex:"Un espacio métrico es un par $(M,d)$ donde $d:M\\times M\\to\\mathbb{R}$ satisface: (i) $d(x,y)\\geq 0$ y $d(x,y)=0\\Leftrightarrow x=y$; (ii) $d(x,y)=d(y,x)$; (iii) $d(x,z)\\leq d(x,y)+d(y,z)$.", dem:null, sourcePage:"p. 56" },
              { type:"def", label:"Bola abierta", tex:"La bola abierta con centro $a$ y radio $r>0$ es $B(a;r)=\\{x\\in M: d(a,x)<r\\}$.", dem:null, sourcePage:"p. 56" },
              { type:"def", label:"Conjunto acotado", tex:"$S\\subseteq M$ es acotado si existe $r>0$ tal que $S\\subseteq B(a;r)$ para algún $a\\in M$.", dem:null, sourcePage:"p. 57" },
              { type:"sublabel", label:"Conjuntos abiertos y cerrados" },
              { type:"def", label:"Conjunto abierto", tex:"$S\\subseteq M$ es abierto si para cada $x\\in S$ existe $r>0$ con $B(x;r)\\subseteq S$.", dem:null, sourcePage:"p. 58" },
              { type:"def", label:"Conjunto cerrado", tex:"$S\\subseteq M$ es cerrado si su complemento $M\\setminus S$ es abierto.", dem:null, sourcePage:"p. 58" },
              { type:"teo", label:"Unión e intersección de abiertos", tex:"La unión de cualquier colección de abiertos es abierta. La intersección de una colección finita de abiertos es abierta.", dem:"Si $x\\in\\bigcup U_\\alpha$, sea $U_\\alpha\\ni x$; existe $r$ con $B(x;r)\\subseteq U_\\alpha\\subseteq\\bigcup U_\\alpha$. Para intersección finita: tomando $r=\\min r_k$ se tiene $B(x;r)\\subseteq\\bigcap_{k=1}^n U_k$. $\\blacksquare$", sourcePage:"p. 59" },
              { type:"teo", label:"Unión e intersección de cerrados", tex:"La intersección de cualquier colección de cerrados es cerrada. La unión finita de cerrados es cerrada.", dem:"Por complementación y las leyes de De Morgan. $\\blacksquare$", sourcePage:"p. 59" },
              { type:"sublabel", label:"Puntos de acumulación" },
              { type:"def", label:"Punto de acumulación", tex:"$x$ es punto de acumulación de $S$ si $B(x;r)\\cap(S\\setminus\\{x\\})\\neq\\emptyset$ para todo $r>0$. El conjunto de puntos de acumulación de $S$ se llama conjunto derivado $S'$.", dem:null, sourcePage:"p. 60" },
              { type:"teo", label:"Caracterización de conjuntos cerrados", tex:"$S$ es cerrado $\\Leftrightarrow$ $S'\\subseteq S$ (contiene todos sus puntos de acumulación).", dem:"($\\Rightarrow$) Si $x\\in S'$ y $x\\notin S$, entonces $x\\in M\\setminus S$ abierto: existe $r$ con $B(x;r)\\cap S=\\emptyset$, imposible. ($\\Leftarrow$) Si $S'\\subseteq S$ y $x\\notin S$, $x\\notin S'$, luego existe $r$ con $B(x;r)\\cap S=\\emptyset$, así $M\\setminus S$ es abierto. $\\blacksquare$", sourcePage:"p. 61" },
              { type:"teo", label:"Teorema de Bolzano-Weierstrass", tex:"Todo conjunto infinito y acotado de $\\mathbb{R}^n$ tiene al menos un punto de acumulación.", dem:"Para $n=1$: se bisecta sucesivamente el intervalo que contiene $S$ eligiendo siempre la mitad con infinitos puntos; la intersección de los intervalos cerrados resultantes (por completitud) es un punto de acumulación. Para $n>1$: por inducción en $n$. $\\blacksquare$", sourcePage:"pp. 63-64" },
              { type:"sublabel", label:"Compacidad" },
              { type:"def", label:"Recubrimiento abierto", tex:"Una familia $\\{U_\\alpha\\}$ de abiertos es un recubrimiento de $S$ si $S\\subseteq\\bigcup_\\alpha U_\\alpha$. Un subrecubrimiento finito es una subfamilia finita que también recubre $S$.", dem:null, sourcePage:"p. 66" },
              { type:"def", label:"Conjunto compacto", tex:"$S$ es compacto si todo recubrimiento abierto de $S$ admite un subrecubrimiento finito.", dem:null, sourcePage:"p. 66" },
              { type:"teo", label:"Teorema de Heine-Borel", tex:"$S\\subseteq\\mathbb{R}^n$ es compacto $\\Leftrightarrow$ $S$ es cerrado y acotado.", dem:"($\\Leftarrow$) Acotado $\\Rightarrow$ $S$ está en un $n$-cubo. Se prueba que el cubo es compacto (subdivisiones sucesivas) y que subconjunto cerrado de compacto es compacto. ($\\Rightarrow$) Compacto $\\Rightarrow$ acotado (por el recubrimiento $\\{B(0;k)\\}$) y cerrado (por la caracterización anterior). $\\blacksquare$", sourcePage:"pp. 67-68" },
            ]
          },
        ]
      },
      {id: "ana_b1",
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        edition: "3ª ed. McGraw-Hill",
        chapters: []
      },
      {
        id: "ana_b2",
        title: "Elementos de Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Dover, 1999",
        chapters: []
      },
      {
        id: "ana_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011",
        chapters: []
      },
      {
        id: "ana_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005",
        chapters: []
      },
      {
        id: "ana_b6",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015",
        chapters: []
      },
    ]
  },

  {
    subject: "Álgebra Moderna I",
    matId: "algebra_moderna_1",
    color: "linear-gradient(135deg,#110714,#250e2e)",
    books: [
      {
        id: "alm_b1",
        title: "Topics in Algebra",
        author: "Israel N. Herstein",
        edition: "2ª ed. Wiley",
        chapters: []
      },
      {
        id: "alm_b2",
        title: "A First Course in Abstract Algebra",
        author: "John B. Fraleigh",
        edition: "7ª ed. Addison-Wesley, 2003",
        chapters: []
      },
      {
        id: "alm_b3",
        title: "An Introduction to the Theory of Groups",
        author: "Joseph J. Rotman",
        edition: "4ª ed. Springer, 1995",
        chapters: []
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral III",
    matId: "calculo_3",
    color: "linear-gradient(135deg,#001a33,#003d7a)",
    books: [
      {
        id: "cd3_b1",
        title: "Cálculo Vectorial",
        author: "Marsden & Tromba",
        edition: "6ª ed. Freeman, 2012",
        chapters: []
      },
      {
        id: "cd3_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996",
        chapters: []
      },
      {
        id: "cd3_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969",
        chapters: []
      },
      {
        id: "cd3_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936",
        chapters: []
      },
      {
        id: "cd3_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989",
        chapters: []
      },
      {
        id: "cd3_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: []
      },
    ]
  },

  {
    subject: "Álgebra Lineal II",
    matId: "algebra_lineal_2",
    color: "linear-gradient(135deg,#0a001a,#220040)",
    books: [
      {
        id: "al2_b1",
        title: "Linear Algebra",
        author: "Morton L. Curtis",
        edition: "Springer, 1984",
        chapters: []
      },
      {
        id: "al2_b2",
        title: "Álgebra Lineal",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: []
      },
      {
        id: "al2_b3",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966",
        chapters: []
      },
      {
        id: "al2_b4",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: []
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral IV",
    matId: "calculo_4",
    color: "linear-gradient(135deg,#001a33,#004d99)",
    books: [
      {
        id: "cd4_b1",
        title: "Cálculo Vectorial",
        author: "Marsden & Tromba",
        edition: "6ª ed. Freeman, 2012",
        chapters: []
      },
      {
        id: "cd4_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996",
        chapters: []
      },
      {
        id: "cd4_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969",
        chapters: []
      },
      {
        id: "cd4_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936",
        chapters: []
      },
      {
        id: "cd4_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989",
        chapters: []
      },
      {
        id: "cd4_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: []
      },
    ]
  },

  {
    subject: "Variable Compleja I",
    matId: "variable_compleja_1",
    color: "linear-gradient(135deg,#1a0033,#3d0080)",
    books: [
      {
        id: "vc1_b1",
        title: "Complex Analysis",
        author: "Lars V. Ahlfors",
        edition: "3ª ed. McGraw-Hill, 1979",
        chapters: []
      },
      {
        id: "vc1_b2",
        title: "Complex Variables and Applications",
        author: "Churchill & Brown",
        edition: "9ª ed. McGraw-Hill, 2014",
        chapters: []
      },
      {
        id: "vc1_b3",
        title: "Variable Compleja",
        author: "Antonio Lascurain Orive",
        edition: "Las Prensas de Ciencias, UNAM, 2003",
        chapters: []
      },
      {
        id: "vc1_b4",
        title: "Basic Complex Analysis",
        author: "Marsden & Hoffman",
        edition: "3ª ed. Freeman, 1999",
        chapters: []
      },
    ]
  },

  {
    subject: "Análisis Matemático II",
    matId: "analisis_matematico_2",
    color: "linear-gradient(135deg,#001a0d,#004d26)",
    books: [
      {
        id: "an2_b1",
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        edition: "3ª ed. McGraw-Hill, 1976",
        chapters: []
      },
      {
        id: "an2_b2",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015",
        chapters: []
      },
      {
        id: "an2_b3",
        title: "Mathematical Analysis",
        author: "Tom M. Apostol",
        edition: "2ª ed. Addison-Wesley, 1974",
        chapters: []
      },
      {
        id: "an2_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011",
        chapters: []
      },
      {
        id: "an2_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005",
        chapters: []
      },
      {
        id: "an2_b6",
        title: "Elementos de la Teoría de Funciones y del Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Mir, 1975",
        chapters: []
      },
    ]
  },
];

/* ══════════════════════════════════════════════════════════════════════
   LIBRARY_OPT — Bibliografía de materias optativas
   Misma estructura que LIBRARY: { subject, matId, color, books:[...] }
   Se agregan conforme llega la bibliografía de cada optativa.
   ══════════════════════════════════════════════════════════════════════ */
const LIBRARY_OPT = [
  // ── Bloque I ──────────────────────────────────────────────────────
  {
    subject: "Conjuntos Convexos",
    matId:   "conjuntos_convexos",
    color:   "linear-gradient(135deg,#081209,#142618)",
    books: [
      { id: "cc_b1", title: "Euclidean Geometry and Convexity",               author: "R. Benson",               edition: "McGraw-Hill, 1966",                 chapters: [] },
      { id: "cc_b2", title: "División de Figuras en Partes Menores",          author: "V. Boltianski & I. Golberg", edition: "MIR, 1973",                      chapters: [] },
      { id: "cc_b3", title: "Geometric Inequalities",                         author: "N. Kazarinoff",            edition: "MAA, New Math. Library Vol. 4, 1961", chapters: [] },
      { id: "cc_b4", title: "Lo Antiguo y lo Nuevo acerca de los Conjuntos Convexos", author: "H. Hadwiger", edition: "SMM, Textos 10, UNAM, 1998",            chapters: [] },
      { id: "cc_b5", title: "Combinatorial Geometry in the Plane",            author: "H. Hadwiger & H. Debrunner", edition: "Holt, Reinhart and Winston, 1964", chapters: [] },
      { id: "cc_b6", title: "Convex Figures",                                 author: "I. Yaglom & V. Boltianski", edition: "Holt, Reinhart and Winston, 1961", chapters: [] },
    ]
  },
  {
    subject: "Conjuntos y Lógica",
    matId:   "conjuntos_y_logica",
    color:   "linear-gradient(135deg,#0c0812,#1c1026)",
    books: [
      { id: "cyl_b1", title: "Sobre un Curso de Análisis Lógico",                    author: "J.A. Amor",                        edition: "Educación Matemática, GEI, 1994", chapters: [] },
      { id: "cyl_b2", title: "Elementos de Lógica Formal",                           author: "C. Badesa, I. Jané & R. Jansana",  edition: "Ariel, 1998",                    chapters: [] },
      { id: "cyl_b3", title: "Lógica Elemental",                                     author: "M. Fernández, A. Preisser et al.", edition: "UAM, 1996",                      chapters: [] },
      { id: "cyl_b4", title: "Teoría de Conjuntos y Temas Afines",                   author: "S. Lipschutz",                    edition: "Schaum-McGraw-Hill",              chapters: [] },
      { id: "cyl_b5", title: "Cómo Entender y Hacer Demostraciones en Matemáticas",  author: "D. Solow",                        edition: "Limusa, 1987",                    chapters: [] },
      { id: "cyl_b6", title: "El Método de la Inducción Matemática",                 author: "I.S. Sominski",                   edition: "Limusa, 1990",                    chapters: [] },
      { id: "cyl_b7", title: "Manual de Lógica para Estudiantes de Matemáticas",     author: "G. Zubieta",                      edition: "Trillas, 1977",                   chapters: [] },
      { id: "cyl_b8", title: "Taller de Lógica Matemática",                          author: "G. Zubieta",                      edition: "McGraw-Hill, 1993",               chapters: [] },
    ]
  },
  {
    subject: "Diseño de Sistemas Digitales",
    matId:   "diseno_sistemas_digitales",
    color:   "linear-gradient(135deg,#080c14,#101c2e)",
    books: [
      { id: "dsd_b1", title: "Digital Design", author: "M.M. Mano", edition: "2ª ed. Prentice Hall, 1991", chapters: [] },
    ]
  },
  {
    subject: "Electromagnetismo I",
    matId:   "electromagnetismo_1",
    color:   "linear-gradient(135deg,#14080a,#2a1014)",
    books: [
      { id: "em1_b1", title: "Fundamentos de Física Vol. II",                         author: "Halliday, Resnick & Walker",  edition: "8ª ed. Grupo Editorial Patria, 2011", chapters: [] },
      { id: "em1_b2", title: "Electromagnetism: Principles and Applications",         author: "P. Lorrain & D.R. Corson",   edition: "W.H. Freeman, 1990",                 chapters: [] },
      { id: "em1_b3", title: "Electricidad y Magnetismo",                             author: "E.M. Purcell",               edition: "Berkeley Physics Vol. 2, Reverté, 2001", chapters: [] },
      { id: "em1_b4", title: "Física Vol. II",                                        author: "R. Resnick, D. Halliday & S.K. Krane", edition: "5ª ed. Cia. Editorial Continental, 1996", chapters: [] },
      { id: "em1_b5", title: "Física II",                                             author: "R.A. Serway & J.W. Jewett",  edition: "3ª ed. Thomson Learning, 2004",      chapters: [] },
      { id: "em1_b6", title: "Electricidad y Magnetismo",                             author: "R.A. Serway",                edition: "Thomson Learning, 2004",             chapters: [] },
      { id: "em1_b7", title: "Space Time Physics",                                    author: "E.F. Taylor & J.A. Wheeler", edition: "Freeman, 1966",                      chapters: [] },
      { id: "em1_b8", title: "Introducción a la Teoría Especial de la Relatividad",   author: "R. Resnick",                 edition: "Limusa, 1977",                       chapters: [] },
    ]
  },
  {
    subject: "Fenómenos Colectivos",
    matId:   "fenomenos_colectivos",
    color:   "linear-gradient(135deg,#080e12,#0e1e28)",
    books: [
      { id: "fc_b1", title: "Introducción al estudio de la mecánica, materia y ondas", author: "U. Ingard & W.I. Kraushaar", edition: "Reverté, 1973",               chapters: [] },
      { id: "fc_b2", title: "Termodinámica Clásica",                                   author: "G. Carmona",                edition: "Fac. de Ciencias-UNAM, 2007", chapters: [] },
      { id: "fc_b3", title: "Physical Hydrodynamics",                                  author: "E. Guyon, J.P. Hullin, L. Petit & C.D. Mitescu", edition: "Oxford University Press, 2001", chapters: [] },
      { id: "fc_b4", title: "Physics of Waves",                                        author: "W.C. Elmore & M.A. Heald",  edition: "Dover Publications, 1985",    chapters: [] },
    ]
  },
  {
    subject: "Geometría Moderna II",
    matId:   "geometria_moderna_2",
    color:   "linear-gradient(135deg,#080e0e,#0e2020)",
    books: [
      { id: "gm2_b1", title: "An Introduction to the Modern Geometry of the Triangle and the Circle", author: "C.N. Altshiller", edition: "Barnes and Noble, 1965", chapters: [] },
      { id: "gm2_b2", title: "Non-euclidean Geometry",                                               author: "H. Menschkowsky",  edition: "Academic Press, 1972", chapters: [] },
      { id: "gm2_b3", title: "Introducción a la Geometría Moderna",                                  author: "L.S. Shively",     edition: "CECSA, 1968",         chapters: [] },
    ]
  },
  {
    subject: "Geometría Proyectiva",
    matId:   "geometria_proyectiva",
    color:   "linear-gradient(135deg,#08080e,#14142a)",
    books: [
      { id: "gp_b1", title: "The Octonians",                                             author: "J.C. Baez",                    edition: "Bulletin of the AMS, 2002",               chapters: [] },
      { id: "gp_b2", title: "Projective Geometry: From Foundations to Applications",     author: "A. Beutelspacher & U. Rosenbaum", edition: "Cambridge University Press, 1998",    chapters: [] },
      { id: "gp_b3", title: "Projective Geometry",                                       author: "H.S.M. Coxeter",               edition: "Springer-Verlag, 1994",                  chapters: [] },
      { id: "gp_b4", title: "Foundations of Projective Geometry",                        author: "R. Hartshorne",                edition: "W.A. Benjamin, 1967",                    chapters: [] },
      { id: "gp_b5", title: "Projective Geometry and its Application to Computer Graphics", author: "M.A. Penna",               edition: "Prentice-Hall, 1991",                    chapters: [] },
      { id: "gp_b6", title: "Elementos de Geometría Proyectiva",                          author: "A. Seidenberg",               edition: "CECSA, 1965",                            chapters: [] },
    ]
  },
  {
    subject: "Gráficas y Juegos",
    matId:   "graficas_y_juegos",
    color:   "linear-gradient(135deg,#060e08,#0c1e10)",
    books: [
      { id: "gyj_b1", title: "Graphs",                        author: "C. Berge",          edition: "North Holland, 1985",         chapters: [] },
      { id: "gyj_b2", title: "Graph Theory with Applications", author: "J.A. Bondy & U.S. Murty", edition: "Macmillan, 1976",    chapters: [] },
      { id: "gyj_b3", title: "Introductory Graph Theory",      author: "G. Chartrand",      edition: "Dover Publications, 1977",   chapters: [] },
      { id: "gyj_b4", title: "Graph Theory",                   author: "F. Harary",         edition: "Addison-Wesley, 1969",       chapters: [] },
    ]
  },
  {
    subject: "Introducción a Ciencias de la Computación II",
    matId:   "icc_2",
    color:   "linear-gradient(135deg,#0a0c10,#141820)",
    books: [
      { id: "icc2_b1", title: "Fundamentals of Computing II: Abstraction, Data Structures, and Large Software Systems", author: "Tucker, Bradley, Cupper, Epstein & Kelemen", edition: "McGraw-Hill, 1994", chapters: [] },
      { id: "icc2_b2", title: "Estructuras de Datos",                                                                   author: "M. Magidin",                                edition: "Editorial Trillas, 1991", chapters: [] },
    ]
  },
  {
    subject: "Introducción a la Geometría Avanzada",
    matId:   "intro_geometria_avanzada",
    color:   "linear-gradient(135deg,#080a10,#10142a)",
    books: [
      { id: "iga_b1", title: "Fundamentos de Geometría",                          author: "H.S.M. Coxeter",                edition: "Limusa-Wiley, 1971",                        chapters: [] },
      { id: "iga_b2", title: "Projective Geometry",                               author: "H.S.M. Coxeter",                edition: "Springer-Verlag, 1994",                     chapters: [] },
      { id: "iga_b3", title: "Non-euclidean Geometry",                            author: "H.S.M. Coxeter",                edition: "MAA, 1998",                                chapters: [] },
      { id: "iga_b4", title: "Geometry Revisited",                                author: "H.S.M. Coxeter",                edition: "MAA, 1983",                                chapters: [] },
      { id: "iga_b5", title: "Introducción a la Geometría Avanzada",              author: "A. Ramírez-Galarza & J. Seade", edition: "Las Prensas de Ciencias, UNAM, 2005",       chapters: [] },
      { id: "iga_b6", title: "Invitación a las Geometrías No-euclideanas",        author: "A. Ramírez-Galarza & G. Sienra", edition: "Las Prensas de Ciencias, UNAM, 2000",     chapters: [] },
      { id: "iga_b7", title: "Geometry and the Imagination",                      author: "D. Hilbert & S. Cohn-Vossen",   edition: "Vínculos Matemáticos 150, FC-UNAM, 2000",   chapters: [] },
      { id: "iga_b8", title: "Transformation Geometry: An Introduction to Symmetry", author: "G. Martin",                edition: "Springer-Verlag, 1997",                     chapters: [] },
    ]
  },
  {
    subject: "Matemáticas Discretas",
    matId:   "matematicas_discretas",
    color:   "linear-gradient(135deg,#060c0e,#0e1c20)",
    books: [
      { id: "md_b1", title: "Mathematical Structures For Computer Science", author: "J.L. Gersting",      edition: "3ª ed. W.H. Freeman, 1993",     chapters: [] },
      { id: "md_b2", title: "A Logical Approach to Discrete Math",          author: "D. Gries & F.B. Schneider", edition: "Springer-Verlag, 1994", chapters: [] },
    ]
  },
  // ── Bloque II ─────────────────────────────────────────────────────
  {
    subject: "Álgebra Moderna II",
    matId:   "algebra_moderna_2",
    color:   "linear-gradient(135deg,#120810,#261020)",
    books: [
      { id: "am2_b1", title: "Álgebra Abstracta",                    author: "J.B. Fraleigh",   edition: "Sistemas Técnicos de Edición, 1988", chapters: [] },
      { id: "am2_b2", title: "Álgebra Moderna",                      author: "I.N. Herstein",   edition: "Editorial Trillas, 1970",            chapters: [] },
      { id: "am2_b3", title: "Galois Theory",                        author: "I. Stewart",      edition: "Chapman and Hall, 2004",             chapters: [] },
    ]
  },
  // ── Bloque III ────────────────────────────────────────────────────
];

/* ── Función auxiliar para buscar libro por id ── */
function findBook(id) {
  for (const subj of [...LIBRARY, ...LIBRARY_OPT]) {
    const b = subj.books.find(bk => bk.id === id);
    if (b) return { book: b, subject: subj.subject, color: subj.color };
  }
  return null;
}

/* ── Lista plana de todos los libros ─────────── */
function allBooks() {
  return [...LIBRARY, ...LIBRARY_OPT].flatMap(s => s.books.map(b => ({
    ...b, subject: s.subject, color: s.color
  })));
}
