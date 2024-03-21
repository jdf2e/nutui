import Tabbar from './tabbar-item.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Tabbar);

export type { tabbarItemProps } from './tabbar-item.vue';

export type TabbarInstance = ComponentPublicInstance & InstanceType<typeof Tabbar>;

export { Tabbar, Tabbar as default };
