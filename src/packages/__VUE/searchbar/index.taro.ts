import Searchbar from './searchbar.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Searchbar)

export type { SearchbarProps } from './searchbar.taro.vue'

export type { SearchbarInputAlign, SearchbarConfirmType, SearchbarShape } from './types'

export type SearchbarInstance = ComponentPublicInstance & InstanceType<typeof Searchbar>

export { Searchbar, Searchbar as default }
