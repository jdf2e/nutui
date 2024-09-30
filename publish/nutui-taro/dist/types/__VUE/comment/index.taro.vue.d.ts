import { PropType } from 'vue';
import { Right } from '@nutui/icons-vue-taro';
import { VideosType, ImagesType } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>, {
    conEllipsis: import("vue").ComputedRef<string | number | true>;
    clickOperate: (t: string) => void;
    handleClick: () => void;
    clickImages: (value: any) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickImages" | "clickOperate")[], "click" | "clickImages" | "clickOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onClickImages?: ((...args: any[]) => any) | undefined;
    onClickOperate?: ((...args: any[]) => any) | undefined;
}>, {
    info: Record<string, any>;
    ellipsis: string | number | boolean;
    images: ImagesType[];
    videos: VideosType[];
    operation: string[];
    headerType: string;
    imagesRows: string;
    follow: Record<string, any>;
    labels: Function;
}, {}, {
    CommentHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        info: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, {
        handleClick: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleClick"[], "handleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        info: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{
        onHandleClick?: ((...args: any[]) => any) | undefined;
    }>, {
        info: Record<string, any>;
        type: string;
    }, {}, {
        NutRate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            size: {
                type: PropType<string | number>;
            };
            activeColor: {
                type: PropType<string>;
                default: string;
            };
            modelValue: {
                type: PropType<string | number>;
                default: number;
            };
            count: {
                type: PropType<string | number>;
                default: number;
            };
            readonly: {
                type: PropType<boolean>;
                default: boolean;
            };
            customIcon: {
                type: PropType<any>;
                default: () => typeof import("@nutui/icons-vue-taro").StarFillN;
            };
            voidColor: {
                type: PropType<string>;
                default: string;
            };
            allowHalf: {
                type: PropType<boolean>;
                default: boolean;
            };
            spacing: {
                type: PropType<string | number>;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            change: (...args: any[]) => void;
            "update:modelValue": (...args: any[]) => void;
        }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            size: {
                type: PropType<string | number>;
            };
            activeColor: {
                type: PropType<string>;
                default: string;
            };
            modelValue: {
                type: PropType<string | number>;
                default: number;
            };
            count: {
                type: PropType<string | number>;
                default: number;
            };
            readonly: {
                type: PropType<boolean>;
                default: boolean;
            };
            customIcon: {
                type: PropType<any>;
                default: () => typeof import("@nutui/icons-vue-taro").StarFillN;
            };
            voidColor: {
                type: PropType<string>;
                default: string;
            };
            allowHalf: {
                type: PropType<boolean>;
                default: boolean;
            };
            spacing: {
                type: PropType<string | number>;
            };
        }>> & Readonly<{
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            activeColor: string;
            modelValue: string | number;
            count: string | number;
            readonly: boolean;
            customIcon: any;
            voidColor: string;
            allowHalf: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CommentImages: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        videos: {
            type: PropType<VideosType[]>;
            default: () => never[];
        };
        images: {
            type: PropType<ImagesType[]>;
            default: () => never[];
        };
    }>, {
        isShowImage: import("vue").Ref<boolean, boolean>;
        initIndex: import("vue").Ref<number, number>;
        showImages: (type: string, index: string | number) => void;
        totalImages: import("vue").Ref<({
            id?: string | number | undefined;
            mainUrl: string;
            videoUrl: string;
        } | {
            smallImgUrl: string;
            bigImgUrl: string;
            imgUrl: string;
        })[], (VideosType | ImagesType)[] | ({
            id?: string | number | undefined;
            mainUrl: string;
            videoUrl: string;
        } | {
            smallImgUrl: string;
            bigImgUrl: string;
            imgUrl: string;
        })[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickImages")[], "click" | "clickImages", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        videos: {
            type: PropType<VideosType[]>;
            default: () => never[];
        };
        images: {
            type: PropType<ImagesType[]>;
            default: () => never[];
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onClickImages?: ((...args: any[]) => any) | undefined;
    }>, {
        type: string;
        images: ImagesType[];
        videos: VideosType[];
    }, {}, {
        Right: typeof Right;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CommentBottom: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        info: {
            type: ObjectConstructor;
            default: () => {};
        };
        operation: {
            type: PropType<string[]>;
            default: string[];
        };
    }>, {
        showPopver: import("vue").Ref<boolean, boolean>;
        operate: (type: string) => void;
        mergeOp: import("vue").Ref<never[], never[]>;
        handleClick: () => void;
        translate: (keyPath: string, ...args: unknown[]) => any;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleClick" | "clickOperate")[], "handleClick" | "clickOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        info: {
            type: ObjectConstructor;
            default: () => {};
        };
        operation: {
            type: PropType<string[]>;
            default: string[];
        };
    }>> & Readonly<{
        onHandleClick?: ((...args: any[]) => any) | undefined;
        onClickOperate?: ((...args: any[]) => any) | undefined;
    }>, {
        info: Record<string, any>;
        type: string;
        operation: string[];
    }, {}, {
        Fabulous: typeof import("@nutui/icons-vue-taro").Fabulous;
        Comment: typeof import("@nutui/icons-vue-taro").Comment;
        MoreX: typeof import("@nutui/icons-vue-taro").MoreX;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Right: typeof Right;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutComment: typeof _default;
    }
}