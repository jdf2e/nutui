<template>
  <view :class="classes">
    <view class="nut-navbar__left">
      <nut-icon v-if="leftShow" color="#979797" name="left" @click="handleLeft"></nut-icon>
      <slot name="left"></slot>
    </view>

    <view class="nut-navbar__title" :class="{ icon }">
      <view v-if="title" @click="handleCenter">{{ title }}</view>
      <nut-icon v-if="titIcon" class="icon" :name="titIcon" @click="handleCenterIcon"></nut-icon>
      <slot name="content"></slot>
    </view>

    <view class="nut-navbar__right" :class="{ icon }">
      <view v-if="desc" class="right_text" :style="{ 'text-align': descTextAlign }" @click="handleRight">{{
        desc
      }}</view>
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('navbar');
export default create({
  props: {
    leftShow: { type: Boolean, default: true }, //左侧  是否显示返回icon
    title: { type: String, default: '' }, //中间  文字标题
    titIcon: { type: String, default: '' }, //中间  标题icon
    desc: { type: String, default: '' }, //右侧   按钮文字
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['click', 'on-click-back', 'on-click-title', 'on-click-icon', 'on-click-right'],
  setup(props, { emit }) {
    const activeIndex = ref(props.defaultIndex);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
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
      classes,
      handleLeft,
      handleCenter,
      handleCenterIcon,
      handleRight,
      activeIndex
    };
  }
});
</script>
