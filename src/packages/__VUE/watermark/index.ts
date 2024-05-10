import Watermark from './watermark.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Watermark)

export type { WatermarkProps } from './watermark.vue'

export type { } from './types'

export type WatermarkInstance = ComponentPublicInstance & InstanceType<typeof Watermark>

export { Watermark, Watermark as default }
