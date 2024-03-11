import Taro from "@tarojs/taro";
import { MaskClose } from "@nutui/icons-vue-taro";
import { toRef, ref, reactive, computed, watch, onMounted, h, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, createTextVNode, createBlock, resolveDynamicComponent, mergeProps, toDisplayString, withDirectives, createVNode, vShow } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { u as useFormDisabled } from "../common-FZL3qC99.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
function trimExtraChar(value, char, regExp) {
  const index = value.indexOf(char);
  if (index === -1) {
    return value;
  }
  if (char === "-" && index !== 0) {
    return value.slice(0, index);
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, "");
}
function formatNumber(value, allowDot = true, allowMinus = true) {
  if (allowDot) {
    value = trimExtraChar(value, ".", /\./g);
  } else {
    value = value.split(".")[0];
  }
  if (allowMinus) {
    value = trimExtraChar(value, "-", /-/g);
  } else {
    value = value.replace(/-/, "");
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, "");
}
const { componentName, create } = createComponent("input");
const _sfc_main = create({
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputAlign: {
      type: String,
      default: "left"
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    clearSize: {
      type: [String, Number],
      default: "14"
    },
    border: {
      type: Boolean,
      default: true
    },
    formatTrigger: {
      type: String,
      default: "onChange"
    },
    formatter: {
      type: Function,
      default: null
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: "done"
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    alwaysSystem: {
      type: Boolean,
      default: false
    },
    showClearIcon: {
      type: Boolean,
      default: false
    },
    class: {
      type: String,
      default: ""
    }
  },
  components: { MaskClose },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const active = ref(false);
    const inputRef = ref();
    const getModelValue = () => {
      var _a;
      return String((_a = props.modelValue) != null ? _a : "");
    };
    const renderInput = (type) => {
      let inputType = { type };
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (type === "number") {
          inputType = {
            type: "tel",
            inputmode: "numeric"
          };
        }
        if (type === "digit") {
          inputType = {
            type: "text",
            inputmode: "decimal"
          };
        }
      }
      return h("input", inputType);
    };
    const state = reactive({
      focused: false,
      validateFailed: false,
      // 校验失败
      validateMessage: ""
      // 校验信息
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--required`]: props.required,
        [`${prefixCls}--error`]: props.error,
        [`${prefixCls}--border`]: props.border,
        [props.class]: !!props.class
      };
    });
    const styles = computed(() => {
      return {
        textAlign: props.inputAlign
      };
    });
    const onInput = (event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (!event.target.composing) {
          _onInput(event);
        }
      } else {
        _onInput(event);
      }
    };
    const _onInput = (event) => {
      const input = event.target;
      let value = input.value;
      updateValue(value);
    };
    const updateValue = (value, trigger = "onChange") => {
      emit("update:modelValue", value);
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      if (["number", "digit"].includes(props.type)) {
        const isDigit = props.type === "digit";
        value = formatNumber(value, isDigit, isDigit);
      }
      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }
      if (value !== props.modelValue) {
        emit("update:modelValue", value);
      }
    };
    const onFocus = (event) => {
      if (disabled.value || props.readonly) {
        return;
      }
      active.value = true;
      emit("focus", event);
    };
    const onBlur = (event) => {
      if (disabled.value || props.readonly) {
        return;
      }
      setTimeout(() => {
        active.value = false;
      }, 200);
      const input = event.target;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      updateValue(getModelValue(), "onBlur");
      emit("blur", event);
    };
    const clear = (event) => {
      event.stopPropagation();
      if (disabled.value)
        return;
      emit("update:modelValue", "", event);
      emit("clear", "", event);
    };
    const resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = "";
      }
    };
    const onClickInput = (event) => {
      if (disabled.value) {
        return;
      }
      emit("clickInput", event);
    };
    const onClick = (event) => {
      emit("click", event);
    };
    const startComposing = ({ target }) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        target.composing = true;
      }
    };
    const endComposing = ({ target }) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
    };
    const onKeyup = (e) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB && e.key === "Enter") {
        emit("confirm", e);
      }
    };
    const onConfirm = (e) => {
      emit("confirm", e);
    };
    watch(
      () => props.modelValue,
      () => {
        updateValue(getModelValue());
        resetValidation();
      }
    );
    onMounted(() => {
      if (props.autofocus) {
        inputRef.value.focus();
      }
      updateValue(getModelValue(), props.formatTrigger);
    });
    return {
      renderInput,
      inputRef,
      active,
      classes,
      styles,
      disabled,
      onInput,
      onFocus,
      onBlur,
      clear,
      startComposing,
      endComposing,
      onClick,
      onClickInput,
      onConfirm,
      onKeyup,
      getModelValue
    };
  }
});
const _hoisted_1 = { class: "nut-input-value" };
const _hoisted_2 = { class: "nut-input-inner" };
const _hoisted_3 = {
  key: 0,
  class: "nut-input-left-box"
};
const _hoisted_4 = { class: "nut-input-box" };
const _hoisted_5 = {
  key: 1,
  class: "nut-input-word-limit"
};
const _hoisted_6 = { class: "nut-input-word-num" };
const _hoisted_7 = { class: "nut-input-right-box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MaskClose = resolveComponent("MaskClose");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [
    createElementVNode("view", _hoisted_1, [
      createElementVNode("view", _hoisted_2, [
        _ctx.$slots.left ? (openBlock(), createElementBlock("view", _hoisted_3, [
          renderSlot(_ctx.$slots, "left")
        ])) : createCommentVNode("", true),
        createTextVNode(),
        createElementVNode("view", _hoisted_4, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderInput(_ctx.type)), mergeProps(_ctx.$attrs, {
            ref: "inputRef",
            class: "input-text",
            style: _ctx.styles,
            maxlength: _ctx.maxLength ? _ctx.maxLength : void 0,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled,
            readonly: _ctx.readonly,
            value: _ctx.modelValue,
            "format-trigger": _ctx.formatTrigger,
            autofocus: _ctx.autofocus ? true : void 0,
            enterkeyhint: _ctx.confirmType,
            "adjust-position": _ctx.adjustPosition,
            "always-system": _ctx.alwaysSystem,
            onInput: _ctx.onInput,
            onFocus: _ctx.onFocus,
            onBlur: _ctx.onBlur,
            onClick: _ctx.onClickInput,
            onChange: _ctx.endComposing,
            onCompositionend: _ctx.endComposing,
            onCompositionstart: _ctx.startComposing,
            onConfirm: _ctx.onConfirm,
            onKeyup: _ctx.onKeyup
          }), null, 16, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint", "adjust-position", "always-system", "onInput", "onFocus", "onBlur", "onClick", "onChange", "onCompositionend", "onCompositionstart", "onConfirm", "onKeyup"])),
          createTextVNode(),
          _ctx.readonly ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "nut-input-disabled-mask",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickInput && _ctx.onClickInput(...args))
          })) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.showWordLimit && _ctx.maxLength ? (openBlock(), createElementBlock("view", _hoisted_5, [
            createElementVNode("span", _hoisted_6, toDisplayString(_ctx.getModelValue() ? _ctx.getModelValue().length : 0), 1),
            createTextVNode("/" + toDisplayString(_ctx.maxLength), 1)
          ])) : createCommentVNode("", true)
        ]),
        createTextVNode(),
        _ctx.clearable && !_ctx.readonly ? withDirectives((openBlock(), createElementBlock("view", {
          key: 1,
          class: "nut-input-clear-box",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.clear && _ctx.clear(...args))
        }, [
          renderSlot(_ctx.$slots, "clear", {}, () => [
            createVNode(_component_MaskClose, {
              class: "nut-input-clear",
              size: _ctx.clearSize,
              width: _ctx.clearSize,
              height: _ctx.clearSize
            }, null, 8, ["size", "width", "height"])
          ])
        ], 512)), [
          [vShow, (_ctx.active || _ctx.showClearIcon) && _ctx.getModelValue().length > 0]
        ]) : createCommentVNode("", true),
        createTextVNode(),
        createElementVNode("view", _hoisted_7, [
          renderSlot(_ctx.$slots, "right")
        ])
      ])
    ])
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
