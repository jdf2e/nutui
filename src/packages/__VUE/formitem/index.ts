import FormItem from './form-item.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(FormItem);

export type { FormItemProps } from './form-item.vue';

export type FormItemInstance = ComponentPublicInstance & InstanceType<typeof FormItem>;

export { FormItem, FormItem as default };
