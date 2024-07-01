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
import { defineComponent, toRef, ref, reactive, computed, watch, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, createBlock, resolveDynamicComponent, normalizeStyle, unref, toDisplayString, createTextVNode, withDirectives, createVNode, mergeProps, vShow, h } from "vue";
import { MaskClose } from "@nutui/icons-vue";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
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
function mapInputType(type) {
  if (type === "number") {
    return {
      type: "text",
      inputmode: "decimal"
    };
  }
  if (type === "digit") {
    return {
      type: "tel",
      inputmode: "numeric"
    };
  }
  return { type };
}
const _hoisted_1 = { class: "nut-input-value" };
const _hoisted_2 = { class: "nut-input-inner" };
const _hoisted_3 = {
  key: 0,
  class: "nut-input-left-box"
};
const _hoisted_4 = { class: "nut-input-box" };
const _hoisted_5 = {
  key: 0,
  class: "nut-input-word-limit"
};
const _hoisted_6 = { class: "nut-input-word-num" };
const _hoisted_7 = { class: "nut-input-right-box" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutInput"
}), {
  __name: "input",
  props: {
    type: { default: "text" },
    modelValue: { default: "" },
    placeholder: { default: "" },
    inputAlign: { default: "left" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    maxLength: { default: "" },
    clearable: { type: Boolean, default: false },
    clearSize: { default: "14" },
    border: { type: Boolean, default: true },
    formatTrigger: { default: "onChange" },
    formatter: {},
    showWordLimit: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    confirmType: { default: "done" },
    error: { type: Boolean, default: false },
    showClearIcon: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "blur", "focus", "clear", "keypress", "click", "clickInput", "confirm"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const active = ref(false);
    const inputRef = ref();
    const getModelValue = () => {
      var _a;
      return String((_a = props.modelValue) != null ? _a : "");
    };
    const renderInput = (type) => h("input", __spreadValues({}, mapInputType(type)));
    const state = reactive({
      focused: false,
      validateFailed: false,
      // 校验失败
      validateMessage: ""
      // 校验信息
    });
    const classes = computed(() => {
      const prefixCls = "nut-input";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--required`]: props.required,
        [`${prefixCls}--error`]: props.error,
        [`${prefixCls}--border`]: props.border
      };
    });
    const styles = computed(() => {
      return {
        textAlign: props.inputAlign
      };
    });
    const onInput = (event) => {
      if (!event.target.composing) {
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        updateValue(value);
      }
    };
    const updateValue = (value, trigger = "onChange") => {
      var _a;
      if (["number", "digit"].includes(props.type)) {
        const isNumber = props.type === "number";
        value = formatNumber(value, isNumber, isNumber);
      }
      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }
      if (((_a = inputRef == null ? void 0 : inputRef.value) == null ? void 0 : _a.value) !== value) {
        inputRef.value.value = value;
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
      if (disabled.value) return;
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
      target.composing = true;
    };
    const endComposing = ({ target }) => {
      if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
      }
    };
    watch(
      () => props.modelValue,
      () => {
        updateValue(getModelValue());
        resetValidation();
      }
    );
    onMounted(() => {
      updateValue(getModelValue(), props.formatTrigger);
    });
    const focus = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.blur();
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.select();
    };
    const onKeyup = (e) => {
      if (e.key === "Enter") {
        emit("confirm", e);
      }
    };
    __expose({
      focus,
      blur,
      select
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        onClick
      }, [
        createElementVNode("view", _hoisted_1, [
          createElementVNode("view", _hoisted_2, [
            _ctx.$slots.left ? (openBlock(), createElementBlock("view", _hoisted_3, [
              renderSlot(_ctx.$slots, "left")
            ])) : createCommentVNode("", true),
            createElementVNode("view", _hoisted_4, [
              (openBlock(), createBlock(resolveDynamicComponent(renderInput(_ctx.type)), {
                ref_key: "inputRef",
                ref: inputRef,
                class: "input-text",
                style: normalizeStyle(styles.value),
                maxlength: _ctx.maxLength,
                placeholder: _ctx.placeholder,
                disabled: unref(disabled),
                readonly: _ctx.readonly,
                value: _ctx.modelValue,
                "format-trigger": _ctx.formatTrigger,
                autofocus: _ctx.autofocus,
                enterkeyhint: _ctx.confirmType,
                onInput,
                onFocus,
                onBlur,
                onClick: onClickInput,
                onChange: endComposing,
                onCompositionend: endComposing,
                onCompositionstart: startComposing,
                onKeyup
              }, null, 40, ["style", "maxlength", "placeholder", "disabled", "readonly", "value", "format-trigger", "autofocus", "enterkeyhint"])),
              _ctx.showWordLimit && _ctx.maxLength ? (openBlock(), createElementBlock("view", _hoisted_5, [
                createElementVNode("span", _hoisted_6, toDisplayString(getModelValue() ? getModelValue().length : 0), 1),
                createTextVNode("/" + toDisplayString(_ctx.maxLength), 1)
              ])) : createCommentVNode("", true)
            ]),
            _ctx.clearable && !_ctx.readonly ? withDirectives((openBlock(), createElementBlock("view", {
              key: 1,
              class: "nut-input-clear-box",
              onClick: clear
            }, [
              renderSlot(_ctx.$slots, "clear", {}, () => [
                createVNode(unref(MaskClose), mergeProps({ class: "nut-input-clear" }, _ctx.$attrs, {
                  size: _ctx.clearSize,
                  width: _ctx.clearSize,
                  height: _ctx.clearSize
                }), null, 16, ["size", "width", "height"])
              ])
            ], 512)), [
              [vShow, (active.value || _ctx.showClearIcon) && getModelValue().length > 0]
            ]) : createCommentVNode("", true),
            createElementVNode("view", _hoisted_7, [
              renderSlot(_ctx.$slots, "right")
            ])
          ])
        ])
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Input,
  _sfc_main as default
};
