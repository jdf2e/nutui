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
import { ref, reactive, onMounted, onUnmounted, onActivated, onDeactivated, watch, toRefs, nextTick, resolveComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createVNode, toDisplayString, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { j as getScrollTopRoot } from "../util-D1pvnUYu.js";
import { u as useScrollParent } from "../index-BvmDLUYP.js";
import { r as requestAniFrame } from "../raf-c01wDYCo.js";
import { Loading } from "@nutui/icons-vue";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("infinite-loading");
const cN = "NutInfiniteLoading";
const _sfc_main = create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    hasMore: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadTxt: {
      type: String,
      default: ""
    },
    loadMoreTxt: {
      type: String,
      default: ""
    },
    useCapture: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scrollChange", "loadMore", "update:modelValue"],
  components: {
    Loading
  },
  setup(props, { emit, slots }) {
    const translate = useLocale(cN);
    const scroller = ref();
    const scrollParent = useScrollParent(scroller);
    const state = reactive({
      beforeScrollTop: 0,
      isInfiniting: false,
      y: 0,
      x: 0,
      distance: 0
    });
    const calculateTopPosition = (el) => {
      return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent);
    };
    const isScrollAtBottom = () => {
      let offsetDistance = 0;
      let resScrollTop = 0;
      let direction = "down";
      if (scrollParent.value == window) {
        const windowScrollTop = getScrollTopRoot();
        if (scroller.value) {
          offsetDistance = calculateTopPosition(scroller.value) + scroller.value.offsetHeight - windowScrollTop - window.innerHeight;
        }
        resScrollTop = windowScrollTop;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = scrollParent.value;
        offsetDistance = scrollHeight - clientHeight - scrollTop;
        resScrollTop = scrollTop;
      }
      if (state.beforeScrollTop > resScrollTop) {
        direction = "up";
      } else {
        direction = "down";
      }
      state.beforeScrollTop = resScrollTop;
      emit("scrollChange", resScrollTop);
      return offsetDistance <= props.threshold && direction == "down";
    };
    const handleScroll = () => {
      requestAniFrame(() => {
        if (!isScrollAtBottom() || !props.hasMore || state.isInfiniting) {
          return false;
        } else {
          state.isInfiniting = true;
          emit("update:modelValue", true);
          nextTick(() => emit("loadMore"));
        }
      });
    };
    const scrollListener = () => {
      scrollParent.value && scrollParent.value.addEventListener("scroll", handleScroll, props.useCapture);
    };
    const removeScrollListener = () => {
      scrollParent.value && scrollParent.value.removeEventListener("scroll", handleScroll, props.useCapture);
    };
    onMounted(() => {
      scrollListener();
    });
    onUnmounted(() => {
      removeScrollListener();
    });
    const isKeepAlive = ref(false);
    onActivated(() => {
      if (isKeepAlive.value) {
        isKeepAlive.value = false;
        scrollListener();
      }
    });
    onDeactivated(() => {
      isKeepAlive.value = true;
      removeScrollListener();
    });
    watch(
      () => props.modelValue,
      (val) => {
        if (!val) {
          state.isInfiniting = false;
        }
      }
    );
    return __spreadProps(__spreadValues({
      scroller
    }, toRefs(state)), {
      translate,
      slots
    });
  }
});
const _hoisted_1 = {
  ref: "scroller",
  class: "nut-infinite-loading"
};
const _hoisted_2 = { class: "nut-infinite__container" };
const _hoisted_3 = { class: "nut-infinite__bottom" };
const _hoisted_4 = {
  key: 0,
  class: "nut-infinite__bottom-box"
};
const _hoisted_5 = { class: "nut-infinite__bottom-box__text" };
const _hoisted_6 = { class: "nut-infinite__bottom-tips" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createElementVNode("view", _hoisted_3, [
      _ctx.isInfiniting ? (openBlock(), createElementBlock("view", _hoisted_4, [
        renderSlot(_ctx.$slots, "loading", {}, () => [
          renderSlot(_ctx.$slots, "loading-icon", {}, () => [
            createVNode(_component_Loading, { class: "nut-icon-loading nut-infinite__bottom-box__img" })
          ]),
          createElementVNode("view", _hoisted_5, toDisplayString(_ctx.loadTxt || _ctx.translate("loading")), 1)
        ])
      ])) : !_ctx.hasMore ? renderSlot(_ctx.$slots, "finished", { key: 1 }, () => [
        createElementVNode("view", _hoisted_6, toDisplayString(_ctx.loadMoreTxt || _ctx.translate("loadMoreTxt")), 1)
      ]) : createCommentVNode("", true)
    ])
  ], 512);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
