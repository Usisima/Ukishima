'use strict';

/* ═══════════════════════════════════════════════════════
   carrera.js  —  Registro multi-carrera de Ukishima
   ───────────────────────────────────────────────────────
   Se carga ANTES que data.js en todas las páginas. Define
   window.UK: carrera seleccionada, namespacing de claves de
   localStorage por carrera, registro de datasets y la
   pantalla de selección de carrera.
   ═══════════════════════════════════════════════════════ */
(function () {
  var UK = window.UK = window.UK || {};

  /* ── Carreras disponibles ─────────────────────────────── */
  UK.CARRERAS = [
    { id: 'matematicas', name: 'Matemáticas', sub: 'Facultad de Ciencias · UNAM', jp: '数学',     ro: 'Sūgaku' },
    { id: 'fisica',      name: 'Física',      sub: 'Facultad de Ciencias · UNAM', jp: '物理学',   ro: 'Butsurigaku' },
    { id: 'actuaria',    name: 'Actuaría',    sub: 'Facultad de Ciencias · UNAM', jp: '保険数理', ro: 'Hoken sūri' },
  ];

  var CKEY = 'ukishima_carrera';

  // ── Íconos de materias ──────────────────────────────────
  // 132 imágenes d0..d131 ordenadas por HUE (d0 = placeholder neutro).
  UK.ICON_COUNT = 132;
  UK.BAD_ICONS = {};   // ya no hay imágenes rotas (d26 eliminada; pool contiguo)
  // Paleta: color dominante (extractVibrant) de cada ícono, por índice.
  UK.ICON_COLORS = [
    "#343a3c", "#523434", "#513636", "#8f4646", "#df6a6a", "#6b2620", "#63413b", "#927671",
    "#df6b53", "#845e52", "#6f3d2d", "#b5a49b", "#7c563a", "#875836", "#9f8878", "#554d46",
    "#756a5f", "#b87532", "#a6896c", "#725f4b", "#988877", "#ada498", "#875c21", "#89693d",
    "#786852", "#9c7c4e", "#94846e", "#a28c6d", "#af9a7d", "#c7ac85", "#d7bb93", "#c0b8ac",
    "#5a4f3a", "#988b72", "#a28d62", "#5e5025", "#92741a", "#967f3a", "#aa9861", "#d5b453",
    "#c6c3ba", "#dfd6bc", "#7d7a57", "#97957c", "#d0ca7f", "#c2c970", "#909877", "#8aa555",
    "#868e76", "#495440", "#6e845f", "#3a473b", "#445c46", "#8a9b92", "#5e8678", "#5ca391",
    "#397f74", "#255854", "#397c7c", "#378383", "#6c8d8d", "#85c0c0", "#3d5f62", "#729fa3",
    "#729fa8", "#4b9ab5", "#567a8c", "#304c5f", "#516776", "#254861", "#204c6b", "#415360",
    "#285e85", "#4b5e6c", "#7b95a7", "#a2b1bc", "#9ebbd0", "#324452", "#738a9b", "#434a50",
    "#93a8bc", "#93a8bc", "#394149", "#393f45", "#364350", "#335b82", "#315980", "#3a3e43",
    "#3a3e43", "#3c4147", "#415064", "#4a5c74", "#57667a", "#6b7d95", "#8a95a3", "#929eae",
    "#374354", "#3b4a5f", "#354b6a", "#556479", "#4872ad", "#6a7d97", "#364151", "#33445d",
    "#455a79", "#3c4047", "#4d5460", "#2d3f62", "#3d4658", "#334569", "#434d61", "#606e8a",
    "#4e5461", "#373c53", "#767a8e", "#2d2d7c", "#463f69", "#3a2c7b", "#a693a8", "#6a4063",
    "#9b8594", "#573d4a", "#604f55", "#6a1b2f", "#76323e", "#66262c", "#5d1b21", "#642a2f",
    "#753a3f", "#8e222b", "#8f3139", "#b91e2b"
  ];
  // Siembra la caché de color con la paleta: todas las páginas usan los mismos
  // colores (consistentes entre vistas) sin recalcular extractVibrant.
  (function seedVibrant() {
    try {
      var vk = 'ukishima_vibrant26', vc = JSON.parse(localStorage.getItem(vk) || '{}') || {};
      for (var i = 0; i < UK.ICON_COLORS.length; i++) vc['assets/images/d' + i + '.webp'] = UK.ICON_COLORS[i];
      localStorage.setItem(vk, JSON.stringify(vc));
    } catch (e) {}
  })();

  /* ── Carrera seleccionada ─────────────────────────────── */
  UK.getCarrera   = function () { try { return localStorage.getItem(CKEY); } catch (e) { return null; } };
  UK.setCarrera   = function (id) { try { localStorage.setItem(CKEY, id); } catch (e) {} };
  UK.clearCarrera = function () { try { localStorage.removeItem(CKEY); } catch (e) {} };

  function isValid(id) { return UK.CARRERAS.some(function (c) { return c.id === id; }); }

  // Carrera activa (con fallback a matematicas para no romper si falta).
  UK.carreraId = function () {
    var id = UK.getCarrera();
    return isValid(id) ? id : 'matematicas';
  };
  UK.carreraInfo = function () {
    var id = UK.carreraId();
    var found = UK.CARRERAS.filter(function (c) { return c.id === id; })[0];
    return found || UK.CARRERAS[0];
  };

  /* ── Namespacing de claves de progreso ────────────────────
     Matemáticas reutiliza las claves históricas (migración
     gratis); las demás carreras usan un sufijo propio.        */
  UK.sk = function (base) {
    var id = UK.carreraId();
    return id === 'matematicas' ? base : base + '_' + id;
  };

  /* ── Registro de datasets por carrera (merge aditivo) ─────
     data.js, data-fisica.js, data-actuaria.js, libros-data.js
     y avance.js registran su parte aquí.                      */
  UK.data = UK.data || {};
  UK.registerData = function (id, obj) {
    var cur = UK.data[id] || (UK.data[id] = {});
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) cur[k] = obj[k];
    }
    return cur;
  };
  UK.dataset = function () { return UK.data[UK.carreraId()] || UK.data.matematicas || {}; };

  /* ── Íconos personalizados por el usuario ─────────────────
     Override por NOMBRE de materia (global a las 3 carreras: las
     materias en común comparten ícono, así que cambiarlo en una lo
     cambia en todas). Se aplica sobre el dataset al cargar.        */
  var IKEY = 'ukishima_iconos_v1';
  UK.getIconOverrides = function () {
    try { return JSON.parse(localStorage.getItem(IKEY) || '{}') || {}; }
    catch (e) { return {}; }
  };
  UK.setIconOverride = function (name, icon) {
    var o = UK.getIconOverrides();
    if (icon) o[name] = icon; else delete o[name];
    try { localStorage.setItem(IKEY, JSON.stringify(o)); } catch (e) {}
    return o;
  };
  UK.applyIconOverrides = function (ds) {
    if (!ds) return;
    var ov = UK.getIconOverrides();
    function ap(it) { if (it && ov[it.name]) it.icon = ov[it.name]; }
    (ds.CURRICULUM || []).forEach(function (s) { (s.materias || []).forEach(ap); });
    (ds.OPT_BLOQUES || []).forEach(function (b) { (b.pool || []).forEach(ap); });
  };

  /* ═══════════════════════════════════════════════════════
     PANTALLA DE SELECCIÓN DE CARRERA
     Overlay full-screen con 3 pills que aparecen deslizándose
     hacia abajo (escalonadas). Respeta prefers-reduced-motion.
     ═══════════════════════════════════════════════════════ */
  var CSS_ID = 'uk-cs-style';
  var CSS = [
    '.uk-cs{position:fixed;inset:0;z-index:100001;background:#000;display:flex;',
    'align-items:center;justify-content:center;padding:32px 22px;',
    'padding-bottom:calc(32px + env(safe-area-inset-bottom));',
    'opacity:0;transition:opacity .45s ease;overflow-y:auto}',
    '.uk-cs.is-in{opacity:1}',
    '.uk-cs.is-out{opacity:0;pointer-events:none}',
    '.uk-cs-inner{width:100%;max-width:420px;display:flex;flex-direction:column;align-items:center;gap:34px}',
    '.uk-cs-head{display:flex;flex-direction:column;align-items:center;gap:9px;text-align:center}',
    '.uk-cs-jp{font-family:"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif;',
    'font-size:30px;letter-spacing:.28em;padding-left:.28em;color:rgba(232,245,242,.92)}',
    '.uk-cs-title{font-family:"DM Mono",monospace;font-size:13px;letter-spacing:.34em;',
    'padding-left:.34em;text-transform:uppercase;color:rgba(155,191,181,.62)}',
    '.uk-cs-sub{font-size:11px;letter-spacing:.16em;color:rgba(155,191,181,.34)}',
    '.uk-cs-pills{width:100%;display:flex;flex-direction:column;gap:14px}',
    '.uk-cs-pill{display:flex;align-items:center;gap:16px;width:100%;text-align:left;',
    'background:rgba(155,191,181,.05);border:1px solid rgba(155,191,181,.18);border-radius:18px;',
    'padding:18px 20px;color:#e8f5f2;cursor:pointer;font-family:inherit;',
    'transition:border-color .25s ease,background .25s ease,transform .12s ease;',
    'opacity:0;transform:translateY(-26px)}',
    '.uk-cs.is-in .uk-cs-pill{animation:ukCsDrop .62s cubic-bezier(.22,1,.36,1) forwards}',
    '.uk-cs.is-in .uk-cs-pill:nth-child(1){animation-delay:.10s}',
    '.uk-cs.is-in .uk-cs-pill:nth-child(2){animation-delay:.22s}',
    '.uk-cs.is-in .uk-cs-pill:nth-child(3){animation-delay:.34s}',
    '@media(hover:hover){.uk-cs-pill:hover{border-color:rgba(155,191,181,.5);background:rgba(155,191,181,.1)}}',
    '.uk-cs-pill:active{transform:scale(.97)}',
    '.uk-cs-pill.is-picked{border-color:rgba(155,191,181,.7);background:rgba(155,191,181,.16)}',
    '.uk-cs-jp-mini{font-family:"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP",serif;',
    'font-size:22px;color:rgba(155,191,181,.85);min-width:46px;text-align:center;flex:0 0 auto}',
    '.uk-cs-txt{display:flex;flex-direction:column;gap:3px;flex:1 1 auto;min-width:0}',
    '.uk-cs-name{font-size:18px;font-weight:600;letter-spacing:.01em}',
    '.uk-cs-ro{font-family:"DM Mono",monospace;font-size:10px;letter-spacing:.18em;',
    'text-transform:uppercase;color:rgba(155,191,181,.45)}',
    '.uk-cs-arrow{flex:0 0 auto;color:rgba(155,191,181,.5)}',
    '@keyframes ukCsDrop{from{opacity:0;transform:translateY(-26px)}to{opacity:1;transform:none}}',
    '@media(prefers-reduced-motion:reduce){',
    '.uk-cs,.uk-cs.is-in .uk-cs-pill{transition:none}',
    '.uk-cs.is-in .uk-cs-pill{animation:none;opacity:1;transform:none}}',
  ].join('');

  function injectCSS() {
    if (document.getElementById(CSS_ID)) return;
    var st = document.createElement('style');
    st.id = CSS_ID;
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  var ARROW = '<svg class="uk-cs-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<polyline points="9 18 15 12 9 6"/></svg>';

  // Muestra la pantalla de selección. onPick(id) se llama tras elegir
  // (la carrera ya quedó guardada en localStorage).
  UK.showCarreraSelect = function (onPick) {
    injectCSS();

    var prev = document.querySelector('.uk-cs');
    if (prev && prev.parentNode) prev.parentNode.removeChild(prev);

    var ov = document.createElement('div');
    ov.className = 'uk-cs';
    var info = UK.carreraInfo();

    var pills = UK.CARRERAS.map(function (c) {
      return '<button class="uk-cs-pill" data-id="' + c.id + '" type="button">' +
        '<span class="uk-cs-txt">' +
          '<span class="uk-cs-name">' + c.name + '</span>' +
        '</span>' + ARROW +
      '</button>';
    }).join('');

    ov.innerHTML =
      '<div class="uk-cs-inner">' +
        '<div class="uk-cs-head">' +
          '<div class="uk-cs-jp">浮島</div>' +
          '<div class="uk-cs-title">Elige tu carrera</div>' +
          '<div class="uk-cs-sub">' + info.sub + '</div>' +
        '</div>' +
        '<div class="uk-cs-pills">' + pills + '</div>' +
      '</div>';

    document.body.appendChild(ov);
    // fuerza reflow y entra (activa fade + animación de pills)
    void ov.offsetWidth;
    requestAnimationFrame(function () { ov.classList.add('is-in'); });

    var locked = false;
    ov.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.uk-cs-pill');
      if (!btn || locked) return;
      locked = true;
      var id = btn.getAttribute('data-id');
      btn.classList.add('is-picked');
      UK.setCarrera(id);
      setTimeout(function () {
        if (typeof onPick === 'function') onPick(id);
      }, 220);
    });

    return ov;
  };
})();
