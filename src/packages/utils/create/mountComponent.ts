import { createApp, Component } from 'vue';
import { isFunction, isString } from '../util';

export const CreateComponent = (options: any, component: any) => {
  let elWarp: HTMLElement = document.body;
  const teleport = (options.teleport as string) || 'body';
  if (teleport != 'body') {
    if (isString(teleport)) {
      elWarp = document.querySelector(teleport) as HTMLElement;
    } else {
      elWarp = options.teleport as HTMLElement;
    }
  }
  const root = document.createElement('view');
  const name = component.name ? component.name + '-' : '';
  const id1 = options.id || new Date().getTime();
  root.id = name + id1;

  let Wrapper = {};

  if (isFunction(component.wrapper)) {
    Wrapper = component.wrapper(elWarp, root);
  } else {
    Wrapper = component.wrapper;
  }

  const instance: Component = createApp(Wrapper, options);

  const componens = component.components;

  componens &&
    componens.forEach((comp: Component) => {
      instance.use(comp);
    });

  elWarp.appendChild(root);

  return {
    instance: instance.mount(root),
    unmount: () => {
      instance.unmount();
      elWarp.removeChild(root);
    }
  };
};
