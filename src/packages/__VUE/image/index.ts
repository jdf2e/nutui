import Image from './image.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Image)

export type { ImageProps } from './image.vue'

export type { ImageFit, ImagePosition } from './types'

export type ImageInstance = ComponentPublicInstance & InstanceType<typeof Image>

export { Image, Image as default }
