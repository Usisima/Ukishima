// ==================== DATOS DE OPTATIVAS ====================
const OPTATIVAS_I_II = [
  { name: "Álgebra Geométrica", creditos: 10, icon: "/assets/images/d17.jpg" },
  { name: "Ciencia, Diversidad e Inclusión", creditos: 8, icon: "../assets/images/d18.jpg" },
  { name: "Conjuntos Convexos", creditos: 10, icon: "../assets/images/d19.jpg" },
  { name: "Conjuntos y Lógica", creditos: 10, icon: "../assets/images/d20.jpg" },
  { name: "Diseño de Sistemas Digitales", creditos: 10, icon: "../assets/images/d21.jpg" },
  { name: "Electromagnetismo I", creditos: 12, icon: "../assets/images/d22.jpg" },
  { name: "Fenómenos Colectivos", creditos: 12, icon: "../assets/images/d23.jpg" },
  { name: "Geometría Moderna II", creditos: 10, icon: "../assets/images/d24.jpg" },
  { name: "Geometría Proyectiva", creditos: 10, icon: "../assets/images/d25.jpg" },
  { name: "Graficas y Juegos", creditos: 10, icon: "../assets/images/d26.jpg" },
  { name: "Introducción a Ciencias de la Computación I", creditos: 10, icon: "../assets/images/d27.jpg" },
  { name: "Introducción a Ciencias de la Computación II", creditos: 10, icon: "../assets/images/d28.jpg" },
  { name: "Introducción a la Geometría Avanzada", creditos: 10, icon: "../assets/images/d29.jpg" },
  { name: "Matemáticas Discretas", creditos: 10, icon: "../assets/images/d30.jpg" },
  { name: "Mecánica Vectorial", creditos: 12, icon: "../assets/images/d31.jpg" },
  { name: "Probabilidad I", creditos: 10, icon: "../assets/images/d32.jpg" },
  { name: "Teoría de los Números I", creditos: 10, icon: "../assets/images/d33.jpg" },
  { name: "Teoría de los Números II", creditos: 10, icon: "../assets/images/d34.jpg" }
];

const OPTATIVAS_III_IV = [...OPTATIVAS_I_II];
const OPTATIVAS_V_VI = [...OPTATIVAS_I_II];
const OPTATIVAS_VII_VIII = [...OPTATIVAS_I_II]; // Simplificado para el ejemplo

// ==================== PLAN DE ESTUDIOS (ESQUELETO) ====================
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
        icon: "../assets/images/d1.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      },
      {
        id: "calculo_1",
        name: "Cálculo Diferencial e Integral I",
        clave: "0091",
        creditos: 18,
        icon: "../assets/images/d2.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      },
      {
        id: "geo_analitica_1",
        name: "Geometría Analítica I",
        clave: "0244",
        creditos: 10,
        icon: "../assets/images/d3.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      },
      {
        id: "geo_moderna_1",
        name: "Geometría Moderna I",
        clave: "0249",
        creditos: 10,
        icon: "../assets/images/d16.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
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
        icon: "../assets/images/d4.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      },
      {
        id: "calculo_2",
        name: "Cálculo Diferencial e Integral II",
        clave: "0092",
        creditos: 18,
        icon: "../assets/images/d5.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      },
      {
        id: "geo_analitica_2",
        name: "Geometría Analítica II",
        clave: "0245",
        creditos: 10,
        icon: "../assets/images/d6.jpg",
        temario: [],
        bibBasicas: [],
        bibComp: [],
        subsecuentes: []
      }
    ]
  }
  // ... Agrega el resto de semestres 3-8 con la misma estructura vacía
];

// ==================== FUNCIONES AUXILIARES ====================
function getOptativasPool(semestre) {
  if (semestre <= 2) return OPTATIVAS_I_II;
  if (semestre <= 4) return OPTATIVAS_III_IV;
  if (semestre <= 6) return OPTATIVAS_V_VI;
  return OPTATIVAS_VII_VIII;
}

// Exponer globalmente para usar en otros scripts
window.OPTATIVAS_I_II = OPTATIVAS_I_II;
window.OPTATIVAS_III_IV = OPTATIVAS_III_IV;
window.OPTATIVAS_V_VI = OPTATIVAS_V_VI;
window.OPTATIVAS_VII_VIII = OPTATIVAS_VII_VIII;
window.CURRICULUM = CURRICULUM;
window.TOTAL_CREDITOS = TOTAL_CREDITOS;
window.getOptativasPool = getOptativasPool;