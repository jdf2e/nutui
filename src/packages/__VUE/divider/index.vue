<template>
  <view :class="classes" v-if="direction === 'horizontal'">
    <slot></slot>
  </view>
  <view :class="classes" v-else></view>
</template>
<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('divider');

export default create({
  props: {
    contentPosition: {
      type: String,
      default: 'center'
    },
    dashed: {
      type: Boolean,
      default: false
    },
    hairline: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  components: {},

  setup(props, context) {
    const classes = computed(() => {
      const prefixCls = componentName;

      let defaultClassesObj = {
        [prefixCls]: true
      };

      let classesObj = {};

      if (props.direction === 'horizontal') {
        classesObj = {
          ...defaultClassesObj,
          [`${prefixCls}-center`]: context.slots.default,
          [`${prefixCls}-left`]: props.contentPosition === 'left',
          [`${prefixCls}-right`]: props.contentPosition === 'right',
          [`${prefixCls}-dashed`]: props.dashed,
          [`${prefixCls}-hairline`]: props.hairline
        };
      } else {
        classesObj = {
          ...defaultClassesObj,
          [`${prefixCls}-vertical`]: props.direction === 'vertical'
        };
      }

      return classesObj;
    });

    return { classes };
  }
});
</script>
