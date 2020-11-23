/*! For license information please see 30.f26dd98f.chunk.js.LICENSE.txt */
(this["webpackJsonpchin-205"]=this["webpackJsonpchin-205"]||[]).push([[30],{354:function(e,t,n){"use strict";n.r(t);var r,a,i=n(6),s=n(122),o=n.n(s),c=(n(243),n(124)),u=n(86),l=n(123),d="https://www.googletagmanager.com/gtag/js";!function(e){e.EVENT="event",e.SET="set",e.CONFIG="config"}(r||(r={})),function(e){e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"}(a||(a={}));var f,h=new c.Logger("@firebase/analytics");function p(e,t,n,a,s,o){return Object(i.__awaiter)(this,void 0,void 0,(function(){var c,u,l,d;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:c=a[s],i.label=1;case 1:return i.trys.push([1,7,,8]),c?[4,t[c]]:[3,3];case 2:return i.sent(),[3,6];case 3:return[4,Promise.all(n)];case 4:return u=i.sent(),(l=u.find((function(e){return e.measurementId===s})))?[4,t[l.appId]]:[3,6];case 5:i.sent(),i.label=6;case 6:return[3,8];case 7:return d=i.sent(),h.error(d),[3,8];case 8:return e(r.CONFIG,s,o),[2]}}))}))}function m(e,t,n,a,s){return Object(i.__awaiter)(this,void 0,void 0,(function(){var o,c,u,l,d,f,p,m;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),o=[],s&&s.send_to?(c=s.send_to,Array.isArray(c)||(c=[c]),[4,Promise.all(n)]):[3,2];case 1:for(u=i.sent(),l=function(e){var n=u.find((function(t){return t.measurementId===e})),r=n&&t[n.appId];if(!r)return o=[],"break";o.push(r)},d=0,f=c;d<f.length&&(p=f[d],"break"!==l(p));d++);i.label=2;case 2:return 0===o.length&&(o=Object.values(t)),[4,Promise.all(o)];case 3:return i.sent(),e(r.EVENT,a,s||{}),[3,5];case 4:return m=i.sent(),h.error(m),[3,5];case 5:return[2]}}))}))}function b(e,t,n,a,s){var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[a].push(arguments)};return window[s]&&"function"===typeof window[s]&&(o=window[s]),window[s]=function(e,t,n,a){return function(s,o,c){return Object(i.__awaiter)(this,void 0,void 0,(function(){var u;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),s!==r.EVENT?[3,2]:[4,m(e,t,n,o,c)];case 1:return i.sent(),[3,5];case 2:return s!==r.CONFIG?[3,4]:[4,p(e,t,n,a,o,c)];case 3:return i.sent(),[3,5];case 4:e(r.SET,o),i.label=5;case 5:return[3,7];case 6:return u=i.sent(),h.error(u),[3,7];case 7:return[2]}}))}))}}(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}var v=((f={})["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",f["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",f["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",f["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",f["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",f["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",f["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",f["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',f["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',f),_=new u.ErrorFactory("analytics","Analytics",v),g=new(function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=1e3),this.throttleMetadata=e,this.intervalMillis=t}return e.prototype.getThrottleMetadata=function(e){return this.throttleMetadata[e]},e.prototype.setThrottleMetadata=function(e,t){this.throttleMetadata[e]=t},e.prototype.deleteThrottleMetadata=function(e){delete this.throttleMetadata[e]},e}());function w(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function I(e){var t;return Object(i.__awaiter)(this,void 0,void 0,(function(){var n,r,a,s,o,c,u;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return n=e.appId,r=e.apiKey,a={method:"GET",headers:w(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),[4,fetch(s,a)];case 1:if(200===(o=i.sent()).status||304===o.status)return[3,6];c="",i.label=2;case 2:return i.trys.push([2,4,,5]),[4,o.json()];case 3:return u=i.sent(),(null===(t=u.error)||void 0===t?void 0:t.message)&&(c=u.error.message),[3,5];case 4:return i.sent(),[3,5];case 5:throw _.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c});case 6:return[2,o.json()]}}))}))}function E(e,t,n,r){var a=t.throttleEndTimeMillis,s=t.backoffCount;return void 0===r&&(r=g),Object(i.__awaiter)(this,void 0,void 0,(function(){var t,o,c,l,d,f,p;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:t=e.appId,o=e.measurementId,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,O(n,a)];case 2:return i.sent(),[3,4];case 3:if(c=i.sent(),o)return h.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+o+' provided in the "measurementId" field in the local Firebase config. ['+c.message+"]"),[2,{appId:t,measurementId:o}];throw c;case 4:return i.trys.push([4,6,,7]),[4,I(e)];case 5:return l=i.sent(),r.deleteThrottleMetadata(t),[2,l];case 6:if(!function(e){if(!(e instanceof u.FirebaseError))return!1;var t=Number(e.httpStatus);return 429===t||500===t||503===t||504===t}(d=i.sent())){if(r.deleteThrottleMetadata(t),o)return h.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+o+' provided in the "measurementId" field in the local Firebase config. ['+d.message+"]"),[2,{appId:t,measurementId:o}];throw d}return f=503===Number(d.httpStatus)?Object(u.calculateBackoffMillis)(s,r.intervalMillis,30):Object(u.calculateBackoffMillis)(s,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:s+1},r.setThrottleMetadata(t,p),h.debug("Calling attemptFetch again in "+f+" millis"),[2,E(e,p,n,r)];case 7:return[2]}}))}))}function O(e,t){return new Promise((function(n,r){var a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener((function(){clearTimeout(i),r(_.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}var y=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(e){this.listeners.push(e)},e.prototype.abort=function(){this.listeners.forEach((function(e){return e()}))},e}();function T(e,t,n,a,s){return Object(i.__awaiter)(this,void 0,void 0,(function(){var o,c,l,d,f,p,m;return Object(i.__generator)(this,(function(b){switch(b.label){case 0:return(o=function(e,t,n){return void 0===t&&(t=g),Object(i.__awaiter)(this,void 0,void 0,(function(){var r,a,s,o,c,u,l=this;return Object(i.__generator)(this,(function(d){if(r=e.options,a=r.appId,s=r.apiKey,o=r.measurementId,!a)throw _.create("no-app-id");if(!s){if(o)return[2,{measurementId:o,appId:a}];throw _.create("no-api-key")}return c=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new y,setTimeout((function(){return Object(i.__awaiter)(l,void 0,void 0,(function(){return Object(i.__generator)(this,(function(e){return u.abort(),[2]}))}))}),void 0!==n?n:6e4),[2,E({appId:a,apiKey:s,measurementId:o},c,u,t)]}))}))}(e)).then((function(t){n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&h.warn("The measurement ID in the local Firebase config ("+e.options.measurementId+") does not match the measurement ID fetched from the server ("+t.measurementId+"). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return h.error(e)})),t.push(o),c=function(){return Object(i.__awaiter)(this,void 0,void 0,(function(){var e;return Object(i.__generator)(this,(function(t){switch(t.label){case 0:return Object(u.isIndexedDBAvailable)()?[3,1]:(h.warn(_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),[2,!1]);case 1:return t.trys.push([1,3,,4]),[4,Object(u.validateIndexedDBOpenable)()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),h.warn(_.create("indexeddb-unavailable",{errorInfo:e}).message),[2,!1];case 4:return[2,!0]}}))}))}().then((function(e){return e?a.getId():void 0})),[4,Promise.all([o,c])];case 1:return l=b.sent(),d=l[0],f=l[1],s("js",new Date),(m={}).origin="firebase",m.update=!0,p=m,null!=f&&(p.firebase_id=f),s(r.CONFIG,d.measurementId,p),[2,d.measurementId]}}))}))}var j,C,N={},A=[],F={},M="dataLayer",D="gtag",S=!1;function P(e){if(S)throw _.create("already-initialized");e.dataLayerName&&(M=e.dataLayerName),e.gtagName&&(D=e.gtagName)}function k(e,t){!function(){var e=[];if(Object(u.isBrowserExtension)()&&e.push("This is a browser extension environment."),Object(u.areCookiesEnabled)()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"("+(t+1)+") "+e})).join(" "),n=_.create("invalid-analytics-context",{errorInfo:t});h.warn(n.message)}}();var n=e.options.appId;if(!n)throw _.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw _.create("no-api-key");h.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=N[n])throw _.create("already-exists",{id:n});if(!S){(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(d))return r}return null})()||function(e){var t=document.createElement("script");t.src=d+"?l="+e,t.async=!0,document.head.appendChild(t)}(M),function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(M);var a=b(N,A,F,M,D),s=a.wrappedGtag,o=a.gtagCore;C=s,j=o,S=!0}return N[n]=T(e,A,F,t,j),{app:e,logEvent:function(e,t,a){(function(e,t,n,a,s){return Object(i.__awaiter)(this,void 0,void 0,(function(){var o,c;return Object(i.__generator)(this,(function(u){switch(u.label){case 0:return s&&s.global?(e(r.EVENT,n,a),[2]):[3,1];case 1:return[4,t];case 2:o=u.sent(),c=Object(i.__assign)(Object(i.__assign)({},a),{send_to:o}),e(r.EVENT,n,c),u.label=3;case 3:return[2]}}))}))})(C,N[n],e,t,a).catch((function(e){return h.error(e)}))},setCurrentScreen:function(e,t){(function(e,t,n,a){return Object(i.__awaiter)(this,void 0,void 0,(function(){var s;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return a&&a.global?(e(r.SET,{screen_name:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:s=i.sent(),e(r.CONFIG,s,{update:!0,screen_name:n}),i.label=3;case 3:return[2]}}))}))})(C,N[n],e,t).catch((function(e){return h.error(e)}))},setUserId:function(e,t){(function(e,t,n,a){return Object(i.__awaiter)(this,void 0,void 0,(function(){var s;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return a&&a.global?(e(r.SET,{user_id:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:s=i.sent(),e(r.CONFIG,s,{update:!0,user_id:n}),i.label=3;case 3:return[2]}}))}))})(C,N[n],e,t).catch((function(e){return h.error(e)}))},setUserProperties:function(e,t){(function(e,t,n,a){return Object(i.__awaiter)(this,void 0,void 0,(function(){var s,o,c,u,l;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:if(!a||!a.global)return[3,1];for(s={},o=0,c=Object.keys(n);o<c.length;o++)u=c[o],s["user_properties."+u]=n[u];return e(r.SET,s),[2,Promise.resolve()];case 1:return[4,t];case 2:l=i.sent(),e(r.CONFIG,l,{update:!0,user_properties:n}),i.label=3;case 3:return[2]}}))}))})(C,N[n],e,t).catch((function(e){return h.error(e)}))},setAnalyticsCollectionEnabled:function(e){(function(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var n;return Object(i.__generator)(this,(function(r){switch(r.label){case 0:return[4,e];case 1:return n=r.sent(),window["ga-disable-"+n]=!t,[2]}}))}))})(N[n],e).catch((function(e){return h.error(e)}))},INTERNAL:{delete:function(){return delete N[n],Promise.resolve()}}}}var x,R="analytics";function L(){return Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(e){switch(e.label){case 0:if(Object(u.isBrowserExtension)())return[2,!1];if(!Object(u.areCookiesEnabled)())return[2,!1];if(!Object(u.isIndexedDBAvailable)())return[2,!1];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Object(u.validateIndexedDBOpenable)()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,!1];case 4:return[2]}}))}))}(x=o.a).INTERNAL.registerComponent(new l.Component(R,(function(e){return k(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())}),"PUBLIC").setServiceProps({settings:P,EventName:a,isSupported:L})),x.INTERNAL.registerComponent(new l.Component("analytics-internal",(function(e){try{return{logEvent:e.getProvider(R).getImmediate().logEvent}}catch(t){throw _.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),x.registerVersion("@firebase/analytics","0.6.0")}}]);
//# sourceMappingURL=30.f26dd98f.chunk.js.map