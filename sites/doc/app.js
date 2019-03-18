import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import copy from 'clipboard';
import backtop from './compents/backtop/backtop.js';
import  './compents/backtop/backtop.css';
backtop.install(Vue);
import 'highlight.js/styles/github.css';
import VueStickto from './compents/vue-stickto/VueStickto.js';
Vue.use(VueStickto)
import codes from 'qrcode';


Vue.prototype.copy = copy;
Vue.prototype.qrcode = codes;

Vue.config.productionTip = false;

new Vue({
  el: '#doc',
  router,
  components: { App },
  template: '<App/>'
});

