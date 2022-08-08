export type CascaderPane = {
  nodes: CascaderOption[];
  selectedNode: CascaderOption | null;
};

export type CascaderConfig = {
  value?: string;
  text?: string;
  children?: string;
};

export type CascaderOption = {
  text?: string;
  value?: number | string;
  disabled?: boolean;
  children?: CascaderOption[];
  leaf?: boolean;
  level?: number;
  loading?: boolean;
};

export type CascaderValue = CascaderOption['value'][];

export type convertConfig = {
  topId?: string | number | null;
  idKey?: string;
  pidKey?: string;
  sortKey?: string;
};
