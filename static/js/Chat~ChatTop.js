(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chat~ChatTop"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/chatItem.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _components_chat_mute_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/chat/mute.vue */ "./src/components/chat/mute.vue");
/* harmony import */ var _components_chat_kick_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/chat/kick.vue */ "./src/components/chat/kick.vue");
/* harmony import */ var _components_chat_redDraw_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/chat/redDraw.vue */ "./src/components/chat/redDraw.vue");
/* harmony import */ var element_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! element-plus */ "./node_modules/element-plus/es/index.mjs");







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatItem',
  components: {
    Mute: _components_chat_mute_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Kick: _components_chat_kick_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ElPopover: element_plus__WEBPACK_IMPORTED_MODULE_6__["ElPopover"],
    Draw: _components_chat_redDraw_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    index: {
      // index of current item
      type: Number
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      }
    },
    loading: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    listLoading: {
      type: Boolean
    },
    showDate: {
      type: Boolean
    },
    isTop: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onRemove', 'onRemoveUser', 'onReply', 'onReSend', 'onUnpin', 'onRefreshPin', 'onLogin', 'onModifyChatGroupHistoryMsg'],
  data() {
    return {
      timer: null,
      showPopover: false,
      visible: false,
      visible1: false,
      curItem: {},
      expand: false,
      redPacketMsg: {},
      timeHide: true,
      reportVisible: false,
      showImage: false
    };
  },
  computed: {
    item() {
      return this.source;
    },
    chatToken() {
      var _this$$store$state;
      return ((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 || (_this$$store$state = _this$$store$state.chat) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.chatToken) || '';
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
    },
    groupInfo() {
      var _this$$store$state2;
      return ((_this$$store$state2 = this.$store.state) === null || _this$$store$state2 === void 0 || (_this$$store$state2 = _this$$store$state2.chat) === null || _this$$store$state2 === void 0 ? void 0 : _this$$store$state2.groupInfo) || {
        id: '',
        name: '',
        nickname: ''
      };
    },
    groupMemberInfo() {
      var _this$$store$state3;
      return ((_this$$store$state3 = this.$store.state) === null || _this$$store$state3 === void 0 || (_this$$store$state3 = _this$$store$state3.chat) === null || _this$$store$state3 === void 0 ? void 0 : _this$$store$state3.groupMemberInfo) || {};
    },
    timeCountDown() {
      let timeCountDown = 0;
      if (this.item.type == 6) {
        let redpacket = JSON.parse(this.item.content);
        if (((redpacket === null || redpacket === void 0 ? void 0 : redpacket.created_time) + (redpacket === null || redpacket === void 0 ? void 0 : redpacket.end_time)) * 1000 - new Date().getTime() > 0) {
          timeCountDown = ((redpacket === null || redpacket === void 0 ? void 0 : redpacket.created_time) + (redpacket === null || redpacket === void 0 ? void 0 : redpacket.end_time)) * 1000 - new Date().getTime();
        }
      }
      return timeCountDown;
    },
    language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    actions(item) {
      var _this$$store$state4, _this$$store$state$ch;
      let isCanUnTop = (this.role === 1 || this.role === 1.5) && item.is_pined === 1;
      if (this.isTop) {
        return [{
          text: this.$t('copy'),
          id: 'copy',
          icon: 'copy-o'
        }, ...(isCanUnTop ? [{
          text: this.$t('unpin'),
          id: 'unpin',
          icon: 'top'
        }] : [])];
      }
      let isCanRemove = ((_this$$store$state4 = this.$store.state) === null || _this$$store$state4 === void 0 || (_this$$store$state4 = _this$$store$state4.chat) === null || _this$$store$state4 === void 0 || (_this$$store$state4 = _this$$store$state4.groupMemberInfo) === null || _this$$store$state4 === void 0 ? void 0 : _this$$store$state4.group_id) && this.chatToken && (this.role > 0 || item.user_address === this.$store.state.chat.userInfo.address && item.user_chain === this.$store.state.chat.userInfo.chain);
      let isCanBan = !(this.role === 0 || this.role <= item.role || this.role <= item.user_role);
      let isCanReply = this.chatToken && (this.groupMemberInfo.status === 0 && (this.groupInfo.status === 0 || this.groupInfo.status === 3) && ((_this$$store$state$ch = this.$store.state.chat) === null || _this$$store$state$ch === void 0 ? void 0 : _this$$store$state$ch.userInfo.status) === 0 || this.role > 1);
      let isCanTop = (this.role === 1 || this.role === 1.5) && item.is_pined === 0 && item.type != 7;
      let isCanReport = this.chatToken;
      return [{
        text: this.$t('copy'),
        id: 'copy',
        icon: 'copy-o'
      }, ...(isCanReply ? [{
        text: this.$t('reply'),
        id: 'reply',
        icon: 'reply'
      }] : []), ...(isCanRemove ? [{
        text: this.$t('delete'),
        id: 'delete',
        icon: 'delete'
      }] : []), ...(isCanBan ? [{
        text: this.$t('ban'),
        id: 'ban',
        icon: 'ban'
      }, {
        text: this.$t('remove'),
        id: 'kick',
        icon: 'kick'
      }] : []), ...(isCanTop ? [{
        text: this.$t('pin'),
        id: 'top',
        icon: 'top'
      }] : []), ...(isCanUnTop ? [{
        text: this.$t('unpin'),
        id: 'unpin',
        icon: 'top'
      }] : []), ...(isCanReport ? [{
        text: this.$t('report'),
        id: 'report',
        icon: 'report'
      }] : [])];
    },
    columnNum(item) {
      return Math.min(4, this.actions(item).length);
    },
    longTap() {
      if (this.loading || this.listLoading) {
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.timer = null;
        this.showPopover = true;
      }, 500);
    },
    clearTouch() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    close() {
      this.showPopover = false;
    },
    onSelect(item, index, type) {
      if (type.id === 'delete') {
        this.$dialog.confirm({
          message: this.$t('confirmDeleteMessage'),
          confirmButtonText: this.$t('delete'),
          cancelButtonText: this.$t('cancel')
        }).then(() => {
          var _String, _String$startsWith;
          if ((_String = String(item === null || item === void 0 ? void 0 : item.id)) !== null && _String !== void 0 && (_String$startsWith = _String.startsWith) !== null && _String$startsWith !== void 0 && _String$startsWith.call(_String, 'send-')) {
            this.$emit('onRemove');
          } else {
            this.$toast.loading({
              forbidClick: false,
              duration: 0
            });
            Object(_api__WEBPACK_IMPORTED_MODULE_1__["removeMsg"])(item.id).then(res => {
              console.log(res);
              this.$emit('onRemove');
            }).catch(err => {
              console.log(err);
              this.$toast({
                message: err,
                position: 'top'
              });
            });
          }
        }).catch(() => {
          // on cancel
        });
      } else if (type.id === 'copy') {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["copy"])(item.content);
      } else if (type.id === 'ban') {
        //  @click="handleMute(item)"
        this.curItem = item;
        this.visible = true;
      } else if (type.id === 'kick') {
        this.curItem = item;
        this.visible1 = true;
      } else if (type.id === 'reply') {
        this.$emit('onReply', item);
      } else if (type.id === 'top') {
        this.pinMsg(item);
      } else if (type.id === 'unpin') {
        this.unpinMsg(item);
      } else if (type.id === 'report') {
        this.$store.dispatch('openChatReport', item.id);
      }
    },
    mute(data) {
      this.$refs.mute.loading = true;
      let item = this.curItem;
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["updateChatGroupMemberStatus"])(this.groupId, item.user_address, item.user_chain, data.user_status, data.banned_expired).then(res => {
        if (res) {
          this.$toast.success(this.$t('bannedSuccessfully'));
          this.visible = false;
        }
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        this.$refs.mute.loading = false;
      });
    },
    kick(type) {
      if (type === 1) {
        this.$refs.kick.loading = true;
        let item = this.curItem;
        let data = {
          group_id: this.groupId,
          user_address: item.user_address,
          user_chain: item.user_chain
        };
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["removeMember"])(data).then(res => {
          if (res) {
            var _this$$refs;
            if ((_this$$refs = this.$refs) !== null && _this$$refs !== void 0 && (_this$$refs = _this$$refs.kick) !== null && _this$$refs !== void 0 && _this$$refs.loading) {
              this.$refs.kick.loading = false;
            }
            this.visible1 = false;
            this.$emit('onRemoveUser', data);
          }
        }).catch(err => {
          var _this$$refs2;
          if ((_this$$refs2 = this.$refs) !== null && _this$$refs2 !== void 0 && (_this$$refs2 = _this$$refs2.kick) !== null && _this$$refs2 !== void 0 && _this$$refs2.loading) {
            this.$refs.kick.loading = false;
          }
          console.log(err);
          this.$toast.fail(err);
        });
      } else if (type === 2) {
        this.$refs.kick.loading = true;
        let item = this.curItem;
        let data = {
          user_address: item.user_address,
          user_chain: item.user_chain
        };
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["removeUser"])(data).then(res => {
          if (res) {
            var _this$$refs3;
            if ((_this$$refs3 = this.$refs) !== null && _this$$refs3 !== void 0 && (_this$$refs3 = _this$$refs3.kick) !== null && _this$$refs3 !== void 0 && _this$$refs3.loading) {
              this.$refs.kick.loading = false;
            }
            this.visible1 = false;
            this.$emit('onRemoveUser', data);
          }
        }).catch(err => {
          var _this$$refs4;
          console.log(err);
          if ((_this$$refs4 = this.$refs) !== null && _this$$refs4 !== void 0 && (_this$$refs4 = _this$$refs4.kick) !== null && _this$$refs4 !== void 0 && _this$$refs4.loading) {
            this.$refs.kick.loading = false;
          }
          this.$toast.fail(err);
        });
      } else if (type === 3) {
        this.$refs.kick.loading = true;
        let item = this.curItem;
        let data = {
          group_id: item.group_id,
          msg_id: item.id
        };
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["removeUserAllMsg"])(data).then(res => {
          if (res) {
            var _this$$refs5;
            if ((_this$$refs5 = this.$refs) !== null && _this$$refs5 !== void 0 && (_this$$refs5 = _this$$refs5.kick) !== null && _this$$refs5 !== void 0 && _this$$refs5.loading) {
              this.$refs.kick.loading = false;
            }
            this.visible1 = false;
            this.$emit('onRemoveUser', data);
          }
        }).catch(err => {
          var _this$$refs6;
          console.log(err);
          if ((_this$$refs6 = this.$refs) !== null && _this$$refs6 !== void 0 && (_this$$refs6 = _this$$refs6.kick) !== null && _this$$refs6 !== void 0 && _this$$refs6.loading) {
            this.$refs.kick.loading = false;
          }
          this.$toast.fail(err);
        });
      }
    },
    pinMsg(item) {
      this.$toast.loading({
        forbidClick: false,
        duration: 0
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_1__["pinMsg"])(item.id).then(res => {
        console.log(res);
        // this.$toast({
        //   message: this.$t('unpinSuccess'),
        //   position: 'top',
        // })
        this.$toast({
          message: this.$t('pinSuccess'),
          position: 'top'
        });
        this.$emit('onRefreshPin');
      }).catch(err => {
        console.log(err);
        this.$toast({
          message: err,
          position: 'top'
        });
      });
    },
    unpinMsg(item) {
      this.$dialog.confirm({
        message: this.$t('confirmUnpinMsg'),
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel')
      }).then(() => {
        this.$toast.loading({
          forbidClick: false,
          duration: 0
        });
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["unpinMsg"])(item.id).then(res => {
          console.log(res);
          this.$toast({
            message: this.$t('unpinSuccess'),
            position: 'top'
          });
          this.$emit('onUnpin', item);
          this.$emit('onRefreshPin');
        }).catch(err => {
          console.log(err);
          this.$toast({
            message: err,
            position: 'top'
          });
        });
      }).catch(() => {
        // on cancel
      });
    },
    avatarColor(item) {
      let bgColor = item.user_address.slice(-6);
      let r = Number('0x' + bgColor.slice(0, 2)) * 0.2126;
      let g = Number('0x' + bgColor.slice(2, 4)) * 0.7152;
      let b = Number('0x' + bgColor.slice(4, 6)) * 0.0722;
      let sum = r + g + b;
      let lightness = sum / 255;
      let color = `hsl(0, 0%, ${(lightness - 0.6) * -999999}%`;
      return color;
    },
    isUser(item) {
      var _this$$store$state5, _this$$store$state6;
      return item.user_address === ((_this$$store$state5 = this.$store.state) === null || _this$$store$state5 === void 0 || (_this$$store$state5 = _this$$store$state5.chat) === null || _this$$store$state5 === void 0 || (_this$$store$state5 = _this$$store$state5.userInfo) === null || _this$$store$state5 === void 0 ? void 0 : _this$$store$state5.address) && item.user_chain === ((_this$$store$state6 = this.$store.state) === null || _this$$store$state6 === void 0 || (_this$$store$state6 = _this$$store$state6.chat) === null || _this$$store$state6 === void 0 || (_this$$store$state6 = _this$$store$state6.userInfo) === null || _this$$store$state6 === void 0 ? void 0 : _this$$store$state6.chain);
    },
    formatCalendar(time) {
      let isToday = this.$dayjs(time * 1000).isToday();
      if (isToday) {
        return this.$dayjs(time * 1000).format('HH:mm');
      }
      let isYesterday = this.$dayjs(time * 1000).isYesterday();
      if (isYesterday) {
        return this.$t('yesterday') + ' ' + this.$dayjs(time * 1000).format('HH:mm');
      }
      return this.$dayjs(time * 1000).format('YYYY-MM-DD');
    },
    formatRole(item, type = 'name') {
      var _o$role;
      let memberRole = item.member_role === 2 ? 1.5 : item.member_role;
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
      return (o === null || o === void 0 || (_o$role = o[role]) === null || _o$role === void 0 ? void 0 : _o$role[type]) || '';
    },
    draw(item) {
      var _this$$store$state$ch2, _this$$store$state$ch3, _this$groupMemberInfo, _this$groupMemberInfo2;
      if (this.$store.getters.netId !== ((_this$$store$state$ch2 = this.$store.state.chat) === null || _this$$store$state$ch2 === void 0 ? void 0 : _this$$store$state$ch2.userInfo.chain) && ((_this$$store$state$ch3 = this.$store.state.chat) === null || _this$$store$state$ch3 === void 0 ? void 0 : _this$$store$state$ch3.userInfo.chain) !== '') {
        this.$toast(this.$t('tipSwitchChain', {
          chain: 'BSC'
        }));
        return;
      }
      if (!((_this$groupMemberInfo = this.groupMemberInfo) !== null && _this$groupMemberInfo !== void 0 && _this$groupMemberInfo.group_id) || ((_this$groupMemberInfo2 = this.groupMemberInfo) === null || _this$groupMemberInfo2 === void 0 ? void 0 : _this$groupMemberInfo2.is_leave) === 1) {
        this.$toast(this.$t('tipJoin'));
        return;
      }
      if (this.$store.state.chat.userInfo.address === '') {
        this.$emit('onLogin');
      } else {
        if (JSON.parse(item.content).status != 3) {
          this.$router.push(`/chat/${this.groupId}/redRecord?packetId=${JSON.parse(item.content).id}`);
        } else {
          this.$refs.ref_draw.init(item);
        }
      }
    },
    onModifyChatGroupHistoryMsg(id, data) {
      this.$emit('onModifyChatGroupHistoryMsg', id, data);
    },
    viewDetailRedPacket(item) {
      const data = {
        groupId: this.groupId,
        redPacketId: JSON.parse(item.content).id
      };
      return new Promise((resolve, reject) => {
        Object(_api__WEBPACK_IMPORTED_MODULE_1__["viewDetailRedPacket"])(data).then(res => {
          console.log('details', res);
          this.onModifyChatGroupHistoryMsg(item.id, {
            status: res === null || res === void 0 ? void 0 : res.status
          });
          resolve(true);
        }).catch(err => {
          console.log(err);
          reject(false);
        }).finally(() => {});
      });
    },
    changeCountDown(time) {
      if (time && (time === null || time === void 0 ? void 0 : time.days) === 0 && (time === null || time === void 0 ? void 0 : time.hours) === 0 && (time === null || time === void 0 ? void 0 : time.minutes) === 0 && (time === null || time === void 0 ? void 0 : time.seconds) === 0) {
        this.timeHide = false;
        this.viewDetailRedPacket(this.item);
      }
    },
    openDapp(item) {
      // let obj = {

      //   url: item.content.url,
      //   name: item.content.name,
      //   icon: item.content.icon,
      //   intro_zh: this.language === 'zh-cn' || this.language === 'zh-tw' ? item.to_msg.content?.intro_zh : item.to_msg.content?.intro,
      // }
      let obj = JSON.stringify(item.content);
      this.$f.openBrowserDapp(obj);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/kick.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Mute',
  props: {
    visible: Boolean
  },
  emits: ['update:visible', 'onSubmit'],
  data() {
    return {
      time: '',
      checked: 3,
      // content: '',
      loading: false,
      placeholder: this.$t('pSelectBanExpirationTime'),
      showPicker: false,
      minDate: new Date()
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
    },
    role() {
      if (this.$store.state.chat.groupMemberInfo.role === '' || this.$store.state.chat.groupMemberInfo.user_role === '') {
        return '';
      }
      let memberRole = this.$store.state.chat.groupMemberInfo.role === 2 ? 1.5 : this.$store.state.chat.groupMemberInfo.role;
      let role = Math.max(memberRole, this.$store.state.chat.groupMemberInfo.user_role);
      return role;
    }
  },
  watch: {},
  methods: {
    confirmSubmit() {
      this.$emit('onSubmit', this.checked);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/redDraw.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _validateDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateDialog.vue */ "./src/components/chat/validateDialog.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RedDraw',
  components: {
    RedPacketValidateDialog: _validateDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  emits: ['onModifyChatGroupHistoryMsg'],
  data() {
    return {
      show: false,
      packetId: 0,
      groupId: 0,
      status: 0,
      receive_result: {},
      redPacket: {},
      user_nickname: '',
      id: 0,
      validateVisible: false
    };
  },
  computed: {
    language() {
      return this.$store.getters.language;
    }
  },
  methods: {
    async init(item) {
      this.id = item.id;
      this.redPacket = JSON.parse(item.content);
      this.user_nickname = item.user_nickname;
      this.packetId = JSON.parse(item.content).id;
      this.groupId = item.group_id;
      this.status = this.redPacket.status;
      if (this.status == 2 || this.status == 3) {
        //status == 2 已领取   status == 3 待领取
        await this.viewDetailRedPacket();
      }
      this.show = true;
    },
    clickOpen() {
      this.validateVisible = true;
      // this.$refs.ref_play.style['animation-duration'] = '1s'
      // setTimeout(() => {
      //   this.receiveRedPacket(this.id)
      // }, 1000)
    },
    openRedPacket({
      captcha_id,
      captcha_value
    }) {
      this.validateVisible = false;
      this.$refs.ref_play.style['animation-duration'] = '1s';
      setTimeout(() => {
        this.receiveRedPacket(this.id, captcha_id, captcha_value);
      }, 1000);
    },
    receiveRedPacket(id, captcha_id, captcha_value) {
      const data = {
        group_id: this.groupId,
        packet_id: this.packetId,
        captcha_id,
        captcha_value
      };
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["receiveRedPacket"])(data).then(res => {
        if (res.receive_status > 0) {
          this.status = 8;
          this.$emit('onModifyChatGroupHistoryMsg', id, {
            status: 4
          });
          this.receive_result = res.receive_result;
          this.$store.dispatch('getUnreceivedredpacket');
        } else {
          this.status = res.status;
        }
      }).catch(err => {
        this.$toast(err || this.$t('receiveFailed'));
        this.show = false;
        console.log(err);
      }).finally(() => {
        this.$refs.ref_play.style['animation-duration'] = '0s';
      });
    },
    viewDetailRedPacket() {
      const data = {
        groupId: this.groupId,
        redPacketId: this.packetId
      };
      let toast = this.$toast.loading({
        message: 'Loading...',
        forbidClick: true,
        duration: 0
      });
      return new Promise((resolve, reject) => {
        Object(_api__WEBPACK_IMPORTED_MODULE_0__["viewDetailRedPacket"])(data).then(res => {
          this.status = res === null || res === void 0 ? void 0 : res.status;
          this.$emit('onModifyChatGroupHistoryMsg', this.id, {
            status: this.status
          });
          resolve(true);
        }).catch(err => {
          this.$notify({
            type: 'danger',
            message: 'View Failed'
          });
          console.log(err);
          reject(false);
        }).finally(() => {
          toast.clear();
        });
      });
    },
    jump() {
      this.$router.push(`/chat/${this.groupId}/redRecord?packetId=${this.packetId}`);
      this.show = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/validateDialog.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ "./src/api/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ValidateDialog',
  props: {
    visible: Boolean
  },
  emits: ['update:visible', 'onSubmit'],
  data() {
    return {
      form: {
        value: ''
      },
      captchaCode: {
        captcha_id: '',
        image: ''
      },
      loading: false,
      disabled: false
    };
  },
  computed: {
    rules() {
      return [{
        required: true,
        message: this.$t('enterCalculation'),
        trigger: 'blur'
      }];
    },
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
        this.reset();
      }
    }
  },
  created() {
    this.reset();
  },
  methods: {
    reset() {
      if (this.visible) {
        var _this$$refs, _this$$refs$resetVali;
        this.form.value = '';
        (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.formRef) === null || _this$$refs === void 0 || (_this$$refs$resetVali = _this$$refs.resetValidation) === null || _this$$refs$resetVali === void 0 || _this$$refs$resetVali.call(_this$$refs);
        this.getCaptcha();
      }
    },
    onSubmit() {
      this.$emit('onSubmit', {
        captcha_id: this.captchaCode.captcha_id,
        captcha_value: this.form.value
      });
      // this.loading = true
      // verifyCaptcha(this.captchaCode.id, this.form.value).then(
      //   (res) => {
      //     if (res.is_verified) {
      //       this.$notify({ type: 'success', message: this.$t('verifySuccess') })
      //       this.$store.commit('setAToken', res?.ave_token)
      //       this.$store.commit('switchValidateDialogVisible', false)
      //       this.$store.state.routeKey++
      //       // window.location.reload()
      //     } else {
      //       this.$notify({ type: 'danger', message: this.$t('verifyFail') })
      //       this.reset()
      //     }
      //   }
      // ).catch(() => {
      //   this.$notify({ type: 'danger', message: this.$t('verifyFail') })
      //   this.reset()
      // }).finally(() => {
      //   this.loading = false
      // })
    },
    getCaptcha() {
      this.disabled = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["getRedCaptcha"])().then(res => {
        this.captchaCode = res;
      }).catch(err => {
        if (err && typeof err === 'string') {
          this.$toast({
            message: err,
            position: "top"
          });
        }
      }).finally(() => {
        this.disabled = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-38a56a82"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  key: 0,
  class: "chat-date"
};
const _hoisted_2 = {
  style: {
    "position": "relative",
    "width": "0.8rem",
    "height": "0.8rem"
  }
};
const _hoisted_3 = {
  key: 2,
  class: "icon-svg icon-renzheng",
  style: {
    "margin-left": "0.1rem"
  },
  "aria-hidden": "true"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-renzheng"
}, null, -1 /* HOISTED */));
const _hoisted_5 = [_hoisted_4];
const _hoisted_6 = {
  class: "chat-info"
};
const _hoisted_7 = {
  class: "chat-username"
};
const _hoisted_8 = {
  class: "van-ellipsis username"
};
const _hoisted_9 = {
  class: "chat-message"
};
const _hoisted_10 = {
  key: 0
};
const _hoisted_11 = {
  key: 0,
  class: "reply-content"
};
const _hoisted_12 = {
  class: "top"
};
const _hoisted_13 = {
  class: "bottom"
};
const _hoisted_14 = {
  key: 0,
  class: "flex-between"
};
const _hoisted_15 = {
  class: "dapp"
};
const _hoisted_16 = {
  class: "icon-token-container"
};
const _hoisted_17 = {
  class: "token-symbol"
};
const _hoisted_18 = {
  class: "mt_5 font-12 ellipsis"
};
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = {
  class: "chat-time"
};
const _hoisted_21 = ["id"];
const _hoisted_22 = {
  class: "block"
};
const _hoisted_23 = {
  class: "tip"
};
const _hoisted_24 = {
  key: 0,
  class: "tip mt-10"
};
const _hoisted_25 = {
  key: 0,
  class: "reply-content"
};
const _hoisted_26 = {
  class: "top"
};
const _hoisted_27 = {
  class: "bottom"
};
const _hoisted_28 = {
  key: 0,
  class: "flex-between"
};
const _hoisted_29 = {
  class: "dapp"
};
const _hoisted_30 = {
  class: "icon-token-container"
};
const _hoisted_31 = {
  class: "token-symbol"
};
const _hoisted_32 = {
  class: "mt_5 font-12 ellipsis"
};
const _hoisted_33 = {
  class: "dapp"
};
const _hoisted_34 = {
  class: "icon-token-container"
};
const _hoisted_35 = {
  class: "token-symbol"
};
const _hoisted_36 = {
  class: "mt_5 font-12 ellipsis"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$store$state$cha, _ctx$$store$state;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-loading");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_count_down = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-count-down");
  const _component_van_image_preview = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image-preview");
  const _component_van_grid_item = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-grid-item");
  const _component_van_grid = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-grid");
  const _component_el_popover = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("el-popover");
  const _component_Mute = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Mute");
  const _component_Kick = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Kick");
  const _component_draw = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("draw");
  const _directive_click_outside = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveDirective"])("click-outside");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$props.showDate ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatCalendar($options.item.created_time)), 1 /* TEXT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", {
    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["chat-item", {
      right: $options.isUser($options.item),
      left: !$options.isUser($options.item)
    }])
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [$options.item.user_image ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
    key: 0,
    class: "chat-avatar",
    round: "",
    width: "0.8rem",
    height: "0.8rem",
    "icon-size": "0.8rem",
    "lazy-load": "",
    "show-loading": "",
    src: $options.isUser($options.item) ? ((_ctx$$store$state$cha = _ctx.$store.state.chat) === null || _ctx$$store$state$cha === void 0 || (_ctx$$store$state$cha = _ctx$$store$state$cha.userInfo) === null || _ctx$$store$state$cha === void 0 ? void 0 : _ctx$$store$state$cha.image) || $options.item.user_image : $options.item.user_image,
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.isUser($options.item) && _ctx.$router.push({
      name: 'UserInfo'
    }), ["stop"]))
  }, null, 8 /* PROPS */, ["src"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 1,
    class: "chat-avatar",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      backgroundColor: '#' + $options.item.user_address.slice(-6),
      color: $options.avatarColor($options.item)
    }),
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.isUser($options.item) && _ctx.$router.push({
      name: 'UserInfo'
    }), ["stop"]))
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.item.user_address.slice(-2)), 5 /* TEXT, STYLE */)), $options.item.member_role === 2 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", _hoisted_3, _hoisted_5)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [$options.formatRole($options.item) ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 0,
    class: "role-tag",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
      backgroundColor: $options.formatRole($options.item, 'color')
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.formatRole($options.item)), 5 /* TEXT, STYLE */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.isUser($options.item) ? ((_ctx$$store$state = _ctx.$store.state) === null || _ctx$$store$state === void 0 || (_ctx$$store$state = _ctx$$store$state.chat) === null || _ctx$$store$state === void 0 || (_ctx$$store$state = _ctx$$store$state.userInfo) === null || _ctx$$store$state === void 0 ? void 0 : _ctx$$store$state.nickname) || $options.item.user_nickname || $options.item.user_address.slice(0, 4) + '...' + $options.item.user_address.slice(-4) : $options.item.user_nickname || $options.item.user_address.slice(0, 4) + '...' + $options.item.user_address.slice(-4)), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [$props.loading ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_loading, {
    key: 0,
    class: "chat-status loading",
    color: "#1989fa",
    size: "0.4rem"
  })) : $props.error ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("i", {
    key: 1,
    class: "chat-status error iconfont icon-Shapex",
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$emit('onReSend', $options.item), ["stop"]))
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-popover\n          v-model:show=\"showPopover\"\n          :actions=\"actions(item)\"\n          theme=\"light\"\n          trigger=\"click\"\n          icon-prefix=\"iconfont icon\"\n          overlay\n          :overlay-style=\"{ 'background-color': 'transparent' }\"\n          @select=\"onSelect(item, index, $event)\"\n          placement=\"bottom\"\n        >\n          <template #reference>\n            <div class=\"chat-text-content\" @contextmenu.prevent @touchstart.passive=\"longTap(item)\" @touchmove.passive=\"clearTouch\" @touchend.passive=\"clearTouch\">\n              <span\n                v-html=\"$f.urlToLink(item.content)\"\n                style=\"line-height: 1.5\"\n              ></span>\n              <span\n                v-html=\"item.content\"\n                style=\"line-height: 1.5\"\n              ></span>\n              <div class=\"chat-time\">\n                {{ $f.formatDate(item.created_time, 'HH:mm') }}\n              </div>\n            </div>\n          </template>\n        </van-popover> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_el_popover, {
    visible: $data.showPopover,
    "onUpdate:visible": _cache[24] || (_cache[24] = $event => $data.showPopover = $event),
    title: "",
    placement: "bottom",
    width: $options.columnNum($options.item) * 70 / 50 + 'rem',
    "popper-class": "chat-popover",
    "popper-options": {
      modifiers: [{
        name: 'flip',
        options: {
          padding: 5,
          fallbackPlacements: ['bottom', 'top', 'right', 'left']
        }
      }]
    }
  }, {
    reference: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$options$item$to_msg, _$options$item$to_msg2, _$options$item$to_msg3, _$options$item$to_msg4, _$options$item$to_msg5, _$options$item$to_msg6, _$options$item$to_msg7, _$options$item$to_msg8, _$options$item$to_msg9, _$options$item$to_msg0, _$options$item$to_msg1, _$options$item$to_msg10, _$options$item$to_msg11, _$options$item$to_msg12, _$options$item$to_msg13, _$options$item$to_msg14, _$options$item$to_msg15, _$options$item$to_msg16, _$options$item$to_msg17, _$options$item$to_msg18, _$options$item$conten, _$options$item$conten2, _$options$item$conten3;
      return [$options.item.type == 1 || $options.item.type == 2 || $options.item.type == 3 || $options.item.type == 4 || $options.item.type == 5 || $options.item.type == 6 || $options.item.type == 7 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_10, [$options.item.type == 1 ? Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 0,
        class: "chat-text-content",
        onClick: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showPopover = !$data.showPopover, ["stop"])),
        onContextmenu: _cache[6] || (_cache[6] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])(() => {}, ["prevent"])),
        onTouchstartPassive: _cache[7] || (_cache[7] = $event => $options.longTap($options.item)),
        onTouchmovePassive: _cache[8] || (_cache[8] = (...args) => $options.clearTouch && $options.clearTouch(...args)),
        onTouchendPassive: _cache[9] || (_cache[9] = (...args) => $options.clearTouch && $options.clearTouch(...args))
      }, [$options.item.to_msg ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_11, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.item.to_msg.user_nickname || (((_$options$item$to_msg = $options.item.to_msg) === null || _$options$item$to_msg === void 0 || (_$options$item$to_msg = _$options$item$to_msg.user_address) === null || _$options$item$to_msg === void 0 || (_$options$item$to_msg2 = _$options$item$to_msg.slice) === null || _$options$item$to_msg2 === void 0 ? void 0 : _$options$item$to_msg2.call(_$options$item$to_msg, 0, 4)) || '') + '...' + (((_$options$item$to_msg3 = $options.item.to_msg) === null || _$options$item$to_msg3 === void 0 || (_$options$item$to_msg3 = _$options$item$to_msg3.user_address) === null || _$options$item$to_msg3 === void 0 || (_$options$item$to_msg4 = _$options$item$to_msg3.slice) === null || _$options$item$to_msg4 === void 0 ? void 0 : _$options$item$to_msg4.call(_$options$item$to_msg3, -4)) || '')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [$options.item.to_msg.type == 7 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        round: "",
        width: "0.5rem",
        height: "0.5rem",
        "icon-size": "0.5rem",
        "lazy-load": "",
        "show-loading": "",
        src: $options.item.to_msg.content.icon,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$item$to_msg5 = $options.item.to_msg.content) === null || _$options$item$to_msg5 === void 0 ? void 0 : _$options$item$to_msg5.name), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.language === 'zh-cn' || $options.language === 'zh-tw' ? (_$options$item$to_msg6 = $options.item.to_msg.content) === null || _$options$item$to_msg6 === void 0 ? void 0 : _$options$item$to_msg6.intro_zh : (_$options$item$to_msg7 = $options.item.to_msg.content) === null || _$options$item$to_msg7 === void 0 ? void 0 : _$options$item$to_msg7.intro), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-dapp link-dapp", {
          blue: !$options.isUser($options.item)
        }])
      }, null, 2 /* CLASS */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 1
      }, [$options.item.to_msg.type == 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: 0,
        width: "20",
        style: {
          "min-height": "20px"
        },
        fit: "cover",
        "lazy-load": "",
        src: $options.item.to_msg.image_content
      }, {
        loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_loading, {
          type: "spinner",
          size: "20"
        })]),
        error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
          name: "close",
          size: "20"
        })]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["src"])) : $options.item.to_msg.type != 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 1,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["van-ellipsis", {
          pre: $data.expand || ((_$options$item$to_msg8 = $options.item.to_msg) === null || _$options$item$to_msg8 === void 0 ? void 0 : _$options$item$to_msg8.content.length) <= 60
        }]),
        style: {
          "flex": "1"
        }
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$item$to_msg9 = $options.item.to_msg) === null || _$options$item$to_msg9 === void 0 ? void 0 : _$options$item$to_msg9.content) || ''), 3 /* TEXT, CLASS */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), ((_$options$item$to_msg0 = $options.item.to_msg) === null || _$options$item$to_msg0 === void 0 ? void 0 : _$options$item$to_msg0.content.length) > 60 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 2
      }, [!$data.expand ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 0,
        class: "expand",
        onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.expand = true, ["stop"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('expand')), 1 /* TEXT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 1,
        class: "expand",
        onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.expand = false, ["stop"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('collapse')), 1 /* TEXT */))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", {
        innerHTML: $options.item.content,
        style: {
          "line-height": "1.5"
        }
      }, null, 8 /* PROPS */, _hoisted_19), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate($options.item.created_time, 'HH:mm')), 1 /* TEXT */)], 32 /* HYDRATE_EVENTS */)), [[_directive_click_outside, $options.close]]) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.item.type == 6 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 1,
        id: $options.item.id,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["chat-text-content red-packet", {
          end: JSON.parse($options.item.content).status == -1 || JSON.parse($options.item.content).status == 1 || JSON.parse($options.item.content).status == 2 || JSON.parse($options.item.content).status == 5,
          receive: JSON.parse($options.item.content).status == 4
        }]),
        onClick: _cache[10] || (_cache[10] = $event => $options.draw($options.item))
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(JSON.parse($options.item.content).remark), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_23, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.filterRedPacketStatus(JSON.parse($options.item.content).status)), 1 /* TEXT */), JSON.parse($options.item.content).status == 3 || JSON.parse($options.item.content).status == 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", _hoisted_24, [$data.timeHide ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_count_down, {
        key: 0,
        time: $options.timeCountDown,
        onChange: $options.changeCountDown
      }, null, 8 /* PROPS */, ["time", "onChange"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        class: "icon",
        src: __webpack_require__(/*! @/assets/images/redPacket/wallet.svg */ "./src/assets/images/redPacket/wallet.svg")
      }, null, 8 /* PROPS */, ["src"])], 10 /* CLASS, PROPS */, _hoisted_21)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.item.type == 4 ? Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 2,
        class: "chat-text-content",
        onClick: _cache[14] || (_cache[14] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => {
          $data.showImage = true;
          $data.showPopover = false;
        }, ["stop"])),
        onContextmenu: _cache[15] || (_cache[15] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])(() => {}, ["prevent"])),
        onTouchstartPassive: _cache[16] || (_cache[16] = $event => $options.longTap($options.item)),
        onTouchmovePassive: _cache[17] || (_cache[17] = (...args) => $options.clearTouch && $options.clearTouch(...args)),
        onTouchendPassive: _cache[18] || (_cache[18] = (...args) => $options.clearTouch && $options.clearTouch(...args))
      }, [$options.item.to_msg ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.item.to_msg.user_nickname || (((_$options$item$to_msg1 = $options.item.to_msg) === null || _$options$item$to_msg1 === void 0 || (_$options$item$to_msg1 = _$options$item$to_msg1.user_address) === null || _$options$item$to_msg1 === void 0 || (_$options$item$to_msg10 = _$options$item$to_msg1.slice) === null || _$options$item$to_msg10 === void 0 ? void 0 : _$options$item$to_msg10.call(_$options$item$to_msg1, 0, 4)) || '') + '...' + (((_$options$item$to_msg11 = $options.item.to_msg) === null || _$options$item$to_msg11 === void 0 || (_$options$item$to_msg11 = _$options$item$to_msg11.user_address) === null || _$options$item$to_msg11 === void 0 || (_$options$item$to_msg12 = _$options$item$to_msg11.slice) === null || _$options$item$to_msg12 === void 0 ? void 0 : _$options$item$to_msg12.call(_$options$item$to_msg11, -4)) || '')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_27, [$options.item.to_msg.type == 7 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_28, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_29, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_30, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        round: "",
        width: "0.5rem",
        height: "0.5rem",
        "icon-size": "0.5rem",
        "lazy-load": "",
        "show-loading": "",
        src: $options.item.to_msg.content.icon,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$item$to_msg13 = $options.item.to_msg.content) === null || _$options$item$to_msg13 === void 0 ? void 0 : _$options$item$to_msg13.name), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.language === 'zh-cn' || $options.language === 'zh-tw' ? (_$options$item$to_msg14 = $options.item.to_msg.content) === null || _$options$item$to_msg14 === void 0 ? void 0 : _$options$item$to_msg14.intro_zh : (_$options$item$to_msg15 = $options.item.to_msg.content) === null || _$options$item$to_msg15 === void 0 ? void 0 : _$options$item$to_msg15.intro), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-dapp link-dapp", {
          blue: !$options.isUser($options.item)
        }])
      }, null, 2 /* CLASS */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 1
      }, [$options.item.to_msg.type == 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: 0,
        width: "20",
        style: {
          "min-height": "100px"
        },
        fit: "cover",
        "lazy-load": "",
        src: $options.item.to_msg.image_content
      }, {
        loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_loading, {
          type: "spinner",
          size: "20"
        })]),
        error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
          name: "close",
          size: "20"
        })]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["src"])) : $options.item.to_msg.type != 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 1,
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["van-ellipsis", {
          pre: $data.expand || ((_$options$item$to_msg16 = $options.item.to_msg) === null || _$options$item$to_msg16 === void 0 ? void 0 : _$options$item$to_msg16.content.length) <= 60
        }]),
        style: {
          "flex": "1"
        }
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$item$to_msg17 = $options.item.to_msg) === null || _$options$item$to_msg17 === void 0 ? void 0 : _$options$item$to_msg17.content) || ''), 3 /* TEXT, CLASS */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), ((_$options$item$to_msg18 = $options.item.to_msg) === null || _$options$item$to_msg18 === void 0 ? void 0 : _$options$item$to_msg18.content.length) > 60 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: 2
      }, [!$data.expand ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 0,
        class: "expand",
        onClick: _cache[11] || (_cache[11] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.expand = true, ["stop"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('expand')), 1 /* TEXT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("span", {
        key: 1,
        class: "expand",
        onClick: _cache[12] || (_cache[12] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.expand = false, ["stop"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('collapse')), 1 /* TEXT */))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */))])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image_preview, {
        style: {
          "padding": "0 10px"
        },
        show: $data.showImage,
        "onUpdate:show": _cache[13] || (_cache[13] = $event => $data.showImage = $event),
        images: [$options.item.image_content],
        closeOnPopstate: ""
      }, null, 8 /* PROPS */, ["show", "images"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        width: "100",
        style: {
          "min-height": "100px"
        },
        fit: "cover",
        "lazy-load": "",
        src: $options.item.image_content
      }, {
        loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_loading, {
          type: "spinner",
          size: "20"
        })]),
        error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
          name: "close",
          size: "20"
        })]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["src"])], 32 /* HYDRATE_EVENTS */)), [[_directive_click_outside, $options.close]]) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.item.type == 7 ? Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
        key: 3,
        class: "chat-text-content flex-between",
        onClick: _cache[19] || (_cache[19] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.openDapp($options.item), ["stop", "prevent"])),
        onContextmenu: _cache[20] || (_cache[20] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])(() => {}, ["prevent"])),
        onTouchstartPassive: _cache[21] || (_cache[21] = $event => $options.longTap($options.item)),
        onTouchmovePassive: _cache[22] || (_cache[22] = (...args) => $options.clearTouch && $options.clearTouch(...args)),
        onTouchendPassive: _cache[23] || (_cache[23] = (...args) => $options.clearTouch && $options.clearTouch(...args))
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_33, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_34, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        round: "",
        width: "0.5rem",
        height: "0.5rem",
        "icon-size": "0.5rem",
        "lazy-load": "",
        "show-loading": "",
        src: $options.item.content.icon,
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_35, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$options$item$conten = $options.item.content) === null || _$options$item$conten === void 0 ? void 0 : _$options$item$conten.name), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_36, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.language === 'zh-cn' || $options.language === 'zh-tw' ? (_$options$item$conten2 = $options.item.content) === null || _$options$item$conten2 === void 0 ? void 0 : _$options$item$conten2.intro_zh : (_$options$item$conten3 = $options.item.content) === null || _$options$item$conten3 === void 0 ? void 0 : _$options$item$conten3.intro), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
        class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(["iconfont icon-dapp link-dapp", {
          blue: !$options.isUser($options.item)
        }])
      }, null, 2 /* CLASS */)], 32 /* HYDRATE_EVENTS */)), [[_directive_click_outside, $options.close]]) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)];
    }),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_grid, {
      border: false,
      clickable: "",
      "column-num": $options.columnNum($options.item)
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($options.actions($options.item), (i, index) => {
        return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          key: index
        }, [!(($options.item.type == 4 || $options.item.type == 7) && i.icon == 'copy-o') ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_grid_item, {
          key: 0,
          text: i.text,
          style: {
            "--van-grid-item-content-padding": "5px 10px",
            "--van-grid-item-content-background-color": "transparent"
          },
          onClick: $event => $options.onSelect($options.item, index, i)
        }, {
          icon: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
            class: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeClass"])(`iconfont icon-${i.icon}`),
            style: {
              "font-size": "0.4rem"
            }
          }, null, 2 /* CLASS */)]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["text", "onClick"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
      }), 128 /* KEYED_FRAGMENT */))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["column-num"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["visible", "width"])])])], 2 /* CLASS */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Mute, {
    ref: "mute",
    visible: $data.visible,
    "onUpdate:visible": _cache[25] || (_cache[25] = $event => $data.visible = $event),
    onOnSubmit: $options.mute
  }, null, 8 /* PROPS */, ["visible", "onOnSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_Kick, {
    ref: "kick",
    visible: $data.visible1,
    "onUpdate:visible": _cache[26] || (_cache[26] = $event => $data.visible1 = $event),
    onOnSubmit: $options.kick
  }, null, 8 /* PROPS */, ["visible", "onOnSubmit"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_draw, {
    ref: "ref_draw",
    onOnModifyChatGroupHistoryMsg: $options.onModifyChatGroupHistoryMsg
  }, null, 8 /* PROPS */, ["onOnModifyChatGroupHistoryMsg"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-2279803d"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "popup-title"
};
const _hoisted_2 = {
  class: "form-submit"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_radio = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-radio");
  const _component_van_radio_group = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-radio-group");
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
      'min-height': '20vh'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutChat')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "popup-content",
      onSubmit: $options.confirmSubmit
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_radio_group, {
        modelValue: $data.checked,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.checked = $event)
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [$options.role > 1.5 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_radio, {
          key: 0,
          class: "mb_10",
          name: 3
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutTheChatAllSpeakers')), 1 /* TEXT */)]),
          _: 1 /* STABLE */
        })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $options.role > 1.5 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_radio, {
          key: 1,
          class: "mb_10",
          name: 2
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutAllChat')), 1 /* TEXT */)]),
          _: 1 /* STABLE */
        })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_radio, {
          class: "mb_10",
          name: 1
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutTheChat')), 1 /* TEXT */)]),
          _: 1 /* STABLE */
        })]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "btn",
        round: "",
        onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.dialogVisible = false, ["stop"]))
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('cancel')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "btn",
        round: "",
        "native-type": "submit",
        type: "primary",
        loading: $data.loading
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('confirm1')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading"])])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-76ca3a64"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "red-packet"
};
const _hoisted_2 = {
  class: "wrapper"
};
const _hoisted_3 = {
  style: {
    "width": "100%",
    "position": "relative"
  }
};
const _hoisted_4 = {
  class: "packet"
};
const _hoisted_5 = {
  ref: "slide",
  class: "slide"
};
const _hoisted_6 = {
  class: "info"
};
const _hoisted_7 = {
  class: "color-FFDA71 mt-25 block"
};
const _hoisted_8 = {
  class: "font-22 color-FFDA71 mt-18 block"
};
const _hoisted_9 = {
  class: "tip"
};
const _hoisted_10 = {
  class: "success",
  ref: "success"
};
const _hoisted_11 = {
  class: "color-333 font-16 block mt-25"
};
const _hoisted_12 = {
  class: "color-FF3C3C font-22 block mt-25"
};
const _hoisted_13 = {
  class: "color-333 block mt_5 flex"
};
const _hoisted_14 = {
  class: "padding-15"
};
const _hoisted_15 = {
  class: "color-fff font-12 mt-10"
};
const _hoisted_16 = {
  class: "tip",
  style: {
    "margin-bottom": "74px"
  }
};
const _hoisted_17 = {
  ref: "slide",
  class: "slide transition"
};
const _hoisted_18 = {
  class: "relative"
};
const _hoisted_19 = {
  class: "color-FFDA71 mt-55 block"
};
const _hoisted_20 = {
  class: "font-22 color-FFDA71 mt-120 block"
};
const _hoisted_21 = {
  class: "bottom"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_overlay = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-overlay");
  const _component_RedPacketValidateDialog = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("RedPacketValidateDialog");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_overlay, {
    show: $data.show,
    onClick: _cache[5] || (_cache[5] = $event => $data.show = false)
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$data$redPacket, _$data$redPacket$slic, _$data$redPacket2, _$data$redPacket2$sli, _$data$redPacket3, _$data$redPacket3$sli, _$data$redPacket4, _$data$redPacket4$sli;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
        class: "icon",
        name: "close",
        onClick: _cache[0] || (_cache[0] = $event => $data.show = false),
        style: {
          "position": "absolute"
        }
      }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
        class: "flex",
        onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])(() => {}, ["stop"])),
        style: {
          "justify-content": "center",
          "width": "100%"
        }
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, null, 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("button", {
        class: "play",
        ref: "ref_play",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.clickOpen && $options.clickOpen(...args))
      }, [$options.language === 'en' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: 0,
        round: "",
        width: "80px",
        height: "80px",
        "icon-size": "80px",
        "lazy-load": "",
        "show-loading": "",
        src: __webpack_require__(/*! @/assets/images/redPacket/open-en.png */ "./src/assets/images/redPacket/open-en.png")
      }, null, 8 /* PROPS */, ["src"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: 1,
        round: "",
        width: "80px",
        height: "80px",
        "icon-size": "80px",
        "lazy-load": "",
        "show-loading": "",
        src: __webpack_require__(/*! @/assets/images/redPacket/open-zh.png */ "./src/assets/images/redPacket/open-zh.png")
      }, null, 8 /* PROPS */, ["src"]))], 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_7, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('whoSend', {
        user: $data.user_nickname || (((_$data$redPacket = $data.redPacket) === null || _$data$redPacket === void 0 || (_$data$redPacket = _$data$redPacket.creator_address) === null || _$data$redPacket === void 0 || (_$data$redPacket$slic = _$data$redPacket.slice) === null || _$data$redPacket$slic === void 0 ? void 0 : _$data$redPacket$slic.call(_$data$redPacket, 0, 4)) || '') + '...' + (((_$data$redPacket2 = $data.redPacket) === null || _$data$redPacket2 === void 0 || (_$data$redPacket2 = _$data$redPacket2.creator_address) === null || _$data$redPacket2 === void 0 || (_$data$redPacket2$sli = _$data$redPacket2.slice) === null || _$data$redPacket2$sli === void 0 ? void 0 : _$data$redPacket2$sli.call(_$data$redPacket2, -4)) || '')
      })), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.redPacket.remark), 1 /* TEXT */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.status == 3]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
        style: Object(vue__WEBPACK_IMPORTED_MODULE_0__["normalizeStyle"])({
          'background-image': 'url(' + __webpack_require__(/*! @/assets/images/redPacket/drawBg.svg */ "./src/assets/images/redPacket/drawBg.svg") + ')'
        })
      }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('congratulations1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatNumber2($data.receive_result.amount) || 0) + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('per')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
        round: "",
        width: "18px",
        height: "18px",
        "icon-size": "18px",
        "lazy-load": "",
        "show-loading": "",
        class: "icon-left",
        src: _ctx.$f.formatIcon(`${$data.receive_result.contract_address}-${$data.receive_result.contract_chain}`),
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("  " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.receive_result.contract_symbol || '--'), 1 /* TEXT */)])], 4 /* STYLE */)], 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_15, "*" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('tipDraw')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "mt-10",
        round: "",
        color: "#FFDA71",
        style: {
          "width": "100%",
          "color": "#dd3b3b"
        },
        onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.show = false, ["stop"]))
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('iKnown')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      })])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.status == 8]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_16, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_17, null, 512 /* NEED_PATCH */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('whoSend', {
        user: $data.user_nickname || (((_$data$redPacket3 = $data.redPacket) === null || _$data$redPacket3 === void 0 || (_$data$redPacket3 = _$data$redPacket3.creator_address) === null || _$data$redPacket3 === void 0 || (_$data$redPacket3$sli = _$data$redPacket3.slice) === null || _$data$redPacket3$sli === void 0 ? void 0 : _$data$redPacket3$sli.call(_$data$redPacket3, 0, 4)) || '') + '...' + (((_$data$redPacket4 = $data.redPacket) === null || _$data$redPacket4 === void 0 || (_$data$redPacket4 = _$data$redPacket4.creator_address) === null || _$data$redPacket4 === void 0 || (_$data$redPacket4$sli = _$data$redPacket4.slice) === null || _$data$redPacket4$sli === void 0 ? void 0 : _$data$redPacket4$sli.call(_$data$redPacket4, -4)) || '')
      })), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.filterRedPacketStatus($data.status)), 1 /* TEXT */)])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.status == -1 || $data.status == 1 || $data.status == 4 || $data.status == 5]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("a", {
        href: "",
        onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.jump && $options.jump(...args), ["stop", "prevent"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('seeLuck')) + ">", 1 /* TEXT */)])])])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_RedPacketValidateDialog, {
    ref: "redValid",
    visible: $data.validateVisible,
    "onUpdate:visible": _cache[6] || (_cache[6] = $event => $data.validateVisible = $event),
    onOnSubmit: $options.openRedPacket
  }, null, 8 /* PROPS */, ["visible", "onOnSubmit"])]);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-4b01d935"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "popup-title"
};
const _hoisted_2 = {
  class: "captchaCode"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = ["disabled"];
const _hoisted_5 = {
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
    closeable: false,
    "close-on-click-overlay": false,
    "close-on-popstate": false,
    round: "",
    position: "center",
    teleport: "#app",
    style: {
      width: '90%',
      'min-height': 'auto'
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('securityVerification')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
      class: "popup-content",
      ref: "formRef",
      onSubmit: $options.onSubmit
    }, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
        class: "image-captchaCode",
        src: $data.captchaCode.image,
        alt: "",
        srcset: ""
      }, null, 8 /* PROPS */, _hoisted_3), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("button", {
        class: "btn-text",
        type: "button",
        disabled: $data.disabled,
        onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.getCaptcha && $options.getCaptcha(...args), ["stop", "prevent"]))
      }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('refreshCode')), 9 /* TEXT, PROPS */, _hoisted_4)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
        modelValue: $data.form.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.form.value = $event),
        modelModifiers: {
          trim: true
        },
        placeholder: _ctx.$t('enterCalculation'),
        clearable: "",
        rules: $options.rules
      }, null, 8 /* PROPS */, ["modelValue", "placeholder", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
        class: "btn",
        "native-type": "submit",
        loading: $data.loading,
        disabled: $data.disabled,
        type: "primary",
        block: ""
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('verify')), 1 /* TEXT */)]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading", "disabled"])])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onSubmit"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-content[data-v-38a56a82] {\n  background: #f8f8f8;\n  min-height: calc(100vh - 3rem);\n  padding-bottom: 2.4rem;\n}\n.chat-item[data-v-38a56a82] {\n  display: flex;\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0.008rem;\n  font-weight: 400;\n  padding: 0.2rem 0.3rem;\n  width: 100vw;\n  user-select: none;\n  --van-count-down-text-color: #ffda71;\n}\n.chat-item.left .chat-info[data-v-38a56a82] {\n  align-items: flex-start;\n  padding-left: 0.1rem;\n}\n.chat-item.left .chat-avatar[data-v-38a56a82] {\n  margin-right: 0.1rem;\n}\n.chat-item.left .chat-text-content.red-packet[data-v-38a56a82] {\n  background: #ed4a4a;\n  width: 5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  padding: 0.4rem 0.32rem;\n}\n.chat-item.left .chat-text-content.red-packet.end[data-v-38a56a82] {\n  opacity: 0.4;\n}\n.chat-item.left .chat-text-content.red-packet.receive[data-v-38a56a82] {\n  opacity: 0.7;\n}\n.chat-item.left .chat-text-content.red-packet span[data-v-38a56a82] {\n  font-size: 0.3rem;\n}\n.chat-item.left .chat-text-content.red-packet span.tip[data-v-38a56a82] {\n  font-size: 0.24rem;\n  margin-top: 0.1rem;\n  display: block;\n}\n.chat-item.left .chat-text-content.red-packet span.tip.mt-10[data-v-38a56a82] {\n  margin-top: 0.2rem;\n}\n.chat-item.left .chat-text-content.red-packet span.tip.color-FFDA71[data-v-38a56a82] {\n  color: #ffda71;\n}\n.chat-item.left .chat-text-content.red-packet .icon[data-v-38a56a82] {\n  width: 0.88rem;\n}\n.chat-item.left .chat-text-content.red-packet[data-v-38a56a82]::before {\n  background: #ed4a4a;\n}\n.chat-item.left .chat-text-content[data-v-38a56a82]::before {\n  position: absolute;\n  content: \"\";\n  width: 0.4rem;\n  left: -0.24rem;\n  top: 0.1rem;\n  height: 0.4rem;\n  clip-path: polygon(100% 100%, 20% 50%, 100% 0);\n  background-color: #fff;\n}\n.chat-item.right[data-v-38a56a82] {\n  flex-direction: row-reverse;\n}\n.chat-item.right .chat-info[data-v-38a56a82] {\n  align-items: flex-end;\n  padding-right: 0.1rem;\n}\n.chat-item.right .chat-avatar[data-v-38a56a82] {\n  margin-left: 0.1rem;\n}\n.chat-item.right .chat-text-content[data-v-38a56a82] {\n  background-color: #c0d6ff;\n}\n.chat-item.right .chat-text-content.red-packet[data-v-38a56a82] {\n  background: #ed4a4a;\n  width: 5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #fff;\n  padding: 0.4rem 0.32rem;\n}\n.chat-item.right .chat-text-content.red-packet.end[data-v-38a56a82] {\n  opacity: 0.4;\n}\n.chat-item.right .chat-text-content.red-packet.receive[data-v-38a56a82] {\n  opacity: 0.7;\n}\n.chat-item.right .chat-text-content.red-packet span[data-v-38a56a82] {\n  font-size: 0.3rem;\n}\n.chat-item.right .chat-text-content.red-packet span.tip[data-v-38a56a82] {\n  font-size: 0.24rem;\n  margin-top: 0.1rem;\n  display: block;\n}\n.chat-item.right .chat-text-content.red-packet span.tip.mt-10[data-v-38a56a82] {\n  margin-top: 0.2rem;\n}\n.chat-item.right .chat-text-content.red-packet span.tip.color-FFDA71[data-v-38a56a82] {\n  color: #ffda71;\n}\n.chat-item.right .chat-text-content.red-packet .icon[data-v-38a56a82] {\n  width: 0.88rem;\n}\n.chat-item.right .chat-text-content.red-packet[data-v-38a56a82]::before {\n  background: #ed4a4a;\n}\n.chat-item.right .chat-text-content[data-v-38a56a82]::before {\n  position: absolute;\n  content: \"\";\n  width: 0.4rem;\n  right: -0.24rem;\n  top: 0.1rem;\n  height: 0.4rem;\n  clip-path: polygon(0 0, 80% 50%, 0 100%);\n  background-color: #c0d6ff;\n}\n.chat-avatar[data-v-38a56a82] {\n  width: 0.8rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  border-radius: 50%;\n  background-color: #a695e7;\n  text-align: center;\n  color: #fff;\n}\n.chat-info[data-v-38a56a82] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.chat-username[data-v-38a56a82] {\n  margin-bottom: 0.1rem;\n  display: flex;\n  align-items: center;\n}\n.chat-username .role-tag[data-v-38a56a82] {\n  background: #1fd0a3;\n  border-radius: 0.08rem;\n  font-size: 0.2rem;\n  color: #ffffff;\n  letter-spacing: 0;\n  font-weight: 400;\n  padding: 0.04rem 0.1rem;\n  text-align: center;\n  margin-right: 0.1rem;\n}\n.chat-username .username[data-v-38a56a82] {\n  display: inline-block;\n  max-width: 3rem;\n}\n.chat-username .icon-renzheng[data-v-38a56a82] {\n  margin-left: 0.1rem;\n}\n.chat-message[data-v-38a56a82] {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  display: flex;\n  align-items: center;\n}\n.chat-status[data-v-38a56a82] {\n  margin-right: 0.1rem;\n}\n.chat-status.error[data-v-38a56a82] {\n  color: var(--van-danger-color);\n}\n.chat-text-content[data-v-38a56a82] {\n  font-size: 0.3rem;\n  color: #333333;\n  letter-spacing: 0.01rem;\n  font-weight: 400;\n  min-width: 2rem;\n  position: relative;\n  background-color: #fff;\n  padding: 0.24rem 0.2rem 0.4rem 0.2rem;\n  border-radius: 0.2rem;\n  word-break: break-word;\n  white-space: pre-wrap;\n  max-width: calc(100vw - 2.4rem);\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.chat-text-content[data-v-38a56a82]::before {\n  position: absolute;\n  content: \"\";\n  width: 0.4rem;\n  top: 0.1rem;\n  height: 0.4rem;\n  background-color: #fff;\n}\n.chat-text-content[data-v-38a56a82]:active {\n  opacity: 0.5;\n}\n.chat-time[data-v-38a56a82] {\n  position: absolute;\n  right: 0.2rem;\n  bottom: 0.1rem;\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0.008rem;\n  font-weight: 400;\n}\n.chat-date[data-v-38a56a82] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0.008rem;\n  font-weight: 400;\n  text-align: center;\n  padding: 0.3rem 0;\n}\n.icon-renzheng[data-v-38a56a82] {\n  position: absolute;\n  bottom: -0.04rem;\n  right: -0.02rem;\n  z-index: 1;\n}\n.reply-content[data-v-38a56a82] {\n  border-left: 0.02rem solid #3f80f7;\n  margin: 0 0 0.1rem 0.04rem;\n  padding-left: 0.1rem;\n  font-size: 0.28rem;\n  flex: 1;\n}\n.reply-content .top[data-v-38a56a82] {\n  color: #3f80f7;\n  font-weight: 400;\n}\n.reply-content .bottom[data-v-38a56a82] {\n  color: #999;\n  font-weight: 400;\n  margin-top: 0.06rem;\n  font-size: 0.24rem;\n  display: flex;\n  align-items: flex-end;\n}\n.reply-content .bottom .pre[data-v-38a56a82] {\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.reply-content .bottom .expand[data-v-38a56a82] {\n  color: #3f80f7;\n}\n.reply-content .mt-10[data-v-38a56a82] {\n  margin-top: 0.2rem;\n}\n.flex-between[data-v-38a56a82] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.link-dapp[data-v-38a56a82] {\n  font-size: 0.48rem;\n  color: #fff;\n}\n.link-dapp.blue[data-v-38a56a82] {\n  color: #c0d6ff;\n}\n.dapp[data-v-38a56a82] {\n  display: flex;\n  flex-direction: column;\n}\n.dapp .icon-token-container[data-v-38a56a82] {\n  display: flex;\n  align-items: center;\n}\n.dapp .icon-token-container .token-symbol[data-v-38a56a82] {\n  margin-left: 0.1rem;\n}\n.dapp .ellipsis[data-v-38a56a82] {\n  line-height: 1.5;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 4rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".popup-content[data-v-2279803d] {\n  font-size: 0.28rem;\n}\n.form-submit[data-v-2279803d] {\n  margin: 0.4rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n.form-submit .btn[data-v-2279803d] {\n  min-width: 45%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".red-packet[data-v-76ca3a64] {\n  --van-overlay-z-index: 3;\n}\n.red-packet .wrapper[data-v-76ca3a64] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n}\n.red-packet .icon[data-v-76ca3a64] {\n  top: -1rem;\n  font-size: 0.64rem;\n  left: 6rem;\n  color: #fff;\n}\n.red-packet .packet[data-v-76ca3a64] {\n  width: 80%;\n  padding: 0.4rem 0;\n  min-height: 7.12rem;\n  background: #ed4a4a;\n  border: 0.02rem solid #ffda71;\n  border-radius: 0.3rem;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  font-size: 0.28rem;\n  font-weight: 400;\n}\n.red-packet .packet .slide[data-v-76ca3a64] {\n  position: absolute;\n  width: 100%;\n  bottom: 4.76rem;\n  height: 12rem;\n  border-radius: 2rem;\n  background: #ed4a4a;\n  border: 0.02rem solid #ffda71;\n}\n.red-packet .packet .transition[data-v-76ca3a64] {\n  transition: bottom 0.4s;\n}\n.red-packet .packet .relative[data-v-76ca3a64] {\n  position: relative;\n  z-index: 2;\n}\n.red-packet .packet .play[data-v-76ca3a64] {\n  cursor: pointer;\n  position: relative;\n  top: 1.2rem;\n  color: #c56e00;\n  background: transparent;\n  border: none;\n  animation: myrotate-76ca3a64 0s infinite;\n}\n@keyframes myrotate-76ca3a64 {\n0% {\n    transform: rotateY(0deg);\n}\n100% {\n    transform: rotateY(360deg);\n}\n}\n.red-packet .packet .info[data-v-76ca3a64] {\n  margin-top: 1.8rem;\n  margin-bottom: 1.04rem;\n}\n.red-packet .packet .success[data-v-76ca3a64] {\n  padding: 0 0.3rem;\n  width: 100%;\n  background: #da5751;\n  border: 0.02rem solid #ffda71;\n  border-radius: 0 0 1.6rem 1.6rem;\n  position: relative;\n  top: -0.6rem;\n  overflow: hidden;\n}\n.red-packet .packet .success > div[data-v-76ca3a64] {\n  width: 100%;\n  padding: 0.4rem 0 0.8rem;\n  border-radius: 0.16rem;\n  top: 0.6rem;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  position: relative;\n  border: 0.02rem solid #ffda71;\n}\n.red-packet .packet .bottom[data-v-76ca3a64] {\n  color: #ffda71;\n  text-align: center;\n  width: 100%;\n}\n.red-packet .packet .bottom a[data-v-76ca3a64] {\n  color: #ffda71;\n}\n.red-packet .packet .bottom a[data-v-76ca3a64]:hover {\n  text-decoration: underline;\n}\n.red-packet .packet .color-FFDA71[data-v-76ca3a64] {\n  color: #ffda71;\n}\n.red-packet .packet .color-FF3C3C[data-v-76ca3a64] {\n  color: #ff3c3c;\n}\n.red-packet .packet .color-333[data-v-76ca3a64] {\n  color: #333;\n}\n.red-packet .packet .color-fff[data-v-76ca3a64] {\n  color: #fff;\n}\n.red-packet .packet .font-22[data-v-76ca3a64] {\n  font-size: 0.44rem;\n}\n.red-packet .packet .font-16[data-v-76ca3a64] {\n  font-size: 0.32rem;\n}\n.red-packet .packet .font-12[data-v-76ca3a64] {\n  font-size: 0.24rem;\n}\n.red-packet .packet .mt-25[data-v-76ca3a64] {\n  margin-top: 0.5rem;\n}\n.red-packet .packet .mt-5[data-v-76ca3a64] {\n  margin-top: 0.1rem;\n}\n.red-packet .packet .mt-10[data-v-76ca3a64] {\n  margin-top: 0.2rem;\n}\n.red-packet .packet .mt-18[data-v-76ca3a64] {\n  margin-top: 0.36rem;\n}\n.red-packet .packet .mt-55[data-v-76ca3a64] {\n  margin-top: 1.1rem;\n}\n.red-packet .packet .mt-120[data-v-76ca3a64] {\n  margin-top: 2.4rem;\n}\n.red-packet .packet .padding-15[data-v-76ca3a64] {\n  padding: 0.3rem;\n}\n.red-packet .packet .block[data-v-76ca3a64] {\n  display: block;\n}\n.red-packet .packet .flex[data-v-76ca3a64] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".captchaCode[data-v-4b01d935] {\n  text-align: right;\n}\n.btn-text[data-v-4b01d935] {\n  margin: 0 0 0.1rem 0;\n}\n.image-captchaCode[data-v-4b01d935] {\n  width: 100%;\n}\n.popup-title[data-v-4b01d935] {\n  font-size: 0.32rem;\n  text-align: center;\n  margin-top: 0.1rem;\n}\n.popup-content[data-v-4b01d935] {\n  padding: 0.2rem 0;\n  font-size: 0.28rem;\n  line-height: 1.5;\n}\n.popup-content[data-v-4b01d935] .van-field {\n  background-color: #F8F8F8;\n  border-radius: 0.16rem;\n  border: 0.02rem solid #dcdfe6;\n}\n.popup-content[data-v-4b01d935] .van-field:focus-within {\n  border-color: var(--van-color-primary);\n}\n.footer[data-v-4b01d935] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.4rem;\n}\n.footer .btn[data-v-4b01d935] {\n  border-radius: 0.16rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("23d40626", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1332c262", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7e6c373d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1e415338", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/redPacket/drawBg.svg":
/*!************************************************!*\
  !*** ./src/assets/images/redPacket/drawBg.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/drawBg.eaaa75d7.svg";

/***/ }),

