(function () {
  const pre      = document.getElementById('bh-art');
  const preStars = document.getElementById('bh-stars');
  if (!pre) return;

  var _rafId    = null;
  var _revealed = false;

  function init() {

  if (_rafId) cancelAnimationFrame(_rafId);

  const _W   = window.innerWidth;
  const COLS = Math.floor(_W / (4 * 0.6));
  const fsPx = _W / (COLS * 0.6);
  pre.style.fontSize   = `${fsPx.toFixed(3)}px`;
  pre.style.width      = '100%';
  pre.style.overflowX  = 'hidden';
  if (preStars) {
    preStars.style.fontSize  = pre.style.fontSize;
    preStars.style.width     = '100%';
    preStars.style.overflowX = 'hidden';
  }

  const lineH    = fsPx * 1.6;
  const headerEl = document.querySelector('.header');
  const navEl    = document.querySelector('.bottom-nav');
  const wrapH    = window.innerHeight
                 - (headerEl ? headerEl.getBoundingClientRect().height : 0)
                 - (navEl    ? navEl.getBoundingClientRect().height    : 0);
  const ROWS = Math.max(Math.ceil(wrapH / lineH), 20);

  const CX = COLS >> 1;
  const _dash      = document.getElementById('dash-bottom');
  const _contentH  = _dash ? _dash.getBoundingClientRect().height : 0;
  const _gapBottom = Math.round(wrapH * 0.15);
  const _gapBH     = Math.round(wrapH * 0.07);
  const _contentTop = wrapH - _gapBottom - _contentH;
  const CY = Math.max(5, Math.round((_contentTop - _gapBH) / lineH));
  if (_dash) _dash.style.top = _contentTop + 'px';

  const _bhCyPct = (CY * lineH / wrapH * 100).toFixed(1) + '%';
  pre.style.setProperty('--bh-cy', _bhCyPct);
  pre.classList.add('bh-on');
  const AR = 0.375;
  const _sc = Math.min(COLS, 160) / 160;
  const SR  = Math.max(4, Math.round(8  * _sc)), SRB = SR * AR;
  const INC = 78 * Math.PI / 180;
  const DRA = Math.max(20, Math.round(62 * _sc)), DRB = DRA * Math.cos(INC) * AR;
  const PERIOD = 4500;

  // Edita hue para cambiar colores: 0°=rojo 60°=amarillo 120°=verde 180°=cian 240°=azul 300°=magenta
  const RINGS = [
    { rc: 0.24,  w: 0.090, hue: 333, off: 0.7 },
    { rc: 0.455, w: 0.085, hue: 315, off: 2.4 },
    { rc: 0.645, w: 0.060, hue: 250, off: 4.0 },
    { rc: 0.880, w: 0.060, hue: 189, off: 5.6 },
  ];
  const RING_HUE    = 305;
  const SCATTER_HUE = 186;
  const BASE_RC = 0.45;

  const STAR_CH   = ['.', 'o', 'o', 'O', '0'];
  const STAR_HUES = [215, 195, 52, 24];
  const STARS = (() => {
    let s = 0xabcdef01;
    const r = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967295; };
    return Array.from({ length: Math.round(220 * ROWS / 26) }, () => ({
      c: Math.floor(r() * COLS), r: Math.floor(r() * ROWS),
      b: 0.06 + r() * 0.46, tw: 0.1 + r() * 0.9, ph: r() * 6.28,
      sz: Math.min(4, Math.floor(r() * r() * 5.5)),
      hz: Math.floor(r() * 4),
    }));
  })();
  const starB  = new Float32Array(COLS * ROWS);
  const starTw = new Float32Array(COLS * ROWS);
  const starPh = new Float32Array(COLS * ROWS);
  const starSz = new Uint8Array(COLS * ROWS);
  const starHz = new Uint8Array(COLS * ROWS);
  for (const s of STARS) {
    const i = s.r * COLS + s.c;
    starB[i] = s.b; starTw[i] = s.tw; starPh[i] = s.ph;
    starSz[i] = s.sz; starHz[i] = s.hz;
  }

  const LV_RAW = " .'`,:;l!i~-_=+<>^?][)(|/\\1tjfrnxuvczXYUCLJQ0OZmwqpMW*#8B&@$";
  const LV = [...LV_RAW].map(c => c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '&' ? '&amp;' : c);
  const N  = LV.length - 1;
  const lv = b => LV[Math.min(N, Math.max(0, Math.round(b * N)))];
  const wrap = a => a - 2 * Math.PI * Math.round(a / (2 * Math.PI));

  const meta = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      sd: Math.hypot((c - CX) / SR,  (r - CY) / SRB),
      sa: Math.atan2((r - CY) / SRB, (c - CX) / SR),
      dd: Math.hypot((c - CX) / DRA, (r - CY) / DRB),
      da: Math.atan2((r - CY) / DRB, (c - CX) / DRA),
    }))
  );

  const shoots = [];
  let nextShootMs = 3000 + Math.random() * 3000;
  const S_CH = ['0', '-', '-', '.', '.', '`'];
  const S_LT = [96, 80, 62, 44, 28, 14];

  function spawnShoot(elapsedMs) {
    const spd = 220 + Math.random() * 160;
    const d   = Math.random();
    let x, y, vx, vy;
    if (d < 0.11) {
      x = -8; y = Math.floor(Math.random() * ROWS * 0.85);
      vx = spd; vy = spd * (0.04 + Math.random() * 0.07);
    } else if (d < 0.22) {
      x = COLS + 8; y = Math.floor(Math.random() * ROWS * 0.85);
      vx = -spd; vy = spd * (0.04 + Math.random() * 0.07);
    } else if (d < 0.33) {
      x = -8; y = Math.floor(ROWS * 0.25 + Math.random() * ROWS * 0.55);
      vx = spd; vy = -spd * (0.07 + Math.random() * 0.12);
    } else if (d < 0.44) {
      x = COLS + 8; y = Math.floor(ROWS * 0.25 + Math.random() * ROWS * 0.55);
      vx = -spd; vy = -spd * (0.07 + Math.random() * 0.12);
    } else if (d < 0.55) {
      x = Math.floor(Math.random() * COLS * 0.65); y = -3;
      vx = spd * (0.12 + Math.random() * 0.18); vy = spd * 0.38;
    } else if (d < 0.63) {
      x = Math.floor(COLS * 0.35 + Math.random() * COLS * 0.65); y = -3;
      vx = -spd * (0.12 + Math.random() * 0.18); vy = spd * 0.38;
    } else if (d < 0.71) {
      x = Math.floor(Math.random() * COLS * 0.65); y = ROWS + 3;
      vx = spd * (0.12 + Math.random() * 0.18); vy = -spd * 0.38;
    } else if (d < 0.79) {
      x = Math.floor(COLS * 0.35 + Math.random() * COLS * 0.65); y = ROWS + 3;
      vx = -spd * (0.12 + Math.random() * 0.18); vy = -spd * 0.38;
    } else if (d < 0.89) {
      x = Math.floor(Math.random() * COLS * 0.5); y = -3;
      vx = spd * 0.35; vy = spd * 0.52;
    } else {
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
    nextShootMs = elapsedMs + 3500 + Math.random() * 4500;
  }

  let elapsed = 0, last = null, lastRender = 0;
  const FRAME_MS = 1000 / 30;

  function tick(ts) {
    if (last !== null) elapsed += ts - last;
    last = ts;

    _rafId = requestAnimationFrame(tick);
    if (ts - lastRender < FRAME_MS) return;
    lastRender = ts;

    const phase = (elapsed / PERIOD) * 2 * Math.PI;
    const t_sec = elapsed / 1000;

    if (elapsed > nextShootMs) spawnShoot(elapsed);

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
            co: `hsl(195,45%,${lit}%)`,
          };
        }
      }
    }

    let html = '', htmlStars = '';

    for (let r = 0; r < ROWS; r++) {
      if (r > 0) { html += '\n'; htmlStars += '\n'; }
      let bhColor = null, bhChars = '';
      let stColor = null, stChars = '';

      for (let c = 0; c < COLS; c++) {
        const { sd, sa, dd, da } = meta[r][c];

        const nearSide = r > CY;

        let diskB = 0, diskRelA = 0, diskHue = 30;
        for (const ring of RINGS) {
          const dt     = (dd - ring.rc) / ring.w;
          const radial = Math.exp(-dt * dt * 1.8);
          if (radial < 0.02) continue;
          const phLocal  = phase * (BASE_RC / ring.rc) ** 1.5 + ring.off;
          const relA     = wrap(da - phLocal);
          const trailSq  = (0.28 + ring.rc * 1.9) ** 2 * 0.44;
          const angular  = relA <= 0
            ? Math.exp(-relA * relA * 6)
            : Math.exp(-relA * relA / trailSq);
          const contrib  = radial * (0.10 + 0.90 * angular);
          if (contrib > diskB) { diskB = contrib; diskRelA = relA; diskHue = ring.hue; }
        }

        let ringB = 0, ringT = 0;
        if (sd >= 0.78 && sd < 1.85) {
          const boost = 0.65 + 0.35 * Math.max(0, Math.cos(wrap(sa - phase)));
          ringT = sd < 1.0 ? (sd - 0.78) / 0.22 : Math.max(0, 1 - (sd - 1.0) / 0.85);
          ringB = ringT * 0.88 * boost;
        }

        let scatterB = 0;
        if (dd > 0.96 && dd < 1.65 && sd >= 0.78) {
          const dist    = (dd - 0.96) / 0.69;
          const falloff = Math.exp(-dist * dist * 5.5);
          const phOuter = phase * (BASE_RC / 0.865) ** 1.5;
          const relA    = wrap(da - phOuter);
          const n1 = Math.abs(Math.sin(relA * 4.3 + t_sec * 0.5));
          const n2 = Math.abs(Math.sin(c * 5.9 + r * 9.7  + t_sec * 1.9));
          const n3 = Math.abs(Math.sin(c * 2.3 + r * 5.1  - t_sec * 1.5 + dd * 11));
          scatterB = falloff * n1 * n2 * n3;
        }

        const showDisk    = nearSide ? diskB > 0.01 : (diskB > 0.01 && ringB <= 0.02);
        const showRing    = !showDisk && ringB > 0.02 && sd >= 0.78;
        const showScatter = !showDisk && !showRing && sd >= 0.78 && scatterB > 0.42;
        const inVoid      = sd < 0.78;

        const idx = r * COLS + c;

        let ch = ' ', color = null;
        if (showDisk) {
          ch = lv(diskB);
          const dN = Math.max(0, Math.cos(diskRelA));
          const h  = Math.round((diskHue + dN * 14) / 5) * 5;
          const l  = Math.round((22 + dN * 44) / 5) * 5;
          color = `hsl(${h},95%,${l}%)`;
        } else if (showRing) {
          ch = lv(ringB);
          const l = Math.round((30 + ringT * 32) / 5) * 5;
          const s = Math.round((90 - ringT * 40) / 10) * 10;
          color = `hsl(${RING_HUE},${s}%,${l}%)`;
        } else if (showScatter) {
          ch = lv(scatterB * 0.44);
          const sl = Math.round((12 + scatterB * 28) / 5) * 5;
          color = `hsl(${SCATTER_HUE},95%,${sl}%)`;
        }

        if (color === bhColor) { bhChars += ch; }
        else {
          if (bhChars) html += bhColor ? `<span style="color:${bhColor}">${bhChars}</span>` : bhChars;
          bhColor = color; bhChars = ch;
        }

        let sch = ' ', scolor = null;
        if (!showDisk && !showRing && !showScatter && !inVoid) {
          if (starB[idx] > 0) {
            const sb = starB[idx] * (0.55 + 0.45 * Math.sin(t_sec * starTw[idx] + starPh[idx]));
            if (sb > 0.14) {
              sch = STAR_CH[starSz[idx]];
              const lit = Math.round((38 + sb * 58) / 5) * 5;
              const op  = (0.3 + sb * 0.7).toFixed(2);
              scolor = `hsla(210,18%,${lit}%,${op})`;
            }
          }
          const shot = sMap[idx];
          if (shot) { sch = shot.ch; scolor = shot.co; }
        }

        if (scolor === stColor) { stChars += sch; }
        else {
          if (stChars) htmlStars += stColor ? `<span style="color:${stColor}">${stChars}</span>` : stChars;
          stColor = scolor; stChars = sch;
        }
      }

      if (bhChars) html     += bhColor ? `<span style="color:${bhColor}">${bhChars}</span>` : bhChars;
      if (stChars) htmlStars += stColor ? `<span style="color:${stColor}">${stChars}</span>` : stChars;
    }

    pre.innerHTML = html;
    if (preStars) preStars.innerHTML = htmlStars;

    if (!_revealed) {
      _revealed = true;
      document.body.style.opacity = '1';
      document.querySelectorAll('.hdr-lp').forEach(function (p) {
        p.style.animationPlayState = 'running';
      });
    }
  }

  _rafId = requestAnimationFrame(tick);

  } // end init
  requestAnimationFrame(init);

  var _resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(function () { requestAnimationFrame(init); }, 150);
  });
})();
