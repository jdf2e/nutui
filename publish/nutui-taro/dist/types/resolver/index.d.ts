import type { ComponentResolver } from 'unplugin-vue-components/types';
export interface NutUIResolverOptions {
    taro?: boolean;
    autoImport?: boolean;
}
export default function NutUIResolver(options?: NutUIResolverOptions): ComponentResolver;
