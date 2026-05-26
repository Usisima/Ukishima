'use strict';

const CACHE = 'ukishima-v161';

// App shell: all local assets cached on install
const SHELL = [
  './',
  './index.html',
  './avance.html',
  './manifest.json',
  './temarios.html',
  './libros.html',
  './calendario.html',
  './assets/css/dashboard.css',
  './assets/css/temarios.css',
  './assets/css/libros.css',
  './assets/css/calendario.css',
  './assets/css/avance.css',
  './assets/js/avance/avance.js',
  './assets/js/shared/page-transitions.js',
  './assets/js/shared/stars-bg.js',
  './assets/js/data/data.js',
  './assets/js/data/notas-data.js',
  './assets/js/data/libros-data.js',
  './assets/js/temarios/state.js',
  './assets/js/temarios/ui.js',
  './assets/js/temarios/main.js',
  './assets/js/libros/libros.js',
  // Fonts (local)
  './assets/fonts/google-fonts.css',
  './assets/fonts/katex.min.css',
  './assets/fonts/aFTR7PB1QTsUX8KYvumzEY2tbZX9.woff2',
  './assets/fonts/aFTR7PB1QTsUX8KYvumzEYOtbQ.woff2',
  './assets/fonts/aFTU7PB1QTsUX8KYthqQBA.woff2',
  './assets/fonts/aFTU7PB1QTsUX8KYthSQBLyM.woff2',
  './assets/fonts/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2',
  './assets/fonts/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2',
  './assets/fonts/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2',
  './assets/fonts/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2',
  './assets/fonts/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2',
  './assets/fonts/nuFkD-vYSZviVYUb_rj3ij__anPXDTnohkk72xU.woff2',
  './assets/fonts/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojEk72xU.woff2',
  './assets/fonts/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojUk72xU.woff2',
  './assets/fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
  './assets/fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6h9Q.woff2',
  // KaTeX fonts
  './assets/fonts/katex/KaTeX_AMS-Regular.woff2',
  './assets/fonts/katex/KaTeX_Caligraphic-Bold.woff2',
  './assets/fonts/katex/KaTeX_Caligraphic-Regular.woff2',
  './assets/fonts/katex/KaTeX_Fraktur-Bold.woff2',
  './assets/fonts/katex/KaTeX_Fraktur-Regular.woff2',
  './assets/fonts/katex/KaTeX_Main-Bold.woff2',
  './assets/fonts/katex/KaTeX_Main-BoldItalic.woff2',
  './assets/fonts/katex/KaTeX_Main-Italic.woff2',
  './assets/fonts/katex/KaTeX_Main-Regular.woff2',
  './assets/fonts/katex/KaTeX_Math-BoldItalic.woff2',
  './assets/fonts/katex/KaTeX_Math-Italic.woff2',
  './assets/fonts/katex/KaTeX_SansSerif-Bold.woff2',
  './assets/fonts/katex/KaTeX_SansSerif-Italic.woff2',
  './assets/fonts/katex/KaTeX_SansSerif-Regular.woff2',
  './assets/fonts/katex/KaTeX_Script-Regular.woff2',
  './assets/fonts/katex/KaTeX_Size1-Regular.woff2',
  './assets/fonts/katex/KaTeX_Size2-Regular.woff2',
  './assets/fonts/katex/KaTeX_Size3-Regular.woff2',
  './assets/fonts/katex/KaTeX_Size4-Regular.woff2',
  './assets/fonts/katex/KaTeX_Typewriter-Regular.woff2',
  // Images
  './assets/images/favicon.svg',
  './assets/images/d0.jpg',
  './assets/images/d1.jpg',
  './assets/images/d2.jpg',
  './assets/images/d3.jpg',
  './assets/images/d4.jpg',
  './assets/images/d5.jpg',
  './assets/images/d6.jpg',
  './assets/images/d7.jpg',
  './assets/images/d8.jpg',
  './assets/images/d9.jpg',
  './assets/images/d10.jpg',
  './assets/images/d11.jpg',
  './assets/images/d12.jpg',
  './assets/images/d13.jpg',
  './assets/images/d14.jpg',
  './assets/images/d15.jpg',
  './assets/images/d16.jpg',
  './assets/images/d17.jpg',
  './assets/images/d18.jpg',
  './assets/images/d19.jpg',
  './assets/images/d20.jpg',
  './assets/images/d21.jpg',
  './assets/images/d22.jpg',
  './assets/images/d23.jpg',
  './assets/images/d24.jpg',
  './assets/images/d25.jpg',
  './assets/images/d26.jpg',
  './assets/images/d27.jpg',
  './assets/images/d28.jpg',
  './assets/images/d29.jpg',
  './assets/images/d30.jpg',
  './assets/images/d31.jpg',
  './assets/images/d32.jpg',
  './assets/images/d33.jpg',
  './assets/images/d34.jpg',
  './assets/images/d35.jpg',
  './assets/images/d36.jpg',
  './assets/images/d37.jpg',
  './assets/images/d38.jpg',
  './assets/images/d39.jpg',
  './assets/images/d40.jpg',
  './assets/images/d41.jpg',
  './assets/images/d42.jpg',
  './assets/images/d43.jpg',
  './assets/images/d44.jpg',
  './assets/images/d45.jpg',
  './assets/images/d46.jpg',
  './assets/images/d47.jpg',
  './assets/images/d48.jpg',
  './assets/images/d49.jpg',
  './assets/images/d50.jpg',
  './assets/images/d51.jpg',
  './assets/images/d52.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: serve cache instantly, refresh in background
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Cross-origin (Google Fonts, CDN) — network only, no cache
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request);
      const networkFetch = fetch(e.request)
        .then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
