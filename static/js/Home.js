(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chains/spotlight.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpotlightChains',
  props: {
    alterList: {
      type: Array,
      default: () => []
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png");
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/index.mjs");
/* harmony import */ var _components_sectorHotDetail_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sectorHotDetail.vue */ "./src/components/sectorHotDetail.vue");
/* harmony import */ var _components_riseFallBar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/riseFallBar.vue */ "./src/components/riseFallBar.vue");









// 点击后会离开热力图的 module（父层 sectorHeat.handleSectorClick 有对应分支）
const HEAT_MAP_LEAVING_MODULES = ['homelist', 'stock', 'signal', 'contract', 'treasure'];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HeatMap',
  components: {
    ElDrawer: element_plus__WEBPACK_IMPORTED_MODULE_5__["ElDrawer"],
    SectorHotDetail: _components_sectorHotDetail_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    RiseFallBar: _components_riseFallBar_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  emits: ['sector-click', 'back', 'update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    // 抽屉内视图：'heat' 板块网格 | 'detail' 热点板块详情
    view: {
      type: String,
      default: 'heat'
    },
    // 热点板块详情请求参数（view === 'detail' 时使用）
    category: {
      type: String,
      default: ''
    },
    sectors: {
      type: Array,
      default: () => []
    },
    distribution: {
      type: Object,
      default: () => ({
        rise_count: 0,
        fall_count: 0,
        total_count: 0,
        rise_pct: 0,
        fall_pct: 0
      })
    }
  },
  data() {
    return {
      defaultIcon: (_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_4___default()),
      scrollTop: 0,
      touchStartY: 0,
      // 滑入动画期间：卡片尚未到位，此时的点击会落到遮罩或错位的邻卡上，一律屏蔽
      animating: false,
      // 卡片展示顺序（值为原始 sectors 下标）：1,2,3,4,6,7,8,10,12,5,11,13,9,14,15
      sectorOrder: [0, 1, 2, 4, 5, 6, 7, 9, 11, 3, 10, 12, 8, 13, 14]
    };
  },
  computed: {
    visible: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      }
    },
    filteredSectors() {
      // const sectors = this.sectors.filter(sector => {
      //   const volume = parseFloat(sector.volume_24h)
      //   return volume && volume > 0
      // })

      // 按 sectorOrder 重新排列
      return this.sectorOrder.map(index => this.sectors[index]).filter(Boolean);
    }
  },
  mounted() {},
  beforeUnmount() {
    this.unlockBodyScroll();
  },
  watch: {
    modelValue(val) {
      console.log('update:modelValue', val);
      if (val) {
        this.lockBodyScroll();
      } else {
        this.unlockBodyScroll();
      }
    }
  },
  methods: {
    lockBodyScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollTop}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.addEventListener('touchstart', this.recordTouchStart, {
        passive: true
      });
      document.addEventListener('touchmove', this.preventTouchMove, {
        passive: false
      });
    },
    unlockBodyScroll() {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.removeEventListener('touchstart', this.recordTouchStart);
      document.removeEventListener('touchmove', this.preventTouchMove);
      window.scrollTo(0, this.scrollTop);
    },
    recordTouchStart(e) {
      var _e$touches;
      this.touchStartY = ((_e$touches = e.touches) === null || _e$touches === void 0 || (_e$touches = _e$touches[0]) === null || _e$touches === void 0 ? void 0 : _e$touches.clientY) || 0;
    },
    preventTouchMove(e) {
      var _e$target, _e$target$closest, _e$touches2, _e$touches3;
      // 找抽屉内可滚动容器；不在其中 → 阻止背景滚动
      const scroller = (_e$target = e.target) === null || _e$target === void 0 || (_e$target$closest = _e$target.closest) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.call(_e$target, '.token-scroll, .heat-map-container');
      if (!scroller) {
        e.preventDefault();
        return;
      }
      // 多指(缩放等)不干预
      if ((((_e$touches2 = e.touches) === null || _e$touches2 === void 0 ? void 0 : _e$touches2.length) || 0) > 1) return;
      const curY = ((_e$touches3 = e.touches) === null || _e$touches3 === void 0 || (_e$touches3 = _e$touches3[0]) === null || _e$touches3 === void 0 ? void 0 : _e$touches3.clientY) || 0;
      const deltaY = curY - this.touchStartY; // >0 手指下移(内容想露出顶部) / <0 手指上移(想露出底部)
      const atTop = scroller.scrollTop <= 0;
      const atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;
      // 仅在触边且继续同向时阻止橡皮筋；中间区域放行
      if (atTop && deltaY > 0 || atBottom && deltaY < 0) {
        e.preventDefault();
      }
    },
    // 按原始 sector 序号返回背景色透明度(16进制后缀)：0-4→10%(1A) / 5-8→6%(0F) / 9-14→4%(0A)
    bgOpacityHex(index) {
      if (index <= 4) return '1A';
      if (index <= 8) return '0F';
      return '0A';
    },
    // 获取涨跌幅样式类
    getPriceChangeClass(change) {
      if (change === undefined || change === null || change === 0) {
        return 'neutral';
      }
      return change > 0 ? 'positive' : 'negative';
    },
    handleSectorClick(sector) {
      if (this.animating) return;
      this.$emit('sector-click', sector);
      // 父层会消费掉的“离开热力图”类 module → 关抽屉；hot_detail 留在抽屉内切详情；
      // 未知 module 不关抽屉，否则会出现“抽屉关了但什么都没发生”
      const lm = (sector === null || sector === void 0 ? void 0 : sector.link_module) || {};
      if (HEAT_MAP_LEAVING_MODULES.includes(lm.module)) {
        this.$emit('update:modelValue', false);
      }
    },
    // 返回箭头：详情态交父层处理（回网格或关抽屉），网格态直接关抽屉
    onBack() {
      if (this.view === 'detail') {
        this.$emit('back');
      } else {
        this.visible = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/lineChart.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/lineChart.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Volume',
  props: {
    type: {
      // 1:交易量，2:流动性
      type: String,
      default: '1'
    },
    dataX: Array,
    dataY: Array,
    priceChange: Number
  },
  data() {
    return {
      myChart: null,
      loading: false
    };
  },
  watch: {
    dataY() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init(dataX = this.dataX, dataY = this.dataY, type = this.type) {
      var myChart = echarts__WEBPACK_IMPORTED_MODULE_0__["init"](document.getElementById(`main${type}`));
      var option = {
        tooltip: {
          trigger: 'axis',
          // appendToBody: true,
          backgroundColor: '#1B213D',
          borderWidth: 0,
          textStyle: {
            fontSize: 10,
            color: '#fff'
          }
        },
        grid: {
          left: '5',
          //图表距边框的距离
          right: '5',
          top: '0',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: this.dataX,
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#787B86',
            show: false
          },
          nameTextStyle: {
            fontSize: 12
          }
        },
        yAxis: {
          type: 'value',
          name: ``,
          nameTextStyle: {
            fontSize: 12
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#787B86',
            formatter: '{value}',
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#eee',
              width: '0.5'
            }
          },
          min: function (value) {
            return parseInt(value.min * 0.95);
          },
          max: function (value) {
            return Math.ceil(value.max);
          }
        },
        series: [{
          name: '',
          type: 'line',
          data: dataY,
          smooth: true,
          // areaStyle: {
          //   color: {
          //     type: 'linear',
          //     x: 0,
          //     y: 0,
          //     x2: 0,
          //     y2: 1,
          //     colorStops: [
          //       {
          //         offset: 0,
          //         color:   'rgba(63, 128, 247, 0.9)', // 0% 处的颜色
          //       },
          //       {
          //         offset: 1,
          //         color:  'rgba(63, 128, 247, 0.1)' , // 100% 处的颜色
          //       },
          //     ],
          //     globalCoord: false, // 缺省为 false
          //   },
          // },
          lineStyle: {
            width: 1,
            color: this.priceChange > 0 ? '#12B886' : '#F6465D'
          },
          emphasis: {
            disabled: true,
            focus: 'series'
          },
          itemStyle: {
            color: this.priceChange > 0 ? '#12B886' : '#F6465D'
          },
          tooltip: {
            valueFormatter: value => '$' + this.$f.formatNumber2(value || 0, 3, 4)
          }
        }]
      };
      myChart.setOption(option);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/liveCard.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LiveCard',
  props: {
    live: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isZh() {
      return (this.$store.getters.language || '').includes('zh');
    },
    title() {
      return this.isZh ? this.live.title || this.live.title_en : this.live.title_en || this.live.title;
    },
    topic() {
      return this.isZh ? this.live.topic || this.live.topic_en : this.live.topic_en || this.live.topic;
    },
    description() {
      return this.isZh ? this.live.description || this.live.description_en : this.live.description_en || this.live.description;
    }
  },
  methods: {
    openLive() {
      if (this.live.live_link) {
        window.open(this.live.live_link, '_blank');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/noticeBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NoticeBar',
  props: {
    notice: String
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/riseFallBar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RiseFallBar',
  props: {
    // { rise_pct, fall_pct }
    distribution: {
      type: Object,
      default: null
    },
    // 某侧为 0 时的固定宽度(px)
    zeroWidth: {
      type: Number,
      default: 32
    }
  },
  computed: {
    upColor() {
      return this.$store.getters.upColor[3];
    },
    downColor() {
      return this.$store.getters.downColor[3];
    },
    // 涨/跌条：按比例伸缩；某侧为 0 时固定 zeroWidth
    riseStyle() {
      var _this$distribution;
      const rise = Number((_this$distribution = this.distribution) === null || _this$distribution === void 0 ? void 0 : _this$distribution.rise_pct) || 0;
      const base = {
        background: this.upColor
      };
      return rise === 0 ? {
        ...base,
        flex: `0 0 ${this.zeroWidth}px`
      } : {
        ...base,
        flex: `${rise} 1 0%`
      };
    },
    fallStyle() {
      var _this$distribution2;
      const fall = Number((_this$distribution2 = this.distribution) === null || _this$distribution2 === void 0 ? void 0 : _this$distribution2.fall_pct) || 0;
      const base = {
        background: this.downColor
      };
      return fall === 0 ? {
        ...base,
        flex: `0 0 ${this.zeroWidth}px`
      } : {
        ...base,
        flex: `${fall} 1 0%`
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorCard.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png");
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectorCard',
  props: {
    sector: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultIcon: (_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_0___default())
    };
  }
  // watch: {
  //   sector:{
  //     handle (val) {
  //       console.log(val)
  //     },
  //     immediate: true
  //   }
  // }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHeat.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_heatMap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/heatMap.vue */ "./src/components/heatMap.vue");
/* harmony import */ var _components_chains_spotlight_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/chains/spotlight.vue */ "./src/components/chains/spotlight.vue");
/* harmony import */ var _components_sectorCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/sectorCard.vue */ "./src/components/sectorCard.vue");
/* harmony import */ var _components_liveCard_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/liveCard.vue */ "./src/components/liveCard.vue");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/index.mjs");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectorHeat',
  props: {
    sort: {
      type: String,
      default: ''
    },
    sortDir: {
      type: String,
      default: 'desc'
    },
    // spotlight cells：有序，每个 cell 一张卡片
    cells: {
      type: Array,
      default: () => []
    }
  },
  emits: ['sector-click'],
  components: {
    heatMap: _components_heatMap_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SpotlightChains: _components_chains_spotlight_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SectorCard: _components_sectorCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LiveCard: _components_liveCard_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data() {
    return {
      showHeatMap: false,
      loading: false,
      distribution: null,
      sectors: [],
      // 热点板块详情
      heatView: 'heat',
      // 'heat' 网格 | 'detail' 详情
      detailCategory: '',
      detailOrigin: 'grid',
      // 'grid' 从网格进入 | 'direct' 直接打开
      refreshTimer: null,
      marketMode: Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_7__["useStorage"])('marketMode', 0),
      stocksActiveTab: Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_7__["useStorage"])('stocks_active_tab', 'all'),
      signalChain: Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_7__["useStorage"])('signalChain', 'Solana'),
      activePerpCategory: Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_7__["useSessionStorage"])('perp_activePerpCategory', 'all'),
      selectedChain: Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_7__["useStorage"])('selectedChain', '')
    };
  },
  created() {
    // 使用 lodash debounce，300ms 防抖；按当前视图拉取
    this.debouncedFetch = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this._fetchCurrent, 300);
  },
  deactivated() {
    // 页面被缓存时清除定时器并取消防抖
    this.stopRefreshTimer();
    if (this.debouncedFetch && this.debouncedFetch.cancel) {
      this.debouncedFetch.cancel();
    }
  },
  beforeUnmount() {
    // 组件销毁时清除定时器并取消防抖
    this.stopRefreshTimer();
    if (this.debouncedFetch && this.debouncedFetch.cancel) {
      this.debouncedFetch.cancel();
    }
  },
  methods: {
    startRefreshTimer() {
      // 如果已有定时器，先清除
      this.stopRefreshTimer();
      // 启动新的定时器
      this.refreshTimer = setInterval(() => {
        this.debouncedFetch();
      }, 60 * 1000);
    },
    stopRefreshTimer() {
      if (this.refreshTimer) {
        clearInterval(this.refreshTimer);
        this.refreshTimer = null;
      }
    },
    // 按当前视图拉取（详情视图由 SectorHotDetail 自拉，此处只拉网格）
    _fetchCurrent() {
      if (this.heatView === 'detail') return;
      return this._fetchSectorHeat();
    },
    // heatMap 数据源（全量板块），与首页 3 卡片无关
    async _fetchSectorHeat() {
      this.loading = true;
      try {
        const res = await Object(_api__WEBPACK_IMPORTED_MODULE_1__["getSectorHeat"])({
          sort: this.sort,
          sortDir: this.sortDir
        });
        if (res && res.distribution) {
          this.distribution = res.distribution;
        }
        if (res && res.sectors) {
          this.sectors = res.sectors || [];
        }
      } catch (err) {
        console.error('Failed to fetch sector heat:', err);
        this.sectors = [];
      } finally {
        this.loading = false;
      }
    },
    // 点击板块
    handleSectorClick(sector) {
      console.log('handleSectorClick', sector);
      const link_module = (sector === null || sector === void 0 ? void 0 : sector.link_module) || {};
      if (link_module.module === 'homelist') {
        this.$emit('sector-click', sector);
      } else if (link_module.module === 'stock') {
        var _link_module$params;
        this.marketMode = 3;
        this.stocksActiveTab = (link_module === null || link_module === void 0 || (_link_module$params = link_module.params) === null || _link_module$params === void 0 ? void 0 : _link_module$params.category) || 'all';
        if (!this.selectedChain) {
          // 触发filter正确初始化
          this.$router.push({
            name: 'Market',
            params: {
              chain: 'AllChains'
            }
          });
          setTimeout(() => {
            this.$router.push({
              name: 'Stocks'
            });
          }, 500);
        } else {
          this.$router.push({
            name: 'Stocks'
          });
        }
      } else if (link_module.module === 'signal') {
        var _link_module$params2, _this$$store$state$ch;
        this.marketMode = 1;
        const chain = ((link_module === null || link_module === void 0 || (_link_module$params2 = link_module.params) === null || _link_module$params2 === void 0 ? void 0 : _link_module$params2.chain) || 'solana').toLowerCase();
        this.signalChain = (_this$$store$state$ch = this.$store.state.chainConfig) === null || _this$$store$state$ch === void 0 || (_this$$store$state$ch = _this$$store$state$ch[chain]) === null || _this$$store$state$ch === void 0 ? void 0 : _this$$store$state$ch.name;
        if (!this.signalChain) {
          if (chain === 'solana') {
            this.signalChain = 'Solana';
          } else if (chain === 'bsc') {
            this.signalChain = 'BSC';
          } else {
            var _link_module$params3;
            this.signalChain = (link_module === null || link_module === void 0 || (_link_module$params3 = link_module.params) === null || _link_module$params3 === void 0 ? void 0 : _link_module$params3.chain) || 'Solana';
          }
        }
        if (!this.selectedChain) {
          // 触发filter正确初始化
          this.$router.push({
            name: 'Market',
            params: {
              chain: 'AllChains'
            }
          });
          setTimeout(() => {
            this.$router.push({
              name: 'Signal'
            });
          }, 500);
        } else {
          this.$router.push({
            name: 'Signal'
          });
        }
      } else if (link_module.module === 'contract') {
        var _link_module$params4;
        this.marketMode = 2;
        this.activePerpCategory = (link_module === null || link_module === void 0 || (_link_module$params4 = link_module.params) === null || _link_module$params4 === void 0 ? void 0 : _link_module$params4.category) || 'all';
        if (!this.selectedChain) {
          // 触发filter正确初始化
          this.$router.push({
            name: 'Market',
            params: {
              chain: 'AllChains'
            }
          });
          setTimeout(() => {
            this.$router.push({
              name: 'Perps'
            });
          }, 500);
        } else {
          this.$router.push({
            name: 'Perps'
          });
        }
      } else if (link_module.module === 'treasure') {
        var _link_module$params5, _link_module$params1;
        this.marketMode = 0;
        if (link_module !== null && link_module !== void 0 && (_link_module$params5 = link_module.params) !== null && _link_module$params5 !== void 0 && _link_module$params5.category) {
          var _link_module$params6, _link_module$params7;
          sessionStorage.setItem('chainsCategory', link_module === null || link_module === void 0 || (_link_module$params6 = link_module.params) === null || _link_module$params6 === void 0 ? void 0 : _link_module$params6.category);
          if (link_module !== null && link_module !== void 0 && (_link_module$params7 = link_module.params) !== null && _link_module$params7 !== void 0 && _link_module$params7.sub_category) {
            var _link_module$params8, _link_module$params9, _link_module$params0;
            sessionStorage.setItem('chainsSubCategory', JSON.stringify({
              [link_module === null || link_module === void 0 || (_link_module$params8 = link_module.params) === null || _link_module$params8 === void 0 ? void 0 : _link_module$params8.category]: link_module === null || link_module === void 0 || (_link_module$params9 = link_module.params) === null || _link_module$params9 === void 0 ? void 0 : _link_module$params9.sub_category
            }));
            sessionStorage.setItem('subCategory', link_module === null || link_module === void 0 || (_link_module$params0 = link_module.params) === null || _link_module$params0 === void 0 ? void 0 : _link_module$params0.sub_category);
          }
        }
        this.$router.push({
          name: 'Market',
          params: {
            chain: link_module === null || link_module === void 0 || (_link_module$params1 = link_module.params) === null || _link_module$params1 === void 0 ? void 0 : _link_module$params1.chain
          }
        });
        this.$store.state.marketNum++;
      } else if (link_module.module === 'hot_detail') {
        // link_module 为空 → 打开临时热点板块详情
        console.log('打开临时热点板块详情', sector);
        this.openHotDetail(sector);
      }
    },
    // 打开热点板块详情
    openHotDetail(sector) {
      var _sector$link_module;
      // TODO: 真实数据从 sector 取 category，暂无字段时回退到写死测试值
      this.detailCategory = (sector === null || sector === void 0 || (_sector$link_module = sector.link_module) === null || _sector$link_module === void 0 || (_sector$link_module = _sector$link_module.params) === null || _sector$link_module === void 0 ? void 0 : _sector$link_module.category) || (sector === null || sector === void 0 ? void 0 : sector.category) || '11_1784118834008';
      // 抽屉已打开（网格内点击）→ 返回回网格；否则直接打开 → 返回关抽屉
      this.detailOrigin = this.showHeatMap ? 'grid' : 'direct';
      this.heatView = 'detail';
      if (!this.showHeatMap) {
        this.showHeatMap = true;
      }
    },
    // 详情返回
    onHeatBack() {
      if (this.detailOrigin === 'grid') {
        this.heatView = 'heat';
      } else {
        this.showHeatMap = false;
      }
    },
    // 刷新数据
    refresh() {
      this.debouncedFetch();
    }
  },
  watch: {
    // 仅在 heatMap 打开时拉取并轮询数据（按当前视图）
    showHeatMap(val) {
      if (val) {
        // 详情视图由 SectorHotDetail 自拉，父级只在网格视图轮询
        if (this.heatView !== 'detail') {
          this.debouncedFetch();
          this.startRefreshTimer();
        }
      } else {
        this.stopRefreshTimer();
        if (this.debouncedFetch && this.debouncedFetch.cancel) {
          this.debouncedFetch.cancel();
        }
        // 关闭时复位到网格视图
        this.heatView = 'heat';
      }
    },
    // 切换视图：详情视图由 SectorHotDetail 自拉+推送，父级停止轮询；网格视图恢复轮询
    heatView(val) {
      if (!this.showHeatMap) return;
      if (val === 'detail') {
        this.stopRefreshTimer();
      } else {
        this.debouncedFetch();
        this.startRefreshTimer();
      }
    },
    sort() {
      if (this.showHeatMap && this.heatView === 'heat') this.debouncedFetch();
    },
    sortDir() {
      if (this.showHeatMap && this.heatView === 'heat') this.debouncedFetch();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHotDetail.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png");
/* harmony import */ var _assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_chainSelect_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/images/chainSelect.svg */ "./src/assets/images/chainSelect.svg");
/* harmony import */ var _assets_images_chainSelect_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_chainSelect_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_riseFallBar_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/riseFallBar.vue */ "./src/components/riseFallBar.vue");













