(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home~Market~Plate~Token"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/index.js */ "./src/api/index.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SocialContentPopup',
  props: {
    // 是否显示弹窗
    show: {
      type: Boolean,
      default: false
    },
    // KOL 信息
    kolInfo: {
      type: Object,
      default: null
    },
    // 代币 ID（用于 similar_token 参数）
    tokenId: {
      type: String,
      default: ''
    }
  },
  emits: ['update:show'],
  computed: {
    // KOL 头像
    kolAvatar() {
      var _this$kolInfo, _this$kolInfo2, _this$$store;
      if (!this.kolInfo) return '';
      const logo = ((_this$kolInfo = this.kolInfo) === null || _this$kolInfo === void 0 || (_this$kolInfo = _this$kolInfo.wallet_logo) === null || _this$kolInfo === void 0 ? void 0 : _this$kolInfo.logo) || ((_this$kolInfo2 = this.kolInfo) === null || _this$kolInfo2 === void 0 ? void 0 : _this$kolInfo2.avatar);
      if (!logo) return '';
      // 如果是相对路径，添加 base URL
      if (logo.startsWith('http')) {
        return logo;
      }
      // 尝试从 store 获取 base URL
      const baseUrl = ((_this$$store = this.$store) === null || _this$$store === void 0 || (_this$$store = _this$$store.state) === null || _this$$store === void 0 || (_this$$store = _this$$store.ave_globalConfig) === null || _this$$store === void 0 ? void 0 : _this$$store.token_logo_url) || '';
      return baseUrl ? `${baseUrl}${logo}` : logo;
    },
    // KOL 名称
    kolName() {
      var _this$kolInfo3, _this$kolInfo4, _this$kolInfo5;
      if (!this.kolInfo) return '';
      return ((_this$kolInfo3 = this.kolInfo) === null || _this$kolInfo3 === void 0 ? void 0 : _this$kolInfo3.remark) || ((_this$kolInfo4 = this.kolInfo) === null || _this$kolInfo4 === void 0 || (_this$kolInfo4 = _this$kolInfo4.wallet_logo) === null || _this$kolInfo4 === void 0 ? void 0 : _this$kolInfo4.name) || ((_this$kolInfo5 = this.kolInfo) === null || _this$kolInfo5 === void 0 ? void 0 : _this$kolInfo5.name) || '';
    }
  },
  data() {
    return {
      contentList: [],
      loading: false,
      currentPage: 1,
      pageSize: 20,
      total: 0,
      hasMore: false,
      expandedTranslations: {},
      // 记录哪些推文展开了翻译
      expandedQuotedTranslations: {} // 记录哪些引用推文展开了翻译
    };
  },
  watch: {
    show(val) {
      if (val) {
        this.loadData();
      }
    }
  },
  methods: {
    // 加载数据
    async loadData(isLoadMore = false) {
      var _this$kolInfo6, _this$kolInfo7, _this$kolInfo8, _this$kolInfo9;
      // 从 kolInfo 中获取 author_id，可能在不同位置
      const authorId = ((_this$kolInfo6 = this.kolInfo) === null || _this$kolInfo6 === void 0 ? void 0 : _this$kolInfo6.author_id) || ((_this$kolInfo7 = this.kolInfo) === null || _this$kolInfo7 === void 0 || (_this$kolInfo7 = _this$kolInfo7.wallet_logo) === null || _this$kolInfo7 === void 0 ? void 0 : _this$kolInfo7.author_id) || ((_this$kolInfo8 = this.kolInfo) === null || _this$kolInfo8 === void 0 ? void 0 : _this$kolInfo8.wallet_address) || ((_this$kolInfo9 = this.kolInfo) === null || _this$kolInfo9 === void 0 ? void 0 : _this$kolInfo9.account_address);
      if (!authorId) {
        console.warn('No author_id available', this.kolInfo);
        return;
      }
      this.loading = true;
      const params = {
        author_id: authorId,
        page_no: isLoadMore ? this.currentPage + 1 : 1,
        page_size: this.pageSize
      };

      // 如果有 tokenId，传入 similar_token 参数（去掉 -chain 后缀）
      if (this.tokenId) {
        // 去掉 -chain 后缀，只保留 token 地址
        const similarToken = this.tokenId.includes('-') ? this.tokenId.split('-')[0] : this.tokenId;
        params.similar_token = similarToken;
      }
      try {
        const res = await Object(_api_index_js__WEBPACK_IMPORTED_MODULE_5__["getKolSocialContent"])(params);
        const innerData = (res === null || res === void 0 ? void 0 : res.data) || res;
        const newList = (innerData === null || innerData === void 0 ? void 0 : innerData.items) || (innerData === null || innerData === void 0 ? void 0 : innerData.list) || [];
        if (isLoadMore) {
          this.contentList = [...this.contentList, ...newList];
          this.currentPage++;
          // 新加载的数据默认展开翻译
          newList.forEach((item, idx) => {
            const realIndex = this.contentList.length - newList.length + idx;
            if (this.hasTranslation(item)) {
              this.expandedTranslations[realIndex] = true;
            }
            // 引用推文翻译
            if (item.quoted_tweet && this.hasTranslation(item.quoted_tweet)) {
              this.expandedQuotedTranslations[realIndex] = true;
            }
          });
        } else {
          this.contentList = newList;
          this.currentPage = 1;
          // 默认展开所有翻译
          this.expandedTranslations = {};
          this.expandedQuotedTranslations = {};
          newList.forEach((item, idx) => {
            if (this.hasTranslation(item)) {
              this.expandedTranslations[idx] = true;
            }
            // 引用推文翻译
            if (item.quoted_tweet && this.hasTranslation(item.quoted_tweet)) {
              this.expandedQuotedTranslations[idx] = true;
            }
          });
        }
        this.total = (innerData === null || innerData === void 0 ? void 0 : innerData.total) || newList.length;
        this.hasMore = newList.length >= this.pageSize && this.contentList.length < this.total;
      } catch (err) {
        var _this$$toast;
        console.error('getKolSocialContent error:', err);
        (_this$$toast = this.$toast) === null || _this$$toast === void 0 || _this$$toast.fail(this.$t('dataLoadFailed') || '数据加载失败');
      } finally {
        this.loading = false;
      }
    },
    // 加载更多
    loadMore() {
      if (!this.loading && this.hasMore) {
        this.loadData(true);
      }
    },
    // 关闭弹窗
    close() {
      this.$emit('update:show', false);
    },
    // 弹窗关闭后
    handleClosed() {
      this.contentList = [];
      this.currentPage = 1;
      this.total = 0;
      this.hasMore = false;
    },
    // 打开社媒链接
    openSocialLink(content) {
      const url = content.url || content.link || content.post_url;
      if (url) {
        window.open(url, '_blank');
      }
    },
    // HTML 转义，防止推文内容里的标签被当作 HTML 解析
    escapeHtml(str) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return String(str).replace(/[&<>"']/g, m => map[m]);
    },
    // 正则元字符转义
    escapeRegExp(str) {
      return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    // 把推文正文渲染成 HTML：URL 转链接、tokens 中的合约地址标橙色，其余原样输出
    formatContent(text, tokens) {
      if (!text) return '';

      // 地址去重并按长度倒序，避免短地址抢先匹配
      const addressList = [...new Set((tokens || []).map(t => t === null || t === void 0 ? void 0 : t.address).filter(Boolean))].sort((a, b) => b.length - a.length);
      const urlPattern = '(?:[hH][tT][tT][pP][sS]?|[fF][tT][pP]):\\/\\/[^\\s<]+';
      const patterns = [urlPattern];
      if (addressList.length) {
        patterns.push(addressList.map(addr => this.escapeRegExp(addr)).join('|'));
      }
      const re = new RegExp(patterns.join('|'), 'g');
      let html = '';
      let lastIndex = 0;
      let match;
      while ((match = re.exec(text)) !== null) {
        let matched = match[0];
        // URL 结尾的标点不算链接的一部分
        if (/^(?:https?|ftp):\/\//i.test(matched)) {
          const trimmed = matched.replace(/[.,;:!?，。；：！？)\]】》」]+$/, '');
          if (trimmed) matched = trimmed;
        }
        html += this.escapeHtml(text.slice(lastIndex, match.index));
        const safe = this.escapeHtml(matched);
        if (/^(?:https?|ftp):\/\//i.test(matched)) {
          html += `<a href="${safe}" target="_blank" rel="noopener noreferrer">${safe}</a>`;
        } else {
          html += `<span class="token-address">${safe}</span>`;
        }
        lastIndex = match.index + matched.length;
        re.lastIndex = lastIndex;
      }
      html += this.escapeHtml(text.slice(lastIndex));
      return html;
    },
    // 点击正文中的链接时，阻止冒泡（避免同时跳转推文详情）
    handleTextClick(e) {
      var _e$target, _e$target$closest;
      const link = (_e$target = e.target) === null || _e$target === void 0 || (_e$target$closest = _e$target.closest) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.call(_e$target, 'a');
      if (link) {
        e.stopPropagation();
      }
    },
    // 打开图片
    openImage(url) {
      if (url) {
        window.open(url, '_blank');
      }
    },
    // 检查是否有翻译内容
    hasTranslation(content) {
      var _this$$i18n;
      if (!content) return false;
      // 根据当前语言显示对应的翻译
      const lang = ((_this$$i18n = this.$i18n) === null || _this$$i18n === void 0 ? void 0 : _this$$i18n.locale) || 'en';
      if (lang === 'zh-cn' || lang === 'zh-tw') {
        return !!content.content_zh;
      }
      return !!content.content_en;
    },
    // 获取翻译内容
    getTranslation(content) {
      var _this$$i18n2;
      if (!content) return '';
      const lang = ((_this$$i18n2 = this.$i18n) === null || _this$$i18n2 === void 0 ? void 0 : _this$$i18n2.locale) || 'en';
      if (lang === 'zh-cn' || lang === 'zh-tw') {
        return content.content_zh || '';
      }
      return content.content_en || '';
    },
    // 切换翻译显示
    toggleTranslation(index) {
      this.expandedTranslations[index] = !this.expandedTranslations[index];
    },
    // 切换引用推文翻译显示
    toggleQuotedTranslation(index) {
      this.expandedQuotedTranslations[index] = !this.expandedQuotedTranslations[index];
    },
    // 格式化社媒时间
    formatSocialTime(time) {
      if (!time) return '';
      let timestamp = time;

      // 如果是字符串，尝试转换为数字
      if (typeof time === 'string') {
        const num = Number(time);
        if (!isNaN(num)) {
          timestamp = num;
        } else {
          // 如果不是数字字符串，尝试用 Date 解析
          try {
            const date = new Date(time);
            if (isNaN(date.getTime())) return '';
            timestamp = Math.floor(date.getTime() / 1000);
          } catch (e) {
            return '';
          }
        }
      }

      // 如果是数字（时间戳），转换为毫秒
      if (typeof timestamp === 'number') {
        // 如果是秒级时间戳，转换为毫秒
        const ms = timestamp < 1e12 ? timestamp * 1000 : timestamp;
        return this.$dayjs(ms).locale('en', {
          relativeTime: {
            future: "in%s",
            past: "%s",
            s: "a few seconds",
            m: "1m",
            mm: "%dm",
            h: "1h",
            hh: "%dh",
            d: "1d",
            dd: "%dd",
            M: "1M",
            MM: "%dM",
            y: "1y",
            yy: "%dy"
          }
        }).fromNow();
      }
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _api_chain_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/chain.js */ "./src/api/chain.js");
/* harmony import */ var _mixin_badge_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/mixin/badge.js */ "./src/mixin/badge.js");
/* harmony import */ var _SocialContentPopup_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SocialContentPopup.vue */ "./src/components/tokenTag/SocialContentPopup.vue");









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TagMeaningPop',
  components: {
    SocialContentPopup: _SocialContentPopup_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_mixin_badge_js__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    // 标签类型: 'meaning'(标签含义), 'kol'(KOL喊单), 'smart'(聪明钱同车), 'cto'(CTO)
    type: {
      type: String,
      default: 'meaning'
    },
    // 代币信息（可选，如果不传则从store获取）
    tokenInfo: {
      type: Object,
      default: null
    },
    // 标签配置列表（用于标签含义页面）
    meaningList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false,
      activeTab: this.type,
      currentType: this.type,
      dataList: [],
      listLoading: false,
      finished: false,
      listError: false,
      currentPage: 1,
      pageSize: 20,
      total: 0,
      hasLoadedMore: false,
      hasShownPullTip: false,
      initialHeight: 354,
      // px
      rowHeight: 60,
      // px per row
      favCount: 0,
      totalBalanceRatio: 0,
      followedCount: 0,
      // 已关注数量
      isFollowed: false,
      // 是否只显示已关注
      isHolding: false,
      // 是否只显示持仓中
      originalTotal: 0,
      // 原始总数（不受筛选影响）
      isShowDate: false,
      // 时间格式切换：false=倒计时，true=标准时间
      socialContentVisible: false,
      // 社媒内容弹窗
      currentKolItem: null // 当前选中的 KOL
    };
  },
  computed: {
    // 当前登录地址（app 内嵌环境使用 bot.userInfo.evmAddress 兜底）
    currentAccount() {
      var _this$$store$state$bo;
      return ((_this$$store$state$bo = this.$store.state.bot) === null || _this$$store$state$bo === void 0 || (_this$$store$state$bo = _this$$store$state$bo.userInfo) === null || _this$$store$state$bo === void 0 ? void 0 : _this$$store$state$bo.evmAddress) || this.$store.state.currentAccount || '';
    },
    tokenInfoComputed() {
      return this.tokenInfo || this.$store.state.tokenInfo || Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__["getLastSearch"])();
    },
    // 标签含义列表（优先使用 props.meaningList，否则从 tokenInfo.token_badges 生成）
    meaningListComputed() {
      var _this$tokenInfoComput, _this$tokenInfoComput2;
      if (this.meaningList && this.meaningList.length > 0) {
        return this.meaningList;
      }

      // 从 tokenInfo.token_badges 生成
      const badges = ((_this$tokenInfoComput = this.tokenInfoComputed) === null || _this$tokenInfoComput === void 0 ? void 0 : _this$tokenInfoComput.token_badges) || [];
      const list = badges
      // 过滤文字链接类型（vars.type === 'text'，如 trading_contest），弹框中不展示
      // 过滤 hide_in_popup=1 的标签（弹框含义列表不展示）
      .filter(badge => {
        var _badge$vars, _badge$vars2;
        return ((_badge$vars = badge.vars) === null || _badge$vars === void 0 ? void 0 : _badge$vars.type) !== 'text' && ((_badge$vars2 = badge.vars) === null || _badge$vars2 === void 0 ? void 0 : _badge$vars2.hide_in_popup) !== 1;
      }).map(badge => {
        var _badge$vars3, _badge$vars4;
        return {
          icon: badge.icon ? `${this.$store.state.s3BaseUrl}${badge.icon}` : '',
          label: badge.text || badge.type,
          type: this.getBadgeType(badge.type),
          count: (_badge$vars3 = badge.vars) === null || _badge$vars3 === void 0 ? void 0 : _badge$vars3.count,
          new_holding_count: (_badge$vars4 = badge.vars) === null || _badge$vars4 === void 0 ? void 0 : _badge$vars4.new_holding_count
        };
      }).filter(item => item.type);
      // Dex 付费：紧跟在发射平台之后，没有发射平台时放最前
      if ((_this$tokenInfoComput2 = this.tokenInfoComputed) !== null && _this$tokenInfoComput2 !== void 0 && _this$tokenInfoComput2.dex_supported) {
        const launchpadIndex = list.findIndex(item => item.type === 'launchpad');
        list.splice(launchpadIndex + 1, 0, {
          icon: __webpack_require__(/*! @/assets/images/eagle.svg */ "./src/assets/images/eagle.svg"),
          label: this.$t('dexPaid'),
          type: 'dex_paid'
        });
      }
      return list;
    },
    // 获取当前类型的图标（从 token_badges 中获取）
    currentTypeIcon() {
      const item = this.meaningListComputed.find(m => m.type === this.currentType);
      return (item === null || item === void 0 ? void 0 : item.icon) || '';
    },
    // 从 token_badges 中找到当前类型对应的原始 badge 对象
    currentBadge() {
      var _this$tokenInfoComput3;
      const badges = ((_this$tokenInfoComput3 = this.tokenInfoComputed) === null || _this$tokenInfoComput3 === void 0 ? void 0 : _this$tokenInfoComput3.token_badges) || [];
      return badges.find(b => this.getBadgeType(b.type) === this.currentType) || null;
    },
    // 是否为文字链接类型 badge，直接渲染 <a> 链接（如 trading_contest）
    isTextLinkType() {
      return !!this.getTextLinkBadge();
    },
    textLinkUrl() {
      var _this$getTextLinkBadg;
      return ((_this$getTextLinkBadg = this.getTextLinkBadge()) === null || _this$getTextLinkBadg === void 0 ? void 0 : _this$getTextLinkBadg.url) || '#';
    },
    textLinkText() {
      var _badge$vars5;
      const badge = this.getTextLinkBadge();
      // 优先使用 vars.text（如“赢50000USDT”），否则使用 badge.text（如“交易赛”）
      return (badge === null || badge === void 0 || (_badge$vars5 = badge.vars) === null || _badge$vars5 === void 0 ? void 0 : _badge$vars5.text) || (badge === null || badge === void 0 ? void 0 : badge.text) || '';
    },
    textLinkStyle() {
      var _badge$vars6, _badge$vars7;
      const badge = this.getTextLinkBadge();
      const color = (badge === null || badge === void 0 || (_badge$vars6 = badge.vars) === null || _badge$vars6 === void 0 ? void 0 : _badge$vars6.color) || (badge === null || badge === void 0 || (_badge$vars7 = badge.vars) === null || _badge$vars7 === void 0 ? void 0 : _badge$vars7.color_night);
      return color ? {
        color
      } : {};
    },
    totalCount() {
      var _this$currentBadge, _this$tokenInfoComput4;
      // 优先从 token_badges 读取，兜底从 tagsRatio 读取
      const badgeCount = (_this$currentBadge = this.currentBadge) === null || _this$currentBadge === void 0 || (_this$currentBadge = _this$currentBadge.vars) === null || _this$currentBadge === void 0 ? void 0 : _this$currentBadge.count;
      if (badgeCount) return badgeCount;
      const ratio = ((_this$tokenInfoComput4 = this.tokenInfoComputed) === null || _this$tokenInfoComput4 === void 0 ? void 0 : _this$tokenInfoComput4.tagsRatio) || {};
      if (this.currentType === 'kol') return ratio.kol_call_count || 0;
      if (this.currentType === 'kol_holders') return ratio.kol_count || 0;
      if (this.currentType === 'smart') return ratio.smart_wallet_count || 0;
      return 0;
    },
    getTokenId() {
      var _this$tokenInfoComput5, _this$tokenInfoComput6, _this$tokenInfoComput7, _this$tokenInfoComput8, _this$tokenInfoComput9, _this$tokenInfoComput0, _this$tokenInfoComput1;
      // 优先使用 tokenInfo.id
      if ((_this$tokenInfoComput5 = this.tokenInfoComputed) !== null && _this$tokenInfoComput5 !== void 0 && _this$tokenInfoComput5.id) {
        return this.tokenInfoComputed.id;
      }
      // gold.vue 等列表页使用 target_token + chain 组合
      if ((_this$tokenInfoComput6 = this.tokenInfoComputed) !== null && _this$tokenInfoComput6 !== void 0 && _this$tokenInfoComput6.target_token && (_this$tokenInfoComput7 = this.tokenInfoComputed) !== null && _this$tokenInfoComput7 !== void 0 && _this$tokenInfoComput7.chain) {
        return `${this.tokenInfoComputed.target_token}-${this.tokenInfoComputed.chain}`;
      }
      // 兼容新币劣币等列表页，可能直接提供 token_address
      if ((_this$tokenInfoComput8 = this.tokenInfoComputed) !== null && _this$tokenInfoComput8 !== void 0 && _this$tokenInfoComput8.token_address && (_this$tokenInfoComput9 = this.tokenInfoComputed) !== null && _this$tokenInfoComput9 !== void 0 && _this$tokenInfoComput9.chain) {
        return `${this.tokenInfoComputed.token_address}-${this.tokenInfoComputed.chain}`;
      }
      // 新币劣币等列表页使用 token + chain 组合（token 即代币地址）
      if ((_this$tokenInfoComput0 = this.tokenInfoComputed) !== null && _this$tokenInfoComput0 !== void 0 && _this$tokenInfoComput0.token && (_this$tokenInfoComput1 = this.tokenInfoComputed) !== null && _this$tokenInfoComput1 !== void 0 && _this$tokenInfoComput1.chain) {
        return `${this.tokenInfoComputed.token}-${this.tokenInfoComputed.chain}`;
      }
      // 兜底使用 store 中的 id
      return this.$store.state.id || '';
    },
    getTitle() {
      const titleMap = {
        'meaning': this.$t('tagMeaning') || '标签含义',
        'kol': this.$t('kolCall') || 'KOL喊单',
        'kol_holders': this.$t('kolHolders') || 'KOL同车',
        'smart': this.$t('smartMoneyHolders') || '聪明钱同车',
        'cto': 'CTO'
      };
      return titleMap[this.activeTab] || '';
    },
    popupHeight() {
      if (this.activeTab === 'meaning') {
        // 含义列表高度随内容自适应，避免内容少时底部空白过多
        return 'auto';
      }
      if (this.hasLoadedMore) {
        return '8.8rem';
      }
      return '5.8rem';
    },
    contentHeight() {
      if (this.activeTab === 'meaning') {
        return 'auto';
      }
      if (this.hasLoadedMore) {
        return `${(this.initialHeight + this.pageSize * this.rowHeight / 2) / 50}rem`;
      }
      return `${(this.initialHeight + 34) / 50}rem`;
    },
    // 持仓中人数：优先从 token_badges 读取，兜底从 tagsRatio 读取
    holdingCount() {
      var _this$currentBadge2, _this$tokenInfoComput10;
      const badgeHolding = (_this$currentBadge2 = this.currentBadge) === null || _this$currentBadge2 === void 0 || (_this$currentBadge2 = _this$currentBadge2.vars) === null || _this$currentBadge2 === void 0 ? void 0 : _this$currentBadge2.new_holding_count;
      if (badgeHolding) return badgeHolding;
      const ratio = ((_this$tokenInfoComput10 = this.tokenInfoComputed) === null || _this$tokenInfoComput10 === void 0 ? void 0 : _this$tokenInfoComput10.tagsRatio) || {};
      if (this.currentType === 'kol') return ratio.new_kol_call_count || 0;
      if (['kol_holders', 'kol_call'].includes(this.currentType)) return ratio.new_kol_holding_count || 0;
      if (this.currentType === 'smart') return ratio.new_smart_wallet_holding_count || 0;
      return 0;
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.resetState();
        // 支持的数据列表类型才直接加载，其余类型（如 launchpad）显示标签含义列表
        if (this.activeTab !== 'meaning') {
          this.getListData(false);
        }
      }
    },
    isFollowed() {
      // 切换已关注筛选时重新加载数据
      if (this.activeTab !== 'meaning' && this.show) {
        this.currentPage = 1;
        this.dataList = [];
        this.finished = false;
        this.getListData(false);
      }
    },
    isHolding() {
      // 切换持仓中筛选时重新加载数据
      if (this.activeTab !== 'meaning' && this.show) {
        this.currentPage = 1;
        this.dataList = [];
        this.finished = false;
        this.getListData(false);
      }
    }
  },
  methods: {
    // 是否支持跳转详情页的数据列表类型（与 getTagType 映射保持一致）
    isSupportedListType(type) {
      return ['kol', 'kol_holders', 'smart', 'cto'].includes(type);
    },
    // 弹窗打开时直接显示数据列表的类型；其余类型（含 cto、launchpad）先显示标签含义列表，点击含义项后再进入数据列表
    isDirectListType(type) {
      return ['kol', 'kol_holders', 'smart'].includes(type);
    },
    backToMeaning() {
      this.activeTab = 'meaning';
      this.currentType = this.type;
      this.resetState(true);
    },
    handleMeaningClick(item) {
      // 点击标签含义项，切换到对应的数据列表；无详情页的纯展示类型（如 launchpad）不跳转
      if (item.type && item.type !== 'meaning' && this.isSupportedListType(item.type)) {
        this.resetState();
        this.activeTab = item.type;
        this.currentType = item.type;
        this.getListData(false);
      }
    },
    getListData(isLoadMore = false) {
      const token_id = this.getTokenId;
      if (!token_id) {
        console.warn('No token_id available');
        return;
      }
      this.listLoading = true;
      const params = {
        token_id,
        tag_type: this.getTagType(this.currentType),
        page_no: this.currentPage,
        page_size: this.pageSize,
        self_address: this.currentAccount,
        only_fav: this.isFollowed,
        // 是否只返回已关注的地址
        only_holding: this.isHolding // 是否只返回持仓中的地址
      };
      Object(_api_chain_js__WEBPACK_IMPORTED_MODULE_6__["getTagsRatioHover"])(params).then(res => {
        // response interceptor 对 status=1 的响应已解包 data 层
        // KOL喊单(status=1): res = { items, total, fav_count }
        // 聪明钱(code=0): res = { code, data: { holders, total, fav_count, total_balance_ratio } }
        const innerData = (res === null || res === void 0 ? void 0 : res.data) || res;
        let newList = [];
        this.followedCount = (innerData === null || innerData === void 0 ? void 0 : innerData.fav_count) || 0;
        if (this.currentType === 'kol') {
          newList = (innerData === null || innerData === void 0 ? void 0 : innerData.items) || [];
        } else {
          // CTO (tag_type=29) 和 聪明钱/KOL同车 (tag_type=30/31) 都返回 holders
          newList = (innerData === null || innerData === void 0 ? void 0 : innerData.holders) || [];
        }
        if (isLoadMore) {
          this.dataList = [...this.dataList, ...newList];
          if (!this.hasLoadedMore && newList.length > 0) {
            this.hasLoadedMore = true;
          }
        } else {
          this.dataList = newList;
        }
        this.favCount = (innerData === null || innerData === void 0 ? void 0 : innerData.fav_count) || 0;
        this.totalBalanceRatio = (innerData === null || innerData === void 0 ? void 0 : innerData.total_balance_ratio) || 0;
        this.total = (innerData === null || innerData === void 0 ? void 0 : innerData.total) || 0;

        // 首次加载或未勾选"已关注"时，保存原始总数
        if (!isLoadMore && !this.isFollowed) {
          this.originalTotal = this.total;
        } else if (this.isFollowed && this.originalTotal === 0) {
          // 如果一开始就勾选了"已关注"，需要从 meaningList 中获取原始总数
          const item = this.meaningListComputed.find(m => m.type === this.currentType);
          this.originalTotal = (item === null || item === void 0 ? void 0 : item.count) || this.total;
        }
        const hasMore = newList.length > 0 && this.dataList.length < this.total;
        if (!isLoadMore && hasMore && newList.length > 0) {
          this.hasShownPullTip = true;
        }
        this.listLoading = false;
        this.finished = !hasMore;
        if (hasMore) {
          this.currentPage++;
        }
      }).catch(err => {
        console.log('getTagsRatioHover error:', err);
        this.listError = true;
        this.listLoading = false;
      });
    },
    getTagType(type) {
      const typeMap = {
        'kol': -101,
        // KOL喊单
        'kol_holders': 31,
        // KOL同车
        'smart': 30,
        // 聪明钱同车
        'cto': 29 // CTO
      };
      return typeMap[type] || type;
    },
    onScroll(e) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = e.target;
      if (scrollHeight - scrollTop - clientHeight < 50) {
        if (!this.listLoading && !this.finished) {
          this.onLoad();
        }
      }
    },
    onLoad() {
      if (this.finished) return;
      this.getListData(true);
    },
    resetState(keepTab = false) {
      this.dataList = [];
      this.currentPage = 1;
      this.finished = false;
      this.listLoading = false;
      this.listError = false;
      this.favCount = 0;
      this.totalBalanceRatio = 0;
      this.total = 0;
      this.originalTotal = 0; // 重置原始总数
      this.isHolding = false; // 重置持仓筛选
      this.hasLoadedMore = false;
      this.hasShownPullTip = false;
      if (!keepTab) {
        // 弹窗打开时：仅 kol/kol_holders/smart 直接显示数据列表，其余类型（含 cto、launchpad）先显示标签含义列表
        this.activeTab = this.isDirectListType(this.type) ? this.type : 'meaning';
        this.currentType = this.type;
      }
    },
    goLink(item) {
      const isCan = ['fsc', 'heco', 'telegramx', 'dojo', 'ethw', 'ethf', 'pgchain', 'tc', 'eth', 'oec', 'tron', 'bsc', 'solana', 'xlayer', 'base'].includes(this.tokenInfoComputed.chain);
      if (isCan) {
        // KOL喊单使用 wallet_address，其他使用 account_address
        const address = item.wallet_address || item.account_address;
        this.$router.push({
          name: 'WhaleTracking',
          params: {
            id: this.$store.state.id,
            address: address,
            symbol: this.tokenInfoComputed.symbol
          },
          query: {
            remark: item.remark
          }
        });
      }
    },
    getProfitClass(profit) {
      if (profit > 0) return 'profit-positive';
      if (profit < 0) return 'profit-negative';
      return '';
    },
    formatFollowerCount(count) {
      if (!count) return '0';
      if (count >= 1000) {
        return (count / 1000).toFixed(2) + 'K';
      }
      return count.toString();
    },
    formatNumber(num) {
      if (!num && num !== 0) return '0';
      return Number(num).toFixed(2);
    },
    formatProfitPercent(percent) {
      if (!percent && percent !== 0) return '0%';
      const num = Number(percent);
      const formatted = (Math.abs(num) * 100).toFixed(2);
      return num > 0 ? `+${formatted}%` : `-${formatted}%`;
    },
    formatProfit(profit) {
      if (profit === 0 || profit === undefined) return '0%';
      const formatted = this.$f.formatNumber(Math.abs(profit), 2);
      return profit > 0 ? `+${formatted}%` : `-${formatted}%`;
    },
    formatProfitAmount(profit) {
      if (!profit && profit !== 0) return '$0.00';
      const num = Number(profit);
      const absNum = Math.abs(num);
      let formatted;
      if (absNum < 1000) formatted = absNum.toFixed(2);else if (absNum < 1000000) formatted = (absNum / 1000).toFixed(2) + 'K';else if (absNum < 1000000000) formatted = (absNum / 1000000).toFixed(2) + 'M';else formatted = (absNum / 1000000000).toFixed(2) + 'B';
      return num > 0 ? `+$${formatted}` : num < 0 ? `-$${formatted}` : `$${formatted}`;
    },
    formatTime(timeStr) {
      if (!timeStr) return '-';
      // ISO 8601: "2026-03-23T12:07:55Z" → "03/23 20:07" (UTC+8)
      try {
        const date = new Date(timeStr);
        // UTC+8: 小时 +8
        let hours = date.getUTCHours() + 8;
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1;

        // 处理跨天
        if (hours >= 24) {
          hours -= 24;
          // 简化处理：不考虑月份天数差异，直接+1天
          day += 1;
        }
        const monthStr = String(month).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const hoursStr = String(hours).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${monthStr}-${dayStr} ${hoursStr}:${minutes}`;
      } catch (e) {
        return timeStr;
      }
    },
    formatPercent(ratio) {
      if (!ratio && ratio !== 0) return '0%';
      const num = Number(ratio);
      return num.toFixed(2) + '%';
    },
    formatCount(n) {
      const num = Number(n) || 0;
      if (num < 1000) return num.toFixed(2);
      if (num < 1000000) return (num / 1000).toFixed(2) + 'K';
      if (num < 1000000000) return (num / 1000000).toFixed(2) + 'M';
      return (num / 1000000000).toFixed(2) + 'B';
    },
    copyText(text) {
      if (!text) return;
      Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(text);
    },
    // 将时间字符串或时间戳转换为秒级时间戳
    getTimestamp(time) {
      if (!time) return 0;
      // 如果已经是数字（时间戳），直接返回
      if (typeof time === 'number') {
        // 如果是毫秒级时间戳，转换为秒级
        return time > 1e12 ? Math.floor(time / 1000) : time;
      }
      // 如果是字符串，尝试解析
      try {
        const date = new Date(time);
        if (isNaN(date.getTime())) return 0;
        return Math.floor(date.getTime() / 1000);
      } catch (e) {
        return 0;
      }
    },
    // 切换时间格式
    toggleTimeFormat() {
      this.isShowDate = !this.isShowDate;
    },
    // 中文相对时间格式化：3分钟前、2小时前、3天前等
    formatRelativeTime(time) {
      const ts = this.getTimestamp(time);
      if (!ts) return '-';
      const diff = Math.floor(Date.now() / 1000) - ts;
      if (diff < 0) return '刚刚';
      if (diff < 60) return diff + '秒前';
      if (diff < 3600) return Math.floor(diff / 60) + '分钟前';
      if (diff < 86400) return Math.floor(diff / 3600) + '小时前';
      if (diff < 2592000) return Math.floor(diff / 86400) + '天前';
      return Math.floor(diff / 2592000) + '个月前';
    },
    // 点击 KOL 行，展示社媒内容
    handleKolRowClick(item) {
      console.log('handleKolRowClick called', item);
      this.currentKolItem = item;
      this.socialContentVisible = true;
    },
    // 关闭社媒内容弹窗
    closeSocialContent() {
      this.socialContentVisible = false;
      this.currentKolItem = null;
    },
    // 获取当前 type 对应的文字链接 badge
    getTextLinkBadge() {
      var _this$tokenInfoComput11;
      const badges = ((_this$tokenInfoComput11 = this.tokenInfoComputed) === null || _this$tokenInfoComput11 === void 0 ? void 0 : _this$tokenInfoComput11.token_badges) || [];
      // 兼容两种形式：
      // 1. 旧形式：badge.type === 'text'（type 由 mixin 映射为 'text_link'）
      // 2. 新形式：badge.vars.type === 'text'（如 trading_contest：url + vars.text）
      return badges.find(b => {
        var _b$vars;
        if (this.type === 'text' || this.type === 'text_link') {
          return b.type === 'text';
        }
        return b.type === this.type && ((_b$vars = b.vars) === null || _b$vars === void 0 ? void 0 : _b$vars.type) === 'text' && !!b.url;
      }) || null;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-04980e24"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "popup-header"
};
const _hoisted_2 = {
  class: "header-left"
};
const _hoisted_3 = {
  class: "header-title"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
  class: "header-right"
}, null, -1 /* HOISTED */));
const _hoisted_5 = {
  class: "w-content social-content-list"
};
const _hoisted_6 = {
  key: 0,
  class: "loading-content"
};
const _hoisted_7 = {
  class: "empty-content"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = {
  class: "social-header"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  class: "social-info"
};
const _hoisted_12 = {
  class: "social-name"
};
const _hoisted_13 = {
  class: "social-username"
};
const _hoisted_14 = {
  class: "social-time"
};
const _hoisted_15 = {
  class: "social-body"
};
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["onClick"];
const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 13 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M4.39062 8.76676L5.02865 7.30843M5.02865 7.30843L6.43229 4.1001L7.83594 7.30843M5.02865 7.30843H7.83594M8.47396 8.76676L7.83594 7.30843",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M12.0329 5.26676C11.4924 2.60414 9.13838 0.600098 6.31625 0.600098C3.49414 0.600098 1.14009 2.60414 0.599609 5.26676L2.34961 4.68343",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M0.599609 7.6001C1.14009 10.2627 3.49414 12.2668 6.31625 12.2668C9.13838 12.2668 11.4924 10.2627 12.0329 7.6001L10.5163 8.18343",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1 /* HOISTED */));
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = {
  key: 2,
  class: "social-medias"
};
const _hoisted_21 = ["src", "onClick"];
const _hoisted_22 = {
  key: 3,
  class: "quoted-tweet"
};
const _hoisted_23 = {
  class: "quoted-header"
};
const _hoisted_24 = ["src"];
const _hoisted_25 = {
  class: "quoted-info"
};
const _hoisted_26 = {
  class: "quoted-name"
};
const _hoisted_27 = {
  class: "quoted-username"
};
const _hoisted_28 = {
  class: "quoted-text"
};
const _hoisted_29 = ["onClick"];
const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 13 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M4.39062 8.76676L5.02865 7.30843M5.02865 7.30843L6.43229 4.1001L7.83594 7.30843M5.02865 7.30843H7.83594M8.47396 8.76676L7.83594 7.30843",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M12.0329 5.26676C11.4924 2.60414 9.13838 0.600098 6.31625 0.600098C3.49414 0.600098 1.14009 2.60414 0.599609 5.26676L2.34961 4.68343",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("path", {
  d: "M0.599609 7.6001C1.14009 10.2627 3.49414 12.2668 6.31625 12.2668C9.13838 12.2668 11.4924 10.2627 12.0329 7.6001L10.5163 8.18343",
  stroke: "#838A94",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1 /* HOISTED */));
const _hoisted_31 = {
  key: 1,
  class: "quoted-translated-text"
};
const _hoisted_32 = {
  key: 3,
  class: "no-more"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-loading");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_popup, {
    position: "bottom",
    style: {
      width: '100%',
      height: '70%',
      minHeight: 'auto',
      padding: '8px 0px'
    },
    round: "",
    show: $props.show,
    class: "popup-container social-content-popup",
    teleport: "#app",
    onClosed: $options.handleClosed
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 标题栏 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      name: "arrow-left",
      size: "20",
      onClick: $options.close
    }, null, 8 /* PROPS */, ["onClick"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('tweet') || '推文'), 1 /* TEXT */), _hoisted_4]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 社媒内容列表 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 加载中 "), $data.loading && $data.contentList.length === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_loading, {
      size: "24px"
    })])) : !$data.loading && $data.contentList.length === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 空状态 "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('noData') || '暂无数据'), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 内容列表 "), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.contentList, (content, index) => {
      var _content$author, _content$author2, _content$author3, _content$quoted_tweet, _content$quoted_tweet2, _content$quoted_tweet3;
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: index,
        class: "social-item",
        onClick: $event => $options.openSocialLink(content)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [(_content$author = content.author) !== null && _content$author !== void 0 && _content$author.profile_pic ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
        key: 0,
        src: content.author.profile_pic,
        alt: "",
        class: "social-avatar"
      }, null, 8 /* PROPS */, _hoisted_10)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_content$author2 = content.author) === null || _content$author2 === void 0 ? void 0 : _content$author2.name) || ''), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, "@" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_content$author3 = content.author) === null || _content$author3 === void 0 ? void 0 : _content$author3.username) || ''), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatSocialTime(content.created_at)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
        class: "social-text",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleTextClick && $options.handleTextClick(...args)),
        innerHTML: $options.formatContent(content.content, content.tokens)
      }, null, 8 /* PROPS */, _hoisted_16), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 翻译按钮 "), $options.hasTranslation(content) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 0,
        class: "translation-toggle",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.toggleTranslation(index), ["stop"])
      }, [_hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('translate') || '翻译'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_17)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 翻译内容 "), $data.expandedTranslations[index] && $options.getTranslation(content) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 1,
        class: "translated-text",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleTextClick && $options.handleTextClick(...args)),
        innerHTML: $options.formatContent($options.getTranslation(content), content.tokens)
      }, null, 8 /* PROPS */, _hoisted_19)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 媒体图片 "), content.medias && content.medias.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_20, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])(content.medias, (media, mIndex) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: mIndex
        }, [media && media.type === 'photo' && media.media_url_https ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
          key: 0,
          src: media.media_url_https,
          alt: "",
          class: "media-image",
          onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.openImage(media.media_url_https), ["stop"])
        }, null, 8 /* PROPS */, _hoisted_21)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 引用推文 "), content.quoted_tweet ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_22, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_23, [(_content$quoted_tweet = content.quoted_tweet.author) !== null && _content$quoted_tweet !== void 0 && _content$quoted_tweet.profile_pic ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
        key: 0,
        src: content.quoted_tweet.author.profile_pic,
        alt: "",
        class: "quoted-avatar"
      }, null, 8 /* PROPS */, _hoisted_24)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_content$quoted_tweet2 = content.quoted_tweet.author) === null || _content$quoted_tweet2 === void 0 ? void 0 : _content$quoted_tweet2.name) || ''), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, "@" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_content$quoted_tweet3 = content.quoted_tweet.author) === null || _content$quoted_tweet3 === void 0 ? void 0 : _content$quoted_tweet3.username) || ''), 1 /* TEXT */)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(content.quoted_tweet.content || ''), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 引用推文翻译按钮 "), $options.hasTranslation(content.quoted_tweet) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 0,
        class: "translation-toggle",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.toggleQuotedTranslation(index), ["stop"])
      }, [_hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('translate') || '翻译'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_29)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 引用推文翻译内容 "), $data.expandedQuotedTranslations[index] && $options.getTranslation(content.quoted_tweet) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.getTranslation(content.quoted_tweet)), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])], 8 /* PROPS */, _hoisted_8);
    }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" 加载更多 "), $data.hasMore && !$data.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
      key: 2,
      class: "load-more",
      onClick: _cache[2] || (_cache[2] = (...args) => $options.loadMore && $options.loadMore(...args))
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('pullUpToLoadMore') || '加载更多'), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), !$data.hasMore && $data.contentList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('noMore') || '没有更多了'), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "onClosed"]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_1__["pushScopeId"])("data-v-9dfe44a0"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["popScopeId"])(), n);
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  class: "popup-header"
};
const _hoisted_3 = {
  class: "flex"
};
const _hoisted_4 = {
  class: "header-title-left"
};
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  class: "header-title"
};
const _hoisted_7 = {
  key: 1,
  class: "count-badge"
};
const _hoisted_8 = {
  class: "header-right"
};
const _hoisted_9 = {
  key: 0,
  class: "w-content meaning-content"
};
const _hoisted_10 = {
  class: "meaning-list"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  class: "meaning-left"
};
const _hoisted_13 = ["src"];
const _hoisted_14 = {
  key: 0,
  class: "meaning-right"
};
const _hoisted_15 = {
  class: "count"
};
const _hoisted_16 = {
  class: "w-content list-content"
};
const _hoisted_17 = {
  class: "table-header"
};
const _hoisted_18 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
  class: "col col-kol"
}, "KOL", -1 /* HOISTED */));
const _hoisted_19 = {
  class: "col col-hold"
};
const _hoisted_20 = {
  class: "col col-count-time"
};
const _hoisted_21 = {
  class: "count-time-header"
};
const _hoisted_22 = {
  class: "header-label"
};
const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
  class: "header-divider"
}, "/", -1 /* HOISTED */));
const _hoisted_24 = {
  class: "iconfont icon-a-Group1312321412"
};
const _hoisted_25 = {
  class: "iconfont icon-riqi"
};
const _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
  class: "col col-kol"
}, "KOL", -1 /* HOISTED */));
const _hoisted_27 = {
  class: "col col-hold"
};
const _hoisted_28 = {
  class: "col col-profit"
};
const _hoisted_29 = {
  class: "col col-address"
};
const _hoisted_30 = {
  class: "col col-hold"
};
const _hoisted_31 = {
  class: "col col-profit"
};
const _hoisted_32 = {
  key: 0,
  class: "list-error"
};
const _hoisted_33 = {
  key: 1,
  class: "list-loading"
};
const _hoisted_34 = ["onClick"];
const _hoisted_35 = {
  class: "col col-kol"
};
const _hoisted_36 = {
  class: "user-info"
};
const _hoisted_37 = ["src"];
const _hoisted_38 = {
  class: "user-details"
};
const _hoisted_39 = {
  class: "username-row"
};
const _hoisted_40 = {
  class: "username ellipsis"
};
const _hoisted_41 = ["onClick"];
const _hoisted_42 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M2.1 2.1V0.525C2.1 0.385761 2.15531 0.252226 2.25377 0.153769C2.35223 0.0553123 2.48576 0 2.625 0H8.925C9.06424 0 9.19777 0.0553123 9.29623 0.153769C9.39469 0.252226 9.45 0.385761 9.45 0.525V7.875C9.45 8.01424 9.39469 8.14778 9.29623 8.24623C9.19777 8.34469 9.06424 8.4 8.925 8.4H7.35V9.975C7.35 10.2648 7.11375 10.5 6.82132 10.5H0.528675C0.459442 10.5004 0.390809 10.4871 0.326719 10.461C0.26263 10.4348 0.204347 10.3962 0.155221 10.3474C0.106094 10.2986 0.0670913 10.2406 0.0404535 10.1767C0.0138157 10.1128 6.79215e-05 10.0442 0 9.975L0.00157501 2.625C0.00157501 2.3352 0.237825 2.1 0.53025 2.1H2.1ZM1.05157 3.15L1.05 9.45H6.3V3.15H1.05157ZM3.15 2.1H7.35V7.35H8.4V1.05H3.15V2.1Z",
  fill: "#838A94"
}, null, -1 /* HOISTED */));
const _hoisted_43 = [_hoisted_42];
const _hoisted_44 = {
  class: "follower-count"
};
const _hoisted_45 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 10 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",
  fill: "#222222"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M6.71526 2.01929H7.62873L5.63299 4.54287L7.98088 7.97673H6.14268L4.70296 5.89401L3.05507 7.97673H2.14093L4.27568 5.27776L2.02344 2.01929H3.90831L5.21001 3.92296L6.71526 2.01929ZM6.28798 7.38099H6.78939L3.55381 2.61503H3.01635L6.28798 7.38099Z",
  fill: "white"
})], -1 /* HOISTED */));
const _hoisted_46 = {
  class: "col col-hold"
};
const _hoisted_47 = {
  key: 0,
  class: "hold-info"
};
const _hoisted_48 = {
  class: "hold-value color-red"
};
const _hoisted_49 = {
  key: 1,
  class: "hold-info"
};
const _hoisted_50 = {
  class: "hold-value"
};
const _hoisted_51 = {
  class: "hold-percent"
};
const _hoisted_52 = {
  class: "col col-count-time"
};
const _hoisted_53 = {
  class: "count-value"
};
const _hoisted_54 = {
  class: "time-value"
};
const _hoisted_55 = {
  key: 1
};
const _hoisted_56 = {
  key: 1
};
const _hoisted_57 = {
  class: "col col-kol"
};
const _hoisted_58 = {
  class: "user-info relative"
};
const _hoisted_59 = ["src"];
const _hoisted_60 = ["src"];
const _hoisted_61 = {
  class: "user-details"
};
const _hoisted_62 = {
  class: "username-row"
};
const _hoisted_63 = {
  class: "username"
};
const _hoisted_64 = ["onClick"];
const _hoisted_65 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M2.1 2.1V0.525C2.1 0.385761 2.15531 0.252226 2.25377 0.153769C2.35223 0.0553123 2.48576 0 2.625 0H8.925C9.06424 0 9.19777 0.0553123 9.29623 0.153769C9.39469 0.252226 9.45 0.385761 9.45 0.525V7.875C9.45 8.01424 9.39469 8.14778 9.29623 8.24623C9.19777 8.34469 9.06424 8.4 8.925 8.4H7.35V9.975C7.35 10.2648 7.11375 10.5 6.82132 10.5H0.528675C0.459442 10.5004 0.390809 10.4871 0.326719 10.461C0.26263 10.4348 0.204347 10.3962 0.155221 10.3474C0.106094 10.2986 0.0670913 10.2406 0.0404535 10.1767C0.0138157 10.1128 6.79215e-05 10.0442 0 9.975L0.00157501 2.625C0.00157501 2.3352 0.237825 2.1 0.53025 2.1H2.1ZM1.05157 3.15L1.05 9.45H6.3V3.15H1.05157ZM3.15 2.1H7.35V7.35H8.4V1.05H3.15V2.1Z",
  fill: "#838A94"
}, null, -1 /* HOISTED */));
const _hoisted_66 = [_hoisted_65];
const _hoisted_67 = {
  class: "follower-count"
};
const _hoisted_68 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 10 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",
  fill: "#222222"
}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M6.71526 2.01929H7.62873L5.63299 4.54287L7.98088 7.97673H6.14268L4.70296 5.89401L3.05507 7.97673H2.14093L4.27568 5.27776L2.02344 2.01929H3.90831L5.21001 3.92296L6.71526 2.01929ZM6.28798 7.38099H6.78939L3.55381 2.61503H3.01635L6.28798 7.38099Z",
  fill: "white"
})], -1 /* HOISTED */));
const _hoisted_69 = {
  class: "col col-hold"
};
const _hoisted_70 = {
  key: 0,
  class: "hold-info"
};
const _hoisted_71 = {
  class: "hold-value color-red"
};
const _hoisted_72 = {
  key: 1,
  class: "hold-info"
};
const _hoisted_73 = {
  class: "hold-value"
};
const _hoisted_74 = {
  class: "hold-percent"
};
const _hoisted_75 = {
  class: "col col-profit"
};
const _hoisted_76 = {
  class: "profit-info"
};
const _hoisted_77 = {
  class: "col col-address"
};
const _hoisted_78 = {
  class: "address-info"
};
const _hoisted_79 = ["src"];
const _hoisted_80 = {
  class: "address-details"
};
const _hoisted_81 = {
  class: "address-row"
};
const _hoisted_82 = {
  class: "address-text"
};
const _hoisted_83 = ["onClick"];
const _hoisted_84 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("path", {
  d: "M2.1 2.1V0.525C2.1 0.385761 2.15531 0.252226 2.25377 0.153769C2.35223 0.0553123 2.48576 0 2.625 0H8.925C9.06424 0 9.19777 0.0553123 9.29623 0.153769C9.39469 0.252226 9.45 0.385761 9.45 0.525V7.875C9.45 8.01424 9.39469 8.14778 9.29623 8.24623C9.19777 8.34469 9.06424 8.4 8.925 8.4H7.35V9.975C7.35 10.2648 7.11375 10.5 6.82132 10.5H0.528675C0.459442 10.5004 0.390809 10.4871 0.326719 10.461C0.26263 10.4348 0.204347 10.3962 0.155221 10.3474C0.106094 10.2986 0.0670913 10.2406 0.0404535 10.1767C0.0138157 10.1128 6.79215e-05 10.0442 0 9.975L0.00157501 2.625C0.00157501 2.3352 0.237825 2.1 0.53025 2.1H2.1ZM1.05157 3.15L1.05 9.45H6.3V3.15H1.05157ZM3.15 2.1H7.35V7.35H8.4V1.05H3.15V2.1Z",
  fill: "#838A94"
}, null, -1 /* HOISTED */));
const _hoisted_85 = [_hoisted_84];
const _hoisted_86 = {
  class: "address-sub"
};
const _hoisted_87 = {
  class: "col col-hold"
};
const _hoisted_88 = {
  key: 0,
  class: "hold-info"
};
const _hoisted_89 = {
  class: "hold-value color-red"
};
const _hoisted_90 = {
  key: 1,
  class: "hold-info"
};
const _hoisted_91 = {
  class: "hold-value"
};
const _hoisted_92 = {
  class: "hold-percent"
};
const _hoisted_93 = {
  class: "col col-profit"
};
const _hoisted_94 = {
  class: "profit-info"
};
const _hoisted_95 = {
  key: 3,
  class: "pull-more-tip"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_checkbox = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-checkbox");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-icon");
  const _component_SvgIcon = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("SvgIcon");
  const _component_van_loading = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-loading");
  const _component_van_count_down = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-count-down");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-popup");
  const _component_SocialContentPopup = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("SocialContentPopup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 文字链接类型（badge.vars.type === 'text'，如 trading_contest）：直接渲染 <a> 链接 "), $options.isTextLinkType ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("a", {
    key: 0,
    href: $options.textLinkUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    class: "badge-text-link",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])($options.textLinkStyle),
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])(() => {}, ["stop"]))
  }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.textLinkText), 13 /* TEXT, STYLE, PROPS */, _hoisted_1)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 其他类型：显示图标并支持弹框 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["tag-btn", ['kol_call', 'kol_holders'].includes($data.currentType) ? 'tag-badges' : '']),
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $data.show = true, ["stop", "prevent"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)], 2 /* CLASS */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_popup, {
    position: "bottom",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeStyle"])({
      width: '100%',
      height: $options.popupHeight,
      minHeight: 'auto',
      padding: '8px 0px'
    }),
    round: "",
    show: $data.show,
    "onUpdate:show": _cache[9] || (_cache[9] = $event => $data.show = $event),
    class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])([$data.activeTab === 'meaning' ? 'meaning-popup' : '', "popup-container tag-pop-container"]),
    teleport: "#app"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 标题栏 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_4, [$options.currentTypeIcon && $data.activeTab !== 'meaning' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
      key: 0,
      src: $options.currentTypeIcon,
      alt: "",
      class: "header-icon"
    }, null, 8 /* PROPS */, _hoisted_5)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.getTitle), 1 /* TEXT */), $options.totalCount > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.totalCount) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.holdingCount), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_8, [$data.activeTab !== 'meaning' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_checkbox, {
      key: 0,
      modelValue: $data.isHolding,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.isHolding = $event),
      "icon-size": "16px"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('inPosition')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), $data.activeTab !== 'meaning' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_checkbox, {
      key: 1,
      modelValue: $data.isFollowed,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.isFollowed = $event),
      "icon-size": "16px"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('followed')), 1 /* TEXT */)]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
      name: "cross",
      size: "18",
      onClick: _cache[4] || (_cache[4] = $event => $data.show = false)
    })])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 标签含义列表 "), $data.activeTab === 'meaning' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_10, [(Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($options.meaningListComputed, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
        key: index,
        class: "meaning-item",
        onClick: $event => $options.handleMeaningClick(item)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_12, [item.icon ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 0,
        src: item.icon,
        class: "meaning-icon",
        onError: _cache[5] || (_cache[5] = $event => $event.target.style.display = 'none')
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_13)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_SvgIcon, {
        key: 1,
        iconPath: item.iconPath,
        style: {
          "width": "20px",
          "height": "20px",
          "margin-right": "8px"
        }
      }, null, 8 /* PROPS */, ["iconPath"])), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.label), 1 /* TEXT */)]), item.count !== undefined ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.count) + "/" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.new_holding_count), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
        size: "14",
        name: "arrow"
      })])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 8 /* PROPS */, _hoisted_11);
    }), 128 /* KEYED_FRAGMENT */))])])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" KOL喊单 / 聪明钱同车 / CTO 等数据列表 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 表头（在 scroll-container 外部，与 popup-header 距离固定） "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" KOL喊单 "), $data.currentType === 'kol' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 0
    }, [_hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('holding') || '持仓'), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('callCount') || '次数'), 1 /* TEXT */), _hoisted_23, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", {
      class: "header-label time-label",
      onClick: _cache[6] || (_cache[6] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])((...args) => $options.toggleTimeFormat && $options.toggleTimeFormat(...args), ["stop"]))
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_24, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], !$data.isShowDate]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", _hoisted_25, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_1__["vShow"], $data.isShowDate]]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('latestCallTime') || '最新时间'), 1 /* TEXT */)])])])], 64 /* STABLE_FRAGMENT */)) : $data.currentType === 'kol_holders' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 1
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" KOL同车 "), _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('holding') || '持仓'), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('totalProfit') || '总收益'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : $data.currentType === 'smart' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      key: 2
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 聪明钱同车 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('address')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('holding') || '持仓'), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('totalProfit') || '总收益'), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 列表内容 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
      class: "scroll-container",
      onScroll: _cache[8] || (_cache[8] = (...args) => $options.onScroll && $options.onScroll(...args))
    }, [$data.listError ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('dataLoadFailed')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), $data.listLoading && $data.dataList.length === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_33, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_loading, {
      size: "20px"
    })])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["renderList"])($data.dataList, (item, index) => {
      var _item$wallet_logo, _item$wallet_logo2, _this$$store$state$av, _item$wallet_logo3, _item$wallet_logo4, _item$wallet_logo5, _item$wallet_logo6, _this$$store$state$av2, _item$wallet_logo7, _item$wallet_logo8, _item$wallet_logo9, _item$wallet_logo0, _item$wallet_logo1, _this$$store$state$av3;
      return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
        key: index,
        class: "table-row",
        onClick: $event => $data.currentType === 'kol' ? $options.handleKolRowClick(item) : $options.goLink(item)
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" KOL喊单 "), $data.currentType === 'kol' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 0
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_35, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_36, [(_item$wallet_logo = item.wallet_logo) !== null && _item$wallet_logo !== void 0 && _item$wallet_logo.logo ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 0,
        src: (_item$wallet_logo2 = item.wallet_logo) !== null && _item$wallet_logo2 !== void 0 && (_item$wallet_logo2 = _item$wallet_logo2.logo) !== null && _item$wallet_logo2 !== void 0 && _item$wallet_logo2.startsWith('http') ? item.wallet_logo.logo : `${(_this$$store$state$av = this.$store.state.ave_globalConfig) === null || _this$$store$state$av === void 0 ? void 0 : _this$$store$state$av.token_logo_url}${item.wallet_logo.logo}`,
        alt: "",
        class: "avatar"
      }, null, 8 /* PROPS */, _hoisted_37)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_38, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_39, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_40, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.remark || ((_item$wallet_logo3 = item.wallet_logo) === null || _item$wallet_logo3 === void 0 ? void 0 : _item$wallet_logo3.name)), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("svg", {
        width: "10",
        height: "11",
        viewBox: "0 0 10 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.copyText(item.wallet_address || item.account_address), ["stop"]),
        style: {
          "margin-left": "4px",
          "cursor": "pointer",
          "flex-shrink": "0"
        }
      }, _hoisted_43, 8 /* PROPS */, _hoisted_41))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_44, [_hoisted_45, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatFollowerCount((_item$wallet_logo4 = item.wallet_logo) === null || _item$wallet_logo4 === void 0 ? void 0 : _item$wallet_logo4.followers)), 1 /* TEXT */)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_46, [$options.formatNumber(item.balance_usd || 0) == 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_47, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_48, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('clearance')), 1 /* TEXT */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_49, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_50, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatCount(item.balance_usd || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_51, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatPercent(item.balance_ratio * 100)), 1 /* TEXT */)]))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_52, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_53, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.call_count || 0), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_54, [item.latest_call_time ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 0
      }, [!$data.isShowDate && $options.getTimestamp(item.latest_call_time) && _ctx.$f.formatTimeFromNow($options.getTimestamp(item.latest_call_time), true) < 60 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_count_down, {
        time: (60 - _ctx.$f.formatTimeFromNow($options.getTimestamp(item.latest_call_time), true)) * 1000,
        style: {
          "--van-count-down-text-color": "currentColor",
          "--van-count-down-line-height": "1",
          "--van-count-down-font-size": "12px"
        },
        key: item.latest_call_time
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(({
          total
        }) => [total > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          key: 0
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(Math.floor((60 * 1000 - total) / 1000) >= 0 ? Math.floor((60 * 1000 - total) / 1000) : 0) + "秒前 ", 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          key: 1
        }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatRelativeTime(item.latest_call_time)), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["time"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_55, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($data.isShowDate ? $options.formatTime(item.latest_call_time) : $options.formatRelativeTime(item.latest_call_time)), 1 /* TEXT */))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("span", _hoisted_56, "--"))])])], 64 /* STABLE_FRAGMENT */)) : $data.currentType === 'kol_holders' ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 1
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" KOL同车 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_57, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_58, [(_item$wallet_logo5 = item.wallet_logo) !== null && _item$wallet_logo5 !== void 0 && _item$wallet_logo5.logo ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 0,
        src: (_item$wallet_logo6 = item.wallet_logo) !== null && _item$wallet_logo6 !== void 0 && (_item$wallet_logo6 = _item$wallet_logo6.logo) !== null && _item$wallet_logo6 !== void 0 && _item$wallet_logo6.startsWith('http') ? item.wallet_logo.logo : `${(_this$$store$state$av2 = this.$store.state.ave_globalConfig) === null || _this$$store$state$av2 === void 0 ? void 0 : _this$$store$state$av2.token_logo_url}${item.wallet_logo.logo}`,
        alt: "",
        class: "avatar"
      }, null, 8 /* PROPS */, _hoisted_59)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), (_item$wallet_logo7 = item.wallet_logo) !== null && _item$wallet_logo7 !== void 0 && _item$wallet_logo7.vip_logo ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("img", {
        key: 1,
        src: (_item$wallet_logo8 = item.wallet_logo) === null || _item$wallet_logo8 === void 0 ? void 0 : _item$wallet_logo8.vip_logo,
        alt: "",
        class: "vip-logo"
      }, null, 8 /* PROPS */, _hoisted_60)) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_61, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_62, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_63, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.remark || ((_item$wallet_logo9 = item.wallet_logo) === null || _item$wallet_logo9 === void 0 ? void 0 : _item$wallet_logo9.name)), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("svg", {
        width: "10",
        height: "11",
        viewBox: "0 0 10 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.copyText(item.account_address), ["stop"]),
        style: {
          "margin-left": "4px",
          "cursor": "pointer",
          "flex-shrink": "0"
        }
      }, _hoisted_66, 8 /* PROPS */, _hoisted_64))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_67, [_hoisted_68, Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatFollowerCount((_item$wallet_logo0 = item.wallet_logo) === null || _item$wallet_logo0 === void 0 ? void 0 : _item$wallet_logo0.followers)), 1 /* TEXT */)])])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_69, [$options.formatNumber(item.balance_usd || 0) == 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_70, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_71, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('clearance')), 1 /* TEXT */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_72, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_73, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatCount(item.balance_usd || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_74, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatPercent(item.balance_ratio * 100)), 1 /* TEXT */)]))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_75, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_76, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["profit-value", $options.getProfitClass(item.total_profit)])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatProfitAmount(item.total_profit)), 3 /* TEXT, CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["profit-percent", $options.getProfitClass(item.total_profit_ratio)])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatProfitPercent(item.total_profit_ratio)), 3 /* TEXT, CLASS */)])])], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 2
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 聪明钱同车 / CTO "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_77, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_78, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
        onerror: "this.src='/icon-default.png'",
        src: (_item$wallet_logo1 = item.wallet_logo) !== null && _item$wallet_logo1 !== void 0 && (_item$wallet_logo1 = _item$wallet_logo1.logo) !== null && _item$wallet_logo1 !== void 0 && _item$wallet_logo1.startsWith('http') ? item.wallet_logo.logo : `${(_this$$store$state$av3 = this.$store.state.ave_globalConfig) === null || _this$$store$state$av3 === void 0 ? void 0 : _this$$store$state$av3.token_logo_url}${item.wallet_logo.logo}`,
        alt: "",
        class: "avatar"
      }, null, 8 /* PROPS */, _hoisted_79), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_80, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_81, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_82, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(item.remark || _ctx.$f.formatAddress(item.account_address)), 1 /* TEXT */), (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("svg", {
        width: "10",
        height: "11",
        viewBox: "0 0 10 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.copyText(item.remark || item.account_address), ["stop"]),
        style: {
          "margin-left": "4px",
          "cursor": "pointer",
          "flex-shrink": "0"
        }
      }, _hoisted_85, 8 /* PROPS */, _hoisted_83))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_86, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$f.formatAddress(item.account_address)), 1 /* TEXT */)])])]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_87, [$options.formatNumber(item.balance_usd || 0) == 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_88, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_89, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('clearance')), 1 /* TEXT */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_90, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_91, "$" + Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatCount(item.balance_usd || 0)), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_92, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatPercent(item.balance_ratio * 100)), 1 /* TEXT */)]))]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_93, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_94, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["profit-value", $options.getProfitClass(item.total_profit)])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatProfitAmount(item.total_profit)), 3 /* TEXT, CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_1__["normalizeClass"])(["profit-percent", $options.getProfitClass(item.total_profit_ratio)])
      }, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])($options.formatProfitPercent(item.total_profit_ratio)), 3 /* TEXT, CLASS */)])])], 64 /* STABLE_FRAGMENT */))], 8 /* PROPS */, _hoisted_34);
    }), 128 /* KEYED_FRAGMENT */)), !$data.listLoading && !$data.finished && $data.dataList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", {
      key: 2,
      class: "pull-more-tip",
      onClick: _cache[7] || (_cache[7] = (...args) => $options.onLoad && $options.onLoad(...args))
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('pullUpToLoadMore') || '上拉加载更多'), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), $data.finished && $data.dataList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_95, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('noMore') || '没有更多了'), 1 /* TEXT */)])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true)], 32 /* HYDRATE_EVENTS */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "show", "class"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" 社媒内容弹窗 "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_SocialContentPopup, {
    show: $data.socialContentVisible,
    "kol-info": $data.currentKolItem,
    "token-id": $options.getTokenId,
    "onUpdate:show": _cache[10] || (_cache[10] = $event => $data.socialContentVisible = $event)
  }, null, 8 /* PROPS */, ["show", "kol-info", "token-id"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".social-content-popup .popup-header[data-v-04980e24] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.24rem;\n  background: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.social-content-popup .popup-header .header-left[data-v-04980e24] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.social-content-popup .popup-header .header-left .van-icon[data-v-04980e24] {\n  cursor: pointer;\n  color: #333;\n}\n.social-content-popup .popup-header .header-title[data-v-04980e24] {\n  flex: 2;\n  text-align: center;\n  font-size: 0.32rem;\n  font-weight: 600;\n  color: #333;\n}\n.social-content-popup .popup-header .header-right[data-v-04980e24] {\n  flex: 1;\n}\n.social-content-popup .social-content-list[data-v-04980e24] {\n  padding: 0 0.32rem;\n  overflow-y: auto;\n  max-height: calc(100% - 1.2rem);\n}\n.social-content-popup .social-content-list .loading-content[data-v-04980e24] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.8rem 0;\n}\n.social-content-popup .social-content-list .empty-content[data-v-04980e24] {\n  text-align: center;\n  padding: 0.8rem 0;\n  color: #959A9F;\n  font-size: 0.28rem;\n}\n.social-content-popup .social-content-list .social-item[data-v-04980e24] {\n  padding: 0.2rem 0;\n  cursor: pointer;\n}\n.social-content-popup .social-content-list .social-item[data-v-04980e24]:active {\n  background: #f9f9f9;\n}\n.social-content-popup .social-content-list .social-item[data-v-04980e24]:last-child {\n  border-bottom: none;\n}\n.social-content-popup .social-content-list .social-item .social-header[data-v-04980e24] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.16rem;\n  margin-bottom: 0.16rem;\n}\n.social-content-popup .social-content-list .social-item .social-header .social-avatar[data-v-04980e24] {\n  width: 0.8rem;\n  height: 0.8rem;\n  border-radius: 50%;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.social-content-popup .social-content-list .social-item .social-header .social-info[data-v-04980e24] {\n  flex: 1;\n  min-width: 0;\n}\n.social-content-popup .social-content-list .social-item .social-header .social-info .social-name[data-v-04980e24] {\n  font-size: 0.28rem;\n  color: #333;\n  font-weight: 600;\n  margin-bottom: 0.04rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.social-content-popup .social-content-list .social-item .social-header .social-info .social-username[data-v-04980e24] {\n  font-size: 0.24rem;\n  color: #959A9F;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.social-content-popup .social-content-list .social-item .social-header .social-time[data-v-04980e24] {\n  font-size: 0.24rem;\n  color: #959A9F;\n  flex-shrink: 0;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-text[data-v-04980e24] {\n  font-size: 0.28rem;\n  color: #333;\n  margin-bottom: 0.16rem;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-text[data-v-04980e24] a {\n  color: #1d9bf0;\n  text-decoration: none;\n  word-break: break-all;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-text[data-v-04980e24] a:active {\n  opacity: 0.7;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-text[data-v-04980e24] .token-address {\n  color: #ffa622;\n  word-break: break-all;\n}\n.social-content-popup .social-content-list .social-item .social-body .translation-toggle[data-v-04980e24] {\n  display: flex;\n  align-items: center;\n  gap: 0.08rem;\n  margin-bottom: 0.16rem;\n  cursor: pointer;\n  color: #959A9F;\n  font-size: 0.26rem;\n}\n.social-content-popup .social-content-list .social-item .social-body .translation-toggle svg[data-v-04980e24] {\n  flex-shrink: 0;\n}\n.social-content-popup .social-content-list .social-item .social-body .translation-toggle[data-v-04980e24]:active {\n  opacity: 0.7;\n}\n.social-content-popup .social-content-list .social-item .social-body .translated-text[data-v-04980e24] {\n  background: #f5f5f5;\n  border-radius: 0.16rem;\n  padding: 0.24rem;\n  margin-bottom: 0.16rem;\n  font-size: 0.28rem;\n  color: #333;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.social-content-popup .social-content-list .social-item .social-body .translated-text[data-v-04980e24] a {\n  color: #1d9bf0;\n  text-decoration: none;\n  word-break: break-all;\n}\n.social-content-popup .social-content-list .social-item .social-body .translated-text[data-v-04980e24] a:active {\n  opacity: 0.7;\n}\n.social-content-popup .social-content-list .social-item .social-body .translated-text[data-v-04980e24] .token-address {\n  color: #ffa622;\n  word-break: break-all;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-medias[data-v-04980e24] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.08rem;\n  margin-bottom: 0.16rem;\n}\n.social-content-popup .social-content-list .social-item .social-body .social-medias .media-image[data-v-04980e24] {\n  width: 100%;\n  max-height: 4rem;\n  object-fit: cover;\n  border-radius: 0.16rem;\n  cursor: pointer;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet[data-v-04980e24] {\n  border: 0.02rem solid #e0e0e0;\n  border-radius: 0.16rem;\n  padding: 0.24rem;\n  margin-top: 0.16rem;\n  background: #fafafa;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-header[data-v-04980e24] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n  margin-bottom: 0.16rem;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-header .quoted-avatar[data-v-04980e24] {\n  width: 0.64rem;\n  height: 0.64rem;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-header .quoted-info[data-v-04980e24] {\n  flex: 1;\n  min-width: 0;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-header .quoted-info .quoted-name[data-v-04980e24] {\n  font-size: 0.26rem;\n  color: #333;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-header .quoted-info .quoted-username[data-v-04980e24] {\n  font-size: 0.22rem;\n  color: #959A9F;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-text[data-v-04980e24] {\n  font-size: 0.24rem;\n  color: #666;\n  line-height: 1.6;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 0.12rem;\n}\n.social-content-popup .social-content-list .social-item .social-body .quoted-tweet .quoted-translated-text[data-v-04980e24] {\n  background: #f0f0f0;\n  border-radius: 0.12rem;\n  padding: 0.2rem;\n  margin-top: 0.16rem;\n  font-size: 0.24rem;\n  color: #333;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.social-content-popup .social-content-list .load-more[data-v-04980e24],\n.social-content-popup .social-content-list .no-more[data-v-04980e24] {\n  text-align: center;\n  padding: 0.24rem 0;\n  color: #959A9F;\n  font-size: 0.24rem;\n  cursor: pointer;\n}\n.social-content-popup .social-content-list .load-more.load-more[data-v-04980e24]:active,\n.social-content-popup .social-content-list .no-more.load-more[data-v-04980e24]:active {\n  background: #f9f9f9;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".meaning-popup[data-v-9dfe44a0] {\n  min-height: 4rem;\n}\n.tag-btn[data-v-9dfe44a0] {\n  line-height: 1;\n  display: flex;\n  min-height: 0.36rem;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  word-break: keep-all;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: manipulation;\n  cursor: pointer;\n}\n.tag-btn.tag-btn-bg[data-v-9dfe44a0] {\n  background: rgba(135, 143, 188, 0.2);\n  border-radius: 0.08rem;\n  padding: 0.06rem 0.08rem;\n}\n.vip-logo[data-v-9dfe44a0] {\n  width: 0.24rem;\n  height: 0.24rem;\n  position: absolute;\n  left: 0.6rem;\n  bottom: 0;\n  border-radius: 100%;\n}\n.w-content[data-v-9dfe44a0] {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: height 0.3s ease;\n}\n.popup-header[data-v-9dfe44a0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.24rem 0.24rem 0;\n  background: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  flex-shrink: 0;\n}\n.popup-header .header-back[data-v-9dfe44a0] {\n  cursor: pointer;\n  margin-right: 0.16rem;\n  display: flex;\n  align-items: center;\n  color: #333;\n}\n.popup-header .header-title-left[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.06rem;\n}\n.popup-header .header-title-left .header-icon[data-v-9dfe44a0] {\n  width: 0.4rem;\n  height: 0.4rem;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-top: -0.04rem;\n}\n.popup-header .header-title-left .header-title[data-v-9dfe44a0] {\n  font-size: 0.32rem;\n  font-weight: 600;\n  color: #333;\n}\n.popup-header .header-title-left .count-badge[data-v-9dfe44a0] {\n  background: #F8F8F8;\n  color: var(--text-color);\n  padding: 0.08rem 0.08rem 0.04rem;\n  border-radius: 0.08rem;\n  font-size: 0.24rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.popup-header .header-right[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.24rem;\n}\n.popup-header .header-right .van-checkbox[data-v-9dfe44a0] {\n  font-size: 0.26rem;\n  color: #959A9F;\n}\n.popup-header .header-right .van-checkbox[data-v-9dfe44a0] .van-checkbox__label {\n  font-size: 0.26rem;\n  color: #959A9F;\n}\n.popup-header .header-right .van-icon[data-v-9dfe44a0] {\n  cursor: pointer;\n  color: #959A9F;\n}\n.color-red[data-v-9dfe44a0] {\n  color: #F6465D !important;\n  font-weight: normal !important;\n}\n.meaning-content[data-v-9dfe44a0] {\n  padding: 0 0.32rem;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.meaning-list .meaning-item[data-v-9dfe44a0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.24rem 0;\n  border-bottom: 0.02rem solid #f0f0f0;\n  cursor: pointer;\n}\n.meaning-list .meaning-item[data-v-9dfe44a0]:last-child {\n  border-bottom: none;\n}\n.meaning-list .meaning-item .meaning-left[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  font-size: 0.28rem;\n  color: #333;\n}\n.meaning-list .meaning-item .meaning-left .meaning-icon[data-v-9dfe44a0] {\n  width: 0.4rem;\n  height: 0.4rem;\n  margin-right: 0.16rem;\n  border-radius: 100%;\n  object-fit: cover;\n}\n.meaning-list .meaning-item .meaning-right[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.08rem;\n}\n.meaning-list .meaning-item .meaning-right .count[data-v-9dfe44a0] {\n  background: rgba(18, 184, 134, 0.1);\n  color: #12B886;\n  padding: 0.04rem 0.16rem;\n  border-radius: 0.08rem;\n  font-size: 0.24rem;\n}\n.list-content[data-v-9dfe44a0] {\n  flex: 1;\n  min-height: 0;\n}\n.list-content .top-stats[data-v-9dfe44a0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.24rem 0.32rem;\n  background: #fff;\n}\n.list-content .top-stats .stats-label[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #333;\n}\n.list-content .top-stats .stats-count[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #959A9F;\n}\n.list-content .table-header[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  padding: 0.28rem 0.32rem 0.04rem;\n  font-size: 0.24rem;\n  color: #959A9F;\n  background: #fff;\n}\n.list-content .table-header .col[data-v-9dfe44a0] {\n  flex: 1;\n  text-align: center;\n}\n.list-content .table-header .col.col-kol[data-v-9dfe44a0] {\n  flex: 1.5;\n  text-align: left;\n}\n.list-content .table-header .col.col-address[data-v-9dfe44a0] {\n  flex: 1.5;\n  text-align: left;\n}\n.list-content .table-header .col.col-count[data-v-9dfe44a0] {\n  flex: 0.8;\n}\n.list-content .table-header .col.col-time[data-v-9dfe44a0] {\n  flex: 1;\n}\n.list-content .table-header .col.col-hold[data-v-9dfe44a0] {\n  flex: 0.8;\n  text-align: right;\n}\n.list-content .table-header .col.col-profit[data-v-9dfe44a0] {\n  flex: 1;\n  text-align: right;\n}\n.list-content .table-header .col.col-count-time[data-v-9dfe44a0] {\n  flex: 1.2;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.04rem;\n}\n.list-content .table-header .col.col-count-time .count-time-header[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.04rem;\n  font-size: 0.24rem;\n  color: #959A9F;\n  white-space: nowrap;\n}\n.list-content .table-header .col.col-count-time .count-time-header .header-label[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.04rem;\n}\n.list-content .table-header .col.col-count-time .count-time-header .header-label.time-label[data-v-9dfe44a0] {\n  cursor: pointer;\n  text-decoration: underline;\n  text-decoration-style: dashed;\n  text-underline-offset: 0.06rem;\n}\n.list-content .table-header .col.col-count-time .count-time-header .header-label.time-label i[data-v-9dfe44a0] {\n  font-size: 0.24rem;\n}\n.list-content .table-header .col.col-count-time .count-time-header .header-divider[data-v-9dfe44a0] {\n  color: #959A9F;\n  margin: 0 0.02rem;\n}\n.list-content .scroll-container[data-v-9dfe44a0] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n}\n.list-content .list-loading[data-v-9dfe44a0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.8rem 0;\n}\n.list-content .table-row[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  padding: 0.2rem 0.32rem;\n  cursor: pointer;\n}\n.list-content .table-row[data-v-9dfe44a0]:active {\n  background: #f9f9f9;\n}\n.list-content .table-row .col[data-v-9dfe44a0] {\n  flex: 1;\n  font-size: 0.24rem;\n}\n.list-content .table-row .col.col-kol[data-v-9dfe44a0] {\n  flex: 1.4;\n  text-align: left;\n}\n.list-content .table-row .col.col-kol .user-info[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n}\n.list-content .table-row .col.col-kol .user-info .avatar[data-v-9dfe44a0] {\n  width: 0.72rem;\n  height: 0.72rem;\n  border-radius: 50%;\n}\n.list-content .table-row .col.col-kol .user-info .user-details .username-row[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.08rem;\n}\n.list-content .table-row .col.col-kol .user-info .user-details .username-row .username[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #333;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 1.6rem;\n}\n.list-content .table-row .col.col-kol .user-info .user-details .follower-count[data-v-9dfe44a0] {\n  font-size: 0.22rem;\n  color: #959A9F;\n}\n.list-content .table-row .col.col-address[data-v-9dfe44a0] {\n  flex: 1.5;\n  text-align: left;\n}\n.list-content .table-row .col.col-address .address-info[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  gap: 0.16rem;\n}\n.list-content .table-row .col.col-address .address-info .avatar[data-v-9dfe44a0] {\n  width: 0.72rem;\n  height: 0.72rem;\n  border-radius: 50%;\n}\n.list-content .table-row .col.col-address .address-info .address-details .address-row[data-v-9dfe44a0] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.08rem;\n}\n.list-content .table-row .col.col-address .address-info .address-details .address-row .address-text[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #333;\n  font-weight: 500;\n}\n.list-content .table-row .col.col-address .address-info .address-details .address-sub[data-v-9dfe44a0] {\n  font-size: 0.22rem;\n  color: #959A9F;\n}\n.list-content .table-row .col.col-count[data-v-9dfe44a0] {\n  flex: 0.8;\n  color: #333;\n  font-size: 0.28rem;\n  text-align: center;\n}\n.list-content .table-row .col.col-time[data-v-9dfe44a0] {\n  flex: 1;\n  color: #333;\n  font-size: 0.26rem;\n  text-align: center;\n}\n.list-content .table-row .col.col-count-time[data-v-9dfe44a0] {\n  flex: 1.2;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.08rem;\n}\n.list-content .table-row .col.col-count-time .count-value[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #333;\n  font-weight: 500;\n}\n.list-content .table-row .col.col-count-time .time-value[data-v-9dfe44a0] {\n  font-size: 0.22rem;\n  color: #959A9F;\n}\n.list-content .table-row .col.col-hold[data-v-9dfe44a0] {\n  flex: 0.8;\n  text-align: right;\n}\n.list-content .table-row .col.col-hold .hold-info[data-v-9dfe44a0] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  min-height: 0.72rem;\n}\n.list-content .table-row .col.col-hold .hold-info .hold-value[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  color: #333;\n  font-weight: 500;\n  margin-bottom: 0.04rem;\n  min-width: 1.2rem;\n  text-align: right;\n}\n.list-content .table-row .col.col-hold .hold-info .hold-value.color-red[data-v-9dfe44a0] {\n  margin-bottom: 0;\n}\n.list-content .table-row .col.col-hold .hold-info .hold-percent[data-v-9dfe44a0] {\n  font-size: 0.22rem;\n  color: #959A9F;\n}\n.list-content .table-row .col.col-profit[data-v-9dfe44a0] {\n  flex: 1;\n  text-align: right;\n}\n.list-content .table-row .col.col-profit .profit-info[data-v-9dfe44a0] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  min-height: 0.72rem;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-value[data-v-9dfe44a0] {\n  font-size: 0.28rem;\n  font-weight: 500;\n  margin-bottom: 0.04rem;\n  min-width: 1.2rem;\n  text-align: right;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-value.profit-positive[data-v-9dfe44a0] {\n  color: #12B886;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-value.profit-negative[data-v-9dfe44a0] {\n  color: #F6465D;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-percent[data-v-9dfe44a0] {\n  font-size: 0.22rem;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-percent.profit-positive[data-v-9dfe44a0] {\n  color: #12B886;\n}\n.list-content .table-row .col.col-profit .profit-info .profit-percent.profit-negative[data-v-9dfe44a0] {\n  color: #F6465D;\n}\n.list-content .list-error[data-v-9dfe44a0] {\n  text-align: center;\n  padding: 0.4rem;\n  color: #959A9F;\n  font-size: 0.24rem;\n}\n.list-content .pull-more-tip[data-v-9dfe44a0] {\n  text-align: center;\n  padding: 0.2rem;\n  color: #959A9F;\n  font-size: 0.24rem;\n}\n.badge-text-link[data-v-9dfe44a0] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.2rem;\n  color: #3f80f7;\n  text-decoration: none;\n  white-space: nowrap;\n  margin-left: 0.08rem;\n  display: inline-block;\n  max-width: 1.4rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.badge-text-link[data-v-9dfe44a0]:hover {\n  text-decoration: underline;\n  opacity: 0.8;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tag-pop-container {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("67583d8b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e1b6e8d4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6cffc042", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/tokenTag/SocialContentPopup.vue":
/*!********************************************************!*\
  !*** ./src/components/tokenTag/SocialContentPopup.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialContentPopup_vue_vue_type_template_id_04980e24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true */ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true");
/* harmony import */ var _SocialContentPopup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialContentPopup.vue?vue&type=script&lang=js */ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss */ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_SocialContentPopup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SocialContentPopup_vue_vue_type_template_id_04980e24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-04980e24"],['__file',"src/components/tokenTag/SocialContentPopup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./SocialContentPopup.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=style&index=0&id=04980e24&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_style_index_0_id_04980e24_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true ***!
  \**************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_template_id_04980e24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/SocialContentPopup.vue?vue&type=template&id=04980e24&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_SocialContentPopup_vue_vue_type_template_id_04980e24_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/tokenTag/tagMeaningPop.vue":
/*!***************************************************!*\
  !*** ./src/components/tokenTag/tagMeaningPop.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tagMeaningPop_vue_vue_type_template_id_9dfe44a0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true */ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true");
/* harmony import */ var _tagMeaningPop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagMeaningPop.vue?vue&type=script&lang=js */ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss */ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss");
/* harmony import */ var _tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss */ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__);








const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4___default()(_tagMeaningPop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_tagMeaningPop_vue_vue_type_template_id_9dfe44a0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-9dfe44a0"],['__file',"src/components/tokenTag/tagMeaningPop.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss":
/*!************************************************************************************************************!*\
  !*** ./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=0&id=9dfe44a0&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_0_id_9dfe44a0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss":
/*!************************************************************************************************!*\
  !*** ./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=style&index=1&id=9dfe44a0&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_style_index_1_id_9dfe44a0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true ***!
  \*********************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_template_id_9dfe44a0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/tokenTag/tagMeaningPop.vue?vue&type=template&id=9dfe44a0&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_tagMeaningPop_vue_vue_type_template_id_9dfe44a0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/mixin/badge.js":
/*!****************************!*\
  !*** ./src/mixin/badge.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getBadgeType(badgeType) {
      if (!badgeType) return '';
      // text 类型是特殊的文字链接类型，不需要弹框
      if (badgeType === 'text') return 'text_link';
      const map = {
        'kol_call': 'kol',
        'kol_holders': 'kol_holders',
        'kol': 'kol',
        'smart_money_holders': 'smart',
        'smart_holders': 'smart',
        'smart_money': 'smart',
        'smart': 'smart',
        'cto': 'cto'
      };
      return map[badgeType] || badgeType;
    },
    getBadgeMeaningList(row) {
      var _row$token_badges;
      if (!(row !== null && row !== void 0 && (_row$token_badges = row.token_badges) !== null && _row$token_badges !== void 0 && _row$token_badges.length)) return [];
      return row.token_badges.filter(b => this.getBadgeType(b.type)).map(b => {
        var _b$vars;
        return {
          icon: `${this.$store.state.s3BaseUrl}${b.icon}`,
          label: b.text || b.type,
          type: this.getBadgeType(b.type),
          count: (_b$vars = b.vars) === null || _b$vars === void 0 ? void 0 : _b$vars.count
        };
      });
    },
    getValidBadges(row) {
      var _row$token_badges2;
      if (!(row !== null && row !== void 0 && (_row$token_badges2 = row.token_badges) !== null && _row$token_badges2 !== void 0 && _row$token_badges2.length)) return [];
      return row.token_badges.filter(b => this.getBadgeType(b.type));
    }
  }
});

/***/ })

}]);