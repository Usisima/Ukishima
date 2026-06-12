'use strict';

/* ═══════════════════════════════════════════════════════
   avance.js  —  Sistema solar de materias
   ═══════════════════════════════════════════════════════ */

/* ── MOTION ──────────────────────────────────────────── */
const REDUCED_MOTION = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── STORAGE ─────────────────────────────────────────── */
const SK = 'ukishima_avance_v2';
let _dbCache = null; // write-through: un solo JSON.parse por sesión
function _load()             { if(!_dbCache){ try{_dbCache=JSON.parse(localStorage.getItem(SK)||'null')||{subjects:[],progress:{}};}catch{_dbCache={subjects:[],progress:{}};} } return _dbCache; }
function _persist(d)         { _dbCache=d; localStorage.setItem(SK,JSON.stringify(d)); }
function getSubjects()       { return _load().subjects||[]; }
function saveSubjects(s)     { const d=_load();d.subjects=s;_persist(d); }
function getProgress(id)      { return(_load().progress||{})[id]||{tareas:[],examenes:[],proyectos:[],criterios:[],finalGrade:null}; }
function saveProgress(id,p)   { const d=_load();(d.progress=d.progress||{})[id]=p;_persist(d); }
function getCriterios(id)     { return getProgress(id).criterios||[]; }
function saveCriterios(id, cs) {
  const d = _load();
  const prog = d.progress = d.progress || {};
  if (!prog[id]) prog[id] = { tareas: [], examenes: [], proyectos: [], criterios: [], finalGrade: null };
  prog[id].criterios = cs;
  _persist(d);
}
function calcWeightedGrade(id) {
  const cs = getCriterios(id).filter(c => Number(c.peso) > 0);
  if (!cs.length) return null;
  let contrib = 0, hasAny = false;
  for (const c of cs) {
    const graded = (c.items||[]).filter(i => i.grade != null);
    if (!graded.length) continue;
    const avg = graded.reduce((s,i) => s + i.grade, 0) / graded.length;
    contrib += avg * (Number(c.peso||0) / 100);
    hasAny = true;
  }
  return hasAny ? contrib : null;
}
function getSolarPose()       { return _load().solar||{rotation:0,el:Math.PI/2*0.97}; }
function saveSolarPose(r,el)  { const d=_load();d.solar={rotation:r,el};_persist(d); }
function getHidden()          { return _load().hidden||{}; }
function toggleHidden(id)     { const d=_load();(d.hidden=d.hidden||{})[id]=!d.hidden[id];_persist(d); return !!d.hidden[id]; }
function isHidden(id)         { return !!(_load().hidden||{})[id]; }
function uid()               { return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

/* ── MATERIAS OBLIGATORIAS (Matemáticas FC·UNAM) ─────── */
const DEFAULTS = [
  {id:'algebra_superior_1',        name:'Álgebra Superior I',               semestre:'1', colorIdx:0,  hue:270, profesor:'', dias:[], hora:''},
  {id:'calculo_1',                 name:'Cálculo Diferencial e Integral I',  semestre:'1', colorIdx:1,  hue:305, profesor:'', dias:[], hora:''},
  {id:'geo_analitica_1',           name:'Geometría Analítica I',             semestre:'1', colorIdx:2,  hue:355, profesor:'', dias:[], hora:''},
  {id:'geo_moderna_1',             name:'Geometría Moderna I',               semestre:'1', colorIdx:3,  hue:355, profesor:'', dias:[], hora:''},
  {id:'algebra_superior_2',        name:'Álgebra Superior II',               semestre:'2', colorIdx:4,  hue:215, profesor:'', dias:[], hora:''},
  {id:'calculo_2',                 name:'Cálculo Diferencial e Integral II', semestre:'2', colorIdx:5,  hue:237, profesor:'', dias:[], hora:''},
  {id:'geo_analitica_2',           name:'Geometría Analítica II',            semestre:'2', colorIdx:6,  hue:270, profesor:'', dias:[], hora:''},
  {id:'algebra_lineal_1',          name:'Álgebra Lineal I',                  semestre:'3', colorIdx:7,  hue:152, profesor:'', dias:[], hora:''},
  {id:'calculo_3',                 name:'Cálculo Diferencial e Integral III',semestre:'3', colorIdx:8,  hue:175, profesor:'', dias:[], hora:''},
  {id:'algebra_lineal_2',          name:'Álgebra Lineal II',                 semestre:'4', colorIdx:9,  hue:78,  profesor:'', dias:[], hora:''},
  {id:'calculo_4',                 name:'Cálculo Diferencial e Integral IV', semestre:'4', colorIdx:10, hue:110, profesor:'', dias:[], hora:''},
  {id:'ecuaciones_diferenciales_1',name:'Ecuaciones Diferenciales I',        semestre:'4', colorIdx:11, hue:82,  profesor:'', dias:[], hora:''},
  {id:'algebra_moderna_1',         name:'Álgebra Moderna I',                 semestre:'5', colorIdx:0,  hue:15,  profesor:'', dias:[], hora:''},
  {id:'analisis_matematico_1',     name:'Análisis Matemático I',             semestre:'5', colorIdx:1,  hue:45,  profesor:'', dias:[], hora:''},
  {id:'variable_compleja_1',       name:'Variable Compleja I',               semestre:'5', colorIdx:2,  hue:50,  profesor:'', dias:[], hora:''},
  {id:'analisis_matematico_2',     name:'Análisis Matemático II',            semestre:'6', colorIdx:3,  hue:5,   profesor:'', dias:[], hora:''},
];

/* ── SEMESTER ORDINALS ───────────────────────────────── */
const SEM_ORD = ['','Primer','Segundo','Tercer','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];

/* ═══════════════════════════════════════════════════════
   SISTEMA DE COLOR — idéntico a estadisticas.html
   ═══════════════════════════════════════════════════════
   extractVibrant: elige el píxel con mayor score de
   (saturación × proximidad a mid-lightness 0.52).
   Los resultados se cachean en ukishima_vibrant y se
   aplican a las cards DESPUÉS de que la imagen carga,
   igual que colorizeCards() en estadisticas.html.        */

var _vibCv  = null;
var _vibCtx = null;
function _vibrantCtx() {
  if (!_vibCv) {
    _vibCv = document.createElement('canvas');
    _vibCv.width = _vibCv.height = 20;
    _vibCtx = _vibCv.getContext('2d', { willReadFrequently: true });
  }
  return _vibCtx;
}

function _extractVibrant(imgEl) {
  return _extractVibrantL(imgEl, 0.25, 1) || _extractVibrantL(imgEl, 0, 1);
}

function _vibrantCache() {
  try { return JSON.parse(localStorage.getItem('ukishima_vibrant') || '{}'); }
  catch { return {}; }
}

function _saveVibrant(src, hex) {
  try {
    var vc = _vibrantCache(); vc[src] = hex;
    localStorage.setItem('ukishima_vibrant', JSON.stringify(vc));
  } catch(e) {}
}

function _hexToH(hex) {
  return _hexToHSL(hex).h;
}
/* Convierte hex → {h, s, l} con valores reales (sin normalizar) */
function _hexToHSL(hex) {
  var r=parseInt(hex.slice(1,3),16)/255, g=parseInt(hex.slice(3,5),16)/255, b=parseInt(hex.slice(5,7),16)/255;
  var mx=Math.max(r,g,b), mn=Math.min(r,g,b), d=mx-mn;
  var l=(mx+mn)/2;
  var s=d<1e-6?0:(l>0.5?d/(2-mx-mn):d/(mx+mn));
  var h=0;
  if(d>1e-6){if(mx===r)h=((g-b)/d%6)*60;else if(mx===g)h=((b-r)/d+2)*60;else h=((r-g)/d+4)*60;if(h<0)h+=360;}
  return {h:Math.round(h), s:Math.round(s*100), l:Math.round(l*100)};
}
/* bg con H y S reales del ícono, L oscurecida — igual que estadísticas pero oscuro */
function _hexToBg(hex) {
  var c=_hexToHSL(hex);
  var bgL=Math.max(Math.round(c.l*0.15),7);
  return 'hsla('+c.h+','+c.s+'%,'+bgL+'%,0.76)';
}

/* ── API de color (fallback para render inicial) ────── */
function getColor(h) {
  return { bg:'hsla('+h+',75%,10%,0.7)', ac:'hsl('+h+',75%,65%)' };
}
function getSubColor(sub) {
  var entry = _findInData(sub);
  var icon  = (entry && entry.icon) || sub.icon || 'assets/images/d0.webp';
  var key = _cacheKey(sub.id || '', icon);
  var hex = _vibrantCache()[key] || _vibrantCache()[icon];
  if (hex) return { bg: hex+'80', ac: hex };
  var def = DEFAULTS.find(function(d){ return d.id===sub.id; });
  var h = (def && def.hue!=null) ? def.hue
        : (entry && entry.colorIdx!=null) ? (entry.colorIdx*30)%360
        : ((sub.colorIdx||0)*30)%360;
  return getColor(h);
}

/* ── 4 esquemas de extracción de color ─────────────────────
   Tronco común: filtro estricto L ∈ [0.20, 0.75] — excluye
   píxeles muy blancos y muy negros, garantiza colores vívidos.
   Optativas (cada bloque): sin restricción de L.             */

var _TRONCO_IDS = (function() {
  var s = {};
  DEFAULTS.forEach(function(d){ s[d.id] = true; });
  return s;
})();

/* Determina la clave de cache según el tipo de materia */
function _cacheKey(subId, icon) {
  return _TRONCO_IDS[subId] ? 'ukishima_tronco_v:' + icon
                             : 'ukishima_opt_v:'    + icon;
}

/* extractVibrant con rango de luminosidad configurable */
function _extractVibrantL(imgEl, minL, maxL) {
  try {
    var c = _vibrantCtx();
    c.clearRect(0,0,20,20); c.drawImage(imgEl,0,0,20,20);
    var px = c.getImageData(0,0,20,20).data;
    var best=-1, br=px[0], bg_=px[1], bb=px[2];
    for (var i=0;i<px.length;i+=4) {
      var rn=px[i]/255, gn=px[i+1]/255, bn=px[i+2]/255;
      var mx=Math.max(rn,gn,bn), mn=Math.min(rn,gn,bn);
      var l=(mx+mn)/2;
      if (l < minL || l > maxL) continue;
      var d=mx-mn, s=d===0?0:d/(1-Math.abs(2*l-1));
      var sc=s*(1-Math.abs(l-0.52)*1.6);
      if(sc>best){best=sc;br=px[i];bg_=px[i+1];bb=px[i+2];}
    }
    if (best < 0 && (minL > 0 || maxL < 1)) return null; // sin resultado con filtro estricto
    var h2=function(v){return('0'+Math.round(v).toString(16)).slice(-2);};
    return '#'+h2(br)+h2(bg_)+h2(bb);
  } catch(e){ return null; }
}

function _syncCardVis(instant) {
  const cards   = document.querySelectorAll('.av-card[data-sub]');
  const anyHide = [...cards].some(c => isHidden(c.dataset.sub));
  if (instant) {
    cards.forEach(c => {
      c.style.transition = 'none';
      c.classList.toggle('av-card--dimmed', anyHide && isHidden(c.dataset.sub));
    });
    requestAnimationFrame(() => cards.forEach(c => { c.style.transition = ''; }));
  } else {
    cards.forEach(c => c.classList.toggle('av-card--dimmed', anyHide && isHidden(c.dataset.sub)));
  }
}

function _colorizeAvCards() {
  var vc = _vibrantCache();
  document.querySelectorAll('.av-card').forEach(function(card) {
    var subId = card.getAttribute('data-sub') || '';
    var img   = card.querySelector('.av-card-icon img');
    if (!img) return;
    var src   = img.getAttribute('src') || '';
    var key   = _cacheKey(subId, src);
    var isTronco = !!_TRONCO_IDS[subId];

    function applyHex(hex) {
      card.style.background = hex+'80';
      var progress = card.querySelector('.av-card-progress');
      if (progress) progress.style.background = hex+'28';
      var bar = card.querySelector('.av-card-bar');
      if (bar) bar.style.background = hex;
      var trackPath = card.querySelector('.av-bar-track');
      var fillPath  = card.querySelector('.av-bar-fill');
      if (trackPath) trackPath.style.fill = hexRgba(hex, 0.22);
      if (fillPath)  fillPath.style.fill  = hex;
      var grupoEl = card.querySelector('.av-notch-grupo');
      if (grupoEl) grupoEl.style.color = hex;
      card.querySelectorAll('.av-day-dot--on').forEach(function(dot) {
        dot.style.background = hex;
        dot.style.borderColor = hex;
        dot.style.color = 'rgba(0,0,0,0.75)';
      });
      card.querySelectorAll('.av-day-dot--clase').forEach(function(dot) {
        dot.style.background = hex;
        dot.style.color = 'rgba(0,0,0,0.75)';
        /* border-color stays white per CSS — no override */
      });
    }

    function apply(imgEl) {
      /* Tronco: filtra blancos/negros; optativas: sin filtro */
      var hex = isTronco
        ? (_extractVibrantL(imgEl, 0.20, 0.75) || _extractVibrant(imgEl))
        : _extractVibrant(imgEl);
      if (!hex) return;
      applyHex(hex);
      try {
        var cur = _vibrantCache();
        cur[key] = hex;
        localStorage.setItem('ukishima_vibrant', JSON.stringify(cur));
      } catch(e) {}
    }

    /* Cache hit */
    if (key && vc[key]) {
      applyHex(vc[key]);
      return;
    }
    if (img.complete && img.naturalWidth > 0) { apply(img); }
    else { img.addEventListener('load', function(){ apply(img); }, {once:true}); }
  });
}

function _colorizeDetailHero(sub) {
  var img = document.querySelector('.av-hero-card .av-card-icon img');
  if (!img) return;
  var src = img.getAttribute('src') || 'assets/images/d0.webp';
  var key = _cacheKey(sub.id, src);
  var vc  = _vibrantCache();
  var hex = vc[key] || vc[src];

  function applyDetail(hex) {
    document.body.style.setProperty('--sub-ac', hex);
    document.body.style.setProperty('--sub-bg', hexRgba(hex, 0.10));
    document.body.style.setProperty('--sub-br', hexRgba(hex, 0.21));
    var hero = document.querySelector('.av-hero-card');
    if (!hero) return;
    hero.style.background = hexRgba(hex, 0.50);
    var track = hero.querySelector('.av-card-progress');
    if (track) track.style.background = hexRgba(hex, 0.16);
    var bar = hero.querySelector('.av-card-bar');
    if (bar) bar.style.background = hex;
    var trackPath = hero.querySelector('.av-bar-track');
    var fillPath  = hero.querySelector('.av-bar-fill');
    if (trackPath) trackPath.style.fill = hexRgba(hex, 0.22);
    if (fillPath)  fillPath.style.fill  = hex;
    var grupoEl = hero.querySelector('.av-notch-grupo');
    if (grupoEl) grupoEl.style.color = hex;
    hero.querySelectorAll('.av-day-dot--on').forEach(function(dot) {
      dot.style.background = hex;
      dot.style.borderColor = hex;
      dot.style.color = 'rgba(0,0,0,0.75)';
    });
    hero.querySelectorAll('.av-day-dot--clase').forEach(function(dot) {
      dot.style.background = hex;
      dot.style.color = 'rgba(0,0,0,0.75)';
    });
    document.querySelectorAll('.av-sec-add').forEach(function(btn) {
      btn.style.background = hexRgba(hex, 0.10);
      btn.style.borderColor = hexRgba(hex, 0.21);
      btn.style.color = hex;
    });
    document.querySelectorAll('.av-crit-peso-inp').forEach(function(inp) {
      inp.style.background = hexRgba(hex, 0.10);
      inp.style.borderColor = hexRgba(hex, 0.21);
      inp.style.color = hex;
    });
    document.querySelectorAll('.av-folder[data-cid] .av-grade-inp').forEach(function(inp) {
      inp.style.background = '';
      inp.style.borderColor = '';
    });
    var folderBg = hexRgba(hex, 0.13);
    document.querySelectorAll('.av-folder-body').forEach(function(el) {
      el.style.background = folderBg;
    });
    document.querySelectorAll('.av-folder-tab').forEach(function(el) {
      el.style.background = folderBg;
      el.style.setProperty('--folder-bg', folderBg);
    });
  }

  if (hex) { applyDetail(hex); return; }

  var isTronco = !!_TRONCO_IDS[sub.id];
  function tryExtract(imgEl) {
    var h = isTronco ? (_extractVibrantL(imgEl, 0.20, 0.75) || _extractVibrant(imgEl)) : _extractVibrant(imgEl);
    if (!h) return;
    try { var cur = _vibrantCache(); cur[key] = h; localStorage.setItem('ukishima_vibrant', JSON.stringify(cur)); } catch(e) {}
    applyDetail(h);
  }
  if (img.complete && img.naturalWidth > 0) tryExtract(img);
  else img.addEventListener('load', function(){ tryExtract(img); }, {once:true});
}

/* ── DATA.JS HELPERS (sujetos del plan de estudios) ─── */
function _allDataMats() {
  const mats = typeof CURRICULUM !== 'undefined' ? CURRICULUM.flatMap(s => s.materias) : [];
  const pools = [
    ['BI',   typeof OPTATIVAS_BLOQUE_I   !== 'undefined' ? OPTATIVAS_BLOQUE_I   : []],
    ['BII',  typeof OPTATIVAS_BLOQUE_II  !== 'undefined' ? OPTATIVAS_BLOQUE_II  : []],
    ['BIII', typeof OPTATIVAS_BLOQUE_III !== 'undefined' ? OPTATIVAS_BLOQUE_III : []],
  ];
  return [...mats, ...pools.flatMap(([key, pool]) => pool.map((opt, i) => ({...opt, id:`opt_${key}_${i}`})))];
}

function _findInData(sub) {
  if (typeof CURRICULUM !== 'undefined')
    for (const s of CURRICULUM) for (const m of s.materias)
      if (m.id === sub.id || m.name === sub.name) return m;
  for (const pool of [
    typeof OPTATIVAS_BLOQUE_I   !== 'undefined' ? OPTATIVAS_BLOQUE_I   : [],
    typeof OPTATIVAS_BLOQUE_II  !== 'undefined' ? OPTATIVAS_BLOQUE_II  : [],
    typeof OPTATIVAS_BLOQUE_III !== 'undefined' ? OPTATIVAS_BLOQUE_III : [],
  ]) for (const m of pool) if (m.name === sub.name) return m;
  return null;
}

/* ── COLOR HELPERS ───────────────────────────────────── */
function hexRgba(color, a) {
  if (color.startsWith('#')) {
    const r=parseInt(color.slice(1,3),16), g=parseInt(color.slice(3,5),16), b=parseInt(color.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  if (color.startsWith('hsl('))  return `hsla(${color.slice(4,-1)},${a})`;
  if (color.startsWith('hsla(')) return color.replace(/,[\d.]+\)$/, `,${a})`);
  return color;
}

/* ── PLANET SVGs (inline, for card thumbnails) ───────── */
const PLANET_FNS = [
  c=>`<circle cx="30" cy="30" r="18" fill="${c}"/>
      <circle cx="37" cy="28" r="18" fill="rgba(0,0,0,.4)"/>
      <line x1="14" y1="21" x2="24" y2="44" stroke="rgba(255,255,255,.22)" stroke-width="3" stroke-linecap="round"/>
      <line x1="20" y1="18" x2="30" y2="41" stroke="rgba(255,255,255,.16)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="26" y1="17" x2="35" y2="38" stroke="rgba(255,255,255,.11)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="13" r="3.5" fill="${c}" opacity=".55"/>`,
  c=>`<ellipse cx="30" cy="30" rx="24" ry="5.5" fill="${c}" opacity=".28"/>
      <circle  cx="30" cy="30" r="16" fill="${c}"/>
      <circle  cx="37" cy="27" r="16" fill="rgba(0,0,0,.4)"/>
      <ellipse cx="30" cy="30" rx="24" ry="5.5" fill="none" stroke="${c}" stroke-width="2.5" opacity=".6"/>
      <circle  cx="52" cy="14" r="2" fill="${c}" opacity=".45"/>`,
  c=>`<circle cx="30" cy="30" r="18" fill="${c}"/>
      <circle cx="37" cy="27" r="18" fill="rgba(0,0,0,.38)"/>
      <circle cx="20" cy="24" r="3.5" fill="rgba(0,0,0,.32)"/>
      <circle cx="20" cy="24" r="3.5" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1"/>
      <circle cx="35" cy="35" r="5"   fill="rgba(0,0,0,.28)"/>
      <circle cx="35" cy="35" r="5"   fill="none" stroke="rgba(255,255,255,.11)" stroke-width="1"/>
      <circle cx="52" cy="14" r="3" fill="${c}" opacity=".5"/>`,
  c=>`<circle  cx="30" cy="30" r="18" fill="${c}"/>
      <ellipse cx="30" cy="22" rx="16" ry="3.5" fill="rgba(0,0,0,.22)"/>
      <ellipse cx="30" cy="30" rx="17" ry="4.5" fill="rgba(0,0,0,.18)"/>
      <ellipse cx="30" cy="38" rx="14" ry="3"   fill="rgba(0,0,0,.2)"/>
      <circle  cx="38" cy="28" r="18" fill="rgba(0,0,0,.36)"/>
      <ellipse cx="21" cy="31" rx="4.5" ry="3" fill="rgba(255,255,255,.2)"/>`,
  c=>`<circle cx="30" cy="30" r="20" fill="${c}" opacity=".2"/>
      <circle cx="30" cy="30" r="15" fill="${c}"/>
      <circle cx="24" cy="26" r="15" fill="rgba(255,255,255,.1)"/>
      <circle cx="37" cy="30" r="15" fill="rgba(0,0,0,.42)"/>
      <circle cx="50" cy="14" r="2.5" fill="${c}" opacity=".6"/>`,
  c=>`<circle cx="25" cy="32" r="15" fill="${c}"/>
      <circle cx="32" cy="30" r="15" fill="rgba(0,0,0,.4)"/>
      <circle cx="45" cy="21" r="9"  fill="${c}" opacity=".65"/>
      <circle cx="49" cy="19" r="9"  fill="rgba(0,0,0,.42)"/>
      <line x1="12" y1="23" x2="20" y2="43" stroke="rgba(255,255,255,.18)" stroke-width="2.5" stroke-linecap="round"/>`,
  c=>`<circle cx="30" cy="30" r="18" fill="${c}"/>
      <path d="M15 27 Q22 19 30 25 Q38 31 45 23" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M13 33 Q21 25 29 31 Q37 37 44 29" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="37" cy="27" r="18" fill="rgba(0,0,0,.38)"/>
      <ellipse cx="20" cy="34" rx="4.5" ry="3" fill="rgba(255,255,255,.22)"/>`,
  c=>`<ellipse cx="30" cy="30" rx="22" ry="4.5" fill="${c}" opacity=".22"/>
      <circle  cx="30" cy="30" r="15" fill="${c}"/>
      <circle  cx="37" cy="27" r="15" fill="rgba(0,0,0,.4)"/>
      <ellipse cx="30" cy="30" rx="22" ry="4.5" fill="none" stroke="${c}" stroke-width="2" opacity=".55"/>
      <circle cx="7"  cy="38" r="2.5" fill="${c}" opacity=".5"/>
      <circle cx="53" cy="20" r="2"   fill="${c}" opacity=".4"/>`,
];
const STAR_DOTS = `
  <circle cx="8" cy="9" r=".8" fill="white" opacity=".3"/>
  <circle cx="52" cy="7" r=".6" fill="white" opacity=".25"/>
  <circle cx="5" cy="47" r=".7" fill="white" opacity=".2"/>
  <circle cx="55" cy="50" r=".5" fill="white" opacity=".3"/>
  <circle cx="7" cy="26" r=".4" fill="white" opacity=".25"/>`;

function mkPlanetSvg(colorIdx, ac) {
  return `<svg viewBox="0 0 60 60" class="av-planet-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${STAR_DOTS}${PLANET_FNS[colorIdx % PLANET_FNS.length](ac)}</svg>`;
}

/* ══════════════════════════════════════════════════════
   SOLAR SYSTEM  (canvas animation)
   ══════════════════════════════════════════════════════ */
const SolarSys = {
  canvas: null, ctx: null, subs: [],
  t: 0, _introT: 0, rotation: 0,
  el: Math.PI/2*0.97,           /* elevation: 0=edge-on, π/2=top-down */
  EL_MIN: 0.06, EL_MAX: Math.PI/2*0.97,
  dragging: false, dragStart: {x:0,y:0,rot:0,el:Math.PI/2*0.97}, dragDx: 0, dragDy: 0,
  velRot: 0, velEl: 0, _trail: [],
  raf: null, stars: null, _W: 0, _H: 0,
  _hits: [],
  _ets:null,_etm:null,_ete:null,_ems:null,_emm:null,_emu:null,
  _imgs: {}, _iconMap: {},

  init(wrap, subs) {
    this.stop();
    this.subs = subs.filter(s => !isHidden(s.id));
    this.t    = 0;
    if (this._introT < 2.6) this._introT = 0;
    const pose = getSolarPose();
    this.rotation = pose.rotation;
    this.el       = pose.el;
    const c   = document.createElement('canvas');
    c.className = 'av-solar-canvas';
    wrap.prepend(c);
    this.canvas = c;
    this.ctx    = c.getContext('2d');
    this._size();
    this._genStars();
    // Precarga d0 antes que cualquier sub — es el planeta por defecto para materias sin icono
    if (!this._imgs['assets/images/d0.webp']) {
      const d0img = new Image();
      d0img.addEventListener('load', () => {
        // Extrae color vibrante para el namespace 'opt' (el único que usa d0 como default)
        const vcKey = 'ukishima_opt_v:assets/images/d0.webp';
        if (!_vibrantCache()[vcKey]) {
          const hex = _extractVibrant(d0img);
          if (hex) _saveVibrant(vcKey, hex);
        }
      }, { once: true });
      d0img.src = 'assets/images/d0.webp';
      this._imgs['assets/images/d0.webp'] = d0img;
    }
    this._preload(this.subs);
    this._bind();
    this._loop();
  },

  _preload(subs) {
    subs.forEach(sub => {
      const dm  = _findInData(sub);
      const src = (dm && dm.icon) || sub.icon || 'assets/images/d0.webp';
      this._iconMap[sub.id] = src;
      const key      = _cacheKey(sub.id, src);
      const isTronco = !!_TRONCO_IDS[sub.id];
      const extract  = img => {
        if (_vibrantCache()[key]) return;
        const hex = isTronco ? _extractVibrantL(img, 0.22, 0.75) : _extractVibrant(img);
        if (hex) _saveVibrant(key, hex);
      };
      if (!this._imgs[src]) {
        const img = new Image();
        img.addEventListener('load', () => extract(img), { once: true });
        img.src = src;
        this._imgs[src] = img;
      } else {
        const img = this._imgs[src];
        if (img.complete && img.naturalWidth > 0) extract(img);
      }
    });
  },

  stop() {
    if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
    const c = this.canvas;
    if (!c) return;
    c.removeEventListener('touchstart', this._ets);
    c.removeEventListener('touchmove',  this._etm);
    c.removeEventListener('touchend',   this._ete);
    c.removeEventListener('mousedown',  this._ems);
    window.removeEventListener('mousemove', this._emm);
    window.removeEventListener('mouseup',   this._emu);
    c.remove();
    this.canvas = null;
  },

  _size() {
    const dpr = devicePixelRatio || 1;
    const W   = this.canvas.parentElement
      ? Math.min(this.canvas.parentElement.clientWidth || window.innerWidth, window.innerWidth)
      : window.innerWidth;
    /* Height = 2*(maxR + padding) so top-down view fits fully */
    const H   = Math.round((W * 0.43 + 26) * 2);
    this._W = W; this._H = H;
    this.canvas.style.width  = W + 'px';
    this.canvas.style.height = H + 'px';
    this.canvas.width  = W * dpr;
    this.canvas.height = H * dpr;
    this.ctx.scale(dpr, dpr);
  },

  _genStars() {
    /* Dim field stars — normalized coords so they stay fixed on screen */
    this.stars = Array.from({length:88}, () => ({
      x: Math.random(), y: Math.random(),
      r: 0.22 + Math.random() * 1.1,
      a: 0.07 + Math.random() * 0.42,
      tp: Math.random() * Math.PI * 2,          /* twinkle phase */
      tf: 0.6 + Math.random() * 1.8,            /* twinkle frequency */
    }));
    /* Brighter stars with cross-spike */
    this.starsBright = Array.from({length:11}, () => ({
      x: Math.random(), y: Math.random(),
      r: 1.1 + Math.random() * 0.9,
      a: 0.30 + Math.random() * 0.50,
    }));
  },

  /* ── Static background: stars + shooting stars (screen-space, disc-independent) ── */
  _drawBg() {
    const {ctx, _W:W, _H:H} = this;
    const t = this.t;

    /* Nebula wisps — two faint radial blobs */
    const nb = (nx,ny,nr,r,g,b,a) => {
      const ng = ctx.createRadialGradient(nx*W,ny*H,0,nx*W,ny*H,nr*W);
      ng.addColorStop(0,`rgba(${r},${g},${b},${a})`);
      ng.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=ng; ctx.fillRect(0,0,W,H);
    };
    nb(0.28, 0.22, 0.38,  88,130,170, 0.028);
    nb(0.72, 0.68, 0.30, 140, 90,175, 0.020);

    /* Dim field stars with twinkle */
    for (const s of this.stars) {
      const tw = 0.80 + 0.20 * Math.sin(s.tp + t * s.tf);
      ctx.globalAlpha = s.a * tw;
      ctx.fillStyle = '#ddeef0';
      ctx.beginPath();
      ctx.arc(s.x*W, s.y*H, s.r, 0, Math.PI*2);
      ctx.fill();
    }

    /* Bright stars with cross-spike */
    for (const s of this.starsBright) {
      ctx.globalAlpha = s.a;
      ctx.fillStyle = '#e8f5f2';
      ctx.beginPath(); ctx.arc(s.x*W, s.y*H, s.r, 0, Math.PI*2); ctx.fill();
      ctx.globalAlpha = s.a * 0.32;
      ctx.strokeStyle = '#e8f5f2'; ctx.lineWidth = 0.55;
      const sp = s.r * 3.5, sx = s.x*W, sy = s.y*H;
      ctx.beginPath();
      ctx.moveTo(sx-sp, sy); ctx.lineTo(sx+sp, sy);
      ctx.moveTo(sx, sy-sp); ctx.lineTo(sx, sy+sp);
      ctx.stroke();
    }


    ctx.globalAlpha = 1;
  },

  _orbitR(idx) {
    const n = this.subs.length, maxR = this._W * 0.43, minR = Math.min(50, maxR * 0.30);
    return n <= 1 ? (minR + maxR) * 0.5 : minR + (maxR - minR) * idx / (n - 1);
  },

  _pos(idx) {
    const r     = this._orbitR(idx);
    const sinEl = Math.sin(this.el);
    const cosEl = Math.cos(this.el);
    const speed = 0.20 / Math.pow(1 + idx * 0.55, 0.72);
    const angle = idx * 2.399 + this.t * speed + this.rotation;
    const cx = this._W * 0.5, cy = this._H * 0.50;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r * sinEl,
      z: Math.sin(angle) * cosEl,   /* 3D-correct depth: 0 when top-down */
      r, angle,
    };
  },

  _draw() {
    const {ctx, _W:W, _H:H} = this;
    const cx = W * 0.5, cy = H * 0.50;
    const TILT = Math.sin(this.el);
    ctx.clearRect(0, 0, W, H);

    // Static background (stars, nebulae, shooting stars) — screen-space, not tied to disc
    this._drawBg();

    // Orbit ellipses — draw-on intro animation (todas arrancan al mismo tiempo, desde el planeta)
    const DUR_MIN = 1.0, DUR_MAX = 2.6;
    const _n = this.subs.length;
    const _maxR = this._W * 0.43, _minR = Math.min(50, _maxR * 0.30);
    for (let i = 0; i < this.subs.length; i++) {
      const r      = this._orbitR(i);
      const tRel   = _n <= 1 ? 0.5 : (r - _minR) / (_maxR - _minR);
      const dur    = DUR_MIN + (DUR_MAX - DUR_MIN) * tRel;
      const prog   = Math.max(0, Math.min(1, this._introT / dur));
      if (prog <= 0) continue;

      const speed_i = 0.20 / Math.pow(1 + i * 0.55, 0.72);
      const startA  = i * 2.399 + this.t * speed_i + this.rotation;
      const endA    = startA + prog * Math.PI * 2;

      // Arco restante — porción aún no trazada, tenue, estática
      if (prog < 1) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * TILT, 0, endA, startA + Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.045)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Arco activo — trazo que avanza
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * TILT, 0, startA, endA);
      ctx.strokeStyle = prog < 1
        ? `rgba(255,255,255,${(0.10 + (1 - prog) * 0.12).toFixed(2)})`
        : 'rgba(255,255,255,0.10)';
      ctx.lineWidth = prog < 1 ? 1.4 : 1;
      ctx.stroke();

      // Punto luminoso — se atenúa suavemente al completar la órbita
      const FADE_FROM = 0.78;
      const glowAlpha = prog < FADE_FROM
        ? 1 - prog * 0.15
        : Math.max(0, 1 - (prog - FADE_FROM) / (1 - FADE_FROM));
      if (glowAlpha > 0.01) {
        const tipX = cx + Math.cos(endA) * r;
        const tipY = cy + Math.sin(endA) * (r * TILT);
        const glow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 7);
        glow.addColorStop(0, 'rgba(255,255,255,0.28)');
        glow.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.save();
        ctx.globalAlpha = glowAlpha;
        ctx.fillStyle = glow;
        ctx.fillRect(tipX - 7, tipY - 7, 14, 14);
        ctx.restore();
      }
    }

    // Central star glow
    const gS = ctx.createRadialGradient(cx, cy, 0, cx, cy, 36);
    gS.addColorStop(0, 'rgba(232,245,242,0.38)');
    gS.addColorStop(0.4, 'rgba(155,191,181,0.13)');
    gS.addColorStop(1, 'rgba(155,191,181,0)');
    ctx.beginPath(); ctx.arc(cx, cy, 36, 0, Math.PI * 2);
    ctx.fillStyle = gS; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(232,245,242,0.72)'; ctx.fill();

    // Sort back→front
    const sorted = this.subs.map((sub,i) => ({sub, i, pos: this._pos(i)}))
                             .sort((a,b) => a.pos.z - b.pos.z);

    const hits = [];
    for (const {sub, i, pos} of sorted) {
      const {ac} = getSubColor(sub);
      const depth = (pos.z + 1) / 2;
      const pr    = 14 * (0.70 + depth * 0.30);
      const clipR = pr * 0.82;
      const alpha = 0.48 + depth * 0.52;

      ctx.globalAlpha = alpha;

      // Glow halo
      const gP = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, clipR * 2.2);
      gP.addColorStop(0, hexRgba(ac, 0.18));
      gP.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(pos.x, pos.y, clipR * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = gP; ctx.fill();

      // Ícono: imagen dibujada a tamaño pr*2, clippeada al círculo interior (clipR)
      ctx.save();
      ctx.beginPath(); ctx.arc(pos.x, pos.y, clipR, 0, Math.PI * 2);
      ctx.clip();
      const _src = this._iconMap[sub.id] || 'assets/images/d0.webp';
      const _img = this._imgs[_src];
      const _d0  = this._imgs['assets/images/d0.webp'];
      if (_img && _img.complete && _img.naturalWidth > 0) {
        ctx.drawImage(_img, pos.x - pr, pos.y - pr, pr * 2, pr * 2);
      } else if (_d0 && _d0.complete && _d0.naturalWidth > 0) {
        // El icono específico aún carga o falló — usar d0 como planeta por defecto
        ctx.drawImage(_d0, pos.x - pr, pos.y - pr, pr * 2, pr * 2);
      } else {
        ctx.fillStyle = ac;
        ctx.beginPath(); ctx.arc(pos.x, pos.y, clipR, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();

      ctx.globalAlpha = 1;

      // Label (doble renglón)
      ctx.globalAlpha = 0.22 + depth * 0.78;
      const fSize = 9;
      ctx.font = `${fSize}px 'DM Sans',sans-serif`;
      ctx.fillStyle = '#e8f5f2';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const lines = wrapLabel(abbrevName(sub.name), 14);
      const lineH = fSize + 1;
      let lblY = pos.y + clipR + 3;
      for (const line of lines) { ctx.fillText(line, pos.x, lblY); lblY += lineH; }
      ctx.globalAlpha = 1;

      hits.push({sub, x: pos.x, y: pos.y, r: clipR * 1.8});
    }
    this._hits = hits;
  },

  _loop() {
    const FPS = 30; let last = 0;
    const tick = ts => {
      this.raf = requestAnimationFrame(tick);
      if (ts - last < 1000/FPS - 1) return;
      last = ts;
      if (!this.dragging) {
        if (!REDUCED_MOTION) {
          this.t += 1/FPS;
          this._introT += 1/FPS;
        } else if (this._introT < 2.6) {
          this._introT = 2.6; /* sin intro: órbitas estáticas, arrastre sigue activo */
        }
        /* Inertia (movimiento iniciado por el usuario, se conserva) */
        if (Math.abs(this.velRot) > 0.0001) {
          this.rotation += this.velRot;
          this.velRot   *= 0.88;
        }
        if (Math.abs(this.velEl) > 0.0001) {
          this.el     = Math.max(this.EL_MIN, Math.min(this.EL_MAX, this.el + this.velEl));
          this.velEl *= 0.88;
          if (this.el <= this.EL_MIN || this.el >= this.EL_MAX) this.velEl = 0;
        }
      }
      this._draw();
    };
    this.raf = requestAnimationFrame(tick);
  },

  _bind() {
    const c = this.canvas;
    const EL_MIN = this.EL_MIN, EL_MAX = this.EL_MAX;

    const rect = () => c.getBoundingClientRect();

    /* Returns true when the client-space point falls inside the orbital disc ellipse.
       Mode is locked at drag-start so crossing the boundary never switches mid-gesture. */
    const isOnDisc = (clientX, clientY) => {
      const r    = rect();
      const lx   = clientX - r.left;
      const ly   = clientY - r.top;
      const maxR = this._W * 0.43;
      const TILT = Math.sin(this.el);
      const ry   = Math.max(maxR * TILT, 24);   /* clamp so edge-on never collapses to 0 */
      const nx   = (lx - this._W * 0.5) / maxR;
      const ny   = (ly - this._H * 0.5) / ry;
      return (nx*nx + ny*ny) <= 1.1;             /* slight margin beyond outermost orbit */
    };

    /* Incremental drag: apply only the delta of this frame.
       Disc mode  → rotation only.
       Free mode  → rotation + elevation. */
    const applyIncr = (clientX, clientY, ddx, ddy) => {
      const ly   = clientY - rect().top;
      const flip = ly < this._H * 0.5 ? 1 : -1;
      const dR   = (ddx * flip / this._W) * Math.PI * 3;
      const dE   = (ddy / this._H) * Math.PI * 0.75;
      this.rotation += dR;
      this.velRot = dR;
      if (this._dragMode === 'free') {
        this.el     = Math.max(EL_MIN, Math.min(EL_MAX, this.el + dE));
        this.velEl  = dE;
      }
    };

    let totalDx = 0, totalDy = 0;

    this._ets = e => {
      if (e.touches.length !== 1) return;
      const tx = e.touches[0].clientX, ty = e.touches[0].clientY;
      /* Reserve left edge (≤18 px) for the browser's swipe-back gesture */
      if (tx <= 18) return;
      this.dragging = true; totalDx = 0; totalDy = 0;
      this.velRot = 0; this.velEl = 0;
      this._prev = { x: tx, y: ty };
      this._dragMode = isOnDisc(tx, ty) ? 'disc' : 'free';
    };
    this._etm = e => {
      if (!this.dragging || e.touches.length !== 1) return;
      e.preventDefault();
      const tx = e.touches[0].clientX, ty = e.touches[0].clientY;
      const ddx = tx - this._prev.x, ddy = ty - this._prev.y;
      totalDx += ddx; totalDy += ddy;
      applyIncr(tx, ty, ddx, ddy);
      this._prev = { x: tx, y: ty };
    };
    this._ete = e => {
      if (!this.dragging) return;
      this.dragging = false;
      saveSolarPose(this.rotation, this.el);
      if (Math.abs(totalDx) < 8 && Math.abs(totalDy) < 8 && e.changedTouches.length) {
        const t = e.changedTouches[0];
        this._tap(t.clientX - rect().left, t.clientY - rect().top);
      }
    };
    this._ems = e => {
      this.dragging = true; totalDx = 0; totalDy = 0;
      this.velRot = 0; this.velEl = 0;
      this._prev = { x: e.clientX, y: e.clientY };
      this._dragMode = isOnDisc(e.clientX, e.clientY) ? 'disc' : 'free';
    };
    this._emm = e => {
      if (!this.dragging) return;
      const ddx = e.clientX - this._prev.x, ddy = e.clientY - this._prev.y;
      totalDx += ddx; totalDy += ddy;
      applyIncr(e.clientX, e.clientY, ddx, ddy);
      this._prev = { x: e.clientX, y: e.clientY };
    };
    this._emu = e => {
      if (!this.dragging) return;
      this.dragging = false;
      saveSolarPose(this.rotation, this.el);
      if (Math.abs(totalDx) < 6 && Math.abs(totalDy) < 6) {
        this._tap(e.clientX - rect().left, e.clientY - rect().top);
      }
    };
    c.addEventListener('touchstart', this._ets, {passive:true});
    c.addEventListener('touchmove',  this._etm, {passive:false});
    c.addEventListener('touchend',   this._ete, {passive:true});
    c.addEventListener('mousedown',  this._ems);
    window.addEventListener('mousemove', this._emm);
    window.addEventListener('mouseup',   this._emu);
  },

  _tap(x, y) {
    for (const h of this._hits) {
      const dx = x - h.x, dy = y - h.y;
      if (dx*dx + dy*dy <= h.r*h.r) {
        Nav.detail(h.sub.id, true);
        /* Suppress the ~300 ms ghost-click the browser fires after touchend
           so it doesn't land on a button that appeared at the same position. */
        const main = document.getElementById('av-main');
        if (main) {
          main.style.pointerEvents = 'none';
          setTimeout(() => { main.style.pointerEvents = ''; }, 380);
        }
        return;
      }
    }
  },
};

/* ── MATH ────────────────────────────────────────────── */
function calcPct(id) {
  const { tareas, examenes } = getProgress(id);
  const parts = [];
  if (tareas.length) parts.push(tareas.filter(t => t.done).length / tareas.length);
  const weighted = calcWeightedGrade(id);
  if (weighted !== null) {
    parts.push(weighted / 10);
  } else {
    const graded = examenes.filter(e => e.grade != null);
    if (graded.length) parts.push(graded.reduce((s, e) => s + e.grade, 0) / graded.length / 10);
  }
  return parts.length ? Math.round(parts.reduce((a, b) => a + b, 0) / parts.length * 100) : 0;
}

function gradeColor(g) {
  if (g==null||isNaN(g)) return 'rgba(232,245,242,.28)';
  if (g<6) return '#d65050'; if (g<7) return '#d6944e'; if (g<8) return '#d6b44e';
  return '#3fc99a';
}

function motivMsg(p) {
  return p===100?'¡Todo al día! 🎉':p>=75?'¡Casi listo!':p>=50?'¡Buen progreso!':p>=25?'¡Sigue adelante!':p>=1?'¡Buen comienzo!':'¡Empieza hoy!';
}

function dueBadge(dueDate, done) {
  if (!dueDate||done) return '';
  const today = new Date(); today.setHours(0,0,0,0);
  const due   = new Date(dueDate+'T00:00:00');
  const diff  = Math.round((due-today)/86400000);
  const mm    = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  if (diff<0)   return `<span class="av-due av-due--overdue">Vencida</span>`;
  if (diff===0) return `<span class="av-due av-due--today">Hoy</span>`;
  if (diff===1) return `<span class="av-due av-due--tomorrow">Mañana</span>`;
  return `<span class="av-due av-due--future">${due.getDate()} ${mm[due.getMonth()]}</span>`;
}

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

/* ── Abreviaciones de nombre para etiquetas de planetas ─ */
function abbrevName(name) {
  const m = name.match(/^Cálculo Diferencial e Integral (I{1,3}|IV)$/);
  if (m) return `Cálculo ${m[1]}`;
  return name;
}

/* ── Etiqueta en dos renglones para planetas ─────────── */
function wrapLabel(name, maxLen) {
  if (name.length <= maxLen) return [name];
  const mid = Math.floor(name.length / 2);
  let best = -1;
  for (let d = 0; d <= 8; d++) {
    if (mid - d > 0        && name[mid - d] === ' ') { best = mid - d; break; }
    if (mid + d < name.length && name[mid + d] === ' ') { best = mid + d; break; }
  }
  if (best < 0) return [name.slice(0, maxLen - 1) + '…'];
  const l1 = name.slice(0, best);
  const l2 = name.slice(best + 1);
  return [
    l1.length > maxLen ? l1.slice(0, maxLen - 1) + '…' : l1,
    l2.length > maxLen ? l2.slice(0, maxLen - 1) + '…' : l2,
  ];
}

/* ── Círculos de días + hora ─────────────────────────── */
function fmtHora(h) {
  if (!h) return '';
  const [hh, mm] = h.split(':').map(Number);
  const ampm = hh >= 12 ? 'PM' : 'AM';
  const h12  = hh % 12 || 12;
  return `${h12}:${String(mm).padStart(2,'0')} ${ampm}`;
}

function mkDaysDots(dias, hora, horaFin, diasAy) {
  const ALL = ['Lun','Mar','Mié','Jue','Vie','Sáb'];
  const LBL = ['L','M','X','J','V','S'];
  const dots = ALL.map((d,i) => {
    const onClase = dias  && dias.includes(d);
    const onAy    = diasAy && diasAy.includes(d);
    const cls = onClase ? ' av-day-dot--clase' : onAy ? ' av-day-dot--on' : '';
    return `<span class="av-day-dot${cls}">${LBL[i]}</span>`;
  }).join('');
  let timeHtml = '';
  if (hora && horaFin) timeHtml = `<span class="av-day-hora">${fmtHora(hora)} – ${fmtHora(horaFin)}</span>`;
  else if (hora)       timeHtml = `<span class="av-day-hora">${fmtHora(hora)}</span>`;
  return `<span class="av-days-wrap">${dots}${timeHtml}</span>`;
}

/* ── Arco SVG adaptativo para grupo·salón ─────────── */
function _mkNotchBar(sub, p) {
  var grupo = sub.grupo || '', salon = sub.salon || '';
  var txt = [grupo, salon].filter(Boolean).join(' · ');
  /* Ancho estimado del texto: DM Mono 9px ≈ 6.2px/char */
  var tw  = Math.ceil(txt.length * 6.2) + 20;
  var cx  = 180, crv = 36;
  var half = Math.min(tw / 2, 100);
  var fl = Math.round(Math.max(cx - half, 70));
  var fr = Math.round(Math.min(cx + half, 290));
  var tl = fl - crv, tr = fr + crv;
  /* S-curve: tangente horizontal en ambos extremos → rampa suave */
  var h = Math.round(crv * 0.5);
  var d = 'M0,12 L'+tl+',12 C'+(tl+h)+',12 '+(fl-h)+',0 '+fl+',0 L'+fr+',0 C'+(fr+h)+',0 '+(tr-h)+',12 '+tr+',12 L360,12 L360,16 L0,16 Z';
  var cw = Math.round(p * 3.6), sid = esc(sub.id);
  return '<div class="av-notch-wrap">'
    +'<svg class="av-bar-svg" viewBox="0 0 360 16" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'
    +'<defs><clipPath id="avfc-'+sid+'"><rect x="0" y="0" width="'+cw+'" height="16"/></clipPath></defs>'
    +'<path class="av-bar-track" d="'+d+'"/>'
    +'<path class="av-bar-fill" d="'+d+'" clip-path="url(#avfc-'+sid+')"/>'
    +'</svg>'
    +'<span class="av-notch-label">'
    +(grupo?'<span class="av-notch-grupo">'+esc(grupo)+'</span>':'')
    +(grupo&&salon?'<span class="av-notch-sep"> · </span>':'')
    +(salon?'<span class="av-notch-salon">'+esc(salon)+'</span>':'')
    +'</span>'
    +'</div>';
}

/* ══════════════════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════════════════ */
const R = {

  /* ── HOME: solar system + cards below ── */
  home() {
    SolarSys.stop();
    document.body.style.removeProperty('--sub-ac');
    document.body.style.removeProperty('--sub-bg');
    document.body.style.removeProperty('--sub-br');
    document.getElementById('av-header-title').textContent = 'Avance';
    document.getElementById('av-back').style.display = 'none';

    const main = document.getElementById('av-main');
    const subs = getSubjects();

    if (!subs.length) {
      main.innerHTML = `
        <div class="av-empty-state">
          <div class="av-empty-icon">
            <svg viewBox="0 0 60 60" width="72" height="72" fill="none">
              ${STAR_DOTS}${PLANET_FNS[0]('rgba(155,191,181,.4)')}
            </svg>
          </div>
          <div class="av-empty-title">Sin materias</div>
          <div class="av-empty-body">Agrega tu primera materia para comenzar.</div>
          <button class="av-add-pill av-empty-add" onclick="A.openSubModal()">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Materia
          </button>
        </div>`;
      return;
    }

    /* Build cards grouped by semestre */
    const bySem = {};
    for (const sub of subs) { const k=sub.semestre||''; (bySem[k]=bySem[k]||[]).push(sub); }
    const semKeys = Object.keys(bySem).sort((a,b) => {
      if(a===''&&b!=='') return -1; if(b===''&&a!=='') return 1; return Number(b)-Number(a);
    });

    let cardsHtml = '';
    for (const sem of semKeys) {
      if (sem) {
        cardsHtml += `
        <div class="av-sem-label">
          <span>${(SEM_ORD[Number(sem)] || `${esc(sem)}°`) + ' Semestre'}</span>
          <button class="av-sem-add" onclick="A.openSubModal('${esc(sem)}')" aria-label="Agregar al semestre ${esc(sem)}">
            <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>`;
      }
      for (const sub of bySem[sem]) {
        const {bg, ac} = getSubColor(sub);
        const prog0    = getProgress(sub.id);
        const p = prog0.finalGrade != null ? 100 : calcPct(sub.id);
        const {tareas,examenes} = prog0;
        const done   = tareas.filter(t=>t.done).length;
        const graded   = examenes.filter(e=>e.grade!=null);
        const avgEx    = graded.length?(graded.reduce((s,e)=>s+e.grade,0)/graded.length).toFixed(1):null;
        const weighted = calcWeightedGrade(sub.id);
        const displayG = prog0.finalGrade!=null ? prog0.finalGrade.toFixed(1) : weighted!==null ? weighted.toFixed(1) : avgEx;
        let chips = '';
        if (tareas.length)   chips += `<span class="av-chip${done===tareas.length?' av-chip--done':''}">${done}/${tareas.length} tareas</span>`;
        if (examenes.length && !weighted) {
          if (avgEx!=null) { const gc=gradeColor(parseFloat(avgEx)); chips+=`<span class="av-chip" style="color:${gc};border-color:${gc}44">${avgEx} prom</span>`; }
          else chips += `<span class="av-chip">${examenes.length} ex.</span>`;
        }

        /* Siempre preferir el ícono actual de data.js sobre el guardado en localStorage */
        const dataMat  = _findInData(sub);
        const icon     = (dataMat && dataMat.icon) || sub.icon || 'assets/images/d0.webp';
        const gradeClr = displayG != null ? gradeColor(parseFloat(displayG)) : ac;

        cardsHtml += `
        <div class="av-card" data-sub="${esc(sub.id)}" onclick="Nav.detail('${esc(sub.id)}')" >
          <button class="av-vis-btn${isHidden(sub.id)?' av-vis-btn--off':''}"
                  onclick="event.stopPropagation();A.toggleVis('${esc(sub.id)}')"
                  aria-label="${isHidden(sub.id)?'Mostrar en sistema solar':'Ocultar en sistema solar'}">
            ${isHidden(sub.id) ? `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>` : `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>`}
          </button>
          <div class="av-card-head">
            <div class="av-card-icon">
              <img src="${esc(icon)}" alt="${esc(sub.name)}" onerror="this.src='assets/images/d0.webp'">
            </div>
            <div class="av-card-info">
              <div class="av-card-name">${esc(sub.name)}</div>
              <div class="av-card-meta-row">
                ${mkDaysDots(sub.dias, sub.hora, sub.horaFin, sub.diasAy)}
              </div>
            </div>
            <span class="av-card-pct" style="color:${gradeClr}">${displayG != null ? displayG : '—'}</span>
          </div>
          ${chips ? `<div class="av-card-foot"><div class="av-card-chips">${chips}</div></div>` : ''}
          ${(sub.grupo||sub.salon)?_mkNotchBar(sub,p):`<div class="av-card-progress"><div class="av-card-bar" style="width:${p}%"></div></div>`}
        </div>`;
      }
    }

    main.innerHTML = `
      <!-- ═══ SOLAR SYSTEM ═══ -->
      <div class="av-solar-wrap" id="av-solar-wrap"></div>

      <!-- ═══ DIVIDER ═══ -->
      <div class="av-cards-divider">
        <span class="av-cards-divider-line"></span>
        <span class="av-cards-divider-label">Materias</span>
        <span class="av-cards-divider-line"></span>
        <button class="av-sem-add" onclick="A.openSubModal()" aria-label="Agregar materia">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </button>
      </div>

      <!-- ═══ CARDS ═══ -->
      ${cardsHtml}`;

    SolarSys.init(document.getElementById('av-solar-wrap'), subs);
    _colorizeAvCards();
    _syncCardVis(true);
  },

  /* ── DETAIL ── */
  detail(subId, noScroll) {
    SolarSys.stop();
    const subs = getSubjects();
    const sub  = subs.find(s=>s.id===subId);
    if (!sub) { R.home(); return; }

    const {bg, ac} = getSubColor(sub);
    document.getElementById('av-header-title').textContent = sub.name;
    document.getElementById('av-back').style.display = 'none';
    document.getElementById('av-add-pill').style.display = 'none';

    const progData   = getProgress(subId);
    const {tareas,examenes,proyectos} = progData;
    const criterios  = getCriterios(subId);
    const finalGrade = progData.finalGrade;
    const p      = calcPct(subId);
    const done   = tareas.filter(t=>t.done).length;
    const graded = examenes.filter(e=>e.grade!=null);
    const avgEx  = graded.length?(graded.reduce((s,e)=>s+e.grade,0)/graded.length).toFixed(1):null;
    const weighted     = calcWeightedGrade(subId);
    const displayGrade = finalGrade!=null ? finalGrade.toFixed(1) : weighted!==null ? weighted.toFixed(1) : avgEx;
    const gradeClrD   = displayGrade!=null ? gradeColor(parseFloat(displayGrade)) : ac;
    const barPct       = finalGrade!=null ? 100 : p;

    /* Siempre preferir el ícono actual de data.js sobre el guardado en localStorage */
    const dataMatD = _findInData(sub);
    const iconD    = (dataMatD && dataMatD.icon) || sub.icon || 'assets/images/d0.webp';

    const tareaRows = tareas.length
      ? tareas.map((t,i)=>`
        <div class="av-item${t.done?' av-item--done':''}">
          <button class="av-check${t.done?' av-check--on':''}" onclick="A.toggleTarea('${esc(subId)}',${i})"
                  aria-label="${t.done?'Desmarcar':'Marcar completa'}">
            ${t.done?`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`:''}
          </button>
          <span class="av-item-text">${esc(t.text)}</span>
          ${dueBadge(t.dueDate,t.done)}
          <button class="av-del" onclick="A.delTarea('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin tareas registradas</div>`;

    const examRows = examenes.length
      ? examenes.map((e,i)=>`
        <div class="av-exam-item">
          <span class="av-item-text">${esc(e.text)}</span>
          <div class="av-grade-wrap">
            <input class="av-grade-inp" type="search" inputmode="decimal" autocomplete="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore data-form-type="other" onfocus="this._v=this.value;this.value=''" onblur="if(this.value==='')this.value=this._v"
              value="${e.grade!=null?e.grade:''}" placeholder="—"
              style="color:${gradeColor(e.grade)}"
              oninput="this.style.color=gradeColor(parseFloat(this.value))"
              onchange="A.setGrade('${esc(subId)}',${i},this.value)"
              autocomplete="one-time-code" data-lpignore="true" data-1p-ignore data-form-type="other">
            <span class="av-grade-slash">/10</span>
          </div>
          <button class="av-del" onclick="A.delExamen('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin exámenes registrados</div>`;

    const proyRows = (proyectos||[]).length
      ? (proyectos||[]).map((p2,i)=>`
        <div class="av-exam-item">
          <span class="av-item-text">${esc(p2.text)}</span>
          <div class="av-grade-wrap">
            <input class="av-grade-inp" type="search" inputmode="decimal" autocomplete="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore data-form-type="other" onfocus="this._v=this.value;this.value=''" onblur="if(this.value==='')this.value=this._v"
              value="${p2.grade!=null?p2.grade:''}" placeholder="—"
              style="color:${gradeColor(p2.grade)}"
              oninput="this.style.color=gradeColor(parseFloat(this.value))"
              onchange="A.setProyGrade('${esc(subId)}',${i},this.value)"
              autocomplete="one-time-code" data-lpignore="true" data-1p-ignore data-form-type="other">
            <span class="av-grade-slash">/10</span>
          </div>
          <button class="av-del" onclick="A.delProy('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin proyectos registrados</div>`;

    const pesoTotal = criterios.reduce((s, c) => s + Number(c.peso || 0), 0);

    document.getElementById('av-main').innerHTML = `
      <div class="av-detail">
        <div class="av-hero-card" style="background:${bg}">
          <button class="av-edit-btn" onclick="A.editSub('${esc(subId)}')" aria-label="Editar materia">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>
          <div class="av-card-head">
            <div class="av-card-icon">
              <img src="${esc(iconD)}" alt="${esc(sub.name)}" onerror="this.src='assets/images/d0.webp'">
            </div>
            <div class="av-card-info">
              <div class="av-card-name">${esc(sub.name)}</div>
              <div class="av-card-meta-row">
                ${mkDaysDots(sub.dias, sub.hora, sub.horaFin, sub.diasAy)}
              </div>
            </div>
            <span class="av-card-pct" id="av-hero-pct" style="color:${gradeClrD}">${displayGrade != null ? displayGrade : '—'}</span>
          </div>
          ${(sub.grupo||sub.salon)?_mkNotchBar(sub,barPct):`<div class="av-card-progress"><div class="av-card-bar" id="av-hero-bar" style="width:${barPct}%;background:${ac}"></div></div>`}
        </div>
        ${criterios.length ? criterios.map(c => {
          const cItems   = c.items||[];
          const expanded = !!_folderExpanded[c.id];
          const hasMore  = cItems.length > 3;
          const showItems = (hasMore && !expanded) ? cItems.slice(0,3) : cItems;
          const cGraded  = cItems.filter(i=>i.grade!=null);
          const cAvg     = cGraded.length ? (cGraded.reduce((s,i)=>s+i.grade,0)/cGraded.length).toFixed(1) : null;
          return `
        <div class="av-folder" data-cid="${c.id}">
          <div class="av-folder-header">
            <div class="av-folder-tab${hasMore ? ' av-folder-tab--expandable' : ''}"${hasMore ? ` onclick="A.toggleFolderExpand('${esc(subId)}','${c.id}')"` : ''}>
              <span class="av-folder-tab-title">${esc(c.nombre||'Sin nombre')}</span>
              ${hasMore ? `<button class="av-folder-expand" onclick="event.stopPropagation();A.toggleFolderExpand('${esc(subId)}','${c.id}')">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  ${expanded ? '<polyline points="18 15 12 9 6 15"/>' : '<polyline points="6 9 12 15 18 9"/>'}
                </svg>
              </button>` : ''}
            </div>
            <button class="av-sec-add" onclick="A.addCriterioItem('${esc(subId)}','${c.id}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>Agregar
            </button>
          </div>
          <div class="av-folder-body">
            ${showItems.length ? showItems.map(item=>`
              <div class="av-folder-row">
                <input class="av-crit-item-name" value="${esc(item.text||'')}" placeholder="Nombre"
                  type="search" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false"
                  enterkeyhint="done"
                  data-lpignore="true" data-1p-ignore data-form-type="other"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
                  onblur="A.setCriterioItemName('${esc(subId)}','${c.id}','${item.id}',this.value)"
                  onchange="A.setCriterioItemName('${esc(subId)}','${c.id}','${item.id}',this.value)">
                <label class="av-grade-wrap">
                  <input class="av-grade-inp" type="search" inputmode="decimal" autocomplete="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore data-form-type="other"
                    onfocus="this._v=this.value;this.value=''"
                    onblur="if(this.value==='')this.value=this._v;A.setCriterioItemGrade('${esc(subId)}','${c.id}','${item.id}',this.value)"
                    value="${item.grade!=null?item.grade:''}" placeholder="—"
                    style="color:${gradeColor(item.grade)}"
                    oninput="this.style.color=gradeColor(parseFloat(this.value))"
                    onchange="A.setCriterioItemGrade('${esc(subId)}','${c.id}','${item.id}',this.value)"
                    autocomplete="off" data-form-type="other">
                  <span class="av-grade-slash">/10</span>
                </label>
                <button class="av-del" onclick="A.delCriterioItem('${esc(subId)}','${c.id}','${item.id}')">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>`).join('')
            : `<div class="av-empty-msg">Sin calificaciones</div>`}
            <div class="av-crit-avg-row" data-cid="${c.id}"${!cAvg ? ' style="display:none"' : ''}><span>Promedio</span><strong style="color:${gradeColor(parseFloat(cAvg||0))}">${cAvg||'—'}</strong></div>
          </div>
        </div>`;
        }).join('') : ''}
        <div class="av-section av-crit-total-wrap"${weighted===null?' style="display:none"':''}><div class="av-crit-total"><span>Promedio general</span><strong style="color:${gradeColor(weighted||0)}">${weighted!==null?weighted.toFixed(1):'—'}</strong></div></div>
        <div class="av-section">
          <div class="av-sec-head">
            <span class="av-sec-title">Criterios de evaluación</span>
            <button class="av-sem-add" onclick="A.addCriterio('${esc(subId)}')" aria-label="Agregar criterio">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
          ${criterios.length ? criterios.map(c=>`
            <div class="av-crit-row">
              <input class="av-crit-name-inp" type="search" value="${esc(c.nombre||'')}" placeholder="Criterio"
                autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false"
                enterkeyhint="done"
                data-lpignore="true" data-1p-ignore data-form-type="other"
                onkeydown="if(event.key==='Enter'){event.preventDefault();this.blur();}"
                onblur="A.updateCriterio('${esc(subId)}','${c.id}','nombre',this.value)"
                onchange="A.updateCriterio('${esc(subId)}','${c.id}','nombre',this.value)">
              <input class="av-crit-peso-inp" type="search" inputmode="numeric" autocomplete="off" autocorrect="off" spellcheck="false" data-lpignore="true" data-1p-ignore data-form-type="other"
                onfocus="this._v=this.value;this.value=''"
                onblur="if(this.value==='')this.value=this._v;A.updateCriterio('${esc(subId)}','${c.id}','peso',this.value)"
                value="${c.peso||0}" autocomplete="off" title="Peso %"
                onchange="A.updateCriterio('${esc(subId)}','${c.id}','peso',this.value)">
              <span class="av-crit-unit">%</span>
              <button class="av-del" onclick="A.delCriterio('${esc(subId)}','${c.id}')">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>`).join('') +
            ``
          : `<div class="av-empty-msg">Sin criterios — define los rubros y su peso en la calificación</div>`}
        </div>
        <div class="av-section av-section--del">
          ${finalGrade!=null
            ? `<button class="av-final-grade-btn" onclick="A.clearFinalGrade('${esc(subId)}')">Eliminar calificación</button>`
            : `<button class="av-final-grade-btn" onclick="A.openFinalGrade('${esc(subId)}')">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>Añadir calificación
              </button>`}
          <button class="av-del-sub-btn" onclick="A.delSubject('${esc(subId)}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/>
            </svg>Eliminar materia
          </button>
        </div>
      </div>`;

    if (!noScroll) window.scrollTo({top:0,behavior:'instant'});
    _colorizeDetailHero(sub);
  },

  _refreshHero(subId) {
    const prog = getProgress(subId);
    if (prog.finalGrade != null) return;
    const p = calcPct(subId);
    const { examenes } = prog;
    const graded   = examenes.filter(e => e.grade != null);
    const avgEx    = graded.length ? (graded.reduce((s, e) => s + e.grade, 0) / graded.length).toFixed(1) : null;
    const weighted = calcWeightedGrade(subId);
    const show     = weighted !== null ? weighted.toFixed(1) : avgEx;
    const showClr  = show != null ? gradeColor(parseFloat(show)) : '';
    const pEl = document.getElementById('av-hero-pct'), bEl = document.getElementById('av-hero-bar');
    if (pEl) { pEl.textContent = show ?? '—'; pEl.style.color = showClr; }
    if (bEl) bEl.style.width = p + '%';
    const clipEl = document.getElementById('avfc-' + subId);
    if (clipEl) {
      const r = clipEl.querySelector('rect');
      if (r) {
        const target = Math.round(p * 3.6);
        const from   = parseFloat(r.getAttribute('width')) || 0;
        if (clipEl._rafId) cancelAnimationFrame(clipEl._rafId);
        if (Math.abs(from - target) > 0.5) {
          const t0 = performance.now(), dur = 1600;
          const ease = t => 1 - Math.pow(1 - t, 3);
          const step = now => {
            const prc = Math.min((now - t0) / dur, 1);
            r.setAttribute('width', String(Math.round(from + (target - from) * ease(prc))));
            if (prc < 1) { clipEl._rafId = requestAnimationFrame(step); }
            else { clipEl._rafId = null; }
          };
          clipEl._rafId = requestAnimationFrame(step);
        } else {
          r.setAttribute('width', String(target));
        }
      }
    }
  },
};

function _refreshWeightedDisplay(id) {
  const hasFinal = getProgress(id).finalGrade != null;
  const cs = getCriterios(id);
  /* Siempre actualizar promedios individuales de cada criterio */
  for (const c of cs) {
    const rowEl = document.querySelector(`.av-crit-avg-row[data-cid="${c.id}"]`);
    if (!rowEl) continue;
    const graded = (c.items||[]).filter(i => i.grade != null);
    if (graded.length) {
      const avg = (graded.reduce((s,i) => s+i.grade, 0) / graded.length).toFixed(1);
      const strong = rowEl.querySelector('strong');
      if (strong) { strong.textContent = avg; strong.style.color = gradeColor(parseFloat(avg)); }
      rowEl.style.display = '';
    } else {
      rowEl.style.display = 'none';
    }
  }
  /* Solo actualizar el pct del hero y la ponderada total si no hay calificación final manual */
  if (hasFinal) return;
  const w  = calcWeightedGrade(id);
  const pEl = document.getElementById('av-hero-pct');
  if (pEl && w !== null) { pEl.textContent = w.toFixed(1); pEl.style.color = gradeColor(w); }
  const tot = document.querySelector('.av-crit-total strong');
  const totWrap = document.querySelector('.av-crit-total-wrap');
  if (totWrap) totWrap.style.display = w !== null ? '' : 'none';
  if (tot) { tot.textContent = w !== null ? w.toFixed(1) : '—'; if (w !== null) tot.style.color = gradeColor(w); }
  R._refreshHero(id);
}

/* ══════════════════════════════════════════════════════
   MODALS
   ══════════════════════════════════════════════════════ */
let _ctx = null;
const _folderExpanded = {};
const Modal = {
  _blockScroll: null,
  open(type,subId) {
    _ctx = {type,subId};
    document.getElementById('av-modal-title').textContent = type==='tarea'?'Nueva tarea':type==='proyecto'?'Nuevo proyecto':type==='calificacion'?'Calificación final':'Nuevo examen';
    const inp = document.getElementById('av-modal-inp');
    inp.type = 'search';
    if(type==='calificacion'){
      inp.inputMode='decimal'; inp.pattern='[0-9]*'; inp.placeholder='0 – 10';
    } else {
      inp.inputMode=''; inp.removeAttribute('pattern'); inp.placeholder='Escribe aquí…';
    }
    inp.value = '';
    const dr=document.getElementById('av-modal-date-row'), di=document.getElementById('av-modal-date');
    if(dr){dr.style.display=type==='tarea'?'block':'none'; if(di)di.value='';}
    /* bloquear scroll del fondo */
    this._blockScroll = e => { if (!e.target.closest('.av-modal-sheet')) e.preventDefault(); };
    document.addEventListener('touchmove', this._blockScroll, {passive:false});
    const _m = document.getElementById('av-modal');
    _m.style.display = 'flex';
    history.pushState({modal:'item',view:S.view,subId:S.subId||undefined},'',location.href);
    setTimeout(()=>inp.focus(), 80);
  },
  close() {
    _ctx=null;
    if (this._blockScroll) { document.removeEventListener('touchmove', this._blockScroll); this._blockScroll=null; }
    const _m = document.getElementById('av-modal');
    _m.classList.add('is-closing');
    setTimeout(()=>{ _m.classList.remove('is-closing'); _m.style.display='none'; },310);
    if(history.state&&history.state.modal==='item'){_suppressNav=true;history.back();}
  },
  confirm() {
    if(!_ctx) return;
    const text=document.getElementById('av-modal-inp').value.trim();
    if(!text){document.getElementById('av-modal-inp').focus();return;}
    const {type,subId}=_ctx, p=getProgress(subId);
    if(type==='calificacion'){
      A.setFinalGrade(subId, text); Modal.close(); return;
    } else if(type==='tarea'){
      const di=document.getElementById('av-modal-date');
      p.tareas.push({text,done:false,dueDate:di&&di.value?di.value:null});
    } else if(type==='proyecto'){
      (p.proyectos=p.proyectos||[]).push({text,grade:null});
    } else p.examenes.push({text,grade:null});
    saveProgress(subId,p); Modal.close(); R.detail(subId);
  },
};

const SubModal = {
  _selected: null,
  _editId:   null,

  open(sem, sub) {
    this._selected = null;
    this._editId   = sub ? sub.id : null;
    document.querySelector('#av-sub-modal .av-modal-title').textContent = sub ? 'Editar materia' : 'Nueva materia';
    ['av-sub-name','av-sub-prof','av-sub-salon','av-sub-grupo'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('av-sub-hora').value='';
    document.getElementById('av-sub-hora-fin').value='';
    document.getElementById('av-sub-sem').value = sem || '';
    document.querySelectorAll('.av-day-btn').forEach(b=>b.classList.remove('av-day-btn--on'));
    if (sub) {
      document.getElementById('av-sub-name').value  = sub.name     || '';
      document.getElementById('av-sub-prof').value  = sub.profesor || '';
      document.getElementById('av-sub-salon').value = sub.salon    || '';
      document.getElementById('av-sub-grupo').value = sub.grupo    || '';
      document.getElementById('av-sub-hora').value     = sub.hora    || '';
      document.getElementById('av-sub-hora-fin').value = sub.horaFin || '';
      document.getElementById('av-sub-sem').value = sub.semestre || '';
      document.querySelectorAll('#av-days-row .av-day-btn').forEach(b =>
        b.classList.toggle('av-day-btn--on', (sub.dias||[]).includes(b.dataset.day)));
      document.querySelectorAll('#av-days-row-ay .av-day-btn').forEach(b =>
        b.classList.toggle('av-day-btn--on', (sub.diasAy||[]).includes(b.dataset.day)));
    }
    const sug = document.getElementById('av-name-suggest');
    if (sug) { sug.innerHTML=''; sug.style.display='none'; }
    /* bloquear scroll del fondo sin tocar scrollY */
    this._blockScroll = e => {
      if (!e.target.closest('.av-modal-sheet')) e.preventDefault();
    };
    document.addEventListener('touchmove', this._blockScroll, { passive: false });
    /* empujar el sheet hacia arriba cuando el teclado sube (padding-bottom en el modal) */
    const _modal = document.getElementById('av-sub-modal');
    if (window.visualViewport) {
      this._syncVV = () => {
        const vv = window.visualViewport;
        const kb = Math.max(0, window.innerHeight - vv.offsetTop - vv.height);
        _modal.style.paddingBottom = kb > 0 ? kb + 'px' : '';
      };
      window.visualViewport.addEventListener('resize', this._syncVV);
      this._syncVV();
    }
    _modal.style.display = 'flex';
    history.pushState({modal:'sub',view:S.view,subId:S.subId||undefined},'',location.href);
  },

  close() {
    this._selected = null;
    const sug = document.getElementById('av-name-suggest');
    if (sug) { sug.innerHTML=''; sug.style.display='none'; }
    /* limpiar syncVV y reset padding */
    if (window.visualViewport && this._syncVV) {
      window.visualViewport.removeEventListener('resize', this._syncVV);
      this._syncVV = null;
    }
    document.getElementById('av-sub-modal').style.paddingBottom = '';
    /* restaurar scroll del fondo */
    if (this._blockScroll) {
      document.removeEventListener('touchmove', this._blockScroll);
      this._blockScroll = null;
    }
    if (history.state && history.state.modal === 'sub') { _suppressNav = true; history.back(); }
    const _m = document.getElementById('av-sub-modal');
    _m.classList.add('is-closing');
    setTimeout(() => {
      _m.classList.remove('is-closing');
      _m.style.display = 'none';
    }, 310);
  },

  _suggest(q) {
    const box = document.getElementById('av-name-suggest');
    if (!box) return;
    const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
    const nq = norm(q.trim());
    if (!nq || nq.length < 2) { box.innerHTML=''; box.style.display='none'; return; }
    const matches = _allDataMats().filter(m => norm(m.name).includes(nq)).slice(0,7);
    if (!matches.length) { box.innerHTML=''; box.style.display='none'; return; }
    box.innerHTML = matches.map(m => `
      <div class="av-suggest-item"
           data-name="${esc(m.name)}"
           data-icon="${esc(m.icon||'assets/images/d0.webp')}"
           data-clave="${esc(m.clave||'')}"
           data-creditos="${m.creditos||''}">
        <img class="av-suggest-icon" src="${esc(m.icon||'assets/images/d0.webp')}"
             onerror="this.src='assets/images/d0.webp'" alt="">
        <span class="av-suggest-name">${esc(m.name)}</span>
        ${m.clave&&m.clave!=='—'?`<span class="av-suggest-clave">${esc(m.clave)}</span>`:''}
      </div>`).join('');
    box.style.display = 'block';

    const pick = item => {
      SubModal._selected = {
        name:     item.dataset.name,
        icon:     item.dataset.icon,
        clave:    item.dataset.clave,
        creditos: item.dataset.creditos ? Number(item.dataset.creditos) : undefined,
      };
      const inp = document.getElementById('av-sub-name');
      inp.value = item.dataset.name;
      inp.blur();
      box.innerHTML=''; box.style.display='none';
    };
    box.querySelectorAll('.av-suggest-item').forEach(item => {
      item.addEventListener('mousedown', e => { e.preventDefault(); pick(item); });
      let _ty0 = 0;
      item.addEventListener('touchstart', e => { _ty0 = e.touches[0].clientY; }, {passive:true});
      item.addEventListener('touchend', e => {
        if (Math.abs(e.changedTouches[0].clientY - _ty0) > 8) return; /* fue scroll, no tap */
        e.preventDefault();
        pick(item);
      }, {passive:false});
    });
  },

  confirm() {
    const name=document.getElementById('av-sub-name').value.trim();
    if(!name){document.getElementById('av-sub-name').focus();return;}
    const profesor=document.getElementById('av-sub-prof').value.trim();
    const salon=document.getElementById('av-sub-salon').value.trim();
    const grupo=document.getElementById('av-sub-grupo').value.trim();
    const hora=document.getElementById('av-sub-hora').value;
    const horaFin=document.getElementById('av-sub-hora-fin').value;
    const semestre=document.getElementById('av-sub-sem').value;
    const dias  =[...document.querySelectorAll('#av-days-row .av-day-btn--on')].map(b=>b.dataset.day);
    const diasAy=[...document.querySelectorAll('#av-days-row-ay .av-day-btn--on')].map(b=>b.dataset.day);
    const subs=getSubjects();
    if (this._editId) {
      const idx = subs.findIndex(s => s.id === this._editId);
      if (idx >= 0) {
        const existing = subs[idx];
        subs[idx] = {...existing, name, profesor, salon, grupo, dias, diasAy, hora, horaFin, semestre};
        const src = this._selected || _findInData({name, id: this._editId});
        if (src) {
          if (src.icon)     subs[idx].icon     = src.icon;
          if (src.clave)    subs[idx].clave    = src.clave;
          if (src.creditos) subs[idx].creditos = src.creditos;
        }
      }
      const returnId = this._editId;
      saveSubjects(subs);
      SubModal.close();
      R.detail(returnId);
    } else {
      const newSub={id:uid(),name,profesor,salon,grupo,dias,diasAy,hora,horaFin,semestre,colorIdx:subs.length};
      const src = this._selected || _findInData({name,id:''});
      if (src) {
        if (src.icon)                newSub.icon     = src.icon;
        if (src.clave)               newSub.clave    = src.clave;
        if (src.creditos)            newSub.creditos = src.creditos;
        if (src.colorIdx != null)    newSub.colorIdx = src.colorIdx;
      }
      subs.push(newSub);
      saveSubjects(subs);
      SubModal.close();
      R.home();
    }
  },
};

/* ══════════════════════════════════════════════════════
   ACTIONS
   ══════════════════════════════════════════════════════ */
/* ── Confirm-delete sheet ── */
const ConfirmDel = {
  _cb: null,
  _modal() { return document.getElementById('av-confirm-modal'); },
  show(msg, cb) {
    this._cb = cb;
    document.getElementById('av-confirm-msg').textContent = msg;
    this._modal().style.display = 'flex';
  },
  close() {
    const m = this._modal();
    m.classList.add('is-closing');
    setTimeout(() => { m.classList.remove('is-closing'); m.style.display = 'none'; this._cb = null; }, 290);
  },
};

const A = {
  openSubModal:      (sem)=>SubModal.open(sem),
  editSub:           (id)=>{ const s=getSubjects().find(x=>x.id===id); if(s) SubModal.open(s.semestre,s); },
  toggleVis(id) {
    const hidden = toggleHidden(id);
    const solarWrap = document.getElementById('av-solar-wrap');
    if (solarWrap) { SolarSys.stop(); SolarSys.init(solarWrap, getSubjects()); }
    _syncCardVis();
    const btn = document.querySelector(`.av-card[data-sub="${id}"] .av-vis-btn`);
    if (btn) {
      btn.classList.toggle('av-vis-btn--off', hidden);
      btn.setAttribute('aria-label', hidden ? 'Mostrar en sistema solar' : 'Ocultar en sistema solar');
      btn.innerHTML = hidden
        ? `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
        : `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    }
  },
  closeSubModal:     ()=>SubModal.close(),
  confirmAddSubject: ()=>SubModal.confirm(),
  openModal:         (t,id)=>Modal.open(t,id),
  toggleTarea(id,i) { const p=getProgress(id);p.tareas[i].done=!p.tareas[i].done;saveProgress(id,p);R.detail(id); },
  delTarea(id,i)    { const p=getProgress(id);p.tareas.splice(i,1);saveProgress(id,p);R.detail(id); },
  delExamen(id,i)   { const p=getProgress(id);p.examenes.splice(i,1);saveProgress(id,p);R.detail(id); },
  setGrade(id,i,v)  { const n=parseFloat(v),p=getProgress(id);p.examenes[i].grade=isNaN(n)?null:Math.max(0,Math.min(10,n));saveProgress(id,p);R._refreshHero(id); },
  addCriterio(id)                   { const cs=getCriterios(id);cs.push({id:uid(),nombre:'',peso:0,items:[]});saveCriterios(id,cs);R.detail(id); },
  delCriterio(id,cid)               { saveCriterios(id,getCriterios(id).filter(c=>c.id!==cid));R.detail(id); },
  updateCriterio(id,cid,f,v) {
    const cs=getCriterios(id),c=cs.find(x=>x.id===cid);
    if(!c)return;
    if(f==='peso'){const n=parseInt(v);c.peso=isNaN(n)?0:Math.max(0,Math.min(100,n));}
    else c[f]=v;
    saveCriterios(id,cs);
    if(f==='nombre'){
      const titleEl=document.querySelector(`.av-folder[data-cid="${cid}"] .av-folder-tab-title`);
      if(titleEl) titleEl.textContent=v||'Sin nombre';
    }
    _refreshWeightedDisplay(id);
  },
  addCriterioItem(id,cid) {
    const cs=getCriterios(id),c=cs.find(x=>x.id===cid);if(!c)return;
    const folderEl=document.querySelector(`.av-folder[data-cid="${cid}"]`);
    const prevRows=folderEl?[...folderEl.querySelectorAll('.av-folder-row')]:[];
    const prevRects=prevRows.map(r=>r.getBoundingClientRect());
    (c.items=c.items||[]).unshift({id:uid(),text:'',grade:null});
    saveCriterios(id,cs);
    R.detail(id,true);
    requestAnimationFrame(()=>{
      const nf=document.querySelector(`.av-folder[data-cid="${cid}"]`);
      if(!nf)return;
      const nRows=[...nf.querySelectorAll('.av-folder-row')];
      const first=nRows[0];
      if(first){
        first.style.opacity='0';first.style.transform='translateY(-12px)';first.style.transition='none';
        requestAnimationFrame(()=>{
          first.style.transition='opacity 0.22s ease,transform 0.22s cubic-bezier(0.4,0,0.2,1)';
          first.style.opacity='';first.style.transform='';
          setTimeout(()=>{first.style.transition='';},260);
        });
      }
      for(let i=0;i<prevRects.length&&i+1<nRows.length;i++){
        const el=nRows[i+1];
        const dy=prevRects[i].top-el.getBoundingClientRect().top;
        if(Math.abs(dy)<0.5)continue;
        el.style.transform=`translateY(${dy}px)`;el.style.transition='none';
        requestAnimationFrame(()=>{
          el.style.transition='transform 0.22s cubic-bezier(0.4,0,0.2,1)';
          el.style.transform='';
          setTimeout(()=>{el.style.transition='';},260);
        });
      }
    });
  },
  toggleFolderExpand(subId, cid) {
    const wasExpanded = !!_folderExpanded[cid];
    const folderEl = document.querySelector(`.av-folder[data-cid="${cid}"]`);
    const bodyEl   = folderEl?.querySelector('.av-folder-body');
    const oldH     = bodyEl ? bodyEl.offsetHeight : 0;

    _folderExpanded[cid] = !wasExpanded;
    R.detail(subId, true);

    requestAnimationFrame(() => {
      const nf = document.querySelector(`.av-folder[data-cid="${cid}"]`);
      const nb = nf?.querySelector('.av-folder-body');
      if (!nb) return;
      const newH = nb.offsetHeight;
      if (Math.abs(newH - oldH) < 1) return;

      nb.style.overflow = 'hidden';
      nb.style.height   = oldH + 'px';
      nb.style.transition = 'none';

      if (!wasExpanded) {
        [...nb.querySelectorAll('.av-folder-row')].slice(3).forEach(r => {
          r.style.opacity = '0';
          r.style.transform = 'translateY(-8px)';
          r.style.transition = 'none';
        });
      }

      requestAnimationFrame(() => {
        nb.style.transition = 'height 0.26s cubic-bezier(0.4,0,0.2,1)';
        nb.style.height = newH + 'px';

        if (!wasExpanded) {
          [...nb.querySelectorAll('.av-folder-row')].slice(3).forEach((r, i) => {
            r.style.transition = `opacity 0.2s ease ${0.08 + i * 0.05}s, transform 0.2s ease ${0.08 + i * 0.05}s`;
            r.style.opacity   = '';
            r.style.transform = '';
          });
        }

        setTimeout(() => {
          nb.style.height = nb.style.overflow = nb.style.transition = '';
          nb.querySelectorAll('.av-folder-row').forEach(r => {
            r.style.transition = r.style.opacity = r.style.transform = '';
          });
        }, 300);
      });
    });
  },
  delCriterioItem(id,cid,iid)       { const cs=getCriterios(id),c=cs.find(x=>x.id===cid);if(!c)return;c.items=(c.items||[]).filter(i=>i.id!==iid);saveCriterios(id,cs);R.detail(id); },
  setCriterioItemGrade(id,cid,iid,v){
    const cs=getCriterios(id),c=cs.find(x=>x.id===cid),item=(c?.items||[]).find(i=>i.id===iid);
    if(!item)return;
    const n=parseFloat(v);item.grade=isNaN(n)?null:Math.max(0,Math.min(10,n));
    saveCriterios(id,cs);
    _refreshWeightedDisplay(id);
  },
  setCriterioItemName(id,cid,iid,v) { const cs=getCriterios(id),c=cs.find(x=>x.id===cid),item=(c?.items||[]).find(i=>i.id===iid);if(!item)return;item.text=v;saveCriterios(id,cs); },
  setProyGrade(id,i,v) { const n=parseFloat(v),p=getProgress(id);(p.proyectos=p.proyectos||[])[i].grade=isNaN(n)?null:Math.max(0,Math.min(10,n));saveProgress(id,p);R._refreshHero(id); },
  delProy(id,i)        { const p=getProgress(id);(p.proyectos=p.proyectos||[]).splice(i,1);saveProgress(id,p);R.detail(id); },
  openFinalGrade(id) { Modal.open('calificacion', id); },
  setFinalGrade(id,v){ const n=parseFloat(v),p=getProgress(id);p.finalGrade=isNaN(n)?null:Math.max(0,Math.min(10,n));saveProgress(id,p);R.detail(id); },
  clearFinalGrade(id){ const p=getProgress(id);p.finalGrade=null;saveProgress(id,p);R.detail(id); },
  delSubject(id) {
    const sub  = getSubjects().find(s=>s.id===id);
    const name = sub ? sub.name : 'esta materia';
    ConfirmDel.show(`Eliminar "${name}"`, () => {
      saveSubjects(getSubjects().filter(s=>s.id!==id));
      const d=_load();delete(d.progress=d.progress||{})[id];_persist(d);
      history.pushState({view:'home'},'','#'); Nav._goHome();
    });
  },
};

/* ══════════════════════════════════════════════════════
   NAVIGATION + INIT
   ══════════════════════════════════════════════════════ */
const S={view:'home',subId:null};
let _suppressNav = false;   /* flag to swallow the popstate fired by history.go(+1) */
const Nav={
  _homeScroll: 0,
  _cardTop: null,
  _lastSubId: null,
  detail(id, skipAnim) {
    Nav._homeScroll = window.scrollY;
    Nav._lastSubId  = id;
    /* captura posición de la tarjeta solo si no viene del sistema solar */
    const card    = skipAnim ? null : document.querySelector(`.av-card[data-sub="${id}"]`);
    const cardTop = card ? card.getBoundingClientRect().top : null;
    Nav._cardTop = cardTop;
    S.view='detail'; S.subId=id;
    history.pushState({view:'detail',subId:id},'',`#mat/${id}`);
    R.detail(id);
    /* anima hero-card desde la posición original de la tarjeta */
    if (cardTop !== null) {
      const hero = document.querySelector('.av-hero-card');
      if (hero) {
        const dy = cardTop - hero.getBoundingClientRect().top;
        hero.style.transform = `translateY(${dy}px)`;
        hero.style.opacity   = '0.75';
        hero.style.transition = 'none';
        requestAnimationFrame(() => {
          hero.style.transition = 'transform 0.72s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease';
          hero.style.transform  = '';
          hero.style.opacity    = '';
          setTimeout(() => { hero.style.transition = ''; }, 780);
        });
      }
    }
  },
  _goHome() {
    const savedSubId = Nav._lastSubId;
    Nav._lastSubId = null;
    S.view='home'; S.subId=null;
    const hero    = document.querySelector('.av-hero-card');
    const cardTop = Nav._cardTop;
    const scrollY = Nav._homeScroll;
    Nav._cardTop    = null;
    Nav._homeScroll = 0;

    if (hero && cardTop !== null) {
      const heroRect = hero.getBoundingClientRect();

      /* 1 — renderizar home */
      R.home();
      window.scrollTo({top: scrollY, behavior:'instant'});
      const main       = document.getElementById('av-main');
      const targetCard = savedSubId ? main.querySelector(`[data-sub="${savedSubId}"]`) : null;

      if (targetCard) {
        /* 2 — FLIP: calcular cuánto hay que desplazar la tarjeta para que arranque
                     desde la posición donde estaba el hero en el detalle          */
        const targetRect = targetCard.getBoundingClientRect();
        const dy = heroRect.top - targetRect.top;

        /* 3 — posicionar la tarjeta en la posición del hero (sin transición) */
        targetCard.style.transition = 'none';
        targetCard.style.transform  = `translateY(${dy}px)`;
        targetCard.style.zIndex     = '2';

        /* resto del home: fade-in mientras la pill viaja */
        Array.from(main.querySelectorAll('.av-card, .av-sem-label, .av-summary, .av-solar-wrap, .av-cards-divider'))
          .forEach(el => { if (el !== targetCard) { el.style.opacity='0'; el.style.transition='none'; } });

        /* 4 — un frame después: animar tarjeta a su posición natural + fade-in del resto */
        requestAnimationFrame(() => requestAnimationFrame(() => {
          targetCard.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.8,1)';
          targetCard.style.transform  = '';

          Array.from(main.querySelectorAll('.av-card, .av-sem-label, .av-summary, .av-solar-wrap, .av-cards-divider'))
            .forEach(el => {
              if (el !== targetCard) {
                el.style.transition = 'opacity 0.4s ease 0.05s';
                el.style.opacity = el.classList.contains('av-card--dimmed') ? '0.52' : '1';
              }
            });

          setTimeout(() => {
            targetCard.style.transition = '';
            targetCard.style.transform  = '';
            targetCard.style.zIndex     = '';
            main.querySelectorAll('.av-card, .av-sem-label, .av-summary, .av-solar-wrap, .av-cards-divider')
              .forEach(el => { el.style.transition=''; el.style.opacity=''; });
          }, 580);
        }));
      } else {
        /* sin tarjeta destino: fade-in simple */
        main.style.opacity = '0';
        requestAnimationFrame(() => { main.style.transition='opacity 0.35s ease'; main.style.opacity='1'; });
        setTimeout(() => { main.style.transition=''; main.style.opacity=''; }, 380);
      }
    } else {
      R.home();
      window.scrollTo({top: scrollY, behavior:'instant'});
    }
  },
};

(function init(){
  history.scrollRestoration='manual';
  /* Seed obligatorias on first run */
  if (!getSubjects().length) saveSubjects(DEFAULTS);
  const hash=location.hash;
  if(hash.startsWith('#mat/')){const id=hash.slice(5);if(getSubjects().find(s=>s.id===id)){S.view='detail';S.subId=id;}}
  history.replaceState({view:S.view,subId:S.subId||undefined},'',location.href);

  if(S.view==='detail'&&S.subId) R.detail(S.subId);
  else { Nav._goHome(); window.scrollTo({top:0,behavior:'instant'}); }

  document.getElementById('av-back').addEventListener('click',()=>{history.pushState({view:'home'},'','#');Nav._goHome();});
  window.addEventListener('popstate', e => {
    /* Swallow popstate fired by SubModal/Modal.close() → history.back() */
    if (_suppressNav) { _suppressNav = false; return; }

    /* Back gesture with modal open: modal already popped its history entry,
       just close the sheet and stay on the current view.
       Check === 'flex' (explicit inline style set by open()), NOT !== 'none',
       because the initial inline style is '' so !== 'none' would always be true. */
    const modals = [
      document.getElementById('av-sub-modal'),
      document.getElementById('av-modal'),
    ];
    for (const m of modals) {
      if (m && m.style.display === 'flex') {
        m.style.display = 'none';
        return;
      }
    }

    const st = e.state || {};
    S.view = st.view||'home'; S.subId = st.subId||null;
    if (S.view==='detail' && S.subId) R.detail(S.subId); else Nav._goHome();
  });
  document.getElementById('av-confirm-cancel').addEventListener('click', ()=>ConfirmDel.close());
  document.getElementById('av-confirm-ok').addEventListener('click', ()=>{ const cb=ConfirmDel._cb; ConfirmDel.close(); cb?.(); });
  document.getElementById('av-confirm-modal').addEventListener('click', e=>{ if(e.target===document.getElementById('av-confirm-modal'))ConfirmDel.close(); });
  document.getElementById('av-modal-cancel').addEventListener('click',()=>Modal.close());
  document.getElementById('av-modal-ok').addEventListener('click',()=>Modal.confirm());
  document.getElementById('av-modal').addEventListener('click',e=>{if(e.target===document.getElementById('av-modal'))Modal.close();});
  document.getElementById('av-modal-inp').addEventListener('keydown',e=>{if(e.key==='Enter')Modal.confirm();if(e.key==='Escape')Modal.close();});
  const _subClose = () => SubModal.close();
  document.getElementById('av-sub-cancel').addEventListener('click', _subClose);
  document.getElementById('av-sub-ok').addEventListener('click',()=>SubModal.confirm());
  document.getElementById('av-sub-modal').addEventListener('click',e=>{if(e.target===document.getElementById('av-sub-modal'))_subClose();});
  const _nameInp = document.getElementById('av-sub-name');
  const _profInp = document.getElementById('av-sub-prof');
  _nameInp.addEventListener('keydown',e=>{if(e.key==='Escape')SubModal.close();});
  _nameInp.addEventListener('input',()=>SubModal._suggest(_nameInp.value));
  _nameInp.addEventListener('blur',()=>setTimeout(()=>{
    const b=document.getElementById('av-name-suggest');
    if(b){b.innerHTML='';b.style.display='none';}
  },200));
  /* al tocar profesor desde nombre: evitar blur/refocus bounce */
  _profInp.addEventListener('mousedown', e => {
    if (document.activeElement === _nameInp) e.preventDefault();
  });
  _profInp.addEventListener('touchstart', e => {
    if (document.activeElement === _nameInp) { e.preventDefault(); _profInp.focus(); }
  }, { passive: false });
  /* días: preventDefault en mousedown/touchstart para que el teclado no se cierre */
  ['av-days-row','av-days-row-ay'].forEach(function(rowId) {
    document.getElementById(rowId).addEventListener('mousedown', e => {
      const b = e.target.closest('.av-day-btn');
      if (b) { e.preventDefault(); b.classList.toggle('av-day-btn--on'); }
    });
    document.getElementById(rowId).addEventListener('touchstart', e => {
      const b = e.target.closest('.av-day-btn');
      if (b) { e.preventDefault(); b.classList.toggle('av-day-btn--on'); }
    }, { passive: false });
  });
})();
