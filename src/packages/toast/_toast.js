import Vue from 'vue';
import settings from './toast.vue';

let ToastConstructor = Vue.extend(settings);
let instance;
let instanceArr = [];

function _showToast() {
  instance.vm = instance.$mount();
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
  });
}

function _getInstance(obj) {
  let opt = {
        id:new Date().getTime(),
        msg: "",
        visible: false,
        duration: 2000, //显示时间(毫秒)
        timer: null,
        center: true,
        type: "",
        customClass: "",
        bottom: 30,
        size:"base",
        icon:null,
        textAlignCenter: true,
        loadingRotate:true,
        bgColor: "rgba(36, 36, 36, 0.8)",
        onClose:null,
        textTimer: null,
        cover:false,  //透明遮罩层
        timeStamp:null
      };
  
  opt = Object.assign(opt, obj);

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

let Toast = {
  text(msg, obj) {
    if (!msg) {
      console.warn('[NutUI Toast]: msg不能为空');
      return;
    }
    obj = obj || {};
    obj.msg = msg;
    return _getInstance(obj);
  },
  success(msg, obj) {
    if (!msg) {
      console.warn('[NutUI Toast]: msg不能为空');
      return;
    }
    obj = obj || {};
    obj.msg = msg;
    obj.type = 'success';
    return _getInstance(obj);
  },
  fail(msg, obj) {
    if (!msg) {
      console.warn('[NutUI Toast]: msg不能为空');
      return;
    }
    obj = obj || {};
    obj.msg = msg;
    obj.type = 'fail';
    return _getInstance(obj);
  },
  warn(msg, obj) {
    if (!msg) {
      console.warn('[NutUI Toast]: msg不能为空');
      return;
    }
    obj = obj || {};
    obj.msg = msg;
    obj.type = 'warn';
    return _getInstance(obj);
  },
  loading(msg,obj) {
    obj = obj || {};
    obj.id = obj.id || 'loading';
    obj.msg = msg;
    obj.type = 'loading';
    obj.cover = typeof(obj.cover)!=='undefined'?obj.cover:true; //loading类型默认打开遮罩层
    obj.duration = obj.duration || 0;
    return _getInstance(obj);
  }
};

export default Toast;