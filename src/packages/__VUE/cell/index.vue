<template>
  <view :class="classes" @click="handleClick">
    <slot>
      <view
        class="nut-cell__title"
        :class="{ icon: icon }"
        v-if="title || subTitle || icon"
      >
        <nut-icon v-if="icon" class="icon" :name="icon"></nut-icon>
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
import { createComponent } from '@/packages/utils/create';
import { useRouter } from 'vue-router';
import CellGroup from '@/packages/__VUE/cellgroup/index.vue';
const { componentName, create } = createComponent('cell');
export default create({
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    desc: { type: String, default: '' },
    descTextAlign: { type: String, default: 'right' },
    isLink: { type: Boolean, default: false },
    to: { type: String, default: '' },
    replace: { type: Boolean, default: false },
    url: { type: String, default: '' },
    icon: { type: String, default: '' }
  },
  emits: ['click'],
  children: [CellGroup],
  components: {
    [CellGroup.name]: CellGroup
  },
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--clickable`]: props.isLink || props.to
      };
    });
    const router = useRouter();
    const handleClick = (event: Event) => {
      emit('click', event);
      if (props.to && router) {
        router[props.replace ? 'replace' : 'push'](props.to);
      } else if (props.url) {
        props.replace
          ? location.replace(props.url)
          : (location.href = props.url);
      }
    };

    return {
      handleClick,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
