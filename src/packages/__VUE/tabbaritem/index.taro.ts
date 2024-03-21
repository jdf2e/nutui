import Tabbar from './tabbar-item.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Tabbar);

export type { tabbarItemProps } from './tabbar-item.taro.vue';

export type TabbarInstance = ComponentPublicInstance & InstanceType<typeof Tabbar>;

export { Tabbar, Tabbar as default };
