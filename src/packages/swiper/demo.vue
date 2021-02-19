<template>
  <div class="demo">
    <h2>基本用法</h2>
    <view class="demo-box">
      <nut-swiper
        class="swiper1"
        swipeid="swiper1"
        ref="swiper1"
        pagination="true"
        paginationClass="swiper1-pagination"
      >
        <template v-slot:swiper-con>
          <view
            v-for="(item, index) in swiperData1"
            :key="index"
            class="swiper-slide"
          >
            <img :src="item.image" />
          </view>
        </template>
      </nut-swiper>
    </view>
    <h2>直播轮播样式</h2>
    <view class="demo-box">
      <nut-swiper
        class="swiper2"
        swipeid="swiper2"
        ref="swiper2"
        loop="true"
        pagination="true"
        paginationClass="swiper2-pagination"
        slidesPerView="auto"
        paginationPosiiton="outside"
      >
        <template v-slot:swiper-con>
          <view
            v-for="(item, index) in swiperData2"
            :key="index"
            class="swiper-slide"
          >
            <img :src="item.image" />
          </view>
        </template>
      </nut-swiper>
    </view>
    <h2>商品轮播样式</h2>
    <view class="demo-box">
      <nut-swiper
        class="swiper3"
        swipeid="swiper3"
        ref="swiper3"
        pagination="true"
        paginationClass="swiper3-pagination"
        paginationType="fraction"
      >
        <template v-slot:swiper-con>
          <view
            v-for="(item, index) in swiperData3"
            :key="index"
            class="swiper-slide"
          >
            <img :src="item.image" />
          </view>
        </template>
      </nut-swiper>
    </view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('swiper');
// import mSwipe from "./components/HelloWorld";
export default createDemo({
  props: {},
  setup() {
    const data = reactive({
      swiperData1: [
        {
          title: '第1个',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/152371/17/7059/268929/5fbcb34cE2276dc0d/bb22de1b6f838ae4.png'
        },
        {
          title: '第2个',
          image:
            'https://img11.360buyimg.com/imagetools/jfs/t1/152491/29/7102/178474/5fbcb34cE0713a25c/4cb9bbf205a4fca0.png'
        },
        {
          title: '第3个',
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/152371/17/7059/268929/5fbcb34cE2276dc0d/bb22de1b6f838ae4.png'
        },
        {
          title: '第4个',
          image:
            'https://img11.360buyimg.com/imagetools/jfs/t1/152491/29/7102/178474/5fbcb34cE0713a25c/4cb9bbf205a4fca0.png'
        }
      ],
      swiperData2: [
        {
          image:
            'https://img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png'
        },
        {
          image:
            'https://img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png'
        },
        {
          image:
            'https://img14.360buyimg.com/imagetools/jfs/t1/136318/2/17914/253972/5fbcb355E73dd171e/7afebc86dec494e4.png'
        }
      ],
      swiperData3: [
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        },
        {
          image:
            'https://img10.360buyimg.com/imagetools/jfs/t1/145583/3/15916/517992/5fbf4eebEc3f84d1d/060f933b48cec59f.png'
        }
      ]
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
  position: relative;
  border-radius: 7px;
  img {
    width: 100%;
  }
}
/* demo2 */
.swiper2 {
  .swiper-slide {
    width: 210px !important;
    transform: scale(0.8);
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
/* demo3 */
.swiper3 {
}
</style>
<style>
.swiper-container /deep/ .swiper-pagination-bullet-active {
  background: linear-gradient(
    90deg,
    rgba(250, 32, 12, 1) 0%,
    rgba(250, 32, 12, 0.65) 100%
  );
}
/* demo1 */
.swiper1 .swiper-pagination-bullet {
  width: 8px !important;
  height: 3px !important;
  background: rgba(255, 255, 255, 0.51) !important;
  border-radius: 2px !important;
}
.swiper1 /deep/ .swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 1) !important;
}
/* demo2 */
.swiper-pagination {
  width: 100%;
  left: 0;
  position: relative;
}
.swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper2-pagination {
  position: relative !important;
}
/* demo3 */
.swiper3 .swiper-pagination {
  display: inline-block;
  width: auto !important;
  left: auto !important;
  right: 0;
  height: 22px;
  line-height: 22px;
  padding: 0 15px;
  color: #fff;
  font-size: 12px;
  letter-spacing: -2px;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 11px;
}
.swiper-pagination-current {
  font-size: 16px;
  font-weight: bold;
}
</style>
