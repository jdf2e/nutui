import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../config.json';

/* import Nav from './view/nav.vue';
import Intro from './view/intro.vue'; */
//import Phone from './view/phone.vue';
const Nav = () => import('./view/nav.vue');
const Intro = () => import('./view/intro.vue');
const Phone = () => import('./view/phone.vue');

Vue.use(VueRouter);

const routes = [
  { 
  	path: '/', 
    redirect: '/intro'
  },
  { 
    path: '/intro', 
    components:{
      nav:Nav,
      main:Intro
    }
  },
  { 
    path: '/nutdemo', 
    components:{
      nav:Nav,
      phone:Phone,
      
    }
  }
];

//组件文档页面
Conf.packages.map(item => {
  //views[item.name] = require('./view/'+item.name.toLowerCase()+'.vue');
  //views[item.name] = () => import('./view/' + item.name.toLowerCase() + '.vue');
  routes.push({
    path: '/' + item.name.toLowerCase(),
    components: {
      nav: Nav,
      main: () => import('./view/' + item.name.toLowerCase() + '.vue'),
    }
  });
});

/* for(let name in views){
    
} */

const router = new VueRouter({
      routes,
      scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});
export default router;
