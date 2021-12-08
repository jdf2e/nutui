<template>
  <view class="nut-tabs" :class="[direction]">
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
            <nut-icon :color="color" name="joy-smile" />
          </view>
          <view
            class="nut-tabs__titles-item__text"
            :class="{ ellipsis: ellipsis && !titleScroll && direction == 'horizontal' }"
            >{{ item.title }}
          </view>
        </view>
      </template>
    </view>
    <view class="nut-tabs__content" :style="contentStyle">
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { pxCheck } from '../../utils/pxCheck';
import { onMounted, provide, VNode, ref, Ref, computed, onActivated, watch, PropType } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('tabs');
class Title {
  title: string = '';
  titleSlot?: VNode[];
  paneKey: string = '';
  disabled: boolean = false;
  constructor() {}
}
export type TabsSize = 'large' | 'normal' | 'small';
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
      type: String as PropType<TabsSize>,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'line' //card、line、smile
    },
    lineWidth: {
      type: [String, Number],
      default: ''
    },
    titleScroll: {
      type: Boolean,
      default: false
    },
    ellipsis: {
      type: Boolean,
      default: true
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
    }
  },

  components: {},
  emits: ['update:modelValue', 'click', 'change'],

  setup(props, { emit, slots }) {
    provide('activeKey', { activeKey: computed(() => props.modelValue) });
    const titles: Ref<Title[]> = ref([]);
    const currentIndex = ref((props.modelValue as number) || 0);

    const renderTitles = (vnodes: VNode[]) => {
      vnodes.forEach((vnode: VNode, index: number) => {
        let type = vnode.type;
        type = (type as any).name || type;
        if (type == 'nut-tabpane') {
          let title = new Title();
          if (vnode.props?.title || vnode.props?.['pane-key']) {
            title.title = vnode.props?.title;
            title.paneKey = vnode.props?.['pane-key'] || index;
            title.disabled = vnode.props?.disabled;
          } else {
            // title.titleSlot = vnode.children?.title() as VNode[];
          }
          titles.value.push(title);
        } else {
          renderTitles(vnode.children as VNode[]);
        }
      });
    };
    const init = (vnodes: VNode[] = slots.default()) => {
      titles.value = [];
      if (vnodes.length) {
        renderTitles(vnodes);
      }
    };
    watch(
      () => slots.default(),
      (vnodes: VNode[]) => {
        init(vnodes);
      }
    );
    watch(
      () => props.modelValue,
      (value: string | number) => {
        let index = titles.value.findIndex((item) => item.paneKey == value);
        if (index == -1) {
          console.error('[NutUI] <Tabs> 请检查 v-model 值是否为 paneKey ,如 paneKey 未设置，请采用下标控制 .');
        } else {
          currentIndex.value = index;
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
      }
    };

    return {
      titles,
      contentStyle,
      tabsNavStyle,
      titleStyle,
      tabsActiveStyle,
      ...methods
    };
  }
});
</script>
