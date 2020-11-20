<template>
  <view :class="classes" @click="handleClick">
    <slot>
      <!-- 左侧  icon-->
      <view class="nut-navbar__left">
        <nut-icon v-if="leftShow" color="#979797" name="left"></nut-icon>
      </view>

      <view class="nut-navbar__title" :class="{ icon: icon }" v-if="title || titIcon">
        <view v-if="title">{{ title }}</view>
        <nut-icon v-if="titIcon" class="icon" :name="titIcon"></nut-icon>
      </view>

      <!-- 右侧  title/icon/多个tit/多个icon-->
      <view class="nut-navbar__right" :class="{ icon: icon }" v-if="desc || icon">
        <view v-if="desc" :style="{ 'text-align': descTextAlign }">{{ desc }}</view>
        <view> <nut-icon v-if="icon" class="icon" :name="icon"></nut-icon></view>
      </view>
    </slot>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/utils/create';
import { useRouter } from 'vue-router';
import Icon from '@/packages/icon/index.vue';
const { componentName, create } = createComponent('navbar');

export default create({
  props: {
    title: { type: String, default: '' },
    leftShow: { type: Boolean, default: true },
    icon: { type: String, default: '' },
    desc: { type: String, default: '' },
    titIcon: { type: String, default: '' }
  },
  components: {
    [Icon.name]: Icon
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.leftShow
      };
    });
    const router = useRouter();

    return {
      //handleClick,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
