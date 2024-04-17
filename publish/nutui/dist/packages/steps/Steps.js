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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
import { S as STEPS_KEY } from "../types-1HzUV14W.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutSteps"
}), {
  __name: "steps",
  props: {
    direction: { default: "horizontal" },
    current: { default: "0" },
    progressDot: { type: Boolean, default: false }
  },
  emits: ["clickStep"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const classes = computed(() => {
      const prefixCls = "nut-steps";
      return {
        [prefixCls]: true,
        [`${prefixCls}-${props.direction}`]: true,
        [`${prefixCls}-dot`]: !!props.progressDot
      };
    });
    const { linkChildren } = useChildren(STEPS_KEY);
    const onEmit = (index) => {
      emit("clickStep", index);
    };
    linkChildren({ props, onEmit });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Steps,
  _sfc_main as default
};