// pricev2 一次订阅上限
const MAX_SUB = 100;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectorHotDetail',
  components: {
    RiseFallBar: _components_riseFallBar_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  emits: ['close'],
  props: {
    // 请求参数：板块 category，由父组件传入，组件自拉数据
    category: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultIcon: (_assets_images_icon_default_png__WEBPACK_IMPORTED_MODULE_7___default()),
      chainSelectIcon: (_assets_images_chainSelect_svg__WEBPACK_IMPORTED_MODULE_8___default()),
      localDetail: null,
      localTokens: [],
      selectedChain: 'all',
      queryChain: '',
      sortField: null,
      sortDir: 'desc',
      chainPopup: false
    };
  },
  computed: {
    s3BaseUrl() {
      return this.$store.state.s3BaseUrl;
    },
    // 选中具体网络(非 all/非空)时用该网络图标，否则用默认筛选图标
    chainBtnIcon() {
      if (this.selectedChain && this.selectedChain !== 'all') {
        return `${this.s3BaseUrl}chain/${this.selectedChain}.png`;
      }
      return this.chainSelectIcon;
    },
    upColor() {
      return this.$store.getters.upColor[3];
    },
    downColor() {
      return this.$store.getters.downColor[3];
    },
    // 统计行按当前展示列表（含链筛选）现算；price_change 随 pricev2 推送实时更新
    stats() {
      const list = this.localTokens;
      if (!list.length) return null;
      const acc = list.reduce((a, t) => {
        const chg = Number(t.price_change) || 0;
        return {
          totalVolume: a.totalVolume + (Number(t.tx_volume_u_24h) || 0),
          totalMcap: a.totalMcap + (Number(t.mcap) || 0),
          sumChange: a.sumChange + chg,
          riseCount: a.riseCount + (chg >= 0 ? 1 : 0),
          fallCount: a.fallCount + (chg < 0 ? 1 : 0)
        };
      }, {
        totalVolume: 0,
        totalMcap: 0,
        sumChange: 0,
        riseCount: 0,
        fallCount: 0
      });
      const totalCount = list.length;
      return {
        total_volume_24h: acc.totalVolume,
        total_market_cap: acc.totalMcap,
        price_change_24h: Math.round(acc.sumChange / totalCount * 100) / 100,
        _riseCount: acc.riseCount,
        _fallCount: acc.fallCount,
        _totalCount: totalCount
      };
    },
    distribution() {
      const s = this.stats;
      if (!s || !s._totalCount) return null;
      return {
        rise_pct: Math.round(s._riseCount / s._totalCount * 10000) / 100,
        fall_pct: Math.round(s._fallCount / s._totalCount * 10000) / 100
      };
    },
    chains() {
      var _this$localDetail;
      return ((_this$localDetail = this.localDetail) === null || _this$localDetail === void 0 ? void 0 : _this$localDetail.chains) || [];
    },
    chainOptions() {
      return [...this.chains];
    },
    filterChainOptions() {
      const q = this.queryChain.trim().toLowerCase();
      if (!q) return this.chainOptions;
      return this.chainOptions.filter(c => {
        if (c.chain === 'all') return false;
        return (c.chain_showname || '').toLowerCase().includes(q) || (c.chain || '').toLowerCase().includes(q);
      });
    },
    description() {
      if (!this.localDetail) return '';
      const lang = this.$store.getters.language || '';
      if (lang.includes('zh')) {
        return this.localDetail.description || this.localDetail.description_en;
      }
      return this.localDetail.description_en || this.localDetail.description;
    },
    displayTokens() {
      let list = (this.localTokens || []).slice();
      // 客户端链筛选
      if (this.selectedChain && this.selectedChain !== 'all') {
        list = list.filter(t => t.chain === this.selectedChain);
      }
      // 客户端排序（默认不排序，保持接口顺序）
      if (this.sortField) {
        const dir = this.sortDir === 'asc' ? 1 : -1;
        list.sort((a, b) => ((Number(a[this.sortField]) || 0) - (Number(b[this.sortField]) || 0)) * dir);
      }
      return list;
    }
  },
  mounted() {
    this.fetchDetail();
  },
  beforeUnmount() {
    this.$store.dispatch('unSubSector');
  },
  watch: {
    // pricev2 推送：仅刷新榜单价格与涨跌，统计行不受影响
    '$store.state.ws.multiPriceResult'(prices) {
      if (!Array.isArray(prices) || !prices.length || !this.localTokens.length) return;
      this.localTokens = this.localTokens.map(i => {
        const item = prices.find(j => j.token_id === i.token + '-' + i.chain);
        if (item) {
          const updated = {
            ...i,
            current_price_usd: item.current_price_usd,
            price_change: item.price_change,
            direction: (item === null || item === void 0 ? void 0 : item.direction) || 'down'
          };
          // 市值随价格重算（无 market_cap 时 = 流通量 × 现价）
          updated.mcap = this.computeMcap(updated);
          return updated;
        }
        return i;
      });
    },
    // 断线重连：有 sector 订阅则重订
    '$store.state.ws.isConnected'(connected) {
      var _this$$store$state$ws;
      if (connected && ((_this$$store$state$ws = this.$store.state.ws.multiPriceParams) === null || _this$$store$state$ws === void 0 || (_this$$store$state$ws = _this$$store$state$ws.sector) === null || _this$$store$state$ws === void 0 ? void 0 : _this$$store$state$ws.length) > 0) {
        this.$store.dispatch('subMultiPrice');
      }
    }
  },
  methods: {
    // 市值：优先接口 market_cap；否则 (total - lock - burn - other，下限 0) × 现价
    computeMcap(t) {
      if (t.market_cap) return Number(t.market_cap) || 0;
      let amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(t.total || 0).minus(t.lock_amount || 0).minus(t.burn_amount || 0).minus(t.other_amount || 0);
      if (amount.isLessThan(0)) amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(0);
      return amount.multipliedBy(t.current_price_usd || 0).toNumber();
    },
    // 自拉热点板块详情（拉一次，统计行静止；榜单价格靠 pricev2 推送刷新）
    async fetchDetail() {
      if (!this.category) return;
      try {
        const res = await Object(_api__WEBPACK_IMPORTED_MODULE_9__["getSectorHotDetail"])({
          category: this.category
        });
        this.localDetail = res || null;
        this.localTokens = ((res === null || res === void 0 ? void 0 : res.tokens) || []).map(t => ({
          ...t,
          mcap: this.computeMcap(t)
        }));
        this.subscribePrice();
      } catch (err) {
        console.error('Failed to fetch sector hot detail:', err);
        this.localDetail = null;
        this.localTokens = [];
      }
    },
    // 订阅榜单 token 的 pricev2 实时价
    subscribePrice() {
      let keys = this.localTokens.filter(t => t.token && t.chain).map(t => `${t.token}-${t.chain}`);
      keys = [...new Set(keys)];
      if (keys.length > MAX_SUB) {
        console.warn(`[sectorHotDetail] pricev2 订阅数 ${keys.length} 超上限，截断至 ${MAX_SUB}，丢弃 ${keys.length - MAX_SUB} 个`);
        keys = keys.slice(0, MAX_SUB);
      }
      this.$store.commit('setWsState', {
        name: 'multiPriceParams',
        value: {
          ...this.$store.state.ws.multiPriceParams,
          sector: keys
        }
      });
      this.$store.dispatch('subMultiPrice');
    },
    // 三态循环：正序(asc) → 逆序(desc) → 取消(恢复接口顺序)
    toggleSort(field) {
      if (this.sortField !== field) {
        this.sortField = field;
        this.sortDir = 'asc';
      } else if (this.sortDir === 'asc') {
        this.sortDir = 'desc';
      } else {
        this.sortField = null;
        this.sortDir = 'asc';
      }
    },
    setSort(field, dir) {
      this.sortField = field;
      this.sortDir = dir;
    },
    selectChain(chain) {
      this.selectedChain = chain;
      this.chainPopup = false;
    },
    onTokenClick(t) {
      var _t$token, _t$token$includes;
      const address = t.address || t.token;
      if (!address) {
        this.$toast(this.$t('unknownRisk'));
        return;
      }
      const id = t.id || address + '-' + (t.network || t.chain);
      if (t.chain === 'brc20' || (_t$token = t.token) !== null && _t$token !== void 0 && (_t$token$includes = _t$token.includes) !== null && _t$token$includes !== void 0 && _t$token$includes.call(_t$token, 'inscription')) {
        this.$router.push({
          name: 'Brc',
          params: {
            id
          }
        });
      } else {
        this.$router.push({
          name: 'Token',
          params: {
            id
          }
        });
      }
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.array.to-sorted.js */ "./node_modules/core-js/modules/esnext.array.to-sorted.js");
/* harmony import */ var core_js_modules_esnext_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tokenList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/tokenList */ "./src/components/tokenList.vue");
/* harmony import */ var _components_sectorHeat_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sectorHeat.vue */ "./src/components/sectorHeat.vue");
/* harmony import */ var _components_noticeBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/noticeBar */ "./src/components/noticeBar.vue");
/* harmony import */ var _components_downloadPop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/downloadPop */ "./src/components/downloadPop.vue");
/* harmony import */ var _utils_appLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/appLink */ "./src/utils/appLink.js");
/* harmony import */ var _components_brc20_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/brc20/list */ "./src/components/brc20/list.vue");
/* harmony import */ var _components_lineChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/lineChart */ "./src/components/lineChart.vue");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_perpList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/perpList */ "./src/components/perpList.vue");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api */ "./src/api/index.js");







