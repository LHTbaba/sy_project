(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peopleLogin/peopleLogin"],{"33ca":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(n("0c60")),a(n("da1a"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={data:function(){var e;return e={loginName:"",password:"",authcode:"",codeSrc:"",verCode:"",name:"",idCard:"",width:" ",height:" ",src:"",title:"身份绑定",checked:!0},c(e,"src",""),c(e,"scrollerHeight",""),c(e,"sessionId",""),e},onShow:function(){var t=this;e.$on("camera",(function(e){t.src="data:image/jpeg;base64,"+e.baseUrl,t.name=e.name,t.idCard=e.idCard}))},onLoad:function(){var t=e.getStorageSync("userName"),n=e.getStorageSync("passWord");this.loginName=t,this.password=n},mounted:function(){this.getHeight()},methods:{getHeight:function(){var t=this,n=e.createSelectorQuery().in(this);n.select("#wrap").boundingClientRect((function(e){t.scrollerHeight=e.height})).exec(),t.$nextTick((function(){n.select("#header").boundingClientRect((function(e){t.scrollerHeight=t.scrollerHeight-e.height+"px"})).exec()}))},tocamera:function(){e.navigateTo({url:"../camera/camera"})},back:function(){e.navigateBack({delta:1})}}};t.default=r}).call(this,n("543d")["default"])},4328:function(e,t,n){},"938b":function(e,t,n){"use strict";n.r(t);var a=n("9a67"),c=n("ef99");for(var r in c)"default"!==r&&function(e){n.d(t,e,(function(){return c[e]}))}(r);n("b289");var i,o=n("f0c5"),u=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"0ffb3d84",null,!1,a["a"],i);t["default"]=u.exports},"9a67":function(e,t,n){"use strict";var a,c=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},b289:function(e,t,n){"use strict";var a=n("4328"),c=n.n(a);c.a},ef99:function(e,t,n){"use strict";n.r(t);var a=n("33ca"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=c.a},fbc6:function(e,t,n){"use strict";(function(e){n("4c46");a(n("66fd"));var t=a(n("938b"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["fbc6","common/runtime","common/vendor"]]]);