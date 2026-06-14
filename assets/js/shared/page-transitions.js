/* page-transitions.js */

/* Cross-document View Transitions DESACTIVADAS.
   Con `@view-transition { navigation: auto }`, al navegar entre documentos el
   navegador congelaba el snapshot de la página anterior (sin scroll y con las
   animaciones pausadas) ~1 s mientras la página nueva —pesada: canvas + SVG +
   datos— terminaba de renderizar para hacer el crossfade. Eso era el "freeze".
   Volvemos al fade-in propio (pageFadeIn, 0.18 s) que no congela. */
(function () {
  var s = document.createElement('style');
  s.textContent =
    '@keyframes pageFadeIn { from { opacity: 0; } to { opacity: 1; } }';
  document.head.appendChild(s);
})();

/* STANDALONE_GATE: true = solo app instalada accede a subpáginas / false = acceso libre */
window.STANDALONE_GATE = false;

/* Suppress Chrome's native PWA install banner on all pages (index.html shows its own button) */
window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); });

/* Redirect browser users to index.html — solo la app instalada accede a las demás páginas */
(function () {
  if (!window.STANDALONE_GATE) return;
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches || !!window.navigator.standalone;
  var path = window.location.pathname;
  var isIndex = path === '/' || path === '' || path.endsWith('/index.html') || path.endsWith('/');
  if (!isStandalone && !isIndex) {
    window.location.replace('./index.html');
  }
})();

/* Estadísticas es privada: el logo del header solo enlaza a estadisticas.html
   en desarrollo (live server: localhost o IP de red local). En el deploy
   (GitHub Pages) la página no se publica, así que el logo no navega. */
(function () {
  var h = location.hostname;
  var isDev = h === 'localhost' || h === '127.0.0.1' || h === '' ||
              /^(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.)/.test(h);
  if (isDev) return;
  function gate() {
    document.querySelectorAll('.header-logo').forEach(function (el) {
      el.removeAttribute('onclick');
      if (el.tagName === 'A') el.removeAttribute('href');
      el.style.cursor = 'default';
      el.removeAttribute('title');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', gate, { once: true });
  else gate();
})();

/* Con view transition activa, el crossfade nativo reemplaza al pageFadeIn.
   Si el body entra con opacity 0, los snapshots del VT se capturan
   transparentes (nav inferior incluido) y se ve un parpadeo al navegar. */
window.addEventListener('pagereveal', function (e) {
  if (e.viewTransition) {
    document.body.style.animation = 'none';
    document.body.style.opacity = '1';
  }
});

/* Start header logo animation when page is actually revealed to the user */
(function () {
  var _done = false;
  function startLogo() {
    if (_done) return;
    _done = true;
    if (document.body.dataset.deferLogo) return;
    document.querySelectorAll('.hdr-lp').forEach(function (p) {
      p.style.animationPlayState = 'running';
    });
  }
  window.addEventListener('pagereveal', startLogo, { once: true });
  requestAnimationFrame(function () { requestAnimationFrame(startLogo); });
})();

/* Reset pinch-zoom to 1× on every page load */
(function () {
  var vp = document.querySelector('meta[name="viewport"]');
  if (!vp) return;
  var base = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
  vp.content = base + ', maximum-scale=1';
  setTimeout(function () { vp.content = base; }, 300);
})();

/* Pedir almacenamiento persistente: evita que el navegador purgue el progreso */
(function () {
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(function () {});
  }
})();

/* Indicador de modo offline (todas las páginas) */
(function () {
  function setup() {
    var badge = document.createElement('div');
    badge.id = 'offline-badge';
    badge.textContent = 'Sin conexión · los cambios se guardan en este dispositivo';
    badge.style.cssText =
      'position:fixed;left:50%;bottom:calc(64px + env(safe-area-inset-bottom));' +
      'transform:translateX(-50%);z-index:9999;padding:6px 14px;border-radius:999px;' +
      'background:rgba(20,30,28,0.92);color:rgba(232,245,242,0.75);font-size:11.5px;' +
      'font-family:inherit;border:1px solid rgba(155,191,181,0.25);white-space:nowrap;' +
      'backdrop-filter:blur(8px);display:none;pointer-events:none;';
    document.body.appendChild(badge);
    function update() { badge.style.display = navigator.onLine ? 'none' : 'block'; }
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
})();
