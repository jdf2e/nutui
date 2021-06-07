<template>
  <view :class="[direction === 'vertical' ? 'vertical-tab' : 'nutui-tab']">
    <view class="tab-title" ref="navlist">
      <view
        :class="['tab-title-box', { 'nut-tab-active': activeIndex == index }]"
        v-for="(item, index) in titles"
        :key="index"
        @click="switchTitle(index, $event)"
      >
        {{ item.title }}
        <TabTitle v-bind:slots="item.content" v-if="item.content"></TabTitle>
      </view>
      <view class="underline"></view>
    </view>
    <view :class="['nutui-tab-swiper', swiperClassName]">
      <view :class="['swiper-wrapper', { 'swiper-no-swiping': noSwiping }]">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, ref, onMounted, watch, VNode } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('tab');
import TabTitle from './tabTitle';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// import { extend } from '@vue/shared';
type TabDirection = 'horizontal' | 'vertical';

interface DataTitle {
  title?: string;
  content?: VNode[];
}

type currChild = {
  header: Function;
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
      default: 'horizontal'
    },
    noSwiping: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TabTitle
  },
  setup(props, ctx) {
    const titles: Array<DataTitle> = reactive([]);
    let mySwiper = reactive({});
    const isLock = ref(false);
    const activeIndex = ref(props.defaultIndex);
    const navlist = ref<null | HTMLElement>(null);
    // 生成随机的id
    function createHash() {
      return Array.from(Array(10), () =>
        Math.floor(Math.random() * 36).toString(36)
      ).join('');
    }

    const swiperClassName = ref('swiper-' + createHash());
    //title点击后居中显示
    function centerTitle(index: number) {
      if (navlist.value) {
        const currEle = navlist.value.querySelectorAll('.tab-title-box')[
          index
        ] as HTMLElement;
        if (props.direction === 'vertical') {
          const currTitleTop = navlist.value.offsetTop;
          const currTop = currEle.offsetTop;
          const currHeight = currEle.offsetHeight;
          const tapHeight = navlist.value.offsetHeight;
          navlist.value.scroll(
            0,
            currTop - currTitleTop - tapHeight / 2 + currHeight / 2
          );
        } else {
          const currLeft = currEle.offsetLeft;
          const currWidth = currEle.offsetWidth;
          const tapWidth = navlist.value.offsetWidth;
          navlist.value.scroll(currLeft - tapWidth / 2 + currWidth / 2, 0);
        }
      }
    }

    //切换tab
    function switchTitle(index: number) {
      activeIndex.value = index;
      centerTitle(index);
      (mySwiper as Swiper).slideToLoop(index, props.animatedTime, false);
    }
    function initSwiper(currIndex: number) {
      mySwiper = new Swiper('.' + swiperClassName.value, {
        loop: true /** 循环模式选项 */,
        noSwiping: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        setWrapperSize: true,
        direction: props.direction,
        initialSlide: currIndex,
        on: {
          touchStart: function() {
            isLock.value = true;
          },
          transitionEnd: function(): void {
            ctx.emit('switchTab', (mySwiper as Swiper).realIndex, mySwiper);
            if (isLock.value) {
              activeIndex.value = (mySwiper as Swiper).realIndex;
              centerTitle((mySwiper as Swiper).realIndex);
            }
          }
        }
      });
    }
    function initTitle() {
      titles.length = 0;
      if (ctx.slots.default) {
        const slots: VNode[] =
          ctx.slots.default().length === 1
            ? (ctx.slots.default()[0].children as VNode[])
            : ctx.slots.default();
        slots &&
          slots.map((item, index) => {
            if (typeof item.children == 'string') return;
            titles.push({
              title:
                item.props && item.props['tab-title']
                  ? item.props['tab-title']
                  : '',
              content:
                item.children && (item.children as currChild).header
                  ? (item.children as currChild).header()
                  : null
            });
          });
      }
      setTimeout(() => {
        initSwiper(activeIndex.value);
      }, 0);
    }
    onMounted(() => {
      initTitle();
    });
    watch(
      () => (ctx.slots.default ? ctx.slots.default() : ''),
      () => {
        initTitle();
      }
    );
    return {
      swiperClassName,
      titles,
      navlist,
      activeIndex,
      switchTitle
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
