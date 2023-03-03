var osmAuth=(function(){var ye=Object.create;var T=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Ae=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty;var h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},je=function(e,t){for(var r in t)T(e,r,{get:t[r],enumerable:!0})},D=function(e,t,r,i){if(t&&typeof t=="object"||typeof t=="function")for(var a=Oe(t),o=0,l=a.length,u;o<l;o++)u=a[o],!Pe.call(e,u)&&u!==r&&T(e,u,{get:function(n){return t[n]}.bind(null,u),enumerable:!(i=Se(t,u))||i.enumerable});return e};var Fe=function(e,t,r){return r=e!=null?ye(Ae(e)):{},D(t||!e||!e.__esModule?T(r,"default",{value:e,enumerable:!0}):r,e)},Te=function(e){return D(T({},"__esModule",{value:!0}),e)};var _=h(function(Gt,$){var E=Je(),ke=Ne(),qe=Ce(),Ee=typeof window!="undefined"?window:global;$.exports={assign:E,create:ke,trim:qe,bind:Ie,slice:J,each:U,map:Ge,pluck:N,isList:C,isFunction:Me,isObject:Re,Global:Ee};function Je(){return Object.assign?Object.assign:function(t,r,i,a){for(var o=1;o<arguments.length;o++)U(Object(arguments[o]),function(l,u){t[u]=l});return t}}function Ne(){if(Object.create)return function(r,i,a,o){var l=J(arguments,1);return E.apply(this,[Object.create(r)].concat(l))};var t=function(){},e=t;return function(i,a,o,l){var u=J(arguments,1);return t.prototype=i,E.apply(this,[new t].concat(u))}}function Ce(){return String.prototype.trim?function(t){return String.prototype.trim.call(t)}:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function Ie(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function J(e,t){return Array.prototype.slice.call(e,t||0)}function U(e,t){N(e,function(r,i){return t(r,i),!1})}function Ge(e,t){var r=C(e)?[]:{};return N(e,function(i,a){return r[a]=t(i,a),!1}),r}function N(e,t){if(C(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var i in e)if(e.hasOwnProperty(i)&&t(e[i],i))return e[i]}function C(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"}function Me(e){return e&&{}.toString.call(e)==="[object Function]"}function Re(e){return e&&{}.toString.call(e)==="[object Object]"}});var X=h(function(Mt,B){var v=_(),ze=v.slice,Le=v.pluck,b=v.each,De=v.bind,Ue=v.create,I=v.isList,G=v.isFunction,$e=v.isObject;B.exports={createStore:M};var Be={version:"2.0.12",enabled:!1,get:function(e,t){var r=this.storage.read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return t===void 0?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each(function(r,i){e.call(t,t._deserialize(r),(i||"").replace(t._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return M.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return M(this.storage,this.plugins,e)}};function Xe(){var e=typeof console=="undefined"?null:console;if(e){var t=e.warn?e.warn:e.log;t.apply(e,arguments)}}function M(e,t,r){r||(r=""),e&&!I(e)&&(e=[e]),t&&!I(t)&&(t=[t]);var i=r?"__storejs_"+r+"_":"",a=r?new RegExp("^"+i):null,o=/^[a-zA-Z0-9_\-]*$/;if(!o.test(r))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var l={_namespacePrefix:i,_namespaceRegexp:a,_testStorage:function(n){try{var c="__storejs__test__";n.write(c,c);var s=n.read(c)===c;return n.remove(c),s}catch(g){return!1}},_assignPluginFnProp:function(n,c){var s=this[c];this[c]=function(){var p=ze(arguments,0),d=this;function m(){if(s)return b(arguments,function(xe,be){p[be]=xe}),s.apply(d,p)}var q=[m].concat(p);return n.apply(d,q)}},_serialize:function(n){return JSON.stringify(n)},_deserialize:function(n,c){if(!n)return c;var s="";try{s=JSON.parse(n)}catch(g){s=n}return s!==void 0?s:c},_addStorage:function(n){this.enabled||this._testStorage(n)&&(this.storage=n,this.enabled=!0)},_addPlugin:function(n){var c=this;if(I(n)){b(n,function(p){c._addPlugin(p)});return}var s=Le(this.plugins,function(p){return n===p});if(!s){if(this.plugins.push(n),!G(n))throw new Error("Plugins must be function values that return objects");var g=n.call(this);if(!$e(g))throw new Error("Plugins must return an object of function properties");b(g,function(p,d){if(!G(p))throw new Error("Bad plugin property: "+d+" from plugin "+n.name+". Plugins should only return functions.");c._assignPluginFnProp(p,d)})}},addStorage:function(n){Xe("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(n)}},u=Ue(l,Be,{plugins:[]});return u.raw={},b(u,function(n,c){G(n)&&(u.raw[c]=De(u,n))}),b(e,function(n){u._addStorage(n)}),b(t,function(n){u._addPlugin(n)}),u}});var H=h(function(Rt,K){var We=_(),Ke=We.Global;K.exports={name:"localStorage",read:W,write:He,each:Qe,remove:Ze,clearAll:Ye};function y(){return Ke.localStorage}function W(e){return y().getItem(e)}function He(e,t){return y().setItem(e,t)}function Qe(e){for(var t=y().length-1;t>=0;t--){var r=y().key(t);e(W(r),r)}}function Ze(e){return y().removeItem(e)}function Ye(){return y().clear()}});var Y=h(function(zt,Z){var Ve=_(),et=Ve.Global;Z.exports={name:"oldFF-globalStorage",read:tt,write:rt,each:Q,remove:nt,clearAll:at};var w=et.globalStorage;function tt(e){return w[e]}function rt(e,t){w[e]=t}function Q(e){for(var t=w.length-1;t>=0;t--){var r=w.key(t);e(w[r],r)}}function nt(e){return w.removeItem(e)}function at(){Q(function(e,t){delete w[e]})}});var te=h(function(Lt,ee){var it=_(),R=it.Global;ee.exports={name:"oldIE-userDataStorage",write:ot,read:ut,each:ct,remove:st,clearAll:ft};var A="storejs",O=R.document,P=pt(),V=(R.navigator?R.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function ot(e,t){if(!V){var r=z(e);P(function(i){i.setAttribute(r,t),i.save(A)})}}function ut(e){if(!V){var t=z(e),r=null;return P(function(i){r=i.getAttribute(t)}),r}}function ct(e){P(function(t){for(var r=t.XMLDocument.documentElement.attributes,i=r.length-1;i>=0;i--){var a=r[i];e(t.getAttribute(a.name),a.name)}})}function st(e){var t=z(e);P(function(r){r.removeAttribute(t),r.save(A)})}function ft(){P(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(A);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(A)})}var lt=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function z(e){return e.replace(/^\d/,"___$&").replace(lt,"___")}function pt(){if(!O||!O.documentElement||!O.documentElement.addBehavior)return null;var e="script",t,r,i;try{r=new ActiveXObject("htmlfile"),r.open(),r.write("<"+e+">document.w=window</"+e+'><iframe src="/favicon.ico"></iframe>'),r.close(),t=r.w.frames[0].document,i=t.createElement("div")}catch(a){i=O.createElement("div"),t=O.body}return function(a){var o=[].slice.call(arguments,0);o.unshift(i),t.appendChild(i),i.addBehavior("#default#userData"),i.load(A),a.apply(this,o),t.removeChild(i)}}});var ue=h(function(Dt,oe){var re=_(),dt=re.Global,gt=re.trim;oe.exports={name:"cookieStorage",read:ht,write:vt,each:ne,remove:ae,clearAll:mt};var F=dt.document;function ht(e){if(!e||!ie(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(F.cookie.replace(new RegExp(t),"$1"))}function ne(e){for(var t=F.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(gt(t[r])){var i=t[r].split("="),a=unescape(i[0]),o=unescape(i[1]);e(o,a)}}function vt(e,t){e&&(F.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function ae(e){!e||!ie(e)||(F.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function mt(){ne(function(e,t){ae(t)})}function ie(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(F.cookie)}});var fe=h(function(Ut,se){var _t=_(),wt=_t.Global;se.exports={name:"sessionStorage",read:ce,write:xt,each:bt,remove:yt,clearAll:St};function S(){return wt.sessionStorage}function ce(e){return S().getItem(e)}function xt(e,t){return S().setItem(e,t)}function bt(e){for(var t=S().length-1;t>=0;t--){var r=S().key(t);e(ce(r),r)}}function yt(e){return S().removeItem(e)}function St(){return S().clear()}});var pe=h(function($t,le){le.exports={name:"memoryStorage",read:Ot,write:At,each:Pt,remove:jt,clearAll:Ft};var x={};function Ot(e){return x[e]}function At(e,t){x[e]=t}function Pt(e){for(var t in x)x.hasOwnProperty(t)&&e(x[t],t)}function jt(e){delete x[e]}function Ft(e){x={}}});var ge=h(function(Bt,de){de.exports=[H(),Y(),te(),ue(),fe(),pe()]});var he=h(function(exports,module){typeof JSON!="object"&&(JSON={});(function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(t){var r=meta[t];return typeof r=="string"?r:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,i,a,o,l=gap,u,n=t[e];switch(n&&typeof n=="object"&&typeof n.toJSON=="function"&&(n=n.toJSON(e)),typeof rep=="function"&&(n=rep.call(t,e,n)),typeof n){case"string":return quote(n);case"number":return isFinite(n)?String(n):"null";case"boolean":case"null":return String(n);case"object":if(!n)return"null";if(gap+=indent,u=[],Object.prototype.toString.apply(n)==="[object Array]"){for(o=n.length,r=0;r<o;r+=1)u[r]=str(r,n)||"null";return a=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+l+"]":"["+u.join(",")+"]",gap=l,a}if(rep&&typeof rep=="object")for(o=rep.length,r=0;r<o;r+=1)typeof rep[r]=="string"&&(i=rep[r],a=str(i,n),a&&u.push(quote(i)+(gap?": ":":")+a));else for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a=str(i,n),a&&u.push(quote(i)+(gap?": ":":")+a));return a=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+l+"}":"{"+u.join(",")+"}",gap=l,a}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var i;if(gap="",indent="",typeof r=="number")for(i=0;i<r;i+=1)indent+=" ";else typeof r=="string"&&(indent=r);if(rep=t,t&&typeof t!="function"&&(typeof t!="object"||typeof t.length!="number"))throw new Error("JSON.stringify");return str("",{"":e})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(e,t){var r,i,a=e[t];if(a&&typeof a=="object")for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=walk(a,r),i!==void 0?a[r]=i:delete a[r]);return reviver.call(e,t,a)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})})()});var me=h(function(Xt,ve){ve.exports=Tt;function Tt(){return he(),{}}});var we=h(function(Wt,_e){var kt=X(),qt=ge(),Et=[me()];_e.exports=kt.createStore(qt,Et)});var Ct={};je(Ct,{osmAuth:function(){return Jt}});var k=Fe(we(),1);function Jt(e){var t={};t.authenticated=function(){return!!r("oauth2_access_token")},t.logout=function(){return r("oauth2_access_token",""),r("oauth_token",""),r("oauth_token_secret",""),r("oauth_request_token_secret",""),t},t.authenticate=function(a){if(t.authenticated()){a(null,t);return}t.logout();var o=e.url+"/oauth2/authorize?"+L({client_id:e.client_id,redirect_uri:e.redirect_uri,response_type:"code",scope:e.scope});if(!e.singlepage){var l=600,u=550,n=[["width",l],["height",u],["left",window.screen.width/2-l/2],["top",window.screen.height/2-u/2]].map(function(d){return d.join("=")}).join(","),c=window.open("about:blank","oauth_window",n);if(t.popupWindow=c,c.location=o,!c){var s=new Error("Popup was blocked");throw s.status="popup-blocked",s}}window.authComplete=function(d){var m=Nt(d.split("?")[1]);g(m.code),delete window.authComplete};function g(d){var m=e.url+"/oauth2/token?"+L({client_id:e.client_id,grant_type:"authorization_code",code:d,redirect_uri:e.redirect_uri,client_secret:e.client_secret});t.rawxhr("POST",m,null,null,null,p),e.loading()}function p(d,m){if(e.done(),d){a(d);return}var q=JSON.parse(m.response);r("oauth2_access_token",q.access_token),a(null,t)}},t.bringPopupWindowToFront=function(){var a=!1;try{t.popupWindow&&!t.popupWindow.closed&&(t.popupWindow.focus(),a=!0)}catch(o){}return a},t.bootstrapToken=function(a,o){function l(n){var c=e.url+"/oauth2/token?"+L({client_id:e.client_id,grant_type:"authorization_code",code:n,redirect_uri:e.redirect_uri,client_secret:e.client_secret});t.rawxhr("POST",c,null,null,null,u),e.loading()}function u(n,c){if(e.done(),n){o(n);return}var s=JSON.parse(c.response);r("oauth2_access_token",s.access_token),o(null,t)}l(a)},t.fetch=function(a,o,l){if(t.authenticated())return u();if(e.auto){t.authenticate(u);return}else{l("not authenticated",null);return}function u(){var n=o.prefix!==!1?e.url+a:a,c=o.headers||{"Content-Type":"application/x-www-form-urlencoded"};return c.Authorization="Bearer "+r("oauth2_access_token"),fetch(n,{method:o.method,body:o.body,headers:c}).then(function(s){var g=s.headers.get("content-type").split(";")[0];switch(g){case"text/html":case"text/xml":return s.text().then(function(p){return new window.DOMParser().parseFromString(p,g)});case"application/html":return s.json();default:return s.text()}})}},t.xhr=function(a,o){if(t.authenticated())return l();if(e.auto){t.authenticate(l);return}else{o("not authenticated",null);return}function l(){var n=a.prefix!==!1?e.url+a.path:a.path;return t.rawxhr(a.method,n,r("oauth2_access_token"),a.content,a.headers,u)}function u(n,c){n?o(n):c.responseXML?o(n,c.responseXML):o(n,c.response)}},t.rawxhr=function(a,o,l,u,n,c){n=n||{"Content-Type":"application/x-www-form-urlencoded"},l&&(n.Authorization="Bearer "+l);var s=new XMLHttpRequest;s.onreadystatechange=function(){s.readyState===4&&s.status!==0&&(/^20\d$/.test(s.status)?c(null,s):c(s,null))},s.onerror=function(p){c(p,null)},s.open(a,o,!0);for(var g in n)s.setRequestHeader(g,n[g]);return s.send(u),s},t.preauth=function(a){return a&&a.access_token&&r("oauth2_access_token",a.access_token),t},t.options=function(a){return arguments.length?(e=a,e.url=e.url||"https://www.openstreetmap.org",e.auto=e.auto||!1,e.singlepage=e.singlepage||!1,e.loading=e.loading||function(){},e.done=e.done||function(){},t.preauth(e)):e};var r;if(k.default.enabled)r=function(a,o){if(arguments.length===1)return k.default.get(e.url+a);if(arguments.length===2)return k.default.set(e.url+a,o)};else{var i={};r=function(a,o){if(arguments.length===1)return i[e.url+a];if(arguments.length===2)return i[e.url+a]=o}}return t.options(e),t}function L(e){return Object.keys(e).sort().map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function Nt(e){for(var t=0;t<e.length&&(e[t]==="?"||e[t]==="#");)t++;return e=e.slice(t),e.split("&").reduce(function(r,i){var a=i.split("=");return a.length===2&&(r[a[0]]=decodeURIComponent(a[1])),r},{})}return Te(Ct);})();
//# sourceMappingURL=osm-auth.iife.js.map
