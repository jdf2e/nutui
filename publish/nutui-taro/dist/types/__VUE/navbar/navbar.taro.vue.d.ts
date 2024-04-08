import type { WithInstall } from '../../utils';
export type NavbarProps = Partial<{
    leftShow: boolean;
    title: string;
    titleIcon: boolean;
    leftText: string;
    desc: string;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    border: boolean;
    placeholder: boolean;
    zIndex: string | number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    leftShow: boolean;
    title: string;
    titleIcon: boolean;
    leftText: string;
    desc: string;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    border: boolean;
    placeholder: boolean;
    zIndex: string | number;
}>>, {
    leftShow: boolean;
    title: string;
    titleIcon: boolean;
    leftText: string;
    desc: string;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    border: boolean;
    placeholder: boolean;
    zIndex: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clickBack: (...args: any[]) => void;
    clickTitle: (...args: any[]) => void;
    clickIcon: (...args: any[]) => void;
    clickRight: (...args: any[]) => void;
    onClickBack: (...args: any[]) => void;
    onClickTitle: (...args: any[]) => void;
    onClickIcon: (...args: any[]) => void;
    onClickRight: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    leftShow: boolean;
    title: string;
    titleIcon: boolean;
    leftText: string;
    desc: string;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    border: boolean;
    placeholder: boolean;
    zIndex: string | number;
}>>, {
    leftShow: boolean;
    title: string;
    titleIcon: boolean;
    leftText: string;
    desc: string;
    fixed: boolean;
    safeAreaInsetTop: boolean;
    border: boolean;
    placeholder: boolean;
    zIndex: number;
}>>> & {
    onClickBack?: ((...args: any[]) => any) | undefined;
    onClickTitle?: ((...args: any[]) => any) | undefined;
    onClickIcon?: ((...args: any[]) => any) | undefined;
    onClickRight?: ((...args: any[]) => any) | undefined;
    onOnClickBack?: ((...args: any[]) => any) | undefined;
    onOnClickTitle?: ((...args: any[]) => any) | undefined;
    onOnClickIcon?: ((...args: any[]) => any) | undefined;
    onOnClickRight?: ((...args: any[]) => any) | undefined;
}, {
    fixed: boolean;
    title: string;
    desc: string;
    zIndex: string | number;
    border: boolean;
    leftShow: boolean;
    titleIcon: boolean;
    leftText: string;
    safeAreaInsetTop: boolean;
    placeholder: boolean;
}, {}>, {
    "left-show"?(_: {}): any;
    left?(_: {}): any;
    "title-icon"?(_: {
        click: () => void;
    }): any;
    content?(_: {}): any;
    right?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutNavbar: typeof _default;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
