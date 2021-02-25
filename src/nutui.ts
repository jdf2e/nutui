export default {
  async install(app: any): Promise<void> {
    /** webpack */
    // const files = require.context('@/packages', true, /index\.vue$/);
    // files.keys().forEach(component => {
    //   const componentEntity = files(component).default;
    //   app.component(componentEntity.name, componentEntity);
    // });

    /** vite */
    const modules = import.meta.globEager('/src/packages/**/index.vue');
    for (const key in modules) {
      const componentEntity = modules[key]?.default;
      app.component(componentEntity.name, componentEntity);
    }
  }
};
