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
import { reactive, computed, onBeforeMount, watch, toRefs, openBlock, createElementBlock, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { p as padZero } from "../util-Bt8WDYya.js";
import { u as useLocale } from "../index-xXrovSQL.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const getTimeStamp = (timeStr) => {
  if (!timeStr)
    return Date.now();
  let t = timeStr;
  t = +t > 0 ? +t : t.toString().replace(/-/g, "/");
  return new Date(t).getTime();
};
const { create } = createComponent("countdown");
const cN = "NutCountdown";
const _sfc_main = create({
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {};
      }
    },
    paused: {
      default: false,
      type: Boolean
    },
    startTime: {
      // 可以是服务器当前时间
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== "invalid date";
      }
    },
    endTime: {
      type: [Number, String],
      validator(v) {
        const dateStr = new Date(v).toString().toLowerCase();
        return dateStr !== "invalid date";
      }
    },
    // 是否开启毫秒
    millisecond: {
      default: false,
      type: Boolean
    },
    // 时间格式化
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    autoStart: {
      type: Boolean,
      default: true
    },
    // 倒计时时长，单位毫秒
    time: {
      type: [Number, String],
      default: 0
    }
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
  setup(props, { emit, slots }) {
    const translate = useLocale(cN);
    const state = reactive({
      restTime: 0,
      // 倒计时剩余时间时间
      timer: null,
      counting: !props.paused && props.autoStart,
      // 是否处于倒计时中
      handleEndTime: Date.now(),
      // 最终截止时间
      diffTime: 0
      // 设置了 startTime 时，与 date.now() 的差异
    });
    const renderTime = computed(() => {
      return formatRemainTime(state.restTime);
    });
    const initTime = () => {
      state.handleEndTime = props.endTime;
      state.diffTime = Date.now() - getTimeStamp(props.startTime);
      if (!state.counting)
        state.counting = true;
      tick();
    };
    const tick = () => {
      if (window !== void 0) {
        state.timer = requestAnimationFrame(() => {
          if (state.counting) {
            const currentTime = Date.now() - state.diffTime;
            const remainTime = Math.max(state.handleEndTime - currentTime, 0);
            state.restTime = remainTime;
            if (!remainTime) {
              state.counting = false;
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
    const formatRemainTime = (t, type) => {
      const ts = t;
      let rest = {
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
      return type == "custom" ? rest : parseFormat(__spreadValues({}, rest));
    };
    const parseFormat = (time) => {
      let { d, h, m, s, ms } = time;
      let format = props.format;
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
    const start = () => {
      if (!state.counting && !props.autoStart) {
        state.counting = true;
        state.handleEndTime = Date.now() + Number(state.restTime);
        tick();
        emit("restart", state.restTime);
        emit("onRestart", state.restTime);
      }
    };
    const pause = () => {
      cancelAnimationFrame(state.timer);
      state.counting = false;
      emit("paused", state.restTime);
      emit("onPaused", state.restTime);
    };
    const reset = () => {
      if (!props.autoStart) {
        pause();
        state.restTime = props.time;
      }
    };
    onBeforeMount(() => {
      if (props.autoStart) {
        initTime();
      } else {
        state.restTime = props.time;
      }
    });
    watch(
      () => state.restTime,
      (value) => {
        let tranTime = formatRemainTime(value, "custom");
        emit("update:modelValue", tranTime);
        emit("input", tranTime);
      }
    );
    watch(
      () => props.paused,
      (v, ov) => {
        if (!ov) {
          if (state.counting) {
            pause();
          }
        } else {
          if (!state.counting) {
            state.counting = true;
            state.handleEndTime = Date.now() + Number(state.restTime);
            tick();
          }
          emit("restart", state.restTime);
          emit("onRestart", state.restTime);
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
    return __spreadProps(__spreadValues({}, toRefs(props)), {
      slots,
      start,
      pause,
      renderTime,
      translate,
      reset
    });
  }
});
const _hoisted_1 = { class: "nut-countdown" };
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    _ctx.slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("view", {
      key: 1,
      class: "nut-countdown__content",
      innerHTML: _ctx.renderTime
    }, null, 8, _hoisted_2))
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