// import NftList from '@/components/nftList'








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  data() {
    return {
      defaultIcon: __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png"),
      bannerList: [],
      active: 'hot',
      hotAddress: [],
      Timer_getData: null,
      loading: false,
      loading3: false,
      refreshLoading: [false, false, false],
      Timer: null,
      pairs: [],
      noticeList: [],
      tokenList: [],
      TimerGetTokensPrice: null,
      // priceChangeTopTokens: [],
      priceChangeTopTokensDown: [],
      nftList: [],
      plates: [],
      newTokens: [],
      nftChain: 'eth',
      marketData: {
        chains: []
      },
      marketDataChains: [],
      loading4: false,
      show: false,
      comingList: [],
      loadingComing: false,
      gainerTokenList: [],
      conditions: {
        page: 1,
        page_size: 20,
        sort: '',
        sort_dir: ''
      },
      tableData: [],
      tableSortData: [],
      loadingHotInscriptions: false,
      finishedHot: false,
      errorHot: false,
      lineChartData: [],
      primaryList: [],
      loadingPrimary: false,
      spotlightCells: [],
      spotlightTimer: null,
      frontpageListConfig: [{
        category: 'hot',
        name_zh_ch: '热门',
        name_zh_tw: '熱門',
        name_en: 'Hot',
        name_es: 'De moda',
        name_pt: 'Tendências',
        name_tr: 'Trend',
        name_ja: 'ホット',
        is_hot: 0,
        chains: [{
          chain: 'all',
          chain_showname: 'All'
        }, {
          chain: 'solana',
          chain_showname: 'Sol'
        }, {
          chain: 'eth',
          chain_showname: 'Eth'
        }, {
          chain: 'bsc',
          chain_showname: 'Bsc'
        }]
      }],
      tableList: [],
      loadingTable: false,
      perpCategoryList: [],
      perpCategory: {},
      activePerpCategory: 'all',
      perpList: [],
      perpSortBy: '',
      perpSortDir: '',
      // 外部筛选，用于 TokenList 组件的链筛选功能
      externalFilterChain: '',
      // 外部筛选，用于 PrepList 组件的筛选功能
      externalActivePerpCategory: ''
    };
  },
  components: {
    TokenList: _components_tokenList__WEBPACK_IMPORTED_MODULE_5__["default"],
    NoticeBar: _components_noticeBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    InscriptionList: _components_brc20_list__WEBPACK_IMPORTED_MODULE_10__["default"],
    DownloadPop: _components_downloadPop__WEBPACK_IMPORTED_MODULE_8__["default"],
    PerpList: _components_perpList__WEBPACK_IMPORTED_MODULE_13__["default"],
    SectorHeat: _components_sectorHeat_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {
    // 下载浮层唤起 App 时定位到当前榜单 tab（按平台生成）
    appLink() {
      const category = this.active;
      return isIos => Object(_utils_appLink__WEBPACK_IMPORTED_MODULE_9__["getHomeTabDeepLink"])(category, isIos);
    },
    tokens() {
      return this.$store.state.tokens;
    },
    favorites() {
      return this.$store.state.favorites || [];
    },
    favoritesList() {
      return this.$store.state.favoritesList || [];
    },
    hotTokens() {
      return this.$store.state.hotTokens || [];
    },
    language() {
      return this.$store.getters.language;
    },
    notice() {
      var _this$$store$state$no, _this$$store$state$no2, _this$$store$state$no3;
      let o = {
        'zh-cn': '',
        'zh-tw': 'zh_tw',
        en: 'en'
      };
      let titleStr = 'title_' + (o[this.language] || this.language);
      return ((_this$$store$state$no = this.$store.state.noticeLatest) === null || _this$$store$state$no === void 0 ? void 0 : _this$$store$state$no[titleStr]) || ((_this$$store$state$no2 = this.$store.state.noticeLatest) === null || _this$$store$state$no2 === void 0 ? void 0 : _this$$store$state$no2['title_en']) || ((_this$$store$state$no3 = this.$store.state.noticeLatest) === null || _this$$store$state$no3 === void 0 ? void 0 : _this$$store$state$no3.title) || '';
    },
    priceChangeTopTokens() {
      return this.$store.state.priceChangeTopTokens;
    },
    priceParamsGainer() {
      return this.$store.state.ws.priceParamsGainer;
    },
    frontpageListConfigMerge() {
      // 将 perpCategory 和 frontpageListConfig 合并, perpCategory 放在第二个
      let list = [...this.frontpageListConfig];
      return list;
    }
  },
  watch: {
    active(val, oldVal) {
      if (val !== 'contract' && oldVal === 'contract') {
        this.$store.dispatch('updatePerpTypes', {
          pageType: 'home',
          type: 0
        });
      } else if (val === 'contract' && oldVal !== 'contract') {
        this.$store.dispatch('updatePerpTypes', {
          pageType: 'home',
          type: 1
        });
      }
    },
    // if (val === 1) {
    //   this.getHotTokens()
    // }
    // if (val === 2) {
    //   this.getPriceChangeTopTokens()
    // }
    // if (val === 5) {
    //   this.getPriceChangeTopTokens('down')
    // }
    // if (val === 6) {
    //   this.conditions.page = 1
    //   this.getHotInscriptions()
    // }
    // },
    '$store.state.ws.isConnected'(val) {
      if (val) {
        var _this$$store$state$ws, _this$$store$state$ws2;
        // this.subHotTokens()
        if (((_this$$store$state$ws = this.$store.state.ws.multiPriceParams) === null || _this$$store$state$ws === void 0 || (_this$$store$state$ws = _this$$store$state$ws.main) === null || _this$$store$state$ws === void 0 ? void 0 : _this$$store$state$ws.length) > 0 || ((_this$$store$state$ws2 = this.$store.state.ws.multiPriceParams) === null || _this$$store$state$ws2 === void 0 || (_this$$store$state$ws2 = _this$$store$state$ws2.primary) === null || _this$$store$state$ws2 === void 0 ? void 0 : _this$$store$state$ws2.length) > 0) {
          this.$store.dispatch('subMultiPrice');
        }
      }
    },
    '$store.state.ws.multiPriceResult'(prices) {
      this.primaryList = this.primaryList.map(i => {
        let item = prices.find(j => j.token_id === i.id);
        if (item) {
          // console.log('multiPriceResult',item)
          return {
            ...i,
            current_price_usd: item.price,
            price_change: item.price_change,
            direction: (item === null || item === void 0 ? void 0 : item.direction) || 'down'
          };
        }
        return i;
      });
      this.tableSortData = this.tableSortData.map(i => {
        let item = prices.find(j => j.token_id === i.id);
        if (item) {
          return {
            ...i,
            current_price_usd: item.price,
            price_change: item.price_change,
            direction: (item === null || item === void 0 ? void 0 : item.direction) || 'down'
          };
        }
        return i;
      });
      this.tableList = this.tableList.map(i => {
        let item = prices.find(j => j.token_id === i.id);
        if (item) {
          return {
            ...i,
            current_price_usd: item.price,
            price_change: item.price_change,
            direction: (item === null || item === void 0 ? void 0 : item.direction) || 'down'
          };
        }
        return i;
      });
      // this.tableList = this.tableSortData
    }
    // nftChain() {
    //   this.getNftList()
    // }
  },
  beforeRouteLeave() {
    // this.unSubscribeGainer()
    this.$store.dispatch('unSubMultiPrice');
    this.stopSpotlightTimer();
  },
  created() {
    this.getBanners();
    // this.getNftList()
    // this.getNewPairs()
    // this.getPlatesInfo()
    // this.getPriceChangeTopTokens()
  },
  mounted() {
    // 首屏 banner / 板块热度还没返回时，van-tabs 会紧贴 header 落在 sticky 阈值上，
    // 被判定为 fixed；vant Sticky 只在 scroll/resize 时重算，上方内容加载后
    // tab 栏就一直钉在顶部。这里在自身高度变化时补一次重算。
    if (typeof ResizeObserver === 'undefined') return;
    this.stickyObserver = new ResizeObserver(() => {
      if (this.stickyRaf) return;
      this.stickyRaf = requestAnimationFrame(() => {
        this.stickyRaf = null;
        window.dispatchEvent(new Event('scroll'));
      });
    });
    this.stickyObserver.observe(this.$el);
  },
  unmounted() {
    var _this$stickyObserver, _this$stickyObserver$;
    (_this$stickyObserver = this.stickyObserver) === null || _this$stickyObserver === void 0 || (_this$stickyObserver$ = _this$stickyObserver.disconnect) === null || _this$stickyObserver$ === void 0 || _this$stickyObserver$.call(_this$stickyObserver);
    if (this.stickyRaf) cancelAnimationFrame(this.stickyRaf);
  },
  activated() {
    var _this$$refs, _this$$refs$getCloseD;
    this.getFrontpageListConfig();
    this.getFrontpageList({
      name: this.active
    });
    this.initChart();
    // this.getAlteration()
    // this.getOpeningtoken()
    // if (this.active === 1) {
    //   this.getHotTokens()
    // }
    // if (this.active === 2) {
    //   this.getPriceChangeTopTokens()
    // }
    // if (this.active === 5) {
    //   this.getPriceChangeTopTokens('down')
    // }
    // 6.16
    this.getDiscoverMarket();
    // spotlight：首拉 + 60s 定时刷新（与 ws 解耦）
    this.getSpotlight().catch(() => {});
    this.startSpotlightTimer();
    (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.downloadPop) === null || _this$$refs === void 0 || (_this$$refs$getCloseD = _this$$refs.getCloseDownloadPopStatus) === null || _this$$refs$getCloseD === void 0 || _this$$refs$getCloseD.call(_this$$refs);
  },
  deactivated() {
    this.stopSpotlightTimer();
  },
  methods: {
    onSectorClick(sector) {
      var _sector$link_module;
      const el = document.getElementById('home-tabs');
      console.log('onSectorClick', sector, this.active);
      if (!el) return;
      setTimeout(() => {
        // 只滚动最近的滚动容器，避免影响下方 table
        const offsetTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop - 60,
          behavior: 'smooth'
        });
      }, 500);
      const params = sector === null || sector === void 0 || (_sector$link_module = sector.link_module) === null || _sector$link_module === void 0 ? void 0 : _sector$link_module.params;
      if (!(params !== null && params !== void 0 && params.category)) return;
      this.active = params.category;
      if (params.category === 'contract') {
        this.externalActivePerpCategory = params.sub_category || '';
      } else {
        this.externalFilterChain = params.chain || '';
      }
      this.getFrontpageList({
        name: this.active
      });
    },
    init() {
      this.getBanners();
      // this.getNftList()
      // this.getPlatesInfo()
      this.initChart();
      // this.getOpeningtoken()
      // if (!this.$store.state.ws.isConnected) {
      //   this.$store.dispatch('initWs')
      // }
      // this.getHotTokens()
      // this.getAlteration()
      this.getFrontpageListConfig();
      this.getFrontpageList({
        name: this.active
      });
    },
    getFrontpageListConfig() {
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getFrontpageListConfig"])().then(res => {
        const list = Array.isArray(res) ? [...res] : [];
        // 接口未返回合约 tab 时，插入默认 contract 配置
        if (!list.some(i => (i === null || i === void 0 ? void 0 : i.category) === 'contract')) {
          const contractCategory = {
            category: 'contract',
            name_zh_ch: '合约',
            name_zh_tw: '合約',
            name_en: 'Perps',
            name_es: 'Perps',
            name_pt: 'Perps',
            name_tr: 'Perps',
            name_ja: '契約',
            is_hot: 1,
            chains: [],
            hyper_sub_categories: [{
              category: 'all',
              name: 'All'
            }, {
              category: 'stock',
              name: '美股'
            }, {
              category: 'commodities',
              name: '大宗商品'
            }, {
              category: 'preipo',
              name: 'Pre-IPO'
            }]
          };
          const hotIndex = list.findIndex(i => (i === null || i === void 0 ? void 0 : i.category) === 'hot');
          if (hotIndex >= 0) {
            list.splice(hotIndex + 1, 0, contractCategory);
          } else {
            list.unshift(contractCategory);
          }
        }
        this.frontpageListConfig = list;
      }).catch(err => {
        console.log(err);
      });
    },
    getMcapAmount(i) {
      let mcap_amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(i.total).minus(i.lock_amount).minus(i.burn_amount).minus(i.other_amount);
      mcap_amount.isLessThan(0) && (mcap_amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a(0));
      return mcap_amount;
    },
    getFrontpageList({
      name
    }) {
      // 合约 tab 由 PerpList 自行加载数据（独立数据源），无需调用 homelistv2
      if (name === 'contract') return;
      this.loadingTable = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getFrontpageList"])(name || 'hot').then(res => {
        // this.frontpageListConfig = res
        let list = res === null || res === void 0 ? void 0 : res.map(i => ({
          ...i,
          id: `${i.token}-${i.chain}`,
          mcap_amount: this.getMcapAmount(i),
          mcap: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : this.getMcapAmount(i).multipliedBy(i.current_price_usd).toNumber()
        }));
        if (name === 'openingtoken') {
          list = (res === null || res === void 0 ? void 0 : res.map(i => ({
            ...i,
            mcap_amount: this.getMcapAmount(i),
            mcap: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : this.getMcapAmount(i).multipliedBy(i.current_price_usd).toNumber(),
            countDown: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() :  false || 0,
            current_price_usd: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : i.current_price_usd,
            price_change: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : Number(i.price_change)
          }))) || [];
        }
        if (name === 'hot_inscriptions') {
          list = res === null || res === void 0 ? void 0 : res.map(i => {
            var _i$symbol, _i$symbol2, _i$symbol3, _i$symbol4, _i$symbol5, _i$symbol6, _i$token;
            return {
              ...i,
              mcap_amount: this.getMcapAmount(i),
              mcap: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : this.getMcapAmount(i).multipliedBy(i.current_price_usd).toNumber(),
              symbol: i !== null && i !== void 0 && (_i$symbol = i.symbol) !== null && _i$symbol !== void 0 && _i$symbol.includes('(') ? i === null || i === void 0 || (_i$symbol2 = i.symbol) === null || _i$symbol2 === void 0 || (_i$symbol2 = _i$symbol2.split('(')) === null || _i$symbol2 === void 0 ? void 0 : _i$symbol2[0] : i.symbol,
              protocol: i !== null && i !== void 0 && (_i$symbol3 = i.symbol) !== null && _i$symbol3 !== void 0 && _i$symbol3.includes('(') ? i === null || i === void 0 || (_i$symbol4 = i.symbol) === null || _i$symbol4 === void 0 ? void 0 : _i$symbol4.slice((i === null || i === void 0 || (_i$symbol5 = i.symbol) === null || _i$symbol5 === void 0 ? void 0 : _i$symbol5.indexOf('(')) + 1, i === null || i === void 0 || (_i$symbol6 = i.symbol) === null || _i$symbol6 === void 0 ? void 0 : _i$symbol6.indexOf(')')) : '',
              price_change_v2: i.chain == 'brc20' ? i === null || i === void 0 ? void 0 : i.price_change_v2 : i === null || i === void 0 ? void 0 : i.price_change,
              token: (_i$token = i.token) === null || _i$token === void 0 ? void 0 : _i$token.trim()
            };
          });
        }
        this.tableList = list;
        this.tableSortData = list;
        if (name == 'hot') {
          let a = res === null || res === void 0 ? void 0 : res.map(i => `${i.token}-${i.chain}`);
          this.$store.commit('setWsState', {
            name: 'multiPriceParams',
            value: {
              ...this.$store.state.ws.multiPriceParams,
              ...{
                main: a
              }
            }
          });
          this.$store.dispatch('subMultiPrice');
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loadingTable = false;
      });
    },
    getBanners() {
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getBanners"])().then(res => {
        var _res$map;
        this.bannerList = res === null || res === void 0 || (_res$map = res.map) === null || _res$map === void 0 ? void 0 : _res$map.call(res, i => ({
          ...i,
          picture_link: i.picture_link.replace('https://www.avestorage.cloud', 'https://www.avestorage.cloud')
        }));
      });
    },
    // 首页 spotlight：一次拉取 cells（异动 + 板块热力，有序），只喂 SectorHeat，不进 ws
    getSpotlight() {
      return new Promise((resolve, reject) => {
        Object(_api__WEBPACK_IMPORTED_MODULE_14__["getSpotlight"])().then(res => {
          const cells = (res === null || res === void 0 ? void 0 : res.cells) || res || [];
          this.spotlightCells = Array.isArray(cells) ? cells : [];
          resolve(this.spotlightCells);
        }).catch(err => {
          this.spotlightCells = [];
          reject(err);
        });
      });
    },
    startSpotlightTimer() {
      this.stopSpotlightTimer();
      this.spotlightTimer = setInterval(() => {
        this.getSpotlight().catch(() => {});
      }, 60 * 1000);
    },
    stopSpotlightTimer() {
      if (this.spotlightTimer) {
        clearInterval(this.spotlightTimer);
        this.spotlightTimer = null;
      }
    },
    getTokensPrice() {
      return new Promise((resolve, reject) => {
        Object(_api__WEBPACK_IMPORTED_MODULE_14__["getTokensPrice"])().then(res => {
          this.primaryList = res.map(i => ({
            ...i,
            id: i.token + '-' + i.chain,
            symbol: i.symbol.replace('W', ''),
            price: i === null || i === void 0 ? void 0 : i.current_price_usd,
            priceChange: (i === null || i === void 0 ? void 0 : i.price_change) / 100
          }));
          resolve(this.primaryList);
        }).catch(err => {
          reject(err);
        });
      });
    },
    getKline(pair) {
      return new Promise((resolve, reject) => {
        Object(_api__WEBPACK_IMPORTED_MODULE_14__["getKline"])(pair).then(res => {
          resolve(res);
        }).catch(() => reject(false));
      });
    },
    async initChart() {
      // this.loadingPrimary = true
      let list = await this.getTokensPrice();
      // Promise.all(
      //   list.map(async i => {
      //     let lineChart = await this.getKline(`${i.pair}-${i.chain}`)
      //     let dataX = lineChart.map(i => this.$f.formatDate(i?.time / 1000, 'MM-DD'))
      //     let dataY = lineChart.map(i => i.close)
      //     return { ...i, dataX: dataX, dataY: dataY }
      //   })
      // ).then(res => {
      //     console.log('------------11111----------------', res)
      //       this.primaryList = res
      //   })
      //   .finally(() => {
      //     this.loadingPrimary = false
      //   })
      // getSpotlight 已与 ws 解耦，异动卡不再进 primary 槽
      let a = list === null || list === void 0 ? void 0 : list.map(i => `${i.token}-${i.chain}`);
      this.$store.commit('setWsState', {
        name: 'multiPriceParams',
        value: {
          ...this.$store.state.ws.multiPriceParams,
          ...{
            primary: a
          }
        }
      });
      this.$store.dispatch('subMultiPrice');
    },
    goTokenDetails(item) {
      this.$router.push({
        name: 'Token',
        params: {
          id: item.id
        }
      });
    },
    getHotTokensV2() {
      this.$store.dispatch('getHotTokensV2').then(res => {
        let a = res === null || res === void 0 ? void 0 : res.map(i => `${i.token}-${i.chain}`);
        this.$store.commit('setWsState', {
          name: 'multiPriceParams',
          value: {
            ...this.$store.state.ws.multiPriceParams,
            ...{
              main: a
            }
          }
        });
        this.$store.dispatch('subMultiPrice');
      }).catch(err => {
        console.log(err);
      });
    },
    getPriceChangeTopTokens(dir) {
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getPriceChangeTopTokens"])(dir).then(res => {
        // if (dir && dir === 'down') {
        //   this.priceChangeTopTokensDown = res || []
        // } else {
        //   this.priceChangeTopTokens = res || []
        // }
        let result = res.map(i => ({
          ...i,
          id: `${i.token}-${i.chain}`
        }));
        this.$store.commit('setState', {
          name: 'priceChangeTopTokens',
          value: result || []
        });
        this.gainerTokenList = res.map(i => `${i.token}-${i.chain}`);
        let a = res === null || res === void 0 ? void 0 : res.map(i => `${i.token}-${i.chain}`);
        this.$store.commit('setWsState', {
          name: 'multiPriceParams',
          value: {
            ...this.$store.state.ws.multiPriceParams,
            ...{
              main: a
            }
          }
        });
        this.$store.dispatch('subMultiPrice');
        // if (this.priceParamsGainer?.length == 0) {
        //   this.subGainerTokens()
        // }
      });
    },
    // subGainerTokens() {
    //   if (this.priceParamsGainer.length > 0) {
    //     return
    //   }
    //   if (this.$store.state.ws.isConnected && this.gainerTokenList) {
    //     let data = {
    //       jsonrpc: '2.0',
    //       method: 'subscribe',
    //       params: ['price', 'gainer', this.gainerTokenList],
    //       id: 1
    //     }
    //     this.$store.commit('setWsState', { name: 'priceParamsGainer', value: data.params })
    //     this.$store.commit('wsSend', data)
    //   }
    // },
    // unSubscribeGainer() {
    //   if (this.priceParamsGainer?.length > 0 && this.priceParamsGainer?.[1] === 'gainer') {
    //     this.$store.commit('wsSend', {
    //       jsonrpc: '2.0',
    //       method: 'unsubscribe',
    //       params: this.priceParamsGainer,
    //       id: 1
    //     })
    //     this.$store.commit('setWsState', { name: 'priceParamsGainer', value: [] })
    //   }
    // },
    // getNftList() {
    //   getNftList({ chain: this.nftChain }).then(res => {
    //     this.nftList = res
    //   })
    // },
    // getPlatesInfo() {
    //   getPlatesInfo().then(res => {
    //     this.plates = res?.User_Section || []
    //     this.chains = res?.User_Chain || []
    //   })
    // },
    // getNewTokens() {
    //   getNewTokens().then(res => {
    //     this.newTokens = res || []
    //   })
    // },
    getOpeningtoken() {
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getOpeningtoken"])().then(res => {
        // console.log('getOpeningtoken',res)
        let list = res || [];
        this.comingList = (list === null || list === void 0 ? void 0 : list.map(i => ({
          ...i,
          countDown: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() :  false || 0,
          current_price_usd: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : i.current_price_usd,
          price_change: i.opening_at && new Date(i === null || i === void 0 ? void 0 : i.opening_at).getTime() - Date.now() > 0 ? Number.POSITIVE_INFINITY : Number(i.price_change)
        }))) || [];
      });
    },
    // subHotTokens() {
    //   let data = {
    //     jsonrpc: '2.0',
    //     method: 'subscribe',
    //     params: ['price', 'hot'],
    //     id: 1
    //   }
    //   if (this.$store.state.ws.isConnected) {
    //     let priceParams = this.$store.state.ws.priceParams
    //     if (priceParams?.length > 0 && priceParams?.[1] !== 'hot') {
    //       this.$store.commit('wsSend', {
    //         jsonrpc: '2.0',
    //         method: 'unsubscribe',
    //         params: this.$store.state.ws.priceParams,
    //         id: 1
    //       })
    //     }
    //     this.$store.commit('setWsState', { name: 'priceParams', value: data.params })
    //     this.$store.commit('wsSend', data)
    //   }
    // },
    getDiscoverMarket() {
      this.loading4 = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getDiscoverMarket"])().then(res => {
        // let btcChain = {
        //   logo: 'https://www.avestorage.cloud/token_icon/tron/TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9.png',
        //   chain: 'btc',
        //   is_new: 1,
        //   up: 56,
        //   down: 45,
        //   url: 'https://m.avebrc20.com/'
        // }
        // this.marketData = {...res, chains: [btcChain, ...res.chains]} || {chains: []}
        this.marketData = {
          ...res,
          chains: res.chains
        } || {
          chains: []
        };
      }).finally(() => {
        this.loading4 = false;
      });
    },
    sortChange({
      sort,
      sort_dir
    }) {
      if (sort) {
        if (sort_dir === 'asc') {
          this.tableSortData = this.tableList.toSorted((a, b) => a[sort] - b[sort]);
        } else if (sort_dir === 'desc') {
          this.tableSortData = this.tableList.toSorted((a, b) => b[sort] - a[sort]);
        } else {
          this.tableSortData = this.tableList;
        }
      }
      console.log('this.sortChange', this.tableList);
    },
    onload() {
      // this.getHotInscriptions()
    },
    getHotInscriptions() {
      console.log('-------------33333333-----------');
      this.loadingHotInscriptions = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_14__["getHotInscriptions"])().then(res => {
        let list = res === null || res === void 0 ? void 0 : res.map(i => {
          var _i$symbol7, _i$symbol8, _i$symbol9, _i$symbol0, _i$symbol1, _i$symbol10, _i$token2;
          return {
            ...i,
            symbol: i !== null && i !== void 0 && (_i$symbol7 = i.symbol) !== null && _i$symbol7 !== void 0 && _i$symbol7.includes('(') ? i === null || i === void 0 || (_i$symbol8 = i.symbol) === null || _i$symbol8 === void 0 || (_i$symbol8 = _i$symbol8.split('(')) === null || _i$symbol8 === void 0 ? void 0 : _i$symbol8[0] : i.symbol,
            protocol: i !== null && i !== void 0 && (_i$symbol9 = i.symbol) !== null && _i$symbol9 !== void 0 && _i$symbol9.includes('(') ? i === null || i === void 0 || (_i$symbol0 = i.symbol) === null || _i$symbol0 === void 0 ? void 0 : _i$symbol0.slice((i === null || i === void 0 || (_i$symbol1 = i.symbol) === null || _i$symbol1 === void 0 ? void 0 : _i$symbol1.indexOf('(')) + 1, i === null || i === void 0 || (_i$symbol10 = i.symbol) === null || _i$symbol10 === void 0 ? void 0 : _i$symbol10.indexOf(')')) : '',
            price_change_v2: i.chain == 'brc20' ? i === null || i === void 0 ? void 0 : i.price_change_v2 : i === null || i === void 0 ? void 0 : i.price_change,
            token: (_i$token2 = i.token) === null || _i$token2 === void 0 ? void 0 : _i$token2.trim()
          };
        });
        // this.tableData = list
        // this.tableSortData = list
      }).catch(err => {
        // this.tableSortData = []
        this.errorHot = true;
        console.log(err);
      }).finally(() => {
        this.loadingHotInscriptions = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-368a05e7"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chains-container"
};
const _hoisted_2 = {
  class: "m-chains-item"
};
const _hoisted_3 = {
  class: "alter-card"
};
const _hoisted_4 = {
  class: "token-info"
};
const _hoisted_5 = {
  class: "icon-token-container"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "token-symbol ellipsis"
};
const _hoisted_8 = {
  class: "mc ellipsis"
};
const _hoisted_9 = {
  class: "custom-indicator"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  const _component_van_swipe_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-item");
  const _component_van_swipe = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_swipe, {
    class: "chains-swipe",
    loop: true,
    autoplay: 4000,
    "show-indicators": false
  }, {
    indicator: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(({
      active,
      total
    }) => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(active + 1) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(total), 1 /* TEXT */)]),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.alterList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe_item, {
        key: index
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_router_link, {
          class: "a-no",
          to: {
            name: 'Token',
            params: {
              id: `${item.token}-${item.chain}`
            }
          }
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])({
              'alert': item.type === 'alert',
              'hot': item.type === 'hot',
              'mark': true
            })
          }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
            round: "",
            width: "0.32rem",
            height: "0.32rem",
            "icon-size": "0.32rem",
            "lazy-load": "",
            "show-loading": "",
            src: _ctx.$f.formatIcon(item),
            "loading-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png"),
            "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
          }, null, 8 /* PROPS */, ["src", "loading-icon", "error-icon"]), item !== null && item !== void 0 && item.network || item !== null && item !== void 0 && item.chain ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
            key: 0,
            class: "icon-svg icon-network",
            src: `${_ctx.$store.state.s3BaseUrl}chain/${(item === null || item === void 0 ? void 0 : item.network) || (item === null || item === void 0 ? void 0 : item.chain)}.png`,
            alt: "",
            srcset: ""
          }, null, 8 /* PROPS */, _hoisted_6)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.symbol), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
            class: "price-change",
            style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
              color: item.price_change >= 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
            })
          }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((item.price_change >= 0 ? '+' : '') + _ctx.$f.formatNumber2(item.price_change || 0, 2)) + "% ", 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_8, "MC " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])("$" + _ctx.$f.formatNumberS((item === null || item === void 0 ? void 0 : item.market_cap) || 0, 2)), 1 /* TEXT */)])]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])]),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  })])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-35374528"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "drawer-header"
};
const _hoisted_2 = {
  key: 0,
  class: "distribution-bar"
};
const _hoisted_3 = {
  class: "bar-title"
};
const _hoisted_4 = {
  class: "bar-labels"
};
const _hoisted_5 = {
  class: "drawer-content"
};
const _hoisted_6 = {
  class: "heat-map-container",
  ref: "containerRef"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  class: "card-header"
};
const _hoisted_9 = {
  class: "sector-name"
};
const _hoisted_10 = {
  key: 0,
  class: "top-tokens"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SectorHotDetail = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("SectorHotDetail");
  const _component_RiseFallBar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("RiseFallBar");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_el_drawer = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-drawer");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_el_drawer, {
    modelValue: $options.visible,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $options.visible = $event),
    "custom-class": 'heat-map-drawer' + ($data.animating ? ' is-animating' : ''),
    size: "100%",
    "append-to-body": "",
    "z-index": 9999,
    "with-header": false,
    "destroy-on-close": "",
    "close-on-click-modal": false,
    onOpen: _cache[3] || (_cache[3] = $event => $data.animating = true),
    onOpened: _cache[4] || (_cache[4] = $event => $data.animating = false)
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: "van-badge__wrapper van-icon van-icon-arrow-left van-nav-bar__arrow",
      style: {
        "position": "absolute",
        "left": "9px",
        "color": "#959A9F",
        "font-size": "20px",
        "cursor": "pointer"
      },
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onBack && $options.onBack(...args))
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.view === 'detail' ? '' : _ctx.$t('sectorHeat')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 临时热点板块详情：只传请求参数 category，组件自拉数据 "), $props.view === 'detail' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_SectorHotDetail, {
      key: 0,
      category: $props.category,
      onClose: _cache[1] || (_cache[1] = $event => $options.visible = false)
    }, null, 8 /* PROPS */, ["category"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 板块热力网格 "), $props.distribution ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('riseFallDistribution')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_RiseFallBar, {
      distribution: $props.distribution
    }, null, 8 /* PROPS */, ["distribution"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      class: "label-rise",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: _ctx.$store.getters.upColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('risingTokens')) + "：" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.distribution.rise_pct.toFixed(1)) + "%", 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
      class: "label-fall",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('fallingTokens')) + "：" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.distribution.fall_pct.toFixed(1)) + "%", 5 /* TEXT, STYLE */)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 空状态 "), !$options.filteredSectors || $options.filteredSectors.length === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_empty, {
      key: 0,
      class: "empty",
      image: _ctx.emptyNoDataLight,
      description: _ctx.$t('empty')
    }, null, 8 /* PROPS */, ["image", "description"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 热力图卡片列表 - 瀑布流布局 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.filteredSectors.slice(0, 15), (sector, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: sector.id || index,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["heat-card", ['fixed-size-' + (index + 1), $options.getPriceChangeClass(sector.price_change_24h)]]),
        style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
          background: (sector.price_change_24h >= 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]) + $options.bgOpacityHex($data.sectorOrder[index])
        }),
        onClick: $event => $options.handleSectorClick(sector)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 板块名称和涨跌幅 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.getSectorName(sector)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
        class: "price-change",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
          color: sector.price_change_24h >= 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
        })
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatPriceChange(sector.price_change_24h)), 5 /* TEXT, STYLE */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" Top Tokens "), sector.top3_tokens && sector.top3_tokens.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_10, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(sector.top3_tokens.slice(0, 3), (token, idx) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
          key: idx,
          round: "",
          width: "16px",
          height: "16px",
          "lazy-load": "",
          "show-loading": "",
          src: _ctx.$f.formatIcon(token),
          "error-icon": $data.defaultIcon,
          class: "token-avatar"
        }, null, 8 /* PROPS */, ["src", "error-icon"]);
      }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 14 /* CLASS, STYLE, PROPS */, _hoisted_7);
    }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])], 64 /* STABLE_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "custom-class"]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/lineChart.vue?vue&type=template&id=c69eb92c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/lineChart.vue?vue&type=template&id=c69eb92c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    id: `main${$props.type}`,
    style: {
      height: '22px',
      width: '30px'
    }
  }, null, 8 /* PROPS */, _hoisted_1);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-ea0aafa8"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "live-title"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
  class: "live-dot"
}, null, -1 /* HOISTED */));
const _hoisted_3 = {
  class: "ellipsis"
};
const _hoisted_4 = {
  class: "live-topic ellipsis"
};
const _hoisted_5 = {
  class: "topic-text"
};
const _hoisted_6 = {
  key: 0,
  class: "leverage"
};
const _hoisted_7 = {
  class: "live-desc ellipsis"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    class: "live-card",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.openLive && $options.openLive(...args))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.title), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.topic), 1 /* TEXT */), $props.live.leverage ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.live.leverage) + "X", 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.description), 1 /* TEXT */)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-7b65be8a"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("svg", {
  class: "icon-svg",
  "aria-hidden": "true"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-gonggaotongzhi"
})], -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_notice_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-notice-bar");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$props.notice ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_notice_bar, {
    key: 0,
    class: "notice-bar",
    text: $props.notice,
    "left-icon": "volume-o",
    color: "#000000",
    background: "#fff",
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
      name: 'Notice'
    }), ["stop"]))
  }, {
    "left-icon": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_1]),
    "right-icon": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      name: "bars",
      size: "0.36rem"
    })]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["text"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-divider :style=\"{ background: '#fff', borderColor: '#EBEDF0', padding: '0 0.3rem', margin: '0' }\"></van-divider> ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-0e53f3a2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "ratio-bar"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "ratio-rise",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])($options.riseStyle)
  }, null, 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "ratio-fall",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])($options.fallStyle)
  }, null, 4 /* STYLE */)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-2f8c92b4"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "sector-card"
};
const _hoisted_2 = {
  class: "sector-name"
};
const _hoisted_3 = {
  key: 0,
  class: "top-tokens"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$sector, _$props$sector2;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-image");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])({
      'alert': (_$props$sector = $props.sector) === null || _$props$sector === void 0 ? void 0 : _$props$sector.hot_icon_url.includes('alert'),
      'hot': (_$props$sector2 = $props.sector) === null || _$props$sector2 === void 0 ? void 0 : _$props$sector2.hot_icon_url.includes('hot'),
      'mark': true
    })
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.getSectorName($props.sector)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    class: "price-change",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      color: $props.sector.price_change_24h >= 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatPriceChange($props.sector.price_change_24h)), 5 /* TEXT, STYLE */), $props.sector.top3_tokens && $props.sector.top3_tokens.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($props.sector.top3_tokens.slice(0, 3), (token, idx) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_image, {
      key: idx,
      round: "",
      width: "0.32rem",
      height: "0.32rem",
      "icon-size": "0.32rem",
      "lazy-load": "",
      "show-loading": "",
      src: _ctx.$f.formatIcon(token),
      "error-icon": $data.defaultIcon,
      class: "token-avatar"
    }, null, 8 /* PROPS */, ["src", "error-icon"]);
  }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/right.svg */ "./src/assets/images/right.svg");
