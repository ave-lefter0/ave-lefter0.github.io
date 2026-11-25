(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Bownload"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var callapp_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callapp-lib */ "./node_modules/callapp-lib/dist/index.umd.js");
/* harmony import */ var callapp_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callapp_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/tracking */ "./src/api/tracking.js");
/* harmony import */ var _api_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/download */ "./src/api/download.js");
/* harmony import */ var _download_androidGuide_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download/androidGuide.vue */ "./src/views/download/androidGuide.vue");
/* harmony import */ var _download_iosGuide_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download/iosGuide.vue */ "./src/views/download/iosGuide.vue");
/* harmony import */ var _download_tutorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./download/tutorial */ "./src/views/download/tutorial.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AndroidGuide: _download_androidGuide_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IosGuide: _download_iosGuide_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data() {
    return {
      isIos_in: false,
      isAndroid_in: false,
      isIos: false,
      isAndroid: false,
      show: true,
      loading: false,
      iosAppStore: 'https://apps.apple.com/app/id6758416913',
      iosAppStoreUS: 'https://apps.apple.com/us/app/chainpulse/id6758416913?l=zh-Hans-CN',
      googlePlayLink: 'https://play.google.com/store/apps/details?id=ai.ave.platform',
      androidDownloadLink: _api_download__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ANDROID_DOWNLOAD_LINK"],
      showBackTop: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Ave.ai')) {
        if (userAgent.includes('OSType')) {
          vm.isIos_in = true;
        } else {
          vm.isAndroid_in = true;
        }
      } else if (new RegExp('android', 'i').test(userAgent)) {
        vm.isAndroid = true;
      } else if (new RegExp('iphone|ipad|ipod', 'i').test(userAgent)) {
        vm.isIos = true;
      }
    });
  },
  computed: {
    domain() {
      return this.$store.state.s3BaseUrl;
    },
    showOpenHeader() {
      return (this.isIos || this.isAndroid) && this.show;
    },
    isIosDevice() {
      return this.isIos || this.isIos_in;
    },
    isAndroidDevice() {
      return this.isAndroid || this.isAndroid_in;
    },
    t() {
      return Object(_download_tutorial__WEBPACK_IMPORTED_MODULE_6__["getTutorial"])(this.$i18n.locale);
    }
  },
  mounted() {
    this.init();
    this.fetchAndroidVersion();
    this.$el.addEventListener('scroll', this.onScroll, {
      passive: true
    });
  },
  activated() {
    // 页面被 keep-alive 缓存，监听需随激活/失活增删，避免离开后在其它页面触发 reload
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    // 从备用安装包页「安装教程」跳回时定位到安装指南
    if (this.$route.hash === '#guide') {
      this.$nextTick(() => this.scrollToGuide());
    }
  },
  deactivated() {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  },
  beforeUnmount() {
    var _this$$el, _this$$el$removeEvent;
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    (_this$$el = this.$el) === null || _this$$el === void 0 || (_this$$el$removeEvent = _this$$el.removeEventListener) === null || _this$$el$removeEvent === void 0 || _this$$el$removeEvent.call(_this$$el, 'scroll', this.onScroll);
  },
  methods: {
    fetchAndroidVersion() {
      return Object(_api_download__WEBPACK_IMPORTED_MODULE_3__["getAndroidVersion"])().then(data => {
        if (data !== null && data !== void 0 && data.download_link) {
          this.androidDownloadLink = data.download_link;
        }
      }).catch(err => {
        console.error('Failed to fetch android version', err);
      });
    },
    scrollToGuide() {
      const el = this.$refs.guide;
      if (!el) return;
      // 页面在 .download 容器内滚动，需扣除顶部固定的导航栏高度
      const top = el.offsetTop - 60;
      this.$el.scrollTo({
        top,
        behavior: 'smooth'
      });
    },
    // 在 app 中打开且注入了 pageBack 时，交给 app 处理返回；否则走 H5 返回
    onBack() {
      var _window, _window2;
      if (typeof ((_window = window) === null || _window === void 0 || (_window = _window.main) === null || _window === void 0 ? void 0 : _window.pageBack) === 'function') {
        window.main.pageBack();
        return;
      }
      if (typeof ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.pageBack) === 'function') {
        window.pageBack();
        return;
      }
      this.$f.goBack();
    },
    onScroll() {
      // 滚动超过一屏后显示返回顶部
      this.showBackTop = this.$el.scrollTop > this.$el.clientHeight;
    },
    backToTop() {
      this.$el.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    onVisibilityChange() {
      // 用户离开了当前页面
      if (document.visibilityState === 'hidden') {
        if (new RegExp('iPhone|iPad|iPod', 'i').test(navigator.userAgent)) {
          location.reload();
        }
      }
    },
    init() {
      Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'view',
        extra: 'share'
      });
    },
    open() {
      this.track().finally(() => {
        const option = {
          scheme: {
            protocol: 'ave'
          },
          appstore: this.iosAppStoreUS,
          yingyongbao: this.androidDownloadLink,
          fallback: new RegExp('iPhone|iPad|iPod', 'i').test(navigator.userAgent) ? this.iosAppStoreUS : this.androidDownloadLink,
          timeout: 2000
        };
        const lib = new callapp_lib__WEBPACK_IMPORTED_MODULE_1___default.a(option);
        lib.open({
          path: ''
        });
      });
    },
    track() {
      const extra = this.isAndroid ? 'Android apk' : 'IOS AppStore';
      return Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'download',
        extra: extra
      });
    },
    trackUrl(url, extra) {
      return Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'download',
        extra: extra
      }).finally(() => {
        location.href = url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/androidGuide.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AndroidGuide',
  props: {
    t: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      expanded: false,
      activeBrand: '',
      openQa: []
    };
  },
  computed: {
    brands() {
      // 没有步骤也没有图片的品牌（如 vivo / 三星 / 其他）不展示 tab，补充内容后自动出现
      return (this.t.android.brands || []).filter(b => {
        var _b$steps, _this$t$brandImages;
        return ((_b$steps = b.steps) === null || _b$steps === void 0 ? void 0 : _b$steps.length) || ((_this$t$brandImages = this.t.brandImages) === null || _this$t$brandImages === void 0 || (_this$t$brandImages = _this$t$brandImages[b.key]) === null || _this$t$brandImages === void 0 ? void 0 : _this$t$brandImages.length);
      });
    },
    currentBrand() {
      return this.brands.find(b => b.key === this.activeBrand) || this.brands[0];
    },
    brandImages() {
      var _this$t$brandImages2, _this$currentBrand;
      return ((_this$t$brandImages2 = this.t.brandImages) === null || _this$t$brandImages2 === void 0 ? void 0 : _this$t$brandImages2[(_this$currentBrand = this.currentBrand) === null || _this$currentBrand === void 0 ? void 0 : _this$currentBrand.key]) || [];
    }
  },
  methods: {
    selectBrand(key) {
      this.activeBrand = key;
      this.expanded = true;
    },
    toggleQa(key) {
      this.openQa = this.openQa.includes(key) ? this.openQa.filter(k => k !== key) : [...this.openQa, key];
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/iosGuide.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IosGuide',
  props: {
    t: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/downloadPackages.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/tracking */ "./src/api/tracking.js");
/* harmony import */ var _api_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/download */ "./src/api/download.js");







const STORAGE_KEY = 'ave_downloaded_packages';
function readDownloaded() {
  try {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DownloadPackages',
  data() {
    return {
      androidDownloadLink: _api_download__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_ANDROID_DOWNLOAD_LINK"],
      backupList: [],
      loading: false,
      downloadedIds: readDownloaded(),
      // 本机已安装的包名（仅 App 内通过备用安装包入口打开时可查询）
      installedNames: []
    };
  },
  computed: {
    // 接口返回的备用包，按 app_type 排序；名称为 Ave Wallet + id，备注按当前语言取 cn / en
    packages() {
      const backups = this.backupList.filter(i => i === null || i === void 0 ? void 0 : i.download_link).sort((a, b) => Number(a.app_type) - Number(b.app_type)).map(i => ({
        id: `app_${i.app_type}`,
        appType: Number(i.app_type),
        name: i.app_name || "Ave Wallet",
        url: i.download_link,
        packageName: i.application_id,
        remark: this.parseRemark(i.remark)
      }));
      return backups;
    },
    groups() {
      return [{
        key: 'main',
        title: 'dlInstallPackage',
        list: this.packages.filter(i => i.appType === 0)
      }, {
        key: 'backup',
        title: 'dlBackupPackages',
        list: this.packages.filter(i => i.appType !== 0)
      }];
    }
  },
  mounted() {
    Object(_api_download__WEBPACK_IMPORTED_MODULE_6__["getAndroidVersion"])().then(data => {
      if (data !== null && data !== void 0 && data.download_link) {
        this.androidDownloadLink = data.download_link;
      }
    }).catch(err => {
      console.error('Failed to fetch android version', err);
    });
    this.loading = true;
    Object(_api_download__WEBPACK_IMPORTED_MODULE_6__["getAndroidBackupList"])().then(list => {
      this.backupList = list;
      this.checkInstalled();
    }).catch(err => {
      console.error('Failed to fetch android backup list', err);
    }).finally(() => {
      this.loading = false;
    });
  },
  activated() {
    // 用户去安装后切回页面时刷新安装状态
    document.addEventListener('visibilitychange', this.onVisibilityChange);
    this.checkInstalled();
  },
  deactivated() {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  },
  methods: {
    onVisibilityChange() {
      if (document.visibilityState === 'visible') this.checkInstalled();
    },
    // App 注入的同步接口：入参为包名数组的 JSON 字符串（最多 15 个），返回 {"packages":[{package_name, installed}]}，只含已安装的包
    checkInstalled() {
      var _window;
      const fn = (_window = window) === null || _window === void 0 || (_window = _window.main) === null || _window === void 0 ? void 0 : _window.getInstalledPackages;
      if (typeof fn !== 'function') return;
      const names = this.packages.map(i => i.packageName).filter(Boolean).slice(0, 15);
      if (!names.length) return;
      try {
        const raw = window.main.getInstalledPackages(JSON.stringify(names));
        const data = typeof raw === 'string' ? JSON.parse(raw || '{}') : raw;
        const list = Array.isArray(data === null || data === void 0 ? void 0 : data.packages) ? data.packages : [];
        this.installedNames = list.filter(i => (i === null || i === void 0 ? void 0 : i.package_name) && i.installed !== false).map(i => i.package_name);
      } catch (e) {
        console.error('getInstalledPackages failed', e);
      }
    },
    isInstalled(item) {
      return !!item.packageName && this.installedNames.includes(item.packageName);
    },
    btnText(item) {
      if (this.isInstalled(item)) return this.$t('dlInstalled');
      return this.downloadedIds.includes(item.id) ? this.$t('dlDownloaded') : this.$t('dlDownload');
    },
    // 跳到下载页的安装指南（下载页 activated 时根据 #guide 定位）
    goGuide() {
      this.$router.push({
        name: 'Download',
        hash: '#guide'
      }).catch(err => {
        console.error('goGuide failed', err);
      });
    },
    // 在 app 中打开且注入了 pageBack 时，交给 app 处理返回；否则走 H5 返回
    onBack() {
      var _window2, _window3;
      if (typeof ((_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.main) === null || _window2 === void 0 ? void 0 : _window2.pageBack) === 'function') {
        window.main.pageBack();
        return;
      }
      if (typeof ((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.pageBack) === 'function') {
        window.pageBack();
        return;
      }
      this.$f.goBack();
    },
    // remark 为 JSON 字符串 {"cn": "...", "en": "..."}：中文显示 cn，其余显示 en
    parseRemark(remark) {
      if (!remark) return '';
      let obj = remark;
      if (typeof remark === 'string') {
        try {
          obj = JSON.parse(remark);
        } catch (e) {
          return remark;
        }
      }
      if (!obj || typeof obj !== 'object') return '';
      const isZh = String(this.$i18n.locale).toLowerCase().startsWith('zh');
      return (isZh ? obj.cn : obj.en) || '';
    },
    markDownloaded(id) {
      if (this.downloadedIds.includes(id)) return;
      this.downloadedIds = [...this.downloadedIds, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.downloadedIds));
      } catch (e) {
        // 存储不可用时仅保留本次会话状态
      }
    },
    handleDownload(item) {
      var _this$$f$androidGloba;
      const url = item.url;
      if (!url || this.isInstalled(item)) return;
      this.markDownloaded(item.id);
      // 埋点不等待：异步回调里再跳转会丢失用户点击手势，浏览器只放行第一次下载，之后的会被拦截
      Object(_api_tracking__WEBPACK_IMPORTED_MODULE_5__["trackRef"])({
        category: 'download',
        extra: `Android apk ${item.id}`
      }).catch(() => {});
      // App 内交给原生浏览器下载，H5 直接跳转
      if ((_this$$f$androidGloba = this.$f.androidGlobal()) !== null && _this$$f$androidGloba !== void 0 && _this$$f$androidGloba.openBrowser) {
        this.$f.openBrowser(url);
      } else {
        location.href = url;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/ave-white.png */ "./src/assets/images/ave-white.png");
/* harmony import */ var _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_download_hero_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/download/hero-bg.jpg */ "./src/assets/images/download/hero-bg.jpg");
/* harmony import */ var _assets_images_download_hero_bg_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_hero_bg_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_download_hero_light_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download/hero-light.png */ "./src/assets/images/download/hero-light.png");
/* harmony import */ var _assets_images_download_hero_light_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_hero_light_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_download_hero_phone_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/download/hero-phone.jpg */ "./src/assets/images/download/hero-phone.jpg");
/* harmony import */ var _assets_images_download_hero_phone_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_hero_phone_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_download_icon_apple_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/download/icon-apple.svg */ "./src/assets/images/download/icon-apple.svg");
/* harmony import */ var _assets_images_download_icon_apple_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_icon_apple_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_download_icon_google_play_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/download/icon-google-play.svg */ "./src/assets/images/download/icon-google-play.svg");
/* harmony import */ var _assets_images_download_icon_google_play_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_icon_google_play_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_download_icon_android_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/download/icon-android.svg */ "./src/assets/images/download/icon-android.svg");
/* harmony import */ var _assets_images_download_icon_android_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_icon_android_svg__WEBPACK_IMPORTED_MODULE_7__);








