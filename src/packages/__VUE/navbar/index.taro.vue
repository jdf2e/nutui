<template>
  <view class="nut-navbar--placeholder" :style="rootStyle">
    <view :id="'navbarRef-' + refRandomId" :class="classes" :style="{ zIndex }" ref="navbarRef">
      <view class="nut-navbar__left" @click="handleLeft">
        <slot name="left-show" v-if="leftShow">
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

<script lang="ts">
import { onMounted, computed, toRefs, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Left } from '@nutui/icons-vue-taro';
import { useTaroRect } from '@/packages/utils/useTaroRect';
const { componentName, create } = createComponent('navbar');
export default create({
  components: { Left },
  props: {
    leftShow: { type: Boolean, default: false }, //左侧  是否显示返回icon
    title: { type: String, default: '' }, //中间  文字标题
    titleIcon: { type: Boolean, default: false }, //中间
    leftText: { type: String, default: '' }, //左侧文字
    desc: { type: String, default: '' }, //右侧   按钮文字
    fixed: {
      type: Boolean,
      default: false
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    placeholder: {
      // 生成一个等高的占位元素
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: 10
    }
  },
  emits: ['on-click-back', 'on-click-title', 'on-click-icon', 'on-click-right'],
  setup(props, { emit }) {
    const { border, fixed, safeAreaInsetTop, placeholder } = toRefs(props);
    const refRandomId = Math.random().toString(36).slice(-8);
    const navHeight = ref('auto');
    const navbarRef = ref(null);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: border.value,
        [`${prefixCls}--fixed`]: fixed.value,
        [`${prefixCls}--safe-area-inset-top`]: safeAreaInsetTop.value
      };
    });

    const rootStyle = computed(() => {
      if (fixed.value && placeholder.value) {
        return {
          height: navHeight.value
        };
      }
      return {};
    });

    const getNavHeight = () => {
      useTaroRect(navbarRef).then((rect: any) => {
        navHeight.value = `${rect.height}px`;
      });
    };

    onMounted(() => {
      if (fixed.value && placeholder.value) {
        setTimeout(() => {
          getNavHeight();
        }, 100);
      }
    });

    const handleLeft = () => {
      emit('on-click-back');
    };

    const handleCenter = () => {
      emit('on-click-title');
    };

    const handleCenterIcon = () => {
      emit('on-click-icon');
    };

    const handleRight = () => {
      emit('on-click-right');
    };

    return {
      refRandomId,
      navbarRef,
      rootStyle,
      classes,
      navHeight,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleRight
    };
  }
});
</script>
