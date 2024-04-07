import Skeleton from './skeleton.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Skeleton)

export type { SkeletonProps } from './skeleton.taro.vue'

export type SkeletonInstance = ComponentPublicInstance & InstanceType<typeof Skeleton>

export { Skeleton, Skeleton as default }
