import { type PropType } from 'vue';
import type { NotifyType } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    id: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    msg: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<NotifyType>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    onClose: FunctionConstructor;
    onClick: FunctionConstructor;
    unmount: FunctionConstructor;
}, {
    clickCover: () => void;
    isShowPopup: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    msg: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<NotifyType>;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    onClose: FunctionConstructor;
    onClick: FunctionConstructor;
    unmount: FunctionConstructor;
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    type: NotifyType;
    background: string;
    visible: boolean;
    duration: number;
    position: import("../popup/types").PopupPosition;
    className: string;
    msg: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutNotify: typeof _default;
    }
}