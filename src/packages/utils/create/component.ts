import { App, defineComponent } from 'vue';
export function createComponent(name: string) {
  const componentName = 'nut-' + name;
  return {
    componentName,
    create: function (_component: any) {
      _component.baseName = name;
      _component.name = componentName;
      _component.install = (vue: App) => {
        vue.component(_component.name as string, _component);
      };
      return defineComponent(_component);
    },
    createDemo: function (_component: any) {
      _component.baseName = name;
      _component.name = 'demo-' + name;
      return defineComponent(_component);
    }
  };
}
