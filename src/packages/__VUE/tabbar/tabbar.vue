<template>
  <div :class="{ 'nut-tabbar__placeholder': bottom && placeholder }" :style="{ height: height + 'px' }">
    <view ref="nutTabbar" :class="classes">
      <slot></slot>
    </view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from 'vue';
import { useChildren } from '@/packages/utils';
import { TABBAR_KEY } from './types';

defineOptions({
  name: 'NutTabbar'
});

export type TabbarProps = Partial<{
  modelValue: number | string;
  bottom: boolean;
  unactiveColor: string;
  activeColor: string;
  safeAreaInsetBottom: boolean;
  placeholder: boolean;
}>;

const props = withDefaults(defineProps<TabbarProps>(), {
  modelValue: 0,
  bottom: false,
  unactiveColor: '',
  activeColor: '',
  safeAreaInsetBottom: false,
  placeholder: false
});

const emit = defineEmits(['tabSwitch', 'update:modelValue']);

const height = ref<number | undefined>();
const nutTabbar = ref<HTMLElement | null>(null);

const classes = computed(() => {
  const prefixCls = 'nut-tabbar';
  return {
    [prefixCls]: true,
    'nut-tabbar-bottom': props.bottom,
    'nut-tabbar-safebottom': props.safeAreaInsetBottom
  };
});

const { children, linkChildren } = useChildren(TABBAR_KEY);

const changeIndex = (index: number, active: number | string) => {
  emit('update:modelValue', active);
  emit('tabSwitch', children[index], active);
};

linkChildren({ props, changeIndex });

const updateHeight = () => {
  if (props.bottom && props.placeholder) {
    nextTick(() => {
      const nutTabbarHeight = nutTabbar.value?.getBoundingClientRect().height;
      if (nutTabbarHeight) {
        height.value = nutTabbarHeight;
      }
    });
  }
};

onMounted(updateHeight);
</script>
