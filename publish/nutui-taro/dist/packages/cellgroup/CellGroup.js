import { c as createComponent } from "../component-TCzwHGVq.js";
import { openBlock, createElementBlock, renderSlot, toDisplayString, createCommentVNode, createTextVNode, createElementVNode } from "vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("cell-group");
const _sfc_main = create({
  props: {
    title: { type: String, default: "" },
    desc: { type: String, default: "" }
  }
});
const _hoisted_1 = { class: "nut-cell-group" };
const _hoisted_2 = {
  key: 1,
  class: "nut-cell-group__title"
};
const _hoisted_3 = {
  key: 3,
  class: "nut-cell-group__desc"
};
const _hoisted_4 = { class: "nut-cell-group__wrap" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", { key: 0 }) : _ctx.title ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
    createTextVNode(),
    _ctx.$slots.desc ? renderSlot(_ctx.$slots, "desc", { key: 2 }) : _ctx.desc ? (openBlock(), createElementBlock("view", _hoisted_3, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true),
    createTextVNode(),
    createElementVNode("view", _hoisted_4, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const NutCellGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutCellGroup as default
};
