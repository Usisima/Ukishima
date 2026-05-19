/* ═══════════════════════════════════════════════
   libros-data.js  —  Bibliografía UNAM FC · Matemáticas
   ═══════════════════════════════════════════════ */

/* ──────────────────────────────────────────────
   PDF: bookId → { title, driveId }
   driveId = ID del archivo en Google Drive.
   Sustituir con los IDs reales de tus archivos.
   ────────────────────────────────────────────── */
const PDF = {
  as1_b1: { title: "Álgebra Superior — Hall & Knight", driveId: "" },
  as1_b2: { title: "Elementos de Lógica — Ebbinghaus", driveId: "" },
  cd1_b1: { title: "Cálculo: Una Variable — Stewart", driveId: "" },
  cd1_b2: { title: "Análisis Matemático — Apostol", driveId: "" },
  ga1_b1: { title: "Geometría Analítica — Lehmann", driveId: "" },
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
        author: "Hall & Knight",
        edition: "Reimp. 2008",
        chapters: [
          {
            num: 1, title: "Lógica Proposicional",
            notes: [
              { type:"def", label:"Proposición",
                tex:"Una $\\textit{proposición}$ es un enunciado declarativo que es verdadero o falso, pero no ambos." },
              { type:"def", label:"Conectivos lógicos",
                tex:"Los conectivos fundamentales son: negación $\\lnot p$, conjunción $p\\land q$, disyunción $p\\lor q$, condicional $p\\to q$ y bicondicional $p\\leftrightarrow q$." },
              { type:"teo", label:"Leyes de De Morgan",
                tex:"Para proposiciones $p$ y $q$:\\[\\lnot(p\\land q)\\equiv\\lnot p\\lor\\lnot q\\qquad\\lnot(p\\lor q)\\equiv\\lnot p\\land\\lnot q\\]" },
              { type:"def", label:"Tautología",
                tex:"Una fórmula $\\varphi$ es una $\\textit{tautología}$ si su tabla de verdad es verdadera para toda asignación de valores." },
            ]
          },
          {
            num: 2, title: "Teoría de Conjuntos",
            notes: [
              { type:"def", label:"Conjunto",
                tex:"Un $\\textit{conjunto}$ es una colección bien definida de objetos llamados $\\textit{elementos}$. Se escribe $a\\in A$ si $a$ pertenece al conjunto $A$." },
              { type:"teo", label:"Álgebra de conjuntos",
                tex:"Para cualesquiera conjuntos $A,B,C$:\\begin{align*}A\\cup(B\\cap C)&=(A\\cup B)\\cap(A\\cup C)\\\\A\\cap(B\\cup C)&=(A\\cap B)\\cup(A\\cap C)\\end{align*}" },
              { type:"teo", label:"Principio de inclusión-exclusión",
                tex:"Para conjuntos finitos $A$ y $B$:\\[|A\\cup B|=|A|+|B|-|A\\cap B|\\]En general: $|A_1\\cup\\cdots\\cup A_n|=\\displaystyle\\sum_i|A_i|-\\sum_{i<j}|A_i\\cap A_j|+\\cdots$" },
              { type:"def", label:"Producto cartesiano",
                tex:"$A\\times B=\\{(a,b)\\mid a\\in A,\\,b\\in B\\}$. Se cumple $|A\\times B|=|A|\\cdot|B|$ para conjuntos finitos." },
            ]
          },
          {
            num: 3, title: "Relaciones y Funciones",
            notes: [
              { type:"def", label:"Relación de equivalencia",
                tex:"Una relación $\\sim$ en $A$ es de equivalencia si es reflexiva ($a\\sim a$), simétrica ($a\\sim b\\Rightarrow b\\sim a$) y transitiva." },
              { type:"teo", label:"Partición por clases de equivalencia",
                tex:"Toda relación de equivalencia $\\sim$ en $A$ determina una partición $A/\\!\\sim$ de $A$ en clases disjuntas $[a]=\\{x\\in A\\mid x\\sim a\\}$." },
              { type:"def", label:"Función inyectiva, sobreyectiva, biyectiva",
                tex:"$f:A\\to B$ es $\\textit{inyectiva}$ si $f(a_1)=f(a_2)\\Rightarrow a_1=a_2$; $\\textit{sobreyectiva}$ si $\\forall b\\in B,\\,\\exists a:f(a)=b$; $\\textit{biyectiva}$ si ambas." },
            ]
          },
        ]
      },
      {
        id: "as1_b2",
        title: "Mathematical Logic",
        author: "H.-D. Ebbinghaus",
        edition: "2ª ed. Springer",
        chapters: [
          {
            num: 1, title: "Sintaxis del Cálculo Proposicional",
            notes: [
              { type:"def", label:"Fórmula",
                tex:"El conjunto $\\text{FOR}$ de fórmulas proposicionales se define inductivamente: variables $p_0,p_1,\\ldots\\in\\text{FOR}$; si $\\varphi,\\psi\\in\\text{FOR}$ entonces $\\lnot\\varphi,(\\varphi\\land\\psi)\\in\\text{FOR}$." },
              { type:"teo", label:"Unicidad de lectura",
                tex:"Cada fórmula $\\varphi$ tiene exactamente una lectura, es decir, su árbol de construcción es único." },
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
        title: "Cálculo: Una Variable",
        author: "James Stewart",
        edition: "8ª ed. Cengage",
        chapters: [
          {
            num: 2, title: "Límites y Continuidad",
            notes: [
              { type:"def", label:"Límite (ε-δ)",
                tex:"$\\displaystyle\\lim_{x\\to a}f(x)=L$ si $\\forall\\varepsilon>0,\\,\\exists\\delta>0$ tal que $0<|x-a|<\\delta\\Rightarrow|f(x)-L|<\\varepsilon$." },
              { type:"teo", label:"Teorema del emparedado (Sandwich)",
                tex:"Si $g(x)\\le f(x)\\le h(x)$ cerca de $a$ y $\\displaystyle\\lim_{x\\to a}g(x)=\\lim_{x\\to a}h(x)=L$, entonces $\\displaystyle\\lim_{x\\to a}f(x)=L$." },
              { type:"teo", label:"Álgebra de límites",
                tex:"Si $\\lim_{x\\to a}f=L$ y $\\lim_{x\\to a}g=M$, entonces:\\[\\lim_{x\\to a}(f\\pm g)=L\\pm M,\\quad\\lim_{x\\to a}fg=LM,\\quad\\lim_{x\\to a}\\tfrac{f}{g}=\\tfrac{L}{M}\\;(M\\neq0)\\]" },
              { type:"def", label:"Continuidad",
                tex:"$f$ es continua en $a$ si $\\displaystyle\\lim_{x\\to a}f(x)=f(a)$. Equivalentemente, $\\forall\\varepsilon>0,\\,\\exists\\delta>0:|x-a|<\\delta\\Rightarrow|f(x)-f(a)|<\\varepsilon$." },
              { type:"teo", label:"Teorema del valor intermedio",
                tex:"Si $f$ es continua en $[a,b]$ y $N$ está entre $f(a)$ y $f(b)$, existe $c\\in(a,b)$ con $f(c)=N$." },
            ]
          },
          {
            num: 3, title: "Derivadas",
            notes: [
              { type:"def", label:"Derivada",
                tex:"$f'(a)=\\displaystyle\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}$, si el límite existe. Geométricamente es la pendiente de la recta tangente en $x=a$." },
              { type:"teo", label:"Regla de la cadena",
                tex:"Si $g$ es diferenciable en $a$ y $f$ en $g(a)$, entonces $(f\\circ g)'(a)=f'(g(a))\\cdot g'(a)$." },
              { type:"teo", label:"Derivación implícita — método",
                tex:"Para $F(x,y)=0$, diferenciando ambos lados respecto a $x$ y despejando $y'$: $\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$." },
              { type:"teo", label:"Regla de L'Hôpital",
                tex:"Si $\\displaystyle\\lim_{x\\to a}f(x)=\\lim_{x\\to a}g(x)=0$ (o $\\pm\\infty$) y $g'(x)\\ne0$ cerca de $a$, entonces $\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{g(x)}=\\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$." },
            ]
          },
          {
            num: 5, title: "Integral Definida",
            notes: [
              { type:"def", label:"Suma de Riemann",
                tex:"$\\displaystyle S_n=\\sum_{i=1}^n f(x_i^*)\\,\\Delta x$, donde $\\Delta x=\\frac{b-a}{n}$ y $x_i^*\\in[x_{i-1},x_i]$." },
              { type:"teo", label:"Teorema Fundamental del Cálculo (I)",
                tex:"Si $f$ es continua en $[a,b]$ y $g(x)=\\displaystyle\\int_a^x f(t)\\,dt$, entonces $g'(x)=f(x)$." },
              { type:"teo", label:"Teorema Fundamental del Cálculo (II)",
                tex:"$\\displaystyle\\int_a^b f(x)\\,dx = F(b)-F(a)$ donde $F$ es cualquier antiderivada de $f$." },
            ]
          },
        ]
      },
      {
        id: "cd1_b2",
        title: "Calculus, Vol. 1",
        author: "Tom M. Apostol",
        edition: "2ª ed. Wiley",
        chapters: [
          {
            num: 1, title: "Los Números Reales",
            notes: [
              { type:"teo", label:"Completitud de ℝ",
                tex:"Todo subconjunto no vacío de $\\mathbb{R}$ acotado superiormente tiene supremo en $\\mathbb{R}$. Esta propiedad caracteriza a $\\mathbb{R}$ entre los campos ordenados." },
              { type:"def", label:"Supremo e ínfimo",
                tex:"$s=\\sup A$ si $s$ es cota superior de $A$ y $\\forall\\varepsilon>0,\\,\\exists a\\in A:a>s-\\varepsilon$. Análogamente $i=\\inf A$." },
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
        title: "Geometría Analítica",
        author: "Charles H. Lehmann",
        edition: "Limusa, reimp. 2010",
        chapters: [
          {
            num: 2, title: "La Línea Recta",
            notes: [
              { type:"def", label:"Ecuación general de la recta",
                tex:"$Ax+By+C=0$ con $A,B$ no ambos nulos. La pendiente es $m=-A/B$ y el intercepto en $y$ es $-C/B$." },
              { type:"teo", label:"Distancia de un punto a una recta",
                tex:"La distancia del punto $(x_0,y_0)$ a la recta $Ax+By+C=0$ es $d=\\dfrac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$." },
            ]
          },
          {
            num: 3, title: "Cónicas",
            notes: [
              { type:"def", label:"Parábola",
                tex:"Lugar geométrico de puntos equidistantes de un foco $F$ y una directriz $\\ell$. Forma canónica: $y^2=4px$ (eje horizontal) o $x^2=4py$ (eje vertical)." },
              { type:"def", label:"Elipse",
                tex:"$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$ con $a>b>0$. Focos en $(\\pm c,0)$ donde $c^2=a^2-b^2$. Excentricidad $e=c/a<1$." },
              { type:"def", label:"Hipérbola",
                tex:"$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$. Focos en $(\\pm c,0)$, $c^2=a^2+b^2$, asíntotas $y=\\pm(b/a)x$." },
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
