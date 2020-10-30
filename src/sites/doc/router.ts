// @ts-nocheck
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';

const pagesRouter: Array<RouteRecordRaw> = [];
const files = require.context('@/packages', true, /doc\.md$/);
files.keys().forEach(component => {
  const componentEntity = files(component).default;
  pagesRouter.push({
    path: `/${component.split('/')[1]}`,
    component: componentEntity
  });
});
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: pagesRouter
  }
];

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

export default router;
