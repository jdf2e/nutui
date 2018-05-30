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