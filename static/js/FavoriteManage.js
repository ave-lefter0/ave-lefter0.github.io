(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FavoriteManage"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/editRemark.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditRemark',
  props: {
    visible: Boolean,
    confirmSubmit: Function,
    initRemark: String
  },
  emits: ['update:visible', 'onSubmit'],
  data() {
    const validator1 = val => (val === null || val === void 0 ? void 0 : val.length) <= 50;
    return {
      title: this.initRemark || '',
      rules: [{
        required: false,
        message: this.$t('enterRemark')
      }, {
        validator: validator1,
        message: this.$t('maximum50characters')
      }]
    };
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit('update:visible', value);
      }
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.title = this.initRemark || '';
      }
    }
  },
  methods: {
    onSubmit() {
      this.confirmSubmit(this.title);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.vue */ "./src/views/favoriteManage/token.vue");
/* harmony import */ var _nft_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nft.vue */ "./src/views/favoriteManage/nft.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FavoriteManage',
  data() {
    return {
      active: this.$route.params.id || '1',
      show: false,
      actions: [{
        name: 'Token',
        value: '1'
      }, {
        name: 'NFT',
        value: '2'
      }]
    };
  },
  computed: {
    curComponent() {
      if (this.$route.params.type === '2') {
        return _nft_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
      }
      return _token_vue__WEBPACK_IMPORTED_MODULE_0__["default"];
    },
    activeName() {
      let o = {
        1: 'Token',
        2: 'NFT'
      };
      return (o === null || o === void 0 ? void 0 : o[this.$route.params.type]) || 'Token';
    }
  },
  watch: {
    $route(val) {
      if (val.name === 'FavoriteManage') {
        this.active = this.$route.params.id || '1';
      }
    }
  },
  methods: {
    select(item) {
      this.$router.replace({
        name: 'FavoriteManage',
        params: {
          type: item.value,
          id: this.$route.params.id || '1'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/nft.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/changeGroup.vue */ "./src/components/changeGroup.vue");
/* harmony import */ var _components_changeName_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/changeName.vue */ "./src/components/changeName.vue");
/* harmony import */ var _components_editRemark_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/editRemark.vue */ "./src/components/editRemark.vue");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ "./src/api/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NftFavoriteManage',
  components: {
    ChangeGroup: _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChangeName: _components_changeName_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditRemark: _components_editRemark_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      activeGroup: 0,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      selectedToken: {},
      favoritesList: [],
      curGroup: {},
      show: false,
      actions: [{
        name: 'Token',
        value: '1'
      }, {
        name: 'NFT',
        value: '2'
      }],
      curRemark: '',
      curToken: {}
    };
  },
  computed: {
    groups() {
      return this.$store.state.userNftFavoriteGroups;
    },
    active() {
      return this.$route.params.id || '1';
    },
    activeName() {
      let o = {
        1: 'Token',
        2: 'NFT'
      };
      return (o === null || o === void 0 ? void 0 : o[this.$route.params.type]) || 'Token';
    }
  },
  watch: {
    '$route.params.type'(val) {
      if (val === '2') {
        this.getUserFavorites();
      }
    },
    activeGroup() {
      this.getUserFavorites();
    },
    groups: {
      handler() {
        this.activeGroup = 0;
      },
      deep: true
    },
    '$store.state.currentAccount'(val) {
      if (val) {
        this.getUserFavorites();
      }
    }
  },
  created() {
    this.getUserFavorites();
  },
  methods: {
    init() {
      this.getUserFavorites();
    },
    async getUserFavorites() {
      this.favoritesList = await Object(_api__WEBPACK_IMPORTED_MODULE_3__["getNftFavoriteList"])(this.activeGroup).catch(async () => []);
      console.log('favoritesList', this.favoritesList);
    },
    switchGroup(item) {
      this.selectedToken = item;
      this.visible1 = true;
    },
    tokenSetTop(item, index) {
      if (index === 0) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["changeNftFavoritesTop"])(item.id, this.activeGroup).then(res => {
        if (res) {
          this.getUserFavorites();
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
        } else {
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }
      }).catch(() => {
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    },
    changeNftFavoritesIndex(item, index, direction) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let id = item.id;
      let j = index + direction;
      if (j < 0 || j + 1 > this.favoritesList.length) {
        return;
      }
      let item1 = this.favoritesList[j];
      let id1 = item1.id;
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["changeNftFavoritesIndex"])(id, id1, this.activeGroup).then(() => {
        this.getUserFavorites();
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    confirmSwitchGroup(id) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      if (this.activeGroup !== id) {
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_3__["moveNftFavoriteGroup"])(this.selectedToken.id, id).then(() => {
          this.getUserFavorites();
          this.$store.dispatch('getUserFavorites');
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
        this.visible1 = false;
      }
    },
    addNftFavoriteGroup(val) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["addNftFavoriteGroup"])(val).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
        this.visible2 = false;
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
    removeNftFavoriteGroup(item) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      this.$dialog.confirm({
        // title: this.$t('tips'),
        message: this.$t('removeFavGroupTips'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        // on confirm
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_3__["removeNftFavoriteGroup"])(item.group_id).then(() => {
          this.$store.dispatch('getUserFavoriteGroups');
          this.getUserFavorites();
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
          this.visible2 = false;
        }).catch(err => {
          console.log(err);
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }).finally(() => {
          toast.clear();
        });
      }).catch(() => {
        // on cancel
      });
    },
    setTopNftFavoriteGroup(item, index) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      if (index === 0) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["setTopNftFavoriteGroup"])(item.group_id).then(res => {
        if (res) {
          this.$store.dispatch('getUserFavoriteGroups');
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
        } else {
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }
      }).catch(() => {
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    },
    changeIndexNftFavoriteGroup(item, index, direction) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let id = item.group_id;
      let j = index + direction;
      if (j < 0 || j + 1 > this.groups.length) {
        return;
      }
      let item1 = this.groups[j];
      let id1 = item1.group_id;
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["changeIndexNftFavoriteGroup"])(id, id1).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.visible3 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    rename(item) {
      this.curGroup = item;
      this.visible3 = true;
    },
    changeNftFavoriteGroupName(name) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["changeNftFavoriteGroupName"])(name, this.curGroup.group_id).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.visible3 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    select(item) {
      this.$router.replace({
        name: 'FavoriteManage',
        params: {
          type: item.value,
          id: this.$route.params.id || '1'
        }
      });
    },
    handleEditRemark(item) {
      this.curRemark = item.remark || '';
      this.curToken = item;
      this.visible4 = true;
    },
    confirmEditRemark(remark) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_3__["editNftFavRemark"])(this.curToken.id, remark).then(() => {
        this.getUserFavorites();
        this.visible4 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
      }).catch(err => {
        console.log(err);
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/token.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/changeGroup.vue */ "./src/components/changeGroup.vue");
/* harmony import */ var _components_changeName_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/changeName.vue */ "./src/components/changeName.vue");
/* harmony import */ var _components_editRemark_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/editRemark.vue */ "./src/components/editRemark.vue");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api */ "./src/api/index.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TokenFavoriteManage',
  components: {
    ChangeGroup: _components_changeGroup_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChangeName: _components_changeName_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EditRemark: _components_editRemark_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      activeGroup: 0,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      selectedToken: {},
      favoritesList: [],
      curGroup: {},
      show: false,
      actions: [{
        name: 'Token',
        value: '1'
      }, {
        name: 'NFT',
        value: '2'
      }],
      curRemark: '',
      curToken: {},
      listLoading: false,
      listError: false,
      finished: false,
      currentPage: 1,
      pageSize: 20
    };
  },
  computed: {
    groups() {
      return this.$store.state.userFavoriteGroups;
    },
    active() {
      var _this$$route$params;
      return ((_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.id) || '1';
    }
  },
  watch: {
    '$route.params.type'(val) {
      if (val === '1') {
        this.getUserFavorites();
      }
    },
    activeGroup() {
      this.resetList();
      this.getUserFavorites(1);
    },
    groups: {
      handler() {
        this.activeGroup = 0;
      },
      deep: true
    },
    '$store.state.currentAccount'(val) {
      if (val) {
        this.getUserFavorites();
      }
    }
  },
  created() {
    this.getUserFavorites();
  },
  methods: {
    init() {
      this.getUserFavorites();
    },
    async getUserFavorites(page = 1) {
      try {
        let data = [];
        try {
          data = await Object(_api__WEBPACK_IMPORTED_MODULE_5__["getFavoriteList"])(this.activeGroup, page);
          this.listError = false;
        } catch (err) {
          console.error('Failed to get favorite list:', err);
          this.favoritesList = [];
          this.listError = true;
          return;
        }
        if (page === 1 && data.length === 0) return;
        const list = data.map(i => ({
          ...i,
          id: i.token + '-' + i.chain,
          address: i.token,
          network: i.chain,
          priceChange24h: i !== null && i !== void 0 && i.price_change ? (i === null || i === void 0 ? void 0 : i.price_change) / 100 : 0,
          priceUSD: (i === null || i === void 0 ? void 0 : i.current_price_usd) || 0
        }));
        if (page === 1) {
          this.favoritesList = list;
        } else {
          this.favoritesList = [...this.favoritesList, ...list];
        }

        // 判断是否还有更多数据
        this.finished = list.length === 0;
      } catch (err) {
        console.error(err);
        this.finished = true;
        this.listError = true;
      }
      this.listLoading = false;
    },
    onLoad() {
      this.listLoading = true;
      this.getUserFavorites(this.currentPage + 1);
      this.currentPage++;
    },
    resetList() {
      this.currentPage = 1;
      this.finished = false;
      this.listLoading = false;
      this.listError = false;
      this.favoritesList = [];
    },
    switchGroup(item) {
      this.selectedToken = item;
      this.visible1 = true;
    },
    tokenSetTop(item, index) {
      if (index === 0) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["changeFavoritesTop"])(item.token + '-' + item.chain, this.activeGroup).then(res => {
        if (res) {
          this.getUserFavorites();
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
        } else {
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }
      }).catch(() => {
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    },
    changeFavoritesIndex(item, index, direction) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let id = item.token + '-' + item.chain;
      let j = index + direction;
      if (j < 0 || j + 1 > this.favoritesList.length) {
        return;
      }
      let item1 = this.favoritesList[j];
      let id1 = item1.token + '-' + item1.chain;
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["changeFavoritesIndex"])(id, id1, this.activeGroup).then(() => {
        this.getUserFavorites();
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    confirmSwitchGroup(id) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      if (this.activeGroup !== id) {
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_5__["moveFavoriteGroup"])(this.selectedToken.token + '-' + this.selectedToken.chain, id).then(() => {
          this.getUserFavorites();
          this.$store.dispatch('getUserFavorites');
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
        this.visible1 = false;
      }
    },
    addFavoriteGroup(val) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["addFavoriteGroup"])(val).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
        this.visible2 = false;
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
    removeFavoriteGroup(item) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      this.$dialog.confirm({
        // title: this.$t('tips'),
        message: this.$t('removeFavGroupTips'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        // on confirm
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_5__["removeFavoriteGroup"])(item.group_id).then(() => {
          this.$store.dispatch('getUserFavoriteGroups');
          this.getUserFavorites();
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
          this.visible2 = false;
        }).catch(err => {
          console.log(err);
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }).finally(() => {
          toast.clear();
        });
      }).catch(() => {
        // on cancel
      });
    },
    setTopFavoriteGroup(item, index) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      if (index === 0) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["setTopFavoriteGroup"])(item.group_id).then(res => {
        if (res) {
          this.$store.dispatch('getUserFavoriteGroups');
          this.$notify({
            type: 'success',
            message: this.$t('success')
          });
        } else {
          this.$notify({
            type: 'danger',
            message: this.$t('fail')
          });
        }
      }).catch(() => {
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    },
    changeIndexFavoriteGroup(item, index, direction) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let id = item.group_id;
      let j = index + direction;
      if (j < 0 || j + 1 > this.groups.length) {
        return;
      }
      let item1 = this.groups[j];
      let id1 = item1.group_id;
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["changeIndexFavoriteGroup"])(id, id1).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.visible3 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    rename(item) {
      this.curGroup = item;
      this.visible3 = true;
    },
    changeFavoriteGroupName(name) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["changeFavoriteGroupName"])(name, this.curGroup.group_id).then(() => {
        this.$store.dispatch('getUserFavoriteGroups');
        this.visible3 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
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
    select(item) {
      var _this$$route$params2;
      this.$router.replace({
        name: 'FavoriteManage',
        params: {
          type: item.value,
          id: ((_this$$route$params2 = this.$route.params) === null || _this$$route$params2 === void 0 ? void 0 : _this$$route$params2.id) || '1'
        }
      });
    },
    handleEditRemark(item) {
      this.curRemark = item.remark || '';
      this.curToken = item;
      this.visible4 = true;
    },
    confirmEditRemark(remark) {
      if (!this.$f.verifyLogin()) {
        return;
      }
      let toast = this.$toast.loading({
        // message: '操作中...',
        forbidClick: true,
        duration: 0
      });
      let tokenId = this.curToken.token + '-' + this.curToken.chain;
      Object(_api__WEBPACK_IMPORTED_MODULE_5__["editTokenFavRemark"])(tokenId, remark).then(() => {
        this.getUserFavorites();
        this.visible4 = false;
        this.$notify({
          type: 'success',
          message: this.$t('success')
        });
      }).catch(err => {
        console.log(err);
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        toast.clear();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-b56fd18c"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "popup-title"
};
const _hoisted_2 = {
  class: "footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_form = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-form");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_popup, {
    show: $options.dialogVisible,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => $options.dialogVisible = $event),
    class: "popup-container",
    closeable: true,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "center",
    teleport: "#app",
    style: {
      width: '90%',
      minHeight: '5rem'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('editRemark')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "popup-content",
      onSubmit: $options.onSubmit
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
        modelValue: $data.title,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.title = $event),
        label: "",
        placeholder: _ctx.$t('maximum50characters'),
        clearable: "",
        rules: $data.rules
      }, null, 8 /* PROPS */, ["modelValue", "placeholder", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "btn",
        type: "default",
        round: "",
        onClick: _cache[1] || (_cache[1] = $event => $options.dialogVisible = false)
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('cancel')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "btn",
        "native-type": "submit",
        type: "primary",
        round: ""
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm1')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      })])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_action_sheet = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-action-sheet");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[1] || (_cache[1] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2"
  }, {
    title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
      class: "tab-top",
      active: $data.active,
      "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.active = $event),
      type: "card",
      color: "#fff",
      background: "#2C3254",
      "title-active-color": "#878FBC",
      "title-inactive-color": "#878FBC"
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
        title: _ctx.$t('favoriteManage'),
        name: "1",
        replace: "",
        to: {
          name: 'FavoriteManage',
          params: {
            type: _ctx.$route.params.type || '1',
            id: '1'
          }
        }
      }, null, 8 /* PROPS */, ["title", "to"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
        title: _ctx.$t('groupManage'),
        name: "2",
        replace: "",
        to: {
          name: 'FavoriteManage',
          params: {
            type: _ctx.$route.params.type || '1',
            id: '2'
          }
        }
      }, null, 8 /* PROPS */, ["title", "to"])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["active"])]),
    _: 1 /* STABLE */
  }), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDynamicComponent"])($options.curComponent))), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_action_sheet, {
    show: $data.show,
    "onUpdate:show": _cache[2] || (_cache[2] = $event => $data.show = $event),
    actions: $data.actions,
    "cancel-text": _ctx.$t('cancel'),
    onSelect: $options.select,
    "close-on-click-action": ""
  }, null, 8 /* PROPS */, ["show", "actions", "cancel-text", "onSelect"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-791ce968"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  class: "fav-tabs-container"
};
const _hoisted_3 = {
  class: "table-list"
};
const _hoisted_4 = {
  class: "table-item table-header"
};
const _hoisted_5 = {
  class: "table-item_d"
};
const _hoisted_6 = {
  class: "table-item_d"
};
const _hoisted_7 = {
  class: "table-item_d"
};
const _hoisted_8 = {
  class: "table-item_d"
};
const _hoisted_9 = {
  class: "table-item"
};
const _hoisted_10 = {
  class: "token-info table-item_d"
};
const _hoisted_11 = {
  class: "icon-token-container"
};
const _hoisted_12 = {
  class: "token-symbol"
};
const _hoisted_13 = {
  class: "table-item_d"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  class: "table-item_d token-sort"
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  class: "table-item_d"
};
const _hoisted_20 = ["onClick"];
const _hoisted_21 = {
  key: 1
};
const _hoisted_22 = {
  class: "add-text"
};
const _hoisted_23 = {
  class: "table-list"
};
const _hoisted_24 = {
  class: "table-item table-header"
};
const _hoisted_25 = {
  class: "table-item_d"
};
const _hoisted_26 = {
  class: "table-item_d"
};
const _hoisted_27 = {
  class: "table-item_d"
};
const _hoisted_28 = {
  class: "table-item_d"
};
const _hoisted_29 = {
  class: "table-item_d"
};
const _hoisted_30 = {
  class: "table-item_d"
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  class: "table-item_d"
};
const _hoisted_33 = ["onClick"];
const _hoisted_34 = ["onClick"];
const _hoisted_35 = ["onClick"];
const _hoisted_36 = {
  class: "table-item_d"
};
const _hoisted_37 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$data$favoritesList;
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_DynamicScrollerItem = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("DynamicScrollerItem");
  const _component_DynamicScroller = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("DynamicScroller");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_ChangeGroup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChangeGroup");
  const _component_ChangeName = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChangeName");
  const _component_EditRemark = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("EditRemark");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$options.active === '1' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    class: "fav-tabs",
    active: $data.activeGroup,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.activeGroup = $event),
    border: "",
    color: "#558BED",
    ellipsis: false,
    background: "transparent"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
      title: _ctx.$t('defaultGroup'),
      name: 0
    }, null, 8 /* PROPS */, ["title"]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.groups, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        key: index,
        title: item.name,
        name: item.group_id
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('token')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('changeGroup')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('sort')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('remark')), 1 /* TEXT */)]), ((_$data$favoritesList = $data.favoritesList) === null || _$data$favoritesList === void 0 ? void 0 : _$data$favoritesList.length) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_DynamicScroller, {
    key: 0,
    items: $data.favoritesList,
    "min-item-size": 30,
    keyField: "id",
    "page-mode": "",
    class: "scroller"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(({
      item,
      index,
      active
    }) => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_DynamicScrollerItem, {
      item: item,
      active: active,
      "data-index": index
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        round: "",
        width: "0.72rem",
        height: "0.72rem",
        "icon-size": "0.72rem",
        "lazy-load": "",
        "show-loading": "",
        src: item === null || item === void 0 ? void 0 : item.logo,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((item === null || item === void 0 ? void 0 : item.name) || ''), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: "iconfont icon-tiaozhengzu",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.switchGroup(item), ["stop"])
      }, null, 8 /* PROPS */, _hoisted_14)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-zhiding", {
          'disabled': index === 0
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.tokenSetTop(item, index), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_16), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-shangyi", {
          'disabled': index === 0
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeNftFavoritesIndex(item, index, -1), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_17), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-xiayi", {
          'disabled': index + 1 === $data.favoritesList.length
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeNftFavoritesIndex(item, index, 1), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_18)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: "iconfont icon-zhongmingming",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.handleEditRemark(item), ["stop"])
      }, null, 8 /* PROPS */, _hoisted_20)])])]),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["item", "active", "data-index"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["items"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.favoritesList && $data.favoritesList.length === 0 || !$options.groups]])])])) : $options.active === '2' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
    title: "",
    onClick: _cache[1] || (_cache[1] = $event => $data.visible2 = true),
    clickable: ""
  }, {
    value: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      class: "icon-add-o",
      name: "add-o"
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('newGroup')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_23, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('groupName')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('rename')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('sort')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('operate')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.groups, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      key: index,
      class: "table-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_30, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: "iconfont icon-zhongmingming",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.rename(item), ["stop"])
    }, null, 8 /* PROPS */, _hoisted_31)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-zhiding", {
        'disabled': index === 0
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setTopNftFavoriteGroup(item, index), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_33), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-shangyi", {
        'disabled': index === 0
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeIndexNftFavoriteGroup(item, index, -1), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_34), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-xiayi", {
        'disabled': index + 1 === $options.groups.length
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeIndexNftFavoriteGroup(item, index, 1), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_35)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_36, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: "iconfont icon-ashbin",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.removeNftFavoriteGroup(item), ["stop"])
    }, null, 8 /* PROPS */, _hoisted_37)])]);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $options.groups && $options.groups.length === 0 || !$options.groups]])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div class=\"btn-add\">\n      <van-button class=\"button\" icon=\"plus\" block plain type=\"primary\" @click.stop=\"visible2=true\">{{ $t('newGroup') }}</van-button>\n    </div> ")])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeGroup, {
    visible: $data.visible1,
    "onUpdate:visible": _cache[2] || (_cache[2] = $event => $data.visible1 = $event),
    selected: $data.activeGroup,
    "onUpdate:selected": _cache[3] || (_cache[3] = $event => $data.activeGroup = $event),
    title: _ctx.$t('pleaseSelectGroup'),
    groups: $options.groups,
    onSelect: $options.confirmSwitchGroup
  }, null, 8 /* PROPS */, ["visible", "selected", "title", "groups", "onSelect"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeName, {
    visible: $data.visible2,
    "onUpdate:visible": _cache[4] || (_cache[4] = $event => $data.visible2 = $event),
    confirmSubmit: $options.addNftFavoriteGroup
  }, null, 8 /* PROPS */, ["visible", "confirmSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeName, {
    visible: $data.visible3,
    "onUpdate:visible": _cache[5] || (_cache[5] = $event => $data.visible3 = $event),
    confirmSubmit: $options.changeNftFavoriteGroupName
  }, null, 8 /* PROPS */, ["visible", "confirmSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_EditRemark, {
    visible: $data.visible4,
    "onUpdate:visible": _cache[6] || (_cache[6] = $event => $data.visible4 = $event),
    initRemark: $data.curRemark,
    confirmSubmit: $options.confirmEditRemark
  }, null, 8 /* PROPS */, ["visible", "initRemark", "confirmSubmit"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-473f1e25"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  class: "fav-tabs-container"
};
const _hoisted_3 = {
  class: "table-list"
};
const _hoisted_4 = {
  class: "table-item table-header"
};
const _hoisted_5 = {
  class: "table-item_d"
};
const _hoisted_6 = {
  class: "table-item_d"
};
const _hoisted_7 = {
  class: "table-item_d"
};
const _hoisted_8 = {
  class: "table-item_d"
};
const _hoisted_9 = {
  class: "token-info table-item_d"
};
const _hoisted_10 = {
  class: "icon-token-container"
};
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  class: "token-symbol"
};
const _hoisted_13 = {
  class: "table-item_d"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  class: "table-item_d token-sort"
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = ["onClick"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  class: "table-item_d"
};
const _hoisted_20 = ["onClick"];
const _hoisted_21 = {
  key: 1
};
const _hoisted_22 = {
  class: "add-text"
};
const _hoisted_23 = {
  class: "table-list"
};
const _hoisted_24 = {
  class: "table-item table-header"
};
const _hoisted_25 = {
  class: "table-item_d"
};
const _hoisted_26 = {
  class: "table-item_d"
};
const _hoisted_27 = {
  class: "table-item_d"
};
const _hoisted_28 = {
  class: "table-item_d"
};
const _hoisted_29 = {
  class: "table-item_d"
};
const _hoisted_30 = {
  class: "table-item_d"
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  class: "table-item_d"
};
const _hoisted_33 = ["onClick"];
const _hoisted_34 = ["onClick"];
const _hoisted_35 = ["onClick"];
const _hoisted_36 = {
  class: "table-item_d"
};
const _hoisted_37 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_tab = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tab");
  const _component_van_tabs = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-tabs");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-list");
  const _component_van_empty = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-empty");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_ChangeGroup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChangeGroup");
  const _component_ChangeName = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChangeName");
  const _component_EditRemark = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("EditRemark");
  const _component_van_action_sheet = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-action-sheet");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$options.active === '1' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tabs, {
    class: "fav-tabs",
    active: $data.activeGroup,
    "onUpdate:active": _cache[0] || (_cache[0] = $event => $data.activeGroup = $event),
    border: "",
    color: "#558BED",
    ellipsis: false,
    background: "transparent"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_tab, {
      title: _ctx.$t('defaultGroup'),
      name: 0
    }, null, 8 /* PROPS */, ["title"]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.groups, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_tab, {
        key: index,
        title: item.name,
        name: item.group_id
      }, null, 8 /* PROPS */, ["title", "name"]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["active"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('token')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('changeGroup')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('sort')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('remark')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_list, {
    loading: $data.listLoading,
    "onUpdate:loading": _cache[1] || (_cache[1] = $event => $data.listLoading = $event),
    error: $data.listError,
    "onUpdate:error": _cache[2] || (_cache[2] = $event => $data.listError = $event),
    finished: $data.finished,
    "finished-text": _ctx.$t('noMore'),
    "error-text": _ctx.$t('errorText'),
    "loading-text": _ctx.$t('loading'),
    onLoad: $options.onLoad,
    offset: "100",
    "immediate-check": false
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.favoritesList, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
        key: item.id,
        class: "table-item"
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: item.token + item.chain,
        round: "",
        width: "0.5rem",
        height: "0.5rem",
        "icon-size": "0.5rem",
        "lazy-load": "",
        "show-loading": "",
        src: _ctx.$f.formatIcon(item),
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"])), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <svg class=\"icon-svg icon-network\" aria-hidden=\"true\">\n                <use :xlink:href=\"`#icon-${item.chain}`\"></use>\n              </svg> "), item.chain ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("img", {
        key: 0,
        class: "icon-svg icon-network",
        src: `${_ctx.$store.state.s3BaseUrl}chain/${item.chain}.png`,
        alt: "",
        srcset: ""
      }, null, 8 /* PROPS */, _hoisted_11)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.symbol), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: "iconfont icon-tiaozhengzu",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.switchGroup(item), ["stop"])
      }, null, 8 /* PROPS */, _hoisted_14)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-zhiding", {
          'disabled': index === 0
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.tokenSetTop(item, index), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_16), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-shangyi", {
          'disabled': index === 0
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeFavoritesIndex(item, index, -1), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_17), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-xiayi", {
          'disabled': index + 1 === $data.favoritesList.length
        }]),
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeFavoritesIndex(item, index, 1), ["stop"])
      }, null, 10 /* CLASS, PROPS */, _hoisted_18)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: "iconfont icon-zhongmingming",
        onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.handleEditRemark(item), ["stop"])
      }, null, 8 /* PROPS */, _hoisted_20)])]);
    }), 128 /* KEYED_FRAGMENT */))]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading", "error", "finished", "finished-text", "error-text", "loading-text", "onLoad"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.favoritesList && $data.favoritesList.length === 0 || !$options.groups]])])])) : $options.active === '2' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
    title: "",
    onClick: _cache[3] || (_cache[3] = $event => $data.visible2 = true),
    clickable: ""
  }, {
    value: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      class: "icon-add-o",
      name: "add-o"
    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('newGroup')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", _hoisted_23, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('groupName')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('rename')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('sort')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_28, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('operate')), 1 /* TEXT */)]), (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.groups, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("li", {
      key: index,
      class: "table-item"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item.name), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_30, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: "iconfont icon-zhongmingming",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.rename(item), ["stop"])
    }, null, 8 /* PROPS */, _hoisted_31)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-zhiding", {
        'disabled': index === 0
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.setTopFavoriteGroup(item, index), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_33), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-shangyi", {
        'disabled': index === 0
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeIndexFavoriteGroup(item, index, -1), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_34), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-xiayi", {
        'disabled': index + 1 === $options.groups.length
      }]),
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.changeIndexFavoriteGroup(item, index, 1), ["stop"])
    }, null, 10 /* CLASS, PROPS */, _hoisted_35)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_36, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
      class: "iconfont icon-ashbin",
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.removeFavoriteGroup(item), ["stop"])
    }, null, 8 /* PROPS */, _hoisted_37)])]);
  }), 128 /* KEYED_FRAGMENT */)), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_empty, {
    class: "empty",
    image: _ctx.emptyNoDataLight,
    description: _ctx.$t('emptyData')
  }, null, 8 /* PROPS */, ["image", "description"]), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $options.groups && $options.groups.length === 0 || !$options.groups]])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <div class=\"btn-add\">\n      <van-button class=\"button\" icon=\"plus\" block plain type=\"primary\" @click.stop=\"visible2=true\">{{ $t('newGroup') }}</van-button>\n    </div> ")])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeGroup, {
    visible: $data.visible1,
    "onUpdate:visible": _cache[4] || (_cache[4] = $event => $data.visible1 = $event),
    selected: $data.activeGroup,
    "onUpdate:selected": _cache[5] || (_cache[5] = $event => $data.activeGroup = $event),
    title: _ctx.$t('pleaseSelectGroup'),
    groups: $options.groups,
    onSelect: $options.confirmSwitchGroup
  }, null, 8 /* PROPS */, ["visible", "selected", "title", "groups", "onSelect"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeName, {
    visible: $data.visible2,
    "onUpdate:visible": _cache[6] || (_cache[6] = $event => $data.visible2 = $event),
    confirmSubmit: $options.addFavoriteGroup
  }, null, 8 /* PROPS */, ["visible", "confirmSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_ChangeName, {
    visible: $data.visible3,
    "onUpdate:visible": _cache[7] || (_cache[7] = $event => $data.visible3 = $event),
    confirmSubmit: $options.changeFavoriteGroupName
  }, null, 8 /* PROPS */, ["visible", "confirmSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_EditRemark, {
    visible: $data.visible4,
    "onUpdate:visible": _cache[8] || (_cache[8] = $event => $data.visible4 = $event),
    initRemark: $data.curRemark,
    confirmSubmit: $options.confirmEditRemark
  }, null, 8 /* PROPS */, ["visible", "initRemark", "confirmSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_action_sheet, {
    show: $data.show,
    "onUpdate:show": _cache[9] || (_cache[9] = $event => $data.show = $event),
    actions: $data.actions,
    "cancel-text": _ctx.$t('cancel'),
    onSelect: $options.select,
    "close-on-click-action": ""
  }, null, 8 /* PROPS */, ["show", "actions", "cancel-text", "onSelect"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".popup-title[data-v-b56fd18c] {\n  font-size: 0.32rem;\n  text-align: center;\n  margin-top: 0.1rem;\n}\n.popup-content[data-v-b56fd18c] {\n  padding: 1rem 0 0;\n  font-size: 0.28rem;\n  line-height: 1.5;\n}\n.popup-content[data-v-b56fd18c] .van-field {\n  background-color: #F8F8F8;\n  border-radius: 0.16rem;\n  padding: 0.4rem 0.32rem;\n}\n.footer[data-v-b56fd18c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n}\n.footer .btn[data-v-b56fd18c] {\n  min-width: 2.4rem;\n}\n.footer .btn + .btn[data-v-b56fd18c] {\n  margin-left: 0.4rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[data-v-0eae787e]  .van-hairline--bottom::after {\n  border-bottom: 0.02rem solid rgba(135, 143, 188, 0.3);\n}\n[data-v-0eae787e] .van-tabs--card .van-tabs__nav {\n  border-color: #878FBC !important;\n}\n[data-v-0eae787e] .van-tabs--card .van-tabs__nav .van-tab {\n  padding: 0 0.3rem;\n}\n[data-v-0eae787e] .van-nav-bar__title {\n  max-width: 85%;\n}\n[data-v-0eae787e] .van-nav-bar__right {\n  padding: 0 0.1rem;\n}\n.select-btn[data-v-0eae787e] {\n  background-color: transparent;\n  color: #878fbc;\n  border: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fav-tabs-container[data-v-791ce968] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fav-tabs[data-v-791ce968] {\n  max-width: 100vw;\n}\n.table-list[data-v-791ce968] {\n  font-size: 0.32rem;\n  color: #1E2329;\n  letter-spacing: 0;\n  font-weight: 500;\n  min-height: calc(100vh - 2.48rem);\n  padding-bottom: 0.4rem;\n}\n.table-list .table-item[data-v-791ce968] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n}\n.table-list .table-item:not(.table-header) + .table-item[data-v-791ce968] {\n  border-top: 0.02rem solid #F5F5F5;\n}\n.table-list .table-item.table-header[data-v-791ce968] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n}\n.table-list .table-item.table-header .table-item_d[data-v-791ce968] {\n  padding: 0.2rem 0;\n}\n.table-list .table-item .table-item_d[data-v-791ce968] {\n  padding: 0.3rem 0;\n}\n.table-list .table-item .table-item_d .iconfont[data-v-791ce968] {\n  font-size: 0.36rem;\n  color: #888;\n}\n.table-list .table-item .table-item_d .iconfont + .iconfont[data-v-791ce968] {\n  margin-left: 0.3rem;\n}\n.table-list .table-item .table-item_d .iconfont[data-v-791ce968]:active {\n  opacity: 0.5;\n}\n.table-list .table-item .table-item_d .iconfont.disabled[data-v-791ce968] {\n  opacity: 0.3;\n}\n.table-list .table-item .table-item_d[data-v-791ce968]:nth-child(1) {\n  flex: 2.5;\n  text-align: left;\n  word-wrap: break-word;\n}\n.table-list .table-item .table-item_d[data-v-791ce968]:nth-child(2) {\n  flex: 1.5;\n  text-align: center;\n}\n.table-list .table-item .table-item_d[data-v-791ce968]:nth-child(3) {\n  flex: 2;\n  text-align: center;\n}\n.table-list .table-item .table-item_d[data-v-791ce968]:nth-child(4) {\n  flex: 1;\n  text-align: center;\n}\n.table-list .token-info[data-v-791ce968] {\n  display: flex;\n  align-items: center;\n}\n.table-list .token-info .icon-collect[data-v-791ce968] {\n  font-size: 0.32rem;\n  color: #ccc;\n  cursor: pointer;\n  margin-right: 0.1rem;\n}\n.table-list .token-info .icon-collect.collected[data-v-791ce968] {\n  color: #558BED;\n}\n.table-list .token-info .token-network[data-v-791ce968] {\n  border: 0.02rem solid #878fbc;\n  border-radius: 0.2rem;\n  font-size: 0.24rem;\n  color: #878fbc;\n  padding: 0.04rem 0.1rem;\n  margin-left: 0.1rem;\n}\n.table-list .token-info .token-icon[data-v-791ce968] {\n  margin-right: 0.18rem;\n  border-radius: 50%;\n}\n.btn-add[data-v-791ce968] {\n  position: sticky;\n  bottom: 0;\n  padding: 0.3rem 0.8rem;\n  background-color: #fff;\n  box-shadow: 0 0 0.2rem #eee;\n}\n.btn-add .button[data-v-791ce968] {\n  border-radius: 0.16rem;\n}\n.icon-add-o[data-v-791ce968] {\n  color: #558BED;\n  margin-right: 0.1rem;\n}\n.add-text[data-v-791ce968] {\n  color: #558BED;\n}\n.select-btn[data-v-791ce968] {\n  background-color: transparent;\n  color: #878fbc;\n  border: none;\n}\n.token-symbol[data-v-791ce968] {\n  word-wrap: break-word;\n  word-break: break-word;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fav-tabs-container[data-v-473f1e25] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.fav-tabs[data-v-473f1e25] {\n  max-width: 100vw;\n}\n.table-list[data-v-473f1e25] {\n  font-size: 0.32rem;\n  color: #1E2329;\n  letter-spacing: 0;\n  font-weight: 500;\n  min-height: calc(100vh - 2.48rem);\n  padding-bottom: 0.4rem;\n}\n.table-list .table-item[data-v-473f1e25] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.2rem;\n}\n.table-list .table-item:not(.table-header) + .table-item[data-v-473f1e25] {\n  border-top: 0.02rem solid #F5F5F5;\n}\n.table-list .table-item.table-header[data-v-473f1e25] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n}\n.table-list .table-item.table-header .table-item_d[data-v-473f1e25] {\n  padding: 0.2rem 0;\n}\n.table-list .table-item .table-item_d[data-v-473f1e25] {\n  padding: 0.3rem 0;\n}\n.table-list .table-item .table-item_d .iconfont[data-v-473f1e25] {\n  font-size: 0.36rem;\n  color: #888;\n}\n.table-list .table-item .table-item_d .iconfont + .iconfont[data-v-473f1e25] {\n  margin-left: 0.3rem;\n}\n.table-list .table-item .table-item_d .iconfont[data-v-473f1e25]:active {\n  opacity: 0.5;\n}\n.table-list .table-item .table-item_d .iconfont.disabled[data-v-473f1e25] {\n  opacity: 0.3;\n}\n.table-list .table-item .table-item_d[data-v-473f1e25]:nth-child(1) {\n  flex: 2.5;\n  text-align: left;\n  word-wrap: break-word;\n}\n.table-list .table-item .table-item_d[data-v-473f1e25]:nth-child(2) {\n  flex: 1.5;\n  text-align: center;\n}\n.table-list .table-item .table-item_d[data-v-473f1e25]:nth-child(3) {\n  flex: 2;\n  text-align: center;\n}\n.table-list .table-item .table-item_d[data-v-473f1e25]:nth-child(4) {\n  flex: 1;\n  text-align: center;\n}\n.table-list .token-info[data-v-473f1e25] {\n  display: flex;\n  align-items: center;\n}\n.table-list .token-info .icon-collect[data-v-473f1e25] {\n  font-size: 0.32rem;\n  color: #ccc;\n  cursor: pointer;\n  margin-right: 0.1rem;\n}\n.table-list .token-info .icon-collect.collected[data-v-473f1e25] {\n  color: #558BED;\n}\n.table-list .token-info .token-network[data-v-473f1e25] {\n  border: 0.02rem solid #878fbc;\n  border-radius: 0.2rem;\n  font-size: 0.24rem;\n  color: #878fbc;\n  padding: 0.04rem 0.1rem;\n  margin-left: 0.1rem;\n}\n.table-list .token-info .token-icon[data-v-473f1e25] {\n  margin-right: 0.18rem;\n  border-radius: 50%;\n}\n.btn-add[data-v-473f1e25] {\n  position: sticky;\n  bottom: 0;\n  padding: 0.3rem 0.8rem;\n  background-color: #fff;\n  box-shadow: 0 0 0.2rem #eee;\n}\n.btn-add .button[data-v-473f1e25] {\n  border-radius: 0.16rem;\n}\n.icon-add-o[data-v-473f1e25] {\n  color: #558BED;\n  margin-right: 0.1rem;\n}\n.add-text[data-v-473f1e25] {\n  color: #558BED;\n}\n.select-btn[data-v-473f1e25] {\n  background-color: transparent;\n  color: #878fbc;\n  border: none;\n}\n.token-symbol[data-v-473f1e25] {\n  word-wrap: break-word;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("97edef10", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bb24b4a6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c20d6c2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("61ffa7f6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/editRemark.vue":
/*!***************************************!*\
  !*** ./src/components/editRemark.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editRemark_vue_vue_type_template_id_b56fd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editRemark.vue?vue&type=template&id=b56fd18c&scoped=true */ "./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true");
/* harmony import */ var _editRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editRemark.vue?vue&type=script&lang=js */ "./src/components/editRemark.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true */ "./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_editRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_editRemark_vue_vue_type_template_id_b56fd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-b56fd18c"],['__file',"src/components/editRemark.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/editRemark.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/editRemark.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./editRemark.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=style&index=0&id=b56fd18c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_style_index_0_id_b56fd18c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_template_id_b56fd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader-v16/dist??ref--1-1!./editRemark.vue?vue&type=template&id=b56fd18c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/editRemark.vue?vue&type=template&id=b56fd18c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_editRemark_vue_vue_type_template_id_b56fd18c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/favoriteManage/index.vue":
/*!********************************************!*\
  !*** ./src/views/favoriteManage/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0eae787e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0eae787e&scoped=true */ "./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/views/favoriteManage/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true */ "./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_0eae787e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-0eae787e"],['__file',"src/views/favoriteManage/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/favoriteManage/index.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/favoriteManage/index.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=style&index=0&id=0eae787e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_style_index_0_id_0eae787e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_0eae787e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./index.vue?vue&type=template&id=0eae787e&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/index.vue?vue&type=template&id=0eae787e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_index_vue_vue_type_template_id_0eae787e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/favoriteManage/nft.vue":
/*!******************************************!*\
  !*** ./src/views/favoriteManage/nft.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nft_vue_vue_type_template_id_791ce968_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nft.vue?vue&type=template&id=791ce968&scoped=true */ "./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true");
