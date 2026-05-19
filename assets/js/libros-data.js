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
        chapters: [
          {
            num: 1, title: "Conjuntos",
            notes: [
              { type:"def", label:"Conjunto",
                tex:"Un $\\textit{conjunto}$ es una colección bien definida de objetos llamados $\\textit{elementos}$. Se escribe $a\\in A$ si $a$ pertenece al conjunto $A$, y $a\\notin A$ en caso contrario." },
              { type:"def", label:"Operaciones con conjuntos",
                tex:"Para conjuntos $A,B$ dentro de un universo $U$:\\[A\\cup B=\\{x\\mid x\\in A\\text{ o }x\\in B\\},\\quad A\\cap B=\\{x\\mid x\\in A\\text{ y }x\\in B\\},\\quad A^c=\\{x\\in U\\mid x\\notin A\\}\\]" },
              { type:"teo", label:"Leyes de De Morgan",
                tex:"Para cualesquiera conjuntos $A$ y $B$:\\[(A\\cup B)^c=A^c\\cap B^c\\qquad(A\\cap B)^c=A^c\\cup B^c\\]",
                dem:"Probamos $(A\\cup B)^c=A^c\\cap B^c$. Sea $x\\in(A\\cup B)^c$; entonces $x\\notin A\\cup B$, así que $x\\notin A$ y $x\\notin B$, es decir $x\\in A^c\\cap B^c$. Recíprocamente, si $x\\in A^c\\cap B^c$ entonces $x\\notin A$ y $x\\notin B$, luego $x\\notin A\\cup B$, i.e. $x\\in(A\\cup B)^c$. La segunda ley se demuestra de forma análoga. $\\blacksquare$" },
              { type:"teo", label:"Principio de inclusión-exclusión",
                tex:"Para conjuntos finitos $A$ y $B$:\\[|A\\cup B|=|A|+|B|-|A\\cap B|\\]En general: $|A_1\\cup\\cdots\\cup A_n|=\\displaystyle\\sum_i|A_i|-\\sum_{i<j}|A_i\\cap A_j|+\\cdots+(-1)^{n+1}|A_1\\cap\\cdots\\cap A_n|$",
                dem:"Particionamos $A\\cup B$ en tres partes disjuntas: $A\\setminus B$, $B\\setminus A$ y $A\\cap B$. Entonces $|A\\cup B|=|A\\setminus B|+|B\\setminus A|+|A\\cap B|$. Como $|A|=|A\\setminus B|+|A\\cap B|$ y $|B|=|B\\setminus A|+|A\\cap B|$, sumando: $|A|+|B|=|A\\cup B|+|A\\cap B|$. Despejando: $|A\\cup B|=|A|+|B|-|A\\cap B|$. $\\blacksquare$" },
              { type:"def", label:"Conjunto potencia y producto cartesiano",
                tex:"El $\\textit{conjunto potencia}$ de $A$ es $\\mathcal{P}(A)=\\{B\\mid B\\subseteq A\\}$; se tiene $|\\mathcal{P}(A)|=2^{|A|}$. El $\\textit{producto cartesiano}$ es $A\\times B=\\{(a,b)\\mid a\\in A,\\,b\\in B\\}$ con $|A\\times B|=|A|\\cdot|B|$." },
            ]
          },
          {
            num: 2, title: "Relaciones y funciones",
            notes: [
              { type:"def", label:"Relación binaria",
                tex:"Una $\\textit{relación}$ de $A$ en $B$ es un subconjunto $R\\subseteq A\\times B$. El $\\textit{dominio}$ de $R$ es $\\{a\\in A\\mid\\exists b:(a,b)\\in R\\}$ y la $\\textit{imagen}$ es $\\{b\\in B\\mid\\exists a:(a,b)\\in R\\}$." },
              { type:"def", label:"Función",
                tex:"Una $\\textit{función}$ $f:A\\to B$ es una relación donde cada $a\\in A$ tiene exactamente un $b$ con $(a,b)\\in f$. Se denota $f(a)=b$. La $\\textit{imagen directa}$ de $S\\subseteq A$ es $f(S)=\\{f(a)\\mid a\\in S\\}$." },
              { type:"def", label:"Tipos de funciones",
                tex:"$f:A\\to B$ es $\\textit{inyectiva}$ si $f(a_1)=f(a_2)\\Rightarrow a_1=a_2$; $\\textit{sobreyectiva}$ si $f(A)=B$; $\\textit{biyectiva}$ si es inyectiva y sobreyectiva. Una biyección admite función inversa $f^{-1}:B\\to A$." },
              { type:"def", label:"Relación de equivalencia",
                tex:"Una relación $\\sim$ en $A$ es de $\\textit{equivalencia}$ si es reflexiva ($a\\sim a$), simétrica ($a\\sim b\\Rightarrow b\\sim a$) y transitiva ($a\\sim b,\\,b\\sim c\\Rightarrow a\\sim c$). La $\\textit{clase}$ de $a$ es $[a]=\\{x\\in A\\mid x\\sim a\\}$." },
              { type:"teo", label:"Partición por clases de equivalencia",
                tex:"Toda relación de equivalencia $\\sim$ en $A$ induce una partición $A/\\!\\sim=\\{[a]\\mid a\\in A\\}$ de $A$ en clases disjuntas que cubren $A$.",
                dem:"Sean $[a]$ y $[b]$ dos clases. Si $[a]\\cap[b]\\neq\\varnothing$ existe $c$ con $c\\sim a$ y $c\\sim b$. Por simetría y transitividad $a\\sim b$, luego $[a]\\subseteq[b]$ y $[b]\\subseteq[a]$, i.e. $[a]=[b]$. Además $a\\in[a]$ por reflexividad, así las clases cubren $A$. $\\blacksquare$" },
              { type:"def", label:"Cardinalidad",
                tex:"Dos conjuntos $A$ y $B$ tienen la misma $\\textit{cardinalidad}$ ($|A|=|B|$) si existe una biyección entre ellos. $A$ es $\\textit{finito}$ si $|A|=n$ para algún $n\\in\\mathbb{N}_0$; en otro caso es $\\textit{infinito}$." },
            ]
          },
          {
            num: 3, title: "Números naturales y cálculo combinatorio",
            notes: [
              { type:"teo", label:"Principio de inducción matemática",
                tex:"Sea $P(n)$ una propiedad sobre $\\mathbb{N}$. Si $P(1)$ es verdadera y $P(k)\\Rightarrow P(k+1)$ para todo $k$, entonces $P(n)$ es verdadera para todo $n\\in\\mathbb{N}$." },
              { type:"def", label:"Permutaciones y combinaciones",
                tex:"El número de $\\textit{permutaciones}$ de $n$ objetos tomados de $r$ en $r$ es $P(n,r)=\\dfrac{n!}{(n-r)!}$. El número de $\\textit{combinaciones}$ es $\\binom{n}{r}=\\dfrac{n!}{r!(n-r)!}$." },
              { type:"teo", label:"Teorema del binomio",
                tex:"Para $n\\in\\mathbb{N}$ y cualesquiera $a,b$:\\[(a+b)^n=\\sum_{k=0}^n\\binom{n}{k}a^{n-k}b^k\\]Los coeficientes satisfacen $\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}$ (identidad de Pascal)." },
            ]
          },
          {
            num: 4, title: "Espacios vectoriales",
            notes: [
              { type:"def", label:"Espacio vectorial",
                tex:"Un $\\textit{espacio vectorial}$ sobre $\\mathbb{R}$ es un conjunto $V$ con operaciones de suma y multiplicación escalar que satisfacen los 8 axiomas (conmutatividad, asociatividad, elemento neutro, inverso aditivo, distributividades y compatibilidad escalar)." },
              { type:"def", label:"Subespacio, independencia lineal y base",
                tex:"$W\\subseteq V$ es $\\textit{subespacio}$ si es cerrado bajo suma y producto escalar. Vectores $v_1,\\ldots,v_n$ son $\\textit{linealmente independientes}$ si $\\alpha_1 v_1+\\cdots+\\alpha_n v_n=\\mathbf{0}\\Rightarrow$ todos $\\alpha_i=0$. Una $\\textit{base}$ es un conjunto generador l.i.; su cardinalidad es la $\\textit{dimensión}$ de $V$." },
              { type:"teo", label:"Teorema de la base",
                tex:"Todo espacio vectorial de dimensión finita $n$ es isomorfo a $\\mathbb{R}^n$. Cualesquiera dos bases de $V$ tienen el mismo número de elementos." },
            ]
          },
          {
            num: 5, title: "Matrices y determinantes",
            notes: [
              { type:"def", label:"Matriz y operaciones",
                tex:"Una $\\textit{matriz}$ $A\\in\\mathbb{R}^{m\\times n}$ tiene $m$ filas y $n$ columnas. Las operaciones de suma, producto escalar y multiplicación $AB$ (con $A\\in\\mathbb{R}^{m\\times k}$, $B\\in\\mathbb{R}^{k\\times n}$) satisfacen $(AB)_{ij}=\\sum_l a_{il}b_{lj}$." },
              { type:"def", label:"Determinante",
                tex:"El $\\textit{determinante}$ $\\det(A)$ de $A\\in\\mathbb{R}^{n\\times n}$ se define por la expansión de Laplace a lo largo de cualquier fila o columna. Propiedades: $\\det(AB)=\\det(A)\\det(B)$, $\\det(A^T)=\\det(A)$, $A$ invertible $\\Leftrightarrow\\det(A)\\neq 0$." },
              { type:"teo", label:"Rango y determinantes",
                tex:"El $\\textit{rango}$ de $A$ es el tamaño del mayor menor no nulo de $A$. Se tiene $\\text{rango}(A)=r\\Leftrightarrow$ existe menor de orden $r$ no nulo y todo menor de orden $r+1$ es cero." },
            ]
          },
          {
            num: 6, title: "Sistemas de ecuaciones lineales",
            notes: [
              { type:"def", label:"Sistema y matriz aumentada",
                tex:"Un $\\textit{sistema}$ $A\\mathbf{x}=\\mathbf{b}$ con $A\\in\\mathbb{R}^{m\\times n}$ se representa por la $\\textit{matriz aumentada}$ $[A|\\mathbf{b}]$. Las soluciones no cambian al aplicar operaciones elementales de fila." },
              { type:"teo", label:"Teorema de Rouché-Fröbenius",
                tex:"El sistema $A\\mathbf{x}=\\mathbf{b}$ tiene solución $\\Leftrightarrow\\text{rango}(A)=\\text{rango}([A|\\mathbf{b}])$. Si es compatible, la solución es única $\\Leftrightarrow\\text{rango}(A)=n$; si hay $n-r$ variables libres, hay infinitas soluciones." },
              { type:"teo", label:"Regla de Cramer",
                tex:"Si $A\\in\\mathbb{R}^{n\\times n}$ con $\\det(A)\\neq 0$, la única solución de $A\\mathbf{x}=\\mathbf{b}$ es $x_i=\\dfrac{\\det(A_i)}{\\det(A)}$, donde $A_i$ se obtiene sustituyendo la $i$-ésima columna de $A$ por $\\mathbf{b}$." },
            ]
          },
        ]
      },
      {
        id: "as1_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986",
        chapters: [
          {
            num: 1, title: "Conjuntos y relaciones",
            notes: [
              { type:"def", label:"Familia de conjuntos",
                tex:"Una $\\textit{familia}$ de conjuntos indexada por $I$ es una función $i\\mapsto A_i$ con $i\\in I$. La unión e intersección generalizadas se denotan $\\bigcup_{i\\in I}A_i$ y $\\bigcap_{i\\in I}A_i$ respectivamente." },
              { type:"obs", label:"Conjunto vacío",
                tex:"El conjunto vacío $\\varnothing$ es subconjunto de todo conjunto: $\\varnothing\\subseteq A$ para todo $A$. Es único y satisface $A\\cup\\varnothing=A$, $A\\cap\\varnothing=\\varnothing$ y $A\\setminus A=\\varnothing$." },
            ]
          },
          {
            num: 2, title: "Funciones y cardinalidad",
            notes: [
              { type:"teo", label:"Composición e inversas",
                tex:"Si $f:A\\to B$ y $g:B\\to C$ son funciones, la $\\textit{composición}$ $g\\circ f:A\\to C$ satisface $(g\\circ f)(a)=g(f(a))$. Si $f$ es biyectiva, $f^{-1}\\circ f=\\text{id}_A$ y $f\\circ f^{-1}=\\text{id}_B$." },
              { type:"teo", label:"Conjuntos equipotentes y numerables",
                tex:"$A$ y $B$ son $\\textit{equipotentes}$ si existe biyección $f:A\\to B$. Un conjunto es $\\textit{numerable}$ si es equipotente a $\\mathbb{N}$. $\\mathbb{Z}$ y $\\mathbb{Q}$ son numerables; $\\mathbb{R}$ no lo es (argumento diagonal de Cantor)." },
            ]
          },
          {
            num: 3, title: "Álgebra lineal elemental",
            notes: [
              { type:"def", label:"Espacio ℝⁿ",
                tex:"$\\mathbb{R}^n=\\{(x_1,\\ldots,x_n)\\mid x_i\\in\\mathbb{R}\\}$ con suma componente a componente y producto escalar $\\lambda(x_1,\\ldots,x_n)=(\\lambda x_1,\\ldots,\\lambda x_n)$ es un espacio vectorial de dimensión $n$." },
              { type:"obs", label:"Interpretación geométrica en ℝ² y ℝ³",
                tex:"En $\\mathbb{R}^2$ los vectores se representan como flechas en el plano; la suma es la regla del paralelogramo. En $\\mathbb{R}^3$ se añade una tercera dimensión espacial. Las bases canónicas $\\{e_1,\\ldots,e_n\\}$ generan $\\mathbb{R}^n$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 4, title: "Números enteros y divisibilidad",
            notes: [
              { type:"def", label:"Anillo de los enteros",
                tex:"$(\\mathbb{Z},+,\\cdot)$ es un $\\textit{dominio entero}$: anillo conmutativo con unidad, sin divisores de cero. Tiene orden compatible: $a<b$ y $c>0\\Rightarrow ac<bc$." },
              { type:"teo", label:"Algoritmo de la división",
                tex:"Para $a\\in\\mathbb{Z}$ y $b\\in\\mathbb{Z}^+$, existen únicos $q,r\\in\\mathbb{Z}$ con $0\\le r<b$ tales que $a=qb+r$. Aquí $q$ es el $\\textit{cociente}$ y $r$ el $\\textit{residuo}$." },
              { type:"def", label:"Máximo común divisor",
                tex:"El $\\textit{mcd}$ de $a,b\\in\\mathbb{Z}$ no ambos nulos es el mayor entero positivo que divide a ambos. El $\\textbf{algoritmo de Euclides}$ lo calcula: $\\gcd(a,b)=\\gcd(b,r)$ donde $r=a\\bmod b$." },
              { type:"teo", label:"Identidad de Bezout",
                tex:"Para $a,b\\in\\mathbb{Z}$ con $d=\\gcd(a,b)$, existen $s,t\\in\\mathbb{Z}$ tales que $sa+tb=d$. En particular $\\gcd(a,b)=1$ (coprimos) $\\Leftrightarrow\\exists s,t:sa+tb=1$." },
              { type:"teo", label:"Factorización única (TFA)",
                tex:"Todo entero $n>1$ se escribe de forma única (salvo orden) como producto de primos: $n=p_1^{e_1}\\cdots p_k^{e_k}$.",
                dem:"$\\textit{Existencia}$: por inducción fuerte; si $n$ no es primo, $n=ab$ con $1<a,b<n$ y por hipótesis cada factor se factoriza. $\\textit{Unicidad}$: si $p\\mid ab$ y $p$ es primo, entonces $p\\mid a$ o $p\\mid b$ (lema de Euclides, usando Bezout). $\\blacksquare$" },
            ]
          },
          {
            num: 5, title: "Congruencias",
            notes: [
              { type:"def", label:"Congruencia módulo m",
                tex:"$a\\equiv b\\pmod{m}$ si $m\\mid(a-b)$. La congruencia es una relación de equivalencia en $\\mathbb{Z}$; las clases de equivalencia forman el $\\textit{anillo de restos}$ $\\mathbb{Z}/m\\mathbb{Z}$." },
              { type:"teo", label:"Teorema chino del residuo",
                tex:"Si $m_1,\\ldots,m_k$ son primos entre sí de a pares, el sistema $x\\equiv a_i\\pmod{m_i}$ tiene solución única módulo $M=m_1\\cdots m_k$." },
            ]
          },
          {
            num: 6, title: "Números complejos",
            notes: [
              { type:"def", label:"Campo de los complejos",
                tex:"$\\mathbb{C}=\\{a+bi\\mid a,b\\in\\mathbb{R}\\}$ con $i^2=-1$ forma un campo. El $\\textit{conjugado}$ es $\\overline{a+bi}=a-bi$ y el $\\textit{módulo}$ es $|z|=\\sqrt{a^2+b^2}$. Se cumple $z\\bar{z}=|z|^2$." },
              { type:"teo", label:"Forma polar y teorema de De Moivre",
                tex:"Todo $z=r e^{i\\theta}$ con $r=|z|$ y $\\theta=\\arg(z)$. El $\\textbf{teorema de De Moivre}$ afirma $(\\cos\\theta+i\\sin\\theta)^n=\\cos(n\\theta)+i\\sin(n\\theta)$. Las raíces $n$-ésimas de $z$ son $r^{1/n}e^{i(\\theta+2k\\pi)/n}$ para $k=0,\\ldots,n-1$." },
            ]
          },
          {
            num: 7, title: "Polinomios y ecuaciones",
            notes: [
              { type:"def", label:"Anillo de polinomios K[x]",
                tex:"Para un campo $K$, $K[x]=\\{a_n x^n+\\cdots+a_0\\mid a_i\\in K\\}$ con las operaciones usuales forma un dominio entero. El $\\textit{grado}$ satisface $\\deg(fg)=\\deg f+\\deg g$." },
              { type:"teo", label:"Algoritmo de la división en K[x]",
                tex:"Para $f,g\\in K[x]$ con $g\\neq 0$, existen únicos $q,r\\in K[x]$ con $\\deg r<\\deg g$ tales que $f=qg+r$." },
              { type:"teo", label:"Teorema del residuo y del factor",
                tex:"$\\textbf{Residuo}$: $f(a)$ es el residuo de dividir $f$ entre $(x-a)$. $\\textbf{Factor}$: $a$ es raíz de $f$ $\\Leftrightarrow(x-a)\\mid f(x)$. Un polinomio de grado $n$ tiene a lo más $n$ raíces en $K$." },
              { type:"teo", label:"Teorema fundamental del álgebra",
                tex:"Todo polinomio no constante $f\\in\\mathbb{C}[x]$ tiene al menos una raíz en $\\mathbb{C}$. En consecuencia, $f$ se factoriza completamente en $\\mathbb{C}[x]$ como producto de factores lineales." },
            ]
          },
        ]
      },
      {
        id: "as2_b2",
        title: "Álgebra Elemental",
        author: "Leopoldo Nachbin",
        edition: "OEA, 1986",
        chapters: [
          {
            num: 4, title: "Aritmética elemental",
            notes: [
              { type:"def", label:"Divisibilidad en ℤ",
                tex:"$a\\mid b$ ($a$ $\\textit{divide}$ a $b$) si existe $k\\in\\mathbb{Z}$ con $b=ka$. Propiedades: $a\\mid b$ y $a\\mid c\\Rightarrow a\\mid(sb+tc)$ para $s,t\\in\\mathbb{Z}$." },
              { type:"obs", label:"Números primos y criba de Eratóstenes",
                tex:"Un primo es un entero $p>1$ divisible sólo por $1$ y $p$. La $\\textit{criba de Eratóstenes}$ lista los primos hasta $N$ tachando múltiplos. Hay infinitos primos (demostración de Euclides)." },
            ]
          },
          {
            num: 5, title: "Polinomios y ecuaciones algebraicas",
            notes: [
              { type:"def", label:"Polinomios irreducibles",
                tex:"$f\\in K[x]$ es $\\textit{irreducible}$ si $\\deg f\\ge 1$ y $f=gh\\Rightarrow\\deg g=0$ o $\\deg h=0$. En $\\mathbb{R}[x]$, los irreducibles son los lineales y los cuadráticos sin raíces reales." },
              { type:"teo", label:"Factorización única en K[x]",
                tex:"$K[x]$ es un dominio de factorización única (DFU): todo polinomio no nulo de grado $\\ge 1$ se escribe de forma única como producto de polinomios irreducibles (salvo orden y unidades)." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 1, title: "Números reales",
            notes: [
              { type:"def", label:"Axiomas de campo y de orden",
                tex:"$\\mathbb{R}$ es un $\\textit{campo ordenado}$: satisface los axiomas de campo (suma y producto con neutros e inversos), los axiomas de orden ($a<b$ y $b<c\\Rightarrow a<c$; tricotomía) y la $\\textit{propiedad arquimediana}$." },
              { type:"teo", label:"Axioma del supremo (compleción)",
                tex:"Todo subconjunto no vacío $A\\subseteq\\mathbb{R}$ acotado superiormente tiene $\\sup A\\in\\mathbb{R}$. Esto distingue a $\\mathbb{R}$ de $\\mathbb{Q}$ y garantiza la existencia de números como $\\sqrt{2}$.",
                dem:"La existencia del supremo es axiomática en la construcción de Dedekind: $\\sup A$ es el corte de Dedekind que separa las cotas superiores de $A$ del resto. En la construcción por sucesiones de Cauchy, $\\sup A$ se construye como clase de equivalencia de sucesiones racionales convergentes. $\\blacksquare$" },
              { type:"def", label:"Valor absoluto",
                tex:"$|a|=a$ si $a\\ge0$, $|a|=-a$ si $a<0$. Propiedades: $|ab|=|a||b|$, $|a+b|\\le|a|+|b|$ ($\\textit{desigualdad triangular}$), $||a|-|b||\\le|a-b|$." },
            ]
          },
          {
            num: 2, title: "Funciones y sucesiones",
            notes: [
              { type:"def", label:"Sucesión convergente",
                tex:"Una sucesión $(a_n)$ $\\textit{converge}$ a $L$ si $\\forall\\varepsilon>0,\\,\\exists N\\in\\mathbb{N}:\\,n>N\\Rightarrow|a_n-L|<\\varepsilon$. Escribimos $\\lim_{n\\to\\infty}a_n=L$." },
              { type:"teo", label:"Criterio de convergencia monótona",
                tex:"Toda sucesión monótona acotada es convergente. Si $(a_n)$ es creciente y acotada superiormente, $\\lim a_n=\\sup\\{a_n\\}$." },
              { type:"def", label:"Sucesión de Cauchy",
                tex:"$(a_n)$ es de $\\textit{Cauchy}$ si $\\forall\\varepsilon>0,\\,\\exists N:\\,m,n>N\\Rightarrow|a_m-a_n|<\\varepsilon$. En $\\mathbb{R}$: $(a_n)$ converge $\\Leftrightarrow$ es de Cauchy." },
            ]
          },
          {
            num: 5, title: "Límite y continuidad",
            notes: [
              { type:"def", label:"Límite de función (ε-δ)",
                tex:"$\\displaystyle\\lim_{x\\to a}f(x)=L$ si $\\forall\\varepsilon>0,\\,\\exists\\delta>0:\\,0<|x-a|<\\delta\\Rightarrow|f(x)-L|<\\varepsilon$. El valor $f(a)$ no importa (ni necesita existir)." },
              { type:"teo", label:"Álgebra de límites",
                tex:"Si $\\lim_{x\\to a}f=L$ y $\\lim_{x\\to a}g=M$, entonces $\\lim(f\\pm g)=L\\pm M$, $\\lim fg=LM$ y $\\lim f/g=L/M$ (con $M\\neq0$). También el $\\textit{teorema del emparedado}$: $g\\le f\\le h$ y $\\lim g=\\lim h=L\\Rightarrow\\lim f=L$." },
              { type:"def", label:"Continuidad",
                tex:"$f$ es $\\textit{continua}$ en $a$ si $\\lim_{x\\to a}f(x)=f(a)$. Equivale a: para toda sucesión $x_n\\to a$, $f(x_n)\\to f(a)$." },
              { type:"teo", label:"Teorema del valor intermedio",
                tex:"Si $f$ es continua en $[a,b]$ y $N$ está estrictamente entre $f(a)$ y $f(b)$, existe $c\\in(a,b)$ con $f(c)=N$.",
                dem:"Supongamos $f(a)<N<f(b)$. Sea $c=\\sup\\{x\\in[a,b]\\mid f(x)<N\\}$. Por continuidad de $f$ en $c$, para todo $\\varepsilon$ existe $\\delta$: si $|x-c|<\\delta$ entonces $|f(x)-f(c)|<\\varepsilon$. Si $f(c)<N$ elegiríamos $x_0\\in(c,c+\\delta)$ con $f(x_0)<N$, contradiciendo la definición de supremo. Si $f(c)>N$ ocurre lo análogo. Luego $f(c)=N$. $\\blacksquare$" },
              { type:"teo", label:"Teorema del valor extremo",
                tex:"Si $f$ es continua en $[a,b]$, entonces $f$ alcanza su máximo y su mínimo en $[a,b]$: existen $c,d\\in[a,b]$ con $f(c)\\le f(x)\\le f(d)$ para todo $x\\in[a,b]$." },
            ]
          },
          {
            num: 9, title: "Derivadas",
            notes: [
              { type:"def", label:"Derivada",
                tex:"$f'(a)=\\displaystyle\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}$ cuando el límite existe. Geométricamente es la pendiente de la recta tangente a la gráfica de $f$ en $x=a$." },
              { type:"teo", label:"Regla de la cadena",
                tex:"Si $g$ es diferenciable en $a$ y $f$ es diferenciable en $g(a)$, entonces $(f\\circ g)'(a)=f'(g(a))\\cdot g'(a)$." },
              { type:"teo", label:"Teorema del valor medio (Lagrange)",
                tex:"Si $f$ es continua en $[a,b]$ y diferenciable en $(a,b)$, existe $c\\in(a,b)$ tal que $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$.",
                dem:"Sea $g(x)=f(x)-\\frac{f(b)-f(a)}{b-a}(x-a)$. Entonces $g(a)=g(b)=f(a)$. Por el $\\textit{teorema de Rolle}$ (que sigue del teorema del valor extremo), existe $c\\in(a,b)$ con $g'(c)=0$. Pero $g'(c)=f'(c)-\\frac{f(b)-f(a)}{b-a}=0$, que es la tesis. $\\blacksquare$" },
              { type:"teo", label:"Regla de L'Hôpital",
                tex:"Si $\\lim_{x\\to a}f(x)=\\lim_{x\\to a}g(x)=0$ (o $\\pm\\infty$) y $g'(x)\\neq0$ cerca de $a$, entonces $\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$ (si este último límite existe)." },
              { type:"teo", label:"Polinomio de Taylor",
                tex:"Si $f$ tiene $n+1$ derivadas en $(a-r,a+r)$, entonces $f(x)=\\displaystyle\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k+\\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$ para algún $c$ entre $a$ y $x$ ($\\textit{resto de Lagrange}$)." },
            ]
          },
        ]
      },
      {
        id: "cd1_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987",
        chapters: [
          {
            num: 1, title: "Funciones y gráficas",
            notes: [
              { type:"def", label:"Función real de variable real",
                tex:"Una $\\textit{función}$ $f:D\\subseteq\\mathbb{R}\\to\\mathbb{R}$ asigna a cada $x\\in D$ un único valor $f(x)$. Tipos: polinomiales, racionales, trigonométricas, exponenciales, logarítmicas. La $\\textit{composición}$ $(f\\circ g)(x)=f(g(x))$." },
              { type:"obs", label:"Funciones pares, impares y periódicas",
                tex:"$f$ es $\\textit{par}$ si $f(-x)=f(x)$ (simétrica respecto al eje $y$); $\\textit{impar}$ si $f(-x)=-f(x)$ (simétrica respecto al origen). Es $\\textit{periódica}$ de periodo $T>0$ si $f(x+T)=f(x)$ para todo $x$." },
            ]
          },
          {
            num: 3, title: "Aplicaciones de la derivada",
            notes: [
              { type:"teo", label:"Criterio de la primera derivada",
                tex:"Si $f'$ cambia de signo de positivo a negativo en $c$, entonces $f(c)$ es un $\\textit{máximo local}$. Si cambia de negativo a positivo, es un $\\textit{mínimo local}$. Si no cambia de signo, $c$ no es extremo." },
              { type:"teo", label:"Criterio de la segunda derivada",
                tex:"Si $f'(c)=0$ y $f''(c)<0$, entonces $f(c)$ es máximo local; si $f''(c)>0$, es mínimo local. Si $f''(c)=0$, el criterio no decide." },
              { type:"def", label:"Concavidad y puntos de inflexión",
                tex:"$f$ es $\\textit{cóncava hacia arriba}$ en $(a,b)$ si $f''(x)>0$ allí; $\\textit{cóncava hacia abajo}$ si $f''(x)<0$. Un $\\textit{punto de inflexión}$ es donde la concavidad cambia." },
            ]
          },
        ]
      },
      {
        id: "cd1_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: [
          {
            num: 2, title: "Límites y continuidad",
            notes: [
              { type:"def", label:"Límite (definición $\\varepsilon$-$\\delta$)",
                tex:"$\\lim_{x\\to a}f(x)=L$ si para todo $\\varepsilon>0$ existe $\\delta>0$ tal que $0<|x-a|<\\delta\\Rightarrow|f(x)-L|<\\varepsilon$. El valor $f(a)$ no interviene en la definición." },
              { type:"teo", label:"Álgebra de límites",
                tex:"Si $\\lim_{x\\to a}f(x)=L$ y $\\lim_{x\\to a}g(x)=M$, entonces: $\\lim(f\\pm g)=L\\pm M$; $\\lim(fg)=LM$; $\\lim(f/g)=L/M$ si $M\\neq0$; $\\lim|f|=|L|$." },
              { type:"def", label:"Continuidad",
                tex:"$f$ es continua en $a$ si: (i) $f(a)$ existe, (ii) $\\lim_{x\\to a}f(x)$ existe, (iii) $\\lim_{x\\to a}f(x)=f(a)$. Equivalentemente: para todo $\\varepsilon>0$ existe $\\delta>0$ tal que $|x-a|<\\delta\\Rightarrow|f(x)-f(a)|<\\varepsilon$." },
              { type:"teo", label:"Teorema del valor intermedio",
                tex:"Si $f$ es continua en $[a,b]$ y $f(a)\\neq f(b)$, entonces para todo valor $k$ entre $f(a)$ y $f(b)$ existe $c\\in(a,b)$ tal que $f(c)=k$. Consecuencia: si $f(a)<0<f(b)$, existe una raíz en $(a,b)$." },
            ]
          },
          {
            num: 3, title: "Diferenciación",
            notes: [
              { type:"def", label:"Derivada como límite",
                tex:"$f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$. Geométricamente es la pendiente de la recta tangente a la gráfica de $f$ en $(a,f(a))$." },
              { type:"teo", label:"Reglas de derivación",
                tex:"$(f+g)'=f'+g'$; $(cf)'=cf'$; $(fg)'=f'g+fg'$ (Leibniz); $(f/g)'=(f'g-fg')/g^2$; $(f\\circ g)'(x)=f'(g(x))g'(x)$ (cadena)." },
            ]
          },
        ]
      },
      {
        id: "cd1_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937",
        chapters: [
          {
            num: 2, title: "La derivada",
            notes: [
              { type:"def", label:"Derivada e interpretación geométrica",
                tex:"La derivada $f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}$ representa la tasa de cambio instantánea. Courant enfatiza que la secante de pendiente $\\Delta y/\\Delta x$ converge a la tangente de pendiente $f'(x)$ al hacer $\\Delta x\\to 0$." },
              { type:"teo", label:"Fórmula de Taylor con estimación del resto",
                tex:"$f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2!}f''(x)+\\cdots+\\frac{h^n}{n!}f^{(n)}(x)+R_n$, donde $R_n=\\frac{h^{n+1}}{(n+1)!}f^{(n+1)}(\\xi)$ para algún $\\xi$ entre $x$ y $x+h$ (forma de Lagrange del resto)." },
            ]
          },
          {
            num: 4, title: "La integral definida",
            notes: [
              { type:"def", label:"Integral como límite de sumas",
                tex:"$\\displaystyle\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{k=1}^n f(x_k^*)\\,\\Delta x_k$, donde la partición se refina de modo que $\\max\\Delta x_k\\to0$. Courant insiste en que la integral mide el área algebraica bajo la curva." },
              { type:"teo", label:"Fórmula de integración por partes",
                tex:"$\\displaystyle\\int_a^b u\\,dv=\\left[uv\\right]_a^b-\\int_a^b v\\,du$. Deriva de la regla del producto $(uv)'=u'v+uv'$, integrando ambos lados." },
            ]
          },
        ]
      },
      {
        id: "cd1_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986",
        chapters: [
          {
            num: 1, title: "Números reales y funciones",
            notes: [
              { type:"def", label:"Valor absoluto y desigualdades",
                tex:"$|x|=x$ si $x\\geq0$, $|x|=-x$ si $x<0$. Propiedades clave: $|xy|=|x||y|$; $|x+y|\\leq|x|+|y|$ (desigualdad triangular); $|x-y|$ mide la distancia entre $x$ e $y$." },
              { type:"def", label:"Función exponencial y logaritmo",
                tex:"Lang define $\\ln x=\\int_1^x\\frac{1}{t}\\,dt$ para $x>0$, y luego $e^x$ como la inversa del logaritmo. Propiedades: $\\ln(xy)=\\ln x+\\ln y$; $(e^x)'=e^x$; $(\\ln x)'=1/x$." },
            ]
          },
          {
            num: 5, title: "La integral",
            notes: [
              { type:"teo", label:"Teorema fundamental (versión de Lang)",
                tex:"Si $f$ es continua en $[a,b]$ y $F(x)=\\int_a^x f(t)\\,dt$, entonces $F'(x)=f(x)$. Además, si $G'=f$ en $[a,b]$, entonces $\\int_a^b f(x)\\,dx=G(b)-G(a)$." },
              { type:"def", label:"Sustitución en integrales",
                tex:"Si $u=g(x)$, entonces $\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$. En la integral definida: $\\int_a^b f(g(x))g'(x)\\,dx=\\int_{g(a)}^{g(b)}f(u)\\,du$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 1, title: "Geometría cartesiana básica",
            notes: [
              { type:"def", label:"Distancia y simetría",
                tex:"La $\\textit{distancia}$ entre $P=(x_1,y_1)$ y $Q=(x_2,y_2)$ en $\\mathbb{R}^2$ es $d(P,Q)=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. El $\\textit{punto medio}$ es $M=\\left(\\tfrac{x_1+x_2}{2},\\tfrac{y_1+y_2}{2}\\right)$." },
              { type:"def", label:"Lugares geométricos",
                tex:"Un $\\textit{lugar geométrico}$ es el conjunto de todos los puntos que satisfacen una condición dada. Ejemplos: la circunferencia de centro $O$ y radio $r$ es $\\{P\\mid d(O,P)=r\\}$; una recta es $\\{P\\mid aP_x+bP_y+c=0\\}$." },
            ]
          },
          {
            num: 2, title: "Trigonometría y coordenadas polares",
            notes: [
              { type:"def", label:"Funciones trigonométricas",
                tex:"Para $\\theta$ ángulo en un triángulo rectángulo: $\\sin\\theta=\\text{op}/\\text{hip}$, $\\cos\\theta=\\text{ad}/\\text{hip}$, $\\tan\\theta=\\text{op}/\\text{ad}$. Las identidades fundamentales incluyen $\\sin^2\\theta+\\cos^2\\theta=1$ y la fórmula de adición $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$." },
              { type:"def", label:"Coordenadas polares",
                tex:"Un punto $P$ en el plano se puede representar como $(r,\\theta)$ donde $r=|OP|\\ge0$ y $\\theta$ es el ángulo con el eje positivo. La relación con cartesianas: $x=r\\cos\\theta$, $y=r\\sin\\theta$, $r=\\sqrt{x^2+y^2}$." },
            ]
          },
          {
            num: 3, title: "Espacios vectoriales y producto interior",
            notes: [
              { type:"def", label:"Vectores y operaciones",
                tex:"Un $\\textit{vector}$ $\\mathbf{v}=(v_1,v_2)\\in\\mathbb{R}^2$ tiene $\\textit{norma}$ $\\|\\mathbf{v}\\|=\\sqrt{v_1^2+v_2^2}$. El $\\textit{producto escalar}$ es $\\mathbf{u}\\cdot\\mathbf{v}=u_1v_1+u_2v_2=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$." },
              { type:"teo", label:"Independencia lineal en ℝ² y ℝ³",
                tex:"Dos vectores son $\\textit{linealmente dependientes}$ ssi son paralelos ($\\mathbf{u}\\times\\mathbf{v}=\\mathbf{0}$). El $\\textit{producto vectorial}$ en $\\mathbb{R}^3$ es $\\mathbf{u}\\times\\mathbf{v}\\perp\\mathbf{u}$ y $\\perp\\mathbf{v}$, con $\\|\\mathbf{u}\\times\\mathbf{v}\\|=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta$." },
            ]
          },
          {
            num: 4, title: "Rectas y planos",
            notes: [
              { type:"def", label:"Ecuaciones de la recta en ℝ²",
                tex:"$\\textit{Ecuación general}$: $ax+by+c=0$ ($a,b$ no ambos nulos). $\\textit{Ecuación normal}$: $\\mathbf{n}\\cdot(\\mathbf{x}-P_0)=0$ con $\\mathbf{n}$ normal a la recta. Distancia de $(x_0,y_0)$ a $ax+by+c=0$: $d=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$." },
              { type:"def", label:"Planos en ℝ³",
                tex:"Un $\\textit{plano}$ con vector normal $\\mathbf{n}=(a,b,c)$ y punto $P_0=(x_0,y_0,z_0)$ tiene ecuación $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$. La distancia de un punto $Q$ al plano $ax+by+cz+d=0$ es $\\dfrac{|aQ_x+bQ_y+cQ_z+d|}{\\sqrt{a^2+b^2+c^2}}$." },
            ]
          },
          {
            num: 5, title: "Cónicas",
            notes: [
              { type:"def", label:"Parábola",
                tex:"Lugar geométrico de puntos equidistantes del $\\textit{foco}$ $F$ y la $\\textit{directriz}$ $\\ell$. Forma canónica con vértice en el origen: $y^2=4px$ (eje $x$) o $x^2=4py$ (eje $y$)." },
              { type:"def", label:"Elipse",
                tex:"Lugar geométrico donde la suma de distancias a dos $\\textit{focos}$ $F_1,F_2$ es constante $2a$. Ecuación canónica: $\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ con $a>b>0$, $c^2=a^2-b^2$, $e=c/a<1$." },
              { type:"def", label:"Hipérbola",
                tex:"Lugar geométrico donde la diferencia (en valor absoluto) de distancias a dos focos es constante $2a$. Ecuación canónica: $\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$, $c^2=a^2+b^2$, asíntotas $y=\\pm\\tfrac{b}{a}x$." },
              { type:"teo", label:"Clasificación de cónicas",
                tex:"La ecuación general $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ define una cónica según el $\\textit{discriminante}$ $\\Delta=B^2-4AC$: elipse si $\\Delta<0$, parábola si $\\Delta=0$, hipérbola si $\\Delta>0$. Rotando ejes se elimina el término $Bxy$." },
            ]
          },
        ]
      },
      {
        id: "ga1_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984",
        chapters: [
          {
            num: 1, title: "Trigonometría plana y esfèrica",
            notes: [
              { type:"teo", label:"Teorema del seno y del coseno",
                tex:"En un triángulo con lados $a,b,c$ y ángulos opuestos $A,B,C$:\\[\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}\\quad(\\text{teorema del seno})\\]\\[c^2=a^2+b^2-2ab\\cos C\\quad(\\text{teorema del coseno})\\]" },
            ]
          },
          {
            num: 2, title: "Álgebra vectorial aplicada a la geometría",
            notes: [
              { type:"def", label:"Triple producto escalar",
                tex:"El $\\textit{triple producto escalar}$ $(\\mathbf{a},\\mathbf{b},\\mathbf{c})=\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})$ es igual al volumen (con signo) del paralelepípedo definido por los tres vectores. Es cero ssi los vectores son coplanares." },
            ]
          },
        ]
      },
      {
        id: "ga1_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009",
        chapters: [
          {
            num: 1, title: "Geometría euclidiana básica",
            notes: [
              { type:"def", label:"Axiomas del plano euclídeo",
                tex:"El plano euclídeo $\\mathbb{E}^2$ es un espacio métrico donde: (i) por dos puntos distintos pasa exactamente una recta; (ii) toda recta puede prolongarse indefinidamente; (iii) dado un centro y un radio existe un círculo. La distancia satisface los axiomas de métrica." },
              { type:"teo", label:"Congruencia de triángulos",
                tex:"Dos triángulos son congruentes si tienen iguales: (LAL) dos lados y el ángulo comprendido; (LLL) los tres lados; (ALA) dos ángulos y el lado comprendido. La congruencia preserva distancias y ángulos." },
              { type:"def", label:"Isometrías del plano",
                tex:"Una $\\textit{isometría}$ es una aplicación $f:\\mathbb{E}^2\\to\\mathbb{E}^2$ que preserva distancias: $d(f(P),f(Q))=d(P,Q)$. Las isometrías del plano son: traslaciones, rotaciones, reflexiones y giros con deslizamiento (composición de reflexión y traslación paralela)." },
            ]
          },
          {
            num: 3, title: "Cónicas",
            notes: [
              { type:"def", label:"Cónicas como secciones de cono",
                tex:"Las cónicas son las curvas de intersección de un plano con un cono circular doble. Según el ángulo de corte: elipse (incluyendo círculo), parábola e hipérbola. En ecuación general: $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$; el discriminante $B^2-4AC$ determina el tipo." },
            ]
          },
        ]
      },
      {
        id: "ga1_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970",
        chapters: [
          {
            num: 2, title: "La recta en el plano",
            notes: [
              { type:"def", label:"Ecuaciones de la recta",
                tex:"Una recta en $\\mathbb{R}^2$ con pendiente $m$ y punto $(x_1,y_1)$ tiene ecuación $y-y_1=m(x-x_1)$. La forma general es $ax+by+c=0$ con $(a,b)\\neq(0,0)$. La distancia de un punto $(x_0,y_0)$ a la recta $ax+by+c=0$ es $\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$." },
              { type:"def", label:"Ángulo entre rectas",
                tex:"Si dos rectas tienen pendientes $m_1$ y $m_2$, el ángulo $\\theta$ entre ellas satisface $\\tan\\theta=\\left|\\frac{m_1-m_2}{1+m_1m_2}\\right|$. Son paralelas si $m_1=m_2$; perpendiculares si $m_1m_2=-1$." },
            ]
          },
          {
            num: 5, title: "Transformaciones de coordenadas",
            notes: [
              { type:"def", label:"Rotación de ejes",
                tex:"Al rotar los ejes un ángulo $\\alpha$, las nuevas coordenadas $(x',y')$ se relacionan con las originales por: $x=x'\\cos\\alpha-y'\\sin\\alpha$, $y=x'\\sin\\alpha+y'\\cos\\alpha$. Se elige $\\alpha$ para eliminar el término $xy$ en cónicas." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 6, title: "Superficies cuádricas",
            notes: [
              { type:"def", label:"Cuádrica",
                tex:"Una $\\textit{superficie cuádrica}$ es el conjunto de puntos $(x,y,z)\\in\\mathbb{R}^3$ que satisfacen una ecuación algebraica de grado 2. En forma canónica: elipsoide $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1$, hiperboloides de una hoja ($-\\frac{z^2}{c^2}$) o dos hojas ($+\\frac{z^2}{c^2}-\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$), paraboloides." },
              { type:"def", label:"Superficies de revolución",
                tex:"La superficie generada al rotar la curva $y=f(z)$ alrededor del eje $z$ tiene ecuación $\\sqrt{x^2+y^2}=f(z)$, es decir, $x^2+y^2=[f(z)]^2$. Cuádricas de revolución incluyen esferas, conos circulares y paraboloides circulares." },
              { type:"def", label:"Plano tangente a una cuádrica",
                tex:"El plano tangente a $F(x,y,z)=0$ en el punto $(x_0,y_0,z_0)$ tiene ecuación $F_x(P_0)(x-x_0)+F_y(P_0)(y-y_0)+F_z(P_0)(z-z_0)=0$, donde $(F_x,F_y,F_z)=\\nabla F$ es el vector normal." },
            ]
          },
          {
            num: 7, title: "Transformaciones",
            notes: [
              { type:"def", label:"Transformación lineal en ℝⁿ",
                tex:"$T:\\mathbb{R}^n\\to\\mathbb{R}^n$ es lineal si preserva suma y producto escalar. Su $\\textit{matriz}$ respecto a la base estándar tiene columnas $T(e_i)$. Ejemplos: rotaciones, reflexiones, proyecciones y homotecias." },
              { type:"def", label:"Transformación rígida",
                tex:"Una $\\textit{isometría}$ o transformación rígida es una función $f:\\mathbb{R}^n\\to\\mathbb{R}^n$ que preserva distancias: $d(f(P),f(Q))=d(P,Q)$. Toda isometría de $\\mathbb{R}^n$ es de la forma $f(\\mathbf{x})=A\\mathbf{x}+\\mathbf{b}$ con $A$ ortogonal." },
              { type:"teo", label:"Diagonalización de cónicas y cuádricas",
                tex:"Toda forma cuadrática real $\\mathbf{x}^T A\\mathbf{x}$ (con $A$ simétrica) puede diagonalizarse por una rotación ortogonal $A=Q\\Lambda Q^T$. Esto permite eliminar los términos mixtos de la ecuación de una cónica o cuádrica." },
              { type:"def", label:"Transformaciones afines",
                tex:"Una $\\textit{transformación afín}$ es $f(\\mathbf{x})=A\\mathbf{x}+\\mathbf{b}$ con $A$ invertible. Mapea rectas en rectas, preserva razones en segmentos paralelos y paralelismo, pero no necesariamente ángulos ni distancias." },
            ]
          },
          {
            num: 8, title: "Geometría esférica y transformaciones de Möbius",
            notes: [
              { type:"def", label:"Geodésicas en la esfera",
                tex:"En la esfera $S^2\\subset\\mathbb{R}^3$, las $\\textit{geodésicas}$ son los arcos de círculos máximos (intersecciones de $S^2$ con planos que pasan por el centro). Dos geodésicas siempre se intersectan — no hay paralelas en geometría esférica." },
              { type:"def", label:"Transformación de Möbius",
                tex:"Una $\\textit{transformación de Möbius}$ es $f(z)=\\dfrac{az+b}{cz+d}$ con $a,b,c,d\\in\\mathbb{C}$, $ad-bc\\neq0$. Mapea el plano complejo extendido $\\hat{\\mathbb{C}}=\\mathbb{C}\\cup\\{\\infty\\}$ en sí mismo, preservando círculos y rectas (generalizados) y ángulos." },
              { type:"obs", label:"Introducción a la geometría hiperbólica",
                tex:"El semiplano superior $\\mathbb{H}=\\{z\\in\\mathbb{C}\\mid\\text{Im}(z)>0\\}$ con la métrica $ds^2=\\frac{dx^2+dy^2}{y^2}$ es un modelo de la geometría hiperbólica de Poincaré. Las geodésicas son semicircunferencias y semirrectas verticales ortogonales al eje real." },
            ]
          },
        ]
      },
      {
        id: "ga2_b2",
        title: "Geometría Superior",
        author: "N. Efimov",
        edition: "MIR, 1984",
        chapters: [
          {
            num: 3, title: "Superficies en el espacio",
            notes: [
              { type:"def", label:"Superficies regladas",
                tex:"Una $\\textit{superficie reglada}$ es generada por el movimiento de una recta (la $\\textit{generatriz}$). Ejemplos: el cilindro, el cono, el paraboloide hiperbólico ($z=xy$, silla de montar). Son del tipo $F(\\mathbf{x})=0$ donde $F$ es cuadrática en las coordenadas." },
            ]
          },
        ]
      },
      {
        id: "ga2_b3",
        title: "Geometría",
        author: "Javier Bracho",
        edition: "Las Prensas de Ciencias, UNAM, 2009",
        chapters: [
          {
            num: 5, title: "Geometría proyectiva",
            notes: [
              { type:"def", label:"Plano proyectivo",
                tex:"El plano proyectivo $\\mathbb{P}^2$ se obtiene de $\\mathbb{R}^3\\setminus\\{0\\}$ identificando $\\mathbf{x}\\sim\\lambda\\mathbf{x}$ para $\\lambda\\neq0$. Los puntos son clases $[x_0:x_1:x_2]$ (coordenadas homogéneas). Las rectas proyectivas son los planos del origen en $\\mathbb{R}^3$, descritos por $ax_0+bx_1+cx_2=0$." },
              { type:"teo", label:"Dualidad proyectiva",
                tex:"En el plano proyectivo, los roles de punto y recta son duales: por dos puntos distintos pasa exactamente una recta, y dos rectas distintas se cortan en exactamente un punto. El principio de dualidad permite obtener teoremas duales intercambiando 'punto' y 'recta'." },
            ]
          },
          {
            num: 6, title: "Cuádricas",
            notes: [
              { type:"def", label:"Superficies cuádricas en $\\mathbb{R}^3$",
                tex:"Una cuádrica es el lugar de ceros de un polinomio de grado 2 en $x,y,z$: $\\mathbf{x}^T A\\mathbf{x}+\\mathbf{b}\\cdot\\mathbf{x}+c=0$. Bajo diagonalización de $A$, se clasifican en: elipsoide, hiperboloide de 1 o 2 hojas, paraboloide elíptico o hiperbólico, cono, cilindro." },
            ]
          },
        ]
      },
      {
        id: "ga2_b4",
        title: "Modern Analytic Geometry",
        author: "Preston & Lovaglia",
        edition: "Harper & Row, 1970",
        chapters: [
          {
            num: 7, title: "Geometría en el espacio",
            notes: [
              { type:"def", label:"Ecuación del plano en $\\mathbb{R}^3$",
                tex:"El plano que pasa por $P_0=(x_0,y_0,z_0)$ con vector normal $\\mathbf{n}=(a,b,c)$ tiene ecuación $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$, o equivalentemente $ax+by+cz=d$ con $d=ax_0+by_0+cz_0$. La distancia de un punto $Q$ al plano es $\\frac{|\\mathbf{n}\\cdot\\overrightarrow{P_0Q}|}{\\|\\mathbf{n}\\|}$." },
              { type:"def", label:"Rectas y planos en el espacio",
                tex:"La recta que pasa por $P_0$ con dirección $\\mathbf{d}$ se parametriza como $\\mathbf{r}(t)=P_0+t\\mathbf{d}$, $t\\in\\mathbb{R}$. Dos planos se intersecan en una recta (si no son paralelos); tres planos en un punto (sistema $3\\times3$ con solución única)." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 1, title: "Espacios vectoriales",
            notes: [
              { type:"def", label:"Campo y espacio vectorial",
                tex:"Un $\\textit{campo}$ $F$ es un conjunto con operaciones de suma y producto que satisfacen los axiomas de campo (ej. $\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{Q}$). Un $\\textit{espacio vectorial}$ sobre $F$ es un conjunto $V$ con suma de vectores y producto escalar por $F$ satisfaciendo los 8 axiomas." },
              { type:"def", label:"Subespacio, suma directa",
                tex:"$W\\subseteq V$ es $\\textit{subespacio}$ si es cerrado bajo suma y producto escalar. La $\\textit{suma directa}$ $V=W_1\\oplus W_2$ significa $V=W_1+W_2$ y $W_1\\cap W_2=\\{\\mathbf{0}\\}$; todo $v\\in V$ se escribe únicamente como $w_1+w_2$." },
              { type:"teo", label:"Base y dimensión",
                tex:"Un subconjunto $\\mathcal{B}\\subset V$ es $\\textit{base}$ si es linealmente independiente y generador. Toda base de $V$ tiene el mismo número de elementos, la $\\textit{dimensión}$ $\\dim V$. Toda $V$ de dimensión finita sobre $F$ es isomorfa a $F^n$." },
            ]
          },
          {
            num: 2, title: "Matrices y sistemas lineales",
            notes: [
              { type:"def", label:"Matrices y operaciones",
                tex:"El espacio $M_{m\\times n}(F)$ de matrices $m\\times n$ sobre $F$ tiene dimensión $mn$. La $\\textit{multiplicación}$ $AB$ (con $A\\in M_{m\\times k}$, $B\\in M_{k\\times n}$) da $AB\\in M_{m\\times n}$. Las $\\textit{matrices elementales}$ codifican las operaciones de fila." },
              { type:"teo", label:"Existencia y unicidad de soluciones",
                tex:"El sistema $A\\mathbf{x}=\\mathbf{b}$ tiene solución $\\Leftrightarrow\\text{rango}(A)=\\text{rango}([A|\\mathbf{b}])$. Si es compatible, la solución es única $\\Leftrightarrow\\text{rango}(A)=n$ (número de incógnitas). El conjunto solución del sistema homogéneo es un subespacio de $F^n$." },
            ]
          },
          {
            num: 3, title: "Transformaciones lineales",
            notes: [
              { type:"def", label:"Transformación lineal",
                tex:"$T:V\\to W$ es $\\textit{lineal}$ si $T(\\alpha u+\\beta v)=\\alpha T(u)+\\beta T(v)$ para todo $\\alpha,\\beta\\in F$ y $u,v\\in V$. El conjunto $\\mathcal{L}(V,W)$ de todas las transformaciones lineales de $V$ en $W$ es un espacio vectorial con $\\dim\\mathcal{L}(V,W)=\\dim V\\cdot\\dim W$." },
              { type:"teo", label:"Teorema rango-nulidad",
                tex:"Si $T:V\\to W$ es lineal y $\\dim V<\\infty$, entonces $\\dim\\ker T+\\dim\\text{Im}\\,T=\\dim V$. En particular, $T$ es inyectiva $\\Leftrightarrow\\ker T=\\{0\\}\\Leftrightarrow\\dim\\ker T=0$.",
                dem:"Sea $\\{v_1,\\ldots,v_k\\}$ base de $\\ker T$ y complétese a base $\\{v_1,\\ldots,v_k,u_1,\\ldots,u_r\\}$ de $V$. Se verifica que $\\{T(u_1),\\ldots,T(u_r)\\}$ es base de $\\text{Im}\\,T$ (los $T(u_j)$ son l.i. y generan $\\text{Im}\\,T$). Luego $\\dim V=k+r=\\dim\\ker T+\\dim\\text{Im}\\,T$. $\\blacksquare$" },
              { type:"def", label:"Isomorfismo y espacio dual",
                tex:"$T:V\\to W$ es $\\textit{isomorfismo}$ si es lineal y biyectiva. Si $\\dim V=\\dim W<\\infty$, basta que sea inyectiva o sobreyectiva. El $\\textit{espacio dual}$ $V^*=\\mathcal{L}(V,F)$ tiene la misma dimensión que $V$; la $\\textit{base dual}$ $\\{\\varphi_1,\\ldots,\\varphi_n\\}$ satisface $\\varphi_i(v_j)=\\delta_{ij}$." },
            ]
          },
          {
            num: 4, title: "Producto escalar y determinantes",
            notes: [
              { type:"def", label:"Producto escalar",
                tex:"Un $\\textit{producto escalar}$ en $V$ sobre $F$ es una forma bilineal $\\langle\\cdot,\\cdot\\rangle:V\\times V\\to F$ simétrica (o hermitiana si $F=\\mathbb{C}$) y definida positiva: $\\langle v,v\\rangle\\ge0$, $=0\\Leftrightarrow v=0$." },
              { type:"teo", label:"Gram-Schmidt",
                tex:"Dado un subconjunto linealmente independiente $\\{v_1,\\ldots,v_n\\}$, el $\\textit{proceso de Gram-Schmidt}$ produce una base ortonormal $\\{e_1,\\ldots,e_n\\}$ del mismo subespacio: $e_k=v_k-\\sum_{j<k}\\langle v_k,e_j\\rangle e_j$ (normalizado)." },
              { type:"def", label:"Determinante",
                tex:"El $\\textit{determinante}$ es la única función $\\det:M_{n\\times n}(F)\\to F$ multilineal, alternante en las filas y con $\\det(I)=1$. Propiedades: $\\det(AB)=\\det A\\det B$, $\\det(A^T)=\\det A$, $A$ invertible $\\Leftrightarrow\\det A\\neq0$." },
              { type:"teo", label:"Teorema espectral (transformaciones simétricas)",
                tex:"Si $T:V\\to V$ es autoadjunta ($T=T^*$, es decir $\\langle Tu,v\\rangle=\\langle u,Tv\\rangle$) sobre un espacio con producto escalar real de dimensión finita, entonces $V$ tiene una base ortonormal de vectores propios de $T$, todos con valores propios reales." },
            ]
          },
        ]
      },
      {
        id: "al1_b2",
        title: "Álgebra Lineal",
        author: "Friedberg, Insel & Spence",
        edition: "Publicaciones Cultural, 1982",
        chapters: [
          {
            num: 1, title: "Espacios vectoriales y subespacios",
            notes: [
              { type:"def", label:"Combinación lineal y generadores",
                tex:"Un vector $v$ es $\\textit{combinación lineal}$ de $S=\\{v_1,\\ldots,v_n\\}$ si $v=\\sum a_i v_i$ con $a_i\\in F$. El $\\textit{subespacio generado}$ por $S$ es $\\text{span}(S)=\\{\\sum a_iv_i\\mid a_i\\in F\\}$, el menor subespacio que contiene a $S$." },
              { type:"teo", label:"Caracterización de bases",
                tex:"$\\mathcal{B}$ es base de $V\\Leftrightarrow$ todo vector de $V$ se escribe de forma única como combinación lineal de $\\mathcal{B}$. Todo conjunto l.i. se puede extender a una base; todo conjunto generador contiene una base." },
            ]
          },
          {
            num: 6, title: "Formas canónicas",
            notes: [
              { type:"def", label:"Valores y vectores propios",
                tex:"$\\lambda\\in F$ es $\\textit{valor propio}$ de $T:V\\to V$ si existe $v\\neq0$ con $T(v)=\\lambda v$; $v$ es el $\\textit{vector propio}$. Los valores propios son raíces del $\\textit{polinomio característico}$ $p_T(\\lambda)=\\det(T-\\lambda I)$." },
              { type:"teo", label:"Diagonalización",
                tex:"$T:V\\to V$ es diagonalizable $\\Leftrightarrow$ $p_T$ se factoriza en factores lineales sobre $F$ y para cada valor propio $\\lambda_i$, la multiplicidad geométrica $\\dim\\ker(T-\\lambda_i I)$ coincide con la multiplicidad algebraica." },
            ]
          },
        ]
      },
      {
        id: "al1_b3",
        title: "Linear Algebra",
        author: "Morton L. Curtis",
        edition: "Springer, 1984",
        chapters: [
          {
            num: 2, title: "Transformaciones lineales y matrices",
            notes: [
              { type:"def", label:"Transformación lineal",
                tex:"$T:V\\to W$ es lineal si $T(u+v)=T(u)+T(v)$ y $T(\\lambda v)=\\lambda T(v)$ para todo $u,v\\in V$, $\\lambda\\in F$. Queda determinada por su acción sobre una base: si $\\mathcal{B}=\\{e_i\\}$, basta especificar $T(e_i)\\in W$." },
              { type:"teo", label:"Teorema rango-nulidad (Curtis)",
                tex:"Para $T:V\\to W$ lineal con $V$ de dimensión finita: $\\dim V=\\dim\\ker T+\\dim\\operatorname{Im}T$, es decir, $n=\\text{nulidad}(T)+\\text{rango}(T)$." },
            ]
          },
          {
            num: 4, title: "Eigenvalores y eigenvectores",
            notes: [
              { type:"teo", label:"Independencia lineal de eigenvectores",
                tex:"Eigenvectores correspondientes a eigenvalores distintos son linealmente independientes. En consecuencia, una matriz $n\\times n$ con $n$ eigenvalores distintos es diagonalizable." },
            ]
          },
        ]
      },
      {
        id: "al1_b4",
        title: "Linear Algebra",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: [
          {
            num: 1, title: "Vectores y espacios vectoriales",
            notes: [
              { type:"def", label:"Producto escalar en $\\mathbb{R}^n$",
                tex:"$\\mathbf{x}\\cdot\\mathbf{y}=\\sum_{i=1}^n x_iy_i$. Propiedades: bilinealidad, simetría, positividad ($\\mathbf{x}\\cdot\\mathbf{x}\\geq0$, con igualdad ssi $\\mathbf{x}=0$). Norma euclídea: $\\|\\mathbf{x}\\|=\\sqrt{\\mathbf{x}\\cdot\\mathbf{x}}$. Desigualdad de Cauchy-Schwarz: $|\\mathbf{x}\\cdot\\mathbf{y}|\\leq\\|\\mathbf{x}\\|\\|\\mathbf{y}\\|$." },
              { type:"def", label:"Independencia lineal y dimensión",
                tex:"Los vectores $v_1,\\ldots,v_m$ son $\\textit{linealmente independientes}$ (l.i.) si $\\sum c_iv_i=0\\Rightarrow c_i=0$ para todo $i$. La $\\textit{dimensión}$ de un espacio vectorial $V$ es el número de elementos de cualquier base de $V$." },
            ]
          },
          {
            num: 6, title: "Matrices y sistemas de ecuaciones",
            notes: [
              { type:"teo", label:"Forma escalonada reducida (Lang)",
                tex:"Toda matriz $A$ es equivalente por filas a una única matriz en forma escalonada reducida por filas (RREF). Las columnas pivote determinan la base del espacio columna; las variables libres parametrizan el espacio nulo." },
            ]
          },
        ]
      },
      {
        id: "al1_b5",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966",
        chapters: [
          {
            num: 3, title: "Álgebra multilineal y determinantes",
            notes: [
              { type:"def", label:"Formas multilineales alternadas",
                tex:"Una forma $k$-lineal $f:V^k\\to F$ es $\\textit{alternada}$ si $f(v_1,\\ldots,v_k)=0$ siempre que $v_i=v_j$ para algún $i\\neq j$. El determinante es la única forma $n$-lineal alternada con $\\det(I)=1$." },
              { type:"teo", label:"Expansión de Laplace",
                tex:"$\\det A=\\sum_{j=1}^n(-1)^{i+j}a_{ij}\\det(A_{ij})$ (expansión por la fila $i$), donde $A_{ij}$ es la submatriz obtenida eliminando fila $i$ y columna $j$. La regla de Cramer: $x_j=\\det(A_j)/\\det(A)$." },
            ]
          },
          {
            num: 5, title: "Espacios con producto interior",
            notes: [
              { type:"def", label:"Ortogonalidad y proceso de Gram-Schmidt",
                tex:"Dado $\\{v_1,\\ldots,v_n\\}$ l.i., se construye $\\{u_1,\\ldots,u_n\\}$ ortonormal: $u_1=v_1/\\|v_1\\|$; $w_k=v_k-\\sum_{j<k}\\langle v_k,u_j\\rangle u_j$; $u_k=w_k/\\|w_k\\|$." },
            ]
          },
        ]
      },
      {
        id: "al1_b6",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: [
          {
            num: 2, title: "Sistemas de ecuaciones lineales",
            notes: [
              { type:"def", label:"Sistema compatible e incompatible",
                tex:"Un sistema $A\\mathbf{x}=\\mathbf{b}$ es $\\textit{compatible}$ si tiene solución. Es $\\textit{compatible determinado}$ (única solución) si $\\operatorname{rango}(A)=n$; $\\textit{compatible indeterminado}$ (infinitas soluciones) si $\\operatorname{rango}(A)<n$. Teorema de Rouché-Frobenius: compatible $\\Leftrightarrow\\operatorname{rango}(A)=\\operatorname{rango}(A|\\mathbf{b})$." },
              { type:"def", label:"Eliminación gaussiana",
                tex:"El método de eliminación de Gauss transforma $A$ mediante operaciones elementales de fila en una matriz triangular superior. La eliminación Gauss-Jordan lleva la matriz aumentada $(A|\\mathbf{b})$ a la forma $(I|\\mathbf{x})$ o detecta incompatibilidad." },
            ]
          },
          {
            num: 5, title: "Representación matricial de transformaciones lineales",
            notes: [
              { type:"def", label:"Matriz de cambio de base",
                tex:"Si $\\mathcal{B}$ y $\\mathcal{C}$ son bases de $V$, la $\\textit{matriz de cambio de base}$ $P_{\\mathcal{B}\\to\\mathcal{C}}$ cumple $[v]_{\\mathcal{C}}=P_{\\mathcal{B}\\to\\mathcal{C}}[v]_{\\mathcal{B}}$. La matriz de $T$ en $\\mathcal{C}$ se obtiene por: $[T]_{\\mathcal{C}}=P^{-1}[T]_{\\mathcal{B}}P$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 13, title: "Integral definida",
            notes: [
              { type:"def", label:"Sumas de Riemann e integral",
                tex:"Una $\\textit{partición}$ de $[a,b]$ es $P=\\{a=x_0<x_1<\\cdots<x_n=b\\}$. Las sumas $U(f,P)=\\sum M_i\\Delta x_i$ e $L(f,P)=\\sum m_i\\Delta x_i$ son superior e inferior. $f$ es $\\textit{integrable Riemann}$ si $\\inf U(f,P)=\\sup L(f,P)=:\\int_a^b f$." },
              { type:"teo", label:"Criterio de integrabilidad",
                tex:"$f$ es integrable en $[a,b]\\Leftrightarrow\\forall\\varepsilon>0,\\,\\exists P:\\,U(f,P)-L(f,P)<\\varepsilon$. Toda función continua en $[a,b]$ es integrable." },
              { type:"teo", label:"Teorema del valor medio para integrales",
                tex:"Si $f$ es continua en $[a,b]$, existe $c\\in(a,b)$ tal que $\\displaystyle\\int_a^b f(x)\\,dx=f(c)(b-a)$." },
            ]
          },
          {
            num: 14, title: "Teorema Fundamental del Cálculo",
            notes: [
              { type:"teo", label:"TFC — Parte I",
                tex:"Si $f$ es integrable en $[a,b]$ y $g(x)=\\displaystyle\\int_a^x f(t)\\,dt$, entonces $g$ es continua en $[a,b]$. Si además $f$ es continua en $x_0\\in(a,b)$, entonces $g'(x_0)=f(x_0)$.",
                dem:"Sea $h>0$ pequeño. $g(x_0+h)-g(x_0)=\\int_{x_0}^{x_0+h}f(t)\\,dt$. Por el TVM para integrales, esto es $f(c_h)\\cdot h$ para algún $c_h\\in(x_0,x_0+h)$. Como $f$ es continua en $x_0$, $f(c_h)\\to f(x_0)$ cuando $h\\to0$. Así $g'(x_0)=\\lim_{h\\to0}\\frac{g(x_0+h)-g(x_0)}{h}=f(x_0)$. $\\blacksquare$" },
              { type:"teo", label:"TFC — Parte II",
                tex:"Si $f$ es continua en $[a,b]$ y $F$ es antiderivada de $f$ (es decir $F'=f$), entonces $\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$." },
              { type:"def", label:"Integrales impropias",
                tex:"$\\displaystyle\\int_a^\\infty f(x)\\,dx=\\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx$ (si el límite existe). Criterio de comparación: si $0\\le f\\le g$ y $\\int g$ converge, entonces $\\int f$ converge." },
            ]
          },
          {
            num: 15, title: "Funciones elementales y técnicas de integración",
            notes: [
              { type:"def", label:"Logaritmo natural vía integral",
                tex:"$\\ln x=\\displaystyle\\int_1^x\\frac{dt}{t}$ para $x>0$. Esta definición muestra directamente $\\ln(xy)=\\ln x+\\ln y$ y $\\frac{d}{dx}\\ln x=\\frac{1}{x}$. La función exponencial $e^x$ es la inversa de $\\ln x$." },
              { type:"teo", label:"Integración por partes",
                tex:"$\\displaystyle\\int_a^b u\\,dv=\\big[uv\\big]_a^b-\\int_a^b v\\,du$. Sigue de la regla del producto $(uv)'=u'v+uv'$ integrada." },
              { type:"teo", label:"Fracciones parciales",
                tex:"Toda función racional $P(x)/Q(x)$ (con $\\deg P<\\deg Q$ y $Q$ factorizado) se descompone en fracciones simples. Factores lineales $(x-a)^k$ dan términos $\\frac{A_j}{(x-a)^j}$; factores cuadráticos irreducibles $(x^2+px+q)^k$ dan $\\frac{B_jx+C_j}{(x^2+px+q)^j}$." },
            ]
          },
          {
            num: 23, title: "Series",
            notes: [
              { type:"def", label:"Series numéricas",
                tex:"La serie $\\sum_{n=1}^\\infty a_n$ converge a $S$ si la sucesión de sumas parciales $S_N=\\sum_{n=1}^N a_n$ converge a $S$. Condición necesaria: $a_n\\to0$; no es suficiente (contraej.: serie armónica $\\sum 1/n$ diverge)." },
              { type:"teo", label:"Criterios de convergencia",
                tex:"$\\textbf{Razón}$: si $\\lim|a_{n+1}/a_n|=L<1$, converge absolutamente; $L>1$, diverge. $\\textbf{Integral}$: $\\sum f(n)$ y $\\int_1^\\infty f$ tienen el mismo comportamiento para $f$ positiva y decreciente. $\\textbf{Leibniz}$: una serie alternante $\\sum(-1)^na_n$ con $a_n\\searrow0$ converge." },
              { type:"def", label:"Series de potencias",
                tex:"$\\sum_{n=0}^\\infty c_n(x-a)^n$ converge en $(a-R,a+R)$ con radio $R=1/\\limsup|c_n|^{1/n}$ (fórmula de Cauchy-Hadamard). En el interior, la serie define una función infinitamente diferenciable con $f^{(k)}(a)=k!\\,c_k$." },
            ]
          },
        ]
      },
      {
        id: "cd2_b2",
        title: "Cálculo con Geometría Analítica",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1987",
        chapters: [
          {
            num: 6, title: "Aplicaciones de la integral",
            notes: [
              { type:"def", label:"Área entre curvas",
                tex:"El área entre $f(x)$ y $g(x)$ con $f\\ge g$ en $[a,b]$ es $A=\\displaystyle\\int_a^b[f(x)-g(x)]\\,dx$. En coordenadas polares: $A=\\frac{1}{2}\\displaystyle\\int_\\alpha^\\beta[r(\\theta)]^2\\,d\\theta$." },
              { type:"def", label:"Volumen de sólido de revolución",
                tex:"$\\textbf{Discos}$: $V=\\pi\\displaystyle\\int_a^b[f(x)]^2\\,dx$ (rotación alrededor del eje $x$). $\\textbf{Cascarones}$: $V=2\\pi\\displaystyle\\int_a^b x f(x)\\,dx$. Longitud de arco: $L=\\displaystyle\\int_a^b\\sqrt{1+[f'(x)]^2}\\,dx$." },
            ]
          },
        ]
      },
      {
        id: "cd2_b3",
        title: "Cálculo Diferencial e Integral",
        author: "Arizmendi, Carrillo, Lara & Lluis-Riera",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: [
          {
            num: 5, title: "Integración",
            notes: [
              { type:"def", label:"Suma de Riemann",
                tex:"Para $f$ acotada en $[a,b]$ y partición $P=\\{a=x_0<x_1<\\cdots<x_n=b\\}$: la suma de Riemann es $S(f,P,\\xi)=\\sum_{i=1}^n f(\\xi_i)(x_i-x_{i-1})$ con $\\xi_i\\in[x_{i-1},x_i]$. $f$ es Riemann integrable si el límite existe independientemente de $P$ y $\\xi_i$." },
              { type:"teo", label:"Teorema Fundamental del Cálculo (II)",
                tex:"Si $F$ es una antiderivada de $f$ continua en $[a,b]$, entonces $\\displaystyle\\int_a^b f(x)\\,dx=F(b)-F(a)$." },
              { type:"def", label:"Técnicas de integración",
                tex:"Las técnicas principales son: sustitución ($u=g(x)$), integración por partes ($\\int u\\,dv=uv-\\int v\\,du$), fracciones parciales (para racionales), y sustituciones trigonométricas (para integrandos con $\\sqrt{a^2-x^2}$, $\\sqrt{a^2+x^2}$, $\\sqrt{x^2-a^2}$)." },
            ]
          },
          {
            num: 7, title: "Sucesiones y series",
            notes: [
              { type:"def", label:"Convergencia de series",
                tex:"$\\sum_{n=1}^\\infty a_n$ converge si las sumas parciales $S_n=\\sum_{k=1}^n a_k$ tienen límite finito. Criterios: razón ($\\lim|a_{n+1}/a_n|<1$), raíz ($\\limsup|a_n|^{1/n}<1$), comparación, integral." },
              { type:"def", label:"Series de potencias y Taylor",
                tex:"Una serie de potencias $\\sum_{n=0}^\\infty c_n(x-a)^n$ converge en un intervalo $|x-a|<R$ (radio de convergencia). La serie de Taylor de $f$ en $a$ es $\\sum_{n=0}^\\infty\\frac{f^{(n)}(a)}{n!}(x-a)^n$." },
            ]
          },
        ]
      },
      {
        id: "cd2_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. I, 2ª ed. Wiley-Interscience, 1937",
        chapters: [
          {
            num: 6, title: "Series de Taylor e interpolación",
            notes: [
              { type:"teo", label:"Serie de Taylor con estimación",
                tex:"$f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)$, donde $R_n(x)=\\frac{(x-a)^{n+1}}{(n+1)!}f^{(n+1)}(\\xi)$ para algún $\\xi$ entre $a$ y $x$. Courant insiste en tener estimaciones cuantitativas de $|R_n|$." },
              { type:"def", label:"Series elementales",
                tex:"$e^x=\\sum_{n=0}^\\infty x^n/n!$; $\\sin x=\\sum_{n=0}^\\infty(-1)^nx^{2n+1}/(2n+1)!$; $\\cos x=\\sum_{n=0}^\\infty(-1)^nx^{2n}/(2n)!$; $\\ln(1+x)=\\sum_{n=1}^\\infty(-1)^{n+1}x^n/n$ para $|x|<1$." },
            ]
          },
        ]
      },
      {
        id: "cd2_b5",
        title: "A First Course in Calculus",
        author: "Serge Lang",
        edition: "5ª ed. Springer, 1986",
        chapters: [
          {
            num: 8, title: "Series de potencias",
            notes: [
              { type:"def", label:"Radio de convergencia",
                tex:"El radio de convergencia de $\\sum c_n x^n$ es $R=1/\\limsup_{n\\to\\infty}|c_n|^{1/n}$ (fórmula de Hadamard). La serie converge absolutamente para $|x|<R$ y diverge para $|x|>R$; en $|x|=R$ hay que analizar caso a caso." },
              { type:"teo", label:"Derivación e integración término a término",
                tex:"Si $f(x)=\\sum_{n=0}^\\infty c_n x^n$ para $|x|<R$, entonces $f'(x)=\\sum_{n=1}^\\infty nc_n x^{n-1}$ y $\\int f(x)\\,dx=\\sum_{n=0}^\\infty\\frac{c_n}{n+1}x^{n+1}+C$, ambas con el mismo radio $R$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 1, title: "Ecuaciones diferenciales fundamentales",
            notes: [
              { type:"def", label:"EDO de orden $n$",
                tex:"Una ecuación de la forma $F(t,x,\\dot{x},\\ldots,x^{(n)})=0$. La ecuación es de orden $n$ si $x^{(n)}$ aparece explícitamente." },
              { type:"teo", label:"Existencia y unicidad (Picard-Lindelöf)",
                tex:"Si $\\mathbf{f}(t,\\mathbf{x})$ es continua y Lipschitz en $\\mathbf{x}$ en un entorno de $(t_0,\\mathbf{x}_0)$, el PVI $\\dot{\\mathbf{x}}=\\mathbf{f}(t,\\mathbf{x}),\\,\\mathbf{x}(t_0)=\\mathbf{x}_0$ tiene solución única en algún intervalo alrededor de $t_0$." },
              { type:"def", label:"Campo vectorial y flujo",
                tex:"Una EDO autónoma $\\dot{\\mathbf{x}}=\\mathbf{v}(\\mathbf{x})$ define un campo vectorial $\\mathbf{v}$ en el espacio de fases. El flujo $g^t:\\mathbf{x}_0\\mapsto\\mathbf{x}(t)$ es la familia uniparamétrica de difeomorfismos asociada." },
            ]
          },
          {
            num: 3, title: "Ecuaciones lineales",
            notes: [
              { type:"teo", label:"Principio de superposición",
                tex:"Si $\\mathbf{x}_1,\\ldots,\\mathbf{x}_n$ son soluciones de $\\dot{\\mathbf{x}}=A(t)\\mathbf{x}$ (homogénea), entonces $c_1\\mathbf{x}_1+\\cdots+c_n\\mathbf{x}_n$ también lo es." },
              { type:"def", label:"Matriz fundamental",
                tex:"Una matriz $\\Phi(t)$ cuyas columnas forman un conjunto fundamental de soluciones de $\\dot{\\mathbf{x}}=A\\mathbf{x}$. Satisface $\\dot{\\Phi}=A\\Phi$ con $\\det\\Phi(t)\\neq0$." },
              { type:"teo", label:"Variación de parámetros",
                tex:"La solución particular de $\\dot{\\mathbf{x}}=A(t)\\mathbf{x}+\\mathbf{b}(t)$ es $\\mathbf{x}_p=\\Phi(t)\\displaystyle\\int_{t_0}^t\\Phi^{-1}(s)\\mathbf{b}(s)\\,ds$." },
            ]
          },
          {
            num: 5, title: "Sistemas lineales con coeficientes constantes",
            notes: [
              { type:"def", label:"Exponencial de matriz",
                tex:"$e^{At}=\\displaystyle\\sum_{k=0}^{\\infty}\\frac{(At)^k}{k!}$. La solución de $\\dot{\\mathbf{x}}=A\\mathbf{x},\\,\\mathbf{x}(0)=\\mathbf{x}_0$ es $\\mathbf{x}(t)=e^{At}\\mathbf{x}_0$." },
              { type:"teo", label:"Clasificación por eigenvalores",
                tex:"Para $\\dot{\\mathbf{x}}=A\\mathbf{x}$ en $\\mathbb{R}^2$: si $\\lambda_1,\\lambda_2<0$ → nodo estable; $\\lambda_1,\\lambda_2>0$ → nodo inestable; $\\lambda_1<0<\\lambda_2$ → punto silla; $\\lambda=\\alpha\\pm\\beta i,\\,\\alpha<0$ → espiral estable; $\\alpha=0$ → centro." },
            ]
          },
        ]
      },
      {
        id: "ed_b2",
        title: "Differential Equations",
        author: "Blanchard, Devaney & Hall",
        edition: "4ª ed. Cengage, 2012",
        chapters: [
          {
            num: 2, title: "Sistemas de primer orden",
            notes: [
              { type:"def", label:"Sistema autónomo",
                tex:"$\\dot{\\mathbf{x}}=\\mathbf{f}(\\mathbf{x})$ (sin dependencia explícita en $t$). Los puntos de equilibrio satisfacen $\\mathbf{f}(\\mathbf{x}^*)=\\mathbf{0}$." },
              { type:"teo", label:"Clasificación de equilibrios lineales",
                tex:"Para $\\dot{\\mathbf{x}}=A\\mathbf{x}$: nodo estable/inestable si eigenvalores reales del mismo signo; silla si eigenvalores reales de signos opuestos; espiral si eigenvalores complejos ($\\operatorname{Re}\\neq0$); centro si eigenvalores imaginarios puros." },
            ]
          },
        ]
      },
      {
        id: "ed_b3",
        title: "Differential Equations and Their Applications",
        author: "Martin Braun",
        edition: "4ª ed. Springer, 1993",
        chapters: [
          {
            num: 1, title: "Ecuaciones de primer orden",
            notes: [
              { type:"def", label:"Ecuación de Bernoulli",
                tex:"$y'+P(x)y=Q(x)y^n$ con $n\\neq0,1$. La sustitución $v=y^{1-n}$ la lineariza: $v'+(1-n)P(x)v=(1-n)Q(x)$, que es lineal en $v$." },
              { type:"def", label:"Ecuaciones exactas",
                tex:"$M(x,y)dx+N(x,y)dy=0$ es exacta si $\\partial M/\\partial y=\\partial N/\\partial x$ en algún dominio $D$. Entonces existe $F(x,y)$ tal que $\\partial F/\\partial x=M$ y $\\partial F/\\partial y=N$; la solución general es $F(x,y)=C$." },
            ]
          },
          {
            num: 3, title: "Sistemas de EDO lineales",
            notes: [
              { type:"teo", label:"Solución por exponencial de matriz",
                tex:"La solución de $\\dot{\\mathbf{x}}=A\\mathbf{x}$, $\\mathbf{x}(0)=\\mathbf{x}_0$ es $\\mathbf{x}(t)=e^{At}\\mathbf{x}_0$. Braun desarrolla $e^{At}$ en términos de los eigenvalores y eigenvectores de $A$, incluyendo el caso de eigenvalores repetidos mediante la forma de Jordan." },
              { type:"def", label:"Aplicaciones a biología (Braun)",
                tex:"Braun motiva las EDO con modelos: crecimiento poblacional $\\dot{N}=rN(1-N/K)$ (logístico); epidemias SIR $\\dot{S}=-\\beta SI$, $\\dot{I}=\\beta SI-\\gamma I$, $\\dot{R}=\\gamma I$; depredador-presa de Lotka-Volterra $\\dot{x}=ax-bxy$, $\\dot{y}=-cy+dxy$." },
            ]
          },
        ]
      },
      {
        id: "ed_b4",
        title: "Elementary Differential Equations",
        author: "Derrick & Grossman",
        edition: "4ª ed. Addison-Wesley, 1997",
        chapters: [
          {
            num: 2, title: "Ecuaciones lineales de orden $n$",
            notes: [
              { type:"teo", label:"Estructura de la solución general",
                tex:"La solución general de $L[y]=y^{(n)}+p_{n-1}y^{(n-1)}+\\cdots+p_0y=g(x)$ es $y=y_h+y_p$, donde $y_h=c_1y_1+\\cdots+c_ny_n$ (combinación de $n$ soluciones l.i. de la homogénea) y $y_p$ es cualquier solución particular." },
              { type:"def", label:"Coeficientes indeterminados",
                tex:"Para $g(x)=e^{\\alpha x}P_m(x)$ o $g(x)=e^{\\alpha x}(P_m\\cos\\beta x+Q_m\\sin\\beta x)$: si $\\alpha+i\\beta$ no es raíz de la ecuación característica, se propone $y_p$ de la misma forma; si es raíz de multiplicidad $s$, se multiplica por $x^s$." },
            ]
          },
          {
            num: 4, title: "La transformada de Laplace",
            notes: [
              { type:"def", label:"Transformada de Laplace",
                tex:"$\\mathcal{L}\\{f\\}(s)=\\int_0^\\infty e^{-st}f(t)\\,dt$ (para $s$ suficientemente grande). Propiedades: $\\mathcal{L}\\{f'\\}=s\\mathcal{L}\\{f\\}-f(0)$; $\\mathcal{L}\\{e^{at}f\\}(s)=\\mathcal{L}\\{f\\}(s-a)$ (traslación). Útil para PVI con condiciones iniciales." },
            ]
          },
        ]
      },
    ]
  },

  {
    subject: "Análisis Matemático I",
    matId: "analisis_1",
    color: "linear-gradient(135deg,#0a1209,#162519)",
    books: [
      {
        id: "ana_b1",
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        edition: "3ª ed. McGraw-Hill",
        chapters: [
          {
            num: 2, title: "Espacios Métricos Básicos",
            notes: [
              { type:"def", label:"Punto límite",
                tex:"$p$ es punto límite de $E\\subset X$ si todo vecindario de $p$ contiene un punto $q\\neq p$ con $q\\in E$." },
              { type:"teo", label:"Bolzano-Weierstrass",
                tex:"Todo subconjunto infinito y acotado de $\\mathbb{R}^n$ tiene al menos un punto límite." },
              { type:"def", label:"Conjunto denso",
                tex:"$E$ es denso en $X$ si todo punto de $X$ es punto límite de $E$ o pertenece a $E$, es decir, $\\overline{E}=X$." },
            ]
          },
          {
            num: 5, title: "Diferenciación",
            notes: [
              { type:"teo", label:"Teorema del valor medio",
                tex:"Si $f:[a,b]\\to\\mathbb{R}$ es continua en $[a,b]$ y diferenciable en $(a,b)$, $\\exists c\\in(a,b)$ tal que $f(b)-f(a)=f'(c)(b-a)$." },
              { type:"teo", label:"Teorema de Taylor con resto",
                tex:"$f(x)=\\displaystyle\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$ para algún $\\xi$ entre $a$ y $x$." },
            ]
          },
          {
            num: 6, title: "La Integral de Riemann-Stieltjes",
            notes: [
              { type:"def", label:"Integral de Riemann-Stieltjes",
                tex:"$\\displaystyle\\int_a^b f\\,d\\alpha=\\lim_{\\|P\\|\\to0}\\sum_{i=1}^n f(t_i)[\\alpha(x_i)-\\alpha(x_{i-1})]$. La integral de Riemann usual corresponde a $\\alpha(x)=x$." },
              { type:"teo", label:"Integrabilidad de funciones continuas",
                tex:"Toda función continua en $[a,b]$ es Riemann-Stieltjes integrable respecto a cualquier $\\alpha$ de variación acotada." },
            ]
          },
        ]
      },
      {
        id: "ana_b2",
        title: "Elementos de Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Dover, 1999",
        chapters: [
          {
            num: 1, title: "Espacios de Banach",
            notes: [
              { type:"def", label:"Espacio normado",
                tex:"Un espacio vectorial $V$ con norma $\\|\\cdot\\|:V\\to[0,\\infty)$ que satisface: $\\|v\\|=0\\Leftrightarrow v=0$; $\\|\\lambda v\\|=|\\lambda|\\|v\\|$; $\\|u+v\\|\\le\\|u\\|+\\|v\\|$." },
              { type:"def", label:"Espacio de Banach",
                tex:"Un espacio normado completo (toda sucesión de Cauchy converge). Ejemplos: $\\mathbb{R}^n$, $\\ell^p$, $C([a,b])$ con norma $\\sup$." },
              { type:"teo", label:"Teorema de la aplicación abierta",
                tex:"Si $T:X\\to Y$ es lineal, continua y sobreyectiva entre espacios de Banach, entonces $T$ es una aplicación abierta." },
            ]
          },
        ]
      },
      {
        id: "ana_b3",
        title: "Mathematical Analysis",
        author: "Tom M. Apostol",
        edition: "2ª ed. Addison-Wesley, 1974",
        chapters: [
          {
            num: 3, title: "Espacios métricos y topología",
            notes: [
              { type:"def", label:"Isometrías y equivalencia topológica",
                tex:"Una $\\textit{isometría}$ $f:(X,d_X)\\to(Y,d_Y)$ satisface $d_Y(f(x),f(y))=d_X(x,y)$. Un $\\textit{homeomorfismo}$ es una biyección bicontinua. Apostol estudia los invariantes topológicos: compacidad, conexidad, completud." },
              { type:"teo", label:"Completud y el teorema de Baire",
                tex:"En un espacio métrico completo, la intersección numerable de abiertos densos es densa (Baire). Consecuencia: un espacio de Banach no puede ser unión numerable de subespacios de dimensión finita." },
            ]
          },
          {
            num: 9, title: "Sucesiones y series de funciones",
            notes: [
              { type:"teo", label:"Criterio de Dini",
                tex:"Si $\\{f_n\\}$ es monótona, $f_n\\to f$ puntualmente, $f$ continua, y $X$ compacto, entonces $f_n\\to f$ uniformemente." },
              { type:"teo", label:"Completud de $C(X)$",
                tex:"El espacio $C(X)$ de funciones continuas en un compacto $X$, con norma $\\|f\\|=\\sup_{x\\in X}|f(x)|$, es un espacio de Banach. La convergencia en norma es equivalente a la convergencia uniforme." },
            ]
          },
        ]
      },
      {
        id: "ana_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011",
        chapters: [
          {
            num: 5, title: "Continuidad y funciones acotadas",
            notes: [
              { type:"teo", label:"Continuidad uniforme en compactos",
                tex:"Toda función continua en un intervalo cerrado y acotado $[a,b]$ es uniformemente continua: para todo $\\varepsilon>0$ existe $\\delta>0$ tal que $|x-y|<\\delta\\Rightarrow|f(x)-f(y)|<\\varepsilon$ (independientemente del punto $x$)." },
              { type:"teo", label:"Teorema de Weierstrass (extremo)",
                tex:"Si $f:[a,b]\\to\\mathbb{R}$ es continua, entonces $f$ alcanza su máximo y su mínimo: existen $c,d\\in[a,b]$ con $f(c)=\\sup f$ y $f(d)=\\inf f$." },
            ]
          },
          {
            num: 8, title: "Sucesiones de funciones",
            notes: [
              { type:"def", label:"Convergencia uniforme (Bartle-Sherbert)",
                tex:"$(f_n)$ converge uniformemente a $f$ en $E$ si $\\sup_{x\\in E}|f_n(x)-f(x)|\\to0$ cuando $n\\to\\infty$. Equivale a: para todo $\\varepsilon>0$ existe $N$ tal que $n>N\\Rightarrow|f_n(x)-f(x)|<\\varepsilon$ para todo $x\\in E$ simultáneamente." },
              { type:"teo", label:"Continuidad del límite uniforme",
                tex:"Si $f_n\\to f$ uniformemente en $E$ y cada $f_n$ es continua en $E$, entonces $f$ es continua en $E$. Además, $\\lim_{n}\\int_a^b f_n=\\int_a^b f$ si el intervalo es compacto." },
            ]
          },
        ]
      },
      {
        id: "ana_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005",
        chapters: [
          {
            num: 1, title: "Cálculo en espacios de Banach",
            notes: [
              { type:"def", label:"Diferenciabilidad en espacios de Banach",
                tex:"$f:U\\subset X\\to Y$ es Fréchet-diferenciable en $x_0$ si existe $T\\in\\mathcal{L}(X,Y)$ tal que $\\lim_{h\\to0}\\|f(x_0+h)-f(x_0)-Th\\|_Y/\\|h\\|_X=0$. La derivada $Df(x_0)=T$ es el análogo multidimensional de la derivada." },
            ]
          },
          {
            num: 2, title: "Teoremas clásicos de análisis",
            notes: [
              { type:"teo", label:"Función implícita (Jost)",
                tex:"Sea $F:U\\subset X\\times Y\\to Z$ de clase $C^1$ con $F(x_0,y_0)=0$ y $D_yF(x_0,y_0)$ invertible. Entonces localmente existe $g:V\\to Y$ de clase $C^1$ tal que $F(x,g(x))=0$. Jost prueba esto en el marco general de espacios de Banach." },
            ]
          },
        ]
      },
      {
        id: "ana_b6",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015",
        chapters: [
          {
            num: 2, title: "Funciones de variación acotada",
            notes: [
              { type:"def", label:"Variación total",
                tex:"La $\\textit{variación total}$ de $f:[a,b]\\to\\mathbb{R}$ es $V_a^b(f)=\\sup_P\\sum_{i=1}^n|f(x_i)-f(x_{i-1})|$ (sup sobre todas las particiones $P$). $f$ es de variación acotada ($f\\in BV$) si $V_a^b(f)<\\infty$. Toda $f$ monótona es BV; $f\\in BV\\Leftrightarrow f=g-h$ con $g,h$ monótonas." },
              { type:"teo", label:"Integral de Riemann-Stieljes (Wheeden)",
                tex:"Si $f$ es continua y $\\alpha\\in BV$, entonces $\\int_a^b f\\,d\\alpha$ existe. La integral de Lebesgue-Stieljes extiende esto a integradoras $\\alpha$ más generales, y coincide con $\\int f\\,d\\mu_\\alpha$ donde $\\mu_\\alpha$ es la medida de Borel inducida por $\\alpha$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 2, title: "Teoría de Grupos",
            notes: [
              { type:"def", label:"Grupo",
                tex:"Un $\\textit{grupo}$ $(G,\\cdot)$ es un conjunto con operación binaria que satisface: asociatividad, existencia de identidad $e$ ($ae=ea=a$) y de inverso ($aa^{-1}=e$)." },
              { type:"teo", label:"Teorema de Lagrange",
                tex:"Si $H$ es subgrupo de un grupo finito $G$, entonces $|H|$ divide a $|G|$. En particular, el orden de todo elemento divide a $|G|$." },
              { type:"def", label:"Subgrupo normal y grupo cociente",
                tex:"$N\\trianglelefteq G$ si $gNg^{-1}=N$ para todo $g\\in G$. El cociente $G/N=\\{gN\\mid g\\in G\\}$ es grupo con $(aN)(bN)=abN$." },
              { type:"teo", label:"Primer teorema de isomorfismo",
                tex:"Si $\\varphi:G\\to H$ es homomorfismo, entonces $G/\\ker\\varphi\\cong\\text{Im}\\,\\varphi$." },
            ]
          },
          {
            num: 3, title: "Teoría de Anillos",
            notes: [
              { type:"def", label:"Anillo",
                tex:"$(R,+,\\cdot)$ donde $(R,+)$ es grupo abeliano, $(R,\\cdot)$ es monoide, y la multiplicación distribuye sobre la suma." },
              { type:"def", label:"Ideal",
                tex:"$I\\subset R$ es ideal si es subgrupo de $(R,+)$ y $rI,Ir\\subset I$ para todo $r\\in R$. El cociente $R/I$ es anillo." },
              { type:"teo", label:"Criterio de maximalidad",
                tex:"Si $R$ es anillo conmutativo con unidad, $I\\subsetneq R$ es maximal $\\Leftrightarrow$ $R/I$ es cuerpo." },
            ]
          },
        ]
      },
      {
        id: "alm_b2",
        title: "A First Course in Abstract Algebra",
        author: "John B. Fraleigh",
        edition: "7ª ed. Addison-Wesley, 2003",
        chapters: [
          {
            num: 4, title: "Grupos cíclicos",
            notes: [
              { type:"teo", label:"Clasificación de grupos cíclicos",
                tex:"Todo grupo cíclico es isomorfo a $\\mathbb{Z}$ (si es infinito) o a $\\mathbb{Z}_n$ (si tiene orden $n$). Todo subgrupo de un grupo cíclico es cíclico." },
              { type:"teo", label:"Subgrupos de $\\mathbb{Z}_n$",
                tex:"Los subgrupos de $\\mathbb{Z}_n$ son exactamente $\\langle d\\rangle$ para cada divisor $d$ de $n$. Hay exactamente $\\tau(n)$ subgrupos (uno por cada divisor)." },
            ]
          },
          {
            num: 10, title: "Homomorfismos y factores",
            notes: [
              { type:"teo", label:"Primer teorema de isomorfismo",
                tex:"Si $\\phi:G\\to G'$ es homomorfismo de grupos, entonces $G/\\ker\\phi\\cong\\phi(G)$. En particular, $|G|=|\\ker\\phi|\\cdot|\\operatorname{Im}\\phi|$." },
              { type:"def", label:"Subgrupo normal",
                tex:"$N\\trianglelefteq G$ si $gNg^{-1}=N$ para todo $g\\in G$. Equivalentemente, las clases laterales izquierda y derecha coinciden: $gN=Ng$." },
            ]
          },
        ]
      },
      {
        id: "alm_b3",
        title: "An Introduction to the Theory of Groups",
        author: "Joseph J. Rotman",
        edition: "4ª ed. Springer, 1995",
        chapters: [
          {
            num: 3, title: "El teorema de Sylow",
            notes: [
              { type:"teo", label:"Teoremas de Sylow",
                tex:"Sea $G$ grupo finito con $|G|=p^m r$, $p\\nmid r$. (1) Existe un $p$-subgrupo de Sylow $P\\leq G$ con $|P|=p^m$. (2) Todos los $p$-subgrupos de Sylow son conjugados. (3) El número $n_p$ de $p$-subgrupos de Sylow satisface $n_p\\equiv1\\pmod{p}$ y $n_p\\mid r$." },
              { type:"cor", label:"Grupos de orden pequeño",
                tex:"Como aplicación de Sylow: todo grupo de orden $pq$ con $p<q$ primos y $p\\nmid(q-1)$ es cíclico (isomorfo a $\\mathbb{Z}_{pq}$). Todo grupo de orden $p^2$ es abeliano. Todo grupo de orden $60$ simple es isomorfo a $A_5$." },
            ]
          },
          {
            num: 5, title: "Series de composición",
            notes: [
              { type:"def", label:"Serie de composición y factores de composición",
                tex:"Una $\\textit{serie de composición}$ de $G$ es $\\{1\\}=G_0\\trianglelefteq G_1\\trianglelefteq\\cdots\\trianglelefteq G_n=G$ donde cada $G_i/G_{i-1}$ es simple. Los $\\textit{factores de composición}$ son los cocientes simples." },
              { type:"teo", label:"Teorema de Jordan-Hölder",
                tex:"Si $G$ tiene serie de composición, entonces cualesquiera dos series de composición de $G$ tienen la misma longitud y los mismos factores de composición (salvo isomorfismo y reordenamiento)." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 1, title: "Geometría del espacio euclidiano",
            notes: [
              { type:"def", label:"Producto punto",
                tex:"$\\mathbf{u}\\cdot\\mathbf{v}=u_1v_1+\\cdots+u_nv_n=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$. Mide proyección: $\\text{proy}_{\\mathbf{v}}\\mathbf{u}=\\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\|\\mathbf{v}\\|^2}\\mathbf{v}$." },
              { type:"def", label:"Producto vectorial en $\\mathbb{R}^3$",
                tex:"$\\mathbf{u}\\times\\mathbf{v}=\\det\\begin{pmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\u_1&u_2&u_3\\\\v_1&v_2&v_3\\end{pmatrix}$. $\\|\\mathbf{u}\\times\\mathbf{v}\\|=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\sin\\theta$ es el área del paralelogramo." },
            ]
          },
          {
            num: 2, title: "Diferenciación",
            notes: [
              { type:"def", label:"Derivada parcial",
                tex:"$\\frac{\\partial f}{\\partial x_i}(\\mathbf{x}_0)=\\lim_{h\\to0}\\frac{f(\\mathbf{x}_0+h\\mathbf{e}_i)-f(\\mathbf{x}_0)}{h}$." },
              { type:"def", label:"Diferenciabilidad",
                tex:"$f:\\mathbb{R}^n\\to\\mathbb{R}^m$ es diferenciable en $\\mathbf{x}_0$ si existe $T$ lineal tal que $\\lim_{\\mathbf{h}\\to\\mathbf{0}}\\frac{\\|f(\\mathbf{x}_0+\\mathbf{h})-f(\\mathbf{x}_0)-T\\mathbf{h}\\|}{\\|\\mathbf{h}\\|}=0$. $T=Df(\\mathbf{x}_0)$ es la matriz jacobiana." },
              { type:"teo", label:"Regla de la cadena",
                tex:"Si $f:\\mathbb{R}^n\\to\\mathbb{R}^m$ y $g:\\mathbb{R}^m\\to\\mathbb{R}^p$ son diferenciables, entonces $D(g\\circ f)(\\mathbf{x})=Dg(f(\\mathbf{x}))\\cdot Df(\\mathbf{x})$." },
            ]
          },
          {
            num: 3, title: "Máximos y mínimos",
            notes: [
              { type:"teo", label:"Criterio de la segunda derivada",
                tex:"Sea $f:\\mathbb{R}^2\\to\\mathbb{R}$ con $\\nabla f(\\mathbf{p})=\\mathbf{0}$ y $H=Hf(\\mathbf{p})$ la hessiana. Si $\\det H>0$ y $f_{xx}>0$: mínimo local; $\\det H>0$ y $f_{xx}<0$: máximo local; $\\det H<0$: punto silla." },
              { type:"teo", label:"Multiplicadores de Lagrange",
                tex:"Para maximizar/minimizar $f(\\mathbf{x})$ sujeto a $g(\\mathbf{x})=0$: en los extremos $\\nabla f=\\lambda\\nabla g$ para algún $\\lambda\\in\\mathbb{R}$ (multiplicador de Lagrange)." },
            ]
          },
        ]
      },
      {
        id: "cd3_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996",
        chapters: [
          {
            num: 12, title: "Funciones de varias variables",
            notes: [
              { type:"def", label:"Límite y continuidad en $\\mathbb{R}^n$",
                tex:"$\\lim_{\\mathbf{x}\\to\\mathbf{x}_0}f(\\mathbf{x})=L$ si para todo $\\varepsilon>0$ existe $\\delta>0$ tal que $\\|\\mathbf{x}-\\mathbf{x}_0\\|<\\delta\\Rightarrow|f(\\mathbf{x})-L|<\\varepsilon$." },
              { type:"def", label:"Derivada direccional",
                tex:"$D_{\\mathbf{u}}f(\\mathbf{x}_0)=\\lim_{h\\to0}\\frac{f(\\mathbf{x}_0+h\\mathbf{u})-f(\\mathbf{x}_0)}{h}=\\nabla f(\\mathbf{x}_0)\\cdot\\mathbf{u}$ (con $\\|\\mathbf{u}\\|=1$)." },
            ]
          },
        ]
      },
      {
        id: "cd3_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969",
        chapters: [
          {
            num: 8, title: "Diferencial de funciones de varias variables",
            notes: [
              { type:"def", label:"Derivada total (Apostol)",
                tex:"$f:\\mathbb{R}^n\\to\\mathbb{R}^m$ es diferenciable en $\\mathbf{a}$ si existe $T_\\mathbf{a}\\in\\mathcal{L}(\\mathbb{R}^n,\\mathbb{R}^m)$ con $\\lim_{\\mathbf{x}\\to\\mathbf{a}}\\frac{\\|f(\\mathbf{x})-f(\\mathbf{a})-T_\\mathbf{a}(\\mathbf{x}-\\mathbf{a})\\|}{\\|\\mathbf{x}-\\mathbf{a}\\|}=0$. $T_\\mathbf{a}$ es la matriz Jacobiana $Df(\\mathbf{a})$." },
              { type:"teo", label:"Teorema de la función inversa (Apostol)",
                tex:"Si $f:U\\to\\mathbb{R}^n$ es de clase $C^1$ y $\\det Df(\\mathbf{a})\\neq0$, entonces existen $U_0\\ni\\mathbf{a}$ y $V_0=f(U_0)$ abiertos tales que $f:U_0\\to V_0$ es biyección bicontinua con inversa de clase $C^1$. La derivada de la inversa es $(Df^{-1})(\\mathbf{y})=[Df(f^{-1}(\\mathbf{y}))]^{-1}$." },
            ]
          },
          {
            num: 11, title: "Topología de $\\mathbb{R}^n$",
            notes: [
              { type:"def", label:"Conjuntos abiertos y cerrados",
                tex:"$U\\subset\\mathbb{R}^n$ es $\\textit{abierto}$ si todo punto de $U$ tiene un entorno abierto contenido en $U$. $F$ es $\\textit{cerrado}$ si $\\mathbb{R}^n\\setminus F$ es abierto. Un conjunto acotado y cerrado en $\\mathbb{R}^n$ es compacto (Heine-Borel)." },
            ]
          },
        ]
      },
      {
        id: "cd3_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936",
        chapters: [
          {
            num: 2, title: "Funciones de varias variables",
            notes: [
              { type:"def", label:"Diferenciabilidad (Courant Vol. II)",
                tex:"Courant define la diferencial $df=\\frac{\\partial f}{\\partial x}dx+\\frac{\\partial f}{\\partial y}dy+\\cdots$ como la aproximación lineal principal del incremento $\\Delta f=f(\\mathbf{x}+\\mathbf{h})-f(\\mathbf{x})$. La notación de Leibniz $\\partial f/\\partial x_i$ es central en su presentación." },
              { type:"teo", label:"Extremos con restricciones (Courant)",
                tex:"Para maximizar $f(x,y)$ sujeto a $g(x,y)=0$: los puntos críticos satisfacen el sistema $f_x=\\lambda g_x$, $f_y=\\lambda g_y$, $g=0$. Courant motiva el método geométricamente: en el extremo, las curvas de nivel de $f$ y $g$ son tangentes." },
            ]
          },
        ]
      },
      {
        id: "cd3_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989",
        chapters: [
          {
            num: 2, title: "Funciones de varias variables e integración",
            notes: [
              { type:"def", label:"Diferencial e incremento",
                tex:"$f:\\mathbb{R}^n\\to\\mathbb{R}$ tiene diferencial $df(\\mathbf{x}_0;\\mathbf{h})=\\sum_i f_{x_i}(\\mathbf{x}_0)h_i$ en $\\mathbf{x}_0$. El incremento satisface $f(\\mathbf{x}_0+\\mathbf{h})-f(\\mathbf{x}_0)=df(\\mathbf{x}_0;\\mathbf{h})+o(\\|\\mathbf{h}\\|)$ cuando $\\mathbf{h}\\to0$." },
              { type:"teo", label:"Criterio de segundo orden para extremos",
                tex:"Si $\\nabla f(\\mathbf{p})=0$ y la forma cuadrática $Q(\\mathbf{h})=\\sum_{i,j}f_{x_ix_j}(\\mathbf{p})h_ih_j$ es definida positiva (negativa), entonces $\\mathbf{p}$ es mínimo (máximo) local. Si $Q$ es indefinida, es punto silla." },
            ]
          },
        ]
      },
      {
        id: "cd3_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: [
          {
            num: 3, title: "Diferenciación",
            notes: [
              { type:"def", label:"Gradiente y plano tangente",
                tex:"$\\nabla f(\\mathbf{x}_0)=(f_{x_1},\\ldots,f_{x_n})$ apunta en la dirección de máximo crecimiento de $f$. El plano tangente a la superficie $z=f(x,y)$ en $(x_0,y_0)$ es $z-f(x_0,y_0)=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$." },
              { type:"teo", label:"Regla de la cadena (varias variables)",
                tex:"Si $\\mathbf{g}:U\\subset\\mathbb{R}^m\\to\\mathbb{R}^n$ y $f:V\\subset\\mathbb{R}^n\\to\\mathbb{R}^p$, con $\\mathbf{g}(U)\\subset V$, y ambas diferenciables, entonces $D(f\\circ\\mathbf{g})(\\mathbf{x})=Df(\\mathbf{g}(\\mathbf{x}))\\cdot D\\mathbf{g}(\\mathbf{x})$ (producto de matrices Jacobianas)." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 5, title: "Formas bilineales",
            notes: [
              { type:"def", label:"Forma bilineal",
                tex:"$B:V\\times V\\to F$ bilineal si es lineal en cada argumento. Simétrica si $B(u,v)=B(v,u)$; antisimétrica si $B(u,v)=-B(v,u)$." },
              { type:"def", label:"Forma cuadrática",
                tex:"$Q:V\\to F$ definida por $Q(v)=B(v,v)$ para $B$ simétrica. Se representa mediante la matriz $[b_{ij}]$ donde $b_{ij}=B(e_i,e_j)$." },
              { type:"teo", label:"Ley de inercia de Sylvester",
                tex:"Toda forma cuadrática real es equivalente a $x_1^2+\\cdots+x_p^2-x_{p+1}^2-\\cdots-x_r^2$ con $r=\\operatorname{rango}(Q)$. El par $(p,r-p)$ (índice de positividad e índice de negatividad) es invariante." },
            ]
          },
          {
            num: 6, title: "Operadores sobre espacios con producto interior",
            notes: [
              { type:"def", label:"Operador adjunto",
                tex:"Dado $T:V\\to V$ con producto interior, $T^*$ es el único operador tal que $\\langle T(u),v\\rangle=\\langle u,T^*(v)\\rangle$ para todos $u,v\\in V$." },
              { type:"teo", label:"Teorema espectral (caso real)",
                tex:"Todo operador autoadjunto $T=T^*$ sobre un espacio euclidiano tiene eigenvalores reales y eigenvectores que forman una base ortonormal de $V$." },
            ]
          },
        ]
      },
      {
        id: "al2_b2",
        title: "Álgebra Lineal",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: [
          {
            num: 7, title: "Forma de Jordan",
            notes: [
              { type:"def", label:"Bloque de Jordan",
                tex:"$J_k(\\lambda)=\\begin{pmatrix}\\lambda&1&&0\\\\&\\lambda&\\ddots&\\\\&&\\ddots&1\\\\0&&&\\lambda\\end{pmatrix}\\in M_{k\\times k}$. La forma de Jordan de $T$ es una matriz diagonal de bloques $J_{k_i}(\\lambda_i)$." },
              { type:"teo", label:"Existencia de la forma de Jordan",
                tex:"Sobre un cuerpo algebraicamente cerrado, todo operador $T:V\\to V$ es semejante a una forma de Jordan (única salvo reordenamiento de bloques)." },
            ]
          },
        ]
      },
      {
        id: "al2_b3",
        title: "Fundamentals of Linear Algebra",
        author: "Katsumi Nomizu",
        edition: "McGraw-Hill, 1966",
        chapters: [
          {
            num: 6, title: "Formas cuadráticas y clasificación",
            notes: [
              { type:"teo", label:"Ley de inercia de Sylvester (Nomizu)",
                tex:"Toda forma cuadrática real $Q$ es equivalente (bajo cambio de base) a $x_1^2+\\cdots+x_p^2-x_{p+1}^2-\\cdots-x_r^2$. Los índices $(p,r-p,n-r)$ (positividad, negatividad, nulidad) son invariantes bajo cambio de base — la firma de $Q$." },
              { type:"def", label:"Forma bilineal y su polarización",
                tex:"Dada una forma cuadrática $Q(v)=B(v,v)$, la forma bilineal simétrica asociada se recupera por $B(u,v)=\\frac{1}{2}[Q(u+v)-Q(u)-Q(v)]$. Esta relación es la $\\textit{identidad de polarización}$." },
            ]
          },
        ]
      },
      {
        id: "al2_b4",
        title: "Álgebra Lineal",
        author: "H. Rincón Mora",
        edition: "Las Prensas de Ciencias, UNAM",
        chapters: [
          {
            num: 6, title: "Operadores autoadjuntos y aplicaciones",
            notes: [
              { type:"teo", label:"Teorema espectral (Rincón)",
                tex:"Si $T:V\\to V$ es autoadjunto en un espacio euclídeo (o unitario) de dimensión finita, existe una base ortonormal de $V$ formada por eigenvectores de $T$. En términos matriciales: toda matriz simétrica real (o hermítica) es ortogonalmente (unitariamente) diagonalizable." },
              { type:"def", label:"Forma polar de un operador",
                tex:"Todo operador invertible $T$ se factoriza como $T=UP$ donde $U$ es ortogonal (unitario) y $P=\\sqrt{T^*T}$ es simétrico definido positivo (descomposición polar). Esta factorización es única cuando $T$ es invertible." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 5, title: "Integrales múltiples",
            notes: [
              { type:"def", label:"Integral doble",
                tex:"$\\displaystyle\\iint_D f(x,y)\\,dA=\\lim_{\\|P\\|\\to0}\\sum_{i,j}f(x_{ij}^*,y_{ij}^*)\\,\\Delta A_{ij}$. Geométricamente es el volumen bajo la superficie $z=f(x,y)\\geq0$." },
              { type:"teo", label:"Fubini",
                tex:"Si $f$ es continua en el rectángulo $R=[a,b]\\times[c,d]$, entonces $\\displaystyle\\iint_R f\\,dA=\\int_a^b\\!\\left(\\int_c^d f(x,y)\\,dy\\right)dx=\\int_c^d\\!\\left(\\int_a^b f(x,y)\\,dx\\right)dy$." },
              { type:"teo", label:"Cambio de variable",
                tex:"$\\displaystyle\\iint_D f(x,y)\\,dx\\,dy=\\iint_{D^*}f(g(u,v))\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|du\\,dv$, donde $\\left|\\partial(x,y)/\\partial(u,v)\\right|$ es el jacobiano de la transformación." },
            ]
          },
          {
            num: 7, title: "Teoremas del cálculo vectorial",
            notes: [
              { type:"teo", label:"Teorema de Green",
                tex:"Si $C$ es curva cerrada simple orientada positivamente que bordea $D$, y $P,Q$ tienen derivadas parciales continuas, entonces $\\displaystyle\\oint_C P\\,dx+Q\\,dy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dA$." },
              { type:"teo", label:"Teorema de Gauss (divergencia)",
                tex:"$\\displaystyle\\oiint_{\\partial V}\\mathbf{F}\\cdot d\\mathbf{S}=\\iiint_V\\operatorname{div}\\mathbf{F}\\,dV$, con $\\partial V$ superficie cerrada orientada hacia afuera." },
              { type:"teo", label:"Teorema de Stokes",
                tex:"$\\displaystyle\\iint_S(\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{S}=\\oint_{\\partial S}\\mathbf{F}\\cdot d\\mathbf{r}$, donde $\\partial S$ es la frontera de $S$ con orientación inducida." },
            ]
          },
        ]
      },
      {
        id: "cd4_b2",
        title: "Cálculo (Varias Variables)",
        author: "Thomas & Finney",
        edition: "9ª ed. Addison-Wesley, 1996",
        chapters: [
          {
            num: 14, title: "Integrales múltiples",
            notes: [
              { type:"def", label:"Integrales iteradas en coordenadas polares",
                tex:"$\\displaystyle\\iint_D f(x,y)\\,dA=\\int_\\alpha^\\beta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta,r\\sin\\theta)\\,r\\,dr\\,d\\theta$. El factor extra $r$ es el jacobiano de la transformación polar." },
              { type:"def", label:"Integral triple en coordenadas esféricas",
                tex:"$(x,y,z)=(\\rho\\sin\\phi\\cos\\theta,\\rho\\sin\\phi\\sin\\theta,\\rho\\cos\\phi)$. $dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$." },
            ]
          },
        ]
      },
      {
        id: "cd4_b3",
        title: "Calculus",
        author: "Tom M. Apostol",
        edition: "Vol. II, 2ª ed. Wiley, 1969",
        chapters: [
          {
            num: 10, title: "Integrales múltiples",
            notes: [
              { type:"def", label:"Integral doble sobre rectángulo (Apostol)",
                tex:"$\\iint_R f\\,dA=\\lim_{\\|P\\|\\to0}\\sum_{i,j}f(x_{ij}^*,y_{ij}^*)\\Delta x_i\\Delta y_j$. Apostol desarrolla la teoría con rigor: establece la integrabilidad de funciones continuas y la equivalencia con integrales iteradas (Fubini) mediante las sumas de Darboux superior e inferior." },
              { type:"teo", label:"Cambio de variables en la integral doble",
                tex:"Si $\\mathbf{g}:S^*\\to S$ es un difeomorfismo de clase $C^1$ con jacobiano $J_\\mathbf{g}=\\det D\\mathbf{g}\\neq0$, entonces $\\iint_S f(x,y)\\,dA=\\iint_{S^*}f(\\mathbf{g}(u,v))|J_\\mathbf{g}(u,v)|\\,dA^*$." },
            ]
          },
          {
            num: 12, title: "Formas diferenciales y teoremas de Stokes",
            notes: [
              { type:"def", label:"Formas diferenciales",
                tex:"Una $k$-forma diferencial en $\\mathbb{R}^n$ es una expresión $\\omega=\\sum_{i_1<\\cdots<i_k}f_{i_1\\cdots i_k}\\,dx_{i_1}\\wedge\\cdots\\wedge dx_{i_k}$. La derivada exterior: $d(f\\,dx_i)=df\\wedge dx_i=\\sum_j(\\partial f/\\partial x_j)dx_j\\wedge dx_i$." },
              { type:"teo", label:"Teorema de Stokes general (Apostol)",
                tex:"$\\int_{\\partial\\Omega}\\omega=\\int_\\Omega d\\omega$ unifica Green, Gauss y Stokes clásicos. Para una $(n-1)$-forma $\\omega$ en un dominio $n$-dimensional $\\Omega$ con frontera $\\partial\\Omega$ suave orientada inducidamente." },
            ]
          },
        ]
      },
      {
        id: "cd4_b4",
        title: "Differential and Integral Calculus",
        author: "Richard Courant",
        edition: "Vol. II, 2ª ed. Wiley-Interscience, 1936",
        chapters: [
          {
            num: 4, title: "Integrales múltiples",
            notes: [
              { type:"def", label:"Integral como límite de sumas (Vol. II)",
                tex:"$\\iiint_V f\\,dV=\\lim\\sum f(\\xi_{ijk})\\Delta x_i\\Delta y_j\\Delta z_k$. Courant hace hincapié en la interpretación física: el volumen, la masa $\\int\\rho\\,dV$, el centro de masa y los momentos de inercia." },
              { type:"teo", label:"Fórmulas integrales de la teoría vectorial",
                tex:"Courant unifica Green ($\\iint_D(Q_x-P_y)dA=\\oint_C P\\,dx+Q\\,dy$), Gauss ($\\oiint_{\\partial V}\\mathbf{F}\\cdot\\hat{n}\\,dS=\\iiint_V\\nabla\\cdot\\mathbf{F}\\,dV$) y Stokes ($\\iint_S(\\nabla\\times\\mathbf{F})\\cdot\\hat{n}\\,dS=\\oint_{\\partial S}\\mathbf{F}\\cdot d\\mathbf{r}$) como casos de un único principio." },
            ]
          },
        ]
      },
      {
        id: "cd4_b5",
        title: "Introduction to Calculus and Analysis",
        author: "Courant & John",
        edition: "Vol. II, Springer, 1989",
        chapters: [
          {
            num: 5, title: "Integración en el espacio",
            notes: [
              { type:"teo", label:"Teorema de la divergencia (Courant-John)",
                tex:"Para un campo $\\mathbf{F}=(P,Q,R)$ de clase $C^1$ en un dominio sólido acotado $V$ con frontera $\\partial V$ suave: $\\displaystyle\\oiint_{\\partial V}(P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\,dS=\\iiint_V\\left(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\right)dV$." },
            ]
          },
        ]
      },
      {
        id: "cd4_b6",
        title: "Calculus of Several Variables",
        author: "Serge Lang",
        edition: "3ª ed. Springer, 1987",
        chapters: [
          {
            num: 6, title: "Integrales múltiples",
            notes: [
              { type:"def", label:"Integración iterada (Lang)",
                tex:"Lang presenta la integral múltiple partiendo directamente de integrales iteradas, usando el teorema de Fubini como definición operacional y reservando la teoría abstracta de medida para cursos posteriores." },
              { type:"teo", label:"Teoremas integrales (Lang)",
                tex:"Lang cubre Green, Stokes y Gauss con especial atención a las hipótesis geométricas y la orientación. Introduce formas diferenciales brevemente para unificar los tres teoremas bajo $\\int_{\\partial M}\\omega=\\int_M d\\omega$." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 2, title: "Funciones analíticas",
            notes: [
              { type:"def", label:"Derivada compleja",
                tex:"$f'(z_0)=\\lim_{z\\to z_0}\\frac{f(z)-f(z_0)}{z-z_0}$. A diferencia de la derivada real, el límite debe ser independiente de la dirección de aproximación." },
              { type:"teo", label:"Ecuaciones de Cauchy-Riemann",
                tex:"Si $f=u+iv$ es diferenciable en $z_0=x_0+iy_0$, entonces $\\frac{\\partial u}{\\partial x}=\\frac{\\partial v}{\\partial y}$ y $\\frac{\\partial u}{\\partial y}=-\\frac{\\partial v}{\\partial x}$ en $(x_0,y_0)$. Recíprocamente, si las parciales son continuas y satisfacen CR, $f$ es analítica." },
              { type:"def", label:"Función armónica",
                tex:"$u:\\Omega\\to\\mathbb{R}$ es armónica si $\\Delta u=\\frac{\\partial^2 u}{\\partial x^2}+\\frac{\\partial^2 u}{\\partial y^2}=0$. Las partes real e imaginaria de una función analítica son armónicas y se llaman conjugadas armónicas." },
            ]
          },
          {
            num: 4, title: "Integración compleja",
            notes: [
              { type:"teo", label:"Teorema de Cauchy",
                tex:"Si $f$ es analítica en un dominio simplemente conexo $D$ y $\\gamma$ es cualquier curva cerrada en $D$, entonces $\\displaystyle\\oint_\\gamma f(z)\\,dz=0$." },
              { type:"teo", label:"Fórmula integral de Cauchy",
                tex:"Si $f$ es analítica en $\\bar{D}$ y $a\\in D$, $\\displaystyle f(a)=\\frac{1}{2\\pi i}\\oint_{\\partial D}\\frac{f(z)}{z-a}\\,dz$. Más generalmente, $f^{(n)}(a)=\\frac{n!}{2\\pi i}\\oint_{\\partial D}\\frac{f(z)}{(z-a)^{n+1}}\\,dz$." },
              { type:"teo", label:"Teorema de Liouville",
                tex:"Toda función entera acotada es constante. Consecuencia: el Teorema Fundamental del Álgebra (todo polinomio no constante con coeficientes complejos tiene al menos una raíz en $\\mathbb{C}$)." },
            ]
          },
          {
            num: 5, title: "Series de Laurent y residuos",
            notes: [
              { type:"def", label:"Serie de Laurent",
                tex:"En la corona $r<|z-a|<R$, $f(z)=\\displaystyle\\sum_{n=-\\infty}^{+\\infty}c_n(z-a)^n$ donde $c_n=\\frac{1}{2\\pi i}\\oint_{\\gamma}\\frac{f(z)}{(z-a)^{n+1}}\\,dz$." },
              { type:"def", label:"Clasificación de singularidades",
                tex:"$a$ es singularidad aislada de $f$. Si la parte principal es nula: singularidad evitable. Si la parte principal es finita (polo de orden $m$). Si la parte principal es infinita: singularidad esencial." },
              { type:"teo", label:"Teorema de los residuos",
                tex:"Si $f$ es meromorfa en $D$ salvo en $a_1,\\ldots,a_n$ y $\\gamma$ es una curva cerrada que encierra a todas con índice $1$, entonces $\\displaystyle\\oint_\\gamma f\\,dz=2\\pi i\\sum_{k=1}^n\\operatorname{Res}(f,a_k)$." },
            ]
          },
        ]
      },
      {
        id: "vc1_b2",
        title: "Complex Variables and Applications",
        author: "Churchill & Brown",
        edition: "9ª ed. McGraw-Hill, 2014",
        chapters: [
          {
            num: 4, title: "Integrales",
            notes: [
              { type:"def", label:"Integral de línea compleja",
                tex:"$\\displaystyle\\int_C f(z)\\,dz=\\int_a^b f(z(t))z'(t)\\,dt$ donde $z:[a,b]\\to\\mathbb{C}$ parametriza $C$. Satisface $\\left|\\int_C f\\,dz\\right|\\leq ML$, con $M=\\max_C|f|$ y $L$ la longitud de $C$." },
              { type:"def", label:"Residuo",
                tex:"$\\operatorname{Res}(f,a)=c_{-1}$ en la serie de Laurent de $f$ alrededor de $a$. Para un polo simple: $\\operatorname{Res}(f,a)=\\lim_{z\\to a}(z-a)f(z)$. Para polo de orden $m$: $\\operatorname{Res}(f,a)=\\frac{1}{(m-1)!}\\lim_{z\\to a}\\frac{d^{m-1}}{dz^{m-1}}[(z-a)^m f(z)]$." },
            ]
          },
        ]
      },
      {
        id: "vc1_b3",
        title: "Variable Compleja",
        author: "Antonio Lascurain Orive",
        edition: "Las Prensas de Ciencias, UNAM, 2003",
        chapters: [
          {
            num: 2, title: "Funciones analíticas",
            notes: [
              { type:"def", label:"Función analítica (Lascurain)",
                tex:"$f$ es analítica en un abierto $U$ si es complejo-diferenciable en todo punto de $U$. Lascurain destaca que analítica implica infinitamente diferenciable y representable por series de potencias, a diferencia del caso real donde $C^\\infty$ no implica analiticidad." },
              { type:"teo", label:"Principio del módulo máximo",
                tex:"Si $f$ es analítica y no constante en un dominio $D$, entonces $|f|$ no alcanza su máximo en ningún punto interior de $D$. En particular, $\\max_{\\bar{D}}|f|=\\max_{\\partial D}|f|$." },
            ]
          },
          {
            num: 4, title: "Series de Laurent y residuos",
            notes: [
              { type:"def", label:"Singularidades esenciales (Lascurain)",
                tex:"Por el teorema de Casorati-Weierstrass: si $a$ es singularidad esencial de $f$, entonces para todo $w\\in\\mathbb{C}$ y todo $\\varepsilon,\\delta>0$, existe $z$ con $0<|z-a|<\\delta$ y $|f(z)-w|<\\varepsilon$. Es decir, $f$ se acerca arbitrariamente a cualquier valor complejo cerca de $a$." },
            ]
          },
        ]
      },
      {
        id: "vc1_b4",
        title: "Basic Complex Analysis",
        author: "Marsden & Hoffman",
        edition: "3ª ed. Freeman, 1999",
        chapters: [
          {
            num: 2, title: "Diferenciación y funciones analíticas",
            notes: [
              { type:"def", label:"Mapeos conformes",
                tex:"Una función analítica $f$ con $f'(z_0)\\neq0$ es un $\\textit{mapeo conforme}$ en $z_0$: preserva ángulos y orientación. Marsden y Hoffman estudian $w=e^z$, $w=z^n$, $w=1/z$ (inversión), $w=(z-i)/(z+i)$ (disco de Poincaré) como ejemplos paradigmáticos." },
            ]
          },
          {
            num: 5, title: "Aplicaciones de la teoría de residuos",
            notes: [
              { type:"def", label:"Cálculo de integrales reales (Marsden-Hoffman)",
                tex:"Tipos estándar evaluables por residuos: (i) $\\int_0^{2\\pi}R(\\cos\\theta,\\sin\\theta)\\,d\\theta$; (ii) $\\int_{-\\infty}^{+\\infty}f(x)\\,dx$ con $f$ meromorfa; (iii) $\\int_{-\\infty}^{+\\infty}f(x)e^{iax}\\,dx$ (lema de Jordan). En cada caso se escoge el semiciclo adecuado en el plano complejo." },
              { type:"teo", label:"Teorema del argumento",
                tex:"Si $f$ es meromorfa en $\\bar{D}$ sin ceros ni polos en $\\partial D$, entonces $\\frac{1}{2\\pi i}\\oint_{\\partial D}\\frac{f'(z)}{f(z)}\\,dz=N-P$, donde $N$ es el número de ceros y $P$ el de polos de $f$ en $D$ (contados con multiplicidad)." },
            ]
          },
        ]
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
        chapters: [
          {
            num: 11, title: "La integral de Lebesgue",
            notes: [
              { type:"def", label:"Función medible",
                tex:"$f:\\mathbb{R}^n\\to\\mathbb{R}$ es medible si $\\{x:f(x)>a\\}$ es medible para todo $a\\in\\mathbb{R}$. Las funciones continuas y monótonas son medibles." },
              { type:"def", label:"Integral de Lebesgue",
                tex:"Para $f\\geq0$ medible: $\\displaystyle\\int f\\,d\\mu=\\sup\\left\\{\\int s\\,d\\mu : 0\\leq s\\leq f,\\,s\\text{ simple}\\right\\}$. Para $f$ general: $\\int f=\\int f^+-\\int f^-$ donde $f^+=\\max(f,0)$, $f^-=\\max(-f,0)$." },
              { type:"teo", label:"Teorema de convergencia dominada (Lebesgue)",
                tex:"Si $f_n\\to f$ puntualmente y existe $g\\geq0$ integrable con $|f_n|\\leq g$ para todo $n$, entonces $\\displaystyle\\lim_{n\\to\\infty}\\int f_n\\,d\\mu=\\int f\\,d\\mu$." },
            ]
          },
        ]
      },
      {
        id: "an2_b2",
        title: "Measure and Integral",
        author: "Wheeden & Zygmund",
        edition: "2ª ed. CRC Press, 2015",
        chapters: [
          {
            num: 3, title: "Medida de Lebesgue en $\\mathbb{R}^n$",
            notes: [
              { type:"def", label:"Medida exterior de Lebesgue",
                tex:"$m^*(E)=\\inf\\left\\{\\sum_k|I_k|:E\\subset\\bigcup_k I_k,\\,I_k\\text{ intervalos abiertos}\\right\\}$. Un conjunto $E$ es medible Lebesgue si para todo $A\\subset\\mathbb{R}^n$: $m^*(A)=m^*(A\\cap E)+m^*(A\\cap E^c)$." },
              { type:"teo", label:"Teorema de Fubini-Tonelli",
                tex:"Si $f(x,y)\\geq0$ es medible en $\\mathbb{R}^{m+n}$, o si $f$ es integrable en $\\mathbb{R}^{m+n}$, entonces $\\displaystyle\\int_{\\mathbb{R}^{m+n}}f=\\int_{\\mathbb{R}^m}\\left(\\int_{\\mathbb{R}^n}f(x,y)\\,dy\\right)dx=\\int_{\\mathbb{R}^n}\\left(\\int_{\\mathbb{R}^m}f(x,y)\\,dx\\right)dy$." },
              { type:"teo", label:"Desigualdad de Hölder",
                tex:"Si $\\frac{1}{p}+\\frac{1}{q}=1$ con $p,q>1$, entonces $\\displaystyle\\int|fg|\\,d\\mu\\leq\\left(\\int|f|^p\\right)^{1/p}\\left(\\int|g|^q\\right)^{1/q}$. Para $p=q=2$: desigualdad de Cauchy-Schwarz." },
            ]
          },
          {
            num: 6, title: "El espacio $L^2$ y series de Fourier",
            notes: [
              { type:"def", label:"Espacio $L^2(E)$",
                tex:"$L^2(E)=\\{f\\text{ medible}:\\int_E|f|^2\\,d\\mu<\\infty\\}$ con producto interior $\\langle f,g\\rangle=\\int_E f\\bar{g}\\,d\\mu$. Es un espacio de Hilbert separable." },
              { type:"teo", label:"Convergencia en $L^2$ de series de Fourier",
                tex:"Si $f\\in L^2([-\\pi,\\pi])$ y $\\hat{f}(n)=\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi f(t)e^{-int}\\,dt$, entonces $\\displaystyle\\sum_{n=-\\infty}^\\infty|\\hat{f}(n)|^2=\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi|f(t)|^2\\,dt$ (identidad de Parseval) y $f=\\sum_{n}\\hat{f}(n)e^{int}$ en norma $L^2$." },
            ]
          },
        ]
      },
      {
        id: "an2_b3",
        title: "Mathematical Analysis",
        author: "Tom M. Apostol",
        edition: "2ª ed. Addison-Wesley, 1974",
        chapters: [
          {
            num: 10, title: "La integral de Lebesgue",
            notes: [
              { type:"def", label:"Función medible (Apostol)",
                tex:"$f:E\\to\\mathbb{R}$ es $\\textit{medible}$ si $f^{-1}((a,+\\infty))=\\{x\\in E:f(x)>a\\}$ es medible para todo $a\\in\\mathbb{R}$. Las funciones continuas y monótonas son medibles; el límite puntual de funciones medibles es medible." },
              { type:"teo", label:"Convergencia monótona (Apostol)",
                tex:"Si $0\\leq f_1\\leq f_2\\leq\\cdots$ son medibles y $f_n\\nearrow f$ puntualmente, entonces $\\lim_{n\\to\\infty}\\int f_n\\,dm=\\int f\\,dm$ (incluso si $\\int f=+\\infty$). Este resultado es la base de los demás teoremas de convergencia." },
            ]
          },
        ]
      },
      {
        id: "an2_b4",
        title: "Introduction to Real Analysis",
        author: "Bartle & Sherbert",
        edition: "4ª ed. Wiley, 2011",
        chapters: [
          {
            num: 10, title: "La integral de Lebesgue",
            notes: [
              { type:"def", label:"Medida de Lebesgue (Bartle-Sherbert)",
                tex:"Bartle y Sherbert introducen la medida de Lebesgue en $\\mathbb{R}$ partiendo de la longitud de intervalos y construyendo la medida exterior, luego la $\\sigma$-álgebra de conjuntos medibles. Destacan que la clase de funciones Lebesgue integrables es estrictamente mayor que la de Riemann integrables." },
              { type:"teo", label:"Convergencia dominada (Bartle-Sherbert)",
                tex:"Si $f_n\\to f$ puntualmente c.t.p., $|f_n(x)|\\leq g(x)$ c.t.p. con $g$ Lebesgue integrable, entonces $f$ es integrable y $\\lim_n\\int f_n=\\int f$. El requisito $|f_n|\\leq g$ (dominación) es esencial: sin él el teorema falla." },
            ]
          },
        ]
      },
      {
        id: "an2_b5",
        title: "Postmodern Analysis",
        author: "Jürgen Jost",
        edition: "3ª ed. Springer, 2005",
        chapters: [
          {
            num: 3, title: "La integral de Lebesgue y espacios $L^p$",
            notes: [
              { type:"teo", label:"Completud de $L^p$ (Jost)",
                tex:"Para $1\\leq p<\\infty$, el espacio $L^p(E)$ con norma $\\|f\\|_p=(\\int_E|f|^p)^{1/p}$ es un espacio de Banach (Riesz-Fischer). La prueba usa el criterio de series absolutamente convergentes: si $\\sum\\|f_n\\|_p<\\infty$, entonces $\\sum f_n$ converge en $L^p$." },
              { type:"def", label:"Dualidad de espacios $L^p$",
                tex:"Para $1<p<\\infty$ con $1/p+1/q=1$: el dual topológico $(L^p)^*\\cong L^q$ mediante el isomorfismo isométrico $g\\mapsto(f\\mapsto\\int fg)$. El caso $p=2$: $L^2$ es su propio dual (espacio de Hilbert). El caso $p=1$: $(L^1)^*=L^\\infty$." },
            ]
          },
        ]
      },
      {
        id: "an2_b6",
        title: "Elementos de la Teoría de Funciones y del Análisis Funcional",
        author: "Kolmogorov & Fomin",
        edition: "Mir, 1975",
        chapters: [
          {
            num: 4, title: "La integral de Lebesgue",
            notes: [
              { type:"def", label:"Integración (Kolmogorov-Fomin)",
                tex:"Kolmogorov y Fomin definen la integral de Lebesgue mediante funciones escalonadas (escalariforme) y paso al límite. Destacan la equivalencia con la definición por sumas de Darboux y la superioridad frente a Riemann: la clase de funciones integrables es cerrada bajo límites puntales dominados." },
              { type:"teo", label:"Espacios funcionales (Kolmogorov-Fomin)",
                tex:"El libro introduce $L^1$, $L^2$ y $L^p$ como casos particulares de espacios normados completos. Para $L^2$: el teorema de Riesz-Fischer garantiza la existencia de límites en norma, y la base de Fourier $\\{e^{int}/\\sqrt{2\\pi}\\}$ es ortonormal completa en $L^2([-\\pi,\\pi])$." },
            ]
          },
        ]
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
