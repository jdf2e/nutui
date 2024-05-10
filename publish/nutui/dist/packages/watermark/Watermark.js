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
import { defineComponent, ref, computed, watchEffect, openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
import { w as withInstall } from "../with-install-Ch3FF0uS.js";
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, {
  name: "NutWatermark"
}), {
  __name: "watermark",
  props: {
    gapX: { default: 24 },
    gapY: { default: 48 },
    zIndex: { default: 2e3 },
    width: { default: 120 },
    height: { default: 64 },
    rotate: { default: -22 },
    image: {},
    imageWidth: { default: 120 },
    imageHeight: { default: 64 },
    content: { default: "" },
    fontColor: { default: "rgba(0,0,0,.15)" },
    fontStyle: { default: "normal" },
    fontFamily: { default: "PingFang SC" },
    fontWeight: { default: "normal" },
    fontSize: { default: 14 },
    fullPage: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const base64Url = ref("");
    const classes = computed(() => {
      const prefixCls = "nut-watermark";
      return {
        [prefixCls]: true,
        [`${prefixCls}-full-page`]: props.fullPage
      };
    });
    const init = () => {
      const canvas = document.createElement("canvas");
      const ratio = window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      const canvasWidth = `${(props.gapX + props.width) * ratio}px`;
      const canvasHeight = `${(props.gapY + props.height) * ratio}px`;
      const markWidth = props.width * ratio;
      const markHeight = props.height * ratio;
      canvas.setAttribute("width", canvasWidth);
      canvas.setAttribute("height", canvasHeight);
      if (ctx) {
        if (props.image) {
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate(Math.PI / 180 * Number(props.rotate));
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = props.image;
          img.onload = () => {
            ctx.drawImage(
              img,
              -props.imageWidth * ratio / 2,
              -props.imageHeight * ratio / 2,
              props.imageWidth * ratio,
              props.imageHeight * ratio
            );
            ctx.restore();
            base64Url.value = canvas.toDataURL();
          };
        } else if (props.content) {
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate(Math.PI / 180 * Number(props.rotate));
          const markSize = Number(props.fontSize) * ratio;
          ctx.font = `${props.fontStyle} normal ${props.fontWeight} ${markSize}px/${markHeight}px ${props.fontFamily}`;
          ctx.fillStyle = props.fontColor;
          if (Array.isArray(props.content)) {
            props.content.map((item, index) => {
              ctx.fillText(item, 0, (index - 1) * markSize);
            });
          } else {
            ctx.fillText(props.content, 0, 0);
          }
          ctx.restore();
          base64Url.value = canvas.toDataURL();
        }
      } else {
        throw new Error("当前环境不支持Canvas");
      }
    };
    watchEffect(() => {
      init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass(classes.value),
        style: normalizeStyle({
          zIndex: _ctx.zIndex,
          backgroundSize: `${_ctx.gapX + _ctx.width}px`,
          backgroundImage: `url('${base64Url.value}')`
        })
      }, null, 6);
    };
  }
}));
withInstall(_sfc_main);
export {
  _sfc_main as Watermark,
  _sfc_main as default
};
