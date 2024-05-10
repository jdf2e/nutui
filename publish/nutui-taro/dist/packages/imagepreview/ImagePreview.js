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
import { reactive, computed, watch, onMounted, toRefs, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, Fragment, renderList, withModifiers, createCommentVNode, createTextVNode, toDisplayString, normalizeStyle, createVNode } from "vue";
import Taro from "@tarojs/taro";
import { CircleClose } from "@nutui/icons-vue-taro";
import { c as createComponent } from "../component-DQf3CENX.js";
import { f as funInterceptor } from "../Interceptor-BbYzdoUK.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import NutSwiper from "../swiper/Swiper.js";
import NutSwiperItem from "../swiperitem/SwiperItem.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("image-preview");
const _sfc_main = create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    },
    contentClose: {
      type: Boolean,
      default: true
    },
    initNo: {
      type: Number,
      default: 0
    },
    paginationVisible: {
      type: Boolean,
      default: false
    },
    paginationColor: {
      type: String,
      default: "#fff"
    },
    autoplay: {
      type: [Number, String],
      default: 3e3
    },
    showIndex: {
      type: Boolean,
      default: true
    },
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
  },
  emits: ["close", "change", "longPress"],
  components: {
    NutPopup,
    NutSwiper,
    NutSwiperItem,
    CircleClose
  },
  setup(props, { emit }) {
    const state = reactive({
      showPop: false,
      active: 0,
      options: {
        muted: true,
        controls: true
      },
      eleImg: null,
      store: {
        scale: 1,
        moveable: false,
        originScale: 1,
        oriDistance: 1
      },
      lastTouchEndTime: 0,
      // 用来辅助监听双击
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });
    const styles = computed(() => {
      let style = {};
      if (props.closeIconPosition == "top-right") {
        style.right = "10px";
      } else {
        style.left = "10px";
      }
      return style;
    });
    const setActive = (active) => {
      if (active !== state.active) {
        state.active = active;
        emit("change", state.active);
      }
    };
    const closeOnImg = () => {
      if (props.contentClose) {
        onClose();
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
      state.store.scale = 1;
      scaleNow();
      emit("close");
    };
    const getDistance = (first, second) => {
      return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
    };
    const scaleNow = () => {
      if (state.eleImg != null) {
        state.eleImg.style.transform = "scale(" + state.store.scale + ")";
      }
    };
    const onTouchStart = (event) => {
      const curTouchTime = (/* @__PURE__ */ new Date()).getTime();
      const touches = event.touches;
      const events = touches[0];
      const events2 = touches[1];
      const store = state.store;
      if (curTouchTime - state.lastTouchEndTime < 300) {
        if (store.scale > 1) {
          store.scale = 1;
        } else if (store.scale == 1) {
          store.scale = 2;
        }
        scaleNow();
      }
      store.moveable = true;
      if (events2) {
        store.oriDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );
      }
      store.originScale = store.scale || 1;
    };
    const onTouchMove = (event) => {
      if (!state.store.moveable) {
        return;
      }
      const store = state.store;
      const touches = event.touches;
      const events = touches[0];
      const events2 = touches[1];
      if (events2) {
        const curDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );
        const curScale = curDistance / store.oriDistance;
        store.scale = store.originScale * curScale;
        state.store.scale = Math.min(state.store.scale, 3);
        scaleNow();
      }
    };
    const onTouchEnd = () => {
      state.lastTouchEndTime = (/* @__PURE__ */ new Date()).getTime();
      const store = state.store;
      store.moveable = false;
      if (store.scale < 1.1 && store.scale > 1 || store.scale < 1) {
        store.scale = 1;
        scaleNow();
      }
    };
    const longPress = (image) => {
      emit("longPress", image);
    };
    const init = () => {
      state.eleImg = document.querySelector(".nut-image-preview");
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
      document.addEventListener("touchcancel", onTouchEnd);
    };
    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
        if (val) {
          setActive(props.initNo);
          init();
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
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      setActive,
      onClose,
      closeOnImg,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getDistance,
      scaleNow,
      longPress,
      styles
    });
  }
});
const _hoisted_1 = ["src", "on:longPress", "on:longTap"];
const _hoisted_2 = {
  key: 0,
  class: "nut-image-preview-index"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_swiper_item = resolveComponent("nut-swiper-item");
  const _component_nut_swiper = resolveComponent("nut-swiper");
  const _component_CircleClose = resolveComponent("CircleClose");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.showPop,
    "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => _ctx.showPop = $event),
    "pop-class": "nut-image-preview-custom-pop"
  }, {
    default: withCtx(() => [
      createElementVNode("view", {
        class: "nut-image-preview",
        onTouchstartCapture: _cache[1] || (_cache[1] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args))
      }, [
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.images, (item, index) => {
              return openBlock(), createBlock(_component_nut_swiper_item, { key: index }, {
                default: withCtx(() => [
                  createElementVNode("img", {
                    src: item.src,
                    mode: "aspectFit",
                    class: "nut-image-preview-img",
                    "on:longPress": ($event) => _ctx.longPress(item),
                    "on:longTap": ($event) => _ctx.longPress(item),
                    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.closeOnImg && _ctx.closeOnImg(...args), ["stop"]))
                  }, null, 40, _hoisted_1)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }, 8, ["auto-play", "loop", "init-page", "pagination-visible", "pagination-color", "onChange"])) : createCommentVNode("", true)
      ], 32),
      createTextVNode(),
      _ctx.showIndex ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.active + 1) + " / " + toDisplayString(_ctx.images.length), 1)) : createCommentVNode("", true),
      createTextVNode(),
      _ctx.closeable ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "nut-image-preview-close-icon",
        style: normalizeStyle(_ctx.styles),
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClose && _ctx.onClose(...args))
      }, [
        createVNode(_component_CircleClose, { color: "#ffffff" })
      ], 4)) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["visible"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
