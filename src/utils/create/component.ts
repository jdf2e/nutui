import { App, defineComponent, ComponentOptions } from 'vue';
export function createComponent(name: string) {
  return function(_component: ComponentOptions) {
    _component.baseName = name;
    _component.name = 'nut-' + name;
    _component.install = (vue: App) => {
      vue.component(_component.name as string, _component);
    };
    return defineComponent(_component);
  } as typeof defineComponent;
}
export function createDemoComponent(name: string) {
  return function(_component: ComponentOptions) {
    _component.baseName = name;
    _component.name = 'demo-' + name;
    _component.install = (vue: App) => {
      vue.component(_component.name as string, _component);
    };
    return defineComponent(_component);
  } as typeof defineComponent;
}
