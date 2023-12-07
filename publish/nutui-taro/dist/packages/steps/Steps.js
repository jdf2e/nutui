import { reactive, computed, provide, h } from "vue";
import { c as createComponent } from "../component-TCzwHGVq.js";
import { S as STEPS_KEY } from "../types-RCVUm7Nb.js";
const { create, componentName } = createComponent("steps");
const _sfc_main = create({
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    current: {
      type: [String, Number],
      default: "0"
    },
    progressDot: {
      type: Boolean,
      default: false
    }
  },
  emits: ["clickStep"],
  setup(props, { emit, slots }) {
    const state = reactive({
      children: []
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-${props.direction}`]: true,
        [`${prefixCls}-dot`]: !!props.progressDot
      };
    });
    const relation = (child) => {
      child && state.children.push(child);
    };
    const onEmit = (index) => {
      emit("clickStep", index);
    };
    provide(STEPS_KEY, {
      relation,
      state,
      props,
      onEmit
    });
    return () => {
      var _a;
      return h(
        "view",
        {
          class: classes.value
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});
export {
  _sfc_main as default
};
