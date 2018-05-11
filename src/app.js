import 'babel-polyfill';
import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
import NutUI from './nutui.js';
import codeBox from './package/codebox/index.js';
import docHeader from './package/docheader/index.js';
import VueQriously from 'vue-qriously';
import Conf from '../config.json';

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
