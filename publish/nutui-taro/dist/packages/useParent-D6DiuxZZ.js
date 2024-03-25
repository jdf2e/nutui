import { inject, getCurrentInstance, onUnmounted, computed } from "vue";
const useParent = (key) => {
  const parent = inject(key, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { link, unlink, internalChildren } = parent;
    link(instance);
    onUnmounted(() => {
      unlink(instance);
    });
    const index = computed(() => internalChildren.indexOf(instance));
    return { parent, index };
  }
  return {
    parent,
    index: computed(() => -1)
  };
};
export {
  useParent as u
};
