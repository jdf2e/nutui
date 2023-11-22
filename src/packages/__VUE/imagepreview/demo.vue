<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-image-preview :show="resData.showPreview1" :images="resData.imgData" @close="hideFn(1)" />
    <nut-cell is-link :title="translate('showPreview')" :show-icon="true" @click="showFn(1)"></nut-cell>

    <h2>{{ translate('withInitNo') }}</h2>
    <nut-image-preview :show="resData.showPreview2" :images="resData.imgData" :init-no="3" @close="hideFn(2)" />
    <nut-cell is-link :title="translate('withInitNo')" :show-icon="true" @click="showFn(2)"></nut-cell>

    <h2>{{ translate('withPagination') }}</h2>
    <nut-image-preview
      :show="resData.showPreview3"
      :images="resData.imgData"
      :pagination-visible="true"
      pagination-color="red"
      @close="hideFn(3)"
    />
    <nut-cell is-link :title="translate('withPagination')" :show-icon="true" @click="showFn(3)"></nut-cell>

    <h2>{{ translate('withVideos') }}</h2>
    <nut-image-preview
      :show="resData.showPreview4"
      :videos="resData.videoData"
      :images="resData.imgData"
      @close="hideFn(4)"
    />
    <nut-cell is-link :title="translate('withVideos')" :show-icon="true" @click="showFn(4)"></nut-cell>

    <h2>{{ translate('functionalCall') }}</h2>
    <nut-cell is-link :title="translate('functionalCall')" :show-icon="true" @click="fnShow"></nut-cell>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useTranslate } from '@/sites/utils';
import { showImagePreview } from '@/packages/nutui.vue';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    withInitNo: '设置初始页码',
    showPreview: '展示图片预览',
    withPagination: '设置轮播指示器及颜色',
    withVideos: '视频、图片预览',
    functionalCall: '函数式调用'
  },
  'en-US': {
    basic: 'Basic Usage',
    withInitNo: 'With Init No',
    showPreview: 'Show Preview',
    withPagination: 'With Pagination',
    withVideos: 'With Videos',
    functionalCall: 'Functional Call'
  }
});
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
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
    },
    {
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
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

const fnShow = () => {
  showImagePreview({
    show: true,
    images: resData.imgData,
    onClose: () => onClose()
  });
};

const hideFn = (i: number) => {
  (resData as any)['showPreview' + i] = false;
};
</script>
