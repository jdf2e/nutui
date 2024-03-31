import { defineComponent } from 'vue'
import type { App } from 'vue'
const camelize = (s: string) => s.replace(/-./g, x => x[1].toUpperCase())

export function createComponent(name: string) {
  // TODO: It will be deprecated someday.
  const componentName = 'nut-' + name
  return {
    componentName,
    create: function (_component: any) {
      _component.name = 'Nut' + camelize('-' + name)
      _component.install = (vue: App) => {
        vue.component(_component.name as string, _component as any)
      }
      return defineComponent(_component)
    } as typeof defineComponent
  }
}
