var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { T as TABS_KEY } from "../types-BXlnzugj.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("tab-pane");
const _sfc_main = create({
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    paneKey: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props) {
    const parentOption = inject(TABS_KEY);
    const paneStyle = computed(() => {
      return {
        display: (parentOption == null ? void 0 : parentOption.animatedTime.value) == 0 && props.paneKey != (parentOption == null ? void 0 : parentOption.activeKey.value) ? "none" : void 0
      };
    });
    return __spreadProps(__spreadValues({}, parentOption), {
      paneStyle
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["nut-tab-pane", { inactive: _ctx.paneKey != _ctx.activeKey && _ctx.autoHeight }]),
    style: normalizeStyle(_ctx.paneStyle)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
const NutTabPane = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutTabPane as default
};
