<template>
  <view class="nut-tabs" :class="[direction]" ref="container" id="container">
    <view
      class="nut-tabs__titles"
      :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
      :style="tabsNavStyle"
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
    <view class="nut-tabs__content" :style="contentStyle">
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { JoySmile } from '@nutui/icons-vue-taro';
import { pxCheck } from '@/packages/utils/pxCheck';
import { TypeOfFun } from '@/packages/utils/util';
import { useRect } from '@/packages/utils/useRect';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch } from 'vue';
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
  components: {
    JoySmile
  },
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
    }
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
        console.error('[NutUI] <Tabs> 当前未找到 TabPane 组件元素 , 请检查 .');
      } else if (index == -1) {
        // console.error('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
      } else {
        currentIndex.value = index;
      }
    };
    const init = (vnodes: VNode[] = slots.default?.()) => {
      titles.value = [];
      vnodes = vnodes?.filter((item) => typeof item.children !== 'string');
      if (vnodes && vnodes.length) {
        renderTitles(vnodes);
      }
      findTabsIndex(props.modelValue);
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
      }
    };
    return {
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      container,
      ...methods
    };
  }
});
</script>
