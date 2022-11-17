<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-imagepreview :show="showPreview1" :images="imgData" @close="hideFn(1)" :isLoop="false" />
    <nut-cell isLink title="展示图片预览" :showIcon="true" @click="showFn(1)"></nut-cell>

    <h2>设置初始页码</h2>
    <nut-imagepreview :show="showPreview2" :images="imgData" :content-close="true" :init-no="3" @close="hideFn(2)" />
    <nut-cell isLink title="设置初始页码的图片预览" :showIcon="true" @click="showFn(2)"></nut-cell>

    <h2>设置轮播指示器及颜色</h2>
    <nut-imagepreview
      :show="showPreview3"
      :images="imgData"
      :pagination-visible="true"
      pagination-color="red"
      @close="hideFn(3)"
    />
    <nut-cell isLink title="设置轮播指示器及颜色的图片预览" :showIcon="true" @click="showFn(3)"></nut-cell>

    <!-- <h2>视频、图片预览</h2>
    <nut-imagepreview :show="showPreview4" :videos="videoData" :images="imgData" @close="hideFn(4)" />
    <nut-cell isLink title="视频、图片预览" :showIcon="true" @click="showFn(4)"></nut-cell> -->

    <!-- <h2>函数式调用</h2>
    <nut-cell isLink title="函数式调用的图片预览" :showIcon="true" @click="fnShow"></nut-cell> -->
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
export default {
  props: {},
  setup() {
    const resData = reactive({
      showPreview1: false,
      showPreview2: false,
      showPreview3: false,
      showPreview4: false,
      imgData: [
        {
          src: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
          src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        }
      ],
      videoData: [
        {
          source: {
            src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
            type: 'video/mp4'
          },
          options: {
            muted: true,
            controls: true
          }
        },
        {
          source: {
            src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
            type: 'video/mp4'
          },
          options: {
            muted: true,
            controls: true
          }
        }
      ]
    });
    const onClose = () => {
      console.log('imagepreview closed');
    };

    const showFn = (i: number) => {
      (resData as any)['showPreview' + i] = true;
    };

    // const fnShow = () => {
    //   ImagePreview({
    //     show: true,
    //     images: resData.imgData,
    //     onClose
    //   });
    // };

    const hideFn = (i: number) => {
      (resData as any)['showPreview' + i] = false;
    };

    return {
      ...toRefs(resData),
      showFn,
      hideFn
      // fnShow
    };
  }
};
</script>

<style lang="scss"></style>
