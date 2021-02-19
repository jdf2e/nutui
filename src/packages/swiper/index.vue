<template>
  <view :class="swipeid" class="nut-swiper-container swiper-container">
    <view class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <slot name="swiper-con"></slot>
    </view>
    <!-- 分页器 -->
    <div
      v-if="pagination && paginationPosiiton === 'inside'"
      :class="paginationClass"
      class="swiper-pagination"
    ></div>
  </view>
  <div
    v-if="pagination && paginationPosiiton === 'outside'"
    :class="paginationClass"
    class="swiper-pagination"
  ></div>
</template>

<script lang="ts">
import Swiper from 'swiper';
import { createComponent } from '@/utils/create';
const { create } = createComponent('swiper');
// import 'swiper/dist/css/swiper.min.css';
// import { reactive, onMounted } from 'vue';
import { onMounted, PropType } from 'vue';
type PaginationType = 'bullets' | 'fraction' | 'progressbar' | 'custom';
export default create({
  props: {
    variableClass: {
      type: String,
      default: ''
    },
    swipeid: {
      type: String,
      default: ''
    },
    loop: {
      type: Boolean,
      default: false
    },
    slidesPerView: {
      type: [Number, String],
      default: 1
    },
    spaceBetween: {
      type: [Number, String],
      default: 0
    },
    pagination: {
      type: Boolean,
      default: true
    },
    paginationPosiiton: {
      type: String,
      default: 'inside'
    },
    paginationClass: {
      type: String,
      default: ''
    },
    paginationType: {
      type: String as PropType<PaginationType>,
      default: 'bullets'
    }
  },
  data() {
    return {};
  },
  setup(props) {
    // console.log('props', props);
    // let mySwiper: any = reactive({});
    // const { swipeid, loop: boolean, direction } = toRefs(props);
    // mounted
    function initSwiper() {
      console.log('swipeid', props.swipeid);
      // new Swiper(
      // "." + (props.variableClass ? props.variableClass : "swiper-container"),
      //   {
      //     pagination: {
      //     el: '.swiper-pagination'
      //   },
      //     observer: true   //当修改swiper的样式或者子元素时,swiper自动刷新
      //   }
      // );
      new Swiper('.' + props.swipeid, {
        loop: props.loop,
        slidesPerView: props.slidesPerView as number | 'auto',
        spaceBetween: props.spaceBetween as number,
        //分页器
        pagination: {
          el: '.' + props.paginationClass,
          type: props.paginationType
        },
        // 分页类型
        // paginationType: paginationType,
        // //自动播放
        // autoPlay: prop.autoPlay,
        // 用户操作swiper之后，不禁止autoplay
        observer: true,
        observeParents: true
      });
    }
    onMounted(() => {
      initSwiper();
      // new Swiper("."+ props.swipeid ,this.variableData);
      // new Swiper(
      // "." + (props.variableClass ? props.variableClass : "swiper-container"),
      //   {
      //     pagination: {
      //       el: '.swiper-pagination'
      //     },
      //     observer: true   //当修改swiper的样式或者子元素时,swiper自动刷新
      //   }
      // );
    });
    return {
      // mySwiper
      // swiper
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'index.scss';
</style>
<style>
.swiper-pagination .swiper-pagination-bullet {
  width: 4px;
  height: 4px;
  opacity: 1;
  background: linear-gradient(
    90deg,
    rgba(250, 32, 12, 1) 0%,
    rgba(250, 32, 12, 0.65) 100%
  );
}
.swiper-pagination /deep/ .swiper-pagination-bullet-active {
  width: 10px;
  border-radius: 3px;
}
</style>
