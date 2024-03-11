import Layout from './layout.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Layout);

export type LayoutInstance = ComponentPublicInstance & InstanceType<typeof Layout>;

export { Layout, Layout as default };
