(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Balance"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/balance.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.mjs");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Balance',
  data() {
    return {
      active: 'token',
      hotAddress: [],
      Timer_getData: null,
      loading1: false,
      loading3: false,
      refreshLoading: [false, false, false],
      nftList: [],
      videoVisible: false,
      videoUrl: '',
      curItem: {},
      isHide: true,
      timer: false,
      isShowPop: false,
      selectedCoin: []
    };
  },
  computed: {
    currentAccount() {
      return this.$store.state.currentAccount || '';
    },
    currentAccountSplit() {
      return this.currentAccount.replace(new RegExp('(.{6})(.+)(.{4})'), '$1...$3');
    },
    userTotalBalance() {
      return this.$store.getters.userTotalBalance || 0;
    },
    userTokenListInit() {
      var _this$$store$state$us;
      return (_this$$store$state$us = this.$store.state.userTokenList) === null || _this$$store$state$us === void 0 ? void 0 : _this$$store$state$us.filter(i => i.amount > 0);
    },
    allUserTokenList() {
      return this.$store.getters.balanceTokens || [];
    },
    userTokenList() {
      if (this.isHide) {
        var _this$allUserTokenLis;
        return (_this$allUserTokenLis = this.allUserTokenList) === null || _this$allUserTokenLis === void 0 ? void 0 : _this$allUserTokenLis.filter(row => row.amount * row.price >= 1);
      } else {
        return this.allUserTokenList;
      }
    }
  },
  watch: {
    '$store.state.currentAccount'() {
      this.init();
    }
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      if (this.$store.state.currentAccount) {
        var _this$$store$state;
        this.$store.dispatch('getUserTokenList');
        this.getWhitelistTokens();
        if (!(((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 || (_this$$store$state = _this$$store$state.favoritesList) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.length) > 0)) {
          this.$store.dispatch('getUserFavorites');
        }
        this.getUserNFTList();
      }
    },
    getTokensBalance() {
      this.$store.dispatch('getUserTokenList');
    },
    getWhitelistTokens() {
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getRiskTokens"])(this.$store.getters.netId).then(res => {
        this.$store.commit('setState', {
          name: 'whitelistTokens',
          value: res || []
        });
      });
    },
    getUserNFTList() {
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getUserNFTList"])().then(res => {
        this.nftList = res;
      });
    },
    formatChain(item) {
      let o = {
        address: item.token,
        chain: item.chain === 'matic' ? 'polygon' : item.chain
      };
      if (!/0x/.test(item.token)) {
        o.address = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
      }
      return o;
    },
    formatLength(str, len = 20) {
      if ((str === null || str === void 0 ? void 0 : str.length) > len) {
        return (str === null || str === void 0 ? void 0 : str.slice(0, 5)) + '...' + (str === null || str === void 0 ? void 0 : str.slice(-5));
      }
      return str;
    },
    goTokenDetails(item) {
      this.$router.push({
        name: 'Token',
        params: {
          id: `${item.token}-${item.chain}`
        }
      });
    },
    ImagePreview: vant__WEBPACK_IMPORTED_MODULE_5__["ImagePreview"],
    videoPreview(item) {
      if (item.content) {
        this.videoUrl = item.content;
        this.videoVisible = true;
      }
    },
    longTap(item) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.timer = null;
        this.$dialog.confirm({
          title: '',
          message: this.$t('areYouSureDelete'),
          beforeClose: action => new Promise(resolve => {
            if (action === 'confirm') {
              Object(_api__WEBPACK_IMPORTED_MODULE_4__["setUserTokenStatus"])({
                token: item.token,
                type: 'blacklist'
              }).then(res => {
                this.$store.dispatch('getUserTokenList');
                resolve(true);
              }).catch(err => {
                this.$toast({
                  message: err.msg,
                  position: 'top'
                });
              });
            } else {
              // 拦截取消操作
              resolve(true);
            }
          })
        });
      }, 600);
    },
    clearTouch() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    showPop() {
      var _this$allUserTokenLis2;
      this.isShowPop = true;
      this.selectedCoin = (_this$allUserTokenLis2 = this.allUserTokenList) === null || _this$allUserTokenLis2 === void 0 ? void 0 : _this$allUserTokenLis2.map(i => i.token);
    },
    addCoin(item) {
      let isSelected = this.selectedCoin.includes(item.token);
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["setUserTokenStatus"])({
        token: item.token,
        type: isSelected ? 'whitelist' : 'blacklist'
      }).then(res => {}).catch(err => {
        this.$toast({
          message: err.msg,
          position: 'top'
        });
      });
    },
    closePop() {
      this.isShowPop = false;
      this.$store.dispatch('getUserTokenList');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/ave-empty.png */ "./src/assets/images/ave-empty.png");
