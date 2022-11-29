<template>
  <view :class="classes">
    <nut-popup
      position="bottom"
      v-model:visible="show"
      :teleport="teleport"
      :lock-scroll="lockScroll"
      :close-on-click-overlay="closeOnClickOverlay"
      @close="close"
      :round="true"
      :safeAreaInsetBottom="safeAreaInsetBottom"
      :destroyOnClose="destroyOnClose"
    >
      <view class="nut-picker__bar">
        <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="close">{{
          cancelText || translate('cancel')
        }}</view>
        <view class="nut-picker__title"> {{ title }}</view>
        <view class="nut-picker__confirm nut-picker__right nut-picker__button" @click="confirmHandler()">{{
          okText || translate('confirm')
        }}</view>
      </view>
      <slot name="top"></slot>

      <!-- Taro 下转换成 微信小程序 -->
      <picker-view
        v-if="ENV != ENV_TYPE.WEB"
        indicator-style="height: 34px;"
        :value="defaultIndexes"
        style="width: 100%; height: 252px"
        :immediate-change="true"
        @change="tileChange"
        @pickstart="handlePickstart"
        @pickend="handlePickend"
      >
        <picker-view-column v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <view
            class="nut-picker-roller-item-tarotile"
            v-for="(item, index) in column"
            :key="item.value ? item.value : index"
          >
            {{ item.text }}
          </view>
        </picker-view-column>
      </picker-view>
      <!-- Taro 下转换成 H5 -->
      <view class="nut-picker__column" v-if="ENV == ENV_TYPE.WEB">
        <view class="nut-picker__hairline" ref="pickerline" :id="'pickerline' + refRandomId"></view>
        <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <nut-picker-column
            :ref="swipeRef"
            :itemShow="show"
            :column="column"
            :readonly="readonly"
            :columnsType="columnsType"
            :value="defaultValues[columnIndex]"
            :threeDimensional="false"
            :swipeDuration="swipeDuration"
            :lineSpacing="lineSpacing"
            @change="
              (option) => {
                changeHandler(columnIndex, option);
              }
            "
          ></nut-picker-column>
        </view>
      </view>
      <slot name="default"></slot>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch, computed, toRaw, toRefs, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { popupProps } from '../popup/props';
