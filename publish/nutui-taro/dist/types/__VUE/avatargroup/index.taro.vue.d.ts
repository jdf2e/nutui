import { PropType } from 'vue';
import { type AvatarShape, type AvatarZIndex } from '../avatar/types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    maxContent: {
        type: StringConstructor;
        default: string;
    };
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maxBgColor: {
        type: StringConstructor;
        default: string;
    };
    maxColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    zIndex: {
        type: PropType<AvatarZIndex>;
        default: string;
    };
}, {
    styles: import("vue").ComputedRef<{
        marginLeft: string;
    }>;
    foldCount: import("vue").Ref<number>;
    avatarGroupRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    maxContent: {
        type: StringConstructor;
        default: string;
    };
    maxCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maxBgColor: {
        type: StringConstructor;
        default: string;
    };
    maxColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<string | number>;
        default: string;
    };
    shape: {
        type: PropType<AvatarShape>;
        default: string;
    };
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    zIndex: {
        type: PropType<AvatarZIndex>;
        default: string;
    };
}>>, {
    shape: AvatarShape;
    size: string | number;
    span: string | number;
    zIndex: AvatarZIndex;
    maxContent: string;
    maxCount: string | number;
    maxBgColor: string;
    maxColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAvatarGroup: typeof _default;
    }
}