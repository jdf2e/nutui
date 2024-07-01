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
import { defineComponent, computed, watchEffect, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, withModifiers, renderSlot, vShow } from "vue";
import { b as body } from "../util-D1pvnUYu.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
let count = 0;
const CLSNAME = "nut-overflow-hidden";
const useLockScroll = (isLock) => {
  const lock = () => {
    if (isLock()) {
      try {
        !count && body.classList.add(CLSNAME);
        count++;
      } catch (error) {
        console.warn("[NutUI] <useLockScroll>", error);
      }
    }
  };
  const unlock = () => {
    if (isLock() && count) {
      try {
        count--;
        !count && body.classList.remove(CLSNAME);
      } catch (error) {
        console.warn("[NutUI] <unlock>", error);
      }
    }
  };
  return [lock, unlock];
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutOverlay"
}), {
  __name: "overlay",
  props: {
    visible: { type: Boolean, default: false },
    zIndex: { default: 2e3 },
    duration: { default: 0.3 },
    lockScroll: { type: Boolean, default: true },
    overlayClass: { default: "" },
    overlayStyle: {},
    closeOnClickOverlay: { type: Boolean, default: true }
  },
  emits: ["click", "update:visible"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const [lock, unlock] = useLockScroll(() => props.lockScroll);
    const classes = computed(() => {
      const prefixCls = "nut-overlay";
      return {
        [prefixCls]: true,
        [props.overlayClass]: true
      };
    });
    const style = computed(() => {
      return __spreadValues({
        transitionDuration: `${props.duration}s`,
        zIndex: props.zIndex
      }, props.overlayStyle);
    });
    watchEffect(() => {
      props.visible ? lock() : unlock();
    });
    const onClick = (e) => {
      emit("click", e);
      if (props.closeOnClickOverlay) {
        emit("update:visible", false);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "overlay-fade" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("view", {
            class: normalizeClass(classes.value),
            style: normalizeStyle(style.value),
            onClick: withModifiers(onClick, ["stop"])
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 6), [
            [vShow, _ctx.visible]
          ])
        ]),
        _: 3
      });
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Overlay,
  _sfc_main as default
};