const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-6c4282a2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "download"
};
const _hoisted_2 = {
  key: 1,
  class: "header"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_4 = {
  class: "flex"
};
const _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("    ");
const _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createStaticVNode"])("<div class=\"hero\" data-v-6c4282a2><div class=\"hero-clip\" data-v-6c4282a2><img class=\"hero-bg\" src=\"" + _assets_images_download_hero_bg_jpg__WEBPACK_IMPORTED_MODULE_2___default.a + "\" alt=\"\" data-v-6c4282a2><div class=\"hero-light\" data-v-6c4282a2><img src=\"" + _assets_images_download_hero_light_png__WEBPACK_IMPORTED_MODULE_3___default.a + "\" alt=\"\" data-v-6c4282a2></div></div><div class=\"hero-phone\" data-v-6c4282a2><img src=\"" + _assets_images_download_hero_phone_jpg__WEBPACK_IMPORTED_MODULE_4___default.a + "\" alt=\"\" data-v-6c4282a2></div></div>", 1);
const _hoisted_7 = {
  class: "title"
};
const _hoisted_8 = {
  class: "tagline"
};
const _hoisted_9 = {
  class: "actions"
};
const _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "btn-icon",
  src: _assets_images_download_icon_apple_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "App Store", -1 /* HOISTED */));
const _hoisted_12 = [_hoisted_10, _hoisted_11];
const _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "btn-icon",
  src: _assets_images_download_icon_google_play_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_14 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "Google Play", -1 /* HOISTED */));
const _hoisted_15 = [_hoisted_13, _hoisted_14];
const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "btn-icon",
  src: _assets_images_download_icon_android_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_17 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, "Android APK", -1 /* HOISTED */));
