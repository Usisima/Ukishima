/* ═══════════════════════════════════════════════
   libros-data.js  —  Bibliografía UNAM FC · Matemáticas
   ═══════════════════════════════════════════════ */

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
    books: [
      {
        id: "as1_b1",
        title: "Álgebra Superior",
        author: "Cárdenas, Lluis, Raggi & Tomás",
        edition: "Trillas, 1974"
      },
      {
        id: "as1_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986"
      },
    ]
  },

  {
    subject: "Álgebra Superior II",
    matId: "algebra_superior_2",
    books: [
      {
        id: "as2_b1",
        title: "Álgebra Superior",
        author: "Cárdenas, Lluis, Raggi & Tomás",
        edition: "Trillas, 1974"
      },
      {
        id: "as2_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986"
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral I",
    matId: "calculo_1",
    books: [
      {
        id: "cd1_b1",
        title: "Cálculo Infinitesimal",
        author: "Michael Spivak",
        edition: "2ª ed. Reverté, 1998"
      },
      {
        id: "cd1_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987"
      },
      {
        id: "cd1_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM"
      },
      {
        id: "cd1_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937"
      },
      {
        id: "cd1_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986"
      },
    ]
  },

  {
    subject: "Geometría Analítica I",
    matId: "geo_analitica_1",
    books: [
      {
        id: "ga1_b1",
        title: "Geometría Analítica: Una Introducción a la Geometría",
        author: "Ana Irene Ramírez Galarza",
        edition: "Las Prensas de Ciencias, UNAM, 2004"
      },
      {
        id: "ga1_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984"
      },
      {
        id: "ga1_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009"
      },
      {
        id: "ga1_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970"
      },
    ]
  },

  {
    subject: "Geometría Analítica II",
    matId: "geo_analitica_2",
    books: [
      {
        id: "ga2_b1",
        title: "Geometría Analítica: Una Introducción a la Geometría",
        author: "Ana Irene Ramírez Galarza",
        edition: "Las Prensas de Ciencias, UNAM, 1998"
      },
      {
        id: "ga2_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984"
      },
      {
        id: "ga2_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009"
      },
      {
        id: "ga2_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970"
      },
    ]
  },

  {
    subject: "Álgebra Lineal I",
    matId: "algebra_lineal_1",
    books: [
      {
        id: "al1_b1",
        title: "Álgebra Lineal",
        author: "Hoffman & Kunze",
        edition: "Prentice Hall, 1973"
      },
      {
        id: "al1_b2",
        title: "Álgebra Lineal",
        author: "Friedberg, Insel & Spence",
        edition: "Publicaciones Cultural, 1982"
      },
      {
        id: "al1_b3",
        title: "Linear Algebra",
        author: "Morton L. Curtis",
        edition: "Springer, 1984"
      },
      {
        id: "al1_b4",
        title: "Linear Algebra",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987"
      },
      {
        id: "al1_b5",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966"
      },
      {
        id: "al1_b6",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM"
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral II",
    matId: "calculo_2",
    books: [
      {
        id: "cd2_b1",
        title: "Cálculo Infinitesimal",
        author: "Michael Spivak",
        edition: "2ª ed. Reverté, 1998"
      },
      {
        id: "cd2_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987"
      },
      {
        id: "cd2_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM"
      },
      {
        id: "cd2_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937"
      },
      {
        id: "cd2_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986"
      },
    ]
  },

  {
    subject: "Ecuaciones Diferenciales I",
    matId: "ecuaciones_diferenciales_1",
    books: [
      {
        id: "ed_b1",
        title: "Ordinary Differential Equations",
        author: "V.I. Arnold",
        edition: "Springer, 1992"
      },
      {
        id: "ed_b2",
        title: "Differential Equations",
        author: "Blanchard, Devaney & Hall",
        edition: "4ª ed. Cengage, 2012"
      },
      {
        id: "ed_b3",
        title: "Differential Equations and Their Applications",
        author: "Martin Braun",
        edition: "4ª ed. Springer, 1993"
      },
      {
        id: "ed_b4",
        title: "Elementary Differential Equations",
        author: "Derrick & Grossman",
        edition: "4ª ed. Addison-Wesley, 1997"
      },
    ]
  },

  {
    subject: "Análisis Matemático I",
    matId: "analisis_matematico_1",
    books: [
      {
        id: "ana_b3",
 title: "Análisis Matemático",
 author: "Tom M. Apostol",
 edition: "2ª ed. Reverté, 1977"
      },
      {id: "ana_b1",
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        edition: "3ª ed. McGraw-Hill"
      },
      {
        id: "ana_b2",
        title: "Elementos de Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Dover, 1999"
      },
      {
        id: "ana_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011"
      },
      {
        id: "ana_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005"
      },
      {
        id: "ana_b6",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015"
      },
    ]
  },

  {
    subject: "Álgebra Moderna I",
    matId: "algebra_moderna_1",
    books: [
      {
        id: "alm_b1",
        title: "Topics in Algebra",
        author: "Israel N. Herstein",
        edition: "2ª ed. Wiley"
      },
      {
        id: "alm_b2",
        title: "A First Course in Abstract Algebra",
        author: "John B. Fraleigh",
        edition: "7ª ed. Addison-Wesley, 2003"
      },
      {
        id: "alm_b3",
        title: "An Introduction to the Theory of Groups",
        author: "Joseph J. Rotman",
        edition: "4ª ed. Springer, 1995"
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral III",
    matId: "calculo_3",
    books: [
      {
        id: "cd3_b1",
        title: "Cálculo Vectorial",
        author: "Marsden & Tromba",
        edition: "6ª ed. Freeman, 2012"
      },
      {
        id: "cd3_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996"
      },
      {
        id: "cd3_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969"
      },
      {
        id: "cd3_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936"
      },
      {
        id: "cd3_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989"
      },
      {
        id: "cd3_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987"
      },
    ]
  },

  {
    subject: "Álgebra Lineal II",
    matId: "algebra_lineal_2",
    books: [
      {
        id: "al2_b1",
        title: "Linear Algebra",
        author: "Morton L. Curtis",
        edition: "Springer, 1984"
      },
      {
        id: "al2_b2",
        title: "Álgebra Lineal",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987"
      },
      {
        id: "al2_b3",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966"
      },
      {
        id: "al2_b4",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM"
      },
    ]
  },

  {
    subject: "Cálculo Diferencial e Integral IV",
    matId: "calculo_4",
    books: [
      {
        id: "cd4_b1",
        title: "Cálculo Vectorial",
        author: "Marsden & Tromba",
        edition: "6ª ed. Freeman, 2012"
      },
      {
        id: "cd4_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996"
      },
      {
        id: "cd4_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969"
      },
      {
        id: "cd4_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936"
      },
      {
        id: "cd4_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989"
      },
      {
        id: "cd4_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987"
      },
    ]
  },

  {
    subject: "Variable Compleja I",
    matId: "variable_compleja_1",
    books: [
      {
        id: "vc1_b1",
        title: "Complex Analysis",
        author: "Lars V. Ahlfors",
        edition: "3ª ed. McGraw-Hill, 1979"
      },
      {
        id: "vc1_b2",
        title: "Complex Variables and Applications",
        author: "Churchill & Brown",
        edition: "9ª ed. McGraw-Hill, 2014"
      },
      {
        id: "vc1_b3",
        title: "Variable Compleja",
        author: "Antonio Lascurain Orive",
        edition: "Las Prensas de Ciencias, UNAM, 2003"
      },
      {
        id: "vc1_b4",
        title: "Basic Complex Analysis",
        author: "Marsden & Hoffman",
        edition: "3ª ed. Freeman, 1999"
      },
    ]
  },

  {
    subject: "Análisis Matemático II",
    matId: "analisis_matematico_2",
    books: [
      {
        id: "an2_b1",
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        edition: "3ª ed. McGraw-Hill, 1976"
      },
      {
        id: "an2_b2",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015"
      },
      {
        id: "an2_b3",
        title: "Mathematical Analysis",
        author: "Tom M. Apostol",
        edition: "2ª ed. Addison-Wesley, 1974"
      },
      {
        id: "an2_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011"
      },
      {
        id: "an2_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005"
      },
      {
        id: "an2_b6",
        title: "Elementos de la Teoría de Funciones y del Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Mir, 1975"
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
    books: [
      { id: "cc_b1", title: "Euclidean Geometry and Convexity",               author: "R. Benson",               edition: "McGraw-Hill, 1966" },
      { id: "cc_b2", title: "División de Figuras en Partes Menores",          author: "V. Boltianski & I. Golberg", edition: "MIR, 1973" },
      { id: "cc_b3", title: "Geometric Inequalities",                         author: "N. Kazarinoff",            edition: "MAA, New Math. Library Vol. 4, 1961" },
      { id: "cc_b4", title: "Lo Antiguo y lo Nuevo acerca de los Conjuntos Convexos", author: "H. Hadwiger", edition: "SMM, Textos 10, UNAM, 1998" },
      { id: "cc_b5", title: "Combinatorial Geometry in the Plane",            author: "H. Hadwiger & H. Debrunner", edition: "Holt, Reinhart and Winston, 1964" },
      { id: "cc_b6", title: "Convex Figures",                                 author: "I. Yaglom & V. Boltianski", edition: "Holt, Reinhart and Winston, 1961" },
    ]
  },
  {
    subject: "Conjuntos y Lógica",
    matId:   "conjuntos_y_logica",
    books: [
      { id: "cyl_b1", title: "Sobre un Curso de Análisis Lógico",                    author: "J.A. Amor",                        edition: "Educación Matemática, GEI, 1994" },
      { id: "cyl_b2", title: "Elementos de Lógica Formal",                           author: "C. Badesa, I. Jané & R. Jansana",  edition: "Ariel, 1998" },
      { id: "cyl_b3", title: "Lógica Elemental",                                     author: "M. Fernández, A. Preisser et al.", edition: "UAM, 1996" },
      { id: "cyl_b4", title: "Teoría de Conjuntos y Temas Afines",                   author: "S. Lipschutz",                    edition: "Schaum-McGraw-Hill" },
      { id: "cyl_b5", title: "Cómo Entender y Hacer Demostraciones en Matemáticas",  author: "D. Solow",                        edition: "Limusa, 1987" },
      { id: "cyl_b6", title: "El Método de la Inducción Matemática",                 author: "I.S. Sominski",                   edition: "Limusa, 1990" },
      { id: "cyl_b7", title: "Manual de Lógica para Estudiantes de Matemáticas",     author: "G. Zubieta",                      edition: "Trillas, 1977" },
      { id: "cyl_b8", title: "Taller de Lógica Matemática",                          author: "G. Zubieta",                      edition: "McGraw-Hill, 1993" },
    ]
  },
  {
    subject: "Diseño de Sistemas Digitales",
    matId:   "diseno_sistemas_digitales",
    books: [
      { id: "dsd_b1", title: "Digital Design", author: "M.M. Mano", edition: "2ª ed. Prentice Hall, 1991" },
    ]
  },
  {
    subject: "Electromagnetismo I",
    matId:   "electromagnetismo_1",
    books: [
      { id: "em1_b1", title: "Fundamentos de Física Vol. II",                         author: "Halliday, Resnick & Walker",  edition: "8ª ed. Grupo Editorial Patria, 2011" },
      { id: "em1_b2", title: "Electromagnetism: Principles and Applications",         author: "P. Lorrain & D.R. Corson",   edition: "W.H. Freeman, 1990" },
      { id: "em1_b3", title: "Electricidad y Magnetismo",                             author: "E.M. Purcell",               edition: "Berkeley Physics Vol. 2, Reverté, 2001" },
      { id: "em1_b4", title: "Física Vol. II",                                        author: "R. Resnick, D. Halliday & S.K. Krane", edition: "5ª ed. Cia. Editorial Continental, 1996" },
      { id: "em1_b5", title: "Física II",                                             author: "R.A. Serway & J.W. Jewett",  edition: "3ª ed. Thomson Learning, 2004" },
      { id: "em1_b6", title: "Electricidad y Magnetismo",                             author: "R.A. Serway",                edition: "Thomson Learning, 2004" },
      { id: "em1_b7", title: "Space Time Physics",                                    author: "E.F. Taylor & J.A. Wheeler", edition: "Freeman, 1966" },
      { id: "em1_b8", title: "Introducción a la Teoría Especial de la Relatividad",   author: "R. Resnick",                 edition: "Limusa, 1977" },
    ]
  },
  {
    subject: "Fenómenos Colectivos",
    matId:   "fenomenos_colectivos",
    books: [
      { id: "fc_b1", title: "Introducción al estudio de la mecánica, materia y ondas", author: "U. Ingard & W.I. Kraushaar", edition: "Reverté, 1973" },
      { id: "fc_b2", title: "Termodinámica Clásica",                                   author: "G. Carmona",                edition: "Fac. de Ciencias-UNAM, 2007" },
      { id: "fc_b3", title: "Physical Hydrodynamics",                                  author: "E. Guyon, J.P. Hullin, L. Petit & C.D. Mitescu", edition: "Oxford University Press, 2001" },
      { id: "fc_b4", title: "Physics of Waves",                                        author: "W.C. Elmore & M.A. Heald",  edition: "Dover Publications, 1985" },
    ]
  },
  {
    subject: "Geometría Moderna II",
    matId:   "geometria_moderna_2",
    books: [
      { id: "gm2_b1", title: "An Introduction to the Modern Geometry of the Triangle and the Circle", author: "C.N. Altshiller", edition: "Barnes and Noble, 1965" },
      { id: "gm2_b2", title: "Non-euclidean Geometry",                                               author: "H. Menschkowsky",  edition: "Academic Press, 1972" },
      { id: "gm2_b3", title: "Introducción a la Geometría Moderna",                                  author: "L.S. Shively",     edition: "CECSA, 1968" },
    ]
  },
  {
    subject: "Geometría Proyectiva",
    matId:   "geometria_proyectiva",
    books: [
      { id: "gp_b1", title: "The Octonians",                                             author: "J.C. Baez",                    edition: "Bulletin of the AMS, 2002" },
      { id: "gp_b2", title: "Projective Geometry: From Foundations to Applications",     author: "A. Beutelspacher & U. Rosenbaum", edition: "Cambridge University Press, 1998" },
      { id: "gp_b3", title: "Projective Geometry",                                       author: "H.S.M. Coxeter",               edition: "Springer-Verlag, 1994" },
      { id: "gp_b4", title: "Foundations of Projective Geometry",                        author: "R. Hartshorne",                edition: "W.A. Benjamin, 1967" },
      { id: "gp_b5", title: "Projective Geometry and its Application to Computer Graphics", author: "M.A. Penna",               edition: "Prentice-Hall, 1991" },
      { id: "gp_b6", title: "Elementos de Geometría Proyectiva",                          author: "A. Seidenberg",               edition: "CECSA, 1965" },
    ]
  },
  {
    subject: "Gráficas y Juegos",
    matId:   "graficas_y_juegos",
    books: [
      { id: "gyj_b1", title: "Graphs",                        author: "C. Berge",          edition: "North Holland, 1985" },
      { id: "gyj_b2", title: "Graph Theory with Applications", author: "J.A. Bondy & U.S. Murty", edition: "Macmillan, 1976" },
      { id: "gyj_b3", title: "Introductory Graph Theory",      author: "G. Chartrand",      edition: "Dover Publications, 1977" },
      { id: "gyj_b4", title: "Graph Theory",                   author: "F. Harary",         edition: "Addison-Wesley, 1969" },
    ]
  },
  {
    subject: "Introducción a Ciencias de la Computación I",
    matId:   "icc1",
    books: [
      { id: "icc1_b1", title: "Fundamentals of Computing I: Logic, Problem Solving, Programs and Computers", author: "A.B. Tucker; A. Bernat; W.J. Bradley; R.D. Cupper", edition: "2ª ed. McGraw-Hill, 1994" },
      { id: "icc1_b2", title: "Computer Science",                                                            author: "S.J. Warford",                                    edition: "D.C. Heath and Company, 1991" },
      { id: "icc1_b3", title: "Professional Software, Vol. I: Software Engineering Concepts",                author: "H. Ledgard; J. Tauer",                            edition: "Addison-Wesley, 1987" },
      { id: "icc1_b4", title: "Professional Software, Vol. II: Programming Practice",                        author: "H. Ledgard; J. Tauer",                            edition: "Addison-Wesley, 1987" },
      { id: "icc1_b5", title: "A Human Activity",                                                            author: "P. Naur",                                         edition: "ACM Press/Addison-Wesley, 1992" },
    ]
  },
  {
    subject: "Introducción a Ciencias de la Computación II",
    matId:   "icc_2",
    books: [
      { id: "icc2_b1", title: "Fundamentals of Computing II: Abstraction, Data Structures, and Large Software Systems", author: "Tucker, Bradley, Cupper, Epstein & Kelemen", edition: "McGraw-Hill, 1994" },
      { id: "icc2_b2", title: "Estructuras de Datos",                                                                   author: "M. Magidin",                                edition: "Editorial Trillas, 1991" },
    ]
  },
  {
    subject: "Introducción a la Geometría Avanzada",
    matId:   "intro_geometria_avanzada",
    books: [
      { id: "iga_b1", title: "Fundamentos de Geometría",                          author: "H.S.M. Coxeter",                edition: "Limusa-Wiley, 1971" },
      { id: "iga_b2", title: "Projective Geometry",                               author: "H.S.M. Coxeter",                edition: "Springer-Verlag, 1994" },
      { id: "iga_b3", title: "Non-euclidean Geometry",                            author: "H.S.M. Coxeter",                edition: "MAA, 1998" },
      { id: "iga_b4", title: "Geometry Revisited",                                author: "H.S.M. Coxeter",                edition: "MAA, 1983" },
      { id: "iga_b5", title: "Introducción a la Geometría Avanzada",              author: "A. Ramírez-Galarza & J. Seade", edition: "Las Prensas de Ciencias, UNAM, 2005" },
      { id: "iga_b6", title: "Invitación a las Geometrías No-euclideanas",        author: "A. Ramírez-Galarza & G. Sienra", edition: "Las Prensas de Ciencias, UNAM, 2000" },
      { id: "iga_b7", title: "Geometry and the Imagination",                      author: "D. Hilbert & S. Cohn-Vossen",   edition: "Vínculos Matemáticos 150, FC-UNAM, 2000" },
      { id: "iga_b8", title: "Transformation Geometry: An Introduction to Symmetry", author: "G. Martin",                edition: "Springer-Verlag, 1997" },
    ]
  },
  {
    subject: "Matemáticas Discretas",
    matId:   "matematicas_discretas",
    books: [
      { id: "md_b1", title: "Mathematical Structures For Computer Science", author: "J.L. Gersting",      edition: "3ª ed. W.H. Freeman, 1993" },
      { id: "md_b2", title: "A Logical Approach to Discrete Math",          author: "D. Gries & F.B. Schneider", edition: "Springer-Verlag, 1994" },
    ]
  },
  {
    subject: "Mecánica Vectorial",
    matId:   "mecanica_vectorial",
    books: [
      { id: "mv_b1", title: "Física",                                      author: "M. Alonso; J.E. Finn",                    edition: "Addison Wesley Iberoamericana, 1999" },
      { id: "mv_b2", title: "Physics for Scientists & Engineers",           author: "D. Giancoli",                             edition: "3ª ed. Prentice Hall, 2000" },
      { id: "mv_b3", title: "Fundamentals of Physics",                      author: "D. Halliday; R. Resnick; J. Walker",      edition: "5ª ed. John Wiley & Sons, 1997" },
      { id: "mv_b4", title: "Mecánica (Berkeley Physics Course, Vol. 1)",   author: "Ch. Kittel; W.D. Knight; M.A. Ruderman", edition: "Reverté, 1989" },
      { id: "mv_b5", title: "Física para ingeniería y ciencias, Vol. 1",    author: "H.C. Ohanian; J.T. Markert",              edition: "3ª ed. McGraw-Hill, 2009" },
      { id: "mv_b6", title: "Física, Vol. I",                               author: "R.A. Serway; J.W. Jewett",                edition: "6ª ed. Thomson, 2005" },
      { id: "mv_b7", title: "Newtonian Mechanics (M.I.T. Physics Series)",  author: "A.P. French",                             edition: "W.W. Norton, 1971" },
    ]
  },
  {
    subject: "Probabilidad I",
    matId:   "probabilidad_1",
    books: [
      { id: "prob1_b1", title: "An Introduction to Probability Theory and its Applications Vol. I", author: "W. Feller",                         edition: "Wiley, 1968" },
      { id: "prob1_b2", title: "The Theory of Probability",                                        author: "B.V. Gnedenko",                      edition: "Chelsea, 1975" },
      { id: "prob1_b3", title: "Introduction to Probability Theory",                               author: "P.G. Hoel, S.C. Port & C.J. Stone",  edition: "Houghton Mifflin, 1971" },
      { id: "prob1_b4", title: "Introduction to the Theory of Statistics",                         author: "A.M. Mood, F.A. Graybill & D.C. Boes", edition: "3ª ed. McGraw-Hill, 1974" },
      { id: "prob1_b5", title: "A First Course in Probability Theory",                             author: "S. Ross",                            edition: "5ª ed. Prentice Hall, 1997" },
      { id: "prob1_b6", title: "Statistical Inference",                                            author: "G. Casella & R.L. Berger",           edition: "Thomson Learning, 2002" },
      { id: "prob1_b7", title: "Elementary Probability",                                           author: "D.R. Stirzaker",                     edition: "2ª ed. Cambridge University Press, 2003" },
    ]
  },
  {
    subject: "Teoría de los Números I",
    matId:   "teoria_numeros_1",
    books: [
      { id: "tn1_b1", title: "Number Theory",                              author: "G. Andrews",                                edition: "Dover, 2000" },
      { id: "tn1_b2", title: "The Queen of Mathematics",                   author: "J. Goldman",                                edition: "A.K. Peters, 1998" },
      { id: "tn1_b3", title: "Elementary Number Theory",                   author: "G. Jones & J. Jones",                       edition: "Springer-Verlag, 2001" },
      { id: "tn1_b4", title: "Elementary Number Theory with Applications", author: "T. Koshy",                                  edition: "Harcourt/Academic Press, 2002" },
      { id: "tn1_b5", title: "Elementary Methods in Number Theory",        author: "M. Nathanson",                              edition: "Springer-Verlag, 2000" },
      { id: "tn1_b6", title: "An Introduction to the Theory of Numbers",   author: "I. Niven, H. Zuckerman & H. Montgomery",    edition: "J. Wiley, 1991" },
      { id: "tn1_b7", title: "Aritmética y Teoría de Grupos",              author: "R.M. Pineda",                               edition: "UAM-Iztapalapa, 1995" },
      { id: "tn1_b8", title: "Fundamentos de la Teoría de los Números",    author: "I. Vinogradov",                             edition: "MIR, 1977" },
    ]
  },
  {
    subject: "Teoría de los Números II",
    matId:   "teoria_numeros_2",
    books: [
      { id: "tn2_b1", title: "Introduction to p-adic Numbers and Valuation Theory", author: "G. Bachman",                    edition: "Academic Press, 1964" },
      { id: "tn2_b2", title: "Number Theory",                                       author: "Z.I. Borevich & I.R. Shafarevich", edition: "Academic Press, 1966" },
    ]
  },
  // ── Bloque II ─────────────────────────────────────────────────────
  {
    subject: "Álgebra Moderna II",
    matId:   "algebra_moderna_2",
    books: [
      { id: "am2_b1", title: "Álgebra Abstracta",                    author: "J.B. Fraleigh",   edition: "Sistemas Técnicos de Edición, 1988" },
      { id: "am2_b2", title: "Álgebra Moderna",                      author: "I.N. Herstein",   edition: "Editorial Trillas, 1970" },
      { id: "am2_b3", title: "Galois Theory",                        author: "I. Stewart",      edition: "Chapman and Hall, 2004" },
    ]
  },
  {
    subject: "Análisis de Algoritmos I",
    matId:   "analisis_algoritmos_1",
    books: [
      { id: "aa1_b1",  title: "Applied and Algorithmic Graph Theory",                              author: "G. Chartrand; O.R. Oellermann",          edition: "McGraw-Hill, 1993" },
      { id: "aa1_b2",  title: "Introduction to Algorithms",                                        author: "T.H. Cormen; C.E. Leiserson; R.L. Rivest", edition: "McGraw-Hill, 1990" },
      { id: "aa1_b3",  title: "Practical Algorithms in C++",                                       author: "B. Flamig",                              edition: "Wiley, 1995" },
      { id: "aa1_b4",  title: "The Art of Computer Programming, Vol. I: Fundamental Algorithms",  author: "D.E. Knuth",                             edition: "Addison-Wesley, 1973" },
      { id: "aa1_b5",  title: "Algorithms and Data Structures: Design, Correctness and Analysis", author: "J. Kingston",                            edition: "Addison-Wesley, 1990" },
      { id: "aa1_b6",  title: "Introduction to Algorithms: A Creative Approach",                  author: "U. Manber",                              edition: "Addison-Wesley, 1989" },
      { id: "aa1_b7",  title: "Data Structures and Algorithms, Vol. I: Sorting and Searching",    author: "K. Mehlhorn",                            edition: "Springer-Verlag, 1984" },
      { id: "aa1_b8",  title: "Foundations of Algorithms",                                        author: "R. Neapolitan; K. Naimipour",            edition: "Jones and Bartlett, 1998" },
      { id: "aa1_b9",  title: "Compared to What? An Introduction to the Analysis of Algorithms",  author: "G.J.E. Rawlins",                         edition: "Computer Science Press, 1991" },
      { id: "aa1_b10", title: "The Algorithm Design Manual",                                       author: "S.S. Skiena",                            edition: "Springer-Verlag, 1998" },
      { id: "aa1_b11", title: "Data Structures and Algorithm Analysis in C++",                    author: "M.A. Weiss",                             edition: "Addison-Wesley, 1999" },
      { id: "aa1_b12", title: "Data Structures: An Object Oriented Approach",                     author: "W.J. Collins",                           edition: "Addison-Wesley, 1992" },
    ]
  },
  {
    subject: "Arquitectura de Computadoras",
    matId:   "arquitectura_computadoras",
    books: [
      { id: "ac_b1", title: "Computer Architecture: A Quantitative Approach",          author: "J.L. Hennessy; D.A. Patterson",        edition: "3ª ed. Morgan Kaufmann, 2003" },
      { id: "ac_b2", title: "Computer Organization",                                   author: "V.C. Hamacher; Z. Vranesic; S. Zaky",  edition: "5ª ed. McGraw-Hill, 2002" },
      { id: "ac_b3", title: "Logic and Computer Design Fundamentals",                  author: "M. Mano; C.R. Kime",                  edition: "2ª ed. Prentice Hall, 2000" },
      { id: "ac_b4", title: "Principles of Computer Architecture",                     author: "M.J. Murdocca; V.P. Heuring",         edition: "Prentice Hall, 2000" },
      { id: "ac_b5", title: "Computer Organization and Design: The Hardware/Software Interface", author: "D. Patterson; J. Hennessy",  edition: "Morgan Kaufmann, 1998" },
      { id: "ac_b6", title: "Structured Computer Organization",                        author: "A.S. Tanenbaum",                      edition: "4ª ed. Prentice Hall, 1999" },
      { id: "ac_b7", title: "Computer Organization and Architecture: Designing for Performance", author: "W. Stallings",              edition: "Prentice Hall, 1999" },
    ]
  },
  {
    subject: "Cálculo de Variaciones",
    matId:   "calculo_variaciones",
    books: [
      { id: "cv_b1", title: "Methods of Mathematical Physics, Vol. I",                   author: "R. Courant; D. Hilbert",    edition: "Wiley Interscience, 1953" },
      { id: "cv_b2", title: "Cálculo de Variaciones (Serie FENOMEC Vol. 3)",             author: "J. Ize",                    edition: "UNAM" },
      { id: "cv_b3", title: "Variational Calculus with Elementary Convexity",            author: "J.L. Troutman",             edition: "Springer, 1983" },
      { id: "cv_b4", title: "Calculus of Variations",                                    author: "I.M. Gelfand; S.V. Fomin",  edition: "Prentice Hall, 1963" },
      { id: "cv_b5", title: "Ecuaciones Diferenciales y Cálculo Variacional",            author: "L.E. El'sgol'c",            edition: "MIR, 1977" },
      { id: "cv_b6", title: "Lectures on the Calculus of Variations",                    author: "G.A. Bliss",                edition: "University of Chicago, 1957" },
    ]
  },
  {
    subject: "Economía I",
    matId:   "economia_1",
    books: [
      { id: "eco1_b1", title: "Teoría Económica en Retrospección",         author: "M. Blaug",                  edition: "FCE, 1985" },
      { id: "eco1_b2", title: "Macroeconomía",                             author: "R. Dornbusch; S. Fischer",  edition: "McGraw-Hill, 1991" },
      { id: "eco1_b3", title: "Macroeconomía",                             author: "R. Hall; J. Taylor",        edition: "Antoni Bosch, 1991" },
      { id: "eco1_b4", title: "Microeconomic Theory",                      author: "A. Mas-Colell et al.",      edition: "Oxford University Press, 1995" },
      { id: "eco1_b5", title: "Microeconomic Analysis",                    author: "H. Varian",                 edition: "W.W. Norton, 1992" },
      { id: "eco1_b6", title: "Economía Intermedia: Un Enfoque Moderno",   author: "H. Varian",                 edition: "Antoni Bosch, 1992" },
    ]
  },
  {
    subject: "Ecuaciones Diferenciales II",
    matId:   "ecuaciones_diferenciales_2",
    books: [
      { id: "ed2_b1", title: "The Qualitative Theory of Ordinary Differential Equations",      author: "F. Brauer; J.A. Nohel",        edition: "Dover, 1989" },
      { id: "ed2_b2", title: "Differential Equations, Dynamical Systems and Linear Algebra",   author: "M.W. Hirsch; S. Smale",        edition: "Academic Press, 1974" },
      { id: "ed2_b3", title: "Nonlinear Ordinary Differential Equations",                      author: "D.W. Jordan; P. Smith",        edition: "Oxford University Press, 1994" },
      { id: "ed2_b4", title: "Nonlinear Differential Equations and Dynamical Systems",         author: "F. Verhulst",                  edition: "Springer-Verlag, 1980" },
      { id: "ed2_b5", title: "Ordinary Differential Equations",                                author: "V.I. Arnold",                  edition: "3ª ed. Springer-Verlag, 1991" },
      { id: "ed2_b6", title: "Dynamics and Bifurcations",                                      author: "J. Hale; H. Kocak",            edition: "Springer-Verlag, 1991" },
      { id: "ed2_b7", title: "Differential Equations and Dynamical Systems",                   author: "L. Perko",                     edition: "Springer-Verlag, 1990" },
    ]
  },
  {
    subject: "Electromagnetismo II",
    matId:   "electromagnetismo_2",
    books: [
      { id: "em2_b1", title: "Foundations of Electromagnetic Theory",                author: "J.R. Reitz; F.J. Milford; R.W. Christy", edition: "Addison-Wesley, 1979" },
      { id: "em2_b2", title: "Electromagnetic Fields and Waves",                     author: "P. Lorrain; D.R. Corson",                edition: "W.H. Freeman, 1970" },
      { id: "em2_b3", title: "Electricity and Magnetism",                            author: "O.D. Jelimenko",                         edition: "Appleton Century Coft, 1966" },
      { id: "em2_b4", title: "Classical Electromagnetic Theory",                     author: "J. Vanderlinde",                         edition: "Wiley, 1993" },
      { id: "em2_b5", title: "The Theory of the Electromagnetic Field",              author: "D.M. Cook",                              edition: "Prentice-Hall, 1975" },
      { id: "em2_b6", title: "Electromagnetic Fields",                               author: "R.K. Wangsness",                         edition: "Wiley, 1979" },
      { id: "em2_b7", title: "An Introduction to Electromagnetic Theory",            author: "P.C. Clemow",                            edition: "Cambridge University Press, 1973" },
      { id: "em2_b8", title: "Introduction to Electrodynamics",                      author: "D.J. Griffiths",                         edition: "Prentice-Hall, 1989" },
      { id: "em2_b9", title: "Classical Electromagnetic Radiation",                  author: "M.A. Heald; J.B. Marion",                edition: "Saunders, 1995" },
    ]
  },
  {
    subject: "Estadística I",
    matId:   "estadistica_1",
    books: [
      { id: "est1_b1", title: "Probabilidad y Estadística: Aplicaciones y Métodos",           author: "G.C. Canavos",                    edition: "McGraw-Hill, 1987" },
      { id: "est1_b2", title: "Statistical Inference",                                         author: "G. Casella; R.L. Berger",         edition: "Wadsworth, 1990" },
      { id: "est1_b3", title: "Probability and Statistics",                                    author: "M.H. Degroot",                    edition: "Addison-Wesley, 1986" },
      { id: "est1_b4", title: "Introduction to Mathematical Statistics",                       author: "R.V. Hogg; A.T. Craig",           edition: "5ª ed. Prentice-Hall, 1995" },
      { id: "est1_b5", title: "An Introduction to Mathematical Statistics and its Applications", author: "R.J. Larsen; M.L. Marx",        edition: "Prentice-Hall, 1986" },
      { id: "est1_b6", title: "Statistical Theory",                                            author: "B.W. Lindgren",                   edition: "Macmillan, 1976" },
      { id: "est1_b7", title: "Introduction to the Theory of Statistics",                      author: "A.M. Mood; F.A. Graybill; D.C. Boes", edition: "McGraw-Hill, 1974" },
      { id: "est1_b8", title: "Exploratory Data Analysis",                                     author: "J.W. Tukey",                      edition: "Addison-Wesley, 1977" },
    ]
  },
  {
    subject: "Estadística II",
    matId:   "estadistica_2",
    books: [
      { id: "est2_b1", title: "Practical Nonparametric Statistics",                 author: "W.J. Conover",                      edition: "2ª ed. Wiley, 1980" },
      { id: "est2_b2", title: "Applied Nonparametric Statistics",                   author: "W. Daniel",                         edition: "2ª ed. PWS Kent, 1990" },
      { id: "est2_b3", title: "Nonparametric Statistical Inference",                author: "J.D. Gibbons; S. Chakraborti",      edition: "4ª ed. Marcel Dekker, 2003" },
      { id: "est2_b4", title: "Regression Analysis by Example",                     author: "S. Chatterjee; B. Price",           edition: "2ª ed. Wiley, 1991" },
      { id: "est2_b5", title: "Applied Regression Analysis",                        author: "N. Draper; H. Smith",               edition: "2ª ed. Wiley, 1981" },
      { id: "est2_b6", title: "Introduction to Linear Regression Analysis",         author: "D.C. Montgomery; E.A. Peck; G.G. Vining", edition: "3ª ed. Wiley, 2001" },
      { id: "est2_b7", title: "Applied Linear Statistical Models",                  author: "J. Neter; W. Wasserman; M.H. Kutner", edition: "3ª ed. Irwin, 1990" },
      { id: "est2_b8", title: "Applied Regression Analysis: A Research Tool",       author: "J.O. Rawlings",                     edition: "Wadsworth, 1988" },
    ]
  },
  {
    subject: "Geometría Diferencial I",
    matId:   "geometria_diferencial_1",
    books: [
      { id: "gd1_b1", title: "Differential Geometry of Curves and Surfaces in ℝ³",      author: "M.P. Do Carmo",                       edition: "Prentice Hall, 1976" },
      { id: "gd1_b2", title: "Geometry and the Imagination (Vínculos Matemáticos 150)",  author: "D. Hilbert; S. Cohn-Vossen",          edition: "FC-UNAM, 2000" },
      { id: "gd1_b3", title: "Elementary Differential Geometry",                          author: "B. O'Neill",                          edition: "Academic Press, 1997" },
      { id: "gd1_b4", title: "Geometría Diferencial",                                     author: "A.V. Pogorelov",                      edition: "MIR, 1977" },
      { id: "gd1_b5", title: "A Comprehensive Introduction to Differential Geometry",     author: "M.A. Spivak",                         edition: "Publish or Perish, 1999" },
      { id: "gd1_b6", title: "Mathematical Methods of Classical Mechanics",               author: "V.I. Arnold",                         edition: "Springer-Verlag, 1989" },
    ]
  },
  {
    subject: "Geometría Diferencial II",
    matId:   "geometria_diferencial_2",
    books: [
      { id: "gd2_b1", title: "Differential Geometry of Curves and Surfaces in ℝ³",      author: "M.P. Do Carmo",                       edition: "Prentice Hall, 1976" },
      { id: "gd2_b2", title: "Geometry and the Imagination (Vínculos Matemáticos 150)",  author: "D. Hilbert; S. Cohn-Vossen",          edition: "FC-UNAM, 2000" },
      { id: "gd2_b3", title: "Elementary Differential Geometry",                          author: "B. O'Neill",                          edition: "Academic Press, 1997" },
      { id: "gd2_b4", title: "Geometría Diferencial",                                     author: "A.V. Pogorelov",                      edition: "MIR, 1977" },
      { id: "gd2_b5", title: "Differential Geometry",                                     author: "J.J. Stoker",                         edition: "Wiley-Interscience, 1969" },
      { id: "gd2_b6", title: "A Comprehensive Introduction to Differential Geometry",     author: "M.A. Spivak",                         edition: "Publish or Perish, 1999" },
    ]
  },
  {
    subject: "Historia de las Matemáticas I",
    matId:   "historia_matematicas_1",
    books: [
      { id: "hm1_b1", title: "Euclid, the Creation of Mathematics",                              author: "B. Artmann",          edition: "Springer-Verlag, 1999" },
      { id: "hm1_b2", title: "The Beginnings and Evolution of Algebra",                          author: "I. Bashmakova; G. Smirnova", edition: "MAA, 2000" },
      { id: "hm1_b3", title: "An Introduction to the History of Mathematics",                    author: "H. Eves",             edition: "Saunders College, 1976" },
      { id: "hm1_b4", title: "A History of Mathematics: An Introduction",                        author: "V. Katz",             edition: "Harper Collins, 1998" },
      { id: "hm1_b5", title: "El Pensamiento Matemático de la Antigüedad a Nuestros Días (3 vols.)", author: "M. Kline",        edition: "Alianza Editorial, 1992" },
    ]
  },
  {
    subject: "Historia de las Matemáticas II",
    matId:   "historia_matematicas_2",
    books: [
      { id: "hm2_b1", title: "The Beginnings and Evolution of Algebra",                          author: "I. Bashmakova; G. Smirnova", edition: "MAA, 2000" },
      { id: "hm2_b2", title: "The History of Calculus and its Conceptual Development",           author: "C.B. Boyer",          edition: "Dover, 1959" },
      { id: "hm2_b3", title: "Elementos de Historia de las Matemáticas",                         author: "N. Bourbaki",         edition: "Alianza Editorial, 1969" },
      { id: "hm2_b4", title: "A History of Mathematics: An Introduction",                        author: "V. Katz",             edition: "Harper Collins, 1998" },
      { id: "hm2_b5", title: "El Pensamiento Matemático de la Antigüedad a Nuestros Días (3 vols.)", author: "M. Kline",        edition: "Alianza Editorial, 1992" },
      { id: "hm2_b6", title: "Fermat's Last Theorem",                                            author: "S. Singh",            edition: "Fourth Estate, 1997" },
      { id: "hm2_b7", title: "The Elements of Non-Euclidean Geometry",                           author: "D.M. Sommerville",    edition: "Dover, 1958" },
    ]
  },
  // ── Bloque III ────────────────────────────────────────────────────
];

// Índice (dentro de LIBRARY_OPT) donde empieza cada Bloque.
// Bloque III está vacío, así que solo se definen I y II.
const LIBRARY_OPT_BLOQUE_STARTS = [0, 16]; // [BloqueI, BloqueII]

/* ── Función auxiliar para buscar libro por id ── */
function findBook(id) {
  const all = [...LIBRARY, ...LIBRARY_OPT];
  for (let i = 0; i < all.length; i++) {
    const subj = all[i];
    const b = subj.books.find(bk => bk.id === id);
    if (b) {
      /* Color se resuelve en libros.js via palColor; aquí devolvemos el subject */
      return { book: b, subject: subj.subject, color: '' };
    }
  }
  return null;
}

