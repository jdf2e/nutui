import { ref, computed, watch, resolveComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode, toDisplayString, Fragment, renderList, createCommentVNode } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index-wLaOjIn1.js";
import { Tips } from "@nutui/icons-vue";
import { u as useLocale } from "../index-BOB4ytqZ.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("short-password");
const cN = "NutShortPassword";
const _sfc_main = create({
  components: {
    NutPopup,
    Tips
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ""
    },
    errorMsg: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    length: {
      type: [String, Number],
      // 4～6
      default: 6
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "update:visible", "complete", "tips", "close", "focus"],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const realInput = ref(props.modelValue);
    const comLen = computed(() => range(Number(props.length)));
    const show = ref(props.visible);
    const onTouchStart = (event) => {
      event.stopPropagation();
      emit("focus");
    };
    watch(
      () => props.visible,
      (value) => {
        show.value = value;
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        realInput.value = value;
        if (String(value).length === comLen.value) {
          emit("complete", value);
        }
      }
    );
    const close = () => {
      emit("update:visible", false);
      emit("close");
    };
    const range = (val) => {
      return Math.min(Math.max(4, val), 6);
    };
    const onTips = () => {
      emit("tips");
    };
    return {
      comLen,
      realInput,
      onTouchStart,
      range,
      close,
      onTips,
      show,
      translate
    };
  }
});
const _hoisted_1 = { class: "nut-short-password-title" };
const _hoisted_2 = { class: "nut-short-password-subtitle" };
const _hoisted_3 = { class: "nut-short-password-wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "nut-short-password__item-icon"
};
const _hoisted_5 = { class: "nut-short-password__message" };
const _hoisted_6 = { class: "nut-short-password--error" };
const _hoisted_7 = {
  key: 0,
  class: "nut-short-password--forget"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tips = resolveComponent("tips");
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createElementBlock("view", null, [
    createVNode(_component_nut_popup, {
      visible: _ctx.show,
      "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.show = $event),
      style: {
        padding: "30px 24px 20px 24px",
        borderRadius: "12px",
        textAlign: "center",
        top: "45%"
      },
      closeable: true,
      "close-on-click-overlay": _ctx.closeOnClickOverlay,
      "teleport-disable": false,
      "lock-scroll": _ctx.lockScroll,
      onClickCloseIcon: _ctx.close,
      onClickOverlay: _ctx.close
    }, {
      default: withCtx(() => [
        createElementVNode("view", _hoisted_1, toDisplayString(_ctx.title || _ctx.translate("title")), 1),
        createElementVNode("view", _hoisted_2, toDisplayString(_ctx.desc || _ctx.translate("desc")), 1),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("view", {
            class: "nut-short-password__list",
            onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.onTouchStart && _ctx.onTouchStart(...args))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(new Array(_ctx.comLen), (sublen, index2) => {
              return openBlock(), createElementBlock("view", {
                key: index2,
                class: "nut-short-password__item"
              }, [
                String(_ctx.realInput).length > index2 ? (openBlock(), createElementBlock("view", _hoisted_4)) : createCommentVNode("", true)
              ]);
            }), 128))
          ], 32)
        ]),
        createElementVNode("view", _hoisted_5, [
          createElementVNode("view", _hoisted_6, toDisplayString(_ctx.errorMsg), 1),
          _ctx.tips || _ctx.translate("tips") ? (openBlock(), createElementBlock("view", _hoisted_7, [
            createVNode(_component_tips, {
              class: "icon",
              width: "11px",
              height: "11px"
            }),
            createElementVNode("view", {
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onTips && _ctx.onTips(...args))
            }, toDisplayString(_ctx.tips || _ctx.translate("tips")), 1)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["visible", "close-on-click-overlay", "lock-scroll", "onClickCloseIcon", "onClickOverlay"])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
