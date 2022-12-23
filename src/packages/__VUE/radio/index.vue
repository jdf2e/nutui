<script lang="ts">
import { computed, h, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('radio');
import { CheckNormal, CheckChecked } from '@nutui/icons-vue';
import { pxCheck } from '@/packages/utils/pxCheck';

export default create({
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
      default: 'round' // button
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    iconSize: {
      type: [String, Number],
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    let parent: any = inject('parent', null);

    const isCurValue = computed(() => {
      return parent.label.value === props.label;
    });

    const color = computed(() => {
      return !props.disabled
        ? isCurValue.value
          ? 'nut-radio__icon'
          : 'nut-radio__icon--unchecked'
        : 'nut-radio__icon--disable';
    });

    const position = computed(() => {
      return parent.position;
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
        size: size,
        class: color.value
      });
    };

    const renderLabel = () => {
      return h(
        'view',
        {
          class: `${componentName}__label ${props.disabled ? `${componentName}__label--disabled` : ''}`
        },
        slots.default?.()
      );
    };
    const renderButton = () => {
      return h(
        'view',
        {
          class: `${componentName}__button ${isCurValue.value && `${componentName}__button--active`} ${
            props.disabled ? `${componentName}__button--disabled` : ''
          }`
        },
        slots.default?.()
      );
    };

    const handleClick = () => {
      if (isCurValue.value || props.disabled) return;
      parent.updateValue(props.label);
    };

    let reverseState = position.value === 'left';

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${componentName}--${props.shape} ${reverseState ? `${componentName}--reverse` : ''}`,
          onClick: handleClick
        },
        [
          props.shape == 'button'
            ? renderButton()
            : reverseState
            ? [renderLabel(), renderIcon()]
            : [renderIcon(), renderLabel()]
        ]
      );
    };
  }
});
</script>
