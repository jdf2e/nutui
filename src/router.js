import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../config.json';

const Nav = () => import('./view/nav.vue');
const Intro = () => import('./view/intro.vue');
const Phone = () => import('./view/phone.vue');
const Cases = () => import('./view/cases.vue');
Vue.use(VueRouter);

const routes = [
  { 
    name:'/',
  	path: '/', 
    redirect: '/intro'
  },
  { 
    name:'intro',
    path: '/intro', 
    components:{
      nav:Nav,
      main:Intro
    }
  },
  { 
    name:'nutdemo',
    path: '/nutdemo', 
    components:{
      nav:Nav,
      phone:Phone,
      
    }
  },
  { 
    name:'cases',
    path: '/cases', 
    components:{
      main:Cases,
    }
  }
];

//组件文档页面
Conf.packages.map(item => {
  routes.push({
    name: item.name,
    path: '/' + item.name,
    components: {
      nav: Nav,
      main: () => import('./view/' + item.name.toLowerCase() + '.vue'),
    }
  });
});

const router = new VueRouter({
      routes,
      scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});
export default router;
