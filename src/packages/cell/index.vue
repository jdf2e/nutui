<template>
  <view :class="classes" @click="handleClick">
    <view class="nut-cell__title">
      <template v-if="subTitle">
        <view class="title">{{ title }}</view>
        <view class="nut-cell__title-desc">{{ subTitle }}</view>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </view>
    <view class="nut-cell__value">{{ desc }}</view>
    <nut-icon v-if="isLink || to" name="right"></nut-icon>
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { toRefs, computed, PropType } from 'vue';
import { createComponent } from '@/utils/create';
import { useRouter } from 'vue-router';
import Icon from '@/packages/icon/index.vue';
const { componentName, create } = createComponent('cell');

export default create({
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    isLink: { type: Boolean, default: false },
    to: { type: String, default: '' },
    replace: { type: Boolean, default: false },
    url: { type: String, default: '' }
  },
  components: {
    [Icon.name]: Icon
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const { title, to, desc, subTitle, isLink, url, replace } = toRefs(props);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: isLink.value || to
      };
    });

    const router = useRouter();

    const handleClick = (event: Event) => {
      emit('click', event);
      debugger;
      if (to.value && router) {
        router[replace ? 'replace' : 'push'](to.value);
      } else if (url.value) {
        replace ? location.replace(url.value) : (location.href = url.value);
      }
    };

    return {
      handleClick,
      title,
      to,
      subTitle,
      desc,
      classes,
      isLink
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
