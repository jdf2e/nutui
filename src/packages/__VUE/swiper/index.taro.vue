<template>
  <swiper
    class="nut-swiper"
    indicator-color="#999"
    indicator-active-color="#333"
    vertical
    circular
    indicator-dots
    autoplay
  >
  </swiper>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { createComponent } from '@/packages/utils/create';
import { useTouch } from './use-touch';
import { useExpose } from '@/packages/utils/useExpose/index';
const { create, componentName } = createComponent('swiper');
// import swiperItem from '@/packages/__VUE/swiperitem/index.vue';
// console.log(Taro)
// console.log(Taro.createSelectorQuery)
export default create({
  // children: [swiperItem],
  props: {},
  emits: [],

  setup(props, { emit, slots }) {
    return {};
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
