// @ts-nocheck
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';

const pagesRouter: any = [];
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
// import { nav } from '@/config';
// nav.forEach(item => {
//   item.packages.forEach(_item => {
//     if (_item.show) {
//       routes.push({
//         path: `/${_item.name}`,
//         name: _item.name,
//         components: {
//         	main: () => import(`@/packages/${_item.name.toLocaleLowerCase()}/demo.vue`),
//         }
//       })
//     }
//   })
// })

// const files = require.context('@/packages', true, /doc\.md$/);
// files.keys().forEach(component => {
//   // console.log(component)
// });

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
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
