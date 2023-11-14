<template>
  <Demo class="full">
    <h2>基础用法</h2>

    <nut-navbar title="订单详情" @click-back="back" @click-title="title">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <ShareN width="16px"></ShareN>
      </template>
    </nut-navbar>

    <nut-navbar
      title="浏览记录"
      desc="清空"
      @click-back="back"
      @click-title="title"
      @click-right="rightClick"
    ></nut-navbar>

    <nut-navbar
      :left-show="false"
      title="购物车"
      :title-icon="true"
      desc="编辑"
      @click-back="back"
      @click-title="title"
      @click-icon="icon"
      @click-right="rightClick"
    >
      <template #title-icon>
        <Cart2 width="16px"></Cart2>
      </template>
      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </nut-navbar>

    <h2>自定义导航栏中间内容</h2>
    <nut-navbar desc="编辑" @click-back="back" @click-title="title" @click-right="rightClick">
      <template #content>
        <nut-tabs v-model="tab1value" @click="changeTab">
          <nut-tab-pane title="商品"> </nut-tab-pane>
          <nut-tab-pane title="店铺"> </nut-tab-pane>
        </nut-tabs>
      </template>

      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </nut-navbar>

    <h2>多tab切换导航</h2>
    <nut-navbar @click-back="back">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tab-pane title="商品"> </nut-tab-pane>
          <nut-tab-pane title="评价"> </nut-tab-pane>
          <nut-tab-pane title="详情"> </nut-tab-pane>
          <nut-tab-pane title="推荐"> </nut-tab-pane>
        </nut-tabs>
      </template>

      <template #right>
        <HorizontalN class="right" width="16px"></HorizontalN>
      </template>
    </nut-navbar>
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShareN, Cart2, MoreX, HorizontalN } from '@nutui/icons-vue-taro';
const tab1value = ref(0);
const tab2value = ref(0);
const back = () => {
  console.log('header头部， 点击返回');
};
const title = () => {
  console.log('header头部， 点击title');
};
const icon = () => {
  console.log('icon');
};

const rightClick = () => {
  console.log('右侧点击事件');
};
const changeTab = (tab: any) => {
  tab1value.value = tab.paneKey as number;
};
const changeTabList = (tab: any) => {
  tab2value.value = tab.paneKey as number;
};
</script>

<style lang="scss">
.nut-navbar {
  padding: 0 !important;
}
</style>