import column from './ColumnTaro.vue';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import Taro from '@tarojs/taro';
const { componentName, create, translate } = createComponent('picker');
export default create({
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
    }
  },
  emits: ['close', 'change', 'confirm', 'update:visible', 'update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      show: false,
      formattedColumns: props.columns as import('./types').PickerOption[],
      lineSpacing: 36,
      picking: false,
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    const pickerline = ref(null);
    // 选中项
    let defaultValues = ref<(number | string)[]>(
      Array.isArray(props.modelValue) && props.modelValue.length > 0 ? props.modelValue : []
    );
    // 选中项的位置
    let defaultIndexes = ref<number[]>([]);

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
      let optins: import('./types').PickerOption[] = [];
      (columnsList.value as import('./types').PickerOption[][]).map(
        (column: import('./types').PickerOption[], index: number) => {
          let currOptions = [];
          currOptions = column.filter((item) => item.value == defaultValues.value[index]);
          optins.push(currOptions[0]);
        }
      );

      return optins;
    });
    // 当前类型
    const columnsType = computed(() => {
      const firstColumn: import('./types').PickerOption = state.formattedColumns[0];
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return 'multiple';
        }
        if ('children' in firstColumn) {
          return 'cascade';
        }
      }
      return 'single';
    });

    // 将传入的 columns 格式化
    const columnsList = computed(() => {
      switch (columnsType.value) {
        case 'multiple':
          return state.formattedColumns;
        case 'cascade':
          // 级联数据处理
          return formatCascade(state.formattedColumns, defaultValues.value);
        default:
          return [state.formattedColumns];
      }
    });

    const formatCascade = (columns: import('./types').PickerOption[], defaultValues: (number | string)[]) => {
      const formatted: import('./types').PickerOption[][] = [];
      let cursor: import('./types').PickerOption = {
        text: '',
        value: '',
        children: columns
      };

      let columnIndex = 0;

      while (cursor && cursor.children) {
        const options: import('./types').PickerOption[] = cursor.children;
        const value = defaultValues[columnIndex];
        let index = options.findIndex((columnItem) => columnItem.value == value);
        if (index == -1) index = 0;
        cursor = cursor.children[index];

        columnIndex++;
        formatted.push(options);
      }

      return formatted;
    };

    // 关闭
    const close = () => {
      emit('close', {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
      emit('update:visible', false);
    };

    // 选择
    const changeHandler = (columnIndex: number, option: import('./types').PickerOption) => {
      if (option && Object.keys(option).length) {
        if (columnsType.value === 'cascade') {
          defaultValues.value[columnIndex] = option.value ? option.value : '';
          let index = columnIndex;
          let cursor = option;
          while (cursor && cursor.children && cursor.children[0]) {
            defaultValues.value[index + 1] = cursor.children[0].value;
            index++;
            cursor = cursor.children[0];
          }

          // 当前改变列 的 下一列 children 值为空
          if (cursor && cursor.children && cursor.children.length == 0) {
            defaultValues.value = defaultValues.value.slice(0, index + 1);
          }
        } else {
          defaultValues.value[columnIndex] = option.hasOwnProperty('value') ? option.value : '';
        }
        emit('change', {
          columnIndex: columnIndex,
          selectedValue: defaultValues.value,
          selectedOptions: selectedOptions.value
        });
      }
    };

    const defaultValuesConvert = () => {
      let defaultIndexs = [];
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
    const tileChange = ({ detail }) => {
      const prevDefaultValue = defaultIndexes.value;
      let changeIndex = 0;
      // 判断变化的是第几个
      detail.value.forEach((col, index) => {
        if (prevDefaultValue[index] != col) changeIndex = index;
      });

      if (state.show) {
        defaultIndexes.value = detail.value;
        // 选择的是哪个 option
        changeHandler(changeIndex, columnsList.value[changeIndex][detail.value[changeIndex]]);
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
      if (defaultValues.value && !defaultValues.value.length) {
        columnsList.value.forEach((columns) => {
          defaultValues.value.push(columns[0].value);
          selectedOptions.value.push(columns[0]);
        });
      }

      emit('confirm', {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
      emit('update:visible', false);

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

    const refRandomId = Math.random().toString(36).slice(-8);

    const getReference = async () => {
      const refe = await useTaroRect(pickerline, Taro);
      state.lineSpacing = refe.height ? refe.height : 36;
    };

    onMounted(() => {
      if (props.visible) {
        if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
          setTimeout(() => {
            getReference();
          }, 200);
        } else {
          defaultIndexes.value = defaultValuesConvert();
        }
        state.show = props.visible;
      }
    });

    onBeforeUnmount(() => {
      if (props.visible) state.show = false;
    });

    watch(
      () => props.modelValue,
      (newValues) => {
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(defaultValues.value);
        if (!isSameValue) {
          defaultValues.value = newValues;
          defaultIndexes.value = defaultValuesConvert();
        }
      },
      { deep: true }
    );

    watch(
      defaultValues,
      (newValues) => {
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(props.modelValue);
        if (!isSameValue) {
          emit('update:modelValue', newValues);
        }
      },
      { deep: true }
    );

    watch(
      () => props.visible,
      (val) => {
        state.show = val;

        if (val) {
          if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
            setTimeout(() => {
              getReference();
            }, 200);

            pickerColumn.value = [];
          } else {
            defaultIndexes.value = defaultValuesConvert();
          }
        }
      }
    );

    watch(
      () => props.columns,
      (val) => {
        if (val.length) state.formattedColumns = val as import('./types').PickerOption[];
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
      translate,
      pickerColumn,
      swipeRef,
      refRandomId,
      pickerline,
      tileChange,
      handlePickstart,
      handlePickend
    };
  }
});
</script>
