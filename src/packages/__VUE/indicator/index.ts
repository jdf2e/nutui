import Indicator from './indicator.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Indicator)

export type { IndicatorProps } from './indicator.vue'

export type { IndicatorAlign } from './types'

export type IndicatorInstance = ComponentPublicInstance & InstanceType<typeof Indicator>

export { Indicator, Indicator as default }
