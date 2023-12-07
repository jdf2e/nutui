import { toRefs, ref, reactive, provide, watch, onMounted, nextTick, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { T as TABBAR_KEY } from "../types-Cq2YypZn.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("tabbar");
const _sfc_main = create({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "base"
    },
    unactiveColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Boolean,
      default: false
    }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(props, { emit }) {
    const { bottom, placeholder } = toRefs(props);
    const height = ref();
    const mdValue = reactive({
      val: props.modelValue,
      children: []
    });
    const nutTabbar = ref(null);
    function changeIndex(index2, active) {
      emit("update:modelValue", active);
      parentData.modelValue = active;
      emit("tabSwitch", parentData.children[index2], active);
    }
    const parentData = reactive({
      children: mdValue.children,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex
    });
    provide(TABBAR_KEY, parentData);
    watch(
      () => props.modelValue,
      (value) => {
        parentData.modelValue = value;
      }
    );
    onMounted(() => {
      if (bottom.value && placeholder.value) {
        nextTick(() => {
          var _a;
          height.value = (_a = nutTabbar == null ? void 0 : nutTabbar.value) == null ? void 0 : _a.getBoundingClientRect().height;
        });
      }
    });
    return {
      changeIndex,
      nutTabbar,
      height
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
    style: normalizeStyle({ height: _ctx.height + "px" })
  }, [
    createElementVNode("view", {
      ref: "nutTabbar",
      class: normalizeClass(["nut-tabbar", { "nut-tabbar-bottom": _ctx.bottom, "nut-tabbar-safebottom": _ctx.safeAreaInsetBottom }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
