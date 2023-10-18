import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types';

export interface NutUIResolverOptions {
  /**
   * NutUI or NutUI-Taro
   *
   * @default false
   */
  taro?: boolean;

  /**
   * compatible with unplugin-auto-import
   *
   * @default false
   */
  autoImport?: boolean;
}

const nutFunctions = ['showToast', 'showNotify', 'showDialog', 'showImagePreview'];

function getNutResolved(name: string, options: NutUIResolverOptions): ComponentResolveResult {
  const { taro = false, autoImport = false } = options;

  const packageName = taro ? '@nutui/nutui-taro' : '@nutui/nutui';

  const componentName = autoImport ? name.slice(4) : name;

  const style = `${packageName}/dist/packages/${componentName.toLowerCase()}/style`;

  return {
    name,
    from: packageName,
    sideEffects: style
  };
}

/**
 * Resolver for NutUI 4.0+
 *
 * @link https://github.com/jdf2e/nutui
 */
export default function NutUIResolver(options: NutUIResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name) => {
      const { autoImport = false } = options;

      if (autoImport && nutFunctions.includes(name)) return getNutResolved(name, options);

      if (name.startsWith('Nut')) return getNutResolved(name.slice(3), options);
    }
  };
}
