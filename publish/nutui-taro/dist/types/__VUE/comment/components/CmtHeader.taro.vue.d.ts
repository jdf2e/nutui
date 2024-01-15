declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleClick"[], "handleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    onHandleClick?: ((...args: any[]) => any) | undefined;
}, {
    info: Record<string, any>;
    type: string;
}, {}>;
export default _default;
