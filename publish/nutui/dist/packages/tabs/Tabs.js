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
import { ref, onMounted, reactive, provide, computed, watch, onActivated, nextTick, resolveComponent, openBlock, createElementBlock, normalizeClass, createBlock, withCtx, createElementVNode, normalizeStyle, renderSlot, Fragment, renderList, createCommentVNode, createVNode, toDisplayString } from "vue";
import NutSticky from "../sticky/Sticky.js";
import { JoySmile } from "@nutui/icons-vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { T as TypeOfFun } from "../util-DnfK0Qan.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { r as requestAniFrame } from "../raf-c01wDYCo.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { T as TABS_KEY } from "../types-BXlnzugj.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const useTabContentTouch = (props, tabMethods, taro, useTaroRect) => {
  const tabsContentRef = ref();
  const tabsContentRefRect = ref({ width: 0, height: 0 });
  const initTaroWidth = () => __async(void 0, null, function* () {
    var _a, _b;
    if (taro && taro.getEnv() !== taro.ENV_TYPE.WEB) {
      useTaroRect(tabsContentRef).then(
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
  components: { NutSticky, JoySmile },
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
    const container = ref(null);
    let stickyFixed;
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
    const getScrollY = computed(() => {
      return props.titleScroll && props.direction === "vertical";
    });
    const navRef = ref();
    const titleRef = ref([]);
    const scrollIntoView = (immediate) => {
      const nav = navRef.value;
      const _titles = titleRef.value;
      if (!nav || !_titles || !_titles[currentIndex.value]) {
        return;
      }
      const title = _titles[currentIndex.value];
      let to = 0;
      if (props.direction === "vertical") {
        const runTop = title.offsetTop - nav.offsetTop + 10;
        to = runTop - (nav.offsetHeight - title.offsetHeight) / 2;
      } else {
        to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      }
      scrollDirection(nav, to, immediate ? 0 : 0.3, props.direction);
    };
    const scrollDirection = (nav, to, duration, direction) => {
      let count = 0;
      const from = direction === "horizontal" ? nav.scrollLeft : nav.scrollTop;
      const frames = duration === 0 ? 1 : Math.round(duration * 1e3 / 16);
      function animate() {
        if (direction === "horizontal") {
          nav.scrollLeft += (to - from) / frames;
        } else {
          nav.scrollTop += (to - from) / frames;
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
      nextTick(() => {
        scrollIntoView();
      });
    };
    const onStickyScroll = (params) => {
      stickyFixed = params.fixed;
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
    const getScrollTopRoot = () => {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    watch(
      () => props.modelValue,
      (value) => {
        findTabsIndex(value);
        scrollIntoView();
        if (stickyFixed) {
          let top = useRect(container.value).top + getScrollTopRoot();
          let value2 = Math.ceil(top - props.top);
          window.scrollTo({
            top: value2,
            behavior: "smooth"
          });
        }
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
        const nextDisabled = titles.value[currentIndex.value].disabled;
        if (tabMethods.isEnd() && nextDisabled) {
          tabMethods.prev();
          return;
        }
        if (nextDisabled && currentIndex.value < titles.value.length - 1) {
          tabMethods.next();
          return;
        }
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      prev: () => {
        currentIndex.value -= 1;
        const prevDisabled = titles.value[currentIndex.value].disabled;
        if (tabMethods.isBegin() && prevDisabled) {
          tabMethods.next();
          return;
        }
        if (prevDisabled && currentIndex.value > 0) {
          tabMethods.prev();
          return;
        }
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
    const { tabsContentRef, touchState, touchMethods } = useTabContentTouch(props, tabMethods);
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
      navRef,
      tabsContentRef,
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      getScrollY,
      onStickyScroll
    }, tabMethods), touchMethods);
  }
});
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_JoySmile = resolveComponent("JoySmile");
  const _component_nut_sticky = resolveComponent("nut-sticky");
  return openBlock(), createElementBlock("view", {
    ref: "container",
    class: normalizeClass(["nut-tabs", [_ctx.direction]])
  }, [
    _ctx.sticky ? (openBlock(), createBlock(_component_nut_sticky, {
      key: 0,
      top: _ctx.top,
      container: _ctx.container,
      onScroll: _ctx.onStickyScroll
    }, {
      default: withCtx(() => [
        createElementVNode("view", {
          ref: "navRef",
          class: normalizeClass(["nut-tabs__titles", {
            "nut-tabs__titles-left": _ctx.align === "left",
            [_ctx.type]: _ctx.type,
            scrollable: _ctx.titleScroll,
            [_ctx.size]: _ctx.size
          }]),
          style: normalizeStyle(_ctx.tabsNavStyle)
        }, [
          _ctx.$slots.titles ? renderSlot(_ctx.$slots, "titles", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.titles, (item, index) => {
            return openBlock(), createElementBlock("view", {
              key: item.paneKey,
              class: normalizeClass(["nut-tabs__titles-item", {
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
              _ctx.type == "smile" ? (openBlock(), createElementBlock("view", {
                key: 1,
                class: "nut-tabs__titles-item__smile",
                style: normalizeStyle(_ctx.tabsActiveStyle)
              }, [
                createVNode(_component_JoySmile, { color: _ctx.color }, null, 8, ["color"])
              ], 4)) : createCommentVNode("", true),
              createElementVNode("view", {
                class: normalizeClass(["nut-tabs__titles-item__text", { ellipsis: _ctx.ellipsis }])
              }, toDisplayString(item.title), 3)
            ], 14, _hoisted_1);
          }), 128))
        ], 6)
      ]),
      _: 3
    }, 8, ["top", "container", "onScroll"])) : (openBlock(), createElementBlock("view", {
      key: 1,
      ref: "navRef",
      class: normalizeClass(["nut-tabs__titles", { "nut-tabs__titles-left": _ctx.align === "left", [_ctx.type]: _ctx.type, scrollable: _ctx.titleScroll, [_ctx.size]: _ctx.size }]),
      style: normalizeStyle(_ctx.tabsNavStyle)
    }, [
      _ctx.$slots.titles ? renderSlot(_ctx.$slots, "titles", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.titles, (item, index) => {
        return openBlock(), createElementBlock("view", {
          key: item.paneKey,
          ref_for: true,
          ref: (e) => _ctx.setTabItemRef(e, index),
          class: normalizeClass(["nut-tabs__titles-item", {
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
          _ctx.type == "smile" ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-tabs__titles-item__smile",
            style: normalizeStyle(_ctx.tabsActiveStyle)
          }, [
            createVNode(_component_JoySmile, { color: _ctx.color }, null, 8, ["color"])
          ], 4)) : createCommentVNode("", true),
          createElementVNode("view", {
            class: normalizeClass(["nut-tabs__titles-item__text", { ellipsis: _ctx.ellipsis }])
          }, toDisplayString(item.title), 3)
        ], 14, _hoisted_2);
      }), 128))
    ], 6)),
    createElementVNode("view", {
      ref: "tabsContentRef",
      class: "nut-tabs__content",
      style: normalizeStyle(_ctx.contentStyle),
      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
      onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
      onTouchcancel: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 36)
  ], 2);
}
const NutTabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Title,
  NutTabs as default
};
