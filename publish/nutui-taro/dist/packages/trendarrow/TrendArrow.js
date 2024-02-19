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
import { reactive, computed, toRefs, resolveComponent, openBlock, createElementBlock, normalizeStyle, toDisplayString, createCommentVNode, createTextVNode, renderSlot, createVNode } from "vue";
import { m as myFixed } from "../util-Bt8WDYya.js";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { TriangleUp, TriangleDown } from "@nutui/icons-vue-taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("trend-arrow");
const _sfc_main = create({
  components: { TriangleUp, TriangleDown },
  props: {
    rate: {
      type: Number,
      default: 0
    },
    digits: {
      type: Number,
      default: 2
    },
    showSign: {
      type: Boolean,
      default: false
    },
    showZero: {
      type: Boolean,
      default: false
    },
    arrowLeft: {
      type: Boolean,
      default: false
    },
    syncTextColor: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: "#333"
    },
    riseColor: {
      type: String,
      default: "#fa2c19"
    },
    dropColor: {
      type: String,
      default: "#64b578"
    }
  },
  setup(props) {
    const state = reactive({
      rateTrend: props.rate > 0 ? true : false
    });
    const calcRate = computed(() => {
      const { rate, digits, showSign, showZero } = props;
      state.rateTrend = rate > 0 ? true : false;
      const absRate = Math.abs(rate);
      if (!showZero && rate === 0) {
        return "--";
      }
      let resultRate = `${showSign && rate !== 0 ? state.rateTrend ? "+" : "-" : ""}${myFixed(
        Number(absRate),
        digits
      )}%`;
      return resultRate;
    });
    const calcStyle = computed(() => {
      const { dropColor, riseColor, syncTextColor, textColor, rate } = props;
      let style = {
        color: rate === 0 ? textColor : syncTextColor ? state.rateTrend ? riseColor : dropColor : textColor
      };
      return style;
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), { calcRate, calcStyle });
  }
});
const _hoisted_1 = { class: "nut-trend-arrow" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TriangleUp = resolveComponent("TriangleUp");
  const _component_TriangleDown = resolveComponent("TriangleDown");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    !_ctx.arrowLeft ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "nut-trend-arrow-icon-before nut-trend-arrow-rate",
      style: normalizeStyle(_ctx.calcStyle)
    }, toDisplayString(_ctx.calcRate), 5)) : createCommentVNode("", true),
    createTextVNode(),
    Number(_ctx.rate) !== 0 && _ctx.rateTrend ? renderSlot(_ctx.$slots, "up-icon", { key: 1 }, () => [
      createVNode(_component_TriangleUp, { color: _ctx.riseColor }, null, 8, ["color"])
    ]) : createCommentVNode("", true),
    createTextVNode(),
    Number(_ctx.rate) !== 0 && !_ctx.rateTrend ? renderSlot(_ctx.$slots, "down-icon", { key: 2 }, () => [
      createVNode(_component_TriangleDown, { color: _ctx.dropColor }, null, 8, ["color"])
    ]) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.arrowLeft ? (openBlock(), createElementBlock("span", {
      key: 3,
      class: "nut-trend-arrow-icon-after nut-trend-arrow-rate",
      style: normalizeStyle(_ctx.calcStyle)
    }, toDisplayString(_ctx.calcRate), 5)) : createCommentVNode("", true)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
