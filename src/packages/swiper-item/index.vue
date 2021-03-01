<template>
  <view class="swiper-item" :style="style">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { computed, reactive, inject, getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
import { useExpose } from '@/packages/swiper/use-expose';
const { create } = createComponent('swiper-item');
export default create({
  props: {},
  setup(props, { slots }) {
    const parent = inject('parent') as any;
    parent['relation'](getCurrentInstance());
    const state = reactive({
      offset: 0
    });
    const style = computed(() => {
      const style = {};
      const direction = parent?.props.direction;
      if (parent?.size.value) {
        style[
          direction === 'horizontal' ? 'width' : 'height'
        ] = `${parent?.size.value}px`;
      }

      if (state.offset) {
        style['transform'] = `translate${
          direction === 'horizontal' ? 'X' : 'Y'
        }(${state.offset}px)`;
      }

      return style;
    });

    const setOffset = (offset: number) => {
      state.offset = offset;
    };

    useExpose({ setOffset });

    return {
      style
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
