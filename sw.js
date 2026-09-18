self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // Простой прокси, чтобы браузер признал сайт полноценным PWA
});