/* harmony import */ var _assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-0cbb4fb2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "home-content"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "background-top"
}, null, -1 /* HOISTED */));
const _hoisted_3 = {
  class: "balance-card"
};
const _hoisted_4 = {
  class: "balance-card_top"
};
const _hoisted_5 = {
  class: "network-btn"
};
const _hoisted_6 = {
  class: "balance-card_bottom"
};
const _hoisted_7 = {
  class: "top"
};
const _hoisted_8 = {
  class: "details"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-balance-details"
}, null, -1 /* HOISTED */));
const _hoisted_10 = {
  class: "bottom"
};
const _hoisted_11 = {
  class: "balance-num"
};
const _hoisted_12 = {
  class: "balance-list"
};
const _hoisted_13 = {
  class: "flex-between"
};
const _hoisted_14 = {
  class: "flex-end"
};
const _hoisted_15 = {
  key: 0,
  class: "mt_20 ml_10",
  style: {
    "color": "#999",
    "font-size": "12px",
    "display": "flex"
  }
};
const _hoisted_16 = ["onClick", "onTouchstartPassive"];
const _hoisted_17 = {
  class: "left"
};
const _hoisted_18 = {
  key: 0,
  class: "risk-status"
};
const _hoisted_19 = {
  class: "right"
};
const _hoisted_20 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    "width": "1rem"
  },
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    "width": "1rem"
  },
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_22 = {
  key: 2,
  style: {
    "width": "100%",
    "height": "calc(50vw - 30px)",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  }
};
const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_ave_empty_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    "width": "1rem"
  },
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_24 = [_hoisted_23];
const _hoisted_25 = {
  class: "nft-name"
};
const _hoisted_26 = {
  class: "van-ellipsis"
};
const _hoisted_27 = {
  class: "van-ellipsis"
};
const _hoisted_28 = ["src"];
const _hoisted_29 = {
  class: "relative"
};
const _hoisted_30 = {
  class: "popup-title"
};
const _hoisted_31 = {
  class: "left flex-start"
};
const _hoisted_32 = {
  key: 0,
  class: "risk-status"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$userTokenLi, _$options$allUserToke, _$options$userTokenLi2, _$data$nftList;
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_switch = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-switch");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_grid_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-grid-item");
  const _component_van_grid = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-grid");
  const _component_van_image_preview = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image-preview");
  const _component_van_checkbox = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-checkbox");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_van_cell_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell-group");
  const _component_van_checkbox_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-checkbox-group");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("section", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$store.state.currentAccount === '' ? _ctx.$t('unconnectedWallet') : _ctx.$store.getters.netName), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.currentAccountSplit), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('totalBalance')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, [_hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('balanceDetails')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_11, "$ " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit($options.userTotalBalance)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" ≈\n          <span>¥200</span> ")])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    active: $data.active,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.active = $event),
    shrink: "",
    color: "#3F80F7",
    style: {
      "--van-tabs-nav-background-color": "#fff"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
      title: _ctx.$t('token1'),
      name: "token"
    }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
      title: _ctx.$t('nft'),
      name: "nft"
    }, null, 8 /* PROPS */, ["title"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, [((_$options$userTokenLi = $options.userTokenListInit) === null || _$options$userTokenLi === void 0 ? void 0 : _$options$userTokenLi.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_icon, {
    key: 0,
    name: "add",
    size: "24",
    color: "#ccc",
    onClick: $options.showPop
  }, null, 8 /* PROPS */, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-switch v-model=\"isHide\" active-color=\"#558BED\" inactive-color=\"#dcdee0\" size=\"14px\"/>&nbsp;{{ isHide? $t('hideSmallAssets') : $t('showSmallAssets')}} ")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.active === 'token']])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", null, [((_$options$allUserToke = $options.allUserTokenList) === null || _$options$allUserToke === void 0 ? void 0 : _$options$allUserToke.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_switch, {
    modelValue: $data.isHide,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.isHide = $event),
    "active-color": "#558BED",
    "inactive-color": "#dcdee0",
    size: "12px"
  }, null, 8 /* PROPS */, ["modelValue"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.isHide ? _ctx.$t('hideSmallAssets') : _ctx.$t('showSmallAssets')), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.userTokenList, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      class: "balance-item no-select",
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goTokenDetails(item), ["stop"]),
      onContextmenu: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])(() => {}, ["prevent"])),
      onTouchstartPassive: $event => $options.longTap(item),
      onTouchmovePassive: _cache[3] || (_cache[3] = (...args) => $options.clearTouch && $options.clearTouch(...args)),
      onTouchendPassive: _cache[4] || (_cache[4] = (...args) => $options.clearTouch && $options.clearTouch(...args))
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
      round: "",
      width: "0.6rem",
      height: "0.6rem",
      "icon-size": "0.6rem",
      "lazy-load": "",
      "show-loading": "",
      class: "icon-left",
      src: _ctx.$f.formatIcon(item),
      "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
    }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.symbol), 1 /* TEXT */), item.risk_score > 55 || item.risk_level < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('highRisk')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span class=\"risk-status\" v-if=\"item.flag ==='blacklist' && item.symbol\">黑名单</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span class=\"risk-status\" v-if=\"item.flag ==='whitelist' && item.symbol\">白名单</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span class=\"risk-status\" v-if=\"item.flag ==='lp' && item.symbol\">lp</span> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit(item.amount)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, "≈ $ " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit(item.quote)), 1 /* TEXT */)])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_16);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoBalanceLight,
    description: _ctx.$t('noBalance')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $options.userTokenList && ((_$options$userTokenLi2 = $options.userTokenList) === null || _$options$userTokenLi2 === void 0 ? void 0 : _$options$userTokenLi2.length) === 0]])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.active === 'token']]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_grid, {
    gutter: 10,
    clickable: "",
    "column-num": 2,
    center: false,
    style: {
      "--van-grid-item-content-padding": "0",
      "padding-top": "0.1rem"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.nftList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_grid_item, {
        key: index
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(item.thumbnail_url || item.content) && (item.content_type === 'image_url' || item.content_type === 'image') ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
          key: 0,
          src: item.thumbnail_url || item.content,
          width: "100%",
          height: "calc(50vw - 30px)",
          fit: "contain",
          "lazy-load": "",
          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.ImagePreview({
            images: [item.content],
            closeable: true
          }), ["stop"])
        }, {
          error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_20]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["src", "onClick"])) : item.thumbnail_url && item.content_type === 'video_url' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
          key: 1,
          src: item.thumbnail_url,
          width: "100%",
          height: "calc(50vw - 30px)",
          fit: "contain",
          "lazy-load": "",
          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.videoPreview(item), ["stop"])
        }, {
          error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_21]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["src", "onClick"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_22, _hoisted_24)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.contract_name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.name || $options.formatLength('#' + item.inner_id)), 1 /* TEXT */)])]),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.active === 'nft']]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoBalanceLight,
    description: _ctx.$t('noBalance')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.active === 'nft' && $data.nftList && ((_$data$nftList = $data.nftList) === null || _$data$nftList === void 0 ? void 0 : _$data$nftList.length) === 0]])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image_preview, {
    show: $data.videoVisible,
    "onUpdate:show": _cache[6] || (_cache[6] = $event => $data.videoVisible = $event),
    closeable: "",
    images: [$data.curItem.thumbnail_url],
    class: "image-preview"
  }, {
    cover: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("video", {
      src: $data.videoUrl,
      onClick: _cache[5] || (_cache[5] = $event => $data.videoVisible = false),
      autoplay: "",
      name: "media",
      style: {
        "width": "100%",
        "height": "90vh"
      }
    }, null, 8 /* PROPS */, _hoisted_28)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "images"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popup, {
    show: $data.isShowPop,
    "onUpdate:show": _cache[8] || (_cache[8] = $event => $data.isShowPop = $event),
    position: "bottom",
    round: "",
    closeable: "",
    onClickOverlay: $options.closePop,
    onClickCloseIcon: $options.closePop,
    style: {
      'min-height': '20%',
      'max-height': '60%',
      padding: '20px 0'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('add')) + "Token", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_checkbox_group, {
      modelValue: $data.selectedCoin,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.selectedCoin = $event)
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.userTokenListInit, (item, $index) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_cell_group, {
          inset: "",
          key: $index
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
            clickable: "",
            onClick: $event => $options.addCoin(item)
          }, {
            title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_31, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
              round: "",
              width: "0.6rem",
              height: "0.6rem",
              "icon-size": "0.6rem",
              "lazy-load": "",
              "show-loading": "",
              class: "icon-left",
              src: _ctx.$f.formatIcon(item),
              "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
            }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.symbol), 1 /* TEXT */), item.risk_score > 55 || item.risk_level < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('highRisk')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]),
            "right-icon": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_checkbox, {
              name: item.token
            }, null, 8 /* PROPS */, ["name"])]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])]),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "onClickOverlay", "onClickCloseIcon"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/images/bg-bsc.svg */ "./src/assets/images/bg-bsc.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".home-content[data-v-0cbb4fb2] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.28rem;\n  background: #fff;\n  padding: 0.4rem 0 2.6rem;\n  min-height: calc(100vh - 2.4rem);\n}\n.home-content .background-top[data-v-0cbb4fb2] {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  background: #2C3254;\n  clip-path: ellipse(90vw 2.8rem at 50% 0%);\n  height: 3rem;\n  width: 100%;\n}\n.home-content .balance-card[data-v-0cbb4fb2] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center center;\n  background-size: auto 100%;\n  background-repeat: no-repeat;\n  height: 3rem;\n  font-size: 0.28rem;\n  color: #878FBC;\n  padding: 0 0.3rem;\n}\n.home-content .balance-card .balance-card_top[data-v-0cbb4fb2] {\n  padding: 0.2rem 0.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n}\n.home-content .balance-card .balance-card_top .network-btn[data-v-0cbb4fb2] {\n  background: #212121;\n  border-radius: 0.12rem;\n  color: #F4BB0B;\n  padding: 0.1rem 0.2rem;\n}\n.home-content .balance-card .balance-card_bottom[data-v-0cbb4fb2] {\n  padding: 0.4rem 0.3rem;\n  line-height: 1.5;\n}\n.home-content .balance-card .balance-card_bottom .top[data-v-0cbb4fb2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.home-content .balance-card .balance-card_bottom .top .details[data-v-0cbb4fb2] {\n  display: flex;\n  align-items: center;\n  font-size: 0.24rem;\n}\n.home-content .balance-card .balance-card_bottom .top .details .icon-balance-details[data-v-0cbb4fb2] {\n  font-size: 0.24rem;\n  margin-right: 0.12rem;\n}\n.home-content .balance-card .balance-card_bottom .bottom[data-v-0cbb4fb2] {\n  margin-top: 0.2rem;\n  color: #FFFFFF;\n}\n.home-content .balance-card .balance-card_bottom .bottom .balance-num[data-v-0cbb4fb2] {\n  font-size: 0.4rem;\n}\n.home-content .balance-list[data-v-0cbb4fb2] {\n  --van-tab-font-size: 0.32rem;\n  font-size: 0.32rem;\n  padding: 0.2rem 0.3rem 0.4rem;\n}\n.home-content .balance-list .balance-item[data-v-0cbb4fb2] {\n  color: #1E2329;\n  box-shadow: 0 0.04rem 0.16rem 0 rgba(243, 243, 243, 0.98);\n  padding: 0.24rem 0.2rem;\n  margin-top: 0.24rem;\n  border-radius: 0.16rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.home-content .balance-list .balance-item .left[data-v-0cbb4fb2] {\n  display: flex;\n  align-items: center;\n}\n.home-content .balance-list .balance-item .left .icon-left[data-v-0cbb4fb2] {\n  margin-right: 0.12rem;\n}\n.home-content .balance-list .balance-item .right[data-v-0cbb4fb2] {\n  text-align: right;\n}\n.home-content .balance-list .balance-item .right[data-v-0cbb4fb2] :last-child {\n  font-size: 0.24rem;\n  color: #999999;\n  margin-top: 0.06rem;\n}\n.empty[data-v-0cbb4fb2]  .van-empty__image {\n  height: 1.8rem;\n}\n.wrapper[data-v-0cbb4fb2] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.nft-name[data-v-0cbb4fb2] {\n  width: 100%;\n  background: #fff;\n  font-size: 0.24rem;\n  height: 0.8rem;\n}\n.nft-name[data-v-0cbb4fb2] > :nth-child(1) {\n  padding: 0.1rem 0.1rem 0 0.1rem;\n  color: #999;\n  width: 100%;\n  max-width: calc(50vw - 0.6rem);\n}\n.nft-name[data-v-0cbb4fb2] > :nth-child(2) {\n  padding: 0 0.1rem 0.1rem 0.1rem;\n  width: 100%;\n  max-width: calc(50vw - 0.6rem);\n  color: #333;\n}\n.flex-between[data-v-0cbb4fb2] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex-end[data-v-0cbb4fb2] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 0.24rem;\n}\n.risk-status[data-v-0cbb4fb2] {\n  display: inline-block;\n  font-size: 0.2rem;\n  border: 0.02rem solid;\n  border-radius: 0.4rem;\n  padding: 0.02rem 0.04rem;\n  color: #F72121;\n  font-size: 0.24rem;\n  margin-left: 0.04rem;\n}\n.no-select[data-v-0cbb4fb2], .no-select *[data-v-0cbb4fb2] {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.flex-start[data-v-0cbb4fb2] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.flex-start .icon-left[data-v-0cbb4fb2] {\n  margin-right: 0.12rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4f9b2e3c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/ave-empty.png":
