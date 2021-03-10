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
      titIcon="locationg3"
      desc="编辑"
      icon="more-x"
    ></nut-navbar>

    <h2>增加tab及右侧按钮</h2>
    <nut-navbar
      tab
      :tabs="[
        {
          id: '11',
          name: '商品'
        },
        {
          id: '22',
          name: '店铺'
        }
      ]"
      @switch-tab="switchTab"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-clear="edit"
      @on-click-send="list"
      desc="编辑"
      icon="horizontal-n"
    >
    </nut-navbar>

    <h2>多tab切换导航</h2>
    <nut-navbar
      :tabs="tabList"
      @switch-tab="switchTab"
      @on-click-back="back"
      icon="more-x"
      @on-click-send="send"
    >
      <template #icons>
        <nut-icon
          class="icon"
          name="share"
          @on-click-slot-send="morelist"
        ></nut-icon>
      </template>
    </nut-navbar>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('navbar');
export default createDemo({
  setup(props, { emit }) {
    const tabList = [
      {
        id: '11',
        name: '商品'
      },
      {
        id: '22',
        name: '评价'
      },
      {
        id: '33',
        name: '详情'
      },
      {
        id: '44',
        name: '推荐'
      },
      {
        id: '55',
        name: '商品'
      },
      {
        id: '66',
        name: '评价'
      },
      {
        id: '77',
        name: '详情'
      },
      {
        id: '88',
        name: '推荐'
      }
    ];
    const back = () => {
      alert('header头部， 点击返回');
    };
    const title = () => {
      alert('header头部， 点击title');
    };
    const right = () => {
      alert('header头部， 点击右侧按钮');
    };
    const icon = () => {
      alert('icon');
    };
    const send = () => {
      alert('发送');
    };
    const edit = () => {
      alert('编辑');
    };
    const more = () => {
      alert('更多');
    };
    const clear = () => {
      alert('清空');
    };
    const list = () => {
      alert('列表');
    };
    const morelist = () => {
      alert('多个更多');
    };
    function switchTab(id: number, name: string) {
      console.log(id, name);
    }

    return {
      back,
      title,
      right,
      send,
      edit,
      clear,
      more,
      list,
      icon,
      morelist,
      switchTab,
      ...reactive({
        tabList
      })
    };
  }
});
</script>

<style lang="scss" scoped></style>
