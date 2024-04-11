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
import { inject, reactive, ref, useSlots, toRefs, resolveComponent, openBlock, createElementBlock, createBlock, withCtx, createTextVNode, toDisplayString, createCommentVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { Button as _sfc_main$1 } from "../button/Button.js";
import { u as useLocale } from "../index-CFigyH92.js";
import { A as AUDIO_KEY } from "../types-BMA1Y94E.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("audio-operate");
const cN = "NutAudioOperate";
const _sfc_main = create({
  props: {
    // 展示的形式   back 倒退   play 开始 or 暂停  forward 快进 mute 静音
    type: {
      type: String,
      default: () => "play"
    }
  },
  components: {
    NutButton: _sfc_main$1
  },
  emits: ["click"],
  setup(props) {
    const translate = useLocale(cN);
    const audio = inject(AUDIO_KEY);
    const parent = reactive(audio);
    const customSlot = ref(useSlots().default);
    return __spreadProps(__spreadValues(__spreadValues({}, toRefs(props)), toRefs(parent)), { customSlot, translate });
  }
});
const _hoisted_1 = { class: "nut-audio-operate" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_button = resolveComponent("nut-button");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.type == "back" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "nut-audio-operate-item",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.fastBack && _ctx.fastBack(...args))
    }, [
      !_ctx.customSlot ? (openBlock(), createBlock(_component_nut_button, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.translate("back")), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    _ctx.type == "play" ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "nut-audio-operate-item",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.changeStatus && _ctx.changeStatus(...args))
    }, [
      !_ctx.customSlot ? (openBlock(), createBlock(_component_nut_button, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(!_ctx.audioData.playing ? `${_ctx.translate("start")}` : `${_ctx.translate("pause")}`), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    _ctx.type == "forward" ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: "nut-audio-operate-item",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.forward && _ctx.forward(...args))
    }, [
      !_ctx.customSlot ? (openBlock(), createBlock(_component_nut_button, {
        key: 0,
        type: "primary",
        size: "small"
      }, {
        default: withCtx(() => [
          createTextVNode("快进")
        ]),
        _: 1
      })) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true),
    _ctx.type == "mute" ? (openBlock(), createElementBlock("div", {
      key: 3,
      class: "nut-audio-operate-item",
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleMute && _ctx.handleMute(...args))
    }, [
      !_ctx.customSlot ? (openBlock(), createBlock(_component_nut_button, {
        key: 0,
        type: !_ctx.audioData.hanMuted ? "primary" : "default",
        size: "small"
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.translate("mute")), 1)
        ]),
        _: 1
      }, 8, ["type"])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
