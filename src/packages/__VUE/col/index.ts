import Col from './col.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Col)

export type { ColProps } from './col.vue'

export type ColInstance = ComponentPublicInstance & InstanceType<typeof Col>

export { Col, Col as default }
