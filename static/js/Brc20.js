(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Brc20"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/changeGroup.vue */ "./src/components/changeGroup.vue");
/* harmony import */ var good_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! good-storage */ "./node_modules/good-storage/dist/storage.esm.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Brc20Info',
  props: {
    warningStatus: Boolean
  },
  components: {
    ChangeGroup: _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      visible1: false,
      activeGroup: 0,
      show: false,
      dangerVisible: false,
      agreeStatus: false,
      inscription_number: ''
    };
  },
  computed: {
    tokenInfo() {
      console.log('this.$store.state.tokenInfo', this.$store.state.tokenInfo);
      return this.$store.state.tokenInfo;
    },
    danger() {
      return {
        symbol: this.tokenInfo.symbol,
        danger: true
      };
    },
    collected() {
      return this.$store.state.favorites.includes(this.$store.state.id);
    },
    tokenPriceChange() {
      return this.$store.state.tokenPriceChange || this.tokenInfo.price_change;
    },
    volume24hUSD() {
      return this.$store.state.volume24hUSD || this.tokenInfo.volume_24;
    },
    addressSplit() {
      var _ref, _ref$replace;
      return (_ref = this.tokenInfo.address || '') === null || _ref === void 0 || (_ref$replace = _ref.replace) === null || _ref$replace === void 0 ? void 0 : _ref$replace.call(_ref, new RegExp('(.{4})(.+)(.{4})'), '$1...$3');
    },
    initTokens() {
      return this.$store.state.initTokens;
    },
    holders() {
      var _this$tokenInfo;
      return ((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.holders) || '-';
    },
    circulation() {
      var _this$tokenInfo2, _this$tokenInfo3, _this$tokenInfo4, _this$tokenInfo5;
      let circulation = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.total).minus((_this$tokenInfo3 = this.tokenInfo) === null || _this$tokenInfo3 === void 0 ? void 0 : _this$tokenInfo3.lock_amount).minus((_this$tokenInfo4 = this.tokenInfo) === null || _this$tokenInfo4 === void 0 ? void 0 : _this$tokenInfo4.other_amount).minus((_this$tokenInfo5 = this.tokenInfo) === null || _this$tokenInfo5 === void 0 ? void 0 : _this$tokenInfo5.burn_amount);
      return circulation.lt(0) ? 0 : circulation;
    },
    maxSupply() {
      var _this$tokenInfo6, _this$tokenInfo7;
      let max = new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(((_this$tokenInfo6 = this.tokenInfo) === null || _this$tokenInfo6 === void 0 ? void 0 : _this$tokenInfo6.total) || 0).minus(((_this$tokenInfo7 = this.tokenInfo) === null || _this$tokenInfo7 === void 0 ? void 0 : _this$tokenInfo7.burn_amount) || 0);
      return max.lt(0) ? 0 : max;
    },
    circulationValue() {
      var _this$$store$state;
      return this.circulation * Number(((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.tokenPrice) || this.$store.state.tokenInfo.priceUSD || 0) || 0;
    },
    marketCap() {
      var _this$tokenInfo8, _this$tokenInfo9, _this$tokenInfo0;
      if (((_this$tokenInfo8 = this.tokenInfo) === null || _this$tokenInfo8 === void 0 ? void 0 : _this$tokenInfo8.lock_amount) + ((_this$tokenInfo9 = this.tokenInfo) === null || _this$tokenInfo9 === void 0 ? void 0 : _this$tokenInfo9.other_amount) + ((_this$tokenInfo0 = this.tokenInfo) === null || _this$tokenInfo0 === void 0 ? void 0 : _this$tokenInfo0.burn_amount) > 0) {
        return this.$f.formatNumber2(this.circulationValue || 0, 1, 4, 10 ** 4);
      }
      return this.$f.formatNumber2(this.$store.state.marketCap || this.circulationValue || this.$store.getters.initMarketCap || 0, 1, 4, 10 ** 4);
    },
    groups() {
      return this.$store.state.userFavoriteGroups;
    },
    pair() {
      return this.$store.state.pair || {};
    },
    highRiskTips() {
      if (this.tokenInfo.risk_level < 0) {
        let riskInfo = this.tokenInfo.risk_info && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isJSON"])(this.tokenInfo.risk_info) ? JSON.parse(this.tokenInfo.risk_info) : {};
        return (riskInfo === null || riskInfo === void 0 ? void 0 : riskInfo[this.$store.getters.language]) || this.$t('highRisk');
      }
      return '';
    },
    // liquidityUSD() {
    //   return this.pair.reserve0 * this.pair.token0_price_usd + this.pair.reserve1 * this.pair.token1_price_usd
    // },
    riskLevel() {
      return this.tokenInfo.risk_level;
    },
    chain() {
      var _this$$store$state$id, _this$tokenInfo1;
      let list = (_this$$store$state$id = this.$store.state.id) === null || _this$$store$state$id === void 0 ? void 0 : _this$$store$state$id.split('-');
      return list[(list === null || list === void 0 ? void 0 : list.length) - 1] || ((_this$tokenInfo1 = this.tokenInfo) === null || _this$tokenInfo1 === void 0 ? void 0 : _this$tokenInfo1.chain);
    }
  },
  watch: {
    riskLevel(val) {
      this.agreeStatus = false;
      if (val < 0) {
        let id = this.$store.state.id;
        let tokenDangerVisible = good_storage__WEBPACK_IMPORTED_MODULE_5__["default"].get('tokenDangerVisible', {});
        if (!tokenDangerVisible[id]) {
          this.dangerVisible = true;
        }
      } else {
        this.dangerVisible = false;
      }
    },
    '$store.state.signatureObj': {
      handler() {
        this.$store.dispatch('getUserTokenFavorites');
        this.$store.dispatch('getUserFavoriteGroups');
      },
      deep: true
    },
    '$store.state.id': {
      handler: function () {
        if (this.chain === 'brc20') {
          this.getBrc20Intro();
        } else {
          this.inscription_number = '';
        }
      },
      deep: true
    }
  },
  mounted() {
    console.log('---------$store.state.pair---------', this.$store.state.pair);
    this.init();
  },
  beforeRouteLeave(to, from) {
    var _this$$refs;
    (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.item) === null || _this$$refs === void 0 || _this$$refs.toggle(false);
  },
  methods: {
    getBrc20Intro() {
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["getBrc20Intro"])({
        tokenId: this.$store.state.id,
        chain: 'brc20'
      }).then(res => {
        this.inscription_number = res === null || res === void 0 ? void 0 : res.inscription_number;
      }).catch(() => {
        this.inscription_number = '';
      });
    },
    init() {
      this.agreeStatus = false;
      if (this.riskLevel < 0) {
        let id = this.$store.state.id;
        let tokenDangerVisible = good_storage__WEBPACK_IMPORTED_MODULE_5__["default"].get('tokenDangerVisible', {});
        if (!tokenDangerVisible[id]) {
          this.dangerVisible = true;
        } else {
          this.dangerVisible = false;
        }
      }
      if (this.chain === 'brc20') {
        this.getBrc20Intro();
      } else {
        this.inscription_number = '';
      }
    },
    async collect(row) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      await this.$f.signConfirm();
      row.collected = this.collected;
      if (this.collected) {
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_2__["removeFavorite"])(this.$store.state.id).then(() => {
          this.$store.dispatch('getUserTokenFavorites');
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
          this.visible1 = false;
        }).catch(err => {
          console.log(err);
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }).finally(() => {
          toast.clear();
        });
      } else {
        this.visible1 = true;
      }
    },
    addFavorite(id, remark) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["addFavorite"])(this.$store.state.id, id, remark).then(() => {
        this.$store.dispatch('getUserTokenFavorites');
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
        this.visible1 = false;
      }).catch(err => {
        console.log(err);
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    },
    dropdownChange(status) {
      this.show = status;
    },
    handleConfirm() {
      this.dangerVisible = false;
      let id = this.$store.state.id;
      let tokenDangerVisible = good_storage__WEBPACK_IMPORTED_MODULE_5__["default"].get('tokenDangerVisible', {});
      good_storage__WEBPACK_IMPORTED_MODULE_5__["default"].set('tokenDangerVisible', {
        ...tokenDangerVisible,
        [id]: true
      });
    },
    handleNoticeClose() {
      var _localStorage, _localStorage2;
      let id = this.$store.state.id || this.$route.params.id;
      let tokenWarningNotice = (_localStorage = localStorage) !== null && _localStorage !== void 0 && _localStorage.tokenWarningNotice ? JSON.parse((_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.tokenWarningNotice) : {};
      tokenWarningNotice[id] = true;
      localStorage.tokenWarningNotice = JSON.stringify(tokenWarningNotice);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/swap.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_inscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/inscription */ "./src/utils/inscription.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SwapBrc',
  data() {
    return {
      showPopover: false,
      inscriptions: _utils_inscription__WEBPACK_IMPORTED_MODULE_0__["inscriptions"]
    };
  },
  computed: {
    pair() {
      return this.$store.state.pair || {};
    },
    tokenInfo() {
      console.log('this.$store.state.tokenInfo', this.$store.state.tokenInfo);
      return this.$store.state.tokenInfo;
    }
  },
  methods: {
    tableRowClick(type) {
      var _this$tokenInfo, _this$tokenInfo2, _this$$store$state$pa, _this$tokenInfo3, _window, _window3, _window4;
      let url = '';
      let tick = (_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.symbol;
      let protocol = ((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.protocol) == 'brc-20' && ((_this$$store$state$pa = this.$store.state.pair) === null || _this$$store$state$pa === void 0 ? void 0 : _this$$store$state$pa.amm) == 'unisat' ? 'brc20' : (_this$tokenInfo3 = this.tokenInfo) === null || _this$tokenInfo3 === void 0 ? void 0 : _this$tokenInfo3.protocol;
      if (type === 'mint') {
        if (this.tokenInfo.chain === 'brc20') {
          url = `https://brc20swap.github.io/inscribe?tick=${tick}&op=${protocol}&amt=1`;
        }
      } else if (type === 'inscript') {
        if (this.tokenInfo.chain === 'runes') {
          url = `https://unisat.io/runes/inscribe?tab=mint&rune=${this.tokenInfo.symbol}`;
        } else {
          var _this$inscriptions$th, _this$$store$state$pa2;
          url = (_this$inscriptions$th = this.inscriptions[(_this$$store$state$pa2 = this.$store.state.pair) === null || _this$$store$state$pa2 === void 0 ? void 0 : _this$$store$state$pa2.amm]) === null || _this$inscriptions$th === void 0 ? void 0 : _this$inscriptions$th.mint_url;
        }

        // if (this.tokenInfo.chain === 'eth') {
        //   if (protocol == 'ierc-20') {
        //     url = 'https://www.ierc20.com/tick/ethi'
        //   } else {
        //     url = 'https://www.etch.market/tokens'
        //   }
        // } else if (this.tokenInfo.chain === 'avalanche') {
        //   url = "https://avascriptions.com/tokens"
        // } else if (this.tokenInfo.chain === 'brc20') {
        //   if (!this.tokenInfo?.address?.includes(':')) {
        //     url = 'https://evm.ink/create/inscription'
        //   } else {
        //     url = 'https://www.satsx.io/inscribe/pipe'
        //   }
        // }
      } else if (type === 'swap') {
        if (this.tokenInfo.chain === 'runes') {
          url = `https://unisat.io/runes/market?tick=${this.tokenInfo.symbol}`;
        } else {
          var _this$inscriptions$th2, _this$$store$state$pa3;
          url = (_this$inscriptions$th2 = this.inscriptions[(_this$$store$state$pa3 = this.$store.state.pair) === null || _this$$store$state$pa3 === void 0 ? void 0 : _this$$store$state$pa3.amm]) === null || _this$inscriptions$th2 === void 0 ? void 0 : _this$inscriptions$th2.trade_url;
        }

        // if (this.tokenInfo.chain === 'eth') {
        //   if (protocol == 'ierc-20') {
        //     url = 'https://www.ierc20.com/market/ethi'
        //   } else {
        //     url = `https://www.etch.market/market/token?category=token&collectionName=erc-20%20${tick}`
        //   }
        // } else if (this.tokenInfo.chain === 'avalanche') {
        //   url = `https://avascriptions.com/market/token?tick=${tick}`
        // } else if (this.tokenInfo.chain === 'brc20') {
        //   if (this.tokenInfo?.address?.includes(':')) {
        //     url = `https://unisat.io/market/brc20?tick=${tick}`
        //   } else {
        //     url= `https://www.satsx.io/marketplace/pipe/dmt/sort?page=1`
        //   }
        // } else if (this.tokenInfo.chain === 'polygon') {
        //   url = `https://xrc.market/market/137/pook`
        // } else {
        //   url = `https://evm.ink/marketplace?tab=tokens&protocol=${protocol}&orderBy=Price%3A+Lowest&tick=${tick}`
        // }
      }
      url = url.replace('{p}', protocol);
      url = url.replace('{tick}', tick);
      if ((_window = window) !== null && _window !== void 0 && (_window = _window.main) !== null && _window !== void 0 && _window.openDAppPage) {
        var _window2, _window2$openDAppPage;
        (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.main) === null || _window2 === void 0 || (_window2$openDAppPage = _window2.openDAppPage) === null || _window2$openDAppPage === void 0 || _window2$openDAppPage.call(_window2, url, '', '');
      } else if ((_window3 = window) !== null && _window3 !== void 0 && (_window3 = _window3.webkit) !== null && _window3 !== void 0 && (_window3 = _window3.messageHandlers) !== null && _window3 !== void 0 && _window3.iOS_Native_InjectJavascript || (_window4 = window) !== null && _window4 !== void 0 && _window4.WKWebViewJavascriptBridge) {
        this.$f.callIos("appJumpBrowser", false, url);
      } else {
        window.location.href = url;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Platform',
  props: {
    tableList: Array,
    loading: Boolean
  },
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.loading;
    }
  },
  methods: {
    goLink() {}
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _txs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./txs */ "./src/components/brc20/tabs/txs.vue");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform */ "./src/components/brc20/tabs/platform.vue");
/* harmony import */ var _holders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./holders */ "./src/components/brc20/tabs/holders.vue");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my */ "./src/components/brc20/tabs/my.vue");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info */ "./src/components/brc20/tabs/info.vue");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tabs-brc',
  data() {
    return {
      active: 1,
      txs: [],
      loadingTx: false,
      tableList: [],
      loadingHolders: false,
      tableHoldersList: [],
      loadingRecords: false,
      tableRecordsList: [],
      Timer: null,
      brc20Info: {},
      userTxs: {},
      loadingUserTxs: false,
      loadingPlatform: false,
      tablePlatformList: [],
      txCount: {}
    };
  },
  components: {
    Txs: _txs__WEBPACK_IMPORTED_MODULE_3__["default"],
    Platform: _platform__WEBPACK_IMPORTED_MODULE_4__["default"],
    Holders: _holders__WEBPACK_IMPORTED_MODULE_5__["default"],
    My: _my__WEBPACK_IMPORTED_MODULE_6__["default"],
    Info: _info__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: {
    tokenInfo() {
      console.log('this.$store.state.tokenInfo', this.$store.state.tokenInfo);
      return this.$store.state.tokenInfo;
    },
    list() {
      var _this$tokenInfo, _this$tokenInfo2;
      let isBrc20 = ((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.chain) === 'brc20' || ((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.chain) === 'runes';
      return [{
        name: this.$t('txs'),
        id: 1
      }, {
        name: this.$t('platform'),
        id: 2
      }, {
        name: this.$t('holder3'),
        id: 3
      }, ...(isBrc20 ? [{
        name: this.$t('myTransactions'),
        id: 4
      }] : []), {
        name: this.$t('intro'),
        id: 5
      }];
    },
    netId() {
      return this.$store.getters.netId;
    },
    currentAccount() {
      return this.$store.state.currentAccount || '';
    },
    currentChain() {
      var _this$$store$state$id;
      let list = (_this$$store$state$id = this.$store.state.id) === null || _this$$store$state$id === void 0 ? void 0 : _this$$store$state$id.split('-');
      console.log('currentChain', list[(list === null || list === void 0 ? void 0 : list.length) - 1]);
      return list[(list === null || list === void 0 ? void 0 : list.length) - 1] || this.tokenInfo.chain;
    }
  },
  watch: {
    // '$store.state.speedMode'() {
    //   this.active = 0
    // },
    '$store.state.id'() {
      this.init();
      if (this.active == 5) {
        this.getIntro();
      }
      if (this.active == 2) {
        this.getPlatform();
      }
    },
    '$store.state.pair.value'(val) {
      if (val) {
        if (this.active == 1) {
          if (this.$store.state.pair.value !== '' && this.$store.state.pair.id === this.$store.state.id) {
            this.getPairTxs();
          }
        }
        if (this.active == 2) {
          this.getRecords();
        }
      }
    },
    active(val) {
      if (val == 1) {
        if (this.$store.state.pair.value !== '' && this.$store.state.pair.id === this.$store.state.id) {
          this.getPairTxs();
        }
      }
      if (val == 2) {
        this.getRecords();
        this.getPlatform();
      }
      if (val == 3) {
        this.getHolders();
      }
      if (val == 4) {
        this.getUserTxs();
      }
      if (val == 5) {
        this.getIntro();
      }
    },
    currentAccount(val) {
      if (this.active == 4) {
        this.getUserTxs();
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$store.state.pair.value !== '' && this.$store.state.pair.id === this.$store.state.id) {
        this.getPairTxs();
      }
    },
    getPlatform() {
      this.loadingPlatform = true;
      console.log('----getRunesPlatform-------', this.currentChain);
      if (this.currentChain === 'runes') {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getRunesPlatform"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          console.log('----getRunesPlatform-------', res);
          this.tablePlatformList = (res === null || res === void 0 ? void 0 : res.map(i => {
            var _i$token0_symbol, _i$token0_symbol2, _i$token1_symbol, _i$token1_symbol2;
            return {
              ...i,
              token0_symbol: i !== null && i !== void 0 && (_i$token0_symbol = i.token0_symbol) !== null && _i$token0_symbol !== void 0 && _i$token0_symbol.includes('(') ? i === null || i === void 0 || (_i$token0_symbol2 = i.token0_symbol) === null || _i$token0_symbol2 === void 0 || (_i$token0_symbol2 = _i$token0_symbol2.split('(')) === null || _i$token0_symbol2 === void 0 ? void 0 : _i$token0_symbol2[0] : i.token0_symbol,
              token1_symbol: i !== null && i !== void 0 && (_i$token1_symbol = i.token1_symbol) !== null && _i$token1_symbol !== void 0 && _i$token1_symbol.includes('(') ? i === null || i === void 0 || (_i$token1_symbol2 = i.token1_symbol) === null || _i$token1_symbol2 === void 0 || (_i$token1_symbol2 = _i$token1_symbol2.split('(')) === null || _i$token1_symbol2 === void 0 ? void 0 : _i$token1_symbol2[0] : i.token1_symbol
            };
          })) || [];
        }).finally(() => {
          this.loadingPlatform = false;
        });
      } else {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getBrc20Platform"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          console.log('----getBrc20Platform-------', res);
          this.tablePlatformList = (res === null || res === void 0 ? void 0 : res.map(i => {
            var _i$token0_symbol3, _i$token0_symbol4, _i$token1_symbol3, _i$token1_symbol4;
            return {
              ...i,
              token0_symbol: i !== null && i !== void 0 && (_i$token0_symbol3 = i.token0_symbol) !== null && _i$token0_symbol3 !== void 0 && _i$token0_symbol3.includes('(') ? i === null || i === void 0 || (_i$token0_symbol4 = i.token0_symbol) === null || _i$token0_symbol4 === void 0 || (_i$token0_symbol4 = _i$token0_symbol4.split('(')) === null || _i$token0_symbol4 === void 0 ? void 0 : _i$token0_symbol4[0] : i.token0_symbol,
              token1_symbol: i !== null && i !== void 0 && (_i$token1_symbol3 = i.token1_symbol) !== null && _i$token1_symbol3 !== void 0 && _i$token1_symbol3.includes('(') ? i === null || i === void 0 || (_i$token1_symbol4 = i.token1_symbol) === null || _i$token1_symbol4 === void 0 || (_i$token1_symbol4 = _i$token1_symbol4.split('(')) === null || _i$token1_symbol4 === void 0 ? void 0 : _i$token1_symbol4[0] : i.token1_symbol
            };
          })) || [];
        }).finally(() => {
          this.loadingPlatform = false;
        });
      }
    },
    getUserTxs() {
      let data = {
        user_address: this.currentAccount,
        tokenId: this.$store.state.id,
        chain: this.currentChain
      };
      this.loadingUserTxs = true;
      if (this.currentChain === 'runes') {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getRunesUserTxs"])(data).then(res => {
          this.userTxs = res;
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.loadingUserTxs = false;
        });
      } else {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getBrc20UserTxs"])(data).then(res => {
          this.userTxs = res;
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.loadingUserTxs = false;
        });
      }
    },
    getPairTxs() {
      this.txCount = {};
      this.loadingTx = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_8__["getPairTxs"])(this.$store.state.pair.value).then(res => {
        var _result$reverse;
        console.log('-----------getPairTxs-------------------', res);
        let result = res || [];
        result === null || result === void 0 || (_result$reverse = result.reverse) === null || _result$reverse === void 0 || _result$reverse.call(result);
        this.tableList = (result === null || result === void 0 ? void 0 : result.map(i => {
          this.txCount[i.wallet_address] = (this.txCount[i.wallet_address] || 0) + 1;
          return {
            ...i,
            count: this.txCount[i.wallet_address]
          };
        })) || [];
        this.tableList.reverse();
      }).finally(() => {
        this.loadingTx = false;
      });
    },
    getHolders() {
      this.loadingHolders = true;
      if (this.currentChain == 'runes') {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getRunesHolders"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          this.tableHoldersList = (res === null || res === void 0 ? void 0 : res.map(i => ({
            ...i,
            ratio: (i === null || i === void 0 ? void 0 : i.ratio) * 100 || 0
          }))) || [];
        }).finally(() => {
          this.loadingHolders = false;
        });
      } else {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getBrc20Holders"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          this.tableHoldersList = (res === null || res === void 0 ? void 0 : res.map(i => ({
            ...i,
            ratio: (i === null || i === void 0 ? void 0 : i.ratio) * 100 || 0
          }))) || [];
        }).finally(() => {
          this.loadingHolders = false;
        });
      }
    },
    getRecords() {
      this.loadingRecords = true;
      if (this.currentChain === 'runes') {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getRunesRecords"])({
          pairId: this.$store.state.pair.value,
          chain: this.currentChain
        }).then(res => {
          // console.log('-----getRunesRecords------------', res)
          this.tableRecordsList = (res === null || res === void 0 ? void 0 : res.map(i => ({
            ...i,
            type: i.op_type,
            transactionAddress: i.transaction,
            network: i.chain || 'bsc'
          }))) || [];
        }).catch(err => {
          this.loadingRecords = false;
          this.tableRecordsList = [];
          console.log(err);
        }).finally(() => {
          this.loadingRecords = false;
          // if (this.Timer) {
          //   clearTimeout(this.Timer)
          // }
          // this.Timer = setTimeout(() => {
          //   this.getRunesRecords()
          // }, 60000)
        });
      } else {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getBrc20Records"])({
          pairId: this.$store.state.pair.value,
          chain: this.currentChain
        }).then(res => {
          // console.log('-----getBrc20Records------------', res)
          this.tableRecordsList = (res === null || res === void 0 ? void 0 : res.map(i => ({
            ...i,
            type: i.op_type,
            transactionAddress: i.transaction,
            network: i.chain || 'bsc'
          }))) || [];
        }).catch(err => {
          this.loadingRecords = false;
          this.tableRecordsList = [];
          console.log(err);
        }).finally(() => {
          this.loadingRecords = false;
          // if (this.Timer) {
          //   clearTimeout(this.Timer)
          // }
          // this.Timer = setTimeout(() => {
          //   this.getBrc20Records()
          // }, 60000)
        });
      }
    },
    getIntro() {
      if (this.currentChain === 'runes') {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getRunesIntro"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          var _JSON$parse, _JSON$parse2, _JSON$parse3, _JSON$parse4, _JSON$parse5, _JSON$parse6, _JSON$parse7, _JSON$parse8, _JSON$parse9, _JSON$parse0, _JSON$parse1, _JSON$parse10, _JSON$parse11, _JSON$parse12, _JSON$parse13;
          this.brc20Info = res;
          let i = res;
          let medias = [{
            name: this.$t('website'),
            icon: 'web',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.website : ''
          }, {
            name: this.$t('whitepaper'),
            icon: 'whitepaper',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.whitepaper) ? (_JSON$parse2 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.whitepaper : ''
          }, {
            name: 'Blog',
            icon: 'blog',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse3 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse3 === void 0 ? void 0 : _JSON$parse3.blog : ''
          }, {
            name: 'Btok',
            icon: 'Btok',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse4 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse4 === void 0 ? void 0 : _JSON$parse4.btok : ''
          }, {
            name: 'Discord',
            icon: 'discord1',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse5 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse5 === void 0 ? void 0 : _JSON$parse5.discord : ''
          }, {
            name: 'Email',
            icon: 'email',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse6 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse6 === void 0 ? void 0 : _JSON$parse6.email : ''
          }, {
            name: 'Facebook',
            icon: 'facebook',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse7 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse7 === void 0 ? void 0 : _JSON$parse7.facebook : ''
          }, {
            name: 'Github',
            icon: 'github',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse8 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse8 === void 0 ? void 0 : _JSON$parse8.github : ''
          }, {
            name: 'Linkedin',
            icon: 'linkedin',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse9 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse9 === void 0 ? void 0 : _JSON$parse9.linkedin : ''
          }, {
            name: 'QQ',
            icon: 'QQ',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse0 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse0 === void 0 ? void 0 : _JSON$parse0.qq : ''
          }, {
            name: 'Reddit',
            icon: 'reddit',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse1 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse1 === void 0 ? void 0 : _JSON$parse1.reddit : ''
          }, {
            name: 'Slack',
            icon: 'slack',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse10 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse10 === void 0 ? void 0 : _JSON$parse10.slack : ''
          }, {
            name: 'Telegram',
            icon: 'TG',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse11 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse11 === void 0 ? void 0 : _JSON$parse11.telegram : ''
          }, {
            name: 'Twitter',
            icon: 'twitter1',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse12 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse12 === void 0 ? void 0 : _JSON$parse12.twitter : ''
          }, {
            name: 'Wechat',
            icon: 'wechat',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse13 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse13 === void 0 ? void 0 : _JSON$parse13.wechat : ''
          }];
          this.brc20Info = {
            ...i,
            appendix: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? JSON.parse(i === null || i === void 0 ? void 0 : i.appendix) : '',
            created_at: (i === null || i === void 0 ? void 0 : i.created_at) !== '1970-01-01T00:00:00Z' && (i === null || i === void 0 ? void 0 : i.created_at) !== '0001-01-01T00:00:00Z' ? i.created_at : 0,
            medias
          };
        }).catch(err => {
          console.log(err);
        });
      } else {
        Object(_api__WEBPACK_IMPORTED_MODULE_8__["getBrc20Intro"])({
          tokenId: this.$store.state.id,
          chain: this.currentChain
        }).then(res => {
          var _JSON$parse14, _JSON$parse15, _JSON$parse16, _JSON$parse17, _JSON$parse18, _JSON$parse19, _JSON$parse20, _JSON$parse21, _JSON$parse22, _JSON$parse23, _JSON$parse24, _JSON$parse25, _JSON$parse26, _JSON$parse27, _JSON$parse28;
          this.brc20Info = res;
          let i = res;
          let medias = [{
            name: this.$t('website'),
            icon: 'web',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse14 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse14 === void 0 ? void 0 : _JSON$parse14.website : ''
          }, {
            name: this.$t('whitepaper'),
            icon: 'whitepaper',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.whitepaper) ? (_JSON$parse15 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse15 === void 0 ? void 0 : _JSON$parse15.whitepaper : ''
          }, {
            name: 'Blog',
            icon: 'blog',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse16 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse16 === void 0 ? void 0 : _JSON$parse16.blog : ''
          }, {
            name: 'Btok',
            icon: 'Btok',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse17 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse17 === void 0 ? void 0 : _JSON$parse17.btok : ''
          }, {
            name: 'Discord',
            icon: 'discord1',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse18 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse18 === void 0 ? void 0 : _JSON$parse18.discord : ''
          }, {
            name: 'Email',
            icon: 'email',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse19 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse19 === void 0 ? void 0 : _JSON$parse19.email : ''
          }, {
            name: 'Facebook',
            icon: 'facebook',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse20 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse20 === void 0 ? void 0 : _JSON$parse20.facebook : ''
          }, {
            name: 'Github',
            icon: 'github',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse21 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse21 === void 0 ? void 0 : _JSON$parse21.github : ''
          }, {
            name: 'Linkedin',
            icon: 'linkedin',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse22 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse22 === void 0 ? void 0 : _JSON$parse22.linkedin : ''
          }, {
            name: 'QQ',
            icon: 'QQ',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse23 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse23 === void 0 ? void 0 : _JSON$parse23.qq : ''
          }, {
            name: 'Reddit',
            icon: 'reddit',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse24 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse24 === void 0 ? void 0 : _JSON$parse24.reddit : ''
          }, {
            name: 'Slack',
            icon: 'slack',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse25 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse25 === void 0 ? void 0 : _JSON$parse25.slack : ''
          }, {
            name: 'Telegram',
            icon: 'TG',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse26 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse26 === void 0 ? void 0 : _JSON$parse26.telegram : ''
          }, {
            name: 'Twitter',
            icon: 'twitter1',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse27 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse27 === void 0 ? void 0 : _JSON$parse27.twitter : ''
          }, {
            name: 'Wechat',
            icon: 'wechat',
            url: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? (_JSON$parse28 = JSON.parse(i === null || i === void 0 ? void 0 : i.appendix)) === null || _JSON$parse28 === void 0 ? void 0 : _JSON$parse28.wechat : ''
          }];
          this.brc20Info = {
            ...i,
            appendix: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_9__["isJSON"])(i === null || i === void 0 ? void 0 : i.appendix) ? JSON.parse(i === null || i === void 0 ? void 0 : i.appendix) : '',
            created_at: (i === null || i === void 0 ? void 0 : i.created_at) !== '1970-01-01T00:00:00Z' && (i === null || i === void 0 ? void 0 : i.created_at) !== '0001-01-01T00:00:00Z' ? i.created_at : 0,
            medias
          };
          console.log('-------this.brc20Info--------------', this.brc20Info);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/info.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Info',
  props: {
    brc20Info: Object
  },
  data() {
    return {};
  },
  computed: {
    language() {
      return this.$store.getters.language;
    },
    runesInfo() {
      return this.$store.state.tokenInfo;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/my.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userTxs: Object,
    loading: Boolean
  },
  data() {
    return {
      tabActive: 'tx'
    };
  },
  computed: {
    isLoading() {
      return this.loading;
    },
    netId() {
      return this.$store.getters.netId;
    },
    currentAccount() {
      return this.$store.state.currentAccount || '';
    },
    tokenInfo() {
      return this.$store.state.tokenInfo;
    },
    tabs1() {
      return [{
        name: this.$t('myTx'),
        id: 'tx'
      }, {
        name: this.$t('myOrders'),
        id: 'order'
      }];
    }
  },
  methods: {
    onSelect(item) {
      this.type = item.value;
    },
    goLink(item) {
      if (item !== null && item !== void 0 && item.transaction) {
        window.location.href = this.$f.formatExplorerUrl(item === null || item === void 0 ? void 0 : item.chain, item === null || item === void 0 ? void 0 : item.transaction, 'tx');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record */ "./src/components/brc20/tabs/record.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Platform',
  props: {
    tableList: Array,
    loading: Boolean,
    tableRecordsList: Array,
    loadingRecords: Boolean
  },
  data() {
    return {
      showPopover: [false, false, false, false, false],
      show: false,
      list: [],
      loading1: false
    };
  },
  components: {
    Record: _record__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    // pairs() {
    //   return this.$store.state.tokenInfo?.pairs || []
    // },
    isLoading() {
      return this.loading;
    }
  },
  watch: {
    pairs() {
      return this.showPopover = this.pairs.map(() => false);
    }
  },
  methods: {
    goLink(item) {
      // window.open(this.$f.formatExplorerUrl(item.chain, item.pair, 'address'))
      // this.$store.dispatch('getToken', item.pair)
      this.$store.commit('setInitToken', item.pair);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/record.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/utils.js */ "./src/utils/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Records',
  props: {
    tableList: Array,
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    tokenInfo() {
      return this.$store.state.tokenInfo || Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getLastSearch"])();
    },
    tokenAddress() {
      var _this$$f$getAddressAn;
      return this.$store.state.id ? (_this$$f$getAddressAn = this.$f.getAddressAndChainFromId(this.$store.state.id)) === null || _this$$f$getAddressAn === void 0 ? void 0 : _this$$f$getAddressAn.address : '';
    },
    addressSplit() {
      return this.tokenInfo.address.replace(new RegExp('(.{4})(.+)(.{4})'), '$1...$3');
    },
    isLoading() {
      return this.loading;
    }
  },
  methods: {
    goLink(item) {
      window.open(this.$f.formatExplorerUrl(item.network, item.transactionAddress, 'tx'));
    },
    jumpLp() {
      var _this$ave_globalConfi, _this$$store$state$pa, _this$$store$state$pa2, _this$$store$state, _this$$store$state2, _this$$store$state3, _this$$store$state$pa3, _this$$store$state$pa4;
      let lp_url_domain = ((_this$ave_globalConfi = this.ave_globalConfig) === null || _this$ave_globalConfi === void 0 ? void 0 : _this$ave_globalConfi.lp_url) || 'https://m.jfliquidity.xyz/add';
      let token0 = (_this$$store$state$pa = this.$store.state.pair) === null || _this$$store$state$pa === void 0 ? void 0 : _this$$store$state$pa.target_token;
      let token1 = ((_this$$store$state$pa2 = this.$store.state.pair) === null || _this$$store$state$pa2 === void 0 ? void 0 : _this$$store$state$pa2.target_token) == ((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 || (_this$$store$state = _this$$store$state.pair) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.token0_address) ? (_this$$store$state2 = this.$store.state) === null || _this$$store$state2 === void 0 || (_this$$store$state2 = _this$$store$state2.pair) === null || _this$$store$state2 === void 0 ? void 0 : _this$$store$state2.token1_address : (_this$$store$state3 = this.$store.state) === null || _this$$store$state3 === void 0 || (_this$$store$state3 = _this$$store$state3.pair) === null || _this$$store$state3 === void 0 ? void 0 : _this$$store$state3.token0_address;
      let chain = (_this$$store$state$pa3 = this.$store.state.pair) === null || _this$$store$state$pa3 === void 0 ? void 0 : _this$$store$state$pa3.chain;
      let swap = (_this$$store$state$pa4 = this.$store.state.pair) === null || _this$$store$state$pa4 === void 0 ? void 0 : _this$$store$state$pa4.amm;
      let url = `${lp_url_domain}?token0=${token0}&token1=${token1}&swap=${swap}&chain=${chain}`;
      if (url) {
        window.location.href = url;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constants.js */ "./src/utils/constants.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Table',
  props: {
    tableList: Array,
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPopover: [false, false, false, false, false]
    };
  },
  computed: {
    tokenInfo() {
      return this.$store.state.tokenInfo || Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["getLastSearch"])();
    },
    tokenAddress() {
      return this.$store.state.id ? (_utils_constants_js__WEBPACK_IMPORTED_MODULE_3__["MAIN_COIN"][this.$store.state.id] || this.$store.state.id).split('-')[0] : '';
    },
    addressSplit() {
      return this.tokenInfo.address.replace(new RegExp('(.{4})(.+)(.{4})'), '$1...$3');
    },
    isLoading() {
      return this.loading;
    }
  },
  watch: {
    tableList() {
      return this.showPopover = this.tableList.map(() => false);
    }
  },
  methods: {
    isBuy(row) {
      var _this$tokenAddress, _this$tokenAddress$to, _row$from_address, _row$from_address$toL, _this$tokenAddress2, _this$tokenAddress2$t, _row$to_address$toLow, _row$to_address;
      if (row.from_address && ((_this$tokenAddress = this.tokenAddress) === null || _this$tokenAddress === void 0 || (_this$tokenAddress$to = _this$tokenAddress.toLowerCase) === null || _this$tokenAddress$to === void 0 ? void 0 : _this$tokenAddress$to.call(_this$tokenAddress)) === ((_row$from_address = row.from_address) === null || _row$from_address === void 0 || (_row$from_address$toL = _row$from_address.toLowerCase) === null || _row$from_address$toL === void 0 ? void 0 : _row$from_address$toL.call(_row$from_address))) {
        return false;
      }
      if (row.to_address && ((_this$tokenAddress2 = this.tokenAddress) === null || _this$tokenAddress2 === void 0 || (_this$tokenAddress2$t = _this$tokenAddress2.toLowerCase) === null || _this$tokenAddress2$t === void 0 ? void 0 : _this$tokenAddress2$t.call(_this$tokenAddress2)) === ((_row$to_address$toLow = (_row$to_address = row.to_address).toLowerCase) === null || _row$to_address$toLow === void 0 ? void 0 : _row$to_address$toLow.call(_row$to_address))) {
        return true;
      }
      let m = row.amount0In > 0 ? row.token0Address : row.token1Address;
      return m !== this.tokenAddress;
    },
    getAmount(row) {
      var _this$tokenAddress3, _this$tokenAddress3$t, _row$from_address2, _row$from_address2$to, _this$tokenAddress4, _this$tokenAddress4$t, _row$to_address$toLow2, _row$to_address2;
      if (row.from_address && ((_this$tokenAddress3 = this.tokenAddress) === null || _this$tokenAddress3 === void 0 || (_this$tokenAddress3$t = _this$tokenAddress3.toLowerCase) === null || _this$tokenAddress3$t === void 0 ? void 0 : _this$tokenAddress3$t.call(_this$tokenAddress3)) === ((_row$from_address2 = row.from_address) === null || _row$from_address2 === void 0 || (_row$from_address2$to = _row$from_address2.toLowerCase) === null || _row$from_address2$to === void 0 ? void 0 : _row$from_address2$to.call(_row$from_address2))) {
        return this.$f.formatNumber(row.from_amount);
      }
      if (row.to_address && ((_this$tokenAddress4 = this.tokenAddress) === null || _this$tokenAddress4 === void 0 || (_this$tokenAddress4$t = _this$tokenAddress4.toLowerCase) === null || _this$tokenAddress4$t === void 0 ? void 0 : _this$tokenAddress4$t.call(_this$tokenAddress4)) === ((_row$to_address$toLow2 = (_row$to_address2 = row.to_address).toLowerCase) === null || _row$to_address$toLow2 === void 0 ? void 0 : _row$to_address$toLow2.call(_row$to_address2))) {
        return this.$f.formatNumber(row.to_amount);
      }
      let amount = 0;
      if (row.amount0In > 0) {
        if (this.tokenAddress === row.token0Address) {
          amount = row.amount0In;
        } else {
          amount = row.amount1Out;
        }
      } else {
        if (this.tokenAddress === row.token1Address) {
          amount = row.amount1In;
        } else {
          amount = row.amount0Out;
        }
      }
      return this.$f.formatNumber(amount);
    },
    getPrice(row) {
      var _this$tokenAddress5, _this$tokenAddress5$t, _row$from_address3, _row$from_address3$to, _this$tokenAddress6, _this$tokenAddress6$t, _row$to_address$toLow3, _row$to_address3;
      if (row !== null && row !== void 0 && row.from_address && ((_this$tokenAddress5 = this.tokenAddress) === null || _this$tokenAddress5 === void 0 || (_this$tokenAddress5$t = _this$tokenAddress5.toLowerCase) === null || _this$tokenAddress5$t === void 0 ? void 0 : _this$tokenAddress5$t.call(_this$tokenAddress5)) === (row === null || row === void 0 || (_row$from_address3 = row.from_address) === null || _row$from_address3 === void 0 || (_row$from_address3$to = _row$from_address3.toLowerCase) === null || _row$from_address3$to === void 0 ? void 0 : _row$from_address3$to.call(_row$from_address3))) {
        return row === null || row === void 0 ? void 0 : row.from_price_usd;
      }
      if (row !== null && row !== void 0 && row.to_address && ((_this$tokenAddress6 = this.tokenAddress) === null || _this$tokenAddress6 === void 0 || (_this$tokenAddress6$t = _this$tokenAddress6.toLowerCase) === null || _this$tokenAddress6$t === void 0 ? void 0 : _this$tokenAddress6$t.call(_this$tokenAddress6)) === (row === null || row === void 0 || (_row$to_address$toLow3 = (_row$to_address3 = row.to_address).toLowerCase) === null || _row$to_address$toLow3 === void 0 ? void 0 : _row$to_address$toLow3.call(_row$to_address3))) {
        return row.to_price_usd;
      }
      let price = 0;
      if (this.tokenAddress === (row === null || row === void 0 ? void 0 : row.token0Address)) {
        price = (row === null || row === void 0 ? void 0 : row.token0PriceUSD) || 0;
      } else {
        price = (row === null || row === void 0 ? void 0 : row.token1PriceUSD) || 0;
      }
      return price;
    },
    getAmountUSD(row) {
      var _this$tokenAddress7, _this$tokenAddress7$t, _row$from_address4, _row$from_address4$to, _this$tokenAddress8, _this$tokenAddress8$t, _row$to_address$toLow4, _row$to_address4;
      if (row.from_address && ((_this$tokenAddress7 = this.tokenAddress) === null || _this$tokenAddress7 === void 0 || (_this$tokenAddress7$t = _this$tokenAddress7.toLowerCase) === null || _this$tokenAddress7$t === void 0 ? void 0 : _this$tokenAddress7$t.call(_this$tokenAddress7)) === ((_row$from_address4 = row.from_address) === null || _row$from_address4 === void 0 || (_row$from_address4$to = _row$from_address4.toLowerCase) === null || _row$from_address4$to === void 0 ? void 0 : _row$from_address4$to.call(_row$from_address4))) {
        return this.$f.formatNumber(Number(row.from_amount) * Number(row.from_price_usd));
      }
      if (row.to_address && ((_this$tokenAddress8 = this.tokenAddress) === null || _this$tokenAddress8 === void 0 || (_this$tokenAddress8$t = _this$tokenAddress8.toLowerCase) === null || _this$tokenAddress8$t === void 0 ? void 0 : _this$tokenAddress8$t.call(_this$tokenAddress8)) === ((_row$to_address$toLow4 = (_row$to_address4 = row.to_address).toLowerCase) === null || _row$to_address$toLow4 === void 0 ? void 0 : _row$to_address$toLow4.call(_row$to_address4))) {
        return this.$f.formatNumber(Number(row.to_amount) * Number(row.to_price_usd));
      }
      return this.$f.formatNumber(row.amountUSD);
    },
    goLink(item) {
      if (item.chain === 'runes') {
        window.open(`https://mempool.space/tx/${item.transaction}`);
      } else {
        this.$f.openBrowserAll(this.$f.formatExplorerUrl(item.chain, item.transaction, 'tx'));
      }
    },
    formatDecimal(n) {
      if (Number(n) && Number(n) < 0.0001) {
        let d = Math.ceil(Math.log10(0.1 / Number(n)));
        return '0.0' + `{${d}}` + String(n).replace(new RegExp(`^0\\.0{${d}}`), '');
      }
      return n;
    },
    isShowRow(row) {
      return (!this.$store.state.filterContent.minCondition || Number(this.getAmountUSD(row)) > Number(this.$store.state.filterContent.min)) && (this.$store.state.filterContent.buy && this.isBuy(row) || this.$store.state.filterContent.sell && !this.isBuy(row));
    },
    highlight(row) {
      return this.$store.state.filterContent.maxCondition && Number(this.getAmountUSD(row)) >= Number(this.$store.state.filterContent.max);
    },
    deleteAttention(address) {
      this.$emit('deleteAttention', address);
    },
    addAttention(address, remark) {
      this.$emit('addAttention', address, remark);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/brc.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_brc20_brc20Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/brc20/brc20Info */ "./src/components/brc20/brc20Info.vue");
/* harmony import */ var _components_kLineChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/kLineChart.vue */ "./src/components/kLineChart.vue");
/* harmony import */ var _components_brc20_swap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/brc20/swap */ "./src/components/brc20/swap.vue");
/* harmony import */ var _components_brc20_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/brc20/tabs */ "./src/components/brc20/tabs/index.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Brc',
  data() {
    return {
      warningStatus: false
    };
  },
  components: {
    Brc20Info: _components_brc20_brc20Info__WEBPACK_IMPORTED_MODULE_0__["default"],
    kLineBrcChart: _components_kLineChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Swap: _components_brc20_swap__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tabs: _components_brc20_tabs__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    tokenInfo() {
      return this.$store.state.tokenInfo;
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    '$store.state.id'(val) {
      if (val) {
        this.$f.callIos('appSetWebTitle', '');
        this.init();
      }
    },
    '$store.state.tokenInfo.symbol': {
      handler(val) {
        if (this.$route.name === 'Token' && val) {
          this.$f.callIos('appSetWebTitle', val);
        }
      },
      immediate: true
    }
  },
  methods: {
    init() {
      var _this$$refs, _this$$refs$getCloseD;
      if (this.$store.state.id) {
        // this.$store.dispatch('initWs')
        this.getTokenData();
        this.$store.commit('setState', {
          name: 'keepAliveExclude',
          value: []
        });
        // this.$store.dispatch('getLPHolders')
        // this.$store.dispatch('getChatMemberCount')
        // this.$store.dispatch('getChatUnreadMsgCount')
      }
      (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.downloadPop1) === null || _this$$refs === void 0 || (_this$$refs$getCloseD = _this$$refs.getCloseDownloadPopStatus) === null || _this$$refs$getCloseD === void 0 || _this$$refs$getCloseD.call(_this$$refs);
    },
    getWarningStatus() {
      var _localStorage, _localStorage2, _this$tokenInfo;
      this.warningStatus = false;
      let id = this.$store.state.id || this.$route.params.id;
      let tokenWarningNotice = (_localStorage = localStorage) !== null && _localStorage !== void 0 && _localStorage.tokenWarningNotice ? JSON.parse((_localStorage2 = localStorage) === null || _localStorage2 === void 0 ? void 0 : _localStorage2.tokenWarningNotice) : {};
      if (this.$route.name === 'Brc' && ((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.risk_level) >= 0 && !tokenWarningNotice[id]) {
        var _this$tokenInfo2;
        // this.$f.isLogo(this.$f.formatIcon(id)).then(res => {
        this.warningStatus = this.tokenInfo.risk_level >= 0 && !this.tokenInfo.logo_url && !((_this$tokenInfo2 = this.tokenInfo) !== null && _this$tokenInfo2 !== void 0 && _this$tokenInfo2.is_audited);
        // })
      }
    },
    getTokenData() {
      // Promise.all([this.$store.dispatch('getToken')]).then(
      //   () => {}
      // )
      this.$store.dispatch('getToken').then(() => {
        // this.show = (this.$store.state.tokenInfo.current_price_usd === 0 || this.$store.state.tokenInfo.current_price_usd === undefined) && this.$route.name === 'Token'
        this.getWarningStatus();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-6299ac81"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "info"
};
const _hoisted_2 = {
  class: "info-left"
};
const _hoisted_3 = {
  class: "info_top"
};
const _hoisted_4 = {
  class: "white font-20 mr-5"
};
const _hoisted_5 = {
  style: {
    "font-size": "12px",
    "color": "#878fbc"
  }
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  style: {
    "flex": "1"
  }
}, null, -1 /* HOISTED */));
const _hoisted_7 = {
  class: "info-address"
};
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 1,
  class: "span_gray"
};
const _hoisted_10 = {
  key: 0,
  class: "risk-status high"
};
const _hoisted_11 = {
  class: "info-table"
};
const _hoisted_12 = {
  class: "table-container"
};
const _hoisted_13 = {
  class: "table-box"
};
const _hoisted_14 = {
  class: "table-label"
};
const _hoisted_15 = {
  class: "white"
};
const _hoisted_16 = {
  class: "table-label"
};
const _hoisted_17 = {
  class: "white"
};
const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "divider-line"
}, null, -1 /* HOISTED */));
const _hoisted_19 = {
  class: "table-container"
};
const _hoisted_20 = {
  class: "table-box"
};
const _hoisted_21 = {
  class: "table-label"
};
const _hoisted_22 = {
  class: "white"
};
const _hoisted_23 = {
  class: "table-label"
};
const _hoisted_24 = {
  class: "white"
};
const _hoisted_25 = {
  class: "iconfont icon-collapse-down"
};
const _hoisted_26 = {
  class: "info dropdown"
};
const _hoisted_27 = {
  class: "info-table"
};
const _hoisted_28 = {
  class: "table-container"
};
const _hoisted_29 = {
  class: "table-box"
};
const _hoisted_30 = {
  class: "table-label"
};
const _hoisted_31 = {
  class: "white"
};
const _hoisted_32 = {
  class: "table-label"
};
const _hoisted_33 = {
  class: "white"
};
const _hoisted_34 = {
  class: "table-label"
};
const _hoisted_35 = {
  class: "white"
};
const _hoisted_36 = {
  class: "table-label"
};
const _hoisted_37 = {
  class: "white"
};
const _hoisted_38 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("-");
const _hoisted_39 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "divider-line"
}, null, -1 /* HOISTED */));
const _hoisted_40 = {
  class: "table-container"
};
const _hoisted_41 = {
  class: "table-box"
};
const _hoisted_42 = {
  class: "table-label"
};
const _hoisted_43 = {
  class: "white"
};
const _hoisted_44 = {
  class: "table-label"
};
const _hoisted_45 = {
  class: "white"
};
const _hoisted_46 = {
  class: "table-label"
};
const _hoisted_47 = {
  class: "white"
};
const _hoisted_48 = {
  class: "table-label"
};
const _hoisted_49 = {
  class: "white"
};
const _hoisted_50 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-collapse-down up"
}, null, -1 /* HOISTED */));
const _hoisted_51 = {
  class: "qr-popup-title"
};
const _hoisted_52 = {
  class: "qr-popup-content"
};
const _hoisted_53 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$f$filterChain, _$options$tokenInfo, _ctx$$f$filterChain2, _$options$tokenInfo2, _$options$tokenInfo$a, _ref, _ref$replace, _ref2, _ref2$replace, _$options$tokenInfo3, _this$tokenInfo, _$options$tokenInfo4;
  const _component_van_notice_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-notice-bar");
  const _component_van_dropdown_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-dropdown-item");
  const _component_van_dropdown_menu = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-dropdown-menu");
  const _component_ChangeGroup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChangeGroup");
  const _component_van_checkbox = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-checkbox");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  const _directive_copy = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("copy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$options.riskLevel < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_notice_bar, {
    key: 0,
    "left-icon": "volume-o",
    color: "#f00",
    background: "#452E4F",
    style: {
      "height": "0.68rem"
    },
    text: _ctx.$t('riskWarning') + ': ' + _ctx.$t('riskWarningContent1')
  }, null, 8 /* PROPS */, ["text"])) : $props.warningStatus ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_notice_bar, {
    key: 1,
    "left-icon": "info-o",
    background: "#503f4b",
    color: "#ED6A0C",
    wrapable: "",
    scrollable: false,
    style: {
      "height": "0.68rem"
    },
    mode: "closeable",
    onClose: $options.handleNoticeClose
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('alertNotice')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClose"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-collect", {
      collected: $options.collected
    }]),
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.collect($options.tokenInfo), ["stop"]))
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_4, " $" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(_ctx.$store.state.tokenPrice || _ctx.$store.state.tokenInfo.priceUSD || 0, 4)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, [$options.tokenInfo.chain === 'brc20' || $options.tokenInfo.chain === 'polygon' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenInfo.current_price_eth || 0, 1, 4, 10 ** 4)) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_ctx$$f$filterChain = _ctx.$f.filterChain($options.tokenInfo.chain)) === null || _ctx$$f$filterChain === void 0 ? void 0 : _ctx$$f$filterChain.unit), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenInfo.current_price_eth * (((_$options$tokenInfo = $options.tokenInfo) === null || _$options$tokenInfo === void 0 ? void 0 : _$options$tokenInfo.limit) || 1) || 0, 1, 4, 10 ** 4)) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_ctx$$f$filterChain2 = _ctx.$f.filterChain($options.tokenInfo.chain)) === null || _ctx$$f$filterChain2 === void 0 ? void 0 : _ctx$$f$filterChain2.unit) + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$tokenInfo2 = $options.tokenInfo) === null || _$options$tokenInfo2 === void 0 ? void 0 : _$options$tokenInfo2.limit) > 0 ? '/' + _ctx.$t('perMint') : ''), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [$options.tokenPriceChange >= 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
    key: 0,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: _ctx.$store.getters.upColor[2]
    })
  }, " +" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenPriceChange || 0)) + "% ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.tokenPriceChange < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
    key: 1,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: _ctx.$store.getters.downColor[2]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenPriceChange || 0)) + "% ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])])]), _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [$options.chain == 'brc20' && $data.inscription_number || $options.chain == 'runes' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("a", {
    key: 0,
    href: _ctx.$f.formatExplorerUrlInscriptionOrRunes($options.tokenInfo, $data.inscription_number),
    class: "span_gray",
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$tokenInfo$a = $options.tokenInfo.address) === null || _$options$tokenInfo$a === void 0 ? void 0 : _$options$tokenInfo$a.replace(new RegExp('(^.{4})(.+)(.{4}$)'), '$1*$3')), 9 /* TEXT, PROPS */, _hoisted_8)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.tokenInfo.risk_level < 0 ? (_ref = $options.tokenInfo.address || '') === null || _ref === void 0 || (_ref$replace = _ref.replace) === null || _ref$replace === void 0 ? void 0 : _ref$replace.call(_ref, new RegExp('(^.{2})(.+)(.{4}$)'), '$1...$3') : (_ref2 = $options.tokenInfo.address || '') === null || _ref2 === void 0 || (_ref2$replace = _ref2.replace) === null || _ref2$replace === void 0 ? void 0 : _ref2$replace.call(_ref2, new RegExp('(^.{4})(.+)(.{4}$)'), '$1...$3')), 1 /* TEXT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("i", {
    class: "iconfont icon-copy",
    key: (_$options$tokenInfo3 = $options.tokenInfo) === null || _$options$tokenInfo3 === void 0 ? void 0 : _$options$tokenInfo3.symbol
  })), [[_directive_copy, $options.tokenInfo.address, $options.danger]])]), $options.tokenInfo.risk_level < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.highRiskTips), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div v-else-if=\"tokenInfo.risk_level === 0 || tokenInfo.risk_level === 2\" class=\"risk-status\">{{ $t('excluded') }}</div> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div v-else-if=\"tokenInfo.risk_level > 0\" class=\"risk-status checked\">{{ $t('included') }}</div> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('24Hvolume')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_15, " $" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(this.tokenInfo.volume_24 || 0, 1, 4, 10 ** 4)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('24TxCount')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenInfo.exchangeTime_24 || 0, 1)), 1 /* TEXT */)])])]), _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_21, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$store.state.marketCap || $options.circulation || Number((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.total) === 0 ? _ctx.$t('marketCap') : _ctx.$t('totalMarketCap')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.marketCap === '0' || !$options.marketCap || ((_$options$tokenInfo4 = $options.tokenInfo) === null || _$options$tokenInfo4 === void 0 ? void 0 : _$options$tokenInfo4.total) === 0 || $options.circulation < 0 ? '-' : '$' + $options.marketCap), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_23, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('holders')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_24, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNum($options.holders)), 1 /* TEXT */)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_dropdown_menu, null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_dropdown_item, {
      ref: "item",
      onOpen: _cache[2] || (_cache[2] = $event => $options.dropdownChange(true)),
      onClose: _cache[3] || (_cache[3] = $event => $options.dropdownChange(false))
    }, {
      title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", _hoisted_25, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], !$data.show]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-icon v-show=\"!show\" name=\"arrow-down\" color=\"#878FBC\" /> ")]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _this$tokenInfo2, _$options$tokenInfo5, _$options$tokenInfo6, _$options$tokenInfo7, _$options$tokenInfo8, _$options$tokenInfo9;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_28, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('totalMarketCap')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.total) || 0, 1, 4, 10 ** 4)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('maxSupply')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_33, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.maxSupply || 0, 1, 4, 10 ** 4)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_34, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('openPrice')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_35, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.tokenInfo.open_price > 0 ? '$' + _ctx.$f.formatNumber2(((_$options$tokenInfo5 = $options.tokenInfo) === null || _$options$tokenInfo5 === void 0 ? void 0 : _$options$tokenInfo5.open_price) || 0, 3, 4) : '-'), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_36, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('returnOnInvestment')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_37, [_ctx.$store.state.tokenPrice > 0 && $options.tokenInfo.open_price > 0 && _ctx.$store.state.tokenPrice > $options.tokenInfo.open_price ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: 0
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(_ctx.$store.state.tokenPrice / ((_$options$tokenInfo6 = $options.tokenInfo) === null || _$options$tokenInfo6 === void 0 ? void 0 : _$options$tokenInfo6.open_price) * 100, 2)) + "% ", 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : _ctx.$store.state.tokenPrice > 0 && $options.tokenInfo.open_price > 0 && _ctx.$store.state.tokenPrice < $options.tokenInfo.open_price ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: 1
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" -" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(100 - _ctx.$store.state.tokenPrice / ((_$options$tokenInfo7 = $options.tokenInfo) === null || _$options$tokenInfo7 === void 0 ? void 0 : _$options$tokenInfo7.open_price) * 100, 2)) + "% ", 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: 2
        }, [_hoisted_38], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])])])]), _hoisted_39, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_40, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_41, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_42, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('onceLimit')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_43, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.tokenInfo.limit || 0, 0)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_44, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('minted')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_45, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.tokenInfo.max ? _ctx.$f.formatNumber2($options.tokenInfo.confirmed_minted / $options.tokenInfo.max * 100 || 0, 1) + '%' : '--'), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_46, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('deployedTime')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_47, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate((_$options$tokenInfo8 = $options.tokenInfo) === null || _$options$tokenInfo8 === void 0 ? void 0 : _$options$tokenInfo8.publish_at, 'YYYY-MM-DD')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_48, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('blockchain')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_49, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$tokenInfo9 = $options.tokenInfo) === null || _$options$tokenInfo9 === void 0 ? void 0 : _$options$tokenInfo9.chain), 1 /* TEXT */)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
          class: "collapse-box",
          onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$refs.item.toggle(false), ["stop"]))
        }, [_hoisted_50, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-icon name=\"arrow-up\" color=\"#878FBC\" /> ")])])];
      }),
      _: 1 /* STABLE */
    }, 512 /* NEED_PATCH */)]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeGroup, {
    visible: $data.visible1,
    "onUpdate:visible": _cache[4] || (_cache[4] = $event => $data.visible1 = $event),
    selected: $data.activeGroup,
    "onUpdate:selected": _cache[5] || (_cache[5] = $event => $data.activeGroup = $event),
    title: _ctx.$t('favoriteTo'),
    groups: $options.groups,
    isRemark: "",
    onSelect: $options.addFavorite
  }, null, 8 /* PROPS */, ["visible", "selected", "title", "groups", "onSelect"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popup, {
    show: $data.dangerVisible,
    "onUpdate:show": _cache[7] || (_cache[7] = $event => $data.dangerVisible = $event),
    closeable: false,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "center",
    teleport: "#app",
    class: "qr-popup"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_51, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('riskWarning')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_52, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
      class: "risk-warning-content",
      innerHTML: _ctx.$t('riskWarningContent1')
    }, null, 8 /* PROPS */, _hoisted_53), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_checkbox, {
      class: "checkbox-box",
      "checked-color": "red",
      modelValue: $data.agreeStatus,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.agreeStatus = $event),
      shape: "square",
      "icon-size": "0.28rem"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('IAgree1')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
      class: "confirm-btn",
      type: "danger",
      block: "",
      disabled: !$data.agreeStatus,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.handleConfirm, ["stop"])
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled", "onClick"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-c046323e"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "swap-container"
};
const _hoisted_2 = {
  class: "pair-info"
};
const _hoisted_3 = {
  class: "pair-item"
};
const _hoisted_4 = {
  class: "pair-symbol"
};
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "pair-amount"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" {{\n            pair.target_token === pair.token0_address\n              ? $f.formatNumber2(pair.reserve0, 2, 4, 10 ** 4)\n              : $f.formatNumber2(pair.reserve1, 2, 4, 10 ** 4)\n          }} "), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" -- ")], -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "divider-line"
}, null, -1 /* HOISTED */));
const _hoisted_7 = {
  class: "pair-item"
};
const _hoisted_8 = {
  class: "pair-symbol"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "pair-amount"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" {{\n            pair.target_token === pair.token1_address\n              ? $f.formatNumber2(pair.reserve0, 2, 4, 10 ** 4)\n              : $f.formatNumber2(pair.reserve1, 2, 4, 10 ** 4)\n          }} "), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" -- ")], -1 /* HOISTED */));
