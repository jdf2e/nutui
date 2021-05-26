import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutUI, { Button } from '@/packages/nutui.vue';
import '@/sites/assets/styles/reset.scss';
import '@/packages/utils/touchEmulator';
console.log(Button);
createApp(App)
  .use(router)
  .use(NutUI)
  .mount('#app');
