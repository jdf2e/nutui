import SwipeGroup from './swipe-group.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(SwipeGroup)

export type { SwipeGroupProps } from './swipe-group.vue'

export type SwipeGroupInstance = ComponentPublicInstance & InstanceType<typeof SwipeGroup>

export { SwipeGroup, SwipeGroup as default }
