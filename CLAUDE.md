# Ukishima — Guía del proyecto

PWA para la carrera de Matemáticas en la Facultad de Ciencias, UNAM.

## Notas de los libros

Cada libro puede tener un archivo de notas en `texto/{matId}/{bookId}.tex`
(optativas: `texto/optativas/{bloque}/{matId}/{bookId}.tex`). En la vista del
libro se renderiza ese `.tex` como notas (texto + KaTeX, usando **solo `$` y
`$$`**), sin capítulos ni parseo de entornos; el preámbulo LaTeX se ignora. Si
el libro no tiene `.tex` con contenido, no se muestran notas.

## Tecnologías

- HTML5 / CSS3 / Vanilla JS (sin frameworks)
- PWA con Service Worker (cache v190+)
- KaTeX para render de matemáticas (incluidas las notas de los libros en `texto/`)
