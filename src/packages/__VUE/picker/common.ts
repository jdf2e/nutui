import { ref, onMounted, onBeforeUnmount, reactive, watch, computed, toRaw, toRefs, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('picker');
import { usePicker } from './usePicker';
import { popupProps } from '../popup/props';
import column from './Column.vue';
import Taro from '@tarojs/taro';

export interface PickerOption {
  text: string | number;
  value: string | number;
  disabled?: string;
  children?: PickerOption[];
  className?: string | number;
}

export const componentWeb = {
  components: {
    [column.name]: column
  },
  props: {
    ...popupProps,
    modelValue: {
      type: Array as PropType<(string | number)[]>,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    columns: {
      type: Array as PropType<(PickerOption | PickerOption[])[]>,
      default: () => {
        return [];
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    threeDimensional: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    showOkText: {
      type: Boolean,
      default: true
    },
    showCancelText: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'change', 'confirm', 'update:visible', 'update:modelValue'],
  setup(props: any, { emit }: any) {
    const { changeHandler, confirm, defaultValues, columnsList, selectedOptions, columnsType, classes, close } =
      usePicker(props, emit);

    const state = reactive({
      show: false,
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    const pickerColumn = ref<any[]>([]);

    const swipeRef = (el: any) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el);
      }
    };

    const confirmHandler = () => {
      pickerColumn.value.length > 0 &&
        pickerColumn.value.forEach((column) => {
          column.stopMomentum();
        });

      confirm();
    };

    onMounted(() => {
      if (props.visible) state.show = props.visible;
    });

    onBeforeUnmount(() => {
      if (props.visible) state.show = false;
    });

    watch(
      () => props.visible,
      (val) => {
        state.show = val;
        if (val) {
          pickerColumn.value = [];
        }
      }
    );

    return {
      classes,
      ...toRefs(state),
      column,
      columnsType,
      columnsList,
      close,
      changeHandler,
      confirmHandler,
      defaultValues,
      pickerColumn,
      swipeRef,
      translate
    };
  }
};

export const componentWeapp = {
  components: {
    [column.name]: column
  },
  props: {
    ...popupProps,
    modelValue: {
      type: Array as PropType<(string | number)[]>,
      default: []
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    showOkText: {
      type: Boolean,
      default: true
    },
    showCancelText: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'change', 'confirm', 'update:visible', 'update:modelValue'],
  setup(props: any, { emit }: any) {
    const {
      changeHandler,
      confirm,
      defaultValues,
      columnsList,
      selectedOptions,
      isSameValue,
      columnsType,
      classes,
      close
    } = usePicker(props, emit);
    const state = reactive({
      show: false,
      picking: false,
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    // 选中项的位置  taro
    let defaultIndexes = ref<number[]>([]);

    const defaultValuesConvert = () => {
      let defaultIndexs: number[] = [];
      if (defaultValues.value.length > 0) {
        defaultValues.value.forEach((value, index) => {
          for (let i = 0; i < columnsList.value[index].length; i++) {
            if (columnsList.value[index][i].value == value) {
              defaultIndexs.push(i);
              break;
            }
          }
        });
      } else {
        columnsList.value.forEach((item) => {
          defaultIndexs.push(0);
          defaultValues.value.push(item[0].value);
        });
      }

      return defaultIndexs;
    };

    // 平铺展示时，滚动选择
    const tileChange = (data: any) => {
      const prevDefaultValue = defaultIndexes.value;
      let changeIndex = 0;
      // 判断变化的是第几个
      data.detail.value.forEach((col: number, index: number) => {
        if (prevDefaultValue[index] != col) changeIndex = index;
      });

      if (state.show) {
        defaultIndexes.value = data.detail.value;
        // 选择的是哪个 option
        changeHandler(changeIndex, columnsList.value[changeIndex][data.detail.value[changeIndex]]);
      }
    };

    // 确定
    const confirmHandler = () => {
      if (state.picking) {
        setTimeout(() => {
          confirmHandlerAwit();
        }, 0);
      } else {
        confirmHandlerAwit();
      }
    };

    const confirmHandlerAwit = () => {
      confirm();
      state.show = false;
    };

    // 开始滚动
    const handlePickstart = () => {
      state.picking = true;
    };
    // 开始滚动
    const handlePickend = () => {
      state.picking = false;
    };

    onMounted(() => {
      if (props.visible) {
        defaultIndexes.value = defaultValuesConvert();
        state.show = props.visible;
      }
    });

    onBeforeUnmount(() => {
      if (props.visible) state.show = false;
    });

    watch(
      () => props.modelValue,
      (newValues) => {
        if (!isSameValue(newValues, defaultValues.value)) {
          defaultIndexes.value = defaultValuesConvert();
        }
      },
      { deep: true }
    );

    watch(
      () => props.visible,
      (val) => {
        state.show = val;
        if (val) {
          defaultIndexes.value = defaultValuesConvert();
        }
      }
    );

    return {
      classes,
      ...toRefs(state),
      column,
      columnsType,
      columnsList,
      close,
      changeHandler,
      confirmHandler,
      defaultValues,
      defaultIndexes,
      tileChange,
      handlePickstart,
      translate,
      handlePickend
    };
  }
};
