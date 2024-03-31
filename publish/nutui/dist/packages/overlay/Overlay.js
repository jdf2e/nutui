var __defProp = Object.defineProperty;
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
import { computed, watchEffect, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, withModifiers, renderSlot, vShow } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { b as body } from "../util-DnfK0Qan.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
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
const { componentName, create } = createComponent("overlay");
const _sfc_main = create({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 2e3
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    overlayClass: {
      type: String,
      default: ""
    },
    overlayStyle: {
      type: Object
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click", "update:visible"],
  setup(props, { emit }) {
    const [lock, unlock] = useLockScroll(() => props.lockScroll);
    const classes = computed(() => {
      const prefixCls = componentName;
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
    return { classes, style, onClick };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "overlay-fade" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("view", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle(_ctx.style),
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onClick && _ctx.onClick(...args), ["stop"]))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}
const NutOverlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutOverlay as default
};
