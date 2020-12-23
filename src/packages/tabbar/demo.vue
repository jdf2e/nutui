<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>

    <h2>徽标提示</h2>
    <nut-tabbar :tab-List="tabList1" @tab-switch="tabSwitch"></nut-tabbar>

    <h2>自定义颜色</h2>
    <nut-tabbar
      unactiveColor="#7d7e80"
      activeColor="#1989fa"
      :tab-List="tabList"
      @tab-switch="tabSwitch"
    ></nut-tabbar>
    <h2>三个icon的tabbar</h2>
    <nut-tabbar
      unactiveColor="#7d7e80"
      activeColor="#1989fa"
      :tab-List="tabList2"
      @tab-switch="tabSwitch"
    ></nut-tabbar>
    <h2>固定底部，可自由跳转</h2>
    <nut-tabbar
      :tab-List="tabList3"
      @tab-switch="tabSwitch"
      :bottom="true"
    ></nut-tabbar>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('tabbar');
export default createDemo({
  props: {},
  setup() {
    const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find'
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    const tabList1 = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find'
      },
      {
        tabTitle: '购物车',
        curr: true,
        icon: 'cart',
        num: '12'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    const tabList2 = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    const tabList3 = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find'
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart',
        num: '122'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
        tabList1,
        tabList2,
        tabList3
      }),
      tabSwitch
    };
  }
});
</script>

<style lang="scss" scoped></style>
