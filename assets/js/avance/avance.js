'use strict';

/* ═══════════════════════════════════════════════════════
   avance.js  —  Sistema solar de materias
   ═══════════════════════════════════════════════════════ */

/* ── STORAGE ─────────────────────────────────────────── */
const SK = 'ukishima_avance_v2';
function _load()             { try{return JSON.parse(localStorage.getItem(SK)||'null')||{subjects:[],progress:{}};}catch{return{subjects:[],progress:{}};} }
function _persist(d)         { localStorage.setItem(SK,JSON.stringify(d)); }
function getSubjects()       { return _load().subjects||[]; }
function saveSubjects(s)     { const d=_load();d.subjects=s;_persist(d); }
function getProgress(id)     { return(_load().progress||{})[id]||{tareas:[],examenes:[]}; }
function saveProgress(id,p)  { const d=_load();(d.progress=d.progress||{})[id]=p;_persist(d); }
function uid()               { return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }

/* ── COLOR PALETTE ───────────────────────────────────── */
const PAL = [
  {bg:'#0c3228',ac:'#3fc99a'},{bg:'#18153d',ac:'#7b6ed8'},
  {bg:'#2b1238',ac:'#c46fd6'},{bg:'#0c2d14',ac:'#3fc46f'},
  {bg:'#321414',ac:'#d65050'},{bg:'#2b1e0c',ac:'#d6944e'},
  {bg:'#2b0c1e',ac:'#d64e8a'},{bg:'#0c1e32',ac:'#4e94d6'},
  {bg:'#1e2b0c',ac:'#8ad64e'},{bg:'#32200c',ac:'#d6b44e'},
  {bg:'#0c2b2b',ac:'#4ed6d6'},{bg:'#2b0c0c',ac:'#d66b4e'},
];
function getColor(idx) { return PAL[idx%PAL.length]; }

/* ── COLOR HELPERS ───────────────────────────────────── */
function hexRgba(hex, a) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}

