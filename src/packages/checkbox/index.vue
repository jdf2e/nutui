<script lang="ts">
import { h, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { create, componentName } = createComponent('checkbox');
import nutIcon from '@/packages/icon/index.vue';

export default create({
  components: {
    nutIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    textPosition: {
      type: String,
      default: 'right'
    },
    iconSize: {
      type: [String, Number],
      default: '18'
    },
    iconName: {
      type: String,
      default: 'check-normal'
    },
    iconActiveName: {
      type: String,
      default: 'checked'
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const checked = computed(() => !!props.modelValue);

    const label = computed(() => {
      return props.label ? props.label : slots.default?.();
    });

    const color = computed(() => {
      return !props.disabled
        ? !props.modelValue
          ? '#d6d6d6'
          : '#fa2c19'
        : '#f5f5f5';
    });

    const emitChange = (value: string | boolean, label?: string) => {
      emit('update:modelValue', value);
      emit('change', value, label);
    };

    const renderIcon = () => {
      const { iconName, iconSize, iconActiveName, modelValue } = props;
      return h(nutIcon, {
        name: !modelValue ? iconName : iconActiveName,
        size: iconSize,
        color: color.value
      });
    };

    const renderLabel = () => {
      return h(
        'view',
        {
          class: `${componentName}__label ${
            props.disabled ? `${componentName}__label--disabled` : ''
          }`
        },
        label.value
      );
    };

    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (props.disabled) return;
      const text =
        typeof label.value === 'string'
          ? label.value
          : label.value && label.value[0].children;
      emitChange(!checked.value, text as string);
    };

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${
            props.textPosition === 'left' ? `${componentName}--reverse` : ''
          }`,
          onClick: handleClick
        },
        [renderIcon(), renderLabel()]
      );
    };
  }
});
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
