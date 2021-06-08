<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <nut-swiper> </nut-swiper>
    </view>
    <h2>直播轮播样式</h2>
    <view class="demo-box">
      <nut-swiper> </nut-swiper>
    </view>
    <h2>商品轮播样式</h2>
    <view class="demo-box">
      <nut-swiper> </nut-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo } = createComponent('swiper');
export default createDemo({
  props: {},
  setup() {
    const data = reactive({});
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
