// Well-bee Service Worker v2.0
// Strategy: Network-first for HTML (always get latest), cache-first for assets
const CACHE = 'wellbee-v7';

self.addEventListener('install', e => {
  e.waitUntil(self.skipWaiting());
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

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isLocal = url.origin === location.origin;
  const isHTML = e.request.destination === 'document'
    || url.pathname.endsWith('.html')
    || url.pathname === '/'
    || url.pathname.endsWith('/');

  // HTML: always network-first so updates are immediately visible
  if (isHTML && isLocal) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Local assets: cache-first, fetch in background
  if (isLocal) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const net = fetch(e.request).then(res => {
          if (res && res.status === 200)
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        });
        return cached || net;
      })
    );
    return;
  }

  // CDN: network with cache fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200)
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
