(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatNewPayment"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatNewPayment',
  data() {
    return {
      loadingTransfer: false,
      loadingCheck: false,
      tx: '',
      loadingAllow: false
    };
  },
  computed: {
    groupId() {
      return this.$store.state.chat.groupId;
    },
    lang() {
      return this.$store.getters.language;
    },
    fromAddress() {
      return this.$store.state.currentAccount;
    },
    toAddress() {
      var _this$$store$state$ch;
      return ((_this$$store$state$ch = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch === void 0 ? void 0 : _this$$store$state$ch.ave_chat_usdt_to_address) || '';
    },
    tokenAddress() {
      if (this.$store.getters.netId === 'oec') {
        var _this$$store$state$ch2;
        return (_this$$store$state$ch2 = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch2 === void 0 ? void 0 : _this$$store$state$ch2.ave_chat_usdt_address_oec;
      }
      if (this.$store.getters.netId === 'bsc') {
        var _this$$store$state$ch3;
        return (_this$$store$state$ch3 = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch3 === void 0 ? void 0 : _this$$store$state$ch3.ave_chat_usdt_address_bsc;
      }
      return '';
    },
    amount() {
      if (this.$route.params.type == 'burn') {
        var _this$$store$state$ch4;
        return ((_this$$store$state$ch4 = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch4 === void 0 ? void 0 : _this$$store$state$ch4.ave_chat_usdt_count) || '';
      } else {
        var _this$$store$state$ch5;
        return ((_this$$store$state$ch5 = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch5 === void 0 ? void 0 : _this$$store$state$ch5.ave_chat_usdt_count_register) || '';
      }
    },
    currentChain() {
      if (this.$store.getters.netId === 'oec') {
        return {
          title: 'OKC',
          chainId: 66,
          chain: 'oec'
        };
      }
      if (this.$store.getters.netId === 'bsc') {
        return {
          title: 'BSC',
          chainId: 56,
          chain: 'bsc'
        };
      }
      return {};
    },
    loading() {
      return this.loadingTransfer || this.loadingCheck;
    },
    allUserTokenList() {
      return this.$store.getters.balanceTokens || [];
    }
  },
  watch: {
    '$store.state.currentAccount'(val) {
      if (val && this.$route.name === 'ChatNewPayment' && val !== localStorage.currentAccount) {
        this.$router.push(`/chat/${this.groupId}`);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["checkChatAuth"])();
      }
    }
  },
  activated() {
    this.$store.dispatch('getChatInfo');
    this.$store.dispatch('getUserTokenList');
  },
  methods: {
    onSubmit() {
      let data = {
        address_to: this.toAddress,
        num: this.amount,
        tokenAddress: this.tokenAddress
      };
      this.loadingTransfer = true;
      let isEnoughBalance = false;
      if (this.allUserTokenList.length > 0) {
        isEnoughBalance = this.allUserTokenList.some(i => {
          if (i.symbol === 'USDT') {
            if (i.amount > this.amount) {
              return true;
            }
          }
        });
      }
      if (!isEnoughBalance) {
        this.loadingTransfer = false;
        this.$notify({
          type: 'danger',
          message: this.$t('chainTransferNewTipsInsufficient')
        });
        return;
      }
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["transfer"])(data).then(res => {
        return res.wait();
      }).then(res => {
        this.$toast.success(this.$t('transferSuccess'));
        this.tx = res.transactionHash;
        if (this.tx) {
          if (this.$route.params.type == 'burn') {
            this.checkConsumed();
          } else {
            this.checkConsumedUser();
          }
        } else {
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }
      }).catch(err => {
        // console.log('err',err.error.message)
        // this.$toast.fail(err)
        this.$f.handleError(err);
      }).finally(err => {
        console.log(err);
        this.loadingTransfer = false;
      });
    },
    checkConsumedUser() {
      let data = {
        user_address: this.fromAddress,
        chain: this.currentChain.chain,
        tx: this.tx
      };
      this.loadingCheck = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["checkConsumedUser"])(data).then(res => {
        if (res) {
          this.tx = '';
          if (this.groupId) {
            this.$router.push(`/chat/${this.groupId}`);
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["checkChatAuth"])();
          } else {
            this.$router.push(`/myChat`);
          }
        }
      }).catch(err => {
        this.$toast.fail(err);
      }).finally(err => {
        console.log(err);
        this.loadingCheck = false;
      });
    },
    // burn
    checkConsumed() {
      let data = {
        consumed_Type: this.$route.params.illegalId ? 2 : 1,
        //消费类型 1、强占管理员； 2、清除处罚
        group_id: this.groupId,
        chain: this.currentChain.chain,
        tx: this.tx
      };
      this.loadingCheck = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["checkConsumed"])(data).then(res => {
        if (res) {
          // this.$toast.success(this.$t('success'))
          if (this.$route.params.illegalId) {
            this.$store.dispatch('getChatGroupSettings').then(() => {
              this.$toast({
                message: this.$t('dissolutionSuccessful'),
                position: 'top'
              });
              this.loadingCheck = false;
            });
          } else {
            this.$store.dispatch('getChatInfo').then(() => {
              this.$toast({
                message: this.$t('becomeAnAdmin'),
                position: 'top'
              });
            });
            this.loadingCheck = false;
          }
        }
      }).catch(err => {
        // this.$toast.fail(err)
        this.loading = false;
        this.$toast({
          message: err,
          position: 'top'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-745b90ab"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "burn-container"
};
const _hoisted_2 = {
  class: "section-1"
};
const _hoisted_3 = {
  class: "top"
};
const _hoisted_4 = {
  key: 0,
  class: "font-12 block color-999 mt_10"
};
const _hoisted_5 = {
  class: "iconfont icon-copy font-12"
};
const _hoisted_6 = {
  class: "section-3"
};
const _hoisted_7 = {
  class: "icon-svg",
  "aria-hidden": "true"
};
const _hoisted_8 = ["xlink:href"];
const _hoisted_9 = {
  class: "section-6"
};
const _hoisted_10 = {
  class: "submit-bar van-safe-area-bottom van-hairline--top"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$tokenAddres, _$options$tokenAddres2, _ctx$$route$query;
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  const _directive_copy = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("copy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('operationPay')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
    class: "icon",
    width: "0.48rem",
    height: "0.48rem",
    round: "",
    "lazy-load": "",
    src: `${_ctx.$store.state.s3BaseUrl}token_icon/oec/0x382bb369d343125bfb2117af9c149795c6c65c50.png`
  }, null, 8 /* PROPS */, ["src"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.amount) + "USDT", 1 /* TEXT */)]), $options.tokenAddress ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('contractAddress')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$tokenAddres = $options.tokenAddress) === null || _$options$tokenAddres === void 0 ? void 0 : _$options$tokenAddres.slice(0, 4)) + '...' + ((_$options$tokenAddres2 = $options.tokenAddress) === null || _$options$tokenAddres2 === void 0 ? void 0 : _$options$tokenAddres2.slice(-4))) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", _hoisted_5, null, 512 /* NEED_PATCH */), [[_directive_copy, $options.tokenAddress]])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
    title: "支付方式",
    center: ""
  }, {
    "right-icon": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
      "xlink:href": `#icon-${$options.currentChain.chain}`
    }, null, 8 /* PROPS */, _hoisted_8)])), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.currentChain.title), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('chainTransferNewTips')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [_ctx.$store.state.wallet !== '' && _ctx.$store.state.wallet !== 'importAddress' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 0,
    block: "",
    round: "",
    loading: $options.loading,
    type: "primary",
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.onSubmit, ["stop"])
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('transfer')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading", "onClick"])) : _ctx.$store.state.wallet == 'importAddress' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 1,
    block: "",
    round: "",
    loading: $options.loading,
    type: "primary"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('importAddress')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 2,
    block: "",
    round: "",
    loading: $options.loading,
    type: "primary"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('connectWallet')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading"])), _ctx.$route.params.type == 'burn' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_router_link, {
    key: 3,
    to: {
      name: 'ChatBurn',
      params: {
        id: $options.groupId,
        illegalId: _ctx.$route.params.illegalId
      },
      query: {
        admin: ((_ctx$$route$query = _ctx.$route.query) === null || _ctx$$route$query === void 0 ? void 0 : _ctx$$route$query.admin) === 'admin' ? 'admin' : ''
      }
    },
    class: "font-14"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('manualTransfer')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_router_link, {
    key: 4,
    to: {
      name: 'ChatPayment',
      params: {
        id: $options.groupId
      }
    },
    class: "font-14"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('manualTransfer')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"]))])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".burn-container[data-v-745b90ab] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191c32;\n  --van-cell-background-color: #fff;\n  --van-cell-line-height: 1;\n  background: #f8f8f8;\n}\n.burn-container .section-1[data-v-745b90ab] {\n  font-size: 0.36rem;\n  color: #333333;\n  text-align: center;\n  font-weight: 500;\n  padding: 0.6rem 0;\n  background: #fff;\n}\n.burn-container .section-1 .top[data-v-745b90ab] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.burn-container .section-1 .top .icon[data-v-745b90ab] {\n  margin-right: 0.1rem;\n}\n.burn-container .section-1 .bottom[data-v-745b90ab] {\n  text-align: center;\n  font-size: 0.28rem;\n  color: #9f9f9f;\n  text-align: center;\n  font-weight: 400;\n  margin-top: 0.2rem;\n}\n.burn-container .section-2[data-v-745b90ab] {\n  font-size: 0.3rem;\n  color: #333333;\n  font-weight: 400;\n  padding: 0 0.3rem;\n  background: #fff;\n  margin-bottom: 0.2rem;\n}\n.burn-container .section-2 .section-2-box[data-v-745b90ab] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 0;\n}\n.burn-container .section-2 .count-down .colon[data-v-745b90ab] {\n  display: inline-block;\n  margin: 0 0.08rem;\n  color: #ee0a24;\n}\n.burn-container .section-2 .count-down .block[data-v-745b90ab] {\n  display: inline-block;\n  width: 0.44rem;\n  color: #fff;\n  font-size: 0.24rem;\n  text-align: center;\n  background-color: #ee0a24;\n}\n.burn-container .section-3[data-v-745b90ab] {\n  background: #fff;\n  margin-bottom: 0.2rem;\n}\n.burn-container .section-3 h3[data-v-745b90ab] {\n  margin: 0;\n  padding: 0.3rem;\n  font-size: 0.3rem;\n  color: #000000;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.burn-container .section-3 .icon-svg[data-v-745b90ab] {\n  font-size: 0.48rem;\n  margin-right: 0.1rem;\n}\n.burn-container .section-4[data-v-745b90ab] {\n  background: #fff;\n  padding: 0.3rem;\n}\n.burn-container .section-4 h3[data-v-745b90ab] {\n  margin: 0;\n  font-size: 0.3rem;\n  color: #000000;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.burn-container .section-4 .content[data-v-745b90ab] {\n  margin: 0.32rem 0 0.14rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f7f8fa;\n  border-radius: 0.16rem;\n  padding: 0.2rem;\n}\n.burn-container .section-4 .content span[data-v-745b90ab] {\n  word-break: break-word;\n  width: 60%;\n  font-size: 0.28rem;\n  color: #333333;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.burn-container .section-4 .content .btn[data-v-745b90ab] {\n  min-width: 1.4rem;\n}\n.burn-container .section-4 .alert[data-v-745b90ab] {\n  font-size: 0.24rem;\n  color: #f6465d;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.burn-container .section-5[data-v-745b90ab] {\n  background: #fff;\n  padding: 0.3rem;\n}\n.burn-container .section-5 h3[data-v-745b90ab] {\n  margin: 0;\n  font-size: 0.3rem;\n  color: #000000;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.burn-container .section-5 .content[data-v-745b90ab] {\n  margin: 0.32rem 0 0.14rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f7f8fa;\n  border-radius: 0.16rem;\n  word-break: break-word;\n  font-size: 0.28rem;\n  color: #333333;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.2rem;\n}\n.burn-container .section-5 .alert[data-v-745b90ab] {\n  font-size: 0.24rem;\n  color: #f6465d;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.burn-container .section-6[data-v-745b90ab] {\n  font-size: 0.24rem;\n  color: #f6465d;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.2rem 0.3rem;\n}\n.burn-container .submit-bar[data-v-745b90ab] {\n  background: #fff;\n  padding: 0.4rem 0.3rem;\n  text-align: center;\n}\n.tx-tips-content[data-v-745b90ab] {\n  padding: 0.3rem;\n  font-size: 0.28rem;\n  color: #333333;\n  text-align: center;\n  line-height: 0.4rem;\n  font-weight: 400;\n}\n.tx-tips-content .image-box[data-v-745b90ab] {\n  max-height: 50vh;\n  text-align: center;\n}\n.tx-tips-content img[data-v-745b90ab] {\n  max-width: 100%;\n  max-height: 50vh;\n}\n.admin-title[data-v-745b90ab] {\n  font-size: 0.36rem;\n  color: #3f80f7;\n  letter-spacing: 0.007rem;\n  line-height: 0.72rem;\n  font-weight: 500;\n  text-align: center;\n}\n.admin-content[data-v-745b90ab] {\n  font-size: 0.28rem;\n  color: #3f80f7;\n  letter-spacing: 0;\n  font-weight: 400;\n  text-align: center;\n  padding: 1rem 0 0.7rem 0;\n}\n.color-999[data-v-745b90ab] {\n  color: #999;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("19d0a918", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/chat/chatNewPayment.vue":
/*!*******************************************!*\
  !*** ./src/views/chat/chatNewPayment.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatNewPayment_vue_vue_type_template_id_745b90ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true */ "./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true");
/* harmony import */ var _chatNewPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatNewPayment.vue?vue&type=script&lang=js */ "./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true */ "./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_chatNewPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chatNewPayment_vue_vue_type_template_id_745b90ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-745b90ab"],['__file',"src/views/chat/chatNewPayment.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatNewPayment.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=style&index=0&id=745b90ab&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_style_index_0_id_745b90ab_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_template_id_745b90ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chatNewPayment.vue?vue&type=template&id=745b90ab&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatNewPayment_vue_vue_type_template_id_745b90ab_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);