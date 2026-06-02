# Ukishima — Guía del proyecto

PWA para la carrera de Matemáticas en la Facultad de Ciencias, UNAM.

## Transcripción de PDFs

### Flujo de trabajo

1. Coloca los PDFs en `pdfs/entrada/`
2. En Claude Code, ejecuta `/transcribir`
3. El agente lee el libro en `libros-data.js`, obtiene su `id` y guarda la transcripción en LaTeX directamente en `texto/{id}.tex`, sustituyendo o creando el archivo de notas del libro.

### Comando `/transcribir`

```
/transcribir                    # procesa todos los PDFs en pdfs/entrada/
/transcribir arizmendi          # solo procesa PDFs cuyo nombre contenga "arizmendi"
```

### Estructura de carpetas

```
pdfs/
└── entrada/    ← sube aquí tus PDFs

texto/
└── {id}.tex    ← archivo LaTeX generado (ej. cd1_b6.tex), compilable con LuaLaTeX
```

### Formato de salida

Cada `.tex` usa los entornos de `ukishima-notas.sty`:
`\begin{definicion}`, `\begin{teorema}`, `\begin{proposicion}`, `\begin{axioma}`,
`\begin{ejemplo}`, `\begin{observacion}`, `\begin{nota}`, `\begin{proof}`, etc.

## Tecnologías

- HTML5 / CSS3 / Vanilla JS (sin frameworks)
- PWA con Service Worker (cache v190+)
- KaTeX para render de matemáticas
- LuaLaTeX para notas en `texto/`
