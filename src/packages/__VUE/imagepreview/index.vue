<template>
  <view class="nut-imagepreview">
    <nut-popup pop-class="custom-pop" v-model:visible="showPop" @click="closePop">
      <nut-swiper
        v-if="showPop"
        :auto-play="3000"
        class="nut-imagepreview-swiper"
        :loop="false"
        direction="horizontal"
        @change="slideChangeEnd"
        :is-preventDefault="false"
        :init-page="initNo - 1"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
      >
        <nut-swiper-item v-for="(item, index) in images" :key="index">
          <nut-video :source="source" :options="options"></nut-video>
          <!-- <video src="https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D"></video> -->
          <!-- <img :src="item.imgSrc" class="nut-imagepreview-img" /> -->
        </nut-swiper-item>
      </nut-swiper>
      <view class="nut-imagepreview-index"> {{ active }} / {{ images.length }} </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
import Popup from '../popup/index.vue';
import Video from '../video/index.vue';
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
  components: {
    [Popup.name]: Popup,
    [Video.name]: Video
  },

  setup(props, { emit }) {
    const { show, images } = toRefs(props);

    const state = reactive({
      showPop: show,
      active: 1,
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

    const closePop = function () {
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
    });

    return {
      ...toRefs(state),
      slideChangeEnd,
      closePop
    };
  }
});
</script>
