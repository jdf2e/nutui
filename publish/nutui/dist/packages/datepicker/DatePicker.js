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
import { reactive, computed, onBeforeMount, watch, toRefs, resolveComponent, openBlock, createBlock, withCtx, renderSlot } from "vue";
import NutPicker from "../picker/Picker.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { c as isDate$1, p as padZero } from "../util-DnfK0Qan.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("date-picker");
const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
function isDate(val) {
  return isDate$1(val) && !isNaN(val.getTime());
}
const zhCNType = {
  day: "日",
  year: "年",
  month: "月",
  hour: "时",
  minute: "分",
  seconds: "秒"
};
const _sfc_main = create({
  components: {
    NutPicker
  },
  props: {
    modelValue: null,
    title: {
      type: String,
      default: ""
    },
    okText: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "date"
    },
    isShowChinese: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(currentYear - 10, 0, 1),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(currentYear + 10, 11, 31),
      validator: isDate
    },
    formatter: {
      type: Function,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1e3
    },
    filter: Function,
    showToolbar: {
      type: Boolean,
      default: true
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    }
  },
  emits: ["click", "cancel", "change", "confirm", "update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      currentDate: /* @__PURE__ */ new Date(),
      title: props.title,
      selectedValue: []
    });
    const formatValue = (value) => {
      if (!isDate(value)) {
        value = props.minDate;
      }
      let timestmp = Math.max(value.getTime(), props.minDate.getTime());
      timestmp = Math.min(timestmp, props.maxDate.getTime());
      return new Date(timestmp);
    };
    function getMonthEndDay(year, month) {
      return 32 - new Date(year, month - 1, 32).getDate();
    }
    const getBoundary = (type, value) => {
      const boundary = type == "min" ? props.minDate : props.maxDate;
      const year = boundary.getFullYear();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;
      if (type === "max") {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }
      let seconds = minute;
      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
              if (value.getMinutes() === minute) {
                seconds = boundary.getSeconds();
              }
            }
          }
        }
      }
      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute,
        [`${type}Seconds`]: seconds
      };
    };
    const ranges = computed(() => {
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } = getBoundary("max", state.currentDate);
      const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } = getBoundary("min", state.currentDate);
      let result = [
        {
          type: "year",
          range: [minYear, maxYear]
        },
        {
          type: "month",
          range: [minMonth, maxMonth]
        },
        {
          type: "day",
          range: [minDate, maxDate]
        },
        {
          type: "hour",
          range: [minHour, maxHour]
        },
        {
          type: "minute",
          range: [minMinute, maxMinute]
        },
        {
          type: "seconds",
          range: [minSeconds, maxSeconds]
        }
      ];
      return generateList(result);
    });
    const columns = computed(() => {
      const val = ranges.value.map((res, columnIndex) => {
        return generateValue(res.range[0], res.range[1], getDateIndex(res.type), res.type, columnIndex);
      });
      return val;
    });
    const changeHandler = ({
      columnIndex,
      selectedValue,
      selectedOptions
    }) => {
      let formatDate = [];
      selectedValue.forEach((item) => {
        formatDate.push(item);
      });
      if (props.type == "month-day" && formatDate.length < 3) {
        formatDate.unshift(new Date(state.currentDate || props.minDate || props.maxDate).getFullYear());
      }
      if (props.type == "year-month" && formatDate.length < 3) {
        formatDate.push(new Date(state.currentDate || props.minDate || props.maxDate).getDate());
      }
      const year = Number(formatDate[0]);
      const month = Number(formatDate[1]) - 1;
      const day = Math.min(Number(formatDate[2]), getMonthEndDay(Number(formatDate[0]), Number(formatDate[1])));
      let date = null;
      if (props.type === "date" || props.type === "month-day" || props.type === "year-month") {
        date = new Date(year, month, day);
      } else if (props.type === "datetime") {
        date = new Date(year, month, day, Number(formatDate[3]), Number(formatDate[4]));
      } else if (props.type === "datehour") {
        date = new Date(year, month, day, Number(formatDate[3]));
      } else if (props.type === "hour-minute" || props.type === "time") {
        date = new Date(state.currentDate);
        const year2 = date.getFullYear();
        const month2 = date.getMonth();
        const day2 = date.getDate();
        date = new Date(year2, month2, day2, Number(formatDate[0]), Number(formatDate[1]), Number(formatDate[2] || 0));
      }
      state.currentDate = formatValue(date);
      emit("change", { columnIndex, selectedValue, selectedOptions });
    };
    const formatterOption = (type, value) => {
      const { formatter, isShowChinese } = props;
      let fOption = null;
      if (formatter) {
        fOption = formatter(type, { text: padZero(value, 2), value: padZero(value, 2) });
      } else {
        const padMin = padZero(value, 2);
        const fatter = isShowChinese ? zhCNType[type] : "";
        fOption = { text: padMin + fatter, value: padMin };
      }
      return fOption;
    };
    const generateValue = (min, max, val, type, columnIndex) => {
      const arr = [];
      let index2 = 0;
      while (min <= max) {
        arr.push(formatterOption(type, min));
        if (type === "minute") {
          min += props.minuteStep;
        } else {
          min++;
        }
        if (min <= Number(val)) {
          index2++;
        }
      }
      state.selectedValue[columnIndex] = arr[index2].value;
      return props.filter ? props.filter(type, arr) : arr;
    };
    const getDateIndex = (type) => {
      if (type === "year") {
        return state.currentDate.getFullYear();
      } else if (type === "month") {
        return state.currentDate.getMonth() + 1;
      } else if (type === "day") {
        return state.currentDate.getDate();
      } else if (type === "hour") {
        return state.currentDate.getHours();
      } else if (type === "minute") {
        return state.currentDate.getMinutes();
      } else if (type === "seconds") {
        return state.currentDate.getSeconds();
      }
      return 0;
    };
    const closeHandler = (val) => {
      emit("cancel", val);
    };
    const confirm = (val) => {
      emit("confirm", val);
    };
    const generateList = (list) => {
      switch (props.type) {
        case "date":
          list = list.slice(0, 3);
          break;
        case "datetime":
          list = list.slice(0, 5);
          break;
        case "time":
          list = list.slice(3, 6);
          break;
        case "year-month":
          list = list.slice(0, 2);
          break;
        case "month-day":
          list = list.slice(1, 3);
          break;
        case "datehour":
          list = list.slice(0, 4);
          break;
        case "hour-minute":
          list = list.slice(3, 5);
          break;
      }
      return list;
    };
    const getSelectedValue = (time) => {
      const res = [
        time.getFullYear(),
        time.getMonth() + 1,
        time.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      ];
      return generateList(res.map((i) => String(i)));
    };
    onBeforeMount(() => {
      state.currentDate = formatValue(props.modelValue);
    });
    watch(
      () => props.modelValue,
      (value) => {
        const newValues = formatValue(value);
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(state.currentDate);
        if (!isSameValue) {
          state.currentDate = newValues;
          state.selectedValue = getSelectedValue(newValues);
        }
      }
    );
    watch(
      () => state.currentDate,
      (newValues) => {
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(props.modelValue);
        if (!isSameValue) {
          emit("update:modelValue", newValues);
        }
      }
    );
    watch(
      () => props.title,
      (val) => {
        state.title = val;
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      changeHandler,
      closeHandler,
      confirm,
      columns
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_picker = resolveComponent("nut-picker");
  return openBlock(), createBlock(_component_nut_picker, {
    modelValue: _ctx.selectedValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedValue = $event),
    "ok-text": _ctx.okText,
    "cancel-text": _ctx.cancelText,
    columns: _ctx.columns,
    title: _ctx.title,
    "three-dimensional": _ctx.threeDimensional,
    "swipe-duration": _ctx.swipeDuration,
    "show-toolbar": _ctx.showToolbar,
    "visible-option-num": _ctx.visibleOptionNum,
    "option-height": _ctx.optionHeight,
    onCancel: _ctx.closeHandler,
    onChange: _ctx.changeHandler,
    onConfirm: _ctx.confirm
  }, {
    top: withCtx(() => [
      renderSlot(_ctx.$slots, "top")
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["modelValue", "ok-text", "cancel-text", "columns", "title", "three-dimensional", "swipe-duration", "show-toolbar", "visible-option-num", "option-height", "onCancel", "onChange", "onConfirm"]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
