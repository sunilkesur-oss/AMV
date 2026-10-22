const CACHE = "amv-op-025435cd7a";
const FILES = ["./", "index.html", "manifest.webmanifest", "fonts/1bfda7437b5e.woff2", "fonts/1e0343870fe7.woff2", "fonts/27169327aad1.woff2", "fonts/298a5a911e4a.woff2", "fonts/35d0cef5ed03.woff2", "fonts/53e0234360e9.woff2", "fonts/6e68d19a888f.woff2", "fonts/78beab246594.woff2", "fonts/843e59e496e5.woff2", "fonts/8f90dc37210c.woff2", "fonts/dba686dd63e6.woff2", "fonts/e3f11026d42b.woff2", "fonts/fonts.css", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
