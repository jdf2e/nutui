var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { defineComponent, useSlots, h as h$1, openBlock, createBlock, computed, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toRefs, resolveComponent, createCommentVNode, createTextVNode, renderSlot, reactive, ref, onMounted, watch, Fragment, withModifiers, toDisplayString, withDirectives, createVNode, withCtx, vShow } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
import { a as preventDefault, c as clamp } from "../util-WZB3Ltgx.js";
import { IconFont } from "@nutui/icons-vue-taro";
import { u as useTouch } from "../index-084nl_oE.js";
import Taro, { useReady } from "@tarojs/taro";
const h = /* @__PURE__ */ defineComponent({
  __name: "IconFont",
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" },
    classPrefix: { type: String, default: "nut-icon" },
    fontClassName: { type: String, default: "nutui-iconfont" },
    color: { type: String, default: "" },
    tag: { type: String, default: "i" }
  },
  setup(e) {
    var c;
    const t = e, a2 = "nut-icon", o = useSlots(), s = () => t.name ? t.name.indexOf("/") !== -1 : false, r = (n) => {
      if (n)
        return isNaN(Number(n)) ? String(n) : n + "px";
    }, i2 = s();
    let l2 = h$1(
      i2 ? "img" : t.tag,
      {
        class: i2 ? `${a2}__img` : `${t.fontClassName} ${a2} ${t.classPrefix}-${t.name}`,
        style: {
          color: t.color,
          fontSize: r(t.size),
          width: r(t.width || t.size),
          height: r(t.height || t.size)
        },
        src: i2 ? t.name : ""
      },
      (c = o.default) == null ? void 0 : c.call(o)
    );
    const u2 = () => l2;
    return (n, y) => (openBlock(), createBlock(u2));
  }
});
function S(e) {
  return e.name = "IconFont", e.install = (t) => {
    t.component("IconFont", e);
  }, e;
}
S(h);
const a$1 = (r) => defineComponent({
  props: {
    class: { type: String, default: "" },
    name: { type: String, default: r },
    color: { type: String, default: "" },
    width: { type: [String, Number], default: "" },
    height: { type: [String, Number], default: "" }
  },
  setup(e) {
    const n = (t) => {
      if (t)
        return isNaN(Number(t)) ? String(t) : t + "px";
    }, o = computed(() => {
      const t = "nut-icon";
      return {
        [e.class]: e.class,
        [t]: true,
        [t + "-" + e.name]: e.name
      };
    }), c = computed(() => {
      const t = {};
      return t.height = n(e.height), t.width = n(e.width), t.color = e.color, t;
    });
    return { classes: o, style: c };
  }
}), l = (r, e) => {
  const n = r.__vccOpts || r;
  for (const [o, c] of e)
    n[o] = c;
  return n;
};
a$1("add");
a$1("addfollow");
a$1("arrow-down");
a$1("arrow-down2");
a$1("arrow-right");
a$1("arrow-right2");
a$1("arrow-up");
a$1("arrow-up2");
a$1("ask");
a$1("ask2");
a$1("cart");
a$1("cart2");
a$1("category");
a$1("check-checked");
a$1("check-disabled");
a$1("check-normal");
a$1("Check");
a$1("checked");
a$1("checklist");
a$1("circle-close");
a$1("clock");
a$1("close-little");
a$1("close");
a$1("comment");
a$1("date");
a$1("del");
a$1("del2");
a$1("dongdong");
a$1("dou-arrow-up");
a$1("down-arrow");
a$1("download");
a$1("dshop");
a$1("edit");
a$1("eye");
a$1("fabulous");
a$1("failure");
a$1("find");
a$1("follow");
a$1("footprint");
a$1("github");
a$1("heart-fill-n");
a$1("heart-fill");
a$1("heart-fill1");
a$1("heart-fill2");
a$1("heart-fill3");
a$1("heart-n");
a$1("heart");
a$1("heart1");
a$1("heart2");
a$1("home");
a$1("horizontal-n");
a$1("horizontal");
a$1("image-error");
a$1("image");
a$1("issue");
a$1("JD");
a$1("jdl");
a$1("JIMI40");
a$1("joy-smile");
a$1("left");
a$1("link");
const a = a$1("loading"), i = /* @__PURE__ */ createElementVNode("path", {
  d: "M784 902.4c9.6 19.2 6.4 41.6-12.8 54.4-19.2 9.6-41.6 3.2-51.2-12.8-9.6-19.2-6.4-41.6 12.8-54.4 16-12.8 38.4-8 51.2 12.8zM550.4 984c0 22.4-16 38.4-38.4 38.4s-38.4-16-38.4-38.4v-24c0-22.4 19.2-38.4 41.6-38.4 19.2 0 35.2 16 38.4 38.4v25.6h-3.2zm-240-43.2c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-16-51.2l28.8-51.2c9.6-19.2 35.2-25.6 54.4-16s25.6 35.2 12.8 54.4l-25.6 48zM121.6 784c-19.2 9.6-41.6 3.2-54.4-16-9.6-19.2-6.4-41.6 12.8-54.4l76.8-44.8c19.2-9.6 41.6-3.2 54.4 16 9.6 19.2 3.2 41.6-16 54.4L121.6 784zM38.4 552C16 552 0 536 0 513.6s16-38.4 38.4-38.4H160c22.4 0 38.4 19.2 38.4 38.4 0 22.4-16 38.4-38.4 38.4H38.4zm44.8-241.6c-19.2-9.6-25.6-35.2-16-51.2 9.6-19.2 35.2-25.6 54.4-16L256 320c19.2 9.6 25.6 35.2 16 54.4s-35.2 25.6-54.4 16l-134.4-80zm160-185.6 92.8 160c9.6 19.2 35.2 25.6 54.4 12.8s25.6-35.2 12.8-54.4l-92.8-160C297.6 64 275.2 60.8 256 70.4c-16 12.8-22.4 33.6-12.8 54.4zM473.6 40c0-22.4 16-38.4 38.4-38.4s38.4 19.2 38.4 38.4v184c0 22.4-19.2 38.4-38.4 38.4-22.4 0-38.4-19.2-38.4-38.4V40zm240 43.2c9.6-19.2 35.2-25.6 54.4-16 19.2 9.6 25.6 35.2 16 51.2l-92.8 160c-9.6 19.2-35.2 25.6-54.4 16-19.2-9.6-25.6-35.2-12.8-54.4l89.6-156.8zm188.8 160-160 92.8c-19.2 9.6-25.6 35.2-16 54.4 12.8 19.2 35.2 25.6 54.4 12.8l160-92.8c19.2-9.6 25.6-35.2 12.8-54.4-9.6-16-32-25.6-51.2-12.8zM985.6 472c22.4 0 38.4 16 38.4 38.4s-16 38.4-38.4 38.4H800c-22.4 0-38.4-19.2-38.4-38.4 0-22.4 19.2-38.4 38.4-38.4h185.6z",
  fill: "currentColor",
  "fill-opacity": "0.9"
}, null, -1), m = [
  i
];
function p(c, z, d, _, f, h2) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(c.classes),
    style: normalizeStyle(c.style),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    role: "presentation"
  }, m, 6);
}
const u = /* @__PURE__ */ l(a, [["render", p]]);
a$1("loading1");
a$1("location");
a$1("location2");
a$1("locationg3");
a$1("lower");
a$1("marshalling");
a$1("mask-close");
a$1("message");
a$1("microphone");
a$1("minus");
a$1("more-s");
a$1("more-x");
a$1("more");
a$1("my");
a$1("my2");
a$1("notice");
a$1("order");
a$1("people");
a$1("photograph");
a$1("play-circle-fill");
a$1("play-double-back");
a$1("play-double-forward");
a$1("play-start");
a$1("play-stop");
a$1("plus");
a$1("poweroff-circle-fill");
a$1("rect-down");
a$1("rect-left");
a$1("rect-right");
a$1("rect-up");
a$1("refresh");
a$1("refresh2");
a$1("retweet");
a$1("right");
a$1("s-follow");
a$1("scan");
a$1("scan2");
a$1("screen-little");
a$1("search");
a$1("search2");
a$1("service");
a$1("setting");
a$1("share-n");
a$1("share");
a$1("share1");
a$1("shop");
a$1("shop3");
a$1("star-fill-n");
a$1("star-fill");
a$1("star-fill1");
a$1("star-fill2");
a$1("star-n");
a$1("star");
a$1("star1");
a$1("star11");
a$1("star2");
a$1("success");
a$1("tips");
a$1("top");
a$1("triangle-down");
a$1("triangle-up");
a$1("uploader");
a$1("voice");
const { componentName, create: create$1 } = createComponent("button");
const _sfc_main$1 = create$1({
  components: { Loading: u },
  props: {
    color: String,
    shape: {
      type: String,
      default: "round"
    },
    plain: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "normal"
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { type, size, shape, disabled, loading, color, plain, block } = toRefs(props);
    const handleClick = (event) => {
      if (!loading.value && !disabled.value) {
        emit("click", event);
      }
    };
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${type.value}`]: type.value,
        [`${prefixCls}--${size.value}`]: size.value,
        [`${prefixCls}--${shape.value}`]: shape.value,
        [`${prefixCls}--plain`]: plain.value,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--loading`]: loading.value
      };
    });
    const getStyle = computed(() => {
      var _a;
      const style = {};
      if (color == null ? void 0 : color.value) {
        if (plain.value) {
          style.color = color.value;
          style.background = "#fff";
          if (!((_a = color.value) == null ? void 0 : _a.includes("gradient"))) {
            style.borderColor = color.value;
          }
        } else {
          style.color = "#fff";
          style.background = color.value;
        }
      }
      return style;
    });
    return {
      handleClick,
      classes,
      getStyle
    };
  }
});
const _hoisted_1$1 = { class: "nut-button__wrap" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.getStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createElementVNode("view", _hoisted_1$1, [
      _ctx.loading ? (openBlock(), createBlock(_component_Loading, {
        key: 0,
        class: "nut-icon-loading"
      })) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.$slots.icon && !_ctx.loading ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.$slots.default ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: normalizeClass({ "nut-button__text": _ctx.$slots.icon || _ctx.loading })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)) : createCommentVNode("", true)
    ])
  ], 6);
}
const NutButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const compareVersion = (v1Old, v2Old) => {
  let v1 = v1Old.split(".");
  let v2 = v2Old.split(".");
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }
  for (let i2 = 0; i2 < len; i2++) {
    const num1 = parseInt(v1[i2]);
    const num2 = parseInt(v2[i2]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};
const isWeapp = () => {
  return process.env.TARO_ENV === "weapp";
};
function _easyCanvasContextBase(systemInfo, lowCallback, highCallback, targetVersion = "1.9.90") {
  if (isWeapp() && compareVersion(systemInfo.SDKVersion, targetVersion) >= 0) {
    highCallback();
  } else {
    lowCallback();
  }
}
function easySetFillStyle(systemInfo, canvasContext, color) {
  _easyCanvasContextBase(
    systemInfo,
    () => {
      canvasContext.setFillStyle(color);
    },
    () => {
      if (typeof color === "string") {
        canvasContext.fillStyle = color;
      }
    }
  );
}
const { create } = createComponent("avatar-cropper");
const _sfc_main = create({
  components: {
    NutButton,
    IconFont
  },
  props: {
    maxZoom: {
      type: Number,
      default: 3
    },
    space: {
      type: Number,
      default: 10
    },
    toolbarPosition: {
      type: String,
      default: "bottom"
    },
    editText: {
      type: String,
      default: "编辑"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    sizeType: {
      type: Array,
      default: () => ["original", "compressed"]
    },
    sourceType: {
      type: Array,
      default: () => ["album", "camera"]
    }
  },
  emits: ["confirm", "cancel"],
  setup(props, { emit, expose }) {
    const state = reactive({
      visible: false,
      defScale: 1,
      scale: 1,
      angle: 0,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      displayWidth: 0,
      displayHeight: 0,
      cropperWidth: 0,
      cropperHeight: 0
    });
    const canvasAll = reactive({
      canvasId: `canvas-${Date.now()}`,
      cropperCanvas: null,
      cropperCanvasContext: null
    });
    const drawImage = ref({
      src: "",
      // 规定要使用的图像
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    });
    const touch = useTouch();
    const systemInfo = Taro.getSystemInfoSync();
    const showAlipayCanvas2D = computed(() => {
      return Taro.getEnv() === "ALIPAY" && parseInt(Taro.SDKVersion.replace(/\./g, "")) >= 270;
    });
    const showPixelRatio = Taro.getEnv() === "WEB" || showAlipayCanvas2D.value;
    const pixelRatio = showPixelRatio ? systemInfo.pixelRatio : 1;
    state.displayWidth = systemInfo.windowWidth * pixelRatio;
    state.displayHeight = systemInfo.windowHeight * pixelRatio;
    state.cropperWidth = state.cropperHeight = state.displayWidth - props.space * pixelRatio * 2;
    useReady(() => {
      if (showAlipayCanvas2D.value) {
        const { canvasId } = canvasAll;
        Taro.createSelectorQuery().select(`#${canvasId}`).node(({ node: canvas }) => {
          canvas.width = state.displayWidth;
          canvas.height = state.displayHeight;
          canvasAll.cropperCanvas = canvas;
        }).exec();
      }
    });
    onMounted(() => {
      const { canvasId } = canvasAll;
      canvasAll.cropperCanvasContext = Taro.createCanvasContext(canvasId);
    });
    const isAngle = computed(() => {
      return state.angle === 90 || state.angle === 270;
    });
    const highlightStyle = computed(() => {
      const { cropperWidth } = state;
      const width = cropperWidth / pixelRatio + "px";
      const height = width;
      return {
        width,
        height
      };
    });
    const canvasStyle = computed(() => {
      const { displayWidth, displayHeight } = state;
      return {
        width: `${displayWidth / pixelRatio}px`,
        height: `${displayHeight / pixelRatio}px`
      };
    });
    const cutCanvasStyle = computed(() => {
      const { displayWidth, displayHeight, cropperWidth } = state;
      return {
        top: `${(displayHeight / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        left: `${(displayWidth / pixelRatio - cropperWidth / pixelRatio) / 2}px`,
        width: `${cropperWidth / pixelRatio}px`,
        height: `${cropperWidth / pixelRatio}px`
      };
    });
    const maxMoveX = computed(() => {
      const { displayWidth, scale, cropperWidth } = state;
      const { height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (height * scale - cropperWidth) / 2);
      }
      return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
    });
    const maxMoveY = computed(() => {
      const { displayWidth, scale, cropperWidth } = state;
      const { height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (displayWidth * scale - cropperWidth) / 2);
      }
      return Math.max(0, (height * scale - cropperWidth) / 2);
    });
    const dataURLToImage = (dataURL) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const dataURLToCanvasImage = (canvas, dataURL) => {
      return new Promise((resolve) => {
        const img = new canvas.createImage();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const canvas2dDraw = (ctx) => {
      if (!ctx)
        return;
      const { src, width, height, x, y } = drawImage.value;
      const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state;
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      ctx.fillStyle = "#666";
      ctx.fillRect(0, 0, displayWidth, displayHeight);
      ctx.fillStyle = "#000";
      ctx.fillRect(props.space * pixelRatio, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth);
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
      ctx.rotate(Math.PI / 180 * angle);
      ctx.scale(scale, scale);
      ctx.drawImage(src, x, y, width, height);
    };
    const webDraw = () => {
      const { displayWidth, displayHeight } = state;
      const canvasDom = document.getElementById(canvasAll.canvasId);
      let canvas = canvasDom;
      if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
        canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
      const ctx = canvas.getContext("2d");
      canvas2dDraw(ctx);
    };
    const alipayDraw = () => {
      const { cropperCanvas } = canvasAll;
      let ctx = cropperCanvas.getContext("2d");
      ctx && ctx.resetTransform();
      canvas2dDraw(ctx);
    };
    const draw = () => {
      if (Taro.getEnv() === "WEB") {
        webDraw();
        return;
      }
      if (showAlipayCanvas2D.value) {
        alipayDraw();
        return;
      }
      const { src, width, height, x, y } = drawImage.value;
      const { moveX, moveY, scale, angle, displayWidth, displayHeight, cropperWidth } = state;
      const { cropperCanvasContext } = canvasAll;
      let ctx = cropperCanvasContext;
      if (!ctx)
        return;
      ctx.clearRect(0, 0, displayWidth, displayHeight);
      easySetFillStyle(systemInfo, ctx, "#666");
      ctx.fillRect(0, 0, displayWidth, displayHeight);
      ctx.stroke();
      ctx.fill();
      easySetFillStyle(systemInfo, ctx, "#000");
      ctx.fillRect(props.space, (displayHeight - cropperWidth) / 2, cropperWidth, cropperWidth);
      ctx.stroke();
      ctx.fill();
      ctx.translate(displayWidth / 2 + moveX, displayHeight / 2 + moveY);
      ctx.rotate(Math.PI / 180 * angle);
      ctx.scale(scale, scale);
      ctx.drawImage(src, x, y, width, height);
      ctx.draw();
    };
    const setDrawImg = (image) => __async(this, null, function* () {
      const { displayWidth, cropperWidth } = state;
      let drawImg = __spreadValues({}, drawImage.value);
      const { width: imgWidth, height: imgHeight } = image;
      drawImg.src = image.path;
      if (Taro.getEnv() === "WEB") {
        drawImg.src = yield dataURLToImage(image.path);
      }
      if (showAlipayCanvas2D.value) {
        drawImg.src = yield dataURLToCanvasImage(canvasAll.cropperCanvas, image.path);
      }
      const isPortrait = imgHeight > imgWidth;
      const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth;
      drawImg.width = displayWidth;
      drawImg.height = isPortrait ? displayWidth / rate : displayWidth * rate;
      drawImg.x = -drawImg.width / 2;
      drawImg.y = -drawImg.height / 2;
      drawImage.value = drawImg;
      state.defScale = cropperWidth / (isPortrait ? drawImg.width : drawImg.height);
      resetScale();
      draw();
    });
    const chooseImage = () => {
      Taro.chooseImage({
        count: 1,
        // 可以指定是原图还是压缩图，默认二者都有
        sizeType: props.sizeType,
        sourceType: props.sourceType,
        success: (res) => {
          const { tempFiles } = res;
          !!tempFiles.length && imageChange(tempFiles[0]);
        }
      });
    };
    const imageChange = (file) => __async(this, null, function* () {
      Taro.getImageInfo({
        src: file.path
      }).then((res) => {
        state.visible = true;
        setDrawImg(res);
      });
    });
    const resetScale = () => {
      setScale(state.defScale);
      state.moveX = 0;
      state.moveY = 0;
      state.angle = 0;
    };
    const setScale = (scale) => {
      scale = clamp(scale, 0.3, +props.maxZoom + 1);
      if (scale !== state.scale) {
        state.scale = scale;
      }
    };
    const getDistance = (touches) => Math.sqrt(__pow(touches[0].clientX - touches[1].clientX, 2) + __pow(touches[0].clientY - touches[1].clientY, 2));
    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let fingerNum;
    const onTouchStart = (event) => {
      const { touches } = event;
      const { offsetX } = touch;
      touch.start(event);
      fingerNum = touches.length;
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      state.moving = fingerNum === 1;
      state.zooming = fingerNum === 2 && !offsetX.value;
      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };
    const onTouchMove = (event) => {
      const { touches } = event;
      touch.move(event);
      if (state.moving || state.zooming) {
        preventDefault(event, true);
      }
      if (state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value * state.scale + startMoveX;
        const moveY = deltaY.value * state.scale + startMoveY;
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }
      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };
    const onTouchEnd = (event) => {
      let stopPropagation = false;
      if (state.moving || state.zooming) {
        stopPropagation = !(state.moving && startMoveX === state.moveX && startMoveY === state.moveY);
        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }
          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = state.defScale;
          if (state.scale < state.defScale) {
            resetScale();
          }
          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }
      preventDefault(event, stopPropagation);
      touch.reset();
    };
    const reset = () => {
      state.angle = 0;
    };
    const rotate = () => {
      if (state.angle === 270) {
        state.angle = 0;
        return;
      }
      state.angle += 90;
    };
    const cancel = (isEmit = true) => {
      state.visible = false;
      resetScale();
      isEmit && emit("cancel");
    };
    const confirmWEB = () => {
      const { cropperWidth, displayHeight } = state;
      const canvasDom = document.getElementById(canvasAll.canvasId);
      let canvas = canvasDom;
      if ((canvasDom == null ? void 0 : canvasDom.tagName) !== "CANVAS") {
        canvas = canvasDom == null ? void 0 : canvasDom.getElementsByTagName("canvas")[0];
      }
      const width = cropperWidth;
      const height = cropperWidth;
      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");
      croppedCanvas.width = width;
      croppedCanvas.height = height;
      canvas && croppedCtx.drawImage(
        canvas,
        props.space * pixelRatio,
        (displayHeight - cropperWidth) / 2,
        width,
        height,
        0,
        0,
        width,
        height
      );
      const imageDataURL = croppedCanvas.toDataURL("image/png");
      emit("confirm", imageDataURL);
      cancel(false);
    };
    const confirmALIPAY = () => {
      const { cropperWidth, displayHeight } = state;
      const { cropperCanvas } = canvasAll;
      Taro.canvasToTempFilePath({
        canvas: cropperCanvas,
        x: props.space,
        y: (displayHeight - cropperWidth) / 2,
        width: cropperWidth,
        height: cropperWidth,
        destWidth: cropperWidth,
        destHeight: cropperWidth,
        success: (res) => __async(this, null, function* () {
          let filePath = res.tempFilePath;
          emit("confirm", filePath);
          cancel(false);
          return;
        })
      });
    };
    const confirm = () => {
      if (Taro.getEnv() === "WEB") {
        confirmWEB();
        return;
      }
      if (showAlipayCanvas2D.value) {
        confirmALIPAY();
        return;
      }
      const { cropperWidth, displayHeight } = state;
      const { canvasId } = canvasAll;
      Taro.canvasToTempFilePath({
        canvasId,
        x: props.space,
        y: (displayHeight - cropperWidth) / 2,
        width: cropperWidth,
        height: cropperWidth,
        destWidth: cropperWidth * systemInfo.pixelRatio,
        destHeight: cropperWidth * systemInfo.pixelRatio,
        success: (res) => __async(this, null, function* () {
          let filePath = res.tempFilePath;
          emit("confirm", filePath);
          cancel(false);
          return;
        })
      });
    };
    watch(
      () => state.scale,
      () => {
        draw();
      }
    );
    watch(
      () => state.angle,
      () => {
        if (Math.abs(state.moveX) > maxMoveX.value) {
          state.moveX = maxMoveX.value;
        }
        if (Math.abs(state.moveY) > maxMoveY.value) {
          state.moveY = maxMoveY.value;
        }
        draw();
      }
    );
    watch(
      () => state.moveX,
      () => {
        draw();
      }
    );
    watch(
      () => state.moveY,
      () => {
        draw();
      }
    );
    expose({
      cancel,
      reset,
      rotate,
      confirm
    });
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(state)), toRefs(canvasAll)), {
      showAlipayCanvas2D,
      highlightStyle,
      canvasStyle,
      cutCanvasStyle,
      chooseImage,
      reset,
      rotate,
      cancel,
      confirm,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    });
  }
});
const _hoisted_1 = { class: "nut-avatar-cropper taro" };
const _hoisted_2 = { class: "nut-cropper-popup" };
const _hoisted_3 = ["id", "canvas-id", "type"];
const _hoisted_4 = {
  key: 1,
  class: "flex-sb"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_IconFont = resolveComponent("IconFont");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("view", _hoisted_1, [
      renderSlot(_ctx.$slots, "default"),
      createTextVNode(),
      createElementVNode("view", {
        class: "nut-avatar-cropper__edit-text",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.chooseImage && _ctx.chooseImage(...args), ["stop"]))
      }, toDisplayString(_ctx.editText), 1)
    ]),
    createTextVNode(),
    withDirectives(createElementVNode("view", _hoisted_2, [
      createElementVNode("canvas", {
        id: _ctx.canvasId,
        "canvas-id": _ctx.canvasId,
        type: _ctx.showAlipayCanvas2D ? "2d" : void 0,
        style: normalizeStyle(_ctx.canvasStyle),
        class: "nut-cropper-popup__canvas"
      }, null, 12, _hoisted_3),
      createTextVNode(),
      createElementVNode("view", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        createElementVNode("view", {
          class: "highlight",
          style: normalizeStyle(_ctx.highlightStyle)
        }, null, 4)
      ], 32),
      createTextVNode(),
      createElementVNode("view", {
        class: normalizeClass(["nut-cropper-popup__toolbar", [_ctx.toolbarPosition]])
      }, [
        _ctx.$slots.toolbar ? renderSlot(_ctx.$slots, "toolbar", { key: 0 }) : (openBlock(), createElementBlock("view", _hoisted_4, [
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.cancel())
          }, [
            createVNode(_component_nut_button, { type: "danger" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.cancelText), 1)
              ]),
              _: 1
            })
          ]),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.reset && _ctx.reset(...args))
          }, [
            createVNode(_component_IconFont, {
              name: "refresh2",
              color: "#fff"
            })
          ]),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[7] || (_cache[7] = (...args) => _ctx.rotate && _ctx.rotate(...args))
          }, [
            createVNode(_component_IconFont, {
              name: "retweet",
              color: "#fff"
            })
          ]),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.confirm && _ctx.confirm(...args))
          }, [
            createVNode(_component_nut_button, { type: "success" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.confirmText), 1)
              ]),
              _: 1
            })
          ])
        ]))
      ], 2)
    ], 512), [
      [vShow, _ctx.visible]
    ])
  ], 64);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
