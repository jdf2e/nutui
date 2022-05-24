<template>
  <view v-if="fixed && placeholder" class="nut-navbar--placeholder" ref="navBarWrap">
    <view :class="classes" ref="navBarHtml">
      <view class="nut-navbar__left">
        <nut-icon v-if="leftShow" color="#979797" name="left" @click="handleLeft"></nut-icon>
        <slot name="left"></slot>
      </view>

      <view class="nut-navbar__title">
        <view v-if="title" class="title" @click="handleCenter">{{ title }}</view>
        <nut-icon v-if="titIcon" class="icon" :name="titIcon" @click="handleCenterIcon"></nut-icon>
        <slot name="content"></slot>
      </view>

      <view class="nut-navbar__right">
        <view v-if="desc" class="right_text" @click="handleRight">{{ desc }}</view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
  <view v-else :class="classes" ref="navBar">
    <view class="nut-navbar__left">
      <nut-icon v-if="leftShow" color="#979797" name="left" @click="handleLeft"></nut-icon>
      <slot name="left"></slot>
    </view>
    <view class="nut-navbar__title">
      <view v-if="title" class="title" @click="handleCenter">{{ title }}</view>
      <nut-icon v-if="titIcon" class="icon" :name="titIcon" @click="handleCenterIcon"></nut-icon>
      <slot name="content"></slot>
    </view>

    <view class="nut-navbar__right">
      <view v-if="desc" class="right_text" @click="handleRight">{{ desc }}</view>
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { onMounted, computed, toRefs, ref, nextTick } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('navbar');
export default create({
  props: {
    leftShow: { type: Boolean, default: true }, //左侧  是否显示返回icon
    title: { type: String, default: '' }, //中间  文字标题
    titIcon: { type: String, default: '' }, //中间  标题icon
    desc: { type: String, default: '' }, //右侧   按钮文字
    fixed: {
      type: Boolean,
      default: false
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Boolean,
      default: true
    }
  },
  emits: ['on-click-back', 'on-click-title', 'on-click-icon', 'on-click-right'],
  setup(props, { emit }) {
    const { fixed, safeAreaInsetTop, placeholder } = toRefs(props);
    const navBarWrap = ref(null);
    const navBarHtml = ref(null);
    let navHeight = ref(0);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--fixed`]: fixed.value,
        [`${prefixCls}--safe-area-inset-top`]: safeAreaInsetTop.value
      };
    });

    onMounted(() => {
      if (fixed.value && placeholder.value) {
        nextTick(() => {
          navHeight = navBarHtml?.value?.getBoundingClientRect().height;
          navBarWrap.value.style.height = navHeight + 'px';
        });
      }
    });

    function handleLeft() {
      emit('on-click-back');
    }

    function handleCenter() {
      emit('on-click-title');
    }
    function handleCenterIcon() {
      emit('on-click-icon');
    }

    function handleRight() {
      emit('on-click-right');
    }

    return {
      navBarWrap,
      navBarHtml,
      classes,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleRight
    };
  }
});
</script>
