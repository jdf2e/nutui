<template>
  <view class="nut-tabs" :class="[direction]" ref="container" id="container">
    <template v-if="sticky">
      <nut-sticky :top="top" :container="container" @scroll="onStickyScroll">
        <view
          class="nut-tabs__titles"
          :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
          :style="tabsNavStyle"
          ref="navRef"
        >
          <slot v-if="$slots.titles" name="titles"></slot>
          <template v-else>
            <view
              class="nut-tabs__titles-item"
              :style="titleStyle"
              @click="tabChange(item, index)"
              :class="{ active: item.paneKey == modelValue, disabled: item.disabled }"
              v-for="(item, index) in titles"
              :key="item.paneKey"
            >
              <view class="nut-tabs__titles-item__line" :style="tabsActiveStyle" v-if="type == 'line'"></view>
              <view class="nut-tabs__titles-item__smile" :style="tabsActiveStyle" v-if="type == 'smile'">
                <JoySmile :color="color" />
              </view>
              <view class="nut-tabs__titles-item__text" :class="{ ellipsis: ellipsis }">{{ item.title }} </view>
            </view>
          </template>
        </view>
      </nut-sticky>
    </template>
    <template v-else>
      <view
        class="nut-tabs__titles"
        :class="{ [type]: type, scrollable: titleScroll, 'scroll-vertical': getScrollY, [size]: size }"
        :style="tabsNavStyle"
        ref="navRef"
      >
        <slot v-if="$slots.titles" name="titles"></slot>
        <template v-else>
          <view
            class="nut-tabs__titles-item"
            :style="titleStyle"
            @click="tabChange(item, index)"
            :class="{ active: item.paneKey == modelValue, disabled: item.disabled }"
            v-for="(item, index) in titles"
            :key="item.paneKey"
            :ref="(e) => setTabItemRef(e as HTMLElement, index)"
          >
            <view class="nut-tabs__titles-item__line" :style="tabsActiveStyle" v-if="type == 'line'"></view>
            <view class="nut-tabs__titles-item__smile" :style="tabsActiveStyle" v-if="type == 'smile'">
              <JoySmile :color="color" />
            </view>
            <view class="nut-tabs__titles-item__text" :class="{ ellipsis: ellipsis }">{{ item.title }} </view>
          </view>
        </template>
      </view>
    </template>
    <view
      class="nut-tabs__content"
      ref="tabsContentRef"
      :style="contentStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
