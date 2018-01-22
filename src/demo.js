import 'babel-polyfill';
import Vue from 'vue';
import App from './demo.vue';
import router from './demo-router.js';
import NutUI from './nutui.js';

NutUI.install(Vue);

Vue.directive('highlight',function (el) {
    hljs.highlightBlock(el)
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#demo');
