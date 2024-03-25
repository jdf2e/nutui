import Col from './col.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Col)

export type { ColProps } from './col.taro.vue'

export type ColInstance = ComponentPublicInstance & InstanceType<typeof Col>

export { Col, Col as default }
