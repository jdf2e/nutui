<script lang="ts">
import { h, provide, computed, readonly, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('radiogroup');

export default create({
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: ''
    },
    direction: {
      type: String,
      default: 'vertical' //horizontal
    },
    textPosition: {
      type: String,
      default: 'right'
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const updateValue = (value: string | boolean | number) => emit('update:modelValue', value);

    provide('parent', {
      label: readonly(computed(() => props.modelValue)),
      position: props.textPosition,
      updateValue
    });

    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    );

    return () => {
      return h(
        'view',
        {
          class: `${componentName} ${componentName}--${props.direction}`
        },
        slots.default?.()
      );
    };
  }
});
</script>
