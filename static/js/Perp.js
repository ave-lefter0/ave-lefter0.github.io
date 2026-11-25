(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Perp"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _perpInfo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perpInfo.vue */ "./src/views/perp/perpInfo.vue");
/* harmony import */ var _kLineChart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kLineChart.vue */ "./src/views/perp/kLineChart.vue");
/* harmony import */ var _tabs_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/index.vue */ "./src/views/perp/tabs/index.vue");
/* harmony import */ var _api_perp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/perp */ "./src/api/perp.js");








// 同一次页面生命周期内只弹一次；刷新后重置
let hasShownPerpTradeDialog = false;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Perp',
  data() {
    return {
      Timer_getTokenData: null,
      toast: null,
      show: false,
      warningStatus: false,
      show1: false
    };
  },
  components: {
    PerpInfo: _perpInfo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    KLinePerp: _kLineChart_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tabs: _tabs_index_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: {
    shareCode() {
      return this.$route.query.shareCode || '';
    },
    tokenInfo() {
      return this.$store.state.tokenInfo;
    },
    contractId() {
      var _this$$store$state$pe;
      return ((_this$$store$state$pe = this.$store.state.perp) === null || _this$$store$state$pe === void 0 || (_this$$store$state$pe = _this$$store$state$pe.perp) === null || _this$$store$state$pe === void 0 ? void 0 : _this$$store$state$pe.contractId) || this.$route.params.id || '';
    },
    perp() {
      return this.$store.state.perp.perp;
    },
    level() {
      return this.$store.state.perp.level;
    }
  },
  mounted() {
    this.init();
    this.$store.dispatch('updatePerpTypes', {
      pageType: 'Perp',
      type: 1
    });
    if (hasShownPerpTradeDialog) return;
    hasShownPerpTradeDialog = true;
    this.$dialog.confirm({
      title: this.$t('perpTitle'),
      message: this.$t('appPerpTips'),
      confirmButtonText: this.$t('download1'),
      cancelButtonText: this.$t('later'),
      'confirm-button-color': '#558BED'
    }).then(() => {
      // on confirm
      this.$router.push({
        name: 'Download'
      });
    }).catch(() => {
      // on cancel
    });
  },
  unmounted() {
    this.$store.dispatch('updatePerpTypes', {
      pageType: 'Perp',
      type: 0
    });
  },
  watch: {
    '$route.params.id'(val) {
      if (val) {
        this.$f.callIos('appSetWebTitle', '');
        this.init();
      }
    },
    '$store.state.perp.perp.contractName': {
      handler(val) {
        if (this.$route.name === 'Perp' && val) {
          const perp = this.$store.state.perp.perp;
          const lang = this.$store.getters.language || '';
          let title = val;
          if ((lang === 'zh-cn' || lang === 'zh-tw') && perp !== null && perp !== void 0 && perp.contract_name_cn) {
            title = perp.contract_name_cn;
          } else {
            title = String(val).replace(/^[^:]+:/, '').replace(/USDC$/i, '');
          }
          this.$f.callIos('appSetWebTitle', title);
        }
      },
      immediate: true
    },
    '$store.state.perp.perp.contract_name_cn'(val) {
      if (this.$route.name !== 'Perp' || !val) return;
      const lang = this.$store.getters.language || '';
      if (lang === 'zh-cn' || lang === 'zh-tw') {
        this.$f.callIos('appSetWebTitle', val);
      }
    }
  },
  methods: {
    init() {
      const id = this.$route.params.id;
      this.$store.dispatch('fetchHlMetadata').then(() => {
        this.$store.dispatch('setHlContract', id);
        // this.$store.dispatch('hlWsAcquire', 'detail')
        this.fetchLogo();
      }).catch(err => {
        console.error('fetchHlMetadata failed', err);
      });
    },
    // 进入详情页时调用搜索接口，获取合约 logo（base_coin_icon_url）并写入 perp.perp
    fetchLogo() {
      const perp = this.$store.state.perp.perp;
      if (!perp) return;
      const id = decodeURIComponent(this.$route.params.id || '');
      // 优先用路由 id；平台搜索不认 "xyz:SKHX"，需去掉 dex 前缀
      const raw = id || perp.hlName || '';
      const keyword = raw.includes(':') ? raw.split(':').pop() : raw;
      if (!keyword) return;
      Object(_api_perp__WEBPACK_IMPORTED_MODULE_6__["_getContractList"])('all', keyword, 50, 0).then(res => {
        const contracts = (res === null || res === void 0 ? void 0 : res.contracts) || [];
        const idUpper = id.toUpperCase();
        const kwUpper = keyword.toUpperCase();
        const match = contracts.find(c => (c.coin || '').toUpperCase() === idUpper) || contracts.find(c => (c.coin || '').toUpperCase() === kwUpper) || contracts.find(c => (c.coin || '').toUpperCase().includes(kwUpper) || (c.contract_name || '').toUpperCase().includes(kwUpper));
        const logo = match === null || match === void 0 ? void 0 : match.base_coin_icon_url;
        if (this.$store.state.perp.perp) {
          if (logo) this.$store.state.perp.perp.baseCoinIcon = logo;
          // 写入接口中文名 / 最大杠杆，供顶栏按语言展示
          if (match !== null && match !== void 0 && match.contract_name_cn) {
            this.$store.state.perp.perp.contract_name_cn = match.contract_name_cn;
          }
          if (match !== null && match !== void 0 && match.contract_name) {
            this.$store.state.perp.perp.contract_name = match.contract_name;
          }
          if ((match === null || match === void 0 ? void 0 : match.display_max_leverage) != null && match.display_max_leverage !== '') {
            this.$store.state.perp.perp.display_max_leverage = match.display_max_leverage;
          }
        }
      }).catch(() => {});
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _api_hyperliquid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/hyperliquid */ "./src/api/hyperliquid.js");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var technicalindicators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! technicalindicators */ "./node_modules/technicalindicators/lib/index.js");
/* harmony import */ var finmath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! finmath */ "./node_modules/finmath/src/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store/perpWs.js */ "./src/store/perpWs.js");








// import { createChart, isBusinessDay } from '@/assets/js/lightweight-charts.esm.production.js'







// 周线不再使用服务端 1w，改为拉取日线在客户端按周一 UTC 聚合成周线（与 ave_web 一致）
const WEEKLY_RESOLUTION = 'WEEK_1';

/** 将任意毫秒时间戳对齐到所在周的周一 UTC 00:00:00 */
function getUTCMondayTimestamp(msTime) {
  const date = new Date(msTime);
  const day = date.getUTCDay();
  const dayOffset = day === 0 ? 6 : day - 1;
  date.setUTCDate(date.getUTCDate() - dayOffset);
  date.setUTCHours(0, 0, 0, 0);
  return date.getTime();
}

/** 将日线 bars 聚合成周线（按周一 UTC 对齐） */
function aggregateDailyToWeekly(dailyBars, upColor, downColor) {
  if (!(dailyBars !== null && dailyBars !== void 0 && dailyBars.length)) return [];
  const weekMap = new Map();
  for (const bar of dailyBars) {
    const weekStart = getUTCMondayTimestamp(bar.time);
    const existing = weekMap.get(weekStart);
    if (!existing) {
      weekMap.set(weekStart, {
        time: weekStart,
        open: bar.open,
        high: bar.high,
        low: bar.low,
        close: bar.close,
        value: bar.value
      });
    } else {
      existing.high = Math.max(existing.high, bar.high);
      existing.low = Math.min(existing.low, bar.low);
      existing.close = bar.close;
      existing.value += bar.value;
    }
  }
  return Array.from(weekMap.values()).map(i => ({
    ...i,
    color: i.open <= i.close ? upColor : downColor
  })).sort((a, b) => a.time - b.time);
}
let chart = null;
let candlestickSeries = null;
let volumeSeries = null;
let smaLine1 = null;
let smaLine2 = null;
let smaLine3 = null;
let maxMinMarkers = [];
let buySellMarkers = [];
let macdBar = null;
let macdDiFLine = null;
let macdDeaLine = null;
let rsiLine = null;
let kdjKLine = null;
let kdjDLine = null;
let kdjJLine = null;
let migratePriceLine = null;
function switchResolution(resolution) {
  var _t;
  let t = resolution;
  if ((_t = t) !== null && _t !== void 0 && _t.startsWith('s')) {
    t = t.slice(1);
  } else {
    t = t * 60;
  }
  return t;
}

// const supportSecChains = ['solana', 'bsc', 'eth', 'base', 'tron']

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KLineChart',
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {
      chart: null,
      candlestickSeries: null,
      smaLine1: null,
      smaLine2: null,
      smaLine3: null,
      smaData: {
        sma1Default: '',
        sma2Default: '',
        sma3Default: '',
        sma1Value: 'n/a',
        sma2Value: 'n/a',
        sma3Value: 'n/a'
      },
      resolution: localStorage.getItem('perp_resolution') || 'MINUTE_15',
      chartData: [],
      isLoading: true,
      Timer: null,
      langObj: {
        en: 'en-US',
        'zh-cn': 'zh-CN',
        'zh-tw': 'zh-TW'
      },
      timeObj: {
        1: 60000,
        5: 5 * 60000,
        10: 10 * 60000,
        30: 30 * 60000,
        60: 60 * 60000,
        240: 240 * 60000,
        720: 720 * 60000,
        '1D': 3600000 * 24,
        '1W': 3600000 * 24 * 30
      },
      toolTipValue: {
        time: '',
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        changeV: 0,
        changeP: 0,
        volume: 0,
        macd: 0,
        dif: 0,
        dea: 0,
        rsi: 0,
        k: 0,
        d: 0,
        j: 0
      },
      count: 0,
      Timer_kline: null,
      TimeRangeChange: null,
      activeStudy: 'MA',
      studyList: ['MA', 'EMA', 'BOLL'],
      activeStudyBottom: 'VOL',
      studyBottomList: ['VOL', 'MACD', 'KDJ', 'RSI'],
      showSwapKline: localStorage.showSwapKline ? JSON.parse(localStorage.showSwapKline) : true,
      buySellMarkers: [],
      mode: localStorage.getItem('switchMode') || 'price',
      migrated: null
    };
  },
  //   const obj: Record<string, string> = {
  //   '1': 'MINUTE_1',
  //   '5': 'MINUTE_5',
  //   '15': 'MINUTE_15',
  //   '30': 'MINUTE_30',
  //   '60': 'HOUR_1',
  //   '120': 'HOUR_2',
  //   '240': 'HOUR_4',
  //   '1D': 'DAY_1',
  //   '1W': 'WEEK_1',
  // }
  computed: {
    resolutionList() {
      return [{
        label: this.$t('1min'),
        value: 'MINUTE_1'
      }, {
        label: this.$t('5min'),
        value: 'MINUTE_5'
      }, {
        label: this.$t('15min'),
        value: 'MINUTE_15'
      },
      // { label: this.$t('30min'), value: 'MINUTE_30' },
      {
        label: this.$t('1h'),
        value: 'HOUR_1'
      },
      // { label: this.$t('2h'), value: 'HOUR_2' },
      {
        label: this.$t('4h'),
        value: 'HOUR_4'
      }, {
        label: this.$t('1d'),
        value: 'DAY_1'
      }, {
        label: this.$t('1w'),
        value: 'WEEK_1'
      }];
    },
    id() {
      return this.info.hlName || this.$route.params.id || '';
    },
    resolutionListUp() {
      return this.resolutionList.filter(i => i.value !== 'MINUTE_15' && i.value !== 'HOUR_2' && i.value !== 'WEEK_1') || [];
    },
    resolutionListDown() {
      return this.resolutionList.filter(i => i.value === 'MINUTE_15' || i.value === 'HOUR_2' || i.value === 'WEEK_1') || [];
    },
    klineParams() {
      return this.$store.state.wsKlineParams;
    },
    chain() {
      return this.$store.state.id ? (_utils_constants_js__WEBPACK_IMPORTED_MODULE_6__["MAIN_COIN"][this.$store.state.id] || this.$store.state.id).split('-')[1] : '';
    },
    tokenInfo() {
      return this.$store.state.tokenInfo;
    },
    circulation() {
      var _this$tokenInfo, _this$tokenInfo2, _this$tokenInfo3, _this$tokenInfo4;
      let circulation = new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.total).minus((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.lock_amount_dec).minus((_this$tokenInfo3 = this.tokenInfo) === null || _this$tokenInfo3 === void 0 ? void 0 : _this$tokenInfo3.other_amount_dec).minus((_this$tokenInfo4 = this.tokenInfo) === null || _this$tokenInfo4 === void 0 ? void 0 : _this$tokenInfo4.burn_amount_dec);
      return circulation.lt(0) ? 0 : circulation;
    },
    wsKlineData() {
      return this.$store.state.perpWs.wsResult[_store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__["WSPerpEventType"].KLINE];
    }
  },
  watch: {
    id(val, oldVal) {
      if (!val) return;
      if (oldVal) {
        this.unsubscribeKline(oldVal, this.resolution);
      }
      this.resetChartState();
      this.count = 0;
      this.getHistory();
    },
    resolution(val, oldVal) {
      if (oldVal) {
        this.unsubscribeKline(this.id, oldVal);
      }
      this.resetChartState();
      this.count = 0;
      localStorage.setItem('perp_resolution', val);
      this.getHistory();
    },
    resolutionList(val) {
      if (val.length > 0 && !val.some(i => i.value === this.resolution)) {
        this.resolution = '60';
      }
    },
    '$store.getters.language'(val) {
      if (chart) {
        chart.applyOptions({
          localization: {
            locale: this.langObj[val]
          }
        });
      }
    },
    wsKlineData(val) {
      // 周线实际监听的是底层 DAY_1 频道，收到日线推送后在客户端聚合成周线
      const subResolution = this.resolution === WEEKLY_RESOLUTION ? 'DAY_1' : this.resolution;
      const channel = `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__["WSPerpEventType"].KLINE}.${this.id}.${subResolution}`;
      if (val.channel === channel) {
        const data = val.data;
        const dataType = val.dataType;
        if ((data === null || data === void 0 ? void 0 : data.length) > 0 && !this.isLoading && (dataType === 'Snapshot' || dataType === 'changed')) {
          var _this$chartData, _this$chartData2;
          let bars = data.map(i => ({
            time: Number(i.klineTime),
            open: Number(i.open),
            high: Number(i.high),
            low: Number(i.low),
            close: Number(i.close),
            value: Number(i.value || 0),
            color: Number(i.open) <= Number(i.close) ? this.$store.getters.upColor[0] : this.$store.getters.downColor[0]
          }));
          if (this.resolution === WEEKLY_RESOLUTION) {
            bars = aggregateDailyToWeekly(bars, this.$store.getters.upColor[0], this.$store.getters.downColor[0]);
          }
          let i = bars[0];
          let last = ((_this$chartData = this.chartData) === null || _this$chartData === void 0 ? void 0 : _this$chartData[(((_this$chartData2 = this.chartData) === null || _this$chartData2 === void 0 ? void 0 : _this$chartData2.length) || 0) - 1]) || {};
          i = this.$f.formatKlineLast(i, last);
          let lastTime = (last === null || last === void 0 ? void 0 : last.time) || 0;
          if (this.chartData.length === 0 || i.time > lastTime) {
            this.chartData.push(i);
          } else if (this.chartData.length > 0 && lastTime === i.time) {
            this.chartData.pop();
            this.chartData.push(i);
          } else if (this.chartData.length > 0 && lastTime < i.time) {
            for (let j = 1; j <= 5; j++) {
              let p = this.chartData[this.chartData.length - j];
              if (p.time === i.time && p.value <= i.value) {
                this.chartData[this.chartData.length - j] = i;
              }
            }
          } else {
            console.log('exclude', i);
          }
          this.setData();
        }
      }
    },
    activeStudy(val) {
      if (val) {
        this.setData();
      }
    },
    activeStudyBottom(val) {
      if (val) {
        this.switchRightStudy(val);
      }
    }
  },
  mounted() {
    this.initChart();
    this.bindVisibility();
  },
  beforeUnmount() {
    this.unsubscribeKline();
    document.onvisibilitychange = null;
  },
  beforeRouteLeave() {
    document.onvisibilitychange = null;
  },
  methods: {
    resetChartState() {
      this.chartData = [];
      this.isLoading = true;
      maxMinMarkers = [];
      if (candlestickSeries) {
        candlestickSeries.setData([]);
        candlestickSeries.setMarkers([]);
      }
      if (volumeSeries) volumeSeries.setData([]);
      if (smaLine1) smaLine1.setData([]);
      if (smaLine2) smaLine2.setData([]);
      if (smaLine3) smaLine3.setData([]);
      if (macdBar) macdBar.setData([]);
      if (macdDiFLine) macdDiFLine.setData([]);
      if (macdDeaLine) macdDeaLine.setData([]);
      if (rsiLine) rsiLine.setData([]);
      if (kdjKLine) kdjKLine.setData([]);
      if (kdjDLine) kdjDLine.setData([]);
      if (kdjJLine) kdjJLine.setData([]);
      this.smaData = {
        sma1Default: '',
        sma2Default: '',
        sma3Default: '',
        sma1Value: 'n/a',
        sma2Value: 'n/a',
        sma3Value: 'n/a'
      };
      this.toolTipValue = {
        time: '',
        open: 0,
        high: 0,
        low: 0,
        close: 0,
        changeV: 0,
        changeP: 0,
        volume: 0,
        macd: 0,
        dif: 0,
        dea: 0,
        rsi: 0,
        k: 0,
        d: 0,
        j: 0
      };
      const toolTip = document.querySelector('.kline-tooltip');
      if (toolTip) {
        toolTip.style.display = 'none';
      }
    },
    unsubscribeKline(contractId = this.id, resolution = this.resolution) {
      if (!contractId || !resolution) return;
      // 周线实际订阅的是日线频道，取消时也要用 DAY_1
      const subResolution = resolution === WEEKLY_RESOLUTION ? 'DAY_1' : resolution;
      this.$store.dispatch('hlWsSend', {
        type: 'unsubscribe',
        channel: `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__["WSPerpEventType"].KLINE}.${contractId}.${subResolution}`
      });
    },
    switchMode() {
      var _this$chart;
      localStorage.setItem('switchMode', this.mode);
      (_this$chart = this.chart) === null || _this$chart === void 0 || _this$chart.remove(); // 销毁重建
      this.count = 0;
      this.initChart();
      // this.initTradingView()
    },
    initTradingView() {
      this.count = 0;
      this.getHistory();
    },
    handleFlattenChange(val) {
      localStorage.showSwapKline = JSON.stringify(val);
      this.setMarkersData();
    },
    isBuy(row) {
      if (row.from_address && row.from_address === this.tokenAddress) {
        return false;
      }
      if (row.to_address && row.to_address === this.tokenAddress) {
        return true;
      }
      let m = row.amount0In > 0 ? row.token0Address : row.token1Address;
      return m !== this.tokenAddress;
    },
    bindVisibility() {
      document.onvisibilitychange = () => {
        if (document.visibilityState === 'visible') {
          if (this.$route.name == 'Token' || this.$route.name == 'Brc') {
            this.count = 0;
            this.getHistory();
          }
        }
      };
      // document.addEventListener('visibilitychange', () => {
      //   // 用户离开了当前页面
      //   // if (document.visibilityState === 'hidden') {
      //   //
      //   // }
      //   // 用户打开或回到页面
      //   if (document.visibilityState === 'visible') {
      //     if(this.$route.name == 'Token' || this.$route.name == 'Brc'){
      //       this.count = 0
      //       this.tradingView()
      //     }
      //   }
      // })
    },
    initChart() {
      if (!document.querySelector('.k-line-chart-perp')) {
        return;
      }
      console.log('initChart');
      chart = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_8__["createChart"])(document.querySelector('.k-line-chart-perp'), {
        localization: {
          dateFormat: 'yyyy/MM/dd',
          locale: this.langObj[this.$store.getters.language]
        },
        timeScale: {
          rightOffset: 0,
          timeVisible: true,
          secondsVisible: false
        },
        rightPriceScale: {
          alignLabels: false,
          lastValueVisible: true,
          scaleMargins: {
            top: 0.2,
            bottom: 0.25
          },
          visible: true
        },
        overlayPriceScales: {
          scaleMargins: {
            top: 0.75,
            bottom: 0
          },
          visible: true,
          alignLabels: false,
          lastValueVisible: true
        },
        layout: {
          backgroundColor: '#1D223D',
          textColor: '#d1d4dc'
        },
        grid: {
          horzLines: {
            color: '#31354E',
            visible: true
          },
          vertLines: {
            color: '#31354E',
            visible: true
          }
        },
        handleScroll: {
          // 禁止触摸屏垂直方向滚动
          vertTouchDrag: false
        },
        handleScale: {
          axisPressedMouseMove: false
        }
      });

      // this.chart = chart
      candlestickSeries = chart.addCandlestickSeries({
        scaleMargins: {
          top: 0.2,
          bottom: 0.3
        },
        upColor: this.$store.getters.upColor[4],
        downColor: this.$store.getters.downColor[4],
        borderUpColor: this.$store.getters.upColor[4],
        borderDownColor: this.$store.getters.downColor[4],
        wickUpColor: this.$store.getters.upColor[4],
        wickDownColor: this.$store.getters.downColor[4],
        priceScaleId: 'right',
        lastValueVisible: true
      });
      volumeSeries = chart.addHistogramSeries({
        priceFormat: {
          type: 'volume'
        },
        priceScaleId: '1',
        // overlay: true,
        scaleMargins: {
          top: 0.8,
          bottom: 0
        },
        priceLineVisible: false,
        lastValueVisible: false
      });
      smaLine1 = chart.addLineSeries({
        color: '#f7d01a',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: 'right'
      });
      smaLine2 = chart.addLineSeries({
        color: '#30e0a1',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: 'right'
      });
      smaLine3 = chart.addLineSeries({
        color: '#e472f5',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: 'right'
      });
      macdBar = chart.addHistogramSeries({
        priceFormat: {
          type: 'volume'
        },
        priceScaleId: '1',
        // overlay: true,
        scaleMargins: {
          top: 0.9,
          bottom: 0
        },
        priceLineVisible: false,
        lastValueVisible: false,
        visible: false
      });
      macdDiFLine = chart.addLineSeries({
        color: '#30e0a1',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      macdDeaLine = chart.addLineSeries({
        color: '#e472f5',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      rsiLine = chart.addLineSeries({
        color: '#f7d01a',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      kdjKLine = chart.addLineSeries({
        color: '#f7d01a',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      kdjDLine = chart.addLineSeries({
        color: '#30e0a1',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      kdjJLine = chart.addLineSeries({
        color: '#e472f5',
        lineWidth: 0.5,
        priceLineVisible: false,
        lastValueVisible: false,
        priceScaleId: '1',
        visible: false
      });
      this.updateTooltip(candlestickSeries, volumeSeries, smaLine1, smaLine2, smaLine3);
      this.getHistory();
      chart.timeScale().unsubscribeVisibleTimeRangeChange(this.subscribeVisibleTimeRangeChange);
      chart.timeScale().subscribeVisibleTimeRangeChange(this.subscribeVisibleTimeRangeChange);
    },
    subscribeVisibleTimeRangeChange(range) {
      if (this.TimeRangeChange) {
        clearTimeout(this.TimeRangeChange);
      }
      this.TimeRangeChange = setTimeout(() => {
        let newData = this.chartData.map(i => ({
          ...i,
          time: this.$f.timeToLocal(i.time)
        }));
        let rangeData = newData.filter(i => i.time >= range.from && i.time <= range.to);
        let min = rangeData[0];
        let max = rangeData[0];
        rangeData.forEach(i => {
          if (i.high > (max.high || 0)) {
            max = i;
          }
          if (i.low < (min.low || 0)) {
            min = i;
          }
        });
        if ((rangeData === null || rangeData === void 0 ? void 0 : rangeData.length) > 0) {
          let markers = [{
            time: min.time,
            position: 'belowBar',
            shape: 'arrowUp',
            text: this.$f.formatNumber2(min.low, 4),
            color: this.$store.getters.downColor[1]
          }, {
            time: max.time,
            position: 'aboveBar',
            shape: 'arrowDown',
            text: this.$f.formatNumber2(max.high, 4),
            color: this.$store.getters.upColor[1]
          }];
          maxMinMarkers = markers;
          // let markers1 = markers.concat(buySellMarkers)
          // if (candlestickSeries) {
          //   candlestickSeries.setMarkers(markers1)
          // }
          this.setMarkersData(range);
        }
      }, 200);
    },
    setMarkersData() {
      if (candlestickSeries && maxMinMarkers.length > 0) {
        candlestickSeries.setMarkers(maxMinMarkers);
      }
    },
    updateTooltip(candlestickSeries, volumeSeries, smaLine1, smaLine2, smaLine3) {
      function businessDayToString(businessDay) {
        return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
      }
      let container = document.querySelector('.k-line-chart-perp');
      chart.subscribeCrosshairMove(param => {
        var _this$resolution;
        if (!container) {
          return;
        }
        let width = container.offsetWidth;
        let height = container.offsetHeight;
        let toolTip = document.querySelector('.kline-tooltip');
        if (!toolTip) {
          return;
        }
        let toolTipWidth = (toolTip === null || toolTip === void 0 ? void 0 : toolTip.offsetWidth) || 142;
        // let toolTipHeight = toolTip.offsetHeight || 182
        let toolTipMargin = 10;
        if (!param.time || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
          toolTip.style.display = 'none';
          this.smaData.sma1Value = this.smaData.sma1Default;
          this.smaData.sma2Value = this.smaData.sma2Default;
          this.smaData.sma3Value = this.smaData.sma3Default;
          this.setDefaultToolTipValue();
          return;
        }
        let dateType = (_this$resolution = this.resolution) !== null && _this$resolution !== void 0 && _this$resolution.startsWith('s') ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
        let dateStr = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_8__["isBusinessDay"])(param.time) ? businessDayToString(param.time) : this.$f.formatDateUTC(param.time, dateType);
        toolTip.style.display = 'block';
        let priceObj = param.seriesPrices.get(candlestickSeries) || {};
        let volume = param.seriesPrices.get(volumeSeries) || 0;
        let open = (priceObj === null || priceObj === void 0 ? void 0 : priceObj.open) || 0;
        let high = (priceObj === null || priceObj === void 0 ? void 0 : priceObj.high) || 0;
        let low = (priceObj === null || priceObj === void 0 ? void 0 : priceObj.low) || 0;
        let close = (priceObj === null || priceObj === void 0 ? void 0 : priceObj.close) || 0;
        let changeV = close - open;
        let changeP = open === 0 ? 0 : (close - open) * 100 / open || 0;
        let macd = param.seriesPrices.get(macdBar) || 0;
        let dif = param.seriesPrices.get(macdDiFLine) || 0;
        let dea = param.seriesPrices.get(macdDeaLine) || 0;
        let rsi = param.seriesPrices.get(rsiLine) || 0;
        let k = param.seriesPrices.get(kdjKLine) || 0;
        let d = param.seriesPrices.get(kdjDLine) || 0;
        let j = param.seriesPrices.get(kdjJLine) || 0;
        let a = new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(high).minus(low).div(open).multipliedBy(100);
        this.toolTipValue = {
          time: dateStr,
          open: open,
          high: high,
          low: low,
          close: close,
          changeV: changeV,
          changeP: changeP,
          volume: volume,
          macd,
          dif,
          dea,
          rsi,
          k,
          d,
          j,
          a: a,
          timestamp: param.time
        };

        // let y = param.point.y

        // let left = param.point.x + toolTipMargin
        // if (left > width - toolTipWidth) {
        //   left = param.point.x - toolTipMargin - toolTipWidth
        // }

        // let top = y + toolTipMargin
        // if (top > height - toolTipHeight) {
        //   top = y - toolTipHeight - toolTipMargin
        // }
        let left = toolTipMargin;
        if (param.point.x < width / 2) {
          left = width - toolTipMargin - toolTipWidth;
        }

        // let top = 40

        toolTip.style.left = left + 'px';
        // toolTip.style.top = top + 'px'

        let ma1 = param.seriesPrices.get(smaLine1);
        let ma2 = param.seriesPrices.get(smaLine2);
        let ma3 = param.seriesPrices.get(smaLine3);
        this.smaData.sma1Value = ma1 !== null && ma1 !== void 0 ? ma1 : this.smaData.sma1Default || 'n/a';
        this.smaData.sma2Value = ma2 !== null && ma2 !== void 0 ? ma2 : this.smaData.sma2Default || 'n/a';
        this.smaData.sma3Value = ma3 !== null && ma3 !== void 0 ? ma3 : this.smaData.sma3Default || 'n/a';
      });
    },
    setDefaultToolTipValue() {
      var _this$chartData3, _this$resolution2, _lastMacdData$histogr, _lastMacdData$MACD, _lastMacdData$signal, _lastRsiData$value, _lastKDJData$k, _lastKDJData$d, _lastKDJData$j;
      if (!((_this$chartData3 = this.chartData) !== null && _this$chartData3 !== void 0 && _this$chartData3.length)) {
        return;
      }
      let last = this.chartData[this.chartData.length - 1];
      let dateType = (_this$resolution2 = this.resolution) !== null && _this$resolution2 !== void 0 && _this$resolution2.startsWith('s') ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
      let dateStr = this.$f.formatDateUTC(last.time, dateType);
      let open = (last === null || last === void 0 ? void 0 : last.open) || 0;
      let close = (last === null || last === void 0 ? void 0 : last.close) || 0;
      let changeV = close - open;
      let changeP = open === 0 ? 0 : (close - open) * 100 / open || 0;
      let macdData = this.calculateMacd(this.chartData.slice());
      let lastMacdData = (macdData === null || macdData === void 0 ? void 0 : macdData[macdData.length - 1]) || {};
      let rsiData = this.calculateRSI(this.chartData.slice());
      let lastRsiData = (rsiData === null || rsiData === void 0 ? void 0 : rsiData[rsiData.length - 1]) || {};
      let kdjData = this.calculateKDJ(this.chartData.slice());
      let lastKDJData = (kdjData === null || kdjData === void 0 ? void 0 : kdjData[kdjData.length - 1]) || {};
      this.toolTipValue = {
        time: dateStr,
        open: open,
        high: (last === null || last === void 0 ? void 0 : last.high) || 0,
        low: (last === null || last === void 0 ? void 0 : last.low) || 0,
        close: close,
        changeV: changeV,
        changeP: changeP,
        volume: (last === null || last === void 0 ? void 0 : last.value) || 0,
        macd: (_lastMacdData$histogr = lastMacdData.histogram) !== null && _lastMacdData$histogr !== void 0 ? _lastMacdData$histogr : 0,
        dif: (_lastMacdData$MACD = lastMacdData.MACD) !== null && _lastMacdData$MACD !== void 0 ? _lastMacdData$MACD : 0,
        dea: (_lastMacdData$signal = lastMacdData.signal) !== null && _lastMacdData$signal !== void 0 ? _lastMacdData$signal : 0,
        rsi: (_lastRsiData$value = lastRsiData.value) !== null && _lastRsiData$value !== void 0 ? _lastRsiData$value : 0,
        k: (_lastKDJData$k = lastKDJData.k) !== null && _lastKDJData$k !== void 0 ? _lastKDJData$k : 0,
        d: (_lastKDJData$d = lastKDJData.d) !== null && _lastKDJData$d !== void 0 ? _lastKDJData$d : 0,
        j: (_lastKDJData$j = lastKDJData.j) !== null && _lastKDJData$j !== void 0 ? _lastKDJData$j : 0
      };
    },
    shouldUseDefaultToolTipValue() {
      const toolTip = document.querySelector('.kline-tooltip');
      return !toolTip || window.getComputedStyle(toolTip).display === 'none';
    },
    getHistory() {
      if (this.info.hlName) {
        let size = 1000000;
        const o = {
          MINUTE_1: size * 60,
          MINUTE_5: size * 5 * 60,
          MINUTE_15: size * 15 * 60,
          MINUTE_30: size * 30 * 60,
          HOUR_1: size * 60 * 60,
          HOUR_2: size * 120 * 60,
          HOUR_4: size * 240 * 60,
          HOUR_12: size * 720 * 60,
          DAY_1: size * 24 * 60 * 60,
          WEEK_1: size * 30 * 24 * 60 * 60
        };
        // let params = {
        //   symbol: address,
        //   resolution: this.resolution,
        //   from: parseInt(Date.now() / 1000 - o[this.resolution]),
        //   to: parseInt(Date.now() / 1000)
        // }
        // 周线不再请求服务端 1w，改为拉取日线在客户端聚合成周线
        const isWeekly = this.resolution === WEEKLY_RESOLUTION;
        const klineType = isWeekly ? 'DAY_1' : this.resolution;
        const params = {
          priceType: 'LAST_PRICE',
          klineType,
          contractId: this.info.hlName,
          // 周线实际拉取的是日线，时间窗口要按底层 klineType(DAY_1) 计算，
          // 否则用 WEEK_1 的窗口会超出当前时间导致 startTime 为负
          filterBeginKlineTimeInclusive: parseInt(Date.now() - o[klineType]),
          filterEndKlineTimeExclusive: Date.now()
        };
        if (this.count === 0) {
          this.isLoading = true;
          this.count++;
          Object(_api_hyperliquid__WEBPACK_IMPORTED_MODULE_7__["_getPerpKline"])(params).then(res => {
            var _res$, _map;
            const currentContractId = `${this.info.hlName || ''}`;
            const responseContractId = `${Array.isArray(res) && (_res$ = res[0]) !== null && _res$ !== void 0 && _res$.contractId ? res[0].contractId : ''}`;
            if (responseContractId && responseContractId !== currentContractId) {
              return;
            }
            let list = ((_map = (Array.isArray(res) ? res : []).map(i => {
              return {
                ...i,
                time: Number(i.klineTime),
                open: Number(i.open),
                high: Number(i.high),
                low: Number(i.low),
                close: Number(i.close),
                value: Number(i.value),
                color: Number(i.open) <= Number(i.close) ? this.$store.getters.upColor[0] : this.$store.getters.downColor[0]
              };
            })) === null || _map === void 0 ? void 0 : _map.sort((a, b) => a.time - b.time)) || [];
            if (isWeekly) {
              list = aggregateDailyToWeekly(list, this.$store.getters.upColor[0], this.$store.getters.downColor[0]);
            }
            this.chartData = list;
            this.setData();
            if (Array.isArray(this.chartData) && this.chartData[this.chartData.length - 1]) {
              const {
                precision,
                minMove
              } = this.$f.formatDecimals(this.chartData[this.chartData.length - 1].low);
              candlestickSeries.applyOptions({
                priceFormat: {
                  type: 'custom',
                  formatter: price => {
                    return this.$f.formatNumber2(price, 4);
                  },
                  minMove: minMove
                }
              });
            }
            chart.timeScale().resetTimeScale();
            chart.timeScale().scrollToRealTime();
            this.dispatchKline();
            this.setDefaultToolTipValue();
          }).finally(() => {
            console.log('finally');
            this.isLoading = false;
          });
        }
      }
    },
    setData(chartData = this.chartData) {
      if (Array.isArray(chartData)) {
        var _data$map, _newData, _a$len$value, _a$len, _b$value, _b, _c$value, _c;
        // let data = completeKlineData(chartData, this.resolution)
        let data = chartData;
        if (Array.isArray(chartData) && chartData[chartData.length - 1]) {
          const {
            precision,
            minMove
          } = this.$f.formatDecimals(chartData[chartData.length - 1].low);
          candlestickSeries.applyOptions({
            // priceFormat: {
            //   type: 'price',
            //   precision: precision,
            //   minMove: minMove
            // }
            priceFormat: {
              type: 'custom',
              formatter: price => {
                return this.$f.formatNumber2(price, 4);
              },
              minMove: minMove
            }
          });
        }
        // this.$store.commit('setTokenInfoPriceChange', getPriceChangeToday(data))
        // this.$store.commit('setTokenVolume24hUSD', getVolumeToday(data))
        let newData = (_data$map = data.map(i => ({
          ...i,
          time: this.$f.timeToLocal(i.time)
        }))) === null || _data$map === void 0 ? void 0 : _data$map.filter(i => i.time);
        volumeSeries.setData(newData.map(i => ({
          time: i.time,
          value: i.value,
          color: i.color
        })));
        candlestickSeries.setData(newData.map(i => ({
          time: i.time,
          open: i.open,
          high: i.high,
          low: i.low,
          close: i.close
        })));
        let studyFucObj = {
          MA: this.calculateMA,
          EMA: this.calculateEMA,
          BOLL: this.calculateBoll
        };
        let studyFuc = studyFucObj[this.activeStudy] || this.calculateMA;
        let a = [];
        let b = [];
        let c = [];
        if (this.activeStudy === 'BOLL') {
          let arr = studyFuc(newData);
          a = arr.map(i => ({
            time: i.time,
            value: i.value.middle
          }));
          b = arr.map(i => ({
            time: i.time,
            value: i.value.upper
          }));
          c = arr.map(i => ({
            time: i.time,
            value: i.value.lower
          }));
        } else {
          a = studyFuc(newData, 5);
          b = studyFuc(newData, 10);
          c = studyFuc(newData, 20);
        }
        smaLine1.setData(a);
        smaLine2.setData(b);
        smaLine3.setData(c);
        let len = a.length - 1;
        const lastClose = Number((newData === null || newData === void 0 || (_newData = newData[newData.length - 1]) === null || _newData === void 0 ? void 0 : _newData.close) || 0);
        let aV = (_a$len$value = (_a$len = a[len]) === null || _a$len === void 0 ? void 0 : _a$len.value) !== null && _a$len$value !== void 0 ? _a$len$value : lastClose;
        let bV = (_b$value = (_b = b[b.length - 1]) === null || _b === void 0 ? void 0 : _b.value) !== null && _b$value !== void 0 ? _b$value : lastClose;
        let cV = (_c$value = (_c = c[c.length - 1]) === null || _c === void 0 ? void 0 : _c.value) !== null && _c$value !== void 0 ? _c$value : lastClose;
        this.smaData = {
          sma1Default: aV,
          sma2Default: bV,
          sma3Default: cV,
          sma1Value: aV,
          sma2Value: bV,
          sma3Value: cV
        };
        this.setMacdData(newData);
        this.setRsiData(newData);
        this.setKDJData(newData);
        if (this.shouldUseDefaultToolTipValue()) {
          this.setDefaultToolTipValue();
        }
      }
    },
    setMacdData(data) {
      let macdData = this.calculateMacd(data);
      macdBar.setData(macdData.map(i => {
        var _i$histogram;
        return {
          time: i.time,
          value: (_i$histogram = i.histogram) !== null && _i$histogram !== void 0 ? _i$histogram : 0,
          color: i.histogram >= 0 ? this.$store.getters.upColor[1] : this.$store.getters.downColor[1]
        };
      }));
      macdDiFLine.setData(macdData.map(i => {
        var _i$MACD;
        return {
          time: i.time,
          value: (_i$MACD = i.MACD) !== null && _i$MACD !== void 0 ? _i$MACD : 0
        };
      }));
      macdDeaLine.setData(macdData.map(i => {
        var _i$signal;
        return {
          time: i.time,
          value: (_i$signal = i.signal) !== null && _i$signal !== void 0 ? _i$signal : 0
        };
      }));
    },
    setRsiData(data) {
      let rsiData = this.calculateRSI(data);
      rsiLine.setData(rsiData);
    },
    setKDJData(data) {
      let kdjData = this.calculateKDJ(data);
      kdjKLine.setData(kdjData.map(i => {
        var _i$k;
        return {
          time: i.time,
          value: (_i$k = i.k) !== null && _i$k !== void 0 ? _i$k : 0
        };
      }));
      kdjDLine.setData(kdjData.map(i => {
        var _i$d;
        return {
          time: i.time,
          value: (_i$d = i.d) !== null && _i$d !== void 0 ? _i$d : 0
        };
      }));
      kdjJLine.setData(kdjData.map(i => {
        var _i$j;
        return {
          time: i.time,
          value: (_i$j = i.j) !== null && _i$j !== void 0 ? _i$j : 0
        };
      }));
    },
    switchRightStudy(name) {
      if (name === 'VOL') {
        this.switchRightStudyVisible('VOL', true);
        this.switchRightStudyVisible('MACD', false);
        this.switchRightStudyVisible('RSI', false);
        this.switchRightStudyVisible('KDJ', false);
      } else if (name === 'MACD') {
        this.switchRightStudyVisible('VOL', false);
        this.switchRightStudyVisible('MACD', true);
        this.switchRightStudyVisible('RSI', false);
        this.switchRightStudyVisible('KDJ', false);
      } else if (name === 'RSI') {
        this.switchRightStudyVisible('VOL', false);
        this.switchRightStudyVisible('MACD', false);
        this.switchRightStudyVisible('RSI', true);
        this.switchRightStudyVisible('KDJ', false);
      } else if (name === 'KDJ') {
        this.switchRightStudyVisible('VOL', false);
        this.switchRightStudyVisible('MACD', false);
        this.switchRightStudyVisible('RSI', false);
        this.switchRightStudyVisible('KDJ', true);
      }
    },
    switchRightStudyVisible(name, visible = true) {
      if (name === 'VOL') {
        volumeSeries.applyOptions({
          visible: visible
        });
      } else if (name == 'MACD') {
        macdBar.applyOptions({
          visible: visible
        });
        macdDiFLine.applyOptions({
          visible: visible
        });
        macdDeaLine.applyOptions({
          visible: visible
        });
      } else if (name === 'RSI') {
        rsiLine.applyOptions({
          visible: visible
        });
      } else if (name === 'KDJ') {
        kdjKLine.applyOptions({
          visible: visible
        });
        kdjDLine.applyOptions({
          visible: visible
        });
        kdjJLine.applyOptions({
          visible: visible
        });
      }
    },
    calculateMA(data, count) {
      let avg = function (data) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          sum += data[i].close;
        }
        return sum / data.length;
      };
      let result = [];
      for (let i = count - 1, len = data.length; i < len; i++) {
        let val = avg(data.slice(i - count + 1, i));
        result.push({
          time: data[i].time,
          value: val
        });
      }
      return result;
    },
    calculateEMA(data, count) {
      var _data$map2;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_10__["ema"])({
        values: (data === null || data === void 0 || (_data$map2 = data.map) === null || _data$map2 === void 0 ? void 0 : _data$map2.call(data, i => Number(i.close))) || [],
        period: count
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateBoll(data, period = 20, stdDev = 2) {
      var _data$map3;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_10__["bollingerbands"])({
        values: (data === null || data === void 0 || (_data$map3 = data.map) === null || _data$map3 === void 0 ? void 0 : _data$map3.call(data, i => Number(i.close))) || [],
        period: period,
        stdDev: stdDev
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateMacd(data) {
      var _data$map4;
      let data1 = Object(finmath__WEBPACK_IMPORTED_MODULE_11__["macd"])((data === null || data === void 0 || (_data$map4 = data.map) === null || _data$map4 === void 0 ? void 0 : _data$map4.call(data, i => Number(i.close))) || []);
      return data.map((i, k, a) => {
        var _data1$MACD$k, _data1$MACD, _data1$signal$k, _data1$signal, _data1$histogram$k, _data1$histogram;
        return {
          time: i.time,
          MACD: (_data1$MACD$k = data1 === null || data1 === void 0 || (_data1$MACD = data1.MACD) === null || _data1$MACD === void 0 ? void 0 : _data1$MACD[k]) !== null && _data1$MACD$k !== void 0 ? _data1$MACD$k : 0,
          signal: (_data1$signal$k = data1 === null || data1 === void 0 || (_data1$signal = data1.signal) === null || _data1$signal === void 0 ? void 0 : _data1$signal[k]) !== null && _data1$signal$k !== void 0 ? _data1$signal$k : 0,
          histogram: (_data1$histogram$k = data1 === null || data1 === void 0 || (_data1$histogram = data1.histogram) === null || _data1$histogram === void 0 ? void 0 : _data1$histogram[k]) !== null && _data1$histogram$k !== void 0 ? _data1$histogram$k : 0
        };
      });
    },
    calculateRSI(data, period = 14) {
      var _data$map5;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_10__["rsi"])({
        values: (data === null || data === void 0 || (_data$map5 = data.map) === null || _data$map5 === void 0 ? void 0 : _data$map5.call(data, i => Number(i.close))) || [],
        period: period
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateKDJ(data, period = 9, signalPeriod = 3) {
      var _data$map6, _data$map7, _data$map8;
      let high = (data === null || data === void 0 || (_data$map6 = data.map) === null || _data$map6 === void 0 ? void 0 : _data$map6.call(data, i => Number(i.close))) || [];
      let low = (data === null || data === void 0 || (_data$map7 = data.map) === null || _data$map7 === void 0 ? void 0 : _data$map7.call(data, i => Number(i.low))) || [];
      let close = (data === null || data === void 0 || (_data$map8 = data.map) === null || _data$map8 === void 0 ? void 0 : _data$map8.call(data, i => Number(i.low))) || [];
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_10__["stochastic"])({
        high,
        low,
        close,
        period: period,
        signalPeriod: signalPeriod
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        ...i,
        j: 3 * (i.k || 0) - 2 * (i.d || 0)
      }));
    },
    dispatchKline() {
      // 周线实际订阅的是日线频道（客户端聚合成周线）
      const subResolution = this.resolution === WEEKLY_RESOLUTION ? 'DAY_1' : this.resolution;
      console.log('dispatchKline', `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__["WSPerpEventType"].KLINE}.${this.id}.${subResolution}`);
      this.$store.dispatch('hlWsSend', {
        type: 'subscribe',
        channel: `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_13__["WSPerpEventType"].KLINE}.${this.id}.${subResolution}`
      });
      // if (
      //   this.$store.state.ws.socket &&
      //   this.$store.state.ws.isConnected &&
      //   Number(resolution) && this.$store.state.pair.address
      // ) {
      //   let t = this.resolution
      //   if (this.resolution?.startsWith('s')) {
      //     t = this.resolution
      //   } else {
      //     t = `k${this.resolution}`
      //   }
      //   let data = {
      //     jsonrpc: '2.0',
      //     method: 'subscribe',
      //     params: ['kline', this.$store.state.pair.address, t, this.$store.state.pair.chain],
      //     id: 1
      //   }
      //   // this.klineParams = data.params
      //   this.$store.commit('setState', {name: 'wsKlineParams', value: data.params })
      //   this.$store.commit('wsSend', data)
      // } else {
      //   this.Timer_kline = setTimeout(() => {
      //     this.dispatchKline()
      //   }, 500)
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/perpInfo.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_perp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/perp */ "./src/utils/perp.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PerpInfo',
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    countDownTime() {
      var _this$info;
      return (Number((_this$info = this.info) === null || _this$info === void 0 ? void 0 : _this$info.nextFundingTime) || 0) - Date.now();
    },
    precision() {
      var _this$info2;
      return Object(_utils_perp__WEBPACK_IMPORTED_MODULE_0__["calcPrecision"])((_this$info2 = this.info) === null || _this$info2 === void 0 ? void 0 : _this$info2.tickSize);
    },
    // HL openInterest 为币数量，展示用名义价值（OI × markPx），与 App 一致
    openInterestUsd() {
      var _this$info3, _this$info4, _this$info5;
      const oi = Number(((_this$info3 = this.info) === null || _this$info3 === void 0 ? void 0 : _this$info3.openInterest) || 0);
      const px = Number(((_this$info4 = this.info) === null || _this$info4 === void 0 ? void 0 : _this$info4.markPx) || ((_this$info5 = this.info) === null || _this$info5 === void 0 ? void 0 : _this$info5.lastPrice) || 0);
      return oi * px;
    }
  },
  watch: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");
/* harmony import */ var _orders_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue */ "./src/views/perp/tabs/orders.vue");
/* harmony import */ var _recentTrades_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recentTrades.vue */ "./src/views/perp/tabs/recentTrades.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TokenTabs',
  components: {
    Orders: _orders_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RecentTrades: _recentTrades_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup() {
    const active = Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_0__["useStorage"])('klineActive_perp', 'order', sessionStorage);
    return {
      active
    };
  },
  data() {
    return {};
  },
  computed: {
    list() {
      return [{
        name: this.$t('orders'),
        id: 'order'
      }, {
        name: this.$t('recentlyTrade'),
        id: 'tx'
      }];
    }
  },
  watch: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/orders.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_perpWs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/perpWs.js */ "./src/store/perpWs.js");
/* harmony import */ var _utils_perp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/perp */ "./src/utils/perp.js");










// 切到其它 tab 时延迟取消订单薄订阅，避免快速来回切换导致频繁 订阅/取消
const INACTIVE_UNSUBSCRIBE_DELAY = 5000;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PerpOrders',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showStepPop: false,
      inactiveTimer: null,
      hasSubscribedOnce: false,
      // 当前 l2 订阅对象（含 s/m），退订必须用同一份，不能只按 coin
      l2BookSub: null
    };
  },
  computed: {
    perp() {
      var _this$$store$state$pe;
      return ((_this$$store$state$pe = this.$store.state.perp) === null || _this$$store$state$pe === void 0 ? void 0 : _this$$store$state$pe.perp) || {};
    },
    level() {
      var _this$$store$state$pe2;
      return ((_this$$store$state$pe2 = this.$store.state.perp) === null || _this$$store$state$pe2 === void 0 ? void 0 : _this$$store$state$pe2.level) || 200;
    },
    step() {
      var _this$$store$state$pe3;
      return ((_this$$store$state$pe3 = this.$store.state.perp) === null || _this$$store$state$pe3 === void 0 ? void 0 : _this$$store$state$pe3.step) || '0';
    },
    stepSizeList() {
      // 参照 ave_web：优先用 displayDigitMerge，否则按 markPx 动态生成约 6 档
      return Object(_utils_perp__WEBPACK_IMPORTED_MODULE_8__["buildHlOrderBookStepSizes"])(this.perp).map(val => ({
        name: val,
        value: val
      }));
    },
    formattedDepthData() {
      return this.$store.getters.formattedDepthData || {
        buyList: [],
        sellList: []
      };
    },
    buyList() {
      return [...(this.formattedDepthData.buyList || [])].sort((a, b) => new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a((b === null || b === void 0 ? void 0 : b.price) || 0).comparedTo((a === null || a === void 0 ? void 0 : a.price) || 0)).slice(0, 20);
    },
    sellList() {
      return [...(this.formattedDepthData.sellList || [])].sort((a, b) => new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a((a === null || a === void 0 ? void 0 : a.price) || 0).comparedTo((b === null || b === void 0 ? void 0 : b.price) || 0)).slice(0, 20);
    },
    buyMaxSum() {
      return this.getMaxSum(this.buyList);
    },
    sellMaxSum() {
      return this.getMaxSum(this.sellList);
    },
    pricePrecision() {
      var _this$perp;
      return Object(_utils_perp__WEBPACK_IMPORTED_MODULE_8__["calcPrecision"])((_this$perp = this.perp) === null || _this$perp === void 0 ? void 0 : _this$perp.tickSize);
    }
  },
  watch: {
    'perp.hlName': {
      handler(val, oldVal) {
        if (oldVal && oldVal !== val) {
          this.unsubscribeOrderbook();
        }
        if (val) {
          this.resetStep();
          if (this.active) {
            this.clearInactiveTimer();
            this.subscribeOrderbook();
          }
        }
      },
      immediate: true
    },
    // 行情就绪后步长档可能变化，若当前 step 不在新档位里则重置并重订
    stepSizeList(val) {
      const steps = (val || []).map(i => i.value);
      if (!steps.includes(this.step)) {
        this.resetStep();
        if (this.active) this.subscribeOrderbook();
      }
    },
    active: {
      handler(val) {
        if (val) {
          this.clearInactiveTimer();
          this.subscribeOrderbook();
        } else {
          if (this.hasSubscribedOnce) {
            this.startInactiveTimer();
          }
        }
      },
      immediate: true
    }
  },
  beforeUnmount() {
    this.clearInactiveTimer();
    this.unsubscribeOrderbook();
    this.$store.dispatch('clearDepthUpdateFrame');
  },
  methods: {
    resetStep() {
      var _this$perp2, _this$perp3;
      const steps = (this.stepSizeList || []).map(i => i.value);
      this.$store.state.perp.step = Object(_utils_perp__WEBPACK_IMPORTED_MODULE_8__["getDefaultHlOrderBookStep"])(steps, (_this$perp2 = this.perp) === null || _this$perp2 === void 0 ? void 0 : _this$perp2.markPx, (_this$perp3 = this.perp) === null || _this$perp3 === void 0 ? void 0 : _this$perp3.tickSize);
    },
    onStepSelect(val) {
      if (String(this.step) === String(val.value)) {
        this.showStepPop = false;
        return;
      }
      this.$store.state.perp.step = val.value;
      this.showStepPop = false;
      // 步长变化：按新聚合档重新订阅（参照 ave_web switchStep）
      if (this.active) this.subscribeOrderbook();
    },
    subscribeOrderbook() {
      var _this$$store$state$pe4, _this$perp4, _this$perp5, _this$perp6;
      const coin = (_this$$store$state$pe4 = this.$store.state.perp) === null || _this$$store$state$pe4 === void 0 || (_this$$store$state$pe4 = _this$$store$state$pe4.perp) === null || _this$$store$state$pe4 === void 0 ? void 0 : _this$$store$state$pe4.hlName;
      if (!coin) return;
      const steps = (this.stepSizeList || []).map(i => i.value);
      const staticSteps = Object(_utils_perp__WEBPACK_IMPORTED_MODULE_8__["parseApiSteps"])((_this$perp4 = this.perp) === null || _this$perp4 === void 0 ? void 0 : _this$perp4.displayDigitMerge);
      const nextSub = Object(_utils_perp__WEBPACK_IMPORTED_MODULE_8__["buildHlL2Subscription"])(coin, this.step, ((_this$perp5 = this.perp) === null || _this$perp5 === void 0 ? void 0 : _this$perp5.markPx) || ((_this$perp6 = this.perp) === null || _this$perp6 === void 0 ? void 0 : _this$perp6.lastPrice), steps, staticSteps.length ? staticSteps : null);
      // 与当前订阅完全一致则跳过，避免重复 unsub/sub
      if (this.l2BookSub && JSON.stringify(this.l2BookSub) === JSON.stringify(nextSub)) {
        return;
      }
      this.hasSubscribedOnce = true;
      if (this.l2BookSub) {
        this.$store.dispatch('hlWsSend', {
          type: 'unsubscribe',
          subscription: this.l2BookSub
        });
        this.l2BookSub = null;
      }
      // 清空旧档位深度，等新快照
      this.$store.commit('setDepthData', {
        buyList: [],
        sellList: [],
        replace: true
      });
      this.$store.dispatch('hlWsSend', {
        type: 'subscribe',
        subscription: nextSub
      });
      this.l2BookSub = nextSub;
    },
    unsubscribeOrderbook() {
      var _this$$store$state$pe5;
      if (this.l2BookSub) {
        this.$store.dispatch('hlWsSend', {
          type: 'unsubscribe',
          subscription: this.l2BookSub
        });
        this.l2BookSub = null;
        return;
      }
      // 兜底：无本地记录时按 coin 退订（无 s/m）
      const contractId = (_this$$store$state$pe5 = this.$store.state.perp) === null || _this$$store$state$pe5 === void 0 || (_this$$store$state$pe5 = _this$$store$state$pe5.perp) === null || _this$$store$state$pe5 === void 0 ? void 0 : _this$$store$state$pe5.hlName;
      if (!contractId) return;
      this.$store.dispatch('hlWsSend', {
        type: 'unsubscribe',
        channel: `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_7__["WSPerpEventType"].DEPTH}.${contractId}.${this.level}`
      });
    },
    startInactiveTimer() {
      this.clearInactiveTimer();
      this.inactiveTimer = setTimeout(() => {
        this.unsubscribeOrderbook();
        this.inactiveTimer = null;
      }, INACTIVE_UNSUBSCRIBE_DELAY);
    },
    clearInactiveTimer() {
      if (this.inactiveTimer) {
        clearTimeout(this.inactiveTimer);
        this.inactiveTimer = null;
      }
    },
    getMaxSum(list = []) {
      return list.reduce((total, item) => total + Number((item === null || item === void 0 ? void 0 : item.sum) || 0), 0);
    },
    getCumulativeSum(list = [], index = 0) {
      return list.slice(0, index + 1).reduce((total, item) => {
        return total + Number((item === null || item === void 0 ? void 0 : item.sum) || 0);
      }, 0);
    },
    getDepthBarStyle(list, index, maxSum, type) {
      const width = maxSum > 0 ? Math.min(this.getCumulativeSum(list, index) / maxSum, 1) : 0;
      const color = type === 'buy' ? this.$store.getters.upColor[3] : this.$store.getters.downColor[3];
      return {
        width: `${(width * 100).toFixed(2)}%`,
        [type === 'buy' ? 'right' : 'left']: 0,
        background: `${color}1F` // ~12% 透明，跟随全局涨跌色
      };
    },
    formatPrice(price) {
      if (Number(price) <= 0) return '--';
      return this.$f.formatNumber2(price || 0, this.pricePrecision);
    },
    formatSize(size) {
      return this.$f.formatNumber2(size || 0, 8);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_perpWs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/perpWs.js */ "./src/store/perpWs.js");

const TRADE_LIMIT = 200;
const DISPLAY_LIMIT = 100;
// 切到其它 tab 时延迟取消成交订阅，避免快速来回切换导致频繁 订阅/取消
const INACTIVE_UNSUBSCRIBE_DELAY = 5000;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PerpRecentTrades',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      historyList: [],
      wsHistoryCache: [],
      rafId: null,
      inactiveTimer: null,
      hasSubscribedOnce: false
    };
  },
  computed: {
    contractId() {
      var _this$$store$state$pe;
      return ((_this$$store$state$pe = this.$store.state.perp) === null || _this$$store$state$pe === void 0 || (_this$$store$state$pe = _this$$store$state$pe.perp) === null || _this$$store$state$pe === void 0 ? void 0 : _this$$store$state$pe.hlName) || '';
    },
    tradeChannel() {
      return `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_0__["WSPerpEventType"].TRADES}.${this.contractId}`;
    },
    wsTradesResult() {
      var _this$$store$state$pe2;
      return ((_this$$store$state$pe2 = this.$store.state.perpWs) === null || _this$$store$state$pe2 === void 0 || (_this$$store$state$pe2 = _this$$store$state$pe2.wsResult) === null || _this$$store$state$pe2 === void 0 ? void 0 : _this$$store$state$pe2[_store_perpWs_js__WEBPACK_IMPORTED_MODULE_0__["WSPerpEventType"].TRADES]) || null;
    },
    displayList() {
      return this.historyList.slice(0, DISPLAY_LIMIT);
    }
  },
  watch: {
    contractId: {
      handler(val, oldVal) {
        if (oldVal) {
          this.unsubscribeTrades(oldVal);
        }
        this.historyList = [];
        this.wsHistoryCache = [];
        if (!val || !this.active) return;
        this.clearInactiveTimer();
        this.subscribeTrades(val);
      },
      immediate: true
    },
    active: {
      handler(val) {
        if (val) {
          this.clearInactiveTimer();
          this.subscribeTrades();
        } else {
          if (this.hasSubscribedOnce) {
            this.startInactiveTimer();
          }
        }
      },
      immediate: true
    },
    wsTradesResult: {
      handler(val) {
        const result = Array.isArray(val === null || val === void 0 ? void 0 : val.data) ? val.data : [];
        if (!result.length || this.tradeChannel !== (val === null || val === void 0 ? void 0 : val.channel)) return;
        if (val.dataType === 'Snapshot') {
          this.historyList = result.slice(0, TRADE_LIMIT);
        } else if (val.dataType === 'changed') {
          this.wsHistoryCache = [...result, ...this.wsHistoryCache];
          this.scheduleFlushHistoryViews();
        }
      },
      deep: true
    }
  },
  beforeUnmount() {
    this.clearInactiveTimer();
    this.cancelFlushHistoryViews();
    this.unsubscribeTrades();
  },
  methods: {
    subscribeTrades(contractId = this.contractId) {
      if (!contractId) return;
      this.hasSubscribedOnce = true;
      this.$store.dispatch('hlWsSend', {
        type: 'subscribe',
        channel: `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_0__["WSPerpEventType"].TRADES}.${contractId}`
      });
    },
    unsubscribeTrades(contractId = this.contractId) {
      if (!contractId) return;
      this.$store.dispatch('hlWsSend', {
        type: 'unsubscribe',
        channel: `${_store_perpWs_js__WEBPACK_IMPORTED_MODULE_0__["WSPerpEventType"].TRADES}.${contractId}`
      });
    },
    startInactiveTimer() {
      this.clearInactiveTimer();
      this.inactiveTimer = setTimeout(() => {
        this.unsubscribeTrades();
        this.inactiveTimer = null;
      }, INACTIVE_UNSUBSCRIBE_DELAY);
    },
    clearInactiveTimer() {
      if (this.inactiveTimer) {
        clearTimeout(this.inactiveTimer);
        this.inactiveTimer = null;
      }
    },
    scheduleFlushHistoryViews() {
      if (this.rafId) return;
      this.rafId = requestAnimationFrame(() => {
        this.rafId = null;
        if (!this.wsHistoryCache.length) return;
        this.historyList = [...this.wsHistoryCache, ...this.historyList].slice(0, TRADE_LIMIT);
        this.wsHistoryCache = [];
      });
    },
    cancelFlushHistoryViews() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    },
    tradeKey(row, index) {
      return `${(row === null || row === void 0 ? void 0 : row.ticketId) || index}-${(row === null || row === void 0 ? void 0 : row.time) || ''}`;
    },
    getTradeTime(row) {
      return (row === null || row === void 0 ? void 0 : row.time) || 0;
    },
    getTradePrice(row) {
      return (row === null || row === void 0 ? void 0 : row.price) || 0;
    },
    getTradeSize(row) {
      return (row === null || row === void 0 ? void 0 : row.size) || 0;
    },
    getTradeTurnover(row) {
      return (row === null || row === void 0 ? void 0 : row.value) || 0;
    },
    isBuyerMaker(row) {
      return !!(row !== null && row !== void 0 && row.isBuyerMaker);
    },
    formatTradeTimestamp(row) {
      const time = Number(this.getTradeTime(row) || 0);
      if (!time) return 0;
      return time > 1e12 ? Math.floor(time / 1000) : time;
    },
    formatTradeTime(row) {
      const timestamp = this.formatTradeTimestamp(row);
      return timestamp > 0 ? this.$f.formatDate(timestamp, 'HH:mm:ss') : '--';
    },
    formatPrice(row) {
      return Number(this.getTradePrice(row) || 0) > 0 ? this.$f.formatNumber2(this.getTradePrice(row) || 0, 10) : '--';
    },
    formatSize(row) {
      return Number(this.getTradePrice(row) || 0) > 0 ? this.$f.formatNumber2(this.getTradeSize(row) || 0, 8) : '--';
    },
    formatTurnover(row) {
      return Number(this.getTradePrice(row) || 0) > 0 ? this.$f.formatNumber2(this.getTradeTurnover(row) || 0, 3) : '--';
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-b91f8d60"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "home-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$perp;
  const _component_PerpInfo = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("PerpInfo");
  const _component_KLinePerp = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("KLinePerp");
  const _component_Tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Tabs");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_PerpInfo, {
    info: $options.perp
  }, null, 8 /* PROPS */, ["info"]), (_$options$perp = $options.perp) !== null && _$options$perp !== void 0 && _$options$perp.contractId ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_KLinePerp, {
    key: 0,
    info: $options.perp,
    class: "perp-kline"
  }, null, 8 /* PROPS */, ["info"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Tabs)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/watermark.png */ "./src/assets/images/watermark.png");
/* harmony import */ var _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-c6a967de"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "k-line-chart-container"
};
const _hoisted_2 = {
  class: "info"
};
const _hoisted_3 = {
  class: "flex"
};
const _hoisted_4 = ["id", "value"];
const _hoisted_5 = ["for"];
const _hoisted_6 = {
  class: "k-line-chart-perp"
};
const _hoisted_7 = {
  key: 0,
  class: "kline-legend"
};
const _hoisted_8 = {
  class: "legend-1"
};
const _hoisted_9 = {
  class: "legend-2"
};
const _hoisted_10 = {
  class: "legend-3"
};
const _hoisted_11 = {
  key: 1,
  class: "kline-legend"
};
const _hoisted_12 = {
  class: "legend-1"
};
const _hoisted_13 = {
  class: "legend-2"
};
const _hoisted_14 = {
  class: "legend-3"
};
const _hoisted_15 = {
  key: 2,
  class: "kline-legend"
};
const _hoisted_16 = {
  class: "legend-1"
};
const _hoisted_17 = {
  class: "legend-2"
};
const _hoisted_18 = {
  class: "legend-3"
};
const _hoisted_19 = {
  class: "kline-tooltip"
};
const _hoisted_20 = {
  class: "kline-tooltip-li"
};
const _hoisted_21 = {
  class: "kline-tooltip-li"
};
const _hoisted_22 = {
  class: "kline-tooltip-li"
};
const _hoisted_23 = {
  class: "kline-tooltip-li"
};
const _hoisted_24 = {
  class: "kline-tooltip-li"
};
const _hoisted_25 = {
  class: "kline-tooltip-li"
};
const _hoisted_26 = {
  class: "kline-tooltip-li"
};
const _hoisted_27 = {
  class: "kline-tooltip-li"
};
const _hoisted_28 = {
  class: "kline-tooltip-li"
};
const _hoisted_29 = {
  class: "kline-tooltip-li"
};
const _hoisted_30 = {
  class: "van-hairline--top kline-bottom-legend kline-legend"
};
const _hoisted_31 = {
  key: 0,
  class: "legend-1"
};
const _hoisted_32 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
  style: {
    "color": "#eee"
  }
}, "Volume: ", -1 /* HOISTED */));
const _hoisted_33 = {
  class: "legend-1"
};
const _hoisted_34 = {
  class: "legend-2"
};
const _hoisted_35 = {
  class: "legend-3"
};
const _hoisted_36 = {
  key: 2,
  class: "legend-1"
};
const _hoisted_37 = {
  class: "legend-1"
};
const _hoisted_38 = {
  class: "legend-2"
};
const _hoisted_39 = {
  class: "legend-3"
};
const _hoisted_40 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "kline-watermark",
  src: _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_41 = {
  class: "flex"
};
const _hoisted_42 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "line"
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("loading");
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.resolutionList, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      key: index
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("input", {
      type: "radio",
      name: "tabs-resolution",
      id: item.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.resolution = $event),
      value: item.value
    }, null, 8 /* PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__["vModelRadio"], $data.resolution]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", {
      for: item.value
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.label), 9 /* TEXT, PROPS */, _hoisted_5)]);
  }), 128 /* KEYED_FRAGMENT */))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_loading, {
    class: "loading-container",
    active: $data.isLoading,
    "onUpdate:active": _cache[1] || (_cache[1] = $event => $data.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), $data.activeStudy === 'MA' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("ul", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_8, "MA5: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_9, "MA10: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_10, "MA20: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value, 4, 10)), 1 /* TEXT */)])) : $data.activeStudy === 'EMA' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("ul", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_12, "EMA5: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_13, "EMA10: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_14, "EMA20: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value, 4, 10)), 1 /* TEXT */)])) : $data.activeStudy === 'BOLL' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("ul", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_16, "MIDDLE: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_17, "UPPER: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value, 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_18, "LOWER: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value, 4, 10)), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.toolTipValue.time), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('open')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.open, 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_22, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('high')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.high, 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_23, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('low')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.low, 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('close')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.close, 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('changeV')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.toolTipValue.changeV > 0 ? '+' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.changeV, 3, 10)), 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_26, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('changeP')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.toolTipValue.changeV > 0 ? '+' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.changeP)) + "%", 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_27, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amplitude')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.a, 3, 10)) + "%", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span :style=\"{ color:  toolTipValue.a > 0 ? $store.getters.upColor[1] : $store.getters.downColor[1]}\"\n            >{{ toolTipValue.a > 0 ? '+' : ''\n            }}{{ $f.formatNumber2(toolTipValue.a, 3, 10) }}%</span> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_28, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('volume')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.volume)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amount1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.toolTipValue.open + $data.toolTipValue.close > 0 ? _ctx.$f.formatNumber2($data.toolTipValue.volume * 2 / ($data.toolTipValue.open + $data.toolTipValue.close)) : 0), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_30, [$data.activeStudyBottom === 'VOL' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", _hoisted_31, [_hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.volume)), 5 /* TEXT, STYLE */)])) : $data.activeStudyBottom === 'MACD' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_33, "MACD: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.macd)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_34, "DIF: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.dif)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_35, "DEA: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.dea)), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : $data.activeStudyBottom === 'RSI' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", _hoisted_36, " RSI(14): " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.rsi)), 1 /* TEXT */)) : $data.activeStudyBottom === 'KDJ' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 3
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_37, "K: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.k)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_38, "D: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.d)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_39, "J: " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.j)), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), _hoisted_40]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_41, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    active: $data.activeStudy,
    "onUpdate:active": _cache[2] || (_cache[2] = $event => $data.activeStudy = $event),
    background: "#1D223D",
    "title-active-color": "#558BED",
    "title-inactive-color": "#878FBC",
    "line-width": "0",
    class: "tabs-container",
    style: {
      "--van-tabs-line-height": "0.8rem",
      "flex": "3"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.studyList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        key: index,
        title: item,
        name: item,
        class: "tab-item"
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"]), _hoisted_42, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    active: $data.activeStudyBottom,
    "onUpdate:active": _cache[3] || (_cache[3] = $event => $data.activeStudyBottom = $event),
    background: "#1D223D",
    "title-active-color": "#558BED",
    "title-inactive-color": "#878FBC",
    "line-width": "0",
    class: "tabs-container",
    style: {
      "--van-tabs-line-height": "0.8rem",
      "flex": "4"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.studyBottomList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        key: index,
        title: item,
        name: item,
        class: "tab-item"
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-40e1fbb3"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "info"
};
const _hoisted_2 = {
  class: "info-left"
};
const _hoisted_3 = {
  class: "white font-20 mr-5"
};
const _hoisted_4 = {
  class: "flex-start text-12px mt-4px"
};
const _hoisted_5 = {
  class: "ml-auto text-right"
};
const _hoisted_6 = {
  class: "flex-end color-#fff mt-4px"
};
const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "/", -1 /* HOISTED */));
const _hoisted_8 = {
  class: "info-table"
};
const _hoisted_9 = {
  class: "table-container"
};
const _hoisted_10 = {
  class: "table-box"
};
const _hoisted_11 = {
  class: "table-label"
};
const _hoisted_12 = {
  class: "table-label"
};
const _hoisted_13 = {
  class: "white"
};
const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "divider-line"
}, null, -1 /* HOISTED */));
const _hoisted_15 = {
  class: "table-container"
};
const _hoisted_16 = {
  class: "table-box"
};
const _hoisted_17 = {
  class: "table-label"
};
const _hoisted_18 = {
  class: "white"
};
const _hoisted_19 = {
  class: "table-label"
};
const _hoisted_20 = {
  class: "white"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$info, _$props$info2, _$props$info3, _$props$info4, _$props$info5, _$props$info6, _$props$info7, _$props$info8, _$props$info9, _$props$info0, _$props$info1, _$props$info10, _$props$info11;
  const _component_van_count_down = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-count-down");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, " $" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$info = $props.info) === null || _$props$info === void 0 ? void 0 : _$props$info.lastPrice) || 0, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [((_$props$info2 = $props.info) === null || _$props$info2 === void 0 ? void 0 : _$props$info2.priceChangePercent) >= 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
    key: 0,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: _ctx.$store.getters.upColor[2]
    })
  }, " +" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((((_$props$info3 = $props.info) === null || _$props$info3 === void 0 ? void 0 : _$props$info3.priceChangePercent) || 0) * 100, 2)) + "% ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), ((_$props$info4 = $props.info) === null || _$props$info4 === void 0 ? void 0 : _$props$info4.priceChangePercent) < 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
    key: 1,
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: _ctx.$store.getters.downColor[2]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((((_$props$info5 = $props.info) === null || _$props$info5 === void 0 ? void 0 : _$props$info5.priceChangePercent) || 0) * 100, 2)) + "% ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('fundingRate')) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('countdown')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["text-12px", Number((_$props$info6 = $props.info) === null || _$props$info6 === void 0 ? void 0 : _$props$info6.fundingRate) > 0 ? 'color-[--up-color]' : 'color-[--down-color]'])
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(Number((_$props$info7 = $props.info) === null || _$props$info7 === void 0 ? void 0 : _$props$info7.fundingRate) * 100 || 0)) + "% ", 3 /* TEXT, CLASS */), _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_count_down, {
    class: "count-down",
    style: {
      "--van-count-down-text-color": "#fff"
    },
    time: $options.countDownTime
  }, null, 8 /* PROPS */, ["time"])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('24HChange1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", {
    class: "white",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: (((_$props$info8 = $props.info) === null || _$props$info8 === void 0 ? void 0 : _$props$info8.priceChangePercent) || 0) >= 0 ? _ctx.$store.getters.upColor[2] : _ctx.$store.getters.downColor[2]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((((_$props$info9 = $props.info) === null || _$props$info9 === void 0 ? void 0 : _$props$info9.priceChangePercent) || 0) >= 0 ? '+' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2((((_$props$info0 = $props.info) === null || _$props$info0 === void 0 ? void 0 : _$props$info0.lastPrice) || 0) - (((_$props$info1 = $props.info) === null || _$props$info1 === void 0 ? void 0 : _$props$info1.prevDayPx) || 0), $options.precision)), 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('openInterest1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_13, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit($options.openInterestUsd, 3)), 1 /* TEXT */)])])]), _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("table", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('24Amount')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_18, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumUnit(((_$props$info10 = $props.info) === null || _$props$info10 === void 0 ? void 0 : _$props$info10.value) || 0, 3)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('oraclePrice')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("td", _hoisted_20, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$props$info11 = $props.info) === null || _$props$info11 === void 0 ? void 0 : _$props$info11.oraclePrice) || 0, $options.precision)), 1 /* TEXT */)])])])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-43809df3"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "history-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_van_sticky = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-sticky");
  const _component_Orders = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Orders");
  const _component_RecentTrades = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("RecentTrades");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_sticky, {
    position: "top",
    "offset-top": "1.2rem",
    "z-index": 999
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
      active: $setup.active,
      "onUpdate:active": _cache[0] || (_cache[0] = $event => $setup.active = $event),
      color: "#558BED",
      background: "#2C3254",
      "title-inactive-color": "#878FBC",
      ellipsis: false,
      shrink: ""
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.list, (item, index) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
          key: index,
          title: item.name,
          name: item.id
        }, {
          title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.name), 1 /* TEXT */)]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["title", "name"]);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["active"])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Orders, {
    active: $setup.active === 'order'
  }, null, 8 /* PROPS */, ["active"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $setup.active === 'order']]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_RecentTrades, {
    active: $setup.active === 'tx'
  }, null, 8 /* PROPS */, ["active"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $setup.active === 'tx']])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_arrow_dwon_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/arrow-dwon-1.svg */ "./src/assets/images/arrow-dwon-1.svg");
