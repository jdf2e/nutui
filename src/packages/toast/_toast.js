import Vue from 'vue';
import settings from './toast.vue';

let ToastConstructor = Vue.extend(settings);
let instance;
let instanceArr = [];
let defaultOptionsMap = {};
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
let currentOptions = {
  ...defaultOptions
};

function _showToast() {
  instance.vm = instance.$mount();
  document.body.appendChild(instance.$el);
  // Vue.nextTick(() => {
  instance.visible = true;
  // });
}

function _getInstance(obj) {
  let opt = {
    id: new Date().getTime(),
    ...currentOptions,
    ...defaultOptionsMap[obj.type],
    ...obj
  };

  //有相同id者共用一个实例，否则新增实例
  if (opt['id'] && instanceArr[opt['id']]) {
    instance = instanceArr[opt['id']];
    instance.hide(true);
    instance = Object.assign(instance, opt);
  } else {
    instance = new ToastConstructor({
      data: Object.assign(opt, obj)
    });
    opt['id'] && (instanceArr[opt['id']] = instance);
  }

  _showToast();
  return instance;
}

function errorMsg(msg) {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空');
    return;
  }
}

let Toast = {
  text(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'text' });
  },
  success(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'success' });
  },
  fail(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'fail' });
  },
  warn(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'warn' });
  },
  loading(msg, obj = {}) {
    obj = { ...obj, id: obj.id || 'loading', msg, type: 'loading' };
    obj.cover = typeof obj.cover !== 'undefined' ? obj.cover : true; //loading类型默认打开遮罩层
    obj.duration = obj.duration || 0; //loading类型默认不自动关闭
    return _getInstance(obj);
  },
  setDefaultOptions(type, options) {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = options;
    } else {
      Object.assign(currentOptions, type);
    }
  },
  resetDefaultOptions(type) {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = null;
    } else {
      currentOptions = { ...defaultOptions };
      defaultOptionsMap = {};
    }
  }
};

export default Toast;
