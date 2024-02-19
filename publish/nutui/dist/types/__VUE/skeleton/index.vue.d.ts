import { AvatarShape } from '../avatar/types';
import { CSSProperties, PropType } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    avatarShape: import("vue").Ref<AvatarShape>;
    avatarClass: import("vue").ComputedRef<{
        [x: string]: boolean | AvatarShape;
        avatarClass: boolean;
    }>;
    getBlockClass: (prefixCls: string) => {
        [x: string]: boolean;
    };
    getStyle: () => CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatar: {
        type: BooleanConstructor;
        default: boolean;
    };
    avatarShape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    avatarSize: {
        type: StringConstructor;
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    row: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    round: boolean;
    loading: boolean;
    width: string;
    height: string;
    title: boolean;
    row: string;
    avatar: boolean;
    animated: boolean;
    avatarShape: AvatarShape;
    avatarSize: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSkeleton: typeof _default;
    }
}