/* ── PLANET SVGs (inline, for card thumbnails) ───────── */
const PLANET_FNS = [
  c=>`<circle cx="30" cy="30" r="18" fill="${c}"/>
      <circle cx="37" cy="28" r="18" fill="rgba(0,0,0,.4)"/>
      <line x1="14" y1="21" x2="24" y2="44" stroke="rgba(255,255,255,.22)" stroke-width="3" stroke-linecap="round"/>
      <line x1="20" y1="18" x2="30" y2="41" stroke="rgba(255,255,255,.16)" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="26" y1="17" x2="35" y2="38" stroke="rgba(255,255,255,.11)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="13" r="3.5" fill="${c}" opacity=".55"/>`,
  c=>`<ellipse cx="30" cy="36" rx="24" ry="5.5" fill="${c}" opacity=".28"/>
      <circle  cx="30" cy="28" r="16" fill="${c}"/>
      <circle  cx="36" cy="26" r="16" fill="rgba(0,0,0,.4)"/>
      <ellipse cx="30" cy="36" rx="24" ry="5.5" fill="none" stroke="${c}" stroke-width="2.5" opacity=".6"/>
      <circle  cx="52" cy="17" r="2" fill="${c}" opacity=".45"/>`,
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
  c=>`<ellipse cx="30" cy="33" rx="22" ry="4.5" fill="${c}" opacity=".22"/>
      <circle  cx="30" cy="27" r="15" fill="${c}"/>
      <circle  cx="36" cy="25" r="15" fill="rgba(0,0,0,.4)"/>
      <ellipse cx="30" cy="33" rx="22" ry="4.5" fill="none" stroke="${c}" stroke-width="2" opacity=".55"/>
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
  t: 0, rotation: 0,
  dragging: false, dragStart: {x:0,rot:0}, dragDx: 0,
  raf: null, stars: null, _W: 0, _H: 0,
  _hits: [],
  _ets:null,_etm:null,_ete:null,_ems:null,_emm:null,_emu:null,

  init(wrap, subs) {
    this.stop();
    this.subs = subs;
    this.t    = 0;
    const c   = document.createElement('canvas');
    c.className = 'av-solar-canvas';
    wrap.prepend(c);
    this.canvas = c;
    this.ctx    = c.getContext('2d');
    this._size();
    this._genStars();
    this._bind();
    this._loop();
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
    this.canvas = null;
  },

  _size() {
    const dpr = devicePixelRatio || 1;
    const W   = window.innerWidth;
    const H   = Math.min(Math.round(W * 0.80), 340);
    this._W = W; this._H = H;
    this.canvas.style.width  = W + 'px';
    this.canvas.style.height = H + 'px';
    this.canvas.width  = W * dpr;
    this.canvas.height = H * dpr;
    this.ctx.scale(dpr, dpr);
  },

  _genStars() {
    this.stars = Array.from({length:100}, () => ({
      x: Math.random(), y: Math.random(),
      r: 0.3 + Math.random() * 1.1,
      a: 0.12 + Math.random() * 0.45,
    }));
  },

  _orbitR(idx) {
    const n = this.subs.length, maxR = this._W * 0.43, minR = Math.min(50, maxR * 0.30);
    return n <= 1 ? (minR + maxR) * 0.5 : minR + (maxR - minR) * idx / (n - 1);
  },

  _pos(idx) {
    const r = this._orbitR(idx);
    const TILT = 0.35;
    const speed = 0.20 / Math.pow(1 + idx * 0.55, 0.72);
    const angle = idx * 2.399 + this.t * speed + this.rotation;
    const cx = this._W * 0.5, cy = this._H * 0.50;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r * TILT,
      z: Math.sin(angle), r, angle,
    };
  },

  _draw() {
    const {ctx, _W:W, _H:H} = this;
    const cx = W * 0.5, cy = H * 0.50, TILT = 0.35;
    ctx.clearRect(0, 0, W, H);

    // Stars
    for (const s of this.stars) {
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    }

    // Orbit ellipses
    for (let i = 0; i < this.subs.length; i++) {
      const r = this._orbitR(i);
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * TILT, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(155,191,181,0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Central star glow
    const gS = ctx.createRadialGradient(cx, cy, 0, cx, cy, 42);
    gS.addColorStop(0, 'rgba(232,245,242,0.75)');
    gS.addColorStop(0.4, 'rgba(155,191,181,0.28)');
    gS.addColorStop(1, 'rgba(155,191,181,0)');
    ctx.beginPath(); ctx.arc(cx, cy, 42, 0, Math.PI * 2);
    ctx.fillStyle = gS; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2);
    ctx.fillStyle = '#e8f5f2'; ctx.fill();
    ctx.fillStyle = '#0a0a0a';
    ctx.font = '700 10px serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Ж', cx, cy);

    // Sort back→front
    const sorted = this.subs.map((sub,i) => ({sub, i, pos: this._pos(i)}))
                             .sort((a,b) => a.pos.z - b.pos.z);

    const hits = [];
    for (const {sub, i, pos} of sorted) {
      const {ac, bg} = getColor(sub.colorIdx || 0);
      const p     = calcPct(sub.id);
      const depth = (pos.z + 1) / 2;
      const pr    = (8 + (p / 100) * 5) * (0.70 + depth * 0.30);
      const alpha = 0.48 + depth * 0.52;

      ctx.globalAlpha = alpha;

      // Glow halo
      const gP = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, pr * 2.6);
      gP.addColorStop(0, hexRgba(ac, 0.38));
      gP.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(pos.x, pos.y, pr * 2.6, 0, Math.PI * 2);
      ctx.fillStyle = gP; ctx.fill();

      // Body
      ctx.beginPath(); ctx.arc(pos.x, pos.y, pr, 0, Math.PI * 2);
      ctx.fillStyle = ac; ctx.fill();

      // Shadow crescent
      ctx.beginPath(); ctx.arc(pos.x + pr * 0.35, pos.y - pr * 0.06, pr * 0.88, 0, Math.PI * 2);
      ctx.fillStyle = bg; ctx.fill();

      // Progress arc ring
      if (p > 0) {
        ctx.globalAlpha = alpha * 0.72;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, pr + 2.8, -Math.PI/2, -Math.PI/2 + (p/100)*Math.PI*2);
        ctx.strokeStyle = ac;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Label (front half)
      if (depth > 0.36) {
        const la = (depth - 0.36) / 0.64;
        ctx.globalAlpha = 0.3 + la * 0.7;
        ctx.font = `${Math.round(9 + depth * 2)}px 'DM Sans',sans-serif`;
        ctx.fillStyle = '#e8f5f2';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        const lbl = sub.name.length > 14 ? sub.name.slice(0,13) + '…' : sub.name;
        ctx.fillText(lbl, pos.x, pos.y + pr + 3);
        if (p > 0) {
          ctx.font = `500 ${Math.round(8 + depth)}px 'DM Sans',sans-serif`;
          ctx.fillStyle = ac;
          ctx.fillText(p + '%', pos.x, pos.y + pr + 3 + Math.round(10 + depth * 2) + 1);
        }
        ctx.globalAlpha = 1;
      }

      hits.push({sub, x: pos.x, y: pos.y, r: pr * 1.8});
    }
    this._hits = hits;
  },

  _loop() {
    const FPS = 30; let last = 0;
    const tick = ts => {
      this.raf = requestAnimationFrame(tick);
      if (ts - last < 1000/FPS - 1) return;
      last = ts;
      if (!this.dragging) this.t += 1/FPS;
      this._draw();
    };
    this.raf = requestAnimationFrame(tick);
  },

  _bind() {
    const c = this.canvas;
    this._ets = e => {
      if (e.touches.length !== 1) return;
      this.dragging = true; this.dragDx = 0;
      this.dragStart = {x: e.touches[0].clientX, rot: this.rotation};
    };
    this._etm = e => {
      if (!this.dragging || e.touches.length !== 1) return;
      e.preventDefault();
      this.dragDx = e.touches[0].clientX - this.dragStart.x;
      this.rotation = this.dragStart.rot + (this.dragDx / this._W) * Math.PI * 3;
    };
    this._ete = e => {
      if (!this.dragging) return;
      this.dragging = false;
      if (Math.abs(this.dragDx) < 8 && e.changedTouches.length) {
        const t = e.changedTouches[0];
        const rect = c.getBoundingClientRect();
        this._tap(t.clientX - rect.left, t.clientY - rect.top);
      }
    };
    this._ems = e => { this.dragging = true; this.dragDx = 0; this.dragStart = {x: e.clientX, rot: this.rotation}; };
    this._emm = e => {
      if (!this.dragging) return;
      this.dragDx = e.clientX - this.dragStart.x;
      this.rotation = this.dragStart.rot + (this.dragDx / this._W) * Math.PI * 3;
    };
    this._emu = e => {
      if (!this.dragging) return;
      const dx = Math.abs(e.clientX - this.dragStart.x);
      this.dragging = false;
      if (dx < 5) { const rect = c.getBoundingClientRect(); this._tap(e.clientX - rect.left, e.clientY - rect.top); }
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
      if (dx*dx + dy*dy <= h.r*h.r) { Nav.detail(h.sub.id); return; }
    }
  },
};

/* ── MATH ────────────────────────────────────────────── */
function calcPct(id) {
  const {tareas,examenes} = getProgress(id);
  const parts = [];
  if (tareas.length) parts.push(tareas.filter(t=>t.done).length/tareas.length);
  const graded = examenes.filter(e=>e.grade!=null);
  if (graded.length) parts.push(graded.reduce((s,e)=>s+e.grade,0)/graded.length/10);
  return parts.length ? Math.round(parts.reduce((a,b)=>a+b,0)/parts.length*100) : 0;
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

/* ══════════════════════════════════════════════════════
   RENDER
   ══════════════════════════════════════════════════════ */
const R = {

  /* ── HOME: solar system + cards below ── */
  home() {
    SolarSys.stop();
    document.getElementById('av-header-title').textContent = 'Avance';
    document.getElementById('av-back').style.display = 'none';
    document.getElementById('av-add-pill').style.display = 'flex';

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
          <div class="av-empty-body">Toca <strong>+ Materia</strong> arriba para agregar tu primera materia.</div>
        </div>`;
      return;
    }

    /* Stats for summary banner */
    const totalT  = subs.reduce((s,sub)=>s+getProgress(sub.id).tareas.length,0);
    const doneT   = subs.reduce((s,sub)=>s+getProgress(sub.id).tareas.filter(t=>t.done).length,0);
    const pending = totalT - doneT;
    const overall = Math.round(subs.reduce((s,sub)=>s+calcPct(sub.id),0)/subs.length);
    const Rv=24, circ=+(2*Math.PI*Rv).toFixed(2);
    const dash=+((overall/100)*circ).toFixed(2), off=+(circ/4).toFixed(2);

    /* Build cards grouped by semestre */
    const bySem = {};
    for (const sub of subs) { const k=sub.semestre||''; (bySem[k]=bySem[k]||[]).push(sub); }
    const semKeys = Object.keys(bySem).sort((a,b) => {
      if(a===''&&b!=='') return 1; if(b===''&&a!=='') return -1; return Number(a)-Number(b);
    });

    let cardsHtml = '';
    for (const sem of semKeys) {
      cardsHtml += `<div class="av-sem-label">${sem?`Semestre ${esc(sem)}°`:'Sin semestre'}</div>`;
      for (const sub of bySem[sem]) {
        const {bg,ac} = getColor(sub.colorIdx||0);
        const p = calcPct(sub.id);
        const {tareas,examenes} = getProgress(sub.id);
        const done   = tareas.filter(t=>t.done).length;
        const graded = examenes.filter(e=>e.grade!=null);
        const avgEx  = graded.length?(graded.reduce((s,e)=>s+e.grade,0)/graded.length).toFixed(1):null;
        const metaParts = [];
        if (sub.profesor) metaParts.push(sub.profesor);
        const sched=[]; if(sub.dias&&sub.dias.length)sched.push(sub.dias.join(' · ')); if(sub.hora)sched.push(sub.hora);
        if (sched.length) metaParts.push(sched.join('  '));
        const metaText = metaParts.join(' — ');
        const dotClass = (!tareas.length&&!examenes.length)?'av-status-dot--empty':p===100?'av-status-dot--done':'av-status-dot--partial';
        let chips = '';
        if (tareas.length)   chips += `<span class="av-chip${done===tareas.length?' av-chip--done':''}">${done}/${tareas.length} tareas</span>`;
        if (examenes.length) {
          if (avgEx!=null) { const gc=gradeColor(parseFloat(avgEx)); chips+=`<span class="av-chip" style="color:${gc};border-color:${gc}44">${avgEx} prom</span>`; }
          else chips += `<span class="av-chip">${examenes.length} ex.</span>`;
        }
        if (!chips) chips = `<span class="av-chip av-chip--empty">Sin registros</span>`;
        cardsHtml += `
        <div class="av-card" style="--pb:${bg};--pa:${ac}" onclick="Nav.detail('${esc(sub.id)}')">
          <div class="av-card-thumb">
            <span class="av-status-dot ${dotClass}"></span>
            ${mkPlanetSvg(sub.colorIdx||0, ac)}
          </div>
          <div class="av-card-content">
            <div class="av-card-row1">
              <span class="av-card-name">${esc(sub.name)}</span>
              <span class="av-card-pct" style="color:${ac}">${p}%</span>
            </div>
            ${metaText?`<div class="av-card-meta">${esc(metaText)}</div>`:''}
            <div class="av-card-progress"><div class="av-card-bar" style="width:${p}%;background:${ac}"></div></div>
            <div class="av-card-chips">${chips}</div>
          </div>
          <div class="av-card-arrow">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>`;
      }
    }

    main.innerHTML = `
      <!-- ═══ SOLAR SYSTEM ═══ -->
      <div class="av-solar-wrap" id="av-solar-wrap">
        <div class="av-solar-hint">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Arrastra para girar · Toca un planeta
        </div>
        <button class="av-to-cards-btn" onclick="document.getElementById('av-cards-top').scrollIntoView({behavior:'smooth'})">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          Ver materias
        </button>
      </div>

      <!-- ═══ SUMMARY ═══ -->
      <div id="av-cards-top" class="av-summary">
        <div class="av-summary-ring">
          <svg viewBox="0 0 60 60" width="64" height="64" style="transform:rotate(-90deg)">
            <circle cx="30" cy="30" r="${Rv}" fill="none" stroke="rgba(155,191,181,.1)" stroke-width="4.5"/>
            <circle cx="30" cy="30" r="${Rv}" fill="none" stroke="var(--gold)" stroke-width="4.5"
              stroke-linecap="round" stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${off}"/>
          </svg>
          <span class="av-summary-ring-num">${overall}%</span>
        </div>
        <div class="av-summary-body">
          <div class="av-summary-msg">${motivMsg(overall)}</div>
          <div class="av-summary-stats">
            <span>${pending} pendiente${pending!==1?'s':''}</span>
            <span>${subs.length} materia${subs.length!==1?'s':''}</span>
          </div>
          <div class="av-summary-bar-wrap">
            <div class="av-summary-bar" style="width:${overall}%"></div>
          </div>
        </div>
      </div>

      <!-- ═══ CARDS ═══ -->
      ${cardsHtml}`;

    SolarSys.init(document.getElementById('av-solar-wrap'), subs);
    window.scrollTo({top:0,behavior:'instant'});
  },

  /* ── DETAIL ── */
  detail(subId) {
    SolarSys.stop();
    const subs = getSubjects();
    const sub  = subs.find(s=>s.id===subId);
    if (!sub) { R.home(); return; }

    const {bg,ac} = getColor(sub.colorIdx||0);
    document.getElementById('av-header-title').textContent = sub.name;
    document.getElementById('av-back').style.display = 'flex';
    document.getElementById('av-add-pill').style.display = 'none';

    const {tareas,examenes} = getProgress(subId);
    const p      = calcPct(subId);
    const done   = tareas.filter(t=>t.done).length;
    const graded = examenes.filter(e=>e.grade!=null);
    const avgEx  = graded.length?(graded.reduce((s,e)=>s+e.grade,0)/graded.length).toFixed(1):null;
    const sched  = []; if(sub.dias&&sub.dias.length)sched.push(sub.dias.join(' · ')); if(sub.hora)sched.push(sub.hora);

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
            <input class="av-grade-inp" type="number" min="0" max="10" step="0.5"
              value="${e.grade!=null?e.grade:''}" placeholder="—"
              style="color:${gradeColor(e.grade)}"
              oninput="this.style.color=gradeColor(parseFloat(this.value))"
              onchange="A.setGrade('${esc(subId)}',${i},this.value)" autocomplete="off">
            <span class="av-grade-slash">/10</span>
          </div>
          <button class="av-del" onclick="A.delExamen('${esc(subId)}',${i})" aria-label="Eliminar">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>`).join('')
      : `<div class="av-empty-msg">Sin exámenes registrados</div>`;

    document.getElementById('av-main').innerHTML = `
      <div class="av-detail">
        <div class="av-hero" style="--pb:${bg};--pa:${ac}">
          <div class="av-hero-top">
            <div class="av-hero-planet">${mkPlanetSvg(sub.colorIdx||0,ac)}</div>
            <div class="av-hero-info">
              ${sub.profesor?`<div class="av-hero-prof">${esc(sub.profesor)}</div>`:''}
              ${sched.length?`<div class="av-hero-sched">${esc(sched.join('  '))}</div>`:''}
            </div>
            <div class="av-hero-pct" id="av-hero-pct" style="color:${ac}">${p}%</div>
          </div>
          <div class="av-hero-bar-wrap">
            <div class="av-hero-bar" id="av-hero-bar" style="width:${p}%;background:${ac}"></div>
          </div>
          <div class="av-hero-meta">
            <span>${done} / ${tareas.length} tareas completadas</span>
            ${avgEx!=null?`<span>Promedio: <strong style="color:${gradeColor(parseFloat(avgEx))}">${avgEx}</strong></span>`:''}
          </div>
        </div>
        <div class="av-section">
          <div class="av-sec-head">
            <span class="av-sec-title">Tareas</span>
            <button class="av-sec-add" onclick="A.openModal('tarea','${esc(subId)}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>Agregar
            </button>
          </div>${tareaRows}
        </div>
        <div class="av-section">
          <div class="av-sec-head">
            <span class="av-sec-title">Exámenes</span>
            <button class="av-sec-add" onclick="A.openModal('examen','${esc(subId)}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>Agregar
            </button>
          </div>${examRows}
        </div>
        <div class="av-section av-section--del">
          <button class="av-del-sub-btn" onclick="A.delSubject('${esc(subId)}')">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/>
            </svg>Eliminar materia
          </button>
        </div>
      </div>`;

    window.scrollTo({top:0,behavior:'instant'});
  },

  _refreshHero(subId) {
    const p = calcPct(subId);
    const pEl=document.getElementById('av-hero-pct'), bEl=document.getElementById('av-hero-bar');
    if(pEl) pEl.textContent=p+'%'; if(bEl) bEl.style.width=p+'%';
  },
};

/* ══════════════════════════════════════════════════════
   MODALS
   ══════════════════════════════════════════════════════ */
let _ctx = null;
const Modal = {
  open(type,subId) {
    _ctx = {type,subId};
    document.getElementById('av-modal-title').textContent = type==='tarea'?'Nueva tarea':'Nuevo examen';
    document.getElementById('av-modal-inp').value = '';
    const dr=document.getElementById('av-modal-date-row'), di=document.getElementById('av-modal-date');
    if(dr){dr.style.display=type==='tarea'?'block':'none'; if(di)di.value='';}
    document.getElementById('av-modal').style.display = 'flex';
    setTimeout(()=>document.getElementById('av-modal-inp').focus(),80);
  },
  close() { _ctx=null; document.getElementById('av-modal').style.display='none'; },
  confirm() {
    if(!_ctx) return;
    const text=document.getElementById('av-modal-inp').value.trim();
    if(!text){document.getElementById('av-modal-inp').focus();return;}
    const {type,subId}=_ctx, p=getProgress(subId);
    if(type==='tarea'){
      const di=document.getElementById('av-modal-date');
      p.tareas.push({text,done:false,dueDate:di&&di.value?di.value:null});
    } else p.examenes.push({text,grade:null});
    saveProgress(subId,p); Modal.close(); R.detail(subId);
  },
};

const SubModal = {
  open() {
    ['av-sub-name','av-sub-prof'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('av-sub-hora').value='';
    document.getElementById('av-sub-sem').value='';
    document.querySelectorAll('.av-day-btn').forEach(b=>b.classList.remove('av-day-btn--on'));
    document.getElementById('av-sub-modal').style.display='flex';
    setTimeout(()=>document.getElementById('av-sub-name').focus(),80);
  },
  close() { document.getElementById('av-sub-modal').style.display='none'; },
  confirm() {
    const name=document.getElementById('av-sub-name').value.trim();
    if(!name){document.getElementById('av-sub-name').focus();return;}
    const profesor=document.getElementById('av-sub-prof').value.trim();
    const hora=document.getElementById('av-sub-hora').value;
    const semestre=document.getElementById('av-sub-sem').value;
    const dias=[...document.querySelectorAll('.av-day-btn--on')].map(b=>b.dataset.day);
    const subs=getSubjects();
    subs.push({id:uid(),name,profesor,dias,hora,semestre,colorIdx:subs.length});
    saveSubjects(subs); SubModal.close(); R.home();
  },
};

/* ══════════════════════════════════════════════════════
   ACTIONS
   ══════════════════════════════════════════════════════ */
const A = {
  openSubModal:      ()=>SubModal.open(),
  closeSubModal:     ()=>SubModal.close(),
  confirmAddSubject: ()=>SubModal.confirm(),
  openModal:         (t,id)=>Modal.open(t,id),
  toggleTarea(id,i) { const p=getProgress(id);p.tareas[i].done=!p.tareas[i].done;saveProgress(id,p);R.detail(id); },
  delTarea(id,i)    { const p=getProgress(id);p.tareas.splice(i,1);saveProgress(id,p);R.detail(id); },
  delExamen(id,i)   { const p=getProgress(id);p.examenes.splice(i,1);saveProgress(id,p);R.detail(id); },
  setGrade(id,i,v)  { const n=parseFloat(v),p=getProgress(id);p.examenes[i].grade=isNaN(n)?null:Math.max(0,Math.min(10,n));saveProgress(id,p);R._refreshHero(id); },
  delSubject(id) {
    saveSubjects(getSubjects().filter(s=>s.id!==id));
    const d=_load();delete(d.progress=d.progress||{})[id];_persist(d);
    history.pushState({view:'home'},'','#'); Nav._goHome();
  },
};

/* ══════════════════════════════════════════════════════
   NAVIGATION + INIT
   ══════════════════════════════════════════════════════ */
const S={view:'home',subId:null};
const Nav={
  detail(id){S.view='detail';S.subId=id;history.pushState({view:'detail',subId:id},'',`#mat/${id}`);R.detail(id);},
  _goHome() {S.view='home';S.subId=null;R.home();},
};

