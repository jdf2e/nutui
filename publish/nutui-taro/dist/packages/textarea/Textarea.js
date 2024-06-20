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
import { defineComponent, toRef, ref, computed, watch, nextTick, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, mergeProps, unref, createTextVNode, toDisplayString, createCommentVNode, normalizeStyle } from "vue";
import Taro from "@tarojs/taro";
import { u as useLocale } from "../index-5sMqqUcW.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["rows", "disabled", "value", "maxlength", "placeholder", "auto-focus"];
const _hoisted_2 = {
  key: 0,
  class: "nut-textarea__limit"
};
const cN = "NutTextarea";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: cN,
  inheritAttrs: false
}), {
  __name: "textarea.taro",
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
    const textareaHeight = ref(20);
    const heightSet = ref("auto");
    const composing = ref(false);
    const env = Taro.getEnv();
    const classes = computed(() => {
      const prefixCls = "nut-textarea";
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });
    const styles = computed(() => {
      const styleObj = {};
      if (props.textAlign) {
        styleObj["textAlign"] = props.textAlign;
      }
      if (props.autosize) {
        styleObj["height"] = heightSet.value;
      }
      return styleObj;
    });
    const copyTextStyle = ref({
      wordBreak: "break-all",
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
      if (env === Taro.ENV_TYPE.WEB) {
        if (!composing.value) {
          _onInput(event);
        }
      } else {
        _onInput(event);
      }
    };
    const _onInput = (event) => {
      const input = event.target;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      emitChange(value, event);
    };
    const focus = (event) => {
      if (disabled.value || props.readonly)
        return;
      emit("focus", event);
    };
    const blur = (event) => {
      if (disabled.value || props.readonly)
        return;
      const input = event.target;
      const value = input.value;
      emitChange(value, event);
      emit("blur", event);
    };
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
            if (env !== Taro.ENV_TYPE.WEAPP) {
              textareaHeight.value = _item[0]["height"] || 20;
            }
            copyTextStyle.value.width = _item[0]["width"] + "px";
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
          copyTextStyle.value.width = res[0]["width"] + "px";
        }
      });
    };
    onMounted(() => {
      if (props.autosize) {
        Taro.nextTick(() => {
          setTimeout(() => {
            if (env === "ALIPAY" || env === "WEB") {
              getRefWidth();
              copyHeight();
            } else {
              getRefHeight();
            }
          }, 300);
        });
      }
    });
    const startComposing = () => {
      if (env === Taro.ENV_TYPE.WEB) {
        composing.value = true;
      }
    };
    const endComposing = ({ target }) => {
      var _a;
      if (env === Taro.ENV_TYPE.WEB) {
        if (composing.value) {
          composing.value = false;
          if (target) {
            (_a = target.dispatchEvent) == null ? void 0 : _a.call(target, new Event("input"));
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        createElementVNode("textarea", mergeProps({
          ref_key: "textareaRef",
          ref: textareaRef
        }, _ctx.$attrs, {
          class: ["nut-textarea__textarea", unref(env) == "ALIPAY" && "nut-textarea__ali"],
          style: styles.value,
          rows: _ctx.rows,
          disabled: unref(disabled) || _ctx.readonly ? unref(disabled) || _ctx.readonly : void 0,
          value: _ctx.modelValue,
          "show-count": false,
          maxlength: _ctx.maxLength ? _ctx.maxLength : -1,
          placeholder: _ctx.placeholder || unref(translate)("placeholder"),
          "auto-focus": _ctx.autofocus ? true : void 0,
          onInput: change,
          onBlur: blur,
          onFocus: focus,
          onChange: endComposing,
          onCompositionend: endComposing,
          onCompositionstart: startComposing
        }), null, 16, _hoisted_1),
        createTextVNode(),
        _ctx.limitShow ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.modelValue ? _ctx.modelValue.length : 0) + "/" + toDisplayString(_ctx.maxLength), 1)) : createCommentVNode("", true),
        createTextVNode(),
        _ctx.autosize ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "nut-textarea__cpoyText",
          style: normalizeStyle(copyTextStyle.value)
        }, toDisplayString(_ctx.modelValue), 5)) : createCommentVNode("", true)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Textarea,
  _sfc_main as default
};
