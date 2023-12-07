import { defineComponent, unref, openBlock, createElementBlock, normalizeProps, mergeProps, renderSlot } from "vue";
import Taro from "@tarojs/taro";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.taro",
  setup(__props) {
    return (_ctx, _cache) => {
      return unref(Taro).getEnv() === unref(Taro).ENV_TYPE.WEB ? (openBlock(), createElementBlock("taro-scroll-view-core", normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs)), [
        renderSlot(_ctx.$slots, "default")
      ], 16)) : (openBlock(), createElementBlock("scroll-view", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)), [
        renderSlot(_ctx.$slots, "default")
      ], 16));
    };
  }
});
export {
  _sfc_main as _
};
