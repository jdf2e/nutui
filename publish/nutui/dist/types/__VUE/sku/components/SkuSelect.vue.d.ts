import { SkuInfo } from '../type';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sku: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>, {
    skuInfo: import("vue").Ref<{
        [x: string]: any;
        name: string;
        id: number;
        active: boolean;
        disable: boolean;
    }[], SkuInfo[] | {
        [x: string]: any;
        name: string;
        id: number;
        active: boolean;
        disable: boolean;
    }[]>;
    changeSaleChild: (attrItem: any, index: any, parentItem: any, parentIndex: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectSku"[], "selectSku", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sku: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & Readonly<{
    onSelectSku?: ((...args: any[]) => any) | undefined;
}>, {
    sku: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
