import Rate from './rate.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Rate);

export type { RateProps } from './rate.taro.vue';

export type RateInstance = ComponentPublicInstance & InstanceType<typeof Rate>;

export { Rate, Rate as default };
