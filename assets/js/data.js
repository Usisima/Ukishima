// ==================== OPTATIVAS POR BLOQUE ====================
// Bloque I — Semestres 2, 3 y 4 (40 créditos)
const OPTATIVAS_BLOQUE_I = [
  { name: "Álgebra Geométrica",                            clave: "0014", creditos: 10, icon: "assets/images/d17.jpg" },
  { name: "Conjuntos Convexos",                            clave: "0088", creditos: 10, icon: "assets/images/d19.jpg" },
  { name: "Conjuntos y Lógica",                            clave: "0271", creditos: 10, icon: "assets/images/d20.jpg" },
  { name: "Diseño de Sistemas Digitales",                  clave: "0574", creditos: 10, icon: "assets/images/d21.jpg" },
  { name: "Electromagnetismo I",                           clave: "0419", creditos: 12, icon: "assets/images/d22.jpg" },
  { name: "Fenómenos Colectivos",                          clave: "0302", creditos: 12, icon: "assets/images/d23.jpg" },
  { name: "Geometría Moderna II",                          clave: "0250", creditos: 10, icon: "assets/images/d24.jpg" },
  { name: "Geometría Proyectiva",                          clave: "0251", creditos: 10, icon: "assets/images/d25.jpg" },
  { name: "Gráficas y Juegos",                             clave: "0422", creditos: 10, icon: "assets/images/d26.jpg" },
  { name: "Introducción a Ciencias de la Computación I",   clave: "0224", creditos: 10, icon: "assets/images/d27.jpg" },
  { name: "Introducción a Ciencias de la Computación II",  clave: "0339", creditos: 10, icon: "assets/images/d28.jpg" },
  { name: "Introducción a la Geometría Avanzada",          clave: "0272", creditos: 10, icon: "assets/images/d29.jpg" },
  { name: "Matemáticas Discretas",                         clave: "0416", creditos: 10, icon: "assets/images/d30.jpg" },
  { name: "Mecánica Vectorial",                            clave: "0228", creditos: 10, icon: "assets/images/d31.jpg" },
  { name: "Probabilidad I",                                clave: "0625", creditos: 10, icon: "assets/images/d32.jpg" },
  { name: "Teoría de los Números I",                       clave: "0764", creditos: 10, icon: "assets/images/d33.jpg" },
  { name: "Teoría de los Números II",                      clave: "0777", creditos: 10, icon: "assets/images/d34.jpg" },
];

// Bloque II — Semestres 5 y 6 (40 créditos)
const OPTATIVAS_BLOQUE_II = [
  { name: "Álgebra Moderna II",                            clave: "0002", creditos: 10, icon: "assets/images/d35.jpg" },
  { name: "Análisis de Algoritmos I",                      clave: "0414", creditos: 10, icon: "assets/images/d36.jpg" },
  { name: "Análisis Numérico",                             clave: "1710", creditos: 10, icon: "assets/images/d37.jpg" },
  { name: "Arquitectura de Computadoras",                  clave: "0605", creditos: 10, icon: "assets/images/d38.jpg" },
  { name: "Cálculo de las Variaciones",                    clave: "0083", creditos: 10, icon: "assets/images/d39.jpg" },
  { name: "Economía I",                                    clave: "1609", creditos: 10, icon: "assets/images/d41.jpg" },
  { name: "Ecuaciones Diferenciales II",                   clave: "0163", creditos: 10, icon: "assets/images/d42.jpg" },
  { name: "Electromagnetismo II",                          clave: "0609", creditos: 10, icon: "assets/images/d43.jpg" },
  { name: "Estadística I",                                 clave: "0398", creditos: 10, icon: "assets/images/d44.jpg" },
  { name: "Estadística II",                                clave: "0399", creditos: 10, icon: "assets/images/d45.jpg" },
  { name: "Geometría Diferencial I",                       clave: "0246", creditos: 10, icon: "assets/images/d46.jpg" },
  { name: "Geometría Diferencial II",                      clave: "0247", creditos: 10, icon: "assets/images/d47.jpg" },
  { name: "Historia de las Matemáticas I",                 clave: "0286", creditos: 10, icon: "assets/images/d48.jpg" },
  { name: "Historia de las Matemáticas II",                clave: "0287", creditos: 10, icon: "assets/images/d49.jpg" },
  { name: "Introducción a la Física Cuántica",             clave: "0582", creditos: 10, icon: "assets/images/d50.jpg" },
  { name: "Introducción Matemática a la Mecánica Celeste", clave: "0356", creditos: 10, icon: "assets/images/d52.jpg" },
  { name: "Investigación de Operaciones",                  clave: "1506", creditos: 10, icon: "assets/images/d53.jpg" },
  { name: "Lenguajes de Programación y sus Paradigmas",    clave: "0607", creditos: 10, icon: "assets/images/d55.jpg" },
  { name: "Lógica Matemática I",                           clave: "0445", creditos: 10, icon: "assets/images/d56.jpg" },
  { name: "Matemáticas Avanzadas de la Física",            clave: "0610", creditos: 10, icon: "assets/images/d57.jpg" },
  { name: "Mecánica Analítica",                            clave: "0611", creditos: 10, icon: "assets/images/d58.jpg" },
  { name: "Muestreo",                                      clave: "0891", creditos: 10, icon: "assets/images/d59.jpg" },
  { name: "Óptica",                                        clave: "0584", creditos: 10, icon: "assets/images/d60.jpg" },
  { name: "Probabilidad II",                               clave: "0626", creditos: 10, icon: "assets/images/d61.jpg" },
  { name: "Programación Lineal",                           clave: "0621", creditos: 10, icon: "assets/images/d62.jpg" },
  { name: "Seminario de Ciencia y Sociedad I",             clave: "0951", creditos: 10, icon: "assets/images/d63.jpg" },
  { name: "Series de Fourier y Teoría de Sturm Liouville", clave: "0721", creditos: 10, icon: "assets/images/d64.jpg" },
  { name: "Sistemas Dinámicos Discretos I",                clave: "0273", creditos: 10, icon: "assets/images/d65.jpg" },
  { name: "Sistemas Operativos",                           clave: "0713", creditos: 10, icon: "assets/images/d66.jpg" },
  { name: "Teoría de la Computación",                      clave: "0576", creditos: 10, icon: "assets/images/d68.jpg" },
  { name: "Teoría de la Medida I",                         clave: "0947", creditos: 10, icon: "assets/images/d69.jpg" },
  { name: "Teoría de las Gráficas I",                      clave: "0591", creditos: 10, icon: "assets/images/d67.jpg" },
  { name: "Teoría de los Conjuntos I",                     clave: "0760", creditos: 10, icon: "assets/images/d70.jpg" },
  { name: "Termodinámica",                                 clave: "0612", creditos: 10, icon: "assets/images/d71.jpg" },
  { name: "Topología I",                                   clave: "0765", creditos: 10, icon: "assets/images/d72.jpg" },
];

// Bloque III — Semestres 7 y 8 (80 créditos)
const OPTATIVAS_BLOQUE_III = [
  { name: "Álgebra Moderna III",                                     clave: "0003", creditos: 10, icon: "assets/images/d73.jpg" },
  { name: "Álgebra Moderna IV",                                      clave: "0004", creditos: 10, icon: "assets/images/d74.jpg" },
  { name: "Análisis de Fourier I",                                   clave: "0026", creditos: 10, icon: "assets/images/d75.jpg" },
  { name: "Análisis de Fourier II",                                  clave: "0027", creditos: 10, icon: "assets/images/d76.jpg" },
  { name: "Análisis de Regresión",                                   clave: "0078", creditos: 10, icon: "assets/images/d77.jpg" },
  { name: "Análisis Matemático III",                                 clave: "0011", creditos: 10, icon: "assets/images/d78.jpg" },
  { name: "Análisis Matemático IV",                                  clave: "0012", creditos: 10, icon: "assets/images/d79.jpg" },
  { name: "Biología Matemática I",                                   clave: "0275", creditos: 10, icon: "assets/images/d80.jpg" },
  { name: "Biología Matemática II",                                  clave: "0276", creditos: 10, icon: "assets/images/d81.jpg" },
  { name: "Complejidad Computacional",                               clave: "—",    creditos: 10, icon: "assets/images/d82.jpg" },
  { name: "Dinámica de Medios Deformables",                          clave: "0827", creditos: 12, icon: "assets/images/d83.jpg" },
  { name: "Econometría I",                                           clave: "—",    creditos: 10, icon: "assets/images/d84.jpg" },
  { name: "Econometría II",                                          clave: "—",    creditos: 10, icon: "assets/images/d85.jpg" },
  { name: "Economía II",                                             clave: "—",    creditos: 10, icon: "assets/images/d86.jpg" },
  { name: "Ecuaciones Diferenciales Parciales I",                    clave: "0165", creditos: 10, icon: "assets/images/d88.jpg" },
  { name: "Ecuaciones Diferenciales Parciales II",                   clave: "0183", creditos: 10, icon: "assets/images/d89.jpg" },
  { name: "Ecuaciones Integrales",                                   clave: "0585", creditos: 10, icon: "assets/images/d90.jpg" },
  { name: "Estadística Bayesiana",                                   clave: "0411", creditos: 10, icon: "assets/images/d91.jpg" },
  { name: "Estadística III",                                         clave: "—",    creditos: 10, icon: "assets/images/d92.jpg" },
  { name: "Física Computacional",                                    clave: "—",    creditos: 12, icon: "assets/images/d93.jpg" },
  { name: "Física Estadística",                                      clave: "—",    creditos: 12, icon: "assets/images/d94.jpg" },
  { name: "Geometría Algebraica I",                                  clave: "0242", creditos: 10, icon: "assets/images/d95.jpg" },
  { name: "Geometría Algebraica II",                                 clave: "0243", creditos: 10, icon: "assets/images/d96.jpg" },
  { name: "Geometría Diferencial III",                               clave: "0248", creditos: 10, icon: "assets/images/d97.jpg" },
  { name: "Geometría Riemanniana I",                                 clave: "0252", creditos: 10, icon: "assets/images/d98.jpg" },
  { name: "Geometría Riemanniana II",                                clave: "0253", creditos: 10, icon: "assets/images/d99.jpg" },
  { name: "Geometría Sumatoria",                                     clave: "0586", creditos: 10, icon: "assets/images/d100.jpg" },
  { name: "Ingeniería de Software",                                  clave: "0575", creditos: 10, icon: "assets/images/d101.jpg" },
  { name: "Inteligencia Artificial",                                 clave: "0352", creditos: 10, icon: "assets/images/d102.jpg" },
  { name: "Introducción a las Funciones Recursivas y Computabilidad",clave: "0351", creditos: 10, icon: "assets/images/d103.jpg" },
  { name: "Lógica Matemática II",                                    clave: "0446", creditos: 10, icon: "assets/images/d104.jpg" },
  { name: "Lógica Matemática III",                                   clave: "0447", creditos: 10, icon: "assets/images/d105.jpg" },
  { name: "Mecánica Cuántica",                                       clave: "—",    creditos: 12, icon: "assets/images/d106.jpg" },
  { name: "Procesos Estocásticos I",                                 clave: "0630", creditos: 10, icon: "assets/images/d107.jpg" },
  { name: "Procesos Estocásticos II",                                clave: "0631", creditos: 10, icon: "assets/images/d108.jpg" },
  { name: "Programación Dinámica",                                   clave: "0632", creditos: 10, icon: "assets/images/d109.jpg" },
  { name: "Programación Entera",                                     clave: "0633", creditos: 10, icon: "assets/images/d110.jpg" },
  { name: "Programación no Lineal",                                  clave: "0634", creditos: 10, icon: "assets/images/d111.jpg" },
  { name: "Redes de Computadoras",                                   clave: "0714", creditos: 10, icon: "assets/images/d112.jpg" },
  { name: "Relatividad",                                             clave: "0681", creditos: 10, icon: "assets/images/d113.jpg" },
  { name: "Seminario de Álgebra A",                                  clave: "0742", creditos: 10, icon: "assets/images/d114.jpg" },
  { name: "Seminario de Álgebra B",                                  clave: "0705", creditos: 10, icon: "assets/images/d115.jpg" },
  { name: "Seminario de Análisis Combinatorio",                      clave: "0975", creditos: 10, icon: "assets/images/d116.jpg" },
  { name: "Seminario de Análisis Matemático A",                      clave: "0743", creditos: 10, icon: "assets/images/d117.jpg" },
  { name: "Seminario de Análisis Matemático B",                      clave: "0706", creditos: 10, icon: "assets/images/d118.jpg" },
  { name: "Seminario de Ciencia y Sociedad II",                      clave: "—",    creditos: 10, icon: "assets/images/d119.jpg" },
  { name: "Seminario de Estadística A",                              clave: "0748", creditos: 10, icon: "assets/images/d120.jpg" },
  { name: "Seminario de Estadística B",                              clave: "0708", creditos: 10, icon: "assets/images/d121.jpg" },
  { name: "Seminario de Filosofía de las Matemáticas",               clave: "0750", creditos: 10, icon: "assets/images/d134.jpg" },
  { name: "Seminario de Geometría A",                                clave: "0745", creditos: 10, icon: "assets/images/d126.jpg" },
  { name: "Seminario de Geometría B",                                clave: "—",    creditos: 10, icon: "assets/images/d127.jpg" },
  { name: "Seminario de Historia y Filosofía de la Ciencia I",       clave: "0587", creditos: 10, icon: "assets/images/d122.jpg" },
  { name: "Seminario de Historia y Filosofía de la Ciencia II",      clave: "0588", creditos: 10, icon: "assets/images/d123.jpg" },
  { name: "Seminario de Historia y Filosofía de la Ciencia III",     clave: "0589", creditos: 10, icon: "assets/images/d124.jpg" },
  { name: "Seminario de Historia y Filosofía de la Ciencia IV",      clave: "0590", creditos: 10, icon: "assets/images/d125.jpg" },
  { name: "Seminario de Investigación de Operaciones",               clave: "0991", creditos: 10, icon: "assets/images/d128.jpg" },
  { name: "Seminario de Matemáticas Aplicadas I",                    clave: "0735", creditos: 10, icon: "assets/images/d135.jpg" },
  { name: "Seminario de Matemáticas Aplicadas II",                   clave: "0736", creditos: 10, icon: "assets/images/d136.jpg" },
  { name: "Seminario de Probabilidad A",                             clave: "0749", creditos: 10, icon: "assets/images/d129.jpg" },
  { name: "Seminario de Probabilidad B",                             clave: "0710", creditos: 10, icon: "assets/images/d130.jpg" },
  { name: "Seminario de Temas Selectos de Computación",              clave: "0810", creditos: 10, icon: "assets/images/d131.jpg" },
  { name: "Seminario de Topología A",                                clave: "0977", creditos: 10, icon: "assets/images/d132.jpg" },
  { name: "Seminario de Topología B",                                clave: "0712", creditos: 10, icon: "assets/images/d133.jpg" },
  { name: "Seminario Sobre Enseñanza de las Matemáticas I",          clave: "0751", creditos: 10, icon: "assets/images/d137.jpg" },
  { name: "Seminario Sobre Enseñanza de las Matemáticas II",         clave: "0754", creditos: 10, icon: "assets/images/d138.jpg" },
  { name: "Seminario Sobre Enseñanza de las Matemáticas III",        clave: "0984", creditos: 10, icon: "assets/images/d140.jpg" },
  { name: "Seminario Sobre Enseñanza de las Matemáticas IV",         clave: "0988", creditos: 10, icon: "assets/images/d139.jpg" },
  { name: "Simulación y Control",                                    clave: "0724", creditos: 10, icon: "assets/images/d141.jpg" },
  { name: "Sistemas Dinámicos Discretos II",                         clave: "0274", creditos: 10, icon: "assets/images/d142.jpg" },
  { name: "Temas Selectos de Análisis Numérico",                     clave: "1089", creditos: 10, icon: "assets/images/d143.jpg" },
  { name: "Teoría de Colas",                                         clave: "0944", creditos: 10, icon: "assets/images/d144.jpg" },
  { name: "Teoría de Decisiones",                                    clave: "0929", creditos: 10, icon: "assets/images/d149.jpg" },
  { name: "Teoría de Inventarios, Reemplazo y Mantenimiento",        clave: "0945", creditos: 10, icon: "assets/images/d145.jpg" },
  { name: "Teoría de Juegos I",                                      clave: "0946", creditos: 10, icon: "assets/images/d146.jpg" },
  { name: "Teoría de Juegos II",                                     clave: "0950", creditos: 10, icon: "assets/images/d147.jpg" },
  { name: "Teoría de la Medida II",                                  clave: "0948", creditos: 10, icon: "assets/images/d148.jpg" },
  { name: "Teoría de las Gráficas II",                               clave: "0277", creditos: 10, icon: "assets/images/d150.jpg" },
  { name: "Teoría de los Conjuntos II",                              clave: "0779", creditos: 10, icon: "assets/images/d151.jpg" },
  { name: "Teoría de los Conjuntos III",                             clave: "0941", creditos: 10, icon: "assets/images/d152.jpg" },
  { name: "Teoría de Redes",                                         clave: "0442", creditos: 10, icon: "assets/images/d153.jpg" },
  { name: "Topología Diferencial I",                                 clave: "0937", creditos: 10, icon: "assets/images/d154.jpg" },
  { name: "Topología Diferencial II",                                clave: "0939", creditos: 10, icon: "assets/images/d155.jpg" },
  { name: "Topología II",                                            clave: "0766", creditos: 10, icon: "assets/images/d156.jpg" },
  { name: "Topología III",                                           clave: "0767", creditos: 10, icon: "assets/images/d157.jpg" },
  { name: "Variable Compleja II",                                    clave: "0841", creditos: 10, icon: "assets/images/d158.jpg" },
  { name: "Variable Compleja III",                                   clave: "0842", creditos: 10, icon: "assets/images/d159.jpg" },
];

