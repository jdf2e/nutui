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
import { ref, reactive, onMounted, toRefs, openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("side-navbar");
const _sfc_main = create({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  setup: (props) => {
    const list = ref(null);
    const state = reactive({
      count: 1
    });
    const setPaddingLeft = (nodeList, level = 1) => {
      var _a;
      for (let i = 0; i < nodeList.length; i++) {
        let item = nodeList[i];
        if ((_a = item == null ? void 0 : item.children) == null ? void 0 : _a[0]) {
          item.children[0].style.paddingLeft = +props.offset * level + "px";
          if (!item.className.includes("nut-side-navbar-item")) {
            setPaddingLeft(Array.from(item.children[1].children), ++state.count);
          }
        }
      }
      state.count--;
    };
    const handleSlots = () => {
      let childNodes = list.value.childNodes;
      if (childNodes == null ? void 0 : childNodes.length) {
        childNodes = Array.from(childNodes).filter((item) => item.nodeType !== 3).map((item) => {
          return item;
        });
        setPaddingLeft(childNodes);
      }
    };
    onMounted(() => {
      handleSlots();
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      list
    });
  }
});
const _hoisted_1 = { class: "nut-side-navbar" };
const _hoisted_2 = { class: "nut-side-navbar__content" };
const _hoisted_3 = {
  ref: "list",
  class: "nut-side-navbar__content__list"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", _hoisted_2, [
      createElementVNode("view", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ], 512)
    ])
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
