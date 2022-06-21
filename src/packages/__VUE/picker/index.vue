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
      :isWrapTeleport="isWrapTeleport"
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

      <view class="nut-picker__column">
        <view class="nut-picker__hairline"></view>
        <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <nut-picker-column
            :itemShow="show"
            :column="column"
            :readonly="readonly"
            :columnsType="columnsType"
            :value="defaultValues[columnIndex]"
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
import popup, { popupProps } from '../popup/index.vue';
import column from './Column.vue';
const { componentName, create, translate } = createComponent('picker');
export default create({
  components: {
    [column.name]: column,
    [popup.name]: popup
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
      type: Array,
      default: () => {
        return [];
      }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'change', 'confirm', 'update:visible', 'update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      show: false,
      formattedColumns: props.columns as import('./types').PickerOption[]
    });

    // 选中项
    let defaultValues = ref<(number | string)[]>(props.modelValue);

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

    // 级联数据格式化
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

    const close = () => {
      emit('close');
      emit('update:visible', false);
    };

    const changeHandler = (columnIndex: number, option: import('./types').PickerOption) => {
      if (option && Object.keys(option).length) {
        if (columnsType.value === 'cascade') {
          defaultValues.value[columnIndex] = option.value ? option.value : '';
          let index = columnIndex;
          let cursor = option;
          while (cursor && cursor.children) {
            defaultValues.value[index + 1] = cursor.children[0].value;
            index++;
            cursor = cursor.children[0];
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

    const confirmHandler = () => {
      emit('confirm', {
        selectedValue: defaultValues.value,
        selectedOptions: selectedOptions.value
      });
      emit('update:visible', false);
    };

    onMounted(() => {
      console.log(11, props.modelValue);
      if (props.visible) state.show = props.visible;
    });

    onBeforeUnmount(() => {
      if (props.visible) state.show = false;
    });

    watch(
      () => props.modelValue,
      (newValues) => {
        console.log('change', newValues, defaultValues.value);
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(defaultValues.value);
        if (!isSameValue) {
          defaultValues.value = newValues;
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
      { immediate: true }
    );

    watch(
      () => props.visible,
      (val) => {
        console.log('props更新', props.columns);
        state.show = val;
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
      translate
    };
  }
});
</script>
