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
  // ... (copia todos los objetos adicionales del original)
];

const OPTATIVAS_V_VI = [ /* ... copia del original ... */ ];
const OPTATIVAS_VII_VIII = [ /* ... copia del original ... */ ];

// ==================== DATOS ENRIQUECIDOS DE OPTATIVAS ====================
const OPT_DATA = {
  "Probabilidad I": {
    temario: [ /* ... copia del original ... */ ],
    bibBasicas: [ /* ... */ ],
    bibComp: [ /* ... */ ],
    subsecuentes: [ /* ... */ ]
  }
  // ... (copia TODO el objeto OPT_DATA del original)
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
        icon: "assets/images/d1.jpg",
        temario: [ /* ... copia del original ... */ ],
        bibBasicas: [ /* ... */ ],
        bibComp: [ /* ... */ ],
        subsecuentes: [ /* ... */ ]
      }
      // ... (copia TODAS las materias de todos los semestres)
    ]
  }
  // ... (semestres 2-8)
];

// ==================== FUNCIONES AUXILIARES ====================
function enrichOptativa(opt) {
  const extra = OPT_DATA[opt.name];
  if (!extra) return opt;
  return { ...opt, ...extra };
}

function getOptativasPool(s) {
  if (s <= 2) return OPTATIVAS_I_II;
  if (s <= 4) return OPTATIVAS_III_IV;
  if (s <= 6) return OPTATIVAS_V_VI;
  return OPTATIVAS_VII_VIII;
}