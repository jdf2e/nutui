import Textarea from './textarea.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Textarea)

export type { TextareaProps } from './textarea.vue'

export type TextareaInstance = ComponentPublicInstance & InstanceType<typeof Textarea>

export { Textarea, Textarea as default }
