import { computed, getCurrentInstance } from 'vue';
import type { ComputedRef } from 'vue';

interface ProxyProps {
  [key: string]: any;
}

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance();
  return computed(() => (vm?.proxy?.$props as ProxyProps)?.[name]);
};
