import { VNodeChild } from 'vue';
export interface TableColumnProps {
  key?: string;
  title?: string;
  align?: string;
  sorter?: Function;
  render?: (rowData: object, rowIndex: number) => VNodeChild | string;
}

export interface TableProps {
  bordered: true;
  columns: TableColumnProps[];
  data: object[];
  summary: string;
  striped: boolean;
}
