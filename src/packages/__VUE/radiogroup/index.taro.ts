import RadioGroup from './radio-group.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(RadioGroup)

export type { RadioGroupProps } from './radio-group.taro.vue'

export type RadioGroupInstance = ComponentPublicInstance & InstanceType<typeof RadioGroup>

export { RadioGroup, RadioGroup as default }
