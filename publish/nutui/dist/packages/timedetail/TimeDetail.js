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
import { inject, reactive, computed, toRefs, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("time-detail");
const _sfc_main = create({
  name: "timedetail",
  props: {
    times: {
      type: Array,
      default: () => []
    }
  },
  emits: ["select"],
  setup: (props, { emit }) => {
    const currentKey = inject("currentKey");
    const currentTime = inject("currentTime");
    const state = reactive({
      currentKey,
      currentTime
    });
    const getClass = (item) => {
      let find = state.currentTime.find((item2) => item2.key == state.currentKey);
      if (find) {
        return {
          "nut-time-detail__detail__list__item": true,
          "nut-time-detail__detail__list__item--curr": find.list.filter((value) => value === item).length > 0
        };
      }
    };
    const renderData = computed(() => {
      return props.times.find((time) => time.key == state.currentKey)["list"];
    });
    const handleTime = (time) => {
      emit("select", time);
    };
    return __spreadProps(__spreadValues({}, toRefs(state)), {
      getClass,
      renderData,
      handleTime
    });
  }
});
const _hoisted_1 = { class: "nut-time-detail" };
const _hoisted_2 = { class: "nut-time-detail__detail nut-time-detail__detail--moring" };
const _hoisted_3 = { class: "nut-time-detail__detail__list" };
const _hoisted_4 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", _hoisted_2, [
      createElementVNode("view", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.renderData, (item) => {
          return openBlock(), createElementBlock("view", {
            key: item,
            class: normalizeClass(_ctx.getClass(item)),
            onClick: ($event) => _ctx.handleTime(item)
          }, toDisplayString(item), 11, _hoisted_4);
        }), 128))
      ])
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
