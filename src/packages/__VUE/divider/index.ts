import Divider from './divider.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Divider);

export type { DividerProps } from './divider.vue';

export type { DividerPosition, DividerDirection } from './types';

export type DividerInstance = ComponentPublicInstance & InstanceType<typeof Divider>;

export { Divider, Divider as default };
