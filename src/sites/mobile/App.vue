<template>
  <div v-if="isShow" id="nav">
    <div class="back" @click="goBack">
      <Left />
    </div>
    {{ title }}
    <div class="translate" @click="translateChange">
      <img
        src="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"
      />
    </div>
  </div>
  <router-view />
</template>
<script setup lang="ts">
import { watch, computed, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isMobile } from '@/sites/assets/util';
import { translateChange, initSiteLang } from '../assets/util/useTranslate';
import { Left } from '@nutui/icons-vue';
const route = useRoute();
const router = useRouter();
onBeforeMount(() => {
  const { origin, hash, pathname } = window.top.location;
  const lang = hash.includes('zh-CN') ? 'zh-CN' : 'en-US';
  if (!isMobile && pathname.includes('demo')) {
    window.location.href = `${origin}/h5/vue/4x/index.html#/${lang}/component/${hash.split('/').slice(-1)[0]}`;
  }
});

const goBack = () => {
  router.back();
};

const title = computed(() => {
  return route.meta.ComponentName || '';
});

const isShow = computed(() => {
  return title.value && title.value != '/';
});

watch(
  () => route,
  () => {
    initSiteLang();
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

.nut-theme-dark {
  .demo {
    background: #131313 !important;
  }
}

#app {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #nav {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    height: 57px;
    line-height: 57px;
    text-align: center;
    background: $white;
    font-weight: bold;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
    .back {
      position: absolute;
      left: 0;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .translate {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      > img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .demo {
    // height: 100%;
    min-height: 100vh;
    background: #f7f8fa;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 57px 17px 15px;
    box-sizing: border-box;
    &.full {
      min-height: 100vh;
      padding: 57px 0 0;
      h2 {
        padding-left: 27px;
      }
    }

    &.bg-w {
      background: #fff;
    }

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    > h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(144, 156, 164, 1);
      padding: 0 10px;
      font-weight: normal;
    }
    > p {
      font-size: 12px;
    }

    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
