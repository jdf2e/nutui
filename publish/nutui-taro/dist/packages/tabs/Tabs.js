var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import Taro from "@tarojs/taro";
import { ref, onMounted, reactive, provide, computed, watch, onActivated, nextTick, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, normalizeStyle, withCtx, createElementVNode, renderSlot, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { JoySmile } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-DQf3CENX.js";
import { T as TypeOfFun } from "../util-7oDGftbO.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { r as requestAniFrame } from "../raf-CzJhCkQo.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { T as TABS_KEY } from "../types-BXlnzugj.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const useTabContentTouch = (props, tabMethods, taro, useTaroRect2) => {
  const tabsContentRef = ref();
  const tabsContentRefRect = ref({ width: 0, height: 0 });
  const initTaroWidth = () => __async(void 0, null, function* () {
    var _a, _b;
    if (taro && taro.getEnv() !== taro.ENV_TYPE.WEB) {
      useTaroRect2(tabsContentRef).then(
        (rect) => {
          tabsContentRefRect.value.width = rect.width || 0;
          tabsContentRefRect.value.height = rect.height || 0;
        },
        () => {
        }
      );
    } else {
      tabsContentRefRect.value.width = ((_a = tabsContentRef.value) == null ? void 0 : _a.clientWidth) || 0;
      tabsContentRefRect.value.height = ((_b = tabsContentRef.value) == null ? void 0 : _b.clientHeight) || 0;
    }
  });
  onMounted(() => {
    setTimeout(() => {
      initTaroWidth();
    }, 100);
  });
  const touchState = reactive({
    offset: 0,
    moving: false
  });
  const touch = useTouch();
  let position = "";
  const setoffset = (deltaX, deltaY) => {
    var _a;
    let offset = deltaX;
    if (props.direction == "horizontal") {
      position = deltaX > 0 ? "right" : "left";
      offset = Math.abs(offset) / tabsContentRefRect.value.width * 100;
    } else {
      position = deltaY > 0 ? "bottom" : "top";
      offset = deltaY;
      offset = Math.abs(offset) / ((_a = tabsContentRefRect.value) == null ? void 0 : _a.height) * 100;
    }
    if (offset > 85) {
      offset = 85;
    }
    switch (position) {
      case "left":
      case "top":
        if (tabMethods.isEnd()) {
          offset = 0;
          touchState.moving = false;
        }
        break;
      case "right":
      case "bottom":
        offset = -offset;
        if (tabMethods.isBegin()) {
          offset = 0;
          touchState.moving = false;
        }
        break;
    }
    touchState.offset = offset;
  };
  const touchMethods = {
    onTouchStart(event) {
      if (!props.swipeable)
        return;
      touch.start(event);
    },
    onTouchMove(event) {
      if (!props.swipeable)
        return;
      touch.move(event);
      touchState.moving = true;
      setoffset(touch.deltaX.value, touch.deltaY.value);
      if (props.direction == "horizontal" && touch.isHorizontal()) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (props.direction == "vertical" && touch.isVertical()) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onTouchEnd() {
      if (touchState.moving) {
        touchState.moving = false;
        switch (position) {
          case "left":
          case "top":
            if (touchState.offset > 35) {
              tabMethods.next();
            }
            break;
          case "right":
          case "bottom":
            if (touchState.offset < -35) {
              tabMethods.prev();
            }
            break;
        }
      }
    }
  };
  return { touchMethods, touchState, tabsContentRef };
};
class Title {
  constructor() {
    __publicField(this, "title", "");
    __publicField(this, "titleSlot");
    __publicField(this, "paneKey", "");
    __publicField(this, "disabled", false);
  }
}
const { create } = createComponent("tabs");
const _sfc_main = create({
  components: {
    JoySmile,
    NutScrollView: _sfc_main$1
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "line"
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    swipeable: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ""
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "center"
    }
  },
  emits: ["update:modelValue", "click", "change"],
  setup(props, { emit, slots }) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const container = ref(null);
    provide(TABS_KEY, {
      activeKey: computed(() => props.modelValue || "0"),
      autoHeight: computed(() => props.autoHeight),
      animatedTime: computed(() => props.animatedTime)
    });
    const titles = ref([]);
    const renderTitles = (vnodes) => {
      vnodes.forEach((vnode, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        let type = vnode.type;
        type = type.name || type;
        if (type == "NutTabPane") {
          let title = new Title();
          if (((_a = vnode.props) == null ? void 0 : _a.title) || ((_b = vnode.props) == null ? void 0 : _b["pane-key"]) || ((_c = vnode.props) == null ? void 0 : _c["paneKey"])) {
            let paneKeyType = TypeOfFun((_d = vnode.props) == null ? void 0 : _d["pane-key"]);
            let paneIndex = paneKeyType == "number" || paneKeyType == "string" ? String((_e = vnode.props) == null ? void 0 : _e["pane-key"]) : null;
            let camelPaneKeyType = TypeOfFun((_f = vnode.props) == null ? void 0 : _f["paneKey"]);
            let camelPaneIndex = camelPaneKeyType == "number" || camelPaneKeyType == "string" ? String((_g = vnode.props) == null ? void 0 : _g["paneKey"]) : null;
            title.title = (_h = vnode.props) == null ? void 0 : _h.title;
            title.paneKey = paneIndex || camelPaneIndex || String(index);
            title.disabled = (_i = vnode.props) == null ? void 0 : _i.disabled;
          }
          titles.value.push(title);
        } else {
          if (vnode.children == " ") {
            return;
          }
          renderTitles(vnode.children);
        }
      });
    };
    const currentIndex = ref(props.modelValue || 0);
    const findTabsIndex = (value) => {
      let index = titles.value.findIndex((item) => item.paneKey == value);
      if (titles.value.length == 0)
        ;
      else if (index == -1)
        ;
      else {
        currentIndex.value = index;
      }
    };
    const getScrollX = computed(() => {
      return props.titleScroll && props.direction === "horizontal";
    });
    const getScrollY = computed(() => {
      return props.titleScroll && props.direction === "vertical";
    });
    const titleRef = ref([]);
    const scrollLeft = ref(0);
    const scrollTop = ref(0);
    const scrollWithAnimation = ref(false);
    const getRect = (selector) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery().select(selector).boundingClientRect().exec((rect = []) => {
          resolve(rect[0]);
        });
      });
    };
    const getAllRect = (selector) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery().selectAll(selector).boundingClientRect().exec((rect = []) => resolve(rect[0]));
      });
    };
    const navRectRef = ref();
    const titleRectRef = ref([]);
    const canShowLabel = ref(false);
    const scrollIntoView = () => {
      requestAniFrame(() => {
        Promise.all([
          getRect(`#nut-tabs__titles_${refRandomId}`),
          getAllRect(`#nut-tabs__titles_${refRandomId} .nut-tabs__titles-item`)
        ]).then(([navRect, titleRects]) => {
          var _a, _b, _c, _d;
          navRectRef.value = navRect;
          titleRectRef.value = titleRects;
          if (navRectRef.value) {
            if (props.direction === "vertical") {
              const titlesTotalHeight = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height), 0);
              if (titlesTotalHeight > ((_a = navRectRef.value) == null ? void 0 : _a.height)) {
                canShowLabel.value = true;
              } else {
                canShowLabel.value = false;
              }
            } else {
              const titlesTotalWidth = titleRects.reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width), 0);
              if (titlesTotalWidth > ((_b = navRectRef.value) == null ? void 0 : _b.width)) {
                canShowLabel.value = true;
              } else {
                canShowLabel.value = false;
              }
            }
          }
          const titleRect = titleRectRef.value[currentIndex.value];
          let to = 0;
          if (props.direction === "vertical") {
            const top = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.height), 0);
            to = top - (((_c = navRectRef.value) == null ? void 0 : _c.height) - (titleRect == null ? void 0 : titleRect.height)) / 2;
          } else {
            const left = titleRects.slice(0, currentIndex.value).reduce((prev, curr) => prev + (curr == null ? void 0 : curr.width), 0);
            to = left - (((_d = navRectRef.value) == null ? void 0 : _d.width) - (titleRect == null ? void 0 : titleRect.width)) / 2;
          }
          nextTick(() => {
            scrollWithAnimation.value = true;
          });
          scrollDirection(to, props.direction);
        });
      });
    };
    const scrollDirection = (to, direction) => {
      let count = 0;
      const from = direction === "horizontal" ? scrollLeft.value : scrollTop.value;
      const frames = 1;
      function animate() {
        if (direction === "horizontal") {
          scrollLeft.value += (to - from) / frames;
        } else {
          scrollTop.value += (to - from) / frames;
        }
        if (++count < frames) {
          requestAniFrame(animate);
        }
      }
      animate();
    };
    const init = (vnodes = ((_a) => (_a = slots.default) == null ? void 0 : _a.call(slots))()) => {
      titles.value = [];
      vnodes = vnodes == null ? void 0 : vnodes.filter((item) => typeof item.children !== "string");
      if (vnodes && vnodes.length) {
        renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
      setTimeout(() => {
        scrollIntoView();
      }, 500);
    };
    watch(
      () => {
        var _a;
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      },
      (vnodes) => {
        init(vnodes);
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        findTabsIndex(value);
        scrollIntoView();
      }
    );
    onMounted(init);
    onActivated(init);
    const tabMethods = {
      isBegin: () => {
        return currentIndex.value == 0;
      },
      isEnd: () => {
        return currentIndex.value == titles.value.length - 1;
      },
      next: () => {
        currentIndex.value += 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      prev: () => {
        currentIndex.value -= 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      updateValue: (item) => {
        emit("update:modelValue", item.paneKey);
        emit("change", item);
      },
      tabChange: (item, index) => {
        emit("click", item);
        if (item.disabled || currentIndex.value == index) {
          return;
        }
        currentIndex.value = index;
        tabMethods.updateValue(item);
      },
      setTabItemRef: (el, index) => {
        titleRef.value[index] = el;
      }
    };
    const { tabsContentRef, touchState, touchMethods } = useTabContentTouch(props, tabMethods, Taro, useTaroRect);
    const contentStyle = computed(() => {
      let offsetPercent = currentIndex.value * 100;
      if (touchState.moving) {
        offsetPercent += touchState.offset;
      }
      let style = {
        transform: props.direction == "horizontal" ? `translate3d(-${offsetPercent}%, 0, 0)` : `translate3d( 0,-${offsetPercent}%, 0)`,
        transitionDuration: touchState.moving ? void 0 : `${props.animatedTime}ms`
      };
      if (props.animatedTime == 0) {
        style = {};
      }
      return style;
    });
    const tabsNavStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const tabsActiveStyle = computed(() => {
      return {
        color: props.type == "smile" ? props.color : "",
        background: props.type == "line" ? props.color : ""
      };
    });
    const titleStyle = computed(() => {
      if (!props.titleGutter)
        return {};
      const px = pxCheck(props.titleGutter);
      if (props.direction === "vertical") {
        return { paddingTop: px, paddingBottom: px };
      }
      return { paddingLeft: px, paddingRight: px };
    });
    return __spreadValues(__spreadValues({
      titles,
      tabsContentRef,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      scrollLeft,
      scrollTop,
      getScrollX,
      getScrollY,
      scrollWithAnimation,
      canShowLabel,
      refRandomId
    }, tabMethods), touchMethods);
  }
});
const _hoisted_1 = ["onClick"];
const _hoisted_2 = {
  key: 0,
  class: "nut-tabs__titles-placeholder"
};
const _hoisted_3 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JoySmile = resolveComponent("JoySmile");
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  return openBlock(), createElementBlock("view", {
    ref: "container",
    class: normalizeClass(["nut-tabs", [_ctx.direction]])
  }, [
    createVNode(_component_nut_scroll_view, {
      id: `nut-tabs__titles_${_ctx.refRandomId}`,
      "scroll-x": _ctx.getScrollX,
      "scroll-y": _ctx.getScrollY,
      "scroll-with-animation": _ctx.scrollWithAnimation,
      "scroll-left": _ctx.scrollLeft,
      "scroll-top": _ctx.scrollTop,
      "enable-flex": true,
      class: normalizeClass(["nut-tabs__titles", { [_ctx.type]: _ctx.type, scrollable: _ctx.titleScroll, [_ctx.size]: _ctx.size }]),
      style: normalizeStyle(_ctx.tabsNavStyle)
    }, {
      default: withCtx(() => [
        createElementVNode("view", {
          class: normalizeClass(["nut-tabs__list", { "nut-tabs__titles-left": _ctx.align === "left" }])
        }, [
          _ctx.$slots.titles ? renderSlot(_ctx.$slots, "titles", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.titles, (item, index) => {
              return openBlock(), createElementBlock("view", {
                key: item.paneKey,
                class: normalizeClass(["nut-tabs__titles-item taro", {
                  "nut-tabs__titles-item-left": _ctx.align === "left",
                  active: item.paneKey == _ctx.modelValue,
                  disabled: item.disabled
                }]),
                style: normalizeStyle(_ctx.titleStyle),
                onClick: ($event) => _ctx.tabChange(item, index)
              }, [
                _ctx.type == "line" ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "nut-tabs__titles-item__line",
                  style: normalizeStyle(_ctx.tabsActiveStyle)
                }, null, 4)) : createCommentVNode("", true),
                createTextVNode(),
                _ctx.type == "smile" ? (openBlock(), createElementBlock("view", {
                  key: 1,
                  class: "nut-tabs__titles-item__smile",
                  style: normalizeStyle(_ctx.tabsActiveStyle)
                }, [
                  createVNode(_component_JoySmile, { color: _ctx.color }, null, 8, ["color"])
                ], 4)) : createCommentVNode("", true),
                createTextVNode(),
                createElementVNode("view", {
                  class: normalizeClass(["nut-tabs__titles-item__text", { ellipsis: _ctx.ellipsis }])
                }, toDisplayString(item.title), 3)
              ], 14, _hoisted_1);
            }), 128)),
            createTextVNode(),
            _ctx.canShowLabel && _ctx.titleScroll ? (openBlock(), createElementBlock("view", _hoisted_2)) : createCommentVNode("", true)
          ], 64))
        ], 2)
      ]),
      _: 3
    }, 8, ["id", "scroll-x", "scroll-y", "scroll-with-animation", "scroll-left", "scroll-top", "class", "style"]),
    createTextVNode(),
    createElementVNode("view", {
      id: "tabsContentRef-" + _ctx.refRandomId,
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: normalizeStyle(_ctx.contentStyle),
      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
      onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 44, _hoisted_3)
  ], 2);
}
const NutTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Title,
  NutTabs as default
};
