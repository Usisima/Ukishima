const fs = require("fs");
const raw = fs.readFileSync(process.argv[2], "utf8");
let t; try { t = JSON.parse(raw); } catch (e) { t = raw; }
if (t.slice(0, 9) === "plaintext") t = t.slice(t.indexOf("\n") + 1);
const bs = String.fromCharCode(92);
t = t.split(bs + "[").join("$$").split(bs + "]").join("$$")
     .split(bs + "(").join("$").split(bs + ")").join("$").trim();
const OUT = "texto/calculo_1/cd1_b6.tex";
fs.appendFileSync(OUT, "\n\n" + t + "\n", "utf8");
console.log("appended", t.length, "chars; total file", fs.statSync(OUT).size, "bytes");
