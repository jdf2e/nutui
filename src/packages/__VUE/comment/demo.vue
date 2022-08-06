<template>
  <div class="demo">
    <h2>{{ translate('single') }}</h2>
    <nut-cell>
      <nut-comment
        :images="cmt.images"
        :videos="cmt.videos"
        :info="cmt.info"
        :labels="labels"
        @click="handleclick"
        @clickImages="clickImages"
        :operation="['replay']"
      >
        <template #comment-labels>
          <img
            class="nut-comment-header__labels--item"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/211858/17/4258/12101/618e6f78Ed0edcadc/e83a673555edf59f.jpg"
          />
        </template>
      </nut-comment>
    </nut-cell>

    <h2>{{ translate('multiRow') }}</h2>
    <nut-cell>
      <nut-comment
        headerType="complex"
        imagesRows="multi"
        :images="cmt.images"
        :videos="cmt.videos"
        :info="cmt.info"
        ellipsis="6"
        @clickImages="clickImages"
      >
        <template #comment-labels>
          <img
            class="nut-comment-header__labels--item"
            src="https://storage.360buyimg.com/imgtools/78925d9440-f9e874d0-e93d-11eb-8e5c-0da9e18a13b1.png"
            style="height: 12px"
          />
        </template>

        <template #comment-shop-reply>
          <div class="nut-comment-shop">
            <span>京东美妆国际：</span
            >尊敬的客户您好，非常抱歉给您带来不愉快的购物体验，关于过敏，什么成分都不存在个别性和普遍性。
          </div>
        </template>
      </nut-comment>
    </nut-cell>

    <h2>{{ translate('additionalReview') }}</h2>
    <nut-cell>
      <nut-comment
        imagesRows="multi"
        :images="cmt.images"
        :videos="cmt.videos"
        :info="cmt.info"
        :follow="cmt.follow"
        @clickImages="clickImages"
      ></nut-comment>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from '@vue/runtime-core';
import { createComponent } from '@/packages/utils/create';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const { createDemo, translate } = createComponent('comment');

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      single: '评论图片单行展示',
      multiRow: '评论图片多行展示',
      additionalReview: '追评展示'
    },
    'en-US': {
      basic: 'Basic Usage',
      single: 'Single Line Image',
      multiRow: 'Multi Line Image ',
      review: 'Additional Review'
    }
  });

export default createDemo({
  props: {},
  setup() {
    initTranslate();
    let cmt = ref({});
    const labels = () => {
      return '<nut-icon name="dongdong" color="#fa2c19"></nut-icon>';
    };

    const handleclick = (info: any) => {
      console.log('进行跳转', info);
    };

    onMounted(() => {
      getData();
    });

    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/comment_data.json')
        .then((response) => response.json())
        .then((res) => {
          cmt.value = res.Comment;
        }) //执行结果是 resolve就调用then方法
        .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    };

    const clickImages = (imgs: any) => {
      console.log('进行图片展示', imgs);
    };

    return {
      cmt,
      labels,
      handleclick,
      clickImages,
      translate
    };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>
