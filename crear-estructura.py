"""
Crea/reorganiza la estructura de texto/ para todos los libros de libros-data.js.

  texto/
  ├── {matId}/                        ← obligatorias (LIBRARY)
  └── optativas/
      ├── bloque_1/{matId}/           ← LIBRARY_OPT índices 0-15
      ├── bloque_2/{matId}/           ← LIBRARY_OPT índices 16+
      └── bloque_3/                   ← vacío por ahora

Uso: python crear-estructura.py
"""

import shutil
from pathlib import Path

TEXTO = Path("texto")

STUB = """\
% BookID: {id}
% Libro: {title}
% Autor: {author}
% Edicion: {edition}

\\documentclass[12pt]{{article}}
\\usepackage{{ukishima-notas}}

\\begin{{document}}

% [Por transcribir]

\\end{{document}}
"""

# ── Datos ────────────────────────────────────────────────────────────────────
# tipo: "obl" | "opt1" | "opt2"

MATERIAS = [
  # ── LIBRARY (obligatorias) ──────────────────────────────────────────────
  {"tipo": "obl", "matId": "algebra_superior_1", "subject": "Álgebra Superior I", "books": [
      {"id": "as1_b1", "title": "Álgebra Superior", "author": "Cárdenas, Lluis, Raggi & Tomás", "edition": "Trillas, 1974"},
      {"id": "as1_b2", "title": "Álgebra Elemental", "author": "Leopoldo Nachbin", "edition": "OEA, 1986"},
  ]},
  {"tipo": "obl", "matId": "algebra_superior_2", "subject": "Álgebra Superior II", "books": [
      {"id": "as2_b1", "title": "Álgebra Superior", "author": "Cárdenas, Lluis, Raggi & Tomás", "edition": "Trillas, 1974"},
      {"id": "as2_b2", "title": "Álgebra Elemental", "author": "Leopoldo Nachbin", "edition": "OEA, 1986"},
  ]},
  {"tipo": "obl", "matId": "calculo_1", "subject": "Cálculo Diferencial e Integral I", "books": [
      {"id": "cd1_b1", "title": "Cálculo Infinitesimal", "author": "Michael Spivak", "edition": "2ª ed. Reverté, 1998"},
      {"id": "cd1_b2", "title": "Cálculo con Geometría Analítica", "author": "Thomas & Finney", "edition": "9ª ed. Addison-Wesley, 1987"},
      {"id": "cd1_b3", "title": "Cálculo Diferencial e Integral", "author": "Arizmendi, Carrillo, Lara & Lluis-Riera", "edition": "Las Prensas de Ciencias, UNAM"},
      {"id": "cd1_b4", "title": "Differential and Integral Calculus", "author": "Richard Courant", "edition": "Vol. I, 2ª ed. Wiley-Interscience, 1937"},
      {"id": "cd1_b5", "title": "A First Course in Calculus", "author": "Serge Lang", "edition": "5ª ed. Springer, 1986"},
      {"id": "cd1_b6", "title": "Cálculo. Primer curso, nivel superior", "author": "Arizmendi, Carrillo Hoyo & Lara Aparicio", "edition": "Addison-Wesley Iberoamericana, 1987"},
  ]},
  {"tipo": "obl", "matId": "geo_analitica_1", "subject": "Geometría Analítica I", "books": [
      {"id": "ga1_b1", "title": "Geometría Analítica: Una Introducción a la Geometría", "author": "Ana Irene Ramírez Galarza", "edition": "Las Prensas de Ciencias, UNAM, 2004"},
      {"id": "ga1_b2", "title": "Geometría Superior", "author": "N. Efimov", "edition": "MIR, 1984"},
      {"id": "ga1_b3", "title": "Geometría", "author": "Javier Bracho", "edition": "Las Prensas de Ciencias, UNAM, 2009"},
      {"id": "ga1_b4", "title": "Modern Analytic Geometry", "author": "Preston & Lovaglia", "edition": "Harper & Row, 1970"},
  ]},
  {"tipo": "obl", "matId": "geo_analitica_2", "subject": "Geometría Analítica II", "books": [
      {"id": "ga2_b1", "title": "Geometría Analítica: Una Introducción a la Geometría", "author": "Ana Irene Ramírez Galarza", "edition": "Las Prensas de Ciencias, UNAM, 1998"},
      {"id": "ga2_b2", "title": "Geometría Superior", "author": "N. Efimov", "edition": "MIR, 1984"},
      {"id": "ga2_b3", "title": "Geometría", "author": "Javier Bracho", "edition": "Las Prensas de Ciencias, UNAM, 2009"},
      {"id": "ga2_b4", "title": "Modern Analytic Geometry", "author": "Preston & Lovaglia", "edition": "Harper & Row, 1970"},
  ]},
  {"tipo": "obl", "matId": "algebra_lineal_1", "subject": "Álgebra Lineal I", "books": [
      {"id": "al1_b1", "title": "Álgebra Lineal", "author": "Hoffman & Kunze", "edition": "Prentice Hall, 1973"},
      {"id": "al1_b2", "title": "Álgebra Lineal", "author": "Friedberg, Insel & Spence", "edition": "Publicaciones Cultural, 1982"},
      {"id": "al1_b3", "title": "Linear Algebra", "author": "Morton L. Curtis", "edition": "Springer, 1984"},
      {"id": "al1_b4", "title": "Linear Algebra", "author": "Serge Lang", "edition": "3ª ed. Springer, 1987"},
      {"id": "al1_b5", "title": "Fundamentals of Linear Algebra", "author": "Katsumi Nomizu", "edition": "McGraw-Hill, 1966"},
      {"id": "al1_b6", "title": "Álgebra Lineal", "author": "H. Rincón Mora", "edition": "Las Prensas de Ciencias, UNAM"},
  ]},
  {"tipo": "obl", "matId": "calculo_2", "subject": "Cálculo Diferencial e Integral II", "books": [
      {"id": "cd2_b1", "title": "Cálculo Infinitesimal", "author": "Michael Spivak", "edition": "2ª ed. Reverté, 1998"},
      {"id": "cd2_b2", "title": "Cálculo con Geometría Analítica", "author": "Thomas & Finney", "edition": "9ª ed. Addison-Wesley, 1987"},
      {"id": "cd2_b3", "title": "Cálculo Diferencial e Integral", "author": "Arizmendi, Carrillo, Lara & Lluis-Riera", "edition": "Las Prensas de Ciencias, UNAM"},
      {"id": "cd2_b4", "title": "Differential and Integral Calculus", "author": "Richard Courant", "edition": "Vol. I, 2ª ed. Wiley-Interscience, 1937"},
      {"id": "cd2_b5", "title": "A First Course in Calculus", "author": "Serge Lang", "edition": "5ª ed. Springer, 1986"},
  ]},
  {"tipo": "obl", "matId": "ecuaciones_diferenciales_1", "subject": "Ecuaciones Diferenciales I", "books": [
      {"id": "ed_b1", "title": "Ordinary Differential Equations", "author": "V.I. Arnold", "edition": "Springer, 1992"},
      {"id": "ed_b2", "title": "Differential Equations", "author": "Blanchard, Devaney & Hall", "edition": "4ª ed. Cengage, 2012"},
      {"id": "ed_b3", "title": "Differential Equations and Their Applications", "author": "Martin Braun", "edition": "4ª ed. Springer, 1993"},
      {"id": "ed_b4", "title": "Elementary Differential Equations", "author": "Derrick & Grossman", "edition": "4ª ed. Addison-Wesley, 1997"},
  ]},
  {"tipo": "obl", "matId": "analisis_matematico_1", "subject": "Análisis Matemático I", "books": [
      {"id": "ana_b1", "title": "Principles of Mathematical Analysis", "author": "Walter Rudin", "edition": "3ª ed. McGraw-Hill"},
      {"id": "ana_b2", "title": "Elementos de Análisis Funcional", "author": "Kolmogorov & Fomin", "edition": "Dover, 1999"},
      {"id": "ana_b3", "title": "Análisis Matemático", "author": "Tom M. Apostol", "edition": "2ª ed. Reverté, 1977"},
      {"id": "ana_b4", "title": "Introduction to Real Analysis", "author": "Bartle & Sherbert", "edition": "4ª ed. Wiley, 2011"},
      {"id": "ana_b5", "title": "Postmodern Analysis", "author": "Jürgen Jost", "edition": "3ª ed. Springer, 2005"},
      {"id": "ana_b6", "title": "Measure and Integral", "author": "Wheeden & Zygmund", "edition": "2ª ed. CRC Press, 2015"},
  ]},
  {"tipo": "obl", "matId": "algebra_moderna_1", "subject": "Álgebra Moderna I", "books": [
      {"id": "alm_b1", "title": "Topics in Algebra", "author": "Israel N. Herstein", "edition": "2ª ed. Wiley"},
      {"id": "alm_b2", "title": "A First Course in Abstract Algebra", "author": "John B. Fraleigh", "edition": "7ª ed. Addison-Wesley, 2003"},
      {"id": "alm_b3", "title": "An Introduction to the Theory of Groups", "author": "Joseph J. Rotman", "edition": "4ª ed. Springer, 1995"},
  ]},
  {"tipo": "obl", "matId": "calculo_3", "subject": "Cálculo Diferencial e Integral III", "books": [
      {"id": "cd3_b1", "title": "Cálculo Vectorial", "author": "Marsden & Tromba", "edition": "6ª ed. Freeman, 2012"},
      {"id": "cd3_b2", "title": "Cálculo (Varias Variables)", "author": "Thomas & Finney", "edition": "9ª ed. Addison-Wesley, 1996"},
      {"id": "cd3_b3", "title": "Calculus", "author": "Tom M. Apostol", "edition": "Vol. II, 2ª ed. Wiley, 1969"},
      {"id": "cd3_b4", "title": "Differential and Integral Calculus", "author": "Richard Courant", "edition": "Vol. II, 2ª ed. Wiley-Interscience, 1936"},
      {"id": "cd3_b5", "title": "Introduction to Calculus and Analysis", "author": "Courant & John", "edition": "Vol. II, Springer, 1989"},
      {"id": "cd3_b6", "title": "Calculus of Several Variables", "author": "Serge Lang", "edition": "3ª ed. Springer, 1987"},
  ]},
  {"tipo": "obl", "matId": "algebra_lineal_2", "subject": "Álgebra Lineal II", "books": [
      {"id": "al2_b1", "title": "Linear Algebra", "author": "Morton L. Curtis", "edition": "Springer, 1984"},
      {"id": "al2_b2", "title": "Álgebra Lineal", "author": "Serge Lang", "edition": "3ª ed. Springer, 1987"},
      {"id": "al2_b3", "title": "Fundamentals of Linear Algebra", "author": "Katsumi Nomizu", "edition": "McGraw-Hill, 1966"},
      {"id": "al2_b4", "title": "Álgebra Lineal", "author": "H. Rincón Mora", "edition": "Las Prensas de Ciencias, UNAM"},
  ]},
  {"tipo": "obl", "matId": "calculo_4", "subject": "Cálculo Diferencial e Integral IV", "books": [
      {"id": "cd4_b1", "title": "Cálculo Vectorial", "author": "Marsden & Tromba", "edition": "6ª ed. Freeman, 2012"},
      {"id": "cd4_b2", "title": "Cálculo (Varias Variables)", "author": "Thomas & Finney", "edition": "9ª ed. Addison-Wesley, 1996"},
      {"id": "cd4_b3", "title": "Calculus", "author": "Tom M. Apostol", "edition": "Vol. II, 2ª ed. Wiley, 1969"},
      {"id": "cd4_b4", "title": "Differential and Integral Calculus", "author": "Richard Courant", "edition": "Vol. II, 2ª ed. Wiley-Interscience, 1936"},
      {"id": "cd4_b5", "title": "Introduction to Calculus and Analysis", "author": "Courant & John", "edition": "Vol. II, Springer, 1989"},
      {"id": "cd4_b6", "title": "Calculus of Several Variables", "author": "Serge Lang", "edition": "3ª ed. Springer, 1987"},
  ]},
  {"tipo": "obl", "matId": "variable_compleja_1", "subject": "Variable Compleja I", "books": [
      {"id": "vc1_b1", "title": "Complex Analysis", "author": "Lars V. Ahlfors", "edition": "3ª ed. McGraw-Hill, 1979"},
      {"id": "vc1_b2", "title": "Complex Variables and Applications", "author": "Churchill & Brown", "edition": "9ª ed. McGraw-Hill, 2014"},
      {"id": "vc1_b3", "title": "Variable Compleja", "author": "Antonio Lascurain Orive", "edition": "Las Prensas de Ciencias, UNAM, 2003"},
      {"id": "vc1_b4", "title": "Basic Complex Analysis", "author": "Marsden & Hoffman", "edition": "3ª ed. Freeman, 1999"},
  ]},
  {"tipo": "obl", "matId": "analisis_matematico_2", "subject": "Análisis Matemático II", "books": [
      {"id": "an2_b1", "title": "Principles of Mathematical Analysis", "author": "Walter Rudin", "edition": "3ª ed. McGraw-Hill, 1976"},
      {"id": "an2_b2", "title": "Measure and Integral", "author": "Wheeden & Zygmund", "edition": "2ª ed. CRC Press, 2015"},
      {"id": "an2_b3", "title": "Mathematical Analysis", "author": "Tom M. Apostol", "edition": "2ª ed. Addison-Wesley, 1974"},
      {"id": "an2_b4", "title": "Introduction to Real Analysis", "author": "Bartle & Sherbert", "edition": "4ª ed. Wiley, 2011"},
      {"id": "an2_b5", "title": "Postmodern Analysis", "author": "Jürgen Jost", "edition": "3ª ed. Springer, 2005"},
      {"id": "an2_b6", "title": "Elementos de la Teoría de Funciones y del Análisis Funcional", "author": "Kolmogorov & Fomin", "edition": "Mir, 1975"},
  ]},

  # ── LIBRARY_OPT Bloque I (índices 0-15) ────────────────────────────────
  {"tipo": "opt1", "matId": "conjuntos_convexos", "subject": "Conjuntos Convexos", "books": [
      {"id": "cc_b1", "title": "Euclidean Geometry and Convexity", "author": "R. Benson", "edition": "McGraw-Hill, 1966"},
      {"id": "cc_b2", "title": "División de Figuras en Partes Menores", "author": "V. Boltianski & I. Golberg", "edition": "MIR, 1973"},
      {"id": "cc_b3", "title": "Geometric Inequalities", "author": "N. Kazarinoff", "edition": "MAA, New Math. Library Vol. 4, 1961"},
      {"id": "cc_b4", "title": "Lo Antiguo y lo Nuevo acerca de los Conjuntos Convexos", "author": "H. Hadwiger", "edition": "SMM, Textos 10, UNAM, 1998"},
      {"id": "cc_b5", "title": "Combinatorial Geometry in the Plane", "author": "H. Hadwiger & H. Debrunner", "edition": "Holt, Reinhart and Winston, 1964"},
      {"id": "cc_b6", "title": "Convex Figures", "author": "I. Yaglom & V. Boltianski", "edition": "Holt, Reinhart and Winston, 1961"},
  ]},
  {"tipo": "opt1", "matId": "conjuntos_y_logica", "subject": "Conjuntos y Lógica", "books": [
      {"id": "cyl_b1", "title": "Sobre un Curso de Análisis Lógico", "author": "J.A. Amor", "edition": "Educación Matemática, GEI, 1994"},
      {"id": "cyl_b2", "title": "Elementos de Lógica Formal", "author": "C. Badesa, I. Jané & R. Jansana", "edition": "Ariel, 1998"},
      {"id": "cyl_b3", "title": "Lógica Elemental", "author": "M. Fernández, A. Preisser et al.", "edition": "UAM, 1996"},
      {"id": "cyl_b4", "title": "Teoría de Conjuntos y Temas Afines", "author": "S. Lipschutz", "edition": "Schaum-McGraw-Hill"},
      {"id": "cyl_b5", "title": "Cómo Entender y Hacer Demostraciones en Matemáticas", "author": "D. Solow", "edition": "Limusa, 1987"},
      {"id": "cyl_b6", "title": "El Método de la Inducción Matemática", "author": "I.S. Sominski", "edition": "Limusa, 1990"},
      {"id": "cyl_b7", "title": "Manual de Lógica para Estudiantes de Matemáticas", "author": "G. Zubieta", "edition": "Trillas, 1977"},
      {"id": "cyl_b8", "title": "Taller de Lógica Matemática", "author": "G. Zubieta", "edition": "McGraw-Hill, 1993"},
  ]},
  {"tipo": "opt1", "matId": "diseno_sistemas_digitales", "subject": "Diseño de Sistemas Digitales", "books": [
      {"id": "dsd_b1", "title": "Digital Design", "author": "M.M. Mano", "edition": "2ª ed. Prentice Hall, 1991"},
  ]},
  {"tipo": "opt1", "matId": "electromagnetismo_1", "subject": "Electromagnetismo I", "books": [
      {"id": "em1_b1", "title": "Fundamentos de Física Vol. II", "author": "Halliday, Resnick & Walker", "edition": "8ª ed. Grupo Editorial Patria, 2011"},
      {"id": "em1_b2", "title": "Electromagnetism: Principles and Applications", "author": "P. Lorrain & D.R. Corson", "edition": "W.H. Freeman, 1990"},
      {"id": "em1_b3", "title": "Electricidad y Magnetismo", "author": "E.M. Purcell", "edition": "Berkeley Physics Vol. 2, Reverté, 2001"},
      {"id": "em1_b4", "title": "Física Vol. II", "author": "R. Resnick, D. Halliday & S.K. Krane", "edition": "5ª ed. Cia. Editorial Continental, 1996"},
      {"id": "em1_b5", "title": "Física II", "author": "R.A. Serway & J.W. Jewett", "edition": "3ª ed. Thomson Learning, 2004"},
      {"id": "em1_b6", "title": "Electricidad y Magnetismo", "author": "R.A. Serway", "edition": "Thomson Learning, 2004"},
      {"id": "em1_b7", "title": "Space Time Physics", "author": "E.F. Taylor & J.A. Wheeler", "edition": "Freeman, 1966"},
      {"id": "em1_b8", "title": "Introducción a la Teoría Especial de la Relatividad", "author": "R. Resnick", "edition": "Limusa, 1977"},
  ]},
  {"tipo": "opt1", "matId": "fenomenos_colectivos", "subject": "Fenómenos Colectivos", "books": [
      {"id": "fc_b1", "title": "Introducción al estudio de la mecánica, materia y ondas", "author": "U. Ingard & W.I. Kraushaar", "edition": "Reverté, 1973"},
      {"id": "fc_b2", "title": "Termodinámica Clásica", "author": "G. Carmona", "edition": "Fac. de Ciencias-UNAM, 2007"},
      {"id": "fc_b3", "title": "Physical Hydrodynamics", "author": "E. Guyon et al.", "edition": "Oxford University Press, 2001"},
      {"id": "fc_b4", "title": "Physics of Waves", "author": "W.C. Elmore & M.A. Heald", "edition": "Dover Publications, 1985"},
  ]},
  {"tipo": "opt1", "matId": "geometria_moderna_2", "subject": "Geometría Moderna II", "books": [
      {"id": "gm2_b1", "title": "An Introduction to the Modern Geometry of the Triangle and the Circle", "author": "C.N. Altshiller", "edition": "Barnes and Noble, 1965"},
      {"id": "gm2_b2", "title": "Non-euclidean Geometry", "author": "H. Menschkowsky", "edition": "Academic Press, 1972"},
      {"id": "gm2_b3", "title": "Introducción a la Geometría Moderna", "author": "L.S. Shively", "edition": "CECSA, 1968"},
  ]},
  {"tipo": "opt1", "matId": "geometria_proyectiva", "subject": "Geometría Proyectiva", "books": [
      {"id": "gp_b1", "title": "The Octonians", "author": "J.C. Baez", "edition": "Bulletin of the AMS, 2002"},
      {"id": "gp_b2", "title": "Projective Geometry: From Foundations to Applications", "author": "A. Beutelspacher & U. Rosenbaum", "edition": "Cambridge University Press, 1998"},
      {"id": "gp_b3", "title": "Projective Geometry", "author": "H.S.M. Coxeter", "edition": "Springer-Verlag, 1994"},
      {"id": "gp_b4", "title": "Foundations of Projective Geometry", "author": "R. Hartshorne", "edition": "W.A. Benjamin, 1967"},
      {"id": "gp_b5", "title": "Projective Geometry and its Application to Computer Graphics", "author": "M.A. Penna", "edition": "Prentice-Hall, 1991"},
      {"id": "gp_b6", "title": "Elementos de Geometría Proyectiva", "author": "A. Seidenberg", "edition": "CECSA, 1965"},
  ]},
  {"tipo": "opt1", "matId": "graficas_y_juegos", "subject": "Gráficas y Juegos", "books": [
      {"id": "gyj_b1", "title": "Graphs", "author": "C. Berge", "edition": "North Holland, 1985"},
      {"id": "gyj_b2", "title": "Graph Theory with Applications", "author": "J.A. Bondy & U.S. Murty", "edition": "Macmillan, 1976"},
      {"id": "gyj_b3", "title": "Introductory Graph Theory", "author": "G. Chartrand", "edition": "Dover Publications, 1977"},
      {"id": "gyj_b4", "title": "Graph Theory", "author": "F. Harary", "edition": "Addison-Wesley, 1969"},
  ]},
  {"tipo": "opt1", "matId": "icc1", "subject": "Introducción a Ciencias de la Computación I", "books": [
      {"id": "icc1_b1", "title": "Fundamentals of Computing I", "author": "A.B. Tucker et al.", "edition": "2ª ed. McGraw-Hill, 1994"},
      {"id": "icc1_b2", "title": "Computer Science", "author": "S.J. Warford", "edition": "D.C. Heath and Company, 1991"},
      {"id": "icc1_b3", "title": "Professional Software, Vol. I", "author": "H. Ledgard; J. Tauer", "edition": "Addison-Wesley, 1987"},
      {"id": "icc1_b4", "title": "Professional Software, Vol. II", "author": "H. Ledgard; J. Tauer", "edition": "Addison-Wesley, 1987"},
      {"id": "icc1_b5", "title": "A Human Activity", "author": "P. Naur", "edition": "ACM Press/Addison-Wesley, 1992"},
  ]},
  {"tipo": "opt1", "matId": "icc_2", "subject": "Introducción a Ciencias de la Computación II", "books": [
      {"id": "icc2_b1", "title": "Fundamentals of Computing II", "author": "Tucker, Bradley, Cupper, Epstein & Kelemen", "edition": "McGraw-Hill, 1994"},
      {"id": "icc2_b2", "title": "Estructuras de Datos", "author": "M. Magidin", "edition": "Editorial Trillas, 1991"},
  ]},
  {"tipo": "opt1", "matId": "intro_geometria_avanzada", "subject": "Introducción a la Geometría Avanzada", "books": [
      {"id": "iga_b1", "title": "Fundamentos de Geometría", "author": "H.S.M. Coxeter", "edition": "Limusa-Wiley, 1971"},
      {"id": "iga_b2", "title": "Projective Geometry", "author": "H.S.M. Coxeter", "edition": "Springer-Verlag, 1994"},
      {"id": "iga_b3", "title": "Non-euclidean Geometry", "author": "H.S.M. Coxeter", "edition": "MAA, 1998"},
      {"id": "iga_b4", "title": "Geometry Revisited", "author": "H.S.M. Coxeter", "edition": "MAA, 1983"},
      {"id": "iga_b5", "title": "Introducción a la Geometría Avanzada", "author": "A. Ramírez-Galarza & J. Seade", "edition": "Las Prensas de Ciencias, UNAM, 2005"},
      {"id": "iga_b6", "title": "Invitación a las Geometrías No-euclideanas", "author": "A. Ramírez-Galarza & G. Sienra", "edition": "Las Prensas de Ciencias, UNAM, 2000"},
      {"id": "iga_b7", "title": "Geometry and the Imagination", "author": "D. Hilbert & S. Cohn-Vossen", "edition": "Vínculos Matemáticos 150, FC-UNAM, 2000"},
      {"id": "iga_b8", "title": "Transformation Geometry: An Introduction to Symmetry", "author": "G. Martin", "edition": "Springer-Verlag, 1997"},
  ]},
  {"tipo": "opt1", "matId": "matematicas_discretas", "subject": "Matemáticas Discretas", "books": [
      {"id": "md_b1", "title": "Mathematical Structures For Computer Science", "author": "J.L. Gersting", "edition": "3ª ed. W.H. Freeman, 1993"},
      {"id": "md_b2", "title": "A Logical Approach to Discrete Math", "author": "D. Gries & F.B. Schneider", "edition": "Springer-Verlag, 1994"},
  ]},
  {"tipo": "opt1", "matId": "mecanica_vectorial", "subject": "Mecánica Vectorial", "books": [
      {"id": "mv_b1", "title": "Física", "author": "M. Alonso; J.E. Finn", "edition": "Addison Wesley Iberoamericana, 1999"},
      {"id": "mv_b2", "title": "Physics for Scientists & Engineers", "author": "D. Giancoli", "edition": "3ª ed. Prentice Hall, 2000"},
      {"id": "mv_b3", "title": "Fundamentals of Physics", "author": "D. Halliday; R. Resnick; J. Walker", "edition": "5ª ed. John Wiley & Sons, 1997"},
      {"id": "mv_b4", "title": "Mecánica (Berkeley Physics Course, Vol. 1)", "author": "Ch. Kittel; W.D. Knight; M.A. Ruderman", "edition": "Reverté, 1989"},
      {"id": "mv_b5", "title": "Física para ingeniería y ciencias, Vol. 1", "author": "H.C. Ohanian; J.T. Markert", "edition": "3ª ed. McGraw-Hill, 2009"},
      {"id": "mv_b6", "title": "Física, Vol. I", "author": "R.A. Serway; J.W. Jewett", "edition": "6ª ed. Thomson, 2005"},
      {"id": "mv_b7", "title": "Newtonian Mechanics", "author": "A.P. French", "edition": "W.W. Norton, 1971"},
  ]},
  {"tipo": "opt1", "matId": "probabilidad_1", "subject": "Probabilidad I", "books": [
      {"id": "prob1_b1", "title": "An Introduction to Probability Theory and its Applications Vol. I", "author": "W. Feller", "edition": "Wiley, 1968"},
      {"id": "prob1_b2", "title": "The Theory of Probability", "author": "B.V. Gnedenko", "edition": "Chelsea, 1975"},
      {"id": "prob1_b3", "title": "Introduction to Probability Theory", "author": "P.G. Hoel, S.C. Port & C.J. Stone", "edition": "Houghton Mifflin, 1971"},
      {"id": "prob1_b4", "title": "Introduction to the Theory of Statistics", "author": "A.M. Mood, F.A. Graybill & D.C. Boes", "edition": "3ª ed. McGraw-Hill, 1974"},
      {"id": "prob1_b5", "title": "A First Course in Probability Theory", "author": "S. Ross", "edition": "5ª ed. Prentice Hall, 1997"},
      {"id": "prob1_b6", "title": "Statistical Inference", "author": "G. Casella & R.L. Berger", "edition": "Thomson Learning, 2002"},
      {"id": "prob1_b7", "title": "Elementary Probability", "author": "D.R. Stirzaker", "edition": "2ª ed. Cambridge University Press, 2003"},
  ]},
  {"tipo": "opt1", "matId": "teoria_numeros_1", "subject": "Teoría de los Números I", "books": [
      {"id": "tn1_b1", "title": "Number Theory", "author": "G. Andrews", "edition": "Dover, 2000"},
      {"id": "tn1_b2", "title": "The Queen of Mathematics", "author": "J. Goldman", "edition": "A.K. Peters, 1998"},
      {"id": "tn1_b3", "title": "Elementary Number Theory", "author": "G. Jones & J. Jones", "edition": "Springer-Verlag, 2001"},
      {"id": "tn1_b4", "title": "Elementary Number Theory with Applications", "author": "T. Koshy", "edition": "Harcourt/Academic Press, 2002"},
      {"id": "tn1_b5", "title": "Elementary Methods in Number Theory", "author": "M. Nathanson", "edition": "Springer-Verlag, 2000"},
      {"id": "tn1_b6", "title": "An Introduction to the Theory of Numbers", "author": "I. Niven, H. Zuckerman & H. Montgomery", "edition": "J. Wiley, 1991"},
      {"id": "tn1_b7", "title": "Aritmética y Teoría de Grupos", "author": "R.M. Pineda", "edition": "UAM-Iztapalapa, 1995"},
      {"id": "tn1_b8", "title": "Fundamentos de la Teoría de los Números", "author": "I. Vinogradov", "edition": "MIR, 1977"},
  ]},
  {"tipo": "opt1", "matId": "teoria_numeros_2", "subject": "Teoría de los Números II", "books": [
      {"id": "tn2_b1", "title": "Introduction to p-adic Numbers and Valuation Theory", "author": "G. Bachman", "edition": "Academic Press, 1964"},
      {"id": "tn2_b2", "title": "Number Theory", "author": "Z.I. Borevich & I.R. Shafarevich", "edition": "Academic Press, 1966"},
  ]},

  # ── LIBRARY_OPT Bloque II (índices 16+) ────────────────────────────────
  {"tipo": "opt2", "matId": "algebra_moderna_2", "subject": "Álgebra Moderna II", "books": [
      {"id": "am2_b1", "title": "Álgebra Abstracta", "author": "J.B. Fraleigh", "edition": "Sistemas Técnicos de Edición, 1988"},
      {"id": "am2_b2", "title": "Álgebra Moderna", "author": "I.N. Herstein", "edition": "Editorial Trillas, 1970"},
      {"id": "am2_b3", "title": "Galois Theory", "author": "I. Stewart", "edition": "Chapman and Hall, 2004"},
  ]},
  {"tipo": "opt2", "matId": "analisis_algoritmos_1", "subject": "Análisis de Algoritmos I", "books": [
      {"id": "aa1_b1",  "title": "Applied and Algorithmic Graph Theory", "author": "G. Chartrand; O.R. Oellermann", "edition": "McGraw-Hill, 1993"},
      {"id": "aa1_b2",  "title": "Introduction to Algorithms", "author": "T.H. Cormen et al.", "edition": "McGraw-Hill, 1990"},
      {"id": "aa1_b3",  "title": "Practical Algorithms in C++", "author": "B. Flamig", "edition": "Wiley, 1995"},
      {"id": "aa1_b4",  "title": "The Art of Computer Programming, Vol. I", "author": "D.E. Knuth", "edition": "Addison-Wesley, 1973"},
      {"id": "aa1_b5",  "title": "Algorithms and Data Structures", "author": "J. Kingston", "edition": "Addison-Wesley, 1990"},
      {"id": "aa1_b6",  "title": "Introduction to Algorithms: A Creative Approach", "author": "U. Manber", "edition": "Addison-Wesley, 1989"},
      {"id": "aa1_b7",  "title": "Data Structures and Algorithms, Vol. I", "author": "K. Mehlhorn", "edition": "Springer-Verlag, 1984"},
      {"id": "aa1_b8",  "title": "Foundations of Algorithms", "author": "R. Neapolitan; K. Naimipour", "edition": "Jones and Bartlett, 1998"},
      {"id": "aa1_b9",  "title": "Compared to What?", "author": "G.J.E. Rawlins", "edition": "Computer Science Press, 1991"},
      {"id": "aa1_b10", "title": "The Algorithm Design Manual", "author": "S.S. Skiena", "edition": "Springer-Verlag, 1998"},
      {"id": "aa1_b11", "title": "Data Structures and Algorithm Analysis in C++", "author": "M.A. Weiss", "edition": "Addison-Wesley, 1999"},
      {"id": "aa1_b12", "title": "Data Structures: An Object Oriented Approach", "author": "W.J. Collins", "edition": "Addison-Wesley, 1992"},
  ]},
  {"tipo": "opt2", "matId": "arquitectura_computadoras", "subject": "Arquitectura de Computadoras", "books": [
      {"id": "ac_b1", "title": "Computer Architecture: A Quantitative Approach", "author": "J.L. Hennessy; D.A. Patterson", "edition": "3ª ed. Morgan Kaufmann, 2003"},
      {"id": "ac_b2", "title": "Computer Organization", "author": "V.C. Hamacher; Z. Vranesic; S. Zaky", "edition": "5ª ed. McGraw-Hill, 2002"},
      {"id": "ac_b3", "title": "Logic and Computer Design Fundamentals", "author": "M. Mano; C.R. Kime", "edition": "2ª ed. Prentice Hall, 2000"},
      {"id": "ac_b4", "title": "Principles of Computer Architecture", "author": "M.J. Murdocca; V.P. Heuring", "edition": "Prentice Hall, 2000"},
      {"id": "ac_b5", "title": "Computer Organization and Design", "author": "D. Patterson; J. Hennessy", "edition": "Morgan Kaufmann, 1998"},
      {"id": "ac_b6", "title": "Structured Computer Organization", "author": "A.S. Tanenbaum", "edition": "4ª ed. Prentice Hall, 1999"},
      {"id": "ac_b7", "title": "Computer Organization and Architecture", "author": "W. Stallings", "edition": "Prentice Hall, 1999"},
  ]},
  {"tipo": "opt2", "matId": "calculo_variaciones", "subject": "Cálculo de Variaciones", "books": [
      {"id": "cv_b1", "title": "Methods of Mathematical Physics, Vol. I", "author": "R. Courant; D. Hilbert", "edition": "Wiley Interscience, 1953"},
      {"id": "cv_b2", "title": "Cálculo de Variaciones", "author": "J. Ize", "edition": "UNAM"},
      {"id": "cv_b3", "title": "Variational Calculus with Elementary Convexity", "author": "J.L. Troutman", "edition": "Springer, 1983"},
      {"id": "cv_b4", "title": "Calculus of Variations", "author": "I.M. Gelfand; S.V. Fomin", "edition": "Prentice Hall, 1963"},
      {"id": "cv_b5", "title": "Ecuaciones Diferenciales y Cálculo Variacional", "author": "L.E. El'sgol'c", "edition": "MIR, 1977"},
      {"id": "cv_b6", "title": "Lectures on the Calculus of Variations", "author": "G.A. Bliss", "edition": "University of Chicago, 1957"},
  ]},
  {"tipo": "opt2", "matId": "economia_1", "subject": "Economía I", "books": [
      {"id": "eco1_b1", "title": "Teoría Económica en Retrospección", "author": "M. Blaug", "edition": "FCE, 1985"},
      {"id": "eco1_b2", "title": "Macroeconomía", "author": "R. Dornbusch; S. Fischer", "edition": "McGraw-Hill, 1991"},
      {"id": "eco1_b3", "title": "Macroeconomía", "author": "R. Hall; J. Taylor", "edition": "Antoni Bosch, 1991"},
      {"id": "eco1_b4", "title": "Microeconomic Theory", "author": "A. Mas-Colell et al.", "edition": "Oxford University Press, 1995"},
      {"id": "eco1_b5", "title": "Microeconomic Analysis", "author": "H. Varian", "edition": "W.W. Norton, 1992"},
      {"id": "eco1_b6", "title": "Economía Intermedia: Un Enfoque Moderno", "author": "H. Varian", "edition": "Antoni Bosch, 1992"},
  ]},
  {"tipo": "opt2", "matId": "ecuaciones_diferenciales_2", "subject": "Ecuaciones Diferenciales II", "books": [
      {"id": "ed2_b1", "title": "The Qualitative Theory of Ordinary Differential Equations", "author": "F. Brauer; J.A. Nohel", "edition": "Dover, 1989"},
      {"id": "ed2_b2", "title": "Differential Equations, Dynamical Systems and Linear Algebra", "author": "M.W. Hirsch; S. Smale", "edition": "Academic Press, 1974"},
      {"id": "ed2_b3", "title": "Nonlinear Ordinary Differential Equations", "author": "D.W. Jordan; P. Smith", "edition": "Oxford University Press, 1994"},
      {"id": "ed2_b4", "title": "Nonlinear Differential Equations and Dynamical Systems", "author": "F. Verhulst", "edition": "Springer-Verlag, 1980"},
      {"id": "ed2_b5", "title": "Ordinary Differential Equations", "author": "V.I. Arnold", "edition": "3ª ed. Springer-Verlag, 1991"},
      {"id": "ed2_b6", "title": "Dynamics and Bifurcations", "author": "J. Hale; H. Kocak", "edition": "Springer-Verlag, 1991"},
      {"id": "ed2_b7", "title": "Differential Equations and Dynamical Systems", "author": "L. Perko", "edition": "Springer-Verlag, 1990"},
  ]},
  {"tipo": "opt2", "matId": "electromagnetismo_2", "subject": "Electromagnetismo II", "books": [
      {"id": "em2_b1", "title": "Foundations of Electromagnetic Theory", "author": "J.R. Reitz; F.J. Milford; R.W. Christy", "edition": "Addison-Wesley, 1979"},
      {"id": "em2_b2", "title": "Electromagnetic Fields and Waves", "author": "P. Lorrain; D.R. Corson", "edition": "W.H. Freeman, 1970"},
      {"id": "em2_b3", "title": "Electricity and Magnetism", "author": "O.D. Jelimenko", "edition": "Appleton Century Coft, 1966"},
      {"id": "em2_b4", "title": "Classical Electromagnetic Theory", "author": "J. Vanderlinde", "edition": "Wiley, 1993"},
      {"id": "em2_b5", "title": "The Theory of the Electromagnetic Field", "author": "D.M. Cook", "edition": "Prentice-Hall, 1975"},
      {"id": "em2_b6", "title": "Electromagnetic Fields", "author": "R.K. Wangsness", "edition": "Wiley, 1979"},
      {"id": "em2_b7", "title": "An Introduction to Electromagnetic Theory", "author": "P.C. Clemow", "edition": "Cambridge University Press, 1973"},
      {"id": "em2_b8", "title": "Introduction to Electrodynamics", "author": "D.J. Griffiths", "edition": "Prentice-Hall, 1989"},
      {"id": "em2_b9", "title": "Classical Electromagnetic Radiation", "author": "M.A. Heald; J.B. Marion", "edition": "Saunders, 1995"},
  ]},
  {"tipo": "opt2", "matId": "estadistica_1", "subject": "Estadística I", "books": [
      {"id": "est1_b1", "title": "Probabilidad y Estadística: Aplicaciones y Métodos", "author": "G.C. Canavos", "edition": "McGraw-Hill, 1987"},
      {"id": "est1_b2", "title": "Statistical Inference", "author": "G. Casella; R.L. Berger", "edition": "Wadsworth, 1990"},
      {"id": "est1_b3", "title": "Probability and Statistics", "author": "M.H. Degroot", "edition": "Addison-Wesley, 1986"},
      {"id": "est1_b4", "title": "Introduction to Mathematical Statistics", "author": "R.V. Hogg; A.T. Craig", "edition": "5ª ed. Prentice-Hall, 1995"},
      {"id": "est1_b5", "title": "An Introduction to Mathematical Statistics and its Applications", "author": "R.J. Larsen; M.L. Marx", "edition": "Prentice-Hall, 1986"},
      {"id": "est1_b6", "title": "Statistical Theory", "author": "B.W. Lindgren", "edition": "Macmillan, 1976"},
      {"id": "est1_b7", "title": "Introduction to the Theory of Statistics", "author": "A.M. Mood; F.A. Graybill; D.C. Boes", "edition": "McGraw-Hill, 1974"},
      {"id": "est1_b8", "title": "Exploratory Data Analysis", "author": "J.W. Tukey", "edition": "Addison-Wesley, 1977"},
  ]},
  {"tipo": "opt2", "matId": "estadistica_2", "subject": "Estadística II", "books": [
      {"id": "est2_b1", "title": "Practical Nonparametric Statistics", "author": "W.J. Conover", "edition": "2ª ed. Wiley, 1980"},
      {"id": "est2_b2", "title": "Applied Nonparametric Statistics", "author": "W. Daniel", "edition": "2ª ed. PWS Kent, 1990"},
      {"id": "est2_b3", "title": "Nonparametric Statistical Inference", "author": "G. Gibbons; S. Chakraborti", "edition": "4ª ed. Marcel Dekker, 2003"},
      {"id": "est2_b4", "title": "Regression Analysis by Example", "author": "S. Chatterjee; B. Price", "edition": "2ª ed. Wiley, 1991"},
      {"id": "est2_b5", "title": "Applied Regression Analysis", "author": "N. Draper; H. Smith", "edition": "2ª ed. Wiley, 1981"},
      {"id": "est2_b6", "title": "Introduction to Linear Regression Analysis", "author": "D.C. Montgomery; E.A. Peck; G.G. Vining", "edition": "3ª ed. Wiley, 2001"},
      {"id": "est2_b7", "title": "Applied Linear Statistical Models", "author": "J. Neter; W. Wasserman; M.H. Kutner", "edition": "3ª ed. Irwin, 1990"},
      {"id": "est2_b8", "title": "Applied Regression Analysis: A Research Tool", "author": "J.O. Rawlings", "edition": "Wadsworth, 1988"},
  ]},
  {"tipo": "opt2", "matId": "geometria_diferencial_1", "subject": "Geometría Diferencial I", "books": [
      {"id": "gd1_b1", "title": "Differential Geometry of Curves and Surfaces", "author": "M.P. Do Carmo", "edition": "Prentice Hall, 1976"},
      {"id": "gd1_b2", "title": "Geometry and the Imagination", "author": "D. Hilbert; S. Cohn-Vossen", "edition": "FC-UNAM, 2000"},
      {"id": "gd1_b3", "title": "Elementary Differential Geometry", "author": "B. O'Neill", "edition": "Academic Press, 1997"},
      {"id": "gd1_b4", "title": "Geometría Diferencial", "author": "A.V. Pogorelov", "edition": "MIR, 1977"},
      {"id": "gd1_b5", "title": "A Comprehensive Introduction to Differential Geometry", "author": "M.A. Spivak", "edition": "Publish or Perish, 1999"},
      {"id": "gd1_b6", "title": "Mathematical Methods of Classical Mechanics", "author": "V.I. Arnold", "edition": "Springer-Verlag, 1989"},
  ]},
  {"tipo": "opt2", "matId": "geometria_diferencial_2", "subject": "Geometría Diferencial II", "books": [
      {"id": "gd2_b1", "title": "Differential Geometry of Curves and Surfaces", "author": "M.P. Do Carmo", "edition": "Prentice Hall, 1976"},
      {"id": "gd2_b2", "title": "Geometry and the Imagination", "author": "D. Hilbert; S. Cohn-Vossen", "edition": "FC-UNAM, 2000"},
      {"id": "gd2_b3", "title": "Elementary Differential Geometry", "author": "B. O'Neill", "edition": "Academic Press, 1997"},
      {"id": "gd2_b4", "title": "Geometría Diferencial", "author": "A.V. Pogorelov", "edition": "MIR, 1977"},
      {"id": "gd2_b5", "title": "Differential Geometry", "author": "J.J. Stoker", "edition": "Wiley-Interscience, 1969"},
      {"id": "gd2_b6", "title": "A Comprehensive Introduction to Differential Geometry", "author": "M.A. Spivak", "edition": "Publish or Perish, 1999"},
  ]},
  {"tipo": "opt2", "matId": "historia_matematicas_1", "subject": "Historia de las Matemáticas I", "books": [
      {"id": "hm1_b1", "title": "Euclid, the Creation of Mathematics", "author": "B. Artmann", "edition": "Springer-Verlag, 1999"},
      {"id": "hm1_b2", "title": "The Beginnings and Evolution of Algebra", "author": "I. Bashmakova; G. Smirnova", "edition": "MAA, 2000"},
      {"id": "hm1_b3", "title": "An Introduction to the History of Mathematics", "author": "H. Eves", "edition": "Saunders College, 1976"},
      {"id": "hm1_b4", "title": "A History of Mathematics: An Introduction", "author": "V. Katz", "edition": "Harper Collins, 1998"},
      {"id": "hm1_b5", "title": "El Pensamiento Matemático de la Antigüedad a Nuestros Días", "author": "M. Kline", "edition": "Alianza Editorial, 1992"},
  ]},
  {"tipo": "opt2", "matId": "historia_matematicas_2", "subject": "Historia de las Matemáticas II", "books": [
      {"id": "hm2_b1", "title": "The Beginnings and Evolution of Algebra", "author": "I. Bashmakova; G. Smirnova", "edition": "MAA, 2000"},
      {"id": "hm2_b2", "title": "The History of Calculus and its Conceptual Development", "author": "C.B. Boyer", "edition": "Dover, 1959"},
      {"id": "hm2_b3", "title": "Elementos de Historia de las Matemáticas", "author": "N. Bourbaki", "edition": "Alianza Editorial, 1969"},
      {"id": "hm2_b4", "title": "A History of Mathematics: An Introduction", "author": "V. Katz", "edition": "Harper Collins, 1998"},
      {"id": "hm2_b5", "title": "El Pensamiento Matemático de la Antigüedad a Nuestros Días", "author": "M. Kline", "edition": "Alianza Editorial, 1992"},
      {"id": "hm2_b6", "title": "Fermat's Last Theorem", "author": "S. Singh", "edition": "Fourth Estate, 1997"},
      {"id": "hm2_b7", "title": "The Elements of Non-Euclidean Geometry", "author": "D.M. Sommerville", "edition": "Dover, 1958"},
  ]},
]

