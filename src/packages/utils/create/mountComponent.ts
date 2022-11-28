import { createApp, Component } from 'vue';

export const CreateComponent = (options: any, component: any) => {
  console.log(111);
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

  componens.forEach((comp: Component) => {
    instance.use(comp);
  });

  elWarp.appendChild(root);

  instance.mount(root);
};
