(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/msgList/msgList"],{

/***/ 27:
/*!**************************************************************************************!*\
  !*** D:/WorkAndLearn/ruixun/sy_project/main.js?{"page":"pages%2FmsgList%2FmsgList"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _msgList = _interopRequireDefault(__webpack_require__(/*! ./pages/msgList/msgList.vue */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_msgList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 28:
/*!*******************************************************************!*\
  !*** D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msgList.vue?vue&type=template&id=11aba2f4&scoped=true&name=sy& */ 29);
/* harmony import */ var _msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msgList.vue?vue&type=script&lang=js& */ 31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msgList.vue?vue&type=style&index=0&id=11aba2f4&lang=scss&scoped=true& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["render"],
  _msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11aba2f4",
  null,
  false,
  _msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/msgList/msgList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/*!**********************************************************************************************************************!*\
  !*** D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=template&id=11aba2f4&scoped=true&name=sy& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msgList.vue?vue&type=template&id=11aba2f4&scoped=true&name=sy& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_template_id_11aba2f4_scoped_true_name_sy___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 30:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=template&id=11aba2f4&scoped=true&name=sy& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniHeader: function() {
      return __webpack_require__.e(/*! import() | components/uni-header/uni-header */ "components/uni-header/uni-header").then(__webpack_require__.bind(null, /*! @/components/uni-header/uni-header.vue */ 339))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 31:
/*!********************************************************************************************!*\
  !*** D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msgList.vue?vue&type=script&lang=js& */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































