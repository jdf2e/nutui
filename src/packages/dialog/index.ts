import dialogInstance from './index.vue';
import { render, createVNode, ref } from 'vue';
export const show = ref(false);
export class DialogOptions {
  title: string = '';
  content: string = '';
  cancelText: string = '取消';
  okText: string = '确定';
  textAlign: string = 'center';
  teleport: String | Element = 'body';

  // function
  private onUpdate: Function = (value: boolean) => {
    show.value = value;
  };
  onOk: Function = () => {};
  onCancel: Function = () => {};
  onClose: Function = () => {};
  onClosed: Function = () => {};

  noFooter: boolean = false;
  noOkBtn: boolean = false;
  noCancelBtn: boolean = false;
  okBtnDisabled: boolean = false;
  closeOnPopstate: boolean = false;
  lockScroll: boolean = false;
}

class Dialog {
  options: DialogOptions = new DialogOptions();

  constructor(_options: DialogOptions) {
    Object.assign(this.options, _options);
    show.value = true;
    const instance: any = createVNode(dialogInstance, this.options as any);
    render(instance, document.body);
  }

  close = () => {
    // if (instance) {
    //   instance.component.ctx.close();
    // }
  };

  setDefaultOptions = (options: DialogOptions) => {
    // Object.assign(this.currentOptions, options);
  };

  resetDefaultOptions = () => {
    // Dialog.currentOptions = { ...Dialog.defaultOptions };
  };
}

const _Dialog = function(options: DialogOptions) {
  return new Dialog(options);
};
_Dialog.install = (app: any) => {
  app.use(dialogInstance);
  app.config.globalProperties.$dialog = _Dialog;
};
export default _Dialog;