const _hoisted_10 = {
  class: "ml_10"
};
const _hoisted_11 = {
  class: "pop-content"
};
const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  style: {
    "flex": "1"
  }
}, null, -1 /* HOISTED */));
const _hoisted_13 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("    ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$store$state$pai3, _ctx$$store$state$pai4;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_popover = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popover");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.pair.target_token === $options.pair.token0_address ? $options.pair.token0_symbol : $options.pair.token1_symbol), 1 /* TEXT */), _hoisted_5]), _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.pair.target_token === $options.pair.token1_address ? $options.pair.token0_symbol : $options.pair.token1_symbol), 1 /* TEXT */), _hoisted_9])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popover, {
    trigger: "manual",
    show: $data.showPopover,
    "onUpdate:show": _cache[1] || (_cache[1] = $event => $data.showPopover = $event),
    theme: "dark",
    class: "pop-3B436D",
    placement: "top"
  }, {
    reference: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _ctx$$store$state$pai, _ctx$$store$state$pai2;
      return [(_ctx$$store$state$pai = _ctx.$store.state.pair) !== null && _ctx$$store$state$pai !== void 0 && _ctx$$store$state$pai.amm ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: 0,
        style: {
          "vertical-align": "middle",
          "margin-right": "5px"
        },
        class: "icon-token",
        round: "",
        width: "16px",
        height: "16px",
        "icon-size": "16px",
        "lazy-load": "",
        "show-loading": "",
        src: `${_ctx.$store.state.s3BaseUrl}swap/${(_ctx$$store$state$pai2 = _ctx.$store.state.pair) === null || _ctx$$store$state$pai2 === void 0 ? void 0 : _ctx$$store$state$pai2.amm}.jpeg`,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png"),
        onClick: _cache[0] || (_cache[0] = $event => $data.showPopover = !$data.showPopover)
      }, null, 8 /* PROPS */, ["src", "error-icon"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)];
    }),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.pair.amm), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])]), _hoisted_12, (_ctx$$store$state$pai3 = _ctx.$store.state.pair) !== null && _ctx$$store$state$pai3 !== void 0 && _ctx$$store$state$pai3.amm ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 0,
    plain: "",
    type: "primary",
    class: "swap-button-1",
    size: "small",
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.tableRowClick('inscript'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('goInscript')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), _hoisted_13, (_ctx$$store$state$pai4 = _ctx.$store.state.pair) !== null && _ctx$$store$state$pai4 !== void 0 && _ctx$$store$state$pai4.amm ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 1,
    type: "primary",
    class: "swap-button-1",
    size: "small",
    onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.tableRowClick('swap'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('swap2')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-18eef084"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "pairs"
};
const _hoisted_2 = {
  class: "pairs-table"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, "#", -1 /* HOISTED */));
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  class: "flex-end"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_progress = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-progress");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    active: $options.isLoading,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $options.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('currentPosition1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('ratio')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('address')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.tableList, (item, index) => {
    var _item$address;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("tr", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goLink(item), ["stop"]),
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])({
        current: index === 1
      })
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(index < 9 ? '0' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(index + 1), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.quantity) || 0, 1, 4, 10 ** 4)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.ratio || 0, 2)) + "%", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_progress, {
      percentage: item.ratio,
      "show-pivot": false,
      "track-color": "#3B436D",
      style: {
        "width": "50px",
        "margin-left": "5px"
      }
    }, null, 8 /* PROPS */, ["percentage"])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, "*" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item === null || item === void 0 || (_item$address = item.address) === null || _item$address === void 0 ? void 0 : _item$address.slice(-4)), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $props.tableList && $props.tableList.length === 0 && !$options.isLoading]])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-418c0e62"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "history-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_txs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("txs");
  const _component_platform = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("platform");
  const _component_holders = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("holders");
  const _component_my = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("my");
  const _component_info = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("info");
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    active: $data.active,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.active = $event),
    color: "#878FBC",
    background: "#2C3254",
    "title-inactive-color": "#878FBC",
    "title-active-color": "#fff",
    ellipsis: false,
    "line-height": "0"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.list, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        key: index,
        title: item.name,
        name: item.id
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [item.id === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_txs, {
          key: 0,
          tableList: $data.tableList,
          loading: $data.loadingTx
        }, null, 8 /* PROPS */, ["tableList", "loading"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), item.id === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_platform, {
          key: 1,
          tableList: $data.tablePlatformList,
          loading: $data.loadingPlatform,
          tableRecordsList: $data.tableRecordsList,
          loadingRecords: $data.loadingRecords
        }, null, 8 /* PROPS */, ["tableList", "loading", "tableRecordsList", "loadingRecords"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), item.id === 3 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_holders, {
          key: 2,
          tableList: $data.tableHoldersList,
          loading: $data.loadingHolders
        }, null, 8 /* PROPS */, ["tableList", "loading"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), item.id === 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_my, {
          key: 3,
          userTxs: $data.userTxs,
          loading: $data.loadingUserTxs
        }, null, 8 /* PROPS */, ["userTxs", "loading"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), item.id === 5 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_info, {
          key: 4,
          brc20Info: $data.brc20Info
        }, null, 8 /* PROPS */, ["brc20Info"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-7ea65941"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "overview"
};
const _hoisted_2 = {
  class: "ml-4"
};
const _hoisted_3 = {
  key: 0
};
const _hoisted_4 = ["href"];
const _hoisted_5 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, "Etch Tx", -1 /* HOISTED */));
const _hoisted_7 = ["href"];
const _hoisted_8 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("template", null, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--")], -1 /* HOISTED */));
const _hoisted_10 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--");
const _hoisted_12 = {
  key: 0
};
const _hoisted_13 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--");
const _hoisted_15 = {
  key: 1
};
const _hoisted_16 = {
  key: 0
};
const _hoisted_17 = ["href"];
const _hoisted_18 = {
  key: 2
};
const _hoisted_19 = {
  colspan: "2"
};
const _hoisted_20 = {
  key: 3
};
const _hoisted_21 = {
  colspan: "2"
};
const _hoisted_22 = ["innerHTML"];
const _hoisted_23 = {
  key: 1
};
const _hoisted_24 = {
  key: 0
};
const _hoisted_25 = ["href"];
const _hoisted_26 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_27 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_28 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--");
const _hoisted_29 = {
  key: 1
};
const _hoisted_30 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_31 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--");
const _hoisted_32 = {
  key: 2
};
const _hoisted_33 = {
  key: 3
};
const _hoisted_34 = ["href"];
const _hoisted_35 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("--");
const _hoisted_36 = {
  key: 4
};
const _hoisted_37 = {
  key: 0
};
const _hoisted_38 = ["href"];
const _hoisted_39 = {
  key: 5
};
const _hoisted_40 = {
  colspan: "2"
};
const _hoisted_41 = {
  key: 6
};
const _hoisted_42 = {
  colspan: "2"
};
const _hoisted_43 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$brc20Info, _$props$brc20Info2, _$props$brc20Info3, _ctx$$store$state$id, _$props$brc20Info4, _$props$brc20Info5, _$props$brc20Info6, _$props$brc20Info7, _$props$brc20Info8, _$props$brc20Info9, _$props$brc20Info0, _$props$brc20Info1, _$props$brc20Info10, _$props$brc20Info11, _$props$brc20Info12, _$props$brc20Info13, _$props$brc20Info14, _$props$brc20Info15, _$props$brc20Info16, _$props$brc20Info17, _$props$brc20Info18, _$props$brc20Info19, _$props$brc20Info20, _$props$brc20Info21, _$options$runesInfo, _$props$brc20Info22, _$options$runesInfo2, _$props$brc20Info23, _$props$brc20Info24, _$props$brc20Info$app, _$props$brc20Info$app2, _$props$brc20Info25, _$props$brc20Info26, _$props$brc20Info27, _$props$brc20Info28, _$props$brc20Info29, _$props$brc20Info30, _$props$brc20Info31, _$props$brc20Info32, _$props$brc20Info33, _$props$brc20Info34, _$props$brc20Info35, _$props$brc20Info36, _$props$brc20Info37, _$props$brc20Info38, _$props$brc20Info39, _$props$brc20Info40, _$props$brc20Info41, _$props$brc20Info42, _$props$brc20Info43, _$props$brc20Info44, _$props$brc20Info45, _$props$brc20Info46, _$props$brc20Info47, _$props$brc20Info48, _$props$brc20Info49, _$props$brc20Info50, _$props$brc20Info51, _$props$brc20Info52, _$props$brc20Info53, _$props$brc20Info$app3, _$props$brc20Info$app4;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-image");
  const _directive_copy = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveDirective"])("copy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("ul", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("h3", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_image, {
    round: "",
    width: "24px",
    height: "24px",
    "icon-size": "24px",
    "lazy-load": "",
    "show-loading": "",
    src: _ctx.$f.formatIcon($props.brc20Info),
    "error-icon": ((_$props$brc20Info = $props.brc20Info) === null || _$props$brc20Info === void 0 ? void 0 : _$props$brc20Info.chain) === 'runes' ? __webpack_require__(/*! @/assets/images/icon-runes-default.png */ "./src/assets/images/icon-runes-default.png") : __webpack_require__(/*! @/assets/images/icon-inscription-default.png */ "./src/assets/images/icon-inscription-default.png")
  }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info2 = $props.brc20Info) === null || _$props$brc20Info2 === void 0 ? void 0 : _$props$brc20Info2.symbol), 1 /* TEXT */)]), ((_$props$brc20Info3 = $props.brc20Info) === null || _$props$brc20Info3 === void 0 ? void 0 : _$props$brc20Info3.chain) === 'runes' || (_ctx$$store$state$id = _ctx.$store.state.id) !== null && _ctx$$store$state$id !== void 0 && _ctx$$store$state$id.includes('runes') ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("table", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('runes')) + " ID", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    href: _ctx.$f.formatExplorerUrlInscriptionOrRunes($props.brc20Info),
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info4 = $props.brc20Info) === null || _$props$brc20Info4 === void 0 ? void 0 : _$props$brc20Info4.Token), 9 /* TEXT, PROPS */, _hoisted_4), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_5, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info5 = $props.brc20Info) === null || _$props$brc20Info5 === void 0 ? void 0 : _$props$brc20Info5.Token]])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [_hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info6 = $props.brc20Info) !== null && _$props$brc20Info6 !== void 0 && _$props$brc20Info6.txid ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    href: _ctx.$f.formatExplorerUrl((_$props$brc20Info7 = $props.brc20Info) === null || _$props$brc20Info7 === void 0 ? void 0 : _$props$brc20Info7.chain, (_$props$brc20Info8 = $props.brc20Info) === null || _$props$brc20Info8 === void 0 ? void 0 : _$props$brc20Info8.txid, 'tx') + '?channelId=aveai1',
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info9 = $props.brc20Info) === null || _$props$brc20Info9 === void 0 || (_$props$brc20Info9 = _$props$brc20Info9.txid) === null || _$props$brc20Info9 === void 0 ? void 0 : _$props$brc20Info9.slice(0, 10)) + '...' + ((_$props$brc20Info0 = $props.brc20Info) === null || _$props$brc20Info0 === void 0 || (_$props$brc20Info0 = _$props$brc20Info0.txid) === null || _$props$brc20Info0 === void 0 ? void 0 : _$props$brc20Info0.slice(-6))), 9 /* TEXT, PROPS */, _hoisted_7), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_8, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info1 = $props.brc20Info) === null || _$props$brc20Info1 === void 0 ? void 0 : _$props$brc20Info1.txid]])], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), _hoisted_9])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('contractCreator')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info10 = $props.brc20Info) !== null && _$props$brc20Info10 !== void 0 && _$props$brc20Info10.creator ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info11 = $props.brc20Info) === null || _$props$brc20Info11 === void 0 || (_$props$brc20Info11 = _$props$brc20Info11.creator) === null || _$props$brc20Info11 === void 0 ? void 0 : _$props$brc20Info11.slice(0, 10)) + '...' + ((_$props$brc20Info12 = $props.brc20Info) === null || _$props$brc20Info12 === void 0 || (_$props$brc20Info12 = _$props$brc20Info12.creator) === null || _$props$brc20Info12 === void 0 ? void 0 : _$props$brc20Info12.slice(-6))) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_10, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info13 = $props.brc20Info) === null || _$props$brc20Info13 === void 0 ? void 0 : _$props$brc20Info13.creator]])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [_hoisted_11], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), ((_$props$brc20Info14 = $props.brc20Info) === null || _$props$brc20Info14 === void 0 ? void 0 : _$props$brc20Info14.chain) !== 'brc20' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('contractOwner')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info15 = $props.brc20Info) !== null && _$props$brc20Info15 !== void 0 && _$props$brc20Info15.owner ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info16 = $props.brc20Info) === null || _$props$brc20Info16 === void 0 || (_$props$brc20Info16 = _$props$brc20Info16.owner) === null || _$props$brc20Info16 === void 0 ? void 0 : _$props$brc20Info16.slice(0, 10)) + '...' + ((_$props$brc20Info17 = $props.brc20Info) === null || _$props$brc20Info17 === void 0 || (_$props$brc20Info17 = _$props$brc20Info17.owner) === null || _$props$brc20Info17 === void 0 ? void 0 : _$props$brc20Info17.slice(-6))) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_13, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info18 = $props.brc20Info) === null || _$props$brc20Info18 === void 0 ? void 0 : _$props$brc20Info18.owner]])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [_hoisted_14], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (_$props$brc20Info19 = $props.brc20Info) !== null && _$props$brc20Info19 !== void 0 && _$props$brc20Info19.limit ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('onceLimit')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2((_$props$brc20Info20 = $props.brc20Info) === null || _$props$brc20Info20 === void 0 ? void 0 : _$props$brc20Info20.limit)), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('createdTime')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info21 = $props.brc20Info) !== null && _$props$brc20Info21 !== void 0 && _$props$brc20Info21.created_at || (_$options$runesInfo = $options.runesInfo) !== null && _$options$runesInfo !== void 0 && _$options$runesInfo.publish_at ? _ctx.$f.formatDate(((_$props$brc20Info22 = $props.brc20Info) === null || _$props$brc20Info22 === void 0 ? void 0 : _$props$brc20Info22.created_at) || ((_$options$runesInfo2 = $options.runesInfo) === null || _$options$runesInfo2 === void 0 ? void 0 : _$options$runesInfo2.publish_at)) : '--'), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('decimal')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info23 = $props.brc20Info) === null || _$props$brc20Info23 === void 0 ? void 0 : _$props$brc20Info23.decimal), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])((_$props$brc20Info24 = $props.brc20Info) === null || _$props$brc20Info24 === void 0 ? void 0 : _$props$brc20Info24.medias, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: index
    }, [item !== null && item !== void 0 && item.url ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
      href: item === null || item === void 0 ? void 0 : item.url
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item === null || item === void 0 ? void 0 : item.url), 9 /* TEXT, PROPS */, _hoisted_17)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (_$props$brc20Info$app = $props.brc20Info.appendix) !== null && _$props$brc20Info$app !== void 0 && _$props$brc20Info$app.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('tokenInfo')), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (_$props$brc20Info$app2 = $props.brc20Info.appendix) !== null && _$props$brc20Info$app2 !== void 0 && _$props$brc20Info$app2.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "token-description",
    innerHTML: $options.language == 'zh-cn' || $options.language == 'zh-tw' ? $props.brc20Info.intro_cn || $props.brc20Info.appendix.description || '' : $props.brc20Info.intro_en || $props.brc20Info.appendix.description || ''
  }, null, 8 /* PROPS */, _hoisted_22)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("table", _hoisted_23, [(_$props$brc20Info25 = $props.brc20Info) !== null && _$props$brc20Info25 !== void 0 && _$props$brc20Info25.txid ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('txid')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    href: _ctx.$f.formatExplorerUrl(((_$props$brc20Info26 = $props.brc20Info) === null || _$props$brc20Info26 === void 0 ? void 0 : _$props$brc20Info26.chain) == 'brc20' ? 'runes' : (_$props$brc20Info27 = $props.brc20Info) === null || _$props$brc20Info27 === void 0 ? void 0 : _$props$brc20Info27.chain, (_$props$brc20Info28 = $props.brc20Info) === null || _$props$brc20Info28 === void 0 ? void 0 : _$props$brc20Info28.txid, 'tx') + '?channelId=aveai1',
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info29 = $props.brc20Info) === null || _$props$brc20Info29 === void 0 || (_$props$brc20Info29 = _$props$brc20Info29.txid) === null || _$props$brc20Info29 === void 0 ? void 0 : _$props$brc20Info29.slice(0, 10)) + '...' + ((_$props$brc20Info30 = $props.brc20Info) === null || _$props$brc20Info30 === void 0 || (_$props$brc20Info30 = _$props$brc20Info30.txid) === null || _$props$brc20Info30 === void 0 ? void 0 : _$props$brc20Info30.slice(-6))), 9 /* TEXT, PROPS */, _hoisted_25), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_26, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info31 = $props.brc20Info) === null || _$props$brc20Info31 === void 0 ? void 0 : _$props$brc20Info31.txid]])])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('contractCreator')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info32 = $props.brc20Info) !== null && _$props$brc20Info32 !== void 0 && _$props$brc20Info32.creator ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info33 = $props.brc20Info) === null || _$props$brc20Info33 === void 0 || (_$props$brc20Info33 = _$props$brc20Info33.creator) === null || _$props$brc20Info33 === void 0 ? void 0 : _$props$brc20Info33.slice(0, 10)) + '...' + ((_$props$brc20Info34 = $props.brc20Info) === null || _$props$brc20Info34 === void 0 || (_$props$brc20Info34 = _$props$brc20Info34.creator) === null || _$props$brc20Info34 === void 0 ? void 0 : _$props$brc20Info34.slice(-6))) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_27, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info35 = $props.brc20Info) === null || _$props$brc20Info35 === void 0 ? void 0 : _$props$brc20Info35.creator]])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [_hoisted_28], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), ((_$props$brc20Info36 = $props.brc20Info) === null || _$props$brc20Info36 === void 0 ? void 0 : _$props$brc20Info36.chain) !== 'brc20' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('contractOwner')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info37 = $props.brc20Info) !== null && _$props$brc20Info37 !== void 0 && _$props$brc20Info37.owner ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info38 = $props.brc20Info) === null || _$props$brc20Info38 === void 0 || (_$props$brc20Info38 = _$props$brc20Info38.owner) === null || _$props$brc20Info38 === void 0 ? void 0 : _$props$brc20Info38.slice(0, 10)) + '...' + ((_$props$brc20Info39 = $props.brc20Info) === null || _$props$brc20Info39 === void 0 || (_$props$brc20Info39 = _$props$brc20Info39.owner) === null || _$props$brc20Info39 === void 0 ? void 0 : _$props$brc20Info39.slice(-6))) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_30, null, 512 /* NEED_PATCH */), [[_directive_copy, (_$props$brc20Info40 = $props.brc20Info) === null || _$props$brc20Info40 === void 0 ? void 0 : _$props$brc20Info40.owner]])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [_hoisted_31], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), ((_$props$brc20Info41 = $props.brc20Info) === null || _$props$brc20Info41 === void 0 ? void 0 : _$props$brc20Info41.chain) !== 'brc20' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('inscriptionType')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$props$brc20Info42 = $props.brc20Info) === null || _$props$brc20Info42 === void 0 ? void 0 : _$props$brc20Info42.type) || _ctx.$t('singleText')), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (_$props$brc20Info43 = $props.brc20Info) !== null && _$props$brc20Info43 !== void 0 && _$props$brc20Info43.limit ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_33, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('onceLimit')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2((_$props$brc20Info44 = $props.brc20Info) === null || _$props$brc20Info44 === void 0 ? void 0 : _$props$brc20Info44.limit)), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('createdTime')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info45 = $props.brc20Info) !== null && _$props$brc20Info45 !== void 0 && _$props$brc20Info45.created_at ? _ctx.$f.formatDate((_$props$brc20Info46 = $props.brc20Info) === null || _$props$brc20Info46 === void 0 ? void 0 : _$props$brc20Info46.created_at) : '--'), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('InitialInscriptionNumber')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [(_$props$brc20Info47 = $props.brc20Info) !== null && _$props$brc20Info47 !== void 0 && _$props$brc20Info47.inscription_number && ((_$props$brc20Info48 = $props.brc20Info) === null || _$props$brc20Info48 === void 0 ? void 0 : _$props$brc20Info48.chain) == 'brc20' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("a", {
    key: 0,
    href: _ctx.$f.formatExplorerUrlInscriptionOrRunes($props.brc20Info, (_$props$brc20Info49 = $props.brc20Info) === null || _$props$brc20Info49 === void 0 ? void 0 : _$props$brc20Info49.inscription_number),
    target: "_blank"
  }, " #" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info50 = $props.brc20Info) === null || _$props$brc20Info50 === void 0 ? void 0 : _$props$brc20Info50.inscription_number), 9 /* TEXT, PROPS */, _hoisted_34)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [_hoisted_35], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), (_$props$brc20Info51 = $props.brc20Info) !== null && _$props$brc20Info51 !== void 0 && _$props$brc20Info51.decimal ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_36, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('decimal')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_$props$brc20Info52 = $props.brc20Info) === null || _$props$brc20Info52 === void 0 ? void 0 : _$props$brc20Info52.decimal), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])((_$props$brc20Info53 = $props.brc20Info) === null || _$props$brc20Info53 === void 0 ? void 0 : _$props$brc20Info53.medias, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: index
    }, [item !== null && item !== void 0 && item.url ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_37, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
      href: item === null || item === void 0 ? void 0 : item.url
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item === null || item === void 0 ? void 0 : item.url), 9 /* TEXT, PROPS */, _hoisted_38)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), (_$props$brc20Info$app3 = $props.brc20Info.appendix) !== null && _$props$brc20Info$app3 !== void 0 && _$props$brc20Info$app3.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_39, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_40, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('tokenInfo')), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (_$props$brc20Info$app4 = $props.brc20Info.appendix) !== null && _$props$brc20Info$app4 !== void 0 && _$props$brc20Info$app4.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", _hoisted_41, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_42, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "token-description",
    innerHTML: $options.language == 'zh-cn' || $options.language == 'zh-tw' ? $props.brc20Info.intro_cn || $props.brc20Info.appendix.description || '' : $props.brc20Info.intro_en || $props.brc20Info.appendix.description || ''
  }, null, 8 /* PROPS */, _hoisted_43)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]))])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-187f5402"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "me"
};
const _hoisted_2 = {
  class: "accounts flex-start"
};
const _hoisted_3 = {
  class: "ml-4"
};
const _hoisted_4 = {
  class: "font-12 mt_5"
};
const _hoisted_5 = {
  class: "block"
};
const _hoisted_6 = {
  class: "block"
};
const _hoisted_7 = {
  key: 0,
  class: "content relative"
};
const _hoisted_8 = {
  key: 0,
  class: "tab"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  key: 1,
  class: "content relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$tokenInfo, _$props$userTxs, _$props$userTxs2, _$props$userTxs3, _$props$userTxs4, _$props$userTxs7, _$options$tokenInfo2, _$props$userTxs8, _$props$userTxs9, _$props$userTxs0;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-col");
  const _component_van_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-row");
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [$options.currentAccount ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
    round: "",
    width: "30px",
    height: "30px",
    "icon-size": "30px",
    "lazy-load": "",
    "show-loading": "",
    src: _ctx.$f.formatIcon($options.tokenInfo),
    "error-icon": ((_$options$tokenInfo = $options.tokenInfo) === null || _$options$tokenInfo === void 0 ? void 0 : _$options$tokenInfo.chain) === 'runes' ? __webpack_require__(/*! @/assets/images/icon-runes-default.png */ "./src/assets/images/icon-runes-default.png") : __webpack_require__(/*! @/assets/images/icon-inscription-default.png */ "./src/assets/images/icon-inscription-default.png")
  }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.currentAccount.slice(0, 10) + '...' + $options.currentAccount.slice(-6)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('currentPosition1')) + "：$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$userTxs = $props.userTxs) === null || _$props$userTxs === void 0 ? void 0 : _$props$userTxs.balance) || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("  " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('profit')) + "：$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$userTxs2 = $props.userTxs) === null || _$props$userTxs2 === void 0 ? void 0 : _$props$userTxs2.profit) || 0, 0)) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: ((_$props$userTxs3 = $props.userTxs) === null || _$props$userTxs3 === void 0 ? void 0 : _$props$userTxs3.profit_rate) > 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$userTxs4 = $props.userTxs) === null || _$props$userTxs4 === void 0 ? void 0 : _$props$userTxs4.profit_rate) || 0, 0)) + "% ", 5 /* TEXT, STYLE */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_row, {
    class: "statistics",
    justify: "space-between",
    gutter: 10
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
      span: "12"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _$props$userTxs5;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
          class: "item",
          style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
            color: _ctx.$store.getters.upColor[3],
            backgroundColor: '#12b88614'
          })
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('totalBuy')) + "：", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$userTxs5 = $props.userTxs) === null || _$props$userTxs5 === void 0 ? void 0 : _$props$userTxs5.total_buy) || 0, 0)), 1 /* TEXT */)], 4 /* STYLE */)];
      }),
      _: 1 /* STABLE */
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
      span: "12"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _$props$userTxs6;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
          class: "item",
          style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
            color: _ctx.$store.getters.downColor[3],
            backgroundColor: '#f6465d14'
          })
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('totalSell')) + "：", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_6, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$userTxs6 = $props.userTxs) === null || _$props$userTxs6 === void 0 ? void 0 : _$props$userTxs6.total_sell) || 0, 0)), 1 /* TEXT */)], 4 /* STYLE */)];
      }),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div\n        class=\"tabs bg\"\n        :style=\"{\n          '--upColor': $store.getters.upColor[3],\n          '--downColor': $store.getters.downColor[3]\n        }\"\n      >\n        <div v-for=\"(item, index) in tabs1\" :key=\"index\" class=\"tab-item\">\n          <input\n            type=\"radio\"\n            :id=\"`tab-item-${item.id}`\"\n            v-model=\"tabActive\"\n            :value=\"item.id\"\n            class=\"tab-radio-input\"\n          />\n          <label :for=\"`tab-item-${item.id}`\" :class=\"`tab-item-label ${item.id}`\">\n            {{ item.name }}\n          </label>\n        </div>\n      </div> "), $data.tabActive == 'tx' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    active: $options.isLoading,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $options.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), ((_$props$userTxs7 = $props.userTxs) === null || _$props$userTxs7 === void 0 || (_$props$userTxs7 = _$props$userTxs7.tx) === null || _$props$userTxs7 === void 0 ? void 0 : _$props$userTxs7.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("table", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('price')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amountB')) + "(" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$tokenInfo2 = $options.tokenInfo) === null || _$options$tokenInfo2 === void 0 ? void 0 : _$options$tokenInfo2.symbol) + ")", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amountU')) + "($)", 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])((_$props$userTxs8 = $props.userTxs) === null || _$props$userTxs8 === void 0 ? void 0 : _$props$userTxs8.tx, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("tr", {
      key: index,
      onClick: $event => $options.goLink(item)
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate(new Date(item === null || item === void 0 ? void 0 : item.time).getTime() / 1000)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: (item === null || item === void 0 ? void 0 : item.op_type) == 1 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.current_price_usd)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: (item === null || item === void 0 ? void 0 : item.op_type) == 1 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.to_amount, 2, 4, 1000000)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: (item === null || item === void 0 ? void 0 : item.op_type) == 1 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.amount_usd, 2, 4, 1000000)), 5 /* TEXT, STYLE */)], 8 /* PROPS */, _hoisted_9);
  }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], ((_$props$userTxs9 = $props.userTxs) === null || _$props$userTxs9 === void 0 ? void 0 : _$props$userTxs9.tx) && ((_$props$userTxs0 = $props.userTxs) === null || _$props$userTxs0 === void 0 || (_$props$userTxs0 = _$props$userTxs0.tx) === null || _$props$userTxs0 === void 0 ? void 0 : _$props$userTxs0.length) === 0 && !$options.isLoading]])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $data.tabActive == 'order' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_empty, {
    key: 1,
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]))]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-13bdfd06"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "pairs"
};
const _hoisted_2 = {
  class: "pairs-table"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, null, -1 /* HOISTED */));
