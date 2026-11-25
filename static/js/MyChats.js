(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyChats"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/myChat.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.js");



let Timer = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyChats",
  data() {
    return {
      pageNO: 0,
      pageSize: 10,
      keyword: '',
      chats: [],
      total: 0,
      loading: false,
      finished: false,
      error: false
    };
  },
  watch: {
    '$store.state.chat.loginVisible'(val) {
      if (!val && this.$store.state.chat.chatToken) {
        this.init();
      }
    },
    '$store.state.chat.setPasswordVisible'(val) {
      if (!val && this.$store.state.chat.chatToken) {
        this.init();
      }
    },
    keyword(val) {
      if (Timer) {
        clearTimeout(Timer);
      }
      if (!val) {
        this.init();
      } else {
        Timer = setTimeout(() => {
          this.init();
        }, 1000);
      }
    }
  },
  activated() {
    this.init1();
  },
  methods: {
    async init1() {
      await this.$store.dispatch('getChatUserInfo');
      this.init();
    },
    init() {
      this.pageNO = 0;
      this.finished = false;
      this.error = false;
      this.getMyChats();
    },
    getMyChats() {
      this.loading = true;
      let address = this.$store.state.currentAccount;
      let chain = this.$store.getters.netId;
      let userId = '';
      if (address && chain) {
        userId = address + '-' + chain;
      }
      let unReadMsg = [];
      let chatLastMsg = this.$store.state.chat.chatLastMsgTimeObj[userId];
      if (userId && chatLastMsg) {
        unReadMsg = Object.keys(chatLastMsg).map(i => ({
          groupId: i,
          time: chatLastMsg[i]
        }));
      }
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["getMyChats"])(this.pageNO, this.pageSize, this.keyword, unReadMsg).then(res => {
        console.log('getMyChats', res);
        if (this.pageNO === 0) {
          this.chats = [];
        }
        this.total = res.total;
        this.chats = this.chats.concat(res.groups);
        if (this.chats.length >= this.total || res.groups.length < this.pageSize) {
          this.finished = true;
        } else {
          this.pageNO++;
        }
      }).catch(() => {
        this.error = true;
      }).finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
    },
    onSearch() {
      if (Timer) {
        clearTimeout(Timer);
      }
      this.init();
    },
    goChat(item) {
      this.$router.push({
        name: 'Chat',
        params: {
          id: item.id
        }
      });
    },
    leaveChatGroup(item) {
      this.$dialog.confirm({
        message: this.$t('confirmLeaveChat'),
        allowHtml: false,
        messageAlign: 'center',
        closeOnPopstate: true,
        confirmButtonText: this.$t('confirm'),
        confirmButtonColor: '#3F80F7',
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_2__["leaveChatGroup"])(item.id).then(res => {
          toast.clear();
          this.init();
        }).catch(err => {
          this.$toast({
            message: err,
            position: 'top'
          });
        });
      }).catch(() => {
        // on cancel
        this.$store.state.chat.checkAuthVisible = false;
      });
    },
    formatCalendar(time) {
      let isToday = this.$dayjs(time * 1000).isToday();
      if (isToday) {
        return this.$dayjs(time * 1000).format('HH:mm');
      }
      let isYesterday = this.$dayjs(time * 1000).isYesterday();
      if (isYesterday) {
        return this.$t('yesterday') + ' ' + this.$dayjs(time * 1000).format('HH:mm');
      }
      let isYear = new Date().getFullYear() === new Date(time * 1000).getFullYear();
      if (isYear) {
        return this.$dayjs(time * 1000).format('MM-DD HH:mm');
      }
      return this.$dayjs(time * 1000).format('YYYY-MM-DD HH:mm');
    },
    back() {
      var _this$$f$androidGloba;
      if ((_this$$f$androidGloba = this.$f.androidGlobal()) !== null && _this$$f$androidGloba !== void 0 && _this$$f$androidGloba.back) {
        var _this$$f$androidGloba2, _this$$f$androidGloba3;
        (_this$$f$androidGloba2 = this.$f.androidGlobal()) === null || _this$$f$androidGloba2 === void 0 || (_this$$f$androidGloba3 = _this$$f$androidGloba2.back) === null || _this$$f$androidGloba3 === void 0 || _this$$f$androidGloba3.call(_this$$f$androidGloba2);
      } else {
        this.$f.goBack();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-179d63be"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "myChat-container"
};
const _hoisted_2 = {
  action: "/"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  class: "center"
};
const _hoisted_5 = {
  key: 0,
  class: "icon-svg icon-renzheng",
  "aria-hidden": "true"
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-renzheng"
}, null, -1 /* HOISTED */));
const _hoisted_7 = [_hoisted_6];
const _hoisted_8 = {
  class: "center-bottom"
};
const _hoisted_9 = {
  key: 0,
  class: "un-receive"
};
const _hoisted_10 = {
  class: "right"
};
const _hoisted_11 = {
  key: 0
};
const _hoisted_12 = {
  key: 1,
  class: "tag"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_search = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-search");
  const _component_van_sticky = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-sticky");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_swipe_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-cell");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-list");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: $options.back,
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('myChats')
  }, null, 8 /* PROPS */, ["onClickLeft", "title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_sticky, {
    "offset-top": "1rem"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("form", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_search, {
      modelValue: $data.keyword,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.keyword = $event),
      modelModifiers: {
        trim: true
      },
      background: "#fff",
      shape: "round",
      placeholder: _ctx.$t('search1'),
      onSearch: $options.onSearch
    }, null, 8 /* PROPS */, ["modelValue", "placeholder", "onSearch"])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_list, {
    loading: $data.loading,
    "onUpdate:loading": _cache[1] || (_cache[1] = $event => $data.loading = $event),
    finished: $data.finished,
    error: $data.error,
    "onUpdate:error": _cache[2] || (_cache[2] = $event => $data.error = $event),
    "error-text": _ctx.$t('errorText'),
    onLoad: $options.getMyChats,
    "loading-text": _ctx.$t('loading'),
    "finished-text": _ctx.$t('noMore'),
    "immediate-check": false
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.chats, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe_cell, {
        key: index
      }, {
        right: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
          square: "",
          type: "danger",
          text: _ctx.$t('exitChat'),
          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.leaveChatGroup(item), ["stop"])
        }, null, 8 /* PROPS */, ["text", "onClick"])]),
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", {
          class: "li-item",
          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goChat(item), ["stop"])
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
          round: "",
          width: "0.96rem",
          height: "0.96rem",
          "icon-size": "0.96rem",
          "lazy-load": "",
          "show-loading": "",
          src: (item === null || item === void 0 ? void 0 : item.image) || _ctx.$f.formatIcon(item.id),
          "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
        }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.nickname || item.name) + " ", 1 /* TEXT */), item !== null && item !== void 0 && item.provider_count && (item === null || item === void 0 ? void 0 : item.provider_count) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", _hoisted_5, _hoisted_7)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.total_members) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('members')), 1 /* TEXT */)]), item.UnReceivedRedPacket_count > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('unReceivedRedPacket', {
          n: item.UnReceivedRedPacket_count
        })), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [item.lastchated ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatCalendar(item.lastchated)), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), (item === null || item === void 0 ? void 0 : item.unreadmsg_count) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.unreadmsg_count > 99 ? '99+' : item.unreadmsg_count), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])], 8 /* PROPS */, _hoisted_3)]),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */);
    }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
      class: "empty",
      image: _ctx.emptyNoDataLight,
      description: _ctx.$t('emptyData')
    }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.chats && $data.chats.length === 0 && !$data.loading]])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading", "finished", "error", "error-text", "onLoad", "loading-text", "finished-text"])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".myChat-container[data-v-179d63be] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191c32;\n  --van-cell-background-color: #fff;\n  background: #fff;\n  min-height: 100vh;\n  padding-bottom: 0.4rem;\n}\n.myChat-container[data-v-179d63be]  .van-swipe-cell__right {\n  display: flex;\n  align-items: center;\n}\n.icon-copy-o[data-v-179d63be] {\n  color: #999;\n}\n.li-item[data-v-179d63be] {\n  display: flex;\n  align-items: center;\n  font-size: 0.32rem;\n  color: #333333;\n  font-weight: 400;\n  padding: 0.24rem 0.28rem;\n}\n.li-item[data-v-179d63be]:active {\n  opacity: 0.5;\n}\n.center[data-v-179d63be] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0 0.24rem;\n}\n.center-bottom[data-v-179d63be] {\n  font-size: 0.28rem;\n  color: #999999;\n  font-weight: 400;\n  margin-top: 0.1rem;\n}\n.un-receive[data-v-179d63be] {\n  font-size: 0.24rem;\n  background: red;\n  border-radius: 0.08rem;\n  padding: 0.08rem 0.2rem;\n  color: #fff;\n  margin-right: 0.2rem;\n}\n.right[data-v-179d63be] {\n  font-size: 0.24rem;\n  color: #999999;\n  font-weight: 400;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.right .tag[data-v-179d63be] {\n  background: #3F80F7;\n  border-radius: 0.2rem;\n  font-size: 0.24rem;\n  color: #FFFFFF;\n  font-weight: 400;\n  padding: 0.04rem 0.1rem;\n  margin-top: 0.1rem;\n  min-width: 0.4rem;\n  text-align: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("17614278", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/myChat.vue":
/*!******************************!*\
  !*** ./src/views/myChat.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myChat_vue_vue_type_template_id_179d63be_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myChat.vue?vue&type=template&id=179d63be&scoped=true */ "./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true");
/* harmony import */ var _myChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myChat.vue?vue&type=script&lang=js */ "./src/views/myChat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true */ "./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_myChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_myChat_vue_vue_type_template_id_179d63be_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-179d63be"],['__file',"src/views/myChat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/myChat.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./src/views/myChat.vue?vue&type=script&lang=js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./myChat.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=style&index=0&id=179d63be&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_style_index_0_id_179d63be_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true":
/*!************************************************************************!*\
  !*** ./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true ***!
  \************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_template_id_179d63be_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./myChat.vue?vue&type=template&id=179d63be&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/myChat.vue?vue&type=template&id=179d63be&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_myChat_vue_vue_type_template_id_179d63be_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);