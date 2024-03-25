import Button from './button.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Button)

export type { ButtonProps } from './button.vue'

export type { ButtonType, ButtonSize, ButtonShape, ButtonFormType } from './types'

export type ButtonInstance = ComponentPublicInstance & InstanceType<typeof Button>

export { Button, Button as default }
