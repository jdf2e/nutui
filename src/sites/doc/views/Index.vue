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
        <router-view />
      </div>
      <DocDemoPreview :url="data.demoUrl"></DocDemoPreview>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { nav } from '@/config.json'
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router'
import DocHeader from '@/sites/doc/components/DocHeader.vue'
import DocNav from '@/sites/doc/components/Nav.vue'
import DocDemoPreview from '@/sites/doc/components/DemoPreview.vue'
import { RefData } from '@/sites/assets/util/ref'
import { initSiteLang } from '@/sites/assets/util/useTranslate'
const route = useRoute()
initSiteLang()
const state = reactive({
  fixed: false, // 是否吸顶
  hidden: false, // 是否隐藏
  // 组件名称
  componentName: {
    name: '',
    cName: '',
    type: ''
  }
})
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
})

const isTaro = (router: RouteLocationNormalized) => {
  return router.path.indexOf('taro') > -1
}

const watchDemoUrl = (router: RouteLocationNormalized) => {
  RefData.getInstance().currentRoute.value = router.path as string
  if (isTaro(router)) {
    data.demoUrl = `http://localhost:10086/#/${
      state.componentName.type
    }/pages/${state.componentName.name.toLowerCase()}/index`
  } else {
    if (router.path.includes('zh-CN')) {
      data.demoUrl = `/demo.html#/zh-CN/${state.componentName.name.toLowerCase()}`
    } else {
      data.demoUrl = `/demo.html#/en-US/${state.componentName.name.toLowerCase()}`
    }
  }
}

onMounted(() => {
  componentTitle()
  watchDemoUrl(route)
  data.curKey = isTaro(route) ? 'taro' : 'vue'
  document.addEventListener('scroll', scrollTitle)
})

const scrollTitle = () => {
  let top = document.documentElement.scrollTop
  if (top > 127) {
    state.fixed = true
    if (top < 142) {
      state.hidden = true
    } else {
      state.hidden = false
    }
  } else {
    state.fixed = false
    state.hidden = false
  }
}

// 获得组件名称
const componentTitle = (to?: any) => {
  state.componentName.name = (to?.path || route?.path)?.split('/').slice(-1)[0]
  nav.forEach((item: any) => {
    item.packages.forEach((sItem: any) => {
      if (sItem.name.toLowerCase() == state.componentName.name) {
        state.componentName.name = sItem.name
        state.componentName.cName = sItem.cName
        state.componentName.type = item.enName
        return
      }
    })
  })
}

onBeforeRouteUpdate((to) => {
  componentTitle(to)
  watchDemoUrl(to)
  data.curKey = isTaro(to) ? 'taro' : 'vue'
})
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
