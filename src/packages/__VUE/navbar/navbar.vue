<template>
  <view class="nut-navbar--placeholder" :style="rootStyle">
    <view ref="navbarRef" :class="classes" :style="{ zIndex }">
      <view class="nut-navbar__left" @click="handleLeft">
        <slot v-if="leftShow" name="left-show">
          <Left height="12px" color="#979797"></Left>
        </slot>
        <view v-if="leftText" class="nut-navbar__text">{{ leftText }}</view>
        <slot name="left"></slot>
      </view>
      <view class="nut-navbar__title">
        <view v-if="title" class="title" @click="handleCenter">{{ title }}</view>
        <view v-if="titleIcon" class="icon" @click="handleCenterIcon">
          <slot name="title-icon" @click="handleCenterIcon"></slot>
        </view>
        <slot name="content"></slot>
      </view>
      <view class="nut-navbar__right" @click="handleRight">
        <view v-if="desc" class="nut-navbar__text">{{ desc }}</view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from 'vue';
import { Left } from '@nutui/icons-vue';

defineOptions({
  name: 'NutNavbar'
});

export type NavbarProps = Partial<{
  leftShow: boolean;
  title: string;
  titleIcon: boolean;
  leftText: string;
  desc: string;
  fixed: boolean;
  safeAreaInsetTop: boolean;
  border: boolean;
  placeholder: boolean;
  zIndex: string | number;
}>;

const props = withDefaults(defineProps<NavbarProps>(), {
  leftShow: false,
  title: '',
  titleIcon: false,
  leftText: '',
  desc: '',
  fixed: false,
  safeAreaInsetTop: false,
  border: false,
  placeholder: true,
  zIndex: 10
});

const emit = defineEmits([
  'clickBack',
  'clickTitle',
  'clickIcon',
  'clickRight',
  // will be deprecated
  'onClickBack',
  'onClickTitle',
  'onClickIcon',
  'onClickRight'
]);

const navHeight = ref('auto');
const navbarRef = ref<HTMLElement>();
const classes = computed(() => {
  const prefixCls = 'nut-navbar';
  return {
    [prefixCls]: true,
    [`${prefixCls}--border`]: props.border,
    [`${prefixCls}--fixed`]: props.fixed,
    [`${prefixCls}--safe-area-inset-top`]: props.safeAreaInsetTop
  };
});

const rootStyle = computed(() => {
  if (props.fixed && props.placeholder) {
    return {
      height: navHeight.value
    };
  }
  return {};
});

const getNavHeight = () => {
  if (navbarRef.value) {
    const rect = navbarRef.value.getBoundingClientRect();
    navHeight.value = `${rect.height}px`;
  }
};

onMounted(() => {
  if (props.fixed && props.placeholder) {
    nextTick(() => {
      getNavHeight();
    });
  }
});

const handleLeft = () => {
  emit('clickBack');
  emit('onClickBack');
};

const handleCenter = () => {
  emit('clickTitle');
  emit('onClickTitle');
};

const handleCenterIcon = () => {
  emit('clickIcon');
  emit('onClickIcon');
};

const handleRight = () => {
  emit('clickRight');
  emit('onClickRight');
};
</script>
