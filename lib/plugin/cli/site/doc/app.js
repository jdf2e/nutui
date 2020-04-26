import Vue from 'vue'
import App from './App.vue'
import router from './router';
import copy from 'clipboard';
import backtop from './compents/backtop/backtop.js';
import './compents/backtop/backtop.css';
backtop.install(Vue);
import 'highlight.js/styles/github.css';
import VueStickto from './compents/vue-stickto/VueStickto.js';
Vue.use(VueStickto)
import codes from 'qrcode';
import { isMobile } from './asset/js/utils.js';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

Vue.prototype.copy = copy;
Vue.prototype.qrcode = codes;

Vue.config.productionTip = false;

new Vue({
  el: '#doc',
  router,
  components: { App },
  template: '<App/>'
});

