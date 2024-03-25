import Navbar from './navbar.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Navbar)

export type { NavbarProps } from './navbar.vue'

export type NavbarInstance = ComponentPublicInstance & InstanceType<typeof Navbar>

export { Navbar, Navbar as default }
