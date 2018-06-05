import 'babel-polyfill';
import Vue from 'vue';
import App from './demo.vue';
import router from './demo-router.js';
import NutUI from './nutui.js';
import Conf from '../config.json';
import demoHeader from './package/demoheader/index.js';
import share from './asset/js/share.min.js';

Vue.prototype.NUTCONF = Conf;

NutUI.install(Vue);

Vue.component('nut-demoheader', demoHeader);

Vue.directive('highlight',function (el) {
    hljs.highlightBlock(el)
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#demo');

let pageLoading = app.$loading({
  cover: false,
  iconUrl: "data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 0a28.426 28.426 0 0 0-28.447 28.447V256a28.447 28.447 0 1 0 56.894 0V28.447A28.426 28.426 0 0 0 512 0zm0 739.553A28.426 28.426 0 0 0 483.553 768v227.553a28.447 28.447 0 1 0 56.894 0V768A28.426 28.426 0 0 0 512 739.553zM190.198 149.975a28.442 28.442 0 0 0-40.223 40.223l160.89 160.88a28.442 28.442 0 1 0 40.224-40.222zm522.936 522.947a28.442 28.442 0 0 0-40.223 40.222l160.891 160.881a28.442 28.442 0 1 0 40.223-40.223zM284.447 512A28.426 28.426 0 0 0 256 483.553H28.447a28.447 28.447 0 0 0 0 56.894H256A28.426 28.426 0 0 0 284.447 512zm711.106-28.447H768a28.447 28.447 0 1 0 0 56.894h227.553a28.447 28.447 0 0 0 0-56.894zM310.866 672.922l-160.891 160.88a28.442 28.442 0 1 0 40.223 40.223l160.88-160.89a28.442 28.442 0 1 0-40.222-40.224zm382.157-313.498a28.355 28.355 0 0 0 20.111-8.335l160.891-160.891a28.442 28.442 0 1 0-40.223-40.223l-160.88 160.89a28.447 28.447 0 0 0 20.1 48.559z' fill='%23bfbfbf'/%3E%3C/svg%3E",
  padding: '0.3',
  bgColor: 'rgba(0,0,0,.7)',
  iconRotate: true,
  text: ''
});

router.beforeEach((to, from, next) => {
  pageLoading.show();
  next();
})

router.beforeResolve((to, from, next) => {
  next();
});

router.afterEach((to, from) => {
  pageLoading.hide();
});


var shareOption = {
  iconUrl: 'http://nutui.jd.com/asset/img/share.png',
  url: location.href,
  title: "NutUI - 基于Vue2.0的移动端开源组件库",
  desc: '一套拥有电商基因的基于Vue2.0的轻量级移动端开源组件库'
};


try {
  /*初始化分享*/
  window.share.shareInit(shareOption);
} catch (e) {
  console.log(e);
}