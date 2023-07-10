<template>
  <view :class="classes">
    <view class="nut-table__main" :class="{ 'nut-table__main--striped': striped }">
      <view class="nut-table__main__head">
        <view class="nut-table__main__head__tr">
          <span
            v-for="item in columns"
            :key="item.key"
            class="nut-table__main__head__tr__th"
            :class="cellClasses(item)"
            :style="item.stylehead"
            @click="handleSorterClick(item)"
          >
            {{ item.title }}
            <slot name="icon"></slot>
            <DownArrow v-if="!$slots.icon && item.sorter" width="12px" height="12px"></DownArrow>
          </span>
        </view>
      </view>
      <view class="nut-table__main__body">
        <view v-for="item in curData" :key="item" class="nut-table__main__body__tr">
          <span
            v-for="[value, render] in sortDataItem()"
            :key="value"
            class="nut-table__main__body__tr__td"
            :class="cellClasses(getColumnItem(value))"
            :style="getColumnItemStyle(value)"
          >
            <RenderColumn
              v-if="typeof item[value] === 'function' || typeof render === 'function'"
              :slots="[render, item[value]]"
              :record="item"
            ></RenderColumn>
            <view v-else>
              {{ item[value] }}
            </view>
          </span>
        </view>
      </view>
    </view>
    <view v-if="!curData.length" class="nut-table__nodata">
      <div class="nut-table__nodata" :class="{ 'nut-table__nodata--border': bordered }">
        <slot name="nodata"></slot>
        <div v-if="!$slots.nodata" class="nut-table__nodata__text"> {{ translate('noData') }} </div>
      </div>
    </view>
    <view v-if="summary" class="nut-table__summary">
      <span class="nut-table__summary__text" v-html="summary().value"></span>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, PropType, reactive, toRefs, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('table');
import RenderColumn from './renderColumn';
import { DownArrow } from '@nutui/icons-vue';
import { TableColumnProps } from './types';
export default create({
  components: {
    RenderColumn,
    DownArrow
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
  setup(props: any, { emit, slots }: any) {
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

    const stylehead = (item: TableColumnProps) => {
      return item.stylehead ? item.stylehead : '';
    };
    const stylecolumn = (item: TableColumnProps) => {
      return item.stylecolumn ? item.stylecolumn : '';
    };

    const getColumnItem = (value: string): TableColumnProps => {
      return props.columns.filter((item: TableColumnProps) => item.key === value)[0];
    };
    const getColumnItemStyle = (value: string) => {
      const style = props.columns.filter((item: TableColumnProps) => item.key === value);
      return style[0].stylecolumn ? style[0].stylecolumn : '';
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

    const sortDataItem = () => {
      return props.columns.map((columns: TableColumnProps) => {
        return [columns.key, columns.render];
      });
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
      getColumnItemStyle,
      handleSorterClick,
      sortDataItem,
      translate,
      stylehead,
      stylecolumn
    };
  }
});
</script>
