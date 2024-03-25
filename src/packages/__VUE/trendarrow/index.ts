import TrendArrow from './trend-arrow.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(TrendArrow);

export type { TrendArrowProps } from './trend-arrow.vue';

export type TrendArrowInstance = ComponentPublicInstance & InstanceType<typeof TrendArrow>;

export { TrendArrow, TrendArrow as default };
