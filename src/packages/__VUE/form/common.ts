import { computed } from 'vue';
import { useParent } from '@/packages/utils';
import { FORM_KEY } from './types';
import type { ComputedRef, Ref } from 'vue';

export const useFormDisabled = (disabled: Ref<boolean>): ComputedRef<boolean> => {
  const { parent } = useParent(FORM_KEY);
  return computed(() => disabled.value || parent?.props?.disabled || false);
};
