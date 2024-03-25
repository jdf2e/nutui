import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from './views/Index.vue'

/* doc.md */
const pagesRouter: Array<RouteRecordRaw> = []
const modulesPage = import.meta.glob('/src/packages/__VUE/**/doc.md')
for (const path in modulesPage) {
  const name = (/packages\/__VUE\/(.*)\/doc.md/.exec(path) as any[])[1]
  pagesRouter.push({
    path: '/h5/zh-CN/' + name,
    component: modulesPage[path]
  })
}

/* doc.en-US.md */
const pagesEnRouter: Array<RouteRecordRaw> = []
const modulesEnPage = import.meta.glob('/src/packages/__VUE/**/doc.en-US.md')
for (const path in modulesEnPage) {
  const name = (/packages\/__VUE\/(.*)\/doc.en-US.md/.exec(path) as any[])[1]
  pagesEnRouter.push({
    path: '/h5/en-US/' + name,
    component: modulesEnPage[path]
  })
}

/* doc.taro.md */
const modulesPageTaro = import.meta.glob('/src/packages/__VUE/**/*.taro.md')
for (const path in modulesPageTaro) {
  const name = (/packages\/__VUE\/(.*)\/doc.taro.md/.exec(path) as any[])[1]
  pagesRouter.push({
    path: '/taro/zh-CN/' + name,
    component: modulesPageTaro[path]
  })
  pagesEnRouter.push({
    path: '/taro/en-US/' + name,
    component: modulesPageTaro[path]
  })
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/h5/zh-CN',
    name: '/h5/zh-CN',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/h5/en-US',
    name: '/h5/en-US',
    component: Index,
    children: pagesEnRouter
  }
]
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    path: '/h5/zh-CN/button'
  }
})
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split('#')[1]
      const ele = document.getElementById(id)
      setTimeout(() => {
        ele && ele.scrollIntoView(true)
      })
    }
  }
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
