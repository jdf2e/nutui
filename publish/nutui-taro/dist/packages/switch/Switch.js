import { toRef, computed, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createVNode, createCommentVNode, createTextVNode, Fragment, withDirectives, toDisplayString, vShow } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { Loading1 } from "@nutui/icons-vue-taro";
import { u as useFormDisabled } from "../common-LvGbU-A3.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("switch");
const _sfc_main = create({
  components: { Loading1 },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "update:modelValue", "update:loading"],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disable"));
    const isActive = computed(() => props.modelValue === props.activeValue);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [isActive.value ? "nut-switch-open" : "nut-switch-close"]: true,
        [`${prefixCls}-disable`]: disabled.value,
        [`${prefixCls}-base`]: true
      };
    });
    const style = computed(() => {
      return {
        backgroundColor: isActive.value ? props.activeColor : props.inactiveColor
      };
    });
    let updateType = "";
    const onClick = (event) => {
      if (props.loading || disabled.value)
        return;
      const value = isActive.value ? props.inactiveValue : props.activeValue;
      updateType = "click";
      emit("update:modelValue", value);
      emit("change", value, event);
    };
    watch(
      () => props.modelValue,
      (v) => {
        if (updateType == "click") {
          updateType = "";
        } else {
          emit("change", v);
        }
      }
    );
    return {
      classes,
      style,
      isActive,
      onClick
    };
  }
});
const _hoisted_1 = { class: "nut-switch-button" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading1 = resolveComponent("Loading1");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [
    createElementVNode("view", _hoisted_1, [
      _ctx.loading ? renderSlot(_ctx.$slots, "icon", { key: 0 }, () => [
        createVNode(_component_Loading1, {
          name: "loading1",
          color: _ctx.activeColor
        }, null, 8, ["color"])
      ]) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.activeText ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        withDirectives(createElementVNode("view", { class: "nut-switch-label open" }, toDisplayString(_ctx.activeText), 513), [
          [vShow, _ctx.isActive]
        ]),
        createTextVNode(),
        withDirectives(createElementVNode("view", { class: "nut-switch-label close" }, toDisplayString(_ctx.inactiveText), 513), [
          [vShow, !_ctx.isActive]
        ])
      ], 64)) : createCommentVNode("", true)
    ])
  ], 6);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
