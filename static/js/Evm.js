(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Evm"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/evm.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _components_brc20_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/brc20/list */ "./src/components/brc20/list.vue");
/* harmony import */ var _components_brc20_mint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/brc20/mint */ "./src/components/brc20/mint.vue");







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Evm',
  data() {
    return {
      active: 'hot',
      conditions: {
        page: 1,
        page_size: 20,
        sort: '',
        sort_dir: ''
      },
      tableData: [],
      loadingHot: false,
      finishedHot: false,
      errorHot: false,
      total: 0,
      bannerList: [],
      statistics: {},
      mint: {
        page: 1,
        page_size: 20
      },
      total2: 0,
      tableDataMint: [],
      loadingMint: false,
      finishedMint: false,
      errorMint: false
    };
  },
  computed: {
    tabs() {
      return [{
        id: 'hot',
        title: this.$t('hots')
      }, {
        id: 'mint',
        title: this.$t('mint')
      }];
    }
  },
  components: {
    list: _components_brc20_list__WEBPACK_IMPORTED_MODULE_5__["default"],
    mint: _components_brc20_mint__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.conditions.page = 1;
      // this.getBrc20Banners()
      this.tableData = [];
      this.getBrc20();
      this.getBrc20Info();
    },
    switchTabs(item) {
      this.active = item.id;
      if (this.active == 'hot') {
        this.conditions = {
          page: 1,
          page_size: 20,
          sort: '',
          sort_dir: ''
        };
        this.getBrc20();
      }
      if (this.active == 'mint') {
        this.mint = {
          page: 1,
          page_size: 20
        };
        this.getBrc20MintList();
      }
    },
    getBrc20Banners() {
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getBrc20Banners"])({
        chain: 'bsc'
      }).then(res => {
        this.bannerList = res === null || res === void 0 ? void 0 : res.filter(i => i.picture_link !== '');
      }).catch(err => {
        console.log(err);
      });
    },
    getBrc20Info() {
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getBrc20Info"])({
        chain: 'bsc'
      }).then(res => {
        this.statistics = res;
      }).catch(err => {
        console.log(err);
      });
    },
    sortChange({
      sort,
      sort_dir
    }) {
      this.conditions.sort = sort;
      this.conditions.sort_dir = sort_dir;
      if (!sort_dir) {
        this.conditions.sort = '';
      }
      this.conditions.page = 1;
      this.getBrc20();
    },
    onload() {
      this.getBrc20();
    },
    getBrc20() {
      this.loadingHot = true;
      let data = {
        page: this.conditions.page,
        page_size: this.conditions.page_size,
        sort: this.conditions.sort,
        sort_dir: this.conditions.sort_dir,
        chain: 'bsc'
      };
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getBrc20"])(data).then(res => {
        var _res$data, _this$tableData, _res$data2;
        // console.log('---------getBrc20HotList---------', res)
        if (this.conditions.page == 1) {
          this.tableData = [];
        }
        this.total = res === null || res === void 0 ? void 0 : res.total;
        let list = res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.map(i => {
          var _i$symbol, _i$symbol2, _i$symbol3, _i$symbol4, _i$symbol5, _i$symbol6, _i$token;
          return {
            ...i,
            symbol: i !== null && i !== void 0 && (_i$symbol = i.symbol) !== null && _i$symbol !== void 0 && _i$symbol.includes('(') ? i === null || i === void 0 || (_i$symbol2 = i.symbol) === null || _i$symbol2 === void 0 || (_i$symbol2 = _i$symbol2.split('(')) === null || _i$symbol2 === void 0 ? void 0 : _i$symbol2[0] : i.symbol,
            protocol: i !== null && i !== void 0 && (_i$symbol3 = i.symbol) !== null && _i$symbol3 !== void 0 && _i$symbol3.includes('(') ? i === null || i === void 0 || (_i$symbol4 = i.symbol) === null || _i$symbol4 === void 0 ? void 0 : _i$symbol4.slice((i === null || i === void 0 || (_i$symbol5 = i.symbol) === null || _i$symbol5 === void 0 ? void 0 : _i$symbol5.indexOf('(')) + 1, i === null || i === void 0 || (_i$symbol6 = i.symbol) === null || _i$symbol6 === void 0 ? void 0 : _i$symbol6.indexOf(')')) : '',
            price_change_v2: i.chain == 'brc20' ? i === null || i === void 0 ? void 0 : i.price_change_v2 : i === null || i === void 0 ? void 0 : i.price_change,
            token: (_i$token = i.token) === null || _i$token === void 0 ? void 0 : _i$token.trim()
          };
        });
        this.tableData = (_this$tableData = this.tableData) === null || _this$tableData === void 0 ? void 0 : _this$tableData.concat(list);
        this.finishedHot = (res === null || res === void 0 || (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.length) < this.conditions.page_size;
        this.conditions.page++;
      }).catch(err => {
        this.errorHot = true;
        //   this.finishedHot = true
        console.log(err);
      }).finally(() => {
        this.loadingHot = false;
      });
    },
    getBrc20MintList() {
      this.loadingMint = true;
      let data = {
        ...this.mint,
        chain: 'brc20'
      };
      Object(_api__WEBPACK_IMPORTED_MODULE_4__["getBrc20MintList"])(data).then(res => {
        var _res$data3, _this$tableDataMint, _res$data4;
        // console.log('---------getBrc20MintList---------', res)
        if (this.mint.page == 1) {
          this.tableDataMint = [];
        }
        this.total2 = res === null || res === void 0 ? void 0 : res.total;
        let list = res === null || res === void 0 || (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.map(i => {
          var _i$symbol7, _i$symbol8, _i$symbol9, _i$symbol0, _i$symbol1, _i$symbol10, _i$token2;
          return {
            ...i,
            symbol: i !== null && i !== void 0 && (_i$symbol7 = i.symbol) !== null && _i$symbol7 !== void 0 && _i$symbol7.includes('(') ? i === null || i === void 0 || (_i$symbol8 = i.symbol) === null || _i$symbol8 === void 0 || (_i$symbol8 = _i$symbol8.split('(')) === null || _i$symbol8 === void 0 ? void 0 : _i$symbol8[0] : i.symbol,
            protocol: i !== null && i !== void 0 && (_i$symbol9 = i.symbol) !== null && _i$symbol9 !== void 0 && _i$symbol9.includes('(') ? i === null || i === void 0 || (_i$symbol0 = i.symbol) === null || _i$symbol0 === void 0 ? void 0 : _i$symbol0.slice((i === null || i === void 0 || (_i$symbol1 = i.symbol) === null || _i$symbol1 === void 0 ? void 0 : _i$symbol1.indexOf('(')) + 1, i === null || i === void 0 || (_i$symbol10 = i.symbol) === null || _i$symbol10 === void 0 ? void 0 : _i$symbol10.indexOf(')')) : '',
            confirmed_minted_rate: i.confirmed_minted_rate * 100 || 0,
            token: (_i$token2 = i.token) === null || _i$token2 === void 0 ? void 0 : _i$token2.trim(),
            mint_times_24h: Math.ceil((i === null || i === void 0 ? void 0 : i.mint_times_24h) || 0)
          };
        });
        this.tableDataMint = (_this$tableDataMint = this.tableDataMint) === null || _this$tableDataMint === void 0 ? void 0 : _this$tableDataMint.concat(list);
        this.finishedMint = (res === null || res === void 0 || (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.length) < this.mint.page_size;
        this.mint.page++;
      }).catch(err => {
        this.errorMint = true;
        this.finishedMint = true;
        console.log(err);
      }).finally(() => {
        this.loadingMint = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-05e2b9b2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "ad-tag"
};
const _hoisted_3 = ["href", "target"];
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 0,
  class: "ad-tag"
};
const _hoisted_6 = {
  class: "item"
};
const _hoisted_7 = {
  class: "item"
};
const _hoisted_8 = {
  class: "item"
};
const _hoisted_9 = {
  class: "tabs-container"
};
const _hoisted_10 = {
  class: "tabs-wrap"
};
const _hoisted_11 = {
  class: "tabs"
};
const _hoisted_12 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$route, _$data$bannerList;
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  const _component_van_swipe_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-item");
  const _component_van_swipe = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe");
  const _component_van_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-col");
  const _component_van_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-row");
  const _component_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("list");
  const _component_mint = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("mint");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    class: "brc20",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      'padding-top': ((_ctx$$route = _ctx.$route) === null || _ctx$$route === void 0 || (_ctx$$route = _ctx$$route.query) === null || _ctx$$route === void 0 ? void 0 : _ctx$$route.hiddenBar) == '1' ? '10px' : 0
    })
  }, [((_$data$bannerList = $data.bannerList) === null || _$data$bannerList === void 0 ? void 0 : _$data$bannerList.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe, {
    key: 0,
    class: "swiper-container",
    autoplay: 3000,
    "lazy-render": ""
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.bannerList, (item, index) => {
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
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
              class: "banner",
              style: {
                "width": "100%",
                "height": "calc(100vw * 114 / 375)"
              },
              src: item.picture_link
            }, null, 8 /* PROPS */, _hoisted_1), item.is_adv === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('ad')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("a", {
            key: 1,
            href: item.render_link || 'javascript:void(0);',
            target: item.render_link ? '_blank' : '_self',
            class: "swiper-link",
            rel: "noopener noreferrer"
          }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
            class: "banner",
            style: {
              "width": "100%",
              "height": "calc(100vw * 114 / 375)"
            },
            src: item.picture_link
          }, null, 8 /* PROPS */, _hoisted_4), item.is_adv === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('ad')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 8 /* PROPS */, _hoisted_3))];
        }),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_row, {
    class: "statistics",
    gutter: "10"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
      span: "8"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _$data$statistics;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$statistics = $data.statistics) === null || _$data$statistics === void 0 ? void 0 : _$data$statistics.volume_24h) || 0, 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('24Volume1')), 1 /* TEXT */)])];
      }),
      _: 1 /* STABLE */
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
      span: "8"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _$data$statistics2;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$statistics2 = $data.statistics) === null || _$data$statistics2 === void 0 ? void 0 : _$data$statistics2.new_tokens) || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('newTokens')), 1 /* TEXT */)])];
      }),
      _: 1 /* STABLE */
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
      span: "8"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
        var _$data$statistics3;
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2(((_$data$statistics3 = $data.statistics) === null || _$data$statistics3 === void 0 ? void 0 : _$data$statistics3.all_tokens) || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('allTokens')), 1 /* TEXT */)])];
      }),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.tabs, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("button", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["tabs-item clickable", {
        active: $data.active == item.id
      }]),
      key: index,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.switchTabs(item), ["stop"])
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.title), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_12);
  }), 128 /* KEYED_FRAGMENT */))])])]), $data.active === 'hot' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_list, {
    key: 1,
    tableList: $data.tableData,
    loading: $data.loadingHot,
    finished: $data.finishedHot,
    error: $data.errorHot,
    onOnload: $options.onload,
    onSortChange: $options.sortChange
  }, null, 8 /* PROPS */, ["tableList", "loading", "finished", "error", "onOnload", "onSortChange"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $data.active === 'mint' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_mint, {
    key: 2,
    type: "bsc20",
    tableList: $data.tableDataMint,
    loading: $data.loadingMint,
    finished: $data.finishedMint,
    error: $data.errorMint,
    onGetBrc20MintList: $options.getBrc20MintList
  }, null, 8 /* PROPS */, ["tableList", "loading", "finished", "error", "onGetBrc20MintList"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".brc20[data-v-05e2b9b2] {\n  padding: 0.2rem 0.32rem;\n}\n.brc20 .statistics[data-v-05e2b9b2] {\n  margin-top: 0.2rem;\n}\n.brc20 .statistics .item[data-v-05e2b9b2] {\n  background: #f8f8f8;\n  border-radius: 0.08rem;\n  padding: 0.1rem 0.1rem;\n  text-align: center;\n}\n.brc20 .statistics .item span[data-v-05e2b9b2]:first-child {\n  font-size: 0.28rem;\n  color: #333333;\n  letter-spacing: 0;\n  font-weight: 500;\n  display: block;\n}\n.brc20 .statistics .item span[data-v-05e2b9b2]:last-child {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  line-height: 0.32rem;\n  font-weight: 400;\n  display: block;\n  margin-top: 0.1rem;\n}\n.brc20 .flex-between[data-v-05e2b9b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.brc20 .swiper-link[data-v-05e2b9b2] {\n  display: inline-flex;\n  width: 100%;\n  overflow: hidden;\n  align-items: center;\n}\n.brc20 .swiper-link .ad-tag[data-v-05e2b9b2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(-35%, 35%) rotateZ(-45deg);\n  transform-origin: center;\n  background-color: #f00;\n  color: #fff;\n  padding: 0.04rem 0.8rem;\n  font-size: 0.2rem;\n  line-height: 1;\n}\n.brc20 .swiper-container[data-v-05e2b9b2] .van-swipe-item {\n  position: relative;\n  line-height: 0;\n  overflow: hidden;\n}\n.tabs-container[data-v-05e2b9b2] {\n  position: relative;\n  margin-top: 0.2rem;\n}\n.tabs-wrap[data-v-05e2b9b2] {\n  overflow: hidden;\n  height: 0.6rem;\n}\n.tabs[data-v-05e2b9b2] {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  box-sizing: content-box;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-bottom: 0;\n}\n.tabs .tabs-item[data-v-05e2b9b2] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  font-size: 0.24rem;\n  color: #323233;\n  line-height: 0.32rem;\n  font-weight: 400;\n  background: #f7f8fa;\n  border-radius: 0.32rem;\n  border: none;\n  padding: 0.08rem 0.16rem;\n  word-break: keep-all;\n}\n.tabs .tabs-item + .tabs-item[data-v-05e2b9b2] {\n  margin-left: 0.2rem;\n}\n.tabs .tabs-item.active[data-v-05e2b9b2] {\n  color: #3f80f7;\n  background: rgba(63, 128, 247, 0.1);\n}\n.banner[data-v-05e2b9b2] {\n  border-radius: 0.08rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("28f66046", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/evm.vue":
/*!***************************!*\
  !*** ./src/views/evm.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _evm_vue_vue_type_template_id_05e2b9b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evm.vue?vue&type=template&id=05e2b9b2&scoped=true */ "./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true");
/* harmony import */ var _evm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evm.vue?vue&type=script&lang=js */ "./src/views/evm.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true */ "./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_evm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_evm_vue_vue_type_template_id_05e2b9b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-05e2b9b2"],['__file',"src/views/evm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/evm.vue?vue&type=script&lang=js":
/*!***************************************************!*\
  !*** ./src/views/evm.vue?vue&type=script&lang=js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./evm.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=style&index=0&id=05e2b9b2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_style_index_0_id_05e2b9b2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true":
/*!*********************************************************************!*\
  !*** ./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true ***!
  \*********************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_template_id_05e2b9b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./evm.vue?vue&type=template&id=05e2b9b2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/evm.vue?vue&type=template&id=05e2b9b2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_evm_vue_vue_type_template_id_05e2b9b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);