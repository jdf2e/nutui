import TrendArrow from './trend-arrow.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(TrendArrow)

export type { TrendArrowProps } from './trend-arrow.taro.vue'

export type TrendArrowInstance = ComponentPublicInstance & InstanceType<typeof TrendArrow>

export { TrendArrow, TrendArrow as default }
