import Navbar from './navbar.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Navbar)

export type { NavbarProps } from './navbar.taro.vue'

export type NavbarInstance = ComponentPublicInstance & InstanceType<typeof Navbar>

export { Navbar, Navbar as default }
