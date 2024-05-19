import Searchbar from './searchbar.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Searchbar)

export type { SearchbarProps } from './searchbar.vue'

export type { SearchbarInputAlign, SearchbarShape } from './types'

export type SearchbarInstance = ComponentPublicInstance & InstanceType<typeof Searchbar>

export { Searchbar, Searchbar as default }
