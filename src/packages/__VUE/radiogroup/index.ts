import RadioGroup from './radio-group.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(RadioGroup)

export type { RadioGroupProps } from './radio-group.vue'

export type RadioGroupInstance = ComponentPublicInstance & InstanceType<typeof RadioGroup>

export { RadioGroup, RadioGroup as default }
