import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutUI from '@/packages/nutui.vue';
import '@/packages/utils/touchEmulator';
createApp(App).use(router).use(NutUI).mount('#app');