/* harmony import */ var _assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-b1d0ccf4"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0,
  class: "sector-heat"
};
const _hoisted_2 = {
  class: "sector-list"
};
const _hoisted_3 = {
  key: 0,
  class: "live-cell cell-wrap"
};
const _hoisted_4 = {
  class: "alter-cell cell-wrap"
};
const _hoisted_5 = {
  class: "sector-item"
};
const _hoisted_6 = {
  class: "m-sector-item"
};
const _hoisted_7 = {
  class: "custom-indicator"
};
const _hoisted_8 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LiveCard = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("LiveCard");
  const _component_SpotlightChains = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("SpotlightChains");
  const _component_SectorCard = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("SectorCard");
  const _component_van_swipe_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-item");
  const _component_van_swipe = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe");
  const _component_heatMap = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("heatMap");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$props.cells && $props.cells.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 板块列表：按 spotlight cells 顺序渲染 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.cells, (cell, ci) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: ci
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" live → 直播卡 "), cell.type === 'live' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_LiveCard, {
      live: (cell.live || [])[0] || {}
    }, null, 8 /* PROPS */, ["live"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 向右箭头（叠在最后一张卡上，打开热力图） "), ci === $props.cells.length - 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
      key: 0,
      class: "right-arrow",
      src: _assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "",
      width: "16",
      height: "16",
      onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showHeatMap = true, ["stop"]))
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : cell.type === 'alterationv2' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" alterationv2 → Chains 轮播卡 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_SpotlightChains, {
      alterList: cell.alterationv2 || []
    }, null, 8 /* PROPS */, ["alterList"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 向右箭头（叠在最后一张卡上，打开热力图） "), ci === $props.cells.length - 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
      key: 0,
      class: "right-arrow",
      src: _assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "",
      width: "16",
      height: "16",
      onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showHeatMap = true, ["stop"]))
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : cell.type === 'sector_heats' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 2
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" sector_heats → 板块卡（长度 > 1 时轮播） "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [(cell.sector_heats || []).length > 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe, {
      key: 0,
      class: "sector-swipe",
      loop: true,
      autoplay: 4000,
      "show-indicators": false
    }, {
      indicator: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(({
        active,
        total
      }) => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(active + 1) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(total), 1 /* TEXT */)]),
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(cell.sector_heats, (sector, si) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe_item, {
          key: si,
          onClick: $event => $options.handleSectorClick(sector)
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_SectorCard, {
            sector: sector
          }, null, 8 /* PROPS */, ["sector"])]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: 1,
      onClick: $event => $options.handleSectorClick((cell.sector_heats || [])[0] || {})
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_SectorCard, {
      sector: (cell.sector_heats || [])[0] || {}
    }, null, 8 /* PROPS */, ["sector"])], 8 /* PROPS */, _hoisted_8))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 向右箭头（叠在最后一张卡上，打开热力图） "), ci === $props.cells.length - 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
      key: 0,
      class: "right-arrow",
      src: _assets_images_right_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "",
      width: "16",
      height: "16",
      onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showHeatMap = true, ["stop"]))
    })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_heatMap, {
    modelValue: $data.showHeatMap,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.showHeatMap = $event),
    view: $data.heatView,
    category: $data.detailCategory,
    sectors: $data.sectors,
    distribution: $data.distribution,
    onSectorClick: $options.handleSectorClick,
    onBack: $options.onHeatBack
  }, null, 8 /* PROPS */, ["modelValue", "view", "category", "sectors", "distribution", "onSectorClick", "onBack"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-a9426750"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "hot-detail"
};
const _hoisted_2 = {
  key: 0,
  class: "hot-header"
};
const _hoisted_3 = {
  class: "hot-title"
};
const _hoisted_4 = {
  key: 0,
  class: "hot-desc"
};
const _hoisted_5 = {
  key: 1,
  class: "hot-stats"
};
const _hoisted_6 = {
  class: "stats-row"
};
const _hoisted_7 = {
  class: "stat-item"
};
const _hoisted_8 = {
  class: "stat-val"
};
const _hoisted_9 = {
  class: "stat-label"
};
const _hoisted_10 = {
  class: "stat-item"
};
const _hoisted_11 = {
  class: "stat-val"
};
const _hoisted_12 = {
  class: "stat-label"
};
const _hoisted_13 = {
  class: "stat-item"
};
const _hoisted_14 = {
  class: "stat-label"
};
const _hoisted_15 = {
  key: 0,
  class: "ratio-row"
};
const _hoisted_16 = {
  class: "ratio-labels"
};
const _hoisted_17 = {
  class: "list-head"
};
const _hoisted_18 = {
  class: "list-title"
};
const _hoisted_19 = ["src", "onerror"];
const _hoisted_20 = {
  class: "col-head"
};
const _hoisted_21 = {
  class: "col-left"
};
const _hoisted_22 = {
  class: "icon-sort-container"
};
const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "/", -1 /* HOISTED */));
const _hoisted_24 = {
  class: "icon-sort-container"
};
const _hoisted_25 = {
  class: "icon-sort-container"
};
const _hoisted_26 = {
  class: "icon-sort-container"
};
const _hoisted_27 = {
  class: "token-scroll"
};
const _hoisted_28 = ["onClick"];
const _hoisted_29 = {
  class: "tk-left"
};
const _hoisted_30 = {
  class: "icon-token-container",
  style: {
    "margin-top": "0.08rem"
  }
};
const _hoisted_31 = ["src"];
const _hoisted_32 = {
  class: "tk-name-wrap"
};
const _hoisted_33 = {
  class: "tk-name-line"
};
const _hoisted_34 = {
  class: "flex-start"
};
const _hoisted_35 = {
  class: "tk-symbol"
};
const _hoisted_36 = {
  class: "flex"
};
const _hoisted_37 = {
  key: 0,
  class: "ad-tag"
};
const _hoisted_38 = {
  class: "tk-sub"
};
const _hoisted_39 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
  class: "tk-sub-sep"
}, "|", -1 /* HOISTED */));
const _hoisted_40 = {
  class: "tk-price"
};
const _hoisted_41 = {
  class: "tk-change"
};
const _hoisted_42 = ["src", "onerror"];
const _hoisted_43 = {
  key: 1,
  class: "icon-net-connect",
  alt: "",
  srcset: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RiseFallBar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("RiseFallBar");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_search = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-search");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_van_action_sheet = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-action-sheet");
  const _directive_fit_text = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("fit-text");
  const _directive_lazy = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("lazy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 头部：标题 + 描述 "), $data.localDetail ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.getSectorName($data.localDetail)), 1 /* TEXT */), $options.description ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.description), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 顶部统计：两行 "), $options.stats ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 行1：代币价格 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumberS($options.stats.total_volume_24h || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('volume')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumberS($options.stats.total_market_cap || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('totalMarketCap')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "stat-val",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: ($options.stats.price_change_24h || 0) >= 0 ? $options.upColor : $options.downColor
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatPriceChange($options.stats.price_change_24h)), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('change')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 行2：涨跌代币比例 "), $options.distribution ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_RiseFallBar, {
    distribution: $options.distribution
  }, null, 8 /* PROPS */, ["distribution"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: $options.upColor
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('risingTokens')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(($options.distribution.rise_pct || 0).toFixed(1)) + "%", 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      color: $options.downColor
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('fallingTokens')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(($options.distribution.fall_pct || 0).toFixed(1)) + "%", 5 /* TEXT, STYLE */)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 列表标题 + 链筛选入口 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('tokenListTitle')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "chain-btn",
    onClick: _cache[0] || (_cache[0] = $event => $data.chainPopup = true)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
    class: "chain-btn-icon",
    src: $options.chainBtnIcon,
    onerror: `this.src='${$data.chainSelectIcon}'`,
    alt: "",
    style: {
      "border-radius": "999px"
    }
  }, null, 8 /* PROPS */, _hoisted_19)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 列头 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "col-sort",
    onClick: _cache[3] || (_cache[3] = $event => $options.toggleSort('tx_volume_u_24h'))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('amountU')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_22, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-up", {
      active: $data.sortField === 'tx_volume_u_24h' && $data.sortDir === 'asc'
    }]),
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('tx_volume_u_24h', 'asc'), ["stop"]))
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-down", {
      active: $data.sortField === 'tx_volume_u_24h' && $data.sortDir === 'desc'
    }]),
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('tx_volume_u_24h', 'desc'), ["stop"]))
  }, null, 2 /* CLASS */)])]), _hoisted_23, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "col-sort",
    onClick: _cache[6] || (_cache[6] = $event => $options.toggleSort('mcap'))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('mcap')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-up", {
      active: $data.sortField === 'mcap' && $data.sortDir === 'asc'
    }]),
    onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('mcap', 'asc'), ["stop"]))
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-down", {
      active: $data.sortField === 'mcap' && $data.sortDir === 'desc'
    }]),
    onClick: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('mcap', 'desc'), ["stop"]))
  }, null, 2 /* CLASS */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "col-price col-sort",
    onClick: _cache[9] || (_cache[9] = $event => $options.toggleSort('current_price_usd'))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('price')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-up", {
      active: $data.sortField === 'current_price_usd' && $data.sortDir === 'asc'
    }]),
    onClick: _cache[7] || (_cache[7] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('current_price_usd', 'asc'), ["stop"]))
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-down", {
      active: $data.sortField === 'current_price_usd' && $data.sortDir === 'desc'
    }]),
    onClick: _cache[8] || (_cache[8] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('current_price_usd', 'desc'), ["stop"]))
  }, null, 2 /* CLASS */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "col-change col-sort",
    onClick: _cache[12] || (_cache[12] = $event => $options.toggleSort('price_change'))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('change2')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-up", {
      active: $data.sortField === 'price_change' && $data.sortDir === 'asc'
    }]),
    onClick: _cache[10] || (_cache[10] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('price_change', 'asc'), ["stop"]))
  }, null, 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-sort-down", {
      active: $data.sortField === 'price_change' && $data.sortDir === 'desc'
    }]),
    onClick: _cache[11] || (_cache[11] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setSort('price_change', 'desc'), ["stop"]))
  }, null, 2 /* CLASS */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" token 列表 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.displayTokens, (t, i) => {
    var _t$badges;
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      class: "token-row",
      key: (t.token || '') + '-' + (t.chain || '') + '-' + i,
      onClick: $event => $options.onTokenClick(t)
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-image\n            round\n            width=\"0.6rem\"\n            height=\"0.6rem\"\n            lazy-load\n            show-loading\n            :src=\"$f.formatIcon(t)\"\n            :error-icon=\"defaultIcon\"\n            class=\"tk-avatar\"\n          /> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_30, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
      round: "",
      width: "0.6rem",
      height: "0.6rem",
      "icon-size": "0.6rem",
      "lazy-load": "",
      "show-loading": "",
      src: _ctx.$f.formatIcon(t),
      "error-icon": _ctx.$f.formatDefaultIcon(t)
    }, null, 8 /* PROPS */, ["src", "error-icon"]), t !== null && t !== void 0 && t.network || t !== null && t !== void 0 && t.chain ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
      key: 0,
      class: "icon-svg icon-network",
      src: `${_ctx.$store.state.s3BaseUrl}chain/${(t === null || t === void 0 ? void 0 : t.network) || (t === null || t === void 0 ? void 0 : t.chain)}.png`,
      alt: "",
      srcset: ""
    }, null, 8 /* PROPS */, _hoisted_31)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_33, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_34, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_35, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(t.symbol), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_36, [t !== null && t !== void 0 && t.launchpad ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
      key: 0,
      style: {
        "margin-left": "0.08rem"
      },
      round: "",
      width: "0.2rem",
      height: "0.2rem",
      "icon-size": "0.2rem",
      "lazy-load": "",
      "show-loading": "",
      src: `${_ctx.$store.state.s3BaseUrl}signals/${t.launchpad}.png`,
      "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
    }, null, 8 /* PROPS */, ["src", "error-icon"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 12.10 新增binance alpha "), Array.isArray(t === null || t === void 0 ? void 0 : t.badges) && (t === null || t === void 0 || (_t$badges = t.badges) === null || _t$badges === void 0 ? void 0 : _t$badges.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(t === null || t === void 0 ? void 0 : t.badges, (badge, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        style: {
          "margin-left": "0.08rem"
        },
        round: "",
        width: "0.2rem",
        height: "0.2rem",
        "icon-size": "0.2rem",
        "lazy-load": "",
        "show-loading": "",
        src: `${_ctx.$store.state.s3BaseUrl}signals/${badge.tag}.png`,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"]);
    }), 256 /* UNKEYED_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <template v-if=\"Array.isArray(t.badges) && t.badges.length > 0\">\n                <van-image\n                  v-for=\"(badge, bi) in t.badges\"\n                  :key=\"bi\"\n                  round\n                  width=\"14px\"\n                  height=\"14px\"\n                  lazy-load\n                  class=\"tk-badge\"\n                  :src=\"`${s3BaseUrl}signals/${badge.tag}.png`\"\n                  :error-icon=\"defaultIcon\"\n                />\n              </template> "), t.is_adv === 1 && t.is_showasadv === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_37, "AD")) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_38, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumberS(t.tx_volume_u_24h || 0, 2)), 1 /* TEXT */), _hoisted_39, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumberS(t.mcap || 0, 2)), 1 /* TEXT */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_40, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(t.current_price_usd || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_41, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span class=\"chg-badge\" :style=\"{ background: (t.price_change || 0) >= 0 ? upColor : downColor }\">\n            {{ ((t.price_change || 0) >= 0 ? '+' : '') + $f.formatNumber2(t.price_change || 0, 2) }}%\n          </span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
      class: "chg-badge",
      color: (t.price_change || 0) >= 0 ? $options.upColor : $options.downColor,
      size: "mini"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((t.price_change || 0) >= 0 ? '+' : '') + _ctx.$f.formatNumber2(t.price_change || 0, 2)) + "% ", 1 /* TEXT */)]),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["color"])), [[_directive_fit_text]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-button v-fit-text class=\"button-priceChange\" v-if=\"row.price_change && row.price_change >= 0\"\n            :color=\"upColor\" size=\"mini\">+{{ $f.formatNumber2(row.price_change || 0, 2)\n            }}%</van-button>\n          <van-button v-fit-text class=\"button-priceChange\" v-else :color=\"downColor\" size=\"mini\">\n            {{ $f.formatNumber2(row.price_change || 0, 2) }}%\n          </van-button> ")])], 8 /* PROPS */, _hoisted_28);
  }), 128 /* KEYED_FRAGMENT */)), !$options.displayTokens.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_empty, {
    key: 0,
    class: "empty",
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["description"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 链筛选弹窗 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_action_sheet, {
    show: $data.chainPopup,
    "onUpdate:show": _cache[14] || (_cache[14] = $event => $data.chainPopup = $event),
    "cancel-text": _ctx.$t('cancel'),
    description: _ctx.$t('selectNetwork'),
    teleport: "#app",
    class: "w-selectNet",
    "close-on-click-action": "",
    "overlay-style": {
      zIndex: 10000
    },
    style: {
      "z-index": "10001"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_search, {
      modelValue: $data.queryChain,
      "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => $data.queryChain = $event),
      placeholder: _ctx.$t('searchNetwork')
    }, null, 8 /* PROPS */, ["modelValue", "placeholder"]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.filterChainOptions, (c, ci) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_cell, {
        key: ci,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["list-item", {
          disabled: c.chain === $data.selectedChain
        }]),
        title: c.chain === 'all' ? _ctx.$t('all') : c.chain_showname,
        clickable: c.chain !== $data.selectedChain,
        center: "",
        size: "large",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.selectChain(c.chain), ["stop"])
      }, {
        icon: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [c.chain !== 'all' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
          key: 0,
          class: "icon-svg icon-net-connect",
          src: `${$options.s3BaseUrl}chain/${c.chain}.png`,
          onerror: `this.src='${$data.defaultIcon}'`,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_42)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", _hoisted_43, null, 512 /* NEED_PATCH */)), [[_directive_lazy, __webpack_require__(/*! @/assets/images/market/AllChains.svg */ "./src/assets/images/market/AllChains.svg")]])]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "title", "clickable", "onClick"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "cancel-text", "description"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/banner-bg-light.png */ "./src/assets/images/banner-bg-light.png");
/* harmony import */ var _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-7eb2bc79"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "home-content"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  style: {
    "width": "100%",
    "height": "auto"
  },
  src: _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, null, -1 /* HOISTED */));
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  style: {
    "width": "100%",
    "height": "auto"
  },
  src: _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, null, -1 /* HOISTED */));
