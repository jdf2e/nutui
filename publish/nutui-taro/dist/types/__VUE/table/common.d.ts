import { PropType } from 'vue';
import { TableColumns } from './types';
export declare const component: (componentName: string, translate: Function) => {
    components: {
        RenderColumn: import("vue").DefineComponent<{
            slots: {
                type: ArrayConstructor;
                default: () => never[];
            };
            record: {
                type: ObjectConstructor;
                default: () => {};
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            slots: {
                type: ArrayConstructor;
                default: () => never[];
            };
            record: {
                type: ObjectConstructor;
                default: () => {};
            };
        }>>, {
            slots: unknown[];
            record: Record<string, any>;
        }, {}>;
        DownArrow: import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }, {
            classes: import("vue").ComputedRef<{
                [x: string]: string | boolean;
                "nut-icon": boolean;
            }>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }>>, {
            name: string;
            width: string | number;
            height: string | number;
            color: string;
            class: string;
        }>;
    };
    props: {
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        columns: {
            type: PropType<TableColumns[]>;
            default: () => never[];
        };
        data: {
            type: ObjectConstructor;
            default: () => {};
        };
        summary: {
            type: FunctionConstructor;
            default: null;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
    setup(props: any, { emit }: any): {
        classes: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        cellClasses: (item: TableColumns) => {
            [x: string]: any;
            'nut-table__main__head__tr--border': any;
        };
        getColumnItem: (value: string) => TableColumns;
        getColumnItemStyle: (value: string) => any;
        handleSorterClick: (item: TableColumns) => void;
        sortDataItem: () => any;
        translate: Function;
        stylehead: (item: TableColumns) => string;
        stylecolumn: (item: TableColumns) => string;
        curData: import("vue").Ref<any>;
    };
};
