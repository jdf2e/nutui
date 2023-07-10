<template>
  <div class="demo">
    <h2>基础用法</h2>
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
import { reactive, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { defineComponent } = createComponent('swiper');
export default defineComponent({
  props: {},
  setup() {
    const data = reactive({});
    return {};
  }
});
</script>

<style lang="scss" scoped></style>
