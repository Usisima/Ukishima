/* stars-bg.js — animated ASCII star field background, shared by all pages.
   Render en canvas: regenerar el campo vía innerHTML a 30fps creaba/destruía
   cientos de nodos DOM por frame y el GC congelaba la página (~3 s tras cargar). */
(function () {
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cv = document.createElement('canvas');
  cv.id = 'stars-bg-pre';
  cv.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(cv, document.body.firstChild);

  // Misma retícula que la versión <pre>: columnas de 0.6em a ≥4px de fuente
  const _W   = window.innerWidth;
  const _H   = window.innerHeight;
  const COLS = Math.floor(_W / (4 * 0.6));
  const fsPx = _W / (COLS * 0.6);
  const colW  = fsPx * 0.6;
  const lineH = fsPx * 1.6;
  const ROWS  = Math.max(Math.ceil(_H / lineH) + 2, 18);

  cv.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;' +
    'pointer-events:none;opacity:0.22;mix-blend-mode:screen;';

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  cv.width  = Math.round(_W * DPR);
  cv.height = Math.round(_H * DPR);
  const ctx = cv.getContext('2d');
  ctx.scale(DPR, DPR);
  const FONT = fsPx.toFixed(3) + "px 'DM Mono',monospace";
  ctx.font = FONT;
  ctx.textBaseline = 'middle';

  const STAR_CH = ['.', 'o', 'o', 'O', '0'];

  // Colores cacheados (lit siempre es múltiplo de 5): cero strings por frame
  const GREY = [], BLUE = [];
  for (let l = 0; l <= 100; l += 5) {
    GREY[l] = 'hsl(0,0%,' + l + '%)';
    BLUE[l] = 'hsl(210,25%,' + l + '%)';
  }

  // Seeded PRNG — deterministic field so no re-randomisation on resize
  let seed = 0xabcdef01;
  const rand = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967295; };

  const nStars = Math.round(200 * ROWS / 26);
  const starB  = new Float32Array(COLS * ROWS);
  const starTw = new Float32Array(COLS * ROWS);
  const starPh = new Float32Array(COLS * ROWS);
  const starSz = new Uint8Array(COLS * ROWS);
  const starIdx = [];

  for (let k = 0; k < nStars; k++) {
    const c = Math.floor(rand() * COLS);
    const r = Math.floor(rand() * ROWS);
    const i = r * COLS + c;
    if (starB[i] === 0) starIdx.push(i);
    starB[i]  = 0.18 + rand() * 0.62;
    starTw[i] = 1.4  + rand() * 7.5;   // fast: 1.4–8.9 Hz
    starPh[i] = rand() * 6.2832;
    starSz[i] = Math.min(4, Math.floor(rand() * rand() * 5.5));
  }

  // Shooting stars
  const shoots = [];
  let nextShootMs = 400 + Math.random() * 600;
  const S_CH = ['0', '-', '-', '.', '.', '`'];
  const S_LT = [100, 85, 68, 50, 32, 16];

  function spawnShoot(elapsedMs) {
    const spd = 220 + Math.random() * 160;
    const d   = Math.random();
    let x, y, vx, vy;
    if (d < 0.11) {                              // izq → der, casi plano
      x = -8; y = Math.floor(Math.random() * ROWS * 0.85);
      vx = spd; vy = spd * (0.04 + Math.random() * 0.07);
    } else if (d < 0.22) {                       // der → izq, casi plano
      x = COLS + 8; y = Math.floor(Math.random() * ROWS * 0.85);
      vx = -spd; vy = spd * (0.04 + Math.random() * 0.07);
    } else if (d < 0.33) {                       // izq → der, diagonal arriba
      x = -8; y = Math.floor(ROWS * 0.25 + Math.random() * ROWS * 0.55);
      vx = spd; vy = -spd * (0.07 + Math.random() * 0.12);
    } else if (d < 0.44) {                       // der → izq, diagonal arriba
      x = COLS + 8; y = Math.floor(ROWS * 0.25 + Math.random() * ROWS * 0.55);
      vx = -spd; vy = -spd * (0.07 + Math.random() * 0.12);
    } else if (d < 0.55) {                       // arriba → abajo-der
      x = Math.floor(Math.random() * COLS * 0.65); y = -3;
      vx = spd * (0.12 + Math.random() * 0.18); vy = spd * 0.38;
    } else if (d < 0.63) {                       // arriba → abajo-izq
      x = Math.floor(COLS * 0.35 + Math.random() * COLS * 0.65); y = -3;
      vx = -spd * (0.12 + Math.random() * 0.18); vy = spd * 0.38;
    } else if (d < 0.71) {                       // abajo → arriba-der
      x = Math.floor(Math.random() * COLS * 0.65); y = ROWS + 3;
      vx = spd * (0.12 + Math.random() * 0.18); vy = -spd * 0.38;
    } else if (d < 0.79) {                       // abajo → arriba-izq
      x = Math.floor(COLS * 0.35 + Math.random() * COLS * 0.65); y = ROWS + 3;
      vx = -spd * (0.12 + Math.random() * 0.18); vy = -spd * 0.38;
    } else if (d < 0.89) {                       // diagonal empinada der
      x = Math.floor(Math.random() * COLS * 0.5); y = -3;
      vx = spd * 0.35; vy = spd * 0.52;
    } else {                                     // diagonal empinada izq
      x = Math.floor(COLS * 0.5 + Math.random() * COLS * 0.5); y = -3;
      vx = -spd * 0.35; vy = spd * 0.52;
    }
    const r2 = Math.random();
    const len = r2 < 0.20 ? 4  + Math.floor(Math.random() * 5)
              : r2 < 0.65 ? 9  + Math.floor(Math.random() * 8)
              : r2 < 0.88 ? 17 + Math.floor(Math.random() * 7)
              :              24 + Math.floor(Math.random() * 6);
    const spread = 1.3 + Math.random() * 2.0;
    const bri    = 0.28 + Math.random() * 0.80;
    shoots.push({ x, y, vx, vy, len, spread, bri });
    nextShootMs = elapsedMs + 500 + Math.random() * 800;
  }

  let last = null, elapsed = 0, lastRender = 0, drawn = false;
  const FRAME_MS = 1000 / 30; // 30 fps cap
  let rafId = null;
  const sMap = new Map(); // reutilizado entre frames

  function tick(ts) {
    if (last !== null) elapsed += ts - last;
    last = ts;

    // Motion reducido: un solo frame estático y el loop se detiene
    if (!REDUCED || !drawn) rafId = requestAnimationFrame(tick);

    if (ts - lastRender < FRAME_MS) return;
    lastRender = ts;
    drawn = true;

    const t = elapsed / 1000;

    // Spawn
    if (elapsed > nextShootMs) spawnShoot(elapsed);

    // Update positions + build overlay map
    sMap.clear();
    for (let i = shoots.length - 1; i >= 0; i--) {
      const s = shoots[i];
      s.x += s.vx * (FRAME_MS / 1000);
      s.y += s.vy * (FRAME_MS / 1000);
      if (s.x > COLS + 14 || s.x < -14 || s.y > ROWS + 5 || s.y < -5) { shoots.splice(i, 1); continue; }
      const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      const ux = s.vx / spd, uy = s.vy / spd;
      for (let t2 = 0; t2 < s.len; t2++) {
        const cx = Math.round(s.x - ux * t2 * s.spread);
        const cy = Math.round(s.y - uy * t2);
        if (cx >= 0 && cx < COLS && cy >= 0 && cy < ROWS) {
          const lit = Math.min(100, Math.round(S_LT[Math.min(t2, S_LT.length - 1)] * s.bri / 5) * 5);
          sMap.set(cy * COLS + cx, (lit << 3) | Math.min(t2, S_CH.length - 1));
        }
      }
    }

    ctx.clearRect(0, 0, _W, _H);

    // Estrellas fijas (las celdas con fugaz encima se pintan después)
    for (let k = 0; k < starIdx.length; k++) {
      const idx = starIdx[k];
      if (sMap.has(idx)) continue;
      const sb = starB[idx] * Math.max(0, 0.5 + 0.5 * Math.sin(t * starTw[idx] + starPh[idx]));
      if (sb <= 0.11) continue;
      const lit = Math.round((26 + sb * 60) / 5) * 5;
      ctx.fillStyle = GREY[lit];
      ctx.fillText(STAR_CH[starSz[idx]], (idx % COLS) * colW, ((idx / COLS | 0) + 0.5) * lineH);
    }

    // Estrellas fugaces
    sMap.forEach((packed, idx) => {
      ctx.fillStyle = BLUE[packed >> 3];
      ctx.fillText(S_CH[packed & 7], (idx % COLS) * colW, ((idx / COLS | 0) + 0.5) * lineH);
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      rafId = null;
      last = null; // evita salto de tiempo al volver
    } else if (!rafId && !(REDUCED && drawn)) {
      rafId = requestAnimationFrame(tick);
    }
  });

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    ctx.font = FONT; // re-asigna ya con DM Mono cargada
    rafId = requestAnimationFrame(tick);
  });
})();
