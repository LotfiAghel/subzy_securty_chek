var le=Object.defineProperty;var ce=(i,t,e)=>t in i?le(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var g=(i,t,e)=>ce(i,typeof t!="symbol"?t+"":t,e);const ue=[".html5-video-player"],de=()=>typeof chrome<"u"&&chrome.runtime?chrome.runtime.getURL("icons/subzy-icon.svg"):"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjAiIGZpbGw9IiM0Mjg1RjQiLz4KPHR5ZXh0IHg9IjI0IiB5PSIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPlM8L3RleHQ+Cjwvc3ZnPgo=",st={backdrop:`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999999;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    box-sizing: border-box;
    animation: subzy-fade-in 0.3s ease-out;
    * {
      font-family: 'Azar' !important;
    }
  `,modal:`
    background: #18181B;
    border-radius: 12px;
    padding: 24px;
    width: 380px;
    max-width: calc(100% - 40px);
    color: white;
    font-family: 'Azar' !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    position: relative;
    animation: subzy-slide-up 0.3s ease-out;
    margin-left: auto;
    margin-bottom: 60px;
    * {
      font-family: 'Azar' !important;
    }
  `,settingsModal:`
    background: #18181B;
    border-radius: 12px;
    padding: 16px;
    width: 450px;
    max-width: calc(100% - 40px);
    color: white;
    font-family: 'Azar' !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    position: relative;
    animation: subzy-slide-up 0.3s ease-out;
    margin-left: auto;
    margin-bottom: 60px;
    max-height: 550px;
    overflow-y: auto;
    * {
      font-family: 'Azar' !important;
    }
  `},he=`
  @keyframes subzy-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes subzy-slide-up {
    from { 
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to { 
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;function Bt(i,t){return function(){return i.apply(t,arguments)}}const{toString:pe}=Object.prototype,{getPrototypeOf:mt}=Object,{iterator:Y,toStringTag:Ft}=Symbol,G=(i=>t=>{const e=pe.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),O=i=>(i=i.toLowerCase(),t=>G(t)===i),Q=i=>t=>typeof t===i,{isArray:N}=Array,q=Q("undefined");function fe(i){return i!==null&&!q(i)&&i.constructor!==null&&!q(i.constructor)&&L(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Mt=O("ArrayBuffer");function me(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&Mt(i.buffer),t}const be=Q("string"),L=Q("function"),Nt=Q("number"),tt=i=>i!==null&&typeof i=="object",ge=i=>i===!0||i===!1,K=i=>{if(G(i)!=="object")return!1;const t=mt(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ft in i)&&!(Y in i)},ye=O("Date"),Se=O("File"),ve=O("Blob"),we=O("FileList"),Ce=i=>tt(i)&&L(i.pipe),Ee=i=>{let t;return i&&(typeof FormData=="function"&&i instanceof FormData||L(i.append)&&((t=G(i))==="formdata"||t==="object"&&L(i.toString)&&i.toString()==="[object FormData]"))},xe=O("URLSearchParams"),[Ae,Te,ke,Le]=["ReadableStream","Request","Response","Headers"].map(O),Ie=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(i,t,{allOwnKeys:e=!1}={}){if(i===null||typeof i>"u")return;let n,s;if(typeof i!="object"&&(i=[i]),N(i))for(n=0,s=i.length;n<s;n++)t.call(null,i[n],n,i);else{const o=e?Object.getOwnPropertyNames(i):Object.keys(i),r=o.length;let a;for(n=0;n<r;n++)a=o[n],t.call(null,i[a],a,i)}}function Ut(i,t){t=t.toLowerCase();const e=Object.keys(i);let n=e.length,s;for(;n-- >0;)if(s=e[n],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_t=i=>!q(i)&&i!==B;function lt(){const{caseless:i}=_t(this)&&this||{},t={},e=(n,s)=>{const o=i&&Ut(t,s)||s;K(t[o])&&K(n)?t[o]=lt(t[o],n):K(n)?t[o]=lt({},n):N(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&j(arguments[n],e);return t}const Oe=(i,t,e,{allOwnKeys:n}={})=>(j(t,(s,o)=>{e&&L(s)?i[o]=Bt(s,e):i[o]=s},{allOwnKeys:n}),i),Re=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),ze=(i,t,e,n)=>{i.prototype=Object.create(t.prototype,n),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:t.prototype}),e&&Object.assign(i.prototype,e)},Pe=(i,t,e,n)=>{let s,o,r;const a={};if(t=t||{},i==null)return t;do{for(s=Object.getOwnPropertyNames(i),o=s.length;o-- >0;)r=s[o],(!n||n(r,i,t))&&!a[r]&&(t[r]=i[r],a[r]=!0);i=e!==!1&&mt(i)}while(i&&(!e||e(i,t))&&i!==Object.prototype);return t},De=(i,t,e)=>{i=String(i),(e===void 0||e>i.length)&&(e=i.length),e-=t.length;const n=i.indexOf(t,e);return n!==-1&&n===e},Be=i=>{if(!i)return null;if(N(i))return i;let t=i.length;if(!Nt(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=i[t];return e},Fe=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&mt(Uint8Array)),Me=(i,t)=>{const n=(i&&i[Y]).call(i);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(i,o[0],o[1])}},Ne=(i,t)=>{let e;const n=[];for(;(e=i.exec(t))!==null;)n.push(e);return n},Ue=O("HTMLFormElement"),_e=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,n,s){return n.toUpperCase()+s}),vt=(({hasOwnProperty:i})=>(t,e)=>i.call(t,e))(Object.prototype),qe=O("RegExp"),qt=(i,t)=>{const e=Object.getOwnPropertyDescriptors(i),n={};j(e,(s,o)=>{let r;(r=t(s,o,i))!==!1&&(n[o]=r||s)}),Object.defineProperties(i,n)},je=i=>{qt(i,(t,e)=>{if(L(i)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const n=i[e];if(L(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},He=(i,t)=>{const e={},n=s=>{s.forEach(o=>{e[o]=!0})};return N(i)?n(i):n(String(i).split(t)),e},Ve=()=>{},$e=(i,t)=>i!=null&&Number.isFinite(i=+i)?i:t;function Ke(i){return!!(i&&L(i.append)&&i[Ft]==="FormData"&&i[Y])}const We=i=>{const t=new Array(10),e=(n,s)=>{if(tt(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=N(n)?[]:{};return j(n,(r,a)=>{const d=e(r,s+1);!q(d)&&(o[a]=d)}),t[s]=void 0,o}}return n};return e(i,0)},Je=O("AsyncFunction"),Ze=i=>i&&(tt(i)||L(i))&&L(i.then)&&L(i.catch),jt=((i,t)=>i?setImmediate:t?((e,n)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===e&&n.length&&n.shift()()},!1),s=>{n.push(s),B.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",L(B.postMessage)),Xe=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||jt,Ye=i=>i!=null&&L(i[Y]),c={isArray:N,isArrayBuffer:Mt,isBuffer:fe,isFormData:Ee,isArrayBufferView:me,isString:be,isNumber:Nt,isBoolean:ge,isObject:tt,isPlainObject:K,isReadableStream:Ae,isRequest:Te,isResponse:ke,isHeaders:Le,isUndefined:q,isDate:ye,isFile:Se,isBlob:ve,isRegExp:qe,isFunction:L,isStream:Ce,isURLSearchParams:xe,isTypedArray:Fe,isFileList:we,forEach:j,merge:lt,extend:Oe,trim:Ie,stripBOM:Re,inherits:ze,toFlatObject:Pe,kindOf:G,kindOfTest:O,endsWith:De,toArray:Be,forEachEntry:Me,matchAll:Ne,isHTMLForm:Ue,hasOwnProperty:vt,hasOwnProp:vt,reduceDescriptors:qt,freezeMethods:je,toObjectSet:He,toCamelCase:_e,noop:Ve,toFiniteNumber:$e,findKey:Ut,global:B,isContextDefined:_t,isSpecCompliantForm:Ke,toJSONObject:We,isAsyncFn:Je,isThenable:Ze,setImmediate:jt,asap:Xe,isIterable:Ye};function S(i,t,e,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}c.inherits(S,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.status}}});const Ht=S.prototype,Vt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Vt[i]={value:i}});Object.defineProperties(S,Vt);Object.defineProperty(Ht,"isAxiosError",{value:!0});S.from=(i,t,e,n,s,o)=>{const r=Object.create(Ht);return c.toFlatObject(i,r,function(d){return d!==Error.prototype},a=>a!=="isAxiosError"),S.call(r,i.message,t,e,n,s),r.cause=i,r.name=i.name,o&&Object.assign(r,o),r};const Ge=null;function ct(i){return c.isPlainObject(i)||c.isArray(i)}function $t(i){return c.endsWith(i,"[]")?i.slice(0,-2):i}function wt(i,t,e){return i?i.concat(t).map(function(s,o){return s=$t(s),!e&&o?"["+s+"]":s}).join(e?".":""):t}function Qe(i){return c.isArray(i)&&!i.some(ct)}const tn=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function et(i,t,e){if(!c.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,e=c.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!c.isUndefined(b[y])});const n=e.metaTokens,s=e.visitor||u,o=e.dots,r=e.indexes,d=(e.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(c.isDate(p))return p.toISOString();if(!d&&c.isBlob(p))throw new S("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(p)||c.isTypedArray(p)?d&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,b){let v=p;if(p&&!b&&typeof p=="object"){if(c.endsWith(y,"{}"))y=n?y:y.slice(0,-2),p=JSON.stringify(p);else if(c.isArray(p)&&Qe(p)||(c.isFileList(p)||c.endsWith(y,"[]"))&&(v=c.toArray(p)))return y=$t(y),v.forEach(function(E,T){!(c.isUndefined(E)||E===null)&&t.append(r===!0?wt([y],T,o):r===null?y:y+"[]",l(E))}),!1}return ct(p)?!0:(t.append(wt(b,y,o),l(p)),!1)}const h=[],f=Object.assign(tn,{defaultVisitor:u,convertValue:l,isVisitable:ct});function w(p,y){if(!c.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(p),c.forEach(p,function(v,C){(!(c.isUndefined(v)||v===null)&&s.call(t,v,c.isString(C)?C.trim():C,y,f))===!0&&w(v,y?y.concat(C):[C])}),h.pop()}}if(!c.isObject(i))throw new TypeError("data must be an object");return w(i),t}function Ct(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function bt(i,t){this._pairs=[],i&&et(i,this,t)}const Kt=bt.prototype;Kt.append=function(t,e){this._pairs.push([t,e])};Kt.toString=function(t){const e=t?function(n){return t.call(this,n,Ct)}:Ct;return this._pairs.map(function(s){return e(s[0])+"="+e(s[1])},"").join("&")};function en(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wt(i,t,e){if(!t)return i;const n=e&&e.encode||en;c.isFunction(e)&&(e={serialize:e});const s=e&&e.serialize;let o;if(s?o=s(t,e):o=c.isURLSearchParams(t)?t.toString():new bt(t,e).toString(n),o){const r=i.indexOf("#");r!==-1&&(i=i.slice(0,r)),i+=(i.indexOf("?")===-1?"?":"&")+o}return i}class Et{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Jt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nn=typeof URLSearchParams<"u"?URLSearchParams:bt,sn=typeof FormData<"u"?FormData:null,on=typeof Blob<"u"?Blob:null,rn={isBrowser:!0,classes:{URLSearchParams:nn,FormData:sn,Blob:on},protocols:["http","https","file","blob","url","data"]},gt=typeof window<"u"&&typeof document<"u",ut=typeof navigator=="object"&&navigator||void 0,an=gt&&(!ut||["ReactNative","NativeScript","NS"].indexOf(ut.product)<0),ln=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cn=gt&&window.location.href||"http://localhost",un=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gt,hasStandardBrowserEnv:an,hasStandardBrowserWebWorkerEnv:ln,navigator:ut,origin:cn},Symbol.toStringTag,{value:"Module"})),A={...un,...rn};function dn(i,t){return et(i,new A.classes.URLSearchParams,Object.assign({visitor:function(e,n,s,o){return A.isNode&&c.isBuffer(e)?(this.append(n,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function hn(i){return c.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pn(i){const t={},e=Object.keys(i);let n;const s=e.length;let o;for(n=0;n<s;n++)o=e[n],t[o]=i[o];return t}function Zt(i){function t(e,n,s,o){let r=e[o++];if(r==="__proto__")return!0;const a=Number.isFinite(+r),d=o>=e.length;return r=!r&&c.isArray(s)?s.length:r,d?(c.hasOwnProp(s,r)?s[r]=[s[r],n]:s[r]=n,!a):((!s[r]||!c.isObject(s[r]))&&(s[r]=[]),t(e,n,s[r],o)&&c.isArray(s[r])&&(s[r]=pn(s[r])),!a)}if(c.isFormData(i)&&c.isFunction(i.entries)){const e={};return c.forEachEntry(i,(n,s)=>{t(hn(n),s,e,0)}),e}return null}function fn(i,t,e){if(c.isString(i))try{return(t||JSON.parse)(i),c.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(e||JSON.stringify)(i)}const H={transitional:Jt,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",s=n.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s?JSON.stringify(Zt(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return dn(t,this.formSerializer).toString();if((a=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return et(a?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(e.setContentType("application/json",!1),fn(t)):t}],transformResponse:[function(t){const e=this.transitional||H.transitional,n=e&&e.forcedJSONParsing,s=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(n&&!this.responseType||s)){const r=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(r)throw a.name==="SyntaxError"?S.from(a,S.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],i=>{H.headers[i]={}});const mn=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bn=i=>{const t={};let e,n,s;return i&&i.split(`
`).forEach(function(r){s=r.indexOf(":"),e=r.substring(0,s).trim().toLowerCase(),n=r.substring(s+1).trim(),!(!e||t[e]&&mn[e])&&(e==="set-cookie"?t[e]?t[e].push(n):t[e]=[n]:t[e]=t[e]?t[e]+", "+n:n)}),t},xt=Symbol("internals");function _(i){return i&&String(i).trim().toLowerCase()}function W(i){return i===!1||i==null?i:c.isArray(i)?i.map(W):String(i)}function gn(i){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=e.exec(i);)t[n[1]]=n[2];return t}const yn=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function ot(i,t,e,n,s){if(c.isFunction(n))return n.call(this,t,e);if(s&&(t=e),!!c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function Sn(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n)}function vn(i,t){const e=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+e,{value:function(s,o,r){return this[n].call(this,t,s,o,r)},configurable:!0})})}let I=class{constructor(t){t&&this.set(t)}set(t,e,n){const s=this;function o(a,d,l){const u=_(d);if(!u)throw new Error("header name must be a non-empty string");const h=c.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||d]=W(a))}const r=(a,d)=>c.forEach(a,(l,u)=>o(l,u,d));if(c.isPlainObject(t)||t instanceof this.constructor)r(t,e);else if(c.isString(t)&&(t=t.trim())&&!yn(t))r(bn(t),e);else if(c.isObject(t)&&c.isIterable(t)){let a={},d,l;for(const u of t){if(!c.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(d=a[l])?c.isArray(d)?[...d,u[1]]:[d,u[1]]:u[1]}r(a,e)}else t!=null&&o(e,t,n);return this}get(t,e){if(t=_(t),t){const n=c.findKey(this,t);if(n){const s=this[n];if(!e)return s;if(e===!0)return gn(s);if(c.isFunction(e))return e.call(this,s,n);if(c.isRegExp(e))return e.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=_(t),t){const n=c.findKey(this,t);return!!(n&&this[n]!==void 0&&(!e||ot(this,this[n],n,e)))}return!1}delete(t,e){const n=this;let s=!1;function o(r){if(r=_(r),r){const a=c.findKey(n,r);a&&(!e||ot(n,n[a],a,e))&&(delete n[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const e=Object.keys(this);let n=e.length,s=!1;for(;n--;){const o=e[n];(!t||ot(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const e=this,n={};return c.forEach(this,(s,o)=>{const r=c.findKey(n,o);if(r){e[r]=W(s),delete e[o];return}const a=t?Sn(o):String(o).trim();a!==o&&delete e[o],e[a]=W(s),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return c.forEach(this,(n,s)=>{n!=null&&n!==!1&&(e[s]=t&&c.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[xt]=this[xt]={accessors:{}}).accessors,s=this.prototype;function o(r){const a=_(r);n[a]||(vn(s,r),n[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}};I.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(I.prototype,({value:i},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(n){this[e]=n}}});c.freezeMethods(I);function rt(i,t){const e=this||H,n=t||e,s=I.from(n.headers);let o=n.data;return c.forEach(i,function(a){o=a.call(e,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xt(i){return!!(i&&i.__CANCEL__)}function U(i,t,e){S.call(this,i??"canceled",S.ERR_CANCELED,t,e),this.name="CanceledError"}c.inherits(U,S,{__CANCEL__:!0});function Yt(i,t,e){const n=e.config.validateStatus;!e.status||!n||n(e.status)?i(e):t(new S("Request failed with status code "+e.status,[S.ERR_BAD_REQUEST,S.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function wn(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function Cn(i,t){i=i||10;const e=new Array(i),n=new Array(i);let s=0,o=0,r;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=n[o];r||(r=l),e[s]=d,n[s]=l;let h=o,f=0;for(;h!==s;)f+=e[h++],h=h%i;if(s=(s+1)%i,s===o&&(o=(o+1)%i),l-r<t)return;const w=u&&l-u;return w?Math.round(f*1e3/w):void 0}}function En(i,t){let e=0,n=1e3/t,s,o;const r=(l,u=Date.now())=>{e=u,s=null,o&&(clearTimeout(o),o=null),i.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-e;h>=n?r(l,u):(s=l,o||(o=setTimeout(()=>{o=null,r(s)},n-h)))},()=>s&&r(s)]}const Z=(i,t,e=3)=>{let n=0;const s=Cn(50,250);return En(o=>{const r=o.loaded,a=o.lengthComputable?o.total:void 0,d=r-n,l=s(d),u=r<=a;n=r;const h={loaded:r,total:a,progress:a?r/a:void 0,bytes:d,rate:l||void 0,estimated:l&&a&&u?(a-r)/l:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};i(h)},e)},At=(i,t)=>{const e=i!=null;return[n=>t[0]({lengthComputable:e,total:i,loaded:n}),t[1]]},Tt=i=>(...t)=>c.asap(()=>i(...t)),xn=A.hasStandardBrowserEnv?((i,t)=>e=>(e=new URL(e,A.origin),i.protocol===e.protocol&&i.host===e.host&&(t||i.port===e.port)))(new URL(A.origin),A.navigator&&/(msie|trident)/i.test(A.navigator.userAgent)):()=>!0,An=A.hasStandardBrowserEnv?{write(i,t,e,n,s,o){const r=[i+"="+encodeURIComponent(t)];c.isNumber(e)&&r.push("expires="+new Date(e).toGMTString()),c.isString(n)&&r.push("path="+n),c.isString(s)&&r.push("domain="+s),o===!0&&r.push("secure"),document.cookie=r.join("; ")},read(i){const t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Tn(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function kn(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function Gt(i,t,e){let n=!Tn(t);return i&&(n||e==!1)?kn(i,t):t}const kt=i=>i instanceof I?{...i}:i;function M(i,t){t=t||{};const e={};function n(l,u,h,f){return c.isPlainObject(l)&&c.isPlainObject(u)?c.merge.call({caseless:f},l,u):c.isPlainObject(u)?c.merge({},u):c.isArray(u)?u.slice():u}function s(l,u,h,f){if(c.isUndefined(u)){if(!c.isUndefined(l))return n(void 0,l,h,f)}else return n(l,u,h,f)}function o(l,u){if(!c.isUndefined(u))return n(void 0,u)}function r(l,u){if(c.isUndefined(u)){if(!c.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function a(l,u,h){if(h in t)return n(l,u);if(h in i)return n(void 0,l)}const d={url:o,method:o,data:o,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(l,u,h)=>s(kt(l),kt(u),h,!0)};return c.forEach(Object.keys(Object.assign({},i,t)),function(u){const h=d[u]||s,f=h(i[u],t[u],u);c.isUndefined(f)&&h!==a||(e[u]=f)}),e}const Qt=i=>{const t=M({},i);let{data:e,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:r,auth:a}=t;t.headers=r=I.from(r),t.url=Wt(Gt(t.baseURL,t.url,t.allowAbsoluteUrls),i.params,i.paramsSerializer),a&&r.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let d;if(c.isFormData(e)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)r.setContentType(void 0);else if((d=r.getContentType())!==!1){const[l,...u]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];r.setContentType([l||"multipart/form-data",...u].join("; "))}}if(A.hasStandardBrowserEnv&&(n&&c.isFunction(n)&&(n=n(t)),n||n!==!1&&xn(t.url))){const l=s&&o&&An.read(o);l&&r.set(s,l)}return t},Ln=typeof XMLHttpRequest<"u",In=Ln&&function(i){return new Promise(function(e,n){const s=Qt(i);let o=s.data;const r=I.from(s.headers).normalize();let{responseType:a,onUploadProgress:d,onDownloadProgress:l}=s,u,h,f,w,p;function y(){w&&w(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function v(){if(!b)return;const E=I.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),k={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:E,config:i,request:b};Yt(function(P){e(P),y()},function(P){n(P),y()},k),b=null}"onloadend"in b?b.onloadend=v:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(v)},b.onabort=function(){b&&(n(new S("Request aborted",S.ECONNABORTED,i,b)),b=null)},b.onerror=function(){n(new S("Network Error",S.ERR_NETWORK,i,b)),b=null},b.ontimeout=function(){let T=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||Jt;s.timeoutErrorMessage&&(T=s.timeoutErrorMessage),n(new S(T,k.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,i,b)),b=null},o===void 0&&r.setContentType(null),"setRequestHeader"in b&&c.forEach(r.toJSON(),function(T,k){b.setRequestHeader(k,T)}),c.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),a&&a!=="json"&&(b.responseType=s.responseType),l&&([f,p]=Z(l,!0),b.addEventListener("progress",f)),d&&b.upload&&([h,w]=Z(d),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",w)),(s.cancelToken||s.signal)&&(u=E=>{b&&(n(!E||E.type?new U(null,i,b):E),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const C=wn(s.url);if(C&&A.protocols.indexOf(C)===-1){n(new S("Unsupported protocol "+C+":",S.ERR_BAD_REQUEST,i));return}b.send(o||null)})},On=(i,t)=>{const{length:e}=i=i?i.filter(Boolean):[];if(t||e){let n=new AbortController,s;const o=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;n.abort(u instanceof S?u:new U(u instanceof Error?u.message:u))}};let r=t&&setTimeout(()=>{r=null,o(new S(`timeout ${t} of ms exceeded`,S.ETIMEDOUT))},t);const a=()=>{i&&(r&&clearTimeout(r),r=null,i.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),i=null)};i.forEach(l=>l.addEventListener("abort",o));const{signal:d}=n;return d.unsubscribe=()=>c.asap(a),d}},Rn=function*(i,t){let e=i.byteLength;if(e<t){yield i;return}let n=0,s;for(;n<e;)s=n+t,yield i.slice(n,s),n=s},zn=async function*(i,t){for await(const e of Pn(i))yield*Rn(e,t)},Pn=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const t=i.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Lt=(i,t,e,n)=>{const s=zn(i,t);let o=0,r,a=d=>{r||(r=!0,n&&n(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){a(),d.close();return}let h=u.byteLength;if(e){let f=o+=h;e(f)}d.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(d){return a(d),s.return()}},{highWaterMark:2})},nt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",te=nt&&typeof ReadableStream=="function",Dn=nt&&(typeof TextEncoder=="function"?(i=>t=>i.encode(t))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),ee=(i,...t)=>{try{return!!i(...t)}catch{return!1}},Bn=te&&ee(()=>{let i=!1;const t=new Request(A.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!t}),It=64*1024,dt=te&&ee(()=>c.isReadableStream(new Response("").body)),X={stream:dt&&(i=>i.body)};nt&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!X[t]&&(X[t]=c.isFunction(i[t])?e=>e[t]():(e,n)=>{throw new S(`Response type '${t}' is not supported`,S.ERR_NOT_SUPPORT,n)})})})(new Response);const Fn=async i=>{if(i==null)return 0;if(c.isBlob(i))return i.size;if(c.isSpecCompliantForm(i))return(await new Request(A.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(c.isArrayBufferView(i)||c.isArrayBuffer(i))return i.byteLength;if(c.isURLSearchParams(i)&&(i=i+""),c.isString(i))return(await Dn(i)).byteLength},Mn=async(i,t)=>{const e=c.toFiniteNumber(i.getContentLength());return e??Fn(t)},Nn=nt&&(async i=>{let{url:t,method:e,data:n,signal:s,cancelToken:o,timeout:r,onDownloadProgress:a,onUploadProgress:d,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:f}=Qt(i);l=l?(l+"").toLowerCase():"text";let w=On([s,o&&o.toAbortSignal()],r),p;const y=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let b;try{if(d&&Bn&&e!=="get"&&e!=="head"&&(b=await Mn(u,n))!==0){let k=new Request(t,{method:"POST",body:n,duplex:"half"}),z;if(c.isFormData(n)&&(z=k.headers.get("content-type"))&&u.setContentType(z),k.body){const[P,V]=At(b,Z(Tt(d)));n=Lt(k.body,It,P,V)}}c.isString(h)||(h=h?"include":"omit");const v="credentials"in Request.prototype;p=new Request(t,{...f,signal:w,method:e.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:v?h:void 0});let C=await fetch(p);const E=dt&&(l==="stream"||l==="response");if(dt&&(a||E&&y)){const k={};["status","statusText","headers"].forEach(St=>{k[St]=C[St]});const z=c.toFiniteNumber(C.headers.get("content-length")),[P,V]=a&&At(z,Z(Tt(a),!0))||[];C=new Response(Lt(C.body,It,P,()=>{V&&V(),y&&y()}),k)}l=l||"text";let T=await X[c.findKey(X,l)||"text"](C,i);return!E&&y&&y(),await new Promise((k,z)=>{Yt(k,z,{data:T,headers:I.from(C.headers),status:C.status,statusText:C.statusText,config:i,request:p})})}catch(v){throw y&&y(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new S("Network Error",S.ERR_NETWORK,i,p),{cause:v.cause||v}):S.from(v,v&&v.code,i,p)}}),ht={http:Ge,xhr:In,fetch:Nn};c.forEach(ht,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const Ot=i=>`- ${i}`,Un=i=>c.isFunction(i)||i===null||i===!1,ne={getAdapter:i=>{i=c.isArray(i)?i:[i];const{length:t}=i;let e,n;const s={};for(let o=0;o<t;o++){e=i[o];let r;if(n=e,!Un(e)&&(n=ht[(r=String(e)).toLowerCase()],n===void 0))throw new S(`Unknown adapter '${r}'`);if(n)break;s[r||"#"+o]=n}if(!n){const o=Object.entries(s).map(([a,d])=>`adapter ${a} `+(d===!1?"is not supported by the environment":"is not available in the build"));let r=t?o.length>1?`since :
`+o.map(Ot).join(`
`):" "+Ot(o[0]):"as no adapter specified";throw new S("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return n},adapters:ht};function at(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new U(null,i)}function Rt(i){return at(i),i.headers=I.from(i.headers),i.data=rt.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),ne.getAdapter(i.adapter||H.adapter)(i).then(function(n){return at(i),n.data=rt.call(i,i.transformResponse,n),n.headers=I.from(n.headers),n},function(n){return Xt(n)||(at(i),n&&n.response&&(n.response.data=rt.call(i,i.transformResponse,n.response),n.response.headers=I.from(n.response.headers))),Promise.reject(n)})}const ie="1.9.0",it={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{it[i]=function(n){return typeof n===i||"a"+(t<1?"n ":" ")+i}});const zt={};it.transitional=function(t,e,n){function s(o,r){return"[Axios v"+ie+"] Transitional option '"+o+"'"+r+(n?". "+n:"")}return(o,r,a)=>{if(t===!1)throw new S(s(r," has been removed"+(e?" in "+e:"")),S.ERR_DEPRECATED);return e&&!zt[r]&&(zt[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(o,r,a):!0}};it.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function _n(i,t,e){if(typeof i!="object")throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let s=n.length;for(;s-- >0;){const o=n[s],r=t[o];if(r){const a=i[o],d=a===void 0||r(a,o,i);if(d!==!0)throw new S("option "+o+" must be "+d,S.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new S("Unknown option "+o,S.ERR_BAD_OPTION)}}const J={assertOptions:_n,validators:it},R=J.validators;let F=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Et,response:new Et}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=M(this.defaults,e);const{transitional:n,paramsSerializer:s,headers:o}=e;n!==void 0&&J.assertOptions(n,{silentJSONParsing:R.transitional(R.boolean),forcedJSONParsing:R.transitional(R.boolean),clarifyTimeoutError:R.transitional(R.boolean)},!1),s!=null&&(c.isFunction(s)?e.paramsSerializer={serialize:s}:J.assertOptions(s,{encode:R.function,serialize:R.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),J.assertOptions(e,{baseUrl:R.spelling("baseURL"),withXsrfToken:R.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let r=o&&c.merge(o.common,o[e.method]);o&&c.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),e.headers=I.concat(r,o);const a=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(e)===!1||(d=d&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,h=0,f;if(!d){const p=[Rt.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),f=p.length,u=Promise.resolve(e);h<f;)u=u.then(p[h++],p[h++]);return u}f=a.length;let w=e;for(h=0;h<f;){const p=a[h++],y=a[h++];try{w=p(w)}catch(b){y.call(this,b);break}}try{u=Rt.call(this,w)}catch(p){return Promise.reject(p)}for(h=0,f=l.length;h<f;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=M(this.defaults,t);const e=Gt(t.baseURL,t.url,t.allowAbsoluteUrls);return Wt(e,t.params,t.paramsSerializer)}};c.forEach(["delete","get","head","options"],function(t){F.prototype[t]=function(e,n){return this.request(M(n||{},{method:t,url:e,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function e(n){return function(o,r,a){return this.request(M(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:r}))}}F.prototype[t]=e(),F.prototype[t+"Form"]=e(!0)});let qn=class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(o){e=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const r=new Promise(a=>{n.subscribe(a),o=a}).then(s);return r.cancel=function(){n.unsubscribe(o)},r},t(function(o,r,a){n.reason||(n.reason=new U(o,r,a),e(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=n=>{t.abort(n)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new se(function(s){t=s}),cancel:t}}};function jn(i){return function(e){return i.apply(null,e)}}function Hn(i){return c.isObject(i)&&i.isAxiosError===!0}const pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pt).forEach(([i,t])=>{pt[t]=i});function oe(i){const t=new F(i),e=Bt(F.prototype.request,t);return c.extend(e,F.prototype,t,{allOwnKeys:!0}),c.extend(e,t,null,{allOwnKeys:!0}),e.create=function(s){return oe(M(i,s))},e}const x=oe(H);x.Axios=F;x.CanceledError=U;x.CancelToken=qn;x.isCancel=Xt;x.VERSION=ie;x.toFormData=et;x.AxiosError=S;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=jn;x.isAxiosError=Hn;x.mergeConfig=M;x.AxiosHeaders=I;x.formToJSON=i=>Zt(c.isHTMLForm(i)?new FormData(i):i);x.getAdapter=ne.getAdapter;x.HttpStatusCode=pt;x.default=x;const{Axios:Yn,AxiosError:Gn,CanceledError:Qn,isCancel:ti,CancelToken:ei,VERSION:ni,all:ii,Cancel:si,isAxiosError:oi,spread:ri,toFormData:ai,AxiosHeaders:li,HttpStatusCode:ci,formToJSON:ui,getAdapter:di,mergeConfig:hi}=x,D=class D{constructor(t,e,n=[]){g(this,"state");g(this,"subscribers",new Set);g(this,"storageKey");g(this,"persistentFields");this.storageKey=e,this.persistentFields=n;const s=this.loadPersistentFields();this.state={...t,...s}}static getInstance(t,e,n=[]){return D.instance||(D.instance=new D(t,e,n)),D.instance}getState(){return{...this.state}}setState(t){this.state={...this.state,...t},this.persistState(),this.notifySubscribers()}subscribe(t){return this.subscribers.add(t),t(this.getState()),()=>{this.subscribers.delete(t)}}notifySubscribers(){const t=this.getState();this.subscribers.forEach(e=>e(t))}persistState(){try{const t={};this.persistentFields.forEach(e=>{e in this.state&&(t[e]=this.state[e])}),localStorage.setItem(this.storageKey,JSON.stringify(t))}catch(t){console.error("Failed to persist state:",t)}}loadPersistentFields(){try{const t=localStorage.getItem(this.storageKey);if(t){const e=JSON.parse(t),n={};return this.persistentFields.forEach(s=>{s in e&&(n[s]=e[s])}),n}}catch(t){console.error("Failed to load persistent fields:",t)}return{}}clearState(){const t=this.loadPersistentFields();this.state={...t},this.notifySubscribers()}clearAllData(){this.state={},localStorage.removeItem(this.storageKey),this.notifySubscribers()}};g(D,"instance");let ft=D;const re={fetchSubtitle:!1,subtitles:[],language:null,fetchedSubtitle:[],showLoading:!1,showSubtitle:!1,videoId:"",subtitleColor:"#F7B750",subtitleSize:70,translationPosition:"bottom",originalPosition:"top",showOriginalSubtitle:!1,showError:!1,token:"",userInfo:{id:0,fullName:null,phone:"",createdAt:"",updatedAt:"",pushTokens:[],role:"",email:null,authProvider:null,hasAffiliateAccess:0,affiliateCommission:null,source:"",lastCapzyAppUsedAt:null,lastCapzyWebUsedAt:null,lastSubzyUsedAt:null,lastInzyUsedAt:null},usage:{hasSubscription:!1,dailyUsage:0,dailyRemainingSeconds:0,maxLimitSecondsPerVideo:0,canTranslateToAnyLanguage:!1,canTranslateFromAnyLanguage:!1,canDownloadVideo:!1,canDownloadSrt:!1,canGeneratePodcast:!1,canGenerateMindmap:!1,activeSubscription:{id:0,type:"",plan:"",expireAt:"",createdAt:""}},totalVideoTime:0,videoLanguage:"",userAttempts:0},ae=["subtitleColor","subtitleSize","translationPosition","originalPosition","userInfo","usage","userAttempts"],m=ft.getInstance(re,"subzy-app-state",ae);m.resetToInitialState=()=>{const i=m.getState(),t={};ae.forEach(e=>{i[e]!==void 0&&(t[e]=i[e])}),m.setState({...re,...t})};if(typeof window<"u"){let i=window.location.href;new MutationObserver(()=>{const t=window.location.href;t!==i&&(i=t,m.resetToInitialState())}).observe(document,{subtree:!0,childList:!0})}const Vn=()=>{const i=m.getState().token,t=i?{Authorization:`Bearer ${i}`,"Content-Type":"application/json"}:{"Content-Type":"application/json"};t.app="subzy";const e=x.create({baseURL:"https://api.subzy.app/v1",headers:t,withCredentials:!0});return e.interceptors.request.use(n=>{n.headers=n.headers||{};const s=m.getState().token;return s&&(n.headers.Authorization=`Bearer ${s}`),n}),e.interceptors.response.use(n=>n,n=>{try{const{response:s,request:o}=n;s&&(s==null?void 0:s.status)>=500,s&&(s==null?void 0:s.status)===401&&m.setState({token:""}),s&&(s==null||s.status)}catch(s){console.error(s)}throw n}),e},$=Vn();class $n{constructor(){g(this,"domain","my.subzy.app/login")}async getSubzyCookies(){var t;try{const e=await chrome.runtime.sendMessage({type:"GET_SUBZY_COOKIES"});return e!=null&&e.success?(m.setState({token:((t=e.cookies.find(n=>n.name==="jwt_token"))==null?void 0:t.value)||""}),e.cookies):(console.error("Subzy: Failed to get cookies:",e==null?void 0:e.error),[])}catch(e){return console.error("Subzy: Error getting cookies:",e),[]}}async getSubzyCookie(t){try{return(await this.getSubzyCookies()).find(s=>s.name===t)||null}catch(e){return console.error("Subzy: Error getting specific cookie:",e),null}}async setSubzyCookie(t,e,n){try{const s=await chrome.runtime.sendMessage({type:"SET_SUBZY_COOKIE",cookieDetails:{name:t,value:e,domain:(n==null?void 0:n.domain)||this.domain,path:(n==null?void 0:n.path)||"/",secure:n==null?void 0:n.secure,httpOnly:n==null?void 0:n.httpOnly,expirationDate:n==null?void 0:n.expirationDate}});return s!=null&&s.success?s.cookie:(console.error("Subzy: Failed to set cookie:",s==null?void 0:s.error),null)}catch(s){return console.error("Subzy: Error setting cookie:",s),null}}async isUserAuthenticated(){try{const t=await this.getSubzyCookies(),e=["auth_token","session_token","access_token","jwt_token","user_session","session_id"];return t.some(s=>e.some(o=>s.name.toLowerCase().includes(o.toLowerCase())))}catch(t){return console.error("Subzy: Error checking authentication:",t),!1}}async getUserInfo(){try{const t=await this.getSubzyCookies(),e={};return t.forEach(n=>{const s=n.name.toLowerCase();s.includes("email")?e.email=n.value:s.includes("user_id")||s.includes("userid")?e.userId=n.value:(s.includes("subscription")||s.includes("plan"))&&(e.subscription=n.value)}),Object.keys(e).length>0?e:null}catch(t){return console.error("Subzy: Error getting user info:",t),null}}async clearSubzyCookies(){try{const t=await this.getSubzyCookies();for(const e of t)await chrome.runtime.sendMessage({type:"REMOVE_SUBZY_COOKIE",cookieDetails:{url:`https://${e.domain}`,name:e.name}});return!0}catch(t){return console.error("Subzy: Error clearing cookies:",t),!1}}}const Pt={GOLD:"طلایی",BRONZE:"برنزی",SILVER:"نقره‌ای"},Dt={en:"انگلیسی","en-US":"انگلیسی (آمریکا)","en-GB":"انگلیسی (بریتانیا)","en-IN":"انگلیسی (هند)",fa:"فارسی","fa-IR":"فارسی (ایران)",es:"اسپانیایی","es-419":"اسپانیایی (آمریکای لاتین)","es-ES":"اسپانیایی (اسپانیا)",fr:"فرانسوی","fr-FR":"فرانسوی (فرانسه)","fr-CA":"فرانسوی (کانادا)",de:"آلمانی","de-DE":"آلمانی (آلمان)",it:"ایتالیایی",ru:"روسی","ru-RU":"روسی (روسیه)",ar:"عربی","ar-SA":"عربی (عربستان)",tr:"ترکی استانبولی","tr-TR":"ترکی استانبولی (ترکیه)",zh:"چینی","zh-CN":"چینی (ساده شده)","zh-TW":"چینی (سنتی)","zh-HK":"چینی (هنگ کنگ)",ja:"ژاپنی","ja-JP":"ژاپنی (ژاپن)",ko:"کره‌ای","ko-KR":"کره‌ای (کره جنوبی)",pt:"پرتغالی","pt-PT":"پرتغالی (پرتغال)","pt-BR":"پرتغالی (برزیل)",hi:"هندی","hi-IN":"هندی (هند)",ur:"اردو","ur-PK":"اردو (پاکستان)",id:"اندونزیایی","id-ID":"اندونزیایی (اندونزی)",ms:"مالایی","ms-MY":"مالایی (مالزی)",th:"تایلندی","th-TH":"تایلندی (تایلند)",vi:"ویتنامی","vi-VN":"ویتنامی (ویتنام)",pl:"لهستانی","pl-PL":"لهستانی (لهستان)",uk:"اوکراینی","uk-UA":"اوکراینی (اوکراین)",nl:"هلندی","nl-NL":"هلندی (هلند)",sv:"سوئدی","sv-SE":"سوئدی (سوئد)",fi:"فنلاندی","fi-FI":"فنلاندی (فنلاند)",no:"نروژی","no-NO":"نروژی (نروژ)",da:"دانمارکی","da-DK":"دانمارکی (دانمارک)",he:"عبری","he-IL":"عبری (اسرائیل)",cs:"چکی","cs-CZ":"چکی (جمهوری چک)",el:"یونانی","el-GR":"یونانی (یونان)",hu:"مجاری","hu-HU":"مجاری (مجارستان)",ro:"رومانیایی","ro-RO":"رومانیایی (رومانی)",sk:"اسلواکی","sk-SK":"اسلواکی (اسلواکی)",bg:"بلغاری","bg-BG":"بلغاری (بلغارستان)",sr:"صربی","sr-RS":"صربی (صربستان)",hr:"کرواسی","hr-HR":"کرواسی (کرواسی)",sl:"اسلوونیایی","sl-SI":"اسلوونیایی (اسلوونی)",et:"استونیایی","et-EE":"استونیایی (استونی)",lv:"لتونیایی","lv-LV":"لتونیایی (لتونی)",lt:"لیتوانیایی","lt-LT":"لیتوانیایی (لیتوانی)",ca:"کاتالان","ca-ES":"کاتالان (اسپانیا)",eu:"باسکی","eu-ES":"باسکی (اسپانیا)",gl:"گالیسیایی","gl-ES":"گالیسیایی (اسپانیا)",mt:"مالتی","mt-MT":"مالتی (مالت)",is:"ایسلندی","is-IS":"ایسلندی (ایسلند)"};class Kn{constructor(){g(this,"styleElementAdded",!1);g(this,"activeAccordion",null);g(this,"cookieManager",new $n);g(this,"accordionStates",new Map);g(this,"stateUnsubscribe",null);g(this,"phoneNumberElement",null);g(this,"videoLanguageElement",null);g(this,"subscriptionElement",null);g(this,"pollSectionElement",null);g(this,"settingsModalResizeObserver",null)}showLoginModal(){this.removeLoginModal();const t=document.querySelector(".html5-video-player");if(!t){console.warn("Subzy: Video player not found");return}const e=this.createBackdrop("subzy-modal-backdrop",()=>{this.removeLoginModal()}),n=this.createModal(st.modal),s=this.createLoginContent();n.appendChild(s),e.appendChild(n),this.addModalStyles(),this.setupKeyHandler(()=>this.removeLoginModal()),t.appendChild(e)}async showSettingsModal(){this.fetchUserInfo(),this.removeLoginModal();const t=document.querySelector(".html5-video-player");if(!t){console.warn("Subzy: Video player not found");return}const e=this.createBackdrop("subzy-settings-modal-backdrop",()=>{var r;if(m.getState().language==null){const a=document.querySelector(".ytp-subtitles-button");a&&((r=a.attributes.getNamedItem("aria-pressed"))==null?void 0:r.value)==="true"&&a.click()}this.removeSettingsModal()}),n=this.createModal(st.settingsModal);n.id="subzy-settings-modal";const s=()=>{const r=t.getBoundingClientRect(),a=Math.floor(r.height*.7);n.style.height=`${a}px`};s(),typeof window.ResizeObserver<"u"?(this.settingsModalResizeObserver&&this.settingsModalResizeObserver.disconnect(),this.settingsModalResizeObserver=new ResizeObserver(()=>{s()}),this.settingsModalResizeObserver.observe(t)):window.addEventListener("resize",s,{once:!0});const o=await this.createSettingsContent();n.appendChild(o),e.appendChild(n),this.setupKeyHandler(()=>this.removeSettingsModal()),t.appendChild(e)}createBackdrop(t,e){const n=document.createElement("div");return n.id=t,n.style.cssText=st.backdrop+`
      will-change: auto;
      transform: translateZ(0);
      backface-visibility: hidden;
      contain: layout style paint;
    `,n.addEventListener("click",e),n}createModal(t){const e=document.createElement("div");return e.addEventListener("click",n=>{n.stopPropagation()}),e.style.cssText=t+`
      will-change: auto;
      transform: translateZ(0);
      contain: layout style paint;
      isolation: isolate;
    `,e}createLoginContent(){const t=document.createElement("div");this.addCustomFont();const e=this.createHeader(),n=this.createElement("h2","ورود|ثبت نام",`
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 12px 0;
      text-align: center;
      direction: rtl;
    `),s=this.createElement("p","لطفا برای استفاده از سابزی ابتداوارد شوید،روی دکمه‌ی زیر کلیک کنید.",`
      font-size: 14px;
      line-height: 1.4;
      margin: 0 0 20px 0;
      text-align: center;
      color: #ccc;
      direction: rtl;
    `),o=this.createElement("div","",`
      display: flex;
      justify-content: center;
      align-items: center;
    `),r=this.createActionButton();return o.appendChild(r),t.appendChild(e),t.appendChild(n),t.appendChild(s),t.appendChild(o),t}async createSettingsContent(){const t=document.createElement("div");this.addCustomFont();const e=this.createSettingsHeader(),n=this.createElement("div","",`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    `),s=await this.createSubscriptionSection(),o=this.createPollSection();this.pollSectionElement=o;const r=this.createLanguageSection(),a=this.createLanguageInput(),d=this.createMainSettings(),l=this.createVisualSettings();return n.appendChild(s),n.appendChild(r),n.appendChild(a),n.appendChild(o),n.appendChild(d),n.appendChild(l),t.appendChild(e),t.appendChild(n),this.updatePollSectionVisibility(),t}createPollSection(){const t=this.createElement("div","",`
      display: none;
      justify-content: center;
      width: 100%;
    `),e=document.createElement("a");e.href="https://chromewebstore.google.com/detail/subzy/dimpkcbmmmajihoegempabccmkcnjook/reviews?utm_source=item-share-cb",e.target="_blank",e.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: #353535;
      border-radius: 12px;
      padding: 10px 11px;
      
      cursor: pointer;
      text-decoration: none;
    `;const n=this.createElement("p","همین الان نظرت رو برامون ثبت کن تا ازمون حمایت شه ⭐️",`
      font-size: 13px;
      font-weight: 600;
    `),s=this.createElement("button","ثبت نظر",`
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      color: rgb(0, 0, 0);
      font-family: Azar !important;
      border-radius: 8px;
      border: none;
      padding: 4px 14px;
    `);return e.appendChild(s),e.appendChild(n),t.appendChild(e),t}createHeader(){const t=this.createElement("div","","text-align: center; margin-bottom: 16px;"),e=this.createElement("div","","display: inline-block;"),n=document.createElement("img");return n.src=chrome.runtime.getURL("icons/subzy-icon.svg"),n.alt="Subzy",n.style.cssText="width: 65px; height: 65px;",e.appendChild(n),t.appendChild(e),t}createSettingsHeader(){const t=this.createElement("div","",`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      direction: rtl;
    `),e=this.createElement("div","",`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    `),n=document.createElement("img");n.src=chrome.runtime.getURL("icons/subzy-icon.svg"),n.alt="Subzy",n.style.cssText="width: 27px; height: 27px; opacity: 0.8;";const s=this.createElement("p","سابزی","font-size: 16px;");e.appendChild(n),e.appendChild(s);const o=this.createCloseButton();return t.appendChild(e),t.appendChild(o),t}createCloseButton(){const t=document.createElement("button");return t.innerHTML="&times;",t.style.cssText=`
      background: none;
      border: none;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background-color 0.2s;
    `,t.addEventListener("mouseenter",()=>{t.style.backgroundColor="rgba(255, 255, 255, 0.1)"}),t.addEventListener("mouseleave",()=>{t.style.backgroundColor="transparent"}),t.addEventListener("click",()=>{this.removeSettingsModal()}),t}createActionButton(){const t=document.createElement("button");return t.textContent="ورود به سابزی",t.style.cssText=`
      background: #fff;
      color: #333;
      border: none;
      border-radius: 8px;
      padding: 8px 43px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      direction: rtl;
      font-family: 'Azar' !important;
    `,t.addEventListener("mouseenter",()=>{t.style.background="#f0f0f0",t.style.transform="translateY(-1px)"}),t.addEventListener("mouseleave",()=>{t.style.background="#fff",t.style.transform="translateY(0)"}),t.addEventListener("click",async()=>{this.removeLoginModal(),this.openSubzyTab(),this.sendMessage("SUBZY_ACTION_CLICKED")}),t}async createSubscriptionSection(){var u,h;const t=this.createElement("div","",`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `),e=document.createElement("img");e.src=chrome.runtime.getURL("icons/gold-sub.svg"),e.alt="gold-sub",e.style.cssText="width: 50px; height: 50px; margin-bottom: 10px;";const n=this.createElement("div","",`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      text-align: center;
    `),s=await this.cookieManager.isUserAuthenticated();await this.cookieManager.getUserInfo();const o=m.getState().usage,r=this.createElement("p",s?((u=o==null?void 0:o.activeSubscription)==null?void 0:u.type)==="pro"?`اشتراک ${Pt[(h=o==null?void 0:o.activeSubscription)==null?void 0:h.plan]}`:"اشتراک رایگان":"وارد نشده",`
      font-size: 16px;
      color: #FAFAFA;
    `);this.subscriptionElement=r;const a=this.createElement("p",s?m.getState().userInfo.phone||" ":"لطفا وارد شوید",`
      font-size: 14px;
      color: #D4D4D8;
    `);this.phoneNumberElement=a,this.setupStateSubscription();const d=this.createUpgradeButton(),l=this.createElement("a","پروفایل من",`
      color: #C9A9E9;
      background: none;
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      font-family: 'Azar' !important;
      direction: rtl;
      text-align: center;
      cursor: pointer;
      margin-top: 10px;
      `);return l.href="https://my.subzy.app/",l.target="_blank",n.appendChild(r),n.appendChild(a),n.appendChild(d),n.appendChild(l),t.appendChild(e),t.appendChild(n),t}createUpgradeButton(){const t=this.createElement("button","",`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 11px;
      background-color: #F7B750;
      border-radius: 32px;
      margin-top: 7px;
      cursor: pointer;
    `),e=this.createElement("p","ارتقاء یا تمدید اشتراک",`
      color: #000000;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Azar' !important;
    `);e.addEventListener("click",()=>{window.open("https://my.subzy.app/pro","_blank")});const n=document.createElement("img");return n.src=chrome.runtime.getURL("icons/arrow-left.svg"),n.alt="arrow-left",n.style.cssText="width: 24px; height: 24px;",t.appendChild(n),t.appendChild(e),t}createLanguageSection(){const t=this.createElement("div","",`
      padding: 16px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    `),e=this.createElement("p","","display: flex; gap: 3px;"),n=this.createElement("span","زبان اصلی ویدیو:",`
      color: #A1A1AA;
      font-size: 13px;
      font-weight: 500;
      direction: rtl;
    `),s=this.createElement("span",Dt[m.getState().videoLanguage]||m.getState().videoLanguage||"...",`
      color: #ECEDEE;
      font-size: 13px;
      font-weight: 500;
    `);this.videoLanguageElement=s,e.appendChild(s),e.appendChild(n);const o=this.createElement("p","یک زبان را برای ترجمه انتخاب کنید",`
      color: #A1A1AA;
      font-size: 13px;
      font-weight: 400;
    `);return t.appendChild(e),t.appendChild(o),t}createLanguageInput(){const t=this.createElement("div","",`
      direction: rtl;
      width: 100%;
      `),e=[{value:"",label:"زبان ترجمه را انتخاب کنید"},{value:"fa",label:"فارسی"},{value:"en",label:"انگلیسی"},{value:"de",label:"آلمانی"},{value:"es",label:"اسپانیایی"},{value:"fr",label:"فرانسوی"}],n=this.createSelect("انتخاب زبان ترجمه",e,m.getState().language||null,s=>{s!==""&&(this.removeSettingsModal(),m.setState({language:s,showLoading:!0,showSubtitle:!0}),$.post("/translate",{video_id:m.getState().videoId,subtitles:m.getState().subtitles,language:s,duration:m.getState().totalVideoTime},{headers:{"Content-Type":"application/json",Authorization:`Bearer ${m.getState().token}`,app:"subzy"}}).then(o=>{var r,a,d,l,u,h,f,w,p,y;if((r=o.data)!=null&&r.ok){if(((d=(a=o.data)==null?void 0:a.data)==null?void 0:d.status)==="READY"&&((u=(l=o.data)==null?void 0:l.data)==null?void 0:u.translations.length)>0){const b=(f=(h=o.data)==null?void 0:h.data)==null?void 0:f.translations,v=m.getState();m.setState({fetchedSubtitle:b,showLoading:!1,showSubtitle:!0,userAttempts:v.userAttempts+1})}((p=(w=o.data)==null?void 0:w.data)==null?void 0:p.status)==="PROCESSING"&&this.pollTranslationStatus(o.data.data.id)}else{const b=((y=o.data)==null?void 0:y.message)||"ترجمه با خطا مواجه شد، دوباره تلاش کنید";this.showErrorToast(b),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}}).catch(o=>{var r,a,d,l,u,h,f,w;if(((r=o.response)==null?void 0:r.status)===429){const p=((d=(a=o.response)==null?void 0:a.data)==null?void 0:d.message)||"تعداد درخواست‌ها بیش از حد مجاز است. یک دقیقه بعد دوباره تلاش کنید.";this.showErrorToast(p),m.setState({showLoading:!0,showSubtitle:!1,showError:!0})}else if(((l=o.response)==null?void 0:l.status)===402){const p=((h=(u=o.response)==null?void 0:u.data)==null?void 0:h.message)||"اشتراک تهیه کنید";this.showErrorToast(p),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}else{const p=((w=(f=o.response)==null?void 0:f.data)==null?void 0:w.message)||"ترجمه با خطا مواجه شد، دوباره تلاش کنید";this.showErrorToast(p),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}}))});return t.appendChild(n),t}checkCanUserTranslate(t){const e=m.getState().usage,n=m.getState().totalVideoTime;return e.maxLimitSecondsPerVideo>n&&e.maxLimitSecondsPerVideo-n>0}pollTranslationStatus(t){const e=setInterval(()=>{$.get(`/translate/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${m.getState().token}`,app:"subzy"}}).then(n=>{var s,o,r,a,d,l,u,h,f,w,p,y,b;if((s=n.data)!=null&&s.ok){if(((r=(o=n.data)==null?void 0:o.data)==null?void 0:r.status)==="READY"&&((d=(a=n.data)==null?void 0:a.data)==null?void 0:d.translations.length)>0){clearInterval(e);const v=(u=(l=n.data)==null?void 0:l.data)==null?void 0:u.translations,C=m.getState();m.setState({fetchedSubtitle:v,showLoading:!1,showSubtitle:!0,userAttempts:C.userAttempts+1})}else if(((f=(h=n.data)==null?void 0:h.data)==null?void 0:f.status)==="FAILED"||((p=(w=n.data)==null?void 0:w.data)==null?void 0:p.status)==="EXPIRED"){clearInterval(e);const v=((y=n.data)==null?void 0:y.message)||"ترجمه با خطا مواجه شد، دوباره تلاش کنید";console.log("errorMessage",v),this.showErrorToast(v),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}}else{clearInterval(e);const v=((b=n.data)==null?void 0:b.message)||"ترجمه با خطا مواجه شد، دوباره تلاش کنید";this.showErrorToast(v),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}}).catch(n=>{var s,o,r,a,d,l,u,h;if(console.error("Failed to poll translation status:",n),clearInterval(e),((s=n.response)==null?void 0:s.status)===429){const f=((r=(o=n.response)==null?void 0:o.data)==null?void 0:r.message)||"تعداد درخواست‌ها بیش از حد مجاز است. یک دقیقه بعد دوباره تلاش کنید.";this.showErrorToast(f),m.setState({showLoading:!0,showSubtitle:!1,showError:!0})}else if(((a=n.response)==null?void 0:a.status)===402){const f=((l=(d=n.response)==null?void 0:d.data)==null?void 0:l.message)||"اشتراک تهیه کنید";this.showErrorToast(f),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}else{const f=((h=(u=n.response)==null?void 0:u.data)==null?void 0:h.message)||"ترجمه با خطا مواجه شد، دوباره تلاش کنید";this.showErrorToast(f),m.setState({showLoading:!1,showSubtitle:!1,showError:!0})}})},5e3)}createSelect(t,e,n,s){const o=this.createElement("div","",`
      direction: rtl;
      width: 100%;
      font-family: 'Azar' !important;
    `),r=this.createElement("select","",`
      width: 100%;
      background-color: #1F2937 !important;
      border: 1px solid #3F3F46;
      border-radius: 8px;
      color: white !important;
      padding: 8px 14px;
      margin-top: 3px;
      outline: none;
      cursor: pointer;
      font-family: 'Azar' !important;
      font-size: 14px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: left 12px center;
      background-size: 16px;
      padding-left: 40px;
    `),a=this.createElement("p",t,`
      color: #D4D4D8;
      font-size: 14px;
      font-weight: 500;
      text-align: right;
      margin-bottom: 6px;
    `);r.addEventListener("focus",()=>{r.style.outline="none",r.style.borderColor="#6366F1",r.style.boxShadow="0 0 0 1px #6366F1"}),r.addEventListener("blur",()=>{r.style.outline="none",r.style.borderColor="#3F3F46",r.style.boxShadow="none"}),r.setAttribute("name","language"),r.setAttribute("id","language"),e.forEach(l=>{const u=this.createElement("option",l.label,`
        background-color: #1F2937 !important;
        color: white !important;
        padding: 8px;
        font-family: 'Azar' !important;
      `);u.setAttribute("value",l.value),u.style.backgroundColor="#1F2937",u.style.color="white",r.appendChild(u)}),n&&(r.value=n),s&&r.addEventListener("change",l=>{const u=l.target;s(u.value)});const d=document.createElement("style");return d.textContent=`
      #${r.id} option {
        background-color: #1F2937 !important;
        color: white !important;
        font-family: 'Azar' !important;
        padding: 8px !important;
      }
      
      #${r.id} option:checked {
        background-color: #374151 !important;
        color: white !important;
      }
      
      #${r.id} option:hover {
        background-color: #374151 !important;
        color: white !important;
      }
      
      /* Windows specific fixes */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        #${r.id} {
          background-color: #1F2937 !important;
          color: white !important;
        }
      }
    `,document.getElementById("subzy-select-styles")||(d.id="subzy-select-styles",document.head.appendChild(d)),o.appendChild(a),o.appendChild(r),o}createMainSettings(){return this.createAccardion("تنظیمات اصلی",!0)}createVisualSettings(){return this.createAccardion("تنظیمات ظاهری",!1)}createAccardion(t,e=!1){const n=this.createElement("div","",`
      width: 100%;
      border: 1px solid #3F3F46;
      border-radius: 8px;
      overflow: hidden;
      background-color: #27272A;
      margin-top: 16px;
      `),s=this.createElement("div","",`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      cursor: pointer;
      background-color: #27272A;
      transition: background-color 0.2s ease;
      direction: rtl;
      `),o=this.createElement("span",t,`
      color: #FAFAFA;
      font-size: 14px;
      font-weight: 500;
      `),r=this.createElement("div","",`
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #A1A1AA;
      transition: transform 0.3s ease;
      transform: rotate(${e?"180deg":"0deg"});
      `);s.appendChild(o),s.appendChild(r);const a=this.createElement("div","",`
      max-height: ${e?"1000px":"0"};
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      background-color: #27272A;
      will-change: max-height;
      transform: translateZ(0);
      contain: layout;
      `),d=this.createElement("div","",`
      padding: 16px;
      direction: rtl;
      `);return t==="تنظیمات اصلی"?this.createAccordionContent(d):t==="تنظیمات ظاهری"&&this.createVisualAccordionContent(d),a.appendChild(d),this.accordionStates.set(n,{isOpen:e,contentContainer:a,chevron:r,header:s}),e&&(this.activeAccordion=n),s.addEventListener("click",()=>{this.toggleAccordion(n)}),s.addEventListener("mouseenter",()=>{const l=this.accordionStates.get(n);l&&!l.isOpen&&(s.style.backgroundColor="rgba(255, 255, 255, 0.06)")}),s.addEventListener("mouseleave",()=>{const l=this.accordionStates.get(n);l&&!l.isOpen&&(s.style.backgroundColor="rgba(255, 255, 255, 0.03)")}),n.appendChild(s),n.appendChild(a),n}toggleAccordion(t){const e=this.accordionStates.get(t);e&&(this.activeAccordion&&this.activeAccordion!==t&&this.closeAccordion(this.activeAccordion),e.isOpen?this.closeAccordion(t):this.openAccordion(t))}openAccordion(t){const e=this.accordionStates.get(t);e&&(e.isOpen=!0,this.activeAccordion=t,requestAnimationFrame(()=>{e.contentContainer.style.maxHeight=e.contentContainer.scrollHeight+"px",e.contentContainer.style.padding="0 16px",e.chevron.style.transform="rotate(180deg)",e.header.style.backgroundColor="rgba(255, 255, 255, 0.08)"}))}closeAccordion(t){const e=this.accordionStates.get(t);e&&(e.isOpen=!1,this.activeAccordion===t&&(this.activeAccordion=null),requestAnimationFrame(()=>{e.contentContainer.style.maxHeight="0",e.contentContainer.style.padding="0 16px",e.chevron.style.transform="rotate(0deg)",e.header.style.backgroundColor="rgba(255, 255, 255, 0.03)"}))}createVisualAccordionContent(t){const e=this.createElement("div","",`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      `),n=this.createElement("span","رنگ زیرنویس",`
      color: #FAFAFA;
      font-size: 13px;
      font-weight: 400;
      `),s=this.createColorPicker();e.appendChild(n),e.appendChild(s);const o=this.createElement("div","",`
      display: flex;
      flex-direction: column;
      gap: 12px;
      `),r=this.createElement("span","سایز زیرنویس",`
      color: #FAFAFA;
      font-size: 13px;
      font-weight: 400;
      text-align: right;
      `),a=this.createSizeSlider();o.appendChild(r),o.appendChild(a),t.appendChild(e),t.appendChild(o)}createColorPicker(){const t=this.createElement("div","",`
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${m.getState().subtitleColor};
      cursor: pointer;
      border: 2px solid rgba(255, 255, 255, 0.2);
      transition: all 0.2s ease;
      position: relative;
      `);let e=m.getState().subtitleColor;return t.addEventListener("mouseenter",()=>{t.style.transform="scale(1.1)",t.style.borderColor="rgba(255, 255, 255, 0.4)"}),t.addEventListener("mouseleave",()=>{t.style.transform="scale(1)",t.style.borderColor="rgba(255, 255, 255, 0.2)"}),t.addEventListener("click",n=>{n.stopPropagation(),this.showColorPickerModal(t,e,s=>{e=s,t.style.backgroundColor=s,m.setState({subtitleColor:s})})}),t}showColorPickerModal(t,e,n){this.removeColorPickerModal();const s=this.createElement("div","",`
      position: absolute;
      background: rgba(30, 30, 30, 0.95);
      border: 1px solid #3F3F46;
      border-radius: 8px;
      padding: 12px;
      z-index: 10000;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      `);s.id="subzy-color-picker-modal";const o=t.getBoundingClientRect();s.style.top=o.bottom+8+"px",s.style.left=o.left-50+"px";const r=this.createElement("div","",`
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 8px;
      `);["#F7B750","#EF4444","#10B981","#3B82F6","#8B5CF6","#F59E0B","#EC4899","#06B6D4","#84CC16","#F97316","#6366F1","#14B8A6","#FFFFFF","#D1D5DB","#6B7280","#1F2937","#000000","#FEF3C7"].forEach(u=>{const h=this.createElement("div","",`
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${u};
        cursor: pointer;
        border: 2px solid ${u===e?"#fff":"rgba(255, 255, 255, 0.2)"};
        transition: all 0.2s ease;
        `);h.addEventListener("mouseenter",()=>{h.style.transform="scale(1.15)",u!==e&&(h.style.borderColor="rgba(255, 255, 255, 0.5)")}),h.addEventListener("mouseleave",()=>{h.style.transform="scale(1)",u!==e&&(h.style.borderColor="rgba(255, 255, 255, 0.2)")}),h.addEventListener("click",f=>{f.stopPropagation(),n(u),this.removeColorPickerModal()}),r.appendChild(h)}),s.appendChild(r),document.body.appendChild(s);const d=u=>{!s.contains(u.target)&&!t.contains(u.target)&&(this.removeColorPickerModal(),document.removeEventListener("click",d))};setTimeout(()=>{document.addEventListener("click",d)},100);const l=u=>{u.key==="Escape"&&(this.removeColorPickerModal(),document.removeEventListener("keydown",l))};document.addEventListener("keydown",l)}removeColorPickerModal(){const t=document.getElementById("subzy-color-picker-modal");t&&t.remove()}createSizeSlider(){const t=this.createElement("div","",`
      position: relative;
      width: 100%;
      height: 6px;
      background-color: #374151;
      border-radius: 3px;
      cursor: pointer;
      `),e=m.getState().subtitleSize,n=this.createElement("div","",`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #F7B750;
      border-radius: 3px;
      width: ${e}%;
      `),s=this.createElement("div","",`
      position: absolute;
      top: 50%;
      right: ${100-e}%;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      transform: translate(50%, -50%);
      cursor: grab;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      transition: all 0.2s ease;
      `);let o=!1,r=e,a=null;const d=l=>{a&&clearTimeout(a),a=setTimeout(()=>{m.setState({subtitleSize:l})},100)};return s.addEventListener("mousedown",l=>{o=!0,s.style.cursor="grabbing",s.style.transform="translate(50%, -50%) scale(1.1)",l.preventDefault()}),document.addEventListener("mousemove",l=>{if(!o)return;const u=t.getBoundingClientRect(),h=l.clientX-u.left,f=Math.max(0,Math.min(100,h/u.width*100));r=f,n.style.width=f+"%",s.style.right=100-f+"%",d(f)}),document.addEventListener("mouseup",()=>{o&&(o=!1,s.style.cursor="grab",s.style.transform="translate(50%, -50%) scale(1)",a&&clearTimeout(a),m.setState({subtitleSize:r}))}),t.addEventListener("click",l=>{if(l.target===s)return;const u=t.getBoundingClientRect(),h=l.clientX-u.left,f=Math.max(0,Math.min(100,h/u.width*100));r=f,n.style.width=f+"%",s.style.right=100-f+"%",a&&clearTimeout(a),m.setState({subtitleSize:f})}),t.appendChild(n),t.appendChild(s),t}createAccordionContent(t){const e=this.createElement("div","",`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      `),n=this.createElement("span","نمایش زیرنویس زبان اصلی ویدیو",`
      color: #FAFAFA;
      font-size: 13px;
      font-weight: 400;
      `),s=this.createToggle(m.getState().showOriginalSubtitle);e.appendChild(n),e.appendChild(s);const o=[{value:"top",label:"بالای ویدیو"},{value:"bottom",label:"پایین ویدیو"}],r=this.createSelect("مکان نمایش زیرنویس زبان اصلی ویدیو",o,m.getState().originalPosition,l=>{m.setState({originalPosition:l})}),a=[{value:"top",label:"بالای ویدیو"},{value:"bottom",label:"پایین ویدیو"}],d=this.createSelect("مکان نمایش زیرنویس ترجمه‌ی ویدیو",a,m.getState().translationPosition,l=>{m.setState({translationPosition:l})});t.appendChild(e),t.appendChild(r),t.appendChild(d)}createToggle(t=!1){const e=this.createElement("div","",`
      position: relative;
      width: 44px;
      height: 24px;
      background-color: ${t?"#8B5CF6":"#374151"};
      border-radius: 12px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      `),n=this.createElement("div","",`
      position: absolute;
      top: 2px;
      left: ${t?"22px":"2px"};
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      transition: left 0.3s ease;
      `);let s=t,o=null;return e.addEventListener("click",()=>{s=!s,o&&clearTimeout(o),s?(e.style.backgroundColor="#8B5CF6",n.style.left="22px"):(e.style.backgroundColor="#374151",n.style.left="2px"),o=setTimeout(()=>{if(m.setState({showOriginalSubtitle:s}),s){const r=m.getState();(!r.subtitles||r.subtitles.length===0)&&this.triggerSubtitleSetup()}},150)}),e.appendChild(n),e}triggerSubtitleSetup(){const t=new CustomEvent("subzy-setup-subtitles",{detail:{source:"original-subtitle-toggle"}});document.dispatchEvent(t)}setupStateSubscription(){this.stateUnsubscribe&&this.stateUnsubscribe();let t="",e="",n="",s=null;this.stateUnsubscribe=m.subscribe(async o=>{s&&clearTimeout(s),s=setTimeout(async()=>{if(this.phoneNumberElement){const d=await this.cookieManager.isUserAuthenticated()?o.userInfo.phone||o.userInfo.email||" ":"لطفا وارد شوید";d!==t&&(this.phoneNumberElement.textContent=d,t=d)}if(this.videoLanguageElement){const a=Dt[o.videoLanguage]||o.videoLanguage||"...";a!==e&&(this.videoLanguageElement.textContent=a,e=a)}const r=JSON.stringify(o.usage);r!==n&&(this.updateSubscriptionElement(o.usage).catch(a=>console.error("Error updating subscription element:",a)),n=r),this.updatePollSectionVisibility()},100)})}updatePollSectionVisibility(){this.pollSectionElement&&(m.getState().userAttempts>=3?this.pollSectionElement.style.display="flex":this.pollSectionElement.style.display="none")}cleanupStateSubscription(){this.stateUnsubscribe&&(this.stateUnsubscribe(),this.stateUnsubscribe=null),this.phoneNumberElement=null,this.videoLanguageElement=null,this.subscriptionElement=null,this.pollSectionElement=null,document.querySelectorAll("[data-subzy-timer]").forEach(e=>{const n=e.getAttribute("data-subzy-timer");n&&clearTimeout(parseInt(n))})}fetchUserInfo(){$.get("/me").then(t=>{var e;t.data&&m.setState({userInfo:(e=t.data)==null?void 0:e.data})}),$.get("/usage").then(t=>{t.data&&m.setState({usage:t.data})})}createElement(t,e,n){const s=document.createElement(t);return e&&(s.textContent=e),n&&(s.style.cssText=n),s}formatTimeValue(t){return t<60?`${Math.round(t)} ثانیه`:t<3600?`${Math.round(t/60)} دقیقه`:`${(t/3600).toFixed(2)} ساعت`}addCustomFont(){const t=document.createElement("style");t.textContent=`
      @font-face {
        font-family: 'Azar';
        src: url('${chrome.runtime.getURL("fonts/azar.ttf")}') format('truetype');
      }
    `,document.head.appendChild(t)}createToastContainer(){let t=document.getElementById("subzy-toast-container");return t||(t=document.createElement("div"),t.id="subzy-toast-container",t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
      `,document.body.appendChild(t)),t}showErrorToast(t){try{const e=this.createToastContainer(),n=document.createElement("div");n.style.cssText=`
        background: #ef4444;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: 'Azar', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 14px;
        font-weight: 500;
        max-width: 350px;
        pointer-events: auto;
        cursor: pointer;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        direction: rtl;
        text-align: right;
      `,n.textContent=t,n.addEventListener("click",()=>{this.hideToast(n)}),e.appendChild(n),setTimeout(()=>{n.style.transform="translateX(0)"},100),setTimeout(()=>{n.parentNode&&this.hideToast(n)},5e3)}catch(e){console.error("Failed to show toast:",e)}}hideToast(t){t.style.transform="translateX(100%)",setTimeout(()=>{t.parentNode&&t.remove()},300)}addModalStyles(){if(!this.styleElementAdded&&!document.getElementById("subzy-modal-styles")){const t=document.createElement("style");t.id="subzy-modal-styles",t.textContent=he,document.head.appendChild(t),this.styleElementAdded=!0}}setupKeyHandler(t){const e=n=>{n.key==="Escape"&&(t(),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)}sendMessage(t){try{typeof chrome<"u"&&chrome.runtime&&chrome.runtime.sendMessage&&chrome.runtime.sendMessage({type:t,url:window.location.href,timestamp:Date.now()}).catch(e=>{console.debug("Subzy: Background script not available:",e.message)})}catch(e){console.debug("Subzy: Chrome runtime not available:",e)}}removeLoginModal(){const t=document.getElementById("subzy-modal-backdrop");t&&t.remove()}removeSettingsModal(){const t=document.getElementById("subzy-settings-modal-backdrop");t&&t.remove(),this.settingsModalResizeObserver&&(this.settingsModalResizeObserver.disconnect(),this.settingsModalResizeObserver=null),this.cleanupStateSubscription()}removeAllModals(){this.removeLoginModal(),this.removeSettingsModal();const t=document.getElementById("subzy-modal-styles");t&&t.remove()}openSubzyTab(){try{typeof chrome<"u"&&chrome.runtime&&chrome.runtime.sendMessage?chrome.runtime.sendMessage({type:"OPEN_SUBZY_TAB"}).then(t=>{t!=null&&t.success||console.error("Subzy: Failed to open new tab:",t==null?void 0:t.error)}).catch(t=>{console.error("Subzy: Error sending message to background:",t)}):console.error("Subzy: Chrome runtime not available")}catch(t){console.error("Subzy: Exception while opening tab:",t)}}async showAppropriateModal(){try{await this.cookieManager.isUserAuthenticated()?await this.showSettingsModal():this.showLoginModal()}catch(t){console.error("Subzy: Error checking authentication, showing login modal:",t),this.showLoginModal()}}async updateSubscriptionElement(t){var e,n;if(this.subscriptionElement)try{const o=await this.cookieManager.isUserAuthenticated()?((e=t==null?void 0:t.activeSubscription)==null?void 0:e.type)==="pro"?`اشتراک ${Pt[(n=t==null?void 0:t.activeSubscription)==null?void 0:n.plan]}`:"اشتراک رایگان":"وارد نشده";this.subscriptionElement.textContent!==o&&(this.subscriptionElement.textContent=o)}catch(s){console.error("Error updating subscription element:",s)}}}class Wn{constructor(t={}){g(this,"observer",null);g(this,"iconsAdded",new Set);g(this,"positionMonitors",new Set);g(this,"iconOptions");g(this,"modalManager");g(this,"networkObserver",null);g(this,"customSubtitleContainer",null);g(this,"originalSubtitleContainer",null);g(this,"customSubtitleInnerContainer",null);g(this,"originalSubtitleInnerContainer",null);g(this,"currentSubtitleInterval",null);g(this,"currentOriginalSubtitleInterval",null);g(this,"activeSubtitleLines",new Map);g(this,"activeOriginalSubtitleLines",new Map);g(this,"controlsObserver",null);g(this,"controlsVisibilityTimer",null);g(this,"isControlsVisible",!0);g(this,"originalCustomPosition","80px");g(this,"originalOriginalPosition","80px");g(this,"loadingAnimationInterval",null);g(this,"loadingDotsCount",0);g(this,"waitTime",0);g(this,"buttonElements",new Set);g(this,"urlCheckInterval",null);g(this,"activeIntervals",new Set);g(this,"isDestroyed",!1);g(this,"performanceFrameId",null);g(this,"styleUpdateThrottleTimer",null);g(this,"lastStyleUpdateState",null);g(this,"resizeObserver",null);g(this,"fullscreenChangeHandler",null);g(this,"subtitlePollingInterval",null);g(this,"subtitleDetectionTimeout",null);g(this,"subtitleAttempts",0);g(this,"maxSubtitleAttempts",10);g(this,"hasSubtitlesAvailable",null);g(this,"lastVideoId","");g(this,"subtitleDetectionStartTime",0);g(this,"handleCCButtonClick",()=>{setTimeout(()=>{var e;const t=document.querySelector(".ytp-subtitles-button");if(t){const n=((e=t.attributes.getNamedItem("aria-pressed"))==null?void 0:e.value)==="true",s=m.getState();n&&s.showSubtitle&&m.setState({showSubtitle:!1})}},100)});this.iconOptions={iconUrl:de(),position:"top-right",size:32,...t},this.modalManager=new Kn,this.init(),this.setupNetworkObserver(),this.setupSubtitleStateObserver(),this.setupCustomEventListeners()}init(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.start()):this.start()}start(){this.setupIcon(),this.setupObserver(),this.handleSPANavigation(),this.startSubtitleDetection()}getVideoId(){return new URL(location.href).searchParams.get("v")||""}async setupSubtitle(){if(!await this.waitForVideoReady())return!1;await this.clickCCButton(),await new Promise(n=>setTimeout(n,1e3));const e=m.getState();return e.subtitles&&e.subtitles.length>0}setupIcon(){ue.forEach(t=>{document.querySelectorAll(t).forEach(n=>this.addIconToPlayer(n))})}addIconToPlayer(t){if(this.iconsAdded.has(t))return;const e=t.querySelector(".ytp-right-controls"),n=e==null?void 0:e.querySelector(".ytp-settings-button");if(!e||!n||e.querySelector(".subzy-player-icon-button"))return;const s=this.createIconButton();e.insertBefore(s,n),this.maintainIconPosition(s,e,n),this.iconsAdded.add(t),this.hasSubtitlesAvailable===!1?this.updateButtonSubtitleAvailability(!1):this.hasSubtitlesAvailable===!0&&setTimeout(()=>this.updateButtonActiveState(),100)}createIconButton(){const t=document.createElement("button");t.className="subzy-player-icon-button ytp-button",t.title="Subzy Extension",t.setAttribute("aria-label","Subzy Extension");const e=this.createIcon();return t.appendChild(e),this.styleButton(t),this.addButtonInteractions(t,e),this.buttonElements.add(t),t}createIcon(){const t=document.createElement("img");return t.src=chrome.runtime.getURL("icons/subzy-icon.svg"),t.alt="Subzy",t.style.cssText=`
      width: 24px;
      height: 24px;
      opacity: 0.8;
      border-bottom: 3px solid transparent;
      transition: opacity 0.2s ease, border-bottom 0.2s ease;
    `,t}styleButton(t){t.style.cssText=`
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: inline-block;
      font-size: 0;
      height: 48px;
      line-height: 48px;
      margin: 0;
      outline: none;
      overflow: hidden;
      padding: 12px;
      position: relative;
      text-align: center;
      touch-action: manipulation;
      user-select: none;
      vertical-align: top;
      width: 48px;
      border-radius: 0;
      box-sizing: border-box;
    `}addButtonInteractions(t,e){t.addEventListener("mouseenter",()=>{this.hasSubtitlesAvailable!==!1&&(e.style.opacity="1")}),t.addEventListener("mouseleave",()=>{if(this.hasSubtitlesAvailable===!1)e.style.opacity="0.4",e.style.borderBottom="3px solid transparent";else{const n=m.getState(),s=n.showSubtitle||n.showOriginalSubtitle;e.style.opacity=s?"1":"0.8",e.style.borderBottom=s?"3px solid #ff0000":"3px solid transparent"}}),t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),this.handleIconClick()})}async handleIconClick(){if(this.setupCCButtonListener(),this.hasSubtitlesAvailable===!1){this.showNoSubtitlesMessage();return}if(this.hasSubtitlesAvailable===null){this.showSubtitleDetectionMessage();let t=0;const e=()=>{this.hasSubtitlesAvailable===!0?this.proceedWithIconClick():this.hasSubtitlesAvailable===!1?this.showNoSubtitlesMessage():t>=1e4?this.showStillDetectingMessage():(t+=500,setTimeout(e,500))};e();return}this.proceedWithIconClick()}async proceedWithIconClick(){m.getState().subtitles.length===0&&await this.setupSubtitle(),this.iconOptions.onClick?this.iconOptions.onClick():await this.modalManager.showAppropriateModal()}showNoSubtitlesMessage(){const t=document.createElement("div");t.textContent="زیرنویس برای این ویدئو یافت نشد",t.style.cssText=`
      position: fixed;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 10000;
      pointer-events: none;
      font-family: 'Azar', Arial, sans-serif;
      direction: rtl;
    `;const e=document.querySelector(".subzy-player-icon-button");if(e){const n=e.getBoundingClientRect();t.style.top=n.top-40+"px",t.style.left=n.left+n.width/2-75+"px"}document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},1500)}showSubtitleDetectionMessage(){const t=document.createElement("div");t.textContent="در حال شناسایی زیرنویس...",t.style.cssText=`
      position: fixed;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 10000;
      pointer-events: none;
      font-family: 'Azar', Arial, sans-serif;
      direction: rtl;
    `;const e=document.querySelector(".subzy-player-icon-button");if(e){const n=e.getBoundingClientRect();t.style.top=n.top-40+"px",t.style.left=n.left+n.width/2-75+"px"}document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},1e3)}showStillDetectingMessage(){const t=document.createElement("div");t.textContent="شناسایی زیرنویس زمان بیشتری نیاز دارد. لطفا کمی صبر کنید...",t.style.cssText=`
      position: fixed;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 10000;
      pointer-events: none;
      font-family: 'Azar', Arial, sans-serif;
      direction: rtl;
      max-width: 250px;
      text-align: center;
    `;const e=document.querySelector(".subzy-player-icon-button");if(e){const n=e.getBoundingClientRect();t.style.top=n.top-60+"px",t.style.left=n.left+n.width/2-125+"px"}document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},2e3)}setupObserver(){this.observer&&this.observer.disconnect();let t=0;const e=1e3;this.observer=new MutationObserver(n=>{if(this.isDestroyed)return;let s=!1;const o=Date.now();o-t<e||(n.forEach(r=>{r.type==="childList"&&r.addedNodes.length>0&&Array.from(r.addedNodes).some(d=>{if(d.nodeType===Node.ELEMENT_NODE){const l=d;return l.matches(".ytp-right-controls, .html5-video-player, #movie_player")||l.querySelector(".ytp-right-controls, .html5-video-player, #movie_player")}return!1})&&(s=!0)}),s&&!this.isDestroyed&&(t=o,requestAnimationFrame(()=>{this.isDestroyed||this.setupIcon()})))}),this.observer.observe(document.body,{childList:!0,subtree:!0})}handleSPANavigation(){let t=location.href;const e=()=>{this.isDestroyed||location.href!==t&&(t=location.href,this.resetAllButtonStates(),this.iconsAdded.clear(),this.buttonElements.clear(),this.resetSubtitleDetection(),this.isDestroyed||requestAnimationFrame(()=>{this.isDestroyed||(this.setupIcon(),this.startSubtitleDetection())}))};this.urlCheckInterval&&clearInterval(this.urlCheckInterval),this.urlCheckInterval=setInterval(e,2e3),this.activeIntervals.add(this.urlCheckInterval);const n=()=>{this.isDestroyed||(this.resetAllButtonStates(),setTimeout(()=>{this.isDestroyed||(this.iconsAdded.clear(),this.buttonElements.clear(),this.resetSubtitleDetection(),this.setupIcon(),this.startSubtitleDetection(),this.setupCCButtonListener())},500))};window.addEventListener("yt-navigate-finish",n),this.ytNavigateHandler=n}maintainIconPosition(t,e,n){if(this.isDestroyed)return;const s=()=>{if(!(this.isDestroyed||!t.parentNode)&&t.nextElementSibling!==n)try{e.insertBefore(t,n)}catch(a){console.debug("Position adjustment failed:",a)}};s();const o=new MutationObserver(()=>{this.isDestroyed||requestAnimationFrame(s)});o.observe(e,{childList:!0,subtree:!1});const r=setInterval(()=>{if(this.isDestroyed){clearInterval(r);return}s()},3e3);this.positionMonitors.add(o),this.activeIntervals.add(r),o.intervalId=r}async showAppropriateModal(){await this.modalManager.showAppropriateModal()}showLoginModal(){this.modalManager.showLoginModal()}showSettingsModal(){this.modalManager.showSettingsModal()}isAdCurrentlyPlaying(){const t=[".ytp-ad-skip-button",".ytp-ad-text",".ytp-ad-duration-remaining",".ytp-ad-player-overlay"];for(const n of t){const s=document.querySelector(n);if(s){const o=window.getComputedStyle(s);if(o.display!=="none"&&o.visibility!=="hidden"&&o.opacity!=="0")return!0}}const e=document.querySelector(".video-ads");if(e&&e.children.length>0)for(let n=0;n<e.children.length;n++){const s=e.children[n],o=window.getComputedStyle(s);if(o.display!=="none"&&o.visibility!=="hidden"&&o.opacity!=="0")return!0}return!1}hideSubtitleContainer(t){const e=t==="custom"?this.customSubtitleContainer:this.originalSubtitleContainer;e&&(e.style.display="none")}showSubtitleContainer(t){const e=t==="custom"?this.customSubtitleContainer:this.originalSubtitleContainer;e&&(e.style.display="flex")}throttledUpdateSubtitleStyles(t){this.styleUpdateThrottleTimer&&clearTimeout(this.styleUpdateThrottleTimer);const e={subtitleColor:t.subtitleColor,subtitleSize:t.subtitleSize};(!this.lastStyleUpdateState||this.lastStyleUpdateState.subtitleColor!==e.subtitleColor||this.lastStyleUpdateState.subtitleSize!==e.subtitleSize)&&(this.styleUpdateThrottleTimer=setTimeout(()=>{this.isDestroyed||(this.activeSubtitleLines.forEach(s=>{const o=Math.max(12,Math.min(32,12+t.subtitleSize/5));s.style.color=t.subtitleColor,s.style.fontSize=`${o}px`}),this.activeOriginalSubtitleLines.forEach(s=>{const o=Math.max(12,Math.min(32,12+t.subtitleSize/5));s.style.fontSize=`${o}px`}),this.lastStyleUpdateState={...e})},50))}destroy(){if(this.isDestroyed=!0,this.observer&&(this.observer.disconnect(),this.observer=null),this.controlsObserver&&(this.controlsObserver.disconnect(),this.controlsObserver=null),this.controlsVisibilityTimer&&(clearTimeout(this.controlsVisibilityTimer),this.controlsVisibilityTimer=null),this.urlCheckInterval&&(clearInterval(this.urlCheckInterval),this.urlCheckInterval=null),this.subtitlePollingInterval&&(clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=null),this.subtitleDetectionTimeout&&(clearTimeout(this.subtitleDetectionTimeout),this.subtitleDetectionTimeout=null),this.activeIntervals.forEach(e=>{clearInterval(e)}),this.activeIntervals.clear(),this.performanceFrameId&&(cancelAnimationFrame(this.performanceFrameId),this.performanceFrameId=null),this.currentSubtitleInterval&&(clearInterval(this.currentSubtitleInterval),this.currentSubtitleInterval=null),this.currentOriginalSubtitleInterval&&(clearInterval(this.currentOriginalSubtitleInterval),this.currentOriginalSubtitleInterval=null),this.styleUpdateThrottleTimer&&(clearTimeout(this.styleUpdateThrottleTimer),this.styleUpdateThrottleTimer=null),document.querySelectorAll(".subzy-player-icon-button").forEach(e=>{e.remove()}),this.iconsAdded.clear(),this.buttonElements.clear(),this.positionMonitors.forEach(e=>{e.intervalId&&(clearInterval(e.intervalId),this.activeIntervals.delete(e.intervalId)),e.disconnect()}),this.positionMonitors.clear(),this.modalManager.removeAllModals(),this.networkObserver&&(this.networkObserver.disconnect(),this.networkObserver=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.fullscreenChangeHandler&&(document.removeEventListener("fullscreenchange",this.fullscreenChangeHandler),document.removeEventListener("webkitfullscreenchange",this.fullscreenChangeHandler),document.removeEventListener("mozfullscreenchange",this.fullscreenChangeHandler),document.removeEventListener("MSFullscreenChange",this.fullscreenChangeHandler),window.removeEventListener("resize",this.fullscreenChangeHandler),this.fullscreenChangeHandler=null),this.ytNavigateHandler&&(window.removeEventListener("yt-navigate-finish",this.ytNavigateHandler),this.ytNavigateHandler=null),this.videoEndHandler){const e=document.querySelector("video");e&&e.removeEventListener("ended",this.videoEndHandler),this.videoEndHandler=null}if(this.originalVideoEndHandler){const e=document.querySelector("video");e&&e.removeEventListener("ended",this.originalVideoEndHandler),this.originalVideoEndHandler=null}const t=document.querySelector(".ytp-subtitles-button");t&&t.removeEventListener("click",this.handleCCButtonClick),this.removeCustomSubtitles(),this.removeOriginalSubtitles(),document.querySelectorAll(".subzy-custom-subtitles, .subzy-original-subtitles, .subzy-subtitle-line").forEach(e=>{e.remove()}),this.stopLoadingAnimation(),this.activeSubtitleLines.clear(),this.activeOriginalSubtitleLines.clear()}setupNetworkObserver(){this.networkObserver=new PerformanceObserver(e=>{for(const n of e.getEntries())if(n.name.includes("www.youtube.com/api/timedtext")){const s=n.name;fetch(s).then(o=>o.text()).then(o=>{try{const r=JSON.parse(o),a=document.querySelector("video"),d=a?a.duration:0;m.setState({totalVideoTime:Number(d.toFixed(0))});const l=new URLSearchParams(s.split("?")[1]),u=l.get("lang")||l.get("tlang")||"unknown";if(m.setState({videoLanguage:u}),!r.events||!Array.isArray(r.events)){console.warn("No events array found in response");return}const h=r.events.filter(f=>f.segs&&Array.isArray(f.segs)).map(f=>({start:(f.tStartMs/1e3).toString(),dur:(f.dDurationMs/1e3).toString(),text:f.segs.map(w=>w.utf8||"").filter(Boolean).join(" ")})).filter(f=>f.text.trim()!=="");h.length>0&&(m.setState({subtitles:h,videoId:this.getVideoId()}),this.stopSubtitleDetection(!0)),this.setupCCButtonListener()}catch(r){console.error("Error parsing subtitle data:",r)}}).catch(o=>{console.error("Error fetching subtitles:",o)})}}),this.networkObserver.observe({entryTypes:["resource"]});const t=window.fetch;window.fetch=async(...e)=>{const[n,s]=e;if(typeof n=="string"&&n.includes("www.youtube.com/api/timedtext"))try{const o=await t(n,s),d=(await o.clone().text()).name;return o}catch(o){return console.error("Error intercepting timedtext API:",o),t(n,s)}return t(n,s)}}async waitForVideoReady(){return new Promise(t=>{const e=()=>{const n=document.querySelector("video"),s=document.querySelector(".video-ads");if(s&&s.children.length>0){t(!1);return}if(n&&(!s||s.children.length===0)&&n.readyState>=3){t(!0);return}setTimeout(e,500)};e()})}async clickCCButton(){const t=document.querySelector(".ytp-subtitles-button");t&&t.click()}setupCCButtonListener(){const t=document.querySelector(".ytp-subtitles-button");t?(t.removeEventListener("click",this.handleCCButtonClick),t.addEventListener("click",this.handleCCButtonClick)):setTimeout(()=>this.setupCCButtonListener(),1e3)}handleCustomSubtitleActivation(){var e;const t=document.querySelector(".ytp-subtitles-button");t&&((e=t.attributes.getNamedItem("aria-pressed"))==null?void 0:e.value)==="true"&&t.click()}setupSubtitleStateObserver(){let t={showSubtitle:!1,showOriginalSubtitle:!1,subtitleColor:"",subtitleSize:0,translationPosition:"bottom",originalPosition:"bottom",fetchedSubtitle:[],subtitles:[],showLoading:!1};m.subscribe(e=>{const n={showSubtitle:e.showSubtitle,showOriginalSubtitle:e.showOriginalSubtitle,subtitleColor:e.subtitleColor,subtitleSize:e.subtitleSize,translationPosition:e.translationPosition,originalPosition:e.originalPosition,fetchedSubtitle:e.fetchedSubtitle,subtitles:e.subtitles,showLoading:e.showLoading};if(Object.keys(n).some(o=>JSON.stringify(n[o])!==JSON.stringify(t[o]))){if(t={...n},e.showSubtitle?(this.handleCustomSubtitleActivation(),e.showLoading?this.startLoadingAnimation():e.fetchedSubtitle.length>0&&(this.stopLoadingAnimation(),this.injectCustomSubtitles(e.fetchedSubtitle))):(this.stopLoadingAnimation(),this.removeCustomSubtitles()),e.showOriginalSubtitle&&e.subtitles&&e.subtitles.length>0?(this.originalSubtitleContainer||this.createOriginalSubtitleContainer(),this.startOriginalSubtitleSync(e.subtitles)):this.removeOriginalSubtitles(),this.customSubtitleContainer&&(this.customSubtitleContainer.style[e.translationPosition]="80px",this.customSubtitleContainer.style[e.translationPosition==="top"?"bottom":"top"]="auto",this.customSubtitleContainer.style.flexDirection=e.translationPosition==="bottom"?"column":"column-reverse",this.throttledUpdateSubtitleStyles(e)),this.originalSubtitleContainer){const r=e.originalPosition===e.translationPosition?"140px":"80px";this.originalOriginalPosition=r,this.originalSubtitleContainer.style[e.originalPosition]=r,this.originalSubtitleContainer.style[e.originalPosition==="top"?"bottom":"top"]="auto",this.originalSubtitleContainer.style.flexDirection=e.originalPosition==="bottom"?"column":"column-reverse"}this.updateButtonActiveState(),this.forceButtonStyleRefresh()}})}setupControlsVisibilityObserver(){const t=document.querySelector("#movie_player");t&&(this.controlsObserver=new MutationObserver(()=>{this.checkControlsVisibility()}),this.controlsObserver.observe(t,{attributes:!0,attributeFilter:["class","style"],subtree:!0}),this.setupControlsActivityListeners(),this.checkControlsVisibility())}setupControlsActivityListeners(){const t=document.querySelector("#movie_player");if(!t)return;const e=()=>{this.controlsVisibilityTimer&&clearTimeout(this.controlsVisibilityTimer),this.updateControlsVisibility(!0),this.controlsVisibilityTimer=setTimeout(()=>{this.updateControlsVisibility(!1)},3e3)};t.addEventListener("mousemove",e),t.addEventListener("click",e),document.addEventListener("keydown",n=>{["Space","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyF","KeyM"].includes(n.code)&&e()})}checkControlsVisibility(){const t=document.querySelector("#movie_player");if(!t)return;const n=t.querySelector(".ytp-chrome-bottom")&&!t.classList.contains("ytp-autohide")&&!t.classList.contains("ytp-hide-controls");this.updateControlsVisibility(!!n)}updateControlsVisibility(t){this.isControlsVisible!==t&&(this.isControlsVisible=t,this.adjustSubtitlePositions(t))}adjustSubtitlePositions(t){const e=m.getState(),n=e.originalPosition===e.translationPosition,s=t?this.originalCustomPosition:"20px",o=t?this.originalOriginalPosition:n?"80px":"20px";if(this.customSubtitleContainer)if(this.customSubtitleContainer.style.transition="all 0.3s ease-in-out",e.translationPosition==="bottom")this.customSubtitleContainer.style.bottom=s;else{const r=t?this.originalCustomPosition:"20px";this.customSubtitleContainer.style.top=r}if(this.originalSubtitleContainer)if(this.originalSubtitleContainer.style.transition="all 0.3s ease-in-out",e.originalPosition==="bottom")this.originalSubtitleContainer.style.bottom=o;else{const r=t?this.originalOriginalPosition:n?"80px":"20px";this.originalSubtitleContainer.style.top=r}}injectCustomSubtitles(t){this.removeCustomSubtitles(),this.createSubtitleContainer(),this.startSubtitleSync(t)}createSubtitleContainer(){const t=document.querySelector("#movie_player")||document.querySelector(".html5-video-container");if(!t){console.warn("Video container not found for subtitle injection");return}const e=m.getState();this.originalCustomPosition="80px",this.customSubtitleContainer=document.createElement("div"),this.customSubtitleContainer.className="subzy-custom-subtitles",this.customSubtitleContainer.style.cssText=`
      position: absolute;
      ${e.translationPosition}: ${this.originalCustomPosition};
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      pointer-events: none;
      text-align: center;
      width: fit-content;
      direction: ${e.language==="fa"?"rtl":"ltr"} !important;
      display: flex;
      flex-direction: ${e.translationPosition==="bottom"?"column":"column-reverse"};
      align-items: center;
      gap: 2px;
      max-height: 200px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    
    `;const n=document.createElement("div");n.className="subzy-custom-subtitles-inner",n.style.cssText=`
      position: relative;
      width: ${this.calculateSubtitleWidth()};
      height: 200px;
      overflow: hidden;
    `,this.customSubtitleContainer.appendChild(n),this.customSubtitleInnerContainer=n,t.appendChild(this.customSubtitleContainer),!this.originalSubtitleContainer&&e.showOriginalSubtitle&&this.createOriginalSubtitleContainer(),this.setupControlsVisibilityObserver(),this.setupResponsiveBehavior()}createOriginalSubtitleContainer(){const t=document.querySelector("#movie_player")||document.querySelector(".html5-video-container");if(!t){console.warn("Video container not found for original subtitle injection");return}const e=m.getState(),n=e.originalPosition===e.translationPosition;this.originalOriginalPosition=n?"140px":"80px",this.originalSubtitleContainer=document.createElement("div"),this.originalSubtitleContainer.className="subzy-original-subtitles",this.originalSubtitleContainer.style.cssText=`
      position: absolute;
      ${e.originalPosition}: ${this.originalOriginalPosition};
      left: 50%;
      transform: translateX(-50%);
      z-index: 1001;
      pointer-events: none;
      text-align: center;
      width: fit-content;
      direction: ltr !important;
      display: flex;
      flex-direction: ${e.originalPosition==="bottom"?"column":"column-reverse"};
      align-items: center;
      gap: 2px;
      max-height: 200px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
    `;const s=document.createElement("div");s.className="subzy-custom-subtitles-inner",s.style.cssText=`
      position: relative;
      width: ${this.calculateSubtitleWidth()};
      height: 200px;
      overflow: hidden;
    `,this.originalSubtitleContainer.appendChild(s),this.originalSubtitleInnerContainer=s,t.appendChild(this.originalSubtitleContainer),this.controlsObserver||this.setupControlsVisibilityObserver(),this.resizeObserver||this.setupResponsiveBehavior()}startSubtitleSync(t){const e=document.querySelector("video");if(!e||!this.customSubtitleInnerContainer){console.warn("Video element or subtitle container not found");return}this.currentSubtitleInterval&&(clearInterval(this.currentSubtitleInterval),this.activeIntervals.delete(this.currentSubtitleInterval)),this.activeSubtitleLines.clear(),this.customSubtitleInnerContainer&&(this.customSubtitleInnerContainer.innerHTML="");let n=!1,s=-1,o=0;const r=()=>{if(!(this.isDestroyed||!e||!this.customSubtitleInnerContainer)){if(o++,o%30===0){const d=this.isAdCurrentlyPlaying();d!==n&&(d?this.hideSubtitleContainer("custom"):this.showSubtitleContainer("custom"),n=d)}if(!n){const d=e.currentTime;Math.abs(d-s)>=.1&&(this.updateSubtitleDisplay(t,d,"custom"),s=d)}this.performanceFrameId=requestAnimationFrame(r)}};this.performanceFrameId=requestAnimationFrame(r);const a=()=>{this.removeCustomSubtitles()};e.addEventListener("ended",a),this.videoEndHandler=a}updateSubtitleDisplay(t,e,n){const s=n==="custom"?this.customSubtitleInnerContainer:this.originalSubtitleInnerContainer,o=n==="custom"?this.activeSubtitleLines:this.activeOriginalSubtitleLines;if(!s)return;const r=m.getState(),a=(n==="custom"?r.translationPosition:r.originalPosition)==="bottom",d=t.filter(h=>{const f=parseFloat(h.start),w=parseFloat(h.dur||h.duration||"0"),p=f+w;return e>=f&&e<=p}),l=[];o.forEach((h,f)=>{d.some(p=>this.getSubtitleKey(p)===f)||(h.style.transform="translateY(-200px)",h.style.opacity="0",setTimeout(()=>{this.removeSubtitleLine(h)},100),l.push(f))}),l.forEach(h=>o.delete(h));const u=[...d].sort((h,f)=>parseFloat(h.start)-parseFloat(f.start));u.forEach((h,f)=>{const w=this.getSubtitleKey(h);if(o.has(w)){const p=o.get(w);if(p){let y=0;const b=u.length-1-f;for(let v=0;v<b;v++){const C=u[u.length-1-v],E=this.getSubtitleKey(C),T=o.get(E);T&&(y+=T.offsetHeight)}a?p.style.transform=`translateY(-${y}px) translateX(-50%)`:p.style.transform=`translateY(${y}px) translateX(-50%)`,p.style.opacity=f<3?"1":"0"}}else{const p=this.createSubtitleLine(h,n);o.set(w,p),s.appendChild(p),p.offsetHeight,requestAnimationFrame(()=>{let y=0;const b=u.length-1-f;for(let v=0;v<b;v++){const C=u[u.length-1-v],E=this.getSubtitleKey(C),T=o.get(E);T&&(y+=T.offsetHeight)}a?p.style.transform=`translateY(-${y}px) translateX(-50%)`:p.style.transform=`translateY(${y}px) translateX(-50%)`,p.style.opacity=f<3?"1":"0"})}}),this.limitVisibleLines(s,n,3)}createSubtitleLine(t,e){const n=m.getState(),s=Math.max(12,Math.min(32,12+n.subtitleSize/5)),o=e==="custom",r=(e==="custom"?n.translationPosition:n.originalPosition)==="bottom",a=document.createElement("div");return a.className=`subzy-subtitle-line ${e}`,a.style.cssText=`
      background: rgba(0, 0, 0, 0.8);
      color: ${n.subtitleColor};
      font-family: ${o?"Azar":"Arial"} !important;
      font-size: ${s}px;
      font-weight: 400;
      line-height: 1.3;
      position: absolute;
      ${r?"bottom: 0":"top: 0"};
      left: 50%;
      transform: translateX(-50%);
      text-align: ${e==="custom"&&n.language==="fa"?"right":"left"} !important;
      opacity: 0;
      padding: 8px 20px;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-width: 100%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      margin: 1px 0;
      will-change: transform, opacity;
      width: fit-content;
      white-space: pre;
      overflow-wrap: break-word;
    `,a.textContent=t.text,a.offsetHeight,a.style.transition="all 0.3s ease-in-out",a}removeSubtitleLine(t){t.parentNode&&t.parentNode.removeChild(t)}limitVisibleLines(t,e,n){const s=Array.from(t.children),o=m.getState(),r=(e==="custom"?o.translationPosition:o.originalPosition)==="bottom";s.forEach((a,d)=>{if(d<n){a.style.opacity="1";let l=0;const u=s.length-1-d;for(let h=0;h<u;h++){const f=s[s.length-1-h];f&&(l+=f.offsetHeight)}r?a.style.transform=`translateY(-${l}px) translateX(-50%)`:a.style.transform=`translateY(${l}px) translateX(-50%)`}else a.style.opacity="0",r?a.style.transform="translateY(-200px)":a.style.transform="translateY(200px)"})}getSubtitleKey(t){return`${t.start}-${t.text}`}hideAllSubtitleLines(t){(t==="custom"?this.activeSubtitleLines:this.activeOriginalSubtitleLines).forEach(n=>{n.style.display="none"})}showActiveSubtitleLines(t){(t==="custom"?this.activeSubtitleLines:this.activeOriginalSubtitleLines).forEach(n=>{n.style.display="block"})}startOriginalSubtitleSync(t){const e=document.querySelector("video");if(!e||!this.originalSubtitleInnerContainer){console.warn("Video element or original subtitle inner container not found");return}this.currentOriginalSubtitleInterval&&(clearInterval(this.currentOriginalSubtitleInterval),this.activeIntervals.delete(this.currentOriginalSubtitleInterval)),this.activeOriginalSubtitleLines.clear(),this.originalSubtitleInnerContainer&&(this.originalSubtitleInnerContainer.innerHTML="");let n=-1,s=!1,o=0;const r=()=>{if(!(this.isDestroyed||!e||!this.originalSubtitleInnerContainer)){if(o++,o%30===0){const d=this.isAdCurrentlyPlaying();d!==s&&(d?this.hideSubtitleContainer("original"):this.showSubtitleContainer("original"),s=d)}if(!s){const d=e.currentTime;Math.abs(d-n)>.1&&(this.updateSubtitleDisplay(t,d,"original"),n=d)}requestAnimationFrame(r)}};requestAnimationFrame(r);const a=()=>{this.removeOriginalSubtitles()};e.addEventListener("ended",a),this.originalVideoEndHandler=a}removeOriginalSubtitles(){if(document.querySelectorAll(".subzy-original-subtitles").forEach(t=>{t.remove()}),this.originalSubtitleContainer=null,this.originalSubtitleInnerContainer=null,this.currentOriginalSubtitleInterval&&(clearInterval(this.currentOriginalSubtitleInterval),this.activeIntervals.delete(this.currentOriginalSubtitleInterval),this.currentOriginalSubtitleInterval=null),this.originalVideoEndHandler){const t=document.querySelector("video");t&&t.removeEventListener("ended",this.originalVideoEndHandler),this.originalVideoEndHandler=null}this.activeOriginalSubtitleLines.clear()}removeCustomSubtitles(){document.querySelectorAll(".subzy-custom-subtitles").forEach(t=>{t.remove()}),this.customSubtitleContainer=null,this.customSubtitleInnerContainer=null,this.currentSubtitleInterval&&(clearInterval(this.currentSubtitleInterval),this.activeIntervals.delete(this.currentSubtitleInterval),this.currentSubtitleInterval=null),this.performanceFrameId&&(cancelAnimationFrame(this.performanceFrameId),this.performanceFrameId=null),this.activeSubtitleLines.clear()}startLoadingAnimation(){if(this.isDestroyed)return;this.stopLoadingAnimation(),this.removeCustomSubtitles(),this.activeSubtitleLines.clear(),this.createSubtitleContainer();const e=m.getState().totalVideoTime||0;this.waitTime=this.calculateWaitTime(e),this.loadingAnimationInterval=setInterval(()=>{if(this.isDestroyed){this.stopLoadingAnimation();return}this.loadingDotsCount=(this.loadingDotsCount+1)%4,this.updateLoadingDisplay()},500),this.activeIntervals.add(this.loadingAnimationInterval),this.updateLoadingDisplay()}updateLoadingDisplay(){let t="درحال آماده سازی";switch(this.waitTime>0&&(t=`درحال آماده سازی (${this.formatTimeInPersian(this.waitTime)})`),this.loadingDotsCount){case 1:t=`.${t}.`;break;case 2:t=`..${t}..`;break;case 3:t=`...${t}...`;break}this.displayLoadingSubtitle(t)}stopLoadingAnimation(){this.loadingAnimationInterval&&(clearInterval(this.loadingAnimationInterval),this.activeIntervals.delete(this.loadingAnimationInterval),this.loadingAnimationInterval=null),this.waitTime=0}displayLoadingSubtitle(t){if(!this.customSubtitleInnerContainer)return;this.customSubtitleInnerContainer.innerHTML="",this.activeSubtitleLines.clear(),document.querySelectorAll(".subzy-subtitle-line:not(.loading)").forEach(o=>{o.remove()});const e=m.getState(),n=Math.max(12,Math.min(32,12+e.subtitleSize/5)),s=document.createElement("div");s.className="subzy-subtitle-line loading",s.style.cssText=`
      background: rgba(0, 0, 0, 0.8);
      color: ${e.subtitleColor};
      font-family: Azar !important;
      font-size: ${n}px;
      font-weight: 400;
      line-height: 1.3;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 1;
      padding: 8px 16px;
      white-space: pre-wrap;
      word-wrap: break-word;
      max-width: 100%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      margin: 1px 0;
      text-align: center;
      transform: translateY(0);
      transition: all 0.3s ease-in-out;
      overflow-wrap: break-word;
    `,s.textContent=t,this.customSubtitleInnerContainer.appendChild(s)}setupCustomEventListeners(){document.addEventListener("subzy-setup-subtitles",t=>{this.hasSubtitlesAvailable===null?this.startSubtitleDetection():this.hasSubtitlesAvailable===!0&&this.setupSubtitle()})}updateButtonActiveState(){const t=m.getState(),e=t.showSubtitle||t.showOriginalSubtitle;this.buttonElements.forEach(n=>{document.contains(n)||this.buttonElements.delete(n)}),this.buttonElements.forEach(n=>{const s=n.querySelector("img");s&&(this.hasSubtitlesAvailable===!1?(s.style.opacity="0.4",s.style.borderBottom="3px solid transparent"):(s.style.opacity=e?"1":"0.8",s.style.borderBottom=e?"3px solid #ff0000":"3px solid transparent",s.offsetHeight))})}calculateSubtitleWidth(){const t=document.querySelector("#movie_player")||document.querySelector(".html5-video-container")||document.querySelector("video");if(t){const e=t.getBoundingClientRect(),n=Math.floor(e.width*.9);return`${Math.max(300,n)}px`}return"calc(90vw - 40px)"}calculateWaitTime(t){if(!t||t<60)return 30;const e=Math.ceil(t/60);return Math.ceil(e/30)*30}formatTimeInPersian(t){if(t>=60){const e=Math.floor(t/60),n=t%60;return n===0?`${e} دقیقه`:`${e} دقیقه و ${n} ثانیه`}else return`${t} ثانیه`}updateSubtitleContainerWidths(){const t=this.calculateSubtitleWidth();this.customSubtitleInnerContainer&&(this.customSubtitleInnerContainer.style.width=t),this.originalSubtitleInnerContainer&&(this.originalSubtitleInnerContainer.style.width=t)}setupResponsiveBehavior(){if("ResizeObserver"in window){this.resizeObserver=new ResizeObserver(()=>{this.isDestroyed||this.updateSubtitleContainerWidths()});const t=document.querySelector("#movie_player")||document.querySelector(".html5-video-container");t&&this.resizeObserver.observe(t)}this.fullscreenChangeHandler=()=>{this.isDestroyed||setTimeout(()=>{this.updateSubtitleContainerWidths()},100)},document.addEventListener("fullscreenchange",this.fullscreenChangeHandler),document.addEventListener("webkitfullscreenchange",this.fullscreenChangeHandler),document.addEventListener("mozfullscreenchange",this.fullscreenChangeHandler),document.addEventListener("MSFullscreenChange",this.fullscreenChangeHandler),window.addEventListener("resize",this.fullscreenChangeHandler)}startSubtitleDetection(){const t=this.getVideoId();!t||t===this.lastVideoId||(this.resetSubtitleDetection(),this.lastVideoId=t,this.subtitleDetectionStartTime=Date.now(),this.hasSubtitlesAvailable=null,this.subtitlePollingInterval=setInterval(()=>{this.attemptSubtitleDetection()},3e3),this.activeIntervals.add(this.subtitlePollingInterval),this.subtitleDetectionTimeout=setTimeout(()=>{this.stopSubtitleDetection(!1)},this.maxSubtitleAttempts*3e3),this.activeIntervals.add(this.subtitleDetectionTimeout),setTimeout(()=>this.attemptSubtitleDetection(),1e3))}async attemptSubtitleDetection(){if(!(this.isDestroyed||this.hasSubtitlesAvailable!==null)&&!this.isAdCurrentlyPlaying()){this.subtitleAttempts++;try{const t=m.getState();if(t.subtitles&&t.subtitles.length>0){this.stopSubtitleDetection(!0);return}if(await this.setupSubtitle()){this.stopSubtitleDetection(!0);return}if(this.checkForNativeSubtitles()){await this.extractNativeSubtitles();const o=m.getState();if(o.subtitles&&o.subtitles.length>0){this.stopSubtitleDetection(!0);return}}this.findCaptionElements().length>0}catch(t){console.error("Subzy: Error during subtitle detection:",t)}}}checkForNativeSubtitles(){const t=document.querySelector("video");if(!t)return!1;const e=t.textTracks;if(e&&e.length>0)for(let n=0;n<e.length;n++){const s=e[n];if(s.kind==="subtitles"||s.kind==="captions")return!0}return!1}async extractNativeSubtitles(){const t=document.querySelector("video");if(!t)return;const e=t.textTracks;if(!(!e||e.length===0))for(let n=0;n<e.length;n++){const s=e[n];if(s.kind==="subtitles"||s.kind==="captions")try{if(s.mode="showing",await new Promise(o=>setTimeout(o,1e3)),s.cues&&s.cues.length>0){const o=[];for(let r=0;r<s.cues.length;r++){const a=s.cues[r];o.push({start:a.startTime.toString(),dur:(a.endTime-a.startTime).toString(),text:a.text})}if(o.length>0){m.setState({subtitles:o,videoId:this.getVideoId(),videoLanguage:s.language||"unknown"});return}}}catch(o){console.error("Subzy: Error extracting from native track:",o)}}}findCaptionElements(){const t=[".captions-text",".ytp-caption-segment",".caption-window",'[class*="caption"]','[class*="subtitle"]'],e=[];return t.forEach(n=>{const s=document.querySelectorAll(n);e.push(...Array.from(s))}),e}stopSubtitleDetection(t){this.subtitlePollingInterval&&(clearInterval(this.subtitlePollingInterval),this.activeIntervals.delete(this.subtitlePollingInterval),this.subtitlePollingInterval=null),this.subtitleDetectionTimeout&&(clearTimeout(this.subtitleDetectionTimeout),this.activeIntervals.delete(this.subtitleDetectionTimeout),this.subtitleDetectionTimeout=null),this.hasSubtitlesAvailable=t,this.updateButtonSubtitleAvailability(t),t&&(this.setupCCButtonListener(),setTimeout(()=>{this.updateButtonActiveState(),this.forceButtonStyleRefresh()},100))}resetSubtitleDetection(){this.subtitlePollingInterval&&(clearInterval(this.subtitlePollingInterval),this.activeIntervals.delete(this.subtitlePollingInterval),this.subtitlePollingInterval=null),this.subtitleDetectionTimeout&&(clearTimeout(this.subtitleDetectionTimeout),this.activeIntervals.delete(this.subtitleDetectionTimeout),this.subtitleDetectionTimeout=null),this.subtitleAttempts=0,this.hasSubtitlesAvailable=null,this.lastVideoId="",this.subtitleDetectionStartTime=0,m.setState({subtitles:[],fetchedSubtitle:[],showSubtitle:!1,showOriginalSubtitle:!1,videoLanguage:"",videoId:""}),this.buttonElements.forEach(t=>{if(!document.contains(t)){this.buttonElements.delete(t);return}t.style.opacity="1",t.style.cursor="pointer",t.title="Subzy Extension";const e=t.querySelector("img");e&&(e.style.opacity="0.8",e.style.borderBottom="3px solid transparent")})}resetAllButtonStates(){this.buttonElements.forEach(t=>{if(!document.contains(t)){this.buttonElements.delete(t);return}t.style.opacity="1",t.style.cursor="pointer",t.title="Subzy Extension";const e=t.querySelector("img");e&&(e.style.opacity="0.8",e.style.borderBottom="3px solid transparent",e.offsetHeight)})}forceButtonStyleRefresh(){this.buttonElements.forEach(t=>{if(!document.contains(t)){this.buttonElements.delete(t);return}const e=t.querySelector("img");if(e){const n=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=n}})}updateButtonSubtitleAvailability(t){this.buttonElements.forEach(e=>{if(!document.contains(e)){this.buttonElements.delete(e);return}e.style.opacity=t?"1":"0.5",e.style.cursor=t?"pointer":"not-allowed",e.title=t?"Subzy Extension":"زیرنویس برای این ویدئو یافت نشد";const n=e.querySelector("img");n&&(t?(n.style.opacity="0.8",n.style.borderBottom="3px solid transparent"):(n.style.opacity="0.4",n.style.borderBottom="3px solid transparent"))}),t&&setTimeout(()=>{this.updateButtonActiveState()},50)}}const yt=new Wn({position:"top-left",size:40,onClick:async()=>{await yt.showAppropriateModal();try{typeof chrome<"u"&&chrome.runtime&&chrome.runtime.sendMessage&&chrome.runtime.sendMessage({type:"PLAYER_ICON_CLICKED",url:window.location.href,timestamp:Date.now()}).catch(i=>{console.debug("Subzy: Background script not available:",i.message)})}catch(i){console.debug("Subzy: Chrome runtime not available:",i)}}});window.addEventListener("beforeunload",()=>{yt.destroy()});window.subzyDetector=yt;
