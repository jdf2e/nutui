<template>
  <div class="demo">
    <nut-fixednav
      :active-text="translate('basic')"
      :position="{ top: '70px' }"
      v-model:visible="visible"
      :nav-list="navList"
      @selected="selected"
    />
    <nut-fixednav
      type="left"
      :position="{ top: '140px' }"
      v-model:visible="visible1"
      :active-text="translate('left1')"
      :un-active-text="translate('left2')"
      :nav-list="navList"
      @selected="selected"
    />
    <nut-fixednav
      :position="{ top: '210px' }"
      :overlay="false"
      v-model:visible="visible2"
      :nav-list="navList"
      @selected="selected"
    />
    <nut-fixednav :position="{ top: '280px' }" type="left" v-model:visible="myActive" @selected="selected">
      <template v-slot:list>
        <ul class="nut-fixednav__list">
          <li class="nut-fixednav__list-item">1</li>
          <li class="nut-fixednav__list-item">2</li>
          <li class="nut-fixednav__list-item">3</li>
          <li class="nut-fixednav__list-item">4</li>
          <li class="nut-fixednav__list-item">5</li>
        </ul>
      </template>
      <template v-slot:btn>
        <nut-icon name="retweet" color="#fff"> </nut-icon>
        <span class="text">{{ myActive ? translate('cus1') : translate('cus2') }}</span>
      </template>
    </nut-fixednav>

    <!-- 配合 Drag 支持拖拽 ，小程序暂不支持 -->
    <nut-drag direction="y" :style="{ right: '0px', bottom: '240px' }">
      <nut-fixednav
        :un-active-text="translate('drag')"
        v-model:visible="visible3"
        :nav-list="navList"
        @selected="selected"
      />
    </nut-drag>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('fixednav');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      left1: '左侧收起',
      left2: '左侧展开',
      cus1: '关',
      cus2: '开',
      drag: '支持拖拽',
      index: '首页',
      category: '分类',
      cart: '购物车',
      my: '我的'
    },
    'en-US': {
      basic: 'Basic Usage',
      left1: 'Left Closed',
      left2: 'Left Open',
      cus1: 'Closed',
      cus2: 'Open',
      drag: 'Drag',
      index: 'Index',
      category: 'Category',
      cart: 'Cart',
      my: 'My'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const visible = ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const myActive = ref(false);

    onMounted(() => {
      setTimeout(() => {
        visible2.value = true;
      }, 1000);
    });

    const navList = computed(() => [
      {
        id: 1,
        text: translate('index'),
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
      },
      {
        id: 2,
        text: translate('category'),
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
      },
      {
        id: 3,
        text: translate('cart'),
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
      },
      {
        id: 4,
        text: translate('my'),
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      }
    ]);
    const selected = (res: any) => {
      console.log(res);
    };
    return {
      visible,
      visible1,
      visible2,
      visible3,
      myActive,
      navList,
      selected,
      translate
    };
  }
});
</script>
