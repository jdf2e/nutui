<template>
  <view :class="classes" :ikey="ikey">
    <view class="nut-subsidenavbar__title" @click.stop="handleClick">
      <span class="nut-subsidenavbar__title__text">{{ title }}</span>
      <span class="nut-subsidenavbar__title__icon"><nut-icon name="down-arrow" :class="direction"></nut-icon></span>
    </view>
    <view class="nut-subsidenavbar__list" :class="!direction ? 'nutFadeIn' : 'nutFadeOut'" :style="style">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('subsidenavbar');
export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    ikey: {
      type: [String, Number],
      default: ''
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  emits: ['title-click'],
  setup: (props: any, context: any) => {
    const state = reactive({
      direction: ''
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const style = computed(() => {
      return {
        height: !state.direction ? 'auto' : '0px'
      };
    });

    const handleClick = () => {
      context.emit('title-click');
      state.direction = !state.direction ? 'up' : '';
    };

    onMounted(() => {
      state.direction = props.open ? '' : 'up';
    });

    return {
      ...toRefs(state),
      classes,
      style,
      handleClick
    };
  }
});
</script>
