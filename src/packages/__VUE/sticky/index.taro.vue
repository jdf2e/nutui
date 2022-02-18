<script lang="ts">
import { reactive, computed, h, ref, Ref, unref, PropType, watch, CSSProperties } from 'vue';
import Taro, { usePageScroll, useReady } from '@tarojs/taro';
import { createComponent } from '../../utils/create';
import { useTaroRect } from '../../utils/useTaroRect';
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
    const query = Taro.createSelectorQuery();
    const refRandomId = Math.random().toString(36).slice(-8);
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
      return new Promise((resolve, reject) => {
        query
          .select(`#${el.id}`)
          .fields(
            {
              computedStyle: ['display', 'position']
            },
            (res) => {
              const hidden = res.display === 'none';
              const parentHidden = el.offsetParent === null && res.position !== 'fixed';
              resolve(hidden || parentHidden);
            }
          )
          .exec();
      });
    };

    const isExistRoot = async () => {
      const hidden = await isHidden(root);
      if (!root.value || hidden) return false;
      return true;
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

    const onScroll = async (scrollTop: number) => {
      if (!isExistRoot()) return;

      const { container, position } = props;

      const rootRect = await useTaroRect(root, Taro);

      if (rootRect.width || rootRect.height) {
        state.width = rootRect.width;
        state.height = rootRect.height;
      }

      if (position === 'top') {
        if (container) {
          const containerRect = await useTaroRect(container, Taro);
          const diff = containerRect.bottom - +offset.value - state.height;
          state.fixed = +offset.value > rootRect.top && containerRect.bottom > 0;
          state.transform = diff < 0 ? diff : 0;
        } else {
          state.fixed = offset.value > rootRect.top;
        }
      } else if (position === 'bottom') {
        const clientHeight = Taro.getSystemInfoSync().windowHeight;
        if (container) {
          const containerRect = await useTaroRect(container, Taro);
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

    Taro.usePageScroll((res) => {
      onScroll(res.scrollTop);
    });

    Taro.useReady(() => {
      onScroll(0);
    });

    return () => {
      return h(
        'view',
        {
          style: rootStyle.value,
          id: `root-${refRandomId}`,
          ref: root
        },
        [renderFixed()]
      );
    };
  }
});
</script>
