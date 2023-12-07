import ImagePreview from './index.vue';
import { ImageInterface } from './types';
import { Interceptor } from '@/packages/utils/util';
export declare class ImagePreviewOptions {
    show: boolean;
    images: ImageInterface[];
    videos?: [];
    contentClose?: boolean;
    initNo?: number;
    paginationVisible?: boolean;
    paginationColor?: string;
    autoplay?: number | string;
    isWrapTeleport?: boolean;
    showIndex?: boolean;
    closeable?: boolean;
    closeIcon?: string;
    closeIconPosition?: string;
    beforeClose?: Interceptor;
    maxZoom?: number;
    minZoom?: number;
    isLoop?: boolean;
    onClose?(): void;
    onChange?(index: number): void;
    onLongPress?(image: ImageInterface): void;
    teleport?: string | HTMLElement;
}
declare class ImagePreviewFunction {
    options: ImagePreviewOptions;
    constructor(_options: ImagePreviewOptions);
}
declare const showImagePreview: {
    (options: ImagePreviewOptions): ImagePreviewFunction;
    install(app: any): void;
};
export { showImagePreview };
export default ImagePreview;