const _hoisted_4 = {
  key: 0,
  class: "ad-tag"
};
const _hoisted_5 = ["href", "target"];
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  style: {
    "width": "100%",
    "height": "auto"
  },
  src: _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, null, -1 /* HOISTED */));
const _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  style: {
    "width": "100%",
    "height": "auto"
  },
  src: _assets_images_banner_bg_light_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, null, -1 /* HOISTED */));
const _hoisted_8 = {
  key: 0,
  class: "ad-tag"
};
const _hoisted_9 = {
  key: 1,
  class: "tokens-container1"
};
const _hoisted_10 = ["onClick"];
const _hoisted_11 = {
  style: {
    "display": "flex",
    "height": "100%",
    "align-items": "center"
  }
};
const _hoisted_12 = {
  key: 3,
  style: {
    "padding": "0 10px",
    "background": "#fff"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$data$bannerList;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  const _component_van_swipe_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-item");
  const _component_van_swipe = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe");
  const _component_NoticeBar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("NoticeBar");
  const _component_SectorHeat = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("SectorHeat");
  const _component_token_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("token-list");
  const _component_PerpList = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("PerpList");
  const _component_inscription_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("inscription-list");
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_DownloadPop = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("DownloadPop");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [((_$data$bannerList = $data.bannerList) === null || _$data$bannerList === void 0 ? void 0 : _$data$bannerList.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe, {
    key: 0,
    class: "swiper-container",
    autoplay: 3000
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.bannerList.slice(0, 3), (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe_item, {
        key: index
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
          var _item$render_link, _item$render_link$sta, _item$render_link2, _item$render_link2$re;
          return [item !== null && item !== void 0 && (_item$render_link = item.render_link) !== null && _item$render_link !== void 0 && (_item$render_link$sta = _item$render_link.startsWith) !== null && _item$render_link$sta !== void 0 && _item$render_link$sta.call(_item$render_link, 'route:') ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_router_link, {
            key: 0,
            to: item === null || item === void 0 || (_item$render_link2 = item.render_link) === null || _item$render_link2 === void 0 || (_item$render_link2$re = _item$render_link2.replace) === null || _item$render_link2$re === void 0 ? void 0 : _item$render_link2$re.call(_item$render_link2, 'route:', ''),
            class: "swiper-link"
          }, {
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
              width: "100%",
              "show-loading": "",
              src: item.picture_link,
              class: "banner-image"
            }, {
              loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_2]),
              error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_3]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["src"]), item.is_adv === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('ad')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("a", {
            key: 1,
            href: item.render_link || 'javascript:void(0);',
            target: item.render_link ? '_blank' : '_self',
            class: "swiper-link",
            rel: "noopener noreferrer"
          }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
            width: "100%",
            "show-loading": "",
            src: item.picture_link,
            class: "banner-image"
          }, {
            loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_6]),
            error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_7]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["src"]), item.is_adv === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('ad')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 8 /* PROPS */, _hoisted_5))];
        }),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_NoticeBar, {
    notice: $options.notice
  }, null, 8 /* PROPS */, ["notice"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_SectorHeat, {
    sort: 'volume_24h',
    "sort-dir": 'desc',
    cells: $data.spotlightCells,
    onSectorClick: $options.onSectorClick
  }, null, 8 /* PROPS */, ["cells", "onSectorClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div class=\"link-container\" v-if=\"plates?.length > 0\">\n      <template v-for=\"(item, index) in plates\" :key=\"index\">\n        <router-link class=\"link-container_item\" :to=\"{ name: 'Plate', params: { id: item.id } }\">\n          <van-image\n            class=\"link-container_item-icon\"\n            width=\"0.6rem\"\n            height=\"0.6rem\"\n            radius=\"0.16rem\"\n            lazy-load\n            :src=\"require(`@/assets/images/${item.name}.svg`)\"\n          />\n          <div class=\"content-dsc\">{{ item.name }}</div>\n        </router-link>\n      </template>\n    </div> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <ul v-if=\"primaryList.length > 0\" class=\"tokens-container\">\n      <li\n        v-for=\"(item, index) in primaryList\"\n        :key=\"index\"\n        @click.stop=\"goTokenDetails(item)\"\n        v-animation-trigger:animation-bg=\"item.current_price_usd\"\n        :class=\"item.price_change >0 ?'green':'red'\"\n      >\n        <div class=\"token-item\">\n          <div>\n            <span>{{ item.symbol }}</span>\n            <span v-if=\"item.price_change > 0\" :style=\"{ color: $store.getters.upColor[3] }\">\n              +{{ item.price_change }}%\n            </span>\n            <span v-else :style=\"{ color: $store.getters.downColor[3] }\">\n              {{ item.price_change }}%\n            </span>\n          </div>\n          <div\n            :style=\"{\n              color: item.price_change > 0 ? $store.getters.upColor[3] : $store.getters.downColor[3]\n            }\"\n          >\n            ${{ $f.formatNumber2(item.current_price_usd || 0, 2) }}\n          </div>\n        </div>\n        <line-chart\n          ref=\"liquidity\"\n          :priceChange=\"item.price_change\"\n          :type=\"String(index)\"\n          :dataX=\"item.dataX\"\n          :dataY=\"item.dataY\"\n        ></line-chart>\n      </li>\n    </ul> "), $data.primaryList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("ul", _hoisted_9, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.primaryList, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.goTokenDetails(item), ["stop"])
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
      class: "icon-token",
      round: "",
      width: "18px",
      height: "18px",
      "icon-size": "18px",
      style: {
        "width": "0.36rem",
        "height": "0.36rem",
        "margin-right": "0.08rem"
      },
      "lazy-load": "",
      "show-loading": "",
      src: _ctx.$f.formatIcon({
        logo_url: item === null || item === void 0 ? void 0 : item.logo_url
      }),
      "error-icon": $data.defaultIcon
    }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
        color: item.price_change > 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, " $" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(item.current_price_usd || 0, 2)), 5 /* TEXT, STYLE */)])], 8 /* PROPS */, _hoisted_10);
  }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" offset-top: header 高 1.2rem，这里少 0.02rem(≈1px)。首屏上方内容还没返回时\n         tab 栏正好落在 header 下沿，取 1.2rem 会让 vant 的 offset > rect.top 成立\n         (rect.top 有 1/64px 截断)，tab 栏被误判为 fixed 钉在顶部 "), $options.frontpageListConfigMerge.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tabs, {
    key: 2,
    id: "home-tabs",
    active: $data.active,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.active = $event),
    color: "#558BED",
    background: "#fff",
    sticky: true,
    "offset-top": "1.18rem",
    "title-active-color": "#333",
    "title-inactive-color": "#969799",
    class: "tabs-container",
    "line-width": "0.6rem",
    ellipsis: false,
    onClickTab: $options.getFrontpageList
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.frontpageListConfigMerge, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        name: item.category,
        key: index
      }, {
        title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
          var _ctx$$store$getters$l, _ctx$$store$getters$l2, _ctx$$store$getters$l3;
          return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <span v-if=\"language === 'zh-cn'\"> {{ item.name_zh_ch }}</span>\n            <span v-else-if=\"language === 'zh-tw'\"> {{ item.name_zh_tw }}</span>\n            <span v-else> {{ item?.['name_' + language] || item.name_en }}</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((item === null || item === void 0 ? void 0 : item['name_' + ((_ctx$$store$getters$l = _ctx.$store.getters.language) === null || _ctx$$store$getters$l === void 0 || (_ctx$$store$getters$l2 = _ctx$$store$getters$l.replace) === null || _ctx$$store$getters$l2 === void 0 || (_ctx$$store$getters$l2 = _ctx$$store$getters$l2.call(_ctx$$store$getters$l, 'cn', 'ch')) === null || _ctx$$store$getters$l2 === void 0 || (_ctx$$store$getters$l3 = _ctx$$store$getters$l2.replace) === null || _ctx$$store$getters$l3 === void 0 ? void 0 : _ctx$$store$getters$l3.call(_ctx$$store$getters$l2, '-', '_'))]) || (item === null || item === void 0 ? void 0 : item.name_en) || (item === null || item === void 0 ? void 0 : item.name)), 1 /* TEXT */), item.is_hot == 1 || item.is_hot == 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
            key: 0,
            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["badge", {
              'new': item.category === 'innovation'
            }])
          }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.is_hot == 1 ? 'HOT' : 'NEW'), 3 /* TEXT, CLASS */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])];
        }),
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [item.category === 'hot' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_token_list, {
          key: 0,
          externalFilterChain: $data.externalFilterChain,
          tableList: $data.tableSortData,
          isFavorites: false,
          type: "hot",
          chains: item === null || item === void 0 ? void 0 : item.chains,
          onSortChange: $options.sortChange
        }, null, 8 /* PROPS */, ["externalFilterChain", "tableList", "chains", "onSortChange"])) : item.category === 'openingtoken' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_token_list, {
          key: 1,
          externalFilterChain: $data.externalFilterChain,
          tableList: $data.tableSortData,
          isFavorites: false,
          type: "coming",
          chains: item === null || item === void 0 ? void 0 : item.chains,
          onSortChange: $options.sortChange
        }, null, 8 /* PROPS */, ["externalFilterChain", "tableList", "chains", "onSortChange"])) : item.category === 'contract' && _ctx.$route.name === 'Home' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_PerpList, {
          key: 2,
          externalActivePerpCategory: $data.externalActivePerpCategory,
          tableList: $data.perpList,
          subs: (item === null || item === void 0 ? void 0 : item.hyper_sub_categories) || []
        }, null, 8 /* PROPS */, ["externalActivePerpCategory", "tableList", "subs"])) : item.category === 'hot_inscriptions' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_inscription_list, {
          ref_for: true,
          ref: "brc_ref",
          tableList: $data.tableSortData,
          loading: $data.loadingTable,
          finished: true,
          error: $data.errorHot,
          onOnload: $options.onload,
          onSortChange: $options.sortChange
        }, null, 8 /* PROPS */, ["tableList", "loading", "error", "onOnload", "onSortChange"])])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_token_list, {
          key: 4,
          externalFilterChain: $data.externalFilterChain,
          tableList: $data.tableSortData,
          isFavorites: false,
          chains: item === null || item === void 0 ? void 0 : item.chains,
          onSortChange: $options.sortChange,
          category: item === null || item === void 0 ? void 0 : item.category
        }, null, 8 /* PROPS */, ["externalFilterChain", "tableList", "chains", "onSortChange", "category"]))]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active", "onClickTab"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-tabs\n      v-model:active=\"active\"\n      color=\"#558BED\"\n      background=\"#fff\"\n      title-inactive-color=\"#969799\"\n      class=\"tabs-container\"\n      line-width=\"0.6rem\"\n    >\n      <van-tab :title=\"$t('hots')\" :name=\"1\">\n        <token-list :tableList=\"hotTokens\" :isFavorites=\"false\" type=\"hot\"></token-list>\n      </van-tab>\n      <van-tab :title=\"$t('coming')\" :name=\"3\">\n        <token-list\n          :tableList=\"comingList\"\n          :isFavorites=\"false\"\n          type=\"coming\"\n          @getOpeningtoken=\"getOpeningtoken\"\n        ></token-list>\n      </van-tab>\n      <van-tab :title=\"$t('gainers')\" :name=\"2\">\n        <token-list :tableList=\"priceChangeTopTokens\" :isFavorites=\"false\"></token-list>\n      </van-tab>\n      <van-tab :title=\"$t('decline')\" :name=\"5\">\n        <token-list :tableList=\"priceChangeTopTokens\" :isFavorites=\"false\"></token-list>\n      </van-tab>\n      <van-tab :title=\"$t('inscription')\" :name=\"6\">\n        <div style=\"padding: 0 10px; background: #fff\">\n          <inscription-list\n            ref=\"brc_ref\"\n            :tableList=\"tableSortData\"\n            :loading=\"loadingHotInscriptions\"\n            :finished=\"true\"\n            :error=\"errorHot\"\n            @onload=\"onload\"\n            @sortChange=\"sortChange\"\n          ></inscription-list>\n        </div>\n      </van-tab>\n    </van-tabs> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_DownloadPop, {
    ref: "downloadPop",
    visible: $data.show,
    "onUpdate:visible": _cache[1] || (_cache[1] = $event => $data.show = $event),
    title: _ctx.$t('downloadNewAPP'),
    content: _ctx.$t('downloadTips'),
    "app-link": $options.appLink
  }, null, 8 /* PROPS */, ["visible", "title", "content", "app-link"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/images/alert-alert1.png */ "./src/assets/images/alert-alert1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../assets/images/alert-hot1.png */ "./src/assets/images/alert-hot1.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".chains-container[data-v-368a05e7] {\n  position: relative;\n  width: 100%;\n  height: 1.52rem;\n  border-radius: 0.16rem;\n  background: #F7FAFE;\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n}\n.chains-container[data-v-368a05e7]:active {\n  background: #e8e8e8;\n}\n.chains-container .m-chains-item[data-v-368a05e7] {\n  height: 100%;\n  width: 100%;\n  padding: 0.16rem 0.16rem 0.08rem;\n}\n.chains-container .chains-swipe[data-v-368a05e7] {\n  height: 100%;\n}\n.chains-container .chains-swipe .custom-indicator[data-v-368a05e7] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: #ffffff;\n  min-width: 0.46rem;\n  height: 0.3rem;\n  font-weight: 400;\n  font-size: 0.18rem;\n  line-height: 120%;\n  letter-spacing: 0%;\n  bottom: 0;\n  right: 0;\n  border-radius: 1.06rem;\n}\n.alter-card[data-v-368a05e7] {\n  position: relative;\n}\n.alter-card .token-info[data-v-368a05e7] {\n  display: flex;\n  align-items: center;\n  height: 0.32rem;\n  padding-left: 0.02rem;\n  margin-bottom: 0.14rem;\n}\n.alter-card .token-info .icon-token-container[data-v-368a05e7] {\n  display: flex;\n  margin-right: 0.08rem;\n}\n.alter-card .token-info .icon-network[data-v-368a05e7] {\n  height: 0.2rem;\n  width: 0.2rem;\n  bottom: -0.02rem;\n}\n.alter-card .token-info .token-symbol[data-v-368a05e7] {\n  font-size: 0.24rem;\n  line-height: 0.32rem;\n  font-weight: 510;\n  color: #333;\n}\n.alter-card .price-change[data-v-368a05e7] {\n  display: block;\n  font-size: 0.24rem;\n  line-height: 0.34rem;\n  font-weight: 600;\n  margin-bottom: 0.12rem;\n}\n.alter-card .mc[data-v-368a05e7] {\n  display: block;\n  font-size: 0.2rem;\n  line-height: 0.24rem;\n  color: #999;\n}\n.alter-card .mark[data-v-368a05e7] {\n  position: absolute;\n  z-index: 1;\n  height: 0.28rem;\n  width: 0.28rem;\n  right: 0;\n  top: 0;\n}\n.alter-card .mark.alert[data-v-368a05e7] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: contain;\n}\n.alter-card .mark.hot[data-v-368a05e7] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\n  background-size: contain;\n}\n.a-no[data-v-368a05e7] {\n  text-decoration: none;\n}\n.ellipsis[data-v-368a05e7] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 30vw;\n  display: block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".drawer-header[data-v-35374528] {\n  height: 0.89rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.18rem;\n  font-weight: 500;\n  font-size: 0.36rem;\n  line-height: 0.48rem;\n  color: #333;\n  border-bottom: 0.01rem solid #EEEEEE;\n  position: relative;\n  padding-top: constant(safe-area-inset-top);\n  padding-top: env(safe-area-inset-top);\n  flex-shrink: 0;\n}\n.distribution-bar[data-v-35374528] {\n  padding: 0.28rem 0.32rem;\n  background: #fff;\n}\n.distribution-bar .bar-title[data-v-35374528] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.2rem;\n  line-height: 0.28rem;\n  letter-spacing: 0;\n}\n.distribution-bar .bar-labels[data-v-35374528] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 0.24rem;\n  line-height: 0.24rem;\n  letter-spacing: 0;\n  color: #333;\n}\n.drawer-content[data-v-35374528] {\n  padding: 0 0.32rem;\n  overflow: hidden;\n  height: calc(100vh - 0.89rem - 1.96rem - 0.6rem);\n  height: calc(100dvh - 0.89rem - 1.96rem - 0.6rem);\n  height: calc(var(--vh, 1vh) * 100 - 0.89rem - 1.96rem - 0.6rem);\n  /* JS fallback */\n  display: flex;\n  flex-direction: column;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.heat-map-container[data-v-35374528] {\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n  grid-auto-rows: 0.16rem;\n  gap: 0.16rem;\n  align-content: start;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.heat-map-container .heat-card[data-v-35374528] {\n  border-radius: 0.16rem;\n  padding: 0.24rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  background: #F7FAFE;\n}\n.heat-map-container .heat-card .sector-name[data-v-35374528] {\n  color: #333;\n}\n.heat-map-container .heat-card[data-v-35374528]:active {\n  opacity: 0.8;\n}\n.heat-map-container .heat-card.fixed-size-1[data-v-35374528] {\n  grid-column: span 24 !important;\n  grid-row: span 6 !important;\n}\n.heat-map-container .heat-card.fixed-size-2[data-v-35374528] {\n  grid-column: span 12 !important;\n  grid-row: span 6 !important;\n}\n.heat-map-container .heat-card.fixed-size-3[data-v-35374528] {\n  grid-column: span 12 !important;\n  grid-row: span 6 !important;\n}\n.heat-map-container .heat-card.fixed-size-4[data-v-35374528] {\n  grid-column: span 6 !important;\n  grid-row: span 10 !important;\n}\n.heat-map-container .heat-card.fixed-size-5[data-v-35374528] {\n  grid-column: span 9 !important;\n  grid-row: span 6 !important;\n}\n.heat-map-container .heat-card.fixed-size-6[data-v-35374528] {\n  grid-column: span 9 !important;\n  grid-row: span 6 !important;\n}\n.heat-map-container .heat-card.fixed-size-7[data-v-35374528] {\n  grid-column: span 6 !important;\n  grid-row: span 7 !important;\n}\n.heat-map-container .heat-card.fixed-size-7 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-8[data-v-35374528] {\n  grid-column: span 7 !important;\n  grid-row: span 5 !important;\n}\n.heat-map-container .heat-card.fixed-size-8 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-9[data-v-35374528] {\n  grid-column: span 5 !important;\n  grid-row: span 5 !important;\n}\n.heat-map-container .heat-card.fixed-size-9 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-10[data-v-35374528] {\n  grid-column: span 6 !important;\n  grid-row: span 10 !important;\n}\n.heat-map-container .heat-card.fixed-size-11[data-v-35374528] {\n  grid-column: span 7 !important;\n  grid-row: span 5 !important;\n}\n.heat-map-container .heat-card.fixed-size-11 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-12[data-v-35374528] {\n  grid-column: span 5 !important;\n  grid-row: span 5 !important;\n}\n.heat-map-container .heat-card.fixed-size-12 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-13[data-v-35374528] {\n  grid-column: span 6 !important;\n  grid-row: span 7 !important;\n}\n.heat-map-container .heat-card.fixed-size-13 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-14[data-v-35374528] {\n  grid-column: span 12 !important;\n  grid-row: span 2 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.heat-map-container .heat-card.fixed-size-14 .card-header[data-v-35374528] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 0.08rem;\n}\n.heat-map-container .heat-card.fixed-size-14 .price-change[data-v-35374528] {\n  text-align: right;\n}\n.heat-map-container .heat-card.fixed-size-14 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-15[data-v-35374528] {\n  grid-column: span 12 !important;\n  grid-row: span 2 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.heat-map-container .heat-card.fixed-size-15 .card-header[data-v-35374528] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 0.08rem;\n}\n.heat-map-container .heat-card.fixed-size-15 .price-change[data-v-35374528] {\n  text-align: right;\n}\n.heat-map-container .heat-card.fixed-size-15 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-7 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-8 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-9 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-11 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-12 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-13 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-14 .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-15 .sector-name[data-v-35374528] {\n  font-size: 0.24rem !important;\n}\n.heat-map-container .heat-card.fixed-size-7 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-8 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-9 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-11 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-12 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-13 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-14 .price-change[data-v-35374528], .heat-map-container .heat-card.fixed-size-15 .price-change[data-v-35374528] {\n  font-size: 0.24rem !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  width: 100%;\n  line-height: 0.28rem;\n}\n.heat-map-container .heat-card.fixed-size-7 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-8 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-9 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-11 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-12 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-13 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-14 .top-tokens[data-v-35374528], .heat-map-container .heat-card.fixed-size-15 .top-tokens[data-v-35374528] {\n  display: none;\n}\n.heat-map-container .heat-card.fixed-size-8 .card-header .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-9 .card-header .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-11 .card-header .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-12 .card-header .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-14 .card-header .sector-name[data-v-35374528], .heat-map-container .heat-card.fixed-size-15 .card-header .sector-name[data-v-35374528] {\n  -webkit-line-clamp: 1 !important;\n}\n.heat-map-container .heat-card .card-header[data-v-35374528] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.08rem;\n}\n.heat-map-container .heat-card .card-header .sector-name[data-v-35374528] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  width: 100%;\n  line-height: 0.32rem;\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical !important;\n}\n.heat-map-container .heat-card .card-header .price-change[data-v-35374528] {\n  font-size: 0.24rem;\n  font-weight: 400;\n  white-space: nowrap;\n  line-height: 0.28rem;\n}\n.heat-map-container .heat-card .top-tokens[data-v-35374528] {\n  display: flex;\n  align-items: center;\n  margin-top: auto;\n  flex-wrap: wrap;\n  gap: 0.04rem;\n}\n.heat-map-container .heat-card .top-tokens .token-avatar[data-v-35374528] {\n  margin-right: -0.08rem;\n  flex-shrink: 0;\n}\n.empty[data-v-35374528] {\n  padding: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.heat-map-drawer {\n  background-color: #fff;\n  border: none;\n  padding-bottom: constant(safe-area-inset-bottom);\n  /* iOS 11.0 */\n  padding-bottom: env(safe-area-inset-bottom);\n  /* iOS 11.2+ */\n  max-height: 100vh;\n  max-height: 100dvh;\n  /* 动态视口高度 */\n}\n.heat-map-drawer.is-animating {\n  pointer-events: none;\n}\n.heat-map-drawer .el-drawer__body {\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/images/live.png */ "./src/assets/images/live.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".live-card[data-v-ea0aafa8] {\n  width: 100%;\n  height: 1.52rem;\n  box-sizing: border-box;\n  padding: 0.16rem;\n  border-radius: 0.16rem;\n  background: #F7FAFE;\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  overflow: hidden;\n}\n.live-card .live-title[data-v-ea0aafa8] {\n  display: flex;\n  align-items: center;\n  color: #333333;\n  font-weight: 510;\n  font-size: 0.24rem;\n  line-height: 0.32rem;\n  letter-spacing: 0%;\n  height: 0.32rem;\n}\n.live-card .live-title .live-dot[data-v-ea0aafa8] {\n  width: 0.52rem;\n  height: 0.32rem;\n  background: #fff;\n  margin-right: 0.08rem;\n  flex: 0 0 auto;\n  background: #f0f5fe url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: cover;\n}\n.live-card .live-topic[data-v-ea0aafa8] {\n  display: flex;\n  align-items: center;\n  height: 0.34rem;\n  margin-top: 0.16rem;\n}\n.live-card .live-topic .topic-text[data-v-ea0aafa8] {\n  color: #838A94;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n  font-size: 0.22rem;\n  height: 0.28rem;\n  line-height: 0.28rem;\n  letter-spacing: 0%;\n}\n.live-card .live-topic .leverage[data-v-ea0aafa8] {\n  flex: 0 0 auto;\n  margin-left: 0.12rem;\n  height: 0.28rem;\n  border-radius: 0.04rem;\n  padding: 0 0.07rem;\n  background: #3F80F7;\n  color: #FFFFFF;\n  font-weight: 600;\n  font-size: 0.2rem;\n  line-height: 0.28rem;\n  letter-spacing: 0%;\n}\n.live-card .live-desc[data-v-ea0aafa8] {\n  color: #959A9F;\n  font-weight: 400;\n  font-size: 0.2rem;\n  line-height: 100%;\n  letter-spacing: 0%;\n  margin-top: 0.1rem;\n}\n.live-card .ellipsis[data-v-ea0aafa8] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".notice-bar[data-v-7b65be8a] {\n  --van-notice-bar-height: 0.6rem;\n  --van-notice-bar-line-height: 0.6rem;\n  margin-bottom: 0.08rem;\n}\n.notice-swipe[data-v-7b65be8a] {\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n.icon-svg[data-v-7b65be8a] {\n  font-size: 0.48rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ratio-bar[data-v-0e53f3a2] {\n  display: flex;\n  gap: 0;\n  height: 0.16rem;\n  margin-bottom: 0.16rem;\n}\n.ratio-bar .ratio-rise[data-v-0e53f3a2],\n.ratio-bar .ratio-fall[data-v-0e53f3a2] {\n  height: 100%;\n  transition: flex 0.3s ease;\n}\n.ratio-bar .ratio-rise[data-v-0e53f3a2] {\n  border-radius: 0.2rem 0 0 0.2rem;\n  clip-path: polygon(0 0, 100% 0, calc(100% - 0.2rem) 100%, 0 100%);\n}\n.ratio-bar .ratio-fall[data-v-0e53f3a2] {\n  margin-left: -0.12rem;\n  border-radius: 0 0.2rem 0.2rem 0;\n  clip-path: polygon(0.2rem 0, 100% 0, 100% 100%, 0 100%);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/images/alert-alert1.png */ "./src/assets/images/alert-alert1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/images/alert-hot1.png */ "./src/assets/images/alert-hot1.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".sector-card[data-v-2f8c92b4] {\n  position: relative;\n}\n.sector-card .sector-name[data-v-2f8c92b4] {\n  font-size: 0.26rem;\n  line-height: 0.32rem;\n  height: 0.32rem;\n  font-weight: 510;\n  color: #333;\n  margin-bottom: 0.14rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sector-card .price-change[data-v-2f8c92b4] {\n  display: block;\n  font-size: 0.24rem;\n  line-height: 0.34rem;\n  font-weight: 600;\n  margin-bottom: 0.12rem;\n}\n.sector-card .top-tokens[data-v-2f8c92b4] {\n  display: flex;\n  align-items: center;\n}\n.sector-card .top-tokens .token-avatar[data-v-2f8c92b4] {\n  margin-right: -0.08rem;\n}\n.sector-card .top-tokens .token-avatar[data-v-2f8c92b4]:last-child {\n  margin-right: 0;\n}\n.mark[data-v-2f8c92b4] {\n  position: absolute;\n  z-index: 1;\n  height: 0.28rem;\n  width: 0.28rem;\n  right: 0;\n  top: 0;\n}\n.mark.alert[data-v-2f8c92b4] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: contain;\n}\n.mark.hot[data-v-2f8c92b4] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\n  background-size: contain;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sector-heat[data-v-b1d0ccf4] {\n  padding: 0.08rem 0.16rem 0.16rem;\n  background: #fff;\n}\n.sector-heat .sector-list[data-v-b1d0ccf4] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: stretch;\n  gap: 0.16rem;\n}\n.sector-heat .sector-list .live-cell[data-v-b1d0ccf4],\n.sector-heat .sector-list .alter-cell[data-v-b1d0ccf4] {\n  flex: 1;\n  min-width: 0;\n}\n.sector-heat .sector-list .cell-wrap[data-v-b1d0ccf4] {\n  position: relative;\n}\n.sector-heat .sector-list .sector-item[data-v-b1d0ccf4] {\n  flex: 1;\n  position: relative;\n  border-radius: 0.16rem;\n  background: #F7FAFE;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 0;\n  height: 1.52rem;\n  box-sizing: border-box;\n}\n.sector-heat .sector-list .sector-item .m-sector-item[data-v-b1d0ccf4] {\n  height: 100%;\n  width: 100%;\n  padding: 0.16rem 0.16rem 0.08rem;\n}\n.sector-heat .sector-list .sector-item[data-v-b1d0ccf4]:active {\n  background: #e8e8e8;\n}\n.sector-heat .sector-list .sector-item .sector-swipe[data-v-b1d0ccf4] {\n  height: 100%;\n}\n.sector-heat .sector-list .sector-item .sector-swipe .custom-indicator[data-v-b1d0ccf4] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: #ffffff;\n  min-width: 0.46rem;\n  height: 0.3rem;\n  font-weight: 400;\n  font-size: 0.18rem;\n  line-height: 120%;\n  letter-spacing: 0%;\n  bottom: 0;\n  right: 0;\n  border-radius: 1.06rem;\n}\n.sector-heat .sector-list .right-arrow[data-v-b1d0ccf4] {\n  position: absolute;\n  right: 0.08rem;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.sector-heat .empty[data-v-b1d0ccf4] {\n  padding: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.hot-detail[data-v-a9426750] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 0.89rem);\n  height: calc(var(--vh, 1vh) * 100 - 0.89rem);\n  height: calc(100dvh - 0.89rem);\n  /* 动态视口优先，自动扣掉浏览器底栏 */\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.hot-header[data-v-a9426750] {\n  padding: 0.24rem 0.4rem 0.16rem;\n}\n.hot-header .hot-title[data-v-a9426750] {\n  font-size: 0.36rem;\n  font-weight: 600;\n  color: #333;\n  line-height: 0.48rem;\n}\n.hot-header .hot-desc[data-v-a9426750] {\n  margin-top: 0.12rem;\n  font-size: 0.24rem;\n  font-weight: 400;\n  color: #959a9f;\n  line-height: 0.36rem;\n}\n.hot-stats[data-v-a9426750] {\n  padding: 0.16rem 0.4rem 0.4rem;\n}\n.hot-stats .stats-row[data-v-a9426750] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 0.28rem;\n}\n.hot-stats .stats-row .stat-item[data-v-a9426750] {\n  flex: 1;\n  min-width: 0;\n}\n.hot-stats .stats-row .stat-item[data-v-a9426750]:last-child {\n  text-align: right;\n}\n.hot-stats .stats-row .stat-item .stat-val[data-v-a9426750] {\n  font-size: 0.32rem;\n  font-weight: 600;\n  color: #333;\n  line-height: 0.4rem;\n}\n.hot-stats .stats-row .stat-item .stat-label[data-v-a9426750] {\n  margin-top: 0.08rem;\n  font-size: 0.24rem;\n  color: #959a9f;\n  line-height: 0.28rem;\n}\n.hot-stats .ratio-labels[data-v-a9426750] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 0.24rem;\n  line-height: 0.24rem;\n}\n.list-head[data-v-a9426750] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.16rem 0.32rem;\n}\n.list-head .list-title[data-v-a9426750] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #333;\n}\n.list-head .chain-btn[data-v-a9426750] {\n  width: 0.56rem;\n  height: 0.56rem;\n  border-radius: 50%;\n  background: #f2f4f7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.list-head .chain-btn .chain-btn-icon[data-v-a9426750] {\n  width: 0.32rem;\n  height: 0.32rem;\n  display: block;\n}\n.col-head[data-v-a9426750] {\n  display: flex;\n  align-items: center;\n  padding: 0.12rem 0.32rem;\n  font-size: 0.24rem;\n  gap: 0.24rem;\n  color: #959a9f;\n}\n.col-head .col-left[data-v-a9426750] {\n  flex: 1;\n  display: flex;\n  gap: 0.24rem;\n  align-items: center;\n}\n.col-head .col-price[data-v-a9426750] {\n  width: 1.5rem;\n  text-align: right;\n}\n.col-head .col-change[data-v-a9426750] {\n  width: 1.4rem;\n  text-align: right;\n}\n.col-head .col-sort[data-v-a9426750] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.col-head .col-price[data-v-a9426750],\n.col-head .col-change[data-v-a9426750] {\n  justify-content: flex-end;\n}\n.col-head .icon-sort-container[data-v-a9426750] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.08rem;\n  color: #ccc;\n}\n.col-head .icon-sort-container .iconfont[data-v-a9426750] {\n  font-size: 0.2rem;\n  padding: 0;\n}\n.col-head .icon-sort-container .iconfont.active[data-v-a9426750] {\n  color: #558BED;\n}\n.token-scroll[data-v-a9426750] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0 0.32rem 0.32rem;\n  padding-bottom: calc(0.32rem + constant(safe-area-inset-bottom));\n  padding-bottom: calc(0.32rem + env(safe-area-inset-bottom));\n  -webkit-overflow-scrolling: touch;\n}\n.token-row[data-v-a9426750] {\n  display: flex;\n  align-items: center;\n  gap: 0.24rem;\n  padding: 0.2rem 0;\n  height: 1.2rem;\n  cursor: pointer;\n}\n.token-row[data-v-a9426750]:active {\n  opacity: 0.8;\n}\n.token-row .tk-left[data-v-a9426750] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  min-width: 0;\n}\n.token-row .tk-left .tk-avatar[data-v-a9426750] {\n  flex-shrink: 0;\n  margin-right: 0.16rem;\n}\n.token-row .tk-left .tk-name-wrap[data-v-a9426750] {\n  min-width: 0;\n  flex: 1;\n}\n.token-row .tk-left .tk-name-wrap .tk-name-line[data-v-a9426750] {\n  display: flex;\n  align-items: center;\n  gap: 0.08rem;\n}\n.token-row .tk-left .tk-name-wrap .tk-name-line .tk-symbol[data-v-a9426750] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 2.4rem;\n}\n.token-row .tk-left .tk-name-wrap .tk-name-line .tk-badge[data-v-a9426750] {\n  flex-shrink: 0;\n}\n.token-row .tk-left .tk-name-wrap .tk-name-line .ad-tag[data-v-a9426750] {\n  flex-shrink: 0;\n  font-size: 0.2rem;\n  line-height: 0.24rem;\n  padding: 0 0.06rem;\n  border-radius: 0.06rem;\n  color: #959a9f;\n  border: 0.01rem solid #dcdcdc;\n}\n.token-row .tk-left .tk-name-wrap .tk-sub[data-v-a9426750] {\n  margin-top: 0.08rem;\n  font-size: 0.24rem;\n  color: #959a9f;\n  display: flex;\n  align-items: center;\n  gap: 0.08rem;\n}\n.token-row .tk-left .tk-name-wrap .tk-sub .tk-sub-sep[data-v-a9426750] {\n  color: #dcdcdc;\n}\n.token-row .tk-price[data-v-a9426750] {\n  width: 1.5rem;\n  text-align: right;\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.token-row .tk-change[data-v-a9426750] {\n  width: 1.4rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.token-row .tk-change .chg-badge[data-v-a9426750] {\n  width: 1.4rem;\n  font-size: 0.26rem;\n}\n.list-item .icon-net-connect[data-v-a9426750] {\n  width: 0.48rem;\n  height: 0.48rem;\n  margin-right: 0.16rem;\n  border-radius: 50%;\n}\n.list-item.disabled[data-v-a9426750] {\n  background: #f7f8fa;\n}\n.list-item.disabled[data-v-a9426750] .van-cell__title {\n  color: #558bed;\n}\n.empty[data-v-a9426750] {\n  padding: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-7eb2bc79]  .van-sticky--fixed {\n  background-color: #fff;\n  margin-top: -0.02rem;\n  /* border-top: 1px solid; */\n}\n[data-v-7eb2bc79]  .van-tabs--line .van-tabs__wrap {\n  height: 0.7rem;\n  border-bottom: 0.02rem solid #f5f5f5;\n}\n.home-content[data-v-7eb2bc79] {\n  position: relative;\n  z-index: 1;\n  font-size: 0.28rem;\n  background: #fff;\n  padding-bottom: 1rem;\n  min-height: calc(100vh - 2.4rem);\n}\n.home-content .link-container[data-v-7eb2bc79] {\n  margin-bottom: 0.1rem;\n  background: #fff;\n  padding: 0.2rem 0.3rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.home-content .link-container .link-container_item[data-v-7eb2bc79] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.home-content .link-container .link-container_item .link-container_item-icon[data-v-7eb2bc79] {\n  margin: 0 0.1rem;\n}\n.home-content .link-container .link-container_item .content-title[data-v-7eb2bc79] {\n  font-size: 0.3rem;\n  color: #000000;\n  margin-bottom: 0.1rem;\n}\n.home-content .link-container .link-container_item .content-dsc[data-v-7eb2bc79] {\n  font-size: 0.24rem;\n  color: #999999;\n  margin-top: 0.06rem;\n  text-align: center;\n}\n.home-content .token-title[data-v-7eb2bc79] {\n  background: #fff;\n  margin: 0;\n  padding: 0.2rem 0.3rem 0.2rem;\n  font-size: 0.32rem;\n  font-weight: bold;\n  border-bottom: 0.02rem solid #ddd;\n}\n.swiper-link[data-v-7eb2bc79] {\n  display: inline-flex;\n  width: 100%;\n  overflow: hidden;\n  align-items: center;\n}\n.swiper-link .ad-tag[data-v-7eb2bc79] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(-35%, 35%) rotateZ(-45deg);\n  transform-origin: center;\n  background-color: #f00;\n  color: #fff;\n  padding: 0.04rem 0.8rem;\n  font-size: 0.2rem;\n  line-height: 1;\n}\n.banner-image[data-v-7eb2bc79] {\n  display: block;\n}\n.swiper-container[data-v-7eb2bc79] .van-swipe-item {\n  position: relative;\n  line-height: 0;\n  overflow: hidden;\n}\n.tokens-container[data-v-7eb2bc79] {\n  background: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 0.3rem 0.04rem;\n}\n.tokens-container li[data-v-7eb2bc79] {\n  display: flex;\n  border-radius: 0.08rem;\n  padding: 0.16rem 0.12rem;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n.tokens-container li[data-v-7eb2bc79]:not(:last-child) {\n  margin-right: 0.04rem;\n}\n.tokens-container li.red[data-v-7eb2bc79] {\n  background: #FFF3F3;\n}\n.tokens-container li.green[data-v-7eb2bc79] {\n  background: #EFFBF7;\n}\n.tokens-container .token-item[data-v-7eb2bc79] {\n  display: flex;\n  flex-direction: column;\n}\n.tokens-container .token-item[data-v-7eb2bc79] > :nth-child(1) {\n  display: flex;\n  align-items: center;\n}\n.tokens-container .token-item[data-v-7eb2bc79] > :nth-child(1) > :nth-child(1) {\n  font-size: 0.24rem;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.tokens-container .token-item[data-v-7eb2bc79] > :nth-child(1) > :nth-child(2) {\n  font-size: 0.2rem;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin-left: 0.04rem;\n}\n.tokens-container .token-item[data-v-7eb2bc79] > :nth-child(2) {\n  font-size: 0.28rem;\n  color: #1e2329;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin: 0.1rem 0 0 0;\n}\n.tokens-container1[data-v-7eb2bc79] {\n  background: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.16rem 0.3rem 0.2rem;\n  gap: 0.24rem;\n}\n.tokens-container1 li[data-v-7eb2bc79] {\n  display: flex;\n  height: 0.36rem;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n.tokens-container1 li > div[data-v-7eb2bc79] {\n  font-weight: 400;\n  font-size: 0.28rem;\n  line-height: 0.32rem;\n}\n.tokens-container1 li.red[data-v-7eb2bc79] {\n  background: #FFF3F3;\n}\n.tokens-container1 li.green[data-v-7eb2bc79] {\n  background: #EFFBF7;\n}\n.tokens-container1 .token-item[data-v-7eb2bc79] {\n  display: flex;\n  flex-direction: column;\n}\n.tokens-container1 .token-item[data-v-7eb2bc79] > :nth-child(1) {\n  display: flex;\n  align-items: center;\n}\n.tokens-container1 .token-item[data-v-7eb2bc79] > :nth-child(1) > :nth-child(1) {\n  font-size: 0.24rem;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.tokens-container1 .token-item[data-v-7eb2bc79] > :nth-child(1) > :nth-child(2) {\n  font-size: 0.2rem;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin-left: 0.04rem;\n}\n.tokens-container1 .token-item[data-v-7eb2bc79] > :nth-child(2) {\n  font-size: 0.28rem;\n  color: #1e2329;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin: 0.1rem 0 0 0;\n}\n.pop-download-container[data-v-7eb2bc79] {\n  background: #ffffff;\n  border: 0.02rem solid #cccccc;\n  border-radius: 0.3rem;\n  display: flex;\n  align-items: center;\n  padding: 0.3rem 0.24rem;\n  font-size: 0.22rem;\n  color: #666666;\n  font-weight: 400;\n  position: relative;\n}\n.pop-download-container img[data-v-7eb2bc79] {\n  height: 0.48rem;\n}\n.pop-download-container h3[data-v-7eb2bc79] {\n  font-size: 0.28rem;\n  color: #000000;\n  font-weight: 500;\n  margin: 0 0 0.1rem 0;\n}\n.pop-download-container .pop-download-content[data-v-7eb2bc79] {\n  margin-left: 0.28rem;\n}\n.pop-download-container .icon-close[data-v-7eb2bc79] {\n  position: absolute;\n  top: 0.3rem;\n  right: 0.3rem;\n  font-size: 0.32rem;\n  color: #333;\n}\n.badge[data-v-7eb2bc79] {\n  position: absolute;\n  right: -0.16rem;\n  top: 0.12rem;\n  color: #fff;\n  background: #3f80f7;\n  font-size: 0.16rem;\n  border-radius: 0.06rem;\n  padding: 0.02rem 0.04rem;\n  line-height: 1.15;\n}\n.badge.new[data-v-7eb2bc79] {\n  right: -0.24rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".home-content .van-image.banner-image .van-image__loading,\n.home-content .van-image.banner-image .van-image__error {\n  position: relative !important;\n  background-color: transparent !important;\n}\n.home-content .van-image.banner-image .van-image__img {\n  height: auto !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a6322dde", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("35d08b58", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0ab92fb0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8f43dc34", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e2cd83ae", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("56b1b9d4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2b08db87", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("10157cc6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5dc17cc7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("f6a14fac", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("051d3f7e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/alert-alert1.png":
/*!********************************************!*\
  !*** ./src/assets/images/alert-alert1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAArdJREFUeAHtmL9rU1EUx78v+KPJVG1GfyQkFJ1MdRPB6yAIKk0XF4fGIYOT+p/UQRxUrIvgZEARrRYCSp2kblpJSKiOiWYq/oAc731JJT/ePfekSYzC+0Db5N7z7vnm/HqvAUJCQkaChx1A6pzSvzP68mkMTtErPi9iQAYSSupsBhR5rF8mMBxVeN4ZLbgqvUAsVEcxAaJ1/XInUQyiocXOScVGIIXoPkYnEv5ZrTNFiCLaTvk6xoHnJSVRFUY0ojA2KCuxkqb+NMaHkhjJhBIyGBckC4JTKCllGiiB8THtTxQHgohO8dE8dRKIx+37hw4CCxfB4zkztgtOiD/khN7O54CPn4APG0C93lqPRvXeHHBktrWHJy4fBQwn1FFD0VjrrxFkfoKIRcFDzoi6U0+O+jx8AE7iM1psjPNxDA5Yoe1Gsn9aU5+cgG2MzXE2aAlSWfau54go00jG+cIFiDENxX6oH4rZdAmlRetWfpHv9l5M+i9fYgyaitl0NFPQoDcO81fsjcPhjzJ9/Z0HQK3W64utU+tDiV+ftPfbnwUzD7M6fUdnZXXp4s0a8GIV2PzcoSa6zysWGkHmTOp76tMc+PAR8O49hmZltV+kz3drT3CpV30rNT3M7y7raLwFrl0dPLJbW8DN2/oGsGEx8J+kikE79ogS2Qe9cWQcDgorEmydcl2vwGEcmvRJeb3Gi2z7tM3TQKGt/zIFrLyCmMJToWFwnVoi6r73+pia7R0zw9gxvm2plz/Rb35x29TqEEOYD1ru6/pyuXz967OXyvv1EyJm9uvDm7xNdAqYPw8JtHtPpnTvVi6dTi93rncN/FKplI1E/C8YJg4R3UilUkvb77tS73merDb/Dl3dL/8CYsL8n0J1XVTxj6B7pdr5vu/pqVKp5JrNZgITRItsJJPJJYSEhIye38PqvMKaWJydAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/alert-hot1.png":
/*!******************************************!*\
  !*** ./src/assets/images/alert-hot1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB5tJREFUeAG1WHtsHMUZ/83s43znsy+2aye4Teq4lGISSEnaJqVNpDqkVUziCkNpRdu0pY3VSkGJkGjaf6pWrVSIVFqUtrQNAhX4g6cEgqAIARIgHhFxCM/IgIgDCcIhceTHPXd3hm92Zu/W4ezcxWbs72bnsfP95nvNNwvMrXB8hsXCHEpvJtN9sHfVyNau87YMtGXWtKcbTr5wauJ9GmKYhzLXRfjpjZeNWqVSKwPjDmNIJBvwxvjE3oufPbSJxm0iH+dY5gpOvW95m9d6xVyh3BlIKZqbG/me945/f/C1d/eqLpxDmavNSEWvnJ7YR08y6rQY49nJHH7S2f7Qc6uX/wxagnWXOdlcBJBLPtzXsWBQSjl9QAi+pDm1+WQ+t+fARD4LQNaz8Lx425GgOGpxTlZHvJnhz/RPqeDxXSt6DtcLbN7AdTm8HTbZnF0Cc4hcT9cO1cTBDbz09u7OxaizzAc4tu2Clj/7vCA5geEEijsFMIuA2UVwNwef59iVi9I3oU4HPCdDjQNT1LPQ6vNzHsqaU9q1GCIsVmBjxUJnA+pU7VzAKc7Sv67b97NTgoIc17xZGWD4LDgkE0glnQWos9SqVntja2vzGfNldvALWa+QFZbtcU72xm2jVkvXzPK13dGz6/h1C6IWcPaxgS/e9Pg1beP0LKK+t3/+uSErn3VtxdQ4QlgTIXxWoIphm1MNt4h6y9l2Yz1z+cItHUmxPVeaykV9D61PX7XU9r7KrYBrLeoQwiQLNck8obfhUBiVFsU7Do/+UWeZTXKss7MzsbY7cTvjBTtgfnRGBgMr2b2cF3moskiVtk+eSXU2D751M9jXumnMV4dbKL2xIP8x6iyzSY4d3sg/Cgo5yayAsUQQut8TVyRuEJNFcgAlNTl9e6eoffMNwKIWsNvuB1poCklNOcX7J/Ac5gkc37Wq8fLGoNgI7nMlgVRSNFK/7F3u38xzkoegeOw0mCL66w4gTY0JsoC0Wp3GJZ35QuClE+xB1FlmVOsvVqbuJuPhSm2h6uxiONdyyIgcYuoIzdw20vvBd4CMQ8/UOPaeBmeZ8aTEobHgnTjfLRcmLugCGjDL+V4V3DJass0NOnSU90OSOSnv6+O3IRCaqWWWVbIXBGrt+soCk5MEHpqUT9Dfhe1YjAoQ8f8+PnxkZyaPWdKpquCu+0biuyipOBUYoyZPTEh2zSXi16QlOQ2Y8tAdW4HieGWBTNM08IzqGzfg0b5ufOmKJWg5so0NBcVS4J8uBC9enf7fTDiq2tyl7Va/pACqgmpoV06YtumIYZOFWWY5RQXqXNhJdQxcV7fOf5PQIYVIkhk+9mMMU7IMOUlbCtSufKxZ6tDOMIhaJbeoWS7jnFbnxq6UVzpmK05Maurtb15cARadnA1JPSmaZ6QXZlO0X+YQsNA0JMRkSf5rnbMFVZKCquBSadGqgUHbF0dFTTGGYf/qdaaTGsysnyOb+1E/bYRX5kYUSd3R4DhF0A1L7e2okhRUBee6frps9Dy2oH2G1JQpty5Rogj1rcXq0jNRz7dIawmayyvvxTcXclc8BBa3BT3VcFQFN1kQx/SInA7OigF0I2a2AUcd3NGk2kXKyn//D1qMNMCZns9jG4uA0lBDg0jWDO7oGNv/KclZMZBhZsS0wWezZ4jEIFAAsycJ4L+BvNQW5aDiSOW1Y6l9LeD2HhV30PqyPIPFJKakcNVvgY6lZJw0eHCfsXZDoYjMZAXQJ/D9P6UuS68TB2baXiC9msHdehCvIROlsbHdqp4cYe76HgG8hc5SUtnQCyTBRShHXRa5pquB8hSw/GqSnl0BFiXJZu0PpuQwavVWNfGDE3hTOiQ9FpulBNJ1PjkCXWYCys8G/wssuYjiGJ1CrClGzYYyui5SkOv/Db3PptmaKko9Q0flrqogZgK3fRUW//1KjDA6JEJNRcfRigFgzS/VpRShuyo1i5Jpy8qyLBK7EQ9vA275NkAODJV3qiCtlEmCZb+rjmMmyclbh3DstMBxyj/EtG1k1BGpJEVcGHmEcE27QbdDUud5UnOOxtyWyhVDcVX5qIT/1gjuB+oDFwJcdQe+zFpjc8LUaNSEjoQh1wBLGUrGatfMUWDd2MpGmHTbXfYf/BAz3MpmBTcyAu/pA7g2cM2XIgXu9SfpraYK2jJQNwYmenaMB1PJT5hEQb8WpODvegS9mCXhPdsFJ1h/Jx44PoW/CZsAKgXnTtFZ+rHZumuYR7qKXNq0ledy48Ev/4U0rbVH11j/w4/wp51P4VnM8oms1hu488aNGLzoEuzGOGNMkpo2UayzSH0N7WTkdCW1kioT1bNV9qs8ukTpcWGMAFL7nh3KGaRMQR56FdtW7sYenOXbXT2fB/il56Pt+T/gSKLIk9xawPGV1dSrjJ3SXpvUyY2GhErNia9HIUSSJx94HAH3hNckStfvRtft+3EKNXxUrPfjYWgGf9yEdb/q53d+vkl2we6gXpKarc5Vo2L6FCYDyqJFScr8cVD6Nn7Xw/La6x/EPj2hfP+dV3Dx90ImO3tx2foeDJzXga83N7G2TDM6x8fl6OgY3tl/GPf+8008OjwcXn9Uqfsz2GdZ5vRZ9xNMxXVVnZInwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/banner-bg-light.png":
/*!***********************************************!*\
  !*** ./src/assets/images/banner-bg-light.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner-bg-light.a3e8d5c8.png";

/***/ }),

