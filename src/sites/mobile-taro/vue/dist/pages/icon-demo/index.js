(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/icon-demo/index"],{

/***/ "../../../packages/utils/pxCheck.ts":
/*!**************************************************************************************!*\
  !*** /Users/suzigang/Downloads/project/nutui3.0/nutui/src/packages/utils/pxCheck.ts ***!
  \**************************************************************************************/
/*! exports provided: pxCheck */
/*! exports used: pxCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pxCheck; });
var pxCheck = function pxCheck(value) {
  return isNaN(Number(value)) ? String(value) : "".concat(value, "px");
};

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/icon-demo/index.vue":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/icon-demo/index.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_74e8a1a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=74e8a1a6 */ "./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/icon-demo/index.vue?vue&type=script&lang=js");



_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].render = _index_vue_vue_type_template_id_74e8a1a6__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]
/* hot reload */
if (false) {}

_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].__file = "src/pages/icon-demo/index.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/icon-demo/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/icon-demo/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/index.taro.vue */ "./src/pages/icon/index.taro.vue");
// import Demo from '../../../../../../packages/__VUE/button/demo.vue';

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'nut-icon': _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  setup: function setup() {
    var handleClick = function handleClick() {
      console.log('icon!!!');
    };

    return {
      handleClick: handleClick
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/icon/index.taro.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/icon/index.taro.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../packages/utils/create */ "../../../packages/utils/create/index.ts");
/* harmony import */ var _packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../packages/utils/pxCheck */ "../../../packages/utils/pxCheck.ts");



var _createComponent = Object(_packages_utils_create__WEBPACK_IMPORTED_MODULE_1__[/* createComponent */ "a"])('icon'),
    componentName = _createComponent.componentName,
    create = _createComponent.create;


/* harmony default export */ __webpack_exports__["a"] = (create({
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: ''
    },
    classPrefix: {
      type: String,
      default: 'nutui-iconfont'
    },
    color: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: 'i'
    }
  },
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var handleClick = function handleClick(event) {
      emit('click', event);
    };

    var isImage = function isImage() {
      return props.name ? props.name.indexOf('/') !== -1 : false;
    };

    return function () {
      var _slots$default;

      var _isImage = isImage();

      return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* h */ "m"])(_isImage ? 'img' : props.tag, {
        class: _isImage ? "".concat(componentName, "__img") : "".concat(props.classPrefix, " ").concat(componentName, " ").concat(componentName, "-").concat(props.name),
        style: {
          color: props.color,
          fontSize: Object(_packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_2__[/* pxCheck */ "a"])(props.size),
          width: Object(_packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_2__[/* pxCheck */ "a"])(props.size),
          height: Object(_packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_2__[/* pxCheck */ "a"])(props.size)
        },
        onClick: handleClick,
        src: _isImage ? props.name : ''
      }, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6 ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

var _hoisted_1 = {
  class: "index"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "s"])("nut-icon");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "q"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ "e"])("view", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "j"])(_component_nut_icon, {
    name: "dongdong",
    onClick: $setup.handleClick
  }, null, 8
  /* PROPS */
  , ["onClick"])]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/icon-demo/index.vue":
/*!***************************************!*\
  !*** ./src/pages/icon-demo/index.vue ***!
  \***************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/icon-demo/index.vue");


var config = {"navigationBarTitleText":"button-demo","usingComponents":{"custom-wrapper":"../../custom-wrapper","comp":"../../comp"}};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/icon-demo/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/icon-demo/index.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/pages/icon-demo/index.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/icon-demo/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6":
/*!*********************************************************************!*\
  !*** ./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6 ***!
  \*********************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_74e8a1a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=74e8a1a6 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/icon-demo/index.vue?vue&type=template&id=74e8a1a6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_74e8a1a6__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./src/pages/icon/index.taro.vue":
/*!***************************************!*\
  !*** ./src/pages/icon/index.taro.vue ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.taro.vue?vue&type=script&lang=ts */ "./src/pages/icon/index.taro.vue?vue&type=script&lang=ts");
/* harmony import */ var _index_taro_vue_vue_type_style_index_0_id_41d20988_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss */ "./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss");




/* hot reload */
if (false) {}

_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].__file = "src/pages/icon/index.taro.vue"

/* harmony default export */ __webpack_exports__["a"] = (_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "./src/pages/icon/index.taro.vue?vue&type=script&lang=ts":
/*!***************************************************************!*\
  !*** ./src/pages/icon/index.taro.vue?vue&type=script&lang=ts ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/icon/index.taro.vue?vue&type=script&lang=ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss":
/*!************************************************************************************!*\
  !*** ./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_41d20988_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/icon/index.taro.vue?vue&type=style&index=0&id=41d20988&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_41d20988_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_41d20988_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

},[["./src/pages/icon-demo/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map