const _hoisted_4 = ["onClick"];
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, null, -1 /* HOISTED */));
const _hoisted_6 = {
  class: "main"
};
const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "main"
};
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  class: "main"
};
const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_14 = {
  class: "minor"
};
const _hoisted_15 = {
  class: "main"
};
const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_17 = {
  class: "minor"
};
const _hoisted_18 = {
  class: "main"
};
const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_20 = {
  class: "minor"
};
const _hoisted_21 = {
  class: "minor"
};
const _hoisted_22 = {
  class: "pop-content"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = ["onClick"];
const _hoisted_25 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, null, -1 /* HOISTED */));
const _hoisted_26 = {
  class: "main"
};
const _hoisted_27 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  class: "main"
};
const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  class: "main"
};
const _hoisted_33 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_34 = {
  class: "minor"
};
const _hoisted_35 = {
  class: "main"
};
const _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_37 = {
  class: "minor"
};
const _hoisted_38 = {
  class: "main"
};
const _hoisted_39 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_40 = {
  class: "minor"
};
const _hoisted_41 = {
  class: "minor"
};
const _hoisted_42 = {
  class: "minor"
};
const _hoisted_43 = {
  class: "pop-content"
};
const _hoisted_44 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$tableList, _$props$tableList$sli, _$props$tableList2, _$props$tableList3, _$props$tableList3$sl;
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_popover = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popover");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_record = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("record");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    active: $options.isLoading,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $options.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('poolPair')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('price')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('volume24h')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('platform')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(((_$props$tableList = $props.tableList) === null || _$props$tableList === void 0 || (_$props$tableList$sli = _$props$tableList.slice) === null || _$props$tableList$sli === void 0 ? void 0 : _$props$tableList$sli.call(_$props$tableList, 0, 3)) || [], (item, index) => {
    var _ctx$$f$filterChain, _ctx$$f$filterChain2, _ctx$$f$filterChain3;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("tr", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goLink(item), ["stop"]),
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])({
        current: _ctx.$store.state.pair.address === item.pair
      })
    }, [_hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [item.target_token === item.token0_address ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 0
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token0_symbol), 1 /* TEXT */), _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
      href: "",
      class: "minor",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
        name: 'Brc',
        params: {
          id: item.token1_address + '-' + item.chain
        },
        query: {
          from: _ctx.$route.name
        }
      }), ["stop", "prevent"])
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token1_symbol), 9 /* TEXT, PROPS */, _hoisted_8)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token1_symbol), 1 /* TEXT */), _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
      href: "",
      class: "minor",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
        name: 'Brc',
        params: {
          id: item.token0_address + '-' + item.chain
        },
        query: {
          from: _ctx.$route.name
        }
      }), ["stop", "prevent"])
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token0_symbol), 9 /* TEXT, PROPS */, _hoisted_11)], 64 /* STABLE_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [item.target_token === item.token0_address ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 0
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.token0_price_usd || 0)), 1 /* TEXT */), _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.token0_price_eth ? _ctx.$f.formatNumber2(item.token0_price_eth || 0) + ' ' + ((_ctx$$f$filterChain = _ctx.$f.filterChain(item.chain)) === null || _ctx$$f$filterChain === void 0 ? void 0 : _ctx$$f$filterChain.unit) : '--'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.token1_price_usd || 0)), 1 /* TEXT */), _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.token1_price_eth ? _ctx.$f.formatNumber2(item.token1_price_eth || 0) + ' ' + ((_ctx$$f$filterChain2 = _ctx.$f.filterChain(item.chain)) === null || _ctx$$f$filterChain2 === void 0 ? void 0 : _ctx$$f$filterChain2.unit) : '--'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.volume_u) || 0, 1, 4, 10 ** 4)), 1 /* TEXT */), _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.volume_eth ? _ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.volume_eth) / (item.chain === 'brc20' || item.chain === 'merlin' || item.chain === 'runes' ? 100000000 : 1) || 0, 3, 4, 10 ** 4) + ' ' + (item.chain === 'brc20' || item.chain === 'merlin' || item.chain === 'runes' ? 'btc' : (_ctx$$f$filterChain3 = _ctx.$f.filterChain(item.chain)) === null || _ctx$$f$filterChain3 === void 0 ? void 0 : _ctx$$f$filterChain3.unit) : '--'), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popover, {
      trigger: "manual",
      show: $data.showPopover[index],
      "onUpdate:show": $event => $data.showPopover[index] = $event,
      theme: "dark",
      class: "pop-3B436D",
      placement: "left-start"
    }, {
      reference: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(item === null || item === void 0 ? void 0 : item.amm) === 'unknown' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("i", {
        key: 0,
        class: "iconfont icon-unknown",
        style: {
          "color": "#848e9c",
          "font-size": "24px",
          "line-height": "1"
        },
        onClick: $event => $data.showPopover[index] = !$data.showPopover[index]
      }, null, 8 /* PROPS */, _hoisted_23)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: index,
        round: "",
        style: {
          "margin-left": "3px"
        },
        width: "18px",
        height: "18px",
        "icon-size": "18px",
        "lazy-load": "",
        "show-loading": "",
        src: `${_ctx.$store.state.s3BaseUrl}swap/${item === null || item === void 0 ? void 0 : item.amm}.jpeg`,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png"),
        onClick: $event => $data.showPopover[index] = !$data.showPopover[index]
      }, null, 8 /* PROPS */, ["src", "error-icon", "onClick"]))]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item === null || item === void 0 ? void 0 : item.amm), 1 /* TEXT */)]),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["show", "onUpdate:show"])])])], 10 /* CLASS, PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */)), ((_$props$tableList2 = $props.tableList) === null || _$props$tableList2 === void 0 ? void 0 : _$props$tableList2.length) > 3 && $data.show ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(((_$props$tableList3 = $props.tableList) === null || _$props$tableList3 === void 0 || (_$props$tableList3$sl = _$props$tableList3.slice) === null || _$props$tableList3$sl === void 0 ? void 0 : _$props$tableList3$sl.call(_$props$tableList3, 3)) || [], (item, index) => {
    var _ctx$$f$filterChain4, _ctx$$f$filterChain5, _ctx$$f$filterChain6;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("tr", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goLink(item), ["stop"]),
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])({
        current: _ctx.$store.state.pair.address === item.pair
      })
    }, [_hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [item.target_token === item.token0_address ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 0
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item === null || item === void 0 ? void 0 : item.token0_symbol), 1 /* TEXT */), _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
      href: "",
      class: "minor",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
        name: 'Brc',
        params: {
          id: item.token1_address + '-' + (item === null || item === void 0 ? void 0 : item.chain)
        },
        query: {
          from: _ctx.$route.name
        }
      }), ["stop", "prevent"])
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token1_symbol), 9 /* TEXT, PROPS */, _hoisted_28)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token1_symbol), 1 /* TEXT */), _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
      href: "",
      class: "minor",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
        name: 'Brc',
        params: {
          id: item.token0_address + '-' + (item === null || item === void 0 ? void 0 : item.chain)
        },
        query: {
          from: _ctx.$route.name
        }
      }), ["stop", "prevent"])
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.token0_symbol), 9 /* TEXT, PROPS */, _hoisted_31)], 64 /* STABLE_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [item.target_token === item.token0_address ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 0
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.token0_price_usd) || 0)), 1 /* TEXT */), _hoisted_33, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_34, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.token0_price_eth ? _ctx.$f.formatNumber2(item.token0_price_eth || 0) + ((_ctx$$f$filterChain4 = _ctx.$f.filterChain(item.chain)) === null || _ctx$$f$filterChain4 === void 0 ? void 0 : _ctx$$f$filterChain4.unit) : '--'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_35, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.token1_price_usd || 0)), 1 /* TEXT */), _hoisted_36, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_37, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.token1_price_eth ? _ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.token1_price_eth) || 0) + ((_ctx$$f$filterChain5 = _ctx.$f.filterChain(item.chain)) === null || _ctx$$f$filterChain5 === void 0 ? void 0 : _ctx$$f$filterChain5.unit) : '--'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_38, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.volume_u) || 0, 1, 4, 10 ** 4)), 1 /* TEXT */), _hoisted_39, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_40, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_41, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item !== null && item !== void 0 && item.volume_eth ? _ctx.$f.formatNumber2((item === null || item === void 0 ? void 0 : item.volume_eth) / (item.chain === 'brc20' || item.chain === 'merlin' || item.chain === 'runes' ? 100000000 : 1) || 0, 3, 4, 10 ** 4) + ' ' + (item.chain === 'brc20' || item.chain === 'merlin' || item.chain === 'runes' ? 'btc' : (_ctx$$f$filterChain6 = _ctx.$f.filterChain(_ctx.row.chain)) === null || _ctx$$f$filterChain6 === void 0 ? void 0 : _ctx$$f$filterChain6.unit) : '--'), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_42, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popover, {
      trigger: "manual",
      show: $data.showPopover[index],
      "onUpdate:show": $event => $data.showPopover[index] = $event,
      theme: "dark",
      class: "pop-3B436D",
      placement: "left-start"
    }, {
      reference: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(item === null || item === void 0 ? void 0 : item.amm) === 'unknown' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("i", {
        key: 0,
        class: "iconfont icon-unknown",
        style: {
          "color": "#848e9c",
          "font-size": "24px",
          "line-height": "1"
        },
        onClick: $event => $data.showPopover[index + 3] = !$data.showPopover[index + 3]
      }, null, 8 /* PROPS */, _hoisted_44)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: index,
        round: "",
        style: {
          "margin-left": "3px"
        },
        width: "18px",
        height: "18px",
        "icon-size": "18px",
        "lazy-load": "",
        "show-loading": "",
        src: `${_ctx.$store.state.s3BaseUrl}swap/${item === null || item === void 0 ? void 0 : item.amm}.jpeg`,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png"),
        onClick: $event => $data.showPopover[index + 3] = !$data.showPopover[index + 3]
      }, null, 8 /* PROPS */, ["src", "error-icon", "onClick"]))]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_43, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item === null || item === void 0 ? void 0 : item.amm), 1 /* TEXT */)]),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["show", "onUpdate:show"])])])], 10 /* CLASS, PROPS */, _hoisted_24);
  }), 128 /* KEYED_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), $props.tableList.length > 3 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 0,
    class: "collapse-button",
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.show = !$data.show, ["stop"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(!$data.show ? _ctx.$t('more') : _ctx.$t('collapse')) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])($data.show ? 'collapse' : 'expand'),
    name: "arrow"
  }, null, 8 /* PROPS */, ["class"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_record, {
    tableList: $props.tableRecordsList,
    loading: $props.loadingRecords
  }, null, 8 /* PROPS */, ["tableList", "loading"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-09ea84a4"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "top"
};
const _hoisted_2 = {
  class: "table"
};
const _hoisted_3 = {
  class: "table-list"
};
const _hoisted_4 = {
  class: "table-item table-header"
};
const _hoisted_5 = {
  class: "table-item-d"
};
const _hoisted_6 = {
  class: "table-item-d"
};
const _hoisted_7 = {
  class: "table-item-d"
};
const _hoisted_8 = {
  class: "table-item-d"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = {
  class: "table-item-d"
};
const _hoisted_11 = {
  class: "table-item-d_row"
};
const _hoisted_12 = {
  class: "table-item-d"
};
const _hoisted_13 = {
  class: "table-item-d_row"
};
const _hoisted_14 = {
  class: "unit"
};
const _hoisted_15 = {
  class: "table-item-d"
};
const _hoisted_16 = {
  class: "table-item-d"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('record')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    active: $options.isLoading,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $options.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('type')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amount')) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('name')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('value')) + "(USDT)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('holder')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.tableList, (row, index) => {
    var _row$wallet_address;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      class: "table-item",
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goLink(row), ["stop"])
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span class=\"table-item-d\">{{ $f.formatDate(row.timestamp, 'MM-DD HH:mm:ss') }}</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
      class: "table-item-d_row",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: row.type === 1 ? _ctx.$store.getters.upColor[2] : _ctx.$store.getters.downColor[2]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(row.type == 1 ? _ctx.$t('buy') : _ctx.$t('sell')), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate(row.time, 'MM-DD HH:mm:ss')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: row.type === 1 ? _ctx.$store.getters.upColor[2] : _ctx.$store.getters.downColor[2]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit(row.amount)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(row.symbol), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(row.volume, 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_16, " *" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_row$wallet_address = row.wallet_address) === null || _row$wallet_address === void 0 ? void 0 : _row$wallet_address.slice(-4)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_9);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $props.tableList && $props.tableList.length === 0 && !$options.isLoading]])])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-0ee65da8"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "table"
};
const _hoisted_2 = {
  class: "table-list"
};
const _hoisted_3 = {
  class: "table-item table-header"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  style: {
    "color": "#558BED"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    active: $options.isLoading,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $options.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('swapPrice')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amountB')) + "(" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.tokenInfo.symbol) + ")", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amountU')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span>{{ $t('platform') }}</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('user')), 1 /* TEXT */)]), $props.tableList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.tableList, (row, index) => {
    var _$props$tableList, _$props$tableList2, _row$wallet_address;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      class: "table-item",
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goLink(row), ["stop"])
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate(row.time, 'HH:mm')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: $options.getPrice((_$props$tableList = $props.tableList) === null || _$props$tableList === void 0 ? void 0 : _$props$tableList[index]) >= $options.getPrice((_$props$tableList2 = $props.tableList) === null || _$props$tableList2 === void 0 ? void 0 : _$props$tableList2[index + 1]) ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatDecimal(_ctx.$f.formatNumber($options.getPrice(row)))), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.getAmount(row))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($options.getAmountUSD(row) || 0, 1)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span>\n            <van-popover trigger=\"manual\" v-model:show=\"showPopover[index]\" theme=\"dark\" class=\"pop-3B436D\"  placement=\"left-start\">\n              <div class=\"pop-content\">{{ row?.amm }}</div>\n              <template #reference>\n                <i class=\"iconfont icon-unknown\" style=\"color:#848E9C; font-size: 24px; line-height: 1;\" v-if=\"row?.amm === 'unknown'\" @click=\"showPopover[index] = !showPopover[index]\"></i>\n                <van-image\n                  v-else\n                  :key=\"index\"\n                  round\n                  style=\"margin-left: 3px;\"\n                  width=\"18px\"\n                  height=\"18px\"\n                  icon-size=\"18px\"\n                  lazy-load\n                  show-loading\n                  :src=\"`${$store.state.s3BaseUrl}swap/${row?.amm }.jpeg`\"\n                  :error-icon=\"require('@/assets/images/icon-default.png')\"\n                  @click=\"showPopover[index] = !showPopover[index]\"\n                />\n              </template>\n            </van-popover>\n          </span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "*" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_row$wallet_address = row.wallet_address) === null || _row$wallet_address === void 0 ? void 0 : _row$wallet_address.slice(-4)), 1 /* TEXT */), row.count && row.count > 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_5, "(" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(row.count) + ")", 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])], 8 /* PROPS */, _hoisted_4);
  }), 128 /* KEYED_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataDark,
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $props.tableList && $props.tableList.length === 0]])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-5fcfba69"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "home-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_brc20_info = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("brc20-info");
  const _component_k_line_brc_chart = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("k-line-brc-chart");
  const _component_swap = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("swap");
  const _component_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("tabs");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_brc20_info, {
    ref: "brc20info_ref",
    warningStatus: $data.warningStatus
  }, null, 8 /* PROPS */, ["warningStatus"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_k_line_brc_chart, {
    ref: "kLineNftChart"
  }, null, 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_swap), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_tabs)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#tokenInfoPop {\n  --van-dropdown-menu-background-color: #2c3254;\n}\n#tokenInfoPop .van-dropdown-item__content {\n  background: #2c3254;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".info[data-v-6299ac81] {\n  background: #2c3254;\n  font-size: 0.24rem;\n  color: #878fbc;\n  letter-spacing: 0;\n  text-align: left;\n  padding: 0.3rem 0.3rem 0;\n}\n.info.dropdown[data-v-6299ac81] {\n  padding: 0.1rem 0.3rem 0;\n}\n.info .icon-copy[data-v-6299ac81] {\n  font-size: 0.24rem;\n  margin-left: 0.1rem;\n}\n.info .info-left[data-v-6299ac81] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.info .info_top[data-v-6299ac81] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.info .info_bottom[data-v-6299ac81] {\n  margin-bottom: 0.2rem;\n}\n.info .info-left[data-v-6299ac81] {\n  margin-bottom: 0.24rem;\n}\n.info .white[data-v-6299ac81] {\n  color: #fff;\n}\n.info .font-20[data-v-6299ac81] {\n  font-size: 0.4rem;\n}\n.info .mr-5[data-v-6299ac81] {\n  margin-right: 0.1rem;\n}\n.info-table[data-v-6299ac81] {\n  width: 100%;\n  display: flex;\n  font-size: 0.24rem;\n  color: #878fbc;\n}\n.table-container[data-v-6299ac81] {\n  flex: 1;\n}\n.table-box[data-v-6299ac81] {\n  width: 100%;\n}\n.table-box .table-label[data-v-6299ac81] {\n  text-align: left;\n  word-wrap: break-word;\n  white-space: normal;\n  word-break: normal;\n  overflow-wrap: anywhere;\n}\n.table-box .white[data-v-6299ac81] {\n  text-align: right;\n}\n.table-box tr + tr td[data-v-6299ac81] {\n  padding: 0.04rem 0;\n}\n.divider-line[data-v-6299ac81] {\n  width: 0.01rem;\n  background-color: #878fbc;\n  opacity: 0.2;\n  margin: 0 0.2rem 0 0.2rem;\n}\n.info-address[data-v-6299ac81] {\n  background-color: rgba(135, 143, 188, 0.2);\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.14rem;\n}\n.risk-status[data-v-6299ac81] {\n  font-size: 0.2rem;\n  color: #878fbc;\n  border: 0.02rem solid;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.14rem;\n}\n.risk-status.high[data-v-6299ac81] {\n  color: #f72121;\n}\n.risk-status.checked[data-v-6299ac81] {\n  color: #54d06f;\n}\n.info_bottom[data-v-6299ac81] {\n  margin-top: 0.1rem;\n}\n.icon-collect[data-v-6299ac81] {\n  font-size: 0.4rem;\n  color: #878fbc;\n  cursor: pointer;\n  margin-right: 0.04rem;\n}\n.icon-collect.collected[data-v-6299ac81] {\n  color: #558bed;\n}\n.collapse-box[data-v-6299ac81] {\n  text-align: center;\n  padding: 0.1rem 0;\n}\n.icon-collapse-down[data-v-6299ac81] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  display: inline-block;\n}\n.icon-collapse-down.up[data-v-6299ac81] {\n  transform: rotateZ(180deg);\n}\n[data-v-6299ac81] .van-dropdown-menu .van-dropdown-menu__bar {\n  background: #2c3254;\n  height: 0.3rem;\n  box-shadow: none;\n}\n[data-v-6299ac81] .van-dropdown-menu .van-dropdown-menu__bar.van-dropdown-menu__bar--opened {\n  pointer-events: none;\n}\n[data-v-6299ac81] .van-dropdown-menu .info {\n  padding: 0 0.3rem 0;\n}\n[data-v-6299ac81] .van-dropdown-menu .van-dropdown-menu__title::after,[data-v-6299ac81] .van-dropdown-menu .van-dropdown-menu__title--down::after {\n  display: none;\n}\n.qr-popup-title[data-v-6299ac81] {\n  font-size: 0.36rem;\n  font-weight: 400;\n  margin-left: 0;\n  text-align: center;\n  color: red;\n}\n.qr-popup-content[data-v-6299ac81] {\n  color: red;\n  line-height: 1.5;\n  text-align: left;\n}\n.qr-popup-content .risk-warning-content[data-v-6299ac81] {\n  font-size: 0.28rem;\n  margin-top: 0.2rem;\n}\n.qr-popup-content .checkbox-box[data-v-6299ac81] {\n  margin: 0.6rem 0;\n}\n.qr-popup-content .checkbox-box[data-v-6299ac81]  .van-checkbox__label {\n  font-size: 0.28rem;\n}\n.qr-popup-content .confirm-btn[data-v-6299ac81] {\n  border-radius: 0.2rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swap-container[data-v-c046323e] {\n  display: flex;\n  align-items: center;\n  background-color: #1d223d;\n  justify-content: space-between;\n  padding: 0.3rem 0.2rem 0.3rem 0.2rem;\n}\n.swap-button[data-v-c046323e] {\n  border-radius: 0.2rem;\n  min-width: 2.4rem;\n}\n.swap-button.large[data-v-c046323e] {\n  min-width: 1.2rem;\n  color: #878fbc !important;\n}\n.swap-button + .swap-button[data-v-c046323e] {\n  margin-left: 0.4rem;\n}\n.pair-info[data-v-c046323e] {\n  padding: 0.04rem 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border: 0.02rem solid rgba(135, 143, 188, 0.3);\n  border-radius: 0.12rem;\n}\n.divider-line[data-v-c046323e] {\n  border-left: 0.02rem solid rgba(135, 143, 188, 0.3);\n  height: 0.48rem;\n}\n.pair-item[data-v-c046323e] {\n  color: #878fbc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 0.24rem;\n  padding: 0 0.1rem;\n}\n.pair-item .pair-symbol[data-v-c046323e] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 1.6rem;\n}\n.pair-amount[data-v-c046323e] {\n  font-size: 0.28rem;\n  margin: 0.04rem 0;\n}\n.swap-button-1[data-v-c046323e] {\n  text-align: center;\n  border-radius: 0.1rem;\n  height: auto;\n  font-size: 0.24rem;\n  min-height: 0.64rem;\n  min-width: 1.44rem;\n  padding: 0.04rem 0.04rem;\n}\n.swap-button-1 .tax-container-1[data-v-c046323e] {\n  margin-top: 0.04rem;\n  font-size: 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #cfcfcf;\n}\n.swap-button-1 .tax-container-1 div[data-v-c046323e] {\n  word-break: keep-all;\n}\n.swap-button-1 .tax-container-1 div + div[data-v-c046323e] {\n  margin-left: 0.06rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pairs[data-v-18eef084] {\n  width: 100%;\n  padding: 0.1rem 0 0.4rem;\n  min-height: 6rem;\n}\n.pairs .pairs-table[data-v-18eef084] {\n  width: 100%;\n  font-size: 0.28rem;\n  color: #878fbc;\n  line-height: 1.5;\n  padding: 0.3rem 0.16rem 0 0.16rem;\n  border-collapse: collapse;\n}\n.pairs .pairs-table th[data-v-18eef084] {\n  text-align: center;\n  font-size: 0.24rem;\n}\n.pairs .pairs-table td[data-v-18eef084] {\n  text-align: center;\n  padding: 0.1rem 0;\n  word-break: break-word;\n  vertical-align: top;\n}\n.pairs .pairs-table tr[data-v-18eef084] {\n  padding: 0 0.2rem;\n}\n.pairs .pairs-table tr td[data-v-18eef084]:nth-child(1),\n.pairs .pairs-table tr th[data-v-18eef084]:nth-child(1) {\n  text-align: left;\n  padding: 0 0.3rem;\n}\n.pairs .pairs-table tr td[data-v-18eef084]:nth-child(2),\n.pairs .pairs-table tr th[data-v-18eef084]:nth-child(2) {\n  text-align: right;\n  padding: 0 0.3rem;\n}\n.pairs .pairs-table tr td[data-v-18eef084]:last-child,\n.pairs .pairs-table tr th[data-v-18eef084]:last-child {\n  text-align: right;\n  padding-right: 0.3rem;\n}\n.pairs .flex-end[data-v-18eef084] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".history-container[data-v-418c0e62] {\n  margin-bottom: 2rem;\n}\n.history-container .header[data-v-418c0e62] {\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n  padding: 0.22rem 0.76rem;\n  display: flex;\n  justify-content: flex-start;\n  font-size: 0.28rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.4rem;\n}\n.history-container .header a[data-v-418c0e62] {\n  text-decoration: none;\n  padding: 0.18rem 0.6rem;\n  font-size: 0.28rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.4rem;\n  border: 0.02rem solid #558bed;\n}\n.history-container .header a[data-v-418c0e62]:first-child {\n  border-radius: 0.2rem 0 0 0.2rem;\n}\n.history-container .header a[data-v-418c0e62]:last-child {\n  border-radius: 0 0.2rem 0.2rem 0;\n}\n.history-container .header a[data-v-418c0e62]:hover {\n  text-decoration: none;\n}\n.history-container .header a.active[data-v-418c0e62] {\n  background: #558bed;\n}\n.history-container[data-v-418c0e62]  .van-tabs--line .van-tabs__wrap {\n  height: 0.88rem;\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".overview[data-v-7ea65941] {\n  color: #878fbc;\n  padding: 0 0.3rem;\n  color: 0.28rem;\n  line-height: 1.5;\n}\n.overview h3[data-v-7ea65941] {\n  margin: 0 0 0.2rem;\n  font-size: 0.32rem;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  color: #ffffff;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.overview li[data-v-7ea65941] {\n  padding: 0.3rem 0;\n}\n.overview li .token-description[data-v-7ea65941] {\n  overflow-wrap: break-word;\n  line-height: 1.5;\n}\n.overview li + li[data-v-7ea65941] {\n  border-top: 0.01rem solid rgba(135, 143, 188, 0.3);\n}\n.overview a[data-v-7ea65941] {\n  color: #878fbc;\n  max-width: 60vw;\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.overview table[data-v-7ea65941] {\n  width: 100%;\n  line-height: 1;\n}\n.overview tr td[data-v-7ea65941] {\n  padding: 0.14rem 0;\n}\n.overview tr td[data-v-7ea65941]:nth-child(1),\n.overview tr th[data-v-7ea65941]:nth-child(1) {\n  color: #878fbc;\n  text-align: left;\n}\n.overview tr td[data-v-7ea65941]:nth-child(2),\n.overview tr th[data-v-7ea65941]:nth-child(2) {\n  text-align: right;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".me[data-v-187f5402] {\n  padding: 0.2rem 0.32rem;\n  font-size: 0.28rem;\n  color: #878fbc;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.me .statistics[data-v-187f5402] {\n  margin-top: 0.2rem;\n}\n.me .statistics .item[data-v-187f5402] {\n  padding: 0.1rem 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.08rem;\n}\n.me .statistics .item span[data-v-187f5402] {\n  font-size: 0.24rem;\n  letter-spacing: 0;\n  line-height: 0.32rem;\n  font-weight: 400;\n}\n.me .flex-start[data-v-187f5402] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.me .tabs[data-v-187f5402] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.02rem;\n  background: #252a49;\n  border-radius: 0.08rem;\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n.me .tabs .tab-item[data-v-187f5402] {\n  flex: 1;\n  text-align: center;\n}\n.me .tabs .tab-radio-input[data-v-187f5402] {\n  width: 0;\n  height: 0;\n  font-size: 0;\n  opacity: 0;\n  display: none;\n}\n.me .tabs .tab-radio-input:checked + .tab-item-label[data-v-187f5402] {\n  background: #2c3254;\n  color: #eaecef;\n}\n.me .tabs .tab-item-label[data-v-187f5402] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.12rem 0.16rem;\n  display: block;\n  width: 100%;\n}\n.me .content[data-v-187f5402] {\n  min-height: 6rem;\n}\n.me table[data-v-187f5402] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  padding: 0 0.28rem;\n}\n.me table th[data-v-187f5402],\n.me table td[data-v-187f5402] {\n  font-size: 0.24rem;\n  color: #878ebe;\n  letter-spacing: 0;\n  font-weight: 400;\n  text-align: right;\n  padding: 0.16rem 0.02rem;\n}\n.me table th[data-v-187f5402]:first-child,\n.me table td[data-v-187f5402]:first-child {\n  text-align: left;\n}\n.me table th[data-v-187f5402] {\n  padding: 0.1rem 0.02rem;\n}\n.me table td[data-v-187f5402] {\n  color: #9aa4d8;\n  word-break: break-all;\n}\n.me table.bg tr[data-v-187f5402]:not(.table-header) {\n  background: #252a47;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pairs[data-v-13bdfd06] {\n  width: 100%;\n  padding: 0.1rem 0 0.4rem;\n}\n.pairs .pairs-table[data-v-13bdfd06] {\n  width: 100%;\n  font-size: 0.24rem;\n  color: #9aa4d8;\n  line-height: 1.5;\n  padding: 0.3rem 0.16rem 0 0.16rem;\n  border-collapse: collapse;\n}\n.pairs .pairs-table th[data-v-13bdfd06] {\n  text-align: center;\n  color: #6a719c;\n}\n.pairs .pairs-table td[data-v-13bdfd06] {\n  text-align: center;\n  padding: 0.16rem 0;\n  word-break: break-word;\n  vertical-align: top;\n}\n.pairs .pairs-table tr[data-v-13bdfd06] {\n  padding: 0 0.2rem;\n}\n.pairs .pairs-table tr td[data-v-13bdfd06]:nth-child(2),\n.pairs .pairs-table tr th[data-v-13bdfd06]:nth-child(2) {\n  text-align: left;\n  padding-left: 0.3rem;\n}\n.pairs .pairs-table tr td[data-v-13bdfd06]:nth-child(3),\n.pairs .pairs-table tr th[data-v-13bdfd06]:nth-child(3),\n.pairs .pairs-table tr td[data-v-13bdfd06]:nth-child(4),\n.pairs .pairs-table tr th[data-v-13bdfd06]:nth-child(4) {\n  text-align: right;\n}\n.pairs .pairs-table tr td[data-v-13bdfd06]:last-child,\n.pairs .pairs-table tr th[data-v-13bdfd06]:last-child {\n  text-align: right;\n  padding-right: 0.3rem;\n}\n.pairs .pairs-table tr.current[data-v-13bdfd06] {\n  background: #3b436d;\n}\n.pairs .pairs-table tr.current td[data-v-13bdfd06]:first-child {\n  border-left: 0.08rem solid #3f80f7;\n}\n.main[data-v-13bdfd06] {\n  font-size: 0.28rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 0;\n  word-break: break-all;\n}\n.minor[data-v-13bdfd06] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.collapse-button[data-v-13bdfd06] {\n  font-size: 0.28rem;\n  color: #9aa4d8;\n  line-height: 1.5;\n  padding: 0.2rem 0;\n  text-align: center;\n}\n.collapse-button .collapse[data-v-13bdfd06] {\n  transition: all 0.5s;\n  transform: rotateZ(-90deg);\n}\n.collapse-button .expand[data-v-13bdfd06] {\n  transition: all 0.5s;\n  transform: rotateZ(90deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table[data-v-09ea84a4] {\n  font-size: 0.28rem;\n  color: #878fbc;\n  letter-spacing: 0.0058rem;\n  position: relative;\n  background: #2C3254;\n  padding: 0.1rem 0 0.4rem;\n}\n.table .table-list[data-v-09ea84a4] {\n  font-size: 0.24rem;\n  min-height: 4rem;\n  color: #9AA4D8;\n}\n.table .table-list .table-item[data-v-09ea84a4] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n}\n.table .table-list .table-item.table-header[data-v-09ea84a4] {\n  font-size: 0.24rem;\n  color: #6a719c;\n}\n.table .table-list .table-item[data-v-09ea84a4]:not(.table-header):active {\n  background: #292F52;\n}\n.table .table-list .table-item[data-v-09ea84a4]:not(.table-header):hover {\n  background: #292F52;\n}\n.table .table-list .table-item .table-item-d[data-v-09ea84a4] {\n  padding: 0.2rem 0;\n}\n.table .table-list .table-item .table-item-d[data-v-09ea84a4]:nth-child(1) {\n  flex: 4;\n  text-align: left;\n}\n.table .table-list .table-item .table-item-d[data-v-09ea84a4]:nth-child(2) {\n  flex: 4.5;\n  text-align: right;\n  font-size: 0.24rem;\n}\n.table .table-list .table-item .table-item-d[data-v-09ea84a4]:nth-child(3) {\n  flex: 4;\n  text-align: right;\n  font-size: 0.24rem;\n}\n.table .table-list .table-item .table-item-d[data-v-09ea84a4]:nth-child(4) {\n  flex: 3;\n  text-align: right;\n  font-size: 0.24rem;\n}\n.table .table-list .table-item .table-item-d .table-item-d_row + .table-item-d_row[data-v-09ea84a4] {\n  margin-top: 0.1rem;\n}\n.table .table-list .table-item .table-item-d .table-item-d_row .unit[data-v-09ea84a4] {\n  display: inline-block;\n  margin-left: 0.1rem;\n}\n.pagination-box[data-v-09ea84a4] {\n  margin-top: 0.4rem;\n}\na[data-v-09ea84a4] {\n  color: #558BED;\n}\n.top[data-v-09ea84a4] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.24rem;\n  padding: 0 0.2rem;\n}\n.top i[data-v-09ea84a4] {\n  vertical-align: middle;\n  margin-right: 0.04rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table[data-v-0ee65da8] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  letter-spacing: 0.0058rem;\n  position: relative;\n  background: #2C3254;\n  padding: 0.1rem 0.2rem 0.4rem;\n}\n.table .table-list[data-v-0ee65da8] {\n  font-size: 0.24rem;\n  min-height: 4rem;\n  color: #9AA4D8;\n}\n.table .table-list .table-item[data-v-0ee65da8] {\n  display: flex;\n  align-items: center;\n}\n.table .table-list .table-item.table-header[data-v-0ee65da8] {\n  font-size: 0.24rem;\n  color: #6a719c;\n}\n.table .table-list .table-item span[data-v-0ee65da8] {\n  padding: 0.2rem 0;\n}\n.table .table-list .table-item span[data-v-0ee65da8]:nth-child(1) {\n  flex: 1.8;\n  text-align: left;\n}\n.table .table-list .table-item span[data-v-0ee65da8]:nth-child(2) {\n  flex: 2;\n  text-align: right;\n}\n.table .table-list .table-item span[data-v-0ee65da8]:nth-child(3) {\n  margin: 0 0.1rem;\n  flex: 3;\n  text-align: right;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.table .table-list .table-item span[data-v-0ee65da8]:nth-child(4) {\n  flex: 2;\n  text-align: right;\n}\n.table .table-list .table-item span[data-v-0ee65da8]:nth-child(5) {\n  margin: 0 0 0 0.1rem;\n  flex: 2;\n  text-align: right;\n}\n[data-v-0ee65da8] .el-table__empty-block {\n  background: #343C63;\n}\n[data-v-0ee65da8]  .el-table {\n  font-size: 0.28rem;\n  color: #878fbc;\n  letter-spacing: 0.0058rem;\n}\n[data-v-0ee65da8]  .el-table::before {\n  height: 0;\n}\n[data-v-0ee65da8]  .el-table thead {\n  color: #fff;\n}\n[data-v-0ee65da8]  .el-table thead th {\n  background: #2C3254;\n}\n[data-v-0ee65da8]  .el-table thead th.is-leaf {\n  border-bottom: none;\n}\n[data-v-0ee65da8]  .el-table thead th .cell {\n  font-size: 0.28rem;\n  letter-spacing: 0.0058rem;\n  line-height: 0.4rem;\n  color: #878fbc;\n}\n[data-v-0ee65da8]  .el-table tr {\n  background: #2C3254;\n}\n[data-v-0ee65da8]  .el-table tr td {\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n}\n[data-v-0ee65da8]  .el-table tr td .cell {\n  line-height: 0.52rem;\n}\n[data-v-0ee65da8]  .el-table--enable-row-hover .el-table__body tr:hover > td {\n  background-color: #2C3254;\n}\n.pagination-box[data-v-0ee65da8] {\n  margin-top: 0.4rem;\n}\na[data-v-0ee65da8] {\n  color: #558BED;\n}\n.highlight[data-v-0ee65da8] {\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".home-content[data-v-5fcfba69] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.28rem;\n  color: #ffffff;\n  background: #2c3254;\n  padding-bottom: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f50102ba", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5e20e5cd", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5b6c23d2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("67763e7e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4e35796d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("60feae04", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("71aed9e7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5600a9c4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1b3846d4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4fc45840", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("26edc743", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/brc20/brc20Info.vue":
