(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whaleTracking"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/userRemark.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-browser.js");
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/index.js */ "./src/api/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserRemark',
  props: {
    user_address: String,
    defaultRemark: String
  },
  data() {
    return {
      remark: {
        isEdit: false,
        value: this.defaultRemark,
        loading: false
      }
    };
  },
  computed: {
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['currentAccount'])
  },
  methods: {
    toggleEdit() {
      if (this.currentAccount === "") {
        this.$store.commit("changeConnectVisible", true);
        return;
      }
      this.remark.isEdit = true;
    },
    cancelRemark() {
      // this.remark.value = ''
      this.remark.isEdit = false;
    },
    async updateWhaleRemark() {
      if (!this.$f.verifyLogin()) {
        return;
      }
      const {
        user_address,
        currentAccount,
        chain
      } = this;
      const params = {
        user_address,
        self_address: currentAccount,
        remark: this.remark.value,
        user_chain: chain
      };
      this.remark.loading = true;
      Object(_api_index_js__WEBPACK_IMPORTED_MODULE_1__["updateWhaleRemark"])(params).then(() => {
        this.$toast.success(this.$t('success'));
        this.$emit('update:remark', this.remark.value);
        // this.remark.value = ''
      }).catch(err => {
        this.$toast.fail(this.$t('fail'));
        console.log(err);
      }).finally(() => {
        this.remark.loading = false;
        this.remark.isEdit = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/chip.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChipDistribution',
  props: {
    dataList: Array,
    loading: Boolean
  },
  data() {
    return {
      chartId: `chart-${Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()}`,
      myChart: null
    };
  },
  computed: {
    option() {
      return [{
        color: '#333FFF',
        label: this.$t('position'),
        value: 'amount'
      }, {
        color: '#58CFFF',
        label: this.$t('buyCost'),
        value: 'cost'
      }];
    },
    dataX() {
      return this.dataList.map(i => i.time);
    },
    series() {
      return this.option.map((i, k) => {
        return {
          name: i.label,
          type: 'line',
          smooth: true,
          symbol: 'none',
          // z: i.z,
          // stack: 'total',
          itemStyle: {
            color: i.color // 折线点的颜色
          },
          lineStyle: {
            width: 2
          },
          areaStyle: {
            color: i.color,
            opacity: 0.2
          },
          emphasis: {
            disabled: true,
            focus: 'series'
          },
          tooltip: {
            valueFormatter: value => i.value === 'cost' ? '$' + this.$f.formatNumber2(value || 0, 2) : this.$f.formatNumber2(value || 0, 2),
            textStyle: {
              fontSize: 10,
              color: '#333333'
            }
          },
          yAxisIndex: k,
          data: this.dataList.map(j => (j === null || j === void 0 ? void 0 : j[i.value]) || 0)
        };
      });
    }
  },
  watch: {
    loading(val) {
      let myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["getInstanceByDom"](document.getElementById(this.chartId));
      if (!myChart) {
        myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](document.getElementById(this.chartId));
      }
      if (val) {
        myChart.hideLoading();
        myChart.showLoading({
          maskColor: 'rgba(255, 255, 255, 0)',
          text: ''
        });
      } else {
        myChart.hideLoading();
      }
    },
    dataList() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!document.getElementById(this.chartId)) {
        return;
      }
      let myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["getInstanceByDom"](document.getElementById(this.chartId));
      if (!myChart) {
        myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](document.getElementById(this.chartId));
      }
      myChart.hideLoading();
      myChart.showLoading({
        maskColor: 'rgba(255, 255, 255, 0)',
        text: ''
      });
      let option = {
        legend: {
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#878FBC',
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 10,
            color: '#333333'
          },
          formatter: params => {
            let res = params[0].name;
            res = this.$f.formatDate(Number(res), 'YYYY-MM-DD');
            for (let i = 0; i < params.length; i++) {
              let seriesName = params[i].seriesName;
              if (i === 0) {
                res += '<br>' + params[i].marker + seriesName + '：' + this.$f.formatNumUnit(params[i].data);
              } else {
                res += '<br>' + params[i].marker + seriesName + '：' + '$ ' + this.$f.formatNumUnit(params[i].data);
              }
            }
            return `<div style="line-height: 1.5">${res}</div>`;
          }
        },
        grid: {
          left: '5px',
          //图表距边框的距离
          right: '5%',
          top: '5%',
          bottom: '20%',
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
            // color: '#878EBE',
            formatter: value => {
              return this.$f.formatDate(value, 'MM-DD');
            }
          },
          nameTextStyle: {
            fontSize: 12
          }
        },
        yAxis: [{
          type: 'value',
          name: ``,
          nameTextStyle: {
            fontSize: 12,
            align: 'left'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            // color: '#878EBE',
            // formatter: '{value}%'
          },
          splitLine: {
            show: false
          }
        }, {
          type: 'value',
          name: ``,
          nameTextStyle: {
            fontSize: 12,
            align: 'left'
          },
          position: 'right',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            // color: '#878EBE',
            // formatter: '{value}%'
          },
          splitLine: {
            show: false
          }
        }],
        series: this.series
      };
      myChart.setOption(option);
      if (this.dataList && this.dataList.length > 0) {
        myChart.hideLoading();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/flow.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Flow',
  props: {
    dataList: Array,
    loading: Boolean
  },
  emits: ['tabChange'],
  data() {
    return {
      chartId: `chart-${Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()}`,
      myChart: null,
      tabActive: '3d'
    };
  },
  computed: {
    tabs() {
      return [{
        name: this.$t('1h'),
        id: '1h'
      }, {
        name: this.$t('4h'),
        id: '4h'
      }, {
        name: this.$t('1d'),
        id: '1d'
      }, {
        name: this.$t('3d'),
        id: '3d'
      }, {
        name: this.$t('1w'),
        id: '1w'
      }, {
        name: this.$t('1m'),
        id: '1m'
      }];
    },
    option() {
      return [{
        color: '#677ff4',
        label: this.$t('netInflow'),
        value: 'net_inflow'
      }];
    },
    dataX() {
      return this.dataList.map(i => i.time);
    },
    series() {
      return this.option.map(i => {
        return {
          name: i.label,
          type: 'line',
          smooth: true,
          symbol: 'none',
          // z: i.z,
          // stack: 'total',
          itemStyle: {
            color: i.color // 折线点的颜色
          },
          lineStyle: {
            width: 2
          },
          areaStyle: {
            color: i.color,
            opacity: 0.2
          },
          emphasis: {
            disabled: true,
            focus: 'series'
          },
          tooltip: {
            // valueFormatter: value => this.$f.formatNumber2(value || 0, 2),
            textStyle: {
              fontSize: 10,
              color: '#333333'
            }
          },
          data: this.dataList.map(j => (j === null || j === void 0 ? void 0 : j[i.value]) || 0)
        };
      });
    }
  },
  watch: {
    loading(val) {
      let myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["getInstanceByDom"](document.getElementById(this.chartId));
      if (!myChart) {
        myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](document.getElementById(this.chartId));
      }
      if (val) {
        myChart.hideLoading();
        myChart.showLoading({
          maskColor: 'rgba(255, 255, 255, 0)',
          text: ''
        });
      } else {
        myChart.hideLoading();
      }
    },
    dataList() {
      this.init();
    },
    tabActive(val) {
      this.$emit('tabChange', val);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!document.getElementById(this.chartId)) {
        return;
      }
      let myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["getInstanceByDom"](document.getElementById(this.chartId));
      if (!myChart) {
        myChart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](document.getElementById(this.chartId));
      }
      myChart.hideLoading();
      myChart.showLoading({
        maskColor: 'rgba(255, 255, 255, 0)',
        text: ''
      });
      let option = {
        legend: {
          x: 'center',
          y: 'bottom',
          textStyle: {
            color: '#878FBC',
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 10,
            color: '#333333'
          },
          formatter: params => {
            let res = params[0].name;
            res = this.$f.formatDate(Number(res), 'YYYY-MM-DD');
            for (let i = 0; i < params.length; i++) {
              let seriesName = params[i].seriesName;
              if (i === 0) {
                res += '<br>' + params[i].marker + seriesName + '：' + this.$f.formatNumUnit(params[i].data);
              } else {
                res += '<br>' + params[i].marker + seriesName + '：' + '$ ' + this.$f.formatNumUnit(params[i].data);
              }
            }
            return `<div style="line-height: 1.5">${res}</div>`;
          }
        },
        grid: {
          left: '5px',
          //图表距边框的距离
          right: '5%',
          top: '5%',
          bottom: '20%',
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
            color: '#878EBE',
            formatter: value => {
              let s = 'HH:mm';
              if (this.tabActive === '1w' || this.tabActive === '1m') {
                s = 'MM-DD';
              }
              return this.$f.formatDate(value, s);
            }
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
            color: '#878EBE'
            // formatter: '{value}%'
          },
          splitLine: {
            show: false
          }
        },
        series: this.series
      };
      myChart.setOption(option);
      if (this.dataList && this.dataList.length > 0) {
        myChart.hideLoading();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/whaleTracking.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _components_userRemark_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/userRemark.vue */ "./src/components/userRemark.vue");
