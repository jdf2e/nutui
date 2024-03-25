import Tabbar from './tabbar.taro.vue';
import type { ComponentPublicInstance } from 'vue';
import { withInstall } from '@/packages/utils';

withInstall(Tabbar);

export type { TabbarProps } from './tabbar.taro.vue';

export type TabbarInstance = ComponentPublicInstance & InstanceType<typeof Tabbar>;

export { Tabbar, Tabbar as default };