const _hoisted_18 = [_hoisted_16, _hoisted_17];
const _hoisted_19 = {
  key: 0,
  class: "guide-link ios"
};
const _hoisted_20 = {
  class: "problem-tip"
};
const _hoisted_21 = {
  class: "guide-link android"
};
const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  class: "backup-icon",
  src: _assets_images_download_icon_android_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_ios_guide = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ios-guide");
  const _component_android_guide = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("android-guide");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [$data.isIos_in || $data.isAndroid_in || !$data.show ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_nav_bar, {
    key: 0,
    title: _ctx.$t('dlAveApp'),
    "left-text": "",
    "left-arrow": "",
    onClickLeft: $options.onBack,
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2"
  }, null, 8 /* PROPS */, ["title", "onClickLeft"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.showOpenHeader ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_router_link, {
    to: "/"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_3]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    class: "open",
    type: "primary",
    round: "",
    size: "mini",
    onClick: $options.open,
    loading: $data.loading
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('open1')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick", "loading"]), _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    name: "cross",
    size: "16",
    color: "#fff",
    onClick: _cache[0] || (_cache[0] = $event => $data.show = false)
  })])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["content", {
      'has-header': $options.showOpenHeader
    }])
  }, [_hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h1", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.t.title), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("p", _hoisted_8, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.t.tagline, text => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
      key: text
    }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(text), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" iOS：单个 App Store 入口，不带地区，由 App Store 自动跳到当前 Apple ID 所在地区；PC 等未知设备同时展示 iOS 与安卓入口 "), !$options.isAndroidDevice ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 0,
    class: "btn",
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.trackUrl($data.iosAppStore, 'IOS AppStore'), ["stop"]))
  }, _hoisted_12)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), !$options.isIosDevice ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "btn",
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.trackUrl($data.googlePlayLink, 'Android googlePlay'), ["stop"]))
  }, _hoisted_15), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "btn",
    onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.trackUrl($data.androidDownloadLink, 'Android apk'), ["stop"]))
  }, _hoisted_18)], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" iOS：居中的「安装指南」；安卓：左侧「↓安装指南」+ 右侧「备用安装包」 "), $options.isIosDevice ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
    onClick: _cache[4] || (_cache[4] = (...args) => $options.scrollToGuide && $options.scrollToGuide(...args))
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.t.guide), 1 /* TEXT */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("p", _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.t.problemTip), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
    onClick: _cache[5] || (_cache[5] = (...args) => $options.scrollToGuide && $options.scrollToGuide(...args))
  }, "↓" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.t.guide), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_router_link, {
    class: "backup-btn",
    to: {
      name: 'DownloadPackages'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.t.backupPackages), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      name: "arrow",
      class: "backup-arrow"
    })]),
    _: 1 /* STABLE */
  })])], 64 /* STABLE_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["guide", {
      ios: $options.isIosDevice
    }]),
    ref: "guide"
  }, [$options.isIosDevice ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_ios_guide, {
    key: 0,
    t: $options.t
  }, null, 8 /* PROPS */, ["t"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_android_guide, {
    key: 1,
    t: $options.t
  }, null, 8 /* PROPS */, ["t"]))], 2 /* CLASS */)], 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
    class: "back-top",
    onClick: _cache[6] || (_cache[6] = (...args) => $options.backToTop && $options.backToTop(...args))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    name: "arrow-up"
  })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.showBackTop]])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_download_icon_telegram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/download/icon-telegram.svg */ "./src/assets/images/download/icon-telegram.svg");
/* harmony import */ var _assets_images_download_icon_telegram_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_icon_telegram_svg__WEBPACK_IMPORTED_MODULE_2__);



const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-1d09984a"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "android-guide"
};
const _hoisted_2 = {
  class: "section"
};
const _hoisted_3 = {
  class: "section-title"
};
const _hoisted_4 = {
  class: "tips"
};
const _hoisted_5 = {
  key: 0,
  class: "brand-bar"
};
const _hoisted_6 = {
  class: "brand-tabs"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 1,
  class: "brand-content"
};
const _hoisted_9 = {
  class: "pending"
};
const _hoisted_10 = {
  class: "pending-shots"
};
const _hoisted_11 = {
  class: "step-title"
};
const _hoisted_12 = {
  class: "step-desc"
};
const _hoisted_13 = {
  key: 1,
  class: "shots"
};
const _hoisted_14 = ["src"];
const _hoisted_15 = {
  class: "section"
};
const _hoisted_16 = {
  class: "section-title"
};
const _hoisted_17 = ["onClick"];
const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
  class: "qa-mark"
}, "Q", -1 /* HOISTED */));
const _hoisted_19 = {
  class: "qa-q"
};
const _hoisted_20 = {
  key: 0,
  class: "qa-body"
};
const _hoisted_21 = {
  class: "qa-answer"
};
const _hoisted_22 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
  class: "qa-mark"
}, "A", -1 /* HOISTED */));
const _hoisted_23 = ["src"];
const _hoisted_24 = {
  class: "section"
};
const _hoisted_25 = {
  class: "section-title"
};
const _hoisted_26 = {
  class: "tips"
};
const _hoisted_27 = {
  class: "section"
};
const _hoisted_28 = {
  class: "section-title"
};
const _hoisted_29 = {
  class: "tips"
};
const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "help-icon",
  src: _assets_images_download_icon_telegram_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$currentBran2;
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-icon");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 安装时遇到问题：品牌 Tab，默认收起 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("section", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("h3", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.problemTitle), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("li", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.problemTip), 1 /* TEXT */)]), $options.brands.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_6, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.brands, brand => {
    var _$options$currentBran;
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", {
      key: brand.key,
      class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["brand-tab", {
        active: brand.key === ((_$options$currentBran = $options.currentBrand) === null || _$options$currentBran === void 0 ? void 0 : _$options$currentBran.key)
      }]),
      onClick: $event => $options.selectBrand(brand.key)
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(brand.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_7);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
    class: "toggle",
    onClick: _cache[0] || (_cache[0] = $event => $data.expanded = !$data.expanded)
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.expanded ? $props.t.android.collapse : $props.t.android.expand) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
    name: $data.expanded ? 'arrow-up' : 'arrow-down'
  }, null, 8 /* PROPS */, ["name"])])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), $data.expanded && $options.currentBrand ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 尚无图文的品牌显示占位 "), !((_$options$currentBran2 = $options.currentBrand.steps) !== null && _$options$currentBran2 !== void 0 && _$options$currentBran2.length) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.pending), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.pendingShots($options.currentBrand.name)), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.currentBrand.steps, (step, i) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
      class: "step",
      key: i
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(step.title), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(step.desc), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */)), $options.brandImages.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_13, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.brandImages, (src, i) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
      key: i,
      src: src,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_14);
  }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 常见问题 Q&A：默认折叠 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("section", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("h3", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.qaTitle), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($props.t.android.qa, item => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
      class: "qa",
      key: item.key
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
      class: "qa-header",
      onClick: $event => $options.toggleQa(item.key)
    }, [_hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.q), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
      class: "qa-arrow",
      name: $data.openQa.includes(item.key) ? 'arrow-up' : 'arrow-down'
    }, null, 8 /* PROPS */, ["name"])], 8 /* PROPS */, _hoisted_17), $data.openQa.includes(item.key) ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_21, [_hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.a), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($props.t.qaImages[item.key] || [], (src, i) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: i,
        class: "qa-shot",
        src: src,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_23);
    }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 如何更新 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("section", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("h3", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.updateTitle), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_26, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($props.t.android.updateTips, (tip, i) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
      key: i,
      class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])({
        warn: tip.warn
      })
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(tip.text || tip), 3 /* TEXT, CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 遇到问题 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("section", _hoisted_27, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("h3", _hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.helpTitle), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("ul", _hoisted_29, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($props.t.android.helpTips, (tip, i) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("li", {
      key: i
    }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(tip), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "help-btn",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$f.openBrowser($props.t.telegram))
  }, [_hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($props.t.android.helpButton), 1 /* TEXT */)])])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-f6a7ba28"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "ios-guide"
};
const _hoisted_2 = {
  class: "title"
};
const _hoisted_3 = {
  class: "label"
};
const _hoisted_4 = {
  class: "desc"
};
const _hoisted_5 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.t.ios.title), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($props.t.ios.steps, step => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      class: "step",
      key: step.label
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(step.label), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("p", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(step.desc), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(step.items, (item, i) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        class: "item",
        key: i
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("p", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["item-text", {
          numbered: /^\d+\./.test(item.text)
        }])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.text), 3 /* TEXT, CLASS */), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(item.image && $props.t.iosImages[item.image] || [], (src, j) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
          key: j,
          class: "shot",
          src: src,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_5);
      }), 128 /* KEYED_FRAGMENT */))]);
    }), 128 /* KEYED_FRAGMENT */))]);
  }), 128 /* KEYED_FRAGMENT */))]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_download_banner_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/download/banner-arrow.png */ "./src/assets/images/download/banner-arrow.png");
