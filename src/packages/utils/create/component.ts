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
    } as typeof defineComponent,
    createDemo: function <
      PropsOptions extends Readonly<ComponentPropsOptions>,
      Props extends Readonly<ExtractPropTypes<PropsOptions>>
    >(_component: {
      name?: string;
      baseName?: string;
      props?: PropsOptions;
      components?: Record<string, Component>;
      setup?: (props: Props, setupContext: SetupContext) => RenderFunction | Record<string, any> | any;
      emits?: string[];
      [optionKey: string]: any;
    }) {
      _component.baseName = name;

      _component.name = 'demo-' + name;
      return defineComponent(_component as any);
    }
  };
}
