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
import { toRef, ref, computed, toRefs, openBlock, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, createElementVNode, normalizeStyle, withModifiers, Fragment, renderList, createTextVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { a as isArray } from "../util-D1pvnUYu.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { u as useRect } from "../index-B1qsj2XR.js";
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
      return Math.round(value / +step) * +step;
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
    const onClick = (event) => {
      if (disabled.value) {
        return;
      }
      const { min, modelValue } = props;
      const rect = useRect(root);
      let delta = event.clientX - rect.left;
      let total = rect.width;
      if (props.vertical) {
        delta = event.clientY - rect.top;
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
    };
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
    };
    const onTouchMove = (event) => {
      if (disabled.value) {
        return;
      }
      if (dragStatus.value === "start") {
        emit("dragStart");
      }
      touch.move(event);
      dragStatus.value = "draging";
      const rect = useRect(root);
      let delta = touch.deltaX.value;
      let total = rect.width;
      let diff = delta / total * scope.value;
      if (props.vertical) {
        delta = touch.deltaY.value;
        total = rect.height;
        diff = delta / total * scope.value;
      }
      if (isRange(startValue)) {
        currentValue[buttonIndex.value] = startValue[buttonIndex.value] + diff;
      } else {
        currentValue = startValue + diff;
      }
      updateValue(currentValue);
    };
    const onTouchEnd = () => {
      if (disabled.value) {
        return;
      }
      if (dragStatus.value === "draging") {
        updateValue(currentValue, true);
        emit("dragEnd");
      }
      dragStatus.value = "";
    };
    const curValue = (idx) => {
      const value = isArray(props.modelValue) && typeof idx === "number" ? props.modelValue[idx] : Number(props.modelValue);
      return value;
    };
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
      disabled
    });
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-range-min"
};
const _hoisted_2 = {
  key: 0,
  class: "nut-range-mark"
};
const _hoisted_3 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "onTouchstart"];
const _hoisted_4 = {
  key: 0,
  class: "number"
};
const _hoisted_5 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax"];
const _hoisted_6 = {
  key: 0,
  class: "number"
};
const _hoisted_7 = {
  key: 1,
  class: "nut-range-max"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.containerClasses)
  }, [
    !_ctx.hiddenRange ? (openBlock(), createElementBlock("view", _hoisted_1, toDisplayString(+_ctx.min), 1)) : createCommentVNode("", true),
    createElementVNode("view", {
      ref: "root",
      style: normalizeStyle(_ctx.wrapperStyle),
      class: normalizeClass(_ctx.classes),
      onClick: _cache[9] || (_cache[9] = withModifiers((...args) => _ctx.onClick && _ctx.onClick(...args), ["stop"]))
    }, [
      _ctx.marksList.length > 0 ? (openBlock(), createElementBlock("view", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.marksList, (marks) => {
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
        }), 128))
      ])) : createCommentVNode("", true),
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
            tabindex: _ctx.disabled ? -1 : 0,
            "aria-valuemin": +_ctx.min,
            "aria-valuenow": _ctx.curValue(index),
            "aria-valuemax": +_ctx.max,
            "aria-orientation": "horizontal",
            onTouchstart: withModifiers(
              (e) => {
                if (typeof index === "number") {
                  _ctx.buttonIndex = index;
                }
                _ctx.onTouchStart(e);
              },
              ["stop", "prevent"]
            ),
            onTouchmove: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args), ["stop", "prevent"])),
            onTouchend: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args), ["stop", "prevent"])),
            onTouchcancel: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args), ["stop", "prevent"])),
            onClick: _cache[3] || (_cache[3] = (e) => e.stopPropagation())
          }, [
            _ctx.$slots.button ? renderSlot(_ctx.$slots, "button", { key: 0 }) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "nut-range-button",
              style: normalizeStyle(_ctx.buttonStyle)
            }, [
              !_ctx.hiddenTag ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.curValue(index)), 1)) : createCommentVNode("", true)
            ], 4))
          ], 42, _hoisted_3);
        }), 64)) : (openBlock(), createElementBlock("view", {
          key: 1,
          role: "slider",
          class: "nut-range-button-wrapper",
          tabindex: _ctx.disabled ? -1 : 0,
          "aria-valuemin": +_ctx.min,
          "aria-valuenow": _ctx.curValue(),
          "aria-valuemax": +_ctx.max,
          "aria-orientation": "horizontal",
          onTouchstart: _cache[4] || (_cache[4] = withModifiers(
            (e) => {
              _ctx.onTouchStart(e);
            },
            ["stop", "prevent"]
          )),
          onTouchmove: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args), ["stop", "prevent"])),
          onTouchend: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args), ["stop", "prevent"])),
          onTouchcancel: _cache[7] || (_cache[7] = withModifiers((...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args), ["stop", "prevent"])),
          onClick: _cache[8] || (_cache[8] = (e) => e.stopPropagation())
        }, [
          _ctx.$slots.button ? renderSlot(_ctx.$slots, "button", { key: 0 }) : (openBlock(), createElementBlock("view", {
            key: 1,
            class: "nut-range-button",
            style: normalizeStyle(_ctx.buttonStyle)
          }, [
            !_ctx.hiddenTag ? (openBlock(), createElementBlock("view", _hoisted_6, toDisplayString(_ctx.curValue()), 1)) : createCommentVNode("", true)
          ], 4))
        ], 40, _hoisted_5))
      ], 4)
    ], 6),
    !_ctx.hiddenRange ? (openBlock(), createElementBlock("view", _hoisted_7, toDisplayString(+_ctx.max), 1)) : createCommentVNode("", true)
  ], 2);
}
const NutRange = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutRange as default
};
