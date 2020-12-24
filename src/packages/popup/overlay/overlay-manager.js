import { createApp, h } from 'vue';
import overlayComponent from './overlay.vue';

let modalStack = [];
let _zIndex = 2000;
let overlay;

function mountd(Component, data) {
  const instance = createApp(Component);

  instance
    .component(Component.name, {
      render() {
        return h(Component.name, ...data, this.$slots.default());
      }
    })
    .mount();
  console.log(instance);
  return instance;
}
const overlayManager = {
  lockCount: 0,

  get topStack() {
    return modalStack[modalStack.length - 1];
  },
  getZIndex(id) {
    if (!id) return ++_zIndex;
    const overlay = modalStack.find(res => {
      return res.config.id === id;
    });
    if (overlay) {
      return overlay.config.zIndex;
    } else {
      return ++_zIndex;
    }
  },

  updateOverlay() {
    const { clickHandle, topStack } = overlayManager;
    if (!overlay) {
      overlay = mountd(overlayComponent, {
        nativeOn: {
          click: clickHandle
        }
      });
    }

    console.log(topStack.vm);

    if (topStack) {
      const { vm, config } = topStack;
      const el = vm.ctx.$el;
      el && el.parentNode && el.parentNode.nodeType !== 11
        ? el.parentNode.appendChild(overlay.$el)
        : document.body.appendChild(overlay.$el);

      Object.assign(overlay, config, {
        value: true
      });
    } else {
      overlay.value = false;
    }
  },

  //打开遮罩层
  openModal(vm, config) {
    const { zIndex, duration, overlayClass, overlayStyle, id } = config;

    modalStack.push({
      vm,
      config: {
        id,
        zIndex,
        duration,
        overlayClass,
        overlayStyle
      }
    });

    overlayManager.updateOverlay();
  },

  clickHandle() {
    const { topStack } = overlayManager;

    //防止多次点击
    if (modalStack.length && topStack.vm.closeOnClickOverlay) {
      topStack.vm.$emit('click-overlay');
      topStack.vm.close();
    }
  },

  closeOverlay(vm) {
    if (modalStack.length) {
      if (overlayManager.topStack.vm === vm) {
        modalStack.pop();
        overlayManager.updateOverlay();
      } else {
        modalStack = modalStack.filter(item => item.vm !== vm);
      }
    }
  }
};

const overlayProps = {
  value: {
    type: Boolean,
    default: false
  },
  overlay: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 0.3
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  overlayClass: {
    type: String,
    default: ''
  },
  overlayStyle: {
    type: Object,
    default: function() {
      return null;
    }
  },
  zIndex: {
    type: Number
  }
};

export { overlayManager, overlayProps };
