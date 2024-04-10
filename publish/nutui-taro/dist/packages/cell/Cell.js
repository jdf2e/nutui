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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, createTextVNode, Fragment, createElementVNode, toDisplayString, createBlock, unref } from "vue";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { Right } from "@nutui/icons-vue-taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = {
  key: 0,
  class: "nut-cell__icon"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-cell__title"
};
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "nut-cell__title-desc" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCell"
}), {
  __name: "cell.taro",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    desc: { default: "" },
    descTextAlign: { default: "right" },
    isLink: { type: Boolean, default: false },
    roundRadius: { default: "" },
    center: { type: Boolean, default: false },
    size: { default: "normal" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const classes = computed(() => {
      const prefixCls = "nut-cell";
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.isLink,
        [`${prefixCls}--center`]: props.center,
        [`${prefixCls}--large`]: props.size === "large"
      };
    });
    const baseStyle = computed(() => {
      return {
        borderRadius: pxCheck(props.roundRadius)
      };
    });
    const descStyle = computed(() => {
      return {
        textAlign: props.descTextAlign
      };
    });
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(baseStyle.value),
        onClick: handleClick
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _ctx.$slots.icon ? (openBlock(), createElementBlock("view", _hoisted_1, [
            renderSlot(_ctx.$slots, "icon")
          ])) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.title || _ctx.subTitle || _ctx.$slots.title ? (openBlock(), createElementBlock("view", _hoisted_2, [
            _ctx.subTitle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              renderSlot(_ctx.$slots, "title", {}, () => [
                createElementVNode("view", _hoisted_3, toDisplayString(_ctx.title), 1)
              ]),
              createTextVNode(),
              createElementVNode("view", _hoisted_4, toDisplayString(_ctx.subTitle), 1)
            ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ])) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.desc || _ctx.$slots.desc ? (openBlock(), createElementBlock("view", {
            key: 2,
            class: normalizeClass(["nut-cell__value", { "nut-cell__value--alone": !_ctx.title && !_ctx.subTitle && !_ctx.$slots.title }]),
            style: normalizeStyle(descStyle.value)
          }, [
            renderSlot(_ctx.$slots, "desc", {}, () => [
              createTextVNode(toDisplayString(_ctx.desc), 1)
            ])
          ], 6)) : createCommentVNode("", true),
          createTextVNode(),
          renderSlot(_ctx.$slots, "link", {}, () => [
            _ctx.isLink ? (openBlock(), createBlock(unref(Right), {
              key: 0,
              class: "nut-cell__link"
            })) : createCommentVNode("", true)
          ])
        ])
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Cell,
  _sfc_main as default
};