var _config = _interopRequireDefault(__webpack_require__(/*! ../../config.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { name: 'sy', props: {}, data: function data() {return { barheight: '', scrollerHeight: "", title: '消息中心', isMore: false, noMore: false, pageNum: 1, pageSize: 15, userId: "", refresherTriggered: false, _refresherTriggered: false, msgList: [], whlbIndex: 0, keyWord: '', QID: '', list: [{ SENDTIME: "sdfsdfds", CONTENT: 2 }, { SENDTIME: "sdfsdfds", CONTENT: 2 }] };}, onShow: function onShow() {var _this = this;
    // uni.$on('changeMsg',function(data){
    // 	console.log(11);
    // 	_this.list=[];
    // 	_this.getzcwh(); 
    // })
  },
  onLoad: function onLoad(params) {
    if (params.QID) {
      this.QID = params.QID;
    };
    this.getOpenId();
    this.$hideLoading();
    this.userId = uni.getStorageSync('userId');
    if (params.index) {
      this.whlbIndex = params.index;
    }
  },
  mounted: function mounted() {
    this.barheight = this.$store.state.barHeight;
    var _this = this;
    _this.getHeight();
    // _this.getzcwh();
  },
  methods: {
    getData: function getData() {
      uni.showLoading();
      var _this = this;
      this.$api.totuisong({
        'cmd.OPENID': uni.getStorageSync('openId'),
        'cmd.QID': _this.QID }).
      then(function (res) {

      }).catch(function (err) {

      });
      this.$api.getMsg({
        'cmd.USER_ID': _this.userId }).
      then(function (res) {
        console.log(res[0].UTIL_LIST);
        _this.msgList = res[0].UTIL_LIST;
      }).catch(function (err) {
        uni.hideLoading();
        _this.$toast(err);
      });
    },
    getOpenId: function getOpenId() {var _this2 = this;
      //AppSecret小程序密钥：3a3d10db6b97a7ba8aacb68129bdacd1
      //wx188b70d363e4dc3e 
      var _this = this;
      _this.$showLoading();
      if (!uni.getStorageSync('openId')) {
        uni.login({
          provider: 'weixin',
          success: function success(res) {
            console.log('登录成功：', res);
            //获取临时登录凭证code
            _this2.Code = res.code;
            console.log(res);
            uni.request({
              url: _config.default.baseUrl + '/GetOpenId?js_code=' + res.code + '&tdsourcetag=s_pcqq_aiomsg',
              method: 'post',
              success: function success(res) {
                uni.setStorageSync('openId', res.data.openid);
                _this.openId = uni.getStorageSync('openId');
                _this.getRole();
              } });

            //获取openid，session_key
            // 			let appid = "wx188b70d363e4dc3e" //需替换
            // 			let secret = "3a3d10db6b97a7ba8aacb68129bdacd1" //需替换
            // 			let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
            // 				'&js_code=' +
            // 				this.Code + '&grant_type=authorization_code';
            // 			uni.request({
            // 				url: url, // 请求路径
            // 				success: res => {
            // 					console.log(res);
            // 					if(res.statusCode=='200'){
            // 						uni.setStorageSync('openId',res.data.openid)
            // 					}
            // 					// console.log('openid session_key:', res.data);
            // 					// this.openid = res.data.openid
            // 					// this.session_key = res.data.session_key

            // 					// //获取用户信息
            // 					// uni.getUserInfo({
            // 					// 	provider: 'weixin',
            // 					// 	success: res => {
            // 					// 		console.log('获取用户信息', res);
            // 					// 		//解密encryptedData，可获取用户openId
            // 					// 		let pc = new WXBizDataCrypt(appid, this.session_key);
            // 					// 		let data = pc.decryptData(res.encryptedData, res.iv);
            // 					// 		console.log('解密后：', data)
            // 					// 	},
            // 					// 	fail: err => {
            // 					// 		console.log('获取用户信息错误：', err)
            // 					// 	}
            // 					// })

            // 				},
            // 				fail: err => {
            // 					console.log('请求失败：', err)
            // 				}
            // 			});
          },
          fail: function fail(err) {
            console.log('登录失败：', err);
          } });

      } else {
        console.log(2);
        _this.openId = uni.getStorageSync('openId');
        _this.getRole();

      }
    },
    getRole: function getRole() {
      var _this = this;
      uni.request({
        url: _config.default.baseUrl + '/LoginByOpenId', //仅为示例，并非真实接口地址。 
        header: {
          'Content-Type': 'application/x-www-form-urlencoded' },

        data: {
          'openId': _this.openId },

        method: 'POST', //请求方式  或GET，必须为大写
        success: function success(res) {
          console.log(443);
          console.log(res.data);
          if (res.data.StatusCode == '200') {
            _this.$store.commit('login', res.data.JESSIONID);
            _this.$store.commit('setUser', res.data.USERNAME);
            _this.$store.commit('setPhone', res.data.PHONE);
            _this.$store.commit('setUserId', res.data.USERID);
            uni.setStorageSync('userName', res.data.LOGINNAME);
            _this.openId = uni.getStorageSync('openId');
            _this.zhName = uni.getStorageSync('zhName');
            _this.userId = uni.getStorageSync('userId');
            _this.avatarUrl = uni.getStorageSync('avatarUrl');
            // var arr = [];
            // res.data.MENULIST.forEach(item => {
            // 	arr.push(item.ID)
            // });
            // uni.setStorageSync('cardBool', arr.join(','));
            // _this.cardBool = uni.getStorageSync('cardBool');
            // if (_this.cardBool.includes('20181207094553190007100000208811')) {
            // 	_this.getNums();
            // };
            // _this.getshNums(); 
            _this.getData();
          } else {
            _this.$toast(res.data.Message);
            setTimeout(function () {
              uni.reLaunch({
                url: '../index/index' });

            }, 1000);

          }
        },
        fail: function fail(err) {
          console.log(err);
          uni.showToast({
            icon: 'none',
            title: '请求出错: ' + err,
            duration: 2000 });

        } });

      //    this.$api.sfOpenid({
      // 	openId:this.openId
      // }).then(res=>{
      // 	console.log(res); 
      // 	if(res.StatusCode=='200'){
      // 		uni.$toast(res.RETDESC)
      // 	}; 

    },

    getHeight: function getHeight() {
      var _this = this;
      var query = uni.createSelectorQuery().in(this);
      query.select('#wrap').boundingClientRect(function (data) {
        _this.scrollerHeight = data.height;
      }).exec();
      _this.$nextTick(function () {
        query.select('#header').boundingClientRect(function (data) {
          _this.scrollerHeight = _this.scrollerHeight - data.height + 'px';
        }).exec();
      });
      // _this.$nextTick(function() {
      // 	query.select('#search_result').boundingClientRect(data => {
      // 		_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px';
      // 	}).exec();
      // });
      // _this.$nextTick(function() {
      // 	query.select('#search_wrap').boundingClientRect(data => {
      // 		_this.scrollerHeight = (_this.scrollerHeight - data.height)+'px';
      // 	}).exec();
      // });

    },
    getzcwh: function getzcwh() {var _this3 = this;
      var _this = this;
      this.list = [];
      uni.showLoading();
      this.$api.getMsg({
        'cmd.USER_ID': uni.getStorageSync('userId'),
        'cmd.QOPENID': uni.getStorageSync('openId') }).
      then(function (res) {
        console.log(res);
        uni.hideLoading();
        _this3.list = _this3.list.concat(res[0].UTIL_LIST);
      }).catch(function (err) {
        uni.hideLoading();
        _this.$toast(err);
      });
    },
    search: function search() {
      this.pageNum = 1;
      this.list = [];
      this.getzcwh();
    },
    back: function back() {
      uni.reLaunch({
        url: '../index/index' });

    },
    dkDetail: function dkDetail(id) {
      uni.navigateTo({
        url: '/pages/msgList/msgListDetailCopy?ID=' + id });

    },
    changeWhlb: function changeWhlb(index) {
      this.whlbIndex = index;
      this.pageNum = 1;
      this.list = [];
      this.getzcwh();
    },
    navigateTo: function navigateTo(e) {
      var url = e.currentTarget.dataset.url;
      console.log(url);
      uni.navigateTo({
        url: '/pages' + url });

    },
    handleMsg: function handleMsg(item) {
      if (item.QTYPE == '1') {
        uni.navigateTo({
          url: '../webview/webview?type=sjhs' });

      };
      if (item.QTYPE == '2') {
        uni.navigateTo({
          url: '../webview/webview?type=sjhs3' });

      };
      if (item.QTYPE == '4') {
        uni.navigateTo({
          url: '../webview/webview?type=xjhs' });

      };
      if (item.QTYPE == '3') {
        uni.navigateTo({
          url: '../webview/webview?type=xjhs3' });

      };
    },
    upper: function upper() {
      //console.log('上拉刷新');
      this.pageNum = 1;
      this.list = [];
      this.getzcwh();
    },
    lower: function lower() {
      //console.log("下拉加载更多");
      this.pageNum++;
      this.isMore = true;
      this.getzcwh();
      // if (JSON.stringify(this.searchlist) != "{}") {
      // 	this.zgSearch();
      // } else {
      // 	this.getData();
      // }
    },
    refresherrefresh: function refresherrefresh() {
      //console.log("自定义下拉刷新被触发");
      var _this = this;
      if (_this._refresherTriggered) {
        return;
      }
      _this._refresherTriggered = true;
      //界面下拉触发，triggered可能不是true，要设为true
      if (!_this.refresherTriggered) {
        _this.refresherTriggered = true;
      };
      this.pageNum = 1;
      this.noMore = false;
      _this.list = [];
      this.getzcwh();
      // if (JSON.stringify(this.searchlist) != "{}") {
      // 	this.zgSearch();
      // } else {
      // 	this.getData();
      // }
      // this.getData()
    },
    refresherrestore: function refresherrestore() {
      var _this = this;
      _this.refresherTriggered = false;
      _this._refresherTriggered = false;
    },
    refresherabort: function refresherabort() {
      var _this = this;
      _this.refresherTriggered = false;
      _this._refresherTriggered = false;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 33:
/*!*****************************************************************************************************************************!*\
  !*** D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=style&index=0&id=11aba2f4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msgList.vue?vue&type=style&index=0&id=11aba2f4&lang=scss&scoped=true& */ 34);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msgList_vue_vue_type_style_index_0_id_11aba2f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 34:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WorkAndLearn/ruixun/sy_project/pages/msgList/msgList.vue?vue&type=style&index=0&id=11aba2f4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[27,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/msgList/msgList.js.map