/* harmony import */ var _assets_images_arrow_dwon_1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_arrow_dwon_1_svg__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-30cc1094"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "perp-orders"
};
const _hoisted_2 = {
  class: "flex-end step-button-container"
};
const _hoisted_3 = {
  class: "mr-5px"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_arrow_dwon_1_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_5 = {
  class: "orderbook-header"
};
const _hoisted_6 = {
  class: "flex-1 text-left"
};
const _hoisted_7 = {
  class: "flex-1 text-center"
};
const _hoisted_8 = {
  class: "flex-1 text-right"
};
const _hoisted_9 = {
  class: "orderbook-body"
};
const _hoisted_10 = {
  class: "orderbook-half"
};
const _hoisted_11 = {
  class: "cell amount"
};
const _hoisted_12 = {
  class: "orderbook-half right"
};
const _hoisted_13 = {
  class: "cell amount"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_action_sheet = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-action-sheet");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("button", {
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showStepPop = true, ["stop"])),
    class: "flex-center step-button clickable"
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.step), 1 /* TEXT */), _hoisted_4]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_action_sheet, {
    show: $data.showStepPop,
    "onUpdate:show": _cache[1] || (_cache[1] = $event => $data.showStepPop = $event),
    actions: $options.stepSizeList,
    onSelect: $options.onStepSelect,
    teleport: "#app",
    "cancel-text": _ctx.$t('cancel'),
    "close-on-click-action": ""
  }, null, 8 /* PROPS */, ["show", "actions", "onSelect", "cancel-text"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amount')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('price')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amount')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.buyList, (row, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: `buy-${index}-${row.price}`,
      class: "order-row buy-row"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
      class: "depth-bar",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])($options.getDepthBarStyle($options.buyList, index, $options.buyMaxSum, 'buy'))
    }, null, 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatSize(row.size)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      class: "cell price buy-price",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: _ctx.$store.getters.upColor[3]
      })
    }, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatPrice(row.price)), 5 /* TEXT, STYLE */)]);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.sellList, (row, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: `sell-${index}-${row.price}`,
      class: "order-row sell-row"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
      class: "depth-bar",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])($options.getDepthBarStyle($options.sellList, index, $options.sellMaxSum, 'sell'))
    }, null, 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      class: "cell price sell-price",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: _ctx.$store.getters.downColor[3]
      })
    }, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatPrice(row.price)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatSize(row.size)), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-5b87e3b9"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "recent-trades"
};
const _hoisted_2 = {
  class: "trades-header"
};
const _hoisted_3 = {
  class: "text-center"
};
const _hoisted_4 = {
  class: "text-right"
};
const _hoisted_5 = {
  class: "text-right"
};
const _hoisted_6 = {
  class: "text-right"
};
const _hoisted_7 = {
  class: "text-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('price')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amount')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('value')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.displayList, (row, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: $options.tradeKey(row, index),
      class: "trade-row"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatTradeTime(row)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      class: "text-center trade-price",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: $options.isBuyerMaker(row) ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, " $" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatPrice(row)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatSize(row)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatTurnover(row)), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".home-content[data-v-b91f8d60] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.28rem;\n  color: #FFFFFF;\n  background: #2C3254;\n  padding-bottom: 1rem;\n  --van-border-color: rgba(135,143,188,.3);\n}\n.download-app-icon[data-v-b91f8d60] {\n  position: fixed;\n  bottom: 1.4rem;\n  right: 0.6rem;\n  z-index: 6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 0.8rem;\n  height: 0.8rem;\n  border-radius: 50%;\n  background-color: #558BED;\n  box-shadow: 0 0 0.1rem #558BED;\n}\n.download-app-icon .iconfont[data-v-b91f8d60] {\n  font-size: 0.48rem;\n  color: #fff;\n}\n.token-info[data-v-b91f8d60] {\n  display: flex;\n  align-items: center;\n  color: #fff;\n}\n.icon-token-container[data-v-b91f8d60] {\n  display: inline-block;\n  font-size: 0.3rem;\n  margin-right: 0.2rem;\n  position: relative;\n}\n.icon-token-container .icon-token[data-v-b91f8d60] {\n  border-radius: 50%;\n}\n.icon-token-container .icon-network[data-v-b91f8d60] {\n  font-size: 0.28rem;\n  position: absolute;\n  bottom: 0.02rem;\n  right: -0.06rem;\n  border-radius: 50%;\n  border: 0.02rem solid #fff;\n}\n.pop-download-container[data-v-b91f8d60] {\n  background: #FFFFFF;\n  border: 0.02rem solid #cccccc;\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  padding: 0.3rem 0.24rem;\n  font-size: 0.22rem;\n  color: #666666;\n  font-weight: 400;\n  position: relative;\n}\n.pop-download-container img[data-v-b91f8d60] {\n  height: 0.48rem;\n}\n.pop-download-container h3[data-v-b91f8d60] {\n  font-size: 0.28rem;\n  color: #000000;\n  font-weight: 500;\n  margin: 0 0 0.1rem 0;\n}\n.pop-download-container .pop-download-content[data-v-b91f8d60] {\n  margin-left: 0.28rem;\n}\n.pop-download-container .icon-close[data-v-b91f8d60] {\n  position: absolute;\n  top: 0.3rem;\n  right: 0.3rem;\n  font-size: 0.32rem;\n  color: #333;\n}\n.perp-kline[data-v-b91f8d60] {\n  margin-top: 0.24rem;\n  width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kline-tooltip {\n  position: absolute;\n  display: none;\n  padding: 0.16rem;\n  box-sizing: border-box;\n  font-size: 0.2rem;\n  color: #fff;\n  background-color: #1d223d;\n  text-align: left;\n  z-index: 1000;\n  top: 0.7rem;\n  left: 0.24rem;\n  pointer-events: none;\n  border: 0.02rem solid #7281a0;\n  border-radius: 0.1rem;\n}\n.kline-tooltip .kline-tooltip-li {\n  display: flex;\n  justify-content: space-between;\n}\n.kline-tooltip .kline-tooltip-li + .kline-tooltip-li {\n  margin-top: 0.16rem;\n}\n.kline-tooltip .kline-tooltip-li > :first-child {\n  margin-right: 0.3rem;\n}\n.kline-tooltip .kline-tooltip-li .up {\n  color: #2fa89a;\n}\n.kline-tooltip .kline-tooltip-li .down {\n  color: #fa6b82;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".k-line-chart-container[data-v-c6a967de] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0.08rem 0.22rem 0 rgba(29, 34, 61, 0.45);\n  background-color: #1d223d;\n  width: 100%;\n  height: 8.8rem;\n  padding: 0;\n  position: relative;\n  --van-dropdown-menu-height: 0.3rem;\n  --van-dropdown-menu-background-color:transparent;\n  --van-dropdown-menu-title-text-color: #878FBC;\n  --van-dropdown-menu-title-font-size: 0.24rem;\n}\n.k-line-chart-perp[data-v-c6a967de] {\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n.resolution-radio[data-v-c6a967de] {\n  text-align: left;\n  margin-bottom: 0.3rem;\n}\n.tabs-container[data-v-c6a967de] .van-tabs__wrap {\n  height: 0.6rem;\n}\n.tabs-container[data-v-c6a967de] .van-tabs__wrap .van-tab {\n  font-size: 0.24rem;\n}\n.study-bottom[data-v-c6a967de] {\n  display: flex;\n  align-items: center;\n  background: #2C3254;\n  padding: 0.14rem 0;\n}\n.kline-legend[data-v-c6a967de] {\n  position: absolute;\n  left: 0.2rem;\n  top: 0.2rem;\n  display: flex;\n  z-index: 2;\n  font-size: 0.2rem;\n}\n.kline-legend.kline-legend1[data-v-c6a967de] {\n  z-index: 3;\n  top: 0.6rem;\n}\n.kline-legend li + li[data-v-c6a967de] {\n  margin-left: 0.2rem;\n}\n.kline-legend .legend-1[data-v-c6a967de] {\n  color: #f7d01a;\n}\n.kline-legend .legend-2[data-v-c6a967de] {\n  color: #30e0a1;\n}\n.kline-legend .legend-3[data-v-c6a967de] {\n  color: #e472f5;\n}\n.kline-bottom-legend[data-v-c6a967de] {\n  left: 0.2rem;\n  top: calc(80% - 0.1rem);\n}\n.loading-container[data-v-c6a967de] {\n  z-index: 2;\n}\n.info[data-v-c6a967de] {\n  color: #878FBC;\n  background: #2C3254;\n}\n.info .border[data-v-c6a967de] {\n  border-top: 0.02rem solid #878fbc4d;\n}\n.info .pt-10[data-v-c6a967de] {\n  padding-top: 0.2rem;\n}\n.info .pb-10[data-v-c6a967de] {\n  padding-bottom: 0.2rem;\n}\n.info ul[data-v-c6a967de] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n  height: 0.62rem;\n}\n.info ul.ul-1[data-v-c6a967de] {\n  height: 1.04rem;\n}\n.info ul.ul-1 li[data-v-c6a967de] {\n  margin-right: 0.16rem;\n}\n.info ul li[data-v-c6a967de] {\n  font-size: 0.26rem;\n  color: #878FBC;\n  letter-spacing: 0;\n  font-weight: 500;\n}\n.info ul li label[data-v-c6a967de] {\n  /* padding: 8px 0; */\n  padding-top: 0.02rem;\n  color: #878FBC;\n  box-sizing: border-box;\n  display: block;\n}\n.info ul li label[data-v-c6a967de]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n.info ul li input[data-v-c6a967de] {\n  display: none;\n}\n.info ul li input:checked + label[data-v-c6a967de] {\n  color: #558BED;\n}\n.line[data-v-c6a967de] {\n  width: 0;\n  height: 0.2rem;\n  border-right: 0.02rem solid #878fbc4d;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".info[data-v-40e1fbb3] {\n  background: #2c3254;\n  font-size: 0.2rem;\n  color: #878fbc;\n  letter-spacing: 0;\n  text-align: left;\n  padding: 0.3rem 0.3rem 0;\n  --van-padding-md: 0;\n  --van-skeleton-row-background-color: #6a719c;\n}\n.info .icon-copy[data-v-40e1fbb3] {\n  font-size: 0.24rem;\n  margin-left: 0.1rem;\n}\n.info .info-left[data-v-40e1fbb3] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.info .info_bottom[data-v-40e1fbb3] {\n  margin-bottom: 0.2rem;\n}\n.info .info-left[data-v-40e1fbb3] {\n  margin-bottom: 0.24rem;\n}\n.info .white[data-v-40e1fbb3] {\n  color: #fff;\n}\n.info .font-20[data-v-40e1fbb3] {\n  font-size: 0.4rem;\n}\n.info .mr-5[data-v-40e1fbb3] {\n  margin-right: 0.1rem;\n}\n.info-table[data-v-40e1fbb3] {\n  width: 100%;\n  display: flex;\n  font-size: 0.24rem;\n  color: #878fbc;\n}\n.table-container[data-v-40e1fbb3] {\n  flex: 1;\n}\n.table-box[data-v-40e1fbb3] {\n  width: 100%;\n}\n.table-box .table-label[data-v-40e1fbb3] {\n  text-align: left;\n  word-wrap: break-word;\n  white-space: normal;\n  word-break: normal;\n  overflow-wrap: anywhere;\n}\n.table-box .white[data-v-40e1fbb3] {\n  text-align: right;\n}\n.table-box tr + tr td[data-v-40e1fbb3] {\n  padding: 0.08rem 0;\n}\n.divider-line[data-v-40e1fbb3] {\n  width: 0.01rem;\n  background-color: #878fbc;\n  opacity: 0.2;\n  margin: 0 0.2rem 0 0.2rem;\n}\n.info_bottom[data-v-40e1fbb3] {\n  margin-top: 0.1rem;\n}\n.info_top[data-v-40e1fbb3] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.count-down[data-v-40e1fbb3] {\n  --van-count-down-text-color: #fff;\n  --van-count-down-font-size: 0.24rem;\n  --van-count-down-line-height: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-43809df3]  .van-sticky--fixed {\n  background-color: #2C3254;\n}\n.history-container[data-v-43809df3] {\n  margin-bottom: 2rem;\n}\n.history-container .header[data-v-43809df3] {\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n  padding: 0.22rem 0.76rem;\n  display: flex;\n  justify-content: flex-start;\n  font-size: 0.28rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.4rem;\n}\n.history-container .header a[data-v-43809df3] {\n  text-decoration: none;\n  padding: 0.18rem 0.6rem;\n  font-size: 0.28rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  line-height: 0.4rem;\n  border: 0.02rem solid #558bed;\n}\n.history-container .header a[data-v-43809df3]:first-child {\n  border-radius: 0.2rem 0 0 0.2rem;\n}\n.history-container .header a[data-v-43809df3]:last-child {\n  border-radius: 0 0.2rem 0.2rem 0;\n}\n.history-container .header a[data-v-43809df3]:hover {\n  text-decoration: none;\n}\n.history-container .header a.active[data-v-43809df3] {\n  background: #558bed;\n}\n.history-container[data-v-43809df3]  .van-tabs--line .van-tabs__wrap {\n  height: 0.88rem;\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n}\n.history-container[data-v-43809df3]  .van-tabs--line .van-tabs__wrap .van-badge {\n  border: none;\n}\n.filter-container[data-v-43809df3] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem 0.2rem 0;\n  color: #6a719c;\n  font-size: 0.24rem;\n  overflow: hidden;\n  --van-checkbox-border-color: #878FBC;\n  --van-checkbox-label-color: #878FBC;\n  --van-checkbox-label-margin: 0.04rem;\n  --van-checkbox-disabled-label-color:#878FBC;\n}\n.filter-container .buy[data-v-43809df3] {\n  --van-checkbox-disabled-icon-color: #12B886;\n  --van-checkbox-disabled-background-color:#12B886;\n}\n.filter-container .sell[data-v-43809df3] {\n  --van-checkbox-disabled-icon-color: #F6465D;\n  --van-checkbox-disabled-background-color:#F6465D;\n}\n.filter-container .insiders[data-v-43809df3] {\n  --van-checkbox-disabled-icon-color: #AC3EEC;\n  --van-checkbox-disabled-background-color:#AC3EEC;\n}\n.filter-container[data-v-43809df3] .van-checkbox__icon--disabled .van-icon {\n  color: #fff;\n}\n.filter-container .filter-button[data-v-43809df3] {\n  display: inline-flex;\n  align-items: center;\n}\n.filter-container .filter-button[data-v-43809df3]:active {\n  color: #fff;\n}\n.filter-container .checkbox-item[data-v-43809df3] {\n  margin-left: 0.1rem;\n}\n.filter-container .icon-shaixuan[data-v-43809df3] {\n  margin-right: 0.1rem;\n  font-size: 0.24rem;\n}\n.icon-jubao-box[data-v-43809df3] {\n  background-color: rgba(29, 34, 61, 0.3);\n  border-radius: 50%;\n  width: 0.8rem;\n  height: 0.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0.1rem 0;\n}\n.report-container[data-v-43809df3] {\n  font-size: 0.28rem;\n  color: #9AA4D8;\n  display: flex;\n  justify-content: center;\n}\n.report-btn[data-v-43809df3] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.report-btn[data-v-43809df3]:active {\n  opacity: 0.3;\n}\n.select-list[data-v-43809df3] {\n  display: flex;\n  overflow-x: auto;\n  padding-bottom: 0.1rem;\n  margin-bottom: -0.1rem;\n  margin-right: 0.2rem;\n}\n.select-list button[data-v-43809df3] {\n  font-size: 0.24rem;\n  color: #6a719c;\n  letter-spacing: 0;\n  font-weight: 500;\n  background-color: transparent;\n  border: none;\n  border-radius: 0.08rem;\n  padding: 0.08rem 0.12rem;\n}\n.select-list button.active[data-v-43809df3] {\n  background-color: #3b436d;\n  color: #fff;\n}\n.select-list button[data-v-43809df3]:active {\n  opacity: 0.5;\n}\n.select-tabs[data-v-43809df3] {\n  --van-tab-font-size: 0.24rem;\n  --van-tabs-default-color: #6a719c;\n  --van-tab-text-color: #6a719c;\n  --van-tabs-nav-background-color: transparent;\n  --van-tab-active-text-color: #fff;\n  --van-tabs-card-height: 0.56rem;\n  --van-tabs-bottom-bar-height: 0;\n  max-width: calc(100% - 1.2rem);\n}\n.select-tabs.es[data-v-43809df3] {\n  --van-tab-font-size: 0.2rem;\n}\n.select-tabs[data-v-43809df3]  .van-tab {\n  line-height: 1;\n}\n.select-tabs[data-v-43809df3]  .van-tabs__nav--card {\n  margin: 0;\n  border: 0;\n  border-radius: 0.08rem;\n}\n.select-tabs[data-v-43809df3]  .van-tab--active {\n  background-color: #3b436d;\n  border-radius: 0.08rem;\n}\n.select-tabs[data-v-43809df3]  .van-tab--shrink {\n  padding: 0 0.1rem;\n}\n.select-tabs[data-v-43809df3]  .van-tabs__wrap {\n  border-bottom: none !important;\n  height: 0.56rem !important;\n}\n.select-tabs[data-v-43809df3]  .van-tabs__nav--line {\n  padding-bottom: 0;\n  padding-left: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".perp-orders[data-v-30cc1094] {\n  padding: 0 0.32rem;\n  color: #878fbc;\n  font-size: 0.24rem;\n}\n.step-button-container[data-v-30cc1094] {\n  height: 0.9rem;\n  margin-top: -0.9rem;\n  position: relative;\n  z-index: 10;\n  pointer-events: none;\n  margin-bottom: 0.24rem;\n}\n.step-button[data-v-30cc1094] {\n  background: #3b436d;\n  min-width: 1.12rem;\n  height: 0.4rem;\n  border-radius: 0.08rem;\n  border: none;\n  font-size: 0.22rem;\n  color: #878fbc;\n  pointer-events: auto;\n}\n.orderbook-header[data-v-30cc1094] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.16rem;\n  color: #878FBC;\n}\n.orderbook-body[data-v-30cc1094] {\n  display: flex;\n  gap: 0.04rem;\n}\n.orderbook-half[data-v-30cc1094] {\n  flex: 1;\n  min-width: 0;\n}\n.orderbook-half.right[data-v-30cc1094] {\n  text-align: right;\n}\n.orderbook-header .orderbook-half[data-v-30cc1094],\n.order-row[data-v-30cc1094] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  align-items: center;\n}\n.order-row[data-v-30cc1094] {\n  position: relative;\n  height: 0.4rem;\n  overflow: hidden;\n}\n.depth-bar[data-v-30cc1094] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.cell[data-v-30cc1094],\n.header-amount[data-v-30cc1094],\n.header-price[data-v-30cc1094] {\n  position: relative;\n  z-index: 1;\n  white-space: nowrap;\n}\n.amount[data-v-30cc1094] {\n  color: #878FBC;\n}\n.price[data-v-30cc1094] {\n  font-weight: 500;\n}\n.buy-price[data-v-30cc1094] {\n  text-align: right;\n}\n.sell-price[data-v-30cc1094] {\n  text-align: left;\n}\n.right .amount[data-v-30cc1094] {\n  text-align: right;\n}\n.right .header-price[data-v-30cc1094] {\n  text-align: left;\n}\n.right .header-amount[data-v-30cc1094] {\n  text-align: right;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".recent-trades[data-v-5b87e3b9] {\n  padding: 0.32rem 0.32rem 0;\n  color: #878fbc;\n  font-size: 0.24rem;\n}\n.trades-header[data-v-5b87e3b9],\n.trade-row[data-v-5b87e3b9] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n  align-items: center;\n  column-gap: 0.16rem;\n  height: 0.72rem;\n}\n.trades-header[data-v-5b87e3b9] {\n  border-bottom: none;\n  height: auto;\n}\n.trade-row[data-v-5b87e3b9] {\n  color: #878FBC;\n}\n.trade-price[data-v-5b87e3b9] {\n  font-weight: 500;\n}\n.text-center[data-v-5b87e3b9] {\n  text-align: center;\n}\n.text-right[data-v-5b87e3b9] {\n  text-align: right;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ee8f0e16", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d872f59a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("df79b46e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ebd67fe0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("35e83ec7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("42698c56", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0768e976", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/arrow-dwon-1.svg":
