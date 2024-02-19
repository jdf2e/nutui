import Form from './form.taro.vue';
import type { ComponentPublicInstance } from 'vue';
export type { FormProps } from './form.taro.vue';
export type { FormErrorMessage, FormLabelPosition, FormStarPosition } from './types';
export type FormInstance = ComponentPublicInstance & InstanceType<typeof Form>;
export { Form, Form as default };
