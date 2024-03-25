import SwipeGroup from './swipe-group.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(SwipeGroup)

export type { SwipeGroupProps } from './swipe-group.taro.vue'

export type SwipeGroupInstance = ComponentPublicInstance & InstanceType<typeof SwipeGroup>

export { SwipeGroup, SwipeGroup as default }
