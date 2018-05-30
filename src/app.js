import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import NutUI from './nutui.js';
import codeBox from './package/codebox/index.js';
import docHeader from './package/docheader/index.js';
import VueQriously from 'vue-qriously';
import Conf from '../config.json';
import share from './asset/js/share.min.js';

Vue.prototype.NUTCONF = Conf;

NutUI.install(Vue);
//二维码生成
Vue.use(VueQriously);

Vue.component('nut-codebox', codeBox);
Vue.component('nut-docheader', docHeader);

Vue.directive('highlight',function (el) {
    hljs.highlightBlock(el)
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');



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