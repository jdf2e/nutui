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
import { defineComponent, ref, computed, watch, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-animate" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutAnimate"
}), {
  __name: "animate.taro",
  props: {
    type: {},
    show: { type: Boolean, default: false },
    action: { default: "" },
    loop: { type: Boolean, default: false },
    duration: { default: 500 }
  },
  emits: ["click", "animate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const animated = ref(props.action === "initial" || props.show === true || props.loop);
    const classes = computed(() => {
      const prefixCls = "nut-animate";
      return {
        "nut-animate__container": true,
        [`${prefixCls}-${props.type}`]: animated.value,
        loop: props.loop
      };
    });
    const animate = () => {
      animated.value = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          animated.value = true;
        });
      });
    };
    const handleClick = (event) => {
      if (props.action === "click") {
        animate();
        emit("click", event);
        emit("animate");
      }
    };
    watch(
      () => props.show,
      (val) => {
        if (val) {
          animate();
          emit("animate");
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        createElementVNode("view", {
          class: normalizeClass(classes.value),
          style: normalizeStyle({
            animationDuration: _ctx.duration ? `${_ctx.duration}ms` : void 0
          }),
          onClick: handleClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Animate,
  _sfc_main as default
};
