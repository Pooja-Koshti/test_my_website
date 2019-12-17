const cacheName='v1';

const cacheAssets =[
     'index.html',
    'about.html',
    'services.html',
    'main.js',
    'details.php',
	'test_abh.html'
];

self.addEventListener('install',e=>{
    console.log('Service Worker : Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache=>{
                console.log('Service Worker:Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(()=> self.skipWaiting())
    );
});

self.addEventListener('activate',e=>{
    console.log("Service Worker:Activated");
});

self.addEventListener('fetch',e=>{
    console.log('Service fetching');
    e.respondWith(fetch(e.request).catch(()=>caches.watch(e.request)));
});
