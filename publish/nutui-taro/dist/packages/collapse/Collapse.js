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
import { defineComponent, ref, watch, provide, openBlock, createElementBlock, renderSlot } from "vue";
import { C as COLLAPSE_KEY } from "../types-BomhFk3T.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-collapse" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCollapse"
}), {
  __name: "collapse.taro",
  props: {
    modelValue: { default: "" },
    accordion: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const innerValue = ref(props.modelValue || (props.accordion ? "" : []));
    watch(
      () => props.modelValue,
      (val) => {
        innerValue.value = val;
      }
    );
    const changeVal = (val, name, status = true) => {
      innerValue.value = val;
      emit("update:modelValue", val);
      emit("change", val, name, status);
    };
    const updateVal = (name) => {
      if (props.accordion) {
        if (innerValue.value === name) {
          changeVal("", name, false);
        } else {
          changeVal(name, name, true);
        }
      } else {
        if (Array.isArray(innerValue.value)) {
          if (innerValue.value.includes(name)) {
            const newValue = innerValue.value.filter((v) => v !== name);
            changeVal(newValue, name, false);
          } else {
            const newValue = innerValue.value.concat([name]);
            changeVal(newValue, name, true);
          }
        } else {
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
        }
      }
    };
    const isExpanded = (name) => {
      if (props.accordion) {
        return innerValue.value === name;
      } else if (Array.isArray(innerValue.value)) {
        return innerValue.value.includes(name);
      }
      return false;
    };
    provide(COLLAPSE_KEY, {
      updateVal,
      isExpanded
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Collapse,
  _sfc_main as default
};
