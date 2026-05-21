/* page-transitions.js — cross-page fade out before navigation */
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
