<template>
  <view>
    <nut-popup
      position="bottom"
      :style="{ height: height + 56 + 'px' }"
      v-model:show="show"
      @close="close"
    >
      <view class="nut-picker__bar">
        <view class="nut-picker__left" @click="close()"> 取消</view>
        <view> {{ title }}</view>
        <view @click="confirm()"> 确定</view>
      </view>

      <view class="nut-picker__column">
        <view
          class="nut-picker__mask"
          :style="{ backgroundSize: `100% ${top}px` }"
        ></view>
        <view class="nut-picker__hairline" :style="{ top: ` ${top}px` }"></view>
        <view
          class="nut-picker__columnitem"
          v-for="(item, columnIndex) in columnList"
          :key="columnIndex"
        >
          <column
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
          ></column>
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRaw } from 'vue';
import { createComponent } from '@/utils/create';
import column from './Column.vue';
import { commonProps } from './commonProps';
const { create } = createComponent('picker');

export default create({
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    ...commonProps
  },
  components: { column },
  emits: ['close', 'change', 'confirm', 'update:isVisible'],

  setup(props, { emit }) {
    const show = ref(false);
    const defaultIndex = ref(props.defaultIndex);
    const formattedColumns: any = ref(props.listData);
    //临时变量，当点击确定时候赋值
    let _defaultIndex = props.defaultIndex;
    const childrenKey = 'children';
    const valuesKey = 'values';
    let defaultIndexList: number[] = [];

    watch(
      () => props.isVisible,
      val => {
        show.value = val;
      }
    );

    watch(
      () => props.listData,
      val => {
        formattedColumns.value = val;
      }
    );

    const addDefaultIndexList = listData => {
      defaultIndexList = [];
      listData.forEach(res => {
        defaultIndexList.push(res.defaultIndex);
      });
    };
    const dataType = computed(() => {
      const firstColumn = formattedColumns.value[0] || {};

      if (typeof firstColumn === 'object') {
        if (firstColumn?.[childrenKey]) {
          return 'cascade';
        } else if (firstColumn?.[valuesKey]) {
          addDefaultIndexList(props.listData);
          //多列
          return 'multipleColumns';
        }
      }
      return 'text';
    });
    const formatCascade = (listData, defaultIndex) => {
      const formatted: any[] = [];
      let children = listData;
      children.defaultIndex = defaultIndex;
      while (children) {
        formatted.push({
          values: children,
          defaultIndex: children.defaultIndex
        });
        children = children?.[children.defaultIndex || 0].children;
      }
      addDefaultIndexList(formatted);
      return formatted;
    };

    const columnList = computed(() => {
      if (dataType.value === 'text') {
        return [
          { values: formattedColumns.value, defaultIndex: defaultIndex.value }
        ];
      } else if (dataType.value === 'multipleColumns') {
        return formattedColumns.value;
      } else if (dataType.value === 'cascade') {
        return formatCascade(formattedColumns.value, defaultIndex.value);
      }
      return formattedColumns.value;
    });
    const getCascadeData = (listData, defaultIndex) => {
      let arr = listData;
      arr.defaultIndex = defaultIndex;
      const dataList: string[] = [];

      while (arr) {
        const item = arr[arr.defaultIndex ?? 0];
        dataList.push(item.text);
        arr = item.children;
      }
      return dataList;
    };
    return {
      show,
      column,
      title: props.title,
      dataType,
      columnList,
      top: (Number(props.visibleItemCount - 1) / 2) * props.itemHeight,
      height: Number(props.visibleItemCount) * props.itemHeight,
      close: () => {
        emit('close');
        emit('update:isVisible', false);
      },
      changeHandler: (columnIndex, dataIndex) => {
        if (dataType.value === 'cascade') {
          let cursor: any = toRaw(formattedColumns.value);
          //最外层使用props.defaultIndex作为初始index
          if (columnIndex === 0) {
            defaultIndex.value = dataIndex;
          } else {
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
          }
        } else if (dataType.value === 'text') {
          _defaultIndex = dataIndex;
        } else if (dataType.value === 'multipleColumns') {
          defaultIndexList[columnIndex] = dataIndex;
          const val = defaultIndexList.map(
            (res, i) => toRaw(formattedColumns.value)[i].values[res]
          );
          console.log('val', defaultIndexList);
          emit('change', val);
        }
      },

      confirm: () => {
        if (dataType.value === 'text') {
          defaultIndex.value = _defaultIndex;
          emit('confirm', formattedColumns.value[_defaultIndex]);
        } else if (dataType.value === 'multipleColumns') {
          for (let i = 0; i < defaultIndexList.length; i++) {
            formattedColumns.value[i].defaultIndex = defaultIndexList[i];
          }
          const checkedArr = toRaw(formattedColumns.value).map(
            (res: any) => res.values[res.defaultIndex]
          );
          console.log(formattedColumns.value);
          emit('confirm', checkedArr);
        } else if (dataType.value === 'cascade') {
          emit(
            'confirm',
            getCascadeData(toRaw(formattedColumns.value), defaultIndex.value)
          );
        }

        emit('update:isVisible', false);
      }
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
