<template>
  <view :class="classes">
    <view class="nut-elevator__list" ref="listview" :style="{ height: isNaN(+height) ? height : `${height}px` }">
      <view class="nut-elevator__list__item" v-for="item in indexList" :key="item[acceptKey]" :ref="setListGroup">
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
      <view class="nut-elevator__list__fixed" :style="fixedStyle" v-show="scrollY > 0" v-if="isSticky">
        <span class="fixed-title">{{ indexList[currentIndex][acceptKey] }}</span>
      </view>
    </view>
    <view class="nut-elevator__code--current" v-show="scrollStart" v-if="indexList.length">{{
      indexList[codeIndex][acceptKey]
    }}</view>
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
import { computed, reactive, toRefs, nextTick, ref, Ref, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useExpose } from '@/packages/utils/useExpose/index';
const { componentName, create } = createComponent('elevator');
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
  emits: ['click-item', 'click-index'],
  setup(props, context) {
    const listview: Ref<any> = ref(null);
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
      currentData: {} as ElevatorData,
      currentKey: '',
      scrollY: 0,
      diff: -1,
      fixedTop: 0
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const fixedStyle = computed(() => {
      return {
        transform: `translate3d(0, ${state.scrollY + state.fixedTop}px, 0)`
      };
    });

    const clientHeight = computed(() => {
      return listview.value.clientHeight;
    });

    const getData = (el: HTMLElement, name: string): string | void => {
      const prefix = 'data-';
      return el.getAttribute(prefix + name) as string;
    };

    const setListGroup = (el: HTMLLIElement) => {
      nextTick(() => {
        if (!state.listGroup.includes(el) && el != null) {
          state.listGroup.push(el);
        }
      });
    };

    const calculateHeight = () => {
      let height = 0;
      state.listHeight.push(height);
      for (let i = 0; i < state.listGroup.length; i++) {
        let item = state.listGroup[i];
        height += item.clientHeight;
        state.listHeight.push(height);
      }
    };

    const scrollTo = (index: number) => {
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) index = 0;
      if (index > state.listHeight.length - 2) index = state.listHeight.length - 2;
      state.codeIndex = index;
      listview.value.scrollTo(0, state.listHeight[index]);
    };

    const touchStart = (e: TouchEvent) => {
      state.scrollStart = true;
      let index = getData(e.target as HTMLElement, 'index');
      let firstTouch = e.touches[0];
      state.touchState.y1 = firstTouch.pageY;
      state.anchorIndex = +index;
      state.codeIndex = +index;
      scrollTo(+index);
    };

    const touchMove = (e: TouchEvent) => {
      let firstTouch = e.touches[0];
      state.touchState.y2 = firstTouch.pageY;
      let delta = ((state.touchState.y2 - state.touchState.y1) / props.spaceHeight) | 0;
      state.codeIndex = state.anchorIndex + delta;
      scrollTo(state.codeIndex);
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
      state.scrollY = scrollTop;
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (state.scrollY >= height1 && state.scrollY < height2) {
          state.currentIndex = i;
          state.diff = height2 - state.scrollY;
          return;
        }
      }

      state.currentIndex = listHeight.length - 2;
    };

    onMounted(() => {
      listview.value.addEventListener('scroll', listViewScroll);
    });

    useExpose({
      scrollTo
    });

    watch(
      () => state.listGroup.length,
      () => {
        state.listHeight = [];
        nextTick(calculateHeight);
      }
    );

    watch(
      () => state.diff,
      (newVal: number) => {
        const listHeight = state.listHeight;
        let fixedTop = newVal > 0 && newVal < props.titleHeight ? newVal - props.titleHeight : 0;
        if (state.scrollY + clientHeight.value === listHeight[listHeight.length - 1]) {
          if (fixedTop !== 0) fixedTop = 0;
        }
        if (state.fixedTop === fixedTop) return;
        state.fixedTop = fixedTop;
      }
    );

    return {
      classes,
      ...toRefs(state),
      fixedStyle,
      clientHeight,
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
