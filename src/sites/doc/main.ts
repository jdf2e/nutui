import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';

import { isMobile } from '@/sites/assets/util';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}
createApp(App)
  .use(router)
  .mount('#doc');
