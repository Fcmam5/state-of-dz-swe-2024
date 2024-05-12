(()=>{"use strict";var e={508:()=>{try{self["workbox:core:7.0.0"]&&_()}catch(e){}},704:()=>{try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}},802:()=>{try{self["workbox:routing:7.0.0"]&&_()}catch(e){}},120:()=>{try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(508);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(704);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(120);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(802);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"09d6a682111a64ac5813ef1c8d98a3d3","url":"404.html"},{"revision":"becabfe16a1f79a95d08a19ea808c014","url":"about/index.html"},{"revision":"1341d72157244395982493c029e0084a","url":"assets/css/styles.eb576a6a.css"},{"revision":"bf44af9348a185ff0209e4510314e82d","url":"assets/js/01a85c17.0dae3eef.js"},{"revision":"cb52241ec04a24076b900005f886e88b","url":"assets/js/0ca8ed0f.28c6ff64.js"},{"revision":"8dd0c40d0fd6b3072086e970589173d6","url":"assets/js/0fd4c4b6.734006d8.js"},{"revision":"7e723b2e61dc78e7501bae4264aa9af7","url":"assets/js/101.a360e084.js"},{"revision":"7262a19ab43b751a2dcd00e1411a0c8c","url":"assets/js/129.22311e04.js"},{"revision":"2e81c26fcb7dffc3cdb21fe81de49234","url":"assets/js/1425.479afe75.js"},{"revision":"f99a3cb50c0eb8cd953e2c4bf4f4196a","url":"assets/js/1638.5bc88b50.js"},{"revision":"1e8b6e1e1c0d54b10fe2043efe6fa36f","url":"assets/js/166.52fd59f4.js"},{"revision":"2a11f2e71c1ee436e1ea76a1188b7f8b","url":"assets/js/17896441.ca369fb0.js"},{"revision":"5c079a537bfde870ea9c544acf4fe992","url":"assets/js/18.7c4064b0.js"},{"revision":"93bcd784c61740b34a126fdf99fd000e","url":"assets/js/1896.6661ba47.js"},{"revision":"da4fc2e077cfb7f7bdef22546b4ede02","url":"assets/js/1a4e3797.5275e2e6.js"},{"revision":"d8939225b84d42aa9d9c1259e48d3399","url":"assets/js/1f391b9e.a66dd3f7.js"},{"revision":"24428e2d946264a7166ea1bcd3dcb441","url":"assets/js/2101.d8f648c3.js"},{"revision":"c3c2d85a488d93716dd8fb27530c88d7","url":"assets/js/2152.01129f08.js"},{"revision":"10ac3a73a8d258ee06982794b7ea204e","url":"assets/js/2166.98b30156.js"},{"revision":"bc5f6f30e490a9989a201157755833e9","url":"assets/js/22.a5166f22.js"},{"revision":"0b3fbe7c445cc7ca641128b0ecbca605","url":"assets/js/230.2ae93e2f.js"},{"revision":"e1eae3adc1336a6ec19b41ea9b8cda5a","url":"assets/js/2531.af15e71b.js"},{"revision":"e289757d8ad5a1ca00f5caf6d46d3094","url":"assets/js/2649.851e271d.js"},{"revision":"8008614336d0c600993b682f73909095","url":"assets/js/2681.e4f51c92.js"},{"revision":"164cbd12ec4acb7868c2e72efb41e6c6","url":"assets/js/2696.1b8ca828.js"},{"revision":"149b2b7ee846d84f82d6dfe2ea3f2db3","url":"assets/js/2bd4dc93.3f8535c3.js"},{"revision":"549e407ff8da12311df5132f0c6491ad","url":"assets/js/2f3ab84e.b3fad575.js"},{"revision":"915b68d1ab80b5d0928419199718c483","url":"assets/js/3032.c608be6f.js"},{"revision":"d66407d208f860422e9732359c45eeeb","url":"assets/js/3480.e8acf97a.js"},{"revision":"75adc8f41463e47fb138844bfc90513e","url":"assets/js/356a0ac6.7ea73402.js"},{"revision":"5b25d0b142bee0dc9d264cca9b3b3bc9","url":"assets/js/3591.2deaff99.js"},{"revision":"e864d0a887d8966b1a8a0be54ac0fcd5","url":"assets/js/393be207.e4232b8e.js"},{"revision":"cea5c24c49061965a8bd9479fab9e496","url":"assets/js/3964.0404a9be.js"},{"revision":"b48b658cda90b8e20d9045210251c569","url":"assets/js/3e1bea14.4bd674a4.js"},{"revision":"96562d41b2a9cab38432cd88fbb79188","url":"assets/js/4068.f1fec91c.js"},{"revision":"7f92eb6720fc7f6e438eed78187cd502","url":"assets/js/4185f04d.4d78052c.js"},{"revision":"8dd5475df818dfc75f8c2a7203f1e196","url":"assets/js/425.0d68b60e.js"},{"revision":"ee3356d107618d55d6da9af01d776722","url":"assets/js/432.1f683a32.js"},{"revision":"0fb12f8df7c8d9be5869234384513b45","url":"assets/js/432.cd833a59.js"},{"revision":"fc6f383f36ccdd90a16d4c6fb1a9b7ca","url":"assets/js/483.2cfc483e.js"},{"revision":"873823a24fb43d8c9dc56e2a19017bd4","url":"assets/js/4908.2d4c03da.js"},{"revision":"e3580163aed02f1829fbe033fcae896f","url":"assets/js/499d255e.7969f9fe.js"},{"revision":"bb07e58cb94642af09a43c20a1fa1384","url":"assets/js/4b5f24e3.7508ffc3.js"},{"revision":"eda3a99a8f218b968e4beebd333f0c9d","url":"assets/js/5015.9493933d.js"},{"revision":"a247059aeb8cb6cd66111b1eb6fb7152","url":"assets/js/5018.9e3471de.js"},{"revision":"8654758813c1b55e1600a8f56f62d26f","url":"assets/js/531.dbb054ce.js"},{"revision":"70ce0c5c2690a40e071b2183e94b890d","url":"assets/js/5760.0d191178.js"},{"revision":"e593149602617481c6b2fd8fa5041427","url":"assets/js/5906868a.68e1a4e9.js"},{"revision":"ab190626b79e357882522204305fa5ab","url":"assets/js/591.e18a0d6b.js"},{"revision":"174bf27de69eb7613802aff80f65e7bd","url":"assets/js/5962.aef7e64a.js"},{"revision":"801a2c66259e54a4e5140a142922c6c2","url":"assets/js/5e95c892.cc679961.js"},{"revision":"e615da2fe842c2fd0d04dc8bd8783bdc","url":"assets/js/6018.b252f274.js"},{"revision":"2f4d73edf480a6f15d41fbf6c5863086","url":"assets/js/6022.5c7744d4.js"},{"revision":"fa99bd519a5e71b5bf48c3c57710052d","url":"assets/js/605.50fa61a5.js"},{"revision":"ce615b9acf38603fa60bdc32f2252fa9","url":"assets/js/605.e4ac9e66.js"},{"revision":"a6e84c81fd155e62d4d5b1847eff8bef","url":"assets/js/608.21b8b824.js"},{"revision":"8a72b837d7a305571cfbefb2278e0795","url":"assets/js/60e0d9dc.d3dbc3d4.js"},{"revision":"731cfc5b3c8891e7d2df5668dffd05d7","url":"assets/js/61b36de8.33802aad.js"},{"revision":"a505e42c22cbb9eb11377e0e8ea49771","url":"assets/js/628.387afc64.js"},{"revision":"dfb12cfbf3b12933478e0417521b59e0","url":"assets/js/637.97fa4cf1.js"},{"revision":"3f48e689a9b1fbccc09f3abda8f9970a","url":"assets/js/6535.d852213f.js"},{"revision":"3c816ed49f664c1f8fa66825f6c4be04","url":"assets/js/66c10cbb.a1e2557c.js"},{"revision":"2d3c19cefd9acfe933d3236000b49e44","url":"assets/js/68.714b08ee.js"},{"revision":"262e0247d0bbfdf890de95a501a4a0df","url":"assets/js/680fce60.ca2f0d06.js"},{"revision":"3adbbeaf8869bf0f6d8324e0438d759b","url":"assets/js/6875c492.81837223.js"},{"revision":"e84577acd2a226a272bf48da78a50bdd","url":"assets/js/69577797.83cff41c.js"},{"revision":"c51893323d9d2c5c4f455556c77c0e27","url":"assets/js/696.5ee39d6d.js"},{"revision":"266a3f79146897792ba8e34495f462f5","url":"assets/js/699.7a0deac4.js"},{"revision":"2aa6d5b5ea7036f2e6f8a352cdb5a893","url":"assets/js/699.98e8e836.js"},{"revision":"9595f72dae57443054d2e59589fbf9c8","url":"assets/js/7291.5d4eb369.js"},{"revision":"310c25d96b51800c9fc4dc1ebded1c70","url":"assets/js/7635.03734b25.js"},{"revision":"dcfa52eb5453b0b0494d556e579a802c","url":"assets/js/764.1a3d6554.js"},{"revision":"bac0b62875de39495f032afc3791030a","url":"assets/js/7850374d.150b12a7.js"},{"revision":"0aa676d2de90267129a1287b10a0e924","url":"assets/js/7960.1ec1cb5e.js"},{"revision":"e1e0f285556eeb3ef96f7d6b9fbdfd2f","url":"assets/js/79774bfc.e1ac8d90.js"},{"revision":"63b00adfc946cc864349d8f722d9c6b7","url":"assets/js/809.148cd1c6.js"},{"revision":"0cf179f20f2e6cca21cb2f2b4acb3d26","url":"assets/js/814f3328.b3d4bee9.js"},{"revision":"f5eae66abe33c21a9c9bdcc1650f1a9a","url":"assets/js/8332.96f592c1.js"},{"revision":"80535fc59d307dd2a7c312a5bbaf8b80","url":"assets/js/84ac4f92.6bb1d672.js"},{"revision":"446c8e2aa10b36eb7aad6f6f9aeaa641","url":"assets/js/8608.ea6cc490.js"},{"revision":"8f1a7e820bed8dcebb927a4f93153dfd","url":"assets/js/86360b2a.810bdfde.js"},{"revision":"44a0315ad225bbca01bb9cff29f9f012","url":"assets/js/88884f83.d70c5130.js"},{"revision":"666f5fc850ac4cfeddcffd9c8168bdb1","url":"assets/js/896.6bebe8e9.js"},{"revision":"89d3d5a4537e82c71c738f8c1459f915","url":"assets/js/8ed95ef2.822f0227.js"},{"revision":"5ec16595129d631a10364da86225cae1","url":"assets/js/9019.5c077089.js"},{"revision":"3c14d84b8b67aff94d82ca2a1ef41063","url":"assets/js/908.f27ecf3d.js"},{"revision":"78248a5178ee88717bd89bd59f34987d","url":"assets/js/922cfe81.82542ab6.js"},{"revision":"7bb6ca7ba67ec927cab4bd7b58007f12","url":"assets/js/9319.5ef9113d.js"},{"revision":"6c45380caa6be8797a60b07773f20bc2","url":"assets/js/935.f2a7fb97.js"},{"revision":"ac9ad98600373049c6aab7451ab1f982","url":"assets/js/935f2afb.cb4feee3.js"},{"revision":"9560cddc0153b7e7fee13de8b29786ec","url":"assets/js/960.7a7df71d.js"},{"revision":"4ff989e2e38e0290a0b17a41f35e7eec","url":"assets/js/962.d073ae58.js"},{"revision":"472de164c9aa613ae865460ff1c3f652","url":"assets/js/9628.45209db2.js"},{"revision":"dbec267165aea33ee5d19492dd190d33","url":"assets/js/964.ddf26035.js"},{"revision":"a968abd6646e9afe56da31d500d18b76","url":"assets/js/9764.82eb8205.js"},{"revision":"0944030cc28e31c0f4ed36c1a0e6409f","url":"assets/js/9809.5afdb69d.js"},{"revision":"9dce11ee17af4da8858533ba94d4e390","url":"assets/js/9982.c08e2e70.js"},{"revision":"6eb1362d971e0cf7e7b4f647c726f0d1","url":"assets/js/9dc221e8.06e6e514.js"},{"revision":"b6baafde693efccf0e2ee98e69ae1772","url":"assets/js/9e4087bc.fca2f4c3.js"},{"revision":"1ab7a7fc83185f908fb5c34ccb17f09f","url":"assets/js/9f33fddf.3b36acc6.js"},{"revision":"193a3358a7d590e662a6b91e9cd91aff","url":"assets/js/a6aa9e1f.2c5bc769.js"},{"revision":"8e8d245296f6fde70636c5c33b7dc41a","url":"assets/js/a7023ddc.1ee7f9c0.js"},{"revision":"3bcf14b4334f8e01b3b55f989b87ab89","url":"assets/js/a7bd4aaa.53480def.js"},{"revision":"0443e23360ac1aeba0fda4c0a1637efb","url":"assets/js/a94703ab.474c0d17.js"},{"revision":"4a8d963ceaca69c352419fb502b53e35","url":"assets/js/acecf23e.dee0de35.js"},{"revision":"9008ec2de878e57b6d39add4339727e8","url":"assets/js/b168443a.6dd71366.js"},{"revision":"561bf76c042b7db19d61c74677eac4c6","url":"assets/js/b2b675dd.37e721ae.js"},{"revision":"eb57c8d4a127fdeb7a000c8ec31867d1","url":"assets/js/b2f554cd.04eda087.js"},{"revision":"d74ba15b93bddc690cfd76fbb26b3ca6","url":"assets/js/b79bdd52.72bfe750.js"},{"revision":"03c997e852a91d94157c0ceb17ac4920","url":"assets/js/c377a04b.26c0e642.js"},{"revision":"86f2e953a01a096c3f98dcfc3fe7abb9","url":"assets/js/c4f5d8e4.aa7a1922.js"},{"revision":"169df46568e262ba654b565dfed2dfe7","url":"assets/js/c6c42e98.c4bbc78d.js"},{"revision":"2a82a12d02e2dbd8317cdb0b8b111fef","url":"assets/js/ccc49370.8c7f3875.js"},{"revision":"6e5cbb06277b715ae1e051ce5720865d","url":"assets/js/d924ec2b.0034ae93.js"},{"revision":"d06947a2b1b5792d49ae93a990681f5b","url":"assets/js/df90ec84.b739d734.js"},{"revision":"0f719b63b3eb47b245d77d2e77fd6f06","url":"assets/js/df97ccc7.befff095.js"},{"revision":"ca1ca2328125440d3885b79bbf542289","url":"assets/js/e6d800de.174c59af.js"},{"revision":"be4b931f6fbfb6f31e4fe2a8649c7758","url":"assets/js/f1358ff9.7d59179a.js"},{"revision":"dbcf386c9901c891f14a1c32927ba494","url":"assets/js/f2afad6f.c45ca29e.js"},{"revision":"0d5147a32afafff461061f3e4c52252b","url":"assets/js/f36671a7.2ce0f601.js"},{"revision":"71b8310c739d117bffe310f8e176d491","url":"assets/js/f931b00d.e7a1228b.js"},{"revision":"0ea281112c0cef7c9277a094a7efdffa","url":"assets/js/faabbdc4.8fe49d01.js"},{"revision":"bfeff636e1218cc2262cc6e629db1c02","url":"assets/js/fc099570.44ae41ce.js"},{"revision":"f5ebead08c8d8272742d007d91fa4998","url":"assets/js/main.504920bd.js"},{"revision":"364b6465871e1e28943ff4ee50ad7631","url":"assets/js/runtime~main.b731a6db.js"},{"revision":"445a5185a1dfe6075997737ecd2c4c29","url":"blog/2024-survey-closing/index.html"},{"revision":"b8854ec10b4f7ae5f204b00d1ca5e0d9","url":"blog/archive/index.html"},{"revision":"bd3d8626861434986b5402cba39fcd89","url":"blog/index.html"},{"revision":"9a75d4d49a511761b5064760320785c7","url":"blog/kickstart-survey-2024/index.html"},{"revision":"e503838faabb43e6852b426fe11aea11","url":"blog/tags/english/index.html"},{"revision":"79bdb80cff2d83952fae7ce428a8a9de","url":"blog/tags/general/index.html"},{"revision":"0ac9c058fd71b643ecd7dd5f0f02333c","url":"blog/tags/index.html"},{"revision":"fe260ba708076995fa3ca4289962a631","url":"contact/index.html"},{"revision":"71223b0aa28945c8af68adb683d49dac","url":"docs/appendix/glossary/index.html"},{"revision":"e798bb874260e1418a20b0158269bc97","url":"docs/appendix/index.html"},{"revision":"d73419887e9d1e5ec9dc12f0273f8ee6","url":"docs/appendix/methodology/index.html"},{"revision":"0b869d6c8310a77a3d14d7b2121c743e","url":"docs/appendix/raw-interviews/index.html"},{"revision":"4b35deab05b0ca9e30344cb32585e6bc","url":"docs/appendix/raw-results/index.html"},{"revision":"70f786af0e0d04c12bfbc5a9cb979dc0","url":"docs/closing/index.html"},{"revision":"20151203be65d02b6517cd452558bb70","url":"docs/index.html"},{"revision":"42c8c8417d84bc28a95038cfe9bb14b9","url":"docs/insights/agile-ways-of-working/index.html"},{"revision":"5185bd90335de917c8dd964c74015e2c","url":"docs/insights/challenges/index.html"},{"revision":"0432a0da0ddf10b6f15eecd6d57e2efd","url":"docs/insights/cloud-and-devops/index.html"},{"revision":"243af55837283e8cfea31b24fbc7e2f9","url":"docs/insights/communities/index.html"},{"revision":"4d6b101b1f8488a45cfd94a010e75187","url":"docs/insights/cybersecurity/index.html"},{"revision":"0b5bd010cd7c5b79fb056078c7a9debe","url":"docs/insights/data-and-ml/index.html"},{"revision":"18b3b103453fa463833d488973342446","url":"docs/insights/e-payment-solutions/index.html"},{"revision":"9d3872e7e86febd2231ed8ef6418644e","url":"docs/insights/education-and-learning/index.html"},{"revision":"649180eb3bbdc7bfddf82c910e5399d9","url":"docs/insights/future/index.html"},{"revision":"8da763972c914e76d54bdea33777e195","url":"docs/insights/index.html"},{"revision":"9cebf1b3c190aa297d983b394c0a5237","url":"docs/insights/open-source/index.html"},{"revision":"1b987a84739a3852280b5f8acfbb836d","url":"docs/insights/remote-working/index.html"},{"revision":"b4d9018ef34814cbf845f8a2b063045b","url":"docs/insights/remuneration/index.html"},{"revision":"f735a30d63bb08d1e2c2c4720bc7c105","url":"docs/insights/talents-migration/index.html"},{"revision":"56efece014e6e587cbbb17c4300f6d17","url":"docs/insights/technology-trends/index.html"},{"revision":"5d5d34a4baefaeb5014ec3287516ca0d","url":"index.html"},{"revision":"ca7fe517a0f885f241cd0949fe6e87b1","url":"manifest.json"},{"revision":"2001bc279f29c9e9c8ad1f4411c46e13","url":"markdown-page/index.html"},{"revision":"7b92771d25137186f5a7df9a3a4d2106","url":"report/index.html"},{"revision":"4047bfc85a997285b34287fb9ad36233","url":"search/index.html"},{"revision":"4970bcc489f915580b2328b92e244893","url":"support/index.html"},{"revision":"26c06d8a92a9d9b3cef0a464a09a795a","url":"assets/images/age-311e8e0a0b491bc8b19e07477e9d8e5b.png"},{"revision":"38b8a1266359f178c8292ca9281831ef","url":"assets/images/agile-730c26b6d630c7d5ad6a770ea8f56db9.png"},{"revision":"fe90205736d7726dc4008d09f31801be","url":"assets/images/cib-web-data-9d0fc8a57fcdf496d412e98667e97a56.png"},{"revision":"efa2fd6dd1c0f9be35c61231970a975f","url":"assets/images/education-b4fb7fa2162de48edf9e4b933eca8c29.png"},{"revision":"9558f8303cbdf6ad8e6fa19957e6e14d","url":"assets/images/gender-7a34d8f58e3093de810113af288506d1.png"},{"revision":"d5e5811d648c1c9357723e283359bc89","url":"assets/images/google-trends-programming-langs-6a4601d77935448b2d4af4222e19c0ea.png"},{"revision":"2bbe9c169f99e3fce5127ab32caec0c8","url":"assets/images/happiness-index-d3fd5d183bf1259342a6044d2e1617b8.png"},{"revision":"cba3160389522c6f547f79797f13198f","url":"assets/images/programming-language-2020-trend-d9759270f46178743084bfcd25f8f64e.png"},{"revision":"5fbc4101466904415874aa4e0bdfaefb","url":"assets/images/salaries-in-dz-106d27f2e6e84b1b888e4563e816eec4.png"},{"revision":"a343b04e6c413cc9662d606c7d6e0064","url":"assets/images/StatCounter-dz-mobile-users-e4588bacb9adcb48dddd59b005a27c2e.png"},{"revision":"96cafc0b0bdbc3cd01a8f14b0ff8a53b","url":"assets/images/wesbos-js-course-8f84bca56c5a1bf32704ca327676971e.png"},{"revision":"12f2f62f852e671f5f4c83e64607e817","url":"favicon.ico"},{"revision":"0b2be1e066201547c2b3b2758db0c60d","url":"icons/android-chrome-192x192.png"},{"revision":"006642b3b6e1a7432305adacc5bce3c7","url":"icons/android-chrome-512x512.png"},{"revision":"c3975c6b769e557b39740db06731ac65","url":"icons/apple-touch-icon.png"},{"revision":"620f2731871d9be56396891b39499921","url":"icons/favicon-16x16.png"},{"revision":"2de9a729203d7a45fd33cbce53362985","url":"icons/favicon-32x32.png"},{"revision":"fbf769576f276b332d2408da392a5579","url":"icons/mstile-150x150.png"},{"revision":"cba3160389522c6f547f79797f13198f","url":"img/2020-survey/programming-language-2020-trend.png"},{"revision":"be018037a51fd4cad92b820109a4d600","url":"img/2020-survey/salaries-in-algiers.png"},{"revision":"5fbc4101466904415874aa4e0bdfaefb","url":"img/2020-survey/salaries-in-dz.png"},{"revision":"43ba8efeefbb6964185a33659530a86e","url":"img/chabiba-ta3-code.png"},{"revision":"96cafc0b0bdbc3cd01a8f14b0ff8a53b","url":"img/challenges/wesbos-js-course.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"c90ecdc5dc7a91ad36cb1158d80aa6fe","url":"img/favicon.ico"},{"revision":"0bbbabab04484623c1cfbc22286587dc","url":"img/logo.png"},{"revision":"26c06d8a92a9d9b3cef0a464a09a795a","url":"img/stats/age.png"},{"revision":"38b8a1266359f178c8292ca9281831ef","url":"img/stats/agile.png"},{"revision":"fe90205736d7726dc4008d09f31801be","url":"img/stats/cib-web-data.png"},{"revision":"efa2fd6dd1c0f9be35c61231970a975f","url":"img/stats/education.png"},{"revision":"4024f01808a212a71895d2f30fdc94cb","url":"img/stats/employment-type.png"},{"revision":"d5e5811d648c1c9357723e283359bc89","url":"img/stats/external/google-trends-programming-langs.png"},{"revision":"a343b04e6c413cc9662d606c7d6e0064","url":"img/stats/external/StatCounter-dz-mobile-users.png"},{"revision":"9558f8303cbdf6ad8e6fa19957e6e14d","url":"img/stats/gender.png"},{"revision":"2bbe9c169f99e3fce5127ab32caec0c8","url":"img/stats/happiness-index.png"},{"revision":"14e2fdea2eee036e3a26fd69d476eaa5","url":"img/stats/living-abroad.png"},{"revision":"b43e5f81abd7612558416ccbb754797f","url":"img/stats/online-ads-report-icon.png"},{"revision":"1ae1b81ee54a0f787637ca45662718f7","url":"img/stats/roles.png"},{"revision":"a299c6b537aa31839bbdaa3bc5865fc8","url":"img/stats/salarie-in-eur.png"},{"revision":"20b417cdd7b8e35f7ea8ce2015ac8568","url":"img/undraw_anonymous_feedback_re_rc5v.svg"},{"revision":"46e799b297961877e0a742bff7882aee","url":"img/undraw_data_re_80ws.svg"},{"revision":"44bfd5fa02ef54dfe010a9ef5600176a","url":"img/undraw_pair_programming_re_or4x.svg"},{"revision":"fa48c770b83c78e9459d4c3aec5a2705","url":"img/undraw_real_time_analytics_re_yliv.svg"},{"revision":"fdbce306d38057613cb581a4c9331e31","url":"safari-pinned-tab.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();