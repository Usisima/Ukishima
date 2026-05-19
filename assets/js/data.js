// ==================== OPTATIVAS POR SEMESTRE ====================
const OPTATIVAS_I_II = [
  { name: "Álgebra Geométrica", creditos: 10, icon: "assets/images/d17.jpg" },
  { name: "Ciencia, Diversidad e Inclusión", creditos: 8, icon: "assets/images/d18.jpg" },
  { name: "Conjuntos Convexos", creditos: 10, icon: "assets/images/d19.jpg" },
  { name: "Conjuntos y Lógica", creditos: 10, icon: "assets/images/d20.jpg" },
  { name: "Diseño de Sistemas Digitales", creditos: 10, icon: "assets/images/d21.jpg" },
  { name: "Electromagnetismo I", creditos: 12, icon: "assets/images/d22.jpg" },
  { name: "Fenómenos Colectivos", creditos: 12, icon: "assets/images/d23.jpg" },
  { name: "Geometría Moderna II", creditos: 10, icon: "assets/images/d24.jpg" },
  { name: "Geometría Proyectiva", creditos: 10, icon: "assets/images/d25.jpg" },
  { name: "Graficas y Juegos", creditos: 10, icon: "assets/images/d26.jpg" },
  { name: "Introducción a Ciencias de la Computación I", creditos: 10, icon: "assets/images/d27.jpg" },
  { name: "Introducción a Ciencias de la Computación II", creditos: 10, icon: "assets/images/d28.jpg" },
  { name: "Introducción a la Geometría Avanzada", creditos: 10, icon: "assets/images/d29.jpg" },
  { name: "Matemáticas Discretas", creditos: 10, icon: "assets/images/d30.jpg" },
  { name: "Mecánica Vectorial", creditos: 12, icon: "assets/images/d31.jpg" },
  { name: "Probabilidad I", creditos: 10, icon: "assets/images/d32.jpg" },
  { name: "Teoría de los Números I", creditos: 10, icon: "assets/images/d33.jpg" },
  { name: "Teoría de los Números II", creditos: 10, icon: "assets/images/d34.jpg" }
];

const OPTATIVAS_III_IV = [...OPTATIVAS_I_II,
  { name: "Álgebra Moderna II", creditos: 10, icon: "assets/images/d35.jpg" },
  { name: "Análisis de Algoritmos I", creditos: 10, icon: "assets/images/d36.jpg" },
  { name: "Análisis Numérico", creditos: 10, icon: "assets/images/d37.jpg" },
  { name: "Arquitectura de Computadoras", creditos: 10, icon: "assets/images/d38.jpg" },
  { name: "Cálculo de las Variaciones", creditos: 10, icon: "assets/images/d39.jpg" },
  { name: "Didáctica de las Matemáticas", creditos: 10, icon: "assets/images/d40.jpg" },
  { name: "Economía I", creditos: 10, icon: "assets/images/d41.jpg" },
  { name: "Ecuaciones Diferenciales II", creditos: 10, icon: "assets/images/d42.jpg" },
  { name: "Electromagnetismo II", creditos: 12, icon: "assets/images/d43.jpg" },
  { name: "Estadística I", creditos: 10, icon: "assets/images/d44.jpg" },
  { name: "Estadística II", creditos: 10, icon: "assets/images/d45.jpg" },
  { name: "Geometría Diferencial I", creditos: 10, icon: "assets/images/d46.jpg" },
  { name: "Geometría Diferencial II", creditos: 10, icon: "assets/images/d47.jpg" },
  { name: "Historia de las Matemáticas I", creditos: 10, icon: "assets/images/d48.jpg" },
  { name: "Historia de las Matemáticas II", creditos: 10, icon: "assets/images/d49.jpg" },
  { name: "Introducción a la Física Cuántica", creditos: 12, icon: "assets/images/d50.jpg" },
  { name: "Introducción a los Sistemas Complejos", creditos: 12, icon: "assets/images/d51.jpg" },
  { name: "Introducción Matemática a la Mecánica Celeste", creditos: 10, icon: "assets/images/d52.jpg" },
  { name: "Investigación de Operaciones", creditos: 10, icon: "assets/images/d53.jpg" },
  { name: "La Sustentabilidad del Desarrollo", creditos: 12, icon: "assets/images/d54.jpg" },
  { name: "Lenguajes de Programación y sus Paradigmas", creditos: 10, icon: "assets/images/d55.jpg" },
  { name: "Lógica Matemática I", creditos: 10, icon: "assets/images/d56.jpg" },
  { name: "Matemáticas Avanzadas de la Física", creditos: 10, icon: "assets/images/d57.jpg" },
  { name: "Mecánica Analítica", creditos: 12, icon: "assets/images/d58.jpg" },
  { name: "Muestreo", creditos: 10, icon: "assets/images/d59.jpg" },
  { name: "Óptica", creditos: 12, icon: "assets/images/d60.jpg" },
  { name: "Probabilidad II", creditos: 10, icon: "assets/images/d61.jpg" },
  { name: "Programación Lineal", creditos: 10, icon: "assets/images/d62.jpg" },
  { name: "Seminario de Ciencia y Sociedad I", creditos: 12, icon: "assets/images/d63.jpg" },
  { name: "Series de Fourier y Teoría de Sturm Louville", creditos: 10, icon: "assets/images/d64.jpg" },
  { name: "Sistemas Dinámicos Discretos I", creditos: 10, icon: "assets/images/d65.jpg" },
  { name: "Sistemas Operativos", creditos: 10, icon: "assets/images/d66.jpg" },
  { name: "Teoría de Gráficas", creditos: 10, icon: "assets/images/d67.jpg" },
  { name: "Teoría de la Computación", creditos: 10, icon: "assets/images/d68.jpg" },
  { name: "Teoría de la Medida I", creditos: 10, icon: "assets/images/d69.jpg" },
  { name: "Teoría de los Conjuntos I", creditos: 10, icon: "assets/images/d70.jpg" },
  { name: "Termodinámica", creditos: 12, icon: "assets/images/d71.jpg" },
  { name: "Topología I", creditos: 10, icon: "assets/images/d72.jpg" }
];

