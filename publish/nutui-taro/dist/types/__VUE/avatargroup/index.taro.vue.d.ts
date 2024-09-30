import { PropType } from 'vue';
import { type AvatarShape, type AvatarZIndex } from '../avatar/types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    styles: import("vue").ComputedRef<{
        marginLeft: string;
    }>;
    foldCount: import("vue").Ref<number, number>;
    avatarGroupRef: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{}>, {
    shape: AvatarShape;
    size: string | number;
    span: string | number;
    zIndex: AvatarZIndex;
    maxContent: string;
    maxCount: string | number;
    maxBgColor: string;
    maxColor: string;
}, {}, {
    NutAvatar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }>, {
        classes: import("vue").ComputedRef<{
            [x: string]: boolean;
            "nut-avatar": boolean;
        }>;
        styles: import("vue").ComputedRef<import("vue").CSSProperties>;
        avatarRef: import("vue").Ref<null, null>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    }>> & Readonly<{}>, {
        color: string;
        shape: AvatarShape;
        size: string | number;
        bgColor: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAvatarGroup: typeof _default;
    }
}