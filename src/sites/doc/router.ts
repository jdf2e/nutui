/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import config from '../config/env';
const pagesRouter: Array<RouteRecordRaw> = [];

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/**/doc.md');
for (const path in modulesPage) {
  let name = (/packages\/__VUE\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/zh-CN/' + name,
    component: modulesPage[path]
    // name
  });
}

const pagesEnRouter: Array<RouteRecordRaw> = [];

const modulesEnPage = import.meta.glob('/src/packages/__VUE/**/doc.en-US.md');
for (const path in modulesEnPage) {
  let name = (/packages\/__VUE\/(.*)\/doc.en-US.md/.exec(path) as any[])[1];
  pagesEnRouter.push({
    path: '/en-US/' + name,
    component: modulesEnPage[path]
    // name: 'en' + name
  });
}

/** vite-taro **/
const modulesPageTaro = import.meta.glob('/src/packages/__VUE/**/*.taro.md');
for (const path in modulesPageTaro) {
  let name = (/packages\/__VUE\/(.*)\/doc.taro.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: `/zh-CN//${name}-taro`,
    component: modulesPageTaro[path]
    // name: `${name}-taro`
  });
  pagesRouter.push({
    path: `/en-US/${name}-taro`,
    component: modulesPageTaro[path]
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/zh-CN/',
    name: '/zh-CN/',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/en-US/',
    name: '/en-US/',
    component: Index,
    children: pagesEnRouter
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: '/zh-CN/'
  }
});
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.split('#')[1];
      const ele = document.getElementById(id);
      setTimeout(() => {
        ele && ele.scrollIntoView(true);
      });
    }
  }
});
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
export default router;
