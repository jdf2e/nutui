import { PropType } from 'vue';
import { DownArrow } from '@nutui/icons-vue-taro';
import { TableColumns } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: PropType<TableColumns[]>;
        default: () => never[];
    };
    data: {
        type: PropType<any>;
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
}>, {
    cellClasses: (item: TableColumns) => {
        [x: string]: boolean;
        'nut-table__main__head__tr--border': boolean;
    };
    getColumnItem: (value: string) => TableColumns;
    getColumnItemStyle: (value: string) => string;
    handleSorterClick: (item: TableColumns) => void;
    sortDataItem: () => [string, any][];
    translate: (keyPath: string, ...args: unknown[]) => any;
    stylehead: (item: TableColumns) => string;
    stylecolumn: (item: TableColumns) => string;
    curData: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "sorter"[], "sorter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    columns: {
        type: PropType<TableColumns[]>;
        default: () => never[];
    };
    data: {
        type: PropType<any>;
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
}>> & Readonly<{
    onSorter?: ((...args: any[]) => any) | undefined;
}>, {
    data: any;
    summary: Function;
    columns: TableColumns[];
    bordered: boolean;
    striped: boolean;
}, {}, {
    RenderColumn: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        slots: {
            type: ArrayConstructor;
            default: () => never[];
        };
        record: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        slots: {
            type: ArrayConstructor;
            default: () => never[];
        };
        record: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        slots: unknown[];
        record: Record<string, any>;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    DownArrow: typeof DownArrow;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTable: typeof _default;
    }
}