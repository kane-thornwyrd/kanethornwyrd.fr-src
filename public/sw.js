if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const f=e=>s(e,t),d={module:{uri:t},exports:n,require:f};a[t]=Promise.all(c.map((e=>d[e]||f(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"653e7ecd968054799b9819521dc382ff"},{url:"/_next/static/Xv_vWk59MeyNJlf2jZhnN/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/Xv_vWk59MeyNJlf2jZhnN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/141.5fc8df09dd21621c.js",revision:"5fc8df09dd21621c"},{url:"/_next/static/chunks/17-cb287ef2933a7b24.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/629-acca2365a3141fec.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/905.74464e03f91482e5.js",revision:"74464e03f91482e5"},{url:"/_next/static/chunks/941.fd60ac6a61716149.js",revision:"fd60ac6a61716149"},{url:"/_next/static/chunks/app/head-90e1cfced24796ca.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/app/layout-5282c422fff65dbd.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/app/page-2db22175b4d594a4.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/fb7d5399-676640127dcb9adb.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/main-a251ad5138287d47.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/main-app-b9dc9c2e8651e776.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0f9c11f8afabb2ec.js",revision:"Xv_vWk59MeyNJlf2jZhnN"},{url:"/_next/static/css/24f949715c85d86f.css",revision:"24f949715c85d86f"},{url:"/_next/static/css/3b039061d24c7b36.css",revision:"3b039061d24c7b36"},{url:"/_next/static/css/46ee40410af2e35a.css",revision:"46ee40410af2e35a"},{url:"/_next/static/css/e1cc76dd7270d134.css",revision:"e1cc76dd7270d134"},{url:"/_next/static/media/01bb169e697623fe.woff2",revision:"219c58618ec8807f780af160724cd8fa"},{url:"/_next/static/media/0a1f67b993c32e21.woff2",revision:"9214f3caff34da67a71fe37a83854715"},{url:"/_next/static/media/1a1b17e6d57605c7.woff2",revision:"bdd9280dc0f2dec732f43f39c3005b0a"},{url:"/_next/static/media/25b915efcacb628f.woff2",revision:"c061d85e5ab824777ac07980b78750d5"},{url:"/_next/static/media/2d72c94b9715c1d9.woff2",revision:"c4cfeb4ed1fc4a679df73c1c293d2414"},{url:"/_next/static/media/35d4ca760cb3e32d.p.woff2",revision:"4c10e61e37b678db1dcea23aaa36c270"},{url:"/_next/static/media/44341e0717ebca1f.woff2",revision:"c3a65ab369c0fce2b38f5ae05566203b"},{url:"/_next/static/media/4b9f2703d1cbec68.p.woff2",revision:"967a1f1bfe8503e8cd46670a1e875f03"},{url:"/_next/static/media/59caceae2b28bb86.woff2",revision:"ece66007524a54ba4bc64f1ca38a57d6"},{url:"/_next/static/media/63d0b5c8c19be20b.woff2",revision:"dc91b663ce7e5f7f6934c7af7f8d6987"},{url:"/_next/static/media/68d9d6536f86980f.woff2",revision:"3191ae74f758ddebd871e9d6de6ff909"},{url:"/_next/static/media/7225b6bbb503edd1.p.woff2",revision:"807f630a32d496863695e6caee9a9290"},{url:"/_next/static/media/8438d576e8e63c0d.woff2",revision:"35d35ce6e438e32231e9c46b1ef26fc7"},{url:"/_next/static/media/90948f15482c6b00.woff2",revision:"d284172474f148abe54b3c3cc9ded494"},{url:"/_next/static/media/af5ce8356012644b.woff2",revision:"eaad6ed2140476b792c9bc7d6ff87792"},{url:"/_next/static/media/b28fefc584241442.woff2",revision:"6e4e8720c64dd914508dc278b57ae0fb"},{url:"/_next/static/media/b7d04f62e3f62ca5.p.woff2",revision:"a9d9e02046389a35e30d0906b96076f1"},{url:"/_next/static/media/bd8540f77e128b4b.woff2",revision:"805387085501a631c368935dce8ee5cc"},{url:"/_next/static/media/bfbbde0391b6dd41.woff2",revision:"4626fdb1c29c33608c6432c27c8f1657"},{url:"/_next/static/media/cae72fa3741936a2.woff2",revision:"3e77992e84192156b18be2a5da243a15"},{url:"/_next/static/media/cebfc26e39565e1b.woff2",revision:"bca84ac0a9543496c893891e5ca2db60"},{url:"/_next/static/media/d1ebff59b6c50301.woff2",revision:"d55be792bec77aee6683d2b030f9e336"},{url:"/_next/static/media/db5932ecb5ff99aa.woff2",revision:"307aea2977112055a7c6276503747fe6"},{url:"/_next/static/media/e63cb0a70faa92bc.woff2",revision:"cda739963822cb2ebee70be4f1161764"},{url:"/_next/static/media/ea6f4ccff77965be.woff2",revision:"be01f5918b6984157a54d48969c413a0"},{url:"/_next/static/media/ec53c66624cd84c4.woff2",revision:"44a4808acf2bf717885fce186a7f3092"},{url:"/_next/static/media/ffa062cf52fcf21e.p.woff2",revision:"cd6f1723cfb69f27f8981170fa5083a7"},{url:"/favicon.ico",revision:"b7e5d143f696329db9b04f047c8ba284"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
