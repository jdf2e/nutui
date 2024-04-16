import CellGroup from './cell-group.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(CellGroup)

export type { CellGroupProps } from './cell-group.taro.vue'

export type CellGroupInstance = ComponentPublicInstance & InstanceType<typeof CellGroup>

export { CellGroup, CellGroup as default }
