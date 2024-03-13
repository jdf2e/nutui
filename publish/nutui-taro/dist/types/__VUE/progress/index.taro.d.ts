import Progress from './progress.taro.vue';
import type { ComponentPublicInstance } from 'vue';
export type { ProgressProps } from './progress.taro.vue';
export type { ProgressSize, ProgressStatus } from './types';
export type ProgressInstance = ComponentPublicInstance & InstanceType<typeof Progress>;
export { Progress, Progress as default };
