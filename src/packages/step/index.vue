<template>
  <view :class="classes">
    <view class="nut-step-head">
      <view class="nut-step-line"></view>
      <view
        class="nut-step-icon"
        :class="[!state.dot ? (icon ? 'is-icon' : 'is-text') : '']"
      >
        <template v-if="icon">
          <nut-icon class="nut-step-icon-inner" :class="icon" />
        </template>
        <template v-else-if="state.dot"></template>
        <template v-else>
          <view class="nut-step-inner">{{ state.index }}</view>
        </template>
      </view>
    </view>
    <view class="nut-step-main">
      <view class="nut-step-title">
        {{ title }}
      </view>
      <view class="nut-step-content">
        {{ content }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, computed, inject } from 'vue';
import { createComponent } from '@/utils/create';
const { create, componentName } = createComponent('step');

export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null
    },
    data: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const steps: any = inject('stepsParent');
    const defaults = context.slots?.default();
    console.log('defaults', context.slots);
    console.log('steps', steps.props.progressDot);
    const state = reactive({
      data: [],
      index: context.slots.default()[0]?.children - 1,
      dot: steps.props.progressDot
    });
    console.log('dot', state.dot);
    // console.log('context', steps.state.steps[state.index])
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [props.status
          ? 'nut-step-' + props.status
          : steps.state.steps[state.index].currentStatus]: true
      };
    });
    return {
      state,
      classes
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
