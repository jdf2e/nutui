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
import { getCurrentInstance, inject, reactive, computed, toRefs, openBlock, createElementBlock, normalizeClass, createElementVNode, createTextVNode, renderSlot, Fragment, toDisplayString, createCommentVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { S as STEPS_KEY } from "../types-RCVUm7Nb.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create, componentName } = createComponent("step");
const _sfc_main = create({
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  emits: ["clickStep"],
  setup() {
    const { proxy } = getCurrentInstance();
    const parent = inject(STEPS_KEY);
    parent["relation"](proxy);
    const state = reactive({
      dot: parent.props.progressDot
    });
    const index = computed(() => parent.state.children.indexOf(proxy) + 1);
    const getCurrentStatus = () => {
      const activeIndex = index.value;
      if (activeIndex < +parent.props.current)
        return "finish";
      return activeIndex === +parent.props.current ? "process" : "wait";
    };
    const status = computed(() => {
      return getCurrentStatus();
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-${status.value}`]: true
      };
    });
    const handleClickStep = () => {
      parent["onEmit"](index.value);
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      index,
      classes,
      handleClickStep
    });
  }
});
const _hoisted_1 = { class: "nut-step-head" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("view", { class: "nut-step-line" }, null, -1);
const _hoisted_3 = { class: "nut-step-icon-inner" };
const _hoisted_4 = {
  key: 1,
  class: "nut-step-inner"
};
const _hoisted_5 = { class: "nut-step-main" };
const _hoisted_6 = { class: "nut-step-title" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 0,
  class: "nut-step-content"
};
const _hoisted_9 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickStep && _ctx.handleClickStep(...args))
  }, [
    createElementVNode("view", _hoisted_1, [
      _hoisted_2,
      createTextVNode(),
      createElementVNode("view", {
        class: normalizeClass(["nut-step-icon", [!_ctx.dot ? "is-icon" : ""]])
      }, [
        createElementVNode("view", _hoisted_3, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            _ctx.dot ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.index), 1))
          ])
        ])
      ], 2)
    ]),
    createTextVNode(),
    createElementVNode("view", _hoisted_5, [
      createElementVNode("view", _hoisted_6, [
        !_ctx.$slots.title ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "title")
      ]),
      createTextVNode(),
      _ctx.content || _ctx.$slots.content ? (openBlock(), createElementBlock("view", _hoisted_8, [
        !_ctx.$slots.content ? (openBlock(), createElementBlock("span", {
          key: 0,
          innerHTML: _ctx.content
        }, null, 8, _hoisted_9)) : createCommentVNode("", true),
        createTextVNode(),
        renderSlot(_ctx.$slots, "content")
      ])) : createCommentVNode("", true)
    ])
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