/* harmony import */ var _components_whale_charts_chip_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/whale/charts/chip.vue */ "./src/components/whale/charts/chip.vue");
/* harmony import */ var _components_whale_charts_flow_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/whale/charts/flow.vue */ "./src/components/whale/charts/flow.vue");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/utils.js */ "./src/utils/utils.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WhaleTracking',
  components: {
    Chip: _components_whale_charts_chip_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Flow: _components_whale_charts_flow_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserRemark: _components_userRemark_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      tabActive: 'chip',
      whaleDetail: {
        stats: {},
        txs: []
      },
      balance: 0,
      chipList: [],
      loadingChip: false,
      flowList: [],
      loadingFlow: false,
      userTransfer: {
        stats: {},
        transfers: []
      },
      tabActive1: 'transfer',
      userLiq: [],
      add_amount_cur: 0,
      add_volume_cur: 0,
      remove_amount_cur: 0,
      remove_volume_cur: 0,
      showPopover: false,
      editRemark: ''
    };
  },
  computed: {
    tokenInfo() {
      return this.$store.state.tokenInfo || Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__["getLastSearch"])();
    },
    whaleTrackingInfo() {
      console.log('this.$store.state.whaleTrackingInfo', this.$store.state.whaleTrackingInfo);
      return this.$store.state.whaleTrackingInfo;
    },
    newTags() {
      return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__["isJSON"])(this.$route.query.newTags) ? JSON.parse(this.$route.query.newTags) : [];
    },
    remark() {
      return this.editRemark || this.$route.query.remark;
    },
    topN() {
      var _this$$route$query;
      return ((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 || (_this$$route$query = _this$$route$query.topN) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.toUpperCase()) || '';
    },
    SupportFullDataChain() {
      return this.$store.state.supportFullDataChain || [];
    },
    wallet_tag_extra() {
      return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__["isJSON"])(this.$route.query.wallet_tag_extra) ? JSON.parse(this.$route.query.wallet_tag_extra) : {};
    },
    wallet_tag() {
      let arr = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__["isJSON"])(this.$route.query.wallet_tag) ? JSON.parse(this.$route.query.wallet_tag) || [] : [];
      let arr1 = arr === null || arr === void 0 ? void 0 : arr.map(item => {
        if (item == 2) {
          var _this$wallet_tag_extr, _this$$f$getTokenImag;
          return ((_this$wallet_tag_extr = this.wallet_tag_extra) === null || _this$wallet_tag_extr === void 0 ? void 0 : _this$wallet_tag_extr.pair_info) || ((_this$$f$getTokenImag = this.$f.getTokenImage(item)) === null || _this$$f$getTokenImag === void 0 ? void 0 : _this$$f$getTokenImag.text) || '';
        } else if (item == 11) {
          var _this$$f$getTokenImag2, _this$wallet_tag_extr2;
          return ((_this$$f$getTokenImag2 = this.$f.getTokenImage(11, (_this$wallet_tag_extr2 = this.wallet_tag_extra) === null || _this$wallet_tag_extr2 === void 0 ? void 0 : _this$wallet_tag_extr2.hot_wallet_Info)) === null || _this$$f$getTokenImag2 === void 0 ? void 0 : _this$$f$getTokenImag2.text) || '';
        } else {
          var _this$$f$getTokenImag3;
          return ((_this$$f$getTokenImag3 = this.$f.getTokenImage(item)) === null || _this$$f$getTokenImag3 === void 0 ? void 0 : _this$$f$getTokenImag3.text) || '';
        }
      });
      if (this.topN) {
        arr1.unshift(this.topN);
      }
      let ss = arr1.join('、');
      return ss;
    },
    symbol() {
      if (this.$route.params.symbol) {
        return this.$route.params.symbol + ' ';
      }
      return '';
    },
    danger() {
      return {
        symbol: this.symbol,
        danger: true
      };
    },
    chain() {
      let tokenId = this.$route.params.id;
      if (tokenId && tokenId !== '-') {
        var _this$$f$getAddressAn, _this$$f$getAddressAn2;
        let chain = (_this$$f$getAddressAn = (_this$$f$getAddressAn2 = this.$f.getAddressAndChainFromId(tokenId)) === null || _this$$f$getAddressAn2 === void 0 ? void 0 : _this$$f$getAddressAn2.chain) !== null && _this$$f$getAddressAn !== void 0 ? _this$$f$getAddressAn : '';
        return chain || '';
      }
      return '';
    },
    addressOmit() {
      let address = this.$route.params.address;
      // return address.slice(0, 12) + '...' + address.slice(-12)
      return address;
    },
    walletLogo() {
      return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__["isJSON"])(this.$route.query.wallet_logo) ? JSON.parse(this.$route.query.wallet_logo) : null;
    },
    walletLogoUrl() {
      var _this$walletLogo, _this$walletLogo2, _this$$store$state$av;
      const logo = ((_this$walletLogo = this.walletLogo) === null || _this$walletLogo === void 0 ? void 0 : _this$walletLogo.logo) || ((_this$walletLogo2 = this.walletLogo) === null || _this$walletLogo2 === void 0 ? void 0 : _this$walletLogo2.x_logo) || '';
      if (!logo) return '';
      return logo.startsWith('http') ? logo : `${(_this$$store$state$av = this.$store.state.ave_globalConfig) === null || _this$$store$state$av === void 0 ? void 0 : _this$$store$state$av.token_logo_url}${logo}`;
    },
    tabs() {
      return [{
        name: this.$t('chipDistribution'),
        id: 'chip'
      }, {
        name: this.$t('capitalFlow'),
        id: 'flow'
      }];
    },
    stats() {
      var _this$whaleDetail;
      return ((_this$whaleDetail = this.whaleDetail) === null || _this$whaleDetail === void 0 ? void 0 : _this$whaleDetail.stats) || {};
    },
    txs() {
      var _this$whaleDetail2;
      return ((_this$whaleDetail2 = this.whaleDetail) === null || _this$whaleDetail2 === void 0 ? void 0 : _this$whaleDetail2.txs) || [];
    },
    tokenAddress() {
      var _this$$f$getAddressAn3;
      let id = this.$route.params.id;
      return id ? (_this$$f$getAddressAn3 = this.$f.getAddressAndChainFromId(id)) === null || _this$$f$getAddressAn3 === void 0 ? void 0 : _this$$f$getAddressAn3.address : '';
    },
    avgBuyPrice() {
      let stats = this.whaleDetail.stats || {};
      let buy_volume_cur = (stats === null || stats === void 0 ? void 0 : stats.buy_volume_cur) || 0;
      let buy_amount_cur = (stats === null || stats === void 0 ? void 0 : stats.buy_amount_cur) || 0;
      if (buy_amount_cur !== 0) {
        return buy_volume_cur / buy_amount_cur;
      }
      return 0;
    },
    amountCur() {
      if (this.chain === 'solana') {
        return this.balance || 0;
      } else {
        var _this$stats;
        return this.balance || ((_this$stats = this.stats) === null || _this$stats === void 0 ? void 0 : _this$stats.amount_cur) || 0;
      }
    },
    volumeCur() {
      return this.amountCur * this.curPrice;
    },
    curPrice() {
      var _this$whaleDetail3;
      return this.$store.state.tokenPrice || ((_this$whaleDetail3 = this.whaleDetail) === null || _this$whaleDetail3 === void 0 ? void 0 : _this$whaleDetail3.cur_token_price) || 0;
    },
    profit() {
      let stats = this.whaleDetail.stats || {};
      let cur_price = this.curPrice;
      let {
        amount_cur,
        sell_volume_cur,
        buy_volume_cur
      } = stats;
      amount_cur = this.balance || amount_cur;
      return amount_cur * cur_price + sell_volume_cur - buy_volume_cur;
    },
    profitChange() {
      var _this$stats2;
      let buy_volume_cur = ((_this$stats2 = this.stats) === null || _this$stats2 === void 0 ? void 0 : _this$stats2.buy_volume_cur) || 0;
      if (buy_volume_cur > 0) {
        return this.profit / buy_volume_cur;
      }
      return 0;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      Promise.all([this.getWhaleDetail(), this.getTokenBalance()]).then(res => {
        this.getWhaleInFlow();
      });
      this.getNetInFlow();
      this.getUserTransfer();
      this.getUserLiq();
    },
    getWhaleDetail() {
      return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getWhaleDetail"])(this.$route.params.id, this.$route.params.address).then(async res => {
        this.whaleDetail = res;
        return res;
      });
    },
    getTokenBalance() {
      let {
        address,
        chain
      } = this.$f.getAddressAndChainFromId(this.$route.params.id);
      return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getTokenBalance"])(address, chain, this.$route.params.address, 'whale').then(async res => {
        console.log('getTokenBalance', res);
        this.balance = res;
        return res;
      });
    },
    getWhaleInFlow() {
      this.loadingChip = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["getWhaleInFlow"])(this.$route.params.id, this.$route.params.address).then(res => {
        let chipList = res.slice();
        if (chipList.length > 0) {
          for (let i = chipList.length - 1; i >= 0; i--) {
            let item = chipList[i];
            let amount = item.amount;
            if (i === chipList.length - 1) {
              if (!item.has_balance_data || amount === 0 && this.amountCur !== 0) {
                chipList[i].amount = this.amountCur;
              } else {
                break;
              }
            } else {
              chipList[i].amount = chipList[i + 1].amount - chipList[i + 1].net_inflow;
            }
          }
        }
        this.chipList = chipList;
      }).finally(() => {
        this.loadingChip = false;
      });
    },
    getNetInFlow(intervalStr = (_this$$refs => (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.flow) === null || _this$$refs === void 0 ? void 0 : _this$$refs.tabActive)() || '3d') {
      this.loadingFlow = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["getWhaleInFlow"])(this.$route.params.id, this.$route.params.address, intervalStr).then(res => {
        this.flowList = res;
      }).finally(() => {
        this.loadingFlow = false;
      });
    },
    getUserTransfer() {
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["getUserTransfer"])(this.$route.params.id, this.$route.params.address).then(res => {
        this.userTransfer = res;
      });
    },
    getUserLiq() {
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["getUserLiq"])(this.$route.params.id, this.$route.params.address).then(res => {
        this.userLiq = res || [];
        this.userLiq.forEach(item => {
          if (item.type === 'addLiquidity') {
            if (item.token0_address === this.tokenAddress) {
              this.add_amount_cur += item.amount0;
            } else {
              this.add_amount_cur += item.amount1;
            }
            this.add_volume_cur += item.amount0 * item.token0_price_usd + item.amount1 * item.token1_price_usd;
          } else {
            if (item.token0_address === this.tokenAddress) {
              this.remove_amount_cur += item.amount0;
            } else {
              this.remove_amount_cur += item.amount1;
            }
            this.remove_volume_cur += item.amount0 * item.token0_price_usd + item.amount1 * item.token1_price_usd;
          }
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
    getPrice(row) {
      if (row.from_address && row.from_address === this.tokenAddress) {
        return this.$f.formatNumber(row.from_price_usd);
      }
      if (row.to_address && row.to_address === this.tokenAddress) {
        return this.$f.formatNumber(row.to_price_usd);
      }
      let price = 0;
      if (this.tokenAddress === row.token0Address) {
        price = row.token0PriceUSD || 0;
      } else {
        price = row.token1PriceUSD || 0;
      }
      return this.$f.formatNumber(price);
    },
    getAmountUSD(row) {
      if (row.from_address && row.from_address === this.tokenAddress) {
        return Number(row.from_amount) * Number(row.from_price_usd);
      }
      if (row.to_address && row.to_address === this.tokenAddress) {
        return Number(row.to_amount) * Number(row.to_price_usd);
      }
      return row.amountUSD;
    },
    getAmount(row) {
      if (row.from_address && row.from_address === this.tokenAddress) {
        return row.from_amount;
      }
      if (row.to_address && row.to_address === this.tokenAddress) {
        return row.to_amount;
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
      return amount;
    },
    isTransferIn(row) {
      var _this$$route$params, _row$to_address, _row$to_address$toLow, _address$toLowerCase;
      let address = (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.address;
      return ((_row$to_address = row.to_address) === null || _row$to_address === void 0 || (_row$to_address$toLow = _row$to_address.toLowerCase) === null || _row$to_address$toLow === void 0 ? void 0 : _row$to_address$toLow.call(_row$to_address)) === (address === null || address === void 0 || (_address$toLowerCase = address.toLowerCase) === null || _address$toLowerCase === void 0 ? void 0 : _address$toLowerCase.call(address));
    },
    transferFromAddress(row) {
      return this.isTransferIn(row) ? row.from_address : row.to_address;
    },
    transferIcon(row) {
      if (this.$store.state.typeUpDown === '0' && this.isTransferIn(row)) {
        return '#icon-transferIn-g';
      }
      if (this.$store.state.typeUpDown === '1' && this.isTransferIn(row)) {
        return '#icon-transferIn-r';
      }
      if (this.$store.state.typeUpDown === '0' && !this.isTransferIn(row)) {
        return '#icon-transferOut-r';
      }
      if (this.$store.state.typeUpDown === '1' && !this.isTransferIn(row)) {
        return '#icon-transferOut-g';
      }
    },
    goTxLink(item) {
      window.open(this.$f.formatExplorerUrl(item.chain, item.transaction, 'tx'));
    },
    jumpToken() {
      this.$store.commit('setId', this.$route.params.id);
      this.$router.push({
        name: 'Token',
        params: {
          id: this.$route.params.id
        }
      });
    },
    jumpWhaleTrackingUser() {
      var _this$$route$params2;
      this.$router.push({
        name: 'WalletDetail',
        params: {
          userAddress: (_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.address,
          chain: this.chain
        },
        query: this.$route.query
      });
    },
    updateRemark(remark) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          remark
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-744217bb"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "user-remark flex-start"
};
const _hoisted_2 = {
  class: "remark-dialog"
};
const _hoisted_3 = {
  class: "remark"
};
const _hoisted_4 = {
  class: "remark-btn"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_dialog = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-dialog");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
    class: "ml-5px icon-_26-Education iconfont font-10",
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.toggleEdit && $options.toggleEdit(...args), ["stop", "prevent"]))
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_dialog, {
    show: $data.remark.isEdit,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => $data.remark.isEdit = $event)
  }, {
    footer: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
      onClick: $options.cancelRemark
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('cancel')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
      type: "primary",
      onClick: $options.updateWhaleRemark
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"])])]),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('editRemark')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
      modelValue: $data.remark.value,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.remark.value = $event),
      maxlength: "50",
      placeholder: _ctx.$t('enterRemark')
    }, null, 8 /* PROPS */, ["modelValue", "placeholder"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-34d19200"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chart-container"
};
const _hoisted_2 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    id: $data.chartId,
    style: {
      height: '150px',
      width: '100vw'
    }
  }, null, 8 /* PROPS */, _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-4aadbde2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "flow-container"
};
const _hoisted_2 = {
  class: "tabs"
};
const _hoisted_3 = ["id", "value"];
const _hoisted_4 = ["for"];
const _hoisted_5 = {
  class: "chart-container"
};
const _hoisted_6 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.tabs, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: index,
      class: "tab-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("input", {
      type: "radio",
      id: `whale-tab-item-${item.id}`,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.tabActive = $event),
      value: item.id,
      class: "tab-radio-input"
    }, null, 8 /* PROPS */, _hoisted_3), [[vue__WEBPACK_IMPORTED_MODULE_0__["vModelRadio"], $data.tabActive]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", {
      for: `whale-tab-item-${item.id}`,
      class: "tab-item-label"
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.name), 9 /* TEXT, PROPS */, _hoisted_4)]);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    id: $data.chartId,
    style: {
      height: '150px',
      width: '100vw'
    }
  }, null, 8 /* PROPS */, _hoisted_6)])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/当前持仓.svg */ "./src/assets/images/当前持仓.svg");
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/持仓金额.svg */ "./src/assets/images/持仓金额.svg");
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/平均成本.svg */ "./src/assets/images/平均成本.svg");
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/盈亏情况.svg */ "./src/assets/images/盈亏情况.svg");
/* harmony import */ var _assets_images_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_svg__WEBPACK_IMPORTED_MODULE_5__);






