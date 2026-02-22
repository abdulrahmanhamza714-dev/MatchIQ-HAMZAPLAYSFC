const CACHE_NAME = 'matchiq-cache-v1';
  const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  // any CSS/JS files you use
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});