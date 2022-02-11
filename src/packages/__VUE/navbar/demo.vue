<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-send="send"
      title="订单详情"
      icon="share-n"
    ></nut-navbar>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-clear="clear"
      title="浏览记录"
      desc="清空"
    ></nut-navbar>
    <nut-navbar
      :left-show="false"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-clear="edit"
      @on-click-send="more"
      title="购物车"
      titIcon="cart2"
      desc="编辑"
      icon="more-x"
    ></nut-navbar>

    <h2>自定义导航栏中间内容</h2>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-clear="edit"
      @on-click-send="list"
      desc="编辑"
      icon="horizontal-n"
    >
      <template #content>
        <nut-tabs v-model="tab1value" @click="changeTab">
          <nut-tabpane title="商品"> </nut-tabpane>
          <nut-tabpane title="店铺"> </nut-tabpane>
        </nut-tabs>
      </template>
    </nut-navbar>

    <h2>多tab切换导航</h2>
    <nut-navbar @on-click-back="back" @on-click-send="list" icon="more-x">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tabpane title="商品"> </nut-tabpane>
          <nut-tabpane title="评价"> </nut-tabpane>
          <nut-tabpane title="详情"> </nut-tabpane>
          <nut-tabpane title="推荐"> </nut-tabpane>
        </nut-tabs>
      </template>
      <template #icons>
        <nut-icon class="icon" name="share" @on-click-slot-send="morelist"></nut-icon>
      </template>
    </nut-navbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('navbar');
export default createDemo({
  setup(props, { emit }) {
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
      send() {
        alert('发送');
      },
      edit() {
        alert('编辑');
      },
      more() {
        alert('更多');
      },
      clear() {
        alert('清空');
      },
      list() {
        alert('列表');
      },
      morelist() {
        alert('多个更多');
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

<style lang="scss" scoped></style>
