<template>
  <div class="nut-sticky" ref="rootRef" :style="rootStyle" :id="'rootRef-' + refRandomId">
    <div class="nut-sticky__box" :style="stickyStyle">
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
    },
    scrollTop: {
      type: [Number, String],
      defualt: -1
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const rootRef = ref<HTMLElement>();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0
    });
    const rootStyle = computed<CSSProperties | undefined>(() => {
      if (state.fixed) return { height: `${state.height}px` };
      return {};
    });
    const stickyStyle = computed<CSSProperties>(() => {
      if (!state.fixed) return {};
      return {
        top: `${props.top}px`,
        height: `${state.height}px`,
        width: `${state.width}px`,
        position: state.fixed ? 'fixed' : undefined,
        zIndex: Number(props.zIndex)
      };
    });
    const handleScroll = () => {
      useTaroRect(rootRef).then(
        (rootRect: any) => {
          state.height = rootRect.height;
          state.width = rootRect.width;
          state.fixed = Number(props.top) >= rootRect.top;
        },
        () => {}
      );
    };
    watch(
      () => state.fixed,
      (val) => {
        emit('change', val);
      }
    );
    if (props.scrollTop !== -1) {
      usePageScroll(handleScroll);
    } else {
      watch(() => props.scrollTop, handleScroll);
    }
    onMounted(handleScroll);
    return { rootRef, rootStyle, stickyStyle, refRandomId };
  }
});
</script>
