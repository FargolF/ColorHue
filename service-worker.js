self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("colorhue-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/index2.html",
        "/style.css"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