/***/ "./src/assets/images/redPacket/open-en.png":
/*!*************************************************!*\
  !*** ./src/assets/images/redPacket/open-en.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/open-en.a4b467ff.png";

/***/ }),

/***/ "./src/assets/images/redPacket/open-zh.png":
/*!*************************************************!*\
  !*** ./src/assets/images/redPacket/open-zh.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/open-zh.9e56c214.png";

/***/ }),

/***/ "./src/assets/images/redPacket/wallet.svg":
/*!************************************************!*\
  !*** ./src/assets/images/redPacket/wallet.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/wallet.349b489d.svg";

/***/ }),

/***/ "./src/components/chat/chatItem.vue":
/*!******************************************!*\
  !*** ./src/components/chat/chatItem.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatItem_vue_vue_type_template_id_38a56a82_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatItem.vue?vue&type=template&id=38a56a82&scoped=true */ "./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true");
/* harmony import */ var _chatItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatItem.vue?vue&type=script&lang=js */ "./src/components/chat/chatItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true */ "./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_chatItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chatItem_vue_vue_type_template_id_38a56a82_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-38a56a82"],['__file',"src/components/chat/chatItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/chatItem.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/chat/chatItem.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatItem.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=style&index=0&id=38a56a82&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_style_index_0_id_38a56a82_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_template_id_38a56a82_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chatItem.vue?vue&type=template&id=38a56a82&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/chatItem.vue?vue&type=template&id=38a56a82&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chatItem_vue_vue_type_template_id_38a56a82_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/chat/kick.vue":
/*!**************************************!*\
  !*** ./src/components/chat/kick.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kick_vue_vue_type_template_id_2279803d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kick.vue?vue&type=template&id=2279803d&scoped=true */ "./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true");
