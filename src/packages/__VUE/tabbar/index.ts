import Tabbar from './tabbar.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Tabbar)

export type { TabbarProps } from './tabbar.vue'

export type TabbarInstance = ComponentPublicInstance & InstanceType<typeof Tabbar>

export { Tabbar, Tabbar as default }
