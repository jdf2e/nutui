(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['pages/inputnumber/demo'],
  {
    /***/ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/inputnumber/demo.vue':
      /*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/inputnumber/demo.vue ***!
  \**************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _demo_vue_vue_type_template_id_363befe3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./demo.vue?vue&type=template&id=363befe3 */ './src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3'
        );
        /* harmony import */ var _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./demo.vue?vue&type=script&lang=ts */ './src/pages/inputnumber/demo.vue?vue&type=script&lang=ts'
        );

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _demo_vue_vue_type_template_id_363befe3__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/inputnumber/demo.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/demo.vue?vue&type=script&lang=ts':
      /*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/inputnumber/demo.vue?vue&type=script&lang=ts ***!
  \******************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _index_taro_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./index.taro.vue */ './src/pages/inputnumber/index.taro.vue'
        );
        /* harmony import */ var _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../cell/index.taro.vue */ './src/pages/cell/index.taro.vue'
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__[
              /* createComponent */ 'a'
            ]
          )('inputnumber'),
          createDemo = _createComponent.createDemo;

        /* harmony default export */ __webpack_exports__['a'] = createDemo({
          props: {},
          components: {
            'nut-inputnumber':
              _index_taro_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ 'a'],
            'nut-cell':
              _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
          },
          setup: function setup() {
            var _getCurrentInstance = Object(
                vue__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentInstance */ 'k']
              )(),
              proxy = _getCurrentInstance.proxy;

            var state = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              val1: 1,
              val2: 0,
              val3: 10,
              val4: 0,
              val5: 1,
              val6: 5.5,
              val7: 1,
              val8: 1,
              step: 1.1
            });

            var onChange = function onChange(value) {
              console.log('异步演示 2 秒后更改'); // proxy.$toast.loading('异步演示 2 秒后更改');

              setTimeout(function() {
                state.val8 = value; // proxy.$toast.hide();
              }, 2000);
            };

            var overlimit = function overlimit() {
              console.log('超出限制事件触发'); // proxy.$toast.warn('超出限制事件触发');
            };

            return {
              state: state,
              onChange: onChange,
              overlimit: overlimit
            };
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts':
      /*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/pxCheck */ '../../../packages/utils/pxCheck.ts'
        );
        /* harmony import */ var _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../icon/index.taro.vue */ './src/pages/icon/index.taro.vue'
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_2__[
              /* createComponent */ 'a'
            ]
          )('inputnumber'),
          componentName = _createComponent.componentName,
          create = _createComponent.create; // console.log(wx.canIUse('console.log'))

        /* harmony default export */ __webpack_exports__['a'] = create({
          props: {
            modelValue: {
              type: [Number, String],
              default: 0
            },
            inputWidth: {
              type: [Number, String],
              default: ''
            },
            buttonSize: {
              type: [Number, String],
              default: ''
            },
            min: {
              type: [Number, String],
              default: 1
            },
            max: {
              type: [Number, String],
              default: 9999
            },
            step: {
              type: [Number, String],
              default: 1
            },
            decimalPlaces: {
              type: [Number, String],
              default: 0
            },
            disabled: {
              type: Boolean,
              default: false
            },
            readonly: {
              type: Boolean,
              default: false
            }
          },
          components: {
            'nut-icon':
              _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
          },
          emits: [
            'update:modelValue',
            'change',
            'blur',
            'focus',
            'reduce',
            'add',
            'overlimit'
          ],
          setup: function setup(props, _ref) {
            var emit = _ref.emit;
            var classes = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* computed */ 'd']
            )(function() {
              var _ref2;

              var prefixCls = componentName;
              return (
                (_ref2 = {}),
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                    /* default */ 'a'
                  ]
                )(_ref2, prefixCls, true),
                Object(
                  _Users_suzigang_Downloads_project_nutui3_0_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                    /* default */ 'a'
                  ]
                )(_ref2, ''.concat(prefixCls, '--disabled'), props.disabled),
                _ref2
              );
            });

            var fixedDecimalPlaces = function fixedDecimalPlaces(v) {
              return Number(v).toFixed(Number(props.decimalPlaces));
            };

            var change = function change(event) {
              var input = event.target;
              emit('update:modelValue', input.value, event);
            };

            var emitChange = function emitChange(value, event) {
              var output_value = fixedDecimalPlaces(value);
              emit('change', output_value, event);
              emit('update:modelValue', output_value, event);
            };

            var addAllow = function addAllow() {
              var value =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : Number(props.modelValue);
              return value < Number(props.max) && !props.disabled;
            };

            var reduceAllow = function reduceAllow() {
              var value =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : Number(props.modelValue);
              return value > Number(props.min) && !props.disabled;
            };

            var reduce = function reduce(event) {
              emit('reduce', event);

              if (reduceAllow()) {
                var output_value =
                  Number(props.modelValue) - Number(props.step);
                emitChange(output_value, event);
              } else {
                emit('overlimit', event);
              }
            };

            var add = function add(event) {
              emit('add', event);

              if (addAllow()) {
                var output_value =
                  Number(props.modelValue) + Number(props.step);
                emitChange(output_value, event);
              } else {
                emit('overlimit', event);
              }
            };

            var blur = function blur(event) {
              if (props.disabled) return;
              if (props.readonly) return;
              var input = event.target;
              var value = input.value;

              if (value < Number(props.min)) {
                value = Number(props.min);
              } else if (value > Number(props.max)) {
                value = Number(props.max);
              }

              emitChange(value, event);
              emit('blur', event);
            };

            var focus = function focus(event) {
              if (props.disabled) return;

              if (props.readonly) {
                console.log(12333);
                blur();
                return;
              }

              emit('focus', event);
            };

            return {
              classes: classes,
              change: change,
              blur: blur,
              focus: focus,
              add: add,
              addAllow: addAllow,
              reduce: reduce,
              reduceAllow: reduceAllow,
              pxCheck:
                _packages_utils_pxCheck__WEBPACK_IMPORTED_MODULE_3__[
                  /* pxCheck */ 'a'
                ]
            };
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3':
      /*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3 ***!
  \*********************************************************************************************************************************************************************************************************/
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
          null,
          '基本用法',
          -1
          /* HOISTED */
        );

        var _hoisted_3 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '步长设置',
          -1
          /* HOISTED */
        );

        var _hoisted_4 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '限制输入范围',
          -1
          /* HOISTED */
        );

        var _hoisted_5 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '禁用操作',
          -1
          /* HOISTED */
        );

        var _hoisted_6 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '只读禁用输入框',
          -1
          /* HOISTED */
        );

        var _hoisted_7 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '支持小数',
          -1
          /* HOISTED */
        );

        var _hoisted_8 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '支持异步修改',
          -1
          /* HOISTED */
        );

        var _hoisted_9 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '自定义按钮大小',
          -1
          /* HOISTED */
        );

        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_nut_inputnumber = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'w']
          )('nut-inputnumber');

          var _component_nut_cell = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'w']
          )('nut-cell');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'div',
              _hoisted_1,
              [
                _hoisted_2,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val1,
                            'onUpdate:modelValue':
                              _cache[1] ||
                              (_cache[1] = function($event) {
                                return (_ctx.state.val1 = $event);
                              })
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_3,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val2,
                            'onUpdate:modelValue':
                              _cache[2] ||
                              (_cache[2] = function($event) {
                                return (_ctx.state.val2 = $event);
                              }),
                            step: '5'
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_4,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val3,
                            'onUpdate:modelValue':
                              _cache[3] ||
                              (_cache[3] = function($event) {
                                return (_ctx.state.val3 = $event);
                              }),
                            onOverlimit: _ctx.overlimit,
                            min: '10',
                            max: '20'
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue', 'onOverlimit']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_5,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val4,
                            'onUpdate:modelValue':
                              _cache[4] ||
                              (_cache[4] = function($event) {
                                return (_ctx.state.val4 = $event);
                              }),
                            disabled: ''
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_6,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val5,
                            'onUpdate:modelValue':
                              _cache[5] ||
                              (_cache[5] = function($event) {
                                return (_ctx.state.val5 = $event);
                              }),
                            readonly: ''
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_7,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val6,
                            'onUpdate:modelValue':
                              _cache[6] ||
                              (_cache[6] = function($event) {
                                return (_ctx.state.val6 = $event);
                              }),
                            step: '0.1',
                            'decimal-places': '1',
                            readonly: ''
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_8,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            'model-value': _ctx.state.val8,
                            onChange: _ctx.onChange
                          },
                          null,
                          8,
                          /* PROPS */
                          ['model-value', 'onChange']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                _hoisted_9,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'D']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_nut_inputnumber,
                          {
                            modelValue: _ctx.state.val7,
                            'onUpdate:modelValue':
                              _cache[7] ||
                              (_cache[7] = function($event) {
                                return (_ctx.state.val7 = $event);
                              }),
                            'button-size': '30',
                            'input-width': '50'
                          },
                          null,
                          8,
                          /* PROPS */
                          ['modelValue']
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                )
              ]
            )
          );
        }

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386':
      /*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386 ***!
  \***************************************************************************************************************************************************************************************************************/
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
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/shared/dist/shared.esm-bundler.js'
        );

        var _hoisted_1 = {
          key: 0,
          class: 'nut-inputnumber__text--readonly'
        };
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_nut_icon = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'w']
          )('nut-icon');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'view',
              {
                class: _ctx.classes,
                style: {
                  height: _ctx.pxCheck(_ctx.buttonSize)
                }
              },
              [
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_icon,
                  {
                    name: 'minus',
                    class: [
                      'nut-inputnumber__icon',
                      {
                        'nut-inputnumber__icon--disabled': !_ctx.reduceAllow()
                      }
                    ],
                    size: _ctx.buttonSize,
                    onClick: _ctx.reduce
                  },
                  null,
                  8,
                  /* PROPS */
                  ['class', 'size', 'onClick']
                ),
                _ctx.readonly
                  ? (Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u']
                    )(),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e']
                    )(
                      'view',
                      _hoisted_1,
                      Object(
                        vue__WEBPACK_IMPORTED_MODULE_1__[
                          /* toDisplayString */ 'J'
                        ]
                      )(_ctx.modelValue),
                      1
                      /* TEXT */
                    ))
                  : (Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u']
                    )(),
                    Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e']
                    )(
                      'input',
                      {
                        key: 1,
                        type: 'number',
                        min: _ctx.min,
                        max: _ctx.max,
                        style: {
                          width: _ctx.pxCheck(_ctx.inputWidth)
                        },
                        disabled: _ctx.disabled,
                        readonly: _ctx.readonly,
                        value: _ctx.modelValue,
                        onInput:
                          _cache[1] ||
                          (_cache[1] = function() {
                            return (
                              _ctx.change && _ctx.change.apply(_ctx, arguments)
                            );
                          }),
                        onBlur:
                          _cache[2] ||
                          (_cache[2] = function() {
                            return (
                              _ctx.blur && _ctx.blur.apply(_ctx, arguments)
                            );
                          }),
                        onFocus:
                          _cache[3] ||
                          (_cache[3] = function() {
                            return (
                              _ctx.focus && _ctx.focus.apply(_ctx, arguments)
                            );
                          })
                      },
                      null,
                      44,
                      /* STYLE, PROPS, HYDRATE_EVENTS */
                      ['min', 'max', 'disabled', 'readonly', 'value']
                    )),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_icon,
                  {
                    name: 'plus',
                    class: [
                      'nut-inputnumber__icon',
                      {
                        'nut-inputnumber__icon--disabled': !_ctx.addAllow()
                      }
                    ],
                    size: _ctx.buttonSize,
                    onClick: _ctx.add
                  },
                  null,
                  8,
                  /* PROPS */
                  ['class', 'size', 'onClick']
                )
              ],
              6
              /* CLASS, STYLE */
            )
          );
        }

        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss':
      /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './src/pages/inputnumber/demo.vue':
      /*!****************************************!*\
  !*** ./src/pages/inputnumber/demo.vue ***!
  \****************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./demo.vue */ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/inputnumber/demo.vue'
        );

        var config = {};

        var inst = Page(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createPageConfig']
          )(
            _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ],
            'pages/inputnumber/demo',
            { root: { cn: [] } },
            config || {}
          )
        );

        /***/
      },

    /***/ './src/pages/inputnumber/demo.vue?vue&type=script&lang=ts':
      /*!****************************************************************!*\
  !*** ./src/pages/inputnumber/demo.vue?vue&type=script&lang=ts ***!
  \****************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/demo.vue?vue&type=script&lang=ts'
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

    /***/ './src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3':
      /*!**********************************************************************!*\
  !*** ./src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3 ***!
  \**********************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_363befe3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=template&id=363befe3 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/demo.vue?vue&type=template&id=363befe3'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_363befe3__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/inputnumber/index.taro.vue':
      /*!**********************************************!*\
  !*** ./src/pages/inputnumber/index.taro.vue ***!
  \**********************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _index_taro_vue_vue_type_template_id_64725386__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=template&id=64725386 */ './src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386'
        );
        /* harmony import */ var _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=script&lang=ts */ './src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _index_taro_vue_vue_type_style_index_0_id_64725386_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss */ './src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss'
        );

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _index_taro_vue_vue_type_template_id_64725386__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/inputnumber/index.taro.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts':
      /*!**********************************************************************!*\
  !*** ./src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts ***!
  \**********************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=script&lang=ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss':
      /*!*******************************************************************************************!*\
  !*** ./src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_64725386_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=style&index=0&id=64725386&lang=scss'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_64725386_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_64725386_lang_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386':
      /*!****************************************************************************!*\
  !*** ./src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386 ***!
  \****************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_64725386__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=template&id=64725386 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/inputnumber/index.taro.vue?vue&type=template&id=64725386'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_64725386__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      }
  },
  [['./src/pages/inputnumber/demo.vue', 'runtime', 'taro', 'vendors', 'common']]
]);
//# sourceMappingURL=demo.js.map
