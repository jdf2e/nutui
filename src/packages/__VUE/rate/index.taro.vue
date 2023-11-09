<template src="./template.html"></template>
<script lang="ts">
import { ref } from 'vue';
import { StarFillN } from '@nutui/icons-vue-taro';
import { createComponent, renderIcon } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
const { create } = createComponent('rate');
export default create({
  props: {
    count: {
      type: [String, Number],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    customIcon: {
      type: Object,
      default: () => {
        return StarFillN;
      }
    },
    size: {
      type: [String, Number],
      default: undefined
    },
    activeColor: {
      type: String,
      default: ''
    },
    voidColor: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: [String, Number],
      default: undefined
    }
  },
  components: { StarFillN },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const rateRefs = ref<HTMLElement[]>([]);
    const updateVal = (value: number) => {
      emit('update:modelValue', value);
      emit('change', value);
    };
    const onClick = (e: number, index: number) => {
      if (props.disabled || props.readonly) return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
        value = 0;
      } else {
        value = index;
        if (props.allowHalf && e == 2) {
          value -= 0.5;
        }
      }
      updateVal(value);
    };
    const refRandomId = Math.random().toString(36).slice(-8);
    return {
      onClick,
      pxCheck,
      rateRefs,
      refRandomId,
      renderIcon,
      slots
    };
  }
});
</script>
