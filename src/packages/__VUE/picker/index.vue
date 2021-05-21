<template>
  <view-block :class="classes">
    <nut-popup
      position="bottom"
      :style="{ height: height + 56 + 'px' }"
      v-model:visible="show"
      @close="close"
    >
      <view-block class="nut-picker__bar">
        <view-block class="nut-picker__left nut-picker__button" @click="close"
          >取消</view-block
        >
        <view-block> {{ title }}</view-block>
        <view-block class="nut-picker__button" @click="confirm()"
          >确定</view-block
        >
      </view-block>

      <view-block class="nut-picker__column">
        <view-block
          class="nut-picker__mask"
          :style="{ backgroundSize: `100% ${top}px` }"
        ></view-block>
        <view-block
          class="nut-picker__hairline"
          :style="{ top: ` ${top}px` }"
        ></view-block>
        <view-block
          class="nut-picker__columnitem"
          v-for="(item, columnIndex) in columnList"
          :key="columnIndex"
        >
          <nut-picker-column
            :listData="item.values"
            :readonly="readonly"
            :defaultIndex="item.defaultIndex"
            :visibleItemCount="visibleItemCount"
            :itemHeight="itemHeight"
            :dataType="dataType"
            @change="
              dataIndex => {
                changeHandler(columnIndex, dataIndex);
              }
            "
          ></nut-picker-column>
        </view-block>
      </view-block>
    </nut-popup>
  </view-block>
</template>
<script lang="ts">
import { reactive, watch, computed, toRaw, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import column from './Column.vue';
import popup from '@/packages/__VUE/popup/index.vue';
import { commonProps } from './commonProps';
import {
  PickerObjOpt,
  PickerOption,
  PickerObjectColumn,
  PickerObjectColumns
} from './types';
const { create, componentName } = createComponent('picker');

export default create({
  components: {
    [column.name]: column,
    [popup.name]: popup
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
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

    const top = computed(() => {
      return (Number(+props.visibleItemCount - 1) / 2) * +props.itemHeight;
    });

    const height = computed(() => {
      return Number(props.visibleItemCount) * +props.itemHeight;
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
        return [
          { values: state.formattedColumns, defaultIndex: state.defaultIndex }
        ];
      } else if (dataType.value === 'multipleColumns') {
        return state.formattedColumns;
      } else if (dataType.value === 'cascade') {
        return formatCascade(
          state.formattedColumns as PickerObjectColumn[],
          state.defaultIndex
        );
      }
      return state.formattedColumns;
    });

    const addDefaultIndexList = (listData: PickerObjectColumn[]) => {
      defaultIndexList = [];
      listData.forEach(res => {
        defaultIndexList.push((res.defaultIndex as number) || 0);
      });
    };

    const formatCascade = (
      listData: PickerObjectColumn[],
      defaultIndex: number
    ) => {
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

    const getCascadeData = (
      listData: PickerObjectColumn[],
      defaultIndex: number
    ) => {
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
          (res, i) =>
            toRaw(state.formattedColumns as PickerObjectColumns)[i].values[res]
        );
        emit('change', val);
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
          (res: PickerObjectColumn) =>
            res.values && res.values[res.defaultIndex as number]
        );
        emit('confirm', checkedArr);
      } else if (dataType.value === 'cascade') {
        emit(
          'confirm',
          getCascadeData(toRaw(state.formattedColumns), state.defaultIndex)
        );
      }

      emit('update:visible', false);
    };

    watch(
      () => props.visible,
      val => {
        state.show = val;
      }
    );

    watch(
      () => props.listData,
      val => {
        state.formattedColumns = val as PickerObjectColumns;
      }
    );

    return {
      classes,
      ...toRefs(state),
      column,
      dataType,
      columnList,
      top,
      height,
      close,
      changeHandler,
      confirm
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
