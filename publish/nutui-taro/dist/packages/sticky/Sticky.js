import { ref, reactive, computed, watch, onMounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { u as useTaroRect } from "../index-m0Wcof-q.js";
import { usePageScroll } from "@tarojs/taro";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("sticky");
const _sfc_main = create({
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: [Number, String],
      default: 99
    },
    scrollTop: {
      type: [Number, String],
      default: -1
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const rootRef = ref();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0
    });
    const rootStyle = computed(() => {
      if (state.fixed)
        return { height: `${state.height}px` };
      return {};
    });
    const stickyStyle = computed(() => {
      if (!state.fixed)
        return {};
      return {
        top: `${props.top}px`,
        height: `${state.height}px`,
        width: `${state.width}px`,
        position: state.fixed ? "fixed" : void 0,
        zIndex: Number(props.zIndex)
      };
    });
    const handleScroll = () => {
      useTaroRect(rootRef).then(
        (rootRect) => {
          state.height = rootRect.height;
          state.width = rootRect.width;
          state.fixed = Number(props.top) >= rootRect.top;
        },
        () => {
        }
      );
    };
    watch(
      () => state.fixed,
      (val) => {
        emit("change", val);
      }
    );
    if (props.scrollTop === -1) {
      usePageScroll(handleScroll);
    } else {
      watch(() => props.scrollTop, handleScroll);
    }
    onMounted(handleScroll);
    return { rootRef, rootStyle, stickyStyle, refRandomId };
  }
});
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    id: "rootRef-" + _ctx.refRandomId,
    ref: "rootRef",
    class: "nut-sticky",
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createElementVNode("view", {
      class: "nut-sticky__box",
      style: normalizeStyle(_ctx.stickyStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 12, _hoisted_1);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
