<template>
  <view>
    <Nut-Scroll-View
      :scroll-y="true"
      :style="{ height }"
      @scroll="scroll"
      :scroll-top="scrollTop"
      scroll-with-animation="true"
    >
      <slot name="content"></slot>
    </Nut-Scroll-View>
    <view :class="classes" :style="style" @click.stop="click">
      <slot name="icon">
        <nut-icon size="19px" class="nut-backtop-main" name="top"></nut-icon>
      </slot>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, computed, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import NutScrollView from '../scrollView/index.taro.vue';
const { componentName, create } = createComponent('backtop');
export default create({
  components: {
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
