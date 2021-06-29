<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <nut-swiper
        :init-page="page"
        :pagination-visible="true"
        pagination-color="#426543"
        auto-play="2000"
      >
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>自定义大小</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page2" :loop="false" width="300">
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>自定义指示器</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page3" :loop="true" @change="change">
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
        :init-page="page4"
        :loop="true"
        auto-play="3000"
        direction="vertical"
        height="150"
        :pagination-visible="true"
        style="height: 150px"
      >
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('swiper');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      page: 2,
      page2: 0,
      page3: 0,
      page4: 0,
      current: 1,
      list: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/195274/24/9649/144035/60d15d37E76e91580/51273fd51174d91a.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/180629/11/11039/120751/60d53a52Eca8b4b0c/12a396e3f73a6424.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png',
        'https://imgcps.jd.com/ling4/71587695091/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5c11d16482acdd181dbc1fc9/4fbc0e05/cr_1125x449_0_166/s1125x690/q70.jpg'
      ]
    });
    const change = (index: number) => {
      state.current = index + 1;
    };
    return {
      ...toRefs(state),
      change
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
  .nut-swiper-item {
    line-height: 150px;
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
