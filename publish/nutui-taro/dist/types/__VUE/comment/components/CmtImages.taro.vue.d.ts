import { PropType } from 'vue';
import { Right } from '@nutui/icons-vue-taro';
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
    Right: typeof Right;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
