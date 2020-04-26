import Vue from 'vue';
import VueRouter from 'vue-router';
import { packages } from '@/config.json';
import vueg from 'vueg';

const Index = () => import(/* webpackChunkName: "demo-index" */ './view/index.vue');
const DemoNav = () => import(/* webpackChunkName: "demo-demonav" */'./view/demonav.vue');

// import Index from './view/index.vue';
// import DemoNav from './view/demonav.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name:'index',
    path: '/index',
    components: {
      main: Index,
      demonav: DemoNav,
    }
  },
];

//组件示例页面
packages.map(item => {
  if (item.showDemo === false) return;
  const pkgName =  item.name.toLowerCase();
  routes.push({
    path: '/' + item.name,
    components: {
      main: () => import(
        /* webpackChunkName: "demo-[request]" */
        `@/packages/${pkgName}/demo.vue`),
      demonav: DemoNav
    },
    name: item.name
  });
});

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path == '/index') {
      return null;
    } else {
      return { x: 0, y: 0 }
    }
  }
});


const options = {
  duration: '0.2', //转场动画时长，默认为0.3，单位秒
  firstEntryDisable: true, //值为true时禁用首次进入应用时的渐现动画，默认为false
  firstEntryDuration: '.3', //首次进入应用时的渐现动画时长，默认为.6
  forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight
  backAnim: 'fadeInLeft', //后退动画，默认为fedeInLeft
  sameDepthDisable: false, //url深度相同时禁用动画，默认为false
  tabs: [], //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
  tabsDisable: false, //值为true时，tabs间的转场没有动画，默认为false
  shadow: false, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
};

Vue.use(vueg, router, options);

export default router;
