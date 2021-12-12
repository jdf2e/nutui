import { ref, inject, computed, onUnmounted, getCurrentInstance } from 'vue';
import type { InjectionKey, ComponentInternalInstance } from 'vue';

type ParentProvide<T> = T & {
  add(child: ComponentInternalInstance): void;
  remove(child: ComponentInternalInstance): void;
  internalChildren: ComponentInternalInstance[];
};

export function useInject<T>(key: InjectionKey<ParentProvide<T>>) {
  const parent = inject(key, null);

  if (parent) {
    const instance = getCurrentInstance()!;
    const { add, remove, internalChildren } = parent;

    add(instance);
    onUnmounted(() => remove(instance));

    const index = computed(() => internalChildren.indexOf(instance));

    return {
      parent,
      index
    };
  }

  return {
    parent: null,
    index: ref(-1)
  };
}
