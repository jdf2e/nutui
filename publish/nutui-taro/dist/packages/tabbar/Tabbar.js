import { toRefs, ref, reactive, provide, watch, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import Taro from "@tarojs/taro";
import { T as TABBAR_KEY } from "../types-MuhxzCWc.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
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
    size: {
      type: String,
      default: "20px"
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
    const refRandomId = Math.random().toString(36).slice(-8);
    const { bottom, placeholder } = toRefs(props);
    const height = ref("auto");
    const mdValue = reactive({
      val: props.modelValue,
      children: []
    });
    const nutTabbarRef = ref(null);
    function changeIndex(index, active) {
      emit("update:modelValue", active);
      parentData.modelValue = active;
      emit("tabSwitch", parentData.children[index], active);
    }
    const parentData = reactive({
      children: mdValue.children,
      size: props.size,
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
        Taro.nextTick(() => {
          useTaroRect(nutTabbarRef).then(
            (rect) => {
              height.value = `${rect.height}px`;
            },
            () => {
            }
          );
        });
      }
    });
    return {
      refRandomId,
      changeIndex,
      nutTabbarRef,
      height
    };
  }
});
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
    style: normalizeStyle({ height: _ctx.height })
  }, [
    createElementVNode("view", {
      id: `nut-tabbar-${_ctx.refRandomId}`,
      ref: "nutTabbarRef",
      class: normalizeClass(["nut-tabbar", { "nut-tabbar-bottom": _ctx.bottom, "nut-tabbar-safebottom": _ctx.safeAreaInsetBottom }])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 10, _hoisted_1)
  ], 6);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
