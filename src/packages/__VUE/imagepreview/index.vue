<template>
  <nut-popup
    pop-class="custom-pop"
    v-model:visible="showPop"
    :isWrapTeleport="isWrapTeleport"
    @click="onClose"
    style="width: 100%"
  >
    <!-- @click.stop="closeOnImg" @touchstart.capture="onTouchStart" -->
    <view class="nut-imagepreview" ref="swipeRef">
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
        <template v-if="videos.length">
          <image-preview-item
            v-for="(item, index) in videos"
            :key="index"
            :video="item"
            :rootHeight="rootHeight"
            :rootWidth="rootWidth"
            :show="showPop"
            :init-no="active"
            @close="onClose"
            :maxZoom="maxZoom"
            :minZoom="minZoom"
          ></image-preview-item>
        </template>

        <template v-for="(item, index) in images" :key="index">
          <image-preview-item
            :image="item"
            :rootHeight="rootHeight"
            :rootWidth="rootWidth"
            :show="showPop"
            :init-no="active"
            @close="onClose"
          ></image-preview-item>
        </template>
      </nut-swiper>
    </view>
    <view class="nut-imagepreview-index" v-if="showIndex"> {{ active }} / {{ images.length + videos.length }} </view>
    <view class="nut-imagepreview-close-icon" @click="handleCloseIcon" :style="styles" v-if="closeable"
      ><nut-icon :name="closeIcon" v-bind="$attrs" color="#ffffff"></nut-icon
    ></view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref, computed } from 'vue';
import type { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
import Icon from '../icon/index.vue';
import { isPromise } from '@/packages/utils/util.ts';
import ImagePreviewItem from './imagePreviewItem.vue';
import { ImageInterface } from './types';
const { componentName, create } = createComponent('imagepreview');

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
    videos: {
      type: Array,
      default: () => []
    },
    contentClose: {
      type: Boolean,
      default: true
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
      default: 0
    },
    isWrapTeleport: {
      type: Boolean,
      default: false
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
    beforeClose: Function,
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    }
  },
  emits: ['close', 'change'],
  components: {
    [Popup.name]: Popup,
    [Video.name]: Video,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Icon.name]: Icon,
    ImagePreviewItem: ImagePreviewItem
  },

  setup(props, { emit }) {
    const { show, images } = toRefs(props);

    const swipeRef = ref();

    const state = reactive({
      showPop: false,
      active: 1,
      maxNo: 1,
      rootWidth: 0,
      rootHeight: 0
    });

    const styles = computed(() => {
      let style: any = {};
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
      state.active = 1;
      emit('close');
    };

    // 点击关闭按钮
    const handleCloseIcon = () => {
      onClose();
    };

    const init = () => {
      setTimeout(() => {
        state.rootHeight = swipeRef.value.offsetHeight;
        state.rootWidth = swipeRef.value.offsetWidth;
      }, 100);
    };

    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
        init();
      }
    );

    onMounted(() => {
      // 初始化页码
      state.active = props.initNo;
      state.showPop = props.show;
      state.maxNo = props.images.length + props.videos.length;
    });

    return {
      swipeRef,
      ...toRefs(state),
      slideChangeEnd,
      onClose,
      handleCloseIcon,
      styles
    };
  }
});
</script>
