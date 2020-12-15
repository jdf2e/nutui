/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import Resource from './views/Resource.vue';
import Main from './views/Main.vue';

const pagesRouter: Array<RouteRecordRaw> = [];
const files = require.context('@/packages', true, /doc\.md$/);
files.keys().forEach(component => {
  const componentEntity = files(component).default;
  const name = `${component.split('/')[1]}`;
  pagesRouter.push({
    path: name,
    component: componentEntity,
    name
  });
});
const docs = require.context('@/docs', true, /\.md$/);
docs.keys().forEach(component => {
  const componentEntity = docs(component).default;
  const name = `${component.split('/')[1].replace('.md', '')}`;
  pagesRouter.push({
    path: name,
    component: componentEntity,
    name
  });
});
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/main',
    name: '/main',
    component: Main
    // children: pagesRouter
  },
  {
    path: '/resource',
    name: '/resource',
    component: Resource
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
