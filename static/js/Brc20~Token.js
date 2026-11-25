(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Brc20~Token"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/index.js */ "./src/api/index.js");
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");
/* harmony import */ var technicalindicators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! technicalindicators */ "./node_modules/technicalindicators/lib/index.js");
/* harmony import */ var finmath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! finmath */ "./node_modules/finmath/src/index.js");
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/index.mjs");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_unknownRisk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/unknownRisk */ "./src/components/unknownRisk.vue");
/* harmony import */ var _constants_walletDetail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/constants/walletDetail */ "./src/constants/walletDetail.js");
/* harmony import */ var _utils_kline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/utils/kline */ "./src/utils/kline.js");










// import { createChart, isBusinessDay } from '@/assets/js/lightweight-charts.esm.production.js'








let chart = null;
let candlestickSeries = null;
let volumeSeries = null;
let smaLine1 = null;
let smaLine2 = null;
let smaLine3 = null;
let maxMinMarkers = [];
let buySellMarkers = [];
let autoSeriesMarkers = [];
let profilingLogoMarks = [];
let macdBar = null;
let macdDiFLine = null;
let macdDeaLine = null;
let rsiLine = null;
let kdjKLine = null;
let kdjDLine = null;
let kdjJLine = null;
let migratePriceLine = null;
let profilingFetchSeq = 0;

/**
 * K 线取数的并发与去重状态。都是模块级的：同一时刻页面上只有一张主图，
 * 换币/换周期/详情落定会各触发一发，谁迟到谁作废靠 seq，谁重复靠指纹。
 */
let klineFetchSeq = 0;
/** 已经画在图上的那份数据的指纹 */
let klineFetchKey = '';
/** 用响应里后端实际选的池补出来的等价指纹（抢跑按 token 查，详情落定后按池查） */
let klineFetchKeyAlt = '';
/** 正在飞的那一发的指纹，挡住同一份数据的并发重复请求 */
let klineInflightKey = '';
/** 上面那个指纹是哪一发占的：只有它自己结束时才能清，不然会替后来者清掉标记 */
let klineInflightSeq = 0;

/** chartData 的版本号，指标缓存与蜡烛价格索引都按它失效 */
let klineDataVersion = 0;
function bumpKlineDataVersion() {
  klineDataVersion++;
}

/** 与首批蜡烛并行发出去的那一发打点，等 chartData 落地后由 loadProfilingMarks 认领 */
let profilingPrefetch = null;
/**
 * 后端这一发实际给的作用域。
 *
 * 按 token 查、但回来的是单池线（`aggr_rsp !== 1`）时，图上画的是那一个池的蜡烛 ——
 * 打点也必须按那个池查。否则一个不支持聚合、却有多个池的币，会把别的池的点
 * 混着画到这个池的蜡烛上。为空表示「按请求时的身份查就行」。
 */
let klineServedScope = null;

