import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/sites/assets/styles/reset.scss";

createApp(App)
  .use(router)
  .mount("#app");
