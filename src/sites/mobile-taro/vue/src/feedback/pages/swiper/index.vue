<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <nut-swiper autoplay="true" circular="true">
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>改变起始位置</h2>
    <view class="demo-box">
      <nut-swiper current="1">
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>自定义指示器</h2>
    <view class="demo-box">
      <nut-swiper
        autoplay="true"
        circular="true"
        indicator-dots="true"
        indicator-color="pink"
        indicator-active-color="red"
      >
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current }}/4 </div>
        </template>
      </nut-swiper>
    </view>
    <h2>垂直方向</h2>
    <view class="demo-box">
      <nut-swiper
        vertical="true"
        autoplay="true"
        circular="true"
        indicator-dots="true"
        indicator-color="pink"
        indicator-active-color="red"
      >
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current }}/4 </div>
        </template>
      </nut-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';

export default {
  props: {},
  setup() {
    const state = reactive({
      list: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/195274/24/9649/144035/60d15d37E76e91580/51273fd51174d91a.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/180629/11/11039/120751/60d53a52Eca8b4b0c/12a396e3f73a6424.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png'
      ]
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss">
.demo-box {
  .nut-swiper-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>