const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-996b0154"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "whale-container"
};
const _hoisted_2 = {
  class: "section-1"
};
const _hoisted_3 = {
  class: "top"
};
const _hoisted_4 = {
  class: "item"
};
const _hoisted_5 = {
  class: "icon-token-container"
};
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  class: "item-info1"
};
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_10 = {
  class: "item"
};
const _hoisted_11 = {
  class: "icon-token-container"
};
const _hoisted_12 = {
  class: "item-info1"
};
const _hoisted_13 = {
  key: 0,
  style: {
    "display": "flex",
    "align-items": "center",
    "flex-wrap": "wrap"
  }
};
const _hoisted_14 = {
  key: 0,
  class: "font-14 flex-start",
  style: {
    "word-break": "break-word"
  }
};
const _hoisted_15 = {
  class: "pop-content"
};
const _hoisted_16 = ["src"];
const _hoisted_17 = {
  key: 1,
  class: "flex items-center justify-start flex-wrap font-12"
};
const _hoisted_18 = {
  key: 2,
  class: "flex-start font-14"
};
const _hoisted_19 = {
  style: {
    "display": "flex",
    "align-items": "center",
    "margin-top": "0.06rem"
  }
};
const _hoisted_20 = ["href"];
const _hoisted_21 = {
  class: "iconfont icon-copy-o"
};
const _hoisted_22 = {
  class: "grid-container"
};
const _hoisted_23 = {
  class: "grid-item"
};
const _hoisted_24 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "icon-left",
  src: _assets_images_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_25 = {
  class: "value"
};
const _hoisted_26 = {
  class: "label"
};
const _hoisted_27 = {
  class: "grid-item"
};
const _hoisted_28 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "icon-left",
  src: _assets_images_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_29 = {
  class: "value"
};
const _hoisted_30 = {
  class: "label"
};
const _hoisted_31 = {
  class: "grid-item"
};
const _hoisted_32 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "icon-left",
  src: _assets_images_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_33 = {
  class: "value"
};
const _hoisted_34 = {
  class: "label"
};
const _hoisted_35 = {
  class: "grid-item"
};
const _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "icon-left",
  src: _assets_images_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "",
  srcset: ""
}, null, -1 /* HOISTED */));
const _hoisted_37 = {
  class: "font-12"
};
const _hoisted_38 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("+");
const _hoisted_39 = {
  class: "label"
};
const _hoisted_40 = {
  class: "tabs-container"
};
const _hoisted_41 = {
  class: "tabs"
};
const _hoisted_42 = ["id", "value"];
const _hoisted_43 = ["for"];
const _hoisted_44 = {
  class: "section-tx"
};
const _hoisted_45 = {
  class: "title"
};
const _hoisted_46 = {
  style: {
    "padding": "0 0.1rem 1rem 0.1rem"
  }
};
const _hoisted_47 = {
  class: "card-item up"
};
const _hoisted_48 = {
  class: "card-item down"
};
const _hoisted_49 = {
  class: "txs-table"
};
const _hoisted_50 = ["onClick"];
const _hoisted_51 = {
  class: "card-item up"
};
const _hoisted_52 = {
  class: "card-item down"
};
const _hoisted_53 = ["onClick"];
const _hoisted_54 = {
  class: "icon-svg icon-left",
  "aria-hidden": "true"
};
const _hoisted_55 = ["xlink:href"];
const _hoisted_56 = {
  class: "content"
};
const _hoisted_57 = {
  class: "content_top"
};
const _hoisted_58 = {
  class: "content_bottom"
};
const _hoisted_59 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
  style: {
    "flex": "1"
  }
}, null, -1 /* HOISTED */));
const _hoisted_60 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("+");
const _hoisted_61 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("-");
const _hoisted_62 = {
  key: 0,
  style: {
    "color": "#ff646d",
    "font-size": "12px"
  }
};
const _hoisted_63 = {
  style: {
    "padding": "0 0.1rem 1rem 0.1rem"
  }
};
const _hoisted_64 = {
  class: "card-item up"
};
const _hoisted_65 = {
  class: "card-item down"
};
const _hoisted_66 = {
  class: "txs-table"
};
const _hoisted_67 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_68 = ["onClick"];
const _hoisted_69 = {
  style: {
    "line-height": "1.3"
  }
};
const _hoisted_70 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_71 = {
  style: {
    "color": "#999999"
  }
};
const _hoisted_72 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_73 = {
  class: "table-center"
};
const _hoisted_74 = {
  class: "font-14",
  style: {
    "color": "#1E2329"
  }
};
const _hoisted_75 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("br", null, null, -1 /* HOISTED */));
const _hoisted_76 = {
  class: "amm-box"
};
const _hoisted_77 = {
  key: 0,
  class: "viewWallet"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ref, _ref$replace, _$options$newTags, _$options$newTags2, _$options$newTags3, _ref2, _ref2$replace, _$options$stats, _$options$stats2, _$options$stats3, _$options$stats4, _$data$userTransfer, _$data$userTransfer2, _$data$userTransfer3, _$data$userTransfer4, _$data$userTransfer5;
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-nav-bar");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-image");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-icon");
  const _component_UserRemark = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("UserRemark");
  const _component_van_popover = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-popover");
  const _component_Chip = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("Chip");
  const _component_Flow = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("Flow");
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-tabs");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-empty");
  const _directive_copy = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveDirective"])("copy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: $options.symbol + _ctx.$t('whaleTracking')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 222 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_image, {
    round: "",
    width: "0.76rem",
    height: "0.76rem",
    "icon-size": "0.76rem",
    "lazy-load": "",
    "show-loading": "",
    src: _ctx.$f.formatIcon({
      logo_url: $options.tokenInfo.logo_url,
      symbol: $options.symbol
    }, '#3B436D'),
    "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
  }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
    class: "icon-svg icon-network",
    src: `${_ctx.$store.state.s3BaseUrl}chain/${$options.chain}.png`,
    alt: "",
    srcset: ""
  }, null, 8 /* PROPS */, _hoisted_6)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    class: "block font-14",
    onClick: _cache[1] || (_cache[1] = (...args) => $options.jumpToken && $options.jumpToken(...args))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.symbol) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
    name: "arrow"
  })]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    class: "address font-12",
    href: _ctx.$f.formatExplorerUrl($options.chain || '', $options.tokenAddress),
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_ref = $options.tokenAddress || '') === null || _ref === void 0 || (_ref$replace = _ref.replace) === null || _ref$replace === void 0 ? void 0 : _ref$replace.call(_ref, new RegExp('(^.{2})(.+)(.{4}$)'), '$1...$3')), 9 /* TEXT, PROPS */, _hoisted_8), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <span class=\"address\">{{ (tokenAddress || '')?.replace?.(new RegExp('(^.{2})(.+)(.{4}$)'), '$1...$3') }}</span> "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_9, null, 512 /* NEED_PATCH */), [[_directive_copy, $options.tokenAddress, $options.danger]])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_11, [$options.walletLogoUrl ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_image, {
    key: 0,
    round: "",
    width: "0.76rem",
    height: "0.76rem",
    "icon-size": "0.76rem",
    "lazy-load": "",
    "show-loading": "",
    src: $options.walletLogoUrl,
    "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
  }, null, 8 /* PROPS */, ["src", "error-icon"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_icon, {
    key: 1,
    name: "manager",
    size: "18",
    color: "#626a94",
    style: {
      "background": "#3c446c",
      "border-radius": "100%",
      "padding": "10px"
    }
  }))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <span v-if=\"wallet_tag?.length > 0\" class=\"block font-14\">\n              <van-popover trigger=\"manual\" v-model:show=\"showPopover\" theme=\"dark\" class=\"pop-3B436D\" v-if=\"wallet_tag?.length > 0\" placement=\"left-start\">\n                <div class=\"pop-content\">\n                  <span class=\"mr-3\">\n                    {{  wallet_tag }}\n                  </span>\n                </div>\n                <template #reference v-if=\"wallet_tag?.length > 0\">\n                  <div @click.stop=\"showPopover = !showPopover\">\n                    <div class=\"ellipsis\">\n                      <span class=\"mr-3\">\n                        {{  wallet_tag }}\n                      </span>\n                    </div>\n                  </div>\n                </template>\n              </van-popover>\n            </span> "), $options.remark ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_13, [$options.remark ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.remark), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_UserRemark, {
    defaultRemark: $options.remark,
    remark: $data.editRemark,
    "onUpdate:remark": [_cache[2] || (_cache[2] = $event => $data.editRemark = $event), $options.updateRemark],
    user_address: $options.addressOmit
  }, null, 8 /* PROPS */, ["defaultRemark", "remark", "user_address", "onUpdate:remark"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), ((_$options$newTags = $options.newTags) === null || _$options$newTags === void 0 ? void 0 : _$options$newTags.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_popover, {
    key: 1,
    trigger: "manual",
    show: $data.showPopover,
    "onUpdate:show": _cache[4] || (_cache[4] = $event => $data.showPopover = $event),
    theme: "dark",
    class: "pop-3B436D",
    placement: "left"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createSlots"])({
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_15, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.newTags, (i, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: index
      }, [Number(i.type) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", {
        key: 0,
        class: "mr-3",
        style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
          color: i === null || i === void 0 ? void 0 : i.color
        })
      }, " [" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(i === null || i === void 0 ? void 0 : i[_ctx.$f.filterLanguage(_ctx.$store.getters.language)]) + "] ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))])]),
    _: 2 /* DYNAMIC */
  }, [((_$options$newTags2 = $options.newTags) === null || _$options$newTags2 === void 0 ? void 0 : _$options$newTags2.length) > 0 ? {
    name: "reference",
    fn: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
      onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $data.showPopover = !$data.showPopover, ["stop"])),
      style: {
        "display": "flex",
        "align-items": "center"
      }
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.newTags, (i, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: index
      }, [Number(i.type) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 0,
        class: "ml-3",
        src: _ctx.$f.formatNewTags(i.icon),
        alt: "",
        height: "15"
      }, null, 8 /* PROPS */, _hoisted_16)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
    }), 128 /* KEYED_FRAGMENT */))])])
  } : undefined]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["show"])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])) : ((_$options$newTags3 = $options.newTags) === null || _$options$newTags3 === void 0 ? void 0 : _$options$newTags3.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_17, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.newTags, (item, index) => {
    var _item$type, _item$type2;
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: index
    }, [(_item$type = item.type) !== null && _item$type !== void 0 && _item$type.includes('TOP') && ((_item$type2 = item.type) === null || _item$type2 === void 0 ? void 0 : _item$type2.slice(3)) < 100 || Number(item.type) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", {
      key: 0,
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: item === null || item === void 0 ? void 0 : item.color
      })
    }, "[" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item === null || item === void 0 ? void 0 : item[_ctx.$f.filterLanguage(_ctx.$store.getters.language)]) + "] ", 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_UserRemark, {
    defaultRemark: $options.remark,
    remark: $data.editRemark,
    "onUpdate:remark": [_cache[5] || (_cache[5] = $event => $data.editRemark = $event), $options.updateRemark],
    user_address: $options.addressOmit
  }, null, 8 /* PROPS */, ["defaultRemark", "remark", "user_address", "onUpdate:remark"])])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.remark || _ctx.$t('holder3')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_UserRemark, {
    defaultRemark: $options.remark,
    remark: $data.editRemark,
    "onUpdate:remark": [_cache[6] || (_cache[6] = $event => $data.editRemark = $event), $options.updateRemark],
    user_address: $options.addressOmit
  }, null, 8 /* PROPS */, ["defaultRemark", "remark", "user_address", "onUpdate:remark"])])), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    class: "address font-12",
    href: _ctx.$f.formatExplorerUrl($options.chain || '', $options.addressOmit, 'address'),
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((_ref2 = $options.addressOmit || '') === null || _ref2 === void 0 || (_ref2$replace = _ref2.replace) === null || _ref2$replace === void 0 ? void 0 : _ref2$replace.call(_ref2, new RegExp('(^.{2})(.+)(.{4}$)'), '$1...$3')), 9 /* TEXT, PROPS */, _hoisted_20), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_21, null, 512 /* NEED_PATCH */), [[_directive_copy, _ctx.$route.params.address]])])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_22, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_23, [_hoisted_24, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.amountCur, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('currentPosition')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_27, [_hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_29, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.volumeCur, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('positionVolume')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_31, [_hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_33, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.avgBuyPrice)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_34, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('buyCost')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", _hoisted_35, [_hoisted_36, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "value",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      color: $options.profit >= 0 ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.profit >= 0 ? '$' + _ctx.$f.formatNumberS($options.profit || 0, 2) : '-$' + _ctx.$f.formatNumberS(Math.abs($options.profit || 0), 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_37, [$options.profitChange > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [_hoisted_38], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatPercent($options.profitChange)), 1 /* TEXT */)])], 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_39, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('profit2')), 1 /* TEXT */)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_40, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_41, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.tabs, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
      key: index,
      class: "tab-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("input", {
      type: "radio",
      id: `tab-item-${item.id}`,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.tabActive = $event),
      value: item.id,
      class: "tab-radio-input"
    }, null, 8 /* PROPS */, _hoisted_42), [[vue__WEBPACK_IMPORTED_MODULE_1__["vModelRadio"], $data.tabActive]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("label", {
      for: `tab-item-${item.id}`,
      class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(`tab-item-label ${item.id}`)
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_43)]);
  }), 128 /* KEYED_FRAGMENT */))])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_Chip, {
    dataList: $data.chipList,
    loading: $data.loadingChip
  }, null, 8 /* PROPS */, ["dataList", "loading"]), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.tabActive === 'chip']]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_Flow, {
    ref: "flow",
    dataList: $data.flowList,
    loading: $data.loadingFlow,
    onTabChange: $options.getNetInFlow
  }, null, 8 /* PROPS */, ["dataList", "loading", "onTabChange"]), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.tabActive === 'flow']]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_44, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_45, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tabs, {
    active: $data.tabActive1,
    "onUpdate:active": _cache[8] || (_cache[8] = $event => $data.tabActive1 = $event),
    shrink: "",
    color: "#3F80F7",
    style: {
      "--van-tabs-nav-background-color": "#fff"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tab, {
      name: "transfer",
      title: _ctx.$t('transfer')
    }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tab, {
      name: "tx",
      title: _ctx.$t('swap1')
    }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_tab, {
      name: "liquidity",
      title: _ctx.$t('liquidity1')
    }, null, 8 /* PROPS */, ["title"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_46, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "card-container",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      '--upColor': _ctx.$store.getters.upColor[3],
      '--downColor': _ctx.$store.getters.downColor[3],
      '--upBgColor': _ctx.$store.state.typeUpDown === '0' ? '#ddf0e7' : '#fbe2e3',
      '--downBgColor': _ctx.$store.state.typeUpDown === '1' ? '#ddf0e7' : '#fbe2e3'
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_47, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('totalBuy')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('buy2')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$options$stats = $options.stats) === null || _$options$stats === void 0 ? void 0 : _$options$stats.buy_amount_cur) || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$options$stats2 = $options.stats) === null || _$options$stats2 === void 0 ? void 0 : _$options$stats2.buy_volume_cur) || 0, 2)), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_48, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('totalSell')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('sell2')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$options$stats3 = $options.stats) === null || _$options$stats3 === void 0 ? void 0 : _$options$stats3.sell_amount_cur) || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$options$stats4 = $options.stats) === null || _$options$stats4 === void 0 ? void 0 : _$options$stats4.sell_volume_cur) || 0, 2)), 1 /* TEXT */)])])], 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_49, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('time')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('swapPrice')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amountB')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amountU')) + "($)", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('txId')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.txs, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.goTxLink(item), ["stop"]),
      class: "tx-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatDate(item.time, 'MM-DD')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: $options.isBuy(item) ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.getPrice(item))), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.getAmount(item))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: $options.isBuy(item) ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2($options.getAmountUSD(item))), 5 /* TEXT, STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.transaction.slice(0, 2) + '...' + item.transaction.slice(-4)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_50);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $options.txs && $options.txs.length === 0]])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.tabActive1 === 'tx']]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "card-container",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      '--upColor': _ctx.$store.getters.upColor[3],
      '--downColor': _ctx.$store.getters.downColor[3],
      '--upBgColor': _ctx.$store.state.typeUpDown === '0' ? '#ddf0e7' : '#fbe2e3',
      '--downBgColor': _ctx.$store.state.typeUpDown === '1' ? '#ddf0e7' : '#fbe2e3'
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_51, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('transferIn')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('inVolume')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$userTransfer = $data.userTransfer) === null || _$data$userTransfer === void 0 || (_$data$userTransfer = _$data$userTransfer.stats) === null || _$data$userTransfer === void 0 ? void 0 : _$data$userTransfer.transfer_in_amount_cur) || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$userTransfer2 = $data.userTransfer) === null || _$data$userTransfer2 === void 0 || (_$data$userTransfer2 = _$data$userTransfer2.stats) === null || _$data$userTransfer2 === void 0 ? void 0 : _$data$userTransfer2.transfer_in_volume_cur) || 0, 2)), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_52, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('transferOut')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('outVolume')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$userTransfer3 = $data.userTransfer) === null || _$data$userTransfer3 === void 0 || (_$data$userTransfer3 = _$data$userTransfer3.stats) === null || _$data$userTransfer3 === void 0 ? void 0 : _$data$userTransfer3.transfer_out_amount_cur) || 0, 2)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$userTransfer4 = $data.userTransfer) === null || _$data$userTransfer4 === void 0 || (_$data$userTransfer4 = _$data$userTransfer4.stats) === null || _$data$userTransfer4 === void 0 ? void 0 : _$data$userTransfer4.transfer_out_volume_cur) || 0, 2)), 1 /* TEXT */)])])], 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", {
    class: "transfer-ul",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      '--upColor': _ctx.$store.getters.upColor[3],
      '--downColor': _ctx.$store.getters.downColor[3],
      '--upBgColor': _ctx.$store.state.typeUpDown === '0' ? '#ddf0e7' : '#fbe2e3',
      '--downBgColor': _ctx.$store.state.typeUpDown === '1' ? '#ddf0e7' : '#fbe2e3'
    })
  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])(((_$data$userTransfer5 = $data.userTransfer) === null || _$data$userTransfer5 === void 0 ? void 0 : _$data$userTransfer5.transfers) || [], (item, index) => {
    var _$options$transferFro, _$options$transferFro2, _$options$transferFro3, _$options$transferFro4;
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
      key: index,
      class: "transfer-li-item",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.goTxLink(item), ["stop"])
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("svg", _hoisted_54, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("use", {
      "xlink:href": $options.transferIcon(item)
    }, null, 8 /* PROPS */, _hoisted_55)])), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_56, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_57, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(((_$options$transferFro = $options.transferFromAddress(item)) === null || _$options$transferFro === void 0 || (_$options$transferFro2 = _$options$transferFro.slice) === null || _$options$transferFro2 === void 0 ? void 0 : _$options$transferFro2.call(_$options$transferFro, 0, 6)) + '...' + ((_$options$transferFro3 = $options.transferFromAddress) === null || _$options$transferFro3 === void 0 || (_$options$transferFro3 = _$options$transferFro3.call($options, item)) === null || _$options$transferFro3 === void 0 || (_$options$transferFro4 = _$options$transferFro3.slice) === null || _$options$transferFro4 === void 0 ? void 0 : _$options$transferFro4.call(_$options$transferFro3, -4))), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", {
      class: "iconfont icon-copy-o",
      onClick: _cache[9] || (_cache[9] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])(() => {}, ["stop"]))
    }, null, 512 /* NEED_PATCH */), [[_directive_copy, $options.transferFromAddress(item)]])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_58, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatDate(item.time)), 1 /* TEXT */)]), _hoisted_59, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
      class: "amount flex-end",
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: $options.isTransferIn(item) ? 'var(--upColor)' : 'var(--downColor)'
      })
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, [$options.isTransferIn(item) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 0
    }, [_hoisted_60], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 1
    }, [_hoisted_61], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.status == 0 ? 0 : _ctx.$f.formatNumber2(item.amount)) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])((item === null || item === void 0 ? void 0 : item.token_symbol) || ''), 1 /* TEXT */)]), item.status == 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_62, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('transferFailed')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 4 /* STYLE */)], 8 /* PROPS */, _hoisted_53);
  }), 128 /* KEYED_FRAGMENT */))], 4 /* STYLE */)], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.tabActive1 === 'transfer']]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_63, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "card-container",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      '--upColor': _ctx.$store.getters.upColor[3],
      '--downColor': _ctx.$store.getters.downColor[3],
      '--upBgColor': _ctx.$store.state.typeUpDown === '0' ? '#ddf0e7' : '#fbe2e3',
      '--downBgColor': _ctx.$store.state.typeUpDown === '1' ? '#ddf0e7' : '#fbe2e3'
    })
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_64, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('add1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('value1')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.add_amount_cur > 0 ? _ctx.$f.formatNumber2($data.add_amount_cur || 0, 2) : '--'), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.add_volume_cur > 0 ? '$' + _ctx.$f.formatNumber2($data.add_volume_cur || 0, 2) : '--'), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_65, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('remove2')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('value1')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.remove_volume_cur > 0 ? _ctx.$f.formatNumber2($data.remove_amount_cur || 0, 2) : '--'), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.remove_volume_cur > 0 ? '$' + _ctx.$f.formatNumber2($data.remove_volume_cur || 0, 2) : '--'), 1 /* TEXT */)])])], 4 /* STYLE */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_66, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('type')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", _hoisted_67, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('amount')) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('token1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("th", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('value')) + "/AMM", 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($data.userLiq, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("tr", {
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.goTxLink(item), ["stop"]),
      class: "tx-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_69, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
      style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
        color: item.type === 'addLiquidity' ? _ctx.$store.getters.upColor[3] : _ctx.$store.getters.downColor[3]
      }),
      class: "font-14"
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.type === 'addLiquidity' ? _ctx.$t('add') : _ctx.$t('remove1')), 5 /* TEXT, STYLE */), _hoisted_70, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_71, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatDate(item.time, 'MM-DD HH-mm')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", _hoisted_72, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("table", _hoisted_73, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.type === 'addLiquidity' ? '+' : '-') + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.amount0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.token0_symbol), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("tr", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.type === 'addLiquidity' ? '+' : '-') + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.amount1)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.token1_symbol), 1 /* TEXT */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("td", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_74, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatNumber2(item.amount0 * item.token0_price_usd + item.amount1 * item.token1_price_usd)), 1 /* TEXT */), _hoisted_75, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_76, [item.amm && item.amm !== 'unknown' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_image, {
      key: 0,
      class: "icon-logo",
      "lazy-load": "",
      "show-loading": "",
      round: "",
      src: `${_ctx.$store.state.s3BaseUrl}swap/${item.amm}.jpeg`,
      "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
    }, null, 8 /* PROPS */, ["src", "error-icon"])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.show_name || item.amm), 1 /* TEXT */)])])], 8 /* PROPS */, _hoisted_68);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('empty')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.userLiq && $data.userLiq.length === 0]])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.tabActive1 === 'liquidity']])]), $options.SupportFullDataChain.includes($options.chain) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_77, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("a", {
    href: "",
    onClick: _cache[10] || (_cache[10] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])((...args) => $options.jumpWhaleTrackingUser && $options.jumpWhaleTrackingUser(...args), ["stop", "prevent"])),
    target: "_blank"
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('viewWallet')), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-remark[data-v-744217bb] {\n  --van-dialog-background-color: #fff;\n  --van-cell-text-color: #959A9F;\n  --van-button-border-radius: 0.16rem;\n  --van-button-default-color: #959A9F;\n  --van-button-default-border-color: #F8F8F8;\n}\n.icon-_26-Education[data-v-744217bb] {\n  color: #878FBC;\n}\n.remark-dialog[data-v-744217bb] {\n  padding: 0.4rem;\n  padding-bottom: 0.48rem;\n  --van-cell-background-color: #F8F8F8;\n}\n.remark-dialog .remark[data-v-744217bb] {\n  margin-bottom: 0.36rem;\n  font-weight: 500;\n  font-size: 0.36rem;\n  line-height: 0.44rem;\n  text-align: center;\n  color: #333;\n}\n.remark-btn[data-v-744217bb] {\n  display: flex;\n  gap: 0.24rem;\n  padding: 0.4rem;\n  padding-top: 0;\n}\n.remark-btn[data-v-744217bb] .van-button {\n  flex: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chart-container[data-v-34d19200] {\n  margin: 0;\n  background: #fff;\n  padding-bottom: 0.2rem;\n}\n.chart-title[data-v-34d19200] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n}\n.chart-title .dot[data-v-34d19200] {\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n}\n.chart-title .dot.color-558BED[data-v-34d19200] {\n  background-color: #558bed;\n}\n.chart-title .dot.color-7673F3[data-v-34d19200] {\n  background-color: #7673f3;\n}\n.chart-title .amount[data-v-34d19200] {\n  font-size: 0.28rem;\n  color: #ffffff;\n  margin-left: 0.16rem;\n}\n.chart-title .label[data-v-34d19200] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  margin-left: 0.26rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flow-container[data-v-4aadbde2] {\n  background-color: #fff;\n  padding-bottom: 0.2rem;\n}\n.tabs[data-v-4aadbde2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.28rem;\n  margin-bottom: 0.3rem;\n}\n.tabs .tab-item[data-v-4aadbde2] {\n  display: flex;\n  padding: 0.02rem 0;\n}\n.tabs .tab-radio-input[data-v-4aadbde2] {\n  width: 0;\n  height: 0;\n  font-size: 0;\n  opacity: 0;\n}\n.tabs .tab-radio-input:checked + .tab-item-label[data-v-4aadbde2] {\n  color: #677ff4;\n}\n.tabs .tab-item-label[data-v-4aadbde2] {\n  background: #f7f8fa;\n  border-radius: 0.32rem;\n  font-size: 0.24rem;\n  color: #999;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.1rem 0.16rem;\n}\n.chart-container[data-v-4aadbde2] {\n  margin: 0;\n}\n.chart-title[data-v-4aadbde2] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n}\n.chart-title .dot[data-v-4aadbde2] {\n  width: 0.16rem;\n  height: 0.16rem;\n  border-radius: 50%;\n}\n.chart-title .dot.color-558BED[data-v-4aadbde2] {\n  background-color: #558bed;\n}\n.chart-title .dot.color-7673F3[data-v-4aadbde2] {\n  background-color: #7673f3;\n}\n.chart-title .amount[data-v-4aadbde2] {\n  font-size: 0.28rem;\n  color: #ffffff;\n  margin-left: 0.16rem;\n}\n.chart-title .label[data-v-4aadbde2] {\n  font-size: 0.24rem;\n  color: #878fbc;\n  margin-left: 0.26rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".whale-container[data-v-996b0154] {\n  background: #F5F6FA;\n  --van-border-color: rgba(135, 143, 188, 0.30);\n  overflow: hidden;\n}\n.icon-chain[data-v-996b0154] {\n  width: 0.4rem;\n  border-radius: 50%;\n  margin-right: 0.12rem;\n}\n.section-1[data-v-996b0154] {\n  background: #2C3254;\n  padding: 0.4rem 0.24rem;\n}\n.section-1 .top[data-v-996b0154] {\n  display: flex;\n  align-items: center;\n  font-size: 0.3rem;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: 400;\n  margin-bottom: 0.3rem;\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.1);\n  padding-bottom: 0.3rem;\n}\n.section-1 .top .item[data-v-996b0154] {\n  display: flex;\n  justify-content: flex-start;\n  text-align: left;\n  width: 50%;\n}\n.section-1 .top .item .icon-token-container .icon-network[data-v-996b0154] {\n  bottom: 0.06rem;\n}\n.section-1 .top .item .item-info1[data-v-996b0154] {\n  height: 0.76rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.section-1 .top .item a[data-v-996b0154] {\n  color: #fff;\n}\n.section-1 .top .item .icon-wode[data-v-996b0154] {\n  font-size: 0.6rem;\n  background: #3c446c;\n  border-radius: 100%;\n  color: #626a94;\n}\n.section-1 .top .item .icon-copy-o[data-v-996b0154] {\n  margin-left: 0.06rem;\n}\n.icon-copy-o[data-v-996b0154] {\n  color: #878FBC;\n}\n.icon-copy-o[data-v-996b0154]:active {\n  opacity: 0.5;\n}\n.grid-container[data-v-996b0154] {\n  font-size: 0.3rem;\n  color: #FFFFFF;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.grid-item[data-v-996b0154] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\n.grid-item .label[data-v-996b0154] {\n  font-size: 0.24rem;\n  color: #878FBC;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin-top: 0.04rem;\n}\n.grid-item .value[data-v-996b0154] {\n  font-size: 0.3rem;\n  color: #FFFFFF;\n  font-weight: 400;\n}\n.grid-item .value .font-12[data-v-996b0154] {\n  font-size: 0.24rem;\n  margin-left: 0.1rem;\n}\n.grid-item[data-v-996b0154]:nth-child(1), .grid-item[data-v-996b0154]:nth-child(2) {\n  margin-bottom: 0.3rem;\n}\n.icon-left[data-v-996b0154] {\n  margin-right: 0.16rem;\n  width: 0.72rem;\n  height: 0.72rem;\n  border-radius: 50%;\n}\n.tabs[data-v-996b0154] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #F7F8FA;\n  border-radius: 0.32rem;\n}\n.tabs .tab-item[data-v-996b0154] {\n  display: flex;\n  padding: 0.02rem 0;\n}\n.tabs .tab-radio-input[data-v-996b0154] {\n  width: 0;\n  height: 0;\n  font-size: 0;\n  opacity: 0;\n}\n.tabs .tab-radio-input:checked + .tab-item-label[data-v-996b0154] {\n  background: #558BED;\n  color: #fff;\n}\n.tabs .tab-item-label[data-v-996b0154] {\n  border-radius: 0.32rem;\n  min-width: 2rem;\n  padding: 0.16rem 0.2rem;\n  text-align: center;\n  font-size: 0.28rem;\n  border-radius: 16px;\n  color: #323233;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.tabs-container[data-v-996b0154] {\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.24rem;\n}\n.section-tx[data-v-996b0154] {\n  font-size: 0.28rem;\n  color: #000000;\n  letter-spacing: 0;\n  font-weight: 400;\n  background: #FFFFFF;\n  margin-top: 0.2rem;\n}\n.section-tx .title[data-v-996b0154] {\n  border-bottom: 0.02rem solid #EBEDF0;\n}\n.card-container[data-v-996b0154] {\n  padding: 0.2rem 0.2rem;\n  display: flex;\n  justify-content: space-between;\n}\n.card-container .card-item[data-v-996b0154] {\n  font-size: 0.24rem;\n  width: calc(50% - 0.08rem);\n  border-radius: 0.08rem;\n}\n.card-container .card-item.up[data-v-996b0154] {\n  background: var(--upBgColor);\n}\n.card-container .card-item.up td[data-v-996b0154] {\n  color: var(--upColor);\n}\n.card-container .card-item.down[data-v-996b0154] {\n  background: var(--downBgColor);\n}\n.card-container .card-item.down td[data-v-996b0154] {\n  color: var(--downColor);\n}\n.card-container .card-item th[data-v-996b0154] {\n  font-size: 0.24rem;\n  color: #999999;\n  font-weight: 400;\n  padding: 0.1rem 0 0.04rem 0;\n}\n.card-container .card-item td[data-v-996b0154] {\n  text-align: center;\n  padding: 0 0 0.1rem 0;\n  font-size: 0.24rem;\n  font-weight: 400;\n}\n.txs-table[data-v-996b0154] {\n  width: 100%;\n  padding-bottom: 1rem;\n}\n.txs-table th[data-v-996b0154] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.08rem;\n}\n.txs-table td[data-v-996b0154] {\n  font-size: 0.24rem;\n  color: #333333;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.08rem;\n}\n.txs-table th[data-v-996b0154], .txs-table td[data-v-996b0154] {\n  text-align: left;\n}\n.txs-table th[data-v-996b0154]:last-child, .txs-table td[data-v-996b0154]:last-child {\n  text-align: right;\n}\n.txs-table tr[data-v-996b0154]:active {\n  opacity: 0.5;\n}\n.transfer-ul[data-v-996b0154] {\n  padding-bottom: 2rem;\n}\n.transfer-li-item[data-v-996b0154] {\n  display: flex;\n  align-items: center;\n  padding: 0.24rem 0.24rem;\n}\n.transfer-li-item + .transfer-li-item[data-v-996b0154] {\n  border-top: 0.01rem solid #EBEDF0;\n}\n.transfer-li-item[data-v-996b0154]:active {\n  opacity: 0.5;\n}\n.transfer-li-item .icon-left[data-v-996b0154] {\n  font-size: 0.6rem;\n}\n.transfer-li-item .content .content_top[data-v-996b0154] {\n  font-size: 0.28rem;\n  color: #1E2329;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.transfer-li-item .content .content_top .icon-copy-o[data-v-996b0154] {\n  color: #999999;\n  margin-left: 0.2rem;\n}\n.transfer-li-item .content .content_bottom[data-v-996b0154] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n  margin-top: 0.04rem;\n}\n.transfer-li-item .amount[data-v-996b0154] {\n  font-size: 0.28rem;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.table-center[data-v-996b0154] {\n  width: 100%;\n}\n.table-center td[data-v-996b0154] {\n  margin: 0;\n  padding: 0;\n  font-size: 0.28rem;\n}\n.table-center td[data-v-996b0154]:first-child {\n  text-align: right;\n  color: #1E2329;\n}\n.table-center td[data-v-996b0154]:last-child {\n  text-align: left;\n  color: #999999;\n}\n.amm-box[data-v-996b0154] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.icon-logo[data-v-996b0154] {\n  width: 0.24rem;\n  height: 0.24rem;\n  margin-right: 0.1rem;\n}\n.flex-end[data-v-996b0154] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.ellipsis[data-v-996b0154] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 2.4rem;\n}\n.viewWallet[data-v-996b0154] {\n  font-size: 0.28rem;\n  text-align: center;\n  background: #fff;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  padding: 0.4rem;\n}\n.viewWallet a[data-v-996b0154] {\n  background: #3F80F7;\n  border-radius: 0.08rem;\n  color: #fff;\n  padding: 0.2rem 0.48rem;\n  font-size: 0.28rem;\n  text-decoration: none;\n  display: block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("74ec005e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fae665d0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("72431964", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("78da09d9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/平均成本.svg":
/*!************************************!*\
  !*** ./src/assets/images/平均成本.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/平均成本.f88c135c.svg";

/***/ }),

