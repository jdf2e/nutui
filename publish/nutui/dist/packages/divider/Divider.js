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
import { defineComponent, useSlots, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutDivider"
}), {
  __name: "divider",
  props: {
    contentPosition: { default: "center" },
    dashed: { type: Boolean, default: false },
    hairline: { type: Boolean, default: true },
    direction: { default: "horizontal" }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const classes = computed(() => {
      const prefixCls = "nut-divider";
      if (props.direction === "horizontal") {
        return {
          [prefixCls]: true,
          [`${prefixCls}-center`]: slots.default,
          [`${prefixCls}-left`]: props.contentPosition === "left",
          [`${prefixCls}-right`]: props.contentPosition === "right",
          [`${prefixCls}-dashed`]: props.dashed,
          [`${prefixCls}-hairline`]: props.hairline
        };
      } else {
        return {
          [prefixCls]: true,
          [`${prefixCls}-vertical`]: props.direction === "vertical"
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        _ctx.direction === "horizontal" ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Divider,
  _sfc_main as default
};
