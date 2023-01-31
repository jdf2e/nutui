<template>
  <view :class="classes">
    <template v-for="item in size" :key="item">
      <view v-if="item === current" :class="`${componentName}--number`">
        {{ (fillZero && padZero(item)) || item }}
      </view>
      <view v-else :class="`${componentName}--dot`"></view>
    </template>
  </view>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { padZero } from '@/packages/utils/util';
const { componentName, create } = createComponent('indicator');

export default create({
  props: {
    size: {
      type: Number,
      default: 3,
      required: true
    },
    current: {
      type: Number,
      default: 1,
      required: true
    },
    block: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center'
    },
    fillZero: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { block, align } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--align__${align.value}`]: block.value && align.value
      };
    });

    return { classes, componentName, padZero };
  }
});
</script>
