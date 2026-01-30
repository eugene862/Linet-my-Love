
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('valentine-cache-final').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js',
        './music.mp3',
        './photo.jpg'
      ]);
    })
  );
});
