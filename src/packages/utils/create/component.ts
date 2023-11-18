import { App, defineComponent, ComponentOptions } from 'vue';

export function createComponent(name: string) {
  // TODO: It will be deprecated someday.
  const componentName = 'nut-' + name;
  return {
    componentName,
    create: function (_component: ComponentOptions) {
      _component.name = componentName;
      _component.install = (vue: App) => {
        vue.component(_component.name as string, _component as any);
      };
      return defineComponent(_component as ComponentOptions);
    } as typeof defineComponent
  };
}
