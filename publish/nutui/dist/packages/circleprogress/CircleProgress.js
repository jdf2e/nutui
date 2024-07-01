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
import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, unref, Fragment, renderList, renderSlot, toDisplayString } from "vue";
import { k as isObject } from "../util-D1pvnUYu.js";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { viewBox: "0 0 100 100" };
const _hoisted_2 = ["id"];
const _hoisted_3 = ["offset", "stop-color"];
const _hoisted_4 = ["d", "stroke-width"];
const _hoisted_5 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_6 = { class: "nut-circle-progress__text" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutCircleProgress"
}), {
  __name: "circle-progress",
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
    const refRandomId = Math.random().toString(36).slice(-8);
    const path = computed(() => {
      const isWise = props.clockwise ? 1 : 0;
      return `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`;
    });
    const hoverColor = computed(() => {
      return isObject(props.color) ? `url(#${refRandomId})` : props.color;
    });
    const hoverStyle = computed(() => {
      let perimeter = 283;
      let offset = perimeter * Number(props.progress) / 100;
      return {
        stroke: isObject(props.color) ? `url(#${refRandomId})` : props.color,
        strokeDasharray: `${offset}px ${perimeter}px`
      };
    });
    const pathStyle = computed(() => {
      return {
        stroke: props.pathColor
      };
    });
    const stop = computed(() => {
      if (!isObject(props.color)) {
        return;
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
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "nut-circle-progress",
        style: normalizeStyle({ height: Number(_ctx.radius) * 2 + "px", width: Number(_ctx.radius) * 2 + "px" })
      }, [
        (openBlock(), createElementBlock("svg", _hoisted_1, [
          createElementVNode("defs", null, [
            createElementVNode("linearGradient", {
              id: unref(refRandomId),
              x1: "100%",
              y1: "0%",
              x2: "0%",
              y2: "0%"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(stop.value, (item, index) => {
                return openBlock(), createElementBlock("stop", {
                  key: index,
                  offset: item.key,
                  "stop-color": item.value
                }, null, 8, _hoisted_3);
              }), 128))
            ], 8, _hoisted_2)
          ]),
          createElementVNode("path", {
            class: "nut-circle-progress__path",
            style: normalizeStyle(pathStyle.value),
            d: path.value,
            fill: "none",
            "stroke-width": _ctx.strokeWidth
          }, " > ", 12, _hoisted_4),
          createElementVNode("path", {
            class: "nut-circle-progress__hover",
            style: normalizeStyle(hoverStyle.value),
            d: path.value,
            fill: "none",
            stroke: hoverColor.value,
            "stroke-linecap": _ctx.strokeLinecap,
            "stroke-width": _ctx.strokeWidth
          }, null, 12, _hoisted_5)
        ])),
        createElementVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode("div", null, toDisplayString(_ctx.progress) + "%", 1)
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
