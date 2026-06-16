# Ukishima — Guía del proyecto

PWA para las carreras de **Matemáticas**, **Física** y **Actuaría** en la
Facultad de Ciencias, UNAM.

## Multi-carrera

`assets/js/shared/carrera.js` define `window.UK` (se carga **primero** en cada
página, antes de los datos): carrera activa en `localStorage['ukishima_carrera']`,
registro de datasets (`UK.registerData`/`UK.dataset`), namespacing de claves de
progreso (`UK.sk`) y la pantalla de selección (`UK.showCarreraSelect`).

- En la primera visita (sin carrera elegida) `index.html` muestra el selector;
  desde **Estadísticas** hay un botón para cambiar de carrera.
- Cada carrera tiene su dataset: Matemáticas en `assets/js/data/data.js`
  (con temarios y bibliografía completos), Física en `data-fisica.js` y Actuaría
  en `data-actuaria.js` (por ahora solo nombre + créditos por materia; optativas
  agrupadas por área/campo en `OPT_BLOQUES`; sin temario ni bibliografía).
- `data.js` se carga **al final** de los archivos de datos y resuelve los
  globales (`CURRICULUM`, `TOTAL_CREDITOS`, `OPT_DATA`, `OPT_BLOQUES`,
  `OPTATIVAS_ALL`, `LIBRARY`, `DEFAULTS`) según la carrera activa.
- El progreso se aísla por carrera vía `UK.sk(clave)`: Matemáticas conserva las
  claves históricas (`mat_tema_v1`, `ukishima_avance_v2`, …) y las demás usan
  sufijo (`..._fisica`, `..._actuaria`).

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
