import Indicator from './indicator.vue';
import type { ComponentPublicInstance } from 'vue';
export type { IndicatorProps } from './indicator.vue';
export type { IndicatorAlign } from './types';
export type IndicatorInstance = ComponentPublicInstance & InstanceType<typeof Indicator>;
export { Indicator, Indicator as default };
