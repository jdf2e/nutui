import TabbarItem from './tabbar-item.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(TabbarItem)

export type { TabbarItemProps } from './tabbar-item.taro.vue'

export type TabbarItemInstance = ComponentPublicInstance & InstanceType<typeof TabbarItem>

export { TabbarItem, TabbarItem as default }
