/* page-transitions.js */

/* Cross-document View Transitions (Chrome 126+): crossfade nativo entre páginas */
(function () {
  var s = document.createElement('style');
  s.textContent = '@view-transition { navigation: auto; }';
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
