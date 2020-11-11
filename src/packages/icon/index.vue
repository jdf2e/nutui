<script lang="ts">
import { h, PropType } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('icon');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    classPrefix: {
      type: String,
      default: 'nutui-iconfont'
    },
    color: {
      type: String,
      default: ''
    },
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'i'
    }
  },
  components: {},
  emits: ['click'],

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return () =>
      h(
        props.tag,
        {
          class: `${props.classPrefix} ${componentName}-${props.name}`,
          style: { color: props.color, fontSize: props.size },
          onClick: handleClick
        },
        slots.default?.()
      );
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
