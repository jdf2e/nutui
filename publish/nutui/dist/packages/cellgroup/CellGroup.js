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
import { defineComponent, openBlock, createElementBlock, renderSlot, toDisplayString, createCommentVNode, createElementVNode } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-cell-group" };
const _hoisted_2 = {
  key: 1,
  class: "nut-cell-group__title"
};
const _hoisted_3 = {
  key: 3,
  class: "nut-cell-group__desc"
};
const _hoisted_4 = { class: "nut-cell-group__wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCellGroup"
}), {
  __name: "cell-group",
  props: {
    title: { default: "" },
    desc: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : _ctx.title ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        _ctx.$slots.desc ? renderSlot(_ctx.$slots, "desc", { key: 2 }) : _ctx.desc ? (openBlock(), createElementBlock("view", _hoisted_3, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true),
        createElementVNode("view", _hoisted_4, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as CellGroup,
  _sfc_main as default
};
