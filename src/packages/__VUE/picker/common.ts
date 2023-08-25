import { ref, reactive, computed, CSSProperties, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
const { translate } = createComponent('picker');
import { usePicker } from './usePicker';
import column from './Column.vue';
import Taro from '@tarojs/taro';
import baseProps from './baseProps';

export const componentWeb = {
  components: {
    [column.name]: column
  },
  props: baseProps,
  emits: ['cancel', 'change', 'confirm', 'update:modelValue'],
  setup(props: any, { emit }: any) {
    const { changeHandler, confirm, defaultValues, columnsList, columnsType, columnFieldNames, classes, cancel } =
      usePicker(props, emit);

    const state = reactive<{
      ENV: TaroGeneral.ENV_TYPE;
      ENV_TYPE: Taro.TARO_ENV_TYPE;
    }>({
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

    const columnStyle = computed(() => {
      const styles: CSSProperties = {};
      styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
      styles['--lineHeight'] = `${+props.optionHeight}px`;
      return styles;
    });

    return {
      classes,
      ...toRefs(state),
      column,
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirmHandler,
      defaultValues,
      pickerColumn,
      swipeRef,
      translate,
      columnStyle
    };
  }
};

export const componentWeapp = {
  components: {
    [column.name]: column
  },
  props: baseProps,
  emits: ['cancel', 'change', 'confirm', 'update:modelValue'],
  setup(props: any, { emit }: any) {
    const {
      changeHandler,
      confirm,
      defaultValues,
      defaultIndexes,
      columnsList,
      columnsType,
      columnFieldNames,
      classes,
      cancel
    } = usePicker(props, emit);
    const state = reactive({
      show: false,
      picking: false,
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    const pickerViewStyles = computed(() => {
      const styles: CSSProperties = {};
      styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
      styles['--lineHeight'] = `${+props.optionHeight}px`;
      return styles;
    });

    // 平铺展示时，滚动选择
    const tileChange = (data: any) => {
      const prevDefaultValue = defaultIndexes.value;
      let changeIndex = 0;
      // 判断变化的是第几个
      for (let i = 0; i < data.detail.value?.length; i++) {
        if (prevDefaultValue[i] !== data.detail.value?.[i]) {
          changeIndex = i;
          break;
        }
      }

      // 选择的是哪个 option
      changeHandler(changeIndex, columnsList.value[changeIndex][data.detail.value[changeIndex]]);
    };

    // 确定
    const confirmHandler = () => {
      if (state.picking) {
        setTimeout(() => {
          confirm();
        }, 0);
      } else {
        confirm();
      }
    };

    // 开始滚动
    const handlePickstart = () => {
      state.picking = true;
    };
    // 开始滚动
    const handlePickend = () => {
      state.picking = false;
    };

    return {
      classes,
      ...toRefs(state),
      column,
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirmHandler,
      defaultValues,
      defaultIndexes,
      tileChange,
      handlePickstart,
      translate,
      handlePickend,
      pickerViewStyles,
      pxCheck
    };
  }
};
