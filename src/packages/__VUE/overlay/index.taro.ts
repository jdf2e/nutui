import Overlay from './overlay.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Overlay)

export type { OverlayProps } from './overlay.taro.vue'

export type OverlayInstance = ComponentPublicInstance & InstanceType<typeof Overlay>

export { Overlay, Overlay as default }
