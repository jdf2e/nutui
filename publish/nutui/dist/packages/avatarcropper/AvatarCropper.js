var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
import { reactive, ref, computed, watch, toRefs, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, renderSlot, withDirectives, normalizeStyle, createVNode, withCtx, createTextVNode, toDisplayString, vShow } from "vue";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { c as createComponent } from "../component-DQf3CENX.js";
import { d as preventDefault, e as clamp } from "../util-DnfK0Qan.js";
import { Refresh2, Retweet } from "@nutui/icons-vue";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("avatar-cropper");
const _sfc_main = create({
  components: {
    NutButton: _sfc_main$1,
    Refresh2,
    Retweet
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
    shape: {
      type: String,
      default: "square"
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
      displayHeight: 0
    });
    const defDrawImage = {
      img: new Image(),
      // 规定要使用的图像
      sx: 0,
      // 开始剪切的 x 坐标位置
      sy: 0,
      // 开始剪切的 y 坐标位置
      swidth: 0,
      // 被剪切区域的宽度
      sheight: 0,
      // 被剪切区域的高度
      x: 0,
      // 在画布上x的坐标位置
      y: 0,
      // 在画布上y的坐标位置
      width: 0,
      // 要使用的图像的宽度
      height: 0
      // 要使用的图像的高度
    };
    const drawImage = ref(__spreadValues({}, defDrawImage));
    const cropperPopupRef = ref();
    const canvasRef = ref();
    const inputImageRef = ref();
    const devicePixelRatio = window.devicePixelRatio || 1;
    const touch = useTouch();
    const isAngle = computed(() => {
      return state.angle === 90 || state.angle === 270;
    });
    const highlightStyle = computed(() => {
      const { swidth } = drawImage.value;
      const width = swidth / devicePixelRatio + "px";
      const height = width;
      return {
        width,
        height
      };
    });
    const maxMoveX = computed(() => {
      const { displayWidth, scale } = state;
      const { swidth, height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (height * scale - swidth) / 2);
      }
      return Math.max(0, (displayWidth * scale - swidth) / 2);
    });
    const maxMoveY = computed(() => {
      const { displayWidth, scale } = state;
      const { swidth, height } = drawImage.value;
      if (isAngle.value) {
        return Math.max(0, (displayWidth * scale - swidth) / 2);
      }
      return Math.max(0, (height * scale - swidth) / 2);
    });
    const fileToDataURL = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    };
    const dataURLToImage = (dataURL) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const draw = () => {
      const { img, width, height, x, y, swidth } = drawImage.value;
      const { moveX, moveY, scale } = state;
      const canvas = canvasRef.value;
      if (!canvas)
        return;
      const ctx = canvas.getContext("2d");
      canvas.width = state.displayWidth;
      canvas.height = state.displayHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#666";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(props.space * devicePixelRatio, (canvas.height - swidth) / 2, swidth, swidth);
      ctx.translate(canvas.width / 2 + moveX, canvas.height / 2 + moveY);
      ctx.rotate(Math.PI / 180 * state.angle);
      ctx.scale(scale, scale);
      ctx.drawImage(img, x, y, width, height);
    };
    const setDrawImg = (image) => {
      const rect = useRect(cropperPopupRef.value);
      const { width: clientWidth, height: clientHeight } = rect;
      const canvasWidth = state.displayWidth = clientWidth * devicePixelRatio;
      const canvasHeight = state.displayHeight = clientHeight * devicePixelRatio;
      let drawImg = __spreadValues({}, defDrawImage);
      const { width: imgWidth, height: imgHeight } = image;
      drawImg.img = image;
      const isPortrait = imgHeight > imgWidth;
      const rate = isPortrait ? imgWidth / imgHeight : imgHeight / imgWidth;
      drawImg.width = canvasWidth;
      drawImg.height = isPortrait ? canvasWidth / rate : canvasWidth * rate;
      drawImg.x = -drawImg.width / 2;
      drawImg.y = -drawImg.height / 2;
      drawImg.swidth = canvasWidth - props.space * 2 * devicePixelRatio;
      drawImg.sheight = isPortrait ? drawImg.swidth / rate : drawImg.swidth * rate;
      drawImg.sx = props.space * devicePixelRatio;
      drawImg.sy = (canvasHeight - drawImg.swidth) / 2;
      drawImage.value = drawImg;
      state.defScale = drawImg.swidth / (isPortrait ? drawImg.width : drawImg.height);
      resetScale();
    };
    const inputImageChange = (event) => __async(this, null, function* () {
      state.visible = true;
      const $el = event.target;
      let { files } = $el;
      if (!(files == null ? void 0 : files.length))
        return;
      const base64 = yield fileToDataURL(files[0]);
      const image = yield dataURLToImage(base64);
      setDrawImg(image);
      draw();
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
      inputImageRef.value.value = "";
      isEmit && emit("cancel");
    };
    const confirm = () => {
      const canvas = canvasRef.value;
      const { sx, sy, swidth } = drawImage.value;
      const width = swidth;
      const height = swidth;
      const croppedCanvas = document.createElement("canvas");
      const croppedCtx = croppedCanvas.getContext("2d");
      croppedCanvas.width = width;
      croppedCanvas.height = height;
      canvas && croppedCtx.drawImage(canvas, sx, sy, width, height, 0, 0, width, height);
      const imageDataURL = croppedCanvas.toDataURL("image/png");
      emit("confirm", imageDataURL);
      cancel(false);
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
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      cropperPopupRef,
      canvasRef,
      inputImageRef,
      highlightStyle,
      inputImageChange,
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
const _hoisted_1 = ["data-edit-text"];
const _hoisted_2 = {
  ref: "cropperPopupRef",
  class: "nut-cropper-popup"
};
const _hoisted_3 = {
  ref: "canvasRef",
  class: "nut-cropper-popup__canvas"
};
const _hoisted_4 = {
  key: 1,
  class: "flex-sb"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  const _component_Refresh2 = resolveComponent("Refresh2");
  const _component_Retweet = resolveComponent("Retweet");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", {
      class: normalizeClass(["nut-avatar-cropper", { round: _ctx.shape === "round" }]),
      "data-edit-text": _ctx.editText
    }, [
      renderSlot(_ctx.$slots, "default"),
      createElementVNode("input", {
        ref: "inputImageRef",
        type: "file",
        accept: "image/*",
        class: "nut-avatar-cropper__input",
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.inputImageChange && _ctx.inputImageChange(...args))
      }, null, 544)
    ], 10, _hoisted_1),
    withDirectives(createElementVNode("div", _hoisted_2, [
      createElementVNode("canvas", _hoisted_3, null, 512),
      createElementVNode("div", {
        class: "nut-cropper-popup__highlight",
        onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        createElementVNode("div", {
          class: normalizeClass(["highlight", { highlight__round: _ctx.shape === "round" }]),
          style: normalizeStyle(_ctx.highlightStyle)
        }, null, 6)
      ], 32),
      createElementVNode("div", {
        class: normalizeClass(["nut-cropper-popup__toolbar", [_ctx.toolbarPosition]])
      }, [
        _ctx.$slots.toolbar ? renderSlot(_ctx.$slots, "toolbar", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createElementVNode("div", {
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
          createElementVNode("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.reset && _ctx.reset(...args))
          }, [
            createVNode(_component_Refresh2, { color: "#fff" })
          ]),
          createElementVNode("div", {
            class: "nut-cropper-popup__toolbar-item",
            onClick: _cache[7] || (_cache[7] = (...args) => _ctx.rotate && _ctx.rotate(...args))
          }, [
            createVNode(_component_Retweet, { color: "#fff" })
          ]),
          createElementVNode("div", {
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
