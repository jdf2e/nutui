import Grid from './grid.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Grid)

export type { GridProps } from './grid.taro.vue'

export type { GridDirection } from './types'

export type GridInstance = ComponentPublicInstance & InstanceType<typeof Grid>

export { Grid, Grid as default }
