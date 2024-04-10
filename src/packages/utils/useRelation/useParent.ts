import { getCurrentInstance, computed, inject, onUnmounted } from 'vue'

export const useParent = (key: symbol) => {
  const parent = inject<any>(key, null)

  if (parent) {
    const instance = getCurrentInstance()!
    const { link, unlink, internalChildren } = parent

    link(instance)
    onUnmounted(() => {
      unlink(instance)
    })
    const index = computed<number>(() => internalChildren.indexOf(instance))

    return { parent, index }
  }

  return {
    parent,
    index: computed(() => -1)
  }
}
