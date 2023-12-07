import { PropType } from 'vue';
import { AddressData, CustomRegionData, existRegionData } from './type';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
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
        type: StringConstructor;
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
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
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
    transformData: (data: AddressData[]) => CustomRegionData[];
    scrollTop: import("vue").Ref<number>;
    scrollChange: (e: any) => void;
    province: import("vue").Ref<HTMLElement | null>;
    city: import("vue").Ref<HTMLElement | null>;
    country: import("vue").Ref<HTMLElement | null>;
    town: import("vue").Ref<HTMLElement | null>;
    style: import("vue").Ref<Record<string, any>>;
    overlay: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<string | number>;
    duration: import("vue").Ref<string | number>;
    overlayClass: import("vue").Ref<string>;
    lockScroll: import("vue").Ref<boolean>;
    overlayStyle: import("vue").Ref<Record<string, any>>;
    closeOnClickOverlay: import("vue").Ref<boolean>;
    type: import("vue").Ref<string>;
    round: import("vue").Ref<boolean>;
    position: import("vue").Ref<string>;
    transition: import("vue").Ref<string>;
    popClass: import("vue").Ref<string>;
    closeable: import("vue").Ref<boolean>;
    closeIconPosition: import("vue").Ref<string>;
    closeIcon: import("vue").Ref<string>;
    destroyOnClose: import("vue").Ref<boolean>;
    teleport: import("vue").Ref<string | Element>;
    teleportDisable: import("vue").Ref<boolean>;
    safeAreaInsetBottom: import("vue").Ref<boolean>;
    height: import("vue").Ref<string | number>;
    modelValue: import("vue").Ref<unknown[]>;
    customAddressTitle: import("vue").Ref<string>;
    isShowCustomAddress: import("vue").Ref<boolean>;
    existAddress: import("vue").Ref<existRegionData[]>;
    existAddressTitle: import("vue").Ref<string>;
    customAndExistTitle: import("vue").Ref<string>;
    columnsPlaceholder: import("vue").Ref<string | unknown[]>;
    "onUpdate:visible": import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onType: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    onSelected: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onCloseMask: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onSwitchModule: import("vue").Ref<((...args: any[]) => any) | undefined>;
    showPopup: import("vue").Ref<boolean>;
    privateType: import("vue").Ref<string>;
    tabIndex: import("vue").Ref<number>;
    tabName: import("vue").Ref<string[]>;
    regionList: import("vue").ComputedRef<AddressData[]>;
    selectedRegion: import("vue").Ref<{
        [x: string]: any;
        name: string;
        id: string | number;
    }[]>;
    selectedExistAddress: {};
    switchModule: () => void;
    closeWay: import("vue").Ref<string>;
    close: () => void;
    getTabName: (item: AddressData | null, index: number) => any;
    nextAreaList: (item: AddressData) => void;
    lineDistance: import("vue").Ref<number>;
    changeRegionTab: (item: AddressData, index: number) => void;
    selectedExist: (item: existRegionData) => void;
    clickOverlay: () => void;
    handClose: (type?: string) => void;
    handleElevatorItem: (key: string, item: AddressData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "type" | "change" | "update:modelValue" | "selected" | "closeMask" | "switchModule")[], "close" | "update:visible" | "type" | "change" | "update:modelValue" | "selected" | "closeMask" | "switchModule", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
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
        type: StringConstructor;
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
        type: StringConstructor;
        default: string;
    };
    closeIcon: {
        type: StringConstructor;
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
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onType?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
    onCloseMask?: ((...args: any[]) => any) | undefined;
    onSwitchModule?: ((...args: any[]) => any) | undefined;
}, {
    style: Record<string, any>;
    overlay: boolean;
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    overlayClass: string;
    lockScroll: boolean;
    overlayStyle: Record<string, any>;
    closeOnClickOverlay: boolean;
    type: string;
    round: boolean;
    position: string;
    transition: string;
    popClass: string;
    closeable: boolean;
    closeIconPosition: string;
    closeIcon: string;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
    height: string | number;
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