/* harmony import */ var _assets_images_download_banner_arrow_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_banner_arrow_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_download_banner_new_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download/banner-new.svg */ "./src/assets/images/download/banner-new.svg");
/* harmony import */ var _assets_images_download_banner_new_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_banner_new_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_download_banner_mascot_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/download/banner-mascot.png */ "./src/assets/images/download/banner-mascot.png");
/* harmony import */ var _assets_images_download_banner_mascot_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_banner_mascot_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_download_ave_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/download/ave-logo.svg */ "./src/assets/images/download/ave-logo.svg");
/* harmony import */ var _assets_images_download_ave_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_ave_logo_svg__WEBPACK_IMPORTED_MODULE_5__);






const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-10ed432f"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "download-packages"
};
const _hoisted_2 = {
  class: "main"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
  class: "banner"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "banner-arrow",
  src: _assets_images_download_banner_arrow_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: ""
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "banner-new",
  src: _assets_images_download_banner_new_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: ""
})], -1 /* HOISTED */));
const _hoisted_4 = {
  class: "banner-inner"
};
const _hoisted_5 = {
  class: "tag"
};
const _hoisted_6 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "mascot",
  src: _assets_images_download_banner_mascot_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_7 = {
  class: "title"
};
const _hoisted_8 = {
  class: "slogan-row"
};
const _hoisted_9 = {
  class: "slogan"
};
const _hoisted_10 = {
  class: "highlight"
};
const _hoisted_11 = {
  class: "safe-tip"
};
const _hoisted_12 = {
  class: "tips"
};
const _hoisted_13 = {
  class: "tips-text"
};
const _hoisted_14 = {
  class: "list"
};
const _hoisted_15 = {
  key: 0,
  class: "group-title"
};
const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
  class: "logo",
  src: _assets_images_download_ave_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_17 = {
  class: "info"
};
const _hoisted_18 = {
  class: "name"
};
const _hoisted_19 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-nav-bar");
  const _component_van_loading = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-loading");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_nav_bar, {
    title: _ctx.$t('dlBackupPackages'),
    "left-text": "",
    "left-arrow": "",
    onClickLeft: $options.onBack,
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2"
  }, null, 8 /* PROPS */, ["title", "onClickLeft"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_2, [_hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_5, [_hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlMigrateTag')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlCannotUpdate')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlTryOther')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlOtherPkg')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlSafeTip')), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", null, "1." + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlTipAirplane')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", null, "2." + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlTipMigrate')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: "tips-link",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.goGuide && $options.goGuide(...args))
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dlInstallTutorial')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_14, [$data.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_loading, {
    key: 0,
    class: "loading",
    size: "20"
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" app_type 为 0 的是主安装包，其余放到备用安装包 "), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.groups, group => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: group.key
    }, [group.list.length ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t(group.title)), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])(group.list, item => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
        class: "item",
        key: item.id
      }, [_hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <span class=\"remark\" v-if=\"item.remark\">{{ item.remark }}</span> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["btn", {
          downloaded: $options.isInstalled(item) || $data.downloadedIds.includes(item.id)
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.handleDownload(item), ["stop"])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.btnText(item)), 11 /* TEXT, CLASS, PROPS */, _hoisted_19)]);
    }), 128 /* KEYED_FRAGMENT */))], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".download[data-v-6c4282a2] {\n  position: fixed;\n  inset: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #000515;\n  color: #fff;\n  font-size: 0.28rem;\n}\n.content[data-v-6c4282a2] {\n  padding-bottom: calc(0.48rem + env(safe-area-inset-bottom));\n}\n.content.has-header[data-v-6c4282a2] {\n  padding-top: 1rem;\n}\n.hero[data-v-6c4282a2] {\n  position: relative;\n  height: 8.76rem;\n  overflow: hidden;\n}\n.hero .hero-clip[data-v-6c4282a2] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0.24rem;\n  height: 7.88rem;\n  overflow: hidden;\n}\n.hero .hero-bg[data-v-6c4282a2] {\n  position: absolute;\n  left: 50%;\n  top: -2.32rem;\n  width: 13.46rem;\n  height: 10.34rem;\n  max-width: none;\n  transform: translateX(-50%);\n  object-fit: cover;\n}\n.hero .hero-light[data-v-6c4282a2] {\n  position: absolute;\n  left: 50%;\n  top: 5.42rem;\n  width: 9.04rem;\n  height: 2.46rem;\n  transform: translateX(-50%);\n}\n.hero .hero-light img[data-v-6c4282a2] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 2.46rem;\n  height: 9.04rem;\n  max-width: none;\n  transform: translate(-50%, -50%) rotate(90deg) scaleY(-1);\n}\n.hero .hero-phone[data-v-6c4282a2] {\n  position: absolute;\n  left: 50%;\n  top: 1rem;\n  width: 3rem;\n  height: 6.42rem;\n  padding: 0.04rem;\n  transform: translateX(-50%);\n  background: #21262f;\n  border-radius: 0.48rem;\n  overflow: hidden;\n}\n.hero .hero-phone img[data-v-6c4282a2] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 0.44rem;\n  object-fit: cover;\n}\n.title[data-v-6c4282a2] {\n  position: relative;\n  margin: -1.18rem 0 0;\n  font-size: 0.48rem;\n  line-height: 0.58rem;\n  font-weight: 700;\n  text-align: center;\n  color: #fff;\n}\n.tagline[data-v-6c4282a2] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.08rem 0.26rem;\n  margin: 0.24rem 0 0;\n  padding: 0 0.4rem;\n  font-size: 0.26rem;\n  line-height: 0.36rem;\n  color: #b6bac8;\n}\n.actions[data-v-6c4282a2] {\n  margin-top: 0.64rem;\n  padding: 0 0.4rem;\n}\n.actions .btn[data-v-6c4282a2] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.12rem;\n  min-height: 1rem;\n  padding: 0.22rem 0.42rem;\n  border-radius: 19.98rem;\n  background: #161926;\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n}\n.actions .btn[data-v-6c4282a2]:active {\n  opacity: 0.8;\n}\n.actions .btn + .btn[data-v-6c4282a2] {\n  margin-top: 0.24rem;\n}\n.actions .btn-icon[data-v-6c4282a2] {\n  flex-shrink: 0;\n  width: 0.56rem;\n  height: 0.56rem;\n  padding: 0.04rem;\n}\n.guide-link[data-v-6c4282a2] {\n  display: flex;\n  align-items: center;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  font-weight: 500;\n}\n.guide-link a[data-v-6c4282a2] {\n  color: #fff;\n  cursor: pointer;\n}\n.guide-link.ios[data-v-6c4282a2] {\n  justify-content: center;\n  margin-top: 0.44rem;\n}\n.guide-link.ios a[data-v-6c4282a2] {\n  text-decoration: underline;\n  text-underline-offset: 0.06rem;\n}\n.guide-link.android[data-v-6c4282a2] {\n  justify-content: space-between;\n  gap: 0.18rem;\n  max-width: 6.6rem;\n  margin: 0.32rem auto 0;\n  padding: 0 0 0 0;\n}\n.guide-link.android > a[data-v-6c4282a2] {\n  flex-shrink: 0;\n  text-decoration: underline dotted;\n  text-underline-offset: 0.08rem;\n}\n.guide-link .backup-btn[data-v-6c4282a2] {\n  flex: 0 1 4.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  gap: 0.12rem;\n  border-radius: 0.5rem;\n  background: #161926;\n  color: #fff;\n}\n.guide-link .backup-btn .backup-icon[data-v-6c4282a2] {\n  width: 0.52rem;\n  height: 0.52rem;\n}\n.guide-link .backup-btn .backup-arrow[data-v-6c4282a2] {\n  margin-left: 0.12rem;\n  font-size: 0.24rem;\n  color: #b6bac8;\n}\n.problem-tip[data-v-6c4282a2] {\n  margin: 0.8rem 0.4rem 0;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  text-align: center;\n  color: #fff;\n}\n.guide[data-v-6c4282a2] {\n  margin-top: 0.94rem;\n}\n.guide.ios[data-v-6c4282a2] {\n  margin-top: 1.06rem;\n}\n.back-top[data-v-6c4282a2] {\n  border: 0.02rem solid rgba(255, 255, 255, 0.12);\n  position: fixed;\n  right: 0.32rem;\n  bottom: calc(0.48rem + env(safe-area-inset-bottom));\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 0.88rem;\n  height: 0.88rem;\n  border-radius: 50%;\n  background: #1d2130;\n  font-size: 0.4rem;\n  color: #fff;\n  cursor: pointer;\n}\n.header[data-v-6c4282a2] {\n  background: #2c3254;\n  height: 1rem;\n  padding: 0.4rem 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n.header img[data-v-6c4282a2] {\n  width: 2.16rem;\n}\n.header .open[data-v-6c4282a2] {\n  padding: 0.08rem 0.4rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".android-guide[data-v-1d09984a] {\n  padding: 0 0.48rem;\n  text-align: left;\n}\n.section + .section[data-v-1d09984a] {\n  margin-top: 0.96rem;\n}\n.section-title[data-v-1d09984a] {\n  margin: 0 0 0.32rem;\n  font-size: 0.4rem;\n  line-height: 0.56rem;\n  font-weight: 600;\n  color: #fff;\n}\n.tips[data-v-1d09984a] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tips li[data-v-1d09984a] {\n  position: relative;\n  padding-left: 0.26rem;\n  font-size: 0.28rem;\n  line-height: 0.44rem;\n  color: #b6bac8;\n}\n.tips li[data-v-1d09984a]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0.18rem;\n  width: 0.08rem;\n  height: 0.08rem;\n  border-radius: 50%;\n  background: #b6bac8;\n}\n.tips li + li[data-v-1d09984a] {\n  margin-top: 0.32rem;\n}\n.tips li.warn[data-v-1d09984a] {\n  color: #ffb000;\n}\n.tips li.warn[data-v-1d09984a]::before {\n  background: #ffb000;\n}\n.brand-bar[data-v-1d09984a] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n  margin-top: 0.32rem;\n  border-bottom: 0.02rem solid rgba(255, 255, 255, 0.1);\n}\n.brand-bar .brand-tabs[data-v-1d09984a] {\n  flex: 1;\n  display: flex;\n  gap: 0.32rem;\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.brand-bar .brand-tabs[data-v-1d09984a]::-webkit-scrollbar {\n  display: none;\n}\n.brand-bar .brand-tab[data-v-1d09984a] {\n  position: relative;\n  flex-shrink: 0;\n  padding: 0.12rem 0 0.2rem;\n  font-size: 0.3rem;\n  line-height: 0.4rem;\n  color: #8b8fa3;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.brand-bar .brand-tab.active[data-v-1d09984a] {\n  font-weight: 600;\n  color: #fff;\n}\n.brand-bar .brand-tab.active[data-v-1d09984a]::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  width: 0.28rem;\n  height: 0.06rem;\n  border-radius: 0.04rem;\n  background: #fff;\n  transform: translateX(-50%);\n}\n.brand-bar .toggle[data-v-1d09984a] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.08rem;\n  padding: 0.12rem 0 0.2rem;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  color: #b6bac8;\n  cursor: pointer;\n}\n.brand-content[data-v-1d09984a] {\n  margin-top: 0.32rem;\n}\n.brand-content .pending[data-v-1d09984a] {\n  margin: 0;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  color: #8b8fa3;\n}\n.brand-content .pending-shots[data-v-1d09984a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 3.2rem;\n  margin-top: 0.32rem;\n  padding: 0 0.32rem;\n  border: 0.02rem dashed rgba(255, 255, 255, 0.2);\n  border-radius: 0.24rem;\n  background: #121318;\n  font-size: 0.26rem;\n  line-height: 0.36rem;\n  text-align: center;\n  color: #6b6f80;\n}\n.brand-content .step + .step[data-v-1d09984a] {\n  margin-top: 0.32rem;\n}\n.brand-content .step-title[data-v-1d09984a] {\n  font-size: 0.32rem;\n  line-height: 0.44rem;\n  font-weight: 600;\n  color: #fff;\n}\n.brand-content .step-desc[data-v-1d09984a] {\n  margin-top: 0.08rem;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  color: #b6bac8;\n}\n.brand-content .shots[data-v-1d09984a] {\n  margin-top: 0.4rem;\n}\n.brand-content .shots img[data-v-1d09984a] {\n  display: block;\n  width: 100%;\n}\n.brand-content .shots img + img[data-v-1d09984a] {\n  margin-top: 0.2rem;\n}\n.qa[data-v-1d09984a] {\n  padding-bottom: 0.48rem;\n  border-bottom: 0.02rem solid rgba(255, 255, 255, 0.1);\n}\n.qa + .qa[data-v-1d09984a] {\n  margin-top: 0.48rem;\n}\n.qa .qa-header[data-v-1d09984a] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.16rem;\n  cursor: pointer;\n}\n.qa .qa-mark[data-v-1d09984a] {\n  flex-shrink: 0;\n  font-size: 0.32rem;\n  line-height: 0.44rem;\n  font-weight: 700;\n  color: #fff;\n}\n.qa .qa-q[data-v-1d09984a] {\n  flex: 1;\n  font-size: 0.3rem;\n  line-height: 0.44rem;\n  font-weight: 500;\n  color: #fff;\n}\n.qa .qa-arrow[data-v-1d09984a] {\n  flex-shrink: 0;\n  margin: 0.08rem 0 0 0.24rem;\n  color: #b6bac8;\n}\n.qa .qa-body[data-v-1d09984a] {\n  margin-top: 0.32rem;\n}\n.qa .qa-answer[data-v-1d09984a] {\n  display: flex;\n  gap: 0.16rem;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  color: #b6bac8;\n}\n.qa .qa-answer .qa-mark[data-v-1d09984a] {\n  color: #b6bac8;\n}\n.qa .qa-shot[data-v-1d09984a] {\n  display: block;\n  width: 3.24rem;\n  max-width: 50%;\n  margin: 0.24rem 0 0 0.38rem;\n  border-radius: 0.16rem;\n}\n.help-btn[data-v-1d09984a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.16rem;\n  height: 0.96rem;\n  margin-top: 0.48rem;\n  border-radius: 0.48rem;\n  background: linear-gradient(90deg, #1f5bff 0%, #3f80f7 100%);\n  font-size: 0.32rem;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n}\n.help-btn .help-icon[data-v-1d09984a] {\n  width: 0.44rem;\n  height: 0.44rem;\n}\n.help-btn[data-v-1d09984a]:active {\n  opacity: 0.8;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ios-guide[data-v-f6a7ba28] {\n  padding: 0 0.48rem;\n  color: #fff;\n}\n.title[data-v-f6a7ba28] {\n  margin: 0;\n  font-size: 0.44rem;\n  line-height: 0.6rem;\n  font-weight: 600;\n  text-align: center;\n}\n.step[data-v-f6a7ba28] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 0.64rem;\n}\n.label[data-v-f6a7ba28] {\n  display: inline-flex;\n  align-items: center;\n  height: 0.58rem;\n  padding: 0 0.32rem;\n  border-radius: 0.3rem;\n  background: #1d2130;\n  font-size: 0.28rem;\n  font-weight: 500;\n}\n.desc[data-v-f6a7ba28] {\n  margin: 0.24rem 0 0;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  text-align: center;\n  color: #e4e6ee;\n}\n.item[data-v-f6a7ba28] {\n  align-self: stretch;\n  margin-top: 0.24rem;\n  padding: 0 0.16rem;\n}\n.item-text[data-v-f6a7ba28] {\n  margin: 0;\n  font-size: 0.28rem;\n  line-height: 0.44rem;\n  color: #e4e6ee;\n}\n.item-text.numbered[data-v-f6a7ba28] {\n  padding-left: 1.2em;\n  text-indent: -1.2em;\n}\n.shot[data-v-f6a7ba28] {\n  display: block;\n  width: 6rem;\n  max-width: 100%;\n  margin: 0.32rem auto 0;\n  border-radius: 0.16rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".download-packages[data-v-10ed432f] {\n  position: fixed;\n  inset: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  background: #fff;\n  padding-bottom: calc(0.36rem + env(safe-area-inset-bottom));\n}\n.main[data-v-10ed432f] {\n  position: relative;\n}\n.banner[data-v-10ed432f] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.84rem;\n  overflow: hidden;\n  background: linear-gradient(to top, #fff 16.45%, #288ff8 100%);\n}\n.banner .banner-new[data-v-10ed432f] {\n  position: absolute;\n  left: 3.38rem;\n  top: 0.192rem;\n  width: 4.6522rem;\n  height: 1.9118rem;\n  max-width: none;\n}\n.banner .banner-arrow[data-v-10ed432f] {\n  position: absolute;\n  left: 3.4532rem;\n  top: -0.1866rem;\n  width: 4.208rem;\n  height: 4.208rem;\n  max-width: none;\n  -webkit-mask-image: linear-gradient(227deg, #000 2.82rem, transparent 4.42rem);\n  mask-image: linear-gradient(227deg, #000 2.82rem, transparent 4.42rem);\n}\n.banner-inner[data-v-10ed432f] {\n  position: relative;\n  padding: 0 0.48rem 0 0.44rem;\n}\n.banner-inner .tag[data-v-10ed432f] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  height: 0.46rem;\n  margin-left: 0.18rem;\n  padding: 0 0.24rem 0 0.54rem;\n  border-radius: 0.5rem;\n  background: linear-gradient(to right, #eaf5c2, #40fff7);\n  font-size: 0.24rem;\n  font-weight: 500;\n  color: #141939;\n}\n.banner-inner .tag .mascot[data-v-10ed432f] {\n  position: absolute;\n  left: -0.24rem;\n  top: -0.24rem;\n  width: 0.706rem;\n  height: 0.7494rem;\n  object-fit: contain;\n  object-position: bottom;\n}\n.banner-inner .title[data-v-10ed432f] {\n  margin-top: 0.26rem;\n  font-size: 0.48rem;\n  line-height: 0.48rem;\n  font-weight: 700;\n  color: #fff;\n}\n.banner-inner .slogan-row[data-v-10ed432f] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.08rem 0.16rem;\n  margin-top: 0.212rem;\n  padding-left: 0.02rem;\n}\n.banner-inner .slogan[data-v-10ed432f] {\n  font-size: 0.26rem;\n  line-height: 1.2;\n  color: #141939;\n}\n.banner-inner .slogan .highlight[data-v-10ed432f] {\n  font-weight: 700;\n  color: #1a6afb;\n}\n.banner-inner .safe-tip[data-v-10ed432f] {\n  flex-shrink: 0;\n  font-size: 0.2rem;\n  line-height: 1.2;\n  color: #fff;\n}\n.tips[data-v-10ed432f] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.08rem;\n  min-height: 1.36rem;\n  margin: 0.24rem 0.32rem 0;\n  padding: 0.28rem 0.24rem 0.28rem 0.2rem;\n  border-radius: 0.24rem;\n  background: rgba(255, 255, 255, 0.1);\n  font-size: 0.24rem;\n  line-height: 1.2;\n  color: #141939;\n}\n.tips p[data-v-10ed432f] {\n  margin: 0;\n}\n.tips .tips-text[data-v-10ed432f] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.16rem;\n  min-width: 0;\n}\n.tips .tips-link[data-v-10ed432f] {\n  flex-shrink: 0;\n  min-width: 1.64rem;\n  height: 0.72rem;\n  line-height: 0.72rem;\n  padding: 0 0.24rem;\n  border-radius: 0.58rem;\n  background: #3f80f7;\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n  text-align: center;\n}\n.loading[data-v-10ed432f] {\n  display: flex;\n  justify-content: center;\n  padding: 0.24rem 0;\n}\n.list[data-v-10ed432f] {\n  position: relative;\n  margin-top: 0.24rem;\n  padding: 0 0.32rem;\n}\n.list .group-title[data-v-10ed432f] {\n  margin: 0.08rem 0 0.24rem;\n  font-size: 0.28rem;\n  line-height: 0.4rem;\n  color: #8b8fa3;\n}\n.list .item[data-v-10ed432f] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n  padding: 0.24rem 0.28rem;\n  margin-bottom: 0.24rem;\n  border-radius: 0.24rem;\n  background: rgba(216, 236, 255, 0.25);\n}\n.list .logo[data-v-10ed432f] {\n  flex-shrink: 0;\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.list .info[data-v-10ed432f] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.08rem;\n}\n.list .name[data-v-10ed432f],\n.list .remark[data-v-10ed432f] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.list .name[data-v-10ed432f] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #080a0e;\n}\n.list .remark[data-v-10ed432f] {\n  font-size: 0.24rem;\n  line-height: 0.32rem;\n  color: #8b8fa3;\n}\n.list .btn[data-v-10ed432f] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.64rem;\n  height: 0.72rem;\n  padding: 0 0.24rem;\n  border-radius: 0.58rem;\n  background: #3f80f7;\n  font-size: 0.28rem;\n  font-weight: 500;\n  color: #fff;\n  cursor: pointer;\n}\n.list .btn[data-v-10ed432f]:active {\n  opacity: 0.8;\n}\n.list .btn.downloaded[data-v-10ed432f] {\n  background: #fff;\n  color: #080a0e;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8a8ddd72", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e4735e4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("28789af1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6ee874a6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/ave-white.png":
/*!*****************************************!*\
  !*** ./src/assets/images/ave-white.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ave-white.46ab30c8.png";

/***/ }),

