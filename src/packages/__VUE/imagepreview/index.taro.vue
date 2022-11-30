<template>
  <nut-popup pop-class="nut-imagepreview-custom-pop" v-model:visible="showPop" @closed="onClose">
    <view class="nut-imagepreview" @touchstart.capture="onTouchStart">
      <nut-swiper
        v-if="showPop"
        :auto-play="autoplay"
        class="nut-imagepreview-swiper"
        :loop="isLoop"
        :is-preventDefault="false"
        direction="horizontal"
        @change="setActive"
        :init-page="initNo"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <nut-swiper-item v-for="(item, index) in images" :key="index" @click="onClose">
          <image mode="aspectFit" :src="item.src" class="nut-imagepreview-taro-img" v-if="ENV != ENV_TYPE.WEB" />
          <img :src="item.src" mode="aspectFit" class="nut-imagepreview-img" v-else />
        </nut-swiper-item>
      </nut-swiper>
    </view>

    <view class="nut-imagepreview-index" v-if="showIndex"> {{ active + 1 }} / {{ images.length }} </view>
    <view class="nut-imagepreview-close-icon" @click="onClose" :style="styles" v-if="closeable"
      ><nut-icon :name="closeIcon" v-bind="$attrs" color="#ffffff"></nut-icon
    ></view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, computed, CSSProperties, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { funInterceptor, Interceptor } from '@/packages/utils/util';
import { ImageInterface } from './types';
import Taro from '@tarojs/taro';
const { create } = createComponent('imagepreview');

export default create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array as PropType<ImageInterface[]>,
      default: () => []
    },
    contentClose: {
      type: Boolean,
      default: false
    },
    initNo: {
      type: Number,
      default: 0
    },
    paginationVisible: {
      type: Boolean,
      default: false
    },
    paginationColor: {
      type: String,
      default: '#fff'
    },
    autoplay: {
      type: [Number, String],
      default: 3000
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: 'circle-close'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right' // top-right  top-left
    },
    beforeClose: Function as PropType<Interceptor>,
    isLoop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'change'],
  components: {},

  setup(props, { emit }) {
    const state = reactive({
      showPop: false,
      active: 0,
      options: {
        muted: true,
        controls: true
      },
      eleImg: null as HTMLElement | null,
      store: {
        scale: 1,
        moveable: false,
        originScale: 1,
        oriDistance: 1
      },
      lastTouchEndTime: 0, // 用来辅助监听双击

      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    const styles = computed(() => {
      let style: CSSProperties = {};
      if (props.closeIconPosition == 'top-right') {
        style.right = '10px';
      } else {
        style.left = '10px';
      }
      return style;
    });

    // 设置当前选中第几个
    const setActive = (active: number) => {
      if (active !== state.active) {
        state.active = active;
        emit('change', state.active);
      }
    };

    const closeOnImg = () => {
      // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
      if (props.contentClose) {
        onClose();
      }
    };

    const onClose = () => {
      funInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => closeDone()
      });
    };
    // 执行关闭
    const closeDone = () => {
      state.showPop = false;
      state.store.scale = 1;
      scaleNow();
      emit('close');
    };

    // 计算两个点的距离
    const getDistance = (first: { x: number; y: number }, second: { x: number; y: number }) => {
      return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
    };

    const scaleNow = () => {
      if (state.eleImg != null) {
        state.eleImg.style.transform = 'scale(' + state.store.scale + ')';
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      const curTouchTime = new Date().getTime();
      if (curTouchTime - state.lastTouchEndTime < 300) {
        const store = state.store;
        if (store.scale > 1) {
          store.scale = 1;
        } else if (store.scale == 1) {
          store.scale = 2;
        }
        scaleNow();
      }

      var touches = event.touches;
      var events = touches[0];
      var events2 = touches[1];

      const store = state.store;
      store.moveable = true;

      if (events2) {
        store.oriDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );
      }

      store.originScale = store.scale || 1;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!state.store.moveable) {
        return;
      }
      const store = state.store;
      // event.preventDefault();
      var touches = event.touches;
      var events = touches[0];
      var events2 = touches[1];
      // 双指移动
      if (events2) {
        // 获得当前两点间的距离
        const curDistance = getDistance(
          {
            x: events.pageX,
            y: events.pageY
          },
          {
            x: events2.pageX,
            y: events2.pageY
          }
        );

        /** 此处计算倍数，距离放大（缩小） k 倍则 scale 也 扩大（缩小） k 倍。距离放大（缩小）倍数 = 结束时两点距离 除以 开始时两点距离
         * 注意此处的 scale 变化是基于 store.scale 的。
         * store.scale 是一个暂存值，比如第一次放大 2 倍，则 store.scale 为 2。
         * 再次两指触碰的时候，store.originScale 就为 store.scale 的值，基于此时的 store.scale 继续放大缩小。 **/
        const curScale = curDistance / store.oriDistance;
        store.scale = store.originScale * curScale;

        // 最大放大 3 倍，缩小后松手要弹回原比例
        if (store.scale > 3) {
          store.scale = 3;
        }
        scaleNow();
      }
    };

    const onTouchEnd = () => {
      state.lastTouchEndTime = new Date().getTime();
      const store = state.store;
      store.moveable = false;
      if ((store.scale < 1.1 && store.scale > 1) || store.scale < 1) {
        store.scale = 1;
        scaleNow();
      }
    };

    const init = () => {
      state.eleImg = document.querySelector('.nut-imagepreview');
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
      document.addEventListener('touchcancel', onTouchEnd);
    };

    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
        init();
      }
    );

    watch(
      () => props.initNo,
      (val) => {
        if (val != state.active) setActive(val);
      }
    );

    onMounted(() => {
      setActive(props.initNo);
    });

    return {
      ...toRefs(state),
      setActive,
      onClose,
      closeOnImg,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getDistance,
      scaleNow,
      styles
    };
  }
});
</script>
