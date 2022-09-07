<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      :class="toastBodyClass"
      v-show="state.mounted"
      :style="{
        bottom: center ? 'auto' : bottom,
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <view
        class="nut-toast-inner"
        :style="{
          'text-align': textAlignCenter ? 'center' : 'left',
          'background-color': bgColor
        }"
      >
        <view v-if="hasIcon" :class="toastIconWrapperClass">
          <nut-icon :size="iconSize" v-bind="$attrs" color="#ffffff" :name="icon"></nut-icon>
        </view>
        <div v-if="title" class="nut-toast-title">
          {{ title }}
        </div>
        <view class="nut-toast-text" v-html="msg"></view>
      </view>
    </view>
  </Transition>
</template>
<script lang="ts">
import { toRefs, toRef, reactive, computed, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('toast');
import Icon from '../icon/index.vue';
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
    type: String,
    customClass: String,
    bottom: {
      type: String,
      default: '30px'
    },
    size: {
      type: [String, Number],
      default: 'base'
    },
    iconSize: {
      type: String,
      default: '20'
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
    }
  },
  emits: ['close'],
  setup(props: any, { emit }) {
    let timer: number | null | undefined;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      state.mounted = false;
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
        emit('close');
      }
    };

    if (props.duration) {
      show();
    }

    watch(
      () => props.duration,
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
    const toastIconWrapperClass = computed(() => {
      return ['nut-toast-icon-wrapper', { 'nut-toast-icon-no-animation': !props.loadingRotate }];
    });
    const onAfterLeave = () => {
      clearTimer();
      props.unmount(props.id);
      props.onClose && props.onClose();
    };

    return {
      state,
      hide,
      clickCover,
      hasIcon,
      toastBodyClass,
      toastIconWrapperClass,
      onAfterLeave
    };
  }
});
</script>
