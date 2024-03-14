import Backtop from './index.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Backtop);

export type { BacktopProps } from './index.taro.vue';

export type BacktopInstance = ComponentPublicInstance & InstanceType<typeof Backtop>;

export { Backtop, Backtop as default };
