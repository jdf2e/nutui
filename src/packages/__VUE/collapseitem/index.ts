import CollapseItem from './collapse-item.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(CollapseItem)

export type { CollapseItemProps } from './collapse-item.vue'

export type CollapseItemInstance = ComponentPublicInstance & InstanceType<typeof CollapseItem>

export { CollapseItem, CollapseItem as default }
