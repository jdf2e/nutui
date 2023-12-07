import { computed, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createCommentVNode, Fragment, createElementVNode, toDisplayString, createTextVNode, createBlock } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { u as useRouter } from "../index-Ii9XdkPy.js";
import { p as pxCheck } from "../pxCheck-OnXlN1NC.js";
import { Right } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("cell");
const _sfc_main = create({
  components: { Right },
  props: {
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    desc: { type: String, default: "" },
    descTextAlign: { type: String, default: "right" },
    isLink: { type: Boolean, default: false },
    to: [String, Object],
    replace: { type: Boolean, default: false },
    roundRadius: { type: [String, Number], default: "" },
    url: { type: String, default: "" },
    center: { type: Boolean, default: false },
    size: { type: String, default: "" }
    // large
  },
  emits: ["click"],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.isLink || props.to,
        [`${prefixCls}--center`]: props.center,
        [`${prefixCls}--large`]: props.size == "large"
      };
    });
    const router = useRouter();
    const baseStyle = computed(() => {
      return {
        borderRadius: pxCheck(props.roundRadius)
      };
    });
    const descStyle = computed(() => {
      return {
        textAlign: props.descTextAlign
      };
    });
    const handleClick = (event) => {
      emit("click", event);
      if (props.to && router) {
        router[props.replace ? "replace" : "push"](props.to);
      } else if (props.url) {
        props.replace ? location.replace(props.url) : location.href = props.url;
      }
    };
    return {
      handleClick,
      classes,
      baseStyle,
      descStyle
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-cell__icon"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-cell__title"
};
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "nut-cell__title-desc" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Right = resolveComponent("Right");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.baseStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _ctx.$slots.icon ? (openBlock(), createElementBlock("view", _hoisted_1, [
        renderSlot(_ctx.$slots, "icon")
      ])) : createCommentVNode("", true),
      _ctx.title || _ctx.subTitle || _ctx.$slots.title ? (openBlock(), createElementBlock("view", _hoisted_2, [
        _ctx.subTitle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createElementVNode("view", _hoisted_3, toDisplayString(_ctx.title), 1)
          ]),
          createElementVNode("view", _hoisted_4, toDisplayString(_ctx.subTitle), 1)
        ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ])) : createCommentVNode("", true),
      _ctx.desc || _ctx.$slots.desc ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: normalizeClass(["nut-cell__value", { "nut-cell__value--alone": !_ctx.title && !_ctx.subTitle && !_ctx.$slots.title }]),
        style: normalizeStyle(_ctx.descStyle)
      }, [
        renderSlot(_ctx.$slots, "desc", {}, () => [
          createTextVNode(toDisplayString(_ctx.desc), 1)
        ])
      ], 6)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "link", {}, () => [
        _ctx.isLink || _ctx.to ? (openBlock(), createBlock(_component_Right, {
          key: 0,
          class: "nut-cell__link"
        })) : createCommentVNode("", true)
      ])
    ])
  ], 6);
}
const NutCell = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutCell as default
};
