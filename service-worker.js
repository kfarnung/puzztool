"use strict";var precacheConfig=[["/puzztool/index.html","a3e452c7a4560d2cf77ab88e743464bb"],["/puzztool/static/css/main.4f914b64.css","8fca47ee95494350b2a333acf12f752e"],["/puzztool/static/js/0.b1d33ffd.chunk.js","0a3383bede56a5a4373915c73142e61e"],["/puzztool/static/js/1.40ee4e96.chunk.js","e36d903abf52e6b4d411c956e371ad43"],["/puzztool/static/js/10.033a2d1f.chunk.js","2b80ba09f33df319362316c8e3404694"],["/puzztool/static/js/11.962e6d1f.chunk.js","9bbcc17c1645e90a1cc0dedbe6f83433"],["/puzztool/static/js/12.f827d55b.chunk.js","746e104f183ebce4354bcf8171740a98"],["/puzztool/static/js/13.9e45949e.chunk.js","f4112887b5026ed0b6f1379d80a30b9d"],["/puzztool/static/js/2.0da8e933.chunk.js","1c2856ce9660031790f2db969e7c4629"],["/puzztool/static/js/3.fb1b6401.chunk.js","9536a1e2cb7c64eb855f509003c52fdc"],["/puzztool/static/js/4.ea96e262.chunk.js","cd2555862b5b1de200806be72482f707"],["/puzztool/static/js/5.463e0455.chunk.js","718ae494b16230a697404c289dfdc400"],["/puzztool/static/js/6.33a08812.chunk.js","bff95ddf9039556d51b136e89ed1e15f"],["/puzztool/static/js/7.dea06323.chunk.js","c842b8bd54cf67aa8b8a2124e62fb3a2"],["/puzztool/static/js/8.33552cca.chunk.js","76d1012101ea7801ea8125a9f8377b9f"],["/puzztool/static/js/9.6bfdd579.chunk.js","aa5182b6e61664a249ae313b4f5c836c"],["/puzztool/static/js/main.fc0391f0.js","5bec01a6eb5bdeae58c7cc3c9e0af5b8"],["/puzztool/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/puzztool/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/puzztool/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/puzztool/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/puzztool/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/puzztool/static/media/pigpen_key.d6ee0a09.svg","d6ee0a091b227e756c6eee6661d74252"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/puzztool/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});