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
import { defineComponent, toRef, inject, computed, openBlock, createElementBlock, normalizeClass, renderSlot, Fragment, createVNode, unref, createTextVNode, createElementVNode } from "vue";
import { CheckChecked, CheckNormal } from "@nutui/icons-vue-taro";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { R as RADIO_KEY } from "../types-BODurTjN.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutRadio"
}), {
  __name: "radio.taro",
  props: {
    disabled: { type: Boolean, default: false },
    shape: { default: "round" },
    label: { type: [String, Number, Boolean], default: "" },
    iconSize: { default: "" },
    size: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const parent = inject(RADIO_KEY, null);
    const checked = computed(() => {
      return parent.label.value === props.label;
    });
    const iconClasses = computed(() => {
      return !disabled.value ? checked.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
    });
    const realIconSize = computed(() => {
      return pxCheck(props.iconSize);
    });
    const labelClasses = computed(() => {
      return {
        "nut-radio__label": true,
        "nut-radio__label--disabled": disabled.value
      };
    });
    const buttonClasses = computed(() => {
      return {
        "nut-radio__button": true,
        "nut-radio__button--active": checked.value,
        [`nut-radio__button--${props.size}`]: true,
        "nut-radio__button--disabled": props.disabled
      };
    });
    const handleClick = () => {
      if (checked.value || disabled.value)
        return;
      parent.updateValue(props.label);
    };
    const reverseState = computed(() => parent.position.value === "left");
    const radioClasses = computed(() => {
      return {
        "nut-radio": true,
        [`nut-radio--${props.shape}`]: true,
        "nut-radio--reverse": reverseState.value
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(radioClasses.value),
        onClick: handleClick
      }, [
        _ctx.shape === "button" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: normalizeClass(buttonClasses.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          checked.value ? renderSlot(_ctx.$slots, "checkedIcon", { key: 0 }, () => [
            createVNode(unref(CheckChecked), {
              size: realIconSize.value,
              class: normalizeClass(iconClasses.value)
            }, null, 8, ["size", "class"])
          ]) : renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
            createVNode(unref(CheckNormal), {
              size: realIconSize.value,
              class: normalizeClass(iconClasses.value)
            }, null, 8, ["size", "class"])
          ]),
          createTextVNode(),
          createElementVNode("view", {
            class: normalizeClass(labelClasses.value)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 64))
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Radio,
  _sfc_main as default
};
