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
    <view :class="classes" :style="style" @click.stop="handleClick">
      <slot name="icon">
        <Top size="19" class="nut-backtop-main"></Top>
      </slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import NutScrollView from '../scroll-view/index.taro.vue';
import { Top } from '@nutui/icons-vue-taro';

export type BacktopProps = Partial<{
  height: string;
  bottom: number;
  right: number;
  distance: number;
  zIndex: number;
}>;

const props = withDefaults(defineProps<BacktopProps>(), {
  height: '100vh',
  bottom: 20,
  right: 10,
  distance: 200,
  zIndex: 10
});

const emit = defineEmits(['click']);

const backTop = ref(false);
const scrollTop = ref(1);
const scroll = (e: any) => {
  scrollTop.value = 2;
  backTop.value = e.detail.scrollTop >= props.distance;
};

const classes = computed(() => {
  const prefixCls = 'nut-backtop';
  return {
    [prefixCls]: true,
    show: backTop.value
  };
});

const style = computed(() => {
  return {
    right: `${props.right}px`,
    bottom: `${props.bottom}px`,
    zIndex: props.zIndex
  };
});

const handleClick = (e: MouseEvent) => {
  scrollTop.value = 1;
  emit('click', e);
};
</script>
