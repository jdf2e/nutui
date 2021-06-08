import { App, defineComponent, ComponentOptions } from 'vue';
export function createComponent(name: string) {
  const componentName = 'nut-' + name;
  return {
    componentName,
    create: function(_component: ComponentOptions) {
      _component.baseName = name;
      _component.name = componentName;
      _component.install = (vue: App) => {
        vue.component(_component.name as string, _component);
        _component?.children?.length &&
          _component.children.forEach((item: any) => {
            vue.component(item.name as string, item);
          });
      };
      return defineComponent(_component);
    } as typeof defineComponent,
    createDemo: function(_component: ComponentOptions) {
      _component.baseName = name;
      _component.name = 'demo-' + name;
      return defineComponent(_component);
    } as typeof defineComponent
  };
}
