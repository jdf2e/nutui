import Swipe from './swipe.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Swipe)

export type { SwipeProps } from './swipe.vue'

export type { SwipePosition } from './types'

export type SwipeInstance = ComponentPublicInstance & InstanceType<typeof Swipe>

export { Swipe, Swipe as default }
