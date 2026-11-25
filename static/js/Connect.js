(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Connect"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/wallet/connect.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_connectWallet2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/connectWallet2.vue */ "./src/components/connectWallet2.vue");
/* harmony import */ var _utils_metaMask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/metaMask.js */ "./src/utils/metaMask.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ConnectWallet2: _components_connectWallet2_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      isEvm: window.ethereum || true,
      isTron: !!window.tronLink
      // step: 1,
      // showConnect: false,
      // active: '1'
    };
  },
  created() {
    this.initMeta();
  },
  activated() {
    this.initMeta();
  },
  mounted() {
    this.getMetaMask();
  },
  watch: {
    '$store.state.currentAccount'(val) {
      if (!val) {} else {
        this.$router.push({
          name: 'Wallet'
        });
      }
    },
    '$route'() {
      this.initMeta();
      // document.title = to.meta.title + ' - ID: ' + to.params.id;
    }
  },
  // beforeRouteEnter(to, from, next) {
  //     if(to.path==='/connect/1'){
  //       to.meta={
  //         title: 1,
  //         headerHidden: true,
  //       }
  //     } else if(to.path==='/connect/2'){
  //       to.meta={
  //         title: 2,
  //         titleI18n: "connectWallet1",
  //         headerHidden: true,
  //         navShow: true,
  //         tabBarHidden: false,
  //       }
  //     }
  //     next();
  // },
  methods: {
    getMetaMask() {
      Object(_utils_metaMask_js__WEBPACK_IMPORTED_MODULE_1__["getMetaMask"])().then(res => {
        if (res) {
          this.isEvm = true;
        } else {
          this.isEvm = false;
        }
      }).catch(() => {
        this.isEvm = false;
      });
    },
    next() {
      this.$router.push({
        name: 'Connect',
        params: {
          id: 2
        }
        // title: i18n.global.t("connectWallet1"),
        // headerHidden: true,
        // meta:{ 
        //   title: this.$t("connectWallet1"),
        //   titleI18n: "connectWallet1",
        //   headerHidden: true,
        //   navShow: true,
        //   tabBarHidden: false,
        // }
      });
    },
    initMeta() {
      console.log('initMeta', this.$store.state);
      if (this.$route.path === '/connect/1') {
        // document.title = this.$t('connectWallet1')
        this.$route.meta = {
          title: 1,
          headerHidden: true
        };
      } else if (this.$route.path === '/connect/2') {
        this.$route.meta = {
          title: 2,
          titleI18n: "connectWallet1",
          headerHidden: true,
          navShow: true,
          tabBarHidden: false
        };
      }
    },
    openConnect(type) {
      console.log(type);
      // this.active = type
      if ('0' === type) {
        window.location.href = `https://t.me/AveSniperBot`;
      } else {
        this.$store.commit('changeConnectVisible', true);
        this.$store.commit('setConnectActive', type);
      }
    }
  },
  computed: {
    list1() {
      return !this.isEvm && !this.isTron ? [{
        title: this.$t('watchWallet'),
        subTitle: this.$t('connectSubTitle3'),
        icon: __webpack_require__(/*! @/assets/images/connect/watch.svg */ "./src/assets/images/connect/watch.svg"),
        active: '1'
      }, {
        title: this.$t('goToTgWallet'),
        subTitle: this.$t('connectSubTitle0'),
        icon: __webpack_require__(/*! @/assets/images/connect/tgBot.svg */ "./src/assets/images/connect/tgBot.svg"),
        active: '0'
      }, {
        title: this.$t('importCode1'),
        subTitle: this.$t('connectSubTitle4'),
        icon: __webpack_require__(/*! @/assets/images/connect/import.svg */ "./src/assets/images/connect/import.svg"),
        active: '3'
      }] : [{
        title: this.$t('connectWallet1'),
        subTitle: this.$t('connectSubTitle2'),
        icon: __webpack_require__(/*! @/assets/images/connect/link.svg */ "./src/assets/images/connect/link.svg"),
        active: '2'
      }, {
        title: this.$t('goToTgWallet'),
        subTitle: this.$t('connectSubTitle0'),
        icon: __webpack_require__(/*! @/assets/images/connect/tgBot.svg */ "./src/assets/images/connect/tgBot.svg"),
        active: '0'
      }, {
        title: this.$t('watchWallet'),
        subTitle: this.$t('connectSubTitle3'),
        icon: __webpack_require__(/*! @/assets/images/connect/watch.svg */ "./src/assets/images/connect/watch.svg"),
        active: '1'
      }, {
        title: this.$t('importCode1'),
        subTitle: this.$t('connectSubTitle4'),
        icon: __webpack_require__(/*! @/assets/images/connect/import.svg */ "./src/assets/images/connect/import.svg"),
        active: '3'
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_connect_loginBg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/connect/loginBg.png */ "./src/assets/images/connect/loginBg.png");
/* harmony import */ var _assets_images_connect_loginBg_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_connect_loginBg_png__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-fc78e924"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0,
  class: "w-content"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "w-bg"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "loginBg",
  src: _assets_images_connect_loginBg_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: ""
})], -1 /* HOISTED */));
const _hoisted_3 = {
  class: "w-info flex-center mb_20"
};
const _hoisted_4 = {
  key: 1,
  class: "w-content"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = {
  class: "m-left flex-start2"
};
const _hoisted_7 = {
  class: "flex-start"
};
const _hoisted_8 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  return _ctx.$route.path == '/connect/1' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('connectWallet')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('connectWalletTip')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    class: "button",
    onClick: $options.next,
    type: "primary",
    block: ""
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('connectWallet')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])) : _ctx.$route.path == '/connect/2' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_4, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.list1, item => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      class: "m-item mt_20 flex-between",
      onClick: $event => $options.openConnect(item.active)
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.title), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span v-if=\"item.active==='0'\" class=\"tag-new\">New</span> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.subTitle), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
      src: item.icon,
      alt: "",
      style: {
        "width": "0.88rem",
        "height": "0.88rem"
      }
    }, null, 8 /* PROPS */, _hoisted_8)], 8 /* PROPS */, _hoisted_5);
  }), 256 /* UNKEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-content[data-v-fc78e924] {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 0.48rem;\n}\n.w-content .m-item[data-v-fc78e924] {\n  width: 100%;\n  padding: 0.4rem 0.28rem;\n  background-color: #FAFAFA;\n  border-radius: 0.16rem;\n}\n.w-content .m-item .m-left[data-v-fc78e924] > :nth-child(1) {\n  font-weight: 500;\n  font-size: 0.32rem;\n  line-height: 0.4rem;\n  color: #333333;\n  margin-bottom: 0.2rem;\n}\n.w-content .m-item .m-left[data-v-fc78e924] > :nth-child(2) {\n  font-weight: 400;\n  font-size: 0.24rem;\n  line-height: 0.32rem;\n  color: #959A9F;\n}\n.w-content .w-bg[data-v-fc78e924] {\n  display: flex;\n  width: 100%;\n  height: 5.74rem;\n  padding: 12.6777251185vh 0.64rem 0.4rem 0.64rem;\n}\n.w-content .w-bg .loginBg[data-v-fc78e924] {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n.w-content > .button[data-v-fc78e924] {\n  border-radius: 0.16rem;\n}\n.w-content .w-info[data-v-fc78e924] {\n  display: inline-block;\n  width: 100%;\n  font-weight: 500;\n  line-height: 160%;\n  font-size: 0.48rem;\n  text-align: center;\n  vertical-align: middle;\n  color: #333333;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bd499a2e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/connect/import.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/connect/import.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/import.37d26075.svg";

/***/ }),

