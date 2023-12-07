import { toRefs, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createBlock, createCommentVNode, createTextVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Loading } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("button");
const _sfc_main = create({
  components: { Loading },
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    formType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);
    const handleClick = (event) => {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });
    const getStyle = computed(() => {
      var _a;
      const style = {};
      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";
          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }
      return style;
    });
    return {
      handleClick,
      classes,
      getStyle,
      Taro
    };
  }
});
const _hoisted_1 = ["type", "formType"];
const _hoisted_2 = { class: "nut-button__wrap" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.getStyle),
    type: _ctx.Taro.getEnv() === _ctx.Taro.ENV_TYPE.WEB ? _ctx.formType : void 0,
    formType: _ctx.formType === "button" ? void 0 : _ctx.formType,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("view", _hoisted_2, [
      _ctx.loading ? (openBlock(), createBlock(_component_Loading, {
        key: 0,
        class: "nut-icon-loading"
      })) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.$slots.icon && !_ctx.loading ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.$slots.default ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: normalizeClass({ "nut-button__text": _ctx.$slots.icon || _ctx.loading })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)) : createCommentVNode("", true)
    ])
  ], 14, _hoisted_1);
}
const NutButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutButton as default
};
