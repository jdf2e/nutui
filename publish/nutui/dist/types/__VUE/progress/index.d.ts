import Progress from './progress.vue';
import type { ComponentPublicInstance } from 'vue';
export type { ProgressProps } from './progress.vue';
export type { ProgressSize, ProgressStatus } from './types';
export type ProgressInstance = ComponentPublicInstance & InstanceType<typeof Progress>;
export { Progress, Progress as default };
