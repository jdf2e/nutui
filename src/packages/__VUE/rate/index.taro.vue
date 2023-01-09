<template src="./template.html"></template>
<script lang="ts">
import { StarFillN } from '@nutui/icons-vue-taro';
import { computed, ref } from 'vue';
import { createComponent, renderIcon } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
const { create, componentName } = createComponent('rate');
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
      default: 14
    }
  },
  components: { StarFillN },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit, slots }: any) {
    const rateRefs = ref<HTMLElement[]>([]);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const updateVal = (value: number) => {
      emit('update:modelValue', value);
      emit('change', value);
    };
    const onClick = (e: number, index: number) => {
      if (props.disabled || props.readonly) return;
      let value = 0;
      if (index === 1 && props.modelValue === index) {
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
      classes,
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
