import { inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { L as LAYOUT_KEY } from "../types-Ww4ErYJT.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("col");
const _sfc_main = create({
  props: {
    span: {
      type: [String, Number],
      default: "24"
    },
    offset: {
      type: [String, Number],
      default: "0"
    }
  },
  emits: [],
  setup(props) {
    const prefixCls = "nut-col";
    const gutter = inject(LAYOUT_KEY);
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [prefixCls + "-gutter"]: gutter,
        ["nut-col-" + props.span]: true,
        ["nut-col-offset-" + props.offset]: true
      };
    });
    const style = computed(() => {
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    });
    return {
      classes,
      style
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
