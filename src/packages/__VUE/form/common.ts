import { computed } from 'vue'
import { useParent } from '@/packages/utils'
import type { ComputedRef, Ref } from 'vue'

export const FORM_KEY = Symbol('nut-form')
export const FORM_DISABLED_KEY = Symbol('nut-form-disabled')

export const useFormDisabled = (disabled: Ref<boolean>): ComputedRef<boolean> => {
  const { parent } = useParent(FORM_DISABLED_KEY)
  return computed(() => disabled.value || parent?.props?.disabled || false)
}
