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
import { defineComponent, computed, watch, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, unref, createCommentVNode, createTextVNode, Fragment, withDirectives, toDisplayString, vShow } from "vue";
import { Loading1 } from "@nutui/icons-vue-taro";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-switch-button" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutSwitch"
}), {
  __name: "switch.taro",
  props: {
    modelValue: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    activeColor: { default: "" },
    inactiveColor: { default: "" },
    activeText: { default: "" },
    inactiveText: { default: "" },
    activeValue: { type: [String, Number, Boolean], default: true },
    inactiveValue: { type: [String, Number, Boolean], default: false },
    loading: { type: Boolean, default: false },
    disable: { type: Boolean, default: false }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const legacyDisabled = computed(() => props.disabled || props.disable);
    const disabled = useFormDisabled(legacyDisabled);
    const isActive = computed(() => props.modelValue === props.activeValue);
    const classes = computed(() => {
      const prefixCls = "nut-switch";
      return {
        [prefixCls]: true,
        [isActive.value ? "nut-switch-open" : "nut-switch-close"]: true,
        [`${prefixCls}-disabled`]: disabled.value,
        [`${prefixCls}-base`]: true
      };
    });
    const style = computed(() => {
      return {
        backgroundColor: isActive.value ? props.activeColor : props.inactiveColor
      };
    });
    let updateType = "";
    const onClick = (event) => {
      if (props.loading || disabled.value)
        return;
      const value = isActive.value ? props.inactiveValue : props.activeValue;
      updateType = "click";
      emit("update:modelValue", value);
      emit("change", value, event);
    };
    watch(
      () => props.modelValue,
      (v) => {
        if (updateType == "click") {
          updateType = "";
        } else {
          emit("change", v);
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle(style.value),
        onClick
      }, [
        createElementVNode("view", _hoisted_1, [
          _ctx.loading ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
            createVNode(unref(Loading1), {
              name: "loading1",
              color: _ctx.activeColor
            }, null, 8, ["color"])
          ]) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.activeText ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            withDirectives(createElementVNode("view", { class: "nut-switch-label open" }, toDisplayString(_ctx.activeText), 513), [
              [vShow, isActive.value]
            ]),
            createTextVNode(),
            withDirectives(createElementVNode("view", { class: "nut-switch-label close" }, toDisplayString(_ctx.inactiveText), 513), [
              [vShow, !isActive.value]
            ])
          ], 64)) : createCommentVNode("", true)
        ])
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Switch,
  _sfc_main as default
};
