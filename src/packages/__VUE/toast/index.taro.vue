<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      :class="toastBodyClass"
      v-show="visible"
      :style="{
        bottom: center ? 'auto' : bottom,
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <view
          class="nut-toast-inner"
          :style="{
            'text-align': textAlignCenter ? 'center' : 'left',
            'background-color': bgColor
          }"
        >
          <view v-if="hasIcon" class="nut-toast-icon-wrapper">
            <nut-icon size="20" color="#ffffff" v-bind="$attrs" :name="iconName"></nut-icon>
          </view>
          <div v-if="title" class="nut-toast-title">
            {{ title }}
          </div>
          <view class="nut-toast-text" v-html="msg"></view>
        </view>
      </template>
    </view>
  </Transition>
</template>
<script lang="ts">
import { computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('toast');
import Icon from '../icon/index.taro.vue';
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2000
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    customClass: String,
    bottom: {
      type: String,
      default: '30px'
    },
    size: {
      type: [String, Number],
      default: 'base'
    },
    icon: String,
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },

    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'closed'],
  setup(props, { emit }) {
    let timer;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      emit('update:visible', false);
      emit('closed');
    };
    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = setTimeout(() => {
          hide();
        }, props.duration);
      }
    };
    const clickCover = () => {
      if (props.closeOnClickOverlay) {
        hide();
      }
    };

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          show();
        }
      }
    );

    const hasIcon = computed(() => {
      if (props.type !== 'text') {
        return true;
      } else {
        return !!props.icon;
      }
    });
    const iconName = computed(() => {
      if (props.icon) {
        return props.icon;
      } else {
        return {
          success: 'success',
          fail: 'failure',
          warn: 'tips',
          loading: 'loading'
        }[props.type];
      }
    });
    const toastBodyClass = computed(() => {
      return [
        'nut-toast',
        { 'nut-toast-center': props.center },
        { 'nut-toast-has-icon': hasIcon.value },
        { 'nut-toast-cover': props.cover },
        { 'nut-toast-loading': props.type === 'loading' },
        props.customClass,
        'nut-toast-' + props.size
      ];
    });

    const onAfterLeave = () => {
      if (props.visible) {
        clearTimer();
        hide();
      }
    };

    return {
      clickCover,
      hasIcon,
      iconName,
      toastBodyClass,
      onAfterLeave
    };
  }
});
</script>
