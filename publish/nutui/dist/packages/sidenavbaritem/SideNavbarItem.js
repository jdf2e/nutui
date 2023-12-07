import { c as createComponent } from "../component-TCzwHGVq.js";
import { openBlock, createElementBlock, withModifiers, createElementVNode, toDisplayString } from "vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("side-navbar-item");
const _sfc_main = create({
  props: {
    title: {
      type: String,
      default: ""
    },
    ikey: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup: (props, { emit }) => {
    const handleClick = () => {
      emit("click");
    };
    return {
      handleClick
    };
  }
});
const _hoisted_1 = ["ikey"];
const _hoisted_2 = { class: "nut-side-navbar-item__title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-side-navbar-item",
    ikey: _ctx.ikey,
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
  }, [
    createElementVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1)
  ], 8, _hoisted_1);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
