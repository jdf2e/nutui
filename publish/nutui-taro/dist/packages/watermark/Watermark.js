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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { reactive, watch, computed, toRefs, openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import Taro from "@tarojs/taro";
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
      type: String,
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
    const init = () => __async(this, null, function* () {
      let ratio = 1;
      Taro.getSystemInfo({
        success(res) {
          ratio = res.pixelRatio;
        }
      });
      const canvasWidth = `${(gapX + width) * ratio}`;
      const canvasHeight = `${(gapY + height) * ratio}`;
      const markWidth = width * ratio;
      const markHeight = height * ratio;
      const canvas = Taro.createOffscreenCanvas({
        type: "2d",
        width: Number(canvasWidth),
        height: Number(canvasHeight)
      });
      const ctx = canvas.getContext("2d");
      if (ctx) {
        if (image) {
          const img = canvas.createImage();
          dealWithImage(ctx, img, ratio, ctx.canvas, markWidth, markHeight);
        } else if (content) {
          dealWithText(ctx, ratio, ctx.canvas, markWidth, markHeight);
        }
      } else {
        throw new Error("当前环境不支持Canvas");
      }
    });
    const initH5 = () => {
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
          const img = new Image();
          dealWithImage(ctx, img, ratio, canvas, markWidth, markHeight);
        } else if (content) {
          dealWithText(ctx, ratio, canvas, markWidth, markHeight);
        }
      } else {
        throw new Error("当前环境不支持Canvas");
      }
    };
    const dealWithImage = (ctx, img, ratio, canvas, markWidth, markHeight) => {
      ctx.translate(markWidth / 2, markHeight / 2);
      ctx.rotate(Math.PI / 180 * Number(rotate));
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
    };
    const dealWithText = (ctx, ratio, canvas, markWidth, markHeight) => {
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.translate(markWidth / 2, markHeight / 2);
      ctx.rotate(Math.PI / 180 * Number(rotate));
      const markSize = Number(fontSize) * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
      ctx.fillStyle = fontColor;
      ctx.fillText(content, 0, 0);
      ctx.restore();
      state.base64Url = canvas.toDataURL();
    };
    if (Taro.getEnv() === "WEB") {
      initH5();
    } else {
      init();
    }
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
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
