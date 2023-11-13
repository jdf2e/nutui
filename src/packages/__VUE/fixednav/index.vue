<template src="./template.html"></template>
<script lang="ts">
import { PropType, computed, ref } from 'vue';
import { Left } from '@nutui/icons-vue';
import NutOverlay from '../overlay/index.vue';
import { createComponent } from '@/packages/utils/create';
import { useLocale } from '@/packages/utils/useLocale';
const { create } = createComponent('fixed-nav');

const cN = 'NutFixedNav';

export default create({
  components: {
    NutOverlay,
    Left
  },
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
    const translate = useLocale(cN);
    const classes = computed(() => {
      const prefixCls = 'nut-fixed-nav';
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
});
</script>
