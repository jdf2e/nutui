import Badge from './badge.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Badge)

export type { BadgeProps } from './badge.vue'

export type BadgeInstance = ComponentPublicInstance & InstanceType<typeof Badge>

export { Badge, Badge as default }
