(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yjjcReport2/yjjcReport"],{"0738":function(e,t,n){"use strict";var a=n("aecc"),o=n.n(a);o.a},"673d":function(e,t,n){"use strict";var a={uniHeader:function(){return n.e("components/uni-header/uni-header").then(n.bind(null,"681c"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},"818b":function(e,t,n){"use strict";n.r(t);var a=n("cb53"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},a268:function(e,t,n){"use strict";(function(e){n("4c46");a(n("66fd"));var t=a(n("f9ed"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},aecc:function(e,t,n){},cb53:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("0c60"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{title:"预警详情",reNum:0,isMore:!1,noMore:!1,pageNum:1,typeIndex:"",zghList:[],typeArray:[],pageSize:15,src:"",addbool:!1,refresherTriggered:!1,_refresherTriggered:!1,retext:"待核查",barList:["待核查","已核查"],tabIndex:0,scrollerHeight:""}},onLoad:function(){},onShow:function(){e.$emit("canvasURL",(function(e){}))},mounted:function(){this.barheight=this.$store.state.barHeight,console.log(this.barheight);var e=this;console.log(this.openId),e.getHeight(),e.getCode()},methods:{chooseImage:function(){var t=this;wx.chooseImage({count:9,sizeType:["compressed"],sourceType:["camera","album"],success:function(n){console.log(n);var o=n.tempFilePaths;console.log(a.default.baseUrl);var i=e.getStorageSync("sessionId");o.forEach((function(e){wx.uploadFile({url:a.default.baseUrl+"/Upload_wk",header:{"Content-Type":"multipart/form-data",accept:"application/json",Cookie:"JSESSIONID="+i},filePath:e,name:"file",success:function(e){if(console.log(e),"200"==e.statusCode){var n=JSON.parse(e.data),o={name:n.data.name,type:n.data.suffix,url:a.default.baseUrl+"/"+n.data.path};t.imgList.push(o),console.log(t.imgList)}else t.$toast(e.msg)},fail:function(e){t.$toast(e)}})}))}})},ViewImage:function(t){var n=this,a=n.imgList.map((function(e){return e.url}));e.previewImage({urls:a,current:t.currentTarget.dataset.index})},delImg:function(t){var n=this;e.showModal({title:"提示",content:"确定删除该照片吗？",cancelText:"取消",confirmText:"确定",success:function(e){e.confirm&&n.imgList.splice(t.currentTarget.dataset.index,1)}})},addFamily:function(){this.addbool=!0},closeFamily:function(){this.addbool=!1},maskShow:function(){e.navigateTo({url:"../qianming/qianming"})},getHeight:function(){var t=this,n=e.createSelectorQuery().in(this);n.select("#wrap").boundingClientRect((function(e){t.scrollerHeight=e.height})).exec(),t.$nextTick((function(){n.select("#header").boundingClientRect((function(e){t.scrollerHeight=t.scrollerHeight-e.height+"px"})).exec()}))},getCode:function(){var t=this;e.request({url:a.default.baseUrl+"/Imagexcx.img?data="+new Date,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"GET",success:function(e){if(console.log(e),"0"==e.data.code){var n=e.data.data.valicode.replace(/\. +/g,"");n=n.replace(/[\r\n]/g,""),t.src=" data:image/jpeg;base64,"+n}else t.$toast("验证码获取失败")},fail:function(t){console.log(t),e.showToast({icon:"none",title:"请求出错: "+t,duration:2e3})}})},seeDetail:function(){e.navigateTo({url:"../webview/webview?url=https://gxhsbf.zjwq.net/loadPkhxxDataCA?url=/WEB-INF/jsp/gxfpWX/poor_home.jsp&cmd.sqlKey=HU_ZAA.POOR_INFO&cmd.sqlType=proc&cmd.QYEAR=2021&cmd.POOR_ID=3ABA0E18AC956DC4E05350021B0AB9F8"})},back:function(){e.navigateBack({delta:1})}}};t.default=i}).call(this,n("543d")["default"])},f9ed:function(e,t,n){"use strict";n.r(t);var a=n("673d"),o=n("818b");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("0738");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"3dfe7578",null,!1,a["a"],c);t["default"]=s.exports}},[["a268","common/runtime","common/vendor"]]]);