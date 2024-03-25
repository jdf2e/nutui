import Empty from './empty.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Empty)

export type { EmptyProps } from './empty.vue'

export type { EmptyImage } from './types'

export type EmptyInstance = ComponentPublicInstance & InstanceType<typeof Empty>

export { Empty, Empty as default }
