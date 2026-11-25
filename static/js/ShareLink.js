(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ShareLink"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/shareLink.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_metaMask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/metaMask.js */ "./src/utils/metaMask.js");
/* harmony import */ var _utils_walletConnect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/walletConnect.js */ "./src/utils/walletConnect.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ShareLink',
  data() {
    return {
      exit: !!window.ethereum,
      dialogVisible: true,
      tabActive: '1',
      address: '',
      addressPattern: /(^(T|t)[0-9a-zA-Z]{33}$)|(^[0-9a-zA-Z]{43,44}$)|(^0x[0-9a-zA-Z]{40}$)/,
      loading: false
    };
  },
  computed: {
    currentAccount() {
      return this.$store.state.currentAccount || '';
    },
    currentAccountSplit() {
      return this.currentAccount.replace(new RegExp('(.{6})(.+)(.{4})'), '$1...$3');
    },
    shareInfo() {
      return this.$store.state.shareInfo;
    },
    regCode() {
      return this.$route.params.regCode;
    }
  },
  watch: {},
  mounted() {},
  methods: {
    connectMetaMask() {
      Object(_utils_metaMask_js__WEBPACK_IMPORTED_MODULE_0__["connectMetaMask"])().then(res => {
        if (res) {
          console.log(res);
        }
      }).catch(err => {
        console.log(err);
      });
    },
    getWalletConnect() {
      Object(_utils_walletConnect_js__WEBPACK_IMPORTED_MODULE_1__["walletConnect"])().then(res => {
        if (res) {
          console.log(res);
        }
      }).catch(err => {
        console.log(err);
      });
    },
    bindReg() {
      this.loading = true;
      let address = this.tabActive === '2' ? this.currentAccount : this.address;
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["addressBindReg"])(address, this.regCode).then(res => {
        if (res) {
          this.$notify({
            type: 'success',
            message: this.$t('bindSuccess')
          });
          this.dialogVisible = false;
        }
      }).catch(err => {
        this.$notify({
          type: 'danger',
          message: err.response.data.msg
        });
        console.log(err);
      }).finally(() => {
        this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/邀请好友点击链接.png */ "./src/assets/images/邀请好友点击链接.png");
/* harmony import */ var _assets_images_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_browser_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/browser.svg */ "./src/assets/images/browser.svg");
/* harmony import */ var _assets_images_browser_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_browser_svg__WEBPACK_IMPORTED_MODULE_2__);



const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-5f331f4f"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "shareLink-container"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "bg-img",
  src: _assets_images_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_3 = {
  class: "shareLink-content"
};
const _hoisted_4 = {
  class: "download-box"
};
const _hoisted_5 = {
  class: "connect-popup-content"
};
const _hoisted_6 = {
  class: "tab-container"
};
const _hoisted_7 = {
  class: "tab-button"
};
const _hoisted_8 = {
  for: "tab-item-mobile",
  class: "tab-item"
};
const _hoisted_9 = {
  for: "tab-item-wallet",
  class: "tab-item"
};
const _hoisted_10 = {
  class: "tip"
};
const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "icon-wallet",
  src: _assets_images_browser_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "",
  width: "50",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_12 = {
  class: "middle"
};
const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "text"
}, " (MetaMask / TokenPocket / imToken / Bitpie...) ", -1 /* HOISTED */));
const _hoisted_14 = {
  class: "tip"
};
const _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("svg", {
  class: "iconfont icon-wallet",
  "aria-hidden": "true"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-Wallet"
})], -1 /* HOISTED */));
const _hoisted_16 = {
  class: "middle"
};
const _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("Wallet Connect ");
const _hoisted_18 = {
  class: "text"
};
const _hoisted_19 = {
  class: "text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_form = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-form");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    round: "",
    block: "",
    type: "primary",
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$store.state.downloadVisible = true, ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('clickDownload')) + " Android", 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    class: "skip-button",
    url: "/token",
    round: "",
    block: "",
    plain: "",
    type: "primary"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('skip')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  })])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popup, {
    show: $data.dialogVisible,
    "onUpdate:show": _cache[9] || (_cache[9] = $event => $data.dialogVisible = $event),
    "close-on-click-overlay": false,
    round: "",
    position: "center",
    teleport: "#app",
    class: "connect-popup"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("input", {
      type: "radio",
      id: "tab-item-mobile",
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.tabActive = $event),
      value: "1",
      class: "tab-radio-input"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vModelRadio"], $data.tabActive]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('importAddress')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("input", {
      type: "radio",
      id: "tab-item-wallet",
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.tabActive = $event),
      value: "2",
      class: "tab-radio-input"
    }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vModelRadio"], $data.tabActive]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('walletSignup')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "form-container",
      onSubmit: $options.bindReg
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [$data.tabActive === '2' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 0
      }, [$options.currentAccount === '' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 0
      }, [$data.exit ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 0,
        class: "content",
        onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.connectMetaMask && $options.connectMetaMask(...args), ["stop"]))
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [_hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h5", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('browserWallet')), 1 /* TEXT */), _hoisted_13])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
        name: "arrow"
      })])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
        class: "content",
        onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.getWalletConnect && $options.getWalletConnect(...args), ["stop"]))
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, [_hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h5", null, [_hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('walletMobile')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('connectWalletconnect')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
        name: "arrow"
      })])])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_field, {
        key: 1,
        class: "input-box",
        modelValue: $options.currentAccountSplit,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $options.currentAccountSplit = $event),
        disabled: "",
        label: _ctx.$t('address')
      }, null, 8 /* PROPS */, ["modelValue", "label"]))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_field, {
        key: 1,
        class: "input-box",
        name: "address",
        modelValue: $data.address,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.address = $event),
        label: _ctx.$t('address'),
        placeholder: _ctx.$t('enterAddress'),
        clearable: "",
        rules: [{
          required: true,
          message: _ctx.$t('cannotBeEmpty')
        }, {
          pattern: $data.addressPattern,
          message: _ctx.$t('pleaseEnterCorrectAddress'),
          trigger: 'onBlur'
        }]
      }, null, 8 /* PROPS */, ["modelValue", "label", "placeholder", "rules"])), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
        class: "input-box",
        modelValue: $options.regCode,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $options.regCode = $event),
        disabled: "",
        label: _ctx.$t('invitationCode')
      }, null, 8 /* PROPS */, ["modelValue", "label"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "submit-button",
        type: "primary",
        "native-type": "submit",
        disabled: $options.currentAccount === '' && $data.tabActive === '2',
        loading: $data.loading,
        block: ""
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled", "loading"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        block: "",
        plain: "",
        type: "primary",
        class: "submit-button",
        onClick: _cache[8] || (_cache[8] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.dialogVisible = false, ["stop"]))
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('skip')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      })]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".shareLink-container[data-v-5f331f4f] {\n  background: linear-gradient(to right, #3b436d, #2c3254);\n  font-size: 0.28rem;\n  color: #1e2329;\n  position: relative;\n  min-height: 100vh;\n  padding-bottom: 0.6rem;\n}\n.shareLink-container .bg-img[data-v-5f331f4f] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 100%;\n  height: 100%;\n  max-width: 12rem;\n  z-index: 1;\n}\n.shareLink-container .shareLink-content[data-v-5f331f4f] {\n  position: relative;\n  z-index: 2;\n}\n.shareLink-container .shareLink-content .shareCode[data-v-5f331f4f] {\n  text-align: center;\n  font-size: 0.4rem;\n  padding-top: 10.7rem;\n  letter-spacing: 0.1rem;\n  font-weight: bolder;\n}\n.shareLink-container .shareLink-content .shareCode .shareCode-content[data-v-5f331f4f] {\n  display: inline-block;\n  background-color: #f4f4f4;\n  padding: 0.1rem 2rem;\n  border-radius: 0.2rem;\n}\n.shareLink-container .shareLink-content .copy-button[data-v-5f331f4f] {\n  font-size: 0.28rem;\n  text-align: center;\n  color: var(--van-color-primary);\n  margin-top: 0.3rem;\n}\n.shareLink-container .shareLink-content .copy-button[data-v-5f331f4f]:active {\n  color: #758dd6;\n}\n.shareLink-container .shareLink-content .download-box[data-v-5f331f4f] {\n  padding: 10.5rem 0.6rem 0;\n}\n.shareLink-container .shareLink-content .skip-button[data-v-5f331f4f] {\n  margin-top: 0.4rem;\n}\n.connect-popup-content[data-v-5f331f4f] {\n  padding: 0.2rem 0;\n}\n.content[data-v-5f331f4f] {\n  width: 100%;\n  background: #f4f7f8;\n  border: 0.02rem solid transparent;\n  border-radius: 0.16rem;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 0.1rem 0.4rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.content[data-v-5f331f4f]:not(.disabled):hover {\n  border-color: #4455cb;\n}\n.content + .content[data-v-5f331f4f] {\n  margin-top: 0.4rem;\n}\n.content .tip[data-v-5f331f4f] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.content h5[data-v-5f331f4f] {\n  font-size: 0.32rem;\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n.content .icon-wallet[data-v-5f331f4f] {\n  width: 1rem;\n  height: 1.2rem;\n}\n.content .middle[data-v-5f331f4f] {\n  font-size: 0.4rem;\n  text-align: left;\n  margin-left: 0.2rem;\n}\n.content .middle.red[data-v-5f331f4f] {\n  font-size: 0.24rem;\n  color: red;\n  line-height: 1.2;\n  word-break: break-word;\n}\n.content .middle .text[data-v-5f331f4f] {\n  font-size: 0.24rem;\n  word-break: break-word;\n  color: gray;\n  margin-top: 0.2rem;\n}\n.tab-container[data-v-5f331f4f] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0.6rem;\n}\n.tab-container .tab-radio-input[data-v-5f331f4f] {\n  width: 0;\n  height: 0;\n  font-size: 0;\n  opacity: 0;\n}\n.tab-container .tab-radio-input:checked + .tab-item[data-v-5f331f4f] {\n  background: #558BED;\n  color: #FFFFFF;\n}\n.tab-container .tab-button[data-v-5f331f4f] {\n  display: inline-block;\n  background: #F5F6FA;\n  border-radius: 0.32rem;\n}\n.tab-container .tab-button .tab-item[data-v-5f331f4f] {\n  display: inline-block;\n  min-width: 1.76rem;\n  height: 0.64rem;\n  line-height: 0.64rem;\n  border-radius: 0.32rem;\n  font-size: 0.28rem;\n  color: #323233;\n  padding: 0 0.3rem;\n}\n.readonly-box[data-v-5f331f4f] {\n  width: 100%;\n  padding: 0.24rem 0.32rem;\n  background: #F5F6FA;\n  border-radius: 0.16rem;\n  text-align: left;\n  margin-top: 0.2rem;\n  font-size: 0.28rem;\n  color: #878FBC;\n  line-height: 0.4rem;\n  font-weight: 400;\n}\n.submit-button[data-v-5f331f4f] {\n  border-radius: 0.16rem;\n  margin-top: 1rem;\n}\n.submit-button + .submit-button[data-v-5f331f4f] {\n  margin-top: 0.3rem;\n}\n.input-box[data-v-5f331f4f] {\n  margin: 0;\n}\n.input-box + .input-box[data-v-5f331f4f] {\n  margin-top: 0.2rem;\n}\n.content + .input-box[data-v-5f331f4f] {\n  margin-top: 0.2rem;\n}\n.form-container[data-v-5f331f4f] {\n  width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5d5b6685", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/邀请好友点击链接.png":
/*!****************************************!*\
  !*** ./src/assets/images/邀请好友点击链接.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/邀请好友点击链接.e437a3c5.png";

/***/ }),

/***/ "./src/views/shareLink.vue":
/*!*********************************!*\
  !*** ./src/views/shareLink.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shareLink_vue_vue_type_template_id_5f331f4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shareLink.vue?vue&type=template&id=5f331f4f&scoped=true */ "./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true");
/* harmony import */ var _shareLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shareLink.vue?vue&type=script&lang=js */ "./src/views/shareLink.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true */ "./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_shareLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_shareLink_vue_vue_type_template_id_5f331f4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-5f331f4f"],['__file',"src/views/shareLink.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/shareLink.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/shareLink.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./shareLink.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=style&index=0&id=5f331f4f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_style_index_0_id_5f331f4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true ***!
  \***************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_template_id_5f331f4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./shareLink.vue?vue&type=template&id=5f331f4f&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/shareLink.vue?vue&type=template&id=5f331f4f&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_shareLink_vue_vue_type_template_id_5f331f4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);