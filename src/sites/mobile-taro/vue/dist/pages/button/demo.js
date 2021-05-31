(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['pages/button/demo'],
  {
    /***/ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button/demo.vue':
      /*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button/demo.vue ***!
  \*********************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _demo_vue_vue_type_template_id_a5bd6068__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./demo.vue?vue&type=template&id=a5bd6068 */ './src/pages/button/demo.vue?vue&type=template&id=a5bd6068'
        );
        /* harmony import */ var _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./demo.vue?vue&type=script&lang=ts */ './src/pages/button/demo.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _demo_vue_vue_type_style_index_0_id_a5bd6068_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss */ './src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss'
        );

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _demo_vue_vue_type_template_id_a5bd6068__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/button/demo.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=script&lang=ts':
      /*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/button/demo.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _index_taro_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.taro.vue */ './src/pages/button/index.taro.vue'
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_1__[
              /* createComponent */ 'a'
            ]
          )('button'),
          createDemo = _createComponent.createDemo;

        /* harmony default export */ __webpack_exports__['a'] = createDemo({
          props: {},
          components: {
            'nut-button':
              _index_taro_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ 'a']
          },
          setup: function setup(props) {
            var isLoading = Object(
              vue__WEBPACK_IMPORTED_MODULE_0__[/* ref */ 'j']
            )(false);

            var changeLoading = function changeLoading() {
              isLoading.value = true;
              setTimeout(function() {
                isLoading.value = false;
              }, 3000);
            };

            var handleClick = function handleClick() {
              console.log('click~~');
            };

            return {
              isLoading: isLoading,
              changeLoading: changeLoading,
              handleClick: handleClick
            };
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=template&id=a5bd6068':
      /*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/button/demo.vue?vue&type=template&id=a5bd6068 ***!
  \****************************************************************************************************************************************************************************************************/
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
          class: 'demo'
        };

        var _hoisted_2 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          {
            class: 'h2'
          },
          '按钮类型',
          -1
          /* HOISTED */
        );

        var _hoisted_3 = {
          class: 'demo-button-row'
        };

        var _hoisted_4 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('主要按钮');

        var _hoisted_5 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('信息按钮');

        var _hoisted_6 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('默认按钮');

        var _hoisted_7 = {
          class: 'demo-button-row2'
        };

        var _hoisted_8 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('危险按钮');

        var _hoisted_9 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('警告按钮');

        var _hoisted_10 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('成功按钮');

        var _hoisted_11 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '朴素按钮',
          -1
          /* HOISTED */
        );

        var _hoisted_12 = {
          class: 'demo-button-row2'
        };

        var _hoisted_13 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('朴素按钮');

        var _hoisted_14 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('朴素按钮');

        var _hoisted_15 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '禁用状态',
          -1
          /* HOISTED */
        );

        var _hoisted_16 = {
          class: 'demo-button-row2'
        };

        var _hoisted_17 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('禁用状态');

        var _hoisted_18 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('禁用状态');

        var _hoisted_19 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('禁用状态');

        var _hoisted_20 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '按钮形状',
          -1
          /* HOISTED */
        );

        var _hoisted_21 = {
          class: 'demo-button-row2'
        };

        var _hoisted_22 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('方形按钮');

        var _hoisted_23 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('圆形按钮');

        var _hoisted_24 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '加载状态',
          -1
          /* HOISTED */
        );

        var _hoisted_25 = {
          class: 'demo-button-row2'
        };

        var _hoisted_26 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('加载中...');

        var _hoisted_27 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('Click me!');

        var _hoisted_28 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '图标按钮',
          -1
          /* HOISTED */
        );

        var _hoisted_29 = {
          class: 'demo-button-row2'
        };

        var _hoisted_30 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('收藏');

        var _hoisted_31 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '按钮尺寸',
          -1
          /* HOISTED */
        );

        var _hoisted_32 = {
          class: 'demo-button-row2'
        };

        var _hoisted_33 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('大号按钮');

        var _hoisted_34 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('普通按钮');

        var _hoisted_35 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('小型按钮');

        var _hoisted_36 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '块级元素',
          -1
          /* HOISTED */
        );

        var _hoisted_37 = {
          class: 'demo-button-row2'
        };

        var _hoisted_38 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('块级元素');

        var _hoisted_39 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'view',
          {
            class: 'h2'
          },
          '自定义颜色',
          -1
          /* HOISTED */
        );

        var _hoisted_40 = {
          class: 'demo-button-row2'
        };

        var _hoisted_41 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('单色按钮');

        var _hoisted_42 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )('单色按钮');

        var _hoisted_43 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ 'i']
        )(' 渐变按钮 ');

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
                _hoisted_2,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_3,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'primary',
                        onClick: _ctx.handleClick
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_4];
                        }),
                        _: 1
                        /* STABLE */
                      },
                      8,
                      /* PROPS */
                      ['onClick']
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'info'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_5];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'default'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_6];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_7,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'danger'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_8];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'warning'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_9];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'success'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_10];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_11,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_12,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        plain: '',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_13];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        plain: '',
                        type: 'info'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_14];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_15,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_16,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        disabled: '',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_17];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        plain: '',
                        disabled: '',
                        type: 'info'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_18];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        plain: '',
                        disabled: '',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_19];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_20,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_21,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        shape: 'square',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_22];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'info'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_23];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_24,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_25,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(_component_nut_button, {
                      loading: '',
                      type: 'info'
                    }),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        loading: '',
                        type: 'warning'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_26];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        loading: _ctx.isLoading,
                        type: 'success',
                        onClick: _ctx.changeLoading
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_27];
                        }),
                        _: 1
                        /* STABLE */
                      },
                      8,
                      /* PROPS */
                      ['loading', 'onClick']
                    )
                  ]
                ),
                _hoisted_28,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_29,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(_component_nut_button, {
                      shape: 'square',
                      plain: '',
                      type: 'primary',
                      icon: 'star-fill'
                    }),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        shape: 'square',
                        type: 'primary',
                        icon: 'star'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_30];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_31,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_32,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        size: 'large',
                        type: 'primary',
                        style: {
                          'margin-bottom': '10px'
                        }
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_33];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_34];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        size: 'small',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_35];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_36,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_37,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        block: '',
                        type: 'primary'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_38];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                ),
                _hoisted_39,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  'view',
                  _hoisted_40,
                  [
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        color: '#7232dd'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_41];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        color: '#7232dd',
                        plain: ''
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_42];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    ),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
                    )(
                      _component_nut_button,
                      {
                        color: 'linear-gradient(to right, #ff6034, #ee0a24)'
                      },
                      {
                        default: Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'y']
                        )(function() {
                          return [_hoisted_43];
                        }),
                        _: 1
                        /* STABLE */
                      }
                    )
                  ]
                )
              ]
            )
          );
        }

        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss':
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './src/pages/button/demo.vue':
      /*!***********************************!*\
  !*** ./src/pages/button/demo.vue ***!
  \***********************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./demo.vue */ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/button/demo.vue'
        );

        var config = {};

        var inst = Page(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createPageConfig']
          )(
            _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ],
            'pages/button/demo',
            { root: { cn: [] } },
            config || {}
          )
        );

        /***/
      },

    /***/ './src/pages/button/demo.vue?vue&type=script&lang=ts':
      /*!***********************************************************!*\
  !*** ./src/pages/button/demo.vue?vue&type=script&lang=ts ***!
  \***********************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=script&lang=ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss':
      /*!********************************************************************************!*\
  !*** ./src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_a5bd6068_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=style&index=0&id=a5bd6068&lang=scss'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_a5bd6068_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_a5bd6068_lang_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/button/demo.vue?vue&type=template&id=a5bd6068':
      /*!*****************************************************************!*\
  !*** ./src/pages/button/demo.vue?vue&type=template&id=a5bd6068 ***!
  \*****************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_a5bd6068__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=template&id=a5bd6068 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/button/demo.vue?vue&type=template&id=a5bd6068'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_a5bd6068__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      }
  },
  [['./src/pages/button/demo.vue', 'runtime', 'taro', 'vendors', 'common']]
]);
//# sourceMappingURL=demo.js.map
