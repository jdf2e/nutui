import Animate from './animate.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Animate)

export type { AnimateProps } from './animate.taro.vue'

export type { AnimateType, AnimateAction } from './types'

export type AnimateInstance = ComponentPublicInstance & InstanceType<typeof Animate>

export { Animate, Animate as default }
