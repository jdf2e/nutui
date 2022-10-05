import ImagePreview from './index.vue';
import { render, createVNode, h, VNode } from 'vue';
import { ImageInterface } from './types';
export class ImagePreviewOptions {
  show = false;
  images: ImageInterface[] = [];
  initNo = 1;
  paginationVisible = false;
  paginationColor = '';
  teleport: string | HTMLElement = 'body';

  // function
  onClose?: Function = () => {};
}

class ImagePreviewFunction {
  options: ImagePreviewOptions = new ImagePreviewOptions();

  constructor(_options: ImagePreviewOptions) {
    const options = Object.assign(this.options, _options);
    let elWarp: HTMLElement = document.body;
    const teleport = options.teleport as string;
    if (teleport != 'body') {
      if (typeof teleport == 'string') {
        elWarp = document.querySelector(teleport) as HTMLElement;
      } else {
        elWarp = options.teleport as HTMLElement;
      }
    }
    const root = document.createElement('view');
    root.id = 'imagepreview-' + new Date().getTime();
    const Wrapper = {
      setup() {
        // options.onClose = () => {
        //     elWarp.removeChild(root);
        // };
        options.teleport = `#${root.id}`;
        return () => {
          return h(ImagePreview, options);
        };
      }
    };
    const instance: VNode = createVNode(Wrapper);
    elWarp.appendChild(root);
    render(instance, root);
  }
}

const _ImagePreview = (options: ImagePreviewOptions): ImagePreviewFunction => {
  return new ImagePreviewFunction(options);
};
_ImagePreview.install = (app: any) => {
  app.use(ImagePreview);
  app.config.globalProperties.$imagepreview = _ImagePreview;
};
export { ImagePreview };
export default _ImagePreview;