/*!********************************************!*\
  !*** ./src/components/brc20/brc20Info.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brc20Info_vue_vue_type_template_id_6299ac81_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brc20Info.vue?vue&type=template&id=6299ac81&scoped=true */ "./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true");
/* harmony import */ var _brc20Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brc20Info.vue?vue&type=script&lang=js */ "./src/components/brc20/brc20Info.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss */ "./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss");
/* harmony import */ var _brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true */ "./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_brc20Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_brc20Info_vue_vue_type_template_id_6299ac81_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-6299ac81"],['__file',"src/components/brc20/brc20Info.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/brc20Info.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/brc20/brc20Info.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss":
/*!*****************************************************************************************!*\
  !*** ./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=0&id=6299ac81&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_0_id_6299ac81_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=style&index=1&id=6299ac81&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_style_index_1_id_6299ac81_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_template_id_6299ac81_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./brc20Info.vue?vue&type=template&id=6299ac81&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/brc20Info.vue?vue&type=template&id=6299ac81&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc20Info_vue_vue_type_template_id_6299ac81_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/swap.vue":
/*!***************************************!*\
  !*** ./src/components/brc20/swap.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swap_vue_vue_type_template_id_c046323e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swap.vue?vue&type=template&id=c046323e&scoped=true */ "./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true");