const OPTATIVAS_V_VI = [
  { name: "Álgebra Moderna II", creditos: 10, icon: "assets/images/d35.jpg" },
  { name: "Análisis de Algoritmos I", creditos: 10, icon: "assets/images/d36.jpg" },
  { name: "Análisis Numérico", creditos: 10, icon: "assets/images/d37.jpg" },
  { name: "Arquitectura de Computadoras", creditos: 10, icon: "assets/images/d38.jpg" },
  { name: "Cálculo de las Variaciones", creditos: 10, icon: "assets/images/d39.jpg" },
  { name: "Didáctica de las Matemáticas", creditos: 10, icon: "assets/images/d40.jpg" },
  { name: "Economía I", creditos: 10, icon: "assets/images/d41.jpg" },
  { name: "Ecuaciones Diferenciales II", creditos: 10, icon: "assets/images/d42.jpg" },
  { name: "Electromagnetismo II", creditos: 12, icon: "assets/images/d43.jpg" },
  { name: "Estadística I", creditos: 10, icon: "assets/images/d44.jpg" },
  { name: "Estadística II", creditos: 10, icon: "assets/images/d45.jpg" },
  { name: "Geometría Diferencial I", creditos: 10, icon: "assets/images/d46.jpg" },
  { name: "Geometría Diferencial II", creditos: 10, icon: "assets/images/d47.jpg" },
  { name: "Historia de las Matemáticas I", creditos: 10, icon: "assets/images/d48.jpg" },
  { name: "Historia de las Matemáticas II", creditos: 10, icon: "assets/images/d49.jpg" },
  { name: "Introducción a la Física Cuántica", creditos: 12, icon: "assets/images/d50.jpg" },
  { name: "Introducción a los Sistemas Complejos", creditos: 12, icon: "assets/images/d51.jpg" },
  { name: "Introducción Matemática a la Mecánica Celeste", creditos: 10, icon: "assets/images/d52.jpg" },
  { name: "Investigación de Operaciones", creditos: 10, icon: "assets/images/d53.jpg" },
  { name: "La Sustentabilidad del Desarrollo", creditos: 12, icon: "assets/images/d54.jpg" },
  { name: "Lenguajes de Programación y sus Paradigmas", creditos: 10, icon: "assets/images/d55.jpg" },
  { name: "Lógica Matemática I", creditos: 10, icon: "assets/images/d56.jpg" },
  { name: "Matemáticas Avanzadas de la Física", creditos: 10, icon: "assets/images/d57.jpg" },
  { name: "Mecánica Analítica", creditos: 12, icon: "assets/images/d58.jpg" },
  { name: "Muestreo", creditos: 10, icon: "assets/images/d59.jpg" },
  { name: "Óptica", creditos: 12, icon: "assets/images/d60.jpg" },
  { name: "Probabilidad II", creditos: 10, icon: "assets/images/d61.jpg" },
  { name: "Programación Lineal", creditos: 10, icon: "assets/images/d62.jpg" },
  { name: "Seminario de Ciencia y Sociedad I", creditos: 12, icon: "assets/images/d63.jpg" },
  { name: "Series de Fourier y Teoría de Sturm Louville", creditos: 10, icon: "assets/images/d64.jpg" },
  { name: "Sistemas Dinámicos Discretos I", creditos: 10, icon: "assets/images/d65.jpg" },
  { name: "Sistemas Operativos", creditos: 10, icon: "assets/images/d66.jpg" },
  { name: "Teoría de Gráficas", creditos: 10, icon: "assets/images/d67.jpg" },
  { name: "Teoría de la Computación", creditos: 10, icon: "assets/images/d68.jpg" },
  { name: "Teoría de la Medida I", creditos: 10, icon: "assets/images/d69.jpg" },
  { name: "Teoría de los Conjuntos I", creditos: 10, icon: "assets/images/d70.jpg" },
  { name: "Termodinámica", creditos: 12, icon: "assets/images/d71.jpg" },
  { name: "Topología I", creditos: 10, icon: "assets/images/d72.jpg" }
];