/*!********************************************!*\
  !*** ./src/assets/images/arrow-dwon-1.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/arrow-dwon-1.6043515c.svg";

/***/ }),

/***/ "./src/utils/perp.js":
/*!***************************!*\
  !*** ./src/utils/perp.js ***!
  \***************************/
/*! exports provided: getDecimalScale, calcPrecision, parseApiSteps, buildHlOrderBookStepSizes, getDefaultHlOrderBookStep, stepToHlL2BookAggregation, buildHlL2Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecimalScale", function() { return getDecimalScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcPrecision", function() { return calcPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseApiSteps", function() { return parseApiSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildHlOrderBookStepSizes", function() { return buildHlOrderBookStepSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultHlOrderBookStep", function() { return getDefaultHlOrderBookStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepToHlL2BookAggregation", function() { return stepToHlL2BookAggregation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildHlL2Subscription", function() { return buildHlL2Subscription; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);






/**
 * 获取BigDecimal的小数位数
 * @param decimal BigDecimal值
 * @return 小数位数
 */
function getDecimalScale(decimal) {
  const str = decimal.toString();
  if (str.includes('.')) {
    return str.length - str.indexOf('.') - 1;
  }
  return 0;
}
function calcPrecision(tickSize) {
  const tickSizeDecimal = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(tickSize || 0);
  if (tickSizeDecimal.gt(1)) {
    const reciprocal = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(1).div(tickSizeDecimal);
    return -getDecimalScale(reciprocal);
  } else {
    return getDecimalScale(tickSizeDecimal);
  }
}

