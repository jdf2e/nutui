import ImagePreview from './index.vue'
import { Component, h, nextTick } from 'vue'
import { ImageInterface } from './types'
import { CreateComponent } from '@/packages/utils/create'
import { Interceptor } from '@/packages/utils/util'
import NutPopup from '../popup/index.vue'
import NutVideo from '../video/index.vue'
import NutSwiper from '../swiper/index.vue'
import NutSwiperItem from '../swiperitem/index.vue'
import NutOverlay from '../overlay/index.vue'

export class ImagePreviewOptions {
  show = false
  images: ImageInterface[] = []
  videos?: [] = []
  contentClose?: boolean = true
  initNo?: number = 0
  paginationVisible?: boolean = false
  paginationColor?: string = ''
  autoplay?: number | string = 0
  isWrapTeleport?: boolean = false
  showIndex?: boolean = true
  closeable?: boolean = false
  closeIcon?: string = 'circle-close'
  closeIconPosition?: string = 'top-right'
  beforeClose?: Interceptor
  maxZoom?: number = 3
  minZoom?: number = 1 / 3
  isLoop?: boolean = true
  onClose?(): void
  onChange?(index: number): void
  onLongPress?(image: ImageInterface): void
  teleport?: string | HTMLElement = 'body'
}

class ImagePreviewFunction {
  options: ImagePreviewOptions = new ImagePreviewOptions()

  constructor(_options: ImagePreviewOptions) {
    const options = Object.assign(this.options, _options)
    const { unmount } = CreateComponent(options, {
      name: 'image-preview',
      components: [NutPopup, NutVideo, NutSwiper, NutSwiperItem, NutOverlay],
      wrapper: () => {
        return {
          setup() {
            return () => {
              options.onClose = () => {
                options.show = false
                nextTick(() => {
                  unmount()
                })
              }
              return h(ImagePreview as Component, options)
            }
          }
        }
      }
    })
  }
}

const showImagePreview = (options: ImagePreviewOptions): ImagePreviewFunction => new ImagePreviewFunction(options)
showImagePreview.install = (app: any) => {
  app.use(ImagePreview)
}

export { showImagePreview }
export default ImagePreview
