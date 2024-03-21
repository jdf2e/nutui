import { ref, reactive, computed, watch, onMounted, onUnmounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { g as getScrollParent } from "../index-BvmDLUYP.js";
import { u as useRect } from "../index-B1qsj2XR.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-1tPrXgE0.js";
const { create } = createComponent("sticky");
const _sfc_main = create({
  props: {
    position: {
      type: String,
      default: "top"
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const rootRef = ref();
    const stickyRef = ref();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      transform: 0
    });
    const threshold = computed(() => {
      return props.position === "top" ? Number(props.top) : Number(props.bottom);
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
        [props.position]: `${threshold.value}px`,
        height: `${state.height}px`,
        width: `${state.width}px`,
        transform: state.transform ? `translate3d(0, ${state.transform}px, 0)` : void 0,
        position: state.fixed ? "fixed" : void 0,
        zIndex: Number(props.zIndex)
      };
    });
    const handleScroll = () => {
      const containerEle = props.container;
      if (!rootRef.value && !containerEle)
        return;
      const rootRect = useRect(rootRef);
      const stCurrent = stickyRef.value;
      const stickyRect = useRect(stCurrent);
      const containerRect = useRect(containerEle);
      state.height = rootRect.height;
      state.width = rootRect.width;
      const getFixed = () => {
        let fixed = false;
        if (props.position === "top") {
          fixed = containerEle ? threshold.value > rootRect.top && containerRect.bottom > 0 : threshold.value > rootRect.top;
        } else {
          const clientHeight = document.documentElement.clientHeight;
          fixed = containerEle ? containerRect.bottom > 0 && clientHeight - threshold.value - stickyRect.height > containerRect.top : clientHeight - threshold.value < rootRect.bottom;
        }
        return fixed;
      };
      const getTransform = () => {
        if (containerEle) {
          if (props.position === "top") {
            const diff = containerRect.bottom - threshold.value - stickyRect.height;
            return diff < 0 ? diff : 0;
          } else {
            const clientHeight = document.documentElement.clientHeight;
            const diff = containerRect.bottom - (clientHeight - threshold.value);
            return diff < 0 ? diff : 0;
          }
        }
        return 0;
      };
      state.transform = getTransform();
      state.fixed = getFixed();
    };
    watch(
      () => state.fixed,
      (val) => {
        emit("change", val);
      }
    );
    onMounted(() => {
      handleScroll();
      const el = getScrollParent(rootRef.value);
      el.addEventListener("scroll", handleScroll, true);
    });
    onUnmounted(() => {
      const el = getScrollParent(rootRef.value);
      el.removeEventListener("scroll", handleScroll);
    });
    return { rootRef, rootStyle, stickyRef, stickyStyle };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "rootRef",
    class: "nut-sticky",
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createElementVNode("div", {
      ref: "stickyRef",
      class: "nut-sticky__box",
      style: normalizeStyle(_ctx.stickyStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 4);
}
const NutSticky = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NutSticky as default
};
