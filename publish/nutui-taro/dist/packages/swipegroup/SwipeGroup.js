import { ref, provide, openBlock, createElementBlock, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { S as SWIPE_KEY } from "../types-qOrhXtA_.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("swipe-group");
const _sfc_main = create({
  props: {
    lock: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const swipeGroupRef = ref(null);
    const name = ref("");
    const update = (n) => {
      name.value = n;
    };
    provide(SWIPE_KEY, {
      update,
      lock: props.lock,
      name
    });
    return { swipeGroupRef };
  }
});
const _hoisted_1 = {
  ref: "swipeGroupRef",
  class: "nut-swipe-group"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ], 512);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
