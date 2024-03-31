import { createApp } from "vue";
import { h as isString, i as isFunction } from "./util-DnfK0Qan.js";
const CreateComponent = (options, component) => {
  let elWrap = document.body;
  const teleport = options.teleport || "body";
  if (teleport != "body") {
    if (isString(teleport)) {
      elWrap = document.querySelector(teleport);
    } else {
      elWrap = options.teleport;
    }
  }
  const root = document.createElement("view");
  const name = component.name ? component.name + "-" : "";
  const id1 = options.id || (/* @__PURE__ */ new Date()).getTime();
  root.id = name + id1;
  let Wrapper = {};
  if (isFunction(component.wrapper)) {
    Wrapper = component.wrapper(elWrap, root);
  } else {
    Wrapper = component.wrapper;
  }
  const instance = createApp(Wrapper, options);
  const componens = component.components;
  componens && componens.forEach((comp) => {
    instance.use(comp);
  });
  elWrap.appendChild(root);
  return {
    instance: instance.mount(root),
    unmount: () => {
      instance.unmount();
      elWrap.removeChild(root);
    }
  };
};
export {
  CreateComponent as C
};
