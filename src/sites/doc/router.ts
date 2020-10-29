import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './views/Index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
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

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
