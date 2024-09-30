import { PropType } from 'vue';
import { VideosType, ImagesType } from '../type';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    Right: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
