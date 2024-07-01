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
import { h, defineComponent, ref, computed, watchEffect, withDirectives, openBlock, createElementBlock, createElementVNode, createVNode, unref, toDisplayString, Fragment, renderList, normalizeClass, renderSlot, createTextVNode, vShow } from "vue";
import { U as Utils } from "../date-DHXcwF1m.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const Left = () => {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    },
    [
      h("path", {
        d: "M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"
      })
    ]
  );
};
const Right = () => {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    },
    [
      h("path", {
        d: "M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"
      })
    ]
  );
};
const DoubleLeft = () => {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    },
    [
      h("path", {
        d: "M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"
      })
    ]
  );
};
const DoubleRight = () => {
  return h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    },
    [
      h("path", {
        d: "M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"
      })
    ]
  );
};
const convertDateToDay = (date) => {
  return date ? {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate()
  } : null;
};
const convertDayToDate = (day) => {
  return day ? new Date(day.year, day.month - 1, day.date) : null;
};
const valueToRange = (val) => {
  if (Array.isArray(val)) {
    return val.map((date) => {
      return convertDateToDay(date);
    });
  }
  return val ? [convertDateToDay(val)] : [];
};
const rangeTovalue = (range) => {
  if (Array.isArray(range)) {
    return range.map((day) => {
      return convertDayToDate(day);
    });
  }
  return range ? [convertDayToDate(range)] : [];
};
const getPrevMonthDays = (year, month, firstDayOfWeek) => {
  let prevMonth = month - 1;
  let prevYear = year;
  if (prevMonth <= 0) {
    prevMonth = 12;
    prevYear -= 1;
  }
  let days = Utils.getMonthPreDay(year, month);
  days -= firstDayOfWeek;
  if (days >= 7) {
    days -= 7;
  }
  const preDates = Utils.getMonthDays(`${prevYear}`, `${prevMonth}`);
  const months = Array.from(Array(preDates), (_, k) => {
    return {
      type: "prev",
      year: prevYear,
      month: prevMonth,
      date: k + 1
    };
  });
  return months.slice(preDates - days);
};
const getCurrentMonthDays = (year, month) => {
  const days = Utils.getMonthDays(`${year}`, `${month}`);
  return Array.from(Array(days), (_, k) => {
    return {
      type: "current",
      year,
      month,
      date: k + 1
    };
  });
};
const getCurrentWeekDays = (day, firstDayOfWeek) => {
  const current = new Date(day.year, day.month - 1, day.date);
  const count = (current.getDay() + 7 - firstDayOfWeek) % 7;
  return [
    convertDateToDay(new Date(current.getTime() - 24 * 60 * 60 * 1e3 * count)),
    convertDateToDay(new Date(current.getTime() + 24 * 60 * 60 * 1e3 * (6 - count)))
  ];
};
const getDays = (month, firstDayOfWeek) => {
  const y = month.year;
  const m = month.month;
  const days = [...getPrevMonthDays(y, m, firstDayOfWeek), ...getCurrentMonthDays(y, m)];
  const size = days.length;
  const yearOfNextMonth = month.month === 12 ? month.year + 1 : month.year;
  const monthOfNextMonth = month.month === 12 ? 1 : month.month + 1;
  for (let i = 1; i <= 42 - size; i++) {
    days.push({
      type: "next",
      year: yearOfNextMonth,
      month: monthOfNextMonth,
      date: i
    });
  }
  return days;
};
const compareDay = (day1, day2) => {
  if (day1 && day2) {
    if (day1.year === day2.year) {
      if (day1.month === day2.month) {
        return day1.date - day2.date;
      }
      return day1.month - day2.month;
    }
    return day1.year - day2.year;
  }
};
const isSameDay = (day1, day2) => {
  return compareDay(day1, day2) === 0;
};
const _hoisted_1 = { class: "nut-calendarcard" };
const _hoisted_2 = { class: "nut-calendarcard-header" };
const _hoisted_3 = { class: "nut-calendarcard-header-left" };
const _hoisted_4 = { class: "nut-calendarcard-header-title" };
const _hoisted_5 = { class: "nut-calendarcard-header-right" };
const _hoisted_6 = { class: "nut-calendarcard-content" };
const _hoisted_7 = { class: "nut-calendarcard-days" };
const _hoisted_8 = { class: "nut-calendarcard-days" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "nut-calendarcard-day-top" };
const _hoisted_11 = { class: "nut-calendarcard-day-inner" };
const _hoisted_12 = { class: "nut-calendarcard-day-bottom" };
const cN = "NutCalendarCard";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: cN
}), {
  __name: "calendar-card",
  props: {
    type: { default: "single" },
    firstDayOfWeek: { default: 0 },
    modelValue: { default: null },
    startDate: { default: null },
    endDate: { default: null },
    disableDay: { type: Function, default: () => false }
  },
  emits: ["update:modelValue", "change", "dayClick", "pageChange"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const translate = useLocale(cN);
    const initMonth = () => {
      let date = new Date(Date.now());
      const val = props.modelValue;
      if (Array.isArray(val)) {
        if (val.length) {
          date = val[0];
        }
      } else if (val) {
        date = val;
      }
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
      };
    };
    const month = ref(initMonth());
    const days = ref([]);
    const weekHeader = computed(() => {
      const weekdays = translate("weekdays").map((day, index) => {
        return {
          name: day,
          key: index
        };
      });
      return [...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)];
    });
    const innerValue = ref(props.modelValue ? valueToRange(props.modelValue) : []);
    watchEffect(() => {
      const val = props.modelValue ? valueToRange(props.modelValue) : [];
      innerValue.value = val;
    });
    const change = (v) => {
      innerValue.value = v;
      if (props.type === "single") {
        const date = convertDayToDate(v[0]);
        emit("update:modelValue", date);
        emit("change", date);
      } else if (props.type === "multiple" || props.type === "range" || props.type === "week") {
        const val = rangeTovalue(v);
        emit("update:modelValue", val);
        emit("change", val);
      }
    };
    watchEffect(() => {
      const newDays = getDays(month.value, props.firstDayOfWeek);
      days.value = newDays;
      emit("pageChange", month.value);
    });
    const isDisable = (day) => {
      if (props.disableDay && props.disableDay(day)) {
        return true;
      }
      if (props.startDate && Number(compareDay(day, convertDateToDay(props.startDate))) < 0) {
        return true;
      }
      if (props.endDate && Number(compareDay(day, convertDateToDay(props.endDate))) > 0) {
        return true;
      }
      return false;
    };
    const isActive = (day) => {
      if (props.type === "single" || props.type === "multiple") {
        for (const val in innerValue.value) {
          if (isSameDay(day, innerValue.value[val])) {
            return true;
          }
        }
      } else if (props.type === "range" && innerValue.value.length === 1 && isSameDay(innerValue.value[0], day)) {
        return true;
      }
      return false;
    };
    const isStart = (day) => {
      return (props.type === "range" || props.type === "week") && innerValue.value.length === 2 && isSameDay(day, innerValue.value[0]);
    };
    const isEnd = (day) => {
      return (props.type === "range" || props.type === "week") && innerValue.value.length === 2 && isSameDay(day, innerValue.value[1]);
    };
    const isMid = (day) => {
      if (props.type === "range" || props.type === "week") {
        if (innerValue.value.length === 2) {
          const c1 = compareDay(innerValue.value[0], day);
          const c2 = compareDay(day, innerValue.value[1]);
          if (c1 && c1 < 0 && c2 && c2 < 0) {
            return true;
          }
        }
      }
      return false;
    };
    const isWeekend = (day) => {
      const d = new Date(day.year, day.month - 1, day.date).getDay();
      return d === 0 || d === 6;
    };
    const getClasses = (day) => {
      if (isDisable(day)) {
        return ["disabled"];
      }
      const res = [];
      if (day.type === "current") {
        if (isActive(day)) {
          res.push("active");
        }
        if (isStart(day)) {
          res.push("start");
        }
        if (isEnd(day)) {
          res.push("end");
        }
        if (isMid(day)) {
          res.push("mid");
        }
        if (isWeekend(day)) {
          res.push("weekend");
        }
      }
      return res;
    };
    const jumpTo = (y, m) => {
      if (props.startDate) {
        const c = compareDay(
          {
            year: y,
            month: m,
            date: 31
          },
          convertDateToDay(props.startDate)
        );
        if (c && c < 0) {
          return;
        }
      }
      if (props.endDate) {
        const c = compareDay(
          {
            year: y,
            month: m,
            date: 1
          },
          convertDateToDay(props.endDate)
        );
        if (c && c > 0) {
          return;
        }
      }
      month.value = {
        year: y,
        month: m
      };
    };
    const jump = (step = 1) => {
      const current = month.value.year * 12 + month.value.month;
      let newMonth = (current + step) % 12;
      if (newMonth === 0) {
        newMonth = 12;
      }
      const newYear = Math.floor((current + step - newMonth) / 12);
      jumpTo(newYear, newMonth);
    };
    const handleDayClick = (day) => {
      if (day.type === "prev" || day.type === "next" || isDisable(day)) {
        return;
      }
      emit("dayClick", day);
      switch (props.type) {
        case "single": {
          if (innerValue.value[0] && isSameDay(innerValue.value[0], day)) {
            change([]);
          } else {
            change([day]);
          }
          break;
        }
        case "multiple": {
          const t = innerValue.value.find((i) => isSameDay(i, day));
          if (t) {
            change(innerValue.value.filter((i) => i !== t));
          } else {
            change([...innerValue.value, day]);
          }
          break;
        }
        case "range": {
          const len = innerValue.value.length;
          if (len === 0 || len === 2) {
            change([day]);
          } else if (len === 1) {
            const t = compareDay(innerValue.value[0], day);
            if (t === null || t === void 0) {
              change([]);
            } else if (t < 0) {
              change([innerValue.value[0], day]);
            } else {
              change([day, innerValue.value[0]]);
            }
          } else {
            console.warn("[NutUI] Calendar range error");
          }
          break;
        }
        case "week": {
          if (innerValue.value.length === 2 || innerValue.value.length === 0) {
            const [left, right] = getCurrentWeekDays(day, props.firstDayOfWeek);
            change([left, right]);
          } else {
            console.warn("[NutUI] Calendar week error");
          }
          break;
        }
        default: {
          console.warn("[NutUI] Calendar type error");
        }
      }
    };
    __expose({
      jump,
      jumpTo
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", {
              class: "double-left",
              onClick: _cache[0] || (_cache[0] = ($event) => jump(-12))
            }, [
              createVNode(unref(DoubleLeft))
            ]),
            createElementVNode("div", {
              class: "left",
              onClick: _cache[1] || (_cache[1] = ($event) => jump(-1))
            }, [
              createVNode(unref(Left))
            ])
          ]),
          createElementVNode("div", _hoisted_4, toDisplayString(unref(translate)("monthTitle", month.value.year, month.value.month)), 1),
          createElementVNode("div", _hoisted_5, [
            createElementVNode("div", {
              class: "right",
              onClick: _cache[2] || (_cache[2] = ($event) => jump(1))
            }, [
              createVNode(unref(Right))
            ]),
            createElementVNode("div", {
              class: "double-right",
              onClick: _cache[3] || (_cache[3] = ($event) => jump(12))
            }, [
              createVNode(unref(DoubleRight))
            ])
          ])
        ]),
        createElementVNode("div", _hoisted_6, [
          createElementVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(weekHeader.value, (d) => {
              return openBlock(), createElementBlock("div", {
                key: d.name,
                class: normalizeClass(["nut-calendarcard-day header", d.key === 0 || d.key === 6 ? "weekend" : ""])
              }, toDisplayString(d.name), 3);
            }), 128))
          ]),
          createElementVNode("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(days.value, (day) => {
              return openBlock(), createElementBlock("div", {
                key: `${day.year}-${day.month}-${day.date}`,
                class: normalizeClass(["nut-calendarcard-day", [day.type, ...getClasses(day)]]),
                onClick: ($event) => handleDayClick(day)
              }, [
                createElementVNode("div", _hoisted_10, [
                  renderSlot(_ctx.$slots, "top", { day })
                ]),
                createElementVNode("div", _hoisted_11, [
                  renderSlot(_ctx.$slots, "default", { day }, () => [
                    createTextVNode(toDisplayString(day.date), 1)
                  ])
                ]),
                createElementVNode("div", _hoisted_12, [
                  renderSlot(_ctx.$slots, "bottom", { day })
                ])
              ], 10, _hoisted_9);
            }), 128))
          ])
        ])
      ], 512)), [
        [vShow, days.value.length > 0]
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as CalendarCard,
  _sfc_main as default
};
