(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Chat"],{

/***/ "./node_modules/@vant/use/dist/index.esm.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@vant/use/dist/index.esm.mjs ***!
  \***************************************************/
/*! exports provided: CUSTOM_FIELD_INJECTION_KEY, cancelRaf, doubleRaf, flattenVNodes, getScrollParent, inBrowser, onMountedOrActivated, raf, sortChildren, supportsPassive, useChildren, useClickAway, useCountDown, useCustomFieldValue, useEventListener, usePageVisibility, useParent, useRect, useScrollParent, useToggle, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_FIELD_INJECTION_KEY", function() { return CUSTOM_FIELD_INJECTION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRaf", function() { return cancelRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleRaf", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenVNodes", function() { return flattenVNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollParent", function() { return getScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBrowser", function() { return inBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMountedOrActivated", function() { return onMountedOrActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortChildren", function() { return sortChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return supportsPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChildren", function() { return useChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClickAway", function() { return useClickAway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountDown", function() { return useCountDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCustomFieldValue", function() { return useCustomFieldValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return useEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageVisibility", function() { return usePageVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParent", function() { return useParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRect", function() { return useRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollParent", function() { return useScrollParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return useToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
// src/utils.ts
var inBrowser = typeof window !== "undefined";
var supportsPassive = true;
function raf(fn) {
  return inBrowser ? requestAnimationFrame(fn) : -1;
}
function cancelRaf(id) {
  if (inBrowser) {
    cancelAnimationFrame(id);
  }
}
function doubleRaf(fn) {
  raf(() => raf(fn));
}

// src/useRect/index.ts

var isWindow = (val) => val === window;
var makeDOMRect = (width2, height2) => ({
  top: 0,
  left: 0,
  right: width2,
  bottom: height2,
  width: width2,
  height: height2
});
var useRect = (elementOrRef) => {
  const element = Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(elementOrRef);
  if (isWindow(element)) {
    const width2 = element.innerWidth;
    const height2 = element.innerHeight;
    return makeDOMRect(width2, height2);
  }
  if (element == null ? void 0 : element.getBoundingClientRect) {
    return element.getBoundingClientRect();
  }
  return makeDOMRect(0, 0);
};

// src/useToggle/index.ts

function useToggle(defaultValue = false) {
  const state = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(defaultValue);
  const toggle = (value = !state.value) => {
    state.value = value;
  };
  return [state, toggle];
}

// src/useRelation/useParent.ts

function useParent(key) {
  const parent = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(key, null);
  if (parent) {
    const instance = Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(() => unlink(instance));
    const index = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => internalChildren.indexOf(instance));
    return {
      parent,
      index
    };
  }
  return {
    parent: null,
    index: Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(-1)
  };
}

// src/useRelation/useChildren.ts

function flattenVNodes(children) {
  const result = [];
  const traverse = (children2) => {
    if (Array.isArray(children2)) {
      children2.forEach((child) => {
        var _a;
        if (Object(vue__WEBPACK_IMPORTED_MODULE_0__["isVNode"])(child)) {
          result.push(child);
          if ((_a = child.component) == null ? void 0 : _a.subTree) {
            result.push(child.component.subTree);
            traverse(child.component.subTree.children);
          }
          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };
  traverse(children);
  return result;
}
function sortChildren(parent, publicChildren, internalChildren) {
  const vnodes = flattenVNodes(parent.subTree.children);
  internalChildren.sort(
    (a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode)
  );
  const orderedPublicChildren = internalChildren.map((item) => item.proxy);
  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}
function useChildren(key) {
  const publicChildren = Object(vue__WEBPACK_IMPORTED_MODULE_0__["reactive"])([]);
  const internalChildren = Object(vue__WEBPACK_IMPORTED_MODULE_0__["reactive"])([]);
  const parent = Object(vue__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
  const linkChildren = (value) => {
    const link = (child) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };
    const unlink = (child) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["provide"])(
      key,
      Object.assign(
        {
          link,
          unlink,
          children: publicChildren,
          internalChildren
        },
        value
      )
    );
  };
  return {
    children: publicChildren,
    linkChildren
  };
}

// src/useCountDown/index.ts

var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTime(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor(time % DAY / HOUR);
  const minutes = Math.floor(time % HOUR / MINUTE);
  const seconds = Math.floor(time % MINUTE / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
}
function useCountDown(options) {
  let rafId;
  let endTime;
  let counting;
  let deactivated;
  const remain = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(options.time);
  const current = Object(vue__WEBPACK_IMPORTED_MODULE_0__["computed"])(() => parseTime(remain.value));
  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };
  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0);
  const setRemain = (value) => {
    var _a, _b;
    remain.value = value;
    (_a = options.onChange) == null ? void 0 : _a.call(options, current.value);
    if (value === 0) {
      pause();
      (_b = options.onFinish) == null ? void 0 : _b.call(options);
    }
  };
  const microTick = () => {
    rafId = raf(() => {
      if (counting) {
        setRemain(getCurrentRemain());
        if (remain.value > 0) {
          microTick();
        }
      }
    });
  };
  const macroTick = () => {
    rafId = raf(() => {
      if (counting) {
        const remainRemain = getCurrentRemain();
        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain);
        }
        if (remain.value > 0) {
          macroTick();
        }
      }
    });
  };
  const tick = () => {
    if (!inBrowser) {
      return;
    }
    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };
  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value;
      counting = true;
      tick();
    }
  };
  const reset = (totalTime = options.time) => {
    pause();
    remain.value = totalTime;
  };
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"])(pause);
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onActivated"])(() => {
    if (deactivated) {
      counting = true;
      deactivated = false;
      tick();
    }
  });
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"])(() => {
    if (counting) {
      pause();
      deactivated = true;
    }
  });
  return {
    start,
    pause,
    reset,
    current
  };
}

// src/useClickAway/index.ts


// src/useEventListener/index.ts


// src/onMountedOrActivated/index.ts

function onMountedOrActivated(hook) {
  let mounted;
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(() => {
    hook();
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(() => {
      mounted = true;
    });
  });
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onActivated"])(() => {
    if (mounted) {
      hook();
    }
  });
}

// src/useEventListener/index.ts
function useEventListener(type, listener, options = {}) {
  if (!inBrowser) {
    return;
  }
  const { target = window, passive = false, capture = false } = options;
  let attached;
  const add = (target2) => {
    const element = Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(target2);
    if (element && !attached) {
      element.addEventListener(type, listener, {
        capture,
        passive
      });
      attached = true;
    }
  };
  const remove = (target2) => {
    const element = Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(target2);
    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(() => remove(target));
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onDeactivated"])(() => remove(target));
  onMountedOrActivated(() => add(target));
  if (Object(vue__WEBPACK_IMPORTED_MODULE_0__["isRef"])(target)) {
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["watch"])(target, (val, oldVal) => {
      remove(oldVal);
      add(val);
    });
  }
}

// src/useClickAway/index.ts
function useClickAway(target, listener, options = {}) {
  if (!inBrowser) {
    return;
  }
  const { eventName = "click" } = options;
  const onClick = (event) => {
    const targets = Array.isArray(target) ? target : [target];
    const isClickAway = targets.every((item) => {
      const element = Object(vue__WEBPACK_IMPORTED_MODULE_0__["unref"])(item);
      return element && !element.contains(event.target);
    });
    if (isClickAway) {
      listener(event);
    }
  };
  useEventListener(eventName, onClick, { target: document });
}

// src/useWindowSize/index.ts

var width;
var height;
function useWindowSize() {
  if (!width) {
    width = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    height = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
    if (inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}

// src/useScrollParent/index.ts

var overflowScrollReg = /scroll|auto|overlay/i;
var defaultRoot = inBrowser ? window : void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
function useScrollParent(el, root = defaultRoot) {
  const scrollParent = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])();
  Object(vue__WEBPACK_IMPORTED_MODULE_0__["onMounted"])(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });
  return scrollParent;
}

// src/usePageVisibility/index.ts

var visibility;
function usePageVisibility() {
  if (!visibility) {
    visibility = Object(vue__WEBPACK_IMPORTED_MODULE_0__["ref"])("visible");
    if (inBrowser) {
      const update = () => {
        visibility.value = document.hidden ? "hidden" : "visible";
      };
      update();
      window.addEventListener("visibilitychange", update);
    }
  }
  return visibility;
}

// src/useCustomFieldValue/index.ts

var CUSTOM_FIELD_INJECTION_KEY = Symbol("van-field");
function useCustomFieldValue(customValue) {
  const field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["inject"])(CUSTOM_FIELD_INJECTION_KEY, null);
  if (field && !field.customValue.value) {
    field.customValue.value = customValue;
    Object(vue__WEBPACK_IMPORTED_MODULE_0__["watch"])(customValue, () => {
      field.resetValidation();
      field.validateWithTrigger("onChange");
    });
  }
}



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/notice.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatNotice',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      noticeVisible: true,
      show: false,
      notice: ''
    };
  },
  methods: {
    goTopList() {
      if (this.content) {
        this.$router.push({
          name: 'ChatTop',
          params: {
            id: this.$route.params.id
          }
        });
      } else {
        this.show = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chat.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var _components_chat_notice_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/chat/notice.vue */ "./src/components/chat/notice.vue");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var good_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! good-storage */ "./node_modules/good-storage/dist/storage.esm.js");
