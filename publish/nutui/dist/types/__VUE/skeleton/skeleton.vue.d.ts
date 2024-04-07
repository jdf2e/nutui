import type { WithInstall } from '../../utils';
import type { AvatarShape } from '../avatar/types';
export type SkeletonProps = Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>>, {
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: string;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string;
    title: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string | number;
    title: boolean;
}>>, {
    width: string;
    height: string;
    animated: boolean;
    avatar: boolean;
    avatarShape: string;
    avatarSize: string;
    loading: boolean;
    round: boolean;
    row: string;
    title: boolean;
}>>>, {
    round: boolean;
    loading: boolean;
    width: string;
    height: string;
    title: boolean;
    row: string | number;
    avatar: boolean;
    animated: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutSkeleton: typeof _default;
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
