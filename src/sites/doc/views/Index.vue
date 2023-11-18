<template>
  <div>
    <DocHeader></DocHeader>
    <DocNav></DocNav>
    <div class="doc-content">
      <div class="doc-title">
        <div class="doc-title-position" :class="{ fixed: state.fixed, hidden: state.hidden }">
          <div class="title">{{ state.componentName.name }}&nbsp;{{ state.componentName.cName }}</div>
        </div>
      </div>
      <div class="doc-content-document isComponent">
        <div class="doc-content-tabs">
          <div
            v-for="item in data.tabs"
            :key="item.key"
            class="tab-item"
            :class="{ cur: data.curKey === item.key }"
            @click="handleTabs(item.key)"
            >{{ item.text }}</div
          >
        </div>
        <router-view />
      </div>
      <DocDemoPreview :url="data.demoUrl"></DocDemoPreview>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { nav } from '@/config.json';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from 'vue-router';
import DocHeader from '@/sites/doc/components/DocHeader.vue';
import DocNav from '@/sites/doc/components/Nav.vue';
import DocDemoPreview from '@/sites/doc/components/DemoPreview.vue';
import { RefData } from '@/sites/assets/util/ref';
import { initSiteLang } from '@/sites/assets/util/useTranslate';
const route = useRoute();
const router = useRouter();
initSiteLang();
const state = reactive({
  fixed: false, // 是否吸顶
  hidden: false, // 是否隐藏
  // 组件名称
  componentName: {
    name: '',
    cName: ''
  }
});
const data = reactive({
  demoUrl: 'demo.html',
  curKey: 'vue',
  tabs: [
    {
      key: 'vue',
      text: 'vue'
    },
    {
      key: 'taro',
      text: 'taro'
    }
  ]
});

const isTaro = (router: RouteLocationNormalized) => {
  return router.path.indexOf('taro') > -1;
};

const watchDemoUrl = (router: RouteLocationNormalized) => {
  const { origin, pathname } = window.location;
  RefData.getInstance().currentRoute.value = router.path as string;
  let url = `${origin}${pathname.replace('index.html', '')}demo.html#${router.path}`;
  data.demoUrl = url.replace('/component', '');
};

const watchDocMd = (curKey: string) => {
  const path = route.path;
  // router.replace(isTaro(route) ? path.substr(0, path.length - 5) : `${path}-taro`);
  if (curKey.includes('taro')) {
    router.replace(isTaro(route) ? path : `${path}-taro`);
  } else {
    router.replace(isTaro(route) ? path.substr(0, path.length - 5) : path);
  }
};

const handleTabs = (curKey: string) => {
  data.curKey = curKey;
  watchDocMd(curKey);
};

onMounted(() => {
  componentTitle();
  watchDemoUrl(route);
  data.curKey = isTaro(route) ? 'taro' : 'vue';
  document.addEventListener('scroll', scrollTitle);
});

const scrollTitle = () => {
  let top = document.documentElement.scrollTop;
  // console.log('state.hidden', state.hidden)
  if (top > 127) {
    state.fixed = true;
    if (top < 142) {
      state.hidden = true;
    } else {
      state.hidden = false;
    }
  } else {
    state.fixed = false;
    state.hidden = false;
  }
};

// 获得组件名称
const componentTitle = (to?: any) => {
  state.componentName.name = (to?.path || route?.path)?.split('/').slice(-1)[0];
  nav.forEach((item: any) => {
    item.packages.forEach((sItem: any) => {
      if (sItem.name.toLowerCase() == state.componentName.name) {
        state.componentName.name = sItem.name;
        state.componentName.cName = sItem.cName;
        return;
      }
    });
  });
};

onBeforeRouteUpdate((to) => {
  watchDemoUrl(to);
  data.curKey = isTaro(to) ? 'taro' : 'vue';
  componentTitle(to);
});
</script>

<style lang="scss" scoped>
$doc-title-height: 137px;
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;

      .markdown-body {
        min-height: 600px;
      }
    }
    &-tabs {
      position: absolute;
      right: 475px;
      top: 48px;
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: space-between;
      z-index: 1;
      padding: 2px;
      box-sizing: border-box;

      border-radius: 2px;
      background: #eee;
      box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
      &.single {
        padding: 0;
        .tab-item {
          line-height: 40px;
          cursor: auto;
        }
      }
      .tab-item {
        position: relative;
        padding: 0 10px;
        line-height: 36px;
        cursor: pointer;
        font-size: 16px;
        color: #323232;
        text-align: center;
        border-radius: 2px;
        background: #eee;
        &.cur {
          font-weight: bold;
          color: #323232;
          background: #fff;
        }
      }
    }
    &-contributors {
      margin: 50px 0;
      a {
        position: relative;
      }
      img {
        height: 26px;
        height: 26px;
        border-radius: 50%;
        margin-left: 8px;
      }
      .contributors-hover {
        display: none;
        padding: 5px 10px;
        color: #fff;
        font-size: 12px;
        background-color: #000;
        border-radius: 5px;
        position: absolute;
        /* min-width:150px; */
        white-space: nowrap;
        top: -200%;
        transform: translateX(-55%);
      }
      a:hover {
        .contributors-hover {
          display: inline-block;
        }
      }
    }
  }
  &-title {
    width: 100%;
    height: $doc-title-height;
    z-index: 2;
    &-position {
      top: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px;
      // line-height: 56px;
      border-bottom: 1px solid #eee;
      background: #fff;
      visibility: visible;
      opacity: 1;
      // transition: opacity 0.8s linear, visibility 0.8s linear;
      transition: opacity 0.8s;
      &.fixed {
        width: calc(100% - 290px);
        position: fixed;
        padding: 24px 48px;
        .title {
          font-size: 24px;
          font-weight: bold;
        }
      }
      &.hidden {
        visibility: hidden;
        opacity: 0;
      }
      .title {
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
}
</style>
