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
        <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="close">{{ cancelText }}</view>
        <view class="nut-picker__title"> {{ title }}</view>
        <view class="nut-picker__confirm nut-picker__button nut-picker__right" @click="confirm()">{{ okText }}</view>
      </view>

      <view class="nut-picker__column">
        <view class="nut-picker__hairline"></view>
        <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <nut-pickers-column
            :itemShow="show"
            :column="column"
            :readonly="readonly"
            :columnsType="columnsType"
            @change="
              (dataIndex) => {
                changeHandler(columnIndex, dataIndex);
              }
            "
          ></nut-pickers-column>
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch, computed, toRaw, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
import popup, { popupProps } from '../popup/index.vue';
import column from './Column.vue';
import { PickerOption } from './types';
const { componentName, create } = createComponent('pickers');
export default create({
  components: {
    [column.name]: column,
    [popup.name]: popup
  },
  props: {
    ...popupProps,
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    okText: {
      type: String,
      default: '确定'
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
  emits: ['close', 'change', 'confirm', 'update:visible'],
  setup(props, { emit }) {
    const childrenKey = ref('children');
    const valuesKey = ref('values');
    const state = reactive({
      show: false,
      formattedColumns: props.columns as PickerOption[]
    });

    let defaultIndexList: number[] = [];

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    // 当前类型
    const columnsType = computed(() => {
      const firstColumn: PickerOption = state.formattedColumns[0];
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
          break;
        default:
          return [state.formattedColumns];
      }
      return [];
    });

    const addDefaultIndexList = (listData: PickerOption[]) => {
      defaultIndexList = [];
      listData.forEach((res) => {
        defaultIndexList.push((res.defaultIndex as number) || 0);
      });
    };

    const formatCascade = (listData: PickerOption[], defaultIndex: number) => {
      const formatted: PickerOption[] = [];
      let children = listData as PickerOptions;
      children.defaultIndex = defaultIndex;
      while (children) {
        formatted.push({
          values: children,
          defaultIndex: children.defaultIndex || 0
        });
        children = children?.[children.defaultIndex || 0].children;
      }
      addDefaultIndexList(formatted);
      return formatted;
    };

    const getCascadeData = (listData: PickerOption[], defaultIndex: number) => {
      let arr = listData as PickerOptions;
      arr.defaultIndex = defaultIndex;
      const dataList: string[] = [];

      while (arr) {
        const item = arr[arr.defaultIndex ?? 0];
        dataList.push(item.text as string);
        arr = item.children;
      }
      return dataList;
    };

    const close = () => {
      emit('close');
      emit('update:visible', false);
    };

    const changeHandler = (columnIndex: number, dataIndex: number) => {
      // if (columnsType.value === 'cascade') {
      //   let cursor = state.formattedColumns as PickerOptions;
      //   if (columnIndex === 0) {
      //     state.defaultIndex = dataIndex;
      //   }
      //   let i = 0;
      //   while (cursor) {
      //     if (i === columnIndex) {
      //       cursor.defaultIndex = dataIndex;
      //     } else if (i > columnIndex) {
      //       cursor.defaultIndex = 0;
      //     }
      //     cursor = cursor[cursor.defaultIndex || 0].children;
      //     i++;
      //   }
      // } else if (columnsType.value === 'text') {
      //   _defaultIndex = dataIndex;
      // } else if (columnsType.value === 'multipleColumns') {
      //   defaultIndexList[columnIndex] = dataIndex;
      //   const val = defaultIndexList.map(
      //     (res, i) => toRaw(state.formattedColumns as PickerOptions)[i].values[res]
      //   );
      //   emit('change', val, columnIndex, dataIndex);
      // }
    };

    const confirm = () => {
      // if (columnsType.value === 'text') {
      //   state.defaultIndex = _defaultIndex as number;
      //   emit('confirm', state.formattedColumns[_defaultIndex as number]);
      // } else if (columnsType.value === 'multipleColumns') {
      //   for (let i = 0; i < defaultIndexList.length; i++) {
      //     state.formattedColumns[i].defaultIndex = defaultIndexList[i];
      //   }
      //   const checkedArr = toRaw(state.formattedColumns).map(
      //     (res: PickerOption) => res.values && res.values[res.defaultIndex as number]
      //   );
      //   emit('confirm', checkedArr);
      // } else if (columnsType.value === 'cascade') {
      //   emit('confirm', getCascadeData(toRaw(state.formattedColumns), state.defaultIndex));
      // }
      // emit('update:visible', false);
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
      }
    );

    watch(
      () => props.columns,
      (val) => {
        state.formattedColumns = val as PickerOptions;
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
      confirm
    };
  }
});
</script>
