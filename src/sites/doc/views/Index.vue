<template>
  <div>
    <doc-header></doc-header>
    <doc-nav></doc-nav>
    <div class="doc-content">
      <div class="doc-title">
        <div class="doc-title-position" :class="{ fixed: fixed, hidden: hidden }">
          <div class="title">{{ componentName.name }}&nbsp;{{ componentName.cName }}</div>
          <doc-issue class=""></doc-issue>
        </div>
      </div>
      <div class="doc-content-document isComponent">
        <div class="doc-content-tabs" v-if="isShowTaroDoc">
          <div
            class="tab-item"
            :class="{ cur: curKey === item.key }"
            v-for="item in tabs"
            :key="item.key"
            @click="handleTabs(item.key)"
            >{{ item.text }}</div
          >
        </div>
        <div class="doc-content-tabs single" v-if="!isShowTaroDoc">
          <div class="tab-item cur">vue / taro</div>
        </div>
        <router-view />
      </div>
      <doc-demo-preview :url="demoUrl" :class="{ fixed: fixed }"></doc-demo-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue';
import { nav } from '@/config.json';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from 'vue-router';
import Header from '@/sites/doc/components/Header.vue';
import Nav from '@/sites/doc/components/Nav.vue';
import DemoPreview from '@/sites/doc/components/DemoPreview.vue';
import Issue from '@/sites/doc/components/Issue.vue';
import { RefData } from '@/sites/assets/util/ref';
import { initSiteLang } from '@/sites/assets/util/useTranslate';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview,
    [Issue.name]: Issue
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    initSiteLang();
    const excludeTaro = ['/intro', '/start', '/theme', '/joinus', '/starttaro', '/contributing'];
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

    const configNav = computed(() => {
      let tarodocs = [] as string[];
      nav.map((item) => {
        item.packages.forEach((element) => {
          let { tarodoc, name } = element;
          if (tarodoc) {
            tarodocs.push(name.toLowerCase());
            tarodocs.push(`${name.toLowerCase()}-taro`);
          }
        });
      });
      return tarodocs;
    });

    const isTaro = (router: RouteLocationNormalized) => {
      return router.path.indexOf('taro') > -1;
    };

    const isShowTaroDoc = computed(() => {
      let routename = route.path.toLocaleLowerCase().split('/').pop() || '';
      return configNav.value.findIndex((item) => item === routename) > -1;
    });

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location;
      RefData.getInstance().currentRoute.value = router.path as string;
      let url = `${origin}${pathname.replace('index.html', '')}demo.html#${router.path}`;
      data.demoUrl = url.replace('/zh-CN', '').replace('/en-US', '');
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
      if (to?.path) {
        ['zh-CN/', 'zh-TW/', 'en-US/'].map((file) => {
          if (to.path.includes(file)) {
            state.componentName.name = to.path.split(file)[1];
          }
        });
      } else {
        ['zh-CN/', 'zh-TW/', 'en-US/'].map((file) => {
          if (route.path.includes(file)) {
            state.componentName.name = route.path.split(file)[1];
          }
        });
      }
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

    return {
      ...toRefs(state),
      ...toRefs(data),
      handleTabs,
      isShowTaroDoc
    };
  }
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
