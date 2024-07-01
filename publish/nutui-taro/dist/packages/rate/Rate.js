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
import { defineComponent, toRef, ref, openBlock, createElementBlock, Fragment, renderList, unref, normalizeStyle, createElementVNode, createBlock, resolveDynamicComponent, normalizeClass, createTextVNode, createCommentVNode } from "vue";
import { StarFillN } from "@nutui/icons-vue-taro";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-rate" };
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "nut-rate-item__icon--full" };
const _hoisted_4 = {
  key: 0,
  class: "nut-rate-item__icon--half"
};
const _hoisted_5 = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutRate"
}), {
  __name: "rate.taro",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    customIcon: { default: () => StarFillN },
    size: {},
    activeColor: { default: "" },
    voidColor: { default: "" },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    allowHalf: { type: Boolean, default: false },
    spacing: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const refRandomId = Math.random().toString(36).slice(-8);
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const rateRefs = ref([]);
    const updateVal = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
    };
    const onClick = (e, index) => {
      if (disabled.value || props.readonly) return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
        value = 0;
      } else {
        value = index;
        if (props.allowHalf && e == 2) {
          value -= 0.5;
        }
      }
      updateVal(value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.count), (n) => {
          return openBlock(), createElementBlock("view", {
            id: "rateRefs-" + unref(refRandomId) + n,
            key: n,
            ref_for: true,
            ref_key: "rateRefs",
            ref: rateRefs,
            class: "nut-rate-item",
            style: normalizeStyle(n < Number(_ctx.count) ? { marginRight: unref(pxCheck)(_ctx.spacing) } : {})
          }, [
            createElementVNode("view", _hoisted_3, [
              (openBlock(), createBlock(resolveDynamicComponent(
                unref(renderIcon)(_ctx.customIcon, {
                  width: _ctx.size,
                  height: _ctx.size,
                  size: _ctx.size,
                  color: n <= Number(_ctx.modelValue) ? _ctx.activeColor : _ctx.voidColor
                })
              ), {
                class: normalizeClass(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": unref(disabled) || n > Number(_ctx.modelValue) }]),
                onClick: ($event) => onClick(1, n)
              }, null, 8, ["class", "onClick"]))
            ]),
            createTextVNode(),
            _ctx.allowHalf && Number(_ctx.modelValue) + 1 > n ? (openBlock(), createElementBlock("view", _hoisted_4, [
              (openBlock(), createBlock(resolveDynamicComponent(
                unref(renderIcon)(_ctx.customIcon, {
                  width: _ctx.size,
                  height: _ctx.size,
                  size: _ctx.size,
                  color: n <= Number(_ctx.modelValue) + 1 ? _ctx.activeColor : _ctx.voidColor
                })
              ), {
                class: "nut-rate-item__icon",
                onClick: ($event) => onClick(2, n)
              }, null, 8, ["onClick"]))
            ])) : _ctx.allowHalf && Number(_ctx.modelValue) + 1 < n ? (openBlock(), createElementBlock("view", _hoisted_5, [
              (openBlock(), createBlock(resolveDynamicComponent(unref(renderIcon)(_ctx.customIcon, { width: _ctx.size, height: _ctx.size, size: _ctx.size, color: _ctx.voidColor })), {
                class: "nut-rate-item__icon nut-rate-item__icon--disabled",
                onClick: ($event) => onClick(2, n)
              }, null, 8, ["onClick"]))
            ])) : createCommentVNode("", true)
          ], 12, _hoisted_2);
        }), 128))
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Rate,
  _sfc_main as default
};
