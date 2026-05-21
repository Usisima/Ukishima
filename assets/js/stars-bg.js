/* stars-bg.js — animated ASCII star field background, shared by all pages */
(function () {
  const pre = document.createElement('pre');
  pre.id = 'stars-bg-pre';
  pre.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(pre, document.body.firstChild);

  const COLS  = 90;
  const FS_VW = 100 / (COLS * 0.6);          // vw so COLS characters fill 100vw
  const fsPx  = Math.max(4, Math.min(8, window.innerWidth * FS_VW / 100));
  const lineH = fsPx * 1.6;
  const ROWS  = Math.max(Math.ceil(window.innerHeight / lineH) + 2, 18);

  pre.style.cssText =
    'position:fixed;top:0;left:0;right:0;bottom:0;z-index:0;' +
    'pointer-events:none;overflow:hidden;' +
    'font-family:\'DM Mono\',monospace;' +
    `font-size:clamp(4px,${FS_VW.toFixed(3)}vw,8px);` +
    `width:${COLS}ch;max-width:100vw;` +
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

  let last = null, elapsed = 0;

  function tick(ts) {
    if (last !== null) elapsed += ts - last;
    last = ts;
    const t = elapsed / 1000;

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
    requestAnimationFrame(tick);
  }

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(tick));
})();