/*!*****************************************!*\
  !*** ./src/assets/images/ave-empty.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ave-empty.067f8121.png";

/***/ }),

/***/ "./src/assets/images/bg-bsc.svg":
/*!**************************************!*\
  !*** ./src/assets/images/bg-bsc.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bg-bsc.69cd8fc3.svg";

/***/ }),

/***/ "./src/views/balance.vue":
/*!*******************************!*\
  !*** ./src/views/balance.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _balance_vue_vue_type_template_id_0cbb4fb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance.vue?vue&type=template&id=0cbb4fb2&scoped=true */ "./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true");
/* harmony import */ var _balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance.vue?vue&type=script&lang=js */ "./src/views/balance.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss */ "./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_balance_vue_vue_type_template_id_0cbb4fb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-0cbb4fb2"],['__file',"src/views/balance.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/balance.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/views/balance.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./balance.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss":
/*!****************************************************************************************!*\
  !*** ./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=style&index=0&id=0cbb4fb2&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_style_index_0_id_0cbb4fb2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true":
/*!*************************************************************************!*\
  !*** ./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true ***!
  \*************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_template_id_0cbb4fb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./balance.vue?vue&type=template&id=0cbb4fb2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/balance.vue?vue&type=template&id=0cbb4fb2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_balance_vue_vue_type_template_id_0cbb4fb2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);