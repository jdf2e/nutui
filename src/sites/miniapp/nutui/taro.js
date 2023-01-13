(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['taro'],
  {
    /***/ './node_modules/@tarojs/mini-runner/dist/template/comp.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* eslint-disable no-undef */

        // @ts-ignore
        Component(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__['createRecursiveComponentConfig'])());

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /*! all exports used */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /* eslint-disable no-undef */
        var runtime_1 = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        // @ts-ignore
        Component((0, runtime_1.createRecursiveComponentConfig)('custom-wrapper'));

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-framework-vue3/dist/runtime.js ***!
  \********************************************************************/
      /*! exports provided: createNativeComponentConfig, createVue3App, isClassComponent, setGlobalDataPlugin, setReconciler, useAddToFavorites, useDidHide, useDidShow, useLoad, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useSaveExitState, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, useUnload */
      /*! exports used: createNativeComponentConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () {
          return createNativeComponentConfig;
        });
        /* unused harmony export createVue3App */
        /* unused harmony export isClassComponent */
        /* unused harmony export setGlobalDataPlugin */
        /* unused harmony export setReconciler */
        /* unused harmony export useAddToFavorites */
        /* unused harmony export useDidHide */
        /* unused harmony export useDidShow */
        /* unused harmony export useLoad */
        /* unused harmony export useOptionMenuClick */
        /* unused harmony export usePageScroll */
        /* unused harmony export usePullDownRefresh */
        /* unused harmony export usePullIntercept */
        /* unused harmony export useReachBottom */
        /* unused harmony export useReady */
        /* unused harmony export useResize */
        /* unused harmony export useRouter */
        /* unused harmony export useSaveExitState */
        /* unused harmony export useShareAppMessage */
        /* unused harmony export useShareTimeline */
        /* unused harmony export useTabItemTap */
        /* unused harmony export useTitleClick */
        /* unused harmony export useUnload */
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          );
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! vue */ './node_modules/vue/index.js'
        );
        /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          vue__WEBPACK_IMPORTED_MODULE_5__
        );

        function createTaroHook(lifecycle) {
          return function (fn) {
            var id = Object(vue__WEBPACK_IMPORTED_MODULE_5__['inject'])('id');
            var fnRef = Object(vue__WEBPACK_IMPORTED_MODULE_5__['ref'])(fn);
            Object(vue__WEBPACK_IMPORTED_MODULE_5__['onMounted'])(function () {
              var inst = Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['getPageInstance'])(id);
              if (inst === undefined) {
                inst = Object.create({
                  $options: {}
                });
                Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['injectPageInstance'])(inst, id);
              }
              inst = inst.$options;
              var callback = function callback() {
                return fnRef.value.apply(fnRef, arguments);
              };
              var currentCallback = inst[lifecycle];
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isUndefined */ 'm'])(currentCallback)) {
                inst[lifecycle] = callback;
              } else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(currentCallback)) {
                inst[lifecycle] = [inst[lifecycle], callback];
              } else if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ 'h'])(currentCallback)) {
                inst[lifecycle] = [].concat(
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__[
                      /* default */ 'a'
                    ]
                  )(currentCallback),
                  [callback]
                );
              }
            });
          };
        }
        /** LifeCycle */
        var useDidShow = createTaroHook('onShow');
        var useDidHide = createTaroHook('onHide');
        /** Page */
        var useLoad = createTaroHook('onLoad');
        var usePageScroll = createTaroHook('onPageScroll');
        var usePullDownRefresh = createTaroHook('onPullDownRefresh');
        var usePullIntercept = createTaroHook('onPullIntercept');
        var useReachBottom = createTaroHook('onReachBottom');
        var useResize = createTaroHook('onResize');
        var useUnload = createTaroHook('onUnload');
        /** Mini-Program */
        var useAddToFavorites = createTaroHook('onAddToFavorites');
        var useOptionMenuClick = createTaroHook('onOptionMenuClick');
        var useSaveExitState = createTaroHook('onSaveExitState');
        var useShareAppMessage = createTaroHook('onShareAppMessage');
        var useShareTimeline = createTaroHook('onShareTimeline');
        var useTitleClick = createTaroHook('onTitleClick');
        /** Router */
        var useReady = createTaroHook('onReady');
        var useRouter = function useRouter() {
          // return dynamic ? Current.router : React.useMemo(() => Current.router, [])
          return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].router;
        };
        var useTabItemTap = createTaroHook('onTabItemTap');
        var taroHooks = /*#__PURE__*/ Object.freeze({
          __proto__: null,
          useDidShow: useDidShow,
          useDidHide: useDidHide,
          useLoad: useLoad,
          usePageScroll: usePageScroll,
          usePullDownRefresh: usePullDownRefresh,
          usePullIntercept: usePullIntercept,
          useReachBottom: useReachBottom,
          useResize: useResize,
          useUnload: useUnload,
          useAddToFavorites: useAddToFavorites,
          useOptionMenuClick: useOptionMenuClick,
          useSaveExitState: useSaveExitState,
          useShareAppMessage: useShareAppMessage,
          useShareTimeline: useShareTimeline,
          useTitleClick: useTitleClick,
          useReady: useReady,
          useRouter: useRouter,
          useTabItemTap: useTabItemTap
        });
        var setGlobalDataPlugin = {
          install: function install(app, data) {
            app.taroGlobalData = data;
          }
        };

        /**
         * set writable, enumerable to true
         */
        function setDefaultDescriptor(obj) {
          obj.writable = true;
          obj.enumerable = true;
          return obj;
        }
        /**
         * 设置入口的路由参数
         * @param options 小程序传入的参数
         */
        function setRouterParams(options) {
          _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].router = Object.assign(
            {
              params: options === null || options === void 0 ? void 0 : options.query
            },
            options
          );
        }
        function setReconciler() {
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* hooks */ 'f'].tap(
            'getLifecycle',
            function (instance, lifecycle) {
              return instance.$options[lifecycle];
            }
          );
          if (false) {
          }
        }
        function createVue3Page(h, id) {
          return function (component) {
            var _a, _b, _c, _d;
            // 处理类组件
            component = isClassComponent(component) ? component.__vccOpts : component;
            var inject = {
              props: {
                tid: String
              },
              created: function created() {
                Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['injectPageInstance'])(this, id);
              }
            };
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ 'h'])(component.mixins)) {
              var mixins = component.mixins;
              var idx = mixins.length - 1;
              if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
                // mixins 里还没注入过，直接推入数组
                component.mixins.push(inject);
              } else {
                // mixins 里已经注入过，代替前者
                component.mixins[idx] = inject;
              }
            } else {
              component.mixins = [inject];
            }
            var ProviderComponent = {
              setup: function setup() {
                Object(vue__WEBPACK_IMPORTED_MODULE_5__['provide'])('id', id);
              },
              render: function render() {
                return this.$slots.default();
              }
            };
            var RootElement = false ? undefined : 'root';
            var PageComponent = Object.assign({}, component);
            var option =
              ((_d =
                (_c = (_b = PageComponent.props) === null || _b === void 0 ? void 0 : _b.option) === null ||
                _c === void 0
                  ? void 0
                  : _c.default) === null || _d === void 0
                ? void 0
                : _d.call(_c)) || {};
            return h(
              ProviderComponent,
              {
                key: id
              },
              {
                default: function _default() {
                  return [
                    h(
                      RootElement,
                      {
                        id: id,
                        class: false ? undefined : ''
                      },
                      [
                        h(PageComponent, {
                          tid: id,
                          option: option
                        })
                      ]
                    )
                  ];
                }
              }
            );
          };
        }
        function createVue3App(app, h, config) {
          var _Object$create;
          var pages = [];
          var appInstance;
          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* ensure */ 'd'])(
            !(
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(app._component) &&
              !isClassComponent(app._component)
            ),
            '入口组件不支持使用函数式组件'
          );
          setReconciler();
          app._component.render = function () {
            return pages.slice();
          };
          if (true) {
            appInstance = app.mount('#app');
          }
          var _hooks$call$app = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[
                /* default */ 'a'
              ]
            )(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* hooks */ 'f'].call('getMiniLifecycleImpl').app, 3),
            ONLAUNCH = _hooks$call$app[0],
            ONSHOW = _hooks$call$app[1],
            ONHIDE = _hooks$call$app[2];
          var appConfig = Object.create(
            {
              mount: function mount(component, id, cb) {
                var page = createVue3Page(h, id)(component);
                pages.push(page);
                this.updateAppInstance(cb);
              },
              unmount: function unmount(id, cb) {
                pages = pages.filter(function (page) {
                  return page.key !== id;
                });
                this.updateAppInstance(cb);
              },
              updateAppInstance: function updateAppInstance(cb) {
                appInstance.$forceUpdate();
                appInstance.$nextTick(cb);
              }
            },
            ((_Object$create = {
              config: setDefaultDescriptor({
                configurable: true,
                value: config
              })
            }),
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              _Object$create,
              ONLAUNCH,
              setDefaultDescriptor({
                value: function value(options) {
                  var _this = this;
                  var _a;
                  setRouterParams(options);
                  if (false) {
                  }
                  // 把 App Class 上挂载的额外属性同步到全局 app 对象中
                  // eslint-disable-next-line dot-notation
                  if (app['taroGlobalData']) {
                    // eslint-disable-next-line dot-notation
                    var globalData = app['taroGlobalData'];
                    var keys = Object.keys(globalData);
                    var descriptors = Object.getOwnPropertyDescriptors(globalData);
                    keys.forEach(function (key) {
                      Object.defineProperty(_this, key, {
                        configurable: true,
                        enumerable: true,
                        get: function get() {
                          return globalData[key];
                        },
                        set: function set(value) {
                          globalData[key] = value;
                        }
                      });
                    });
                    Object.defineProperties(this, descriptors);
                  }
                  var onLaunch =
                    (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null ||
                    _a === void 0
                      ? void 0
                      : _a.onLaunch;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(onLaunch) &&
                    onLaunch.call(appInstance, options);
                }
              })
            ),
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              _Object$create,
              ONSHOW,
              setDefaultDescriptor({
                value: function value(options) {
                  var _a;
                  setRouterParams(options);
                  var onShow =
                    (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null ||
                    _a === void 0
                      ? void 0
                      : _a.onShow;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(onShow) &&
                    onShow.call(appInstance, options);
                }
              })
            ),
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              _Object$create,
              ONHIDE,
              setDefaultDescriptor({
                value: function value(options) {
                  var _a;
                  var onHide =
                    (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null ||
                    _a === void 0
                      ? void 0
                      : _a.onHide;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(onHide) &&
                    onHide.call(appInstance, options);
                }
              })
            ),
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              _Object$create,
              'onError',
              setDefaultDescriptor({
                value: function value(error) {
                  var _a;
                  var onError =
                    (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null ||
                    _a === void 0
                      ? void 0
                      : _a.onError;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(onError) &&
                    onError.call(appInstance, error);
                }
              })
            ),
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                /* default */ 'a'
              ]
            )(
              _Object$create,
              'onPageNotFound',
              setDefaultDescriptor({
                value: function value(res) {
                  var _a;
                  var onPageNotFound =
                    (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null ||
                    _a === void 0
                      ? void 0
                      : _a.onPageNotFound;
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(onPageNotFound) &&
                    onPageNotFound.call(appInstance, res);
                }
              })
            ),
            _Object$create)
          );
          _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].app = appConfig;
          return appConfig;
        }
        function isClassComponent(value) {
          return (
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isFunction */ 'i'])(value) && '__vccOpts' in value
          );
        }
        var getNativeCompId = Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['incrementId'])();
        function initNativeComponentEntry(h) {
          setReconciler();
          var NativeComponentWrapper = {
            props: ['getCtx', 'compId'],
            setup: function setup(props) {
              var root = Object(vue__WEBPACK_IMPORTED_MODULE_5__['ref'])();
              var ctx = props.getCtx();
              Object(vue__WEBPACK_IMPORTED_MODULE_5__['provide'])('id', props.compId);
              Object(vue__WEBPACK_IMPORTED_MODULE_5__['onMounted'])(function () {
                var rootElement = Object(vue__WEBPACK_IMPORTED_MODULE_5__['toRaw'])(root.value);
                rootElement.ctx = ctx;
                rootElement.performUpdate(true);
              });
              return {
                root: root
              };
            },
            render: function render() {
              return h(
                'root',
                {
                  ref: 'root',
                  id: this.compId
                },
                this.$slots.default()
              );
            }
          };
          var App = Object(vue__WEBPACK_IMPORTED_MODULE_5__['defineComponent'])({
            setup: function setup() {
              var components = Object(vue__WEBPACK_IMPORTED_MODULE_5__['shallowReactive'])([]);
              function mount(component, compId, getCtx) {
                var _a, _b, _c, _d;
                // 处理类组件
                component = isClassComponent(component) ? component.__vccOpts : component;
                var inject = {
                  props: {
                    tid: String
                  },
                  created: function created() {
                    Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['injectPageInstance'])(this, compId);
                  }
                };
                if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ 'h'])(component.mixins)) {
                  var mixins = component.mixins;
                  var idx = mixins.length - 1;
                  if (!((_a = mixins[idx].props) === null || _a === void 0 ? void 0 : _a.tid)) {
                    // mixins 里还没注入过，直接推入数组
                    component.mixins.push(inject);
                  } else {
                    // mixins 里已经注入过，代替前者
                    component.mixins[idx] = inject;
                  }
                } else {
                  component.mixins = [inject];
                }
                var PageComponent = Object.assign({}, component);
                var option =
                  ((_d =
                    (_c = (_b = PageComponent.props) === null || _b === void 0 ? void 0 : _b.option) === null ||
                    _c === void 0
                      ? void 0
                      : _c.default) === null || _d === void 0
                    ? void 0
                    : _d.call(_c)) || {};
                var ctx = getCtx();
                var page = {
                  mounted: function mounted() {
                    ctx.component = this;
                  },
                  unmounted: function unmounted() {
                    Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['removePageInstance'])(compId);
                  },
                  render: function render() {
                    return h(
                      NativeComponentWrapper,
                      {
                        compId: compId,
                        getCtx: getCtx
                      },
                      {
                        default: function _default() {
                          return [
                            h(
                              PageComponent,
                              Object.assign(
                                Object.assign(
                                  {
                                    tid: compId,
                                    option: option
                                  },
                                  (ctx.data || (ctx.data = {})).props
                                ),
                                {
                                  _scope: ctx
                                }
                              )
                            )
                          ];
                        }
                      }
                    );
                  }
                };
                components.push({
                  compId: compId,
                  component: page
                });
              }
              function unmount(compId) {
                var index = components.findIndex(function (page) {
                  return page.compId === compId;
                });
                components.splice(index, 1);
              }
              Object(vue__WEBPACK_IMPORTED_MODULE_5__['onMounted'])(function () {
                return (_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].app = {
                  mount: mount,
                  unmount: unmount
                });
              });
              return {
                components: components
              };
            },
            render: function render() {
              return this.components.map(function (page) {
                return h(page.component, {
                  key: page.compId
                });
              });
            }
          });
          Object(vue__WEBPACK_IMPORTED_MODULE_5__['createApp'])(App).mount('#app');
        }
        function createNativeComponentConfig(component, h, componentConfig) {
          var componentObj = {
            options: componentConfig,
            properties: {
              props: {
                type: null,
                value: null,
                observer: function observer(_newVal, oldVal) {
                  oldVal && this.component.$forceUpdate();
                }
              }
            },
            created: function created() {
              if (!_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].app) {
                initNativeComponentEntry(h);
              }
            },
            attached: function attached() {
              var _this2 = this;
              var compId = (this.compId = getNativeCompId());
              setCurrent(compId);
              this.config = componentConfig;
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].app.mount(component, compId, function () {
                return _this2;
              });
            },
            ready: function ready() {
              Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['safeExecute'])(this.compId, 'onReady');
            },
            detached: function detached() {
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].app.unmount(this.compId);
              this.component = null;
            },
            pageLifetimes: {
              show: function show(options) {
                Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['safeExecute'])(this.compId, 'onShow', options);
              },
              hide: function hide() {
                Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['safeExecute'])(this.compId, 'onHide');
              }
            },
            methods: {
              eh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['eventHandler']
            }
          };
          function setCurrent(compId) {
            var pages = getCurrentPages();
            var currentPage = pages[pages.length - 1];
            if (_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].page === currentPage) return;
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].page = currentPage;
            var route = currentPage.route || currentPage.__route__;
            var router = {
              params: currentPage.options || {},
              path: Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['addLeadingSlash'])(route),
              $taroPath: compId,
              onReady: '',
              onHide: '',
              onShow: ''
            };
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_4__['Current'].router = router;
            if (!currentPage.options) {
              // 例如在微信小程序中，页面 options 的设置时机比组件 attached 慢
              Object.defineProperty(currentPage, 'options', {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return this._optionsValue;
                },
                set: function set(value) {
                  router.params = value;
                  this._optionsValue = value;
                }
              });
            }
          }
          return componentObj;
        }
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_3__[/* hooks */ 'f'].tap('initNativeApi', function (taro) {
          for (var hook in taroHooks) {
            taro[hook] = taroHooks[hook];
          }
          taro.setGlobalDataPlugin = setGlobalDataPlugin;
        });

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-html/dist/runtime.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@tarojs/plugin-html/dist/runtime.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          );
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );

        function genAttrMapFnFromDir(dir) {
          var fn = function fn(key, value) {
            var lowerKey = key.toLowerCase();
            if (lowerKey in dir) {
              var res = dir[lowerKey];
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'l'])(res)) {
                key = res;
              } else {
                key = res[0];
                value = res[1][value] || value;
              }
            }
            return [key, value];
          };
          return fn;
        }
        var inlineElements = new Set([
          'i',
          'abbr',
          'select',
          'acronym',
          'small',
          'bdi',
          'kbd',
          'strong',
          'big',
          'sub',
          'sup',
          'br',
          'mark',
          'meter',
          'template',
          'cite',
          'object',
          'time',
          'code',
          'output',
          'u',
          'data',
          'picture',
          'tt',
          'datalist',
          'var',
          'dfn',
          'del',
          'q',
          'em',
          's',
          'embed',
          'samp',
          'b'
        ]);
        var blockElements = new Set([
          'body',
          'svg',
          'address',
          'fieldset',
          'li',
          'span',
          'article',
          'figcaption',
          'main',
          'aside',
          'figure',
          'nav',
          'blockquote',
          'footer',
          'ol',
          'details',
          'p',
          'dialog',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'pre',
          'dd',
          'header',
          'section',
          'div',
          'hgroup',
          'table',
          'dl',
          'hr',
          'ul',
          'dt',
          'view',
          'view-block'
        ]);
        var specialElements = new Map([
          ['slot', 'slot'],
          ['form', 'form'],
          ['iframe', 'web-view'],
          ['img', 'image'],
          ['audio', 'audio'],
          ['video', 'video'],
          ['canvas', 'canvas'],
          [
            'a',
            {
              mapName: function mapName(props) {
                return !props.href || /^javascript/.test(props.href) ? 'view' : 'navigator';
              },
              mapNameCondition: ['href'],
              mapAttr: genAttrMapFnFromDir({
                href: 'url',
                target: [
                  'openType',
                  {
                    _blank: 'navigate',
                    _self: 'redirect'
                  }
                ]
              })
            }
          ],
          [
            'input',
            {
              mapName: function mapName(props) {
                if (props.type === 'checkbox') {
                  return 'checkbox';
                } else if (props.type === 'radio') {
                  return 'radio';
                }
                return 'input';
              },
              mapNameCondition: ['type'],
              mapAttr: function mapAttr(key, value, props) {
                var htmlKey = key.toLowerCase();
                if (htmlKey === 'autofocus') {
                  key = 'focus';
                } else if (htmlKey === 'readonly') {
                  if (props.disabled === true) {
                    value = true;
                  }
                  key = 'disabled';
                } else if (htmlKey === 'type') {
                  if (value === 'password') {
                    key = 'password';
                    value = true;
                  } else if (value === 'tel') {
                    value = 'number';
                  }
                }
                return [key, value];
              }
            }
          ],
          [
            'label',
            {
              mapName: 'label',
              mapAttr: genAttrMapFnFromDir({
                htmlfor: 'for'
              })
            }
          ],
          [
            'textarea',
            {
              mapName: 'textarea',
              mapAttr: genAttrMapFnFromDir({
                autofocus: 'focus',
                readonly: 'disabled'
              })
            }
          ],
          [
            'progress',
            {
              mapName: 'progress',
              mapAttr: function mapAttr(key, value, props) {
                if (key === 'value') {
                  var max = props.max || 1;
                  key = 'percent';
                  value = Math.round((value / max) * 100);
                }
                return [key, value];
              }
            }
          ],
          [
            'button',
            {
              mapName: 'button',
              mapAttr: function mapAttr(key, value) {
                if (key === 'type' && (value === 'submit' || value === 'reset')) {
                  key = 'formType';
                }
                return [key, value];
              }
            }
          ]
        ]);
        function isHtmlTags(nodeName) {
          if (inlineElements.has(nodeName) || blockElements.has(nodeName) || specialElements.has(nodeName)) {
            return true;
          }
          return false;
        }
        function getMappedType(nodeName, rawProps) {
          if (inlineElements.has(nodeName)) {
            return 'text';
          } else if (specialElements.has(nodeName)) {
            var mapping = specialElements.get(nodeName);
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'l'])(mapping)) {
              return mapping;
            }
            var mapName = mapping.mapName;
            return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ 'i'])(mapName)
              ? mapName(rawProps)
              : mapName;
          } else {
            return 'view';
          }
        }
        function getAttrMapFn(nodeName) {
          var mapping = specialElements.get(nodeName);
          if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'l'])(mapping)) {
            return mapping === null || mapping === void 0 ? void 0 : mapping.mapAttr;
          }
        }
        function getMapNameByCondition(nodeName, attr, props) {
          var mapping = specialElements.get(nodeName);
          if (!mapping || Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'l'])(mapping)) return;
          var mapName = mapping.mapName,
            mapNameCondition = mapping.mapNameCondition;
          if (!mapNameCondition) return;
          if (
            mapNameCondition.indexOf(attr) > -1 &&
            !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'l'])(mapName)
          ) {
            return mapName(props);
          }
        }
        function mapNameByContion(nodeName, key, element, componentsAlias) {
          var mapName = getMapNameByCondition(nodeName, key, element.props);
          if (mapName) {
            var mapNameAlias = componentsAlias[mapName]._num;
            element.enqueueUpdate({
              path: ''.concat(element._path, '.', 'nn' /* Shortcuts.NodeName */),
              value: mapNameAlias
            });
          }
        }
        function ensureHtmlClass(tagName) {
          var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var classList = className.split(' ');
          var htmlClass = 'h5-'.concat(tagName);
          if (classList.indexOf(htmlClass) === -1) {
            classList.unshift(htmlClass);
          }
          return classList.join(' ');
        }
        function ensureRect(props) {
          var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var cssText = style;
          var width = props.width,
            height = props.height;
          if (width) {
            cssText = 'width: '.concat(width, ';').concat(cssText);
          }
          if (height) {
            cssText = 'height: '.concat(height, ';').concat(cssText);
          }
          return cssText;
        }
        function defineMappedProp(obj, propName, mapName) {
          Object.defineProperty(obj, propName, {
            enumerable: true,
            configurable: true,
            get: function get() {
              return obj[mapName];
            },
            set: function set(val) {
              obj[mapName] = val;
            }
          });
        }
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* hooks */ 'f'].tap('modifyHydrateData', function (data) {
          var nodeName = data['nn' /* Shortcuts.NodeName */];
          if (!isHtmlTags(nodeName)) return;
          true &&
            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* warn */ 's'])(
              data['nn' /* Shortcuts.NodeName */] === 'select',
              '请使用 Picker 组件代替 <select>'
            );
          // map nodeName
          data['nn' /* Shortcuts.NodeName */] = getMappedType(nodeName, data);
          // map attr Key/Value
          var attrMapFn = getAttrMapFn(nodeName);
          if (attrMapFn) {
            for (var key in data) {
              var value = data[key];
              var _attrMapFn = attrMapFn(key, value, data),
                _attrMapFn2 = Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[
                    /* default */ 'a'
                  ]
                )(_attrMapFn, 2),
                mapKey = _attrMapFn2[0],
                mapValue = _attrMapFn2[1];
              if (key !== mapKey) {
                delete data[key];
                data[mapKey] = mapValue;
              } else if (value !== mapValue) {
                data[key] = mapValue;
              }
            }
          }
          if (nodeName === 'br') {
            var _ref;
            data['cn' /* Shortcuts.Childnodes */] = [
              ((_ref = {}),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(_ref, 'nn' /* Shortcuts.NodeName */, '#text'),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(_ref, 'v', '\n'),
              _ref)
            ];
          }
          data['cl' /* Shortcuts.Class */] = ensureHtmlClass(nodeName, data['cl' /* Shortcuts.Class */]);
          data['st' /* Shortcuts.Style */] = ensureRect(data, data['st' /* Shortcuts.Style */]);
        });

        _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* hooks */ 'f'].tap(
          'modifySetAttrPayload',
          function (element, key, payload, componentsAlias) {
            var nodeName = element.nodeName,
              _path = element._path,
              props = element.props;
            if (!isHtmlTags(nodeName)) return;
            // map nodeName
            mapNameByContion(nodeName, key, element, componentsAlias);
            var mapName = getMappedType(nodeName, props);
            var alias = componentsAlias[mapName];
            // map attr Key/Value
            var attrMapFn = getAttrMapFn(nodeName);
            if (attrMapFn) {
              var value = payload.value;
              var _attrMapFn3 = attrMapFn(key, value, props),
                _attrMapFn4 = Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[
                    /* default */ 'a'
                  ]
                )(_attrMapFn3, 2),
                mapKey = _attrMapFn4[0],
                mapValue = _attrMapFn4[1];
              payload.path = ''.concat(_path, '.').concat(alias[mapKey] || mapKey);
              payload.value = mapValue;
            }
            if (key === 'cl' /* Shortcuts.Class */) {
              payload.value = ensureHtmlClass(nodeName, payload.value);
            } else if (key === 'st' /* Shortcuts.Style */ || key === 'width' || key === 'height') {
              payload.path = ''.concat(_path, '.', 'st' /* Shortcuts.Style */);
              payload.value = ensureRect(props, element.style.cssText);
            }
          }
        );
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* hooks */ 'f'].tap(
          'modifyRmAttrPayload',
          function (element, key, payload, componentsAlias) {
            var nodeName = element.nodeName,
              _path = element._path,
              props = element.props;
            if (!isHtmlTags(nodeName)) return;
            // map nodeName
            mapNameByContion(nodeName, key, element, componentsAlias);
            var mapName = getMappedType(nodeName, props);
            var alias = componentsAlias[mapName];
            // map attr Key/Value
            var attrMapFn = getAttrMapFn(nodeName);
            if (attrMapFn) {
              var value = payload[key];
              var _attrMapFn5 = attrMapFn(key, value, props),
                _attrMapFn6 = Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[
                    /* default */ 'a'
                  ]
                )(_attrMapFn5, 1),
                mapKey = _attrMapFn6[0];
              payload.path = ''.concat(_path, '.').concat(alias[mapKey] || mapKey);
            }
            if (key === 'cl' /* Shortcuts.Class */) {
              payload.value = ensureHtmlClass(nodeName, payload.value);
            } else if (key === 'st' /* Shortcuts.Style */ || key === 'width' || key === 'height') {
              payload.path = ''.concat(_path, '.', 'st' /* Shortcuts.Style */);
              payload.value = ensureRect(props, element.style.cssText);
            }
          }
        );
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* hooks */ 'f'].tap(
          'onAddEvent',
          function (type, _handler, _options, node) {
            node = node;
            if (!isHtmlTags(node.nodeName)) return;
            if (type === 'click') {
              defineMappedProp(node.__handlers, type, 'tap');
            } else if (node.nodeName === 'input') {
              if (type === 'change') {
                if (node.props.type === 'checkbox' || node.props.type === 'radio') {
                  defineMappedProp(node.__handlers, type, 'tap');
                } else {
                  defineMappedProp(node.__handlers, type, 'input');
                }
              } else if (type === 'keypress') {
                defineMappedProp(node.__handlers, type, 'confirm');
              }
            }
          }
        );
        _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* hooks */ 'f'].tap('modifyTaroEvent', function (event, element) {
          var nodeName = element.nodeName,
            props = element.props;
          if (nodeName === 'input' && event.type === 'tap') {
            if (props.type === 'checkbox') {
              props.checked = !props.checked;
            } else if (props.type === 'radio' && !props.checked) {
              props.checked = true;
            }
            if (event.mpEvent) {
              var _event$mpEvent = event.mpEvent,
                currentTarget = _event$mpEvent.currentTarget,
                target = _event$mpEvent.target;
              currentTarget.checked = props.checked;
              if (target.id === currentTarget.id) {
                target.checked = props.checked;
              }
            }
          }
        });

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js ***!
  \********************************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );

        var needPromiseApis = new Set([
          'authPrivateMessage',
          'disableAlertBeforeUnload',
          'enableAlertBeforeUnload',
          'getBackgroundFetchData',
          'getGroupEnterInfo',
          'getShareInfo',
          'getWeRunData',
          'join1v1Chat',
          'openVideoEditor',
          'saveFileToDisk',
          'scanItem',
          'setEnable1v1Chat',
          'setWindowSize',
          'sendBizRedPacket',
          'startFacialRecognitionVerify',
          'openCustomerServiceChat',
          'getLocalIPAddress',
          'getUserProfile',
          'editImage',
          'getFuzzyLocation',
          'cropImage'
        ]);
        function initNativeApi(taro) {
          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* processApis */ 'p'])(taro, wx, {
            needPromiseApis: needPromiseApis,
            modifyApis: function modifyApis(apis) {
              // fix https://github.com/NervJS/taro/issues/9899
              apis.delete('lanDebug');
            },
            transformMeta: function transformMeta(api, options) {
              var _a;
              if (api === 'showShareMenu') {
                options.menus =
                  (_a = options.showShareItems) === null || _a === void 0
                    ? void 0
                    : _a.map(function (item) {
                        return item === 'wechatFriends'
                          ? 'shareAppMessage'
                          : item === 'wechatMoment'
                          ? 'shareTimeline'
                          : item;
                      });
              }
              return {
                key: api,
                options: options
              };
            }
          });
          taro.cloud = wx.cloud;
          taro.getTabBar = function (pageCtx) {
            var _a;
            if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === 'function') {
              return (_a = pageCtx.getTabBar()) === null || _a === void 0 ? void 0 : _a.$taroInstances;
            }
          };
        }
        var _true = 'true';
        var _false = 'false';
        var _empty = '';
        var _zero = '0';
        var components = {
          // ======== 调整属性 ========
          Progress: {
            'border-radius': _zero,
            'font-size': '16',
            duration: '30',
            bindActiveEnd: _empty
          },
          RichText: {
            space: _empty,
            'user-select': _false
          },
          Text: {
            'user-select': _false
          },
          Map: {
            polygons: '[]',
            subkey: _empty,
            rotate: _zero,
            skew: _zero,
            'max-scale': '20',
            'min-scale': '3',
            'enable-3D': _false,
            'show-compass': _false,
            'show-scale': _false,
            'enable-overlooking': _false,
            'enable-zoom': _true,
            'enable-scroll': _true,
            'enable-rotate': _false,
            'enable-satellite': _false,
            'enable-traffic': _false,
            'enable-poi': _true,
            'enable-building': _true,
            setting: '[]',
            bindLabelTap: _empty,
            bindRegionChange: _empty,
            bindPoiTap: _empty,
            bindAnchorPointTap: _empty
          },
          Button: {
            lang: 'en',
            'session-from': _empty,
            'send-message-title': _empty,
            'send-message-path': _empty,
            'send-message-img': _empty,
            'app-parameter': _empty,
            'show-message-card': _false,
            'business-id': _empty,
            bindGetUserInfo: _empty,
            bindContact: _empty,
            bindGetPhoneNumber: _empty,
            bindChooseAvatar: _empty,
            bindError: _empty,
            bindOpenSetting: _empty,
            bindLaunchApp: _empty
          },
          Form: {
            'report-submit-timeout': _zero
          },
          Input: {
            'always-embed': _false,
            'adjust-position': _true,
            'hold-keyboard': _false,
            'safe-password-cert-path': '',
            'safe-password-length': '',
            'safe-password-time-stamp': '',
            'safe-password-nonce': '',
            'safe-password-salt': '',
            'safe-password-custom-hash': '',
            'auto-fill': _empty,
            bindKeyboardHeightChange: _empty
          },
          Picker: {
            'header-text': _empty
          },
          PickerView: {
            'immediate-change': _false,
            bindPickStart: _empty,
            bindPickEnd: _empty
          },
          Slider: {
            color: "'#e9e9e9'",
            'selected-color': "'#1aad19'"
          },
          Textarea: {
            'show-confirm-bar': _true,
            'adjust-position': _true,
            'hold-keyboard': _false,
            'disable-default-padding': _false,
            'confirm-type': "'return'",
            'confirm-hold': _false,
            bindKeyboardHeightChange: _empty
          },
          ScrollView: {
            'enable-flex': _false,
            'scroll-anchoring': _false,
            'refresher-enabled': _false,
            'refresher-threshold': '45',
            'refresher-default-style': "'black'",
            'refresher-background': "'#FFF'",
            'refresher-triggered': _false,
            enhanced: _false,
            bounces: _true,
            'show-scrollbar': _true,
            'paging-enabled': _false,
            'fast-deceleration': _false,
            bindDragStart: _empty,
            bindDragging: _empty,
            bindDragEnd: _empty,
            bindRefresherPulling: _empty,
            bindRefresherRefresh: _empty,
            bindRefresherRestore: _empty,
            bindRefresherAbort: _empty
          },
          Swiper: {
            'snap-to-edge': _false,
            'easing-function': "'default'"
          },
          SwiperItem: {
            'skip-hidden-item-layout': _false
          },
          Navigator: {
            target: "'self'",
            'app-id': _empty,
            path: _empty,
            'extra-data': _empty,
            version: "'version'"
          },
          Camera: {
            mode: "'normal'",
            resolution: "'medium'",
            'frame-size': "'medium'",
            bindInitDone: _empty,
            bindScanCode: _empty
          },
          Image: {
            webp: _false,
            'show-menu-by-longpress': _false
          },
          LivePlayer: {
            mode: "'live'",
            'sound-mode': "'speaker'",
            'auto-pause-if-navigate': _true,
            'auto-pause-if-open-native': _true,
            'picture-in-picture-mode': '[]',
            bindstatechange: _empty,
            bindfullscreenchange: _empty,
            bindnetstatus: _empty,
            bindAudioVolumeNotify: _empty,
            bindEnterPictureInPicture: _empty,
            bindLeavePictureInPicture: _empty
          },
          Video: {
            title: _empty,
            'play-btn-position': "'bottom'",
            'enable-play-gesture': _false,
            'auto-pause-if-navigate': _true,
            'auto-pause-if-open-native': _true,
            'vslide-gesture': _false,
            'vslide-gesture-in-fullscreen': _true,
            'ad-unit-id': _empty,
            'poster-for-crawler': _empty,
            'show-casting-button': _false,
            'picture-in-picture-mode': '[]',
            // picture-in-picture-show-progress 属性先注释掉的原因如下：
            // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
            // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
            // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
            // 'picture-in-picture-show-progress': 'false',
            'enable-auto-rotation': _false,
            'show-screen-lock-button': _false,
            'show-snapshot-button': _false,
            'show-background-playback-button': _false,
            'background-poster': _empty,
            bindProgress: _empty,
            bindLoadedMetadata: _empty,
            bindControlsToggle: _empty,
            bindEnterPictureInPicture: _empty,
            bindLeavePictureInPicture: _empty,
            bindSeekComplete: _empty,
            bindAdLoad: _empty,
            bindAdError: _empty,
            bindAdClose: _empty,
            bindAdPlay: _empty
          },
          Canvas: {
            type: _empty
          },
          Ad: {
            'ad-type': "'banner'",
            'ad-theme': "'white'"
          },
          CoverView: {
            'marker-id': _empty,
            slot: _empty
          },
          // ======== 额外组件 ========
          Editor: {
            'read-only': _false,
            placeholder: _empty,
            'show-img-size': _false,
            'show-img-toolbar': _false,
            'show-img-resize': _false,
            focus: _false,
            bindReady: _empty,
            bindFocus: _empty,
            bindBlur: _empty,
            bindInput: _empty,
            bindStatusChange: _empty,
            name: _empty
          },
          MatchMedia: {
            'min-width': _empty,
            'max-width': _empty,
            width: _empty,
            'min-height': _empty,
            'max-height': _empty,
            height: _empty,
            orientation: _empty
          },
          FunctionalPageNavigator: {
            version: "'release'",
            name: _empty,
            args: _empty,
            bindSuccess: _empty,
            bindFail: _empty,
            bindCancel: _empty
          },
          LivePusher: {
            url: _empty,
            mode: "'RTC'",
            autopush: _false,
            muted: _false,
            'enable-camera': _true,
            'auto-focus': _true,
            orientation: "'vertical'",
            beauty: _zero,
            whiteness: _zero,
            aspect: "'9:16'",
            'min-bitrate': '200',
            'max-bitrate': '1000',
            'audio-quality': "'high'",
            'waiting-image': _empty,
            'waiting-image-hash': _empty,
            zoom: _false,
            'device-position': "'front'",
            'background-mute': _false,
            mirror: _false,
            'remote-mirror': _false,
            'local-mirror': _false,
            'audio-reverb-type': _zero,
            'enable-mic': _true,
            'enable-agc': _false,
            'enable-ans': _false,
            'audio-volume-type': "'voicecall'",
            'video-width': '360',
            'video-height': '640',
            'beauty-style': "'smooth'",
            filter: "'standard'",
            animation: _empty,
            bindStateChange: _empty,
            bindNetStatus: _empty,
            bindBgmStart: _empty,
            bindBgmProgress: _empty,
            bindBgmComplete: _empty,
            bindAudioVolumeNotify: _empty
          },
          OfficialAccount: {
            bindLoad: _empty,
            bindError: _empty
          },
          OpenData: {
            type: _empty,
            'open-gid': _empty,
            lang: "'en'",
            'default-text': _empty,
            'default-avatar': _empty,
            bindError: _empty
          },
          NavigationBar: {
            title: _empty,
            loading: _false,
            'front-color': _empty,
            'background-color': _empty,
            'color-animation-duration': _zero,
            'color-animation-timing-func': "'linear'"
          },
          PageMeta: {
            'background-text-style': _empty,
            'background-color': _empty,
            'background-color-top': _empty,
            'background-color-bottom': _empty,
            'scroll-top': "''",
            'scroll-duration': '300',
            'page-style': "''",
            'root-font-size': "''",
            bindResize: _empty,
            bindScroll: _empty,
            bindScrollDone: _empty
          },
          VoipRoom: {
            openid: _empty,
            mode: "'camera'",
            'device-position': "'front'",
            bindError: _empty
          },
          AdCustom: {
            'unit-id': _empty,
            'ad-intervals': _empty,
            bindLoad: _empty,
            bindError: _empty
          },
          PageContainer: {
            show: _false,
            duration: '300',
            'z-index': '100',
            overlay: _true,
            position: "'bottom'",
            round: _false,
            'close-on-slideDown': _false,
            'overlay-style': _empty,
            'custom-style': _empty,
            bindBeforeEnter: _empty,
            bindEnter: _empty,
            bindAfterEnter: _empty,
            bindBeforeLeave: _empty,
            bindLeave: _empty,
            bindAfterLeave: _empty,
            bindClickOverlay: _empty
          },
          ShareElement: {
            mapkey: _empty,
            transform: _false,
            duration: '300',
            'easing-function': "'ease-out'"
          },
          KeyboardAccessory: {},
          RootPortal: {}
        };
        var hostConfig = {
          initNativeApi: initNativeApi,
          getMiniLifecycle: function getMiniLifecycle(config) {
            var methods = config.page[5];
            if (methods.indexOf('onSaveExitState') === -1) {
              methods.push('onSaveExitState');
            }
            return config;
          }
        };
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* mergeReconciler */ 'o'])(hostConfig);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* mergeInternalComponents */ 'n'])(components);

        /***/
      },

    /***/ './node_modules/@tarojs/runtime/dist/runtime.esm.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
      /*! exports provided: Events, hooks, Current, FormElement, MutationObserver, SVGElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, addLeadingSlash, cancelAnimationFrame, createComponentConfig, createEvent, createPageConfig, createRecursiveComponentConfig, document, eventCenter, eventHandler, eventSource, getComputedStyle, getCurrentInstance, getPageInstance, hydrate, incrementId, injectPageInstance, navigator, nextTick, now, options, removePageInstance, requestAnimationFrame, safeExecute, stringify, window */
      /*! all exports used */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (requestAnimationFrame, cancelAnimationFrame, global) {
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Current', function () {
            return Current;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FormElement', function () {
            return FormElement;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MutationObserver', function () {
            return MutationObserver;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SVGElement', function () {
            return SVGElement;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Style', function () {
            return Style;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaroElement', function () {
            return TaroElement;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaroEvent', function () {
            return TaroEvent;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaroNode', function () {
            return TaroNode;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaroRootElement', function () {
            return TaroRootElement;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TaroText', function () {
            return TaroText;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addLeadingSlash', function () {
            return addLeadingSlash;
          });
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'cancelAnimationFrame',
            function () {
              return _caf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createComponentConfig',
            function () {
              return createComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'createEvent', function () {
            return createEvent;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'createPageConfig', function () {
            return createPageConfig;
          });
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createRecursiveComponentConfig',
            function () {
              return createRecursiveComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'document', function () {
            return document$1;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'eventCenter', function () {
            return eventCenter;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'eventHandler', function () {
            return eventHandler;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'eventSource', function () {
            return eventSource;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getComputedStyle', function () {
            return getComputedStyle;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getCurrentInstance', function () {
            return getCurrentInstance;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getPageInstance', function () {
            return getPageInstance;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'hydrate', function () {
            return hydrate;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'incrementId', function () {
            return incrementId;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'injectPageInstance', function () {
            return injectPageInstance;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'navigator', function () {
            return nav;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'nextTick', function () {
            return nextTick;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'now', function () {
            return now;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'options', function () {
            return options;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'removePageInstance', function () {
            return removePageInstance;
          });
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'requestAnimationFrame',
            function () {
              return _raf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'safeExecute', function () {
            return safeExecute;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'stringify', function () {
            return stringify;
          });
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'window', function () {
            return window$1;
          });
          /* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @tarojs/plugin-platform-weapp/dist/runtime */ './node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js'
            );
          /* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! @tarojs/plugin-html/dist/runtime */ './node_modules/@tarojs/plugin-html/dist/runtime.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_set_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/set.js */ './node_modules/@babel/runtime/helpers/esm/set.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/toArray.js */ './node_modules/@babel/runtime/helpers/esm/toArray.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ './node_modules/@babel/runtime/helpers/esm/createSuper.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/get.js */ './node_modules/@babel/runtime/helpers/esm/get.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js */ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js */ './node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
            );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
            );
          /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
            /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Events', function () {
            return _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__['b'];
          });

          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'hooks', function () {
            return _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__['f'];
          });

          var PROPERTY_THRESHOLD = 2046;
          var SET_DATA = '小程序 setData';
          var PAGE_INIT = '页面初始化';
          var ROOT_STR = 'root';
          var HTML = 'html';
          var HEAD = 'head';
          var BODY = 'body';
          var APP = 'app';
          var CONTAINER = 'container';
          var DOCUMENT_ELEMENT_NAME = '#document';
          var DOCUMENT_FRAGMENT = 'document-fragment';
          var ID = 'id';
          var UID = 'uid';
          var CLASS = 'class';
          var STYLE = 'style';
          var FOCUS = 'focus';
          var VIEW = 'view';
          var STATIC_VIEW = 'static-view';
          var PURE_VIEW = 'pure-view';
          var PROPS = 'props';
          var DATASET = 'dataset';
          var OBJECT = 'object';
          var VALUE = 'value';
          var INPUT = 'input';
          var CHANGE = 'change';
          var CUSTOM_WRAPPER = 'custom-wrapper';
          var TARGET = 'target';
          var CURRENT_TARGET = 'currentTarget';
          var TYPE = 'type';
          var CONFIRM = 'confirm';
          var TIME_STAMP = 'timeStamp';
          var KEY_CODE = 'keyCode';
          var TOUCHMOVE = 'touchmove';
          var CATCHMOVE = 'catchMove';
          var CATCH_VIEW = 'catch-view';
          var COMMENT = 'comment';
          var ON_LOAD = 'onLoad';
          var ON_READY = 'onReady';
          var ON_SHOW = 'onShow';
          var ON_HIDE = 'onHide';
          var OPTIONS = 'options';
          var EXTERNAL_CLASSES = 'externalClasses';
          var BEHAVIORS = 'behaviors';
          var observers = [];
          /**
           * The MutationObserver provides the ability
           * to watch for changes being made to the DOM tree.
           * It will invoke a specified callback function
           * when DOM changes occur.
           * @see https://dom.spec.whatwg.org/#mutationobserver
           * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
           */
          var MutationObserverImpl = /*#__PURE__*/ (function () {
            function MutationObserverImpl(callback) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, MutationObserverImpl);
              this.records = [];
              this.callback = callback;
            }
            /**
             * Configures the MutationObserver
             * to begin receiving notifications
             * through its callback function
             * when DOM changes matching the given options occur.
             *
             * Options matching is to be implemented.
             */
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(MutationObserverImpl, [
              {
                key: 'observe',
                value: function observe(target, options) {
                  this.disconnect();
                  this.target = target;
                  this.options = options || {};
                  observers.push(this);
                }
                /**
                 * Stop the MutationObserver instance
                 * from receiving further notifications
                 * until and unless observe() is called again.
                 */
              },
              {
                key: 'disconnect',
                value: function disconnect() {
                  this.target = null;
                  var index = observers.indexOf(this);
                  if (index >= 0) {
                    observers.splice(index, 1);
                  }
                }
                /**
                 * Removes all pending notifications
                 * from the MutationObserver's notification queue
                 * and returns them in a new Array of MutationRecord objects.
                 */
              },
              {
                key: 'takeRecords',
                value: function takeRecords() {
                  return this.records.splice(0, this.records.length);
                }
              }
            ]);
            return MutationObserverImpl;
          })();
          /** Match two TaroNodes by sid. */
          var sidMatches = function sidMatches(observerTarget, target) {
            return (
              !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid)
            );
          };
          var isConcerned = function isConcerned(record, options) {
            var characterData = options.characterData,
              characterDataOldValue = options.characterDataOldValue,
              attributes = options.attributes,
              attributeOldValue = options.attributeOldValue,
              childList = options.childList;
            switch (record.type) {
              case 'characterData' /* MutationRecordType.CHARACTER_DATA */:
                if (characterData) {
                  if (!characterDataOldValue) record.oldValue = null;
                  return true;
                }
                return false;
              case 'attributes' /* MutationRecordType.ATTRIBUTES */:
                if (attributes) {
                  if (!attributeOldValue) record.oldValue = null;
                  return true;
                }
                return false;
              case 'childList' /* MutationRecordType.CHILD_LIST */:
                if (childList) {
                  return true;
                }
                return false;
            }
          };
          var pendingMuatations = false;
          function logMutation(observer, record) {
            observer.records.push(record);
            if (!pendingMuatations) {
              pendingMuatations = true;
              Promise.resolve().then(function () {
                pendingMuatations = false;
                observers.forEach(function (observer) {
                  return observer.callback(observer.takeRecords());
                });
              });
            }
          }
          function recordMutation(record) {
            observers.forEach(function (observer) {
              var options = observer.options;
              for (var t = record.target; t; t = t.parentNode) {
                if (sidMatches(observer.target, t) && isConcerned(record, options)) {
                  logMutation(observer, record);
                  break;
                }
                if (!options.subtree) break;
              }
            });
          }
          var MutationObserver = /*#__PURE__*/ (function () {
            function MutationObserver(callback) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, MutationObserver);
              if (true) {
                this.core = new MutationObserverImpl(callback);
              } else {
              }
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(
              MutationObserver,
              [
                {
                  key: 'observe',
                  value: function observe() {
                    var _this$core;
                    (_this$core = this.core).observe.apply(_this$core, arguments);
                  }
                },
                {
                  key: 'disconnect',
                  value: function disconnect() {
                    this.core.disconnect();
                  }
                },
                {
                  key: 'takeRecords',
                  value: function takeRecords() {
                    return this.core.takeRecords();
                  }
                }
              ],
              [
                {
                  key: 'record',
                  value: function record(_record) {
                    recordMutation(_record);
                  }
                }
              ]
            );
            return MutationObserver;
          })();
          var incrementId = function incrementId() {
            var chatCodes = [];
            // A-Z
            for (var i = 65; i <= 90; i++) {
              chatCodes.push(i);
            }
            // a-z
            for (var _i = 97; _i <= 122; _i++) {
              chatCodes.push(_i);
            }
            var chatCodesLen = chatCodes.length - 1;
            var list = [0, 0];
            return function () {
              var target = list.map(function (item) {
                return chatCodes[item];
              });
              var res = String.fromCharCode.apply(
                String,
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__[
                    /* default */ 'a'
                  ]
                )(target)
              );
              var tailIdx = list.length - 1;
              list[tailIdx]++;
              while (list[tailIdx] > chatCodesLen) {
                list[tailIdx] = 0;
                tailIdx = tailIdx - 1;
                if (tailIdx < 0) {
                  list.push(0);
                  break;
                }
                list[tailIdx]++;
              }
              return res;
            };
          };
          function isElement(node) {
            return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
          }

          function isText(node) {
            return node.nodeType === 3 /* NodeType.TEXT_NODE */;
          }

          function isComment(node) {
            return node.nodeName === COMMENT;
          }
          function isHasExtractProp(el) {
            var res = Object.keys(el.props).find(function (prop) {
              return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
            });
            return Boolean(res);
          }
          /**
           * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
           * @param node 当前组件
           * @param type 事件类型
           */
          function isParentBinded(node, type) {
            var _a;
            var res = false;
            while (
              (node === null || node === void 0 ? void 0 : node.parentElement) &&
              node.parentElement._path !== ROOT_STR
            ) {
              if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
                res = true;
                break;
              }
              node = node.parentElement;
            }
            return res;
          }
          function shortcutAttr(key) {
            switch (key) {
              case STYLE:
                return 'st' /* Shortcuts.Style */;
              case ID:
                return UID;
              case CLASS:
                return 'cl' /* Shortcuts.Class */;
              default:
                return key;
            }
          }
          var customWrapperCache = new Map();
          function _extend(ctor, methodName, options) {
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(options)) {
              options = {
                value: options
              };
            }
            Object.defineProperty(
              ctor.prototype,
              methodName,
              Object.assign(
                {
                  configurable: true,
                  enumerable: true
                },
                options
              )
            );
          }
          var componentsAlias$1;
          function getComponentsAlias() {
            if (!componentsAlias$1) {
              componentsAlias$1 = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* getComponentsAlias */ 'e'])(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* internalComponents */ 'g']
              );
            }
            return componentsAlias$1;
          }
          var ClassList = /*#__PURE__*/ (function (_Set) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(ClassList, _Set);
            var _super = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(ClassList);
            function ClassList(className, el) {
              var _thisSuper, _this;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, ClassList);
              _this = _super.call(this);
              className
                .trim()
                .split(/\s+/)
                .forEach(
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    ((_thisSuper = Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(_this)),
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype)),
                    'add',
                    _thisSuper
                  ).bind(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                        /* default */ 'a'
                      ]
                    )(_this)
                  )
                );
              _this.el = el;
              return _this;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(ClassList, [
              {
                key: 'value',
                get: function get() {
                  return Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__[
                      /* default */ 'a'
                    ]
                  )(this)
                    .filter(function (v) {
                      return v !== '';
                    })
                    .join(' ');
                }
              },
              {
                key: 'add',
                value: function add(s) {
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'add',
                    this
                  ).call(this, s);
                  this._update();
                  return this;
                }
              },
              {
                key: 'length',
                get: function get() {
                  return this.size;
                }
              },
              {
                key: 'remove',
                value: function remove(s) {
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'delete',
                    this
                  ).call(this, s);
                  this._update();
                }
              },
              {
                key: 'toggle',
                value: function toggle(s) {
                  if (
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'has',
                      this
                    ).call(this, s)
                  ) {
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'delete',
                      this
                    ).call(this, s);
                  } else {
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'add',
                      this
                    ).call(this, s);
                  }
                  this._update();
                }
              },
              {
                key: 'replace',
                value: function replace(s1, s2) {
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'delete',
                    this
                  ).call(this, s1);
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'add',
                    this
                  ).call(this, s2);
                  this._update();
                }
              },
              {
                key: 'contains',
                value: function contains(s) {
                  return Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'has',
                    this
                  ).call(this, s);
                }
              },
              {
                key: 'toString',
                value: function toString() {
                  return this.value;
                }
              },
              {
                key: '_update',
                value: function _update() {
                  this.el.className = this.value;
                }
              }
            ]);
            return ClassList;
          })(
            /*#__PURE__*/ Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_12__[
                /* default */ 'a'
              ]
            )(Set)
          );
          var EventSource = /*#__PURE__*/ (function (_Map) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(EventSource, _Map);
            var _super2 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(EventSource);
            function EventSource() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, EventSource);
              return _super2.apply(this, arguments);
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(EventSource, [
              {
                key: 'removeNode',
                value: function removeNode(child) {
                  var sid = child.sid,
                    uid = child.uid;
                  this.delete(sid);
                  if (uid !== sid && uid) this.delete(uid);
                }
              },
              {
                key: 'removeNodeTree',
                value: function removeNodeTree(child) {
                  var _this2 = this;
                  this.removeNode(child);
                  var childNodes = child.childNodes;
                  childNodes.forEach(function (node) {
                    return _this2.removeNodeTree(node);
                  });
                }
              }
            ]);
            return EventSource;
          })(
            /*#__PURE__*/ Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_12__[
                /* default */ 'a'
              ]
            )(Map)
          );
          var eventSource = new EventSource();
          var env = {
            window: false ? undefined : _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a'],
            document: false ? undefined : _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a']
          };
          var SPECIAL_NODES;
          var componentsAlias;
          /**
           * React also has a fancy function's name for this: `hydrate()`.
           * You may have been heard `hydrate` as a SSR-related function,
           * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
           * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
           */
          function hydrate(node) {
            var _data;
            if (!componentsAlias) {
              // 初始化 componentsAlias
              componentsAlias = getComponentsAlias();
            }
            if (!SPECIAL_NODES) {
              // 初始化 SPECIAL_NODES
              SPECIAL_NODES = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getSpecialNodes');
            }
            var nodeName = node.nodeName;
            if (isText(node)) {
              var _ref;
              return (
                (_ref = {}),
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ]
                )(_ref, 'v' /* Shortcuts.Text */, node.nodeValue),
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ]
                )(_ref, 'nn' /* Shortcuts.NodeName */, componentsAlias[nodeName]._num),
                _ref
              );
            }
            var data =
              ((_data = {}),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_data, 'nn' /* Shortcuts.NodeName */, nodeName),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_data, 'sid', node.sid),
              _data);
            if (node.uid !== node.sid) {
              data.uid = node.uid;
            }
            if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
              data['nn' /* Shortcuts.NodeName */] = 'static-'.concat(nodeName);
              if (nodeName === VIEW && !isHasExtractProp(node)) {
                data['nn' /* Shortcuts.NodeName */] = PURE_VIEW;
              }
            }
            var props = node.props;
            for (var prop in props) {
              var propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(prop);
              if (
                !prop.startsWith('data-') &&
                // 在 node.dataset 的数据
                prop !== CLASS &&
                prop !== STYLE &&
                prop !== ID &&
                propInCamelCase !== CATCHMOVE
              ) {
                data[propInCamelCase] = props[prop];
              }
              if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
                data['nn' /* Shortcuts.NodeName */] = CATCH_VIEW;
              }
            }
            var childNodes = node.childNodes;
            // 过滤 comment 节点
            childNodes = childNodes.filter(function (node) {
              return !isComment(node);
            });
            if (childNodes.length > 0) {
              data['cn' /* Shortcuts.Childnodes */] = childNodes.map(hydrate);
            } else {
              data['cn' /* Shortcuts.Childnodes */] = [];
            }
            if (node.className !== '') {
              data['cl' /* Shortcuts.Class */] = node.className;
            }
            var cssText = node.cssText;
            if (cssText !== '' && nodeName !== 'swiper-item') {
              data['st' /* Shortcuts.Style */] = cssText;
            }
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('modifyHydrateData', data);
            var nn = data['nn' /* Shortcuts.NodeName */];
            var componentAlias = componentsAlias[nn];
            if (componentAlias) {
              data['nn' /* Shortcuts.NodeName */] = componentAlias._num;
              for (var prop in data) {
                if (prop in componentAlias) {
                  data[componentAlias[prop]] = data[prop];
                  delete data[prop];
                }
              }
            }
            return data;
          }
          var TaroEventTarget = /*#__PURE__*/ (function () {
            function TaroEventTarget() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroEventTarget);
              this.__handlers = {};
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(TaroEventTarget, [
              {
                key: 'addEventListener',
                value: function addEventListener(type, handler, options) {
                  type = type.toLowerCase();
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                    'onAddEvent',
                    type,
                    handler,
                    options,
                    this
                  );
                  if (type === 'regionchange') {
                    // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
                    this.addEventListener('begin', handler, options);
                    this.addEventListener('end', handler, options);
                    return;
                  }
                  var isCapture = Boolean(options);
                  var isOnce = false;
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isObject */ 'k'])(options)) {
                    isCapture = Boolean(options.capture);
                    isOnce = Boolean(options.once);
                  }
                  if (isOnce) {
                    var wrapper = function wrapper() {
                      handler.apply(this, arguments); // this 指向 Element
                      this.removeEventListener(type, wrapper);
                    };
                    this.addEventListener(
                      type,
                      wrapper,
                      Object.assign(Object.assign({}, options), {
                        once: false
                      })
                    );
                    return;
                  }
                  true &&
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* warn */ 's'])(
                      isCapture,
                      'Taro 暂未实现 event 的 capture 特性。'
                    );
                  // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
                  // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
                  // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
                  // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
                  var oldHandler = handler;
                  handler = function handler() {
                    oldHandler.apply(this, arguments); // this 指向 Element
                  };

                  handler.oldHandler = oldHandler;
                  var handlers = this.__handlers[type];
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isArray */ 'h'])(handlers)) {
                    handlers.push(handler);
                  } else {
                    this.__handlers[type] = [handler];
                  }
                }
              },
              {
                key: 'removeEventListener',
                value: function removeEventListener(type, handler) {
                  type = type.toLowerCase();
                  if (type === 'regionchange') {
                    // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
                    this.removeEventListener('begin', handler);
                    this.removeEventListener('end', handler);
                    return;
                  }
                  if (!handler) {
                    return;
                  }
                  var handlers = this.__handlers[type];
                  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isArray */ 'h'])(handlers)) {
                    return;
                  }
                  var index = handlers.findIndex(function (item) {
                    if (item === handler || item.oldHandler === handler) return true;
                  });
                  true &&
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* warn */ 's'])(
                      index === -1,
                      "\u4E8B\u4EF6: '".concat(
                        type,
                        "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"
                      )
                    );
                  handlers.splice(index, 1);
                }
              },
              {
                key: 'isAnyEventBinded',
                value: function isAnyEventBinded() {
                  var handlers = this.__handlers;
                  var isAnyEventBinded = Object.keys(handlers).find(function (key) {
                    return handlers[key].length;
                  });
                  return Boolean(isAnyEventBinded);
                }
              }
            ]);
            return TaroEventTarget;
          })();
          var CHILDNODES = 'cn'; /* Shortcuts.Childnodes */
          var nodeId = incrementId();
          var TaroNode = /*#__PURE__*/ (function (_TaroEventTarget) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroNode, _TaroEventTarget);
            var _super3 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroNode);
            function TaroNode() {
              var _this3;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroNode);
              _this3 = _super3.call(this);
              _this3.parentNode = null;
              _this3.childNodes = [];
              _this3.hydrate = function (node) {
                return function () {
                  return hydrate(node);
                };
              };
              _this3.uid = '_' + nodeId(); // dom 节点 id，开发者可修改
              _this3.sid = _this3.uid; // dom 节点全局唯一 id，不可被修改
              eventSource.set(
                _this3.sid,
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                    /* default */ 'a'
                  ]
                )(_this3)
              );
              return _this3;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(
              TaroNode,
              [
                {
                  key: 'updateChildNodes',
                  value: function updateChildNodes(isClean) {
                    var _this4 = this;
                    var cleanChildNodes = function cleanChildNodes() {
                      return [];
                    };
                    var rerenderChildNodes = function rerenderChildNodes() {
                      var childNodes = _this4.childNodes.filter(function (node) {
                        return !isComment(node);
                      });
                      return childNodes.map(hydrate);
                    };
                    this.enqueueUpdate({
                      path: ''.concat(this._path, '.').concat(CHILDNODES),
                      value: isClean ? cleanChildNodes : rerenderChildNodes
                    });
                  }
                },
                {
                  key: '_root',
                  get: function get() {
                    var _a;
                    return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
                  }
                },
                {
                  key: 'findIndex',
                  value: function findIndex(refChild) {
                    var index = this.childNodes.indexOf(refChild);
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* ensure */ 'd'])(
                      index !== -1,
                      'The node to be replaced is not a child of this node.'
                    );
                    return index;
                  }
                },
                {
                  key: '_path',
                  get: function get() {
                    var parentNode = this.parentNode;
                    if (parentNode) {
                      // 计算路径时，先过滤掉 comment 节点
                      var list = parentNode.childNodes.filter(function (node) {
                        return !isComment(node);
                      });
                      var indexOfNode = list.indexOf(this);
                      var index = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                        'getPathIndex',
                        indexOfNode
                      );
                      return ''.concat(parentNode._path, '.').concat(CHILDNODES, '.').concat(index);
                    }
                    return '';
                  }
                },
                {
                  key: 'nextSibling',
                  get: function get() {
                    var parentNode = this.parentNode;
                    return (
                      (parentNode === null || parentNode === void 0
                        ? void 0
                        : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null
                    );
                  }
                },
                {
                  key: 'previousSibling',
                  get: function get() {
                    var parentNode = this.parentNode;
                    return (
                      (parentNode === null || parentNode === void 0
                        ? void 0
                        : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null
                    );
                  }
                },
                {
                  key: 'parentElement',
                  get: function get() {
                    var parentNode = this.parentNode;
                    if (
                      (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) ===
                      1 /* NodeType.ELEMENT_NODE */
                    ) {
                      return parentNode;
                    }
                    return null;
                  }
                },
                {
                  key: 'firstChild',
                  get: function get() {
                    return this.childNodes[0] || null;
                  }
                },
                {
                  key: 'lastChild',
                  get: function get() {
                    var childNodes = this.childNodes;
                    return childNodes[childNodes.length - 1] || null;
                  }
                  /**
                   * @textContent 目前只能置空子元素
                   * @TODO 等待完整 innerHTML 实现
                   */
                  // eslint-disable-next-line accessor-pairs
                },
                {
                  key: 'textContent',
                  set: function set(text) {
                    var removedNodes = this.childNodes.slice();
                    var addedNodes = [];
                    // Handle old children' data structure & ref
                    while (this.firstChild) {
                      this.removeChild(this.firstChild, {
                        doUpdate: false
                      });
                    }
                    if (text === '') {
                      this.updateChildNodes(true);
                    } else {
                      var newText = env.document.createTextNode(text);
                      addedNodes.push(newText);
                      this.appendChild(newText);
                      this.updateChildNodes();
                    }
                    // @Todo: appendChild 会多触发一次
                    MutationObserver.record({
                      type: 'childList' /* MutationRecordType.CHILD_LIST */,
                      target: this,
                      removedNodes: removedNodes,
                      addedNodes: addedNodes
                    });
                  }
                  /**
                   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
                   * @scenario
                   * [A,B,C]
                   *   1. insert D before C, D has no parent
                   *   2. insert D before C, D has the same parent of C
                   *   3. insert D before C, D has the different parent of C
                   */
                },
                {
                  key: 'insertBefore',
                  value: function insertBefore(newChild, refChild, isReplace) {
                    var _this5 = this;
                    if (newChild.nodeName === DOCUMENT_FRAGMENT) {
                      newChild.childNodes.reduceRight(function (previousValue, currentValue) {
                        _this5.insertBefore(currentValue, previousValue);
                        return currentValue;
                      }, refChild);
                      return newChild;
                    }
                    // Parent release newChild
                    //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
                    //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
                    newChild.remove({
                      cleanRef: false
                    });
                    // Data structure
                    newChild.parentNode = this;
                    if (refChild) {
                      // insertBefore & replaceChild
                      var index = this.findIndex(refChild);
                      this.childNodes.splice(index, 0, newChild);
                    } else {
                      // appendChild
                      this.childNodes.push(newChild);
                    }
                    // Serialization
                    if (this._root) {
                      if (!refChild) {
                        // appendChild
                        var isOnlyChild = this.childNodes.length === 1;
                        if (isOnlyChild) {
                          this.updateChildNodes();
                        } else {
                          this.enqueueUpdate({
                            path: newChild._path,
                            value: this.hydrate(newChild)
                          });
                        }
                      } else if (isReplace) {
                        // replaceChild
                        this.enqueueUpdate({
                          path: newChild._path,
                          value: this.hydrate(newChild)
                        });
                      } else {
                        // insertBefore
                        this.updateChildNodes();
                      }
                    }
                    MutationObserver.record({
                      type: 'childList' /* MutationRecordType.CHILD_LIST */,
                      target: this,
                      addedNodes: [newChild],
                      removedNodes: isReplace ? [refChild] /** replaceChild */ : [],
                      nextSibling: isReplace ? refChild.nextSibling /** replaceChild */ : refChild || null,
                      previousSibling: newChild.previousSibling
                    });
                    return newChild;
                  }
                  /**
                   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
                   * @scenario
                   * [A,B,C]
                   *   1. append C, C has no parent
                   *   2. append C, C has the same parent of B
                   *   3. append C, C has the different parent of B
                   */
                },
                {
                  key: 'appendChild',
                  value: function appendChild(newChild) {
                    return this.insertBefore(newChild);
                  }
                  /**
                   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
                   * @scenario
                   * [A,B,C]
                   *   1. replace B with C, C has no parent
                   *   2. replace B with C, C has no parent, C has the same parent of B
                   *   3. replace B with C, C has no parent, C has the different parent of B
                   */
                },
                {
                  key: 'replaceChild',
                  value: function replaceChild(newChild, oldChild) {
                    if (oldChild.parentNode !== this) return;
                    // Insert the newChild
                    this.insertBefore(newChild, oldChild, true);
                    // Destroy the oldChild
                    //   - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
                    //   - update: false (No need to update parent.childNodes, because replace will not cause the parent.childNodes being reordered)
                    oldChild.remove({
                      doUpdate: false
                    });
                    return oldChild;
                  }
                  /**
                   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
                   * @scenario
                   * [A,B,C]
                   *   1. remove A or B
                   *   2. remove C
                   */
                },
                {
                  key: 'removeChild',
                  value: function removeChild(child) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var cleanRef = options.cleanRef,
                      doUpdate = options.doUpdate;
                    if (cleanRef !== false && doUpdate !== false) {
                      // appendChild/replaceChild/insertBefore 不应该触发
                      // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
                      MutationObserver.record({
                        type: 'childList' /* MutationRecordType.CHILD_LIST */,
                        target: this,
                        removedNodes: [child],
                        nextSibling: child.nextSibling,
                        previousSibling: child.previousSibling
                      });
                    }
                    // Data Structure
                    var index = this.findIndex(child);
                    this.childNodes.splice(index, 1);
                    child.parentNode = null;
                    // Set eventSource
                    if (cleanRef !== false) {
                      eventSource.removeNodeTree(child);
                    }
                    // Serialization
                    if (this._root && doUpdate !== false) {
                      this.updateChildNodes();
                    }
                    return child;
                  }
                },
                {
                  key: 'remove',
                  value: function remove(options) {
                    var _a;
                    (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
                  }
                },
                {
                  key: 'hasChildNodes',
                  value: function hasChildNodes() {
                    return this.childNodes.length > 0;
                  }
                },
                {
                  key: 'enqueueUpdate',
                  value: function enqueueUpdate(payload) {
                    var _a;
                    (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
                  }
                },
                {
                  key: 'ownerDocument',
                  get: function get() {
                    return env.document;
                  }
                }
              ],
              [
                {
                  key: 'extend',
                  value: function extend(methodName, options) {
                    _extend(TaroNode, methodName, options);
                  }
                }
              ]
            );
            return TaroNode;
          })(TaroEventTarget);
          /*
           *
           * https://www.w3.org/Style/CSS/all-properties.en.html
           */
          var WEBKIT = 'webkit';
          var styleProperties = [
            'all',
            'appearance',
            'blockOverflow',
            'blockSize',
            'bottom',
            'clear',
            'contain',
            'content',
            'continue',
            'cursor',
            'direction',
            'display',
            'filter',
            'float',
            'gap',
            'height',
            'inset',
            'isolation',
            'left',
            'letterSpacing',
            'lightingColor',
            'markerSide',
            'mixBlendMode',
            'opacity',
            'order',
            'position',
            'quotes',
            'resize',
            'right',
            'rowGap',
            'tabSize',
            'tableLayout',
            'top',
            'userSelect',
            'verticalAlign',
            'visibility',
            'voiceFamily',
            'volume',
            'whiteSpace',
            'widows',
            'width',
            'zIndex',
            'pointerEvents'
            /** 非常用 style */
            // 'azimuth',
            // 'backfaceVisibility',
            // 'baselineShift',
            // 'captionSide',
            // 'chains',
            // 'dominantBaseline',
            // 'elevation',
            // 'emptyCells',
            // 'forcedColorAdjust',
            // 'glyphOrientationVertical',
            // 'hangingPunctuation',
            // 'hyphenateCharacter',
            // 'hyphens',
            // 'imageOrientation',
            // 'imageResolution',
            // 'orphans',
            // 'playDuring',
            // 'pointerEvents',
            // 'regionFragment',
            // 'richness',
            // 'running',
            // 'scrollBehavior',
            // 'speechRate',
            // 'stress',
            // 'stringSet',
            // 'unicodeBidi',
            // 'willChange',
            // 'writingMode',
          ];
          // 减少文件体积
          function combine(prefix, list, excludeSelf) {
            !excludeSelf && styleProperties.push(prefix);
            list.forEach(function (item) {
              styleProperties.push(prefix + item);
              if (prefix === WEBKIT) {
                styleProperties.push('Webkit' + item);
              }
            });
          }
          var color = 'Color';
          var style = 'Style';
          var width = 'Width';
          var image = 'Image';
          var size = 'Size';
          var color_style_width = [color, style, width];
          var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
          var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ['Radius']);
          var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
          var endRadius_startRadius = ['EndRadius', 'StartRadius'];
          var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
          var end_start = ['End', 'Start'];
          var content_items_self = ['Content', 'Items', 'Self'];
          var blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
          var after_before = ['After', 'Before'];
          combine('borderBlock', color_style_width);
          combine('borderBlockEnd', color_style_width);
          combine('borderBlockStart', color_style_width);
          combine('outline', [].concat(color_style_width, ['Offset']));
          combine('border', [].concat(color_style_width, ['Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']));
          combine('borderFit', ['Length', width]);
          combine('borderInline', color_style_width);
          combine('borderInlineEnd', color_style_width);
          combine('borderInlineStart', color_style_width);
          combine('borderLeft', color_style_width_fitlength_fitwidth_image);
          combine('borderRight', color_style_width_fitlength_fitwidth_image);
          combine('borderTop', color_style_width_fitlength_fitwidth_image);
          combine('borderBottom', color_style_width_fitlength_fitwidth_image);
          combine('textDecoration', [color, style, 'Line']);
          combine('textEmphasis', [color, style, 'Position']);
          combine('scrollMargin', bottom_left_right_top);
          combine('scrollPadding', bottom_left_right_top);
          combine('padding', bottom_left_right_top);
          combine('margin', [].concat(bottom_left_right_top, ['Trim']));
          combine('scrollMarginBlock', end_start);
          combine('scrollMarginInline', end_start);
          combine('scrollPaddingBlock', end_start);
          combine('scrollPaddingInline', end_start);
          combine('gridColumn', end_start);
          combine('gridRow', end_start);
          combine('insetBlock', end_start);
          combine('insetInline', end_start);
          combine('marginBlock', end_start);
          combine('marginInline', end_start);
          combine('paddingBlock', end_start);
          combine('paddingInline', end_start);
          combine('pause', after_before);
          combine('cue', after_before);
          combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
          combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
          combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
          combine('font', [
            'Family',
            'FeatureSettings',
            'Kerning',
            'LanguageOverride',
            'MaxSize',
            'MinSize',
            'OpticalSizing',
            'Palette',
            size,
            'SizeAdjust',
            'Stretch',
            style,
            'Weight',
            'VariationSettings'
          ]);
          combine('transform', ['Box', 'Origin', style]);
          combine('background', [
            color,
            image,
            'Attachment',
            'BlendMode',
            'Clip',
            'Origin',
            'Position',
            'Repeat',
            size
          ]);
          combine('listStyle', [image, 'Position', 'Type']);
          combine('scrollSnap', ['Align', 'Stop', 'Type']);
          combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
          combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
          combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
          combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
          combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
          combine('textAlign', ['All', 'Last']);
          combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
          combine('animation', [
            'Delay',
            'Direction',
            'Duration',
            'FillMode',
            'IterationCount',
            'Name',
            'PlayState',
            'TimingFunction'
          ]);
          combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
          combine('offset', [].concat(after_before, end_start, ['Anchor', 'Distance', 'Path', 'Position', 'Rotate']));
          combine('perspective', ['Origin']);
          combine('clip', ['Path', 'Rule']);
          combine('flow', ['From', 'Into']);
          combine('align', ['Content', 'Items', 'Self'], true);
          combine('alignment', ['Adjust', 'Baseline'], true);
          combine('borderStart', endRadius_startRadius, true);
          combine('borderEnd', endRadius_startRadius, true);
          combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
          combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
          combine('borderTopRight', fitlength_fitwidth_image_radius, true);
          combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
          combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
          combine(
            'column',
            ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width],
            true
          );
          combine('break', [].concat(after_before, ['Inside']), true);
          combine('wrap', [].concat(after_before, ['Flow', 'Inside', 'Through']), true);
          combine('justify', content_items_self, true);
          combine('place', content_items_self, true);
          combine('max', [].concat(blockSize_height_inlineSize_width, ['Lines']), true);
          combine('min', blockSize_height_inlineSize_width, true);
          combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
          combine('inline', ['BoxAlign', size, 'Sizing'], true);
          combine(
            'text',
            [
              'CombineUpright',
              'GroupAlign',
              'Height',
              'Indent',
              'Justify',
              'Orientation',
              'Overflow',
              'Shadow',
              'SpaceCollapse',
              'SpaceTrim',
              'Spacing',
              'Transform',
              'UnderlinePosition',
              'Wrap'
            ],
            true
          );
          combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
          combine('word', ['Break', 'Spacing', 'Wrap'], true);
          combine('object', ['Fit', 'Position'], true);
          combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
          combine(
            WEBKIT,
            ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'],
            true
          );
          function recordCss(obj) {
            MutationObserver.record({
              type: 'attributes' /* MutationRecordType.ATTRIBUTES */,
              target: obj._element,
              attributeName: 'style',
              oldValue: obj.cssText
            });
          }
          function enqueueUpdate(obj) {
            var element = obj._element;
            if (element._root) {
              element.enqueueUpdate({
                path: ''.concat(element._path, '.', 'st' /* Shortcuts.Style */),
                value: obj.cssText
              });
            }
          }
          function setStyle(newVal, styleKey) {
            true &&
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* warn */ 's'])(
                Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(newVal) &&
                  newVal.length > PROPERTY_THRESHOLD,
                'Style \u5C5E\u6027 '.concat(
                  styleKey,
                  ' \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002'
                )
              );
            var old = this[styleKey];
            if (old === newVal) return;
            !this._pending && recordCss(this);
            if (
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isNull */ 'j'])(newVal) ||
              Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(newVal)
            ) {
              this._usedStyleProp.delete(styleKey);
              delete this._value[styleKey];
            } else {
              this._usedStyleProp.add(styleKey);
              this._value[styleKey] = newVal;
            }
            !this._pending && enqueueUpdate(this);
          }
          function initStyle(ctor) {
            var properties = {};
            var _loop = function _loop(i) {
              var styleKey = styleProperties[i];
              properties[styleKey] = {
                get: function get() {
                  var val = this._value[styleKey];
                  return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isNull */ 'j'])(val) ||
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(val)
                    ? ''
                    : val;
                },
                set: function set(newVal) {
                  setStyle.call(this, newVal, styleKey);
                }
              };
            };
            for (var i = 0; i < styleProperties.length; i++) {
              _loop(i);
            }
            Object.defineProperties(ctor.prototype, properties);
          }
          function isCssVariable(propertyName) {
            return /^--/.test(propertyName);
          }
          var Style = /*#__PURE__*/ (function () {
            function Style(element) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, Style);
              this._element = element;
              this._usedStyleProp = new Set();
              this._value = {};
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(Style, [
              {
                key: 'setCssVariables',
                value: function setCssVariables(styleKey) {
                  var _this6 = this;
                  this.hasOwnProperty(styleKey) ||
                    Object.defineProperty(this, styleKey, {
                      enumerable: true,
                      configurable: true,
                      get: function get() {
                        return _this6._value[styleKey] || '';
                      },
                      set: function set(newVal) {
                        setStyle.call(_this6, newVal, styleKey);
                      }
                    });
                }
              },
              {
                key: 'cssText',
                get: function get() {
                  var _this7 = this;
                  if (!this._usedStyleProp.size) return '';
                  var texts = [];
                  this._usedStyleProp.forEach(function (key) {
                    var val = _this7[key];
                    if (
                      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isNull */ 'j'])(val) ||
                      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(val)
                    )
                      return;
                    var styleName = isCssVariable(key)
                      ? key
                      : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toDashed */ 'r'])(key);
                    if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
                      styleName = '-'.concat(styleName);
                    }
                    texts.push(''.concat(styleName, ': ').concat(val, ';'));
                  });
                  return texts.join(' ');
                },
                set: function set(str) {
                  var _this8 = this;
                  this._pending = true;
                  recordCss(this);
                  this._usedStyleProp.forEach(function (prop) {
                    _this8.removeProperty(prop);
                  });
                  if (
                    str === '' ||
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(str) ||
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isNull */ 'j'])(str)
                  ) {
                    this._pending = false;
                    enqueueUpdate(this);
                    return;
                  }
                  var rules = str.split(';');
                  for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i].trim();
                    if (rule === '') {
                      continue;
                    }
                    // 可能存在 'background: url(http:x/y/z)' 的情况
                    var _rule$split = rule.split(':'),
                      _rule$split2 = Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_5__[
                          /* default */ 'a'
                        ]
                      )(_rule$split),
                      propName = _rule$split2[0],
                      valList = _rule$split2.slice(1);
                    var val = valList.join(':');
                    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(val)) {
                      continue;
                    }
                    this.setProperty(propName.trim(), val.trim());
                  }
                  this._pending = false;
                  enqueueUpdate(this);
                }
              },
              {
                key: 'setProperty',
                value: function setProperty(propertyName, value) {
                  if (propertyName[0] === '-') {
                    // 支持 webkit 属性或 css 变量
                    this.setCssVariables(propertyName);
                  } else {
                    propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                      propertyName
                    );
                  }
                  if (
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isNull */ 'j'])(value) ||
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(value)
                  ) {
                    this.removeProperty(propertyName);
                  } else {
                    this[propertyName] = value;
                  }
                }
              },
              {
                key: 'removeProperty',
                value: function removeProperty(propertyName) {
                  propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                    propertyName
                  );
                  if (!this._usedStyleProp.has(propertyName)) {
                    return '';
                  }
                  var value = this[propertyName];
                  this[propertyName] = undefined;
                  return value;
                }
              },
              {
                key: 'getPropertyValue',
                value: function getPropertyValue(propertyName) {
                  propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                    propertyName
                  );
                  var value = this[propertyName];
                  if (!value) {
                    return '';
                  }
                  return value;
                }
              }
            ]);
            return Style;
          })();
          initStyle(Style);
          function returnTrue() {
            return true;
          }
          function treeToArray(root, predict) {
            var array = [];
            var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
            var object = root;
            while (object) {
              if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
                array.push(object);
              }
              object = following(object, root);
            }
            return array;
          }
          function following(el, root) {
            var firstChild = el.firstChild;
            if (firstChild) {
              return firstChild;
            }
            var current = el;
            do {
              if (current === root) {
                return null;
              }
              var nextSibling = current.nextSibling;
              if (nextSibling) {
                return nextSibling;
              }
              current = current.parentElement;
            } while (current);
            return null;
          }
          var TaroElement = /*#__PURE__*/ (function (_TaroNode) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroElement, _TaroNode);
            var _super4 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroElement);
            function TaroElement() {
              var _this9;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroElement);
              _this9 = _super4.call(this);
              _this9.props = {};
              _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a'];
              _this9.nodeType = 1 /* NodeType.ELEMENT_NODE */;
              _this9.style = new Style(
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                    /* default */ 'a'
                  ]
                )(_this9)
              );
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                'patchElement',
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                    /* default */ 'a'
                  ]
                )(_this9)
              );
              return _this9;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(
              TaroElement,
              [
                {
                  key: '_stopPropagation',
                  value: function _stopPropagation(event) {
                    // eslint-disable-next-line @typescript-eslint/no-this-alias
                    var target = this;
                    // eslint-disable-next-line no-cond-assign
                    while ((target = target.parentNode)) {
                      var listeners = target.__handlers[event.type];
                      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isArray */ 'h'])(listeners)) {
                        continue;
                      }
                      for (var i = listeners.length; i--; ) {
                        var l = listeners[i];
                        l._stop = true;
                      }
                    }
                  }
                },
                {
                  key: 'id',
                  get: function get() {
                    return this.getAttribute(ID);
                  },
                  set: function set(val) {
                    this.setAttribute(ID, val);
                  }
                },
                {
                  key: 'className',
                  get: function get() {
                    return this.getAttribute(CLASS) || '';
                  },
                  set: function set(val) {
                    this.setAttribute(CLASS, val);
                  }
                },
                {
                  key: 'cssText',
                  get: function get() {
                    return this.getAttribute(STYLE) || '';
                  }
                },
                {
                  key: 'classList',
                  get: function get() {
                    return new ClassList(this.className, this);
                  }
                },
                {
                  key: 'children',
                  get: function get() {
                    return this.childNodes.filter(isElement);
                  }
                },
                {
                  key: 'attributes',
                  get: function get() {
                    var props = this.props;
                    var propKeys = Object.keys(props);
                    var style = this.style.cssText;
                    var attrs = propKeys.map(function (key) {
                      return {
                        name: key,
                        value: props[key]
                      };
                    });
                    return attrs.concat(
                      style
                        ? {
                            name: STYLE,
                            value: style
                          }
                        : []
                    );
                  }
                },
                {
                  key: 'textContent',
                  get: function get() {
                    var text = '';
                    var childNodes = this.childNodes;
                    for (var i = 0; i < childNodes.length; i++) {
                      text += childNodes[i].textContent;
                    }
                    return text;
                  },
                  set: function set(text) {
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_set_js__WEBPACK_IMPORTED_MODULE_4__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(TaroElement.prototype),
                      'textContent',
                      text,
                      this,
                      true
                    );
                  }
                },
                {
                  key: 'hasAttribute',
                  value: function hasAttribute(qualifiedName) {
                    return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(
                      this.props[qualifiedName]
                    );
                  }
                },
                {
                  key: 'hasAttributes',
                  value: function hasAttributes() {
                    return this.attributes.length > 0;
                  }
                },
                {
                  key: 'focus',
                  get: function get() {
                    return function () {
                      this.setAttribute(FOCUS, true);
                    };
                  },
                  // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
                  set: function set(value) {
                    this.setAttribute(FOCUS, value);
                  }
                },
                {
                  key: 'blur',
                  value: function blur() {
                    this.setAttribute(FOCUS, false);
                  }
                },
                {
                  key: 'setAttribute',
                  value: function setAttribute(qualifiedName, value) {
                    true &&
                      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* warn */ 's'])(
                        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(value) &&
                          value.length > PROPERTY_THRESHOLD,
                        '\u5143\u7D20 '
                          .concat(this.nodeName, ' \u7684 ')
                          .concat(
                            qualifiedName,
                            ' \u5C5E\u6027\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002'
                          )
                      );
                    var isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
                    if (qualifiedName !== STYLE) {
                      MutationObserver.record({
                        target: this,
                        type: 'attributes' /* MutationRecordType.ATTRIBUTES */,
                        attributeName: qualifiedName,
                        oldValue: this.getAttribute(qualifiedName)
                      });
                    }
                    switch (qualifiedName) {
                      case STYLE:
                        this.style.cssText = value;
                        break;
                      case ID:
                        if (this.uid !== this.sid) {
                          // eventSource[sid] 永远保留，直到组件卸载
                          // eventSource[uid] 可变
                          eventSource.delete(this.uid);
                        }
                        value = String(value);
                        this.props[qualifiedName] = this.uid = value;
                        eventSource.set(value, this);
                        break;
                      default:
                        this.props[qualifiedName] = value;
                        if (qualifiedName.startsWith('data-')) {
                          if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a']) {
                            this.dataset = Object.create(null);
                          }
                          this.dataset[
                            Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                              qualifiedName.replace(/^data-/, '')
                            )
                          ] = value;
                        }
                        break;
                    }
                    // Serialization
                    if (!this._root) return;
                    var componentsAlias = getComponentsAlias();
                    var _alias = componentsAlias[this.nodeName];
                    var viewAlias = componentsAlias[VIEW]._num;
                    var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
                    var catchViewAlias = componentsAlias[CATCH_VIEW]._num;
                    var _path = this._path;
                    qualifiedName = shortcutAttr(qualifiedName);
                    var qualifiedNameInCamelCase = Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q']
                    )(qualifiedName);
                    var payload = {
                      path: ''.concat(_path, '.').concat(qualifiedNameInCamelCase),
                      value: Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(value)
                        ? function () {
                            return value;
                          }
                        : value
                    };
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                      'modifySetAttrPayload',
                      this,
                      qualifiedName,
                      payload,
                      componentsAlias
                    );
                    if (_alias) {
                      var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
                      payload.path = ''
                        .concat(_path, '.')
                        .concat(
                          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                            qualifiedNameAlias
                          )
                        );
                    }
                    this.enqueueUpdate(payload);
                    if (this.nodeName === VIEW) {
                      if (qualifiedNameInCamelCase === CATCHMOVE) {
                        // catchMove = true: catch-view
                        // catchMove = false: view or static-view
                        this.enqueueUpdate({
                          path: ''.concat(_path, '.', 'nn' /* Shortcuts.NodeName */),
                          value: value ? catchViewAlias : this.isAnyEventBinded() ? viewAlias : staticViewAlias
                        });
                      } else if (isPureView && isHasExtractProp(this)) {
                        // pure-view => static-view
                        this.enqueueUpdate({
                          path: ''.concat(_path, '.', 'nn' /* Shortcuts.NodeName */),
                          value: staticViewAlias
                        });
                      }
                    }
                  }
                },
                {
                  key: 'removeAttribute',
                  value: function removeAttribute(qualifiedName) {
                    var isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
                    MutationObserver.record({
                      target: this,
                      type: 'attributes' /* MutationRecordType.ATTRIBUTES */,
                      attributeName: qualifiedName,
                      oldValue: this.getAttribute(qualifiedName)
                    });
                    if (qualifiedName === STYLE) {
                      this.style.cssText = '';
                    } else {
                      var isInterrupt = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                        'onRemoveAttribute',
                        this,
                        qualifiedName
                      );
                      if (isInterrupt) {
                        return;
                      }
                      if (!this.props.hasOwnProperty(qualifiedName)) {
                        return;
                      }
                      delete this.props[qualifiedName];
                    }
                    // Serialization
                    if (!this._root) return;
                    var componentsAlias = getComponentsAlias();
                    var _alias = componentsAlias[this.nodeName];
                    var viewAlias = componentsAlias[VIEW]._num;
                    var staticViewAlias = componentsAlias[STATIC_VIEW]._num;
                    var pureViewAlias = componentsAlias[PURE_VIEW]._num;
                    var _path = this._path;
                    qualifiedName = shortcutAttr(qualifiedName);
                    var qualifiedNameInCamelCase = Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q']
                    )(qualifiedName);
                    var payload = {
                      path: ''.concat(_path, '.').concat(qualifiedNameInCamelCase),
                      value: ''
                    };
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                      'modifyRmAttrPayload',
                      this,
                      qualifiedName,
                      payload,
                      componentsAlias
                    );
                    if (_alias) {
                      var qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
                      payload.path = ''
                        .concat(_path, '.')
                        .concat(
                          Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* toCamelCase */ 'q'])(
                            qualifiedNameAlias
                          )
                        );
                    }
                    this.enqueueUpdate(payload);
                    if (this.nodeName === VIEW) {
                      if (qualifiedNameInCamelCase === CATCHMOVE) {
                        // catch-view => view or static-view or pure-view
                        this.enqueueUpdate({
                          path: ''.concat(_path, '.', 'nn' /* Shortcuts.NodeName */),
                          value: this.isAnyEventBinded()
                            ? viewAlias
                            : isHasExtractProp(this)
                            ? staticViewAlias
                            : pureViewAlias
                        });
                      } else if (isStaticView && !isHasExtractProp(this)) {
                        // static-view => pure-view
                        this.enqueueUpdate({
                          path: ''.concat(_path, '.', 'nn' /* Shortcuts.NodeName */),
                          value: pureViewAlias
                        });
                      }
                    }
                  }
                },
                {
                  key: 'getAttribute',
                  value: function getAttribute(qualifiedName) {
                    var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
                    return attr !== null && attr !== void 0 ? attr : '';
                  }
                },
                {
                  key: 'getElementsByTagName',
                  value: function getElementsByTagName(tagName) {
                    var _this10 = this;
                    return treeToArray(this, function (el) {
                      return el.nodeName === tagName || (tagName === '*' && _this10 !== el);
                    });
                  }
                },
                {
                  key: 'getElementsByClassName',
                  value: function getElementsByClassName(className) {
                    return treeToArray(this, function (el) {
                      var classList = el.classList;
                      var classNames = className.trim().split(/\s+/);
                      return classNames.every(function (c) {
                        return classList.has(c);
                      });
                    });
                  }
                },
                {
                  key: 'dispatchEvent',
                  value: function dispatchEvent(event) {
                    var cancelable = event.cancelable;
                    var listeners = this.__handlers[event.type];
                    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isArray */ 'h'])(listeners)) {
                      return false;
                    }
                    for (var i = listeners.length; i--; ) {
                      var listener = listeners[i];
                      var result = void 0;
                      if (listener._stop) {
                        listener._stop = false;
                      } else {
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                          'modifyDispatchEvent',
                          event,
                          this
                        );
                        result = listener.call(this, event);
                      }
                      if ((result === false || event._end) && cancelable) {
                        event.defaultPrevented = true;
                      }
                      if (event._end && event._stop) {
                        break;
                      }
                    }
                    if (event._stop) {
                      this._stopPropagation(event);
                    } else {
                      event._stop = true;
                    }
                    return listeners != null;
                  }
                },
                {
                  key: 'addEventListener',
                  value: function addEventListener(type, handler, options) {
                    var name = this.nodeName;
                    var SPECIAL_NODES =
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getSpecialNodes');
                    var sideEffect = true;
                    if (
                      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isObject */ 'k'])(options) &&
                      options.sideEffect === false
                    ) {
                      sideEffect = false;
                      delete options.sideEffect;
                    }
                    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
                      var _componentsAlias = getComponentsAlias();
                      var alias = _componentsAlias[name]._num;
                      this.enqueueUpdate({
                        path: ''.concat(this._path, '.', 'nn' /* Shortcuts.NodeName */),
                        value: alias
                      });
                    }
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(TaroElement.prototype),
                      'addEventListener',
                      this
                    ).call(this, type, handler, options);
                  }
                },
                {
                  key: 'removeEventListener',
                  value: function removeEventListener(type, handler) {
                    var sideEffect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                          /* default */ 'a'
                        ]
                      )(TaroElement.prototype),
                      'removeEventListener',
                      this
                    ).call(this, type, handler);
                    var name = this.nodeName;
                    var SPECIAL_NODES =
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getSpecialNodes');
                    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
                      var _componentsAlias2 = getComponentsAlias();
                      var value = isHasExtractProp(this) ? 'static-'.concat(name) : 'pure-'.concat(name);
                      var valueAlias = _componentsAlias2[value]._num;
                      this.enqueueUpdate({
                        path: ''.concat(this._path, '.', 'nn' /* Shortcuts.NodeName */),
                        value: valueAlias
                      });
                    }
                  }
                }
              ],
              [
                {
                  key: 'extend',
                  value: function extend(methodName, options) {
                    _extend(TaroElement, methodName, options);
                  }
                }
              ]
            );
            return TaroElement;
          })(TaroNode);
          var options = {
            prerender: true,
            debug: false
          };
          function initPosition() {
            return {
              index: 0,
              column: 0,
              line: 0
            };
          }
          function feedPosition(position, str, len) {
            var start = position.index;
            var end = (position.index = start + len);
            for (var i = start; i < end; i++) {
              var _char = str.charAt(i);
              if (_char === '\n') {
                position.line++;
                position.column = 0;
              } else {
                position.column++;
              }
            }
          }
          function jumpPosition(position, str, end) {
            var len = end - position.index;
            return feedPosition(position, str, len);
          }
          function copyPosition(position) {
            return {
              index: position.index,
              line: position.line,
              column: position.column
            };
          }
          var whitespace = /\s/;
          function isWhitespaceChar(_char2) {
            return whitespace.test(_char2);
          }
          var equalSign = /=/;
          function isEqualSignChar(_char3) {
            return equalSign.test(_char3);
          }
          function shouldBeIgnore(tagName) {
            var name = tagName.toLowerCase();
            if (options.html.skipElements.has(name)) {
              return true;
            }
            return false;
          }
          var alphanumeric = /[A-Za-z0-9]/;
          function findTextEnd(str, index) {
            while (true) {
              var textEnd = str.indexOf('<', index);
              if (textEnd === -1) {
                return textEnd;
              }
              var _char4 = str.charAt(textEnd + 1);
              if (_char4 === '/' || _char4 === '!' || alphanumeric.test(_char4)) {
                return textEnd;
              }
              index = textEnd + 1;
            }
          }
          function isWordEnd(cursor, wordBegin, html) {
            if (!isWhitespaceChar(html.charAt(cursor))) return false;
            var len = html.length;
            // backwrad
            for (var i = cursor - 1; i > wordBegin; i--) {
              var _char5 = html.charAt(i);
              if (!isWhitespaceChar(_char5)) {
                if (isEqualSignChar(_char5)) return false;
                break;
              }
            }
            // forward
            for (var _i2 = cursor + 1; _i2 < len; _i2++) {
              var _char6 = html.charAt(_i2);
              if (!isWhitespaceChar(_char6)) {
                if (isEqualSignChar(_char6)) return false;
                return true;
              }
            }
          }
          var Scaner = /*#__PURE__*/ (function () {
            function Scaner(html) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, Scaner);
              this.tokens = [];
              this.position = initPosition();
              this.html = html;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(Scaner, [
              {
                key: 'scan',
                value: function scan() {
                  var html = this.html,
                    position = this.position;
                  var len = html.length;
                  while (position.index < len) {
                    var start = position.index;
                    this.scanText();
                    if (position.index === start) {
                      var _isComment = html.startsWith('!--', start + 1);
                      if (_isComment) {
                        this.scanComment();
                      } else {
                        var tagName = this.scanTag();
                        if (shouldBeIgnore(tagName)) {
                          this.scanSkipTag(tagName);
                        }
                      }
                    }
                  }
                  return this.tokens;
                }
              },
              {
                key: 'scanText',
                value: function scanText() {
                  var type = 'text';
                  var html = this.html,
                    position = this.position;
                  var textEnd = findTextEnd(html, position.index);
                  if (textEnd === position.index) {
                    return;
                  }
                  if (textEnd === -1) {
                    textEnd = html.length;
                  }
                  var start = copyPosition(position);
                  var content = html.slice(position.index, textEnd);
                  jumpPosition(position, html, textEnd);
                  var end = copyPosition(position);
                  this.tokens.push({
                    type: type,
                    content: content,
                    position: {
                      start: start,
                      end: end
                    }
                  });
                }
              },
              {
                key: 'scanComment',
                value: function scanComment() {
                  var type = 'comment';
                  var html = this.html,
                    position = this.position;
                  var start = copyPosition(position);
                  feedPosition(position, html, 4); // "<!--".length
                  var contentEnd = html.indexOf('-->', position.index);
                  var commentEnd = contentEnd + 3; // "-->".length
                  if (contentEnd === -1) {
                    contentEnd = commentEnd = html.length;
                  }
                  var content = html.slice(position.index, contentEnd);
                  jumpPosition(position, html, commentEnd);
                  this.tokens.push({
                    type: type,
                    content: content,
                    position: {
                      start: start,
                      end: copyPosition(position)
                    }
                  });
                }
              },
              {
                key: 'scanTag',
                value: function scanTag() {
                  this.scanTagStart();
                  var tagName = this.scanTagName();
                  this.scanAttrs();
                  this.scanTagEnd();
                  return tagName;
                }
              },
              {
                key: 'scanTagStart',
                value: function scanTagStart() {
                  var type = 'tag-start';
                  var html = this.html,
                    position = this.position;
                  var secondChar = html.charAt(position.index + 1);
                  var close = secondChar === '/';
                  var start = copyPosition(position);
                  feedPosition(position, html, close ? 2 : 1);
                  this.tokens.push({
                    type: type,
                    close: close,
                    position: {
                      start: start
                    }
                  });
                }
              },
              {
                key: 'scanTagEnd',
                value: function scanTagEnd() {
                  var type = 'tag-end';
                  var html = this.html,
                    position = this.position;
                  var firstChar = html.charAt(position.index);
                  var close = firstChar === '/';
                  feedPosition(position, html, close ? 2 : 1);
                  var end = copyPosition(position);
                  this.tokens.push({
                    type: type,
                    close: close,
                    position: {
                      end: end
                    }
                  });
                }
              },
              {
                key: 'scanTagName',
                value: function scanTagName() {
                  var type = 'tag';
                  var html = this.html,
                    position = this.position;
                  var len = html.length;
                  var start = position.index;
                  while (start < len) {
                    var _char7 = html.charAt(start);
                    var isTagChar = !(isWhitespaceChar(_char7) || _char7 === '/' || _char7 === '>');
                    if (isTagChar) break;
                    start++;
                  }
                  var end = start + 1;
                  while (end < len) {
                    var _char8 = html.charAt(end);
                    var _isTagChar = !(isWhitespaceChar(_char8) || _char8 === '/' || _char8 === '>');
                    if (!_isTagChar) break;
                    end++;
                  }
                  jumpPosition(position, html, end);
                  var tagName = html.slice(start, end);
                  this.tokens.push({
                    type: type,
                    content: tagName
                  });
                  return tagName;
                }
              },
              {
                key: 'scanAttrs',
                value: function scanAttrs() {
                  var html = this.html,
                    position = this.position,
                    tokens = this.tokens;
                  var cursor = position.index;
                  var quote = null; // null, single-, or double-quote
                  var wordBegin = cursor; // index of word start
                  var words = []; // "key", "key=value", "key='value'", etc
                  var len = html.length;
                  while (cursor < len) {
                    var _char9 = html.charAt(cursor);
                    if (quote) {
                      var isQuoteEnd = _char9 === quote;
                      if (isQuoteEnd) {
                        quote = null;
                      }
                      cursor++;
                      continue;
                    }
                    var isTagEnd = _char9 === '/' || _char9 === '>';
                    if (isTagEnd) {
                      if (cursor !== wordBegin) {
                        words.push(html.slice(wordBegin, cursor));
                      }
                      break;
                    }
                    if (isWordEnd(cursor, wordBegin, html)) {
                      if (cursor !== wordBegin) {
                        words.push(html.slice(wordBegin, cursor));
                      }
                      wordBegin = cursor + 1;
                      cursor++;
                      continue;
                    }
                    var isQuoteStart = _char9 === "'" || _char9 === '"';
                    if (isQuoteStart) {
                      quote = _char9;
                      cursor++;
                      continue;
                    }
                    cursor++;
                  }
                  jumpPosition(position, html, cursor);
                  var wLen = words.length;
                  var type = 'attribute';
                  for (var i = 0; i < wLen; i++) {
                    var word = words[i];
                    var isNotPair = word.includes('=');
                    if (isNotPair) {
                      var secondWord = words[i + 1];
                      if (secondWord && secondWord.startsWith('=')) {
                        if (secondWord.length > 1) {
                          var newWord = word + secondWord;
                          tokens.push({
                            type: type,
                            content: newWord
                          });
                          i += 1;
                          continue;
                        }
                        var thirdWord = words[i + 2];
                        i += 1;
                        if (thirdWord) {
                          var _newWord = word + '=' + thirdWord;
                          tokens.push({
                            type: type,
                            content: _newWord
                          });
                          i += 1;
                          continue;
                        }
                      }
                    }
                    if (word.endsWith('=')) {
                      var _secondWord = words[i + 1];
                      if (_secondWord && !_secondWord.includes('=')) {
                        var _newWord3 = word + _secondWord;
                        tokens.push({
                          type: type,
                          content: _newWord3
                        });
                        i += 1;
                        continue;
                      }
                      var _newWord2 = word.slice(0, -1);
                      tokens.push({
                        type: type,
                        content: _newWord2
                      });
                      continue;
                    }
                    tokens.push({
                      type: type,
                      content: word
                    });
                  }
                }
              },
              {
                key: 'scanSkipTag',
                value: function scanSkipTag(tagName) {
                  var html = this.html,
                    position = this.position;
                  var safeTagName = tagName.toLowerCase();
                  var len = html.length;
                  while (position.index < len) {
                    var nextTag = html.indexOf('</', position.index);
                    if (nextTag === -1) {
                      this.scanText();
                      break;
                    }
                    jumpPosition(position, html, nextTag);
                    var name = this.scanTag();
                    if (safeTagName === name.toLowerCase()) {
                      break;
                    }
                  }
                }
              }
            ]);
            return Scaner;
          })();
          function unquote(str) {
            var car = str.charAt(0);
            var end = str.length - 1;
            var isQuoteStart = car === '"' || car === "'";
            if (isQuoteStart && car === str.charAt(end)) {
              return str.slice(1, end);
            }
            return str;
          }
          var LEFT_BRACKET = '{';
          var RIGHT_BRACKET = '}';
          var CLASS_SELECTOR = '.';
          var ID_SELECTOR = '#';
          var CHILD_COMBINATOR = '>';
          var GENERAL_SIBLING_COMBINATOR = '~';
          var ADJACENT_SIBLING_COMBINATOR = '+';
          var StyleTagParser = /*#__PURE__*/ (function () {
            function StyleTagParser() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, StyleTagParser);
              this.styles = [];
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(StyleTagParser, [
              {
                key: 'extractStyle',
                value: function extractStyle(src) {
                  var _this11 = this;
                  var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
                  var html = src;
                  // let html = src.replace(/\n/g, '')
                  html = html.replace(REG_STYLE, function (_, $1) {
                    var style = $1.trim();
                    _this11.stringToSelector(style);
                    return '';
                  });
                  return html.trim();
                }
              },
              {
                key: 'stringToSelector',
                value: function stringToSelector(style) {
                  var _this12 = this;
                  var lb = style.indexOf(LEFT_BRACKET);
                  var _loop2 = function _loop2() {
                    var rb = style.indexOf(RIGHT_BRACKET);
                    var selectors = style.slice(0, lb).trim();
                    var content = style.slice(lb + 1, rb);
                    content = content.replace(/:(.*);/g, function (_, $1) {
                      var t = $1.trim().replace(/ +/g, '+++');
                      return ':'.concat(t, ';');
                    });
                    content = content.replace(/ /g, '');
                    content = content.replace(/\+\+\+/g, ' ');
                    if (!/;$/.test(content)) {
                      content += ';';
                    }
                    selectors.split(',').forEach(function (src) {
                      var selectorList = _this12.parseSelector(src);
                      _this12.styles.push({
                        content: content,
                        selectorList: selectorList
                      });
                    });
                    style = style.slice(rb + 1);
                    lb = style.indexOf(LEFT_BRACKET);
                  };
                  while (lb > -1) {
                    _loop2();
                  }
                  // console.log('res this.styles: ', this.styles)
                }
              },
              {
                key: 'parseSelector',
                value: function parseSelector(src) {
                  var list = src
                    .trim()
                    .replace(/ *([>~+]) */g, ' $1')
                    .replace(/ +/g, ' ')
                    .replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, '[$1=$2]')
                    .split(' ');
                  var selectors = list.map(function (item) {
                    var firstChar = item.charAt(0);
                    var selector = {
                      isChild: firstChar === CHILD_COMBINATOR,
                      isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
                      isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
                      tag: null,
                      id: null,
                      class: [],
                      attrs: []
                    };
                    item = item.replace(/^[>~+]/, '');
                    // 属性选择器
                    item = item.replace(/\[(.+?)\]/g, function (_, $1) {
                      var _$1$split = $1.split('='),
                        _$1$split2 = Object(
                          _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[
                            /* default */ 'a'
                          ]
                        )(_$1$split, 2),
                        key = _$1$split2[0],
                        value = _$1$split2[1];
                      var all = $1.indexOf('=') === -1;
                      var attr = {
                        all: all,
                        key: key,
                        value: all ? null : value
                      };
                      selector.attrs.push(attr);
                      return '';
                    });
                    item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
                      if ($1[0] === ID_SELECTOR) {
                        // id 选择器
                        selector.id = $1.substr(1);
                      } else if ($1[0] === CLASS_SELECTOR) {
                        // class 选择器
                        selector.class.push($1.substr(1));
                      }
                      return '';
                    });
                    // 标签选择器
                    if (item !== '') {
                      selector.tag = item;
                    }
                    return selector;
                  });
                  return selectors;
                }
              },
              {
                key: 'matchStyle',
                value: function matchStyle(tagName, el, list) {
                  var _this13 = this;
                  var res = sortStyles(this.styles).reduce(function (str, _ref2, i) {
                    var content = _ref2.content,
                      selectorList = _ref2.selectorList;
                    var idx = list[i];
                    var selector = selectorList[idx];
                    var nextSelector = selectorList[idx + 1];
                    if (
                      (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) ||
                      (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)
                    ) {
                      selector = nextSelector;
                      idx += 1;
                      list[i] += 1;
                    }
                    var isMatch = _this13.matchCurrent(tagName, el, selector);
                    if (isMatch && selector.isGeneralSibling) {
                      var prev = getPreviousElement(el);
                      while (prev) {
                        if (prev.h5tagName && _this13.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
                          isMatch = true;
                          break;
                        }
                        prev = getPreviousElement(prev);
                        isMatch = false;
                      }
                    }
                    if (isMatch && selector.isAdjacentSibling) {
                      var _prev = getPreviousElement(el);
                      if (!_prev || !_prev.h5tagName) {
                        isMatch = false;
                      } else {
                        var isSiblingMatch = _this13.matchCurrent(_prev.h5tagName, _prev, selectorList[idx - 1]);
                        if (!isSiblingMatch) {
                          isMatch = false;
                        }
                      }
                    }
                    if (isMatch) {
                      if (idx === selectorList.length - 1) {
                        return str + content;
                      } else if (idx < selectorList.length - 1) {
                        list[i] += 1;
                      }
                    } else {
                      // 直接子代组合器: >
                      if (selector.isChild && idx > 0) {
                        list[i] -= 1;
                        if (_this13.matchCurrent(tagName, el, selectorList[list[i]])) {
                          list[i] += 1;
                        }
                      }
                    }
                    return str;
                  }, '');
                  return res;
                }
              },
              {
                key: 'matchCurrent',
                value: function matchCurrent(tagName, el, selector) {
                  // 标签选择器
                  if (selector.tag && selector.tag !== tagName) return false;
                  // id 选择器
                  if (selector.id && selector.id !== el.id) return false;
                  // class 选择器
                  if (selector.class.length) {
                    var classList = el.className.split(' ');
                    for (var i = 0; i < selector.class.length; i++) {
                      var cls = selector.class[i];
                      if (classList.indexOf(cls) === -1) {
                        return false;
                      }
                    }
                  }
                  // 属性选择器
                  if (selector.attrs.length) {
                    for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
                      var _selector$attrs$_i = selector.attrs[_i3],
                        all = _selector$attrs$_i.all,
                        key = _selector$attrs$_i.key,
                        value = _selector$attrs$_i.value;
                      if (all && !el.hasAttribute(key)) {
                        return false;
                      } else {
                        var attr = el.getAttribute(key);
                        if (attr !== unquote(value || '')) {
                          return false;
                        }
                      }
                    }
                  }
                  return true;
                }
              }
            ]);
            return StyleTagParser;
          })();
          function getPreviousElement(el) {
            var parent = el.parentElement;
            if (!parent) return null;
            var prev = el.previousSibling;
            if (!prev) return null;
            if (prev.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
              return prev;
            } else {
              return getPreviousElement(prev);
            }
          }
          // 根据 css selector 权重排序: 权重大的靠后
          // @WARN 不考虑伪类
          // https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2
          function sortStyles(styles) {
            return styles.sort(function (s1, s2) {
              var hundreds1 = getHundredsWeight(s1.selectorList);
              var hundreds2 = getHundredsWeight(s2.selectorList);
              if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
              var tens1 = getTensWeight(s1.selectorList);
              var tens2 = getTensWeight(s2.selectorList);
              if (tens1 !== tens2) return tens1 - tens2;
              var ones1 = getOnesWeight(s1.selectorList);
              var ones2 = getOnesWeight(s2.selectorList);
              return ones1 - ones2;
            });
          }
          function getHundredsWeight(selectors) {
            return selectors.reduce(function (pre, cur) {
              return pre + (cur.id ? 1 : 0);
            }, 0);
          }
          function getTensWeight(selectors) {
            return selectors.reduce(function (pre, cur) {
              return pre + cur.class.length + cur.attrs.length;
            }, 0);
          }
          function getOnesWeight(selectors) {
            return selectors.reduce(function (pre, cur) {
              return pre + (cur.tag ? 1 : 0);
            }, 0);
          }
          function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(',');
            for (var i = 0; i < list.length; i++) {
              map[list[i]] = true;
            }
            return expectsLowerCase
              ? function (val) {
                  return !!map[val.toLowerCase()];
                }
              : function (val) {
                  return !!map[val];
                };
          }
          var specialMiniElements = {
            img: 'image',
            iframe: 'web-view'
          };
          var internalCompsList = Object.keys(
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* internalComponents */ 'g']
          )
            .map(function (i) {
              return i.toLowerCase();
            })
            .join(',');
          // https://developers.weixin.qq.com/miniprogram/dev/component
          var isMiniElements = makeMap(internalCompsList, true);
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
          var isInlineElements = makeMap(
            'a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b',
            true
          );
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
          var isBlockElements = makeMap(
            'address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt',
            true
          );
          var closingTagAncestorBreakers = {
            li: ['ul', 'ol', 'menu'],
            dt: ['dl'],
            dd: ['dl'],
            tbody: ['table'],
            thead: ['table'],
            tfoot: ['table'],
            tr: ['table'],
            td: ['table']
          };
          function hasTerminalParent(tagName, stack) {
            var tagParents = closingTagAncestorBreakers[tagName];
            if (tagParents) {
              var currentIndex = stack.length - 1;
              while (currentIndex >= 0) {
                var parentTagName = stack[currentIndex].tagName;
                if (parentTagName === tagName) {
                  break;
                }
                if (tagParents && tagParents.includes(parentTagName)) {
                  return true;
                }
                currentIndex--;
              }
            }
            return false;
          }
          function getTagName(tag) {
            if (options.html.renderHTMLTag) {
              return tag;
            }
            if (specialMiniElements[tag]) {
              return specialMiniElements[tag];
            } else if (isMiniElements(tag)) {
              return tag;
            } else if (isBlockElements(tag)) {
              return 'view';
            } else if (isInlineElements(tag)) {
              return 'text';
            }
            return 'view';
          }
          function splitEqual(str) {
            var sep = '=';
            var idx = str.indexOf(sep);
            if (idx === -1) return [str];
            var key = str.slice(0, idx).trim();
            var value = str.slice(idx + sep.length).trim();
            return [key, value];
          }
          function format(children, document, styleOptions, parent) {
            return children
              .filter(function (child) {
                // 过滤注释和空文本节点
                if (child.type === 'comment') {
                  return false;
                } else if (child.type === 'text') {
                  return child.content !== '';
                }
                return true;
              })
              .map(function (child) {
                // 文本节点
                if (child.type === 'text') {
                  var text = document.createTextNode(child.content);
                  if (
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(
                      options.html.transformText
                    )
                  ) {
                    text = options.html.transformText(text, child);
                  }
                  parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
                  return text;
                }
                var el = document.createElement(getTagName(child.tagName));
                el.h5tagName = child.tagName;
                parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
                if (!options.html.renderHTMLTag) {
                  el.className = 'h5-'.concat(child.tagName);
                }
                for (var i = 0; i < child.attributes.length; i++) {
                  var attr = child.attributes[i];
                  var _splitEqual = splitEqual(attr),
                    _splitEqual2 = Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[
                        /* default */ 'a'
                      ]
                    )(_splitEqual, 2),
                    key = _splitEqual2[0],
                    value = _splitEqual2[1];
                  if (key === 'class') {
                    el.className += ' ' + unquote(value);
                  } else if (key[0] === 'o' && key[1] === 'n') {
                    continue;
                  } else {
                    el.setAttribute(key, value == null ? true : unquote(value));
                  }
                }
                var styleTagParser = styleOptions.styleTagParser,
                  descendantList = styleOptions.descendantList;
                var list = descendantList.slice();
                var style = styleTagParser.matchStyle(child.tagName, el, list);
                el.setAttribute('style', style + el.style.cssText);
                // console.log('style, ', style)
                format(
                  child.children,
                  document,
                  {
                    styleTagParser: styleTagParser,
                    descendantList: list
                  },
                  el
                );
                if (
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(
                    options.html.transformElement
                  )
                ) {
                  return options.html.transformElement(el, child);
                }
                return el;
              });
          }
          function parser(html, document) {
            var styleTagParser = new StyleTagParser();
            html = styleTagParser.extractStyle(html);
            var tokens = new Scaner(html).scan();
            var root = {
              tagName: '',
              children: [],
              type: 'element',
              attributes: []
            };
            var state = {
              tokens: tokens,
              options: options,
              cursor: 0,
              stack: [root]
            };
            parse(state);
            return format(root.children, document, {
              styleTagParser: styleTagParser,
              descendantList: Array(styleTagParser.styles.length).fill(0)
            });
          }
          function parse(state) {
            var tokens = state.tokens,
              stack = state.stack;
            var cursor = state.cursor;
            var len = tokens.length;
            var nodes = stack[stack.length - 1].children;
            while (cursor < len) {
              var token = tokens[cursor];
              if (token.type !== 'tag-start') {
                // comment or text
                nodes.push(token);
                cursor++;
                continue;
              }
              var tagToken = tokens[++cursor];
              cursor++;
              var tagName = tagToken.content.toLowerCase();
              if (token.close) {
                var index = stack.length;
                var shouldRewind = false;
                while (--index > -1) {
                  if (stack[index].tagName === tagName) {
                    shouldRewind = true;
                    break;
                  }
                }
                while (cursor < len) {
                  var endToken = tokens[cursor];
                  if (endToken.type !== 'tag-end') break;
                  cursor++;
                }
                if (shouldRewind) {
                  stack.splice(index);
                  break;
                } else {
                  continue;
                }
              }
              var isClosingTag = options.html.closingElements.has(tagName);
              var shouldRewindToAutoClose = isClosingTag;
              if (shouldRewindToAutoClose) {
                shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
              }
              if (shouldRewindToAutoClose) {
                var currentIndex = stack.length - 1;
                while (currentIndex > 0) {
                  if (tagName === stack[currentIndex].tagName) {
                    stack.splice(currentIndex);
                    var previousIndex = currentIndex - 1;
                    nodes = stack[previousIndex].children;
                    break;
                  }
                  currentIndex = currentIndex - 1;
                }
              }
              var attributes = [];
              var attrToken = void 0;
              while (cursor < len) {
                attrToken = tokens[cursor];
                if (attrToken.type === 'tag-end') break;
                attributes.push(attrToken.content);
                cursor++;
              }
              cursor++;
              var children = [];
              var element = {
                type: 'element',
                tagName: tagToken.content,
                attributes: attributes,
                children: children
              };
              nodes.push(element);
              var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
              if (hasChildren) {
                stack.push({
                  tagName: tagName,
                  children: children
                });
                var innerState = {
                  tokens: tokens,
                  cursor: cursor,
                  stack: stack
                };
                parse(innerState);
                cursor = innerState.cursor;
              }
            }
            state.cursor = cursor;
          }
          options.html = {
            skipElements: new Set(['style', 'script']),
            voidElements: new Set([
              '!doctype',
              'area',
              'base',
              'br',
              'col',
              'command',
              'embed',
              'hr',
              'img',
              'input',
              'keygen',
              'link',
              'meta',
              'param',
              'source',
              'track',
              'wbr'
            ]),
            closingElements: new Set([
              'html',
              'head',
              'body',
              'p',
              'dt',
              'dd',
              'li',
              'option',
              'thead',
              'th',
              'tbody',
              'tr',
              'td',
              'tfoot',
              'colgroup'
            ]),
            renderHTMLTag: false
          };
          function setInnerHTML(element, html) {
            while (element.firstChild) {
              element.removeChild(element.firstChild);
            }
            var children = parser(html, element.ownerDocument);
            for (var i = 0; i < children.length; i++) {
              element.appendChild(children[i]);
            }
          }
          function getBoundingClientRectImpl() {
            var _this14 = this;
            if (!options.miniGlobal) return Promise.resolve(null);
            return new Promise(function (resolve) {
              var query = options.miniGlobal.createSelectorQuery();
              query
                .select('#'.concat(_this14.uid))
                .boundingClientRect(function (res) {
                  resolve(res);
                })
                .exec();
            });
          }
          function getTemplateContent(ctx) {
            if (ctx.nodeName === 'template') {
              var _document = ctx.ownerDocument;
              var content = _document.createElement(DOCUMENT_FRAGMENT);
              content.childNodes = ctx.childNodes;
              ctx.childNodes = [content];
              content.parentNode = ctx;
              content.childNodes.forEach(function (nodes) {
                nodes.parentNode = content;
              });
              return content;
            }
          }

          /**
           * An implementation of `Element.insertAdjacentHTML()`
           * to support Vue 3 with a version of or greater than `vue@3.1.2`
           */
          function insertAdjacentHTML(position, html) {
            var _a, _b;
            var parsedNodes = parser(html, this.ownerDocument);
            for (var i = 0; i < parsedNodes.length; i++) {
              var n = parsedNodes[i];
              switch (position) {
                case 'beforebegin':
                  (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
                  break;
                case 'afterbegin':
                  if (this.hasChildNodes()) {
                    this.insertBefore(n, this.childNodes[0]);
                  } else {
                    this.appendChild(n);
                  }
                  break;
                case 'beforeend':
                  this.appendChild(n);
                  break;
                case 'afterend':
                  (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
                  break;
              }
            }
          }
          function cloneNode() {
            var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var document = this.ownerDocument;
            var newNode;
            if (this.nodeType === 1 /* NodeType.ELEMENT_NODE */) {
              newNode = document.createElement(this.nodeName);
            } else if (this.nodeType === 3 /* NodeType.TEXT_NODE */) {
              newNode = document.createTextNode('');
            }
            for (var key in this) {
              var value = this[key];
              if (
                [PROPS, DATASET].includes(key) &&
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_2__[
                    /* default */ 'a'
                  ]
                )(value) === OBJECT
              ) {
                newNode[key] = Object.assign({}, value);
              } else if (key === '_value') {
                newNode[key] = value;
              } else if (key === STYLE) {
                newNode.style._value = Object.assign({}, value._value);
                newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
              }
            }
            if (isDeep) {
              newNode.childNodes = this.childNodes.map(function (node) {
                return node.cloneNode(true);
              });
            }
            return newNode;
          }
          function contains(node) {
            var isContains = false;
            this.childNodes.some(function (childNode) {
              var uid = childNode.uid;
              if (uid === node.uid || uid === node.id || childNode.contains(node)) {
                isContains = true;
                return true;
              }
            });
            return isContains;
          }
          if (true) {
            if (true) {
              TaroNode.extend('innerHTML', {
                set: function set(html) {
                  setInnerHTML.call(this, this, html);
                },
                get: function get() {
                  return '';
                }
              });
              if (true) {
                TaroNode.extend('insertAdjacentHTML', insertAdjacentHTML);
              }
            }
            if (true) {
              TaroNode.extend('cloneNode', cloneNode);
            }
            if (false) {
            }
            if (true) {
              TaroElement.extend('getBoundingClientRect', getBoundingClientRectImpl);
            }
            if (true) {
              TaroElement.extend('content', {
                get: function get() {
                  return getTemplateContent(this);
                }
              });
            }
          }

          // Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
          var TaroEvent = /*#__PURE__*/ (function () {
            function TaroEvent(type, opts, event) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroEvent);
              this._stop = false;
              this._end = false;
              this.defaultPrevented = false;
              // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
              // here use hi-res timestamp
              this.timeStamp = Date.now();
              this.type = type.toLowerCase();
              this.mpEvent = event;
              this.bubbles = Boolean(opts && opts.bubbles);
              this.cancelable = Boolean(opts && opts.cancelable);
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(TaroEvent, [
              {
                key: 'stopPropagation',
                value: function stopPropagation() {
                  this._stop = true;
                }
              },
              {
                key: 'stopImmediatePropagation',
                value: function stopImmediatePropagation() {
                  this._end = this._stop = true;
                }
              },
              {
                key: 'preventDefault',
                value: function preventDefault() {
                  this.defaultPrevented = true;
                }
              },
              {
                key: 'target',
                get: function get() {
                  var _a, _b;
                  var cacheTarget = this.cacheTarget;
                  if (!cacheTarget) {
                    var target = Object.create(
                      ((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null
                    );
                    var element = env.document.getElementById(target.id);
                    target.dataset =
                      element !== null
                        ? element.dataset
                        : _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a'];
                    for (var key in (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.detail) {
                      target[key] = this.mpEvent.detail[key];
                    }
                    this.cacheTarget = target;
                    return target;
                  } else {
                    return cacheTarget;
                  }
                }
              },
              {
                key: 'currentTarget',
                get: function get() {
                  var _a, _b, _c, _d;
                  var cacheCurrentTarget = this.cacheCurrentTarget;
                  if (!cacheCurrentTarget) {
                    var doc = env.document;
                    var currentTarget = Object.create(
                      ((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null
                    );
                    var element = doc.getElementById(currentTarget.id);
                    var targetElement = doc.getElementById(
                      ((_c = (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target) === null ||
                      _c === void 0
                        ? void 0
                        : _c.id) || null
                    );
                    if (element === null || (element && element === targetElement)) {
                      this.cacheCurrentTarget = this.target;
                      return this.target;
                    }
                    currentTarget.dataset = element.dataset;
                    for (var key in (_d = this.mpEvent) === null || _d === void 0 ? void 0 : _d.detail) {
                      currentTarget[key] = this.mpEvent.detail[key];
                    }
                    this.cacheCurrentTarget = currentTarget;
                    return currentTarget;
                  } else {
                    return cacheCurrentTarget;
                  }
                }
              }
            ]);
            return TaroEvent;
          })();
          function createEvent(event, node) {
            if (typeof event === 'string') {
              // For Vue3 using document.createEvent
              return new TaroEvent(event, {
                bubbles: true,
                cancelable: true
              });
            }
            var domEv = new TaroEvent(
              event.type,
              {
                bubbles: true,
                cancelable: true
              },
              event
            );
            for (var key in event) {
              if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
                continue;
              } else {
                domEv[key] = event[key];
              }
            }
            if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
              // eslint-disable-next-line dot-notation
              domEv[KEY_CODE] = 13;
            }
            return domEv;
          }
          var eventsBatch = {};
          // 小程序的事件代理回调函数
          function eventHandler(event) {
            var _a;
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('modifyMpEventImpl', event);
            event.currentTarget || (event.currentTarget = event.target);
            var currentTarget = event.currentTarget;
            var id =
              ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid) /** sid */ ||
              currentTarget.id /** uid */ ||
              '';
            var node = env.document.getElementById(id);
            if (node) {
              var dispatch = function dispatch() {
                var e = createEvent(event, node);
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('modifyTaroEvent', e, node);
                node.dispatchEvent(e);
              };
              if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].isExist('batchedEventUpdates')) {
                var type = event.type;
                if (
                  !_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('isBubbleEvents', type) ||
                  !isParentBinded(node, type) ||
                  (type === TOUCHMOVE && !!node.props.catchMove)
                ) {
                  // 最上层组件统一 batchUpdate
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
                    'batchedEventUpdates',
                    function () {
                      if (eventsBatch[type]) {
                        eventsBatch[type].forEach(function (fn) {
                          return fn();
                        });
                        delete eventsBatch[type];
                      }
                      dispatch();
                    }
                  );
                } else {
                  // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                  (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
                }
              } else {
                dispatch();
              }
            }
          }
          var FormElement = /*#__PURE__*/ (function (_TaroElement) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(FormElement, _TaroElement);
            var _super5 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(FormElement);
            function FormElement() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, FormElement);
              return _super5.apply(this, arguments);
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(FormElement, [
              {
                key: 'value',
                get: function get() {
                  // eslint-disable-next-line dot-notation
                  var val = this.props[VALUE];
                  return val == null ? '' : val;
                },
                set: function set(val) {
                  this.setAttribute(VALUE, val);
                }
              },
              {
                key: 'dispatchEvent',
                value: function dispatchEvent(event) {
                  if (event.mpEvent) {
                    var val = event.mpEvent.detail.value;
                    if (event.type === CHANGE) {
                      this.props.value = val;
                    } else if (event.type === INPUT) {
                      // Web 规范中表单组件的 value 应该跟着输入改变
                      // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
                      // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
                      this.value = val;
                    }
                  }
                  return Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_10__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_11__[
                        /* default */ 'a'
                      ]
                    )(FormElement.prototype),
                    'dispatchEvent',
                    this
                  ).call(this, event);
                }
              }
            ]);
            return FormElement;
          })(TaroElement);
          var Performance = /*#__PURE__*/ (function () {
            function Performance() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, Performance);
              this.recorder = new Map();
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(Performance, [
              {
                key: 'start',
                value: function start(id) {
                  if (!options.debug) {
                    return;
                  }
                  this.recorder.set(id, Date.now());
                }
              },
              {
                key: 'stop',
                value: function stop(id) {
                  if (!options.debug) {
                    return;
                  }
                  var now = Date.now();
                  var prev = this.recorder.get(id);
                  this.recorder.delete(id);
                  var time = now - prev;
                  // eslint-disable-next-line no-console
                  console.log(''.concat(id, ' \u65F6\u957F\uFF1A ').concat(time, 'ms'));
                }
              }
            ]);
            return Performance;
          })();
          var perf = new Performance();
          function findCustomWrapper(root, dataPathArr) {
            // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
            var list = dataPathArr.slice(1);
            var currentData = root;
            var customWrapper;
            var splitedPath = '';
            list.some(function (item, i) {
              var key = item
                // '[0]' => '0'
                .replace(/^\[(.+)\]$/, '$1')
                // 'cn' => 'childNodes'
                .replace(/\bcn\b/g, 'childNodes');
              currentData = currentData[key];
              if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(currentData)) return true;
              if (currentData.nodeName === CUSTOM_WRAPPER) {
                var res = customWrapperCache.get(currentData.sid);
                if (res) {
                  customWrapper = res;
                  splitedPath = dataPathArr.slice(i + 2).join('.');
                }
              }
            });
            if (customWrapper) {
              return {
                customWrapper: customWrapper,
                splitedPath: splitedPath
              };
            }
          }
          var TaroRootElement = /*#__PURE__*/ (function (_TaroElement2) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroRootElement, _TaroElement2);
            var _super6 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroRootElement);
            function TaroRootElement() {
              var _this15;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroRootElement);
              _this15 = _super6.call(this);
              _this15.updatePayloads = [];
              _this15.updateCallbacks = [];
              _this15.pendingUpdate = false;
              _this15.ctx = null;
              _this15.nodeName = ROOT_STR;
              _this15.tagName = ROOT_STR.toUpperCase();
              return _this15;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(TaroRootElement, [
              {
                key: '_path',
                get: function get() {
                  return ROOT_STR;
                }
              },
              {
                key: '_root',
                get: function get() {
                  return this;
                }
              },
              {
                key: 'enqueueUpdate',
                value: function enqueueUpdate(payload) {
                  this.updatePayloads.push(payload);
                  if (!this.pendingUpdate && this.ctx) {
                    this.performUpdate();
                  }
                }
              },
              {
                key: 'performUpdate',
                value: function performUpdate() {
                  var _this16 = this;
                  var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                  var prerender = arguments.length > 1 ? arguments[1] : undefined;
                  this.pendingUpdate = true;
                  var ctx = this.ctx;
                  setTimeout(function () {
                    var setDataMark = ''.concat(SET_DATA, ' \u5F00\u59CB\u65F6\u95F4\u6233 ').concat(Date.now());
                    perf.start(setDataMark);
                    var data = Object.create(null);
                    var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);
                    while (_this16.updatePayloads.length > 0) {
                      var _this16$updatePayload = _this16.updatePayloads.shift(),
                        path = _this16$updatePayload.path,
                        value = _this16$updatePayload.value;
                      if (path.endsWith('cn' /* Shortcuts.Childnodes */)) {
                        resetPaths.add(path);
                      }
                      data[path] = value;
                    }
                    var _loop3 = function _loop3(_path2) {
                      resetPaths.forEach(function (p) {
                        // 已经重置了数组，就不需要分别再设置了
                        if (_path2.includes(p) && _path2 !== p) {
                          delete data[_path2];
                        }
                      });
                      var value = data[_path2];
                      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(value)) {
                        data[_path2] = value();
                      }
                    };
                    for (var _path2 in data) {
                      _loop3(_path2);
                    }
                    // 预渲染
                    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(prerender))
                      return prerender(data);
                    // 正常渲染
                    _this16.pendingUpdate = false;
                    var normalUpdate = {};
                    var customWrapperMap = new Map();
                    if (initRender) {
                      // 初次渲染，使用页面级别的 setData
                      normalUpdate = data;
                    } else {
                      // 更新渲染，区分 CustomWrapper 与页面级别的 setData
                      for (var p in data) {
                        var dataPathArr = p.split('.');
                        var found = findCustomWrapper(_this16, dataPathArr);
                        if (found) {
                          // 此项数据使用 CustomWrapper 去更新
                          var customWrapper = found.customWrapper,
                            splitedPath = found.splitedPath;
                          // 合并同一个 customWrapper 的相关更新到一次 setData 中
                          customWrapperMap.set(
                            customWrapper,
                            Object.assign(
                              Object.assign({}, customWrapperMap.get(customWrapper) || {}),
                              Object(
                                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                                  /* default */ 'a'
                                ]
                              )({}, 'i.'.concat(splitedPath), data[p])
                            )
                          );
                        } else {
                          // 此项数据使用页面去更新
                          normalUpdate[p] = data[p];
                        }
                      }
                    }
                    var customWrpperCount = customWrapperMap.size;
                    var isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
                    var updateArrLen = customWrpperCount + (isNeedNormalUpdate ? 1 : 0);
                    var executeTime = 0;
                    var cb = function cb() {
                      if (++executeTime === updateArrLen) {
                        perf.stop(setDataMark);
                        _this16.flushUpdateCallback();
                        initRender && perf.stop(PAGE_INIT);
                      }
                    };
                    // custom-wrapper setData
                    if (customWrpperCount) {
                      customWrapperMap.forEach(function (data, ctx) {
                        if (true && options.debug) {
                          // eslint-disable-next-line no-console
                          console.log('custom wrapper setData: ', data);
                        }
                        ctx.setData(data, cb);
                      });
                    }
                    // page setData
                    if (isNeedNormalUpdate) {
                      if (true && options.debug) {
                        // eslint-disable-next-line no-console
                        console.log('page setData:', normalUpdate);
                      }
                      ctx.setData(normalUpdate, cb);
                    }
                  }, 0);
                }
              },
              {
                key: 'enqueueUpdateCallback',
                value: function enqueueUpdateCallback(cb, ctx) {
                  this.updateCallbacks.push(function () {
                    ctx ? cb.call(ctx) : cb();
                  });
                }
              },
              {
                key: 'flushUpdateCallback',
                value: function flushUpdateCallback() {
                  var updateCallbacks = this.updateCallbacks;
                  if (!updateCallbacks.length) return;
                  var copies = updateCallbacks.slice(0);
                  this.updateCallbacks.length = 0;
                  for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                  }
                }
              }
            ]);
            return TaroRootElement;
          })(TaroElement);
          var TaroText = /*#__PURE__*/ (function (_TaroNode2) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroText, _TaroNode2);
            var _super7 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroText);
            function TaroText(value) {
              var _this17;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroText);
              _this17 = _super7.call(this);
              _this17.nodeType = 3 /* NodeType.TEXT_NODE */;
              _this17.nodeName = '#text';
              _this17._value = value;
              return _this17;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(TaroText, [
              {
                key: 'textContent',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  MutationObserver.record({
                    target: this,
                    type: 'characterData' /* MutationRecordType.CHARACTER_DATA */,
                    oldValue: this._value
                  });
                  this._value = text;
                  this.enqueueUpdate({
                    path: ''.concat(this._path, '.', 'v' /* Shortcuts.Text */),
                    value: text
                  });
                }
              },
              {
                key: 'nodeValue',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  this.textContent = text;
                }
              },
              {
                key: 'data',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  this.textContent = text;
                }
              }
            ]);
            return TaroText;
          })(TaroNode);
          var TaroDocument = /*#__PURE__*/ (function (_TaroElement3) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(TaroDocument, _TaroElement3);
            var _super8 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(TaroDocument);
            function TaroDocument() {
              var _this18;
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, TaroDocument);
              _this18 = _super8.call(this);
              _this18.createEvent = createEvent;
              _this18.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
              _this18.nodeName = DOCUMENT_ELEMENT_NAME;
              return _this18;
            }
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(TaroDocument, [
              {
                key: 'createElement',
                value: function createElement(type) {
                  if (type === ROOT_STR) {
                    return new TaroRootElement();
                  }
                  var element = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* controlledComponent */ 'c'].has(type)
                    ? new FormElement()
                    : new TaroElement();
                  element.nodeName = type;
                  element.tagName = type.toUpperCase();
                  return element;
                }
                // an ugly fake createElementNS to deal with @vue/runtime-dom's
                // support mounting app to svg container since vue@3.0.8
              },
              {
                key: 'createElementNS',
                value: function createElementNS(_svgNS, type) {
                  return this.createElement(type);
                }
              },
              {
                key: 'createTextNode',
                value: function createTextNode(text) {
                  return new TaroText(text);
                }
              },
              {
                key: 'getElementById',
                value: function getElementById(id) {
                  var el = eventSource.get(id);
                  return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(el) ? null : el;
                }
              },
              {
                key: 'querySelector',
                value: function querySelector(query) {
                  // 为了 Vue3 的乞丐版实现
                  if (/^#/.test(query)) {
                    return this.getElementById(query.slice(1));
                  }
                  return null;
                }
              },
              {
                key: 'querySelectorAll',
                value: function querySelectorAll() {
                  // fake hack
                  return [];
                }
                // @TODO: @PERF: 在 hydrate 移除掉空的 node
              },
              {
                key: 'createComment',
                value: function createComment() {
                  var textnode = new TaroText('');
                  textnode.nodeName = COMMENT;
                  return textnode;
                }
              },
              {
                key: 'defaultView',
                get: function get() {
                  return env.window;
                }
              }
            ]);
            return TaroDocument;
          })(TaroElement);
          var document$1;
          if (true) {
            /* eslint-disable no-inner-declarations */
            var createDocument = function createDocument() {
              /**
               * <document>
               *   <html>
               *     <head></head>
               *     <body>
               *       <container>
               *         <app id="app" />
               *       </container>
               *     </body>
               *   </html>
               * </document>
               */
              var doc = new TaroDocument();
              var documentCreateElement = doc.createElement.bind(doc);
              var html = documentCreateElement(HTML);
              var head = documentCreateElement(HEAD);
              var body = documentCreateElement(BODY);
              var app = documentCreateElement(APP);
              app.id = APP;
              var container = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue
              doc.appendChild(html);
              html.appendChild(head);
              html.appendChild(body);
              body.appendChild(container);
              container.appendChild(app);
              doc.documentElement = html;
              doc.head = head;
              doc.body = body;
              return doc;
            };
            document$1 = env.document = createDocument();
          } else {
          }
          function getComputedStyle(element) {
            return element.style;
          }
          var machine = 'Macintosh';
          var arch = 'Intel Mac OS X 10_14_5';
          var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
          var msg = '(' + machine + '; ' + arch + ') ' + engine;
          var nav = false
            ? undefined
            : {
                appCodeName: 'Mozilla',
                appName: 'Netscape',
                appVersion: '5.0 ' + msg,
                cookieEnabled: true,
                mimeTypes: [],
                onLine: true,
                platform: 'MacIntel',
                plugins: [],
                product: 'Taro',
                productSub: '20030107',
                userAgent: 'Mozilla/5.0 ' + msg,
                vendor: 'Joyent',
                vendorSub: ''
              };

          // https://github.com/myrne/performance-now
          var now;
          (function () {
            var loadTime;
            if (typeof performance !== 'undefined' && performance !== null && performance.now) {
              now = function now() {
                return performance.now();
              };
            } else if (Date.now) {
              loadTime = Date.now();
              now = function now() {
                return Date.now() - loadTime;
              };
            } else {
              loadTime = new Date().getTime();
              now = function now() {
                return new Date().getTime() - loadTime;
              };
            }
          })();
          var lastTime = 0;
          // https://gist.github.com/paulirish/1579671
          // https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
          var _raf =
            typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null
              ? requestAnimationFrame
              : function (callback) {
                  var _now = now();
                  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.
                  return setTimeout(function () {
                    callback((lastTime = nextTime));
                  }, nextTime - _now);
                };
          var _caf =
            typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null
              ? cancelAnimationFrame
              : function (seed) {
                  // fix https://github.com/NervJS/taro/issues/7749
                  clearTimeout(seed);
                };
          var eventCenter = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
            'getEventCenter',
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* Events */ 'b']
          );
          var window$1;
          if (true) {
            var Window = /*#__PURE__*/ (function (_Events) {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                  /* default */ 'a'
                ]
              )(Window, _Events);
              var _super9 = Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                  /* default */ 'a'
                ]
              )(Window);
              function Window() {
                var _this19;
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                    /* default */ 'a'
                  ]
                )(this, Window);
                _this19 = _super9.call(this);
                _this19.navigator = nav;
                _this19.requestAnimationFrame = _raf;
                _this19.cancelAnimationFrame = _caf;
                _this19.getComputedStyle = getComputedStyle;
                var globalProperties = [].concat(
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__[
                      /* default */ 'a'
                    ]
                  )(Object.getOwnPropertyNames(global || {})),
                  Object(
                    _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__[
                      /* default */ 'a'
                    ]
                  )(Object.getOwnPropertySymbols(global || {}))
                );
                globalProperties.forEach(function (property) {
                  if (property === 'atob' || property === 'document') return;
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_7__[
                          /* default */ 'a'
                        ]
                      )(_this19),
                      property
                    )
                  ) {
                    _this19[property] = global[property];
                  }
                });
                _this19.Date || (_this19.Date = Date);
                return _this19;
              }
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                  /* default */ 'a'
                ]
              )(Window, [
                {
                  key: 'document',
                  get: function get() {
                    return env.document;
                  }
                },
                {
                  key: 'addEventListener',
                  value: function addEventListener(event, callback) {
                    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(event)) return;
                    this.on(event, callback, null);
                  }
                },
                {
                  key: 'removeEventListener',
                  value: function removeEventListener(event, callback) {
                    if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(event)) return;
                    this.off(event, callback, null);
                  }
                },
                {
                  key: 'setTimeout',
                  value: (function (_setTimeout) {
                    function setTimeout() {
                      return _setTimeout.apply(this, arguments);
                    }
                    setTimeout.toString = function () {
                      return _setTimeout.toString();
                    };
                    return setTimeout;
                  })(function () {
                    return setTimeout.apply(void 0, arguments);
                  })
                },
                {
                  key: 'clearTimeout',
                  value: (function (_clearTimeout) {
                    function clearTimeout() {
                      return _clearTimeout.apply(this, arguments);
                    }
                    clearTimeout.toString = function () {
                      return _clearTimeout.toString();
                    };
                    return clearTimeout;
                  })(function () {
                    return clearTimeout.apply(void 0, arguments);
                  })
                }
              ]);
              return Window;
            })(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* Events */ 'b']);
            window$1 = env.window = new Window();
          } else {
          }

          // for Vue3
          var SVGElement = /*#__PURE__*/ (function (_TaroElement4) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__[
                /* default */ 'a'
              ]
            )(SVGElement, _TaroElement4);
            var _super10 = Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__[
                /* default */ 'a'
              ]
            )(SVGElement);
            function SVGElement() {
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(this, SVGElement);
              return _super10.apply(this, arguments);
            }
            return Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(SVGElement);
          })(TaroElement);
          var Current = {
            app: null,
            router: null,
            page: null
          };
          var getCurrentInstance = function getCurrentInstance() {
            return Current;
          };

          /* eslint-disable dot-notation */
          var instances = new Map();
          var pageId = incrementId();
          function injectPageInstance(inst, id) {
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
              'mergePageInstance',
              instances.get(id),
              inst
            );
            instances.set(id, inst);
          }
          function getPageInstance(id) {
            return instances.get(id);
          }
          function removePageInstance(id) {
            instances.delete(id);
          }
          function addLeadingSlash(path) {
            if (path == null) {
              return '';
            }
            return path.charAt(0) === '/' ? path : '/' + path;
          }
          function safeExecute(path, lifecycle) {
            for (
              var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
              _key < _len;
              _key++
            ) {
              args[_key - 2] = arguments[_key];
            }
            var instance = instances.get(path);
            if (instance == null) {
              return;
            }
            var func = _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call(
              'getLifecycle',
              instance,
              lifecycle
            );
            if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isArray */ 'h'])(func)) {
              var res = func.map(function (fn) {
                return fn.apply(instance, args);
              });
              return res[0];
            }
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isFunction */ 'i'])(func)) {
              return;
            }
            return func.apply(instance, args);
          }
          function stringify(obj) {
            if (obj == null) {
              return '';
            }
            var path = Object.keys(obj)
              .map(function (key) {
                return key + '=' + obj[key];
              })
              .join('&');
            return path === '' ? path : '?' + path;
          }
          function getPath(id, options) {
            var idx = id.indexOf('?');
            if (false) {
            } else {
              return ''.concat(idx > -1 ? id.substring(0, idx) : id).concat(stringify(options));
            }
          }
          function getOnReadyEventKey(path) {
            return path + '.' + ON_READY;
          }
          function getOnShowEventKey(path) {
            return path + '.' + ON_SHOW;
          }
          function getOnHideEventKey(path) {
            return path + '.' + ON_HIDE;
          }
          function createPageConfig(component, pageName, data, pageConfig) {
            var _config;
            // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
            var id = pageName !== null && pageName !== void 0 ? pageName : 'taro_page_'.concat(pageId());
            var _hooks$call$page = Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[
                  /* default */ 'a'
                ]
              )(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getMiniLifecycleImpl').page, 7),
              ONLOAD = _hooks$call$page[0],
              ONUNLOAD = _hooks$call$page[1],
              ONREADY = _hooks$call$page[2],
              ONSHOW = _hooks$call$page[3],
              ONHIDE = _hooks$call$page[4],
              LIFECYCLES = _hooks$call$page[5],
              SIDE_EFFECT_LIFECYCLES = _hooks$call$page[6];
            var pageElement = null;
            var unmounting = false;
            var prepareMountList = [];
            function setCurrentRouter(page) {
              var router = false ? undefined : page.route || page.__route__ || page.$taroPath;
              Current.router = {
                params: page.$taroParams,
                path: addLeadingSlash(router),
                $taroPath: page.$taroPath,
                onReady: getOnReadyEventKey(id),
                onShow: getOnShowEventKey(id),
                onHide: getOnHideEventKey(id)
              };
              if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(page.exitState)) {
                Current.router.exitState = page.exitState;
              }
            }
            var loadResolver;
            var hasLoaded;
            var config =
              ((_config = {}),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config, ONLOAD, function () {
                var _this20 = this;
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var cb = arguments.length > 1 ? arguments[1] : undefined;
                hasLoaded = new Promise(function (resolve) {
                  loadResolver = resolve;
                });
                perf.start(PAGE_INIT);
                Current.page = this;
                this.config = pageConfig || {};
                // this.$taroPath 是页面唯一标识
                var uniqueOptions = Object.assign({}, options, {
                  $taroTimestamp: Date.now()
                });
                var $taroPath = (this.$taroPath = getPath(id, uniqueOptions));
                if (false) {
                }
                // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改
                if (this.$taroParams == null) {
                  this.$taroParams = uniqueOptions;
                }
                setCurrentRouter(this);
                var mount = function mount() {
                  Current.app.mount(component, $taroPath, function () {
                    pageElement = env.document.getElementById($taroPath);
                    Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* ensure */ 'd'])(
                      pageElement !== null,
                      '没有找到页面实例。'
                    );
                    safeExecute($taroPath, ON_LOAD, _this20.$taroParams);
                    loadResolver();
                    if (true) {
                      pageElement.ctx = _this20;
                      pageElement.performUpdate(true, cb);
                    } else {
                    }
                  });
                };
                if (unmounting) {
                  prepareMountList.push(mount);
                } else {
                  mount();
                }
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config, ONUNLOAD, function () {
                var $taroPath = this.$taroPath;
                // 触发onUnload生命周期
                safeExecute($taroPath, ONUNLOAD);
                unmounting = true;
                Current.app.unmount($taroPath, function () {
                  unmounting = false;
                  instances.delete($taroPath);
                  if (pageElement) {
                    pageElement.ctx = null;
                    pageElement = null;
                  }
                  if (prepareMountList.length) {
                    prepareMountList.forEach(function (fn) {
                      return fn();
                    });
                    prepareMountList = [];
                  }
                });
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config, ONREADY, function () {
                // 触发生命周期
                safeExecute(this.$taroPath, ON_READY);
                // 通过事件触发子组件的生命周期
                _raf(function () {
                  return eventCenter.trigger(getOnReadyEventKey(id));
                });
                this.onReady.called = true;
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config, ONSHOW, function () {
                var _this21 = this;
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                hasLoaded.then(function () {
                  // 设置 Current 的 page 和 router
                  Current.page = _this21;
                  setCurrentRouter(_this21);
                  // 触发生命周期
                  safeExecute(_this21.$taroPath, ON_SHOW, options);
                  // 通过事件触发子组件的生命周期
                  _raf(function () {
                    return eventCenter.trigger(getOnShowEventKey(id));
                  });
                });
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config, ONHIDE, function () {
                // 设置 Current 的 page 和 router
                if (Current.page === this) {
                  Current.page = null;
                  Current.router = null;
                }
                // 触发生命周期
                safeExecute(this.$taroPath, ON_HIDE);
                // 通过事件触发子组件的生命周期
                eventCenter.trigger(getOnHideEventKey(id));
              }),
              _config);
            LIFECYCLES.forEach(function (lifecycle) {
              config[lifecycle] = function () {
                return safeExecute.apply(
                  void 0,
                  [this.$taroPath, lifecycle].concat(Array.prototype.slice.call(arguments))
                );
              };
            });
            // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。
            SIDE_EFFECT_LIFECYCLES.forEach(function (lifecycle) {
              var _a;
              if (
                component[lifecycle] ||
                ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a[lifecycle]) ||
                component[lifecycle.replace(/^on/, 'enable')]
              ) {
                config[lifecycle] = function () {
                  var _a;
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }
                  var target = (_a = args[0]) === null || _a === void 0 ? void 0 : _a.target;
                  if (target === null || target === void 0 ? void 0 : target.id) {
                    var _id = target.id;
                    var element = env.document.getElementById(_id);
                    if (element) {
                      target.dataset = element.dataset;
                    }
                  }
                  return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(args));
                };
              }
            });
            config.eh = eventHandler;
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(data)) {
              config.data = data;
            }
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('modifyPageObject', config);
            return config;
          }
          function createComponentConfig(component, componentName, data) {
            var _config2;
            var id =
              componentName !== null && componentName !== void 0 ? componentName : 'taro_component_'.concat(pageId());
            var componentElement = null;
            var _hooks$call$component = Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[
                  /* default */ 'a'
                ]
              )(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getMiniLifecycleImpl').component,
                2
              ),
              ATTACHED = _hooks$call$component[0],
              DETACHED = _hooks$call$component[1];
            var config =
              ((_config2 = {}),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config2, ATTACHED, function () {
                var _this22 = this;
                var _a;
                perf.start(PAGE_INIT);
                var path = getPath(id, {
                  id: ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId()
                });
                Current.app.mount(component, path, function () {
                  componentElement = env.document.getElementById(path);
                  Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* ensure */ 'd'])(
                    componentElement !== null,
                    '没有找到组件实例。'
                  );
                  _this22.$taroInstances = instances.get(path);
                  safeExecute(path, ON_LOAD);
                  if (true) {
                    componentElement.ctx = _this22;
                    componentElement.performUpdate(true);
                  }
                });
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config2, DETACHED, function () {
                var path = getPath(id, {
                  id: this.getPageId()
                });
                Current.app.unmount(path, function () {
                  instances.delete(path);
                  if (componentElement) {
                    componentElement.ctx = null;
                  }
                });
              }),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                  /* default */ 'a'
                ]
              )(_config2, 'methods', {
                eh: eventHandler
              }),
              _config2);
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isUndefined */ 'm'])(data)) {
              config.data = data;
            }
            [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(function (key) {
              var _a;
              config[key] =
                (_a = component[key]) !== null && _a !== void 0
                  ? _a
                  : _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a'];
            });
            return config;
          }
          function createRecursiveComponentConfig(componentName) {
            var _ref3;
            var isCustomWrapper = componentName === CUSTOM_WRAPPER;
            var _hooks$call$component2 = Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__[
                  /* default */ 'a'
                ]
              )(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* hooks */ 'f'].call('getMiniLifecycleImpl').component,
                2
              ),
              ATTACHED = _hooks$call$component2[0],
              DETACHED = _hooks$call$component2[1];
            var lifeCycles = isCustomWrapper
              ? ((_ref3 = {}),
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ]
                )(_ref3, ATTACHED, function () {
                  var _a, _b;
                  var componentId =
                    ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) ||
                    ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(componentId)) {
                    customWrapperCache.set(componentId, this);
                  }
                }),
                Object(
                  _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ]
                )(_ref3, DETACHED, function () {
                  var _a, _b;
                  var componentId =
                    ((_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid) ||
                    ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
                  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* isString */ 'l'])(componentId)) {
                    customWrapperCache.delete(componentId);
                  }
                }),
                _ref3)
              : _tarojs_shared__WEBPACK_IMPORTED_MODULE_16__[/* EMPTY_OBJ */ 'a'];
            return Object.assign(
              {
                properties: {
                  i: {
                    type: Object,
                    value: Object(
                      _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )({}, 'nn' /* Shortcuts.NodeName */, getComponentsAlias()[VIEW]._num)
                  },
                  l: {
                    type: String,
                    value: ''
                  }
                },
                options: {
                  addGlobalClass: true,
                  virtualHost: !isCustomWrapper
                },
                methods: {
                  eh: eventHandler
                }
              },
              lifeCycles
            );
          }
          var nextTick = function nextTick(cb, ctx) {
            var _a, _b, _c;
            var router = Current.router;
            var timerFunc = function timerFunc() {
              setTimeout(function () {
                ctx ? cb.call(ctx) : cb();
              }, 1);
            };
            if (router !== null) {
              var pageElement = null;
              var path = router.$taroPath;
              pageElement = env.document.getElementById(path);
              if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
                if (false) {
                } else {
                  pageElement.enqueueUpdateCallback(cb, ctx);
                }
              } else {
                timerFunc();
              }
            } else {
              timerFunc();
            }
          };

          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(/*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js')[
            'requestAnimationFrame'
          ],
          __webpack_require__(/*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js')[
            'cancelAnimationFrame'
          ],
          __webpack_require__(/*! ./../../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js')
        ));

        /***/
      },

    /***/ './node_modules/@tarojs/shared/dist/shared.esm.js':
      /*!********************************************************!*\
  !*** ./node_modules/@tarojs/shared/dist/shared.esm.js ***!
  \********************************************************/
      /*! exports provided: EMPTY_ARR, EMPTY_OBJ, Events, HOOK_TYPE, TaroHook, TaroHooks, animation, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, controlledComponent, ensure, focusComponents, getComponentsAlias, getUniqueKey, hasOwn, hooks, indent, internalComponents, isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, nestElements, nonsupport, noop, processApis, queryToJson, setUniqueKeyToRoute, singleQuote, toCamelCase, toDashed, toKebabCase, touchEvents, unbox, voidElements, warn */
      /*! exports used: EMPTY_OBJ, Events, controlledComponent, ensure, getComponentsAlias, hooks, internalComponents, isArray, isFunction, isNull, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, processApis, toCamelCase, toDashed, warn */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* unused harmony export EMPTY_ARR */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () {
          return EMPTY_OBJ;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'b', function () {
          return Events;
        });
        /* unused harmony export HOOK_TYPE */
        /* unused harmony export TaroHook */
        /* unused harmony export TaroHooks */
        /* unused harmony export animation */
        /* unused harmony export box */
        /* unused harmony export cacheDataGet */
        /* unused harmony export cacheDataHas */
        /* unused harmony export cacheDataSet */
        /* unused harmony export capitalize */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'c', function () {
          return controlledComponent;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'd', function () {
          return ensure;
        });
        /* unused harmony export focusComponents */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'e', function () {
          return getComponentsAlias;
        });
        /* unused harmony export getUniqueKey */
        /* unused harmony export hasOwn */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'f', function () {
          return hooks;
        });
        /* unused harmony export indent */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'g', function () {
          return internalComponents;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'h', function () {
          return isArray;
        });
        /* unused harmony export isBoolean */
        /* unused harmony export isBooleanStringLiteral */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'i', function () {
          return isFunction;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'j', function () {
          return isNull;
        });
        /* unused harmony export isNumber */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'k', function () {
          return isObject;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'l', function () {
          return isString;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'm', function () {
          return isUndefined;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'n', function () {
          return mergeInternalComponents;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'o', function () {
          return mergeReconciler;
        });
        /* unused harmony export nestElements */
        /* unused harmony export nonsupport */
        /* unused harmony export noop */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'p', function () {
          return processApis;
        });
        /* unused harmony export queryToJson */
        /* unused harmony export setUniqueKeyToRoute */
        /* unused harmony export singleQuote */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'q', function () {
          return toCamelCase;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'r', function () {
          return toDashed;
        });
        /* unused harmony export toKebabCase */
        /* unused harmony export touchEvents */
        /* unused harmony export unbox */
        /* unused harmony export voidElements */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 's', function () {
          return warn;
        });
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ './node_modules/@babel/runtime/helpers/esm/createSuper.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
          );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
          );

        var DEFAULT_EMPTY_ARRAY = '[]';
        var NO_DEFAULT_VALUE = '';
        var DEFAULT_TRUE = '!0';
        var DEFAULT_FALSE = '!1';
        var touchEvents = {
          bindTouchStart: NO_DEFAULT_VALUE,
          bindTouchMove: NO_DEFAULT_VALUE,
          bindTouchEnd: NO_DEFAULT_VALUE,
          bindTouchCancel: NO_DEFAULT_VALUE,
          bindLongTap: NO_DEFAULT_VALUE
        };
        var animation = {
          animation: NO_DEFAULT_VALUE,
          bindAnimationStart: NO_DEFAULT_VALUE,
          bindAnimationIteration: NO_DEFAULT_VALUE,
          bindAnimationEnd: NO_DEFAULT_VALUE,
          bindTransitionEnd: NO_DEFAULT_VALUE
        };
        function singleQuote(s) {
          return "'".concat(s, "'");
        }
        var View = Object.assign(
          Object.assign(
            {
              'hover-class': singleQuote('none'),
              'hover-stop-propagation': DEFAULT_FALSE,
              'hover-start-time': '50',
              'hover-stay-time': '400'
            },
            touchEvents
          ),
          animation
        );
        var Icon = {
          type: NO_DEFAULT_VALUE,
          size: '23',
          color: NO_DEFAULT_VALUE
        };
        var MapComp = Object.assign(
          {
            longitude: NO_DEFAULT_VALUE,
            latitude: NO_DEFAULT_VALUE,
            scale: '16',
            markers: DEFAULT_EMPTY_ARRAY,
            covers: NO_DEFAULT_VALUE,
            polyline: DEFAULT_EMPTY_ARRAY,
            circles: DEFAULT_EMPTY_ARRAY,
            controls: DEFAULT_EMPTY_ARRAY,
            'include-points': DEFAULT_EMPTY_ARRAY,
            'show-location': NO_DEFAULT_VALUE,
            'layer-style': '1',
            bindMarkerTap: NO_DEFAULT_VALUE,
            bindControlTap: NO_DEFAULT_VALUE,
            bindCalloutTap: NO_DEFAULT_VALUE,
            bindUpdated: NO_DEFAULT_VALUE
          },
          touchEvents
        );
        var Progress = {
          percent: NO_DEFAULT_VALUE,
          'stroke-width': '6',
          color: singleQuote('#09BB07'),
          activeColor: singleQuote('#09BB07'),
          backgroundColor: singleQuote('#EBEBEB'),
          active: DEFAULT_FALSE,
          'active-mode': singleQuote('backwards'),
          'show-info': DEFAULT_FALSE
        };
        var RichText = {
          nodes: DEFAULT_EMPTY_ARRAY
        };
        var Text = {
          selectable: DEFAULT_FALSE,
          space: NO_DEFAULT_VALUE,
          decode: DEFAULT_FALSE
        };
        var Button = Object.assign(
          {
            size: singleQuote('default'),
            type: NO_DEFAULT_VALUE,
            plain: DEFAULT_FALSE,
            disabled: NO_DEFAULT_VALUE,
            loading: DEFAULT_FALSE,
            'form-type': NO_DEFAULT_VALUE,
            'open-type': NO_DEFAULT_VALUE,
            'hover-class': singleQuote('button-hover'),
            'hover-stop-propagation': DEFAULT_FALSE,
            'hover-start-time': '20',
            'hover-stay-time': '70',
            name: NO_DEFAULT_VALUE
          },
          touchEvents
        );
        var Checkbox = {
          value: NO_DEFAULT_VALUE,
          disabled: NO_DEFAULT_VALUE,
          checked: DEFAULT_FALSE,
          color: singleQuote('#09BB07'),
          name: NO_DEFAULT_VALUE
        };
        var CheckboxGroup = {
          bindChange: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Form = {
          'report-submit': DEFAULT_FALSE,
          bindSubmit: NO_DEFAULT_VALUE,
          bindReset: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Input = {
          value: NO_DEFAULT_VALUE,
          type: singleQuote(NO_DEFAULT_VALUE),
          password: DEFAULT_FALSE,
          placeholder: NO_DEFAULT_VALUE,
          'placeholder-style': NO_DEFAULT_VALUE,
          'placeholder-class': singleQuote('input-placeholder'),
          disabled: NO_DEFAULT_VALUE,
          maxlength: '140',
          'cursor-spacing': '0',
          focus: DEFAULT_FALSE,
          'confirm-type': singleQuote('done'),
          'confirm-hold': DEFAULT_FALSE,
          cursor: 'i.value.length',
          'selection-start': '-1',
          'selection-end': '-1',
          bindInput: NO_DEFAULT_VALUE,
          bindFocus: NO_DEFAULT_VALUE,
          bindBlur: NO_DEFAULT_VALUE,
          bindConfirm: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Label = {
          for: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Picker = {
          mode: singleQuote('selector'),
          disabled: NO_DEFAULT_VALUE,
          range: NO_DEFAULT_VALUE,
          'range-key': NO_DEFAULT_VALUE,
          value: NO_DEFAULT_VALUE,
          start: NO_DEFAULT_VALUE,
          end: NO_DEFAULT_VALUE,
          fields: singleQuote('day'),
          'custom-item': NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE,
          bindCancel: NO_DEFAULT_VALUE,
          bindChange: NO_DEFAULT_VALUE,
          bindColumnChange: NO_DEFAULT_VALUE
        };
        var PickerView = {
          value: NO_DEFAULT_VALUE,
          'indicator-style': NO_DEFAULT_VALUE,
          'indicator-class': NO_DEFAULT_VALUE,
          'mask-style': NO_DEFAULT_VALUE,
          'mask-class': NO_DEFAULT_VALUE,
          bindChange: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var PickerViewColumn = {
          name: NO_DEFAULT_VALUE
        };
        var Radio = {
          value: NO_DEFAULT_VALUE,
          checked: DEFAULT_FALSE,
          disabled: NO_DEFAULT_VALUE,
          color: singleQuote('#09BB07'),
          name: NO_DEFAULT_VALUE
        };
        var RadioGroup = {
          bindChange: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Slider = {
          min: '0',
          max: '100',
          step: '1',
          disabled: NO_DEFAULT_VALUE,
          value: '0',
          activeColor: singleQuote('#1aad19'),
          backgroundColor: singleQuote('#e9e9e9'),
          'block-size': '28',
          'block-color': singleQuote('#ffffff'),
          'show-value': DEFAULT_FALSE,
          bindChange: NO_DEFAULT_VALUE,
          bindChanging: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Switch = {
          checked: DEFAULT_FALSE,
          disabled: NO_DEFAULT_VALUE,
          type: singleQuote('switch'),
          color: singleQuote('#04BE02'),
          bindChange: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var Textarea = {
          value: NO_DEFAULT_VALUE,
          placeholder: NO_DEFAULT_VALUE,
          'placeholder-style': NO_DEFAULT_VALUE,
          'placeholder-class': singleQuote('textarea-placeholder'),
          disabled: NO_DEFAULT_VALUE,
          maxlength: '140',
          'auto-focus': DEFAULT_FALSE,
          focus: DEFAULT_FALSE,
          'auto-height': DEFAULT_FALSE,
          fixed: DEFAULT_FALSE,
          'cursor-spacing': '0',
          cursor: '-1',
          'selection-start': '-1',
          'selection-end': '-1',
          bindFocus: NO_DEFAULT_VALUE,
          bindBlur: NO_DEFAULT_VALUE,
          bindLineChange: NO_DEFAULT_VALUE,
          bindInput: NO_DEFAULT_VALUE,
          bindConfirm: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE
        };
        var CoverImage = {
          src: NO_DEFAULT_VALUE,
          bindLoad: 'eh',
          bindError: 'eh'
        };
        var CoverView = Object.assign(
          {
            'scroll-top': DEFAULT_FALSE
          },
          touchEvents
        );
        var MovableArea = {
          'scale-area': DEFAULT_FALSE
        };
        var MovableView = Object.assign(
          Object.assign(
            {
              direction: 'none',
              inertia: DEFAULT_FALSE,
              'out-of-bounds': DEFAULT_FALSE,
              x: NO_DEFAULT_VALUE,
              y: NO_DEFAULT_VALUE,
              damping: '20',
              friction: '2',
              disabled: NO_DEFAULT_VALUE,
              scale: DEFAULT_FALSE,
              'scale-min': '0.5',
              'scale-max': '10',
              'scale-value': '1',
              bindChange: NO_DEFAULT_VALUE,
              bindScale: NO_DEFAULT_VALUE,
              bindHTouchMove: NO_DEFAULT_VALUE,
              bindVTouchMove: NO_DEFAULT_VALUE,
              width: singleQuote('10px'),
              height: singleQuote('10px')
            },
            touchEvents
          ),
          animation
        );
        var ScrollView = Object.assign(
          Object.assign(
            {
              'scroll-x': DEFAULT_FALSE,
              'scroll-y': DEFAULT_FALSE,
              'upper-threshold': '50',
              'lower-threshold': '50',
              'scroll-top': NO_DEFAULT_VALUE,
              'scroll-left': NO_DEFAULT_VALUE,
              'scroll-into-view': NO_DEFAULT_VALUE,
              'scroll-with-animation': DEFAULT_FALSE,
              'enable-back-to-top': DEFAULT_FALSE,
              bindScrollToUpper: NO_DEFAULT_VALUE,
              bindScrollToLower: NO_DEFAULT_VALUE,
              bindScroll: NO_DEFAULT_VALUE
            },
            touchEvents
          ),
          animation
        );
        var Swiper = Object.assign(
          {
            'indicator-dots': DEFAULT_FALSE,
            'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
            'indicator-active-color': singleQuote('#000000'),
            autoplay: DEFAULT_FALSE,
            current: '0',
            interval: '5000',
            duration: '500',
            circular: DEFAULT_FALSE,
            vertical: DEFAULT_FALSE,
            'previous-margin': singleQuote('0px'),
            'next-margin': singleQuote('0px'),
            'display-multiple-items': '1',
            bindChange: NO_DEFAULT_VALUE,
            bindTransition: NO_DEFAULT_VALUE,
            bindAnimationFinish: NO_DEFAULT_VALUE
          },
          touchEvents
        );
        var SwiperItem = {
          'item-id': NO_DEFAULT_VALUE
        };
        var Navigator = {
          url: NO_DEFAULT_VALUE,
          'open-type': singleQuote('navigate'),
          delta: '1',
          'hover-class': singleQuote('navigator-hover'),
          'hover-stop-propagation': DEFAULT_FALSE,
          'hover-start-time': '50',
          'hover-stay-time': '600',
          bindSuccess: NO_DEFAULT_VALUE,
          bindFail: NO_DEFAULT_VALUE,
          bindComplete: NO_DEFAULT_VALUE
        };
        var Audio = {
          id: NO_DEFAULT_VALUE,
          src: NO_DEFAULT_VALUE,
          loop: DEFAULT_FALSE,
          controls: DEFAULT_FALSE,
          poster: NO_DEFAULT_VALUE,
          name: NO_DEFAULT_VALUE,
          author: NO_DEFAULT_VALUE,
          bindError: NO_DEFAULT_VALUE,
          bindPlay: NO_DEFAULT_VALUE,
          bindPause: NO_DEFAULT_VALUE,
          bindTimeUpdate: NO_DEFAULT_VALUE,
          bindEnded: NO_DEFAULT_VALUE
        };
        var Camera = {
          'device-position': singleQuote('back'),
          flash: singleQuote('auto'),
          bindStop: NO_DEFAULT_VALUE,
          bindError: NO_DEFAULT_VALUE
        };
        var Image = Object.assign(
          {
            src: NO_DEFAULT_VALUE,
            mode: singleQuote('scaleToFill'),
            'lazy-load': DEFAULT_FALSE,
            bindError: NO_DEFAULT_VALUE,
            bindLoad: NO_DEFAULT_VALUE
          },
          touchEvents
        );
        var LivePlayer = Object.assign(
          {
            src: NO_DEFAULT_VALUE,
            autoplay: DEFAULT_FALSE,
            muted: DEFAULT_FALSE,
            orientation: singleQuote('vertical'),
            'object-fit': singleQuote('contain'),
            'background-mute': DEFAULT_FALSE,
            'min-cache': '1',
            'max-cache': '3',
            bindStateChange: NO_DEFAULT_VALUE,
            bindFullScreenChange: NO_DEFAULT_VALUE,
            bindNetStatus: NO_DEFAULT_VALUE
          },
          animation
        );
        var Video = Object.assign(
          {
            src: NO_DEFAULT_VALUE,
            duration: NO_DEFAULT_VALUE,
            controls: DEFAULT_TRUE,
            'danmu-list': NO_DEFAULT_VALUE,
            'danmu-btn': NO_DEFAULT_VALUE,
            'enable-danmu': NO_DEFAULT_VALUE,
            autoplay: DEFAULT_FALSE,
            loop: DEFAULT_FALSE,
            muted: DEFAULT_FALSE,
            'initial-time': '0',
            'page-gesture': DEFAULT_FALSE,
            direction: NO_DEFAULT_VALUE,
            'show-progress': DEFAULT_TRUE,
            'show-fullscreen-btn': DEFAULT_TRUE,
            'show-play-btn': DEFAULT_TRUE,
            'show-center-play-btn': DEFAULT_TRUE,
            'enable-progress-gesture': DEFAULT_TRUE,
            'object-fit': singleQuote('contain'),
            poster: NO_DEFAULT_VALUE,
            'show-mute-btn': DEFAULT_FALSE,
            bindPlay: NO_DEFAULT_VALUE,
            bindPause: NO_DEFAULT_VALUE,
            bindEnded: NO_DEFAULT_VALUE,
            bindTimeUpdate: NO_DEFAULT_VALUE,
            bindFullScreenChange: NO_DEFAULT_VALUE,
            bindWaiting: NO_DEFAULT_VALUE,
            bindError: NO_DEFAULT_VALUE
          },
          animation
        );
        var Canvas = Object.assign(
          {
            'canvas-id': NO_DEFAULT_VALUE,
            'disable-scroll': DEFAULT_FALSE,
            bindError: NO_DEFAULT_VALUE
          },
          touchEvents
        );
        var Ad = {
          'unit-id': NO_DEFAULT_VALUE,
          'ad-intervals': NO_DEFAULT_VALUE,
          bindLoad: NO_DEFAULT_VALUE,
          bindError: NO_DEFAULT_VALUE,
          bindClose: NO_DEFAULT_VALUE
        };
        var WebView = {
          src: NO_DEFAULT_VALUE,
          bindMessage: NO_DEFAULT_VALUE,
          bindLoad: NO_DEFAULT_VALUE,
          bindError: NO_DEFAULT_VALUE
        };
        var Block = {};
        // For Vue，因为 slot 标签被 vue 占用了
        var SlotView = {
          name: NO_DEFAULT_VALUE
        };
        // For React
        // Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
        // 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
        // 不给 View 直接加 slot 属性的原因是性能损耗
        var Slot = {
          name: NO_DEFAULT_VALUE
        };
        var NativeSlot = {
          name: NO_DEFAULT_VALUE
        };
        var internalComponents = {
          View: View,
          Icon: Icon,
          Progress: Progress,
          RichText: RichText,
          Text: Text,
          Button: Button,
          Checkbox: Checkbox,
          CheckboxGroup: CheckboxGroup,
          Form: Form,
          Input: Input,
          Label: Label,
          Picker: Picker,
          PickerView: PickerView,
          PickerViewColumn: PickerViewColumn,
          Radio: Radio,
          RadioGroup: RadioGroup,
          Slider: Slider,
          Switch: Switch,
          CoverImage: CoverImage,
          Textarea: Textarea,
          CoverView: CoverView,
          MovableArea: MovableArea,
          MovableView: MovableView,
          ScrollView: ScrollView,
          Swiper: Swiper,
          SwiperItem: SwiperItem,
          Navigator: Navigator,
          Audio: Audio,
          Camera: Camera,
          Image: Image,
          LivePlayer: LivePlayer,
          Video: Video,
          Canvas: Canvas,
          Ad: Ad,
          WebView: WebView,
          Block: Block,
          Map: MapComp,
          Slot: Slot,
          SlotView: SlotView,
          NativeSlot: NativeSlot
        };
        var controlledComponent = new Set([
          'input',
          'checkbox',
          'picker',
          'picker-view',
          'radio',
          'slider',
          'switch',
          'textarea'
        ]);
        var focusComponents = new Set(['input', 'textarea']);
        var voidElements = new Set([
          'progress',
          'icon',
          'rich-text',
          'input',
          'textarea',
          'slider',
          'switch',
          'audio',
          'ad',
          'official-account',
          'open-data',
          'navigation-bar'
        ]);
        var nestElements = new Map([
          ['view', -1],
          ['catch-view', -1],
          ['cover-view', -1],
          ['static-view', -1],
          ['pure-view', -1],
          ['block', -1],
          ['text', -1],
          ['static-text', 6],
          ['slot', 8],
          ['slot-view', 8],
          ['label', 6],
          ['form', 4],
          ['scroll-view', 4],
          ['swiper', 4],
          ['swiper-item', 4]
        ]);
        var Events = /*#__PURE__*/ (function () {
          function Events(opts) {
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
            )(this, Events);
            var _a;
            this.callbacks =
              (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
          }
          Object(
            _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[
              /* default */ 'a'
            ]
          )(Events, [
            {
              key: 'on',
              value: function on(eventName, callback, context) {
                var event, node, tail, list;
                if (!callback) {
                  return this;
                }
                eventName = eventName.split(Events.eventSplitter);
                this.callbacks || (this.callbacks = {});
                var calls = this.callbacks;
                while ((event = eventName.shift())) {
                  list = calls[event];
                  node = list ? list.tail : {};
                  node.next = tail = {};
                  node.context = context;
                  node.callback = callback;
                  calls[event] = {
                    tail: tail,
                    next: list ? list.next : node
                  };
                }
                return this;
              }
            },
            {
              key: 'once',
              value: function once(events, callback, context) {
                var _this = this;
                var wrapper = function wrapper() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  callback.apply(_this, args);
                  _this.off(events, wrapper, context);
                };
                this.on(events, wrapper, context);
                return this;
              }
            },
            {
              key: 'off',
              value: function off(events, callback, context) {
                var event, calls, node, tail, cb, ctx;
                if (!(calls = this.callbacks)) {
                  return this;
                }
                if (!(events || callback || context)) {
                  delete this.callbacks;
                  return this;
                }
                events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
                while ((event = events.shift())) {
                  node = calls[event];
                  delete calls[event];
                  if (!node || !(callback || context)) {
                    continue;
                  }
                  tail = node.tail;
                  while ((node = node.next) !== tail) {
                    cb = node.callback;
                    ctx = node.context;
                    if ((callback && cb !== callback) || (context && ctx !== context)) {
                      this.on(event, cb, ctx);
                    }
                  }
                }
                return this;
              }
            },
            {
              key: 'trigger',
              value: function trigger(events) {
                var event, node, calls, tail;
                if (!(calls = this.callbacks)) {
                  return this;
                }
                events = events.split(Events.eventSplitter);
                var rest = [].slice.call(arguments, 1);
                while ((event = events.shift())) {
                  if ((node = calls[event])) {
                    tail = node.tail;
                    while ((node = node.next) !== tail) {
                      node.callback.apply(node.context || this, rest);
                    }
                  }
                }
                return this;
              }
            }
          ]);
          return Events;
        })();
        Events.eventSplitter = /\s+/;
        function isString(o) {
          return typeof o === 'string';
        }
        function isUndefined(o) {
          return typeof o === 'undefined';
        }
        function isNull(o) {
          return o === null;
        }
        function isObject(o) {
          return (
            o !== null &&
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__[
                /* default */ 'a'
              ]
            )(o) === 'object'
          );
        }
        function isBoolean(o) {
          return o === true || o === false;
        }
        function isFunction(o) {
          return typeof o === 'function';
        }
        function isNumber(o) {
          return typeof o === 'number';
        }
        function isBooleanStringLiteral(o) {
          return o === 'true' || o === 'false';
        }
        var isArray = Array.isArray;
        var HOOK_TYPE;
        (function (HOOK_TYPE) {
          HOOK_TYPE[(HOOK_TYPE['SINGLE'] = 0)] = 'SINGLE';
          HOOK_TYPE[(HOOK_TYPE['MULTI'] = 1)] = 'MULTI';
          HOOK_TYPE[(HOOK_TYPE['WATERFALL'] = 2)] = 'WATERFALL';
        })(HOOK_TYPE || (HOOK_TYPE = {}));
        var defaultMiniLifecycle = {
          app: ['onLaunch', 'onShow', 'onHide'],
          page: [
            'onLoad',
            'onUnload',
            'onReady',
            'onShow',
            'onHide',
            [
              'onPullDownRefresh',
              'onReachBottom',
              'onPageScroll',
              'onResize',
              'onTabItemTap',
              'onTitleClick',
              'onOptionMenuClick',
              'onPopMenuClick',
              'onPullIntercept',
              'onAddToFavorites'
            ],
            ['onShareAppMessage', 'onShareTimeline']
          ],
          component: ['attached', 'detached']
        };
        function TaroHook(type, initial) {
          return {
            type: type,
            initial: initial || null
          };
        }
        var TaroHooks = /*#__PURE__*/ (function (_Events) {
          Object(
            _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__[
              /* default */ 'a'
            ]
          )(TaroHooks, _Events);
          var _super = Object(
            _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__[
              /* default */ 'a'
            ]
          )(TaroHooks);
          function TaroHooks(hooks, opts) {
            var _this2;
            Object(
              _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__[
                /* default */ 'a'
              ]
            )(this, TaroHooks);
            _this2 = _super.call(this, opts);
            _this2.hooks = hooks;
            for (var hookName in hooks) {
              var initial = hooks[hookName].initial;
              if (isFunction(initial)) {
                _this2.on(hookName, initial);
              }
            }
            return _this2;
          }
          Object(
            _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__[
              /* default */ 'a'
            ]
          )(TaroHooks, [
            {
              key: 'tapOneOrMany',
              value: function tapOneOrMany(hookName, callback) {
                var _this3 = this;
                var list = isFunction(callback) ? [callback] : callback;
                list.forEach(function (cb) {
                  return _this3.on(hookName, cb);
                });
              }
            },
            {
              key: 'tap',
              value: function tap(hookName, callback) {
                var hooks = this.hooks;
                var _hooks$hookName = hooks[hookName],
                  type = _hooks$hookName.type,
                  initial = _hooks$hookName.initial;
                if (type === HOOK_TYPE.SINGLE) {
                  this.off(hookName);
                  this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
                } else {
                  initial && this.off(hookName, initial);
                  this.tapOneOrMany(hookName, callback);
                }
              }
            },
            {
              key: 'call',
              value: function call(hookName) {
                var _a;
                var hook = this.hooks[hookName];
                if (!hook) return;
                var type = hook.type;
                var calls = this.callbacks;
                if (!calls) return;
                var list = calls[hookName];
                if (list) {
                  var tail = list.tail;
                  var node = list.next;
                  for (
                    var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
                    _key2 < _len2;
                    _key2++
                  ) {
                    rest[_key2 - 1] = arguments[_key2];
                  }
                  var args = rest;
                  var res;
                  while (node !== tail) {
                    res =
                      (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
                    if (type === HOOK_TYPE.WATERFALL) {
                      var params = [res];
                      args = params;
                    }
                    node = node.next;
                  }
                  return res;
                }
              }
            },
            {
              key: 'isExist',
              value: function isExist(hookName) {
                var _a;
                return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
              }
            }
          ]);
          return TaroHooks;
        })(Events);
        var hooks = new TaroHooks({
          getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (defaultConfig) {
            return defaultConfig;
          }),
          getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function () {
            return this.call('getMiniLifecycle', defaultMiniLifecycle);
          }),
          getLifecycle: TaroHook(HOOK_TYPE.SINGLE, function (instance, lifecycle) {
            return instance[lifecycle];
          }),
          getPathIndex: TaroHook(HOOK_TYPE.SINGLE, function (indexOfNode) {
            return '['.concat(indexOfNode, ']');
          }),
          getEventCenter: TaroHook(HOOK_TYPE.SINGLE, function (Events) {
            return new Events();
          }),
          isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, function (eventName) {
            /**
             * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
             * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
             */
            var BUBBLE_EVENTS = new Set([
              'touchstart',
              'touchmove',
              'touchcancel',
              'touchend',
              'touchforcechange',
              'tap',
              'longpress',
              'longtap',
              'transitionend',
              'animationstart',
              'animationiteration',
              'animationend'
            ]);
            return BUBBLE_EVENTS.has(eventName);
          }),
          getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, function () {
            return ['view', 'text', 'image'];
          }),
          onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
          batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
          mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
          modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
          createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
          getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
          modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
          modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
          modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
          onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
          modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
          modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function (e) {
            try {
              // 有些小程序的事件对象的某些属性只读
              this.call('modifyMpEvent', e);
            } catch (error) {
              console.warn('[Taro modifyMpEvent hook Error]: ', error);
            }
          }),
          modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
          modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
          initNativeApi: TaroHook(HOOK_TYPE.MULTI),
          patchElement: TaroHook(HOOK_TYPE.MULTI)
        });
        var EMPTY_OBJ = {};
        var EMPTY_ARR = [];
        var noop = function noop() {};
        /**
         * box creates a boxed value.
         *
         * @typeparam T Value type.
         * @param v Value.
         * @returns Boxed value.
         */
        var box = function box(v) {
          return {
            v: v
          };
        };
        /**
         * box creates a boxed value.
         *
         * @typeparam T Value type.
         * @param b Boxed value.
         * @returns Value.
         */
        var unbox = function unbox(b) {
          return b.v;
        };
        function toDashed(s) {
          return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        }
        function toCamelCase(s) {
          var camel = '';
          var nextCap = false;
          for (var i = 0; i < s.length; i++) {
            if (s[i] !== '-') {
              camel += nextCap ? s[i].toUpperCase() : s[i];
              nextCap = false;
            } else {
              nextCap = true;
            }
          }
          return camel;
        }
        var toKebabCase = function toKebabCase(string) {
          return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        };
        function capitalize(s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasOwn = function hasOwn(val, key) {
          return hasOwnProperty.call(val, key);
        };
        /**
         * ensure takes a condition and throw a error if the condition fails,
         * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
         * @param condition condition.
         * @param msg error message.
         */
        function ensure(condition, msg) {
          if (!condition) {
            if (true) {
              var reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
              throw new Error(msg + reportIssue);
            } else {
            }
          }
        }
        function warn(condition, msg) {
          if (true) {
            if (condition) {
              console.warn('[taro warn] '.concat(msg));
            }
          }
        }
        function queryToJson(str) {
          var dec = decodeURIComponent;
          var qp = str.split('&');
          var ret = {};
          var name;
          var val;
          for (var i = 0, l = qp.length, item; i < l; ++i) {
            item = qp[i];
            if (item.length) {
              var s = item.indexOf('=');
              if (s < 0) {
                name = dec(item);
                val = '';
              } else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
              }
              if (typeof ret[name] === 'string') {
                // inline'd type check
                ret[name] = [ret[name]];
              }
              if (Array.isArray(ret[name])) {
                ret[name].push(val);
              } else {
                ret[name] = val;
              }
            }
          }
          return ret; // Object
        }

        var _uniqueId = 1;
        var _loadTime = new Date().getTime().toString();
        function getUniqueKey() {
          return _loadTime + _uniqueId++;
        }
        var cacheData = {};
        function cacheDataSet(key, val) {
          cacheData[key] = val;
        }
        function cacheDataGet(key, delelteAfterGet) {
          var temp = cacheData[key];
          delelteAfterGet && delete cacheData[key];
          return temp;
        }
        function cacheDataHas(key) {
          return key in cacheData;
        }
        function mergeInternalComponents(components) {
          Object.keys(components).forEach(function (name) {
            if (name in internalComponents) {
              Object.assign(internalComponents[name], components[name]);
            } else {
              internalComponents[name] = components[name];
            }
          });
          return internalComponents;
        }
        function getComponentsAlias(origin) {
          var mapping = {};
          var viewAttrs = origin.View;
          var extraList = {
            '#text': {},
            StaticView: viewAttrs,
            StaticImage: origin.Image,
            StaticText: origin.Text,
            PureView: viewAttrs,
            CatchView: viewAttrs
          };
          origin = Object.assign(Object.assign({}, origin), extraList);
          Object.keys(origin)
            .sort(function (a, b) {
              var reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
              var isACommonly = reg.test(a);
              var isBCommonly = reg.test(b);
              if (isACommonly && isBCommonly) {
                return a > b ? 1 : -1;
              } else if (isACommonly) {
                return -1;
              } else if (isBCommonly) {
                return 1;
              } else {
                return a >= b ? 1 : -1;
              }
            })
            .forEach(function (key, num) {
              var obj = {
                _num: String(num)
              };
              Object.keys(origin[key])
                .filter(function (attr) {
                  return !/^bind/.test(attr) && !['focus', 'blur'].includes(attr);
                })
                .sort()
                .forEach(function (attr, index) {
                  obj[toCamelCase(attr)] = 'p' + index;
                });
              mapping[toDashed(key)] = obj;
            });
          return mapping;
        }
        function mergeReconciler(hostConfig, hooksForTest) {
          var obj = hooksForTest || hooks;
          var keys = Object.keys(hostConfig);
          keys.forEach(function (key) {
            obj.tap(key, hostConfig[key]);
          });
        }
        function nonsupport(api) {
          return function () {
            console.warn('\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(api));
          };
        }
        function setUniqueKeyToRoute(key, obj) {
          var routerParamsPrivateKey = '__key_';
          var useDataCacheApis = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
          if (useDataCacheApis.indexOf(key) > -1) {
            var url = (obj.url = obj.url || '');
            var hasMark = url.indexOf('?') > -1;
            var cacheKey = getUniqueKey();
            obj.url += (hasMark ? '&' : '?') + ''.concat(routerParamsPrivateKey, '=').concat(cacheKey);
          }
        }
        function indent(str, size) {
          return str
            .split('\n')
            .map(function (line, index) {
              var indent = index === 0 ? '' : Array(size).fill(' ').join('');
              return indent + line;
            })
            .join('\n');
        }
        var needPromiseApis = new Set([
          'addPhoneContact',
          'authorize',
          'canvasGetImageData',
          'canvasPutImageData',
          'canvasToTempFilePath',
          'checkSession',
          'chooseAddress',
          'chooseImage',
          'chooseInvoiceTitle',
          'chooseLocation',
          'chooseVideo',
          'clearStorage',
          'closeBLEConnection',
          'closeBluetoothAdapter',
          'closeSocket',
          'compressImage',
          'connectSocket',
          'createBLEConnection',
          'downloadFile',
          'exitMiniProgram',
          'getAvailableAudioSources',
          'getBLEDeviceCharacteristics',
          'getBLEDeviceServices',
          'getBatteryInfo',
          'getBeacons',
          'getBluetoothAdapterState',
          'getBluetoothDevices',
          'getClipboardData',
          'getConnectedBluetoothDevices',
          'getConnectedWifi',
          'getExtConfig',
          'getFileInfo',
          'getImageInfo',
          'getLocation',
          'getNetworkType',
          'getSavedFileInfo',
          'getSavedFileList',
          'getScreenBrightness',
          'getSetting',
          'getStorage',
          'getStorageInfo',
          'getSystemInfo',
          'getUserInfo',
          'getWifiList',
          'hideHomeButton',
          'hideShareMenu',
          'hideTabBar',
          'hideTabBarRedDot',
          'loadFontFace',
          'login',
          'makePhoneCall',
          'navigateBack',
          'navigateBackMiniProgram',
          'navigateTo',
          'navigateToBookshelf',
          'navigateToMiniProgram',
          'notifyBLECharacteristicValueChange',
          'hideKeyboard',
          'hideLoading',
          'hideNavigationBarLoading',
          'hideToast',
          'openBluetoothAdapter',
          'openDocument',
          'openLocation',
          'openSetting',
          'pageScrollTo',
          'previewImage',
          'queryBookshelf',
          'reLaunch',
          'readBLECharacteristicValue',
          'redirectTo',
          'removeSavedFile',
          'removeStorage',
          'removeTabBarBadge',
          'requestSubscribeMessage',
          'saveFile',
          'saveImageToPhotosAlbum',
          'saveVideoToPhotosAlbum',
          'scanCode',
          'sendSocketMessage',
          'setBackgroundColor',
          'setBackgroundTextStyle',
          'setClipboardData',
          'setEnableDebug',
          'setInnerAudioOption',
          'setKeepScreenOn',
          'setNavigationBarColor',
          'setNavigationBarTitle',
          'setScreenBrightness',
          'setStorage',
          'setTabBarBadge',
          'setTabBarItem',
          'setTabBarStyle',
          'showActionSheet',
          'showFavoriteGuide',
          'showLoading',
          'showModal',
          'showShareMenu',
          'showTabBar',
          'showTabBarRedDot',
          'showToast',
          'startBeaconDiscovery',
          'startBluetoothDevicesDiscovery',
          'startDeviceMotionListening',
          'startPullDownRefresh',
          'stopBeaconDiscovery',
          'stopBluetoothDevicesDiscovery',
          'stopCompass',
          'startCompass',
          'startAccelerometer',
          'stopAccelerometer',
          'showNavigationBarLoading',
          'stopDeviceMotionListening',
          'stopPullDownRefresh',
          'switchTab',
          'uploadFile',
          'vibrateLong',
          'vibrateShort',
          'writeBLECharacteristicValue'
        ]);
        function getCanIUseWebp(taro) {
          return function () {
            var _a;
            var res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);
            if (!res) {
              if (true) {
                console.error('不支持 API canIUseWebp');
              }
              return false;
            }
            var platform = res.platform;
            var platformLower = platform.toLowerCase();
            if (platformLower === 'android' || platformLower === 'devtools') {
              return true;
            }
            return false;
          };
        }
        function getNormalRequest(global) {
          return function request(options) {
            options = options
              ? isString(options)
                ? {
                    url: options
                  }
                : options
              : {};
            var originSuccess = options.success;
            var originFail = options.fail;
            var originComplete = options.complete;
            var requestTask;
            var p = new Promise(function (resolve, reject) {
              options.success = function (res) {
                originSuccess && originSuccess(res);
                resolve(res);
              };
              options.fail = function (res) {
                originFail && originFail(res);
                reject(res);
              };
              options.complete = function (res) {
                originComplete && originComplete(res);
              };
              requestTask = global.request(options);
            });
            equipTaskMethodsIntoPromise(requestTask, p);
            p.abort = function (cb) {
              cb && cb();
              if (requestTask) {
                requestTask.abort();
              }
              return p;
            };
            return p;
          };
        }
        function processApis(taro, global) {
          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var patchNeedPromiseApis = config.needPromiseApis || [];
          var _needPromiseApis = new Set(
            [].concat(
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(patchNeedPromiseApis),
              Object(
                _Users_yangxiaolu3_Documents_JD_NutUI_online_weapp_nutui_src_sites_weapp_project_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(needPromiseApis)
            )
          );
          var preserved = [
            'getEnv',
            'interceptors',
            'Current',
            'getCurrentInstance',
            'options',
            'nextTick',
            'eventCenter',
            'Events',
            'preload',
            'webpackJsonp'
          ];
          var apis = new Set(
            !config.isOnlyPromisify
              ? Object.keys(global).filter(function (api) {
                  return preserved.indexOf(api) === -1;
                })
              : patchNeedPromiseApis
          );
          if (config.modifyApis) {
            config.modifyApis(apis);
          }
          apis.forEach(function (key) {
            if (_needPromiseApis.has(key)) {
              var originKey = key;
              taro[originKey] = function () {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                for (
                  var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
                  _key3 < _len3;
                  _key3++
                ) {
                  args[_key3 - 1] = arguments[_key3];
                }
                var key = originKey;
                // 第一个参数 options 为字符串，单独处理
                if (typeof options === 'string') {
                  if (args.length) {
                    return global[key].apply(global, [options].concat(args));
                  }
                  return global[key](options);
                }
                // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
                if (config.transformMeta) {
                  var transformResult = config.transformMeta(key, options);
                  key = transformResult.key;
                  options = transformResult.options;
                  // 新 key 可能不存在
                  if (!global.hasOwnProperty(key)) {
                    return nonsupport(key)();
                  }
                }
                var task = null;
                var obj = Object.assign({}, options);
                // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。
                setUniqueKeyToRoute(key, options);
                // Promise 化
                var p = new Promise(function (resolve, reject) {
                  obj.success = function (res) {
                    var _a, _b;
                    (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
                    (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);
                    if (key === 'connectSocket') {
                      resolve(
                        Promise.resolve().then(function () {
                          return task ? Object.assign(task, res) : res;
                        })
                      );
                    } else {
                      resolve(res);
                    }
                  };
                  obj.fail = function (res) {
                    var _a;
                    (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
                    reject(res);
                  };
                  obj.complete = function (res) {
                    var _a;
                    (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
                  };
                  if (args.length) {
                    task = global[key].apply(global, [obj].concat(args));
                  } else {
                    task = global[key](obj);
                  }
                });
                // 给 promise 对象挂载属性
                if (['uploadFile', 'downloadFile'].includes(key)) {
                  equipTaskMethodsIntoPromise(task, p);
                  p.progress = function (cb) {
                    task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
                    return p;
                  };
                  p.abort = function (cb) {
                    cb === null || cb === void 0 ? void 0 : cb();
                    task === null || task === void 0 ? void 0 : task.abort();
                    return p;
                  };
                }
                return p;
              };
            } else {
              var platformKey = key;
              // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段
              if (config.transformMeta) {
                platformKey = config.transformMeta(key, {}).key;
              }
              // API 不存在
              if (!global.hasOwnProperty(platformKey)) {
                taro[key] = nonsupport(key);
                return;
              }
              if (isFunction(global[key])) {
                taro[key] = function () {
                  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                  }
                  if (config.handleSyncApis) {
                    return config.handleSyncApis(key, global, args);
                  } else {
                    return global[platformKey].apply(global, args);
                  }
                };
              } else {
                taro[key] = global[platformKey];
              }
            }
          });
          !config.isOnlyPromisify && equipCommonApis(taro, global, config);
        }
        /**
         * 挂载常用 API
         * @param taro Taro 对象
         * @param global 小程序全局对象，如微信的 wx，支付宝的 my
         */
        function equipCommonApis(taro, global) {
          var apis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          taro.canIUseWebp = getCanIUseWebp(taro);
          taro.getCurrentPages = getCurrentPages || nonsupport('getCurrentPages');
          taro.getApp = getApp || nonsupport('getApp');
          taro.env = global.env || {};
          try {
            taro.requirePlugin = requirePlugin || nonsupport('requirePlugin');
          } catch (error) {
            taro.requirePlugin = nonsupport('requirePlugin');
          }
          // request & interceptors
          var request = apis.request || getNormalRequest(global);
          function taroInterceptor(chain) {
            return request(chain.requestParams);
          }
          var link = new taro.Link(taroInterceptor);
          taro.request = link.request.bind(link);
          taro.addInterceptor = link.addInterceptor.bind(link);
          taro.cleanInterceptors = link.cleanInterceptors.bind(link);
          taro.miniGlobal = taro.options.miniGlobal = global;
        }
        /**
         * 将Task对象中的方法挂载到promise对象中，适配小程序api原生返回结果
         * @param task Task对象 {RequestTask | DownloadTask | UploadTask}
         * @param promise Promise
         */
        function equipTaskMethodsIntoPromise(task, promise) {
          if (!task || !promise) return;
          var taskMethods = [
            'abort',
            'onHeadersReceived',
            'offHeadersReceived',
            'onProgressUpdate',
            'offProgressUpdate',
            'onChunkReceived',
            'offChunkReceived'
          ];
          task &&
            taskMethods.forEach(function (method) {
              if (method in task) {
                promise[method] = task[method].bind(task);
              }
            });
        }

        /***/
      }
  }
]);
//# sourceMappingURL=taro.js.map
