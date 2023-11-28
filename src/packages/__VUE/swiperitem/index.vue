<template>
  <view class="nut-swiper-item" :style="style">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { computed, reactive, inject, getCurrentInstance, onUnmounted, ComputedRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { IStyle } from './type';
import { SWIPER_KEY } from '../swiper/types';
const { create } = createComponent('swiper-item');

export default create({
  setup(props, { expose }) {
    const parent = inject(SWIPER_KEY) as any;
    parent['relation'](getCurrentInstance());
    const state = reactive({
      offset: 0
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

    expose({ setOffset });

    return {
      style
    };
  }
});
</script>
