<template>
  <nut-popup
    position="bottom"
    v-model:visible="show"
    :teleport="teleport"
    :lock-scroll="lockScroll"
    :close-on-click-overlay="closeOnClickOverlay"
    @close="close"
    :round="true"
  >
    <view class="nut-oldpicker__bar">
      <view class="nut-oldpicker__button nut-oldpicker__left" @click="close">{{ cancelText }}</view>
      <view class="nut-oldpicker__title"> {{ title }}</view>
      <view class="nut-oldpicker__button nut-oldpicker__right" @click="confirm()">{{ okText }}</view>
    </view>

    <view class="nut-oldpicker__column">
      <view class="nut-oldpicker__hairline"></view>
      <view class="nut-oldpicker__columnitem" v-for="(item, columnIndex) in columnList" :key="columnIndex">
        <nut-oldpicker-column
          :itemShow="show"
          :list-data="item"
          :readonly="readonly"
          :default-index="item.defaultIndex"
          :visible-item-count="visibleItemCount"
          :data-type="dataType"
          @change="
            (dataIndex) => {
              changeHandler(columnIndex, dataIndex);
            }
          "
        ></nut-oldpicker-column>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { reactive, watch, computed, toRaw, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
import column from './ColumnTaro.vue';
import popup, { popupProps } from '../popup/index.vue';
import { commonProps } from './commonProps';
import { PickerObjectColumn, PickerObjectColumns } from './types';
const { create, componentName } = createComponent('oldpicker');

export default create({
  components: {
    [column.name]: column
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
    ...commonProps
  },
  emits: ['close', 'change', 'confirm', 'update:visible'],
  setup(props, { emit }) {
    const childrenKey = 'children';
    const valuesKey = 'values';
    const state = reactive({
      show: false,
      formattedColumns: props.listData as PickerObjectColumn[],
      defaultIndex: props.defaultIndex as number
    });
    //临时变量，当点击确定时候赋值
    let _defaultIndex = props.defaultIndex;
    let defaultIndexList: number[] = [];

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const dataType = computed(() => {
      const firstColumn = state.formattedColumns[0] as PickerObjectColumn;
      if (typeof firstColumn === 'object') {
        if (firstColumn[childrenKey]) {
          return 'cascade';
        } else if (firstColumn?.[valuesKey]) {
          addDefaultIndexList(props.listData as PickerObjectColumn[]);
          return 'multipleColumns';
        }
      }
      return 'text';
    });

    const columnList = computed(() => {
      if (dataType.value === 'text') {
        return [{ values: state.formattedColumns, defaultIndex: state.defaultIndex }];
      } else if (dataType.value === 'multipleColumns') {
        return state.formattedColumns;
      } else if (dataType.value === 'cascade') {
        return formatCascade(state.formattedColumns as PickerObjectColumn[], state.defaultIndex);
      }
      return state.formattedColumns;
    });

    const addDefaultIndexList = (listData: PickerObjectColumn[]) => {
      defaultIndexList = [];
      listData.forEach((res) => {
        defaultIndexList.push((res.defaultIndex as number) || 0);
      });
    };

    const formatCascade = (listData: PickerObjectColumn[], defaultIndex: number) => {
      const formatted: PickerObjectColumn[] = [];
      let children = listData as PickerObjectColumns;
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

    const getCascadeData = (listData: PickerObjectColumn[], defaultIndex: number) => {
      let arr = listData as PickerObjectColumns;
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
      if (dataType.value === 'cascade') {
        let cursor = state.formattedColumns as PickerObjectColumns;
        if (columnIndex === 0) {
          state.defaultIndex = dataIndex;
        }
        let i = 0;
        while (cursor) {
          if (i === columnIndex) {
            cursor.defaultIndex = dataIndex;
          } else if (i > columnIndex) {
            cursor.defaultIndex = 0;
          }
          cursor = cursor[cursor.defaultIndex || 0].children;
          i++;
        }
      } else if (dataType.value === 'text') {
        _defaultIndex = dataIndex;
      } else if (dataType.value === 'multipleColumns') {
        defaultIndexList[columnIndex] = dataIndex;
        const val = defaultIndexList.map(
          (res, i) => toRaw(state.formattedColumns as PickerObjectColumns)[i].values[res]
        );

        emit('change', val, columnIndex, dataIndex);
      }
    };

    const confirm = () => {
      if (dataType.value === 'text') {
        state.defaultIndex = _defaultIndex as number;
        emit('confirm', state.formattedColumns[_defaultIndex as number]);
      } else if (dataType.value === 'multipleColumns') {
        for (let i = 0; i < defaultIndexList.length; i++) {
          state.formattedColumns[i].defaultIndex = defaultIndexList[i];
        }
        const checkedArr = toRaw(state.formattedColumns).map(
          (res: PickerObjectColumn) => res.values && res.values[res.defaultIndex as number]
        );
        emit('confirm', checkedArr);
      } else if (dataType.value === 'cascade') {
        emit('confirm', getCascadeData(toRaw(state.formattedColumns), state.defaultIndex));
      }

      emit('update:visible', false);
    };

    watch(
      () => props.visible,
      (val) => {
        state.show = val;
      }
    );

    watch(
      () => props.listData,
      (val) => {
        state.formattedColumns = val as PickerObjectColumns;
      }
    );

    return {
      classes,
      ...toRefs(state),
      column,
      dataType,
      columnList,
      close,
      changeHandler,
      confirm
    };
  }
});
</script>
