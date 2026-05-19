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
    matId: "alg_sup_1",
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
    matId: "alg_sup_2",
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
    matId: "cal_1",
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
    matId: "geom_anal_1",
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
    matId: "geom_anal_2",
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
    matId: "alg_lin_1",
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
    matId: "cal_2",
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
    matId: "ec_dif",
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
    matId: "analisis_1",
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
              { type:"obs", label:"1.1 INTRODUCCION", tex:"El Análisis matemático estudia conceptos relacionados de alguna manera con los números reales; por ello empezaremos nuestro estudio del Análisis con una discusión del sistema de los números reales. Existen diversos métodos para introducir los números reales. Uno de ellos parte de los enteros positivos 1, 2, 3, ..., que considera conceptos no definidos, utilizándolos para construir un sistema más amplio, los números racionales positivos (cocientes de enteros positivos), los negativos y el cero. Los números racionales son utilizados, a su vez, para construir los números irracionales, números reales como √2 y π, que no son racionales. El sistema de los números reales lo constituye la reunión de los números racionales e irracionales. A pesar de que estas cuestiones constituyen una parte importante de los fundamentos de la Matemática, no las describiremos aquí con detalle. Es un hecho que, en la mayor parte del Análisis, nos interesarán solamente las propiedades de los números reales antes que los métodos utilizados para construirlos. Por lo tanto, consideraremos los números reales mismos como objetos no definidos, sometidos a ciertos axiomas de los que extraeremos ulteriores propiedades. Dado que el lector está, probablemente, familiarizado con la mayoría de las propiedades de los números reales que consideraremos en las páginas que siguen, la exposición será más bien breve. Su propósito es examinar las características más importantes y persuadir al lector de que, de ser necesario, todas las propiedades se podrían deducir a partir de los axiomas. Tratamientos más detallados podrán hallarse en las referencias del final de este capítulo. Por conveniencia usaremos la notación y la terminología de la teoría de conjuntos elemental. Supongamos que S designa un conjunto (una colección de objetos). La notación x ∈ S significa que x está en el conjunto S, escribiendo x ∉ S para indicar que x no está en S. Un conjunto S es un subconjunto de T si cada elemento de S está también en T. Lo indicaremos escribiendo S ⊆ T. Un conjunto es no vacío si contiene, por lo menos, un elemento. Suponemos que existe un conjunto no vacío R de elementos, llamados números reales, que satisfacen los diez axiomas enumerados a continuación. Los axiomas se clasifican de manera natural en tres grupos a los que nos referiremos como axiomas de cuerpo, axiomas de orden y axioma de completitud (llamado también axioma del supremo o axioma de continuidad).", sourcePage:"pp. 1-2" },
              { type:"obs", label:"1.2 LOS AXIOMAS DE CUERPO", tex:"Junto con el conjunto R de los números reales admitimos la existencia de dos operaciones, llamadas suma y multiplicación, tales que, para cada par de números reales x e y, la suma x + y y el producto xy son números reales determinados unívocamente por x e y, satisfaciendo los siguientes axiomas. (En los axiomas que a continuación se exponen, x, y, z representan números reales arbitrarios en tanto no se precise lo contrario.)", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 1", tex:"$$x + y = y + x, \\quad xy = yx$$", description:"leyes conmutativas", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 2", tex:"$$x + (y + z) = (x + y) + z, \\quad x(yz) = (xy)z$$", description:"leyes asociativas", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 3", tex:"$$x(y + z) = xy + xz$$", description:"ley distributiva", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 4", tex:"Dados dos números reales cualesquiera $x$ e $y$ existe un número real $z$ tal que $x + z = y.$", description:"Dicho número z se designará por y - x; el número x - x se designará por 0. (Se puede demostrar que 0 es independiente de x. Escribiremos -x en vez de 0 - x y al número -x lo llamaremos opuesto de x.)", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 5", tex:"Existe, por lo menos, un número real $x \\neq 0.$ Si $x$ e $y$ son dos números reales con $x \\neq 0$ entonces existe un número $z$ tal que $xz = y.$", description:"Dicho número z se designará por y/x; el número x/x se designará por 1 y puede demostrarse que es independiente de x. Escribiremos x^{-1} en vez de 1/x si x ≠ 0 y a x^{-1} lo llamaremos recíproco o inverso de x.", sourcePage:"p. 2" },
              { type:"obs", label:"1.3 LOS AXIOMAS DE ORDEN", tex:"Suponemos también la existencia de una relación < que establece una ordenación entre los números reales y que satisface los axiomas siguientes:", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 6", tex:"Se verifica una y sólo una de las relaciones $x = y, \\; x < y, \\; x > y.$", note:"$$x > y significa lo mismo que y < x.$$", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 7", tex:"Si $x < y$ entonces, para cada $z$ es $x + z < y + z.$", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 8", tex:"Si $x > 0$ e $y > 0$ entonces $xy > 0.$", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 9", tex:"Si $x > y$ e $y > z$ entonces $x > z.$", note:"$$Un número real x se llama positivo si x > 0 y negativo si x < 0. Designaremos por R⁺ el conjunto de todos los números reales positivos y por R⁻ el conjunto de todos los números reales negativos.$$", sourcePage:"p. 3" },
              { type:"obs", label:"Notación", tex:"$$x \\leq y$$", description:"abrevia la afirmación 'x < y o x = y'.", dem:null, sourcePage:"p. 3" },
              { type:"obs", label:"Notación", tex:"$$x \\geq y$$", description:"se utiliza de forma análoga.", dem:null, sourcePage:"p. 3" },
              { type:"teo", label:"Teorema 1.1", tex:"Sean $a$ y $b$ números reales tales que $a \\leq b + \\epsilon$ para cada $\\epsilon > 0.$ Entonces $a \\leq b.$", dem:"Si b < a, entonces la desigualdad (1) no se satisface para ε = (a - b)/2 puesto que b + ε = b + (a - b)/2 = (a + b)/2 < (a + a)/2 = a. Por lo tanto, por el axioma 6, resulta que a ≤ b. \\blacksquare", sourcePage:"p. 3" },
              { type:"obs", label:"1.4 REPRESENTACION GEOMETRICA DE LOS NUMEROS REALES", tex:"Los números reales son, a menudo, representados geométricamente como puntos de una recta (denominada recta real o eje real). Se elige un punto para que represente el 0 y otro a la derecha del 0 para que represente el 1, como muestra la Fig. 1.1. Esta elección determina la escala. Con un conjunto apropiado de axiomas para la Geometría euclídea a cada punto de la recta real corresponde un número real y uno solo y, recíprocamente, cada número real está representado por un punto de la recta real y uno solo. Es usual referirse al punto x en vez de referirse al punto correspondiente al número real x. La relación de orden admite una interpretación geométrica simple. Si x < y el punto x está a la izquierda del punto y, como muestra la figura 1.1. Los números positivos están a la derecha del 0 y los números negativos están a la izquierda del 0. Si a < b un punto x satisface las desigualdades a < x < b si y sólo si, x está entre a y b.", sourcePage:"p. 4" },
              { type:"obs", label:"1.5 INTERVALOS", tex:"El conjunto de todos los puntos comprendidos entre a y b se denomina intervalo. A menudo es importante distinguir entre los intervalos que incluyen sus extremos y los intervalos que no los incluyen.", sourcePage:"p. 4" },
              { type:"obs", label:"Notación", tex:"$\\{x: x$ verifica $P\\}$", description:"designa el conjunto de todos los números reales x tales que satisfacen la propiedad P.", dem:null, sourcePage:"p. 4" },
              { type:"def", label:"Definición 1.2", tex:"Supongamos $a < b.$ El intervalo abierto $(a,b)$ se define por $(a,b) = \\{x: a < x < b\\}.$ El intervalo cerrado $[a,b]$ es el conjunto $\\{x: a \\leq x \\leq b\\}.$ Los intervalos semiabiertos $(a,b]$ y $[a,b)$ se definen análogamente utilizando, respectivamente, las desigualdades $a < x \\leq b$ y $a \\leq x < b.$", dem:null, sourcePage:"p. 4" },
              { type:"def", label:"Intervalos infinitos", tex:"$$(a, +\\infty) = \\{x: x > a\\}, \\quad [a, +\\infty) = \\{x: x \\geq a\\}, \\quad (-\\infty, a) = \\{x: x < a\\}, \\quad (-\\infty, a] = \\{x: x \\leq a\\}.$$", note:"$$Se utiliza a veces el intervalo (-∞, +∞) para designar la recta real R. Un solo punto es considerado como un intervalo cerrado <degenerado>. Los símbolos +∞ y -∞ se utilizan aquí tan solo por conveniencias de notación y no deben ser considerados como números reales.$$", dem:null, sourcePage:"pp. 4-5" },
              { type:"def", label:"Definición 1.3", tex:"Un conjunto de números reales se denomina conjunto inductivo si tiene las dos propiedades siguientes: a) El número 1 está en el conjunto. b) Para cada $x$ del conjunto, el número $x + 1$ está también en el conjunto.", dem:null, sourcePage:"p. 5" },
              { type:"def", label:"Definición 1.4", tex:"Un número real se denomina entero positivo si pertenece a cada uno de los conjuntos inductivos. El conjunto de los enteros positivos se designa por $\\mathbf{Z}^+.$", note:"$$El conjunto Z⁺ es, a su vez, inductivo. Contiene al número 1, al número 1+1 (designado por 2), al número 2+1 (designado por 3), y así sucesivamente. Como Z⁺ es subconjunto de cada uno de los conjuntos inductivos consideraremos a Z⁺ como el menor conjunto inductivo. Esta propiedad de Z⁺ se denomina, a menudo, principio de inducción.$$", dem:null, sourcePage:"p. 5" },
              { type:"obs", label:"Notación", tex:"$$\\mathbf{Z}$$", description:"designa el conjunto de los enteros (positivos, negativos y el cero).", dem:null, sourcePage:"p. 5" },
              { type:"obs", label:"Notación", tex:"$$d|n$$", description:"se lee 'd divide a n' y significa que existe un entero c tal que n = cd.", dem:null, sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.5", tex:"Cada entero $n > 1$ es primo o producto de primos.", dem:"Utilizaremos la inducción sobre n. El teorema se verifica trivialmente para n = 2. Supongamos que es cierto para cada entero k con 1 < k < n. Si n no es primo, admite un divisor d con 1 < d < n. Por lo tanto, n = cd, con 1 < c < n. Puesto que tanto c como d son < n, cada uno es primo o es producto de primos; luego n es un producto de primos. \\blacksquare", sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.6", tex:"Cada par de enteros $a$ y $b$ admite un divisor común $d$ de la forma $d = ax + by$ donde $x$ e $y$ son enteros. Además, cada divisor común de $a$ y $b$ divide a $d.$", note:"$$Si d es un divisor común de a y b de la forma d = ax + by, entonces -d es también un divisor común de la misma forma, -d = a(-x) + b(-y). De estos dos divisores comunes sólo el no negativo se denomina el máximo común divisor de a y de b y se designa por mcd(a, b) o, simplemente, por (a, b). Si (a, b) = 1, se dice que a y b son primos entre sí.$$", dem:"Supongamos primeramente que a ≥ 0 y b ≥ 0 y procedamos por inducción sobre n = a + b. Si n = 0, entonces a = b = 0 y podemos tomar d = 0 con x = y = 0. Supongamos entonces que el teorema ha sido probado para 0, 1, 2, …, n-1. Por simetría podemos suponer a ≥ b. Si b = 0, entonces d = a, x = 1, y = 0. Si b ≥ 1 podemos aplicar la hipótesis de inducción a a-b y a b, ya que su suma es a = n - b ≤ n-1. Por lo tanto existe un divisor común d de a-b y b de la forma d = (a-b)x + by. Este entero d divide también a (a-b)+b = a, luego d es un divisor común de a y de b y tenemos que d = ax + (y-x)b, es combinación lineal de a y b. Para completar la demostración debemos probar que cada divisor común divide a d. Como un divisor común divide a a y a b, dividirá también a la combinación lineal ax + (y-x)b = d. Esto completa la demostración si a ≥ 0 y b ≥ 0. Si uno de ellos o ambos fuesen negativos, aplicaríamos el resultado que acabamos de demostrar a |a| y |b|. \\blacksquare", sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.7 (Lema de Euclides)", tex:"Si $a|bc$ y $(a, b) = 1$ entonces $a|c.$", dem:"Como (a, b) = 1, podemos escribir 1 = ax + by. Por lo tanto, c = acx + bcy. Pero a|acx y a|bcy, luego a|c. \\blacksquare", sourcePage:"p. 7" },
              { type:"teo", label:"Teorema 1.8", tex:"Si un número primo $p$ divide a $ab$ entonces $p|a$ o $p|b.$ En general, si un número primo $p$ divide al producto $a_1 \\cdots a_k$ entonces $p$ divide a uno de los factores por lo menos.", dem:"Supongamos que p|ab y que p no divida a a. Si probamos que (p, a) = 1, el lema de Euclides implica que p|b. Sea d = (p, a). Entonces d|p, luego d = 1 o d = p. No puede ser que d = p ya que d|a, pero p no divide a a. Por lo tanto, d = 1. Para demostrar la afirmación más general se procede por inducción sobre el número k de factores. Los detalles se dejan al lector. \\blacksquare", sourcePage:"p. 7" },
              { type:"teo", label:"Teorema 1.9 (Teorema de descomposición única)", tex:"Cada entero $n > 1$ puede ser representado como producto de factores primos, y si se prescinde del orden de los factores la representación es única.", dem:"Procederemos por inducción sobre n. El teorema es cierto para n = 2. Supongamos, entonces, que es cierto para todos los enteros mayores que 1 y menores que n. Si n es primo, no hay nada que demostrar. Supongamos, por lo tanto, que n es compuesto y que admite dos descomposiciones en factores primos; a saber n = p₁p₂…p_s = q₁q₂…q_t. Deseamos probar que s = t y que cada p es igual a algún q. Dado que p₁ divide a q₁·q₂…q_t, divide por lo menos a uno de los factores. Cambiando los índices de las q, si es necesario, se puede suponer p₁|q₁. Por lo tanto, p₁ = q₁ ya que tanto p₁ como q₁ son primos. En (2) simplificamos p₁ en ambos miembros y obtenemos n/p₁ = p₂…p_s = q₂…q_t. Como n es compuesto, 1 < n/p₁ < n; luego por la hipótesis de inducción las dos descomposiciones de n/p₁ son idénticas, si se prescinde del orden de los factores. Por lo tanto, lo mismo es cierto para (2) y la demostración está terminada. \\blacksquare", sourcePage:"pp. 7-8" },
              { type:"obs", label:"1.8 LOS NÚMEROS RACIONALES", tex:"Los cocientes de enteros a/b (donde b ≠ 0) se llamarán números racionales. Por ejemplo, 1/2, -7/5, y 6 son números racionales. El conjunto de los números racionales, que designaremos por Q, contiene a Z como subconjunto. Observe el lector que todos los axiomas de cuerpo y todos los axiomas de orden se verifican en Q. Suponemos que el lector está familiarizado con ciertas propiedades elementales de los números racionales. Por ejemplo, si a y b son racionales, su media (a+b)/2 también lo es y está comprendida entre a y b. Así pues, entre dos números racionales hay una infinidad de números racionales, lo cual implica que, dado un número racional cualquiera, no sea posible hablar del número racional «inmediato superior».", sourcePage:"p. 8" },
              { type:"obs", label:"1.9 LOS NÚMEROS IRRACIONALES", tex:"Los números reales que no son racionales se denominan irracionales. Por ejemplo, los números √2, e, π y e^α son irracionales.", sourcePage:"p. 8" },
              { type:"teo", label:"Teorema 1.10", tex:"Si $n$ es un entero positivo que no sea un cuadrado perfecto, entonces $\\sqrt{n}$ es irracional.", dem:"Suponemos en primer lugar que n no admite ningún divisor >1 que sea cuadrado perfecto. Si admitimos que √n es racional, llegamos a contradicción. Supongamos que √n = a/b, donde a y b son enteros sin divisores comunes. Entonces nb² = a², dado que el primer miembro de esta igualdad es un múltiplo de n, también lo será a². Sin embargo, si a² es múltiplo de n, a deberá serlo ya que n no admite divisores >1 que sean cuadrados perfectos. (Esto se ve fácilmente examinando la descomposición de a en factores primos.) Todo ello significa que a = cn, donde c es un entero. Entonces la ecuación nb² = a² se transforma en nb² = c²n², o b² = nc². El mismo argumento prueba que b debe ser asimismo múltiplo de n. Entonces a y b serían ambos múltiplos de n, lo cual contradice el hecho de que a y b carecen de divisores comunes. Esto finaliza la demostración en el caso de que n no admita un divisor >1 que sea cuadrado perfecto. Si n admite un factor que sea cuadrado perfecto, podremos escribir n = m²k, donde k > 1 y k no admite divisores >1 que sean cuadrados perfectos. Por lo tanto √n = m√k; y si √n fuese racional, el número √k sería también racional, contradiciendo lo que acabamos de demostrar. \\blacksquare", sourcePage:"pp. 8-9" },
              { type:"teo", label:"Teorema 1.11", tex:"Si $e^x = 1 + x + x^2/2! + x^3/3! + \\cdots + x^n/n! + \\cdots$ entonces el número $e$ es irracional.", note:"$$Para una demostración de la irracionalidad de π, ver Ejercicio 7.33.$$", dem:"Probaremos que e⁻¹ es irracional. La serie e⁻¹ es una serie alternada con términos que decrecen constantemente en valor absoluto. En tales series el error cometido al cortar la serie por el n-ésimo término tiene el signo algebraico del primer término que se desprecia y, en valor absoluto, es menor que el del primer término que se desprecia. Por lo tanto, si s_n = ∑_{k=0}^n (-1)^k/k!, tenemos la desigualdad 0 < e⁻¹ - s_{2k-1} < 1/(2k)!, de la que se obtiene 0 < (2k-1)!(e⁻¹ - s_{2k-1}) < 1/(2k) ≤ 1/2, para todo entero k ≥ 1. Ahora bien (2k-1)! s_{2k-1} es siempre un entero. Si e⁻¹ fuese racional, entonces podríamos elegir k suficientemente grande para que (2k-1)! e⁻¹ fuese también un entero. A causa de (3) la diferencia entre ambos enteros debería ser un número comprendido entre 0 y 1/2, lo cual es imposible. Luego e⁻¹ no es racional y, por tanto, e tampoco lo es. \\blacksquare", sourcePage:"p. 9" },
              { type:"def", label:"Definición 1.12", tex:"Sea $S$ un conjunto de números reales. Si existe un número real $b$ tal que $x \\leq b$ para todo $x$ de $S$ diremos que $b$ es una cota superior de $S$ y que $S$ está acotado superiormente por $b.$ Si una cota superior $b$ es, además, un elemento de $S$ b se denomina último elemento o elemento máximo de $S.$ A lo sumo habrá uno de tales $b.$ Si existe tal número $b$ escribiremos $b = \\max S.$ Un conjunto carente de cotas superiores se denomina no acotado superiormente. Las definiciones de los términos cota inferior, acotado inferiormente, primer elemento (o elemento mínimo) pueden formularse análogamente. Si $S$ tiene un elemento mínimo, designaremos a dicho mínimo por mín $S.$", dem:null, sourcePage:"p. 10" },
              { type:"def", label:"Definición 1.13", tex:"Sea $S$ un conjunto de números reales acotado superiormente. Un número real $b$ se denomina extremo superior de $S$ si verifica las dos propiedades siguientes: a) $b$ es una cota superior de $S.$ b) Ningún número menor que $b$ es cota superior de $S.$", note:"$$Es fácil probar que un conjunto no puede tener dos extremos superiores distintos. Por lo tanto, si existe extremo superior de S, existe sólo uno y puede hablarse del extremo superior. Es corriente, en la práctica, referirse al extremo superior de un conjunto por medio del término más breve de supremo, abreviado sup. Adoptamos esta convención y escribimos b = sup S, para indicar que b es el supremo de S. Si S tiene un elemento máximo, entonces máx S = sup S. El extremo inferior o ínfimo de S, designado por inf S, se define de forma análoga.$$", dem:null, sourcePage:"p. 11" },
              { type:"def", label:"Axioma 10", tex:"Todo conjunto no vacío $S$ de números reales que esté acotado superiormente admite un supremo; es decir, existe un número real $b$ tal que $b = \\sup S.$", note:"Como consecuencia de este axioma se obtiene que todo conjunto no vacío de números reales acotado inferiormente admite un ínfimo.", sourcePage:"p. 11" },
              { type:"teo", label:"Teorema 1.14 (Propiedad de la aproximación)", tex:"Sea $S$ un conjunto no vacío de números reales con un supremo que se designa por $b = \\sup S.$ Entonces, para cada $a < b$ existe un $x$ de $S$ tal que $a < x \\leq b.$", dem:"Ante todo, x ≤ b para todo x de S. Si fuese x ≤ a para todo x de S, entonces a sería una cota superior para S menor que el supremo que es la cota superior mínima. Por lo tanto, x > a para un x de S, por lo menos. \\blacksquare", sourcePage:"p. 12" },
              { type:"teo", label:"Teorema 1.15 (Propiedad aditiva)", tex:"Dados dos subconjuntos no vacíos de $\\mathbf{R}, A$ y $B$ sea $C$ el conjunto $C = \\{x + y: x \\in A, y \\in B\\}.$ Si tanto $A$ como $B$ tienen un supremo, entonces $C$ tiene un supremo y $\\sup C = \\sup A + \\sup B.$", dem:"Sea a = sup A, b = sup B. Si z ∈ C, entonces z = x + y, donde x ∈ A, y ∈ B, luego z = x + y ≤ a + b. Por lo tanto a + b es una cota superior de C, luego C admite un supremo, sea c = sup C y c ≤ a + b. Veremos ahora que a + b ≤ c. Elijamos un ε > 0. Por el teorema 1.14 existe un x de A y un y de B tales que a - ε < x y b - ε < y. Sumando estas desigualdades, obtenemos a + b - 2ε < x + y ≤ c. Luego, a + b < c + 2ε para cada ε > 0 y, por el teorema 1.1, a + b ≤ c. \\blacksquare", sourcePage:"p. 12" },
              { type:"teo", label:"Teorema 1.16 (Propiedad de la comparación)", tex:"Dados dos subconjuntos no vacíos $S$ y $T$ de $\\mathbf{R}$ tales que $s \\leq t$ para todo $s$ de $S$ y todo $t$ de $T$ si $T$ tiene supremo, entonces $S$ tiene supremo, y $\\sup S \\leq \\sup T.$", dem:null, sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.17", tex:"El conjunto $\\mathbf{Z}^+$ de los enteros positivos 1, 2, 3, ..., no está acotado superiormente", dem:"Si Z⁺ estuviese acotado superiormente, entonces Z⁺ admitiría un supremo, tal como a = sup Z⁺. Por el teorema 1.14 tendríamos que a - 1 < n para algún n de Z⁺. Por lo tanto n + 1 > a para esta n. Esto contradice el hecho de ser a = sup Z⁺ ya que n+1 ∈ Z⁺. \\blacksquare", sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.18", tex:"Para cada número real $x$ existe un entero positivo $n$ tal que $n > x.$", dem:"Si no fuese así, existiría un x que sería una cota superior para Z⁺, en contradicción con el teorema 1.17. \\blacksquare", sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.19", tex:"Si $x > 0$ y si $y$ es un número real arbitrario, existe un entero positivo $n$ tal que $nx > y.$", dem:"Aplicar el teorema 1.18 sustituyendo x por y/x. \\blacksquare", sourcePage:"p. 13" },
              { type:"def", label:"Definición 1.26", tex:"Por número complejo entenderemos un par ordenado de números reales, que designaremos por $(x_1, x_2).$ La primera componente, $x_1$ se llama parte real del número complejo; la segunda componente, $x_2$ se llama parte imaginaria. Dos números complejos $x = (x_1, x_2)$ e $y = (y_1, y_2)$ son iguales, y escribiremos $x = y$ si, y sólo si, $x_1 = y_1$ y $x_2 = y_2.$ Definimos la suma $x + y$ y el producto $xy$ por $x + y = (x_1 + y_1, x_2 + y_2), \\quad xy = (x_1 y_1 - x_2 y_2, x_1 y_2 + x_2 y_1).$", note:"El conjunto de todos los números complejos será designado por C.", dem:null, sourcePage:"p. 19" },
              { type:"teo", label:"Teorema 1.27", tex:"Las operaciones de suma y multiplicación que acabamos de definir satisfacen las leyes conmutativa, asociativa y distributiva", dem:"Solamente demostraremos la propiedad distributiva; las otras demostraciones son más simples. Si x = (x₁, x₂), y = (y₁, y₂) y z = (z₁, z₂), entonces tenemos x(y+z) = (x₁, x₂)(y₁+z₁, y₂+z₂) = (x₁y₁ + x₁z₁ - x₂y₂ - x₂z₂, x₁y₂ + x₁z₂ + x₂y₁ + x₂z₁) = (x₁y₁ - x₂y₂, x₁y₂ + x₂y₁) + (x₁z₁ - x₂z₂, x₁z₂ + x₂z₁) = xy + xz. \\blacksquare", sourcePage:"pp. 19-20" },
              { type:"teo", label:"Teorema 1.28", tex:"$$(x_1, x_2) + (0, 0) = (x_1, x_2), \\quad (x_1, x_2)(0, 0) = (0, 0), \\quad (x_1, x_2)(1, 0) = (x_1, x_2), \\quad (x_1, x_2) + (-x_1, -x_2) = (0, 0).$$", dem:"Las demostraciones son inmediatas a partir de las definiciones, lo mismo que en los teoremas 1.29, 1.30, 1.32 y 1.33. \\blacksquare", sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.29", tex:"Dados dos números complejos $x = (x_1, x_2)$ e $y = (y_1, y_2)$ existe un número complejo $z$ tal que $x + z = y.$ De hecho, $z = (y_1 - x_1, y_2 - x_2).$ Este $z$ se designa por $y - x.$ El número complejo $(-x_1, -x_2)$ se designa por $-x.$", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.30", tex:"Para cualquier par de números complejos $x$ e $y$ tenemos $(-x)y = x(-y) = -(xy) = (-1, 0)(xy).$", dem:null, sourcePage:"p. 20" },
              { type:"def", label:"Definición 1.31", tex:"Si $x = (x_1, x_2) \\neq (0, 0)$ e $y$ son números complejos, definimos $x^{-1} = \\left[ \\frac{x_1}{x_1^2 + x_2^2}, -\\frac{x_2}{x_1^2 + x_2^2} \\right]$ e $y/x = y x^{-1}.$", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.32", tex:"Si $x$ e $y$ son números complejos con $x \\neq (0, 0)$ existe un número complejo $z$ tal que $xz = y$ a saber, $z = yx^{-1}.$", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.33", tex:"$(x_1, 0) + (y_1, 0) = (x_1 + y_1, 0), \\quad (x_1, 0)(y_1, 0) = (x_1 y_1, 0), \\quad (x_1, 0)/(y_1, 0) = (x_1 / y_1, 0)$ si $y_1 \\neq 0.$", note:"$$Es evidente, que en virtud del teorema 1.33, podemos realizar las operaciones aritméticas de los números complejos de parte imaginaria nula operando tan solo con las partes reales por medio de las operaciones de los números reales. Por lo tanto, los números complejos de la forma (x,0) tienen las mismas propiedades aritméticas que los números reales. Por esta razón es conveniente considerar el sistema de los números reales como un caso particular del sistema de los números complejos, y convendremos en identificar el número complejo (x,0) con el número real x. Por eso escribiremos x = (x,0). En particular, 0 = (0,0) y 1 = (1,0).$$", dem:null, sourcePage:"p. 20" },
              { type:"obs", label:"1.22 REPRESENTACION GEOMETRICA DE LOS NUMEROS COMPLEJOS", tex:"Así como los números reales se representan geométricamente como puntos de una recta, los números complejos se representan como puntos de un plano. El número complejo x = (x₁, x₂) puede ser imaginado como el 'punto' de coordenadas (x₁, x₂). Hecho esto, la definición de suma coincide con la suma según la regla del paralelogramo. (Ver Fig. 1.2.) La idea de expresar geométricamente los números complejos como puntos de un plano fue formulada por Gauss en su disertación de 1799 e, independentemente, por Argand en 1806. Más tarde Gauss ideó la expresión un tanto desafortunada de «número complejo». Los números complejos admiten otras representaciones geométricas. En vez de utilizar puntos de un plano, se pueden utilizar puntos de otras superficies. Riemann encontró que la esfera es especialmente adecuada para este propósito. Se proyectan los puntos de la esfera desde el Polo Norte sobre el plano tangente a la esfera en el Polo Sur y entonces a cada punto del plano le corresponde un punto sobre la esfera. Con excepción del Polo Norte, a cada punto de la esfera le corresponde un punto sobre el plano y sólo uno. Esta correspondencia se denomina una proyección estereográfica. (Ver Fig. 1.3.)", sourcePage:"pp. 21-22" },
              { type:"def", label:"Definición 1.34", tex:"El número complejo $(0,1)$ se representa por $i$ y se llama unidad imaginaria", dem:null, sourcePage:"p. 22" },
              { type:"teo", label:"Teorema 1.35", tex:"Cada número complejo $x = (x_1, x_2)$ puede representarse en la forma $x = x_1 + i x_2.$", dem:"x₁ = (x₁, 0), i x₂ = (0,1)(x₂,0) = (0, x₂), x₁ + i x₂ = (x₁,0) + (0, x₂) = (x₁, x₂). \\blacksquare", sourcePage:"p. 22" },
              { type:"teo", label:"Teorema 1.36", tex:"$$i^2 = -1.$$", dem:"i² = (0,1)(0,1) = (-1,0) = -1. \\blacksquare", sourcePage:"p. 22" },
              { type:"def", label:"Definición 1.37", tex:"Si $x = (x_1, x_2)$ definimos el módulo, o valor absoluto, de $x$ como el número real no negativo $|x|$ dado por $|x| = \\sqrt{x_1^2 + x_2^2}.$", dem:null, sourcePage:"p. 23" },
              { type:"teo", label:"Teorema 1.38", tex:"Para números complejos $x$ e $y$ tenemos: (i) $|x| = 0$ si, y sólo si, $x = 0;$ (ii) $|xy| = |x||y|;$ (iii) $|x/y| = |x|/|y|$ si $y \\neq 0;$ (iv) $|x| = |\\bar{x}|.$", dem:"Las afirmaciones (i) y (iv) son inmediatas. Para demostrar (ii), consideremos x = x₁ + i x₂, y = y₁ + i y₂, entonces xy = x₁y₁ - x₂y₂ + i(x₁y₂ + x₂y₁). La afirmación (ii) se sigue de la relación |xy|² = x₁²y₁² + x₂²y₂² + x₁²y₂² + x₂²y₁² = (x₁² + x₂²)(y₁² + y₂²) = |x|²|y|². La ecuación (iii) puede deducirse de (ii) escribiéndola en la forma |x| = |y| |x/y|. \\blacksquare", sourcePage:"p. 23" },
              { type:"teo", label:"Teorema 1.39 (Desigualdad triangular)", tex:"Si $x$ e $y$ son números complejos, entonces $|x + y| \\leq |x| + |y|.$", dem:null, sourcePage:"p. 23" },
              { type:"obs", label:"1.25 IMPOSIBILIDAD DE ORDENAR LOS NÚMEROS COMPLEJOS", tex:"Todavía no hemos definido ninguna relación de la forma x < y, si x e y son números complejos cualesquiera, ya que es imposible dar una definición de < para los números complejos que satisfaga las propiedades dadas por los axiomas 6 al 8. Para justificarlo, supongamos que fuese posible definir una relación de orden < que satisficiera los axiomas 6, 7 y 8. Entonces, como i ≠ 0, se debiera tener i > 0 o i < 0, por el axioma 6. Supongamos que i > 0. Entonces tomando x = y = i en el axioma 8, tendríamos i² > 0, o -1 > 0. Sumando 1 a ambos miembros (axioma 7), obtendríamos 0 > 1. Por otro lado, aplicando el axioma 8 a -1 > 0, hallaríamos 1 > 0. Tendríamos, pues, 0 > 1 y también 1 > 0, que, por el axioma 6, es imposible. Así pues, suponer que i > 0 lleva a contradicción. Un razonamiento análogo prueba que no es posible i < 0. Por lo tanto, los números complejos no pueden ser ordenados de tal suerte que se verifiquen los axiomas 6, 7 y 8.", sourcePage:"pp. 23-24" },
              { type:"def", label:"Definición 1.40", tex:"Si $z = x + iy$ definimos $e^z = e^{x+iy}$ como el número complejo $e^x (\\cos y + i \\sin y).$", note:"$$Esta definición coincide claramente con la función exponencial real cuando z es real (esto es, y = 0).$$", dem:null, sourcePage:"p. 24" },
              { type:"teo", label:"Teorema 1.41", tex:"Si $z_1 = x_1 + iy_1$ y $z_2 = x_2 + iy_2$ son dos números complejos, entonces tenemos $e^{z_1}e^{z_2} = e^{z_1+z_2}.$", dem:"e^{z₁} = e^{x₁}(cos y₁ + i sen y₁), e^{z₂} = e^{x₂}(cos y₂ + i sen y₂), e^{z₁}e^{z₂} = e^{x₁}e^{x₂}[cos y₁ cos y₂ - sen y₁ sen y₂ + i(cos y₁ sen y₂ + sen y₁ cos y₂)] = e^{x₁+x₂}[cos(y₁+y₂) + i sen(y₁+y₂)] = e^{z₁+z₂}. \\blacksquare", sourcePage:"pp. 24-25" },
              { type:"teo", label:"Teorema 1.42", tex:"$e^z$ jamás es cero $.$", dem:"e^z e^{-z} = e^{z-z} = e^0 = 1. Por lo tanto, e^z no puede ser cero. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.43", tex:"Si $x$ es real, entonces $|e^{ix}| = 1.$", dem:"|e^{ix}|² = cos² x + sen² x = 1, y |e^{ix}| > 0. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.44", tex:"$e^z = 1$ si, y sólo si, $z$ es un múltiplo entero de $2\\pi i.$", dem:"Si z = 2πni, donde n es un entero, entonces e^z = cos(2πn) + i sen(2πn) = 1. Recíprocamente, supongamos que e^z = 1. Esto significa que e^x cos y = 1 y e^x sen y = 0. Como e^x ≠ 0, debe ser sen y = 0, y = kπ, donde k es un entero. Pero cos(kπ) = (-1)^k. Por lo tanto, e^z = (-1)^k e^x. Como e^z = 1, tenemos (-1)^k e^x = 1, luego e^x = (-1)^k. Como e^x > 0, k debe ser par. Por lo tanto e^x = 1 y entonces x = 0. Esto prueba el teorema. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.45", tex:"$e^{z_1} = e^{z_2}$ si, y sólo si, $z_1 - z_2 = 2\\pi i n$ (donde $n$ es un entero).", dem:"e^{z₁} = e^{z₂} si, y sólo si, e^{z₁-z₂} = 1. \\blacksquare", sourcePage:"p. 25" },
              { type:"def", label:"Definición 1.46", tex:"Sea $z = x + iy$ un número complejo no nulo. El único número real $\\theta$ que satisface las condiciones $x = |z| \\cos \\theta, \\quad y = |z| \\sin \\theta, \\quad -\\pi < \\theta \\leq +\\pi$ se llama el argumento principal de $z$ y se representa por $\\theta = \\arg(z).$", dem:null, sourcePage:"p. 26" },
              { type:"teo", label:"Teorema 1.47", tex:"Todo número complejo $z \\neq 0$ puede ser representado en la forma $z = re^{i\\theta}$ donde $r = |z|$ y $\\theta = \\arg(z) + 2\\pi n$ siendo $n$ un entero $.$", dem:null, sourcePage:"p. 26" },
              { type:"teo", label:"Teorema 1.48", tex:"Si $z_1z_2 \\neq 0$ entonces $\\arg(z_1z_2) = \\arg(z_1) + \\arg(z_2) + 2\\pi n(z_1,z_2)$ donde $n(z_1,z_2)$ es un entero que depende de $z_1$ y $z_2.$", dem:"Si z₁ = |z₁|e^{iθ₁}, z₂ = |z₂|e^{iθ₂}, donde θ₁ = arg(z₁) y θ₂ = arg(z₂), entonces z₁z₂ = |z₁z₂|e^{i(θ₁+θ₂)}. Como -π < θ₁ ≤ +π y -π < θ₂ ≤ +π, tenemos -π < θ₁+θ₂ ≤ 2π. Por lo tanto existe un entero n tal que -π < θ₁+θ₂+2πn ≤ π. Este número n es, precisamente, el n(z₁,z₂) dado en el teorema, y para este n tenemos arg(z₁z₂) = θ₁+θ₂+2πn. Esto prueba el teorema. \\blacksquare", sourcePage:"p. 26" },
              { type:"def", label:"Definición 1.49", tex:"Dados un número complejo $z$ y un número entero $n$ definimos la $n$ -ésima potencia de $z$ como sigue: $z^0 = 1, \\quad z^{n+1} = z^n z$ si $n \\geq 0, \\quad z^{-n} = (z^{-1})^n$ si $z \\neq 0$ y $n > 0.$", dem:null, sourcePage:"pp. 26-27" },
              { type:"teo", label:"Teorema 1.50", tex:"Dados dos enteros $m$ y $n$ tenemos, para $z \\neq 0, \\quad z^n z^m = z^{n+m} \\quad$ y $\\quad (z_1z_2)^n = z_1^n z_2^n.$", dem:null, sourcePage:"p. 27" },
              { type:"teo", label:"Teorema 1.51", tex:"Si $z \\neq 0$ y si $n$ es un entero positivo, entonces existen exactamente $n$ números complejos distintos $z_0, z_1, \\ldots, z_{n-1}$ (llamados raíces $n$ -ésimas de $z)$ tales que $z_k^n = z$ para cada $k.$ Además, estas raíces son dadas por las fórmulas $z_k = Re^{i\\phi_k}$ donde $R = |z|^{1/n}, \\quad \\phi_k = \\frac{\\arg(z) + 2\\pi k}{n} \\quad (k = 0,1,2,\\ldots,n-1).$", note:"$$Las n raíces n-ésimas de z están igualmente espaciadas sobre el círculo de radio R = |z|^{1/n}, con centro en el origen.$$", dem:"Los n números complejos Re^{iφ_k}, 0 ≤ k ≤ n-1, son distintos y cada uno de ellos es una raíz n-ésima de z, ya que (Re^{iφ_k})ⁿ = Rⁿe^{inφ_k} = |z|e^{i(arg(z)+2πk)} = z. Debemos probar ahora que no hay otras raíces n-ésimas de z. Supongamos que w = Ae^{iα} es un número complejo tal que wⁿ = z. Entonces |w|ⁿ = |z|, de donde Aⁿ = |z|, A = |z|^{1/n}. Por lo tanto wⁿ = z puede escribirse e^{iαn} = e^{i[arg(z)]}, que implica nα - arg(z) = 2πk para algún entero k. Luego α = [arg(z) + 2πk]/n. Pero mientras k toma todos los valores, w toma sólo los valores distintos z₀, …, z_{n-1}. (Ver Fig. 1.4.) \\blacksquare", sourcePage:"p. 27" },
              { type:"teo", label:"Teorema 1.52", tex:"Si $z$ es un número complejo $\\neq 0$ existen números complejos $w$ tales que $e^w = z.$ Uno de tales $w$ es el número complejo $\\log |z| + i \\arg(z)$ y todos los demás tienen la forma $\\log |z| + i \\arg(z) + 2n\\pi i$ donde $n$ es un entero $.$", dem:"Como e^{log|z| + i arg(z)} = e^{log|z|}e^{i arg(z)} = |z|e^{i arg(z)} = z, vemos que w = log|z| + i arg(z) es una solución de la ecuación e^w = z. Pero si w₁ es otra solución, entonces e^w = e^{w₁}, y, por lo tanto, w - w₁ = 2nπi. \\blacksquare", sourcePage:"p. 28" },
              { type:"def", label:"Definición 1.53", tex:"Sea $z \\neq 0$ un número complejo dado. Si $w$ es un número complejo tal que $e^w = z$ entonces $w$ se denomina un logaritmo de $z.$ El valor particular de $w$ dado por $w = \\log |z| + i \\arg(z)$ se llama logaritmo principal de $z$ y para este $w$ escribiremos $w = \\operatorname{Log} z.$", dem:null, sourcePage:"p. 28" },
              { type:"teo", label:"Teorema 1.54", tex:"Si $z_1z_2 \\neq 0$ entonces $\\operatorname{Log}(z_1z_2) = \\operatorname{Log}z_1 + \\operatorname{Log}z_2 + 2\\pi i n(z_1,z_2)$ donde $n(z_1,z_2)$ es el entero definido en el teorema 1.48 $.$", dem:"Log(z₁z₂) = log|z₁z₂| + i arg(z₁z₂) = log|z₁| + log|z₂| + i[arg(z₁) + arg(z₂) + 2π n(z₁,z₂)]. \\blacksquare", sourcePage:"p. 29" },
              { type:"def", label:"Definición 1.55", tex:"Si $z \\neq 0$ y si $w$ es un número complejo cualquiera, definimos $z^w = e^{w \\operatorname{Log} z}.$", dem:null, sourcePage:"p. 29" },
              { type:"teo", label:"Teorema 1.56", tex:"$z^{w_1}z^{w_2} = z^{w_1+w_2}$ si $z \\neq 0.$", dem:"z^{w₁+w₂} = e^{(w₁+w₂)Log z} = e^{w₁ Log z} e^{w₂ Log z} = z^{w₁}z^{w₂}. \\blacksquare", sourcePage:"p. 29" },
              { type:"teo", label:"Teorema 1.57", tex:"Si $z_1z_2 \\neq 0$ entonces $(z_1z_2)^w = z_1^w z_2^w e^{2\\pi i w n(z_1,z_2)}$ donde $n(z_1,z_2)$ es el entero definido en el teorema 1.48 $.$", dem:"(z₁z₂)^w = e^{w Log(z₁z₂)} = e^{w[Log z₁ + Log z₂ + 2πi n(z₁,z₂)]}. \\blacksquare", sourcePage:"pp. 29-30" },
              { type:"def", label:"Definición 1.58", tex:"Dado un número complejo $z$ definimos $\\cos z = \\frac{e^{iz} + e^{-iz}}{2}, \\quad \\sin z = \\frac{e^{iz} - e^{-iz}}{2i}.$", note:"$$Cuando z es real, estas igualdades concuerdan con la definición 1.40.$$", dem:null, sourcePage:"p. 30" },
              { type:"teo", label:"Teorema 1.59", tex:"Si $z = x + iy$ entonces tenemos $\\cos z = \\cos x \\cosh y - i \\sin x \\sinh y, \\quad \\sin z = \\sin x \\cosh y + i \\cos x \\sinh y.$", dem:"2 cos z = e^{iz} + e^{-iz} = e^{-y}(cos x + i sen x) + e^{y}(cos x - i sen x) = cos x(e^{y}+e^{-y}) - i sen x(e^{y}-e^{-y}) = 2 cos x cosh y - 2i sen x senh y. La demostración para sen z es análoga. \\blacksquare", sourcePage:"p. 30" },
              { type:"def", label:"Definición 1.60", tex:"Por sistema de los números complejos ampliado $\\mathbf{C}^*$ entenderemos el plano complejo $\\mathbf{C}$ junto con un símbolo $\\infty$ que satisfaga las siguientes propiedades: a) Si $z \\in \\mathbf{C}$ entonces se tiene $z + \\infty = z - \\infty = \\infty, \\quad z/\\infty = 0.$ b) Si $z \\in \\mathbf{C}$ pero $z \\neq 0$ entonces $z(\\infty) = \\infty$ y $z/0 = \\infty.$ c) $\\infty + \\infty = (\\infty)(\\infty) = \\infty.$", dem:null, sourcePage:"p. 30" },
              { type:"def", label:"Definición 1.61", tex:"Cada conjunto de $\\mathbf{C}$ de la forma $\\{z: |z| > r \\geq 0\\}$ se denomina entorno de $\\infty$ o bola con centro en $\\infty.$", note:"$$El lector puede preguntarse por qué a R le hemos adjuntado dos símbolos +∞ y -∞, mientras que a C sólo le adjuntamos un símbolo, ∞. La respuesta radica en el hecho de que existe una relación de orden < entre números reales, mientras que entre números complejos no sucede lo mismo. Para que ciertas propiedades de los números reales que involucran la relación < se verifiquen sin excepción, es necesario disponer de dos símbolos, +∞ y -∞, tales como los definidos anteriormente. Ya hemos mencionado, por ejemplo, que cada conjunto no vacío tiene un sup en R*.$$", dem:null, sourcePage:"pp. 30-31" }
            ]
          }
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
    matId: "alg_mod_1",
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

/* ── Función auxiliar para buscar libro por id ── */
function findBook(id) {
  for (const subj of LIBRARY) {
    const b = subj.books.find(bk => bk.id === id);
    if (b) return { book: b, subject: subj.subject, color: subj.color };
  }
  return null;
}

/* ── Lista plana de todos los libros ─────────── */
function allBooks() {
  return LIBRARY.flatMap(s => s.books.map(b => ({
    ...b, subject: s.subject, color: s.color
  })));
}
