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
import { reactive, computed, onMounted, toRefs, resolveComponent, openBlock, createElementBlock, createElementVNode, withModifiers, toDisplayString, createBlock, withDirectives, normalizeClass, normalizeStyle, renderSlot, vShow } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { ArrowDown2, ArrowUp2 } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("sub-side-navbar");
const _sfc_main = create({
  props: {
    title: {
      type: String,
      default: ""
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  components: { ArrowDown2, ArrowUp2 },
  emits: ["titleClick"],
  setup: (props, { emit }) => {
    const state = reactive({
      direction: ""
    });
    const style = computed(() => {
      return {
        height: !state.direction ? "auto" : "0px"
      };
    });
    const handleClick = () => {
      emit("titleClick");
      state.direction = !state.direction ? "up" : "";
    };
    onMounted(() => {
      state.direction = props.open ? "" : "up";
    });
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      style,
      handleClick
    });
  }
});
const _hoisted_1 = { class: "nut-sub-side-navbar" };
const _hoisted_2 = { class: "nut-sub-side-navbar__title__text" };
const _hoisted_3 = { class: "nut-sub-side-navbar__title__icon" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowDown2 = resolveComponent("ArrowDown2");
  const _component_ArrowUp2 = resolveComponent("ArrowUp2");
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      class: "nut-sub-side-navbar__title",
      onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"]))
    }, [
      createElementVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1),
      createElementVNode("span", _hoisted_3, [
        !_ctx.direction ? (openBlock(), createBlock(_component_ArrowDown2, { key: 0 })) : (openBlock(), createBlock(_component_ArrowUp2, { key: 1 }))
      ])
    ]),
    withDirectives(createElementVNode("view", {
      class: normalizeClass(["nut-sub-side-navbar__list", !_ctx.direction ? "nutFadeIn" : "nutFadeOut"]),
      style: normalizeStyle(_ctx.style)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6), [
      [vShow, !_ctx.direction]
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
