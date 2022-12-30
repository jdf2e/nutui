<script lang="ts">
import { computed, h, ref, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('sticky');
export default create({
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: [Number, String],
      default: 2000
    },
    parentHeight: {
      type: [Number],
      default: 667
    }
  },
  emits: ['change', 'scroll'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();

    const rootStyle = computed(() => {
      return {
        height: `${props.parentHeight}px`
      };
    });

    const stickyStyle = computed(() => {
      const style: CSSProperties = {
        top: `${props.top}px`,
        zIndex: +props.zIndex
      };

      return style;
    });

    const renderFixed = () => {
      return h(
        'view',
        {
          style: stickyStyle.value,
          class: `${componentName} nut-sticky--stickyed`
        },
        slots.default?.()
      );
    };

    return () => {
      return h(
        'view',
        {
          style: rootStyle.value,
          ref: root
        },
        [renderFixed()]
      );
    };
  }
});
</script>
