<template>
  <view :class="classes" :style="style">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { computed, reactive, inject, getCurrentInstance, onUnmounted, ComputedRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
const { create, componentName } = createComponent('swiper-item');
interface IStyle {
  width?: string;
  height?: string;
  transform?: string;
}
export default create({
  setup(props, { slots }) {
    const parent = inject('parent') as any;
    parent['relation'](getCurrentInstance());
    const state = reactive({
      offset: 0
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const style: ComputedRef = computed(() => {
      const style: IStyle = {};
      const direction = parent?.props.direction;
      if (parent?.size.value) {
        style[direction === 'horizontal' ? 'width' : 'height'] = `${parent?.size.value}px`;
      }

      if (state.offset) {
        style['transform'] = `translate${direction === 'horizontal' ? 'X' : 'Y'}(${state.offset}px)`;
      }

      return style;
    });

    const setOffset = (offset: number) => {
      state.offset = offset;
    };

    onUnmounted(() => {
      parent['relation'](getCurrentInstance(), 'unmount');
    });

    useExpose({ setOffset });

    return {
      style,
      classes
    };
  }
});
</script>
