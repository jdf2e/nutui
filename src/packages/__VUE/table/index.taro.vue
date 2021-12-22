<template>
  <view :class="classes">
    <view class="nut-table__main" :class="{ 'nut-table__main--striped': striped }">
      <view class="nut-table__main__head">
        <view class="nut-table__main__head__tr">
          <span
            class="nut-table__main__head__tr__th"
            :class="cellClasses(item)"
            v-for="item in columns"
            :key="item.key"
            @click="handleSorterClick(item)"
          >
            {{ item.title }}
            <slot name="icon"></slot>
            <nut-icon v-if="!$slots.icon && item.sorter" name="down-arrow" size="12px"></nut-icon>
          </span>
        </view>
      </view>
      <view class="nut-table__main__body">
        <view class="nut-table__main__body__tr" v-for="item in curData" :key="item">
          <span
            class="nut-table__main__body__tr__td"
            :class="cellClasses(getColumnItem(value))"
            v-for="value in Object.keys(item)"
            :key="value"
          >
            {{ typeof item[value] !== 'function' ? item[value] : '' }}
            <RenderColumn :slots="item[value]" v-if="typeof item[value] === 'function'"></RenderColumn>
          </span>
        </view>
      </view>
    </view>
    <view class="nut-table__summary" v-if="summary">
      <span class="nut-table__summary__text" v-html="summary().value"></span>
    </view>
    <view class="nut-table__nodata" v-if="!curData.length">
      <div class="nut-table__nodata" :class="{ 'nut-table__nodata--border': bordered }">
        <slot name="nodata"></slot>
        <div v-if="!$slots.nodata" class="nut-table__nodata__text"> 暂无数据 </div>
      </div>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, PropType, reactive, toRefs, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('table');
import RenderColumn from './renderColumn';
import { TableColumnProps } from './types';
export default create({
  components: {
    RenderColumn
  },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array as PropType<TableColumnProps[]>,
      default: () => {
        return [];
      }
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    }
  },
  emits: ['sorter'],
  setup(props, { emit, slots }) {
    const state = reactive({
      curData: props.data
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const cellClasses = (item: TableColumnProps) => {
      return {
        'nut-table__main__head__tr--border': props.bordered,
        [`nut-table__main__head__tr--align${item.align ? item.align : ''}`]: true
      };
    };

    const getColumnItem = (value: string): TableColumnProps => {
      return props.columns.filter((item: TableColumnProps) => item.key === value)[0];
    };

    const handleSorterClick = (item: TableColumnProps) => {
      if (item.sorter) {
        emit('sorter', item);
        state.curData =
          typeof item.sorter === 'function'
            ? state.curData.sort(item.sorter)
            : item.sorter === 'default'
            ? state.curData.sort()
            : state.curData;
      }
    };

    watch(
      () => props.data,
      (val) => {
        state.curData = val.slice();
      }
    );

    return {
      ...toRefs(state),
      classes,
      cellClasses,
      getColumnItem,
      handleSorterClick
    };
  }
});
</script>
