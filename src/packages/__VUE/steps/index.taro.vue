<script lang="ts">
import { provide, computed, reactive, h, ComponentInternalInstance } from 'vue';
import Step from '../step/index.vue';
import Icon from '../icon/index.taro.vue';
import { createComponent } from '../../utils/create';
const { create, componentName } = createComponent('steps');

export default create({
  components: {
    [Step.name]: Step,
    [Icon.name]: Icon
  },
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

    provide('parent', {
      relation,
      state,
      props
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

<style lang="scss">
@import 'index.scss';
</style>
