<template>
  <Demo>
    <h2>基础用法</h2>
    <nut-image-preview :show="state.showPreview1" :images="state.imgData" :is-loop="false" @close="hideFn(1)" />
    <nut-cell is-link title="展示图片预览" :show-icon="true" @click="showFn(1)"></nut-cell>

    <h2>设置初始页码</h2>
    <nut-image-preview :show="state.showPreview2" :images="state.imgData" :init-no="3" @close="hideFn(2)" />
    <nut-cell is-link title="设置初始页码" :show-icon="true" @click="showFn(2)"></nut-cell>

    <h2>设置轮播指示器及颜色</h2>
    <nut-image-preview
      :show="state.showPreview3"
      :images="state.imgData"
      :pagination-visible="true"
      pagination-color="red"
      @close="hideFn(3)"
    />
    <nut-cell is-link title="设置轮播指示器及颜色" :show-icon="true" @click="showFn(3)"></nut-cell>

    <h2>长按图片事件，保存到相册</h2>
    <nut-image-preview
      :show="state.showPreview5"
      :images="state.imgData"
      :is-loop="false"
      @close="hideFn(5)"
      @long-press="longPress"
    />
    <nut-cell is-link title="长按图片事件，保存到相册" :show-icon="true" @click="showFn(5)"></nut-cell>

    <!-- <h2>视频、图片预览</h2>
    <nut-image-preview :show="showPreview4" :videos="videoData" :images="imgData" @close="hideFn(4)" />
    <nut-cell isLink title="视频、图片预览" :showIcon="true" @click="showFn(4)"></nut-cell> -->

    <!-- <h2>函数式调用</h2>
    <nut-cell isLink title="函数式调用的图片预览" :showIcon="true" @click="fnShow"></nut-cell> -->
  </Demo>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Taro from '@tarojs/taro'
const state = reactive({
  showPreview1: false,
  showPreview2: false,
  showPreview3: false,
  showPreview4: false,
  showPreview5: false,
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
})
// const onClose = () => {
//   console.log('imagepreview closed');
// };

const showFn = (i: number) => {
  ;(state as any)['showPreview' + i] = true
}

// const fnShow = () => {
//   ImagePreview({
//     show: true,
//     images: state.imgData,
//     onClose
//   });
// };

const hideFn = (i: number) => {
  ;(state as any)['showPreview' + i] = false
}

const longPress = (image: { src: string }) => {
  Taro.getImageInfo({
    src: image.src,
    success: (res) => {
      Taro.saveImageToPhotosAlbum({
        filePath: res.path,
        success: () => {
          Taro.showToast({
            title: '保存成功'
          })
        }
      })
    }
  })
}
</script>

<style lang="scss"></style>