/* harmony import */ var _kick_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kick.vue?vue&type=script&lang=js */ "./src/components/chat/kick.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true */ "./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_kick_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_kick_vue_vue_type_template_id_2279803d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-2279803d"],['__file',"src/components/chat/kick.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/kick.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/chat/kick.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kick.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=style&index=0&id=2279803d&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_style_index_0_id_2279803d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_template_id_2279803d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./kick.vue?vue&type=template&id=2279803d&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/kick.vue?vue&type=template&id=2279803d&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_kick_vue_vue_type_template_id_2279803d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/chat/redDraw.vue":
/*!*****************************************!*\
  !*** ./src/components/chat/redDraw.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redDraw_vue_vue_type_template_id_76ca3a64_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redDraw.vue?vue&type=template&id=76ca3a64&scoped=true */ "./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true");
/* harmony import */ var _redDraw_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redDraw.vue?vue&type=script&lang=js */ "./src/components/chat/redDraw.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true */ "./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_redDraw_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_redDraw_vue_vue_type_template_id_76ca3a64_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-76ca3a64"],['__file',"src/components/chat/redDraw.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/redDraw.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/chat/redDraw.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./redDraw.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=style&index=0&id=76ca3a64&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_style_index_0_id_76ca3a64_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_template_id_76ca3a64_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./redDraw.vue?vue&type=template&id=76ca3a64&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/redDraw.vue?vue&type=template&id=76ca3a64&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_redDraw_vue_vue_type_template_id_76ca3a64_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/components/chat/validateDialog.vue":
/*!************************************************!*\
  !*** ./src/components/chat/validateDialog.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validateDialog_vue_vue_type_template_id_4b01d935_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateDialog.vue?vue&type=template&id=4b01d935&scoped=true */ "./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true");
/* harmony import */ var _validateDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateDialog.vue?vue&type=script&lang=js */ "./src/components/chat/validateDialog.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true */ "./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_validateDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_validateDialog_vue_vue_type_template_id_4b01d935_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-4b01d935"],['__file',"src/components/chat/validateDialog.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/validateDialog.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/chat/validateDialog.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./validateDialog.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=style&index=0&id=4b01d935&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_style_index_0_id_4b01d935_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true ***!
  \******************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_template_id_4b01d935_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./validateDialog.vue?vue&type=template&id=4b01d935&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/validateDialog.vue?vue&type=template&id=4b01d935&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_validateDialog_vue_vue_type_template_id_4b01d935_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);