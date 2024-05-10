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
import { c as createComponent } from "../component-DQf3CENX.js";
import { useSlots, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, toDisplayString, createCommentVNode, renderSlot, Fragment, renderList, normalizeClass, normalizeStyle } from "vue";
import { N as NutPopup, p as popupProps } from "../index-wLaOjIn1.js";
import { Loading } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("action-sheet");
const _sfc_main = create({
  components: {
    NutPopup,
    Loading
  },
  props: __spreadProps(__spreadValues({}, popupProps), {
    cancelTxt: {
      type: String,
      default: ""
    },
    optionTag: {
      type: String,
      default: "name"
    },
    optionSubTag: {
      type: String,
      default: "subname"
    },
    chooseTagValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#ee0a24"
    },
    description: {
      type: String,
      default: ""
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    closeAbled: {
      type: Boolean,
      default: true
    }
  }),
  emits: ["cancel", "close", "choose", "update:visible"],
  setup(props, { emit }) {
    const slotDefault = !!useSlots().default;
    const isHighlight = (item) => {
      return props.chooseTagValue && props.chooseTagValue === item[props.optionTag] ? props.color : "";
    };
    const cancelActionSheet = () => {
      emit("cancel");
      emit("update:visible", false);
    };
    const chooseItem = (item, index2) => {
      if (!item.disable && !item.loading) {
        emit("choose", item, index2);
        emit("update:visible", false);
      }
    };
    const close = (e) => {
      if (props.closeAbled) {
        emit("close", e);
        emit("update:visible", false);
      }
    };
    return {
      slotDefault,
      isHighlight,
      cancelActionSheet,
      chooseItem,
      close
    };
  }
});
const _hoisted_1 = { class: "nut-action-sheet" };
const _hoisted_2 = {
  key: 0,
  class: "nut-action-sheet__title"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  class: "nut-action-sheet__item nut-action-sheet__desc"
};
const _hoisted_5 = {
  key: 1,
  class: "nut-action-sheet__menu"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "nut-action-sheet__subdesc" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.visible,
    position: "bottom",
    round: "",
    "close-on-click-overlay": _ctx.closeAbled,
    "lock-scroll": _ctx.lockScroll,
    "z-index": _ctx.zIndex,
    onClickOverlay: _ctx.close
  }, {
    default: withCtx(() => [
      createElementVNode("view", _hoisted_1, [
        _ctx.title ? (openBlock(), createElementBlock("view", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default"),
        !_ctx.slotDefault ? (openBlock(), createElementBlock("view", _hoisted_3, [
          _ctx.description ? (openBlock(), createElementBlock("view", _hoisted_4, toDisplayString(_ctx.description), 1)) : createCommentVNode("", true),
          _ctx.menuItems.length ? (openBlock(), createElementBlock("view", _hoisted_5, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menuItems, (item, index2) => {
              return openBlock(), createElementBlock("view", {
                key: index2,
                class: normalizeClass(["nut-action-sheet__item", {
                  "nut-action-sheet__item--disabled": item.disable,
                  "nut-action-sheet__item--loading": item.loading
                }]),
                style: normalizeStyle({ color: _ctx.isHighlight(item) || item.color }),
                onClick: ($event) => _ctx.chooseItem(item, index2)
              }, [
                item.loading ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : (openBlock(), createElementBlock("view", _hoisted_7, toDisplayString(item[_ctx.optionTag]), 1)),
                createElementVNode("view", _hoisted_8, toDisplayString(item[_ctx.optionSubTag]), 1)
              ], 14, _hoisted_6);
            }), 128))
          ])) : createCommentVNode("", true),
          _ctx.cancelTxt ? (openBlock(), createElementBlock("view", {
            key: 2,
            class: "nut-action-sheet__cancel",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancelActionSheet && _ctx.cancelActionSheet(...args))
          }, toDisplayString(_ctx.cancelTxt), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])
    ]),
    _: 3
  }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "z-index", "onClickOverlay"]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
