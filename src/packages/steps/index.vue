<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { toRefs, computed, onMounted } from 'vue';
import step from '@/packages/step/index.vue';
import { createComponent } from '@/utils/create';
const { create, componentName } = createComponent('steps');

export default create({
  children: [step],
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    current: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['nut-steps-' + props.direction]: true
      };
    });
    onMounted(() => {
      console.log('slots', slots);
      console.log('slots', slots.children);
    });
    const states = computed(() => {
      console.log('slots', slots);
      this.steps = this.$slots.default
        .filter(vnode => !!vnode.componentInstance)
        .map(node => node.componentInstance);
      const total = this.steps.length;
      this.steps.forEach((child, index) => {
        child.stepNumber = index + 1;
        if (this.direction === 'horizontal') {
          child.total = total;
        }
        // 如果已存在status,且在初始化时,则略过
        // todo 如果当前是error,在current改变时需要处理
        if (!(isInit && child.currentStatus)) {
          if (index == this.current - 1) {
            if (this.status != 'error') {
              child.currentStatus = 'process';
            } else {
              child.currentStatus = 'error';
            }
          } else if (index < this.current) {
            child.currentStatus = 'finish';
          } else {
            child.currentStatus = 'wait';
          }
        }
        if (index + 1 === total) {
          child.currentStatus += ' nut-step-last';
        }
      });
    });
    return {
      classes,
      states
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
