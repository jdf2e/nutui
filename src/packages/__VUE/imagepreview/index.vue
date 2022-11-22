<template>
  <nut-popup
    pop-class="custom-pop"
    v-model:visible="showPop"
    :isWrapTeleport="isWrapTeleport"
    @closed="onClose"
    style="width: 100%"
    lock-scroll
  >
    <view class="nut-imagepreview" ref="swipeRef">
      <nut-swiper
        v-if="showPop"
        :auto-play="autoplay"
        class="nut-imagepreview-swiper"
        :loop="isLoop"
        :is-preventDefault="false"
        direction="horizontal"
        @change="slideChangeEnd"
        :init-page="initPage"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <image-preview-item
          v-for="(item, index) in mergeImages"
          :key="index"
          :video="index < videos.length ? item : {}"
          :image="index >= videos.length ? item : {}"
          :rootHeight="rootHeight"
          :rootWidth="rootWidth"
          :show="showPop"
          :init-no="active"
          @close="onClose"
          :maxZoom="maxZoom"
          :minZoom="minZoom"
        ></image-preview-item>
      </nut-swiper>
    </view>
    <view class="nut-imagepreview-index" v-if="showIndex"> {{ active }} / {{ images.length + videos.length }} </view>
    <view
      :class="[
        'nut-imagepreview-close-icon',
        closeIconPosition == 'top-right' ? 'nut-imagepreview-close-icon-right' : 'nut-imagepreview-close-left'
      ]"
      @click="onClose"
      v-if="closeable"
      ><nut-icon :name="closeIcon" v-bind="$attrs" color="#ffffff"></nut-icon
    ></view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref, computed, CSSProperties } from 'vue';
import type { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
import Icon from '../icon/index.vue';
import { isPromise } from '@/packages/utils/util';
import ImagePreviewItem from './imagePreviewItem.vue';
import { ImageInterface } from './types';
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
    },
    isLoop: {
      type: Boolean,
      default: true
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
    const swipeRef = ref();

    const state = reactive({
      showPop: false,
      active: 1,
      rootWidth: 0,
      rootHeight: 0
    });

    const mergeImages = computed(() => {
      if (Array.isArray(props.videos)) {
        return ([] as any).concat(props.videos).concat(props.images);
      }
      return props.images;
    });

    const initPage = computed(() => {
      const maxNo = props.images.length + props.videos.length;
      const _initPage = props.initNo > maxNo ? maxNo - 1 : props.initNo - 1;
      return _initPage >= 0 ? _initPage : 0;
    });

    const slideChangeEnd = (page: number) => {
      state.active = page + 1;
      emit('change', state.active);
    };

    const onClose = () => {
      if (props.beforeClose) {
        const returnVal = props.beforeClose.apply(null, state.active);
        if (isPromise(returnVal)) {
          returnVal.then((value) => {
            value && closeDone();
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
      emit('close');
    };

    const init = () => {
      setTimeout(() => {
        const { offsetHeight, offsetWidth } = swipeRef.value;
        state.rootHeight = offsetHeight;
        state.rootWidth = offsetWidth;
      }, 100);
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
        if (val != state.active) {
          state.active = val;
        }
      }
    );
    onMounted(() => {
      state.active = props.initNo;
      state.showPop = props.show;
    });

    return {
      swipeRef,
      ...toRefs(state),
      initPage,
      slideChangeEnd,
      onClose,
      mergeImages
    };
  }
});
</script>
