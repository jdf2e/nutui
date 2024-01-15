
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: never[];
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBottomButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataOptions: {
        type: ObjectConstructor;
        default: {};
    };
}, {
    clickDelIcon: (event: Event, item: unknown) => void;
    clickEditIcon: (event: Event, item: unknown) => void;
    clickContentItem: (event: Event, item: unknown) => void;
    clickLongCopy: (event: Event, item: unknown) => void;
    clickLongSet: (event: Event, item: unknown) => void;
    clickLongDel: (event: Event, item: unknown) => void;
    clickSwipeDel: (event: Event, item: unknown) => void;
    addAddress: (event: Event) => void;
    dataArray: any;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("add" | "clickItem" | "delIcon" | "editIcon" | "longCopy" | "longSet" | "longDel" | "swipeDel")[], "add" | "clickItem" | "delIcon" | "editIcon" | "longCopy" | "longSet" | "longDel" | "swipeDel", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: never[];
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
    showBottomButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    dataOptions: {
        type: ObjectConstructor;
        default: {};
    };
}>> & {
    onClickItem?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onDelIcon?: ((...args: any[]) => any) | undefined;
    onEditIcon?: ((...args: any[]) => any) | undefined;
    onLongCopy?: ((...args: any[]) => any) | undefined;
    onLongSet?: ((...args: any[]) => any) | undefined;
    onLongDel?: ((...args: any[]) => any) | undefined;
    onSwipeDel?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    longPress: boolean;
    swipeEdition: boolean;
    showBottomButton: boolean;
    dataOptions: Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAddressList: typeof _default;
    }
}