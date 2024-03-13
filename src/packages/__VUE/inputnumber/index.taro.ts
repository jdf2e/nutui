import InputNumber from './input-number.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(InputNumber);

export type { InputNumberProps } from './input-number.taro.vue';

export type InputNumberInstance = ComponentPublicInstance & InstanceType<typeof InputNumber>;

export { InputNumber, InputNumber as default };
