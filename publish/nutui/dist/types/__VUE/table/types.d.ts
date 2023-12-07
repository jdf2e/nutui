import { VNode, VNodeChild } from 'vue';
export interface TableColumns {
    key?: string;
    title?: string;
    align?: string;
    stylehead?: string;
    stylecolumn?: string;
    sorter?: Function;
    render?: (rowData?: object, rowIndex?: number) => VNodeChild | string | VNode;
}
export interface TableProps {
    bordered: true;
    columns: TableColumns[];
    data: object[];
    summary: string;
    striped: boolean;
}
