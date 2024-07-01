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
import { defineComponent, ref, inject, watch, onMounted, reactive, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, unref, renderSlot, createTextVNode } from "vue";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { S as SWIPE_KEY } from "../types-BWhKcf4T.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["id"];
const _hoisted_2 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutSwipe"
}), {
  __name: "swipe.taro",
  props: {
    name: { default: "" },
    touchMoveStopPropagation: { type: Boolean, default: false },
    touchMovePreventDefault: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  emits: ["open", "close", "click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
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
    const onTouchStart = (event) => {
      if (props.disabled) return;
      touch.start(event);
    };
    const onTouchMove = (event) => {
      if (props.disabled) return;
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
    };
    const onTouchEnd = () => {
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
    };
    __expose({
      open,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "nut-swipe",
        style: normalizeStyle(touchStyle.value),
        onTouchstart: onTouchStart,
        onTouchmove: onTouchMove,
        onTouchend: onTouchEnd,
        onTouchcancel: onTouchEnd
      }, [
        createElementVNode("view", {
          id: "leftRef-" + unref(refRandomId),
          ref_key: "leftRef",
          ref: leftRef,
          class: "nut-swipe__left",
          onClick: _cache[0] || (_cache[0] = ($event) => onClick($event, "left", true))
        }, [
          renderSlot(_ctx.$slots, "left")
        ], 8, _hoisted_1),
        createTextVNode(),
        createElementVNode("view", {
          class: "nut-swipe__content",
          onClick: _cache[1] || (_cache[1] = ($event) => onClick($event, "content", lockClick.value))
        }, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createTextVNode(),
        createElementVNode("view", {
          id: "rightRef-" + unref(refRandomId),
          ref_key: "rightRef",
          ref: rightRef,
          class: "nut-swipe__right",
          onClick: _cache[2] || (_cache[2] = ($event) => onClick($event, "right", true))
        }, [
          renderSlot(_ctx.$slots, "right")
        ], 8, _hoisted_2)
      ], 36);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Swipe,
  _sfc_main as default
};
