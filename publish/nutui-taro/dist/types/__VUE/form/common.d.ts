import type { ComputedRef, Ref } from 'vue';
export declare const FORM_KEY: unique symbol;
export declare const FORM_DISABLED_KEY: unique symbol;
export declare const FORM_TIP_KEY: unique symbol;
export declare const useFormDisabled: (disabled: Ref<boolean>) => ComputedRef<boolean>;
