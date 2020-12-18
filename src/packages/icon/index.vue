<script lang="ts">
import { h, PropType, computed, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('icon');

export default create({
  props: {
    name: { type: String, default: '' },
    size: { type: String, default: '' },
    classPrefix: { type: String, default: 'nutui-iconfont' },
    color: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i' }
  },
  emits: ['click'],

  setup(props, { emit, slots }) {
    const { name, size, classPrefix, color, tag } = toRefs(props);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const isImage = computed(() => {
      return name.value ? name.value.indexOf('/') !== -1 : false;
    }).value;

    return () =>
      h(
        isImage ? 'img' : tag.value,
        {
          class: isImage
            ? `${componentName}__img`
            : `${classPrefix.value} ${componentName}-${name.value}`,
          style: {
            color: color.value,
            fontSize: size.value,
            width: isImage ? size.value : '',
            height: isImage ? size.value : ''
          },
          onClick: handleClick,
          src: isImage ? name.value : ''
        },
        slots.default?.()
      );
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
