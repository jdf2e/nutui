import { provide, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { L as LAYOUT_KEY } from "../types-Ww4ErYJT.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("row");
const _sfc_main = create({
  props: {
    type: {
      type: String,
      default: ""
    },
    gutter: {
      type: [String, Number],
      default: ""
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    flexWrap: {
      type: String,
      default: "nowrap"
    }
  },
  setup(props) {
    const prefixCls = "nut-row";
    provide(LAYOUT_KEY, props.gutter);
    const getClass = (prefix, type) => {
      return prefix ? type ? `nut-row-${prefix}-${type}` : "" : `nut-row-${type}`;
    };
    const classes = computed(() => {
      return [
        prefixCls,
        getClass("", props.type),
        getClass("justify", props.justify),
        getClass("align", props.align),
        getClass("flex", props.flexWrap)
      ];
    });
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
