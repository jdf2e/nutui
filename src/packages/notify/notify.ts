import { createVNode, defineComponent, render, App } from 'vue';
import VueNotify from './index.vue';
const NotifyConstructor = defineComponent(VueNotify);
const defaultOptions = {
  type: 'base',
  showPopup: false,
  msg: '',
  color: undefined,
  background: undefined,
  duration: 3000,
  className: '',
  onClosed: null,
  onClick: null,
  onOpened: null,
  textTimer: null,
  unmount: null
};

let idsMap: string[] = [];
let optsMap: any[] = [];
const clearNotify = (id?: string) => {
  if (id) {
    const container = document.getElementById(id);
    optsMap = optsMap.filter(item => item.id !== id);
    idsMap = idsMap.filter(item => item !== id);
    if (container) {
      document.body.removeChild(container);
    }
  } else {
    idsMap.forEach(item => {
      const container = document.getElementById(item);
      if (container) {
        document.body.removeChild(container);
      }
    });
    optsMap = [];
    idsMap = [];
  }
};

const updateNotify = (opts: any) => {
  const container = document.getElementById(opts.id);
  if (container) {
    const currentOpt = optsMap.find(item => item.id === opts.id);
    if (currentOpt) {
      opts = { ...defaultOptions, ...currentOpt, ...opts };
    } else {
      opts = { ...defaultOptions, ...opts };
    }
    const instance: any = createVNode(VueNotify, opts);
    render(instance, container);
    return instance.component.ctx;
  }
};

const mountNotify = (opts: any) => {
  opts.unmount = clearNotify;
  let _id;
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find(item => item === opts.id)) {
      return updateNotify(opts);
    }
  } else {
    _id = new Date().getTime() + '';
  }
  opts = { ...defaultOptions, ...opts };
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  const container = document.createElement('view');
  container.id = opts.id;
  const instance: any = createVNode(NotifyConstructor, opts);
  render(instance, container);
  document.body.appendChild(container);
  setTimeout(() => {
    instance.showPopup = true;
  }, 0);
  return instance.component.ctx;
};

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[NutUI Notify]: msg不能为空');
    return;
  }
};

export const Notify = {
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
  hide() {
    clearNotify();
  }
};

export default {
  install(app: App): void {
    app.config.globalProperties.$notify = Notify;
  }
};
