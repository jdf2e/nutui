import CircleProgress from './circle-progress.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(CircleProgress);

export type { CircleProgressProps } from './circle-progress.vue';

export type { CircleProgressStrokeLinecap } from './types';

export type CircleProgressInstance = ComponentPublicInstance & InstanceType<typeof CircleProgress>;

export { CircleProgress, CircleProgress as default };