/** 最近一次灌进图表的（时区已换算的）数据，切底部指标时不用重新算一遍 */
let localBars = [];
/** 哪些底部指标已经用当前 localBars 灌过 —— 隐藏的那几个一律不算 */
let bottomStudyFilled = {};
/** 底部指标结果缓存，供 setDefaultToolTipValue 复用，避免同一批数据算两遍 */
const indicatorCache = {
  MACD: {
    v: -1,
    d: null
  },
  RSI: {
    v: -1,
    d: null
  },
  KDJ: {
    v: -1,
    d: null
  }
};
/** 桶时间 -> 最高价 的索引，打点定位用；以前每个打点都要线性扫一遍 chartData */
let bucketPriceIndex = {
  v: -1,
  interval: 0,
  map: null
};
/** 攒住派生曲线重算的那一帧：推送可能一秒来几十笔，每笔都重算是纯浪费 */
let studyRefreshRaf = null;
let profilingPushRefreshTimer = null;
let publicPortraitSubParams = null;
const PORTRAIT_PUSH_TYPES = ['25', '30', '31'];
const LOGO_MARK_SIZE_MIN = 16;
const LOGO_MARK_SIZE_MAX = 38;
const LOGO_MARK_SIZE_DEFAULT = 18;
const LOGO_MARK_OFFSET = 4;
const LOGO_MARK_GAP = 1;
function getLogoMarkSize() {
  if (!chart) return LOGO_MARK_SIZE_DEFAULT;
  try {
    const ts = chart.timeScale();
    const range = ts.getVisibleLogicalRange();
    const plotWidth = ts.width() || 0;
    let barSpacing = LOGO_MARK_SIZE_DEFAULT;
    // options().barSpacing 是初始值，缩放后不会更新；用可见逻辑区间反推柱宽
    if (range && plotWidth > 0) {
      const bars = Math.max(1, range.to - range.from);
      barSpacing = plotWidth / bars;
    }
    const size = Math.round(barSpacing * 0.8);
    return Math.min(LOGO_MARK_SIZE_MAX, Math.max(LOGO_MARK_SIZE_MIN, size));
  } catch (e) {
    return LOGO_MARK_SIZE_DEFAULT;
  }
}
const DEFAULT_MARK_TABS = {
  '25': true,
  // DEV
  '31': true,
  // KOL
  '30': false,
  // 聪明钱
  '-201': false // 信号
};
const SIGNAL_MARK_SVG = `data:image/svg+xml,${encodeURIComponent('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="12" fill="#FFA622"/><path d="M12.8584 12.9404L13.7168 20.667H10.2832L11.1416 12.9404H12.8584ZM12 4.08203C16.418 4.08204 19.9995 7.66417 20 12.082C20 14.7495 18.6925 17.1099 16.6855 18.5635L15.6904 16.873C17.1241 15.7669 18.0488 14.0328 18.0488 12.082C18.0484 8.7418 15.3403 6.03322 12 6.0332C8.65966 6.03322 5.95165 8.7418 5.95117 12.082C5.95118 14.0433 6.88519 15.7864 8.33203 16.8916L7.34961 18.5889C5.32272 17.1375 4.00001 14.7651 4 12.082C4.00048 7.66417 7.58203 4.08204 12 4.08203ZM12 7.2041C14.6937 7.20415 16.8775 9.38839 16.8779 12.082C16.8779 13.6026 16.1813 14.9599 15.0908 15.8545L14.0811 14.1377C14.6031 13.6091 14.9268 12.8836 14.9268 12.082C14.9263 10.466 13.6161 9.15532 12 9.15527C10.3839 9.15532 9.07371 10.466 9.07324 12.082C9.07324 12.8861 9.39796 13.6146 9.92285 14.1436L8.9248 15.8682C7.82514 14.9738 7.12207 13.61 7.12207 12.082C7.12253 9.38839 9.30626 7.20415 12 7.2041Z" fill="white"/></svg>')}`;
function createTypeMarkSvg(type, isBuy) {
  const colors = {
    '25': {
      buy: '#B682FF',
      sell: '#9B5DE5',
      label: 'D'
    },
    '30': {
      buy: '#0D6EFD',
      sell: '#FD3E3E',
      label: 'M'
    },
    '31': {
      buy: '#12B886',
      sell: '#F6465D',
      label: 'K'
    }
  };
  const meta = colors[String(type)] || {
    buy: '#12B886',
    sell: '#F6465D',
    label: '·'
  };
  const fill = isBuy ? meta.buy : meta.sell;
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="${fill}"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-family="Arial,sans-serif" font-weight="700" fill="#fff">${meta.label}</text></svg>`)}`;
}
function loadMarkTabsChecked() {
  try {
    const savedV3 = localStorage.getItem('m_markTabsChecked_v3');
    if (savedV3) {
      return {
        ...DEFAULT_MARK_TABS,
        ...JSON.parse(savedV3)
      };
    }
    // 切换默认：仅 DEV / KOL，写入 v3
    localStorage.setItem('m_markTabsChecked_v3', JSON.stringify(DEFAULT_MARK_TABS));
  } catch (e) {/* ignore */}
  return {
    ...DEFAULT_MARK_TABS
  };
}
function normalizeKlineTimeSec(time) {
  const n = Number(time || 0);
  if (!n) return 0;
  return String(Math.trunc(n)).length > 10 ? Math.floor(n / 1000) : Math.floor(n);
}
function getBucketTime(time, interval) {
  const t = normalizeKlineTimeSec(time);
  const iv = Number(interval) || 1;
  return Math.floor(t / iv) * iv;
}
function isImageLogo(url) {
  if (!url || typeof url !== 'string') return false;
  return ['.png', '.jpg', '.jpeg', '.gif', '.webp', 'data:image'].some(ext => url.includes(ext));
}
function getBarStartTime(txTimeMs, interval) {
  const ONE_WEEK_SEC = 604800;
  if (interval === ONE_WEEK_SEC) {
    const date = new Date(txTimeMs);
    const utcMidnight = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const day = utcMidnight.getUTCDay();
    const diffToMonday = (day + 6) % 7;
    utcMidnight.setUTCDate(utcMidnight.getUTCDate() - diffToMonday);
    return utcMidnight.getTime();
  }
  return Math.floor(txTimeMs / (interval * 1000)) * interval * 1000;
}
function buildOrUpdateLastBarFromTx(tx, tokenAddress, lastBar, intervalInSeconds) {
  const address = tokenAddress.toLowerCase();
  const txTimeMs = tx.time * 1000;
  let price, volume;
  if ('target' in tx) {
    if (tx.target.toLowerCase() === address) {
      price = parseFloat(tx.target_price_u);
      volume = parseFloat(new bignumber_js__WEBPACK_IMPORTED_MODULE_14___default.a(tx.target_price_u || 0).times(tx.target_amt || 0).toFixed());
    } else {
      return null;
    }
  } else {
    if (tx.from_address && tx.from_address.toLowerCase() === address) {
      price = parseFloat(tx.from_price_usd);
      volume = parseFloat(tx.amount_usd);
    } else if (tx.to_address && tx.to_address.toLowerCase() === address) {
      price = parseFloat(tx.to_price_usd);
      volume = parseFloat(tx.amount_usd);
    } else {
      return null;
    }
  }
  const interval = Number(intervalInSeconds);
  const barStartTime = getBarStartTime(txTimeMs, interval);
  if (lastBar && txTimeMs < lastBar.time) return null;
  if (!lastBar) {
    return {
      time: barStartTime,
      open: price,
      high: price,
      low: price,
      close: price,
      volume
    };
  }
  if (lastBar.time < barStartTime) {
    return {
      time: barStartTime,
      open: lastBar.close,
      high: Math.max(lastBar.close, price),
      low: Math.min(lastBar.close, price),
      close: price,
      volume
    };
  }
  return {
    ...lastBar,
    high: Math.max(lastBar.high, price),
    low: Math.min(lastBar.low, price),
    close: price,
    volume: lastBar.volume + volume
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'KLineChart',
  components: {
    ElSwitch: element_plus__WEBPACK_IMPORTED_MODULE_13__["ElSwitch"],
    UnknownRisk: _components_unknownRisk__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
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
      // 走和抢跑同一份校验：存过一个已下架的周期会让 KLINE_WINDOW 查不到，
      // 既算出 from=NaN，也让抢跑的 key 永远对不上（等于每个币白发两次）。
      // 秒级链降级不在这里做 —— tradingView 里有，且那会儿才拿得到链
      resolution: Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["storedResolution"])(),
      chartData: [],
      lastBar: null,
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
      Timer_kline: null,
      TimeRangeChange: null,
      activeStudy: 'MA',
      studyList: ['MA', 'EMA', 'BOLL'],
      activeStudyBottom: 'VOL',
      studyBottomList: ['VOL', 'MACD', 'KDJ', 'RSI'],
      showSwapKline: localStorage.showSwapKline ? JSON.parse(localStorage.showSwapKline) : true,
      buySellMarkers: [],
      markTabsChecked: loadMarkTabsChecked(),
      markDetailVisible: false,
      markDetail: null,
      mode: localStorage.getItem('switchMode') || 'price',
      dialogVisible: false,
      migrated: null,
      // K 线响应里的 extra_data，自己留一份：store 那份会被详情整体覆盖
      klineExtra: null,
      lastPairPrice: 0,
      basePriceForChange: 0
    };
  },
  computed: {
    SupportFullDataChain() {
      return this.$store.state.supportFullDataChain || [];
    },
    modeName() {
      let o = this.listMode.find(i => this.mode == i.value);
      return o.label;
    },
    listMode() {
      return [{
        label: this.$t('price'),
        value: 'price'
      }, {
        label: this.$t('mcap'),
        value: 'mcap'
      }];
    },
    markTabList() {
      return [{
        id: '25',
        name: 'DEV'
      }, {
        id: '31',
        name: 'KOL'
      }, {
        id: '30',
        name: this.$t('smarter')
      }, {
        id: '-201',
        name: this.$t('signal')
      }];
    },
    resolutionList() {
      var _this$$store$state, _this$$store$state2;
      let chain = this.$f.getAddressAndChainFromId((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.id).chain || ((_this$$store$state2 = this.$store.state) === null || _this$$store$state2 === void 0 || (_this$$store$state2 = _this$$store$state2.pair) === null || _this$$store$state2 === void 0 ? void 0 : _this$$store$state2.chain);
      let isSupportSecChains = chain && _utils_kline__WEBPACK_IMPORTED_MODULE_17__["supportSecChains"].includes(chain);
      return [...(isSupportSecChains ? [{
        label: this.$t('1s'),
        value: 's1'
      }] : []), {
        label: this.$t('1min'),
        value: '1'
      }, {
        label: this.$t('5min'),
        value: '5'
      }, {
        label: this.$t('15min'),
        value: '15'
      }, {
        label: this.$t('30min'),
        value: '30'
      }, {
        label: this.$t('1h'),
        value: '60'
      }, {
        label: this.$t('2h'),
        value: '120'
      }, {
        label: this.$t('4h'),
        value: '240'
      }, {
        label: this.$t('1d'),
        value: '1440'
      }, {
        label: this.$t('1w'),
        value: '10080'
      }];
    },
    resolutionListUp() {
      if (this.$f.isNewData(this.$store.state.id)) {
        return this.resolutionList.filter(i => i.value !== '15' && i.value !== '120' && i.value !== '10080') || [];
      } else {
        return this.resolutionList.filter(i => i.value !== '10' && i.value !== '120' && i.value !== '10080') || [];
      }
    },
    resolutionListDown() {
      if (this.$f.isNewData(this.$store.state.id)) {
        return this.resolutionList.filter(i => i.value === '15' || i.value === '120' || i.value === '10080') || [];
      } else {
        return this.resolutionList.filter(i => i.value === '10' || i.value === '120' || i.value === '10080') || [];
      }
    },
    klineParams() {
      return this.$store.state.wsKlineParams;
    },
    myTxHistoryList() {
      var _this$$store$state$my;
      return ((_this$$store$state$my = this.$store.state.myTxHistoryList) === null || _this$$store$state$my === void 0 ? void 0 : _this$$store$state$my.filter(i => i.pair_address)) || [];
    },
    tokenAddress() {
      return this.$store.state.id ? (_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__["MAIN_COIN"][this.$store.state.id] || this.$store.state.id).split('-')[0] : '';
    },
    chain() {
      return this.$store.state.id ? (_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__["MAIN_COIN"][this.$store.state.id] || this.$store.state.id).split('-')[1] : '';
    },
    tokenInfo() {
      return this.$store.state.tokenInfo;
    },
    circulation() {
      var _this$tokenInfo, _this$tokenInfo2, _this$tokenInfo3, _this$tokenInfo4;
      let circulation = new bignumber_js__WEBPACK_IMPORTED_MODULE_14___default.a((_this$tokenInfo = this.tokenInfo) === null || _this$tokenInfo === void 0 ? void 0 : _this$tokenInfo.total).minus((_this$tokenInfo2 = this.tokenInfo) === null || _this$tokenInfo2 === void 0 ? void 0 : _this$tokenInfo2.lock_amount_dec).minus((_this$tokenInfo3 = this.tokenInfo) === null || _this$tokenInfo3 === void 0 ? void 0 : _this$tokenInfo3.other_amount_dec).minus((_this$tokenInfo4 = this.tokenInfo) === null || _this$tokenInfo4 === void 0 ? void 0 : _this$tokenInfo4.burn_amount_dec);
      return circulation.lt(0) ? 0 : circulation;
    }
  },
  watch: {
    '$store.state.id'(val) {
      // 换币：上一个币的这些状态一律作废。打点在这里自己清 —— tradingView 在
      // id 为空时会先返回，指望不上它；而换币必然意味着旧打点无效，
      // 不像 pair/isTokenKline 那两条路可能只是同一份数据的重复触发
      profilingLogoMarks = [];
      this.syncProfilingLogoLayer();
      this.resetKlineFetchKey();
      this.klineExtra = null;
      this.migrated = null;
      this.basePriceForChange = 0;
      klineServedScope = null;
      this.subscribePublicPortrait();
      this.tradingView();
    },
    '$store.state.pair.value'(val) {
      // 详情落定。多半和抢跑那一发是同一份数据，重复的那次由 tradingView 的指纹挡掉
      // （打点也不在这里清 —— 真发请求时才清，否则会把抢跑刚画好的打点白白抹掉）
      if (val) {
        this.subscribePublicPortrait();
        this.tradingView();
        // tradingView 很可能被指纹挡掉，这两样得自己来
        this.syncPriceChangeBase();
        this.reapplyKlineExtra();
      }
    },
    '$store.state.isTokenKline'() {
      this.subscribePublicPortrait();
      this.tradingView();
      // 抢跑的那一发落地时 isTokenKline 还是 false，这几样这时才补得上
      this.syncPriceChangeBase();
      this.reapplyKlineExtra();
      this.applyMigratedFallback();
    },
    '$store.state.ws.isConnected'(val) {
      if (val) this.subscribePublicPortrait();
    },
    // 详情落定后 tokenInfo 才有 migrate_*，而 isTokenKline 可能本来就是 true
    // （keepAlive 回到同一个币），那种情况下面那个 watch 不会触发
    '$store.state.tokenInfo.migrate_time'() {
      this.applyMigratedFallback();
    },
    '$store.state.ws.public_portrait'(msgs) {
      this.handlePublicPortraitPush(msgs);
    },
    resolution(val) {
      localStorage.setItem('resolution', val);
      this.tradingView();
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
    '$store.state.currentAccount'(val) {
      if (!val) {
        this.$store.commit('setState', {
          name: 'myTxHistoryList',
          value: []
        });
        buySellMarkers = [];
      }
      this.showSwapKline = localStorage.showSwapKline ? JSON.parse(localStorage.showSwapKline) : true, this.setMarkersData();
    },
    'myTxHistoryList': {
      handler: function (val) {
        if (this.$store.state.currentAccount !== '' && val.length > 0) {
          this.setMarkersData();
        }
      },
      deep: true
    },
    activeStudy(val) {
      if (val) {
        this.setData();
      }
    },
    activeStudyBottom(val) {
      if (val) {
        // 隐藏的指标是空的（setData 只灌可见那个），切过来时先补上
        this.applyBottomStudy();
        // 底部图例的尾值也只存了当前那个指标的，一并刷新，
        // 否则切过去要等 hover 或下一批数据才有数
        this.setDefaultToolTipValue();
        this.switchRightStudy(val);
      }
    },
    '$store.state.ws.simple_tx_v2'(tx) {
      this.handleAggrTx(tx);
    },
    '$store.state.ws.tx'(tx) {
      this.handleAggrTx(tx);
    },
    '$store.state.ws.switch_main_pair_v2'(val) {
      if (!this.$store.state.isTokenKline) return;
      if (!(val !== null && val !== void 0 && val.new_main_pair_data)) return;
      let {
        address
      } = this.$f.getAddressAndChainFromId(this.$store.state.id);
      if (!address) return;
      let npd = val.new_main_pair_data;
      if (npd.target_token !== address) return;
      let migratePrice = npd.target_token === npd.token0_address ? npd.token0_price_usd : npd.token1_price_usd;
      let migrateTime = npd.blocktime;
      if (migratePrice && migrateTime) {
        let mt = Math.floor(migrateTime);
        let interval = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution);
        let barTime = Math.floor(mt / Number(interval)) * Number(interval) * 1000;
        this.migrated = {
          time: barTime,
          migratePrice: migratePrice,
          migrateTime: migrateTime
        };
        this.setMarkersData();
        // this.createMigratePriceLine()
      }
    }
  },
  mounted() {
    this.initChart();
    this.bindVisibility();
    this.subscribePublicPortrait();
  },
  beforeUnmount() {
    if (studyRefreshRaf) {
      cancelAnimationFrame(studyRefreshRaf);
      studyRefreshRaf = null;
    }
    this.unsubscribePublicPortrait();
    if (profilingPushRefreshTimer) {
      clearTimeout(profilingPushRefreshTimer);
      profilingPushRefreshTimer = null;
    }
  },
  beforeRouteLeave() {
    document.onvisibilitychange = null;
  },
  methods: {
    normalizeTimeToMs(t) {
      if (!t) return 0;
      return String(t).length === 10 ? t * 1000 : t;
    },
    initLastBar() {
      if (this.chartData.length > 0) {
        let last = this.chartData[this.chartData.length - 1];
        this.lastBar = {
          time: this.normalizeTimeToMs(last.time),
          open: Number(last.open),
          high: Number(last.high),
          low: Number(last.low),
          close: Number(last.close),
          volume: Number(last.value || last.volume || 0)
        };
        this.lastPairPrice = Number(last.close) || 0;
      } else {
        this.lastBar = null;
      }
    },
    handleAggrTx(tx) {
      var _this$$store$state$to, _this$$store$state$pa;
      if (!tx || !tx.time) return;
      let txVolume = 'target' in tx ? Math.abs(Number(tx.target_price_u || 0) * Number(tx.target_amt || 0)) : Number(tx.amount_usd || 0);
      if (txVolume < 0.001) return;
      let {
        address
      } = this.$f.getAddressAndChainFromId(this.$store.state.id);
      if (!address) return;
      let addressLower = address.toLowerCase();
      let target = '';
      let _price = 0;
      if ('target' in tx) {
        target = tx.target;
        if (target.toLowerCase() === addressLower) {
          _price = Number(tx.target_price_u || 0);
        }
      } else {
        target = [tx.from_address, tx.to_address].find(i => i && i.toLowerCase() === addressLower) || '';
        if (tx.from_address && tx.from_address.toLowerCase() === addressLower) {
          _price = Number(tx.from_price_usd || 0);
        } else if (tx.to_address && tx.to_address.toLowerCase() === addressLower) {
          _price = Number(tx.to_price_usd || 0);
        }
      }
      if (!target || target.toLowerCase() !== addressLower) return;
      let _pair = ('pair' in tx ? tx.pair : tx.pair_address) || '';
      let pair1 = (this.$store.state.isTokenKline ? (_this$$store$state$to = this.$store.state.tokenInfo) === null || _this$$store$state$to === void 0 || (_this$$store$state$to = _this$$store$state$to.pairs) === null || _this$$store$state$to === void 0 || (_this$$store$state$to = _this$$store$state$to[0]) === null || _this$$store$state$to === void 0 ? void 0 : _this$$store$state$to.pair : (_this$$store$state$pa = this.$store.state.pair) === null || _this$$store$state$pa === void 0 ? void 0 : _this$$store$state$pa.address) || '';
      let pairMatch = _pair.toLowerCase() === pair1.toLowerCase();
      if (pairMatch) {
        this.lastPairPrice = _price;
      }
      if (tx.tag === 'PairNoiseTx' || tx.tag === 'TokenNoiseTx') return;
      if (!pairMatch) {
        var _this$$store$state$to2;
        let currentPairInfo = (_this$$store$state$to2 = this.$store.state.tokenInfo) === null || _this$$store$state$to2 === void 0 || (_this$$store$state$to2 = _this$$store$state$to2.pairs) === null || _this$$store$state$to2 === void 0 ? void 0 : _this$$store$state$to2.find(i => {
          var _i$pair;
          return ((_i$pair = i.pair) === null || _i$pair === void 0 ? void 0 : _i$pair.toLowerCase()) === _pair.toLowerCase();
        });
        if (currentPairInfo && !Number(currentPairInfo.reserve0) && !Number(currentPairInfo.reserve1)) {
          return;
        }
        if (this.lastPairPrice && Math.abs(_price - this.lastPairPrice) > this.lastPairPrice * 0.15) {
          return;
        }
      }
      let interval = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution);
      let newBar = buildOrUpdateLastBarFromTx(tx, address, this.lastBar, interval);
      if (!newBar) return;
      this.lastBar = {
        ...newBar
      };
      let price = newBar.close;
      if (price > 0) {
        this.$store.commit('setTokenInfoPrice', price);
        if (this.basePriceForChange > 0) {
          let change = (price - this.basePriceForChange) / this.basePriceForChange * 100;
          this.$store.commit('setTokenInfoPriceChange', change);
        }
      }
      let i = {
        time: newBar.time,
        open: newBar.open,
        high: newBar.high,
        low: newBar.low,
        close: newBar.close,
        value: newBar.volume,
        color: newBar.open <= newBar.close ? this.$store.getters.upColor[0] : this.$store.getters.downColor[0]
      };
      let last = this.chartData[(this.chartData.length || 0) - 1] || {};
      let lastTime = this.normalizeTimeToMs((last === null || last === void 0 ? void 0 : last.time) || 0);
      if (this.chartData.length === 0 || i.time > lastTime) {
        this.chartData.push(i);
      } else if (this.chartData.length > 0 && lastTime === i.time) {
        this.chartData.pop();
        this.chartData.push(i);
      } else {
        // 推送落在更早的桶里，图上没什么要改的
        return;
      }
      this.updateLastBarOnChart(i);
    },
    switchMode() {
      var _this$chart;
      localStorage.setItem('switchMode', this.mode);
      (_this$chart = this.chart) === null || _this$chart === void 0 || _this$chart.remove(); // 销毁重建
      this.initChart(); // 指纹在 initChart 里作废
      // this.initTradingView()
    },
    initTradingView() {
      this.tradingView(true);
    },
    handleFlattenChange(val) {
      localStorage.showSwapKline = JSON.stringify(val);
      this.setMarkersData();
    },
    onMarkTabChange() {
      this.$nextTick(() => {
        localStorage.setItem('m_markTabsChecked_v3', JSON.stringify(this.markTabsChecked));
        this.loadProfilingMarks();
      });
    },
    unsubscribePublicPortrait() {
      if (!publicPortraitSubParams) return;
      this.$store.commit('wsSend', {
        jsonrpc: '2.0',
        method: 'unsubscribe',
        params: ['public_portrait'],
        id: 1
      });
      publicPortraitSubParams = null;
    },
    subscribePublicPortrait() {
      var _this$$store$state$ws;
      this.unsubscribePublicPortrait();
      const id = this.$store.state.id;
      if (!id || !((_this$$store$state$ws = this.$store.state.ws) !== null && _this$$store$state$ws !== void 0 && _this$$store$state$ws.isConnected)) return;
      const {
        address,
        chain
      } = this.$f.getAddressAndChainFromId(id);
      if (!address || !chain) return;
      const params = ['public_portrait', address, chain];
      this.$store.commit('wsSend', {
        jsonrpc: '2.0',
        method: 'subscribe',
        params,
        id: 1
      });
      publicPortraitSubParams = params;
    },
    isSamePortraitToken(pushToken, currentToken, chainName) {
      if (!pushToken || !currentToken) return true;
      if (chainName === 'solana' || chainName === 'ton') {
        return pushToken === currentToken;
      }
      return String(pushToken).toLowerCase() === String(currentToken).toLowerCase();
    },
    getPortraitTypeIds(item) {
      const makerTypes = String((item === null || item === void 0 ? void 0 : item.maker_type) || '').split(',').filter(Boolean);
      const tagTypes = ((item === null || item === void 0 ? void 0 : item.new_tags) || []).map(tag => {
        var _tag$type;
        return String((_tag$type = tag === null || tag === void 0 ? void 0 : tag.type) !== null && _tag$type !== void 0 ? _tag$type : '');
      }).filter(Boolean);
      return [...new Set([...makerTypes, ...tagTypes])];
    },
    getMatchedPushPortraitTypes(item) {
      const typeIds = this.getPortraitTypeIds(item);
      return PORTRAIT_PUSH_TYPES.filter(typeId => {
        var _this$markTabsChecked;
        return ((_this$markTabsChecked = this.markTabsChecked) === null || _this$markTabsChecked === void 0 ? void 0 : _this$markTabsChecked[typeId]) && typeIds.includes(String(typeId));
      });
    },
    buildPortraitMarkFromPush(item, typeId) {
      var _item$amount, _item$volume;
      const holderData = {
        amount: String((_item$amount = item.amount) !== null && _item$amount !== void 0 ? _item$amount : ''),
        tx_time: normalizeKlineTimeSec(item.time),
        txid: item.txid,
        txns: '1',
        volume: String((_item$volume = item.volume) !== null && _item$volume !== void 0 ? _item$volume : '')
      };
      return {
        data_type: 'holders',
        type: typeId,
        holders: [{
          buy: item.direction === 'buy' ? holderData : undefined,
          remark: item.remark || '',
          sell: item.direction === 'sell' ? holderData : undefined,
          wallet_address: item.wallet_address || '',
          wallet_logo: item.wallet_logo || {}
        }],
        time: normalizeKlineTimeSec(item.time)
      };
    },
    upsertProfilingLogoMarks(newMarks) {
      if (!Array.isArray(newMarks) || !newMarks.length) return false;
      const map = new Map();
      profilingLogoMarks.forEach(m => {
        const key = m.dedupKey || m.id;
        map.set(key, m);
      });
      let changed = false;
      newMarks.forEach(m => {
        var _prev$items, _m$items;
        const key = m.dedupKey || m.id;
        const prev = map.get(key);
        if (!prev) {
          map.set(key, m);
          changed = true;
          return;
        }
        const prevItem = ((_prev$items = prev.items) === null || _prev$items === void 0 ? void 0 : _prev$items[0]) || {};
        const nextItem = ((_m$items = m.items) === null || _m$items === void 0 ? void 0 : _m$items[0]) || {};
        const amount = Number(prevItem.amount || 0) + Number(nextItem.amount || 0);
        const volume = Number(prevItem.volume || 0) + Number(nextItem.volume || 0);
        const txns = Number(prevItem.txns || 0) + Number(nextItem.txns || 0);
        map.set(key, {
          ...m,
          items: [{
            ...nextItem,
            amount,
            volume,
            txns,
            avgPrice: amount ? volume / amount : 0
          }]
        });
        changed = true;
      });
      if (changed) {
        profilingLogoMarks = Array.from(map.values());
      }
      return changed;
    },
    scheduleProfilingMarksRefresh() {
      if (profilingPushRefreshTimer) clearTimeout(profilingPushRefreshTimer);
      profilingPushRefreshTimer = setTimeout(() => {
        profilingPushRefreshTimer = null;
        this.loadProfilingMarks();
      }, 200);
    },
    handlePublicPortraitPush(msgs) {
      var _this$chartData;
      if (!Array.isArray(msgs) || !msgs.length) return;
      if (!((_this$chartData = this.chartData) !== null && _this$chartData !== void 0 && _this$chartData.length)) return;
      const {
        address,
        chain
      } = this.$f.getAddressAndChainFromId(this.$store.state.id);
      if (!address) return;
      const filtered = msgs.filter(el => this.isSamePortraitToken(el.token, address, chain) && (!chain || !el.chain || el.chain === chain) && this.getMatchedPushPortraitTypes(el).length > 0);
      if (!filtered.length) return;
      let newMarks = [];
      filtered.forEach(item => {
        this.getMatchedPushPortraitTypes(item).forEach(typeId => {
          const apiItem = this.buildPortraitMarkFromPush(item, typeId);
          newMarks = newMarks.concat(this.formatProfilingToLogoMarks([apiItem], typeId));
        });
      });
      if (this.upsertProfilingLogoMarks(newMarks)) {
        this.syncProfilingLogoLayer();
      }
      this.scheduleProfilingMarksRefresh();
    },
    getMarkLogoPrefix() {
      var _this$$store$state$av;
      let url = ((_this$$store$state$av = this.$store.state.ave_globalConfig) === null || _this$$store$state$av === void 0 ? void 0 : _this$$store$state$av.token_logo_url) || 'https://www.iconaves.com/';
      if (typeof url !== 'string' || !url) url = 'https://www.iconaves.com/';
      if (!url.endsWith('/')) url += '/';
      return url;
    },
    getTypeMarkImageUrl(type, isBuy) {
      // 优先 CDN，失败时由 img.onerror 回退到本地 SVG
      return `${this.getMarkLogoPrefix()}signals/marks/mark-${isBuy ? 'buy' : 'sell'}-${type}.png`;
    },
    /**
     * 桶时间 -> 该桶最高价。按 chartData 版本缓存。
     *
     * 以前 `getCandlePriceAtBucket` 每次都 `chartData.find(...)` 线性扫一遍，
     * 而它是**每个打点**调一次的 —— 几百根蜡烛配上几十个打点就是上万次比较，
     * 全压在首屏画完那一帧里。
     */
    ensureBucketPriceIndex(interval) {
      if (bucketPriceIndex.v === klineDataVersion && bucketPriceIndex.interval === interval && bucketPriceIndex.map) {
        return bucketPriceIndex.map;
      }
      const map = new Map();
      for (let i = 0; i < this.chartData.length; i++) {
        const bar = this.chartData[i];
        const bucket = getBucketTime(bar.time, interval);
        const high = Number(bar.high);
        const cur = map.get(bucket);
        if (cur === undefined || high > cur) {
          map.set(bucket, high);
        }
      }
      bucketPriceIndex = {
        v: klineDataVersion,
        interval,
        map
      };
      return map;
    },
    getCandlePriceAtBucket(bucketTime) {
      const interval = Number(Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution));
      // 买卖打点都显示在上方，锚定最高价
      const hit = this.ensureBucketPriceIndex(interval).get(bucketTime);
      if (hit !== undefined) {
        return hit;
      }
      // 推送可能早于 K 线落库：回退到最新柱 / lastBar
      if (this.lastBar) {
        const lbTimeSec = normalizeKlineTimeSec(this.lastBar.time);
        if (getBucketTime(lbTimeSec, interval) === bucketTime) {
          return Number(this.lastBar.high || this.lastBar.close);
        }
      }
      return null;
    },
    /** 当前勾选的打点类型，排序后当缓存键的一部分 */
    checkedMarkTypes() {
      return Object.keys(this.markTabsChecked).filter(k => this.markTabsChecked[k]).sort();
    },
    /** 打点查询的归集键：按 token 查还是按 pair 查必须与蜡烛那一发同源 */
    profilingScopeKey(identity, interval, types) {
      return [interval, types.join(','), identity.pair_id || '', identity.token_id || ''].join('|');
    },
    fetchProfilingMarks(types, query) {
      return Promise.all(types.map(type => Object(_api_index_js__WEBPACK_IMPORTED_MODULE_9__["getKlineProfilingTagsV2"])({
        ...query,
        type
      }).then(res => ({
        type,
        data: res || []
      }))));
    },
    /**
     * 把打点请求和首批蜡烛并排发出去。
     *
     * 打点的**渲染**必须等 chartData（要按蜡烛取锚定价），但请求不用等 ——
     * 以前是在 K 线的 then 里才发，两条往返完全串行，打点整整晚一个 RTT。
     * 这里只把网络那段提前，结果挂在 profilingPrefetch 上等 loadProfilingMarks 认领。
     *
     * 右端取「现在」而不是最后一根蜡烛的时间：前者不用等响应就知道，且是超集。
     */
    prefetchProfilingMarks(from, identity) {
      profilingPrefetch = null;
      const types = this.checkedMarkTypes();
      if (!types.length) return;
      if (!identity.pair_id && !identity.token_id) return;
      // 作用域拿不准就别预取。按 token 查、又关着聚合时，后端很可能回单池线，
      // 那样打点得按 res.pair 重查一遍（见 klineServedScope），预取的这发就白发了 ——
      // 与其多打一轮请求，不如这一种情况老实串行发一次。
      // 另外两种情况作用域是确定的：按池查本来就确定；开着聚合按 token 查回来的
      // 基本都是聚合线，consume 时键能对上。
      if (!identity.pair_id && localStorage.aggrKlineEnabled !== '1') return;
      const interval = String(Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution));
      const scope = identity.pair_id ? {
        pair_id: identity.pair_id
      } : {
        token_id: identity.token_id
      };
      profilingPrefetch = {
        key: this.profilingScopeKey(identity, interval, types),
        promise: this.fetchProfilingMarks(types, {
          from,
          to: Math.floor(Date.now() / 1000),
          interval,
          ...scope
        })
      };
    },
    loadProfilingMarks() {
      var _this$chartData2;
      if (!((_this$chartData2 = this.chartData) !== null && _this$chartData2 !== void 0 && _this$chartData2.length)) {
        profilingLogoMarks = [];
        this.syncProfilingLogoLayer();
        return;
      }
      const types = this.checkedMarkTypes();
      if (!types.length) {
        profilingLogoMarks = [];
        this.syncProfilingLogoLayer();
        return;
      }
      const interval = String(Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution));
      // 与蜡烛那一发同源，否则两边问的不是同一份数据。
      // 优先用后端实际给的作用域：按 token 查却只回了单池时，两者是不一样的
      const identity = klineServedScope || this.klineIdentity();
      if (!identity.pair_id && !identity.token_id) {
        profilingLogoMarks = [];
        this.syncProfilingLogoLayer();
        return;
      }
      const key = this.profilingScopeKey(identity, interval, types);
      // 并行预取那一发只要归集键一致就能直接用（键里不含 from/to：预取窗口是这里的超集）
      let pending = profilingPrefetch && profilingPrefetch.key === key ? profilingPrefetch.promise : null;
      profilingPrefetch = null;
      if (!pending) {
        const from = normalizeKlineTimeSec(this.chartData[0].time);
        const to = normalizeKlineTimeSec(this.chartData[this.chartData.length - 1].time);
        const scope = identity.pair_id ? {
          pair_id: identity.pair_id
        } : {
          token_id: identity.token_id
        };
        pending = this.fetchProfilingMarks(types, {
          from,
          to,
          interval,
          ...scope
        });
      }
      const seq = ++profilingFetchSeq;
      pending.then(results => {
        if (seq !== profilingFetchSeq) return;
        let marks = [];
        results.forEach(({
          type,
          data
        }) => {
          marks = marks.concat(this.formatProfilingToLogoMarks(data, type));
        });
        profilingLogoMarks = marks;
        this.syncProfilingLogoLayer();
      }).catch(() => {
        if (seq !== profilingFetchSeq) return;
        profilingLogoMarks = [];
        this.syncProfilingLogoLayer();
      });
    },
    formatProfilingToLogoMarks(data, type) {
      if (!Array.isArray(data) || !data.length) return [];
      const interval = Number(Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution));
      const needBorder = type === '31' || type === '30';
      const typeName = this.getMarkTypeName(type);
      const marks = [];
      const typeStr = String(type);
      const pushHolderMark = (bucketTime, side, holder, tx) => {
        var _holder$wallet_logo, _this$$store$state$av2, _holder$wallet_logo2;
        if (!tx) return;
        const price = this.getCandlePriceAtBucket(bucketTime);
        if (price == null) return;
        const address = holder.wallet_address || '';
        const walletLogoRaw = (_holder$wallet_logo = holder.wallet_logo) === null || _holder$wallet_logo === void 0 ? void 0 : _holder$wallet_logo.logo;
        const walletLogo = walletLogoRaw !== null && walletLogoRaw !== void 0 && walletLogoRaw.startsWith('http') ? walletLogoRaw : walletLogoRaw ? `${(_this$$store$state$av2 = this.$store.state.ave_globalConfig) === null || _this$$store$state$av2 === void 0 ? void 0 : _this$$store$state$av2.token_logo_url}${walletLogoRaw}` : '';
        const displayName = holder.remark || ((_holder$wallet_logo2 = holder.wallet_logo) === null || _holder$wallet_logo2 === void 0 ? void 0 : _holder$wallet_logo2.name) || (address ? this.$f.formatAddress(address) : typeName);
        const isBuy = side === 'buy';
        // 无头像时直接用本地 SVG，避免 CDN 图加载失败导致“看不见”
        let imageUrl = isImageLogo(walletLogo) ? walletLogo : createTypeMarkSvg(typeStr, isBuy);
        const cdnUrl = this.getTypeMarkImageUrl(typeStr, isBuy);
        let borderColor = 'transparent';
        if (needBorder) {
          borderColor = isBuy ? '#12B886' : '#F6465D';
        }
        const amount = Number(tx.amount || 0);
        const volume = Number(tx.volume || 0);
        const txTime = normalizeKlineTimeSec(tx.tx_time);
        const walletLogoObj = holder.wallet_logo && typeof holder.wallet_logo === 'object' ? holder.wallet_logo : isImageLogo(walletLogo) ? {
          logo: walletLogo,
          name: displayName
        } : null;
        marks.push({
          id: `${bucketTime}-${side}-${typeStr}-${address}-${txTime}-${marks.length}`,
          dedupKey: `${bucketTime}-${side}-${typeStr}-${(address || '').toLowerCase()}`,
          bucketTime,
          timeLocal: this.$f.timeToLocal(bucketTime),
          price,
          side,
          type: typeStr,
          typeName,
          imageUrl,
          cdnUrl: isImageLogo(walletLogo) ? '' : cdnUrl,
          fallbackUrl: createTypeMarkSvg(typeStr, isBuy),
          borderColor,
          count: 1,
          items: [{
            address,
            name: displayName,
            logo: isImageLogo(walletLogo) ? walletLogo : '',
            wallet_logo: walletLogoObj,
            amount,
            volume,
            txns: Number(tx.txns || 1),
            tx_time: txTime,
            avgPrice: amount ? volume / amount : 0,
            timeText: txTime ? this.$f.formatDate(txTime, 'YYYY-MM-DD HH:mm') : ''
          }]
        });
      };
      data.forEach(item => {
        const bucketTime = getBucketTime(item.time, interval);
        const holders = item.holders;
        const isHolders = item.data_type === 'holders' || Array.isArray(holders) && holders.length > 0;
        const isSignals = item.data_type === 'signals' || Array.isArray(item.signals) && item.signals.length > 0;
        if (isHolders) {
          ;
          (holders || []).forEach(holder => {
            // 聪明钱：同一地址若买卖都有，按净流入/流出只打一侧（与 PC 语义一致）
            if (typeStr === '30' && holder.buy && holder.sell) {
              const bV = Number(holder.buy.volume || 0);
              const sV = Number(holder.sell.volume || 0);
              const netVol = Math.abs(bV - sV);
              const netAmt = Math.abs(Number(holder.buy.amount || 0) - Number(holder.sell.amount || 0));
              const side = bV >= sV ? 'buy' : 'sell';
              const base = side === 'buy' ? holder.buy : holder.sell;
              pushHolderMark(bucketTime, side, holder, {
                ...base,
                volume: netVol,
                amount: netAmt,
                txns: Number(holder.buy.txns || 0) + Number(holder.sell.txns || 0)
              });
            } else {
              pushHolderMark(bucketTime, 'buy', holder, holder.buy);
              pushHolderMark(bucketTime, 'sell', holder, holder.sell);
            }
          });
        } else if (isSignals) {
          ;
          (item.signals || []).forEach((signal, idx) => {
            const price = this.getCandlePriceAtBucket(bucketTime);
            if (price == null) return;
            const txTime = normalizeKlineTimeSec(signal.signal_time);
            marks.push({
              id: `${bucketTime}-signal-${typeStr}-${txTime}-${idx}`,
              dedupKey: `${bucketTime}-signal-${typeStr}`,
              bucketTime,
              timeLocal: this.$f.timeToLocal(bucketTime),
              price,
              side: 'signal',
              type: typeStr,
              typeName,
              imageUrl: SIGNAL_MARK_SVG,
              borderColor: 'transparent',
              count: 1,
              items: [{
                address: '',
                name: typeName,
                logo: '',
                history_count: signal.history_count,
                tx_time: txTime,
                amount: 0,
                volume: 0,
                txns: 1,
                avgPrice: 0,
                timeText: txTime ? this.$f.formatDate(txTime, 'YYYY-MM-DD HH:mm') : ''
              }]
            });
          });
        }
      });
      return marks;
    },
    getMarkTypeName(type) {
      const map = {
        '25': 'DEV',
        '31': 'KOL',
        '30': this.$t('smarter'),
        '-201': this.$t('signal')
      };
      return map[type] || this.$t('signal');
    },
    openMarkDetail(mark) {
      if (!mark) return;
      const isBuy = mark.side === 'buy';
      const type = String(mark.type || '');
      let sideLabel = '';
      if (mark.side === 'signal') {
        sideLabel = '';
      } else if (type === '30') {
        sideLabel = isBuy ? this.$t('netInflow') : this.$t('netOutflow');
      } else {
        sideLabel = isBuy ? this.$t('bought') : this.$t('sold');
      }
      const items = (mark.items || []).map(item => {
        const displayName = item.name || (item.address ? this.$f.formatAddress(item.address) : mark.typeName);
        return {
          ...item,
          displayName
        };
      });
      this.markDetail = {
        ...mark,
        isBuy,
        sideLabel,
        items
      };
      this.markDetailVisible = true;
    },
    goWhaleTracking(item) {
      const address = item === null || item === void 0 ? void 0 : item.address;
      if (!address) return;
      const chain = this.chain;
      const isCan = _constants_walletDetail__WEBPACK_IMPORTED_MODULE_16__["openWaleTrackingPopChains"].includes(chain);
      if (isCan) {
        var _this$tokenInfo5;
        const walletLogo = (item === null || item === void 0 ? void 0 : item.wallet_logo) || (item !== null && item !== void 0 && item.logo ? {
          logo: item.logo,
          name: item === null || item === void 0 ? void 0 : item.name
        } : null);
        this.$router.push({
          name: 'WhaleTracking',
          params: {
            id: this.$store.state.id,
            address,
            symbol: (_this$tokenInfo5 = this.tokenInfo) === null || _this$tokenInfo5 === void 0 ? void 0 : _this$tokenInfo5.symbol
          },
          query: {
            remark: (item === null || item === void 0 ? void 0 : item.name) || (item === null || item === void 0 ? void 0 : item.remark) || '',
            ...(walletLogo ? {
              wallet_logo: JSON.stringify(walletLogo)
            } : {})
          }
        });
      } else {
        window.open(this.$f.formatExplorerUrl(chain, address, 'address'));
      }
      this.markDetailVisible = false;
    },
    syncProfilingLogoLayer() {
      const layer = this.$refs.logoMarksLayer;
      if (!layer) return;
      layer.innerHTML = '';
      const size = getLogoMarkSize();
      profilingLogoMarks.forEach((m, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'kline-logo-mark';
        wrap.dataset.id = m.id;
        wrap.dataset.index = String(index);
        wrap.style.width = `${size}px`;
        wrap.style.height = `${size}px`;
        wrap.style.borderColor = m.borderColor || 'transparent';
        if (m.borderColor && m.borderColor !== 'transparent') {
          wrap.style.borderWidth = '1px';
          wrap.style.borderStyle = 'solid';
        }
        const img = document.createElement('img');
        // 无头像时先试 CDN，失败回退 SVG；有头像直接用头像
        img.src = m.cdnUrl || m.imageUrl;
        img.alt = '';
        img.draggable = false;
        img.style.width = '100%';
        img.style.height = '100%';
        img.onerror = () => {
          if (img.dataset.fallback) return;
          img.dataset.fallback = '1';
          img.src = m.fallbackUrl || m.imageUrl || createTypeMarkSvg(m.type, m.side === 'buy');
        };
        wrap.appendChild(img);
        wrap.addEventListener('click', e => {
          e.stopPropagation();
          e.preventDefault();
          this.openMarkDetail(m);
        });
        layer.appendChild(wrap);
      });
      this.updateProfilingLogoPositions();
    },
    updateProfilingLogoPositions() {
      const layer = this.$refs.logoMarksLayer;
      if (!layer || !chart || !candlestickSeries) return;
      const children = layer.children;
      const size = getLogoMarkSize();
      const gap = LOGO_MARK_GAP;
      // 裁掉右侧价格轴，避免 logo 打点穿透到坐标文字上
      let plotWidth = 0;
      let priceScaleWidth = 0;
      try {
        plotWidth = chart.timeScale().width() || 0;
        priceScaleWidth = chart.priceScale('right').width() || 0;
      } catch (e) {/* ignore */}
      layer.style.right = `${priceScaleWidth}px`;

      // 仅按同一 K 线时间桶堆叠，不用像素 X 判重叠（避免左右拖动/缩放时上下错位）
      const stackOrder = {
        '31': 0,
        '30': 1,
        '25': 2,
        '-201': 3
      };
      const byBucket = new Map();
      for (let i = 0; i < profilingLogoMarks.length; i++) {
        const m = profilingLogoMarks[i];
        const el = children[i];
        if (!el) continue;
        const x = chart.timeScale().timeToCoordinate(m.timeLocal);
        const y = candlestickSeries.priceToCoordinate(m.price);
        if (x == null || y == null || x < -size / 2 || plotWidth > 0 && x > plotWidth - size / 2) {
          el.style.visibility = 'hidden';
          continue;
        }
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        const bucketKey = m.bucketTime != null ? String(m.bucketTime) : String(m.timeLocal);
        const list = byBucket.get(bucketKey) || [];
        list.push({
          el,
          m,
          x,
          baseY: y - LOGO_MARK_OFFSET - size,
          type: String(m.type || '')
        });
        byBucket.set(bucketKey, list);
      }
      byBucket.forEach(list => {
        list.sort((a, b) => {
          var _stackOrder$a$type, _stackOrder$b$type;
          const oa = (_stackOrder$a$type = stackOrder[a.type]) !== null && _stackOrder$a$type !== void 0 ? _stackOrder$a$type : 99;
          const ob = (_stackOrder$b$type = stackOrder[b.type]) !== null && _stackOrder$b$type !== void 0 ? _stackOrder$b$type : 99;
          if (oa !== ob) return oa - ob;
          return String(a.m.dedupKey || a.m.id).localeCompare(String(b.m.dedupKey || b.m.id));
        });
        list.forEach((item, index) => {
          const yPos = item.baseY - index * (size + gap);
          item.el.style.visibility = 'visible';
          item.el.style.transform = `translate(${item.x - size / 2}px, ${yPos}px)`;
          item.el.style.zIndex = String(10 + index);
        });
      });
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
            // 回到前台：数据已经放了一段时间，强制重取
            this.tradingView(true);
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
      if (!document.querySelector('.k-line-chart')) {
        return;
      }
      // 走到这儿图表是全新建的：series 全空，之前那些「已经画过什么」的记录一律作废。
      // 指纹尤其重要 —— 它是模块级的，组件卸载重挂（换币回来、keepAliveExclude 重建）
      // 之后还留着，同 id + 同周期会被自己的旧指纹挡掉，图表就永远空着了
      this.resetKlineFetchKey();
      bottomStudyFilled = {};
      localBars = [];
      // localBars 变了就得让 indicatorCache / bucketPriceIndex 失效，
      // 否则它们会拿版本号没变当理由，交回上一批数据算出来的结果
      bumpKlineDataVersion();
      chart = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_10__["createChart"])(document.querySelector('.k-line-chart'), {
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
      this.chart = chart;
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
      // 不再等 `pair.value` —— 那要等详情接口回来，等于把 K 线排在 detail 后面串行。
      // 按 token 查两种币都对（见 klineIdentity），路由守卫写好 id 就能发
      this.tradingView();
      chart.timeScale().unsubscribeVisibleTimeRangeChange(this.subscribeVisibleTimeRangeChange);
      chart.timeScale().subscribeVisibleTimeRangeChange(this.subscribeVisibleTimeRangeChange);
      try {
        chart.timeScale().unsubscribeVisibleLogicalRangeChange(this.updateProfilingLogoPositions);
      } catch (e) {/* ignore */}
      chart.timeScale().subscribeVisibleLogicalRangeChange(this.updateProfilingLogoPositions);
    },
    subscribeVisibleTimeRangeChange(range) {
      this.updateProfilingLogoPositions();
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
            text: this.$f.formatNumber2(min.low * (this.mode == 'mcap' ? this.circulation : 1), 4),
            color: this.$store.getters.downColor[1]
          }, {
            time: max.time,
            position: 'aboveBar',
            shape: 'arrowDown',
            text: this.$f.formatNumber2(max.high * (this.mode == 'mcap' ? this.circulation : 1), 4),
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
      var _this$migrated;
      let seriesMarkers = [];
      if ((_this$migrated = this.migrated) !== null && _this$migrated !== void 0 && _this$migrated.time && this.$store.state.isTokenKline) {
        var _this$migrated2, _this$migrated3;
        let price = this.migrated.migratePrice || ((_this$migrated2 = this.migrated) === null || _this$migrated2 === void 0 || (_this$migrated2 = _this$migrated2.tag) === null || _this$migrated2 === void 0 || (_this$migrated2 = _this$migrated2.split('_')) === null || _this$migrated2 === void 0 ? void 0 : _this$migrated2[4]) || 0;
        let mark_m = [{
          size: 1,
          time: this.$f.timeToLocal(Number((_this$migrated3 = this.migrated) === null || _this$migrated3 === void 0 ? void 0 : _this$migrated3.time)),
          position: "aboveBar",
          shape: 'circle',
          text: `M`,
          color: "#B682FF"
        }];
        seriesMarkers = seriesMarkers.concat(mark_m);
      }
      if (!this.showSwapKline) {
        let markers = seriesMarkers.concat(maxMinMarkers);
        markers = markers.sort((a, b) => a.time - b.time);
        autoSeriesMarkers = markers;
        if (candlestickSeries) {
          candlestickSeries.setMarkers(markers);
        }
        this.updateProfilingLogoPositions();
        return;
      }
      if (this.$store.state.currentAccount !== '' && this.myTxHistoryList.length > 0) {
        var _this$myTxHistoryList, _this$myTxHistoryList2;
        let isCurrentPoolArr = ((_this$myTxHistoryList = this.myTxHistoryList) === null || _this$myTxHistoryList === void 0 ? void 0 : _this$myTxHistoryList.filter(i => i.pair_address == this.$store.state.pair.address)) || [];
        let isNotCurrentPoolArr = ((_this$myTxHistoryList2 = this.myTxHistoryList) === null || _this$myTxHistoryList2 === void 0 ? void 0 : _this$myTxHistoryList2.filter(i => i.pair_address !== this.$store.state.pair.address)) || [];
        let resolution = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution);
        let filterIsNotCurrentPoolArr = isNotCurrentPoolArr === null || isNotCurrentPoolArr === void 0 ? void 0 : isNotCurrentPoolArr.filter(i => this.chartData.some(j => parseInt(j.time / 1000 / Number(resolution)) === parseInt(i.time / Number(resolution))));
        let mark1 = this.dealMarkData(isCurrentPoolArr, this.$store.getters.upColor[3], this.$store.getters.downColor[3]);
        let mark2 = [];
        if (filterIsNotCurrentPoolArr.length > 0) {
          mark2 = this.dealMarkData(filterIsNotCurrentPoolArr, this.$store.getters.upColor[6], this.$store.getters.downColor[6]);
        }
        seriesMarkers = seriesMarkers.concat(mark1).concat(mark2);
        this.buySellMarkers = seriesMarkers;
        // console.log('buySellMarkers=====',buySellMarkers)
        if (seriesMarkers && seriesMarkers.length > 10 && !localStorage.showSwapKline) {
          seriesMarkers = [];
          this.showSwapKline = false;
        }
      }
      let markers = seriesMarkers.concat(maxMinMarkers);
      markers = markers.sort((a, b) => a.time - b.time);
      autoSeriesMarkers = markers;
      if (candlestickSeries) {
        candlestickSeries.setMarkers(markers);
      }
      this.updateProfilingLogoPositions();
    },
    dealMarkData(arr, upColor, downColor) {
      var _this$chartData3, _this$chartData4;
      let minTime = ((_this$chartData3 = this.chartData) === null || _this$chartData3 === void 0 || (_this$chartData3 = _this$chartData3[0]) === null || _this$chartData3 === void 0 ? void 0 : _this$chartData3.time) || 0;
      let maxTime = ((_this$chartData4 = this.chartData) === null || _this$chartData4 === void 0 || (_this$chartData4 = _this$chartData4[this.chartData.length - 1]) === null || _this$chartData4 === void 0 ? void 0 : _this$chartData4.time) || 0;
      let txs = arr.filter(j => j.time >= minTime && j.time <= maxTime).map(i => ({
        ...i,
        time: this.$f.timeToLocal(i.time)
      }));
      let o = {};
      let txsCon = [];
      let resolution = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution);
      txs.forEach(i => {
        let time = parseInt(i.time / Number(resolution));
        if (o[time] === undefined) {
          o[time] = txsCon.length;
          txsCon[o[time]] = [];
        }
        txsCon[o[time]].push(i);
      });
      let txs1 = [];
      txsCon.forEach(i => {
        let buyCon = i.filter(j => this.isBuy(j));
        let sellCon = i.filter(j => !this.isBuy(j));
        if (buyCon.length > 0) {
          txs1.push(buyCon);
        }
        if (sellCon.length > 0) {
          txs1.push(sellCon);
        }
      });
      buySellMarkers = txs1.map(i => {
        let len = i.length;
        let f = i[0];
        let timeId = f.time - f.time % Number(resolution);
        return {
          time: timeId,
          position: this.isBuy(f) ? 'belowBar' : 'aboveBar',
          shape: 'circle',
          text: this.isBuy(f) ? `B` : `S`,
          color: this.isBuy(f) ? upColor : downColor,
          size: 1
        };
      });
      return buySellMarkers;
    },
    updateTooltip(candlestickSeries, volumeSeries, smaLine1, smaLine2, smaLine3) {
      function businessDayToString(businessDay) {
        return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
      }
      let container = document.querySelector('.k-line-chart');
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
        let dateStr = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_10__["isBusinessDay"])(param.time) ? businessDayToString(param.time) : this.$f.formatDateUTC(param.time, dateType);
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
        let a = new bignumber_js__WEBPACK_IMPORTED_MODULE_14___default.a(high).minus(low).div(open).multipliedBy(100);
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

        let ma1 = param.seriesPrices.get(smaLine1) || 0;
        let ma2 = param.seriesPrices.get(smaLine2) || 0;
        let ma3 = param.seriesPrices.get(smaLine3) || 0;
        this.smaData.sma1Value = ma1;
        this.smaData.sma2Value = ma2;
        this.smaData.sma3Value = ma3;
      });
    },
    setDefaultToolTipValue() {
      var _this$chartData5, _this$resolution2, _tail$histogram, _tail$MACD, _tail$signal, _tail$value, _tail$k, _tail$d, _tail$j;
      if (!((_this$chartData5 = this.chartData) !== null && _this$chartData5 !== void 0 && _this$chartData5.length)) {
        return;
      }
      let last = this.chartData[this.chartData.length - 1];
      let dateType = (_this$resolution2 = this.resolution) !== null && _this$resolution2 !== void 0 && _this$resolution2.startsWith('s') ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
      let dateStr = this.$f.formatDateUTC(last.time, dateType);
      let open = (last === null || last === void 0 ? void 0 : last.open) || 0;
      let close = (last === null || last === void 0 ? void 0 : last.close) || 0;
      let changeV = close - open;
      let changeP = open === 0 ? 0 : (close - open) * 100 / open || 0;
      // 底部图例只显示当前那一个指标（见模板里的 kline-bottom-legend），
      // 所以只取它的尾值。以前这里把 macd / rsi / kdj 三份全量重算了一遍
      // （还各带一次 chartData.slice() 全量拷贝），而 setData 刚刚才算过 ——
      // 首屏等于同样的计算连做两轮。现在走 bottomStudyData 的缓存，且只算显示的那个。
      let tail = {};
      if (this.activeStudyBottom !== 'VOL' && localBars.length) {
        let series = this.bottomStudyData(this.activeStudyBottom);
        tail = (series === null || series === void 0 ? void 0 : series[series.length - 1]) || {};
      }
      this.toolTipValue = {
        time: dateStr,
        open: open,
        high: (last === null || last === void 0 ? void 0 : last.high) || 0,
        low: (last === null || last === void 0 ? void 0 : last.low) || 0,
        close: close,
        changeV: changeV,
        changeP: changeP,
        volume: (last === null || last === void 0 ? void 0 : last.value) || 0,
        macd: (_tail$histogram = tail.histogram) !== null && _tail$histogram !== void 0 ? _tail$histogram : 0,
        dif: (_tail$MACD = tail.MACD) !== null && _tail$MACD !== void 0 ? _tail$MACD : 0,
        dea: (_tail$signal = tail.signal) !== null && _tail$signal !== void 0 ? _tail$signal : 0,
        rsi: (_tail$value = tail.value) !== null && _tail$value !== void 0 ? _tail$value : 0,
        k: (_tail$k = tail.k) !== null && _tail$k !== void 0 ? _tail$k : 0,
        d: (_tail$d = tail.d) !== null && _tail$d !== void 0 ? _tail$d : 0,
        j: (_tail$j = tail.j) !== null && _tail$j !== void 0 ? _tail$j : 0
      };
    },
    /**
     * 这一发 K 线按 token 查还是按 pair 查。
     *
     * 聚合 K 线与单池 K 线是 kline_v2 的两种查法，按 token 查时聚不聚合由后端判断
     * （单池币按 token 查也只返回它自己那个池）。所以详情接口还没落定时不必干等
     * `pair.value` —— 直接拿路由守卫已经写好的 `store.state.id` 抢跑，首屏因此少掉
     * 「detail 一整个往返 + 一次 watch 空转」这段串行。
     */
    klineIdentity() {
      var _this$$store$state$pa2;
      let id = this.$store.state.id || '';
      let pairId = ((_this$$store$state$pa2 = this.$store.state.pair) === null || _this$$store$state$pa2 === void 0 ? void 0 : _this$$store$state$pa2.value) || '';
      // 详情已落定：按 store 的选择走，用户可能手动切过池子
      if (pairId) {
        return this.$store.state.isTokenKline ? {
          token_id: id,
          pair_id: ''
        } : {
          token_id: '',
          pair_id: pairId
        };
      }
      // 详情未落定：走和导航守卫抢跑同一份实现，两边算出的身份必须一致，
      // 不然抢跑那一发认领不上，等于每个币白发两次请求
      return Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["klineIdentityFor"])(id);
    },
    /**
     * K 线里没有 migrated 标记时，用详情里的迁移信息补一个。
     *
     * 抢跑之后 K 线可能比详情先落地，那一刻 `isTokenKline` 和 `migrate_*` 都还没有，
     * 所以详情落定后要再补一次 —— 光在 K 线的 then 里做会漏掉这种顺序。
     */
    applyMigratedFallback() {
      var _this$migrated4, _this$$store$state$to3, _this$$store$state$to4;
      if ((_this$migrated4 = this.migrated) !== null && _this$migrated4 !== void 0 && _this$migrated4.time) return;
      if (!this.$store.state.isTokenKline) return;
      // 优先用 K 线响应自己带的 extra_data。
      //
      // 不能只读 store：`setTokenInfo` 是整体赋值不是合并（store/index.js），
      // 而 K 线现在会抢在详情前面落地 —— 详情回来时 `setInitToken` 会把 tokenInfo 和
      // tokenInfoInit 整个换掉，K 线并进去的 migrate_* 就没了，兜底会读到空。
      let extra = this.klineExtra || {};
      let migratePrice = extra.migrate_uprice || ((_this$$store$state$to3 = this.$store.state.tokenInfo) === null || _this$$store$state$to3 === void 0 ? void 0 : _this$$store$state$to3.migrate_uprice);
      let migrateTime = extra.migrate_time || ((_this$$store$state$to4 = this.$store.state.tokenInfo) === null || _this$$store$state$to4 === void 0 ? void 0 : _this$$store$state$to4.migrate_time);
      if (!migratePrice || !migrateTime) return;
      let mt = Math.floor(new Date(migrateTime).getTime() / 1000);
      let interval = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution);
      let barTime = Math.floor(mt / Number(interval)) * Number(interval) * 1000;
      this.migrated = {
        time: barTime,
        migratePrice: migratePrice,
        migrateTime: migrateTime
      };
      this.setMarkersData();
    },
    /**
     * 把 24h 涨跌幅落地，并反推出 WS 实时涨跌要用的基准价。
     *
     * 必须能被详情落定这条路再调一次：抢跑那一发落地时 `pair` 还是路由守卫刚清过的
     * 占位值、`tokenInfo` 还是 initTokenInfoFuc 的空壳，`price_change` 两边都是 0，
     * 于是 basePriceForChange 留在 0 —— 而 handleAggrTx 只在它 > 0 时才推涨跌幅，
     * 结果就是涨跌幅一直显示 0 且再也不动。纠正请求还会被指纹去重挡掉，指望不上。
     */
    syncPriceChangeBase() {
      var _this$$store$state$pa3, _this$$store$state$to5, _this$$store$state$pa4;
      // 判据是「详情落没落定」，不是「change 是不是 0」。
      // 详情没落定时 price_change 必然是占位的 0，写了会把真值盖掉；
      // 但落定之后的 0 是真的 0%，必须照写，否则换池时会留着上一个池的涨跌幅。
      if (!((_this$$store$state$pa3 = this.$store.state.pair) !== null && _this$$store$state$pa3 !== void 0 && _this$$store$state$pa3.value)) return;
      let change = this.$store.state.isTokenKline ? Number((_this$$store$state$to5 = this.$store.state.tokenInfo) === null || _this$$store$state$to5 === void 0 ? void 0 : _this$$store$state$to5.price_change) || 0 : Number((_this$$store$state$pa4 = this.$store.state.pair) === null || _this$$store$state$pa4 === void 0 ? void 0 : _this$$store$state$pa4.price_change) || 0;
      this.$store.commit('setTokenInfoPriceChange', change);
      let currentPrice = Number(this.$store.state.tokenPrice) || 0;
      if (change !== 0 && currentPrice > 0) {
        this.basePriceForChange = currentPrice / (1 + change / 100);
      }
    },
    /**
     * 详情落定后把 K 线那份 extra_data 重新并回 store。
     *
     * `setInitToken` 是整体赋值、`tokenInfoInit` 也是整体替换，所以 K 线抢在前面
     * 并进去的 extra_data（volume_24 / amount_24 / total / ATH 这些）会被一把抹掉。
     * 迁移和 24H 高低已经各自有兜底，但字段是会加的，逐个特判早晚漏 —— 整份重放一次。
     */
    reapplyKlineExtra() {
      if (!this.klineExtra) return;
      Object(_api_index_js__WEBPACK_IMPORTED_MODULE_9__["applyKlineExtra"])(this.chartData, this.klineExtra);
    },
    /** 「图表上画的是哪份数据」的指纹，用来挡掉重复的那一发 */
    klineFetchKeyOf(identity) {
      return [this.$store.state.id || '', identity.pair_id || '', this.resolution].join('|');
    },
    /** 换币时调用：上一份指纹对新币没有意义，留着会把新币第一发挡掉 */
    resetKlineFetchKey() {
      klineFetchKey = '';
      klineFetchKeyAlt = '';
      klineInflightKey = '';
    },
    tradingView(force = false) {
      var _this$$store$state3;
      if (!this.$store.state.id) {
        return;
      }
      // 链名先从 id 里取：抢跑时 pair 还是路由守卫刚清过的空值，只读它会把秒级周期
      // 误降成 1 小时（与 resolutionList 那份判据同源）
      let chain = this.$f.getAddressAndChainFromId(this.$store.state.id).chain || ((_this$$store$state3 = this.$store.state) === null || _this$$store$state3 === void 0 || (_this$$store$state3 = _this$$store$state3.pair) === null || _this$$store$state3 === void 0 ? void 0 : _this$$store$state3.chain);
      let isSupportSecChains = chain && _utils_kline__WEBPACK_IMPORTED_MODULE_17__["supportSecChains"].includes(chain);
      if (!isSupportSecChains && this.resolution === 's1') {
        this.resolution = '60';
      }
      let identity = this.klineIdentity();
      let key = this.klineFetchKeyOf(identity);
      // 抢跑那一发和详情落定后的选择往往是同一份数据（后端挑的主池 == store 选的池），
      // klineFetchKeyAlt 就是用响应里的 pair 补出来的等价指纹：命中就不用再发一遍。
      // 只有响应确实是单池线时才会有这个等价指纹（见下面 aggr_rsp 那段）。
      if (!force && (key === klineInflightKey || key === klineFetchKey || key === klineFetchKeyAlt)) {
        return;
      }
      let params = {
        resolution: Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["switchResolution"])(this.resolution),
        from: parseInt(Date.now() / 1000 - _utils_kline__WEBPACK_IMPORTED_MODULE_17__["KLINE_WINDOW"][this.resolution]),
        to: 0,
        ...identity
      };
      klineInflightKey = key;
      klineFetchKeyAlt = '';
      klineServedScope = null;
      // 打点只在真的要重取时才清 —— 放在 watch 里清会把抢跑刚画好的那批白白抹掉
      profilingLogoMarks = [];
      this.syncProfilingLogoLayer();
      // 一次切换里可能有好几发在飞（换币 / 换周期 / 详情落定各一发），
      // 迟到的那发不能拿它的数据覆盖已经属于新身份的图
      const seq = ++klineFetchSeq;
      klineInflightSeq = seq;
      if (this.klineParams && Array.isArray(this.klineParams) && this.klineParams.length === 4) {
        this.$store.commit('wsSend', {
          jsonrpc: '2.0',
          method: 'unsubscribe',
          params: this.klineParams,
          id: 1
        });
      }
      this.isLoading = true;
      // 打点与首批蜡烛并行取。以前是在 K 线的 then 里才发，两条往返完全串行，
      // 打点整整晚一个 RTT 才出来；打点的**渲染**仍要等 chartData（要按蜡烛取锚定价），
      // 提前的只是网络那一段
      this.prefetchProfilingMarks(params.from, identity);

      // 导航守卫可能已经把这一发打出去了（见 utils/kline.js）。只有首屏这一发能认领：
      // 判据里不含 from/to，翻页/切周期那种实打实的新窗口不能拿它糊弄。
      const prefetched = Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["takePrefetchedKline"])(Object(_utils_kline__WEBPACK_IMPORTED_MODULE_17__["klineRequestKey"])(this.$store.state.id, identity, this.resolution));
      (prefetched || Object(_api_index_js__WEBPACK_IMPORTED_MODULE_9__["tradingView"])(params)).then(res => {
        var _this$chartData6;
        if (seq !== klineFetchSeq) return;
        let list = Array.isArray(res === null || res === void 0 ? void 0 : res.list) ? res.list : [];
        // 过了 seq 这一关才落地行情副作用：迟到的那发不能覆盖已经属于新身份的 store
        Object(_api_index_js__WEBPACK_IMPORTED_MODULE_9__["applyKlineExtra"])(list, res === null || res === void 0 ? void 0 : res.extra_data);
        // 后端这一发实际用的池。抢跑是按 token 查的，详情落定后按池查算出的指纹
        // 如果等于这里补出来的，就是同一份数据，省掉一次纠正请求。
        //
        // 前提是这一发**不是聚合线**（`aggr_rsp !== 1`）—— 聚合线跟「查这一个池」
        // 不是一回事，用户把聚合关掉后要看的是单池，那种情况必须让纠正请求发出去。
        // 响应自己就带了这个标志，不用等详情再去猜 support_aggr_kline。
        let servedPair = (res === null || res === void 0 ? void 0 : res.pair) || '';
        // 空结果一律不落任何指纹（主的和等价的都不落）：这一发可能只是没取到，
        // 留着等价指纹会把详情落定后的纠正请求也挡掉，图就永远空着了
        if (list.length && servedPair && !identity.pair_id && (res === null || res === void 0 ? void 0 : res.aggr_rsp) !== 1) {
          let {
            chain: idChain
          } = this.$f.getAddressAndChainFromId(this.$store.state.id);
          let servedPairId = servedPair + '-' + (idChain || '');
          klineFetchKeyAlt = [this.$store.state.id || '', servedPairId, this.resolution].join('|');
          // 蜡烛是这一个池的，打点也得是 —— 见 klineServedScope
          klineServedScope = {
            token_id: '',
            pair_id: servedPairId
          };
        }
        // 空结果不落指纹：可能只是这一发失败了，留着会把后面的重试全挡掉
        klineFetchKey = list.length ? key : '';
        this.chartData = list.map(i => ({
          ...i,
          time: this.normalizeTimeToMs(i.time)
        }));
        bumpKlineDataVersion();
        this.initLastBar();
        this.syncPriceChangeBase();
        this.setData();
        this.klineExtra = (res === null || res === void 0 ? void 0 : res.extra_data) || null;
        this.migrated = ((_this$chartData6 = this.chartData) === null || _this$chartData6 === void 0 ? void 0 : _this$chartData6.find(i => {
          var _i$tag;
          return i.tag !== '' && ((_i$tag = i.tag) === null || _i$tag === void 0 ? void 0 : _i$tag.startsWith('migrated'));
        })) || {};
        this.applyMigratedFallback();
        chart.timeScale().resetTimeScale();
        chart.timeScale().scrollToRealTime();
        this.dispatchKline();
        this.setDefaultToolTipValue();
        // 打点落地是第二帧的事，别和蜡烛挤在同一个任务里 —— 它要建几十个 DOM 节点
        this.$nextTick(() => {
          if (seq !== klineFetchSeq) return;
          this.loadProfilingMarks();
        });
      }).finally(() => {
        // 认 seq 不认 key：force 重取时新旧两发 key 相同，
        // 光比 key 会让先结束的那发把后来者的在飞标记清掉
        if (klineInflightSeq === seq) {
          klineInflightKey = '';
        }
        if (seq !== klineFetchSeq) return;
        this.isLoading = false;
      });
    },
    /** 蜡烛的价格格式跟着最新一根的量级走 */
    applyPriceFormat(chartData) {
      const last = chartData[chartData.length - 1];
      if (!last) return;
      const {
        minMove
      } = this.$f.formatDecimals(last.low);
      candlestickSeries.applyOptions({
        priceFormat: {
          type: 'custom',
          formatter: price => {
            if (this.mode == 'mcap') {
              return this.$f.formatNumber2(price * this.circulation, 2);
            } else {
              return this.$f.formatNumber2(price, 4);
            }
          },
          minMove: minMove
        }
      });
    },
    setData(chartData = this.chartData) {
      if (!Array.isArray(chartData)) return;
      this.applyPriceFormat(chartData);
      let newData = chartData.map(i => ({
        ...i,
        time: this.$f.timeToLocal(i.time)
      }));
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
      localBars = newData;
      this.setStudies();
      this.$nextTick(() => this.updateProfilingLogoPositions());
    },
    /**
     * 叠加均线 + 底部指标 —— 从 setData 里拆出来的派生曲线部分。
     * 蜡烛与成交量由调用方自己灌（首屏整批 setData，推送单根 update），
     * 这里只重算跟着数据走的那几条线。
     */
    setStudies() {
      var _a$len, _b, _c;
      // 空数据也要照走一遍：setData 会把蜡烛和成交量清空，派生曲线不跟着清
      // 就会在空图上留着上一个币的线
      const newData = localBars;
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
      let aV = this.$f.formatNumber2(((_a$len = a[len]) === null || _a$len === void 0 ? void 0 : _a$len.value) || 0, 4);
      let bV = this.$f.formatNumber2(((_b = b[b.length - 1]) === null || _b === void 0 ? void 0 : _b.value) || 0, 4);
      let cV = this.$f.formatNumber2(((_c = c[c.length - 1]) === null || _c === void 0 ? void 0 : _c.value) || 0, 4);
      if (len >= 0) {
        this.smaData = {
          sma1Default: aV,
          sma2Default: bV,
          sma3Default: cV,
          sma1Value: aV,
          sma2Value: bV,
          sma3Value: cV
        };
      }
      // 底部四个指标里只有一个是可见的，另外三个是 visible:false 的 series。
      // 以前每次都把四份全算全灌 —— 首屏和每一笔 WS 推送都要白跑三遍全量指标计算。
      // 现在只算当前显示的那个，切过去时再补（activeStudyBottom 的 watch）
      this.applyBottomStudy();
    },
    /**
     * WS 推送只改最后一根蜡烛。
     *
     * 以前每来一笔成交都走一次完整的 setData —— 全量 map、两次 setData、三条均线、
     * 再加一份底部指标。活跃币每秒几十笔推送时主线程基本就被这些全量重算占满了，
     * 表现是图卡、手指拖不动。
     *
     * 蜡烛本身用 `series.update` 单根改（立刻可见，代价是常数级）；均线和指标是
     * 只有尾部会动的派生曲线，攒到下一帧统一重算一次就够了。
     */
    updateLastBarOnChart(bar) {
      bumpKlineDataVersion();
      const entry = {
        ...bar,
        time: this.$f.timeToLocal(bar.time)
      };
      candlestickSeries.update({
        time: entry.time,
        open: entry.open,
        high: entry.high,
        low: entry.low,
        close: entry.close
      });
      volumeSeries.update({
        time: entry.time,
        value: entry.value,
        color: entry.color
      });
      if (localBars.length && localBars[localBars.length - 1].time === entry.time) {
        localBars[localBars.length - 1] = entry;
      } else {
        localBars.push(entry);
      }
      if (studyRefreshRaf) return;
      studyRefreshRaf = requestAnimationFrame(() => {
        studyRefreshRaf = null;
        if (!candlestickSeries) return;
        // 价格量级可能被这几笔推送带走（新币经常几个数量级地动），
        // minMove 不跟着走就会一直停在上一次 HTTP 拉取时的精度
        this.applyPriceFormat(this.chartData);
        this.setStudies();
        // 单根更新可能把价格轴撑开而逻辑区间不变，那时
        // subscribeVisibleLogicalRangeChange 不会触发，打点图层要自己对一次
        this.updateProfilingLogoPositions();
      });
    },
    /**
     * 算一份底部指标并缓存。缓存按 chartData 版本失效，
     * setDefaultToolTipValue 复用它 —— 以前那里又把同样的数据全量算了一遍。
     */
    bottomStudyData(name) {
      const slot = indicatorCache[name];
      if (!slot) return [];
      if (slot.v === klineDataVersion && slot.d) return slot.d;
      slot.v = klineDataVersion;
      slot.d = name === 'MACD' ? this.calculateMacd(localBars) : name === 'RSI' ? this.calculateRSI(localBars) : this.calculateKDJ(localBars);
      return slot.d;
    },
    /** 把当前显示的那个底部指标灌进图里；隐藏的三个等切过去时再补 */
    applyBottomStudy() {
      const name = this.activeStudyBottom;
      // VOL 就是成交量本身，setData 里已经灌过
      if (name === 'VOL') return;
      // 同一批数据不重复灌；隐藏的那几个压根不算
      if (bottomStudyFilled[name] === klineDataVersion) return;
      bottomStudyFilled[name] = klineDataVersion;
      if (name === 'MACD') {
        this.setMacdData();
      } else if (name === 'RSI') {
        this.setRsiData();
      } else if (name === 'KDJ') {
        this.setKDJData();
      }
    },
    setMacdData() {
      let macdData = this.bottomStudyData('MACD');
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
    setRsiData() {
      rsiLine.setData(this.bottomStudyData('RSI'));
    },
    setKDJData() {
      let kdjData = this.bottomStudyData('KDJ');
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
      // 滑动求和代替原来的「每根都 slice 一段再求平均」——
      // 原写法是 O(n·count) 次加法外加 n 次数组拷贝，三条均线在每帧都要跑一遍。
      // 窗口口径与原实现保持一致：[i-count+1, i)，不含当前这根
      const width = count - 1;
      const result = [];
      const len = data.length;
      if (width <= 0 || len < count) return result;
      let sum = 0;
      for (let i = 0; i < width; i++) {
        sum += data[i].close;
      }
      for (let i = count - 1; i < len; i++) {
        result.push({
          time: data[i].time,
          value: sum / width
        });
        sum += data[i].close - data[i - width].close;
      }
      return result;
    },
    calculateEMA(data, count) {
      var _data$map;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_11__["ema"])({
        values: (data === null || data === void 0 || (_data$map = data.map) === null || _data$map === void 0 ? void 0 : _data$map.call(data, i => Number(i.close))) || [],
        period: count
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateBoll(data, period = 20, stdDev = 2) {
      var _data$map2;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_11__["bollingerbands"])({
        values: (data === null || data === void 0 || (_data$map2 = data.map) === null || _data$map2 === void 0 ? void 0 : _data$map2.call(data, i => Number(i.close))) || [],
        period: period,
        stdDev: stdDev
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateMacd(data) {
      var _data$map3;
      let data1 = Object(finmath__WEBPACK_IMPORTED_MODULE_12__["macd"])((data === null || data === void 0 || (_data$map3 = data.map) === null || _data$map3 === void 0 ? void 0 : _data$map3.call(data, i => Number(i.close))) || []);
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
      var _data$map4;
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_11__["rsi"])({
        values: (data === null || data === void 0 || (_data$map4 = data.map) === null || _data$map4 === void 0 ? void 0 : _data$map4.call(data, i => Number(i.close))) || [],
        period: period
      });
      return data1.map((i, k, a) => ({
        time: data[data.length - a.length + k].time,
        value: i
      }));
    },
    calculateKDJ(data, period = 9, signalPeriod = 3) {
      var _data$map5, _data$map6, _data$map7;
      let high = (data === null || data === void 0 || (_data$map5 = data.map) === null || _data$map5 === void 0 ? void 0 : _data$map5.call(data, i => Number(i.close))) || [];
      let low = (data === null || data === void 0 || (_data$map6 = data.map) === null || _data$map6 === void 0 ? void 0 : _data$map6.call(data, i => Number(i.low))) || [];
      let close = (data === null || data === void 0 || (_data$map7 = data.map) === null || _data$map7 === void 0 ? void 0 : _data$map7.call(data, i => Number(i.low))) || [];
      let data1 = Object(technicalindicators__WEBPACK_IMPORTED_MODULE_11__["stochastic"])({
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
    dispatchKline() {},
    createMigratePriceLine() {
      if (candlestickSeries) {
        var _this$migrated5, _this$migrated6;
        if (migratePriceLine) {
          candlestickSeries.removePriceLine(migratePriceLine);
          migratePriceLine = null;
        }
        if (!this.$store.state.isTokenKline) return;
        let price = ((_this$migrated5 = this.migrated) === null || _this$migrated5 === void 0 ? void 0 : _this$migrated5.migratePrice) || ((_this$migrated6 = this.migrated) === null || _this$migrated6 === void 0 || (_this$migrated6 = _this$migrated6.tag) === null || _this$migrated6 === void 0 || (_this$migrated6 = _this$migrated6.split('_')) === null || _this$migrated6 === void 0 ? void 0 : _this$migrated6[4]) || 0;
        if (!price) return;
        const myPriceLine = {
          price: price,
          color: '#722ED1',
          lineWidth: 2,
          lineStyle: 2,
          axisLabelVisible: true,
          title: this.mode === 'mcap' ? this.$t('migratedMCap') : this.$t('migratedPrice')
        };
        migratePriceLine = candlestickSeries.createPriceLine(myPriceLine);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/unknownRisk.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  emits: ['init'],
  props: ['loading'],
  data() {
    return {
      visible1: false,
      activeGroup: 0,
      showTime: true
    };
  },
  computed: {
    tokenInfo() {
      return this.$store.state.tokenInfo;
    },
    time() {
      return this.$store.state.tokenInfo.countDown;
    }
  },
  methods: {
    onFinish() {
      this.showTime = false;
      this.$store.dispatch('getToken');
      this.$emit('init');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_bubble_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/bubble.png */ "./src/assets/images/bubble.png");
/* harmony import */ var _assets_images_bubble_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_bubble_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/watermark.png */ "./src/assets/images/watermark.png");
/* harmony import */ var _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_3__);




const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-ff68c2a2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
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
  class: "info dropdown mt_10"
};
const _hoisted_7 = {
  class: "border pt-10 pb-10 ul-1"
};
const _hoisted_8 = ["id", "value"];
const _hoisted_9 = ["for"];
const _hoisted_10 = {
  class: "info dropdown mt_10"
};
const _hoisted_11 = {
  class: "border pt-10 pb-10 ul-1"
};
const _hoisted_12 = ["id", "value"];
const _hoisted_13 = ["for"];
const _hoisted_14 = {
  class: "info dropdown mt_10"
};
const _hoisted_15 = {
  class: "border pt-10 pb-10 ul-1 mark-tabs-dropdown"
};
const _hoisted_16 = {
  key: 0
};
const _hoisted_17 = {
  class: "k-line-chart"
};
const _hoisted_18 = {
  ref: "logoMarksLayer",
  class: "kline-logo-marks"
};
const _hoisted_19 = {
  key: 0,
  class: "kline-legend"
};
const _hoisted_20 = {
  class: "legend-1"
};
const _hoisted_21 = {
  class: "legend-2"
};
const _hoisted_22 = {
  class: "legend-3"
};
const _hoisted_23 = {
  key: 1,
  class: "kline-legend"
};
const _hoisted_24 = {
  class: "legend-1"
};
const _hoisted_25 = {
  class: "legend-2"
};
const _hoisted_26 = {
  class: "legend-3"
};
const _hoisted_27 = {
  key: 2,
  class: "kline-legend"
};
const _hoisted_28 = {
  class: "legend-1"
};
const _hoisted_29 = {
  class: "legend-2"
};
const _hoisted_30 = {
  class: "legend-3"
};
const _hoisted_31 = {
  key: 3,
  class: "kline-legend kline-legend1"
};
const _hoisted_32 = {
  style: {
    "margin-top": "0.1rem",
    "display": "flex",
    "align-items": "center"
  }
};
const _hoisted_33 = {
  style: {
    "color": "#878fbc",
    "margin-right": "0.1rem"
  }
};
const _hoisted_34 = {
  class: "kline-tooltip"
};
const _hoisted_35 = {
  class: "kline-tooltip-li"
};
const _hoisted_36 = {
  class: "kline-tooltip-li"
};
const _hoisted_37 = {
  class: "kline-tooltip-li"
};
const _hoisted_38 = {
  class: "kline-tooltip-li"
};
const _hoisted_39 = {
  class: "kline-tooltip-li"
};
const _hoisted_40 = {
  class: "kline-tooltip-li"
};
const _hoisted_41 = {
  class: "kline-tooltip-li"
};
const _hoisted_42 = {
  class: "kline-tooltip-li"
};
const _hoisted_43 = {
  class: "kline-tooltip-li"
};
const _hoisted_44 = {
  class: "kline-tooltip-li"
};
const _hoisted_45 = {
  class: "kline-tooltip-li"
};
const _hoisted_46 = {
  class: "kline-tooltip-li"
};
const _hoisted_47 = {
  class: "van-hairline--top kline-bottom-legend kline-legend"
};
const _hoisted_48 = {
  key: 0,
  class: "legend-1"
};
const _hoisted_49 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
  style: {
    "color": "#eee"
  }
}, "Volume: ", -1 /* HOISTED */));
const _hoisted_50 = {
  class: "legend-1"
};
const _hoisted_51 = {
  class: "legend-2"
};
const _hoisted_52 = {
  class: "legend-3"
};
const _hoisted_53 = {
  key: 2,
  class: "legend-1"
};
const _hoisted_54 = {
  class: "legend-1"
};
const _hoisted_55 = {
  class: "legend-2"
};
const _hoisted_56 = {
  class: "legend-3"
};
const _hoisted_57 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "kline-watermark",
  src: _assets_images_watermark_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_58 = {
  class: "flex"
};
const _hoisted_59 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
  class: "line"
}, null, -1 /* HOISTED */));
const _hoisted_60 = {
  key: 0,
  class: "mark-detail"
};
const _hoisted_61 = {
  class: "mark-detail-header"
};
const _hoisted_62 = {
  class: "mark-detail-title"
};
const _hoisted_63 = {
  class: "mark-detail-list"
};
const _hoisted_64 = ["src"];
const _hoisted_65 = {
  class: "mark-detail-body"
};
const _hoisted_66 = {
  key: 0,
  class: "mark-detail-name-row"
};
const _hoisted_67 = {
  class: "mark-detail-name"
};
const _hoisted_68 = ["onClick"];
const _hoisted_69 = {
  class: "mark-detail-line"
};
const _hoisted_70 = {
  class: "mark-detail-line"
};
const _hoisted_71 = {
  class: "mark-detail-line"
};
const _hoisted_72 = {
  class: "mark-detail-line"
};
const _hoisted_73 = {
  class: "mark-detail-line"
};
const _hoisted_74 = {
  class: "mark-detail-line"
};
const _hoisted_75 = {
  class: "mark-detail-line"
};
const _hoisted_76 = {
  class: "mark-detail-line"
};
const _hoisted_77 = {
  class: "mark-detail-line"
};
const _hoisted_78 = {
  class: "mark-detail-line"
};
const _hoisted_79 = {
  class: "mark-detail-line"
};
const _hoisted_80 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$SupportFull, _$data$toolTipValue, _this$migrated, _$data$migrated, _$data$migrated2, _$data$migrated3, _$data$migrated4;
  const _component_van_dropdown_item = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-dropdown-item");
  const _component_van_dropdown_menu = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-dropdown-menu");
  const _component_van_checkbox = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-checkbox");
  const _component_loading = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("loading");
  const _component_el_switch = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("el-switch");
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-tabs");
  const _component_unknown_risk = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("unknown-risk");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <van-tabs\n      v-model:active=\"resolution\"\n      color=\"#558BED\"\n      background=\"#2C3254\"\n      title-inactive-color=\"#878FBC\"\n      line-width=\"0.48rem\"\n      class=\"tabs-container\"\n    >\n      <van-tab\n        v-for=\"(item, index) in resolutionListUp\"\n        :key=\"index\"\n        :title=\"item.label\"\n        :name=\"item.value\"\n        class=\"tab-item\"\n      ></van-tab>\n    </van-tabs> "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.resolutionListUp, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
      key: index
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("input", {
      type: "radio",
      name: "tabs-resolution",
      id: item.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.resolution = $event),
      value: item.value
    }, null, 8 /* PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_1__["vModelRadio"], $data.resolution]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("label", {
      for: item.value
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.label), 9 /* TEXT, PROPS */, _hoisted_5)]);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_menu, {
    "active-color": "#558BED",
    style: {
      "margin-right": "5px"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_item, {
      teleport: "#tokenInfoPop"
    }, {
      title: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('more')), 1 /* TEXT */)]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_7, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.resolutionListDown, (item, index) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
          key: index
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("input", {
          type: "radio",
          name: "tabs-resolution",
          id: item.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.resolution = $event),
          value: item.value
        }, null, 8 /* PROPS */, _hoisted_8), [[vue__WEBPACK_IMPORTED_MODULE_1__["vModelRadio"], $data.resolution]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("label", {
          for: item.value
        }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.label), 9 /* TEXT, PROPS */, _hoisted_9)]);
      }), 128 /* KEYED_FRAGMENT */))])])]),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  })]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_menu, {
    "active-color": "#558BED",
    style: {
      "margin-right": "5px"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_item, {
      teleport: "#tokenInfoPop"
    }, {
      title: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.modeName), 1 /* TEXT */)]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_11, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.listMode, (item, index) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
          key: index
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("input", {
          type: "radio",
          name: "tabs-mode",
          id: item.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.mode = $event),
          value: item.value,
          onChange: _cache[3] || (_cache[3] = (...args) => $options.switchMode && $options.switchMode(...args))
        }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_1__["vModelRadio"], $data.mode]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("label", {
          for: item.value
        }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.label), 9 /* TEXT, PROPS */, _hoisted_13)]);
      }), 128 /* KEYED_FRAGMENT */))])])]),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  })]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_menu, {
    "active-color": "#558BED",
    style: {
      "margin-right": "5px"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_dropdown_item, {
      teleport: "#tokenInfoPop"
    }, {
      title: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('portrait')), 1 /* TEXT */)]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_15, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.markTabList, item => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
          key: item.id,
          class: "mark-tab-item"
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_checkbox, {
          modelValue: $data.markTabsChecked[item.id],
          "onUpdate:modelValue": $event => $data.markTabsChecked[item.id] = $event,
          shape: "square",
          "icon-size": "0.28rem",
          onChange: $options.onMarkTabChange
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.name), 1 /* TEXT */)]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "onChange"])]);
      }), 128 /* KEYED_FRAGMENT */))])])]),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  })]), (_$options$SupportFull = $options.SupportFullDataChain) !== null && _$options$SupportFull !== void 0 && _$options$SupportFull.includes($options.chain) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
    src: _assets_images_bubble_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    width: 18,
    onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $data.dialogVisible = true, ["stop", "prevent"]))
  })])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <li>\n          <van-dropdown-menu active-color=\"#558BED\" style=\"margin-right: 10px\">\n            <van-dropdown-item teleport=\"#tokenInfoPop\">\n            <template #title>\n            <span>{{ $t('indicators') }}</span>\n            </template>\n            <div class=\"info dropdown mt_10\">\n              <ul class=\"border pt-10 ul-1\">\n                <li>\n                    <label> {{ $t('main') }}</label>\n                </li>\n                <li v-for=\"(item, index) in studyList\" :key=\"index\">\n                    <input type=\"radio\" name=\"tabs-main\" :id=\"item\" v-model=\"activeStudy\" :value=\"item\" />\n                    <label :for=\"item\">{{item}}</label>\n                </li>\n              </ul>\n              <ul class=\"pb-10 ul-1\">\n                <li>\n                    <label> {{ $t('secondary') }}</label>\n                </li>\n                <li v-for=\"(item, index) in studyBottomList\" :key=\"index\">\n                    <input type=\"radio\" name=\"tabs-secondary\" :id=\"item\" v-model=\"activeStudyBottom\" :value=\"item\" />\n                    <label :for=\"item\">{{item}}</label>\n                </li>\n              </ul>\n            </div>\n\n\n\n\n            </van-dropdown-item>\n          </van-dropdown-menu>\n        </li> ")])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_18, null, 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_loading, {
    class: "loading-container",
    active: $data.isLoading,
    "onUpdate:active": _cache[5] || (_cache[5] = $event => $data.isLoading = $event),
    "can-cancel": false,
    loader: "dots",
    opacity: 0.2,
    backgroundColor: "#000",
    color: "#558BED",
    "is-full-page": false
  }, null, 8 /* PROPS */, ["active", "opacity"]), $data.activeStudy === 'MA' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("ul", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_20, "MA5: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_21, "MA10: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_22, "MA20: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)])) : $data.activeStudy === 'EMA' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("ul", _hoisted_23, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_24, "EMA5: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_25, "EMA10: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_26, "EMA20: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value * ($data.mode == 'mcap' ? $options.circulation : 1)), 4, 10), 1 /* TEXT */)])) : $data.activeStudy === 'BOLL' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("ul", _hoisted_27, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_28, "MIDDLE: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma1Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_29, "UPPER: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma2Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_30, "LOWER: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.smaData.sma3Value * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), _ctx.$store.state.currentAccount !== '' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_31, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_33, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.showSwapKline ? this.$t('showSwapKline') : this.$t('hideSwapKline')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_el_switch, {
    class: "flat-switch",
    modelValue: $data.showSwapKline,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.showSwapKline = $event),
    style: {
      "--el-switch-on-color": "#878fbc",
      "--el-switch-off-color": "#3B436D"
    },
    size: "small",
    "inline-prompt": "",
    onChange: $options.handleFlattenChange
  }, null, 8 /* PROPS */, ["modelValue", "onChange"])])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_34, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_35, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.toolTipValue.time), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_36, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('open')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.open * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_37, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('high')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.high * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_38, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('low')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.low * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_39, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('close')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.close * ($data.mode == 'mcap' ? $options.circulation : 1), 4, 10)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_40, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('changeV')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.toolTipValue.changeV > 0 ? '+' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.changeV, 3, 10)), 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_41, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('changeP')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.toolTipValue.changeV > 0 ? '+' : '') + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.changeP)) + "%", 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_42, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amplitude')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.a, 3, 10)) + "%", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <span :style=\"{ color:  toolTipValue.a > 0 ? $store.getters.upColor[1] : $store.getters.downColor[1]}\"\n            >{{ toolTipValue.a > 0 ? '+' : ''\n            }}{{ $f.formatNumber2(toolTipValue.a, 3, 10) }}%</span> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_43, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('volume')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.volume)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_44, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amount1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.toolTipValue.open + $data.toolTipValue.close > 0 ? _ctx.$f.formatNumber2($data.toolTipValue.volume * 2 / ($data.toolTipValue.open + $data.toolTipValue.close)) : 0), 1 /* TEXT */)]), _ctx.$store.state.isTokenKline && ((_$data$toolTipValue = $data.toolTipValue) === null || _$data$toolTipValue === void 0 ? void 0 : _$data$toolTipValue.timestamp) == _ctx.$f.timeToLocal(Number((_this$migrated = this.migrated) === null || _this$migrated === void 0 ? void 0 : _this$migrated.time)) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_45, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('migratedPrice')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$migrated = $data.migrated) === null || _$data$migrated === void 0 ? void 0 : _$data$migrated.migratePrice) || ((_$data$migrated2 = $data.migrated) === null || _$data$migrated2 === void 0 || (_$data$migrated2 = _$data$migrated2.tag) === null || _$data$migrated2 === void 0 || (_$data$migrated2 = _$data$migrated2.split('_')) === null || _$data$migrated2 === void 0 ? void 0 : _$data$migrated2[4]) || 0)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_46, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('migratedAt')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatDate(((_$data$migrated3 = $data.migrated) === null || _$data$migrated3 === void 0 ? void 0 : _$data$migrated3.migrateTime) || ((_$data$migrated4 = $data.migrated) === null || _$data$migrated4 === void 0 || (_$data$migrated4 = _$data$migrated4.tag) === null || _$data$migrated4 === void 0 || (_$data$migrated4 = _$data$migrated4.split('_')) === null || _$data$migrated4 === void 0 ? void 0 : _$data$migrated4[3]) || 0)), 1 /* TEXT */)])], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_47, [$data.activeStudyBottom === 'VOL' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", _hoisted_48, [_hoisted_49, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      color: $data.toolTipValue.changeV > 0 ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
    })
  }, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.volume)), 5 /* TEXT, STYLE */)])) : $data.activeStudyBottom === 'MACD' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_50, "MACD: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.macd * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_51, "DIF: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.dif * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_52, "DEA: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.dea * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : $data.activeStudyBottom === 'RSI' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", _hoisted_53, " RSI(14): " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.rsi * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */)) : $data.activeStudyBottom === 'KDJ' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 3
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_54, "K: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.k * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_55, "D: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.d * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_56, "J: " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($data.toolTipValue.j * ($data.mode == 'mcap' ? $options.circulation : 1))), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]), _hoisted_57]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_58, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tabs, {
    active: $data.activeStudy,
    "onUpdate:active": _cache[7] || (_cache[7] = $event => $data.activeStudy = $event),
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
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($data.studyList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_tab, {
        key: index,
        title: item,
        name: item,
        class: "tab-item"
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"]), _hoisted_59, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tabs, {
    active: $data.activeStudyBottom,
    "onUpdate:active": _cache[8] || (_cache[8] = $event => $data.activeStudyBottom = $event),
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
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($data.studyBottomList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_tab, {
        key: index,
        title: item,
        name: item,
        class: "tab-item"
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_unknown_risk, {
    onInit: $options.initTradingView,
    loading: $data.isLoading
  }, null, 8 /* PROPS */, ["onInit", "loading"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_popup, {
    show: $data.markDetailVisible,
    "onUpdate:show": _cache[9] || (_cache[9] = $event => $data.markDetailVisible = $event),
    class: "mark-detail-popup",
    round: "",
    position: "bottom",
    teleport: "#app",
    style: {
      width: '100%',
      maxHeight: '60%',
      background: '#1D223D'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [$data.markDetail ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_60, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_61, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_62, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.typeName), 1 /* TEXT */), $data.markDetail.side !== 'signal' && $data.markDetail.sideLabel ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", {
      key: 0,
      class: "mark-detail-side",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: $data.markDetail.side === 'buy' ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.sideLabel), 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_63, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($data.markDetail.items, (item, idx) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
        key: idx,
        class: "mark-detail-item"
      }, [item.logo ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 0,
        src: item.logo,
        alt: "",
        class: "mark-detail-avatar"
      }, null, 8 /* PROPS */, _hoisted_64)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_65, [$data.markDetail.side !== 'signal' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_66, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_67, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.displayName || item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
        class: "mark-detail-side",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
          color: $data.markDetail.side === 'buy' ? _ctx.$store.getters.upColor[1] : _ctx.$store.getters.downColor[1]
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.sideLabel), 5 /* TEXT, STYLE */)]), item.address ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("button", {
        key: 0,
        type: "button",
        class: "mark-detail-whale-btn",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.goWhaleTracking(item), ["stop"])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('whaleTracking')), 9 /* TEXT, PROPS */, _hoisted_68)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 信号 "), $data.markDetail.side === 'signal' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_69, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('nthSignal', {
        n: item.history_count
      })), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_70, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.timeText), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : String($data.markDetail.type) === '30' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 2
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 聪明钱：对齐 ave_web getTooltipTxt(type=30) "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_71, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.isBuy ? _ctx.$t('inflow') : _ctx.$t('outflow')) + ": " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.volume, 2)) + "(" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.txns || 0) + ") ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_72, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.isBuy ? _ctx.$t('campaignBuyAvg') : _ctx.$t('campaignSellAvg')) + ": $" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.avgPrice, 4)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_73, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.markDetail.sideLabel) + ": " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.volume, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_74, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.timeText), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 3
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" DEV / KOL 等：对齐 ave_web 默认 tooltip "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_75, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amountB')) + ": " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.amount, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_76, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amountU')) + ": $" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.volume, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_77, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('price')) + ": $" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.avgPrice, 4)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_78, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('Txs')) + ": " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.txns), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_79, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.timeText), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))])]);
    }), 128 /* KEYED_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_popup, {
    show: $data.dialogVisible,
    "onUpdate:show": _cache[10] || (_cache[10] = $event => $data.dialogVisible = $event),
    class: "popup-container",
    closeable: true,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "bottom",
    teleport: "#app",
    style: {
      width: '100%',
      height: '80%',
      background: '#111826',
      'padding-bottom': '40px',
      'padding-top': '40px'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("iframe", {
      style: {
        "width": "100%",
        "height": "100%",
        "border": "none"
      },
      src: _ctx.$f.getBubbleUrl($options.tokenAddress, $options.chain),
      allow: "clipboard-write",
      frameborder: "0"
    }, null, 8 /* PROPS */, _hoisted_80)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-3e33d04e"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0,
  class: "count"
};
const _hoisted_2 = {
  class: "block"
};
const _hoisted_3 = {
  class: "block ml_10"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
  class: "colon"
}, ":", -1 /* HOISTED */));
const _hoisted_5 = {
  class: "block"
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
  class: "colon"
}, ":", -1 /* HOISTED */));
const _hoisted_7 = {
  class: "block"
};
const _hoisted_8 = {
  key: 1,
  class: "risk"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_count_down = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-count-down");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  return !(this.$store.state.tokenPrice || this.tokenInfo.priceUSD) && !$props.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [$data.showTime && $options.time > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_count_down, {
    key: 0,
    class: "count-down",
    time: $options.time,
    onFinish: $options.onFinish,
    format: "DD:HH:mm:ss"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(timeData => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(timeData.days < 10 ? '0' + timeData.days : timeData.days), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('DD')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(timeData.hours < 10 ? '0' + timeData.hours : timeData.hours), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('HH')), 1 /* TEXT */)]), _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(timeData.minutes < 10 ? '0' + timeData.minutes : timeData.minutes), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('MM')), 1 /* TEXT */)]), _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(timeData.seconds < 10 ? '0' + timeData.seconds : timeData.seconds), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('SS')), 1 /* TEXT */)])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["time", "onFinish"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    name: "info-o",
    style: {
      "color": "rgb(248, 190, 70)"
    }
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('unknownRisk')), 1 /* TEXT */)]))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".kline-tooltip {\n  position: absolute;\n  display: none;\n  padding: 0.16rem;\n  box-sizing: border-box;\n  font-size: 0.2rem;\n  color: #fff;\n  background-color: #1d223d;\n  text-align: left;\n  z-index: 1000;\n  top: 0.7rem;\n  left: 0.24rem;\n  pointer-events: none;\n  border: 0.02rem solid #7281a0;\n  border-radius: 0.1rem;\n}\n.kline-tooltip .kline-tooltip-li {\n  display: flex;\n  justify-content: space-between;\n}\n.kline-tooltip .kline-tooltip-li + .kline-tooltip-li {\n  margin-top: 0.16rem;\n}\n.kline-tooltip .kline-tooltip-li > :first-child {\n  margin-right: 0.3rem;\n}\n.kline-tooltip .kline-tooltip-li .up {\n  color: #2fa89a;\n}\n.kline-tooltip .kline-tooltip-li .down {\n  color: #fa6b82;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".k-line-chart-container[data-v-ff68c2a2] {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 0.08rem 0.22rem 0 rgba(29, 34, 61, 0.45);\n  background-color: #1d223d;\n  width: 100%;\n  height: 8.8rem;\n  padding: 0;\n  position: relative;\n  --van-dropdown-menu-height: 0.3rem;\n  --van-dropdown-menu-background-color:transparent;\n  --van-dropdown-menu-title-text-color: #878FBC;\n  --van-dropdown-menu-title-font-size: 0.24rem;\n}\n.k-line-chart[data-v-ff68c2a2] {\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n.resolution-radio[data-v-ff68c2a2] {\n  text-align: left;\n  margin-bottom: 0.3rem;\n}\n.tabs-container[data-v-ff68c2a2] .van-tabs__wrap {\n  height: 0.6rem;\n}\n.tabs-container[data-v-ff68c2a2] .van-tabs__wrap .van-tab {\n  font-size: 0.24rem;\n}\n.study-bottom[data-v-ff68c2a2] {\n  display: flex;\n  align-items: center;\n  background: #2C3254;\n  padding: 0.14rem 0;\n}\n.kline-logo-marks[data-v-ff68c2a2] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 4;\n  pointer-events: none;\n  overflow: hidden;\n}\n.kline-logo-marks[data-v-ff68c2a2] .kline-logo-mark {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0.36rem;\n  height: 0.36rem;\n  border-radius: 50%;\n  overflow: visible;\n  box-sizing: border-box;\n  will-change: transform;\n  pointer-events: auto;\n  cursor: pointer;\n}\n.kline-logo-marks[data-v-ff68c2a2] .kline-logo-mark img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  display: block;\n  background: #1d223d;\n  pointer-events: none;\n}\n.kline-logo-marks[data-v-ff68c2a2] .kline-logo-mark .kline-logo-mark-count {\n  position: absolute;\n  right: -0.06rem;\n  top: -0.06rem;\n  min-width: 0.2rem;\n  height: 0.2rem;\n  padding: 0 0.04rem;\n  border-radius: 0.1rem;\n  background: #558BED;\n  color: #fff;\n  font-size: 0.16rem;\n  line-height: 0.2rem;\n  text-align: center;\n  pointer-events: none;\n}\n.mark-detail[data-v-ff68c2a2] {\n  padding: 0.32rem 0.32rem 0.48rem;\n  color: #fff;\n}\n.mark-detail .mark-detail-header[data-v-ff68c2a2] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.24rem;\n}\n.mark-detail .mark-detail-title[data-v-ff68c2a2] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n  font-size: 0.32rem;\n  font-weight: 600;\n}\n.mark-detail .mark-detail-side[data-v-ff68c2a2] {\n  font-size: 0.26rem;\n  font-weight: 500;\n}\n.mark-detail .mark-detail-list[data-v-ff68c2a2] {\n  max-height: 45vh;\n  overflow-y: auto;\n  padding: 0;\n  margin: 0;\n}\n.mark-detail .mark-detail-item[data-v-ff68c2a2] {\n  display: flex;\n  align-items: flex-start;\n  padding: 0.24rem 0;\n  border-top: 0.02rem solid rgba(135, 143, 188, 0.2);\n}\n.mark-detail .mark-detail-avatar[data-v-ff68c2a2] {\n  width: 0.56rem;\n  height: 0.56rem;\n  border-radius: 50%;\n  margin-right: 0.2rem;\n  object-fit: cover;\n  flex-shrink: 0;\n  background: #2C3254;\n}\n.mark-detail .mark-detail-body[data-v-ff68c2a2] {\n  flex: 1;\n  min-width: 0;\n}\n.mark-detail .mark-detail-name-row[data-v-ff68c2a2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.16rem;\n  margin-bottom: 0.12rem;\n}\n.mark-detail .mark-detail-name[data-v-ff68c2a2] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  word-break: break-all;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.12rem;\n  min-width: 0;\n  flex: 1;\n}\n.mark-detail .mark-detail-addr[data-v-ff68c2a2] {\n  font-size: 0.24rem;\n  font-weight: 400;\n  color: #878FBC;\n}\n.mark-detail .mark-detail-whale-btn[data-v-ff68c2a2] {\n  flex-shrink: 0;\n  border: none;\n  padding: 0;\n  font-size: 0.24rem;\n  line-height: 1.2;\n  color: #3F80F7;\n  background: transparent;\n  cursor: pointer;\n}\n.mark-detail .mark-detail-line[data-v-ff68c2a2] {\n  font-size: 0.24rem;\n  color: #878FBC;\n  line-height: 1.7;\n}\n.mark-detail .mark-detail-row[data-v-ff68c2a2] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.16rem;\n  font-size: 0.24rem;\n  color: #878FBC;\n  line-height: 1.6;\n}\n.kline-legend[data-v-ff68c2a2] {\n  position: absolute;\n  left: 0.2rem;\n  top: 0.2rem;\n  display: flex;\n  z-index: 2;\n  font-size: 0.2rem;\n}\n.kline-legend.kline-legend1[data-v-ff68c2a2] {\n  z-index: 3;\n  top: 0.6rem;\n}\n.kline-legend li + li[data-v-ff68c2a2] {\n  margin-left: 0.2rem;\n}\n.kline-legend .legend-1[data-v-ff68c2a2] {\n  color: #f7d01a;\n}\n.kline-legend .legend-2[data-v-ff68c2a2] {\n  color: #30e0a1;\n}\n.kline-legend .legend-3[data-v-ff68c2a2] {\n  color: #e472f5;\n}\n.kline-bottom-legend[data-v-ff68c2a2] {\n  left: 0.2rem;\n  top: calc(80% - 0.1rem);\n}\n.loading-container[data-v-ff68c2a2] {\n  z-index: 2;\n}\n.info[data-v-ff68c2a2] {\n  color: #878FBC;\n  background: #2C3254;\n}\n.info .border[data-v-ff68c2a2] {\n  border-top: 0.02rem solid #878fbc4d;\n}\n.info .pt-10[data-v-ff68c2a2] {\n  padding-top: 0.2rem;\n}\n.info .pb-10[data-v-ff68c2a2] {\n  padding-bottom: 0.2rem;\n}\n.info ul[data-v-ff68c2a2] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n  height: 0.62rem;\n}\n.info ul.ul-1[data-v-ff68c2a2] {\n  height: 1.04rem;\n}\n.info ul.ul-1 li[data-v-ff68c2a2] {\n  margin-right: 0.16rem;\n}\n.info ul.mark-tabs-dropdown[data-v-ff68c2a2] {\n  flex-wrap: wrap;\n  height: auto;\n  min-height: 1.04rem;\n  padding: 0.2rem;\n  gap: 0.16rem 0.24rem;\n}\n.info ul.mark-tabs-dropdown .mark-tab-item[data-v-ff68c2a2] {\n  margin-right: 0;\n}\n.info ul.mark-tabs-dropdown .mark-tab-item .van-checkbox[data-v-ff68c2a2] {\n  --van-checkbox-label-color: #878FBC;\n  --van-checkbox-checked-icon-color: #558BED;\n  font-size: 0.26rem;\n}\n.info ul li[data-v-ff68c2a2] {\n  font-size: 0.26rem;\n  color: #878FBC;\n  letter-spacing: 0;\n  font-weight: 500;\n}\n.info ul li label[data-v-ff68c2a2] {\n  /* padding: 8px 0; */\n  padding-top: 0.02rem;\n  color: #878FBC;\n  box-sizing: border-box;\n  display: block;\n}\n.info ul li label[data-v-ff68c2a2]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n.info ul li input[data-v-ff68c2a2] {\n  display: none;\n}\n.info ul li input:checked + label[data-v-ff68c2a2] {\n  color: #558BED;\n}\n.line[data-v-ff68c2a2] {\n  width: 0;\n  height: 0.2rem;\n  border-right: 0.02rem solid #878fbc4d;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".count[data-v-3e33d04e] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n.count-down[data-v-3e33d04e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.count-down .colon[data-v-3e33d04e] {\n  display: inline-block;\n  margin: 0 0.08rem;\n  color: #3B436D;\n  font-size: 0.4rem;\n  font-weight: bold;\n}\n.count-down .block[data-v-3e33d04e] {\n  display: inline-block;\n  color: #fff;\n  font-size: 0.4rem;\n  text-align: center;\n  background-color: #3B436D;\n  padding: 0.12rem;\n}\n.count-down .block span[data-v-3e33d04e] {\n  font-size: 0.24rem;\n  color: #878FBC;\n  letter-spacing: 0;\n  text-align: right;\n  font-weight: 500;\n  display: block;\n  text-align: center;\n}\n.risk[data-v-3e33d04e] {\n  background-color: #3B436D;\n  padding: 0.2rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("de83502c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("10c69b00", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6cbe4d68", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/bubble.png":
/*!**************************************!*\
  !*** ./src/assets/images/bubble.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgBzZjPbxJBFMffLOxhSQMaTMqhtYUm6E1PBoIaGj14k3/BP0DDf9DyH6Dxj9BbvXkwKaltaKoHDjZRki4EmhQSSWTTgAk/xvfGQrYtu7PdhdJv0nbZ6TKf+b55b2aHwQU9fp5NM+Avh5xnAPgqzEKMlYDzkqr6coXP+eq5ptFFOpO91TP4BrBhFq5TTMmrCyxX2Mr/GQMJmNPhNlI/hHkIHVMXlHWCUuizcGZeMCTsu3eKDMSWeJFd9fUGFbgBYoyv+xFmA6YkVVVhcTECoVBIXHc6HTCMNrRaLej1evIv4ErGDwxDxRl4EXUejcYgFl0DP15PUrn8EyoV3RaMY3az1LPXHDwoEAhAMpECDf/K1EXHivt7wjkrKeBB5IxTGJJ2Bq9auOgZKIohcgpjhqLwTh2IRhmP3wM3ooFYueQaKBwOg1sRTCQSgakCBYMh8CKr510DBa44dy5q6iFzVOhsZJX6roHa7TZ4kWEYE++7Bmo2G9Dvu3ep1foNUwWikOm6Dm5Ey4hVyD0VxkrlSCwHVxH9P61pVnIMRFkRDAbPZQeNktYmp1CjtcwuIfzgAIQqMlVX8xd/+34gthaULTtfC6LdqnL3KbzoCjkqy07pav/0SRqCoclFrFjcFXsdM3w4fEc4SXWKOqdspARwWiZsHVpeXraEIcXj9xFqb/yZOm00TsSPW9nOoaWlu3bNwg0nFZscc7r2SeeQTJqm2W64ksmUACd53qB1u/Lssaq4JAr5CIZEeyHZlsUWqF6v2zXD8XHNdrKaYcZQWsA9EJX3cvnXxDYDs+fw8AfYP9+6dE/munQOUZlvNk/EtpNGR+sXdaTrR7JH0eGaeGYUJhqgbBBYh95UZnaocKZRdZfWInylVvCN7BPMWATi7EWRlxQ87diCGyJ14Mv5avpBdSX26Da95sMchWdSb3e2330QWeYf+DfxVgnmJZw7/xkAfPSrWt3/u7aS/MiVoXbdTpEzGKpXhYLpwMqsRBqPZ3z9TcaUB3xmZ0asKpIJ5+/ul/cFc8s/vDpRnPi7GbMAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/kLineChart.vue":
/*!***************************************!*\
  !*** ./src/components/kLineChart.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kLineChart_vue_vue_type_template_id_ff68c2a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true */ "./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true");
