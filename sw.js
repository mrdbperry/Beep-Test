const CACHE_NAME = 'beep-test-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './192.png',
  './512.png'
];

// If you have a specific music file, add it to the ASSETS array above!

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});