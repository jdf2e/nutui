export type Formatter = (
  type: string,
  option: import('../picker/types').PickerOption
) => import('../picker/types').PickerOption;
export type Filter = (
  columnType: string,
  options: import('../picker/types').PickerOption[]
) => import('../picker/types').PickerOption[];
