<template>
  <view :class="classes">
    <scroll-view
      class="nut-elevator__list scrollview"
      :scroll-top="scrollTop"
      :scroll-y="true"
      ref="listview"
      :style="{ height: isNaN(+height) ? height : `${height}px` }"
    >
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
          v-html="subitem.name"
        ></view>
      </view>
    </scroll-view>
    <view class="nut-elevator__code--current" v-show="scrollStart" v-if="indexList.length > 0">
      {{ indexList[currentIndex][acceptKey] }}
    </view>
    <view class="nut-elevator__bars" @touchstart="touchStart" @touchmove.stop.prevent="touchMove" @touchend="touchEnd">
      <view class="nut-elevator__bars__inner">
        <view
          class="nut-elevator__bars__inner__item"
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
import { computed, reactive, toRefs, nextTick, ref, Ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
const { componentName, create } = createComponent('elevator');
import Taro from '@tarojs/taro';
interface ElevatorData {
  name: string;
  id: number | string;
  [key: string]: string | number;
}
export default create({
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
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ['click-item', 'click-index'],
  setup(props: any, context: any) {
    const spaceHeight = 23;
    const listview: Ref<HTMLElement> = ref() as Ref<HTMLElement>;
    const state = reactive({
      anchorIndex: 0,
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
      currentKey: ''
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    //重置滚动参数
    const resetScrollState = () => {
      state.anchorIndex = 0;
      state.listHeight = [];
      state.listGroup = [];
      state.currentIndex = 0;
      state.scrollStart = false;
      state.touchState = {
        y1: 0,
        y2: 0
      };
    };

    const getData = (el: HTMLElement): string | void => {
      if (!el.dataset.index) {
        return '0';
      }
      return el.dataset.index as string;
    };

    const setListGroup = (el: HTMLLIElement) => {
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
        state.query.exec((res: any) => {
          height += res[i][0].height;
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
      state.currentIndex = index;
      state.scrollTop = state.listHeight[index];
    };

    const touchStart = (e: TouchEvent) => {
      state.scrollStart = true;
      let index = getData(e.target as HTMLElement);
      let firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.currentIndex = +index;
      scrollTo(+index);
    };

    const touchMove = (e: TouchEvent) => {
      let firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      let delta = ((state.touchState.y2 - state.touchState.y1) / spaceHeight) | 0;
      state.currentIndex = state.anchorIndex + delta;
      scrollTo(state.currentIndex);
    };

    const touchEnd = () => {
      resetScrollState();
    };

    const handleClickItem = (key: string, item: ElevatorData) => {
      context.emit('click-item', key, item);
      state.currentData = item;
      state.currentKey = key;
    };

    const handleClickIndex = (key: string) => {
      context.emit('click-index', key);
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

    return {
      classes,
      ...toRefs(state),
      setListGroup,
      listview,
      touchStart,
      touchMove,
      touchEnd,
      handleClickItem,
      handleClickIndex
    };
  }
});
</script>
