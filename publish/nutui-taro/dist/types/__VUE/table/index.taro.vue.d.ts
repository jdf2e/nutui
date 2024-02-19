import { PropType } from 'vue';
import { TableColumns } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
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
    curData: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "sorter"[], "sorter", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onSorter?: ((...args: any[]) => any) | undefined;
}, {
    data: any;
    summary: Function;
    columns: TableColumns[];
    bordered: boolean;
    striped: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTable: typeof _default;
    }
}