/* harmony import */ var _swap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap.vue?vue&type=script&lang=js */ "./src/components/brc20/swap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true */ "./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_swap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_swap_vue_vue_type_template_id_c046323e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-c046323e"],['__file',"src/components/brc20/swap.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/swap.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/brc20/swap.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./swap.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=style&index=0&id=c046323e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_style_index_0_id_c046323e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_template_id_c046323e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./swap.vue?vue&type=template&id=c046323e&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/swap.vue?vue&type=template&id=c046323e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_swap_vue_vue_type_template_id_c046323e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/holders.vue":
/*!***********************************************!*\
  !*** ./src/components/brc20/tabs/holders.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _holders_vue_vue_type_template_id_18eef084_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holders.vue?vue&type=template&id=18eef084&scoped=true */ "./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true");
/* harmony import */ var _holders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./holders.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true */ "./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_holders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_holders_vue_vue_type_template_id_18eef084_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-18eef084"],['__file',"src/components/brc20/tabs/holders.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./holders.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=style&index=0&id=18eef084&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_style_index_0_id_18eef084_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true ***!
  \*****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_template_id_18eef084_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./holders.vue?vue&type=template&id=18eef084&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/holders.vue?vue&type=template&id=18eef084&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_holders_vue_vue_type_template_id_18eef084_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/index.vue":
/*!*********************************************!*\
  !*** ./src/components/brc20/tabs/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_418c0e62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=418c0e62&scoped=true */ "./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss */ "./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_418c0e62_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-418c0e62"],['__file',"src/components/brc20/tabs/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/index.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/brc20/tabs/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=style&index=0&id=418c0e62&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_418c0e62_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_418c0e62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=template&id=418c0e62&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/index.vue?vue&type=template&id=418c0e62&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_418c0e62_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/info.vue":
/*!********************************************!*\
  !*** ./src/components/brc20/tabs/info.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_7ea65941_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=7ea65941&scoped=true */ "./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true");
