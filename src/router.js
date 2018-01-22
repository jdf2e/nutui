import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../package.json';

import Nav from './view/nav.vue';
import Intro from './view/intro.vue';
import Phone from './view/phone.vue';
let views = {};
//组件文档页面
Conf.packages.map(item=>{
  views[item.name] = require('./view/'+item.name.toLowerCase()+'.vue');
});


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

for(let name in views){
    routes.push({
      path: '/'+name.toLowerCase(), 
      components:{
        nav:Nav,
        main:views[name],
      }
    });
}

const router = new VueRouter({
      routes,
      scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});
export default router;
