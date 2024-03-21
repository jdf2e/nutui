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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, createElementVNode, toDisplayString } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];
const prefix = "nut-price";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutPrice"
}), {
  __name: "price",
  props: {
    price: { default: 0 },
    needSymbol: { type: Boolean, default: true },
    symbol: { default: "&yen;" },
    decimalDigits: { default: 2 },
    thousands: { type: Boolean, default: false },
    position: { default: "before" },
    size: { default: "normal" },
    strikeThrough: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return {
        [prefix]: true,
        [`${prefix}--strike`]: props.strikeThrough
      };
    });
    const showSymbol = computed(() => {
      const symbol = props.needSymbol ? props.symbol : "";
      return symbol;
    });
    const checkPoint = (price) => {
      return String(price).indexOf(".") > 0;
    };
    const formatThousands = (num) => {
      if (Number(num) == 0) {
        num = 0;
      }
      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits);
        num = typeof num.split(".") === "string" ? num.split(".") : num.split(".")[0];
      } else {
        num = num.toString();
      }
      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      } else {
        return num;
      }
    };
    const formatDecimal = (decimalNum) => {
      if (Number(decimalNum) == 0) {
        decimalNum = 0;
      }
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
        decimalNum = typeof decimalNum.split(".") === "string" ? 0 : decimalNum.split(".")[1] ? decimalNum.split(".")[1] : 0;
      } else {
        decimalNum = 0;
      }
      const result = "0." + decimalNum;
      const resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value)
      }, [
        _ctx.needSymbol && _ctx.position === "before" ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
          innerHTML: showSymbol.value
        }, null, 10, _hoisted_1)) : createCommentVNode("", true),
        createElementVNode("view", {
          class: normalizeClass(`nut-price--${_ctx.size}`)
        }, toDisplayString(formatThousands(_ctx.price)), 3),
        _ctx.decimalDigits != 0 ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: normalizeClass(`nut-price--decimal-${_ctx.size}`)
        }, ".", 2)) : createCommentVNode("", true),
        createElementVNode("view", {
          class: normalizeClass(`nut-price--decimal-${_ctx.size}`)
        }, toDisplayString(formatDecimal(_ctx.price)), 3),
        _ctx.needSymbol && _ctx.position === "after" ? (openBlock(), createElementBlock("view", {
          key: 2,
          class: normalizeClass(["nut-price--symbol", `nut-price--symbol-${_ctx.size}`]),
          innerHTML: showSymbol.value
        }, null, 10, _hoisted_2)) : createCommentVNode("", true)
      ], 2);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Price,
  _sfc_main as default
};