// ===== Hyperliquid 订单簿步长档（参照 ave_web 实现）=====

function formatOrderBookStep(value) {
  if (!value.isFinite() || value.lte(0)) return '0';
  return value.toFixed(8).replace(/\.?0+$/, '') || '0';
}
function compareNumericStrings(a, b) {
  var _BigNumber$comparedTo;
  return (_BigNumber$comparedTo = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(a).comparedTo(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(b))) !== null && _BigNumber$comparedTo !== void 0 ? _BigNumber$comparedTo : 0;
}

/** 解析 API 配置档（displayDigitMerge，逗号分隔） */
function parseApiSteps(displayDigitMerge = '') {
  return [...new Set((displayDigitMerge || '').split(',').map(s => s.trim()).filter(Boolean))].sort(compareNumericStrings);
}

/** 按标记价确定步长数量级区间（与 HL 官网档位数量接近） */
function getStepExpRange(price) {
  const exp = Math.floor(Math.log10(price));
  if (price >= 1000) return {
    startExp: exp - 4,
    endExp: exp - 1
  };
  if (price >= 100) return {
    startExp: exp - 3,
    endExp: exp - 1
  };
  if (price >= 1) return {
    startExp: exp - 2,
    endExp: exp
  };
  return {
    startExp: exp - 2,
    endExp: exp + 1
  };
}

