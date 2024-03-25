import Row from './row.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Row)

export type { RowProps } from './row.taro.vue'

export type RowInstance = ComponentPublicInstance & InstanceType<typeof Row>

export { Row, Row as default }
