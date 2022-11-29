import ImagePreview from './index.vue';
import { h } from 'vue';
import { ImageInterface } from './types';
import { CreateComponent } from '@/packages/utils/create';
import { Interceptor } from '@/packages/utils/util';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
import Icon from '../icon/index.vue';
import OverLay from '../overlay/index.vue';

export class ImagePreviewOptions {
  show: Boolean = false;
  images: ImageInterface[] = [];
  videos?: [] = [];
  contentClose?: Boolean = true;
  initNo?: Number = 0;
  paginationVisible?: Boolean = false;
  paginationColor?: String = '';
  autoplay?: Number | String = 0;
  isWrapTeleport?: Boolean = false;
  showIndex?: boolean = true;
  closeable?: boolean = false;
  closeIcon?: string = 'circle-close';
  closeIconPosition?: String = 'top-right';
  beforeClose?: Interceptor;
  maxZoom?: number = 3;
  minZoom?: number = 1 / 3;
  isLoop?: boolean = true;
  onClose?: Function = () => {};
  onChange?(index: number): void;
  teleport?: string | HTMLElement = 'body';
}

class ImagePreviewFunction {
  options: ImagePreviewOptions = new ImagePreviewOptions();

  constructor(_options: ImagePreviewOptions) {
    const options = Object.assign(this.options, _options);
    const { instance, unmount } = CreateComponent(options, {
      name: 'imagepreview',
      components: [Popup, Video, Swiper, SwiperItem, Icon, OverLay],
      wrapper: () => {
        return {
          setup() {
            return () => {
              options.onClose = () => {
                unmount();
              };
              return h(ImagePreview, options);
            };
          }
        };
      }
    });
  }
}

const _ImagePreview = (options: ImagePreviewOptions): ImagePreviewFunction => new ImagePreviewFunction(options);
_ImagePreview.install = (app: any) => {
  app.use(ImagePreview);
  app.config.globalProperties.$imagepreview = _ImagePreview;
};

export { ImagePreview };
export default _ImagePreview;
