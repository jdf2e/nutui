import Dialog from './index.vue';
import { h, VNode, CSSProperties, Component, nextTick } from 'vue';
import Popup from '../popup/index.vue';
import Button from '../button/index.vue';
import Overlay from '../overlay/index.vue';
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
  onUpdate?: (value: boolean) => any | void;
  onOk?: () => void;
  onCancel?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  beforeClose?: (action: string) => any;

  visible?: boolean = true;
  noFooter?: boolean = false;
  noOkBtn?: boolean = false;
  noCancelBtn?: boolean = false;
  okBtnDisabled?: boolean = false;
  closeOnPopstate?: boolean = false;
  lockScroll?: boolean = true;
}

class DialogFunction {
  options: DialogOptions = new DialogOptions();
  instance: any;
  constructor(_options: DialogOptions) {
    const options = Object.assign(this.options, _options);
    const { unmount } = CreateComponent(options, {
      name: 'dialog',
      components: [Popup, Button, Overlay],
      wrapper: (elWrap: any, root: any) => {
        return {
          setup() {
            options.onUpdate = (val: boolean) => {
              if (val === false) {
                nextTick(() => {
                  unmount();
                });
              }
            };
            if (options?.onOpened) {
              options?.onOpened();
            }
            options.teleport = `#${root.id}`;
            return () => {
              return h(Dialog as Component, options);
            };
          }
        };
      }
    });
  }
}

const showDialog = function (options: DialogOptions) {
  return new DialogFunction(options);
};
showDialog.install = (app: any) => {
  app.use(Dialog);
};
export { showDialog };
export default Dialog;
