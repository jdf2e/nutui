import Grid from './grid.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Grid)

export type { GridProps } from './grid.vue'

export type { GridDirection } from './types'

export type GridInstance = ComponentPublicInstance & InstanceType<typeof Grid>

export { Grid, Grid as default }
