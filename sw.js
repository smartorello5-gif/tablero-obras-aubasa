const CACHE_NAME = 'aubasa-obras-v6';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Pass-through to browser network stack so navigation requests (?app=v1) never fail with ERR_FAILED
  return;
});
