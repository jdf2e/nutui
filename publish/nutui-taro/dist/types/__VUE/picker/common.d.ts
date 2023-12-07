import { CSSProperties } from 'vue';
export declare const componentWeb: {
    components: {
        NutPickerColumn: import("vue").DefineComponent<{
            value: (NumberConstructor | StringConstructor)[];
            columnsType: StringConstructor;
            column: {
                type: import("vue").PropType<import("./types").PickerOption[]>;
                default: () => never[];
            };
            threeDimensional: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeDuration: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            visibleOptionNum: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            optionHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            fieldNames: {
                type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
                default: () => {};
            };
            taro: {
                type: BooleanConstructor;
                defualt: boolean;
            };
        }, {
            setRollerStyle: (index: number) => string;
            isHidden: (index: number) => boolean;
            roller: import("vue").Ref<null>;
            onTouchStart: (event: TouchEvent) => void;
            onTouchMove: (event: TouchEvent) => void;
            onTouchEnd: () => void;
            touchRollerStyle: import("vue").ComputedRef<{
                transition: string;
                transform: string;
                top: string;
            }>;
            touchTileStyle: import("vue").ComputedRef<{
                transition: string;
                transform: string;
                top: string;
                height: string;
            }>;
            setMove: (move: number, type?: string | undefined, time?: number | undefined) => void;
            stopMomentum: () => void;
            pxCheck: (value?: string | number | undefined) => string | undefined;
            maskStyles: import("vue").ComputedRef<{
                backgroundSize: string;
            }>;
            column: import("vue").Ref<import("./types").PickerOption[]>;
            threeDimensional: import("vue").Ref<boolean>;
            swipeDuration: import("vue").Ref<string | number>;
            visibleOptionNum: import("vue").Ref<string | number>;
            optionHeight: import("vue").Ref<string | number>;
            fieldNames: import("vue").Ref<Required<import("./types").PickerFieldNames>>;
            taro: import("vue").Ref<boolean>;
            value: import("vue").Ref<string | number | undefined>;
            columnsType: import("vue").Ref<string | undefined>;
            onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
            onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
            touchParams: import("vue").Ref<{
                startY: number;
                endY: number;
                startTime: number;
                endTime: number;
                lastY: number;
                lastTime: number;
            }>;
            currIndex: import("vue").Ref<number>;
            transformY: import("vue").Ref<number>;
            scrollDistance: import("vue").Ref<number>;
            rotation: import("vue").Ref<number>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change")[], "click" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: (NumberConstructor | StringConstructor)[];
            columnsType: StringConstructor;
            column: {
                type: import("vue").PropType<import("./types").PickerOption[]>;
                default: () => never[];
            };
            threeDimensional: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeDuration: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            visibleOptionNum: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            optionHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            fieldNames: {
                type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
                default: () => {};
            };
            taro: {
                type: BooleanConstructor;
                defualt: boolean;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }, {
            column: import("./types").PickerOption[];
            threeDimensional: boolean;
            swipeDuration: string | number;
            visibleOptionNum: string | number;
            optionHeight: string | number;
            fieldNames: Required<import("./types").PickerFieldNames>;
            taro: boolean;
        }, {}>;
    };
    props: {
        modelValue: {
            type: import("vue").PropType<(string | number)[]>;
            default: () => never[];
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        cancelText: {
            type: StringConstructor;
            default: string;
        };
        okText: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
            default: () => never[];
        };
        threeDimensional: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeDuration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        showToolbar: {
            type: BooleanConstructor;
            default: boolean;
        };
        visibleOptionNum: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        optionHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").PickerFieldNames>;
            default: () => {};
        };
    };
    emits: string[];
    setup(props: any, { emit }: any): {
        columnsType: import("vue").ComputedRef<"multiple" | "single" | "cascade">;
        columnsList: import("vue").ComputedRef<import("./types").PickerOption[][]>;
        columnFieldNames: import("vue").ComputedRef<{
            text: string;
            value: string;
            children: string;
        }>;
        cancel: () => void;
        changeHandler: (columnIndex: number, option: import("./types").PickerOption) => void;
        confirmHandler: () => void;
        defaultValues: import("vue").Ref<(string | number)[]>;
        pickerColumn: import("vue").Ref<any[]>;
        swipeRef: (el: any) => void;
        translate: (keyPath: string, ...args: unknown[]) => any;
        columnStyle: import("vue").ComputedRef<CSSProperties>;
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
        }>;
    };
};
export declare const componentWeapp: {
    components: {
        NutPickerColumn: import("vue").DefineComponent<{
            value: (NumberConstructor | StringConstructor)[];
            columnsType: StringConstructor;
            column: {
                type: import("vue").PropType<import("./types").PickerOption[]>;
                default: () => never[];
            };
            threeDimensional: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeDuration: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            visibleOptionNum: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            optionHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            fieldNames: {
                type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
                default: () => {};
            };
            taro: {
                type: BooleanConstructor;
                defualt: boolean;
            };
        }, {
            setRollerStyle: (index: number) => string;
            isHidden: (index: number) => boolean;
            roller: import("vue").Ref<null>;
            onTouchStart: (event: TouchEvent) => void;
            onTouchMove: (event: TouchEvent) => void;
            onTouchEnd: () => void;
            touchRollerStyle: import("vue").ComputedRef<{
                transition: string;
                transform: string;
                top: string;
            }>;
            touchTileStyle: import("vue").ComputedRef<{
                transition: string;
                transform: string;
                top: string;
                height: string;
            }>;
            setMove: (move: number, type?: string | undefined, time?: number | undefined) => void;
            stopMomentum: () => void;
            pxCheck: (value?: string | number | undefined) => string | undefined;
            maskStyles: import("vue").ComputedRef<{
                backgroundSize: string;
            }>;
            column: import("vue").Ref<import("./types").PickerOption[]>;
            threeDimensional: import("vue").Ref<boolean>;
            swipeDuration: import("vue").Ref<string | number>;
            visibleOptionNum: import("vue").Ref<string | number>;
            optionHeight: import("vue").Ref<string | number>;
            fieldNames: import("vue").Ref<Required<import("./types").PickerFieldNames>>;
            taro: import("vue").Ref<boolean>;
            value: import("vue").Ref<string | number | undefined>;
            columnsType: import("vue").Ref<string | undefined>;
            onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
            onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
            touchParams: import("vue").Ref<{
                startY: number;
                endY: number;
                startTime: number;
                endTime: number;
                lastY: number;
                lastTime: number;
            }>;
            currIndex: import("vue").Ref<number>;
            transformY: import("vue").Ref<number>;
            scrollDistance: import("vue").Ref<number>;
            rotation: import("vue").Ref<number>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change")[], "click" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: (NumberConstructor | StringConstructor)[];
            columnsType: StringConstructor;
            column: {
                type: import("vue").PropType<import("./types").PickerOption[]>;
                default: () => never[];
            };
            threeDimensional: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeDuration: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            visibleOptionNum: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            optionHeight: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            fieldNames: {
                type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
                default: () => {};
            };
            taro: {
                type: BooleanConstructor;
                defualt: boolean;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
        }, {
            column: import("./types").PickerOption[];
            threeDimensional: boolean;
            swipeDuration: string | number;
            visibleOptionNum: string | number;
            optionHeight: string | number;
            fieldNames: Required<import("./types").PickerFieldNames>;
            taro: boolean;
        }, {}>;
    };
    props: {
        modelValue: {
            type: import("vue").PropType<(string | number)[]>;
            default: () => never[];
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        cancelText: {
            type: StringConstructor;
            default: string;
        };
        okText: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
            default: () => never[];
        };
        threeDimensional: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeDuration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        showToolbar: {
            type: BooleanConstructor;
            default: boolean;
        };
        visibleOptionNum: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        optionHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        fieldNames: {
            type: import("vue").PropType<import("./types").PickerFieldNames>;
            default: () => {};
        };
    };
    emits: string[];
    setup(props: any, { emit }: any): {
        columnsType: import("vue").ComputedRef<"multiple" | "single" | "cascade">;
        columnsList: import("vue").ComputedRef<import("./types").PickerOption[][]>;
        columnFieldNames: import("vue").ComputedRef<{
            text: string;
            value: string;
            children: string;
        }>;
        cancel: () => void;
        changeHandler: (columnIndex: number, option: import("./types").PickerOption) => void;
        confirmHandler: () => void;
        defaultValues: import("vue").Ref<(string | number)[]>;
        defaultIndexes: import("vue").ComputedRef<number[]>;
        tileChange: (data: any) => void;
        handlePickstart: () => void;
        translate: (keyPath: string, ...args: unknown[]) => any;
        handlePickend: () => void;
        pickerViewStyles: import("vue").ComputedRef<CSSProperties>;
        pxCheck: (value?: string | number | undefined) => string | undefined;
        show: import("vue").Ref<boolean>;
        picking: import("vue").Ref<boolean>;
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
        }>;
    };
};