/* harmony import */ var _nft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nft.vue?vue&type=script&lang=js */ "./src/views/favoriteManage/nft.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true */ "./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_nft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_nft_vue_vue_type_template_id_791ce968_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-791ce968"],['__file',"src/views/favoriteManage/nft.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/favoriteManage/nft.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/views/favoriteManage/nft.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./nft.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=style&index=0&id=791ce968&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_style_index_0_id_791ce968_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_template_id_791ce968_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./nft.vue?vue&type=template&id=791ce968&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/nft.vue?vue&type=template&id=791ce968&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_nft_vue_vue_type_template_id_791ce968_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/favoriteManage/token.vue":
/*!********************************************!*\
  !*** ./src/views/favoriteManage/token.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_vue_vue_type_template_id_473f1e25_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.vue?vue&type=template&id=473f1e25&scoped=true */ "./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true");
/* harmony import */ var _token_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.vue?vue&type=script&lang=js */ "./src/views/favoriteManage/token.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true */ "./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_token_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_token_vue_vue_type_template_id_473f1e25_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-473f1e25"],['__file',"src/views/favoriteManage/token.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/favoriteManage/token.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/views/favoriteManage/token.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./token.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=style&index=0&id=473f1e25&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_style_index_0_id_473f1e25_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_template_id_473f1e25_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./token.vue?vue&type=template&id=473f1e25&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/favoriteManage/token.vue?vue&type=template&id=473f1e25&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_token_vue_vue_type_template_id_473f1e25_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);