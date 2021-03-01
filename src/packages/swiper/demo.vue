<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <nut-swiper
        :init-page="state.page"
        :pagination-visible="true"
        pagination-color="#426543"
        auto-play="3000"
      >
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>自定义大小</h2>
    <view class="demo-box">
      <nut-swiper :init-page="state.page2" :loop="false" width="300">
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>自定义指示器</h2>
    <view class="demo-box">
      <nut-swiper :init-page="state.page3" :loop="true" @change="change">
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ state.current }}/4 </div>
        </template>
      </nut-swiper>
    </view>
    <h2>垂直方向</h2>
    <view class="demo-box">
      <nut-swiper
        :init-page="state.page4"
        :loop="true"
        auto-play="3000"
        direction="vertical"
        height="150"
        :pagination-visible="true"
        style="height: 150px"
      >
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171"
            alt=""
          />
        </nut-swiper-item>
      </nut-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('swiper');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      page: 2,
      page2: 0,
      page3: 0,
      page4: 0,
      current: 1
    });
    const change = index => {
      state.current = index + 1;
    };
    return {
      state,
      change
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
  .swiper-item {
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
