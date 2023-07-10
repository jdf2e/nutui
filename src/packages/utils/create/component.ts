import {
  App,
  defineComponent,
  ComponentPropsOptions,
  ComponentOptions,
  ExtractPropTypes,
  SetupContext,
  RenderFunction,
  Component
} from 'vue';
import locale from '@/packages/locale';
import { getPropByPath, isFunction } from '../util';

export function createComponent(name: string) {
  const componentName = 'nut-' + name;
  return {
    componentName,
    translate(keyPath: string, ...args: unknown[]): string {
      // 依赖响应能力
      const languages = locale.languages();
      const text = getPropByPath(languages, `${name.replace('-', '')}.${keyPath}`) || getPropByPath(languages, keyPath);
      return isFunction(text) ? text(...args) : text;
    },
    create: function (_component: ComponentOptions) {
      _component.name = componentName;
      _component.install = (vue: App) => {
        vue.component(_component.name as string, _component as any);
      };
      return defineComponent(_component as ComponentOptions);
    } as typeof defineComponent
  };
}
