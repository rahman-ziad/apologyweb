var Nd=Object.defineProperty,Rd=Object.defineProperties;var zd=Object.getOwnPropertyDescriptors;var Br=Object.getOwnPropertySymbols;var ca=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable;var ua=(e,t,n)=>t in e?Nd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U=(e,t)=>{for(var n in t||(t={}))ca.call(t,n)&&ua(e,n,t[n]);if(Br)for(var n of Br(t))fa.call(t,n)&&ua(e,n,t[n]);return e},me=(e,t)=>Rd(e,zd(t));var Ke=(e,t)=>{var n={};for(var r in e)ca.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Br)for(var r of Br(e))t.indexOf(r)<0&&fa.call(e,r)&&(n[r]=e[r]);return n};const jd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};jd();var I={exports:{}},F={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var da=Object.getOwnPropertySymbols,Md=Object.prototype.hasOwnProperty,Fd=Object.prototype.propertyIsEnumerable;function Ad(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Dd(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var nc=Dd()?Object.assign:function(e,t){for(var n,r=Ad(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var l in n)Md.call(n,l)&&(r[l]=n[l]);if(da){i=da(n);for(var s=0;s<i.length;s++)Fd.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jl=nc,yn=60103,rc=60106;F.Fragment=60107;F.StrictMode=60108;F.Profiler=60114;var ic=60109,oc=60110,lc=60112;F.Suspense=60113;var sc=60115,ac=60116;if(typeof Symbol=="function"&&Symbol.for){var Te=Symbol.for;yn=Te("react.element"),rc=Te("react.portal"),F.Fragment=Te("react.fragment"),F.StrictMode=Te("react.strict_mode"),F.Profiler=Te("react.profiler"),ic=Te("react.provider"),oc=Te("react.context"),lc=Te("react.forward_ref"),F.Suspense=Te("react.suspense"),sc=Te("react.memo"),ac=Te("react.lazy")}var pa=typeof Symbol=="function"&&Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}function Rr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc={};function wn(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||uc}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Rr(85));this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fc(){}fc.prototype=wn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=cc,this.updater=n||uc}var ts=es.prototype=new fc;ts.constructor=es;Jl(ts,wn.prototype);ts.isPureReactComponent=!0;var ns={current:null},dc=Object.prototype.hasOwnProperty,pc={key:!0,ref:!0,__self:!0,__source:!0};function hc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)dc.call(t,r)&&!pc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:yn,type:e,key:o,ref:l,props:i,_owner:ns.current}}function Ud(e,t){return{$$typeof:yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===yn}function Vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ha=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vd(""+e.key):t.toString(36)}function si(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yn:case rc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+_o(l,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(ha,"$&/")+"/"),si(i,t,n,"",function(u){return u})):i!=null&&(rs(i)&&(i=Ud(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ha,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+_o(o,s);l+=si(o,t,n,a,i)}else if(a=bd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+_o(o,s++),l+=si(o,t,n,a,i);else if(o==="object")throw t=""+e,Error(Rr(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function Hr(e,t,n){if(e==null)return e;var r=[],i=0;return si(e,r,"","",function(o){return t.call(n,o,i++)}),r}function $d(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var mc={current:null};function Xe(){var e=mc.current;if(e===null)throw Error(Rr(321));return e}var Bd={ReactCurrentDispatcher:mc,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ns,IsSomeRendererActing:{current:!1},assign:Jl};F.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error(Rr(143));return e}};F.Component=wn;F.PureComponent=es;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;F.cloneElement=function(e,t,n){if(e==null)throw Error(Rr(267,e));var r=Jl({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)dc.call(t,a)&&!pc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:yn,type:e.type,key:i,ref:o,props:r,_owner:l}};F.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:oc,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:ic,_context:e},e.Consumer=e};F.createElement=hc;F.createFactory=function(e){var t=hc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:lc,render:e}};F.isValidElement=rs;F.lazy=function(e){return{$$typeof:ac,_payload:{_status:-1,_result:e},_init:$d}};F.memo=function(e,t){return{$$typeof:sc,type:e,compare:t===void 0?null:t}};F.useCallback=function(e,t){return Xe().useCallback(e,t)};F.useContext=function(e,t){return Xe().useContext(e,t)};F.useDebugValue=function(){};F.useEffect=function(e,t){return Xe().useEffect(e,t)};F.useImperativeHandle=function(e,t,n){return Xe().useImperativeHandle(e,t,n)};F.useLayoutEffect=function(e,t){return Xe().useLayoutEffect(e,t)};F.useMemo=function(e,t){return Xe().useMemo(e,t)};F.useReducer=function(e,t,n){return Xe().useReducer(e,t,n)};F.useRef=function(e){return Xe().useRef(e)};F.useState=function(e){return Xe().useState(e)};F.version="17.0.2";I.exports=F;var ot=I.exports,is={exports:{}},Pe={},gc={exports:{}},vc={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var a=null,u=null,v=function(){if(a!==null)try{var E=e.unstable_now();a(!0,E),a=null}catch(R){throw setTimeout(v,0),R}};t=function(E){a!==null?setTimeout(t,0,E):(a=E,setTimeout(v,0))},n=function(E,R){u=setTimeout(E,R)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var w=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var k=!1,y=null,f=-1,c=5,d=0;e.unstable_shouldYield=function(){return e.unstable_now()>=d},i=function(){},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<E?Math.floor(1e3/E):5};var p=new MessageChannel,m=p.port2;p.port1.onmessage=function(){if(y!==null){var E=e.unstable_now();d=E+c;try{y(!0,E)?m.postMessage(null):(k=!1,y=null)}catch(R){throw m.postMessage(null),R}}else k=!1},t=function(E){y=E,k||(k=!0,m.postMessage(null))},n=function(E,R){f=w(function(){E(e.unstable_now())},R)},r=function(){h(f),f=-1}}function O(E,R){var M=E.length;E.push(R);e:for(;;){var Y=M-1>>>1,J=E[Y];if(J!==void 0&&0<L(J,R))E[Y]=R,E[M]=J,M=Y;else break e}}function S(E){return E=E[0],E===void 0?null:E}function C(E){var R=E[0];if(R!==void 0){var M=E.pop();if(M!==R){E[0]=M;e:for(var Y=0,J=E.length;Y<J;){var _t=2*(Y+1)-1,Et=E[_t],Pn=_t+1,Bt=E[Pn];if(Et!==void 0&&0>L(Et,M))Bt!==void 0&&0>L(Bt,Et)?(E[Y]=Bt,E[Pn]=M,Y=Pn):(E[Y]=Et,E[_t]=M,Y=_t);else if(Bt!==void 0&&0>L(Bt,M))E[Y]=Bt,E[Pn]=M,Y=Pn;else break e}}return R}return null}function L(E,R){var M=E.sortIndex-R.sortIndex;return M!==0?M:E.id-R.id}var P=[],$=[],se=1,X=null,B=3,$t=!1,xt=!1,Cn=!1;function ko(E){for(var R=S($);R!==null;){if(R.callback===null)C($);else if(R.startTime<=E)C($),R.sortIndex=R.expirationTime,O(P,R);else break;R=S($)}}function So(E){if(Cn=!1,ko(E),!xt)if(S(P)!==null)xt=!0,t(xo);else{var R=S($);R!==null&&n(So,R.startTime-E)}}function xo(E,R){xt=!1,Cn&&(Cn=!1,r()),$t=!0;var M=B;try{for(ko(R),X=S(P);X!==null&&(!(X.expirationTime>R)||E&&!e.unstable_shouldYield());){var Y=X.callback;if(typeof Y=="function"){X.callback=null,B=X.priorityLevel;var J=Y(X.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?X.callback=J:X===S(P)&&C(P),ko(R)}else C(P);X=S(P)}if(X!==null)var _t=!0;else{var Et=S($);Et!==null&&n(So,Et.startTime-R),_t=!1}return _t}finally{X=null,B=M,$t=!1}}var Id=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){xt||$t||(xt=!0,t(xo))},e.unstable_getCurrentPriorityLevel=function(){return B},e.unstable_getFirstCallbackNode=function(){return S(P)},e.unstable_next=function(E){switch(B){case 1:case 2:case 3:var R=3;break;default:R=B}var M=B;B=R;try{return E()}finally{B=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=Id,e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=B;B=E;try{return R()}finally{B=M}},e.unstable_scheduleCallback=function(E,R,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=M+J,E={id:se++,callback:R,priorityLevel:E,startTime:M,expirationTime:J,sortIndex:-1},M>Y?(E.sortIndex=M,O($,E),S(P)===null&&E===S($)&&(Cn?r():Cn=!0,n(So,M-Y))):(E.sortIndex=J,O(P,E),xt||$t||(xt=!0,t(xo))),E},e.unstable_wrapCallback=function(E){var R=B;return function(){var M=B;B=R;try{return E.apply(this,arguments)}finally{B=M}}}})(vc);gc.exports=vc;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=I.exports,V=nc,Z=gc.exports;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Zi)throw Error(x(227));var yc=new Set,cr={};function Dt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(cr[e]=t,e=0;e<t.length;e++)yc.add(t[e])}var Ye=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Hd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ma=Object.prototype.hasOwnProperty,ga={},va={};function Wd(e){return ma.call(va,e)?!0:ma.call(ga,e)?!1:Hd.test(e)?va[e]=!0:(ga[e]=!0,!1)}function Qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yd(e,t,n,r){if(t===null||typeof t=="undefined"||Qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,ls);ne[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,ls);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,ls);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Yd(t,n,i,r)&&(n=null),r||i===null?Wd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$n=60103,Ot=60106,Je=60107,as=60108,qn=60114,us=60109,cs=60110,Ji=60112,Xn=60113,ki=60120,eo=60115,fs=60116,ds=60121,ps=60128,wc=60129,hs=60130,el=60131;if(typeof Symbol=="function"&&Symbol.for){var G=Symbol.for;$n=G("react.element"),Ot=G("react.portal"),Je=G("react.fragment"),as=G("react.strict_mode"),qn=G("react.profiler"),us=G("react.provider"),cs=G("react.context"),Ji=G("react.forward_ref"),Xn=G("react.suspense"),ki=G("react.suspense_list"),eo=G("react.memo"),fs=G("react.lazy"),ds=G("react.block"),G("react.scope"),ps=G("react.opaque.id"),wc=G("react.debug_trace_mode"),hs=G("react.offscreen"),el=G("react.legacy_hidden")}var ya=typeof Symbol=="function"&&Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var Eo;function Bn(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var Co=!1;function Wr(e,t){if(!e||Co)return"";Co=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s])return`
`+i[l].replace(" at new "," at ");while(1<=l&&0<=s);break}}}finally{Co=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function qd(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=Wr(e.type,!1),e;case 11:return e=Wr(e.type.render,!1),e;case 22:return e=Wr(e.type._render,!1),e;case 1:return e=Wr(e.type,!0),e;default:return""}}function en(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Je:return"Fragment";case Ot:return"Portal";case qn:return"Profiler";case as:return"StrictMode";case Xn:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Ji:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case eo:return en(e.type);case ds:return en(e._render);case fs:t=e._payload,e=e._init;try{return en(e(t))}catch{}}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qr(e){e._valueTracker||(e._valueTracker=Xd(e))}function Sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function tl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function nl(e,t){xc(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&rl(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rl(e,t,n){(t!=="number"||Si(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Kd(e){var t="";return Zi.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function il(e,t){return e=V({children:void 0},t),(t=Kd(t.children))&&(e.children=t),e}function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function _c(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var ll={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ec(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,Cc=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==ll.svg||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function Pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function Tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,nn=null,rn=null;function _a(e){if(e=jr(e)){if(typeof cl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=lo(t),cl(e.stateNode,e.type,t))}}function Oc(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Lc(){if(nn){var e=nn,t=rn;if(rn=nn=null,_a(e),t)for(e=0;e<t.length;e++)_a(t[e])}}function gs(e,t){return e(t)}function Ic(e,t,n,r,i){return e(t,n,r,i)}function vs(){}var Nc=gs,Lt=!1,Po=!1;function ys(){(nn!==null||rn!==null)&&(vs(),Lc())}function Jd(e,t,n){if(Po)return e(t,n);Po=!0;try{return Nc(e,t,n)}finally{Po=!1,ys()}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var fl=!1;if(Ye)try{var On={};Object.defineProperty(On,"passive",{get:function(){fl=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{fl=!1}function ep(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(v){this.onError(v)}}var Gn=!1,xi=null,_i=!1,dl=null,tp={onError:function(e){Gn=!0,xi=e}};function np(e,t,n,r,i,o,l,s,a){Gn=!1,xi=null,ep.apply(tp,arguments)}function rp(e,t,n,r,i,o,l,s,a){if(np.apply(this,arguments),Gn){if(Gn){var u=xi;Gn=!1,xi=null}else throw Error(x(198));_i||(_i=!0,dl=u)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ea(e){if(Ut(e)!==e)throw Error(x(188))}function ip(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ea(i),e;if(o===r)return Ea(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function zc(e){if(e=ip(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function Ca(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var jc,ws,Mc,Fc,pl=!1,Me=[],lt=null,st=null,at=null,pr=new Map,hr=new Map,Ln=[],Pa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hl(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Ta(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function In(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=hl(t,n,r,i,o),t!==null&&(t=jr(t),t!==null&&ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function op(e,t,n,r,i){switch(t){case"focusin":return lt=In(lt,e,t,n,r,i),!0;case"dragenter":return st=In(st,e,t,n,r,i),!0;case"mouseover":return at=In(at,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return pr.set(o,In(pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,hr.set(o,In(hr.get(o)||null,e,t,n,r,i)),!0}return!1}function lp(e){var t=It(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Rc(n),t!==null){e.blockedOn=t,Fc(e.lanePriority,function(){Z.unstable_runWithPriority(e.priority,function(){Mc(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=jr(n),t!==null&&ws(t),e.blockedOn=n,!1;t.shift()}return!0}function Oa(e,t,n){ai(e)&&n.delete(t)}function sp(){for(pl=!1;0<Me.length;){var e=Me[0];if(e.blockedOn!==null){e=jr(e.blockedOn),e!==null&&jc(e);break}for(var t=e.targetContainers;0<t.length;){var n=_s(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Me.shift()}lt!==null&&ai(lt)&&(lt=null),st!==null&&ai(st)&&(st=null),at!==null&&ai(at)&&(at=null),pr.forEach(Oa),hr.forEach(Oa)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,Z.unstable_scheduleCallback(Z.unstable_NormalPriority,sp)))}function Ac(e){function t(i){return Nn(i,e)}if(0<Me.length){Nn(Me[0],e);for(var n=1;n<Me.length;n++){var r=Me[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&Nn(lt,e),st!==null&&Nn(st,e),at!==null&&Nn(at,e),pr.forEach(t),hr.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&Ln.shift()}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},To={},Dc={};Ye&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function to(e){if(To[e])return To[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dc)return To[e]=t[n];return e}var bc=to("animationend"),Uc=to("animationiteration"),Vc=to("animationstart"),$c=to("transitionend"),Bc=new Map,ks=new Map,ap=["abort","abort",bc,"animationEnd",Uc,"animationIteration",Vc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$c,"transitionEnd","waiting","waiting"];function Ss(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),ks.set(r,t),Bc.set(r,i),Dt(i,[r])}}var up=Z.unstable_now;up();var A=8;function Qt(e){if((1&e)!==0)return A=15,1;if((2&e)!==0)return A=14,2;if((4&e)!==0)return A=13,4;var t=24&e;return t!==0?(A=12,t):(e&32)!==0?(A=11,32):(t=192&e,t!==0?(A=10,t):(e&256)!==0?(A=9,256):(t=3584&e,t!==0?(A=8,t):(e&4096)!==0?(A=7,4096):(t=4186112&e,t!==0?(A=6,t):(t=62914560&e,t!==0?(A=5,t):e&67108864?(A=4,67108864):(e&134217728)!==0?(A=3,134217728):(t=805306368&e,t!==0?(A=2,t):(1073741824&e)!==0?(A=1,1073741824):(A=8,e))))))}function cp(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function fp(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(x(358,e))}}function mr(e,t){var n=e.pendingLanes;if(n===0)return A=0;var r=0,i=0,o=e.expiredLanes,l=e.suspendedLanes,s=e.pingedLanes;if(o!==0)r=o,i=A=15;else if(o=n&134217727,o!==0){var a=o&~l;a!==0?(r=Qt(a),i=A):(s&=o,s!==0&&(r=Qt(s),i=A))}else o=n&~l,o!==0?(r=Qt(o),i=A):s!==0&&(r=Qt(s),i=A);if(r===0)return 0;if(r=31-gt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&l)===0){if(Qt(t),i<=A)return t;A=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function Hc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ei(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=Yt(24&~t),e===0?Ei(10,t):e;case 10:return e=Yt(192&~t),e===0?Ei(8,t):e;case 8:return e=Yt(3584&~t),e===0&&(e=Yt(4186112&~t),e===0&&(e=512)),e;case 2:return t=Yt(805306368&~t),t===0&&(t=268435456),t}throw Error(x(358,e))}function Yt(e){return e&-e}function Oo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-gt(t),e[t]=n}var gt=Math.clz32?Math.clz32:hp,dp=Math.log,pp=Math.LN2;function hp(e){return e===0?32:31-(dp(e)/pp|0)|0}var mp=Z.unstable_UserBlockingPriority,gp=Z.unstable_runWithPriority,ui=!0;function vp(e,t,n,r){Lt||vs();var i=xs,o=Lt;Lt=!0;try{Ic(i,e,t,n,r)}finally{(Lt=o)||ys()}}function yp(e,t,n,r){gp(mp,xs.bind(null,e,t,n,r))}function xs(e,t,n,r){if(ui){var i;if((i=(t&4)===0)&&0<Me.length&&-1<Pa.indexOf(e))e=hl(null,e,t,n,r),Me.push(e);else{var o=_s(e,t,n,r);if(o===null)i&&Ta(e,r);else{if(i){if(-1<Pa.indexOf(e)){e=hl(o,e,t,n,r),Me.push(e);return}if(op(o,e,t,n,r))return;Ta(e,r)}rf(e,t,r,null,n)}}}}function _s(e,t,n,r){var i=ms(r);if(i=It(i),i!==null){var o=Ut(i);if(o===null)i=null;else{var l=o.tag;if(l===13){if(i=Rc(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return rf(e,t,r,i,n),null}var et=null,Es=null,ci=null;function Wc(){if(ci)return ci;var e,t=Es,n=t.length,r,i="value"in et?et.value:et.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ci=i.slice(e,1<r?1-r:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function La(){return!1}function ve(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xr:La,this.isPropagationStopped=La,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=ve(kn),zr=V({},kn,{view:0,detail:0}),wp=ve(zr),Lo,Io,Rn,ro=V({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Lo=e.screenX-Rn.screenX,Io=e.screenY-Rn.screenY):Io=Lo=0,Rn=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Io}}),Ia=ve(ro),kp=V({},ro,{dataTransfer:0}),Sp=ve(kp),xp=V({},zr,{relatedTarget:0}),No=ve(xp),_p=V({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=ve(_p),Cp=V({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pp=ve(Cp),Tp=V({},kn,{data:0}),Na=ve(Tp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Ps(){return Np}var Rp=V({},zr,{key:function(e){if(e.key){var t=Op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=ve(Rp),jp=V({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=ve(jp),Mp=V({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Fp=ve(Mp),Ap=V({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=ve(Ap),bp=V({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=ve(bp),Vp=[9,13,27,32],Ts=Ye&&"CompositionEvent"in window,Zn=null;Ye&&"documentMode"in document&&(Zn=document.documentMode);var $p=Ye&&"TextEvent"in window&&!Zn,Qc=Ye&&(!Ts||Zn&&8<Zn&&11>=Zn),za=String.fromCharCode(32),ja=!1;function Yc(e,t){switch(e){case"keyup":return Vp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Bp(e,t){switch(e){case"compositionend":return qc(t);case"keypress":return t.which!==32?null:(ja=!0,za);case"textInput":return e=t.data,e===za&&ja?null:e;default:return null}}function Hp(e,t){if(Xt)return e==="compositionend"||!Ts&&Yc(e,t)?(e=Wc(),ci=Es=et=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var Wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wp[e.type]:t==="textarea"}function Xc(e,t,n,r){Oc(r),t=Ci(t,"onChange"),0<t.length&&(n=new Cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,gr=null;function Qp(e){ef(e,0)}function io(e){var t=Gt(e);if(Sc(t))return e}function Yp(e,t){if(e==="change")return t}var Kc=!1;if(Ye){var Ro;if(Ye){var zo="oninput"in document;if(!zo){var Fa=document.createElement("div");Fa.setAttribute("oninput","return;"),zo=typeof Fa.oninput=="function"}Ro=zo}else Ro=!1;Kc=Ro&&(!document.documentMode||9<document.documentMode)}function Aa(){Jn&&(Jn.detachEvent("onpropertychange",Gc),gr=Jn=null)}function Gc(e){if(e.propertyName==="value"&&io(gr)){var t=[];if(Xc(t,gr,e,ms(e)),e=Qp,Lt)e(t);else{Lt=!0;try{gs(e,t)}finally{Lt=!1,ys()}}}}function qp(e,t,n){e==="focusin"?(Aa(),Jn=t,gr=n,Jn.attachEvent("onpropertychange",Gc)):e==="focusout"&&Aa()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(gr)}function Kp(e,t){if(e==="click")return io(t)}function Gp(e,t){if(e==="input"||e==="change")return io(t)}function Zp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var we=typeof Object.is=="function"?Object.is:Zp,Jp=Object.prototype.hasOwnProperty;function vr(e,t){if(we(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Jp.call(t,n[r])||!we(e[n[r]],t[n[r]]))return!1;return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ba(e,t){var n=Da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Da(n)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ua(){for(var e=window,t=Si();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Si(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var eh=Ye&&"documentMode"in document&&11>=document.documentMode,Kt=null,gl=null,er=null,vl=!1;function Va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Kt==null||Kt!==Si(r)||(r=Kt,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&vr(er,r)||(er=r,r=Ci(gl,"onSelect"),0<r.length&&(t=new Cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}Ss("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Ss("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Ss(ap,2);for(var $a="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),jo=0;jo<$a.length;jo++)ks.set($a[jo],0);pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rp(r,t,void 0,e),e.currentTarget=null}function ef(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Ba(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Ba(i,s,u),o=a}}}if(_i)throw e=dl,_i=!1,dl=null,e}function D(e,t){var n=lf(t),r=e+"__bubble";n.has(r)||(nf(t,e,2,!1),n.add(r))}var Ha="_reactListening"+Math.random().toString(36).slice(2);function tf(e){e[Ha]||(e[Ha]=!0,yc.forEach(function(t){Jc.has(t)||Wa(t,!1,e,null),Wa(t,!0,e,null)}))}function Wa(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&Jc.has(e)){if(e!=="scroll")return;i|=2,o=r}var l=lf(o),s=e+"__"+(t?"capture":"bubble");l.has(s)||(t&&(i|=4),nf(o,e,i,t),l.add(s))}function nf(e,t,n,r){var i=ks.get(t);switch(i===void 0?2:i){case 0:i=vp;break;case 1:i=yp;break;default:i=xs}n=i.bind(null,t,n,e),i=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rf(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=It(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Jd(function(){var u=o,v=ms(n),w=[];e:{var h=Bc.get(e);if(h!==void 0){var g=Cs,k=e;switch(e){case"keypress":if(fi(n)===0)break e;case"keydown":case"keyup":g=zp;break;case"focusin":k="focus",g=No;break;case"focusout":k="blur",g=No;break;case"beforeblur":case"afterblur":g=No;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Fp;break;case bc:case Uc:case Vc:g=Ep;break;case $c:g=Dp;break;case"scroll":g=wp;break;case"wheel":g=Up;break;case"copy":case"cut":case"paste":g=Pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ra}var y=(t&4)!==0,f=!y&&e==="scroll",c=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,p;d!==null;){p=d;var m=p.stateNode;if(p.tag===5&&m!==null&&(p=m,c!==null&&(m=dr(d,c),m!=null&&y.push(yr(d,m,p)))),f)break;d=d.return}0<y.length&&(h=new g(h,k,null,n,v),w.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&(t&16)===0&&(k=n.relatedTarget||n.fromElement)&&(It(k)||k[Sn]))break e;if((g||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,g?(k=n.relatedTarget||n.toElement,g=u,k=k?It(k):null,k!==null&&(f=Ut(k),k!==f||k.tag!==5&&k.tag!==6)&&(k=null)):(g=null,k=u),g!==k)){if(y=Ia,m="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ra,m="onPointerLeave",c="onPointerEnter",d="pointer"),f=g==null?h:Gt(g),p=k==null?h:Gt(k),h=new y(m,d+"leave",g,n,v),h.target=f,h.relatedTarget=p,m=null,It(v)===u&&(y=new y(c,d+"enter",k,n,v),y.target=p,y.relatedTarget=f,m=y),f=m,g&&k)t:{for(y=g,c=k,d=0,p=y;p;p=Ht(p))d++;for(p=0,m=c;m;m=Ht(m))p++;for(;0<d-p;)y=Ht(y),d--;for(;0<p-d;)c=Ht(c),p--;for(;d--;){if(y===c||c!==null&&y===c.alternate)break t;y=Ht(y),c=Ht(c)}y=null}else y=null;g!==null&&Qa(w,h,g,y,!1),k!==null&&f!==null&&Qa(w,f,k,y,!0)}}e:{if(h=u?Gt(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var O=Yp;else if(Ma(h))if(Kc)O=Gp;else{O=Xp;var S=qp}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(O=Kp);if(O&&(O=O(e,u))){Xc(w,O,n,v);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&rl(h,"number",h.value)}switch(S=u?Gt(u):window,e){case"focusin":(Ma(S)||S.contentEditable==="true")&&(Kt=S,gl=u,er=null);break;case"focusout":er=gl=Kt=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Va(w,n,v);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":Va(w,n,v)}var C;if(Ts)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xt?Yc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Qc&&n.locale!=="ko"&&(Xt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xt&&(C=Wc()):(et=v,Es="value"in et?et.value:et.textContent,Xt=!0)),S=Ci(u,L),0<S.length&&(L=new Na(L,e,null,n,v),w.push({event:L,listeners:S}),C?L.data=C:(C=qc(n),C!==null&&(L.data=C)))),(C=$p?Bp(e,n):Hp(e,n))&&(u=Ci(u,"onBeforeInput"),0<u.length&&(v=new Na("onBeforeInput","beforeinput",null,n,v),w.push({event:v,listeners:u}),v.data=C))}ef(w,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=dr(e,n),o!=null&&r.unshift(yr(e,o,i)),o=dr(e,t),o!=null&&r.push(yr(e,o,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=dr(n,o),a!=null&&l.unshift(yr(n,a,s))):i||(a=dr(n,o),a!=null&&l.push(yr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}function Pi(){}var Mo=null,Fo=null;function of(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function yl(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0;function Os(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ao=0;function nh(e){return{$$typeof:ps,toString:e,valueOf:e}}var oo=Math.random().toString(36).slice(2),tt="__reactFiber$"+oo,Ti="__reactProps$"+oo,Sn="__reactContainer$"+oo,Xa="__reactEvents$"+oo;function It(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qa(e);e!==null;){if(n=e[tt])return n;e=qa(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[tt]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function lo(e){return e[Ti]||null}function lf(e){var t=e[Xa];return t===void 0&&(t=e[Xa]=new Set),t}var wl=[],Zt=-1;function kt(e){return{current:e}}function b(e){0>Zt||(e.current=wl[Zt],wl[Zt]=null,Zt--)}function Q(e,t){Zt++,wl[Zt]=e.current,e.current=t}var vt={},le=kt(vt),pe=kt(!1),jt=vt;function hn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Oi(){b(pe),b(le)}function Ka(e,t,n){if(le.current!==vt)throw Error(x(168));Q(le,t),Q(pe,n)}function sf(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,en(t)||"Unknown",i));return V({},n,r)}function di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,jt=le.current,Q(le,e),Q(pe,pe.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=sf(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,b(pe),b(le),Q(le,e)):b(pe),Q(pe,n)}var Ls=null,zt=null,rh=Z.unstable_runWithPriority,Is=Z.unstable_scheduleCallback,kl=Z.unstable_cancelCallback,ih=Z.unstable_shouldYield,Za=Z.unstable_requestPaint,Sl=Z.unstable_now,oh=Z.unstable_getCurrentPriorityLevel,so=Z.unstable_ImmediatePriority,af=Z.unstable_UserBlockingPriority,uf=Z.unstable_NormalPriority,cf=Z.unstable_LowPriority,ff=Z.unstable_IdlePriority,Do={},lh=Za!==void 0?Za:function(){},$e=null,pi=null,bo=!1,Ja=Sl(),ie=1e4>Ja?Sl:function(){return Sl()-Ja};function mn(){switch(oh()){case so:return 99;case af:return 98;case uf:return 97;case cf:return 96;case ff:return 95;default:throw Error(x(332))}}function df(e){switch(e){case 99:return so;case 98:return af;case 97:return uf;case 96:return cf;case 95:return ff;default:throw Error(x(332))}}function Mt(e,t){return e=df(e),rh(e,t)}function wr(e,t,n){return e=df(e),Is(e,t,n)}function Ue(){if(pi!==null){var e=pi;pi=null,kl(e)}pf()}function pf(){if(!bo&&$e!==null){bo=!0;var e=0;try{var t=$e;Mt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),$e=null}catch(n){throw $e!==null&&($e=$e.slice(e+1)),Is(so,Ue),n}finally{bo=!1}}}var sh=bt.ReactCurrentBatchConfig;function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Li=kt(null),Ii=null,Jt=null,Ni=null;function Ns(){Ni=Jt=Ii=null}function Rs(e){var t=Li.current;b(Li),e.type._context._currentValue=t}function hf(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function ln(e,t){Ii=e,Ni=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ne=!0),e.firstContext=null)}function Ee(e,t){if(Ni!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ni=e,t=1073741823),t={context:e,observedBits:t,next:null},Jt===null){if(Ii===null)throw Error(x(308));Jt=t,Ii.dependencies={lanes:0,firstContext:t,responders:null}}else Jt=Jt.next=t;return e._currentValue}var Ze=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kr(e,t,n,r){var i=e.updateQueue;Ze=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var v=e.alternate;if(v!==null){v=v.updateQueue;var w=v.lastBaseUpdate;w!==l&&(w===null?v.firstBaseUpdate=u:w.next=u,v.lastBaseUpdate=a)}}if(o!==null){w=i.baseState,l=0,v=u=a=null;do{s=o.lane;var h=o.eventTime;if((r&s)===s){v!==null&&(v=v.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,k=o;switch(s=t,h=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){w=g.call(h,w,s);break e}w=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=k.payload,s=typeof g=="function"?g.call(h,w,s):g,s==null)break e;w=V({},w,s);break e;case 2:Ze=!0}}o.callback!==null&&(e.flags|=32,s=i.effects,s===null?i.effects=[o]:s.push(o))}else h={eventTime:h,lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(u=v=h,a=w):v=v.next=h,l|=s;if(o=o.next,o===null){if(s=i.shared.pending,s===null)break;o=s.next,s.next=null,i.lastBaseUpdate=s,i.shared.pending=null}}while(1);v===null&&(a=w),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=v,Fr|=l,e.lanes=l,e.memoizedState=w}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var gf=new Zi.Component().refs;function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ao={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=ft(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),ct(e,o),dt(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=ft(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),ct(e,o),dt(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=ft(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),ct(e,i),dt(e,r,n)}};function nu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,o):!0}function vf(e,t,n){var r=!1,i=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(i=he(t)?jt:le.current,r=t.contextTypes,o=(r=r!=null)?hn(e,i):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ao.enqueueReplaceState(t,t.state,null)}function xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gf,zs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ee(o):(o=he(t)?jt:le.current,i.context=hn(e,o)),kr(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ri(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ao.enqueueReplaceState(i,i.state,null),kr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Kr=Array.isArray;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=r.refs;l===gf&&(l=r.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Gr(e,t){if(e.type!=="textarea")throw Error(x(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function yf(e){function t(f,c){if(e){var d=f.lastEffect;d!==null?(d.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags=2,c):d):(f.flags=2,c)):c}function l(f){return e&&f.alternate===null&&(f.flags=2),f}function s(f,c,d,p){return c===null||c.tag!==6?(c=Ho(d,f.mode,p),c.return=f,c):(c=i(c,d),c.return=f,c)}function a(f,c,d,p){return c!==null&&c.elementType===d.type?(p=i(c,d.props),p.ref=zn(f,c,d),p.return=f,p):(p=vi(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,c,d),p.return=f,p)}function u(f,c,d,p){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Wo(d,f.mode,p),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function v(f,c,d,p,m){return c===null||c.tag!==7?(c=cn(d,f.mode,p,m),c.return=f,c):(c=i(c,d),c.return=f,c)}function w(f,c,d){if(typeof c=="string"||typeof c=="number")return c=Ho(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case $n:return d=vi(c.type,c.key,c.props,null,f.mode,d),d.ref=zn(f,null,c),d.return=f,d;case Ot:return c=Wo(c,f.mode,d),c.return=f,c}if(Kr(c)||Tn(c))return c=cn(c,f.mode,d,null),c.return=f,c;Gr(f,c)}return null}function h(f,c,d,p){var m=c!==null?c.key:null;if(typeof d=="string"||typeof d=="number")return m!==null?null:s(f,c,""+d,p);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $n:return d.key===m?d.type===Je?v(f,c,d.props.children,p,m):a(f,c,d,p):null;case Ot:return d.key===m?u(f,c,d,p):null}if(Kr(d)||Tn(d))return m!==null?null:v(f,c,d,p,null);Gr(f,d)}return null}function g(f,c,d,p,m){if(typeof p=="string"||typeof p=="number")return f=f.get(d)||null,s(c,f,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $n:return f=f.get(p.key===null?d:p.key)||null,p.type===Je?v(c,f,p.props.children,m,p.key):a(c,f,p,m);case Ot:return f=f.get(p.key===null?d:p.key)||null,u(c,f,p,m)}if(Kr(p)||Tn(p))return f=f.get(d)||null,v(c,f,p,m,null);Gr(c,p)}return null}function k(f,c,d,p){for(var m=null,O=null,S=c,C=c=0,L=null;S!==null&&C<d.length;C++){S.index>C?(L=S,S=null):L=S.sibling;var P=h(f,S,d[C],p);if(P===null){S===null&&(S=L);break}e&&S&&P.alternate===null&&t(f,S),c=o(P,c,C),O===null?m=P:O.sibling=P,O=P,S=L}if(C===d.length)return n(f,S),m;if(S===null){for(;C<d.length;C++)S=w(f,d[C],p),S!==null&&(c=o(S,c,C),O===null?m=S:O.sibling=S,O=S);return m}for(S=r(f,S);C<d.length;C++)L=g(S,f,C,d[C],p),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?C:L.key),c=o(L,c,C),O===null?m=L:O.sibling=L,O=L);return e&&S.forEach(function($){return t(f,$)}),m}function y(f,c,d,p){var m=Tn(d);if(typeof m!="function")throw Error(x(150));if(d=m.call(d),d==null)throw Error(x(151));for(var O=m=null,S=c,C=c=0,L=null,P=d.next();S!==null&&!P.done;C++,P=d.next()){S.index>C?(L=S,S=null):L=S.sibling;var $=h(f,S,P.value,p);if($===null){S===null&&(S=L);break}e&&S&&$.alternate===null&&t(f,S),c=o($,c,C),O===null?m=$:O.sibling=$,O=$,S=L}if(P.done)return n(f,S),m;if(S===null){for(;!P.done;C++,P=d.next())P=w(f,P.value,p),P!==null&&(c=o(P,c,C),O===null?m=P:O.sibling=P,O=P);return m}for(S=r(f,S);!P.done;C++,P=d.next())P=g(S,f,C,P.value,p),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?C:P.key),c=o(P,c,C),O===null?m=P:O.sibling=P,O=P);return e&&S.forEach(function(se){return t(f,se)}),m}return function(f,c,d,p){var m=typeof d=="object"&&d!==null&&d.type===Je&&d.key===null;m&&(d=d.props.children);var O=typeof d=="object"&&d!==null;if(O)switch(d.$$typeof){case $n:e:{for(O=d.key,m=c;m!==null;){if(m.key===O){switch(m.tag){case 7:if(d.type===Je){n(f,m.sibling),c=i(m,d.props.children),c.return=f,f=c;break e}break;default:if(m.elementType===d.type){n(f,m.sibling),c=i(m,d.props),c.ref=zn(f,m,d),c.return=f,f=c;break e}}n(f,m);break}else t(f,m);m=m.sibling}d.type===Je?(c=cn(d.props.children,f.mode,p,d.key),c.return=f,f=c):(p=vi(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,c,d),p.return=f,f=p)}return l(f);case Ot:e:{for(m=d.key;c!==null;){if(c.key===m)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Wo(d,f.mode,p),c.return=f,f=c}return l(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=Ho(d,f.mode,p),c.return=f,f=c),l(f);if(Kr(d))return k(f,c,d,p);if(Tn(d))return y(f,c,d,p);if(O&&Gr(f,d),typeof d=="undefined"&&!m)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(x(152,en(f.type)||"Component"))}return n(f,c)}}var zi=yf(!0),wf=yf(!1),Mr={},De=kt(Mr),Sr=kt(Mr),xr=kt(Mr);function Nt(e){if(e===Mr)throw Error(x(174));return e}function _l(e,t){switch(Q(xr,t),Q(Sr,e),Q(De,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)}b(De),Q(De,t)}function gn(){b(De),b(Sr),b(xr)}function iu(e){Nt(xr.current);var t=Nt(De.current),n=sl(t,e.type);t!==n&&(Q(Sr,e),Q(De,n))}function js(e){Sr.current===e&&(b(De),b(Sr))}var W=kt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var He=null,nt=null,be=!1;function kf(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function El(e){if(be){var t=nt;if(t){var n=t;if(!ou(e,t)){if(t=on(n.nextSibling),!t||!ou(e,t)){e.flags=e.flags&-1025|2,be=!1,He=e;return}kf(He,n)}He=e,nt=on(t.firstChild)}else e.flags=e.flags&-1025|2,be=!1,He=e}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Zr(e){if(e!==He)return!1;if(!be)return lu(e),be=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!yl(t,e.memoizedProps))for(t=nt;t;)kf(e,t),t=on(t.nextSibling);if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=He?on(e.stateNode.nextSibling):null;return!0}function Uo(){nt=He=null,be=!1}var sn=[];function Ms(){for(var e=0;e<sn.length;e++)sn[e]._workInProgressVersionPrimary=null;sn.length=0}var tr=bt.ReactCurrentDispatcher,_e=bt.ReactCurrentBatchConfig,_r=0,q=null,re=null,ee=null,Mi=!1,nr=!1;function ce(){throw Error(x(321))}function Fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!we(e[n],t[n]))return!1;return!0}function As(e,t,n,r,i,o){if(_r=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,tr.current=e===null||e.memoizedState===null?uh:ch,e=n(r,i),nr){o=0;do{if(nr=!1,!(25>o))throw Error(x(301));o+=1,ee=re=null,t.updateQueue=null,tr.current=fh,e=n(r,i)}while(nr)}if(tr.current=bi,t=re!==null&&re.next!==null,_r=0,ee=re=q=null,Mi=!1,t)throw Error(x(300));return e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?q.memoizedState=ee=e:ee=ee.next=e,ee}function Vt(){if(re===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ee===null?q.memoizedState:ee.next;if(t!==null)ee=t,re=e;else{if(e===null)throw Error(x(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ee===null?q.memoizedState=ee=e:ee=ee.next=e}return ee}function Fe(e,t){return typeof t=="function"?t(e):t}function jn(e){var t=Vt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var s=l=o=null,a=i;do{var u=a.lane;if((_r&u)===u)s!==null&&(s=s.next={lane:0,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null}),r=a.eagerReducer===e?a.eagerState:e(r,a.action);else{var v={lane:u,action:a.action,eagerReducer:a.eagerReducer,eagerState:a.eagerState,next:null};s===null?(l=s=v,o=r):s=s.next=v,q.lanes|=u,Fr|=u}a=a.next}while(a!==null&&a!==i);s===null?o=r:s.next=l,we(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Mn(e){var t=Vt(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);we(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function su(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(_r&e)===e)&&(t._workInProgressVersionPrimary=r,sn.push(t))),e)return n(t._source);throw sn.push(t),Error(x(350))}function Sf(e,t,n,r){var i=ae;if(i===null)throw Error(x(349));var o=t._getVersion,l=o(t._source),s=tr.current,a=s.useState(function(){return su(i,t,n)}),u=a[1],v=a[0];a=ee;var w=e.memoizedState,h=w.refs,g=h.getSnapshot,k=w.source;w=w.subscribe;var y=q;return e.memoizedState={refs:h,source:t,subscribe:r},s.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var f=o(t._source);if(!we(l,f)){f=n(t._source),we(v,f)||(u(f),f=ft(y),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var c=i.entanglements,d=f;0<d;){var p=31-gt(d),m=1<<p;c[p]|=f,d&=~m}}},[n,t,r]),s.useEffect(function(){return r(t._source,function(){var f=h.getSnapshot,c=h.setSnapshot;try{c(f(t._source));var d=ft(y);i.mutableReadLanes|=d&i.pendingLanes}catch(p){c(function(){throw p})}})},[t,r]),we(g,n)&&we(k,t)&&we(w,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:v},e.dispatch=u=Us.bind(null,q,e),a.queue=e,a.baseQueue=null,v=su(i,t,n),a.memoizedState=a.baseState=v),v}function xf(e,t,n){var r=Vt();return Sf(r,e,t,n)}function Fn(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:e},e=e.dispatch=Us.bind(null,q,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function au(e){var t=Rt();return e={current:e},t.memoizedState=e}function Ai(){return Vt().memoizedState}function Cl(e,t,n,r){var i=Rt();q.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function Ds(e,t,n,r){var i=Vt();r=r===void 0?null:r;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,r!==null&&Fs(r,l.deps)){Fi(t,n,o,r);return}}q.flags|=e,i.memoizedState=Fi(1|t,n,o,r)}function uu(e,t){return Cl(516,4,e,t)}function Di(e,t){return Ds(516,4,e,t)}function _f(e,t){return Ds(4,2,e,t)}function Ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cf(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4,2,Ef.bind(null,t,e),n)}function bs(){}function Pf(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ah(e,t){var n=mn();Mt(98>n?98:n,function(){e(!0)}),Mt(97<n?97:n,function(){var r=_e.transition;_e.transition=1;try{e(!1),t()}finally{_e.transition=r}})}function Us(e,t,n){var r=ge(),i=ft(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},l=t.pending;if(l===null?o.next=o:(o.next=l.next,l.next=o),t.pending=o,l=e.alternate,e===q||l!==null&&l===q)nr=Mi=!0;else{if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,n);if(o.eagerReducer=l,o.eagerState=a,we(a,s))return}catch{}finally{}dt(e,i,r)}}var bi={readContext:Ee,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useOpaqueIdentifier:ce,unstable_isNewReconciler:!1},uh={readContext:Ee,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,2,Ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Us.bind(null,q,e),[r.memoizedState,e]},useRef:au,useState:Fn,useDebugValue:bs,useDeferredValue:function(e){var t=Fn(e),n=t[0],r=t[1];return uu(function(){var i=_e.transition;_e.transition=1;try{r(e)}finally{_e.transition=i}},[e]),n},useTransition:function(){var e=Fn(!1),t=e[0];return e=ah.bind(null,e[1]),au(e),[e,t]},useMutableSource:function(e,t,n){var r=Rt();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Sf(r,e,t,n)},useOpaqueIdentifier:function(){if(be){var e=!1,t=nh(function(){throw e||(e=!0,n("r:"+(Ao++).toString(36))),Error(x(355))}),n=Fn(t)[1];return(q.mode&2)===0&&(q.flags|=516,Fi(5,function(){n("r:"+(Ao++).toString(36))},void 0,null)),t}return t="r:"+(Ao++).toString(36),Fn(t),t},unstable_isNewReconciler:!1},ch={readContext:Ee,useCallback:Pf,useContext:Ee,useEffect:Di,useImperativeHandle:Cf,useLayoutEffect:_f,useMemo:Tf,useReducer:jn,useRef:Ai,useState:function(){return jn(Fe)},useDebugValue:bs,useDeferredValue:function(e){var t=jn(Fe),n=t[0],r=t[1];return Di(function(){var i=_e.transition;_e.transition=1;try{r(e)}finally{_e.transition=i}},[e]),n},useTransition:function(){var e=jn(Fe)[0];return[Ai().current,e]},useMutableSource:xf,useOpaqueIdentifier:function(){return jn(Fe)[0]},unstable_isNewReconciler:!1},fh={readContext:Ee,useCallback:Pf,useContext:Ee,useEffect:Di,useImperativeHandle:Cf,useLayoutEffect:_f,useMemo:Tf,useReducer:Mn,useRef:Ai,useState:function(){return Mn(Fe)},useDebugValue:bs,useDeferredValue:function(e){var t=Mn(Fe),n=t[0],r=t[1];return Di(function(){var i=_e.transition;_e.transition=1;try{r(e)}finally{_e.transition=i}},[e]),n},useTransition:function(){var e=Mn(Fe)[0];return[Ai().current,e]},useMutableSource:xf,useOpaqueIdentifier:function(){return Mn(Fe)[0]},unstable_isNewReconciler:!1},dh=bt.ReactCurrentOwner,Ne=!1;function fe(e,t,n,r){t.child=e===null?wf(t,null,n,r):zi(t,e.child,n,r)}function cu(e,t,n,r,i){n=n.render;var o=t.ref;return ln(t,i),r=As(e,t,n,r,o,i),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,We(e,t,i)):(t.flags|=1,fe(e,t,r,i),t.child)}function fu(e,t,n,r,i,o){if(e===null){var l=n.type;return typeof l=="function"&&!Qs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Of(e,t,l,r,i,o)):(e=vi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return l=e.child,(i&o)===0&&(i=l.memoizedProps,n=n.compare,n=n!==null?n:vr,n(i,r)&&e.ref===t.ref)?We(e,t,o):(t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e)}function Of(e,t,n,r,i,o){if(e!==null&&vr(e.memoizedProps,r)&&e.ref===t.ref)if(Ne=!1,(o&i)!==0)(e.flags&16384)!==0&&(Ne=!0);else return t.lanes=e.lanes,We(e,t,o);return Pl(e,t,n,r,o)}function Vo(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)===0)t.memoizedState={baseLanes:0},ei(t,n);else if((n&1073741824)!==0)t.memoizedState={baseLanes:0},ei(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},ei(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ei(t,r);return fe(e,t,i,n),t.child}function Lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function Pl(e,t,n,r,i){var o=he(n)?jt:le.current;return o=hn(t,o),ln(t,i),n=As(e,t,n,r,o,i),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,We(e,t,i)):(t.flags|=1,fe(e,t,n,i),t.child)}function du(e,t,n,r,i){if(he(n)){var o=!0;di(t)}else o=!1;if(ln(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),vf(t,n,r),xl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?jt:le.current,u=hn(t,u));var v=n.getDerivedStateFromProps,w=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ru(t,l,r,u),Ze=!1;var h=t.memoizedState;l.state=h,kr(t,r,l,i),a=t.memoizedState,s!==r||h!==a||pe.current||Ze?(typeof v=="function"&&(Ri(t,n,v,r),a=t.memoizedState),(s=Ze||nu(t,n,s,r,h,a,u))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4)):(typeof l.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{l=t.stateNode,mf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Le(t.type,s),l.props=u,w=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=he(n)?jt:le.current,a=hn(t,a));var g=n.getDerivedStateFromProps;(v=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==w||h!==a)&&ru(t,l,r,a),Ze=!1,h=t.memoizedState,l.state=h,kr(t,r,l,i);var k=t.memoizedState;s!==w||h!==k||pe.current||Ze?(typeof g=="function"&&(Ri(t,n,g,r),k=t.memoizedState),(u=Ze||nu(t,n,u,r,h,k,a))?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Tl(e,t,n,r,o,i)}function Tl(e,t,n,r,i,o){Lf(e,t);var l=(t.flags&64)!==0;if(!r&&!l)return i&&Ga(t,n,!1),We(e,t,o);r=t.stateNode,dh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=zi(t,e.child,null,o),t.child=zi(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,i&&Ga(t,n,!0),t.child}function pu(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),_l(e,t.containerInfo)}var Jr={dehydrated:null,retryLane:0};function hu(e,t,n){var r=t.pendingProps,i=W.current,o=!1,l;return(l=(t.flags&64)!==0)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Q(W,i&1),e===null?(r.fallback!==void 0&&El(t),e=r.children,i=r.fallback,o?(e=mu(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Jr,e):typeof r.unstable_expectedLoadTime=="number"?(e=mu(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Jr,t.lanes=33554432,e):(n=Ys({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=vu(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Jr,r):(n=gu(e,t,r.children,n),t.memoizedState=null,n):o?(r=vu(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Jr,r):(n=gu(e,t,r.children,n),t.memoizedState=null,n)}function mu(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)===0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=Ys(t,i,0,null),n=cn(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function gu(e,t,n,r){var i=e.child;return e=i.sibling,n=wt(i,{mode:"visible",children:n}),(t.mode&2)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function vu(e,t,n,r,i){var o=t.mode,l=e.child;e=l.sibling;var s={mode:"hidden",children:n};return(o&2)===0&&t.child!==l?(n=t.child,n.childLanes=0,n.pendingProps=s,l=n.lastEffect,l!==null?(t.firstEffect=n.firstEffect,t.lastEffect=l,l.nextEffect=null):t.firstEffect=t.lastEffect=null):n=wt(l,s),e!==null?r=wt(e,r):(r=cn(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function yu(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),hf(e.return,t)}function $o(e,t,n,r,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i,l.lastEffect=o)}function wu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=W.current,(r&2)!==0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yu(e,n);else if(e.tag===19)yu(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(W,r),(t.mode&2)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$o(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$o(t,!0,n,null,o,t.lastEffect);break;case"together":$o(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function We(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(n&t.childLanes)!==0){if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var If,Ol,Nf,Rf;If=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ol=function(){};Nf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(De.current);var o=null;switch(n){case"input":i=tl(e,i),r=tl(e,r),o=[];break;case"option":i=il(e,i),r=il(e,r),o=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":i=ol(e,i),r=ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}al(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&D("scroll",e),o||s===a||(o=[])):typeof a=="object"&&a!==null&&a.$$typeof===ps?a.toString():(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Rf=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ph(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return he(t.type)&&Oi(),null;case 3:return gn(),b(pe),b(le),Ms(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Ol(t),null;case 5:js(t);var i=Nt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(x(166));return null}if(e=Nt(De.current),Zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tt]=t,r[Ti]=o,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(e=0;e<Hn.length;e++)D(Hn[e],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":wa(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Sa(r,o),D("invalid",r)}al(n,o),e=null;for(var l in o)o.hasOwnProperty(l)&&(i=o[l],l==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):cr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&D("scroll",r));switch(n){case"input":Qr(r),ka(r,o,!0);break;case"textarea":Qr(r),xa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Pi)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(l=i.nodeType===9?i:i.ownerDocument,e===ll.html&&(e=Ec(n)),e===ll.html?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tt]=t,e[Ti]=r,If(e,t,!1,!1),t.stateNode=e,l=ul(n,r),n){case"dialog":D("cancel",e),D("close",e),i=r;break;case"iframe":case"object":case"embed":D("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hn.length;i++)D(Hn[i],e);i=r;break;case"source":D("error",e),i=r;break;case"img":case"image":case"link":D("error",e),D("load",e),i=r;break;case"details":D("toggle",e),i=r;break;case"input":wa(e,r),i=tl(e,r),D("invalid",e);break;case"option":i=il(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),D("invalid",e);break;case"textarea":Sa(e,r),i=ol(e,r),D("invalid",e);break;default:i=r}al(n,i);var s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Tc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&fr(e,a):typeof a=="number"&&fr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&D("scroll",e):a!=null&&ss(e,o,a,l))}switch(n){case"input":Qr(e),ka(e,r,!1);break;case"textarea":Qr(e),xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pi)}of(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Rf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));n=Nt(xr.current),Nt(De.current),Zr(t)?(r=t.stateNode,n=t.memoizedProps,r[tt]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r)}return null;case 13:return b(W),r=t.memoizedState,(t.flags&64)!==0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Zr(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!==0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(W.current&1)!==0?te===0&&(te=3):((te===0||te===3)&&(te=4),ae===null||(Fr&134217727)===0&&(_n&134217727)===0||an(ae,oe))),(r||n)&&(t.flags|=4),null);case 4:return gn(),Ol(t),e===null&&tf(t.stateNode.containerInfo),null;case 10:return Rs(t),null;case 17:return he(t.type)&&Oi(),null;case 19:if(b(W),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!==0,l=r.rendering,l===null)if(o)An(r,!1);else{if(te!==0||e!==null&&(e.flags&64)!==0)for(e=t.child;e!==null;){if(l=ji(e),l!==null){for(t.flags|=64,An(r,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(W,W.current&1|2),t.child}e=e.sibling}r.tail!==null&&ie()>jl&&(t.flags|=64,o=!0,An(r,!1),t.lanes=33554432)}else{if(!o)if(e=ji(l),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!be)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*ie()-r.renderingStartTime>jl&&n!==1073741824&&(t.flags|=64,o=!0,An(r,!1),t.lanes=33554432);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=ie(),n.sibling=null,t=W.current,Q(W,o?t&1|2:t&1),n):null;case 23:case 24:return Ws(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(x(156,t.tag))}function hh(e){switch(e.tag){case 1:he(e.type)&&Oi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(gn(),b(pe),b(le),Ms(),t=e.flags,(t&64)!==0)throw Error(x(285));return e.flags=t&-4097|64,e;case 5:return js(e),null;case 13:return b(W),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return b(W),null;case 4:return gn(),null;case 10:return Rs(e),null;case 23:case 24:return Ws(),null;default:return null}}function Vs(e,t){try{var n="",r=t;do n+=qd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Ll(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mh=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vi||(Vi=!0,Ml=r),Ll(e,t)},n}function jf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Ll(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Ae===null?Ae=new Set([this]):Ae.add(this),Ll(e,t));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}var gh=typeof WeakSet=="function"?WeakSet:Set;function ku(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){pt(e,n)}else t.current=null}function vh(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Le(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Os(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(x(163))}function yh(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(Bf(n,e),Ph(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&tu(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}tu(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&of(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Ac(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(x(163))}function Su(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Pc("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function xu(e,t){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ls,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)Bf(t,n);else{r=t;try{i()}catch(o){pt(r,o)}}n=n.next}while(n!==e)}break;case 1:if(ku(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){pt(t,o)}break;case 5:ku(t);break;case 4:Mf(e,t)}}function _u(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Eu(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:{for(var t=e.return;t!==null;){if(Eu(t))break e;t=t.return}throw Error(x(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(x(161))}n.flags&16&&(fr(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Eu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Il(e,n,t):Nl(e,n,t)}function Il(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Nl(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function Mf(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(x(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var l=e,s=n,a=s;;)if(xu(l,a),a.child!==null&&a.tag!==4)a.child.return=a,a=a.child;else{if(a===s)break e;for(;a.sibling===null;){if(a.return===null||a.return===s)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}o?(l=i,s=n.stateNode,l.nodeType===8?l.parentNode.removeChild(s):l.removeChild(s)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(xu(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Bo(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Ti]=r,e==="input"&&r.type==="radio"&&r.name!=null&&xc(n,r),ul(e,i),t=ul(e,r),i=0;i<o.length;i+=2){var l=o[i],s=o[i+1];l==="style"?Tc(n,s):l==="dangerouslySetInnerHTML"?Cc(n,s):l==="children"?fr(n,s):ss(n,l,s,t)}switch(e){case"input":nl(n,r);break;case"textarea":_c(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?tn(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?tn(n,!!r.multiple,r.defaultValue,!0):tn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(x(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,Ac(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Hs=ie(),Su(t.child,!0)),Pu(t);return;case 19:Pu(t);return;case 17:return;case 23:case 24:Su(t,t.memoizedState!==null);return}throw Error(x(163))}function Pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gh),t.forEach(function(r){var i=Lh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wh(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var kh=Math.ceil,Ui=bt.ReactCurrentDispatcher,$s=bt.ReactCurrentOwner,N=0,ae=null,K=null,oe=0,Ft=0,Rl=kt(0),te=0,uo=null,xn=0,Fr=0,_n=0,Bs=0,zl=null,Hs=0,jl=1/0;function En(){jl=ie()+500}var T=null,Vi=!1,Ml=null,Ae=null,yt=!1,rr=null,Wn=90,Fl=[],Al=[],Qe=null,ir=0,Dl=null,hi=-1,Be=0,mi=0,or=null,gi=!1;function ge(){return(N&48)!==0?ie():hi!==-1?hi:hi=ie()}function ft(e){if(e=e.mode,(e&2)===0)return 1;if((e&4)===0)return mn()===99?1:2;if(Be===0&&(Be=xn),sh.transition!==0){mi!==0&&(mi=zl!==null?zl.pendingLanes:0),e=Be;var t=4186112&~mi;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=mn(),(N&4)!==0&&e===98?e=Ei(12,Be):(e=cp(e),e=Ei(e,Be)),e}function dt(e,t,n){if(50<ir)throw ir=0,Dl=null,Error(x(185));if(e=co(e,t),e===null)return null;no(e,t,n),e===ae&&(_n|=t,te===4&&an(e,oe));var r=mn();t===1?(N&8)!==0&&(N&48)===0?bl(e):(Ce(e,n),N===0&&(En(),Ue())):((N&4)===0||r!==98&&r!==99||(Qe===null?Qe=new Set([e]):Qe.add(e)),Ce(e,n)),zl=e}function co(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function Ce(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-gt(l),a=1<<s,u=o[s];if(u===-1){if((a&r)===0||(a&i)!==0){u=t,Qt(a);var v=A;o[s]=10<=v?u+250:6<=v?u+5e3:-1}}else u<=t&&(e.expiredLanes|=a);l&=~a}if(r=mr(e,e===ae?oe:0),t=A,r===0)n!==null&&(n!==Do&&kl(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==Do&&kl(n)}t===15?(n=bl.bind(null,e),$e===null?($e=[n],pi=Is(so,pf)):$e.push(n),n=Do):t===14?n=wr(99,bl.bind(null,e)):(n=fp(t),n=wr(n,Ff.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Ff(e){if(hi=-1,mi=Be=0,(N&48)!==0)throw Error(x(327));var t=e.callbackNode;if(St()&&e.callbackNode!==t)return null;var n=mr(e,e===ae?oe:0);if(n===0)return null;var r=n,i=N;N|=16;var o=Uf();(ae!==e||oe!==r)&&(En(),un(e,r));do try{_h();break}catch(s){bf(e,s)}while(1);if(Ns(),Ui.current=o,N=i,K!==null?r=0:(ae=null,oe=0,r=te),(xn&_n)!==0)un(e,0);else if(r!==0){if(r===2&&(N|=64,e.hydrate&&(e.hydrate=!1,Os(e.containerInfo)),n=Hc(e),n!==0&&(r=Qn(e,n))),r===1)throw t=uo,un(e,0),an(e,n),Ce(e,ie()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(x(345));case 2:Pt(e);break;case 3:if(an(e,n),(n&62914560)===n&&(r=Hs+500-ie(),10<r)){if(mr(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(Pt.bind(null,e),r);break}Pt(e);break;case 4:if(an(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var l=31-gt(n);o=1<<l,l=r[l],l>i&&(i=l),n&=~o}if(n=i,n=ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*kh(n/1960))-n,10<n){e.timeoutHandle=Ya(Pt.bind(null,e),n);break}Pt(e);break;case 5:Pt(e);break;default:throw Error(x(329))}}return Ce(e,ie()),e.callbackNode===t?Ff.bind(null,e):null}function an(e,t){for(t&=~Bs,t&=~_n,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function bl(e){if((N&48)!==0)throw Error(x(327));if(St(),e===ae&&(e.expiredLanes&oe)!==0){var t=oe,n=Qn(e,t);(xn&_n)!==0&&(t=mr(e,t),n=Qn(e,t))}else t=mr(e,0),n=Qn(e,t);if(e.tag!==0&&n===2&&(N|=64,e.hydrate&&(e.hydrate=!1,Os(e.containerInfo)),t=Hc(e),t!==0&&(n=Qn(e,t))),n===1)throw n=uo,un(e,0),an(e,t),Ce(e,ie()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e),Ce(e,ie()),null}function Sh(){if(Qe!==null){var e=Qe;Qe=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,Ce(t,ie())})}Ue()}function Af(e,t){var n=N;N|=1;try{return e(t)}finally{N=n,N===0&&(En(),Ue())}}function Df(e,t){var n=N;N&=-2,N|=8;try{return e(t)}finally{N=n,N===0&&(En(),Ue())}}function ei(e,t){Q(Rl,Ft),Ft|=t,xn|=t}function Ws(){Ft=Rl.current,b(Rl)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,th(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oi();break;case 3:gn(),b(pe),b(le),Ms();break;case 5:js(r);break;case 4:gn();break;case 13:b(W);break;case 19:b(W);break;case 10:Rs(r);break;case 23:case 24:Ws()}n=n.return}ae=e,K=wt(e.current,null),oe=Ft=xn=t,te=0,uo=null,Bs=_n=Fr=0}function bf(e,t){do{var n=K;try{if(Ns(),tr.current=bi,Mi){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mi=!1}if(_r=0,ee=re=q=null,nr=!1,$s.current=null,n===null||n.return===null){te=1,uo=t,K=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=oe,s.flags|=2048,s.firstEffect=s.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a;if((s.mode&2)===0){var v=s.alternate;v?(s.updateQueue=v.updateQueue,s.memoizedState=v.memoizedState,s.lanes=v.lanes):(s.updateQueue=null,s.memoizedState=null)}var w=(W.current&1)!==0,h=l;do{var g;if(g=h.tag===13){var k=h.memoizedState;if(k!==null)g=k.dehydrated!==null;else{var y=h.memoizedProps;g=y.fallback===void 0?!1:y.unstable_avoidThisFallback!==!0?!0:!w}}if(g){var f=h.updateQueue;if(f===null){var c=new Set;c.add(u),h.updateQueue=c}else f.add(u);if((h.mode&2)===0){if(h.flags|=64,s.flags|=16384,s.flags&=-2981,s.tag===1)if(s.alternate===null)s.tag=17;else{var d=ut(-1,1);d.tag=2,ct(s,d)}s.lanes|=1;break e}a=void 0,s=t;var p=o.pingCache;if(p===null?(p=o.pingCache=new mh,a=new Set,p.set(u,a)):(a=p.get(u),a===void 0&&(a=new Set,p.set(u,a))),!a.has(s)){a.add(s);var m=Oh.bind(null,o,u,s);u.then(m,m)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(h!==null);a=Error((en(s.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}te!==5&&(te=2),a=Vs(a,s),h=l;do{switch(h.tag){case 3:o=a,h.flags|=4096,t&=-t,h.lanes|=t;var O=zf(h,o,t);eu(h,O);break e;case 1:o=a;var S=h.type,C=h.stateNode;if((h.flags&64)===0&&(typeof S.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ae===null||!Ae.has(C)))){h.flags|=4096,t&=-t,h.lanes|=t;var L=jf(h,o,t);eu(h,L);break e}}h=h.return}while(h!==null)}$f(n)}catch(P){t=P,K===n&&n!==null&&(K=n=n.return);continue}break}while(1)}function Uf(){var e=Ui.current;return Ui.current=bi,e===null?bi:e}function Qn(e,t){var n=N;N|=16;var r=Uf();ae===e&&oe===t||un(e,t);do try{xh();break}catch(i){bf(e,i)}while(1);if(Ns(),N=n,Ui.current=r,K!==null)throw Error(x(261));return ae=null,oe=0,te}function xh(){for(;K!==null;)Vf(K)}function _h(){for(;K!==null&&!ih();)Vf(K)}function Vf(e){var t=Hf(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?$f(e):K=t,$s.current=null}function $f(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)===0){if(n=ph(n,t,Ft),n!==null){K=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ft&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)===0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=hh(t),n!==null){n.flags&=2047,K=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);te===0&&(te=5)}function Pt(e){var t=mn();return Mt(99,Eh.bind(null,e,t)),null}function Eh(e,t){do St();while(rr!==null);if((N&48)!==0)throw Error(x(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var l=e.eventTimes,s=e.expirationTimes;0<o;){var a=31-gt(o),u=1<<a;i[a]=0,l[a]=-1,s[a]=-1,o&=~u}if(Qe!==null&&(r&24)===0&&Qe.has(e)&&Qe.delete(e),e===ae&&(K=ae=null,oe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=N,N|=32,$s.current=null,Mo=ui,l=Ua(),ml(l)){if("selectionStart"in l)s={start:l.selectionStart,end:l.selectionEnd};else e:if(s=(s=l.ownerDocument)&&s.defaultView||window,(u=s.getSelection&&s.getSelection())&&u.rangeCount!==0){s=u.anchorNode,o=u.anchorOffset,a=u.focusNode,u=u.focusOffset;try{s.nodeType,a.nodeType}catch{s=null;break e}var v=0,w=-1,h=-1,g=0,k=0,y=l,f=null;t:for(;;){for(var c;y!==s||o!==0&&y.nodeType!==3||(w=v+o),y!==a||u!==0&&y.nodeType!==3||(h=v+u),y.nodeType===3&&(v+=y.nodeValue.length),(c=y.firstChild)!==null;)f=y,y=c;for(;;){if(y===l)break t;if(f===s&&++g===o&&(w=v),f===a&&++k===u&&(h=v),(c=y.nextSibling)!==null)break;y=f,f=y.parentNode}y=c}s=w===-1||h===-1?null:{start:w,end:h}}else s=null;s=s||{start:0,end:0}}else s=null;Fo={focusedElem:l,selectionRange:s},ui=!1,or=null,gi=!1,T=r;do try{Ch()}catch(P){if(T===null)throw Error(x(330));pt(T,P),T=T.nextEffect}while(T!==null);or=null,T=r;do try{for(l=e;T!==null;){var d=T.flags;if(d&16&&fr(T.stateNode,""),d&128){var p=T.alternate;if(p!==null){var m=p.ref;m!==null&&(typeof m=="function"?m(null):m.current=null)}}switch(d&1038){case 2:Cu(T),T.flags&=-3;break;case 6:Cu(T),T.flags&=-3,Bo(T.alternate,T);break;case 1024:T.flags&=-1025;break;case 1028:T.flags&=-1025,Bo(T.alternate,T);break;case 4:Bo(T.alternate,T);break;case 8:s=T,Mf(l,s);var O=s.alternate;_u(s),O!==null&&_u(O)}T=T.nextEffect}}catch(P){if(T===null)throw Error(x(330));pt(T,P),T=T.nextEffect}while(T!==null);if(m=Fo,p=Ua(),d=m.focusedElem,l=m.selectionRange,p!==d&&d&&d.ownerDocument&&Zc(d.ownerDocument.documentElement,d)){for(l!==null&&ml(d)&&(p=l.start,m=l.end,m===void 0&&(m=p),"selectionStart"in d?(d.selectionStart=p,d.selectionEnd=Math.min(m,d.value.length)):(m=(p=d.ownerDocument||document)&&p.defaultView||window,m.getSelection&&(m=m.getSelection(),s=d.textContent.length,O=Math.min(l.start,s),l=l.end===void 0?O:Math.min(l.end,s),!m.extend&&O>l&&(s=l,l=O,O=s),s=ba(d,O),o=ba(d,l),s&&o&&(m.rangeCount!==1||m.anchorNode!==s.node||m.anchorOffset!==s.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)&&(p=p.createRange(),p.setStart(s.node,s.offset),m.removeAllRanges(),O>l?(m.addRange(p),m.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),m.addRange(p)))))),p=[],m=d;m=m.parentNode;)m.nodeType===1&&p.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<p.length;d++)m=p[d],m.element.scrollLeft=m.left,m.element.scrollTop=m.top}ui=!!Mo,Fo=Mo=null,e.current=n,T=r;do try{for(d=e;T!==null;){var S=T.flags;if(S&36&&yh(d,T.alternate,T),S&128){p=void 0;var C=T.ref;if(C!==null){var L=T.stateNode;switch(T.tag){case 5:p=L;break;default:p=L}typeof C=="function"?C(p):C.current=p}}T=T.nextEffect}}catch(P){if(T===null)throw Error(x(330));pt(T,P),T=T.nextEffect}while(T!==null);T=null,lh(),N=i}else e.current=n;if(yt)yt=!1,rr=e,Wn=t;else for(T=r;T!==null;)t=T.nextEffect,T.nextEffect=null,T.flags&8&&(S=T,S.sibling=null,S.stateNode=null),T=t;if(r=e.pendingLanes,r===0&&(Ae=null),r===1?e===Dl?ir++:(ir=0,Dl=e):ir=0,n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ls,n,void 0,(n.current.flags&64)===64)}catch{}if(Ce(e,ie()),Vi)throw Vi=!1,e=Ml,Ml=null,e;return(N&8)!==0||Ue(),null}function Ch(){for(;T!==null;){var e=T.alternate;gi||or===null||((T.flags&8)!==0?Ca(T,or)&&(gi=!0):T.tag===13&&wh(e,T)&&Ca(T,or)&&(gi=!0));var t=T.flags;(t&256)!==0&&vh(e,T),(t&512)===0||yt||(yt=!0,wr(97,function(){return St(),null})),T=T.nextEffect}}function St(){if(Wn!==90){var e=97<Wn?97:Wn;return Wn=90,Mt(e,Th)}return!1}function Ph(e,t){Fl.push(t,e),yt||(yt=!0,wr(97,function(){return St(),null}))}function Bf(e,t){Al.push(t,e),yt||(yt=!0,wr(97,function(){return St(),null}))}function Th(){if(rr===null)return!1;var e=rr;if(rr=null,(N&48)!==0)throw Error(x(331));var t=N;N|=32;var n=Al;Al=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],l=i.destroy;if(i.destroy=void 0,typeof l=="function")try{l()}catch(a){if(o===null)throw Error(x(330));pt(o,a)}}for(n=Fl,Fl=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var s=i.create;i.destroy=s()}catch(a){if(o===null)throw Error(x(330));pt(o,a)}}for(s=e.current.firstEffect;s!==null;)e=s.nextEffect,s.nextEffect=null,s.flags&8&&(s.sibling=null,s.stateNode=null),s=e;return N=t,Ue(),!0}function Tu(e,t,n){t=Vs(n,t),t=zf(e,t,1),ct(e,t),t=ge(),e=co(e,1),e!==null&&(no(e,1,t),Ce(e,t))}function pt(e,t){if(e.tag===3)Tu(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r))){e=Vs(t,e);var i=jf(n,e,1);if(ct(n,i),i=ge(),n=co(n,1),n!==null)no(n,1,i),Ce(n,i);else if(typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function Oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(oe&n)===n&&(te===4||te===3&&(oe&62914560)===oe&&500>ie()-Hs?un(e,0):Bs|=n),Ce(e,t)}function Lh(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)===0?t=1:(t&4)===0?t=mn()===99?1:2:(Be===0&&(Be=xn),t=Yt(62914560&~Be),t===0&&(t=4194304))),n=ge(),e=co(e,t),e!==null&&(no(e,t,n),Ce(e,n))}var Hf;Hf=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)Ne=!0;else if((n&r)!==0)Ne=(e.flags&16384)!==0;else{switch(Ne=!1,t.tag){case 3:pu(t),Uo();break;case 5:iu(t);break;case 1:he(t.type)&&di(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Q(Li,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!==0?hu(e,t,n):(Q(W,W.current&1),t=We(e,t,n),t!==null?t.sibling:null);Q(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&64)!==0){if(r)return wu(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(W,W.current),r)break;return null;case 23:case 24:return t.lanes=0,Vo(e,t,n)}return We(e,t,n)}else Ne=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=hn(t,le.current),ln(t,n),i=As(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)){var o=!0;di(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zs(t);var l=r.getDerivedStateFromProps;typeof l=="function"&&Ri(t,r,l,e),i.updater=ao,t.stateNode=i,i._reactInternals=t,xl(t,r,e,n),t=Tl(null,t,r,!0,o,n)}else t.tag=0,fe(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Nh(i),e=Le(i,e),o){case 0:t=Pl(null,t,i,e,n);break e;case 1:t=du(null,t,i,e,n);break e;case 11:t=cu(null,t,i,e,n);break e;case 14:t=fu(null,t,i,Le(i.type,e),r,n);break e}throw Error(x(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),Pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),du(e,t,r,i,n);case 3:if(pu(t),r=t.updateQueue,e===null||r===null)throw Error(x(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,mf(e,t),kr(t,r,null,n),r=t.memoizedState.element,r===i)Uo(),t=We(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(nt=on(t.stateNode.containerInfo.firstChild),He=t,o=be=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],sn.push(o);for(n=wf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else fe(e,t,r,n),Uo();t=t.child}return t;case 5:return iu(t),e===null&&El(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yl(r,i)?l=null:o!==null&&yl(r,o)&&(t.flags|=16),Lf(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&El(t),null;case 13:return hu(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),cu(e,t,r,i,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value;var s=t.type._context;if(Q(Li,s._currentValue),s._currentValue=o,l!==null)if(s=l.value,o=we(s,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(s,o):1073741823)|0,o===0){if(l.children===i.children&&!pe.current){t=We(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!==0){s.tag===1&&(u=ut(-1,n&-n),u.tag=2,ct(s,u)),s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hf(s.return,n),a.lanes|=n;break}u=u.next}}else l=s.tag===10&&s.type===t.type?null:s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,ln(t,n),i=Ee(i,o.unstable_observedBits),r=r(i),t.flags|=1,fe(e,t,r,n),t.child;case 14:return i=t.type,o=Le(i,t.pendingProps),o=Le(i.type,o),fu(e,t,i,o,r,n);case 15:return Of(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Le(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,he(r)?(e=!0,di(t)):e=!1,ln(t,n),vf(t,r,i),xl(t,r,i,n),Tl(null,t,r,!0,e,n);case 19:return wu(e,t,n);case 23:return Vo(e,t,n);case 24:return Vo(e,t,n)}throw Error(x(156,t.tag))};function Ih(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Ih(e,t,n,r)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nh(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===eo)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Qs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Je:return cn(n.children,i,o,t);case wc:l=8,i|=16;break;case as:l=8,i|=1;break;case qn:return e=ke(12,n,t,i|8),e.elementType=qn,e.type=qn,e.lanes=o,e;case Xn:return e=ke(13,n,t,i),e.type=Xn,e.elementType=Xn,e.lanes=o,e;case ki:return e=ke(19,n,t,i),e.elementType=ki,e.lanes=o,e;case hs:return Ys(n,i,o,t);case el:return e=ke(24,n,t,i),e.elementType=el,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:l=10;break e;case cs:l=9;break e;case Ji:l=11;break e;case eo:l=14;break e;case fs:l=16,r=null;break e;case ds:l=22;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=ke(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cn(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function Ys(e,t,n,r){return e=ke(23,e,r,t),e.elementType=hs,e.lanes=n,e}function Ho(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Wo(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rh(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Oo(0),this.expirationTimes=Oo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oo(0),this.mutableSourceEagerHydrationData=null}function zh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $i(e,t,n,r){var i=t.current,o=ge(),l=ft(i);e:if(n){n=n._reactInternals;t:{if(Ut(n)!==n||n.tag!==1)throw Error(x(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(he(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(s!==null);throw Error(x(171))}if(n.tag===1){var a=n.type;if(he(a)){n=sf(n,a,s);break e}}n=s}else n=vt;return t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),ct(i,t),dt(i,l,o),l}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qs(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function jh(){return null}function Xs(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new Rh(e,t,n!=null&&n.hydrate===!0),t=ke(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,zs(t),e[Sn]=n.current,tf(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}Xs.prototype.render=function(e){$i(e,this._internalRoot,null,null)};Xs.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;$i(null,e,null,function(){t[Sn]=null})};function Ar(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mh(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Xs(e,0,t?{hydrate:!0}:void 0)}function fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o._internalRoot;if(typeof i=="function"){var s=i;i=function(){var u=Qo(l);s.call(u)}}$i(t,l,e,i)}else{if(o=n._reactRootContainer=Mh(n,r),l=o._internalRoot,typeof i=="function"){var a=i;i=function(){var u=Qo(l);a.call(u)}}Df(function(){$i(t,l,e,i)})}return Qo(l)}jc=function(e){if(e.tag===13){var t=ge();dt(e,4,t),qs(e,4)}};ws=function(e){if(e.tag===13){var t=ge();dt(e,67108864,t),qs(e,67108864)}};Mc=function(e){if(e.tag===13){var t=ge(),n=ft(e);dt(e,n,t),qs(e,n)}};Fc=function(e,t){return t()};cl=function(e,t,n){switch(t){case"input":if(nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=lo(r);if(!i)throw Error(x(90));Sc(r),nl(r,i)}}}break;case"textarea":_c(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};gs=Af;Ic=function(e,t,n,r,i){var o=N;N|=4;try{return Mt(98,e.bind(null,t,n,r,i))}finally{N=o,N===0&&(En(),Ue())}};vs=function(){(N&49)===0&&(Sh(),St())};Nc=function(e,t){var n=N;N|=2;try{return e(t)}finally{N=n,N===0&&(En(),Ue())}};function Wf(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ar(t))throw Error(x(200));return zh(e,t,null,n)}var Fh={Events:[jr,Gt,lo,Oc,Lc,St,{current:!1}]},Dn={findFiberByHostInstance:It,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Ah={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{Ls=ti.inject(Ah),zt=ti}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fh;Pe.createPortal=Wf;Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):Error(x(268,Object.keys(e)));return e=zc(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e,t){var n=N;if((n&48)!==0)return e(t);N|=1;try{if(e)return Mt(99,e.bind(null,t))}finally{N=n,Ue()}};Pe.hydrate=function(e,t,n){if(!Ar(t))throw Error(x(200));return fo(null,e,t,!0,n)};Pe.render=function(e,t,n){if(!Ar(t))throw Error(x(200));return fo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Ar(e))throw Error(x(40));return e._reactRootContainer?(Df(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};Pe.unstable_batchedUpdates=Af;Pe.unstable_createPortal=function(e,t){return Wf(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ar(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return fo(e,t,n,!1,r)};Pe.version="17.0.2";function Qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qf)}catch(e){console.error(e)}}Qf(),is.exports=Pe;var Dh=is.exports;var bh="/apologyweb/assets/section-1.f4e67de0.webp",Uh="/apologyweb/assets/section-2.f3b2309d.webp",Vh="/apologyweb/assets/section-3.b9c84358.webp",$h="/apologyweb/assets/bear.0ed4f052.gif",Bh="/apologyweb/assets/rain1.59614c6d.mp3",Hh="/apologyweb/assets/letter.a0ea524d.mp3",Ks={exports:{}},Dr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=I.exports,Yf=60103;Dr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Lu=Symbol.for;Yf=Lu("react.element"),Dr.Fragment=Lu("react.fragment")}var Qh=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yh=Object.prototype.hasOwnProperty,qh={key:!0,ref:!0,__self:!0,__source:!0};function qf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yh.call(t,r)&&!qh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yf,type:e,key:o,ref:l,props:i,_owner:Qh.current}}Dr.jsx=qf;Dr.jsxs=qf;Ks.exports=Dr;const j=Ks.exports.jsx,ni=Ks.exports.jsxs,Xh=()=>{const e=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Special Message</title>
    <style type="text/css">
        @import "compass/reset";

        .stars, .twinkling, .clouds {
            position: absolute;
            display: block;
            top: 0; bottom: 0;
            left: 0; right: 0;
            width: 100%; height: 100%;
        }

        .stars {
            z-index: 0;
            background: #000 url('https://i.ibb.co/g91MwKZ/stars.png') repeat top center;
        }

        .twinkling {
            z-index: 1;
            background: transparent url('https://i.ibb.co/pnJQm6V/twinkling.png') repeat top center;
            animation: move-twink-back 200s linear infinite;
        }

        .clouds {
            z-index: 2;
            background: transparent url('https://i.ibb.co/BsG8rYZ/clouds.png') repeat top center;
            animation: move-clouds-back 200s linear infinite;
        }

        @keyframes move-twink-back {
            from { background-position: 0 0; }
            to { background-position: -10000px 5000px; }
        }

        @keyframes move-clouds-back {
            from { background-position: 0 0; }
            to { background-position: 10000px 0; }
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
        }
        @media (min-width: 300px) and (max-width: 600px) {
        html, body {
            height: 100%;
            padding-top: 200px;
        }
}
        body {
            width: 100%;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        @media (max-height: 500px) {
            body {
                margin: 25% 0 25% 0;
            }
        }

        .envelop {
            width: 15rem;
            height: 10rem;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }

        @media (min-width: 400px) and (max-width: 600px) {
            .envelop {
                width: 20rem;
                height: 15rem;
            }
        }

        @media (min-width: 600px) {
            .envelop {
                width: 25rem;
                height: 20rem;
            }
        }

        @media (min-width: 600px) and (min-height: 600px) {
            .envelop {
                bottom: 20%;
            }
        }

        .envelop__front-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            border: 0.35rem solid #967b5c;
            background-color: #ba9872;
            clip-path: polygon(100% 0%, 50% 70%, 0% 0%, 0% 100%, 100% 100%);
            z-index: 300;
        }

        .envelop__back-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            border-radius: 0.7rem;
            background-color: #967b5c;
            clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 90%);
            z-index: 100;
        }

        .envelop__up-paper {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: relative;
            border-radius: 0.7rem;
            background-color: #967b5c;
            z-index: 400;
            clip-path: polygon(0% 0%, 100% 0%, 50% 81%);
        }

        .envelop__sticker {
            width: 100%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 400;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__sticker {
                height: 15%;
            }
        }

        .envelop__false-sticker {
            width: 20%;
            height: 20%;
            position: absolute;
            margin: auto;
            top: 30%;
            left: 80%;
            bottom: 0;
            right: 0;
            z-index: 300;
            background-image: url("https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png");
            background-color: #f9f9f9;
            border: 0.3rem solid #e2e2e2;
            background-size: 2rem;
            background-position: center;
        }

        @media (max-width: 400px) {
            .envelop__false-sticker {
                background-size: 1.2rem;
            }
        }

        @media (min-width: 600px) {
            .envelop__false-sticker {
                height: 15%;
            }
        }

        .envelop__content {
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
            z-index: 200;
        }

        .love-notes {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: left;
        }

        .note {
            width: 95%;
            height: 30%;
            background-color: #f9f9f9;
            position: absolute;
            overflow: hidden;
            transition: height 0.5s, opacity 0.25s;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        }

        .note:nth-child(1) {
            bottom: 64%;
        }

        .note:nth-child(2) {
            bottom: 42%;
        }

        .note:nth-child(3) {
            bottom: 20%;
        }

        .note:hover {
            cursor: pointer;
            height: 50%;
        }

        .note__text {
            font-family: "Roboto";
            padding: 1rem;
        }

        .note__text p {
            font-size: 16px;
            margin-bottom: 1rem;
            text-align: left;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        @media (min-width: 300px) and (max-width: 600px) {
            .note__text p {
                font-size: 12px;
            }
        }

        @media (min-width: 600px) {
            .note__text p {
                font-size: 16px;
            }
        }

        .scissors {
            cursor: url("https://i.postimg.cc/GtLCdKxR/sisors.png"), pointer;
        }

        .scissors:active {
            cursor: url("https://i.postimg.cc/GtXQ7WPZ/pngwing-com.png"), pointer;
        }

        .cursor {
            cursor: pointer;
        }

        .heading {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 50px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        .sub-heading{
        position: absolute;
        padding-top:30px;
            top: 15%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 25px;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            z-index: 400;
            text-align: center;
        }
        @media (min-width: 300px) and (max-width: 600px) {
            .heading{
                font-size: 30px;
                top: 60%;
                
            }
            .sub-heading{
                font-size: 20px;
                top: 80%;
            }
        }
        @media (min-width: 595px) and (max-width: 1020px){
            .sub-heading{
            padding-top: 80px;
            }
        }
    </style>
</head>
<body class="scissors">
    <div class="stars">
        <div class="twinkling">
            <div class="clouds">
                <audio id="background-music" src="${Hh}"></audio>
                <div class="container-env">
                <div class="envelop">
                    <div class="envelop__front-paper"></div>
                    <div class="envelop__back-paper"></div>
                    <div class="envelop__up-paper js-up-paper"></div>
                    <div class="envelop__sticker js-sticker"></div>
                    <div class="envelop__false-sticker"></div>
                    <div class="envelop__content js-envelop-content">
                        <div class="love-notes">
                            <div class="note js-note">
                                <div class="note__text">
                                    <p> Hey x</p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi dictum, iaculis diam et, efficitur enim. Pellentesque placerat et sem in laoreet. Vivamus eleifend ultrices fringilla. Duis feugiat vulputate turpis vitae varius. Sed dapibus elit eget ligula tempus ultrices. Aenean vel nibh quam. Etiam interdum posuere mi id maximus. Nullam id eros id purus commodo malesuada.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi dictum, iaculis diam et, efficitur enim. Pellentesque placerat et sem in laoreet. Vivamus eleifend ultrices fringilla. Duis feugiat vulputate turpis vitae varius. Sed dapibus elit eget ligula tempus ultrices. Aenean vel nibh quam. Etiam interdum posuere mi id maximus. Nullam id eros id purus commodo malesuada.</p>
                                </div>
                            </div>
                            <div class="note js-note">
                                <div class="note__text">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi dictum, iaculis diam et, efficitur enim.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p >With all my heart</p>
                                    <p > your name </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="heading">A special message awaits</div>
    <div class="sub-heading">Click to Unwrap My Heartfelt Words</div>
    <script type="text/javascript">
        //->Made it by 1vanbrav0
        //Variables
        let mobile_media_query = window.matchMedia("(max-width: 400px)");
        let tablet_media_query = window.matchMedia("(min-width: 400px) and (max-width: 600px)");
        const notes = document.querySelectorAll(".js-note");
        const music = document.getElementById("background-music");

        //-> Function that resets the size of the notes.
        function recize_notes() {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                    notes[i].classList.remove("active");
                    gsap.set(notes[i], {
                        height: "30%",
                        clearProps: "all"
                    });
                }
            }
        }

        //-> Main function that enables all the notes.
        function notes_ready() {
            gsap.to(".js-envelop-content", {
                height: "125%",
                duration: 0.5
            });

            for (let i = 0; i < notes.length; i++) {
                notes[i].addEventListener("click", function () {
                    if (mobile_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 125 + 40 * i + "%"
                            });
                        }
                    } else if (tablet_media_query.matches) {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 80 + 21 * i + "%"
                            });
                        }
                    } else {
                        if (this.classList.contains("active")) {
                            this.classList.remove("active");
                            gsap.set(this, {
                                height: "30%",
                                clearProps: "all"
                            });
                        } else {
                            for (let i = 0; i < notes.length; i++) {
                                if (notes[i].classList.contains("active")) {
                                    notes[i].classList.remove("active");
                                    gsap.set(notes[i], {
                                        height: "30%",
                                        clearProps: "all"
                                    });
                                }
                            }
                            this.classList.add("active");
                            gsap.set(this, {
                                height: 70 + 20 * i + "%"
                            });
                        }
                    }
                });
            }
        }

        //-> Function that set up the up paper of the envelope.
        function set_up_paper() {
    var arr = [0, 0, 100, 0, 50, 61];
    gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath: "polygon(" +
            arr[0] + "%" +
            arr[1] + "%," +
            arr[2] + "%" +
            arr[3] + "%," +
            arr[4] + "%" +
            arr[5] + "%)",
        onComplete: notes_ready
    });
}


        //-> Function that starts the up paper transition.
        function envelop_transition() {
            gsap.to(".js-up-paper", {
                bottom: "1%",
                duration: 0.25,
                onComplete: set_up_paper
            });
            document.querySelector(".js-up-paper").removeEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.remove("cursor");

            // Play the background music when the envelope opens
            music.play();
        }

        //-> Function that allows cut the sticker.
        function sticker() {
            gsap.set(".js-sticker", { width: "20%", left: "-80%" });
            document.body.classList.remove("scissors");
            document.querySelector(".js-sticker").removeEventListener("click", sticker);
            document.querySelector(".js-up-paper").addEventListener("click", envelop_transition);
            document.querySelector(".js-up-paper").classList.add("cursor");
        }

        document.querySelector(".js-sticker").addEventListener("click", sticker);

        window.onresize = function (event) {
            recize_notes();
        };
    <\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>
</body>
</html>

  `;return j("div",{className:"preview-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"preview"})})};var Gs=Ur(),z=e=>br(e,Gs),Zs=Ur();z.write=e=>br(e,Zs);var po=Ur();z.onStart=e=>br(e,po);var Js=Ur();z.onFrame=e=>br(e,Js);var ea=Ur();z.onFinish=e=>br(e,ea);var fn=[];z.setTimeout=(e,t)=>{const n=z.now()+t,r=()=>{const o=fn.findIndex(l=>l.cancel==r);~o&&fn.splice(o,1),it-=~o?1:0},i={time:n,handler:e,cancel:r};return fn.splice(Xf(n),0,i),it+=1,Kf(),i};var Xf=e=>~(~fn.findIndex(t=>t.time>e)||~fn.length);z.cancel=e=>{po.delete(e),Js.delete(e),ea.delete(e),Gs.delete(e),Zs.delete(e)};z.sync=e=>{Ul=!0,z.batchedUpdates(e),Ul=!1};z.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,z.onStart(n)}return r.handler=e,r.cancel=()=>{po.delete(n),t=null},r};var ta=typeof window!="undefined"?window.requestAnimationFrame:()=>{};z.use=e=>ta=e;z.now=typeof performance!="undefined"?()=>performance.now():Date.now;z.batchedUpdates=e=>e();z.catch=console.error;z.frameLoop="always";z.advance=()=>{z.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Zf()};var rt=-1,it=0,Ul=!1;function br(e,t){Ul?(t.delete(e),e(0)):(t.add(e),Kf())}function Kf(){rt<0&&(rt=0,z.frameLoop!=="demand"&&ta(Gf))}function Kh(){rt=-1}function Gf(){~rt&&(ta(Gf),z.batchedUpdates(Zf))}function Zf(){const e=rt;rt=z.now();const t=Xf(rt);if(t&&(Jf(fn.splice(0,t),n=>n.handler()),it-=t),!it){Kh();return}po.flush(),Gs.flush(e?Math.min(64,rt-e):16.667),Js.flush(),Zs.flush(),ea.flush()}function Ur(){let e=new Set,t=e;return{add(n){it+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return it-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,it-=t.size,Jf(t,r=>r(n)&&e.add(r)),it+=e.size,t=e)}}}function Jf(e,t){e.forEach(n=>{try{t(n)}catch(r){z.catch(r)}})}var Gh=Object.defineProperty,Zh=(e,t)=>{for(var n in t)Gh(e,n,{get:t[n],enumerable:!0})},ze={};Zh(ze,{assign:()=>em,colors:()=>ht,createStringInterpolator:()=>ra,skipAnimation:()=>td,to:()=>ed,willAdvance:()=>ia});function Vl(){}var Jh=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),_={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function Ve(e,t){if(_.arr(e)){if(!_.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var H=(e,t)=>e.forEach(t);function qe(e,t,n){if(_.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var xe=e=>_.und(e)?[]:_.arr(e)?e:[e];function lr(e,t){if(e.size){const n=Array.from(e);e.clear(),H(n,t)}}var Yn=(e,...t)=>lr(e,n=>n(...t)),na=()=>typeof window=="undefined"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ra,ed,ht=null,td=!1,ia=Vl,em=e=>{e.to&&(ed=e.to),e.now&&(z.now=e.now),e.colors!==void 0&&(ht=e.colors),e.skipAnimation!=null&&(td=e.skipAnimation),e.createStringInterpolator&&(ra=e.createStringInterpolator),e.requestAnimationFrame&&z.use(e.requestAnimationFrame),e.batchedUpdates&&(z.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ia=e.willAdvance),e.frameLoop&&(z.frameLoop=e.frameLoop)},sr=new Set,Se=[],Yo=[],Bi=0,ho={get idle(){return!sr.size&&!Se.length},start(e){Bi>e.priority?(sr.add(e),z.onStart(tm)):(nd(e),z($l))},advance:$l,sort(e){if(Bi)z.onFrame(()=>ho.sort(e));else{const t=Se.indexOf(e);~t&&(Se.splice(t,1),rd(e))}},clear(){Se=[],sr.clear()}};function tm(){sr.forEach(nd),sr.clear(),z($l)}function nd(e){Se.includes(e)||rd(e)}function rd(e){Se.splice(nm(Se,t=>t.priority>e.priority),0,e)}function $l(e){const t=Yo;for(let n=0;n<Se.length;n++){const r=Se[n];Bi=r.priority,r.idle||(ia(r),r.advance(e),r.idle||t.push(r))}return Bi=0,Yo=Se,Yo.length=0,Se=t,Se.length>0}function nm(e,t){const n=e.findIndex(t);return n<0?e.length:n}var rm=(e,t,n)=>Math.min(Math.max(n,e),t),im={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Re="[-+]?\\d*\\.?\\d+",Hi=Re+"%";function mo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var om=new RegExp("rgb"+mo(Re,Re,Re)),lm=new RegExp("rgba"+mo(Re,Re,Re,Re)),sm=new RegExp("hsl"+mo(Re,Hi,Hi)),am=new RegExp("hsla"+mo(Re,Hi,Hi,Re)),um=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,cm=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fm=/^#([0-9a-fA-F]{6})$/,dm=/^#([0-9a-fA-F]{8})$/;function pm(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=fm.exec(e))?parseInt(t[1]+"ff",16)>>>0:ht&&ht[e]!==void 0?ht[e]:(t=om.exec(e))?(Wt(t[1])<<24|Wt(t[2])<<16|Wt(t[3])<<8|255)>>>0:(t=lm.exec(e))?(Wt(t[1])<<24|Wt(t[2])<<16|Wt(t[3])<<8|Ru(t[4]))>>>0:(t=um.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=dm.exec(e))?parseInt(t[1],16)>>>0:(t=cm.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=sm.exec(e))?(Iu(Nu(t[1]),ri(t[2]),ri(t[3]))|255)>>>0:(t=am.exec(e))?(Iu(Nu(t[1]),ri(t[2]),ri(t[3]))|Ru(t[4]))>>>0:null}function qo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Iu(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=qo(i,r,e+1/3),l=qo(i,r,e),s=qo(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(l*255)<<16|Math.round(s*255)<<8}function Wt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Nu(e){return(parseFloat(e)%360+360)%360/360}function Ru(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function ri(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function zu(e){let t=pm(e);if(t===null)return e;t=t||0;const n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}var Er=(e,t,n)=>{if(_.fun(e))return e;if(_.arr(e))return Er({range:e,output:t,extrapolate:n});if(_.str(e.output[0]))return ra(e);const r=e,i=r.output,o=r.range||[0,1],l=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",a=r.easing||(u=>u);return u=>{const v=mm(u,o);return hm(u,o[v],o[v+1],i[v],i[v+1],a,l,s,r.map)}};function hm(e,t,n,r,i,o,l,s,a){let u=a?a(e):e;if(u<t){if(l==="identity")return u;l==="clamp"&&(u=t)}if(u>n){if(s==="identity")return u;s==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function mm(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}var gm=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,i=t==="end"?Math.floor(r):Math.ceil(r);return rm(0,1,i/e)},Wi=1.70158,ii=Wi*1.525,ju=Wi+1,Mu=2*Math.PI/3,Fu=2*Math.PI/4.5,oi=e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,vm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e===0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e===1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ju*e*e*e-Wi*e*e,easeOutBack:e=>1+ju*Math.pow(e-1,3)+Wi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*((ii+1)*2*e-ii)/2:(Math.pow(2*e-2,2)*((ii+1)*(e*2-2)+ii)+2)/2,easeInElastic:e=>e===0?0:e===1?1:-Math.pow(2,10*e-10)*Math.sin((e*10-10.75)*Mu),easeOutElastic:e=>e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e*10-.75)*Mu)+1,easeInOutElastic:e=>e===0?0:e===1?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Fu))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Fu)/2+1,easeInBounce:e=>1-oi(1-e),easeOutBounce:oi,easeInOutBounce:e=>e<.5?(1-oi(1-2*e))/2:(1+oi(2*e-1))/2,steps:gm},Cr=Symbol.for("FluidValue.get"),vn=Symbol.for("FluidValue.observers"),ye=e=>Boolean(e&&e[Cr]),de=e=>e&&e[Cr]?e[Cr]():e,Au=e=>e[vn]||null;function ym(e,t){e.eventObserved?e.eventObserved(t):e(t)}function Pr(e,t){const n=e[vn];n&&n.forEach(r=>{ym(r,t)})}var id=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");wm(this,e)}},wm=(e,t)=>od(e,Cr,t);function Vr(e,t){if(e[Cr]){let n=e[vn];n||od(e,vn,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Tr(e,t){const n=e[vn];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[vn]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var od=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),yi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,km=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Du=new RegExp(`(${yi.source})(%|[a-z]+)`,"i"),Sm=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,go=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ld=e=>{const[t,n]=xm(e);if(!t||na())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&go.test(n))return ld(n);if(n)return n}return e},xm=e=>{const t=go.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Xo,_m=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,sd=e=>{Xo||(Xo=ht?new RegExp(`(${Object.keys(ht).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(o=>de(o).replace(go,ld).replace(km,zu).replace(Xo,zu)),n=t.map(o=>o.match(yi).map(Number)),i=n[0].map((o,l)=>n.map(s=>{if(!(l in s))throw Error('The arity of each "output" value must be equal');return s[l]})).map(o=>Er(me(U({},e),{output:o})));return o=>{var a;const l=!Du.test(t[0])&&((a=t.find(u=>Du.test(u)))==null?void 0:a.replace(yi,""));let s=0;return t[0].replace(yi,()=>`${i[s++](o)}${l||""}`).replace(Sm,_m)}},ad="react-spring: ",ud=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${ad}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},Em=ud(console.warn);function Cm(){Em(`${ad}The "interpolate" function is deprecated in v9 (use "to" instead)`)}ud(console.warn);function vo(e){return _.str(e)&&(e[0]=="#"||/\d/.test(e)||!na()&&go.test(e)||e in(ht||{}))}var cd=na()?I.exports.useEffect:I.exports.useLayoutEffect,Pm=()=>{const e=I.exports.useRef(!1);return cd(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function Tm(){const e=I.exports.useState()[1],t=Pm();return()=>{t.current&&e(Math.random())}}function Qi(e,t){const[n]=I.exports.useState(()=>({inputs:t,result:e()})),r=I.exports.useRef(),i=r.current;let o=i;return o?Boolean(t&&o.inputs&&Om(t,o.inputs))||(o={inputs:t,result:e()}):o=n,I.exports.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function Om(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Yi=e=>I.exports.useEffect(e,Lm),Lm=[],Or=Symbol.for("Animated:node"),Im=e=>!!e&&e[Or]===e,je=e=>e&&e[Or],oa=(e,t)=>Jh(e,Or,t),yo=e=>e&&e[Or]&&e[Or].getPayload(),fd=class{constructor(){oa(this,this)}getPayload(){return this.payload||[]}},$r=class extends fd{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,_.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new $r(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return _.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value===e?!1:(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,_.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Lr=class extends $r{constructor(e){super(0),this._string=null,this._toString=Er({output:[e,e]})}static create(e){return new Lr(e)}getValue(){const e=this._string;return e==null?this._string=this._toString(this._value):e}setValue(e){if(_.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else if(super.setValue(e))this._string=null;else return!1;return!0}reset(e){e&&(this._toString=Er({output:[this.getValue(),e]})),this._value=0,super.reset()}},qi={dependencies:null},wo=class extends fd{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qe(this.source,(n,r)=>{Im(n)?t[r]=n.getValue(e):ye(n)?t[r]=de(n):e||(t[r]=n)}),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&H(this.payload,e=>e.reset())}_makePayload(e){if(e){const t=new Set;return qe(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){qi.dependencies&&ye(e)&&qi.dependencies.add(e);const t=yo(e);t&&H(t,n=>this.add(n))}},dd=class extends wo{constructor(e){super(e)}static create(e){return new dd(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){const t=this.getPayload();return e.length==t.length?t.map((n,r)=>n.setValue(e[r])).some(Boolean):(super.setValue(e.map(Nm)),!0)}};function Nm(e){return(vo(e)?Lr:$r).create(e)}function Bl(e){const t=je(e);return t?t.constructor:_.arr(e)?dd:vo(e)?Lr:$r}var bu=(e,t)=>{const n=!_.fun(e)||e.prototype&&e.prototype.isReactComponent;return I.exports.forwardRef((r,i)=>{const o=I.exports.useRef(null),l=n&&I.exports.useCallback(k=>{o.current=jm(i,k)},[i]),[s,a]=zm(r,t),u=Tm(),v=()=>{const k=o.current;if(n&&!k)return;(k?t.applyAnimatedValues(k,s.getValue(!0)):!1)===!1&&u()},w=new Rm(v,a),h=I.exports.useRef();cd(()=>(h.current=w,H(a,k=>Vr(k,w)),()=>{h.current&&(H(h.current.deps,k=>Tr(k,h.current)),z.cancel(h.current.update))})),I.exports.useEffect(v,[]),Yi(()=>()=>{const k=h.current;H(k.deps,y=>Tr(y,k))});const g=t.getComponentProps(s.getValue());return I.exports.createElement(e,me(U({},g),{ref:l}))})},Rm=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){e.type=="change"&&z.write(this.update)}};function zm(e,t){const n=new Set;return qi.dependencies=n,e.style&&(e=me(U({},e),{style:t.createAnimatedStyle(e.style)})),e=new wo(e),qi.dependencies=null,[e,n]}function jm(e,t){return e&&(_.fun(e)?e(t):e.current=t),t}var Uu=Symbol.for("AnimatedComponent"),Mm=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new wo(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=l=>{const s=Vu(l)||"Anonymous";return _.str(l)?l=o[l]||(o[l]=bu(l,i)):l=l[Uu]||(l[Uu]=bu(l,i)),l.displayName=`Animated(${s})`,l};return qe(e,(l,s)=>{_.arr(e)&&(s=Vu(l)),o[s]=o(l)}),{animated:o}},Vu=e=>_.str(e)?e:e&&_.str(e.displayName)?e.displayName:_.fun(e)&&e.name||null;function Tt(e,...t){return _.fun(e)?e(...t):e}var ar=(e,t)=>e===!0||!!(t&&e&&(_.fun(e)?e(t):xe(e).includes(t))),pd=(e,t)=>_.obj(e)?t&&e[t]:e,hd=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,Fm=e=>e,md=(e,t=Fm)=>{let n=Am;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const o=t(e[i],i);_.und(o)||(r[i]=o)}return r},Am=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Dm={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function bm(e){const t={};let n=0;if(qe(e,(r,i)=>{Dm[i]||(t[i]=r,n++)}),n)return t}function gd(e){const t=bm(e);if(t){const n={to:t};return qe(e,(r,i)=>i in t||(n[i]=r)),n}return U({},e)}function Ir(e){return e=de(e),_.arr(e)?e.map(Ir):vo(e)?ze.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Hl(e){return _.fun(e)||_.arr(e)&&_.obj(e[0])}var vd={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},Wl=me(U({},vd.default),{mass:1,damping:1,easing:vm.linear,clamp:!1}),Um=class{constructor(){this.velocity=0,Object.assign(this,Wl)}};function Vm(e,t,n){n&&(n=U({},n),$u(n,t),t=U(U({},n),t)),$u(e,t),Object.assign(e,t);for(const l in Wl)e[l]==null&&(e[l]=Wl[l]);let{frequency:r,damping:i}=e;const{mass:o}=e;return _.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r),e}function $u(e,t){if(!_.und(t.decay))e.duration=void 0;else{const n=!_.und(t.tension)||!_.und(t.friction);(n||!_.und(t.frequency)||!_.und(t.damping)||!_.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}var Bu=[],$m=class{constructor(){this.changed=!1,this.values=Bu,this.toValues=null,this.fromValues=Bu,this.config=new Um,this.immediate=!1}};function yd(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((l,s)=>{var k;let a,u,v=ar((k=n.cancel)!=null?k:r==null?void 0:r.cancel,t);if(v)g();else{_.und(n.pause)||(i.paused=ar(n.pause,t));let y=r==null?void 0:r.pause;y!==!0&&(y=i.paused||ar(y,t)),a=Tt(n.delay||0,t),y?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function w(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),a=u.time-z.now()}function h(){a>0&&!ze.skipAnimation?(i.delayed=!0,u=z.setTimeout(g,a),i.pauseQueue.add(w),i.timeouts.add(u)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(w),i.timeouts.delete(u),e<=(i.cancelId||0)&&(v=!0);try{o.start(me(U({},n),{callId:e,cancel:v}),l)}catch(y){s(y)}}})}var la=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?dn(e.get()):t.every(n=>n.noop)?wd(e.get()):Ie(e.get(),t.every(n=>n.finished)),wd=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ie=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),dn=e=>({value:e,cancelled:!0,finished:!1});function kd(e,t,n,r){const{callId:i,parentId:o,onRest:l}=t,{asyncTo:s,promise:a}=n;return!o&&e===s&&!t.reset?a:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=md(t,(f,c)=>c==="onRest"?void 0:f);let v,w;const h=new Promise((f,c)=>(v=f,w=c)),g=f=>{const c=i<=(n.cancelId||0)&&dn(r)||i!==n.asyncId&&Ie(r,!1);if(c)throw f.result=c,w(f),f},k=(f,c)=>{const d=new Hu,p=new Wu;return(async()=>{if(ze.skipAnimation)throw Nr(n),p.result=Ie(r,!1),w(p),p;g(d);const m=_.obj(f)?U({},f):me(U({},c),{to:f});m.parentId=i,qe(u,(S,C)=>{_.und(m[C])&&(m[C]=S)});const O=await r.start(m);return g(d),n.paused&&await new Promise(S=>{n.resumeQueue.add(S)}),O})()};let y;if(ze.skipAnimation)return Nr(n),Ie(r,!1);try{let f;_.arr(e)?f=(async c=>{for(const d of c)await k(d)})(e):f=Promise.resolve(e(k,r.stop.bind(r))),await Promise.all([f.then(v),h]),y=Ie(r.get(),!0,!1)}catch(f){if(f instanceof Hu)y=f.result;else if(f instanceof Wu)y=f.result;else throw f}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?a:void 0)}return _.fun(l)&&z.batchedUpdates(()=>{l(y,r,r.item)}),y})()}function Nr(e,t){lr(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Hu=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wu=class extends Error{constructor(){super("SkipAnimationSignal")}},Ql=e=>e instanceof sa,Bm=1,sa=class extends id{constructor(){super(...arguments),this.id=Bm++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=je(this);return e&&e.getValue()}to(...e){return ze.to(this,e)}interpolate(...e){return Cm(),ze.to(this,e)}toJSON(){return this.get()}observerAdded(e){e==1&&this._attach()}observerRemoved(e){e==0&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Pr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ho.sort(this),Pr(this,{type:"priority",parent:this,priority:e})}},At=Symbol.for("SpringPhase"),Sd=1,Yl=2,ql=4,Ko=e=>(e[At]&Sd)>0,Ge=e=>(e[At]&Yl)>0,bn=e=>(e[At]&ql)>0,Qu=(e,t)=>t?e[At]|=Yl|Sd:e[At]&=~Yl,Yu=(e,t)=>t?e[At]|=ql:e[At]&=~ql,Hm=class extends sa{constructor(e,t){if(super(),this.animation=new $m,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!_.und(e)||!_.und(t)){const n=_.obj(e)?U({},e):me(U({},t),{from:e});_.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ge(this)||this._state.asyncTo)||bn(this)}get goal(){return de(this.animation.to)}get velocity(){const e=je(this);return e instanceof $r?e.lastVelocity||0:e.getPayload().map(t=>t.lastVelocity||0)}get hasAnimated(){return Ko(this)}get isAnimating(){return Ge(this)}get isPaused(){return bn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,l=yo(r.to);!l&&ye(r.to)&&(i=xe(de(r.to))),r.values.forEach((u,v)=>{if(u.done)return;const w=u.constructor==Lr?1:l?l[v].lastPosition:i[v];let h=r.immediate,g=w;if(!h){if(g=u.lastPosition,o.tension<=0){u.done=!0;return}let k=u.elapsedTime+=e;const y=r.fromValues[v],f=u.v0!=null?u.v0:u.v0=_.arr(o.velocity)?o.velocity[v]:o.velocity;let c;const d=o.precision||(y==w?.005:Math.min(1,Math.abs(w-y)*.001));if(_.und(o.duration))if(o.decay){const p=o.decay===!0?.998:o.decay,m=Math.exp(-(1-p)*k);g=y+f/(1-p)*(1-m),h=Math.abs(u.lastPosition-g)<=d,c=f*m}else{c=u.lastVelocity==null?f:u.lastVelocity;const p=o.restVelocity||d/10,m=o.clamp?0:o.bounce,O=!_.und(m),S=y==w?u.v0>0:y<w;let C,L=!1;const P=1,$=Math.ceil(e/P);for(let se=0;se<$&&(C=Math.abs(c)>p,!(!C&&(h=Math.abs(w-g)<=d,h)));++se){O&&(L=g==w||g>w==S,L&&(c=-c*m,g=w));const X=-o.tension*1e-6*(g-w),B=-o.friction*.001*c,$t=(X+B)/o.mass;c=c+$t*P,g=g+c*P}}else{let p=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,u.durationProgress>0&&(u.elapsedTime=o.duration*u.durationProgress,k=u.elapsedTime+=e)),p=(o.progress||0)+k/this._memoizedDuration,p=p>1?1:p<0?0:p,u.durationProgress=p),g=y+o.easing(p)*(w-y),c=(g-u.lastPosition)/e,h=p==1}u.lastVelocity=c,Number.isNaN(g)&&(console.warn("Got NaN while animating:",this),h=!0)}l&&!l[v].done&&(h=!1),h?u.done=!0:t=!1,u.setValue(g,o.round)&&(n=!0)});const s=je(this),a=s.getValue();if(t){const u=de(r.to);(a!==u||n)&&!o.decay?(s.setValue(u),this._onChange(u)):n&&o.decay&&this._onChange(a),this._stop()}else n&&this._onChange(a)}set(e){return z.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ge(this)){const{to:e,config:t}=this.animation;z.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return _.und(e)?(n=this.queue||[],this.queue=[]):n=[_.obj(e)?e:me(U({},t),{to:e})],Promise.all(n.map(r=>this._update(r))).then(r=>la(this,r))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Nr(this._state,e&&this._lastCallId),z.batchedUpdates(()=>this._stop(t,e)),this}reset(){this._update({reset:!0})}eventObserved(e){e.type=="change"?this._start():e.type=="priority"&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=_.obj(n)?n[t]:n,(n==null||Hl(n))&&(n=void 0),r=_.obj(r)?r[t]:r,r==null&&(r=void 0);const i={to:n,from:r};return Ko(this)||(e.reverse&&([n,r]=[r,n]),r=de(r),_.und(r)?je(this)||this._set(n):this._set(r)),i}_update(n,t){var e=Ke(n,[]);const{key:r,defaultProps:i}=this;e.default&&Object.assign(i,md(e,(s,a)=>/^on/.test(a)?pd(s,r):s)),Xu(this,e,"onProps"),Vn(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const l=this._state;return yd(++this._lastCallId,{key:r,props:e,defaultProps:i,state:l,actions:{pause:()=>{bn(this)||(Yu(this,!0),Yn(l.pauseQueue),Vn(this,"onPause",Ie(this,Un(this,this.animation.to)),this))},resume:()=>{bn(this)&&(Yu(this,!1),Ge(this)&&this._resume(),Yn(l.resumeQueue),Vn(this,"onResume",Ie(this,Un(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(s=>{if(e.loop&&s.finished&&!(t&&s.noop)){const a=xd(e);if(a)return this._update(a,!0)}return s})}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(dn(this));const r=!_.und(e.to),i=!_.und(e.from);if(r||i)if(t.callId>this._lastToId)this._lastToId=t.callId;else return n(dn(this));const{key:o,defaultProps:l,animation:s}=this,{to:a,from:u}=s;let{to:v=a,from:w=u}=e;i&&!r&&(!t.default||_.und(v))&&(v=w),t.reverse&&([v,w]=[w,v]);const h=!Ve(w,u);h&&(s.from=w),w=de(w);const g=!Ve(v,a);g&&this._focus(v);const k=Hl(t.to),{config:y}=s,{decay:f,velocity:c}=y;(r||i)&&(y.velocity=0),t.config&&!k&&Vm(y,Tt(t.config,o),t.config!==l.config?Tt(l.config,o):void 0);let d=je(this);if(!d||_.und(v))return n(Ie(this,!0));const p=_.und(t.reset)?i&&!t.default:!_.und(w)&&ar(t.reset,o),m=p?w:this.get(),O=Ir(v),S=_.num(O)||_.arr(O)||vo(O),C=!k&&(!S||ar(l.immediate||t.immediate,o));if(g){const se=Bl(v);if(se!==d.constructor)if(C)d=this._set(O);else throw Error(`Cannot animate between ${d.constructor.name} and ${se.name}, as the "to" prop suggests`)}const L=d.constructor;let P=ye(v),$=!1;if(!P){const se=p||!Ko(this)&&h;(g||se)&&($=Ve(Ir(m),O),P=!$),(!Ve(s.immediate,C)&&!C||!Ve(y.decay,f)||!Ve(y.velocity,c))&&(P=!0)}if($&&Ge(this)&&(s.changed&&!p?P=!0:P||this._stop(a)),!k&&((P||ye(a))&&(s.values=d.getPayload(),s.toValues=ye(v)?null:L==Lr?[1]:xe(O)),s.immediate!=C&&(s.immediate=C,!C&&!p&&this._set(a)),P)){const{onRest:se}=s;H(Wm,B=>Xu(this,t,B));const X=Ie(this,Un(this,a));Yn(this._pendingCalls,X),this._pendingCalls.add(n),s.changed&&z.batchedUpdates(()=>{var B;s.changed=!p,se==null||se(X,this),p?Tt(l.onRest,X):(B=s.onStart)==null||B.call(s,X,this)})}p&&this._set(m),k?n(kd(t.to,t,this._state,this)):P?this._start():Ge(this)&&!g?this._pendingCalls.add(n):n(wd(m))}_focus(e){const t=this.animation;e!==t.to&&(Au(this)&&this._detach(),t.to=e,Au(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ye(t)&&(Vr(t,this),Ql(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ye(e)&&Tr(e,this)}_set(e,t=!0){const n=de(e);if(!_.und(n)){const r=je(this);if(!r||!Ve(n,r.getValue())){const i=Bl(n);!r||r.constructor!=i?oa(this,i.create(n)):r.setValue(n),r&&z.batchedUpdates(()=>{this._onChange(n,t)})}}return je(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Vn(this,"onStart",Ie(this,Un(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Tt(this.animation.onChange,e,this)),Tt(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;je(this).reset(de(e.to)),e.immediate||(e.fromValues=e.values.map(t=>t.lastPosition)),Ge(this)||(Qu(this,!0),bn(this)||this._resume())}_resume(){ze.skipAnimation?this.finish():ho.start(this)}_stop(e,t){if(Ge(this)){Qu(this,!1);const n=this.animation;H(n.values,i=>{i.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Pr(this,{type:"idle",parent:this});const r=t?dn(this.get()):Ie(this.get(),Un(this,e!=null?e:n.to));Yn(this._pendingCalls,r),n.changed&&(n.changed=!1,Vn(this,"onRest",r,this))}}};function Un(e,t){const n=Ir(t),r=Ir(e.get());return Ve(r,n)}function xd(e,t=e.loop,n=e.to){const r=Tt(t);if(r){const i=r!==!0&&gd(r),o=(i||e).reverse,l=!i||i.reset;return Xl(U(me(U({},e),{loop:t,default:!1,pause:void 0,to:!o||Hl(n)?n:void 0,from:l?e.from:void 0,reset:l}),i))}}function Xl(e){const{to:t,from:n}=e=gd(e),r=new Set;return _.obj(t)&&qu(t,r),_.obj(n)&&qu(n,r),e.keys=r.size?Array.from(r):null,e}function qu(e,t){qe(e,(n,r)=>n!=null&&t.add(r))}var Wm=["onStart","onRest","onChange","onPause","onResume"];function Xu(e,t,n){e.animation[n]=t[n]!==hd(t,n)?pd(t[n],e.key):void 0}function Vn(e,t,...n){var r,i,o,l;(i=(r=e.animation)[t])==null||i.call(r,...n),(l=(o=e.defaultProps)[t])==null||l.call(o,...n)}var Qm=["onStart","onChange","onRest"],Ym=1,_d=class{constructor(e,t){this.id=Ym++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(U({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each((t,n)=>e[n]=t.get()),e}set(e){for(const t in e){const n=e[t];_.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Xl(e)),this}start(e){let{queue:t}=this;return e?t=xe(e).map(Xl):this.queue=[],this._flush?this._flush(this,t):(Cd(this,t),qm(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;H(xe(t),r=>n[r].stop(!!e))}else Nr(this._state,this._lastAsyncId),this.each(n=>n.stop(!!e));return this}pause(e){if(_.und(e))this.start({pause:!0});else{const t=this.springs;H(xe(e),n=>t[n].pause())}return this}resume(e){if(_.und(e))this.start({pause:!1});else{const t=this.springs;H(xe(e),n=>t[n].resume())}return this}each(e){qe(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,lr(e,([s,a])=>{a.value=this.get(),s(a,this,this._item)}));const o=!r&&this._started,l=i||o&&n.size?this.get():null;i&&t.size&&lr(t,([s,a])=>{a.value=l,s(a,this,this._item)}),o&&(this._started=!1,lr(n,([s,a])=>{a.value=l,s(a,this,this._item)}))}eventObserved(e){if(e.type=="change")this._changed.add(e.parent),e.idle||this._active.add(e.parent);else if(e.type=="idle")this._active.delete(e.parent);else return;z.onFrame(this._onFrame)}};function qm(e,t){return Promise.all(t.map(n=>Ed(e,n))).then(n=>la(e,n))}async function Ed(e,t,n){const{keys:r,to:i,from:o,loop:l,onRest:s,onResolve:a}=t,u=_.obj(t.default)&&t.default;l&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);const v=_.arr(i)||_.fun(i)?i:void 0;v?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):H(Qm,y=>{const f=t[y];if(_.fun(f)){const c=e._events[y];t[y]=({finished:d,cancelled:p})=>{const m=c.get(f);m?(d||(m.finished=!1),p&&(m.cancelled=!0)):c.set(f,{value:null,finished:d||!1,cancelled:p||!1})},u&&(u[y]=t[y])}});const w=e._state;t.pause===!w.paused?(w.paused=t.pause,Yn(t.pause?w.pauseQueue:w.resumeQueue)):w.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map(y=>e.springs[y].start(t)),g=t.cancel===!0||hd(t,"cancel")===!0;(v||g&&w.asyncId)&&h.push(yd(++e._lastAsyncId,{props:t,state:w,actions:{pause:Vl,resume:Vl,start(y,f){g?(Nr(w,e._lastAsyncId),f(dn(e))):(y.onRest=s,f(kd(v,y,w,e)))}}})),w.paused&&await new Promise(y=>{w.resumeQueue.add(y)});const k=la(e,await Promise.all(h));if(l&&k.finished&&!(n&&k.noop)){const y=xd(t,l,i);if(y)return Cd(e,[y]),Ed(e,y,!0)}return a&&z.batchedUpdates(()=>a(k,e,e.item)),k}function Xm(e,t){const n=new Hm;return n.key=e,t&&Vr(n,t),n}function Km(e,t,n){t.keys&&H(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function Cd(e,t){H(t,n=>{Km(e.springs,n,r=>Xm(r,e))})}var aa=n=>{var r=n,{children:e}=r,t=Ke(r,["children"]);const i=I.exports.useContext(Xi),o=t.pause||!!i.pause,l=t.immediate||!!i.immediate;t=Qi(()=>({pause:o,immediate:l}),[o,l]);const{Provider:s}=Xi;return I.exports.createElement(s,{value:t},e)},Xi=Gm(aa,{});aa.Provider=Xi.Provider;aa.Consumer=Xi.Consumer;function Gm(e,t){return Object.assign(e,I.exports.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}var Zm=class extends sa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Er(...t);const n=this._get(),r=Bl(n);oa(this,r.create(n))}advance(e){const t=this._get(),n=this.get();Ve(t,n)||(je(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ku(this._active)&&Go(this)}_get(){const e=_.arr(this.source)?this.source.map(de):xe(de(this.source));return this.calc(...e)}_start(){this.idle&&!Ku(this._active)&&(this.idle=!1,H(yo(this),e=>{e.done=!1}),ze.skipAnimation?(z.batchedUpdates(()=>this.advance()),Go(this)):ho.start(this))}_attach(){let e=1;H(xe(this.source),t=>{ye(t)&&Vr(t,this),Ql(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}_detach(){H(xe(this.source),e=>{ye(e)&&Tr(e,this)}),this._active.clear(),Go(this)}eventObserved(e){e.type=="change"?e.idle?this.advance():(this._active.add(e.parent),this._start()):e.type=="idle"?this._active.delete(e.parent):e.type=="priority"&&(this.priority=xe(this.source).reduce((t,n)=>Math.max(t,(Ql(n)?n.priority:0)+1),0))}};function Jm(e){return e.idle!==!1}function Ku(e){return!e.size||Array.from(e).every(Jm)}function Go(e){e.idle||(e.idle=!0,H(yo(e),t=>{t.done=!0}),Pr(e,{type:"idle",parent:e}))}ze.assign({createStringInterpolator:sd,to:(e,t)=>new Zm(e,t)});var Pd=/^--/;function e0(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!Pd.test(e)&&!(ur.hasOwnProperty(e)&&ur[e])?t+"px":(""+t).trim()}var Gu={};function t0(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",w=t,{style:r,children:i,scrollTop:o,scrollLeft:l,viewBox:s}=w,a=Ke(w,["style","children","scrollTop","scrollLeft","viewBox"]),u=Object.values(a),v=Object.keys(a).map(h=>n||e.hasAttribute(h)?h:Gu[h]||(Gu[h]=h.replace(/([A-Z])/g,g=>"-"+g.toLowerCase())));i!==void 0&&(e.textContent=i);for(const h in r)if(r.hasOwnProperty(h)){const g=e0(h,r[h]);Pd.test(h)?e.style.setProperty(h,g):e.style[h]=g}v.forEach((h,g)=>{e.setAttribute(h,u[g])}),o!==void 0&&(e.scrollTop=o),l!==void 0&&(e.scrollLeft=l),s!==void 0&&e.setAttribute("viewBox",s)}var ur={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),r0=["Webkit","Ms","Moz","O"];ur=Object.keys(ur).reduce((e,t)=>(r0.forEach(n=>e[n0(n,t)]=e[t]),e),ur);var i0=/^(matrix|translate|scale|rotate|skew)/,o0=/^(translate)/,l0=/^(rotate|skew)/,Zo=(e,t)=>_.num(e)&&e!==0?e+t:e,wi=(e,t)=>_.arr(e)?e.every(n=>wi(n,t)):_.num(e)?e===t:parseFloat(e)===t,s0=class extends wo{constructor(i){var o=i,{x:e,y:t,z:n}=o,r=Ke(o,["x","y","z"]);const l=[],s=[];(e||t||n)&&(l.push([e||0,t||0,n||0]),s.push(a=>[`translate3d(${a.map(u=>Zo(u,"px")).join(",")})`,wi(a,0)])),qe(r,(a,u)=>{if(u==="transform")l.push([a||""]),s.push(v=>[v,v===""]);else if(i0.test(u)){if(delete r[u],_.und(a))return;const v=o0.test(u)?"px":l0.test(u)?"deg":"";l.push(xe(a)),s.push(u==="rotate3d"?([w,h,g,k])=>[`rotate3d(${w},${h},${g},${Zo(k,v)})`,wi(k,0)]:w=>[`${u}(${w.map(h=>Zo(h,v)).join(",")})`,wi(w,u.startsWith("scale")?1:0)])}}),l.length&&(r.transform=new a0(l,s)),super(r)}},a0=class extends id{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return H(this.inputs,(n,r)=>{const i=de(n[0]),[o,l]=this.transforms[r](_.arr(i)?i:n.map(de));e+=" "+o,t=t&&l}),t?"none":e}observerAdded(e){e==1&&H(this.inputs,t=>H(t,n=>ye(n)&&Vr(n,this)))}observerRemoved(e){e==0&&H(this.inputs,t=>H(t,n=>ye(n)&&Tr(n,this)))}eventObserved(e){e.type=="change"&&(this._value=null),Pr(this,e)}},u0=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"];ze.assign({batchedUpdates:is.exports.unstable_batchedUpdates,createStringInterpolator:sd,colors:im});var c0=Mm(u0,{applyAnimatedValues:t0,createAnimatedStyle:e=>new s0(e),getComponentProps:r=>{var i=r,{scrollTop:e,scrollLeft:t}=i,n=Ke(i,["scrollTop","scrollLeft"]);return n}}),Kl=c0.animated,Gl=I.exports.createContext(null);function Jo(e){return e?"scrollLeft":"scrollTop"}function Zl(e,t){const n=r=>r.type?r.type===I.exports.Fragment:r===I.exports.Fragment;return I.exports.Children.map(e,r=>n(r)?Zl(r.props.children,t):t(r))}var Zu="translate3d(0px,0px,0px)",li="translate(0px,0px)",Oe=I.exports.memo(I.exports.forwardRef((s,l)=>{var a=s,{horizontal:e,factor:t=1,offset:n=0,speed:r=0,sticky:i}=a,o=Ke(a,["horizontal","factor","offset","speed","sticky"]);const u=I.exports.useContext(Gl),v=Qi(()=>{let y;if(i)y=(i.start||0)*u.space;else{const f=Math.floor(n)*u.space,c=u.space*n+f*r;y=-(u.current*r)+c}return new _d({space:i?u.space:u.space*t,translate:y})},[]),w=Qi(()=>({horizontal:e===void 0||i?u.horizontal:e,sticky:void 0,isSticky:!1,setPosition(y,f,c=!1){if(i)g(y,f);else{const d=Math.floor(n)*y,p=y*n+d*r;v.start({translate:-(f*r)+p,config:u.config,immediate:c})}},setHeight(y,f=!1){v.start({space:i?y:y*t,config:u.config,immediate:f})}}),[]);Yi(()=>{if(i){const y=i.start||0,f=i.end||y+1;w.sticky={start:y,end:f}}}),I.exports.useImperativeHandle(l,()=>w);const h=I.exports.useRef(),g=(y,f)=>{const c=w.sticky.start*y,d=w.sticky.end*y,p=f>=c&&f<=d;if(p===w.isSticky)return;w.isSticky=p;const m=h.current;m.style.position=p?"sticky":"absolute",v.set({translate:p?0:f<c?c:d})};Yi(()=>{if(u)return u.layers.add(w),u.update(),()=>{u.layers.delete(w),u.update()}});const k=v.springs.translate.to(w.horizontal?y=>`translate3d(${y}px,0,0)`:y=>`translate3d(0,${y}px,0)`);return I.exports.createElement(Kl.div,me(U({},o),{ref:h,style:U({position:"absolute",top:0,bottom:0,left:0,right:0,backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform",[w.horizontal?"height":"width"]:"100%",[w.horizontal?"width":"height"]:v.springs.space,WebkitTransform:k,msTransform:k,transform:k},o.style)}))})),f0=I.exports.memo(I.exports.forwardRef((e,t)=>{const[n,r]=I.exports.useState(!1),d=e,{pages:i,innerStyle:o,config:l=vd.slow,enabled:s=!0,horizontal:a=!1,children:u}=d,v=Ke(d,["pages","innerStyle","config","enabled","horizontal","children"]),w=I.exports.useRef(),h=I.exports.useRef(),g=Qi(()=>({config:l,horizontal:a,busy:!1,space:0,current:0,offset:0,controller:new _d({scroll:0}),layers:new Set,container:w,content:h,update:()=>k(),scrollTo:p=>y(p),stop:()=>g.controller.stop()}),[]);I.exports.useEffect(()=>{g.config=l},[l]),I.exports.useImperativeHandle(t,()=>g);const k=()=>{const p=w.current;if(!p)return;const m=a?"clientWidth":"clientHeight";g.space=p[m];const O=Jo(a);s?g.current=p[O]:p[O]=g.current=g.offset*g.space;const S=h.current;if(S){const C=a?"width":"height";S.style[C]=`${g.space*i}px`}g.layers.forEach(C=>{C.setHeight(g.space,!0),C.setPosition(g.space,g.current,!0)})},y=p=>{const m=w.current,O=Jo(a);g.offset=p,g.controller.set({scroll:g.current}),g.controller.stop().start({scroll:p*g.space,config:l,onChange({value:{scroll:S}}){m[O]=S}})},f=p=>{g.busy||(g.busy=!0,g.current=p.target[Jo(a)],z.onStart(()=>{g.layers.forEach(m=>m.setPosition(g.space,g.current)),g.busy=!1}))};I.exports.useEffect(()=>g.update()),Yi(()=>{r(!0);const p=()=>{const m=()=>g.update();z.onFrame(m),setTimeout(m,150)};return window.addEventListener("resize",p,!1),()=>window.removeEventListener("resize",p,!1)});const c=s?{overflowY:a?"hidden":"scroll",overflowX:a?"scroll":"hidden"}:{overflowY:"hidden",overflowX:"hidden"};return I.exports.createElement(Kl.div,me(U({},v),{ref:w,onScroll:f,onWheel:s?g.stop:void 0,onTouchStart:s?g.stop:void 0,style:U(me(U({position:"absolute",width:"100%",height:"100%"},c),{WebkitOverflowScrolling:"touch",WebkitTransform:li,msTransform:li,transform:Zu}),v.style)}),n&&I.exports.createElement(I.exports.Fragment,null,I.exports.createElement(Kl.div,{ref:h,style:U({overflow:"hidden",position:"absolute",[a?"height":"width"]:"100%",[a?"width":"height"]:g.space*i,WebkitTransform:li,msTransform:li,transform:Zu},e.innerStyle)},I.exports.createElement(Gl.Provider,{value:g},Zl(u,p=>!p.props.sticky&&p))),I.exports.createElement(Gl.Provider,{value:g},Zl(u,p=>p.props.sticky&&p))))})),d0="/apologyweb/assets/nope.a494e446.mp3",p0="/apologyweb/assets/yes.fa0a5d2d.mp3",h0="/apologyweb/assets/pls.4d61845e.gif";const m0=()=>{const e=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

      <link rel="icon" href="https://em-content.zobj.net/source/skype/289/red-heart_2764-fe0f.png" type="image/x-icon">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
        }

        body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: sans-serif;
          font-size: 1.2rem;
          background-color: #f2f2f2;
        }

        header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .gif-container {
          margin-bottom: 1rem;
        }

        .gif-container img {
          max-width: 100%;
          height: auto;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        button {
          padding: 1rem 2rem;
          margin: 0 1rem;
          border-radius: 5px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s;
        }

        button:hover {
          transform: scale(1.1);
        }

        #no-button {
          background-color: #e74c3c;
          color: #fff;
        }

        #no-button:hover {
          animation: shake 0.5s;
          animation-iteration-count: infinite;
        }

        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-5px, 0);
          }
          50% {
            transform: translate(0, -5px);
          }
          75% {
            transform: translate(5px, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        #yes-button {
          background-color: #2ecc71;
          color: #fff;
        }

        #confetti-canvas {
          width: 0%;
          height: 0%;
        }

        .octo-arm {
          animation: rotateTail 2s ease-in-out infinite;
        }

        @keyframes rotateTail {
          0% {
            transform: rotate(0);
          }
          20% {
            transform: rotate(20deg);
          }
          40% {
            transform: rotate(0deg);
          }
          60% {
            transform: rotate(-20deg);
          }
          80% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0);
          }
        }

        @media screen and (max-width: 768px) {
          header {
            font-size: 1.5rem;
          }
          main {
            padding: 1rem;
          }
          .gif-container {
            margin-bottom: 0.5rem;
          }
          button {
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            font-size: 1rem;

          }
        }
          
      </style>
    </head>
    <body>
      <header id="main">
        <h1>Your heading here</h1>
      </header>
      <main>
        <canvas id="confetti-canvas"></canvas>
        <div class="gif-container">
          <img id="gif" src="${h0}" alt="Please">
        </div>
        <div class="button-container">
          <button id="no-button">No</button>
          <button id="yes-button">Yes</button>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"><\/script>
     <script>
  // change this database url and ref with your creds
  window.notifyYesClicked = () => {
    const databaseURL = ''; // Replace with your Firebase Realtime Database URL
    const ref = ''; // Replace with your Firebase Realtime Database path

    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;

    fetch(\`\${databaseURL}/\${ref}.json\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clicked: true,
        timestamp: timestamp,
        device: userAgent
      }),
    });
  };

  const nopeAudio = new Audio("${d0}");
  const yesAudio = new Audio("${p0}");

  const noButton = document.getElementById("no-button");
  noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const adjustedX = Math.min(x, maxX);
    const adjustedY = Math.min(y, maxY);
    nopeAudio.play();
    noButton.style.position = "absolute";
    noButton.style.left = adjustedX + "px";
    noButton.style.top = adjustedY + "px";
  });

  const yesButton = document.getElementById("yes-button");
  yesButton.addEventListener("click", () => {
    yesAudio.play();
    const confettiElement = document.getElementById("confetti-canvas");
    const confettiSettings = {
      target: confettiElement,
      max: 200,
      size: 1,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
      clock: 25,
      rotate: true,
      start_from_edge: true,
      respawn: true
    };

    yesButton.style.display = "none";
    noButton.style.display = "none";
    document.getElementById("gif").style.display = "none";
    document.getElementById("main").style.display = "none";

    confettiElement.style.position = "absolute";
    confettiElement.style.top = "0";
    confettiElement.style.left = "0";
    confettiElement.style.width = "100%";
    confettiElement.style.height = "100%";
    confettiElement.style.zIndex = "1000";

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    const p = document.createElement("p");
    p.innerText = "Thank You So Much! \u{1F389} \\n 2nd line \\n 3rd line \u{1F496}\u{1F31F}";
    p.style.fontSize = "2rem";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.transform = "translate(-50%, -50%)";
    p.style.zIndex = "1001"; // Ensure text is above other elements
    document.body.appendChild(p);

    // Create social media links with FontAwesome icons
    const linksContainer = document.createElement("div");
    linksContainer.style.position = "absolute";
    linksContainer.style.bottom = "10px";
    linksContainer.style.left = "50%";
    linksContainer.style.transform = "translateX(-50%)";
    linksContainer.style.textAlign = "center";
    linksContainer.style.fontSize = "2rem";
    linksContainer.style.zIndex = "1001"; // Ensure icons are above other elements

    const facebookLink = document.createElement("a");
    facebookLink.href = "https://www.facebook.com/m.rahmanziad"; // Replace with your Facebook link
    facebookLink.target = "_blank";
    facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
    facebookLink.style.margin = "0 15px";
    facebookLink.style.color = "#3b5998";

    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/rz_iad/"; // Replace with your Instagram link
    instagramLink.target = "_blank";
    instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
    instagramLink.style.margin = "0 15px";
    instagramLink.style.color = "#C13584";

    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/01521712644"; // Replace with your Whatsapp link
    whatsappLink.target = "_blank";
    whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappLink.style.margin = "0 15px";
    whatsappLink.style.color = "#25D366";

    const messengerLink = document.createElement("a");
    messengerLink.href = "https://m.me/m.rahmanziad"; // Replace with your Messenger link
    messengerLink.target = "_blank";
    messengerLink.innerHTML = '<i class="fab fa-facebook-messenger"></i>';
    messengerLink.style.margin = "0 15px";
    messengerLink.style.color = '0099FF'



    linksContainer.appendChild(facebookLink);
    linksContainer.appendChild(instagramLink);
    linksContainer.appendChild(whatsappLink);
    linksContainer.appendChild(messengerLink);
    document.body.appendChild(linksContainer);

    // Notify the server
    window.notifyYesClicked();
  });
<\/script>



    </body>
    </html>
  `;return j("div",{className:"sorry-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"sorry"})})},g0=()=>j("div",{className:"Slider-container",children:j("iframe",{srcDoc:`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slick Carousel with Bokeh Effect</title>
  <!-- Slick Carousel CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    body {
      overflow: hidden;
      background: #a2cffe;
    }

    .wrapper {
      width: 100%;
      padding-top: 20px;
      text-align: center;
      position: relative;
      z-index: 1; /* Ensure wrapper is above bokeh effect */
    }

    h1, h2 {
      color: #333333;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    .carousel {
      width: 60%; /* Adjusted width for smaller slider */
      margin: 0 auto;
    }

    .slick-slide {
      margin: 10px;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions */
    }

    .slick-slide img {
      width: 100%;
      border: 2px solid #fff;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions for images */
    }

    /* Center slide larger and zoomed */
    .slick-center img {
      transform: scale(1.1); /* Slightly smaller scale */
      z-index: 1; /* Ensure center slide is above others */
    }

    /* Side slides smaller and reduced opacity */
    .slick-slide:not(.slick-center) img {
      transform: scale(0.7); /* Smaller scale */
      opacity: 0.5; /* Reduced opacity */
    }

    /* Hide slick dots */
    .slick-dots {
      display: none;
    }

    .bokeh {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0; /* Ensure bokeh effect is behind carousel */
    }

    .bokeh div {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation: move 20s linear infinite;
    }

    @keyframes move {
      from {
        transform: translateY(0) scale(1);
      }
      to {
        transform: translateY(-1000px) scale(0.5);
      }
    }
  </style>
</head>
<body>
  <div class="bokeh">
    <!-- Bokeh circles will be generated here by JavaScript -->
  </div>
  <div class="wrapper">
    <h1>Memories that Matter</h1>
    <h2>Reflecting on the Best Moments</h2>
    <p style="color: #333333; font-size: 1.2em; margin: 0 auto; width: 80%; padding-bottom:50px;">
      Every moment we've shared has been a treasure. I can't bear to lose such a wonderful friend and our priceless friendship..
    </p>
    <div class="carousel">
      <div><img src="https://i.ibb.co/6b370jM/Designer-1.jpg" alt="Image 1"></div> 
      <div><img src="https://i.ibb.co/v4NF8wX/Designer-2.jpg" alt="Image 2"></div>
      <div><img src="https://i.ibb.co/DpByRtf/Designer-3.jpg" alt="Image 3"></div>
      <div><img src="https://i.ibb.co/xXdwxsf/Designer-4.jpg" alt="Image 4"></div>
      <div><img src="https://i.ibb.co/K2dW8yd/Designer-5.jpg" alt="Image 5"></div>
      <div><img src="https://i.ibb.co/F39vxfL/Designer-6.jpg" alt="Image 6"></div>
      <div><img src="https://i.ibb.co/KGbFrH5/Designer-7.jpg" alt="Image 7"></div>
      <div><img src="https://i.ibb.co/r4fwQdk/Designer-8.jpg" alt="Image 8"></div>
      <div><img src="https://i.ibb.co/QXKNfnb/Designer-9.jpg" alt="Image 9"></div>
      <div><img src="https://i.ibb.co/7jwJFFL/Designer-10.jpg" alt="Image 10"></div>
      <div><img src="https://i.ibb.co/wsCYkZZ/Designer-11.jpg" alt="Image 11"></div>
      <div><img src="https://i.ibb.co/Nn8w7Lw/Designer-12.jpg" alt="Image 12"></div>
    </div>
  </div>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>
  <!-- Slick Carousel JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"><\/script>
  <script>
    $(document).ready(function(){
      $('.carousel').slick({
        slidesToShow: 3,
        dots: false, // Dots are hidden via CSS
        centerMode: true,
        centerPadding: '10px', // Adjust centerPadding for a more compact look
        focusOnSelect: true,
        speed: 800, // Adjust the speed of the slide transition
        responsive: [
          {
            breakpoint: 768, // Example breakpoint
            settings: {
              slidesToShow: 1,
              centerPadding: '10px',
            }
          }
        ]
      });
    });

    // Bokeh Effect JavaScript
    const bokehContainer = document.querySelector('.bokeh');
    const bokehCount = 50; // Number of bokeh circles

    for (let i = 0; i < bokehCount; i++) {
      const bokeh = document.createElement('div');
      const size = Math.random() * 100 + 50; // Random size between 50px and 150px
      bokeh.style.width = size + 'px';
      bokeh.style.height = size + 'px';
      bokeh.style.left = Math.random() * 100 + '%';
      bokeh.style.top = Math.random() * 100 + '%';
      bokeh.style.animationDuration = (Math.random() * 20 + 10) + 's'; // Random duration between 10s and 30s
      bokehContainer.appendChild(bokeh);
    }
  <\/script>
</body>
</html>




    
    `,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"slider"})});var v0="/apologyweb/assets/video.88d61c62.mp4";const y0=()=>{const e=`
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Reel Player</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .moving-gradient {
            background: linear-gradient(270deg, #b3e0ff, #99ccff, #66b3ff, #3399ff, #0099ff);
            background-size: 600% 600%;
            animation: gradientMove 12s ease infinite;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 2rem;
        }

        .container {
            position: relative;
            width: 100%;
            max-width: 400px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .heading {
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: bold;
            padding-top: 10px;
        }

        video {
            width: 90%;
            max-width: 400px;
            aspect-ratio: 9/16; /* Instagram Reels aspect ratio */
            border-radius: 10px;
            display: none;
        }

        .play-button {
            font-size: 18px;
            padding: 15px 30px;
            background: linear-gradient(135deg, #ff6f61, #ff9a9e);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            font-weight: bold;
            text-transform: uppercase;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }

        .play-button:hover {
            background: linear-gradient(135deg, #ff9a9e, #ff6f61);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            transform: translateY(-4px);
        }

        .play-button:active {
            transform: translateY(2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <div class="moving-gradient">
        <div class="container">
            <div class="heading">And, one last thing...</div>
            <button class="play-button" id="playButton">What?</button>
            <video id="reel" playsinline>
                <source src="${v0}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    <script>
        document.getElementById('playButton').addEventListener('click', function() {
            const video = document.getElementById('reel');
            video.style.display = 'block';
            video.play();
            this.style.display = 'none';
        });
    <\/script>
</body>
</html>

  `;return j("div",{className:"playerv-container",children:j("iframe",{srcDoc:e,style:{width:"100vw",height:"100vh",border:"none",overflow:"hidden"},title:"Playerv"})})};var Td={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ju=ot.createContext&&ot.createContext(Td),w0=["attr","size","title"];function k0(e,t){if(e==null)return{};var n=S0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function S0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}function ec(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Gi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ec(Object(n),!0).forEach(function(r){x0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ec(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x0(e,t,n){return t=_0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _0(e){var t=E0(e,"string");return typeof t=="symbol"?t:t+""}function E0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Od(e){return e&&e.map((t,n)=>ot.createElement(t.tag,Gi({key:n},t.attr),Od(t.child)))}function Ld(e){return t=>ot.createElement(C0,Ki({attr:Gi({},e.attr)},t),Od(e.child))}function C0(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=k0(e,w0),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),ot.createElement("svg",Ki({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:Gi(Gi({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ot.createElement("title",null,o),e.children)};return Ju!==void 0?ot.createElement(Ju.Consumer,null,n=>t(n)):t(Td)}function P0(e){return Ld({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function T0(e){return Ld({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"},child:[]}]})(e)}const Ct={popupHeading:"Embark on a Heartfelt Journey",popupText:"Best experienced on desktop.",popupText2:"Use earphones for an immersive experience.",button:"Let's Begin",section1:"Hey there",section2:"I wanna say something",section3:"And that is abcdefghijklmnopqrstuvwxyz"};function O0(){const[e,t]=I.exports.useState(!0),n=I.exports.useRef(new Audio(Bh)),r=()=>{t(!1);const i=n.current;i.loop=!1,i.play().catch(o=>console.log("Error playing audio:",o))};return I.exports.useEffect(()=>{const i=n.current,o=new IntersectionObserver(u=>{u.forEach(v=>{v.isIntersecting&&i.play().catch(w=>console.log("Error playing audio:",w))})},{threshold:.5}),l=new IntersectionObserver(u=>{u.forEach(v=>{v.isIntersecting&&i.play().catch(w=>console.log("Error playing audio:",w))})},{threshold:.5}),s=document.querySelector("#section-2"),a=document.querySelector("#section-3");return s&&o.observe(s),a&&l.observe(a),()=>{s&&o.disconnect(),a&&l.disconnect()}},[]),ni("div",{children:[e&&j("div",{style:L0,children:ni("div",{style:I0,children:[j("h2",{style:N0,children:Ct.popupHeading}),ni("p",{style:R0,children:[j(P0,{style:tc})," ",Ct.popupText," ",j("br",{}),j(T0,{style:tc})," ",Ct.popupText2]}),j("button",{onClick:r,style:z0,children:Ct.button})]})}),ni(f0,{pages:7,children:[j(Oe,{offset:0,speed:0,factor:1,style:{backgroundImage:`url(${bh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Oe,{id:"section-2",offset:1,speed:0,factor:1,style:{backgroundImage:`url(${Uh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Oe,{id:"section-3",offset:2,speed:0,factor:1,style:{backgroundImage:`url(${Vh})`,backgroundSize:"cover"},children:j("div",{className:"rain",children:Array.from({length:200}).map((i,o)=>j("div",{className:"rain-drop",style:{left:`${Math.random()*100}%`,"--i":o}},o))})}),j(Oe,{offset:3,speed:0,factor:1,style:{backgroundColor:"black",color:"white",textAlign:"center"},children:j(Xh,{})}),j(Oe,{offset:4,speed:0,style:{backgroundColor:"white",color:"white",textAlign:"center"},children:j(g0,{})}),j(Oe,{offset:5,speed:0,style:{backgroundColor:"black",color:"white",textAlign:"center"},children:j(m0,{})}),j(Oe,{offset:6,speed:0,children:j(y0,{})}),j(Oe,{sticky:{start:.9,end:2.1},style:{textAlign:"center"},children:j("img",{src:$h,alt:"Bear"})}),j(Oe,{offset:.2,speed:.15,children:j("h2",{children:Ct.section1})}),j(Oe,{offset:1.5,speed:2,children:j("h2",{children:Ct.section2})}),j(Oe,{offset:2.5,speed:1.5,children:j("h3",{children:Ct.section3})})]})]})}const L0={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.9)",padding:"30px",borderRadius:"12px",textAlign:"center",zIndex:1e3,boxShadow:"0px 0px 20px rgba(255, 255, 255, 0.2)"},I0={backgroundColor:"#282828",padding:"20px",borderRadius:"10px"},N0={fontSize:"24px",color:"#FFD700",marginBottom:"15px",textShadow:"2px 2px 5px rgba(0, 0, 0, 0.3)"},R0={color:"#fff",fontSize:"16px",marginBottom:"20px",lineHeight:"1.5"},z0={marginTop:"20px",padding:"12px 25px",fontSize:"18px",cursor:"pointer",backgroundColor:"#FFD700",color:"#000",border:"none",borderRadius:"5px",boxShadow:"0px 0px 10px rgba(255, 255, 255, 0.3)"},tc={marginRight:"8px",verticalAlign:"middle"};Dh.render(j(ot.StrictMode,{children:j(O0,{})}),document.getElementById("root"));
