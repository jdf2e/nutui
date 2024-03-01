import { CSSProperties, PropType } from 'vue';
import { Interceptor } from '@/packages/utils/util';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
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
    showIndex: {
        type: BooleanConstructor;
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
}, {
    setActive: (active: number) => void;
    onClose: () => void;
    closeOnImg: () => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: () => void;
    getDistance: (first: {
        x: number;
        y: number;
    }, second: {
        x: number;
        y: number;
    }) => number;
    scaleNow: () => void;
    longPress: (image: ImageInterface) => void;
    styles: import("vue").ComputedRef<CSSProperties>;
    showPop: import("vue").Ref<boolean>;
    active: import("vue").Ref<number>;
    options: import("vue").Ref<{
        muted: boolean;
        controls: boolean;
    }>;
    eleImg: import("vue").Ref<HTMLElement | null>;
    store: import("vue").Ref<{
        scale: number;
        moveable: boolean;
        originScale: number;
        oriDistance: number;
    }>;
    lastTouchEndTime: import("vue").Ref<number>;
    ENV: import("vue").Ref<TaroGeneral.ENV_TYPE>;
    ENV_TYPE: import("vue").Ref<{
        WEAPP: TaroGeneral.ENV_TYPE.WEAPP;
        WEB: TaroGeneral.ENV_TYPE.WEB;
        RN: TaroGeneral.ENV_TYPE.RN;
        SWAN: TaroGeneral.ENV_TYPE.SWAN;
        ALIPAY: TaroGeneral.ENV_TYPE.ALIPAY;
        TT: TaroGeneral.ENV_TYPE.TT;
        QQ: TaroGeneral.ENV_TYPE.QQ;
        JD: TaroGeneral.ENV_TYPE.JD;
        HARMONYHYBRID: TaroGeneral.ENV_TYPE.HARMONYHYBRID;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "longPress")[], "change" | "close" | "longPress", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
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
    showIndex: {
        type: BooleanConstructor;
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onLongPress?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    closeable: boolean;
    closeIconPosition: string;
    paginationVisible: boolean;
    paginationColor: string;
    images: ImageInterface[];
    contentClose: boolean;
    initNo: number;
    autoplay: string | number;
    showIndex: boolean;
    isLoop: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}