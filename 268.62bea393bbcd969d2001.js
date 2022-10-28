/*! For license information please see 268.62bea393bbcd969d2001.js.LICENSE.txt */
(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[268],{6707:(t,i,e)=>{"use strict";var n=e(9033).Buffer,r=e(1736),s=e(2353),h=new Array(16),o=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],a=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],l=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],_=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],u=[0,1518500249,1859775393,2400959708,2840853838],f=[1352829926,1548603684,1836072691,2053994217,0];function c(){s.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(t,i){return t<<i|t>>>32-i}function b(t,i,e,n,r,s,h,o){return p(t+(i^e^n)+s+h|0,o)+r|0}function w(t,i,e,n,r,s,h,o){return p(t+(i&e|~i&n)+s+h|0,o)+r|0}function d(t,i,e,n,r,s,h,o){return p(t+((i|~e)^n)+s+h|0,o)+r|0}function y(t,i,e,n,r,s,h,o){return p(t+(i&n|e&~n)+s+h|0,o)+r|0}function v(t,i,e,n,r,s,h,o){return p(t+(i^(e|~n))+s+h|0,o)+r|0}r(c,s),c.prototype._update=function(){for(var t=h,i=0;i<16;++i)t[i]=this._block.readInt32LE(4*i);for(var e=0|this._a,n=0|this._b,r=0|this._c,s=0|this._d,c=0|this._e,m=0|this._a,g=0|this._b,k=0|this._c,E=0|this._d,B=0|this._e,I=0;I<80;I+=1){var x,T;I<16?(x=b(e,n,r,s,c,t[o[I]],u[0],l[I]),T=v(m,g,k,E,B,t[a[I]],f[0],_[I])):I<32?(x=w(e,n,r,s,c,t[o[I]],u[1],l[I]),T=y(m,g,k,E,B,t[a[I]],f[1],_[I])):I<48?(x=d(e,n,r,s,c,t[o[I]],u[2],l[I]),T=d(m,g,k,E,B,t[a[I]],f[2],_[I])):I<64?(x=y(e,n,r,s,c,t[o[I]],u[3],l[I]),T=w(m,g,k,E,B,t[a[I]],f[3],_[I])):(x=v(e,n,r,s,c,t[o[I]],u[4],l[I]),T=b(m,g,k,E,B,t[a[I]],f[4],_[I])),e=c,c=s,s=p(r,10),r=n,n=x,m=B,B=E,E=p(k,10),k=g,g=T}var A=this._b+r+E|0;this._b=this._c+s+B|0,this._c=this._d+c+m|0,this._d=this._e+e+g|0,this._e=this._a+n+k|0,this._a=A},c.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var t=n.alloc?n.alloc(20):new n(20);return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t},t.exports=c},8850:(t,i,e)=>{var n=e(9033),r=n.Buffer;function s(t,i){for(var e in t)i[e]=t[e]}function h(t,i,e){return r(t,i,e)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?t.exports=n:(s(n,i),i.Buffer=h),h.prototype=Object.create(r.prototype),s(r,h),h.from=function(t,i,e){if("number"==typeof t)throw new TypeError("Argument must not be a number");return r(t,i,e)},h.alloc=function(t,i,e){if("number"!=typeof t)throw new TypeError("Argument must be a number");var n=r(t);return void 0!==i?"string"==typeof e?n.fill(i,e):n.fill(i):n.fill(0),n},h.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r(t)},h.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n.SlowBuffer(t)}},1755:(t,i,e)=>{"use strict";var n,r=e(9142),s=e(9033),h=s.Buffer,o={};for(n in s)s.hasOwnProperty(n)&&"SlowBuffer"!==n&&"Buffer"!==n&&(o[n]=s[n]);var a=o.Buffer={};for(n in h)h.hasOwnProperty(n)&&"allocUnsafe"!==n&&"allocUnsafeSlow"!==n&&(a[n]=h[n]);if(o.Buffer.prototype=h.prototype,a.from&&a.from!==Uint8Array.from||(a.from=function(t,i,e){if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type '+typeof t);if(t&&void 0===t.length)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);return h(t,i,e)}),a.alloc||(a.alloc=function(t,i,e){if("number"!=typeof t)throw new TypeError('The "size" argument must be of type number. Received type '+typeof t);if(t<0||t>=2*(1<<30))throw new RangeError('The value "'+t+'" is invalid for option "size"');var n=h(t);return i&&0!==i.length?"string"==typeof e?n.fill(i,e):n.fill(i):n.fill(0),n}),!o.kStringMaxLength)try{o.kStringMaxLength=r.binding("buffer").kStringMaxLength}catch(t){}o.constants||(o.constants={MAX_LENGTH:o.kMaxLength},o.kStringMaxLength&&(o.constants.MAX_STRING_LENGTH=o.kStringMaxLength)),t.exports=o},8245:(t,i)=>{"use strict";var e,n,r,s;if("object"==typeof performance&&"function"==typeof performance.now){var h=performance;i.unstable_now=function(){return h.now()}}else{var o=Date,a=o.now();i.unstable_now=function(){return o.now()-a}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,_=null,u=function(){if(null!==l)try{var t=i.unstable_now();l(!0,t),l=null}catch(t){throw setTimeout(u,0),t}};e=function(t){null!==l?setTimeout(e,0,t):(l=t,setTimeout(u,0))},n=function(t,i){_=setTimeout(t,i)},r=function(){clearTimeout(_)},i.unstable_shouldYield=function(){return!1},s=i.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,c=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var b=!1,w=null,d=-1,y=5,v=0;i.unstable_shouldYield=function(){return i.unstable_now()>=v},s=function(){},i.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<t?Math.floor(1e3/t):5};var m=new MessageChannel,g=m.port2;m.port1.onmessage=function(){if(null!==w){var t=i.unstable_now();v=t+y;try{w(!0,t)?g.postMessage(null):(b=!1,w=null)}catch(t){throw g.postMessage(null),t}}else b=!1},e=function(t){w=t,b||(b=!0,g.postMessage(null))},n=function(t,e){d=f((function(){t(i.unstable_now())}),e)},r=function(){c(d),d=-1}}function k(t,i){var e=t.length;t.push(i);t:for(;;){var n=e-1>>>1,r=t[n];if(!(void 0!==r&&0<I(r,i)))break t;t[n]=i,t[e]=r,e=n}}function E(t){return void 0===(t=t[0])?null:t}function B(t){var i=t[0];if(void 0!==i){var e=t.pop();if(e!==i){t[0]=e;t:for(var n=0,r=t.length;n<r;){var s=2*(n+1)-1,h=t[s],o=s+1,a=t[o];if(void 0!==h&&0>I(h,e))void 0!==a&&0>I(a,h)?(t[n]=a,t[o]=e,n=o):(t[n]=h,t[s]=e,n=s);else{if(!(void 0!==a&&0>I(a,e)))break t;t[n]=a,t[o]=e,n=o}}}return i}return null}function I(t,i){var e=t.sortIndex-i.sortIndex;return 0!==e?e:t.id-i.id}var x=[],T=[],A=1,L=null,S=3,U=!1,M=!1,P=!1;function z(t){for(var i=E(T);null!==i;){if(null===i.callback)B(T);else{if(!(i.startTime<=t))break;B(T),i.sortIndex=i.expirationTime,k(x,i)}i=E(T)}}function C(t){if(P=!1,z(t),!M)if(null!==E(x))M=!0,e(O);else{var i=E(T);null!==i&&n(C,i.startTime-t)}}function O(t,e){M=!1,P&&(P=!1,r()),U=!0;var s=S;try{for(z(e),L=E(x);null!==L&&(!(L.expirationTime>e)||t&&!i.unstable_shouldYield());){var h=L.callback;if("function"==typeof h){L.callback=null,S=L.priorityLevel;var o=h(L.expirationTime<=e);e=i.unstable_now(),"function"==typeof o?L.callback=o:L===E(x)&&B(x),z(e)}else B(x);L=E(x)}if(null!==L)var a=!0;else{var l=E(T);null!==l&&n(C,l.startTime-e),a=!1}return a}finally{L=null,S=s,U=!1}}var F=s;i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(t){t.callback=null},i.unstable_continueExecution=function(){M||U||(M=!0,e(O))},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return E(x)},i.unstable_next=function(t){switch(S){case 1:case 2:case 3:var i=3;break;default:i=S}var e=S;S=i;try{return t()}finally{S=e}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=F,i.unstable_runWithPriority=function(t,i){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var e=S;S=t;try{return i()}finally{S=e}},i.unstable_scheduleCallback=function(t,s,h){var o=i.unstable_now();switch(h="object"==typeof h&&null!==h&&"number"==typeof(h=h.delay)&&0<h?o+h:o,t){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return t={id:A++,callback:s,priorityLevel:t,startTime:h,expirationTime:a=h+a,sortIndex:-1},h>o?(t.sortIndex=h,k(T,t),null===E(x)&&t===E(T)&&(P?r():P=!0,n(C,h-o))):(t.sortIndex=a,k(x,t),M||U||(M=!0,e(O))),t},i.unstable_wrapCallback=function(t){var i=S;return function(){var e=S;S=i;try{return t.apply(this,arguments)}finally{S=e}}}},4853:(t,i,e)=>{"use strict";t.exports=e(8245)},6003:(t,i,e)=>{var n=e(8850).Buffer;function r(t,i){this._block=n.alloc(t),this._finalSize=i,this._blockSize=t,this._len=0}r.prototype.update=function(t,i){"string"==typeof t&&(i=i||"utf8",t=n.from(t,i));for(var e=this._block,r=this._blockSize,s=t.length,h=this._len,o=0;o<s;){for(var a=h%r,l=Math.min(s-o,r-a),_=0;_<l;_++)e[a+_]=t[o+_];o+=l,(h+=l)%r==0&&this._update(e)}return this._len+=s,this},r.prototype.digest=function(t){var i=this._len%this._blockSize;this._block[i]=128,this._block.fill(0,i+1),i>=this._finalSize&&(this._update(this._block),this._block.fill(0));var e=8*this._len;if(e<=4294967295)this._block.writeUInt32BE(e,this._blockSize-4);else{var n=(4294967295&e)>>>0,r=(e-n)/4294967296;this._block.writeUInt32BE(r,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var s=this._hash();return t?s.toString(t):s},r.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=r},1708:(t,i,e)=>{var n=t.exports=function(t){t=t.toLowerCase();var i=n[t];if(!i)throw new Error(t+" is not supported (we accept pull requests)");return new i};n.sha=e(8210),n.sha1=e(544),n.sha224=e(6288),n.sha256=e(4571),n.sha384=e(6959),n.sha512=e(4515)},8210:(t,i,e)=>{var n=e(1736),r=e(6003),s=e(8850).Buffer,h=[1518500249,1859775393,-1894007588,-899497514],o=new Array(80);function a(){this.init(),this._w=o,r.call(this,64,56)}function l(t){return t<<30|t>>>2}function _(t,i,e,n){return 0===t?i&e|~i&n:2===t?i&e|i&n|e&n:i^e^n}n(a,r),a.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},a.prototype._update=function(t){for(var i,e=this._w,n=0|this._a,r=0|this._b,s=0|this._c,o=0|this._d,a=0|this._e,u=0;u<16;++u)e[u]=t.readInt32BE(4*u);for(;u<80;++u)e[u]=e[u-3]^e[u-8]^e[u-14]^e[u-16];for(var f=0;f<80;++f){var c=~~(f/20),p=0|((i=n)<<5|i>>>27)+_(c,r,s,o)+a+e[f]+h[c];a=o,o=s,s=l(r),r=n,n=p}this._a=n+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},a.prototype._hash=function(){var t=s.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=a},544:(t,i,e)=>{var n=e(1736),r=e(6003),s=e(8850).Buffer,h=[1518500249,1859775393,-1894007588,-899497514],o=new Array(80);function a(){this.init(),this._w=o,r.call(this,64,56)}function l(t){return t<<5|t>>>27}function _(t){return t<<30|t>>>2}function u(t,i,e,n){return 0===t?i&e|~i&n:2===t?i&e|i&n|e&n:i^e^n}n(a,r),a.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},a.prototype._update=function(t){for(var i,e=this._w,n=0|this._a,r=0|this._b,s=0|this._c,o=0|this._d,a=0|this._e,f=0;f<16;++f)e[f]=t.readInt32BE(4*f);for(;f<80;++f)e[f]=(i=e[f-3]^e[f-8]^e[f-14]^e[f-16])<<1|i>>>31;for(var c=0;c<80;++c){var p=~~(c/20),b=l(n)+u(p,r,s,o)+a+e[c]+h[p]|0;a=o,o=s,s=_(r),r=n,n=b}this._a=n+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0},a.prototype._hash=function(){var t=s.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=a},6288:(t,i,e)=>{var n=e(1736),r=e(4571),s=e(6003),h=e(8850).Buffer,o=new Array(64);function a(){this.init(),this._w=o,s.call(this,64,56)}n(a,r),a.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},a.prototype._hash=function(){var t=h.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=a},4571:(t,i,e)=>{var n=e(1736),r=e(6003),s=e(8850).Buffer,h=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=new Array(64);function a(){this.init(),this._w=o,r.call(this,64,56)}function l(t,i,e){return e^t&(i^e)}function _(t,i,e){return t&i|e&(t|i)}function u(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function f(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function c(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}n(a,r),a.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},a.prototype._update=function(t){for(var i,e=this._w,n=0|this._a,r=0|this._b,s=0|this._c,o=0|this._d,a=0|this._e,p=0|this._f,b=0|this._g,w=0|this._h,d=0;d<16;++d)e[d]=t.readInt32BE(4*d);for(;d<64;++d)e[d]=0|(((i=e[d-2])>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)+e[d-7]+c(e[d-15])+e[d-16];for(var y=0;y<64;++y){var v=w+f(a)+l(a,p,b)+h[y]+e[y]|0,m=u(n)+_(n,r,s)|0;w=b,b=p,p=a,a=o+v|0,o=s,s=r,r=n,n=v+m|0}this._a=n+this._a|0,this._b=r+this._b|0,this._c=s+this._c|0,this._d=o+this._d|0,this._e=a+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=w+this._h|0},a.prototype._hash=function(){var t=s.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=a},6959:(t,i,e)=>{var n=e(1736),r=e(4515),s=e(6003),h=e(8850).Buffer,o=new Array(160);function a(){this.init(),this._w=o,s.call(this,128,112)}n(a,r),a.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},a.prototype._hash=function(){var t=h.allocUnsafe(48);function i(i,e,n){t.writeInt32BE(i,n),t.writeInt32BE(e,n+4)}return i(this._ah,this._al,0),i(this._bh,this._bl,8),i(this._ch,this._cl,16),i(this._dh,this._dl,24),i(this._eh,this._el,32),i(this._fh,this._fl,40),t},t.exports=a},4515:(t,i,e)=>{var n=e(1736),r=e(6003),s=e(8850).Buffer,h=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],o=new Array(160);function a(){this.init(),this._w=o,r.call(this,128,112)}function l(t,i,e){return e^t&(i^e)}function _(t,i,e){return t&i|e&(t|i)}function u(t,i){return(t>>>28|i<<4)^(i>>>2|t<<30)^(i>>>7|t<<25)}function f(t,i){return(t>>>14|i<<18)^(t>>>18|i<<14)^(i>>>9|t<<23)}function c(t,i){return(t>>>1|i<<31)^(t>>>8|i<<24)^t>>>7}function p(t,i){return(t>>>1|i<<31)^(t>>>8|i<<24)^(t>>>7|i<<25)}function b(t,i){return(t>>>19|i<<13)^(i>>>29|t<<3)^t>>>6}function w(t,i){return(t>>>19|i<<13)^(i>>>29|t<<3)^(t>>>6|i<<26)}function d(t,i){return t>>>0<i>>>0?1:0}n(a,r),a.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},a.prototype._update=function(t){for(var i=this._w,e=0|this._ah,n=0|this._bh,r=0|this._ch,s=0|this._dh,o=0|this._eh,a=0|this._fh,y=0|this._gh,v=0|this._hh,m=0|this._al,g=0|this._bl,k=0|this._cl,E=0|this._dl,B=0|this._el,I=0|this._fl,x=0|this._gl,T=0|this._hl,A=0;A<32;A+=2)i[A]=t.readInt32BE(4*A),i[A+1]=t.readInt32BE(4*A+4);for(;A<160;A+=2){var L=i[A-30],S=i[A-30+1],U=c(L,S),M=p(S,L),P=b(L=i[A-4],S=i[A-4+1]),z=w(S,L),C=i[A-14],O=i[A-14+1],F=i[A-32],R=i[A-32+1],j=M+O|0,N=U+C+d(j,M)|0;N=(N=N+P+d(j=j+z|0,z)|0)+F+d(j=j+R|0,R)|0,i[A]=N,i[A+1]=j}for(var q=0;q<160;q+=2){N=i[q],j=i[q+1];var G=_(e,n,r),Y=_(m,g,k),H=u(e,m),X=u(m,e),D=f(o,B),W=f(B,o),J=h[q],K=h[q+1],Q=l(o,a,y),V=l(B,I,x),Z=T+W|0,$=v+D+d(Z,T)|0;$=($=($=$+Q+d(Z=Z+V|0,V)|0)+J+d(Z=Z+K|0,K)|0)+N+d(Z=Z+j|0,j)|0;var tt=X+Y|0,it=H+G+d(tt,X)|0;v=y,T=x,y=a,x=I,a=o,I=B,o=s+$+d(B=E+Z|0,E)|0,s=r,E=k,r=n,k=g,n=e,g=m,e=$+it+d(m=Z+tt|0,Z)|0}this._al=this._al+m|0,this._bl=this._bl+g|0,this._cl=this._cl+k|0,this._dl=this._dl+E|0,this._el=this._el+B|0,this._fl=this._fl+I|0,this._gl=this._gl+x|0,this._hl=this._hl+T|0,this._ah=this._ah+e+d(this._al,m)|0,this._bh=this._bh+n+d(this._bl,g)|0,this._ch=this._ch+r+d(this._cl,k)|0,this._dh=this._dh+s+d(this._dl,E)|0,this._eh=this._eh+o+d(this._el,B)|0,this._fh=this._fh+a+d(this._fl,I)|0,this._gh=this._gh+y+d(this._gl,x)|0,this._hh=this._hh+v+d(this._hl,T)|0},a.prototype._hash=function(){var t=s.allocUnsafe(64);function i(i,e,n){t.writeInt32BE(i,n),t.writeInt32BE(e,n+4)}return i(this._ah,this._al,0),i(this._bh,this._bl,8),i(this._ch,this._cl,16),i(this._dh,this._dl,24),i(this._eh,this._el,32),i(this._fh,this._fl,40),i(this._gh,this._gl,48),i(this._hh,this._hl,56),t},t.exports=a}}]);