/* harmony import */ var _info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/info.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true */ "./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_info_vue_vue_type_template_id_7ea65941_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-7ea65941"],['__file',"src/components/brc20/tabs/info.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/info.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/brc20/tabs/info.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./info.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=style&index=0&id=7ea65941&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_style_index_0_id_7ea65941_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_template_id_7ea65941_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./info.vue?vue&type=template&id=7ea65941&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/info.vue?vue&type=template&id=7ea65941&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_info_vue_vue_type_template_id_7ea65941_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/my.vue":
/*!******************************************!*\
  !*** ./src/components/brc20/tabs/my.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_vue_vue_type_template_id_187f5402_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my.vue?vue&type=template&id=187f5402&scoped=true */ "./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true");
/* harmony import */ var _my_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/my.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true */ "./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_my_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_my_vue_vue_type_template_id_187f5402_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-187f5402"],['__file',"src/components/brc20/tabs/my.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/my.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/brc20/tabs/my.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./my.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=style&index=0&id=187f5402&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_style_index_0_id_187f5402_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_template_id_187f5402_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./my.vue?vue&type=template&id=187f5402&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/my.vue?vue&type=template&id=187f5402&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_my_vue_vue_type_template_id_187f5402_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/platform.vue":
/*!************************************************!*\
  !*** ./src/components/brc20/tabs/platform.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform_vue_vue_type_template_id_13bdfd06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform.vue?vue&type=template&id=13bdfd06&scoped=true */ "./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true");
