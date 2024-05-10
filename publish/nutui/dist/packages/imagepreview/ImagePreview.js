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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { reactive, computed, watch, toRefs, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeStyle, createElementBlock, createCommentVNode, ref, nextTick, onMounted, Fragment, renderList, toDisplayString, normalizeClass, renderSlot, createVNode, h } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { e as clamp, d as preventDefault, a as isArray } from "../util-DnfK0Qan.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { u as useTouch } from "../index-I8tfW3Kf.js";
import NutVideo from "../video/Video.js";
import NutSwiperItem from "../swiperitem/SwiperItem.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
import { CircleClose } from "@nutui/icons-vue";
import { N as NutPopup } from "../index-wLaOjIn1.js";
import NutSwiper from "../swiper/Swiper.js";
import { f as funInterceptor } from "../Interceptor-DlY2h6Y7.js";
import { C as CreateComponent } from "../mountComponent-DBQ88Fjz.js";
import { Overlay as _sfc_main$2 } from "../overlay/Overlay.js";
const baseProps = {
  show: { type: Boolean, default: false },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: true },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
};
const { create: create$1 } = createComponent("image-preview-item");
const _sfc_main$1 = create$1({
  props: __spreadProps(__spreadValues({}, baseProps), {
    image: {
      type: Object,
      default: () => ({})
    },
    video: {
      type: Object,
      default: () => ({})
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    contentClose: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["close", "scale"],
  components: {
    NutVideo,
    NutSwiperItem
  },
  setup(props, { emit }) {
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });
    const touch = useTouch();
    const vertical = computed(() => {
      const { rootWidth, rootHeight } = props;
      const rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });
    const imageStyle = computed(() => {
      const images = props.image;
      if (images && images.src) {
        const { scale, moveX, moveY, moving, zooming } = state;
        const style = {
          transitionDuration: zooming || moving ? "0s" : ".3s"
        };
        if (scale !== 1) {
          const offsetX = moveX / scale;
          const offsetY = moveY / scale;
          style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
        }
        return style;
      }
      return {};
    });
    const maxMoveX = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }
      return 0;
    });
    const maxMoveY = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }
      return 0;
    });
    const imageLoad = (event) => {
      const { naturalWidth, naturalHeight } = event.target;
      state.imageRatio = naturalHeight / naturalWidth;
    };
    const resetScale = () => {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };
    const setScale = (scale) => {
      scale = clamp(scale, +props.minZoom, +props.maxZoom + 1);
      if (scale !== state.scale) {
        state.scale = scale;
        emit("scale", {
          scale,
          index: props.initNo
        });
      }
    };
    const toggleScale = () => {
      const scale = state.scale > 1 ? 1 : 2;
      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };
    const getDistance = (touches) => Math.sqrt(__pow(touches[0].clientX - touches[1].clientX, 2) + __pow(touches[0].clientY - touches[1].clientY, 2));
    let startMoveX;
    let startMoveY;
    let startScale;
    let startDistance;
    let doubleTapTimer;
    let touchStartTime;
    let fingerNum;
    const onTouchStart = (event) => {
      const { touches } = event;
      const { offsetX } = touch;
      touch.start(event);
      fingerNum = touches.length;
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();
      state.moving = fingerNum === 1 && state.scale !== 1;
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
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }
      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };
    const checkTap = () => {
      if (fingerNum == 1 && props.video && props.video.source) {
        return;
      }
      if (fingerNum > 1) {
        return;
      }
      const { offsetX, offsetY } = touch;
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;
      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          toggleScale();
        } else {
          doubleTapTimer = setTimeout(() => {
            if (props.contentClose) {
              emit("close");
            }
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    };
    const onTouchEnd = (event) => {
      let stopPropagation = false;
      if (state.moving || state.zooming) {
        stopPropagation = true;
        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation = false;
        }
        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }
          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;
          if (state.scale < 1) {
            resetScale();
          }
          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }
      preventDefault(event, stopPropagation);
      checkTap();
      touch.reset();
    };
    const closeSwiper = () => {
      emit("close");
    };
    watch(() => props.initNo, resetScale);
    watch(
      () => props.show,
      (value) => {
        if (!value) {
          resetScale();
        }
      }
    );
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getDistance,
      imageStyle,
      imageLoad,
      closeSwiper
    });
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_video = resolveComponent("nut-video");
  const _component_nut_swiper_item = resolveComponent("nut-swiper-item");
  return openBlock(), createBlock(_component_nut_swiper_item, { onClick: _ctx.closeSwiper }, {
    default: withCtx(() => [
      createElementVNode("view", {
        style: normalizeStyle(_ctx.imageStyle),
        class: "nut-image-preview-box",
        onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args)),
        onTouchmove: _cache[2] || (_cache[2] = (...args) => _ctx.onTouchMove && _ctx.onTouchMove(...args)),
        onTouchend: _cache[3] || (_cache[3] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args)),
        onTouchcancel: _cache[4] || (_cache[4] = (...args) => _ctx.onTouchEnd && _ctx.onTouchEnd(...args))
      }, [
        _ctx.image && _ctx.image.src ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.image.src,
          class: "nut-image-preview-img",
          onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.imageLoad && _ctx.imageLoad(...args))
        }, null, 40, _hoisted_1$1)) : createCommentVNode("", true),
        _ctx.video && _ctx.video.source ? (openBlock(), createBlock(_component_nut_video, {
          key: 1,
          source: _ctx.video.source,
          options: _ctx.video.options
        }, null, 8, ["source", "options"])) : createCommentVNode("", true)
      ], 36)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const ImagePreviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const { create } = createComponent("image-preview");
