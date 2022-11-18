<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>自定义图片</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item
        tab-title="首页"
        img="http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="分类"
        img="http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg"
        activeImg="http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="发现"
        img="http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg"
        activeImg="http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="购物车"
        img="http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg"
        activeImg="http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="我的"
        img="http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg"
        activeImg="http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg"
      ></nut-tabbar-item>
    </nut-tabbar>
    <h2>自定义图标</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页1">
        <template #icon="props">
          <img v-if="props.active" :src="activeImg" />
          <img v-else :src="unactiveImg" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义选中</h2>
    <nut-tabbar v-model:visible="active" @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" name="home" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" name="home1" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" name="home2" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" name="home3" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" name="home4" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>徽标提示</h2>
    <nut-tabbar>
      <nut-tabbar-item tab-title="首页" icon="home" num="11"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category" :dot="true"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart" num="110"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义颜色</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>三个icon的tabbar</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    </nut-tabbar>
    <h2>固定底部，可自由跳转</h2>
    <nut-tabbar :bottom="true" :safeAreaInsetBottom="true">
      <nut-tabbar-item tab-title="首页" href="" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" href="https://m.jd.com" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" href="######" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const active = ref('home1');
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    const activeImg = ref(
      'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png'
    );
    const unactiveImg = ref(
      'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'
    );
    return {
      active,
      activeImg,
      unactiveImg,
      tabSwitch
    };
  }
};
</script>

<style lang="scss"></style>
