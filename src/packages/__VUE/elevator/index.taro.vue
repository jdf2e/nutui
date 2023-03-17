<template>
  <view :class="classes">
    <Nut-Scroll-View
      class="nut-elevator__list nut-elevator__list--mini"
      :scroll-top="scrollTop"
      :scroll-y="true"
      :scroll-with-animation="true"
      :scroll-anchoring="true"
      ref="listview"
      :style="{ height: isNaN(+height) ? height : `${height}px` }"
      @scroll="listViewScroll"
    >
      <view :style="fixedStyle" class="nut-elevator__list__fixed__wrapper" v-show="scrollY > 0">
        <view class="nut-elevator__list__fixed nut-elevator__list__fixed--mini" v-if="isSticky">
          <span class="nut-elevator__fixed-title">{{ indexList[currentIndex][acceptKey] }}</span>
        </view>
      </view>
      <view
        :class="['nut-elevator__list__item', `elevator__item__${index}`]"
        v-for="(item, index) in indexList"
        :key="item[acceptKey]"
        :ref="setListGroup"
      >
        <view class="nut-elevator__list__item__code">{{ item[acceptKey] }}</view>
        <view
          class="nut-elevator__list__item__name"
          :class="{
            'nut-elevator__list__item__name--highcolor': currentData.id === subitem.id && currentKey === item[acceptKey]
          }"
          v-for="subitem in item.list"
          :key="subitem['id']"
          @click="handleClickItem(item[acceptKey], subitem)"
        >
          <span v-html="subitem.name" v-if="!$slots.default"></span>
          <slot :item="subitem" v-else></slot>
        </view>
      </view>
    </Nut-Scroll-View>
    <view class="nut-elevator__code--current" v-show="scrollStart" v-if="indexList.length > 0">
      {{ indexList[codeIndex][acceptKey] }}
    </view>
    <view class="nut-elevator__bars" @touchstart="touchStart" @touchmove.stop.prevent="touchMove" @touchend="touchEnd">
      <view class="nut-elevator__bars__inner">
        <view
          class="nut-elevator__bars__inner__item"
          :class="{ active: item[acceptKey] === indexList[currentIndex][acceptKey] }"
          :data-index="index"
          v-for="(item, index) in indexList"
          :key="item[acceptKey]"
          @click="handleClickIndex(item[acceptKey])"
          >{{ item[acceptKey] }}</view
        >
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, reactive, toRefs, nextTick, ref, Ref, watch, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
import { ElevatorData } from './type';
const { componentName, create } = createComponent('elevator');
import NutScrollView from '../scrollView/index.taro.vue';

import Taro from '@tarojs/taro';

export default create({
  components: {
    NutScrollView
  },
  props: {
    height: {
      type: [Number, String],
      default: '200px'
    },
    acceptKey: {
      type: [String],
      default: 'title'
    },
    indexList: {
      type: Array as PropType<any[]>,
      default: () => {
        return [];
      }
    },
    isSticky: {
      type: [Boolean],
      default: false
    },
    spaceHeight: {
      type: [Number],
      default: 23
    },
    titleHeight: {
      type: [Number],
      default: 35
    }
  },
  emits: ['click-item', 'click-index', 'change'],
  setup(props, context) {
    const spaceHeight = 23;
    const listview: Ref<HTMLElement> = ref() as Ref<HTMLElement>;
    const state = reactive({
      anchorIndex: 0,
      codeIndex: 0,
      listHeight: [] as number[],
      listGroup: [] as HTMLLIElement[],
      touchState: {
        y1: 0,
        y2: 0
      },
      scrollStart: false,
      currentIndex: 0,
      query: Taro.createSelectorQuery(),
      scrollTop: 0,
      currentData: {} as ElevatorData,
      currentKey: '',
      scrollY: 0
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const clientHeight = computed(() => {
      return listview.value.clientHeight;
    });

    const fixedStyle = computed(() => {
      return {
        height: `${state.listHeight[state.listGroup.length - 1]}px`
      };
    });

    const getData = (el: HTMLElement): string | void => {
      if (!el.dataset.index) {
        return '0';
      }
      return el.dataset.index as string;
    };

    const setListGroup = (el: any) => {
      nextTick(() => {
        if (!state.listGroup.includes(el) && el != null) {
          state.listGroup.push(el);
        }
      });
    };

    const calculateHeight = () => {
      state.listHeight = [];
      let height = 0;
      state.listHeight.push(height);
      for (let i = 0; i < state.listGroup.length; i++) {
        state.query.selectAll(`.elevator__item__${i}`).boundingClientRect();
        state.query.exec((res) => {
          height += Math.floor(res[i][0].height);
          state.listHeight.push(height);
        });
      }
    };

    const scrollTo = (index: number) => {
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) index = 0;
      if (index > state.listHeight.length - 2) index = state.listHeight.length - 2;
      state.codeIndex = index;
      state.scrollTop = state.listHeight[index];
    };

    const touchStart = (e: TouchEvent) => {
      state.scrollStart = true;
      let index = getData(e.target as HTMLElement);
      let firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.codeIndex = +index;
      scrollTo(+index);
    };

    const touchMove = (e: TouchEvent) => {
      let firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      let delta = ((state.touchState.y2 - state.touchState.y1) / spaceHeight) | 0;
      state.codeIndex = state.anchorIndex + delta;
      scrollTo(state.currentIndex);
    };

    const touchEnd = () => {
      state.scrollStart = false;
    };

    const handleClickItem = (key: string, item: ElevatorData) => {
      context.emit('click-item', key, item);
      state.currentData = item;
      state.currentKey = key;
    };

    const handleClickIndex = (key: string) => {
      context.emit('click-index', key);
    };

    const listViewScroll = (e: Event) => {
      let target = e.target as Element;
      let scrollTop = target.scrollTop;
      const listHeight = state.listHeight;
      state.scrollY = Math.floor(scrollTop);
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (state.scrollY >= height1 && state.scrollY < height2) {
          state.currentIndex = i;
          return;
        }
      }
    };

    useExpose({
      scrollTo
    });

    watch(
      () => state.listGroup.length,
      () => {
        Taro.nextTick(calculateHeight);
      }
    );

    watch(
      () => state.currentIndex,
      (newVal: number) => {
        context.emit('change', newVal);
      }
    );

    return {
      classes,
      ...toRefs(state),
      clientHeight,
      fixedStyle,
      setListGroup,
      listview,
      touchStart,
      touchMove,
      touchEnd,
      handleClickItem,
      handleClickIndex,
      listViewScroll
    };
  }
});
</script>
