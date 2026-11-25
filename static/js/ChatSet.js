(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatSet"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/edit.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'edit',
  props: {
    title: String,
    placeholder: String,
    visible: Boolean,
    maxlength: {
      type: String,
      default: '-'
    }
  },
  emits: ['update:visible', 'onSubmit'],
  data() {
    return {
      content: '',
      loading: false
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
    // visible(val) {
    //   if (!val) {
    //     this.content = ''
    //   }
    // }
  },
  methods: {
    confirmSubmit() {
      this.$emit('onSubmit', this.content);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/set.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cropper_h5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cropper-h5 */ "./node_modules/vue-cropper-h5/dist/H5Cropper.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _components_chat_edit_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chat/edit.vue */ "./src/components/chat/edit.vue");
/* harmony import */ var _components_chat_mute_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/chat/mute.vue */ "./src/components/chat/mute.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatSet',
  components: {
    H5Cropper: vue_cropper_h5__WEBPACK_IMPORTED_MODULE_0__["default"],
    Edit: _components_chat_edit_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Mute: _components_chat_mute_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      slowMode: '0',
      groupMember: [],
      pageNo: 0,
      pageSize: 20,
      loading: false,
      finished: false,
      error: false,
      option: {
        cancelButtonText: this.$t('cancel'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonBackgroundColor: '#fff',
        confirmButtonBackgroundColor: '#558BED',
        cancelButtonTextColor: '#323233',
        confirmButtonTextColor: '#fff'
      },
      updateLogoLoading: false,
      visible1: false,
      visible2: false,
      visible3: false,
      penaltyList: [],
      curItem: {}
    };
  },
  computed: {
    groupInfo() {
      var _this$$store$state;
      return ((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 || (_this$$store$state = _this$$store$state.chat) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.groupInfo) || {
        id: '',
        name: '',
        nickname: ''
      };
    },
    memberCount() {
      var _this$$store$state2;
      return (_this$$store$state2 = this.$store.state) === null || _this$$store$state2 === void 0 || (_this$$store$state2 = _this$$store$state2.chat) === null || _this$$store$state2 === void 0 ? void 0 : _this$$store$state2.memberCount;
    },
    online() {
      var _this$groupInfo;
      return ((_this$groupInfo = this.groupInfo) === null || _this$groupInfo === void 0 ? void 0 : _this$groupInfo.online_members) || 0;
    },
    total() {
      var _this$groupInfo2;
      return ((_this$groupInfo2 = this.groupInfo) === null || _this$groupInfo2 === void 0 ? void 0 : _this$groupInfo2.total_members) || 0;
    },
    role() {
      if (this.$store.state.chat.groupMemberInfo.role === '' || this.$store.state.chat.groupMemberInfo.user_role === '') {
        return '';
      }
      let memberRole = this.$store.state.chat.groupMemberInfo.role === 2 ? 1.5 : this.$store.state.chat.groupMemberInfo.role;
      let role = Math.max(memberRole, this.$store.state.chat.groupMemberInfo.user_role);
      return role;
    },
    groupId() {
      return this.$store.state.chat.groupId;
    }
  },
  watch: {
    groupId(val) {
      if (val) {
        this.init();
      }
    },
    '$store.state.chat.chatToken'(val) {
      if (val) {
        this.init();
      }
    }
  },
  // created() {
  //   this.resetLoad()
  // },
  activated() {
    // this.getChatGroupIllegal()
    this.init();
  },
  methods: {
    init() {
      this.resetLoad();
      this.getChatGroupIllegal();
    },
    getChatGroupIllegal() {
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["getChatGroupIllegal"])(this.groupId).then(res => {
        this.penaltyList = res || [];
      });
    },
    getChatGroupMember() {
      this.loading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["getChatGroupMember"])(this.groupId, this.pageNo, this.pageSize).then(res => {
        this.finished = res.length < this.pageSize;
        if (this.pageNo === 0) {
          this.groupMember = res;
        } else {
          this.groupMember = this.groupMember.concat(res);
        }
        this.pageNo++;
        // console.log('this.pageNo', this.pageNo)
      }).catch(() => {
        this.error = true;
      }).finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
    },
    resetLoad() {
      this.pageNo = 0;
      // this.groupMember = []
      this.loading = false;
      this.finished = false;
      this.error = false;
      this.getChatGroupMember();
    },
    onUpdateSlowMode(val) {
      this.slowMode = val;
    },
    formatRole(item, type = 'name') {
      let memberRole = item.role === 2 ? 1.5 : item.role;
      let role = Math.max(memberRole, item.user_role);
      let o = {
        0: {
          name: '',
          role: 0,
          color: '#1FD0A3'
        },
        1: {
          name: this.$t('admin'),
          role: 1,
          color: '#1FD0A3'
        },
        1.5: {
          name: this.$t('projectParty'),
          role: 1.5,
          color: '#3F80F7'
        },
        2: {
          name: this.$t('inspector'),
          role: 2,
          color: '#FFC800'
        },
        3: {
          name: this.$t('superAdmin'),
          role: 3,
          color: '#1FD0A3'
        }
      };
      return o[role][type];
    },
    getFile(file) {
      if (this.updateLogoLoading) {
        return;
      }
      console.log(file);
      let toast = this.$toast.loading({
        forbidClick: false,
        duration: 0
      });
      this.updateLogoLoading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupLogo"])(this.groupId, file).then(res => {
        console.log(res);
        this.$toast.success(this.$t('success'));
        this.$store.dispatch('getChatGroupSettings');
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        toast.clear();
        this.updateLogoLoading = false;
      });
    },
    handleUpload() {
      document.querySelector('.cropper-group-logo input[type=file]').click();
    },
    handleEditName() {
      var _this$groupInfo3;
      this.visible1 = true;
      this.$refs.editName.content = ((_this$groupInfo3 = this.groupInfo) === null || _this$groupInfo3 === void 0 ? void 0 : _this$groupInfo3.nickname) || '';
    },
    updateChatGroupNickname(content) {
      this.$refs.editName.loading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupNickname"])(this.groupId, content).then(res => {
        console.log(res);
        this.$toast.success(this.$t('success'));
        this.visible1 = false;
        this.$store.dispatch('getChatGroupSettings');
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        this.$refs.editName.loading = false;
      });
    },
    handleEditDescription() {
      var _this$groupInfo4;
      this.visible2 = true;
      this.$refs.editDescription.content = ((_this$groupInfo4 = this.groupInfo) === null || _this$groupInfo4 === void 0 ? void 0 : _this$groupInfo4.description) || '';
    },
    updateChatGroupDescription(content) {
      this.$refs.editDescription.loading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupDescription"])(this.groupId, content).then(res => {
        console.log(res);
        this.$toast.success(this.$t('success'));
        this.visible2 = false;
        this.$store.dispatch('getChatGroupSettings');
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        this.$refs.editDescription.loading = false;
      });
    },
    handleMute(item) {
      this.curItem = item;
      this.visible3 = true;
    },
    mute(data) {
      this.$refs.mute.loading = true;
      let item = this.curItem;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupMemberStatus"])(this.groupId, item.user_address, item.user_chain, data.user_status, data.banned_expired).then(res => {
        if (res) {
          this.$toast.success(this.$t('bannedSuccessfully'));
          this.visible3 = false;
          this.resetLoad();
        }
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        this.$refs.mute.loading = false;
      });
    },
    handleUnMute(item) {
      this.$dialog.confirm({
        // title: this.$t('groupChatTips'),
        message: this.$t('banLifted'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        // on confirm
        this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupMemberStatus"])(this.groupId, item.user_address, item.user_chain, 0).then(res => {
          if (res) {
            this.$toast.success(this.$t('unbanSuccessfully'));
            this.resetLoad();
            // item.status = 0
          }
        }).catch(err => {
          console.log(err);
          this.$toast.fail(err);
        }).finally(() => {
          // toast1.clear()
        });
      }).catch(() => {
        // on cancel
      });
    },
    goPenaltyInfo() {
      this.$toast(this.$t('contactAdmin') + 'business@ave.ai');
      // if (this.penaltyList?.length > 0) {
      //   this.$router.push({name: 'ChatPenaltyInfo', params: {id: this.groupId}})
      // }
    },
    leaveChatGroup() {
      this.$dialog.confirm({
        message: this.$t('confirmLeaveChat'),
        allowHtml: false,
        messageAlign: 'center',
        closeOnPopstate: true,
        confirmButtonText: this.$t('confirm'),
        confirmButtonColor: '#3F80F7',
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        let toast = this.$toast.loading({
          forbidClick: true,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["leaveChatGroup"])(this.groupId).then(res => {
          toast.clear();
          this.$store.dispatch('getChatGroupMemberInfo', this.groupId);
          this.$router.push({
            name: 'Chat',
            params: {
              id: this.$route.params.id
            }
          });
        }).catch(err => {
          this.$toast({
            message: err,
            position: 'top'
          });
        });
      }).catch(() => {
        // on cancel
        this.$store.state.chat.checkAuthVisible = false;
      });
    },
    goToPay() {
      this.$toast(this.$t('contactAdmin') + 'business@ave.ai');
      //   if ((this.$store.getters.netId === "bsc" || this.$store.getters.netId === "oec") && this.$store.state.wallet !== "importAddress" && window.ethereum) {
      //   this.$router.push({
      //     name: 'ChatNewPayment',
      //     params: { type: 'burn', id: this.groupId },
      //     query: { admin: this.$store.getters.netId === "oec"? 'admin' : '' }
      //   })
      // } else {
      //   this.$router.push({
      //     name: 'ChatBurn',
      //     params: {id: this.groupId},
      //     query: { admin: this.$store.getters.netId === "oec"? 'admin' : '' }
      //   })
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-95219bfe"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "popup-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_form = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-form");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_popup, {
    show: $options.dialogVisible,
    "onUpdate:show": _cache[1] || (_cache[1] = $event => $options.dialogVisible = $event),
    class: "popup-container",
    closeable: true,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "center",
    teleport: "#app",
    style: {
      width: '90%',
      'min-height': '20vh'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.title), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "popup-content",
      onSubmit: $options.confirmSubmit
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
        class: "b-filed",
        modelValue: $data.content,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.content = $event),
        rows: "1",
        autosize: "",
        label: "",
        type: "textarea",
        placeholder: $props.placeholder,
        clearable: "",
        maxlength: $props.maxlength,
        "show-word-limit": $props.maxlength !== '-',
        rules: [{
          required: true,
          message: $props.placeholder
        }]
      }, null, 8 /* PROPS */, ["modelValue", "placeholder", "maxlength", "show-word-limit", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "form-submit",
        block: "",
        round: "",
        "native-type": "submit",
        type: "primary",
        loading: $data.loading
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm1')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading"])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-2f7e1c76"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chatSet-container"
};
const _hoisted_2 = {
  class: "section-1"
};
const _hoisted_3 = {
  class: "image-box"
};
const _hoisted_4 = {
  class: "s1"
};
const _hoisted_5 = {
  class: "s2"
};
const _hoisted_6 = {
  class: "s3"
};
const _hoisted_7 = {
  class: "s4"
};
const _hoisted_8 = {
  key: 0,
  style: {
    "color": "red"
  }
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("svg", {
  class: "icon-svg",
  style: {
    "margin-left": "0.1rem"
  },
  "aria-hidden": "true"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-renzheng"
})], -1 /* HOISTED */));
const _hoisted_10 = {
  style: {
    "position": "relative"
  }
};
const _hoisted_11 = {
  key: 2,
  class: "icon-svg icon-renzheng",
  style: {
    "margin-left": "0.1rem"
  },
  "aria-hidden": "true"
};
const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-renzheng"
}, null, -1 /* HOISTED */));
const _hoisted_13 = [_hoisted_12];
const _hoisted_14 = {
  class: "chat-item-title-container"
};
const _hoisted_15 = {
  class: "chat-item-title van-ellipsis"
};
const _hoisted_16 = {
  key: 0,
  style: {
    "color": "#3F80F7"
  }
};
const _hoisted_17 = {
  key: 1
};
const _hoisted_18 = {
  class: "chat-item-status"
};
const _hoisted_19 = {
  key: 0,
  class: "status"
};
const _hoisted_20 = {
  key: 1,
  class: "status"
};
const _hoisted_21 = {
  class: "exit-chat-btn"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$groupInfo, _$options$groupInfo2, _$options$groupInfo3, _$options$groupInfo4;
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell");
  const _component_van_cell_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-cell-group");
  const _component_van_swipe_cell = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-swipe-cell");
  const _component_van_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-list");
  const _component_h5_cropper = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("h5-cropper");
  const _component_Edit = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Edit");
  const _component_Mute = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Mute");
  const _directive_copy = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("copy");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('chatSettings')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
    round: "",
    width: "1.6rem",
    height: "1.6rem",
    "icon-size": "1.6rem",
    "lazy-load": "",
    "show-loading": "",
    src: ((_$options$groupInfo = $options.groupInfo) === null || _$options$groupInfo === void 0 ? void 0 : _$options$groupInfo.image) || _ctx.$f.formatIcon($options.groupId),
    "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
  }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <i v-if=\"role > 0\" class=\"iconfont icon-camera\" @click=\"handleUpload\"></i> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$groupInfo2 = $options.groupInfo) === null || _$options$groupInfo2 === void 0 ? void 0 : _$options$groupInfo2.nickname) || ''), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-icon v-if=\"role > 0\" class=\"ml_10 icon-chat-edit\" name=\"edit\" size=\"0.36rem\" color=\"#666666\" @click=\"handleEditName\" /> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.total) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('members')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" {{ online }} {{ $t('onlineM') }} ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('introduction')) + ": " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$groupInfo3 = $options.groupInfo) === null || _$options$groupInfo3 === void 0 ? void 0 : _$options$groupInfo3.description) || ''), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-icon v-if=\"role > 0\" class=\"ml_10 icon-chat-edit\" name=\"edit\" size=\"0.36rem\" color=\"#666666\" @click=\"handleEditDescription\" /> ")]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    class: "btn",
    round: ""
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('copyGroupLink')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  })), [[_directive_copy, `https://m.ave.ai/chat/${$options.groupId}`]]), !(this.$store.state.ios.platform && this.$store.state.ios.version && this.$f.compareVersion(this.$store.state.ios.version)) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, [((_$options$groupInfo4 = $options.groupInfo) === null || _$options$groupInfo4 === void 0 ? void 0 : _$options$groupInfo4.manager_count) < 5 && $options.role === 0 && _ctx.$store.state.chat.groupMemberInfo.group_id ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 0,
    class: "btn",
    round: "",
    type: "primary",
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.goToPay, ["stop"])
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('becomeAnAdmin')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell_group, {
    class: "mb_10"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$data$penaltyList;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        class: "cell-title-2",
        title: _ctx.$t('nicknameAndAvatarSettings'),
        value: "",
        "is-link": "",
        to: {
          name: 'UserInfo'
        }
      }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-cell\n        class=\"cell-title-2\"\n        title=\"群聊天数据自动清除\"\n        value=\"24小时\"\n        is-link\n      /> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        title: _ctx.$t('groupViolationHandling'),
        onClick: $options.goPenaltyInfo,
        "is-link": ((_$data$penaltyList = $data.penaltyList) === null || _$data$penaltyList === void 0 ? void 0 : _$data$penaltyList.length) > 0
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
          var _$data$penaltyList2;
          return [((_$data$penaltyList2 = $data.penaltyList) === null || _$data$penaltyList2 === void 0 ? void 0 : _$data$penaltyList2.length) > 0 && !(this.$store.state.ios.platform && this.$store.state.ios.version && this.$f.compareVersion(this.$store.state.ios.version)) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('penaltyGoDeal')), 1 /* TEXT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            key: 1
          }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('noViolation')), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["title", "onClick", "is-link"])];
    }),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell_group, {
    class: "mb_10"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
      label: "",
      value: "",
      "is-link": "",
      class: "cell-title-4",
      to: {
        name: 'ChatOfficial'
      }
    }, {
      title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('projectOfficial')), 1 /* TEXT */), _hoisted_9])]),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-cell-group class=\"mb_10\">\n      <van-cell\n        title=\"慢速模式\"\n        label=\"成员将被限制为每隔一段时间发送一条消息\"\n        value=\"\"\n        class=\"cell-title-4\"\n      >\n        <template #right-icon>\n          <van-switch\n            :model-value=\"slowMode\"\n            @update:model-value=\"onUpdateSlowMode\"\n            size=\"0.48rem\"\n            inactive-value=\"0\"\n            active-value=\"1\"\n          />\n        </template>\n      </van-cell>\n    </van-cell-group> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell_group, {
    class: "mb_10"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$options$groupInfo5, _$data$groupMember;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
        class: "cell-title-2",
        title: `${_ctx.$t('members1')}(${$options.total || ((_$options$groupInfo5 = $options.groupInfo) === null || _$options$groupInfo5 === void 0 ? void 0 : _$options$groupInfo5.total_members) || ((_$data$groupMember = $data.groupMember) === null || _$data$groupMember === void 0 ? void 0 : _$data$groupMember.length) || 0})`,
        value: _ctx.$t('viewBanList'),
        "is-link": "",
        to: {
          name: 'ChatBanned',
          params: {
            id: $options.groupId
          }
        }
      }, null, 8 /* PROPS */, ["title", "value", "to"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_list, {
        loading: $data.loading,
        "onUpdate:loading": _cache[1] || (_cache[1] = $event => $data.loading = $event),
        finished: $data.finished,
        error: $data.error,
        "onUpdate:error": _cache[2] || (_cache[2] = $event => $data.error = $event),
        offset: "200",
        "error-text": _ctx.$t('errorText'),
        onLoad: $options.getChatGroupMember,
        "loading-text": _ctx.$t('loading'),
        "finished-text": ""
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.groupMember, (item, index) => {
          return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_swipe_cell, {
            key: index,
            class: "group-item",
            disabled: $options.role === 0 || $options.role <= item.role || $options.role <= item.user_role
          }, {
            right: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-button square color=\"#FAAB0C\" text=\"移除\" @click=\"updateChatGroupMemberStatus(item, 5)\" style=\"height: 100%;\" /> "), item.status === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
              key: 0,
              square: "",
              color: "#FAAB0C",
              text: _ctx.$t('ban'),
              onClick: $event => $options.handleMute(item),
              style: {
                "height": "100%",
                "width": "1.3rem"
              }
            }, null, 8 /* PROPS */, ["text", "onClick"])) : item.status === 1 || item.status === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
              key: 1,
              square: "",
              type: "success",
              text: _ctx.$t('unban2'),
              onClick: $event => $options.handleUnMute(item),
              style: {
                "height": "100%",
                "width": "1.3rem"
              }
            }, null, 8 /* PROPS */, ["text", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
            default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_cell, {
              class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["cell-title-lh-1", {
                'ban': item.status === 1 || item.status === 2
              }]),
              center: "",
              label: ""
            }, {
              icon: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
                var _item$user_address, _item$user_address$sl, _item$user_address2, _item$user_address2$s;
                return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [item.image ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
                  key: 0,
                  class: "chat-avatar",
                  round: "",
                  width: "0.72rem",
                  height: "0.72rem",
                  "icon-size": "0.72rem",
                  "lazy-load": "",
                  "show-loading": "",
                  src: item.image
                }, null, 8 /* PROPS */, ["src"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
                  key: 1,
                  class: "chat-avatar",
                  style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
                    backgroundColor: '#' + item.user_address.slice(-6),
                    color: _ctx.$f.formatAvatarColor((_item$user_address = item.user_address) === null || _item$user_address === void 0 || (_item$user_address$sl = _item$user_address.slice) === null || _item$user_address$sl === void 0 ? void 0 : _item$user_address$sl.call(_item$user_address, -4))
                  })
                }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(item === null || item === void 0 || (_item$user_address2 = item.user_address) === null || _item$user_address2 === void 0 || (_item$user_address2$s = _item$user_address2.slice) === null || _item$user_address2$s === void 0 ? void 0 : _item$user_address2$s.call(_item$user_address2, -2)), 5 /* TEXT, STYLE */)), item.role === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", _hoisted_11, _hoisted_13)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])];
              }),
              title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
                var _ctx$$f$formatAddress, _ctx$$f;
                return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, [$options.formatRole(item) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
                  key: 0,
                  class: "role-tag",
                  style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
                    backgroundColor: $options.formatRole(item, 'color')
                  })
                }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatRole(item)), 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((item === null || item === void 0 ? void 0 : item.nickname) || ((_ctx$$f$formatAddress = (_ctx$$f = _ctx.$f).formatAddress) === null || _ctx$$f$formatAddress === void 0 ? void 0 : _ctx$$f$formatAddress.call(_ctx$$f, item.user_address, 4)) || ''), 1 /* TEXT */)])];
              }),
              label: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [item.is_online === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('online')), 1 /* TEXT */)) : item.is_online === 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('offline')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]),
              default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('joined')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$dayjs(item.created_time * 1000).fromNow(true)), 1 /* TEXT */), item.status === 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('bannedUntil')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate(item.banned_expired_time)), 1 /* TEXT */)) : item.status === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('permanentlyBanned')), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class"])]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["disabled"]);
        }), 128 /* KEYED_FRAGMENT */))]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading", "finished", "error", "error-text", "onLoad", "loading-text"])];
    }),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    class: "btn",
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.leaveChatGroup, ["stop"]),
    block: "",
    plain: "",
    color: "#F6465D",
    style: {
      "border": "none"
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('exitChat')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_h5_cropper, {
    class: "cropper-group-logo",
    ref: "cropper",
    option: $data.option,
    onGetFile: $options.getFile
  }, null, 8 /* PROPS */, ["option", "onGetFile"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Edit, {
    ref: "editName",
    visible: $data.visible1,
    "onUpdate:visible": _cache[3] || (_cache[3] = $event => $data.visible1 = $event),
    title: _ctx.$t('editGroupName'),
    maxlength: "20",
    placeholder: _ctx.$t('pleaseEnterGroupName'),
    onOnSubmit: $options.updateChatGroupNickname
  }, null, 8 /* PROPS */, ["visible", "title", "placeholder", "onOnSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Edit, {
    ref: "editDescription",
    visible: $data.visible2,
    "onUpdate:visible": _cache[4] || (_cache[4] = $event => $data.visible2 = $event),
    title: _ctx.$t('editIntroduction'),
    placeholder: _ctx.$t('pleaseEnterIntroduction'),
    onOnSubmit: $options.updateChatGroupDescription
  }, null, 8 /* PROPS */, ["visible", "title", "placeholder", "onOnSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Mute, {
    ref: "mute",
    visible: $data.visible3,
    "onUpdate:visible": _cache[5] || (_cache[5] = $event => $data.visible3 = $event),
    onOnSubmit: $options.mute
  }, null, 8 /* PROPS */, ["visible", "onOnSubmit"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-submit[data-v-95219bfe] {\n  margin: 0.4rem 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatSet-container[data-v-2f7e1c76] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191c32;\n  --van-cell-background-color: #fff;\n  background: #f8f8f8;\n  padding-bottom: 1.4rem;\n}\n.section-1[data-v-2f7e1c76] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.28rem;\n  background: #fff;\n  padding: 0.5rem 0;\n  margin-bottom: 0.2rem;\n}\n.section-1 .image-box[data-v-2f7e1c76] {\n  position: relative;\n}\n.section-1 .image-box .icon-camera[data-v-2f7e1c76] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #f6f6f6;\n  color: #c6c6c6;\n  border-radius: 50%;\n  width: 0.44rem;\n  height: 0.44rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.section-1 .s1[data-v-2f7e1c76] {\n  font-size: 0.28rem;\n  color: #000;\n  letter-spacing: 0;\n  font-weight: 500;\n  margin: 0.1rem 0;\n}\n.section-1 .s2[data-v-2f7e1c76] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.section-1 .s3[data-v-2f7e1c76] {\n  font-size: 0.28rem;\n  color: #999999;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin: 0.2rem 0 0.4rem;\n  padding: 0 0.6rem;\n}\n.section-1 .s4[data-v-2f7e1c76] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.section-1 .s4 .btn[data-v-2f7e1c76] {\n  min-width: 2.5rem;\n  height: 0.72rem;\n}\n.section-1 .s4 .btn + .btn[data-v-2f7e1c76] {\n  margin-left: 0.4rem;\n}\n.cell-title-2[data-v-2f7e1c76] .van-cell__title {\n  flex: 2;\n}\n.cell-title-4[data-v-2f7e1c76] .van-cell__title {\n  flex: 4;\n  line-height: 1;\n}\n.cell-title-lh-1[data-v-2f7e1c76] .van-cell__title {\n  line-height: 1;\n  flex: 1.5;\n}\n.group-item[data-v-2f7e1c76] .van-cell__value {\n  text-align: left;\n}\n.group-item[data-v-2f7e1c76] .van-swipe-cell__right {\n  display: flex;\n  align-items: center;\n}\n.chat-avatar[data-v-2f7e1c76] {\n  width: 0.72rem;\n  height: 0.72rem;\n  line-height: 0.72rem;\n  border-radius: 50%;\n  background-color: #a695e7;\n  text-align: center;\n  color: #fff;\n  margin-right: 0.1rem;\n}\n.ban[data-v-2f7e1c76] {\n  opacity: 0.5;\n}\n.chat-item-title[data-v-2f7e1c76] {\n  max-width: 2.2rem;\n}\n.chat-item-status[data-v-2f7e1c76] {\n  font-size: 0.24rem;\n  line-height: 1.2;\n}\n.chat-item-status .status[data-v-2f7e1c76] {\n  margin-top: 0.06rem;\n  font-size: 0.2rem;\n}\n.chat-item-title-container[data-v-2f7e1c76] {\n  display: flex;\n  align-items: center;\n}\n.role-tag[data-v-2f7e1c76] {\n  display: inline-block;\n  background: #1FD0A3;\n  border-radius: 0.08rem;\n  font-size: 0.2rem;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.06rem 0.1rem;\n  text-align: center;\n  margin-right: 0.1rem;\n  line-height: 1;\n}\n.icon-renzheng[data-v-2f7e1c76] {\n  position: absolute;\n  bottom: 0.06rem;\n  right: 0.06rem;\n}\n.exit-chat-btn[data-v-2f7e1c76] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 -0.02rem 1rem #ccc;\n  width: 100%;\n}\n.exit-chat-btn .btn[data-v-2f7e1c76] {\n  height: 1rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("16205f42", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("09bdfa0e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/chat/edit.vue":
/*!**************************************!*\
  !*** ./src/components/chat/edit.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_95219bfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=95219bfe&scoped=true */ "./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true");
/* harmony import */ var _edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js */ "./src/components/chat/edit.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true */ "./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_edit_vue_vue_type_template_id_95219bfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-95219bfe"],['__file',"src/components/chat/edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/edit.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/chat/edit.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./edit.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=style&index=0&id=95219bfe&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_style_index_0_id_95219bfe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_template_id_95219bfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./edit.vue?vue&type=template&id=95219bfe&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/edit.vue?vue&type=template&id=95219bfe&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_edit_vue_vue_type_template_id_95219bfe_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/chat/set.vue":
/*!********************************!*\
  !*** ./src/views/chat/set.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_vue_vue_type_template_id_2f7e1c76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.vue?vue&type=template&id=2f7e1c76&scoped=true */ "./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true");
/* harmony import */ var _set_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set.vue?vue&type=script&lang=js */ "./src/views/chat/set.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true */ "./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_set_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_set_vue_vue_type_template_id_2f7e1c76_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-2f7e1c76"],['__file',"src/views/chat/set.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/set.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/chat/set.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./set.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=style&index=0&id=2f7e1c76&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_style_index_0_id_2f7e1c76_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_template_id_2f7e1c76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./set.vue?vue&type=template&id=2f7e1c76&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/set.vue?vue&type=template&id=2f7e1c76&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_set_vue_vue_type_template_id_2f7e1c76_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);