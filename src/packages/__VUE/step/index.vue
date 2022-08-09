<template>
  <view :class="classes" @click="handleClickStep">
    <view class="nut-step-head">
      <view class="nut-step-line"></view>
      <view class="nut-step-icon" :class="[!dot ? (icon ? 'is-icon' : 'is-text') : '']">
        <template v-if="icon">
          <nut-icon class="nut-step-icon-inner" v-bind="$attrs" :color="iconColor" :name="icon" :size="size" />
        </template>
        <template v-else-if="dot"></template>
        <template v-else>
          <view class="nut-step-inner">{{ index }}</view>
        </template>
      </view>
    </view>
    <view class="nut-step-main">
      <view class="nut-step-title">
        <span v-if="!$slots.title">{{ title }}</span>
        <slot name="title"></slot>
      </view>
      <view class="nut-step-content" v-if="content || $slots.content">
        <span v-if="!$slots.content" v-html="content"></span>
        <slot name="content"></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, computed, inject, toRefs, getCurrentInstance, ComponentInternalInstance } from 'vue';
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
    },
    iconColor: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: '12px'
    }
  },
  emits: ['click-step'],

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

    const handleClickStep = () => {
      parent['onEmit'](index.value);
    };

    return {
      ...toRefs(state),
      index,
      classes,
      handleClickStep
    };
  }
});
</script>
