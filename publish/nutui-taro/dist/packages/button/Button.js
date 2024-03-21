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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createElementVNode, createBlock, createCommentVNode, createTextVNode, renderSlot } from "vue";
import { Loading } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["type", "formType"];
const _hoisted_2 = { class: "nut-button__wrap" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutButton"
}), {
  __name: "button.taro",
  props: {
    color: { default: "" },
    shape: { default: "round" },
    plain: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { default: "default" },
    size: { default: "normal" },
    block: { type: Boolean, default: false },
    formType: { default: "button" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleClick = (event) => {
      if (!props.loading && !props.disabled) {
        emit("click", event);
      }
    };
    const classes = computed(() => {
      const prefixCls = "nut-button";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--${props.size}`]: props.size,
        [`${prefixCls}--${props.shape}`]: props.shape,
        [`${prefixCls}--plain`]: props.plain,
        [`${prefixCls}--block`]: props.block,
        [`${prefixCls}--disabled`]: props.disabled,
        [`${prefixCls}--loading`]: props.loading
      };
    });
    const getStyle = computed(() => {
      let style = {};
      if (props.color) {
        style = {
          color: props.plain ? props.color : "#fff",
          background: props.plain ? "#fff" : `border-box ${props.color}`
        };
        if (props.color.includes("gradient")) {
          style.borderColor = "transparent";
        } else {
          style.borderColor = props.color;
        }
      }
      return style;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(getStyle.value),
        type: unref(Taro).getEnv() === unref(Taro).ENV_TYPE.WEB ? _ctx.formType : void 0,
        formType: _ctx.formType === "button" ? void 0 : _ctx.formType,
        onClick: handleClick
      }, [
        createElementVNode("view", _hoisted_2, [
          _ctx.loading ? (openBlock(), createBlock(unref(Loading), {
            key: 0,
            class: "nut-icon-loading"
          })) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.$slots.icon && !_ctx.loading ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.$slots.default ? (openBlock(), createElementBlock("view", {
            key: 2,
            class: normalizeClass({ "nut-button__text": _ctx.$slots.icon || _ctx.loading })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true)
        ])
      ], 14, _hoisted_1);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Button,
  _sfc_main as default
};
