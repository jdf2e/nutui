<template>
  <nut-popup pop-class="custom-pop" v-model:visible="showPop" @click="onClose">
    <view class="nut-imagepreview" @click.stop="closeOnImg">
      <nut-swiper
        v-if="showPop"
        :auto-play="3000"
        class="nut-imagepreview-swiper"
        :loop="true"
        :is-preventDefault="false"
        direction="horizontal"
        @change="slideChangeEnd"
        :init-page="initNo > maxNo ? maxNo - 1 : initNo - 1"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <nut-swiper-item v-for="(item, index) in videos" :key="index">
          <nut-video :source="item.source" :options="item.options"></nut-video>
        </nut-swiper-item>
        <nut-swiper-item v-for="(item, index) in images" :key="index">
          <img :src="item.src" class="nut-imagepreview-img" />
        </nut-swiper-item>
      </nut-swiper>
      <view class="nut-imagepreview-index"> {{ active }} / {{ images.length + videos.length }} </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref } from 'vue';
import { createComponent } from '../../utils/create';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
import Swiper from '../swiper/index.vue';
import SwiperItem from '../swiperitem/index.vue';
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
    videos: {
      type: Array,
      default: () => []
    },
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
    }
  },
  emits: ['close'],
  components: {
    [Popup.name]: Popup,
    [Video.name]: Video,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem
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
      }
    });

    const slideChangeEnd = function (page: number) {
      state.active = page + 1;
    };

    const closeOnImg = () => {
      // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
      if (props.contentClose) {
        onClose();
      }
    };

    const onClose = () => {
      state.showPop = false;
      state.active = 1;
      emit('close');
    };

    watch(
      () => props.show,
      (val) => {
        state.showPop = val;
      }
    );

    onMounted(() => {
      // 初始化页码
      state.active = props.initNo;
      state.showPop = props.show;
      state.maxNo = props.images.length + props.videos.length;
    });

    return {
      ...toRefs(state),
      slideChangeEnd,
      onClose,
      closeOnImg
    };
  }
});
</script>
