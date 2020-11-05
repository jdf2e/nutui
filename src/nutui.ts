import { App } from 'vue';
export default {
  install(app: App<Element>): void {
    const files = require.context('@/packages', true, /index\.vue$/);
    files.keys().forEach(component => {
      const componentEntity = files(component).default;
      app.component(componentEntity.name, componentEntity);
    });
  }
};
