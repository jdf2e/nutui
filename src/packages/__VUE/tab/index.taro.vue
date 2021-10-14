<template>
  <view class="nutui-tab">
    <view :class="[direction === 'vertical' ? 'vertical-tab' : 'horizontal-tab']">
      <scroll-view
        :scroll-x="!scrollYDirection"
        :scroll-y="scrollYDirection"
        :scroll-left="scrollLeft"
        :scroll-top="scrollTop"
        class="tab-title-scroll"
        :scroll-with-animation="true"
      >
        <view :class="['tab-title', randomTitleClass, iconType]" ref="navlist">
          <view
            :class="[
              'tab-title-box',
              randomClass,
              { 'nut-tab-active': activeIndex == index },
              { 'tab-title-box-scroll': scrollType == 'scroll' }
            ]"
            v-for="(item, index) in titles"
            :key="index"
            @click="switchTitle(index, $event)"
          >
            <span class="world">{{ item.title }}</span>
            <TabTitle v-bind:slots="item.content" v-if="item.content"></TabTitle>
          </view>
          <view class="underline"></view>
        </view>
      </scroll-view>
      <view v-if="titles.length > 0" class="tab-swiper" ref="nutuiSwiper">
        <TabTitle v-bind:slots="titles[activeIndex].main"></TabTitle>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, ref, onMounted, watch, VNode, watchEffect } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('tab');
import Taro from '@tarojs/taro';
import TabTitle from './tabTitle';
type TabDirection = 'horizontal' | 'vertical';

interface DataTitle {
  title?: string;
  content?: VNode[];
  main?: VNode[];
}

type currChild = {
  header: Function;
  default: Function;
} & VNode[];

export default create({
  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    animatedTime: {
      type: Number,
      default: 0
    },
    direction: {
      type: String as PropType<TabDirection>,
      default: 'false'
    },
    noSwiping: {
      type: Boolean,
      default: false
    },
    scrollType: {
      type: String,
      default: 'flex'
    },
    iconType: {
      type: String,
      default: 'all'
    }
  },
  components: {
    TabTitle
  },
  emits: ['switch-tab'],
  setup(props, ctx) {
    const titles: Array<DataTitle> = reactive([]);
    const isLock = ref(false);
    const scrollLeft = ref('0px');
    const scrollTop = ref('0px');
    const activeIndex = ref(props.defaultIndex);
    const navlist = ref<null | HTMLElement>(null);
    const nutuiSwiper = ref(null);
    const arr = ref([]);
    const scrollYDirection = ref(props.direction === 'vertical');
    const randomClass = ref('tab-title-boxs-' + createHash());
    const randomTitleClass = ref('tab-title-' + createHash());
    // 生成随机的id
    function createHash() {
      return Array.from(Array(10), () => Math.floor(Math.random() * 36).toString(36)).join('');
    }
    const swiperClassName = ref('swiper-' + createHash());
    //title点击后居中显示
    function centerTitle(index: number) {
      let navlistValueTop = 0;
      let navlistValueHeight = 0;
      let navlistValuewidth = 0;
      const query = Taro.createSelectorQuery();
      if (props.direction === 'vertical') {
        query
          .select(`.${randomTitleClass.value}`)
          .boundingClientRect()
          .selectAll(`.${randomClass.value}`)
          .boundingClientRect()
          .exec((rects) => {
            let navlistValueTop = rects[0].top;
            let navlistValueHeight = rects[0].height;
            const currTop = rects[1][index].top;
            const currHeight = rects[1][index].height;
            scrollTop.value = currTop - navlistValueTop - navlistValueHeight / 2 + currHeight / 2 + 'px';
          });
      } else {
        query
          .select(`.${randomTitleClass.value}`)
          .boundingClientRect()
          .selectAll(`.${randomClass.value}`)
          .boundingClientRect()
          .exec((rects) => {
            let navlistValuewidth = rects[0].width;
            const currLeft = rects[1][index].left;
            const currWidth = rects[1][index].width;
            scrollLeft.value = currLeft - navlistValuewidth / 2 + currWidth / 2 + 'px';
          });
      }
    }
    const changeTab = (current) => {
      activeIndex.value = current.detail.current;
      centerTitle(current.detail.current);
    };
    //切换tab
    function switchTitle(index: number, event) {
      activeIndex.value = index;
      centerTitle(index);
    }
    function initTitle() {
      titles.length = 0;
      if (ctx.slots.default) {
        const slots: VNode[] =
          ctx.slots.default().length === 1 ? (ctx.slots.default()[0].children as VNode[]) : ctx.slots.default();
        slots &&
          slots.map((item, index) => {
            if (typeof item.children == 'string') return;
            titles.push({
              title: item.props && item.props['tab-title'] ? item.props['tab-title'] : '',
              content:
                item.children && (item.children as currChild).header ? (item.children as currChild).header() : null,
              main:
                item.children && (item.children as currChild).default ? (item.children as currChild).default() : null
            });
          });
      }
    }
    onMounted(() => {
      initTitle();
      let arrnew = [];
      for (let i = 0; i < 100; i++) arrnew.push(i);
      arr.value = arrnew;
    });
    watch(
      () => ctx.slots.default(),
      (val, oldVal) => {
        if (val) {
          ctx.slots.default();
          initTitle();
        }
      }
    );
    watchEffect(() => {
      activeIndex.value = props.defaultIndex;
    });
    watch(
      () => activeIndex.value,
      (val, oldVal) => {
        ctx.emit('switch-tab', activeIndex.value);
      }
    );
    return {
      swiperClassName,
      titles,
      navlist,
      activeIndex,
      switchTitle,
      changeTab,
      nutuiSwiper,
      scrollLeft,
      scrollTop,
      arr,
      randomClass,
      scrollYDirection,
      randomTitleClass
    };
  }
});
</script>
