(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1818e97c"],{"0b42":function(t,r,n){var o=n("da84"),c=n("e8b5"),e=n("68ee"),u=n("861d"),a=n("b622"),i=a("species"),f=o.Array;t.exports=function(t){var r;return c(t)&&(r=t.constructor,e(r)&&(r===f||c(r.prototype))?r=void 0:u(r)&&(r=r[i],null===r&&(r=void 0))),void 0===r?f:r}},"1dde":function(t,r,n){var o=n("d039"),c=n("b622"),e=n("2d00"),u=c("species");t.exports=function(t){return e>=51||!o((function(){var r=[],n=r.constructor={};return n[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var o=n("0b42");t.exports=function(t,r){return new(o(t))(0===r?0:r)}},7901:function(t,r,n){"use strict";n.r(r);var o=n("7a23"),c=Object(o["f"])("h2",null,"單一產品",-1),e={class:"container"},u=["src"];function a(t,r,n,a,i,f){return Object(o["s"])(),Object(o["e"])(o["a"],null,[c,Object(o["f"])("div",e,[Object(o["h"])(Object(o["B"])(i.product)+" ",1),Object(o["f"])("img",{src:i.product.imageUrl,alt:""},null,8,u)])],64)}n("99af");var i={data:function(){return{product:[]}},methods:{getProduct:function(){var t=this,r=this.$route.params.id;this.$http("".concat("https://vue3-course-api.hexschool.io/v2/","api/").concat("ptsai129","/product/").concat(r)).then((function(r){t.product=r.data.product}))}},mounted:function(){this.getProduct()}},f=n("6b0d"),d=n.n(f);const s=d()(i,[["render",a]]);r["default"]=s},8418:function(t,r,n){"use strict";var o=n("a04b"),c=n("9bf2"),e=n("5c6c");t.exports=function(t,r,n){var u=o(r);u in t?c.f(t,u,e(0,n)):t[u]=n}},"99af":function(t,r,n){"use strict";var o=n("23e7"),c=n("da84"),e=n("d039"),u=n("e8b5"),a=n("861d"),i=n("7b0b"),f=n("07fa"),d=n("8418"),s=n("65f0"),p=n("1dde"),b=n("b622"),v=n("2d00"),l=b("isConcatSpreadable"),h=9007199254740991,w="Maximum allowed index exceeded",x=c.TypeError,g=v>=51||!e((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),j=p("concat"),m=function(t){if(!a(t))return!1;var r=t[l];return void 0!==r?!!r:u(t)},y=!g||!j;o({target:"Array",proto:!0,forced:y},{concat:function(t){var r,n,o,c,e,u=i(this),a=s(u,0),p=0;for(r=-1,o=arguments.length;r<o;r++)if(e=-1===r?u:arguments[r],m(e)){if(c=f(e),p+c>h)throw x(w);for(n=0;n<c;n++,p++)n in e&&d(a,p,e[n])}else{if(p>=h)throw x(w);d(a,p++,e)}return a.length=p,a}})},e8b5:function(t,r,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-1818e97c.e5e3b833.js.map