# ── Ruta por tipo ─────────────────────────────────────────────────────────────
def carpeta(mat: dict) -> Path:
    t = mat["tipo"]
    mid = mat["matId"]
    if t == "obl":
        return TEXTO / mid
    if t == "opt1":
        return TEXTO / "optativas" / "bloque_1" / mid
    if t == "opt2":
        return TEXTO / "optativas" / "bloque_2" / mid
    return TEXTO / "optativas" / "bloque_3" / mid

def es_stub(path: Path) -> bool:
    return "% [Por transcribir]" in path.read_text(encoding="utf-8", errors="ignore")

def main() -> None:
    # Crear bloque_3 vacío
    (TEXTO / "optativas" / "bloque_3").mkdir(parents=True, exist_ok=True)

    creados = movidos = saltados = 0

    for mat in MATERIAS:
        dest_carpeta = carpeta(mat)
        dest_carpeta.mkdir(parents=True, exist_ok=True)

        for b in mat["books"]:
            destino = dest_carpeta / f"{b['id']}.tex"

            # Buscar el archivo en ubicaciones anteriores
            origen_plano    = TEXTO / f"{b['id']}.tex"          # antes de la primera reorganización
            origen_mat      = TEXTO / mat["matId"] / f"{b['id']}.tex"   # después de la primera

            for origen in [origen_plano, origen_mat]:
                if origen.exists() and origen != destino:
                    destino.parent.mkdir(parents=True, exist_ok=True)
                    shutil.move(str(origen), str(destino))
                    print(f"  Movido:  {origen.relative_to(TEXTO)}  ->  {destino.relative_to(TEXTO)}")
                    movidos += 1
                    break

            if destino.exists():
                if not es_stub(destino):
                    print(f"  OK (contenido real):  {destino.relative_to(TEXTO)}")
                saltados += 1
                continue

            destino.write_text(
                STUB.format(id=b["id"], title=b["title"], author=b["author"], edition=b["edition"]),
                encoding="utf-8",
            )
            creados += 1

    # Limpiar carpetas de optativas que quedaron en texto/ raíz (de la ejecución anterior)
    opt_ids = {m["matId"] for m in MATERIAS if m["tipo"] != "obl"}
    for mid in opt_ids:
        vieja = TEXTO / mid
        if vieja.exists() and vieja.is_dir():
            # Solo eliminar si está vacía
            remaining = list(vieja.iterdir())
            if not remaining:
                vieja.rmdir()
                print(f"  Eliminada carpeta vacía: texto/{mid}/")

    print(f"\nListo: {creados} stubs creados, {movidos} archivos movidos, {saltados} sin tocar.")
    total = sum(len(m["books"]) for m in MATERIAS)
    print(f"Total: {total} libros en {len(MATERIAS)} materias.")

if __name__ == "__main__":
    main()
