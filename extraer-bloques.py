"""
Extrae SOLO enunciados de DEFINICIÓN y TEOREMA (sin demostraciones).
El enunciado termina cuando aparece DEMOSTRACIÓN, otro encabezado formal,
o después de 2 líneas en blanco consecutivas.
Uso: python extraer-bloques.py "pdfs/salida/Spivak Calculo.txt"
"""

import re, sys
from pathlib import Path

FORMAL  = re.compile(r"^(TEOREMA|DEFINICI[OÓ]N|PROPOSICI[OÓ]N|COROLARIO|LEMA|AXIOMA|DEMOSTRACI[OÓ]N)[\s\-\.]*(\d+[\-\.]?\d*)?[\s]*$", re.IGNORECASE)
QUIERO  = re.compile(r"^(TEOREMA|DEFINICI[OÓ]N)[\s\-\.]*(\d+[\-\.]?\d*)?[\s]*$", re.IGNORECASE)
PAG     = re.compile(r"^\d+\s+\S", re.IGNORECASE)   # "15 Prólogo"
SOLO_N  = re.compile(r"^\d{1,4}$")
CAP_RE  = re.compile(r"^CAP[IÍ]TULO\s*(\d+)", re.IGNORECASE)

def extraer(path: Path) -> list[dict]:
    lineas = path.read_text(encoding="utf-8", errors="ignore").splitlines()
    bloques = []
    cap = "Prefacio"
    i = 0

    while i < len(lineas):
        raw  = lineas[i]
        sig  = raw.strip()

        m_cap = CAP_RE.match(sig)
        if m_cap:
            cap = f"Capitulo {m_cap.group(1)}"
            i += 1
            continue

        m = QUIERO.match(sig)
        if m and sig:
            tipo = m.group(1).upper()
            # normalizar tildes
            tipo = tipo.replace("DEFINICION", "DEFINICION").replace("DEFINICIÓN", "DEFINICION")
            num  = (m.group(2) or "").strip()

            # Recoge cuerpo hasta DEMOSTRACIÓN / otro encabezado / 2 blancos seguidos
            cuerpo = []
            blancos = 0
            i += 1
            while i < len(lineas):
                l = lineas[i]
                ls = l.strip()
                if FORMAL.match(ls) and ls:
                    break           # nuevo encabezado formal
                if PAG.match(ls) or SOLO_N.match(ls):
                    i += 1
                    continue        # ruido de página
                if ls == "":
                    blancos += 1
                    if blancos >= 2 and cuerpo:
                        break       # fin del enunciado
                else:
                    blancos = 0
                cuerpo.append(l)
                i += 1

            texto = "\n".join(cuerpo).strip()
            if texto:
                bloques.append({"tipo": tipo, "num": num, "cap": cap, "texto": texto})
        else:
            i += 1

    return bloques

def a_latex(b: dict) -> str:
    tipo = b["tipo"]
    num  = b["num"]
    env  = "teorema" if tipo == "TEOREMA" else "definicion"
    return (
        f"\\begin{{{env}}}[{num}]{{}}\n"
        f"{b['texto']}\n"
        f"\\end{{{env}}}"
    )

def main():
    path = Path(sys.argv[1] if len(sys.argv) > 1 else "pdfs/salida/Spivak Calculo.txt")
    bloques = extraer(path)

    # Salida .txt de referencia
    lineas_ref = []
    for b in bloques:
        lineas_ref.append(f"%%% [{b['cap']}] {b['tipo']} {b['num']}")
        lineas_ref.append(b["texto"])
        lineas_ref.append("")
    ref = path.parent / (path.stem + "_bloques.txt")
    ref.write_text("\n".join(lineas_ref), encoding="utf-8")

    # Salida .tex
    secciones = {}
    for b in bloques:
        secciones.setdefault(b["cap"], []).append(a_latex(b))

    partes = []
    for cap, items in secciones.items():
        partes.append(f"\\section{{{cap}}}")
        partes.extend(items)

    tex_body = "\n\n".join(partes)
    print(ref)
    print(f"{len(bloques)} bloques extraidos ({sum(1 for b in bloques if b['tipo']=='TEOREMA')} teoremas, {sum(1 for b in bloques if 'DEFIN' in b['tipo'])} definiciones)")
    print(f"Lineas en referencia: {len(lineas_ref)}")
    return bloques, tex_body

if __name__ == "__main__":
    main()
