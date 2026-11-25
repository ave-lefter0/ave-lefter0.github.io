(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ChatPenalty"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penalty.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatPenalty',
  data() {
    return {
      form: {
        type: '',
        descript: '',
        profile_picture: undefined
      },
      showPicker: false,
      types: [0, 1],
      loading: false
    };
  },
  computed: {
    typeResult() {
      var _this$columns;
      return ((_this$columns = this.columns) === null || _this$columns === void 0 ? void 0 : _this$columns[this.form.type]) || '';
    },
    columns() {
      return [this.$t('groupBan'), this.$t('groupSlow')];
    },
    groupId() {
      return this.$store.state.chat.groupId;
    }
  },
  methods: {
    beforeRead(file) {
      if (Array.isArray(file)) {
        return Promise.all(file.map(i => this.compressFile(i)));
      }
      return this.compressFile(file);
    },
    compressFile(file) {
      return new Promise((resolve, reject) => {
        // compressorjs 默认开启 checkOrientation 选项
        // 会将图片修正为正确方向
        new compressorjs__WEBPACK_IMPORTED_MODULE_3___default.a(file, {
          quality: 0.6,
          checkOrientation: false,
          success: item => {
            if (item.size > 1024 * 1024) {
              this.$toast({
                message: this.$t('uploadingImageTooLarge'),
                position: 'top'
              });
              reject(false);
            } else {
              resolve(item);
            }
          },
          error(err) {
            console.log(err.message);
            this.$toast({
              message: err.message,
              position: 'top'
            });
            reject(false);
          }
        });
      });
    },
    onConfirm(value, index) {
      console.log(value);
      this.form.type = index;
      this.showPicker = false;
    },
    onSubmit(values) {
      console.log('values', values);
      console.log('this.form.profile_picture', this.form.profile_picture);
      let profile_picture = this.form.profile_picture.map(i => i.file);
      this.loading = true;
      Object(_api__WEBPACK_IMPORTED_MODULE_2__["addChatGroupIllegal"])(this.groupId, profile_picture, this.form.descript, this.form.type).then(res => {
        console.log(res);
        if (res) {
          this.$toast.success(this.$t('submitPenaltySuccessfully'));
          this.$store.dispatch('getChatGroupSettings');
          this.$f.goBack();
        }
      }).catch(err => {
        console.log(err);
        this.$toast.fail(err);
      }).finally(() => {
        this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.mjs");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChatPenaltyInfo',
  data() {
    return {
      type: '',
      showPicker: false,
      loading: false,
      penaltyInfo: {}
    };
  },
  computed: {
    typeResult() {
      var _this$columns, _this$penaltyInfo;
      return ((_this$columns = this.columns) === null || _this$columns === void 0 ? void 0 : _this$columns[(_this$penaltyInfo = this.penaltyInfo) === null || _this$penaltyInfo === void 0 ? void 0 : _this$penaltyInfo.type]) || '';
    },
    columns() {
      return [this.$t('groupBan'), this.$t('groupSlow')];
    },
    groupId() {
      return this.$store.state.chat.groupId;
    }
  },
  watch: {
    '$store.state.chat.chatToken'(val) {
      if (val) {
        this.init();
      }
    }
  },
  created() {
    this.init();
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.getChatGroupIllegal();
    },
    getChatGroupIllegal() {
      Object(_api__WEBPACK_IMPORTED_MODULE_0__["getChatGroupIllegal"])(this.groupId).then(res => {
        this.penaltyInfo = (res === null || res === void 0 ? void 0 : res[0]) || {};
        if (this.penaltyInfo.images) {
          var _JSON$parse, _this$penaltyInfo2;
          this.penaltyInfo.images = ((_JSON$parse = JSON.parse) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.call(JSON, (_this$penaltyInfo2 = this.penaltyInfo) === null || _this$penaltyInfo2 === void 0 ? void 0 : _this$penaltyInfo2.images)) || [];
        }
        console.log('this.penaltyInfo', this.penaltyInfo);
      });
    },
    imagePreview(index) {
      Object(vant__WEBPACK_IMPORTED_MODULE_1__["ImagePreview"])({
        images: this.penaltyInfo.images,
        startPosition: index,
        closeable: true
      });
    },
    goToPay() {
      if ((this.$store.getters.netId === "bsc" || this.$store.getters.netId === "oec") && this.$store.state.wallet !== "importAddress" && window.ethereum) {
        this.$router.push({
          name: 'ChatNewPayment',
          params: {
            type: 'burn',
            id: this.groupId,
            illegalId: this.penaltyInfo.id
          }
        });
      } else {
        this.$router.push({
          name: 'ChatBurn',
          params: {
            id: this.groupId,
            illegalId: this.penaltyInfo.id
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-7f4924ec"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chatPenalty-container"
};
const _hoisted_2 = {
  class: "center-container"
};
const _hoisted_3 = {
  class: "form-label"
};
const _hoisted_4 = {
  class: "form-label"
};
const _hoisted_5 = {
  class: "form-label"
};
const _hoisted_6 = {
  class: "submit-bar van-safe-area-bottom van-hairline--top"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_uploader = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-uploader");
  const _component_van_form = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-form");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  const _component_van_picker = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-picker");
  const _component_van_popup = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-popup");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('penaltyViolation')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_form, {
    class: "form-container",
    ref: "form",
    onSubmit: $options.onSubmit
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_3, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('penaltyType')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-field\n        class=\"form-field b-filed\"\n        :model-value=\"typeResult\"\n        readonly\n        name=\"typeResult\"\n        label=\"\"\n        placeholder=\"请选择处罚类型\"\n        :rules=\"[{ required: true, message: '请选择处罚类型' }]\"\n      /> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
      class: "form-field b-filed",
      "model-value": $options.typeResult,
      clickable: "",
      readonly: "",
      name: "typeResult",
      label: "",
      placeholder: _ctx.$t('pleaseSelectThePenaltyType'),
      rules: [{
        required: true,
        message: this.$t('pleaseSelectThePenaltyType')
      }],
      "right-icon": "arrow-down",
      onClick: _cache[1] || (_cache[1] = $event => $data.showPicker = true)
    }, null, 8 /* PROPS */, ["model-value", "placeholder", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('penaltyBasis')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
      class: "form-field b-filed",
      modelValue: $data.form.descript,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.form.descript = $event),
      rows: "5",
      autosize: "",
      label: "",
      name: "descript",
      type: "textarea",
      placeholder: _ctx.$t('pleaseEnterThePenaltyBasis'),
      rules: [{
        required: true,
        message: this.$t('pleaseEnterThePenaltyBasis')
      }],
      maxlength: "100",
      "show-word-limit": ""
    }, null, 8 /* PROPS */, ["modelValue", "placeholder", "rules"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('basedOnScreenshots')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
      name: "profile_picture",
      label: "",
      rules: [{
        required: true,
        message: this.$t('pleaseUploadScreenshots')
      }]
    }, {
      input: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_uploader, {
        modelValue: $data.form.profile_picture,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $data.form.profile_picture = $event),
        "result-type": "file",
        "before-read": $options.beforeRead,
        multiple: "",
        "max-count": "3",
        "upload-text": _ctx.$t('upTo3')
      }, null, 8 /* PROPS */, ["modelValue", "before-read", "upload-text"])]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["rules"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onSubmit"])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    block: "",
    round: "",
    type: "primary",
    loading: $data.loading,
    onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => _ctx.$refs.form.submit(), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('submitPenalty')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["loading"])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_popup, {
    show: $data.showPicker,
    "onUpdate:show": _cache[6] || (_cache[6] = $event => $data.showPicker = $event),
    position: "bottom"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_picker, {
      columns: $options.columns,
      onConfirm: $options.onConfirm,
      onCancel: _cache[5] || (_cache[5] = $event => $data.showPicker = false)
    }, null, 8 /* PROPS */, ["columns", "onConfirm"])]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => (Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-20a4c68c"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])(), n);
const _hoisted_1 = {
  class: "chatPenalty-container"
};
const _hoisted_2 = {
  class: "center-container"
};
const _hoisted_3 = {
  class: "form-container"
};
const _hoisted_4 = {
  class: "form-label"
};
const _hoisted_5 = {
  class: "form-label"
};
const _hoisted_6 = {
  class: "form-label"
};
const _hoisted_7 = {
  class: "images"
};
const _hoisted_8 = {
  class: "submit-bar van-safe-area-bottom van-hairline--top"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-nav-bar");
  const _component_van_field = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-field");
  const _component_van_image = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-image");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("van-button");
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])("section", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_nav_bar, {
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2",
    title: _ctx.$t('violationPenaltyDetails')
  }, null, 8 /* PROPS */, ["title"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('penaltyType')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])(" <van-field\n        class=\"form-field b-filed\"\n        :model-value=\"typeResult\"\n        readonly\n        name=\"typeResult\"\n        label=\"\"\n        placeholder=\"请选择处罚类型\"\n      /> "), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
    class: "form-field b-filed",
    "model-value": $options.typeResult,
    readonly: "",
    name: "typeResult",
    label: "",
    placeholder: _ctx.$t('pleaseSelectThePenaltyType'),
    "right-icon": "arrow-down"
  }, null, 8 /* PROPS */, ["model-value", "placeholder"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('penaltyBasis')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_field, {
    class: "form-field b-filed",
    "model-value": $data.penaltyInfo.descript,
    rows: "5",
    label: "",
    name: "descript",
    type: "textarea",
    readonly: ""
  }, null, 8 /* PROPS */, ["model-value"]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("h3", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('basedOnScreenshots')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_7, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["renderList"])($data.penaltyInfo.images, (item, index) => {
    return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])(_component_van_image, {
      class: "image-item",
      key: index,
      width: "1.6rem",
      height: "1.6rem",
      fit: "contain",
      src: item,
      onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($event => $options.imagePreview(index), ["stop"])
    }, null, 8 /* PROPS */, ["src", "onClick"]);
  }), 128 /* KEYED_FRAGMENT */))])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createElementVNode"])("div", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])(_component_van_button, {
    block: "",
    round: "",
    type: "primary",
    onClick: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withModifiers"])($options.goToPay, ["stop"])
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(() => {
      var _ctx$$store$state$cha;
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.$t('burnConfirm', {
        n: ((_ctx$$store$state$cha = _ctx.$store.state.chat.chatConfig) === null || _ctx$$store$state$cha === void 0 ? void 0 : _ctx$$store$state$cha.ave_chat_usdt_count) || ''
      })), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"])])]);
}

