"""
Extracción de texto de PDFs para pdfs/entrada/
- PDFs digitales: extrae el texto existente directamente
- PDFs escaneados: aplica OCR con Tesseract

Uso:  python ocr.py              # procesa todos los PDFs
      python ocr.py arizmendi    # solo PDFs cuyo nombre contenga "arizmendi"

Salida: pdfs/salida/{nombre}.txt  (original intacto)
"""

import sys
import os
import subprocess
import tempfile
from pathlib import Path
from io import StringIO

os.environ["PATH"] += r";C:\Users\aramg\AppData\Local\Programs\Tesseract-OCR"
os.environ["PATH"] += r";C:\Program Files\gs\gs10.07.1\bin"

import ocrmypdf
from pdfminer.high_level import extract_text_to_fp
from pdfminer.layout import LAParams

ENTRADA = Path("pdfs/entrada")
SALIDA  = Path("pdfs/salida")
MIN_CHARS_POR_PAGINA = 30  # umbral para considerar que una página tiene texto real

LANG = "spa+eng" if "spa" in subprocess.run(
    [r"C:\Users\aramg\AppData\Local\Programs\Tesseract-OCR\tesseract.exe", "--list-langs"],
    capture_output=True, text=True
).stdout else "eng"

def extraer_texto_digital(pdf: Path) -> str:
    buf = StringIO()
    with open(pdf, "rb") as f:
        extract_text_to_fp(f, buf, laparams=LAParams())
    return buf.getvalue()

def es_escaneado(texto: str, num_paginas_aprox: int) -> bool:
    chars_por_pag = len(texto.strip()) / max(num_paginas_aprox, 1)
    return chars_por_pag < MIN_CHARS_POR_PAGINA

def contar_paginas(pdf: Path) -> int:
    try:
        import pikepdf
        with pikepdf.open(pdf) as doc:
            return len(doc.pages)
    except Exception:
        return 100

def procesar(pdf: Path) -> None:
    destino_txt = SALIDA / (pdf.stem + ".txt")

    texto = extraer_texto_digital(pdf)
    num_paginas = contar_paginas(pdf)

    if not es_escaneado(texto, num_paginas):
        print(f"  Texto digital: {pdf.name}  ({len(texto) // 1024} KB de texto)")
        destino_txt.write_text(texto, encoding="utf-8")
    else:
        print(f"  OCR (escaneado): {pdf.name}  ->  {destino_txt.name}")
        with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tmp:
            tmp_path = Path(tmp.name)
        try:
            ocrmypdf.ocr(
                pdf,
                tmp_path,
                language=LANG,
                deskew=True,
                force_ocr=True,
                sidecar=destino_txt,
            )
        finally:
            tmp_path.unlink(missing_ok=True)

    print(f"  Listo: {destino_txt}  ({destino_txt.stat().st_size // 1024} KB)")

def main() -> None:
    filtro = sys.argv[1].lower() if len(sys.argv) > 1 else ""
    pdfs = sorted(ENTRADA.glob("*.pdf"))

    if filtro:
        pdfs = [p for p in pdfs if filtro in p.name.lower()]

    if not pdfs:
        print("No se encontraron PDFs en pdfs/entrada/" + (f" con filtro '{filtro}'" if filtro else ""))
        return

    SALIDA.mkdir(parents=True, exist_ok=True)
    print(f"Procesando {len(pdfs)} PDF(s)...  [idioma OCR: {LANG}]\n")

    errores = []
    for pdf in pdfs:
        try:
            procesar(pdf)
        except Exception as e:
            print(f"  ERROR en {pdf.name}: {e}")
            errores.append(pdf.name)

    print(f"\nFinalizado. {len(pdfs) - len(errores)}/{len(pdfs)} exitosos.")
    if errores:
        print("Con error:", ", ".join(errores))

if __name__ == "__main__":
    main()
