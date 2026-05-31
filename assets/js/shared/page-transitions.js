/* page-transitions.js — cross-page fade in/out */

/* Fade-in: page starts invisible and transitions to visible after first paint */
document.body.style.opacity = '0';
requestAnimationFrame(function () {
  requestAnimationFrame(function () {
    document.body.style.transition = 'opacity 0.15s ease';
    document.body.style.opacity = '1';
  });
});

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

/* Reset pinch-zoom to 1× on every page load */
(function () {
  var vp = document.querySelector('meta[name="viewport"]');
  if (!vp) return;
  var base = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
  vp.content = base + ', maximum-scale=1';
  setTimeout(function () { vp.content = base; }, 300);
})();

(function () {
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || a.target === '_blank') return;
    e.preventDefault();
    document.body.style.transition = 'opacity 0.18s ease';
    document.body.style.opacity = '0';
    setTimeout(function () { window.location.href = href; }, 185);
  });
})();