/* harmony import */ var _platform_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true */ "./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_platform_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_platform_vue_vue_type_template_id_13bdfd06_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-13bdfd06"],['__file',"src/components/brc20/tabs/platform.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./platform.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=style&index=0&id=13bdfd06&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_style_index_0_id_13bdfd06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true ***!
  \******************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_template_id_13bdfd06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./platform.vue?vue&type=template&id=13bdfd06&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/platform.vue?vue&type=template&id=13bdfd06&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_platform_vue_vue_type_template_id_13bdfd06_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/record.vue":
/*!**********************************************!*\
  !*** ./src/components/brc20/tabs/record.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _record_vue_vue_type_template_id_09ea84a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record.vue?vue&type=template&id=09ea84a4&scoped=true */ "./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true");
/* harmony import */ var _record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/record.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true */ "./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_record_vue_vue_type_template_id_09ea84a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-09ea84a4"],['__file',"src/components/brc20/tabs/record.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/record.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/brc20/tabs/record.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./record.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=style&index=0&id=09ea84a4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_style_index_0_id_09ea84a4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_template_id_09ea84a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./record.vue?vue&type=template&id=09ea84a4&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/record.vue?vue&type=template&id=09ea84a4&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_record_vue_vue_type_template_id_09ea84a4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/brc20/tabs/txs.vue":
/*!*******************************************!*\
  !*** ./src/components/brc20/tabs/txs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _txs_vue_vue_type_template_id_0ee65da8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./txs.vue?vue&type=template&id=0ee65da8&scoped=true */ "./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true");
