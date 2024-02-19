declare const _default: import("vue").DefineComponent<{
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
}, {
    goodsCount: import("vue").Ref<string | number>;
    add: (value: number) => void;
    reduce: (value: number) => void;
    overlimit: (e: Event, action: string) => void;
    getExtraText: () => any;
    changeStepper: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reduce" | "click" | "add" | "changeSku" | "changeStepper" | "clickBtnOptions" | "overLimit")[], "reduce" | "click" | "add" | "changeSku" | "changeStepper" | "clickBtnOptions" | "overLimit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onChangeSku?: ((...args: any[]) => any) | undefined;
    onChangeStepper?: ((...args: any[]) => any) | undefined;
    onClickBtnOptions?: ((...args: any[]) => any) | undefined;
    onOverLimit?: ((...args: any[]) => any) | undefined;
}, {
    stepperMax: string | number;
    stepperMin: string | number;
    stepperExtraText: boolean | Function;
    stepperTitle: string;
}, {}>;
export default _default;
