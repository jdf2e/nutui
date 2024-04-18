import Step from './step.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Step)

export type { StepProps } from './step.vue'

export type StepInstance = ComponentPublicInstance & InstanceType<typeof Step>

export { Step, Step as default }
