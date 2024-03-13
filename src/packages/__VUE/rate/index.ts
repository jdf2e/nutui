import Rate from './rate.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Rate);

export type { RateProps } from './rate.vue';

export type RateInstance = ComponentPublicInstance & InstanceType<typeof Rate>;

export { Rate, Rate as default };
