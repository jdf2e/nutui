import Vue from "vue";
import overlayComponent from "./overlay.vue";

let modalStack = [];
let _zIndex = 2000;

const overlayManager = {
  overlay: null,

  lockCount: 0,

  get zIndex() {
    return ++_zIndex;
  },
  get topStack() {
    return modalStack[modalStack.length - 1];
  },

  updateOverlay() {
    const { overlay, clickHandle, topStack } = overlayManager;
    if (!overlay) {
      overlayManager.overlay = mount(overlayComponent, {
        nativeOn: {
          click: clickHandle,
        },
      });
    }

    if (topStack) {
      const { vm, config } = topStack;
      const el = vm.$el;
      el && el.parentNode && el.parentNode.nodeType !== 11
        ? el.parentNode.appendChild(overlay.$el)
        : document.body.appendChild(overlay.$el);

      Object.assign(overlayManager.overlay, config, {
        value: true,
      });
    } else {
      overlayManager.overlay.value = false;
    }
  },

  //打开遮罩层
  openModal(vm, config) {
    let { zIndex, duration, className, customStyle } = config;

    overlayManager.updateOverlay();

    modalStack.push({
      vm,
      config: {
        zIndex,
        duration,
        className,
        customStyle,
      },
    });

    overlayManager.updateOverlay();
  },

  clickHandle() {
    const { topStack } = overlayManager;
    
    //防止多次点击
    if (modalStack.length && topStack.vm.closeOnClickOverlay) { 
      topStack.vm.$emit("click-overlay");
      topStack.vm.close();
  
    }
  },

  closeOverlay(vm) {
    if (modalStack.length) {
      if (overlayManager.topStack.vm === vm) {
        modalStack.pop();
        overlayManager.updateOverlay();
      } else {
        modalStack = modalStack.filter((item) => item.vm !== vm);
      }
    }
  },
};

const overlayProps = {
  value: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 0.3,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  overlayClass: {
    type: String,
    default: "",
  },
  overlayStyle: {
    type: String,
    default: "",
  },
  zIndex: {
    type: Number
  },
};

function mount(Component, data) {
  const instance = new Vue({
    el: document.createElement("div"),
    props: Component.props,
    render(h) {
      return h(Component, {
        props: this.$props,
        ...data,
      });
    },
  });
  return instance;
}

function getProps(){
  
  if(!this)return {}
  let obj = {};
    Object.keys(overlayProps).forEach(res=>{
        obj[res] = this[res]
  }) 
  return obj
}

export  {overlayManager ,overlayProps, getProps};
