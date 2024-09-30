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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, createTextVNode, renderSlot, toDisplayString, unref, createCommentVNode } from "vue";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { S as STEPS_KEY } from "../types-1HzUV14W.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-step-head" };
const _hoisted_2 = { class: "nut-step-icon-inner" };
const _hoisted_3 = {
  key: 0,
  class: "nut-step-inner"
};
const _hoisted_4 = { class: "nut-step-main" };
const _hoisted_5 = { class: "nut-step-title" };
const _hoisted_6 = {
  key: 0,
  class: "nut-step-content"
};
const _hoisted_7 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutStep"
}), {
  __name: "step.taro",
  props: {
    title: { default: "" },
    content: { default: "" }
  },
  setup(__props) {
    const { index, parent } = useParent(STEPS_KEY);
    const status = computed(() => {
      const activeIndex = index.value + 1;
      if (activeIndex < +parent.props.current) return "finish";
      return activeIndex === +parent.props.current ? "process" : "wait";
    });
    const dot = computed(() => parent.props.progressDot);
    const classes = computed(() => {
      const prefixCls = "nut-step";
      return {
        [prefixCls]: true,
        [`${prefixCls}-${status.value}`]: true
      };
    });
    const handleClickStep = () => {
      parent.onEmit(index.value + 1);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        onClick: handleClickStep
      }, [
        createElementVNode("view", _hoisted_1, [
          _cache[0] || (_cache[0] = createElementVNode("view", { class: "nut-step-line" }, null, -1)),
          _cache[1] || (_cache[1] = createTextVNode()),
          createElementVNode("view", {
            class: normalizeClass(["nut-step-icon", [!dot.value ? "is-icon" : ""]])
          }, [
            createElementVNode("view", _hoisted_2, [
              renderSlot(_ctx.$slots, "icon", {}, () => [
                !dot.value ? (openBlock(), createElementBlock("view", _hoisted_3, toDisplayString(unref(index) + 1), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 2)
        ]),
        _cache[3] || (_cache[3] = createTextVNode()),
        createElementVNode("view", _hoisted_4, [
          createElementVNode("view", _hoisted_5, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createElementVNode("span", null, toDisplayString(_ctx.title), 1)
            ])
          ]),
          _cache[2] || (_cache[2] = createTextVNode()),
          _ctx.content || _ctx.$slots.content ? (openBlock(), createElementBlock("view", _hoisted_6, [
            renderSlot(_ctx.$slots, "content", {}, () => [
              createElementVNode("span", { innerHTML: _ctx.content }, null, 8, _hoisted_7)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Step,
  _sfc_main as default
};
