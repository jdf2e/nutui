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
import { defineComponent, toRef, ref, computed, onMounted, nextTick, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, unref, toDisplayString, createCommentVNode } from "vue";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"];
const _hoisted_2 = {
  key: 0,
  class: "nut-textarea__limit"
};
const cN = "NutTextarea";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: cN
}), {
  __name: "textarea",
  props: {
    modelValue: { default: "" },
    textAlign: {},
    limitShow: { type: Boolean, default: false },
    maxLength: { default: "" },
    rows: { default: "2" },
    placeholder: { default: "" },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autosize: { type: [Boolean, Object], default: false },
    autofocus: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const translate = useLocale(cN);
    const textareaRef = ref(null);
    const classes = computed(() => {
      const prefixCls = "nut-textarea";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });
    const styles = computed(() => {
      return {
        textAlign: props.textAlign
      };
    });
    const setHeight = (height) => {
      const textarea = textareaRef.value;
      if (textarea && textarea.style) {
        textarea.style.height = typeof height === "number" ? `${height}px` : height;
      }
    };
    const getContentHeight = () => {
      setHeight("auto");
      if (textareaRef.value) {
        let height = textareaRef.value.scrollHeight;
        if (typeof props.autosize === "object") {
          const { maxHeight, minHeight } = props.autosize;
          if (maxHeight !== void 0) {
            height = Math.min(height, maxHeight);
          }
          if (minHeight !== void 0) {
            height = Math.max(height, minHeight);
          }
        }
        if (height) {
          setHeight(height);
        }
      }
    };
    onMounted(() => {
      if (props.modelValue) {
        emitChange(String(props.modelValue));
      }
      if (props.autosize) {
        nextTick(getContentHeight);
      }
    });
    watch(
      () => props.modelValue,
      () => {
        if (props.autosize) {
          nextTick(getContentHeight);
        }
      }
    );
    const emitChange = (value, event) => {
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.substring(0, Number(props.maxLength));
      }
      emit("update:modelValue", value, event);
      emit("change", value, event);
    };
    const change = (event) => {
      const input = event.target;
      if (!input.composing) {
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        emitChange(input.value, event);
      }
    };
    const focus = (event) => {
      if (disabled.value || props.readonly) return;
      emit("focus", event);
    };
    const blur = (event) => {
      if (disabled.value || props.readonly) return;
      const input = event.target;
      const value = input.value;
      emitChange(value, event);
      emit("blur", { value, event });
    };
    const startComposing = ({ target }) => {
      const input = target;
      input.composing = true;
    };
    const endComposing = ({ target }) => {
      const input = target;
      if (input.composing) {
        input.composing = false;
        input.dispatchEvent(new Event("input"));
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        createElementVNode("textarea", {
          ref_key: "textareaRef",
          ref: textareaRef,
          class: "nut-textarea__textarea",
          style: normalizeStyle(styles.value),
          rows: _ctx.rows,
          disabled: unref(disabled),
          readonly: _ctx.readonly,
          value: _ctx.modelValue,
          maxlength: _ctx.maxLength,
          placeholder: _ctx.placeholder || unref(translate)("placeholder"),
          autofocus: _ctx.autofocus,
          onInput: change,
          onBlur: blur,
          onFocus: focus,
          onChange: endComposing,
          onCompositionend: endComposing,
          onCompositionstart: startComposing
        }, null, 44, _hoisted_1),
        _ctx.limitShow ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + toDisplayString(_ctx.maxLength), 1)) : createCommentVNode("", true)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Textarea,
  _sfc_main as default
};