/***/ "./src/assets/images/download/ave-logo.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/download/ave-logo.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ave-logo.9d6d5afa.svg";

/***/ }),

/***/ "./src/assets/images/download/banner-arrow.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/download/banner-arrow.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner-arrow.52bf6055.png";

/***/ }),

/***/ "./src/assets/images/download/banner-mascot.png":
/*!******************************************************!*\
  !*** ./src/assets/images/download/banner-mascot.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner-mascot.559c401a.png";

/***/ }),

/***/ "./src/assets/images/download/banner-new.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/download/banner-new.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/banner-new.6dfd5250.svg";

/***/ }),

/***/ "./src/assets/images/download/hero-bg.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/download/hero-bg.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hero-bg.c07a29f1.jpg";

/***/ }),

/***/ "./src/assets/images/download/hero-light.png":
/*!***************************************************!*\
  !*** ./src/assets/images/download/hero-light.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hero-light.aceb807f.png";

/***/ }),

/***/ "./src/assets/images/download/hero-phone.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/download/hero-phone.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hero-phone.52c75d6e.jpg";

/***/ }),

/***/ "./src/assets/images/download/icon-android.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/download/icon-android.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-android.231e25ce.svg";

/***/ }),

/***/ "./src/assets/images/download/icon-apple.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/download/icon-apple.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-apple.3d904509.svg";

