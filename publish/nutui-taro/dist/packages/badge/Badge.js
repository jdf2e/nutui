import { reactive, computed, openBlock, createElementBlock, withDirectives, createElementVNode, normalizeStyle, renderSlot, vShow, createTextVNode, normalizeClass, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("badge");
const _sfc_main = create({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 1e4
    },
    dot: {
      type: Boolean,
      default: false
    },
    bubble: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "0"
    },
    right: {
      type: String,
      default: "0"
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const state = reactive({});
    const stl = computed(() => {
      return {
        top: `${props.top}px`,
        right: `${props.right}px`,
        zIndex: props.zIndex,
        background: props.color
      };
    });
    const content = computed(() => {
      if (props.dot)
        return;
      const value = props.value;
      const max = props.max;
      if (typeof value === "number" && typeof max === "number") {
        return max < value ? `${max}+` : value;
      }
      return value;
    });
    return {
      state,
      stl,
      content
    };
  }
});
const _hoisted_1 = { class: "nut-badge" };
const _hoisted_2 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    withDirectives(createElementVNode("view", {
      class: "nut-badge__icon",
      style: normalizeStyle(_ctx.stl)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 4), [
      [vShow, !_ctx.hidden && !_ctx.dot && _ctx.$slots.icon]
    ]),
    createTextVNode(),
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(),
    withDirectives(createElementVNode("view", {
      class: normalizeClass(["nut-badge__content nut-badge__content--sup", { "nut-badge__content--dot": _ctx.dot, "nut-badge__content--bubble": !_ctx.dot && _ctx.bubble }]),
      style: normalizeStyle(_ctx.stl),
      textContent: toDisplayString(_ctx.content)
    }, null, 14, _hoisted_2), [
      [vShow, !_ctx.hidden && (_ctx.content || _ctx.dot)]
    ])
  ]);
}
const NutBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutBadge as default
};
