<template>
  <swiper
    class="test-h"
    indicator-color="#999"
    indicator-active-color="#333"
    vertical
    circular
    indicator-dots
    autoplay
  >
    <swiper-item>
      <view class="demo-text-1">1</view>
    </swiper-item>
    <swiper-item>
      <view class="demo-text-2">2</view>
    </swiper-item>
    <swiper-item>
      <view class="demo-text-3">3</view>
    </swiper-item>
  </swiper>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { createComponent } from '@/packages/utils/create';
import { useTouch } from './use-touch';
import { useExpose } from '@/packages/utils/useExpose/index';
const { create, componentName } = createComponent('swiper');
// import swiperItem from '@/packages/__VUE/swiperitem/index.vue';
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
