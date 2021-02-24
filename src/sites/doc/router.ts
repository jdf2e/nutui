/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
import Resource from './views/Resource.vue';
import Main from './views/Main.vue';
import { HttpClient } from '../service/HttpClient';
const pagesRouter: Array<RouteRecordRaw> = [];

/** webpack */
// const files = require.context('@/packages', true, /doc\.md$/);
// files.keys().forEach(component => {
//   const componentEntity = files(component).default;
//   const name = `${component.split('/')[1]}`;
//   pagesRouter.push({
//     path: '/' + name,
//     component: componentEntity,
//     name
//   });
// });

/** vite */
const modulesPage = import.meta.glob('/src/packages/**/doc.md');
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/doc.md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

/** webpack */
// const docs = require.context('@/docs', true, /\.md$/);
// docs.keys().forEach(component => {
//   const componentEntity = docs(component).default;
//   const name = `${component.split('/')[1].replace('.md', '')}`;
//   pagesRouter.push({
//     path: '/' + name,
//     component: componentEntity,
//     name
//   });
// });

/** vite */
const modulesDocs = import.meta.glob('/src/docs/*.md');
for (const path in modulesDocs) {
  let name = (/docs\/(.*).md/.exec(path) as any[])[1];
  pagesRouter.push({
    path: '/' + name,
    component: modulesDocs[path],
    name
  });
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Main
    // children: pagesRouter
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: pagesRouter
  },
  {
    path: '/resource',
    name: 'resource',
    component: Resource
  }
];
routes.push({
  name: 'notFound',
  path: '/:path(.*)+',
  redirect: {
    name: '/'
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
  new HttpClient().request('/user/saveVisitInfo', 'post', {
    headers: '',
    componentName: to.path.split('/')[1]
  });
});
export default router;
