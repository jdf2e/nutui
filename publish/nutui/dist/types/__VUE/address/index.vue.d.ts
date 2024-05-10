import { Ref, PropType } from 'vue';
import { AddressData, CustomRegionData, existRegionData } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    province: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    city: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    country: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    town: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    isShowCustomAddress: {
        type: BooleanConstructor;
        default: boolean;
    };
    existAddress: {
        type: PropType<existRegionData[]>;
        default: () => never[];
    };
    existAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    customAndExistTitle: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    columnsPlaceholder: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<import("../popup/types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    translate: (keyPath: string, ...args: unknown[]) => any;
    regionList: import("vue").ComputedRef<AddressData[]>;
    transformData: (data: AddressData[]) => CustomRegionData[];
    scrollDom: Ref<HTMLElement | null>;
    round: Ref<boolean>;
    type: Ref<string>;
    height: Ref<string | number>;
    style: Ref<Record<string, any>>;
    transition: Ref<string>;
    visible: Ref<boolean>;
    zIndex: Ref<string | number>;
    duration: Ref<string | number>;
    lockScroll: Ref<boolean>;
    overlayClass: Ref<string>;
    overlayStyle: Ref<Record<string, any>>;
    closeOnClickOverlay: Ref<boolean>;
    overlay: Ref<boolean>;
    position: Ref<import("../popup/types").PopupPosition>;
    popClass: Ref<string>;
    closeable: Ref<boolean>;
    closeIconPosition: Ref<import("../popup/types").PopupCloseIconPosition>;
    destroyOnClose: Ref<boolean>;
    teleport: Ref<string | Element>;
    teleportDisable: Ref<boolean>;
    safeAreaInsetBottom: Ref<boolean>;
    modelValue: Ref<unknown[]>;
    customAddressTitle: Ref<string>;
    province: Ref<AddressData[]>;
    city: Ref<AddressData[]>;
    country: Ref<AddressData[]>;
    town: Ref<AddressData[]>;
    isShowCustomAddress: Ref<boolean>;
    existAddress: Ref<existRegionData[]>;
    existAddressTitle: Ref<string>;
    customAndExistTitle: Ref<string>;
    columnsPlaceholder: Ref<string | unknown[]>;
    onChange: Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:visible": Ref<((...args: any[]) => any) | undefined>;
    onClose: Ref<((...args: any[]) => any) | undefined>;
    onSelected: Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": Ref<((...args: any[]) => any) | undefined>;
    onType: Ref<((...args: any[]) => any) | undefined>;
    onCloseMask: Ref<((...args: any[]) => any) | undefined>;
    onSwitchModule: Ref<((...args: any[]) => any) | undefined>;
    showPopup: Ref<boolean>;
    privateType: Ref<string>;
    tabIndex: Ref<number>;
    tabName: Ref<string[]>;
    selectedRegion: Ref<{
        [x: string]: any;
        name: string;
        id: string | number;
    }[]>;
    switchModule: () => void;
    closeWay: Ref<string>;
    close: () => void;
    getTabName: (item: AddressData | null, index: number) => any;
    nextAreaList: (item: AddressData) => void;
    regionLine: Ref<HTMLElement | null>;
    tabRegion: Ref<any>;
    lineDistance: Ref<number>;
    changeRegionTab: (item: AddressData, index: number) => void;
    selectedExist: (item: existRegionData) => void;
    clickOverlay: () => void;
    handClose: (type?: string) => void;
    handleElevatorItem: (key: string, item: AddressData) => void;
    initCustomSelected: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("type" | "update:visible" | "change" | "close" | "selected" | "update:modelValue" | "closeMask" | "switchModule")[], "type" | "update:visible" | "change" | "close" | "selected" | "update:modelValue" | "closeMask" | "switchModule", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    province: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    city: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    country: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    town: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    isShowCustomAddress: {
        type: BooleanConstructor;
        default: boolean;
    };
    existAddress: {
        type: PropType<existRegionData[]>;
        default: () => never[];
    };
    existAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    customAndExistTitle: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    columnsPlaceholder: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<import("../popup/types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onType?: ((...args: any[]) => any) | undefined;
    onCloseMask?: ((...args: any[]) => any) | undefined;
    onSwitchModule?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    type: string;
    height: string | number;
    style: Record<string, any>;
    transition: string;
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: Record<string, any>;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    position: import("../popup/types").PopupPosition;
    popClass: string;
    closeable: boolean;
    closeIconPosition: import("../popup/types").PopupCloseIconPosition;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
    modelValue: unknown[];
    customAddressTitle: string;
    province: AddressData[];
    city: AddressData[];
    country: AddressData[];
    town: AddressData[];
    isShowCustomAddress: boolean;
    existAddress: existRegionData[];
    existAddressTitle: string;
    customAndExistTitle: string;
    columnsPlaceholder: string | unknown[];
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAddress: typeof _default;
    }
}