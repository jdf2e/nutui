<template>
  <view :class="classes">
    <view class="nut-step-head">
      <view class="nut-step-line"></view>
      <view
        class="nut-step-icon"
        :class="[!dot ? (icon ? 'is-icon' : 'is-text') : '']"
      >
        <template v-if="icon">
          <nut-icon class="nut-step-icon-inner" :name="icon" />
        </template>
        <template v-else-if="dot"></template>
        <template v-else>
          <view class="nut-step-inner">{{ index }}</view>
        </template>
      </view>
    </view>
    <view class="nut-step-main">
      <view class="nut-step-title">
        {{ title }}
      </view>
      <view class="nut-step-content" v-html="content"> </view>
    </view>
  </view>
</template>

<script lang="ts">
import {
  reactive,
  computed,
  inject,
  toRefs,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue';
import { createComponent } from '@/packages/utils/create';
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
    }
  },

  setup(props, { emit, slots }) {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance;
    const parent: any = inject('parent');
    parent['relation'](proxy);

    const state = reactive({
      dot: parent.props.progressDot
    });

    const index = computed(() => parent.state.children.indexOf(proxy) + 1);

    const getCurrentStatus = () => {
      const activeIndex = index.value;
      if (activeIndex < +parent.props.current) return 'finish';
      return activeIndex === +parent.props.current ? 'process' : 'wait';
    };

    const status = computed(() => {
      return getCurrentStatus();
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-${status.value}`]: true
      };
    });

    return {
      ...toRefs(state),
      index,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
