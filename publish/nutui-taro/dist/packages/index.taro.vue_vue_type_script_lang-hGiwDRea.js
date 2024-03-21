import { toRef, toRefs, inject, computed, h } from "vue";
import { c as createComponent } from "./component-DQf3CENX.js";
import { CheckNormal, CheckChecked } from "@nutui/icons-vue-taro";
import { p as pxCheck } from "./pxCheck-DN6FYV6q.js";
import { R as RADIO_KEY } from "./types-BODurTjN.js";
import { u as useFormDisabled } from "./common-BSbjjJAx.js";
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
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(props, { slots }) {
    const disabled = useFormDisabled(toRef(props, "disabled"));
    const { size } = toRefs(props);
    let parent = inject(RADIO_KEY, null);
    const isCurValue = computed(() => {
      return parent.label.value === props.label;
    });
    const color = computed(() => {
      return !disabled.value ? isCurValue.value ? "nut-radio__icon" : "nut-radio__icon--unchecked" : "nut-radio__icon--disable";
    });
    const renderIcon = () => {
      const { iconSize } = props;
      const iconNodeMap = {
        CheckNormal: slots.icon ? slots.icon : CheckNormal,
        Checked: slots.checkedIcon ? slots.checkedIcon : CheckChecked
      };
      const iconNode = !isCurValue.value ? iconNodeMap.CheckNormal : iconNodeMap.Checked;
      const size2 = pxCheck(iconSize);
      return h(iconNode, {
        width: size2,
        height: size2,
        size: size2,
        class: color.value
      });
    };
    const renderLabel = () => {
      var _a;
      return h(
        "view",
        {
          class: `${componentName}__label ${disabled.value ? `${componentName}__label--disabled` : ""}`
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
    const renderButton = () => {
      var _a;
      return h(
        "view",
        {
          class: `${componentName}__button ${isCurValue.value && `${componentName}__button--active`} ${componentName}__button--${size.value} ${props.disabled ? `${componentName}__button--disabled` : ""}`
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
    const handleClick = () => {
      if (isCurValue.value || disabled.value)
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
        [props.shape == "button" ? renderButton() : [renderIcon(), renderLabel()]]
      );
    };
  }
});
export {
  _sfc_main as _
};
