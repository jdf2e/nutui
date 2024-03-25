import InputNumber from './input-number.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(InputNumber)

export type { InputNumberProps } from './input-number.vue'

export type InputNumberInstance = ComponentPublicInstance & InstanceType<typeof InputNumber>

export { InputNumber, InputNumber as default }
