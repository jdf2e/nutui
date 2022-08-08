/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import ThemeSetting from './components/ThemeSetting/Index.vue';
import config from '../config/env';
const pagesRouter: Array<RouteRecordRaw> = [
  {
    path: '/base',
    name: 'base',
    component: ThemeSetting
  }
];

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/**/doc.md');
for (const path in modulesPage) {
  let name = (/packages\/__VUE\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: ThemeSetting || modulesPage[path],
    name
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
    path: '/main',
    name: 'main',
    component: Index,
    children: pagesRouter
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: 'base'
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
