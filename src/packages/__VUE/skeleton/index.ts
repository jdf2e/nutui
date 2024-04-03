import Skeleton from './skeleton.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Skeleton)

export type { SkeletonProps } from './skeleton.vue'

export type SkeletonInstance = ComponentPublicInstance & InstanceType<typeof Skeleton>

export { Skeleton, Skeleton as default }
