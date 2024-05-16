import Badge from './badge.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Badge)

export type { BadgeProps } from './badge.taro.vue'

export type BadgeInstance = ComponentPublicInstance & InstanceType<typeof Badge>

export { Badge, Badge as default }
