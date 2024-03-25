import Invoice from './invoice.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(Invoice)

export type { InvoiceProps } from './invoice.vue'

export type { InvoiceDataItem } from './types'

export type InvoiceInstance = ComponentPublicInstance & InstanceType<typeof Invoice>

export { Invoice, Invoice as default }