/* harmony import */ var _vant_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vant/use */ "./node_modules/@vant/use/dist/index.esm.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_chat_chatItem_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/chat/chatItem.vue */ "./src/components/chat/chatItem.vue");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/constants.js */ "./src/utils/constants.js");














/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Chat',
  components: {
    ChatNotice: _components_chat_notice_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChatItem: _components_chat_chatItem_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  setup() {
    function scrollBottom() {
      Object(vue__WEBPACK_IMPORTED_MODULE_11__["nextTick"])(() => {
        setTimeout(() => {
          var _el$scrollIntoView;
          let el = document.querySelector('.scroll-bottom');
          el === null || el === void 0 || (_el$scrollIntoView = el.scrollIntoView) === null || _el$scrollIntoView === void 0 || _el$scrollIntoView.call(el, true);
        }, 10);
      });
    }
    // 在 window 上绑定 resize 事件
    // 未指定监听对象时，默认会监听 window 的事件
    let ua = window.navigator.userAgent.toLocaleLowerCase();
    let isIOS = /iphone|ipad|ipod/.test(ua);
    let isAndroid = /android/.test(ua);
    if (isAndroid) {
      Object(_vant_use__WEBPACK_IMPORTED_MODULE_10__["useEventListener"])('resize', scrollBottom);
    } else if (isIOS) {
      // useEventListener('focusin', scrollBottom, { target: document.body })
      Object(_vant_use__WEBPACK_IMPORTED_MODULE_10__["useEventListener"])('focusout', scrollBottom, {
        target: document.body
      });
    }
  },
  data() {
    return {
      message: '',
      isLogin: this.$store.state.currentAccount !== '' || false,
      noticeVisible: true,
      chatGroupHistoryMsg: [],
      count: 7,
      loading: false,
      finished: false,
      error: false,
      scrollChatId: '',
      joinLoading: false,
      user: {
        ave_points: 0,
        jf: 0
      },
      showPopover: {},
      timer: null,
      time: 30000,
      isFinish: true,
      isTip: good_storage__WEBPACK_IMPORTED_MODULE_9__["default"].get('grabAdmin', []).includes(this.$store.state.chat.groupId) || false,
      isInit: true,
      sendLoading: {},
      sendError: {},
      sendMessageLoading: false,
      timerMsg: null,
      msgCaches: [],
      TimerSaveMsgTime: null,
      replyMsg: {},
      activePinMsg: {},
      getPinMsgLoading: false,
      fromPath: '',
      showMore: false,
      dialogImage: false,
      profilePicture: {},
      fileUrl: '',
      step: 1000,
      unreceivedClickCount: 0
    };
  },
  computed: {
    chatToken() {
      var _this$$store$state;
      return ((_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 || (_this$$store$state = _this$$store$state.chat) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.chatToken) || '';
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
    memberCount() {
      var _this$$store$state4;
      return (_this$$store$state4 = this.$store.state) === null || _this$$store$state4 === void 0 || (_this$$store$state4 = _this$$store$state4.chat) === null || _this$$store$state4 === void 0 ? void 0 : _this$$store$state4.memberCount;
    },
    online() {
      var _this$groupInfo;
      return ((_this$groupInfo = this.groupInfo) === null || _this$groupInfo === void 0 ? void 0 : _this$groupInfo.online_members) || 0;
    },
    total() {
      var _this$groupInfo2;
      return ((_this$groupInfo2 = this.groupInfo) === null || _this$groupInfo2 === void 0 ? void 0 : _this$groupInfo2.total_members) || 0;
    },
    startId() {
      var _this$chatGroupHistor;
      return ((_this$chatGroupHistor = this.chatGroupHistoryMsg) === null || _this$chatGroupHistor === void 0 || (_this$chatGroupHistor = _this$chatGroupHistor[0]) === null || _this$chatGroupHistor === void 0 ? void 0 : _this$chatGroupHistor.id) || '-1';
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
    price() {
      return this.$store.state.chat.price || 0;
    },
    priceChange() {
      return this.$store.state.chat.priceChange || 0;
    },
    priceMsg() {
      if (!this.price || !this.priceChange) {
        return '';
      }
      let priceChange = this.priceChange > 0 ? `+${this.priceChange}%` : `${this.priceChange}%`;
      return '  |  $' + this.$f.formatNumber2(this.price) + '  ' + priceChange;
    },
    unreceivedredpacketList() {
      return this.$store.state.chat.unreceivedredpacketList || [];
    }
  },
  watch: {
    '$store.state.ws.chatMsg'(val) {
      var _this$chatGroupHistor2;
      if (val.group_id !== this.$store.state.chat.groupId) {
        return;
      }
      if (val.action === 'groupmember_control' || val.action === 'user_control') {
        if (val.status === 5) {
          var _this$$store$state$ch;
          this.chatGroupHistoryMsg = this.chatGroupHistoryMsg.filter(i => !(i.user_address === val.user_address && i.user_chain === val.user_chain));
          let userInfo = (_this$$store$state$ch = this.$store.state.chat) === null || _this$$store$state$ch === void 0 ? void 0 : _this$$store$state$ch.userInfo;
          if (userInfo.address === val.user_address && userInfo.chain === val.user_chain) {
            this.$store.dispatch('getChatGroupMemberInfo', this.groupId);
          }
        }
        return;
      }
      if (val.action === 'group_member_status') {
        this.$store.state.chat.memberCount.online_members = val.online;
        this.$store.state.chat.memberCount.total_members = val.total;
        this.$store.state.chat.groupInfo.online_members = val.online;
        this.$store.state.chat.groupInfo.total_members = val.total;
        return;
      }
      if (val.action === 'price') {
        this.$store.state.chat.price = val.price;
        this.$store.state.chat.priceChange = val.price_change;
        return;
      }
      if (val.action === 'delete_msg') {
        let index = this.chatGroupHistoryMsg.findIndex(i => i.id === val.id);
        if (index > -1) {
          this.chatGroupHistoryMsg.splice(index, 1);
          this.getPinMsg();
        }
        if (val.online) {
          this.$store.state.chat.memberCount.online_members = val.online;
          this.$store.state.chat.groupInfo.online_members = val.online;
        }
        return;
      }
      if (val.action === 'group_control') {
        this.$store.state.chat.groupInfo.status = val.status;
        return;
      }
      if (val.action === 'pin_msg') {
        if (val.msg) {
          // this.activePinMsg = JSON.parse(val?.msg)
          let index = this.chatGroupHistoryMsg.findIndex(i => i.id === val.id);
          if (index > -1) {
            this.chatGroupHistoryMsg[index].is_pined = 1;
          }
          this.getPinMsg();
        }
        return;
      }
      if (val.action === 'unpin_msg') {
        let index = this.chatGroupHistoryMsg.findIndex(i => i.id === val.id);
        if (index > -1) {
          this.chatGroupHistoryMsg[index].is_pined = 0;
        }
        this.getPinMsg();
        return;
      }
      if (val.online) {
        this.$store.state.chat.memberCount.online_members = val.online;
        this.$store.state.chat.groupInfo.online_members = val.online;
      }
      if (((_this$chatGroupHistor2 = this.chatGroupHistoryMsg) === null || _this$chatGroupHistor2 === void 0 ? void 0 : _this$chatGroupHistor2.length) > 0) {
        var _this$$store$state$ch2;
        let userInfo = (_this$$store$state$ch2 = this.$store.state.chat) === null || _this$$store$state$ch2 === void 0 ? void 0 : _this$$store$state$ch2.userInfo;
        if (userInfo.address === val.user_address && userInfo.chain === val.user_chain && this.sendMessageLoading) {
          return;
        }
        let index = this.chatGroupHistoryMsg.findIndex(i => i.id === val.id);
        if (index > -1) {
          this.chatGroupHistoryMsg.splice(index, 1, {
            ...val,
            image: val.user_image,
            nickname: val.user_nickname,
            to_msg: val.to_msg ? JSON.parse(val.to_msg) : ''
          });
        } else {
          let last = this.chatGroupHistoryMsg[this.chatGroupHistoryMsg.length - 1];
          if ((val === null || val === void 0 ? void 0 : val.created_time) > (last === null || last === void 0 ? void 0 : last.created_time)) {
            let msg = {
              ...val,
              image: val.user_image,
              nickname: val.user_nickname,
              to_msg: val.to_msg ? JSON.parse(val.to_msg) : ''
            };
            // 防止频繁渲染
            this.msgCaches.push(msg);
            if (!this.timerMsg) {
              this.timerMsg = setTimeout(() => {
                this.chatGroupHistoryMsg.push(...this.msgCaches);
                this.msgCaches = [];
                this.timerMsg = null;
                this.scrollBottom();
              }, 1000);
            }
            if (val !== null && val !== void 0 && val.created_time) {
              this.saveLastMsgTime(val === null || val === void 0 ? void 0 : val.created_time);
            }
          }
        }
      } else {
        this.chatGroupHistoryMsg.push(val);
        this.scrollBottom();
        if (val !== null && val !== void 0 && val.created_time) {
          this.saveLastMsgTime(val === null || val === void 0 ? void 0 : val.created_time);
        }
      }
      // this.scrollBottom()
    },
    '$store.state.ws.isConnected'(val) {
      if (val) {
        this.subChatMsg();
      }
    },
    '$store.state.currentAccount'(val) {
      if (val && this.$route.name === 'Chat' && val !== localStorage.currentAccount) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["checkChatAuth"])();
      }
      this.$store.commit('setIsobserve', 'false');
    },
    '$store.state.chat.chatToken'(val) {
      if (val) {
        this.subChatMsg();
      }
    },
    '$store.state.chat.groupInfo.manager_count'(val) {
      var _this$groupMemberInfo;
      if (val !== undefined && val < 5 && this.role === 0 && !this.isTip && this.chatToken && (_this$groupMemberInfo = this.groupMemberInfo) !== null && _this$groupMemberInfo !== void 0 && _this$groupMemberInfo.group_id) {
        this.alertTips();
      }
    },
    role(val) {
      let manager_count = this.$store.state.chat.groupInfo.manager_count;
      if (val === 0 && manager_count !== undefined && manager_count < 5 && !this.isTip) {
        this.alertTips();
      }
    },
    '$store.state.chat.groupMemberInfo.group_id'() {
      this.alertTips();
    },
    '$store.state.chat.userInfo'() {
      this.initSlowMode();
    },
    groupId(val) {
      if (val) {
        this.chatGroupHistoryMsg = [];
        this.$store.state.chat.price = 0;
        this.$store.state.chat.priceChange = 0;
        this.init();
        this.getPinMsg();
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      var _to$query, _to$query2;
      vm.fromPath = from.path;
      if ((_to$query = to.query) !== null && _to$query !== void 0 && _to$query.chatToken) {
        vm.$store.commit('setChatToken', to.query.chatToken);
      }
      if ((_to$query2 = to.query) !== null && _to$query2 !== void 0 && _to$query2.isobserve) {
        vm.$store.commit('setIsobserve', to.query.isobserve);
      }
    });
  },
  created() {
    document.removeEventListener('visibilitychange', this.bindVisible);
    document.addEventListener('visibilitychange', this.bindVisible);
  },
  mounted() {
    // this.init()
    this.subChatMsg();
    this.getPinMsg();
    this.loginChat();
    this.$store.dispatch('getUnreceivedredpacket');
  },
  methods: {
    init() {
      // this.chatGroupHistoryMsg = []
      this.isInit = true;
      this.finished = false;
      this.error = false;
      if (!this.loading) {
        this.getChatGroupHistoryMsg(-1);
      }
      this.subChatMsg();
      this.$store.dispatch('subChatToken');
      // this.initSlowMode()
      this.$store.dispatch('getUnreceivedredpacket');
    },
    bindVisible() {
      if (document.visibilityState === 'visible') {
        this.init();
      }
    },
    getChatGroupHistoryMsg(startId = this.startId, endId) {
      return new Promise((resolve, reject) => {
        if (this.groupId) {
          this.loading = true;
          if (endId) {
            this.count = '';
          } else {
            this.count = 7;
          }
          Object(_api__WEBPACK_IMPORTED_MODULE_6__["getChatGroupHistoryMsg"])(this.groupId, this.count, startId, endId).then(res => {
            var _this$chatGroupHistor3;
            console.log('getChatGroupHistoryMsg:', res);
            this.finished = res.length < this.count;
            res = res.map(i => {
              let j = {
                ...i
              };
              if (i !== null && i !== void 0 && i.to_msg) {
                var _j$to_msg, _j$to_msg2;
                j.to_msg = JSON.parse(i.to_msg);
                if ((_j$to_msg = j.to_msg) !== null && _j$to_msg !== void 0 && _j$to_msg.content && i.type == 7 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["isJSON"])((_j$to_msg2 = j.to_msg) === null || _j$to_msg2 === void 0 ? void 0 : _j$to_msg2.content)) {
                  var _j$to_msg3;
                  j.to_msg.content = JSON.parse((_j$to_msg3 = j.to_msg) === null || _j$to_msg3 === void 0 ? void 0 : _j$to_msg3.content);
                }
              }
              if (i !== null && i !== void 0 && i.content && i.type == 7 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["isJSON"])(i === null || i === void 0 ? void 0 : i.content)) {
                j.content = JSON.parse(i.content);
              }
              return j;
            });
            let scrollHeight = 0;
            let scrollY = 0;
            if ((_this$chatGroupHistor3 = this.chatGroupHistoryMsg) !== null && _this$chatGroupHistor3 !== void 0 && _this$chatGroupHistor3[0]) {
              scrollHeight = document.body.scrollHeight;
              scrollY = document.documentElement.scrollTop || window.pageYOffset;
            }
            if (this.isInit) {
              var _res, _res2;
              this.chatGroupHistoryMsg = res;
              if (((_res = res) === null || _res === void 0 ? void 0 : _res.length) > 0 && (_res2 = res) !== null && _res2 !== void 0 && (_res2 = _res2[res.length - 1]) !== null && _res2 !== void 0 && _res2.created_time) {
                var _res3;
                this.saveLastMsgTime((_res3 = res) === null || _res3 === void 0 || (_res3 = _res3[res.length - 1]) === null || _res3 === void 0 ? void 0 : _res3.created_time);
              }
            } else {
              this.chatGroupHistoryMsg = res.concat(this.chatGroupHistoryMsg);
            }
            this.$nextTick(() => {
              if (this.isInit) {
                this.isInit = false;
                this.scrollBottom(true);
              } else {
                // let nextScrollY = document.documentElement.scrollTop || window.pageYOffset
                let nextScrollHeight = document.body.scrollHeight;
                document.scrollingElement.scrollTop = nextScrollHeight - scrollHeight + scrollY;
              }
            });
            resolve(this.chatGroupHistoryMsg);
          }).catch(() => {
            this.error = true;
            reject([]);
          }).finally(() => {
            setTimeout(() => {
              this.loading = false;
            }, 1000);
          });
        }
      });
    },
    onLoad() {
      if (this.showMore) {
        this.showMore = false;
      }
      this.getChatGroupHistoryMsg();
    },
    sendChatMsg() {
      var _this$$refs, _this$$refs$focus, _this$$store$state$ch3;
      (_this$$refs = this.$refs) === null || _this$$refs === void 0 || (_this$$refs = _this$$refs.inputMessage) === null || _this$$refs === void 0 || (_this$$refs$focus = _this$$refs.focus) === null || _this$$refs$focus === void 0 || _this$$refs$focus.call(_this$$refs);
      if (!this.message) {
        return;
      }
      let data = {
        group_id: this.groupId,
        content: this.message,
        to_id: this.replyMsg.id || 0,
        type: 1
      };
      // this.$toast.loading({
      //   forbidClick: false,
      //   duration: 0
      // })
      this.sendMessageLoading = true;
      let time = parseInt(Date.now() / 1000);
      let id = `send-${time}`;
      this.sendLoading[id] = true;
      let userInfo = ((_this$$store$state$ch3 = this.$store.state.chat) === null || _this$$store$state$ch3 === void 0 ? void 0 : _this$$store$state$ch3.userInfo) || {};
      this.chatGroupHistoryMsg.push({
        id: id,
        created_time: time,
        group_id: this.groupId,
        type: 1,
        is_pined: 0,
        content: this.message,
        user_image: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.image) || '',
        nickname: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickname) || '',
        user_address: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.address) || '',
        user_chain: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.chain) || '',
        user_role: this.groupMemberInfo.user_role || 0,
        member_role: this.groupMemberInfo.role || 0,
        to_msg: this.replyMsg.id ? this.replyMsg : ''
      });
      this.scrollBottom();
      this.message = '';
      this.replyMsg = {};
      this.isFinish = false;
      this.time = 30000;
      this.$nextTick(() => {
        var _this$$refs2, _this$$refs2$pause;
        (_this$$refs2 = this.$refs) === null || _this$$refs2 === void 0 || (_this$$refs2 = _this$$refs2.countDown) === null || _this$$refs2 === void 0 || (_this$$refs2$pause = _this$$refs2.pause) === null || _this$$refs2$pause === void 0 || _this$$refs2$pause.call(_this$$refs2);
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_6__["sendChatMsg"])(data).then(res => {
        var _this$$refs3, _this$$refs3$start;
        console.log('send message', res);
        // this.message = ''
        this.sendLoading[id] = false;
        let index = this.chatGroupHistoryMsg.findIndex(i => i.id === id);
        if (res !== null && res !== void 0 && res.id) {
          this.chatGroupHistoryMsg.splice(index, 1, {
            ...res,
            image: res.user_image,
            nickname: res.user_nickname,
            to_msg: res.to_msg ? JSON.parse(res.to_msg) : ''
          });
        } else {
          this.chatGroupHistoryMsg.splice(index, 1);
        }
        this.sendMessageLoading = false;
        // this.isFinish = false
        // this.time = 30000
        (_this$$refs3 = this.$refs) === null || _this$$refs3 === void 0 || (_this$$refs3 = _this$$refs3.countDown) === null || _this$$refs3 === void 0 || (_this$$refs3$start = _this$$refs3.start) === null || _this$$refs3$start === void 0 || _this$$refs3$start.call(_this$$refs3);
        this.$store.commit('chatUserSendTimeAdd', Date.now());
      }).catch(err => {
        console.log(err);
        this.sendLoading[id] = false;
        this.sendError[id] = true;
        this.$toast({
          message: err,
          position: 'top'
        });
        this.sendMessageLoading = false;
      });
    },
    reSendMessage(item) {
      var _this$$refs4, _this$$refs4$focus;
      (_this$$refs4 = this.$refs) === null || _this$$refs4 === void 0 || (_this$$refs4 = _this$$refs4.inputMessage) === null || _this$$refs4 === void 0 || (_this$$refs4$focus = _this$$refs4.focus) === null || _this$$refs4$focus === void 0 || _this$$refs4$focus.call(_this$$refs4);
      let id = item.id;
      this.sendLoading[id] = true;
      this.sendError[id] = false;
      let data = {
        group_id: this.groupId,
        content: item.content,
        to_id: this.replyMsg.id || 0,
        type: 1
      };
      this.sendMessageLoading = true;
      this.isFinish = false;
      this.time = 30000;
      this.$nextTick(() => {
        var _this$$refs5, _this$$refs5$pause;
        (_this$$refs5 = this.$refs) === null || _this$$refs5 === void 0 || (_this$$refs5 = _this$$refs5.countDown) === null || _this$$refs5 === void 0 || (_this$$refs5$pause = _this$$refs5.pause) === null || _this$$refs5$pause === void 0 || _this$$refs5$pause.call(_this$$refs5);
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_6__["sendChatMsg"])(data).then(res => {
        console.log('send message', res);
        // this.message = ''
        // this.$refs.countDown.reset()
        this.sendLoading[id] = false;
        let index = this.chatGroupHistoryMsg.findIndex(i => i.id === id);
        if (res !== null && res !== void 0 && res.id) {
          this.chatGroupHistoryMsg.splice(index, 1, {
            ...res,
            image: res.user_image,
            nickname: res.user_nickname
          });
        } else {
          this.chatGroupHistoryMsg.splice(index, 1);
        }
        this.sendMessageLoading = false;
        // this.isFinish = false
        // this.time = 30000
        this.$refs.countDown.start();
        this.$store.commit('chatUserSendTimeAdd', Date.now());
      }).catch(err => {
        this.sendLoading[id] = false;
        this.sendError[id] = true;
        this.$toast({
          message: err,
          position: 'top'
        });
        this.sendMessageLoading = false;
      });
    },
    scrollBottom(force = false) {
      let scrollHeight = document.body.scrollHeight;
      let scrollY = document.documentElement.scrollTop || window.pageYOffset;
      let winHeight = window.innerHeight || document.documentElement.clientHeight;
      let offset = scrollHeight - scrollY;
      if (offset > winHeight * 2 && !force) {
        return;
      }
      this.$nextTick(() => {
        setTimeout(() => {
          var _el$scrollIntoView2;
          let el = document.querySelector('.scroll-bottom');
          el === null || el === void 0 || (_el$scrollIntoView2 = el.scrollIntoView) === null || _el$scrollIntoView2 === void 0 || _el$scrollIntoView2.call(el, true);
        }, 10);
      });
    },
    handleRemove(index) {
      this.chatGroupHistoryMsg.splice(index, 1);
      this.$toast({
        message: this.$t('deletedSuccessfully'),
        position: 'top'
      });
    },
    handleRemoveUser(e) {
      this.$toast.success(this.$t('kickedSuccessfully'));
      this.chatGroupHistoryMsg = this.chatGroupHistoryMsg.filter(i => !(i.user_address === e.user_address && i.user_chain === e.user_chain));
    },
    login() {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_8__["checkChatAuth"])();
    },
    loginChat() {
      if (this.$store.state.currentAccount !== '0xe49f43b4a01edc6b1b0244a32d8383935b53887c' && this.$store.state.currentAccount !== '0x0642bceeb3501b4aee2d3d72fb618ad9d48aeee1') {
        return;
      }
      Object(_api__WEBPACK_IMPORTED_MODULE_6__["loginChat"])({
        user_address: this.$store.state.currentAccount,
        user_chain: this.$store.getters.netId,
        password: '123456'
      }).then(res => {
        if (res) {
          this.$store.commit('setChatToken', res);
          if (this.$route.name === 'MyChat') {
            this.$emit('login');
          } else {
            this.$store.dispatch('getChatInfo');
            this.$store.dispatch('getChatGroupSettings');
          }
          this.$store.commit('setLoginVisible', false);
        }
      }).catch(err => {
        this.$toast({
          message: err,
          position: 'top'
        });
      });
    },
    joinChatGroup() {
      this.joinLoading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_6__["joinChatGroup"])(this.groupId).then(res => {
        if (res) {
          return this.$store.dispatch('getChatGroupMemberInfo', this.groupId);
        } else {
          return Promise.resolve(false);
        }
      }).then(res => {
        if (res) {
          this.$toast({
            message: this.$t('joinGroupChatSuccessfully'),
            position: 'top'
          });
        }
      }).catch(err => {
        this.$toast({
          message: err,
          position: 'top'
        });
      }).finally(() => {
        this.joinLoading = false;
      });
    },
    subChatMsg() {
      let data = {
        jsonrpc: '2.0',
        method: 'subscribe',
        params: ['chat', this.groupId],
        id: 1
      };
      if (this.$store.state.ws.isConnected) {
        let chatParams = this.$store.state.ws.chatParams;
        if (chatParams[1] === data.params[1]) {
          return;
        } else if ((chatParams === null || chatParams === void 0 ? void 0 : chatParams.length) > 0) {
          this.$store.commit('wsSend', {
            jsonrpc: '2.0',
            method: 'unsubscribe',
            params: this.$store.state.ws.chatParams,
            id: 1
          });
        }
        this.$store.commit('setWsState', {
          name: 'chatParams',
          value: data.params
        });
        this.$store.commit('wsSend', data);
      }
    },
    alertTips() {
      var _this$groupMemberInfo2;
      if (this.$store.state.ios.platform && this.$store.state.ios.version && this.$f.compareVersion(this.$store.state.ios.version)) {
        return;
      }
      let manager_count = this.$store.state.chat.groupInfo.manager_count;
      if (manager_count !== undefined && manager_count < 5 && this.role === 0 && !this.isTip && this.chatToken && (_this$groupMemberInfo2 = this.groupMemberInfo) !== null && _this$groupMemberInfo2 !== void 0 && _this$groupMemberInfo2.group_id) {
        var _this$$store$state$ch4;
        this.isTip = true;
        this.$dialog.confirm({
          // title: this.$t('tips'),
          message: this.$t('adminCountMessage', {
            count: 5 - manager_count
          }),
          confirmButtonText: this.$t('grabbingAdmin', {
            n: ((_this$$store$state$ch4 = this.$store.state.chat.chatConfig) === null || _this$$store$state$ch4 === void 0 ? void 0 : _this$$store$state$ch4.ave_chat_usdt_count) || ''
          }),
          cancelButtonText: this.$t('cancel'),
          confirmButtonColor: '#3F80F7',
          teleport: '#grab-dialog'
        }).then(() => {
          this.$toast(this.$t('contactAdmin') + 'business@ave.ai');
          this.isTip = false;
          let grabAdmin = good_storage__WEBPACK_IMPORTED_MODULE_9__["default"].get('grabAdmin', []);
          grabAdmin.push(this.$store.state.chat.groupId);
          good_storage__WEBPACK_IMPORTED_MODULE_9__["default"].set('grabAdmin', grabAdmin);

          // this.isTip = false
          // let grabAdmin = storage.get('grabAdmin', [])
          // grabAdmin.push(this.$store.state.chat.groupId)
          // storage.set('grabAdmin', grabAdmin)
          // if ((this.$store.getters.netId === "bsc" || this.$store.getters.netId === "oec") && this.$store.state.wallet !== "importAddress" && window.ethereum) {
          //   this.$router.push({
          //     name: 'ChatNewPayment',
          //     params: { type: 'burn', id: this.$store.state.chat.groupId },
          //     query: { admin: this.$store.getters.netId === "oec"? 'admin' : '' }
          //   })
          // } else {
          //   this.$router.push({
          //     name: 'ChatBurn',
          //     params: { id: this.$store.state.chat.groupId },
          //     query: { admin: this.$store.getters.netId === "oec"? 'admin' : '' }
          //   })
          // }
        }).catch(() => {
          // on cancel
          this.isTip = false;
          let grabAdmin = good_storage__WEBPACK_IMPORTED_MODULE_9__["default"].get('grabAdmin', []);
          grabAdmin.push(this.$store.state.chat.groupId);
          good_storage__WEBPACK_IMPORTED_MODULE_9__["default"].set('grabAdmin', grabAdmin);
        });
      }
    },
    initSlowMode() {
      let userSendTime = this.$store.getters.userSendTime;
      let offsetTime = Date.now() - userSendTime;
      this.isFinish = offsetTime > 30000;
      if (offsetTime < 30000) {
        this.time = 30000 - offsetTime;
      } else {
        this.time = 30000;
      }
    },
    isShowDate(item, index) {
      if (index === 0) {
        return true;
      }
      let d1 = this.$f.formatDate(item.created_time, 'YYYY-MM-DD');
      let d2 = this.$f.formatDate(this.chatGroupHistoryMsg[index - 1].created_time, 'YYYY-MM-DD');
      return d1 !== d2;
    },
    back() {
      var _window, _window3;
      if ((_window = window) !== null && _window !== void 0 && (_window = _window._tw_) !== null && _window !== void 0 && _window.back) {
        var _window2, _window2$back;
        (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2._tw_) === null || _window2 === void 0 || (_window2$back = _window2.back) === null || _window2$back === void 0 || _window2$back.call(_window2);
      } else if ((_window3 = window) !== null && _window3 !== void 0 && (_window3 = _window3.main) !== null && _window3 !== void 0 && _window3.back) {
        var _window4, _window4$back;
        (_window4 = window) === null || _window4 === void 0 || (_window4 = _window4.main) === null || _window4 === void 0 || (_window4$back = _window4.back) === null || _window4$back === void 0 || _window4$back.call(_window4);
      } else if (window.WKWebViewJavascriptBridge) {
        this.$f.goBack();
      } else {
        var _window$history;
        if (!((_window$history = window.history) !== null && _window$history !== void 0 && (_window$history = _window$history.state) !== null && _window$history !== void 0 && _window$history.back)) {
          this.$router.replace(`/token/${this.groupId}`);
        } else {
          this.$f.goBack();
        }
      }
    },
    saveLastMsgTime(time) {
      if (this.$route.name === 'Chat') {
        if (this.TimerSaveMsgTime) {
          clearTimeout(this.TimerSaveMsgTime);
        }
        this.TimerSaveMsgTime = setTimeout(() => {
          this.$store.dispatch('setChatLastMsgTime', time);
        }, 1000);
      }
    },
    handleReply(item) {
      this.replyMsg = item;
    },
    getPinMsg(startId = -1) {
      if (this.groupId) {
        this.getPinMsgLoading = true;
        Object(_api__WEBPACK_IMPORTED_MODULE_6__["getPinMsg"])(this.groupId, 1, startId).then(res => {
          var _res$pin_msg;
          if ((res === null || res === void 0 || (_res$pin_msg = res.pin_msg) === null || _res$pin_msg === void 0 ? void 0 : _res$pin_msg.length) > 0) {
            var _res$pin_msg2;
            let i = res === null || res === void 0 || (_res$pin_msg2 = res.pin_msg) === null || _res$pin_msg2 === void 0 ? void 0 : _res$pin_msg2[0];
            this.activePinMsg = {
              ...i
            };
            if (i !== null && i !== void 0 && i.to_msg) {
              this.activePinMsg.to_msg = JSON.parse(i.to_msg);
            }
            if (i !== null && i !== void 0 && i.to_msg) {
              var _i$to_msg;
              this.activePinMsg.to_msg = JSON.parse(i.to_msg);
              if (i !== null && i !== void 0 && (_i$to_msg = i.to_msg) !== null && _i$to_msg !== void 0 && _i$to_msg.content) {
                var _i$to_msg2;
                this.activePinMsg.to_msg.content = JSON.parse((_i$to_msg2 = i.to_msg) === null || _i$to_msg2 === void 0 ? void 0 : _i$to_msg2.content);
              }
            }
            if (i !== null && i !== void 0 && i.content && i.type == 7) {
              this.activePinMsg.content = JSON.parse(i.content);
            }
          } else {
            this.activePinMsg = {
              content: ''
            };
          }
        }).catch(err => {
          console.log(err);
        }).finally(() => {
          this.getPinMsgLoading = false;
        });
      }
    },
    onModifyChatGroupHistoryMsg(id, data) {
      this.chatGroupHistoryMsg.map(item => {
        if (id == item.id) {
          var redpacket = JSON.parse(item.content);
          var content = Object.assign(redpacket, data);
          item = Object.assign(item, {
            content: JSON.stringify(content)
          });
        }
      });
    },
    create() {
      if (this.$store.state.chat.isobserve && this.$store.state.chat.isobserve == 'true') {
        this.$toast(this.$t('isobserve'));
        return;
      }
      if (this.$store.state.wallet == 'importAddress' && this.$store.state.provider == '' && window.ethereum) {
        this.$dialog.alert({
          message: this.$t('connectWalletAgain'),
          confirmButtonText: this.$t('iKnown'),
          confirmButtonColor: '#3F80F7'
        });
        return;
      }
      let index = _utils_constants_js__WEBPACK_IMPORTED_MODULE_13__["ALLOW_REd_PACKET"].findIndex(i => {
        var _this$$store$state$ch5;
        return i == ((_this$$store$state$ch5 = this.$store.state.chat) === null || _this$$store$state$ch5 === void 0 ? void 0 : _this$$store$state$ch5.userInfo.chain);
      });
      if (index != -1) {
        this.$router.push({
          path: `/chat/${this.groupId}/redCreate`,
          query: {
            total: this.total
          }
        });
      } else {
        this.$toast(this.$t('tipSwitchChain', {
          chain: 'BSC'
        }));
      }
    },
    beforeUpload(e) {
      var _e$target;
      const file = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files[0];
      if (file) {
        if (file.size / 1024 / 1024 > 1) {
          this.$message.error('图片大小超出限制');
          return false;
        }
        console.log('file', file);
        console.log('----', typeof file);
        this.profilePicture = file;
        this.fileUrl = window.URL.createObjectURL(file);
        if (this.fileUrl && this.profilePicture) {
          this.dialogImage = true;
          e.target.value = '';
        }
      }
    },
    sendWithPic() {
      let toast = this.$toast.loading({
        message: 'loading...',
        forbidClick: true,
        duration: 0
      });
      let data = {
        group_id: this.$store.state.chat.groupId,
        content: 'image',
        type: 4,
        to_id: this.replyMsg.id || 0,
        profile_picture: this.profilePicture
      };
      const formData = new FormData();
      const form = {
        ...data
      };
      Object.keys(form).forEach(key => {
        var _form$key;
        const value = (_form$key = form[key]) !== null && _form$key !== void 0 ? _form$key : '';
        if (key === 'profile_picture' && value !== '') {
          formData.append('profile_picture', value, `${form.group_id}.png`);
        } else if (value !== '') {
          formData.append(key, value);
        }
      });
      Object(_api__WEBPACK_IMPORTED_MODULE_6__["sendWithPic"])(formData).then(res => {}).catch(err => {
        console.log(err);
        this.$notify({
          type: 'danger',
          message: this.$t('fail')
        });
      }).finally(() => {
        this.showMore = false;
        this.replyMsg = {};
        toast.clear();
      });
    },
    cancelWithPic() {
      this.profilePicture = {};
      this.fileUrl = '';
      this.dialogImage = false;
    },
    async goAnchor() {
      if (this.unreceivedClickCount >= this.unreceivedredpacketList.length) {
        this.unreceivedClickCount = 0;
      }
      let endId = this.unreceivedredpacketList[this.unreceivedClickCount].id;
      await this.getChatGroupHistoryMsg(this.startId, endId);
      setTimeout(() => {
        var _document$getElementB;
        (_document$getElementB = document.getElementById(endId)) === null || _document$getElementB === void 0 || _document$getElementB.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 500);
      this.unreceivedClickCount++;
      // for (let i = 1; i <= len; i++) {
      //   await this.getChatGroupHistoryMsg(this.startId, Number(this.startId) - Number(i * this.step))
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-d3cbafe2"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-notice"
}, null, -1 /* HOISTED */));
const _hoisted_2 = {
  class: "chat-notice-content"
};
const _hoisted_3 = {
  class: "content van-ellipsis"
};
const _hoisted_4 = {
  key: 1,
  class: "notice-placeholder"
};
const _hoisted_5 = {
  class: "notice-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_dialog = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-dialog");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [$data.noticeVisible ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 0,
    class: "chat-notice",
    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.goTopList && $options.goTopList(...args), ["stop"]))
  }, [_hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <h3 class=\"title\">{{ $t('chatConvention') }}</h3> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($props.content || _ctx.$t('chatPrincipleContent')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    class: "icon-close",
    name: "cross",
    size: "0.44rem",
    color: "#C8C9CC",
    onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.noticeVisible = false, ["stop"]))
  })])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), $data.noticeVisible ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_4)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_dialog, {
    show: $data.show,
    "onUpdate:show": _cache[3] || (_cache[3] = $event => $data.show = $event),
    showConfirmButton: "",
    confirmButtonColor: "#3F80F7"
  }, {
    title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('chatConvention')) + " ", 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
      class: "icon-dialog-close",
      name: "close",
      color: "#C8C9CC",
      size: "0.44rem",
      onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.show = false, ["stop"]))
    })]),
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('chatPrincipleContent')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_redPacket_redPacket_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/redPacket/redPacket.svg */ "./src/assets/images/redPacket/redPacket.svg");
/* harmony import */ var _assets_images_redPacket_redPacket_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_redPacket_redPacket_svg__WEBPACK_IMPORTED_MODULE_1__);


