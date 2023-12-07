import { ref, openBlock, createElementBlock, Fragment, renderList, normalizeStyle, createElementVNode, createBlock, resolveDynamicComponent, normalizeClass, createTextVNode, createCommentVNode } from "vue";
import { StarFillN } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as renderIcon } from "../renderIcon--EgZu5_5.js";
import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
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
    spacing: {
      type: [String, Number],
      default: void 0
    }
  },
  components: { StarFillN },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const rateRefs = ref([]);
    const updateVal = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
    };
    const onClick = (e, index) => {
      if (props.disabled || props.readonly)
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
    const refRandomId = Math.random().toString(36).slice(-8);
    return {
      onClick,
      pxCheck,
      rateRefs,
      refRandomId,
      renderIcon,
      slots
    };
  }
});
const _hoisted_1 = { class: "nut-rate" };
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "nut-rate-item__icon--full" };
const _hoisted_4 = {
  key: 0,
  class: "nut-rate-item__icon--half"
};
const _hoisted_5 = {
  key: 1,
  class: "nut-rate-item__icon--half"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(Number(_ctx.count), (n) => {
      return openBlock(), createElementBlock("view", {
        id: "rateRefs-" + _ctx.refRandomId + n,
        key: n,
        ref_for: true,
        ref: "rateRefs",
        class: "nut-rate-item",
        style: normalizeStyle(n < Number(_ctx.count) ? { marginRight: _ctx.pxCheck(_ctx.spacing) } : {})
      }, [
        createElementVNode("view", _hoisted_3, [
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
        createTextVNode(),
        _ctx.allowHalf && Number(_ctx.modelValue) + 1 > n ? (openBlock(), createElementBlock("view", _hoisted_4, [
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
        ])) : _ctx.allowHalf && Number(_ctx.modelValue) + 1 < n ? (openBlock(), createElementBlock("view", _hoisted_5, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.customIcon, { width: _ctx.size, height: _ctx.size, size: _ctx.size, color: _ctx.voidColor })), {
            class: "nut-rate-item__icon nut-rate-item__icon--disabled",
            onClick: ($event) => _ctx.onClick(2, n)
          }, null, 8, ["onClick"]))
        ])) : createCommentVNode("", true)
      ], 12, _hoisted_2);
    }), 128))
  ]);
}
const NutRate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutRate as default
};