/***/ }),

/***/ "./src/assets/images/download/icon-google-play.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/download/icon-google-play.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-google-play.3134f039.svg";

/***/ }),

/***/ "./src/assets/images/download/icon-telegram.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/download/icon-telegram.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon-telegram.8439966b.svg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/chujingyi.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/download/tutorial/chujingyi.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/chujingyi.cc34ac4b.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/huawei.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/download/tutorial/huawei.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/huawei.df89d802.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/ios-open.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/download/tutorial/ios-open.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ios-open.45447b3d.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/ios-search.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/download/tutorial/ios-search.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ios-search.1363bc5f.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/ios-sign-in.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/download/tutorial/ios-sign-in.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ios-sign-in.5ab567e6.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/ios-sign-out-1.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/download/tutorial/ios-sign-out-1.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ios-sign-out-1.786648ac.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/ios-sign-out-2.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/download/tutorial/ios-sign-out-2.jpg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ios-sign-out-2.d7c8ed94.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/oppo.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/download/tutorial/oppo.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/oppo.b266a6c1.jpg";

/***/ }),

/***/ "./src/assets/images/download/tutorial/xiaomi.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/download/tutorial/xiaomi.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/xiaomi.b74b57ab.jpg";

/***/ }),

/***/ "./src/views/download.vue":
/*!********************************!*\
  !*** ./src/views/download.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.vue?vue&type=template&id=6c4282a2&scoped=true */ "./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true");
