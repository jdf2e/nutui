import Step from './step.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Step)

export type { StepProps } from './step.taro.vue'

export type StepInstance = ComponentPublicInstance & InstanceType<typeof Step>

export { Step, Step as default }
