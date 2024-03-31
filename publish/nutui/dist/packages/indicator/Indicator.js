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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, Fragment, renderList, toDisplayString, unref } from "vue";
import { p as padZero } from "../util-DnfK0Qan.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = {
  key: 0,
  class: "nut-indicator--number"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-indicator--dot"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutIndicator"
}), {
  __name: "indicator",
  props: {
    size: { default: 3 },
    current: { default: 1 },
    block: { type: Boolean, default: false },
    align: { default: "center" },
    fillZero: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      const prefixCls = "nut-indicator";
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: props.block,
        [`${prefixCls}--align__${props.align}`]: props.block && props.align
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.size, (item) => {
          return openBlock(), createElementBlock(Fragment, { key: item }, [
            item === _ctx.current ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(_ctx.fillZero && unref(padZero)(item) || item), 1)) : (openBlock(), createElementBlock("view", _hoisted_2))
          ], 64);
        }), 128))
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Indicator,
  _sfc_main as default
};
