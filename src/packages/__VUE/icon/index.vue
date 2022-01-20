<script lang="ts">
import { h, PropType, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('icon');
import { pxCheck } from '../../utils/pxCheck';
import IconAm from './iconAm/index.vue';

export default create({
  components: {
    [IconAm.name]: IconAm
  },
  props: {
    name: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
    classPrefix: { type: String, default: 'nut-icon' },
    fontClassName: { type: String, default: 'nutui-iconfont' },
    color: { type: String, default: '' },
    tag: { type: String as PropType<keyof HTMLElementTagNameMap>, default: 'i' }
  },
  emits: ['click'],

  setup(props, { emit, slots }) {
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const isImage = () => {
      return props.name ? props.name.indexOf('/') !== -1 : false;
    };

    const isAmIcon = () => {
      return props.name ? props.name.indexOf('am-') !== -1 : true;
    };

    const renderIcon = () => {
      const _isImage = isImage();
      return h(
        _isImage ? 'img' : props.tag,
        {
          class: _isImage
            ? `${componentName}__img`
            : `${props.fontClassName} ${componentName} ${props.classPrefix}-${props.name}`,
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
    const renderAmIcon = () => {
      return h(IconAm, {
        // name: props.name,
        ...props
      });
    };
    return isAmIcon() ? renderAmIcon : renderIcon;
  }
});
</script>
