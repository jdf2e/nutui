<template>
  <view class="nut-tabs" :class="[direction]" ref="container" id="container">
    <Nut-Scroll-View
      :scroll-x="true"
      :scroll-with-animation="scrollWithAnimation"
      :scroll-left="scrollLeft"
      :enable-flex="true"
      :id="`nut-tabs__titles_${name}`"
      class="nut-tabs__titles tabs-scrollview"
      :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
      :style="tabsNavStyle"
    >
      <slot v-if="$slots.titles" name="titles"></slot>
      <template v-else>
        <view
          class="nut-tabs__titles-item taro"
          :style="titleStyle"
          @click="tabChange(item, index)"
          :class="{ active: item.paneKey == modelValue, disabled: item.disabled }"
          v-for="(item, index) in titles"
          :key="item.paneKey"
        >
          <view class="nut-tabs__titles-item__line" :style="tabsActiveStyle" v-if="type == 'line'"></view>
          <view class="nut-tabs__titles-item__smile" :style="tabsActiveStyle" v-if="type == 'smile'">
            <nut-icon :color="color" name="joy-smile" />
          </view>
          <view class="nut-tabs__titles-item__text" :class="{ ellipsis: ellipsis }">{{ item.title }} </view>
        </view>
        <view v-if="canShowLabel" class="nut-tabs__titles-item nut-tabs__titles-placeholder"></view>
      </template>
    </Nut-Scroll-View>
    <view class="nut-tabs__content" :style="contentStyle">
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
import { TypeOfFun, getScrollTopRoot } from '@/packages/utils/util';
import { useRect } from '@/packages/utils/useRect';
import NutScrollView from '../scrollView/index.taro.vue';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch, nextTick } from 'vue';
import raf from '@/packages/utils/raf';
import Taro from '@tarojs/taro';
import type { RectItem } from './types';
export class Title {
  title: string = '';
  titleSlot?: VNode[];
  paneKey: string = '';
  disabled: boolean = false;
  constructor() {}
}
export type TabsSize = 'large' | 'normal' | 'small';
const { create } = createComponent('tabs');
export default create({
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
    },
    name: {
      type: String,
      default: ''
    }
  },

  components: {
    NutScrollView
  },
  emits: ['update:modelValue', 'click', 'change'],

  setup(props: any, { emit, slots }: any) {
    const container = ref(null);
    let stickyFixed: boolean;
    provide('activeKey', { activeKey: computed(() => props.modelValue) });
    provide('autoHeight', { autoHeight: computed(() => props.autoHeight) });
    const titles: Ref<Title[]> = ref([]);
    const renderTitles = (vnodes: VNode[]) => {
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-tabpane') {
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
        console.error('[NutUI] <Tabs> 当前未找到 TabPane 组件元素 , 请检查 .');
      } else if (index == -1) {
        console.error('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
      } else {
        currentIndex.value = index;
      }
    };

    const titleRef = ref([]) as Ref<HTMLElement[]>;
    const scrollLeft = ref(0);
    const scrollWithAnimation = ref(false);
    const getRect = (selector: string) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery()
          .select(selector)
          .boundingClientRect()
          .exec((rect = []) => {
            resolve(rect[0]);
          });
      });
    };
    const getAllRect = (selector: string) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery()
          .selectAll(selector)
          .boundingClientRect()
          .exec((rect = []) => resolve(rect[0]));
      });
    };
    const navRectRef = ref();
    const titleRectRef = ref<RectItem[]>([]);
    const canShowLabel = ref(false);
    const scrollIntoView = () => {
      if (!props.name) return;

      raf(() => {
        Promise.all([
          getRect(`#nut-tabs__titles_${props.name}`),
          getAllRect(`#nut-tabs__titles_${props.name} .nut-tabs__titles-item`)
        ]).then(([navRect, titleRects]: any) => {
          navRectRef.value = navRect;
          titleRectRef.value = titleRects;

          if (navRectRef.value) {
            const titlesTotalWidth = titleRects.reduce((prev: number, curr: RectItem) => prev + curr.width, 0);
            if (titlesTotalWidth > navRectRef.value.width) {
              canShowLabel.value = true;
            } else {
              canShowLabel.value = false;
            }
          }

          const titleRect: RectItem = titleRectRef.value[currentIndex.value];

          const left = titleRects
            .slice(0, currentIndex.value)
            .reduce((prev: number, curr: RectItem) => prev + curr.width + 20, 31);

          const to = left - (navRectRef.value.width - titleRect.width) / 2;

          nextTick(() => {
            scrollWithAnimation.value = true;
          });

          scrollLeftTo(to);
        });
      });
    };

    const scrollLeftTo = (to: number) => {
      let count = 0;
      const from = scrollLeft.value;

      const frames = 1;

      function animate() {
        scrollLeft.value += (to - from) / frames;

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
      setTimeout(() => {
        scrollIntoView();
      }, 500);
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
    const contentStyle = computed(() => {
      return {
        transform:
          props.direction == 'horizontal'
            ? `translate3d(-${currentIndex.value * 100}%, 0, 0)`
            : `translate3d( 0,-${currentIndex.value * 100}%, 0)`,
        transitionDuration: `${props.animatedTime}ms`
      };
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
    const methods = {
      tabChange: (item: Title, index: number) => {
        emit('click', item);
        if (item.disabled) {
          return;
        }
        currentIndex.value = index;
        emit('update:modelValue', item.paneKey);
        emit('change', item);
      },
      setTabItemRef: (el: HTMLElement, index: number) => {
        titleRef.value[index] = el;
      }
    };

    return {
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      scrollLeft,
      scrollWithAnimation,
      onStickyScroll,
      canShowLabel,
      ...methods
    };
  }
});
</script>