(function init(){
  history.scrollRestoration='manual';
  const hash=location.hash;
  if(hash.startsWith('#mat/')){const id=hash.slice(5);if(getSubjects().find(s=>s.id===id)){S.view='detail';S.subId=id;}}
  history.replaceState({view:S.view,subId:S.subId||undefined},'',location.href);

  if(S.view==='detail'&&S.subId) R.detail(S.subId); else Nav._goHome();

  document.getElementById('av-back').addEventListener('click',()=>{history.pushState({view:'home'},'','#');Nav._goHome();});
  window.addEventListener('popstate',e=>{
    const st=e.state||{};S.view=st.view||'home';S.subId=st.subId||null;
    if(S.view==='detail'&&S.subId)R.detail(S.subId);else Nav._goHome();
  });
  document.getElementById('av-modal-cancel').addEventListener('click',()=>Modal.close());
  document.getElementById('av-modal-ok').addEventListener('click',()=>Modal.confirm());
  document.getElementById('av-modal').addEventListener('click',e=>{if(e.target===document.getElementById('av-modal'))Modal.close();});
  document.getElementById('av-modal-inp').addEventListener('keydown',e=>{if(e.key==='Enter')Modal.confirm();if(e.key==='Escape')Modal.close();});
  document.getElementById('av-sub-cancel').addEventListener('click',()=>SubModal.close());
  document.getElementById('av-sub-ok').addEventListener('click',()=>SubModal.confirm());
  document.getElementById('av-sub-modal').addEventListener('click',e=>{if(e.target===document.getElementById('av-sub-modal'))SubModal.close();});
  document.getElementById('av-sub-name').addEventListener('keydown',e=>{if(e.key==='Escape')SubModal.close();});
  document.getElementById('av-days-row').addEventListener('click',e=>{const b=e.target.closest('.av-day-btn');if(b)b.classList.toggle('av-day-btn--on');});
})();
