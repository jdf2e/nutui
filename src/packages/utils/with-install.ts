import type { App, Component } from 'vue'

export type WithInstall<T> = T & {
  install(app: App): void
}

export const withInstall = <T extends Component>(comp: T) => {
  const _comp = comp as WithInstall<T>
  _comp.install = (vue: App) => {
    if (_comp.name) {
      vue.component(_comp.name, _comp)
    }
  }

  return _comp as WithInstall<T>
}
