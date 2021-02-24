import { App } from 'vue';
export default {
  async install(app: App<Element>): Promise<void> {
    /** webpack */
    // const files = require.context('@/packages', true, /index\.vue$/);
    // files.keys().forEach(component => {
    //   const componentEntity = files(component).default;
    //   app.component(componentEntity.name, componentEntity);
    // });

    /** vite */
    const modulesPage = import.meta.glob('/src/packages/**/index.vue');
    for (const path in modulesPage) {
      let name = (/packages\/(.*)\/index.vue/.exec(path) as any[])[1];
      let res: any = await modulesPage[path]();
      const componentEntity = res?.default;
      app.component(componentEntity.name, componentEntity);
    }
  }
};
