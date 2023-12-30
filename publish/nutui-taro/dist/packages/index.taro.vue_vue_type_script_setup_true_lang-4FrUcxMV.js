import { defineComponent, resolveComponent, unref, openBlock, createBlock, normalizeProps, mergeProps, withCtx, renderSlot } from "vue";
import Taro from "@tarojs/taro";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.taro",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_taro_scroll_view_core = resolveComponent("taro-scroll-view-core");
      const _component_scroll_view = resolveComponent("scroll-view");
      return unref(Taro).getEnv() === unref(Taro).ENV_TYPE.WEB ? (openBlock(), createBlock(_component_taro_scroll_view_core, normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16)) : (openBlock(), createBlock(_component_scroll_view, normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16));
    };
  }
});
export {
  _sfc_main as _
};
