(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatTop"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/top.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_chat_chatItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/chat/chatItem.vue */ "./src/components/chat/chatItem.vue");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ "./src/api/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatTop',
  components: {
    ChatItem: _components_chat_chatItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      total: 0,
      topMessages: [],
      count: 7,
      loading: false,
      finished: false,
      error: false
    };
  },
  computed: {
    startId() {
      var _this$topMessages;
      return ((_this$topMessages = this.topMessages) === null || _this$topMessages === void 0 || (_this$topMessages = _this$topMessages[0]) === null || _this$topMessages === void 0 ? void 0 : _this$topMessages.id) || -1;
    },
    role() {
      if (this.$store.state.chat.groupMemberInfo.role === '' || this.$store.state.chat.groupMemberInfo.user_role === '') {
        return '';
      }
      let memberRole = this.$store.state.chat.groupMemberInfo.role === 2 ? 1.5 : this.$store.state.chat.groupMemberInfo.role;
      let role = Math.max(memberRole, this.$store.state.chat.groupMemberInfo.user_role);
      return role;
    },
    groupId() {
      return this.$store.state.chat.groupId;
    }
  },
  watch: {
    '$store.state.ws.chatMsg'(val) {
      if (val.group_id !== this.$store.state.chat.groupId) {
        return;
      }
      if (val.action === 'delete_msg') {
        let index = this.topMessages.findIndex(i => i.id === val.id);
        if (index > -1) {
          this.topMessages.splice(index, 1);
        }
        return;
      }
      if (val.action === 'pin_msg') {
        if (val.msg) {
          let msg = JSON.parse(val === null || val === void 0 ? void 0 : val.msg);
          this.topMessages.push(msg);
        }
        return;
      }
      if (val.action === 'unpin_msg') {
        let index = this.topMessages.findIndex(i => i.id === val.id);
        if (index > -1) {
          this.topMessages[index].is_pined = 0;
        }
        return;
      }
    }
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.isInit = true;
      this.finished = false;
      this.error = false;
      if (!this.loading) {
        this.getPinMsg(-1);
      }
    },
    isShowDate(item, index) {
      if (index === 0) {
        return true;
      }
      let d1 = this.$f.formatDate(item.created_time, 'YYYY-MM-DD');
      let d2 = this.$f.formatDate(this.topMessages[index - 1].created_time, 'YYYY-MM-DD');
      return d1 !== d2;
    },
    getPinMsg(startId = this.startId) {
      if (this.groupId) {
        this.loading = true;
        Object(_api__WEBPACK_IMPORTED_MODULE_3__["getPinMsg"])(this.groupId, this.count, startId).then(res => {
          var _res, _res2, _res3, _res3$map, _this$topMessages2;
          this.finished = ((_res = res) === null || _res === void 0 || (_res = _res.pin_msg) === null || _res === void 0 ? void 0 : _res.length) < this.count;
          this.total = ((_res2 = res) === null || _res2 === void 0 ? void 0 : _res2.total_msg) || 0;
          res = (_res3 = res) === null || _res3 === void 0 || (_res3 = _res3.pin_msg) === null || _res3 === void 0 || (_res3$map = _res3.map) === null || _res3$map === void 0 ? void 0 : _res3$map.call(_res3, i => {
            let j = {
              ...i
            };
            if (i !== null && i !== void 0 && i.to_msg) {
              j.to_msg = JSON.parse(i.to_msg);
            }
            return j;
          });
          let scrollHeight = 0;
          let scrollY = 0;
          if ((_this$topMessages2 = this.topMessages) !== null && _this$topMessages2 !== void 0 && _this$topMessages2[0]) {
            scrollHeight = document.body.scrollHeight;
            scrollY = document.documentElement.scrollTop || window.pageYOffset;
          }
          if (this.isInit) {
            this.topMessages = res;
          } else {
            this.topMessages = res.concat(this.topMessages);
          }
          this.$nextTick(() => {
            if (this.isInit) {
              this.isInit = false;
              this.scrollBottom(true);
            } else {
              // let nextScrollY = document.documentElement.scrollTop || window.pageYOffset
              let nextScrollHeight = document.body.scrollHeight;
              document.scrollingElement.scrollTop = nextScrollHeight - scrollHeight + scrollY;
            }
          });
        }).catch(() => {
          this.error = true;
        }).finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
      }
    },
    handleUnpin(index) {
      this.topMessages.splice(index, 1);
      this.total--;
    },
    onLoad() {
      this.getPinMsg();
    },
    scrollBottom(force = false) {
      let scrollHeight = document.body.scrollHeight;
      let scrollY = document.documentElement.scrollTop || window.pageYOffset;
      let winHeight = window.innerHeight || document.documentElement.clientHeight;
      let offset = scrollHeight - scrollY;
      if (offset > winHeight * 2 && !force) {
        return;
      }
      this.$nextTick(() => {
        setTimeout(() => {
          var _el$scrollIntoView;
          let el = document.querySelector('.scroll-bottom');
          el === null || el === void 0 || (_el$scrollIntoView = el.scrollIntoView) === null || _el$scrollIntoView === void 0 || _el$scrollIntoView.call(el, true);
        }, 10);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-2dff4538"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "top-container"
};
const _hoisted_2 = {
  class: "chat-container"
};
const _hoisted_3 = {
  class: "chat-content"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", {
  class: "scroll-bottom"
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_ChatItem = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChatItem");
  const _component_van_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-list");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2"
  }, {
    title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('topMessages')) + "(" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.total) + ") ", 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_list, {
    loading: $data.loading,
    "onUpdate:loading": _cache[1] || (_cache[1] = $event => $data.loading = $event),
    finished: $data.finished,
    error: $data.error,
    "onUpdate:error": _cache[2] || (_cache[2] = $event => $data.error = $event),
    offset: "200",
    "error-text": _ctx.$t('errorText'),
    onLoad: $options.onLoad,
    direction: "up",
    "loading-text": _ctx.$t('loading'),
    "finished-text": _ctx.$t('hasReachedTop')
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.topMessages, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_ChatItem, {
        key: item.id,
        source: item,
        index: index,
        showDate: $options.isShowDate(item, index),
        isTop: "",
        onOnUnpin: $event => $options.handleUnpin(index, $event)
      }, null, 8 /* PROPS */, ["source", "index", "showDate", "onOnUnpin"]);
    }), 128 /* KEYED_FRAGMENT */)), _hoisted_4])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading", "finished", "error", "error-text", "onLoad", "loading-text", "finished-text"])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".top-container[data-v-2dff4538] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191c32;\n  background: #f2f3f5;\n}\n.chat-container[data-v-2dff4538] {\n  background: #F2F3F5;\n  min-height: calc(100vh - 1rem);\n  padding-bottom: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7682b94c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/chat/top.vue":
/*!********************************!*\
  !*** ./src/views/chat/top.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _top_vue_vue_type_template_id_2dff4538_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top.vue?vue&type=template&id=2dff4538&scoped=true */ "./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true");
/* harmony import */ var _top_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.vue?vue&type=script&lang=js */ "./src/views/chat/top.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true */ "./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_top_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_top_vue_vue_type_template_id_2dff4538_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-2dff4538"],['__file',"src/views/chat/top.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/top.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/chat/top.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./top.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=style&index=0&id=2dff4538&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_style_index_0_id_2dff4538_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_template_id_2dff4538_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./top.vue?vue&type=template&id=2dff4538&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/top.vue?vue&type=template&id=2dff4538&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_top_vue_vue_type_template_id_2dff4538_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);