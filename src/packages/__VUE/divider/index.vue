<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { login } from '@tarojs/taro';
import { computed, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
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
    }
  },
  components: {},

  setup(props, context) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-center`]: context.slots.default,
        [`${prefixCls}-left`]: props.contentPosition === 'left',
        [`${prefixCls}-right`]: props.contentPosition === 'right',
        [`${prefixCls}-dashed`]: props.dashed,
        [`${prefixCls}-hairline`]: props.hairline
      };
    });

    return { classes };
  }
});
</script>
