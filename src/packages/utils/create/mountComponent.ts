import { render, createVNode, VNode } from 'vue';
import { createApp, reactive, Component } from 'vue';

export const CreateComponent = (options: any, component: any) => {
  let elWarp: HTMLElement = document.body;
  const teleport = options.teleport as string;
  if (teleport != 'body') {
    if (typeof teleport == 'string') {
      elWarp = document.querySelector(teleport) as HTMLElement;
    } else {
      elWarp = options.teleport as HTMLElement;
    }
  }
  const root = document.createElement('view');
  root.id = `${component.name}-` + new Date().getTime();
  const Wrapper = component.wrapper;
  const instance: Component = createApp(Wrapper);

  const componens = component.components;
  for (let key in componens) {
    instance.component(key, componens[key]);
  }

  elWarp.appendChild(root);

  instance.mount(root);
};
