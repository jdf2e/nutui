<template>
  <transition name="toastfade">
    <view
      :id="id"
      :class="toastBodyClass"
      v-if="visible"
      :style="{
        bottom: center ? 'auto' : bottom + 'px',
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
        <view v-if="hasIcon" class="nut-toast-icon-wrapper">
          <nut-icon size="44px" color="#ffffff" :name="icon"></nut-icon>
        </view>
        <view class="nut-toast-text" v-html="msg"></view>
      </view>
    </view>
  </transition>
</template>
<script>
import Icon from '../icon';
import { toRefs, reactive, computed, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('toast');
export default create({
  props: {
    id: String,
    msg: String,
    visible: {
      type: Boolean,
      default: false
    },
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
      type: Number,
      default: 30
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
      default: 'rgba(0, 0, 0, 1)'
    },

    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0)'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'nut-icon': Icon
  },
  setup(props) {
    console.log('props', props);
    let timer;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      clearTimer();
      props.unmount(props.id);
      props.onClose && props.onClose();
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
      console.log('click');
      if (props.closeOnClickOverlay) {
        hide();
      }
    };

    if (props.duration) {
      show();
    }

    watch(
      () => props.duration,
      val => {
        if (val) {
          show();
        }
      }
    );

    const hasIcon = computed(() => {
      console.log(props.type);
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
        { 'nut-loading': props.type == 'loading' },
        props.customClass,
        'nut-toast-' + props.size
      ];
    });
    return {
      hide,
      clickCover,
      hasIcon,
      toastBodyClass
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
