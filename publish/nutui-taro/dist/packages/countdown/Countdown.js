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
import { defineComponent, ref, computed, onBeforeMount, watch, openBlock, createElementBlock, renderSlot, createElementVNode } from "vue";
import { p as padZero } from "../util-7oDGftbO.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const getTimeStamp = (timeStr) => {
  if (!timeStr)
    return Date.now();
  let t = timeStr;
  t = +t > 0 ? +t : t.toString().replace(/-/g, "/");
  return new Date(t).getTime();
};
const parseFormat = (time, format) => {
  let { h, m, s, ms } = time;
  const { d } = time;
  if (format.includes("DD")) {
    format = format.replace("DD", padZero(d));
  } else {
    h += Number(d) * 24;
  }
  if (format.includes("HH")) {
    format = format.replace("HH", padZero(h));
  } else {
    m += Number(h) * 60;
  }
  if (format.includes("mm")) {
    format = format.replace("mm", padZero(m));
  } else {
    s += Number(m) * 60;
  }
  if (format.includes("ss")) {
    format = format.replace("ss", padZero(s));
  } else {
    ms += Number(s) * 1e3;
  }
  if (format.includes("S")) {
    const msC = padZero(ms, 3).toString();
    if (format.includes("SSS")) {
      format = format.replace("SSS", msC);
    } else if (format.includes("SS")) {
      format = format.replace("SS", msC.slice(0, 2));
    } else if (format.includes("S")) {
      format = format.replace("S", msC.slice(0, 1));
    }
  }
  return format;
};
const formatRemainTime = (t, format, type) => {
  const ts = t;
  const rest = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  };
  const SECOND = 1e3;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  if (ts > 0) {
    rest.d = ts >= SECOND ? Math.floor(ts / DAY) : 0;
    rest.h = Math.floor(ts % DAY / HOUR);
    rest.m = Math.floor(ts % HOUR / MINUTE);
    rest.s = Math.floor(ts % MINUTE / SECOND);
    rest.ms = Math.floor(ts % SECOND);
  }
  return type == "custom" ? rest : parseFormat(__spreadValues({}, rest), format);
};
const _hoisted_1 = { class: "nut-countdown" };
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCountdown"
}), {
  __name: "countdown.taro",
  props: {
    modelValue: {},
    paused: { type: Boolean, default: false },
    startTime: { default: "" },
    endTime: { default: "" },
    millisecond: { type: Boolean, default: false },
    format: { default: "HH:mm:ss" },
    autoStart: { type: Boolean, default: true },
    time: { default: 0 }
  },
  emits: [
    "input",
    "update:modelValue",
    "end",
    "restart",
    "paused",
    // will be deprecated
    "onEnd",
    "onRestart",
    "onPaused"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const restTime = ref(0);
    const timer = ref(null);
    const counting = ref(!props.paused && props.autoStart);
    const handleEndTime = ref(Date.now());
    const diffTime = ref(0);
    const renderTime = computed(() => {
      return formatRemainTime(restTime.value, props.format);
    });
    const initTime = () => {
      handleEndTime.value = Number(props.endTime);
      diffTime.value = Date.now() - getTimeStamp(props.startTime);
      if (!counting.value)
        counting.value = true;
      tick();
    };
    const tick = () => {
      if (window !== void 0) {
        timer.value = requestAnimationFrame(() => {
          if (counting.value) {
            const currentTime = Date.now() - diffTime.value;
            const remainTime = Math.max(handleEndTime.value - currentTime, 0);
            restTime.value = remainTime;
            if (!remainTime) {
              counting.value = false;
              pause();
              emit("end");
              emit("onEnd");
            }
            if (remainTime > 0) {
              tick();
            }
          }
        });
      }
    };
    const start = () => {
      if (!counting.value && !props.autoStart) {
        counting.value = true;
        handleEndTime.value = Date.now() + Number(restTime.value);
        tick();
        emit("restart", restTime.value);
        emit("onRestart", restTime.value);
      }
    };
    const pause = () => {
      cancelAnimationFrame(timer.value);
      counting.value = false;
      emit("paused", restTime.value);
      emit("onPaused", restTime.value);
    };
    const reset = () => {
      if (!props.autoStart) {
        pause();
        restTime.value = Number(props.time);
      }
    };
    __expose({
      start,
      pause,
      reset
    });
    onBeforeMount(() => {
      if (props.autoStart) {
        initTime();
      } else {
        restTime.value = Number(props.time);
      }
    });
    watch(
      () => restTime.value,
      (value) => {
        const tranTime = formatRemainTime(value, props.format, "custom");
        emit("update:modelValue", tranTime);
        emit("input", tranTime);
      }
    );
    watch(
      () => props.paused,
      (v, ov) => {
        if (!ov) {
          if (counting.value) {
            pause();
          }
        } else {
          if (!counting.value) {
            counting.value = true;
            handleEndTime.value = Date.now() + Number(restTime.value);
            tick();
          }
          emit("restart", restTime.value);
          emit("onRestart", restTime.value);
        }
      }
    );
    watch(
      () => props.endTime,
      () => {
        initTime();
      }
    );
    watch(
      () => props.startTime,
      () => {
        initTime();
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createElementVNode("view", {
            class: "nut-countdown__content",
            innerHTML: renderTime.value
          }, null, 8, _hoisted_2)
        ])
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Countdown,
  _sfc_main as default
};
