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
import { defineComponent, toRef, computed, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode, unref, createTextVNode, toDisplayString, mergeProps } from "vue";
import { p as pxCheck } from "../pxCheck-DN6FYV6q.js";
import { Minus, Plus } from "@nutui/icons-vue-taro";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = {
  key: 0,
  class: "nut-input-number__text--readonly"
};
const _hoisted_2 = ["min", "max", "disabled", "readonly", "value"];
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutInputNumber",
  inheritAttrs: false
}), {
  __name: "input-number.taro",
  props: {
    modelValue: { default: 0 },
    inputWidth: { default: "" },
    buttonSize: { default: "" },
    min: { default: 1 },
    max: { default: 9999 },
    step: { default: 1 },
    decimalPlaces: { default: 0 },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const classes = computed(() => {
      const prefixCls = "nut-input-number";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });
    const fixedDecimalPlaces = (v) => {
      return Number(v).toFixed(Number(props.decimalPlaces));
    };
    const change = (event) => {
      const input = event.target;
      emit("update:modelValue", input.value, event);
      emit("change", input.value, event);
    };
    const emitChange = (value, event) => {
      let output_value = fixedDecimalPlaces(value);
      emit("update:modelValue", output_value, event);
      if (Number(props.modelValue) !== Number(output_value))
        emit("change", output_value, event);
    };
    const addAllow = (value = Number(props.modelValue)) => {
      return value < Number(props.max) && !disabled.value;
    };
    const reduceAllow = (value = Number(props.modelValue)) => {
      return value > Number(props.min) && !disabled.value;
    };
    const reduce = (event) => {
      if (disabled.value)
        return;
      emit("reduce", event);
      let output_value = Number(props.modelValue) - Number(props.step);
      if (reduceAllow() && output_value >= Number(props.min)) {
        emitChange(output_value, event);
      } else {
        emitChange(Number(props.min), event);
        emit("overlimit", event, "reduce");
      }
    };
    const add = (event) => {
      if (disabled.value)
        return;
      emit("add", event);
      let output_value = Number(props.modelValue) + Number(props.step);
      if (addAllow() && output_value <= Number(props.max)) {
        emitChange(output_value, event);
      } else {
        emitChange(Number(props.max), event);
        emit("overlimit", event, "add");
      }
    };
    const focus = (event) => {
      if (disabled.value)
        return;
      if (props.readonly)
        return;
      emit("focus", event);
    };
    const blur = (event) => {
      if (disabled.value)
        return;
      if (props.readonly)
        return;
      const input = event.target;
      let value = Number(input.value);
      if (value < Number(props.min)) {
        value = Number(props.min);
      } else if (value > Number(props.max)) {
        value = Number(props.max);
      }
      emitChange(value, event);
      emit("blur", event);
    };
    const format = (val) => {
      let value = Number(val);
      if (value < Number(props.min)) {
        value = Number(props.min);
      } else if (value > Number(props.max)) {
        value = Number(props.max);
      }
      return value;
    };
    watch(
      () => [props.max, props.min],
      () => {
        if (Number(props.min) > Number(props.max)) {
          console.warn("[NutUI] <InputNumber>", "props.max < props.min");
        }
        const value = format(props.modelValue);
        if (value !== Number(props.modelValue)) {
          emitChange(value, {});
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        createElementVNode("view", {
          class: normalizeClass(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !reduceAllow() }]),
          onClick: reduce
        }, [
          renderSlot(_ctx.$slots, "left-icon", {}, () => [
            createVNode(unref(Minus), {
              size: unref(pxCheck)(_ctx.buttonSize)
            }, null, 8, ["size"])
          ])
        ], 2),
        createTextVNode(),
        _ctx.readonly ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(_ctx.modelValue), 1)) : (openBlock(), createElementBlock("input", mergeProps({
          key: 1,
          class: "nut-input-number__text--input",
          type: "number"
        }, _ctx.$attrs, {
          min: _ctx.min,
          max: _ctx.max,
          style: { width: unref(pxCheck)(_ctx.inputWidth), height: unref(pxCheck)(_ctx.buttonSize) },
          disabled: unref(disabled) ? unref(disabled) : void 0,
          readonly: _ctx.readonly ? _ctx.readonly : void 0,
          value: _ctx.modelValue,
          onInput: change,
          onBlur: blur,
          onFocus: focus
        }), null, 16, _hoisted_2)),
        createTextVNode(),
        createElementVNode("view", {
          class: normalizeClass(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !addAllow() }]),
          onClick: add
        }, [
          renderSlot(_ctx.$slots, "right-icon", {}, () => [
            createVNode(unref(Plus), {
              size: unref(pxCheck)(_ctx.buttonSize)
            }, null, 8, ["size"])
          ])
        ], 2)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as InputNumber,
  _sfc_main as default
};
