import { computed, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("divider");
const _sfc_main = create({
  props: {
    contentPosition: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: false
    },
    hairline: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props, context) {
    const classes = computed(() => {
      const prefixCls = "nut-divider";
      if (props.direction === "horizontal") {
        return {
          [prefixCls]: true,
          [`${prefixCls}-center`]: context.slots.default,
          [`${prefixCls}-left`]: props.contentPosition === "left",
          [`${prefixCls}-right`]: props.contentPosition === "right",
          [`${prefixCls}-dashed`]: props.dashed,
          [`${prefixCls}-hairline`]: props.hairline
        };
      } else {
        return {
          [prefixCls]: true,
          [`${prefixCls}-vertical`]: props.direction === "vertical"
        };
      }
    });
    return { classes };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes)
  }, [
    _ctx.direction === "horizontal" ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
