import Vue from 'vue';
import App from './app.vue';
import router from './router';
import mixin from './view/mixin.js';
import Conf from '@/config.json';

import NutUI from '@/nutui';
// import en from '../../src/locales/lang/en-US';
// import demoEN from './lang/en-US';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

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

Vue.mixin(mixin);

const app = new Vue({
  el: '#demo',
  router,
  components: { App },
  template: '<App/>'
});

OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    console.log('PWA缓存有更新，需要刷新页面');

    app.$dialog({
      title: "当前页面有新版本，请刷新",
      noCloseBtn: true,
      noOkBtn: true,
      cancelBtnTxt: "刷新页面",
      closeOnClickModal:false,
      lockBgScroll:true,
      onCancelBtn(){
        window.location.reload();
      }
    });

    //window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

Vue.prototype.NUTCONF = Conf;

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
