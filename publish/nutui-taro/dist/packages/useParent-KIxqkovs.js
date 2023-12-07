import { inject, getCurrentInstance, onUnmounted } from "vue";
const useParent = (key) => {
  const parent = inject(key, null);
  if (parent) {
    const instance = getCurrentInstance();
    const { link, unlink } = parent;
    link(instance);
    onUnmounted(() => {
      unlink(instance);
    });
  }
  return { parent };
};
export {
  useParent as u
};
