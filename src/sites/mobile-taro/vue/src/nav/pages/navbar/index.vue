<template>
  <div class="demo full">
    <h2>基础用法</h2>

    <nut-navbar @on-click-back="back" @on-click-title="title" title="订单详情">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <ShareN width="16px"></ShareN>
      </template>
    </nut-navbar>

    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      title="浏览记录"
      desc="清空"
    ></nut-navbar>

    <nut-navbar
      :left-show="false"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-right="rightClick"
      title="购物车"
      :titIcon="true"
      desc="编辑"
    >
      <template #titIcon>
        <Cart2 width="16px"></Cart2>
      </template>
      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </nut-navbar>

    <h2>自定义导航栏中间内容</h2>
    <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-right="rightClick" desc="编辑">
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
    <nut-navbar @on-click-back="back">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tab-pane title="商品"> </nut-tab-pane>
          <nut-tab-pane title="评价"> </nut-tab-pane>
          <nut-tab-pane title="详情"> </nut-tab-pane>
          <nut-tab-pane title="推荐"> </nut-tab-pane>
        </nut-tabs>
      </template>
      <template #icons>
        <nut-icon class="icon" name="share"></nut-icon>
      </template>

      <template #right>
        <HorizontalN class="right" width="16px"></HorizontalN>
      </template>
    </nut-navbar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { ShareN, Cart2, MoreX, HorizontalN } from '@nutui/icons-vue-taro';
export default defineComponent({
  components: { ShareN, Cart2, MoreX, HorizontalN },
  setup({}) {
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
      tab1value,
      tab2value,
      ...methods
    };
  }
});
</script>

<style lang="scss">
.nut-navbar {
  padding: 0 !important;
}
</style>
