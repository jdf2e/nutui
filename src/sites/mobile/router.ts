import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
import { nav } from '../../config.json';
const routes: Array<RouteRecordRaw> = [];

const findComponentName = (name: string) => {
  for (const key in nav) {
    if (Object.prototype.hasOwnProperty.call(nav, key)) {
      const element = nav[key];
      const idx = element.packages.findIndex((i) => i.name.toLowerCase() === name);
      if (idx !== -1) {
        return element.packages[idx].name;
      }
    }
  }
};

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/**/demo.vue');

for (const path in modulesPage) {
  const name = (/packages\/__VUE\/(.*)\/demo.vue/.exec(path) as any[])[1];
  routes.push({
    path: '/zh-CN/' + name,
    component: modulesPage[path],
    meta: {
      ComponentName: findComponentName(name)
    }
  });
  routes.push({
    path: '/en-US/' + name,
    component: modulesPage[path],
    meta: {
      ComponentName: findComponentName(name)
    }
  });
}

routes.push({
  path: '/',
  name: '/',
  component: Index
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