// ==================== DATOS ENRIQUECIDOS DE OPTATIVAS ====================
const OPT_DATA = {
  "Geometría Moderna II": {
    temario: [
      { num: "1", name: "Circunferencias coaxiales", horas: 15, subtemas: ["Potencia de un punto respecto a una circunferencia", "Eje radical de dos circunferencias", "Circunferencias ortogonales", "Familias coaxiales. Circunferencia de similitud", "Aplicación al cuadrilátero completo"] },
      { num: "2", name: "Inversión",                 horas: 15, subtemas: ["Puntos inversos respecto a una circunferencia", "Inversión de rectas y circunferencias", "Conservación de ángulos y razón cruzada", "Inversión de un teorema. Construcciones"] },
      { num: "3", name: "Polos y polares",            horas: 15, subtemas: ["La polar de un punto y el polo de una recta", "Relaciones armónicas. Principio de dualidad", "Triángulo autopolar. Circunferencia polar", "Polos y polares para cónicas. Los diez problemas de Apolonio"] },
      { num: "4", name: "Razón cruzada",              horas: 15, subtemas: ["Razón cruzada para hileras y haces", "Construcción del cuarto elemento dada la razón", "Razón cruzada en la circunferencia. Regla de la falsa posición", "Teoremas de Pascal, Brianchon y Pappus"] },
      { num: "5", name: "Introducción a la Geometría Hiperbólica", horas: 20, subtemas: ["Los elementos de Euclides. El 5° postulado", "Los axiomas de la geometría hiperbólica", "Modelos de la geometría hiperbólica", "El modelo de Poincaré del semiplano. La distancia hiperbólica", "Mediatrices, bisectrices e isometrías. Construcciones"] }
    ],
    bibBasicas: [
      { name: "Altshiller, C.N. — An Introduction to the Modern Geometry of the Triangle and the Circle. Barnes and Noble, 1965.", caps: ["Circunferencias coaxiales", "Inversión", "Polos y polares", "Razón cruzada"] },
      { name: "Menschkowsky, H. — Non-euclidean Geometry. Academic Press, 1972.", caps: ["Introducción a la Geometría Hiperbólica"] },
      { name: "Shively, L.S. — Introducción a la Geometría Moderna. CECSA, 1968.", caps: ["Circunferencias coaxiales", "Inversión", "Polos y polares", "Razón cruzada", "Geometría hiperbólica"] }
    ],
    bibComp: ["Fernández-Román, L. — Jugando con el Triángulo Hiperbólico. Tesis FC-UNAM, 2001.", "García Campos, M. — Geometría Hiperbólica para Principiantes. Tesis FC-UNAM, 2001."],
    subsecuentes: ["Seminario sobre la Enseñanza de las Matemáticas I"]
  },
  "Geometría Proyectiva": {
    temario: [
      { num: "1", name: "Geometría proyectiva sintética",   horas: 20, subtemas: ["Proyecciones. Modelos para el plano proyectivo real", "Proyectividades y perspectividades. Teorema fundamental", "Completación proyectiva de planos afines. Planos proyectivos finitos", "Teorema de Desargues. Teorema de Pascal"] },
      { num: "2", name: "Geometría proyectiva analítica",   horas: 15, subtemas: ["Coordenadas homogéneas. Condiciones de colinealidad", "Ecuaciones de las cónicas. Comportamiento al infinito", "Geometría compleja: puntos circulares y rectas isotrópicas", "Teorema de Euler. Tangente a una curva. Polos y polares respecto a cónicas", "Cambios lineales de coordenadas"] },
      { num: "3", name: "Fundamentos de la geometría proyectiva", horas: 10, subtemas: ["Axiomas para planos afines y proyectivos", "Retícula de subespacios lineales. Pappus ⇒ Desargues", "Teorema fundamental de la geometría proyectiva", "Planos proyectivos sobre anillos de división y no desargues ianos"] },
      { num: "4", name: "Geometría proyectiva tridimensional", horas: 15, subtemas: ["Axiomatización y coordenadas homogéneas", "Configuraciones de Reye y Bricard", "Transversales y generación de cuádricas", "Transformaciones proyectivas. Cambios de coordenadas", "Generación proyectiva de cónicas y cuádricas. Cuádricas en P³"] },
      { num: "5", name: "Temas selectos (dos a elegir)",    horas: 20, subtemas: ["Configuraciones proyectivas", "Introducción a la geometría algebraica", "Cuádricas. Haces y redes de cónicas", "Automorfismos del plano proyectivo", "Aplicaciones a la graficación por computadora", "Teoría de códigos y Criptografía"] }
    ],
    bibBasicas: [
      { name: "Beutelspacher, A.; Rosenbaum, U. — Projective Geometry: From Foundations to Applications. Cambridge University Press, 1998.", caps: ["Geometría proyectiva sintética", "Fundamentos", "Geometría tridimensional"] },
      { name: "Coxeter, H.S.M. — Projective Geometry. Springer-Verlag, 1994.", caps: ["Geometría proyectiva sintética", "Geometría analítica", "Transformaciones proyectivas"] },
      { name: "Hartshorne, R. — Foundations of Projective Geometry. W.A. Benjamin, 1967.", caps: ["Fundamentos de la geometría proyectiva"] },
      { name: "Penna, M.A. — Projective Geometry and its Application to Computer Graphics. Prentice-Hall, 1991.", caps: ["Geometría proyectiva analítica", "Temas selectos: graficación"] },
      { name: "Seidenberg, A. — Elementos de Geometría Proyectiva. CECSA, 1965.", caps: ["Geometría proyectiva sintética", "Geometría proyectiva analítica"] }
    ],
    bibComp: ["Eves, H. — Estudio de las Geometrías. UTEHA, 1982.", "Hilbert, D.; Cohn-Vossen, S. — Geometry and the Imagination. FC-UNAM, 2000."],
    subsecuentes: []
  },
  "Gráficas y Juegos": {
    temario: [
      { num: "I",   name: "Gráficas",                              horas: 20, subtemas: ["Conceptos básicos. Isomorfismo. Matriz de adyacencia", "Subgráficas. Clases de gráficas. Operaciones", "Caminos, paseos, trayectorias y ciclos", "Gráficas conexas. Gráficas bipartitas"] },
      { num: "II",  name: "Árboles",                               horas: 10, subtemas: ["El problema de las vías ferroviarias", "Árboles. Árboles generadores"] },
      { num: "III", name: "Conexidad",                             horas: 12, subtemas: ["Conexidad puntual y lineal", "Vértices de corte y puentes. Bloques", "Teorema de Menger"] },
      { num: "IV",  name: "Recorridos Eulerianos y Hamiltonianos", horas:  9, subtemas: ["El problema de los puentes de Königsberg. Gráficas Eulerianas", "El problema del agente viajero. Gráficas Hamiltonianas", "Aplicaciones: dominó, ajedrez, la casa de los espejos"] },
      { num: "V",   name: "Apareamientos",                         horas:  9, subtemas: ["El problema del casamiento y el problema del baile", "Apareamientos en gráficas bipartitas (Teorema de Hall)", "Algoritmo Húngaro. Factorización"] },
      { num: "VI",  name: "Coloración de vértices",                horas:  5, subtemas: ["El problema de los cuatro colores", "Coloración. Número cromático"] },
      { num: "VII", name: "Planaridad",                            horas:  5, subtemas: ["Gráficas planas. Fórmula de Euler", "El teorema de los cinco colores"] },
      { num: "VIII", name: "Juegos",                               horas:  6, subtemas: ["Introducción a la Teoría de Juegos", "Juegos en forma extensiva. Equilibrio de Nash", "Juegos bipersonales"] },
      { num: "IX",  name: "Juegos tipo Nim",                       horas:  4, subtemas: ["Digráficas. Núcleos", "Juegos tipo Nim"] }
    ],
    bibBasicas: [
      { name: "Berge, C. — Graphs. North Holland, 1985.", caps: ["Gráficas", "Árboles", "Conexidad", "Apareamientos", "Coloración"] },
      { name: "Bondy, J.A.; Murty, U.S. — Graph Theory with Applications. Macmillan, 1976.", caps: ["Gráficas", "Recorridos Eulerianos y Hamiltonianos", "Planaridad", "Coloración"] },
      { name: "Chartrand, G. — Introductory Graph Theory. Dover, 1977.", caps: ["Gráficas", "Árboles", "Conexidad", "Planaridad"] },
      { name: "Harary, F. — Graph Theory. Addison-Wesley, 1969.", caps: ["Gráficas", "Árboles", "Conexidad", "Coloración"] }
    ],
    bibComp: ["Chartrand, G.; Lesniak, L. — Graphs and Digraphs. Wadsworth and Brooks, 1979."],
    subsecuentes: ["Teoría de las Gráficas I", "Análisis de Algoritmos I"]
  },
  "Introducción a Ciencias de la Computación II": {
    temario: [
      { num: "I",  name: "Especificación, verificación y validación", horas:  8, subtemas: ["Especificaciones operativas y descriptivas", "Verificación: pruebas, análisis, ejecución simbólica, depuración", "Lectura de código y recorridos estructurados"] },
      { num: "II", name: "Tipos Abstractos de Datos",                horas:  4, subtemas: ["Conceptos involucrados", "Instrumentación de TAD en un lenguaje de alto nivel"] },
      { num: "III", name: "Estructuras de datos básicas",            horas: 20, subtemas: ["Estructuras secuenciales y arreglos empacados", "Implementaciones contiguas y ligadas", "Estructuras múltiples: listas circulares, bidireccionales y múltiples", "Búsqueda, inserción y remoción de elementos"] },
      { num: "IV", name: "Estructuras de datos no lineales",         horas:  8, subtemas: ["Árboles y estructuras arborescentes. Árboles binarios", "Representación de árboles arbitrarios en base a binarios", "Listas y recolección de basura. Asignación dinámica de espacio"] },
      { num: "V",  name: "Búsquedas y Ordenamientos",               horas: 20, subtemas: ["Algoritmos O(n log n): quicksort, heapsort, mergesort", "Shell sort, bucket sort y radix sort", "Funciones de dispersión y resolución de colisiones", "Árboles balanceados: B y AVL. Ordenamientos externos"] }
    ],
    bibBasicas: [
      { name: "Tucker, A.B. et al. — Fundamentals of Computing II: Abstraction, Data Structures, and Large Software Systems. McGraw-Hill, 1994.", caps: ["Tipos Abstractos de Datos", "Estructuras de datos básicas", "Estructuras no lineales", "Búsquedas y Ordenamientos"] },
      { name: "Magidin, M. — Estructuras de Datos. Editorial Trillas, 1991.", caps: ["Estructuras de datos básicas", "Estructuras no lineales"] }
    ],
    bibComp: ["Aho, A.V.; Hopcroft, J.E.; Ullman, J.D. — Estructuras de Datos y Algoritmos. Addison-Wesley, 1988.", "Cormen, T.H.; Leiserson, C.E.; Rivest, R.L. — Introduction to Algorithms. McGraw-Hill, 1990.", "Baase, S. — Computer Algorithms. Addison-Wesley, 1990."],
    subsecuentes: ["Análisis de Algoritmos I", "Diseño de Sistemas Digitales"]
  },
  "Introducción a la Geometría Avanzada": {
    temario: [
      { num: "1", name: "Geometría Euclidiana", horas: 30, subtemas: ["Simetrías con respecto a un punto, una recta y un plano", "Transformaciones rígidas y sus invariantes", "Cilindros y toros. Subgrupos finitos de E(2) y E(3)", "Frisos y mosaicos"] },
      { num: "2", name: "Geometría Afín",        horas:  5, subtemas: ["Puntos de fuga y recta del horizonte vs. puntos al infinito", "Transformaciones afines y sus invariantes"] },
      { num: "3", name: "Geometría Proyectiva",  horas: 30, subtemas: ["El plano proyectivo real. El principio de realidad", "Cartas coordenadas de P²(R) y P¹(C)", "El grupo de transformaciones proyectivas. Teorema de Desargues", "Propiedades proyectivas de las cónicas. Teorema de Pascal", "Polos y polares. Geometría elíptica"] },
      { num: "4", name: "Geometría Hiperbólica", horas: 15, subtemas: ["Los modelos del plano hiperbólico", "Transformaciones del plano hiperbólico", "La red de Steiner. La métrica hiperbólica", "Primeros resultados. Superficies con estructura hiperbólica. Mosaicos"] }
    ],
    bibBasicas: [
      { name: "Coxeter, H.S.M. — Fundamentos de Geometría. Limusa-Wiley, 1971.", caps: ["Geometría Euclidiana", "Geometría Proyectiva"] },
      { name: "Coxeter, H.S.M. — Projective Geometry. Springer-Verlag, 1994.", caps: ["Geometría Proyectiva"] },
      { name: "Coxeter, H.S.M. — Non-euclidean Geometry. MAA, 1998.", caps: ["Geometría Hiperbólica"] },
      { name: "Ramírez-Galarza, A.; Seade, J. — Introducción a la Geometría Avanzada. UNAM, 2005.", caps: ["Geometría Euclidiana", "Geometría Afín", "Geometría Proyectiva", "Geometría Hiperbólica"] },
      { name: "Ramírez-Galarza, A.; Sienra, G. — Invitación a las Geometrías No-euclideanas. UNAM, 2000.", caps: ["Geometría Hiperbólica"] },
      { name: "Martin, G. — Transformation Geometry. Springer-Verlag, 1997.", caps: ["Geometría Euclidiana", "Geometría Afín"] }
    ],
    bibComp: ["Hilbert, D.; Cohn-Vossen, S. — Geometry and the Imagination. FC-UNAM, 2000.", "Coxeter, H.S.M. — Geometry Revisited. MAA, 1983.", "Eves, H. — Estudio de las Geometrías. UTEHA, 1982.", "Klein, F. — Le Programme d'Erlangen. Gauthier-Villard, 1974."],
    subsecuentes: ["Geometría Diferencial I"]
  },
  "Matemáticas Discretas": {
    temario: [
      { num: "I",  name: "Lógica formal, demostraciones y análisis de algoritmos", horas: 18, subtemas: ["Enunciados, representaciones simbólicas y tautologías", "Cuantificadores, predicados y validez", "Lógica proposicional y de predicados", "Programación lógica y pruebas de correctez", "Técnicas de demostración. Inducción", "Recursión, relaciones de recurrencia y análisis de algoritmos"] },
      { num: "II", name: "Relaciones y gráficas dirigidas",                        horas: 17, subtemas: ["Conjuntos producto y particiones", "Relaciones y gráficas dirigidas", "Trayectorias en relaciones y gráficas dirigidas", "Propiedades de las relaciones. Representación computacional", "Conectividad y algoritmo de Warshall"] },
      { num: "III", name: "Funciones",                                             horas: 12, subtemas: ["Funciones en gráficas. Permutaciones", "Números especiales: Stirling, Eulerianos, Armónicos, Bernoulli, Fibonacci"] },
      { num: "IV", name: "Orden, relaciones y estructuras",                        horas:  5, subtemas: ["Conjuntos parcialmente ordenados. Elementos extremos", "Latices. Álgebras de Boole. Implementación de funciones booleanas"] },
      { num: "V",  name: "Árboles y lenguajes",                                    horas:  4, subtemas: ["Árboles y árboles etiquetados", "Lenguajes y representación de gramáticas", "Árboles no dirigidos"] },
      { num: "VI", name: "Problemas de coloración",                                horas:  4, subtemas: ["Problemas combinatorios de coloración"] }
    ],
    bibBasicas: [
      { name: "Gersting, J.L. — Mathematical Structures For Computer Science. 3ª ed. W.H. Freeman, 1993.", caps: ["Lógica formal", "Relaciones", "Funciones", "Álgebras de Boole", "Árboles"] },
      { name: "Gries, D.; Schneider, F.B. — A Logical Approach to Discrete Math. Springer-Verlag, 1994.", caps: ["Lógica formal y demostraciones", "Recursión"] }
    ],
    bibComp: ["Kolman, B.; Busby, R.C. — Estructuras de Matemáticas Discretas para la Computación. Prentice Hall, 1986.", "Graham, R.L.; Knuth, D.E.; Patashnik, O. — Concrete Mathematics. Addison-Wesley, 1989.", "Cormen, T.H. et al. — Introduction to Algorithms. McGraw-Hill, 1990."],
    subsecuentes: ["Análisis de Algoritmos I", "Gráficas y Juegos"]
  },
  "Conjuntos y Lógica": {
    temario: [
      { num: "1", name: "Conjuntos",                               horas: 25, subtemas: ["Noción de conjunto y pertenencia", "Operaciones: unión, intersección, diferencia, complemento", "Relaciones de orden: COPO, COTO, COBO, CODO. Lema de Zorn", "Relaciones de equivalencia y conjuntos cociente", "Funciones: inyectivas, suprayectivas, biyectivas", "Cardinalidad. Teorema de Cantor. Conjuntos numerables e innumerables", "Inducción y Recursión. Principio del Buen Orden"] },
      { num: "2", name: "Elementos de lógica",                     horas: 25, subtemas: ["Forma lógica de un enunciado. Simbolización", "Conectivos lógicos y sinonimia de conectivos", "Cuantificadores universal y existencial", "Criterios de verdad: conectivos, cuantificadores e igualdad", "Equivalencias lógicas elementales. Negación de cuantificadores", "Recíproca y contrapuesta de una implicación"] },
      { num: "3", name: "Análisis de argumentos y métodos de prueba", horas: 20, subtemas: ["Premisas, conclusión y validez de argumentos", "Pruebas directas: de condicionales y disyunciones", "Pruebas indirectas: por contraposición y reducción al absurdo", "Prueba de equivalencias múltiples. Pruebas por inducción"] },
      { num: "4", name: "Heurísticas",                              horas: 10, subtemas: ["Reducción de un problema a otro", "Representación de un área en otra", "Método progresivo-regresivo"] }
    ],
    bibBasicas: [
      { name: "Lipschutz, S. — Teoría de Conjuntos y Temas Afines. Schaum-McGraw-Hill.", caps: ["Conjuntos", "Relaciones", "Funciones", "Cardinalidad"] },
      { name: "Solow, D. — Cómo Entender y Hacer Demostraciones en Matemáticas. Limusa, 1987.", caps: ["Análisis de argumentos", "Métodos de prueba"] },
      { name: "Badesa, C.; Jané, I.; Jansana, R. — Elementos de Lógica Formal. Ariel, 1998.", caps: ["Elementos de lógica", "Análisis de argumentos"] },
      { name: "Zubieta, G. — Taller de Lógica Matemática. McGraw-Hill, 1993.", caps: ["Elementos de lógica", "Análisis de argumentos", "Heurísticas"] }
    ],
    bibComp: ["Amor, J.A. — Sobre un Curso de Análisis Lógico. Educación Matemática, 1994.", "Carroll, L. — El Juego de la Lógica y otros Escritos. Alianza, 2002.", "Polya, G. — Cómo Plantear y Resolver Problemas. Trillas, 1965."],
    subsecuentes: ["Lógica Matemática I", "Teoría de los Conjuntos I"]
  },
  "Diseño de Sistemas Digitales": {
    temario: [
      { num: "I",  name: "Lógica Digital",                                  horas: 17, subtemas: ["Elementos lógicos básicos y teoría de conmutación; minimización e implementación", "Propagación de retardos y peligros (hazards)", "Tecnologías; tipos de flipflops", "Dispositivos MSI: multiplexores, decodificadores, sumadores, registros, contadores, PLD", "Memorias: ROM, PROM, EPROM, EAROM, RAM", "Análisis y síntesis de circuitos síncronos y asíncronos"] },
      { num: "II", name: "Sistemas Digitales",                               horas:  9, subtemas: ["Notación para transferencia entre registros (condicional e incondicional)", "Máquinas algorítmicas de estados y redes de conducción", "Dispositivos de tres estados y estructuras de bus", "Iteración, divide y vencerás; descomposición y balances", "Diagramas de bloque, de tiempo y lenguaje de transferencia"] },
      { num: "III", name: "Organización y arquitectura de sistemas de memoria", horas: 18, subtemas: ["Sistemas de almacenamiento y su tecnología", "Codificación, compresión e integridad de la información", "Jerarquías de memoria y asignación de espacio", "Organización de memoria central, operación del bus", "Memoria caché y memoria virtual", "Sistemas con bus, control y DMA", "Manejo de fallas y confiabilidad"] },
      { num: "IV", name: "Interfases y comunicación",                         horas:  8, subtemas: ["Métodos de control de E/S e interrupciones", "Reconocimiento de la interrupción", "Sincronización: ciclo abierto y handshake", "Almacenamiento externo y manejadores"] },
      { num: "V",  name: "Arquitecturas alternas",                            horas:  8, subtemas: ["Comparación de arquitecturas: stack, vectoriales, multiprocesadores, hipercubo", "CISC y RISC", "Arquitecturas paralelas: VLIW, SISD, MISD, SIMD, MIMD", "Acoplamiento apretado"] }
    ],
    bibBasicas: [
      { name: "Mano, M.M. — Digital Design. 2ª ed. Prentice Hall, 1991.", caps: ["Lógica Digital", "Sistemas Digitales", "Organización de memoria", "Interfases", "Arquitecturas alternas"] }
    ],
    bibComp: ["Tanenbaum, A.S. — Structured Computer Organization. 3ª ed. Prentice Hall, 1990.", "Hall, D.V. — Microprocessors and Interfacing. McGraw-Hill, 1986.", "Sandige, R.S. — Modern Digital Design. McGraw-Hill, 1990.", "Spruth, W. — The Design of a Microprocessor. Springer-Verlag, 1989."],
    subsecuentes: []
  },
  "Electromagnetismo I": {
    temario: [
      { num:  "1", name: "Fuerzas entre cuerpos eléctricamente cargados en reposo", horas: 10, subtemas: ["Electrización. Aislantes y conductores", "Ley de Coulomb. Principio de superposición", "Campo eléctrico y líneas de campo", "Flujo eléctrico. Ley de Gauss", "Divergencia y forma diferencial de la Ley de Gauss"] },
      { num:  "2", name: "Energía de cuerpos eléctricamente cargados en reposo",    horas:  8, subtemas: ["Potencial electrostático. Superficies equipotenciales", "Gradiente del potencial y obtención del campo eléctrico", "Energía y densidad de energía electrostática", "Conductores cargados. Condensadores y capacitancia"] },
      { num:  "3", name: "Campos electrostáticos en medios dieléctricos",           horas:  8, subtemas: ["Momentos de una distribución de carga. Polarización", "Susceptibilidad eléctrica. Densidades de carga libre y de polarización", "Ley de Gauss en medios dieléctricos. Desplazamiento eléctrico", "Condensadores con dieléctricos. Densidad de energía en medios dieléctricos"] },
      { num:  "4", name: "Cargas en movimiento",                                    horas: 10, subtemas: ["Corriente eléctrica y densidad de corriente", "Ley de conservación de la carga. Resistencia. Ley de Ohm", "Efecto Joule. Leyes de Kirchhoff. Circuitos RC"] },
      { num:  "5", name: "Interacciones entre imanes, corrientes y cargas",         horas: 10, subtemas: ["Campo magnético. Ley de Gauss del magnetismo", "Fuerza de Lorentz. Torca sobre un momento magnético", "Ley de Biot-Savart. Ley de Ampère", "Rotacional y Teorema de Stokes. Forma diferencial de la Ley de Ampère", "Electroimanes"] },
      { num:  "6", name: "Campos magnetostáticos en medios materiales",             horas:  8, subtemas: ["Momentos magnéticos. Magnetización y susceptibilidad", "Ferromagnetismo, paramagnetismo y diamagnetismo", "Ley de Ampère en medios materiales. Permeabilidad", "Efecto Hall"] },
      { num:  "7", name: "Inducción electromagnética",                              horas: 10, subtemas: ["Ley de Lenz-Faraday-Henry y su forma diferencial", "Autoinductancia e inductancias mutuas. Densidad de energía magnética", "Circuitos RL, LC y RCL. Impedancia. Corriente alterna. Transformador"] },
      { num:  "8", name: "Ecuaciones de Maxwell",                                   horas:  6, subtemas: ["Corriente de desplazamiento. Ley de Ampère-Maxwell", "Propiedades dinámicas del campo electromagnético", "Ecuaciones de Maxwell. La ecuación de onda"] },
      { num:  "9", name: "Ondas electromagnéticas",                                 horas:  8, subtemas: ["Ondas en el vacío. Superposición. Velocidad y espectro", "Transversalidad y polarización", "Teorema de Poynting. Densidades de energía", "Ondas en medios dieléctricos. Índice de refracción. Sistemas radiantes"] },
      { num: "10", name: "Teoría de la Relatividad y Electrodinámica",              horas: 18, subtemas: ["Ecuaciones de Maxwell y transformaciones de Galileo", "Experimento de Michelson-Morley", "Postulados de la Relatividad Especial. Transformaciones de Lorentz", "Cinemática relativista: adición de velocidades, efecto Doppler", "Cuadrivectores y tensores. Tensor de Faraday", "Dinámica relativista. Campo de una carga en movimiento uniforme"] }
    ],
    bibBasicas: [
      { name: "Halliday, D.; Resnick, R.; Walker, J. — Fundamentos de Física Vol. II. 8ª ed. Grupo Editorial Patria, 2011.", caps: ["Fuerzas electrostáticas", "Potencial eléctrico", "Dieléctricos", "Circuitos", "Magnetismo", "Inducción", "Ondas EM"] },
      { name: "Lorrain, P.; Corson, D.R. — Electromagnetism: Principles and Applications. W.H. Freeman, 1990.", caps: ["Campo eléctrico", "Magnetostática", "Inducción", "Ecuaciones de Maxwell", "Ondas EM"] },
      { name: "Purcell, E.M. — Electricidad y Magnetismo. Berkeley Physics Vol. 2. Reverté, 2001.", caps: ["Electrostática", "Circuitos", "Magnetismo", "Ecuaciones de Maxwell"] },
      { name: "Resnick, R.; Halliday, D.; Krane, S.K. — Física Vol. II. 5ª ed. Cia. Editorial Continental, 1996.", caps: ["Electrostática", "Magnetismo", "Inducción", "Relatividad"] },
      { name: "Taylor, E.F.; Wheeler, J.A. — Space Time Physics. Freeman, 1966.", caps: ["Relatividad Especial", "Transformaciones de Lorentz", "Electrodinámica"] },
      { name: "Resnick, R. — Introducción a la Teoría Especial de la Relatividad. Limusa, 1977.", caps: ["Postulados de la Relatividad", "Cinemática relativista", "Dinámica relativista"] }
    ],
    bibComp: ["Serway, R.A.; Jewett, J.W. — Física II. 3ª ed. Thomson Learning, 2004.", "Serway, R.A. — Electricidad y Magnetismo. Thomson Learning, 2004.", "Alonso, M.; Finn, E.J. — Física Vol. II: Campos y ondas. Addison-Wesley Iberoamericana, 1995.", "Ohanian, H.C.; Markert, J.T. — Física para Ingeniería y Ciencias Vol. 2. 3ª ed. McGraw-Hill, 2009."],
    subsecuentes: ["Electromagnetismo II"]
  },
  "Fenómenos Colectivos": {
    temario: [
      { num: "1", name: "Introducción",                                               horas:  6, subtemas: ["Cuerpos deformables. Estados de agregación de la materia", "Métodos de descripción de sistemas macroscópicos", "Propiedades de las fronteras. Variables macroscópicas", "Concepto de estado de equilibrio"] },
      { num: "2", name: "Equilibrio termodinámico de sistemas compuestos",           horas: 12, subtemas: ["Ecuación de estado térmica. Concepto de temperatura", "Funciones de respuesta mecánica (dilatación, módulos elásticos, susceptibilidades)", "Termómetros"] },
      { num: "3", name: "Estática en sistemas macroscópicos",                        horas: 12, subtemas: ["Deformaciones. Principio de Pascal", "Principio de Arquímedes. Fenómenos interfaciales"] },
      { num: "4", name: "Cambios de un estado de equilibrio a otro (Procesos)",      horas: 14, subtemas: ["Conceptos de trabajo, calor y energía interna", "Primera Ley de la Termodinámica. Calores específicos"] },
      { num: "5", name: "Cambios naturales de un estado de equilibrio a otro",       horas: 14, subtemas: ["Segunda Ley de la Termodinámica. Escala absoluta de temperatura", "Reversibilidad e irreversibilidad. Concepto de entropía"] },
      { num: "6", name: "Mecanismos presentes en la ruta al equilibrio",             horas: 14, subtemas: ["Concepto de equilibrio local. Fenómenos de transporte", "Principios de conservación"] },
      { num: "7", name: "Oscilaciones en sistemas macroscópicos",                    horas: 12, subtemas: ["Ecuación de onda. Características de una onda", "Fenómenos ondulatorios. Interacción onda-sistema"] },
      { num: "8", name: "Descripción microscópica de un sistema macroscópico",       horas: 12, subtemas: ["Conceptos básicos de probabilidad y distribución estadística", "Distribución de velocidades de Maxwell-Boltzmann", "Presión y energía interna de una colección de partículas libres"] }
    ],
    bibBasicas: [
      { name: "Ingard, U.; Kraushaar, W.I. — Introducción al estudio de la mecánica, materia y ondas. Reverté, 1973.", caps: ["Introducción", "Estática", "Oscilaciones", "Descripción microscópica"] },
      { name: "Carmona, G. — Termodinámica Clásica. Fac. de Ciencias-UNAM, 2007.", caps: ["Equilibrio termodinámico", "Primera Ley", "Segunda Ley", "Fenómenos de transporte"] },
      { name: "Guyon, E.; Hullin, J.P.; Petit, L.; Mitescu, C.D. — Physical Hydrodynamics. Oxford University Press, 2001.", caps: ["Estática", "Fenómenos de transporte"] },
      { name: "Elmore, W.C.; Heald, M.A. — Physics of Waves. Dover, 1985.", caps: ["Oscilaciones en sistemas macroscópicos"] }
    ],
    bibComp: ["Walker, J. — The Flying Circus of Physics. John Wiley & Sons, 1974.", "García-Colín, S.L. — Introducción a la termodinámica clásica. Trillas, 2002.", "Homsy, G.M. et al. — Multimedia Fluid Mechanics. Cambridge University Press, 2007."],
    subsecuentes: []
  },
  "Álgebra Moderna II": {
    temario: [
      { num: "1", name: "Anillos",                   horas: 40, subtemas: ["Definición, ejemplos y clases especiales de anillos", "Subanillos, ideales y anillos cociente", "Homomorfismos de anillos", "El campo de cocientes de un anillo entero", "Anillos Euclidianos, principales y de factorización única (UFD)", "Anillos de polinomios"] },
      { num: "2", name: "Campos y Teoría de Galois", horas: 40, subtemas: ["Extensiones de campos. Grado de una extensión", "Construcciones con regla y compás", "Campos de descomposición y extensiones normales", "Extensiones separables", "Teorema fundamental de la Teoría de Galois", "Soluciones por radicales. Campos finitos"] }
    ],
    bibBasicas: [
      { name: "Fraleigh, J.B. — Álgebra Abstracta. Sistemas Técnicos de Edición, 1988.", caps: ["Anillos", "Campos y Teoría de Galois"] },
      { name: "Herstein, I.N. — Álgebra Moderna. Editorial Trillas, 1970.", caps: ["Anillos", "Campos y Teoría de Galois"] },
      { name: "Stewart, I. — Galois Theory. Chapman and Hall, 2004.", caps: ["Extensiones de campos", "Teorema fundamental de Galois", "Soluciones por radicales"] }
    ],
    bibComp: ["Artin, E. — Modern Higher Algebra Galois Theory. Courant Institute, 1947.", "MacLane, S.; Birkhoff, G. — Álgebra. AMS, 1999.", "Rotman, J.J. — A First Course in Abstract Algebra. Prentice Hall, 2000."],
    subsecuentes: ["Álgebra Moderna III", "Geometría Algebraica I"]
  },
  "Conjuntos Convexos": {
    temario: [
      { num: "1", name: "Propiedades elementales",         horas: 20, subtemas: ["Hiperplanos soporte", "Función soporte", "Teoremas de Separación", "Puntos extremos y Teorema de Krein-Milman"] },
      { num: "2", name: "Teorema de Helly",                horas: 15, subtemas: ["Teoremas de Radon, Helly y Carathéodory", "Aplicaciones"] },
      { num: "3", name: "Suma de Minkowski",               horas: 10, subtemas: [] },
      { num: "4", name: "Figuras de ancho constante",      horas: 20, subtemas: ["Definición y caracterizaciones", "Ejemplos", "Completez"] },
      { num: "5", name: "Volumen, superficie y curvatura media", horas: 15, subtemas: ["Teoremas de aproximación", "Simetrización de Steiner", "Problemas isoperimétricos"] }
    ],
    bibBasicas: [
      { name: "Benson, R. — Euclidean Geometry and Convexity. McGraw-Hill, 1966.", caps: ["Propiedades elementales", "Teorema de Helly", "Figuras de ancho constante", "Volumen y superficie"] },
      { name: "Hadwiger, H.; Debrunner, H. — Combinatorial Geometry in the Plane. Holt, Reinhart and Winston, 1964.", caps: ["Propiedades elementales", "Teorema de Helly", "Suma de Minkowski"] },
      { name: "Yaglom, I.; Boltianski, V. — Convex Figures. Holt, Reinhart and Winston, 1961.", caps: ["Propiedades elementales", "Figuras de ancho constante"] },
      { name: "Kazarinoff, N. — Geometric Inequalities. MAA, New Math. Library Vol. 4, 1961.", caps: ["Teorema de Helly", "Volumen, superficie y curvatura media"] },
      { name: "Hadwiger, H. — Lo Antiguo y lo Nuevo acerca de los Conjuntos Convexos. SMM, Textos 10, UNAM, 1998.", caps: ["Propiedades elementales", "Figuras de ancho constante", "Suma de Minkowski"] }
    ],
    bibComp: ["Montejano, L. — Cuerpos de Ancho Constante. UNAM-FCE, 1998."],
    subsecuentes: []
  },
  "Probabilidad I": {
    temario: [
      { num: "1", name: "Espacio de Probabilidad",                   horas: 15, subtemas: ["Espacio muestral, eventos e interpretaciones (frecuentista, clásica, geométrica)", "Definición axiomática de probabilidad. Propiedades", "Probabilidad condicional e independencia", "Fórmulas de probabilidad total y de Bayes", "Teorema de continuidad. Simulación de ejemplos elementales"] },
      { num: "2", name: "Variables Aleatorias y Funciones de Distribución", horas: 30, subtemas: ["Definición de variable aleatoria. Función de distribución y propiedades", "V.A. discretas: Bernoulli, Binomial, Poisson, Uniforme, Geométrica, Binomial negativa, Hipergeométrica", "V.A. continuas: Uniforme, Normal, Exponencial, Gamma, Cauchy, Beta, Weibull, Pareto, Fréchet, Gumbel, Logística, Gaussiana inversa", "Función de distribución de funciones de variables aleatorias", "Simulación de variables aleatorias"] },
      { num: "3", name: "Momentos de Variables Aleatorias",           horas: 30, subtemas: ["Esperanza, varianza y propiedades. La esperanza minimiza la distancia cuadrática", "Momentos de variables aleatorias. Esperanza de funciones", "Desigualdades: Tchebyshev, Jensen, Markov, Chernoff", "Función generadora de momentos y función generadora de momentos factoriales"] },
      { num: "4", name: "Teoremas límite para variables aleatorias discretas", horas: 5, subtemas: ["Aproximación Poisson a la Binomial", "Vectores aleatorios: densidades conjunta, marginal y condicional", "Sumas de variables aleatorias independientes", "Leyes de los Grandes Números y Teorema de Límite Central (enunciado)", "Demostración de la ley débil. Teorema de De Moivre-Laplace"] }
    ],
    bibBasicas: [
      { name: "Feller, W. — An Introduction to Probability Theory and its Applications, Vol. I. Wiley, 1968.", caps: ["Espacio de Probabilidad", "Variables Aleatorias", "Momentos", "Teoremas límite"] },
      { name: "Gnedenko, B.V. — The Theory of Probability. Chelsea, 1975.", caps: ["Espacio de Probabilidad", "Variables Aleatorias", "Momentos"] },
      { name: "Hoel, P.G.; Port, S.C.; Stone, C.J. — Introduction to Probability Theory. Houghton Mifflin, 1971.", caps: ["Espacio de Probabilidad", "Variables Aleatorias", "Momentos", "Teoremas límite"] },
      { name: "Ross, S. — A First Course in Probability Theory. 5ª ed. Prentice Hall, 1997.", caps: ["Espacio de Probabilidad", "Variables Aleatorias", "Momentos", "Teoremas límite"] },
      { name: "Stirzaker, D.R. — Elementary Probability. 2ª ed. Cambridge University Press, 2003.", caps: ["Espacio de Probabilidad", "Variables Aleatorias", "Momentos"] }
    ],
    bibComp: ["Mood, A.M.; Graybill, F.A.; Boes, D.C. — Introduction to the Theory of Statistics. 3ª ed. McGraw-Hill, 1974.", "Casella, G.; Berger, R.L. — Statistical Inference. Thomson Learning, 2002.", "Chung, K.L. — A Course in Probability Theory. 2ª ed. Academic Press, 2001.", "Rincón, L. — Curso Intermedio de Probabilidad. FC-UNAM, 2007."],
    subsecuentes: ["Probabilidad II", "Estadística I", "Procesos Estocásticos I"]
  },
  "Teoría de los Números I": {
    temario: [
      { num: "1", name: "Divisibilidad",                        horas: 25, subtemas: ["Principio de inducción matemática. Algoritmo de la división", "Números primos y compuestos. Máximo común divisor", "Ecuaciones diofantinas lineales. Teorema fundamental de la aritmética", "Suma y número de divisores. Números perfectos, de Mersenne, de Fermat", "Función φ de Euler. Función ω. Fórmula de inversión de Möbius"] },
      { num: "2", name: "Teoría de congruencias",               horas: 25, subtemas: ["Propiedades básicas. Sistemas completos y reducidos de residuos", "Teoremas de Euler, Fermat y Wilson", "Congruencias lineales. Ecuaciones diofantinas", "Teorema Chino del Residuo. Sistemas de congruencias lineales", "Congruencias cuadráticas"] },
      { num: "3", name: "Aplicaciones de la teoría de congruencias", horas: 10, subtemas: ["Criptografía. Algoritmos de cómputo"] },
      { num: "4", name: "Reciprocidad cuadrática",              horas: 20, subtemas: ["Residuos cuadráticos. Reciprocidad cuadrática", "Los símbolos de Jacobi y de Legendre", "Método de descenso infinito. Suma de cuadrados", "Ternas pitagóricas. Teorema de Fermat", "Curvas elípticas"] }
    ],
    bibBasicas: [
      { name: "Andrews, G. — Number Theory. Dover, 2000.", caps: ["Divisibilidad", "Congruencias", "Reciprocidad cuadrática"] },
      { name: "Jones, G.; Jones, M. — Elementary Number Theory. Springer-Verlag, 2001.", caps: ["Divisibilidad", "Congruencias", "Reciprocidad cuadrática"] },
      { name: "Koshy, T. — Elementary Number Theory with Applications. Harcourt/Academic Press, 2002.", caps: ["Divisibilidad", "Congruencias", "Aplicaciones", "Reciprocidad cuadrática"] },
      { name: "Niven, I.; Zuckerman, H.; Montgomery, H. — An Introduction to the Theory of Numbers. J. Wiley, 1991.", caps: ["Divisibilidad", "Congruencias", "Reciprocidad cuadrática"] },
      { name: "Vinogradov, I. — Fundamentos de la Teoría de los Números. MIR, 1977.", caps: ["Divisibilidad", "Congruencias", "Reciprocidad cuadrática"] }
    ],
    bibComp: ["Goldman, J. — The Queen of Mathematics. A.K. Peters, 1998.", "Nathanson, M. — Elementary Methods in Number Theory. Springer-Verlag, 2000.", "Dickson, L. — History of the Theory of Numbers. AMS Chelsea, 1999.", "Hardy, G.; Wright, E. — An Introduction to the Theory of Numbers. Clarendon Press, 1979.", "Koblitz, N. — A Course in Number Theory and Cryptography. Springer-Verlag, 1994."],
    subsecuentes: ["Teoría de los Números II"]
  },
  "Teoría de los Números II": {
    temario: [
      { num: "1", name: "Polinomios en n variables con coeficientes en Z_p", horas:  6, subtemas: ["Congruencia y equivalencia de polinomios", "Número de soluciones en Z_p de un polinomio en n variables", "Formas cuadráticas módulo un primo"] },
      { num: "2", name: "Números p-ádicos",                                  horas: 20, subtemas: ["Enteros p-ádicos. El dominio de los enteros p-ádicos", "El campo de cocientes (números p-ádicos)", "Convergencia en el campo de los números p-ádicos"] },
      { num: "3", name: "Caracterización axiomática de los números p-ádicos", horas: 18, subtemas: ["Campos métricos", "Métricas del campo de los números racionales"] },
      { num: "4", name: "Congruencias y enteros p-ádicos",                   horas:  8, subtemas: ["Congruencias y ecuaciones en el anillo de los enteros p-ádicos", "Solubilidad de algunas congruencias"] },
      { num: "5", name: "Formas cuadráticas con coeficientes p-ádicos",      horas: 10, subtemas: ["Cuadrados en el campo de los números p-ádicos", "Representación de cero por formas cuadráticas p-ádicas"] },
      { num: "6", name: "Teorema de Hasse-Minkowski",                        horas: 10, subtemas: [] },
      { num: "7", name: "Introducción a la Teoría de las Valuaciones",       horas:  8, subtemas: [] }
    ],
    bibBasicas: [
      { name: "Bachman, G. — Introduction to p-adic Numbers and Valuation Theory. Academic Press, 1964.", caps: ["Números p-ádicos", "Caracterización axiomática", "Congruencias y enteros p-ádicos", "Teoría de las Valuaciones"] },
      { name: "Borevich, Z.I.; Shafarevich, I.R. — Number Theory. Academic Press, 1966.", caps: ["Polinomios en Z_p", "Números p-ádicos", "Formas cuadráticas p-ádicas", "Hasse-Minkowski"] }
    ],
    bibComp: ["Niven, I.; Zuckerman, H. — Introducción a la Teoría de los Números. Limusa, 1969.", "Robert, A. — A Course in p-adic Analysis. Springer, 2000.", "Weiss, E. — Algebraic Number Theory. Dover, 1998."],
    subsecuentes: []
  },
  "Probabilidad II": {
    temario: [
      { num: "1", name: "Funciones características", horas: 16, subtemas: ["Función característica de una variable aleatoria", "Propiedades básicas", "Inversión y unicidad", "Función característica de la distribución normal"] },
      { num: "2", name: "Convergencia de variables aleatorias", horas: 18, subtemas: ["Convergencia casi segura", "Convergencia en probabilidad", "Convergencia en media cuadrática", "Convergencia en distribución", "Relaciones entre tipos de convergencia"] },
      { num: "3", name: "Leyes de los grandes números", horas: 14, subtemas: ["Ley débil de los grandes números", "Ley fuerte de los grandes números", "Aplicaciones y ejemplos"] },
      { num: "4", name: "Teorema central del límite", horas: 16, subtemas: ["Teorema central del límite clásico", "Versiones con varianzas distintas (Lindeberg-Feller)", "Aplicaciones estadísticas"] },
      { num: "5", name: "Martingalas", horas: 16, subtemas: ["Definición de martingala en tiempo discreto", "Ejemplos: paseo aleatorio, ruina del jugador", "Teorema de parada opcional", "Convergencia de martingalas"] }
    ],
    bibBasicas: [
      { name: "Billingsley, P. — Probability and Measure. Wiley, 1995.", caps: ["Funciones características", "Convergencia de variables aleatorias", "Leyes de los grandes números", "Teorema central del límite", "Martingalas"] },
      { name: "Durrett, R. — Probability: Theory and Examples. Cambridge University Press, 2010.", caps: ["Funciones características", "Convergencia", "Leyes límite", "Martingalas"] }
    ],
    bibComp: ["Chung, K.L. — A Course in Probability Theory. Academic Press, 2001.", "Williams, D. — Probability with Martingales. Cambridge University Press, 1991."],
    subsecuentes: ["Procesos Estocásticos I", "Procesos Estocásticos II", "Estadística II"]
  },
  "Estadística I": {
    temario: [
      { num: "1", name: "Introducción a la estadística", horas: 10, subtemas: ["Estadística descriptiva y estadística inferencial", "Población y muestra", "Tipos de datos y escalas de medición", "Medidas de tendencia central y dispersión"] },
      { num: "2", name: "Distribuciones muestrales", horas: 16, subtemas: ["Distribución de la media muestral", "Distribución chi-cuadrada", "Distribución t de Student", "Distribución F de Fisher-Snedecor"] },
      { num: "3", name: "Estimación puntual", horas: 18, subtemas: ["Estimadores y sus propiedades: insesgamiento, eficiencia, consistencia", "Método de momentos", "Máxima verosimilitud", "Información de Fisher y cota de Cramér-Rao"] },
      { num: "4", name: "Estimación por intervalos", horas: 16, subtemas: ["Intervalos de confianza para la media con varianza conocida y desconocida", "Intervalos de confianza para la varianza", "Intervalos de confianza para proporciones", "Determinación del tamaño de muestra"] },
      { num: "5", name: "Pruebas de hipótesis", horas: 20, subtemas: ["Hipótesis nula y alternativa. Errores tipo I y II", "Pruebas para medias: una y dos muestras", "Pruebas para varianzas", "Prueba chi-cuadrada de bondad de ajuste", "Valor p"] }
    ],
    bibBasicas: [
      { name: "Hogg, R.V.; McKean, J.W.; Craig, A.T. — Introduction to Mathematical Statistics. Pearson, 2013.", caps: ["Distribuciones muestrales", "Estimación puntual", "Estimación por intervalos", "Pruebas de hipótesis"] },
      { name: "Casella, G.; Berger, R.L. — Statistical Inference. Duxbury, 2002.", caps: ["Estimación puntual", "Estimación por intervalos", "Pruebas de hipótesis"] }
    ],
    bibComp: ["Wackerly, D.; Mendenhall, W.; Scheaffer, R. — Mathematical Statistics with Applications. Cengage, 2008.", "DeGroot, M.H.; Schervish, M.J. — Probability and Statistics. Addison-Wesley, 2012."],
    subsecuentes: ["Estadística II", "Estadística Bayesiana", "Análisis de Regresión", "Muestreo"]
  },
  "Topología I": {
    temario: [
      { num: "1", name: "Espacios topológicos", horas: 18, subtemas: ["Definición de topología y espacio topológico", "Ejemplos: topología discreta, indiscreta, usual en R^n", "Conjuntos abiertos, cerrados, frontera, interior, clausura", "Bases y subbases de una topología"] },
      { num: "2", name: "Continuidad y homeomorfismos", horas: 16, subtemas: ["Funciones continuas entre espacios topológicos", "Caracterizaciones de continuidad", "Homeomorfismos e invariantes topológicos", "Propiedades topológicas"] },
      { num: "3", name: "Conectividad", horas: 14, subtemas: ["Conjuntos conexos y espacios conexos", "Componentes conexas", "Conexividad por caminos", "Relación entre conexividad y conexividad por caminos"] },
      { num: "4", name: "Compacidad", horas: 16, subtemas: ["Cubrimientos y subrecubrimientos", "Espacios compactos. Teorema de Heine-Borel", "Compacidad secuencial", "Compacidad y funciones continuas"] },
      { num: "5", name: "Axiomas de separación", horas: 16, subtemas: ["Espacios T0, T1, T2 (Hausdorff), T3, T4", "Espacios normales y lema de Urysohn", "Teorema de metrización de Urysohn"] }
    ],
    bibBasicas: [
      { name: "Munkres, J.R. — Topology. Prentice Hall, 2000.", caps: ["Espacios topológicos", "Continuidad y homeomorfismos", "Conectividad", "Compacidad", "Axiomas de separación"] },
      { name: "Willard, S. — General Topology. Dover, 2004.", caps: ["Espacios topológicos", "Continuidad", "Conexividad", "Compacidad"] }
    ],
    bibComp: ["Dugundji, J. — Topology. Allyn and Bacon, 1966.", "Kelley, J.L. — General Topology. Springer, 1975."],
    subsecuentes: ["Topología II", "Topología Diferencial I", "Geometría Algebraica I"]
  },
  "Lógica Matemática I": {
    temario: [
      { num: "1", name: "Lógica proposicional", horas: 16, subtemas: ["Proposiciones, conectivos lógicos y tablas de verdad", "Fórmulas bien formadas", "Tautologías, contradicciones y contingencias", "Formas normales conjuntiva y disyuntiva", "Sistemas de deducción: cálculo de secuentes"] },
      { num: "2", name: "Lógica de predicados", horas: 20, subtemas: ["Términos, fórmulas y cuantificadores", "Interpretaciones y satisfacibilidad", "Validez y consecuencia lógica", "Equivalencias lógicas con cuantificadores"] },
      { num: "3", name: "Sistemas formales de primer orden", horas: 18, subtemas: ["Axiomas y reglas de inferencia", "Pruebas formales y derivabilidad", "Consistencia e independencia", "Teorema de completud de Gödel"] },
      { num: "4", name: "Teoremas de incompletud de Gödel", horas: 16, subtemas: ["Aritmética de Peano", "Enumerabilidad de pruebas", "Primer teorema de incompletud", "Segundo teorema de incompletud"] }
    ],
    bibBasicas: [
      { name: "Enderton, H.B. — A Mathematical Introduction to Logic. Academic Press, 2001.", caps: ["Lógica proposicional", "Lógica de predicados", "Sistemas formales", "Incompletud de Gödel"] },
      { name: "Mendelson, E. — Introduction to Mathematical Logic. CRC Press, 2015.", caps: ["Cálculo proposicional", "Lógica de primer orden", "Completud", "Teoremas de Gödel"] }
    ],
    bibComp: ["Boolos, G.; Burgess, J.; Jeffrey, R. — Computability and Logic. Cambridge University Press, 2007.", "Shoenfield, J.R. — Mathematical Logic. AK Peters, 2001."],
    subsecuentes: ["Lógica Matemática II", "Lógica Matemática III", "Teoría de los Conjuntos I", "Introducción a las Funciones Recursivas y Computabilidad"]
  },
  "Teoría de las Gráficas I": {
    temario: [
      { num: "1", name: "Conceptos básicos", horas: 14, subtemas: ["Definición de gráfica, vértices y aristas", "Gráficas dirigidas y no dirigidas", "Grado de un vértice. Lema del apretón de manos", "Subgráficas, gráficas complemento, isomorfismo"] },
      { num: "2", name: "Conectividad y caminos", horas: 16, subtemas: ["Trayectorias, caminos y ciclos", "Gráficas conexas y componentes conexas", "Conectividad de vértices y aristas", "Algoritmos de búsqueda: BFS y DFS"] },
      { num: "3", name: "Árboles", horas: 14, subtemas: ["Definición y propiedades de árboles", "Árboles generadores", "Algoritmo de Kruskal y Prim para árbol generador mínimo", "Árboles con raíz y ordenaciones"] },
      { num: "4", name: "Gráficas planares y coloraciones", horas: 16, subtemas: ["Gráficas planares y fórmula de Euler", "Teorema de Kuratowski", "Coloración de vértices. Número cromático", "Teorema de los cuatro colores (enunciado)"] },
      { num: "5", name: "Flujos y emparejamientos", horas: 16, subtemas: ["Redes de transporte y flujos máximos", "Teorema de Ford-Fulkerson", "Emparejamientos y teorema de König", "Aplicaciones combinatorias"] }
    ],
    bibBasicas: [
      { name: "Diestel, R. — Graph Theory. Springer, 2017.", caps: ["Conceptos básicos", "Conectividad", "Árboles", "Planaridad", "Coloraciones"] },
      { name: "West, D.B. — Introduction to Graph Theory. Prentice Hall, 2001.", caps: ["Fundamentos", "Árboles y conectividad", "Emparejamientos", "Planaridad", "Coloraciones"] }
    ],
    bibComp: ["Bondy, J.A.; Murty, U.S.R. — Graph Theory. Springer, 2008.", "Chartrand, G.; Zhang, P. — A First Course in Graph Theory. Dover, 2012."],
    subsecuentes: ["Teoría de las Gráficas II", "Investigación de Operaciones", "Teoría de Redes"]
  },
  "Geometría Diferencial I": {
    temario: [
      { num: "1", name: "Curvas en el plano y en el espacio", horas: 16, subtemas: ["Curvas parametrizadas y regulares", "Longitud de arco y reparametrización", "Curvatura y torsión", "Triedro de Frenet-Serret", "Teorema fundamental de la teoría de curvas"] },
      { num: "2", name: "Superficies regulares", horas: 18, subtemas: ["Definición de superficie regular", "Cambios de parámetros", "Plano tangente y normal", "Primera forma fundamental", "Ejemplos: esfera, toro, cilindro"] },
      { num: "3", name: "La aplicación de Gauss", horas: 16, subtemas: ["Curvatura normal y curvatura de Gauss", "Segunda forma fundamental", "Curvaturas principales, media y gaussiana", "Aplicación de Gauss y sus propiedades"] },
      { num: "4", name: "Geometría intrínseca de superficies", horas: 16, subtemas: ["Símbolos de Christoffel", "Ecuaciones de Gauss y Codazzi-Mainardi", "Teorema Egregium de Gauss", "Geodésicas en superficies"] },
      { num: "5", name: "Teorema de Gauss-Bonnet", horas: 14, subtemas: ["Curvatura geodésica", "Teorema de Gauss-Bonnet local y global", "Característica de Euler-Poincaré", "Aplicaciones topológicas"] }
    ],
    bibBasicas: [
      { name: "do Carmo, M. — Differential Geometry of Curves and Surfaces. Prentice Hall, 1976.", caps: ["Curvas", "Superficies regulares", "Aplicación de Gauss", "Geometría intrínseca", "Gauss-Bonnet"] },
      { name: "Pressley, A. — Elementary Differential Geometry. Springer, 2010.", caps: ["Curvas en el plano y espacio", "Superficies", "Curvatura", "Geodésicas"] }
    ],
    bibComp: ["Spivak, M. — A Comprehensive Introduction to Differential Geometry, Vol. I-II. Publish or Perish, 1999.", "Kühnel, W. — Differential Geometry: Curves — Surfaces — Manifolds. AMS, 2006."],
    subsecuentes: ["Geometría Diferencial II", "Geometría Diferencial III", "Geometría Riemanniana I"]
  },
  "Análisis Numérico": {
    temario: [
      { num: "1", name: "Aritmética de punto flotante y errores", horas: 12, subtemas: ["Representación de números en punto flotante", "Errores de redondeo, truncamiento y propagación", "Estabilidad numérica y condicionamiento"] },
      { num: "2", name: "Solución de ecuaciones no lineales", horas: 14, subtemas: ["Método de bisección", "Método de Newton-Raphson", "Método de la secante", "Convergencia y orden de convergencia"] },
      { num: "3", name: "Interpolación y aproximación", horas: 16, subtemas: ["Interpolación polinomial de Lagrange y Newton", "Diferencias divididas", "Splines cúbicos", "Mínimos cuadrados discretos"] },
      { num: "4", name: "Integración y diferenciación numéricas", horas: 14, subtemas: ["Regla del trapecio y de Simpson", "Cuadratura gaussiana", "Diferenciación numérica y error de truncamiento"] },
      { num: "5", name: "Solución numérica de sistemas lineales", horas: 16, subtemas: ["Eliminación gaussiana con pivoteo", "Factorizaciones LU, Cholesky", "Métodos iterativos: Jacobi, Gauss-Seidel", "Normas matriciales y condicionamiento"] },
      { num: "6", name: "Solución numérica de ecuaciones diferenciales ordinarias", horas: 8, subtemas: ["Método de Euler explícito e implícito", "Métodos de Runge-Kutta", "Análisis de estabilidad"] }
    ],
    bibBasicas: [
      { name: "Burden, R.L.; Faires, J.D. — Numerical Analysis. Cengage, 2011.", caps: ["Aritmética y errores", "Ecuaciones no lineales", "Interpolación", "Integración numérica", "Sistemas lineales", "EDOs"] },
      { name: "Kincaid, D.; Cheney, W. — Numerical Analysis. AMS, 2002.", caps: ["Errores", "Ecuaciones no lineales", "Aproximación", "Cuadratura", "Álgebra lineal numérica"] }
    ],
    bibComp: ["Stoer, J.; Bulirsch, R. — Introduction to Numerical Analysis. Springer, 2002.", "Trefethen, L.N.; Bau, D. — Numerical Linear Algebra. SIAM, 1997."],
    subsecuentes: ["Temas Selectos de Análisis Numérico", "Física Computacional", "Simulación y Control"]
  },
  "Ecuaciones Diferenciales II": {
    temario: [
      { num: "1", name: "Sistemas de ecuaciones diferenciales lineales", horas: 18, subtemas: ["Sistemas lineales con coeficientes constantes", "Método matricial: exponencial de una matriz", "Valores y vectores propios. Clasificación de equilibrios", "Sistemas no homogéneos"] },
      { num: "2", name: "Estabilidad de sistemas autónomos", horas: 16, subtemas: ["Puntos de equilibrio y linealización", "Teorema de Hartman-Grobman", "Ciclos límite y teorema de Poincaré-Bendixson", "Función de Lyapunov"] },
      { num: "3", name: "Series de potencias y puntos singulares", horas: 14, subtemas: ["Soluciones en series de potencias alrededor de puntos ordinarios", "Puntos singulares regulares e irregulares", "Método de Frobenius"] },
      { num: "4", name: "Problemas de Sturm-Liouville", horas: 14, subtemas: ["Planteamiento del problema de Sturm-Liouville", "Propiedades de los valores y funciones propias", "Expansiones en series de funciones propias", "Ecuaciones de Bessel y Legendre"] },
      { num: "5", name: "Introducción a las ecuaciones diferenciales parciales", horas: 18, subtemas: ["Ecuación de onda unidimensional", "Ecuación de calor", "Ecuación de Laplace", "Separación de variables"] }
    ],
    bibBasicas: [
      { name: "Chicone, C. — Ordinary Differential Equations with Applications. Springer, 2006.", caps: ["Sistemas lineales", "Estabilidad", "Series de potencias", "Sturm-Liouville"] },
      { name: "Birkhoff, G.; Rota, G.C. — Ordinary Differential Equations. Wiley, 1989.", caps: ["Sistemas lineales", "Ecuaciones de orden superior", "Sturm-Liouville", "Estabilidad"] }
    ],
    bibComp: ["Hirsch, M.W.; Smale, S.; Devaney, R.L. — Differential Equations, Dynamical Systems, and an Introduction to Chaos. Academic Press, 2013.", "Coddington, E.A.; Levinson, N. — Theory of Ordinary Differential Equations. McGraw-Hill, 1955."],
    subsecuentes: ["Ecuaciones Diferenciales III", "Ecuaciones Diferenciales Parciales I", "Mecánica Analítica"]
  },
  "Matemáticas Discretas": {
    temario: [
      { num: "1", name: "Lógica y demostraciones", horas: 12, subtemas: ["Proposiciones y conectivos", "Inferencia y demostraciones directas e indirectas", "Inducción matemática fuerte y débil"] },
      { num: "2", name: "Teoría de conjuntos", horas: 10, subtemas: ["Operaciones con conjuntos", "Relaciones de equivalencia y de orden", "Funciones: inyectivas, sobreyectivas, biyectivas", "Cardinalidad e infinitud"] },
      { num: "3", name: "Combinatoria", horas: 16, subtemas: ["Principios de adición y multiplicación", "Permutaciones y combinaciones", "Principio de inclusión-exclusión", "Coeficientes binomiales y teorema binomial"] },
      { num: "4", name: "Relaciones de recurrencia", horas: 12, subtemas: ["Definición y ejemplos", "Solución de relaciones de recurrencia lineales con coeficientes constantes", "Función generatriz"] },
      { num: "5", name: "Teoría de gráficas elemental", horas: 14, subtemas: ["Definiciones básicas: gráficas, grado, subgráficas", "Caminos, ciclos y conexidad", "Árboles: propiedades y árboles generadores", "Circuitos de Euler y Hamiltoniano"] },
      { num: "6", name: "Aritmética modular", horas: 12, subtemas: ["Divisibilidad y algoritmo de Euclides", "Congruencias y clases residuales", "Teorema chino del residuo", "Aplicaciones en criptografía"] }
    ],
    bibBasicas: [
      { name: "Rosen, K.H. — Discrete Mathematics and Its Applications. McGraw-Hill, 2012.", caps: ["Lógica", "Conjuntos", "Combinatoria", "Recurrencias", "Gráficas", "Aritmética modular"] },
      { name: "Grimaldi, R.P. — Discrete and Combinatorial Mathematics. Pearson, 2004.", caps: ["Conjuntos y lógica", "Combinatoria", "Relaciones de recurrencia", "Gráficas"] }
    ],
    bibComp: ["Graham, R.L.; Knuth, D.E.; Patashnik, O. — Concrete Mathematics. Addison-Wesley, 1994.", "Lovász, L.; Pelikán, J.; Vesztergombi, K. — Discrete Mathematics: Elementary and Beyond. Springer, 2003."],
    subsecuentes: ["Teoría de las Gráficas I", "Análisis de Algoritmos I", "Teoría de la Computación", "Combinatoria"]
  }
};

