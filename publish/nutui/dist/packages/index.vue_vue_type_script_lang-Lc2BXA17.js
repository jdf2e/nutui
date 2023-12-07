import { provide, readonly, computed, watch, h } from "vue";
import { c as createComponent } from "./component-TCzwHGVq.js";
import { R as RADIO_KEY } from "./types-odSRziQJ.js";
const { componentName, create } = createComponent("radio-group");
const _sfc_main = create({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    direction: {
      type: String,
      default: "vertical"
      //horizontal
    },
    textPosition: {
      type: String,
      default: "right"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(props, { emit, slots }) {
    const updateValue = (value) => emit("update:modelValue", value);
    provide(RADIO_KEY, {
      label: readonly(computed(() => props.modelValue)),
      position: readonly(computed(() => props.textPosition)),
      updateValue
    });
    watch(
      () => props.modelValue,
      (value) => emit("change", value)
    );
    return () => {
      var _a;
      return h(
        "view",
        {
          class: `${componentName} ${componentName}--${props.direction}`
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});
export {
  _sfc_main as _
};
