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
import { defineComponent, ref, provide, openBlock, createElementBlock, renderSlot } from "vue";
import { S as SWIPE_KEY } from "../types-BWhKcf4T.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutSwipeGroup"
}), {
  __name: "swipe-group",
  props: {
    lock: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "swipeGroupRef",
        ref: swipeGroupRef,
        class: "nut-swipe-group"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as SwipeGroup,
  _sfc_main as default
};
