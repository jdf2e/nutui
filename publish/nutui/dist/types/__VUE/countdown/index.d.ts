import Countdown from './countdown.vue';
import type { ComponentPublicInstance } from 'vue';
export type { CountdownProps } from './countdown.vue';
export type CountdownInstance = ComponentPublicInstance & InstanceType<typeof Countdown>;
export { Countdown, Countdown as default };
