declare const _default: import("vue").DefineComponent<{
    sku: {
        type: ArrayConstructor;
        default: () => never[];
    };
}, {
    skuInfo: import("vue").Ref<{
        [x: string]: any;
        name: string;
        id: number;
        active: boolean;
        disable: boolean;
    }[]>;
    changeSaleChild: (attrItem: any, index: any, parentItem: any, parentIndex: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectSku"[], "selectSku", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sku: {
        type: ArrayConstructor;
        default: () => never[];
    };
}>> & {
    onSelectSku?: ((...args: any[]) => any) | undefined;
}, {
    sku: unknown[];
}, {}>;
export default _default;