/***/ "./src/assets/images/当前持仓.svg":
/*!************************************!*\
  !*** ./src/assets/images/当前持仓.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/当前持仓.f64f0105.svg";

/***/ }),

/***/ "./src/assets/images/持仓金额.svg":
/*!************************************!*\
  !*** ./src/assets/images/持仓金额.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/持仓金额.6dca0cfc.svg";

/***/ }),

/***/ "./src/assets/images/盈亏情况.svg":
/*!************************************!*\
  !*** ./src/assets/images/盈亏情况.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/盈亏情况.db853751.svg";

/***/ }),

/***/ "./src/components/userRemark.vue":
/*!***************************************!*\
  !*** ./src/components/userRemark.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userRemark_vue_vue_type_template_id_744217bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userRemark.vue?vue&type=template&id=744217bb&scoped=true */ "./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true");
/* harmony import */ var _userRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRemark.vue?vue&type=script&lang=js */ "./src/components/userRemark.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss */ "./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_userRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_userRemark_vue_vue_type_template_id_744217bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-744217bb"],['__file',"src/components/userRemark.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/userRemark.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/userRemark.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./userRemark.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=style&index=0&id=744217bb&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_style_index_0_id_744217bb_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_template_id_744217bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./userRemark.vue?vue&type=template&id=744217bb&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/userRemark.vue?vue&type=template&id=744217bb&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_userRemark_vue_vue_type_template_id_744217bb_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/whale/charts/chip.vue":
/*!**********************************************!*\
  !*** ./src/components/whale/charts/chip.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chip_vue_vue_type_template_id_34d19200_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip.vue?vue&type=template&id=34d19200&scoped=true */ "./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true");