/***/ }),

/***/ "./node_modules/compressorjs/dist/compressor.js":
/*!******************************************************!*\
  !*** ./node_modules/compressorjs/dist/compressor.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var canvasToBlob = {exports: {}};

  /*
   * JavaScript Canvas to Blob
   * https://github.com/blueimp/JavaScript-Canvas-to-Blob
   *
   * Copyright 2012, Sebastian Tschan
   * https://blueimp.net
   *
   * Licensed under the MIT license:
   * https://opensource.org/licenses/MIT
   *
   * Based on stackoverflow user Stoive's code snippet:
   * http://stackoverflow.com/q/4998908
   */

  (function (module) {
  if (typeof window === 'undefined') {
    return;
  }

    (function (window) {

      var CanvasPrototype = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;

      var hasBlobConstructor = window.Blob && function () {
        try {
          return Boolean(new Blob());
        } catch (e) {
          return false;
        }
      }();

      var hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && function () {
        try {
          return new Blob([new Uint8Array(100)]).size === 100;
        } catch (e) {
          return false;
        }
      }();

      var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;

      var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array && function (dataURI) {
        var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb; // Parse the dataURI components as per RFC 2397

        matches = dataURI.match(dataURIPattern);

        if (!matches) {
          throw new Error('invalid data URI');
        } // Default to text/plain;charset=US-ASCII


        mediaType = matches[2] ? matches[1] : 'text/plain' + (matches[3] || ';charset=US-ASCII');
        isBase64 = !!matches[4];
        dataString = dataURI.slice(matches[0].length);

        if (isBase64) {
          // Convert base64 to raw binary data held in a string:
          byteString = atob(dataString);
        } else {
          // Convert base64/URLEncoded data component to raw binary:
          byteString = decodeURIComponent(dataString);
        } // Write the bytes of the string to an ArrayBuffer:


        arrayBuffer = new ArrayBuffer(byteString.length);
        intArray = new Uint8Array(arrayBuffer);

        for (i = 0; i < byteString.length; i += 1) {
          intArray[i] = byteString.charCodeAt(i);
        } // Write the ArrayBuffer (or ArrayBufferView) to a blob:


        if (hasBlobConstructor) {
          return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
            type: mediaType
          });
        }

        bb = new BlobBuilder();
        bb.append(arrayBuffer);
        return bb.getBlob(mediaType);
      };

      if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
          CanvasPrototype.toBlob = function (callback, type, quality) {
            var self = this;
            setTimeout(function () {
              if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              } else {
                callback(self.mozGetAsFile('blob', type));
              }
            });
          };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
          if (CanvasPrototype.msToBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                if ((type && type !== 'image/png' || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
                  callback(dataURLtoBlob(self.toDataURL(type, quality)));
                } else {
                  callback(self.msToBlob(type));
                }
              });
            };
          } else {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              });
            };
          }
        }
      }

      if (module.exports) {
        module.exports = dataURLtoBlob;
      } else {
        window.dataURLtoBlob = dataURLtoBlob;
      }
    })(window);
  })(canvasToBlob);

  var toBlob = canvasToBlob.exports;

  var isBlob = function isBlob(value) {
    if (typeof Blob === 'undefined') {
      return false;
    }

    return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
  };

  var DEFAULTS = {
    /**
     * Indicates if output the original image instead of the compressed one
     * when the size of the compressed image is greater than the original one's
     * @type {boolean}
     */
    strict: true,

    /**
     * Indicates if read the image's Exif Orientation information,
     * and then rotate or flip the image automatically.
     * @type {boolean}
     */
    checkOrientation: true,

    /**
     * The max width of the output image.
     * @type {number}
     */
    maxWidth: Infinity,

    /**
     * The max height of the output image.
     * @type {number}
     */
    maxHeight: Infinity,

    /**
     * The min width of the output image.
     * @type {number}
     */
    minWidth: 0,

    /**
     * The min height of the output image.
     * @type {number}
     */
    minHeight: 0,

    /**
     * The width of the output image.
     * If not specified, the natural width of the source image will be used.
     * @type {number}
     */
    width: undefined,

    /**
     * The height of the output image.
     * If not specified, the natural height of the source image will be used.
     * @type {number}
     */
    height: undefined,

    /**
     * Sets how the size of the image should be resized to the container
     * specified by the `width` and `height` options.
     * @type {string}
     */
    resize: 'none',

    /**
     * The quality of the output image.
     * It must be a number between `0` and `1`,
     * and only available for `image/jpeg` and `image/webp` images.
     * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
     * @type {number}
     */
    quality: 0.8,

    /**
     * The mime type of the output image.
     * By default, the original mime type of the source image file will be used.
     * @type {string}
     */
    mimeType: 'auto',

    /**
     * Files whose file type is included in this list,
     * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
     * @type {string｜Array}
     */
    convertTypes: ['image/png'],

    /**
     * PNG files over this size (5 MB by default) will be converted to JPEGs.
     * To disable this, just set the value to `Infinity`.
     * @type {number}
     */
    convertSize: 5000000,

    /**
     * The hook function to execute before draw the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.fillStyle = '#fff';
     * }
     */
    beforeDraw: null,

    /**
     * The hook function to execute after drew the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.filter = 'grayscale(100%)';
     * }
     */
    drew: null,

    /**
     * The hook function to execute when success to compress the image.
     * @type {Function}
     * @param {File} file - The compressed image File object.
     * @example
     * function (file) {
     *   console.log(file);
     * }
     */
    success: null,

    /**
     * The hook function to execute when fail to compress the image.
     * @type {Function}
     * @param {Error} err - An Error object.
     * @example
     * function (err) {
     *   console.log(err.message);
     * }
     */
    error: null
  };

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};

  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  var REGEXP_IMAGE_TYPE = /^image\/.+$/;
  /**
   * Check if the given value is a mime type of image.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
   */

  function isImageType(value) {
    return REGEXP_IMAGE_TYPE.test(value);
  }
  /**
   * Convert image type to extension.
   * @param {string} value - The image type to convert.
   * @returns {boolean} Returns the image extension.
   */

  function imageTypeToExtension(value) {
    var extension = isImageType(value) ? value.substr(6) : '';

    if (extension === 'jpeg') {
      extension = 'jpg';
    }

    return ".".concat(extension);
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;
    length += start;

    for (i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var btoa = WINDOW.btoa;
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
            // 8 is the offset of the current tag's value
            _offset += 8; // Get the original orientation value

            orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
        }
      }
    } catch (e) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref) {
    var aspectRatio = _ref.aspectRatio,
        height = _ref.height,
        width = _ref.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if ((type === 'contain' || type === 'none') && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }

  var ArrayBuffer$1 = WINDOW.ArrayBuffer,
      FileReader = WINDOW.FileReader;
  var URL = WINDOW.URL || WINDOW.webkitURL;
  var REGEXP_EXTENSION = /\.\w+$/;
  var AnotherCompressor = WINDOW.Compressor;
  /**
   * Creates a new image compressor.
   * @class
   */

  var Compressor = /*#__PURE__*/function () {
    /**
     * The constructor of Compressor.
     * @param {File|Blob} file - The target image file for compressing.
     * @param {Object} [options] - The options for compressing.
     */
    function Compressor(file, options) {
      _classCallCheck(this, Compressor);

      this.file = file;
      this.image = new Image();
      this.options = _objectSpread2(_objectSpread2({}, DEFAULTS), options);
      this.aborted = false;
      this.result = null;
      this.init();
    }

    _createClass(Compressor, [{
      key: "init",
      value: function init() {
        var _this = this;

        var file = this.file,
            options = this.options;

        if (!isBlob(file)) {
          this.fail(new Error('The first argument must be a File or Blob object.'));
          return;
        }

        var mimeType = file.type;

        if (!isImageType(mimeType)) {
          this.fail(new Error('The first argument must be an image File or Blob object.'));
          return;
        }

        if (!URL || !FileReader) {
          this.fail(new Error('The current browser does not support image compression.'));
          return;
        }

        if (!ArrayBuffer$1) {
          options.checkOrientation = false;
        }

        if (URL && !options.checkOrientation) {
          this.load({
            url: URL.createObjectURL(file)
          });
        } else {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';
          this.reader = reader;

          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;
            var data = {};

            if (checkOrientation) {
              // Reset the orientation value to its default value 1
              // as some iOS browsers will render image with its orientation
              var orientation = resetAndGetOrientation(result);

              if (orientation > 1 || !URL) {
                // Generate a new URL which has the default orientation value
                data.url = arrayBufferToDataURL(result, mimeType);

                if (orientation > 1) {
                  _extends(data, parseOrientation(orientation));
                }
              } else {
                data.url = URL.createObjectURL(file);
              }
            } else {
              data.url = result;
            }

            _this.load(data);
          };

          reader.onabort = function () {
            _this.fail(new Error('Aborted to read the image with FileReader.'));
          };

          reader.onerror = function () {
            _this.fail(new Error('Failed to read the image with FileReader.'));
          };

          reader.onloadend = function () {
            _this.reader = null;
          };

          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }
    }, {
      key: "load",
      value: function load(data) {
        var _this2 = this;

        var file = this.file,
            image = this.image;

        image.onload = function () {
          _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight
          }));
        };

        image.onabort = function () {
          _this2.fail(new Error('Aborted to load the image.'));
        };

        image.onerror = function () {
          _this2.fail(new Error('Failed to load the image.'));
        }; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.


        if (WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)) {
          // Fix the `The operation is insecure` error (#57)
          image.crossOrigin = 'anonymous';
        }

        image.alt = file.name;
        image.src = data.url;
      }
    }, {
      key: "draw",
      value: function draw(_ref2) {
        var _this3 = this;

        var naturalWidth = _ref2.naturalWidth,
            naturalHeight = _ref2.naturalHeight,
            _ref2$rotate = _ref2.rotate,
            rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate,
            _ref2$scaleX = _ref2.scaleX,
            scaleX = _ref2$scaleX === void 0 ? 1 : _ref2$scaleX,
            _ref2$scaleY = _ref2.scaleY,
            scaleY = _ref2$scaleY === void 0 ? 1 : _ref2$scaleY;
        var file = this.file,
            image = this.image,
            options = this.options;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var is90DegreesRotated = Math.abs(rotate) % 180 === 90;
        var resizable = (options.resize === 'contain' || options.resize === 'cover') && isPositiveNumber(options.width) && isPositiveNumber(options.height);
        var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
        var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
        var minWidth = Math.max(options.minWidth, 0) || 0;
        var minHeight = Math.max(options.minHeight, 0) || 0;
        var aspectRatio = naturalWidth / naturalHeight;
        var width = options.width,
            height = options.height;

        if (is90DegreesRotated) {
          var _ref3 = [maxHeight, maxWidth];
          maxWidth = _ref3[0];
          maxHeight = _ref3[1];
          var _ref4 = [minHeight, minWidth];
          minWidth = _ref4[0];
          minHeight = _ref4[1];
          var _ref5 = [height, width];
          width = _ref5[0];
          height = _ref5[1];
        }

        if (resizable) {
          aspectRatio = width / height;
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: maxWidth,
          height: maxHeight
        }, 'contain');

        maxWidth = _getAdjustedSizes.width;
        maxHeight = _getAdjustedSizes.height;

        var _getAdjustedSizes2 = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minWidth,
          height: minHeight
        }, 'cover');

        minWidth = _getAdjustedSizes2.width;
        minHeight = _getAdjustedSizes2.height;

        if (resizable) {
          var _getAdjustedSizes3 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: width,
            height: height
          }, options.resize);

          width = _getAdjustedSizes3.width;
          height = _getAdjustedSizes3.height;
        } else {
          var _getAdjustedSizes4 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: width,
            height: height
          });

          var _getAdjustedSizes4$wi = _getAdjustedSizes4.width;
          width = _getAdjustedSizes4$wi === void 0 ? naturalWidth : _getAdjustedSizes4$wi;
          var _getAdjustedSizes4$he = _getAdjustedSizes4.height;
          height = _getAdjustedSizes4$he === void 0 ? naturalHeight : _getAdjustedSizes4$he;
        }

        width = Math.floor(normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)));
        height = Math.floor(normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)));
        var destX = -width / 2;
        var destY = -height / 2;
        var destWidth = width;
        var destHeight = height;
        var params = [];

        if (resizable) {
          var srcX = 0;
          var srcY = 0;
          var srcWidth = naturalWidth;
          var srcHeight = naturalHeight;

          var _getAdjustedSizes5 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: naturalWidth,
            height: naturalHeight
          }, {
            contain: 'cover',
            cover: 'contain'
          }[options.resize]);

          srcWidth = _getAdjustedSizes5.width;
          srcHeight = _getAdjustedSizes5.height;
          srcX = (naturalWidth - srcWidth) / 2;
          srcY = (naturalHeight - srcHeight) / 2;
          params.push(srcX, srcY, srcWidth, srcHeight);
        }

        params.push(destX, destY, destWidth, destHeight);

        if (is90DegreesRotated) {
          var _ref6 = [height, width];
          width = _ref6[0];
          height = _ref6[1];
        }

        canvas.width = width;
        canvas.height = height;

        if (!isImageType(options.mimeType)) {
          options.mimeType = file.type;
        }

        var fillStyle = 'transparent'; // Converts PNG files over the `convertSize` to JPEGs.

        if (file.size > options.convertSize && options.convertTypes.indexOf(options.mimeType) >= 0) {
          options.mimeType = 'image/jpeg';
        }

        if (options.mimeType === 'image/jpeg') {
          fillStyle = '#fff';
        } // Override the default fill color (#000, black)


        context.fillStyle = fillStyle;
        context.fillRect(0, 0, width, height);

        if (options.beforeDraw) {
          options.beforeDraw.call(this, context, canvas);
        }

        if (this.aborted) {
          return;
        }

        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.drawImage.apply(context, [image].concat(params));
        context.restore();

        if (options.drew) {
          options.drew.call(this, context, canvas);
        }

        if (this.aborted) {
          return;
        }

        var done = function done(result) {
          if (!_this3.aborted) {
            _this3.done({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          }
        };

        if (canvas.toBlob) {
          canvas.toBlob(done, options.mimeType, options.quality);
        } else {
          done(toBlob(canvas.toDataURL(options.mimeType, options.quality)));
        }
      }
    }, {
      key: "done",
      value: function done(_ref7) {
        var naturalWidth = _ref7.naturalWidth,
            naturalHeight = _ref7.naturalHeight,
            result = _ref7.result;
        var file = this.file,
            image = this.image,
            options = this.options;

        if (URL && !options.checkOrientation) {
          URL.revokeObjectURL(image.src);
        }

        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (options.strict && result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight || options.maxWidth < naturalWidth || options.maxHeight < naturalHeight)) {
            result = file;
          } else {
            var date = new Date();
            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name; // Convert the extension to match its type

            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }

        this.result = result;

        if (options.success) {
          options.success.call(this, result);
        }
      }
    }, {
      key: "fail",
      value: function fail(err) {
        var options = this.options;

        if (options.error) {
          options.error.call(this, err);
        } else {
          throw err;
        }
      }
    }, {
      key: "abort",
      value: function abort() {
        if (!this.aborted) {
          this.aborted = true;

          if (this.reader) {
            this.reader.abort();
          } else if (!this.image.complete) {
            this.image.onload = null;
            this.image.onabort();
          } else {
            this.fail(new Error('The compression process has been aborted.'));
          }
        }
      }
      /**
       * Get the no conflict compressor class.
       * @returns {Compressor} The compressor class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Compressor = AnotherCompressor;
        return Compressor;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        _extends(DEFAULTS, options);
      }
    }]);

    return Compressor;
  }();

  return Compressor;

}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatPenalty-container[data-v-7f4924ec] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191C32;\n  --van-cell-background-color: #fff;\n  background: #F8F8F8;\n  min-height: 100vh;\n}\n.chatPenalty-container .center-container[data-v-7f4924ec] {\n  min-height: calc(100vh - 2.68rem);\n}\n.chatPenalty-container .form-container[data-v-7f4924ec] {\n  background: #fff;\n  padding: 0.3rem;\n}\n.chatPenalty-container .form-label[data-v-7f4924ec] {\n  font-size: 0.28rem;\n  color: #969799;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin: 0 0 0.1rem 0;\n}\n.chatPenalty-container .form-field + .form-label[data-v-7f4924ec] {\n  margin-top: 0.4rem;\n}\n.chatPenalty-container .submit-bar[data-v-7f4924ec] {\n  background: #fff;\n  padding: 0.4rem 0.3rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chatPenalty-container[data-v-20a4c68c] {\n  --van-nav-bar-background-color: #fff;\n  --van-nav-bar-arrow-size: 0.4rem;\n  --van-nav-bar-title-text-color: #333333;\n  --van-nav-bar-icon-color: #191C32;\n  --van-cell-background-color: #fff;\n  background: #F8F8F8;\n  min-height: 100vh;\n}\n.chatPenalty-container .center-container[data-v-20a4c68c] {\n  min-height: calc(100vh - 2.68rem);\n}\n.chatPenalty-container .form-container[data-v-20a4c68c] {\n  background: #fff;\n  padding: 0.3rem;\n}\n.chatPenalty-container .form-label[data-v-20a4c68c] {\n  font-size: 0.28rem;\n  color: #969799;\n  letter-spacing: 0;\n  font-weight: 400;\n  margin: 0 0 0.1rem 0;\n}\n.chatPenalty-container .form-field + .form-label[data-v-20a4c68c] {\n  margin-top: 0.4rem;\n}\n.chatPenalty-container .submit-bar[data-v-20a4c68c] {\n  background: #fff;\n  padding: 0.4rem 0.3rem;\n}\n.chatPenalty-container .images[data-v-20a4c68c] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.chatPenalty-container .images .image-item[data-v-20a4c68c] {\n  border: 0.02rem solid #ddd;\n}\n.chatPenalty-container .images .image-item + .image-item[data-v-20a4c68c] {\n  margin-left: 0.2rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0d4ce934", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6dd74807", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/chat/penalty.vue":
/*!************************************!*\
  !*** ./src/views/chat/penalty.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penalty_vue_vue_type_template_id_7f4924ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penalty.vue?vue&type=template&id=7f4924ec&scoped=true */ "./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true");
