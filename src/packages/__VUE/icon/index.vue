<script lang="ts">
import { h, PropType, inject, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('icon');
import { pxCheck } from '@/packages/utils/pxCheck';

export default create({
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    classPrefix: { type: String, default: '' },
    fontClassName: { type: String, default: '' },
    color: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i' }
  },
  emits: ['click'],

  setup(props, { emit, slots }) {
    const config: any = inject('nut-config-provider', null);
    const handleClick = (event: Event) => {
      emit('click', event);
    };
    const isImage = () => {
      return props.name ? props.name.indexOf('/') !== -1 : false;
    };
    const classPrefix = computed(() => props.classPrefix || config?.classPrefix || 'nut-icon');
    const fontClassName = computed(() => props.fontClassName || config?.fontClassName || 'nutui-iconfont');

    return () => {
      const _isImage = isImage();
      return h(
        _isImage ? 'img' : props.tag,
        {
          class: _isImage
            ? `${componentName}__img`
            : `${fontClassName.value} ${componentName} ${classPrefix.value}-${props.name}`,
          style: {
            color: props.color,
            fontSize: pxCheck(props.size),
            width: pxCheck(props.size),
            height: pxCheck(props.size)
          },
          onClick: handleClick,
          src: _isImage ? props.name : ''
        },
        slots.default?.()
      );
    };
  }
});
</script>