/* harmony import */ var _chip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chip.vue?vue&type=script&lang=js */ "./src/components/whale/charts/chip.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss */ "./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_chip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chip_vue_vue_type_template_id_34d19200_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-34d19200"],['__file',"src/components/whale/charts/chip.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/whale/charts/chip.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/whale/charts/chip.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./chip.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=style&index=0&id=34d19200&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_style_index_0_id_34d19200_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_template_id_34d19200_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./chip.vue?vue&type=template&id=34d19200&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/chip.vue?vue&type=template&id=34d19200&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chip_vue_vue_type_template_id_34d19200_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/whale/charts/flow.vue":
/*!**********************************************!*\
  !*** ./src/components/whale/charts/flow.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flow_vue_vue_type_template_id_4aadbde2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow.vue?vue&type=template&id=4aadbde2&scoped=true */ "./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true");
/* harmony import */ var _flow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flow.vue?vue&type=script&lang=js */ "./src/components/whale/charts/flow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss */ "./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_flow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_flow_vue_vue_type_template_id_4aadbde2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-4aadbde2"],['__file',"src/components/whale/charts/flow.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/whale/charts/flow.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/whale/charts/flow.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./flow.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=style&index=0&id=4aadbde2&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_style_index_0_id_4aadbde2_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_template_id_4aadbde2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader-v16/dist??ref--1-1!./flow.vue?vue&type=template&id=4aadbde2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/whale/charts/flow.vue?vue&type=template&id=4aadbde2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_flow_vue_vue_type_template_id_4aadbde2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/whaleTracking.vue":
/*!*************************************!*\
  !*** ./src/views/whaleTracking.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _whaleTracking_vue_vue_type_template_id_996b0154_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whaleTracking.vue?vue&type=template&id=996b0154&scoped=true */ "./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true");
/* harmony import */ var _whaleTracking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whaleTracking.vue?vue&type=script&lang=js */ "./src/views/whaleTracking.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true */ "./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_whaleTracking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_whaleTracking_vue_vue_type_template_id_996b0154_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-996b0154"],['__file',"src/views/whaleTracking.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/whaleTracking.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/views/whaleTracking.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./whaleTracking.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=style&index=0&id=996b0154&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_style_index_0_id_996b0154_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_template_id_996b0154_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./whaleTracking.vue?vue&type=template&id=996b0154&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/whaleTracking.vue?vue&type=template&id=996b0154&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_whaleTracking_vue_vue_type_template_id_996b0154_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);