/* harmony import */ var _download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.vue?vue&type=script&lang=js */ "./src/views/download.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-6c4282a2"],['__file',"src/views/download.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/download.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/download.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./download.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./download.vue?vue&type=template&id=6c4282a2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/download/androidGuide.vue":
/*!*********************************************!*\
  !*** ./src/views/download/androidGuide.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _androidGuide_vue_vue_type_template_id_1d09984a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./androidGuide.vue?vue&type=template&id=1d09984a&scoped=true */ "./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true");
/* harmony import */ var _androidGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./androidGuide.vue?vue&type=script&lang=js */ "./src/views/download/androidGuide.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true */ "./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_androidGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_androidGuide_vue_vue_type_template_id_1d09984a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-1d09984a"],['__file',"src/views/download/androidGuide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/download/androidGuide.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/download/androidGuide.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./androidGuide.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=style&index=0&id=1d09984a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_style_index_0_id_1d09984a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_template_id_1d09984a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./androidGuide.vue?vue&type=template&id=1d09984a&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/androidGuide.vue?vue&type=template&id=1d09984a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_androidGuide_vue_vue_type_template_id_1d09984a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/download/iosGuide.vue":
/*!*****************************************!*\
  !*** ./src/views/download/iosGuide.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iosGuide_vue_vue_type_template_id_f6a7ba28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true */ "./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true");
/* harmony import */ var _iosGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iosGuide.vue?vue&type=script&lang=js */ "./src/views/download/iosGuide.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true */ "./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_iosGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_iosGuide_vue_vue_type_template_id_f6a7ba28_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-f6a7ba28"],['__file',"src/views/download/iosGuide.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/download/iosGuide.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/views/download/iosGuide.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./iosGuide.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=style&index=0&id=f6a7ba28&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_style_index_0_id_f6a7ba28_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_template_id_f6a7ba28_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/download/iosGuide.vue?vue&type=template&id=f6a7ba28&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_iosGuide_vue_vue_type_template_id_f6a7ba28_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/download/tutorial.js":
/*!****************************************!*\
  !*** ./src/views/download/tutorial.js ***!
  \****************************************/
/*! exports provided: getTutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTutorial", function() { return getTutorial; });
// 下载页「安装指南」教程内容（安卓 / iOS），按语言区分：中文用 zh，其余回退 en
//
// 截图配置说明：
//   images 填 require('@/assets/images/download/tutorial/xxx.png') 这类引用，
//   为空数组时只展示文字，不渲染图片区域。
//   截图来源：Figma「H5下载页面」section 中的「教程整图 / 品牌 / 移动端」、
//   「移动端教程 · iOS」各步骤配图、Q&A「出境易」配图。

// 安卓各品牌教程的截图（与语言无关）
// 每个品牌一张整图（含截图间的引导箭头），通栏展示
const BRAND_IMAGES = {
  xiaomi: [__webpack_require__(/*! @/assets/images/download/tutorial/xiaomi.jpg */ "./src/assets/images/download/tutorial/xiaomi.jpg")],
  huawei: [__webpack_require__(/*! @/assets/images/download/tutorial/huawei.jpg */ "./src/assets/images/download/tutorial/huawei.jpg")],
  oppo: [__webpack_require__(/*! @/assets/images/download/tutorial/oppo.jpg */ "./src/assets/images/download/tutorial/oppo.jpg")],
  vivo: [],
  samsung: [],
  other: []
};

// iOS 各步骤配图
const IOS_IMAGES = {
  // 第二步 1：App Store 头像 / Sign Out
  signOut: [__webpack_require__(/*! @/assets/images/download/tutorial/ios-sign-out-1.jpg */ "./src/assets/images/download/tutorial/ios-sign-out-1.jpg"), __webpack_require__(/*! @/assets/images/download/tutorial/ios-sign-out-2.jpg */ "./src/assets/images/download/tutorial/ios-sign-out-2.jpg")],
  signIn: [__webpack_require__(/*! @/assets/images/download/tutorial/ios-sign-in.jpg */ "./src/assets/images/download/tutorial/ios-sign-in.jpg")],
  // 第二步 2：Apple ID 登录
  search: [__webpack_require__(/*! @/assets/images/download/tutorial/ios-search.jpg */ "./src/assets/images/download/tutorial/ios-search.jpg")],
  // 第三步 1：搜索 Ave 并 GET
  open: [__webpack_require__(/*! @/assets/images/download/tutorial/ios-open.jpg */ "./src/assets/images/download/tutorial/ios-open.jpg")] // 第三步 2：回到主页打开 App
};

