import { computed, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode, createTextVNode, toDisplayString, normalizeStyle } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
import { Minus, Plus } from "@nutui/icons-vue-taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("input-number");
const _sfc_main = create({
  components: { Minus, Plus },
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    inputWidth: {
      type: [Number, String],
      default: ""
    },
    buttonSize: {
      type: [Number, String],
      default: ""
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: 9999
    },
    step: {
      type: [Number, String],
      default: 1
    },
    decimalPlaces: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "reduce", "add", "overlimit"],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: props.disabled
      };
    });
    const fixedDecimalPlaces = (v) => {
      return Number(v).toFixed(Number(props.decimalPlaces));
    };
    const change = (event) => {
      const input = event.target;
      emit("update:modelValue", Number(input.value), event);
    };
    const emitChange = (value, event) => {
      let output_value = fixedDecimalPlaces(value);
      emit("update:modelValue", output_value, event);
      if (Number(props.modelValue) !== Number(output_value))
        emit("change", output_value, event);
    };
    const addAllow = (value = Number(props.modelValue)) => {
      return value < Number(props.max) && !props.disabled;
    };
    const reduceAllow = (value = Number(props.modelValue)) => {
      return value > Number(props.min) && !props.disabled;
    };
    const reduce = (event) => {
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
      if (props.disabled)
        return;
      if (props.readonly) {
        blur(event);
        return;
      }
      emit("focus", event);
    };
    const blur = (event) => {
      if (props.disabled)
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
    return {
      classes,
      change,
      blur,
      focus,
      add,
      addAllow,
      reduce,
      reduceAllow,
      pxCheck
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-input-number__text--readonly"
};
const _hoisted_2 = ["min", "max", "disabled", "readonly", "value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Minus = resolveComponent("Minus");
  const _component_Plus = resolveComponent("Plus");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("view", {
      class: normalizeClass(["nut-input-number__icon nut-input-number__left", { "nut-input-number__icon--disabled": !_ctx.reduceAllow() }]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.reduce && _ctx.reduce(...args))
    }, [
      renderSlot(_ctx.$slots, "left-icon", {}, () => [
        createVNode(_component_Minus, {
          size: _ctx.pxCheck(_ctx.buttonSize)
        }, null, 8, ["size"])
      ])
    ], 2),
    createTextVNode(),
    _ctx.readonly ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(_ctx.modelValue), 1)) : (openBlock(), createElementBlock("input", {
      key: 1,
      class: "nut-input-number__text--input",
      type: "number",
      min: _ctx.min,
      max: _ctx.max,
      style: normalizeStyle({ width: _ctx.pxCheck(_ctx.inputWidth), height: _ctx.pxCheck(_ctx.buttonSize) }),
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      value: _ctx.modelValue,
      onInput: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args)),
      onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.blur && _ctx.blur(...args)),
      onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.focus && _ctx.focus(...args))
    }, null, 44, _hoisted_2)),
    createTextVNode(),
    createElementVNode("view", {
      class: normalizeClass(["nut-input-number__icon nut-input-number__right", { "nut-input-number__icon--disabled": !_ctx.addAllow() }]),
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.add && _ctx.add(...args))
    }, [
      renderSlot(_ctx.$slots, "right-icon", {}, () => [
        createVNode(_component_Plus, {
          size: _ctx.pxCheck(_ctx.buttonSize)
        }, null, 8, ["size"])
      ])
    ], 2)
  ], 2);
}
const NutInputNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutInputNumber as default
};
