import { createVNode, render } from 'vue';
import VueToast from './toast.vue';

const defaultOptions = {
  msg: '',
  visible: false,
  duration: 2000, //显示时间(毫秒)
  timer: null,
  center: true,
  type: '',
  customClass: '',
  bottom: 30,
  size: 'base',
  icon: null,
  textAlignCenter: true,
  loadingRotate: true,
  bgColor: 'rgba(36, 36, 36, 0.8)',
  onClose: null,
  textTimer: null,
  cover: false, //透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)',
  timeStamp: null,
  closeOnClickOverlay: false
};

// let instance;
// let instanceArr = [];
// let defaultOptionsMap = {};
// const currentOptions = {
//   ...defaultOptions
// };

const mountToast = opts => {
  opts = { ...defaultOptions, ...opts };
  opts.visible = true;
  opts.id = new Date().getTime();
  console.log(opts);

  const container = document.createElement('div');
  // container.className = `nut-toast`;
  const vm = createVNode(VueToast, opts);
  render(vm, container);
  document.body.appendChild(container);
  console.log(vm);
  return vm;
};

const errorMsg = msg => {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空');
    return;
  }
};

const Toast = {
  text(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, type: 'text', msg });
  },
  success(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, msg, type: 'success' });
  },
  fail(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, msg, type: 'fail' });
  },
  warn(msg, opts = {}) {
    errorMsg(msg);
    return mountToast({ ...opts, msg, type: 'warn' });
  }
};

export default Toast;

// export default {
//   install(app: App): void {
//     app.config.globalProperties.$toast = Toast;
//   }
// };
