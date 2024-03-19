import type { WithInstall } from '../../utils';
import type { InvoiceDataItem } from './types';
export type InvoiceProps = Partial<{
    data: InvoiceDataItem[];
    formValue: any;
    submit: boolean;
}>;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    data: InvoiceDataItem[];
    formValue: any;
    submit: boolean;
}>>, {
    data: () => never[];
    formValue: () => void;
    submit: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    scrollBottom: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    data: InvoiceDataItem[];
    formValue: any;
    submit: boolean;
}>>, {
    data: () => never[];
    formValue: () => void;
    submit: boolean;
}>>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    onScrollBottom?: ((...args: any[]) => any) | undefined;
}, {
    submit: boolean;
    data: InvoiceDataItem[];
    formValue: any;
}, {}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutInvoice: typeof _default;
    }
}
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
