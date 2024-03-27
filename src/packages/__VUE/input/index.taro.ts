import Input from './input.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Input)

export type { InputProps } from './input.taro.vue'

export type { InputType, InputAlign, InputConfirmType, InputFormatTrigger } from './types'

export type InputInstance = ComponentPublicInstance & InstanceType<typeof Input>

export { Input, Input as default }
