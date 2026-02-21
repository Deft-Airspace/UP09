const CACHE_NAME = 'omnifood-v1'
const STATIC_ASSETS = [
	'/',
	'/index.html',
	'/style/style.css',
	'/style/media.css',
	'/style/color.css',
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)),
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches
			.match(event.request)
			.then(response => response || fetch(event.request)),
	)
})