// ==================== PLAN DE ESTUDIOS ====================
const TOTAL_CREDITOS = 352;

const CURRICULUM = [
  {
    semestre: 1,
    titulo: "Primer Semestre",
    optativas: 0,
    materias: [
      {
        id: "algebra_superior_1",
        name: "Álgebra Superior I",
        clave: "0007",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d1.jpg",
        temario: [
          { num: "1", name: "Conjuntos", horas: 12, subtemas: [
            "Noción intuitiva e igualdad de conjuntos. Subconjuntos. Conjunto vacío, Conjunto Universal.",
            "Operaciones con conjuntos: unión, intersección, complemento y diferencia.",
            "Conjunto potencia. Producto cartesiano. Familias de conjuntos."
          ]},
          { num: "2", name: "Relaciones y funciones", horas: 19, subtemas: [
            "Relaciones (dominio, codominio e imagen).",
            "Funciones (imágenes e imágenes inversas).",
            "Composición de funciones. Función inversa.",
            "Funciones inyectivas, suprayectivas y biyectivas.",
            "Cardinalidad. Conjuntos finitos e infinitos. Funciones entre conjuntos finitos.",
            "Relaciones de equivalencia y particiones."
          ]},
          { num: "3", name: "Números naturales y cálculo combinatorio", horas: 12, subtemas: [
            "Los números naturales. Principio de inducción.",
            "Cálculo combinatorio: ordenaciones con repetición, ordenaciones, permutaciones y combinaciones.",
            "Teorema del binomio. Relaciones entre coeficientes binomiales."
          ]},
          { num: "4", name: "Espacios vectoriales", horas: 12, subtemas: [
            "Los espacios ℝ² y ℝ³. Interpretación geométrica.",
            "El espacio vectorial ℝⁿ.",
            "Subespacios. Combinaciones lineales. Subespacio generado por un conjunto de vectores.",
            "Dependencia e independencia lineal.",
            "Bases. Dimensión."
          ]},
          { num: "5", name: "Matrices y determinantes", horas: 13, subtemas: [
            "Matrices, definición y operaciones. Transpuesta de una matriz.",
            "Operaciones elementales: Matrices escalón reducidas. Rango de una matriz.",
            "El determinante de una matriz cuadrada: definición y propiedades.",
            "Cálculo de determinantes.",
            "Caracterización del rango de una matriz por medio del determinante."
          ]},
          { num: "6", name: "Sistemas de ecuaciones lineales", horas: 12, subtemas: [
            "Sistemas, soluciones, matriz y matriz aumentada.",
            "Criterios de existencia de soluciones.",
            "Regla de Cramer.",
            "Espacio de soluciones de un sistema no homogéneo.",
            "Resolución de sistemas (eliminación)."
          ]}
        ],
        bibBasicas: [
          { name: "Cárdenas, H.; Lluis, E.; Raggi, F.; Tomás, F. — Álgebra Superior. Trillas, 1974.", caps: ["Conjuntos", "Relaciones y funciones", "Números naturales", "Espacios vectoriales", "Matrices y determinantes", "Sistemas de ecuaciones lineales"] },
          { name: "Nachbin, L. — Álgebra Elemental. OEA, 1986.", caps: ["Conjuntos y relaciones", "Funciones", "Álgebra lineal elemental"] }
        ],
        bibComp: [
          "Dodge, C.W. — Logic and Numbers. Weber & Schmidt, 1969.",
          "Friedberg, S.H.; Insel, A.J.; Spence, L.E. — Álgebra Lineal. Publicaciones Cultural, 1986.",
          "Gentile, E.R. — Aritmética Elemental. OEA, 1985.",
          "Grimaldi, R.P. — Matemáticas Discreta y Combinatoria. STE, 1998.",
          "Grossman, S.I. — Álgebra Lineal. McGraw-Hill, 1996.",
          "Halmos, P.R. — Teoría Intuitiva de los Conjuntos. Ed. Continental, 1973.",
          "Hoffman, K.; Kunze, R. — Álgebra Lineal. Prentice Hall, 1973.",
          "Lang, S. — Álgebra Lineal. STE, 1986.",
          "Niven, I.M.; Zuckerman, H.S. — Introducción a la Teoría de los Números. Limusa-Wiley, 1969."
        ],
        subsecuentes: ["Álgebra Superior II", "Cálculo Diferencial e Integral III", "Taller de Modelación I"]
      },
      {
        id: "calculo_1",
        name: "Cálculo Diferencial e Integral I",
        clave: "0091",
        creditos: 18,
        horas: 144,
        icon: "assets/images/d2.jpg",
        temario: [
          { num: "1", name: "Introducción", horas: 6, subtemas: [
            "Los problemas que fundamentan al cálculo.",
            "Ejemplos."
          ]},
          { num: "2", name: "Números reales", horas: 15, subtemas: [
            "Propiedades de los números enteros, racionales y reales y sus operaciones, desigualdades y valor absoluto.",
            "La propiedad de compleción de los números reales, expansiones decimales."
          ]},
          { num: "3", name: "Funciones y sucesiones", horas: 30, subtemas: [
            "Definición, ejemplos, gráficas y propiedades elementales de las funciones (polinomiales, racionales, trigonométricas, exponenciales, pares e impares, inyectivas y suprayectivas, periódicas, monótonas, acotadas).",
            "Sucesiones de números reales, sucesiones de Cauchy.",
            "Suma, producto y cociente de funciones y sucesiones.",
            "Composición de funciones. Funciones inversas."
          ]},
          { num: "4", name: "Límite", horas: 30, subtemas: [
            "Definición y ejemplos de sucesiones convergentes.",
            "Criterios elementales para la convergencia de sucesiones.",
            "Límite de funciones.",
            "Definición, ejemplos y propiedades básicas del límite de una función.",
            "Límite de la suma, el producto y el cociente de funciones.",
            "Límites que involucran al infinito, asíntotas de curvas."
          ]},
          { num: "5", name: "Continuidad", horas: 22, subtemas: [
            "Definición y propiedades de las funciones continuas en un punto.",
            "La continuidad y la composición.",
            "Funciones continuas en intervalos cerrados.",
            "Propiedades de las funciones continuas en intervalos cerrados: máximos, mínimos y teorema de valor intermedio."
          ]},
          { num: "6", name: "Funciones derivables", horas: 41, subtemas: [
            "Razón de cambio y razón instantánea de cambio y velocidad.",
            "Tangentes de curvas.",
            "Definición y ejemplos del concepto de derivada.",
            "Relación entre la continuidad y la derivabilidad de una función.",
            "Suma, producto y cociente de funciones derivables.",
            "La regla de la cadena.",
            "Método de Newton y raíces de funciones. Derivada de la función inversa.",
            "Derivación implícita.",
            "Derivadas de orden superior.",
            "El Teorema del Valor Medio.",
            "Puntos críticos. Localización de máximos y mínimos relativos, concavidad y puntos de inflexión.",
            "Problemas de optimización.",
            "Polinomios de Taylor y forma de Lagrange del residuo.",
            "El Teorema del Valor Medio Generalizado y la Regla de L'Hôpital."
          ]}
        ],
        bibBasicas: [
          { name: "Arizmendi, H.; Carrillo, H.; Lara, M. — Cálculo. Primer Curso. Addison Wesley, 1987.", caps: ["Introducción", "Números reales", "Funciones y sucesiones", "Límite", "Continuidad", "Funciones derivables"] },
          { name: "Courant, R.; John, F. — Introducción al Cálculo y al Análisis. Limusa, 1974.", caps: ["Números reales", "Límite", "Diferenciación"] },
          { name: "Lang, S. — Cálculo I. Fondo Educativo Interamericano, 1990.", caps: ["Funciones y límites", "Derivadas"] },
          { name: "Spivak, M. — Cálculo Infinitesimal (2a ed). Reverté, 1998.", caps: ["Números reales", "Funciones y sucesiones", "Límite", "Continuidad", "Derivadas"] },
          { name: "Thomas, G.B.; Finney, R.L. — Cálculo con Geometría Analítica (9a ed). Addison-Wesley, 1987.", caps: ["Límites y continuidad", "Derivadas", "Aplicaciones de la derivada"] }
        ],
        bibComp: [
          "Apostol, T.M. — Calculus, Volumen I. Ed. Reverté S.A., 2001.",
          "Banach, S. — Cálculo Diferencial e Integral. UTEHA, 1991.",
          "Kuratowski, K. — Introducción al Cálculo. Limusa-Wiley, 1970."
        ],
        subsecuentes: ["Cálculo Diferencial e Integral II", "Taller de Modelación I"]
      },
      {
        id: "geo_analitica_1",
        name: "Geometría Analítica I",
        clave: "0244",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d3.jpg",
        temario: [
          { num: "1", name: "Introducción", horas: 10, subtemas: [
            "Los conceptos geométricos elementales: distancia entre dos puntos, distancia de un punto a una recta, distancia de un punto a un plano; simetría respecto a un punto, respecto a una recta y respecto a un plano.",
            "Introducción de coordenadas cartesianas en el plano y en el espacio y el método analítico.",
            "Lugares geométricos del plano y el espacio definidos por ecuaciones y desigualdades elementales. Gráficas de funciones de primer y segundo grados en una y dos variables."
          ]},
          { num: "2", name: "Trigonometría", horas: 15, subtemas: [
            "Razones trigonométricas; primeras relaciones. El Teorema de Pitágoras.",
            "Resolución de triángulos. Congruencia. Semejanza.",
            "Rectas y puntos notables de un triángulo.",
            "Ángulo central y ángulo inscrito. Potencia de un punto respecto a una circunferencia.",
            "Funciones trigonométricas. Identidades trigonométricas.",
            "Coordenadas polares. Curvas en coordenadas polares.",
            "Curvas paramétricas.",
            "Coordenadas esféricas y cilíndricas. Superficies coordenadas. Superficies paramétricas."
          ]},
          { num: "3", name: "Espacios vectoriales básicos", horas: 20, subtemas: [
            "Definición y ejemplos de un espacio vectorial real (ℝ², ℝ³, las funciones reales de variable real; fuerzas planas y espaciales).",
            "Subespacios vectoriales; ejemplos.",
            "Independencia lineal, conjunto generador, base, dimensión. Dimensión de una curva y de una superficie.",
            "Producto escalar, producto vectorial, triple producto escalar. Interpretación geométrica de cada uno y propiedades."
          ]},
          { num: "4", name: "Rectas, planos, semiplanos y semiespacios", horas: 15, subtemas: [
            "Ecuaciones cartesianas y paramétricas de la recta en ℝ². Fórmula para la distancia de un punto a una recta. División de un segmento en una razón dada. Semiplanos.",
            "Rectas en ℝ³; rectas que se cruzan, distancia de un punto a una recta. Distancia entre dos rectas.",
            "Ecuaciones cartesianas y paramétricas de un plano en ℝ³. Distancia de un punto a un plano. Semiespacios.",
            "Sistemas de ecuaciones lineales. Transversalidad.",
            "Sistemas de desigualdades lineales."
          ]},
          { num: "5", name: "Cónicas", horas: 20, subtemas: [
            "Definición, trazado y nomenclatura. Simetrías y extensión.",
            "Ecuaciones canónicas; sistema coordenado 'natural'.",
            "Cónicas con ejes paralelos a los coordenados. Traslaciones.",
            "Rotaciones en ℝ². Clasificación de formas cuadráticas (discriminante).",
            "Definición general de cónica (excentricidad). Secciones de un cono.",
            "La tangente a una cónica; propiedad focal.",
            "Cónicas parametrizadas.",
            "Familias de cónicas."
          ]}
        ],
        bibBasicas: [
          { name: "Bracho, J. — Geometría Analítica. Notas. Facultad de Ciencias, UNAM.", caps: ["Coordenadas cartesianas", "Espacios vectoriales", "Rectas y planos", "Cónicas"] },
          { name: "Efimov, N. — Geometría Superior. MIR, 1984.", caps: ["Trigonometría", "Álgebra vectorial", "Geometría analítica plana y espacial"] },
          { name: "Preston, G.C.; Lovaglia, A.R. — Modern Analytic Geometry. Harper & Row, 1971.", caps: ["Coordenadas", "Rectas", "Cónicas", "Geometría vectorial"] },
          { name: "Ramírez Galarza, A. — Geometría Analítica: Una Introducción a la Geometría. Las Prensas de Ciencias, UNAM, 2004.", caps: ["Geometría cartesiana", "Vectores", "Rectas y planos", "Cónicas"] }
        ],
        bibComp: [
          "Eves, H. — Estudio de las Geometrías. UTEHA, 1969.",
          "Hilbert, D.; Cohn-Vossen, S. — Geometry and the Imagination. Vínculos Matemáticos No. 150, Facultad de Ciencias, UNAM, 2000."
        ],
        subsecuentes: ["Cálculo Diferencial e Integral II", "Geometría Analítica II", "Taller de Modelación I"]
      },
      {
        id: "geo_moderna_1",
        name: "Geometría Moderna I",
        clave: "0249",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d16.jpg",
        temario: [
          { num: "1", name: "Fundamentos de geometría euclidiana", horas: 12, subtemas: ["Los axiomas de Euclides y Hilbert", "Incidencia, orden y separación", "Congruencia de segmentos y ángulos", "Postulado de las paralelas"] },
          { num: "2", name: "Triángulos y congruencias", horas: 14, subtemas: ["Criterios de congruencia de triángulos (LLL, LAL, ALA, etc.)", "Propiedades de triángulos isósceles", "Desigualdades en triángulos", "Construcciones con regla y compás"] },
          { num: "3", name: "Círculos y polígonos", horas: 12, subtemas: ["Propiedades de circunferencias y cuerdas", "Ángulos inscritos y centrales", "Polígonos regulares y sus propiedades", "Medida de arcos"] },
          { num: "4", name: "Semejanza y proporciones", horas: 12, subtemas: ["Razones y proporciones", "Criterios de semejanza de triángulos", "Teorema de Pitágoras y recíproco", "Medios proporcionales"] },
          { num: "5", name: "Geometría del triángulo", horas: 10, subtemas: ["Puntos notables: baricentro, ortocentro, circuncentro, incentro", "Recta de Euler", "Circunferencia de los nueve puntos"] }
        ],
        bibBasicas: [
          { name: "Coxeter, H.S.M.; Greitzer, S.L. — Geometry Revisited. MAA, 1967.", caps: ["Triángulos", "Círculos", "Semejanza", "Geometría proyectiva elemental"] },
          { name: "Moise, E.E. — Elementary Geometry from an Advanced Standpoint. Addison-Wesley, 1990.", caps: ["Axiomas de incidencia y orden", "Congruencia", "Paralelismo", "Semejanza"] }
        ],
        bibComp: ["Hartshorne, R. — Geometry: Euclid and Beyond. Springer, 2000.", "Prenowitz, W.; Jordan, M. — Basic Concepts of Geometry. Ardsley House, 1989."],
        subsecuentes: ["Geometría Moderna II", "Geometría Analítica II", "Geometría Proyectiva"]
      }
    ]
  },
  {
    semestre: 2,
    titulo: "Segundo Semestre",
    optativas: 1,
    materias: [
      {
        id: "algebra_superior_2",
        name: "Álgebra Superior II",
        clave: "0008",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d4.jpg",
        temario: [
          { num: "1", name: "Números enteros", horas: 15, subtemas: [
            "El anillo de los números enteros.",
            "ℤ como dominio entero.",
            "El orden en ℤ.",
            "Principio de inducción. Principio del buen orden.",
            "Unidades en ℤ."
          ]},
          { num: "2", name: "Divisibilidad", horas: 25, subtemas: [
            "Propiedades elementales.",
            "Algoritmo de la división.",
            "Máximo común divisor. Algoritmo de Euclides. Mínimo común múltiplo.",
            "Soluciones enteras de una ecuación lineal.",
            "Números primos. Factorización única.",
            "Congruencias. Congruencias lineales. Teorema chino del residuo."
          ]},
          { num: "3", name: "Números complejos", horas: 15, subtemas: [
            "El campo de los números complejos.",
            "Conjugación. Módulo o norma.",
            "Raíces cuadradas. La ecuación de 2° grado.",
            "Representación polar. Teorema de De Moivre. Raíces n-ésimas."
          ]},
          { num: "4", name: "Polinomios y ecuaciones polinomiales", horas: 25, subtemas: [
            "Polinomios con coeficientes en un campo K. Operaciones. El dominio entero K[x].",
            "Divisibilidad. Algoritmo de la división.",
            "Máximo común divisor. Algoritmo de Euclides.",
            "Polinomios irreducibles. Factorización única.",
            "Evaluación. Raíces de un polinomio. Teorema del residuo. Teorema del factor. Factorización de polinomios. División sintética.",
            "Raíces múltiples. Derivadas y multiplicidad.",
            "Teorema fundamental del álgebra. Consecuencias."
          ]}
        ],
        bibBasicas: [
          { name: "Cárdenas, H.; Lluis, E.; Raggi, F.; Tomás, F. — Álgebra Superior. Trillas, 1974.", caps: ["Números enteros", "Divisibilidad", "Números complejos", "Polinomios"] },
          { name: "Nachbin, L. — Álgebra Elemental. OEA, 1986.", caps: ["Aritmética elemental", "Polinomios y ecuaciones"] }
        ],
        bibComp: [
          "Dodge, C.W. — Sets, Logic and Numbers. Weber & Schmidt, 1969.",
          "Friedberg, S.H.; Insel, A.J.; Spence, L.E. — Álgebra Lineal. Publicaciones Cultural, 1982.",
          "Gentile, E.R. — Aritmética Elemental. OEA, 1985.",
          "Grimaldi, R.P. — Matemáticas Discreta y Combinatoria. STE, 1998.",
          "Grossman, S.I. — Álgebra Lineal. McGraw-Hill, 1996.",
          "Halmos, P.R. — Teoría Intuitiva de los Conjuntos. Ed. Continental, 1966.",
          "Hoffman, K.; Kunze, R. — Álgebra Lineal. Prentice Hall, 1973.",
          "Lang, S. — Álgebra Lineal. STE, 1986.",
          "Niven, I.M.; Zuckerman, H.S. — Introducción a la Teoría de los Números. Limusa-Wiley, 1969."
        ],
        subsecuentes: ["Álgebra Lineal I", "Taller de Modelación II"]
      },
      {
        id: "calculo_2",
        name: "Cálculo Diferencial e Integral II",
        clave: "0092",
        creditos: 18,
        horas: 144,
        icon: "assets/images/d5.jpg",
        temario: [
          { num: "1", name: "Integral definida", horas: 28, subtemas: [
            "Ejemplos que conducen al concepto de integral definida (área bajo una curva, trabajo).",
            "Sumas superiores e inferiores (o sumas de Riemann).",
            "Definición y ejemplos de la integral definida de una función continua.",
            "Propiedades básicas de la integral definida.",
            "Teorema del valor medio para la integral.",
            "Ejemplos de funciones integrables con un número finito o infinito de puntos de discontinuidad.",
            "La función de Riemann."
          ]},
          { num: "2", name: "Teorema Fundamental del Cálculo", horas: 19, subtemas: [
            "La integral como función del límite superior (integral indefinida).",
            "Propiedades de la integral indefinida.",
            "Demostración de los teoremas fundamentales del cálculo.",
            "Integración directa.",
            "Integrales impropias.",
            "Criterios de convergencia de las integrales impropias."
          ]},
          { num: "3", name: "Las funciones logaritmo y exponencial", horas: 19, subtemas: [
            "Definición de la función logaritmo a través de la integral.",
            "Propiedades de las funciones logarítmicas.",
            "La función exponencial como inversa de la función logaritmo.",
            "Propiedades de las funciones exponenciales.",
            "Derivación logarítmica.",
            "Funciones que sólo pueden expresarse en términos de una integral: Funciones elípticas."
          ]},
          { num: "4", name: "Las funciones trigonométricas a través de la integral (Opcional)", horas: 7, subtemas: [
            "Definición de π por medio de una integral.",
            "Propiedades de las funciones trigonométricas.",
            "Funciones trigonométricas inversas."
          ]},
          { num: "5", name: "Métodos de integración y aplicaciones de la integral definida", horas: 28, subtemas: [
            "Métodos de sustitución o cambio de variable.",
            "Integración por partes.",
            "Teorema del valor medio para integrales.",
            "Polinomios de Taylor y forma de Cauchy del residuo.",
            "Fracciones parciales; método de coeficientes indeterminados para la integración de funciones racionales.",
            "Métodos numéricos de integración."
          ]},
          { num: "6", name: "Aplicaciones", horas: 19, subtemas: [
            "Cálculo de áreas de regiones planas.",
            "Área en coordenadas polares.",
            "Longitud de una curva y distancia recorrida por una partícula.",
            "Volumen y área de sólidos de revolución.",
            "Trabajo, densidad y masa.",
            "Cálculo de momentos.",
            "Problemas de decaimiento radioactivo, ley de Malthus, oscilación de un resorte, ecuación logística."
          ]},
          { num: "7", name: "Series", horas: 24, subtemas: [
            "Definición y ejemplos de sucesiones y series convergentes y no convergentes.",
            "Criterios de convergencia para sucesiones y para series con términos positivos.",
            "Series alternantes y convergencia absoluta de una serie.",
            "Criterio de Leibniz.",
            "Reordenamiento de los términos de una serie.",
            "Ejemplos elementales de series de potencias.",
            "Ejemplos de series de Fourier."
          ]}
        ],
        bibBasicas: [
          { name: "Arizmendi, H.; Carrillo, H.; Lara, M. — Cálculo. Primer Curso. Addison Wesley Iberoamericana, 1987.", caps: ["Integral definida", "TFC", "Log y exponencial", "Métodos de integración", "Aplicaciones", "Series"] },
          { name: "Courant, R.; John, F. — Introducción al Cálculo y al Análisis. Limusa, 1996.", caps: ["Integral definida", "Técnicas de integración", "Series"] },
          { name: "Lang, S. — Cálculo I. Fondo Educativo Interamericano, 1990.", caps: ["Integral", "Aplicaciones", "Series"] },
          { name: "Spivak, M. — Cálculo Infinitesimal (2ª ed). Reverté, 1998.", caps: ["Integral definida", "TFC", "Series"] },
          { name: "Thomas, G.B.; Finney, R.L. — Cálculo con Geometría Analítica (9ª ed). Addison-Wesley, 1987.", caps: ["Integral definida", "Técnicas de integración", "Aplicaciones de la integral", "Series"] }
        ],
        bibComp: [
          "Apostol, T.M. — Calculus, Volumen I. Ed. Reverté S.A., 2001.",
          "Banach, S. — Cálculo Diferencial e Integral. UTEHA, 1991.",
          "Kuratowski, K. — Introducción al Cálculo. Limusa-Wiley, 1970."
        ],
        subsecuentes: ["Cálculo Diferencial e Integral III", "Probabilidad I"]
      },
      {
        id: "geo_analitica_2",
        name: "Geometría Analítica II",
        clave: "0245",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d6.jpg",
        temario: [
          { num: "1", name: "Superficies cuádricas", horas: 20, subtemas: [
            "Cilindros. Cilindros sobre cónicas.",
            "Superficies de revolución. Superficies de revolución generadas por cónicas.",
            "La ecuación de 2° grado sin términos mixtos.",
            "Simetrías y extensión de superficies cuádricas.",
            "Cuádricas con ejes paralelos a los coordenados.",
            "Superficies regladas.",
            "Plano tangente a una cuádrica."
          ]},
          { num: "2", name: "Transformaciones", horas: 35, subtemas: [
            "Definición y ejemplos de transformaciones lineales en ℝ² y en ℝ³. Proyecciones, homotecias.",
            "La matriz de una transformación lineal respecto a una base. Subespacios invariantes.",
            "Definición y ejemplos de transformaciones rígidas en ℝ² y en ℝ³. Subgrupos. Descomposición de una transformación rígida como una lineal seguida de una traslación.",
            "Eliminación de los términos mixtos de la ecuación general de 2° grado en 3 variables por una rotación adecuada.",
            "Transformaciones afines. Perspectiva."
          ]},
          { num: "3", name: "La geometría de la esfera", horas: 10, subtemas: [
            "Geodésicas.",
            "Un poco de trigonometría esférica."
          ]},
          { num: "4", name: "Transformaciones de Möbius", horas: 15, subtemas: [
            "Interpretación geométrica de la suma y el producto de números complejos.",
            "El plano complejo extendido. Transformaciones de Möbius. Principales propiedades.",
            "Introducción a la geometría hiperbólica."
          ]}
        ],
        bibBasicas: [
          { name: "Bracho, J. — Geometría Analítica. Notas. Facultad de Ciencias, UNAM.", caps: ["Superficies cuádricas", "Transformaciones", "Esfera", "Möbius"] },
          { name: "Efimov, N. — Geometría Superior. MIR, 1984.", caps: ["Superficies cuádricas", "Transformaciones en el espacio", "Geometría esférica"] },
          { name: "Preston, G.C.; Lovaglia, A.R. — Modern Analytic Geometry. Harper & Row, 1971.", caps: ["Cuádricas", "Transformaciones lineales y rígidas"] },
          { name: "Ramírez-Galarza, A. — Geometría Analítica: Una Introducción a la Geometría. Las Prensas de Ciencias, UNAM, 1998.", caps: ["Superficies cuádricas", "Transformaciones", "Möbius e hiperbólica"] }
        ],
        bibComp: [
          "Eves, H. — Estudio de las Geometrías. UTEHA, 1969.",
          "Hilbert, D.; Cohn-Vossen, S. — Geometry and the Imagination. Vínculos Matemáticos No. 150, Facultad de Ciencias, UNAM, 2000."
        ],
        subsecuentes: ["Álgebra Lineal I", "Cálculo Diferencial e Integral III", "Taller de Modelación III"]
      }
    ]
  },
  {
    semestre: 3,
    titulo: "Tercer Semestre",
    optativas: 2,
    materias: [
      {
        id: "algebra_lineal_1",
        name: "Álgebra Lineal I",
        clave: "0005",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d7.jpg",
        temario: [
          { num: "1", name: "Espacios vectoriales", horas: 15, subtemas: [
            "Campos.",
            "Espacios vectoriales.",
            "Subespacios vectoriales.",
            "Dependencia lineal.",
            "Bases y dimensión.",
            "Sumas directas."
          ]},
          { num: "2", name: "Matrices", horas: 10, subtemas: [
            "El espacio de las matrices.",
            "Multiplicación de matrices. Matrices elementales. Matriz inversa.",
            "Sistemas de ecuaciones lineales."
          ]},
          { num: "3", name: "Transformaciones lineales", horas: 12, subtemas: [
            "El espacio de las transformaciones lineales.",
            "Núcleo e imagen de una transformación lineal.",
            "Composición de transformaciones lineales.",
            "La transformación inversa.",
            "Espacios isomorfos."
          ]},
          { num: "4", name: "Transformaciones lineales y matrices", horas: 12, subtemas: [
            "La transformación lineal asociada a una matriz.",
            "La matriz asociada a una transformación lineal.",
            "Isomorfismos entre el espacio de matrices y el de transformaciones lineales.",
            "Cambios de base."
          ]},
          { num: "5", name: "Producto escalar", horas: 17, subtemas: [
            "Productos escalares y hermitianos.",
            "Ortogonalidad.",
            "Productos positivos, normas y ángulos.",
            "Coeficientes de Fourier.",
            "Bases ortogonales (caso positivo).",
            "Complemento ortogonal de un subespacio. Aplicación a los sistemas de ecuaciones.",
            "Bases ortogonales (caso general).",
            "Espacio dual."
          ]},
          { num: "6", name: "Determinantes", horas: 10, subtemas: [
            "Unicidad del determinante.",
            "Determinante de un producto.",
            "Invertibilidad de matrices y determinantes.",
            "Determinante de un operador lineal."
          ]},
          { num: "7", name: "Transformaciones simétricas", horas: 4, subtemas: [
            "Definición y propiedades elementales de valores y vectores propios.",
            "Polinomio característico.",
            "Existencia de valores propios reales de transformaciones simétricas.",
            "Teorema espectral para transformaciones simétricas.",
            "Ejemplos."
          ]}
        ],
        bibBasicas: [
          { name: "Curtis, C.W. — Linear Algebra. Springer, 1984.", caps: ["Espacios vectoriales", "Transformaciones lineales", "Producto escalar", "Determinantes"] },
          { name: "Friedberg, S.H.; Insel, A.J.; Spence, L.E. — Álgebra Lineal. Publicaciones Cultural, 1982.", caps: ["Espacios vectoriales", "Matrices", "Transformaciones lineales", "Determinantes", "Producto interior"] },
          { name: "Hoffman, K.; Kunze, R. — Álgebra Lineal. Prentice Hall, 1973.", caps: ["Espacios vectoriales", "Transformaciones lineales", "Determinantes", "Producto escalar"] },
          { name: "Lang, S. — Álgebra Lineal. STE, 1986.", caps: ["Espacios vectoriales", "Matrices", "Determinantes", "Producto escalar"] },
          { name: "Nomizu, K. — Fundamentals of Linear Algebra. McGraw-Hill, 1966.", caps: ["Espacios vectoriales", "Transformaciones lineales", "Producto interior"] },
          { name: "Rincón, H.A. — Álgebra Lineal. Las Prensas de Ciencias, UNAM, 2002.", caps: ["Espacios vectoriales", "Transformaciones lineales y matrices", "Producto escalar", "Determinantes", "Valores propios"] }
        ],
        bibComp: [
          "Birkhoff, G.; MacLane, S. — A Survey of Modern Algebra. Macmillan, 1977.",
          "Jacobson, N. — Lectures in Abstract Algebra, Vol. II. Van Nostrand, 1951.",
          "Lluis, E. — Álgebra Lineal, Álgebra Multilineal y K-Teoría Algebraica Clásica. Addison-Wesley Iberoamericana, 1990.",
          "Nickerson, H.K.; Spencer, D.C.; Steenrod, N.E. — Advanced Calculus. Van Nostrand, 1959."
        ],
        subsecuentes: ["Cálculo Diferencial e Integral IV", "Ecuaciones Diferenciales I", "Investigación de Operaciones", "Probabilidad II", "Análisis Numérico", "Taller de Modelación III"]
      },
      {
        id: "calculo_3",
        name: "Cálculo Diferencial e Integral III",
        clave: "0093",
        creditos: 18,
        horas: 144,
        icon: "assets/images/d8.jpg",
        temario: [
          { num: "1", name: "Funciones de ℝ en ℝN", horas: 28, subtemas: [
            "Funciones de ℝ en ℝN como curvas en el espacio, límites y derivadas en términos de las componentes.",
            "La diferencial de una curva en el espacio, velocidad y el vector tangente, rapidez.",
            "Propiedades de los límites y la derivada con respecto a la suma y el producto.",
            "Curvas rectificables, longitud de arco, parametrización unitaria por longitud de arco.",
            "Normal principal, curvatura, torsión y plano osculante.",
            "Ejemplos de curvas en el plano y en el espacio.",
            "Fórmula de Frenet y Serret (opcional)."
          ]},
          { num: "2", name: "Espacios normados (opcional)", horas: 7, subtemas: [
            "Espacios vectoriales, normas en ℝN."
          ]},
          { num: "3", name: "Topología de ℝN y funciones de ℝN en ℝM", horas: 18, subtemas: [
            "Conjuntos abiertos, cerrados, frontera.",
            "Caracterización de compactos, teorema de Heine-Borel (opcional), producto de compactos.",
            "Conexidad y conexidad relativa.",
            "Definición de coordenadas polares, cilíndricas y esféricas.",
            "Funciones de ℝN en ℝM, límites y continuidad.",
            "Teoremas de continuidad en compactos o en conexos.",
            "Teorema de Bolzano y Weierstrass.",
            "Funciones continuas en compactos."
          ]},
          { num: "4", name: "Funciones de ℝN en ℝ", horas: 28, subtemas: [
            "Conjuntos de nivel y gráficas.",
            "Diferenciabilidad, propiedades, derivadas direccionales y derivadas parciales.",
            "Gradiente de una función, propiedades: dirección de máximo cambio, definición de puntos críticos.",
            "Teorema del valor medio, criterio de diferenciabilidad en términos de las parciales, derivadas de orden superior, plano tangente a una superficie.",
            "Diferenciales de orden k, aproximación por polinomios de Taylor."
          ]},
          { num: "5", name: "Transformaciones (opcional)", horas: 7, subtemas: [
            "Matrices, determinantes, y resolución de sistemas.",
            "Valores y vectores propios.",
            "Formas bilineales y cuadráticas."
          ]},
          { num: "6", name: "Funciones de ℝN en ℝM", horas: 28, subtemas: [
            "Diferenciabilidad, jacobiano, regla de la cadena, ortogonalidad del gradiente a los conjuntos de nivel.",
            "Teoremas de la función inversa e implícita con demostraciones.",
            "Teorema del rango (opcional).",
            "Definición del operador de divergencia, laplaciano y rotacional."
          ]},
          { num: "7", name: "Máximos y mínimos", horas: 28, subtemas: [
            "Puntos críticos, formas cuadráticas definidas positivas, diagonalización y criterios de positividad, hessianos para detectar máximos, mínimos y puntos silla.",
            "Máximos y mínimos con restricciones, multiplicadores de Lagrange."
          ]}
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Calculus, Volumen I. Ed. Reverté, 2001.", caps: ["Topología de ℝN", "Funciones de varias variables", "Diferenciabilidad"] },
          { name: "Courant, R. — Differential and Integral Calculus, Vol. II. J. Wiley, 1936.", caps: ["Curvas en el espacio", "Funciones de varias variables"] },
          { name: "Courant, R.; John, F. — Introducción al Cálculo y al Análisis Matemático, Vol. II. Limusa, 1974.", caps: ["Topología de ℝN", "Funciones de ℝN en ℝ y ℝM", "Máximos y mínimos"] },
          { name: "Lang, S. — Calculus of Several Variables. Springer, 1987.", caps: ["Curvas en el espacio", "Funciones de varias variables", "Derivadas parciales", "Máximos y mínimos"] },
          { name: "Marsden, J.; Tromba, A. — Cálculo Vectorial. Addison-Wesley, Pearson Educación, 1998.", caps: ["Curvas en ℝN", "Funciones escalares de varias variables", "Teoremas de la función inversa e implícita", "Máximos y mínimos"] },
          { name: "Thomas, G.B.; Finney, R.L. — Cálculo: varias variables. Addison-Wesley Longman, 1999.", caps: ["Curvas y superficies", "Derivadas parciales", "Funciones de varias variables"] }
        ],
        bibComp: [
          "Buck, R.C. — Advanced Calculus. McGraw-Hill, 1978.",
          "Budak, B.M.; Fomin, S.V. — Multiple Integrals Field Theory and Series. MIR, 1973.",
          "Crowell, R.; Trotter, H.; Williamson, R. — Cálculo de Funciones Vectoriales. Prentice Hall Internacional, 1973.",
          "Fulks, W. — Cálculo Avanzado. Limusa-Wiley, 1970.",
          "Spivak, M. — Cálculo en Variedades. Ed. Reverté, 1987.",
          "Spivak, M. — Cálculo Infinitesimal (2a ed). Ed. Reverté, 1998.",
          "Stein, S.K. — Calculus and Analytic Geometry. McGraw-Hill, 1992.",
          "Widder, D.V. — Advanced Calculus. Dover, 1989."
        ],
        subsecuentes: ["Cálculo Diferencial e Integral IV", "Ecuaciones Diferenciales I", "Probabilidad II", "Taller de Modelación III"]
      }
    ]
  },
  {
    semestre: 4,
    titulo: "Cuarto Semestre",
    optativas: 1,
    materias: [
      {
        id: "algebra_lineal_2",
        name: "Álgebra Lineal II",
        clave: "0006",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d9.jpg",
        temario: [
          { num: "1", name: "Formas bilineales y operadores", horas: 15, subtemas: [
            "Formas bilineales.",
            "Formas cuadráticas.",
            "Operadores autoadjuntos (simétricos y hermitianos).",
            "Operadores unitarios y ortogonales.",
            "Teorema de Sylvester sobre la signatura de una forma."
          ]},
          { num: "2", name: "Diagonalización", horas: 15, subtemas: [
            "Vectores y valores propios.",
            "Polinomio característico.",
            "Diagonalización y bases de vectores propios."
          ]},
          { num: "3", name: "Triangulación", horas: 10, subtemas: [
            "Existencia de una triangulación sobre ℂ.",
            "Teorema de Hamilton-Cayley.",
            "Diagonalización de operadores unitarios."
          ]},
          { num: "4", name: "El Teorema Espectral", horas: 15, subtemas: [
            "Operadores simétricos sobre ℝ.",
            "Operadores normales sobre ℂ."
          ]},
          { num: "5", name: "Forma canónica de Jordan", horas: 25, subtemas: [
            "Descomposición primaria.",
            "Forma canónica de Jordan."
          ]}
        ],
        bibBasicas: [
          { name: "Curtis, C.W. — Linear Algebra. Springer, 1984.", caps: ["Formas bilineales", "Diagonalización", "Teorema espectral", "Forma de Jordan"] },
          { name: "Lang, S. — Álgebra Lineal. STE, 1986.", caps: ["Formas bilineales", "Operadores", "Teorema espectral", "Jordan"] },
          { name: "Nomizu, K. — Fundamentals of Linear Algebra. McGraw-Hill, 1966.", caps: ["Formas bilineales y cuadráticas", "Diagonalización", "Forma de Jordan"] },
          { name: "Rincón, H.A. — Álgebra Lineal. Las Prensas de Ciencias, UNAM, 2002.", caps: ["Formas bilineales", "Operadores autoadjuntos", "Teorema espectral", "Forma canónica de Jordan"] }
        ],
        bibComp: [
          "Lluis, E. — Álgebra Lineal, Álgebra Multilineal y K-Teoría Algebraica Clásica. Addison-Wesley Iberoamericana, 1990.",
          "Nickerson, H.K.; Spencer, D.C.; Steenrod, N.E. — Advanced Calculus. Van Nostrand, 1959."
        ],
        subsecuentes: ["Álgebra Moderna I", "Análisis Matemático I", "Cálculo de Variaciones", "Historia de las Matemáticas I", "Introducción Matemática a la Mecánica Celeste", "Lógica Matemática I", "Topología I"]
      },
      {
        id: "calculo_4",
        name: "Cálculo Diferencial e Integral IV",
        clave: "0094",
        creditos: 18,
        horas: 144,
        icon: "assets/images/d10.jpg",
        temario: [
          { num: "1", name: "Integrales múltiples", horas: 32, subtemas: [
            "Área de un conjunto plano.",
            "Integral de una función de dos variables, como volumen debajo de una superficie y sumas de Riemann.",
            "Propiedades de las integrales.",
            "Conjuntos de medida cero.",
            "Cálculo de integrales múltiples, teoremas de Fubini, integración sobre dominios más generales.",
            "Integrales triples y cálculo de volúmenes.",
            "Teorema del cambio de variables e integrales en polares, cilíndricas, esféricas.",
            "Integrales impropias. Funciones no continuas. Integrales sobre regiones no acotadas.",
            "Convergencia uniforme, teorema de Fubini, derivación bajo la integral."
          ]},
          { num: "2", name: "Integral de línea", horas: 22, subtemas: [
            "Integración de funciones escalares sobre curvas paramétricas, independencia de la parametrización.",
            "Integrales de línea en campos vectoriales, cálculo del trabajo.",
            "Integrales de línea en campos del tipo gradiente y campos conservativos.",
            "Teorema de Green, aplicaciones y ejemplos."
          ]},
          { num: "3", name: "Integral de superficie", horas: 22, subtemas: [
            "Superficies parametrizadas, vector normal y plano tangente.",
            "Integración sobre superficies parametrizadas y cálculo de áreas.",
            "Independencia de la parametrización.",
            "Integración de funciones escalares y vectoriales sobre superficies orientables.",
            "Integrales en coordenadas curvilíneas."
          ]},
          { num: "4", name: "Teoremas integrales", horas: 32, subtemas: [
            "Teorema de la divergencia en el plano. Teorema de Green, aplicación al laplaciano.",
            "Teorema de Stokes, rotacional, vorticidad.",
            "Teorema de Gauss y Stokes en el espacio.",
            "Flujos a través de una superficie. Identidades de Green.",
            "Problemas de Laplace. El laplaciano en distintas coordenadas.",
            "Principio del máximo para la ecuación del calor. Función de Green."
          ]},
          { num: "5", name: "Convergencia uniforme y series de potencias", horas: 9, subtemas: [
            "Convergencia uniforme en una variable, propiedades.",
            "La prueba M de Weierstrass. Ejemplos de funciones continuas en ningún punto diferenciables.",
            "Series de potencias, series de Taylor, intervalos de convergencia, derivación e integración término a término."
          ]},
          { num: "6", name: "Optativo: Integral de Fourier", horas: 9, subtemas: [
            "Propiedades, teorema de inversión, Lema de Riemann-Lebesgue, Parseval, convolución.",
            "Integral de Fresnel. Ecuación de onda con transformada de Fourier. Transformada de Laplace.",
            "Desigualdad de Bessel, teoremas de convergencia uniforme. La ecuación de calor y de onda."
          ]},
          { num: "7", name: "Optativo: Métodos numéricos en integrales múltiples", horas: 9, subtemas: [
            "Métodos del trapecio y de Simpson.",
            "Cuadraturas gaussianas.",
            "Integración en límites arbitrarios. Cálculo de errores. Método de Montecarlo."
          ]},
          { num: "8", name: "Optativo: Formas diferenciales", horas: 9, subtemas: [
            "Derivada exterior, formas cerradas, formas exactas.",
            "Cambios de variables para formas diferenciales.",
            "Orientación de superficies. Integrales de formas diferenciales.",
            "Teorema de Stokes en variedades, elemento de volumen."
          ]}
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Calculus, Volumen I. Ed. Reverté, 2001.", caps: ["Integrales múltiples", "Teoremas integrales"] },
          { name: "Courant, R. — Differential and Integral Calculus, Vol. 2. J. Wiley, 1936.", caps: ["Integrales múltiples", "Integrales de línea y superficie"] },
          { name: "Courant, R.; John, F. — Introducción al Cálculo y al Análisis Matemático, Vol. 2. Limusa, 1974.", caps: ["Integrales múltiples", "Campos vectoriales", "Teoremas integrales"] },
          { name: "Lang, S. — Calculus of Several Variables. Springer, 1987.", caps: ["Integrales múltiples", "Integral de línea", "Integral de superficie", "Green, Gauss, Stokes"] },
          { name: "Marsden, J.; Tromba, A. — Cálculo Vectorial. Addison-Wesley, Pearson Educación, 1998.", caps: ["Integrales múltiples", "Integral de línea", "Integral de superficie", "Teoremas integrales"] },
          { name: "Thomas, G.B.; Finney, R.L. — Cálculo: Varias Variables. Addison-Wesley Longman, 1999.", caps: ["Integrales múltiples", "Campos vectoriales", "Stokes y Gauss"] }
        ],
        bibComp: [
          "Buck, R.C. — Advanced Calculus. McGraw-Hill, 1978.",
          "Budak, B.M.; Fomin, S.V. — Multiple Integrals Field Theory and Series. MIR, 1973.",
          "Crowell, R.; Trotter, H.; Williamson, R. — Cálculo de Funciones Vectoriales. Prentice Hall Internacional, 1973.",
          "Fulks, W. — Cálculo Avanzado. Limusa-Wiley, 1970.",
          "Spivak, M. — Cálculo en Variedades. Ed. Reverté, 1987.",
          "Spivak, M. — Cálculo Infinitesimal (2ª ed). Ed. Reverté, 1998.",
          "Stein, S.K. — Calculus and Analytic Geometry. McGraw-Hill, 1992.",
          "Widder, D.V. — Advanced Calculus. Dover, 1989."
        ],
        subsecuentes: ["Análisis Matemático I", "Ecuaciones Diferenciales Parciales I"]
      },
      {
        id: "ecuaciones_diferenciales_1",
        name: "Ecuaciones Diferenciales I",
        clave: "0162",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d11.jpg",
        temario: [
          { num: "1", name: "Introducción", horas: 4, subtemas: [
            "Repaso de nociones básicas y planteamiento de problemas generales.",
            "Campos vectoriales en ℝn y su ecuación diferencial asociada.",
            "Definición de espacio fásico, solución y retrato fase de una ecuación diferencial.",
            "Métodos geométricos para analizar el retrato fase: isóclinas, familias de curvas paramétricas.",
            "Existencia y unicidad de soluciones; aproximación de la solución y cuantificación del error."
          ]},
          { num: "2", name: "Ecuaciones diferenciales lineales de primer orden", horas: 5, subtemas: [
            "Ecuaciones homogéneas.",
            "Ecuaciones no homogéneas y métodos de variación de parámetros.",
            "Teorema de Existencia y Unicidad y dependencia continua respecto a condiciones iniciales."
          ]},
          { num: "3", name: "Ecuaciones diferenciales no lineales de primer orden", horas: 10, subtemas: [
            "Ecuaciones separables, ecuaciones exactas y el método del factor integrante.",
            "Ejemplos y aplicaciones.",
            "Teorema de Existencia y Unicidad de Picard.",
            "Ecuación integral, iterados de Picard. Convergencia de los iterados de Picard.",
            "Lema de Gronwall, dependencia de las condiciones iniciales."
          ]},
          { num: "4", name: "Ecuaciones diferenciales lineales de segundo orden", horas: 10, subtemas: [
            "Ecuaciones diferenciales homogéneas con coeficientes constantes.",
            "Propiedades del conjunto de soluciones, independencia lineal de soluciones, wronskiano.",
            "Solución general.",
            "Ecuaciones no homogéneas, variación de parámetros, coeficientes indeterminados.",
            "Vibraciones mecánicas. Oscilaciones amortiguadas y forzadas, resonancias."
          ]},
          { num: "5", name: "Ecuaciones lineales de segundo orden con coeficientes variables", horas: 10, subtemas: [
            "Métodos de solución por series de potencia.",
            "Cálculo del radio de convergencia.",
            "Ecuaciones singulares y el método de Frobenius.",
            "Ejemplos: ecuaciones de Hermite, Laguerre, Euler, Bessel, Legendre, Tchebycheff, ecuación hipergeométrica."
          ]},
          { num: "6", name: "Optativo: Transformada de Laplace y de Fourier", horas: 6, subtemas: [
            "Métodos de solución y aplicaciones para resolver ecuaciones de segundo orden."
          ]},
          { num: "7", name: "Sistemas de ecuaciones de primer orden lineales", horas: 17, subtemas: [
            "Reducción de ecuaciones de orden n a un sistema de n ecuaciones de primer orden.",
            "Sistema de ecuaciones de primer orden homogéneas. Soluciones linealmente independientes.",
            "Ecuación del wronskiano y su solución. Matriz fundamental y solución general.",
            "Ecuaciones con coeficientes constantes, exponencial de una matriz, valores y vectores propios.",
            "Núcleo de la matriz y vector propio generalizado, teorema de Cayley-Hamilton.",
            "Sistema de ecuaciones de primer orden no homogéneas. Método de variación de parámetros.",
            "Teorema de existencia y unicidad para sistemas homogéneos de primer orden.",
            "Aplicaciones: osciladores acoplados, tanques de salmueras, circuitos eléctricos, sistemas de poblaciones."
          ]},
          { num: "8", name: "Introducción a la teoría cualitativa", horas: 12, subtemas: [
            "Estabilidad de la solución de equilibrio de sistemas lineales homogéneos con coeficientes constantes.",
            "Clasificación de los puntos de equilibrio en el plano y en el espacio.",
            "Plano fase.",
            "Linearización de los puntos de equilibrio de un sistema no lineal.",
            "Descripción cualitativa de los conjuntos límites y el Teorema de Poincaré-Bendixson.",
            "Dibujo cualitativo del plano fase."
          ]},
          { num: "9", name: "Optativo: Ecuaciones en diferencias y métodos numéricos", horas: 6, subtemas: [
            "Ecuaciones lineales en diferencias.",
            "Aplicaciones: el método de Newton.",
            "Método de Euler. Métodos de Runge-Kutta."
          ]}
        ],
        bibBasicas: [
          { name: "Arnold, V.I. — Ordinary Differential Equations (3ª ed). Springer-Verlag, 1992.", caps: ["Introducción", "Campos vectoriales", "Sistemas lineales", "Teoría cualitativa"] },
          { name: "Blanchard, P.; Devaney, R.; Hall, G. — Ecuaciones Diferenciales. International Thomson Editores, 1999.", caps: ["ED de primer orden", "Sistemas", "Teoría cualitativa"] },
          { name: "Braun, M. — Differential Equations and their Applications. Springer-Verlag, 1993.", caps: ["ED lineales", "Sistemas", "Aplicaciones"] },
          { name: "Derrick, W.; Grossman, S. — Ecuaciones Diferenciales con Aplicaciones. Addison-Wesley Iberamericana, 1986.", caps: ["ED de primer orden", "ED de orden superior", "Sistemas de ED"] }
        ],
        bibComp: [
          "Boyce, W.; DiPrima, R. — Elementary Differential Equations and Boundary Value Problems. J. Wiley, 2001.",
          "Hasser, N.B.; LaSalle, J.P.; Sullivan, J.A. — Análisis Matemático. Vol. 2. Ed. Trillas, 1977."
        ],
        subsecuentes: ["Dinámica de Sistemas no Lineales", "Ecuaciones Diferenciales Parciales I", "Análisis Matemático Aplicado"]
      }
    ]
  },
  {
    semestre: 5,
    titulo: "Quinto Semestre",
    optativas: 1,
    materias: [
      {
        id: "algebra_moderna_1",
        name: "Álgebra Moderna I",
        clave: "0001",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d12.jpg",
        temario: [
          { num: "1", name: "Teoría elemental de grupos", horas: 25, subtemas: [
            "Grupos.",
            "Subgrupos.",
            "Grupos cíclicos.",
            "Grupos de permutaciones. Ciclos, transposiciones, paridad y el grupo alternante.",
            "Clases laterales y el teorema de Lagrange.",
            "Subgrupos normales y Grupo cociente.",
            "Productos directos y grupos abelianos finitos."
          ]},
          { num: "2", name: "Homomorfismos", horas: 20, subtemas: [
            "Homomorfismos.",
            "Teorema de Cayley.",
            "Teoremas de Isomorfismo."
          ]},
          { num: "3", name: "Tópicos avanzados", horas: 35, subtemas: [
            "Series de subgrupos.",
            "Teorema de Jordan-Hölder.",
            "Acción de un grupo en un conjunto. La ecuación de clases.",
            "Teoremas de Sylow.",
            "Demostración del Teorema Fundamental de los grupos abelianos finitos."
          ]}
        ],
        bibBasicas: [
          { name: "Fraleigh, J.B. — A First Course in Abstract Algebra. Addison-Wesley, 2003.", caps: ["Grupos", "Subgrupos", "Homomorfismos", "Teoremas de Sylow"] },
          { name: "Herstein, I.N. — Topics in Algebra. J. Wiley, 1975.", caps: ["Grupos", "Subgrupos y cosets", "Homomorfismos", "Grupos de permutaciones"] },
          { name: "Rotman, J.J. — An Introduction to the Theory of Groups. Springer, 1995.", caps: ["Teoría elemental de grupos", "Homomorfismos", "Teoremas de Sylow", "Grupos abelianos finitos"] }
        ],
        bibComp: [
          "Jacobson, N. — Lectures in Abstract Algebra. Springer, 1980.",
          "Lang, S. — Algebra. Springer Verlag, 2002."
        ],
        subsecuentes: ["Álgebra Moderna II", "Análisis Matemático III", "Historia de las Matemáticas II", "Topología II", "Variable Compleja II"]
      },
      {
        id: "analisis_matematico_1",
        name: "Análisis Matemático I",
        clave: "0009",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d13.jpg",
        temario: [
          { num: "1", name: "Espacios métricos", horas: 20, subtemas: ["Definición y ejemplos de espacios métricos", "Convergencia de sucesiones en espacios métricos", "Conjuntos abiertos, cerrados y sus propiedades", "Continuidad en espacios métricos", "Homeomorfismos", "Espacios completos. Teorema de Baire", "Teorema de punto fijo de Banach"] },
          { num: "2", name: "Convergencia uniforme", horas: 20, subtemas: ["Sucesiones de funciones: convergencia puntual y uniforme", "Series de funciones: convergencia puntual y uniforme", "Criterio de Weierstrass para series de funciones", "Continuidad del límite uniforme", "Derivación e integración de límites uniformes"] },
          { num: "3", name: "Compacidad", horas: 10, subtemas: ["Compacidad en espacios métricos", "Teorema de Heine-Borel en \\(\\mathbb{R}^n\\)", "Equicontinuidad y el teorema de Arzelà-Ascoli"] },
          { num: "4", name: "Teorema de aproximación de Weierstrass", horas: 10, subtemas: ["Polinomios de Bernstein y teorema de Weierstrass", "Álgebras de funciones continuas", "Teorema de Stone-Weierstrass"] },
          { num: "5", name: "Integral de Riemann-Stieljes", horas: 20, subtemas: ["Definición de la integral de Riemann-Stieljes", "Condiciones de integrabilidad", "Propiedades de la integral", "Funciones de variación acotada como integradoras", "Integración por partes y cambio de variable"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Mathematical Analysis. Addison-Wesley, 1974.", caps: ["Espacios métricos", "Límites y continuidad", "Sucesiones de funciones", "Integral de Riemann-Stieljes"] },
          { name: "Bartle, R.G.; Sherbert, D.R. — Introduction to Real Analysis. Wiley, 2011.", caps: ["Sucesiones y series", "Continuidad", "Diferenciación", "Integración"] },
          { name: "Jost, J. — Postmodern Analysis. Springer, 2005.", caps: ["Espacios métricos", "Continuidad uniforme", "Compacidad"] },
          { name: "Kolmogorov, A.N.; Fomin, S.V. — Elementos de la teoría de funciones y del análisis funcional. Mir, 1975.", caps: ["Espacios métricos", "Espacios normados", "Integral de Lebesgue"] },
          { name: "Rudin, W. — Principles of Mathematical Analysis. McGraw-Hill, 1976.", caps: ["Espacios métricos", "Continuidad", "Sucesiones y series de funciones", "Integral de Riemann-Stieljes"] },
          { name: "Wheeden, R.L.; Zygmund, A. — Measure and Integral. Marcel Dekker, 1977.", caps: ["Funciones de variación acotada", "Integral de Lebesgue"] }
        ],
        bibComp: ["Brézis, H. — Functional Analysis, Sobolev Spaces and Partial Differential Equations. Springer, 2011.", "Dieudonné, J. — Foundations of Modern Analysis. Academic Press, 1969.", "Lieb, E.H.; Loss, M. — Analysis. AMS, 2001.", "Royden, H.L.; Fitzpatrick, P. — Real Analysis. Pearson, 2010.", "Schwartz, L. — Analyse. Hermann, 1967."],
        subsecuentes: ["Análisis Matemático Aplicado"]
      },
      {
        id: "variable_compleja_1",
        name: "Variable Compleja I",
        clave: "0840",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d14.jpg",
        temario: [
          { num: "1", name: "Preliminares y analicidad", horas: 20, subtemas: ["Números complejos: álgebra y geometría", "Representación polar, fórmula de Euler, raíces", "Funciones de variable compleja: límite y continuidad", "Derivada compleja", "Ecuaciones de Cauchy-Riemann", "Funciones analíticas y armónicas", "Funciones elementales: exponencial, logaritmo, trigonométricas, potencias"] },
          { num: "2", name: "Integración", horas: 20, subtemas: ["Integral de línea compleja", "Teorema de Cauchy-Goursat", "Dominio simplemente conexo", "Fórmulas integrales de Cauchy", "Consecuencias: Liouville, teorema fundamental del álgebra, principio del módulo máximo"] },
          { num: "3", name: "Series", horas: 20, subtemas: ["Series de potencias en \\(\\mathbb{C}\\)", "Radio de convergencia", "Series de Taylor de funciones analíticas", "Series de Laurent", "Clasificación de singularidades aisladas: evitables, polos y esenciales", "Teorema de Casorati-Weierstrass"] },
          { num: "4", name: "Teorema del residuo y aplicaciones", horas: 20, subtemas: ["Residuo de una función en un punto singular", "Teorema de los residuos", "Cálculo de integrales reales impropias mediante residuos", "Integrales trigonométricas", "Lema de Jordan"] }
        ],
        bibBasicas: [
          { name: "Ahlfors, L.V. — Complex Analysis. McGraw-Hill, 1979.", caps: ["Funciones analíticas", "Integración compleja", "Series de Taylor y Laurent", "Residuos"] },
          { name: "Churchill, R.V.; Brown, J.W. — Complex Variables and Applications. McGraw-Hill, 2014.", caps: ["Funciones analíticas", "Integrales", "Series", "Residuos y sus usos"] },
          { name: "Lascurain Orive, A. — Variable Compleja. Las Prensas de Ciencias, UNAM, 2003.", caps: ["Funciones analíticas", "Integración", "Series", "Residuos"] },
          { name: "Marsden, J.E.; Hoffman, M.J. — Basic Complex Analysis. Freeman, 1999.", caps: ["Funciones analíticas", "Teorema de Cauchy", "Series de Laurent", "Residuos"] }
        ],
        bibComp: ["Markusevich, A.I. — Theory of Functions of a Complex Variable. Prentice-Hall, 1965.", "Titchmarsh, E.C. — The Theory of Functions. Oxford University Press, 1939."],
        subsecuentes: []
      }
    ]
  },
  {
    semestre: 6,
    titulo: "Sexto Semestre",
    optativas: 3,
    materias: [
      {
        id: "analisis_matematico_2",
        name: "Análisis Matemático II",
        clave: "0010",
        creditos: 10,
        horas: 80,
        icon: "assets/images/d15.jpg",
        temario: [
          { num: "1", name: "Medida de Lebesgue en \\(\\mathbb{R}^n\\)", horas: 20, subtemas: ["Medida exterior de Lebesgue en \\(\\mathbb{R}^n\\)", "Conjuntos medibles Lebesgue", "Propiedades de la medida: σ-aditividad, regularidad", "Conjuntos de medida cero"] },
          { num: "2", name: "Integral de Lebesgue", horas: 20, subtemas: ["Funciones medibles", "Integral de Lebesgue de funciones simples y no negativas", "Integral de Lebesgue de funciones integrables", "Teorema de Beppo Levi (convergencia monótona)", "Lema de Fatou", "Teorema de convergencia dominada de Lebesgue", "Relación con la integral de Riemann", "Teorema de Fubini-Tonelli", "Cambio de variable en la integral de Lebesgue"] },
          { num: "3", name: "Teoremas de convergencia", horas: 20, subtemas: ["Convergencia puntual y convergencia en medida", "Teorema de Egorov", "Diferenciación bajo el signo de integral", "Integral dependiente de un parámetro"] },
          { num: "4", name: "Espacio \\(L^2\\)", horas: 13, subtemas: ["Desigualdades de Hölder y Minkowski", "Los espacios \\(L^p\\) como espacios de Banach", "El espacio \\(L^2\\) como espacio de Hilbert", "Proyección ortogonal y complemento ortogonal", "Bases ortonormales y series de Fourier en \\(L^2\\)"] },
          { num: "5", name: "Temas opcionales", horas: 7, subtemas: ["Medidas con signo y teorema de Radon-Nikodym", "Medidas de Borel y medidas de Radon", "Transformada de Fourier en \\(L^1\\) y \\(L^2\\)", "Convolución y sus propiedades"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Mathematical Analysis. Addison-Wesley, 1974.", caps: ["Integración de Lebesgue", "Espacios L^p"] },
          { name: "Bartle, R.G. — The Elements of Integration and Lebesgue Measure. Wiley, 1995.", caps: ["Medida de Lebesgue", "Integral de Lebesgue", "Espacios L^p"] },
          { name: "Jost, J. — Postmodern Analysis. Springer, 2005.", caps: ["Medida e integración", "Espacios L^p"] },
          { name: "Kolmogorov, A.N.; Fomin, S.V. — Elementos de la teoría de funciones y del análisis funcional. Mir, 1975.", caps: ["Integral de Lebesgue", "Espacios L^p", "Análisis funcional"] },
          { name: "Rudin, W. — Principles of Mathematical Analysis. McGraw-Hill, 1976.", caps: ["Integración de Lebesgue"] },
          { name: "Wheeden, R.L.; Zygmund, A. — Measure and Integral. Marcel Dekker, 1977.", caps: ["Medida de Lebesgue", "Integral de Lebesgue", "Espacios L^p"] }
        ],
        bibComp: ["Brézis, H. — Functional Analysis, Sobolev Spaces and Partial Differential Equations. Springer, 2011.", "Dieudonné, J. — Foundations of Modern Analysis. Academic Press, 1969.", "Lieb, E.H.; Loss, M. — Analysis. AMS, 2001.", "Royden, H.L.; Fitzpatrick, P. — Real Analysis. Pearson, 2010.", "Schwartz, L. — Analyse. Hermann, 1967."],
        subsecuentes: ["Análisis Matemático III", "Simulación y Control", "Topología III", "Variable Compleja II"]
      }
    ]
  },
  {
    semestre: 7,
    titulo: "Séptimo Semestre",
    optativas: 4,
    materias: []
  },
  {
    semestre: 8,
    titulo: "Octavo Semestre",
    optativas: 4,
    materias: []
  }
];

// ==================== FUNCIONES AUXILIARES ====================
function getOptativasPool(s) {
  if (s <= 4) return OPTATIVAS_BLOQUE_I;
  if (s <= 6) return OPTATIVAS_BLOQUE_II;
  return OPTATIVAS_BLOQUE_III;
}

function enrichOptativa(opt) {
  const extra = OPT_DATA[opt.name];
  if (!extra) return opt;
  return { ...opt, ...extra };
}