/** 生成约 6 档分组步长：最低数量级用 1/2/5，更高数量级只取整档 */
function buildComputedHlOrderBookSteps(price, minStep = 0) {
  let {
    startExp,
    endExp
  } = getStepExpRange(price);
  if (minStep > 0 && Number.isFinite(minStep)) {
    const minExp = Math.floor(Math.log10(minStep));
    if (minExp < startExp) {
      startExp = minExp;
    }
  }
  const steps = [];
  for (let e = startExp; e <= endExp; e++) {
    const base = Math.pow(10, e);
    if (!Number.isFinite(base) || base <= 0) continue;
    const multipliers = e === startExp ? [1, 2, 5] : [1];
    for (const multiplier of multipliers) {
      const raw = base * multiplier;
      if (minStep > 0 && raw + 1e-12 < minStep) continue;
      if (raw > price) continue;
      steps.push(formatOrderBookStep(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(raw)));
    }
  }
  const sorted = [...new Set(steps)].sort(compareNumericStrings);
  // 最多展示 6 档，丢弃最大的若干档（最小档即 tick size，需保留）
  return sorted.slice(0, 6);
}

/** 按标记价生成订单簿价格分组步长（优先 API 配置，否则约 6 档） */
function buildHlOrderBookStepSizes(coin) {
  const apiSteps = parseApiSteps(coin === null || coin === void 0 ? void 0 : coin.displayDigitMerge);
  if (apiSteps.length) return apiSteps;
  const markPx = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a((coin === null || coin === void 0 ? void 0 : coin.markPx) || (coin === null || coin === void 0 ? void 0 : coin.midPx) || '0');
  if (!markPx.gt(0)) {
    return ['0.01', '0.1', '1', '5', '10'];
  }

  // 价格精度遵循文档规则，取更严格（更大）的最小变动单位：
  //   sigFigTick = 10^(exp-4)，avedex-m 用 tickSize 表达最小变动单位（priceStep）
  const exp = Math.floor(Math.log10(markPx.toNumber()));
  const sigFigTick = Math.pow(10, exp - 4);
  const apiStep = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a((coin === null || coin === void 0 ? void 0 : coin.tickSize) || '0');
  const minStep = apiStep.gt(0) ? bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a.max(apiStep, new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(sigFigTick)) : new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(sigFigTick);
  return buildComputedHlOrderBookSteps(markPx.toNumber(), minStep.gt(0) ? minStep.toNumber() : 0).filter(s => new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(s).gt(0));
}

