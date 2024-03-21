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
import { defineComponent, ref, computed, openBlock, createElementBlock, createVNode, normalizeStyle, withCtx, renderSlot, createTextVNode, createElementVNode, normalizeClass, withModifiers, unref } from "vue";
import { _ as _sfc_main$1 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { Top } from "@nutui/icons-vue-taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutBacktop"
}), {
  __name: "backtop.taro",
  props: {
    height: { default: "100vh" },
    bottom: { default: 20 },
    right: { default: 10 },
    distance: { default: 200 },
    zIndex: { default: 10 }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const backTop = ref(false);
    const scrollTop = ref(1);
    const scroll = (e) => {
      scrollTop.value = 2;
      backTop.value = e.detail.scrollTop >= props.distance;
    };
    const classes = computed(() => {
      const prefixCls = "nut-backtop";
      return {
        [prefixCls]: true,
        show: backTop.value
      };
    });
    const style = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
        zIndex: props.zIndex
      };
    });
    const handleClick = (e) => {
      scrollTop.value = 1;
      emit("click", e);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", null, [
        createVNode(_sfc_main$1, {
          "scroll-y": true,
          style: normalizeStyle({ height: _ctx.height }),
          "scroll-top": scrollTop.value,
          "scroll-with-animation": "true",
          onScroll: scroll
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "content")
          ]),
          _: 3
        }, 8, ["style", "scroll-top"]),
        createTextVNode(),
        createElementVNode("view", {
          class: normalizeClass(classes.value),
          style: normalizeStyle(style.value),
          onClick: withModifiers(handleClick, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            createVNode(unref(Top), {
              width: "19px",
              height: "19px",
              class: "nut-backtop-main"
            })
          ])
        ], 6)
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Backtop,
  _sfc_main as default
};
