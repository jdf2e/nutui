<template>
  <view :class="classes">
    <view :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]" @click="toggleOpen">
      <view class="nut-collapse-item__title-main">
        <view class="nut-collapse-item__title-main-value">
          <slot v-if="$slots.mTitle" name="mTitle"></slot>
          <template v-else>
            <view v-html="title" class="nut-collapse-item__title-mtitle"></view>
          </template>
          <view class="nut-collapse-item__title-label" v-if="label">{{ label }}</view>
        </view>
      </view>
      <view v-if="$slots.value" class="nut-collapse-item__title-sub">
        <slot name="value"></slot>
      </view>
      <view v-else v-html="value" class="nut-collapse-item__title-sub"></view>
      <view
        :class="['nut-collapse-item__title-icon', { 'nut-collapse-item__title-icon--expanded': openExpanded }]"
        :style="{ transform: 'rotate(' + (openExpanded ? rotate : 0) + 'deg)' }"
      >
        <component :is="renderIcon(icon)"></component>
      </view>
    </view>

    <view v-if="$slots.extraRender" class="nut-collapse__item-extraWrapper">
      <div class="nut-collapse__item-extraWrapper__extraRender">
        <slot name="extraRender"></slot>
      </div>
    </view>
    <view class="nut-collapse__item-wrapper" ref="wrapperRef">
      <view :class="['nut-collapse__item-wrapper__content', emptyContent]" ref="contentRef">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import {
  reactive,
  inject,
  toRefs,
  onMounted,
  ref,
  nextTick,
  computed,
  watch,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue';
import { DownArrow } from '@nutui/icons-vue';
import { createComponent, renderIcon } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse-item');

export default create({
  props: {
    collapseRef: {
      type: Object
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
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
    border: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Object,
      default: () => DownArrow
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  // components: { DownArrow },
  setup(props, ctx: any) {
    const collapse: any = inject('collapseParent');
    const parent: any = reactive(collapse);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [prefixCls + '__border']: props.border
      };
    });

    const relation = (child: ComponentInternalInstance): void => {
      if (child.proxy) {
        parent.children.push(child.proxy);
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    const proxyData = reactive({
      openExpanded: false
    });

    // 获取 Dom 元素
    const wrapperRef: any = ref(null);
    const contentRef: any = ref(null);

    // 清除 willChange 减少性能浪费
    const onTransitionEnd = () => {
      const wrapperRefEle: any = document.getElementsByClassName('nut-collapse__item-wrapper')[0];
      if (wrapperRefEle) {
        wrapperRefEle.style.willChange = 'auto';
      }

      // const query = wx.createSelectorQuery();
      // query.select('#productServe').boundingClientRect();
    };

    // 手风琴模式
    const animation = () => {
      const wrapperRefEle: any = wrapperRef.value;
      const contentRefEle: any = contentRef.value;
      if (!wrapperRefEle || !contentRefEle) {
        return;
      }

      const offsetHeight = contentRefEle.offsetHeight || 'auto';
      if (offsetHeight) {
        const contentHeight = `${offsetHeight}px`;
        wrapperRefEle.style.willChange = 'height';
        wrapperRefEle.style.height = !proxyData.openExpanded ? 0 : contentHeight;
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
    };

    const currentName = computed(() => props.name);
    const toggleOpen = () => {
      if (parent.props.accordion) {
        nextTick(() => {
          if (currentName.value == parent.props.modelValue) {
            open();
          } else {
            parent.changeVal(currentName.value);
          }
        });
      } else {
        parent.changeValAry(String(props.name));
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

    const init = () => {
      const { name } = props;
      const active = parent && parent.props.modelValue;
      nextTick(() => {
        if (typeof active == 'number' || typeof active == 'string') {
          if (name == active) {
            defaultOpen();
          }
        } else if (Object.values(active) instanceof Array) {
          const f = Object.values(active).filter((item) => item == name);
          if (f.length > 0) {
            defaultOpen();
          }
        }
      });
    };
    onMounted(() => {
      // const MutationObserver: any =
      //   window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      var observer = new MutationObserver(() => {
        animation();
      });
      const ele = document.getElementsByClassName('nut-collapse__item-wrapper')[0];
      if (ele) {
        observer.observe(ele, {
          childList: true,
          subtree: true
        });
      }
      init();
    });
    const emptyContent = computed(() => {
      let ele = contentRef.value;
      let _class = '';
      if (!ele?.innerText) {
        _class = 'nut-collapse__item-wrapper__content--empty';
      }
      return _class;
    });
    return {
      classes,
      emptyContent,
      ...toRefs(proxyData),
      renderIcon,
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
