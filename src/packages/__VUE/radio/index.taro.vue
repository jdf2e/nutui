<script lang="ts">
import { computed, h, inject, PropType, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('radio');
import { CheckNormal, CheckChecked } from '@nutui/icons-vue-taro';
import { pxCheck } from '@/packages/utils/pxCheck';
import { RADIO_KEY, RadioShape, RadioButtonSize } from './types';

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
      type: String as PropType<RadioShape>,
      default: 'round'
    },
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    iconSize: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String as PropType<RadioButtonSize>,
      default: 'normal'
    }
  },
  setup(props, { slots }) {
    const { size } = toRefs(props);
    let parent: any = inject(RADIO_KEY, null);

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
          class: `${componentName}__button ${
            isCurValue.value && `${componentName}__button--active`
          } ${componentName}__button--${size.value} ${props.disabled ? `${componentName}__button--disabled` : ''}`
        },
        slots.default?.()
      );
    };

    const handleClick = () => {
      if (isCurValue.value || props.disabled) return;
      parent.updateValue(props.label);
    };

    const reverseState = computed(() => parent.position.value === 'left');

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${componentName}--${props.shape} ${
            reverseState.value ? `${componentName}--reverse` : ''
          }`,
          onClick: handleClick
        },
        [props.shape == 'button' ? renderButton() : [renderIcon(), renderLabel()]]
      );
    };
  }
});
</script>
