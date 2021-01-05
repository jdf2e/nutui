import VanNotify from './index.vue';
import {
  createApp,
  reactive,
  Component,
  nextTick,
  getCurrentInstance,
  h
} from 'vue';

let timer;
let instance;
const inBrowser = typeof window !== 'undefined';

function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

function parseOptions(message) {
  return isObject(message) ? message : { message };
}

function useExpose(apis: Record<string, any>) {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy, apis);
  }
}
function usePopupState() {
  const state = reactive({
    show: false
  });

  const toggle = (show: boolean) => {
    state.show = show;
  };

  const open = (props: Record<string, any>) => {
    Object.assign(state, props);

    nextTick(() => {
      toggle(true);
    });
  };

  const close = () => {
    toggle(false);
  };

  useExpose({ open, close, toggle });

  return {
    open,
    close,
    state,
    toggle
  };
}
function mountComponent(RootComponent: Component) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount(root);
      document.body.removeChild(root);
    }
  };
}
function initInstance() {
  ({ instance } = mountComponent({
    setup() {
      const { state, toggle } = usePopupState();
      return h('img', {});
    }
  }));
}

function Notify(options) {
  if (!inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options)
  };

  instance.open(options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    color: undefined,
    message: '',
    onClose: null,
    onClick: null,
    onOpened: null,
    duration: 3000,
    className: '',
    background: undefined
  };
}

Notify.clear = () => {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = options => {
  Object.assign(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = () => {
  Notify.currentOptions = defaultOptions();
};

Notify.install = app => {
  app.use(VanNotify);
  app.config.globalProperties.$notify = Notify;
};

Notify.Component = VanNotify;

export default Notify;
