<template>
  <swiper v-bind="attrs">
    <slot></slot>
  </swiper>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('swiper');
import swiperItem from '@/packages/__VUE/swiperitem/index.taro.vue';
export default create({
  inheritAttrs: false,
  children: [swiperItem],
  props: {},
  emits: [],

  setup(props, context) {
    const attrs = context.attrs;
    return { attrs };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
