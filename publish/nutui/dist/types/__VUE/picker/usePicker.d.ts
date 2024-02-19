import { PickerOption } from './types';
export declare const usePicker: (props: any, emit: any) => {
    columnsType: import("vue").ComputedRef<"multiple" | "single" | "cascade">;
    columnsList: import("vue").ComputedRef<PickerOption[][]>;
    columnFieldNames: import("vue").ComputedRef<{
        text: string;
        value: string;
        children: string;
        className: string;
    }>;
    cancel: () => void;
    changeHandler: (columnIndex: number, option: PickerOption) => void;
    confirm: () => void;
    defaultValues: import("vue").Ref<(string | number)[]>;
    defaultIndexes: import("vue").ComputedRef<number[]>;
    pickerColumn: import("vue").Ref<any[]>;
    swipeRef: (el: any) => void;
    selectedOptions: import("vue").ComputedRef<PickerOption[]>;
    isSameValue: (valA: any, valB: any) => boolean;
    formattedColumns: import("vue").Ref<any>;
};