/***/ "./src/assets/images/chainSelect.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/chainSelect.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/chainSelect.17365d09.svg";

/***/ }),

/***/ "./src/assets/images/live.png":
/*!************************************!*\
  !*** ./src/assets/images/live.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAwCAYAAAC/gkysAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADg1JREFUeAHFW1uMVVcZ/v91GC5NCuP9AWKPl1SIJlAf2sQYnVbSmCa1U0000RggPklsaDW2CtY5UKn6oAGM0QcTIEZ9ktL2pdImpTHxxQeGp/JSOyTFJ9uOPNQgM/t3rfVf954zzDnMSBfM3vvsvfa6fOu/fP9aayOsQaLp/iSkjdP5aich9POtXYQ0CQj5PgAiAuV/5bom1D8qD/N/ovwektzPuQlSvpvfqa/m90rO+k5Cfg+8DEy1fOIc8q6X/Xp+cDklms2VvNJLE7P4s0tzsMqEcJOpgtVs2kPYTOdSpkojGQiwv9rx0mm9BxBBo4ooMjgFuPhufT+AyO8zwBXMAisDyWAJ8AXEmrOWy3XwoGEti1KtZzYfjvfWT5zHwc2BODZwFbCFjQfymwdEqrzDUKWDR7vcSnpPGo/gICV+NBRwK49aElYlqwACtYxSvpULFcwKX70hAAXJNsmvbazXPGiner31h8cFcCzg6IHtM5Tw0Xw1GVXNO26N0c5SAANZbSscS9RVyyAGF1i6WCILGOWSB4WzGTA5G/SkVCmnVUaqGIFIJb+cpNySfAAHE0f+cRhGTCMBR1/c3odEz+TLndy4qgrYkiBVKZU6ALc/Ij0mgQKi2SW2UWLruKNSLstTIlZZZEkSiUORMhB1B7WTKPerWot6moTJYFbgpZzSrpKvQbg8gXQvDubmVsIkjQBatmN4Idewq3YNSOVLRErARwEtPGE0ya7rXR5rEuWzgfNCyMplh8DmjKWPHzAgoM5AKuYipB6VYyDWT5ZMqYLE3IEAW8vk1/sLgBcWBv1pWA1wdP/2mXw6lQVhCzdKVAa7otrqv0Fnt+QXBXPksKP1SfJb6UgCFICIl4HD16QnVH1sNYa0dn1G7LCkGtQLAi2lPpzMqnzm+lP9GbhBSjcEDWFAFESelUkscsirTQQQ+apEgFEWUIxOkOicwli0k0LnIKCKimMbXdLq1ERwMVq3gm6XesSAm7ZLzA004uetZsLB9ac+uix4OBy0O6ezETgD4u7NI6auYYeWUa+PkrRKaILYks47EJWp2sTWs2DUjdvVIWN7uNSwM8iWX+pkR4VMVZRHdtthTkO5Xyin+KNe2rvu4GunVwSuOAJawAu5mC3ewVQLFaIZARMKEMBSz9WhH34mt1cdGnLDP+FwputYqQqLonrfJGJqnr3UKRbRBgCAgidnrol2BhkgtHrg3+t6dBf+sO0w1nWBg+v4MhZ+xraB9R9ZOUiNlKkmof0IRqaOyAe3AX71O/XSjAlIzjBsFDL4oJhWe9Th77ePWt5/rkJz9qi1FdykcsPV2JlTcNupxsP1VwaKGfrkwmJlFHfBcsDRfdWu9UEMsVSIGszU3wnRS6+dktioLb24/6cAn7wbVkq4zHX8jTBawn++CvT3P+vQ6jgB94EpjZqOKmvSnWBz0Uyv0YR6tfPa0f5gw6G5gdZlzoGmMlcDnPFGU9dbVddOZuRAtAfceBPo4d1JnYq15SqvlSOqexANN7TQQIs9BNWDnA7QoD+pd92rpjTTyq94K/1xUgHidlpSJnYLhZfSyGKylkn0DaHt9b2RYr2CETNFJT0FH47GqfMfbfnvBnhUi2K/VKSNaK+6dR06FDykdvRmoPMo5WORZMqtW51Mwsh5uDdJ4VFVLKaokagHFElAVbUEwrwAg2KZ1LHEpd6UmFMtp6qkabvUXw0FGTFjys4cXr2Eafi7IXHSNCRxamnjZkif2wfwnq2SAVroqq5y6EDkXct/jTtm0I4STV7bBHtLHoke6QBA6DBKGOj8VXyo2jyms9FLsatnQ+ySeOuTsd6P3QPpu89BevBH0DvwvIdtliROgODc0bwCGcUCi/TqoUfwULlMoqY7oWUPJRt53AhiO1jQ0O2dxn2RuI8jb/96A5o/Pl3Pa5HSe7dBb99vofftP2RJ28Y3N20Wx9DyHoTqf6ukiMrFDByOmSeU41RR1+yc007rKIXYW3W+E3Sj8SMWZFBRQwjh1ejiRr/7AcG5U7D4/fuAnv0VrCalu78C6XvPAX5q95Jnxtvc7SP5E2JVNTlDfcK/SbWpInB9A0wXEzgFIfL1HqkZbRPbEDGLREr1ga3aTOZISaY48lWTgaPH7yW68BLcVPr4PVW6hiUNh0l8f6jevQPaY8XUmEwHzF3Fxu0imTcdpmDk5XfuAEaVbFykYRyXyp5LZoDKULx5BenX+6E5+cSaqa82ljx4cRGkQB2o49Qo9t4ByiT6jgJcP0IZHKfeVl5kFMUKU0lFnSAzgjR6h8okik3PBcr1t2eg+cU38/kMrFEiJJ17IwdPH8pRlEisH7aiEM2HVeII7uhac3Sr2QIiOJ32s26/xyIjJgnB5kj1b16B5vQT0Pxmf75enfTZBKyMMAsIqImjKFHubyXgkMnO0NnJZF6R75G4ZEcvvEPMBI1co7NJq8it3ljdIgvfpDCzk6W8iy9Bc/Sh8YsNKYRaZmR8dNnyt7IgeP2lvwlJIsryZDLJe86eAxOpzlKFStideU4SQ9tRT1uCGDEpO69TV3yDBwfdVNT/mzaPZQKW1KMctO0XeBJVQsjYV6a9GjC4c1AiUZYp5oFasVIQSrKOWIERZAjDAupZYazEqmD2Uw115Vxmmu8sZPb3sKqkVDPEXPW28VvE4A34mWUyG2TOJU8r0Xw+Twqb0TjD5sEIbgQFkUzY1zxNXTjn1gGMBiGPpHsmrLOKMgO86XaALz2C6Qt7YdVJuyw8GHV3gMwtcf1Bd9CUmqgjp/nHXJmPm80v9I2xRYOPPjbxZZtKUGMrtdaccc1ylP6oq+MfuvyA6TNfBvzaQYDbNsPaJJmUKykJ/UqOjM4eo9lYUFkUe2gzw3lqgIGbC46MrHybxou2hlugE39mEcTeRUs3alJ3RKqp79uK6Vs/B/jEypOg4yUCm2L3W7K+Sj4Vi+peGYR6TB79y8zAbAYuXSwYko43e1TWuTbP6aCB7vYwqDlEx75ywttur+S55t+9B9P0I2soZa2aIIw96OKPOEEjWmBLO76ewavkIGJYfvVeycBNnAW4dlJno4zI6ppfxwup/ac4Zwpm3KyJoyKH3zgE6QN5feKzDwN8eAf8/5JLGpIv/Cj5slFHXlOiEAuZ7snV9WZxNuH52fn847wJaDyJ3QuShCxpKAGd+vdAXYm67bxxev9WwK8fXBPQ6IUTec1heKQRJYBX8gF8/lHsc3CquhwH4L0TCby4Ka94ydQ5nrUXyAAC9Y/qwJmjaTzmpNlcvLWMRvcOa5jorTdg8U+PQ/PLBwneakcatMSASPPRR14ObOV9NgN8hijfatLxci3AbTjNfE74lDiG1kKNgOnxW+BzaHEMxCmpW58YhebKq7jw9BQ0507wsuFfT4L1AgJrVDPGz5RCckkh7LJIKf9NwOL5cq8CV9UVm2MgKxNahS5HtihJCM+UcTtTxJYJvuXJhkvs8IsnaGHm00DP/8TjLGudsCD0yUqdj63RTIfKs0ik07ow7atczcbj+enbSK5pzA8iE+GKlMFpgR6yddp/i5MvTpm1RYtGwpqCuLOaJ0ZN3XbHCdkCQg+aw/rbgKtSl/BEWGvhXY9BPbUAZi+BoZCS7ADxO1fhVid656pMUURk/NgxPfWWjzva4mZQ2BjsH4nbIJYIB+3ecSEfd9qmmfKublaBsE+j0nulyAjQ3Y/xIdsCsTThMudwTYG6E678bnEM9JcTtY11Y05pF299laldGWd0+8WURAxQ7acu0pV+ZgASMXFJOLf+0OsfGdYFB67svlzAC2V/r0w1W4Vesc0/EW+OLteN7voB2weM4sJlR6TN7fCmGZQO+k6j8kx3IIWBMyC8DaQ7kmRnpwaApHba2g6yFhd2Zbb6w0Az5U0Wn9rOrPzK/LBNN0v2x+ELl+Zy1Y+FyUp/5o7DJJnMbQTvKrd0/s8kB8y1I/oMGaKXADBkMHEpvWmthwZ7FQuw0oXRklOSkMMWoq1L7im47n1d0IYCVzO/eOlULukIF+5tjpdyDCGwvoy2KweVPatdJpZO9LkdEgy0UG5za+pKzuhEwiRfnR20ZqSlKtKokfluKwZyCxecLLWesrYM1j05dxaGpGV3ZOK5S4McdBy238Z+KO7G0mGPzfewzM7QssrubHColOneE3FUJkctD0Qd0CR21rp0BxVBdwMp+cmpFYjlQ+1r09CRiSfnDsNy+MAKie7fMQ09OJljt0lZPxPUyGzKMJvhHefmtL47AID2Nn0JuoN9qu+gaxtvwxetRyL/MIR3UmKov87ltTZB+jOdhyv2zByP9EG+nZjPmR5b/+PXTt0IlxWBq9UVh4HwcvncyHdUUjQXssiXIxIkjDscmdI0pLam5WBsR6XMc6mV7Bh3+6xJyoqePX5jIdtjlOZLWRF8GRDZqu/Oz/pycR1ueHiUj0VGAk7T4gPbB7mymZZnHQKg7/91WlX/Eph+c+csL2hnSW0XUyBf2w5l8AsAvk2VVPI11EH0T54ERPQtrOpB0TzzfILmWO/I8qq5KuAqMkX6JmAmN2cPGDCuOqYiqq4ou526Ki1LM/atV5BQiCor9s6kpYJX6Y+B7Qa3YQ6HrQ9FWKWT0Z0g9fD2IjQn1q+DYziYm4cx0tjAGYDTZQcnTFHd6cSE2VQsSJB+f+W2LQAXbFvwNsK53H6arep+fSg73NvqifGzqKEf1+XDeUr07MREc2pcwCA0YdWpgJhHblcv0eezCO3Kt/q58f22RPif31cHwyoFRqIKYSVbzuvYPCe/6ijkeeMqylKXF6LY2ONs/nW5nCc2Lp69WbBi+h/wdTMlnEPa0gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/market/AllChains.svg":
/*!************************************************!*\
  !*** ./src/assets/images/market/AllChains.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/AllChains.9db07bc6.svg";

/***/ }),

