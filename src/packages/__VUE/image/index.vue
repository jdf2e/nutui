<template>
  <view :class="classes" :style="stylebox" @click="imageClick">
    <img class="nut-img" :src="src" :alt="alt" @load="load" @error="error" :style="styles" />

    <view class="nut-img-loading" v-if="loading">
      <nut-icon name="image" v-if="!slotLoding"></nut-icon>
      <slot name="loading"></slot>
    </view>

    <view class="nut-img-error" v-if="isError && !loading">
      <nut-icon name="image-error" v-if="!slotError"></nut-icon>
      <slot name="error"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, PropType, useSlots, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '../../utils/pxCheck';
const { componentName, create } = createComponent('image');
export default create({
  props: {
    src: String,
    fit: {
      type: String as PropType<import('./type').ImageFit>,
      default: 'fill'
    },
    position: {
      type: String as PropType<import('./type').ImagePosition>,
      default: 'center'
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'center'
    },
    height: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    radius: [String, Number],
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click', 'load', 'error'],

  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      isError: false,
      slotLoding: useSlots().loading,
      slotError: useSlots().error
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-round`]: props.round
      };
    });
    const stylebox = computed(() => {
      let style: {
        height?: string;
        width?: string;
        overflow?: string;
        borderRadius?: any;
      } = {};

      if (props.width) style.width = pxCheck(props.width);
      if (props.height) style.height = pxCheck(props.height);

      if (props.radius !== undefined && props.radius !== null) {
        style.overflow = 'hidden';
        style.borderRadius = pxCheck(props.radius);
      }

      return style;
    });
    const styles = computed(() => {
      let styless: {
        objectFit: string;
        objectPosition: string;
      } = {
        objectFit: props.fit,
        objectPosition: props.position
      };

      return styless;
    });

    watch(
      () => props.src,
      (val) => {
        (state.isError = false), (state.loading = true);
      }
    );
    // 图片加载
    const load = () => {
      state.loading = false;
      emit('load');
    };
    // 图片加载失败
    const error = () => {
      state.isError = true;
      state.loading = false;
      emit('error');
    };

    const imageClick = (event: Event) => {
      emit('click', event);
    };

    return { ...toRefs(state), imageClick, classes, styles, stylebox, error, load };
  }
});
</script>
