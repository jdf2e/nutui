//import 'babel-polyfill';
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NutUI from '../../src/nutui';
// import en from '../../src/locales/lang/en-US';
// import demoEN from './lang/en-US';
import './asset/css/common.scss';

import './asset/img/logo_share.png';

Vue.config.productionTip = false;

// Object.assign(en, demoEN);

// Vue.use(NutUI, {
//   locale: 'en-US',
//   lang: en
// });

NutUI.install(Vue);

//Vue.locale = () => {};

// const i18n = new VueI18n({
//   locale: 'en-US',
//   messages: {
//     'en-US': en
//   }
// });

// 兼容vue-i18n
// Vue.locale = () => {};
// const i18n = new VueI18n({
//   locale: 'en-US',
//   messages: {
//     'en-US': en
//   }
// });
// Vue.prototype.$i18n = i18n;
// Vue.use(VueI18n);

const app = new Vue({
  el: '#demo',
  router,
  components: { App },
  template: '<App/>'
})

//Vue.prototype.NUTCONF = Conf;


let pageLoading = app.$toast.loading();

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