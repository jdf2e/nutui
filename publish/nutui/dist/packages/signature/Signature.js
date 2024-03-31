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
import { ref, computed, reactive, onMounted, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, withDirectives, vShow, toDisplayString, createCommentVNode, createVNode, withCtx, createTextVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { u as useLocale } from "../index-CFigyH92.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("signature");
const cN = "NutSignature";
const _sfc_main = create({
  props: {
    customClass: {
      type: String,
      default: ""
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: () => {
        let bodyDom = document.getElementsByTagName("body");
        let clsName = bodyDom[0]["className"];
        if (clsName.indexOf("nut-theme-dark") == -1) {
          return "#000";
        } else {
          return "#fff";
        }
      }
    },
    type: {
      type: String,
      default: "png"
    },
    unSupportTpl: {
      type: String,
      default: ""
    }
  },
  components: {
    NutButton: _sfc_main$1
  },
  emits: ["start", "end", "signing", "confirm", "clear"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const canvas = ref(null);
    const wrap = ref(null);
    const classes = computed(() => {
      const prefixCls = "nut-signature";
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      };
    });
    const state = reactive({
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null,
      isSupportTouch: "ontouchstart" in window,
      events: "ontouchstart" in window ? ["touchstart", "touchmove", "touchend", "touchleave"] : ["mousedown", "mousemove", "mouseup", "mouseleave"]
    });
    const isCanvasSupported = () => {
      let elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    };
    const addEvent = () => {
      canvas.value.addEventListener(state.events[0], startEventHandler, false);
    };
    const startEventHandler = (event) => {
      event.preventDefault();
      state.ctx.beginPath();
      state.ctx.lineWidth = props.lineWidth;
      state.ctx.strokeStyle = props.strokeStyle;
      emit("start");
      canvas.value.addEventListener(state.events[1], moveEventHandler, false);
      canvas.value.addEventListener(state.events[2], endEventHandler, false);
      canvas.value.addEventListener(state.events[3], leaveEventHandler, false);
    };
    const moveEventHandler = (event) => {
      event.preventDefault();
      let evt = state.isSupportTouch ? event.touches[0] : event;
      emit("signing", evt);
      let coverPos = canvas.value.getBoundingClientRect();
      let mouseX = evt.clientX - coverPos.left;
      let mouseY = evt.clientY - coverPos.top;
      state.ctx.lineTo(mouseX, mouseY);
      state.ctx.stroke();
    };
    const endEventHandler = (event) => {
      event.preventDefault();
      emit("end");
      canvas.value.removeEventListener(state.events[1], moveEventHandler, false);
      canvas.value.removeEventListener(state.events[2], endEventHandler, false);
    };
    const leaveEventHandler = (event) => {
      event.preventDefault();
      canvas.value.removeEventListener(state.events[1], moveEventHandler, false);
      canvas.value.removeEventListener(state.events[2], endEventHandler, false);
    };
    const clear = () => {
      canvas.value.addEventListener(state.events[2], endEventHandler, false);
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      state.ctx.closePath();
      emit("clear");
    };
    const confirm = () => {
      onSave(canvas.value);
    };
    const isCanvasBlank = (canvas2) => {
      if (!canvas2) {
        return true;
      }
      var blank = document.createElement("canvas");
      blank.width = canvas2.width;
      blank.height = canvas2.height;
      return (canvas2 == null ? void 0 : canvas2.toDataURL()) == blank.toDataURL();
    };
    const onSave = (canvas2) => {
      let dataurl;
      switch (props.type) {
        case "png":
          dataurl = canvas2.toDataURL("image/png");
          break;
        case "jpg":
          dataurl = canvas2.toDataURL("image/jpeg", 0.8);
          break;
      }
      const _canvas = isCanvasBlank(canvas2) ? "请绘制签名" : canvas2;
      const _filePath = isCanvasBlank(canvas2) ? "" : dataurl;
      emit("confirm", _canvas, _filePath);
    };
    onMounted(() => {
      if (isCanvasSupported()) {
        state.ctx = canvas.value.getContext("2d");
        state.canvasWidth = wrap.value.offsetWidth;
        state.canvasHeight = wrap.value.offsetHeight;
        addEvent();
      }
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), { canvas, wrap, isCanvasSupported, confirm, clear, classes, translate });
  }
});
const _hoisted_1 = {
  ref: "wrap",
  class: "nut-signature-inner"
};
const _hoisted_2 = ["height", "width"];
const _hoisted_3 = {
  key: 0,
  class: "nut-signature-unsopport"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes)
  }, [
    createElementVNode("div", _hoisted_1, [
      withDirectives(createElementVNode("canvas", {
        ref: "canvas",
        height: _ctx.canvasHeight,
        width: _ctx.canvasWidth
      }, null, 8, _hoisted_2), [
        [vShow, _ctx.isCanvasSupported()]
      ]),
      !_ctx.isCanvasSupported() ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(_ctx.unSupportTpl || _ctx.translate("unSupportTpl")), 1)) : createCommentVNode("", true)
    ], 512),
    createVNode(_component_nut_button, {
      class: "nut-signature-btn",
      type: "default",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clear())
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.translate("reSign")), 1)
      ]),
      _: 1
    }),
    createVNode(_component_nut_button, {
      class: "nut-signature-btn",
      type: "primary",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.confirm())
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.translate("confirm")), 1)
      ]),
      _: 1
    })
  ], 2);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
