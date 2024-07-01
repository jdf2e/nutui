import { watch, computed, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createElementBlock, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, vShow } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { r as renderIcon } from "../renderIcon-CfE94nuJ.js";
import { Success, Failure, Tips, Loading } from "@nutui/icons-vue-taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("toast");
const _sfc_main = create({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2e3
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    },
    customClass: String,
    bottom: {
      type: String,
      default: "30px"
    },
    size: {
      type: [String, Number],
      default: "base"
    },
    icon: {
      type: Object,
      default: () => {
      }
    },
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ""
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "closed"],
  setup(props, { emit }) {
    let timer;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      emit("update:visible", false);
      emit("closed");
    };
    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = setTimeout(() => {
          hide();
        }, props.duration);
      }
    };
    const clickCover = () => {
      if (props.closeOnClickOverlay) {
        hide();
      }
    };
    watch(
      () => props.visible,
      (val) => {
        if (val) {
          show();
        }
      }
    );
    const hasIcon = computed(() => {
      if (props.type !== "text") {
        return true;
      } else {
        return !!props.icon;
      }
    });
    const iconName = computed(() => {
      if (props.icon) {
        return props.icon;
      } else {
        return {
          success: Success,
          fail: Failure,
          warn: Tips,
          loading: Loading
        }[props.type];
      }
    });
    const toastBodyClass = computed(() => {
      return [
        "nut-toast",
        { "nut-toast-center": props.center },
        { "nut-toast-has-icon": hasIcon.value },
        { "nut-toast-cover": props.cover },
        { "nut-toast-loading": props.type === "loading" },
        props.customClass,
        "nut-toast-" + props.size
      ];
    });
    const onAfterLeave = () => {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };
    return {
      clickCover,
      hasIcon,
      iconName,
      toastBodyClass,
      onAfterLeave,
      renderIcon
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "nut-toast-icon-wrapper"
};
const _hoisted_2 = {
  key: 1,
  class: "nut-toast-title"
};
const _hoisted_3 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: "toast-fade",
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("view", {
        class: normalizeClass(_ctx.toastBodyClass),
        style: normalizeStyle({
          bottom: _ctx.center ? "auto" : _ctx.bottom,
          "background-color": _ctx.coverColor
        }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("view", {
          key: 1,
          class: "nut-toast-inner",
          style: normalizeStyle({
            "text-align": _ctx.textAlignCenter ? "center" : "left",
            "background-color": _ctx.bgColor
          })
        }, [
          _ctx.hasIcon ? (openBlock(), createElementBlock("view", _hoisted_1, [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.renderIcon(_ctx.iconName)), { color: "#ffffff" }))
          ])) : createCommentVNode("", true),
          createTextVNode(),
          _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
          createTextVNode(),
          createElementVNode("view", {
            class: "nut-toast-text",
            innerHTML: _ctx.msg
          }, null, 8, _hoisted_3)
        ], 4))
      ], 6), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
