<template>
  <nut-popup pop-class="custom-pop" v-model:visible="showPop" @click="onClose" style="width: 100%">
    <!-- @click.stop="closeOnImg" -->
    <view class="nut-imagepreview" @touchstart.capture="onTouchStart">
      <nut-swiper
        v-if="showPop"
        :auto-play="autoplay"
        class="nut-imagepreview-swiper"
        :loop="true"
        :is-preventDefault="false"
        direction="horizontal"
        @change="slideChangeEnd"
        :init-page="initNo > maxNo ? maxNo - 1 : initNo - 1"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <!-- <nut-swiper-item v-for="(item, index) in videos" :key="index">
          <nut-video :source="item.source" :options="item.options"></nut-video>
        </nut-swiper-item> -->
        <nut-swiper-item v-for="(item, index) in images" :key="index">
          <image mode="aspectFit" :src="item.src" class="nut-imagepreview-img" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <!-- <view class="nut-imagepreview-index"> {{ active }} / {{ images.length + videos.length }} </view> -->
    <view class="nut-imagepreview-index" v-if="showIndex"> {{ active }} / {{ images.length }} </view>
    <view class="nut-imagepreview-close-icon" @click="handleCloseIcon" :style="styles" v-if="closeable"
      ><nut-icon :name="closeIcon" v-bind="$attrs" color="#ffffff"></nut-icon
    ></view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.taro.vue';
// import Video from '../video/index.vue';
import Swiper from '../swiper/index.taro.vue';
import SwiperItem from '../swiperitem/index.taro.vue';
import Icon from '../icon/index.taro.vue';
import { isPromise } from '@/packages/utils/util.ts';
const { componentName, create } = createComponent('imagepreview');

export default create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: () => []
    },
    // videos: {
    //   type: Array,
    //   default: () => []
    // },
    contentClose: {
      type: Boolean,
      default: false
    },
    initNo: {
      type: Number,
      default: 1
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
    beforeClose: Function
  },
  emits: ['close', 'change'],
  components: {
    [Popup.name]: Popup,
    // [Video.name]: Video,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Icon.name]: Icon
  },

  setup(props, { emit }) {
    const { show, images } = toRefs(props);

    const state = reactive({
      showPop: false,
      active: 1,
      maxNo: 1,
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
        type: 'video/mp4'
      },
      options: {
        muted: true,
        controls: true
      },
      eleImg: null,
      store: {
        scale: 1,
        moveable: false
      },
      lastTouchEndTime: 0 // 用来辅助监听双击
    });

    const styles = computed(() => {
      let style = {};
      if (props.closeIconPosition == 'top-right') {
        style.right = '10px';
      } else {
        style.left = '10px';
      }
      return style;
    });

    const slideChangeEnd = function (page: number) {
      state.active = page + 1;
      emit('change', state.active);
    };

    const closeOnImg = () => {
      // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
      if (props.contentClose) {
        onClose();
      }
    };

    const onClose = () => {
      if (props.beforeClose) {
        const returnVal = props.beforeClose.apply(null, state.active);

        if (isPromise(returnVal)) {
          returnVal.then((value) => {
            if (value) {
              closeDone();
            }
          });
        } else if (returnVal) {
          closeDone();
        }
      } else {
        closeDone();
      }
    };
    // 执行关闭
    const closeDone = () => {
      state.showPop = false;
      state.store.scale = 1;
      scaleNow();
      state.active = 1;
      emit('close');
    };

    // 计算两个点的距离
    const getDistance = (first: any, second: any) => {
      // 计算两个点起始时刻的距离和终止时刻的距离，终止时刻距离变大了则放大，变小了则缩小
      // 放大 k 倍则 scale 也 扩大 k 倍
      return Math.hypot(Math.abs(second.x - first.x), Math.abs(second.y - first.y));
    };

    const scaleNow = () => {
      if (state.eleImg != null) {
        (state.eleImg as any).style.transform = 'scale(' + state.store.scale + ')';
      }
    };

    const onTouchStart = (event: any) => {
      // console.log('start');
      // 如果已经放大，双击应变回原尺寸；如果是原尺寸，双击应放大
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

      // event.preventDefault();

      const store = state.store as any;
      store.moveable = true;

      if (events2) {
        // 如果开始两指操作，记录初始时刻两指间的距离
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
      // 取到开始两指操作时的放大（缩小比例），store.scale 存储的是当前的放缩比（相对于标准大小 scale 为 1 的情况的放大缩小比）
      store.originScale = store.scale || 1;
    };

    const onTouchMove = (event: any) => {
      if (!state.store.moveable) {
        return;
      }
      const store = state.store as any;
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
      // console.log('end');
      state.lastTouchEndTime = new Date().getTime();
      const store = state.store as any;
      store.moveable = false;
      if ((store.scale < 1.1 && store.scale > 1) || store.scale < 1) {
        store.scale = 1;
        scaleNow();
      }
    };

    const init = () => {
      state.eleImg = document.querySelector('.nut-imagepreview') as any;
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

    // 点击关闭按钮
    const handleCloseIcon = () => {
      onClose();
    };

    onMounted(() => {
      // 初始化页码
      state.active = props.initNo;
      state.showPop = props.show;
      // state.maxNo = props.images.length + props.videos.length;
      state.maxNo = props.images.length;
    });

    return {
      ...toRefs(state),
      slideChangeEnd,
      onClose,
      closeOnImg,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      getDistance,
      scaleNow,
      styles,
      handleCloseIcon
    };
  }
});
</script>
