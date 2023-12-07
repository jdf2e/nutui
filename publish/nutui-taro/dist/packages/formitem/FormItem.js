import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
import { computed, inject, resolveComponent, openBlock, createBlock, normalizeClass, normalizeStyle, withCtx, createElementBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createElementVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import NutCell from "../cell/Cell.js";
import { F as FORM_KEY } from "../types-Ynmct7na.js";
import { u as useParent } from "../useParent-KIxqkovs.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "@nutui/icons-vue-taro";
const { create } = createComponent("form-item");
const _sfc_main = create({
  inheritAttrs: false,
  props: {
    prop: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    showErrorMessage: {
      type: Boolean,
      default: true
    },
    showErrorLine: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    labelAlign: {
      type: String,
      default: ""
    },
    errorMessageAlign: {
      type: String,
      default: ""
    },
    bodyAlign: {
      type: String,
      default: ""
    },
    labelPosition: {
      type: String,
      default: ""
    },
    starPosition: {
      type: String,
      default: ""
    }
  },
  components: {
    NutCell
  },
  setup(props, { slots }) {
    const { parent: parentObj } = useParent(FORM_KEY);
    const isRequired = computed(() => {
      var _a;
      const rules = (_a = parentObj.props) == null ? void 0 : _a.rules;
      let formRequired = false;
      for (const key in rules) {
        if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
          formRequired = rules[key].some((rule) => rule.required);
        }
      }
      return props.required || props.rules.some((rule) => rule.required) || formRequired;
    });
    const labelPositionClass = computed(() => {
      const labelPosition = parentObj.props.labelPosition;
      const position = props.labelPosition ? props.labelPosition : labelPosition;
      return position !== "left" ? `nut-form-item__${position}` : "";
    });
    const starPositionClass = computed(() => {
      const starPosition = parentObj.props.starPosition;
      const position = props.starPosition ? props.starPosition : starPosition;
      return position !== "left" ? `nut-form-item__star-${position}` : "";
    });
    const parent = inject("formErrorTip");
    const labelStyle = computed(() => {
      return {
        width: pxCheck(props.labelWidth),
        textAlign: props.labelAlign
      };
    });
    const bodyStyle = computed(() => {
      return {
        textAlign: props.bodyAlign
      };
    });
    const errorMessageStyle = computed(() => {
      return {
        textAlign: props.errorMessageAlign
      };
    });
    const getSlots = (name) => slots[name];
    return {
      parent,
      labelStyle,
      bodyStyle,
      errorMessageStyle,
      getSlots,
      isRequired,
      labelPositionClass,
      starPositionClass
    };
  }
});
const _hoisted_1 = { class: "nut-cell__value nut-form-item__body" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_cell = resolveComponent("nut-cell");
  return openBlock(), createBlock(_component_nut_cell, {
    class: normalizeClass(["nut-form-item", [{ error: _ctx.parent[_ctx.prop], line: _ctx.showErrorLine }, _ctx.$attrs.class, _ctx.labelPositionClass]]),
    style: normalizeStyle(_ctx.$attrs.style)
  }, {
    default: withCtx(() => [
      _ctx.label || _ctx.getSlots("label") ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["nut-cell__title nut-form-item__label", { required: _ctx.isRequired, [_ctx.starPositionClass]: _ctx.starPositionClass }]),
        style: normalizeStyle(_ctx.labelStyle)
      }, [
        renderSlot(_ctx.$slots, "label", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ], 6)) : createCommentVNode("", true),
      createTextVNode(),
      createElementVNode("view", _hoisted_1, [
        createElementVNode("view", {
          class: "nut-form-item__body__slots",
          style: normalizeStyle(_ctx.bodyStyle)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 4),
        createTextVNode(),
        _ctx.parent[_ctx.prop] && _ctx.showErrorMessage ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "nut-form-item__body__tips",
          style: normalizeStyle(_ctx.errorMessageStyle)
        }, toDisplayString(_ctx.parent[_ctx.prop]), 5)) : createCommentVNode("", true)
      ])
    ]),
    _: 3
  }, 8, ["class", "style"]);
}
const NutFormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutFormItem as default
};
