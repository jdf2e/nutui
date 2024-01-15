declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => void;
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
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
        default: () => void;
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
}>> & {
    onHandleClick?: ((...args: any[]) => any) | undefined;
}, {
    info: Record<string, any>;
    type: string;
    labels: Function;
}, {}>;
export default _default;
