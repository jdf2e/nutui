import Dialog from './index.vue';
import { render, createVNode, h, VNode, CSSProperties } from 'vue';
export class DialogOptions {
  title?: string = '';
  content?: string | VNode = '';
  cancelText?: string = '';
  okText?: string = '';
  textAlign?: string = 'center';
  customClass?: string = '';
  overlayStyle?: CSSProperties = {};
  overlayClass?: string = '';
  popStyle?: CSSProperties = {};
  popClass?: string = '';
  teleport?: string | HTMLElement = 'body';
  id?: string | number = new Date().getTime();
  footerDirection?: string = 'horizontal'; //使用横纵方向 可选值 horizontal、vertical

  // function
  onUpdate?: Function = (value: boolean) => {};
  onOk?: Function = () => {};
  onCancel?: Function = () => {};
  onOpened?: Function = () => {};
  onClosed?: Function = () => {};
  beforeClose?: Function;

  visible?: boolean = true;
  noFooter?: boolean = false;
  noOkBtn?: boolean = false;
  noCancelBtn?: boolean = false;
  okBtnDisabled?: boolean = false;
  closeOnPopstate?: boolean = false;
  lockScroll?: boolean = false;
}

class DialogFunction {
  options: DialogOptions = new DialogOptions();
  instance: any;
  constructor(_options: DialogOptions) {
    let options = Object.assign(this.options, _options);
    let elWarp: HTMLElement = document.body;
    let teleport = options.teleport as string;
    if (teleport != 'body') {
      if (typeof teleport == 'string') {
        elWarp = document.querySelector(teleport) as HTMLElement;
      } else {
        elWarp = options.teleport as HTMLElement;
      }
    }
    const root = document.createElement('view');
    root.id = 'dialog-' + options.id;
    const Wrapper = {
      setup() {
        options.onUpdate = (val: boolean) => {
          if (val == false) {
            elWarp.removeChild(root);
          }
        };
        if (options?.onOpened) {
          options?.onOpened();
        }
        options.teleport = `#${root.id}`;
        return () => {
          return h(Dialog, options);
        };
      }
    };
    this.instance = createVNode(Wrapper);
    elWarp.appendChild(root);
    render(this.instance, root);
  }

  close = () => {
    // if (this.instance) {
    //   this.instance.component.ctx.close();
    // }
  };

  setDefaultOptions = (options: DialogOptions) => {
    // Object.assign(this.currentOptions, options);
  };

  resetDefaultOptions = () => {
    // Dialog.currentOptions = { ...Dialog.defaultOptions };
  };
}

const _Dialog = function (options: DialogOptions) {
  return new DialogFunction(options);
};
_Dialog.install = (app: any) => {
  app.use(Dialog);
  app.config.globalProperties.$dialog = _Dialog;
};
export { Dialog };
export default _Dialog;
