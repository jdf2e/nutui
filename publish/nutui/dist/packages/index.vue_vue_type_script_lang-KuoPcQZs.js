import { inject, computed, h } from "vue";
import { c as createComponent } from "./component-TCzwHGVq.js";
import { CheckNormal, CheckChecked } from "@nutui/icons-vue";
import { p as pxCheck } from "./pxCheck-OnXlN1NC.js";
import { R as RADIO_KEY } from "./types-odSRziQJ.js";
const { componentName, create } = createComponent("radio");
const _sfc_main = create({
  components: {
    CheckNormal,
    CheckChecked
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "round"
      // button
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: ""
    }
  },
  setup(props, { slots }) {
    let parent = inject(RADIO_KEY, null);
    const isCurValue = computed(() => {
      return parent.label.value === props.label;
    });
    const color = computed(() => {
      return !props.disabled ? isCurValue.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
    });
    const renderIcon = () => {
      const { iconSize } = props;
      const iconNodeMap = {
        CheckNormal: slots.icon ? slots.icon : CheckNormal,
        Checked: slots.checkedIcon ? slots.checkedIcon : CheckChecked
      };
      const iconNode = !isCurValue.value ? iconNodeMap.CheckNormal : iconNodeMap.Checked;
      const size = pxCheck(iconSize);
      return h(iconNode, {
        width: size,
        height: size,
        class: color.value
      });
    };
    const renderLabel = () => {
      var _a;
      return h(
        "view",
        {
          class: `${componentName}__label ${props.disabled ? `${componentName}__label--disabled` : ""}`
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
    const renderButton = () => {
      var _a;
      return h(
        "view",
        {
          class: `${componentName}__button ${isCurValue.value && `${componentName}__button--active`} ${props.disabled ? `${componentName}__button--disabled` : ""}`
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
    const handleClick = () => {
      if (isCurValue.value || props.disabled)
        return;
      parent.updateValue(props.label);
    };
    const reverseState = computed(() => parent.position.value === "left");
    return () => {
      return h(
        "view",
        {
          class: `${componentName} ${componentName}--${props.shape} ${reverseState.value ? `${componentName}--reverse` : ""}`,
          onClick: handleClick
        },
        [props.shape === "button" ? renderButton() : [renderIcon(), renderLabel()]]
      );
    };
  }
});
export {
  _sfc_main as _
};
