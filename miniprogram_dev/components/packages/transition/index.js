module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _basic = __webpack_require__(1);

function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function NutComponent(NutOptions) {
    var options = {};
    mapKeys(NutOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        destroyed: 'detached',
        classes: 'externalClasses',
        observers: 'observers'
    });
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(_basic.basic);
    // add relations
    var relation = NutOptions.relation;

    if (relation) {
        options.relations = relation.relations;
        options.behaviors.push(relation.mixin);
    }
    // map field to form-field behavior
    if (NutOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    console.log(options);
    Component(options);
}
module.exports = { NutComponent: NutComponent };

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var basic = exports.basic = Behavior({
    methods: {
        $emit: function $emit(name, detail, options) {
            this.triggerEvent(name, detail, options);
        },
        set: function set(data) {
            this.setData(data);
            return new Promise(function (resolve) {
                return wx.nextTick(resolve);
            });
        }
    }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component = __webpack_require__(0);

var _utils = __webpack_require__(3);

(0, _component.NutComponent)({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    props: {
        show: {
            type: Boolean,
            value: false,
            observer: 'observeShow'
        },
        // 动画类型  fade fade-up
        name: {
            type: String,
            value: 'fade'
        },
        duration: {
            type: null,
            value: 300
        },
        customStyle: String
    },
    data: {
        classes: [],
        inited: false,
        display: false,
        currentDurtion: 300
    },
    ready: function ready() {
        if (this.data.show === true) {
            this.observeShow(true, false);
        }
    },

    methods: {
        // 监听 show 
        observeShow: function observeShow(value, old) {
            if (value === old) {
                return;
            }
            value ? this.enter() : this.leave();
        },

        // 进入
        enter: function enter() {
            var _this = this;

            var _data = this.data,
                name = _data.name,
                duration = _data.duration;

            var currentDuration = (0, _utils.isObj)(duration) ? duration.enter : duration;
            this.$emit('before-enter');
            (0, _utils.requestAnimationFrame)(function () {
                _this.setData({
                    inited: true,
                    display: true,
                    classes: ['nut-' + name + '-enter', 'nut-' + name + '-enter-active', 'enter-class', 'enter-active-class'],
                    currentDuration: currentDuration
                });
                (0, _utils.requestAnimationFrame)(function () {
                    _this.setData({
                        classes: ['nut-' + name + '-enter-active', 'nut-' + name + '-enter-to', 'enter-active-class', 'enter-to-class']
                    });
                });
            });
        },

        // 离开
        leave: function leave() {
            var _this2 = this;

            var _data2 = this.data,
                name = _data2.name,
                duration = _data2.duration;

            var currentDuration = (0, _utils.isObj)(duration) ? duration.leave : duration;
            (0, _utils.requestAnimationFrame)(function () {
                _this2.setData({
                    classes: ['nut-' + name + '-leave', 'nut-' + name + '-leave-active', 'leave-class', 'leave-active-class'],
                    currentDuration: currentDuration
                });
                (0, _utils.requestAnimationFrame)(function () {
                    setTimeout(function () {
                        _this2.onTransitionEnd();
                    }, currentDuration);
                    _this2.setData({
                        classes: ['nut-' + name + '-leave-to', 'nut-' + name + '-leave-active', 'leave-active-class', 'leave-to-class']
                    });
                });
            });
        },

        // 动画结束
        onTransitionEnd: function onTransitionEnd() {
            var _data3 = this.data,
                show = _data3.show,
                display = _data3.display;

            if (!show && display) {
                this.setData({
                    display: false
                });
            }
        }
    }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getSystemInfoSync = getSystemInfoSync;
exports.requestAnimationFrame = requestAnimationFrame;
exports.isObj = isObj;
function getSystemInfoSync() {
  var systemInfo = null;
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}

// 模拟 浏览器 requestAnimationFrame
function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return setTimeout(function () {
      cb();
    }, 1000 / 30);
  }

  return wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}

function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  return x !== null && (type === 'object' || type === 'function');
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map