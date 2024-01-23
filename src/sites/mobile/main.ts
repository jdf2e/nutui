import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NutUI from '@nutui/nutui';
import Demo from './components/demo.vue';
import '@nutui/touch-emulator';

const app = createApp(App);
app.use(router);
app.use(NutUI);
app.component('Demo', Demo);

app.mount('#app');
