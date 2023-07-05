<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页">
        <template #icon>
          <Home></Home>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="分类">
        <template #icon>
          <Category></Category>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="发现">
        <template #icon>
          <Find></Find>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车">
        <template #icon>
          <Cart></Cart>
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的">
        <template #icon>
          <My></My>
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
    <h2>通过名称匹配</h2>

    <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
      <nut-tabbar-item
        v-for="(item, index) in List"
        :name="item.name"
        :key="index"
        :tab-title="item.title"
        :icon="item.icon"
      >
      </nut-tabbar-item>
    </nut-tabbar>
    <h2>自定义图标</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页">
        <template #icon="props">
          <img v-if="props.active" :src="activeImg" />
          <img v-else :src="unactiveImg" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="分类">
        <template #icon="props">
          <img v-if="props.active" :src="activeImg" />
          <img v-else :src="unactiveImg" />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="发现">
        <template #icon="props">
          <img v-if="props.active" :src="activeImg" />
          <img v-else :src="unactiveImg" />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义选中</h2>
    <nut-tabbar v-model="active">
      <nut-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon">
      </nut-tabbar-item>
    </nut-tabbar>

    <h2>徽标提示</h2>
    <nut-tabbar>
      <nut-tabbar-item tab-title="首页" :icon="Home" :value="11"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" :icon="Category" :dot="true"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" :icon="Find" :value="110"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" :icon="Cart"> </nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" :icon="My"></nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义颜色</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon">
      </nut-tabbar-item>
    </nut-tabbar>
    <h2>三个icon的tabbar</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" :icon="Category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" :icon="Find"></nut-tabbar-item>
    </nut-tabbar>
    <h2>固定底部，可自由跳转</h2>
    <nut-tabbar :bottom="true" :safeAreaInsetBottom="true" placeholder>
      <nut-tabbar-item tab-title="首页" href="" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" :icon="Category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" :icon="Find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" :icon="Cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" :icon="My"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  components: { Home, Category, Find, Cart, My, Header },
  props: {},
  setup() {
    const env = Taro.getEnv();

    const active = ref(2);
    const activeName = ref('category');
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    const activeImg = ref(
      'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png'
    );
    const unactiveImg = ref(
      'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'
    );
    const List = [
      {
        title: '标签',
        icon: h(Home),
        name: 'home'
      },
      {
        title: '标签',
        icon: h(Category),
        name: 'category'
      },
      {
        title: '标签',
        icon: h(Find),
        name: 'find'
      },
      {
        title: '标签',
        icon: Cart,
        name: 'cart'
      },
      {
        title: '标签',
        icon: h(My),
        name: 'my'
      }
    ];
    return {
      active,
      activeImg,
      unactiveImg,
      activeName,
      List,
      My,
      Home,
      Find,
      Cart,
      Category,
      tabSwitch,
      env
    };
  }
};
</script>

<style lang="scss"></style>
