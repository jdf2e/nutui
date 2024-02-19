import { toRef, computed, ref, watch, nextTick, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, mergeProps, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import Taro from "@tarojs/taro";
import { u as useLocale } from "../index-xXrovSQL.js";
import { u as useFormDisabled } from "../common-LvGbU-A3.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("textarea");
const cN = "NutTextarea";
const _sfc_main = create({
  inheritAttrs: false,
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
      default: ""
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
    const classes = computed(() => {
      const prefixCls = "nut-textarea";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });
    const styles = computed(() => {
      const styleObj = {
        textAlign: props.textAlign
      };
      if (props.autosize) {
        styleObj["height"] = heightSet.value;
      }
      return styleObj;
    });
    const copyTxtStyle = ref({
      "word-break": "break-all",
      width: "0"
    });
    const emitChange = (value, event) => {
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.substring(0, Number(props.maxLength));
      }
      emit("update:modelValue", value, event);
      emit("change", value, event);
    };
    const change = (event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (!composing.value) {
          _onInput(event);
        }
      } else {
        _onInput(event);
      }
    };
    const _onInput = (event) => {
      let { value } = event.detail;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      emitChange(value, event);
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
      emit("blur", event);
    };
    const textareaRef = ref(null);
    const textareaHeight = ref(20);
    const heightSet = ref("auto");
    const getContentHeight = () => {
      heightSet.value = "auto";
      let height = textareaHeight.value;
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
        heightSet.value = height + "px";
      }
    };
    watch(
      () => props.modelValue,
      () => {
        if (props.autosize) {
          setTimeout(() => {
            copyHeight();
          }, 100);
        }
      }
    );
    const copyHeight = () => {
      const query = Taro.createSelectorQuery();
      query.select(".nut-textarea__cpoyText").boundingClientRect();
      query.exec((res) => {
        if (res[0]) {
          if (props.modelValue == "") {
            textareaHeight.value = 20;
          } else {
            textareaHeight.value = res[0]["height"] || 20;
          }
          nextTick(getContentHeight);
        }
      });
    };
    const getRefHeight = () => {
      const query = Taro.createSelectorQuery();
      query.selectAll(".nut-textarea__textarea").boundingClientRect();
      let uid = textareaRef.value ? textareaRef.value.uid : "0";
      query.exec((res) => {
        if (res[0] && textareaRef.value) {
          let _item = Array.from(res[0]).filter((item) => item.id == uid);
          if (_item[0]) {
            if (Taro.getEnv() !== Taro.ENV_TYPE.WEAPP) {
              textareaHeight.value = _item[0]["height"] || 20;
            }
            copyTxtStyle.value.width = _item[0]["width"] + "px";
          }
          nextTick(getContentHeight);
        }
      });
    };
    const getRefWidth = () => {
      const query = Taro.createSelectorQuery();
      query.select(".nut-textarea__textarea").boundingClientRect();
      query.exec((res) => {
        if (res[0] && textareaRef.value) {
          copyTxtStyle.value.width = res[0]["width"] + "px";
        }
      });
    };
    const env = Taro.getEnv();
    onMounted(() => {
      if (props.autosize) {
        Taro.nextTick(() => {
          setTimeout(() => {
            if (Taro.getEnv() === "ALIPAY" || Taro.getEnv() === "WEB") {
              getRefWidth();
              copyHeight();
            } else {
              getRefHeight();
            }
          }, 300);
        });
      }
    });
    const composing = ref(false);
    const startComposing = () => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        composing.value = true;
      }
    };
    const endComposing = ({ target }) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (composing.value) {
          composing.value = false;
          target.dispatchEvent(new Event("input"));
        }
      }
    };
    return {
      env,
      textareaRef,
      classes,
      styles,
      disabled,
      change,
      focus,
      blur,
      translate,
      copyTxtStyle,
      startComposing,
      endComposing
    };
  }
});
const _hoisted_1 = ["rows", "disabled", "value", "maxlength", "placeholder", "auto-focus"];
const _hoisted_2 = {
  key: 0,
  class: "nut-textarea__limit"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("textarea", mergeProps({ ref: "textareaRef" }, _ctx.$attrs, {
      class: ["nut-textarea__textarea", _ctx.env == "ALIPAY" && "nut-textarea__ali"],
      style: _ctx.styles,
      rows: _ctx.rows,
      disabled: _ctx.disabled || _ctx.readonly,
      value: _ctx.modelValue,
      "show-count": false,
      maxlength: _ctx.maxLength ? _ctx.maxLength : -1,
      placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
      "auto-focus": _ctx.autofocus,
      onInput: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
      onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.blur && _ctx.blur(...args)),
      onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args)),
      onChange: _cache[3] || (_cache[3] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
      onCompositionend: _cache[4] || (_cache[4] = (...args) => _ctx.endComposing && _ctx.endComposing(...args)),
      onCompositionstart: _cache[5] || (_cache[5] = (...args) => _ctx.startComposing && _ctx.startComposing(...args))
    }), null, 16, _hoisted_1),
    createTextVNode(),
    _ctx.limitShow ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + toDisplayString(_ctx.maxLength), 1)) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.autosize ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "nut-textarea__cpoyText",
      style: normalizeStyle(_ctx.copyTxtStyle)
    }, toDisplayString(_ctx.modelValue), 5)) : createCommentVNode("", true)
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
