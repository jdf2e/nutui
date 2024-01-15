import { PropType, CSSProperties } from 'vue';
import { type AvatarShape } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-avatar": boolean;
    }>;
    styles: import("vue").ComputedRef<CSSProperties>;
    avatarRef: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string;
    shape: AvatarShape;
    size: string | number;
    bgColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAvatar: typeof _default;
    }
}