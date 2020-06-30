import Vue from 'vue';
import settings from './notify.vue';
// 扩展为类
let NotifyConstructor = Vue.extend(settings);
let timer, instance, instanceArr = [];
let defaultOptionsMap = {};
const id = '0';
// 默认传入值
const defaultOptions = {
  type: 'danger',
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
};
// 当前传入值
let currentOptions = {
  ...defaultOptions
};
// 展示，挂载
function _showNotify() {
  instance.vm = instance.$mount();
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.showPopup = true;
  });
}
function _getInstance(obj) {
  // 默认传递的值
  let opt = {
    id
  };
  Object.assign(opt, currentOptions, defaultOptionsMap[obj.type], obj);
  console.log(opt, obj, 'obj');
  //有相同id者共用一个实例，否则新增实例
  if (opt['id'] && instanceArr[opt['id']]) {
    instance = instanceArr[opt['id']];
    instance.hide(true);
    instance = Object.assign(instance, opt);
  } else {
    instance = new NotifyConstructor({
      propsData: opt
    });

    instance = Object.assign(instance, obj);
    opt['id'] && (instanceArr[opt['id']] = instance);
  }

  _showNotify();
  return instance;
}

function errorMsg(msg) {
  if (!msg) {
    console.warn('[NutUI Toast]: msg不能为空');
    return;
  }
}

let Notify = {
  text(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg });
  },
  primary(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'primary' });
  },
  success(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'success' });
  },
  danger(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'danger' });
  },
  warn(msg, obj = {}) {
    errorMsg(msg);
    return _getInstance({ ...obj, msg, type: 'warning' });
  },

  // 全局设置默认内容
  setDefaultOptions(type, options) {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = options;
    } else {
      Object.assign(currentOptions, type);
    }
  },
  // 重置默认内容
  resetDefaultOptions(type) {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = null;
    } else {
      currentOptions = { ...defaultOptions };
      defaultOptionsMap = {};
    }
  }
};




export default Notify;
