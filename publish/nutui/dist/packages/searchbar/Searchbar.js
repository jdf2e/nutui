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
import { toRef, reactive, computed, ref, onMounted, toRefs, openBlock, createElementBlock, normalizeClass, normalizeStyle, toDisplayString, createCommentVNode, renderSlot, createElementVNode, withModifiers, withDirectives, createBlock, resolveDynamicComponent, vShow } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { CircleClose } from "@nutui/icons-vue";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("searchbar");
const cN = "NutSearchbar";
const _sfc_main = create({
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    shape: {
      type: String,
      default: "round"
    },
    maxLength: {
      type: [String, Number],
      default: "9999"
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: Object,
      default: () => CircleClose
    },
    background: {
      type: String,
      default: ""
    },
    inputBackground: {
      type: String,
      default: ""
    },
    focusStyle: {
      type: Object,
      default: () => ({})
    },
    autofocus: {
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
    inputAlign: {
      type: String,
      default: "left"
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "change",
    "update:modelValue",
    "blur",
    "focus",
    "clear",
    "search",
    "clickInput",
    "clickLeftIcon",
    "clickRightIcon"
  ],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const translate = useLocale(cN);
    const state = reactive({
      active: false
    });
    const searchbarStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const inputSearchbarStyle = computed(() => {
      return {
        background: props.inputBackground
      };
    });
    const valueChange = (event) => {
      const input = event.target;
      let val = input.value;
      if (props.maxLength && val.length > Number(props.maxLength)) {
        val = val.slice(0, Number(props.maxLength));
      }
      emit("update:modelValue", val, event);
      emit("change", val, event);
    };
    const focusCss = ref({});
    const valueFocus = (event) => {
      const input = event.target;
      let value = input.value;
      state.active = true;
      focusCss.value = props.focusStyle;
      emit("focus", value, event);
    };
    const valueBlur = (event) => {
      setTimeout(() => {
        state.active = false;
      }, 0);
      const input = event.target;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      focusCss.value = {};
      emit("blur", value, event);
    };
    const handleClear = (event) => {
      emit("update:modelValue", "", event);
      emit("change", "", event);
      emit("clear", "");
    };
    const handleSubmit = () => {
      emit("search", props.modelValue);
    };
    const clickInput = (event) => {
      emit("clickInput", event);
    };
    const leftIconClick = (event) => {
      emit("clickLeftIcon", props.modelValue, event);
    };
    const rightIconClick = (event) => {
      emit("clickRightIcon", props.modelValue, event);
    };
    const styleSearchbar = computed(() => {
      const style = {
        textAlign: props.inputAlign
      };
      return style;
    });
    const inputsearch = ref(null);
    onMounted(() => {
      if (props.autofocus) {
        inputsearch.value.focus();
      }
    });
    return __spreadProps(__spreadValues({
      renderIcon,
      inputsearch
    }, toRefs(state)), {
      valueChange,
      valueFocus,
      valueBlur,
      handleClear,
      handleSubmit,
      searchbarStyle,
      inputSearchbarStyle,
      focusCss,
      translate,
      clickInput,
      leftIconClick,
      rightIconClick,
      styleSearchbar,
      disabled
    });
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-searchbar__search-label"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__left-search-icon"
};
const _hoisted_3 = ["type", "maxlength", "placeholder", "value", "disabled", "readonly"];
const _hoisted_4 = {
  key: 1,
  class: "nut-searchbar__search-icon nut-searchbar__iptright-search-icon"
};
const _hoisted_5 = {
  key: 2,
  class: "nut-searchbar__search-icon nut-searchbar__right-search-icon"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["nut-searchbar", { "safe-area-inset-bottom": _ctx.safeAreaInsetBottom }]),
    style: normalizeStyle(_ctx.searchbarStyle)
  }, [
    _ctx.label ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.label), 1)) : createCommentVNode("", true),
    _ctx.$slots.leftout ? (openBlock(), createElementBlock("view", _hoisted_2, [
      renderSlot(_ctx.$slots, "leftout")
    ])) : createCommentVNode("", true),
    createElementVNode("view", {
      class: normalizeClass([`nut-searchbar__search-input`, _ctx.shape]),
      style: normalizeStyle(__spreadValues(__spreadValues({}, _ctx.inputSearchbarStyle), _ctx.focusCss))
    }, [
      _ctx.$slots.leftin ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "nut-searchbar__search-icon nut-searchbar__iptleft-search-icon",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.leftIconClick && _ctx.leftIconClick(...args))
      }, [
        renderSlot(_ctx.$slots, "leftin")
      ])) : createCommentVNode("", true),
      createElementVNode("view", {
        class: normalizeClass(["nut-searchbar__input-inner", _ctx.$slots.rightin && "nut-searchbar__input-inner-absolute"])
      }, [
        createElementVNode("form", {
          class: "nut-searchbar__input-form",
          action: "#",
          onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args), ["prevent"]))
        }, [
          createElementVNode("input", {
            ref: "inputsearch",
            class: normalizeClass(["nut-searchbar__input-bar", _ctx.clearable && "nut-searchbar__input-bar_clear"]),
            type: _ctx.inputType,
            maxlength: _ctx.maxLength,
            placeholder: _ctx.placeholder || _ctx.translate("placeholder"),
            value: _ctx.modelValue,
            disabled: _ctx.disabled,
            readonly: _ctx.readonly,
            style: normalizeStyle(_ctx.styleSearchbar),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.clickInput && _ctx.clickInput(...args)),
            onInput: _cache[2] || (_cache[2] = (...args) => _ctx.valueChange && _ctx.valueChange(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.valueFocus && _ctx.valueFocus(...args)),
            onBlur: _cache[4] || (_cache[4] = (...args) => _ctx.valueBlur && _ctx.valueBlur(...args))
          }, null, 46, _hoisted_3)
        ], 32)
      ], 2),
      createElementVNode("view", {
        class: normalizeClass(["nut-searchbar__input-inner-icon", _ctx.$slots.rightin && "nut-searchbar__input-inner-icon-absolute"])
      }, [
        _ctx.clearable ? withDirectives((openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-searchbar__search-icon nut-searchbar__input-clear",
          onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleClear && _ctx.handleClear(...args))
        }, [
          _ctx.$slots["clear-icon"] ? renderSlot(_ctx.$slots, "clear-icon", { key: 0 }) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.clearIcon)), { key: 1 }))
        ], 512)), [
          [vShow, String(_ctx.modelValue).length > 0]
        ]) : createCommentVNode("", true),
        _ctx.$slots.rightin ? (openBlock(), createElementBlock("view", _hoisted_4, [
          renderSlot(_ctx.$slots, "rightin")
        ])) : createCommentVNode("", true)
      ], 2)
    ], 6),
    _ctx.$slots.rightout ? (openBlock(), createElementBlock("view", _hoisted_5, [
      renderSlot(_ctx.$slots, "rightout")
    ])) : createCommentVNode("", true)
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
