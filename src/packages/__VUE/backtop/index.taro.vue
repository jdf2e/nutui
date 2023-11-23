<template>
  <view>
    <nut-scroll-view
      :scroll-y="true"
      :style="{ height }"
      :scroll-top="scrollTop"
      scroll-with-animation="true"
      @scroll="scroll"
    >
      <slot name="content"></slot>
    </nut-scroll-view>
    <view :class="classes" :style="style" @click.stop="click">
      <slot name="icon">
        <Top width="19px" height="19px" class="nut-backtop-main"></Top>
      </slot>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, computed, toRefs } from 'vue';
import NutScrollView from '../scroll-view/index.taro.vue';
import { createComponent } from '@/packages/utils';
const { componentName, create } = createComponent('backtop');
import { Top } from '@nutui/icons-vue-taro';
export default create({
  components: {
    Top,
    NutScrollView
  },
  props: {
    height: {
      type: String,
      default: '100vh'
    },
    bottom: {
      type: Number,
      default: 20
    },
    right: {
      type: Number,
      default: 10
    },
    zIndex: {
      type: Number,
      default: 10
    },
    distance: {
      type: Number,
      default: 200
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const state = reactive({
      backTop: false,
      scrollTop: 1
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        show: state.backTop
      };
    });
    const style = computed(() => {
      return {
        right: `${props.right}px`,
        bottom: `${props.bottom}px`,
        zIndex: props.zIndex
      };
    });

    const scroll = (e: any) => {
      state.scrollTop = 2;
      state.backTop = e.detail.scrollTop >= props.distance;
    };

    const click = (e: MouseEvent) => {
      state.scrollTop = 1;
      emit('click', e);
    };

    return {
      ...toRefs(state),
      classes,
      style,
      scroll,
      click
    };
  }
});
</script>
