import { reactive, provide, computed, watch, h } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
import { C as CHECKBOX_KEY } from "../types-48N1bMrT.js";
const { create, componentName } = createComponent("checkbox-group");
const _sfc_main = create({
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(props, { slots, emit, expose }) {
    const state = reactive({
      children: []
    });
    const link = (child) => {
      child.proxy && state.children.push(child.proxy);
    };
    const unlink = (child) => {
      child.proxy && (state.children = state.children.filter((p) => p !== child.proxy));
    };
    const updateValue = (value) => {
      emit("update:modelValue", value);
      emit("change", value);
    };
    const toggleAll = (checked) => {
      const values = [];
      if (checked) {
        state.children.forEach((item) => {
          if (!(item == null ? void 0 : item.disabled)) {
            values.push(item == null ? void 0 : item.label);
          }
        });
      }
      emit("update:modelValue", values);
    };
    const toggleReverse = () => {
      const value = state.children.filter((item) => {
        if (item == null ? void 0 : item.disabled) {
          return false;
        } else {
          return !props.modelValue.includes(item.label);
        }
      }).map((item) => item.label);
      emit("update:modelValue", value);
    };
    provide(CHECKBOX_KEY, {
      value: computed(() => props.modelValue),
      disabled: computed(() => props.disabled),
      max: computed(() => props.max),
      updateValue,
      link,
      unlink
    });
    watch(
      () => props.modelValue,
      (value) => {
        emit("change", value);
      }
    );
    expose({ toggleAll, toggleReverse });
    return () => {
      var _a;
      return h(
        "view",
        {
          class: componentName
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
});
export {
  _sfc_main as default
};
