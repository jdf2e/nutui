import { computed, PropType, reactive, toRefs, watch } from 'vue';
import RenderColumn from './renderColumn';
import { TableColumnProps } from './types';

export const component = (componentName: string, translate: Function) => {
  return {
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
  };
};
