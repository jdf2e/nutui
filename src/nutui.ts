import { version } from '../package.json';
const modules = import.meta.globEager('/src/packages/**/index.vue');
function install(app: any) {
  /** webpack */
  // const files = require.context('@/packages', true, /index\.vue$/);
  // files.keys().forEach(component => {
  //   const componentEntity = files(component).default;
  //   app.component(componentEntity.name, componentEntity);
  // });

  /** vite */
  for (const key in modules) {
    const componentEntity = modules[key]?.default;
    app.component(componentEntity.name, componentEntity);
  }
}
export default { install, version };
