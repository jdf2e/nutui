<template>
  <div id="nav">{{ title }}</div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

import { isMobile } from '@/sites/assets/util';
export default defineComponent({
  name: 'app',
  components: {},
  setup() {
    const title = ref('NutUI');

    // 获取当前路由
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();

    onBeforeRouteUpdate(() => {
      // 当当前路由发生变化时，调用回调函数
      // const { origin, hash, pathname } = window.top.location;
      // if (!isMobile && to.href != hash) {
      //   window.top.location.replace(`${origin}${pathname}#/${to.name}`);
      //   title.value = to.name;
      // } else {
      //   title.value = '';
      // }
    });

    return title;
  }
});
</script>

<style lang="scss">
#app {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: 100%;
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #nav {
    position: fixed;
    left: 0;
    right: 0;
    height: 57px;
    line-height: 57px;
    text-align: center;
    background: #fff;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
  }

  .demo {
    height: 100%;
    background: #f7f8fa;
    overflow-y: auto;
    padding: 0 25px;
    padding-top: 57px;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    .title {
      height: 56px;
      line-height: 56px;
      font-size: 14px;
      color: rgba(144, 156, 164, 1);
    }

    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