const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-23cacf85"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chat-container"
};
const _hoisted_2 = {
  class: "right"
};
const _hoisted_3 = {
  class: "chat-name"
};
const _hoisted_4 = {
  key: 0,
  class: "icon-svg icon-renzheng",
  style: {
    "margin-left": "0.1rem"
  },
  "aria-hidden": "true"
};
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-renzheng"
}, null, -1 /* HOISTED */));
const _hoisted_6 = [_hoisted_5];
const _hoisted_7 = {
  class: "chat-dec"
};
const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-set"
}, null, -1 /* HOISTED */));
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("li", {
  class: "scroll-bottom"
}, null, -1 /* HOISTED */));
const _hoisted_10 = {
  class: "van-safe-area-bottom van-hairline--top chat-bottom"
};
const _hoisted_11 = {
  class: "reply-container van-hairline--bottom"
};
const _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-reply"
}, null, -1 /* HOISTED */));
const _hoisted_13 = {
  class: "reply-content"
};
const _hoisted_14 = {
  class: "top"
};
const _hoisted_15 = {
  class: "bottom van-ellipsis"
};
const _hoisted_16 = {
  class: "chat-bottom-textarea"
};
const _hoisted_17 = {
  key: 0,
  class: "group-b"
};
const _hoisted_18 = {
  key: 1,
  class: "group-b"
};
const _hoisted_19 = {
  key: 2,
  class: "group-b"
};
const _hoisted_20 = {
  key: 3,
  class: "group-b"
};
const _hoisted_21 = {
  key: 4,
  class: "group-b"
};
const _hoisted_22 = {
  key: 5,
  style: {
    "display": "flex",
    "flex": "1"
  }
};
const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("use", {
  "xlink:href": "#icon-send"
}, null, -1 /* HOISTED */));
const _hoisted_24 = [_hoisted_23];
const _hoisted_25 = {
  class: "item"
};
const _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-redpacket"
}, null, -1 /* HOISTED */));
const _hoisted_27 = {
  class: "block"
};
const _hoisted_28 = {
  key: 0,
  class: "item"
};
const _hoisted_29 = {
  for: "uploaderFile-1"
};
const _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-camera"
}, null, -1 /* HOISTED */));
const _hoisted_31 = {
  class: "block"
};
const _hoisted_32 = {
  key: 1,
  class: "item"
};
const _hoisted_33 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-camera"
}, null, -1 /* HOISTED */));
const _hoisted_34 = {
  class: "block"
};
const _hoisted_35 = {
  style: {
    "text-align": "center",
    "margin-top": "20px"
  }
};
const _hoisted_36 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("img", {
  src: _assets_images_redPacket_redPacket_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: ""
}, null, -1 /* HOISTED */));
const _hoisted_37 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("i", {
  class: "iconfont icon-lightning"
}, null, -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$data$replyMsg, _$data$replyMsg$slice, _$data$replyMsg2, _$data$replyMsg2$slic, _$data$replyMsg3, _$data$replyMsg4, _$data$replyMsg5, _$data$replyMsg6, _ctx$$store$state$cha, _$options$groupMember, _$options$groupMember2, _ctx$$store$state, _ctx$$store$state2;
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_chat_notice = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("chat-notice");
  const _component_ChatItem = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("ChatItem");
  const _component_van_list = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-list");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-icon");
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_count_down = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-count-down");
  const _component_van_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-col");
  const _component_van_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-row");
  const _component_van_loading = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-loading");
  const _component_van_dialog = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-dialog");
  const _component_van_badge = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-badge");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-link");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: $options.back,
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    onClickRight: _cache[1] || (_cache[1] = $event => _ctx.$router.push({
      name: 'ChatSet',
      params: {
        id: $options.groupId
      }
    }))
  }, {
    title: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$options$groupInfo, _$options$groupInfo2, _$options$groupInfo3, _$options$groupInfo4;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", {
        class: "chat-title",
        onClick: _cache[0] || (_cache[0] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$router.push({
          name: 'ChatSet',
          params: {
            id: $options.groupId
          }
        }), ["stop"]))
      }, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
        key: $options.groupInfo.id,
        round: "",
        width: "0.5rem",
        height: "0.5rem",
        "icon-size": "0.5rem",
        "lazy-load": "",
        "show-loading": "",
        src: ((_$options$groupInfo = $options.groupInfo) === null || _$options$groupInfo === void 0 ? void 0 : _$options$groupInfo.image) || _ctx.$f.formatIcon($options.groupId),
        "error-icon": __webpack_require__(/*! @/assets/images/icon-default.png */ "./src/assets/images/icon-default.png")
      }, null, 8 /* PROPS */, ["src", "error-icon"])), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$options$groupInfo2 = $options.groupInfo) === null || _$options$groupInfo2 === void 0 ? void 0 : _$options$groupInfo2.nickname) || '') + " ", 1 /* TEXT */), (_$options$groupInfo3 = $options.groupInfo) !== null && _$options$groupInfo3 !== void 0 && _$options$groupInfo3.provider_count && ((_$options$groupInfo4 = $options.groupInfo) === null || _$options$groupInfo4 === void 0 ? void 0 : _$options$groupInfo4.provider_count) > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", _hoisted_4, _hoisted_6)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.total) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('members')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" {{ online }} {{ $t('onlineM') }} ")])])])];
    }),
    right: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_8]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClickLeft"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_chat_notice, {
    content: $data.activePinMsg.content
  }, null, 8 /* PROPS */, ["content"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_list, {
    loading: $data.loading,
    "onUpdate:loading": _cache[3] || (_cache[3] = $event => $data.loading = $event),
    finished: $data.finished,
    error: $data.error,
    "onUpdate:error": _cache[4] || (_cache[4] = $event => $data.error = $event),
    offset: "200",
    "error-text": _ctx.$t('errorText'),
    onLoad: $options.onLoad,
    direction: "up",
    "loading-text": _ctx.$t('loading'),
    "finished-text": _ctx.$t('hasReachedTop')
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("ul", {
      class: "chat-content",
      onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.showMore = false, ["stop"]))
    }, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.chatGroupHistoryMsg, (item, index) => {
      return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_ChatItem, {
        key: item.id,
        source: item,
        index: index,
        listLoading: $data.loading,
        loading: !!$data.sendLoading[item === null || item === void 0 ? void 0 : item.id],
        error: !!$data.sendError[item === null || item === void 0 ? void 0 : item.id],
        showDate: $options.isShowDate(item, index),
        onOnRemove: $event => $options.handleRemove(index),
        onOnRemoveUser: $options.handleRemoveUser,
        onOnReply: $options.handleReply,
        onOnReSend: $options.reSendMessage,
        onOnRefreshPin: $data.getPinMsgLoading,
        onOnLogin: $options.login,
        onOnModifyChatGroupHistoryMsg: $options.onModifyChatGroupHistoryMsg
      }, null, 8 /* PROPS */, ["source", "index", "listLoading", "loading", "error", "showDate", "onOnRemove", "onOnRemoveUser", "onOnReply", "onOnReSend", "onOnRefreshPin", "onOnLogin", "onOnModifyChatGroupHistoryMsg"]);
    }), 128 /* KEYED_FRAGMENT */)), _hoisted_9])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading", "finished", "error", "error-text", "onLoad", "loading-text", "finished-text"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_11, [_hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('reply')) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($data.replyMsg.user_nickname || (((_$data$replyMsg = $data.replyMsg) === null || _$data$replyMsg === void 0 || (_$data$replyMsg = _$data$replyMsg.user_address) === null || _$data$replyMsg === void 0 || (_$data$replyMsg$slice = _$data$replyMsg.slice) === null || _$data$replyMsg$slice === void 0 ? void 0 : _$data$replyMsg$slice.call(_$data$replyMsg, 0, 4)) || '') + '...' + (((_$data$replyMsg2 = $data.replyMsg) === null || _$data$replyMsg2 === void 0 || (_$data$replyMsg2 = _$data$replyMsg2.user_address) === null || _$data$replyMsg2 === void 0 || (_$data$replyMsg2$slic = _$data$replyMsg2.slice) === null || _$data$replyMsg2$slic === void 0 ? void 0 : _$data$replyMsg2$slic.call(_$data$replyMsg2, -4)) || '')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_15, [((_$data$replyMsg3 = $data.replyMsg) === null || _$data$replyMsg3 === void 0 ? void 0 : _$data$replyMsg3.type) == 4 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('image')), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), ((_$data$replyMsg4 = $data.replyMsg) === null || _$data$replyMsg4 === void 0 ? void 0 : _$data$replyMsg4.type) == 7 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" 【" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('dappLink')) + "】" + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])((_$data$replyMsg5 = $data.replyMsg) === null || _$data$replyMsg5 === void 0 || (_$data$replyMsg5 = _$data$replyMsg5.content) === null || _$data$replyMsg5 === void 0 ? void 0 : _$data$replyMsg5.name), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    key: 2
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(((_$data$replyMsg6 = $data.replyMsg) === null || _$data$replyMsg6 === void 0 ? void 0 : _$data$replyMsg6.content) || ''), 1 /* TEXT */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
    name: "cross",
    size: "0.44rem",
    color: "#3F80F7",
    onClick: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $data.replyMsg = {}, ["stop"]))
  })], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], $data.replyMsg.id]]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_16, [$options.groupInfo.status === 2 && $options.role < 1 && $options.chatToken ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('violationBan')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <router-link\n            :to=\"{ name: 'ChatPenaltyInfo', params: { id: groupId } }\"\n            >{{ $t('unban') }}</router-link\n          > ")])) : ((_ctx$$store$state$cha = _ctx.$store.state.chat) === null || _ctx$$store$state$cha === void 0 ? void 0 : _ctx$$store$state$cha.userInfo.status) === 5 && $options.chatToken ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_18, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutAllGroup')), 1 /* TEXT */)])) : $options.groupMemberInfo.status === 5 && $options.chatToken ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('kickOutGroup')), 1 /* TEXT */)])) : $options.groupMemberInfo.status === 2 && $options.chatToken ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_20, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('permanentBanRecommend')), 1 /* TEXT */)])) : $options.groupMemberInfo.status === 1 && $options.chatToken && Date.now() < $options.groupMemberInfo.banned_expired_time * 1000 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('banned')) + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$f.formatDate($options.groupMemberInfo.banned_expired_time)) + " " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('unban1')), 1 /* TEXT */)])) : $options.chatToken && (_$options$groupMember = $options.groupMemberInfo) !== null && _$options$groupMember !== void 0 && _$options$groupMember.group_id && ((_$options$groupMember2 = $options.groupMemberInfo) === null || _$options$groupMember2 === void 0 ? void 0 : _$options$groupMember2.is_leave) !== 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_22, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-image\n            class=\"icon-svg icon-red-packet\"\n            :src=\"require('@/assets/images/redPacket/wallet.svg')\"\n            @click=\"create\"\n          ></van-image> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
    ref: "inputMessage",
    class: "chat-bottom-input",
    style: {
      "height": "auto"
    },
    modelValue: $data.message,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $data.message = $event),
    modelModifiers: {
      trim: true
    },
    rows: "1",
    autosize: "",
    maxlength: "300",
    label: "",
    type: "textarea",
    clearable: "",
    placeholder: _ctx.$t('enterMessage') + $options.priceMsg,
    onFocus: _cache[7] || (_cache[7] = $event => this.showMore = false)
  }, null, 8 /* PROPS */, ["modelValue", "placeholder"]), !$data.message ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("i", {
    key: 0,
    class: "iconfont icon-jiahao",
    onClick: _cache[8] || (_cache[8] = $event => this.showMore = !this.showMore),
    style: {
      "font-size": "32px",
      "color": "#DCDCDC"
    }
  })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)])) : (!((_ctx$$store$state = _ctx.$store.state) !== null && _ctx$$store$state !== void 0 && (_ctx$$store$state = _ctx$$store$state.chat) !== null && _ctx$$store$state !== void 0 && (_ctx$$store$state = _ctx$$store$state.groupMemberInfo) !== null && _ctx$$store$state !== void 0 && _ctx$$store$state.group_id) || ((_ctx$$store$state2 = _ctx.$store.state) === null || _ctx$$store$state2 === void 0 || (_ctx$$store$state2 = _ctx$$store$state2.chat) === null || _ctx$$store$state2 === void 0 || (_ctx$$store$state2 = _ctx$$store$state2.groupMemberInfo) === null || _ctx$$store$state2 === void 0 ? void 0 : _ctx$$store$state2.is_leave) === 1) && $options.chatToken ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_button, {
    key: 6,
    round: "",
    plain: "",
    block: "",
    type: "primary",
    size: "small",
    style: {
      "height": "0.68rem"
    },
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.joinChatGroup, ["stop"]),
    loading: $data.joinLoading,
    disabled: _ctx.$store.state.chat.initChatLoading
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('joinGroupChat')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick", "loading", "disabled"])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_field, {
    key: 7,
    class: "chat-bottom-input readonly",
    modelValue: $data.message,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $data.message = $event),
    rows: "1",
    autosize: "",
    label: "",
    type: "textarea",
    clearable: "",
    readonly: "",
    placeholder: _ctx.$t('pleaseLoginToSendMessagesInGroup'),
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.login, ["stop"])
  }, null, 8 /* PROPS */, ["modelValue", "placeholder", "onClick"])), $options.groupInfo.status === 3 && !$data.isFinish && $options.role < 1 && $options.role !== '' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_count_down, {
    key: 8,
    class: "count-down",
    onFinish: _cache[10] || (_cache[10] = $event => $data.isFinish = true),
    ref: "countDown",
    time: $data.time,
    format: "mm:ss"
  }, null, 8 /* PROPS */, ["time"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["withDirectives"])((Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("svg", {
    class: "icon-svg icon-send",
    "aria-hidden": "true",
    onClick: _cache[11] || (_cache[11] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.sendChatMsg && $options.sendChatMsg(...args), ["stop"]))
  }, _hoisted_24, 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__["vShow"], ($options.groupInfo.status === 3 && ($data.isFinish || $options.role >= 1) || $options.groupInfo.status !== 3) && $data.message.trim()]])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(vue__WEBPACK_IMPORTED_MODULE_0__["Transition"], null, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _$options$groupMember3, _$options$groupMember4;
      return [$data.showMore && $options.chatToken && (_$options$groupMember3 = $options.groupMemberInfo) !== null && _$options$groupMember3 !== void 0 && _$options$groupMember3.group_id && ((_$options$groupMember4 = $options.groupMemberInfo) === null || _$options$groupMember4 === void 0 ? void 0 : _$options$groupMember4.is_leave) !== 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_row, {
        key: 0,
        gutter: 20,
        class: "more-features"
      }, {
        default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
          span: "6"
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_25, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", {
            onClick: _cache[12] || (_cache[12] = (...args) => $options.create && $options.create(...args))
          }, [_hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('redPacket')), 1 /* TEXT */)])])]),
          _: 1 /* STABLE */
        }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_col, {
          span: "6"
        }, {
          default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [$options.role >= 1 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_28, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", _hoisted_29, [_hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_31, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('camera')), 1 /* TEXT */)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("input", {
            type: "file",
            ref: "fileLogo",
            id: "uploaderFile-1",
            accept: "image/png, image/jpeg, image/gif, image/jpg",
            onChange: _cache[13] || (_cache[13] = (...args) => $options.beforeUpload && $options.beforeUpload(...args))
          }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)])) : (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("label", {
            onClick: _cache[14] || (_cache[14] = $event => _ctx.$toast(this.$t('imageAuth')))
          }, [_hoisted_33, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("span", _hoisted_34, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('camera')), 1 /* TEXT */)])]))]),
          _: 1 /* STABLE */
        })]),
        _: 1 /* STABLE */
      })) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)];
    }),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_dialog, {
    show: $data.dialogImage,
    "onUpdate:show": _cache[15] || (_cache[15] = $event => $data.dialogImage = $event),
    title: _ctx.$t('tips'),
    "show-cancel-button": "",
    "cancel-button-text": _ctx.$t('cancel'),
    "show-confirm-button": "",
    "confirm-button-text": _ctx.$t('confirm'),
    onConfirm: $options.sendWithPic,
    onCancel: $options.cancelWithPic,
    "lock-scroll": ""
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_35, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_image, {
      width: "100",
      fit: "cover",
      "lazy-load": "",
      src: $data.fileUrl
    }, {
      loading: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_loading, {
        type: "spinner",
        size: "100"
      })]),
      error: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_icon, {
        name: "close",
        size: "100"
      })]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["src"])])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show", "title", "cancel-button-text", "confirm-button-text", "onConfirm", "onCancel"])]), $options.unreceivedredpacketList.length > 0 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("div", {
    key: 0,
    class: "red-notion",
    onClick: _cache[16] || (_cache[16] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])((...args) => $options.goAnchor && $options.goAnchor(...args), ["stop", "prevent"]))
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_badge, {
    content: $options.unreceivedredpacketList.length,
    max: "99"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_36]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["content"])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), $options.role > 1 && $options.groupInfo.status !== 2 && $options.groupInfo.status !== 3 ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_router_link, {
    key: 0,
    class: "punish-btn",
    to: {
      name: 'ChatPenalty',
      params: {
        id: $options.groupId
      }
    }
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [_hoisted_37]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-notice[data-v-d3cbafe2] {\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 1rem;\n  width: 100%;\n  padding: 0.2rem 0.3rem;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n}\n.chat-notice .icon-notice[data-v-d3cbafe2] {\n  color: #C1C1C1;\n  font-size: 0.48rem;\n}\n.chat-notice .chat-notice-content[data-v-d3cbafe2] {\n  padding: 0 0.1rem;\n  flex: 1;\n}\n.chat-notice .chat-notice-content .title[data-v-d3cbafe2] {\n  font-size: 0.28rem;\n  color: #3F80F7;\n  letter-spacing: 0;\n  font-weight: 500;\n  margin: 0 0 0.04rem 0;\n}\n.chat-notice .chat-notice-content .content[data-v-d3cbafe2] {\n  font-size: 0.24rem;\n  color: #333;\n  letter-spacing: 0;\n  font-weight: 400;\n  max-width: calc(100vw - 1.72rem);\n}\n.chat-notice .icon-close[data-v-d3cbafe2]:active {\n  opacity: 0.6;\n}\n.notice-placeholder[data-v-d3cbafe2] {\n  height: 0.96rem;\n}\n.notice-content[data-v-d3cbafe2] {\n  padding: 0.2rem 0.4rem 0.2rem 0.4rem;\n  max-height: 60vh;\n  font-size: 0.3rem;\n  color: #323233;\n  line-height: 0.44rem;\n  font-weight: 400;\n  overflow-y: auto;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.notice-content h4[data-v-d3cbafe2] {\n  margin: 0;\n  font-weight: 400;\n}\n.notice-content li[data-v-d3cbafe2] {\n  text-indent: 0.48rem;\n}\n.icon-dialog-close[data-v-d3cbafe2] {\n  position: absolute;\n  right: 0.3rem;\n  top: 0.3rem;\n  font-weight: 500;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-container[data-v-23cacf85] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191c32;\n  background: #f2f3f5;\n}\n.chat-container .chat-title[data-v-23cacf85] {\n  font-size: 0.32rem;\n  color: #333333;\n  display: flex;\n  align-items: center;\n}\n.chat-container .chat-title .right[data-v-23cacf85] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1;\n  margin-left: 0.1rem;\n}\n.chat-container .chat-title .chat-dec[data-v-23cacf85] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n  margin-top: 0.04rem;\n}\n.chat-container .iconfont.icon-set[data-v-23cacf85] {\n  font-size: 0.44rem;\n  color: #c1c1c1;\n}\n.chat-container .chat-content[data-v-23cacf85] {\n  background: #f2f3f5;\n  min-height: calc(100vh - 3rem);\n  padding-bottom: 2.4rem;\n}\n.chat-container .chat-bottom[data-v-23cacf85] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  background: #ffffff;\n  z-index: 2;\n}\n.chat-container .reply-container[data-v-23cacf85] {\n  padding: 0.2rem 0.28rem;\n  display: flex;\n  align-items: center;\n}\n.chat-container .icon-reply[data-v-23cacf85] {\n  font-size: 0.4rem;\n  color: #3f80f7;\n}\n.chat-container .reply-content[data-v-23cacf85] {\n  border-left: 0.02rem solid #3f80f7;\n  margin: 0 0.1rem;\n  padding-left: 0.1rem;\n  font-size: 0.28rem;\n  flex: 1;\n}\n.chat-container .reply-content .top[data-v-23cacf85] {\n  color: #3f80f7;\n  font-weight: 400;\n}\n.chat-container .reply-content .bottom[data-v-23cacf85] {\n  color: #323233;\n  font-weight: 400;\n  margin-top: 0.06rem;\n  max-width: calc(100vw - 1.9rem);\n}\n.chat-container .chat-bottom-textarea[data-v-23cacf85] {\n  background: #ffffff;\n  padding: 0.28rem;\n  display: flex;\n  align-items: flex-end;\n}\n.chat-container .chat-bottom-input[data-v-23cacf85] {\n  background: #f6f6f6;\n  border-radius: 0.4rem;\n  padding: 0.1rem 0.3rem;\n  flex: 1;\n}\n.chat-container .chat-bottom-input.readonly[data-v-23cacf85] textarea {\n  text-align: center;\n}\n.chat-container .icon-red-packet[data-v-23cacf85] {\n  font-size: 0.6rem;\n  margin: 0.04rem 0.2rem 0.04rem 0.04rem;\n  color: #ed4a4a;\n}\n.chat-container .icon-send[data-v-23cacf85] {\n  font-size: 0.6rem;\n  margin: 0.04rem 0;\n  margin-left: 0.3rem;\n}\n.chat-container .icon-send[data-v-23cacf85]:active {\n  opacity: 0.6;\n}\n.chat-container .group-b[data-v-23cacf85] {\n  font-size: 0.26rem;\n  color: #999999;\n  letter-spacing: 0;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f6f6f6;\n  border-radius: 0.4rem;\n  width: 100%;\n  height: 0.68rem;\n}\n.chat-container .group-b a[data-v-23cacf85] {\n  margin-left: 0.04rem;\n}\n.label-address[data-v-23cacf85] {\n  margin: 0.4rem 0;\n  border-radius: 0.16rem;\n}\n.form-submit[data-v-23cacf85] {\n  margin: 0.4rem 0;\n}\n.popup-title[data-v-23cacf85] {\n  padding: 0 0.6rem;\n}\n.punish-btn[data-v-23cacf85] {\n  position: fixed;\n  bottom: 1.7rem;\n  right: 0.4rem;\n  width: 0.88rem;\n  height: 0.88rem;\n  background: #3f80f7;\n  border-radius: 50%;\n  box-shadow: 0 0 0 0.12rem rgba(63, 128, 247, 0.2), 0 0 0 0.24rem rgba(63, 128, 247, 0.1);\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.punish-btn[data-v-23cacf85]:hover {\n  text-decoration: none;\n}\n.punish-btn .iconfont[data-v-23cacf85] {\n  font-size: 0.52rem;\n}\n.count-down[data-v-23cacf85] {\n  color: #3f80f7;\n  margin: 0.04rem 0;\n  margin-left: 0.3rem;\n  line-height: 0.6rem;\n  height: 0.6rem;\n  min-width: 0.8rem;\n}\n.more-features[data-v-23cacf85] {\n  padding: 0 0.4rem 0.4rem;\n}\n.more-features .item[data-v-23cacf85] {\n  font-size: 0.26rem;\n  text-align: center;\n  color: #333;\n}\n.more-features .item i[data-v-23cacf85] {\n  font-size: 0.58rem;\n  background: #F6F6F6;\n  padding: 0.2rem;\n  display: block;\n  color: #333;\n}\n.more-features .item span[data-v-23cacf85] {\n  margin-top: 0.1rem;\n  color: #999999;\n}\n.more-features .item input#uploaderFile-1[data-v-23cacf85] {\n  width: 0;\n  height: 0;\n  font-size: 0;\n}\n.red-notion[data-v-23cacf85] {\n  background-size: contain;\n  position: fixed;\n  right: 0.2rem;\n  bottom: 1.6rem;\n  font-size: 0.24rem;\n  font-weight: bolder;\n  color: #fff;\n  padding: 0.2rem;\n  text-align: center;\n}\n.red-notion span[data-v-23cacf85] {\n  display: block;\n  text-align: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("94df4d84", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("01c91d96", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/redPacket/redPacket.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/redPacket/redPacket.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/redPacket.349b489d.svg";

/***/ }),

