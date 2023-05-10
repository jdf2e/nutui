<template>
  <view :class="classes" ref="collapseDom">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, provide, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse');
export default create({
  props: {
    modelValue: {
      type: [String, Number, Array<string | number>],
      default: () => []
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const collapseDom: any = ref(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const changeVal = (val: string | number | Array<string | number>, name: string | number, status = true) => {
      emit('update:modelValue', val);
      emit('change', val, name, status);
    };

    const updateVal = (name: string | number) => {
      if (props.accordion) {
        if (props.modelValue === name) {
          changeVal("", name, false);
        } else {
          changeVal(name, name, true);
        }
      } else {
        if (Array.isArray(props.modelValue)) {
          if (props.modelValue.includes(name)) {
            const newValue = props.modelValue.filter((v: string | number) => v !== name);
            changeVal(newValue, name, false);
          } else {
            const newValue = props.modelValue.concat([name]);
            changeVal(newValue, name, true);
          }
        } else {
          console.warn('[NutUI] <Collapse> 未开启手风琴模式时 v-model 应为数组');
        }
      }
    }

    const isExpanded = (name: string | number) => {
      if (props.accordion) {
        return props.modelValue === name;
      } else if (Array.isArray(props.modelValue)) {
        return props.modelValue.includes(name);
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
