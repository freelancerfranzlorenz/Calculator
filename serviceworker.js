const CACHE_NAME = 'Calculator';
const contentToCache = [
   './',
   './favicon.ico',
   './favicon.svg',
   './framework7-bundle.min.css',
   './framework7-bundle.min.js',
   './framework7-bundle.min.js.map',
   './icon_48.png',
   './icon_144.png',
   './icon_192.png',
   './icon_512.png',
   './index.css',
   './index.html',
   './manifest.json',
   './navbaricon.svg',
   './navbariconr.svg',
   './serviceworker.js'
];

self.addEventListener( 'install', function( event ) 
{  event.waitUntil( caches.open( CACHE_NAME )
      .then( function( cache ) 
      {  return cache.addAll( contentToCache ); } )
   );
} );

self.addEventListener( "fetch", ( event ) => 
{
   event.respondWith( ( async () => 
   {
      const r = await caches.match( event.request );
      console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
      if( r ) { return r; }
      const response = await fetch( event.request );
      return response;
   } )(), );
 } );
 