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
import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeStyle, createElementVNode, createTextVNode, renderSlot, toDisplayString } from "vue";
import Taro from "@tarojs/taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-circle-progress__text" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCircleProgress"
}), {
  __name: "circle-progress.taro",
  props: {
    progress: { default: 0 },
    strokeWidth: { default: 5 },
    radius: { default: 50 },
    strokeLinecap: { default: "round" },
    color: { default: "#fa2c19" },
    pathColor: { default: "#d9d9d9" },
    clockwise: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const isIos = Taro.getSystemInfoSync().platform === "ios";
    const currentRate = ref(props.progress);
    const refRandomId = Math.random().toString(36).slice(-8);
    const isObject = (val) => val !== null && typeof val === "object";
    const transColor = (color) => {
      return color && color.replace("#", "%23");
    };
    const stop = () => {
      if (!isObject(props.color)) {
        return [];
      }
      let color = props.color;
      const colorArr = Object.keys(color).sort((a, b) => parseFloat(a) - parseFloat(b));
      let stopArr = [];
      colorArr.map((item) => {
        let obj = {
          key: "",
          value: ""
        };
        obj.key = item;
        obj.value = color[item];
        stopArr.push(obj);
      });
      return stopArr;
    };
    const style = computed(() => {
      let { strokeWidth } = props;
      let stopArr = stop();
      let stopDom = [];
      if (stopArr) {
        stopArr.map((item) => {
          let obj = "";
          obj = `%3Cstop offset='${item.key}' stop-color='${transColor(item.value)}'/%3E`;
          stopDom.push(obj);
        });
      }
      let perimeter = 283;
      let progress = +currentRate.value;
      let offset = perimeter * Number(format(parseFloat(progress.toFixed(1)))) / 100;
      const isWise = props.clockwise ? 1 : 0;
      const color = isObject(props.color) ? `url(%23${refRandomId})` : transColor(props.color);
      let d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
      const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`;
      const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(props.pathColor)}' fill='none'/%3E`;
      const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${color}' fill='none'/%3E`;
      return {
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
        width: "100%",
        height: "100%",
        transition: `${isIos ? "" : "background-image .3s ease 0s, "}stroke .3s ease 0s`
      };
    });
    const format = (progress) => Math.min(Math.max(+progress, 0), 100);
    watch(
      () => props.progress,
      (value) => {
        currentRate.value = Math.min(Math.max(+value, 0), 100);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "nut-circle-progress",
        style: normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
      }, [
        createElementVNode("div", {
          style: normalizeStyle(style.value)
        }, null, 4),
        createTextVNode(),
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("span", null, toDisplayString(_ctx.progress) + "%", 1)
          ])
        ])
      ], 4);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as CircleProgress,
  _sfc_main as default
};
