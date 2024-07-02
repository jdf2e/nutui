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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import Taro, { eventCenter, getCurrentInstance } from "@tarojs/taro";
import { toRef, ref, computed, onMounted, toRefs, openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createTextVNode, createElementVNode, normalizeStyle, withModifiers, Fragment, renderList, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { a as preventDefault } from "../util-2G3mRQeF.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { u as useFormDisabled } from "../common-BH7uB7Cn.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { componentName, create } = createComponent("range");
const _sfc_main = create({
  props: {
    range: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: false
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: false
    },
    hiddenTag: {
      type: Boolean,
      default: false
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const refRandomId = Math.random().toString(36).slice(-8);
    const state = ref({
      width: 0,
      height: 0
    });
    const buttonIndex = ref(0);
    let startValue;
    let currentValue;
    const root = ref();
    const dragStatus = ref();
    const touch = useTouch();
    const marksList = computed(() => {
      const { marks, max, min } = props;
      const marksKeys = Object.keys(marks);
      const list = marksKeys.map(parseFloat).sort((a, b) => a - b).filter((point) => point >= +min && point <= +max);
      return list;
    });
    const scope = computed(() => Number(props.max) - Number(props.min));
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: disabled.value,
        [`${prefixCls}-vertical`]: props.vertical,
        [`${prefixCls}-show-number`]: !props.hiddenRange
      };
    });
    const containerClasses = computed(() => {
      const prefixCls = "nut-range-container";
      return {
        [prefixCls]: true,
        [`${prefixCls}-vertical`]: props.vertical
      };
    });
    const wrapperStyle = computed(() => {
      return {
        background: props.inactiveColor
      };
    });
    const buttonStyle = computed(() => {
      return {
        borderColor: props.buttonColor
      };
    });
    const isRange = (val) => !!props.range && Array.isArray(val);
    const calcMainAxis = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${(modelValue[1] - modelValue[0]) * 100 / scope.value}%`;
      }
      return `${(modelValue - Number(min)) * 100 / scope.value}%`;
    };
    const calcOffset = () => {
      const { modelValue, min } = props;
      if (isRange(modelValue)) {
        return `${(modelValue[0] - Number(min)) * 100 / scope.value}%`;
      }
      return `0%`;
    };
    const barStyle = computed(() => {
      if (props.vertical) {
        return {
          height: calcMainAxis(),
          top: calcOffset(),
          background: props.activeColor,
          transition: dragStatus.value ? "none" : void 0
        };
      } else {
        return {
          width: calcMainAxis(),
          left: calcOffset(),
          background: props.activeColor,
          transition: dragStatus.value ? "none" : void 0
        };
      }
    });
    const markClassName = (mark) => {
      const classPrefix = "nut-range-mark";
      const { modelValue, max, min } = props;
      let lowerBound = Number(min);
      let upperBound = Number(max);
      if (props.range) {
        const [left, right] = modelValue;
        lowerBound = left;
        upperBound = right;
      } else {
        upperBound = modelValue;
      }
      let isActive = mark <= +upperBound && mark >= lowerBound;
      return {
        [`${classPrefix}-text`]: true,
        [`${classPrefix}-text-active`]: isActive
      };
    };
    const marksStyle = (mark) => {
      const { min, vertical } = props;
      let style = {
        left: `${(mark - Number(min)) / scope.value * 100}%`
      };
      if (vertical) {
        style = {
          top: `${(mark - Number(min)) / scope.value * 100}%`
        };
      }
      return style;
    };
    const tickStyle = (mark) => {
      const { modelValue, max, min } = props;
      let lowerBound = Number(min);
      let upperBound = Number(max);
      if (props.range) {
        const [left, right] = modelValue;
        lowerBound = left;
        upperBound = right;
      }
      let isActive = mark <= upperBound && mark >= lowerBound;
      let style = {
        background: !isActive ? props.inactiveColor : props.activeColor
      };
      return style;
    };
    const format = (value) => {
      const { min, max, step } = props;
      value = Math.max(+min, Math.min(value, +max));
      return Math.round((value - +min) / +step) * +step + +min;
    };
    const isSameValue = (newValue, oldValue) => JSON.stringify(newValue) === JSON.stringify(oldValue);
    const handleOverlap = (value) => {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }
      return value;
    };
    const updateValue = (value, end) => {
      if (isRange(value)) {
        value = handleOverlap(value).map(format);
      } else {
        value = format(value);
      }
      if (!isSameValue(value, props.modelValue)) {
        emit("update:modelValue", value);
      }
      if (end && !isSameValue(value, startValue)) {
        emit("change", value);
      }
    };
    const onClick = (event) => __async(this, null, function* () {
      if (disabled.value) {
        return;
      }
      const { min, modelValue } = props;
      useTaroRect(root).then(
        (rect) => {
          state.value.width = rect.width;
          state.value.height = rect.height;
          let clientX, clientY;
          if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
            clientX = event.clientX;
            clientY = event.clientY;
          } else {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
          }
          let delta = clientX - rect.left;
          let total = rect.width;
          if (props.vertical) {
            delta = clientY - rect.top;
            total = rect.height;
          }
          const value = Number(min) + delta / total * scope.value;
          if (isRange(modelValue)) {
            const [left, right] = modelValue;
            const middle = (left + right) / 2;
            if (value <= middle) {
              updateValue([value, right], true);
            } else {
              updateValue([left, value], true);
            }
          } else {
            updateValue(value, true);
          }
        },
        () => {
        }
      );
    });
    const onTouchStart = (event) => {
      if (disabled.value) {
        return;
      }
      touch.start(event);
      currentValue = props.modelValue;
      if (isRange(currentValue)) {
        startValue = currentValue.map(format);
      } else {
        startValue = format(currentValue);
      }
      dragStatus.value = "start";
      preventDefault(event, true);
    };
    const init = () => {
      useTaroRect(root).then(
        (rect) => {
          state.value.width = rect == null ? void 0 : rect.width;
          state.value.height = rect == null ? void 0 : rect.height;
        },
        () => {
        }
      );
    };
    const onTouchMove = (event) => {
      if (disabled.value) {
        return;
      }
      preventDefault(event, true);
      if (dragStatus.value === "start") {
        emit("dragStart");
      }
      touch.move(event);
      dragStatus.value = "draging";
      let delta = touch.deltaX.value;
      let total = state.value.width;
      let diff = delta / total * scope.value;
      if (props.vertical) {
        delta = touch.deltaY.value;
        total = state.value.height;
        diff = delta / total * scope.value;
      }
      if (isRange(startValue)) {
        currentValue[buttonIndex.value] = startValue[buttonIndex.value] + diff;
      } else {
        currentValue = startValue + diff;
      }
      updateValue(currentValue);
    };
    const onTouchEnd = (event) => {
      if (disabled.value) {
        return;
      }
      if (dragStatus.value === "draging") {
        updateValue(currentValue, true);
        emit("dragEnd");
      }
      dragStatus.value = "";
      preventDefault(event, true);
    };
    const curValue = (idx) => {
      const value = Array.isArray(props.modelValue) && typeof idx === "number" ? props.modelValue[idx] : Number(props.modelValue);
      return value;
    };
    onMounted(() => {
      Taro.nextTick(() => {
        init();
      });
      eventCenter.once(getCurrentInstance().router.onReady, () => {
        Taro.nextTick(() => {
          init();
        });
      });
    });
    return __spreadProps(__spreadValues({
      root,
      classes,
      wrapperStyle,
      buttonStyle,
      onClick,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }, toRefs(props)), {
      barStyle,
      curValue,
      buttonIndex,
      containerClasses,
      markClassName,
      marksStyle,
      marksList,
      tickStyle,
      refRandomId,
      disabled
    });
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-range-min"
};
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "nut-range-mark" };
const _hoisted_4 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"];
const _hoisted_5 = {
  key: 0,
  class: "number"
};
const _hoisted_6 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"];
const _hoisted_7 = {
  key: 0,
  class: "number"
};
const _hoisted_8 = {
  key: 1,
  class: "nut-range-max"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.containerClasses)
  }, [
    !_ctx.hiddenRange ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(+_ctx.min), 1)) : createCommentVNode("", true),
    createTextVNode(),
    createElementVNode("view", {
      id: "root-" + _ctx.refRandomId,
      ref: "root",
      style: normalizeStyle(_ctx.wrapperStyle),
      class: normalizeClass(_ctx.classes),
      onClick: _cache[9] || (_cache[9] = withModifiers((...args) => _ctx.onClick && _ctx.onClick(...args), ["stop"]))
    }, [
      createElementVNode("view", _hoisted_3, [
        _ctx.marksList.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.marksList, (marks) => {
          return openBlock(), createElementBlock("span", {
            key: marks,
            class: normalizeClass(_ctx.markClassName(marks)),
            style: normalizeStyle(_ctx.marksStyle(marks))
          }, [
            createTextVNode(toDisplayString(marks) + " ", 1),
            createElementVNode("span", {
              class: "nut-range-tick",
              style: normalizeStyle(_ctx.tickStyle(marks))
            }, null, 4)
          ], 6);
        }), 128)) : createCommentVNode("", true)
      ]),
      createTextVNode(),
      createElementVNode("view", {
        class: "nut-range-bar",
        style: normalizeStyle(_ctx.barStyle)
      }, [
        _ctx.range ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList([0, 1], (index) => {
          return createElementVNode("view", {
            key: index,
            role: "slider",
            class: normalizeClass({
              "nut-range-button-wrapper-left": index == 0,
              "nut-range-button-wrapper-right": index == 1
            }),
            "catch-move": true,
            tabindex: _ctx.disabled ? -1 : 0,
            "aria-valuemin": +_ctx.min,
            "aria-valuenow": _ctx.curValue(index),
            "aria-valuemax": +_ctx.max,
            "aria-orientation": "horizontal",
            onTouchstart: (e) => {
              if (typeof index === "number") {
                _ctx.buttonIndex = index;
              }
              _ctx.onTouchStart(e);
            },
            onTouchmove: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
            onTouchend: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onTouchcancel: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
            onClick: _cache[3] || (_cache[3] = (e) => e.stopPropagation())
          }, [
            _ctx.$slots.button ? renderSlot(_ctx.$slots, "button", { key: 0 }) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "nut-range-button",
              style: normalizeStyle(_ctx.buttonStyle)
            }, [
              !_ctx.hiddenTag ? (openBlock(), createElementBlock("view", _hoisted_5, toDisplayString(_ctx.curValue(index)), 1)) : createCommentVNode("", true)
            ], 4))
          ], 42, _hoisted_4);
        }), 64)) : (openBlock(), createElementBlock("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: _ctx.disabled ? -1 : 0,
          "aria-valuemin": +_ctx.min,
          "aria-valuenow": _ctx.curValue(),
          "aria-valuemax": +_ctx.max,
          "aria-orientation": "horizontal",
          "catch-move": true,
          onTouchstart: _cache[4] || (_cache[4] = (e) => {
            _ctx.onTouchStart(e);
          }),
          onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
          onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
          onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
          onClick: _cache[8] || (_cache[8] = (e) => e.stopPropagation())
        }, [
          _ctx.$slots.button ? renderSlot(_ctx.$slots, "button", { key: 0 }) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-range-button",
            style: normalizeStyle(_ctx.buttonStyle)
          }, [
            !_ctx.hiddenTag ? (openBlock(), createElementBlock("view", _hoisted_7, toDisplayString(_ctx.curValue()), 1)) : createCommentVNode("", true)
          ], 4))
        ], 40, _hoisted_6))
      ], 4)
    ], 14, _hoisted_2),
    createTextVNode(),
    !_ctx.hiddenRange ? (openBlock(), createElementBlock("view", _hoisted_8, toDisplayString(+_ctx.max), 1)) : createCommentVNode("", true)
  ], 2);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