/* harmony import */ var _kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=script&lang=js */ "./src/components/kLineChart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss */ "./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss");
/* harmony import */ var _kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true */ "./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_kLineChart_vue_vue_type_template_id_ff68c2a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-ff68c2a2"],['__file',"src/components/kLineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/kLineChart.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/kLineChart.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=0&id=ff68c2a2&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_0_id_ff68c2a2_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=style&index=1&id=ff68c2a2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_style_index_1_id_ff68c2a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_template_id_ff68c2a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/kLineChart.vue?vue&type=template&id=ff68c2a2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kLineChart_vue_vue_type_template_id_ff68c2a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/unknownRisk.vue":
/*!****************************************!*\
  !*** ./src/components/unknownRisk.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unknownRisk_vue_vue_type_template_id_3e33d04e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true */ "./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true");
/* harmony import */ var _unknownRisk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unknownRisk.vue?vue&type=script&lang=js */ "./src/components/unknownRisk.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true */ "./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_unknownRisk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_unknownRisk_vue_vue_type_template_id_3e33d04e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-3e33d04e"],['__file',"src/components/unknownRisk.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/unknownRisk.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/unknownRisk.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./unknownRisk.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=style&index=0&id=3e33d04e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_style_index_0_id_3e33d04e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_template_id_3e33d04e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/unknownRisk.vue?vue&type=template&id=3e33d04e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_unknownRisk_vue_vue_type_template_id_3e33d04e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/constants/walletDetail.js":
/*!***************************************!*\
  !*** ./src/constants/walletDetail.js ***!
  \***************************************/
/*! exports provided: walletDetailSupportChains, openWaleTrackingPopChains, NATIVE_TOKENS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletDetailSupportChains", function() { return walletDetailSupportChains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWaleTrackingPopChains", function() { return openWaleTrackingPopChains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIVE_TOKENS", function() { return NATIVE_TOKENS; });
/**
 * 当前钱包详情页支持的链
 * @type {string[]}
 */
const walletDetailSupportChains = ['bsc', 'solana', 'xlayer', 'eth'];

/**
 * 打开鲸鱼追踪弹窗的链
 */
const openWaleTrackingPopChains = ['fsc', 'heco', 'telegramx', 'dojo', 'ethw', 'ethf', 'pgchain', 'tc', 'eth', 'oec', 'tron', 'bsc', 'solana', 'xlayer', 'base', 'robinhood', 'stable'];
const NATIVE_TOKENS = ['0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'So11111111111111111111111111111111111111112', 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', 'Am5hwEp5VBqXoeE5pRU47RTW6gYeFQ6ahi1j4ZVVeL2V', '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', '0x55d398326f99059ff775485246999027b3197955', '0xe9e7cea3dedca5984780bafc599bd69add087d56', '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'];


/***/ })

}]);