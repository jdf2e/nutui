import { computed, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createTextVNode, createBlock, createCommentVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Close } from "@nutui/icons-vue-taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("tag");
const _sfc_main = create({
  props: {
    color: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    mark: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Close
  },
  emits: ["close", "click"],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = "nut-tag";
      return {
        [prefixCls]: true,
        [`${prefixCls}--${props.type}`]: props.type,
        [`${prefixCls}--plain`]: props.plain,
        [`${prefixCls}--round`]: props.round,
        [`${prefixCls}--mark`]: props.mark
      };
    });
    const style = computed(() => {
      const style2 = {};
      if (props.textColor) {
        style2.color = props.textColor;
      } else if (props.color && props.plain) {
        style2.color = props.color;
      }
      if (props.plain) {
        style2.background = "#fff";
        style2["border-color"] = props.color;
      } else if (props.color) {
        style2.background = props.color;
      }
      return style2;
    });
    const onClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const onClick = (event) => {
      emit("click", event);
    };
    return {
      classes,
      style,
      onClose,
      onClick
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Close = resolveComponent("Close");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(),
    _ctx.closeable ? (openBlock(), createBlock(_component_Close, {
      key: 0,
      class: "nut-tag--close",
      size: "11",
      onClick: _ctx.onClose
    }, null, 8, ["onClick"])) : createCommentVNode("", true)
  ], 6);
}
const NutTag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutTag as default
};
