const CACHE_NAME = "kadet-test-kviz-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/css/style.css",
    "/js/app.js",
    "/js/questions.js",
    "/js/statistics.js",
    "/js/storage.js",
    "/data/pitanja.json"
];


// Instalacija aplikacije

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })

    );

});


// Aktivacija aplikacije

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys().then((keys) => {

            return Promise.all(

                keys.map((key) => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            );

        })

    );

});


// Offline rad

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
        .then((response) => {

            return response || fetch(event.request);

        })

    );

});
