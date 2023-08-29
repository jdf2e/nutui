<template>
  <view ref="collapseDom" :class="classes">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, provide, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse');
export default create({
  props: {
    modelValue: {
      type: [String, Number, Array<string | number>],
      default: ''
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const collapseDom: any = ref(null);
    const innerValue = ref(props.modelValue || (props.accordion ? '' : []));
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    watch(
      () => props.modelValue,
      (val) => {
        innerValue.value = val;
      }
    );

    const changeVal = (val: string | number | Array<string | number>, name: string | number, status = true) => {
      innerValue.value = val;
      emit('update:modelValue', val);
      emit('change', val, name, status);
    };

    const updateVal = (name: string | number) => {
      if (props.accordion) {
        if (innerValue.value === name) {
          changeVal('', name, false);
        } else {
          changeVal(name, name, true);
        }
      } else {
        if (Array.isArray(innerValue.value)) {
          if (innerValue.value.includes(name)) {
            const newValue = innerValue.value.filter((v: string | number) => v !== name);
            changeVal(newValue, name, false);
          } else {
            const newValue = innerValue.value.concat([name]);
            changeVal(newValue, name, true);
          }
        } else {
          console.warn('[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组');
        }
      }
    };

    const isExpanded = (name: string | number) => {
      if (props.accordion) {
        return innerValue.value === name;
      } else if (Array.isArray(innerValue.value)) {
        return innerValue.value.includes(name);
      }
      return false;
    };

    provide('collapseParent', {
      updateVal,
      isExpanded
    });

    return { collapseDom, classes };
  }
});
</script>