/* harmony import */ var _txs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./txs.vue?vue&type=script&lang=js */ "./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true */ "./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_txs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_txs_vue_vue_type_template_id_0ee65da8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-0ee65da8"],['__file',"src/components/brc20/tabs/txs.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./txs.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=style&index=0&id=0ee65da8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_style_index_0_id_0ee65da8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_template_id_0ee65da8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./txs.vue?vue&type=template&id=0ee65da8&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/brc20/tabs/txs.vue?vue&type=template&id=0ee65da8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_txs_vue_vue_type_template_id_0ee65da8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/utils/inscription.js":
/*!**********************************!*\
  !*** ./src/utils/inscription.js ***!
  \**********************************/
/*! exports provided: inscriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inscriptions", function() { return inscriptions; });
const inscriptions = {
  "unisat": {
    "name": "Unisat.io",
    "chain": "bitcoin",
    "deploy_url": "https://unisat.io/inscribe",
    "mint_url": "https://unisat.io/inscribe",
    "trade_url": "https://unisat.io/market/{p}?tick={tick}",
    "is_integrated_by_ave": true,
    "is_mintable_by_ave": true
  },
  "okx": {
    "name": "OKX",
    "chain": "bitcoin",
    "deploy_url": "https://www.okx.com/cn/web3/marketplace/inscription/ordinals/tokens",
    "mint_url": "https://www.okx.com/cn/web3/marketplace/inscription/ordinals/token/{tick}",
    "trade_url": "https://www.okx.com/cn/web3/marketplace/inscription/ordinals/token/{tick}",
    "is_integrated_by_ave": true,
    "is_mintable_by_ave": true
  },
  "satsx": {
    "name": "Satsx.io",
    "chain": "bitcoin",
    "deploy_url": "https://www.satsx.io/inscribe/{p}?template=&op=deploy",
    "mint_url": "https://www.satsx.io/inscribe/{p}?template=&op=mint",
    "trade_url": "https://www.satsx.io/marketplace/{p}/dmt/listed?sort_by=price&q={tick}&page=1",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "evmink": {
    "name": "Evm.ink",
    "chain": "bsc",
    "deploy_url": "https://evm.ink/create/inscription",
    "mint_url": "https://evm.ink/create/inscription",
    "trade_url": "https://evm.ink/marketplace?tab=tokens&protocol={p}&orderBy=Price%3A+Lowest&tick={tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "etchmarket": {
    "name": "Eth.market",
    "chain": "eth",
    "deploy_url": "https://www.etch.market/tokens",
    "mint_url": "https://www.etch.market/tokens",
    "trade_url": "https://www.etch.market/market/token?category=token&collectionName={p}%20{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "ierc20": {
    "name": "IERC20.com",
    "chain": "eth",
    "deploy_url": "https://www.ierc20.com/inscribe",
    "mint_url": "https://www.ierc20.com/tick/{tick}",
    "trade_url": "https://www.ierc20.com/market/{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "ierc20market": {
    "name": "IERC20.com",
    "chain": "eth",
    "deploy_url": "https://www.ierc20.com/inscribe",
    "mint_url": "https://www.ierc20.com/tick/{tick}",
    "trade_url": "https://www.ierc20.com/market/{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "xrcmarket": {
    "name": "Xrc.market",
    "chain": "polygon",
    "deploy_url": "https://xrc.market/",
    "mint_url": "https://xrc.market/token/{tick}",
    "trade_url": "https://xrc.market/market/137/{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "polsmarket": {
    "name": "PolsMarket",
    "chain": "polygon",
    "deploy_url": "https://www.polsmarket.wtf/",
    "mint_url": "https://www.polsmarket.wtf/",
    "trade_url": "https://www.polsmarket.wtf/market/token?category=token&collectionName={p}%20{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "avascriptions": {
    "name": "Avascriptions",
    "chain": "avalanche",
    "deploy_url": "https://avascriptions.com/tokens",
    "mint_url": "https://avascriptions.com/token/detail?tick={tick}",
    "trade_url": "https://avascriptions.com/market/token?tick={tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "corescriptions": {
    "name": "CoreScriptions",
    "chain": "core",
    "deploy_url": "https://corescriptions.com/create",
    "mint_url": "https://corescriptions.com/CORE20/details/{tick}",
    "trade_url": "https://corescriptions.com/market/{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  },
  "merlinscription": {
    "name": "Merlinscription",
    "chain": "merlin",
    "deploy_url": "https://corescriptions.com/create",
    "mint_url": "https://merlinscription.com/inscribing",
    "trade_url": "https://merlinscription.com/ordinals/mrc20/{tick}",
    "is_integrated_by_ave": false,
    "is_mintable_by_ave": false
  }
};

/***/ }),

/***/ "./src/views/brc.vue":
/*!***************************!*\
  !*** ./src/views/brc.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brc_vue_vue_type_template_id_5fcfba69_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brc.vue?vue&type=template&id=5fcfba69&scoped=true */ "./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true");
/* harmony import */ var _brc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brc.vue?vue&type=script&lang=js */ "./src/views/brc.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss */ "./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_brc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_brc_vue_vue_type_template_id_5fcfba69_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-5fcfba69"],['__file',"src/views/brc.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/brc.vue?vue&type=script&lang=js":
/*!***************************************************!*\
  !*** ./src/views/brc.vue?vue&type=script&lang=js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./brc.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=style&index=0&id=5fcfba69&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_style_index_0_id_5fcfba69_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true":
/*!*********************************************************************!*\
  !*** ./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true ***!
  \*********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_template_id_5fcfba69_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./brc.vue?vue&type=template&id=5fcfba69&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/brc.vue?vue&type=template&id=5fcfba69&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_brc_vue_vue_type_template_id_5fcfba69_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);