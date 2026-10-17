import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// One id per build: baked into the app and written to version.json, so an
// open copy (e.g. an iPhone home-screen app resumed from memory) can tell
// when a newer deploy exists and reload itself.
const BUILD_ID = String(Date.now());

// Relative asset paths work both at a GitHub Pages project URL and on any
// other static host, without requiring a paid custom domain.
export default defineConfig({
  base: "./",
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [
    react(),
    {
      name: "emit-version",
      apply: "build",
      generateBundle(_options, bundle) {
        this.emitFile({ type: "asset", fileName: "version.json", source: JSON.stringify({ build: BUILD_ID }) });
        const files=['./','./index.html','./manifest.webmanifest','./icon.svg',...Object.keys(bundle).filter(f=>!f.endsWith('.map')).map(f=>'./'+f)];
        this.emitFile({type:'asset',fileName:'sw.js',source:`
const CACHE='japan-trip-${BUILD_ID}';
const FILES=${JSON.stringify(files)};
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('japan-trip-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||url.pathname.endsWith('/version.json'))return;
 if(event.request.mode==='navigate'){
   event.respondWith((async()=>{
     const cache=await caches.open(CACHE);
     // Serve the document matching this version's precached JS/CSS, never a mixed build.
     return await cache.match(new URL('./index.html',self.registration.scope).href,{ignoreVary:true})||fetch(event.request);
   })());return;
 }
 // Only precached same-origin build assets live here. Ignore Vary: Origin so
 // module-script requests match the install-time requests in static previews.
 event.respondWith(caches.open(CACHE).then(async cache=>await cache.match(event.request,{ignoreVary:true})||fetch(event.request)));
});
`});
      },
    },
  ],
});
