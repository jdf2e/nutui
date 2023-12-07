import { reactive, computed, onMounted, onUnmounted, onActivated, onDeactivated, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, withModifiers, renderSlot, createVNode } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { r as requestAniFrame, c as cancelRaf } from "../raf-MQjoO-Ag.js";
import { Top } from "@nutui/icons-vue";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { componentName, create } = createComponent("backtop");
const _sfc_main = create({
  components: {
    Top
  },
  props: {
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    elId: {
      type: [String],
      default: "body"
    },
    distance: {
      type: Number,
      default: 200
    },
    zIndex: {
      type: Number,
      default: 10
    },
    isAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1e3
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const state = reactive({
      backTop: false,
      scrollTop: 0,
      scrollEl: window,
      startTime: 0,
      keepAlive: false
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        show: state.backTop
      };
    });
    const style = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
        zIndex: props.zIndex
      };
    });
    function scrollListener() {
      if (state.scrollEl instanceof Window) {
        state.scrollTop = state.scrollEl.pageYOffset;
      } else {
        state.scrollTop = state.scrollEl.scrollTop;
      }
      state.backTop = state.scrollTop >= props.distance;
    }
    function scroll(y = 0) {
      if (state.scrollEl instanceof Window) {
        window.scrollTo(0, y);
      } else {
        state.scrollEl.scrollTop = y;
      }
    }
    function scrollAnimation() {
      let cid = requestAniFrame(function fn() {
        var t = props.duration - Math.max(0, state.startTime - +/* @__PURE__ */ new Date() + props.duration);
        var y = t * -state.scrollTop / props.duration + state.scrollTop;
        scroll(y);
        cid = requestAniFrame(fn);
        if (t == props.duration || y == 0) {
          cancelRaf(cid);
        }
      });
    }
    function addEventListener() {
      state.scrollEl.addEventListener("scroll", scrollListener, false);
      state.scrollEl.addEventListener("resize", scrollListener, false);
    }
    function removeEventListener() {
      state.scrollEl.removeEventListener("scroll", scrollListener, false);
      state.scrollEl.removeEventListener("resize", scrollListener, false);
    }
    function click(e) {
      state.startTime = +/* @__PURE__ */ new Date();
      props.isAnimation && props.duration > 0 ? scrollAnimation() : scroll();
      emit("click", e);
    }
    function init() {
      if (props.elId && document.getElementById(props.elId)) {
        state.scrollEl = document.getElementById(props.elId);
      }
      addEventListener();
    }
    onMounted(() => {
      if (props.distance == 0) {
        state.backTop = true;
      }
      init();
    });
    onUnmounted(() => {
      removeEventListener();
    });
    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false;
        init();
      }
    });
    onDeactivated(() => {
      state.keepAlive = true;
      removeEventListener();
    });
    return {
      state,
      classes,
      style,
      click
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Top = resolveComponent("Top");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.click && _ctx.click(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createVNode(_component_Top, {
        width: "19px",
        height: "19px",
        class: "nut-backtop-main"
      })
    ])
  ], 6);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
