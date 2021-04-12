<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { toRefs, computed, onMounted, reactive } from 'vue';
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
    },
    status: {
      validator(value) {
        return ['wait', 'process', 'finish', 'error'].includes(value);
      },
      default: 'process'
    }
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      steps: {}
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['nut-steps-' + props.direction]: true
      };
    });
    onMounted(() => {
      if (slots.default) {
        state.steps = slots.default();
        console.log('slots1', state.steps.length);
        console.log('slots2', state.steps[0].children);
        states();
      }
    });
    function states() {
      const total = state.steps.length;
      state.steps.forEach((child, index) => {
        child.stepNumber = index + 1;
        if (props.direction === 'horizontal') {
          child.total = total;
        }
        console.log('11', child);
        if (!child.currentStatus) {
          if (index == props.current - 1) {
            if (props.status != 'error') {
              child.currentStatus = 'nut-step-process';
            } else {
              child.currentStatus = 'error';
            }
          } else if (index < props.current) {
            child.currentStatus = 'nut-step-finish';
          } else {
            child.currentStatus = 'nut-step-wait';
          }
        }
        if (index + 1 === total) {
          child.currentStatus += 'nut-step-last';
        }
      });
    }
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
