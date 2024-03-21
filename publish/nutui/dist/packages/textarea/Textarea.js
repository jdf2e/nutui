import { toRef, ref, computed, onMounted, nextTick, watch, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useLocale } from "../index-BRldzYir.js";
import { u as useFormDisabled } from "../common-BSbjjJAx.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("textarea");
const cN = "NutTextarea";
const _sfc_main = create({
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: ""
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: ""
    },
    rows: {
      type: [String, Number],
      default: "2"
    },
    placeholder: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const translate = useLocale(cN);
    const textareaRef = ref();
    const classes = computed(() => {
      const prefixCls = "nut-textarea";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });
    onMounted(() => {
      if (props.modelValue) {
        emitChange(String(props.modelValue));
      }
      if (props.autosize) {
        nextTick(getContentHeight);
      }
    });
    const styles = computed(() => {
      return {
        textAlign: props.textAlign
        // resize: props.autosize ? 'vertical' : 'none'
      };
    });
    const getContentHeight = () => {
      let textarea = textareaRef.value;
      textarea.style.height = "auto";
      let height = textarea.scrollHeight;
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
        textarea.style.height = height + "px";
      }
    };
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
      if (!event.target.composing) {
        const input = event.target;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        emitChange(input.value, event);
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
      let value = input.value;
      emitChange(value, event);
      emit("blur", { value, event });
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
    return {
      textareaRef,
      classes,
      styles,
      disabled,
      change,
      focus,
      blur,
      translate,
      startComposing,
      endComposing
    };
  }
});
const _hoisted_1 = ["rows", "disabled", "readonly", "value", "maxlength", "placeholder", "autofocus"];
const _hoisted_2 = {
  key: 0,
  class: "nut-textarea__limit"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("textarea", {
      ref: "textareaRef",
      class: "nut-textarea__textarea",
      style: normalizeStyle(_ctx.styles),
      rows: _ctx.rows,
      disabled: _ctx.disabled,
      readonly: _ctx.readonly,
      value: _ctx.modelValue,
      maxlength: _ctx.maxLength,
      placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
      autofocus: _ctx.autofocus,
      onInput: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.blur && _ctx.blur(...args)),
      onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args)),
      onChange: _cache[3] || (_cache[3] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
      onCompositionend: _cache[4] || (_cache[4] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
      onCompositionstart: _cache[5] || (_cache[5] = (...args) => _ctx.startComposing && _ctx.startComposing(...args))
    }, null, 44, _hoisted_1),
    _ctx.limitShow ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + toDisplayString(_ctx.maxLength), 1)) : createCommentVNode("", true)
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
