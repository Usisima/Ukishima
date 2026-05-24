// Auto-generado por parse_tex.py -- no editar manualmente.
// Para actualizar: python parse_tex.py --js assets/js/notas-data.js
// 4 entornos
const NOTAS_DATA      = {
  "calculo_1": [
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "1.1 · Supremo",
      "titulo": null,
      "contenido": "Sea \\(A\\) un conjunto de números reales, no vacío, acotado superiormente.\nUn número real \\(c\\) es llamado el \\textbf{supremo} de \\(A\\) si \\(c\\) es la\nmínima cota superior de \\(A\\). En este caso se escribe \\(c = \\sup A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "1.2 · Ínfimo",
      "titulo": null,
      "contenido": "Sea \\(A\\) un conjunto de números reales, no vacío, acotado inferiormente.\nUn número real \\(d\\) es llamado el \\textbf{ínfimo} de \\(A\\) si \\(d\\) es la\nmáxima cota inferior de \\(A\\). En este caso se escribe \\(d = \\inf A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "O6 · Axioma del Supremo",
      "titulo": null,
      "contenido": "Si \\(A\\) es un conjunto de números reales, no vacío y acotado superiormente,\nentonces existe el supremo de \\(A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "Postulado de los encajes de intervalos",
      "titulo": null,
      "contenido": "Si $I_1, I_2, I_3, \\dots$ forman una sucesión ``encaje'' de intervalos con puntos extremos racionales, existe un punto $x$ contenido en todo $I_n$.",
      "fuente": "Introducción al Cálculo y al Análisis Matemático"
    }
  ]
};
const NOTAS_BOOK_DATA = {
  "cd1_b3": [
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Número Racional",
      "titulo": null,
      "contenido": "Un número racional es todo número que puede expresarse como cociente de dos enteros \\(\\frac{p}{q}\\) con \\(q \\neq 0\\). Dos expresiones \\(\\frac{p}{q}\\) y \\(\\frac{r}{s}\\) representan el mismo racional si y sólo si \\(ps = qr\\). Se llama mínima expresión a \\(\\frac{p}{q}\\) cuando \\(p\\) y \\(q\\) no tienen factores comunes en común. Todo número entero es racional.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Operaciones en \\(\\mathbb{Q}\\)",
      "titulo": null,
      "contenido": "La suma y el producto de números racionales se definen respectivamente por: \\[\\frac{p}{q} + \\frac{r}{s} = \\frac{ps + qr}{qs}, \\qquad \\frac{p}{q} \\cdot \\frac{r}{s} = \\frac{pr}{qs}.\\] La división y la sustracción son casos particulares de estas operaciones.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Segmento Dirigido",
      "titulo": null,
      "contenido": "Dada una recta orientada, un segmento tiene orientación positiva si es recorrido en el sentido positivo de la recta, y orientación negativa en caso contrario. Un segmento con un sentido establecido se denomina segmento dirigido. Al punto inicial se le llama origen y al punto final, extremo. El segmento \\(\\overline{PQ}\\) determina dos segmentos dirigidos: \\(\\overrightarrow{PQ}\\) (de \\(P\\) a \\(Q\\)) y \\(\\overrightarrow{QP}\\) (de \\(Q\\) a \\(P\\)). La longitud del segmento \\(\\overline{PQ}\\) se denota simplemente \\(PQ\\). Dos segmentos dirigidos son iguales cuando tienen la misma longitud y dirección.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Teorema",
      "type": "teo",
      "numero": "Cap. 1 · \\(\\sqrt{2}\\) no es racional",
      "titulo": null,
      "contenido": "No existe ningún número racional cuyo cuadrado sea igual a \\(2\\). Es decir, la longitud de la hipotenusa del triángulo rectángulo isósceles de catetos \\(1\\) no es representable como cociente de dos enteros. Demostración: supóngase que \\(\\frac{p}{q}\\) está en mínima expresión y \\(\\left(\\frac{p}{q}\\right)^2 = 2\\). Entonces \\(p^2 = 2q^2\\), luego \\(p\\) es par, así \\(p = 2s\\) y \\(4s^2 = 2q^2\\), de donde \\(q\\) también es par: contradicción con la mínima expresión.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Proposición",
      "type": "teo",
      "numero": "Cap. 1 · Decimales y Racionales",
      "titulo": null,
      "contenido": "A todo número racional \\(\\frac{p}{q}\\) le corresponde una expresión decimal periódica (ya que al dividir sólo pueden aparecer a lo sumo \\(q\\) residuos distintos, por lo que alguno se repite). Recíprocamente, toda expresión decimal periódica puede escribirse en la forma \\(\\frac{p}{q}\\) (multiplicando por potencias adecuadas de \\(10\\) y despejando). Las expresiones decimales finitas corresponden a racionales con denominador producto de potencias de \\(2\\) y \\(5\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Número Irracional",
      "titulo": null,
      "contenido": "Las expresiones decimales no periódicas se denominan números irracionales. Ejemplos: \\(\\sqrt{2}\\), \\(\\sqrt{3}\\), \\(\\sqrt{5}\\), \\(\\pi\\), \\(e\\), etc. Hay una infinidad de puntos sobre la recta que no corresponden a ningún número racional; a cada uno de ellos se le asigna un irracional.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Recta Coordenada",
      "titulo": null,
      "contenido": "Los números reales son expresiones decimales periódicas (racionales) y no periódicas (irracionales). Mediante la correspondencia entre expresiones decimales y puntos de una recta orientada, el conjunto \\(\\mathbb{R}\\) se representa gráficamente por una recta denominada recta coordenada o recta real. El punto asociado a \\(0\\) se llama origen. Los símbolos \\(-\\infty\\) e \\(\\infty\\) no son números reales; sólo indican la orientación de la recta a partir del origen.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "A1–A5 · Propiedades de la Adición",
      "titulo": null,
      "contenido": "Para todo \\(a, b, c \\in \\mathbb{R}\\): \\[\\begin{array}{ll} \\mathbf{A1.} & a + b \\in \\mathbb{R} \\quad \\text{(Cerradura)} \\\\ \\mathbf{A2.} & a + b = b + a \\quad \\text{(Conmutatividad)} \\\\ \\mathbf{A3.} & (a+b)+c = a+(b+c) \\quad \\text{(Asociatividad)} \\\\ \\mathbf{A4.} & \\exists!\\; 0 : a + 0 = a \\quad \\text{(Neutro aditivo)} \\\\ \\mathbf{A5.} & \\forall\\, a\\; \\exists!\\, ({-a}) : a+({-a})=0 \\quad \\text{(Inverso aditivo)} \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "M1–M5 · Propiedades de la Multiplicación",
      "titulo": null,
      "contenido": "Para todo \\(a, b, c \\in \\mathbb{R}\\): \\[\\begin{array}{ll} \\mathbf{M1.} & ab \\in \\mathbb{R} \\quad \\text{(Cerradura)} \\\\ \\mathbf{M2.} & ab = ba \\quad \\text{(Conmutatividad)} \\\\ \\mathbf{M3.} & (ab)c = a(bc) \\quad \\text{(Asociatividad)} \\\\ \\mathbf{M4.} & \\exists!\\; 1 : a \\cdot 1 = a \\quad \\text{(Neutro multiplicativo)} \\\\ \\mathbf{M5.} & \\forall\\, a \\neq 0\\; \\exists!\\, a^{-1} : a\\,a^{-1}=1 \\quad \\text{(Inverso multiplicativo)} \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "D1 · Ley Distributiva",
      "titulo": null,
      "contenido": "Para todo \\(a, b, c \\in \\mathbb{R}\\): \\[a(b + c) = ab + ac.\\] (Distributividad del producto respecto a la suma.)",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Orden en la Recta",
      "titulo": null,
      "contenido": "Sean \\(P\\) y \\(Q\\) dos puntos de una recta dirigida. Se dice que \\(P < Q\\) (\\(P\\) es menor que \\(Q\\)) cuando el segmento dirigido \\(\\overrightarrow{PQ}\\) tiene orientación positiva. Se escribe \\(Q > P\\) (\\(Q\\) es mayor que \\(P\\)) para indicar lo mismo. Si \\(A < O\\) (el origen), \\(A\\) es un punto negativo; si \\(A > O\\), es un punto positivo. El orden de los números reales se induce a partir de este orden geométrico.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "O1–O5 · Propiedades de Orden",
      "titulo": null,
      "contenido": "Para todo \\(a, b, c \\in \\mathbb{R}\\): \\[\\begin{array}{ll} \\mathbf{O1.} & \\text{Tricotomía: exactamente una de } a<b,\\; a>b,\\; a=b. \\\\ \\mathbf{O2.} & \\text{Transitividad: } a < b \\text{ y } b < c \\Rightarrow a < c. \\\\ \\mathbf{O3.} & \\text{Arquimediana: si } a > 0,\\; \\exists\\, n \\in \\mathbb{N} : na > b. \\\\ \\mathbf{O4.} & a > 0 \\text{ y } b > 0 \\Rightarrow a + b > 0. \\\\ \\mathbf{O5.} & a > 0 \\text{ y } b > 0 \\Rightarrow ab > 0. \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Proposición",
      "type": "teo",
      "numero": "Cap. 1 · Propiedades del Orden (deducidas)",
      "titulo": null,
      "contenido": "De los axiomas de orden se deducen, para \\(a,b,c,d \\in \\mathbb{R}\\): \\[\\begin{array}{rl} 1. & a > b \\Leftrightarrow a - b > 0. \\\\ 2. & a > b \\Rightarrow a + c > b + c. \\\\ 3. & a > b,\\; c > d \\Rightarrow a + c > b + d. \\\\ 4. & c > 0,\\; a > b \\Rightarrow ac > bc. \\\\ 5. & c > 0 \\Leftrightarrow -c < 0. \\\\ 6. & c < 0,\\; a > b \\Rightarrow ac < bc. \\\\ 7. & a \\neq 0 \\Rightarrow a^2 > 0. \\\\ 8. & 0 < a < b,\\; 0 < c < d \\Rightarrow ac < bd. \\\\ 9. & a \\neq 0 \\Rightarrow \\tfrac{1}{a} \\text{ tiene el mismo signo que } a. \\\\ 10. & a < b,\\text{ mismo signo} \\Rightarrow \\tfrac{1}{a} > \\tfrac{1}{b}. \\\\ 11. & a,b>0 : a^2 < b^2 \\Leftrightarrow a < b. \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Intervalos",
      "titulo": null,
      "contenido": "Sea \\(a < b\\). Se definen los siguientes subconjuntos de \\(\\mathbb{R}\\): \\[\\begin{array}{ll} (a,b) = \\{x \\mid a < x < b\\} & \\text{(abierto)} \\\\ {}[a,b] = \\{x \\mid a \\le x \\le b\\} & \\text{(cerrado)} \\\\ (a,b] = \\{x \\mid a < x \\le b\\} & \\text{(semiabierto izq.)} \\\\ {}[a,b) = \\{x \\mid a \\le x < b\\} & \\text{(semiabierto der.)} \\\\ {}[a,\\infty) = \\{x \\mid x \\ge a\\},\\; (a,\\infty) = \\{x \\mid x > a\\} & \\\\ (-\\infty,a] = \\{x \\mid x \\le a\\},\\; (-\\infty,a) = \\{x \\mid x < a\\} & \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Observación",
      "type": "obs",
      "numero": "Cap. 1 · Inecuaciones de 2° Grado",
      "titulo": null,
      "contenido": "Sea \\(ax^2 + bx + c < 0\\) con raíces reales distintas \\(r_1 < r_2\\). Como \\(ax^2 + bx + c = a(x-r_1)(x-r_2)\\), el conjunto solución es: \\[\\begin{array}{ll} (r_1, r_2) & \\text{si } a > 0, \\\\ (-\\infty, r_1) \\cup (r_2, +\\infty) & \\text{si } a < 0. \\end{array}\\] Para inecuaciones no estrictas (\\(\\le\\)) se incluyen los extremos. Si la ecuación no tiene raíces reales, la solución es \\(\\mathbb{R}\\) o \\(\\emptyset\\) según el signo de \\(c\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Valor Absoluto",
      "titulo": null,
      "contenido": "El valor absoluto de \\(a \\in \\mathbb{R}\\), denotado \\(|a|\\), se define por: \\[|a| = \\begin{cases} a & \\text{si } a \\ge 0, \\\\ -a & \\text{si } a < 0. \\end{cases}\\] Siempre \\(|a| \\ge 0\\). Geométricamente, \\(|a|\\) es la longitud del segmento \\(OA\\), donde \\(A\\) es el punto correspondiente a \\(a\\) en la recta.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Proposición",
      "type": "teo",
      "numero": "Cap. 1 · Propiedades del Valor Absoluto",
      "titulo": null,
      "contenido": "Para todo \\(x, y \\in \\mathbb{R}\\): \\[\\begin{array}{rl} 1. & |x|^2 = x^2. \\\\ 2. & |x| = \\sqrt{x^2} \\quad (\\sqrt{\\phantom{x}}\\text{ denota la raíz no negativa}). \\\\ 3. & |-x| = |x|. \\\\ 4. & |xy| = |x|\\,|y|. \\\\ 5. & x \\le |x| \\quad \\text{y} \\quad -x \\le |x|. \\\\ 6. & |x+y| \\le |x|+|y| \\quad \\text{(Desigualdad del Triángulo).} \\\\ 7. & d > 0 \\Rightarrow \\bigl(|x| \\le d \\Leftrightarrow -d < x < d\\bigr). \\end{array}\\]",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Teorema",
      "type": "teo",
      "numero": "Cap. 1 · Desigualdad del Triángulo",
      "titulo": null,
      "contenido": "Para todo \\(x, y \\in \\mathbb{R}\\): \\[|x + y| \\le |x| + |y|.\\] Como consecuencia, para la distancia \\(d(a,b) = |a-b|\\) se cumple la desigualdad triangular \\(d(a,c) \\le d(a,b) + d(b,c)\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Distancia en la Recta",
      "titulo": null,
      "contenido": "La distancia entre dos puntos \\(A\\) y \\(B\\) de la recta coordenada se define como \\(d(a,b) = |a - b|\\). Esta función satisface: \\[\\begin{array}{rl} 1. & d(a,b) \\ge 0 \\;\\text{ y }\\; d(a,b) = 0 \\Leftrightarrow a = b. \\\\ 2. & d(a,b) = d(b,a). \\\\ 3. & d(a,c) \\le d(a,b) + d(b,c) \\quad \\text{(Desig. Triángulo).} \\end{array}\\] La propiedad 7 del valor absoluto establece que \\(|x - a| < d\\) si y sólo si \\(x \\in (a-d,\\, a+d)\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Elemento Máximo",
      "titulo": null,
      "contenido": "Sea \\(A \\subseteq \\mathbb{R}\\) no vacío. Un número real \\(M\\) es el elemento máximo de \\(A\\) si: (1) \\(M \\in A\\) y (2) \\(M \\ge a\\) para todo \\(a \\in A\\). Se escribe \\(M = \\max A\\). Todo subconjunto no vacío y finito de \\(\\mathbb{R}\\) tiene elemento máximo. Un conjunto infinito puede o no tener máximo: \\(\\{x \\in \\mathbb{R} \\mid x^2 \\le 2\\}\\) tiene \\(\\max = \\sqrt{2}\\), pero \\((0,1)\\) no tiene máximo.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Elemento Mínimo",
      "titulo": null,
      "contenido": "Sea \\(A \\subseteq \\mathbb{R}\\) no vacío. Un número real \\(m\\) es el elemento mínimo de \\(A\\) si: (1) \\(m \\in A\\) y (2) \\(m \\le a\\) para todo \\(a \\in A\\). Se escribe \\(m = \\min A\\). Todo subconjunto no vacío y finito de \\(\\mathbb{R}\\) tiene elemento mínimo.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definición",
      "type": "def",
      "numero": "Cap. 1 · Cotas Superior e Inferior",
      "titulo": null,
      "contenido": "Sea \\(A \\subseteq \\mathbb{R}\\) no vacío. Un real \\(\\Omega\\) es cota superior de \\(A\\) si \\(\\Omega \\ge a\\) para todo \\(a \\in A\\). Un real \\(\\omega\\) es cota inferior de \\(A\\) si \\(\\omega \\le a\\) para todo \\(a \\in A\\). La cota puede o no pertenecer al conjunto. \\(A\\) está acotado superiormente, inferiormente, o acotado si tiene cota superior, inferior, o ambas, respectivamente. Si \\(A\\) tiene elemento máximo \\(M\\), entonces \\(M\\) es la mínima cota superior. Si tiene elemento mínimo \\(m\\), entonces \\(m\\) es la máxima cota inferior.",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "1.1 · Supremo",
      "titulo": null,
      "contenido": "Sea \\(A\\) un conjunto de números reales, no vacío, acotado superiormente.\nUn número real \\(c\\) es llamado el \\textbf{supremo} de \\(A\\) si \\(c\\) es la\nmínima cota superior de \\(A\\). En este caso se escribe \\(c = \\sup A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "1.2 · Ínfimo",
      "titulo": null,
      "contenido": "Sea \\(A\\) un conjunto de números reales, no vacío, acotado inferiormente.\nUn número real \\(d\\) es llamado el \\textbf{ínfimo} de \\(A\\) si \\(d\\) es la\nmáxima cota inferior de \\(A\\). En este caso se escribe \\(d = \\inf A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Axioma",
      "type": "def",
      "numero": "O6 · Axioma del Supremo",
      "titulo": null,
      "contenido": "Si \\(A\\) es un conjunto de números reales, no vacío y acotado superiormente,\nentonces existe el supremo de \\(A\\).",
      "fuente": "Cálculo. Primer Curso"
    },
    {
      "tipo": "Proposición",
      "type": "teo",
      "numero": "Cap. 1 · Propiedades del Supremo",
      "titulo": null,
      "contenido": "Si \\(c = \\sup A\\), entonces: \\[\\begin{array}{rl} 1. & c \\ge a \\text{ para todo } a \\in A \\quad\\text{(es cota superior).} \\\\ 2. & \\text{Para todo } d < c,\\; \\exists\\, a \\in A : d < a \\le c \\quad\\text{(es la mínima).} \\end{array}\\] Estas dos propiedades caracterizan al supremo. Como ejemplo: si \\(A = \\left\\{\\frac{n-1}{n} : n \\in \\mathbb{N}\\right\\}\\), entonces \\(\\sup A = 1\\) aunque \\(1 \\notin A\\).",
      "fuente": "Cálculo. Primer Curso"
    }
  ],
  "cd1_b4": [
    {
      "tipo": "Definicion",
      "type": "def",
      "numero": "Postulado de los encajes de intervalos",
      "titulo": null,
      "contenido": "Si $I_1, I_2, I_3, \\dots$ forman una sucesión ``encaje'' de intervalos con puntos extremos racionales, existe un punto $x$ contenido en todo $I_n$.",
      "fuente": "Introducción al Cálculo y al Análisis Matemático"
    }
  ]
};
