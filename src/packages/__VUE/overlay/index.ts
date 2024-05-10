import Overlay from './overlay.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Overlay)

export type { OverlayProps } from './overlay.vue'

export type OverlayInstance = ComponentPublicInstance & InstanceType<typeof Overlay>

export { Overlay, Overlay as default }
