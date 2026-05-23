'use strict';

const CACHE = 'ukishima-v49';

// App shell: all local assets cached on install
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './temarios.html',
  './libros.html',
  './calendario.html',
  './assets/css/dashboard.css',
  './assets/css/temarios.css',
  './assets/css/libros.css',
  './assets/css/calendario.css',
  './assets/js/page-transitions.js',
  './assets/js/stars-bg.js',
  './assets/js/data.js',
  './assets/js/state.js',
  './assets/js/ui.js',
  './assets/js/main.js',
  './assets/js/libros-data.js',
  './assets/js/libros.js',
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
