import { ref, watch, onUnmounted, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, normalizeStyle, renderSlot, createElementBlock, Fragment, createTextVNode, toDisplayString } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { N as NutPopup } from "../index.taro-V9Ta96_T.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("notify");
const _sfc_main = create({
  components: {
    NutPopup
  },
  props: {
    id: String,
    color: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3e3
    },
    className: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "danger"
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top"
    },
    onClose: Function,
    onClick: Function,
    unmount: Function
  },
  emits: ["update:visible"],
  setup(props, { emit }) {
    const clickCover = () => {
      props.onClick && props.onClick();
    };
    let timer = null;
    const clearTimer = () => {
      timer && clearTimeout(timer);
      timer = null;
    };
    const hide = () => {
      emit("update:visible", false);
    };
    const isShowPopup = ref(false);
    watch(
      () => props.visible,
      (newVal) => {
        isShowPopup.value = props.visible;
        const DURATION = props.duration;
        if (newVal && DURATION) {
          timer = setTimeout(() => {
            hide();
          }, DURATION);
        }
      },
      { immediate: true }
    );
    onUnmounted(() => {
      clearTimer();
    });
    return { clickCover, isShowPopup };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nut_popup = resolveComponent("nut-popup");
  return openBlock(), createBlock(_component_nut_popup, {
    visible: _ctx.isShowPopup,
    "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => _ctx.isShowPopup = $event),
    position: _ctx.position,
    overlay: false
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(["nut-notify", `nut-notify--${_ctx.type}`, _ctx.className]),
        style: normalizeStyle({ color: _ctx.color, background: _ctx.background }),
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickCover && _ctx.clickCover(...args))
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString(_ctx.msg), 1)
        ], 64))
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "position"]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
