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
import { defineComponent, computed, openBlock, createElementBlock, withDirectives, createElementVNode, normalizeStyle, renderSlot, vShow, createTextVNode, normalizeClass, toDisplayString } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-badge" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutBadge"
}), {
  __name: "badge.taro",
  props: {
    value: {},
    max: { default: 1e4 },
    dot: { type: Boolean, default: false },
    bubble: { type: Boolean, default: false },
    hidden: { type: Boolean, default: false },
    top: { default: "0" },
    right: { default: "0" },
    zIndex: { default: 9 },
    color: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const style = computed(() => {
      return {
        top: `${props.top}px`,
        right: `${props.right}px`,
        zIndex: props.zIndex,
        background: props.color
      };
    });
    const content = computed(() => {
      if (props.dot)
        return;
      const value = props.value;
      const max = props.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        withDirectives(createElementVNode("view", {
          class: "nut-badge__icon",
          style: normalizeStyle(style.value)
        }, [
          renderSlot(_ctx.$slots, "icon")
        ], 4), [
          [vShow, !_ctx.hidden && !_ctx.dot && _ctx.$slots.icon]
        ]),
        createTextVNode(),
        renderSlot(_ctx.$slots, "default"),
        createTextVNode(),
        withDirectives(createElementVNode("view", {
          class: normalizeClass(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": _ctx.dot, "nut-badge__content--bubble": !_ctx.dot && _ctx.bubble }]),
          style: normalizeStyle(style.value)
        }, toDisplayString(content.value), 7), [
          [vShow, !_ctx.hidden && (content.value || _ctx.dot)]
        ])
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Badge,
  _sfc_main as default
};
