import Tag from './tag.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Tag)

export type { TagProps } from './tag.taro.vue'

export type { TagType } from './types'

export type TagInstance = ComponentPublicInstance & InstanceType<typeof Tag>

export { Tag, Tag as default }
