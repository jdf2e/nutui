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
import { defineComponent, provide, readonly, computed, watch, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { R as RADIO_KEY } from "../types-BODurTjN.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutRadioGroup"
}), {
  __name: "radio-group.taro",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
    direction: { default: "vertical" },
    textPosition: { default: "right" }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const updateValue = (value) => {
      emit("update:modelValue", value);
    };
    provide(RADIO_KEY, {
      label: readonly(computed(() => props.modelValue)),
      position: readonly(computed(() => props.textPosition)),
      updateValue
    });
    watch(
      () => props.modelValue,
      (value) => {
        emit("change", value);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(["nut-radio-group", `nut-radio-group--${_ctx.direction}`])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as RadioGroup,
  _sfc_main as default
};
