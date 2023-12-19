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
import { reactive, watch, computed, toRefs, openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("watermark");
const _sfc_main = create({
  props: {
    name: {
      type: String,
      default: ""
    },
    gapY: {
      type: Number,
      default: 48
    },
    gapX: {
      type: Number,
      default: 24
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 64
    },
    rotate: {
      type: Number,
      default: -22
    },
    image: {
      type: String,
      default: ""
    },
    imageWidth: {
      type: Number,
      default: 120
    },
    imageHeight: {
      type: Number,
      default: 64
    },
    content: {
      type: [String, Array],
      default: ""
    },
    fontColor: {
      type: String,
      default: "rgba(0,0,0,.15)"
    },
    fontStyle: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "PingFang SC"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    fullPage: {
      type: Boolean,
      default: ""
    }
  },
  emits: ["click"],
  setup(props) {
    const state = reactive({
      base64Url: ""
    });
    const {
      zIndex,
      gapX,
      gapY,
      width,
      height,
      rotate,
      image,
      imageWidth,
      imageHeight,
      content,
      fontStyle,
      fontWeight,
      fontColor,
      fontSize,
      fontFamily
    } = props;
    const init = () => {
      const canvas = document.createElement("canvas");
      const ratio = window.devicePixelRatio;
      const ctx = canvas.getContext("2d");
      const canvasWidth = `${(gapX + width) * ratio}px`;
      const canvasHeight = `${(gapY + height) * ratio}px`;
      const markWidth = width * ratio;
      const markHeight = height * ratio;
      canvas.setAttribute("width", canvasWidth);
      canvas.setAttribute("height", canvasHeight);
      if (ctx) {
        if (image) {
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate(Math.PI / 180 * Number(rotate));
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.referrerPolicy = "no-referrer";
          img.src = image;
          img.onload = () => {
            ctx.drawImage(
              img,
              -imageWidth * ratio / 2,
              -imageHeight * ratio / 2,
              imageWidth * ratio,
              imageHeight * ratio
            );
            ctx.restore();
            state.base64Url = canvas.toDataURL();
          };
        } else if (content) {
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.translate(markWidth / 2, markHeight / 2);
          ctx.rotate(Math.PI / 180 * Number(rotate));
          const markSize = Number(fontSize) * ratio;
          ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
          ctx.fillStyle = fontColor;
          if (Array.isArray(content)) {
            content.map((item, index2) => {
              ctx.fillText(item, 0, (index2 - 1) * markSize);
            });
          } else {
            ctx.fillText(content, 0, 0);
          }
          ctx.restore();
          state.base64Url = canvas.toDataURL();
        }
      } else {
        throw new Error("当前环境不支持Canvas");
      }
    };
    init();
    watch(
      () => [
        zIndex,
        gapX,
        gapY,
        width,
        height,
        rotate,
        image,
        imageWidth,
        imageHeight,
        content,
        fontStyle,
        fontWeight,
        fontColor,
        fontSize,
        fontFamily
      ],
      () => {
        init();
      }
    );
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-full-page`]: props.fullPage
      };
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), { classes });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle({
      zIndex: _ctx.zIndex,
      backgroundSize: `${_ctx.gapX + _ctx.width}px`,
      backgroundImage: `url('${_ctx.base64Url}')`
    })
  }, null, 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
