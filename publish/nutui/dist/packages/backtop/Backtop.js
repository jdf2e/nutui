var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, computed, onMounted, onUnmounted, onActivated, onDeactivated, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, renderSlot, createVNode, unref } from "vue";
import { r as requestAniFrame, c as cancelRaf } from "../raf-c01wDYCo.js";
import { Top } from "@nutui/icons-vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutBacktop"
}), {
  __name: "backtop",
  props: {
    bottom: { default: 20 },
    right: { default: 10 },
    elId: { default: "body" },
    distance: { default: 200 },
    zIndex: { default: 10 },
    isAnimation: { type: Boolean, default: true },
    duration: { default: 1e3 }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const backTop = ref(false);
    const scrollTop = ref(0);
    const scrollEl = ref(window);
    const startTime = ref(0);
    const keepAlive = ref(false);
    const classes = computed(() => {
      const prefixCls = "nut-backtop";
      return {
        [prefixCls]: true,
        show: backTop.value
      };
    });
    const style = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
        zIndex: props.zIndex
      };
    });
    function scrollListener() {
      if (scrollEl.value instanceof Window) {
        scrollTop.value = scrollEl.value.scrollY;
      } else {
        scrollTop.value = scrollEl.value.scrollTop;
      }
      backTop.value = scrollTop.value >= props.distance;
    }
    function scroll(y = 0) {
      if (scrollEl.value instanceof Window) {
        window.scrollTo(0, y);
      } else {
        scrollEl.value.scrollTop = y;
      }
    }
    function scrollAnimation() {
      let cid = requestAniFrame(function fn() {
        var t = props.duration - Math.max(0, startTime.value - +/* @__PURE__ */ new Date() + props.duration);
        var y = t * -scrollTop.value / props.duration + scrollTop.value;
        scroll(y);
        cid = requestAniFrame(fn);
        if (t == props.duration || y == 0) {
          cancelRaf(cid);
        }
      });
    }
    function addEventListener() {
      scrollEl.value.addEventListener("scroll", scrollListener, false);
      scrollEl.value.addEventListener("resize", scrollListener, false);
    }
    function removeEventListener() {
      scrollEl.value.removeEventListener("scroll", scrollListener, false);
      scrollEl.value.removeEventListener("resize", scrollListener, false);
    }
    function handleClick(e) {
      startTime.value = +/* @__PURE__ */ new Date();
      props.isAnimation && props.duration > 0 ? scrollAnimation() : scroll();
      emit("click", e);
    }
    function init() {
      if (props.elId && document.getElementById(props.elId)) {
        scrollEl.value = document.getElementById(props.elId);
      }
      addEventListener();
    }
    onMounted(() => {
      if (props.distance == 0) {
        backTop.value = true;
      }
      init();
    });
    onUnmounted(() => {
      removeEventListener();
    });
    onActivated(() => {
      if (keepAlive.value) {
        keepAlive.value = false;
        init();
      }
    });
    onDeactivated(() => {
      keepAlive.value = true;
      removeEventListener();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(style.value),
        onClick: withModifiers(handleClick, ["stop"])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createVNode(unref(Top), {
            width: "19px",
            height: "19px",
            class: "nut-backtop-main"
          })
        ])
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Backtop,
  _sfc_main as default
};
