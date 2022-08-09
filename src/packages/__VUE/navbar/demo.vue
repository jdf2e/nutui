<template>
  <div class="demo full">
    <h2>{{ translate('title1') }}</h2>
    <nut-navbar @on-click-back="back" @on-click-title="title" :title="translate('navTitle1')">
      <template #left>
        <div>{{ translate('back') }}</div>
      </template>
      <template #right>
        <nut-icon class="right" name="share-n"></nut-icon>
      </template>
    </nut-navbar>

    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      :title="translate('navTitle2')"
      :desc="translate('desc1')"
    ></nut-navbar>

    <nut-navbar
      :left-show="false"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-right="rightClick"
      :title="translate('navTitle3')"
      titIcon="cart2"
      :desc="translate('desc2')"
    >
      <template #right>
        <nut-icon class="right" name="more-x"></nut-icon>
      </template>
    </nut-navbar>

    <h2>{{ translate('title2') }}</h2>
    <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-right="rightClick" :desc="translate('desc2')">
      <template #content>
        <nut-tabs v-model="tab1value" @click="changeTab">
          <nut-tabpane :title="translate('tab1')"> </nut-tabpane>
          <nut-tabpane :title="translate('tab2')"> </nut-tabpane>
        </nut-tabs>
      </template>

      <template #right>
        <nut-icon class="right" name="more-x"></nut-icon>
      </template>
    </nut-navbar>

    <h2>{{ translate('title3') }}</h2>
    <nut-navbar @on-click-back="back">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tabpane :title="translate('tab1')"> </nut-tabpane>
          <nut-tabpane :title="translate('tab2')"> </nut-tabpane>
          <nut-tabpane :title="translate('tab3')"> </nut-tabpane>
        </nut-tabs>
      </template>
      <template #icons>
        <nut-icon class="icon" name="share"></nut-icon>
      </template>

      <template #right>
        <nut-icon class="right" name="horizontal-n"></nut-icon>
      </template>
    </nut-navbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('navbar');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
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
export default createDemo({
  setup({}) {
    initTranslate();
    const tab1value = ref(0);
    const tab2value = ref(0);
    const methods = {
      back() {
        alert('header头部， 点击返回');
      },
      title() {
        alert('header头部， 点击title');
      },
      icon() {
        alert('icon');
      },

      rightClick() {
        alert('右侧点击事件');
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number;
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number;
      }
    };

    return {
      translate,
      tab1value,
      tab2value,
      ...methods
    };
  }
});
</script>

<style lang="scss" scoped>
.right {
  margin-left: 10px;
}
</style>
