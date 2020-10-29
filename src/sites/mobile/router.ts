import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index1.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
];

const files = require.context('@/packages', true, /demo\.vue$/);
files.keys().forEach(component => {
  const componentEntity = files(component).default;
  routes.push({
    path: `/${componentEntity.baseName}`,
    name: componentEntity.baseName,
    component: componentEntity
  });
});

// routes.push({
//   name: 'NotFound',
//   path: '/:path(.*)+',
//   redirect: () => '/',
// });

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
