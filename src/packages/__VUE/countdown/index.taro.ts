import Countdown from './countdown.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Countdown)

export type { CountdownProps } from './countdown.taro.vue'

export type CountdownInstance = ComponentPublicInstance & InstanceType<typeof Countdown>

export { Countdown, Countdown as default }
