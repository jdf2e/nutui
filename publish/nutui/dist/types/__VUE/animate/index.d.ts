import Animate from './animate.vue';
import type { ComponentPublicInstance } from 'vue';
export type { AnimateProps } from './animate.vue';
export type { AnimateType, AnimateAction } from './types';
export type AnimateInstance = ComponentPublicInstance & InstanceType<typeof Animate>;
export { Animate, Animate as default };
