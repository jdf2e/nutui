import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [];
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

const files = require.context("@/packages", true, /doc\.md$/);
files.keys().forEach(component => {
  // console.log(component)
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