/* harmony import */ var _penalty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penalty.vue?vue&type=script&lang=js */ "./src/views/chat/penalty.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true */ "./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_penalty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_penalty_vue_vue_type_template_id_7f4924ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-7f4924ec"],['__file',"src/views/chat/penalty.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/penalty.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/views/chat/penalty.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penalty.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=style&index=0&id=7f4924ec&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_style_index_0_id_7f4924ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true":
/*!******************************************************************************!*\
  !*** ./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true ***!
  \******************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_template_id_7f4924ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penalty.vue?vue&type=template&id=7f4924ec&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penalty.vue?vue&type=template&id=7f4924ec&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penalty_vue_vue_type_template_id_7f4924ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/views/chat/penaltyInfo.vue":
/*!****************************************!*\
  !*** ./src/views/chat/penaltyInfo.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _penaltyInfo_vue_vue_type_template_id_20a4c68c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true */ "./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true");
/* harmony import */ var _penaltyInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./penaltyInfo.vue?vue&type=script&lang=js */ "./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true */ "./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader-v16/dist/exportHelper.js */ "./node_modules/vue-loader-v16/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_penaltyInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_penaltyInfo_vue_vue_type_template_id_20a4c68c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-20a4c68c"],['__file',"src/views/chat/penaltyInfo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penaltyInfo.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=style&index=0&id=20a4c68c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_style_index_0_id_20a4c68c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_template_id_20a4c68c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader-v16/dist??ref--1-1!./penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/chat/penaltyInfo.vue?vue&type=template&id=20a4c68c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_penaltyInfo_vue_vue_type_template_id_20a4c68c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);