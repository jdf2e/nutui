import { ref, watch, provide, openBlock, createElementBlock, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { C as COLLAPSE_KEY } from "../types-4IflWeQO.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("collapse");
const _sfc_main = create({
  props: {
    modelValue: {
      type: [String, Number, Array],
      default: ""
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const nutCollapseRef = ref(null);
    const innerValue = ref(props.modelValue || (props.accordion ? "" : []));
    watch(
      () => props.modelValue,
      (val) => {
        innerValue.value = val;
      }
    );
    const changeVal = (val, name, status = true) => {
      innerValue.value = val;
      emit("update:modelValue", val);
      emit("change", val, name, status);
    };
    const updateVal = (name) => {
      if (props.accordion) {
        if (innerValue.value === name) {
          changeVal("", name, false);
        } else {
          changeVal(name, name, true);
        }
      } else {
        if (Array.isArray(innerValue.value)) {
          if (innerValue.value.includes(name)) {
            const newValue = innerValue.value.filter((v) => v !== name);
            changeVal(newValue, name, false);
          } else {
            const newValue = innerValue.value.concat([name]);
            changeVal(newValue, name, true);
          }
        } else {
          console.warn("[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组");
        }
      }
    };
    const isExpanded = (name) => {
      if (props.accordion) {
        return innerValue.value === name;
      } else if (Array.isArray(innerValue.value)) {
        return innerValue.value.includes(name);
      }
      return false;
    };
    provide(COLLAPSE_KEY, {
      updateVal,
      isExpanded
    });
    return { nutCollapseRef };
  }
});
const _hoisted_1 = {
  ref: "nutCollapseRef",
  class: "nut-collapse"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ], 512);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
