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
  emits: ['click'],

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };
    const isImage = () => {
      return props.name ? props.name.indexOf('/') !== -1 : false;
    };
    const styleOptions = {
      class: `${props.classPrefix} ${componentName}-${props.name}`,
      style: { color: props.color, fontSize: props.size },
      onClick: handleClick
    } as any;
    if (isImage()) {
      styleOptions.class = `${componentName}__img`;
      styleOptions.src = props.name;
      styleOptions.style['width'] = props.size;
      styleOptions.style['height'] = props.size;
    }
    return () => h(isImage() ? 'img' : props.tag, styleOptions, slots.default?.());
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
