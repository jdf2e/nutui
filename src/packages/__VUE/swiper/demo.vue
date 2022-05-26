<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="2000">
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>{{ translate('asyc') }}</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="2000">
        <nut-swiper-item v-for="item in list1" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>{{ translate('dynamicDel') }}</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="2000">
        <nut-swiper-item v-for="item in list2" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>{{ translate('size') }}</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page2" :loop="false" width="300">
        <nut-swiper-item v-for="item in list" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <h2>{{ translate('indicator') }}</h2>
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
    <h2>{{ translate('indicator1') }}</h2>
    <view class="demo-box">
      <nut-swiper :init-page="page" :loop="true" @change="change1" auto-play="2000">
        <nut-swiper-item v-for="item in list1" :key="item">
          <img :src="item" alt="" />
        </nut-swiper-item>
        <template v-slot:page>
          <div class="page"> {{ current1 }}/4 </div>
        </template>
      </nut-swiper>
    </view>
    <h2>{{ translate('vertical') }}</h2>
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
import { reactive, toRefs, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('swiper');
import { useTranslate } from '@/sites/assets/util/useTranslate';
useTranslate({
  'zh-CN': {
    basic: '基本用法',
    asyc: '异步加载(3s)',
    dynamicDel: '动态删除',
    size: '自定义大小',
    indicator: '自定义指示器',
    indicator1: '自定义指示器(异步3s)',
    vertical: '垂直方向'
  },
  'en-US': {
    basic: 'Basic Usage',
    asyc: 'Asynchronous loading(3s)',
    dynamicDel: 'Dynamic deletion',
    size: 'Custom size',
    indicator: 'Custom indicator',
    indicator1: 'Custom indicator(Asynchronous loading(3s))',
    vertical: 'Vertical direction'
  }
});
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      page: 2,
      page2: 0,
      page3: 0,
      page4: 0,
      current: 1,
      current1: 3,
      list: [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ],
      list2: [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ],
      list1: [] as string[]
    });
    const change = (index: number) => {
      state.current = index + 1;
    };
    const change1 = (index: number) => {
      state.current1 = index + 1;
    };
    onMounted(() => {
      setTimeout(() => {
        state.list1 = state.list.slice();
        state.list2.splice(1, 1);
      }, 3000);
    });
    return {
      ...toRefs(state),
      change,
      change1,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
  .nut-swiper-item {
    height: 150px;
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
