import Invoice from './invoice.taro.vue';
import type { ComponentPublicInstance } from 'vue';
export type { InvoiceProps } from './invoice.taro.vue';
export type { InvoiceDataItem } from './types';
export type InvoiceInstance = ComponentPublicInstance & InstanceType<typeof Invoice>;
export { Invoice, Invoice as default };