/***/ "./src/assets/images/right.svg":
/*!*************************************!*\
  !*** ./src/assets/images/right.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/right.0e99ce47.svg";

/***/ }),

/***/ "./src/components/chains/spotlight.vue":
/*!*********************************************!*\
  !*** ./src/components/chains/spotlight.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spotlight_vue_vue_type_template_id_368a05e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spotlight.vue?vue&type=template&id=368a05e7&scoped=true */ "./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true");
/* harmony import */ var _spotlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spotlight.vue?vue&type=script&lang=js */ "./src/components/chains/spotlight.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true */ "./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_spotlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_spotlight_vue_vue_type_template_id_368a05e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-368a05e7"],['__file',"src/components/chains/spotlight.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chains/spotlight.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/chains/spotlight.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./spotlight.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=style&index=0&id=368a05e7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_style_index_0_id_368a05e7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_template_id_368a05e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./spotlight.vue?vue&type=template&id=368a05e7&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chains/spotlight.vue?vue&type=template&id=368a05e7&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_spotlight_vue_vue_type_template_id_368a05e7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/heatMap.vue":
/*!************************************!*\
  !*** ./src/components/heatMap.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatMap_vue_vue_type_template_id_35374528_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heatMap.vue?vue&type=template&id=35374528&scoped=true */ "./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true");
