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
              { type:"def", label:"Axioma 1", tex:"$$x + y = y + x, \\quad xy = yx$$", description:"Leyes conmutativas", dem:null, sourcePage:"p. 2" },
              { type:"def", label:"Axioma 2", tex:"$$x + (y + z) = (x + y) + z, \\quad x(yz) = (xy)z$$", description:"Leyes asociativas", dem:null, sourcePage:"p. 2" },
              { type:"def", label:"Axioma 3", tex:"$$x(y + z) = xy + xz$$", description:"Ley distributiva", dem:null, sourcePage:"p. 2" },
              { type:"def", label:"Axioma 4", tex:"Dados dos números reales cualesquiera $x$ e $y$ existe un número real $z$ tal que $x + z = y$. Dicho número $z$ se designará por $y - x$; el número $x - x$ se designará por $0$. Escribiremos $-x$ en vez de $0 - x$ y al número $-x$ lo llamaremos opuesto de $x$.", dem:null, sourcePage:"p. 2" },
              { type:"def", label:"Axioma 5", tex:"Existe, por lo menos, un número real $x \\neq 0$. Si $x$ e $y$ son dos números reales con $x \\neq 0$, entonces existe un número $z$ tal que $xz = y$. Dicho número $z$ se designará por $y/x$; el número $x/x$ se designará por $1$. Escribiremos $x^{-1}$ en vez de $1/x$ si $x \\neq 0$ y a $x^{-1}$ lo llamaremos recíproco o inverso de $x$.", dem:null, sourcePage:"p. 2" },
              { type:"def", label:"Ley de tricotomía", tex:"Se verifica una y sólo una de las relaciones $x = y$, $x < y$, $x > y$.", description:"Ley de tricotomía. ($x > y$ significa lo mismo que $y < x$.)", dem:null, sourcePage:"p. 3" },
              { type:"def", label:"Axioma 7", tex:"Si $x < y$, entonces, para cada $z$, es $x + z < y + z$.", dem:null, sourcePage:"p. 3" },
              { type:"def", label:"Axioma 8", tex:"Si $x > 0$ e $y > 0$, entonces $xy > 0$.", dem:null, sourcePage:"p. 3" },
              { type:"def", label:"Ley de transitividad", tex:"Si $x > y$ e $y > z$, entonces $x > z$.", description:"Ley de transitividad.", dem:null, sourcePage:"p. 3" },
              { type:"obs", label:"Nota", tex:"Un número real $x$ se llama positivo si $x > 0$ y negativo si $x < 0$. Designaremos por $\\mathbb{R}^{+}$ el conjunto de todos los números reales positivos y por $\\mathbb{R}^{-}$ el de todos los negativos. El simbolismo $x \\leq y$ abrevia '$x < y$ o $x = y$'. Un número real $x$ se llama no negativo si $x \\geq 0$.", dem:null, sourcePage:"p. 3" },
              { type:"teo", label:"Principio de aproximación por épsilon", tex:"Sean $a$ y $b$ números reales tales que $a \\leq b + \\varepsilon$ para cada $\\varepsilon > 0$. Entonces $a \\leq b$.", dem:"Si $b < a$, entonces la desigualdad no se satisface para $\\varepsilon = (a-b)/2$, puesto que $b + \\varepsilon = (a+b)/2 < a$. Por el axioma 6, resulta $a \\leq b$. $\\blacksquare$", sourcePage:"p. 3" },
              { type:"def", label:"Intervalos", tex:"Supongamos $a < b$. El intervalo abierto $(a,b)$ se define por $$(a,b) = \\{x : a < x < b\\}.$$ El intervalo cerrado $[a,b]$ es el conjunto $\\{x : a \\leq x \\leq b\\}$. Los intervalos semiabiertos $(a,b]$ y $[a,b)$ usan respectivamente $a < x \\leq b$ y $a \\leq x < b$. Los intervalos infinitos: $$(a,+\\infty) = \\{x : x > a\\}, \\quad [a,+\\infty) = \\{x : x \\geq a\\},$$ $$(-\\infty,a) = \\{x : x < a\\}, \\quad (-\\infty,a] = \\{x : x \\leq a\\}.$$ Los símbolos $+\\infty$ y $-\\infty$ no son números reales.", dem:null, sourcePage:"pp. 4-5" },
              { type:"def", label:"Conjunto inductivo", tex:"Un conjunto de números reales se denomina conjunto inductivo si: (a) el número $1$ está en el conjunto; (b) para cada $x$ del conjunto, el número $x+1$ está también en el conjunto.", dem:null, sourcePage:"p. 5" },
              { type:"def", label:"Enteros positivos", tex:"Un número real se denomina entero positivo si pertenece a cada uno de los conjuntos inductivos. El conjunto de los enteros positivos se designa por $\\mathbb{Z}^{+}$.", note:"$\\mathbb{Z}^{+}$ es el menor conjunto inductivo (principio de inducción). Los opuestos de los enteros positivos son los enteros negativos. Junto con el $0$ forman el conjunto $\\mathbb{Z}$ de los enteros.", dem:null, sourcePage:"p. 5" },
              { type:"teo", label:"Todo entero mayor que 1 es primo o producto de primos", tex:"Cada entero $n > 1$ es primo o producto de primos.", dem:"Por inducción sobre $n$. Trivial para $n=2$. Si $n$ no es primo, admite $d$ con $1 < d < n$, luego $n = cd$ con $1 < c < n$. Como $c$ y $d$ son $< n$, cada uno es primo o producto de primos. $\\blacksquare$", sourcePage:"p. 6" },
              { type:"teo", label:"Divisor común como combinación lineal", tex:"Cada par de enteros $a$ y $b$ admite un divisor común $d$ de la forma $d = ax + by$ donde $x$ e $y$ son enteros. Además, cada divisor común de $a$ y $b$ divide a $d$.", note:"El no negativo de entre $d$ y $-d$ se denomina máximo común divisor, $\\operatorname{mcd}(a,b)$ o $(a,b)$. Si $(a,b)=1$, se dice que $a$ y $b$ son primos entre sí.", dem:"Por inducción sobre $n = a + b$ (con $a,b \\geq 0$). Si $n = 0$: $d = 0$, $x = y = 0$. Si $b = 0$: $d = a$, $x = 1$, $y = 0$. Si $b \\geq 1$: aplicar hipótesis a $a-b$ y $b$ (suma $\\leq n-1$), obteniéndose $d = (a-b)x + by = ax + (y-x)b$. Todo divisor común divide a $d$ pues divide a $a$ y $b$. El caso $a < 0$ o $b < 0$ se reduce a $|a|$, $|b|$. $\\blacksquare$", sourcePage:"p. 6" },
              { type:"teo", label:"Lema de Euclides", tex:"Si $a \\mid bc$ y $(a,b) = 1$, entonces $a \\mid c$.", dem:"Como $(a,b)=1$, existen $x,y$ con $1 = ax+by$. Entonces $c = acx+bcy$. Como $a \\mid acx$ y $a \\mid bcy$, se tiene $a \\mid c$. $\\blacksquare$", sourcePage:"p. 7" },
              { type:"teo", label:"Primo que divide un producto", tex:"Si un número primo $p$ divide a $ab$, entonces $p \\mid a$ o $p \\mid b$. En general, si $p$ divide a $a_1 \\cdots a_k$, entonces $p$ divide a uno de los factores.", dem:"Supongamos $p \\mid ab$ y $p \\nmid a$. Sea $d=(p,a)$; entonces $d \\mid p$, luego $d=1$ o $d=p$. Como $d \\mid a$ y $p \\nmid a$, $d=1$. Por el lema de Euclides, $p \\mid b$. El caso general por inducción sobre $k$. $\\blacksquare$", sourcePage:"p. 7" },
              { type:"teo", label:"Teorema de descomposición única", tex:"Cada entero $n > 1$ puede ser representado como producto de factores primos, y si se prescinde del orden de los factores la representación es única.", dem:"Por inducción sobre $n$. Si $n = p_1 \\cdots p_s = q_1 \\cdots q_t$, entonces $p_1 \\mid q_1 \\cdots q_t$, luego $p_1 = q_1$. Dividiendo: $n/p_1 = p_2 \\cdots p_s = q_2 \\cdots q_t$. Por hipótesis de inducción las descomposiciones de $n/p_1$ son idénticas. $\\blacksquare$", sourcePage:"pp. 7-8" },
              { type:"teo", label:"Irracionalidad de $\\sqrt{n}$", tex:"Si $n$ es un entero positivo que no sea un cuadrado perfecto, entonces $\\sqrt{n}$ es irracional.", dem:"Supongamos primero que $n$ no admite divisores $> 1$ que sean cuadrados perfectos. Si $\\sqrt{n} = a/b$ con $(a,b)=1$, entonces $nb^2 = a^2$. Como $n \\mid a^2$ y $n$ no tiene factores cuadráticos, $n \\mid a$, luego $a = cn$. Sustituyendo: $b^2 = nc^2$, por lo que $n \\mid b$. Contradicción con $(a,b)=1$. Si $n = m^2 k$ con $k$ libre de cuadrados, entonces $\\sqrt{n} = m\\sqrt{k}$; si $\\sqrt{n}$ fuese racional, $\\sqrt{k}$ también lo sería. $\\blacksquare$", sourcePage:"pp. 8-9" },
              { type:"teo", label:"Irracionalidad de $e$", tex:"El número $e$ es irracional.", note:"Para una demostración de la irracionalidad de $\\pi$, ver Ejercicio 7.33.", dem:"Se prueba que $e^{-1}$ es irracional. La serie $e^{-1} = \\sum_{k=0}^{\\infty} (-1)^k/k!$ es alternada con términos decrecientes, luego $0 < e^{-1} - s_{2k-1} < 1/(2k)!$. Multiplicando por $(2k-1)!$: el término $(2k-1)! s_{2k-1}$ es entero, y $0 < (2k-1)!(e^{-1} - s_{2k-1}) < 1/2$. Si $e^{-1}$ fuese racional, $(2k-1)! e^{-1}$ sería entero para $k$ suficientemente grande, dejando una diferencia de enteros estrictamente entre $0$ y $1/2$, imposible. $\\blacksquare$", sourcePage:"p. 9" },
              { type:"def", label:"Cota superior y supremo", tex:"Sea $S$ un conjunto de números reales. Si existe $b \\in \\mathbb{R}$ tal que $x \\leq b$ para todo $x \\in S$, decimos que $b$ es una cota superior de $S$. Si una cota superior $b$ es también elemento de $S$, se denomina elemento máximo y se escribe $b = \\max S$. Un número $b$ es el supremo de $S$ si: (i) $b$ es cota superior de $S$, y (ii) ningún número menor que $b$ es cota superior de $S$. Se escribe $b = \\sup S$.", dem:null, sourcePage:"p. 10" },
              { type:"def", label:"Cota inferior e ínfimo", tex:"Sea $S$ un conjunto de números reales. Si existe $b \\in \\mathbb{R}$ tal que $b \\leq x$ para todo $x \\in S$, decimos que $b$ es una cota inferior de $S$. Si una cota inferior $b$ es elemento de $S$, se denomina elemento mínimo y se escribe $b = \\min S$. Un número $b$ es el ínfimo de $S$ si: (i) $b$ es cota inferior de $S$, y (ii) ningún número mayor que $b$ es cota inferior de $S$. Se escribe $b = \\inf S$.", dem:null, sourcePage:"pp. 10-11" },
              { type:"def", label:"Axioma de completitud", tex:"Todo conjunto no vacío $S$ de números reales que esté acotado superiormente admite un supremo; es decir, existe un número real $b$ tal que $b = \\sup S$.", dem:null, sourcePage:"p. 11" },
              { type:"teo", label:"Propiedad de la aproximación", tex:"Sea $S$ no vacío con supremo $b = \\sup S$. Entonces, para cada $a < b$ existe un $x \\in S$ tal que $a < x \\leq b$.", dem:"Todo $x \\in S$ cumple $x \\leq b$. Si fuese $x \\leq a$ para todo $x \\in S$, $a$ sería cota superior menor que el supremo, contradicción. $\\blacksquare$", sourcePage:"p. 12" },
              { type:"teo", label:"Propiedad aditiva del supremo", tex:"Sean $A$ y $B$ subconjuntos no vacíos de $\\mathbb{R}$, y $C = \\{x + y : x \\in A,\\, y \\in B\\}$. Si $A$ y $B$ tienen supremo, entonces $\\sup C = \\sup A + \\sup B$.", dem:"Sea $a = \\sup A$, $b = \\sup B$. Para todo $z = x+y \\in C$: $z \\leq a+b$, luego $c = \\sup C \\leq a+b$. Para cualquier $\\varepsilon > 0$, por el Teorema 1.14 existen $x \\in A$ y $y \\in B$ con $a - \\varepsilon < x$ y $b - \\varepsilon < y$, luego $a + b - 2\\varepsilon < x+y \\leq c$. Por el Teorema 1.1, $a+b \\leq c$. $\\blacksquare$", sourcePage:"p. 12" },
              { type:"teo", label:"Propiedad de la comparación", tex:"Sean $S$ y $T$ subconjuntos no vacíos de $\\mathbb{R}$ tales que $s \\leq t$ para todo $s \\in S$ y todo $t \\in T$. Si $T$ tiene supremo, entonces $S$ tiene supremo y $\\sup S \\leq \\sup T$.", dem:null, sourcePage:"p. 13" },
              { type:"teo", label:"$\\mathbb{Z}^+$ no está acotado superiormente", tex:"El conjunto $\\mathbb{Z}^{+}$ de los enteros positivos $1, 2, 3, \\ldots$ no está acotado superiormente.", dem:"Si $\\mathbb{Z}^{+}$ estuviese acotado superiormente, tendría supremo $a = \\sup \\mathbb{Z}^{+}$. Por el Teorema 1.14, $a - 1 < n$ para algún $n \\in \\mathbb{Z}^{+}$, luego $n+1 > a$. Pero $n+1 \\in \\mathbb{Z}^{+}$, contradicción. $\\blacksquare$", sourcePage:"p. 13" },
              { type:"teo", label:"Propiedad arquimediana", tex:"Para cada número real $x$ existe un entero positivo $n$ tal que $n > x$.", dem:"Si no existiese tal $n$, $x$ sería cota superior de $\\mathbb{Z}^+$, contradiciendo que $\\mathbb{Z}^+$ no está acotado. $\\blacksquare$", sourcePage:"p. 13" },
              { type:"teo", label:"Propiedad arquimediana (forma general)", tex:"Si $x > 0$ e $y$ es un número real arbitrario, existe un entero positivo $n$ tal que $nx > y$.", dem:"Aplicar la propiedad arquimediana a $y/x$. $\\blacksquare$", sourcePage:"p. 13" },
              { type:"teo", label:"Densidad de $\\mathbb{Q}$ en $\\mathbb{R}$", tex:"Si $x > 0$ e $y < z$, existe un número racional $r$ tal que $y < r < z$.", dem:"Existe $n \\in \\mathbb{Z}^+$ con $n(z-y) > 1$. Sea $m$ el menor entero con $m > ny$; entonces $ny < m \\leq ny+1 < nz$. Dividiendo: $y < m/n < z$. $\\blacksquare$", sourcePage:"pp. 13-14" },
              { type:"def", label:"Valor absoluto", tex:"El valor absoluto de un número real $x$ se define por $$|x| = \\begin{cases} x & \\text{si } x \\geq 0, \\\\ -x & \\text{si } x < 0. \\end{cases}$$", dem:null, sourcePage:"p. 15" },
              { type:"teo", label:"Desigualdad triangular", tex:"Para todo $x, y \\in \\mathbb{R}$: $$|x + y| \\leq |x| + |y|.$$", dem:"De $-|x| \\leq x \\leq |x|$ y $-|y| \\leq y \\leq |y|$, sumando: $-(|x|+|y|) \\leq x+y \\leq |x|+|y|$, lo que equivale a $|x+y| \\leq |x|+|y|$. $\\blacksquare$", sourcePage:"p. 15" },
              { type:"teo", label:"Desigualdad triangular inversa", tex:"Para todo $x, y \\in \\mathbb{R}$: $$\\big||x| - |y|\\big| \\leq |x - y|.$$", dem:"De la desigualdad triangular: $|x| = |(x-y)+y| \\leq |x-y|+|y|$, luego $|x|-|y| \\leq |x-y|$. Por simetría $|y|-|x| \\leq |x-y|$. $\\blacksquare$", sourcePage:"p. 16" },
              { type:"def", label:"Número complejo", tex:"Un número complejo es un par ordenado $(x_1, x_2) \\in \\mathbb{R}^2$. La suma y el producto se definen por $$(x_1,x_2)+(y_1,y_2) = (x_1+y_1,\\, x_2+y_2),$$ $$(x_1,x_2)(y_1,y_2) = (x_1 y_1 - x_2 y_2,\\, x_1 y_2 + x_2 y_1).$$ El conjunto de todos los números complejos se designa por $\\mathbb{C}$.", dem:null, sourcePage:"p. 19" },
              { type:"teo", label:"Leyes algebraicas en $\\mathbb{C}$", tex:"Las operaciones de suma y multiplicación en $\\mathbb{C}$ satisfacen las leyes conmutativa, asociativa y distributiva.", dem:"Solo se demuestra la distributiva. Si $x=(x_1,x_2)$, $y=(y_1,y_2)$, $z=(z_1,z_2)$: $$x(y+z) = (x_1,x_2)(y_1+z_1,y_2+z_2) = (x_1 y_1+x_1 z_1-x_2 y_2-x_2 z_2,\\; x_1 y_2+x_1 z_2+x_2 y_1+x_2 z_1) = xy+xz.$$ $\\blacksquare$", sourcePage:"pp. 19-20" },
              { type:"def", label:"Unidad imaginaria", tex:"El número complejo $(0,1)$ se representa por $i$ y se llama unidad imaginaria. Se cumple $i^2 = -1$.", dem:null, sourcePage:"p. 22" },
              { type:"def", label:"Forma binómica", tex:"Todo número complejo $(x_1, x_2)$ puede escribirse como $z = x_1 + ix_2$, donde $\\operatorname{Re}(z) = x_1$ es la parte real e $\\operatorname{Im}(z) = x_2$ es la parte imaginaria.", dem:null, sourcePage:"p. 22" },
              { type:"def", label:"Conjugado complejo", tex:"Si $z = x_1 + ix_2$, el conjugado de $z$ es $\\bar{z} = x_1 - ix_2$. Se tiene $z\\bar{z} = x_1^2 + x_2^2 \\geq 0$.", dem:null, sourcePage:"p. 22" },
              { type:"def", label:"Módulo de un número complejo", tex:"El módulo o valor absoluto de $z = (x_1,x_2) \\in \\mathbb{C}$ es $$|z| = \\sqrt{x_1^2 + x_2^2} = \\sqrt{z\\bar{z}}.$$", dem:null, sourcePage:"p. 23" },
              { type:"teo", label:"Desigualdad triangular en $\\mathbb{C}$", tex:"Para todo $z, w \\in \\mathbb{C}$: $$|z + w| \\leq |z| + |w|.$$", dem:"Se tiene $|z+w|^2 = z\\bar{z} + z\\bar{w} + \\bar{z}w + w\\bar{w} = |z|^2 + 2\\operatorname{Re}(z\\bar{w}) + |w|^2 \\leq (|z|+|w|)^2$. $\\blacksquare$", sourcePage:"p. 24" },
              { type:"teo", label:"Desigualdad de Cauchy-Schwarz", tex:"Si $a_1, \\ldots, a_n$ y $b_1, \\ldots, b_n$ son números reales cualesquiera, se tiene $$\\left(\\sum_{k=1}^{n} a_k b_k\\right)^2 \\leq \\left(\\sum_{k=1}^{n} a_k^2\\right)\\left(\\sum_{k=1}^{n} b_k^2\\right).$$ La igualdad se verifica si y sólo si existe $x \\in \\mathbb{R}$ tal que $a_k x + b_k = 0$ para cada $k$.", note:"En notación vectorial: $(\\mathbf{a} \\cdot \\mathbf{b})^2 \\leq \\|\\mathbf{a}\\|^2 \\|\\mathbf{b}\\|^2$.", dem:"Sea $A = \\sum a_k^2$, $B = \\sum a_k b_k$, $C = \\sum b_k^2$. La suma $\\sum(a_k x + b_k)^2 \\geq 0$ puede escribirse $Ax^2 + 2Bx + C \\geq 0$. Si $A > 0$, tomando $x = -B/A$ se obtiene $B^2 - AC \\leq 0$. Si $A = 0$, la demostración es trivial. $\\blacksquare$", sourcePage:"p. 17" },
              { type:"def", label:"Sistema ampliado de los números reales $\\mathbb{R}^*$", tex:"El sistema ampliado $\\mathbb{R}^*$ es el conjunto $\\mathbb{R}$ junto con dos símbolos $+\\infty$ y $-\\infty$ que satisfacen: (a) si $x \\in \\mathbb{R}$: $x + (+\\infty) = +\\infty$, $x + (-\\infty) = -\\infty$, $x/(\\pm\\infty) = 0$; (b) si $x > 0$: $x(+\\infty) = +\\infty$, $x(-\\infty) = -\\infty$; (c) si $x < 0$: $x(+\\infty) = -\\infty$, $x(-\\infty) = +\\infty$; (d) $(+\\infty)+(+\\infty) = +\\infty$, $(-\\infty)+(-\\infty) = -\\infty$, $(+\\infty)(+\\infty) = (-\\infty)(-\\infty) = +\\infty$, $(+\\infty)(-\\infty) = -\\infty$; (e) si $x \\in \\mathbb{R}$: $-\\infty < x < +\\infty$.", dem:null, sourcePage:"p. 18" },
              { type:"def", label:"Entorno de $\\pm\\infty$", tex:"Cada intervalo abierto $(a, +\\infty)$ se denomina entorno de $+\\infty$. Cada intervalo abierto $(-\\infty, a)$ se denomina entorno de $-\\infty$.", dem:null, sourcePage:"p. 18" },
              { type:"teo", label:"Elementos neutros en $\\mathbb{C}$", tex:"$$(x_1,x_2)+(0,0) = (x_1,x_2), \\quad (x_1,x_2)(0,0) = (0,0),$$ $$(x_1,x_2)(1,0) = (x_1,x_2), \\quad (x_1,x_2)+(-x_1,-x_2) = (0,0).$$", dem:"Inmediata a partir de las definiciones. $\\blacksquare$", sourcePage:"p. 20" },
              { type:"teo", label:"Resta en $\\mathbb{C}$", tex:"Dados $x = (x_1,x_2)$ e $y = (y_1,y_2)$, existe $z \\in \\mathbb{C}$ tal que $x + z = y$. De hecho, $z = (y_1-x_1, y_2-x_2)$. Este $z$ se designa por $y - x$; el número $(-x_1,-x_2)$ se designa por $-x$.", dem:null, sourcePage:"p. 20" },
              { type:"teo", label:"Signo y producto en $\\mathbb{C}$", tex:"Para cualquier par de números complejos $x$ e $y$: $$(-x)y = x(-y) = -(xy) = (-1,0)(xy).$$", dem:null, sourcePage:"p. 20" },
              { type:"def", label:"Inverso y cociente en $\\mathbb{C}$", tex:"Si $x = (x_1,x_2) \\neq (0,0)$ e $y \\in \\mathbb{C}$, se define $$x^{-1} = \\left(\\frac{x_1}{x_1^2+x_2^2},\\, \\frac{-x_2}{x_1^2+x_2^2}\\right), \\qquad y/x = y\\,x^{-1}.$$", dem:null, sourcePage:"p. 21" },
              { type:"teo", label:"División en $\\mathbb{C}$", tex:"Si $x, y \\in \\mathbb{C}$ con $x \\neq (0,0)$, existe $z \\in \\mathbb{C}$ tal que $xz = y$, a saber $z = yx^{-1}$.", dem:null, sourcePage:"p. 21" },
              { type:"teo", label:"Complejos de parte imaginaria nula", tex:"$$(x_1,0)+(y_1,0) = (x_1+y_1,0), \\quad (x_1,0)(y_1,0) = (x_1 y_1,0), \\quad (x_1,0)/(y_1,0) = (x_1/y_1,0) \\text{ si } y_1 \\neq 0.$$", note:"Los números complejos de la forma $(x,0)$ tienen las mismas propiedades aritméticas que los reales. Por ello se identifica $(x,0)$ con $x \\in \\mathbb{R}$.", dem:null, sourcePage:"p. 21" },
              { type:"teo", label:"Representación binómica", tex:"Cada número complejo $x = (x_1,x_2)$ puede representarse en la forma $x = x_1 + ix_2$.", dem:"$x_1=(x_1,0)$, $ix_2=(0,1)(x_2,0)=(0,x_2)$, luego $x_1+ix_2=(x_1,x_2)$. $\\blacksquare$", sourcePage:"p. 22" },
              { type:"teo", label:"$i^2 = -1$", tex:"$i^2 = -1$.", dem:"$i^2 = (0,1)(0,1) = (-1,0) = -1$. $\\blacksquare$", sourcePage:"p. 22" },
              { type:"teo", label:"Propiedades del módulo", tex:"Para $x, y \\in \\mathbb{C}$: (i) $|(0,0)| = 0$ y $|x| > 0$ si $x \\neq 0$; (ii) $|xy| = |x||y|$; (iii) $|x/y| = |x|/|y|$ si $y \\neq 0$; (iv) $|(x_1,0)| = |x_1|$.", dem:"Las afirmaciones (i) y (iv) son inmediatas. Para (ii): $|xy|^2 = (x_1 y_1 - x_2 y_2)^2 + (x_1 y_2 + x_2 y_1)^2 = (x_1^2+x_2^2)(y_1^2+y_2^2) = |x|^2|y|^2$. La (iii) se deduce de (ii). $\\blacksquare$", sourcePage:"p. 23" },
              { type:"def", label:"Exponencial compleja", tex:"Si $z = x + iy$ con $x, y \\in \\mathbb{R}$, se define $$e^z = e^x(\\cos y + i\\sin y).$$", dem:null, sourcePage:"p. 25" },
              { type:"teo", label:"Ley de los exponentes en $\\mathbb{C}$", tex:"Si $z_1, z_2 \\in \\mathbb{C}$, entonces $e^{z_1} e^{z_2} = e^{z_1+z_2}$.", dem:"Sea $z_k = x_k + iy_k$. Entonces $e^{z_1}e^{z_2} = e^{x_1+x_2}[\\cos(y_1+y_2)+i\\sin(y_1+y_2)] = e^{z_1+z_2}$, usando las fórmulas de adición del seno y coseno. $\\blacksquare$", sourcePage:"p. 25" },
              { type:"teo", label:"$e^z$ nunca es cero", tex:"$e^z \\neq 0$ para todo $z \\in \\mathbb{C}$.", dem:"$e^z e^{-z} = e^0 = 1$, luego $e^z \\neq 0$. $\\blacksquare$", sourcePage:"p. 26" },
              { type:"teo", label:"$|e^{ix}| = 1$", tex:"Si $x \\in \\mathbb{R}$, entonces $|e^{ix}| = 1$.", dem:"$|e^{ix}|^2 = \\cos^2 x + \\sin^2 x = 1$. $\\blacksquare$", sourcePage:"p. 26" },
              { type:"teo", label:"Periodicidad de $e^z$", tex:"$e^z = 1$ si y sólo si $z$ es un múltiplo entero de $2\\pi i$.", dem:"Si $z=2\\pi in$: $e^z=\\cos(2\\pi n)+i\\sin(2\\pi n)=1$. Recíprocamente, $e^z=1$ implica $e^x\\cos y=1$ y $e^x\\sin y=0$. Como $e^x \\neq 0$, $y=k\\pi$, luego $e^x(-1)^k=1$; como $e^x>0$, $k$ es par y $x=0$. $\\blacksquare$", sourcePage:"p. 26" },
              { type:"teo", label:"Igualdad de exponenciales complejas", tex:"$e^{z_1} = e^{z_2}$ si y sólo si $z_1 - z_2 = 2\\pi in$ para algún entero $n$.", dem:"$e^{z_1} = e^{z_2}$ si y sólo si $e^{z_1-z_2} = 1$. $\\blacksquare$", sourcePage:"p. 26" },
              { type:"def", label:"Argumento principal", tex:"Sea $z = x+iy \\neq 0$. El único número real $\\theta$ que satisface $$x = |z|\\cos\\theta, \\quad y = |z|\\sin\\theta, \\quad -\\pi < \\theta \\leq \\pi$$ se llama argumento principal de $z$ y se denota $\\theta = \\arg(z)$.", dem:null, sourcePage:"p. 27" },
              { type:"teo", label:"Representación polar", tex:"Todo $z \\neq 0$ puede representarse como $z = re^{i\\theta}$, donde $r = |z|$ y $\\theta = \\arg(z) + 2\\pi n$ para algún entero $n$.", note:"$(r_1 e^{i\\theta_1})(r_2 e^{i\\theta_2}) = r_1 r_2 e^{i(\\theta_1+\\theta_2)}$, $\\quad \\dfrac{r_1 e^{i\\theta_1}}{r_2 e^{i\\theta_2}} = \\dfrac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}$.", dem:null, sourcePage:"p. 27" },
              { type:"teo", label:"Argumento del producto", tex:"Si $z_1 z_2 \\neq 0$: $$\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) + 2\\pi\\, n(z_1,z_2),$$ donde $n(z_1,z_2) = 0$ si $-\\pi < \\arg z_1 + \\arg z_2 \\leq \\pi$; $= 1$ si $\\arg z_1 + \\arg z_2 \\leq -\\pi$; $= -1$ si $\\arg z_1 + \\arg z_2 > \\pi$.", dem:"Sea $\\theta_k=\\arg(z_k)$. Entonces $z_1 z_2=|z_1 z_2|e^{i(\\theta_1+\\theta_2)}$. Como $-2\\pi < \\theta_1+\\theta_2 \\leq 2\\pi$, existe $n$ con $-\\pi < \\theta_1+\\theta_2+2\\pi n \\leq \\pi$, que es $n(z_1,z_2)$. $\\blacksquare$", sourcePage:"p. 28" },
              { type:"def", label:"Potencias enteras de números complejos", tex:"Dado $z \\in \\mathbb{C}$ y $n \\in \\mathbb{Z}$, se define: $z^0 = 1$; $z^{n+1} = z^n z$ si $n \\geq 0$; $z^{-n} = (z^{-1})^n$ si $z \\neq 0$.", dem:null, sourcePage:"p. 28" },
              { type:"teo", label:"Reglas de exponentes en $\\mathbb{C}$", tex:"Dados $m, n \\in \\mathbb{Z}$ y $z \\neq 0$: $$z^n z^m = z^{n+m}, \\qquad (z_1 z_2)^n = z_1^n z_2^n.$$", dem:"Por inducción. Se deja como ejercicio. $\\blacksquare$", sourcePage:"p. 29" },
              { type:"teo", label:"Raíces $n$-ésimas de un número complejo", tex:"Si $z \\neq 0$ y $n$ es un entero positivo, existen exactamente $n$ números complejos distintos $z_0, z_1, \\ldots, z_{n-1}$ tales que $z_k^n = z$. Están dados por $$z_k = R\\, e^{i\\phi_k}, \\quad R = |z|^{1/n}, \\quad \\phi_k = \\frac{\\arg(z) + 2\\pi k}{n}, \\quad k = 0, 1, \\ldots, n-1.$$", note:"Las $n$ raíces $n$-ésimas están igualmente espaciadas sobre el círculo de radio $R = |z|^{1/n}$ centrado en el origen.", dem:"Los $n$ números $Re^{i\\phi_k}$ son distintos y satisfacen $(Re^{i\\phi_k})^n = R^n e^{in\\phi_k} = |z|\\,e^{i(\\arg(z)+2\\pi k)} = z$. $\\blacksquare$", sourcePage:"pp. 29-30" },
              { type:"def", label:"Logaritmo complejo", tex:"Si $z \\neq 0$, un número complejo $w$ es un logaritmo de $z$ si $e^w = z$; se escribe $w = \\log z$. El valor principal, $\\operatorname{Log} z$, es aquel cuya parte imaginaria está en $(-\\pi, \\pi]$: si $z = re^{i\\theta}$ con $r > 0$ y $-\\pi < \\theta \\leq \\pi$, entonces $$\\operatorname{Log} z = \\ln r + i\\theta.$$", dem:null, sourcePage:"p. 30" },
              { type:"teo", label:"Logaritmo del producto", tex:"Si $z_1, z_2 \\neq 0$: $$\\operatorname{Log}(z_1 z_2) = \\operatorname{Log} z_1 + \\operatorname{Log} z_2 + 2\\pi i\\, n(z_1,z_2),$$donde $n(z_1,z_2)$ es el entero del teorema del argumento del producto.", dem:"Escribiendo $z_k = r_k e^{i\\theta_k}$: $\\operatorname{Log}(z_1 z_2) = \\ln(r_1 r_2) + i\\arg(z_1 z_2) = (\\ln r_1 + \\ln r_2) + i(\\theta_1+\\theta_2+2\\pi n) = \\operatorname{Log} z_1 + \\operatorname{Log} z_2 + 2\\pi in$. $\\blacksquare$", sourcePage:"p. 31" },
              { type:"def", label:"Potencias complejas", tex:"Si $z \\neq 0$ y $w \\in \\mathbb{C}$, se define $z^w = e^{w \\log z}$, donde $\\log z$ es cualquier logaritmo de $z$. El valor principal se obtiene usando $\\operatorname{Log} z$.", dem:null, sourcePage:"p. 31" },
              { type:"teo", label:"Potencia compleja del producto", tex:"Si $z_1, z_2 \\neq 0$: $$(z_1 z_2)^w = z_1^w\\, z_2^w\\, e^{2\\pi i w\\, n(z_1,z_2)}.$$", dem:"$(z_1 z_2)^w = e^{w\\log(z_1 z_2)} = e^{w[\\log z_1 + \\log z_2 + 2\\pi i n]} = z_1^w z_2^w e^{2\\pi iwn}$. $\\blacksquare$", sourcePage:"p. 32" },
              { type:"def", label:"Seno y coseno complejos", tex:"Para $z \\in \\mathbb{C}$: $$\\cos z = \\frac{e^{iz}+e^{-iz}}{2}, \\qquad \\sin z = \\frac{e^{iz}-e^{-iz}}{2i}.$$", note:"Cuando $z$ es real, estas igualdades concuerdan con las definiciones del cálculo elemental.", dem:null, sourcePage:"p. 32" },
              { type:"teo", label:"Fórmulas de seno y coseno complejos", tex:"Si $z = x + iy$: $$\\cos z = \\cos x \\cosh y - i\\sin x \\sinh y,$$ $$\\sin z = \\sin x \\cosh y + i\\cos x \\sinh y.$$", dem:"$$2\\cos z=e^{iz}+e^{-iz}=\\cos x(e^y+e^{-y})-i\\sin x(e^y-e^{-y})=2\\cos x\\cosh y-2i\\sin x\\sinh y.$$ Análogamente para $\\sin z$. $\\blacksquare$", sourcePage:"p. 33" },
              { type:"def", label:"Plano complejo ampliado $\\mathbb{C}^*$", tex:"El sistema de los números complejos ampliado $\\mathbb{C}^*$ es el plano complejo $\\mathbb{C}$ junto con un símbolo $\\infty$ que satisface: (a) si $z \\in \\mathbb{C}$: $z + \\infty = z - \\infty = \\infty$, $z/\\infty = 0$; (b) si $z \\neq 0$: $z(\\infty) = \\infty$, $z/0 = \\infty$; (c) $\\infty + \\infty = (\\infty)(\\infty) = \\infty$.", dem:null, sourcePage:"p. 34" },
              { type:"def", label:"Entorno de $\\infty$ en $\\mathbb{C}^*$", tex:"Cada conjunto de la forma $\\{z \\in \\mathbb{C} : |z| > r \\geq 0\\}$ se denomina entorno de $\\infty$, o bola con centro en $\\infty$.", dem:null, sourcePage:"p. 34" }
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
