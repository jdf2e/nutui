import Backtop from './index.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Backtop);

export type { BacktopProps } from './index.vue';

export type BacktopInstance = ComponentPublicInstance & InstanceType<typeof Backtop>;

export { Backtop, Backtop as default };
