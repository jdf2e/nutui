(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['pages/infiniteloading/demo'],
  {
    /***/ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/infiniteloading/demo.vue':
      /*!******************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/infiniteloading/demo.vue ***!
  \******************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _demo_vue_vue_type_template_id_355c0724__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./demo.vue?vue&type=template&id=355c0724 */ './src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724'
        );
        /* harmony import */ var _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./demo.vue?vue&type=script&lang=ts */ './src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _demo_vue_vue_type_style_index_0_id_355c0724_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./demo.vue?vue&type=style&index=0&id=355c0724&lang=css */ './src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css'
        );

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _demo_vue_vue_type_template_id_355c0724__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/infiniteloading/demo.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts':
      /*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _index_taro_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./index.taro.vue */ './src/pages/infiniteloading/index.taro.vue'
        );
        /* harmony import */ var _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./../cell/index.taro.vue */ './src/pages/cell/index.taro.vue'
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_3__[
              /* createComponent */ 'a'
            ]
          )('infiniteloading'),
          createDemo = _createComponent.createDemo;

        // import Toast from './../toast/index.taro.vue';

        /* harmony default export */ __webpack_exports__['a'] = createDemo({
          props: {},
          components: {
            'nut-infiniteloading':
              _index_taro_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ 'a'],
            'nut-cell':
              _cell_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__[
                /* default */ 'a'
              ]
          },
          setup: function setup() {
            var hasMore = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ 'j']
            )(true);
            var customHasMore = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ 'j']
            )(true);
            var refreshHasMore = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* ref */ 'j']
            )(true);
            var data = Object(
              vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ 'i']
            )({
              defultList: [''],
              customList: [''],
              refreshList: ['']
            });

            var loadMore = function loadMore(done) {
              setTimeout(function() {
                var curLen = data.defultList.length;

                for (var i = curLen; i < curLen + 10; i++) {
                  data.defultList.push(''.concat(i));
                }

                if (data.defultList.length > 30) hasMore.value = false;
                done();
              }, 500);
            };

            var customLoadMore = function customLoadMore(done) {
              console.log('记载更多');
              setTimeout(function() {
                var curLen = data.customList.length;

                for (var i = curLen; i < curLen + 10; i++) {
                  data.customList.push(''.concat(i));
                }

                if (data.customList.length > 30) customHasMore.value = false;
                done();
              }, 500);
            };

            var refreshLoadMore = function refreshLoadMore(done) {
              setTimeout(function() {
                var curLen = data.refreshList.length;

                for (var i = curLen; i < curLen + 10; i++) {
                  data.refreshList.push(''.concat(i));
                }

                if (data.refreshList.length > 30) refreshHasMore.value = false;
                done();
              }, 500);
            };

            var refresh = function refresh(done) {
              setTimeout(function() {
                // Toast.success('刷新成功');
                done();
              }, 1000);
            };

            var init = function init() {
              for (var i = 0; i < 10; i++) {
                data.defultList.push(''.concat(i));
                data.customList.push(''.concat(i));
                data.refreshList.push(''.concat(i));
              }
            };

            Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* onMounted */ 's'])(
              function() {
                init();
              }
            );
            return Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              {
                loadMore: loadMore,
                hasMore: hasMore,
                customHasMore: customHasMore,
                customLoadMore: customLoadMore,
                refreshHasMore: refreshHasMore,
                refreshLoadMore: refreshLoadMore,
                refresh: refresh
              },
              Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ 'q'])(data)
            );
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts':
      /*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! vue */ './node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js'
        );
        /* harmony import */ var _packages_utils_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./../../../../../../packages/utils/create */ '../../../packages/utils/create/index.ts'
        );
        /* harmony import */ var _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./../icon/index.taro.vue */ './src/pages/icon/index.taro.vue'
        );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @tarojs/taro */ './node_modules/@tarojs/taro/index.js'
        );
        /* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__
        );

        var _createComponent = Object(
            _packages_utils_create__WEBPACK_IMPORTED_MODULE_4__[
              /* createComponent */ 'a'
            ]
          )('infiniteloading'),
          componentName = _createComponent.componentName,
          create = _createComponent.create;

        /* harmony default export */ __webpack_exports__['a'] = create({
          props: {
            hasMore: {
              type: Boolean,
              default: true
            },
            threshold: {
              type: Number,
              default: 200
            },
            pullIcon: {
              type: String,
              default:
                'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png'
            },
            pullTxt: {
              type: String,
              default: '松开刷新'
            },
            loadIcon: {
              type: String,
              default:
                'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png'
            },
            loadTxt: {
              type: String,
              default: '加载中···'
            },
            loadMoreTxt: {
              type: String,
              default: '哎呀，这里是底部了啦'
            },
            useWindow: {
              type: Boolean,
              default: true
            },
            containerId: {
              type: String,
              default: ''
            },
            useCapture: {
              type: Boolean,
              default: false
            },
            isOpenRefresh: {
              type: Boolean,
              default: false
            }
          },
          emits: ['scroll-change', 'load-more', 'refresh'],
          components: {
            'nut-icon':
              _icon_index_taro_vue__WEBPACK_IMPORTED_MODULE_5__[
                /* default */ 'a'
              ]
          },
          setup: function setup(props, _ref) {
            var emit = _ref.emit,
              slots = _ref.slots;
            var state = Object(
              vue__WEBPACK_IMPORTED_MODULE_2__[/* reactive */ 'i']
            )({
              scrollHeight: 0,
              scrollTop: 0,
              isInfiniting: false,
              direction: 'down',
              isTouching: false,
              refreshMaxH: 0,
              y: 0,
              x: 0,
              distance: 0
            });
            var classes = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* computed */ 'd']
            )(function() {
              var prefixCls = componentName;
              return Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[
                  /* default */ 'a'
                ]
              )({}, prefixCls, true);
            });
            var getStyle = Object(
              vue__WEBPACK_IMPORTED_MODULE_3__[/* computed */ 'd']
            )(function() {
              var style = {};
              return {
                height:
                  state.distance < 0 ? '0px' : ''.concat(state.distance, 'px'),
                transition: state.isTouching
                  ? 'height 0s cubic-bezier(0.25,0.1,0.25,1)'
                  : 'height 0.2s cubic-bezier(0.25,0.1,0.25,1)'
              };
            });

            var getParentElement = function getParentElement(el) {
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a
                .createSelectorQuery()
                .select(
                  !!props.containerId
                    ? '#'.concat(props.containerId, ' #').concat(el)
                    : '#'.concat(el)
                );
            };
            /** 获取需要滚动的距离 */

            var getScrollHeight = function getScrollHeight() {
              var parentElement = getParentElement('scroller'); // state.scrollEl = props.useWindow ? window : parentElement;

              parentElement
                .boundingClientRect(function(rect) {
                  state.scrollHeight = rect.height;
                  console.log(rect.height);
                })
                .exec();
            };
            /** 滚动到底部 */

            var lower = function lower() {
              console.log('加载到底部', props.containerId);

              if (
                state.direction == 'up' ||
                !props.hasMore ||
                state.isInfiniting
              ) {
                return false;
              } else {
                console.log('加载到底部1111');
                state.isInfiniting = true;
                emit('load-more', infiniteDone);
              }
            };

            var scroll = function scroll(e) {
              // 滚动方向
              if (e.detail.scrollTop <= 0) {
                // 滚动到最顶部
                e.detail.scrollTop = 0;
              } else if (e.detail.scrollTop >= state.scrollHeight) {
                // 滚动到最底部
                e.detail.scrollTop = state.scrollHeight;
              }

              if (
                e.detail.scrollTop > state.scrollTop ||
                e.detail.scrollTop >= state.scrollHeight
              ) {
                state.direction = 'down';
              } else {
                state.direction = 'up';
              }

              state.scrollTop = e.detail.scrollTop;
              console.log(state.scrollTop);
              emit('scroll-change', e.detail.scrollTop);
            };

            var infiniteDone = function infiniteDone() {
              state.isInfiniting = false;
            };

            var touchStart = function touchStart(event) {
              if (
                state.scrollTop == 0 &&
                !state.isTouching &&
                props.isOpenRefresh
              ) {
                state.y = event.touches[0].pageY;
                state.isTouching = true;
                getParentElement('refreshTop')
                  .boundingClientRect(function(rect) {
                    console.log(rect);
                    state.refreshMaxH = Math.floor(rect.height * 1 + 10);
                  })
                  .exec();
              }
            };

            var touchMove = function touchMove(event) {
              state.distance = event.touches[0].pageY - state.y;

              if (state.distance > 0 && state.isTouching) {
                event.preventDefault();
                if (state.distance >= state.refreshMaxH)
                  state.distance = state.refreshMaxH;
              } else {
                state.distance = 0;
                state.isTouching = false;
              }
            };

            var touchEnd = function touchEnd() {
              if (state.distance < state.refreshMaxH) {
                state.distance = 0;
              } else {
                emit('refresh', refreshDone);
              }
            };

            var refreshDone = function refreshDone() {
              state.distance = 0;
              state.isTouching = false;
            };

            Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* onMounted */ 's'])(
              function() {
                setTimeout(function() {
                  getScrollHeight();
                }, 200);
              }
            );
            return Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(
                {
                  classes: classes
                },
                Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* toRefs */ 'q'])(
                  state
                )
              ),
              {},
              {
                lower: lower,
                scroll: scroll,
                touchStart: touchStart,
                touchMove: touchMove,
                touchEnd: touchEnd,
                getStyle: getStyle
              }
            );
          }
        });

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724':
      /*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724 ***!
  \*************************************************************************************************************************************************************************************************************/
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
          class: 'demo'
        };

        var _hoisted_2 = /*#__PURE__*/ Object(
          vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j']
        )(
          'h2',
          null,
          '下拉刷新',
          -1
          /* HOISTED */
        );

        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_view_block = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('view-block');

          var _component_nut_infiniteloading = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-infiniteloading');

          var _component_nut_cell = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-cell');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'view',
              _hoisted_1,
              [
                Object(
                  vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ 'f']
                )(
                  ' <h2>基础用法</h2>\n    <nut-cell>\n      <view-block class="infiniteUl" id="scrollDemo">\n        <nut-infiniteloading\n          container-id="scrollDemo"\n          :has-more="hasMore"\n          @load-more="loadMore"\n        >\n          <view-block\n            class="infiniteLi"\n            v-for="(item, index) in defultList"\n            :key="index"\n            >{{ item }}</view-block\n          >\n        </nut-infiniteloading>\n      </view-block>\n    </nut-cell> '
                ),
                _hoisted_2,
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_nut_cell,
                  null,
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_view_block,
                          {
                            class: 'infiniteUl',
                            id: 'refreshScroll'
                          },
                          {
                            default: Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* withCtx */ 'G'
                              ]
                            )(function() {
                              return [
                                Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createVNode */ 'j'
                                  ]
                                )(
                                  _component_nut_infiniteloading,
                                  {
                                    'pull-icon': 'JD',
                                    'container-id': 'refreshScroll',
                                    'use-window': false,
                                    'is-open-refresh': true,
                                    'has-more': _ctx.refreshHasMore,
                                    onLoadMore: _ctx.refreshLoadMore,
                                    onRefresh: _ctx.refresh
                                  },
                                  {
                                    default: Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* withCtx */ 'G'
                                      ]
                                    )(function() {
                                      return [
                                        (Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* openBlock */ 'u'
                                          ]
                                        )(true),
                                        Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* createBlock */ 'e'
                                          ]
                                        )(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* Fragment */ 'b'
                                          ],
                                          null,
                                          Object(
                                            vue__WEBPACK_IMPORTED_MODULE_0__[
                                              /* renderList */ 'x'
                                            ]
                                          )(_ctx.refreshList, function(
                                            item,
                                            index
                                          ) {
                                            return (
                                              Object(
                                                vue__WEBPACK_IMPORTED_MODULE_0__[
                                                  /* openBlock */ 'u'
                                                ]
                                              )(),
                                              Object(
                                                vue__WEBPACK_IMPORTED_MODULE_0__[
                                                  /* createBlock */ 'e'
                                                ]
                                              )(
                                                _component_view_block,
                                                {
                                                  class: 'infiniteLi',
                                                  key: index
                                                },
                                                {
                                                  default: Object(
                                                    vue__WEBPACK_IMPORTED_MODULE_0__[
                                                      /* withCtx */ 'G'
                                                    ]
                                                  )(function() {
                                                    return [
                                                      Object(
                                                        vue__WEBPACK_IMPORTED_MODULE_0__[
                                                          /* createTextVNode */ 'i'
                                                        ]
                                                      )(
                                                        Object(
                                                          vue__WEBPACK_IMPORTED_MODULE_1__[
                                                            /* toDisplayString */ 'J'
                                                          ]
                                                        )(item),
                                                        1
                                                        /* TEXT */
                                                      )
                                                    ];
                                                  }),
                                                  _: 2
                                                  /* DYNAMIC */
                                                },
                                                1024
                                                /* DYNAMIC_SLOTS */
                                              )
                                            );
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        ))
                                      ];
                                    }),
                                    _: 1
                                    /* STABLE */
                                  },
                                  8,
                                  /* PROPS */
                                  ['has-more', 'onLoadMore', 'onRefresh']
                                )
                              ];
                            }),
                            _: 1
                            /* STABLE */
                          }
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                ),
                Object(
                  vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ 'f']
                )(
                  ' <h2>自定义加载文案</h2>\n    <nut-cell>\n      <view-block class="infiniteUl" id="customScroll">\n        <nut-infiniteloading\n          load-txt="loading"\n          load-more-txt="没有啦～"\n          container-id="customScroll"\n          :use-window="false"\n          :has-more="customHasMore"\n          @load-more="customLoadMore"\n        >\n          <view-block\n            class="infiniteLi"\n            v-for="(item, index) in customList"\n            :key="index"\n            >{{ item }}</view-block\n          >\n        </nut-infiniteloading>\n      </view-block>\n    </nut-cell> '
                )
              ]
            )
          );
        }

        /***/
      },

    /***/ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1':
      /*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1 ***!
  \*******************************************************************************************************************************************************************************************************************/
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

        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_nut_icon = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('nut-icon');

          var _component_view_block = Object(
            vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ 'z']
          )('view-block');

          return (
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ 'u'])(),
            Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createBlock */ 'e'])(
              'scroll-view',
              {
                class: _ctx.classes,
                scrollY: 'true',
                style: {
                  height: '100%'
                },
                id: 'scroller',
                onScrolltolower:
                  _cache[1] ||
                  (_cache[1] = function() {
                    return _ctx.lower && _ctx.lower.apply(_ctx, arguments);
                  }),
                onScroll:
                  _cache[2] ||
                  (_cache[2] = function() {
                    return _ctx.scroll && _ctx.scroll.apply(_ctx, arguments);
                  }),
                onTouchstart:
                  _cache[3] ||
                  (_cache[3] = function() {
                    return (
                      _ctx.touchStart && _ctx.touchStart.apply(_ctx, arguments)
                    );
                  }),
                onTouchmove:
                  _cache[4] ||
                  (_cache[4] = function() {
                    return (
                      _ctx.touchMove && _ctx.touchMove.apply(_ctx, arguments)
                    );
                  }),
                onTouchend:
                  _cache[5] ||
                  (_cache[5] = function() {
                    return (
                      _ctx.touchEnd && _ctx.touchEnd.apply(_ctx, arguments)
                    );
                  })
              },
              [
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_view_block,
                  {
                    class: 'nut-infinite-top',
                    style: _ctx.getStyle
                  },
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[
                            /* createVNode */ 'j'
                          ]
                        )(
                          _component_view_block,
                          {
                            class: 'top-box',
                            id: 'refreshTop'
                          },
                          {
                            default: Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* withCtx */ 'G'
                              ]
                            )(function() {
                              return [
                                Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createVNode */ 'j'
                                  ]
                                )(
                                  _component_nut_icon,
                                  {
                                    class: 'top-img',
                                    name: _ctx.pullIcon
                                  },
                                  null,
                                  8,
                                  /* PROPS */
                                  ['name']
                                ),
                                Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* createVNode */ 'j'
                                  ]
                                )(
                                  _component_view_block,
                                  {
                                    class: 'top-text'
                                  },
                                  {
                                    default: Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* withCtx */ 'G'
                                      ]
                                    )(function() {
                                      return [
                                        Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* createTextVNode */ 'i'
                                          ]
                                        )(
                                          Object(
                                            vue__WEBPACK_IMPORTED_MODULE_1__[
                                              /* toDisplayString */ 'J'
                                            ]
                                          )(_ctx.pullTxt),
                                          1
                                          /* TEXT */
                                        )
                                      ];
                                    }),
                                    _: 1
                                    /* STABLE */
                                  }
                                )
                              ];
                            }),
                            _: 1
                            /* STABLE */
                          }
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  },
                  8,
                  /* PROPS */
                  ['style']
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_view_block,
                  {
                    class: 'nut-infinite-container'
                  },
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                    )(function() {
                      return [
                        Object(
                          vue__WEBPACK_IMPORTED_MODULE_0__[/* renderSlot */ 'y']
                        )(_ctx.$slots, 'default')
                      ];
                    }),
                    _: 3
                    /* FORWARDED */
                  }
                ),
                Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ 'j'])(
                  _component_view_block,
                  {
                    class: 'nut-infinite-bottom'
                  },
                  {
                    default: Object(
                      vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ 'G']
                    )(function() {
                      return [
                        _ctx.isInfiniting
                          ? (Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* openBlock */ 'u'
                              ]
                            )(),
                            Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* createBlock */ 'e'
                              ]
                            )(
                              _component_view_block,
                              {
                                key: 0,
                                class: 'bottom-box'
                              },
                              {
                                default: Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* withCtx */ 'G'
                                  ]
                                )(function() {
                                  return [
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_nut_icon,
                                      {
                                        class: 'bottom-img',
                                        name: _ctx.loadIcon
                                      },
                                      null,
                                      8,
                                      /* PROPS */
                                      ['name']
                                    ),
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createVNode */ 'j'
                                      ]
                                    )(
                                      _component_view_block,
                                      {
                                        class: 'bottom-text'
                                      },
                                      {
                                        default: Object(
                                          vue__WEBPACK_IMPORTED_MODULE_0__[
                                            /* withCtx */ 'G'
                                          ]
                                        )(function() {
                                          return [
                                            Object(
                                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                                /* createTextVNode */ 'i'
                                              ]
                                            )(
                                              Object(
                                                vue__WEBPACK_IMPORTED_MODULE_1__[
                                                  /* toDisplayString */ 'J'
                                                ]
                                              )(_ctx.loadTxt),
                                              1
                                              /* TEXT */
                                            )
                                          ];
                                        }),
                                        _: 1
                                        /* STABLE */
                                      }
                                    )
                                  ];
                                }),
                                _: 1
                                /* STABLE */
                              }
                            ))
                          : !_ctx.hasMore
                          ? (Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* openBlock */ 'u'
                              ]
                            )(),
                            Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* createBlock */ 'e'
                              ]
                            )(
                              _component_view_block,
                              {
                                key: 1,
                                class: 'tips'
                              },
                              {
                                default: Object(
                                  vue__WEBPACK_IMPORTED_MODULE_0__[
                                    /* withCtx */ 'G'
                                  ]
                                )(function() {
                                  return [
                                    Object(
                                      vue__WEBPACK_IMPORTED_MODULE_0__[
                                        /* createTextVNode */ 'i'
                                      ]
                                    )(
                                      Object(
                                        vue__WEBPACK_IMPORTED_MODULE_1__[
                                          /* toDisplayString */ 'J'
                                        ]
                                      )(_ctx.loadMoreTxt),
                                      1
                                      /* TEXT */
                                    )
                                  ];
                                }),
                                _: 1
                                /* STABLE */
                              }
                            ))
                          : Object(
                              vue__WEBPACK_IMPORTED_MODULE_0__[
                                /* createCommentVNode */ 'f'
                              ]
                            )('v-if', true)
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }
                )
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            )
          );
        }

        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss':
      /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css':
      /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/vue-loader/dist??ref--10-0!./src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      },

    /***/ './src/pages/infiniteloading/demo.vue':
      /*!********************************************!*\
  !*** ./src/pages/infiniteloading/demo.vue ***!
  \********************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./demo.vue */ './node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/infiniteloading/demo.vue'
        );

        var config = {};

        var inst = Page(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createPageConfig']
          )(
            _node_modules_tarojs_taro_loader_lib_raw_js_demo_vue__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ],
            'pages/infiniteloading/demo',
            { root: { cn: [] } },
            config || {}
          )
        );

        /***/
      },

    /***/ './src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts':
      /*!********************************************************************!*\
  !*** ./src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts ***!
  \********************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=script&lang=ts'
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

    /***/ './src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css':
      /*!****************************************************************************************!*\
  !*** ./src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css ***!
  \****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_355c0724_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=style&index=0&id=355c0724&lang=css */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=style&index=0&id=355c0724&lang=css'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_355c0724_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_style_index_0_id_355c0724_lang_css__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724':
      /*!**************************************************************************!*\
  !*** ./src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724 ***!
  \**************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_355c0724__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./demo.vue?vue&type=template&id=355c0724 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/demo.vue?vue&type=template&id=355c0724'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_demo_vue_vue_type_template_id_355c0724__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      },

    /***/ './src/pages/infiniteloading/index.taro.vue':
      /*!**************************************************!*\
  !*** ./src/pages/infiniteloading/index.taro.vue ***!
  \**************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _index_taro_vue_vue_type_template_id_6ed18bd1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=template&id=6ed18bd1 */ './src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1'
        );
        /* harmony import */ var _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=script&lang=ts */ './src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts'
        );
        /* harmony import */ var _index_taro_vue_vue_type_style_index_0_id_6ed18bd1_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss */ './src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss'
        );

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].render =
          _index_taro_vue_vue_type_template_id_6ed18bd1__WEBPACK_IMPORTED_MODULE_0__[
            /* render */ 'a'
          ];
        /* hot reload */
        if (false) {
        }

        _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
          /* default */ 'a'
        ].__file = 'src/pages/infiniteloading/index.taro.vue';

        /* harmony default export */ __webpack_exports__['a'] =
          _index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[
            /* default */ 'a'
          ];

        /***/
      },

    /***/ './src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts':
      /*!**************************************************************************!*\
  !*** ./src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts ***!
  \**************************************************************************/
      /*! exports provided: default */
      /*! exports used: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=script&lang=ts */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=script&lang=ts'
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

    /***/ './src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss':
      /*!***********************************************************************************************!*\
  !*** ./src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_6ed18bd1_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss */ './node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=style&index=0&id=6ed18bd1&lang=scss'
        );
        /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_6ed18bd1_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_style_index_0_id_6ed18bd1_lang_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* unused harmony reexport * */

        /***/
      },

    /***/ './src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1':
      /*!********************************************************************************!*\
  !*** ./src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1 ***!
  \********************************************************************************/
      /*! exports provided: render */
      /*! exports used: render */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_6ed18bd1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.taro.vue?vue&type=template&id=6ed18bd1 */ './node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/infiniteloading/index.taro.vue?vue&type=template&id=6ed18bd1'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_taro_vue_vue_type_template_id_6ed18bd1__WEBPACK_IMPORTED_MODULE_0__[
              'a'
            ];
          }
        );

        /***/
      }
  },
  [
    [
      './src/pages/infiniteloading/demo.vue',
      'runtime',
      'taro',
      'vendors',
      'common'
    ]
  ]
]);
//# sourceMappingURL=demo.js.map
