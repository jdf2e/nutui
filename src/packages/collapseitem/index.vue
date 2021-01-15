<template>
  <view
    :class="[
      'nut-collapse-item',
      { 'nut-collapse-item-left': classDirection == 'left' },
      { 'nut-collapse-item-icon': icon && icon != 'none' }
    ]"
  >
    <view
      :class="[
        'collapse-item',
        { 'item-expanded': openExpanded },
        { 'nut-collapse-item-disabled': disabled }
      ]"
      @click="toggleOpen"
    >
      <view class="collapse-title">
        <view>
          <img
            v-if="
              titleIcon != '' &&
                titleIcon != 'none' &&
                titleIconPosition == 'left'
            "
            :src="titleIcon"
            :style="titleIconWH"
            class="titleIconLeft"
          />
          <view v-html="title"></view>
          <img
            v-if="
              titleIcon != '' &&
                titleIcon != 'none' &&
                titleIconPosition == 'right'
            "
            :src="titleIcon"
            :style="titleIconWH"
            class="titleIconRight"
          />
        </view>
      </view>
      <view v-if="subTitle" v-html="subTitle" class="subTitle"></view>
      <i
        v-if="icon && icon != 'none'"
        :class="[
          'collapse-icon',
          { 'col-expanded': openExpanded },
          { 'collapse-icon-disabled': disabled }
        ]"
        :style="iconStyle"
      ></i>
      <i
        v-else-if="icon != 'none'"
        :class="[
          'collapse-icon',
          { 'col-expanded': openExpanded },
          { 'collapse-icon-disabled': disabled }
        ]"
      ></i>
    </view>
    <view class="collapse-wrapper" ref="wrapperRef">
      <view class="collapse-content" ref="contentRef">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import {
  reactive,
  toRefs,
  onMounted,
  ref,
  nextTick,
  computed,
  watch
} from 'vue';
import { createComponent } from '@/utils/create';
import { useParent } from '@/utils/useRelation/useParent';
import { COLLAPSE_KEY } from './../collapse/index.vue';
const { create } = createComponent('collapse-item');

export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      default: -1,
      required: true
    },
    collapseRef: {
      type: Object
    }
  },
  setup(props) {
    const collapse = useParent(COLLAPSE_KEY);
    const parent: any = reactive(collapse.parent as any);
    const index: any = reactive(collapse.index as any);
    const proxyData = reactive({
      openExpanded: false,
      classDirection: 'right',
      iconStyle: {
        width: '20px',
        height: '20px',
        'background-image':
          'url(https://img10.360buyimg.com/imagetools/jfs/t1/111306/10/17422/341/5f58aa0eEe9218dd6/28d76a42db334e31.png)',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        transform: 'rotate(0deg)'
      }
    });
    console.log(parent.titleIcon);

    const titleIconStyle = reactive({
      titleIcon: parent.titleIcon,
      titleIconPosition: parent.titleIconPosition,
      titleIconWH: {
        width: '13px',
        height: '13px'
      }
    });

    // 获取 Dom 元素
    const wrapperRef: any = ref(null);
    const contentRef: any = ref(null);

    // 清除 willChange 减少性能浪费
    const onTransitionEnd = () => {
      const wrapperRefEle: any = document.getElementsByClassName(
        'collapse-wrapper'
      )[0];
      wrapperRefEle.style.willChange = 'auto';
    };

    // 手风琴模式
    const animation = () => {
      const wrapperRefEle: any = wrapperRef.value;
      const contentRefEle: any = contentRef.value;
      if (!wrapperRefEle || !contentRefEle) {
        return;
      }
      const offsetHeight = contentRefEle.offsetHeight;
      if (offsetHeight) {
        const contentHeight = `${offsetHeight}px`;
        wrapperRefEle.style.willChange = 'height';
        wrapperRefEle.style.height = !proxyData.openExpanded
          ? 0
          : contentHeight;
        if (parent.icon && parent.icon != 'none' && !proxyData.openExpanded) {
          proxyData.iconStyle['transform'] = 'rotate(0deg)';
        } else {
          proxyData.iconStyle['transform'] = 'rotate(' + parent.rotate + 'deg)';
        }
      }
      if (!proxyData.openExpanded) {
        onTransitionEnd();
      }
    };

    const open = () => {
      proxyData.openExpanded = !proxyData.openExpanded;
      animation();
    };

    const defaultOpen = () => {
      open();
      if (parent.icon && parent.icon != 'none') {
        proxyData['iconStyle']['transform'] =
          'rotate(' + parent.rotate + 'deg)';
      }
    };

    const currentName = computed(() => props.name ?? index.value);
    const toggleOpen = () => {
      if (parent.accordion) {
        parent.children.forEach((item: any, index: number) => {
          if (currentName.value == item.name) {
            item.changeOpen(!item.openExpanded);
          } else {
            item.changeOpen(false);
            item.animation();
          }
        });
        nextTick(() => {
          console.log(currentName.value);

          parent.changeVal(currentName.value, !proxyData.openExpanded);
          animation();
        });
      } else {
        parent.changeValAry(props.name);
        open();
      }
    };
    // 更改子组件展示
    const changeOpen = (bol: boolean) => {
      proxyData.openExpanded = bol;
    };

    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return null;
    });

    watch(expanded, (value, oldValue) => {
      if (value) {
        proxyData.openExpanded = true;
      }
    });

    onMounted(() => {
      const { name } = props;
      const active = parent && parent.value;

      if (typeof active == 'number' || typeof active == 'string') {
        if (name == active) {
          defaultOpen();
        }
      } else if (Object.values(active) instanceof Array) {
        const f = Object.values(active).filter(item => item == name);
        if (f.length > 0) {
          defaultOpen();
        }
      }

      proxyData.classDirection = parent.expandIconPosition;
      if (parent.icon && parent.icon != 'none') {
        proxyData.iconStyle['background-image'] = 'url(' + parent.icon + ')';
      }
      if (parent.iconWidth && parent.icon != 'none') {
        proxyData.iconStyle['width'] = parent.conWidth;
      }
      if (parent.iconHeght && parent.icon != 'none') {
        proxyData.iconStyle['height'] = parent.iconHeight;
      }
    });

    return {
      ...toRefs(proxyData),
      ...toRefs(parent),
      ...toRefs(titleIconStyle),
      wrapperRef,
      contentRef,
      open,
      toggleOpen,
      changeOpen,
      animation
    };
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
