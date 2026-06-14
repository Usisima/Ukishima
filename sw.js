'use strict';

const CACHE = 'ukishima-v244';

// App shell crítico: si algo de esto falla, el SW no se instala
const CORE = [
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
  './assets/images/favicon.svg',
  './assets/images/icon-192.png',
  './assets/images/icon-512.png',
  './assets/images/icon-maskable-512.png',
  './assets/images/apple-touch-icon.png',
];

// Iconos de materias: best-effort, no bloquean la instalación
const IMAGES = Array.from({ length: 160 }, (_, i) => `./assets/images/d${i}.webp`);

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(async cache => {
        await cache.addAll(CORE);
        await Promise.allSettled(IMAGES.map(u => cache.add(u).catch(() => {})));
      })
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

// KaTeX CDN URLs to cache for offline/fast use
const KATEX_CDN = 'cdn.jsdelivr.net';

// Stale-while-revalidate: serve cache instantly, refresh in background
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Cross-origin: cache KaTeX, skip everything else
  if (url.origin !== self.location.origin) {
    if (url.hostname !== KATEX_CDN) return;
  }

  // Navegación: cache → red → index.html como fallback offline
  if (e.request.mode === 'navigate') {
    e.respondWith(
      caches.match(e.request)
        .then(r => r || fetch(e.request))
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request);
      // Inmutables (imágenes, fuentes, KaTeX versionado): caché directa, sin
      // revalidación — evita decenas de fetch+cache.put de fondo en cada página
      if (cached && (/\/assets\/(images|fonts)\//.test(url.pathname) || url.hostname === KATEX_CDN)) {
        return cached;
      }
      const networkFetch = fetch(e.request)
        .then(res => {
          if (res.ok && res.type !== 'opaque') cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => cached || Response.error());
      return cached || networkFetch;
    })
  );
});
