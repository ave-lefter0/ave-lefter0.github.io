(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UserInfo"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/userInfo.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropper_h5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropper-h5 */ "./node_modules/vue-cropper-h5/dist/H5Cropper.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ "./src/api/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserInfo',
  components: {
    H5Cropper: vue_cropper_h5__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {
      option: {
        cancelButtonText: this.$t('cancel'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonBackgroundColor: '#fff',
        confirmButtonBackgroundColor: '#558BED',
        cancelButtonTextColor: '#323233',
        confirmButtonTextColor: '#fff',
        outputSize: 0.1,
        high: false,
        maxImgSize: 500,
        enlarge: 0.5
      },
      loading: false,
      nickname: 'xxx',
      form: {
        nickname: ''
      },
      editNicknameLoading: false,
      dialogVisible: false
    };
  },
  computed: {},
  watch: {
    '$store.state.chat.chatToken'(val) {
      if (val) {
        this.init();
      }
    }
  },
  created() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.$store.dispatch('getChatUserInfo');
    },
    getFile(file) {
      console.log(file);
      if (this.loading) {
        return;
      }
      let data = {
        profile_picture: file
      };
      let toast = this.$toast.loading({
        forbidClick: false,
        duration: 0
      });
      this.loading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["uploadAvatar"])(data).then(res => {
        console.log(res);
        // this.$notify({ type: 'success', message: this.$t('success') })
        this.$toast({
          message: this.$t('success'),
          position: 'top'
        });
        this.$store.dispatch('getChatUserInfo');
      }).catch(err => {
        console.log(err);
        // this.$notify({ type: 'danger', message: err })
        this.$toast({
          message: err,
          position: 'top'
        });
      }).finally(() => {
        toast.clear();
        this.loading = false;
      });
    },
    handleUpload() {
      document.querySelector('.cropper-input-file input[type=file]').click();
    },
    handleEditNickname() {
      var _this$$store$state$ch;
      this.dialogVisible = true;
      this.form.nickname = ((_this$$store$state$ch = this.$store.state.chat) === null || _this$$store$state$ch === void 0 || (_this$$store$state$ch = _this$$store$state$ch.userInfo) === null || _this$$store$state$ch === void 0 ? void 0 : _this$$store$state$ch.nickname) || '';
    },
    editNickname() {
      this.$toast.loading({
        forbidClick: false,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateNickname"])(this.form.nickname).then(res => {
        console.log(res);
        // this.$notify({ type: 'success', message: this.$t('success') })
        this.$toast({
          message: this.$t('success'),
          position: 'top'
        });
        this.$store.dispatch('getChatUserInfo');
        this.dialogVisible = false;
      }).catch(err => {
        console.log(err);
        // this.$notify({ type: 'danger', message: err })
        this.$toast({
          message: err,
          position: 'top'
        });
      }).finally(() => {
        this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-68a48846"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chatPerson-container"
};
const _hoisted_2 = {
  class: "popup-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_van_cell_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell-group");
  const _component_h5_cropper = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("h5-cropper");
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_form = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-form");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('personalInformation')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell_group, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _ctx$$f$formatAddress, _ctx$$f;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        title: _ctx.$t('avatar'),
        "is-link": "",
        center: "",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.handleUpload, ["stop"]),
        size: "large"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_ctx.$store.state.chat.userInfo.image ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
          key: 0,
          round: "",
          width: "0.6rem",
          height: "0.6rem",
          "icon-size": "0.6rem",
          "lazy-load": "",
          "show-loading": "",
          src: _ctx.$store.state.chat.userInfo.image
        }, null, 8 /* PROPS */, ["src"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title", "onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        title: _ctx.$t('nickname'),
        "is-link": "",
        center: "",
        value: _ctx.$store.state.chat.userInfo.nickname,
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.handleEditNickname, ["stop"]),
        size: "large"
      }, null, 8 /* PROPS */, ["title", "value", "onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        title: _ctx.$t('userAddress'),
        center: "",
        value: ((_ctx$$f$formatAddress = (_ctx$$f = _ctx.$f).formatAddress) === null || _ctx$$f$formatAddress === void 0 ? void 0 : _ctx$$f$formatAddress.call(_ctx$$f, _ctx.$store.state.chat.userInfo.address, 6)) || '',
        size: "large"
      }, null, 8 /* PROPS */, ["title", "value"])];
    }),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_h5_cropper, {
    class: "cropper-input-file",
    ref: "cropper",
    option: $data.option,
    onGetFile: $options.getFile
  }, null, 8 /* PROPS */, ["option", "onGetFile"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popup, {
    show: $data.dialogVisible,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => $data.dialogVisible = $event),
    class: "popup-container",
    closeable: true,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "center",
    teleport: "#app",
    style: {
      width: '90%',
      'min-height': '20vh'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('editNickname')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "popup-content",
      onSubmit: $options.editNickname
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
        class: "b-filed",
        modelValue: $data.form.nickname,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.form.nickname = $event),
        label: "",
        placeholder: _ctx.$t('enterNickname'),
        clearable: "",
        rules: [{
          required: true,
          message: _ctx.$t('enterNickname')
        }]
      }, null, 8 /* PROPS */, ["modelValue", "placeholder", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "form-submit",
        block: "",
        round: "",
        "native-type": "submit",
        type: "primary",
        loading: $data.editNicknameLoading
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm1')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading"])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatPerson-container[data-v-68a48846] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191C32;\n  --van-cell-background-color: #fff;\n  background: #F8F8F8;\n  min-height: 100vh;\n}\n.chatPerson-container .cropper-input-file[data-v-68a48846] {\n  height: 0;\n}\n.form-submit[data-v-68a48846] {\n  margin: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b26d7b66", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/chat/userInfo.vue":
/*!*************************************!*\
  !*** ./src/views/chat/userInfo.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userInfo_vue_vue_type_template_id_68a48846_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInfo.vue?vue&type=template&id=68a48846&scoped=true */ "./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true");
/* harmony import */ var _userInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInfo.vue?vue&type=script&lang=js */ "./src/views/chat/userInfo.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true */ "./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_userInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_userInfo_vue_vue_type_template_id_68a48846_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-68a48846"],['__file',"src/views/chat/userInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/userInfo.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/views/chat/userInfo.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./userInfo.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=style&index=0&id=68a48846&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_style_index_0_id_68a48846_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_template_id_68a48846_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./userInfo.vue?vue&type=template&id=68a48846&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/userInfo.vue?vue&type=template&id=68a48846&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userInfo_vue_vue_type_template_id_68a48846_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);