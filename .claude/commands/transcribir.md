Eres un agente de transcripción para el proyecto Ukishima.

Tu tarea es procesar los archivos en `pdfs/salida/` y convertirlos en archivos LaTeX en `texto/`.

Acepta dos formatos de entrada:
- **`.mmd`** — generado por Nougat (ya contiene LaTeX matemático, mejor calidad)
- **`.txt`** — generado por `ocr.py` (texto plano, requiere más interpretación)

Si existe `.mmd` y `.txt` para el mismo libro, **prefiere el `.mmd`**.

## Instrucciones paso a paso

1. **Escanea la carpeta de salida**
   - Usa Glob con patrón `pdfs/salida/**/*.mmd` y `pdfs/salida/**/*.txt` para listar los archivos disponibles.
   - Si no hay archivos, informa al usuario y termina.
   - Construye una lista unificada: si un nombre tiene `.mmd` y `.txt`, quédate solo con el `.mmd`.

2. **Para cada archivo encontrado:**

   a. Usa Read para leer el archivo.
      - Si tiene más de 2000 líneas, procésalo en bloques usando `offset` y `limit`.

   b. **Interpreta según el formato:**

      **Si es `.mmd` (Nougat):**
      - El contenido ya viene en Markdown con LaTeX matemático (`$...$`, `\[...\]`, entornos).
      - Las fórmulas ya están en LaTeX — no las reescribas, solo ajusta formato si es necesario.
      - Convierte la estructura Markdown a LaTeX:
        - `# Título` → `\section{Título}`
        - `## Título` → `\subsection{Título}`
        - `### Título` → `\subsubsection{Título}`
        - `**texto**` → `\textbf{texto}`
        - `*texto*` → `\textit{texto}`
        - Listas `- item` → `\begin{itemize}\item...\end{itemize}`
      - Artefactos de Nougat a ignorar: líneas `[MISSING]`, `[ILLEGIBLE]`, bloques de `\begin{table}` vacíos.

      **Si es `.txt` (ocr.py):**
      - Texto plano con posible ruido: saltos de línea irregulares, guiones de separación, números de página sueltos, encabezados repetidos.
      - Reconstruye párrafos y fórmulas a partir del texto crudo.
      - Fórmulas matemáticas en texto → LaTeX (ej. `x^2 + y^2 = r^2` → `$x^2 + y^2 = r^2$`)
      - Texto ilegible o corrupto → `% [ilegible]`
      - Página en blanco o solo número de página → omite

   c. **Formato de salida: LaTeX**
      Primera línea: comentario con nombre y fecha, ej. `% arizmendi.mmd — transcripción LaTeX — 2026-06-02`

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

      \begin{proposicion}[5]{}
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
      - El nombre del archivo (sin extensión) corresponde al PDF original.
      - Busca el libro en `assets/js/data/libros-data.js` por título y autor para obtener su `id` (ej. `cd1_b6`) y el `matId` de su materia (ej. `calculo_1`).
      - Si el libro no está registrado, díselo al usuario y usa el nombre del archivo como identificador provisional en `texto/sin_materia/`.
      - El archivo de salida va en `texto/{matId}/{id}.tex` (ej. `texto/calculo_1/cd1_b6.tex`).
      - Para optativas: `texto/optativas/bloque_1/{matId}/{id}.tex` o `bloque_2`.
      - Esa carpeta ya existe. El stub `% [Por transcribir]` también existe; reemplázalo con Write.

   e. El archivo en `texto/` tiene esta estructura:
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

   f. Guarda con Write el archivo completo. Si el archivo es muy largo y debes procesar en múltiples bloques, usa Edit para añadir al final antes de `\end{document}` (old_string = `% [Continúa...]\n\n\\end{document}`, new_string = nuevo contenido + marcador + `\end{document}`).

3. **Al terminar**, muestra un resumen: archivos procesados, formato usado (`.mmd`/`.txt`), archivos `.tex` generados.

## Argumento opcional

Si el usuario pasó `$ARGUMENTS`, úsalo como filtro de nombre. Ej: `arizmendi` procesa solo archivos cuyo nombre contenga "arizmendi".

## Notas

- Los `.mmd` de Nougat son preferibles porque las fórmulas ya vienen en LaTeX.
- Los números de página sueltos se omiten.
- Encabezados repetidos de página se omiten.
- No sobreescribas archivos `.tex` con contenido real sin avisar al usuario.
