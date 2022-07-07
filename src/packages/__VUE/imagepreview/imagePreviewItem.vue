<template>
  <nut-swiper-item @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
    <view :style="imageStyle" class="nut-imagepreview-box" v-if="image && image.src">
      <img :src="image.src" class="nut-imagepreview-img" @load="imageLoad" />
    </view>

    <view class="nut-imagepreview-box" v-if="video">
      <nut-video :source="video.source" :options="video.options"></nut-video>
    </view>
  </nut-swiper-item>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref, computed, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
import Icon from '../icon/index.vue';
import { isPromise } from '@/packages/utils/util.ts';
import { useTouch } from '@/packages/utils/useTouch';
const { componentName, create } = createComponent('imagepreviewitem');

export default create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    initNo: Number,
    image: {
      type: Object,
      default: () => {}
    },
    video: {
      type: Array,
      default: () => {}
    },

    showIndex: {
      type: Boolean,
      default: true
    },
    rootWidth: {
      type: Number,
      default: 0
    },
    rootHeight: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    }
  },
  emits: ['close', 'scale'],
  components: {
    [Popup.name]: Popup,
    [Video.name]: Video,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Icon.name]: Icon
  },

  setup(props, { emit }) {
    const state = reactive({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });

    const touch = useTouch();

    const vertical = computed(() => {
      const { rootWidth, rootHeight } = props;
      const rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });

    // 图片放大
    const imageStyle = computed(() => {
      const { scale, moveX, moveY, moving, zooming } = state;
      const style: CSSProperties = {
        transitionDuration: zooming || moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        const offsetX = moveX / scale;
        const offsetY = moveY / scale;
        style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
      }

      return style;
    });

    const maxMoveX = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;

        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }

      return 0;
    });

    const maxMoveY = computed(() => {
      if (state.imageRatio) {
        const { rootWidth, rootHeight } = props;
        const displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;

        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }

      return 0;
    });

    // 图片加载完成
    const imageLoad = (event: any) => {
      const { naturalWidth, naturalHeight } = event.target as HTMLImageElement;
      state.imageRatio = naturalHeight / naturalWidth;
    };

    // 重设缩放
    const resetScale = () => {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };
    // 设置缩放
    const setScale = (scale: number) => {
      scale = clamp(scale, +props.minZoom, +props.maxZoom + 1);
      if (scale !== state.scale) {
        state.scale = scale;
        emit('scale', {
          scale,
          index: props.initNo
        });
      }
    };

    const toggleScale = () => {
      const scale = state.scale > 1 ? 1 : 2;

      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };

    // 计算两个点的距离
    const getDistance = (touches: TouchList) =>
      Math.sqrt((touches[0].clientX - touches[1].clientX) ** 2 + (touches[0].clientY - touches[1].clientY) ** 2);

    let startMoveX: number;
    let startMoveY: number;
    let startScale: number;
    let startDistance: number;
    let doubleTapTimer: null;
    let touchStartTime: number;
    let fingerNum: number;

    const onTouchStart = (event: TouchEvent) => {
      const { touches } = event;
      const { offsetX } = touch;

      touch.start(event);

      fingerNum = touches.length;
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = Date.now();

      state.moving = fingerNum === 1 && state.scale !== 1;

      state.zooming = fingerNum === 2 && !offsetX.value;
      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      const { touches } = event;

      touch.move(event);

      if (state.moving || state.zooming) {
        preventDefault(event, true);
      }

      if (state.moving) {
        const { deltaX, deltaY } = touch;
        const moveX = deltaX.value + startMoveX;
        const moveY = deltaY.value + startMoveY;
        state.moveX = clamp(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = clamp(moveY, -maxMoveY.value, maxMoveY.value);
      }

      if (state.zooming && touches.length === 2) {
        const distance = getDistance(touches);
        const scale = (startScale * distance) / startDistance;

        setScale(scale);
      }
    };

    const checkTap = () => {
      if (fingerNum > 1) {
        return;
      }

      const { offsetX, offsetY } = touch;
      const deltaTime = Date.now() - touchStartTime;
      const TAP_TIME = 250;
      const TAP_OFFSET = 5;

      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          toggleScale();
        } else {
          doubleTapTimer = setTimeout(() => {
            emit('close');
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      let stopPropagation = false;

      /* istanbul ignore else */
      if (state.moving || state.zooming) {
        stopPropagation = true;

        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = clamp(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = clamp(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }

          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (state.scale < 1) {
            resetScale();
          }

          if (state.scale > props.maxZoom) {
            state.scale = +props.maxZoom;
          }
        }
      }

      // eliminate tap delay on safari
      preventDefault(event, stopPropagation);

      checkTap();
      touch.reset();
    };

    // 阻止
    const preventDefault = (event: any, isStopPropagation?: boolean) => {
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
      }

      if (isStopPropagation) {
        event.stopPropagation();
      }
    };

    const clamp = (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max);

    watch(() => props.initNo, resetScale);
    watch(
      () => props.show,
      (value) => {
        if (!value) {
          resetScale();
        }
      }
    );

    return {
      ...toRefs(state),
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getDistance,
      imageStyle,
      imageLoad
    };
  }
});
</script>
