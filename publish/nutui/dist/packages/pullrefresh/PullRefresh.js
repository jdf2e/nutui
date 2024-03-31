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
import { ref, reactive, computed, watch, toRefs, nextTick, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, createBlock, createCommentVNode, toDisplayString, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { j as getScrollTopRoot } from "../util-DnfK0Qan.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { u as useScrollParent } from "../index-BvmDLUYP.js";
import { Loading } from "@nutui/icons-vue";
import { u as useLocale } from "../index-CFigyH92.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("pull-refresh");
const cN = "NutPullRefresh";
const _sfc_main = create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    pullingTxt: {
      type: String,
      default: ""
    },
    loosingTxt: {
      type: String,
      default: ""
    },
    loadingTxt: {
      type: String,
      default: ""
    },
    completeTxt: {
      type: String,
      default: ""
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },
    pullDistance: {
      type: [String, Number],
      default: 50
    },
    duration: {
      type: [String, Number],
      default: 0.3
    },
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "refresh", "update:modelValue"],
  components: { Loading },
  setup(props, { emit, slots }) {
    const translate = useLocale(cN);
    const touch = useTouch();
    const scroller = ref();
    const scrollParent = useScrollParent(scroller);
    const state = reactive({
      isPullRefresh: false,
      distance: 0,
      status: "normal"
    });
    const getPullStatus = computed(() => {
      switch (state.status) {
        case "pulling":
          return !slots.pulling ? props.pullingTxt || translate("pulling") : "";
        case "loosing":
          return !slots.loosing ? props.loosingTxt || translate("loosing") : "";
        case "loading":
          return !slots.loading ? props.loadingTxt || translate("loading") : "";
        case "complete":
          return !slots.complete ? props.completeTxt || translate("complete") : "";
      }
      return "";
    });
    const getStyle = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ""
      };
    });
    const getHeightStyle = computed(() => {
      const styles = {};
      if (props.headHeight != 50)
        styles.height = pxCheck(props.headHeight);
      return styles;
    });
    const timing = (distance) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      let moveDistance = distance;
      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          moveDistance = (distance + pullDistance) / 2;
        } else {
          moveDistance = pullDistance + distance / 4;
        }
      }
      return Math.round(moveDistance);
    };
    const setPullStatus = (distance, isLoading, isComplete) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;
      if (isLoading) {
        state.status = "loading";
      } else if (isComplete) {
        state.status = "complete";
      } else if (distance === 0) {
        state.status = "normal";
      } else if (distance < pullDistance) {
        state.status = "pulling";
      } else {
        state.status = "loosing";
      }
      emit("change", { status: state.status, distance });
    };
    const isCanTouch = () => state.status !== "loading" && state.status !== "complete";
    const isScrollTop = () => {
      if (scrollParent.value == window) {
        return getScrollTopRoot() == 0;
      } else {
        return scrollParent.value && scrollParent.value.scrollTop == 0;
      }
    };
    const touchStart = (event) => {
      if (isCanTouch()) {
        if (isScrollTop()) {
          touch.start(event);
          state.isPullRefresh = true;
        } else {
          state.distance = 0;
          state.isPullRefresh = false;
        }
      }
    };
    const touchMove = (event) => {
      if (isCanTouch()) {
        touch.move(event);
        const { deltaY } = touch;
        if (touch.isVertical() && deltaY.value > 0 && state.isPullRefresh) {
          event.preventDefault();
          setPullStatus(timing(deltaY.value));
        }
      }
    };
    const touchEnd = () => {
      if (state.isPullRefresh && isCanTouch() && touch.deltaY.value) {
        if (state.status === "loosing") {
          setPullStatus(+props.headHeight, true);
          emit("update:modelValue", true);
          nextTick(() => emit("refresh"));
        } else {
          setPullStatus(0);
        }
      }
      setTimeout(() => {
        touch.reset();
      }, 0);
    };
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          setPullStatus(+props.headHeight, true);
        } else {
          if (props.completeDuration === 0)
            setPullStatus(0);
          setPullStatus(+props.headHeight, false, true);
          setTimeout(() => {
            setPullStatus(0);
          }, props.completeDuration);
        }
      }
    );
    return __spreadProps(__spreadValues({
      scroller
    }, toRefs(state)), {
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      translate,
      slots,
      getHeightStyle,
      getPullStatus
    });
  }
});
const _hoisted_1 = { class: "nut-pull-refresh-container-topbox-text" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("div", {
    ref: "scroller",
    class: "nut-pull-refresh",
    onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.touchStart && _ctx.touchStart(...args)),
    onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.touchMove && _ctx.touchMove(...args)),
    onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.touchEnd && _ctx.touchEnd(...args))
  }, [
    createElementVNode("div", {
      class: "nut-pull-refresh-container",
      style: normalizeStyle(_ctx.getStyle)
    }, [
      createElementVNode("div", {
        class: "nut-pull-refresh-container-topbox",
        style: normalizeStyle(_ctx.getHeightStyle)
      }, [
        _ctx.status == "loading" && !_ctx.slots.loading ? (openBlock(), createBlock(_component_Loading, {
          key: 0,
          class: "nut-icon-loading nut-pull-refresh-container-topbox-icon"
        })) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_1, toDisplayString(_ctx.getPullStatus), 1),
        _ctx.status == "pulling" ? renderSlot(_ctx.$slots, "pulling", { key: 1 }) : createCommentVNode("", true),
        _ctx.status == "loosing" ? renderSlot(_ctx.$slots, "loosing", { key: 2 }) : createCommentVNode("", true),
        _ctx.status == "loading" ? renderSlot(_ctx.$slots, "loading", { key: 3 }) : createCommentVNode("", true),
        _ctx.status == "complete" ? renderSlot(_ctx.$slots, "complete", { key: 4 }) : createCommentVNode("", true)
      ], 4),
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 544);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
