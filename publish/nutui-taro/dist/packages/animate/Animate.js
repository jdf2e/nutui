import { ref, computed, watch, openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, renderSlot } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { _ as _export_sfc } from "../_plugin-vue_export-helper-yVxbj29m.js";
const { create } = createComponent("animate");
const _sfc_main = create({
  props: {
    type: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      defualt: false
    },
    action: {
      type: String,
      default: ""
    },
    loop: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      defualt: 500
    }
  },
  emits: ["click", "animate"],
  setup(props, { emit }) {
    const animated = ref(props.action === "initial" || props.show === true || props.loop);
    const classes = computed(() => {
      const prefixCls = "nut-animate";
      return {
        "nut-animate__container": true,
        [`${prefixCls}-${props.type}`]: animated.value,
        loop: props.loop
      };
    });
    const animate = () => {
      animated.value = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          animated.value = true;
        });
      });
    };
    const handleClick = (event) => {
      if (props.action === "click") {
        animate();
        emit("click", event);
        emit("animate");
      }
    };
    watch(
      () => props.show,
      (val) => {
        if (val) {
          animate();
          emit("animate");
        }
      }
    );
    return { classes, handleClick };
  }
});
const _hoisted_1 = { class: "nut-animate" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", _hoisted_1, [
    createElementVNode("view", {
      class: normalizeClass(_ctx.classes),
      style: normalizeStyle({
        animationDuration: _ctx.duration ? `${_ctx.duration}ms` : void 0
      }),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ]);
}
const index_taro = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index_taro as default
};
