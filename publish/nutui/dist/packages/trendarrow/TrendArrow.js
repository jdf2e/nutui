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
import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, toDisplayString, createCommentVNode, renderSlot, createVNode, unref } from "vue";
import { m as myFixed } from "../util-DnfK0Qan.js";
import { TriangleUp, TriangleDown } from "@nutui/icons-vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-trend-arrow" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTrendArrow"
}), {
  __name: "trend-arrow",
  props: {
    rate: { default: 0 },
    digits: { default: 2 },
    showSign: { type: Boolean, default: false },
    showZero: { type: Boolean, default: false },
    arrowLeft: { type: Boolean, default: false },
    syncTextColor: { type: Boolean, default: true },
    textColor: { default: "#333" },
    riseColor: { default: "#fa2c19" },
    dropColor: { default: "#64b578" }
  },
  setup(__props) {
    const props = __props;
    const isPositive = computed(() => {
      return props.rate > 0 ? true : false;
    });
    const calcRate = computed(() => {
      const absRate = Math.abs(props.rate);
      if (!props.showZero && props.rate === 0) {
        return "--";
      }
      let resultRate = `${props.showSign && props.rate !== 0 ? isPositive.value ? "+" : "-" : ""}${myFixed(
        Number(absRate),
        props.digits
      )}%`;
      return resultRate;
    });
    const calcStyle = computed(() => {
      return {
        color: props.rate === 0 ? props.textColor : props.syncTextColor ? isPositive.value ? props.riseColor : props.dropColor : props.textColor
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        !_ctx.arrowLeft ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
          style: normalizeStyle(calcStyle.value)
        }, toDisplayString(calcRate.value), 5)) : createCommentVNode("", true),
        Number(_ctx.rate) !== 0 && isPositive.value ? renderSlot(_ctx.$slots, "up-icon", { key: 1 }, () => [
          createVNode(unref(TriangleUp), { color: _ctx.riseColor }, null, 8, ["color"])
        ]) : createCommentVNode("", true),
        Number(_ctx.rate) !== 0 && !isPositive.value ? renderSlot(_ctx.$slots, "down-icon", { key: 2 }, () => [
          createVNode(unref(TriangleDown), { color: _ctx.dropColor }, null, 8, ["color"])
        ]) : createCommentVNode("", true),
        _ctx.arrowLeft ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
          style: normalizeStyle(calcStyle.value)
        }, toDisplayString(calcRate.value), 5)) : createCommentVNode("", true)
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as TrendArrow,
  _sfc_main as default
};
