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
              { type:"obs", label:"1.1 INTRODUCCION", tex:"El An\u00e1lisis matem\u00e1tico estudia conceptos relacionados de alguna manera con los n\u00fameros reales; por ello empezaremos nuestro estudio del An\u00e1lisis con una discusi\u00f3n del sistema de los n\u00fameros reales. Existen diversos m\u00e9todos para introducir los n\u00fameros reales. Uno de ellos parte de los enteros positivos 1, 2, 3, ..., que considera conceptos no definidos, utiliz\u00e1ndolos para construir un sistema m\u00e1s amplio, los n\u00fameros racionales positivos (cocientes de enteros positivos), los negativos y el cero. Los n\u00fameros racionales son utilizados, a su vez, para construir los n\u00fameros irracionales, n\u00fameros reales como \u221a2 y \u03c0, que no son racionales. El sistema de los n\u00fameros reales lo constituye la reuni\u00f3n de los n\u00fameros racionales e irracionales. A pesar de que estas cuestiones constituyen una parte importante de los fundamentos de la Matem\u00e1tica, no las describiremos aqu\u00ed con detalle. Es un hecho que, en la mayor parte del An\u00e1lisis, nos interesar\u00e1n solamente las propiedades de los n\u00fameros reales antes que los m\u00e9todos utilizados para construirlos. Por lo tanto, consideraremos los n\u00fameros reales mismos como objetos no definidos, sometidos a ciertos axiomas de los que extraeremos ulteriores propiedades. Dado que el lector est\u00e1, probablemente, familiarizado con la mayor\u00eda de las propiedades de los n\u00fameros reales que consideraremos en las p\u00e1ginas que siguen, la exposici\u00f3n ser\u00e1 m\u00e1s bien breve. Su prop\u00f3sito es examinar las caracter\u00edsticas m\u00e1s importantes y persuadir al lector de que, de ser necesario, todas las propiedades se podr\u00edan deducir a partir de los axiomas. Tratamientos m\u00e1s detallados podr\u00e1n hallarse en las referencias del final de este cap\u00edtulo. Por conveniencia usaremos la notaci\u00f3n y la terminolog\u00eda de la teor\u00eda de conjuntos elemental. Supongamos que S designa un conjunto (una colecci\u00f3n de objetos). La notaci\u00f3n x \u2208 S significa que x est\u00e1 en el conjunto S, escribiendo x \u2209 S para indicar que x no est\u00e1 en S. Un conjunto S es un subconjunto de T si cada elemento de S est\u00e1 tambi\u00e9n en T. Lo indicaremos escribiendo S \u2286 T. Un conjunto es no vac\u00edo si contiene, por lo menos, un elemento. Suponemos que existe un conjunto no vac\u00edo R de elementos, llamados n\u00fameros reales, que satisfacen los diez axiomas enumerados a continuaci\u00f3n. Los axiomas se clasifican de manera natural en tres grupos a los que nos referiremos como axiomas de cuerpo, axiomas de orden y axioma de completitud (llamado tambi\u00e9n axioma del supremo o axioma de continuidad).", sourcePage:"pp. 1-2" },
              { type:"obs", label:"1.2 LOS AXIOMAS DE CUERPO", tex:"Junto con el conjunto R de los n\u00fameros reales admitimos la existencia de dos operaciones, llamadas suma y multiplicaci\u00f3n, tales que, para cada par de n\u00fameros reales x e y, la suma x + y y el producto xy son n\u00fameros reales determinados un\u00edvocamente por x e y, satisfaciendo los siguientes axiomas. (En los axiomas que a continuaci\u00f3n se exponen, x, y, z representan n\u00fameros reales arbitrarios en tanto no se precise lo contrario.)", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 1", tex:"x + y = y + x, \\quad xy = yx", description:"leyes conmutativas", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 2", tex:"x + (y + z) = (x + y) + z, \\quad x(yz) = (xy)z", description:"leyes asociativas", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 3", tex:"x(y + z) = xy + xz", description:"ley distributiva", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 4", tex:"\\text{Dados dos n\u00fameros reales cualesquiera } x \\text{ e } y \\text{ existe un n\u00famero real } z \\text{ tal que } x + z = y.", description:"Dicho n\u00famero z se designar\u00e1 por y - x; el n\u00famero x - x se designar\u00e1 por 0. (Se puede demostrar que 0 es independiente de x. Escribiremos -x en vez de 0 - x y al n\u00famero -x lo llamaremos opuesto de x.)", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 5", tex:"\\text{Existe, por lo menos, un n\u00famero real } x \\neq 0. \\text{ Si } x \\text{ e } y \\text{ son dos n\u00fameros reales con } x \\neq 0, \\text{ entonces existe un n\u00famero } z \\text{ tal que } xz = y.", description:"Dicho n\u00famero z se designar\u00e1 por y/x; el n\u00famero x/x se designar\u00e1 por 1 y puede demostrarse que es independiente de x. Escribiremos x^{-1} en vez de 1/x si x \u2260 0 y a x^{-1} lo llamaremos rec\u00edproco o inverso de x.", sourcePage:"p. 2" },
              { type:"obs", label:"1.3 LOS AXIOMAS DE ORDEN", tex:"Suponemos tambi\u00e9n la existencia de una relaci\u00f3n < que establece una ordenaci\u00f3n entre los n\u00fameros reales y que satisface los axiomas siguientes:", sourcePage:"p. 2" },
              { type:"def", label:"Axioma 6", tex:"\\text{Se verifica una y s\u00f3lo una de las relaciones } x = y, \\; x < y, \\; x > y.", note:"x > y significa lo mismo que y < x.", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 7", tex:"\\text{Si } x < y, \\text{ entonces, para cada } z, \\text{ es } x + z < y + z.", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 8", tex:"\\text{Si } x > 0 \\text{ e } y > 0, \\text{ entonces } xy > 0.", sourcePage:"p. 3" },
              { type:"def", label:"Axioma 9", tex:"\\text{Si } x > y \\text{ e } y > z, \\text{ entonces } x > z.", note:"Un n\u00famero real x se llama positivo si x > 0 y negativo si x < 0. Designaremos por R\u207a el conjunto de todos los n\u00fameros reales positivos y por R\u207b el conjunto de todos los n\u00fameros reales negativos.", sourcePage:"p. 3" },
              { type:"obs", label:"Notaci\u00f3n", tex:"x \\leq y", description:"abrevia la afirmaci\u00f3n 'x < y o x = y'.", dem:null, sourcePage:"p. 3" },
              { type:"obs", label:"Notaci\u00f3n", tex:"x \\geq y", description:"se utiliza de forma an\u00e1loga.", dem:null, sourcePage:"p. 3" },
              { type:"teo", label:"Teorema 1.1", tex:"\\text{Sean } a \\text{ y } b \\text{ n\u00fameros reales tales que } a \\leq b + \\epsilon \\text{ para cada } \\epsilon > 0. \\text{ Entonces } a \\leq b.", dem:"Si b < a, entonces la desigualdad (1) no se satisface para \u03b5 = (a - b)/2 puesto que b + \u03b5 = b + (a - b)/2 = (a + b)/2 < (a + a)/2 = a. Por lo tanto, por el axioma 6, resulta que a \u2264 b. \\blacksquare", sourcePage:"p. 3" },
              { type:"obs", label:"1.4 REPRESENTACION GEOMETRICA DE LOS NUMEROS REALES", tex:"Los n\u00fameros reales son, a menudo, representados geom\u00e9tricamente como puntos de una recta (denominada recta real o eje real). Se elige un punto para que represente el 0 y otro a la derecha del 0 para que represente el 1, como muestra la Fig. 1.1. Esta elecci\u00f3n determina la escala. Con un conjunto apropiado de axiomas para la Geometr\u00eda eucl\u00eddea a cada punto de la recta real corresponde un n\u00famero real y uno solo y, rec\u00edprocamente, cada n\u00famero real est\u00e1 representado por un punto de la recta real y uno solo. Es usual referirse al punto x en vez de referirse al punto correspondiente al n\u00famero real x. La relaci\u00f3n de orden admite una interpretaci\u00f3n geom\u00e9trica simple. Si x < y el punto x est\u00e1 a la izquierda del punto y, como muestra la figura 1.1. Los n\u00fameros positivos est\u00e1n a la derecha del 0 y los n\u00fameros negativos est\u00e1n a la izquierda del 0. Si a < b un punto x satisface las desigualdades a < x < b si y s\u00f3lo si, x est\u00e1 entre a y b.", sourcePage:"p. 4" },
              { type:"obs", label:"1.5 INTERVALOS", tex:"El conjunto de todos los puntos comprendidos entre a y b se denomina intervalo. A menudo es importante distinguir entre los intervalos que incluyen sus extremos y los intervalos que no los incluyen.", sourcePage:"p. 4" },
              { type:"obs", label:"Notaci\u00f3n", tex:"\\{x: x \\text{ verifica } P\\}", description:"designa el conjunto de todos los n\u00fameros reales x tales que satisfacen la propiedad P.", dem:null, sourcePage:"p. 4" },
              { type:"def", label:"Definici\u00f3n 1.2", tex:"\\text{Supongamos } a < b. \\text{ El intervalo abierto } (a,b) \\text{ se define por } (a,b) = \\{x: a < x < b\\}. \\text{ El intervalo cerrado } [a,b] \\text{ es el conjunto } \\{x: a \\leq x \\leq b\\}. \\text{Los intervalos semiabiertos } (a,b] \\text{ y } [a,b) \\text{ se definen an\u00e1logamente utilizando, respectivamente, las desigualdades } a < x \\leq b \\text{ y } a \\leq x < b.", dem:null, sourcePage:"p. 4" },
              { type:"def", label:"Intervalos infinitos", tex:"(a, +\\infty) = \\{x: x > a\\}, \\quad [a, +\\infty) = \\{x: x \\geq a\\}, \\quad (-\\infty, a) = \\{x: x < a\\}, \\quad (-\\infty, a] = \\{x: x \\leq a\\}.", note:"Se utiliza a veces el intervalo (-\u221e, +\u221e) para designar la recta real R. Un solo punto es considerado como un intervalo cerrado <degenerado>. Los s\u00edmbolos +\u221e y -\u221e se utilizan aqu\u00ed tan solo por conveniencias de notaci\u00f3n y no deben ser considerados como n\u00fameros reales.", dem:null, sourcePage:"pp. 4-5" },
              { type:"def", label:"Definici\u00f3n 1.3", tex:"\\text{Un conjunto de n\u00fameros reales se denomina conjunto inductivo si tiene las dos propiedades siguientes: a) El n\u00famero 1 est\u00e1 en el conjunto. b) Para cada } x \\text{ del conjunto, el n\u00famero } x + 1 \\text{ est\u00e1 tambi\u00e9n en el conjunto.}", dem:null, sourcePage:"p. 5" },
              { type:"def", label:"Definici\u00f3n 1.4", tex:"\\text{Un n\u00famero real se denomina entero positivo si pertenece a cada uno de los conjuntos inductivos. El conjunto de los enteros positivos se designa por } \\mathbf{Z}^+.", note:"El conjunto Z\u207a es, a su vez, inductivo. Contiene al n\u00famero 1, al n\u00famero 1+1 (designado por 2), al n\u00famero 2+1 (designado por 3), y as\u00ed sucesivamente. Como Z\u207a es subconjunto de cada uno de los conjuntos inductivos consideraremos a Z\u207a como el menor conjunto inductivo. Esta propiedad de Z\u207a se denomina, a menudo, principio de inducci\u00f3n.", dem:null, sourcePage:"p. 5" },
              { type:"obs", label:"Notaci\u00f3n", tex:"\\mathbf{Z}", description:"designa el conjunto de los enteros (positivos, negativos y el cero).", dem:null, sourcePage:"p. 5" },
              { type:"obs", label:"Notaci\u00f3n", tex:"d|n", description:"se lee 'd divide a n' y significa que existe un entero c tal que n = cd.", dem:null, sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.5", tex:"\\text{Cada entero } n > 1 \\text{ es primo o producto de primos.}", dem:"Utilizaremos la inducci\u00f3n sobre n. El teorema se verifica trivialmente para n = 2. Supongamos que es cierto para cada entero k con 1 < k < n. Si n no es primo, admite un divisor d con 1 < d < n. Por lo tanto, n = cd, con 1 < c < n. Puesto que tanto c como d son < n, cada uno es primo o es producto de primos; luego n es un producto de primos. \\blacksquare", sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.6", tex:"\\text{Cada par de enteros } a \\text{ y } b \\text{ admite un divisor com\u00fan } d \\text{ de la forma } d = ax + by \\text{ donde } x \\text{ e } y \\text{ son enteros. Adem\u00e1s, cada divisor com\u00fan de } a \\text{ y } b \\text{ divide a } d.", note:"Si d es un divisor com\u00fan de a y b de la forma d = ax + by, entonces -d es tambi\u00e9n un divisor com\u00fan de la misma forma, -d = a(-x) + b(-y). De estos dos divisores comunes s\u00f3lo el no negativo se denomina el m\u00e1ximo com\u00fan divisor de a y de b y se designa por mcd(a, b) o, simplemente, por (a, b). Si (a, b) = 1, se dice que a y b son primos entre s\u00ed.", dem:"Supongamos primeramente que a \u2265 0 y b \u2265 0 y procedamos por inducci\u00f3n sobre n = a + b. Si n = 0, entonces a = b = 0 y podemos tomar d = 0 con x = y = 0. Supongamos entonces que el teorema ha sido probado para 0, 1, 2, \u2026, n-1. Por simetr\u00eda podemos suponer a \u2265 b. Si b = 0, entonces d = a, x = 1, y = 0. Si b \u2265 1 podemos aplicar la hip\u00f3tesis de inducci\u00f3n a a-b y a b, ya que su suma es a = n - b \u2264 n-1. Por lo tanto existe un divisor com\u00fan d de a-b y b de la forma d = (a-b)x + by. Este entero d divide tambi\u00e9n a (a-b)+b = a, luego d es un divisor com\u00fan de a y de b y tenemos que d = ax + (y-x)b, es combinaci\u00f3n lineal de a y b. Para completar la demostraci\u00f3n debemos probar que cada divisor com\u00fan divide a d. Como un divisor com\u00fan divide a a y a b, dividir\u00e1 tambi\u00e9n a la combinaci\u00f3n lineal ax + (y-x)b = d. Esto completa la demostraci\u00f3n si a \u2265 0 y b \u2265 0. Si uno de ellos o ambos fuesen negativos, aplicar\u00edamos el resultado que acabamos de demostrar a |a| y |b|. \\blacksquare", sourcePage:"p. 6" },
              { type:"teo", label:"Teorema 1.7 (Lema de Euclides)", tex:"\\text{Si } a|bc \\text{ y } (a, b) = 1, \\text{ entonces } a|c.", dem:"Como (a, b) = 1, podemos escribir 1 = ax + by. Por lo tanto, c = acx + bcy. Pero a|acx y a|bcy, luego a|c. \\blacksquare", sourcePage:"p. 7" },
              { type:"teo", label:"Teorema 1.8", tex:"\\text{Si un n\u00famero primo } p \\text{ divide a } ab, \\text{ entonces } p|a \\text{ o } p|b. \\text{ En general, si un n\u00famero primo } p \\text{ divide al producto } a_1 \\cdots a_k, \\text{ entonces } p \\text{ divide a uno de los factores por lo menos.}", dem:"Supongamos que p|ab y que p no divida a a. Si probamos que (p, a) = 1, el lema de Euclides implica que p|b. Sea d = (p, a). Entonces d|p, luego d = 1 o d = p. No puede ser que d = p ya que d|a, pero p no divide a a. Por lo tanto, d = 1. Para demostrar la afirmaci\u00f3n m\u00e1s general se procede por inducci\u00f3n sobre el n\u00famero k de factores. Los detalles se dejan al lector. \\blacksquare", sourcePage:"p. 7" },
              { type:"teo", label:"Teorema 1.9 (Teorema de descomposici\u00f3n \u00fanica)", tex:"\\text{Cada entero } n > 1 \\text{ puede ser representado como producto de factores primos, y si se prescinde del orden de los factores la representaci\u00f3n es \u00fanica.}", dem:"Procederemos por inducci\u00f3n sobre n. El teorema es cierto para n = 2. Supongamos, entonces, que es cierto para todos los enteros mayores que 1 y menores que n. Si n es primo, no hay nada que demostrar. Supongamos, por lo tanto, que n es compuesto y que admite dos descomposiciones en factores primos; a saber n = p\u2081p\u2082\u2026p_s = q\u2081q\u2082\u2026q_t. Deseamos probar que s = t y que cada p es igual a alg\u00fan q. Dado que p\u2081 divide a q\u2081\u00b7q\u2082\u2026q_t, divide por lo menos a uno de los factores. Cambiando los \u00edndices de las q, si es necesario, se puede suponer p\u2081|q\u2081. Por lo tanto, p\u2081 = q\u2081 ya que tanto p\u2081 como q\u2081 son primos. En (2) simplificamos p\u2081 en ambos miembros y obtenemos n/p\u2081 = p\u2082\u2026p_s = q\u2082\u2026q_t. Como n es compuesto, 1 < n/p\u2081 < n; luego por la hip\u00f3tesis de inducci\u00f3n las dos descomposiciones de n/p\u2081 son id\u00e9nticas, si se prescinde del orden de los factores. Por lo tanto, lo mismo es cierto para (2) y la demostraci\u00f3n est\u00e1 terminada. \\blacksquare", sourcePage:"pp. 7-8" },
              { type:"obs", label:"1.8 LOS N\u00daMEROS RACIONALES", tex:"Los cocientes de enteros a/b (donde b \u2260 0) se llamar\u00e1n n\u00fameros racionales. Por ejemplo, 1/2, -7/5, y 6 son n\u00fameros racionales. El conjunto de los n\u00fameros racionales, que designaremos por Q, contiene a Z como subconjunto. Observe el lector que todos los axiomas de cuerpo y todos los axiomas de orden se verifican en Q. Suponemos que el lector est\u00e1 familiarizado con ciertas propiedades elementales de los n\u00fameros racionales. Por ejemplo, si a y b son racionales, su media (a+b)/2 tambi\u00e9n lo es y est\u00e1 comprendida entre a y b. As\u00ed pues, entre dos n\u00fameros racionales hay una infinidad de n\u00fameros racionales, lo cual implica que, dado un n\u00famero racional cualquiera, no sea posible hablar del n\u00famero racional \u00abinmediato superior\u00bb.", sourcePage:"p. 8" },
              { type:"obs", label:"1.9 LOS N\u00daMEROS IRRACIONALES", tex:"Los n\u00fameros reales que no son racionales se denominan irracionales. Por ejemplo, los n\u00fameros \u221a2, e, \u03c0 y e^\u03b1 son irracionales.", sourcePage:"p. 8" },
              { type:"teo", label:"Teorema 1.10", tex:"\\text{Si } n \\text{ es un entero positivo que no sea un cuadrado perfecto, entonces } \\sqrt{n} \\text{ es irracional.}", dem:"Suponemos en primer lugar que n no admite ning\u00fan divisor >1 que sea cuadrado perfecto. Si admitimos que \u221an es racional, llegamos a contradicci\u00f3n. Supongamos que \u221an = a/b, donde a y b son enteros sin divisores comunes. Entonces nb\u00b2 = a\u00b2, dado que el primer miembro de esta igualdad es un m\u00faltiplo de n, tambi\u00e9n lo ser\u00e1 a\u00b2. Sin embargo, si a\u00b2 es m\u00faltiplo de n, a deber\u00e1 serlo ya que n no admite divisores >1 que sean cuadrados perfectos. (Esto se ve f\u00e1cilmente examinando la descomposici\u00f3n de a en factores primos.) Todo ello significa que a = cn, donde c es un entero. Entonces la ecuaci\u00f3n nb\u00b2 = a\u00b2 se transforma en nb\u00b2 = c\u00b2n\u00b2, o b\u00b2 = nc\u00b2. El mismo argumento prueba que b debe ser asimismo m\u00faltiplo de n. Entonces a y b ser\u00edan ambos m\u00faltiplos de n, lo cual contradice el hecho de que a y b carecen de divisores comunes. Esto finaliza la demostraci\u00f3n en el caso de que n no admita un divisor >1 que sea cuadrado perfecto. Si n admite un factor que sea cuadrado perfecto, podremos escribir n = m\u00b2k, donde k > 1 y k no admite divisores >1 que sean cuadrados perfectos. Por lo tanto \u221an = m\u221ak; y si \u221an fuese racional, el n\u00famero \u221ak ser\u00eda tambi\u00e9n racional, contradiciendo lo que acabamos de demostrar. \\blacksquare", sourcePage:"pp. 8-9" },
              { type:"teo", label:"Teorema 1.11", tex:"\\text{Si } e^x = 1 + x + x^2/2! + x^3/3! + \\cdots + x^n/n! + \\cdots, \\text{ entonces el n\u00famero } e \\text{ es irracional.}", note:"Para una demostraci\u00f3n de la irracionalidad de \u03c0, ver Ejercicio 7.33.", dem:"Probaremos que e\u207b\u00b9 es irracional. La serie e\u207b\u00b9 es una serie alternada con t\u00e9rminos que decrecen constantemente en valor absoluto. En tales series el error cometido al cortar la serie por el n-\u00e9simo t\u00e9rmino tiene el signo algebraico del primer t\u00e9rmino que se desprecia y, en valor absoluto, es menor que el del primer t\u00e9rmino que se desprecia. Por lo tanto, si s_n = \u2211_{k=0}^n (-1)^k/k!, tenemos la desigualdad 0 < e\u207b\u00b9 - s_{2k-1} < 1/(2k)!, de la que se obtiene 0 < (2k-1)!(e\u207b\u00b9 - s_{2k-1}) < 1/(2k) \u2264 1/2, para todo entero k \u2265 1. Ahora bien (2k-1)! s_{2k-1} es siempre un entero. Si e\u207b\u00b9 fuese racional, entonces podr\u00edamos elegir k suficientemente grande para que (2k-1)! e\u207b\u00b9 fuese tambi\u00e9n un entero. A causa de (3) la diferencia entre ambos enteros deber\u00eda ser un n\u00famero comprendido entre 0 y 1/2, lo cual es imposible. Luego e\u207b\u00b9 no es racional y, por tanto, e tampoco lo es. \\blacksquare", sourcePage:"p. 9" },
              { type:"def", label:"Definici\u00f3n 1.12", tex:"\\text{Sea } S \\text{ un conjunto de n\u00fameros reales. Si existe un n\u00famero real } b \\text{ tal que } x \\leq b \\text{ para todo } x \\text{ de } S, \\text{ diremos que } b \\text{ es una cota superior de } S \\text{ y que } S \\text{ est\u00e1 acotado superiormente por } b. \\text{Si una cota superior } b \\text{ es, adem\u00e1s, un elemento de } S, \\text{ b se denomina \u00faltimo elemento o elemento m\u00e1ximo de } S. \\text{ A lo sumo habr\u00e1 uno de tales } b. \\text{ Si existe tal n\u00famero } b, \\text{ escribiremos } b = \\max S. \\text{ Un conjunto carente de cotas superiores se denomina no acotado superiormente. Las definiciones de los t\u00e9rminos cota inferior, acotado inferiormente, primer elemento (o elemento m\u00ednimo) pueden formularse an\u00e1logamente. Si } S \\text{ tiene un elemento m\u00ednimo, designaremos a dicho m\u00ednimo por m\u00edn } S.", dem:null, sourcePage:"p. 10" },
              { type:"def", label:"Definici\u00f3n 1.13", tex:"\\text{Sea } S \\text{ un conjunto de n\u00fameros reales acotado superiormente. Un n\u00famero real } b \\text{ se denomina extremo superior de } S \\text{ si verifica las dos propiedades siguientes: a) } b \\text{ es una cota superior de } S. \\text{ b) Ning\u00fan n\u00famero menor que } b \\text{ es cota superior de } S.", note:"Es f\u00e1cil probar que un conjunto no puede tener dos extremos superiores distintos. Por lo tanto, si existe extremo superior de S, existe s\u00f3lo uno y puede hablarse del extremo superior. Es corriente, en la pr\u00e1ctica, referirse al extremo superior de un conjunto por medio del t\u00e9rmino m\u00e1s breve de supremo, abreviado sup. Adoptamos esta convenci\u00f3n y escribimos b = sup S, para indicar que b es el supremo de S. Si S tiene un elemento m\u00e1ximo, entonces m\u00e1x S = sup S. El extremo inferior o \u00ednfimo de S, designado por inf S, se define de forma an\u00e1loga.", dem:null, sourcePage:"p. 11" },
              { type:"def", label:"Axioma 10", tex:"\\text{Todo conjunto no vac\u00edo } S \\text{ de n\u00fameros reales que est\u00e9 acotado superiormente admite un supremo; es decir, existe un n\u00famero real } b \\text{ tal que } b = \\sup S.", note:"Como consecuencia de este axioma se obtiene que todo conjunto no vac\u00edo de n\u00fameros reales acotado inferiormente admite un \u00ednfimo.", sourcePage:"p. 11" },
              { type:"teo", label:"Teorema 1.14 (Propiedad de la aproximaci\u00f3n)", tex:"\\text{Sea } S \\text{ un conjunto no vac\u00edo de n\u00fameros reales con un supremo que se designa por } b = \\sup S. \\text{ Entonces, para cada } a < b \\text{ existe un } x \\text{ de } S \\text{ tal que } a < x \\leq b.", dem:"Ante todo, x \u2264 b para todo x de S. Si fuese x \u2264 a para todo x de S, entonces a ser\u00eda una cota superior para S menor que el supremo que es la cota superior m\u00ednima. Por lo tanto, x > a para un x de S, por lo menos. \\blacksquare", sourcePage:"p. 12" },
              { type:"teo", label:"Teorema 1.15 (Propiedad aditiva)", tex:"\\text{Dados dos subconjuntos no vac\u00edos de } \\mathbf{R}, A \\text{ y } B, \\text{ sea } C \\text{ el conjunto } C = \\{x + y: x \\in A, y \\in B\\}. \\text{ Si tanto } A \\text{ como } B \\text{ tienen un supremo, entonces } C \\text{ tiene un supremo y } \\sup C = \\sup A + \\sup B.", dem:"Sea a = sup A, b = sup B. Si z \u2208 C, entonces z = x + y, donde x \u2208 A, y \u2208 B, luego z = x + y \u2264 a + b. Por lo tanto a + b es una cota superior de C, luego C admite un supremo, sea c = sup C y c \u2264 a + b. Veremos ahora que a + b \u2264 c. Elijamos un \u03b5 > 0. Por el teorema 1.14 existe un x de A y un y de B tales que a - \u03b5 < x y b - \u03b5 < y. Sumando estas desigualdades, obtenemos a + b - 2\u03b5 < x + y \u2264 c. Luego, a + b < c + 2\u03b5 para cada \u03b5 > 0 y, por el teorema 1.1, a + b \u2264 c. \\blacksquare", sourcePage:"p. 12" },
              { type:"teo", label:"Teorema 1.16 (Propiedad de la comparaci\u00f3n)", tex:"\\text{Dados dos subconjuntos no vac\u00edos } S \\text{ y } T \\text{ de } \\mathbf{R} \\text{ tales que } s \\leq t \\text{ para todo } s \\text{ de } S \\text{ y todo } t \\text{ de } T, \\text{ si } T \\text{ tiene supremo, entonces } S \\text{ tiene supremo, y } \\sup S \\leq \\sup T.", dem:null, sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.17", tex:"\\text{El conjunto } \\mathbf{Z}^+ \\text{ de los enteros positivos 1, 2, 3, ..., no est\u00e1 acotado superiormente.", dem:"Si Z\u207a estuviese acotado superiormente, entonces Z\u207a admitir\u00eda un supremo, tal como a = sup Z\u207a. Por el teorema 1.14 tendr\u00edamos que a - 1 < n para alg\u00fan n de Z\u207a. Por lo tanto n + 1 > a para esta n. Esto contradice el hecho de ser a = sup Z\u207a ya que n+1 \u2208 Z\u207a. \\blacksquare", sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.18", tex:"\\text{Para cada n\u00famero real } x \\text{ existe un entero positivo } n \\text{ tal que } n > x.", dem:"Si no fuese as\u00ed, existir\u00eda un x que ser\u00eda una cota superior para Z\u207a, en contradicci\u00f3n con el teorema 1.17. \\blacksquare", sourcePage:"p. 13" },
              { type:"teo", label:"Teorema 1.19", tex:"\\text{Si } x > 0 \\text{ y si } y \\text{ es un n\u00famero real arbitrario, existe un entero positivo } n \\text{ tal que } nx > y.", dem:"Aplicar el teorema 1.18 sustituyendo x por y/x. \\blacksquare", sourcePage:"p. 13" },
              { type:"def", label:"Definici\u00f3n 1.26", tex:"\\text{Por n\u00famero complejo entenderemos un par ordenado de n\u00fameros reales, que designaremos por } (x_1, x_2). \\text{ La primera componente, } x_1, \\text{ se llama parte real del n\u00famero complejo; la segunda componente, } x_2, \\text{ se llama parte imaginaria. Dos n\u00fameros complejos } x = (x_1, x_2) \\text{ e } y = (y_1, y_2) \\text{ son iguales, y escribiremos } x = y, \\text{ si, y s\u00f3lo si, } x_1 = y_1 \\text{ y } x_2 = y_2. \\text{ Definimos la suma } x + y \\text{ y el producto } xy \\text{ por } x + y = (x_1 + y_1, x_2 + y_2), \\quad xy = (x_1 y_1 - x_2 y_2, x_1 y_2 + x_2 y_1).", note:"El conjunto de todos los n\u00fameros complejos ser\u00e1 designado por C.", dem:null, sourcePage:"p. 19" },
              { type:"teo", label:"Teorema 1.27", tex:"\\text{Las operaciones de suma y multiplicaci\u00f3n que acabamos de definir satisfacen las leyes conmutativa, asociativa y distributiva.", dem:"Solamente demostraremos la propiedad distributiva; las otras demostraciones son m\u00e1s simples. Si x = (x\u2081, x\u2082), y = (y\u2081, y\u2082) y z = (z\u2081, z\u2082), entonces tenemos x(y+z) = (x\u2081, x\u2082)(y\u2081+z\u2081, y\u2082+z\u2082) = (x\u2081y\u2081 + x\u2081z\u2081 - x\u2082y\u2082 - x\u2082z\u2082, x\u2081y\u2082 + x\u2081z\u2082 + x\u2082y\u2081 + x\u2082z\u2081) = (x\u2081y\u2081 - x\u2082y\u2082, x\u2081y\u2082 + x\u2082y\u2081) + (x\u2081z\u2081 - x\u2082z\u2082, x\u2081z\u2082 + x\u2082z\u2081) = xy + xz. \\blacksquare", sourcePage:"pp. 19-20" },
              { type:"teo", label:"Teorema 1.28", tex:"(x_1, x_2) + (0, 0) = (x_1, x_2), \\quad (x_1, x_2)(0, 0) = (0, 0), \\quad (x_1, x_2)(1, 0) = (x_1, x_2), \\quad (x_1, x_2) + (-x_1, -x_2) = (0, 0).", dem:"Las demostraciones son inmediatas a partir de las definiciones, lo mismo que en los teoremas 1.29, 1.30, 1.32 y 1.33. \\blacksquare", sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.29", tex:"\\text{Dados dos n\u00fameros complejos } x = (x_1, x_2) \\text{ e } y = (y_1, y_2), \\text{ existe un n\u00famero complejo } z \\text{ tal que } x + z = y. \\text{ De hecho, } z = (y_1 - x_1, y_2 - x_2). \\text{ Este } z \\text{ se designa por } y - x. \\text{ El n\u00famero complejo } (-x_1, -x_2) \\text{ se designa por } -x.", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.30", tex:"\\text{Para cualquier par de n\u00fameros complejos } x \\text{ e } y, \\text{ tenemos } (-x)y = x(-y) = -(xy) = (-1, 0)(xy).", dem:null, sourcePage:"p. 20" },
              { type:"def", label:"Definici\u00f3n 1.31", tex:"\\text{Si } x = (x_1, x_2) \\neq (0, 0) \\text{ e } y \\text{ son n\u00fameros complejos, definimos } x^{-1} = \\left[ \\frac{x_1}{x_1^2 + x_2^2}, -\\frac{x_2}{x_1^2 + x_2^2} \\right], \\text{ e } y/x = y x^{-1}.", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.32", tex:"\\text{Si } x \\text{ e } y \\text{ son n\u00fameros complejos con } x \\neq (0, 0), \\text{ existe un n\u00famero complejo } z \\text{ tal que } xz = y, \\text{ a saber, } z = yx^{-1}.", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Teorema 1.33", tex:"(x_1, 0) + (y_1, 0) = (x_1 + y_1, 0), \\quad (x_1, 0)(y_1, 0) = (x_1 y_1, 0), \\quad (x_1, 0)/(y_1, 0) = (x_1 / y_1, 0), \\text{ si } y_1 \\neq 0.", note:"Es evidente, que en virtud del teorema 1.33, podemos realizar las operaciones aritm\u00e9ticas de los n\u00fameros complejos de parte imaginaria nula operando tan solo con las partes reales por medio de las operaciones de los n\u00fameros reales. Por lo tanto, los n\u00fameros complejos de la forma (x,0) tienen las mismas propiedades aritm\u00e9ticas que los n\u00fameros reales. Por esta raz\u00f3n es conveniente considerar el sistema de los n\u00fameros reales como un caso particular del sistema de los n\u00fameros complejos, y convendremos en identificar el n\u00famero complejo (x,0) con el n\u00famero real x. Por eso escribiremos x = (x,0). En particular, 0 = (0,0) y 1 = (1,0).", dem:null, sourcePage:"p. 20" },
              { type:"obs", label:"1.22 REPRESENTACION GEOMETRICA DE LOS NUMEROS COMPLEJOS", tex:"As\u00ed como los n\u00fameros reales se representan geom\u00e9tricamente como puntos de una recta, los n\u00fameros complejos se representan como puntos de un plano. El n\u00famero complejo x = (x\u2081, x\u2082) puede ser imaginado como el 'punto' de coordenadas (x\u2081, x\u2082). Hecho esto, la definici\u00f3n de suma coincide con la suma seg\u00fan la regla del paralelogramo. (Ver Fig. 1.2.) La idea de expresar geom\u00e9tricamente los n\u00fameros complejos como puntos de un plano fue formulada por Gauss en su disertaci\u00f3n de 1799 e, independentemente, por Argand en 1806. M\u00e1s tarde Gauss ide\u00f3 la expresi\u00f3n un tanto desafortunada de \u00abn\u00famero complejo\u00bb. Los n\u00fameros complejos admiten otras representaciones geom\u00e9tricas. En vez de utilizar puntos de un plano, se pueden utilizar puntos de otras superficies. Riemann encontr\u00f3 que la esfera es especialmente adecuada para este prop\u00f3sito. Se proyectan los puntos de la esfera desde el Polo Norte sobre el plano tangente a la esfera en el Polo Sur y entonces a cada punto del plano le corresponde un punto sobre la esfera. Con excepci\u00f3n del Polo Norte, a cada punto de la esfera le corresponde un punto sobre el plano y s\u00f3lo uno. Esta correspondencia se denomina una proyecci\u00f3n estereogr\u00e1fica. (Ver Fig. 1.3.)", sourcePage:"pp. 21-22" },
              { type:"def", label:"Definici\u00f3n 1.34", tex:"\\text{El n\u00famero complejo } (0,1) \\text{ se representa por } i \\text{ y se llama unidad imaginaria.", dem:null, sourcePage:"p. 22" },
              { type:"teo", label:"Teorema 1.35", tex:"\\text{Cada n\u00famero complejo } x = (x_1, x_2) \\text{ puede representarse en la forma } x = x_1 + i x_2.", dem:"x\u2081 = (x\u2081, 0), i x\u2082 = (0,1)(x\u2082,0) = (0, x\u2082), x\u2081 + i x\u2082 = (x\u2081,0) + (0, x\u2082) = (x\u2081, x\u2082). \\blacksquare", sourcePage:"p. 22" },
              { type:"teo", label:"Teorema 1.36", tex:"i^2 = -1.", dem:"i\u00b2 = (0,1)(0,1) = (-1,0) = -1. \\blacksquare", sourcePage:"p. 22" },
              { type:"def", label:"Definici\u00f3n 1.37", tex:"\\text{Si } x = (x_1, x_2), \\text{ definimos el m\u00f3dulo, o valor absoluto, de } x \\text{ como el n\u00famero real no negativo } |x| \\text{ dado por } |x| = \\sqrt{x_1^2 + x_2^2}.", dem:null, sourcePage:"p. 23" },
              { type:"teo", label:"Teorema 1.38", tex:"\\text{Para n\u00fameros complejos } x \\text{ e } y \\text{ tenemos: (i) } |x| = 0 \\text{ si, y s\u00f3lo si, } x = 0; \\text{ (ii) } |xy| = |x||y|; \\text{ (iii) } |x/y| = |x|/|y| \\text{ si } y \\neq 0; \\text{ (iv) } |x| = |\\bar{x}|.", dem:"Las afirmaciones (i) y (iv) son inmediatas. Para demostrar (ii), consideremos x = x\u2081 + i x\u2082, y = y\u2081 + i y\u2082, entonces xy = x\u2081y\u2081 - x\u2082y\u2082 + i(x\u2081y\u2082 + x\u2082y\u2081). La afirmaci\u00f3n (ii) se sigue de la relaci\u00f3n |xy|\u00b2 = x\u2081\u00b2y\u2081\u00b2 + x\u2082\u00b2y\u2082\u00b2 + x\u2081\u00b2y\u2082\u00b2 + x\u2082\u00b2y\u2081\u00b2 = (x\u2081\u00b2 + x\u2082\u00b2)(y\u2081\u00b2 + y\u2082\u00b2) = |x|\u00b2|y|\u00b2. La ecuaci\u00f3n (iii) puede deducirse de (ii) escribi\u00e9ndola en la forma |x| = |y| |x/y|. \\blacksquare", sourcePage:"p. 23" },
              { type:"teo", label:"Teorema 1.39 (Desigualdad triangular)", tex:"\\text{Si } x \\text{ e } y \\text{ son n\u00fameros complejos, entonces } |x + y| \\leq |x| + |y|.", dem:null, sourcePage:"p. 23" },
              { type:"obs", label:"1.25 IMPOSIBILIDAD DE ORDENAR LOS N\u00daMEROS COMPLEJOS", tex:"Todav\u00eda no hemos definido ninguna relaci\u00f3n de la forma x < y, si x e y son n\u00fameros complejos cualesquiera, ya que es imposible dar una definici\u00f3n de < para los n\u00fameros complejos que satisfaga las propiedades dadas por los axiomas 6 al 8. Para justificarlo, supongamos que fuese posible definir una relaci\u00f3n de orden < que satisficiera los axiomas 6, 7 y 8. Entonces, como i \u2260 0, se debiera tener i > 0 o i < 0, por el axioma 6. Supongamos que i > 0. Entonces tomando x = y = i en el axioma 8, tendr\u00edamos i\u00b2 > 0, o -1 > 0. Sumando 1 a ambos miembros (axioma 7), obtendr\u00edamos 0 > 1. Por otro lado, aplicando el axioma 8 a -1 > 0, hallar\u00edamos 1 > 0. Tendr\u00edamos, pues, 0 > 1 y tambi\u00e9n 1 > 0, que, por el axioma 6, es imposible. As\u00ed pues, suponer que i > 0 lleva a contradicci\u00f3n. Un razonamiento an\u00e1logo prueba que no es posible i < 0. Por lo tanto, los n\u00fameros complejos no pueden ser ordenados de tal suerte que se verifiquen los axiomas 6, 7 y 8.", sourcePage:"pp. 23-24" },
              { type:"def", label:"Definici\u00f3n 1.40", tex:"\\text{Si } z = x + iy, \\text{ definimos } e^z = e^{x+iy} \\text{ como el n\u00famero complejo } e^x (\\cos y + i \\sin y).", note:"Esta definici\u00f3n coincide claramente con la funci\u00f3n exponencial real cuando z es real (esto es, y = 0).", dem:null, sourcePage:"p. 24" },
              { type:"teo", label:"Teorema 1.41", tex:"\\text{Si } z_1 = x_1 + iy_1 \\text{ y } z_2 = x_2 + iy_2 \\text{ son dos n\u00fameros complejos, entonces tenemos } e^{z_1}e^{z_2} = e^{z_1+z_2}.", dem:"e^{z\u2081} = e^{x\u2081}(cos y\u2081 + i sen y\u2081), e^{z\u2082} = e^{x\u2082}(cos y\u2082 + i sen y\u2082), e^{z\u2081}e^{z\u2082} = e^{x\u2081}e^{x\u2082}[cos y\u2081 cos y\u2082 - sen y\u2081 sen y\u2082 + i(cos y\u2081 sen y\u2082 + sen y\u2081 cos y\u2082)] = e^{x\u2081+x\u2082}[cos(y\u2081+y\u2082) + i sen(y\u2081+y\u2082)] = e^{z\u2081+z\u2082}. \\blacksquare", sourcePage:"pp. 24-25" },
              { type:"teo", label:"Teorema 1.42", tex:"e^z \\text{ jam\u00e1s es cero}.", dem:"e^z e^{-z} = e^{z-z} = e^0 = 1. Por lo tanto, e^z no puede ser cero. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.43", tex:"\\text{Si } x \\text{ es real, entonces } |e^{ix}| = 1.", dem:"|e^{ix}|\u00b2 = cos\u00b2 x + sen\u00b2 x = 1, y |e^{ix}| > 0. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.44", tex:"e^z = 1 \\text{ si, y s\u00f3lo si, } z \\text{ es un m\u00faltiplo entero de } 2\\pi i.", dem:"Si z = 2\u03c0ni, donde n es un entero, entonces e^z = cos(2\u03c0n) + i sen(2\u03c0n) = 1. Rec\u00edprocamente, supongamos que e^z = 1. Esto significa que e^x cos y = 1 y e^x sen y = 0. Como e^x \u2260 0, debe ser sen y = 0, y = k\u03c0, donde k es un entero. Pero cos(k\u03c0) = (-1)^k. Por lo tanto, e^z = (-1)^k e^x. Como e^z = 1, tenemos (-1)^k e^x = 1, luego e^x = (-1)^k. Como e^x > 0, k debe ser par. Por lo tanto e^x = 1 y entonces x = 0. Esto prueba el teorema. \\blacksquare", sourcePage:"p. 25" },
              { type:"teo", label:"Teorema 1.45", tex:"e^{z_1} = e^{z_2} \\text{ si, y s\u00f3lo si, } z_1 - z_2 = 2\\pi i n \\text{ (donde } n \\text{ es un entero).}", dem:"e^{z\u2081} = e^{z\u2082} si, y s\u00f3lo si, e^{z\u2081-z\u2082} = 1. \\blacksquare", sourcePage:"p. 25" },
              { type:"def", label:"Definici\u00f3n 1.46", tex:"\\text{Sea } z = x + iy \\text{ un n\u00famero complejo no nulo. El \u00fanico n\u00famero real } \\theta \\text{ que satisface las condiciones } x = |z| \\cos \\theta, \\quad y = |z| \\sin \\theta, \\quad -\\pi < \\theta \\leq +\\pi \\text{ se llama el argumento principal de } z, \\text{ y se representa por } \\theta = \\arg(z).", dem:null, sourcePage:"p. 26" },
              { type:"teo", label:"Teorema 1.47", tex:"\\text{Todo n\u00famero complejo } z \\neq 0 \\text{ puede ser representado en la forma } z = re^{i\\theta}, \\text{ donde } r = |z| \\text{ y } \\theta = \\arg(z) + 2\\pi n, \\text{ siendo } n \\text{ un entero}.", dem:null, sourcePage:"p. 26" },
              { type:"teo", label:"Teorema 1.48", tex:"\\text{Si } z_1z_2 \\neq 0, \\text{ entonces } \\arg(z_1z_2) = \\arg(z_1) + \\arg(z_2) + 2\\pi n(z_1,z_2), \\text{ donde } n(z_1,z_2) \\text{ es un entero que depende de } z_1 \\text{ y } z_2.", dem:"Si z\u2081 = |z\u2081|e^{i\u03b8\u2081}, z\u2082 = |z\u2082|e^{i\u03b8\u2082}, donde \u03b8\u2081 = arg(z\u2081) y \u03b8\u2082 = arg(z\u2082), entonces z\u2081z\u2082 = |z\u2081z\u2082|e^{i(\u03b8\u2081+\u03b8\u2082)}. Como -\u03c0 < \u03b8\u2081 \u2264 +\u03c0 y -\u03c0 < \u03b8\u2082 \u2264 +\u03c0, tenemos -\u03c0 < \u03b8\u2081+\u03b8\u2082 \u2264 2\u03c0. Por lo tanto existe un entero n tal que -\u03c0 < \u03b8\u2081+\u03b8\u2082+2\u03c0n \u2264 \u03c0. Este n\u00famero n es, precisamente, el n(z\u2081,z\u2082) dado en el teorema, y para este n tenemos arg(z\u2081z\u2082) = \u03b8\u2081+\u03b8\u2082+2\u03c0n. Esto prueba el teorema. \\blacksquare", sourcePage:"p. 26" },
              { type:"def", label:"Definici\u00f3n 1.49", tex:"\\text{Dados un n\u00famero complejo } z \\text{ y un n\u00famero entero } n, \\text{ definimos la } n\\text{-\u00e9sima potencia de } z \\text{ como sigue: } z^0 = 1, \\quad z^{n+1} = z^n z \\text{ si } n \\geq 0, \\quad z^{-n} = (z^{-1})^n \\text{ si } z \\neq 0 \\text{ y } n > 0.", dem:null, sourcePage:"pp. 26-27" },
              { type:"teo", label:"Teorema 1.50", tex:"\\text{Dados dos enteros } m \\text{ y } n, \\text{ tenemos, para } z \\neq 0, \\quad z^n z^m = z^{n+m} \\quad \\text{y} \\quad (z_1z_2)^n = z_1^n z_2^n.", dem:null, sourcePage:"p. 27" },
              { type:"teo", label:"Teorema 1.51", tex:"\\text{Si } z \\neq 0, \\text{ y si } n \\text{ es un entero positivo, entonces existen exactamente } n \\text{ n\u00fameros complejos distintos } z_0, z_1, \\ldots, z_{n-1} \\text{ (llamados ra\u00edces } n\\text{-\u00e9simas de } z), \\text{ tales que } z_k^n = z \\text{ para cada } k. \\text{ Adem\u00e1s, estas ra\u00edces son dadas por las f\u00f3rmulas } z_k = Re^{i\\phi_k}, \\text{ donde } R = |z|^{1/n}, \\quad \\phi_k = \\frac{\\arg(z) + 2\\pi k}{n} \\quad (k = 0,1,2,\\ldots,n-1).", note:"Las n ra\u00edces n-\u00e9simas de z est\u00e1n igualmente espaciadas sobre el c\u00edrculo de radio R = |z|^{1/n}, con centro en el origen.", dem:"Los n n\u00fameros complejos Re^{i\u03c6_k}, 0 \u2264 k \u2264 n-1, son distintos y cada uno de ellos es una ra\u00edz n-\u00e9sima de z, ya que (Re^{i\u03c6_k})\u207f = R\u207fe^{in\u03c6_k} = |z|e^{i(arg(z)+2\u03c0k)} = z. Debemos probar ahora que no hay otras ra\u00edces n-\u00e9simas de z. Supongamos que w = Ae^{i\u03b1} es un n\u00famero complejo tal que w\u207f = z. Entonces |w|\u207f = |z|, de donde A\u207f = |z|, A = |z|^{1/n}. Por lo tanto w\u207f = z puede escribirse e^{i\u03b1n} = e^{i[arg(z)]}, que implica n\u03b1 - arg(z) = 2\u03c0k para alg\u00fan entero k. Luego \u03b1 = [arg(z) + 2\u03c0k]/n. Pero mientras k toma todos los valores, w toma s\u00f3lo los valores distintos z\u2080, \u2026, z_{n-1}. (Ver Fig. 1.4.) \\blacksquare", sourcePage:"p. 27" },
              { type:"teo", label:"Teorema 1.52", tex:"\\text{Si } z \\text{ es un n\u00famero complejo } \\neq 0, \\text{ existen n\u00fameros complejos } w \\text{ tales que } e^w = z. \\text{ Uno de tales } w \\text{ es el n\u00famero complejo } \\log |z| + i \\arg(z), \\text{ y todos los dem\u00e1s tienen la forma } \\log |z| + i \\arg(z) + 2n\\pi i, \\text{ donde } n \\text{ es un entero}.", dem:"Como e^{log|z| + i arg(z)} = e^{log|z|}e^{i arg(z)} = |z|e^{i arg(z)} = z, vemos que w = log|z| + i arg(z) es una soluci\u00f3n de la ecuaci\u00f3n e^w = z. Pero si w\u2081 es otra soluci\u00f3n, entonces e^w = e^{w\u2081}, y, por lo tanto, w - w\u2081 = 2n\u03c0i. \\blacksquare", sourcePage:"p. 28" },
              { type:"def", label:"Definici\u00f3n 1.53", tex:"\\text{Sea } z \\neq 0 \\text{ un n\u00famero complejo dado. Si } w \\text{ es un n\u00famero complejo tal que } e^w = z, \\text{ entonces } w \\text{ se denomina un logaritmo de } z. \\text{ El valor particular de } w \\text{ dado por } w = \\log |z| + i \\arg(z) \\text{ se llama logaritmo principal de } z, \\text{ y para este } w \\text{ escribiremos } w = \\operatorname{Log} z.", dem:null, sourcePage:"p. 28" },
              { type:"teo", label:"Teorema 1.54", tex:"\\text{Si } z_1z_2 \\neq 0, \\text{ entonces } \\operatorname{Log}(z_1z_2) = \\operatorname{Log}z_1 + \\operatorname{Log}z_2 + 2\\pi i n(z_1,z_2), \\text{ donde } n(z_1,z_2) \\text{ es el entero definido en el teorema 1.48}.", dem:"Log(z\u2081z\u2082) = log|z\u2081z\u2082| + i arg(z\u2081z\u2082) = log|z\u2081| + log|z\u2082| + i[arg(z\u2081) + arg(z\u2082) + 2\u03c0 n(z\u2081,z\u2082)]. \\blacksquare", sourcePage:"p. 29" },
              { type:"def", label:"Definici\u00f3n 1.55", tex:"\\text{Si } z \\neq 0 \\text{ y si } w \\text{ es un n\u00famero complejo cualquiera, definimos } z^w = e^{w \\operatorname{Log} z}.", dem:null, sourcePage:"p. 29" },
              { type:"teo", label:"Teorema 1.56", tex:"z^{w_1}z^{w_2} = z^{w_1+w_2} \\text{ si } z \\neq 0.", dem:"z^{w\u2081+w\u2082} = e^{(w\u2081+w\u2082)Log z} = e^{w\u2081 Log z} e^{w\u2082 Log z} = z^{w\u2081}z^{w\u2082}. \\blacksquare", sourcePage:"p. 29" },
              { type:"teo", label:"Teorema 1.57", tex:"\\text{Si } z_1z_2 \\neq 0, \\text{ entonces } (z_1z_2)^w = z_1^w z_2^w e^{2\\pi i w n(z_1,z_2)}, \\text{ donde } n(z_1,z_2) \\text{ es el entero definido en el teorema 1.48}.", dem:"(z\u2081z\u2082)^w = e^{w Log(z\u2081z\u2082)} = e^{w[Log z\u2081 + Log z\u2082 + 2\u03c0i n(z\u2081,z\u2082)]}. \\blacksquare", sourcePage:"pp. 29-30" },
              { type:"def", label:"Definici\u00f3n 1.58", tex:"\\text{Dado un n\u00famero complejo } z, \\text{ definimos } \\cos z = \\frac{e^{iz} + e^{-iz}}{2}, \\quad \\sin z = \\frac{e^{iz} - e^{-iz}}{2i}.", note:"Cuando z es real, estas igualdades concuerdan con la definici\u00f3n 1.40.", dem:null, sourcePage:"p. 30" },
              { type:"teo", label:"Teorema 1.59", tex:"\\text{Si } z = x + iy, \\text{ entonces tenemos } \\cos z = \\cos x \\cosh y - i \\sin x \\sinh y, \\quad \\sin z = \\sin x \\cosh y + i \\cos x \\sinh y.", dem:"2 cos z = e^{iz} + e^{-iz} = e^{-y}(cos x + i sen x) + e^{y}(cos x - i sen x) = cos x(e^{y}+e^{-y}) - i sen x(e^{y}-e^{-y}) = 2 cos x cosh y - 2i sen x senh y. La demostraci\u00f3n para sen z es an\u00e1loga. \\blacksquare", sourcePage:"p. 30" },
              { type:"def", label:"Definici\u00f3n 1.60", tex:"\\text{Por sistema de los n\u00fameros complejos ampliado } \\mathbf{C}^* \\text{ entenderemos el plano complejo } \\mathbf{C} \\text{ junto con un s\u00edmbolo } \\infty \\text{ que satisfaga las siguientes propiedades: a) Si } z \\in \\mathbf{C}, \\text{ entonces se tiene } z + \\infty = z - \\infty = \\infty, \\quad z/\\infty = 0. \\text{ b) Si } z \\in \\mathbf{C}, \\text{ pero } z \\neq 0, \\text{ entonces } z(\\infty) = \\infty \\text{ y } z/0 = \\infty. \\text{ c) } \\infty + \\infty = (\\infty)(\\infty) = \\infty.", dem:null, sourcePage:"p. 30" },
              { type:"def", label:"Definici\u00f3n 1.61", tex:"\\text{Cada conjunto de } \\mathbf{C} \\text{ de la forma } \\{z: |z| > r \\geq 0\\} \\text{ se denomina entorno de } \\infty, \\text{ o bola con centro en } \\infty.", note:"El lector puede preguntarse por qu\u00e9 a R le hemos adjuntado dos s\u00edmbolos +\u221e y -\u221e, mientras que a C s\u00f3lo le adjuntamos un s\u00edmbolo, \u221e. La respuesta radica en el hecho de que existe una relaci\u00f3n de orden < entre n\u00fameros reales, mientras que entre n\u00fameros complejos no sucede lo mismo. Para que ciertas propiedades de los n\u00fameros reales que involucran la relaci\u00f3n < se verifiquen sin excepci\u00f3n, es necesario disponer de dos s\u00edmbolos, +\u221e y -\u221e, tales como los definidos anteriormente. Ya hemos mencionado, por ejemplo, que cada conjunto no vac\u00edo tiene un sup en R*.", dem:null, sourcePage:"pp. 30-31" }
            ]
          }
        ]
      },
      {
        id: "ana_b1",
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
