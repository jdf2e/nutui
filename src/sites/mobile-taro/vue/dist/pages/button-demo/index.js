(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['pages/button-demo/index'],
  {
    /***/ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button-demo/index.vue':
      /*!***************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button-demo/index.vue ***!
  \***************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _index_vue_vue_type_template_id_2436f8cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index.vue?vue&type=template&id=2436f8cd */ './src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd'
        );
        /* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index.vue?vue&type=script&lang=js */ './src/pages/button-demo/index.vue?vue&type=script&lang=js'
        );

        _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _index_vue_vue_type_template_id_2436f8cd__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/button-demo/index.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/button-demo/index.vue?vue&type=script&lang=js':
      /*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/button-demo/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _button_index_taro_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../button/index.taro.vue */ './src/pages/button/index.taro.vue'
        );

        /* harmony default export */ __webpack_exports__['a'] = {
          components: {
            'nut-button':
              _button_index_taro_vue__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
          },
          setup: function setup() {
            var handleClick = function handleClick() {
              console.log('click!!!');
            };

            return {
              handleClick: handleClick
            };
          }
        };

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd':
      /*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd ***!
  \**********************************************************************************************************************************************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return render;
          }
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );

        var _hoisted_1 = {
          class: 'index'
        };

        var _hoisted_2 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('主要按钮');

        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_nut_button = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 's']
          )('nut-button');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'q'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'view',
              _hoisted_1,
              [
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_button,
                  {
                    type: 'primary',
                    desc: '主要按钮',
                    onClick: $setup.handleClick
                  },
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                    )(function() {
                      return [_hoisted_2];
                    }),
                    _: 1
                    /* STABLE */
                  },
                  8,
                  /* PROPS */
                  ['onClick']
                )
              ]
            )
          );
        }

        /***/
      },

    /***/ './src/pages/button-demo/index.vue':
      /*!*****************************************!*\
  !*** ./src/pages/button-demo/index.vue ***!
  \*****************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button-demo/index.vue'
        );

        var config = { navigationBarTitleText: 'button-demo' };

        var inst = Page(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createPageConfig']
          )(
            _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ],
            'pages/button-demo/index',
            { root: { cn: [] } },
            config || {}
          )
        );

        /***/
      },

    /***/ './src/pages/button-demo/index.vue?vue&type=script&lang=js':
      /*!*****************************************************************!*\
  !*** ./src/pages/button-demo/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/button-demo/index.vue?vue&type=script&lang=js'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd':
      /*!***********************************************************************!*\
  !*** ./src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd ***!
  \***********************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_2436f8cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=2436f8cd */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button-demo/index.vue?vue&type=template&id=2436f8cd'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_2436f8cd__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      }
  },
  [
    [
      './src/pages/button-demo/index.vue',
      'runtime',
      'taro',
      'vendors',
      'common'
    ]
  ]
]);
//# sourceMappingURL=index.js.map
