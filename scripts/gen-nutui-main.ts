/**
 * 生成入口文件
 */
export class Gen {
  constructor() {
    this.init();
  }

  init() {
    const template = `
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
        `;
  }
}
