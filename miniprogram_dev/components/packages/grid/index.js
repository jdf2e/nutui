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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useParent = useParent;
exports.useChildren = useChildren;
function useParent(name, onEffect) {
    var _relations;

    var path = '../' + name + '/index';
    return {
        relations: (_relations = {}, _relations[path] = {
            type: 'ancestor',
            linked: function linked() {
                onEffect && onEffect.call(this);
            },
            linkChanged: function linkChanged() {
                onEffect && onEffect.call(this);
            },
            unlinked: function unlinked() {
                onEffect && onEffect.call(this);
            }
        }, _relations),
        mixin: Behavior({
            created: function created() {
                var _this = this;

                Object.defineProperty(this, 'parent', {
                    get: function get() {
                        return _this.getRelationNodes(path)[0];
                    }
                });
                Object.defineProperty(this, 'index', {
                    // @ts-ignore
                    get: function get() {
                        var _a, _b;return (_b = (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.indexOf(_this);
                    }
                });
            }
        })
    };
}
function useChildren(name, onEffect) {
    var _relations2;

    var path = '../' + name + '/index';
    return {
        relations: (_relations2 = {}, _relations2[path] = {
            type: 'descendant',
            linked: function linked(target) {
                onEffect && onEffect.call(this, target);
            },
            linkChanged: function linkChanged(target) {
                onEffect && onEffect.call(this, target);
            },
            unlinked: function unlinked(target) {
                onEffect && onEffect.call(this, target);
            }
        }, _relations2),
        mixin: Behavior({
            created: function created() {
                var _this2 = this;

                Object.defineProperty(this, 'children', {
                    get: function get() {
                        return _this2.getRelationNodes(path) || [];
                    }
                });
            }
        })
    };
}

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component = __webpack_require__(0);

var _relation = __webpack_require__(2);

(0, _component.NutComponent)({
    relation: (0, _relation.useChildren)('grid-item'),
    classes: ['grid-demo'],
    props: {
        // 列数
        columnNum: {
            type: Number,
            value: 4
        },
        // 图标大小
        iconSize: {
            type: Number,
            value: 28
        },
        // 图标颜色
        iconColor: String,
        // 是否显示边框
        border: {
            type: Boolean,
            value: true
        },
        // 格子之间间隔距离
        gutter: {
            type: Number,
            value: 0
        },
        // 是否内容居中
        center: {
            type: Boolean,
            value: true
        },
        // 是否固定正方形
        square: {
            type: Boolean,
            value: false
        },
        // 内容与文字翻转
        reverse: {
            type: Boolean,
            value: false
        },
        // 内容排列方向
        direction: String,
        // 是否开启点击反馈
        clickable: {
            type: Boolean,
            value: false
        }
    },
    observers: {
        '**': function _(val) {
            var that = this;
            setTimeout(function () {
                that.children.forEach(function (child) {
                    child.updateParent();
                });
            }, 0);
        }
    },
    methods: {}
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map