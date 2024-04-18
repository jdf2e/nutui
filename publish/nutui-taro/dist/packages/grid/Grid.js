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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { G as GRID_KEY } from "../types-CJeZIBld.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutGrid"
}), {
  __name: "grid.taro",
  props: {
    columnNum: { default: 4 },
    border: { type: Boolean, default: true },
    gutter: { default: 0 },
    center: { type: Boolean, default: true },
    square: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false },
    direction: {},
    clickable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { linkChildren } = useChildren(GRID_KEY);
    linkChildren({ props });
    const rootClass = computed(() => {
      const prefixCls = "nut-grid";
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: props.border && !props.gutter
      };
    });
    const rootStyle = computed(() => {
      const style = {};
      if (props.gutter) {
        style.paddingLeft = pxCheck(props.gutter);
      }
      return style;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(rootClass.value),
        style: normalizeStyle(rootStyle.value)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Grid,
  _sfc_main as default
};
