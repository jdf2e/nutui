import ImagePreview from './index.vue';
import { Component, h, nextTick } from 'vue';
import { ImageInterface } from './types';
import { CreateComponent } from '@/packages/utils/create';
import { Interceptor } from '@/packages/utils/util';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
import Overlay from '../overlay/index.vue';

export class ImagePreviewOptions {
  show = false;
  images: ImageInterface[] = [];
  videos?: [] = [];
  contentClose?: boolean = true;
  initNo?: number = 0;
  paginationVisible?: boolean = false;
  paginationColor?: string = '';
  autoplay?: number | string = 0;
  isWrapTeleport?: boolean = false;
  showIndex?: boolean = true;
  closeable?: boolean = false;
  closeIcon?: string = 'circle-close';
  closeIconPosition?: string = 'top-right';
  beforeClose?: Interceptor;
  maxZoom?: number = 3;
  minZoom?: number = 1 / 3;
  isLoop?: boolean = true;
  onClose?(): void;
  onChange?(index: number): void;
  teleport?: string | HTMLElement = 'body';
}

class ImagePreviewFunction {
  options: ImagePreviewOptions = new ImagePreviewOptions();

  constructor(_options: ImagePreviewOptions) {
    const options = Object.assign(this.options, _options);
    const { unmount } = CreateComponent(options, {
      name: 'image-preview',
      components: [Popup, Video, Swiper, SwiperItem, Overlay],
      wrapper: () => {
        return {
          setup() {
            return () => {
              options.onClose = () => {
                options.show = false;
                nextTick(() => {
                  unmount();
                });
              };
              return h(ImagePreview as Component, options);
            };
          }
        };
      }
    });
  }
}

const showImagePreview = (options: ImagePreviewOptions): ImagePreviewFunction => new ImagePreviewFunction(options);
showImagePreview.install = (app: any) => {
  app.use(ImagePreview);
};

export { showImagePreview };
export default ImagePreview;
