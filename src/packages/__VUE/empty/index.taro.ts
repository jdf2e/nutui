import Empty from './empty.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Empty);

export type { emptyProps } from './empty.taro.vue';
export type { EmptyImage } from './types';

export type EmptyInstance = ComponentPublicInstance & InstanceType<typeof Empty>;

export { Empty, Empty as default };
