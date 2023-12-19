<script lang="ts">
import { provide, computed, reactive, h, ComponentInternalInstance, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { STEPS_KEY, StepsDirection } from './types';
const { create, componentName } = createComponent('steps');

export default create({
  props: {
    direction: {
      type: String as PropType<StepsDirection>,
      default: 'horizontal'
    },
    current: {
      type: [String, Number],
      default: '0'
    },
    progressDot: {
      type: Boolean,
      default: false
    }
  },
  emits: ['clickStep'],
  setup(props, { emit, slots }) {
    const state = reactive({
      children: [] as ComponentInternalInstance[]
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-${props.direction}`]: true,
        [`${prefixCls}-dot`]: !!props.progressDot
      };
    });

    const relation = (child: ComponentInternalInstance) => {
      child && state.children.push(child as any);
    };

    const onEmit = (index: number) => {
      emit('clickStep', index);
    };

    provide(STEPS_KEY, {
      relation,
      state,
      props,
      onEmit
    });

    return () => {
      return h(
        'view',
        {
          class: classes.value
        },
        slots.default?.()
      );
    };
  }
});
</script>
