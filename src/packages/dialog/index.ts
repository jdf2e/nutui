import dialog from './index.vue';
import { defineComponent, createVNode, render, toRef, watch } from 'vue';

const confirmConstructor = defineComponent(dialog);

let instance: any;
const Dialog = (options: any) => {
  options = options ? options : {};

  options.id = options.id || 'nut-dialog-default-id';
  options.visible = true;
  if (options.type === 'image' && typeof options.closeBtn === 'undefined') {
    options.closeBtn = true;
  }

  // 生成组件实例
  instance = createVNode(confirmConstructor, options);

  // 渲染挂载组件
  const container = document.createElement('div');
  render(instance, container);
  const dialogDom = document.querySelector('#' + options.id);
  if (options.id && dialogDom && dialogDom.parentNode) {
    dialogDom.parentNode.replaceChild(instance.el, dialogDom);
  } else {
    document.body.appendChild(instance.el);
  }

  // 初始化组件参数
  const props = instance.component.props;
  Object.keys(options).forEach(key => {
    props[key] = options[key];
  });
};
Dialog.close = function() {
  if (instance) {
    instance.component.ctx.close();
  }
};

Dialog.install = function(app: any) {
  app.use(dialog);
  app.config.globalProperties.$dialog = Dialog;
};

Dialog.Component = dialog;
export default Dialog;
