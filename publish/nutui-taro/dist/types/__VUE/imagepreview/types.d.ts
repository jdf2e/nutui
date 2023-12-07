import { Interceptor } from '@/packages/utils/util';
export interface ImageInterface {
    src: string;
}
export type ImagePreviewOptions = {
    show: Boolean;
    images: ImageInterface[];
    videos: [];
    contentClose: Boolean;
    initNo: Number;
    paginationVisible: Boolean;
    paginationColor: String;
    autoplay: [Number, String];
    isWrapTeleport: Boolean;
    showIndex?: boolean;
    closeable?: boolean;
    closeIcon?: string;
    closeIconPosition?: String;
    beforeClose?: Interceptor;
    maxZoom?: number;
    minZoom?: number;
    isLoop?: boolean;
    close?(): void;
    change?(index: number): void;
};
export declare const baseProps: {
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    minZoom: {
        type: NumberConstructor;
        default: number;
    };
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
};
