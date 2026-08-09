"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var f=t(function(K,j){
var m=require('@stdlib/math-base-special-fast-min/dist'),z=require('@stdlib/blas-base-zcopy/dist').ndarray;function w(i,r,u,y,e,n,o,v,q,c){var p,s,a;return i<=0||n===0||r>=i||(a=m(m(y,i)-u,i-r),a<=0)?e:(p=o+u*n,s=o+r*n,u<r+a&&r<u+a?(z(a,e,n,p,v,q,c),z(a,v,q,c,e,n,s),e):(z(a,e,n,p,e,n,s),e))}j.exports=w
});var _=t(function(L,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),A=f();function B(i,r,u,y,e,n,o,v){var q=l(i,n),c=l(i,v);return A(i,r,u,y,e,n,q,o,v,c)}R.exports=B
});var W=t(function(M,O){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),D=f();C(E,"ndarray",D);O.exports=E
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=W(),h,b=G(F(__dirname,"./native.js"));H(b)?h=I:h=b;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
