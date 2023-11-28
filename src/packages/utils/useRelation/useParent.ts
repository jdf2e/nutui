import { getCurrentInstance, inject, onUnmounted } from 'vue';

export const useParent = (key: symbol) => {
  const parent = inject<any>(key, null);
  if (parent) {
    const instance = getCurrentInstance()!;
    const { link, unlink } = parent;
    link(instance);
    onUnmounted(() => {
      unlink(instance);
    });
  }
  return { parent };
};
