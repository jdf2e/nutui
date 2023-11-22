<template>
  <div class="demo full">
    <h2>{{ translate('title1') }}</h2>
    <nut-navbar :title="translate('navTitle1')" @click-back="back" @click-title="title">
      <template #left>
        <div>{{ translate('back') }}</div>
      </template>
      <template #right>
        <ShareN width="16px"></ShareN>
      </template>
    </nut-navbar>

    <nut-navbar
      :title="translate('navTitle2')"
      :desc="translate('desc1')"
      @click-back="back"
      @click-title="title"
      @click-right="rightClick"
    ></nut-navbar>

    <nut-navbar
      :left-show="false"
      :title="translate('navTitle3')"
      :title-icon="true"
      :desc="translate('desc2')"
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

    <h2>{{ translate('title2') }}</h2>
    <nut-navbar :desc="translate('desc2')" @click-back="back" @click-title="title" @click-right="rightClick">
      <template #content>
        <nut-tabs v-model="tab1value" @click="changeTab">
          <nut-tab-pane :title="translate('tab1')"> </nut-tab-pane>
          <nut-tab-pane :title="translate('tab2')"> </nut-tab-pane>
        </nut-tabs>
      </template>

      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </nut-navbar>

    <h2>{{ translate('title3') }}</h2>
    <nut-navbar @click-back="back">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tab-pane :title="translate('tab1')"> </nut-tab-pane>
          <nut-tab-pane :title="translate('tab2')"> </nut-tab-pane>
          <nut-tab-pane :title="translate('tab3')"> </nut-tab-pane>
        </nut-tabs>
      </template>
      <template #right>
        <HorizontalN class="right" width="16px"></HorizontalN>
      </template>
    </nut-navbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@/sites/utils';
import { ShareN, Cart2, MoreX, HorizontalN } from '@nutui/icons-vue';
const translate = useTranslate({
  'zh-CN': {
    title1: '基础用法',
    back: '返回',
    navTitle1: '订单详情',
    navTitle2: '浏览记录',
    desc1: '清空',
    navTitle3: '购物车',
    desc2: '编辑',
    title2: '自定义导航栏中间内容',
    tab1: '标题1',
    tab2: '标题2',
    tab3: '标题3',
    title3: '多 tab 切换导航'
  },
  'en-US': {
    title1: 'Basic Usage',
    back: 'Back',
    navTitle1: 'Order details',
    navTitle2: 'Browsing history',
    desc1: 'Clear',
    navTitle3: 'Cart',
    desc2: 'Edit',
    title2: 'Customize the middle content of the navigation bar',
    tab1: 'Title1',
    tab2: 'Title2',
    tab3: 'Title3',
    title3: 'Multi-tab switching navigation'
  }
});
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

<style lang="scss" scoped>
.right {
  margin-left: 10px;
}
</style>
