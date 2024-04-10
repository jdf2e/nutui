import Radio from './radio.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Radio)

export type { RadioProps } from './radio.vue'

export type { RadioShape, RadioButtonSize, RadioGroupDirection, RadioGroupTextPosition } from './types'

export type RadioInstance = ComponentPublicInstance & InstanceType<typeof Radio>

export { Radio, Radio as default }
