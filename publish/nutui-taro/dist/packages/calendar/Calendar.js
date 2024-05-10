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
import { ref, computed, reactive, onMounted, watch, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, createTextVNode, renderSlot, Fragment, renderList, createVNode, withCtx, normalizeStyle, createBlock, mergeProps, createSlots } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import Taro from "@tarojs/taro";
import { _ as _sfc_main$2 } from "../index.taro.vue_vue_type_script_setup_true_lang-JJ7hr71Y.js";
import { U as Utils } from "../date-DHXcwF1m.js";
import { r as requestAniFrame } from "../raf-CzJhCkQo.js";
import { u as useLocale } from "../index-5sMqqUcW.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
const { create: create$1 } = createComponent("calendar-item");
const cN = "NutCalendarItem";
const TARO_ENV = Taro.getEnv();
const _sfc_main$1 = create$1({
  components: {
    NutScrollView: _sfc_main$2
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    toDateAnimation: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array],
      default: ""
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    disabledDate: Function
  },
  emits: ["choose", "update", "close", "select"],
  setup(props, { emit, slots, expose }) {
    const translate = useLocale(cN);
    const weekdays = translate("weekdays").map((day, index) => ({
      day,
      weekend: index === 0 || index === 6
    }));
    const weeks = ref([...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)]);
    const scalePx = ref(2);
    const months = ref(null);
    const viewHeight = ref(0);
    const compConthsData = computed(() => {
      return state.monthsData.slice(state.defaultRange[0], state.defaultRange[1]);
    });
    const scrollWithAnimation = ref(false);
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots["top-info"];
    });
    const bottomInfo = computed(() => {
      return slots["bottom-info"];
    });
    const state = reactive({
      yearMonthTitle: "",
      defaultRange: [],
      containerHeight: "100%",
      currDate: "",
      propStartDate: "",
      propEndDate: "",
      unLoadPrev: false,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: "nut-calendar__day",
      startData: "",
      endData: "",
      isRange: props.type === "range",
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      scrollTop: 0,
      monthsNum: 0
    });
    const splitDate = (date) => {
      return date.split("-");
    };
    const isStart = (currDate) => {
      return Utils.isEqual(state.currDate[0], currDate);
    };
    const isEnd = (currDate) => {
      return Utils.isEqual(state.currDate[1], currDate);
    };
    const isMultiple = (currDate) => {
      var _a, _b;
      if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
        return (_b = state.currDate) == null ? void 0 : _b.some((item) => {
          return Utils.isEqual(item, currDate);
        });
      } else {
        return false;
      }
    };
    const getCurrDate = (day, month) => {
      return month.curData[0] + "-" + month.curData[1] + "-" + Utils.getNumTwoBit(+day.day);
    };
    const getClass = (day, month, index) => {
      const res = [];
      if (typeof index === "number" && ((index + 1 + props.firstDayOfWeek) % 7 === 0 || (index + props.firstDayOfWeek) % 7 === 0)) {
        res.push("weekend");
      }
      const currDate = getCurrDate(day, month);
      const { type } = props;
      if (day.type == "curr") {
        if (Utils.isEqual(state.currDate, currDate) || (type == "range" || type == "week") && (isStart(currDate) || isEnd(currDate)) || type == "multiple" && isMultiple(currDate)) {
          res.push(`${state.dayPrefix}--active`);
        } else if (state.propStartDate && Utils.compareDate(currDate, state.propStartDate) || state.propEndDate && Utils.compareDate(state.propEndDate, currDate) || props.disabledDate && props.disabledDate(currDate)) {
          res.push(`${state.dayPrefix}--disabled`);
        } else if ((type == "range" || type == "week") && Array.isArray(state.currDate) && Object.values(state.currDate).length == 2 && Utils.compareDate(state.currDate[0], currDate) && Utils.compareDate(currDate, state.currDate[1])) {
          res.push(`${state.dayPrefix}--choose`);
        }
      } else {
        res.push(`${state.dayPrefix}--disabled`);
      }
      return res;
    };
    const confirm = () => {
      const { type } = props;
      if (type == "range" && state.chooseData.length == 2 || type != "range") {
        let selectData = state.chooseData.slice(0);
        if (type == "week") {
          selectData = {
            weekDate: [handleWeekDate(state.chooseData[0]), handleWeekDate(state.chooseData[1])]
          };
        }
        emit("choose", selectData);
        if (props.poppable) {
          emit("update");
        }
      }
    };
    const chooseDay = (day, month, isFirst = false) => {
      var _a, _b;
      if (!getClass(day, month).includes(`${state.dayPrefix}--disabled`)) {
        const { type } = props;
        let [y, m] = month.curData;
        let days = [...month.curData];
        days[2] = Utils.getNumTwoBit(Number(day.day));
        days[3] = `${days[0]}-${days[1]}-${days[2]}`;
        days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
        if (type == "multiple") {
          if (((_a = state.currDate) == null ? void 0 : _a.length) > 0) {
            let hasIndex = void 0;
            (_b = state.currDate) == null ? void 0 : _b.forEach((item, index) => {
              if (item == days[3]) {
                hasIndex = index;
              }
            });
            if (isFirst) {
              state.chooseData.push([...days]);
            } else {
              if (hasIndex !== void 0) {
                state.currDate.splice(hasIndex, 1);
                state.chooseData.splice(hasIndex, 1);
              } else {
                state.currDate.push(days[3]);
                state.chooseData.push([...days]);
              }
            }
          } else {
            state.currDate = [days[3]];
            state.chooseData = [[...days]];
          }
        } else if (type == "range") {
          let curDataLength = Object.values(state.currDate).length;
          if (curDataLength == 2 || curDataLength == 0) {
            state.currDate = [days[3]];
          } else {
            if (Utils.compareDate(state.currDate[0], days[3])) {
              Array.isArray(state.currDate) && state.currDate.push(days[3]);
            } else {
              Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
            }
          }
          if (state.chooseData.length == 2 || !state.chooseData.length) {
            state.chooseData = [[...days]];
          } else {
            if (Utils.compareDate(state.chooseData[0][3], days[3])) {
              state.chooseData = [...state.chooseData, [...days]];
            } else {
              state.chooseData = [[...days], ...state.chooseData];
            }
          }
        } else if (type == "week") {
          let weekArr = Utils.getWeekDate(y, m, day.day, props.firstDayOfWeek);
          if (state.propStartDate && Utils.compareDate(weekArr[0], state.propStartDate)) {
            weekArr.splice(0, 1, state.propStartDate);
          }
          if (state.propEndDate && Utils.compareDate(state.propEndDate, weekArr[1])) {
            weekArr.splice(1, 1, state.propEndDate);
          }
          state.currDate = weekArr;
          state.chooseData = [Utils.formatResultDate(weekArr[0]), Utils.formatResultDate(weekArr[1])];
        } else {
          state.currDate = days[3];
          state.chooseData = [...days];
        }
        if (!isFirst) {
          let selectData = state.chooseData;
          if (type == "week") {
            selectData = {
              weekDate: [
                handleWeekDate(state.chooseData[0]),
                handleWeekDate(state.chooseData[1])
              ]
            };
          }
          emit("select", selectData);
          if (props.isAutoBackFill || !props.poppable) {
            confirm();
          }
        }
      }
    };
    const handleWeekDate = (weekDate) => {
      let [y, m, d] = weekDate;
      let obj = {
        date: weekDate,
        monthWeekNum: Utils.getMonthWeek(y, m, d, props.firstDayOfWeek),
        yearWeekNum: Utils.getYearWeek(y, m, d, props.firstDayOfWeek)
      };
      return obj;
    };
    const getCurrData = (type) => {
      const monthData = type == "prev" ? state.monthsData[0] : state.monthsData[state.monthsData.length - 1];
      let year = parseInt(monthData.curData[0]);
      let month = parseInt(monthData.curData[1].toString().replace(/^0/, ""));
      switch (type) {
        case "prev":
          month == 1 && (year -= 1);
          month = month == 1 ? 12 : --month;
          break;
        case "next":
          month == 12 && (year += 1);
          month = month == 12 ? 1 : ++month;
          break;
      }
      return [year + "", Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month)) + ""];
    };
    const getDaysStatus = (days, type, dateInfo) => {
      let { year, month } = dateInfo;
      if (type == "prev" && days >= 7) {
        days -= 7;
      }
      return Array.from(Array(days), (v, k) => {
        return {
          day: String(k + 1),
          type,
          year,
          month
        };
      });
    };
    const getPreDaysStatus = (days, type, dateInfo, preCurrMonthDays) => {
      days = days - props.firstDayOfWeek;
      let { year, month } = dateInfo;
      if (type == "prev" && days >= 7) {
        days -= 7;
      }
      let months2 = Array.from(Array(preCurrMonthDays), (v, k) => {
        return {
          day: String(k + 1),
          type,
          year,
          month
        };
      });
      return months2.slice(preCurrMonthDays - days);
    };
    const getMonth = (curData, type) => {
      const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
      let preMonth = Number(curData[1]) - 1;
      let preYear = Number(curData[0]);
      if (preMonth <= 0) {
        preMonth = 12;
        preYear += 1;
      }
      const currMonthDays = Utils.getMonthDays(String(curData[0]), String(curData[1]));
      const preCurrMonthDays = Utils.getMonthDays(preYear + "", preMonth + "");
      const title = {
        year: curData[0],
        month: curData[1]
      };
      const monthInfo = {
        curData,
        title: translate("monthTitle", title.year, title.month),
        monthData: [
          ...getPreDaysStatus(
            preMonthDays,
            "prev",
            { month: String(preMonth), year: String(preYear) },
            preCurrMonthDays
          ),
          ...getDaysStatus(currMonthDays, "curr", title)
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      let titleHeight, itemHeight;
      if (TARO_ENV === Taro.ENV_TYPE.WEB) {
        titleHeight = 46 * scalePx.value + 16 * scalePx.value * 2;
        itemHeight = 128 * scalePx.value;
      } else {
        titleHeight = Math.floor(46 * scalePx.value) + Math.floor(16 * scalePx.value) * 2;
        itemHeight = Math.floor(128 * scalePx.value);
      }
      monthInfo.cssHeight = titleHeight + (monthInfo.monthData.length > 35 ? itemHeight * 6 : itemHeight * 5);
      let cssScrollHeight = 0;
      if (state.monthsData.length > 0) {
        cssScrollHeight = state.monthsData[state.monthsData.length - 1].cssScrollHeight + state.monthsData[state.monthsData.length - 1].cssHeight;
      }
      monthInfo.cssScrollHeight = cssScrollHeight;
      if (type == "next") {
        if (!state.endData || !Utils.compareDate(
          `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(state.endData[0], state.endData[1])}`,
          `${curData[0]}-${curData[1]}-${curData[2]}`
        )) {
          state.monthsData.push(monthInfo);
        }
      } else {
        if (!state.startData || !Utils.compareDate(
          `${curData[0]}-${curData[1]}-${curData[2]}`,
          `${state.startData[0]}-${state.startData[1]}-01`
        )) {
          state.monthsData.unshift(monthInfo);
        } else {
          state.unLoadPrev = true;
        }
      }
    };
    const initData = () => {
      let propStartDate = props.startDate ? props.startDate : Utils.getDay(0);
      let propEndDate = props.endDate ? props.endDate : Utils.getDay(365);
      state.propStartDate = propStartDate;
      state.propEndDate = propEndDate;
      state.startData = splitDate(propStartDate);
      state.endData = splitDate(propEndDate);
      if (props.defaultValue || Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
        state.currDate = props.type !== "one" ? [...props.defaultValue] : props.defaultValue;
      }
      const startDate = {
        year: Number(state.startData[0]),
        month: Number(state.startData[1])
      };
      const endDate = {
        year: Number(state.endData[0]),
        month: Number(state.endData[1])
      };
      let monthsNum = endDate.month - startDate.month;
      if (endDate.year - startDate.year > 0) {
        monthsNum = monthsNum + 12 * (endDate.year - startDate.year);
      }
      if (monthsNum <= 0) {
        monthsNum = 1;
      }
      getMonth(state.startData, "next");
      let i = 1;
      do {
        getMonth(getCurrData("next"), "next");
      } while (i++ < monthsNum);
      state.monthsNum = monthsNum;
      if (props.type == "range" && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
            state.currDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
            state.currDate.splice(1, 1, propEndDate);
          }
          state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
        }
      } else if (props.type == "multiple" && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          let defaultArr = [];
          let obj = {};
          state.currDate.forEach((item) => {
            if (propStartDate && !Utils.compareDate(item, propStartDate) && propEndDate && !Utils.compareDate(propEndDate, item)) {
              if (!Object.hasOwnProperty.call(obj, item)) {
                defaultArr.push(item);
                obj[item] = item;
              }
            }
          });
          state.currDate = [...defaultArr];
          state.defaultData = [...splitDate(defaultArr[0])];
        }
      } else if (props.type == "week" && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          let [y, m, d] = splitDate(state.currDate[0]);
          let weekArr = Utils.getWeekDate(y, m, d, props.firstDayOfWeek);
          state.currDate = weekArr;
          if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
            state.currDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
            state.currDate.splice(1, 1, propEndDate);
          }
          state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
        }
      } else {
        if (state.currDate) {
          if (propStartDate && Utils.compareDate(state.currDate, propStartDate)) {
            state.currDate = propStartDate;
          } else if (propEndDate && !Utils.compareDate(state.currDate, propEndDate)) {
            state.currDate = propEndDate;
          }
          state.defaultData = [...splitDate(state.currDate)];
        }
      }
      let current = 0;
      let lastCurrent = 0;
      if (state.defaultData.length > 0) {
        state.monthsData.forEach((item, index) => {
          if (item.title == translate("monthTitle", state.defaultData[0], state.defaultData[1])) {
            current = index;
          }
          if (props.type == "range" || props.type == "week") {
            if (item.title == translate("monthTitle", state.defaultData[3], state.defaultData[4])) {
              lastCurrent = index;
            }
          }
        });
      }
      setDefaultRange(monthsNum, current);
      state.currentIndex = current;
      state.yearMonthTitle = state.monthsData[state.currentIndex].title;
      if (state.defaultData.length > 0) {
        if (state.isRange) {
          chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
          chooseDay({ day: state.defaultData[5], type: "curr" }, state.monthsData[lastCurrent], true);
        } else if (props.type == "week") {
          chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
        } else if (props.type == "multiple") {
          [...state.currDate].forEach((item) => {
            let dateArr = splitDate(item);
            let current2 = state.currentIndex;
            state.monthsData.forEach((item2, index) => {
              if (item2.title == translate("monthTitle", dateArr[0], dateArr[1])) {
                current2 = index;
              }
            });
            chooseDay({ day: dateArr[2], type: "curr" }, state.monthsData[current2], true);
          });
        } else {
          chooseDay({ day: state.defaultData[2], type: "curr" }, state.monthsData[state.currentIndex], true);
        }
      }
      let lastItem = state.monthsData[state.monthsData.length - 1];
      let containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight;
      state.containerHeight = `${containerHeight}px`;
      state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
      state.avgHeight = Math.floor(containerHeight / (monthsNum + 1));
      if (months == null ? void 0 : months.value) {
        viewHeight.value = months.value.clientHeight;
      }
    };
    const scrollToDate = (date) => {
      if (Utils.compareDate(date, state.propStartDate)) {
        date = state.propStartDate;
      } else if (!Utils.compareDate(date, state.propEndDate)) {
        date = state.propEndDate;
      }
      let dateArr = splitDate(date);
      state.monthsData.forEach((item, index) => {
        if (item.title == translate("monthTitle", dateArr[0], dateArr[1])) {
          state.scrollTop += 1;
          scrollWithAnimation.value = props.toDateAnimation;
          requestAniFrame(() => {
            setTimeout(() => {
              state.scrollTop = state.monthsData[index].cssScrollHeight;
              setTimeout(() => {
                scrollWithAnimation.value = false;
              }, 200);
            }, 10);
          });
        }
      });
    };
    const initPosition = () => {
      state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
    };
    expose({
      scrollToDate,
      initPosition
    });
    const setDefaultRange = (monthsNum, current) => {
      if (monthsNum >= 3) {
        if (current > 0 && current < monthsNum) {
          state.defaultRange = [current - 1, current + 3];
        } else if (current == 0) {
          state.defaultRange = [current, current + 4];
        } else if (current == monthsNum) {
          state.defaultRange = [current - 2, current + 2];
        }
      } else {
        state.defaultRange = [0, monthsNum + 2];
      }
      let defaultScrollTop = state.monthsData[state.defaultRange[0]].cssScrollHeight;
      state.translateY = defaultScrollTop;
    };
    const isActive = (day, month) => {
      return (props.type == "range" || props.type == "week") && day.type == "curr" && getClass(day, month).includes("nut-calendar__day--active");
    };
    const isStartTip = (day, month) => {
      return isActive(day, month) && isStart(getCurrDate(day, month));
    };
    const isEndTip = (day, month) => {
      if (state.currDate.length >= 2 && isEnd(getCurrDate(day, month))) {
        return isActive(day, month);
      }
      return false;
    };
    const rangeTip = () => {
      if (state.currDate.length >= 2) {
        return Utils.isEqual(state.currDate[0], state.currDate[1]);
      }
    };
    const isCurrDay = (dateInfo) => {
      const date = `${dateInfo.year}-${dateInfo.month}-${Number(dateInfo.day) < 10 ? "0" + dateInfo.day : dateInfo.day}`;
      return Utils.isEqual(date, Utils.date2Str(/* @__PURE__ */ new Date()));
    };
    const mothsViewScroll = (e) => {
      if (state.monthsData.length <= 1) {
        return;
      }
      const currentScrollTop = e.target.scrollTop;
      let current = Math.floor(currentScrollTop / state.avgHeight);
      if (current == 0) {
        if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
          current += 1;
        }
      } else if (current > 0 && current < state.monthsNum - 1) {
        if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
          current += 1;
        }
        if (currentScrollTop < state.monthsData[current].cssScrollHeight) {
          current -= 1;
        }
      }
      if (state.currentIndex !== current) {
        state.currentIndex = current;
        setDefaultRange(state.monthsNum, current);
      }
      state.yearMonthTitle = state.monthsData[current].title;
    };
    const resetRender = () => {
      state.chooseData.splice(0);
      state.monthsData.splice(0);
      initData();
    };
    onMounted(() => {
      Taro.getSystemInfo({
        success(res) {
          let scale = 2;
          let toFixed = 3;
          if (TARO_ENV === Taro.ENV_TYPE.WEB) {
            toFixed = 5;
            let fontSize = document.documentElement.style.fontSize;
            scale = Number((Number.parseInt(fontSize) / 40).toFixed(toFixed));
          } else {
            let screenWidth = res.screenWidth;
            scale = Number((screenWidth / 750).toFixed(toFixed));
          }
          scalePx.value = scale;
          initData();
        }
      });
    });
    watch(
      () => props.defaultValue,
      (val) => {
        if (val) {
          if (props.poppable) {
            resetRender();
          }
        }
      }
    );
    return __spreadProps(__spreadValues(__spreadValues({
      weeks,
      compConthsData,
      showTopBtn,
      topInfo,
      bottomInfo,
      rangeTip,
      mothsViewScroll,
      getClass,
      isStartTip,
      isEndTip,
      chooseDay,
      isCurrDay,
      confirm,
      months
    }, toRefs(state)), toRefs(props)), {
      translate,
      scrollWithAnimation
    });
  }
});
const _hoisted_1 = { class: "nut-calendar__header" };
const _hoisted_2 = {
  key: 0,
  class: "nut-calendar__header-title"
};
const _hoisted_3 = {
  key: 1,
  class: "nut-calendar__header-slot"
};
const _hoisted_4 = {
  key: 2,
  class: "nut-calendar__header-subtitle"
};
const _hoisted_5 = { class: "nut-calendar__weekdays" };
const _hoisted_6 = { class: "nut-calendar__month-title" };
const _hoisted_7 = { class: "nut-calendar__days" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "nut-calendar__day-value" };
const _hoisted_10 = {
  key: 0,
  class: "nut-calendar__day-tips nut-calendar__day-tips--top"
};
const _hoisted_11 = {
  key: 1,
  class: "nut-calendar__day-tips nut-calendar__day-tips--bottom"
};
const _hoisted_12 = {
  key: 2,
  class: "nut-calendar__day-tips--curr"
};
const _hoisted_13 = {
  key: 4,
  class: "nut-calendar__day-tip"
};
const _hoisted_14 = {
  key: 0,
  class: "nut-calendar__footer"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_scroll_view = resolveComponent("nut-scroll-view");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["nut-calendar", {
      "nut-calendar--nopop": !_ctx.poppable,
      "nut-calendar--nofooter": _ctx.isAutoBackFill
    }])
  }, [
    createElementVNode("view", _hoisted_1, [
      _ctx.showTitle ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.title || _ctx.translate("title")), 1)) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.showTopBtn ? (openBlock(), createElementBlock("view", _hoisted_3, [
        renderSlot(_ctx.$slots, "btn")
      ])) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.showSubTitle ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.yearMonthTitle), 1)) : createCommentVNode("", true),
      createTextVNode(),
      createElementVNode("view", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weeks, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            class: normalizeClass(["nut-calendar__weekday", { weekend: item.weekend }])
          }, toDisplayString(item.day), 3);
        }), 128))
      ])
    ]),
    createTextVNode(),
    createVNode(_component_nut_scroll_view, {
      ref: "months",
      "scroll-top": _ctx.scrollTop,
      "scroll-y": true,
      class: "nut-calendar__content",
      "scroll-with-animation": _ctx.scrollWithAnimation,
      onScroll: _ctx.mothsViewScroll
    }, {
      default: withCtx(() => [
        createElementVNode("view", {
          class: "nut-calendar__panel",
          style: normalizeStyle({ height: _ctx.containerHeight })
        }, [
          createElementVNode("view", {
            class: "nut-calendar__body",
            style: normalizeStyle({ transform: `translateY(${_ctx.translateY}px)` })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.compConthsData, (month, index) => {
              return openBlock(), createElementBlock("view", {
                key: index,
                class: "nut-calendar__month"
              }, [
                createElementVNode("view", _hoisted_6, toDisplayString(month.title), 1),
                createTextVNode(),
                createElementVNode("view", _hoisted_7, [
                  createElementVNode("view", {
                    class: normalizeClass(["nut-calendar__days-item", _ctx.type === "range" ? "nut-calendar__days-item--range" : ""])
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(month.monthData, (day, i) => {
                      return openBlock(), createElementBlock("view", {
                        key: i,
                        class: normalizeClass(["nut-calendar__day", _ctx.getClass(day, month, i)]),
                        onClick: ($event) => _ctx.chooseDay(day, month)
                      }, [
                        createElementVNode("view", _hoisted_9, [
                          renderSlot(_ctx.$slots, "day", {
                            date: day.type == "curr" ? day : ""
                          }, () => [
                            createTextVNode(toDisplayString(day.type == "curr" ? day.day : ""), 1)
                          ])
                        ]),
                        createTextVNode(),
                        _ctx.topInfo ? (openBlock(), createElementBlock("view", _hoisted_10, [
                          renderSlot(_ctx.$slots, "top-info", {
                            date: day.type == "curr" ? day : ""
                          })
                        ])) : createCommentVNode("", true),
                        createTextVNode(),
                        _ctx.bottomInfo ? (openBlock(), createElementBlock("view", _hoisted_11, [
                          renderSlot(_ctx.$slots, "bottom-info", {
                            date: day.type == "curr" ? day : ""
                          })
                        ])) : createCommentVNode("", true),
                        createTextVNode(),
                        !_ctx.bottomInfo && _ctx.showToday && _ctx.isCurrDay(day) ? (openBlock(), createElementBlock("view", _hoisted_12, toDisplayString(_ctx.translate("today")), 1)) : createCommentVNode("", true),
                        createTextVNode(),
                        _ctx.isStartTip(day, month) ? (openBlock(), createElementBlock("view", {
                          key: 3,
                          class: normalizeClass(["nut-calendar__day-tip", { "nut-calendar__day-tips--top": _ctx.rangeTip() }])
                        }, toDisplayString(_ctx.startText || _ctx.translate("start")), 3)) : createCommentVNode("", true),
                        createTextVNode(),
                        _ctx.isEndTip(day, month) ? (openBlock(), createElementBlock("view", _hoisted_13, toDisplayString(_ctx.endText || _ctx.translate("end")), 1)) : createCommentVNode("", true)
                      ], 10, _hoisted_8);
                    }), 128))
                  ], 2)
                ])
              ]);
            }), 128))
          ], 4)
        ], 4)
      ]),
      _: 3
    }, 8, ["scroll-top", "scroll-with-animation", "onScroll"]),
    createTextVNode(),
    _ctx.poppable && !_ctx.isAutoBackFill ? (openBlock(), createElementBlock("view", _hoisted_14, [
      renderSlot(_ctx.$slots, "footer-info", { date: _ctx.chooseData }, () => [
        createElementVNode("view", {
          class: "nut-calendar__confirm",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.confirm && _ctx.confirm(...args))
        }, toDisplayString(_ctx.confirmText || _ctx.translate("confirm")), 1)
      ])
    ])) : createCommentVNode("", true)
  ], 2);
}
const NutCalendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("calendar");
const _sfc_main = create({
  components: {
    NutCalendarItem,
    NutPopup
  },
  props: {
    type: {
      type: String,
      default: "one"
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    toDateAnimation: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    startText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0 && val <= 6
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    disabledDate: Function
  },
  emits: ["choose", "close", "update:visible", "select"],
  setup(props, { emit, slots, expose }) {
    const visible = computed({
      get() {
        return props.visible;
      },
      set(val) {
        emit("update:visible", val);
      }
    });
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots["top-info"];
    });
    const dayInfo = computed(() => {
      return slots.day;
    });
    const bottomInfo = computed(() => {
      return slots["bottom-info"];
    });
    const footerInfo = computed(() => {
      return slots["footer-info"];
    });
    const calendarRef = ref(null);
    const scrollToDate = (date) => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.scrollToDate(date);
    };
    const initPosition = () => {
      var _a;
      (_a = calendarRef.value) == null ? void 0 : _a.initPosition();
    };
    expose({
      scrollToDate,
      initPosition
    });
    const update = () => {
      emit("update:visible", false);
    };
    const close = () => {
      emit("close");
      emit("update:visible", false);
    };
    const choose = (param) => {
      close();
      emit("choose", param);
    };
    const closePopup = () => {
      close();
    };
    const select = (param) => {
      emit("select", param);
    };
    const opened = () => {
      var _a, _b, _c, _d;
      if (props.defaultValue) {
        if (Array.isArray(props.defaultValue)) {
          if ((_a = props.defaultValue) == null ? void 0 : _a.length) {
            (_c = calendarRef.value) == null ? void 0 : _c.scrollToDate((_b = props.defaultValue) == null ? void 0 : _b[0]);
          }
        } else {
          (_d = calendarRef.value) == null ? void 0 : _d.scrollToDate(props.defaultValue);
        }
      }
    };
    return {
      visible,
      closePopup,
      opened,
      update,
      close,
      select,
      choose,
      calendarRef,
      showTopBtn,
      topInfo,
      dayInfo,
      bottomInfo,
      footerInfo
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_calendar_item = resolveComponent("nut-calendar-item");
  const _component_nut_popup = resolveComponent("nut-popup");
  return _ctx.poppable ? (openBlock(), createBlock(_component_nut_popup, mergeProps({
    key: 0,
    visible: _ctx.visible,
    "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => _ctx.visible = $event),
    position: "bottom",
    round: "",
    closeable: ""
  }, _ctx.$attrs, {
    style: { height: "85vh" },
    "lock-scroll": _ctx.lockScroll,
    "catch-move": _ctx.lockScroll,
    "destroy-on-close": false,
    onOpened: _ctx.opened
  }), {
    default: withCtx(() => [
      createVNode(_component_nut_calendar_item, {
        ref: "calendarRef",
        type: _ctx.type,
        "is-auto-back-fill": _ctx.isAutoBackFill,
        poppable: _ctx.poppable,
        title: _ctx.title,
        "default-value": _ctx.defaultValue,
        "start-date": _ctx.startDate,
        "end-date": _ctx.endDate,
        "confirm-text": _ctx.confirmText,
        "start-text": _ctx.startText,
        "end-text": _ctx.endText,
        "show-today": _ctx.showToday,
        "show-title": _ctx.showTitle,
        "show-sub-title": _ctx.showSubTitle,
        "to-date-animation": _ctx.toDateAnimation,
        "first-day-of-week": _ctx.firstDayOfWeek,
        "disabled-date": _ctx.disabledDate,
        onUpdate: _ctx.update,
        onClose: _ctx.close,
        onChoose: _ctx.choose,
        onSelect: _ctx.select
      }, createSlots({ _: 2 }, [
        _ctx.showTopBtn ? {
          name: "btn",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "btn")
          ]),
          key: "0"
        } : void 0,
        _ctx.dayInfo ? {
          name: "day",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "day", {
              date: date.date
            })
          ]),
          key: "1"
        } : void 0,
        _ctx.topInfo ? {
          name: "top-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "top-info", {
              date: date.date
            })
          ]),
          key: "2"
        } : void 0,
        _ctx.bottomInfo ? {
          name: "bottom-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "bottom-info", {
              date: date.date
            })
          ]),
          key: "3"
        } : void 0,
        _ctx.footerInfo ? {
          name: "footer-info",
          fn: withCtx((date) => [
            renderSlot(_ctx.$slots, "footer-info", {
              date: date.date
            })
          ]),
          key: "4"
        } : void 0
      ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "default-value", "start-date", "end-date", "confirm-text", "start-text", "end-text", "show-today", "show-title", "show-sub-title", "to-date-animation", "first-day-of-week", "disabled-date", "onUpdate", "onClose", "onChoose", "onSelect"])
    ]),
    _: 3
  }, 16, ["visible", "lock-scroll", "catch-move", "onOpened"])) : (openBlock(), createBlock(_component_nut_calendar_item, {
    key: 1,
    ref: "calendarRef",
    type: _ctx.type,
    "is-auto-back-fill": _ctx.isAutoBackFill,
    poppable: _ctx.poppable,
    title: _ctx.title,
    "confirm-text": _ctx.confirmText,
    "start-text": _ctx.startText,
    "end-text": _ctx.endText,
    "default-value": _ctx.defaultValue,
    "start-date": _ctx.startDate,
    "end-date": _ctx.endDate,
    "show-title": _ctx.showTitle,
    "show-sub-title": _ctx.showSubTitle,
    "to-date-animation": _ctx.toDateAnimation,
    "show-today": _ctx.showToday,
    "first-day-of-week": _ctx.firstDayOfWeek,
    "disabled-date": _ctx.disabledDate,
    onClose: _ctx.close,
    onChoose: _ctx.choose,
    onSelect: _ctx.select
  }, createSlots({ _: 2 }, [
    _ctx.showTopBtn ? {
      name: "btn",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "btn")
      ]),
      key: "0"
    } : void 0,
    _ctx.dayInfo ? {
      name: "day",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "day", {
          date: date.date
        })
      ]),
      key: "1"
    } : void 0,
    _ctx.topInfo ? {
      name: "top-info",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "top-info", {
          date: date.date
        })
      ]),
      key: "2"
    } : void 0,
    _ctx.bottomInfo ? {
      name: "bottom-info",
      fn: withCtx((date) => [
        renderSlot(_ctx.$slots, "bottom-info", {
          date: date.date
        })
      ]),
      key: "3"
    } : void 0
  ]), 1032, ["type", "is-auto-back-fill", "poppable", "title", "confirm-text", "start-text", "end-text", "default-value", "start-date", "end-date", "show-title", "show-sub-title", "to-date-animation", "show-today", "first-day-of-week", "disabled-date", "onClose", "onChoose", "onSelect"]));
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
