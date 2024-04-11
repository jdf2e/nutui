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
import { defineComponent, computed, inject, openBlock, createBlock, unref, normalizeClass, normalizeStyle, withCtx, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode } from "vue";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { Cell as _sfc_main$1 } from "../cell/Cell.js";
import { F as FORM_TIP_KEY, a as FORM_KEY } from "../common-BH7uB7Cn.js";
import { u as useParent } from "../useParent-D6DiuxZZ.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-cell__value nut-form-item__body" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutFormItem",
  inheritAttrs: false
}), {
  __name: "form-item",
  props: {
    prop: { default: "" },
    label: { default: "" },
    rules: { default: () => [] },
    required: { type: Boolean, default: false },
    showErrorMessage: { type: Boolean, default: true },
    showErrorLine: { type: Boolean, default: true },
    labelWidth: {},
    labelAlign: {},
    errorMessageAlign: {},
    bodyAlign: {},
    labelPosition: {},
    starPosition: {}
  },
  setup(__props) {
    const props = __props;
    const { parent: parentObj } = useParent(FORM_KEY);
    const isRequired = computed(() => {
      var _a;
      const rules = (_a = parentObj.props) == null ? void 0 : _a.rules;
      let formRequired = false;
      for (const key in rules) {
        if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
          formRequired = rules[key].some((rule) => rule.required);
        }
      }
      return props.required || props.rules.some((rule) => rule.required) || formRequired;
    });
    const labelPositionClass = computed(() => {
      const labelPosition = parentObj.props.labelPosition;
      const position = props.labelPosition ? props.labelPosition : labelPosition;
      return position !== "left" ? `nut-form-item__${position}` : "";
    });
    const starPositionClass = computed(() => {
      const starPosition = parentObj.props.starPosition;
      const position = props.starPosition ? props.starPosition : starPosition;
      return position !== "left" ? `nut-form-item__star-${position}` : "";
    });
    const parent = inject(FORM_TIP_KEY);
    const labelStyle = computed(() => {
      return {
        width: pxCheck(props.labelWidth),
        textAlign: props.labelAlign
      };
    });
    const bodyStyle = computed(() => {
      return {
        textAlign: props.bodyAlign
      };
    });
    const errorMessageStyle = computed(() => {
      return {
        textAlign: props.errorMessageAlign
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$1), {
        class: normalizeClass(["nut-form-item", [{ error: unref(parent)[_ctx.prop], line: _ctx.showErrorLine }, _ctx.$attrs.class, labelPositionClass.value]]),
        style: normalizeStyle(_ctx.$attrs.style)
      }, {
        default: withCtx(() => [
          _ctx.label || _ctx.$slots.label ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(["nut-cell__title nut-form-item__label", { required: isRequired.value, [starPositionClass.value]: starPositionClass.value }]),
            style: normalizeStyle(labelStyle.value)
          }, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ])
          ], 6)) : createCommentVNode("", true),
          createElementVNode("view", _hoisted_1, [
            createElementVNode("view", {
              class: "nut-form-item__body__slots",
              style: normalizeStyle(bodyStyle.value)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 4),
            unref(parent)[_ctx.prop] && _ctx.showErrorMessage ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "nut-form-item__body__tips",
              style: normalizeStyle(errorMessageStyle.value)
            }, toDisplayString(unref(parent)[_ctx.prop]), 5)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as FormItem,
  _sfc_main as default
};
