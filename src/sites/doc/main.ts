import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';
import DemoBlock from './components/demo-block';
import { Hover } from './directive/hover/hover';
import NutUI from '@/packages/nutui.vue';

import { isMobile } from '@/sites/assets/util';

if (isMobile) {
  let url = location.hash.replace('/zh-CN/', '').replace('/en-US/', '');
  location.replace('demo.html' + url);
}

createApp(App).directive('hover', Hover).component('demo-block', DemoBlock).use(router).use(NutUI).mount('#doc');
