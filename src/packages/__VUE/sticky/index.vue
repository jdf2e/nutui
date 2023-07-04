<script lang="ts">
import { computed, h, ref, PropType, watch, CSSProperties, watchEffect, onMounted, onUnmounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { getScrollParent } from '@/packages/utils/useScrollParent';
import { useRect } from '@/packages/utils/useRect';
const { create } = createComponent('sticky');
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
    const rootRef = ref<HTMLElement>();
    const stickyRef = ref<HTMLElement>();
    const isFixed = ref(false);
    const threshold = computed(() => {
      return props.position === 'top' ? Number(props.top) : Number(props.bottom);
    });
    const stickyStyle = ref<CSSProperties>({
      [props.position]: `${threshold.value}px`,
      zIndex: Number(props.zIndex)
    });
    const rootStyle = ref<CSSProperties>({});
    watchEffect(() => {
      if (props.position === 'top') return;
      const containerEle = props.container as HTMLElement;

      if (!rootRef.value && !containerEle) return;
      const rootRect = useRect(rootRef);
      const containerRect = useRect(containerEle);
      const clientHeight = document.documentElement.clientHeight;
      const stCurrent = stickyRef.value as Element;
      const stickyRect = useRect(stCurrent);
      let fixed = clientHeight - threshold.value < rootRect.bottom;
      if (containerEle) {
        fixed =
          containerRect.bottom > clientHeight - threshold.value - stickyRect.height &&
          clientHeight - threshold.value - stickyRect.height > containerRect.top;
      }
      const defaultPostVal = fixed ? 'fixed' : 'inherit';
      stickyStyle.value.position = defaultPostVal;
      isFixed.value = fixed;
    });
    const handleScroll = () => {
      const containerEle = props.container as HTMLElement;

      if (!rootRef.value && !containerEle) return;

      const rootRect = useRect(rootRef);
      const stCurrent = stickyRef.value as Element;
      const stickyRect = useRect(stCurrent);
      const containerRect = useRect(containerEle);
      if (rootRect.height) {
        rootStyle.value.height = rootRect.height;
      }

      const getFixed = (): { position: 'fixed' | undefined; fixed: boolean } => {
        let fixed = false;
        if (props.position === 'top') {
          fixed = containerEle
            ? threshold.value > rootRect.top && containerRect.bottom > 0
            : threshold.value > rootRect.top;
        } else {
          const clientHeight = document.documentElement.clientHeight;
          fixed = containerEle
            ? containerRect.bottom > 0 && clientHeight - threshold.value - stickyRect.height > containerRect.top
            : clientHeight - threshold.value < rootRect.bottom;
        }
        return {
          position: fixed ? 'fixed' : undefined,
          fixed
        };
      };

      const getTransform = (): CSSProperties => {
        if (props.position === 'top') {
          if (containerEle) {
            const diff = containerRect.bottom - threshold.value - stickyRect.height;
            const transform = diff < 0 ? diff : 0;
            return { transform: `translate3d(0, ${transform}px, 0)` };
          }
        } else {
          if (containerEle) {
            const clientHeight = document.documentElement.clientHeight;
            const diff = containerRect.bottom - (clientHeight - threshold.value);
            const transform = diff < 0 ? diff : 0;
            return { transform: `translate3d(0, ${transform}px, 0)` };
          }
        }
        return {};
      };

      const fixed = getFixed();
      stickyStyle.value = {
        ...stickyStyle.value,
        ...getTransform(),
        position: fixed.position
      };
      isFixed.value = fixed.fixed;
    };
    watch(
      () => isFixed,
      (val) => {
        emit('change', val.value);
      }
    );
    onMounted(() => {
      const el = getScrollParent(rootRef.value as HTMLElement);
      el.addEventListener('scroll', handleScroll, false);
    });
    onUnmounted(() => {
      const el = getScrollParent(rootRef.value as HTMLElement);
      el.removeEventListener('scroll', handleScroll);
    });
    const renderFixed = () => {
      return h(
        'div',
        {
          class: 'nut-sticky__box',
          ref: stickyRef,
          style: stickyStyle.value
        },
        slots.default?.()
      );
    };

    return () => {
      return h(
        'div',
        {
          class: 'nut-sticky',
          style: rootStyle.value,
          ref: rootRef
        },
        [renderFixed()]
      );
    };
  }
});
</script>
