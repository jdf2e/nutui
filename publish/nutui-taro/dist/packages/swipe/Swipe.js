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
import { u as useTouch } from "../index-084nl_oE.js";
import { ref, inject, watch, onMounted, reactive, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, createTextVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { u as useTaroRect } from "../index-d4pC_9mG.js";
import { S as SWIPE_KEY } from "../types-qOrhXtA_.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import "@tarojs/taro";
const { create } = createComponent("swipe");
const _sfc_main = create({
  props: {
    name: {
      type: String,
      default: ""
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: false
    },
    touchMovePreventDefault: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "close", "click"],
  setup(props, { emit }) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const leftRef = ref();
    const leftRefWidth = ref(0);
    const rightRef = ref();
    const rightRefWidth = ref(0);
    const lockClick = ref(false);
    const initWidth = () => {
      useTaroRect(leftRef).then(
        (rect) => {
          leftRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
        },
        () => {
        }
      );
      useTaroRect(rightRef).then(
        (rect) => {
          rightRefWidth.value = (rect == null ? void 0 : rect.width) || 0;
        },
        () => {
        }
      );
    };
    const parent = inject(SWIPE_KEY, null);
    watch(
      () => {
        var _a;
        return (_a = parent == null ? void 0 : parent.name) == null ? void 0 : _a.value;
      },
      (name) => {
        if (props.name !== name && parent && parent.lock) {
          close();
        }
      }
    );
    onMounted(() => {
      setTimeout(() => {
        initWidth();
      }, 100);
    });
    const opened = ref(false);
    let position = "";
    let oldPosition = "";
    const state = reactive({
      offset: 0,
      moving: false
    });
    const open = (p = "") => {
      parent && parent.update(props.name);
      opened.value = true;
      if (p) {
        state.offset = p === "left" ? -rightRefWidth.value : leftRefWidth.value;
      }
      emit("open", {
        name: props.name,
        position: position || p
      });
    };
    const close = () => {
      state.offset = 0;
      if (opened.value) {
        opened.value = false;
        emit("close", {
          name: props.name,
          position
        });
      }
    };
    const onClick = (e, position2, lock) => {
      if (lock) {
        e.stopPropagation();
      } else {
        close();
      }
      emit("click", position2);
    };
    const touchStyle = computed(() => {
      return {
        transform: `translate3d(${state.offset}px, 0, 0)`
      };
    });
    const setoffset = (deltaX) => {
      position = deltaX > 0 ? "right" : "left";
      let offset = deltaX;
      switch (position) {
        case "left":
          if (opened.value && oldPosition === position) {
            offset = -rightRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
          }
          break;
        case "right":
          if (opened.value && oldPosition === position) {
            offset = leftRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
          }
          break;
      }
      state.offset = offset;
    };
    const touch = useTouch();
    const touchMethods = {
      onTouchStart(event) {
        if (props.disabled)
          return;
        touch.start(event);
      },
      onTouchMove(event) {
        if (props.disabled)
          return;
        touch.move(event);
        if (touch.isHorizontal()) {
          lockClick.value = true;
          state.moving = true;
          setoffset(touch.deltaX.value);
          if (props.touchMovePreventDefault) {
            event.preventDefault();
          }
          if (props.touchMoveStopPropagation) {
            event.stopPropagation();
          }
        }
      },
      onTouchEnd() {
        if (state.moving) {
          state.moving = false;
          oldPosition = position;
          switch (position) {
            case "left":
              if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
                close();
              } else {
                state.offset = -rightRefWidth.value;
                open();
              }
              break;
            case "right":
              if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
                close();
              } else {
                state.offset = leftRefWidth.value;
                open();
              }
              break;
          }
          setTimeout(() => {
            lockClick.value = false;
          }, 0);
        }
      }
    };
    return __spreadProps(__spreadValues({
      touchStyle
    }, touchMethods), {
      leftRef,
      rightRef,
      refRandomId,
      open,
      close,
      onClick,
      lockClick
    });
  }
});
const _hoisted_1 = ["id"];
const _hoisted_2 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "nut-swipe",
    style: normalizeStyle(_ctx.touchStyle),
    onTouchstart: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
    onTouchmove: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
    onTouchend: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
    onTouchcancel: _cache[6] || (_cache[6] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
  }, [
    createElementVNode("view", {
      id: "leftRef-" + _ctx.refRandomId,
      ref: "leftRef",
      class: "nut-swipe__left",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onClick($event, "left", true))
    }, [
      renderSlot(_ctx.$slots, "left")
    ], 8, _hoisted_1),
    createTextVNode(),
    createElementVNode("view", {
      class: "nut-swipe__content",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.onClick($event, "content", _ctx.lockClick))
    }, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createTextVNode(),
    createElementVNode("view", {
      id: "rightRef-" + _ctx.refRandomId,
      ref: "rightRef",
      class: "nut-swipe__right",
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.onClick($event, "right", true))
    }, [
      renderSlot(_ctx.$slots, "right")
    ], 8, _hoisted_2)
  ], 36);
}
const NutSwipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutSwipe as default
};
