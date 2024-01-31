import { computed, getCurrentInstance } from 'vue';
import type { ComponentPublicInstance, ComputedRef } from 'vue';

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance();
  if (!vm) {
    throw new Error('useProp must be called within a setup function');
  }
  const proxy = vm.proxy as ComponentPublicInstance;
  const props = proxy?.$props as Record<string, T>;
  return computed(() => props?.[name]);
};
