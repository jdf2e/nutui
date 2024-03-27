import Switch from './switch.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Switch)

export type { SwitchProps } from './switch.vue'

export type SwitchInstance = ComponentPublicInstance & InstanceType<typeof Switch>

export { Switch, Switch as default }
