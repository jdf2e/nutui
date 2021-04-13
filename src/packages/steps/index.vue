<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import {
  provide,
  computed,
  onMounted,
  reactive,
  watch,
  onBeforeMount
} from 'vue';
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
      default: 'false'
    },
    status: {
      validator(value) {
        return ['wait', 'process', 'finish', 'error'].includes(value);
      },
      default: 'process'
    },
    progressDot: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      steps: {},
      children: []
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['nut-steps-' + props.direction]: true,
        [props.progressDot ? 'nut-steps-dot' : '']: true
      };
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
      init();
    });
    onMounted(() => {
      console.log('onMounted');
      // init();
    });
    // watch(
    //   () => props.current,
    //   val => {
    //     console.log()
    //     states();
    //   }
    // );
    // watch(
    //   () =>  props.source,
    //   val => {
    //     init();
    //   }
    // )
    const init = () => {
      state.steps = (slots as any)?.default();
      stepStates();
    };
    const stepStates = () => {
      if (props.progressDot) {
        console.log('state.steps', state.steps);
        state.steps.dot = true;
      }
      const total = state.steps.length;
      state.steps.forEach((child, index) => {
        child.stepNumber = index + 1;

        state.children = index;
        // console.log('data', state.children)

        if (props.direction === 'horizontal') {
          child.total = total;
        }
        // console.log('父', child);
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
          child.currentStatus += ' nut-step-last';
        }
      });
    };
    // provide('parent', {
    //   slots
    // });
    provide('stepsParent', {
      props,
      state
    });
    return {
      classes,
      stepStates
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
