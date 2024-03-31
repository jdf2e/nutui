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
import { defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, nextTick } from "vue";
import { u as useChildren } from "../useChildren-BZ4-J79J.js";
import { T as TABBAR_KEY } from "../types-MuhxzCWc.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutTabbar"
}), {
  __name: "tabbar",
  props: {
    modelValue: { default: 0 },
    bottom: { type: Boolean, default: false },
    unactiveColor: { default: "" },
    activeColor: { default: "" },
    safeAreaInsetBottom: { type: Boolean, default: false },
    placeholder: { type: Boolean, default: false }
  },
  emits: ["tabSwitch", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const height = ref();
    const nutTabbar = ref(null);
    const activeIndex = ref(props.modelValue);
    const classes = computed(() => {
      const prefixCls = "nut-tabbar";
      return {
        [prefixCls]: true,
        "nut-tabbar-bottom": props.bottom,
        "nut-tabbar-safebottom": props.safeAreaInsetBottom
      };
    });
    const { children, linkChildren } = useChildren(TABBAR_KEY);
    const changeIndex = (index, active) => {
      activeIndex.value = active;
      emit("update:modelValue", active);
      emit("tabSwitch", children[index], active);
    };
    linkChildren({ props, activeIndex, changeIndex });
    watch(
      () => props.modelValue,
      (val) => {
        activeIndex.value = val;
      }
    );
    const updateHeight = () => {
      if (props.bottom && props.placeholder) {
        nextTick(() => {
          var _a;
          const nutTabbarHeight = (_a = nutTabbar.value) == null ? void 0 : _a.getBoundingClientRect().height;
          if (nutTabbarHeight) {
            height.value = nutTabbarHeight;
          }
        });
      }
    };
    onMounted(updateHeight);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ "nut-tabbar__placeholder": _ctx.bottom && _ctx.placeholder }),
        style: normalizeStyle({ height: height.value + "px" })
      }, [
        createElementVNode("view", {
          ref_key: "nutTabbar",
          ref: nutTabbar,
          class: normalizeClass(classes.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Tabbar,
  _sfc_main as default
};