/** 默认选中与 HL 官网接近的分组精度（优先选最接近 priceStep 的较小档位） */
function getDefaultHlOrderBookStep(steps, markPx, priceStep) {
  if (!steps.length) return '0';
  const price = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a.isBigNumber(markPx) ? markPx : new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(markPx || '0');
  // 如果提供了 priceStep，优先选不小于它的最小档位（与官网一致，默认显示最细粒度）
  if (priceStep && new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(priceStep).gt(0)) {
    const target = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(priceStep);
    const found = steps.find(s => new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(s).gte(target));
    if (found) return found;
  }
  if (!price.gt(0)) return steps[0];
  const exp = Math.floor(Math.log10(price.toNumber()));
  const minUseful = Math.pow(10, exp - (price.gte(1000) ? 4 : 2));
  return steps.find(s => new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(s).gte(minUseful)) || steps[0];
}

// ===== HL l2 服务端聚合参数（参照 ave_web orderBook）=====

function approxEq(a, b) {
  if (!a.isFinite() || !b.isFinite()) return false;
  const tol = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a.max(b.abs().times(1e-6), 1e-12);
  return a.minus(b).abs().lte(tol);
}

/**
 * 推算价格数量级 exp。优先用静态步长档最小档反推（稳定），否则用 markPx。
 */
