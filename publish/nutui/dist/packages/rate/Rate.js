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
import { toRef, ref, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, createElementVNode, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode } from "vue";
import { StarFillN } from "@nutui/icons-vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as renderIcon } from "../renderIcon--EgZu5_5.js";
import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
import { u as useTouch } from "../index-084nl_oE.js";
import { u as useFormDisabled } from "../common-FZL3qC99.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("rate");
const _sfc_main = create({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    customIcon: {
      type: Object,
      default: () => {
        return StarFillN;
      }
    },
    size: {
      type: [String, Number],
      default: void 0
    },
    activeColor: {
      type: String,
      default: ""
    },
    voidColor: {
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
    allowHalf: {
      type: Boolean,
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    },
    spacing: {
      type: [String, Number],
      default: void 0
    }
  },
  components: { StarFillN },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const rateRefs = ref([]);
    const updateVal = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
    };
    const onClick = (e, index) => {
      if (disabled.value || props.readonly)
        return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
        value = 0;
      } else {
        value = index;
        if (props.allowHalf && e == 2) {
          value -= 0.5;
        }
      }
      updateVal(value);
    };
    const getScoreByPosition = (x, rateRefs2, allowHalf) => {
      let v = 0;
      for (let index = rateRefs2.value.length - 1; index >= 0; index--) {
        const item = rateRefs2.value[index];
        if (x > item.offsetLeft) {
          if (allowHalf) {
            v = index + (x > item.offsetLeft + item.clientWidth / 2 ? 1 : 0.5);
          } else {
            v = index + 1;
          }
          break;
        }
      }
      return v;
    };
    const touch = useTouch();
    const touchMethods = {
      onTouchStart(event) {
        if (!props.touchable || props.readonly)
          return;
        touch.start(event);
      },
      onTouchMove(event) {
        if (!props.touchable)
          return;
        touch.move(event);
        if (touch.isHorizontal()) {
          if (rateRefs.value) {
            event.preventDefault();
            updateVal(getScoreByPosition(touch.moveX.value, rateRefs, props.allowHalf));
          }
        }
      }
    };
    const refRandomId = Math.random().toString(36).slice(-8);
    return __spreadProps(__spreadValues({}, touchMethods), {
      onClick,
      pxCheck,
      rateRefs,
      refRandomId,
      renderIcon,
      slots,
      disabled
    });
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = { class: "nut-rate-item__icon--full" };
const _hoisted_3 = {
  key: 0,
  class: "nut-rate-item__icon--half"
};
const _hoisted_4 = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-rate",
    onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
    onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.count), (n) => {
      return openBlock(), createElementBlock("view", {
        id: "rateRefs-" + _ctx.refRandomId + n,
        key: n,
        ref_for: true,
        ref: "rateRefs",
        class: "nut-rate-item",
        style: normalizeStyle(n < Number(_ctx.count) ? { marginRight: _ctx.pxCheck(_ctx.spacing) } : {})
      }, [
        createElementVNode("view", _hoisted_2, [
          (openBlock(), createBlock(resolveDynamicComponent(
            _ctx.renderIcon(_ctx.customIcon, {
              width: _ctx.size,
              height: _ctx.size,
              size: _ctx.size,
              color: n <= Number(_ctx.modelValue) ? _ctx.activeColor : _ctx.voidColor
            })
          ), {
            class: normalizeClass(["nut-rate-item__icon", { "nut-rate-item__icon--disabled": _ctx.disabled || n > Number(_ctx.modelValue) }]),
            onClick: ($event) => _ctx.onClick(1, n)
          }, null, 8, ["class", "onClick"]))
        ]),
        _ctx.allowHalf && Number(_ctx.modelValue) + 1 > n ? (openBlock(), createElementBlock("view", _hoisted_3, [
          (openBlock(), createBlock(resolveDynamicComponent(
            _ctx.renderIcon(_ctx.customIcon, {
              width: _ctx.size,
              height: _ctx.size,
              size: _ctx.size,
              color: n <= Number(_ctx.modelValue) + 1 ? _ctx.activeColor : _ctx.voidColor
            })
          ), {
            class: "nut-rate-item__icon",
            onClick: ($event) => _ctx.onClick(2, n)
          }, null, 8, ["onClick"]))
        ])) : _ctx.allowHalf && Number(_ctx.modelValue) + 1 < n ? (openBlock(), createElementBlock("view", _hoisted_4, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.customIcon, { width: _ctx.size, height: _ctx.size, size: _ctx.size, color: _ctx.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: ($event) => _ctx.onClick(2, n)
          }, null, 8, ["onClick"]))
        ])) : createCommentVNode("", true)
      ], 12, _hoisted_1);
    }), 128))
  ], 32);
}
const NutRate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutRate as default
};
