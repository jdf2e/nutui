import { computed, provide, resolveComponent, openBlock, createBlock, normalizeStyle, withCtx, createElementVNode, createElementBlock, toDisplayString, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index-wLaOjIn1.js";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("time-select");
const cN = "NutTimeSelect";
const _sfc_main = create({
  components: {
    NutPopup
  },
  props: {
    visible: {
      type: Boolean,
      defalut: false
    },
    height: {
      type: [String],
      default: "20%"
    },
    title: {
      type: String,
      default: ""
    },
    currentKey: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lockScroll: {
      type: [Boolean],
      default: true
    },
    teleportDisable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "select"],
  setup: (props, { emit }) => {
    const translate = useLocale(cN);
    const popStyle = computed(() => {
      return {
        width: "100%",
        height: props.height
      };
    });
    const currentKey = computed(() => props.currentKey);
    const currentTime = computed(() => props.currentTime);
    const close = () => {
      emit("update:visible", false);
      emit("select", currentTime.value);
    };
    provide("currentKey", currentKey);
    provide("currentTime", currentTime);
    return {
      popStyle,
      close,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-time-select" };
const _hoisted_2 = { class: "nut-time-select__title" };
const _hoisted_3 = { class: "nut-time-select__title__fixed" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "nut-time-select__content" };
const _hoisted_6 = { class: "nut-time-select__content__pannel" };
const _hoisted_7 = { class: "nut-time-select__content__detail" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    position: "bottom",
    closeable: "",
    round: "",
    "teleport-disable": _ctx.teleportDisable,
    visible: _ctx.visible,
    style: normalizeStyle(_ctx.popStyle),
    "lock-scroll": _ctx.lockScroll,
    onClickOverlay: _ctx.close,
    onClickCloseIcon: _ctx.close
  }, {
    default: withCtx(() => [
      createElementVNode("view", _hoisted_1, [
        createElementVNode("view", _hoisted_2, [
          createElementVNode("view", _hoisted_3, [
            !_ctx.$slots.title ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(_ctx.title || _ctx.translate("pickupTime")), 1)) : renderSlot(_ctx.$slots, "title", { key: 1 })
          ])
        ]),
        createElementVNode("view", _hoisted_5, [
          createElementVNode("view", _hoisted_6, [
            renderSlot(_ctx.$slots, "pannel")
          ]),
          createElementVNode("view", _hoisted_7, [
            renderSlot(_ctx.$slots, "detail")
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["teleport-disable", "visible", "style", "lock-scroll", "onClickOverlay", "onClickCloseIcon"]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