/* harmony import */ var _heatMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heatMap.vue?vue&type=script&lang=js */ "./src/components/heatMap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss */ "./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss");
/* harmony import */ var _heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss */ "./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_heatMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_heatMap_vue_vue_type_template_id_35374528_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-35374528"],['__file',"src/components/heatMap.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/heatMap.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/heatMap.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss":
/*!*********************************************************************************************!*\
  !*** ./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=0&id=35374528&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_0_id_35374528_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss":
/*!*********************************************************************************!*\
  !*** ./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=style&index=1&id=35374528&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_style_index_1_id_35374528_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true ***!
  \******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_template_id_35374528_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./heatMap.vue?vue&type=template&id=35374528&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/heatMap.vue?vue&type=template&id=35374528&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_heatMap_vue_vue_type_template_id_35374528_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/lineChart.vue":
/*!**************************************!*\
  !*** ./src/components/lineChart.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lineChart_vue_vue_type_template_id_c69eb92c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineChart.vue?vue&type=template&id=c69eb92c */ "./src/components/lineChart.vue?vue&type=template&id=c69eb92c");
/* harmony import */ var _lineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineChart.vue?vue&type=script&lang=js */ "./src/components/lineChart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);





const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_lineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_lineChart_vue_vue_type_template_id_c69eb92c__WEBPACK_IMPORTED_MODULE_0__["render"]],['__file',"src/components/lineChart.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/lineChart.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/lineChart.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_lineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./lineChart.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/lineChart.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_lineChart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/lineChart.vue?vue&type=template&id=c69eb92c":
/*!********************************************************************!*\
  !*** ./src/components/lineChart.vue?vue&type=template&id=c69eb92c ***!
  \********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_lineChart_vue_vue_type_template_id_c69eb92c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./lineChart.vue?vue&type=template&id=c69eb92c */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/lineChart.vue?vue&type=template&id=c69eb92c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_lineChart_vue_vue_type_template_id_c69eb92c__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/liveCard.vue":
/*!*************************************!*\
  !*** ./src/components/liveCard.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liveCard_vue_vue_type_template_id_ea0aafa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true */ "./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true");
/* harmony import */ var _liveCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liveCard.vue?vue&type=script&lang=js */ "./src/components/liveCard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss */ "./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_liveCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_liveCard_vue_vue_type_template_id_ea0aafa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-ea0aafa8"],['__file',"src/components/liveCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/liveCard.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/liveCard.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./liveCard.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=style&index=0&id=ea0aafa8&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_style_index_0_id_ea0aafa8_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_template_id_ea0aafa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/liveCard.vue?vue&type=template&id=ea0aafa8&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_liveCard_vue_vue_type_template_id_ea0aafa8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/noticeBar.vue":
/*!**************************************!*\
  !*** ./src/components/noticeBar.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noticeBar_vue_vue_type_template_id_7b65be8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true */ "./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true");
/* harmony import */ var _noticeBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticeBar.vue?vue&type=script&lang=js */ "./src/components/noticeBar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true */ "./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_noticeBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_noticeBar_vue_vue_type_template_id_7b65be8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-7b65be8a"],['__file',"src/components/noticeBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/noticeBar.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/noticeBar.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./noticeBar.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=style&index=0&id=7b65be8a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_style_index_0_id_7b65be8a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_template_id_7b65be8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/noticeBar.vue?vue&type=template&id=7b65be8a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_noticeBar_vue_vue_type_template_id_7b65be8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/riseFallBar.vue":
/*!****************************************!*\
  !*** ./src/components/riseFallBar.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _riseFallBar_vue_vue_type_template_id_0e53f3a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true */ "./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true");
/* harmony import */ var _riseFallBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riseFallBar.vue?vue&type=script&lang=js */ "./src/components/riseFallBar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss */ "./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_riseFallBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_riseFallBar_vue_vue_type_template_id_0e53f3a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-0e53f3a2"],['__file',"src/components/riseFallBar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/riseFallBar.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/riseFallBar.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./riseFallBar.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss":
/*!*************************************************************************************************!*\
  !*** ./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=style&index=0&id=0e53f3a2&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_style_index_0_id_0e53f3a2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_template_id_0e53f3a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/riseFallBar.vue?vue&type=template&id=0e53f3a2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_riseFallBar_vue_vue_type_template_id_0e53f3a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/sectorCard.vue":
/*!***************************************!*\
  !*** ./src/components/sectorCard.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sectorCard_vue_vue_type_template_id_2f8c92b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true */ "./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true");
/* harmony import */ var _sectorCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectorCard.vue?vue&type=script&lang=js */ "./src/components/sectorCard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss */ "./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_sectorCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sectorCard_vue_vue_type_template_id_2f8c92b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-2f8c92b4"],['__file',"src/components/sectorCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/sectorCard.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/sectorCard.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorCard.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=style&index=0&id=2f8c92b4&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_style_index_0_id_2f8c92b4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_template_id_2f8c92b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorCard.vue?vue&type=template&id=2f8c92b4&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorCard_vue_vue_type_template_id_2f8c92b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/sectorHeat.vue":
/*!***************************************!*\
  !*** ./src/components/sectorHeat.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sectorHeat_vue_vue_type_template_id_b1d0ccf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true */ "./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true");
/* harmony import */ var _sectorHeat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectorHeat.vue?vue&type=script&lang=js */ "./src/components/sectorHeat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss */ "./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_sectorHeat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sectorHeat_vue_vue_type_template_id_b1d0ccf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-b1d0ccf4"],['__file',"src/components/sectorHeat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/sectorHeat.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/sectorHeat.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHeat.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=style&index=0&id=b1d0ccf4&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_style_index_0_id_b1d0ccf4_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_template_id_b1d0ccf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHeat.vue?vue&type=template&id=b1d0ccf4&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHeat_vue_vue_type_template_id_b1d0ccf4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/sectorHotDetail.vue":
/*!********************************************!*\
  !*** ./src/components/sectorHotDetail.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sectorHotDetail_vue_vue_type_template_id_a9426750_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true */ "./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true");
/* harmony import */ var _sectorHotDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sectorHotDetail.vue?vue&type=script&lang=js */ "./src/components/sectorHotDetail.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss */ "./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_sectorHotDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_sectorHotDetail_vue_vue_type_template_id_a9426750_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-a9426750"],['__file',"src/components/sectorHotDetail.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/sectorHotDetail.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/sectorHotDetail.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHotDetail.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss":
/*!*****************************************************************************************************!*\
  !*** ./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=style&index=0&id=a9426750&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_style_index_0_id_a9426750_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_template_id_a9426750_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/sectorHotDetail.vue?vue&type=template&id=a9426750&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_sectorHotDetail_vue_vue_type_template_id_a9426750_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/home.vue":
/*!****************************!*\
  !*** ./src/views/home.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_7eb2bc79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=7eb2bc79&scoped=true */ "./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true");
/* harmony import */ var _home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js */ "./src/views/home.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss */ "./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss");
/* harmony import */ var _home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss */ "./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_home_vue_vue_type_template_id_7eb2bc79_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-7eb2bc79"],['__file',"src/views/home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/home.vue?vue&type=script&lang=js":
/*!****************************************************!*\
  !*** ./src/views/home.vue?vue&type=script&lang=js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss":
/*!*************************************************************************************!*\
  !*** ./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=0&id=7eb2bc79&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_0_id_7eb2bc79_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss":
/*!*************************************************************************!*\
  !*** ./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=style&index=1&id=7eb2bc79&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_style_index_1_id_7eb2bc79_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true":
/*!**********************************************************************!*\
  !*** ./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true ***!
  \**********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_template_id_7eb2bc79_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./home.vue?vue&type=template&id=7eb2bc79&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/home.vue?vue&type=template&id=7eb2bc79&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_home_vue_vue_type_template_id_7eb2bc79_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);