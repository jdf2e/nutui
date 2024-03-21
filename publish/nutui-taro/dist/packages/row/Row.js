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
import { defineComponent, provide, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { L as LAYOUT_KEY } from "../types-BKDaJvHp.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const prefixCls = "nut-row";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutRow"
}), {
  __name: "row.taro",
  props: {
    type: { default: "" },
    gutter: { default: "" },
    justify: { default: "start" },
    align: { default: "flex-start" },
    flexWrap: { default: "nowrap" }
  },
  setup(__props) {
    const props = __props;
    provide(LAYOUT_KEY, props.gutter);
    const getClass = (prefix, type) => {
      return prefix ? type ? `nut-row-${prefix}-${type}` : "" : `nut-row-${type}`;
    };
    const classes = computed(() => {
      return [
        prefixCls,
        getClass("", props.type),
        getClass("justify", props.justify),
        getClass("align", props.align),
        getClass("flex", props.flexWrap)
      ];
    });
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
  _sfc_main as Row,
  _sfc_main as default
};
