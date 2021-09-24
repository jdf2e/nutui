<template>
  <view :class="classes" :style="baseStyle" @click="handleClick">
    <slot>
      <view
        class="nut-cell__title"
        :class="{ icon: icon || $slots.icon }"
        v-if="title || subTitle || icon"
      >
        <slot v-if="$slots.icon" name="icon"></slot>
        <nut-icon v-else-if="icon" class="icon" :name="icon"></nut-icon>
        <template v-if="subTitle">
          <view class="title">{{ title }}</view>
          <view class="nut-cell__title-desc">{{ subTitle }}</view>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </view>
      <view
        v-if="desc"
        class="nut-cell__value"
        :style="{ 'text-align': descTextAlign }"
        >{{ desc }}</view
      >

      <slot v-if="$slots.link" name="link"></slot>
      <nut-icon
        v-else-if="isLink || to"
        class="nut-cell__link"
        name="right"
      ></nut-icon>
    </slot>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '../../utils/create';
import { useRouter } from 'vue-router';
import { pxCheck } from '@/packages/utils/pxCheck';
const { componentName, create } = createComponent('cell');
export default create({
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    descTextAlign: { type: String, default: 'right' },
    isLink: { type: Boolean, default: false },
    to: [String, Object],
    replace: { type: Boolean, default: false },
    roundRadius: { type: [String, Number], default: '' },
    url: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.isLink || props.to
      };
    });
    const router = useRouter();

    const baseStyle = computed(() => {
      return {
        borderRadius: pxCheck(props.roundRadius)
      };
    });

    const handleClick = (event: Event) => {
      emit('click', event);

      if (props.to && router) {
        router[props.replace ? 'replace' : 'push'](props.to);
        // if(props.replace){
        //   router.replace(props.to)
        // }else{
        //    router.push(props.to)
        // }
      } else if (props.url) {
        props.replace
          ? location.replace(props.url)
          : (location.href = props.url);
      }
    };

    return {
      handleClick,
      classes,
      baseStyle
    };
  }
});
</script>
