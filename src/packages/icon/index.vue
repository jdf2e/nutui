<script lang="ts">
import { toRefs, h, PropType } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('icon');

export default create({
  props: {
    name: {
      type: String,
      default: 'right'
    },
    size: [Number, String],
    color: String,
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'i'
    }
  },
  components: {},
  emits: ['click'],

  setup(props, { emit, slots }) {
    const { name, tag, color, size } = toRefs(props);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return () =>
      h(
        tag.value,
        {
          class: `nutui-iconfont ${componentName}-${name.value}`,
          style: { color: color?.value, fontSize: size?.value },
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
