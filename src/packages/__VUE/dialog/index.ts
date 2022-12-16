import Dialog from './index.vue';
import { h, VNode, CSSProperties } from 'vue';
import Popup from '../popup/index.vue';
import Icon from '../icon/index.vue';
import Button from '../button/index.vue';
import OverLay from '../overlay/index.vue';
import { CreateComponent } from '@/packages/utils/create';
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
    const { unmount } = CreateComponent(options, {
      name: 'dialog',
      components: [Popup, Icon, Button, OverLay],
      wrapper: (elWarp: any, root: any) => {
        return {
          setup() {
            options.onUpdate = (val: boolean) => {
              if (val == false) {
                unmount();
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
      }
    });
  }
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
