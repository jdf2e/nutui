import { computed, PropType, reactive, toRefs, watch } from 'vue';
import RenderColumn from './renderColumn';
import { DownArrow } from '@nutui/icons-vue';
import { TableColumns } from './types';

export const component = (componentName: string, translate: Function) => {
  return {
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
        type: Array as PropType<TableColumns[]>,
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
    setup(props: any, { emit }: any) {
      const state = reactive({
        curData: props.data
      });
      const classes = computed(() => {
        const prefixCls = componentName;
        return {
          [prefixCls]: true
        };
      });

      const cellClasses = (item: TableColumns) => {
        return {
          'nut-table__main__head__tr--border': props.bordered,
          [`nut-table__main__head__tr--align${item.align ? item.align : ''}`]: true
        };
      };

      const stylehead = (item: TableColumns) => {
        return item.stylehead ? item.stylehead : '';
      };
      const stylecolumn = (item: TableColumns) => {
        return item.stylecolumn ? item.stylecolumn : '';
      };

      const getColumnItem = (value: string): TableColumns => {
        return props.columns.filter((item: TableColumns) => item.key === value)[0];
      };
      const getColumnItemStyle = (value: string) => {
        const style = props.columns.filter((item: TableColumns) => item.key === value);
        return style[0].stylecolumn ? style[0].stylecolumn : '';
      };
      const handleSorterClick = (item: TableColumns) => {
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
        return props.columns.map((columns: TableColumns) => {
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
  };
};
