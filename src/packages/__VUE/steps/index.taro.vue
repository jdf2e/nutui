<script lang="ts">
import { provide, computed, reactive, h, ComponentInternalInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('steps');

export default create({
  props: {
    direction: {
      type: String,
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
  emits: ['click-step'],
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
      child && state.children.push(child);
    };

    const onEmit = (index: number) => {
      emit('click-step', index);
    };

    provide('parent', {
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
