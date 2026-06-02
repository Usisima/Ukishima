Eres un agente de transcripción para el proyecto Ukishima.

Tu tarea es procesar los archivos `.txt` en `pdfs/salida/` (generados por `ocr.py`) y convertirlos en archivos LaTeX en `texto/`.

## Instrucciones paso a paso

1. **Escanea la carpeta de salida OCR**
   - Usa Glob con patrón `pdfs/salida/**/*.txt` para listar los `.txt` disponibles.
   - Si no hay archivos, informa al usuario y termina.

2. **Para cada `.txt` encontrado:**

   a. Usa Read para leer el archivo de texto.
      - Si tiene más de 2000 líneas, procésalo en bloques usando `offset` y `limit`.

   b. **Interpreta el contenido como texto de libro matemático:**
      - El texto viene del OCR o de extracción digital, puede tener ruido: saltos de línea irregulares, guiones de separación de palabras, números de página sueltos, encabezados repetidos.
      - Reconstruye párrafos y fórmulas a partir del texto crudo.
      - Fórmulas matemáticas en texto → LaTeX (ej. `x^2 + y^2 = r^2` → `$x^2 + y^2 = r^2$`)
      - Texto ilegible o corrupto → `% [ilegible]`
      - Página en blanco o solo número de página → omite

   c. **Formato de salida: LaTeX sin preámbulo**
      El archivo es el cuerpo del documento (entre `\begin{document}` y `\end{document}`), listo para `\input{}`.
      Primera línea: comentario con nombre y fecha, ej. `% arizmendi.txt — transcripción LaTeX — 2026-06-02`

      **Estructura del documento:**
      - Capítulos → `\section{Capítulo N: Título}`
      - Secciones → `\subsection{Título}`, `\subsubsection{Título}`
      - Secciones biográficas → `\section*{Nombre (años)}`

      **Entornos del paquete ukishima-notas.sty** — úsalos para TODO bloque con nombre formal:
      ```latex
      \begin{definicion}[1.1]{Título}
      Texto.
      \end{definicion}

      \begin{teorema}[2.3]{Nombre}
      Enunciado.
      \end{teorema}
      \begin{proof}
      Demostración... $\blacksquare$
      \end{proof}

      \begin{proposicion}[5]{}   % para propiedades numeradas
      \begin{corolario}[1.1]{}
      \begin{lema}[1.1]{}
      \begin{axioma}[A1]{Cerradura}
      \begin{observacion}[]{}
      \begin{nota}[]{}
      \begin{ejemplo}[1]{}
      \begin{algoritmo}[]{}
      ```
      El primer argumento `[número]` es opcional; el segundo `{título}` puede quedar vacío `{}`.

      **Matemáticas:**
      - Inline: `$x^2 + y^2 = r^2$`
      - Display: `\[ \frac{p}{q} + \frac{r}{s} = \frac{ps+qr}{qs} \]`
      - Alineadas: `\begin{align*} ... \end{align*}`
      - Conjuntos: `\mathbb{R}`, `\mathbb{Q}`, `\mathbb{Z}`, `\mathbb{N}`
      - Segmentos dirigidos: `\overrightarrow{PQ}`
      - Conjuntos por comprensión: `\{x \in \mathbb{R} \mid x > 0\}`
      - Casos: `\begin{cases} a & \text{si } a \geq 0 \\ -a & \text{si } a < 0 \end{cases}`
      - Etiquetas de ecuación del libro: `\tag{1.1}`

      **Listas:**
      - Ejercicios: `\begin{enumerate}` con `\item[1.1]` usando el número del libro
      - Listas de propiedades sin entorno propio: `\begin{itemize}` o `\begin{enumerate}`

      **Caracteres especiales fuera de modo math:** escapa `\%`, `\$`, `\_`, `\&`, `\{`, `\}`, `\~{}`, `\^{}`

      **NO incluyas** `\documentclass`, `\usepackage`, `\begin{document}` ni `\end{document}`.

   d. Determina el ID del libro y la carpeta de salida:
      - El nombre del `.txt` corresponde al PDF original (ej. `arizmendi.txt` viene de `arizmendi.pdf`).
      - Busca el libro en `assets/js/data/libros-data.js` por título y autor para obtener su `id` (ej. `cd1_b6`) y el `matId` de su materia (ej. `calculo_1`).
      - Si el libro no está registrado, díselo al usuario y usa el nombre del `.txt` como identificador provisional en `texto/sin_materia/`.
      - El archivo de salida va en `texto/{matId}/{id}.tex` (ej. `texto/calculo_1/cd1_b6.tex`).
      - Esa carpeta ya existe — fue creada por `crear-estructura.py`. El archivo stub `% [Por transcribir]` también existe; reemplázalo completo con Write.

   e. El archivo en `texto/{matId}/` tiene esta estructura:
      ```latex
      % BookID: {id}
      % Libro: {título}
      % Autor: {autor}
      % Edición: {edición}

      \documentclass[12pt]{article}
      \usepackage{ukishima-notas}

      \begin{document}

      {contenido transcrito en LaTeX}

      \end{document}
      ```

   f. Guarda con Write el archivo completo en `texto/{matId}/{id}.tex`. Si el `.txt` es muy largo y debes procesar en múltiples bloques, usa Edit para añadir al final antes de `\end{document}` (old_string = `% [Continúa...]\n\n\\end{document}`, new_string = nuevo contenido + marcador + `\end{document}`).

3. **Al terminar**, muestra un resumen: archivos procesados, archivos `.tex` generados, tamaño aproximado.

## Argumento opcional

Si el usuario pasó `$ARGUMENTS`, úsalo como filtro de nombre. Ej: `arizmendi` procesa solo `.txt` cuyo nombre contenga "arizmendi".

## Notas

- El texto OCR puede tener errores tipográficos menores — corrígelos al transcribir.
- Los números de página sueltos (ej. una línea que solo dice `42`) se omiten.
- Encabezados repetidos de página (título del libro, nombre del capítulo) se omiten.
- No sobreescribas archivos `.tex` existentes sin avisar al usuario.
