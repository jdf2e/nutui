import type { PropType } from 'vue';
import { Interceptor } from '@/packages/utils/util';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    teleportDisable: {
        ype: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: PropType<Interceptor>;
    isLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
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
}, {
    onClose: () => void;
    mergeImages: import("vue").ComputedRef<any>;
    setActive: (active: number) => void;
    iconClasses: import("vue").ComputedRef<string>;
    showPop: import("vue").Ref<boolean>;
    active: import("vue").Ref<number>;
    rootWidth: import("vue").Ref<number>;
    rootHeight: import("vue").Ref<number>;
    swipeRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close")[], "change" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    teleportDisable: {
        ype: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: PropType<Interceptor>;
    isLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    closeable: boolean;
    closeIconPosition: string;
    teleport: string | Element;
    teleportDisable: boolean;
    autoplay: string | number;
    paginationVisible: boolean;
    paginationColor: string;
    contentClose: boolean;
    initNo: number;
    showIndex: boolean;
    minZoom: number;
    maxZoom: number;
    images: ImageInterface[];
    videos: unknown[];
    isLoop: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}