// Q&A「出境易」配图
const QA_IMAGES = {
  chujingyi: [__webpack_require__(/*! @/assets/images/download/tutorial/chujingyi.jpg */ "./src/assets/images/download/tutorial/chujingyi.jpg")]
};
const TELEGRAM = {
  zh: 'https://t.me/ave_community_cn',
  en: 'https://t.me/aveai_english'
};
const zh = {
  title: '下载 Ave APP',
  problemTip: '若无法正常更新，下载安装遇到问题',
  tagline: ['链上新金融钱包', 'Meme 合约 股票 贵金属'],
  guide: '安装指南',
  backupPackages: '备用安装包',
  android: {
    problemTitle: '安装时遇到问题?',
    problemTip: '安装时，请关闭 Wi-Fi、移动数据和蓝牙，并忽略任何弹窗警告',
    expand: '展开',
    collapse: '收起',
    pending: '教程图文待补充',
    pendingShots: name => `${name} 教程截图待补充`,
    brands: [{
      key: 'xiaomi',
      name: '小米',
      steps: [{
        title: '1. 进入手机设置',
        desc: '打开手机设置，进入【隐私与安全】页面，顶部选择【安全】选项，关闭电诈防护、支付安全检测。'
      }, {
        title: '2. 关闭安装监控',
        desc: '找到小米手机自带的「手机管家」，选择【病毒扫描】，点击右上角设置，关闭「安装监控」。'
      }]
    }, {
      key: 'huawei',
      name: '华为',
      steps: [{
        title: '1. 下载后断网安装',
        desc: '在浏览器下载「Android APK」。下载完成后，先断网再点击安装。'
      }, {
        title: '2. 联网继续安装',
        desc: '当页面出现「继续安装」提示时，重新打开手机网络，再点击「继续安装」。'
      }, {
        title: '3. 处理风险安装提示',
        desc: '安装成功后，弹出风险提示，勾选「不再提醒」，点击「继续使用」，下一步选择「取消」移入管控。'
      }]
    }, {
      key: 'oppo',
      name: 'OPPO',
      steps: [{
        title: '1. 进入手机设置',
        desc: '打开手机设置，点击应用，选择「应用管理」。'
      }, {
        title: '2. 进入手机管家',
        desc: '找到「手机管家」，点击「打开」。'
      }, {
        title: '3. 病毒风险清除',
        desc: '找到「病毒扫描」后打开，点击「一键清除」。'
      }]
    },
    // vivo / 三星 / 其他 的图文尚待补充，steps 为空时显示占位
    {
      key: 'vivo',
      name: 'vivo',
      steps: []
    }, {
      key: 'samsung',
      name: '三星',
      steps: []
    }, {
      key: 'other',
      name: '其他',
      steps: []
    }],
    qaTitle: '常见问题 Q&A',
    qa: [{
      key: 'chujingyi',
      q: '通过链接或 APK 更新下载时，提示「出境易暂不支持此应用」怎么办？',
      a: '通过链接或 APK 更新下载时，若从出境易下载的 Ave 提示下图内容，可尝试卸载出境易，重新安装。'
    }],
    updateTitle: '如何更新 Ave App?',
    updateTips: ['Google Play 用户：在 Google Play 中搜索「Ave」，点击「更新」，或开启自动更新。', 'APK 用户：下载最新版 APK 直接覆盖安装，无需卸载旧版本，资产与设置不会丢失。', {
      text: '下载「备用安装包」安装后将是一个新的独立 App，请记得迁移钱包（导入原有助记词 / 私钥）。',
      warn: true
    }, {
      text: '如需卸载重装，请务必先备份钱包助记词 / 私钥，避免资产丢失。',
      warn: true
    }],
    helpTitle: '遇到任何问题该怎么办?',
    helpTips: ['通过 App 内「帮助」联系在线客服，或加入 Ave.ai 官方 Telegram 群组。', '请提供手机型号、系统版本及问题截图，我们会尽快为您处理。'],
    helpButton: '加入Ave.ai Telegram群组'
  },
  ios: {
    title: 'iOS 安装教程',
    steps: [{
      label: '第一步',
      desc: 'Ave目前上架美国、澳大利亚以及香港地区AppStore，下载Ave app需要对应地区的Apple ID',
      items: []
    }, {
      label: '第二步',
      desc: '在 App Store 切换 Apple ID。',
      items: [{
        text: '1. 打开 App Store 应用，点击右上角的头像，退出登录。',
        image: 'signOut'
      }, {
        text: '2. 使用已上架地区的 Apple ID 登录。',
        image: 'signIn'
      }, {
        text: '如果提示“无法登录”，可能是您近期切换账号过于频繁。您可以更换 ID 或者几小时后重试。如果 ID 被锁定，则需要进行验证或更换 ID 后再试。'
      }]
    }, {
      label: '第三步',
      desc: '安装 App',
      items: [{
        text: '1. 登录成功后，会自动跳转至 ID 对应地区的 App Store。在 App Store 中搜索“Ave”，点击“GET”即可开始安装。',
        image: 'search'
      }, {
        text: '2. 回到主页，打开 Ave App。',
        image: 'open'
      }]
    }]
  }
};
const en = {
  title: 'Download Ave APP',
  problemTip: 'Can’t update, or having trouble installing?',
  tagline: ['On-chain wallet for new finance', 'Meme · Perps · Stocks · Metals'],
  guide: 'Install guide',
  backupPackages: 'Backup packages',
  android: {
    problemTitle: 'Trouble installing?',
    problemTip: 'While installing, turn off Wi-Fi, mobile data and Bluetooth, and ignore any warning pop-ups.',
    expand: 'Expand',
    collapse: 'Collapse',
    pending: 'Tutorial coming soon',
    pendingShots: name => `${name} screenshots coming soon`,
    brands: [{
      key: 'xiaomi',
      name: 'Xiaomi',
      steps: [{
        title: '1. Open Settings',
        desc: 'Open Settings, go to [Privacy & Security], choose [Security] at the top, and turn off fraud protection and payment security checks.'
      }, {
        title: '2. Turn off install monitoring',
        desc: 'Open the built-in "Security" app, choose [Virus scan], tap Settings in the top-right corner and turn off "Install monitoring".'
      }]
    }, {
      key: 'huawei',
      name: 'Huawei',
      steps: [{
        title: '1. Go offline before installing',
        desc: 'Download "Android APK" in your browser. When the download finishes, disconnect from the network, then tap Install.'
      }, {
        title: '2. Reconnect and continue',
        desc: 'When "Continue installation" appears, turn the network back on and tap "Continue installation".'
      }, {
        title: '3. Handle the risk warning',
        desc: 'After installation, when a risk warning appears, check "Don\'t remind again", tap "Continue", then choose "Cancel" on the next step.'
      }]
    }, {
      key: 'oppo',
      name: 'OPPO',
      steps: [{
        title: '1. Open Settings',
        desc: 'Open Settings, tap Apps and choose "App management".'
      }, {
        title: '2. Open Phone Manager',
        desc: 'Find "Phone Manager" and tap "Open".'
      }, {
        title: '3. Clear virus risks',
        desc: 'Open "Virus scan" and tap "Clear all".'
      }]
    }, {
      key: 'vivo',
      name: 'vivo',
      steps: []
    }, {
      key: 'samsung',
      name: 'Samsung',
      steps: []
    }, {
      key: 'other',
      name: 'Others',
      steps: []
    }],
    qaTitle: 'FAQ',
    qa: [{
      key: 'chujingyi',
      q: 'When updating via link or APK, I see "Chujingyi does not support this app". What should I do?',
      a: 'If Ave downloaded through Chujingyi shows the message below, uninstall Chujingyi and install again.'
    }],
    updateTitle: 'How to update Ave App?',
    updateTips: ['Google Play users: search "Ave" in Google Play and tap "Update", or turn on auto-update.', 'APK users: download the latest APK and install it over the old one. No need to uninstall; your assets and settings are kept.', {
      text: 'A "backup package" installs as a new standalone app. Remember to migrate your wallet (import your seed phrase / private key).',
      warn: true
    }, {
      text: 'If you need to uninstall and reinstall, back up your seed phrase / private key first to avoid losing assets.',
      warn: true
    }],
    helpTitle: 'Need help?',
    helpTips: ['Contact online support via "Help" in the app, or join the official Ave.ai Telegram group.', 'Please share your phone model, OS version and screenshots of the issue so we can help you quickly.'],
    helpButton: 'Join the Ave.ai Telegram group'
  },
  ios: {
    title: 'iOS install guide',
    steps: [{
      label: 'Step 1',
      desc: 'Ave is available on the App Store in the US, Australia and Hong Kong. You need an Apple ID from one of these regions to download it.',
      items: []
    }, {
      label: 'Step 2',
      desc: 'Switch Apple ID in the App Store.',
      items: [{
        text: '1. Open the App Store, tap your avatar in the top-right corner and sign out.',
        image: 'signOut'
      }, {
        text: '2. Sign in with an Apple ID from a supported region.',
        image: 'signIn'
      }, {
        text: 'If you see "Cannot sign in", you may have switched accounts too often. Try another ID or wait a few hours. If the ID is locked, verify it or use another ID.'
      }]
    }, {
      label: 'Step 3',
      desc: 'Install the app',
      items: [{
        text: '1. After signing in, the App Store switches to that region. Search "Ave" and tap "GET" to install.',
        image: 'search'
      }, {
        text: '2. Go back to the home screen and open Ave App.',
        image: 'open'
      }]
    }]
  }
};
function getTutorial(lang = '') {
  const isZh = String(lang).toLowerCase().startsWith('zh');
  return {
    ...(isZh ? zh : en),
    telegram: isZh ? TELEGRAM.zh : TELEGRAM.en,
    brandImages: BRAND_IMAGES,
    iosImages: IOS_IMAGES,
    qaImages: QA_IMAGES
  };
}

/***/ }),

/***/ "./src/views/downloadPackages.vue":
/*!****************************************!*\
  !*** ./src/views/downloadPackages.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _downloadPackages_vue_vue_type_template_id_10ed432f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true */ "./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true");
/* harmony import */ var _downloadPackages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloadPackages.vue?vue&type=script&lang=js */ "./src/views/downloadPackages.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true */ "./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_downloadPackages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_downloadPackages_vue_vue_type_template_id_10ed432f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-10ed432f"],['__file',"src/views/downloadPackages.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/downloadPackages.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/downloadPackages.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./downloadPackages.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=style&index=0&id=10ed432f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_style_index_0_id_10ed432f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_template_id_10ed432f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/downloadPackages.vue?vue&type=template&id=10ed432f&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_downloadPackages_vue_vue_type_template_id_10ed432f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);