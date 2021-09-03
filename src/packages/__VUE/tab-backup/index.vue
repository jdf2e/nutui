<template>
  <view class="nutui-tab">
    <view
      :class="[direction === 'vertical' ? 'vertical-tab' : 'horizontal-tab']"
    >
      <view :class="['tab-title', iconType, 'tab-title-scroll']" ref="navlist">
        <view
          :class="[
            'tab-title-box',
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
      <view v-if="titles.length > 0" class="tab-swiper" ref="nutuiSwiper">
        <TabTitle v-bind:slots="titles[activeIndex].main"></TabTitle>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, ref, onMounted, watch, VNode } from 'vue';
import { createComponent } from '@/packages/utils/create';
import tabpanel from '@/packages/__VUE/tabpanel/index.taro.vue';
const { create } = createComponent('tab');
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
  children: [tabpanel],
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
  setup(props, ctx) {
    const titles: Array<DataTitle> = reactive([]);
    const isLock = ref(false);
    const activeIndex = ref(props.defaultIndex);
    const navlist = ref<null | HTMLElement>(null);
    const nutuiSwiper = ref(null);
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
    const changeTab = (index: number) => {
      console.log(index);
      activeIndex.value = index;
      centerTitle(index);

      //
    };
    //切换tab
    function switchTitle(index: number) {
      activeIndex.value = index;
      centerTitle(index);
      console.log(nutuiSwiper.value);
      nutuiSwiper.value.to(index);
    }
    function initTitle() {
      titles.length = 0;
      if (ctx.slots.default) {
        const slots: VNode[] =
          ctx.slots.default().length === 1
            ? (ctx.slots.default()[0].children as VNode[])
            : ctx.slots.default();
        console.log(slots);
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
                  : null,
              main:
                item.children && (item.children as currChild).default
                  ? (item.children as currChild).default()
                  : null
            });
          });
      }
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
      switchTitle,
      changeTab,
      nutuiSwiper
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
