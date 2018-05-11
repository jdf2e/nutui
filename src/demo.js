import 'babel-polyfill';
import Vue from 'vue';
import App from './demo.vue';
import router from './demo-router.js';
import NutUI from './nutui.js';
import Conf from '../config.json';
import demoHeader from './package/demoheader/index.js';

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
