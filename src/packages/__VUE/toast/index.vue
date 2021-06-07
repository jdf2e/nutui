<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      :class="toastBodyClass"
      v-show="state.mounted"
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
          <nut-icon size="20" color="#ffffff" :name="icon"></nut-icon>
        </view>
        <view class="nut-toast-text" v-html="msg"></view>
      </view>
    </view>
  </Transition>
</template>
<script>
import { toRefs, toRef, reactive, computed, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('toast');
import Icon from '@/packages/__VUE/icon/index.vue';
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
      default: 'rgba(0, 0, 0, .8)'
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
  setup(props) {
    let timer;
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
      onAfterLeave
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
