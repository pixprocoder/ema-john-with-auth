function Hv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v={},Vv={get exports(){return v},set exports(e){v=e}},bo={},E={},Kv={get exports(){return E},set exports(e){E=e}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Yv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),eg=Symbol.for("react.suspense"),tg=Symbol.for("react.memo"),ng=Symbol.for("react.lazy"),Ac=Symbol.iterator;function rg(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var Jd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,eh={};function yr(e,t,n){this.props=e,this.context=t,this.refs=eh,this.updater=n||Jd}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function th(){}th.prototype=yr.prototype;function lu(e,t,n){this.props=e,this.context=t,this.refs=eh,this.updater=n||Jd}var uu=lu.prototype=new th;uu.constructor=lu;Zd(uu,yr.prototype);uu.isPureReactComponent=!0;var Lc=Array.isArray,nh=Object.prototype.hasOwnProperty,cu={current:null},rh={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)nh.call(t,r)&&!rh.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ni,type:e,key:a,ref:o,props:i,_owner:cu.current}}function ig(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function ag(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ag(""+e.key):t.toString(36)}function Ia(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ni:case Yv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+es(o,0):r,Lc(i)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),Ia(i,t,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=ig(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Lc(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+es(a,s);o+=Ia(a,t,n,l,i)}else if(l=rg(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+es(a,s++),o+=Ia(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xi(e,t,n){if(e==null)return e;var r=[],i=0;return Ia(e,r,"","",function(a){return t.call(n,a,i++)}),r}function og(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},xa={transition:null},sg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:xa,ReactCurrentOwner:cu};j.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=yr;j.Fragment=Gv;j.Profiler=qv;j.PureComponent=lu;j.StrictMode=Qv;j.Suspense=eg;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zd({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=cu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)nh.call(t,l)&&!rh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ni,type:e.type,key:i,ref:a,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:Jv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xv,_context:e},e.Consumer=e};j.createElement=ih;j.createFactory=function(e){var t=ih.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:Zv,render:e}};j.isValidElement=fu;j.lazy=function(e){return{$$typeof:ng,_payload:{_status:-1,_result:e},_init:og}};j.memo=function(e,t){return{$$typeof:tg,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=xa.transition;xa.transition={};try{e()}finally{xa.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return we.current.useCallback(e,t)};j.useContext=function(e){return we.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return we.current.useDeferredValue(e)};j.useEffect=function(e,t){return we.current.useEffect(e,t)};j.useId=function(){return we.current.useId()};j.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return we.current.useMemo(e,t)};j.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};j.useRef=function(e){return we.current.useRef(e)};j.useState=function(e){return we.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return we.current.useTransition()};j.version="18.2.0";(function(e){e.exports=j})(Kv);const du=Xd(E),Bs=Hv({__proto__:null,default:du},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=E,ug=Symbol.for("react.element"),cg=Symbol.for("react.fragment"),fg=Object.prototype.hasOwnProperty,dg=lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hg={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fg.call(t,r)&&!hg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ug,type:e,key:a,ref:o,props:i,_owner:dg.current}}bo.Fragment=cg;bo.jsx=ah;bo.jsxs=ah;(function(e){e.exports=bo})(Vv);var Ws={},pg={get exports(){return Ws},set exports(e){Ws=e}},Ne={},Hs={},mg={get exports(){return Hs},set exports(e){Hs=e}},oh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var M=P.length;P.push(A);e:for(;0<M;){var Z=M-1>>>1,oe=P[Z];if(0<i(oe,A))P[Z]=A,P[M]=oe,M=Z;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],M=P.pop();if(M!==A){P[0]=M;e:for(var Z=0,oe=P.length,Qi=oe>>>1;Z<Qi;){var sn=2*(Z+1)-1,Zo=P[sn],ln=sn+1,qi=P[ln];if(0>i(Zo,M))ln<oe&&0>i(qi,Zo)?(P[Z]=qi,P[ln]=M,Z=ln):(P[Z]=Zo,P[sn]=M,Z=sn);else if(ln<oe&&0>i(qi,M))P[Z]=qi,P[ln]=M,Z=ln;else break e}}return A}function i(P,A){var M=P.sortIndex-A.sortIndex;return M!==0?M:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,p=3,g=!1,w=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function _(P){if(y=!1,m(P),!w)if(n(l)!==null)w=!0,Xo(k);else{var A=n(u);A!==null&&Jo(_,A.startTime-P)}}function k(P,A){w=!1,y&&(y=!1,h(O),O=-1),g=!0;var M=p;try{for(m(A),f=n(l);f!==null&&(!(f.expirationTime>A)||P&&!Fe());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var oe=Z(f.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),m(A)}else r(l);f=n(l)}if(f!==null)var Qi=!0;else{var sn=n(u);sn!==null&&Jo(_,sn.startTime-A),Qi=!1}return Qi}finally{f=null,p=M,g=!1}}var x=!1,C=null,O=-1,U=5,L=-1;function Fe(){return!(e.unstable_now()-L<U)}function Tr(){if(C!==null){var P=e.unstable_now();L=P;var A=!0;try{A=C(!0,P)}finally{A?Pr():(x=!1,C=null)}}else x=!1}var Pr;if(typeof d=="function")Pr=function(){d(Tr)};else if(typeof MessageChannel<"u"){var Rc=new MessageChannel,Wv=Rc.port2;Rc.port1.onmessage=Tr,Pr=function(){Wv.postMessage(null)}}else Pr=function(){I(Tr,0)};function Xo(P){C=P,x||(x=!0,Pr())}function Jo(P,A){O=I(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Xo(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var M=p;p=A;try{return P()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=p;p=P;try{return A()}finally{p=M}},e.unstable_scheduleCallback=function(P,A,M){var Z=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Z+M:Z):M=Z,P){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=M+oe,P={id:c++,callback:A,priorityLevel:P,startTime:M,expirationTime:oe,sortIndex:-1},M>Z?(P.sortIndex=M,t(u,P),n(l)===null&&P===n(u)&&(y?(h(O),O=-1):y=!0,Jo(_,M-Z))):(P.sortIndex=oe,t(l,P),w||g||(w=!0,Xo(k))),P},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(P){var A=p;return function(){var M=p;p=A;try{return P.apply(this,arguments)}finally{p=M}}}})(oh);(function(e){e.exports=oh})(mg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh=E,Pe=Hs;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lh=new Set,ri={};function On(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(ri[e]=t,e=0;e<t.length;e++)lh.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},jc={};function gg(e){return Vs.call(jc,e)?!0:Vs.call(Mc,e)?!1:vg.test(e)?jc[e]=!0:(Mc[e]=!0,!1)}function yg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wg(e,t,n,r){if(t===null||typeof t>"u"||yg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var hu=/[\-:]([a-z])/g;function pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hu,pu);fe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hu,pu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hu,pu);fe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wg(t,n,i,r)&&(n=null),r||i===null?gg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ji=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),Ks=Symbol.for("react.profiler"),uh=Symbol.for("react.provider"),ch=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),Ys=Symbol.for("react.suspense"),Gs=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),fh=Symbol.for("react.offscreen"),Uc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=Uc&&e[Uc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ts;function Ur(e){if(ts===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ts=t&&t[1]||""}return`
`+ts+e}var ns=!1;function rs(e,t){if(!e||ns)return"";ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function _g(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=rs(e.type,!1),e;case 11:return e=rs(e.type.render,!1),e;case 1:return e=rs(e.type,!0),e;default:return""}}function Qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case Mn:return"Portal";case Ks:return"Profiler";case vu:return"StrictMode";case Ys:return"Suspense";case Gs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ch:return(e.displayName||"Context")+".Consumer";case uh:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yu:return t=e.displayName||null,t!==null?t:Qs(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Qs(e(t))}catch{}}return null}function kg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qs(t);case 8:return t===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eg(e){var t=dh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zi(e){e._valueTracker||(e._valueTracker=Eg(e))}function hh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ph(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function Xs(e,t){ph(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Js(e,t.type,n):t.hasOwnProperty("defaultValue")&&Js(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Js(e,t,n){(t!=="number"||Ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function mh(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ea,gh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sg=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Sg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function yh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function wh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ig=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(Ig[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,Zn=null,er=null;function Wc(e){if(e=Ai(e)){if(typeof il!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ro(t),il(e.stateNode,e.type,t))}}function _h(e){Zn?er?er.push(e):er=[e]:Zn=e}function kh(){if(Zn){var e=Zn,t=er;if(er=Zn=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function Eh(e,t){return e(t)}function Sh(){}var is=!1;function Ih(e,t,n){if(is)return e(t,n);is=!0;try{return Eh(e,t,n)}finally{is=!1,(Zn!==null||er!==null)&&(Sh(),kh())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var al=!1;if(pt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){al=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{al=!1}function xg(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Kr=!1,Wa=null,Ha=!1,ol=null,Cg={onError:function(e){Kr=!0,Wa=e}};function bg(e,t,n,r,i,a,o,s,l){Kr=!1,Wa=null,xg.apply(Cg,arguments)}function Tg(e,t,n,r,i,a,o,s,l){if(bg.apply(this,arguments),Kr){if(Kr){var u=Wa;Kr=!1,Wa=null}else throw Error(S(198));Ha||(Ha=!0,ol=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(Rn(e)!==e)throw Error(S(188))}function Pg(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Hc(i),e;if(a===r)return Hc(i),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Ch(e){return e=Pg(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var Th=Pe.unstable_scheduleCallback,Vc=Pe.unstable_cancelCallback,Ng=Pe.unstable_shouldYield,Og=Pe.unstable_requestPaint,ee=Pe.unstable_now,Rg=Pe.unstable_getCurrentPriorityLevel,_u=Pe.unstable_ImmediatePriority,Ph=Pe.unstable_UserBlockingPriority,Va=Pe.unstable_NormalPriority,Ag=Pe.unstable_LowPriority,Nh=Pe.unstable_IdlePriority,To=null,et=null;function Lg(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:jg,Dg=Math.log,Mg=Math.LN2;function jg(e){return e>>>=0,e===0?32:31-(Dg(e)/Mg|0)|0}var ta=64,na=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Fr(s):(a&=o,a!==0&&(r=Fr(a)))}else o=n&~i,o!==0?r=Fr(o):a!==0&&(r=Fr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ke(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Ug(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oh(){var e=ta;return ta<<=1,!(ta&4194240)&&(ta=64),e}function as(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Fg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Rh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Eu,Lh,Dh,Mh,ll=!1,ra=[],Ut=null,zt=null,Ft=null,oi=new Map,si=new Map,Pt=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function Rr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ai(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bg(e,t,n,r,i){switch(t){case"focusin":return Ut=Rr(Ut,e,t,n,r,i),!0;case"dragenter":return zt=Rr(zt,e,t,n,r,i),!0;case"mouseover":return Ft=Rr(Ft,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return oi.set(a,Rr(oi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,si.set(a,Rr(si.get(a)||null,e,t,n,r,i)),!0}return!1}function jh(e){var t=dn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=xh(n),t!==null){e.blockedOn=t,Mh(e.priority,function(){Lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ca(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=Ai(n),t!==null&&Eu(t),e.blockedOn=n,!1;t.shift()}return!0}function Yc(e,t,n){Ca(e)&&n.delete(t)}function Wg(){ll=!1,Ut!==null&&Ca(Ut)&&(Ut=null),zt!==null&&Ca(zt)&&(zt=null),Ft!==null&&Ca(Ft)&&(Ft=null),oi.forEach(Yc),si.forEach(Yc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Wg)))}function li(e){function t(i){return Ar(i,e)}if(0<ra.length){Ar(ra[0],e);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Ar(Ut,e),zt!==null&&Ar(zt,e),Ft!==null&&Ar(Ft,e),oi.forEach(t),si.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)jh(n),n.blockedOn===null&&Pt.shift()}var tr=Et.ReactCurrentBatchConfig,Ya=!0;function Hg(e,t,n,r){var i=F,a=tr.transition;tr.transition=null;try{F=1,Su(e,t,n,r)}finally{F=i,tr.transition=a}}function Vg(e,t,n,r){var i=F,a=tr.transition;tr.transition=null;try{F=4,Su(e,t,n,r)}finally{F=i,tr.transition=a}}function Su(e,t,n,r){if(Ya){var i=ul(e,t,n,r);if(i===null)ms(e,t,r,Ga,n),Kc(e,r);else if(Bg(i,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<$g.indexOf(e)){for(;i!==null;){var a=Ai(i);if(a!==null&&Ah(a),a=ul(e,t,n,r),a===null&&ms(e,t,r,Ga,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ms(e,t,r,null,n)}}var Ga=null;function ul(e,t,n,r){if(Ga=null,e=wu(r),e=dn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ga=e,null}function Uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case _u:return 1;case Ph:return 4;case Va:case Ag:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var Lt=null,Iu=null,ba=null;function zh(){if(ba)return ba;var e,t=Iu,n=t.length,r,i="value"in Lt?Lt.value:Lt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ba=i.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function Gc(){return!1}function Oe(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ia:Gc,this.isPropagationStopped=Gc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Oe(wr),Ri=q({},wr,{view:0,detail:0}),Kg=Oe(Ri),os,ss,Lr,Po=q({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(os=e.screenX-Lr.screenX,ss=e.screenY-Lr.screenY):ss=os=0,Lr=e),os)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Qc=Oe(Po),Yg=q({},Po,{dataTransfer:0}),Gg=Oe(Yg),Qg=q({},Ri,{relatedTarget:0}),ls=Oe(Qg),qg=q({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=Oe(qg),Jg=q({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zg=Oe(Jg),ey=q({},wr,{data:0}),qc=Oe(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ry[e])?!!t[e]:!1}function Cu(){return iy}var ay=q({},Ri,{key:function(e){if(e.key){var t=ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=Oe(ay),sy=q({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Oe(sy),ly=q({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),uy=Oe(ly),cy=q({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=Oe(cy),dy=q({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hy=Oe(dy),py=[9,13,27,32],bu=pt&&"CompositionEvent"in window,Yr=null;pt&&"documentMode"in document&&(Yr=document.documentMode);var my=pt&&"TextEvent"in window&&!Yr,Fh=pt&&(!bu||Yr&&8<Yr&&11>=Yr),Jc=String.fromCharCode(32),Zc=!1;function $h(e,t){switch(e){case"keyup":return py.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function vy(e,t){switch(e){case"compositionend":return Bh(t);case"keypress":return t.which!==32?null:(Zc=!0,Jc);case"textInput":return e=t.data,e===Jc&&Zc?null:e;default:return null}}function gy(e,t){if(Un)return e==="compositionend"||!bu&&$h(e,t)?(e=zh(),ba=Iu=Lt=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fh&&t.locale!=="ko"?null:t.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yy[e.type]:t==="textarea"}function Wh(e,t,n,r){_h(r),t=Qa(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ui=null;function wy(e){ep(e,0)}function No(e){var t=$n(e);if(hh(t))return e}function _y(e,t){if(e==="change")return t}var Hh=!1;if(pt){var us;if(pt){var cs="oninput"in document;if(!cs){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),cs=typeof tf.oninput=="function"}us=cs}else us=!1;Hh=us&&(!document.documentMode||9<document.documentMode)}function nf(){Gr&&(Gr.detachEvent("onpropertychange",Vh),ui=Gr=null)}function Vh(e){if(e.propertyName==="value"&&No(ui)){var t=[];Wh(t,ui,e,wu(e)),Ih(wy,t)}}function ky(e,t,n){e==="focusin"?(nf(),Gr=t,ui=n,Gr.attachEvent("onpropertychange",Vh)):e==="focusout"&&nf()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(ui)}function Sy(e,t){if(e==="click")return No(t)}function Iy(e,t){if(e==="input"||e==="change")return No(t)}function xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:xy;function ci(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vs.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function af(e,t){var n=rf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function Kh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yh(){for(var e=window,t=Ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ba(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cy(e){var t=Yh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kh(n.ownerDocument.documentElement,n)){if(r!==null&&Tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=af(n,a);var o=af(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var by=pt&&"documentMode"in document&&11>=document.documentMode,zn=null,cl=null,Qr=null,fl=!1;function of(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||zn==null||zn!==Ba(r)||(r=zn,"selectionStart"in r&&Tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&ci(Qr,r)||(Qr=r,r=Qa(cl,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},fs={},Gh={};pt&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function Oo(e){if(fs[e])return fs[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gh)return fs[e]=t[n];return e}var Qh=Oo("animationend"),qh=Oo("animationiteration"),Xh=Oo("animationstart"),Jh=Oo("transitionend"),Zh=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Zh.set(e,t),On(t,[e])}for(var ds=0;ds<sf.length;ds++){var hs=sf[ds],Ty=hs.toLowerCase(),Py=hs[0].toUpperCase()+hs.slice(1);tn(Ty,"on"+Py)}tn(Qh,"onAnimationEnd");tn(qh,"onAnimationIteration");tn(Xh,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Jh,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function lf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tg(r,t,void 0,e),e.currentTarget=null}function ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;lf(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;lf(i,s,u),a=l}}}if(Ha)throw e=ol,Ha=!1,ol=null,e}function W(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(tp(t,e,2,!1),n.add(r))}function ps(e,t,n){var r=0;t&&(r|=4),tp(n,e,r,t)}var oa="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[oa]){e[oa]=!0,lh.forEach(function(n){n!=="selectionchange"&&(Ny.has(n)||ps(n,!1,e),ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oa]||(t[oa]=!0,ps("selectionchange",!1,t))}}function tp(e,t,n,r){switch(Uh(t)){case 1:var i=Hg;break;case 4:i=Vg;break;default:i=Su}n=i.bind(null,t,n,e),i=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ms(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=dn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Ih(function(){var u=a,c=wu(n),f=[];e:{var p=Zh.get(e);if(p!==void 0){var g=xu,w=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":g=oy;break;case"focusin":w="focus",g=ls;break;case"focusout":w="blur",g=ls;break;case"beforeblur":case"afterblur":g=ls;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uy;break;case Qh:case qh:case Xh:g=Xg;break;case Jh:g=fy;break;case"scroll":g=Kg;break;case"wheel":g=hy;break;case"copy":case"cut":case"paste":g=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xc}var y=(t&4)!==0,I=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var d=u,m;d!==null;){m=d;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=ai(d,h),_!=null&&y.push(di(d,_,m)))),I)break;d=d.return}0<y.length&&(p=new g(p,w,null,n,c),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==rl&&(w=n.relatedTarget||n.fromElement)&&(dn(w)||w[mt]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?dn(w):null,w!==null&&(I=Rn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=Qc,_="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xc,_="onPointerLeave",h="onPointerEnter",d="pointer"),I=g==null?p:$n(g),m=w==null?p:$n(w),p=new y(_,d+"leave",g,n,c),p.target=I,p.relatedTarget=m,_=null,dn(c)===u&&(y=new y(h,d+"enter",w,n,c),y.target=m,y.relatedTarget=I,_=y),I=_,g&&w)t:{for(y=g,h=w,d=0,m=y;m;m=Dn(m))d++;for(m=0,_=h;_;_=Dn(_))m++;for(;0<d-m;)y=Dn(y),d--;for(;0<m-d;)h=Dn(h),m--;for(;d--;){if(y===h||h!==null&&y===h.alternate)break t;y=Dn(y),h=Dn(h)}y=null}else y=null;g!==null&&uf(f,p,g,y,!1),w!==null&&I!==null&&uf(f,I,w,y,!0)}}e:{if(p=u?$n(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=_y;else if(ef(p))if(Hh)k=Iy;else{k=Ey;var x=ky}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Sy);if(k&&(k=k(e,u))){Wh(f,k,n,c);break e}x&&x(e,p,u),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&Js(p,"number",p.value)}switch(x=u?$n(u):window,e){case"focusin":(ef(x)||x.contentEditable==="true")&&(zn=x,cl=u,Qr=null);break;case"focusout":Qr=cl=zn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,of(f,n,c);break;case"selectionchange":if(by)break;case"keydown":case"keyup":of(f,n,c)}var C;if(bu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Un?$h(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Fh&&n.locale!=="ko"&&(Un||O!=="onCompositionStart"?O==="onCompositionEnd"&&Un&&(C=zh()):(Lt=c,Iu="value"in Lt?Lt.value:Lt.textContent,Un=!0)),x=Qa(u,O),0<x.length&&(O=new qc(O,e,null,n,c),f.push({event:O,listeners:x}),C?O.data=C:(C=Bh(n),C!==null&&(O.data=C)))),(C=my?vy(e,n):gy(e,n))&&(u=Qa(u,"onBeforeInput"),0<u.length&&(c=new qc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}ep(f,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ai(e,n),a!=null&&r.unshift(di(e,a,i)),a=ai(e,t),a!=null&&r.push(di(e,a,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ai(n,a),l!=null&&o.unshift(di(n,l,s))):i||(l=ai(n,a),l!=null&&o.push(di(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Oy=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(Ry,"")}function sa(e,t,n){if(t=cf(t),cf(e)!==t&&n)throw Error(S(425))}function qa(){}var dl=null,hl=null;function pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(e){return ff.resolve(null).then(e).catch(Dy)}:ml;function Dy(e){setTimeout(function(){throw e})}function vs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Je="__reactFiber$"+_r,hi="__reactProps$"+_r,mt="__reactContainer$"+_r,vl="__reactEvents$"+_r,My="__reactListeners$"+_r,jy="__reactHandles$"+_r;function dn(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[Je])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ai(e){return e=e[Je]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ro(e){return e[hi]||null}var gl=[],Bn=-1;function nn(e){return{current:e}}function V(e){0>Bn||(e.current=gl[Bn],gl[Bn]=null,Bn--)}function B(e,t){Bn++,gl[Bn]=e.current,e.current=t}var qt={},me=nn(qt),Se=nn(!1),kn=qt;function ur(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function Xa(){V(Se),V(me)}function hf(e,t,n){if(me.current!==qt)throw Error(S(168));B(me,t),B(Se,n)}function np(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,kg(e)||"Unknown",i));return q({},n,r)}function Ja(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,kn=me.current,B(me,e),B(Se,Se.current),!0}function pf(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=np(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(me),B(me,e)):V(Se),B(Se,n)}var ot=null,Ao=!1,gs=!1;function rp(e){ot===null?ot=[e]:ot.push(e)}function Uy(e){Ao=!0,rp(e)}function rn(){if(!gs&&ot!==null){gs=!0;var e=0,t=F;try{var n=ot;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Ao=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),Th(_u,rn),i}finally{F=t,gs=!1}}return null}var Wn=[],Hn=0,Za=null,eo=0,Ae=[],Le=0,En=null,ut=1,ct="";function un(e,t){Wn[Hn++]=eo,Wn[Hn++]=Za,Za=e,eo=t}function ip(e,t,n){Ae[Le++]=ut,Ae[Le++]=ct,Ae[Le++]=En,En=e;var r=ut;e=ct;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ut=1<<32-Ke(t)+i|n<<i|r,ct=a+e}else ut=1<<a|n<<i|r,ct=e}function Pu(e){e.return!==null&&(un(e,1),ip(e,1,0))}function Nu(e){for(;e===Za;)Za=Wn[--Hn],Wn[Hn]=null,eo=Wn[--Hn],Wn[Hn]=null;for(;e===En;)En=Ae[--Le],Ae[Le]=null,ct=Ae[--Le],Ae[Le]=null,ut=Ae[--Le],Ae[Le]=null}var Te=null,be=null,Y=!1,He=null;function ap(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,be=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:ut,overflow:ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,be=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(Y){var t=be;if(t){var n=t;if(!mf(e,t)){if(yl(e))throw Error(S(418));t=$t(n.nextSibling);var r=Te;t&&mf(e,t)?ap(r,n):(e.flags=e.flags&-4097|2,Y=!1,Te=e)}}else{if(yl(e))throw Error(S(418));e.flags=e.flags&-4097|2,Y=!1,Te=e}}}function vf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function la(e){if(e!==Te)return!1;if(!Y)return vf(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pl(e.type,e.memoizedProps)),t&&(t=be)){if(yl(e))throw op(),Error(S(418));for(;t;)ap(e,t),t=$t(t.nextSibling)}if(vf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Te?$t(e.stateNode.nextSibling):null;return!0}function op(){for(var e=be;e;)e=$t(e.nextSibling)}function cr(){be=Te=null,Y=!1}function Ou(e){He===null?He=[e]:He.push(e)}var zy=Et.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var to=nn(null),no=null,Vn=null,Ru=null;function Au(){Ru=Vn=no=null}function Lu(e){var t=to.current;V(to),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){no=e,Ru=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(no===null)throw Error(S(308));Vn=e,no.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var hn=null;function Du(e){hn===null?hn=[e]:hn.push(e)}function sp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Du(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Du(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}function gf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ro(e,t,n,r){var i=e.updateQueue;Tt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,y=s;switch(p=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(g,f,p);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,p=typeof w=="function"?w.call(g,f,p):w,p==null)break e;f=q({},f,p);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);In|=o,e.lanes=o,e.memoizedState=f}}function yf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var up=new sh.Component().refs;function kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ht(e),a=ht(r,i);a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,i),t!==null&&(Ye(t,e,i,r),Pa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),i=Ht(e),a=ht(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Bt(e,a,i),t!==null&&(Ye(t,e,i,r),Pa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ht(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=Bt(e,i,r),t!==null&&(Ye(t,e,r,n),Pa(t,e,r))}};function wf(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ci(n,r)||!ci(i,a):!0}function cp(e,t,n){var r=!1,i=qt,a=t.contextType;return typeof a=="object"&&a!==null?a=je(a):(i=Ie(t)?kn:me.current,r=t.contextTypes,a=(r=r!=null)?ur(e,i):qt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function _f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=up,Mu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=je(a):(a=Ie(t)?kn:me.current,i.context=ur(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(kl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lo.enqueueReplaceState(i,i.state,null),ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===up&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ua(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kf(e){var t=e._init;return t(e._payload)}function fp(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Vt(h,d),h.index=0,h.sibling=null,h}function a(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,m,_){return d===null||d.tag!==6?(d=Is(m,h.mode,_),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,_){var k=m.type;return k===jn?c(h,d,m.props.children,_,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===bt&&kf(k)===d.type)?(_=i(d,m.props),_.ref=Dr(h,d,m),_.return=h,_):(_=Da(m.type,m.key,m.props,null,h.mode,_),_.ref=Dr(h,d,m),_.return=h,_)}function u(h,d,m,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=xs(m,h.mode,_),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,_,k){return d===null||d.tag!==7?(d=wn(m,h.mode,_,k),d.return=h,d):(d=i(d,m),d.return=h,d)}function f(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Is(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ji:return m=Da(d.type,d.key,d.props,null,h.mode,m),m.ref=Dr(h,null,d),m.return=h,m;case Mn:return d=xs(d,h.mode,m),d.return=h,d;case bt:var _=d._init;return f(h,_(d._payload),m)}if(zr(d)||Nr(d))return d=wn(d,h.mode,m,null),d.return=h,d;ua(h,d)}return null}function p(h,d,m,_){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(h,d,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ji:return m.key===k?l(h,d,m,_):null;case Mn:return m.key===k?u(h,d,m,_):null;case bt:return k=m._init,p(h,d,k(m._payload),_)}if(zr(m)||Nr(m))return k!==null?null:c(h,d,m,_,null);ua(h,m)}return null}function g(h,d,m,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,s(d,h,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ji:return h=h.get(_.key===null?m:_.key)||null,l(d,h,_,k);case Mn:return h=h.get(_.key===null?m:_.key)||null,u(d,h,_,k);case bt:var x=_._init;return g(h,d,m,x(_._payload),k)}if(zr(_)||Nr(_))return h=h.get(m)||null,c(d,h,_,k,null);ua(d,_)}return null}function w(h,d,m,_){for(var k=null,x=null,C=d,O=d=0,U=null;C!==null&&O<m.length;O++){C.index>O?(U=C,C=null):U=C.sibling;var L=p(h,C,m[O],_);if(L===null){C===null&&(C=U);break}e&&C&&L.alternate===null&&t(h,C),d=a(L,d,O),x===null?k=L:x.sibling=L,x=L,C=U}if(O===m.length)return n(h,C),Y&&un(h,O),k;if(C===null){for(;O<m.length;O++)C=f(h,m[O],_),C!==null&&(d=a(C,d,O),x===null?k=C:x.sibling=C,x=C);return Y&&un(h,O),k}for(C=r(h,C);O<m.length;O++)U=g(C,h,O,m[O],_),U!==null&&(e&&U.alternate!==null&&C.delete(U.key===null?O:U.key),d=a(U,d,O),x===null?k=U:x.sibling=U,x=U);return e&&C.forEach(function(Fe){return t(h,Fe)}),Y&&un(h,O),k}function y(h,d,m,_){var k=Nr(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var x=k=null,C=d,O=d=0,U=null,L=m.next();C!==null&&!L.done;O++,L=m.next()){C.index>O?(U=C,C=null):U=C.sibling;var Fe=p(h,C,L.value,_);if(Fe===null){C===null&&(C=U);break}e&&C&&Fe.alternate===null&&t(h,C),d=a(Fe,d,O),x===null?k=Fe:x.sibling=Fe,x=Fe,C=U}if(L.done)return n(h,C),Y&&un(h,O),k;if(C===null){for(;!L.done;O++,L=m.next())L=f(h,L.value,_),L!==null&&(d=a(L,d,O),x===null?k=L:x.sibling=L,x=L);return Y&&un(h,O),k}for(C=r(h,C);!L.done;O++,L=m.next())L=g(C,h,O,L.value,_),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?O:L.key),d=a(L,d,O),x===null?k=L:x.sibling=L,x=L);return e&&C.forEach(function(Tr){return t(h,Tr)}),Y&&un(h,O),k}function I(h,d,m,_){if(typeof m=="object"&&m!==null&&m.type===jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ji:e:{for(var k=m.key,x=d;x!==null;){if(x.key===k){if(k=m.type,k===jn){if(x.tag===7){n(h,x.sibling),d=i(x,m.props.children),d.return=h,h=d;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===bt&&kf(k)===x.type){n(h,x.sibling),d=i(x,m.props),d.ref=Dr(h,x,m),d.return=h,h=d;break e}n(h,x);break}else t(h,x);x=x.sibling}m.type===jn?(d=wn(m.props.children,h.mode,_,m.key),d.return=h,h=d):(_=Da(m.type,m.key,m.props,null,h.mode,_),_.ref=Dr(h,d,m),_.return=h,h=_)}return o(h);case Mn:e:{for(x=m.key;d!==null;){if(d.key===x)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=xs(m,h.mode,_),d.return=h,h=d}return o(h);case bt:return x=m._init,I(h,d,x(m._payload),_)}if(zr(m))return w(h,d,m,_);if(Nr(m))return y(h,d,m,_);ua(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=Is(m,h.mode,_),d.return=h,h=d),o(h)):n(h,d)}return I}var fr=fp(!0),dp=fp(!1),Li={},tt=nn(Li),pi=nn(Li),mi=nn(Li);function pn(e){if(e===Li)throw Error(S(174));return e}function ju(e,t){switch(B(mi,t),B(pi,e),B(tt,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}V(tt),B(tt,t)}function dr(){V(tt),V(pi),V(mi)}function hp(e){pn(mi.current);var t=pn(tt.current),n=el(t,e.type);t!==n&&(B(pi,e),B(tt,n))}function Uu(e){pi.current===e&&(V(tt),V(pi))}var G=nn(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ys=[];function zu(){for(var e=0;e<ys.length;e++)ys[e]._workInProgressVersionPrimary=null;ys.length=0}var Na=Et.ReactCurrentDispatcher,ws=Et.ReactCurrentBatchConfig,Sn=0,Q=null,re=null,se=null,ao=!1,qr=!1,vi=0,Fy=0;function de(){throw Error(S(321))}function Fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function $u(e,t,n,r,i,a){if(Sn=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Na.current=e===null||e.memoizedState===null?Hy:Vy,e=n(r,i),qr){a=0;do{if(qr=!1,vi=0,25<=a)throw Error(S(301));a+=1,se=re=null,t.updateQueue=null,Na.current=Ky,e=n(r,i)}while(qr)}if(Na.current=oo,t=re!==null&&re.next!==null,Sn=0,se=re=Q=null,ao=!1,t)throw Error(S(300));return e}function Bu(){var e=vi!==0;return vi=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Q.memoizedState=se=e:se=se.next=e,se}function Ue(){if(re===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=se===null?Q.memoizedState:se.next;if(t!==null)se=t,re=e;else{if(e===null)throw Error(S(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?Q.memoizedState=se=e:se=se.next=e}return se}function gi(e,t){return typeof t=="function"?t(e):t}function _s(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Sn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Q.lanes|=c,In|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Ge(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,In|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ks(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ge(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function pp(){}function mp(e,t){var n=Q,r=Ue(),i=t(),a=!Ge(r.memoizedState,i);if(a&&(r.memoizedState=i,Ee=!0),r=r.queue,Wu(yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,yi(9,gp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(S(349));Sn&30||vp(n,t,i)}return i}function vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gp(e,t,n,r){t.value=n,t.getSnapshot=r,wp(t)&&_p(e)}function yp(e,t,n){return n(function(){wp(t)&&_p(e)})}function wp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function _p(e){var t=vt(e,1);t!==null&&Ye(t,e,1,-1)}function Ef(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:e},t.queue=e,e=e.dispatch=Wy.bind(null,Q,e),[t.memoizedState,e]}function yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kp(){return Ue().memoizedState}function Oa(e,t,n,r){var i=Xe();Q.flags|=e,i.memoizedState=yi(1|t,n,void 0,r===void 0?null:r)}function Do(e,t,n,r){var i=Ue();r=r===void 0?null:r;var a=void 0;if(re!==null){var o=re.memoizedState;if(a=o.destroy,r!==null&&Fu(r,o.deps)){i.memoizedState=yi(t,n,a,r);return}}Q.flags|=e,i.memoizedState=yi(1|t,n,a,r)}function Sf(e,t){return Oa(8390656,8,e,t)}function Wu(e,t){return Do(2048,8,e,t)}function Ep(e,t){return Do(4,2,e,t)}function Sp(e,t){return Do(4,4,e,t)}function Ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xp(e,t,n){return n=n!=null?n.concat([e]):null,Do(4,4,Ip.bind(null,t,e),n)}function Hu(){}function Cp(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bp(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return Sn&21?(Ge(n,t)||(n=Oh(),Q.lanes|=n,In|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function $y(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ws.transition;ws.transition={};try{e(!1),t()}finally{F=n,ws.transition=r}}function Pp(){return Ue().memoizedState}function By(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Np(e))Op(t,n);else if(n=sp(e,t,n,r),n!==null){var i=ye();Ye(n,e,r,i),Rp(n,t,r)}}function Wy(e,t,n){var r=Ht(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Op(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,o)){var l=t.interleaved;l===null?(i.next=i,Du(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=sp(e,t,i,r),n!==null&&(i=ye(),Ye(n,e,r,i),Rp(n,t,r))}}function Np(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Op(e,t){qr=ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ku(e,n)}}var oo={readContext:je,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Hy={readContext:je,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Sf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oa(4194308,4,Ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=By.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Ef,useDebugValue:Hu,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Ef(!1),t=e[0];return e=$y.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=Xe();if(Y){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Sn&30||vp(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Sf(yp.bind(null,r,a,e),[e]),r.flags|=2048,yi(9,gp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xe(),t=le.identifierPrefix;if(Y){var n=ct,r=ut;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vy={readContext:je,useCallback:Cp,useContext:je,useEffect:Wu,useImperativeHandle:xp,useInsertionEffect:Ep,useLayoutEffect:Sp,useMemo:bp,useReducer:_s,useRef:kp,useState:function(){return _s(gi)},useDebugValue:Hu,useDeferredValue:function(e){var t=Ue();return Tp(t,re.memoizedState,e)},useTransition:function(){var e=_s(gi)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1},Ky={readContext:je,useCallback:Cp,useContext:je,useEffect:Wu,useImperativeHandle:xp,useInsertionEffect:Ep,useLayoutEffect:Sp,useMemo:bp,useReducer:ks,useRef:kp,useState:function(){return ks(gi)},useDebugValue:Hu,useDeferredValue:function(e){var t=Ue();return re===null?t.memoizedState=e:Tp(t,re.memoizedState,e)},useTransition:function(){var e=ks(gi)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=_g(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,Al=r),Sl(e,t)},n}function Lp(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function If(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s0.bind(null,e,t,n),t.then(e,e))}function xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Gy=Et.ReactCurrentOwner,Ee=!1;function ge(e,t,n,r){t.child=e===null?dp(t,null,n,r):fr(t,e.child,n,r)}function bf(e,t,n,r,i){n=n.render;var a=t.ref;return nr(t,i),r=$u(e,t,n,r,a,i),n=Bu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(Y&&n&&Pu(t),t.flags|=1,ge(e,t,r,i),t.child)}function Tf(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ju(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Dp(e,t,a,r,i)):(e=Da(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(o,r)&&e.ref===t.ref)return gt(e,t,i)}return t.flags|=1,e=Vt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Dp(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ci(a,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,gt(e,t,i)}return Il(e,t,n,r,i)}function Mp(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Yn,Ce),Ce|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Yn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(Yn,Ce),Ce|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(Yn,Ce),Ce|=r;return ge(e,t,i,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,i){var a=Ie(n)?kn:me.current;return a=ur(t,a),nr(t,i),n=$u(e,t,n,r,a,i),r=Bu(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gt(e,t,i)):(Y&&r&&Pu(t),t.flags|=1,ge(e,t,n,i),t.child)}function Pf(e,t,n,r,i){if(Ie(n)){var a=!0;Ja(t)}else a=!1;if(nr(t,i),t.stateNode===null)Ra(e,t),cp(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=je(u):(u=Ie(n)?kn:me.current,u=ur(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&_f(t,o,r,u),Tt=!1;var p=t.memoizedState;o.state=p,ro(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Se.current||Tt?(typeof c=="function"&&(kl(t,n,c,r),l=t.memoizedState),(s=Tt||wf(t,n,s,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,lp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Be(t.type,s),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=je(l):(l=Ie(n)?kn:me.current,l=ur(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&_f(t,o,r,l),Tt=!1,p=t.memoizedState,o.state=p,ro(t,r,o,i);var w=t.memoizedState;s!==f||p!==w||Se.current||Tt?(typeof g=="function"&&(kl(t,n,g,r),w=t.memoizedState),(u=Tt||wf(t,n,u,r,p,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,a,i)}function xl(e,t,n,r,i,a){jp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&pf(t,n,!1),gt(e,t,a);r=t.stateNode,Gy.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,s,a)):ge(e,t,s,a),t.memoizedState=r.state,i&&pf(t,n,!0),t.child}function Up(e){var t=e.stateNode;t.pendingContext?hf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hf(e,t.context,!1),ju(e,t.containerInfo)}function Nf(e,t,n,r,i){return cr(),Ou(i),t.flags|=256,ge(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zp(e,t,n){var r=t.pendingProps,i=G.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Uo(o,r,0,null),e=wn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=bl(n),t.memoizedState=Cl,e):Vu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qy(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Vt(s,a):(a=wn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?bl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return a=e.child,e=a.sibling,r=Vt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vu(e,t){return t=Uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,n,r){return r!==null&&Ou(r),fr(t,e.child,null,n),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qy(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Es(Error(S(422))),ca(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Uo({mode:"visible",children:r.children},i,0,null),a=wn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&fr(t,e.child,null,o),t.child.memoizedState=bl(o),t.memoizedState=Cl,a);if(!(t.mode&1))return ca(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=Es(a,r,void 0),ca(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ee||s){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vt(e,i),Ye(r,e,i,-1))}return Xu(),r=Es(Error(S(421))),ca(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l0.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,be=$t(i.nextSibling),Te=t,Y=!0,He=null,e!==null&&(Ae[Le++]=ut,Ae[Le++]=ct,Ae[Le++]=En,ut=e.id,ct=e.overflow,En=t),t=Vu(t,r.children),t.flags|=4096,t)}function Of(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Ss(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Fp(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Of(e,n,t);else if(e.tag===19)Of(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ss(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&io(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ss(t,!0,n,null,a);break;case"together":Ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qy(e,t,n){switch(t.tag){case 3:Up(t),cr();break;case 5:hp(t);break;case 1:Ie(t.type)&&Ja(t);break;case 4:ju(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(to,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?zp(e,t,n):(B(G,G.current&1),e=gt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return gt(e,t,n)}var $p,Tl,Bp,Wp;$p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};Bp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pn(tt.current);var a=null;switch(n){case"input":i=qs(e,i),r=qs(e,r),a=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),a=[];break;case"textarea":i=Zs(e,i),r=Zs(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qa)}tl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xy(e,t,n){var r=t.pendingProps;switch(Nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ie(t.type)&&Xa(),he(t),null;case 3:return r=t.stateNode,dr(),V(Se),V(me),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(la(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Ml(He),He=null))),Tl(e,t),he(t),null;case 5:Uu(t);var i=pn(mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Bp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return he(t),null}if(e=pn(tt.current),la(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Je]=t,r[hi]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)W($r[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":zc(r,a),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},W("invalid",r);break;case"textarea":$c(r,a),W("invalid",r)}tl(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&sa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&sa(r.textContent,s,e),i=["children",""+s]):ri.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":Zi(r),Fc(r,a,!0);break;case"textarea":Zi(r),Bc(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=qa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Je]=t,e[hi]=r,$p(e,t,!1,!1),t.stateNode=e;e:{switch(o=nl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)W($r[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":zc(e,r),i=qs(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),W("invalid",e);break;case"textarea":$c(e,r),i=Zs(e,r),W("invalid",e);break;default:i=r}tl(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?wh(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gh(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ii(e,l):typeof l=="number"&&ii(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ri.hasOwnProperty(a)?l!=null&&a==="onScroll"&&W("scroll",e):l!=null&&mu(e,a,l,o))}switch(n){case"input":Zi(e),Fc(e,r,!1);break;case"textarea":Zi(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Jn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=pn(mi.current),pn(tt.current),la(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(a=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:sa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return he(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&be!==null&&t.mode&1&&!(t.flags&128))op(),cr(),t.flags|=98560,a=!1;else if(a=la(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Je]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else He!==null&&(Ml(He),He=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ie===0&&(ie=3):Xu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return dr(),Tl(e,t),e===null&&fi(t.stateNode.containerInfo),he(t),null;case 10:return Lu(t.type._context),he(t),null;case 17:return Ie(t.type)&&Xa(),he(t),null;case 19:if(V(G),a=t.memoizedState,a===null)return he(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Mr(a,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,Mr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}a.tail!==null&&ee()>pr&&(t.flags|=128,r=!0,Mr(a,!1),t.lanes=4194304)}else{if(!r)if(e=io(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return he(t),null}else 2*ee()-a.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Mr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ee(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Jy(e,t){switch(Nu(t),t.tag){case 1:return Ie(t.type)&&Xa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),V(Se),V(me),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uu(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return dr(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var fa=!1,pe=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,T=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Rf=!1;function e0(e,t){if(dl=Ya,e=Yh(),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,p=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},Ya=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,I=w.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Be(t.type,y),I);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(_){X(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Rf,Rf=!1,w}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Pl(t,n,a)}i=i.next}while(i!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[hi],delete t[vl],delete t[My],delete t[jy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vp(e){return e.tag===5||e.tag===3||e.tag===4}function Af(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qa));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var ue=null,We=!1;function It(e,t,n){for(n=n.child;n!==null;)Kp(e,t,n),n=n.sibling}function Kp(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:pe||Kn(n,t);case 6:var r=ue,i=We;ue=null,It(e,t,n),ue=r,We=i,ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(We?(e=ue,n=n.stateNode,e.nodeType===8?vs(e.parentNode,n):e.nodeType===1&&vs(e,n),li(e)):vs(ue,n.stateNode));break;case 4:r=ue,i=We,ue=n.stateNode.containerInfo,We=!0,It(e,t,n),ue=r,We=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Pl(n,t,o),i=i.next}while(i!==r)}It(e,t,n);break;case 1:if(!pe&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,It(e,t,n),pe=r):It(e,t,n);break;default:It(e,t,n)}}function Lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zy),t.forEach(function(r){var i=u0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,We=!1;break e;case 3:ue=s.stateNode.containerInfo,We=!0;break e;case 4:ue=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ue===null)throw Error(S(160));Kp(a,o,i),ue=null,We=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}function Yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),qe(e),r&4){try{Xr(3,e,e.return),Mo(3,e)}catch(y){X(e,e.return,y)}try{Xr(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:$e(t,e),qe(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if($e(t,e),qe(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var i=e.stateNode;try{ii(i,"")}catch(y){X(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&ph(i,a),nl(s,o);var u=nl(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?wh(i,f):c==="dangerouslySetInnerHTML"?gh(i,f):c==="children"?ii(i,f):mu(i,c,f,u)}switch(s){case"input":Xs(i,a);break;case"textarea":mh(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Jn(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Jn(i,!!a.multiple,a.defaultValue,!0):Jn(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(y){X(e,e.return,y)}}break;case 6:if($e(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){X(e,e.return,y)}}break;case 3:if($e(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:$e(t,e),qe(e);break;case 13:$e(t,e),qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Gu=ee())),r&4&&Lf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||c,$e(t,e),pe=u):$e(t,e),qe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(f=T=c;T!==null;){switch(p=T,g=p.child,p.tag){case 0:case 11:case 14:case 15:Xr(4,p,p.return);break;case 1:Kn(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:Kn(p,p.return);break;case 22:if(p.memoizedState!==null){Mf(f);continue}}g!==null?(g.return=p,T=g):Mf(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=yh("display",o))}catch(y){X(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){X(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(t,e),qe(e),r&4&&Lf(e);break;case 21:break;default:$e(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ii(i,""),r.flags&=-33);var a=Af(e);Rl(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Af(e);Ol(e,s,o);break;default:throw Error(S(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t0(e,t,n){T=e,Gp(e)}function Gp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fa;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||pe;s=fa;var u=pe;if(fa=o,(pe=l)&&!u)for(T=i;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?jf(i):l!==null?(l.return=o,T=l):jf(i);for(;a!==null;)T=a,Gp(a),a=a.sibling;T=i,fa=s,pe=u}Df(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):Df(e)}}function Df(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&yf(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&Nl(t)}catch(p){X(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Mf(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function jf(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var a=t.return;try{Nl(t)}catch(l){X(t,a,l)}break;case 5:var o=t.return;try{Nl(t)}catch(l){X(t,o,l)}}}catch(l){X(t,t.return,l)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var n0=Math.ceil,so=Et.ReactCurrentDispatcher,Ku=Et.ReactCurrentOwner,Me=Et.ReactCurrentBatchConfig,z=0,le=null,te=null,ce=0,Ce=0,Yn=nn(0),ie=0,wi=null,In=0,jo=0,Yu=0,Jr=null,ke=null,Gu=0,pr=1/0,at=null,lo=!1,Al=null,Wt=null,da=!1,Dt=null,uo=0,Zr=0,Ll=null,Aa=-1,La=0;function ye(){return z&6?ee():Aa!==-1?Aa:Aa=ee()}function Ht(e){return e.mode&1?z&2&&ce!==0?ce&-ce:zy.transition!==null?(La===0&&(La=Oh()),La):(e=F,e!==0||(e=window.event,e=e===void 0?16:Uh(e.type)),e):1}function Ye(e,t,n,r){if(50<Zr)throw Zr=0,Ll=null,Error(S(185));Oi(e,n,r),(!(z&2)||e!==le)&&(e===le&&(!(z&2)&&(jo|=n),ie===4&&Nt(e,ce)),xe(e,r),n===1&&z===0&&!(t.mode&1)&&(pr=ee()+500,Ao&&rn()))}function xe(e,t){var n=e.callbackNode;zg(e,t);var r=Ka(e,e===le?ce:0);if(r===0)n!==null&&Vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vc(n),t===1)e.tag===0?Uy(Uf.bind(null,e)):rp(Uf.bind(null,e)),Ly(function(){!(z&6)&&rn()}),n=null;else{switch(Rh(r)){case 1:n=_u;break;case 4:n=Ph;break;case 16:n=Va;break;case 536870912:n=Nh;break;default:n=Va}n=nm(n,Qp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qp(e,t){if(Aa=-1,La=0,z&6)throw Error(S(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=Ka(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=z;z|=2;var a=Xp();(le!==e||ce!==t)&&(at=null,pr=ee()+500,yn(e,t));do try{a0();break}catch(s){qp(e,s)}while(1);Au(),so.current=a,z=i,te!==null?t=0:(le=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=sl(e),i!==0&&(r=i,t=Dl(e,i))),t===1)throw n=wi,yn(e,0),Nt(e,r),xe(e,ee()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!r0(i)&&(t=co(e,r),t===2&&(a=sl(e),a!==0&&(r=a,t=Dl(e,a))),t===1))throw n=wi,yn(e,0),Nt(e,r),xe(e,ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:cn(e,ke,at);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Gu+500-ee(),10<t)){if(Ka(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ml(cn.bind(null,e,ke,at),t);break}cn(e,ke,at);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n0(r/1960))-r,10<r){e.timeoutHandle=ml(cn.bind(null,e,ke,at),r);break}cn(e,ke,at);break;case 5:cn(e,ke,at);break;default:throw Error(S(329))}}}return xe(e,ee()),e.callbackNode===n?Qp.bind(null,e):null}function Dl(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=co(e,t),e!==2&&(t=ke,ke=n,t!==null&&Ml(t)),e}function Ml(e){ke===null?ke=e:ke.push.apply(ke,e)}function r0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ge(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Yu,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function Uf(e){if(z&6)throw Error(S(327));rr();var t=Ka(e,0);if(!(t&1))return xe(e,ee()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=sl(e);r!==0&&(t=r,n=Dl(e,r))}if(n===1)throw n=wi,yn(e,0),Nt(e,t),xe(e,ee()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,ke,at),xe(e,ee()),null}function Qu(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(pr=ee()+500,Ao&&rn())}}function xn(e){Dt!==null&&Dt.tag===0&&!(z&6)&&rr();var t=z;z|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,z=t,!(z&6)&&rn()}}function qu(){Ce=Yn.current,V(Yn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ay(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xa();break;case 3:dr(),V(Se),V(me),zu();break;case 5:Uu(r);break;case 4:dr();break;case 13:V(G);break;case 19:V(G);break;case 10:Lu(r.type._context);break;case 22:case 23:qu()}n=n.return}if(le=e,te=e=Vt(e.current,null),ce=Ce=t,ie=0,wi=null,Yu=jo=In=0,ke=Jr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}hn=null}return e}function qp(e,t){do{var n=te;try{if(Au(),Na.current=oo,ao){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ao=!1}if(Sn=0,se=re=Q=null,qr=!1,vi=0,Ku.current=null,n===null||n.return===null){ie=1,wi=t,te=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ce,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=xf(o);if(g!==null){g.flags&=-257,Cf(g,o,s,a,t),g.mode&1&&If(a,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){If(a,u,t),Xu();break e}l=Error(S(426))}}else if(Y&&s.mode&1){var I=xf(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Cf(I,o,s,a,t),Ou(hr(l,s));break e}}a=l=hr(l,s),ie!==4&&(ie=2),Jr===null?Jr=[a]:Jr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Ap(a,l,t);gf(a,h);break e;case 1:s=l;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=Lp(a,s,t);gf(a,_);break e}}a=a.return}while(a!==null)}Zp(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function Xp(){var e=so.current;return so.current=oo,e===null?oo:e}function Xu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(In&268435455)&&!(jo&268435455)||Nt(le,ce)}function co(e,t){var n=z;z|=2;var r=Xp();(le!==e||ce!==t)&&(at=null,yn(e,t));do try{i0();break}catch(i){qp(e,i)}while(1);if(Au(),z=n,so.current=r,te!==null)throw Error(S(261));return le=null,ce=0,ie}function i0(){for(;te!==null;)Jp(te)}function a0(){for(;te!==null&&!Ng();)Jp(te)}function Jp(e){var t=tm(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Zp(e):te=t,Ku.current=null}function Zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Jy(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=Xy(n,t,Ce),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function cn(e,t,n){var r=F,i=Me.transition;try{Me.transition=null,F=1,o0(e,t,n,r)}finally{Me.transition=i,F=r}return null}function o0(e,t,n,r){do rr();while(Dt!==null);if(z&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Fg(e,a),e===le&&(te=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,nm(Va,function(){return rr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var o=F;F=1;var s=z;z|=4,Ku.current=null,e0(e,n),Yp(n,e),Cy(hl),Ya=!!dl,hl=dl=null,e.current=n,t0(n),Og(),z=s,F=o,Me.transition=a}else e.current=n;if(da&&(da=!1,Dt=e,uo=i),a=e.pendingLanes,a===0&&(Wt=null),Lg(n.stateNode),xe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=Al,Al=null,e;return uo&1&&e.tag!==0&&rr(),a=e.pendingLanes,a&1?e===Ll?Zr++:(Zr=0,Ll=e):Zr=0,rn(),null}function rr(){if(Dt!==null){var e=Rh(uo),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,uo=0,z&6)throw Error(S(331));var i=z;for(z|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Xr(8,c,a)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var p=c.sibling,g=c.return;if(Hp(c),c===u){T=null;break}if(p!==null){p.return=g,T=p;break}T=g}}}var w=a.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,T=h;break e}T=a.return}}var d=e.current;for(T=d;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Mo(9,s)}}catch(k){X(s,s.return,k)}if(s===o){T=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,T=_;break e}T=s.return}}if(z=i,rn(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function zf(e,t,n){t=hr(n,t),t=Ap(e,t,1),e=Bt(e,t,1),t=ye(),e!==null&&(Oi(e,1,t),xe(e,t))}function X(e,t,n){if(e.tag===3)zf(e,e,n);else for(;t!==null;){if(t.tag===3){zf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=hr(n,e),e=Lp(t,e,1),t=Bt(t,e,1),e=ye(),t!==null&&(Oi(t,1,e),xe(t,e));break}}t=t.return}}function s0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>ee()-Gu?yn(e,0):Yu|=n),xe(e,t)}function em(e,t){t===0&&(e.mode&1?(t=na,na<<=1,!(na&130023424)&&(na=4194304)):t=1);var n=ye();e=vt(e,t),e!==null&&(Oi(e,t,n),xe(e,n))}function l0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),em(e,n)}function u0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),em(e,n)}var tm;tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,qy(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,Y&&t.flags&1048576&&ip(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ra(e,t),e=t.pendingProps;var i=ur(t,me.current);nr(t,n),i=$u(null,t,r,e,i,n);var a=Bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(a=!0,Ja(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mu(t),i.updater=Lo,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=xl(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Pu(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f0(r),e=Be(r,e),i){case 0:t=Il(null,t,r,e,n);break e;case 1:t=Pf(null,t,r,e,n);break e;case 11:t=bf(null,t,r,e,n);break e;case 14:t=Tf(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Il(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Pf(e,t,r,i,n);case 3:e:{if(Up(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,i=a.element,lp(e,t),ro(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=hr(Error(S(423)),t),t=Nf(e,t,r,n,i);break e}else if(r!==i){i=hr(Error(S(424)),t),t=Nf(e,t,r,n,i);break e}else for(be=$t(t.stateNode.containerInfo.firstChild),Te=t,Y=!0,He=null,n=dp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){t=gt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return hp(t),e===null&&wl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,pl(r,i)?o=null:a!==null&&pl(r,a)&&(t.flags|=32),jp(e,t),ge(e,t,o,n),t.child;case 6:return e===null&&wl(t),null;case 13:return zp(e,t,n);case 4:return ju(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),bf(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(to,r._currentValue),r._currentValue=o,a!==null)if(Ge(a.value,o)){if(a.children===i.children&&!Se.current){t=gt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=ht(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_l(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_l(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,nr(t,n),i=je(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Tf(e,t,r,i,n);case 15:return Dp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ra(e,t),t.tag=1,Ie(r)?(e=!0,Ja(t)):e=!1,nr(t,n),cp(t,r,i),El(t,r,i,n),xl(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return Mp(e,t,n)}throw Error(S(156,t.tag))};function nm(e,t){return Th(e,t)}function c0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new c0(e,t,n,r)}function Ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f0(e){if(typeof e=="function")return Ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gu)return 11;if(e===yu)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Da(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Ju(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return wn(n.children,i,a,t);case vu:o=8,i|=8;break;case Ks:return e=De(12,n,t,i|2),e.elementType=Ks,e.lanes=a,e;case Ys:return e=De(13,n,t,i),e.elementType=Ys,e.lanes=a,e;case Gs:return e=De(19,n,t,i),e.elementType=Gs,e.lanes=a,e;case fh:return Uo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uh:o=10;break e;case ch:o=9;break e;case gu:o=11;break e;case yu:o=14;break e;case bt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function wn(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Uo(e,t,n,r){return e=De(22,e,r,t),e.elementType=fh,e.lanes=n,e.stateNode={isHidden:!1},e}function Is(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function xs(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=as(0),this.expirationTimes=as(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,a,o,s,l){return e=new d0(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=De(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(a),e}function h0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rm(e){if(!e)return qt;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return np(e,n,t)}return t}function im(e,t,n,r,i,a,o,s,l){return e=Zu(n,r,!0,e,i,a,o,s,l),e.context=rm(null),n=e.current,r=ye(),i=Ht(n),a=ht(r,i),a.callback=t??null,Bt(n,a,i),e.current.lanes=i,Oi(e,i,r),xe(e,r),e}function zo(e,t,n,r){var i=t.current,a=ye(),o=Ht(i);return n=rm(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(i,t,o),e!==null&&(Ye(e,i,o,a),Pa(e,i,o)),o}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ec(e,t){Ff(e,t),(e=e.alternate)&&Ff(e,t)}function p0(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}Fo.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));zo(e,t,null,null)};Fo.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){zo(null,e,null,null)}),t[mt]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&jh(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $f(){}function m0(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=fo(o);a.call(u)}}var o=im(t,r,e,0,null,!1,!1,"",$f);return e._reactRootContainer=o,e[mt]=o.current,fi(e.nodeType===8?e.parentNode:e),xn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=fo(l);s.call(u)}}var l=Zu(e,0,!1,null,null,!1,!1,"",$f);return e._reactRootContainer=l,e[mt]=l.current,fi(e.nodeType===8?e.parentNode:e),xn(function(){zo(t,l,n,r)}),l}function Bo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=fo(o);s.call(l)}}zo(t,o,e,i)}else o=m0(n,t,e,i,r);return fo(o)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(ku(t,n|1),xe(t,ee()),!(z&6)&&(pr=ee()+500,rn()))}break;case 13:xn(function(){var r=vt(e,1);if(r!==null){var i=ye();Ye(r,e,1,i)}}),ec(e,1)}};Eu=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}ec(e,134217728)}};Lh=function(e){if(e.tag===13){var t=Ht(e),n=vt(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}ec(e,t)}};Dh=function(){return F};Mh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};il=function(e,t,n){switch(t){case"input":if(Xs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ro(r);if(!i)throw Error(S(90));hh(r),Xs(r,i)}}}break;case"textarea":mh(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Eh=Qu;Sh=xn;var v0={usingClientEntryPoint:!1,Events:[Ai,$n,Ro,_h,kh,Qu]},jr={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},g0={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||p0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{To=ha.inject(g0),et=ha}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(S(200));return h0(e,t,null,n)};Ne.createRoot=function(e,t){if(!nc(e))throw Error(S(299));var n=!1,r="",i=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,fi(e.nodeType===8?e.parentNode:e),new tc(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return xn(e)};Ne.hydrate=function(e,t,n){if(!$o(t))throw Error(S(200));return Bo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!nc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=im(t,null,e,1,n??null,i,!1,a,o),e[mt]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fo(t)};Ne.render=function(e,t,n){if(!$o(t))throw Error(S(200));return Bo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!$o(e))throw Error(S(40));return e._reactRootContainer?(xn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Ne.unstable_batchedUpdates=Qu;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Bo(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ne})(pg);const y0=Xd(Ws);/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const Bf="popstate";function w0(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return jl("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return k0(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _0(){return Math.random().toString(36).substr(2,8)}function Wf(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),_i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||_0()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Mt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(_i({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=Mt.Pop;let I=c(),h=I==null?null:I-u;u=I,l&&l({action:s,location:y.location,delta:h})}function p(I,h){s=Mt.Push;let d=jl(y.location,I,h);n&&n(d,I),u=c()+1;let m=Wf(d,u),_=y.createHref(d);try{o.pushState(m,"",_)}catch{i.location.assign(_)}a&&l&&l({action:s,location:y.location,delta:1})}function g(I,h){s=Mt.Replace;let d=jl(y.location,I,h);n&&n(d,I),u=c();let m=Wf(d,u),_=y.createHref(d);o.replaceState(m,"",_),a&&l&&l({action:s,location:y.location,delta:0})}function w(I){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof I=="string"?I:ho(I);return ne(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let y={get action(){return s},get location(){return e(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bf,f),l=I,()=>{i.removeEventListener(Bf,f),l=null}},createHref(I){return t(i,I)},createURL:w,encodeLocation(I){let h=w(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(I){return o.go(I)}};return y}var Hf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hf||(Hf={}));function E0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,i=ic(r.pathname||"/",n);if(i==null)return null;let a=om(e);S0(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=R0(a[s],D0(i));return o}function om(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kt([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),om(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:N0(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of sm(a.path))i(a,o,l)}),t}function sm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=sm(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function S0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:O0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I0=/^:\w+$/,x0=3,C0=2,b0=1,T0=10,P0=-2,Vf=e=>e==="*";function N0(e,t){let n=e.split("/"),r=n.length;return n.some(Vf)&&(r+=P0),t&&(r+=C0),n.filter(i=>!Vf(i)).reduce((i,a)=>i+(I0.test(a)?x0:a===""?b0:T0),r)}function O0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function R0(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=A0({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=s.route;a.push({params:r,pathname:Kt([i,c.pathname]),pathnameBase:z0(Kt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Kt([i,c.pathnameBase]))}return a}function A0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let p=s[f]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=M0(s[f]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function L0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function D0(e){try{return decodeURI(e)}catch(t){return rc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M0(e,t){try{return decodeURIComponent(e)}catch(n){return rc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ic(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function j0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:U0(n,t):t,search:F0(r),hash:$0(i)}}function U0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function um(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kr(e):(i=_i({},e),ne(!i.pathname||!i.pathname.includes("?"),Cs("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Cs("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Cs("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let f=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=j0(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),z0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const H0=typeof Object.is=="function"?Object.is:W0,{useState:V0,useEffect:K0,useLayoutEffect:Y0,useDebugValue:G0}=Bs;function Q0(e,t,n){const r=t(),[{inst:i},a]=V0({inst:{value:r,getSnapshot:t}});return Y0(()=>{i.value=r,i.getSnapshot=t,bs(i)&&a({inst:i})},[e,r,t]),K0(()=>(bs(i)&&a({inst:i}),e(()=>{bs(i)&&a({inst:i})})),[e]),G0(r),r}function bs(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!H0(n,r)}catch{return!0}}function q0(e,t,n){return t()}const X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J0=!X0,Z0=J0?q0:Q0;"useSyncExternalStore"in Bs&&(e=>e.useSyncExternalStore)(Bs);const cm=E.createContext(null),ac=E.createContext(null),Di=E.createContext(null),Wo=E.createContext(null),Er=E.createContext({outlet:null,matches:[]}),fm=E.createContext(null);function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ul.apply(this,arguments)}function e1(e,t){let{relative:n}=t===void 0?{}:t;Sr()||ne(!1);let{basename:r,navigator:i}=E.useContext(Di),{hash:a,pathname:o,search:s}=dm(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kt([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Sr(){return E.useContext(Wo)!=null}function Ir(){return Sr()||ne(!1),E.useContext(Wo).location}function Mi(){Sr()||ne(!1);let{basename:e,navigator:t}=E.useContext(Di),{matches:n}=E.useContext(Er),{pathname:r}=Ir(),i=JSON.stringify(lm(n).map(s=>s.pathnameBase)),a=E.useRef(!1);return E.useEffect(()=>{a.current=!0}),E.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=um(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Kt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function dm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(Er),{pathname:i}=Ir(),a=JSON.stringify(lm(r).map(o=>o.pathnameBase));return E.useMemo(()=>um(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function t1(e,t){Sr()||ne(!1);let{navigator:n}=E.useContext(Di),r=E.useContext(ac),{matches:i}=E.useContext(Er),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=Ir(),u;if(t){var c;let y=typeof t=="string"?kr(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||ne(!1),u=y}else u=l;let f=u.pathname||"/",p=s==="/"?f:f.slice(s.length)||"/",g=E0(e,{pathname:p}),w=a1(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Kt([s,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Kt([s,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&w?E.createElement(Wo.Provider,{value:{location:Ul({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mt.Pop}},w):w}function n1(){let e=u1(),t=B0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,a)}class r1 extends E.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(Er.Provider,{value:this.props.routeContext},E.createElement(fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(cm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Er.Provider,{value:t},r)}function a1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||ne(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=E.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=E.createElement(n1,null));let c=t.concat(r.slice(0,s+1)),f=()=>{let p=a;return l?p=u:o.route.Component?p=E.createElement(o.route.Component,null):o.route.element&&(p=o.route.element),E.createElement(i1,{match:o,routeContext:{outlet:a,matches:c},children:p})};return n&&(o.route.ErrorBoundary||o.route.errorElement||s===0)?E.createElement(r1,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Kf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Kf||(Kf={}));var po;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(po||(po={}));function o1(e){let t=E.useContext(ac);return t||ne(!1),t}function s1(e){let t=E.useContext(Er);return t||ne(!1),t}function l1(e){let t=s1(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function u1(){var e;let t=E.useContext(fm),n=o1(po.UseRouteError),r=l1(po.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function c1(e){let{to:t,replace:n,state:r,relative:i}=e;Sr()||ne(!1);let a=E.useContext(ac),o=Mi();return E.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function it(e){ne(!1)}function f1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mt.Pop,navigator:a,static:o=!1}=e;Sr()&&ne(!1);let s=t.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:g="default"}=r,w=E.useMemo(()=>{let y=ic(u,s);return y==null?null:{location:{pathname:y,search:c,hash:f,state:p,key:g},navigationType:i}},[s,u,c,f,p,g,i]);return w==null?null:E.createElement(Di.Provider,{value:l},E.createElement(Wo.Provider,{children:n,value:w}))}function d1(e){let{children:t,location:n}=e,r=E.useContext(cm),i=r&&!t?r.router.routes:zl(t);return t1(i,n)}var Yf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Yf||(Yf={}));new Promise(()=>{});function zl(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let a=[...t,i];if(r.type===E.Fragment){n.push.apply(n,zl(r.props.children,a));return}r.type!==it&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zl(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fl.apply(this,arguments)}function h1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function p1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function m1(e,t){return e.button===0&&(!t||t==="_self")&&!p1(e)}const v1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function g1(e){let{basename:t,children:n,window:r}=e,i=E.useRef();i.current==null&&(i.current=w0({window:r,v5Compat:!0}));let a=i.current,[o,s]=E.useState({action:a.action,location:a.location});return E.useLayoutEffect(()=>a.listen(s),[a]),E.createElement(f1,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a})}const y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,st=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,f=h1(t,v1),{basename:p}=E.useContext(Di),g,w=!1;if(typeof u=="string"&&w1.test(u)&&(g=u,y1)){let d=new URL(window.location.href),m=u.startsWith("//")?new URL(d.protocol+u):new URL(u),_=ic(m.pathname,p);m.origin===d.origin&&_!=null?u=_+m.search+m.hash:w=!0}let y=e1(u,{relative:i}),I=_1(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||I(d)}return E.createElement("a",Fl({},f,{href:g||y,onClick:w||a?r:h,ref:n,target:l}))});var Gf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Gf||(Gf={}));var Qf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Qf||(Qf={}));function _1(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=Mi(),l=Ir(),u=dm(e,{relative:o});return E.useCallback(c=>{if(m1(c,n)){c.preventDefault();let f=r!==void 0?r:ho(l)===ho(u);s(e,{replace:f,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}const k1=()=>v.jsxs("div",{children:[v.jsx("h1",{children:"We are secret."}),v.jsx("p",{children:"But you can know about us."})]});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},E1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,f=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||f==null)throw new S1;const p=a<<2|s>>4;if(r.push(p),u!==64){const g=s<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I1=function(e){const t=hm(e);return pm.encodeByteArray(t,!0)},mm=function(e){return I1(e).replace(/\./g,"")},vm=function(e){try{return pm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=()=>x1().__FIREBASE_DEFAULTS__,b1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},T1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vm(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return C1()||b1()||T1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},P1=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},N1=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},gm=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function R1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function A1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function D1(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function M1(){try{return typeof indexedDB=="object"}catch{return!1}}function j1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="FirebaseError";class an extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=U1,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?z1(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new an(i,s,r)}}function z1(e,t){return e.replace(F1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const F1=/\{\$([^}]+)}/g;function $1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function mo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(qf(a)&&qf(o)){if(!mo(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Br(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Wr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function B1(e,t){const n=new W1(e,t);return n.subscribe.bind(n)}class W1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");H1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ts),i.error===void 0&&(i.error=Ts),i.complete===void 0&&(i.complete=Ts);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return e&&e._delegate?e._delegate:e}class mr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new O1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Y1(t))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=fn){return this.instances.has(t)}getOptions(t=fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=fn){return this.component?this.component.multipleInstances?t:fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K1(e){return e===fn?void 0:e}function Y1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new V1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const Q1={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},q1=$.INFO,X1={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},J1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=X1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ym{constructor(t){this.name=t,this._logLevel=q1,this._logHandler=J1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Q1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Z1=(e,t)=>t.some(n=>e instanceof n);let Xf,Jf;function ew(){return Xf||(Xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tw(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wm=new WeakMap,$l=new WeakMap,_m=new WeakMap,Ps=new WeakMap,sc=new WeakMap;function nw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Yt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wm.set(n,e)}).catch(()=>{}),sc.set(t,e),t}function rw(e){if($l.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});$l.set(e,t)}let Bl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $l.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_m.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iw(e){Bl=e(Bl)}function aw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ns(this),t,...n);return _m.set(r,t.sort?t.sort():[t]),Yt(r)}:tw().includes(e)?function(...t){return e.apply(Ns(this),t),Yt(wm.get(this))}:function(...t){return Yt(e.apply(Ns(this),t))}}function ow(e){return typeof e=="function"?aw(e):(e instanceof IDBTransaction&&rw(e),Z1(e,ew())?new Proxy(e,Bl):e)}function Yt(e){if(e instanceof IDBRequest)return nw(e);if(Ps.has(e))return Ps.get(e);const t=ow(e);return t!==e&&(Ps.set(e,t),sc.set(t,e)),t}const Ns=e=>sc.get(e);function sw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Yt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yt(o.result),l.oldVersion,l.newVersion,Yt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const lw=["get","getKey","getAll","getAllKeys","count"],uw=["put","add","delete","clear"],Os=new Map;function Zf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Os.get(t))return Os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=uw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lw.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Os.set(t,a),a}iw(e=>({...e,get:(t,n,r)=>Zf(t,n)||e.get(t,n,r),has:(t,n)=>!!Zf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wl="@firebase/app",ed="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ym("@firebase/app"),dw="@firebase/app-compat",hw="@firebase/analytics-compat",pw="@firebase/analytics",mw="@firebase/app-check-compat",vw="@firebase/app-check",gw="@firebase/auth",yw="@firebase/auth-compat",ww="@firebase/database",_w="@firebase/database-compat",kw="@firebase/functions",Ew="@firebase/functions-compat",Sw="@firebase/installations",Iw="@firebase/installations-compat",xw="@firebase/messaging",Cw="@firebase/messaging-compat",bw="@firebase/performance",Tw="@firebase/performance-compat",Pw="@firebase/remote-config",Nw="@firebase/remote-config-compat",Ow="@firebase/storage",Rw="@firebase/storage-compat",Aw="@firebase/firestore",Lw="@firebase/firestore-compat",Dw="firebase",Mw="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="[DEFAULT]",jw={[Wl]:"fire-core",[dw]:"fire-core-compat",[pw]:"fire-analytics",[hw]:"fire-analytics-compat",[vw]:"fire-app-check",[mw]:"fire-app-check-compat",[gw]:"fire-auth",[yw]:"fire-auth-compat",[ww]:"fire-rtdb",[_w]:"fire-rtdb-compat",[kw]:"fire-fn",[Ew]:"fire-fn-compat",[Sw]:"fire-iid",[Iw]:"fire-iid-compat",[xw]:"fire-fcm",[Cw]:"fire-fcm-compat",[bw]:"fire-perf",[Tw]:"fire-perf-compat",[Pw]:"fire-rc",[Nw]:"fire-rc-compat",[Ow]:"fire-gcs",[Rw]:"fire-gcs-compat",[Aw]:"fire-fst",[Lw]:"fire-fst-compat","fire-js":"fire-js",[Dw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map,Vl=new Map;function Uw(e,t){try{e.container.addComponent(t)}catch(n){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ki(e){const t=e.name;if(Vl.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;Vl.set(t,e);for(const n of vo.values())Uw(n,e);return!0}function km(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new ji("app","Firebase",zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=Mw;function Em(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=N1()),!n)throw Gt.create("no-options");const a=vo.get(i);if(a){if(mo(n,a.options)&&mo(r,a.config))return a;throw Gt.create("duplicate-app",{appName:i})}const o=new G1(i);for(const l of Vl.values())o.addComponent(l);const s=new Fw(n,r,o);return vo.set(i,s),s}function $w(e=Hl){const t=vo.get(e);if(!t&&e===Hl)return Em();if(!t)throw Gt.create("no-app",{appName:e});return t}function ir(e,t,n){var r;let i=(r=jw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cn.warn(s.join(" "));return}ki(new mr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebase-heartbeat-database",Ww=1,Ei="firebase-heartbeat-store";let Rs=null;function Sm(){return Rs||(Rs=sw(Bw,Ww,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ei)}}}).catch(e=>{throw Gt.create("idb-open",{originalErrorMessage:e.message})})),Rs}async function Hw(e){try{return(await Sm()).transaction(Ei).objectStore(Ei).get(Im(e))}catch(t){if(t instanceof an)Cn.warn(t.message);else{const n=Gt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(n.message)}}}async function td(e,t){try{const r=(await Sm()).transaction(Ei,"readwrite");return await r.objectStore(Ei).put(t,Im(e)),r.done}catch(n){if(n instanceof an)Cn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Im(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=1024,Kw=30*24*60*60*1e3;class Yw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Kw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nd(),{heartbeatsToSend:n,unsentEntries:r}=Gw(this._heartbeatsCache.heartbeats),i=mm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nd(){return new Date().toISOString().substring(0,10)}function Gw(e,t=Vw){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),rd(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M1()?j1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rd(e){return mm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(e){ki(new mr("platform-logger",t=>new cw(t),"PRIVATE")),ki(new mr("heartbeat",t=>new Yw(t),"PRIVATE")),ir(Wl,ed,e),ir(Wl,ed,"esm2017"),ir("fire-js","")}qw("");function lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function xm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xw=xm,Cm=new ji("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new ym("@firebase/auth");function Jw(e,...t){go.logLevel<=$.WARN&&go.warn(`Auth (${zi}): ${e}`,...t)}function Ma(e,...t){go.logLevel<=$.ERROR&&go.error(`Auth (${zi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,...t){throw uc(e,...t)}function nt(e,...t){return uc(e,...t)}function bm(e,t,n){const r=Object.assign(Object.assign({},Xw()),{[t]:n});return new ji("auth","Firebase",r).create(t,{appName:e.name})}function Zw(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ze(e,"argument-error"),bm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cm.create(e,...t)}function R(e,t,...n){if(!e)throw uc(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ma(t),new Error(t)}function yt(e,t){e||ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function e_(){return id()==="http:"||id()==="https:"}function id(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||A1()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,n){this.shortDelay=t,this.longDelay=n,yt(n>t,"Short delay should be less than long delay!"),this.isMobile=R1()||L1()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t){yt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Fi(3e4,6e4);function An(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function on(e,t,n,r,i={}){return Pm(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=Ui(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Tm.fetch()(Nm(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Pm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},r_),t);try{const i=new a_(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw pa(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pa(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw pa(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bm(e,c,u);ze(e,c)}}catch(i){if(i instanceof an)throw i;ze(e,"network-request-failed",{message:String(i)})}}async function $i(e,t,n,r,i={}){const a=await on(e,t,n,r,i);return"mfaPendingCredential"in a&&ze(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Nm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}class a_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),i_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(e,t){return on(e,"POST","/v1/accounts:delete",t)}async function s_(e,t){return on(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function l_(e,t=!1){const n=Qe(e),r=await n.getIdToken(t),i=fc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ei(As(i.auth_time)),issuedAtTime:ei(As(i.iat)),expirationTime:ei(As(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function As(e){return Number(e)*1e3}function fc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=vm(n);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u_(e){const t=fc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof an&&c_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function c_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await vr(e,s_(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?p_(a.providerUserInfo):[],s=h_(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new Om(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function d_(e){const t=Qe(e);await yo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function h_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function p_(e){return e.map(t=>{var{providerId:n}=t,r=lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(e,t){const n=await Pm(e,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Nm(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Tm.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):u_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await m_(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new Si;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(R(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class _n{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new f_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Om(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await vr(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return l_(this,t)}reload(){return d_(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new _n(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await vr(this,o_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(s=n.tenantId)!==null&&s!==void 0?s:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:k,providerData:x,stsTokenManager:C}=n;R(m&&C,t,"internal-error");const O=Si.fromJSON(this.name,C);R(typeof m=="string",t,"internal-error"),xt(f,t.name),xt(p,t.name),R(typeof _=="boolean",t,"internal-error"),R(typeof k=="boolean",t,"internal-error"),xt(g,t.name),xt(w,t.name),xt(y,t.name),xt(I,t.name),xt(h,t.name),xt(d,t.name);const U=new _n({uid:m,auth:t,email:p,emailVerified:_,displayName:f,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:h,lastLoginAt:d});return x&&Array.isArray(x)&&(U.providerData=x.map(L=>Object.assign({},L))),I&&(U._redirectEventId=I),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const a=new _n({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await yo(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;function dt(e){yt(e instanceof Function,"Expected a class definition");let t=ad.get(e);return t?(yt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ad.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Rm.type="NONE";const od=Rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e,t,n){return`firebase:${e}:${t}:${n}`}class ar{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,a),this.fullPersistenceKey=ja("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_n._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ar(dt(od),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||dt(od);const o=ja(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const f=_n._fromJSON(t,c);u!==a&&(s=f),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new ar(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new ar(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Am(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(jm(t))return"Blackberry";if(Um(t))return"Webos";if(dc(t))return"Safari";if((t.includes("chrome/")||Lm(t))&&!t.includes("edge/"))return"Chrome";if(Mm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Am(e=ve()){return/firefox\//i.test(e)}function dc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Lm(e=ve()){return/crios\//i.test(e)}function Dm(e=ve()){return/iemobile/i.test(e)}function Mm(e=ve()){return/android/i.test(e)}function jm(e=ve()){return/blackberry/i.test(e)}function Um(e=ve()){return/webos/i.test(e)}function Ho(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function v_(e=ve()){var t;return Ho(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function g_(){return D1()&&document.documentMode===10}function zm(e=ve()){return Ho(e)||Mm(e)||Um(e)||jm(e)||/windows phone/i.test(e)||Dm(e)}function y_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(e,t=[]){let n;switch(e){case"Browser":n=sd(ve());break;case"Worker":n=`${sd(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}async function $m(e,t){return on(e,"GET","/v2/recaptchaConfig",An(e,t))}function ld(e){return e!==void 0&&e.enterprise!==void 0}class Bm{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Wm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=nt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",w_().appendChild(r)})}function __(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const k_="https://www.google.com/recaptcha/enterprise.js?render=",E_="recaptcha-enterprise";class Hm{constructor(t){this.type=E_,this.auth=Ln(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{$m(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new Bm(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(u=>{s(u)})}catch(u){s(u)}}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&ld(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Wm(k_+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function wo(e,t,n,r=!1){const i=new Hm(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new S_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await yo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qe(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}async initializeRecaptchaConfig(){const t=await $m(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Bm(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Hm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ji("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Jw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ln(e){return Qe(e)}class ud{constructor(t){this.auth=t,this.observer=null,this.addObserver=B1(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(e,t){const n=km(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(mo(a,t??{}))return i;ze(i,"already-initialized")}return n.initialize({options:t})}function C_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function b_(e,t,n){const r=Ln(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=Vm(t),{host:o,port:s}=T_(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||P_()}function Vm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function T_(e){const t=Vm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:cd(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:cd(o)}}}function cd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}async function N_(e,t){return on(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t){return $i(e,"POST","/v1/accounts:signInWithPassword",An(e,t))}async function O_(e,t){return on(e,"POST","/v1/accounts:sendOobCode",An(e,t))}async function R_(e,t){return O_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(e,t){return $i(e,"POST","/v1/accounts:signInWithEmailLink",An(e,t))}async function L_(e,t){return $i(e,"POST","/v1/accounts:signInWithEmailLink",An(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends hc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ii(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ii(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await wo(t,r,"signInWithPassword");return Ls(t,i)}else return Ls(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await wo(t,r,"signInWithPassword");return Ls(t,a)}else return Promise.reject(i)});case"emailLink":return A_(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return N_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return L_(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e,t){return $i(e,"POST","/v1/accounts:signInWithIdp",An(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="http://localhost";class bn extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return or(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,or(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,or(t,n)}buildRequest(){const t={requestUri:D_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ui(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j_(e){const t=Br(Wr(e)).link,n=t?Br(Wr(t)).deep_link_id:null,r=Br(Wr(e)).deep_link_id;return(r?Br(Wr(r)).link:null)||r||n||t||e}class pc{constructor(t){var n,r,i,a,o,s;const l=Br(Wr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=M_((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=j_(t);try{return new pc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.providerId=xr.PROVIDER_ID}static credential(t,n){return Ii._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pc.parseLink(n);return R(r,"argument-error"),Ii._fromEmailAndCode(t,r.code,r.tenantId)}}xr.PROVIDER_ID="password";xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends mc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Bi{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return lt.credentialFromTaggedObject(t)}static credentialFromError(t){return lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Bi{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Bi{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return At.credential(n,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e,t){return $i(e,"POST","/v1/accounts:signUp",An(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await _n._fromIdTokenResponse(t,r,i),o=fd(r);return new Tn({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=fd(r);return new Tn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function fd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends an{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new _o(t,n,r,i)}}function Km(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(e,a,t,r):a})}async function U_(e,t,n=!1){const r=await vr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await vr(e,Km(r,i,t,e),n);R(a.idToken,r,"internal-error");const o=fc(a.idToken);R(o,r,"internal-error");const{sub:s}=o;return R(e.uid===s,r,"user-mismatch"),Tn._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(e,t,n=!1){const r="signIn",i=await Km(e,r,t),a=await Tn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function F_(e,t){return Ym(Ln(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e,t,n){var r;R(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),R(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}async function B_(e,t,n){var r;const i=Ln(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await wo(i,a,"signUpPassword");o=Ds(i,u)}else o=Ds(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await wo(i,a,"signUpPassword");return Ds(i,c)}else return Promise.reject(u)});const s=await o.catch(u=>Promise.reject(u)),l=await Tn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function W_(e,t,n){return F_(Qe(e),xr.credential(t,n))}async function H_(e,t){const n=Qe(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&$_(n.auth,i,t);const{email:a}=await R_(n.auth,i);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(e,t){return on(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Qe(e),a={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await vr(r,V_(r.auth,a));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const s=r.providerData.find(({providerId:l})=>l==="password");s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Y_(e,t,n,r){return Qe(e).onIdTokenChanged(t,n,r)}function G_(e,t,n){return Qe(e).beforeAuthStateChanged(t,n)}function Q_(e,t,n,r){return Qe(e).onAuthStateChanged(t,n,r)}function q_(e){return Qe(e).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){const e=ve();return dc(e)||Ho(e)}const J_=1e3,Z_=10;class Qm extends Gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=X_()&&y_(),this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);g_()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Z_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},J_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Qm.type="LOCAL";const ek=Qm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}qm.type="SESSION";const Xm=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await tk(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=vc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function rk(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ok(){return Jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firebaseLocalStorageDb",sk=1,Eo="firebaseLocalStorage",ev="fbase_key";class Wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(e,t){return e.transaction([Eo],t?"readwrite":"readonly").objectStore(Eo)}function lk(){const e=indexedDB.deleteDatabase(Zm);return new Wi(e).toPromise()}function Yl(){const e=indexedDB.open(Zm,sk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Eo,{keyPath:ev})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Eo)?t(r):(r.close(),await lk(),t(await Yl()))})})}async function dd(e,t,n){const r=Ko(e,!0).put({[ev]:t,value:n});return new Wi(r).toPromise()}async function uk(e,t){const n=Ko(e,!1).get(t),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function hd(e,t){const n=Ko(e,!0).delete(t);return new Wi(n).toPromise()}const ck=800,fk=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(ok()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yl();return await dd(t,ko,"1"),await hd(t,ko),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>uk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=Ko(i,!1).getAll();return new Wi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const dk=tv;new Fi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(e,t){return t?dt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends hc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return or(t,this._buildIdpRequest())}_linkToIdToken(t,n){return or(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return or(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hk(e){return Ym(e.auth,new gc(e),e.bypassAuthState)}function pk(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),z_(n,new gc(e),e.bypassAuthState)}async function mk(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),U_(n,new gc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:ze(this.auth,"internal-error")}}resolve(t){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Fi(2e3,1e4);async function gk(e,t,n){const r=Ln(e);Zw(e,t,mc);const i=nv(r,n);return new mn(r,"signInViaPopup",t,i).executeNotNull()}class mn extends rv{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const t=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,vk.get())};t()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="pendingRedirect",Ua=new Map;class wk extends rv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ua.get(this.auth._key());if(!t){try{const r=await _k(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ua.set(this.auth._key(),t)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _k(e,t){const n=Sk(t),r=Ek(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kk(e,t){Ua.set(e._key(),t)}function Ek(e){return dt(e._redirectPersistence)}function Sk(e){return ja(yk,e.config.apiKey,e.name)}async function Ik(e,t,n=!1){const r=Ln(e),i=nv(r,t),o=await new wk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=10*60*1e3;class Ck{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!iv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(t))}saveEventToCache(t){this.cachedEventUids.add(pd(t)),this.lastProcessedEventTime=Date.now()}}function pd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function iv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(e,t={}){return on(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function Ok(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tk(e);for(const n of t)try{if(Rk(n))return}catch{}ze(e,"unauthorized-domain")}function Rk(e){const t=Kl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Nk.test(n))return!1;if(Pk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=new Fi(3e4,6e4);function md(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lk(e){return new Promise((t,n)=>{var r,i,a;function o(){md(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{md(),n(nt(e,"network-request-failed"))},timeout:Ak.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=rt().gapi)===null||a===void 0)&&a.load)o();else{const s=__("iframefcb");return rt()[s]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},Wm(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw za=null,t})}let za=null;function Dk(e){return za=za||Lk(e),za}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Fi(5e3,15e3),jk="__/auth/iframe",Uk="emulator/auth/iframe",zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $k(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,Uk):`https://${e.config.authDomain}/${jk}`,r={apiKey:t.apiKey,appName:e.name,v:zi},i=Fk.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ui(r).slice(1)}`}async function Bk(e){const t=await Dk(e),n=rt().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:$k(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zk,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),s=rt().setTimeout(()=>{a(o)},Mk.get());function l(){rt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hk=500,Vk=600,Kk="_blank",Yk="http://localhost";class vd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gk(e,t,n,r=Hk,i=Vk){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Wk),{width:r.toString(),height:i.toString(),top:a,left:o}),u=ve().toLowerCase();n&&(s=Lm(u)?Kk:n),Am(u)&&(t=t||Yk,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(v_(u)&&s!=="_self")return Qk(t||"",s),new vd(null);const f=window.open(t||"",s,c);R(f,e,"popup-blocked");try{f.focus()}catch{}return new vd(f)}function Qk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="__/auth/handler",Xk="emulator/auth/handler",Jk=encodeURIComponent("fac");async function gd(e,t,n,r,i,a){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(t instanceof mc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$1(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(a||{}))o[c]=f}if(t instanceof Bi){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${Jk}=${encodeURIComponent(l)}`:"";return`${Zk(e)}?${Ui(s).slice(1)}${u}`}function Zk({config:e}){return e.emulator?cc(e,Xk):`https://${e.authDomain}/${qk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="webStorageSupport";class eE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xm,this._completeRedirectFn=Ik,this._overrideRedirectResult=kk}async _openPopup(t,n,r,i){var a;yt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await gd(t,n,r,Kl(),i);return Gk(t,o,vc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await gd(t,n,r,Kl(),i);return rk(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(yt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Bk(t),r=new Ck(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ms,{type:Ms},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Ms];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ok(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||dc()||Ho()}}const tE=eE;var yd="@firebase/auth",wd="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iE(e){ki(new mr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),R(!(s!=null&&s.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fm(e)},u=new I_(r,i,a,l);return C_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ki(new mr("auth-internal",t=>{const n=Ln(t.getProvider("auth").getImmediate());return(r=>new nE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(yd,wd,rE(e)),ir(yd,wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=5*60,oE=gm("authIdTokenMaxAge")||aE;let _d=null;const sE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oE)return;const i=n==null?void 0:n.token;_d!==i&&(_d=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lE(e=$w()){const t=km(e,"auth");if(t.isInitialized())return t.getImmediate();const n=x_(e,{popupRedirectResolver:tE,persistence:[dk,ek,Xm]}),r=gm("authTokenSyncURL");if(r){const a=sE(r);G_(n,a,()=>a(n.currentUser)),Y_(n,o=>a(o))}const i=P1("auth");return i&&b_(n,`http://${i}`),n}iE("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Hi(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(c){try{u(r.next(c))}catch(f){o(f)}}function l(c){try{u(r.throw(c))}catch(f){o(f)}}function u(c){c.done?a(c.value):i(c.value).then(s,l)}u((r=r.apply(e,t||[])).next())})}function Vi(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=u[0]&2?i.return:u[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;switch(i=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gn=function(){return Gn=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Gn.apply(this,arguments)},av=function(e){return{loading:e==null,value:e}},uE=function(){return function(e,t){switch(t.type){case"error":return Gn(Gn({},e),{error:t.error,loading:!1,value:void 0});case"reset":return av(t.defaultValue);case"value":return Gn(Gn({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},cE=function(e){var t=e?e():void 0,n=E.useReducer(uE(),av(t)),r=n[0],i=n[1],a=E.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),o=E.useCallback(function(l){i({type:"error",error:l})},[]),s=E.useCallback(function(l){i({type:"value",value:l})},[]);return E.useMemo(function(){return{error:r.error,loading:r.loading,reset:a,setError:o,setValue:s,value:r.value}},[r.error,r.loading,a,o,s,r.value])},yc=function(e,t){var n=cE(function(){return e.currentUser}),r=n.error,i=n.loading,a=n.setError,o=n.setValue,s=n.value;return E.useEffect(function(){var l=Q_(e,function(u){return Hi(void 0,void 0,void 0,function(){var c;return Vi(this,function(f){switch(f.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return f.sent(),[3,4];case 3:return c=f.sent(),a(c),[3,4];case 4:return o(u),[2]}})})},a);return function(){l()}},[e]),[s,i,r]},fE=function(e,t){var n=E.useState(),r=n[0],i=n[1],a=E.useState(),o=a[0],s=a[1],l=E.useState(!1),u=l[0],c=l[1],f=E.useCallback(function(p,g){return Hi(void 0,void 0,void 0,function(){var w,y;return Vi(this,function(I){switch(I.label){case 0:c(!0),i(void 0),I.label=1;case 1:return I.trys.push([1,5,6,7]),[4,B_(e,p,g)];case 2:return w=I.sent(),t&&t.sendEmailVerification&&w.user?[4,H_(w.user,t.emailVerificationOptions)]:[3,4];case 3:I.sent(),I.label=4;case 4:return s(w),[2,w];case 5:return y=I.sent(),i(y),[3,7];case 6:return c(!1),[7];case 7:return[2]}})})},[e,t]);return[f,o,u,r]},dE=function(e){var t=E.useState(),n=t[0],r=t[1],i=E.useState(),a=i[0],o=i[1],s=E.useState(!1),l=s[0],u=s[1],c=E.useCallback(function(f,p){return Hi(void 0,void 0,void 0,function(){var g,w;return Vi(this,function(y){switch(y.label){case 0:u(!0),r(void 0),y.label=1;case 1:return y.trys.push([1,3,4,5]),[4,W_(e,f,p)];case 2:return g=y.sent(),o(g),[2,g];case 3:return w=y.sent(),r(w),[3,5];case 4:return u(!1),[7];case 5:return[2]}})})},[e]);return[c,a,l,n]},hE=function(e){var t=E.useCallback(function(n,r){var i=new lt;return n&&n.forEach(function(a){return i.addScope(a)}),r&&i.setCustomParameters(r),i},[]);return pE(e,t)},pE=function(e,t){var n=E.useState(),r=n[0],i=n[1],a=E.useState(),o=a[0],s=a[1],l=E.useState(!1),u=l[0],c=l[1],f=E.useCallback(function(p,g){return Hi(void 0,void 0,void 0,function(){var w,y,I;return Vi(this,function(h){switch(h.label){case 0:c(!0),i(void 0),h.label=1;case 1:return h.trys.push([1,3,4,5]),w=t(p,g),[4,gk(e,w)];case 2:return y=h.sent(),s(y),[2,y];case 3:return I=h.sent(),i(I),[3,5];case 4:return c(!1),[7];case 5:return[2]}})})},[e,t]);return[f,o,u,r]},mE=function(e){var t=E.useState(),n=t[0],r=t[1],i=E.useState(!1),a=i[0],o=i[1],s=E.useCallback(function(l){return Hi(void 0,void 0,void 0,function(){var u;return Vi(this,function(c){switch(c.label){case 0:o(!0),r(void 0),c.label=1;case 1:return c.trys.push([1,5,6,7]),e.currentUser?[4,K_(e.currentUser,l)]:[3,3];case 2:return c.sent(),[2,!0];case 3:throw new Error("No user is logged in");case 4:return[3,7];case 5:return u=c.sent(),r(u),[2,!1];case 6:return o(!1),[7];case 7:return[2]}})})},[e]);return[s,a,n]},vE="firebase",gE="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(vE,gE,"app");const yE={apiKey:"AIzaSyCZOb4b4nllU-RXwQl7GaBMvi97tkprX4s",authDomain:"ema-john-with-auth-5014f.firebaseapp.com",projectId:"ema-john-with-auth-5014f",storageBucket:"ema-john-with-auth-5014f.appspot.com",messagingSenderId:"634197674965",appId:"1:634197674965:web:802cad8e8bf737b6d60b5c"},wE=Em(yE),Xt=lE(wE),_E="/assets/Logo-562fd0ff.svg";const kE=()=>{const[e]=yc(Xt);return v.jsx("header",{className:" bg-gray-900 mb-4",children:v.jsxs("nav",{className:"flex justify-between max-w-screen-xl mx-auto items-center py-4 ",children:[v.jsx(st,{to:"/",children:v.jsx("img",{src:_E,alt:""})}),v.jsxs("div",{className:"flex space-x-4 text-lg mr-4 justify-center items-center text-white ",children:[v.jsx(st,{className:"hover:text-orange-500",to:"/shop",children:"Shop"}),v.jsx(st,{className:"hover:text-orange-500",to:"/orders",children:"Orders"}),v.jsx(st,{className:"hover:text-orange-500",to:"/inventory",children:"Inventory"}),v.jsx(st,{className:"hover:text-orange-500",to:"/about",children:"About"}),e?v.jsx("span",{className:"px-4 py-1 border rounded-lg hover:border-orange-500 cursor-pointer",onClick:()=>q_(Xt),children:"Logout"}):v.jsx(st,{className:"hover:text-orange-500",to:"./login",children:"Login"})]})]})})},EE=()=>v.jsx("div",{children:v.jsx("h2",{children:"This is Inventory"})}),SE=e=>{let t={};console.log(t);const n=localStorage.getItem("shopping-cart");n&&(t=JSON.parse(n));const r=t[e];r?t[e]=r+1:t[e]=1,localStorage.setItem("shopping-cart",JSON.stringify(t))},ov=()=>{let e={};const t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e},IE=e=>{const t=localStorage.getItem("shopping-cart");if(t){const n=JSON.parse(t);e in n&&(delete n[e],localStorage.setItem("shopping-cart",JSON.stringify(n)))}},xE=e=>{const[t,n]=E.useState([]);return E.useEffect(()=>{const r=ov(),i=[];for(const a in r){const o=e.find(s=>s.id===a);if(o){const s=r[a];o.quantity=s,i.push(o)}}n(i)},[e]),[t,n]},sv=()=>{const[e,t]=E.useState([]);return E.useEffect(()=>{fetch("products.json").then(n=>n.json()).then(n=>t(n))},[]),[e,t]};const lv=e=>{const{cart:t}=e;let n=0,r=0,i=0;for(const s of t)i=i+s.quantity,n=n+s.price*s.quantity,r=r+s.shipping;const a=parseFloat((n*.1).toFixed(2)),o=n+r+a;return v.jsxs("div",{className:"cart",children:[v.jsx("h4",{children:"Order Summary"}),v.jsxs("p",{children:["Selected Items: ",i]}),v.jsxs("p",{children:["Total price: $",n]}),v.jsxs("p",{children:["Total Shipping: $",r]}),v.jsxs("p",{children:["Tax: ",a]}),v.jsxs("h5",{children:["Grand Total: ",o.toFixed(2)]}),e.children]})};var CE={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},bE=CE,TE={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},PE=TE;function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function So(e){return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function NE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ed(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function OE(e,t,n){return t&&Ed(e.prototype,t),n&&Ed(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wc(e,t){return AE(e)||DE(e,t)||uv(e,t)||jE()}function Ki(e){return RE(e)||LE(e)||uv(e)||ME()}function RE(e){if(Array.isArray(e))return Gl(e)}function AE(e){if(Array.isArray(e))return e}function LE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function DE(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function uv(e,t){if(e){if(typeof e=="string")return Gl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gl(e,t)}}function Gl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ME(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sd=function(){},_c={},cv={},fv=null,dv={mark:Sd,measure:Sd};try{typeof window<"u"&&(_c=window),typeof document<"u"&&(cv=document),typeof MutationObserver<"u"&&(fv=MutationObserver),typeof performance<"u"&&(dv=performance)}catch{}var UE=_c.navigator||{},Id=UE.userAgent,xd=Id===void 0?"":Id,Jt=_c,K=cv,Cd=fv,ma=dv;Jt.document;var St=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",hv=~xd.indexOf("MSIE")||~xd.indexOf("Trident/"),va,ga,ya,wa,_a,wt="___FONT_AWESOME___",Ql=16,pv="fa",mv="svg-inline--fa",Pn="data-fa-i2svg",ql="data-fa-pseudo-element",zE="data-fa-pseudo-element-pending",kc="data-prefix",Ec="data-icon",bd="fontawesome-i2svg",FE="async",$E=["HTML","HEAD","STYLE","SCRIPT"],vv=function(){try{return!0}catch{return!1}}(),H="classic",J="sharp",Sc=[H,J];function Yi(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[H]}})}var xi=Yi((va={},ae(va,H,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(va,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),va)),Ci=Yi((ga={},ae(ga,H,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(ga,J,{solid:"fass",regular:"fasr",light:"fasl"}),ga)),bi=Yi((ya={},ae(ya,H,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(ya,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ya)),BE=Yi((wa={},ae(wa,H,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(wa,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wa)),WE=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gv="fa-layers-text",HE=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,VE=Yi((_a={},ae(_a,H,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(_a,J,{900:"fass",400:"fasr",300:"fasl"}),_a)),yv=[1,2,3,4,5,6,7,8,9,10],KE=yv.concat([11,12,13,14,15,16,17,18,19,20]),YE=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ti=new Set;Object.keys(Ci[H]).map(Ti.add.bind(Ti));Object.keys(Ci[J]).map(Ti.add.bind(Ti));var GE=[].concat(Sc,Ki(Ti),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vn.GROUP,vn.SWAP_OPACITY,vn.PRIMARY,vn.SECONDARY]).concat(yv.map(function(e){return"".concat(e,"x")})).concat(KE.map(function(e){return"w-".concat(e)})),ti=Jt.FontAwesomeConfig||{};function QE(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var XE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];XE.forEach(function(e){var t=wc(e,2),n=t[0],r=t[1],i=qE(QE(n));i!=null&&(ti[r]=i)})}var wv={styleDefault:"solid",familyDefault:"classic",cssPrefix:pv,replacementClass:mv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ti.familyPrefix&&(ti.cssPrefix=ti.familyPrefix);var gr=b(b({},wv),ti);gr.autoReplaceSvg||(gr.observeMutations=!1);var N={};Object.keys(wv).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){gr[e]=n,ni.forEach(function(r){return r(N)})},get:function(){return gr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){gr.cssPrefix=t,ni.forEach(function(n){return n(N)})},get:function(){return gr.cssPrefix}});Jt.FontAwesomeConfig=N;var ni=[];function JE(e){return ni.push(e),function(){ni.splice(ni.indexOf(e),1)}}var Ct=Ql,Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ZE(e){if(!(!e||!St)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var eS="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pi(){for(var e=12,t="";e-- >0;)t+=eS[Math.random()*62|0];return t}function Cr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ic(e){return e.classList?Cr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _v(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tS(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_v(e[n]),'" ')},"").trim()}function Yo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xc(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function nS(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function rS(e){var t=e.transform,n=e.width,r=n===void 0?Ql:n,i=e.height,a=i===void 0?Ql:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&hv?l+="translate(".concat(t.x/Ct-r/2,"em, ").concat(t.y/Ct-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):l+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),l+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var iS=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kv(){var e=pv,t=mv,n=N.cssPrefix,r=N.replacementClass,i=iS;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Td=!1;function js(){N.autoAddCss&&!Td&&(ZE(kv()),Td=!0)}var aS={mixout:function(){return{dom:{css:kv,insertCss:js}}},hooks:function(){return{beforeDOMElementCreation:function(){js()},beforeI2svg:function(){js()}}}},_t=Jt||{};_t[wt]||(_t[wt]={});_t[wt].styles||(_t[wt].styles={});_t[wt].hooks||(_t[wt].hooks={});_t[wt].shims||(_t[wt].shims=[]);var Ve=_t[wt],Ev=[],oS=function e(){K.removeEventListener("DOMContentLoaded",e),Io=1,Ev.map(function(t){return t()})},Io=!1;St&&(Io=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),Io||K.addEventListener("DOMContentLoaded",oS));function sS(e){St&&(Io?setTimeout(e,0):Ev.push(e))}function Gi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?_v(e):"<".concat(t," ").concat(tS(r),">").concat(a.map(Gi).join(""),"</").concat(t,">")}function Pd(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var lS=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Us=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?lS(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function uS(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Xl(e){var t=uS(e);return t.length===1?t[0].toString(16):null}function cS(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Nd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Jl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Nd(t);typeof Ve.hooks.addPack=="function"&&!i?Ve.hooks.addPack(e,Nd(t)):Ve.styles[e]=b(b({},Ve.styles[e]||{}),a),e==="fas"&&Jl("fa",t)}var ka,Ea,Sa,Qn=Ve.styles,fS=Ve.shims,dS=(ka={},ae(ka,H,Object.values(bi[H])),ae(ka,J,Object.values(bi[J])),ka),Cc=null,Sv={},Iv={},xv={},Cv={},bv={},hS=(Ea={},ae(Ea,H,Object.keys(xi[H])),ae(Ea,J,Object.keys(xi[J])),Ea);function pS(e){return~GE.indexOf(e)}function mS(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!pS(i)?i:null}var Tv=function(){var t=function(a){return Us(Qn,function(o,s,l){return o[l]=Us(s,a,{}),o},{})};Sv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Iv=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),bv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Qn||N.autoFetchSvg,r=Us(fS,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});xv=r.names,Cv=r.unicodes,Cc=Go(N.styleDefault,{family:N.familyDefault})};JE(function(e){Cc=Go(e.styleDefault,{family:N.familyDefault})});Tv();function bc(e,t){return(Sv[e]||{})[t]}function vS(e,t){return(Iv[e]||{})[t]}function gn(e,t){return(bv[e]||{})[t]}function Pv(e){return xv[e]||{prefix:null,iconName:null}}function gS(e){var t=Cv[e],n=bc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zt(){return Cc}var Tc=function(){return{prefix:null,iconName:null,rest:[]}};function Go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?H:n,i=xi[r][e],a=Ci[r][e]||Ci[r][i],o=e in Ve.styles?e:null;return a||o||null}var Od=(Sa={},ae(Sa,H,Object.keys(bi[H])),ae(Sa,J,Object.keys(bi[J])),Sa);function Qo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ae(t,H,"".concat(N.cssPrefix,"-").concat(H)),ae(t,J,"".concat(N.cssPrefix,"-").concat(J)),t),o=null,s=H;(e.includes(a[H])||e.some(function(u){return Od[H].includes(u)}))&&(s=H),(e.includes(a[J])||e.some(function(u){return Od[J].includes(u)}))&&(s=J);var l=e.reduce(function(u,c){var f=mS(N.cssPrefix,c);if(Qn[c]?(c=dS[s].includes(c)?BE[s][c]:c,o=c,u.prefix=c):hS[s].indexOf(c)>-1?(o=c,u.prefix=Go(c,{family:s})):f?u.iconName=f:c!==N.replacementClass&&c!==a[H]&&c!==a[J]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?Pv(u.iconName):{},g=gn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Qn.far&&Qn.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},Tc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(Qn.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Zt()||"fas"),l}var yS=function(){function e(){NE(this,e),this.definitions={}}return OE(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=b(b({},n.definitions[s]||{}),o[s]),Jl(s,o[s]);var l=bi[H][s];l&&Jl(l,o[s]),Tv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Rd=[],qn={},sr={},wS=Object.keys(sr);function _S(e,t){var n=t.mixoutsTo;return Rd=e,qn={},Object.keys(sr).forEach(function(r){wS.indexOf(r)===-1&&delete sr[r]}),Rd.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),So(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){qn[o]||(qn[o]=[]),qn[o].push(a[o])})}r.provides&&r.provides(sr)}),n}function Zl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=qn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=qn[e]||[];i.forEach(function(a){a.apply(null,n)})}function kt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return sr[e]?sr[e].apply(null,t):void 0}function eu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Zt();if(t)return t=gn(n,t)||t,Pd(Nv.definitions,n,t)||Pd(Ve.styles,n,t)}var Nv=new yS,kS=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Nn("noAuto")},ES={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return St?(Nn("beforeI2svg",t),kt("pseudoElements2svg",t),kt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,sS(function(){IS({autoReplaceSvgRoot:n}),Nn("watch",t)})}},SS={icon:function(t){if(t===null)return null;if(So(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Go(t[0]);return{prefix:r,iconName:gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(WE))){var i=Qo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Zt(),iconName:gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Zt();return{prefix:a,iconName:gn(a,t)||t}}}},Re={noAuto:kS,config:N,dom:ES,parse:SS,library:Nv,findIconDefinition:eu,toHtml:Gi},IS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(Ve.styles).length>0||N.autoFetchSvg)&&St&&N.autoReplaceSvg&&Re.dom.i2svg({node:r})};function qo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Gi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(St){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xS(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(xc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Yo(b(b({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function CS(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},i),{},{id:o}),children:r}]}]}function Pc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,w=r.found?r:n,y=w.width,I=w.height,h=i==="fak",d=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),m={children:[],attributes:b(b({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(I)})},_=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/I*16*.0625,"em")}:{};g&&(m.attributes[Pn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Pi())},children:[l]}),delete m.attributes.title);var k=b(b({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:b(b({},_),f.styles)}),x=r.found&&n.found?kt("generateAbstractMask",k)||{children:[],attributes:{}}:kt("generateAbstractIcon",k)||{children:[],attributes:{}},C=x.children,O=x.attributes;return k.children=C,k.attributes=O,s?CS(k):xS(k)}function Ad(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=b(b(b({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Pn]="");var c=b({},o.styles);xc(i)&&(c.transform=rS({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Yo(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function bS(e){var t=e.content,n=e.title,r=e.extra,i=b(b(b({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Yo(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zs=Ve.styles;function tu(e){var t=e[0],n=e[1],r=e.slice(4),i=wc(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(vn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var TS={found:!1,width:512,height:512};function PS(e,t){!vv&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nu(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=Zt()),new Promise(function(r,i){if(kt("missingIconAbstract"),n==="fa"){var a=Pv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&zs[t]&&zs[t][e]){var o=zs[t][e];return r(tu(o))}PS(e,t),r(b(b({},TS),{},{icon:N.showMissingIcons&&e?kt("missingIconAbstract")||{}:{}}))})}var Ld=function(){},ru=N.measurePerformance&&ma&&ma.mark&&ma.measure?ma:{mark:Ld,measure:Ld},Hr='FA "6.4.0"',NS=function(t){return ru.mark("".concat(Hr," ").concat(t," begins")),function(){return Ov(t)}},Ov=function(t){ru.mark("".concat(Hr," ").concat(t," ends")),ru.measure("".concat(Hr," ").concat(t),"".concat(Hr," ").concat(t," begins"),"".concat(Hr," ").concat(t," ends"))},Nc={begin:NS,end:Ov},Fa=function(){};function Dd(e){var t=e.getAttribute?e.getAttribute(Pn):null;return typeof t=="string"}function OS(e){var t=e.getAttribute?e.getAttribute(kc):null,n=e.getAttribute?e.getAttribute(Ec):null;return t&&n}function RS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function AS(){if(N.autoReplaceSvg===!0)return $a.replace;var e=$a[N.autoReplaceSvg];return e||$a.replace}function LS(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function DS(e){return K.createElement(e)}function Rv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?LS:DS:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Rv(o,{ceFn:r}))}),i}function MS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $a={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Rv(i),n)}),n.getAttribute(Pn)===null&&N.keepOriginalSource){var r=K.createComment(MS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ic(n).indexOf(N.replacementClass))return $a.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Gi(s)}).join(`
`);n.setAttribute(Pn,""),n.innerHTML=o}};function Md(e){e()}function Av(e,t){var n=typeof t=="function"?t:Fa;if(e.length===0)n();else{var r=Md;N.mutateApproach===FE&&(r=Jt.requestAnimationFrame||Md),r(function(){var i=AS(),a=Nc.begin("mutate");e.map(i),a(),n()})}}var Oc=!1;function Lv(){Oc=!0}function iu(){Oc=!1}var xo=null;function jd(e){if(Cd&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Fa:t,r=e.nodeCallback,i=r===void 0?Fa:r,a=e.pseudoElementsCallback,o=a===void 0?Fa:a,s=e.observeMutationsRoot,l=s===void 0?K:s;xo=new Cd(function(u){if(!Oc){var c=Zt();Cr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Dd(f.addedNodes[0])&&(N.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&N.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Dd(f.target)&&~YE.indexOf(f.attributeName))if(f.attributeName==="class"&&OS(f.target)){var p=Qo(Ic(f.target)),g=p.prefix,w=p.iconName;f.target.setAttribute(kc,g||c),w&&f.target.setAttribute(Ec,w)}else RS(f.target)&&i(f.target)})}}),St&&xo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jS(){xo&&xo.disconnect()}function US(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Qo(Ic(e));return i.prefix||(i.prefix=Zt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=vS(i.prefix,e.innerText)||bc(i.prefix,Xl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function FS(e){var t=Cr(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Pi()):(t["aria-hidden"]="true",t.focusable="false")),t}function $S(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zS(e),r=n.iconName,i=n.prefix,a=n.rest,o=FS(e),s=Zl("parseNodeAttributes",{},e),l=t.styleParser?US(e):[];return b({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var BS=Ve.styles;function Dv(e){var t=N.autoReplaceSvg==="nest"?Ud(e,{styleParser:!1}):Ud(e);return~t.extra.classes.indexOf(gv)?kt("generateLayersText",e,t):kt("generateSvgReplacementMutation",e,t)}var en=new Set;Sc.map(function(e){en.add("fa-".concat(e))});Object.keys(xi[H]).map(en.add.bind(en));Object.keys(xi[J]).map(en.add.bind(en));en=Ki(en);function zd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!St)return Promise.resolve();var n=K.documentElement.classList,r=function(f){return n.add("".concat(bd,"-").concat(f))},i=function(f){return n.remove("".concat(bd,"-").concat(f))},a=N.autoFetchSvg?en:Sc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(BS));a.includes("fa")||a.push("fa");var o=[".".concat(gv,":not([").concat(Pn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Cr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Nc.begin("onTree"),u=s.reduce(function(c,f){try{var p=Dv(f);p&&c.push(p)}catch(g){vv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){Av(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function WS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dv(e).then(function(n){n&&Av([n],t)})}function HS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:eu(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:eu(i||{})),e(r,b(b({},n),{},{mask:i}))}}var VS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ze:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,y=n.classes,I=y===void 0?[]:y,h=n.attributes,d=h===void 0?{}:h,m=n.styles,_=m===void 0?{}:m;if(t){var k=t.prefix,x=t.iconName,C=t.icon;return qo(b({type:"icon"},t),function(){return Nn("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?d["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(w||Pi()):(d["aria-hidden"]="true",d.focusable="false")),Pc({icons:{main:tu(C),mask:l?tu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:b(b({},Ze),i),symbol:o,title:p,maskId:c,titleId:w,extra:{attributes:d,styles:_,classes:I}})})}},KS={mixout:function(){return{icon:HS(VS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=zd,n.nodeCallback=WS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return zd(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,w){Promise.all([nu(i,s),c.iconName?nu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var I=wc(y,2),h=I[0],d=I[1];g([n,Pc({icons:{main:h,mask:d},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Yo(s);l.length>0&&(i.style=l);var u;return xc(o)&&(u=kt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},YS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return qo({type:"layer"},function(){Nn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Ki(a)).join(" ")},children:o}]})}}}},GS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return qo({type:"counter",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),bS({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Ki(s))}})})}}}},QS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ze:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return qo({type:"text",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),Ad({content:n,transform:b(b({},Ze),a),title:s,extra:{attributes:f,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Ki(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(hv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ad({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},qS=new RegExp('"',"ug"),Fd=[1105920,1112319];function XS(e){var t=e.replace(qS,""),n=cS(t,0),r=n>=Fd[0]&&n<=Fd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Xl(i?t[0]:t),isSecondary:r||i}}function $d(e,t){var n="".concat(zE).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Cr(e.children),o=a.filter(function(C){return C.getAttribute(ql)===t})[0],s=Jt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(HE),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?J:H,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ci[p][l[2].toLowerCase()]:VE[p][u],w=XS(f),y=w.value,I=w.isSecondary,h=l[0].startsWith("FontAwesome"),d=bc(g,y),m=d;if(h){var _=gS(y);_.iconName&&_.prefix&&(d=_.iconName,g=_.prefix)}if(d&&!I&&(!o||o.getAttribute(kc)!==g||o.getAttribute(Ec)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=$S(),x=k.extra;x.attributes[ql]=t,nu(d,g).then(function(C){var O=Pc(b(b({},k),{},{icons:{main:C,mask:Tc()},prefix:g,iconName:m,extra:x,watchable:!0})),U=K.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=O.map(function(L){return Gi(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function JS(e){return Promise.all([$d(e,"::before"),$d(e,"::after")])}function ZS(e){return e.parentNode!==document.head&&!~$E.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ql)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bd(e){if(St)return new Promise(function(t,n){var r=Cr(e.querySelectorAll("*")).filter(ZS).map(JS),i=Nc.begin("searchPseudoElements");Lv(),Promise.all(r).then(function(){i(),iu(),t()}).catch(function(){i(),iu(),n()})})}var eI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;N.searchPseudoElements&&Bd(i)}}},Wd=!1,tI={mixout:function(){return{dom:{unwatch:function(){Lv(),Wd=!0}}}},hooks:function(){return{bootstrap:function(){jd(Zl("mutationObserverCallbacks",{}))},noAuto:function(){jS()},watch:function(n){var r=n.observeMutationsRoot;Wd?iu():jd(Zl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},nI={mixout:function(){return{parse:{transform:function(n){return Hd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Hd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:p};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b(b({},r.icon.attributes),g.path)}]}]}}}},Fs={x:0,y:0,width:"100%",height:"100%"};function Vd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function rI(e){return e.tag==="g"?e.children:[e]}var iI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Qo(i.split(" ").map(function(o){return o.trim()})):Tc();return a.prefix||(a.prefix=Zt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,p=o.icon,g=nS({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:b(b({},Fs),{},{fill:"white"})},y=c.children?{children:c.children.map(Vd)}:{},I={tag:"g",attributes:b({},g.inner),children:[Vd(b({tag:c.tag,attributes:b(b({},c.attributes),g.path)},y))]},h={tag:"g",attributes:b({},g.outer),children:[I]},d="mask-".concat(s||Pi()),m="clip-".concat(s||Pi()),_={tag:"mask",attributes:b(b({},Fs),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:rI(p)},_]};return r.push(k,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Fs)}),{children:r,attributes:i}}}},aI={provides:function(t){var n=!1;Jt.matchMedia&&(n=Jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:b(b({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:b(b({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:b(b({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:b(b({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:b(b({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},oI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},sI=[aS,KS,YS,GS,QS,eI,tI,nI,iI,aI,oI];_S(sI,{mixoutsTo:Re});Re.noAuto;Re.config;Re.library;Re.dom;var au=Re.parse;Re.findIconDefinition;Re.toHtml;var lI=Re.icon;Re.layer;Re.text;Re.counter;var D={},uI={get exports(){return D},set exports(e){D=e}},cI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fI=cI,dI=fI;function Mv(){}function jv(){}jv.resetWarningCache=Mv;var hI=function(){function e(r,i,a,o,s,l){if(l!==dI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jv,resetWarningCache:Mv};return n.PropTypes=n,n};uI.exports=hI();function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kd(Object(n),!0).forEach(function(r){Xn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Co(e){return Co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Co(e)}function Xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Uv(e,t){if(e==null)return{};var n=pI(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ou(e){return mI(e)||vI(e)||gI(e)||yI()}function mI(e){if(Array.isArray(e))return su(e)}function vI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gI(e,t){if(e){if(typeof e=="string")return su(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return su(e,t)}}function su(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wI(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,p=e.fixedWidth,g=e.inverse,w=e.border,y=e.listItem,I=e.flip,h=e.size,d=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":w,"fa-li":y,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},Xn(t,"fa-".concat(h),typeof h<"u"&&h!==null),Xn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Xn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Xn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(k){return _[k]?k:null}).filter(function(k){return k})}function _I(e){return e=e-0,e===e}function zv(e){return _I(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var kI=["style"];function EI(e){return e.charAt(0).toUpperCase()+e.slice(1)}function SI(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=zv(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[EI(i)]=a:t[i]=a,t},{})}function Fv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Fv(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=SI(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[zv(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Uv(n,kI);return i.attrs.style=jt(jt({},i.attrs.style),o),e.apply(void 0,[t.tag,jt(jt({},i.attrs),s)].concat(ou(r)))}var $v=!1;try{$v=!0}catch{}function II(){if(!$v&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yd(e){if(e&&Co(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(au.icon)return au.icon(e);if(e===null)return null;if(e&&Co(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function $s(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xn({},e,t):{}}var xI=["forwardedRef"];function br(e){var t=e.forwardedRef,n=Uv(e,xI),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Yd(r),f=$s("classes",[].concat(ou(wI(n)),ou(o.split(" ")))),p=$s("transform",typeof n.transform=="string"?au.transform(n.transform):n.transform),g=$s("mask",Yd(i)),w=lI(c,jt(jt(jt(jt({},f),p),g),{},{symbol:a,title:s,titleId:l,maskId:u}));if(!w)return II("Could not find icon",c),null;var y=w.abstract,I={ref:t};return Object.keys(n).forEach(function(h){br.defaultProps.hasOwnProperty(h)||(I[h]=n[h])}),CI(y[0],I)}br.displayName="FontAwesomeIcon";br.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};br.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var CI=Fv.bind(null,du.createElement);const bI=e=>{const{product:t,handleRemoveProduct:n}=e,{name:r,img:i,price:a,shipping:o,quantity:s}=t;return v.jsxs("div",{className:"review-item",children:[v.jsx("div",{children:v.jsx("img",{src:i,alt:""})}),v.jsxs("div",{className:"review-item-details-container",children:[v.jsxs("div",{className:"ml-4 review-item-details",children:[v.jsx("p",{className:"text-orange-500 text-xl font-bold",title:r,children:r.length>20?r.slice(0,20)+"...":r}),v.jsxs("p",{children:["Price: ",v.jsxs("span",{className:"orange-color",children:["$",a]})]}),v.jsx("p",{children:v.jsxs("small",{children:["Shipping: $",o]})}),v.jsx("p",{children:v.jsxs("small",{children:["Quantity: ",s]})})]}),v.jsx("div",{className:"delete-container",children:v.jsx("button",{onClick:()=>n(t),className:"delete-button",children:v.jsx(br,{className:"delete-icon",icon:bE})})})]})]})};const TI=()=>{const[e,t]=sv(),[n,r]=xE(e),i=Mi(),a=o=>{const s=n.filter(l=>l.id!==o.id);r(s),IE(o.id)};return v.jsxs("div",{className:"grid grid-cols-2 shop-container",children:[v.jsx("div",{className:"review-items-container",children:n.map(o=>v.jsx(bI,{product:o,handleRemoveProduct:a},o.id))}),v.jsx("div",{className:"cart-container",children:v.jsx(lv,{cart:n,children:v.jsx("button",{className:"shipment-btn",onClick:()=>i("/shipment"),children:"Proceed Shipment"})})})]})},PI="/assets/newBooks-5f103aa5.png";const NI=({product:e,handleAddToCart:t})=>{const{name:n,img:r,seller:i,price:a,ratings:o}=e;return v.jsxs("div",{className:"product",children:[v.jsx("img",{onError:s=>{s.target.src=PI},src:r,alt:""}),v.jsxs("div",{className:"product-info",children:[v.jsx("p",{className:"product-name",children:n}),v.jsxs("p",{children:["Price: $",a]}),v.jsx("p",{children:v.jsxs("small",{children:["Seller: ",i]})}),v.jsx("p",{children:v.jsxs("small",{children:["Ratings: ",o," stars"]})})]}),v.jsxs("button",{onClick:()=>t(e),className:"btn-cart",children:[v.jsx("p",{className:"btn-text",children:"Add to Cart"}),v.jsx(br,{icon:PE})]})]})};const Gd=()=>{const[e,t]=sv(),[n,r]=E.useState([]);E.useEffect(()=>{const a=ov(),o=[];for(const s in a){const l=e.find(u=>u.id===s);if(l){const u=a[s];l.quantity=u,o.push(l)}}r(o)},[e]);const i=a=>{let o=[];const s=n.find(l=>l.id===a.id);if(!s)a.quantity=1,o=[...n,a];else{const l=n.filter(u=>u.id!==a.id);s.quantity=s.quantity+1,o=[...l,s]}r(o),SE(a.id)};return v.jsxs("div",{className:"container mx-auto grid lg:grid-cols-4 gap-4",children:[v.jsx("div",{className:"col-span-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:e.map(a=>v.jsx(NI,{product:a,handleAddToCart:i},a.id))}),v.jsx("div",{className:"cart-container",children:v.jsx(lv,{cart:n,children:v.jsx(st,{to:"/orders",children:v.jsx("button",{className:"review-order-btn",children:"Review Order "})})})})]})};const Bv=()=>v.jsx("div",{children:v.jsx("h1",{style:{textAlign:"center",lineHeight:"100vh"},children:"Loading.."})}),OI=()=>{var g,w;const e=Mi(),t=Ir(),[n,r,i,a]=dE(Xt),[o,s,l,u]=hE(Xt),c=((w=(g=t.state)==null?void 0:g.from)==null?void 0:w.pathname)||"/";if((r||s)&&e(c,{replace:!0}),i||l)return v.jsx(Bv,{});let f;(a||u)&&(f=v.jsxs("p",{style:{color:"red"},children:[a.message," || ",u.message]}));const p=y=>{y.preventDefault();const I=y.target.email.value,h=y.target.password.value;n(I,h)};return v.jsx("div",{className:"login-container",children:v.jsxs("div",{children:[v.jsx("h1",{className:"form-title",children:"Login"}),v.jsxs("form",{onSubmit:p,children:[v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"email",children:"Email:"}),v.jsx("input",{name:"email",type:"email",placeholder:" Email",required:!0})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"password",children:"Password:"}),v.jsx("input",{name:"password",type:"password",placeholder:" Password",required:!0})]}),f,v.jsx("input",{className:"form-submit",type:"submit",value:"Login"})]}),v.jsxs("p",{children:["New to Ema-john?"," ",v.jsx(st,{className:"form-link",to:"/signup",children:"Create an account"})]}),v.jsxs("div",{className:"or-container",children:[v.jsx("div",{className:"or-line"}),v.jsx("p",{className:"or",children:"OR"}),v.jsx("div",{className:"or-line"})]}),v.jsx("button",{onClick:()=>o(),className:"google-btn",children:"Continue with google"})]})})};const RI=()=>{const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,a]=E.useState(""),[o,s]=E.useState(""),[l,u]=E.useState(""),c=Mi(),[f,p]=mE(Xt),[g,w,y]=fE(Xt);if(w&&(c("/shop"),console.log(w)),y||p)return v.jsx(Bv,{});const I=k=>{t(k.target.value)},h=k=>{r(k.target.value)},d=k=>{a(k.target.value)},m=k=>{s(k.target.value)},_=async k=>{if(k.preventDefault(),i!==o){u("Sorry your password did not match");return}else if(i.length<8){u("your password must grater then 8 character");return}await g(e,i),await f({displayName:n})};return v.jsx("div",{className:"signup-container",children:v.jsxs("div",{children:[v.jsx("h1",{className:"form-title",children:"Signup"}),v.jsxs("form",{onSubmit:_,children:[v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"Email",children:"Name:"}),v.jsx("input",{onBlur:h,type:"text",name:"name",id:"name",placeholder:" Name"})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"Email",children:"Email:"}),v.jsx("input",{onBlur:I,type:"email",name:"email",id:"email",placeholder:" Email"})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"Password",children:"Password"}),v.jsx("input",{onBlur:d,type:"password",name:"Password",id:"password",placeholder:" Password"})]}),v.jsxs("div",{className:"input-group",children:[v.jsx("label",{htmlFor:"Password",children:"Confirm Password"}),v.jsx("input",{onBlur:m,type:"password",name:"password",id:"confirmPassword",required:!0,placeholder:"Confirm password"})]}),v.jsx("p",{style:{color:"red"},children:l}),v.jsx("input",{className:"form-submit",type:"submit",value:"Sign up"})]}),v.jsxs("p",{children:["Already have an account?"," ",v.jsx(st,{className:"form-link",to:"/Login",children:"Please login"})]}),v.jsxs("div",{className:"or-container",children:[v.jsx("div",{className:"or-line"}),v.jsx("p",{className:"or",children:"OR"}),v.jsx("div",{className:"or-line"})]}),v.jsx("button",{className:"google-btn",children:"Continue with google"})]})})},Qd=({children:e})=>{const[t]=yc(Xt),n=Ir();return t?e:v.jsx(c1,{to:"/login",state:{from:n},replace:!0})},AI=()=>{const[e,t]=yc(Xt);if(t)return v.jsx("loading",{});const n=r=>{r.preventDefault();const i=r.target.name.value,a=r.target.email.value,o=r.target.address.value,s=r.target.phone.value;console.log(i,a,o,s)};return v.jsxs("div",{children:[v.jsx("h1",{className:"text-center text-5xl text-blue-500  my-9",children:"Add your information"}),v.jsx("div",{className:"flex items-center justify-center",children:v.jsx("div",{className:"mx-auto w-full max-w-[550px]",children:v.jsxs("form",{onSubmit:n,children:[v.jsxs("div",{className:"mb-5",children:[v.jsx("label",{for:"name",className:"mb-3 block text-base font-medium text-[#07074D]",children:"Your name"}),v.jsx("input",{type:"text",required:!0,name:"name",id:"name",placeholder:"Full Name",className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none "})]}),v.jsxs("div",{className:"mb-5",children:[v.jsx("label",{for:"email",className:"mb-3 block font-medium ",children:"Email Address"}),v.jsx("input",{value:e.email,type:"email",name:"email",id:"email",className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none",readOnly:!0,autoComplete:"off"})]}),v.jsxs("div",{className:"mb-5",children:[v.jsx("label",{for:"address",className:"mb-3 block text-base font-medium text-[#07074D]",children:"Address"}),v.jsx("input",{required:!0,type:"text",name:"address",id:"address",placeholder:"Enter your Address",className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"})]}),v.jsxs("div",{className:"mb-5",children:[v.jsx("label",{for:"phone",className:"mb-3 block text-base font-medium text-[#07074D]",children:"Phone"}),v.jsx("input",{required:!0,type:"text",name:"phone",id:"phone",placeholder:"Enter your Phone",className:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"})]}),v.jsx("div",{children:v.jsx("button",{className:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none",children:"Submit"})})]})})})]})};function LI(){return v.jsxs("div",{children:[v.jsx(kE,{}),v.jsxs(d1,{children:[v.jsx(it,{path:"/",element:v.jsx(Gd,{})}),v.jsx(it,{path:"/shop",element:v.jsx(Gd,{})}),v.jsx(it,{path:"/orders",element:v.jsx(TI,{})}),v.jsx(it,{path:"/inventory",element:v.jsx(Qd,{children:v.jsx(EE,{})})}),v.jsx(it,{path:"/shipment",element:v.jsx(Qd,{children:v.jsx(AI,{})})}),v.jsx(it,{path:"/about",element:v.jsx(k1,{})}),v.jsx(it,{path:"/login",element:v.jsx(OI,{})}),v.jsx(it,{path:"/signup",element:v.jsx(RI,{})})]})]})}const DI="modulepreload",MI=function(e){return"/"+e},qd={},jI=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=MI(a),a in qd)return;qd[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===a&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":DI,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},UI=e=>{e&&e instanceof Function&&jI(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:a})=>{t(e),n(e),r(e),i(e),a(e)})};y0.render(v.jsx(g1,{children:v.jsx(du.StrictMode,{children:v.jsx(LI,{})})}),document.getElementById("root"));UI();