/***/ "./src/assets/images/connect/link.svg":
/*!********************************************!*\
  !*** ./src/assets/images/connect/link.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/link.4ed3d81e.svg";

/***/ }),

/***/ "./src/assets/images/connect/loginBg.png":
/*!***********************************************!*\
  !*** ./src/assets/images/connect/loginBg.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/loginBg.e5369a04.png";

/***/ }),

/***/ "./src/assets/images/connect/tgBot.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/connect/tgBot.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/tgBot.b24b044d.svg";

/***/ }),

/***/ "./src/assets/images/connect/watch.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/connect/watch.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/watch.90f84ce0.svg";

/***/ }),

/***/ "./src/views/wallet/connect.vue":
/*!**************************************!*\
  !*** ./src/views/wallet/connect.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _connect_vue_vue_type_template_id_fc78e924_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect.vue?vue&type=template&id=fc78e924&scoped=true */ "./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true");
/* harmony import */ var _connect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect.vue?vue&type=script&lang=js */ "./src/views/wallet/connect.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true */ "./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_connect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_connect_vue_vue_type_template_id_fc78e924_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-fc78e924"],['__file',"src/views/wallet/connect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/wallet/connect.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/views/wallet/connect.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./connect.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=style&index=0&id=fc78e924&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_style_index_0_id_fc78e924_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_template_id_fc78e924_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./connect.vue?vue&type=template&id=fc78e924&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/wallet/connect.vue?vue&type=template&id=fc78e924&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_connect_vue_vue_type_template_id_fc78e924_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);