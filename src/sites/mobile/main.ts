import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutUI from '@/nutui';
import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';
createApp(App)
  .use(router)
  .use(NutUI)
  .mount('#app');
