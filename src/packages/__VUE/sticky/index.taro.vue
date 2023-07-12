<template>
  <div class="nut-sticky" ref="rootRef" :style="rootStyle">
    <div class="nut-sticky__box" ref="stickyRef" :style="stickyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, watch, CSSProperties, onMounted, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import { usePageScroll } from '@tarojs/taro';
const { create } = createComponent('sticky');
export default create({
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement>();
    const stickyRef = ref<HTMLElement>();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0
    });
    const threshold = computed(() => {
      return Number(props.top);
    });
    const rootStyle = computed<CSSProperties | undefined>(() => {
      if (state.fixed) return { height: `${state.height}px` };
      return {};
    });
    const stickyStyle = computed<CSSProperties>(() => {
      if (!state.fixed) return {};
      return {
        top: `${threshold.value}px`,
        height: `${state.height}px`,
        width: `${state.width}px`,
        position: state.fixed ? 'fixed' : undefined,
        zIndex: Number(props.zIndex)
      };
    });
    const handleScroll = () => {
      console.log('handleScroll');
      useTaroRect(rootRef).then((rootRect: any) => {
        state.height = rootRect.height;
        state.width = rootRect.width;
        state.fixed = threshold.value > rootRect.top;
      });
    };
    watch(
      () => state.fixed,
      (val) => {
        emit('change', val);
      }
    );
    usePageScroll(handleScroll);
    onMounted(() => {
      handleScroll();
    });
    return { rootRef, rootStyle, stickyRef, stickyStyle };
  }
});
</script>