/***/ "./src/components/chat/notice.vue":
/*!****************************************!*\
  !*** ./src/components/chat/notice.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_vue_vue_type_template_id_d3cbafe2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice.vue?vue&type=template&id=d3cbafe2&scoped=true */ "./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true");
/* harmony import */ var _notice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice.vue?vue&type=script&lang=js */ "./src/components/chat/notice.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true */ "./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_notice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notice_vue_vue_type_template_id_d3cbafe2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-d3cbafe2"],['__file',"src/components/chat/notice.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/chat/notice.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/chat/notice.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./notice.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=style&index=0&id=d3cbafe2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_style_index_0_id_d3cbafe2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_template_id_d3cbafe2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./notice.vue?vue&type=template&id=d3cbafe2&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/chat/notice.vue?vue&type=template&id=d3cbafe2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_notice_vue_vue_type_template_id_d3cbafe2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/chat/chat.vue":
/*!*********************************!*\
  !*** ./src/views/chat/chat.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_23cacf85_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=23cacf85&scoped=true */ "./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true");
/* harmony import */ var _chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js */ "./src/views/chat/chat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true */ "./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_chat_vue_vue_type_template_id_23cacf85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-23cacf85"],['__file',"src/views/chat/chat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/chat.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/views/chat/chat.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chat.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=style&index=0&id=23cacf85&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_style_index_0_id_23cacf85_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true":
/*!***************************************************************************!*\
  !*** ./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true ***!
  \***************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_template_id_23cacf85_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./chat.vue?vue&type=template&id=23cacf85&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/chat.vue?vue&type=template&id=23cacf85&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_chat_vue_vue_type_template_id_23cacf85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);