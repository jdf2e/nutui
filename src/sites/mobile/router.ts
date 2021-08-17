import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
import IndexTaro from './components/IndexTaro.vue';
import { nav } from '../../config.json';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
];

/** webpack */
// const files = require.context('@/packages', true, /demo\.vue$/);
// files.keys().forEach(component => {
//   const componentEntity = files(component).default;
//   routes.push({
//     path: `/${componentEntity.baseName}`,
//     name: componentEntity.baseName,
//     component: componentEntity
//   });
// });

const findComponentName = (name: string) => {
  for (const key in nav) {
    if (Object.prototype.hasOwnProperty.call(nav, key)) {
      const element = nav[key];
      let idx = element.packages.findIndex(
        (i) => i.name.toLowerCase() === name
      );
      if (idx !== -1) {
        return element.packages[idx].name;
      }
    }
  }
};

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/**/demo.vue');

for (const path in modulesPage) {
  let name = (/packages\/__VUE\/(.*)\/demo.vue/.exec(path) as any[])[1];
  routes.push({
    path: '/' + name,
    component: modulesPage[path],
    name,
    meta: {
      ComponentName: findComponentName(name)
    }
  });

  routes.push({
    path: '/' + name + '-taro',
    component: IndexTaro,
    name: name + '-taro',
    meta: {
      ComponentName: findComponentName(name)
    }
  });
}

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
