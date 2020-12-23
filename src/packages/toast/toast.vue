<template>
  <transition name="toastfade">
    <div
      :id="id"
      :class="toastBodyClass"
      v-if="state.visible"
      :style="{
        bottom: center ? 'auto' : state.bottom + 'px',
        'background-color': state.coverColor
      }"
      @click="clickCover"
    >
      <div
        class="nut-toast-inner"
        :class="state.toastClass"
        :style="{
          'text-align': state.textAlignCenter ? 'center' : 'left',
          'background-color': state.bgColor,
          ...state.toastStyle
        }"
      >
        <span v-if="hasIcon" class="nut-toast-icon-wrapper">
          <i
            :class="[
              'nut-toast-icon',
              type,
              {
                'nut-toast-icon-rotate':
                  type === 'loading' && state.loadingRotate
              }
            ]"
            :style="{ 'background-image': cusIcon }"
          ></i>
        </span>
        <span class="nut-toast-text" v-html="msg"></span>
      </div>
    </div>
  </transition>
</template>
<script>
import { toRefs, reactive, computed, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('toast');
export default create({
  props: {
    id: {
      type: String
    },
    msg: {
      type: String,
      default: ''
    },
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
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    console.log('props', props);
    const { msg, visible, center, type } = toRefs(props);
    const state = reactive({
      id: '',
      msg: 'sadsadsa',
      visible: visible.value,
      duration: 2000, //显示时间(毫秒)
      timer: null,
      center: true,
      type: '',
      customClass: '',
      bottom: 30,
      size: 'base',
      icon: null,
      textAlignCenter: true,
      loadingRotate: true,
      bgColor: 'rgba(0, 0, 0, 1)',
      onClose: null,
      textTimer: null,
      cover: false,
      coverColor: 'rgba(0, 0, 0, 0)',
      toastStyle: {},
      toastClass: '',
      timeStamp: null,
      closeOnClickOverlay: false
    });
    const clearTimer = () => {
      if (state.timer) {
        clearTimeout(state.timer);
        state.timer = null;
      }
    };
    const hide = force => {
      clearTimer();
      state.visible = false;
      if (force) {
        clearTimeout(state.textTimer);
      } else {
        state.textTimer = setTimeout(() => {
          clearTimeout(state.textTimer);
          state.msg = '';
        });
      }
      state.onClose && state.onClose();
    };
    const show = force => {
      clearTimer();
      clearTimeout(state.textTimer);
      if (state.duration) {
        state.timer = setTimeout(() => {
          hide(force);
        }, state.duration);
      }
    };
    const clickCover = () => {
      if (state.closeOnClickOverlay) {
        hide();
      }
    };
    // show();
    watch(
      () => state.visible,
      val => {
        if (val) {
          console.log(val);
          show();
        }
      }
    );

    const cusIcon = computed(() => {
      return state.icon ? `url("${state.icon}")` : '';
    });
    const hasIcon = computed(() => {
      console.log(type.value);
      if (type.value !== 'text') {
        return true;
      } else {
        return !!cusIcon.value;
      }
    });
    console.log('hasIcon', hasIcon.value);
    const toastBodyClass = computed(() => {
      return [
        'nut-toast',
        { 'nut-toast-center': center.value },
        { 'nut-toast-has-icon': hasIcon.value },
        { 'nut-toast-cover': state.cover },
        { 'nut-loading': type.value == 'loading' },
        state.customClass,
        'nut-toast-' + state.size
      ];
    });
    return {
      msg,
      center,
      state,
      type,
      clickCover,
      cusIcon,
      hasIcon,
      toastBodyClass
    };
  }
});
</script>
