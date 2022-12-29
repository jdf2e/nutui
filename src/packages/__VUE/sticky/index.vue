<script lang="ts">
import { reactive, computed, h, onMounted, onUnmounted, ref, Ref, unref, PropType, watch, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useRect } from '@/packages/utils/useRect';
const { componentName, create } = createComponent('sticky');
export default create({
  props: {
    position: {
      type: String,
      default: 'top'
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object as PropType<Element>
    },
    zIndex: {
      type: [Number, String],
      default: 2000
    }
  },
  emits: ['change', 'scroll'],

  setup(props, { emit, slots }) {
    const root = ref<HTMLElement>();
    const state = reactive({
      width: 0,
      height: 0,
      fixed: false,
      transform: 0
    });

    const rootStyle = computed(() => {
      const { fixed, width, height } = state;

      if (fixed) {
        return {
          width: `${width}px`,
          height: `${height}px`
        };
      }
    });

    const stickyStyle = computed(() => {
      if (!state.fixed) return;

      const style: CSSProperties = {
        width: `${state.width}px`,
        height: `${state.height}px`,
        [props.position]: `${offset.value}px`,
        zIndex: +props.zIndex
      };

      if (state.transform) style.transform = `translate3d(0, ${state.transform}px, 0)`;

      return style;
    });

    const offset = computed(() => {
      return props.position === 'top' ? props.top : props.bottom;
    });

    const isHidden = (elementRef: HTMLElement | Ref<HTMLElement | undefined>) => {
      const el = unref(elementRef);
      if (!el) return false;

      const style = window.getComputedStyle(el);
      const hidden = style.display === 'none';

      const parentHidden = el.offsetParent === null && style.position !== 'fixed';

      return hidden || parentHidden;
    };

    const isExistRoot = () => {
      if (!root.value || isHidden(root)) return false;
      return true;
    };

    const getScrollTop = (el: Element | Window) => {
      return Math.max(0, 'scrollTop' in el ? el.scrollTop : el.pageYOffset);
    };

    const renderFixed = () => {
      return h(
        'view',
        {
          style: stickyStyle.value,
          class: state.fixed ? `${componentName} nut-sticky--fixed` : componentName
        },
        slots.default?.()
      );
    };

    const onScroll = () => {
      if (!isExistRoot()) return;

      const { container, position } = props;

      const scrollTop = getScrollTop(window);

      const rootRect = useRect(root);
      if (rootRect.width || rootRect.height) {
        state.width = rootRect.width;
        state.height = rootRect.height;
      }

      if (position === 'top') {
        if (container) {
          const containerRect = useRect(container);
          const diff = containerRect.bottom - +offset.value - state.height;
          state.fixed = +offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = diff < 0 ? diff : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else if (position === 'bottom') {
        const clientHeight = document.documentElement.clientHeight;
        if (container) {
          const containerRect = useRect(container);
          const diff = clientHeight - containerRect.top - +offset.value - state.height;
          state.fixed = clientHeight - +offset.value < rootRect.bottom && clientHeight > containerRect.top;
          state.transform = diff < 0 ? -diff : 0;
        } else {
          state.fixed = clientHeight - +offset.value < rootRect.bottom;
        }
      }

      emit('scroll', {
        top: scrollTop,
        fixed: state.fixed
      });
    };

    watch(
      () => state.fixed,
      (val) => {
        emit('change', val);
      }
    );

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
      onScroll();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll);
    });

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
