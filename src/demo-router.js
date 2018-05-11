import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../config.json';

/* import Index from './demo/index.vue';
import DemoNav from './demo/demonav.vue'; */
const Index = () => import('./demo/index.vue');
const DemoNav = () => import('./demo/demonav.vue');


Vue.use(VueRouter);

const routes = [
  { 
  	path: '/', 
    redirect: '/index'
  },
  { 
    path: '/index', 
    components:{
        main:Index,
        demonav:DemoNav,
    }
  },
];

//组件示例页面
Conf.packages.map(item => {
  if (item.showDemo === false) return;
  const pkgName =  item.name.toLowerCase()
  routes.push({
    path: '/' + item.name,
    components: {
      main: () => import('./demo/' + pkgName + '.vue'),
      demonav: DemoNav
    },
    name:item.name
  });
});

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.path == '/index'){
      return null;
    }else{
      return { x: 0, y: 0 }
    }
  }
});
export default router;
