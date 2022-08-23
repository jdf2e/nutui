<script lang="ts">
import { computed, h, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
import nutIcon from '../icon/index.vue';
const { componentName, create } = createComponent('radio');

export default create({
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
    iconName: {
      type: String,
      default: 'check-normal'
    },
    iconActiveName: {
      type: String,
      default: 'check-checked'
    },
    iconSize: {
      type: [String, Number],
      default: ''
    },
    iconClassPrefix: {
      type: String,
      default: 'nut-icon'
    },
    iconFontClassName: {
      type: String,
      default: 'nutui-iconfont'
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
      const { iconName, iconSize, iconActiveName, iconClassPrefix, iconFontClassName } = props;
      return h(nutIcon, {
        name: isCurValue.value ? iconActiveName : iconName,
        size: iconSize,
        class: color.value,
        classPrefix: iconClassPrefix,
        fontClassName: iconFontClassName
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
