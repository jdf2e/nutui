import { computed, PropType, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, translate } = createComponent('fixednav');
export const component = {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    navList: {
      default: () => [],
      type: Array as PropType<any[]>
    },
    activeColor: {
      default: '',
      type: String
    },
    activeText: {
      default: '',
      type: String
    },
    unActiveText: {
      default: '',
      type: String
    },
    position: {
      default: () => {
        return {
          top: 'auto',
          bottom: 'auto'
        };
      },
      type: Object
    },
    type: {
      default: 'right',
      type: String
    }
  },
  emits: ['update:visible', 'selected'],

  setup(props: any, { emit }: any) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        active: props.visible,
        [props.type]: true
      };
    });

    const current = ref(-1);

    const updateValue = (value: boolean = !props.visible) => {
      emit('update:visible', value);
    };
    const selected = (item: any, event: Event) => {
      emit('selected', {
        item,
        event
      });
      current.value = item.id;
    };

    return { classes, updateValue, selected, translate, current };
  }
};
