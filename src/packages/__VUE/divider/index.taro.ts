import Divider from './divider.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Divider);

export type { DividerProps } from './divider.taro.vue';

export type { DividerPosition, DividerDirection } from './types';

export type DividerInstance = ComponentPublicInstance & InstanceType<typeof Divider>;

export { Divider, Divider as default };
