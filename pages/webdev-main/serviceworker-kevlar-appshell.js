/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function ea(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return fa(a())}
ea("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
ea("Array.prototype.values",function(a){return a?a:function(){return ha(this,function(b,c){return c})}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
ea("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
ea("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
ea("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var t=this||self;function v(a,b,c){a=a.split(".");c=c||t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function w(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ia(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function ja(a){var b=ia(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function na(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na=la:na=ma;return na.apply(null,arguments)}
function oa(a,b){function c(){}
c.prototype=b.prototype;a.Za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function pa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
oa(pa,Error);pa.prototype.name="CustomError";function qa(){}
;function ra(a,b){Array.prototype.forEach.call(a,b,void 0)}
function sa(a,b){return Array.prototype.map.call(a,b,void 0)}
function ta(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function ua(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ja(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function va(a){var b=wa;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function xa(a){for(const b in a)return!1;return!0}
function ya(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=ya(a[c]);return b}
const za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Aa(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<za.length;f++)c=za[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ba(){}
function Ca(a){return new Ba(Da,a)}
var Da={};Ca("");var Ea=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Fa(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
function z(a){return-1!=Fa().indexOf(a)}
;function Ga(){return(z("Chrome")||z("CriOS"))&&!z("Edge")||z("Silk")}
;var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ia(a){return a?decodeURI(a):a}
function Ja(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ja(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ka(a){var b=[],c;for(c in a)Ja(c,a[c],b);return b.join("&")}
;function La(){throw Error("Invalid UTF8");}
function Ma(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let Na=void 0,Oa;const Pa="undefined"!==typeof TextDecoder;function Qa(a){t.setTimeout(()=>{throw a;},0)}
;!z("Android")||Ga();Ga();var Ra=z("Safari")&&!(Ga()||z("Coast")||z("Opera")||z("Edge")||z("Edg/")||z("OPR")||z("Firefox")||z("FxiOS")||z("Silk")||z("Android"))&&!(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"));var Sa={},Ta=null;function Va(a,b){void 0===b&&(b=0);Wa();b=Sa[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Xa(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ya(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ya(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ta[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Wa();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Wa(){if(!Ta){Ta={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Sa[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ta[f]&&(Ta[f]=e)}}}}
;var Za="undefined"!==typeof Uint8Array;function $a(a){return Za&&null!=a&&a instanceof Uint8Array}
let ab;var bb={};let cb;function db(a){if(a!==bb)throw Error("illegal external caller");}
function eb(){return cb||(cb=new fb(null,bb))}
function gb(a){db(bb);var b=a.V;b=null==b||$a(b)?b:"string"===typeof b?Xa(b):null;return null==b?b:a.V=b}
var fb=class{constructor(a,b){db(b);this.V=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}ya(){return null==this.V}sizeBytes(){const a=gb(this);return a?a.length:0}};const A="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function B(a,b){Object.isFrozen(a)||(A?a[A]|=b:void 0!==a.F?a.F|=b:Object.defineProperties(a,{F:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function hb(a,b){Object.isExtensible(a)&&(A?a[A]&&(a[A]&=~b):void 0!==a.F&&(a.F&=~b))}
function C(a){let b;A?b=a[A]:b=a.F;return null==b?0:b}
function ib(a,b){A?a[A]=b:void 0!==a.F?a.F=b:Object.defineProperties(a,{F:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function jb(a){B(a,1);return a}
function kb(a){B(a,17);return a}
function D(a){return a?!!(C(a)&2):!1}
function lb(a){B(a,16);return a}
function mb(a,b){ib(b,(C(a)|0)&-51)}
function nb(a,b){ib(b,(C(a)|18)&-33)}
;var ob={};function pb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let qb;var rb=Object,sb=rb.freeze,tb=[];B(tb,3);var ub=sb.call(rb,tb);function vb(a){if(D(a.m))throw Error("Cannot mutate an immutable Message");}
;function wb(a){return a.displayName||a.name||"unknown type name"}
function xb(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${wb(b)} but got ${a&&wb(a.constructor)}`);return a}
function yb(a,b,c=!1){if(Array.isArray(a))return new b(c?lb(a):a)}
;function zb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if($a(a))return Va(a);if(a instanceof fb){const b=a.V;return null==b?"":"string"===typeof b?b:a.V=Va(b)}}}return a}
;function Ab(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Bb(a,b,c,void 0!==d);else if(pb(a)){const e={};for(let f in a)e[f]=Ab(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Bb(a,b,c,d){d=d?!!(C(a)&16):void 0;const e=Array.prototype.slice.call(a);c(a,e);for(a=0;a<e.length;a++)e[a]=Ab(e[a],b,c,d);return e}
function Cb(a){return a.ba===ob?a.toJSON():zb(a)}
function Db(a){if(!a)return a;if("object"===typeof a){if($a(a))return new Uint8Array(a);if(a.ba===ob)return a.clone()}return a}
function Eb(){}
;function E(a,b,c=!1){return-1===b?null:b>=a.O?a.v?a.v[b]:void 0:c&&a.v&&(c=a.v[b],null!=c)?c:a.m[b+a.J]}
function F(a,b,c,d=!1,e=!1){e||vb(a);a.l&&(a.l=void 0);if(b>=a.O||d)return(a.v||(a.v=a.m[a.O+a.J]={}))[b]=c,a;void 0!==a.v&&a.O>=a.m.length?(d=a.m.length-1,e=b+a.J,e>=d?(a.m[d]=void 0,a.m[e]=c,a.m.push(a.v)):a.m[e]=c):a.m[b+a.J]=c;void 0!==a.v&&b in a.v&&delete a.v[b];return a}
function Fb(a,b,c,d){let e=E(a,b,d);Array.isArray(e)||(e=ub);const f=C(e);f&1||jb(e);if(D(a.m))f&2||B(e,2),c&1||Object.freeze(e);else if(e===ub||!(c&1&&c&2)&&f&2)e=jb(Array.prototype.slice.call(e)),F(a,b,e,d);else if(!(c&2)&&f&16){a=e;if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");hb(a,16)}return e}
function Gb(a,b,c,d){vb(a);(c=Hb(a,c))&&c!==b&&null!=d&&F(a,c,void 0,!1);return F(a,b,d)}
function Hb(a,b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];null!=E(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function Ib(a,b,c){const d=E(a,c,!1);{let f=!1;var e=null==d||"object"!==typeof d||(f=Array.isArray(d))||d.ba!==ob?f?new b(d):void 0:d}e!==d&&null!=e&&(F(a,c,e,!1,!0),B(e.m,C(a.m)&-33));b=e;if(null==b)return b;D(b.m)&&!D(a.m)&&(b=Jb(b),F(a,c,b,!1));return b}
function Kb(a,b,c,d,e=!0){a.i||(a.i={});let f=a.i[c],g=Fb(a,c,3,d);const h=D(a.m);if(f)h||(Object.isFrozen(f)?e||(f=Array.prototype.slice.call(f),a.i[c]=f):e&&Object.freeze(f));else{f=[];const l=!!(C(a.m)&16),m=D(g);!h&&m&&(g=jb(Array.prototype.slice.call(g)),F(a,c,g,d));d=m;for(let p=0;p<g.length;p++){var k=g[p];d=d||D(k);k=yb(k,b,l);void 0!==k&&(f.push(k),m&&B(k.m,2))}a.i[c]=f;a=g;Object.isFrozen(a)||(b=C(a)|33,ib(a,d?b&-9:b|8));(h||e&&m)&&B(f,2);(h||e)&&Object.freeze(f)}return f}
function Lb(a,b,c,d=!1){var e=D(a.m);b=Kb(a,b,c,d,e);a=Fb(a,c,3,d);if(e=!e&&a){if(!a)throw Error("cannot check mutability state of non-array");e=!(C(a)&8)}if(e){for(e=0;e<b.length;e++)(c=b[e])&&D(c.m)&&(c=e,d=Jb(b[e]),b[c]=d,a[e]=b[e].m);B(a,8)}return b}
function H(a,b,c,d){vb(a);null!=d?xb(d,b):d=void 0;F(a,c,d)}
function Mb(a,b,c,d,e){vb(a);null!=e?xb(e,b):e=void 0;Gb(a,c,d,e)}
function Nb(a,b,c,d){vb(a);const e=Kb(a,c,b,void 0,!1);c=null!=d?xb(d,c):new c;a=Fb(a,b,2);e.push(c);a.push(c.m);c.M()&&hb(a,8);return c}
function Ob(a,b){return E(a,b)}
function Pb(a,b){a=E(a,b);return null==a?"":a}
;function Qb(a,b){if(null!=a){if(Za&&a instanceof Uint8Array)return a.length?new fb(new Uint8Array(a),bb):eb();if(Array.isArray(a)){if(D(a))return a;b&&(b=C(a),b=!(b&32)&&(!!(b&16)||0===b));return b?(B(a,2),a):Bb(a,Qb,nb)}return a.ba===ob?Rb(a):a}}
function Sb(a,b,c,d,e,f){if(a=a.i&&a.i[c]){d=0<a.length?a[0].constructor:void 0;D(a)&&Object.isFrozen(a)||(f=sa(a,Rb),nb(a,f),Object.freeze(f),a=f);var g=a;vb(b);if(null!=g){a=jb([]);f=!1;for(let h=0;h<g.length;h++)a[h]=xb(g[h],d).m,f=f||D(a[h]);b.i||(b.i={});b.i[c]=g;d=a;f?hb(d,8):B(d,8)}else b.i&&(b.i[c]=void 0),a=ub;F(b,c,a,e)}else F(b,c,Qb(d,f),e)}
function Rb(a){if(D(a.m))return a;a=Tb(a);B(a.m,2);return a}
function Tb(a){const b=new a.constructor;a.P&&(b.P=a.P.slice());const c=a.m,d=!!(C(c)&16);for(let e=0;e<c.length;e++){let f=c[e];if(e===c.length-1&&pb(f))for(const g in f){const h=+g;Number.isNaN(h)?(b.v||(b.v=b.m[b.O+b.J]={}))[h]=f[h]:Sb(a,b,h,f[g],!0,d)}else Sb(a,b,e-a.J,f,!1,d)}return b}
function Jb(a){if(!D(a.m))return a;const b=Tb(a);b.l=a;return b}
;function Ub(a){qb=!0;try{return JSON.stringify(a.toJSON(),Vb)}finally{qb=!1}}
var I=class{constructor(a,b,c){null==a&&(a=Wb);Wb=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){var h=f?[f]:[];B(h,48);a=h;h=!0}else{if(!Array.isArray(a))throw Error();if(h=!!(C(a)&16))g=C(a),ib(a,g|32),g=!!(g&32)}e&&0<a.length&&pb(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.J=(f?0:-1)-d;this.i=void 0;this.m=a;a:{f=this.m.length;d=f-1;if(f&&(f=this.m[d],pb(f))){this.v=f;b=Object.keys(f);0<b.length&&Array.prototype.every.call(b,isNaN,void 0)?this.O=Number.MAX_VALUE:
this.O=d-this.J;break a}void 0!==b&&-1<b?(this.O=Math.max(b,d+1-this.J),this.v=void 0):this.O=Number.MAX_VALUE}if(!e&&this.v&&"g"in this.v)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=h&&!g?kb:jb,b=0;b<c.length;b++)h=c[b],(g=E(this,h))?Array.isArray(g)&&e(g):F(this,h,ub,!1,!0)}toJSON(){const a=Xb(this.m);return qb?a:Bb(a,Cb,Eb)}clone(){var a=Bb(this.m,Db,mb);lb(a);Wb=a;a=new this.constructor(a);Wb=null;Yb(a,this);return a}M(){return D(this.m)}};
I.prototype.ba=ob;function Vb(a,b){return zb(b)}
function Xb(a){let b,c=a.length,d=!1;for(let g=a.length;g--;){let h=a[g];if(Array.isArray(h)){var e=h;Array.isArray(h)&&h&&C(h)&1&&!h.length?h=null:h=Xb(h);h!=e&&(d=!0)}else if(g===a.length-1&&pb(h)){a:{var f=h;e={};let k=!1;for(let l in f){let m=f[l];if(Array.isArray(m)){let p=m;Array.isArray(m)&&m&&C(m)&1&&!m.length?m=null:m=Xb(m);m!=p&&(k=!0)}null!=m?e[l]=m:k=!0}if(k){for(let l in e){f=e;break a}f=null}}f!=h&&(d=!0);c--;continue}null==h&&c==g+1?(d=!0,c--):d&&(b||(b=a.slice(0,c)),b[g]=h)}if(!d)return a;
b||(b=a.slice(0,c));f&&b.push(f);return b}
function Yb(a,b){b.P&&(a.P=b.P.slice());const c=b.i;if(c){b=b.v;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=Lb(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)Yb(d[e],g[e])}else throw Error("unexpected object: type: "+ia(g)+": "+g);}}}}
let Wb;function Zb(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function $b(){return Error("Failed to read varint, encoding is invalid.")}
function ac(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function bc(a){if("string"===typeof a)return{buffer:Xa(a),M:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),M:!1};if(a.constructor===Uint8Array)return{buffer:a,M:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),M:!1};if(a.constructor===fb)return{buffer:gb(a)||ab||(ab=new Uint8Array(0)),M:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),M:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const cc="function"===typeof Uint8Array.prototype.slice;function dc(a,b){a.h=b;if(b>a.i)throw ac(a.i,b);}
function ec(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw $b();dc(a,c);return e}
function fc(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw ac(b,a.i-c);a.h=d;return c}
var gc=class{constructor(a){this.j=null;this.o=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,void 0)}init(a,b,c,{fa:d=!1}={}){this.fa=d;a&&(a=bc(a),this.j=a.buffer,this.o=a.M,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.o=!1;this.h=this.i=this.l=0;this.fa=!1}reset(){this.h=this.l}advance(a){dc(this,this.h+a)}},hc=[];function ic(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=ec(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Zb(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function jc(a){switch(a.i){case 0:if(0!=a.i)jc(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if(0===(d[b++]&128)){dc(a,b);break a}throw $b();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?jc(a):(b=ec(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!ic(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}jc(a)}while(1);break;default:throw Zb(a.i,a.j);}}
var kc=class{constructor(a){if(hc.length){const b=hc.pop();b.init(a,void 0,void 0,void 0);a=b}else a=new gc(a);this.h=a;this.j=this.h.h;this.i=this.l=-1;({Y:a=!1}={});this.Y=a}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},lc=[];const mc=Symbol();function nc(a,b,c){return a[mc]||(a[mc]=(d,e)=>b(d,e,c))}
function oc(a){let b=a[mc];if(!b){const c=pc(a);b=(d,e)=>qc(d,e,c);
a[mc]=b}return b}
function rc(a){var b=a.Lb;if(b)return oc(b);if(b=a.Vb)return nc(a.Na.ga,b,a.Ub)}
function sc(a){const b=rc(a),c=a.Na,d=a.cc.da;return b?(e,f)=>d(e,f,c,b):(e,f)=>d(e,f,c)}
function tc(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(uc in c||vc in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const vc=Symbol(),uc=Symbol();function wc(a,b){a[0]=b}
function xc(a,b,c,d){const e=c.da;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function yc(a,b,c,d,e){const f=c.da,g=oc(d),h=pc(d).ga;a[b]=(k,l,m)=>f(k,l,m,h,g,e)}
function zc(a,b,c,d,e,f,g){const h=c.da,k=nc(d,e,f);a[b]=(l,m,p)=>h(l,m,p,d,k,g)}
function pc(a){var b=a[uc];if(b)return b;b=a[uc]={};var c=wc,d=xc,e=yc,f=zc;b.ga=a[0];let g=1;if(a.length>g&&"number"!==typeof a[g]){var h=a[g++];c(b,h)}for(;g<a.length;){c=a[g++];for(var k=g+1;k<a.length&&"number"!==typeof a[k];)k++;h=a[g++];k-=g;switch(k){case 0:d(b,c,h);break;case 1:(k=tc(a,g))?(g++,e(b,c,h,k)):d(b,c,h,a[g++]);break;case 2:k=b;var l=g++;l=tc(a,l);e(k,c,h,l,a[g++]);break;case 3:f(b,c,h,a[g++],a[g++],a[g++]);break;case 4:f(b,c,h,a[g++],a[g++],a[g++],a[g++]);break;default:throw Error("unexpected number of binary field arguments: "+
k);}}uc in a&&vc in a&&(a.length=0);return b}
function qc(a,b,c){for(;ic(b)&&4!=b.i;){var d=b.l,e=c[d];if(!e){var f=c[0];f&&(f=f[d])&&(e=c[d]=sc(f))}if(!e||!e(b,a,d))if(f=b,d=a,e=f.j,jc(f),!f.Y){var g=f.h.h-e;f.h.h=e;a:{f=f.h;e=g;if(0==e){e=eb();break a}const h=fc(f,e);f.fa&&f.o?e=f.j.subarray(h,h+e):(f=f.j,g=h,e=h+e,e=g===e?ab||(ab=new Uint8Array(0)):cc?f.slice(g,e):new Uint8Array(f.subarray(g,e)));e=0==e.length?eb():new fb(e,bb)}(f=d.P)?f.push(e):d.P=[e]}}return a}
function Ac(a,b){return{da:a,lc:b}}
var Bc=Ac(function(a,b,c){if(2!==a.i)return!1;var d=ec(a.h)>>>0;a=a.h;var e=fc(a,d);a=a.j;if(Pa){var f=a,g;(g=Oa)||(g=Oa=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var h=g.decode(f)}catch(l){if(void 0===Na){try{g.decode(new Uint8Array([128]))}catch(m){}try{g.decode(new Uint8Array([97])),Na=!0}catch(m){Na=!1}}!Na&&(Oa=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let m;for(;h<d;){var k=a[h++];128>k?e.push(k):224>k?h>=d?La():(m=a[h++],194>k||128!==(m&192)?
(h--,La()):e.push((k&31)<<6|m&63)):240>k?h>=d-1?La():(m=a[h++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[h++])&192)?(h--,La()):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?h>=d-2?La():(m=a[h++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[h++])&192)||128!==((g=a[h++])&192)?(h--,La()):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|g&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):La();8192<=e.length&&(l=Ma(l,e),e.length=0)}h=Ma(l,e)}F(b,c,h);return!0},function(a,b,c){a.i(c,E(b,c))}),
Cc=Ac(function(a,b,c,d,e){if(2!==a.i)return!1;
b=Nb(b,c,d);c=a.h.i;d=ec(a.h)>>>0;const f=a.h.h+d;let g=f-c;0>=g&&(a.h.i=f,e(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0},function(a,b,c,d,e){a.h(c,Lb(b,d,c),e)});Ca("csi.gstatic.com");Ca("googleads.g.doubleclick.net");Ca("partner.googleadservices.com");Ca("pubads.g.doubleclick.net");Ca("securepubads.g.doubleclick.net");Ca("tpc.googlesyndication.com");function Dc(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ec(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Fc[c])c=Fc[c];else{c=String(c);if(!Fc[c]){var f=/function\s+([^\(]+)/m.exec(c);Fc[c]=f?f[1]:"[Anonymous]"}c=Fc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ec(a,b){b||(b={});b[Gc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Gc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ec(a,b));return c}
function Gc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Fc={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Hc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
Hc.prototype.clone=function(){return new Hc(this.x,this.y)};
Hc.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Hc.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Hc.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ic(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Jc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Kc="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),Lc=[...Kc,"client_dev_set_cookie"];function Mc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var u=g,n=0;64>n;n+=4)u[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;80>n;n++)p=u[n-3]^u[n-8]^u[n-14]^u[n-16],u[n]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],G=e[3],Ua=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var M=G^x&(y^G);var da=1518500249}else M=x^y^G,da=1859775393;else 60>n?(M=x&y|G&(x|y),da=2400959708):(M=x^y^G,da=3395469782);M=((p<<5|p>>>27)&4294967295)+M+Ua+da+u[n]&4294967295;Ua=G;G=y;y=(x<<30|x>>>2)&4294967295;x=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;
e[2]=e[2]+y&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+Ua&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var n=[],x=0,y=p.length;x<y;++x)n.push(p.charCodeAt(x));p=n}u||(u=p.length);n=0;if(0==l)for(;n+64<u;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<u;)if(f[l++]=p[n++],m++,64==l)for(l=0,b(f);n+64<u;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],u=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=u&255,u>>>=8;b(f);for(n=u=0;5>n;n++)for(var x=24;0<=x;x-=8)p[u++]=e[n]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,La:function(){for(var p=d(),u="",n=0;n<p.length;n++)u+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return u}}}
;function Nc(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,Oc(Jc(d),a,c||null)].join(" "):null}
function Oc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],ra(d,function(h){e.push(h)}),Pc(e.join(" "));
var f=[],g=[];ra(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];ra(d,function(h){e.push(h)});
a=Pc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Pc(a){var b=Mc();b.update(a);return b.La().toLowerCase()}
;const Qc={};function Rc(){this.h=document||{cookie:""}}
q=Rc.prototype;q.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(!this.ya())return!0;this.set("TESTCOOKIESENABLED","1",{za:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.hc,g=c.ic||!1,f=c.domain||void 0,e=c.path||void 0,d=c.za);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
q.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=Ea(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{za:0,path:b,domain:c});return d};
q.ya=function(){return!this.h.cookie};
q.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=Ea(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function Sc(){return!!Qc.FPA_SAMESITE_PHASE2_MOD||!1}
function Tc(a,b,c,d){(a=t[a])||(a=(new Rc).get(b));return a?Nc(a,c,d):null}
function Uc(){var a=[],b=Jc(String(t.location.href));const c=[];var d=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__OVERRIDE_SID;Sc()&&(d=d||t.__1PSAPISID);if(d)var e=!0;else e=new Rc,d=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("SID"),Sc()&&(d=d||e.get("__Secure-1PAPISID")),e=!!d;e&&(d=(e=b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?t.__SAPISID:t.__APISID,d||(d=new Rc,d=d.get(e?"SAPISID":"APISID")||d.get("__Secure-3PAPISID")),
(e=d?Nc(d,e?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&Sc()&&((b=Tc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Tc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return 0==c.length?null:c.join(" ")}
;function Vc(){this.j=this.j;this.l=this.l}
Vc.prototype.j=!1;Vc.prototype.dispose=function(){this.j||(this.j=!0,this.Z())};
Vc.prototype.Z=function(){if(this.l)for(;this.l.length;)this.l.shift()()};const Wc=self;function Xc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
class Yc{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class Zc{constructor(){this.i=this.h=null}add(a,b){const c=$c.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var $c=new Yc(()=>new ad,a=>a.reset());
class ad{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let bd,cd=!1,dd=new Zc,fd=(a,b)=>{bd||ed();cd||(bd(),cd=!0);dd.add(a,b)},ed=()=>{const a=t.Promise.resolve(void 0);
bd=()=>{a.then(gd)}};
var gd=()=>{let a;for(;a=dd.remove();){try{a.h.call(a.scope)}catch(b){Qa(b)}Xc($c,a)}cd=!1};class hd{constructor(){this.promise=new Promise(a=>{this.resolve=a})}}
;function J(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.u=!1;if(a!=qa)try{var b=this;a.call(void 0,function(c){id(b,2,c)},function(c){id(b,3,c)})}catch(c){id(this,3,c)}}
function jd(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
jd.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var kd=new Yc(function(){return new jd},function(a){a.reset()});
function ld(a,b,c){var d=kd.get();d.j=a;d.i=b;d.context=c;return d}
function md(a){if(a instanceof J)return a;var b=new J(qa);id(b,2,a);return b}
J.prototype.then=function(a,b,c){return nd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
J.prototype.$goog_Thenable=!0;q=J.prototype;q.cb=function(a,b){return nd(this,null,a,b)};
q.catch=J.prototype.cb;q.cancel=function(a){if(0==this.h){var b=new od(a);fd(function(){pd(this,b)},this)}};
function pd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?pd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):qd(c),rd(c,e,3,b)))}a.j=null}else id(a,3,b)}
function sd(a,b){a.i||2!=a.h&&3!=a.h||td(a);a.l?a.l.next=b:a.i=b;a.l=b}
function nd(a,b,c,d){var e=ld(null,null,null);e.h=new J(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof od?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;sd(a,e);return e.h}
q.eb=function(a){this.h=0;id(this,2,a)};
q.fb=function(a){this.h=0;id(this,3,a)};
function id(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.eb,f=a.fb;if(d instanceof J){sd(d,ld(e||qa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ka(d))try{var k=d.then;if("function"===typeof k){ud(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.C=c,a.h=b,a.j=null,td(a),3!=b||c instanceof od||vd(a,c))}}
function ud(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function td(a){a.u||(a.u=!0,fd(a.Ma,a))}
function qd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
q.Ma=function(){for(var a;a=qd(this);)rd(this,a,this.h,this.C);this.u=!1};
function rd(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,wd(b,c,d);else try{b.l?b.j.call(b.context):wd(b,c,d)}catch(e){xd.call(null,e)}Xc(kd,b)}
function wd(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function vd(a,b){a.o=!0;fd(function(){a.o&&xd.call(null,b)})}
var xd=Qa;function od(a){pa.call(this,a)}
oa(od,pa);od.prototype.name="cancel";function K(a){Vc.call(this);this.C=1;this.o=[];this.u=0;this.h=[];this.i={};this.I=!!a}
oa(K,Vc);q=K.prototype;q.Ga=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.C;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.C=e+3;d.push(e);return e};
q.oa=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.u?(this.o.push(a),this.h[a+1]=()=>{}):(c&&ta(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.la=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.I)for(e=0;e<c.length;e++){var g=c[e];yd(this.h[g+1],this.h[g+2],d)}else{this.u++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.u--,0<this.o.length&&0==this.u)for(;c=this.o.pop();)this.oa(c)}}return 0!=e}return!1};
function yd(a,b,c){fd(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.oa,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.Z=function(){K.Za.Z.call(this);this.clear();this.o.length=0};/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var zd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Ad=class extends I{constructor(a){super(a)}};var Cd=class extends I{constructor(a){super(a)}getKey(){return E(this,1)}ha(){return Ob(this,2===Hb(this,Bd)?2:-1)}},Bd=[2,3,4,5,6];var Dd=class extends I{constructor(a){super(a)}};var Fd=class extends I{constructor(a){super(a,-1,Ed)}clearLocationPlayabilityToken(){return F(this,89,void 0,!1)}},Ed=[9,66,24,32,86,100,101];var Hd=class extends I{constructor(a){super(a,-1,Gd)}},Gd=[15,26,28];var Id=class extends I{constructor(a){super(a)}};var Kd=class extends I{constructor(a){super(a,-1,Jd)}},Jd=[12];var Md=class extends I{constructor(a){super(a,-1,Ld)}j(a){H(this,Fd,1,a)}},Ld=[12];var Od=class extends I{constructor(a){super(a,-1,Nd)}},Pd=class extends I{constructor(a){super(a)}getKey(){return Pb(this,1)}ha(){return Pb(this,2)}},Nd=[4,5];var Qd=class extends I{constructor(a){super(a)}};var Rd=class extends I{constructor(a){super(a)}},Sd=[2,3,4];var Td=class extends I{constructor(a){super(a)}};var Ud=class extends I{constructor(a){super(a)}};var Vd=class extends I{constructor(a){super(a)}};var Xd=class extends I{constructor(a){super(a,-1,Wd)}},Wd=[10,17];var Yd=class extends I{constructor(a){super(a)}};var L=class extends I{constructor(a){super(a)}};var Zd=class extends I{constructor(a){super(a)}};var ae=class extends I{constructor(a){super(a,-1,$d)}},$d=[4];function be(a,b){H(a,L,1,b)}
var ce=class extends I{constructor(a){super(a)}h(a){F(this,2,a)}};function de(a,b){H(a,L,1,b)}
var ee=class extends I{constructor(a){super(a)}};function fe(a,b){H(a,L,2,b)}
var he=class extends I{constructor(a){super(a,-1,ge)}h(a){F(this,1,a)}},ge=[3];var ie=class extends I{constructor(a){super(a)}h(a){F(this,1,a)}};var je=class extends I{constructor(a){super(a)}h(a){F(this,1,a)}};var ke=class extends I{constructor(a){super(a)}h(a){F(this,1,a)}};var le=class extends I{constructor(a){super(a)}h(a){F(this,1,a)}};var me=class extends I{constructor(a){super(a)}};var ne=class extends I{constructor(a){super(a)}};var oe=class extends I{constructor(a){super(a,449)}},pe=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,
324,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];var qe={Bb:0,mb:1,sb:2,tb:4,yb:8,ub:16,vb:32,Ab:64,zb:128,ob:256,qb:512,xb:1024,pb:2048,rb:4096,nb:8192,wb:16384};var re=class extends I{constructor(a){super(a)}};var te=class extends I{constructor(a){super(a)}setVideoId(a){return Gb(this,1,se,a)}},se=[1,2];var ve=class extends I{constructor(){super(void 0,-1,ue)}},ue=[3];var we=new class{constructor(a){this.name=a}}("recordNotificationInteractionsEndpoint");var xe=["notification/convert_endpoint_to_url"],ye=["notification/record_interactions"],ze=["notification_registration/set_registration"];const Ae=t.window;let Be,Ce;const De=(null==Ae?void 0:null==(Be=Ae.yt)?void 0:Be.config_)||(null==Ae?void 0:null==(Ce=Ae.ytcfg)?void 0:Ce.data_)||{};v("yt.config_",De);function N(...a){a=arguments;1<a.length?De[a[0]]=a[1]:1===a.length&&Object.assign(De,a[0])}
function O(a,b){return a in De?De[a]:b}
function Ee(){return O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Fe(){const a=De.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function P(a){a=Ge(a);return"string"===typeof a&&"false"===a?!1:!!a}
function He(a,b){a=Ge(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ie(){return O("EXPERIMENTS_TOKEN","")}
function Ge(a){const b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function Je(){const a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{});for(var c in b)a.push({key:c,value:String(b[c])});c=O("EXPERIMENT_FLAGS",{});for(let d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;const Ke=[];function Le(a){Ke.forEach(b=>b(a))}
function Me(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ne(b)}}:a}
function Ne(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b));Le(a)}
function Oe(a){var b=w("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;const Pe=/^[\w.]*$/,Qe={q:!0,search_query:!0};function Re(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=Se(h[0]||""),l=Se(h[1]||"");k in c?Array.isArray(c[k])?ua(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(Re);d.args=[{key:e,value:h[1],query:a,method:Te==l?"unchanged":l}];Qe.hasOwnProperty(e)||Oe(d)}}return c}
const Te=String(Re);function Ue(a){"?"==a.charAt(0)&&(a=a.substr(1));return Re(a,"&")}
function Ve(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ue(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ka(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function We(a){if(!b)var b=window.location.href;const c=a.match(Ha)[1]||null,d=Ia(a.match(Ha)[3]||null);c&&d?(a=a.match(Ha),b=b.match(Ha),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ia(b.match(Ha)[3]||null)==d&&(Number(b.match(Ha)[4]||null)||null)==(Number(a.match(Ha)[4]||null)||null):!0;return a}
function Se(a){return a&&a.match(Pe)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Xe(a,b){"function"===typeof a&&(a=Me(a));return window.setTimeout(a,b)}
;[...Kc];let Ye=!1;function Ze(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=$e(a,b);const d=af(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(g=Xe(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function $e(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ve(a,b||{},!0);return a}
function af(a,b){const c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;var g=O("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ia(a.match(Ha)[3]||null)&&!b.withCredentials&&Ia(a.match(Ha)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=
Ue(e),Aa(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Ka(e));f=e||f&&!xa(f);!Ye&&f&&"POST"!=b.method&&(Ye=!0,Ne(Error("AJAX request with postData should use POST")));return e}
;v("ytglobal.prefsUserPrefsPrefs_",w("ytglobal.prefsUserPrefsPrefs_")||{});function bf(a,b){cf(a,2,b)}
var df=class{h(a,b){cf(a,1,b)}};function cf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Xe(a,c||0)}
var ef=class extends df{i(a){if(void 0===a||!Number.isNaN(Number(a))){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=w("yt.scheduler.instance.start");a&&a()}};ef.h||(ef.h=new ef);var ff=ef.h;var Q=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};function gf(){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new Q("Datasync ID not set","unknown");}
;const hf=[];let jf,kf=!1;function lf(a){kf||(jf?jf.handleError(a):(hf.push({type:"ERROR",payload:a}),10<hf.length&&hf.shift()))}
function mf(a,b){kf||(jf?jf.aa(a,b):(hf.push({type:"EVENT",eventType:a,payload:b}),10<hf.length&&hf.shift()))}
;function nf(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function of(a){return a.substr(0,a.indexOf(":"))||a}
;const pf={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},qf={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},rf={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var R=class extends Q{constructor(a,b={},c=pf[a],d=qf[a],e=rf[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,R.prototype)}},sf=class extends R{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},pf.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,sf.prototype)}},tf=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,tf.prototype)}};const uf=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vf(a,b,c,d){b=of(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof R)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new R("QUOTA_EXCEEDED",a);if(Ra&&"UnknownError"===e.name)return new R("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof tf)return new R("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&uf.some(f=>e.message.includes(f)))return new R("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new R("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Xb:e.name})];e.level="WARNING";return e}
function wf(a,b,c){return new R("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function xf(a){if(!a)throw Error();throw a;}
function yf(a){return a}
var zf=class{constructor(a){this.h=a}};function Af(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Bf?Cf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Df(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Bf?Cf(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Cf(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Bf?Cf(a,b,f,d,e):d(f)},f=>{e(f)})}
var Bf=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Bf(new zf((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)Bf.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Bf(new zf((b,c)=>{a instanceof Bf?a.then(b,c):b(a)}))}then(a,b){const c=null!=a?a:yf,d=null!=b?b:xf;
return new Bf(new zf((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{Af(this,this,c,e,f)}),this.i.push(()=>{Df(this,this,d,e,f)})):"FULFILLED"===this.state.status?Af(this,this,c,e,f):"REJECTED"===this.state.status&&Df(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Ef(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Ff(a){return new Promise((b,c)=>{Ef(a,b,c)})}
function S(a){return new Bf(new zf((b,c)=>{Ef(a,b,c)}))}
;function Gf(a,b){return new Bf(new zf((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;const Hf=window;var T=Hf.ytcsi&&Hf.ytcsi.now?Hf.ytcsi.now:Hf.performance&&Hf.performance.timing&&Hf.performance.now&&Hf.performance.timing.navigationStart?()=>Hf.performance.timing.navigationStart+Hf.performance.now():()=>(new Date).getTime();function If(a,b,c,d){return r(function*(){const e={mode:"readonly",K:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.K?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(T());try{const m=a.h.transaction(b,e.mode);var k=d;const p=new Jf(m),u=yield Kf(p,k),n=Math.round(T());Lf(a,l,n,g,void 0,b.join(),e);return u}catch(m){k=Math.round(T());const p=vf(m,a.h.name,b.join(),a.h.version);if(p instanceof R&&!p.h||g>=f)Lf(a,l,k,g,p,b.join(),e),
h=p}}return Promise.reject(h)})}
function Mf(a,b,c){a=a.h.createObjectStore(b,c);return new Nf(a)}
function Of(a,b,c,d){return If(a,[b],{mode:"readwrite",K:!0},e=>{e=e.objectStore(b);return S(e.h.put(c,d))})}
function Lf(a,b,c,d,e,f,g){b=c-b;e?(e instanceof R&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&mf("QUOTA_EXCEEDED",{dbName:of(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof R&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),mf("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Pf(a,!1,d,f,b,g.tag),lf(e)):Pf(a,!0,d,f,b,g.tag)}
function Pf(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){mf("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Qf=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}add(a,b,c){return If(this,[a],{mode:"readwrite",K:!0},d=>d.objectStore(a).add(b,c))}clear(a){return If(this,[a],{mode:"readwrite",
K:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return If(this,[a],{mode:"readonly",K:!0},c=>c.objectStore(a).count(b))}delete(a,b){return If(this,[a],{mode:"readwrite",
K:!0},c=>c.objectStore(a).delete(b))}get(a,b){return If(this,[a],{mode:"readonly",
K:!0},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}};
function Rf(a,b,c){a=a.h.openCursor(b.query,b.direction);return Sf(a).then(d=>Gf(d,c))}
function Tf(a,b){return Rf(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var Nf=class{constructor(a){this.h=a}add(a,b){return S(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return S(this.h.clear()).then(()=>{})}count(a){return S(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Tf(this,a):S(this.h.delete(a))}get(a){return S(this.h.get(a))}index(a){try{return new Uf(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new tf(a,this.h.name);
throw b;}}keyPath(){return this.h.keyPath}};function Kf(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Jf=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=R;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new R("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Nf(a),this.j.set(a,b));return b}};function Vf(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Sf(a).then(f=>Gf(f,c))}
var Uf=class{constructor(a){this.h=a}count(a){return S(this.h.count(a))}delete(a){return Vf(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return S(this.h.get(a))}getKey(a){return S(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Sf(a){return S(a).then(b=>b?new Wf(a,b):null)}
var Wf=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Sf(this.request)}continue(a){this.cursor.continue(a);return Sf(this.request)}delete(){return S(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}ha(){return this.cursor.value}update(a){return S(this.cursor.update(a))}};function Xf(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.Ja,h=c.blocking,k=c.bb,l=c.upgrade,m=c.closed;let p;const u=()=>{p||(p=new Qf(f.result,{closed:m}));return p};
f.addEventListener("upgradeneeded",n=>{try{if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&"none"!==n.dataLoss&&mf("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:of(a)});const x=u(),y=new Jf(f.transaction);l&&l(x,G=>n.oldVersion<G&&n.newVersion>=G,y);
y.done.catch(G=>{e(G)})}catch(x){e(x)}});
f.addEventListener("success",()=>{const n=f.result;h&&n.addEventListener("versionchange",()=>{h(u())});
n.addEventListener("close",()=>{mf("IDB_UNEXPECTEDLY_CLOSED",{dbName:of(a),dbVersion:n.version});k&&k()});
d(u())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Yf(a,b,c={}){return Xf(a,b,c)}
function Zf(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.Ja;d&&c.addEventListener("blocked",()=>{d()});
yield Ff(c)}catch(c){throw vf(c,a,"",-1);}})}
;function $f(a){return new Promise(b=>{bf(()=>{b()},a)})}
function ag(a,b){return new R("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function bg(a,b){if(!b)throw wf("openWithToken",of(a.name));return a.open()}
var cg=class{constructor(a,b){this.name=a;this.options=b;this.l=!0;this.u=this.o=0;this.i=500}j(a,b,c={}){return Yf(a,b,c)}delete(a={}){return Zf(this.name,a)}open(){if(!this.l)throw ag(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,bb:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield e.j(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const m of Object.keys(h.S)){const {X:p,dc:u=Number.MAX_VALUE}=h.S[m];!(f.h.version>=p)||f.h.version>=u||f.h.objectStoreNames.contains(m)||l.push(m)}if(0!==l.length){const m=Object.keys(e.options.S),p=k.objectStoreNames();if(e.u<He("ytidb_reopen_db_retries",0))return e.u++,k.close(),lf(new R("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:m,foundObjectStores:p})),d();if(e.o<He("ytidb_remake_db_retries",1))return e.o++,P("ytidb_remake_db_enable_backoff_delay")&&(yield $f(e.i),e.i*=2),yield e.delete(),lf(new R("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:m,foundObjectStores:p})),d();throw new sf(p,m);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&
"An attempt was made to open a database using a lower version than the existing version."===k.message){g=yield e.j(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(void 0!==e.options.version&&h>e.options.version+1)throw g.close(),e.l=!1,ag(e,h);return g}b();k instanceof Error&&!P("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw vf(k,e.name,"",null!=(l=e.options.version)?l:-1);}})};
return this.h=a=d()}};const dg=new cg("YtIdbMeta",{S:{databases:{X:1}},upgrade(a,b){b(1)&&Mf(a,"databases",{keyPath:"actualName"})}});function eg(a,b){return r(function*(){return If(yield bg(dg,b),["databases"],{K:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return S(d.h.put(a,void 0)).then(()=>{})})})})}
function fg(a,b){return r(function*(){if(a)return(yield bg(dg,b)).delete("databases",a)})}
;let gg;const hg=new class{constructor(){}}(new class{constructor(){}});function ig(){return r(function*(){return!0})}
function jg(){if(void 0!==gg)return gg;kf=!0;return gg=ig().then(a=>{kf=!1;return a})}
function kg(){const a=w("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):jg().then(b=>{(b=b?hg:void 0)&&v("ytglobal.idbToken_",b);return b})}
;new hd;function lg(a){try{gf();var b=!0}catch(c){b=!1}if(!b)throw a=new R("AUTH_INVALID",{dbName:a}),lf(a),a;b=gf();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function mg(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield kg();if(!e)throw e=wf("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),lf(e),e;nf(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:lg(a);try{return yield eg(f,e),yield Yf(f.actualName,b,d)}catch(g){try{yield fg(f.actualName,e)}catch(h){}throw g;}})}
function ng(a,b,c={}){return mg(a,b,!1,c)}
function og(a,b,c={}){return mg(a,b,!0,c)}
function pg(a,b={}){return r(function*(){const c=yield kg();if(c){nf(a);var d=lg(a);yield Zf(d.actualName,b);yield fg(d.actualName,c)}})}
function qg(a,b={}){return r(function*(){const c=yield kg();c&&(nf(a),yield Zf(a,b),yield fg(a,c))})}
;function rg(a,b){let c;return()=>{c||(c=new sg(a,b));return c}}
var sg=class extends cg{constructor(a,b){super(a,b);this.options=b;nf(a)}j(a,b,c={}){return(this.options.ma?og:ng)(a,b,Object.assign({},c))}delete(a={}){return(this.options.ma?qg:pg)(this.name,a)}};var tg=class{};function ug(){return"INNERTUBE_API_KEY"in De&&"INNERTUBE_API_VERSION"in De}
function vg(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),ia:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Pa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Qa:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),xa:O("INNERTUBE_CONTEXT_HL"),wa:O("INNERTUBE_CONTEXT_GL"),Ra:O("INNERTUBE_HOST_OVERRIDE")||"",Ta:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Sa:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wg(a){const b={client:{hl:a.xa,gl:a.wa,clientName:a.Pa,clientVersion:a.innertubeContextClientVersion,configInfo:a.ia}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ie();""!==c&&(b.client.experimentsToken=c);c=Je();0<c.length&&(b.request={internalExperimentFlags:c});xg(a,void 0,b);P("start_sending_config_hash")&&yg(void 0,b);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;var d=b.client,e=O("DEVICE","");const f={};for(const [g,h]of Object.entries(Ue(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function zg(a){const b=new Md,c=new Fd;F(c,1,a.xa);F(c,2,a.wa);F(c,16,a.Qa);F(c,17,a.innertubeContextClientVersion);if(a.ia){var d=a.ia,e=new Dd;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);H(c,Dd,62,e)}(d=t.devicePixelRatio)&&1!=d&&F(c,65,d);d=Ie();""!==d&&F(c,54,d);d=Je();if(0<d.length){e=new Hd;for(let f=0;f<d.length;f++){const g=new Cd;F(g,1,d[f].key);Gb(g,2,Bd,d[f].value);Nb(e,15,
Cd,g)}H(b,Hd,5,e)}xg(a,c);P("start_sending_config_hash")&&yg(c);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Kd,F(a,3,O("DELEGATED_SESSION_ID")));a=O("DEVICE","");for(const [f,g]of Object.entries(Ue(a)))a=f,d=g,"cbrand"===a?F(c,12,d):"cmodel"===a?F(c,13,d):"cbr"===a?F(c,87,d):"cbrver"===a?F(c,88,d):"cos"===a?F(c,18,d):"cosver"===a?F(c,19,d):"cplatform"===a&&F(c,42,d);b.j(c);return b}
function xg(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=Ib(b,Dd,62))?d:new Dd;F(c,6,a.appInstallData);H(b,Dd,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ag(a,b,c={}){let d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Jb||O("AUTHORIZATION"))||(a?b=`Bearer ${w("gapi.auth.getToken")().Ib}`:b=Uc());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function yg(a,b){tg.h||(tg.h=new tg);const {coldConfigData:c,coldHashData:d,hotHashData:e}={coldConfigData:w("yt.gcf.config.coldConfigData"),hotHashData:w("yt.gcf.config.hotHashData"),coldHashData:w("yt.gcf.config.coldHashData")};if(c&&d&&e)if(a){let f;b=null!=(f=Ib(a,Dd,62))?f:new Dd;F(b,1,c);F(b,3,d);F(b,5,e);H(a,Dd,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Bg(a){this.version=1;this.args=a}
;function Cg(){var a=Dg;this.topic="screen-created";this.h=a}
Cg.prototype.toString=function(){return this.topic};const Eg=w("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.Ga;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.la;K.prototype.clear=K.prototype.clear;v("ytPubsub2Pubsub2Instance",Eg);const Fg=w("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",Fg);const Gg=w("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",Gg);const Hg=w("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",Hg);
v("ytPubsub2Pubsub2SkipSubKey",null);function Ig(a){var b=Jg;const c=Kg();c&&c.publish.call(c,b.toString(),b,a)}
function Lg(a){var b=Jg;const c=Kg();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=w("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Fg[d])try{if(f&&b instanceof Cg&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ba){const n=new h;h.Ba=n.version}var l=h.Ba}catch(n){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var p=k.args;const n=p.length;if(0<n){const x=Array(n);for(k=0;k<n;k++)x[k]=p[k];var u=x}else u=[]}f=m.call(l,h,u)}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){Ne(n)}},Hg[b.toString()]?w("yt.scheduler.instance")?ff.h(g):Xe(g,0):g())});
Fg[d]=!0;Gg[b.toString()]||(Gg[b.toString()]=[]);Gg[b.toString()].push(d);return d}
function Mg(){var a=Ng;const b=Lg(function(c){a.apply(void 0,arguments);Og(b)});
return b}
function Og(a){const b=Kg();b&&("number"===typeof a&&(a=[a]),ra(a,c=>{b.unsubscribeByKey(c);delete Fg[c]}))}
function Kg(){return w("ytPubsub2Pubsub2Instance")}
;const Pg=["client.name","client.version"];function Qg(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Pg.includes(b.key):!1);
return a}
;var Rg;Rg=rg("ServiceWorkerLogsDatabase",{S:{SWHealthLog:{X:1}},ma:!0,upgrade:(a,b)=>{b(1)&&Mf(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Sg(a,b){return r(function*(){var c=yield bg(Rg(),b),d=O("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Qg(e.clientError));e.interface=d;return Of(c,"SWHealthLog",e)})}
;v("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function Tg(a){!a.config_&&ug()&&(a.config_=vg());return!!a.config_}
function Ug(a,b,c){!O("VISITOR_DATA")&&.01>Math.random()&&Oe(new Q("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!Tg(a))throw a=new Q("innertube xhrclient not ready","log_event",b,c),Ne(a),a;b={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0};b.headers["Content-Type"]||(b.headers["Content-Type"]="application/json");let d="";var e=a.config_.Ra;e&&(d=e);e=Ag(a.config_.Ta||!1,d,c);Object.assign(b.headers,e);(e=b.headers.Authorization)&&!d&&(b.headers["x-origin"]=window.location.origin);const f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Sa&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);a=Ve(`${d}${f}`,g||{},!0);try{Ze(a,b)}catch(k){if("InvalidAccessError"==
k.name)Oe(Error("An extension is blocking network request."));else throw k;}}
class Vg{constructor(a){this.config_=null;a?this.config_=a:ug()&&(this.config_=vg())}};let Wg=0;v("ytDomDomGetNextId",w("ytDomDomGetNextId")||(()=>++Wg));const Xg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Yg(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class Zg{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in Xg||(this[d]=a[d]);var b=a.target||a.srcElement;b&&3==b.nodeType&&(b=b.parentNode);this.target=b;var c=a.relatedTarget;if(c)try{c=c.nodeName?c:null}catch(d){c=null}else"mouseover"==
this.type?c=a.fromElement:"mouseout"==this.type&&(c=a.toElement);this.relatedTarget=c;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&
this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const wa=t.ytEventsEventsListeners||{};v("ytEventsEventsListeners",wa);const $g=t.ytEventsEventsCounter||{count:0};v("ytEventsEventsCounter",$g);
function ah(a,b,c,d={}){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return va(e=>{const f="boolean"===typeof e[4]&&e[4]==!!d;var g;if(g=ka(e[4])&&ka(d))a:{g=e[4];for(const h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(const h in d)if(!(h in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
const bh=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){let a=!1;
try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});
function ch(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=ah(a,b,c,d);if(e)return e;e=++$g.count+"";const f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new Zg(h);if(!Ic(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new Zg(h);
h.currentTarget=a;return c.call(a,h)};
g=Me(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);wa[e]=[a,b,c,g,d];return e}
function fh(a){a&&("string"==typeof a&&(a=[a]),ra(a,b=>{if(b in wa){var c=wa[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete wa[b]}}))}
;const gh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function hh(a){this.pa=a;this.h=null;this.u=0;this.I=null;this.C=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.o=0;this.Da=ch(window,"mousemove",na(this.Ea,this));a=na(this.Ca,this);"function"===typeof a&&(a=Me(a));this.Fa=window.setInterval(a,25)}
oa(hh,Vc);hh.prototype.Ea=function(a){void 0===a.h&&Yg(a);var b=a.h;void 0===a.i&&Yg(a);this.h=new Hc(b,a.i)};
hh.prototype.Ca=function(){if(this.h){var a=gh();if(0!=this.u){var b=this.I,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.u);this.i[this.o]=.5<Math.abs((d-this.C)/this.C)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.pa();this.C=d}this.u=a;this.I=this.h;this.o=(this.o+1)%4}};
hh.prototype.Z=function(){window.clearInterval(this.Fa);fh(this.Da)};const ih={};function jh(){var {ac:a=!1,Qb:b=!0}={};if(null==w("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&kh();ch(document,"keydown",kh);ch(document,"keyup",kh);ch(document,"mousedown",kh);ch(document,"mouseup",kh);a?ch(window,"touchmove",()=>{lh("touchmove",200)},{passive:!0}):(ch(window,"resize",()=>{lh("resize",200)}),b&&ch(window,"scroll",()=>{lh("scroll",200)}));
new hh(()=>{lh("mouse",100)});
ch(document,"touchstart",kh,{passive:!0});ch(document,"touchend",kh,{passive:!0})}}
function lh(a,b){ih[a]||(ih[a]=!0,ff.h(()=>{kh();ih[a]=!1},b))}
function kh(){null==w("_lact",window)&&jh();var a=Date.now();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function mh(){const a=w("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;t.ytPubsubPubsubInstance||new K;function nh(a,b){const c=oh(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(1>=d.length&&oh(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(ph(b.auth,h[0])){var f=b.isJspb;ph(void 0===f?"undefined":f?"true":"false",h[1])&&ph(b.cttAuthInfo,h[2])&&e.push(d[g])}}return a.h[c]=e}
function ph(a,b){return void 0===a||"undefined"===a?!0:a===b}
var qh=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=oh(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a}extractMatchingEntries(a){a=nh(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=nh(this,a);let b=0;for(let c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b}};qh.prototype.getSequenceCount=qh.prototype.getSequenceCount;
qh.prototype.extractMatchingEntries=qh.prototype.extractMatchingEntries;qh.prototype.storePayload=qh.prototype.storePayload;function oh(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;const rh=He("initial_gel_batch_timeout",2E3),sh=Math.pow(2,16)-1;let U=void 0;class th{constructor(){this.j=this.h=this.i=0}}const uh=new th,vh=new th;let wh,xh=!0;const yh=t.ytLoggingTransportGELQueue_||new Map,zh=t.ytLoggingTransportGELProtoQueue_||new Map,Ah=t.ytLoggingTransportTokensToCttTargetIds_||{},Bh=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let Ch={};function Dh(){let a=w("yt.logging.ims");a||(a=new qh,v("yt.logging.ims",a));return a}
function Eh(a,b){P("web_all_payloads_via_jspb")&&Oe(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){var c=Fh(a);if(P("use_new_in_memory_storage")){Ch[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Dh().storePayload(d,a.payload);Gh(b,[],c,!1,d)}else d=yh.get(c)||[],yh.set(c,d),d.push(a.payload),Gh(b,d,c)}}
function Hh(a,b){if("log_event"===a.endpoint){var c=Fh(a,!0);if(P("use_new_in_memory_storage")){Ch[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Dh().storePayload(d,a.payload.toJSON());Gh(b,[],c,!0,d)}else d=zh.get(c)||[],zh.set(c,d),a=a.payload.toJSON(),d.push(a),Gh(b,d,c,!0)}}
function Gh(a,b,c,d=!1,e){a&&(U=new a);a=He("tvhtml5_logging_max_batch")||He("web_logging_max_batch")||100;const f=T(),g=d?vh.j:uh.j;b=b.length;e&&(b=Dh().getSequenceCount(e));b>=a?P("background_thread_flush_logs_due_to_batch_limit")?wh||(wh=Ih(()=>{Jh({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d);wh=void 0},0)):Jh({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d):10<=f-g&&(Kh(d),d?vh.j=f:uh.j=f)}
function Lh(a,b){P("web_all_payloads_via_jspb")&&Oe(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){var c=Fh(a),d=new Map;d.set(c,[a.payload]);b&&(U=new b);return new J((e,f)=>{U&&Tg(U)?Mh(d,U,e,f,{bypassNetworkless:!0},!0):e()})}}
function Nh(a,b){if("log_event"===a.endpoint){var c=Fh(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(U=new b);return new J(e=>{U&&Tg(U)?Oh(d,U,e,{bypassNetworkless:!0},!0):e()})}}
function Fh(a,b=!1){var c="";if(a.R)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new te;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Gb(d,2,se,c.playlistId);Bh[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Ah[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Jh(a={},b,c=!1){!c&&P("web_all_payloads_via_jspb")&&Oe(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new J((d,e)=>{c?(Ph(vh.i),Ph(vh.h),vh.h=0):(Ph(uh.i),Ph(uh.h),uh.h=0);U&&Tg(U)?P("use_new_in_memory_storage")?Qh(d,e,a,b,c):Rh(d,e,a,b,c):(Kh(c),d())})}
function Qh(a,b,c={},d,e=!1){var f=U,g=new Map;const h=new Map;if(void 0!==d)e?(b=Dh().extractMatchingEntries({isJspb:e,cttAuthInfo:d}),g.set(d,b),Oh(g,f,a,c)):(g=Dh().extractMatchingEntries({isJspb:e,cttAuthInfo:d}),h.set(d,g),Mh(h,f,a,b,c));else if(e){for(const k of Object.keys(Ch))b=Dh().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<b.length&&g.set(k,b),delete Ch[k];Oh(g,f,a,c)}else{for(const k of Object.keys(Ch))d=Dh().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<d.length&&h.set(k,
d),delete Ch[k];Mh(h,f,a,b,c)}}
function Rh(a,b,c={},d,e=!1){var f=U;if(void 0!==d)if(e)b=new Map,e=zh.get(d)||[],b.set(d,e),Oh(b,f,a,c),zh.delete(d);else{e=new Map;const g=yh.get(d)||[];e.set(d,g);Mh(e,f,a,b,c);yh.delete(d)}else e?(Oh(zh,f,a,c),zh.clear()):(Mh(yh,f,a,b,c),yh.clear())}
function Kh(a=!1){if(P("web_gel_timeout_cap")&&(!a&&!uh.h||a&&!vh.h)){var b=Ih(()=>{Jh({writeThenSend:!0},void 0,a)},6E4);
a?vh.h=b:uh.h=b}Ph(a?vh.i:uh.i);b=O("LOGGING_BATCH_TIMEOUT",He("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&xh&&(b=rh);b=Ih(()=>{Jh({writeThenSend:!0},void 0,a)},b);
a?vh.i=b:uh.i=b}
function Mh(a,b,c,d,e={},f){const g=Math.round(T());let h=a.size;for(const [l,m]of a){a=l;var k=m;const p=ya({context:wg(b.config_||vg())});if(!ja(k)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}p.events=k;(k=Ah[a])&&Sh(p,a,k);delete Ah[a];const u="visitorOnlyApprovedKey"===a;Th(p,g,u);Uh(e);const n=()=>{h--;h||c()};
let x=0;const y=()=>{x++;if(e.bypassNetworkless&&1===x)try{Ug(b,p,Vh({writeThenSend:!0},u,n,y,f)),xh=!1}catch(G){Ne(G),d()}h--;h||c()};
try{Ug(b,p,Vh(e,u,n,y,f)),xh=!1}catch(G){Ne(G),d()}}}
function Oh(a,b,c,d={},e){const f=Math.round(T());let g=a.size;var h=new Map([...a]);for(const [m]of h){var k=m,l=a.get(k);h=new ve;const p=zg(b.config_||vg());H(h,Md,1,p);l=l?Wh(l):[];for(const u of l)Nb(h,3,oe,u);(l=Bh[k])&&Xh(h,k,l);delete Bh[k];k="visitorOnlyApprovedKey"===k;Yh(h,f,k);Uh(d);h=Ub(h);k=Vh(d,k,()=>{g--;g||c()},()=>{g--;
g||c()},e);
k.headers["Content-Type"]="application/json+protobuf";k.postBodyFormat="JSPB";k.postBody=h;Ug(b,"",k);xh=!1}}
function Uh(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Vh(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Wb:a,R:b,Mb:!!e,headers:{},postBodyFormat:"",postBody:""};Zh()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Th(a,b,c){Zh()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=$h(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Yh(a,b,c){Zh()||F(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=$h();const d=new re;F(d,1,b);F(d,2,c);H(a,re,5,d)}}
function $h(){let a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*sh/2));a++;a>sh&&(a=1);N("BATCH_CLIENT_COUNTER",a);return a}
function Sh(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Xh(a,b,c){let d;if(Ob(c,1===Hb(c,se)?1:-1))d=1;else if(Ob(c,2===Hb(c,se)?2:-1))d=2;else return;H(a,te,4,c);a=Ib(a,Md,1)||new Md;c=Ib(a,Kd,3)||new Kd;const e=new Id;F(e,2,b);F(e,1,d);Nb(c,12,Id,e);H(a,Kd,3,c)}
function Wh(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new oe(a[c]))}catch(d){Ne(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Zh(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function Ih(a,b){var c;P("transport_use_scheduler")?c=cf(a,0,b):c=Xe(a,b);return c}
function Ph(a){P("transport_use_scheduler")?ff.i(a):window.clearTimeout(a)}
;const ai=t.ytLoggingGelSequenceIdObj_||{};function V(a,b,c,d={}){const e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&jh();a=mh();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.D&&(a=e.context,b=d.D,b={index:bi(b),groupKey:b},a.sequence=b,d.va&&delete ai[d.D]);(d.Ya?Lh:Eh)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,R:d.R},c)}
function ci(a=!1){Jh(void 0,void 0,a)}
function bi(a){ai[a]=a in ai?ai[a]+1:0;return ai[a]}
;let di=Vg;function ei(a,b,c={}){let d=di;O("ytLoggingEventsDefaultDisabled",!1)&&di===Vg&&(d=null);P("web_all_payloads_via_jspb")&&Oe(new Q("Logs should be translated to JSPB but are sent as JSON instead",a));V(a,b,d,c)}
;const fi=t.ytLoggingGelSequenceIdObj_||{};function gi(a,b,c={}){var d=Math.round(c.timestamp||T());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=mh();d=new ne;F(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.D){e=c.D;const f=bi(e),g=new me;F(g,2,f);F(g,1,e);H(d,me,3,g);c.va&&delete fi[c.D]}H(a,ne,33,d);(c.Ya?Nh:Hh)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,R:c.R},b)}
;function hi(a,b={}){let c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);gi(a,c?null:Vg,b)}
;function ii(a,b,c){const d=new oe;Mb(d,ke,72,pe,a);c?gi(d,c,b):hi(d,b)}
function ji(a,b,c){const d=new oe;Mb(d,je,73,pe,a);c?gi(d,c,b):hi(d,b)}
function ki(a,b,c){const d=new oe;Mb(d,ie,78,pe,a);c?gi(d,c,b):hi(d,b)}
function li(a,b,c){const d=new oe;Mb(d,le,208,pe,a);c?gi(d,c,b):hi(d,b)}
function mi(a,b,c){const d=new oe;Mb(d,ce,156,pe,a);c?gi(d,c,b):hi(d,b)}
function ni(a,b,c){const d=new oe;Mb(d,he,215,pe,a);c?gi(d,c,b):hi(d,b)}
function oi(a,b,c){const d=new oe;Mb(d,Zd,111,pe,a);c?gi(d,c,b):hi(d,b)}
;let pi=Vg;function W(a,b,c={}){if(P("migrate_events_to_ts"))ei(a,b,c);else{var d=pi;O("ytLoggingEventsDefaultDisabled",!1)&&pi==Vg&&(d=null);V(a,b,d,c)}}
;const qi=[{ka:a=>`Cannot read property '${a.key}'`,
ca:{Error:[{B:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{B:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{B:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{B:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{B:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{B:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{B:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ka:a=>`Cannot call '${a.key}'`,
ca:{TypeError:[{B:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{B:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{B:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{B:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{B:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{B:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ka:a=>`${a.key} is not defined`,
ca:{ReferenceError:[{B:/(.*) is not defined/,groups:["key"]},{B:/Can't find variable: (.*)/,groups:["key"]}]}}];var si={H:[],G:[{callback:ri,weight:500}]};function ri(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ti(){if(!ui){var a=ui=new vi;a.H.length=0;a.G.length=0;wi(a,si)}return ui}
function wi(a,b){b.H&&a.H.push.apply(a.H,b.H);b.G&&a.G.push.apply(a.G,b.G)}
var vi=class{constructor(){this.G=[];this.H=[]}},ui;const xi=new K;function yi(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=zi(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=zi(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=zi(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function zi(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ai(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Bi(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=yi(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Bi(`${f}.ve`,g,h,k):0;d+=f;d+=Bi(e,a[e],b,c);if(500<d)break}}else c[b]=Ci(a),d+=c[b].length;else c[b]=Ci(a),d+=c[b].length;return d}
function Bi(a,b,c,d){c+=`.${a}`;a=Ci(b);d[c]=a;return c.length+a.length}
function Ci(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;var Di=new Set,Ei=0,Fi=0,Gi=0,Hi=[];const Ii=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ji(a){Ki(a)}
function Li(a){Ki(a,"WARNING")}
function Ki(a,b="ERROR"){var c={};c.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION");Mi(a,c||{},b)}
function Mi(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(P("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Ei)){d=Hi;var e=Dc(a);const G=e.message||"Unknown Error",
Ua=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${Ua}: ${G}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let M=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(M=Ai(a.args[h],`params.${h}`,b,M),500<=M);h++);else if(a.hasOwnProperty("params")&&a.params){const da=a.params;if("object"===typeof a.params)for(h in da){if(!da[h])continue;const dh=`params.${h}`,eh=Ci(da[h]);b[dh]=
eh;M+=dh.length+eh.length;if(500<M)break}else b.params=Ci(da)}if(d.length)for(h=0;h<d.length&&!(M=Ai(d[h],`params.context.${h}`,b,M),500<=M);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:G,name:Ua,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=ti();d=b;for(k of a.H)if(d.message&&d.message.match(k.Ua)){k=k.weight;break a}for(var l of a.G)if(l.callback(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of qi)if(m.ca[k.name]){l=m.ca[k.name];for(var p of l)if(l=k.message.match(p.B)){k.params["params.error.original"]=l[0];a=p.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.ka(b);break}}k.params||(k.params={});m=ti();k.params["params.errorServiceSignature"]=`msg=${m.H.length}&cb=${m.G.length}`;k.params["params.serviceWorker"]="true";t.document&&t.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));Ca("sample").constructor!==Ba&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);if(0!==k.sampleWeight&&!Di.has(k.message)){"ERROR"===c?(xi.la("handleError",k),P("record_app_crashed_web")&&0===Gi&&1===k.sampleWeight&&(Gi++,P("errors_via_jspb")?(m=new Yd,F(m,1,1),P("report_client_error_with_app_crash_ks")||(l=new Td,F(l,1,k.message),p=new Ud,H(p,Td,3,l),l=new Vd,H(l,Ud,5,p),p=new Xd,H(p,
Vd,9,l),H(m,Xd,4,p)),p=new oe,Mb(p,Yd,20,pe,m),hi(p)):(m={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},P("report_client_error_with_app_crash_ks")||(m.systemHealth={crashData:{clientError:{logMessage:{message:k.message}}}}),W("appCrashed",m))),Fi++):"WARNING"===c&&xi.la("handleWarning",k);a:{if(P("errors_via_jspb")){if(Ni())var u=void 0;else{m=new Qd;F(m,1,k.stack);k.fileName&&F(m,4,k.fileName);var n=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==n.length&&(1!==n.length||isNaN(Number(n[0]))?
2!==n.length||isNaN(Number(n[0]))||isNaN(Number(n[1]))||(F(m,2,Number(n[0])),F(m,3,Number(n[1]))):F(m,2,Number(n[0])));n=new Td;F(n,1,k.message);F(n,3,k.name);F(n,6,k.sampleWeight);"ERROR"===c?F(n,2,2):"WARNING"===c?F(n,2,1):F(n,2,0);var x=new Rd;F(x,1,!0);Mb(x,Qd,3,Sd,m);m=new Od;F(m,3,window.location.href);p=O("FEXP_EXPERIMENTS",[]);for(b=0;b<p.length;b++)l=m,a=p[b],vb(l),Fb(l,5,2,!1).push(a);p=Ee();if(!Fe()&&p)for(var y of Object.keys(p))l=new Pd,F(l,1,y),F(l,2,String(p[y])),Nb(m,4,Pd,l);if(y=
k.params)for(u of Object.keys(y))p=new Pd,F(p,1,`client.${u}`),F(p,2,String(y[u])),Nb(m,4,Pd,p);y=O("SERVER_NAME");u=O("SERVER_VERSION");y&&u&&(p=new Pd,F(p,1,"server.name"),F(p,2,y),Nb(m,4,Pd,p),y=new Pd,F(y,1,"server.version"),F(y,2,u),Nb(m,4,Pd,y));u=new Ud;H(u,Od,1,m);H(u,Rd,2,x);H(u,Td,3,n)}if(!u)break a;y=new oe;Mb(y,Ud,163,pe,u);hi(y)}else{if(Ni())u=void 0;else{y={stackTrace:k.stack};k.fileName&&(y.filename=k.fileName);u=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==u.length&&
(1!==u.length||isNaN(Number(u[0]))?2!==u.length||isNaN(Number(u[0]))||isNaN(Number(u[1]))||(y.lineNumber=Number(u[0]),y.columnNumber=Number(u[1])):y.lineNumber=Number(u[0]));u={level:"ERROR_LEVEL_UNKNOWN",message:k.message,errorClassName:k.name,sampleWeight:k.sampleWeight};"ERROR"===c?u.level="ERROR_LEVEL_ERROR":"WARNING"===c&&(u.level="ERROR_LEVEL_WARNNING");y={isObfuscated:!0,browserStackInfo:y};m={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(m.experimentIds=O("FEXP_EXPERIMENTS"));
p=Ee();if(!Fe()&&p)for(x of Object.keys(p))m.kvPairs.push({key:x,value:String(p[x])});if(x=k.params)for(n of Object.keys(x))m.kvPairs.push({key:`client.${n}`,value:String(x[n])});n=O("SERVER_NAME");x=O("SERVER_VERSION");n&&x&&(m.kvPairs.push({key:"server.name",value:n}),m.kvPairs.push({key:"server.version",value:x}));u={errorMetadata:m,stackTrace:y,logMessage:u}}if(!u)break a;W("clientError",u)}if("ERROR"===c||P("errors_flush_gel_always_killswitch"))b:if(P("migrate_events_to_ts"))c:{if(P("web_fp_via_jspb")&&
(ci(!0),!P("web_fp_via_jspb_and_json")))break c;ci()}else{if(P("web_fp_via_jspb")&&(ci(!0),!P("web_fp_via_jspb_and_json")))break b;ci()}}try{Di.add(k.message)}catch(da){}Ei++}}}}
function Ni(){for(const a of Ii){const b=Fa();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
;let Oi=1;function Pi(a){return new Qi({trackingParams:a})}
function Ri(a){const b=Oi++;return new Qi({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0})}
var Qi=class{constructor(a){this.s=a}getAsJson(){const a={};void 0!==this.s.trackingParams?a.trackingParams=this.s.trackingParams:(a.veType=this.s.veType,void 0!==this.s.veCounter&&(a.veCounter=this.s.veCounter),void 0!==this.s.elementIndex&&(a.elementIndex=this.s.elementIndex));void 0!==this.s.dataElement&&(a.dataElement=this.s.dataElement.getAsJson());void 0!==this.s.youtubeData&&(a.youtubeData=this.s.youtubeData);return a}getAsJspb(){const a=new L;if(void 0!==this.s.trackingParams){var b=this.s.trackingParams;
if(null!=b)if("string"===typeof b)b=b?new fb(b,bb):eb();else if(b.constructor!==fb)if($a(b))b=b.length?new fb(new Uint8Array(b),bb):eb();else throw Error();F(a,1,b)}else void 0!==this.s.veType&&F(a,2,this.s.veType),void 0!==this.s.veCounter&&F(a,6,this.s.veCounter),void 0!==this.s.elementIndex&&F(a,3,this.s.elementIndex);void 0!==this.s.dataElement&&(b=this.s.dataElement.getAsJspb(),H(a,L,7,b));void 0!==this.s.youtubeData&&H(a,Ad,8,this.s.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.s.trackingParams&&
!!this.s.veType}};let Si=Date.now().toString();let Ti=t.ytLoggingDocDocumentNonce_;
if(!Ti){var Ui;a:{if(window.crypto&&window.crypto.getRandomValues)try{const d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(let f=0;f<d.length;f++)d[f]=e[f];Ui=d;break a}catch(d){}const c=Array(16);for(let d=0;16>d;d++){const e=Date.now();for(let f=0;f<e%23;f++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(Si){let d=1;for(let e=0;e<Si.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^Si.charCodeAt(e),d++}Ui=c}const a=Ui,b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&
63));Ti=b.join("")}var Vi=Ti;let Wi=Vg;var Xi={kb:0,ib:1,jb:2,Cb:3,lb:4,Hb:5,Db:6,Gb:7,Eb:8,Fb:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Yi(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function Zi(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function $i(a=0){return O(Zi(a))}
function aj(a=0){return(a=$i(a))?new Qi({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function bj(){let a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function X(a=0){a=O(Yi(a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function cj(a,b,c){const d=bj();(c=X(c))&&delete d[c];b&&(d[a]=b)}
function dj(a){return bj()[a]}
function ej(a,b,c=0,d){if(a!==O(Yi(c))||b!==O(Zi(c)))if(cj(a,d,c),N(Yi(c),a),N(Zi(c),b),b=()=>{setTimeout(()=>{if(a)if(P("web_time_via_jspb")){var e=new Zd;F(e,1,Vi);F(e,2,a);P("use_default_heartbeat_client")?oi(e):oi(e,void 0,Wi)}else e={clientDocumentNonce:Vi,clientScreenNonce:a},P("use_default_heartbeat_client")?W("foregroundHeartbeatScreenAssociated",e):V("foregroundHeartbeatScreenAssociated",e,Wi)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;class Dg extends Bg{constructor(a){super(arguments);this.csn=a}}const Jg=new Cg,fj=[];let hj=gj,ij=0;function jj(a,b,c,d,e,f,g){const h=hj();var k=new Qi({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={D:h};e&&(f.cttAuthInfo=e);e=()=>{Li(new Q("newScreen() parent element does not have a VE - rootVe",b))};
if(P("il_via_jspb")){const l=new ce;l.h(h);be(l,k.getAsJspb());c&&c.visualElement?(k=new ee,c.clientScreenNonce&&F(k,2,c.clientScreenNonce),de(k,c.visualElement.getAsJspb()),g&&F(k,4,qe[g]),H(l,ee,5,k)):c&&e();d&&F(l,3,d);mi(l,f,a)}else k={csn:h,pageVe:k.getAsJson()},c&&c.visualElement?(k.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(k.implicitGesture.gestureType=g)):c&&e(),d&&(k.cloneCsn=d),a?V("screenCreated",k,a,f):W("screenCreated",k,f);Ig(new Dg(h));
return h}
function kj(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:dj(b)||void 0,
D:b};for(const g of d)d=g.getAsJson(),(xa(d)||!d.trackingParams&&!d.veType)&&Li(Error("Child VE logged with no data"));if(P("il_via_jspb")){const g=new he;g.h(b);fe(g,c.getAsJspb());sa(e,h=>{h=h.getAsJspb();Nb(g,3,L,h)});
"UNDEFINED_CSN"===b?Y("visualElementAttached",f,void 0,g):ni(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:sa(e,g=>g.getAsJson())},"UNDEFINED_CSN"===b?Y("visualElementAttached",f,c):a?V("visualElementAttached",c,a,f):W("visualElementAttached",c,f)}
function lj(a,b,c,d,e){const f={cttAuthInfo:dj(b)||void 0,D:b};P("il_via_jspb")?(d=new ke,d.h(b),c=c.getAsJspb(),H(d,L,2,c),F(d,4,1),e&&H(d,ae,3,e),"UNDEFINED_CSN"===b?Y("visualElementShown",f,void 0,d):ii(d,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementShown",f,e):a?V("visualElementShown",e,a,f):W("visualElementShown",e,f))}
function mj(a,b,c){const d={cttAuthInfo:dj(b)||void 0,D:b};if(P("il_via_jspb")){var e=new je;e.h(b);c=c.getAsJspb();H(e,L,2,c);F(e,4,2);"UNDEFINED_CSN"===b?Y("visualElementHidden",d,void 0,e):ji(e,d,a)}else e={csn:b,ve:c.getAsJson(),eventType:2},"UNDEFINED_CSN"===b?Y("visualElementHidden",d,e):a?V("visualElementHidden",e,a,d):W("visualElementHidden",e,d)}
function nj(a,b,c,d,e){const f={cttAuthInfo:dj(b)||void 0,D:b};P("il_via_jspb")?(d=new ke,d.h(b),c=c.getAsJspb(),H(d,L,2,c),F(d,4,4),e&&H(d,ae,3,e),"UNDEFINED_CSN"===b?Y("visualElementShown",f,void 0,d):ii(d,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:4},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementShown",f,e):a?V("visualElementShown",e,a,f):W("visualElementShown",e,f))}
function oj(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:dj(b)||void 0,D:b,va:d};P("il_via_jspb")?(e=new je,e.h(b),c=c.getAsJspb(),H(e,L,2,c),F(e,4,d?16:8),"UNDEFINED_CSN"===b?Y("visualElementHidden",f,void 0,e):ji(e,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Y("visualElementHidden",f,d):a?V("visualElementHidden",d,a,f):W("visualElementHidden",d,f))}
function pj(a,b,c,d){const e={cttAuthInfo:dj(b)||void 0,D:b};P("il_via_jspb")?(d=new ie,d.h(b),c=c.getAsJspb(),H(d,L,2,c),F(d,4,qe.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,void 0,d):ki(d,e,a)):(c={csn:b,ve:c.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},d&&(c.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,c):a?V("visualElementGestured",c,a,e):W("visualElementGestured",c,e))}
function gj(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Va(b,3)}
function Y(a,b,c,d){fj.push({T:a,payload:c,N:d,options:b});ij||(ij=Mg())}
function Ng(a){if(fj){for(const b of fj)if(P("il_via_jspb")&&b.N)switch(b.N.h(a.csn),b.T){case "screenCreated":mi(b.N,b.options);break;case "visualElementAttached":ni(b.N,b.options);break;case "visualElementShown":ii(b.N,b.options);break;case "visualElementHidden":ji(b.N,b.options);break;case "visualElementGestured":ki(b.N,b.options);break;case "visualElementStateChanged":li(b.N,b.options);break;default:Li(new Q("flushQueue unable to map payloadName to JSPB setter"))}else b.payload&&(b.payload.csn=
a.csn,V(b.T,b.payload,null,b.options));fj.length=0}ij=0}
;function qj(){rj.h||(rj.h=new rj);return rj.h}
function sj(a,b){let c,d,e;return P("il_use_view_model_logging_context")&&(null==(c=b.data)?0:null==(d=c.context)?0:null==(e=d.loggingContext)?0:e.loggingDirectives)?b.data.context.loggingContext.loggingDirectives.trackingParams||"":b.data&&b.data.loggingDirectives?b.data.loggingDirectives.trackingParams||"":b.W&&b.W.trackingParams?b.W.trackingParams:b.data&&b.data.trackingParams||""}
function tj(a){return Math.floor(Number(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||""))||1}
var rj=class{constructor(){this.l=new Set;this.i=new Set;this.h=new Map;this.client=Vg;this.csn=null}j(a){this.client=a}clear(){this.l.clear();this.i.clear();this.h.clear();this.csn=null}};function uj(a,b){return P("use_ts_visibilitylogger")?sj(qj(),b):P("il_use_view_model_logging_context")&&b.data&&b.data.context&&b.data.context.loggingContext&&b.data.context.loggingContext.loggingDirectives?b.data.context.loggingContext.loggingDirectives||"":b.data&&b.data.loggingDirectives?b.data.loggingDirectives.trackingParams||"":b.W&&b.W.trackingParams?b.W.trackingParams:b.data&&b.data.trackingParams||""}
function vj(a){return parseInt(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||"",10)||1}
function wj(a,b){P("use_ts_visibilitylogger")?(qj(),a=!!(tj(a)&b)):a=!!(vj(a)&b);return a}
function xj(a,b){if(P("use_ts_visibilitylogger")){a=qj();var c=sj(0,b),d=b.visualElement?b.visualElement:c,e=a.l.has(d),f=a.h.get(d);a.l.add(d);a.h.set(d,!0);b.h&&!e&&b.h();if(c||b.visualElement)if(d=X(8)){var g=!(!b.data||!b.data.loggingDirectives);if(tj(b)||g){c=b.visualElement?b.visualElement:Pi(c);var h=b.i,k=b.j;g||e?tj(b)&4?f||nj(a.client,d,c,h,k):tj(b)&1&&!e&&lj(a.client,d,c,h,k):lj(a.client,d,c,h,k)}}}else if(c=uj(0,b),d=b.visualElement?b.visualElement:c,e=a.o.has(d),f=a.i.get(d),a.o.add(d),
a.i.set(d,!0),b.h&&!e&&b.h(),c||b.visualElement)if(d=X(8))if(g=!(!b.data||!b.data.loggingDirectives),vj(b)||g)c=b.visualElement?b.visualElement:Pi(c),h=b.i,k=b.j,g||e?wj(b,4)?f||nj(a.h,d,c,h,k):wj(b,1)&&!e&&lj(a.h,d,c,h,k):lj(a.h,d,c,h,k)}
function yj(a,b){if(P("use_ts_visibilitylogger")){a=qj();var c=sj(0,b),d=b.visualElement?b.visualElement:c,e=a.i.has(d),f=a.h.get(d);a.i.add(d);a.h.set(d,!1);!1!==f&&(c||b.visualElement)&&(!(d=X(8))||!tj(b)&&b.data&&b.data.loggingDirectives||(c=b.visualElement?b.visualElement:Pi(c),tj(b)&8?oj(a.client,d,c):tj(b)&2&&!e&&mj(a.client,d,c)))}else c=uj(0,b),d=b.visualElement?b.visualElement:c,e=a.l.has(d),f=a.i.get(d),a.l.add(d),a.i.set(d,!1),!1!==f&&(c||b.visualElement)&&(!(d=X(8))||!vj(b)&&b.data&&b.data.loggingDirectives||
(c=b.visualElement?b.visualElement:Pi(c),wj(b,8)?oj(a.h,d,c):wj(b,2)&&!e&&mj(a.h,d,c)))}
class zj{constructor(){this.o=new Set;this.l=new Set;this.i=new Map;this.u=null;this.h=Vg}j(a){P("use_ts_visibilitylogger")?qj().j(a):this.h=a}clear(){P("use_ts_visibilitylogger")?qj().clear():(this.o.clear(),this.l.clear(),this.i.clear(),this.u=null)}}(function(){var a=zj;a.ja=void 0;a.A=function(){return a.ja?a.ja:a.ja=new a}})();var Aj=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Bj=["notifications_register","notifications_check_registration"];let Cj=null;function Z(a,b){const c={};c.key=a;c.value=b;return Dj().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Ej(){return Z("IndexedDBCheck","testing IndexedDB").then(()=>Fj("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Fj(a){const b=new Q("Error accessing DB");return Dj().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Dj(){return Cj?Promise.resolve(Cj):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Cj=d,a(Cj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Dj()};
c.onupgradeneeded=Gj})}
function Gj(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Hj={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Ij(a){if(1===a.length)return a[0];var b=Hj.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Hj).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Jj(a){return`/youtubei/v1/${Ij(a)}`}
;function Kj(a){if(a)return a[we.name]}
;const Lj=window;class Mj{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Nj=Lj.performance||Lj.mozPerformance||Lj.msPerformance||Lj.webkitPerformance||new Mj;na(Nj.clearResourceTimings||Nj.webkitClearResourceTimings||Nj.mozClearResourceTimings||Nj.msClearResourceTimings||Nj.oClearResourceTimings||qa,Nj);v("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});function Oj(){Pj.h||(Pj.h=new Pj);return Pj.h}
function Qj(a,b,c={}){a.i.add(c.layer||0);a.l=()=>{Rj(a,b,c);var d=aj(c.layer);if(d){for(var e of a.u)Sj(a,e[0],e[1]||d,c.layer);for(const k of a.I){e=X(0);var f=k[0]||aj(0);if(e&&f){d=a.client;var g=f,h=k[1];f={cttAuthInfo:dj(e)||void 0,D:e};P("il_via_jspb")?(h=new le,h.h(e),g=g.getAsJspb(),H(h,L,2,g),"UNDEFINED_CSN"===e?Y("visualElementStateChanged",f,void 0,h):li(h,f,d)):(g={csn:e,ve:g.getAsJson(),clientData:h},"UNDEFINED_CSN"===e?Y("visualElementStateChanged",f,g):d?V("visualElementStateChanged",
g,d,f):W("visualElementStateChanged",g,f))}}}};
X(c.layer)||a.l();if(c.ta)for(const d of c.ta)Tj(a,d,c.layer);else Ki(Error("Delayed screen needs a data promise."))}
function Rj(a,b,c={}){c.layer||(c.layer=0);var d=void 0!==c.Va?c.Va:c.layer;var e=X(d);d=aj(d);let f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=O("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});let k;try{k=jj(a.client,b,f,c.sa,c.cttAuthInfo,g,c.Rb)}catch(l){a=l;c=[{fc:b,rootVe:d,Zb:void 0,Pb:e,Yb:f,sa:c.sa}];a.args||(a.args=[]);a.args.push(...c);Ki(l);
return}ej(k,b,c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{for(const l of Object.values(Xi))if(X(l)===e){b=!0;break a}b=!1}b=!b}b&&oj(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");d=zj.A();P("use_ts_visibilitylogger")?(d=qj(),d.clear(),d.csn=X()):(d.clear(),d.u=X());d=aj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&lj(void 0,k,d);a.i.delete(c.layer||0);a.l=void 0;for(const [l,m]of a.pa)e=
l,m.has(c.layer)&&d&&Sj(a,e,d,c.layer);for(c=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(l){Ki(l)}}a.o.length=0;for(c=0;c<a.C.length;c++){e=a.C[c];try{e()}catch(l){Ki(l)}}}
function Uj(a){var b=28631,c={layer:8};[28631].includes(b)||(Li(new Q("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.u=[];a.I=[];c.ta?Qj(a,b,c):Rj(a,b,c)}
function Tj(a,b,c=0){b.then(d=>{a.i.has(c)&&a.l&&a.l();const e=X(c),f=aj(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&kj(a.client,e,f,[Pi(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&kj(a.client,e,f,[Pi(d.playerResponse.trackingParams)])}})}
function Sj(a,b,c,d=0){if(a.i.has(d))a.u.push([b,c]);else{var e=X(d);c=c||aj(d);e&&c&&kj(a.client,e,c,[b])}}
function Vj(a,b,c=0){(c=X(c))&&pj(a.client,c,b)}
function Wj(a,b,c,d=0){if(!b)return!1;d=X(d);if(!d)return!1;pj(a.client,d,Pi(b),c);return!0}
function Xj(a,b){const c=b.Oa&&b.Oa();b.visualElement?Vj(a,b.visualElement,c):(b=uj(zj.A(),b),Wj(a,b,void 0,c))}
var Pj=class{constructor(){this.u=[];this.I=[];this.h=[];this.o=[];this.C=[];this.i=new Set;this.pa=new Map}j(a){this.client=a}clickCommand(a,b,c=0){return Wj(this,a.clickTrackingParams,b,c)}};var Yj=class extends I{constructor(a){super(a)}};var Zj=class extends I{constructor(a){super(a)}};Zj.h="yt.sw.adr";function ak(a){return r(function*(){var b=yield t.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new Zj).constructor.h){b=new Zj(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function bk(a=!1){const b=ck.h;return r(function*(){if(a||!b.h)b.h=ak(b).then(b.j).catch(c=>{delete b.h;Ki(c)});
return b.h})}
var ck=class{constructor(){this.i=dk("/sw.js_data")}j(a){const b=Ib(a,Yj,2);if(b){const c=E(b,5);c&&(t.__SAPISID=c);null!=E(b,10)?N("EOM_VISITOR_DATA",E(b,10)):null!=E(b,7)&&N("VISITOR_DATA",E(b,7));null!=E(b,4,!1)&&N("SESSION_INDEX",String(E(b,4)));null!=E(b,8)&&N("DELEGATED_SESSION_ID",E(b,8))}return a}};function ek(a){const b={};var c=Uc();c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in De||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in De&&(b["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return b}
var fk=class{constructor(){this.ab=!0}};var gk={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function hk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var ik=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=(null==(c=b.L.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];hk(this,a)}}};function jk(){var a=O("INNERTUBE_CONTEXT");if(!a)return Ki(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=ya(a);P("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=Ie();c?b.experimentsToken=c:delete b.experimentsToken;ik.h||(ik.h=new ik);b=ik.h.h;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);return a}
;var kk=Symbol("injectionDeps");function lk(a){var b={Wa:mk,Aa:nk.h};a.i.set(b.Wa,b)}
function ok(a,b,c){if(-1<c.indexOf(b))throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b))throw Error(`No provider for: ${b}`);const d=a.i.get(b);c.push(b);if(d.Aa)var e=d.Aa;else if(d.hb)e=d[kk]?pk(a,d[kk],c):[],e=d.hb(...e);else if(d.gb){e=d.gb;const f=e[kk]?pk(a,e[kk],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.kc||a.h.set(b,e);return e}
function pk(a,b,c){return b?b.map(d=>ok(a,d,c)):[]}
var qk=class{constructor(){this.i=new Map;this.h=new Map}resolve(a){return ok(this,a,[])}};let rk;function sk(a){var b=a;if(a=O("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ha);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var tk=class{};const uk={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends tk{})};const vk=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function wk(a){var b={Ob:{}};fk.h||(fk.h=new fk);var c=fk.h;if(void 0!==nk.h){const d=nk.h;a=[b!==d.o,a!==d.l,c!==d.j,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new Q("InnerTubeTransportService is already initialized",a);
}else nk.h=new nk(b,a,c)}
function xk(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.ra)?void 0:c.sessionIndex};c=yield md(ek(d));return Promise.resolve(Object.assign({},yk(b),c))})}
function zk(a,b,c){return r(function*(){var d;if(null==b?0:null==(d=b.L)?0:d.context)for(const m of[])m.bc(b.L.context);var e;if(null==(e=a.i)?0:e.jc(b.input,b.L))return yield a.i.Tb(b.input,b.L);var f;if((d=null==(f=b.config)?void 0:f.ec)&&a.h.has(d)&&P("web_memoize_inflight_requests"))var g=a.h.get(d);else{f=JSON.stringify(b.L);let m;e=null!=(m=null==(g=b.U)?void 0:g.headers)?m:{};b.U=Object.assign({},b.U,{headers:Object.assign({},e,c)});g=Object.assign({},b.U);"POST"===b.U.method&&(g=Object.assign({},
g,{body:f}));g=a.l.fetch(b.input,g,b.config);d&&a.h.set(d,g)}g=yield g;var h;let k;if(P("web_one_platform_error_handling")&&g&&"error"in g&&(null==(h=g)?0:null==(k=h.error)?0:k.details)){h=g.error.details;for(const m of h)(h=m["@type"])&&-1<vk.indexOf(h)&&(delete m["@type"],g=m)}d&&a.h.has(d)&&a.h.delete(d);let l;!g&&(null==(l=a.i)?0:l.Nb(b.input,b.L))&&(g=yield a.i.Sb(b.input,b.L));return g||void 0})}
function Ak(a,b,c){var d={ra:{identity:gk}};b.context||(b.context=jk());return new J(e=>r(function*(){var f=sk(c);f=We(f)?"same-origin":"cors";if(a.j.ab){var g,h=null==d?void 0:null==(g=d.ra)?void 0:g.sessionIndex;g=ek({sessionIndex:h});f=Object.assign({},yk(f),g)}else f=yield xk(d,f);g=sk(c);h={};O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=O("INNERTUBE_API_KEY"));P("json_condensed_response")&&(h.prettyPrint="false");g=Ve(g,h||{},!1);h={method:"POST",
mode:We(g)?"same-origin":"cors",credentials:We(g)?"same-origin":"include"};var k={};const l={};for(const m of Object.keys(k))k[m]&&(l[m]=k[m]);0<Object.keys(l).length&&(h.headers=l);e(zk(a,{input:g,U:h,L:b,config:d},f))}))}
function yk(a){const b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));P("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1));"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=O("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
var nk=class{constructor(a,b,c){this.o=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.na||(a.na={});a.na=Object.assign({},uk,a.na)}};var mk=new class{constructor(a){this.name=a}toString(){return`InjectionToken(${this.name})`}}("INNERTUBE_TRANSPORT_TOKEN");let Bk;function Ck(){if(!Bk){rk||(rk=new qk);var a=rk;wk({fetch:(b,c)=>md(fetch(new Request(b,c)))});
lk(a);Bk=a.resolve(mk)}return Bk}
;function Dk(a){return r(function*(){yield Ek();Li(a)})}
function Fk(a){return r(function*(){yield Ek();Ki(a)})}
function Gk(a){r(function*(){var b=yield kg();b?yield Sg(a,b):(yield bk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{T:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{T:"clientError",payload:a.clientError,options:b}:void 0,b&&W(b.T,b.payload))})}
function Ek(){return r(function*(){try{yield bk()}catch(a){}})}
;const Hk={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},Ik=RegExp("^(?:[a-z]+:)?//","i");function Jk(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(Z("IDToken",b),Kk()):"notifications_check_registration"===a&&Lk(b)}
function Mk(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function Nk(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function Ok(a){return r(function*(){const b=Nk(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Jj(xe);return Pk().then(e=>Ak(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?Qk(a,g.endpointUrl):Promise.resolve()).catch(g=>{Fk(g);
Promise.reject(g)})}))})}
function Rk(a,b){var c=X(8);if(null==c||!b)return a;a=Ik.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function Qk(a,b){a.deviceId&&Z("DeviceId",a.deviceId);a.timestampSec&&Z("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Oj();Uj(d);var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:Rk(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&Sk(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h=Pi(g.data.clickTrackingParams),Sj(d,h,void 0,8),h={ea:8,visualElement:h},xj(zj.A(),h);Tk(a.displayCap)}).catch(()=>{})}
function Sk(a){if(!Kj(a))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:Kj(a).serializedInteractionsRequest},c=Jj(ye);return Pk().then(d=>Ak(d,b,c)).then(d=>d)}
function Tk(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let d=0;d<b.length-a;d++){b[d].data.isDismissed=!1;b[d].close();let e;if(null==(e=b[d].data)?0:e.clickTrackingParams){let f;var c=Pi(null==(f=b[d].data)?void 0:f.clickTrackingParams);const g={ea:8,visualElement:c},h=Ri(82046),k=Oj();Sj(k,h,c,8);c={ea:8,visualElement:h};xj(zj.A(),c);Xj(k,c);yj(zj.A(),g)}}})}
function Lk(a){const b=[Uk(a),Fj("RegistrationTimestamp").then(Vk),Wk(),Xk(),Yk()];Promise.all(b).catch(()=>{Z("IDToken",a);Kk();return Promise.resolve()})}
function Vk(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Uk(a){return Fj("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Wk(){return Fj("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Xk(){return Fj("Endpoint").then(a=>Zk().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Yk(){return Fj("application_server_key").then(a=>$k().then(b=>a===b?Promise.resolve():Promise.reject()))}
function al(){var a=Notification.permission;if(Hk[a])return Hk[a]}
function Kk(){Z("RegistrationTimestamp",0);Promise.all([Zk(),bl(),cl(),$k()]).then(([a,b,c,d])=>{b=b?Aj(b):null;c=c?Aj(c):null;d=d?Va(new Uint8Array(d),4):null;dl(a,b,c,d)}).catch(()=>{dl()})}
function dl(a=null,b=null,c=null,d=null){Ej().then(e=>{e&&(Z("Endpoint",a),Z("P256dhKey",b),Z("AuthKey",c),Z("application_server_key",d),Z("Permission",Notification.permission),Promise.all([Fj("DeviceId"),Fj("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||zd.length;for(k=0;256>k;k++)f[k]=zd[0|Math.random()*h];h=f.join("")}el(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function el(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:al()}}},h=Jj(ze);return Pk().then(k=>Ak(k,g,h).then(()=>{Z("DeviceId",a);Z("RegistrationTimestamp",Date.now());Z("TimestampLowerBound",Date.now())},l=>{Dk(l)}))})}
function Zk(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function bl(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function cl(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function $k(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function Pk(){return r(function*(){try{return yield bk(!0),Ck()}catch(a){return yield Dk(a),Promise.reject(a)}})}
;let fl=self.location.origin+"/";function dk(a){let b="undefined"!==typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope?Wc.registration.scope:fl;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let gl=void 0;function hl(a){return r(function*(){gl||(gl=yield a.open("yt-appshell-assets"));return gl})}
function il(a,b){return r(function*(){const c=yield hl(a),d=b.map(e=>jl(c,e));
return Promise.all(d)})}
function kl(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function ll(a,b){return r(function*(){const c=yield hl(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function ml(a,b,c){return r(function*(){yield(yield hl(a)).put(b,c)})}
function nl(a,b){r(function*(){yield(yield hl(a)).delete(b)})}
function jl(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var ol;ol=rg("yt-serviceworker-metadata",{S:{auth:{X:1},["resource-manifest-assets"]:{X:2}},ma:!0,upgrade(a,b){b(1)&&Mf(a,"resource-manifest-assets");b(2)&&Mf(a,"auth")},version:2});let pl=null;function ql(a){return bg(ol(),a)}
function rl(a,b){return r(function*(){yield If(yield ql(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return S(d.h.put(b,e)).then(()=>{pl=e;let f=!0;return Rf(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function sl(a,b){return r(function*(){let c=!1,d=0;yield If(yield ql(a.token),["resource-manifest-assets"],"readonly",e=>Rf(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.ha().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function tl(a){return r(function*(){pl||(yield If(yield ql(a.token),["resource-manifest-assets"],"readonly",b=>Rf(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{pl=c.getKey()})));
return pl})}
var ul=class{constructor(a){this.token=a}static A(){return r(function*(){const a=yield kg();if(a)return ul.h||(ul.h=new ul(a)),ul.h})}};function vl(a,b){return r(function*(){yield Of(yield ql(a.token),"auth",b,"shell_identifier_key")})}
function wl(a){return r(function*(){return(yield(yield ql(a.token)).get("auth","shell_identifier_key"))||""})}
function xl(a){return r(function*(){yield(yield ql(a.token)).clear("auth")})}
var yl=class{constructor(a){this.token=a}static A(){return r(function*(){const a=yield kg();if(a)return yl.h||(yl.h=new yl(a)),yl.h})}};function zl(){r(function*(){const a=yield yl.A();a&&(yield xl(a))})}
;var Al=class extends I{constructor(a){super(a)}};function Bl(a){a:{var b=Cl;if(lc.length){const e=lc.pop();var {Y:c=!1}={};e.Y=c;e.h.init(a,void 0,void 0,void 0);a=e}else a=new kc(a);try{const e=pc(b);var d=qc(new e.ga,a,e);break a}finally{b=a,b.h.clear(),b.l=-1,b.i=-1,100>lc.length&&lc.push(b)}d=void 0}return d}
var Dl=[1],Cl=[class extends I{constructor(a){super(a,-1,Dl)}},1,Cc,[Al,1,Bc]];function El(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(Fl(b)):Promise.reject(Error("No resource manifest header"))})}
function Fl(a){return Lb(Bl(decodeURIComponent(a)),Al,1).reduce((b,c)=>{(c=E(c,1))&&b.push(c);return b},[])}
;function Gl(a){return r(function*(){const b=yield bk();if(b&&null!=E(b,3)){var c=yield yl.A();c&&(c=yield wl(c),E(b,3)!==c&&(nl(a.caches,a.h),zl()))}})}
function Hl(a){return r(function*(){let b,c;try{c=yield Il(a.i),b=yield El(c),yield il(a.caches,b)}catch(d){return Promise.reject(d)}try{yield Jl(),yield ml(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield Kl(a,b,a.h)}catch(d){}return Promise.resolve()})}
function Ll(a){return r(function*(){yield Gl(a);return Hl(a)})}
function Il(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function Jl(){return r(function*(){var a=yield bk();let b;a&&null!=E(a,3)&&(b=E(a,3));return b?(a=yield yl.A())?Promise.resolve(vl(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function Kl(a,b,c){return r(function*(){const d=yield ul.A();if(d)try{yield rl(d,b)}catch(e){yield Dk(e)}b.push(c);try{yield ll(a.caches,b)}catch(e){yield Dk(e)}return Promise.resolve()})}
function Ml(a,b){return r(function*(){return kl(a.caches,b)})}
function Nl(a){return r(function*(){return kl(a.caches,a.h)})}
var Ol=class{constructor(){var a=self.caches;let b=dk("/app_shell");P("service_worker_forward_exp_params")&&(b+=self.location.search);var c=dk("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var Pl=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function Ql(a,b){return r(function*(){const c=b.request,d=yield Ml(a.h,c.url);if(d)return Gk({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:T()}),d;Rl(c);return Sl(b)})}
function Tl(a,b){return r(function*(){const c=yield Ul(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield Nl(a.h);if(d)return Vl(a),Wl(d,b);Xl(a);return c.response?c.response:Promise.reject(c.error)})}
function Yl(a,b){b=new URL(b);if(!a.config.qa.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.config.Ia)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function Zl(a,b){return r(function*(){const c=yield Nl(a.h);if(!c)return Xl(a),Sl(b);Vl(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(T()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return Wl(c,b);d=yield Ul(b);return d.response&&d.response.ok?d.response:Wl(c,b)})}
function Sl(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!$l(b)?b:t.fetch(a.request))}
function Rl(a){const b={assetPath:a.url,cacheHit:!1};ul.A().then(c=>{if(c){var d=tl(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=sl(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{Dk(e)}).finally(()=>{Gk({appShellAssetLoadReport:b,
timestamp:T()})})}else Gk({appShellAssetLoadReport:b,
timestamp:T()})})}
function Vl(a){Gk({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:T()})}
function Xl(a){Gk({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:T()})}
function Wl(a,b){if(!P("sw_nav_preload_pbj"))return a;const c=new Pl,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!$l(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Ul(a){return r(function*(){try{return{response:yield Sl(a)}}catch(b){return{error:b}}})}
function $l(a){return"pbj"===a.headers.get("x-navigation-preload-response-type")}
var im=class{constructor(){var a=am;var b={Ka:bm,Xa:cm([dm,/\/signin/,/\/logout/]),qa:["/","/feed/downloads"],Ia:em([{key:"feature",value:"ytca"}]),Ha:fm(P("kevlar_sw_app_wide_fallback")?gm:hm)};this.h=a;this.config=b}};const jm=/^\/$/,hm=[jm,/^\/feed\/downloads$/],gm=[jm,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function fm(a){return new RegExp(a.map(b=>b.source).join("|"))}
const km=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function cm(a){a=fm(a);return new RegExp(`${km.source}(${a.source})`)}
const lm=fm([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),bm=new RegExp(`${km.source}(${lm.source})`),dm=/purge_shell=1/;function em(a=[]){const b=[];for(const c of Lc)b.push({key:c});for(const c of a)b.push(c);return b}
cm([dm]);em();var nm=class{constructor(){var a=am,b=mm;this.h=self;this.i=a;this.o=b;this.I=Bj}init(){this.h.oninstall=this.u.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.C.bind(this)}u(a){this.h.skipWaiting();const b=Ll(this.i).catch(c=>{Dk(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),P("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}l(a){const b=this;return r(function*(){var c=b.o,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Xa.test(e.url))ck.h&&(delete ck.h.h,t.__SAPISID=void 0,N("VISITOR_DATA",void 0),N("SESSION_INDEX",void 0),N("DELEGATED_SESSION_ID",void 0)),d=a.respondWith,
c=c.h,nl(c.caches,c.h),zl(),c=Sl(a),d.call(a,c);else if(c.config.Ka.test(e.url))a.respondWith(Ql(c,a));else if("navigate"===e.mode){const f=new URL(e.url),g=c.config.qa;(!P("sw_nav_request_network_first")&&g.includes(f.pathname)?0:c.config.Ha.test(f.pathname))?a.respondWith(Tl(c,a)):Yl(c,e.url)?a.respondWith(Zl(c,a)):d&&a.respondWith(Sl(a))}})}C(a){const b=a.data;
this.I.includes(b.type)?Jk(a):"refresh_shell"===b.type&&Hl(this.i).catch(c=>{Dk(c)})}};var om=class{static A(){let a=w("ytglobal.storage_");a||(a=new om,v("ytglobal.storage_",a));return a}estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return pm()})}};
function pm(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
v("ytglobal.storageClass_",om);function qm(a,b){om.A().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:rm(null==c?void 0:c.usage),deviceStorageQuotaMbytes:rm(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class sm{constructor(){var a=tm;this.handleError=um;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=He("ytidb_transaction_ended_event_rate_limit_session",.2)}aa(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":qm(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=He("ytidb_transaction_ended_event_rate_limit_transaction",
.1)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function rm(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;wi(ti(),{H:[{Ua:/Failed to fetch/,weight:500}],G:[]});var {handleError:um=Ji,aa:tm=W}={handleError:Fk,aa:function(a,b){return r(function*(){yield Ek();W(a,b)})}};
for(jf=new sm;0<hf.length;){const a=hf.shift();switch(a.type){case "ERROR":jf.handleError(a.payload);break;case "EVENT":jf.aa(a.eventType,a.payload)}}ck.h=new ck;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Sk(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=Pi(b.clickTrackingParams);a={ea:8,visualElement:c};if(b.isDismissed){const d=Ri(74726);b=Oj();Sj(b,d,c,8);c={ea:8,visualElement:d};xj(zj.A(),c);Xj(b,c)}yj(zj.A(),a)}};
self.onpush=function(a){a.waitUntil(Fj("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return Ok(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(Mk())};
self.onpushsubscriptionchange=function(){Kk()};
const am=new Ol,mm=new im;(new nm).init();
