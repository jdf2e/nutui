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
import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode, renderSlot, createVNode, unref } from "vue";
import { Checked } from "@nutui/icons-vue-taro";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = { class: "nut-progress" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutProgress"
}), {
  __name: "progress.taro",
  props: {
    percentage: { default: 0 },
    size: { default: "base" },
    status: { default: "text" },
    strokeWidth: {},
    textInside: { type: Boolean, default: false },
    showText: { type: Boolean, default: true },
    strokeColor: {},
    textColor: {},
    textBackground: {},
    isShowPercentage: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const height = computed(() => {
      if (props.strokeWidth) {
        return props.strokeWidth + "px";
      }
      return void 0;
    });
    const percentage = computed(() => {
      return Number(props.percentage) >= 100 ? 100 : Number(props.percentage);
    });
    const bgStyle = computed(() => {
      return {
        width: percentage.value + "%",
        background: props.strokeColor || ""
      };
    });
    const textStyle = computed(() => {
      return {
        color: props.textColor || ""
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", _hoisted_1, [
        createElementVNode("div", {
          class: normalizeClass(["nut-progress-outer", [_ctx.showText && !_ctx.textInside ? "nut-progress-outer-part" : "", _ctx.size ? "nut-progress-" + _ctx.size : ""]]),
          style: normalizeStyle({ height: height.value })
        }, [
          createElementVNode("div", {
            class: normalizeClass(["nut-progress-inner", _ctx.status === "active" ? "nut-active" : ""]),
            style: normalizeStyle(bgStyle.value)
          }, null, 6),
          createTextVNode(),
          _ctx.showText && _ctx.textInside && !_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "nut-progress-text nut-progress-insidetext",
            style: normalizeStyle({
              lineHeight: height.value,
              left: `${percentage.value}%`,
              transform: `translate(-${+percentage.value}%,-50%)`,
              background: _ctx.textBackground || _ctx.strokeColor
            })
          }, [
            createElementVNode("span", {
              style: normalizeStyle(textStyle.value)
            }, toDisplayString(percentage.value) + toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)
          ], 4)) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.showText && _ctx.textInside && _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "nut-progress-slot",
            style: normalizeStyle({
              position: `absolute`,
              top: `50%`,
              left: `${percentage.value}%`,
              transform: `translate(-${+percentage.value}%,-50%)`
            })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)) : createCommentVNode("", true)
        ], 6),
        createTextVNode(),
        _ctx.showText && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "nut-progress-text",
          style: normalizeStyle({ lineHeight: height.value })
        }, [
          _ctx.status === "text" || _ctx.status === "active" ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(textStyle.value)
          }, toDisplayString(percentage.value) + toDisplayString(_ctx.isShowPercentage ? "%" : ""), 5)) : _ctx.status === "icon" ? renderSlot(_ctx.$slots, "icon-name", { key: 1 }, () => [
            createVNode(unref(Checked), {
              width: "15px",
              height: "15px",
              color: "#439422"
            })
          ]) : createCommentVNode("", true)
        ], 4)) : createCommentVNode("", true)
      ]);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Progress,
  _sfc_main as default
};