function resolvePriceExp(markPx, steps, staticSteps) {
  const trySteps = staticSteps !== null && staticSteps !== void 0 && staticSteps.length ? staticSteps : steps;
  if (trySteps && trySteps.length) {
    const minStep = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(trySteps[0] || '0');
    if (minStep.gt(0)) {
      return Math.round(Math.log10(minStep.toNumber())) + 4;
    }
  }
  const price = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a.isBigNumber(markPx) ? markPx : new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(markPx || '0');
  if (price.gt(0)) return Math.floor(Math.log10(price.toNumber()));
  return null;
}

/**
 * UI 步长 → HL l2 服务端聚合参数 { nSigFigs, mantissa? }
 * 映射不上时返回 null，由客户端 mergeDepthWithStep 兜底。
 */
function stepToHlL2BookAggregation(step, markPx, steps, staticSteps) {
  const stepBn = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(step || '0');
  if (!stepBn.gt(0)) return null;
  const exp = resolvePriceExp(markPx, steps, staticSteps);
  if (exp == null) return null;
  for (const mantissa of [1, 2, 5]) {
    const bucket = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(mantissa).times(Math.pow(10, exp - 4));
    if (approxEq(stepBn, bucket)) return {
      nSigFigs: 5,
      mantissa
    };
  }
  for (const nSigFigs of [4, 3, 2]) {
    const bucket = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(Math.pow(10, exp - nSigFigs + 1));
    if (approxEq(stepBn, bucket)) return {
      nSigFigs
    };
  }
  return null;
}

