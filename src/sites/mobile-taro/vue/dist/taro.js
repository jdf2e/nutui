(wx['webpackJsonp'] = wx['webpackJsonp'] || []).push([
  ['taro'],
  {
    /***/ './node_modules/@tarojs/api/dist/index.esm.js':
      /*!****************************************************!*\
  !*** ./node_modules/@tarojs/api/dist/index.esm.js ***!
  \****************************************************/
      /*! exports provided: default */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(global, window) {
          /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! @babel/runtime/helpers/typeof */ './node_modules/@babel/runtime/helpers/typeof.js'
          );
          /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! @babel/runtime/helpers/objectSpread2 */ './node_modules/@babel/runtime/helpers/objectSpread2.js'
          );
          /* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! @babel/runtime/helpers/classCallCheck */ './node_modules/@babel/runtime/helpers/classCallCheck.js'
          );
          /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! @babel/runtime/helpers/createClass */ './node_modules/@babel/runtime/helpers/createClass.js'
          );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */ './node_modules/@babel/runtime/helpers/defineProperty.js'
          );
          /* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          );

          if (typeof Object.assign !== 'function') {
            // Must be writable: true, enumerable: false, configurable: true
            Object.assign = function(target) {
              // .length of function is 2
              if (target == null) {
                // TypeError if undefined or null
                throw new TypeError(
                  'Cannot convert undefined or null to object'
                );
              }

              var to = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) {
                  // Skip over if undefined or null
                  for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (
                      Object.prototype.hasOwnProperty.call(nextSource, nextKey)
                    ) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }

              return to;
            };
          }

          if (typeof Object.defineProperties !== 'function') {
            Object.defineProperties = function(obj, properties) {
              function convertToDescriptor(desc) {
                function hasProperty(obj, prop) {
                  return Object.prototype.hasOwnProperty.call(obj, prop);
                }

                function isCallable(v) {
                  // NB: modify as necessary if other values than functions are callable.
                  return typeof v === 'function';
                }

                if (
                  _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                    desc
                  ) !== 'object' ||
                  desc === null
                ) {
                  throw new TypeError('bad desc');
                }

                var d = {};
                if (hasProperty(desc, 'enumerable'))
                  d.enumerable = !!desc.enumerable;

                if (hasProperty(desc, 'configurable')) {
                  d.configurable = !!desc.configurable;
                }

                if (hasProperty(desc, 'value')) d.value = desc.value;
                if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

                if (hasProperty(desc, 'get')) {
                  var g = desc.get;

                  if (!isCallable(g) && typeof g !== 'undefined') {
                    throw new TypeError('bad get');
                  }

                  d.get = g;
                }

                if (hasProperty(desc, 'set')) {
                  var s = desc.set;

                  if (!isCallable(s) && typeof s !== 'undefined') {
                    throw new TypeError('bad set');
                  }

                  d.set = s;
                }

                if (
                  ('get' in d || 'set' in d) &&
                  ('value' in d || 'writable' in d)
                ) {
                  throw new TypeError('identity-confused descriptor');
                }

                return d;
              }

              if (
                _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                  obj
                ) !== 'object' ||
                obj === null
              )
                throw new TypeError('bad obj');
              properties = Object(properties);
              var keys = Object.keys(properties);
              var descs = [];

              for (var i = 0; i < keys.length; i++) {
                descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
              }

              for (var _i = 0; _i < descs.length; _i++) {
                Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
              }

              return obj;
            };
          }

          var ENV_TYPE = {
            WEAPP: 'WEAPP',
            WEB: 'WEB',
            RN: 'RN',
            SWAN: 'SWAN',
            ALIPAY: 'ALIPAY',
            TT: 'TT',
            QQ: 'QQ',
            JD: 'JD'
          };
          var _env = null; // 一个taro项目肯定运行同样的环境

          function getEnv() {
            if (_env) return _env;

            if (typeof jd !== 'undefined' && jd.getSystemInfo) {
              _env = ENV_TYPE.JD;
              return ENV_TYPE.JD;
            }

            if (typeof qq !== 'undefined' && qq.getSystemInfo) {
              _env = ENV_TYPE.QQ;
              return ENV_TYPE.QQ;
            }

            if (typeof tt !== 'undefined' && tt.getSystemInfo) {
              _env = ENV_TYPE.TT;
              return ENV_TYPE.TT;
            }

            if (typeof wx !== 'undefined' && wx.getSystemInfo) {
              _env = ENV_TYPE.WEAPP;
              return ENV_TYPE.WEAPP;
            }

            if (typeof swan !== 'undefined' && swan.getSystemInfo) {
              _env = ENV_TYPE.SWAN;
              return ENV_TYPE.SWAN;
            }

            if (typeof my !== 'undefined' && my.getSystemInfo) {
              _env = ENV_TYPE.ALIPAY;
              return ENV_TYPE.ALIPAY;
            }

            if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
              _env = ENV_TYPE.RN;
              return ENV_TYPE.RN;
            }

            if (typeof window !== 'undefined') {
              _env = ENV_TYPE.WEB;
              return ENV_TYPE.WEB;
            }

            return 'Unknown environment';
          }

          var Chain = /*#__PURE__*/ (function() {
            function Chain(requestParams) {
              var interceptors =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : [];
              var index =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : 0;

              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
                this,
                Chain
              );

              this.index = index;
              this.requestParams = requestParams;
              this.interceptors = interceptors;
            }

            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
              Chain,
              [
                {
                  key: 'proceed',
                  value: function proceed(requestParams) {
                    this.requestParams = requestParams;

                    if (this.index >= this.interceptors.length) {
                      throw new Error(
                        'chain 参数错误, 请勿直接修改 request.chain'
                      );
                    }

                    var nextInterceptor = this._getNextInterceptor();

                    var nextChain = this._getNextChain();

                    var p = nextInterceptor(nextChain);
                    var res = p.catch(function(err) {
                      return Promise.reject(err);
                    });
                    if (typeof p.abort === 'function') res.abort = p.abort;
                    return res;
                  }
                },
                {
                  key: '_getNextInterceptor',
                  value: function _getNextInterceptor() {
                    return this.interceptors[this.index];
                  }
                },
                {
                  key: '_getNextChain',
                  value: function _getNextChain() {
                    return new Chain(
                      this.requestParams,
                      this.interceptors,
                      this.index + 1
                    );
                  }
                }
              ]
            );

            return Chain;
          })();

          var Link = /*#__PURE__*/ (function() {
            function Link(interceptor) {
              _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
                this,
                Link
              );

              this.taroInterceptor = interceptor;
              this.chain = new Chain();
            }

            _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
              Link,
              [
                {
                  key: 'request',
                  value: function request(requestParams) {
                    var _this = this;

                    this.chain.interceptors = this.chain.interceptors.filter(
                      function(interceptor) {
                        return interceptor !== _this.taroInterceptor;
                      }
                    );
                    this.chain.interceptors.push(this.taroInterceptor);
                    return this.chain.proceed(
                      _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1___default()(
                        {},
                        requestParams
                      )
                    );
                  }
                },
                {
                  key: 'addInterceptor',
                  value: function addInterceptor(interceptor) {
                    this.chain.interceptors.push(interceptor);
                  }
                },
                {
                  key: 'cleanInterceptors',
                  value: function cleanInterceptors() {
                    this.chain = new Chain();
                  }
                }
              ]
            );

            return Link;
          })();

          function timeoutInterceptor(chain) {
            var requestParams = chain.requestParams;
            var p;
            var res = new Promise(function(resolve, reject) {
              var timeout = setTimeout(function() {
                timeout = null;
                reject(new Error('网络链接超时,请稍后再试！'));
              }, (requestParams && requestParams.timeout) || 60000);
              p = chain.proceed(requestParams);
              p.then(function(res) {
                if (!timeout) return;
                clearTimeout(timeout);
                resolve(res);
              }).catch(function(err) {
                timeout && clearTimeout(timeout);
                reject(err);
              });
            });
            if (p !== undefined && typeof p.abort === 'function')
              res.abort = p.abort;
            return res;
          }

          function logInterceptor(chain) {
            var requestParams = chain.requestParams;
            var method = requestParams.method,
              data = requestParams.data,
              url = requestParams.url; // eslint-disable-next-line no-console

            console.log(
              'http '.concat(method || 'GET', ' --> ').concat(url, ' data: '),
              data
            );
            var p = chain.proceed(requestParams);
            var res = p.then(function(res) {
              // eslint-disable-next-line no-console
              console.log('http <-- '.concat(url, ' result:'), res);
              return res;
            });
            if (typeof p.abort === 'function') res.abort = p.abort;
            return res;
          }

          var interceptors = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            timeoutInterceptor: timeoutInterceptor,
            logInterceptor: logInterceptor
          });

          function Behavior(options) {
            return options;
          }

          function getPreload(current) {
            return function(key, val) {
              if (
                _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                  key
                ) === 'object'
              ) {
                current.preloadData = key;
              } else if (key !== undefined && val !== undefined) {
                current.preloadData = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(
                  {},
                  key,
                  val
                );
              }
            };
          }

          function getInitPxTransform(taro) {
            return function(config) {
              var _config$designWidth = config.designWidth,
                designWidth =
                  _config$designWidth === void 0 ? 750 : _config$designWidth,
                _config$deviceRatio = config.deviceRatio,
                deviceRatio =
                  _config$deviceRatio === void 0
                    ? {
                        640: 2.34 / 2,
                        750: 1,
                        828: 1.81 / 2
                      }
                    : _config$deviceRatio;
              taro.config = taro.config || {};
              taro.config.designWidth = designWidth;
              taro.config.deviceRatio = deviceRatio;
            };
          }

          function getPxTransform(taro) {
            return function(size) {
              var _ref = taro.config || {},
                _ref$designWidth = _ref.designWidth,
                designWidth =
                  _ref$designWidth === void 0 ? 750 : _ref$designWidth,
                _ref$deviceRatio = _ref.deviceRatio,
                deviceRatio =
                  _ref$deviceRatio === void 0
                    ? {
                        640: 2.34 / 2,
                        750: 1,
                        828: 1.81 / 2
                      }
                    : _ref$deviceRatio;

              if (!(designWidth in deviceRatio)) {
                throw new Error(
                  'deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 '.concat(
                    designWidth,
                    ' \u7684\u8BBE\u7F6E\uFF01'
                  )
                );
              }

              return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
            };
          }
          /* eslint-disable camelcase */

          var Taro = {
            Behavior: Behavior,
            getEnv: getEnv,
            ENV_TYPE: ENV_TYPE,
            Link: Link,
            interceptors: interceptors,
            Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['Current'],
            getCurrentInstance:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__[
                'getCurrentInstance'
              ],
            options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['options'],
            nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['nextTick'],
            eventCenter:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['eventCenter'],
            Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['Events'],
            useDidShow:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useDidShow'],
            useDidHide:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useDidHide'],
            usePullDownRefresh:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__[
                'usePullDownRefresh'
              ],
            useReachBottom:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useReachBottom'],
            usePageScroll:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['usePageScroll'],
            useResize:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useResize'],
            useShareAppMessage:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__[
                'useShareAppMessage'
              ],
            useTabItemTap:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useTabItemTap'],
            useTitleClick:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useTitleClick'],
            useOptionMenuClick:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__[
                'useOptionMenuClick'
              ],
            usePullIntercept:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['usePullIntercept'],
            useShareTimeline:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useShareTimeline'],
            useAddToFavorites:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useAddToFavorites'],
            useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useReady'],
            useRouter:
              _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['useRouter'],
            getInitPxTransform: getInitPxTransform
          };
          Taro.initPxTransform = getInitPxTransform(Taro);
          Taro.preload = getPreload(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__['Current']
          );
          Taro.pxTransform = getPxTransform(Taro);
          /* harmony default export */ __webpack_exports__['default'] = Taro;
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['window']
        ));

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/dist/template/comp.js':
      /*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
      /*! no exports provided */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        );
        /* eslint-disable no-undef */
        // @ts-ignore

        Component(
          Object(
            _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__[
              'createRecursiveComponentConfig'
            ]
          )()
        );

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js':
      /*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/custom-wrapper.js ***!
  \**************************************************************************/
      /*! no static exports found */
      /*! all exports used */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /* eslint-disable no-undef */

        var runtime_1 = __webpack_require__(
          /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
        ); // @ts-ignore

        Component(runtime_1.createRecursiveComponentConfig('custom-wrapper'));

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime-module.js':
      /*!*********************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime-module.js ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /*! all exports used */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        // This method of obtaining a reference to the global object needs to be
        // kept identical to the way it is obtained in runtime.js
        var g =
          (function() {
            return this;
          })() || Function('return this')(); // Use `getOwnPropertyNames` because not all browsers support calling
        // `hasOwnProperty` on the global `self` object in a worker. See #183.

        var hadRuntime =
          g.regeneratorRuntime &&
          Object.getOwnPropertyNames(g).indexOf('regeneratorRuntime') >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

        var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

        g.regeneratorRuntime = undefined;
        module.exports = __webpack_require__(
          /*! ./runtime */ './node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js'
        );

        if (hadRuntime) {
          // Restore the original runtime.
          g.regeneratorRuntime = oldRuntime;
        } else {
          // Remove the global property added by runtime.js.
          try {
            delete g.regeneratorRuntime;
          } catch (e) {
            g.regeneratorRuntime = undefined;
          }
        }

        /***/
      },

    /***/ './node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js':
      /*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/regenerator-runtime/runtime.js ***!
  \**************************************************************************************/
      /*! no static exports found */
      /*! all exports used */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(module) {
          var _typeof = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/typeof */ './node_modules/@babel/runtime/helpers/typeof.js'
          );

          /**
           * Copyright (c) 2014-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          !(function(global) {
            'use strict';

            var Op = Object.prototype;
            var hasOwn = Op.hasOwnProperty;
            var undefined; // More compressible than void 0.

            var $Symbol = typeof Symbol === 'function' ? Symbol : {};
            var iteratorSymbol = $Symbol.iterator || '@@iterator';
            var asyncIteratorSymbol =
              $Symbol.asyncIterator || '@@asyncIterator';
            var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
            var inModule = (false ? undefined : _typeof(module)) === 'object';
            var runtime = global.regeneratorRuntime;

            if (runtime) {
              if (inModule) {
                // If regeneratorRuntime is defined globally and we're in a module,
                // make the exports object identical to regeneratorRuntime.
                module.exports = runtime;
              } // Don't bother evaluating the rest of this file if the runtime was
              // already defined globally.

              return;
            } // Define the runtime globally (as expected by generated code) as either
            // module.exports (if we're in a module) or a new, empty object.

            runtime = global.regeneratorRuntime = inModule
              ? module.exports
              : {};

            function wrap(innerFn, outerFn, self, tryLocsList) {
              // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
              var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator;
              var generator = Object.create(protoGenerator.prototype);
              var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
              // .throw, and .return methods.

              generator._invoke = makeInvokeMethod(innerFn, self, context);
              return generator;
            }

            runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
            // record like context.tryEntries[i].completion. This interface could
            // have been (and was previously) designed to take a closure to be
            // invoked without arguments, but in all the cases we care about we
            // already have an existing method we want to call, so there's no need
            // to create a new function object. We can even get away with assuming
            // the method takes exactly one argument, since that happens to be true
            // in every case, so we don't have to touch the arguments object. The
            // only additional allocation required is the completion record, which
            // has a stable shape and so hopefully should be cheap to allocate.

            function tryCatch(fn, obj, arg) {
              try {
                return {
                  type: 'normal',
                  arg: fn.call(obj, arg)
                };
              } catch (err) {
                return {
                  type: 'throw',
                  arg: err
                };
              }
            }

            var GenStateSuspendedStart = 'suspendedStart';
            var GenStateSuspendedYield = 'suspendedYield';
            var GenStateExecuting = 'executing';
            var GenStateCompleted = 'completed'; // Returning this object from the innerFn has the same effect as
            // breaking out of the dispatch switch statement.

            var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
            // .constructor.prototype properties for functions that return Generator
            // objects. For full spec compliance, you may wish to configure your
            // minifier not to mangle the names of these two functions.

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
            // don't natively support it.

            var IteratorPrototype = {};

            IteratorPrototype[iteratorSymbol] = function() {
              return this;
            };

            var getProto = Object.getPrototypeOf;
            var NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));

            if (
              NativeIteratorPrototype &&
              NativeIteratorPrototype !== Op &&
              hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
            ) {
              // This environment has a native %IteratorPrototype%; use it instead
              // of the polyfill.
              IteratorPrototype = NativeIteratorPrototype;
            }

            var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
              IteratorPrototype
            ));
            GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
            GeneratorFunctionPrototype.constructor = GeneratorFunction;
            GeneratorFunctionPrototype[
              toStringTagSymbol
            ] = GeneratorFunction.displayName = 'GeneratorFunction'; // Helper for defining the .next, .throw, and .return methods of the
            // Iterator interface in terms of a single ._invoke method.

            function defineIteratorMethods(prototype) {
              ['next', 'throw', 'return'].forEach(function(method) {
                prototype[method] = function(arg) {
                  return this._invoke(method, arg);
                };
              });
            }

            runtime.isGeneratorFunction = function(genFun) {
              var ctor = typeof genFun === 'function' && genFun.constructor;
              return ctor
                ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                    // do is to check its .name property.
                    (ctor.displayName || ctor.name) === 'GeneratorFunction'
                : false;
            };

            runtime.mark = function(genFun) {
              if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
              } else {
                genFun.__proto__ = GeneratorFunctionPrototype;

                if (!(toStringTagSymbol in genFun)) {
                  genFun[toStringTagSymbol] = 'GeneratorFunction';
                }
              }

              genFun.prototype = Object.create(Gp);
              return genFun;
            }; // Within the body of any async function, `await x` is transformed to
            // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
            // `hasOwn.call(value, "__await")` to determine if the yielded value is
            // meant to be awaited.

            runtime.awrap = function(arg) {
              return {
                __await: arg
              };
            };

            function AsyncIterator(generator) {
              function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);

                if (record.type === 'throw') {
                  reject(record.arg);
                } else {
                  var result = record.arg;
                  var value = result.value;

                  if (
                    value &&
                    _typeof(value) === 'object' &&
                    hasOwn.call(value, '__await')
                  ) {
                    return Promise.resolve(value.__await).then(
                      function(value) {
                        invoke('next', value, resolve, reject);
                      },
                      function(err) {
                        invoke('throw', err, resolve, reject);
                      }
                    );
                  }

                  return Promise.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration. If the Promise is rejected, however, the
                    // result for this iteration will be rejected with the same
                    // reason. Note that rejections of yielded Promises are not
                    // thrown back into the generator function, as is the case
                    // when an awaited Promise is rejected. This difference in
                    // behavior between yield and await is important, because it
                    // allows the consumer to decide what to do with the yielded
                    // rejection (swallow it and continue, manually .throw it back
                    // into the generator, abandon iteration, whatever). With
                    // await, by contrast, there is no opportunity to examine the
                    // rejection reason outside the generator function, so the
                    // only option is to throw it from the await expression, and
                    // let the generator function handle the exception.
                    result.value = unwrapped;
                    resolve(result);
                  }, reject);
                }
              }

              var previousPromise;

              function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new Promise(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }

                return (previousPromise = // If enqueue has been called before, then we want to wait until
                  // all previous Promises have been resolved before calling invoke,
                  // so that results are always delivered in the correct order. If
                  // enqueue has not been called before, then it is important to
                  // call invoke immediately, without waiting on a callback to fire,
                  // so that the async generator function has the opportunity to do
                  // any necessary setup in a predictable way. This predictability
                  // is why the Promise constructor synchronously invokes its
                  // executor callback, and why async functions synchronously
                  // execute code before the first await. Since we implement simple
                  // async functions in terms of async generators, it is especially
                  // important to get this right, even though it requires care.
                  previousPromise
                    ? previousPromise.then(
                        callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                        // invocations of the iterator.
                        callInvokeWithMethodAndArg
                      )
                    : callInvokeWithMethodAndArg());
              } // Define the unified helper method that is used to implement .next,
              // .throw, and .return (see defineIteratorMethods).

              this._invoke = enqueue;
            }

            defineIteratorMethods(AsyncIterator.prototype);

            AsyncIterator.prototype[asyncIteratorSymbol] = function() {
              return this;
            };

            runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
            // AsyncIterator objects; they just return a Promise for the value of
            // the final result produced by the iterator.

            runtime.async = function(innerFn, outerFn, self, tryLocsList) {
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList)
              );
              return runtime.isGeneratorFunction(outerFn)
                ? iter // If outerFn is a generator, return the full iterator.
                : iter.next().then(function(result) {
                    return result.done ? result.value : iter.next();
                  });
            };

            function makeInvokeMethod(innerFn, self, context) {
              var state = GenStateSuspendedStart;
              return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                  throw new Error('Generator is already running');
                }

                if (state === GenStateCompleted) {
                  if (method === 'throw') {
                    throw arg;
                  } // Be forgiving, per 25.3.3.3.3 of the spec:
                  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume

                  return doneResult();
                }

                context.method = method;
                context.arg = arg;

                while (true) {
                  var delegate = context.delegate;

                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);

                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel) continue;
                      return delegateResult;
                    }
                  }

                  if (context.method === 'next') {
                    // Setting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    context.sent = context._sent = context.arg;
                  } else if (context.method === 'throw') {
                    if (state === GenStateSuspendedStart) {
                      state = GenStateCompleted;
                      throw context.arg;
                    }

                    context.dispatchException(context.arg);
                  } else if (context.method === 'return') {
                    context.abrupt('return', context.arg);
                  }

                  state = GenStateExecuting;
                  var record = tryCatch(innerFn, self, context);

                  if (record.type === 'normal') {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done
                      ? GenStateCompleted
                      : GenStateSuspendedYield;

                    if (record.arg === ContinueSentinel) {
                      continue;
                    }

                    return {
                      value: record.arg,
                      done: context.done
                    };
                  } else if (record.type === 'throw') {
                    state = GenStateCompleted; // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.

                    context.method = 'throw';
                    context.arg = record.arg;
                  }
                }
              };
            } // Call delegate.iterator[context.method](context.arg) and handle the
            // result, either by returning a { value, done } result from the
            // delegate iterator, or by modifying context.method and context.arg,
            // setting context.delegate to null, and returning the ContinueSentinel.

            function maybeInvokeDelegate(delegate, context) {
              var method = delegate.iterator[context.method];

              if (method === undefined) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;

                if (context.method === 'throw') {
                  if (delegate.iterator.return) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = 'return';
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);

                    if (context.method === 'throw') {
                      // If maybeInvokeDelegate(context) changed context.method from
                      // "return" to "throw", let that override the TypeError below.
                      return ContinueSentinel;
                    }
                  }

                  context.method = 'throw';
                  context.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  );
                }

                return ContinueSentinel;
              }

              var record = tryCatch(method, delegate.iterator, context.arg);

              if (record.type === 'throw') {
                context.method = 'throw';
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
              }

              var info = record.arg;

              if (!info) {
                context.method = 'throw';
                context.arg = new TypeError('iterator result is not an object');
                context.delegate = null;
                return ContinueSentinel;
              }

              if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

                context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.

                if (context.method !== 'return') {
                  context.method = 'next';
                  context.arg = undefined;
                }
              } else {
                // Re-yield the result returned by the delegate method.
                return info;
              } // The delegate iterator is finished, so forget it and continue with
              // the outer generator.

              context.delegate = null;
              return ContinueSentinel;
            } // Define Generator.prototype.{next,throw,return} in terms of the
            // unified ._invoke helper method.

            defineIteratorMethods(Gp);
            Gp[toStringTagSymbol] = 'Generator'; // A Generator should always return itself as the iterator object when the
            // @@iterator function is called on it. Some browsers' implementations of the
            // iterator prototype chain incorrectly implement this, causing the Generator
            // object to not be returned from this call. This ensures that doesn't happen.
            // See https://github.com/facebook/regenerator/issues/274 for more details.

            Gp[iteratorSymbol] = function() {
              return this;
            };

            Gp.toString = function() {
              return '[object Generator]';
            };

            function pushTryEntry(locs) {
              var entry = {
                tryLoc: locs[0]
              };

              if (1 in locs) {
                entry.catchLoc = locs[1];
              }

              if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
              }

              this.tryEntries.push(entry);
            }

            function resetTryEntry(entry) {
              var record = entry.completion || {};
              record.type = 'normal';
              delete record.arg;
              entry.completion = record;
            }

            function Context(tryLocsList) {
              // The root entry object (effectively a try statement without a catch
              // or a finally block) gives us a place to store values thrown from
              // locations where there is no enclosing try statement.
              this.tryEntries = [
                {
                  tryLoc: 'root'
                }
              ];
              tryLocsList.forEach(pushTryEntry, this);
              this.reset(true);
            }

            runtime.keys = function(object) {
              var keys = [];

              for (var key in object) {
                keys.push(key);
              }

              keys.reverse(); // Rather than returning an object with a next method, we keep
              // things simple and return the next function itself.

              return function next() {
                while (keys.length) {
                  var key = keys.pop();

                  if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                  }
                } // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.

                next.done = true;
                return next;
              };
            };

            function values(iterable) {
              if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];

                if (iteratorMethod) {
                  return iteratorMethod.call(iterable);
                }

                if (typeof iterable.next === 'function') {
                  return iterable;
                }

                if (!isNaN(iterable.length)) {
                  var i = -1,
                    next = function next() {
                      while (++i < iterable.length) {
                        if (hasOwn.call(iterable, i)) {
                          next.value = iterable[i];
                          next.done = false;
                          return next;
                        }
                      }

                      next.value = undefined;
                      next.done = true;
                      return next;
                    };

                  return (next.next = next);
                }
              } // Return an iterator with no values.

              return {
                next: doneResult
              };
            }

            runtime.values = values;

            function doneResult() {
              return {
                value: undefined,
                done: true
              };
            }

            Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                this.prev = 0;
                this.next = 0; // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.

                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = 'next';
                this.arg = undefined;
                this.tryEntries.forEach(resetTryEntry);

                if (!skipTempReset) {
                  for (var name in this) {
                    // Not sure about the optimal order of these conditions:
                    if (
                      name.charAt(0) === 't' &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1))
                    ) {
                      this[name] = undefined;
                    }
                  }
                }
              },
              stop: function stop() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;

                if (rootRecord.type === 'throw') {
                  throw rootRecord.arg;
                }

                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) {
                  throw exception;
                }

                var context = this;

                function handle(loc, caught) {
                  record.type = 'throw';
                  record.arg = exception;
                  context.next = loc;

                  if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = 'next';
                    context.arg = undefined;
                  }

                  return !!caught;
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  var record = entry.completion;

                  if (entry.tryLoc === 'root') {
                    // Exception thrown outside of any try block that could handle
                    // it, so set the completion value of the entire function to
                    // throw the exception.
                    return handle('end');
                  }

                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc');
                    var hasFinally = hasOwn.call(entry, 'finallyLoc');

                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      } else if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc) {
                        return handle(entry.catchLoc, true);
                      }
                    } else if (hasFinally) {
                      if (this.prev < entry.finallyLoc) {
                        return handle(entry.finallyLoc);
                      }
                    } else {
                      throw new Error('try statement without catch or finally');
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, 'finallyLoc') &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }

                if (
                  finallyEntry &&
                  (type === 'break' || type === 'continue') &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc
                ) {
                  // Ignore the finally entry if control is not jumping to a
                  // location outside the try/catch block.
                  finallyEntry = null;
                }

                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;

                if (finallyEntry) {
                  this.method = 'next';
                  this.next = finallyEntry.finallyLoc;
                  return ContinueSentinel;
                }

                return this.complete(record);
              },
              complete: function complete(record, afterLoc) {
                if (record.type === 'throw') {
                  throw record.arg;
                }

                if (record.type === 'break' || record.type === 'continue') {
                  this.next = record.arg;
                } else if (record.type === 'return') {
                  this.rval = this.arg = record.arg;
                  this.method = 'return';
                  this.next = 'end';
                } else if (record.type === 'normal' && afterLoc) {
                  this.next = afterLoc;
                }

                return ContinueSentinel;
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                  }
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];

                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;

                    if (record.type === 'throw') {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }

                    return thrown;
                  }
                } // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.

                throw new Error('illegal catch attempt');
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                this.delegate = {
                  iterator: values(iterable),
                  resultName: resultName,
                  nextLoc: nextLoc
                };

                if (this.method === 'next') {
                  // Deliberately forget the last sent value so that we don't
                  // accidentally pass it on to the delegate.
                  this.arg = undefined;
                }

                return ContinueSentinel;
              }
            };
          })(
            // In sloppy mode, unbound `this` refers to the global object, fallback to
            // Function constructor if we're in global strict mode. That is sadly a form
            // of indirect eval which violates Content Security Policy.
            (function() {
              return this;
            })() || Function('return this')()
          );
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../webpack/buildin/module.js */ './node_modules/webpack/buildin/module.js'
          )(module)
        ));

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-html/dist/runtime.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@tarojs/plugin-html/dist/runtime.js ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        );
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );

        function genAttrMapFnFromDir(dir) {
          var fn = function fn(key, value) {
            key = key.toLowerCase();

            if (key in dir) {
              var res = dir[key];

              if (
                Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[
                    /* isString */ 'j'
                  ]
                )(res)
              ) {
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
          'map',
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
                return !props.href || /^javascript/.test(props.href)
                  ? 'view'
                  : 'navigator';
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
                key = key.toLowerCase();

                if (key === 'autofocus') {
                  key = 'focus';
                } else if (key === 'readonly') {
                  if (props.disabled === true) {
                    value = true;
                  }

                  key = 'disabled';
                } else if (key === 'type') {
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
                if (
                  key === 'type' &&
                  (value === 'submit' || value === 'reset')
                ) {
                  key = 'formType';
                }

                return [key, value];
              }
            }
          ]
        ]);

        function isHtmlTags(nodeName) {
          if (
            inlineElements.has(nodeName) ||
            blockElements.has(nodeName) ||
            specialElements.has(nodeName)
          ) {
            return true;
          }

          return false;
        }

        function getMappedType(nodeName, rawProps) {
          if (inlineElements.has(nodeName)) {
            return 'text';
          } else if (specialElements.has(nodeName)) {
            var mapping = specialElements.get(nodeName);

            if (
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'j']
              )(mapping)
            ) {
              return mapping;
            }

            var mapName = mapping.mapName;
            return Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ 'h']
            )(mapName)
              ? mapName(rawProps)
              : mapName;
          } else {
            return 'view';
          }
        }

        function getAttrMapFn(nodeName) {
          var mapping = specialElements.get(nodeName);

          if (
            !Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'j']
            )(mapping)
          ) {
            return mapping === null || mapping === void 0
              ? void 0
              : mapping.mapAttr;
          }
        }

        function getMapNameByCondition(nodeName, attr, props) {
          var mapping = specialElements.get(nodeName);
          if (
            !mapping ||
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'j']
            )(mapping)
          )
            return;
          var mapName = mapping.mapName,
            mapNameCondition = mapping.mapNameCondition;
          if (!mapNameCondition) return;

          if (
            mapNameCondition.indexOf(attr) > -1 &&
            !Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* isString */ 'j']
            )(mapName)
          ) {
            return mapName(props);
          }
        }

        function mapNameByContion(nodeName, key, element) {
          var mapName = getMapNameByCondition(nodeName, key, element.props);

          if (mapName) {
            element.enqueueUpdate({
              path: ''.concat(
                element._path,
                '.',
                'nn'
                /* NodeName */
              ),
              value: mapName
            });
          }
        }

        function ensureHtmlClass(tagName) {
          var className =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : '';
          var classList = className.split(' ');
          var htmlClass = 'h5-'.concat(tagName);

          if (classList.indexOf(htmlClass) === -1) {
            classList.push(htmlClass);
          }

          return classList.join(' ');
        }

        function ensureRect(props) {
          var style =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : '';
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

        var hostConfig = {
          modifyHydrateData: function modifyHydrateData(data) {
            var nodeName =
              data[
                'nn'
                /* NodeName */
              ];
            if (!isHtmlTags(nodeName)) return;
            true &&
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* warn */ 's']
              )(
                data[
                  'nn'
                  /* NodeName */
                ] === 'select',
                '请使用 Picker 组件代替 <select>'
              ); // map nodeName

            data[
              'nn'
              /* NodeName */
            ] = getMappedType(nodeName, data); // map attr Key/Value

            var attrMapFn = getAttrMapFn(nodeName);

            if (attrMapFn) {
              for (var key in data) {
                var value = data[key];

                var _attrMapFn = attrMapFn(key, value, data),
                  _attrMapFn2 = Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
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

              data[
                'cn'
                /* Childnodes */
              ] = [
                ((_ref = {}),
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                    /* default */ 'a'
                  ]
                )(
                  _ref,
                  'nn',
                  /* NodeName */
                  '#text'
                ),
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                    /* default */ 'a'
                  ]
                )(_ref, 'v', '\n'),
                _ref)
              ];
            }

            data[
              'cl'
              /* Class */
            ] = ensureHtmlClass(
              nodeName,
              data[
                'cl'
                /* Class */
              ]
            );
            data[
              'st'
              /* Style */
            ] = ensureRect(
              data,
              data[
                'st'
                /* Style */
              ]
            );
          },
          modifySetAttrPayload: function modifySetAttrPayload(
            element,
            key,
            payload
          ) {
            var nodeName = element.nodeName,
              _path = element._path,
              props = element.props;
            if (!isHtmlTags(nodeName)) return; // map nodeName

            mapNameByContion(nodeName, key, element); // map attr Key/Value

            var attrMapFn = getAttrMapFn(nodeName);

            if (attrMapFn) {
              var value = payload.value;

              var _attrMapFn3 = attrMapFn(key, value, props),
                _attrMapFn4 = Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                    /* default */ 'a'
                  ]
                )(_attrMapFn3, 2),
                mapKey = _attrMapFn4[0],
                mapValue = _attrMapFn4[1];

              payload.path = ''.concat(_path, '.').concat(mapKey);
              payload.value = mapValue;
            }

            if (
              key === 'cl'
              /* Class */
            ) {
              payload.value = ensureHtmlClass(nodeName, payload.value);
            } else if (
              key === 'st' ||
              /* Style */
              key === 'width' ||
              key === 'height'
            ) {
              payload.path = ''.concat(
                _path,
                '.',
                'st'
                /* Style */
              );
              payload.value = ensureRect(props, element.style.cssText);
            }
          },
          modifyRmAttrPayload: function modifyRmAttrPayload(
            element,
            key,
            payload
          ) {
            var nodeName = element.nodeName,
              _path = element._path,
              props = element.props;
            if (!isHtmlTags(nodeName)) return; // map nodeName

            mapNameByContion(nodeName, key, element); // map attr Key/Value

            var attrMapFn = getAttrMapFn(nodeName);

            if (attrMapFn) {
              var value = payload[key];

              var _attrMapFn5 = attrMapFn(key, value, props),
                _attrMapFn6 = Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                    /* default */ 'a'
                  ]
                )(_attrMapFn5, 1),
                mapKey = _attrMapFn6[0];

              payload.path = ''.concat(_path, '.').concat(mapKey);
            }

            if (
              key === 'cl'
              /* Class */
            ) {
              payload.value = ensureHtmlClass(nodeName, payload.value);
            } else if (
              key === 'st' ||
              /* Style */
              key === 'width' ||
              key === 'height'
            ) {
              payload.path = ''.concat(
                _path,
                '.',
                'st'
                /* Style */
              );
              payload.value = ensureRect(props, element.style.cssText);
            }
          },
          onAddEvent: function onAddEvent(type, _handler, _options, node) {
            if (!isHtmlTags(node.nodeName)) return;

            if (type === 'click') {
              defineMappedProp(node.__handlers, type, 'tap');
            } else if (node.nodeName === 'input') {
              if (type === 'change') {
                if (
                  node.props.type === 'checkbox' ||
                  node.props.type === 'radio'
                ) {
                  defineMappedProp(node.__handlers, type, 'tap');
                } else {
                  defineMappedProp(node.__handlers, type, 'input');
                }
              } else if (type === 'keypress') {
                defineMappedProp(node.__handlers, type, 'confirm');
              }
            }
          },
          modifyTaroEvent: function modifyTaroEvent(event, element) {
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
          }
        };
        Object(
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_2__[/* mergeReconciler */ 'm']
        )(hostConfig);

        /***/
      },

    /***/ './node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js':
      /*!********************************************************************!*\
  !*** ./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js ***!
  \********************************************************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
        );

        var needPromiseApis = new Set([
          'addCard',
          'authPrivateMessage',
          'checkIsOpenAccessibility',
          'checkIsSoterEnrolledInDevice',
          'checkIsSupportSoterAuthentication',
          'chooseInvoice',
          'chooseMedia',
          'chooseMessageFile',
          'compressVideo',
          'connectWifi',
          'createBLEPeripheralServer',
          'disableAlertBeforeUnload',
          'enableAlertBeforeUnload',
          'exitVoIPChat',
          'getBLEDeviceRSSI',
          'getBackgroundAudioPlayerState',
          'getBackgroundFetchData',
          'getBackgroundFetchToken',
          'getGroupEnterInfo',
          'getHCEState',
          'getSelectedTextRange',
          'getShareInfo',
          'getVideoInfo',
          'getWeRunData',
          'join1v1Chat',
          'joinVoIPChat',
          'makeBluetoothPair',
          'openCard',
          'openVideoEditor',
          'playBackgroundAudio',
          'playVoice',
          'previewMedia',
          'requestPayment',
          'saveFileToDisk',
          'scanItem',
          'seekBackgroundAudio',
          'sendHCEMessage',
          'setBLEMTU',
          'setBackgroundFetchToken',
          'setEnable1v1Chat',
          'setTopBarText',
          'setWifiList',
          'setWindowSize',
          'showRedPackage',
          'startGyroscope',
          'startHCE',
          'startLocalServiceDiscovery',
          'startLocationUpdate',
          'startLocationUpdateBackground',
          'startRecord',
          'startSoterAuthentication',
          'startWifi',
          'stopGyroscope',
          'stopHCE',
          'stopLocalServiceDiscovery',
          'stopLocationUpdate',
          'stopWifi',
          'subscribeVoIPVideoMembers',
          'updateShareMenu',
          'updateVoIPChatMuteConfig',
          'updateWeChatApp',
          'sendBizRedPacket',
          'getUserProfile',
          'stopBluetoothDevicesDiscovery',
          'startBluetoothDevicesDiscovery',
          'openBluetoothAdapter',
          'getConnectedBluetoothDevices',
          'getBluetoothDevices',
          'getBluetoothAdapterState',
          'closeBluetoothAdapter',
          'writeBLECharacteristicValue',
          'readBLECharacteristicValue',
          'notifyBLECharacteristicValueChange',
          'getBLEDeviceServices',
          'getBLEDeviceCharacteristics',
          'createBLEConnection',
          'closeBLEConnection',
          'startFacialRecognitionVerify'
        ]);

        function initNativeApi(taro) {
          Object(
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* processApis */ 'o']
          )(taro, wx, {
            needPromiseApis: needPromiseApis
          });
          taro.cloud = wx.cloud;
        }

        var components = {
          // ======== 调整属性 ========
          Progress: {
            'border-radius': '0',
            'font-size': '16',
            duration: '30',
            bindActiveEnd: ''
          },
          RichText: {
            space: ''
          },
          Text: {
            'user-select': 'false'
          },
          Map: {
            polygons: '[]',
            subkey: '',
            rotate: '0',
            skew: '0',
            'enable-3D': 'false',
            'show-compass': 'false',
            'show-scale': 'false',
            'enable-overlooking': 'false',
            'enable-zoom': 'true',
            'enable-scroll': 'true',
            'enable-rotate': 'false',
            'enable-satellite': 'false',
            'enable-traffic': 'false',
            setting: '[]',
            bindLabelTap: '',
            bindRegionChange: '',
            bindPoiTap: ''
          },
          Button: {
            lang: 'en',
            'session-from': '',
            'send-message-title': '',
            'send-message-path': '',
            'send-message-img': '',
            'app-parameter': '',
            'show-message-card': 'false',
            'business-id': '',
            bindGetUserInfo: '',
            bindContact: '',
            bindGetPhoneNumber: '',
            bindError: '',
            bindOpenSetting: '',
            bindLaunchApp: ''
          },
          Form: {
            'report-submit-timeout': '0'
          },
          Input: {
            'always-embed': 'false',
            'adjust-position': 'true',
            'hold-keyboard': 'false',
            bindKeyboardHeightChange: ''
          },
          Picker: {
            'header-text': ''
          },
          PickerView: {
            bindPickStart: '',
            bindPickEnd: ''
          },
          Slider: {
            color: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('#e9e9e9'),
            'selected-color': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('#1aad19')
          },
          Textarea: {
            'show-confirm-bar': 'true',
            'adjust-position': 'true',
            'hold-keyboard': 'false',
            'disable-default-padding': 'false',
            bindKeyboardHeightChange: ''
          },
          ScrollView: {
            'enable-flex': 'false',
            'scroll-anchoring': 'false',
            'refresher-enabled': 'false',
            'refresher-threshold': '45',
            'refresher-default-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('black'),
            'refresher-background': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('#FFF'),
            'refresher-triggered': 'false',
            enhanced: 'false',
            bounces: 'true',
            'show-scrollbar': 'true',
            'paging-enabled': 'false',
            'fast-deceleration': 'false',
            bindDragStart: '',
            bindDragging: '',
            bindDragEnd: '',
            bindRefresherPulling: '',
            bindRefresherRefresh: '',
            bindRefresherRestore: '',
            bindRefresherAbort: ''
          },
          Swiper: {
            'snap-to-edge': 'false',
            'easing-function': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('default')
          },
          SwiperItem: {
            'skip-hidden-item-layout': 'false'
          },
          Navigator: {
            target: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('self'),
            'app-id': '',
            path: '',
            'extra-data': '',
            version: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('version')
          },
          Camera: {
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('normal'),
            resolution: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('medium'),
            'frame-size': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('medium'),
            bindInitDone: '',
            bindScanCode: ''
          },
          Image: {
            webp: 'false',
            'show-menu-by-longpress': 'false'
          },
          LivePlayer: {
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('live'),
            'sound-mode': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('speaker'),
            'auto-pause-if-navigate': 'true',
            'auto-pause-if-open-native': 'true',
            'picture-in-picture-mode': '[]',
            bindstatechange: '',
            bindfullscreenchange: '',
            bindnetstatus: '',
            bindAudioVolumeNotify: '',
            bindEnterPictureInPicture: '',
            bindLeavePictureInPicture: ''
          },
          Video: {
            title: '',
            'play-btn-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('bottom'),
            'enable-play-gesture': 'false',
            'auto-pause-if-navigate': 'true',
            'auto-pause-if-open-native': 'true',
            'vslide-gesture': 'false',
            'vslide-gesture-in-fullscreen': 'true',
            'ad-unit-id': '',
            'poster-for-crawler': '',
            'show-casting-button': 'false',
            'picture-in-picture-mode': '[]',
            // picture-in-picture-show-progress 属性先注释掉的原因如下：
            // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
            // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
            // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
            // 'picture-in-picture-show-progress': 'false',
            'enable-auto-rotation': 'false',
            'show-screen-lock-button': 'false',
            bindProgress: '',
            bindLoadedMetadata: '',
            bindControlsToggle: '',
            bindEnterPictureInPicture: '',
            bindLeavePictureInPicture: '',
            bindSeekComplete: '',
            bindAdLoad: '',
            bindAdError: '',
            bindAdClose: '',
            bindAdPlay: ''
          },
          Canvas: {
            type: ''
          },
          Ad: {
            'ad-type': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('banner'),
            'ad-theme': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('white')
          },
          CoverView: {
            'marker-id': '',
            slot: ''
          },
          // ======== 额外组件 ========
          Editor: {
            'read-only': 'false',
            placeholder: '',
            'show-img-size': 'false',
            'show-img-toolbar': 'false',
            'show-img-resize': 'false',
            focus: 'false',
            bindReady: '',
            bindFocus: '',
            bindBlur: '',
            bindInput: '',
            bindStatusChange: '',
            name: ''
          },
          MatchMedia: {
            'min-width': '',
            'max-width': '',
            width: '',
            'min-height': '',
            'max-height': '',
            height: '',
            orientation: ''
          },
          FunctionalPageNavigator: {
            version: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('release'),
            name: '',
            args: '',
            bindSuccess: '',
            bindFail: '',
            bindCancel: ''
          },
          LivePusher: {
            url: '',
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('RTC'),
            autopush: 'false',
            muted: 'false',
            'enable-camera': 'true',
            'auto-focus': 'true',
            orientation: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('vertical'),
            beauty: '0',
            whiteness: '0',
            aspect: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('9:16'),
            'min-bitrate': '200',
            'max-bitrate': '1000',
            'audio-quality': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('high'),
            'waiting-image': '',
            'waiting-image-hash': '',
            zoom: 'false',
            'device-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('front'),
            'background-mute': 'false',
            mirror: 'false',
            'remote-mirror': 'false',
            'local-mirror': 'false',
            'audio-reverb-type': '0',
            'enable-mic': 'true',
            'enable-agc': 'false',
            'enable-ans': 'false',
            'audio-volume-type': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('voicecall'),
            'video-width': '360',
            'video-height': '640',
            'beauty-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('smooth'),
            filter: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('standard'),
            animation: '',
            bindStateChange: '',
            bindNetStatus: '',
            bindBgmStart: '',
            bindBgmProgress: '',
            bindBgmComplete: '',
            bindAudioVolumeNotify: ''
          },
          OfficialAccount: {
            bindLoad: '',
            bindError: ''
          },
          OpenData: {
            type: '',
            'open-gid': '',
            lang: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('en'),
            'default-text': '',
            'default-avatar': '',
            bindError: ''
          },
          NavigationBar: {
            title: '',
            loading: 'false',
            'front-color': '',
            'background-color': '',
            'color-animation-duration': '0',
            'color-animation-timing-func': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('linear')
          },
          PageMeta: {
            'background-text-style': '',
            'background-color': '',
            'background-color-top': '',
            'background-color-bottom': '',
            'scroll-top': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )(''),
            'scroll-duration': '300',
            'page-style': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )(''),
            'root-font-size': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )(''),
            bindResize: '',
            bindScroll: '',
            bindScrollDone: ''
          },
          VoipRoom: {
            openid: '',
            mode: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('camera'),
            'device-position': Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('front'),
            bindError: ''
          },
          AdCustom: {
            'unit-id': '',
            'ad-intervals': '',
            bindLoad: '',
            bindError: ''
          },
          PageContainer: {
            show: 'false',
            duration: '300',
            'z-index': '100',
            overlay: 'true',
            position: Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* singleQuote */ 'p']
            )('bottom'),
            round: 'false',
            'close-on-slideDown': 'false',
            'overlay-style': '',
            'custom-style': '',
            bindBeforeEnter: '',
            bindEnter: '',
            bindAfterEnter: '',
            bindBeforeLeave: '',
            bindLeave: '',
            bindAfterLeave: '',
            bindClickOverlay: ''
          }
        };
        var hostConfig = {
          initNativeApi: initNativeApi
        };
        Object(
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[/* mergeReconciler */ 'm']
        )(hostConfig);
        Object(
          _tarojs_shared__WEBPACK_IMPORTED_MODULE_0__[
            /* mergeInternalComponents */ 'l'
          ]
        )(components);

        /***/
      },

    /***/ './node_modules/@tarojs/runtime/dist/runtime.esm.js':
      /*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
      /*! exports provided: Current, ElementNames, Events, FormElement, SERVICE_IDENTIFIER, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, container, createComponentConfig, createDocument, createEvent, createNativeComponentConfig, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window */
      /*! all exports used */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function(
          process,
          global,
          document,
          window,
          requestAnimationFrame,
          cancelAnimationFrame
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Current',
            function() {
              return Current;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ElementNames',
            function() {
              return ElementNames;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Events',
            function() {
              return Events;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'FormElement',
            function() {
              return FormElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'SERVICE_IDENTIFIER',
            function() {
              return SERVICE_IDENTIFIER;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Style',
            function() {
              return Style;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroElement',
            function() {
              return TaroElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroEvent',
            function() {
              return TaroEvent;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroNode',
            function() {
              return TaroNode;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroRootElement',
            function() {
              return TaroRootElement;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TaroText',
            function() {
              return TaroText;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'cancelAnimationFrame',
            function() {
              return caf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'connectReactPage',
            function() {
              return connectReactPage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'connectVuePage',
            function() {
              return connectVuePage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'container',
            function() {
              return container;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createComponentConfig',
            function() {
              return createComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createDocument',
            function() {
              return createDocument;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createEvent',
            function() {
              return createEvent;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createNativeComponentConfig',
            function() {
              return createNativeComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createPageConfig',
            function() {
              return createPageConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createReactApp',
            function() {
              return createReactApp;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createRecursiveComponentConfig',
            function() {
              return createRecursiveComponentConfig;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createVue3App',
            function() {
              return createVue3App;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createVueApp',
            function() {
              return createVueApp;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'document',
            function() {
              return document$2;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'eventCenter',
            function() {
              return eventCenter;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getComputedStyle',
            function() {
              return getComputedStyle;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getCurrentInstance',
            function() {
              return getCurrentInstance;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'hydrate',
            function() {
              return hydrate;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'injectPageInstance',
            function() {
              return injectPageInstance;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'navigator',
            function() {
              return navigator;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'nextTick',
            function() {
              return nextTick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'now',
            function() {
              return now;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'options',
            function() {
              return options;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'requestAnimationFrame',
            function() {
              return raf;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'stringify',
            function() {
              return stringify;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useAddToFavorites',
            function() {
              return useAddToFavorites;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useDidHide',
            function() {
              return useDidHide;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useDidShow',
            function() {
              return useDidShow;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useOptionMenuClick',
            function() {
              return useOptionMenuClick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePageScroll',
            function() {
              return usePageScroll;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePullDownRefresh',
            function() {
              return usePullDownRefresh;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'usePullIntercept',
            function() {
              return usePullIntercept;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useReachBottom',
            function() {
              return useReachBottom;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useReady',
            function() {
              return useReady;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useResize',
            function() {
              return useResize;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useRouter',
            function() {
              return useRouter;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useScope',
            function() {
              return useScope;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useShareAppMessage',
            function() {
              return useShareAppMessage;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useShareTimeline',
            function() {
              return useShareTimeline;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useTabItemTap',
            function() {
              return useTabItemTap;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'useTitleClick',
            function() {
              return useTitleClick;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'window',
            function() {
              return window$1;
            }
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/regenerator */ './node_modules/@babel/runtime/regenerator/index.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/set */ './node_modules/@babel/runtime/helpers/esm/set.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/get */ './node_modules/@babel/runtime/helpers/esm/get.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ './node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/toArray */ './node_modules/@babel/runtime/helpers/esm/toArray.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/inherits */ './node_modules/@babel/runtime/helpers/esm/inherits.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ './node_modules/@babel/runtime/helpers/esm/createSuper.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ './node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/createClass */ './node_modules/@babel/runtime/helpers/esm/createClass.js'
          );
          /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/typeof */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
          );
          /* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
            /*! inversify */ './node_modules/inversify/es/inversify.js'
          );
          /* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
            /*! @tarojs/shared */ './node_modules/@tarojs/shared/dist/shared.esm.js'
          );

          /*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

          /** https://github.com/rbuckton/reflect-metadata */

          if (false) {
          } else {
            // var Reflect;
            (function(Reflect) {
              // Metadata Proposal
              // https://rbuckton.github.io/reflect-metadata/
              (function(factory) {
                // var root = typeof global === "object" ? global :
                //     typeof self === "object" ? self :
                //         typeof this === "object" ? this :
                //             Function("return this;")();
                var exporter = makeExporter(Reflect); // if (typeof root.Reflect === "undefined") {
                //     root.Reflect = Reflect;
                // }
                // else {
                //     exporter = makeExporter(root.Reflect, exporter);
                // }

                factory(exporter);

                function makeExporter(target, previous) {
                  return function(key, value) {
                    if (typeof target[key] !== 'function') {
                      Object.defineProperty(target, key, {
                        configurable: true,
                        writable: true,
                        value: value
                      });
                    }

                    if (previous) previous(key, value);
                  };
                }
              })(function(exporter) {
                var hasOwn = Object.prototype.hasOwnProperty; // feature test for Symbol support

                var supportsSymbol = typeof Symbol === 'function';
                var toPrimitiveSymbol =
                  supportsSymbol && typeof Symbol.toPrimitive !== 'undefined'
                    ? Symbol.toPrimitive
                    : '@@toPrimitive';
                var iteratorSymbol =
                  supportsSymbol && typeof Symbol.iterator !== 'undefined'
                    ? Symbol.iterator
                    : '@@iterator';
                var supportsCreate = typeof Object.create === 'function'; // feature test for Object.create support

                var supportsProto =
                  {
                    __proto__: []
                  } instanceof Array; // feature test for __proto__ support

                var downLevel = !supportsCreate && !supportsProto;
                var HashMap = {
                  // create an object in dictionary mode (a.k.a. "slow" mode in v8)
                  create: supportsCreate
                    ? function() {
                        return MakeDictionary(Object.create(null));
                      }
                    : supportsProto
                    ? function() {
                        return MakeDictionary({
                          __proto__: null
                        });
                      }
                    : function() {
                        return MakeDictionary({});
                      },
                  has: downLevel
                    ? function(map, key) {
                        return hasOwn.call(map, key);
                      }
                    : function(map, key) {
                        return key in map;
                      },
                  get: downLevel
                    ? function(map, key) {
                        return hasOwn.call(map, key) ? map[key] : undefined;
                      }
                    : function(map, key) {
                        return map[key];
                      }
                }; // Load global or shim versions of Map, Set, and WeakMap

                var functionPrototype = Object.getPrototypeOf(Function);
                var usePolyfill =
                  (typeof process === 'undefined'
                    ? 'undefined'
                    : Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                          /* default */ 'a'
                        ]
                      )(process)) === 'object' &&
                  process.env &&
                  process.env['REFLECT_METADATA_USE_MAP_POLYFILL'] === 'true';

                var _Map =
                  !usePolyfill &&
                  typeof Map === 'function' &&
                  typeof Map.prototype.entries === 'function'
                    ? Map
                    : CreateMapPolyfill();

                var _Set =
                  !usePolyfill &&
                  typeof Set === 'function' &&
                  typeof Set.prototype.entries === 'function'
                    ? Set
                    : CreateSetPolyfill();

                var _WeakMap =
                  !usePolyfill && typeof WeakMap === 'function'
                    ? WeakMap
                    : CreateWeakMapPolyfill(); // [[Metadata]] internal slot
                // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots

                var Metadata = new _WeakMap();
                /**
                 * Applies a set of decorators to a property of a target object.
                 * @param decorators An array of decorators.
                 * @param target The target object.
                 * @param propertyKey (Optional) The property key to decorate.
                 * @param attributes (Optional) The property descriptor for the target key.
                 * @remarks Decorators are applied in reverse order.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     Example = Reflect.decorate(decoratorsArray, Example);
                 *
                 *     // property (on constructor)
                 *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     Object.defineProperty(Example, "staticMethod",
                 *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
                 *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
                 *
                 *     // method (on prototype)
                 *     Object.defineProperty(Example.prototype, "method",
                 *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
                 *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
                 *
                 */

                function decorate(decorators, target, propertyKey, attributes) {
                  if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsObject(target)) throw new TypeError();
                    if (
                      !IsObject(attributes) &&
                      !IsUndefined(attributes) &&
                      !IsNull(attributes)
                    )
                      throw new TypeError();
                    if (IsNull(attributes)) attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(
                      decorators,
                      target,
                      propertyKey,
                      attributes
                    );
                  } else {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsConstructor(target)) throw new TypeError();
                    return DecorateConstructor(decorators, target);
                  }
                }

                exporter('decorate', decorate); // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
                // https://rbuckton.github.io/reflect-metadata/#reflect.metadata

                /**
                 * A default metadata decorator factory that can be used on a class, class member, or parameter.
                 * @param metadataKey The key for the metadata entry.
                 * @param metadataValue The value for the metadata entry.
                 * @returns A decorator function.
                 * @remarks
                 * If `metadataKey` is already defined for the target and target key, the
                 * metadataValue for that key will be overwritten.
                 * @example
                 *
                 *     // constructor
                 *     @Reflect.metadata(key, value)
                 *     class Example {
                 *     }
                 *
                 *     // property (on constructor, TypeScript only)
                 *     class Example {
                 *         @Reflect.metadata(key, value)
                 *         static staticProperty;
                 *     }
                 *
                 *     // property (on prototype, TypeScript only)
                 *     class Example {
                 *         @Reflect.metadata(key, value)
                 *         property;
                 *     }
                 *
                 *     // method (on constructor)
                 *     class Example {
                 *         @Reflect.metadata(key, value)
                 *         static staticMethod() { }
                 *     }
                 *
                 *     // method (on prototype)
                 *     class Example {
                 *         @Reflect.metadata(key, value)
                 *         method() { }
                 *     }
                 *
                 */

                function metadata(metadataKey, metadataValue) {
                  function decorator(target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError();
                    if (
                      !IsUndefined(propertyKey) &&
                      !IsPropertyKey(propertyKey)
                    )
                      throw new TypeError();
                    OrdinaryDefineOwnMetadata(
                      metadataKey,
                      metadataValue,
                      target,
                      propertyKey
                    );
                  }

                  return decorator;
                }

                exporter('metadata', metadata);
                /**
                 * Define a unique metadata entry on the target.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param metadataValue A value that contains attached metadata.
                 * @param target The target object on which to define metadata.
                 * @param propertyKey (Optional) The property key for the target.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     Reflect.defineMetadata("custom:annotation", options, Example);
                 *
                 *     // property (on constructor)
                 *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
                 *
                 *     // decorator factory as metadata-producing annotation.
                 *     function MyAnnotation(options): Decorator {
                 *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
                 *     }
                 *
                 */

                function defineMetadata(
                  metadataKey,
                  metadataValue,
                  target,
                  propertyKey
                ) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryDefineOwnMetadata(
                    metadataKey,
                    metadataValue,
                    target,
                    propertyKey
                  );
                }

                exporter('defineMetadata', defineMetadata);
                /**
                 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.hasMetadata("custom:annotation", Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
                 *
                 */

                function hasMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryHasMetadata(metadataKey, target, propertyKey);
                }

                exporter('hasMetadata', hasMetadata);
                /**
                 * Gets a value indicating whether the target object has the provided metadata key defined.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
                 *
                 */

                function hasOwnMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryHasOwnMetadata(
                    metadataKey,
                    target,
                    propertyKey
                  );
                }

                exporter('hasOwnMetadata', hasOwnMetadata);
                /**
                 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.getMetadata("custom:annotation", Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
                 *
                 */

                function getMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryGetMetadata(metadataKey, target, propertyKey);
                }

                exporter('getMetadata', getMetadata);
                /**
                 * Gets the metadata value for the provided metadata key on the target object.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.getOwnMetadata("custom:annotation", Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
                 *
                 */

                function getOwnMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryGetOwnMetadata(
                    metadataKey,
                    target,
                    propertyKey
                  );
                }

                exporter('getOwnMetadata', getOwnMetadata);
                /**
                 * Gets the metadata keys defined on the target object or its prototype chain.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns An array of unique metadata keys.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.getMetadataKeys(Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.getMetadataKeys(Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.getMetadataKeys(Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.getMetadataKeys(Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.getMetadataKeys(Example.prototype, "method");
                 *
                 */

                function getMetadataKeys(target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryMetadataKeys(target, propertyKey);
                }

                exporter('getMetadataKeys', getMetadataKeys);
                /**
                 * Gets the unique metadata keys defined on the target object.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns An array of unique metadata keys.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.getOwnMetadataKeys(Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
                 *
                 */

                function getOwnMetadataKeys(target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  return OrdinaryOwnMetadataKeys(target, propertyKey);
                }

                exporter('getOwnMetadataKeys', getOwnMetadataKeys);
                /**
                 * Deletes the metadata entry from the target object with the provided key.
                 * @param metadataKey A key used to store and retrieve metadata.
                 * @param target The target object on which the metadata is defined.
                 * @param propertyKey (Optional) The property key for the target.
                 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
                 * @example
                 *
                 *     class Example {
                 *         // property declarations are not part of ES6, though they are valid in TypeScript:
                 *         // static staticProperty;
                 *         // property;
                 *
                 *         constructor(p) { }
                 *         static staticMethod(p) { }
                 *         method(p) { }
                 *     }
                 *
                 *     // constructor
                 *     result = Reflect.deleteMetadata("custom:annotation", Example);
                 *
                 *     // property (on constructor)
                 *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
                 *
                 *     // property (on prototype)
                 *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
                 *
                 *     // method (on constructor)
                 *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
                 *
                 *     // method (on prototype)
                 *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
                 *
                 */

                function deleteMetadata(metadataKey, target, propertyKey) {
                  if (!IsObject(target)) throw new TypeError();
                  if (!IsUndefined(propertyKey))
                    propertyKey = ToPropertyKey(propertyKey);
                  var metadataMap = GetOrCreateMetadataMap(
                    target,
                    propertyKey,
                    /*Create*/
                    false
                  );
                  if (IsUndefined(metadataMap)) return false;
                  if (!metadataMap.delete(metadataKey)) return false;
                  if (metadataMap.size > 0) return true;
                  var targetMetadata = Metadata.get(target);
                  targetMetadata.delete(propertyKey);
                  if (targetMetadata.size > 0) return true;
                  Metadata.delete(target);
                  return true;
                }

                exporter('deleteMetadata', deleteMetadata);

                function DecorateConstructor(decorators, target) {
                  for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);

                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                      if (!IsConstructor(decorated)) throw new TypeError();
                      target = decorated;
                    }
                  }

                  return target;
                }

                function DecorateProperty(
                  decorators,
                  target,
                  propertyKey,
                  descriptor
                ) {
                  for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);

                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                      if (!IsObject(decorated)) throw new TypeError();
                      descriptor = decorated;
                    }
                  }

                  return descriptor;
                }

                function GetOrCreateMetadataMap(O, P, Create) {
                  var targetMetadata = Metadata.get(O);

                  if (IsUndefined(targetMetadata)) {
                    if (!Create) return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                  }

                  var metadataMap = targetMetadata.get(P);

                  if (IsUndefined(metadataMap)) {
                    if (!Create) return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                  }

                  return metadataMap;
                } // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata

                function OrdinaryHasMetadata(MetadataKey, O, P) {
                  var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                  if (hasOwn) return true;
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (!IsNull(parent))
                    return OrdinaryHasMetadata(MetadataKey, parent, P);
                  return false;
                } // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata

                function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                  var metadataMap = GetOrCreateMetadataMap(
                    O,
                    P,
                    /*Create*/
                    false
                  );
                  if (IsUndefined(metadataMap)) return false;
                  return ToBoolean(metadataMap.has(MetadataKey));
                } // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata

                function OrdinaryGetMetadata(MetadataKey, O, P) {
                  var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                  if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (!IsNull(parent))
                    return OrdinaryGetMetadata(MetadataKey, parent, P);
                  return undefined;
                } // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata

                function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                  var metadataMap = GetOrCreateMetadataMap(
                    O,
                    P,
                    /*Create*/
                    false
                  );
                  if (IsUndefined(metadataMap)) return undefined;
                  return metadataMap.get(MetadataKey);
                } // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata

                function OrdinaryDefineOwnMetadata(
                  MetadataKey,
                  MetadataValue,
                  O,
                  P
                ) {
                  var metadataMap = GetOrCreateMetadataMap(
                    O,
                    P,
                    /*Create*/
                    true
                  );
                  metadataMap.set(MetadataKey, MetadataValue);
                } // 3.1.6.1 OrdinaryMetadataKeys(O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys

                function OrdinaryMetadataKeys(O, P) {
                  var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                  var parent = OrdinaryGetPrototypeOf(O);
                  if (parent === null) return ownKeys;
                  var parentKeys = OrdinaryMetadataKeys(parent, P);
                  if (parentKeys.length <= 0) return ownKeys;
                  if (ownKeys.length <= 0) return parentKeys;
                  var set = new _Set();
                  var keys = [];

                  for (
                    var _i = 0, ownKeys_1 = ownKeys;
                    _i < ownKeys_1.length;
                    _i++
                  ) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);

                    if (!hasKey) {
                      set.add(key);
                      keys.push(key);
                    }
                  }

                  for (
                    var _a = 0, parentKeys_1 = parentKeys;
                    _a < parentKeys_1.length;
                    _a++
                  ) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);

                    if (!hasKey) {
                      set.add(key);
                      keys.push(key);
                    }
                  }

                  return keys;
                } // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
                // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys

                function OrdinaryOwnMetadataKeys(O, P) {
                  var keys = [];
                  var metadataMap = GetOrCreateMetadataMap(
                    O,
                    P,
                    /*Create*/
                    false
                  );
                  if (IsUndefined(metadataMap)) return keys;
                  var keysObj = metadataMap.keys();
                  var iterator = GetIterator(keysObj);
                  var k = 0;

                  while (true) {
                    var next = IteratorStep(iterator);

                    if (!next) {
                      keys.length = k;
                      return keys;
                    }

                    var nextValue = IteratorValue(next);

                    try {
                      keys[k] = nextValue;
                    } catch (e) {
                      try {
                        IteratorClose(iterator);
                      } finally {
                        throw e;
                      }
                    }

                    k++;
                  }
                } // 6 ECMAScript Data Typ0es and Values
                // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values

                function Type(x) {
                  if (x === null) return 1;
                  /* Null */

                  switch (
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                        /* default */ 'a'
                      ]
                    )(x)
                  ) {
                    case 'undefined':
                      return 0;
                    /* Undefined */

                    case 'boolean':
                      return 2;
                    /* Boolean */

                    case 'string':
                      return 3;
                    /* String */

                    case 'symbol':
                      return 4;
                    /* Symbol */

                    case 'number':
                      return 5;
                    /* Number */

                    case 'object':
                      return x === null
                        ? 1
                        : /* Null */
                          6;
                    /* Object */

                    default:
                      return 6;
                    /* Object */
                  }
                } // 6.1.1 The Undefined Type
                // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type

                function IsUndefined(x) {
                  return x === undefined;
                } // 6.1.2 The Null Type
                // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type

                function IsNull(x) {
                  return x === null;
                } // 6.1.5 The Symbol Type
                // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type

                function IsSymbol(x) {
                  return (
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                        /* default */ 'a'
                      ]
                    )(x) === 'symbol'
                  );
                } // 6.1.7 The Object Type
                // https://tc39.github.io/ecma262/#sec-object-type

                function IsObject(x) {
                  return Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                      /* default */ 'a'
                    ]
                  )(x) === 'object'
                    ? x !== null
                    : typeof x === 'function';
                } // 7.1 Type Conversion
                // https://tc39.github.io/ecma262/#sec-type-conversion
                // 7.1.1 ToPrimitive(input [, PreferredType])
                // https://tc39.github.io/ecma262/#sec-toprimitive

                function ToPrimitive(input, PreferredType) {
                  switch (Type(input)) {
                    case 0:
                      /* Undefined */
                      return input;

                    case 1:
                      /* Null */
                      return input;

                    case 2:
                      /* Boolean */
                      return input;

                    case 3:
                      /* String */
                      return input;

                    case 4:
                      /* Symbol */
                      return input;

                    case 5:
                      /* Number */
                      return input;
                  }

                  var hint =
                    PreferredType === 3
                      ? /* String */
                        'string'
                      : PreferredType === 5
                      ? /* Number */
                        'number'
                      : 'default';
                  var exoticToPrim = GetMethod(input, toPrimitiveSymbol);

                  if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result)) throw new TypeError();
                    return result;
                  }

                  return OrdinaryToPrimitive(
                    input,
                    hint === 'default' ? 'number' : hint
                  );
                } // 7.1.1.1 OrdinaryToPrimitive(O, hint)
                // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive

                function OrdinaryToPrimitive(O, hint) {
                  if (hint === 'string') {
                    var toString_1 = O.toString;

                    if (IsCallable(toString_1)) {
                      var result = toString_1.call(O);
                      if (!IsObject(result)) return result;
                    }

                    var valueOf = O.valueOf;

                    if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result)) return result;
                    }
                  } else {
                    var valueOf = O.valueOf;

                    if (IsCallable(valueOf)) {
                      var result = valueOf.call(O);
                      if (!IsObject(result)) return result;
                    }

                    var toString_2 = O.toString;

                    if (IsCallable(toString_2)) {
                      var result = toString_2.call(O);
                      if (!IsObject(result)) return result;
                    }
                  }

                  throw new TypeError();
                } // 7.1.2 ToBoolean(argument)
                // https://tc39.github.io/ecma262/2016/#sec-toboolean

                function ToBoolean(argument) {
                  return !!argument;
                } // 7.1.12 ToString(argument)
                // https://tc39.github.io/ecma262/#sec-tostring

                function ToString(argument) {
                  return '' + argument;
                } // 7.1.14 ToPropertyKey(argument)
                // https://tc39.github.io/ecma262/#sec-topropertykey

                function ToPropertyKey(argument) {
                  var key = ToPrimitive(
                    argument,
                    3
                    /* String */
                  );
                  if (IsSymbol(key)) return key;
                  return ToString(key);
                } // 7.2 Testing and Comparison Operations
                // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
                // 7.2.2 IsArray(argument)
                // https://tc39.github.io/ecma262/#sec-isarray

                function IsArray(argument) {
                  return Array.isArray
                    ? Array.isArray(argument)
                    : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) ===
                      '[object Array]';
                } // 7.2.3 IsCallable(argument)
                // https://tc39.github.io/ecma262/#sec-iscallable

                function IsCallable(argument) {
                  // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
                  return typeof argument === 'function';
                } // 7.2.4 IsConstructor(argument)
                // https://tc39.github.io/ecma262/#sec-isconstructor

                function IsConstructor(argument) {
                  // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
                  return typeof argument === 'function';
                } // 7.2.7 IsPropertyKey(argument)
                // https://tc39.github.io/ecma262/#sec-ispropertykey

                function IsPropertyKey(argument) {
                  switch (Type(argument)) {
                    case 3:
                      /* String */
                      return true;

                    case 4:
                      /* Symbol */
                      return true;

                    default:
                      return false;
                  }
                } // 7.3 Operations on Objects
                // https://tc39.github.io/ecma262/#sec-operations-on-objects
                // 7.3.9 GetMethod(V, P)
                // https://tc39.github.io/ecma262/#sec-getmethod

                function GetMethod(V, P) {
                  var func = V[P];
                  if (func === undefined || func === null) return undefined;
                  if (!IsCallable(func)) throw new TypeError();
                  return func;
                } // 7.4 Operations on Iterator Objects
                // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects

                function GetIterator(obj) {
                  var method = GetMethod(obj, iteratorSymbol);
                  if (!IsCallable(method)) throw new TypeError(); // from Call

                  var iterator = method.call(obj);
                  if (!IsObject(iterator)) throw new TypeError();
                  return iterator;
                } // 7.4.4 IteratorValue(iterResult)
                // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue

                function IteratorValue(iterResult) {
                  return iterResult.value;
                } // 7.4.5 IteratorStep(iterator)
                // https://tc39.github.io/ecma262/#sec-iteratorstep

                function IteratorStep(iterator) {
                  var result = iterator.next();
                  return result.done ? false : result;
                } // 7.4.6 IteratorClose(iterator, completion)
                // https://tc39.github.io/ecma262/#sec-iteratorclose

                function IteratorClose(iterator) {
                  var f = iterator['return'];
                  if (f) f.call(iterator);
                } // 9.1 Ordinary Object Internal Methods and Internal Slots
                // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
                // 9.1.1.1 OrdinaryGetPrototypeOf(O)
                // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof

                function OrdinaryGetPrototypeOf(O) {
                  var proto = Object.getPrototypeOf(O);
                  if (typeof O !== 'function' || O === functionPrototype)
                    return proto; // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
                  // Try to determine the superclass constructor. Compatible implementations
                  // must either set __proto__ on a subclass constructor to the superclass constructor,
                  // or ensure each class has a valid `constructor` property on its prototype that
                  // points back to the constructor.
                  // If this is not the same as Function.[[Prototype]], then this is definately inherited.
                  // This is the case when in ES6 or when using __proto__ in a compatible browser.

                  if (proto !== functionPrototype) return proto; // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.

                  var prototype = O.prototype;
                  var prototypeProto =
                    prototype && Object.getPrototypeOf(prototype);
                  if (
                    prototypeProto == null ||
                    prototypeProto === Object.prototype
                  )
                    return proto; // If the constructor was not a function, then we cannot determine the heritage.

                  var constructor = prototypeProto.constructor;
                  if (typeof constructor !== 'function') return proto; // If we have some kind of self-reference, then we cannot determine the heritage.

                  if (constructor === O) return proto; // we have a pretty good guess at the heritage.

                  return constructor;
                } // naive Map shim

                function CreateMapPolyfill() {
                  var cacheSentinel = {};
                  var arraySentinel = [];

                  var MapIterator =
                    /** @class */
                    (function() {
                      function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                      }

                      MapIterator.prototype['@@iterator'] = function() {
                        return this;
                      };

                      MapIterator.prototype[iteratorSymbol] = function() {
                        return this;
                      };

                      MapIterator.prototype.next = function() {
                        var index = this._index;

                        if (index >= 0 && index < this._keys.length) {
                          var result = this._selector(
                            this._keys[index],
                            this._values[index]
                          );

                          if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                          } else {
                            this._index++;
                          }

                          return {
                            value: result,
                            done: false
                          };
                        }

                        return {
                          value: undefined,
                          done: true
                        };
                      };

                      MapIterator.prototype.throw = function(error) {
                        if (this._index >= 0) {
                          this._index = -1;
                          this._keys = arraySentinel;
                          this._values = arraySentinel;
                        }

                        throw error;
                      };

                      MapIterator.prototype.return = function(value) {
                        if (this._index >= 0) {
                          this._index = -1;
                          this._keys = arraySentinel;
                          this._values = arraySentinel;
                        }

                        return {
                          value: value,
                          done: true
                        };
                      };

                      return MapIterator;
                    })();

                  return (
                    /** @class */
                    (function() {
                      function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                      }

                      Object.defineProperty(Map.prototype, 'size', {
                        get: function get() {
                          return this._keys.length;
                        },
                        enumerable: true,
                        configurable: true
                      });

                      Map.prototype.has = function(key) {
                        return (
                          this._find(
                            key,
                            /*insert*/
                            false
                          ) >= 0
                        );
                      };

                      Map.prototype.get = function(key) {
                        var index = this._find(
                          key,
                          /*insert*/
                          false
                        );

                        return index >= 0 ? this._values[index] : undefined;
                      };

                      Map.prototype.set = function(key, value) {
                        var index = this._find(
                          key,
                          /*insert*/
                          true
                        );

                        this._values[index] = value;
                        return this;
                      };

                      Map.prototype.delete = function(key) {
                        var index = this._find(
                          key,
                          /*insert*/
                          false
                        );

                        if (index >= 0) {
                          var size = this._keys.length;

                          for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                          }

                          this._keys.length--;
                          this._values.length--;

                          if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                          }

                          return true;
                        }

                        return false;
                      };

                      Map.prototype.clear = function() {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                      };

                      Map.prototype.keys = function() {
                        return new MapIterator(
                          this._keys,
                          this._values,
                          getKey
                        );
                      };

                      Map.prototype.values = function() {
                        return new MapIterator(
                          this._keys,
                          this._values,
                          getValue
                        );
                      };

                      Map.prototype.entries = function() {
                        return new MapIterator(
                          this._keys,
                          this._values,
                          getEntry
                        );
                      };

                      Map.prototype['@@iterator'] = function() {
                        return this.entries();
                      };

                      Map.prototype[iteratorSymbol] = function() {
                        return this.entries();
                      };

                      Map.prototype._find = function(key, insert) {
                        if (this._cacheKey !== key) {
                          this._cacheIndex = this._keys.indexOf(
                            (this._cacheKey = key)
                          );
                        }

                        if (this._cacheIndex < 0 && insert) {
                          this._cacheIndex = this._keys.length;

                          this._keys.push(key);

                          this._values.push(undefined);
                        }

                        return this._cacheIndex;
                      };

                      return Map;
                    })()
                  );

                  function getKey(key, _) {
                    return key;
                  }

                  function getValue(_, value) {
                    return value;
                  }

                  function getEntry(key, value) {
                    return [key, value];
                  }
                } // naive Set shim

                function CreateSetPolyfill() {
                  return (
                    /** @class */
                    (function() {
                      function Set() {
                        this._map = new _Map();
                      }

                      Object.defineProperty(Set.prototype, 'size', {
                        get: function get() {
                          return this._map.size;
                        },
                        enumerable: true,
                        configurable: true
                      });

                      Set.prototype.has = function(value) {
                        return this._map.has(value);
                      };

                      Set.prototype.add = function(value) {
                        return this._map.set(value, value), this;
                      };

                      Set.prototype.delete = function(value) {
                        return this._map.delete(value);
                      };

                      Set.prototype.clear = function() {
                        this._map.clear();
                      };

                      Set.prototype.keys = function() {
                        return this._map.keys();
                      };

                      Set.prototype.values = function() {
                        return this._map.values();
                      };

                      Set.prototype.entries = function() {
                        return this._map.entries();
                      };

                      Set.prototype['@@iterator'] = function() {
                        return this.keys();
                      };

                      Set.prototype[iteratorSymbol] = function() {
                        return this.keys();
                      };

                      return Set;
                    })()
                  );
                } // naive WeakMap shim

                function CreateWeakMapPolyfill() {
                  var UUID_SIZE = 16;
                  var keys = HashMap.create();
                  var rootKey = CreateUniqueKey();
                  return (
                    /** @class */
                    (function() {
                      function WeakMap() {
                        this._key = CreateUniqueKey();
                      }

                      WeakMap.prototype.has = function(target) {
                        var table = GetOrCreateWeakMapTable(
                          target,
                          /*create*/
                          false
                        );
                        return table !== undefined
                          ? HashMap.has(table, this._key)
                          : false;
                      };

                      WeakMap.prototype.get = function(target) {
                        var table = GetOrCreateWeakMapTable(
                          target,
                          /*create*/
                          false
                        );
                        return table !== undefined
                          ? HashMap.get(table, this._key)
                          : undefined;
                      };

                      WeakMap.prototype.set = function(target, value) {
                        var table = GetOrCreateWeakMapTable(
                          target,
                          /*create*/
                          true
                        );
                        table[this._key] = value;
                        return this;
                      };

                      WeakMap.prototype.delete = function(target) {
                        var table = GetOrCreateWeakMapTable(
                          target,
                          /*create*/
                          false
                        );
                        return table !== undefined
                          ? delete table[this._key]
                          : false;
                      };

                      WeakMap.prototype.clear = function() {
                        // NOTE: not a real clear, just makes the previous data unreachable
                        this._key = CreateUniqueKey();
                      };

                      return WeakMap;
                    })()
                  );

                  function CreateUniqueKey() {
                    var key;

                    do {
                      key = '@@WeakMap@@' + CreateUUID();
                    } while (HashMap.has(keys, key));

                    keys[key] = true;
                    return key;
                  }

                  function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                      if (!create) return undefined;
                      Object.defineProperty(target, rootKey, {
                        value: HashMap.create()
                      });
                    }

                    return target[rootKey];
                  }

                  function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i) {
                      buffer[i] = (Math.random() * 0xff) | 0;
                    }

                    return buffer;
                  }

                  function GenRandomBytes(size) {
                    if (typeof Uint8Array === 'function') {
                      if (typeof crypto !== 'undefined')
                        return crypto.getRandomValues(new Uint8Array(size));
                      if (typeof msCrypto !== 'undefined')
                        return msCrypto.getRandomValues(new Uint8Array(size));
                      return FillRandomBytes(new Uint8Array(size), size);
                    }

                    return FillRandomBytes(new Array(size), size);
                  }

                  function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE); // mark as random - RFC 4122 § 4.4

                    data[6] = (data[6] & 0x4f) | 0x40;
                    data[8] = (data[8] & 0xbf) | 0x80;
                    var result = '';

                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                      var byte = data[offset];
                      if (offset === 4 || offset === 6 || offset === 8)
                        result += '-';
                      if (byte < 16) result += '0';
                      result += byte.toString(16).toLowerCase();
                    }

                    return result;
                  }
                } // uses a heuristic used by v8 and chakra to force an object into dictionary mode.

                function MakeDictionary(obj) {
                  obj.__ = undefined;
                  delete obj.__;
                  return obj;
                }
              });
            })(Reflect || (Reflect = {}));
          }
          /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

          function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              (typeof Reflect === 'undefined'
                ? 'undefined'
                : Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                      /* default */ 'a'
                    ]
                  )(Reflect)) === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--) {
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
              }
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }

          function __param(paramIndex, decorator) {
            return function(target, key) {
              decorator(target, key, paramIndex);
            };
          }

          function __metadata(metadataKey, metadataValue) {
            if (
              (typeof Reflect === 'undefined'
                ? 'undefined'
                : Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                      /* default */ 'a'
                    ]
                  )(Reflect)) === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(metadataKey, metadataValue);
          }

          var SERVICE_IDENTIFIER = {
            TaroElement: 'TaroElement',
            TaroElementFactory: 'Factory<TaroElement>',
            TaroText: 'TaroText',
            TaroTextFactory: 'Factory<TaroText>',
            TaroNodeImpl: 'TaroNodeImpl',
            TaroElementImpl: 'TaroElementImpl',
            InnerHTMLImpl: 'InnerHTMLImpl',
            getBoundingClientRectImpl: 'getBoundingClientRectImpl',
            Hooks: 'hooks',
            onRemoveAttribute: 'onRemoveAttribute',
            getLifecycle: 'getLifecycle',
            getPathIndex: 'getPathIndex',
            getEventCenter: 'getEventCenter',
            isBubbleEvents: 'isBubbleEvents',
            eventCenter: 'eventCenter',
            modifyMpEvent: 'modifyMpEvent',
            modifyTaroEvent: 'modifyTaroEvent',
            batchedEventUpdates: 'batchedEventUpdates',
            mergePageInstance: 'mergePageInstance',
            createPullDownComponent: 'createPullDownComponent',
            getDOMNode: 'getDOMNode',
            initNativeApi: 'initNativeApi',
            modifyHydrateData: 'modifyHydrateData',
            modifySetAttrPayload: 'modifySetAttrPayload',
            modifyRmAttrPayload: 'modifyRmAttrPayload',
            onAddEvent: 'onAddEvent'
          };
          var PROPERTY_THRESHOLD = 2046;
          var HOOKS_APP_ID = 'taro-app';
          var SET_DATA = '小程序 setData';
          var PAGE_INIT = '页面初始化';
          var SPECIAL_NODES = ['view', 'text', 'image'];
          var ROOT_STR = 'root';
          var HTML = 'html';
          var HEAD = 'head';
          var BODY = 'body';
          var APP = 'app';
          var CONTAINER = 'container';
          var DOCUMENT_ELEMENT_NAME = '#document';
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
          var DATE = 'Date';
          var SET_TIMEOUT = 'setTimeout';
          var CATCHMOVE = 'catchMove';
          var CATCH_VIEW = 'catch-view';

          var incrementId = function incrementId() {
            var id = 0;
            return function() {
              return (id++).toString();
            };
          };

          function isElement(node) {
            return (
              node.nodeType === 1
              /* ELEMENT_NODE */
            );
          }

          function isText(node) {
            return (
              node.nodeType === 3
              /* TEXT_NODE */
            );
          }

          function isHasExtractProp(el) {
            var res = Object.keys(el.props).find(function(prop) {
              return !(
                /^(class|style|id)$/.test(prop) || prop.startsWith('data-')
              );
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
              (node === null || node === void 0
                ? void 0
                : node.parentElement) &&
              node.parentElement._path !== ROOT_STR
            ) {
              if (
                (_a = node.parentElement.__handlers[type]) === null ||
                _a === void 0
                  ? void 0
                  : _a.length
              ) {
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
                return 'st';
              /* Style */

              case ID:
                return UID;

              case CLASS:
                return 'cl';
              /* Class */

              default:
                return key;
            }
          }

          var TaroEventTarget = /*#__PURE__*/ (function() {
            function TaroEventTarget(hooks) {
              // eslint-disable-next-line @typescript-eslint/indent
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroEventTarget);

              this.__handlers = {};
              this.hooks = hooks;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroEventTarget, [
              {
                key: 'addEventListener',
                value: function addEventListener(type, handler, options) {
                  var _a, _b;

                  (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0
                    ? void 0
                    : _b.call(_a, type, handler, options, this);

                  if (type === 'regionchange') {
                    // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
                    this.addEventListener('begin', handler, options);
                    this.addEventListener('end', handler, options);
                    return;
                  }

                  type = type.toLowerCase();
                  var handlers = this.__handlers[type];
                  var isCapture = Boolean(options);
                  var isOnce = false;

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isObject */ 'i'
                      ]
                    )(options)
                  ) {
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
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* warn */ 's'
                      ]
                    )(isCapture, 'Taro 暂未实现 event 的 capture 特性。');

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isArray */ 'f'
                      ]
                    )(handlers)
                  ) {
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

                  if (handler == null) {
                    return;
                  }

                  var handlers = this.__handlers[type];

                  if (
                    !Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isArray */ 'f'
                      ]
                    )(handlers)
                  ) {
                    return;
                  }

                  var index = handlers.indexOf(handler);
                  true &&
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* warn */ 's'
                      ]
                    )(
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
                  var isAnyEventBinded = Object.keys(handlers).find(function(
                    key
                  ) {
                    return handlers[key].length;
                  });
                  return Boolean(isAnyEventBinded);
                }
              }
            ]);

            return TaroEventTarget;
          })();

          TaroEventTarget = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __metadata('design:paramtypes', [Object])
            ],
            TaroEventTarget
          );
          /**
           * React also has a fancy function's name for this: `hydrate()`.
           * You may have been heard `hydrate` as a SSR-related function,
           * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
           * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
           */

          function hydrate(node) {
            var _data;

            var _a, _b;

            var nodeName = node.nodeName;

            if (isText(node)) {
              var _ref;

              return (
                (_ref = {}),
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                    /* default */ 'a'
                  ]
                )(
                  _ref,
                  'v',
                  /* Text */
                  node.nodeValue
                ),
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                    /* default */ 'a'
                  ]
                )(
                  _ref,
                  'nn',
                  /* NodeName */
                  nodeName
                ),
                _ref
              );
            }

            var data =
              ((_data = {}),
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(
                _data,
                'nn',
                /* NodeName */
                nodeName
              ),
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ]
              )(_data, 'uid', node.uid),
              _data);
            var props = node.props,
              childNodes = node.childNodes;

            if (
              !node.isAnyEventBinded() &&
              SPECIAL_NODES.indexOf(nodeName) > -1
            ) {
              data[
                'nn'
                /* NodeName */
              ] = 'static-'.concat(nodeName);

              if (nodeName === VIEW && !isHasExtractProp(node)) {
                data[
                  'nn'
                  /* NodeName */
                ] = PURE_VIEW;
              }
            }

            for (var prop in props) {
              var propInCamelCase = Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* toCamelCase */ 'q'
                ]
              )(prop);

              if (
                !prop.startsWith('data-') && // 在 node.dataset 的数据
                prop !== CLASS &&
                prop !== STYLE &&
                prop !== ID &&
                propInCamelCase !== CATCHMOVE
              ) {
                data[propInCamelCase] = props[prop];
              }

              if (
                nodeName === VIEW &&
                propInCamelCase === CATCHMOVE &&
                props[prop] !== 'false'
              ) {
                data[
                  'nn'
                  /* NodeName */
                ] = CATCH_VIEW;
              }
            }

            if (childNodes.length > 0) {
              data[
                'cn'
                /* Childnodes */
              ] = childNodes.map(hydrate);
            } else {
              data[
                'cn'
                /* Childnodes */
              ] = [];
            }

            if (node.className !== '') {
              data[
                'cl'
                /* Class */
              ] = node.className;
            }

            if (node.cssText !== '' && nodeName !== 'swiper-item') {
              data[
                'st'
                /* Style */
              ] = node.cssText;
            }

            (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0
              ? void 0
              : _b.call(_a, data);
            return data;
          }

          var eventSource = new Map();
          var ElementNames;

          (function(ElementNames) {
            ElementNames['Element'] = 'Element';
            ElementNames['Document'] = 'Document';
            ElementNames['RootElement'] = 'RootElement';
            ElementNames['FormElement'] = 'FormElement';
          })(ElementNames || (ElementNames = {}));

          var nodeId = incrementId();

          var TaroNode = /*#__PURE__*/ (function(_TaroEventTarget) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(TaroNode, _TaroEventTarget);

            var _super = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(TaroNode);

            function TaroNode(impl, getElement, hooks) {
              // eslint-disable-next-line @typescript-eslint/indent
              var _this;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroNode);

              _this = _super.call(this, hooks);
              _this.parentNode = null;
              _this.childNodes = [];

              _this.hydrate = function(node) {
                return function() {
                  return hydrate(node);
                };
              };

              impl.bind(
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                    /* default */ 'a'
                  ]
                )(_this)
              );
              _this._getElement = getElement;
              _this.uid = '_n_'.concat(nodeId());
              eventSource.set(
                _this.uid,
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                    /* default */ 'a'
                  ]
                )(_this)
              );
              return _this;
            }
            /**
             * like jQuery's $.empty()
             */

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroNode, [
              {
                key: '_empty',
                value: function _empty() {
                  while (this.childNodes.length > 0) {
                    var child = this.childNodes[0];
                    child.parentNode = null;
                    eventSource.delete(child.uid);
                    this.childNodes.shift();
                  }
                }
              },
              {
                key: '_root',
                get: function get() {
                  var _a;

                  return (
                    ((_a = this.parentNode) === null || _a === void 0
                      ? void 0
                      : _a._root) || null
                  );
                }
              },
              {
                key: 'findIndex',
                value: function findIndex(refChild) {
                  var index = this.childNodes.indexOf(refChild);
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* ensure */ 'd'
                    ]
                  )(
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
                    var indexOfNode = parentNode.findIndex(this);
                    var index = this.hooks.getPathIndex(indexOfNode);
                    return ''
                      .concat(
                        parentNode._path,
                        '.',
                        'cn',
                        /* Childnodes */
                        '.'
                      )
                      .concat(index);
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
                      : parentNode.childNodes[
                          parentNode.findIndex(this) + 1
                        ]) || null
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
                      : parentNode.childNodes[
                          parentNode.findIndex(this) - 1
                        ]) || null
                  );
                }
              },
              {
                key: 'parentElement',
                get: function get() {
                  var parentNode = this.parentNode;

                  if (
                    (parentNode === null || parentNode === void 0
                      ? void 0
                      : parentNode.nodeType) === 1
                    /* ELEMENT_NODE */
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
              },
              {
                key: 'textContent',
                set: function set(text) {
                  this._empty();

                  if (text === '') {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'cn'
                        /* Childnodes */
                      ),
                      value: function value() {
                        return [];
                      }
                    });
                  } else {
                    var _document = this._getElement(ElementNames.Document)();

                    this.appendChild(_document.createTextNode(text));
                  }
                }
              },
              {
                key: 'insertBefore',
                value: function insertBefore(newChild, refChild, isReplace) {
                  var _this2 = this;

                  newChild.remove();
                  newChild.parentNode = this;
                  var payload;

                  if (refChild) {
                    var index = this.findIndex(refChild);
                    this.childNodes.splice(index, 0, newChild);

                    if (isReplace) {
                      payload = {
                        path: newChild._path,
                        value: this.hydrate(newChild)
                      };
                    } else {
                      payload = {
                        path: ''.concat(
                          this._path,
                          '.',
                          'cn'
                          /* Childnodes */
                        ),
                        value: function value() {
                          return _this2.childNodes.map(hydrate);
                        }
                      };
                    }
                  } else {
                    this.childNodes.push(newChild);
                    payload = {
                      path: newChild._path,
                      value: this.hydrate(newChild)
                    };
                  }

                  this.enqueueUpdate(payload);

                  if (!eventSource.has(newChild.uid)) {
                    eventSource.set(newChild.uid, newChild);
                  }

                  return newChild;
                }
              },
              {
                key: 'appendChild',
                value: function appendChild(child) {
                  this.insertBefore(child);
                }
              },
              {
                key: 'replaceChild',
                value: function replaceChild(newChild, oldChild) {
                  if (oldChild.parentNode === this) {
                    this.insertBefore(newChild, oldChild, true);
                    oldChild.remove(true);
                    return oldChild;
                  }
                }
              },
              {
                key: 'removeChild',
                value: function removeChild(child, isReplace) {
                  var _this3 = this;

                  var index = this.findIndex(child);
                  this.childNodes.splice(index, 1);

                  if (!isReplace) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'cn'
                        /* Childnodes */
                      ),
                      value: function value() {
                        return _this3.childNodes.map(hydrate);
                      }
                    });
                  }

                  child.parentNode = null;
                  eventSource.delete(child.uid); // @TODO: eventSource memory overflow
                  // child._empty()

                  return child;
                }
              },
              {
                key: 'remove',
                value: function remove(isReplace) {
                  var _a;

                  (_a = this.parentNode) === null || _a === void 0
                    ? void 0
                    : _a.removeChild(this, isReplace);
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

                  (_a = this._root) === null || _a === void 0
                    ? void 0
                    : _a.enqueueUpdate(payload);
                }
              },
              {
                key: 'cloneNode',
                value: function cloneNode() {
                  var isDeep =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : false;

                  var document = this._getElement(ElementNames.Document)();

                  var newNode;

                  if (
                    this.nodeType === 1
                    /* ELEMENT_NODE */
                  ) {
                    newNode = document.createElement(this.nodeName);
                  } else if (
                    this.nodeType === 3
                    /* TEXT_NODE */
                  ) {
                    newNode = document.createTextNode('');
                  }

                  for (var key in this) {
                    var value = this[key];

                    if (
                      [PROPS, DATASET].includes(key) &&
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                          /* default */ 'a'
                        ]
                      )(value) === OBJECT
                    ) {
                      newNode[key] = Object.assign({}, value);
                    } else if (key === '_value') {
                      newNode[key] = value;
                    } else if (key === STYLE) {
                      newNode.style._value = Object.assign({}, value._value);
                      newNode.style._usedStyleProp = new Set(
                        Array.from(value._usedStyleProp)
                      );
                    }
                  }

                  if (isDeep) {
                    newNode.childNodes = this.childNodes.map(function(node) {
                      return node.cloneNode(true);
                    });
                  }

                  return newNode;
                }
              },
              {
                key: 'contains',
                value: function contains(node) {
                  var isContains = false;
                  this.childNodes.some(function(childNode) {
                    var uid = childNode.uid;

                    if (
                      uid === node.uid ||
                      uid === node.id ||
                      childNode.contains(node)
                    ) {
                      isContains = true;
                      return true;
                    }
                  });
                  return isContains;
                }
              }
            ]);

            return TaroNode;
          })(TaroEventTarget);

          TaroNode = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroNodeImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                2,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __metadata('design:paramtypes', [Function, Function, Function])
            ],
            TaroNode
          );

          var TaroText = /*#__PURE__*/ (function(_TaroNode) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(TaroText, _TaroNode);

            var _super2 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(TaroText);

            function TaroText(nodeImpl, getElement, hooks) {
              // eslint-disable-next-line @typescript-eslint/indent
              var _this4;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroText);

              _this4 = _super2.call(this, nodeImpl, getElement, hooks);
              _this4.nodeType = 3;
              /* TEXT_NODE */
              _this4.nodeName = '#text';
              return _this4;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroText, [
              {
                key: 'textContent',
                get: function get() {
                  return this._value;
                },
                set: function set(text) {
                  this._value = text;
                  this.enqueueUpdate({
                    path: ''.concat(
                      this._path,
                      '.',
                      'v'
                      /* Text */
                    ),
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
              }
            ]);

            return TaroText;
          })(TaroNode);

          TaroText = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroNodeImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                2,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __metadata('design:paramtypes', [Function, Function, Function])
            ],
            TaroText
          );
          /*
           *
           * https://www.w3.org/Style/CSS/all-properties.en.html
           */

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
            'zIndex'
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
          ]; // 减少文件体积

          function combine(prefix, list, excludeSelf) {
            !excludeSelf && styleProperties.push(prefix);
            list.forEach(function(item) {
              styleProperties.push(prefix + item);
            });
          }

          var color = 'Color';
          var style = 'Style';
          var width = 'Width';
          var image = 'Image';
          var size = 'Size';
          var color_style_width = [color, style, width];
          var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
          var fitlength_fitwidth_image_radius = [].concat(
            fitlength_fitwidth_image,
            ['Radius']
          );
          var color_style_width_fitlength_fitwidth_image = [].concat(
            color_style_width,
            fitlength_fitwidth_image
          );
          var endRadius_startRadius = ['EndRadius', 'StartRadius'];
          var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
          var end_start = ['End', 'Start'];
          var content_items_self = ['Content', 'Items', 'Self'];
          var blockSize_height_inlineSize_width = [
            'BlockSize',
            'Height',
            'InlineSize',
            width
          ];
          var after_before = ['After', 'Before'];
          combine('borderBlock', color_style_width);
          combine('borderBlockEnd', color_style_width);
          combine('borderBlockStart', color_style_width);
          combine('outline', [].concat(color_style_width, ['Offset']));
          combine(
            'border',
            [].concat(color_style_width, [
              'Boundary',
              'Break',
              'Collapse',
              'Radius',
              'Spacing'
            ])
          );
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
          combine('mask', [
            'Clip',
            'Composite',
            image,
            'Mode',
            'Origin',
            'Position',
            'Repeat',
            size,
            'Type'
          ]);
          combine('borderImage', [
            'Outset',
            'Repeat',
            'Slice',
            'Source',
            'Transform',
            width
          ]);
          combine('maskBorder', [
            'Mode',
            'Outset',
            'Repeat',
            'Slice',
            'Source',
            width
          ]);
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
          combine('fontSynthesis', ['SmallCaps', style, 'Weight']);
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
          combine('transition', [
            'Delay',
            'Duration',
            'Property',
            'TimingFunction'
          ]);
          combine('lineStacking', ['Ruby', 'Shift', 'Strategy']);
          combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
          combine('textAlign', ['All', 'Last']);
          combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
          combine('speak', ['Header', 'Numeral', 'Punctuation']);
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
          combine('flex', [
            'Basis',
            'Direction',
            'Flow',
            'Grow',
            'Shrink',
            'Wrap'
          ]);
          combine(
            'offset',
            [].concat(after_before, end_start, [
              'Anchor',
              'Distance',
              'Path',
              'Position',
              'Rotate'
            ])
          );
          combine('fontVariant', [
            'Alternates',
            'Caps',
            'EastAsian',
            'Emoji',
            'Ligatures',
            'Numeric',
            'Position'
          ]);
          combine('perspective', ['Origin']);
          combine('pitch', ['Range']);
          combine('clip', ['Path', 'Rule']);
          combine('flow', ['From', 'Into']);
          combine('align', ['Content', 'Items', 'Self'], true);
          combine('alignment', ['Adjust', 'Baseline'], true);
          combine('bookmark', ['Label', 'Level', 'State'], true);
          combine('borderStart', endRadius_startRadius, true);
          combine('borderEnd', endRadius_startRadius, true);
          combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
          combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
          combine('borderTopRight', fitlength_fitwidth_image_radius, true);
          combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
          combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
          combine(
            'column',
            [
              's',
              'Count',
              'Fill',
              'Gap',
              'Rule',
              'RuleColor',
              'RuleStyle',
              'RuleWidth',
              'Span',
              width
            ],
            true
          );
          combine('break', [].concat(after_before, ['Inside']), true);
          combine(
            'wrap',
            [].concat(after_before, ['Flow', 'Inside', 'Through']),
            true
          );
          combine('justify', content_items_self, true);
          combine('place', content_items_self, true);
          combine(
            'max',
            [].concat(blockSize_height_inlineSize_width, ['Lines']),
            true
          );
          combine('min', blockSize_height_inlineSize_width, true);
          combine(
            'line',
            ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'],
            true
          );
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
          combine(
            'shape',
            ['ImageThreshold', 'Inside', 'Margin', 'Outside'],
            true
          );
          combine('word', ['Break', 'Spacing', 'Wrap'], true);
          combine('nav', ['Down', 'Left', 'Right', 'Up'], true);
          combine('object', ['Fit', 'Position'], true);
          combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);

          function setStyle(newVal, styleKey) {
            var old = this[styleKey];

            if (newVal) {
              this._usedStyleProp.add(styleKey);
            }

            true &&
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* warn */ 's']
              )(
                Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* isString */ 'j'
                  ]
                )(newVal) && newVal.length > PROPERTY_THRESHOLD,
                'Style \u5C5E\u6027 '.concat(
                  styleKey,
                  ' \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002'
                )
              );

            if (old !== newVal) {
              this._value[styleKey] = newVal;

              this._element.enqueueUpdate({
                path: ''.concat(
                  this._element._path,
                  '.',
                  'st'
                  /* Style */
                ),
                value: this.cssText
              });
            }
          }

          function initStyle(ctor) {
            var properties = {};

            var _loop = function _loop(i) {
              var styleKey = styleProperties[i];
              properties[styleKey] = {
                get: function get() {
                  return this._value[styleKey] || '';
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

          var Style = /*#__PURE__*/ (function() {
            function Style(element) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, Style);

              this._element = element;
              this._usedStyleProp = new Set();
              this._value = {};
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(Style, [
              {
                key: 'setCssVariables',
                value: function setCssVariables(styleKey) {
                  var _this5 = this;

                  this.hasOwnProperty(styleKey) ||
                    Object.defineProperty(this, styleKey, {
                      enumerable: true,
                      configurable: true,
                      get: function get() {
                        return _this5._value[styleKey] || '';
                      },
                      set: function set(newVal) {
                        setStyle.call(_this5, newVal, styleKey);
                      }
                    });
                }
              },
              {
                key: 'cssText',
                get: function get() {
                  var _this6 = this;

                  var text = '';

                  this._usedStyleProp.forEach(function(key) {
                    var val = _this6[key];
                    if (!val) return;
                    var styleName = isCssVariable(key)
                      ? key
                      : Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* toDashed */ 'r'
                          ]
                        )(key);
                    text += ''.concat(styleName, ': ').concat(val, ';');
                  });

                  return text;
                },
                set: function set(str) {
                  var _this7 = this;

                  if (str == null) {
                    str = '';
                  }

                  this._usedStyleProp.forEach(function(prop) {
                    _this7.removeProperty(prop);
                  });

                  if (str === '') {
                    return;
                  }

                  var rules = str.split(';');

                  for (var i = 0; i < rules.length; i++) {
                    var rule = rules[i].trim();

                    if (rule === '') {
                      continue;
                    } // 可能存在 'background: url(http:x/y/z)' 的情况

                    var _rule$split = rule.split(':'),
                      _rule$split2 = Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_8__[
                          /* default */ 'a'
                        ]
                      )(_rule$split),
                      propName = _rule$split2[0],
                      valList = _rule$split2.slice(1);

                    var val = valList.join(':');

                    if (
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isUndefined */ 'k'
                        ]
                      )(val)
                    ) {
                      continue;
                    }

                    this.setProperty(propName.trim(), val.trim());
                  }
                }
              },
              {
                key: 'setProperty',
                value: function setProperty(propertyName, value) {
                  if (propertyName[0] === '-') {
                    // 支持 webkit 属性或 css 变量
                    this.setCssVariables(propertyName);
                  } else {
                    propertyName = Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* toCamelCase */ 'q'
                      ]
                    )(propertyName);
                  }

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isUndefined */ 'k'
                      ]
                    )(value)
                  ) {
                    return;
                  }

                  if (value === null || value === '') {
                    this.removeProperty(propertyName);
                  } else {
                    this[propertyName] = value;
                  }
                }
              },
              {
                key: 'removeProperty',
                value: function removeProperty(propertyName) {
                  propertyName = Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* toCamelCase */ 'q'
                    ]
                  )(propertyName);

                  if (!this._usedStyleProp.has(propertyName)) {
                    return '';
                  }

                  var value = this[propertyName];
                  this[propertyName] = '';

                  this._usedStyleProp.delete(propertyName);

                  return value;
                }
              },
              {
                key: 'getPropertyValue',
                value: function getPropertyValue(propertyName) {
                  propertyName = Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* toCamelCase */ 'q'
                    ]
                  )(propertyName);
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
            var filter =
              predict !== null && predict !== void 0 ? predict : returnTrue;
            var object = root;

            while (object) {
              if (
                object.nodeType === 1 &&
                /* ELEMENT_NODE */
                filter(object)
              ) {
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

          var ClassList = /*#__PURE__*/ (function(_Set2) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(ClassList, _Set2);

            var _super3 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(ClassList);

            function ClassList(className, el) {
              var _thisSuper, _this8;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, ClassList);

              _this8 = _super3.call(this);
              className
                .trim()
                .split(/\s+/)
                .forEach(
                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    ((_thisSuper = Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                        /* default */ 'a'
                      ]
                    )(_this8)),
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype)),
                    'add',
                    _thisSuper
                  ).bind(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                        /* default */ 'a'
                      ]
                    )(_this8)
                  )
                );
              _this8.el = el;
              return _this8;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(ClassList, [
              {
                key: 'value',
                get: function get() {
                  return Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                      /* default */ 'a'
                    ]
                  )(this).join(' ');
                }
              },
              {
                key: 'add',
                value: function add(s) {
                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'has',
                      this
                    ).call(this, s)
                  ) {
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                          /* default */ 'a'
                        ]
                      )(ClassList.prototype),
                      'delete',
                      this
                    ).call(this, s);
                  } else {
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                        /* default */ 'a'
                      ]
                    )(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(ClassList.prototype),
                    'delete',
                    this
                  ).call(this, s1);

                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__[
                /* default */ 'a'
              ]
            )(Set)
          );

          var TaroElement = /*#__PURE__*/ (function(_TaroNode2) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(TaroElement, _TaroNode2);

            var _super4 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(TaroElement);

            function TaroElement(nodeImpl, getElement, hooks, elementImpl) {
              // eslint-disable-next-line @typescript-eslint/indent
              var _this9;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroElement);

              _this9 = _super4.call(this, nodeImpl, getElement, hooks);
              _this9.props = {};
              _this9.dataset =
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* EMPTY_OBJ */ 'a'
                ];
              elementImpl.bind(
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                    /* default */ 'a'
                  ]
                )(_this9)
              );
              _this9.nodeType = 1;
              /* ELEMENT_NODE */
              _this9.style = new Style(
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__[
                    /* default */ 'a'
                  ]
                )(_this9)
              );
              return _this9;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroElement, [
              {
                key: '_stopPropagation',
                value: function _stopPropagation(event) {
                  // eslint-disable-next-line @typescript-eslint/no-this-alias
                  var target = this; // eslint-disable-next-line no-cond-assign

                  while ((target = target.parentNode)) {
                    var listeners = target.__handlers[event.type];

                    if (
                      !Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isArray */ 'f'
                        ]
                      )(listeners)
                    ) {
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
                  var attrs = propKeys.map(function(key) {
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
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                  return !Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isUndefined */ 'k'
                    ]
                  )(this.props[qualifiedName]);
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
                value: function focus() {
                  this.setAttribute(FOCUS, true);
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
                  var _a, _b;

                  true &&
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* warn */ 's'
                      ]
                    )(
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isString */ 'j'
                        ]
                      )(value) && value.length > PROPERTY_THRESHOLD,
                      '\u5143\u7D20 '
                        .concat(this.nodeName, ' \u7684 \u5C5E\u6027 ')
                        .concat(
                          qualifiedName,
                          ' \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002'
                        )
                    );
                  var isPureView =
                    this.nodeName === VIEW &&
                    !isHasExtractProp(this) &&
                    !this.isAnyEventBinded();

                  switch (qualifiedName) {
                    case STYLE:
                      this.style.cssText = value;
                      break;

                    case ID:
                      eventSource.delete(this.uid);
                      value = String(value);
                      this.props[qualifiedName] = this.uid = value;
                      eventSource.set(value, this);
                      break;

                    default:
                      this.props[qualifiedName] = value;

                      if (qualifiedName.startsWith('data-')) {
                        if (
                          this.dataset ===
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* EMPTY_OBJ */ 'a'
                          ]
                        ) {
                          this.dataset = Object.create(null);
                        }

                        this.dataset[
                          Object(
                            _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                              /* toCamelCase */ 'q'
                            ]
                          )(qualifiedName.replace(/^data-/, ''))
                        ] = value;
                      }

                      break;
                  }

                  qualifiedName = shortcutAttr(qualifiedName);
                  var payload = {
                    path: ''
                      .concat(this._path, '.')
                      .concat(
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* toCamelCase */ 'q'
                          ]
                        )(qualifiedName)
                      ),
                    value: value
                  };
                  (_b = (_a = this.hooks).modifySetAttrPayload) === null ||
                  _b === void 0
                    ? void 0
                    : _b.call(_a, this, qualifiedName, payload);
                  this.enqueueUpdate(payload); // pure-view => static-view

                  if (isPureView && isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: STATIC_VIEW
                    });
                  }
                }
              },
              {
                key: 'removeAttribute',
                value: function removeAttribute(qualifiedName) {
                  var _a, _b, _c, _d;

                  var isStaticView =
                    this.nodeName === VIEW &&
                    isHasExtractProp(this) &&
                    !this.isAnyEventBinded();

                  if (qualifiedName === STYLE) {
                    this.style.cssText = '';
                  } else {
                    var isInterrupt =
                      (_b = (_a = this.hooks).onRemoveAttribute) === null ||
                      _b === void 0
                        ? void 0
                        : _b.call(_a, this, qualifiedName);

                    if (isInterrupt) {
                      return;
                    }

                    if (!this.props.hasOwnProperty(qualifiedName)) {
                      return;
                    }

                    delete this.props[qualifiedName];
                  }

                  qualifiedName = shortcutAttr(qualifiedName);
                  var payload = {
                    path: ''
                      .concat(this._path, '.')
                      .concat(
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* toCamelCase */ 'q'
                          ]
                        )(qualifiedName)
                      ),
                    value: ''
                  };
                  (_d = (_c = this.hooks).modifyRmAttrPayload) === null ||
                  _d === void 0
                    ? void 0
                    : _d.call(_c, this, qualifiedName, payload);
                  this.enqueueUpdate(payload); // static-view => pure-view

                  if (isStaticView && !isHasExtractProp(this)) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: PURE_VIEW
                    });
                  }
                }
              },
              {
                key: 'getAttribute',
                value: function getAttribute(qualifiedName) {
                  var attr =
                    qualifiedName === STYLE
                      ? this.style.cssText
                      : this.props[qualifiedName];
                  return attr !== null && attr !== void 0 ? attr : '';
                }
              },
              {
                key: 'getElementsByTagName',
                value: function getElementsByTagName(tagName) {
                  var _this10 = this;

                  return treeToArray(this, function(el) {
                    return (
                      el.nodeName === tagName ||
                      (tagName === '*' && _this10 !== el)
                    );
                  });
                }
              },
              {
                key: 'getElementsByClassName',
                value: function getElementsByClassName(className) {
                  return treeToArray(this, function(el) {
                    var classList = el.classList;
                    var classNames = className.trim().split(/\s+/);
                    return classNames.every(function(c) {
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

                  if (
                    !Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isArray */ 'f'
                      ]
                    )(listeners)
                  ) {
                    return false;
                  }

                  for (var i = listeners.length; i--; ) {
                    var listener = listeners[i];
                    var result = void 0;

                    if (listener._stop) {
                      listener._stop = false;
                    } else {
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

                  if (
                    !this.isAnyEventBinded() &&
                    SPECIAL_NODES.indexOf(name) > -1
                  ) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: name
                    });
                  }

                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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
                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
                        /* default */ 'a'
                      ]
                    )(TaroElement.prototype),
                    'removeEventListener',
                    this
                  ).call(this, type, handler);

                  var name = this.nodeName;

                  if (
                    !this.isAnyEventBinded() &&
                    SPECIAL_NODES.indexOf(name) > -1
                  ) {
                    this.enqueueUpdate({
                      path: ''.concat(
                        this._path,
                        '.',
                        'nn'
                        /* NodeName */
                      ),
                      value: isHasExtractProp(this)
                        ? 'static-'.concat(name)
                        : 'pure-'.concat(name)
                    });
                  }
                }
              }
            ]);

            return TaroElement;
          })(TaroNode);

          TaroElement = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroNodeImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                2,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __param(
                3,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementImpl)
              ),
              __metadata('design:paramtypes', [
                Function,
                Function,
                Function,
                Function
              ])
            ],
            TaroElement
          );
          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */

          var isArray = Array.isArray;
          /** Detect free variable `global` from Node.js. */

          var freeGlobal =
            (typeof global === 'undefined'
              ? 'undefined'
              : Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                    /* default */ 'a'
                  ]
                )(global)) == 'object' &&
            global &&
            global.Object === Object &&
            global;
          /** Detect free variable `self`. */

          var freeSelf =
            (typeof self === 'undefined'
              ? 'undefined'
              : Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                    /* default */ 'a'
                  ]
                )(self)) == 'object' &&
            self &&
            self.Object === Object &&
            self;
          /** Used as a reference to the global object. */

          var root = freeGlobal || freeSelf || Function('return this')();
          /** Built-in value references. */

          var Symbol$1 = root.Symbol;
          /** Used for built-in method references. */

          var objectProto = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty = objectProto.hasOwnProperty;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var nativeObjectToString = objectProto.toString;
          /** Built-in value references. */

          var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
          /**
           * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the raw `toStringTag`.
           */

          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);

            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }

            return result;
          }
          /** Used for built-in method references. */

          var objectProto$1 = Object.prototype;
          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */

          var nativeObjectToString$1 = objectProto$1.toString;
          /**
           * Converts `value` to a string using `Object.prototype.toString`.
           *
           * @private
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           */

          function objectToString(value) {
            return nativeObjectToString$1.call(value);
          }
          /** `Object#toString` result references. */

          var nullTag = '[object Null]',
            undefinedTag = '[object Undefined]';
          /** Built-in value references. */

          var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
          /**
           * The base implementation of `getTag` without fallbacks for buggy environments.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */

          function baseGetTag(value) {
            if (value == null) {
              return value === undefined ? undefinedTag : nullTag;
            }

            return symToStringTag$1 && symToStringTag$1 in Object(value)
              ? getRawTag(value)
              : objectToString(value);
          }
          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */

          function isObjectLike(value) {
            return (
              value != null &&
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                  /* default */ 'a'
                ]
              )(value) == 'object'
            );
          }
          /** `Object#toString` result references. */

          var symbolTag = '[object Symbol]';
          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */

          function isSymbol(value) {
            return (
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                  /* default */ 'a'
                ]
              )(value) == 'symbol' ||
              (isObjectLike(value) && baseGetTag(value) == symbolTag)
            );
          }
          /** Used to match property names within property paths. */

          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/;
          /**
           * Checks if `value` is a property name and not a property path.
           *
           * @private
           * @param {*} value The value to check.
           * @param {Object} [object] The object to query keys on.
           * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
           */

          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }

            var type = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(value);

            if (
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean' ||
              value == null ||
              isSymbol(value)
            ) {
              return true;
            }

            return (
              reIsPlainProp.test(value) ||
              !reIsDeepProp.test(value) ||
              (object != null && value in Object(object))
            );
          }
          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */

          function isObject(value) {
            var type = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(value);

            return value != null && (type == 'object' || type == 'function');
          }
          /** `Object#toString` result references. */

          var asyncTag = '[object AsyncFunction]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            proxyTag = '[object Proxy]';
          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */

          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            } // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.

            var tag = baseGetTag(value);
            return (
              tag == funcTag ||
              tag == genTag ||
              tag == asyncTag ||
              tag == proxyTag
            );
          }
          /** Used to detect overreaching core-js shims. */

          var coreJsData = root['__core-js_shared__'];
          /** Used to detect methods masquerading as native. */

          var maskSrcKey = (function() {
            var uid = /[^.]+$/.exec(
              (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
            );
            return uid ? 'Symbol(src)_1.' + uid : '';
          })();
          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */

          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          /** Used for built-in method references. */

          var funcProto = Function.prototype;
          /** Used to resolve the decompiled source of functions. */

          var funcToString = funcProto.toString;
          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to convert.
           * @returns {string} Returns the source code.
           */

          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}

              try {
                return func + '';
              } catch (e) {}
            }

            return '';
          }
          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */

          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
          /** Used to detect host constructors (Safari). */

          var reIsHostCtor = /^\[object .+?Constructor\]$/;
          /** Used for built-in method references. */

          var funcProto$1 = Function.prototype,
            objectProto$2 = Object.prototype;
          /** Used to resolve the decompiled source of functions. */

          var funcToString$1 = funcProto$1.toString;
          /** Used to check objects for own properties. */

          var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
          /** Used to detect if a method is native. */

          var reIsNative = RegExp(
            '^' +
              funcToString$1
                .call(hasOwnProperty$1)
                .replace(reRegExpChar, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */

          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }

            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */

          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }
          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */

          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }
          /* Built-in method references that are verified to be native. */

          var nativeCreate = getNative(Object, 'create');
          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */

          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
          }
          /** Used to stand-in for `undefined` hash values. */

          var HASH_UNDEFINED = '__lodash_hash_undefined__';
          /** Used for built-in method references. */

          var objectProto$3 = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function hashGet(key) {
            var data = this.__data__;

            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }

            return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
          }
          /** Used for built-in method references. */

          var objectProto$4 = Object.prototype;
          /** Used to check objects for own properties. */

          var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate
              ? data[key] !== undefined
              : hasOwnProperty$3.call(data, key);
          }
          /** Used to stand-in for `undefined` hash values. */

          var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */

          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] =
              nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
            return this;
          }
          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function Hash(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `Hash`.

          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */

          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */

          function eq(value, other) {
            return value === other || (value !== value && other !== other);
          }
          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */

          function assocIndexOf(array, key) {
            var length = array.length;

            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }

            return -1;
          }
          /** Used for built-in method references. */

          var arrayProto = Array.prototype;
          /** Built-in value references. */

          var splice = arrayProto.splice;
          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function listCacheDelete(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }

            var lastIndex = data.length - 1;

            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }

            --this.size;
            return true;
          }
          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function listCacheGet(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
          }
          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */

          function listCacheSet(key, value) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }

            return this;
          }
          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function ListCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `ListCache`.

          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          /* Built-in method references that are verified to be native. */

          var Map$1 = getNative(root, 'Map');
          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */

          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              hash: new Hash(),
              map: new (Map$1 || ListCache)(),
              string: new Hash()
            };
          }
          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */

          function isKeyable(value) {
            var type = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_15__[
                /* default */ 'a'
              ]
            )(value);

            return type == 'string' ||
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean'
              ? value !== '__proto__'
              : value === null;
          }
          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */

          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key)
              ? data[typeof key == 'string' ? 'string' : 'hash']
              : data.map;
          }
          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */

          function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
          }
          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */

          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */

          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */

          function mapCacheSet(key, value) {
            var data = getMapData(this, key),
              size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
          }
          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */

          function MapCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;
            this.clear();

            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          } // Add methods to `MapCache`.

          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          /** Error message constants. */

          var FUNC_ERROR_TEXT = 'Expected a function';
          /**
           * Creates a function that memoizes the result of `func`. If `resolver` is
           * provided, it determines the cache key for storing the result based on the
           * arguments provided to the memoized function. By default, the first argument
           * provided to the memoized function is used as the map cache key. The `func`
           * is invoked with the `this` binding of the memoized function.
           *
           * **Note:** The cache is exposed as the `cache` property on the memoized
           * function. Its creation may be customized by replacing the `_.memoize.Cache`
           * constructor with one whose instances implement the
           * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
           * method interface of `clear`, `delete`, `get`, `has`, and `set`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to have its output memoized.
           * @param {Function} [resolver] The function to resolve the cache key.
           * @returns {Function} Returns the new memoized function.
           * @example
           *
           * var object = { 'a': 1, 'b': 2 };
           * var other = { 'c': 3, 'd': 4 };
           *
           * var values = _.memoize(_.values);
           * values(object);
           * // => [1, 2]
           *
           * values(other);
           * // => [3, 4]
           *
           * object.a = 2;
           * values(object);
           * // => [1, 2]
           *
           * // Modify the result cache.
           * values.cache.set(object, ['a', 'b']);
           * values(object);
           * // => ['a', 'b']
           *
           * // Replace `_.memoize.Cache`.
           * _.memoize.Cache = WeakMap;
           */

          function memoize(func, resolver) {
            if (
              typeof func != 'function' ||
              (resolver != null && typeof resolver != 'function')
            ) {
              throw new TypeError(FUNC_ERROR_TEXT);
            }

            var memoized = function memoized() {
              var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

              if (cache.has(key)) {
                return cache.get(key);
              }

              var result = func.apply(this, args);
              memoized.cache = cache.set(key, result) || cache;
              return result;
            };

            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          } // Expose `MapCache`.

          memoize.Cache = MapCache;
          /** Used as the maximum memoize cache size. */

          var MAX_MEMOIZE_SIZE = 500;
          /**
           * A specialized version of `_.memoize` which clears the memoized function's
           * cache when it exceeds `MAX_MEMOIZE_SIZE`.
           *
           * @private
           * @param {Function} func The function to have its output memoized.
           * @returns {Function} Returns the new memoized function.
           */

          function memoizeCapped(func) {
            var result = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }

              return key;
            });
            var cache = result.cache;
            return result;
          }
          /** Used to match property names within property paths. */

          var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
          /** Used to match backslashes in property paths. */

          var reEscapeChar = /\\(\\)?/g;
          /**
           * Converts `string` to a property path array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the property path array.
           */

          var stringToPath = memoizeCapped(function(string) {
            var result = [];

            if (
              string.charCodeAt(0) === 46
              /* . */
            ) {
              result.push('');
            }

            string.replace(rePropName, function(
              match,
              number,
              quote,
              subString
            ) {
              result.push(
                quote ? subString.replace(reEscapeChar, '$1') : number || match
              );
            });
            return result;
          });
          /**
           * A specialized version of `_.map` for arrays without support for iteratee
           * shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           */

          function arrayMap(array, iteratee) {
            var index = -1,
              length = array == null ? 0 : array.length,
              result = Array(length);

            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }

            return result;
          }
          /** Used as references for various `Number` constants. */

          var INFINITY = 1 / 0;
          /** Used to convert symbols to primitives and strings. */

          var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
          /**
           * The base implementation of `_.toString` which doesn't convert nullish
           * values to empty strings.
           *
           * @private
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           */

          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }

            if (isArray(value)) {
              // Recursively convert values (susceptible to call stack limits).
              return arrayMap(value, baseToString) + '';
            }

            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : '';
            }

            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }
          /**
           * Converts `value` to a string. An empty string is returned for `null`
           * and `undefined` values. The sign of `-0` is preserved.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           * @example
           *
           * _.toString(null);
           * // => ''
           *
           * _.toString(-0);
           * // => '-0'
           *
           * _.toString([1, 2, 3]);
           * // => '1,2,3'
           */

          function toString(value) {
            return value == null ? '' : baseToString(value);
          }
          /**
           * Casts `value` to a path array if it's not one.
           *
           * @private
           * @param {*} value The value to inspect.
           * @param {Object} [object] The object to query keys on.
           * @returns {Array} Returns the cast property path array.
           */

          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }

            return isKey(value, object)
              ? [value]
              : stringToPath(toString(value));
          }
          /** Used as references for various `Number` constants. */

          var INFINITY$1 = 1 / 0;
          /**
           * Converts `value` to a string key if it's not a string or symbol.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {string|symbol} Returns the key.
           */

          function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
              return value;
            }

            var result = value + '';
            return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
          }
          /**
           * The base implementation of `_.get` without support for default values.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @returns {*} Returns the resolved value.
           */

          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0,
              length = path.length;

            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }

            return index && index == length ? object : undefined;
          }
          /**
           * Gets the value at `path` of `object`. If the resolved value is
           * `undefined`, the `defaultValue` is returned in its place.
           *
           * @static
           * @memberOf _
           * @since 3.7.0
           * @category Object
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @param {*} [defaultValue] The value returned for `undefined` resolved values.
           * @returns {*} Returns the resolved value.
           * @example
           *
           * var object = { 'a': [{ 'b': { 'c': 3 } }] };
           *
           * _.get(object, 'a[0].b.c');
           * // => 3
           *
           * _.get(object, ['a', '0', 'b', 'c']);
           * // => 3
           *
           * _.get(object, 'a.b.c', 'default');
           * // => 'default'
           */

          function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
          }

          var options = {
            prerender: true,
            debug: false
          };

          var Performance = /*#__PURE__*/ (function() {
            function Performance() {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, Performance);

              this.recorder = new Map();
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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
                  var time = now - prev; // eslint-disable-next-line no-console

                  console.log(
                    ''.concat(id, ' \u65F6\u957F\uFF1A ').concat(time, 'ms')
                  );
                }
              }
            ]);

            return Performance;
          })();

          var perf = new Performance();
          var eventIncrementId = incrementId();

          var TaroRootElement = /*#__PURE__*/ (function(_TaroElement) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(TaroRootElement, _TaroElement);

            var _super5 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(TaroRootElement);

            function TaroRootElement( // eslint-disable-next-line @typescript-eslint/indent
              nodeImpl,
              getElement,
              hooks,
              elementImpl,
              eventCenter
            ) {
              var _this11;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroRootElement);

              _this11 = _super5.call(
                this,
                nodeImpl,
                getElement,
                hooks,
                elementImpl
              );
              _this11.pendingUpdate = false;
              _this11.pendingFlush = false;
              _this11.updatePayloads = [];
              _this11.updateCallbacks = [];
              _this11.ctx = null;
              _this11.nodeName = ROOT_STR;
              _this11.eventCenter = eventCenter;
              return _this11;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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

                  if (!this.pendingUpdate && this.ctx !== null) {
                    this.performUpdate();
                  }
                }
              },
              {
                key: 'performUpdate',
                value: function performUpdate() {
                  var _this12 = this;

                  var initRender =
                    arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : false;
                  var prerender =
                    arguments.length > 1 ? arguments[1] : undefined;
                  this.pendingUpdate = true;
                  var ctx = this.ctx;
                  setTimeout(function() {
                    perf.start(SET_DATA);
                    var data = Object.create(null);
                    var resetPaths = new Set(
                      initRender ? ['root.cn.[0]', 'root.cn[0]'] : []
                    );

                    while (_this12.updatePayloads.length > 0) {
                      var _this12$updatePayload = _this12.updatePayloads.shift(),
                        path = _this12$updatePayload.path,
                        value = _this12$updatePayload.value;

                      if (
                        path.endsWith(
                          'cn'
                          /* Childnodes */
                        )
                      ) {
                        resetPaths.add(path);
                      }

                      data[path] = value;
                    }

                    var _loop2 = function _loop2(_path) {
                      resetPaths.forEach(function(p) {
                        // 已经重置了数组，就不需要分别再设置了
                        if (_path.includes(p) && _path !== p) {
                          delete data[_path];
                        }
                      });
                      var value = data[_path];

                      if (
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* isFunction */ 'h'
                          ]
                        )(value)
                      ) {
                        data[_path] = value();
                      }
                    };

                    for (var _path in data) {
                      _loop2(_path);
                    }

                    if (
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(prerender)
                    ) {
                      prerender(data);
                    } else {
                      _this12.pendingUpdate = false;
                      var customWrapperUpdate = [];
                      var normalUpdate = {};

                      if (!initRender) {
                        for (var p in data) {
                          var dataPathArr = p.split('.');
                          var hasCustomWrapper = false;

                          for (var i = dataPathArr.length; i > 0; i--) {
                            var allPath = dataPathArr.slice(0, i).join('.');
                            var getData = get(
                              ctx.__data__ || ctx.data,
                              allPath
                            );

                            if (
                              getData &&
                              getData.nn &&
                              getData.nn === CUSTOM_WRAPPER
                            ) {
                              var customWrapperId = getData.uid;
                              var customWrapper = ctx.selectComponent(
                                '#'.concat(customWrapperId)
                              );
                              var splitedPath = dataPathArr.slice(i).join('.');

                              if (customWrapper) {
                                hasCustomWrapper = true;
                                customWrapperUpdate.push({
                                  ctx: ctx.selectComponent(
                                    '#'.concat(customWrapperId)
                                  ),
                                  data: Object(
                                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                                      /* default */ 'a'
                                    ]
                                  )({}, 'i.'.concat(splitedPath), data[p])
                                });
                              }

                              break;
                            }
                          }

                          if (!hasCustomWrapper) {
                            normalUpdate[p] = data[p];
                          }
                        }
                      }

                      var updateArrLen = customWrapperUpdate.length;

                      if (updateArrLen) {
                        var eventId = ''
                          .concat(_this12._path, '_update_')
                          .concat(eventIncrementId());
                        var _eventCenter = _this12.eventCenter;
                        var executeTime = 0;

                        _eventCenter.once(
                          eventId,
                          function() {
                            executeTime++;

                            if (executeTime === updateArrLen + 1) {
                              perf.stop(SET_DATA);

                              if (!_this12.pendingFlush) {
                                _this12.flushUpdateCallback();
                              }

                              if (initRender) {
                                perf.stop(PAGE_INIT);
                              }
                            }
                          },
                          _eventCenter
                        );

                        customWrapperUpdate.forEach(function(item) {
                          if (true && options.debug) {
                            // eslint-disable-next-line no-console
                            console.log('custom wrapper setData: ', item.data);
                          }

                          item.ctx.setData(item.data, function() {
                            _eventCenter.trigger(eventId);
                          });
                        });

                        if (Object.keys(normalUpdate).length) {
                          if (true && options.debug) {
                            // eslint-disable-next-line no-console
                            console.log('setData:', normalUpdate);
                          }

                          ctx.setData(normalUpdate, function() {
                            _eventCenter.trigger(eventId);
                          });
                        }
                      } else {
                        if (true && options.debug) {
                          // eslint-disable-next-line no-console
                          console.log('setData:', data);
                        }

                        ctx.setData(data, function() {
                          perf.stop(SET_DATA);

                          if (!_this12.pendingFlush) {
                            _this12.flushUpdateCallback();
                          }

                          if (initRender) {
                            perf.stop(PAGE_INIT);
                          }
                        });
                      }
                    }
                  }, 0);
                }
              },
              {
                key: 'enqueueUpdateCallback',
                value: function enqueueUpdateCallback(cb, ctx) {
                  this.updateCallbacks.push(function() {
                    ctx ? cb.call(ctx) : cb();
                  });
                }
              },
              {
                key: 'flushUpdateCallback',
                value: function flushUpdateCallback() {
                  this.pendingFlush = false;
                  var copies = this.updateCallbacks.slice(0);
                  this.updateCallbacks.length = 0;

                  for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                  }
                }
              }
            ]);

            return TaroRootElement;
          })(TaroElement);

          TaroRootElement = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroNodeImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                2,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __param(
                3,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementImpl)
              ),
              __param(
                4,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.eventCenter)
              ),
              __metadata('design:paramtypes', [
                Function,
                Function,
                Function,
                Function,
                Function
              ])
            ],
            TaroRootElement
          );

          var FormElement = /*#__PURE__*/ (function(_TaroElement2) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(FormElement, _TaroElement2);

            var _super6 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(FormElement);

            function FormElement() {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, FormElement);

              return _super6.apply(this, arguments);
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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
                  if (
                    (event.type === INPUT || event.type === CHANGE) &&
                    event.mpEvent
                  ) {
                    var val = event.mpEvent.detail.value;
                    this.props.value = val;
                  }

                  return Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ]
                  )(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[
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

          var TaroNodeImpl = /*#__PURE__*/ (function() {
            function TaroNodeImpl(getElement, innerHTMLImpl) {
              // eslint-disable-next-line @typescript-eslint/indent
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroNodeImpl);

              this.getDoc = function() {
                return getElement(ElementNames.Document)();
              };

              this.innerHTMLImpl = innerHTMLImpl;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroNodeImpl, [
              {
                key: 'bind',
                value: function bind(ctx) {
                  this.bindInnerHTML(ctx, this.innerHTMLImpl, this.getDoc);
                }
              },
              {
                key: 'bindInnerHTML',
                value: function bindInnerHTML(ctx, impl, getDoc) {
                  Object.defineProperty(ctx, 'innerHTML', {
                    configurable: true,
                    enumerable: true,
                    set: function set(html) {
                      if (
                        Object(
                          _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                            /* isFunction */ 'h'
                          ]
                        )(impl)
                      ) {
                        impl.call(ctx, ctx, html, getDoc);
                      } else {
                        true &&
                          Object(
                            _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                              /* warn */ 's'
                            ]
                          )(true, '请实现 node.innerHTML');
                      }
                    },
                    get: function get() {
                      return '';
                    }
                  });
                }
              }
            ]);

            return TaroNodeImpl;
          })();

          TaroNodeImpl = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.InnerHTMLImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
                )()
              ),
              __metadata('design:paramtypes', [Function, Function])
            ],
            TaroNodeImpl
          );

          var TaroElementImpl = /*#__PURE__*/ (function() {
            function TaroElementImpl(rectImpl) {
              // eslint-disable-next-line @typescript-eslint/indent
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroElementImpl);

              this.rectImpl = rectImpl;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroElementImpl, [
              {
                key: 'bind',
                value: function bind(ctx) {
                  this.bindRect(ctx);
                }
              },
              {
                key: 'bindRect',
                value: function bindRect(ctx) {
                  var impl = this.rectImpl;
                  ctx.getBoundingClientRect = /*#__PURE__*/ Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
                      /* default */ 'a'
                    ]
                  )(
                    /*#__PURE__*/ _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(
                      function _callee() {
                        var _len,
                          args,
                          _key,
                          _args = arguments;

                        return _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  if (
                                    !Object(
                                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                                        /* isFunction */ 'h'
                                      ]
                                    )(impl)
                                  ) {
                                    _context.next = 5;
                                    break;
                                  }

                                  for (
                                    _len = _args.length,
                                      args = new Array(_len),
                                      _key = 0;
                                    _key < _len;
                                    _key++
                                  ) {
                                    args[_key] = _args[_key];
                                  }

                                  _context.next = 4;
                                  return impl.apply(ctx, args);

                                case 4:
                                  return _context.abrupt(
                                    'return',
                                    _context.sent
                                  );

                                case 5:
                                  true &&
                                    Object(
                                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                                        /* warn */ 's'
                                      ]
                                    )(
                                      true,
                                      '请实现 element.getBoundingClientRect'
                                    );
                                  return _context.abrupt(
                                    'return',
                                    Promise.resolve(null)
                                  );

                                case 7:
                                case 'end':
                                  return _context.stop();
                              }
                            }
                          },
                          _callee
                        );
                      }
                    )
                  );
                }
              }
            ]);

            return TaroElementImpl;
          })();

          TaroElementImpl = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.getBoundingClientRectImpl)
              ),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
                )()
              ),
              __metadata('design:paramtypes', [Object])
            ],
            TaroElementImpl
          );

          var TaroDocument = /*#__PURE__*/ (function(_TaroElement3) {
            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                /* default */ 'a'
              ]
            )(TaroDocument, _TaroElement3);

            var _super7 = Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                /* default */ 'a'
              ]
            )(TaroDocument);

            function TaroDocument( // eslint-disable-next-line @typescript-eslint/indent
              nodeImpl,
              getElement,
              hooks,
              elementImpl,
              getText
            ) {
              var _this13;

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroDocument);

              _this13 = _super7.call(
                this,
                nodeImpl,
                getElement,
                hooks,
                elementImpl
              );
              _this13._getText = getText;
              _this13.nodeType = 9;
              /* DOCUMENT_NODE */
              _this13.nodeName = DOCUMENT_ELEMENT_NAME;
              return _this13;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(TaroDocument, [
              {
                key: 'createElement',
                value: function createElement(type) {
                  if (type === ROOT_STR) {
                    return this._getElement(ElementNames.RootElement)();
                  }

                  if (
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* controlledComponent */ 'b'
                    ].has(type)
                  ) {
                    return this._getElement(ElementNames.FormElement)(type);
                  }

                  return this._getElement(ElementNames.Element)(type);
                } // an ugly fake createElementNS to deal with @vue/runtime-dom's
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
                  return this._getText(text);
                }
              },
              {
                key: 'getElementById',
                value: function getElementById(id) {
                  var el = eventSource.get(id);
                  return Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isUndefined */ 'k'
                    ]
                  )(el)
                    ? null
                    : el;
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
                } // @TODO: @PERF: 在 hydrate 移除掉空的 node
              },
              {
                key: 'createComment',
                value: function createComment() {
                  return this._getText('');
                }
              }
            ]);

            return TaroDocument;
          })(TaroElement);

          TaroDocument = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )(),
              __param(
                0,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroNodeImpl)
              ),
              __param(
                1,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementFactory)
              ),
              __param(
                2,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.Hooks)
              ),
              __param(
                3,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroElementImpl)
              ),
              __param(
                4,
                Object(
                  inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c']
                )(SERVICE_IDENTIFIER.TaroTextFactory)
              ),
              __metadata('design:paramtypes', [
                Function,
                Function,
                Function,
                Function,
                Function
              ])
            ],
            TaroDocument
          );

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
              var char = str.charAt(i);

              if (char === '\n') {
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

          function isWhitespaceChar(char) {
            return whitespace.test(char);
          }

          var equalSign = /=/;

          function isEqualSignChar(char) {
            return equalSign.test(char);
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

              var char = str.charAt(textEnd + 1);

              if (char === '/' || char === '!' || alphanumeric.test(char)) {
                return textEnd;
              }

              index = textEnd + 1;
            }
          }

          function isWordEnd(cursor, wordBegin, html) {
            if (!isWhitespaceChar(html.charAt(cursor))) return false;
            var len = html.length; // backwrad

            for (var i = cursor - 1; i > wordBegin; i--) {
              var char = html.charAt(i);

              if (!isWhitespaceChar(char)) {
                if (isEqualSignChar(char)) return false;
                break;
              }
            } // forward

            for (var _i2 = cursor + 1; _i2 < len; _i2++) {
              var _char = html.charAt(_i2);

              if (!isWhitespaceChar(_char)) {
                if (isEqualSignChar(_char)) return false;
                return true;
              }
            }
          }

          var Scaner = /*#__PURE__*/ (function() {
            function Scaner(html) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, Scaner);

              this.tokens = [];
              this.position = initPosition();
              this.html = html;
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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
                      var isComment = html.startsWith('!--', start + 1);

                      if (isComment) {
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
                    var char = html.charAt(start);
                    var isTagChar = !(
                      isWhitespaceChar(char) ||
                      char === '/' ||
                      char === '>'
                    );
                    if (isTagChar) break;
                    start++;
                  }

                  var end = start + 1;

                  while (end < len) {
                    var _char2 = html.charAt(end);

                    var _isTagChar = !(
                      isWhitespaceChar(_char2) ||
                      _char2 === '/' ||
                      _char2 === '>'
                    );

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
                    var char = html.charAt(cursor);

                    if (quote) {
                      var isQuoteEnd = char === quote;

                      if (isQuoteEnd) {
                        quote = null;
                      }

                      cursor++;
                      continue;
                    }

                    var isTagEnd = char === '/' || char === '>';

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

                    var isQuoteStart = char === "'" || char === '"';

                    if (isQuoteStart) {
                      quote = char;
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

          function makeMap(str, expectsLowerCase) {
            var map = Object.create(null);
            var list = str.split(',');

            for (var i = 0; i < list.length; i++) {
              map[list[i]] = true;
            }

            return expectsLowerCase
              ? function(val) {
                  return !!map[val.toLowerCase()];
                }
              : function(val) {
                  return !!map[val];
                };
          }

          var specialMiniElements = {
            img: 'image',
            iframe: 'web-view'
          };
          var internalCompsList = Object.keys(
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
              /* internalComponents */ 'e'
            ]
          )
            .map(function(i) {
              return i.toLowerCase();
            })
            .join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

          var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

          var isInlineElements = makeMap(
            'a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b',
            true
          ); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

          var isBlockElements = makeMap(
            'address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt',
            true
          );

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

          var StyleTagParser = /*#__PURE__*/ (function() {
            function StyleTagParser() {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, StyleTagParser);

              this.styles = [];
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(StyleTagParser, [
              {
                key: 'extractStyle',
                value: function extractStyle(src) {
                  var _this14 = this;

                  var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
                  var html = src; // let html = src.replace(/\n/g, '')

                  html = html.replace(REG_STYLE, function(_, $1) {
                    var style = $1.trim();

                    _this14.stringToSelector(style);

                    return '';
                  });
                  return html.trim();
                }
              },
              {
                key: 'stringToSelector',
                value: function stringToSelector(style) {
                  var _this15 = this;

                  var lb = style.indexOf(LEFT_BRACKET);

                  var _loop3 = function _loop3() {
                    var rb = style.indexOf(RIGHT_BRACKET);
                    var selectors = style.slice(0, lb).trim();
                    var content = style.slice(lb + 1, rb).replace(/ /g, '');

                    if (!/;$/.test(content)) {
                      content += ';';
                    }

                    selectors.split(',').forEach(function(src) {
                      var selectorList = _this15.parseSelector(src);

                      _this15.styles.push({
                        content: content,
                        selectorList: selectorList
                      });
                    });
                    style = style.slice(rb + 1);
                    lb = style.indexOf(LEFT_BRACKET);
                  };

                  while (lb > -1) {
                    _loop3();
                  } // console.log('res this.styles: ', this.styles)
                }
              },
              {
                key: 'parseSelector',
                value: function parseSelector(src) {
                  // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
                  var list = src
                    .trim()
                    .replace(/ *([>~+]) */g, ' $1')
                    .replace(/ +/g, ' ')
                    .split(' ');
                  var selectors = list.map(function(item) {
                    var firstChar = item.charAt(0);
                    var selector = {
                      isChild: firstChar === CHILD_COMBINATOR,
                      isGeneralSibling:
                        firstChar === GENERAL_SIBLING_COMBINATOR,
                      isAdjacentSibling:
                        firstChar === ADJACENT_SIBLING_COMBINATOR,
                      tag: null,
                      id: null,
                      class: [],
                      attrs: []
                    };
                    item = item.replace(/^[>~+]/, ''); // 属性选择器

                    item = item.replace(/\[(.+?)\]/g, function(_, $1) {
                      var _$1$split = $1.split('='),
                        _$1$split2 = Object(
                          _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
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
                    item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function(
                      _,
                      $1
                    ) {
                      if ($1[0] === ID_SELECTOR) {
                        // id 选择器
                        selector.id = $1.substr(1);
                      } else if ($1[0] === CLASS_SELECTOR) {
                        // class 选择器
                        selector.class.push($1.substr(1));
                      }

                      return '';
                    }); // 标签选择器

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
                  var _this16 = this;

                  // todo: 这里应该要比较选择器权重
                  var res = this.styles.reduce(function(str, _ref3, i) {
                    var content = _ref3.content,
                      selectorList = _ref3.selectorList;
                    var idx = list[i];
                    var selector = selectorList[idx];
                    var nextSelector = selectorList[idx + 1];

                    if (
                      (nextSelector === null || nextSelector === void 0
                        ? void 0
                        : nextSelector.isGeneralSibling) ||
                      (nextSelector === null || nextSelector === void 0
                        ? void 0
                        : nextSelector.isAdjacentSibling)
                    ) {
                      selector = nextSelector;
                      idx += 1;
                      list[i] += 1;
                    }

                    var isMatch = _this16.matchCurrent(tagName, el, selector);

                    if (isMatch && selector.isGeneralSibling) {
                      var prev = getPreviousElement(el);

                      while (prev) {
                        if (
                          prev.h5tagName &&
                          _this16.matchCurrent(
                            prev.h5tagName,
                            prev,
                            selectorList[idx - 1]
                          )
                        ) {
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
                        var isSiblingMatch = _this16.matchCurrent(
                          _prev.h5tagName,
                          _prev,
                          selectorList[idx - 1]
                        );

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

                        if (
                          _this16.matchCurrent(
                            tagName,
                            el,
                            selectorList[list[i]]
                          )
                        ) {
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
                  if (selector.tag && selector.tag !== tagName) return false; // id 选择器

                  if (selector.id && selector.id !== el.id) return false; // class 选择器

                  if (selector.class.length) {
                    var classList = el.className.split(' ');

                    for (var i = 0; i < selector.class.length; i++) {
                      var cls = selector.class[i];

                      if (classList.indexOf(cls) === -1) {
                        return false;
                      }
                    }
                  } // 属性选择器

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

            if (
              prev.nodeType === 1
              /* ELEMENT_NODE */
            ) {
              return prev;
            } else {
              return getPreviousElement(prev);
            }
          }

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
              .filter(function(child) {
                // 过滤注释和空文本节点
                if (child.type === 'comment') {
                  return false;
                } else if (child.type === 'text') {
                  return child.content !== '';
                }

                return true;
              })
              .map(function(child) {
                // 文本节点
                if (child.type === 'text') {
                  var text = document.createTextNode(child.content);

                  if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isFunction */ 'h'
                      ]
                    )(options.html.transformText)
                  ) {
                    return options.html.transformText(text, child);
                  }

                  parent === null || parent === void 0
                    ? void 0
                    : parent.appendChild(text);
                  return text;
                }

                var el = document.createElement(getTagName(child.tagName));
                el.h5tagName = child.tagName;
                parent === null || parent === void 0
                  ? void 0
                  : parent.appendChild(el);

                if (!options.html.renderHTMLTag) {
                  el.className = 'h5-'.concat(child.tagName);
                }

                for (var i = 0; i < child.attributes.length; i++) {
                  var attr = child.attributes[i];

                  var _splitEqual = splitEqual(attr),
                    _splitEqual2 = Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
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
                el.setAttribute('style', style + el.style.cssText); // console.log('style, ', style)

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
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isFunction */ 'h'
                    ]
                  )(options.html.transformElement)
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
              var hasChildren = !(
                attrToken.close || options.html.voidElements.has(tagName)
              );

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

          function setInnerHTML(element, html, getDoc) {
            element.childNodes.forEach(function(node) {
              element.removeChild(node);
            });
            var children = parser(html, getDoc());

            for (var i = 0; i < children.length; i++) {
              element.appendChild(children[i]);
            }
          }

          function getBoundingClientRectImpl() {
            var _this17 = this;

            if (!options.miniGlobal) return Promise.resolve(null);
            return new Promise(function(resolve) {
              var query = options.miniGlobal.createSelectorQuery();
              query
                .select('#'.concat(_this17.uid))
                .boundingClientRect(function(res) {
                  resolve(res);
                })
                .exec();
            });
          }

          var domExternal = new inversify__WEBPACK_IMPORTED_MODULE_16__[
            /* ContainerModule */ 'b'
          ](function(bind) {
            if (true) {
              if (true) {
                bind(SERVICE_IDENTIFIER.InnerHTMLImpl).toFunction(setInnerHTML);
              }

              if (false) {
              }
            }
          });

          var Hooks = /*#__PURE__*/ (function() {
            function Hooks() {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, Hooks);
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                /* default */ 'a'
              ]
            )(Hooks, [
              {
                key: 'modifyMpEvent',
                value: function modifyMpEvent(e) {
                  var _a;

                  (_a = this.modifyMpEventImpls) === null || _a === void 0
                    ? void 0
                    : _a.forEach(function(fn) {
                        return fn(e);
                      });
                }
              },
              {
                key: 'modifyTaroEvent',
                value: function modifyTaroEvent(e, element) {
                  var _a;

                  (_a = this.modifyTaroEventImpls) === null || _a === void 0
                    ? void 0
                    : _a.forEach(function(fn) {
                        return fn(e, element);
                      });
                }
              }
            ]);

            return Hooks;
          })();

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.getLifecycle
              ),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'getLifecycle',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.getPathIndex
              ),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'getPathIndex',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.getEventCenter
              ),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'getEventCenter',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.isBubbleEvents
              ),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'isBubbleEvents',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.onRemoveAttribute
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'onRemoveAttribute',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.modifyMpEvent
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Array)
            ],
            Hooks.prototype,
            'modifyMpEventImpls',
            void 0
          );

          __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* multiInject */ 'e']
              )(SERVICE_IDENTIFIER.modifyTaroEvent),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Array)
            ],
            Hooks.prototype,
            'modifyTaroEventImpls',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.batchedEventUpdates
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'batchedEventUpdates',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.mergePageInstance
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'mergePageInstance',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.createPullDownComponent
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'createPullDownComponent',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.getDOMNode
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'getDOMNode',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.initNativeApi
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'initNativeApi',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.modifyHydrateData
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'modifyHydrateData',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.modifySetAttrPayload
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'modifySetAttrPayload',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.modifyRmAttrPayload
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'modifyRmAttrPayload',
            void 0
          );

          __decorate(
            [
              Object(inversify__WEBPACK_IMPORTED_MODULE_16__[/* inject */ 'c'])(
                SERVICE_IDENTIFIER.onAddEvent
              ),
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* optional */ 'f']
              )(),
              __metadata('design:type', Function)
            ],
            Hooks.prototype,
            'onAddEvent',
            void 0
          );

          Hooks = __decorate(
            [
              Object(
                inversify__WEBPACK_IMPORTED_MODULE_16__[/* injectable */ 'd']
              )()
            ],
            Hooks
          );
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

          var getLifecycle = function getLifecycle(instance, lifecycle) {
            return instance[lifecycle];
          };

          var getPathIndex = function getPathIndex(indexOfNode) {
            return '['.concat(indexOfNode, ']');
          };

          var getEventCenter = function getEventCenter(Events) {
            return new Events();
          };

          var isBubbleEvents = function isBubbleEvents(eventName) {
            return BUBBLE_EVENTS.has(eventName);
          };

          var DefaultHooksContainer = new inversify__WEBPACK_IMPORTED_MODULE_16__[
            /* ContainerModule */ 'b'
          ](function(bind) {
            bind(SERVICE_IDENTIFIER.getLifecycle).toFunction(getLifecycle);
            bind(SERVICE_IDENTIFIER.getPathIndex).toFunction(getPathIndex);
            bind(SERVICE_IDENTIFIER.getEventCenter).toFunction(getEventCenter);
            bind(SERVICE_IDENTIFIER.isBubbleEvents).toFunction(isBubbleEvents);
          });

          function processPluginHooks(container) {
            var keys = Object.keys(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                /* defaultReconciler */ 'c'
              ]
            );
            keys.forEach(function(key) {
              if (key in SERVICE_IDENTIFIER) {
                // is hooks
                var identifier = SERVICE_IDENTIFIER[key];
                var fn =
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* defaultReconciler */ 'c'
                  ][key];

                if (
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isArray */ 'f'
                    ]
                  )(fn)
                ) {
                  // is multi
                  fn.forEach(function(item) {
                    return container.bind(identifier).toFunction(item);
                  });
                } else {
                  if (container.isBound(identifier)) {
                    // 之前有绑定过，需要重新绑定以覆盖前者
                    container.rebind(identifier).toFunction(fn);
                  } else {
                    container.bind(identifier).toFunction(fn);
                  }
                }
              }
            });
          }

          var container = new inversify__WEBPACK_IMPORTED_MODULE_16__[
            /* Container */ 'a'
          ]();
          container
            .bind(SERVICE_IDENTIFIER.TaroElement)
            .to(TaroElement)
            .whenTargetNamed(ElementNames.Element);
          container
            .bind(SERVICE_IDENTIFIER.TaroElement)
            .to(TaroDocument)
            .inSingletonScope()
            .whenTargetNamed(ElementNames.Document);
          container
            .bind(SERVICE_IDENTIFIER.TaroElement)
            .to(TaroRootElement)
            .whenTargetNamed(ElementNames.RootElement);
          container
            .bind(SERVICE_IDENTIFIER.TaroElement)
            .to(FormElement)
            .whenTargetNamed(ElementNames.FormElement);
          container
            .bind(SERVICE_IDENTIFIER.TaroElementFactory)
            .toFactory(function(context) {
              return function(named) {
                return function(nodeName) {
                  var el = context.container.getNamed(
                    SERVICE_IDENTIFIER.TaroElement,
                    named
                  );

                  if (nodeName) {
                    el.nodeName = nodeName;
                  }

                  el.tagName = el.nodeName.toUpperCase();
                  return el;
                };
              };
            });
          container.bind(SERVICE_IDENTIFIER.TaroText).to(TaroText);
          container
            .bind(SERVICE_IDENTIFIER.TaroTextFactory)
            .toFactory(function(context) {
              return function(text) {
                var textNode = context.container.get(
                  SERVICE_IDENTIFIER.TaroText
                );
                textNode._value = text;
                return textNode;
              };
            });
          container
            .bind(SERVICE_IDENTIFIER.TaroNodeImpl)
            .to(TaroNodeImpl)
            .inSingletonScope();
          container
            .bind(SERVICE_IDENTIFIER.TaroElementImpl)
            .to(TaroElementImpl)
            .inSingletonScope();
          container
            .bind(SERVICE_IDENTIFIER.Hooks)
            .to(Hooks)
            .inSingletonScope();
          container.load(domExternal, DefaultHooksContainer);
          processPluginHooks(container);
          var hooks = container.get(SERVICE_IDENTIFIER.Hooks);
          var getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
          var document$1 = getElement(ElementNames.Document)(); // Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。

          var TaroEvent = /*#__PURE__*/ (function() {
            function TaroEvent(type, opts, event) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, TaroEvent);

              this._stop = false;
              this._end = false;
              this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
              // here use hi-res timestamp

              this.timeStamp = Date.now();
              this.type = type.toLowerCase();
              this.mpEvent = event;
              this.bubbles = Boolean(opts && opts.bubbles);
              this.cancelable = Boolean(opts && opts.cancelable);
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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
                  var _a, _b, _c;

                  var element = document$1.getElementById(
                    (_a = this.mpEvent) === null || _a === void 0
                      ? void 0
                      : _a.target.id
                  );
                  return Object.assign(
                    Object.assign(
                      {
                        dataset:
                          element !== null
                            ? element.dataset
                            : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                                /* EMPTY_OBJ */ 'a'
                              ]
                      },
                      (_b = this.mpEvent) === null || _b === void 0
                        ? void 0
                        : _b.target
                    ),
                    (_c = this.mpEvent) === null || _c === void 0
                      ? void 0
                      : _c.detail
                  );
                }
              },
              {
                key: 'currentTarget',
                get: function get() {
                  var _a, _b, _c;

                  var element = document$1.getElementById(
                    (_a = this.mpEvent) === null || _a === void 0
                      ? void 0
                      : _a.currentTarget.id
                  );

                  if (element === null) {
                    return this.target;
                  }

                  return Object.assign(
                    Object.assign(
                      {
                        dataset: element.dataset
                      },
                      (_b = this.mpEvent) === null || _b === void 0
                        ? void 0
                        : _b.currentTarget
                    ),
                    (_c = this.mpEvent) === null || _c === void 0
                      ? void 0
                      : _c.detail
                  );
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
              if (
                key === CURRENT_TARGET ||
                key === TARGET ||
                key === TYPE ||
                key === TIME_STAMP
              ) {
                continue;
              } else {
                domEv[key] = event[key];
              }
            }

            if (
              domEv.type === CONFIRM &&
              (node === null || node === void 0 ? void 0 : node.nodeName) ===
                INPUT
            ) {
              // eslint-disable-next-line dot-notation
              domEv[KEY_CODE] = 13;
            }

            return domEv;
          }

          var eventsBatch = {}; // 小程序的事件代理回调函数

          function eventHandler(event) {
            var _a;

            (_a = hooks.modifyMpEvent) === null || _a === void 0
              ? void 0
              : _a.call(hooks, event);

            if (event.currentTarget == null) {
              event.currentTarget = event.target;
            }

            var node = document$1.getElementById(event.currentTarget.id);

            if (node) {
              var dispatch = function dispatch() {
                var _a;

                var e = createEvent(event, node);
                (_a = hooks.modifyTaroEvent) === null || _a === void 0
                  ? void 0
                  : _a.call(hooks, e, node);
                node.dispatchEvent(e);
              };

              if (typeof hooks.batchedEventUpdates === 'function') {
                var type = event.type;

                if (
                  !hooks.isBubbleEvents(type) ||
                  !isParentBinded(node, type) ||
                  (type === TOUCHMOVE && !!node.props.catchMove)
                ) {
                  // 最上层组件统一 batchUpdate
                  hooks.batchedEventUpdates(function() {
                    if (eventsBatch[type]) {
                      eventsBatch[type].forEach(function(fn) {
                        return fn();
                      });
                      delete eventsBatch[type];
                    }

                    dispatch();
                  });
                } else {
                  // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                  (eventsBatch[type] || (eventsBatch[type] = [])).push(
                    dispatch
                  );
                }
              } else {
                dispatch();
              }
            }
          }

          var isBrowser = typeof document !== 'undefined' && !!document.scripts;
          var doc = isBrowser
            ? document
            : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* EMPTY_OBJ */ 'a'];
          var win = isBrowser
            ? window
            : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* EMPTY_OBJ */ 'a'];

          function createDocument() {
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
            var getElement = container.get(
              SERVICE_IDENTIFIER.TaroElementFactory
            );
            var doc = getElement(ElementNames.Document)();
            var documentCreateElement = doc.createElement.bind(doc);
            var html = documentCreateElement(HTML);
            var head = documentCreateElement(HEAD);
            var body = documentCreateElement(BODY);
            var app = documentCreateElement(APP);
            app.id = APP;
            var container$1 = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue

            doc.appendChild(html);
            html.appendChild(head);
            html.appendChild(body);
            body.appendChild(container$1);
            container$1.appendChild(app);
            doc.documentElement = html;
            doc.head = head;
            doc.body = body;
            doc.createEvent = createEvent;
            return doc;
          }

          var document$2 = isBrowser ? doc : createDocument();
          var machine = 'Macintosh';
          var arch = 'Intel Mac OS X 10_14_5';
          var engine =
            'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
          var navigator = isBrowser
            ? win.navigator
            : {
                appCodeName: 'Mozilla',
                appName: 'Netscape',
                appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
                cookieEnabled: true,
                mimeTypes: [],
                onLine: true,
                platform: 'MacIntel',
                plugins: [],
                product: 'Taro',
                productSub: '20030107',
                userAgent:
                  'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
                vendor: 'Joyent',
                vendorSub: ''
              }; // https://github.com/myrne/performance-now

          var now;

          (function() {
            var loadTime;

            if (
              typeof performance !== 'undefined' &&
              performance !== null &&
              performance.now
            ) {
              now = function now() {
                return performance.now();
              };
            } else if (Date.now) {
              now = function now() {
                return Date.now() - loadTime;
              };

              loadTime = Date.now();
            } else {
              now = function now() {
                return new Date().getTime() - loadTime;
              };

              loadTime = new Date().getTime();
            }
          })();

          var lastTime = 0; // https://gist.github.com/paulirish/1579671
          // https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

          var raf =
            typeof requestAnimationFrame !== 'undefined' &&
            requestAnimationFrame !== null
              ? requestAnimationFrame
              : function(callback) {
                  var _now = now();

                  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

                  return setTimeout(function() {
                    callback((lastTime = nextTime));
                  }, nextTime - _now);
                };
          var caf =
            typeof cancelAnimationFrame !== 'undefined' &&
            cancelAnimationFrame !== null
              ? cancelAnimationFrame
              : clearTimeout;

          if (typeof global !== 'undefined') {
            raf = raf.bind(global);
            caf = caf.bind(global);
          }

          function getComputedStyle(element) {
            return element.style;
          }

          var window$1 = isBrowser
            ? win
            : {
                navigator: navigator,
                document: document$2
              };

          if (!isBrowser) {
            var globalProperties = [].concat(
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                  /* default */ 'a'
                ]
              )(Object.getOwnPropertyNames(global || win)),
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                  /* default */ 'a'
                ]
              )(Object.getOwnPropertySymbols(global || win))
            );
            globalProperties.forEach(function(property) {
              if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
                window$1[property] = global[property];
              }
            });
          }

          if (true) {
            window$1.requestAnimationFrame = raf;
            window$1.cancelAnimationFrame = caf;
            window$1.getComputedStyle = getComputedStyle;

            window$1.addEventListener = function() {};

            window$1.removeEventListener = function() {};

            if (!(DATE in window$1)) {
              window$1.Date = Date;
            }

            if (!(SET_TIMEOUT in window$1)) {
              window$1.setTimeout = setTimeout;
            }
          }

          var Current = {
            app: null,
            router: null,
            page: null
          };

          var getCurrentInstance = function getCurrentInstance() {
            return Current;
          };

          var Events = /*#__PURE__*/ (function() {
            function Events(opts) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ]
              )(this, Events);

              if (typeof opts !== 'undefined' && opts.callbacks) {
                this.callbacks = opts.callbacks;
              } else {
                this.callbacks = {};
              }
            }

            Object(
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
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
                  var _this18 = this;

                  var wrapper = function wrapper() {
                    for (
                      var _len2 = arguments.length,
                        args = new Array(_len2),
                        _key2 = 0;
                      _key2 < _len2;
                      _key2++
                    ) {
                      args[_key2] = arguments[_key2];
                    }

                    callback.apply(_this18, args);

                    _this18.off(events, wrapper, context);
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

                  events = events
                    ? events.split(Events.eventSplitter)
                    : Object.keys(calls);

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

                      if (
                        (callback && cb !== callback) ||
                        (context && ctx !== context)
                      ) {
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
          var hooks$1 = container.get(SERVICE_IDENTIFIER.Hooks);
          var eventCenter = hooks$1.getEventCenter(Events);
          container
            .bind(SERVICE_IDENTIFIER.eventCenter)
            .toConstantValue(eventCenter);
          /* eslint-disable dot-notation */

          var instances = new Map();
          var pageId = incrementId();
          var hooks$2 = container.get(SERVICE_IDENTIFIER.Hooks);

          function injectPageInstance(inst, id) {
            var _a;

            (_a = hooks$2.mergePageInstance) === null || _a === void 0
              ? void 0
              : _a.call(hooks$2, instances.get(id), inst);
            instances.set(id, inst);
          }

          function getPageInstance(id) {
            return instances.get(id);
          }

          function addLeadingSlash(path) {
            if (path == null) {
              return '';
            }

            return path.charAt(0) === '/' ? path : '/' + path;
          }

          function safeExecute(path, lifecycle) {
            for (
              var _len3 = arguments.length,
                args = new Array(_len3 > 2 ? _len3 - 2 : 0),
                _key3 = 2;
              _key3 < _len3;
              _key3++
            ) {
              args[_key3 - 2] = arguments[_key3];
            }

            var instance = instances.get(path);

            if (instance == null) {
              return;
            }

            var func = hooks$2.getLifecycle(instance, lifecycle);

            if (
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* isArray */ 'f']
              )(func)
            ) {
              var res = func.map(function(fn) {
                return fn.apply(instance, args);
              });
              return res[0];
            }

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* isFunction */ 'h'
                ]
              )(func)
            ) {
              return;
            }

            return func.apply(instance, args);
          }

          function stringify(obj) {
            if (obj == null) {
              return '';
            }

            var path = Object.keys(obj)
              .map(function(key) {
                return key + '=' + obj[key];
              })
              .join('&');
            return path === '' ? path : '?' + path;
          }

          function getPath(id, options) {
            var path = id;

            if (!isBrowser) {
              path = id + stringify(options);
            }

            return path;
          }

          function getOnReadyEventKey(path) {
            return path + '.' + 'onReady';
          }

          function getOnShowEventKey(path) {
            return path + '.' + 'onShow';
          }

          function getOnHideEventKey(path) {
            return path + '.' + 'onHide';
          }

          function createPageConfig(component, pageName, data, pageConfig) {
            var _a, _b;

            var id =
              pageName !== null && pageName !== void 0
                ? pageName
                : 'taro_page_'.concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

            var pageElement = null;
            var unmounting = false;
            var prepareMountList = [];
            var config = {
              onLoad: function onLoad(options, cb) {
                var _this19 = this;

                perf.start(PAGE_INIT);
                Current.page = this;
                this.config = pageConfig || {};

                if (this.options == null) {
                  this.options = options;
                }

                this.options.$taroTimestamp = Date.now();
                var path = getPath(id, this.options);
                var router = isBrowser ? path : this.route || this.__route__;
                Current.router = {
                  params: this.options,
                  path: addLeadingSlash(router),
                  onReady: getOnReadyEventKey(id),
                  onShow: getOnShowEventKey(id),
                  onHide: getOnHideEventKey(id)
                };

                var mount = function mount() {
                  Current.app.mount(component, path, function() {
                    pageElement = document$2.getElementById(path);
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* ensure */ 'd'
                      ]
                    )(pageElement !== null, '没有找到页面实例。');
                    safeExecute(path, 'onLoad', _this19.options);

                    if (!isBrowser) {
                      pageElement.ctx = _this19;
                      pageElement.performUpdate(true, cb);
                    }
                  });
                };

                if (unmounting) {
                  prepareMountList.push(mount);
                } else {
                  mount();
                }
              },
              onReady: function onReady() {
                var path = getPath(id, this.options);
                raf(function() {
                  eventCenter.trigger(getOnReadyEventKey(id));
                });
                safeExecute(path, 'onReady');
                this.onReady.called = true;
              },
              onUnload: function onUnload() {
                var path = getPath(id, this.options);
                unmounting = true;
                Current.app.unmount(path, function() {
                  unmounting = false;
                  instances.delete(path);

                  if (pageElement) {
                    pageElement.ctx = null;
                  }

                  if (prepareMountList.length) {
                    prepareMountList.forEach(function(fn) {
                      return fn();
                    });
                    prepareMountList = [];
                  }
                });
              },
              onShow: function onShow() {
                Current.page = this;
                this.config = pageConfig || {};
                var path = getPath(id, this.options);
                var router = isBrowser ? path : this.route || this.__route__;
                Current.router = {
                  params: this.options,
                  path: addLeadingSlash(router),
                  onReady: getOnReadyEventKey(id),
                  onShow: getOnShowEventKey(id),
                  onHide: getOnHideEventKey(id)
                };
                raf(function() {
                  eventCenter.trigger(getOnShowEventKey(id));
                });
                safeExecute(path, 'onShow');
              },
              onHide: function onHide() {
                Current.page = null;
                Current.router = null;
                var path = getPath(id, this.options);
                safeExecute(path, 'onHide');
                eventCenter.trigger(getOnHideEventKey(id));
              },
              onPullDownRefresh: function onPullDownRefresh() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPullDownRefresh');
              },
              onReachBottom: function onReachBottom() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onReachBottom');
              },
              onPageScroll: function onPageScroll(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPageScroll', options);
              },
              onResize: function onResize(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onResize', options);
              },
              onTabItemTap: function onTabItemTap(options) {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onTabItemTap', options);
              },
              onTitleClick: function onTitleClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onTitleClick');
              },
              onOptionMenuClick: function onOptionMenuClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onOptionMenuClick');
              },
              onPopMenuClick: function onPopMenuClick() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPopMenuClick');
              },
              onPullIntercept: function onPullIntercept() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onPullIntercept');
              },
              onAddToFavorites: function onAddToFavorites() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onAddToFavorites');
              }
            }; // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

            if (
              component.onShareAppMessage ||
              ((_a = component.prototype) === null || _a === void 0
                ? void 0
                : _a.onShareAppMessage) ||
              component.enableShareAppMessage
            ) {
              config.onShareAppMessage = function(options) {
                var target = options.target;

                if (target != null) {
                  var _id = target.id;
                  var element = document$2.getElementById(_id);

                  if (element != null) {
                    options.target.dataset = element.dataset;
                  }
                }

                var path = getPath(id, this.options);
                return safeExecute(path, 'onShareAppMessage', options);
              };
            }

            if (
              component.onShareTimeline ||
              ((_b = component.prototype) === null || _b === void 0
                ? void 0
                : _b.onShareTimeline) ||
              component.enableShareTimeline
            ) {
              config.onShareTimeline = function() {
                var path = getPath(id, this.options);
                return safeExecute(path, 'onShareTimeline');
              };
            }

            config.eh = eventHandler;

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* isUndefined */ 'k'
                ]
              )(data)
            ) {
              config.data = data;
            }

            if (isBrowser) {
              config.path = id;
            }

            return config;
          }

          function createComponentConfig(component, componentName, data) {
            var _a, _b, _c;

            var id =
              componentName !== null && componentName !== void 0
                ? componentName
                : 'taro_component_'.concat(pageId());
            var componentElement = null;
            var config = {
              attached: function attached() {
                var _this20 = this;

                perf.start(PAGE_INIT);
                var path = getPath(id, {
                  id: this.getPageId()
                });
                Current.app.mount(component, path, function() {
                  componentElement = document$2.getElementById(path);
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* ensure */ 'd'
                    ]
                  )(componentElement !== null, '没有找到组件实例。');
                  safeExecute(path, 'onLoad');

                  if (!isBrowser) {
                    componentElement.ctx = _this20;
                    componentElement.performUpdate(true);
                  }
                });
              },
              detached: function detached() {
                var path = getPath(id, {
                  id: this.getPageId()
                });
                Current.app.unmount(path, function() {
                  instances.delete(path);

                  if (componentElement) {
                    componentElement.ctx = null;
                  }
                });
              },
              pageLifetimes: {
                show: function show() {
                  safeExecute(id, 'onShow');
                },
                hide: function hide() {
                  safeExecute(id, 'onHide');
                }
              },
              methods: {
                eh: eventHandler
              }
            };

            if (
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* isUndefined */ 'k'
                ]
              )(data)
            ) {
              config.data = data;
            }

            config['options'] =
              (_a =
                component === null || component === void 0
                  ? void 0
                  : component['options']) !== null && _a !== void 0
                ? _a
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            config['externalClasses'] =
              (_b =
                component === null || component === void 0
                  ? void 0
                  : component['externalClasses']) !== null && _b !== void 0
                ? _b
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            config['behaviors'] =
              (_c =
                component === null || component === void 0
                  ? void 0
                  : component['behaviors']) !== null && _c !== void 0
                ? _c
                : _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* EMPTY_OBJ */ 'a'
                  ];
            return config;
          }

          function createRecursiveComponentConfig(componentName) {
            return {
              properties: {
                i: {
                  type: Object,
                  value: Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                      /* default */ 'a'
                    ]
                  )(
                    {},
                    'nn',
                    /* NodeName */
                    'view'
                  )
                },
                l: {
                  type: String,
                  value: ''
                }
              },
              options: {
                addGlobalClass: true,
                virtualHost: componentName !== 'custom-wrapper'
              },
              methods: {
                eh: eventHandler
              }
            };
          }

          var hooks$3 = container.get(SERVICE_IDENTIFIER.Hooks);

          function isClassComponent(R, component) {
            var _a;

            return (
              Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* isFunction */ 'h'
                ]
              )(component.render) ||
              !!((_a = component.prototype) === null || _a === void 0
                ? void 0
                : _a.isReactComponent) ||
              component.prototype instanceof R.Component
            ); // compat for some others react-like library
          } // 初始值设置为 any 主要是为了过 TS 的校验

          var R =
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* EMPTY_OBJ */ 'a'];
          var PageContext =
            _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* EMPTY_OBJ */ 'a'];

          function connectReactPage(R, id) {
            var h = R.createElement;
            return function(component) {
              // eslint-disable-next-line dot-notation
              var isReactComponent = isClassComponent(R, component);

              var inject = function inject(node) {
                return node && injectPageInstance(node, id);
              };

              var refs = isReactComponent
                ? {
                    ref: inject
                  }
                : {
                    forwardedRef: inject,
                    // 兼容 react-redux 7.20.1+
                    reactReduxForwardedRef: inject
                  };

              if (
                PageContext ===
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* EMPTY_OBJ */ 'a'
                ]
              ) {
                PageContext = R.createContext('');
              }

              return /*#__PURE__*/ (function(_R$Component) {
                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                    /* default */ 'a'
                  ]
                )(Page, _R$Component);

                var _super8 = Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                    /* default */ 'a'
                  ]
                )(Page);

                function Page() {
                  var _this21;

                  Object(
                    _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                      /* default */ 'a'
                    ]
                  )(this, Page);

                  _this21 = _super8.apply(this, arguments);
                  _this21.state = {
                    hasError: false
                  };
                  return _this21;
                }

                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                    /* default */ 'a'
                  ]
                )(
                  Page,
                  [
                    {
                      key: 'componentDidCatch',
                      // React 16 uncaught error 会导致整个应用 crash，
                      value:
                        // 目前把错误缩小到页面
                        function componentDidCatch(error, info) {
                          true && console.warn(error);
                          true && console.error(info.componentStack);
                        }
                    },
                    {
                      key: 'render',
                      value: function render() {
                        var children = this.state.hasError
                          ? []
                          : h(
                              PageContext.Provider,
                              {
                                value: id
                              },
                              h(
                                component,
                                Object.assign(
                                  Object.assign({}, this.props),
                                  refs
                                )
                              )
                            );

                        if (isBrowser) {
                          return h(
                            'div',
                            {
                              id: id,
                              className: 'taro_page'
                            },
                            children
                          );
                        }

                        return h(
                          'root',
                          {
                            id: id
                          },
                          children
                        );
                      }
                    }
                  ],
                  [
                    {
                      key: 'getDerivedStateFromError',
                      value: function getDerivedStateFromError(error) {
                        true && console.warn(error);
                        return {
                          hasError: true
                        };
                      }
                    }
                  ]
                );

                return Page;
              })(R.Component);
            };
          }

          var ReactDOM;

          function setReconciler() {
            var getLifecycle = function getLifecycle(instance, lifecycle) {
              lifecycle = lifecycle.replace(
                /^on(Show|Hide)$/,
                'componentDid$1'
              );
              return instance[lifecycle];
            };

            var modifyMpEvent = function modifyMpEvent(event) {
              event.type = event.type.replace(/-/g, '');
            };

            var batchedEventUpdates = function batchedEventUpdates(cb) {
              ReactDOM.unstable_batchedUpdates(cb);
            };

            var mergePageInstance = function mergePageInstance(prev, next) {
              if (!prev || !next) return; // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
              // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev

              if ('constructor' in prev) return;
              Object.keys(prev).forEach(function(item) {
                if (
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isFunction */ 'h'
                    ]
                  )(next[item])
                ) {
                  next[item] = [next[item]].concat(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                        /* default */ 'a'
                      ]
                    )(prev[item])
                  );
                } else {
                  next[item] = [].concat(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                        /* default */ 'a'
                      ]
                    )(next[item] || []),
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                        /* default */ 'a'
                      ]
                    )(prev[item])
                  );
                }
              });
            };

            hooks$3.getLifecycle = getLifecycle;
            hooks$3.modifyMpEvent = modifyMpEvent;
            hooks$3.batchedEventUpdates = batchedEventUpdates;
            hooks$3.mergePageInstance = mergePageInstance;

            if (false) {
            }
          }

          var pageKeyId = incrementId();

          function createReactApp(App, react, reactdom, config) {
            R = react;
            ReactDOM = reactdom;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* ensure */ 'd']
            )(
              !!ReactDOM,
              "构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 'react'/'nerv' "
            );
            var ref = R.createRef();
            var isReactComponent = isClassComponent(R, App);
            setReconciler();
            var wrapper;

            var AppWrapper = /*#__PURE__*/ (function(_R$Component2) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                  /* default */ 'a'
                ]
              )(AppWrapper, _R$Component2);

              var _super9 = Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ]
              )(AppWrapper);

              function AppWrapper() {
                var _this22;

                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                    /* default */ 'a'
                  ]
                )(this, AppWrapper);

                _this22 = _super9.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

                _this22.pages = [];
                _this22.elements = [];
                return _this22;
              }

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(AppWrapper, [
                {
                  key: 'mount',
                  value: function mount(component, id, cb) {
                    var key = id + pageKeyId();

                    var page = function page() {
                      return R.createElement(component, {
                        key: key,
                        tid: id
                      });
                    };

                    this.pages.push(page);
                    this.forceUpdate(cb);
                  }
                },
                {
                  key: 'unmount',
                  value: function unmount(id, cb) {
                    for (var i = 0; i < this.elements.length; i++) {
                      var element = this.elements[i];

                      if (element.props.tid === id) {
                        this.elements.splice(i, 1);
                        break;
                      }
                    }

                    this.forceUpdate(cb);
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    while (this.pages.length > 0) {
                      var page = this.pages.pop();
                      this.elements.push(page());
                    }

                    var props = null;

                    if (isReactComponent) {
                      props = {
                        ref: ref
                      };
                    }

                    return R.createElement(
                      App,
                      props,
                      isBrowser
                        ? R.createElement('div', null, this.elements.slice())
                        : this.elements.slice()
                    );
                  }
                }
              ]);

              return AppWrapper;
            })(R.Component);

            var app = Object.create(
              {
                render: function render(cb) {
                  wrapper.forceUpdate(cb);
                },
                mount: function mount(component, id, cb) {
                  var page = connectReactPage(R, id)(component);
                  wrapper.mount(page, id, cb);
                },
                unmount: function unmount(id, cb) {
                  wrapper.unmount(id, cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var _this23 = this;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    ); // eslint-disable-next-line react/no-render-return-value

                    wrapper = ReactDOM.render(
                      R.createElement(AppWrapper),
                      document$2.getElementById('app')
                    );
                    var app = ref.current; // For taroize
                    // 把 App Class 上挂载的额外属性同步到全局 app 对象中

                    if (
                      app === null || app === void 0
                        ? void 0
                        : app.taroGlobalData
                    ) {
                      var globalData = app.taroGlobalData;
                      var keys = Object.keys(globalData);
                      var descriptors = Object.getOwnPropertyDescriptors(
                        globalData
                      );
                      keys.forEach(function(key) {
                        Object.defineProperty(_this23, key, {
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

                    this.$app = app;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(app.onLaunch)
                    ) {
                      app.onLaunch(options);
                    }
                  }
                },
                onShow: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var app = ref.current;
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(app.componentDidShow)
                    ) {
                      app.componentDidShow(options);
                    } // app useDidShow

                    triggerAppHook('onShow');
                  }
                },
                onHide: {
                  enumerable: true,
                  writable: true,
                  value: function value(options) {
                    var app = ref.current;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(app.componentDidHide)
                    ) {
                      app.componentDidHide(options);
                    } // app useDidHide

                    triggerAppHook('onHide');
                  }
                },
                onPageNotFound: {
                  enumerable: true,
                  writable: true,
                  value: function value(res) {
                    var app = ref.current;

                    if (
                      app != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(app.onPageNotFound)
                    ) {
                      app.onPageNotFound(res);
                    }
                  }
                }
              }
            );

            function triggerAppHook(lifecycle) {
              var instance = getPageInstance(HOOKS_APP_ID);

              if (instance) {
                var _app = ref.current;
                var func = hooks$3.getLifecycle(instance, lifecycle);

                if (Array.isArray(func)) {
                  func.forEach(function(cb) {
                    return cb.apply(_app);
                  });
                }
              }
            }

            Current.app = app;
            return Current.app;
          }

          var getNativeCompId = incrementId();

          function initNativeComponentEntry(R, ReactDOM) {
            var NativeComponentWrapper = /*#__PURE__*/ (function(
              _R$Component3
            ) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper, _R$Component3);

              var _super10 = Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper);

              function NativeComponentWrapper() {
                var _this24;

                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                    /* default */ 'a'
                  ]
                )(this, NativeComponentWrapper);

                _this24 = _super10.apply(this, arguments);
                _this24.root = R.createRef();
                _this24.ctx = _this24.props.getCtx();
                return _this24;
              }

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(NativeComponentWrapper, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    this.ctx.component = this;
                    var rootElement = this.root.current;
                    rootElement.ctx = this.ctx;
                    rootElement.performUpdate(true);
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    return R.createElement(
                      'root',
                      {
                        ref: this.root
                      },
                      this.props.renderComponent(this.ctx)
                    );
                  }
                }
              ]);

              return NativeComponentWrapper;
            })(R.Component);

            var Entry = /*#__PURE__*/ (function(_R$Component4) {
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__[
                  /* default */ 'a'
                ]
              )(Entry, _R$Component4);

              var _super11 = Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ]
              )(Entry);

              function Entry() {
                var _this25;

                Object(
                  _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__[
                    /* default */ 'a'
                  ]
                )(this, Entry);

                _this25 = _super11.apply(this, arguments);
                _this25.state = {
                  components: []
                };
                return _this25;
              }

              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ]
              )(Entry, [
                {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                    Current.app = this;
                  }
                },
                {
                  key: 'mount',
                  value: function mount(Component, compId, getCtx) {
                    var isReactComponent = isClassComponent(R, Component);

                    var inject = function inject(node) {
                      return node && injectPageInstance(node, compId);
                    };

                    var refs = isReactComponent
                      ? {
                          ref: inject
                        }
                      : {
                          forwardedRef: inject,
                          reactReduxForwardedRef: inject
                        };
                    var item = {
                      compId: compId,
                      element: R.createElement(NativeComponentWrapper, {
                        key: compId,
                        getCtx: getCtx,
                        renderComponent: function renderComponent(ctx) {
                          return R.createElement(
                            Component,
                            Object.assign(
                              Object.assign(
                                {},
                                (ctx.data || (ctx.data = {})).props
                              ),
                              refs
                            )
                          );
                        }
                      })
                    };
                    this.setState({
                      components: [].concat(
                        Object(
                          _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                            /* default */ 'a'
                          ]
                        )(this.state.components),
                        [item]
                      )
                    });
                  }
                },
                {
                  key: 'unmount',
                  value: function unmount(compId) {
                    var components = this.state.components;
                    var index = components.findIndex(function(item) {
                      return item.compId === compId;
                    });
                    var next = [].concat(
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                          /* default */ 'a'
                        ]
                      )(components.slice(0, index)),
                      Object(
                        _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                          /* default */ 'a'
                        ]
                      )(components.slice(index + 1))
                    );
                    this.setState({
                      components: next
                    });
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    var components = this.state.components;
                    return components.map(function(_ref4) {
                      var element = _ref4.element;
                      return element;
                    });
                  }
                }
              ]);

              return Entry;
            })(R.Component);

            setReconciler();
            var app = document$2.getElementById('app');
            ReactDOM.render(R.createElement(Entry, {}), app);
          }

          function createNativeComponentConfig(
            Component,
            react,
            reactdom,
            componentConfig
          ) {
            R = react;
            ReactDOM = reactdom;
            var config = {
              properties: {
                props: {
                  type: null,
                  value: null,
                  observer: function observer(_newVal, oldVal) {
                    oldVal && this.component.forceUpdate();
                  }
                }
              },
              created: function created() {
                if (!Current.app) {
                  initNativeComponentEntry(R, ReactDOM);
                }
              },
              attached: function attached() {
                var _this26 = this;

                setCurrent();
                this.compId = getNativeCompId();
                this.config = componentConfig;
                Current.app.mount(Component, this.compId, function() {
                  return _this26;
                });
              },
              ready: function ready() {
                safeExecute(this.compId, 'onReady');
              },
              detached: function detached() {
                Current.app.unmount(this.compId);
              },
              pageLifetimes: {
                show: function show() {
                  safeExecute(this.compId, 'onShow');
                },
                hide: function hide() {
                  safeExecute(this.compId, 'onHide');
                }
              },
              methods: {
                eh: eventHandler
              }
            };

            function setCurrent() {
              var pages = getCurrentPages();
              var currentPage = pages[pages.length - 1];
              if (Current.page === currentPage) return;
              Current.page = currentPage;
              var route = currentPage.route || currentPage.__route__;
              var router = {
                params: currentPage.options || {},
                path: addLeadingSlash(route),
                onReady: '',
                onHide: '',
                onShow: ''
              };
              Current.router = router;

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

            return config;
          }

          function connectVuePage(Vue, id) {
            return function(component) {
              var injectedPage = Vue.extend({
                props: {
                  tid: String
                },
                mixins: [
                  component,
                  {
                    created: function created() {
                      injectPageInstance(this, id);
                    }
                  }
                ]
              });
              var options = {
                render: function render(h) {
                  return h(
                    isBrowser ? 'div' : 'root',
                    {
                      attrs: {
                        id: id,
                        class: isBrowser ? 'taro_page' : ''
                      }
                    },
                    [
                      h(injectedPage, {
                        props: {
                          tid: id
                        }
                      })
                    ]
                  );
                }
              };
              return options;
            };
          }

          function setReconciler$1() {
            var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

            var onRemoveAttribute = function onRemoveAttribute(
              dom,
              qualifiedName
            ) {
              // 处理原因: https://github.com/NervJS/taro/pull/5990
              var props = dom.props;

              if (
                !props.hasOwnProperty(qualifiedName) ||
                Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* isBoolean */ 'g'
                  ]
                )(props[qualifiedName])
              ) {
                dom.setAttribute(qualifiedName, false);
                return true;
              }
            };

            var getLifecycle = function getLifecycle(instance, lifecycle) {
              return instance.$options[lifecycle];
            };

            hooks.onRemoveAttribute = onRemoveAttribute;
            hooks.getLifecycle = getLifecycle;

            if (false) {
            }
          }

          var Vue;

          function createVueApp(App, vue, config) {
            Vue = vue;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* ensure */ 'd']
            )(!!Vue, "构建 Vue 项目请把 process.env.FRAMEWORK 设置为 'vue'");
            setReconciler$1();
            Vue.config.getTagNamespace =
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* noop */ 'n'];
            var elements = [];
            var pages = [];
            var appInstance;
            var wrapper = new Vue({
              render: function render(h) {
                while (pages.length > 0) {
                  var page = pages.pop();
                  elements.push(page(h));
                }

                return h(
                  App,
                  {
                    ref: 'app'
                  },
                  elements.slice()
                );
              },
              methods: {
                mount: function mount(component, id, cb) {
                  pages.push(function(h) {
                    return h(component, {
                      key: id
                    });
                  });
                  this.updateSync(cb);
                },
                updateSync: function updateSync(cb) {
                  this._update(this._render(), false);

                  this.$children.forEach(function(child) {
                    return child._update(child._render(), false);
                  });
                  cb();
                },
                unmount: function unmount(id, cb) {
                  for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];

                    if (element.key === id) {
                      elements.splice(i, 1);
                      break;
                    }
                  }

                  this.updateSync(cb);
                }
              }
            });
            var app = Object.create(
              {
                mount: function mount(component, id, cb) {
                  var page = connectVuePage(Vue, id)(component);
                  wrapper.mount(page, id, cb);
                },
                unmount: function unmount(id, cb) {
                  wrapper.unmount(id, cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    wrapper.$mount(document$2.getElementById('app'));
                    appInstance = wrapper.$refs.app;

                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(appInstance.$options.onLaunch)
                    ) {
                      appInstance.$options.onLaunch.call(appInstance, options);
                    }
                  }
                },
                onShow: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );

                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(appInstance.$options.onShow)
                    ) {
                      appInstance.$options.onShow.call(appInstance, options);
                    }
                  }
                },
                onHide: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    if (
                      appInstance != null &&
                      Object(
                        _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                          /* isFunction */ 'h'
                        ]
                      )(appInstance.$options.onHide)
                    ) {
                      appInstance.$options.onHide.call(appInstance, options);
                    }
                  }
                }
              }
            );
            Current.app = app;
            return Current.app;
          }

          function createVue3Page(h, id) {
            return function(component) {
              var _a;

              var inject = {
                props: {
                  tid: String
                },
                created: function created() {
                  injectPageInstance(this, id); // vue3 组件 created 时机比小程序页面 onShow 慢，因此在 created 后再手动触发一次 onShow。

                  this.$nextTick(function() {
                    safeExecute(id, 'onShow');
                  });
                }
              };

              if (
                Object(
                  _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                    /* isArray */ 'f'
                  ]
                )(component.mixins)
              ) {
                var mixins = component.mixins;
                var idx = mixins.length - 1;

                if (
                  !((_a = mixins[idx].props) === null || _a === void 0
                    ? void 0
                    : _a.tid)
                ) {
                  // mixins 里还没注入过，直接推入数组
                  component.mixins.push(inject);
                } else {
                  // mixins 里已经注入过，代替前者
                  component.mixins[idx] = inject;
                }
              } else {
                component.mixins = [inject];
              }

              return h(
                isBrowser ? 'div' : 'root',
                {
                  key: id,
                  id: id,
                  class: isBrowser ? 'taro_page' : ''
                },
                [
                  h(component, {
                    tid: id
                  })
                ]
              );
            };
          }

          function setReconciler$2() {
            var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

            var getLifecycle = function getLifecycle(instance, lifecycle) {
              return instance.$options[lifecycle];
            };

            var modifyMpEvent = function modifyMpEvent(event) {
              event.type = event.type.replace(/-/g, '');
            };

            hooks.getLifecycle = getLifecycle;
            hooks.modifyMpEvent = modifyMpEvent;

            if (false) {
            }
          }

          function createVue3App(app, h, config) {
            var pages = [];
            var appInstance;
            Object(
              _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[/* ensure */ 'd']
            )(
              !Object(
                _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                  /* isFunction */ 'h'
                ]
              )(app._component),
              '入口组件不支持使用函数式组件'
            );
            setReconciler$2();

            app._component.render = function() {
              return pages.slice();
            };

            var appConfig = Object.create(
              {
                mount: function mount(component, id, cb) {
                  var page = createVue3Page(h, id)(component);
                  pages.push(page);
                  this.updateAppInstance(cb);
                },
                unmount: function unmount(id, cb) {
                  pages = pages.filter(function(page) {
                    return page.key !== id;
                  });
                  this.updateAppInstance(cb);
                },
                updateAppInstance: function updateAppInstance(cb) {
                  appInstance.$forceUpdate();
                  appInstance.$nextTick(cb);
                }
              },
              {
                config: {
                  writable: true,
                  enumerable: true,
                  configurable: true,
                  value: config
                },
                onLaunch: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    appInstance = app.mount('#app');
                    var onLaunch =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onLaunch;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isFunction */ 'h'
                      ]
                    )(onLaunch) && onLaunch.call(appInstance, options);
                  }
                },
                onShow: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    Current.router = Object.assign(
                      {
                        params:
                          options === null || options === void 0
                            ? void 0
                            : options.query
                      },
                      options
                    );
                    var onShow =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onShow;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isFunction */ 'h'
                      ]
                    )(onShow) && onShow.call(appInstance, options);
                  }
                },
                onHide: {
                  writable: true,
                  enumerable: true,
                  value: function value(options) {
                    var _a;

                    var onHide =
                      (_a =
                        appInstance === null || appInstance === void 0
                          ? void 0
                          : appInstance.$options) === null || _a === void 0
                        ? void 0
                        : _a.onHide;
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isFunction */ 'h'
                      ]
                    )(onHide) && onHide.call(appInstance, options);
                  }
                }
              }
            );
            Current.app = appConfig;
            return Current.app;
          }

          var taroHooks = function taroHooks(lifecycle) {
            return function(fn) {
              var id = R.useContext(PageContext) || HOOKS_APP_ID; // hold fn ref and keep up to date

              var fnRef = R.useRef(fn);
              if (fnRef.current !== fn) fnRef.current = fn;
              R.useLayoutEffect(function() {
                var inst = getPageInstance(id);
                var first = false;

                if (inst == null) {
                  first = true;
                  inst = Object.create(null);
                }

                inst = inst; // callback is immutable but inner function is up to date

                var callback = function callback() {
                  return fnRef.current.apply(fnRef, arguments);
                };

                if (
                  Object(
                    _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                      /* isFunction */ 'h'
                    ]
                  )(inst[lifecycle])
                ) {
                  inst[lifecycle] = [inst[lifecycle], callback];
                } else {
                  inst[lifecycle] = [].concat(
                    Object(
                      _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[
                        /* default */ 'a'
                      ]
                    )(inst[lifecycle] || []),
                    [callback]
                  );
                }

                if (first) {
                  injectPageInstance(inst, id);
                }

                return function() {
                  var inst = getPageInstance(id);
                  var list = inst[lifecycle];

                  if (list === callback) {
                    inst[lifecycle] = undefined;
                  } else if (
                    Object(
                      _tarojs_shared__WEBPACK_IMPORTED_MODULE_17__[
                        /* isArray */ 'f'
                      ]
                    )(list)
                  ) {
                    inst[lifecycle] = list.filter(function(item) {
                      return item !== callback;
                    });
                  }
                };
              }, []);
            };
          };

          var useDidShow = taroHooks('componentDidShow');
          var useDidHide = taroHooks('componentDidHide');
          var usePullDownRefresh = taroHooks('onPullDownRefresh');
          var useReachBottom = taroHooks('onReachBottom');
          var usePageScroll = taroHooks('onPageScroll');
          var useResize = taroHooks('onResize');
          var useShareAppMessage = taroHooks('onShareAppMessage');
          var useTabItemTap = taroHooks('onTabItemTap');
          var useTitleClick = taroHooks('onTitleClick');
          var useOptionMenuClick = taroHooks('onOptionMenuClick');
          var usePullIntercept = taroHooks('onPullIntercept');
          var useShareTimeline = taroHooks('onShareTimeline');
          var useAddToFavorites = taroHooks('onAddToFavorites');
          var useReady = taroHooks('onReady');

          var useRouter = function useRouter() {
            var dynamic =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;
            return dynamic
              ? Current.router
              : R.useMemo(function() {
                  return Current.router;
                }, []);
          };

          var useScope = function useScope() {
            return undefined;
          };

          function removeLeadingSlash(path) {
            if (path == null) {
              return '';
            }

            return path.charAt(0) === '/' ? path.slice(1) : path;
          }

          var nextTick = function nextTick(cb, ctx) {
            var _a, _b, _c;

            var router = Current.router;

            var timerFunc = function timerFunc() {
              setTimeout(function() {
                ctx ? cb.call(ctx) : cb();
              }, 1);
            };

            if (router !== null) {
              var pageElement = null;
              var path = getPath(
                removeLeadingSlash(router.path),
                router.params
              );
              pageElement = document$2.getElementById(path);

              if (pageElement !== null) {
                if (isBrowser) {
                  // eslint-disable-next-line dot-notation
                  (_c =
                    (_b =
                      (_a = pageElement.firstChild) === null || _a === void 0
                        ? void 0
                        : _a['componentOnReady']) === null || _b === void 0
                      ? void 0
                      : _b.call(_a).then(function() {
                          timerFunc();
                        })) !== null && _c !== void 0
                    ? _c
                    : timerFunc();
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
          __webpack_require__(
            /*! ./../../../process/browser.js */ './node_modules/process/browser.js'
          ),
          __webpack_require__(
            /*! ./../../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['document'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['window'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['requestAnimationFrame'],
          __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          )['cancelAnimationFrame']
        ));

        /***/
      },

    /***/ './node_modules/@tarojs/shared/dist/shared.esm.js':
      /*!********************************************************!*\
  !*** ./node_modules/@tarojs/shared/dist/shared.esm.js ***!
  \********************************************************/
      /*! exports provided: EMPTY_ARR, EMPTY_OBJ, animationEvents, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, controlledComponent, defaultReconciler, ensure, events, focusComponents, getUniqueKey, hasOwn, internalComponents, isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, nestElements, noop, processApis, queryToJson, setUniqueKeyToRoute, singleQuote, specialEvents, styles, toCamelCase, toDashed, toKebabCase, touchEvents, unbox, unsupport, voidElements, warn */
      /*! exports used: EMPTY_OBJ, controlledComponent, defaultReconciler, ensure, internalComponents, isArray, isBoolean, isFunction, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, noop, processApis, singleQuote, toCamelCase, toDashed, warn */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* unused harmony export EMPTY_ARR */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'a',
          function() {
            return EMPTY_OBJ;
          }
        );
        /* unused harmony export animationEvents */
        /* unused harmony export box */
        /* unused harmony export cacheDataGet */
        /* unused harmony export cacheDataHas */
        /* unused harmony export cacheDataSet */
        /* unused harmony export capitalize */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'b',
          function() {
            return controlledComponent;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'c',
          function() {
            return defaultReconciler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'd',
          function() {
            return ensure;
          }
        );
        /* unused harmony export events */
        /* unused harmony export focusComponents */
        /* unused harmony export getUniqueKey */
        /* unused harmony export hasOwn */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'e',
          function() {
            return internalComponents;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'f',
          function() {
            return isArray;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'g',
          function() {
            return isBoolean;
          }
        );
        /* unused harmony export isBooleanStringLiteral */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'h',
          function() {
            return isFunction;
          }
        );
        /* unused harmony export isNull */
        /* unused harmony export isNumber */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'i',
          function() {
            return isObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'j',
          function() {
            return isString;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'k',
          function() {
            return isUndefined;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'l',
          function() {
            return mergeInternalComponents;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'm',
          function() {
            return mergeReconciler;
          }
        );
        /* unused harmony export nestElements */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'n',
          function() {
            return noop;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'o',
          function() {
            return processApis;
          }
        );
        /* unused harmony export queryToJson */
        /* unused harmony export setUniqueKeyToRoute */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'p',
          function() {
            return singleQuote;
          }
        );
        /* unused harmony export specialEvents */
        /* unused harmony export styles */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'q',
          function() {
            return toCamelCase;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'r',
          function() {
            return toDashed;
          }
        );
        /* unused harmony export toKebabCase */
        /* unused harmony export touchEvents */
        /* unused harmony export unbox */
        /* unused harmony export unsupport */
        /* unused harmony export voidElements */
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          's',
          function() {
            return warn;
          }
        );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ './node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        );
        /* harmony import */ var _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./node_modules/@babel/runtime/helpers/esm/typeof */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
        );

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
              _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[
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
        var styles = {
          style: 'i.'.concat(
            'st'
            /* Style */
          ),
          class: 'i.'.concat(
            'cl'
            /* Class */
          )
        };
        var events = {
          bindtap: 'eh'
        };
        var touchEvents = {
          bindTouchStart: '',
          bindTouchMove: '',
          bindTouchEnd: '',
          bindTouchCancel: '',
          bindLongTap: ''
        };
        var animationEvents = {
          bindAnimationStart: '',
          bindAnimationIteration: '',
          bindAnimationEnd: '',
          bindTransitionEnd: ''
        };
        var specialEvents = new Set(['htouchmove', 'vtouchmove']);

        function singleQuote(s) {
          return "'".concat(s, "'");
        }

        var View = Object.assign(
          Object.assign(
            {
              'hover-class': singleQuote('none'),
              'hover-stop-propagation': 'false',
              'hover-start-time': '50',
              'hover-stay-time': '400',
              animation: ''
            },
            touchEvents
          ),
          animationEvents
        );
        var Icon = {
          type: '',
          size: '23',
          color: ''
        };
        var MapComp = Object.assign(
          {
            longitude: '',
            latitude: '',
            scale: '16',
            markers: '[]',
            covers: '',
            polyline: '[]',
            circles: '[]',
            controls: '[]',
            'include-points': '[]',
            'show-location': '',
            'layer-style': '1',
            bindMarkerTap: '',
            bindControlTap: '',
            bindCalloutTap: '',
            bindUpdated: ''
          },
          touchEvents
        );
        var Progress = {
          percent: '',
          'stroke-width': '6',
          color: singleQuote('#09BB07'),
          activeColor: singleQuote('#09BB07'),
          backgroundColor: singleQuote('#EBEBEB'),
          active: 'false',
          'active-mode': singleQuote('backwards'),
          'show-info': 'false'
        };
        var RichText = {
          nodes: '[]'
        };
        var Text = {
          selectable: 'false',
          space: '',
          decode: 'false'
        };
        var Button = {
          size: singleQuote('default'),
          type: '',
          plain: 'false',
          disabled: '',
          loading: 'false',
          'form-type': '',
          'open-type': '',
          'hover-class': singleQuote('button-hover'),
          'hover-stop-propagation': 'false',
          'hover-start-time': '20',
          'hover-stay-time': '70',
          name: ''
        };
        var Checkbox = {
          value: '',
          disabled: '',
          checked: 'false',
          color: singleQuote('#09BB07'),
          name: ''
        };
        var CheckboxGroup = {
          bindChange: '',
          name: ''
        };
        var Form = {
          'report-submit': 'false',
          bindSubmit: '',
          bindReset: '',
          name: ''
        };
        var Input = {
          value: '',
          type: singleQuote(''),
          password: 'false',
          placeholder: '',
          'placeholder-style': '',
          'placeholder-class': singleQuote('input-placeholder'),
          disabled: '',
          maxlength: '140',
          'cursor-spacing': '0',
          focus: 'false',
          'confirm-type': singleQuote('done'),
          'confirm-hold': 'false',
          cursor: 'i.value.length',
          'selection-start': '-1',
          'selection-end': '-1',
          bindInput: '',
          bindFocus: '',
          bindBlur: '',
          bindConfirm: '',
          name: ''
        };
        var Label = {
          for: '',
          name: ''
        };
        var Picker = {
          mode: singleQuote('selector'),
          disabled: '',
          range: '',
          'range-key': '',
          value: '',
          start: '',
          end: '',
          fields: singleQuote('day'),
          'custom-item': '',
          name: '',
          bindCancel: '',
          bindChange: '',
          bindColumnChange: ''
        };
        var PickerView = {
          value: '',
          'indicator-style': '',
          'indicator-class': '',
          'mask-style': '',
          'mask-class': '',
          bindChange: '',
          name: ''
        };
        var PickerViewColumn = {
          name: ''
        };
        var Radio = {
          value: '',
          checked: 'false',
          disabled: '',
          color: singleQuote('#09BB07'),
          name: ''
        };
        var RadioGroup = {
          bindChange: '',
          name: ''
        };
        var Slider = {
          min: '0',
          max: '100',
          step: '1',
          disabled: '',
          value: '0',
          activeColor: singleQuote('#1aad19'),
          backgroundColor: singleQuote('#e9e9e9'),
          'block-size': '28',
          'block-color': singleQuote('#ffffff'),
          'show-value': 'false',
          bindChange: '',
          bindChanging: '',
          name: ''
        };
        var Switch = {
          checked: 'false',
          disabled: '',
          type: singleQuote('switch'),
          color: singleQuote('#04BE02'),
          bindChange: '',
          name: ''
        };
        var Textarea = {
          value: '',
          placeholder: '',
          'placeholder-style': '',
          'placeholder-class': singleQuote('textarea-placeholder'),
          disabled: '',
          maxlength: '140',
          'auto-focus': 'false',
          focus: 'false',
          'auto-height': 'false',
          fixed: 'false',
          'cursor-spacing': '0',
          cursor: '-1',
          'selection-start': '-1',
          'selection-end': '-1',
          bindFocus: '',
          bindBlur: '',
          bindLineChange: '',
          bindInput: '',
          bindConfirm: '',
          name: ''
        };
        var CoverImage = {
          src: '',
          bindLoad: 'eh',
          bindError: 'eh'
        };
        var CoverView = Object.assign(
          {
            'scroll-top': 'false'
          },
          touchEvents
        );
        var MovableArea = {
          'scale-area': 'false'
        };
        var MovableView = Object.assign(
          Object.assign(
            {
              direction: 'none',
              inertia: 'false',
              'out-of-bounds': 'false',
              x: '',
              y: '',
              damping: '20',
              friction: '2',
              disabled: '',
              scale: 'false',
              'scale-min': '0.5',
              'scale-max': '10',
              'scale-value': '1',
              animation: 'true',
              bindChange: '',
              bindScale: '',
              htouchmove: '',
              vtouchmove: '',
              width: singleQuote('10px'),
              height: singleQuote('10px')
            },
            touchEvents
          ),
          animationEvents
        );
        var ScrollView = Object.assign(
          Object.assign(
            {
              'scroll-x': 'false',
              'scroll-y': 'false',
              'upper-threshold': '50',
              'lower-threshold': '50',
              'scroll-top': '',
              'scroll-left': '',
              'scroll-into-view': '',
              'scroll-with-animation': 'false',
              'enable-back-to-top': 'false',
              bindScrollToUpper: '',
              bindScrollToLower: '',
              bindScroll: ''
            },
            touchEvents
          ),
          animationEvents
        );
        var Swiper = Object.assign(
          {
            'indicator-dots': 'false',
            'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
            'indicator-active-color': singleQuote('#000000'),
            autoplay: 'false',
            current: '0',
            interval: '5000',
            duration: '500',
            circular: 'false',
            vertical: 'false',
            'previous-margin': "'0px'",
            'next-margin': "'0px'",
            'display-multiple-items': '1',
            bindChange: '',
            bindTransition: '',
            bindAnimationFinish: ''
          },
          touchEvents
        );
        var SwiperItem = {
          'item-id': ''
        };
        var Navigator = {
          url: '',
          'open-type': singleQuote('navigate'),
          delta: '1',
          'hover-class': singleQuote('navigator-hover'),
          'hover-stop-propagation': 'false',
          'hover-start-time': '50',
          'hover-stay-time': '600',
          bindSuccess: '',
          bindFail: '',
          bindComplete: ''
        };
        var Audio = {
          id: '',
          src: '',
          loop: 'false',
          controls: 'false',
          poster: '',
          name: '',
          author: '',
          bindError: '',
          bindPlay: '',
          bindPause: '',
          bindTimeUpdate: '',
          bindEnded: ''
        };
        var Camera = {
          'device-position': singleQuote('back'),
          flash: singleQuote('auto'),
          bindStop: '',
          bindError: ''
        };
        var Image = Object.assign(
          {
            src: '',
            mode: singleQuote('scaleToFill'),
            'lazy-load': 'false',
            bindError: '',
            bindLoad: ''
          },
          touchEvents
        );
        var LivePlayer = {
          src: '',
          autoplay: 'false',
          muted: 'false',
          orientation: singleQuote('vertical'),
          'object-fit': singleQuote('contain'),
          'background-mute': 'false',
          'min-cache': '1',
          'max-cache': '3',
          animation: '',
          bindStateChange: '',
          bindFullScreenChange: '',
          bindNetStatus: ''
        };
        var Video = {
          src: '',
          duration: '',
          controls: 'true',
          'danmu-list': '',
          'danmu-btn': '',
          'enable-danmu': '',
          autoplay: 'false',
          loop: 'false',
          muted: 'false',
          'initial-time': '0',
          'page-gesture': 'false',
          direction: '',
          'show-progress': 'true',
          'show-fullscreen-btn': 'true',
          'show-play-btn': 'true',
          'show-center-play-btn': 'true',
          'enable-progress-gesture': 'true',
          'object-fit': singleQuote('contain'),
          poster: '',
          'show-mute-btn': 'false',
          animation: '',
          bindPlay: '',
          bindPause: '',
          bindEnded: '',
          bindTimeUpdate: '',
          bindFullScreenChange: '',
          bindWaiting: '',
          bindError: ''
        };
        var Canvas = Object.assign(
          {
            'canvas-id': '',
            'disable-scroll': 'false',
            bindError: ''
          },
          touchEvents
        );
        var Ad = {
          'unit-id': '',
          'ad-intervals': '',
          bindLoad: '',
          bindError: '',
          bindClose: ''
        };
        var WebView = {
          src: '',
          bindMessage: '',
          bindLoad: '',
          bindError: ''
        };
        var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

        var SlotView = {
          name: ''
        }; // For React
        // Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
        // 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
        // 不给 View 直接加 slot 属性的原因是性能损耗

        var Slot = {
          name: ''
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
          SlotView: SlotView
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
        var EMPTY_OBJ = {};
        var EMPTY_ARR = [];

        var noop = function noop() {};

        var defaultReconciler = Object.create(null);
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

        var reportIssue =
          '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
        /**
         * ensure takes a condition and throw a error if the condition fails,
         * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
         * @param condition condition.
         * @param msg error message.
         */

        function ensure(condition, msg) {
          if (!condition) {
            throw new Error(msg + '\n' + reportIssue);
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
          Object.keys(components).forEach(function(name) {
            if (name in internalComponents) {
              Object.assign(internalComponents[name], components[name]);
            } else {
              internalComponents[name] = components[name];
            }
          });
        }

        function mergeReconciler(hostConfig) {
          Object.keys(hostConfig).forEach(function(key) {
            var value = hostConfig[key];
            var raw = defaultReconciler[key];

            if (!raw) {
              defaultReconciler[key] = value;
            } else {
              if (isArray(raw)) {
                defaultReconciler[key] = raw.push(value);
              } else {
                defaultReconciler[key] = [raw, value];
              }
            }
          });
        }

        function unsupport(api) {
          return function() {
            console.warn(
              '\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(api)
            );
          };
        }

        function setUniqueKeyToRoute(key, obj) {
          var routerParamsPrivateKey = '__key_';
          var useDataCacheApis = [
            'navigateTo',
            'redirectTo',
            'reLaunch',
            'switchTab'
          ];

          if (useDataCacheApis.indexOf(key) > -1) {
            var url = (obj.url = obj.url || '');
            var hasMark = url.indexOf('?') > -1;
            var cacheKey = getUniqueKey();
            obj.url +=
              (hasMark ? '&' : '?') +
              ''.concat(routerParamsPrivateKey, '=').concat(cacheKey);
          }
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
          return function() {
            if (typeof taro.getSystemInfoSync !== 'function') {
              console.error('不支持 API canIUseWebp');
              return false;
            }

            var _taro$getSystemInfoSy = taro.getSystemInfoSync(),
              platform = _taro$getSystemInfoSy.platform;

            var platformLower = platform.toLowerCase();

            if (platformLower === 'android' || platformLower === 'devtools') {
              return true;
            }

            return false;
          };
        }

        function getNormalRequest(global) {
          return function request(options) {
            options = options || {};

            if (typeof options === 'string') {
              options = {
                url: options
              };
            }

            var originSuccess = options.success;
            var originFail = options.fail;
            var originComplete = options.complete;
            var requestTask;
            var p = new Promise(function(resolve, reject) {
              options.success = function(res) {
                originSuccess && originSuccess(res);
                resolve(res);
              };

              options.fail = function(res) {
                originFail && originFail(res);
                reject(res);
              };

              options.complete = function(res) {
                originComplete && originComplete(res);
              };

              requestTask = global.request(options);
            });

            p.abort = function(cb) {
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
          var config =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          var patchNeedPromiseApis = config.needPromiseApis || [];

          var _needPromiseApis = new Set(
            [].concat(
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */ 'a'
                ]
              )(patchNeedPromiseApis),
              Object(
                _Users_yangxiaolu3_Documents_JD_workspace_nutui_src_sites_mobile_taro_vue_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[
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
          var apis = Object.keys(global).filter(function(api) {
            return preserved.indexOf(api) === -1;
          });
          apis.forEach(function(key) {
            if (_needPromiseApis.has(key)) {
              var originKey = key;

              taro[originKey] = function() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {};

                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }

                var key = originKey; // 第一个参数 options 为字符串，单独处理

                if (typeof options === 'string') {
                  if (args.length) {
                    return global[key].apply(global, [options].concat(args));
                  }

                  return global[key](options);
                } // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段

                if (config.transformMeta) {
                  var transformResult = config.transformMeta(key, options);
                  key = transformResult.key;
                  options = transformResult.options; // 新 key 可能不存在

                  if (!global.hasOwnProperty(key)) {
                    return unsupport(key)();
                  }
                }

                var task = null;
                var obj = Object.assign({}, options); // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。

                setUniqueKeyToRoute(key, options); // Promise 化

                var p = new Promise(function(resolve, reject) {
                  obj.success = function(res) {
                    var _a, _b;

                    (_a = config.modifyAsyncResult) === null || _a === void 0
                      ? void 0
                      : _a.call(config, key, res);
                    (_b = options.success) === null || _b === void 0
                      ? void 0
                      : _b.call(options, res);

                    if (key === 'connectSocket') {
                      resolve(
                        Promise.resolve().then(function() {
                          return Object.assign(task, res);
                        })
                      );
                    } else {
                      resolve(res);
                    }
                  };

                  obj.fail = function(res) {
                    var _a;

                    (_a = options.fail) === null || _a === void 0
                      ? void 0
                      : _a.call(options, res);
                    reject(res);
                  };

                  obj.complete = function(res) {
                    var _a;

                    (_a = options.complete) === null || _a === void 0
                      ? void 0
                      : _a.call(options, res);
                  };

                  if (args.length) {
                    task = global[key].apply(global, [obj].concat(args));
                  } else {
                    task = global[key](obj);
                  }
                }); // 给 promise 对象挂载属性

                if (key === 'uploadFile' || key === 'downloadFile') {
                  p.progress = function(cb) {
                    task === null || task === void 0
                      ? void 0
                      : task.onProgressUpdate(cb);
                    return p;
                  };

                  p.abort = function(cb) {
                    cb === null || cb === void 0 ? void 0 : cb();
                    task === null || task === void 0 ? void 0 : task.abort();
                    return p;
                  };
                }

                return p;
              };
            } else {
              // API 不存在
              if (!global.hasOwnProperty(key)) {
                taro[key] = unsupport(key);
                return;
              }

              if (typeof global[key] === 'function') {
                taro[key] = function() {
                  for (
                    var _len2 = arguments.length,
                      args = new Array(_len2),
                      _key2 = 0;
                    _key2 < _len2;
                    _key2++
                  ) {
                    args[_key2] = arguments[_key2];
                  }

                  if (config.handleSyncApis) {
                    return config.handleSyncApis(key, global, args);
                  } else {
                    return global[key].apply(global, args);
                  }
                };
              } else {
                taro[key] = global[key];
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
          var apis =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          taro.canIUseWebp = getCanIUseWebp(taro);
          taro.getCurrentPages =
            getCurrentPages || unsupport('getCurrentPages');
          taro.getApp = getApp || unsupport('getApp');
          taro.env = global.env || {};

          try {
            taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
          } catch (error) {
            taro.requirePlugin = unsupport('requirePlugin');
          } // request & interceptors

          var request = apis.request ? apis.request : getNormalRequest(global);

          function taroInterceptor(chain) {
            return request(chain.requestParams);
          }

          var link = new taro.Link(taroInterceptor);
          taro.request = link.request.bind(link);
          taro.addInterceptor = link.addInterceptor.bind(link);
          taro.cleanInterceptors = link.cleanInterceptors.bind(link);
          taro.miniGlobal = taro.options.miniGlobal = global;
        }

        /***/
      },

    /***/ './node_modules/@tarojs/taro/index.js':
      /*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
      /*! no static exports found */
      /*! exports used: default, initPxTransform */
      /***/ function(module, exports, __webpack_require__) {
        var _require = __webpack_require__(
            /*! @tarojs/runtime */ './node_modules/@tarojs/runtime/dist/runtime.esm.js'
          ),
          container = _require.container,
          SERVICE_IDENTIFIER = _require.SERVICE_IDENTIFIER;

        var taro = __webpack_require__(
          /*! @tarojs/api */ './node_modules/@tarojs/api/dist/index.esm.js'
        ).default;

        var hooks = container.get(SERVICE_IDENTIFIER.Hooks);

        if (typeof hooks.initNativeApi === 'function') {
          hooks.initNativeApi(taro);
        }

        module.exports = taro;
        module.exports.default = module.exports;

        /***/
      }
  }
]);
//# sourceMappingURL=taro.js.map
