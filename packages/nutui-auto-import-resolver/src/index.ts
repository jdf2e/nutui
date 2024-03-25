import type { ComponentResolveResult, ComponentResolver } from 'unplugin-vue-components/types'

export interface NutUIResolverOptions {
  /**
   * import style css or sass with components
   *
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * NutUI or NutUI-Taro
   *
   * @default false
   */
  taro?: boolean

  /**
   * compatible with unplugin-auto-import
   *
   * @default false
   */
  autoImport?: boolean
}

const nutFunctions = ['showToast', 'showNotify', 'showDialog', 'showImagePreview']

function getNutResolved(name: string, options: NutUIResolverOptions): ComponentResolveResult {
  const { importStyle = true, taro = false, autoImport = false } = options

  const packageName = taro ? '@nutui/nutui-taro' : '@nutui/nutui'

  if (!importStyle) return { name, from: packageName }

  const componentName = autoImport ? name.slice(4) : name

  let style = `${packageName}/dist/packages/${componentName.toLowerCase()}/style/css`

  if (importStyle === 'sass') {
    style = `${packageName}/dist/packages/${componentName.toLowerCase()}/style`
  }

  return {
    name,
    from: packageName,
    sideEffects: style
  }
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
      const { autoImport = false } = options

      if (autoImport && nutFunctions.includes(name)) return getNutResolved(name, options)

      if (name.startsWith('Nut')) return getNutResolved(name.slice(3), options)
    }
  }
}
