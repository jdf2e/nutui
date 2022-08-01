import { VNode, VNodeChild } from 'vue';
export interface TableColumnProps {
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
  columns: TableColumnProps[];
  data: object[];
  summary: string;
  striped: boolean;
}