const OPTATIVAS_VII_VIII = [
  { name: "Álgebra Moderna III", creditos: 10, icon: "assets/images/d73.jpg" },
  { name: "Álgebra Moderna IV", creditos: 10, icon: "assets/images/d74.jpg" },
  { name: "Análisis de Fourier I", creditos: 10, icon: "assets/images/d75.jpg" },
  { name: "Análisis de Fourier II", creditos: 10, icon: "assets/images/d76.jpg" },
  { name: "Análisis de Regresión", creditos: 10, icon: "assets/images/d77.jpg" },
  { name: "Análisis Matemático III", creditos: 10, icon: "assets/images/d78.jpg" },
  { name: "Análisis Matemático IV", creditos: 10, icon: "assets/images/d79.jpg" },
  { name: "Biología Matemática I", creditos: 10, icon: "assets/images/d80.jpg" },
  { name: "Biología Matemática II", creditos: 10, icon: "assets/images/d81.jpg" },
  { name: "Complejidad Computacional", creditos: 10, icon: "assets/images/d82.jpg" },
  { name: "Dinámica de Medios Deformables", creditos: 12, icon: "assets/images/d83.jpg" },
  { name: "Econometría I", creditos: 10, icon: "assets/images/d84.jpg" },
  { name: "Econometría II", creditos: 10, icon: "assets/images/d85.jpg" },
  { name: "Economía II", creditos: 10, icon: "assets/images/d86.jpg" },
  { name: "Ecuaciones Diferenciales III", creditos: 10, icon: "assets/images/d87.jpg" },
  { name: "Ecuaciones Diferenciales Parciales I", creditos: 10, icon: "assets/images/d88.jpg" },
  { name: "Ecuaciones Diferenciales Parciales II", creditos: 10, icon: "assets/images/d89.jpg" },
  { name: "Ecuaciones Integrales I", creditos: 10, icon: "assets/images/d90.jpg" },
  { name: "Estadística Bayesiana", creditos: 10, icon: "assets/images/d91.jpg" },
  { name: "Estadística III", creditos: 10, icon: "assets/images/d92.jpg" },
  { name: "Física Computacional", creditos: 12, icon: "assets/images/d93.jpg" },
  { name: "Física Estadística", creditos: 12, icon: "assets/images/d94.jpg" },
  { name: "Geometría Algebraica I", creditos: 10, icon: "assets/images/d95.jpg" },
  { name: "Geometría Algebraica II", creditos: 10, icon: "assets/images/d96.jpg" },
  { name: "Geometría Diferencial III", creditos: 10, icon: "assets/images/d97.jpg" },
  { name: "Geometría Riemanniana I", creditos: 10, icon: "assets/images/d98.jpg" },
  { name: "Geometría Riemanniana II", creditos: 10, icon: "assets/images/d99.jpg" },
  { name: "Geometría Sumatoria I", creditos: 10, icon: "assets/images/d100.jpg" },
  { name: "Ingeniería de Software", creditos: 10, icon: "assets/images/d101.jpg" },
  { name: "Inteligencia Artificial", creditos: 10, icon: "assets/images/d102.jpg" },
  { name: "Introducción a las Funciones Recursivas y Computabilidad", creditos: 10, icon: "assets/images/d103.jpg" },
  { name: "Lógica Matemática II", creditos: 10, icon: "assets/images/d104.jpg" },
  { name: "Lógica Matemática III", creditos: 10, icon: "assets/images/d105.jpg" },
  { name: "Mecánica Cuántica", creditos: 12, icon: "assets/images/d106.jpg" },
  { name: "Procesos Estocásticos I", creditos: 10, icon: "assets/images/d107.jpg" },
  { name: "Procesos Estocásticos II", creditos: 10, icon: "assets/images/d108.jpg" },
  { name: "Programación Dinámica", creditos: 10, icon: "assets/images/d109.jpg" },
  { name: "Programación Entera", creditos: 10, icon: "assets/images/d110.jpg" },
  { name: "Programación no Lineal", creditos: 10, icon: "assets/images/d111.jpg" },
  { name: "Redes de Computadoras", creditos: 10, icon: "assets/images/d112.jpg" },
  { name: "Relatividad", creditos: 6, icon: "assets/images/d113.jpg" },
  { name: "Seminario de Álgebra A", creditos: 10, icon: "assets/images/d114.jpg" },
  { name: "Seminario de Álgebra B", creditos: 10, icon: "assets/images/d115.jpg" },
  { name: "Seminario de Análisis Combinatorio", creditos: 10, icon: "assets/images/d116.jpg" },
  { name: "Seminario de Análisis Matemático A", creditos: 10, icon: "assets/images/d117.jpg" },
  { name: "Seminario de Análisis Matemático B", creditos: 10, icon: "assets/images/d118.jpg" },
  { name: "Seminario de Ciencia y Sociedad II", creditos: 12, icon: "assets/images/d119.jpg" },
  { name: "Seminario de Estadística A", creditos: 10, icon: "assets/images/d120.jpg" },
  { name: "Seminario de Estadística B", creditos: 10, icon: "assets/images/d121.jpg" },
  { name: "Seminario de Filosofía de la Ciencia I", creditos: 10, icon: "assets/images/d122.jpg" },
  { name: "Seminario de Filosofía de la Ciencia II", creditos: 10, icon: "assets/images/d123.jpg" },
  { name: "Seminario de Filosofía de la Ciencia III", creditos: 10, icon: "assets/images/d124.jpg" },
  { name: "Seminario de Filosofía de la Ciencia IV", creditos: 10, icon: "assets/images/d125.jpg" },
  { name: "Seminario de Geometría A", creditos: 10, icon: "assets/images/d126.jpg" },
  { name: "Seminario de Geometría B", creditos: 10, icon: "assets/images/d127.jpg" },
  { name: "Seminario de Investigación de Operaciones", creditos: 10, icon: "assets/images/d128.jpg" },
  { name: "Seminario de Probabilidad A", creditos: 10, icon: "assets/images/d129.jpg" },
  { name: "Seminario de Probalidad B", creditos: 10, icon: "assets/images/d130.jpg" },
  { name: "Seminario de Temas Selectos de Computación", creditos: 10, icon: "assets/images/d131.jpg" },
  { name: "Seminario de Topología A", creditos: 10, icon: "assets/images/d132.jpg" },
  { name: "Seminario de Topología B", creditos: 10, icon: "assets/images/d133.jpg" },
  { name: "Seminario Filosofía de las Matemáticas", creditos: 10, icon: "assets/images/d134.jpg" },
  { name: "Seminario Matemáticas Aplicadas I", creditos: 10, icon: "assets/images/d135.jpg" },
  { name: "Seminario Matemáticas Aplicadas II", creditos: 10, icon: "assets/images/d136.jpg" },
  { name: "Seminario sobre Enseñanza de las Matemáticas I", creditos: 10, icon: "assets/images/d137.jpg" },
  { name: "Seminario sobre Enseñanza de las Matemáticas II", creditos: 10, icon: "assets/images/d138.jpg" },
  { name: "Seminario sobre Enseñanza de las Matemáticas IV", creditos: 10, icon: "assets/images/d139.jpg" },
  { name: "Seminario Sobre Enseñanza Matemáticas III", creditos: 10, icon: "assets/images/d140.jpg" },
  { name: "Simulación y Control", creditos: 10, icon: "assets/images/d141.jpg" },
  { name: "Sistemas Dinámicos Discretos II", creditos: 10, icon: "assets/images/d142.jpg" },
  { name: "Temas Selectos de Análisis Númerico", creditos: 10, icon: "assets/images/d143.jpg" },
  { name: "Teoría de Colas", creditos: 10, icon: "assets/images/d144.jpg" },
  { name: "Teoría de Inventarios Reemplazo y Mantenimiento", creditos: 10, icon: "assets/images/d145.jpg" },
  { name: "Teoría de Juegos I", creditos: 10, icon: "assets/images/d146.jpg" },
  { name: "Teoría de Juegos II", creditos: 10, icon: "assets/images/d147.jpg" },
  { name: "Teoría de la Medida II", creditos: 10, icon: "assets/images/d148.jpg" },
  { name: "Teoría de las Decisiones", creditos: 10, icon: "assets/images/d149.jpg" },
  { name: "Teoría de las Gráficas II", creditos: 10, icon: "assets/images/d150.jpg" },
  { name: "Teoría de los Conjuntos II", creditos: 10, icon: "assets/images/d151.jpg" },
  { name: "Teoría de los Conjuntos III", creditos: 10, icon: "assets/images/d152.jpg" },
  { name: "Teoría de Redes", creditos: 10, icon: "assets/images/d153.jpg" },
  { name: "Topología Diferencial I", creditos: 10, icon: "assets/images/d154.jpg" },
  { name: "Topología Diferencial II", creditos: 10, icon: "assets/images/d155.jpg" },
  { name: "Topología II", creditos: 10, icon: "assets/images/d156.jpg" },
  { name: "Topología III", creditos: 10, icon: "assets/images/d157.jpg" },
  { name: "Variable Compleja II", creditos: 10, icon: "assets/images/d158.jpg" },
  { name: "Variable Compleja III", creditos: 10, icon: "assets/images/d159.jpg" }
];

