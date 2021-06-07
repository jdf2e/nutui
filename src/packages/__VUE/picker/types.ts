export type PickerObjOpt = {
  text?: string;
  [key: string]: any;
};

export type PickerOption = string | PickerObjOpt;

export type PickerObjectColumn = {
  values?: PickerOption[];
  defaultIndex?: number;
  children?: PickerOption[];
  [key: string]: any;
};

export type PickerObjectColumns = PickerObjectColumn & PickerObjOpt[];
