require('./runtime');
require('./vendors');
require('./taro');

(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['app'],
  {
    /***/ './node_modules/babel-loader/lib/index.js!./src/app.ts':
      /*!****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.ts ***!
  \****************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/vue/index.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          vue__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./app.scss */ './src/app.scss'
        );
        /* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _app_scss__WEBPACK_IMPORTED_MODULE_1__
        );

        var App = Object(vue__WEBPACK_IMPORTED_MODULE_0__['createApp'])({
          onShow: function onShow(options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
        });

        /* harmony default export */ __webpack_exports__['a'] = App;

        /***/
      },

    /***/ './src/app.scss':
      /*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './src/app.ts':
      /*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @tarojs/plugin-platform-weapp/dist/runtime */ './node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js'
          );
        /* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @tarojs/plugin-html/dist/runtime */ './node_modules/@tarojs/plugin-html/dist/runtime.js'
        );
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @tarojs/plugin-framework-vue3/dist/runtime */ './node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js'
          );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @tarojs/taro */ './node_modules/@tarojs/taro/index.js'
        );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../node_modules/babel-loader/lib!./app.ts */ './node_modules/babel-loader/lib/index.js!./src/app.ts'
          );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! vue */ './node_modules/vue/index.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          vue__WEBPACK_IMPORTED_MODULE_6__
        );

        var config = {
          pages: ['pages/index/index'],
          components: [],
          window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
          }
        };
        _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__['window'].__taroAppConfig = config;
        var inst = App(
          Object(_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__[/* createVue3App */ 'a'])(
            _node_modules_babel_loader_lib_index_js_app_ts__WEBPACK_IMPORTED_MODULE_5__[/* default */ 'a'],
            vue__WEBPACK_IMPORTED_MODULE_6__['h'],
            config
          )
        );

        Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__['initPxTransform'])({
          designWidth: 375,
          deviceRatio: { 375: 2, 640: 1.17, 750: 1, 828: 0.905 }
        });

        /***/
      }
  },
  [['./src/app.ts', 'runtime', 'taro', 'vendors']]
]);
//# sourceMappingURL=app.js.map