const _sfc_main = create({
  props: __spreadProps(__spreadValues({}, baseProps), {
    images: { type: Array, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: true },
    paginationVisible: { type: Boolean, default: false },
    paginationColor: { type: String, default: "#fff" },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: "body" },
    teleportDisable: { ype: Boolean, default: false },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIconPosition: {
      type: String,
      default: "top-right"
      // top-right  top-left
    },
    beforeClose: Function,
    isLoop: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["close", "change"],
  components: {
    ImagePreviewItem,
    CircleClose,
    NutPopup,
    NutSwiper
  },
  setup(props, { emit }) {
    const swipeRef = ref();
    const state = reactive({
      showPop: props.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });
    const iconClasses = computed(() => {
      const pre = "nut-image-preview-close";
      const iconn = props.closeIconPosition == "top-right" ? `${pre}-right` : `${pre}-left`;
      return `nut-image-preview-close-icon ${iconn}`;
    });
    const mergeImages = computed(() => {
      if (isArray(props.videos)) {
        return [].concat(props.videos).concat(props.images);
      }
      return props.images;
    });
    const setActive = (active) => {
      if (active !== state.active) {
        state.active = active;
        emit("change", state.active);
      }
    };
    const onClose = () => {
      funInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => closeDone()
      });
    };
    const closeDone = () => {
      state.showPop = false;
      emit("close");
    };
    const init = () => {
      if (swipeRef.value) {
        const rect = useRect(swipeRef.value);
        state.rootHeight = rect.height;
        state.rootWidth = rect.width;
      }
    };
    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
        if (val) {
          setActive(props.initNo);
          nextTick(() => {
            init();
          });
        }
      }
    );
    watch(
      () => props.initNo,
      (val) => {
        if (val != state.active)
          setActive(val);
      }
    );
    onMounted(() => {
      setActive(props.initNo);
    });
    return __spreadProps(__spreadValues({
      swipeRef
    }, toRefs(state)), {
      onClose,
      mergeImages,
      setActive,
      iconClasses
    });
  }
});
const _hoisted_1 = {
  ref: "swipeRef",
  class: "nut-image-preview"
};
const _hoisted_2 = {
  key: 0,
  class: "nut-image-preview-index"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_preview_item = resolveComponent("image-preview-item");
  const _component_nut_swiper = resolveComponent("nut-swiper");
  const _component_CircleClose = resolveComponent("CircleClose");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPop,
    "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.showPop = $event),
    "pop-class": "nut-image-preview-custom-pop",
    "teleport-disable": _ctx.teleportDisable,
    teleport: _ctx.teleport,
    "lock-scroll": "",
    onClosed: _ctx.onClose
  }, {
    default: withCtx(() => [
      createElementVNode("view", _hoisted_1, [
        _ctx.showPop ? (openBlock(), createBlock(_component_nut_swiper, {
          key: 0,
          "auto-play": _ctx.autoplay,
          class: "nut-image-preview-swiper",
          loop: _ctx.isLoop,
          "is-prevent-default": false,
          direction: "horizontal",
          "init-page": _ctx.initNo,
          "pagination-visible": _ctx.paginationVisible,
          "pagination-color": _ctx.paginationColor,
          onChange: _ctx.setActive
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mergeImages, (item, index) => {
              return openBlock(), createBlock(_component_image_preview_item, {
                key: index,
                video: index < _ctx.videos.length ? item : {},
                image: index >= _ctx.videos.length ? item : {},
                "root-height": _ctx.rootHeight,
                "root-width": _ctx.rootWidth,
                show: _ctx.showPop,
                "init-no": _ctx.active + 1,
                "content-close": _ctx.contentClose,
                "max-zoom": _ctx.maxZoom,
                "min-zoom": _ctx.minZoom,
                onClose: _ctx.onClose
              }, null, 8, ["video", "image", "root-height", "root-width", "show", "init-no", "content-close", "max-zoom", "min-zoom", "onClose"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : createCommentVNode("", true)
      ], 512),
      _ctx.showIndex ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.active + 1) + " / " + toDisplayString(_ctx.mergeImages.length), 1)) : createCommentVNode("", true),
      _ctx.closeable ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: normalizeClass(_ctx.iconClasses),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args))
      }, [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_CircleClose, { color: "#ffffff" })
        ])
      ], 2)) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["visible", "teleport-disable", "teleport", "onClosed"]);
}
const ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
class ImagePreviewOptions {
  constructor() {
    __publicField(this, "show", false);
    __publicField(this, "images", []);
    __publicField(this, "videos", []);
    __publicField(this, "contentClose", true);
    __publicField(this, "initNo", 0);
    __publicField(this, "paginationVisible", false);
    __publicField(this, "paginationColor", "");
    __publicField(this, "autoplay", 0);
    __publicField(this, "isWrapTeleport", false);
    __publicField(this, "showIndex", true);
    __publicField(this, "closeable", false);
    __publicField(this, "closeIcon", "circle-close");
    __publicField(this, "closeIconPosition", "top-right");
    __publicField(this, "beforeClose");
    __publicField(this, "maxZoom", 3);
    __publicField(this, "minZoom", 1 / 3);
    __publicField(this, "isLoop", true);
    __publicField(this, "teleport", "body");
  }
}
class ImagePreviewFunction {
  constructor(_options) {
    __publicField(this, "options", new ImagePreviewOptions());
    const options = Object.assign(this.options, _options);
    const { unmount } = CreateComponent(options, {
      name: "image-preview",
      components: [NutPopup, NutVideo, NutSwiper, NutSwiperItem, _sfc_main$2],
      wrapper: () => {
        return {
          setup() {
            return () => {
              options.onClose = () => {
                options.show = false;
                nextTick(() => {
                  unmount();
                });
              };
              return h(ImagePreview, options);
            };
          }
        };
      }
    });
  }
}
const showImagePreview = (options) => new ImagePreviewFunction(options);
showImagePreview.install = (app) => {
  app.use(ImagePreview);
};
export {
  ImagePreviewOptions,
  ImagePreview as default,
  showImagePreview
};
