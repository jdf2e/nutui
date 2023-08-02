import { ref, reactive, watch, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName } = createComponent('picker');
import { PickerOption, PickerFieldNames } from './types';

const DEFAULT_FILED_NAMES = {
  text: 'text',
  value: 'value',
  children: 'children'
};

export const usePicker = (props: any, emit: any) => {
  const state = reactive({
    formattedColumns: props.columns
  });

  const columnFieldNames = computed(() => {
    return {
      ...DEFAULT_FILED_NAMES,
      ...(props.fieldNames as PickerFieldNames)
    };
  });

  // 选中项
  const defaultValues = ref<(number | string)[]>([]);

  const pickerColumn = ref<any[]>([]);

  const swipeRef = (el: any) => {
    if (el && pickerColumn.value.length < columnsList.value.length) {
      pickerColumn.value.push(el);
    }
  };

  const classes = computed(() => {
    const prefixCls = componentName;
    return {
      [prefixCls]: true
    };
  });

  const selectedOptions = computed(() => {
    return (columnsList.value as PickerOption[][]).map((column: PickerOption[], index: number) => {
      return column.find((item) => item[columnFieldNames.value.value] === defaultValues.value[index]);
    });
  });

  const childrenField = computed(() => columnFieldNames.value.children);

  // 当前类型
  const columnsType = computed(() => {
    const firstColumn: PickerOption | PickerOption[] = state.formattedColumns[0];
    if (firstColumn) {
      if (Array.isArray(firstColumn)) {
        return 'multiple';
      }
      if (childrenField.value in firstColumn) {
        return 'cascade';
      }
    }
    return 'single';
  });
  // 将传入的 columns 格式化
  const columnsList = computed(() => {
    let result: PickerOption[][] = [];
    switch (columnsType.value) {
      case 'multiple':
        result = state.formattedColumns as PickerOption[][];
        break;
      case 'cascade':
        // 级联数据处理
        result = formatCascade(
          state.formattedColumns as PickerOption[],
          defaultValues.value ? defaultValues.value : []
        );
        break;
      default:
        result = [state.formattedColumns] as PickerOption[][];
        break;
    }
    return result;
  });

  // 级联数据格式化
  const formatCascade = (columns: PickerOption[], defaultValues: (number | string)[]) => {
    const formatted: PickerOption[][] = [];
    let cursor: PickerOption = {
      text: '',
      value: '',
      [childrenField.value]: columns
    };

    let columnIndex = 0;

    while (cursor && cursor[childrenField.value]) {
      const options: PickerOption[] = cursor[childrenField.value];
      const value = defaultValues[columnIndex];
      let index = options.findIndex((columnItem) => columnItem.value === value);
      if (index === -1) index = 0;
      cursor = cursor[childrenField.value][index];

      columnIndex++;
      formatted.push(options);
    }
    return formatted;
  };

  const cancel = () => {
    emit('cancel', {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
  };

  const changeHandler = (columnIndex: number, option: PickerOption) => {
    if (option && Object.keys(option).length) {
      defaultValues.value = defaultValues.value ? defaultValues.value : [];

      if (columnsType.value === 'cascade') {
        defaultValues.value[columnIndex] = option[columnFieldNames.value.value] ?? '';
        let index = columnIndex;
        let cursor = option;
        while (cursor && cursor[childrenField.value] && cursor[childrenField.value][0]) {
          defaultValues.value[index + 1] = cursor[childrenField.value][0].value;
          index++;
          cursor = cursor[childrenField.value][0];
        }

        // 当前改变列 的 下一列 children 值为空
        if (cursor && cursor[childrenField.value] && cursor[childrenField.value].length === 0) {
          defaultValues.value = defaultValues.value.slice(0, index + 1);
        }
      } else {
        defaultValues.value[columnIndex] = Object.prototype.hasOwnProperty.call(option, columnFieldNames.value.value)
          ? option[columnFieldNames.value.value]
          : '';
      }

      emit('change', {
        columnIndex: columnIndex,
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
    }
  };

  const confirm = () => {
    if (defaultValues.value && !defaultValues.value.length) {
      columnsList.value.forEach((columns) => {
        defaultValues.value.push(columns[0][columnFieldNames.value.value]);
      });
    }

    emit('confirm', {
      selectedValue: defaultValues.value,
      selectedOptions: selectedOptions.value
    });
  };

  const isSameValue = (valA: any, valB: any) => JSON.stringify(valA) === JSON.stringify(valB);

  watch(
    () => props.modelValue,
    (newValues) => {
      if (!isSameValue(newValues, defaultValues.value)) {
        defaultValues.value = newValues;
      }
    },
    { deep: true, immediate: true }
  );

  watch(
    defaultValues,
    (newValues) => {
      if (!isSameValue(newValues, props.modelValue)) {
        emit('update:modelValue', newValues);
      }
    },
    { deep: true }
  );

  watch(
    () => props.columns,
    (val) => {
      if (val.length) state.formattedColumns = val as PickerOption[];
    }
  );

  return {
    classes,
    ...toRefs(state),
    columnsType,
    columnsList,
    columnFieldNames,
    cancel,
    changeHandler,
    confirm,
    defaultValues,
    pickerColumn,
    swipeRef,
    selectedOptions,
    isSameValue
  };
};