import { TypeOfFun } from '@/packages/utils/util';
import { useRect } from '@/packages/utils/useRect';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch, nextTick, CSSProperties } from 'vue';
import raf from '@/packages/utils/raf';
export class Title {
  title = '';
  titleSlot?: VNode[];
  paneKey = '';
  disabled = false;
  constructor() {}
}
export type TabsSize = 'large' | 'normal' | 'small';
import Sticky from '../sticky/index.vue';
const { create } = createComponent('tabs');
import { JoySmile } from '@nutui/icons-vue';
import { useTabContentTouch } from './hooks';
export default create({
  components: { [Sticky.name]: Sticky, JoySmile },
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'horizontal' //vertical
    },
    size: {
      type: String as import('vue').PropType<TabsSize>,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'line' //card、line、smile
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    swipeable: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: ''
    },
    animatedTime: {
      type: [Number, String],
      default: 300
    },
    titleGutter: {
      type: [Number, String],
      default: 0
    },
    sticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue', 'click', 'change'],

  setup(props: any, { emit, slots }: any) {
    const container = ref(null);
    let stickyFixed: boolean;
    provide('tabsOpiton', {
      activeKey: computed(() => props.modelValue || '0'),
      autoHeight: computed(() => props.autoHeight),
      animatedTime: computed(() => props.animatedTime)
    });

    const titles: Ref<Title[]> = ref([]);
    const renderTitles = (vnodes: VNode[]) => {
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-tab-pane') {
          let title = new Title();
          if (vnode.props?.title || vnode.props?.['pane-key'] || vnode.props?.['paneKey']) {
            let paneKeyType = TypeOfFun(vnode.props?.['pane-key']);
            let paneIndex =
              paneKeyType == 'number' || paneKeyType == 'string' ? String(vnode.props?.['pane-key']) : null;
            let camelPaneKeyType = TypeOfFun(vnode.props?.['paneKey']);
            let camelPaneIndex =
              camelPaneKeyType == 'number' || camelPaneKeyType == 'string' ? String(vnode.props?.['paneKey']) : null;
            title.title = vnode.props?.title;
            title.paneKey = paneIndex || camelPaneIndex || String(index);
            title.disabled = vnode.props?.disabled;
          } else {
            // title.titleSlot = vnode.children?.title() as VNode[];
          }
          titles.value.push(title);
        } else {
          if (vnode.children == ' ') {
            return;
          }
          renderTitles(vnode.children as VNode[]);
        }
      });
    };

    const currentIndex = ref((props.modelValue as number) || 0);
    const findTabsIndex = (value: string | number) => {
      let index = titles.value.findIndex((item) => item.paneKey == value);
      if (titles.value.length == 0) {
        // console.warn('[NutUI] <Tabs> 当前未找到 TabPane 组件元素 , 请检查 .');
      } else if (index == -1) {
        // console.warn('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
      } else {
        currentIndex.value = index;
      }
    };

    const getScrollY = computed(() => {
      return props.titleScroll && props.direction === 'vertical';
    });
    const navRef = ref<HTMLElement>();
    const titleRef = ref([]) as Ref<HTMLElement[]>;
    const scrollIntoView = (immediate?: boolean) => {
      const nav = navRef.value;
      const _titles = titleRef.value;
      if (!nav || !_titles || !_titles[currentIndex.value]) {
        return;
      }
      const title = _titles[currentIndex.value];

      let to = 0;
      if (props.direction === 'vertical') {
        const runTop = title.offsetTop - nav.offsetTop + 10;
        to = runTop - (nav.offsetHeight - title.offsetHeight) / 2;
      } else {
        to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      }

      scrollDirection(nav, to, immediate ? 0 : 0.3, props.direction);
    };

    const scrollDirection = (nav: any, to: number, duration: number, direction: 'horizontal' | 'vertical') => {
      let count = 0;
      const from = direction === 'horizontal' ? nav.scrollLeft : nav.scrollTop;
      const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16);

      function animate() {
        if (direction === 'horizontal') {
          nav.scrollLeft += (to - from) / frames;
        } else {
          nav.scrollTop += (to - from) / frames;
        }

        if (++count < frames) {
          raf(animate);
        }
      }

      animate();
    };
    const init = (vnodes: VNode[] = slots.default?.()) => {
      titles.value = [];
      vnodes = vnodes?.filter((item) => typeof item.children !== 'string');
      if (vnodes && vnodes.length) {
        renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
      nextTick(() => {
        scrollIntoView();
      });
    };
    const onStickyScroll = (params: { top: number; fixed: boolean }) => {
      stickyFixed = params.fixed;
    };

    watch(
      () => slots.default?.(),
      (vnodes: VNode[]) => {
        init(vnodes);
      }
    );
    const getScrollTopRoot = () => {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    watch(
      () => props.modelValue,
      (value: string | number) => {
        findTabsIndex(value);
        scrollIntoView();
        if (stickyFixed) {
          let top = useRect(container.value!).top + getScrollTopRoot();
          let value = Math.ceil(top - props.top);
          window.scrollTo({
            top: value,
            behavior: 'smooth'
          });
        }
      }
    );
    onMounted(init);
    onActivated(init);
    const tabMethods = {
      isBegin: () => {
        return currentIndex.value == 0;
      },
      isEnd: () => {
        return currentIndex.value == titles.value.length - 1;
      },
      next: () => {
        currentIndex.value += 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      prev: () => {
        currentIndex.value -= 1;
        tabMethods.updateValue(titles.value[currentIndex.value]);
      },
      updateValue: (item: Title) => {
        emit('update:modelValue', item.paneKey);
        emit('change', item);
      },
      tabChange: (item: Title, index: number) => {
        emit('click', item);
        if (item.disabled || currentIndex.value == index) {
          return;
        }
        currentIndex.value = index;
        tabMethods.updateValue(item);
      },
      setTabItemRef: (el: HTMLElement, index: number) => {
        titleRef.value[index] = el;
      }
    };
    const { tabsContentRef, touchState, touchMethods } = useTabContentTouch(props, tabMethods);
    const contentStyle = computed(() => {
      let offsetPercent = currentIndex.value * 100;
      if (touchState.moving) {
        offsetPercent += touchState.offset;
      }
      let style: CSSProperties = {
        transform:
          props.direction == 'horizontal'
            ? `translate3d(-${offsetPercent}%, 0, 0)`
            : `translate3d( 0,-${offsetPercent}%, 0)`,
        transitionDuration: touchState.moving ? undefined : `${props.animatedTime}ms`
      };
      if (props.animatedTime == 0) {
        style = {};
      }
      return style;
    });
    const tabsNavStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const tabsActiveStyle = computed(() => {
      return {
        color: props.type == 'smile' ? props.color : '',
        background: props.type == 'line' ? props.color : ''
      };
    });
    const titleStyle = computed(() => {
      return {
        marginLeft: pxCheck(props.titleGutter),
        marginRight: pxCheck(props.titleGutter)
      };
    });

    return {
      navRef,
      tabsContentRef,
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      getScrollY,
      onStickyScroll,
      ...tabMethods,
      ...touchMethods
    };
  }
});
</script>
