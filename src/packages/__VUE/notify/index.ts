import { createVNode, render, h, onMounted, VNode, ComponentInternalInstance, Component } from 'vue';
import { App } from 'vue';
import Notify from './index.vue';
const defaultOptions = {
  type: 'base',
  visible: true,
  msg: '',
  color: undefined,
  background: undefined,
  duration: 3000,
  className: '',
  // onClosed: null,
  // onClick: null,
  // onOpened: null,
  // textTimer: null,
  teleport: '',
  unmount: new Function()
};
type Id = { id: string };
type TDOptions = Partial<typeof defaultOptions & Id>;

let idsMap: string[] = [];
let optsMap: TDOptions[] = [];
const clearNotify = (id?: string) => {
  if (id) {
    const container = document.getElementById(id);
    optsMap = optsMap.filter((item) => item.id !== id);
    idsMap = idsMap.filter((item) => item !== id);
    if (container) {
      document.body.removeChild(container);
    }
  } else {
    idsMap.forEach((item) => {
      const container = document.getElementById(item);
      if (container) {
        document.body.removeChild(container);
      }
    });
    optsMap = [];
    idsMap = [];
  }
};

const updateNotify = (opts: TDOptions) => {
  const container = document.getElementById(opts.id as string);
  if (container) {
    const currentOpt = optsMap.find((item) => item.id === opts.id);
    if (currentOpt) {
      opts = { ...defaultOptions, ...currentOpt, ...opts };
    } else {
      opts = { ...defaultOptions, ...opts };
    }
    const instance: VNode = createVNode(Notify, opts);
    render(instance, container);
    return (instance.component as ComponentInternalInstance).data;
  }
};

const mountNotify = (opts: TDOptions) => {
  opts.unmount = clearNotify;
  let _id;
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find((item) => item === opts.id)) {
      return updateNotify(opts);
    }
  } else {
    _id = new Date().getTime() + '';
  }
  opts = { ...defaultOptions, ...opts };
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  const root = document.createElement('view');
  root.id = 'notify-' + opts.id;
  const Wrapper = {
    setup() {
      // opts.onUpdate = (val: boolean) => {
      //   console.log(val);
      //   if (val == false) {
      //     document.body.removeChild(root);
      //   }
      // };
      opts.teleport = `#notify-${opts.id}`;
      onMounted(() => {
        setTimeout(() => {
          document.body.removeChild(root);
        }, opts.duration);
      });
      return () => {
        return h(Notify, opts);
      };
    }
  };
  const instance: VNode = createVNode(Wrapper);
  document.body.appendChild(root);
  render(instance, root);
  // const container = document.createElement('view');
  // container.id = opts.id;
  // const instance: any = createVNode(Notify, opts);
  // render(instance, container);
  // console.log(container);
  // teleport.appendChild(container);
  // setTimeout(() => {
  //   instance.visible = true;
  // }, 0);
  // return instance.component.ctx;
};

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[NutUI Notify]: msg不能为空');
    return;
  }
};

export const NotifyFunction = {
  text(msg: string, obj = {}) {
    errorMsg(msg);
    return mountNotify({ ...obj, msg });
  },
  primary(msg: string, obj = {}) {
    errorMsg(msg);
    return mountNotify({ ...obj, msg, type: 'primary' });
  },
  success(msg: string, obj = {}) {
    errorMsg(msg);
    return mountNotify({ ...obj, msg, type: 'success' });
  },
  danger(msg: string, obj = {}) {
    errorMsg(msg);
    return mountNotify({ ...obj, msg, type: 'danger' });
  },
  warn(msg: string, obj = {}) {
    errorMsg(msg);
    return mountNotify({ ...obj, msg, type: 'warning' });
  },
  hide(): void {
    clearNotify();
  },
  install(app: any): void {
    app.use(Notify);
    app.config.globalProperties.$notify = NotifyFunction;
  }
};

export default NotifyFunction;
export { Notify };
