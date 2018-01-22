import Vue from 'vue';
import VueRouter from 'vue-router';
import Conf from '../package.json';

import Index from './demo/index.vue';
import DemoNav from './demo/demonav.vue';

let demos = {};
//组件示例页面
Conf.packages.map(item=>{
    if(item.showDemo === false) return;
    demos[item.name] = require('./demo/'+item.name.toLowerCase()+'.vue');
});


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
        demonav:DemoNav
    }
  },
];

for(let name in demos){
    routes.push({
      path: '/'+name.toLowerCase(), 
      components:{
        main:demos[name],
        demonav:DemoNav
      }
    });
}

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
