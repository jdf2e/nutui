import { createVNode, defineComponent, render, App } from 'vue';
import VueNotify from './index.vue';
const NotifyConstructor = defineComponent(VueNotify);
const defaultOptions = {
  msg: '',
  id: '',
  duration: 2000, //显示时间(毫秒)
  center: true,
  type: 'text',
  customClass: '',
  bottom: 30,
  size: 'base',
  icon: null,
  textAlignCenter: true,
  loadingRotate: true,
  bgColor: 'rgba(0, 0, 0, 1)',
  onClose: null,
  unmount: null,
  cover: false, //透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)',
  closeOnClickOverlay: false
};

let idsMap: string[] = [];
let optsMap: any[] = [];
const clearToast = (id?: string) => {
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

const updateToast = opts => {
  const container = document.getElementById(opts.id);
  if (container) {
    const currentOpt = optsMap.find(item => item.id === opts.id);
    if (currentOpt) {
      opts = { ...defaultOptions, ...currentOpt, ...opts };
    } else {
      opts = { ...defaultOptions, ...opts };
    }
    const instance: any = createVNode(NotifyConstructor, opts);
    render(instance, container);
    return instance.component.ctx;
  }
};

const mountToast = opts => {
  opts.unmount = clearToast;
  let _id;
  // 如果是更新已有的toast
  if (opts.id) {
    _id = opts.id;
    if (idsMap.find(item => item === opts.id)) {
      return updateToast(opts);
    }
  } else {
    _id = new Date().getTime() + '';
  }
  opts = { ...defaultOptions, ...opts };
  opts.id = _id;
  idsMap.push(opts.id);
  optsMap.push(opts);
  const container = document.createElement('div');
  container.id = opts.id;
  const instance: any = createVNode(NotifyConstructor, opts);
  render(instance, container);
  document.body.appendChild(container);
  console.log(instance.component);
  return instance.component.ctx;
};

const errorMsg = msg => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空');
    return;
  }
};

export const Notify = {
  text(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'text', msg });
  },
  success(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'success', ...opts, msg, type: 'success' });
  },
  fail(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'failure', ...opts, msg, type: 'fail' });
  },
  warn(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ icon: 'tips', ...opts, msg, type: 'warn' });
  },
  loading(msg, opts = {}) {
    return mountToast({
      icon:
        "data:image/svg+xml, %3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb(230,230,230)' d='M874.667 533.333h-192c-12.8 0-21.334-8.533-21.334-21.333 0-12.8 8.534-21.333 21.334-21.333h192c12.8 0 21.333 8.533 21.333 21.333 0 12.8-8.533 21.333-21.333 21.333zM648.533 407.467C640 416 627.2 416 618.667 407.467c-8.534-8.534-8.534-21.334 0-29.867L755.2 241.067c8.533-8.534 21.333-8.534 29.867 0 8.533 8.533 8.533 21.333 0 29.866L648.533 407.467zM512 896c-12.8 0-21.333-8.533-21.333-21.333v-192c0-12.8 8.533-21.334 21.333-21.334s21.333 8.534 21.333 21.334v192c0 12.8-8.533 21.333-21.333 21.333zm0-533.333c-12.8 0-21.333-8.534-21.333-21.334v-192c0-12.8 8.533-21.333 21.333-21.333s21.333 8.533 21.333 21.333v192c0 12.8-8.533 21.334-21.333 21.334zM270.933 782.933c-8.533 8.534-21.333 8.534-29.866 0s-8.534-21.333 0-29.866L377.6 616.533c8.533-8.533 21.333-8.533 29.867 0 8.533 8.534 8.533 21.334 0 29.867L270.933 782.933zm104.534-375.466L238.933 270.933c-8.533-8.533-8.533-21.333 0-29.866s21.334-8.534 29.867 0L405.333 377.6c8.534 8.533 8.534 21.333 0 29.867-6.4 6.4-21.333 6.4-29.866 0zM362.667 512c0 12.8-8.534 21.333-21.334 21.333h-192C136.533 533.333 128 524.8 128 512c0-12.8 8.533-21.333 21.333-21.333h192c12.8 0 21.334 8.533 21.334 21.333zm285.866 104.533l136.534 136.534c8.533 8.533 8.533 21.333 0 29.866-8.534 8.534-21.334 8.534-29.867 0L618.667 646.4c-8.534-8.533-8.534-21.333 0-29.867 6.4-6.4 21.333-6.4 29.866 0z'/%3E%3C/svg%3E",
      ...opts,
      msg,
      type: 'loading'
    });
  },
  hide() {
    clearToast();
  }
};

// export default Toast;

export default {
  install(app: App): void {
    app.config.globalProperties.$notify = Notify;
  }
};
