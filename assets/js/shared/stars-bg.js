/* stars-bg.js — animated ASCII star field background, shared by all pages */
(function () {
  const pre = document.createElement('pre');
  pre.id = 'stars-bg-pre';
  pre.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(pre, document.body.firstChild);

  // Fill screen width exactly at ≥4px font
  const _W   = window.innerWidth;
  const COLS = Math.floor(_W / (4 * 0.6));   // fills full width, no cap
  const fsPx = _W / (COLS * 0.6);                          // exact fill, no gaps
  const lineH = fsPx * 1.6;
  const ROWS  = Math.max(Math.ceil(window.innerHeight / lineH) + 2, 18);

  pre.style.cssText =
    'position:fixed;top:0;left:0;right:0;bottom:0;z-index:0;' +
    'pointer-events:none;overflow:hidden;' +
    'font-family:\'DM Mono\',monospace;' +
    `font-size:${fsPx.toFixed(3)}px;` +
    'width:100%;' +
    'line-height:1.6;white-space:pre;' +
    'margin:0;padding:0;' +
    'opacity:0.22;mix-blend-mode:screen;' +
    'user-select:none;-webkit-user-select:none;';

  const STAR_CH = ['.', 'o', 'o', 'O', '0'];

  // Seeded PRNG — deterministic field so no re-randomisation on resize
  let seed = 0xabcdef01;
  const rand = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967295; };

  const nStars = Math.round(200 * ROWS / 26);
  const starB  = new Float32Array(COLS * ROWS);
  const starTw = new Float32Array(COLS * ROWS);
  const starPh = new Float32Array(COLS * ROWS);
  const starSz = new Uint8Array(COLS * ROWS);

  for (let k = 0; k < nStars; k++) {
    const c = Math.floor(rand() * COLS);
    const r = Math.floor(rand() * ROWS);
    const i = r * COLS + c;
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

  let last = null, elapsed = 0, lastRender = 0;
  const FRAME_MS = 1000 / 30; // 30 fps cap

  function tick(ts) {
    if (last !== null) elapsed += ts - last;
    last = ts;

    requestAnimationFrame(tick);

    if (ts - lastRender < FRAME_MS) return;
    lastRender = ts;

    const t = elapsed / 1000;

    // Spawn
    if (elapsed > nextShootMs) spawnShoot(elapsed);

    // Update positions + build overlay map
    const sMap = {};
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
          sMap[cy * COLS + cx] = {
            ch: S_CH[Math.min(t2, S_CH.length - 1)],
            co: `hsl(210,25%,${lit}%)`,
          };
        }
      }
    }

    let html = '';
    for (let r = 0; r < ROWS; r++) {
      if (r > 0) html += '\n';
      let rc = null, buf = '';

      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c;
        let ch = ' ', color = null;

        if (starB[idx] > 0) {
          const sb = starB[idx] * Math.max(0, 0.5 + 0.5 * Math.sin(t * starTw[idx] + starPh[idx]));
          if (sb > 0.11) {
            ch    = STAR_CH[starSz[idx]];
            const lit = Math.round((26 + sb * 60) / 5) * 5;
            color = `hsl(0,0%,${lit}%)`;
          }
        }

        // Shooting star overrides star field
        const shot = sMap[idx];
        if (shot) { ch = shot.ch; color = shot.co; }

        if (color === rc) {
          buf += ch;
        } else {
          if (buf) html += rc ? `<span style="color:${rc}">${buf}</span>` : buf;
          rc = color; buf = ch;
        }
      }
      if (buf) html += rc ? `<span style="color:${rc}">${buf}</span>` : buf;
    }

    pre.innerHTML = html;
  }

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(tick));
})();