// ==================== DATOS ENRIQUECIDOS DE OPTATIVAS ====================
const OPT_DATA = {
  "Probabilidad I": {
    temario: [
      { num: "1", name: "Espacios de probabilidad", horas: 15, subtemas: ["Experimentos aleatorios y espacio muestral", "Álgebra de eventos. Axiomas de probabilidad", "Probabilidad condicional. Independencia", "Regla de la multiplicación. Ley de la probabilidad total", "Fórmula de Bayes"] },
      { num: "2", name: "Variables aleatorias discretas", horas: 18, subtemas: ["Definición y función de masa de probabilidad", "Función de distribución acumulada", "Esperanza matemática y varianza", "Distribuciones: Bernoulli, Binomial, Geométrica, Poisson", "Función generadora de momentos"] },
      { num: "3", name: "Variables aleatorias continuas", horas: 18, subtemas: ["Función de densidad de probabilidad", "Función de distribución acumulada", "Esperanza y varianza", "Distribuciones: Uniforme, Exponencial, Normal, Gamma, Beta"] },
      { num: "4", name: "Vectores aleatorios", horas: 15, subtemas: ["Distribución conjunta, marginal y condicional", "Independencia de variables aleatorias", "Covarianza y correlación", "Suma de variables aleatorias independientes"] },
      { num: "5", name: "Convergencia y leyes límite", horas: 14, subtemas: ["Ley de los grandes números", "Teorema central del límite", "Aproximación normal a la binomial"] }
    ],
    bibBasicas: [
      { name: "Feller, W. — An Introduction to Probability Theory and Its Applications, Vol. I. Wiley, 1968.", caps: ["Espacios de probabilidad", "Variables aleatorias discretas", "Variables aleatorias continuas", "Vectores aleatorios", "Leyes límite"] },
      { name: "Chung, K.L. — A Course in Probability Theory. Academic Press, 2001.", caps: ["Probabilidad", "Variables aleatorias", "Distribuciones", "Independencia", "Convergencia"] }
    ],
    bibComp: ["Ross, S. — A First Course in Probability. Prentice Hall, 2010.", "Billingsley, P. — Probability and Measure. Wiley, 1995."],
    subsecuentes: ["Probabilidad II", "Estadística I", "Procesos Estocásticos I"]
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
  "Teoría de Gráficas": {
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
    subsecuentes: ["Teoría de Gráficas", "Análisis de Algoritmos I", "Teoría de la Computación", "Combinatoria"]
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
        icon: "assets/images/d2.jpg",
        temario: [
          { num: "1", name: "Números reales", horas: 14, subtemas: ["Axiomas de campo y de orden", "Axioma del supremo", "Propiedades del supremo e ínfimo", "Densidad de Q en R"] },
          { num: "2", name: "Sucesiones de números reales", horas: 16, subtemas: ["Definición de límite de sucesión", "Propiedades algebraicas de los límites", "Teorema del emparedado", "Sucesiones monótonas acotadas", "Sucesiones de Cauchy"] },
          { num: "3", name: "Límite y continuidad de funciones", horas: 18, subtemas: ["Definición épsilon-delta de límite", "Propiedades algebraicas del límite", "Límites laterales", "Funciones continuas en un punto e intervalo", "Teorema del valor intermedio y teorema del valor extremo"] },
          { num: "4", name: "Diferenciación", horas: 18, subtemas: ["Definición de derivada", "Reglas de derivación", "Regla de la cadena", "Teorema del valor medio de Lagrange", "Regla de L'Hôpital", "Teorema de Taylor"] },
          { num: "5", name: "Integración de Riemann", horas: 18, subtemas: ["Sumas de Riemann y la integral definida", "Propiedades de la integral", "Teorema fundamental del cálculo", "Técnicas de integración: sustitución, partes", "Aplicaciones: área, volumen, longitud de arco"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Calculus, Vol. I. Wiley, 1967.", caps: ["Números reales", "Sucesiones", "Límites y continuidad", "Diferenciación", "Integración"] },
          { name: "Spivak, M. — Calculus. Publish or Perish, 2008.", caps: ["Números reales", "Funciones y límites", "Derivadas", "Integrales"] }
        ],
        bibComp: ["Rudin, W. — Principles of Mathematical Analysis. McGraw-Hill, 1976.", "Stewart, J. — Calculus: Early Transcendentals. Cengage, 2015."],
        subsecuentes: ["Cálculo Diferencial e Integral II", "Geometría Analítica II"]
      },
      {
        id: "geo_analitica_1",
        name: "Geometría Analítica I",
        clave: "0244",
        creditos: 10,
        icon: "assets/images/d3.jpg",
        temario: [
          { num: "1", name: "El plano coordenado", horas: 10, subtemas: ["Sistema cartesiano de coordenadas", "Distancia entre dos puntos y punto medio", "Pendiente de una recta", "Ecuaciones de la recta"] },
          { num: "2", name: "La circunferencia", horas: 10, subtemas: ["Ecuación ordinaria y general de la circunferencia", "Circunferencia que pasa por tres puntos", "Posiciones relativas de recta y circunferencia", "Potencia de un punto"] },
          { num: "3", name: "La parábola", horas: 12, subtemas: ["Definición como lugar geométrico", "Ecuación ordinaria con vértice en el origen", "Ecuación con vértice en un punto arbitrario", "Tangente a la parábola"] },
          { num: "4", name: "La elipse", horas: 12, subtemas: ["Definición y elementos de la elipse", "Ecuación ordinaria", "Ecuación con centro desplazado", "Elipse y recta"] },
          { num: "5", name: "La hipérbola", horas: 12, subtemas: ["Definición y elementos de la hipérbola", "Ecuación ordinaria", "Asíntotas", "Hipérbola equilátera"] },
          { num: "6", name: "Cónicas en forma general", horas: 8, subtemas: ["Ecuación general de segundo grado en dos variables", "Identificación de cónicas", "Rotación de ejes y eliminación del término xy"] }
        ],
        bibBasicas: [
          { name: "Lehmann, C.H. — Geometría Analítica. Limusa, 2005.", caps: ["Plano coordenado", "La circunferencia", "La parábola", "La elipse", "La hipérbola"] },
          { name: "Fuller, G.; Tarwater, D. — Analytic Geometry. Addison-Wesley, 1992.", caps: ["Rectas y circunferencias", "Cónicas", "Ecuación general"] }
        ],
        bibComp: ["Riddle, D.F. — Analytic Geometry. Wadsworth, 1996.", "Protter, M.H.; Morrey, C.B. — College Calculus with Analytic Geometry. Addison-Wesley, 1977."],
        subsecuentes: ["Geometría Analítica II", "Cálculo Diferencial e Integral II", "Geometría Moderna I"]
      },
      {
        id: "geo_moderna_1",
        name: "Geometría Moderna I",
        clave: "0249",
        creditos: 10,
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
        icon: "assets/images/d4.jpg",
        temario: [
          { num: "1", name: "Grupos", horas: 16, subtemas: ["Definición y ejemplos de grupos", "Subgrupos y criterios de subgrupo", "Cosets y teorema de Lagrange", "Grupos cíclicos", "Grupos de permutaciones y ciclos"] },
          { num: "2", name: "Homomorfismos de grupos", horas: 14, subtemas: ["Definición de homomorfismo e isomorfismo", "Núcleo e imagen", "Primer teorema de isomorfismo", "Grupos cociente"] },
          { num: "3", name: "Subgrupos normales", horas: 12, subtemas: ["Subgrupos normales y grupos cociente", "Segundo y tercer teoremas de isomorfismo", "Grupos simples: A_n para n ≥ 5"] },
          { num: "4", name: "Anillos", horas: 14, subtemas: ["Definición y ejemplos de anillos", "Dominios enteros y cuerpos", "Ideales y anillos cociente", "Homomorfismos de anillos"] },
          { num: "5", name: "Polinomios", horas: 14, subtemas: ["Anillo de polinomios sobre un dominio", "Algoritmo de división para polinomios", "Factorización en dominios de factorización única", "Criterios de irreductibilidad"] }
        ],
        bibBasicas: [
          { name: "Herstein, I.N. — Topics in Algebra. Wiley, 1975.", caps: ["Grupos", "Subgrupos normales", "Anillos", "Polinomios"] },
          { name: "Hungerford, T.W. — Abstract Algebra: An Introduction. Brooks/Cole, 2013.", caps: ["Grupos y homomorfismos", "Grupos cociente", "Anillos e ideales", "Polinomios"] }
        ],
        bibComp: ["Fraleigh, J.B. — A First Course in Abstract Algebra. Pearson, 2014.", "Dummit, D.S.; Foote, R.M. — Abstract Algebra. Wiley, 2004."],
        subsecuentes: ["Álgebra Moderna I", "Álgebra Lineal I"]
      },
      {
        id: "calculo_2",
        name: "Cálculo Diferencial e Integral II",
        clave: "0092",
        creditos: 18,
        icon: "assets/images/d5.jpg",
        temario: [
          { num: "1", name: "Sucesiones y series", horas: 16, subtemas: ["Series numéricas: convergencia y divergencia", "Series de términos positivos: criterio de comparación, de la integral, de la razón y de la raíz", "Series alternadas y convergencia absoluta", "Series de potencias: radio e intervalo de convergencia"] },
          { num: "2", name: "Series de Taylor y Mac Laurin", horas: 12, subtemas: ["Fórmula de Taylor con resto", "Series de Taylor de funciones elementales", "Aplicaciones: cálculo de límites y aproximaciones"] },
          { num: "3", name: "Funciones de varias variables", horas: 18, subtemas: ["Espacio R^n: distancia y topología básica", "Límites y continuidad de funciones vectoriales", "Derivadas parciales", "Diferenciabilidad y plano tangente", "Regla de la cadena para varias variables"] },
          { num: "4", name: "Optimización diferencial", horas: 14, subtemas: ["Gradiente y derivada direccional", "Máximos y mínimos de funciones de varias variables", "Criterio de la segunda derivada (Hessiana)", "Multiplicadores de Lagrange"] },
          { num: "5", name: "Integrales múltiples", horas: 20, subtemas: ["Integral doble sobre rectángulos y regiones generales", "Integral de Riemann en R^n", "Teorema de Fubini", "Cambio de variable en integrales dobles y triples: coordenadas polares, cilíndricas y esféricas", "Aplicaciones: volumen, masa, centros de masa"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Calculus, Vol. II. Wiley, 1969.", caps: ["Series", "Funciones de varias variables", "Integrales múltiples"] },
          { name: "Marsden, J.E.; Tromba, A. — Vector Calculus. W.H. Freeman, 2011.", caps: ["Diferenciación en varias variables", "Optimización", "Integrales múltiples"] }
        ],
        bibComp: ["Rudin, W. — Principles of Mathematical Analysis. McGraw-Hill, 1976.", "Fleming, W. — Functions of Several Variables. Springer, 1977."],
        subsecuentes: ["Cálculo Diferencial e Integral III", "Análisis Matemático I"]
      },
      {
        id: "geo_analitica_2",
        name: "Geometría Analítica II",
        clave: "0245",
        creditos: 10,
        icon: "assets/images/d6.jpg",
        temario: [
          { num: "1", name: "Vectores en R² y R³", horas: 12, subtemas: ["Vectores: adición, producto por escalar", "Producto punto y producto cruz", "Proyección y ángulo entre vectores", "Aplicaciones geométricas"] },
          { num: "2", name: "Rectas y planos en R³", horas: 12, subtemas: ["Ecuación vectorial y paramétrica de la recta", "Ecuaciones de planos en el espacio", "Posiciones relativas de rectas y planos", "Distancias: de punto a recta, punto a plano"] },
          { num: "3", name: "Superficies cuádricas", horas: 14, subtemas: ["Clasificación de cuádricas: elipsoides, hiperboloides de una y dos hojas, paraboloides elíptico e hiperbólico, cono", "Ecuación en forma canónica", "Trazas e intersecciones con planos"] },
          { num: "4", name: "Coordenadas cilíndricas y esféricas", horas: 8, subtemas: ["Coordenadas cilíndricas y su relación con cartesianas", "Coordenadas esféricas", "Representación de superficies en coordenadas curvilíneas"] },
          { num: "5", name: "Curvas y superficies parametrizadas", horas: 10, subtemas: ["Curvas parametrizadas en R³", "Superficies parametrizadas", "Plano tangente y normal a curvas y superficies"] }
        ],
        bibBasicas: [
          { name: "Lehmann, C.H. — Geometría Analítica. Limusa, 2005.", caps: ["Vectores", "Rectas y planos en el espacio", "Superficies cuádricas"] },
          { name: "Anton, H.; Rorres, C. — Elementary Linear Algebra. Wiley, 2010.", caps: ["Vectores en R^n", "Producto interior y producto vectorial"] }
        ],
        bibComp: ["Marsden, J.E.; Tromba, A. — Vector Calculus. W.H. Freeman, 2011.", "Pogorelov, A.V. — Analytic Geometry. MIR Publishers, 1980."],
        subsecuentes: ["Cálculo Diferencial e Integral III", "Álgebra Lineal I", "Geometría Diferencial I"]
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
        icon: "assets/images/d7.jpg",
        temario: [
          { num: "1", name: "Espacios vectoriales", horas: 16, subtemas: ["Definición y axiomas de espacio vectorial", "Subespacios vectoriales", "Combinaciones lineales y generadores", "Dependencia e independencia lineal", "Base y dimensión"] },
          { num: "2", name: "Transformaciones lineales", horas: 16, subtemas: ["Definición y ejemplos", "Núcleo e imagen", "Teorema de la dimensión (rango-nulidad)", "Composición e inversibilidad", "Isomorfismos de espacios vectoriales"] },
          { num: "3", name: "Matrices y sistemas de ecuaciones lineales", horas: 16, subtemas: ["Operaciones con matrices", "Eliminación gaussiana y forma escalonada reducida", "Solución de sistemas de ecuaciones lineales", "Rango de una matriz", "Matrices invertibles y sus propiedades"] },
          { num: "4", name: "Determinantes", horas: 10, subtemas: ["Definición por cofactores", "Propiedades de los determinantes", "Expansión de Laplace", "Regla de Cramer y fórmula de la inversa"] },
          { num: "5", name: "Valores y vectores propios", horas: 14, subtemas: ["Polinomio característico", "Cálculo de valores y vectores propios", "Matrices diagonalizables", "Teorema de Cayley-Hamilton"] }
        ],
        bibBasicas: [
          { name: "Strang, G. — Linear Algebra and Its Applications. Cengage, 2006.", caps: ["Espacios vectoriales", "Transformaciones lineales", "Matrices", "Determinantes", "Valores propios"] },
          { name: "Axler, S. — Linear Algebra Done Right. Springer, 2015.", caps: ["Espacios vectoriales", "Transformaciones lineales", "Diagonalización"] }
        ],
        bibComp: ["Hoffman, K.; Kunze, R. — Linear Algebra. Prentice Hall, 1971.", "Shilov, G.E. — Linear Algebra. Dover, 1977."],
        subsecuentes: ["Álgebra Lineal II", "Álgebra Moderna I", "Análisis Matemático I"]
      },
      {
        id: "calculo_3",
        name: "Cálculo Diferencial e Integral III",
        clave: "0093",
        creditos: 18,
        icon: "assets/images/d8.jpg",
        temario: [
          { num: "1", name: "Diferenciación en R^n", horas: 18, subtemas: ["Derivada de una función de R^n en R^m como transformación lineal", "Matriz jacobiana", "Regla de la cadena general", "Teorema de la función implícita", "Teorema de la función inversa"] },
          { num: "2", name: "Integrales de línea", horas: 16, subtemas: ["Curvas en R^n y parametrizaciones", "Integral de línea de funciones escalares", "Integral de línea de campos vectoriales", "Trabajo y circulación"] },
          { num: "3", name: "Campos conservativos", horas: 12, subtemas: ["Condición de conservatividad", "Función potencial", "Independencia de la trayectoria", "Conjuntos simplemente conexos"] },
          { num: "4", name: "Integrales de superficie", horas: 16, subtemas: ["Superficies orientadas", "Integral de superficie de funciones escalares (área)", "Integral de flujo de campos vectoriales"] },
          { num: "5", name: "Teoremas integrales del cálculo vectorial", horas: 18, subtemas: ["Teorema de Green en el plano", "Teorema de la divergencia de Gauss-Ostrogradski", "Teorema de Stokes", "Aplicaciones en física y geometría"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Calculus, Vol. II. Wiley, 1969.", caps: ["Diferenciación en R^n", "Integrales de línea y de superficie", "Teoremas de Green, Gauss y Stokes"] },
          { name: "Marsden, J.E.; Tromba, A. — Vector Calculus. W.H. Freeman, 2011.", caps: ["Teorema de la función inversa e implícita", "Integrales de línea", "Integrales de superficie", "Teoremas integrales"] }
        ],
        bibComp: ["Fleming, W. — Functions of Several Variables. Springer, 1977.", "Spivak, M. — Calculus on Manifolds. Benjamin/Cummings, 1965."],
        subsecuentes: ["Cálculo Diferencial e Integral IV", "Ecuaciones Diferenciales I", "Análisis Matemático I"]
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
        icon: "assets/images/d9.jpg",
        temario: [
          { num: "1", name: "Formas bilineales y cuadráticas", horas: 14, subtemas: ["Formas bilineales y sus matrices", "Formas cuadráticas y clasificación por la signatura", "Ley de inercia de Sylvester", "Formas cuadráticas definidas positivas"] },
          { num: "2", name: "Espacios con producto interior", horas: 16, subtemas: ["Definición y ejemplos de producto interior", "Norma inducida y desigualdad de Cauchy-Schwarz", "Ortogonalidad y complemento ortogonal", "Proceso de ortogonalización de Gram-Schmidt", "Bases ortonormales"] },
          { num: "3", name: "Operadores en espacios con producto interior", horas: 14, subtemas: ["Operador adjunto", "Operadores autoadjuntos (simétricos y hermitianos)", "Operadores normales y unitarios", "Teorema espectral para operadores autoadjuntos"] },
          { num: "4", name: "Formas canónicas", horas: 16, subtemas: ["Descomposición de la identidad en suma de proyecciones", "Forma normal de Jordan", "Polinomio mínimo y su relación con el de Jordan", "Aplicaciones: potencias de matrices, funciones de matrices"] },
          { num: "5", name: "Aplicaciones del álgebra lineal", horas: 10, subtemas: ["Descomposición en valores singulares (SVD)", "Mínimos cuadrados y pseudoinversa de Moore-Penrose", "Aplicaciones a compresión de datos y estadística"] }
        ],
        bibBasicas: [
          { name: "Axler, S. — Linear Algebra Done Right. Springer, 2015.", caps: ["Productos interiores", "Operadores autoadjuntos", "Operadores normales y el teorema espectral", "Forma de Jordan"] },
          { name: "Hoffman, K.; Kunze, R. — Linear Algebra. Prentice Hall, 1971.", caps: ["Formas bilineales", "Espacios con producto interior", "Formas canónicas"] }
        ],
        bibComp: ["Horn, R.A.; Johnson, C.R. — Matrix Analysis. Cambridge University Press, 2013.", "Gelfand, I.M. — Lectures on Linear Algebra. Dover, 1989."],
        subsecuentes: ["Álgebra Moderna I", "Análisis Matemático I", "Geometría Diferencial I"]
      },
      {
        id: "calculo_4",
        name: "Cálculo Diferencial e Integral IV",
        clave: "0094",
        creditos: 18,
        icon: "assets/images/d10.jpg",
        temario: [
          { num: "1", name: "Sucesiones y series de funciones", horas: 18, subtemas: ["Convergencia puntual y uniforme de sucesiones de funciones", "Propiedades de la convergencia uniforme: continuidad, integración, diferenciación", "Series de funciones y su convergencia uniforme", "Series de potencias: convergencia y propiedades analíticas"] },
          { num: "2", name: "Series de Fourier", horas: 20, subtemas: ["Funciones periódicas y el espacio L²", "Coeficientes de Fourier: senos y cosenos", "Convergencia puntual y uniforme de series de Fourier", "Desigualdad de Bessel e identidad de Parseval", "Series de Fourier de senos y cosenos para funciones en [0, π]"] },
          { num: "3", name: "Funciones de variable compleja", horas: 20, subtemas: ["Números complejos y el plano complejo", "Funciones analíticas: ecuaciones de Cauchy-Riemann", "Funciones elementales: exponencial, logaritmo, trigonométricas", "Integración compleja y teorema de Cauchy-Goursat", "Fórmula integral de Cauchy y consecuencias"] },
          { num: "4", name: "Series de Laurent y singularidades", horas: 14, subtemas: ["Series de Taylor para funciones analíticas", "Series de Laurent", "Clasificación de singularidades aisladas", "Residuos y teorema de los residuos", "Cálculo de integrales reales mediante residuos"] }
        ],
        bibBasicas: [
          { name: "Apostol, T.M. — Mathematical Analysis. Addison-Wesley, 1974.", caps: ["Sucesiones y series de funciones", "Series de Fourier"] },
          { name: "Churchill, R.V.; Brown, J.W. — Complex Variables and Applications. McGraw-Hill, 2009.", caps: ["Funciones analíticas", "Integración compleja", "Series de Laurent", "Residuos"] }
        ],
        bibComp: ["Rudin, W. — Real and Complex Analysis. McGraw-Hill, 1987.", "Ahlfors, L.V. — Complex Analysis. McGraw-Hill, 1979."],
        subsecuentes: ["Variable Compleja I", "Análisis Matemático I", "Ecuaciones Diferenciales I"]
      },
      {
        id: "ecuaciones_diferenciales_1",
        name: "Ecuaciones Diferenciales I",
        clave: "0162",
        creditos: 10,
        icon: "assets/images/d11.jpg",
        temario: [
          { num: "1", name: "Introducción y ecuaciones de primer orden", horas: 16, subtemas: ["Clasificación de EDOs: orden, linealidad", "Ecuaciones de variables separables", "Ecuaciones lineales de primer orden: factor integrante", "Ecuaciones exactas y factor integrante general", "Ecuaciones de Bernoulli y Ricatti"] },
          { num: "2", name: "Ecuaciones lineales de orden superior", horas: 18, subtemas: ["Estructura de la solución general", "Ecuaciones homogéneas con coeficientes constantes", "Ecuaciones no homogéneas: coeficientes indeterminados", "Variación de parámetros", "Ecuación de Cauchy-Euler"] },
          { num: "3", name: "Transformada de Laplace", horas: 16, subtemas: ["Definición y propiedades básicas", "Transformada de la derivada y la integral", "Función de Heaviside y función delta de Dirac", "Convolución y teorema de la convolución", "Solución de EDOs y sistemas con transformada de Laplace"] },
          { num: "4", name: "Sistemas de EDOs lineales con coeficientes constantes", horas: 14, subtemas: ["Planteamiento matricial", "Solución mediante valores y vectores propios", "Casos de valores propios complejos y repetidos", "Solución con condiciones iniciales"] },
          { num: "5", name: "Introducción a ecuaciones diferenciales no lineales", horas: 10, subtemas: ["Campo de pendientes y diagrama de fase", "Puntos de equilibrio y su clasificación elemental", "Análisis cualitativo de soluciones"] }
        ],
        bibBasicas: [
          { name: "Boyce, W.E.; DiPrima, R.C. — Elementary Differential Equations and Boundary Value Problems. Wiley, 2012.", caps: ["Ecuaciones de primer orden", "Ecuaciones lineales de orden superior", "Transformada de Laplace", "Sistemas de EDOs"] },
          { name: "Simmons, G.F. — Differential Equations with Applications and Historical Notes. CRC Press, 2016.", caps: ["EDOs de primer orden", "Ecuaciones lineales", "Sistemas de EDOs", "Transformada de Laplace"] }
        ],
        bibComp: ["Tenenbaum, M.; Pollard, H. — Ordinary Differential Equations. Dover, 1985.", "Arnold, V.I. — Ordinary Differential Equations. MIT Press, 1978."],
        subsecuentes: ["Ecuaciones Diferenciales II", "Análisis Matemático I", "Cálculo Diferencial e Integral IV"]
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
        icon: "assets/images/d12.jpg",
        temario: [
          { num: "1", name: "Grupos: teoría avanzada", horas: 16, subtemas: ["Acciones de grupos en conjuntos", "Ecuación de clases", "Teoremas de Sylow: existencia, conjugación y número", "p-grupos y grupos resolubles", "Clasificación de grupos abelianos finitos"] },
          { num: "2", name: "Anillos: teoría avanzada", horas: 16, subtemas: ["Ideales primos y maximales", "Anillos de factores y el teorema chino del residuo para anillos", "Anillos noetherianos y artinianos", "Módulos sobre anillos"] },
          { num: "3", name: "Teoría de campos", horas: 18, subtemas: ["Extensiones de campos: algebraicas y trascendentes", "Polinomio mínimo", "Cuerpos de descomposición", "Extensiones normales y separables"] },
          { num: "4", name: "Teoría de Galois", horas: 18, subtemas: ["Grupo de Galois de una extensión", "Correspondencia de Galois", "Extensiones abelianas y radicales", "Resolubilidad de ecuaciones polinomiales por radicales", "Insolvabilidad del grupo S_5"] }
        ],
        bibBasicas: [
          { name: "Dummit, D.S.; Foote, R.M. — Abstract Algebra. Wiley, 2004.", caps: ["Acciones de grupos", "Teoremas de Sylow", "Anillos noetherianos", "Teoría de campos", "Teoría de Galois"] },
          { name: "Lang, S. — Algebra. Springer, 2002.", caps: ["Grupos", "Anillos y módulos", "Campos y teoría de Galois"] }
        ],
        bibComp: ["Hungerford, T.W. — Algebra. Springer, 1974.", "Jacobson, N. — Basic Algebra I. Dover, 2009."],
        subsecuentes: ["Álgebra Moderna II", "Geometría Algebraica I"]
      },
      {
        id: "analisis_matematico_1",
        name: "Análisis Matemático I",
        clave: "0009",
        creditos: 10,
        icon: "assets/images/d13.jpg",
        temario: [
          { num: "1", name: "Topología del espacio métrico R^n", horas: 16, subtemas: ["Espacios métricos: definición y ejemplos", "Conjuntos abiertos, cerrados, compactos y conexos en R^n", "Completud y principio de contracción de Banach", "Teorema de Bolzano-Weierstrass"] },
          { num: "2", name: "Continuidad uniforme y funciones de variación acotada", horas: 14, subtemas: ["Continuidad uniforme y sus propiedades", "Funciones de variación acotada", "Funciones absolutamente continuas"] },
          { num: "3", name: "La integral de Riemann-Stieltjes", horas: 16, subtemas: ["Integral de Riemann-Stieltjes: definición y existencia", "Propiedades de la integral de Riemann-Stieltjes", "Funciones de variación acotada como integradoras", "Relación con la integral de Riemann"] },
          { num: "4", name: "Sucesiones y series de funciones", horas: 14, subtemas: ["Convergencia puntual y uniforme", "Criterio de Weierstrass", "Continuidad, derivabilidad e integrabilidad de límites uniformes", "Aproximación de Stone-Weierstrass"] },
          { num: "5", name: "Funciones de varias variables: diferenciabilidad avanzada", horas: 16, subtemas: ["Diferenciabilidad y la derivada como transformación lineal", "Derivadas parciales de orden superior y teorema de Clairaut", "Teorema de la función implícita y la función inversa (demostración)", "Extremos condicionados: multiplicadores de Lagrange"] }
        ],
        bibBasicas: [
          { name: "Rudin, W. — Principles of Mathematical Analysis. McGraw-Hill, 1976.", caps: ["Espacios métricos", "Continuidad", "Integración de Riemann-Stieltjes", "Sucesiones y series de funciones"] },
          { name: "Apostol, T.M. — Mathematical Analysis. Addison-Wesley, 1974.", caps: ["Topología de R^n", "Continuidad uniforme", "Integral de Riemann-Stieltjes", "Sucesiones de funciones"] }
        ],
        bibComp: ["Royden, H.L.; Fitzpatrick, P. — Real Analysis. Pearson, 2010.", "Munkres, J.R. — Analysis on Manifolds. Westview Press, 1991."],
        subsecuentes: ["Análisis Matemático II", "Teoría de la Medida I", "Variable Compleja I"]
      },
      {
        id: "variable_compleja_1",
        name: "Variable Compleja I",
        clave: "0840",
        creditos: 10,
        icon: "assets/images/d14.jpg",
        temario: [
          { num: "1", name: "Números complejos y funciones complejas", horas: 12, subtemas: ["El cuerpo de los números complejos", "Representación polar y fórmula de Euler", "Raíces de la unidad", "Funciones complejas: definición y ejemplos elementales"] },
          { num: "2", name: "Funciones analíticas", horas: 16, subtemas: ["Derivada compleja", "Condiciones de Cauchy-Riemann", "Funciones armónicas y su relación con las analíticas", "Funciones elementales: exponencial, logaritmo, trigonométricas e hiperbólicas", "Funciones multivaluadas y ramas"] },
          { num: "3", name: "Integración compleja", horas: 18, subtemas: ["Integrales sobre curvas en el plano complejo", "Teorema de Cauchy para dominios simplemente conexos", "Fórmulas integrales de Cauchy", "Consecuencias: principio del módulo máximo, teorema de Liouville, teorema fundamental del álgebra"] },
          { num: "4", name: "Series de potencias y analítica", horas: 14, subtemas: ["Convergencia de series de potencias en C", "Series de Taylor de funciones analíticas", "Radio de convergencia y singularidades", "Desarrollos en series de funciones elementales"] },
          { num: "5", name: "Singularidades aisladas y residuos", horas: 16, subtemas: ["Series de Laurent", "Clasificación de singularidades aisladas: evitables, polos y esenciales", "Teorema de Casorati-Weierstrass", "Residuos y teorema de los residuos", "Aplicación al cálculo de integrales reales"] }
        ],
        bibBasicas: [
          { name: "Ahlfors, L.V. — Complex Analysis. McGraw-Hill, 1979.", caps: ["Funciones analíticas", "Integración compleja", "Series de Laurent", "Residuos"] },
          { name: "Conway, J.B. — Functions of One Complex Variable. Springer, 1978.", caps: ["Funciones analíticas", "Integración compleja", "Teorema de Cauchy", "Singularidades y residuos"] }
        ],
        bibComp: ["Rudin, W. — Real and Complex Analysis. McGraw-Hill, 1987.", "Needham, T. — Visual Complex Analysis. Oxford University Press, 1997."],
        subsecuentes: ["Variable Compleja II", "Análisis de Fourier I", "Ecuaciones Diferenciales Parciales I"]
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
        icon: "assets/images/d15.jpg",
        temario: [
          { num: "1", name: "Medida de Lebesgue en R", horas: 18, subtemas: ["Medida exterior de Lebesgue", "Conjuntos medibles Lebesgue", "Propiedades de la medida de Lebesgue: σ-aditividad, regularidad", "Conjuntos de Cantor y ejemplos de conjuntos no medibles"] },
          { num: "2", name: "La integral de Lebesgue", horas: 20, subtemas: ["Funciones medibles y simples", "Integral de Lebesgue de funciones no negativas", "Integral de Lebesgue de funciones integrables", "Teorema de convergencia monótona (Beppo Levi)", "Lema de Fatou y teorema de convergencia dominada de Lebesgue", "Relación con la integral de Riemann"] },
          { num: "3", name: "Espacios L^p", horas: 16, subtemas: ["Desigualdades de Hölder y Minkowski", "Espacios L^p como espacios de Banach", "Dualidad de L^p y L^q", "El espacio L²: estructura de espacio de Hilbert"] },
          { num: "4", name: "Diferenciación e integración", horas: 16, subtemas: ["Funciones de variación acotada", "Funciones absolutamente continuas", "Teorema de Radon-Nikodym", "Derivada de Radon-Nikodym"] }
        ],
        bibBasicas: [
          { name: "Royden, H.L.; Fitzpatrick, P. — Real Analysis. Pearson, 2010.", caps: ["Medida de Lebesgue", "Integral de Lebesgue", "Espacios L^p", "Diferenciación e integración"] },
          { name: "Folland, G.B. — Real Analysis: Modern Techniques and Their Applications. Wiley, 1999.", caps: ["Medida", "Integración", "Espacios L^p"] }
        ],
        bibComp: ["Rudin, W. — Real and Complex Analysis. McGraw-Hill, 1987.", "Halmos, P.R. — Measure Theory. Springer, 1974."],
        subsecuentes: ["Teoría de la Medida I", "Análisis de Fourier I", "Procesos Estocásticos I"]
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
  if (s <= 2) return OPTATIVAS_I_II;
  if (s <= 4) return OPTATIVAS_III_IV;
  if (s <= 6) return OPTATIVAS_V_VI;
  return OPTATIVAS_VII_VIII;
}

function enrichOptativa(opt) {
  const extra = OPT_DATA[opt.name];
  if (!extra) return opt;
  return { ...opt, ...extra };
}