/**
 * 构造新版 l2 订阅：{ type:'l2', c, s?, m? }
 * 步长变化时带 s/m 重订，服务端按聚合档推送，避免客户端合并后档位变少。
 */
function buildHlL2Subscription(coin, step, markPx, steps, staticSteps) {
  const subscription = {
    type: 'l2',
    c: coin
  };
  const aggregation = stepToHlL2BookAggregation(step, markPx, steps, staticSteps);
  if (aggregation !== null && aggregation !== void 0 && aggregation.nSigFigs) subscription.s = aggregation.nSigFigs;
  // m=1 为默认值，可省略
  if (aggregation !== null && aggregation !== void 0 && aggregation.mantissa && aggregation.mantissa !== 1) subscription.m = aggregation.mantissa;
  return subscription;
}

/***/ }),

/***/ "./src/views/perp/index.vue":
/*!**********************************!*\
  !*** ./src/views/perp/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b91f8d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b91f8d60&scoped=true */ "./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/perp/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss */ "./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_b91f8d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-b91f8d60"],['__file',"src/views/perp/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/index.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/views/perp/index.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss":
/*!*******************************************************************************************!*\
  !*** ./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=style&index=0&id=b91f8d60&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_b91f8d60_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true":
/*!****************************************************************************!*\
  !*** ./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_b91f8d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=template&id=b91f8d60&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/index.vue?vue&type=template&id=b91f8d60&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_b91f8d60_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/perp/kLineChart.vue":
/*!***************************************!*\
  !*** ./src/views/perp/kLineChart.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kLineChart_vue_vue_type_template_id_c6a967de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=template&id=c6a967de&scoped=true */ "./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true");
/* harmony import */ var _kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=script&lang=js */ "./src/views/perp/kLineChart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss */ "./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss");
/* harmony import */ var _kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true */ "./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_kLineChart_vue_vue_type_template_id_c6a967de_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-c6a967de"],['__file',"src/views/perp/kLineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/kLineChart.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/perp/kLineChart.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=0&id=c6a967de&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_c6a967de_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=style&index=1&id=c6a967de&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_c6a967de_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_template_id_c6a967de_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=template&id=c6a967de&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/kLineChart.vue?vue&type=template&id=c6a967de&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_template_id_c6a967de_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/perp/perpInfo.vue":
/*!*************************************!*\
  !*** ./src/views/perp/perpInfo.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _perpInfo_vue_vue_type_template_id_40e1fbb3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true */ "./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true");
/* harmony import */ var _perpInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perpInfo.vue?vue&type=script&lang=js */ "./src/views/perp/perpInfo.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true */ "./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_perpInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_perpInfo_vue_vue_type_template_id_40e1fbb3_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-40e1fbb3"],['__file',"src/views/perp/perpInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/perpInfo.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/views/perp/perpInfo.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./perpInfo.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=style&index=0&id=40e1fbb3&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_style_index_0_id_40e1fbb3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_template_id_40e1fbb3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/perpInfo.vue?vue&type=template&id=40e1fbb3&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_perpInfo_vue_vue_type_template_id_40e1fbb3_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/perp/tabs/index.vue":
/*!***************************************!*\
  !*** ./src/views/perp/tabs/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_43809df3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=43809df3&scoped=true */ "./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/perp/tabs/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss */ "./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_43809df3_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-43809df3"],['__file',"src/views/perp/tabs/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/tabs/index.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/perp/tabs/index.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=style&index=0&id=43809df3&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_43809df3_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_43809df3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=template&id=43809df3&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/index.vue?vue&type=template&id=43809df3&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_43809df3_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/perp/tabs/orders.vue":
/*!****************************************!*\
  !*** ./src/views/perp/tabs/orders.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orders_vue_vue_type_template_id_30cc1094_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.vue?vue&type=template&id=30cc1094&scoped=true */ "./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true");
/* harmony import */ var _orders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.vue?vue&type=script&lang=js */ "./src/views/perp/tabs/orders.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true */ "./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_orders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_orders_vue_vue_type_template_id_30cc1094_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-30cc1094"],['__file',"src/views/perp/tabs/orders.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/tabs/orders.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/perp/tabs/orders.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./orders.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=style&index=0&id=30cc1094&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_style_index_0_id_30cc1094_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_template_id_30cc1094_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./orders.vue?vue&type=template&id=30cc1094&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/orders.vue?vue&type=template&id=30cc1094&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_orders_vue_vue_type_template_id_30cc1094_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/perp/tabs/recentTrades.vue":
/*!**********************************************!*\
  !*** ./src/views/perp/tabs/recentTrades.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recentTrades_vue_vue_type_template_id_5b87e3b9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true */ "./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true");
/* harmony import */ var _recentTrades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recentTrades.vue?vue&type=script&lang=js */ "./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss */ "./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_recentTrades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_recentTrades_vue_vue_type_template_id_5b87e3b9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-5b87e3b9"],['__file',"src/views/perp/tabs/recentTrades.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./recentTrades.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=style&index=0&id=5b87e3b9&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_style_index_0_id_5b87e3b9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_template_id_5b87e3b9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/perp/tabs/recentTrades.vue?vue&type=template&id=5b87e3b9&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_recentTrades_vue_vue_type_template_id_5b87e3b9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);