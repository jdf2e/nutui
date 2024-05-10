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
import { reactive, computed, watch, watchEffect, toRefs, resolveComponent, openBlock, createBlock, Teleport, mergeProps, createCommentVNode, createVNode, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createElementBlock, vShow } from "vue";
import { Close } from "@nutui/icons-vue";
import { Overlay as _sfc_main$1 } from "./overlay/Overlay.js";
import { c as createComponent } from "./component-DQf3CENX.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const popupProps = {
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
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  position: {
    type: String,
    default: "center"
  },
  transition: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: () => ({})
  },
  popClass: {
    type: String,
    default: ""
  },
  closeable: {
    type: Boolean,
    default: false
  },
  closeIconPosition: {
    type: String,
    default: "top-right"
  },
  destroyOnClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String, Element],
    default: "body"
  },
  overlay: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  teleportDisable: {
    type: Boolean,
    default: false
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: String,
    default: ""
  },
  overlayStyle: {
    type: Object,
    default: () => ({})
  }
};
const { componentName, create } = createComponent("popup");
const initIndex = 2e3;
let _zIndex = initIndex;
const _sfc_main = create({
  components: {
    NutOverlay: _sfc_main$1,
    Close
  },
  props: popupProps,
  emits: ["clickPop", "clickCloseIcon", "open", "close", "opened", "closed", "clickOverlay", "update:visible"],
  setup(props, { emit }) {
    let opened;
    const state = reactive({
      zIndex: props.zIndex,
      showSlot: true,
      closed: props.closeable
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ["round"]: props.round,
        [`nut-popup--${props.position}`]: true,
        [`nut-popup--${props.position}--safebottom`]: props.position === "bottom" && props.safeAreaInsetBottom,
        [props.popClass]: true
      };
    });
    const popStyle = computed(() => {
      return __spreadValues({
        zIndex: state.zIndex,
        transitionDuration: `${props.duration}s`
      }, props.style);
    });
    const transitionName = computed(() => {
      return props.transition ? props.transition : `nut-popup-slide-${props.position}`;
    });
    const open = () => {
      if (!opened) {
        opened = true;
        if (props.zIndex !== initIndex) {
          _zIndex = Number(props.zIndex);
        }
        emit("update:visible", true);
        state.zIndex = ++_zIndex;
        if (props.destroyOnClose) {
          state.showSlot = true;
        }
        emit("open");
      }
    };
    const close = () => {
      if (opened) {
        opened = false;
        emit("update:visible", false);
        emit("close");
        if (props.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false;
          }, +props.duration * 1e3);
        }
      }
    };
    const onClick = (e) => {
      emit("clickPop", e);
    };
    const onClickCloseIcon = (e) => {
      e.stopPropagation();
      emit("clickCloseIcon", e);
      close();
    };
    const onClickOverlay = (e) => {
      emit("clickOverlay", e);
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const onOpened = (el) => {
      emit("opened", el);
    };
    const onClosed = (el) => {
      emit("closed", el);
    };
    watch(
      () => props.visible,
      () => {
        if (props.visible && !opened) {
          open();
        }
        if (!props.visible && opened) {
          close();
        }
      }
    );
    watchEffect(() => {
      state.closed = props.closeable;
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      popStyle,
      transitionName,
      classes,
      onClick,
      onClickCloseIcon,
      onClickOverlay,
      onOpened,
      onClosed
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_overlay = resolveComponent("nut-overlay");
  const _component_Close = resolveComponent("Close");
  return openBlock(), createBlock(Teleport, {
    to: _ctx.teleport,
    disabled: !_ctx.teleportDisable
  }, [
    _ctx.overlay ? (openBlock(), createBlock(_component_nut_overlay, mergeProps({
      key: 0,
      visible: _ctx.visible,
      "close-on-click-overlay": _ctx.closeOnClickOverlay,
      "z-index": _ctx.zIndex,
      "lock-scroll": _ctx.lockScroll,
      duration: _ctx.duration,
      "overlay-class": _ctx.overlayClass,
      "overlay-style": _ctx.overlayStyle
    }, _ctx.$attrs, { onClick: _ctx.onClickOverlay }), null, 16, ["visible", "close-on-click-overlay", "z-index", "lock-scroll", "duration", "overlay-class", "overlay-style", "onClick"])) : createCommentVNode("", true),
    createVNode(Transition, {
      name: _ctx.transitionName,
      onAfterEnter: _ctx.onOpened,
      onAfterLeave: _ctx.onClosed
    }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("view", {
          class: normalizeClass(_ctx.classes),
          style: normalizeStyle(_ctx.popStyle),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClick && _ctx.onClick(...args))
        }, [
          _ctx.showSlot ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true),
          _ctx.closed ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: normalizeClass(["nut-popup__close-icon", "nut-popup__close-icon--" + _ctx.closeIconPosition]),
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickCloseIcon && _ctx.onClickCloseIcon(...args))
          }, [
            renderSlot(_ctx.$slots, "close-icon", {}, () => [
              createVNode(_component_Close, { height: "12px" })
            ])
          ], 2)) : createCommentVNode("", true)
        ], 6), [
          [vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const NutPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutPopup as N,
  popupProps as p
};
