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
  al1_b1: { title: "Álgebra Lineal — Lay", driveId: "" },
  al1_b2: { title: "Álgebra Lineal — Grossman", driveId: "" },
  cd2_b1: { title: "Cálculo Multivariable — Stewart", driveId: "" },
  cd3_b1: { title: "Cálculo Vectorial — Marsden & Tromba", driveId: "" },
  ed_b1:  { title: "Ecuaciones Diferenciales — Simmons", driveId: "" },
  ed_b2:  { title: "EDO — Blanchard, Devaney & Hall", driveId: "" },
  top_b1: { title: "Topología — Munkres", driveId: "" },
  top_b2: { title: "Introducción a la Topología — Gamelin", driveId: "" },
  ana_b1: { title: "Principles of Mathematical Analysis — Rudin", driveId: "" },
  ana_b2: { title: "Análisis Real — Kolmogorov & Fomin", driveId: "" },
  prob_b1:{ title: "Probabilidad — Pitman", driveId: "" },
  prob_b2:{ title: "Introduction to Probability — Bertsekas", driveId: "" },
  alm_b1: { title: "Álgebra Abstracta — Herstein", driveId: "" },
  alm_b2: { title: "Álgebra Abstracta — Dummit & Foote", driveId: "" },
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
    ]
  },

  {
    subject: "Álgebra Lineal I",
    matId: "alg_lin_1",
    color: "linear-gradient(135deg,#0a1a0e,#133322)",
    books: [
      {
        id: "al1_b1",
        title: "Álgebra Lineal y sus Aplicaciones",
        author: "David C. Lay",
        edition: "5ª ed. Pearson",
        chapters: [
          {
            num: 1, title: "Ecuaciones Lineales",
            notes: [
              { type:"def", label:"Sistema lineal",
                tex:"Un sistema de $m$ ecuaciones con $n$ incógnitas: $a_{ij}x_j=b_i$. En forma matricial $A\\mathbf{x}=\\mathbf{b}$ con $A\\in\\mathbb{R}^{m\\times n}$." },
              { type:"teo", label:"Existencia y unicidad",
                tex:"El sistema $A\\mathbf{x}=\\mathbf{b}$ es consistente $\\Leftrightarrow$ $\\mathbf{b}\\in\\text{Col}(A)$. Si es consistente, la solución es única $\\Leftrightarrow$ $A\\mathbf{x}=\\mathbf{0}$ sólo tiene la solución trivial." },
              { type:"def", label:"Forma escalonada reducida",
                tex:"Una matriz está en RREF si: los pivotes son 1, cada pivote es el único no-cero en su columna, y las filas cero están al fondo." },
            ]
          },
          {
            num: 2, title: "Transformaciones Lineales",
            notes: [
              { type:"def", label:"Transformación lineal",
                tex:"$T:V\\to W$ es lineal si $T(\\mathbf{u}+\\mathbf{v})=T\\mathbf{u}+T\\mathbf{v}$ y $T(c\\mathbf{u})=cT\\mathbf{u}$ para todo $\\mathbf{u},\\mathbf{v}\\in V$, $c\\in\\mathbb{R}$." },
              { type:"teo", label:"Representación matricial",
                tex:"Toda transformación lineal $T:\\mathbb{R}^n\\to\\mathbb{R}^m$ tiene una única matriz $A\\in\\mathbb{R}^{m\\times n}$ tal que $T(\\mathbf{x})=A\\mathbf{x}$. Las columnas de $A$ son $T(\\mathbf{e}_i)$." },
              { type:"def", label:"Núcleo e imagen",
                tex:"$\\ker T=\\{\\mathbf{x}\\in V\\mid T\\mathbf{x}=\\mathbf{0}\\}$, $\\text{Im}\\,T=\\{T\\mathbf{x}\\mid\\mathbf{x}\\in V\\}$. Se tiene $\\dim\\ker T+\\dim\\text{Im}\\,T=\\dim V$ (Teorema de la dimensión)." },
            ]
          },
          {
            num: 5, title: "Valores y Vectores Propios",
            notes: [
              { type:"def", label:"Valor propio",
                tex:"$\\lambda$ es valor propio de $A$ si $A\\mathbf{v}=\\lambda\\mathbf{v}$ para algún $\\mathbf{v}\\neq\\mathbf{0}$. Se calcula resolviendo $\\det(A-\\lambda I)=0$." },
              { type:"teo", label:"Diagonalización",
                tex:"$A\\in\\mathbb{R}^{n\\times n}$ es diagonalizable $\\Leftrightarrow$ tiene $n$ vectores propios linealmente independientes. Entonces $A=PDP^{-1}$ con $D=\\mathrm{diag}(\\lambda_1,\\ldots,\\lambda_n)$." },
              { type:"teo", label:"Teorema espectral",
                tex:"Toda matriz simétrica $A=A^T$ es diagonalizable por una matriz ortogonal: $A=Q\\Lambda Q^T$ con $Q^TQ=I$." },
            ]
          },
        ]
      },
      {
        id: "al1_b2",
        title: "Álgebra Lineal",
        author: "Stanley I. Grossman",
        edition: "7ª ed. McGraw-Hill",
        chapters: [
          {
            num: 3, title: "El Determinante",
            notes: [
              { type:"def", label:"Determinante (cofactores)",
                tex:"$\\det A=\\displaystyle\\sum_{j=1}^n a_{1j}C_{1j}$ donde $C_{ij}=(-1)^{i+j}M_{ij}$ y $M_{ij}$ es el menor $(i,j)$." },
              { type:"teo", label:"Regla de Cramer",
                tex:"Si $\\det A\\neq0$, la solución única de $A\\mathbf{x}=\\mathbf{b}$ es $x_i=\\dfrac{\\det A_i}{\\det A}$, donde $A_i$ surge de reemplazar la columna $i$ de $A$ por $\\mathbf{b}$." },
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
        title: "Cálculo Multivariable",
        author: "James Stewart",
        edition: "8ª ed. Cengage",
        chapters: [
          {
            num: 11, title: "Sucesiones y Series",
            notes: [
              { type:"def", label:"Convergencia de series",
                tex:"La serie $\\displaystyle\\sum_{n=1}^\\infty a_n$ converge a $S$ si $\\displaystyle\\lim_{N\\to\\infty}S_N=S$ donde $S_N=\\sum_{n=1}^N a_n$." },
              { type:"teo", label:"Criterio de la razón",
                tex:"Si $\\displaystyle\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|=L$: la serie converge absolutamente si $L<1$, diverge si $L>1$, e indeterminado si $L=1$." },
              { type:"def", label:"Serie de potencias",
                tex:"$\\displaystyle\\sum_{n=0}^\\infty c_n(x-a)^n$. Converge en un intervalo $(a-R,a+R)$ donde $R=\\dfrac{1}{\\limsup|c_n|^{1/n}}$ es el radio de convergencia." },
              { type:"teo", label:"Serie de Taylor",
                tex:"Si $f$ es infinitamente diferenciable en $a$: $f(x)=\\displaystyle\\sum_{n=0}^\\infty\\frac{f^{(n)}(a)}{n!}(x-a)^n$. Con resto $R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$." },
            ]
          },
          {
            num: 14, title: "Derivadas Parciales",
            notes: [
              { type:"def", label:"Derivada parcial",
                tex:"$\\dfrac{\\partial f}{\\partial x}(a,b)=\\displaystyle\\lim_{h\\to0}\\frac{f(a+h,b)-f(a,b)}{h}$. Se interpreta como la tasa de cambio de $f$ fijando $y=b$." },
              { type:"teo", label:"Teorema de Clairaut",
                tex:"Si $f_{xy}$ y $f_{yx}$ son continuas en un abierto que contiene a $(a,b)$, entonces $f_{xy}(a,b)=f_{yx}(a,b)$." },
              { type:"teo", label:"Multiplicadores de Lagrange",
                tex:"Para extremizar $f(x,y)$ sujeto a $g(x,y)=k$: en los puntos extremales $\\nabla f=\\lambda\\nabla g$, es decir, $f_x=\\lambda g_x$ y $f_y=\\lambda g_y$." },
            ]
          },
        ]
      },
    ]
  },

  {
    subject: "Ecuaciones Diferenciales Ordinarias",
    matId: "ec_dif",
    color: "linear-gradient(135deg,#0d0a07,#2a1e0e)",
    books: [
      {
        id: "ed_b1",
        title: "Ecuaciones Diferenciales",
        author: "George F. Simmons",
        edition: "2ª ed. McGraw-Hill",
        chapters: [
          {
            num: 1, title: "Ecuaciones de Primer Orden",
            notes: [
              { type:"def", label:"EDO de orden $n$",
                tex:"Una ecuación de la forma $F(x,y,y',\\ldots,y^{(n)})=0$. Es de orden $n$ si aparece $y^{(n)}$ pero no $y^{(n+1)}$." },
              { type:"teo", label:"Existencia y unicidad (Picard-Lindelöf)",
                tex:"Si $f(x,y)$ es continua y Lipschitz en $y$ en un rectángulo $R$ alrededor de $(x_0,y_0)$, el PVI $y'=f(x,y),\\,y(x_0)=y_0$ tiene solución única en algún intervalo alrededor de $x_0$." },
              { type:"def", label:"Ecuación separable",
                tex:"$\\frac{dy}{dx}=g(x)h(y)$. Se resuelve separando: $\\displaystyle\\int\\frac{dy}{h(y)}=\\int g(x)\\,dx$." },
              { type:"teo", label:"Factor integrante",
                tex:"La ecuación $M\\,dx+N\\,dy=0$ es exacta si $\\partial M/\\partial y=\\partial N/\\partial x$. Si no, se busca $\\mu(x)$ o $\\mu(y)$ tal que $\\mu M\\,dx+\\mu N\\,dy=0$ sea exacta." },
            ]
          },
          {
            num: 3, title: "EDO Lineales de Orden Superior",
            notes: [
              { type:"teo", label:"Principio de superposición",
                tex:"Si $y_1,\\ldots,y_n$ son soluciones de $L[y]=0$ (lineal homogénea), entonces $c_1y_1+\\cdots+c_ny_n$ también lo es." },
              { type:"def", label:"Wronskiano",
                tex:"$W(y_1,\\ldots,y_n)(x)=\\det\\begin{pmatrix}y_1&\\cdots&y_n\\\\\\vdots&&\\vdots\\\\y_1^{(n-1)}&\\cdots&y_n^{(n-1)}\\end{pmatrix}$. $\\{y_i\\}$ son LI $\\Leftrightarrow$ $W\\not\\equiv0$." },
              { type:"teo", label:"Variación de parámetros",
                tex:"Dada la solución homogénea $y_h=c_1y_1+c_2y_2$, la solución particular de $L[y]=g$ es $y_p=y_1v_1+y_2v_2$ donde $v_i'$ se resuelve del sistema $\\begin{pmatrix}y_1&y_2\\\\y_1'&y_2'\\end{pmatrix}\\begin{pmatrix}v_1'\\\\v_2'\\end{pmatrix}=\\begin{pmatrix}0\\\\g\\end{pmatrix}$." },
            ]
          },
        ]
      },
      {
        id: "ed_b2",
        title: "Ecuaciones Diferenciales",
        author: "Blanchard, Devaney & Hall",
        edition: "4ª ed. Cengage",
        chapters: [
          {
            num: 2, title: "Sistemas de EDO",
            notes: [
              { type:"def", label:"Sistema autónomo",
                tex:"$\\mathbf{x}'=\\mathbf{f}(\\mathbf{x})$ (sin dependencia explícita en $t$). Los puntos de equilibrio satisfacen $\\mathbf{f}(\\mathbf{x}^*)=\\mathbf{0}$." },
              { type:"teo", label:"Clasificación de equilibrios lineales",
                tex:"Para $\\mathbf{x}'=A\\mathbf{x}$, el origen es: nodo estable/inestable si eigenvalores reales del mismo signo; silla si eigenvalores reales de signos opuestos; espiral si eigenvalores complejos ($\\text{Re}\\neq0$); centro si eigenvalores imaginarios puros." },
            ]
          },
        ]
      },
    ]
  },

  {
    subject: "Topología I",
    matId: "top_1",
    color: "linear-gradient(135deg,#07111a,#0d2233)",
    books: [
      {
        id: "top_b1",
        title: "Topology",
        author: "James R. Munkres",
        edition: "2ª ed. Prentice Hall",
        chapters: [
          {
            num: 2, title: "Espacios Topológicos y Funciones Continuas",
            notes: [
              { type:"def", label:"Topología",
                tex:"Una $\\textit{topología}$ en $X$ es una colección $\\mathcal{T}\\subset\\mathcal{P}(X)$ tal que: $\\emptyset,X\\in\\mathcal{T}$; uniones arbitrarias de elementos de $\\mathcal{T}$ están en $\\mathcal{T}$; intersecciones finitas también." },
              { type:"def", label:"Continuidad",
                tex:"$f:(X,\\mathcal{T}_X)\\to(Y,\\mathcal{T}_Y)$ es continua si $\\forall V\\in\\mathcal{T}_Y$, $f^{-1}(V)\\in\\mathcal{T}_X$." },
              { type:"teo", label:"Caracterización por sucesiones (espacios métricos)",
                tex:"En un espacio métrico, $f$ es continua en $x$ $\\Leftrightarrow$ para toda sucesión $x_n\\to x$, $f(x_n)\\to f(x)$." },
              { type:"def", label:"Homeomorfismo",
                tex:"$f:X\\to Y$ es un $\\textit{homeomorfismo}$ si es biyectiva, continua, y su inversa $f^{-1}$ es continua. $X\\cong Y$ si existe tal $f$." },
            ]
          },
          {
            num: 3, title: "Conexidad y Compacidad",
            notes: [
              { type:"def", label:"Espacio conexo",
                tex:"$X$ es $\\textit{conexo}$ si no puede escribirse como unión de dos abiertos disjuntos no vacíos. Equivalentemente, los únicos conjuntos abiertos y cerrados son $\\emptyset$ y $X$." },
              { type:"teo", label:"Imagen de conexo es conexa",
                tex:"Si $f:X\\to Y$ es continua y $X$ es conexo, entonces $f(X)$ es conexo." },
              { type:"def", label:"Compacidad",
                tex:"$X$ es $\\textit{compacto}$ si todo cubrimiento abierto tiene un subcubrimiento finito: si $X\\subset\\bigcup_{\\alpha}U_\\alpha$ ($U_\\alpha$ abiertos) entonces $X\\subset U_{\\alpha_1}\\cup\\cdots\\cup U_{\\alpha_n}$." },
              { type:"teo", label:"Heine-Borel",
                tex:"Un subconjunto de $\\mathbb{R}^n$ es compacto $\\Leftrightarrow$ es cerrado y acotado." },
              { type:"teo", label:"Imagen de compacto es compacta",
                tex:"Si $f:X\\to Y$ es continua y $X$ es compacto, entonces $f(X)$ es compacto. En particular, $f$ alcanza su máximo y mínimo en espacios métricos." },
            ]
          },
        ]
      },
      {
        id: "top_b2",
        title: "Introduction to Topology",
        author: "Gamelin & Greene",
        edition: "2ª ed. Dover",
        chapters: [
          {
            num: 1, title: "Espacios Métricos",
            notes: [
              { type:"def", label:"Espacio métrico",
                tex:"$(X,d)$ donde $d:X\\times X\\to[0,\\infty)$ satisface: $d(x,y)=0\\Leftrightarrow x=y$; $d(x,y)=d(y,x)$; $d(x,z)\\le d(x,y)+d(y,z)$ (desigualdad triangular)." },
              { type:"def", label:"Sucesión de Cauchy",
                tex:"$(x_n)$ es de Cauchy si $\\forall\\varepsilon>0,\\,\\exists N:\\forall m,n>N,\\,d(x_m,x_n)<\\varepsilon$. Un espacio donde toda sucesión de Cauchy converge se llama $\\textit{completo}$." },
              { type:"teo", label:"Completitud de ℝ^n",
                tex:"$\\mathbb{R}^n$ con la métrica euclidiana es completo. Más generalmente, todo espacio de Hilbert es completo." },
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
    ]
  },

  {
    subject: "Probabilidad I",
    matId: "prob_1",
    color: "linear-gradient(135deg,#0d1007,#1e2a0e)",
    books: [
      {
        id: "prob_b1",
        title: "Probability",
        author: "Jim Pitman",
        edition: "Springer, 1993",
        chapters: [
          {
            num: 1, title: "Introducción a la Probabilidad",
            notes: [
              { type:"def", label:"Espacio de probabilidad",
                tex:"Una terna $(\\Omega,\\mathcal{F},P)$ donde $\\Omega$ es el espacio muestral, $\\mathcal{F}$ es una $\\sigma$-álgebra de eventos, y $P:\\mathcal{F}\\to[0,1]$ satisface $P(\\Omega)=1$ y $\\sigma$-aditividad." },
              { type:"teo", label:"Probabilidad total",
                tex:"Si $\\{B_i\\}$ es una partición de $\\Omega$: $P(A)=\\displaystyle\\sum_i P(A\\mid B_i)P(B_i)$." },
              { type:"teo", label:"Teorema de Bayes",
                tex:"$P(B_i\\mid A)=\\dfrac{P(A\\mid B_i)P(B_i)}{\\displaystyle\\sum_j P(A\\mid B_j)P(B_j)}$" },
            ]
          },
          {
            num: 3, title: "Variables Aleatorias",
            notes: [
              { type:"def", label:"Variable aleatoria",
                tex:"Una función medible $X:\\Omega\\to\\mathbb{R}$, es decir, $\\{\\omega:X(\\omega)\\le x\\}\\in\\mathcal{F}$ para todo $x\\in\\mathbb{R}$." },
              { type:"def", label:"Esperanza",
                tex:"$E[X]=\\displaystyle\\int_\\Omega X\\,dP=\\begin{cases}\\sum_x x\\,P(X=x)&\\text{discreta}\\\\\\int_{-\\infty}^\\infty x\\,f_X(x)\\,dx&\\text{continua}\\end{cases}$" },
              { type:"teo", label:"Desigualdad de Chebyshev",
                tex:"$P(|X-\\mu|\\ge k\\sigma)\\le\\dfrac{1}{k^2}$, donde $\\mu=E[X]$ y $\\sigma^2=\\text{Var}(X)$." },
              { type:"teo", label:"Ley de los grandes números (débil)",
                tex:"Si $X_1,X_2,\\ldots$ son i.i.d. con media $\\mu$, entonces $\\bar{X}_n=\\frac{1}{n}\\sum_{i=1}^n X_i\\xrightarrow{P}\\mu$ cuando $n\\to\\infty$." },
            ]
          },
          {
            num: 5, title: "Distribuciones Notables",
            notes: [
              { type:"def", label:"Distribución Normal",
                tex:"$X\\sim N(\\mu,\\sigma^2)$: $f_X(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$. Tiene $E[X]=\\mu$, $\\text{Var}(X)=\\sigma^2$." },
              { type:"teo", label:"Teorema Central del Límite",
                tex:"Si $X_1,\\ldots,X_n$ son i.i.d. con media $\\mu$ y varianza $\\sigma^2<\\infty$, entonces $\\dfrac{\\bar{X}_n-\\mu}{\\sigma/\\sqrt{n}}\\xrightarrow{d}N(0,1)$." },
            ]
          },
        ]
      },
      {
        id: "prob_b2",
        title: "Introduction to Probability",
        author: "Bertsekas & Tsitsiklis",
        edition: "2ª ed. Athena Scientific",
        chapters: [
          {
            num: 4, title: "Cadenas de Markov",
            notes: [
              { type:"def", label:"Cadena de Markov",
                tex:"Proceso estocástico $\\{X_n\\}_{n\\ge0}$ con la propiedad de Markov: $P(X_{n+1}=j\\mid X_n=i,X_{n-1},\\ldots)=P(X_{n+1}=j\\mid X_n=i)=p_{ij}$." },
              { type:"def", label:"Estado recurrente y transitorio",
                tex:"El estado $i$ es $\\textit{recurrente}$ si $P(T_i<\\infty)=1$ (el proceso regresa a $i$ con certeza); es $\\textit{transitorio}$ si $P(T_i<\\infty)<1$." },
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
        title: "Abstract Algebra",
        author: "Dummit & Foote",
        edition: "3ª ed. Wiley",
        chapters: [
          {
            num: 13, title: "Extensiones de Cuerpos",
            notes: [
              { type:"def", label:"Extensión de cuerpos",
                tex:"$F\\subset K$ cuerpos; $[K:F]=\\dim_F K$ es el grado de la extensión. Si $[K:F]<\\infty$, $K/F$ es $\\textit{finita}$." },
              { type:"teo", label:"Torre de extensiones",
                tex:"Si $F\\subset K\\subset L$, entonces $[L:F]=[L:K][K:F]$." },
              { type:"def", label:"Cuerpo de descomposición",
                tex:"El cuerpo de descomposición de $f\\in F[x]$ sobre $F$ es la menor extensión de $F$ en que $f$ se factoriza completamente en lineales." },
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
