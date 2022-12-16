<template>
  <view :class="classes">
    <view
      :class="['collapse-item', { 'item-expanded': openExpanded }, { 'nut-collapse-item-disabled': disabled }]"
      @click="toggleOpen"
    >
      <view class="collapse-title">
        <view>
          <view class="collapse-title-value">
            <nut-icon
              v-if="titleIcon"
              :name="titleIcon"
              v-bind="$attrs"
              :size="titleIconSize"
              :color="titleIconColor"
              :class="[titleIconPosition == 'left' ? 'titleIconLeft' : 'titleIconRight']"
            ></nut-icon>
            <slot v-if="$slots.mTitle" name="mTitle"></slot>
            <template v-else>
              <view v-html="title" class="collapse-icon-title"></view>
            </template>
          </view>
        </view>
      </view>
      <view v-if="$slots.sTitle" class="subTitle">
        <slot name="sTitle"></slot>
      </view>
      <view v-else v-html="subTitle" class="subTitle"></view>
      <nut-icon
        v-if="icon"
        :name="icon"
        v-bind="$attrs"
        :size="iconSize"
        :color="iconColor"
        :class="['collapse-icon', { 'col-expanded': openExpanded }, { 'collapse-icon-disabled': disabled }]"
        :style="iconStyle"
      ></nut-icon>
    </view>
    <view v-if="$slots.extraRender" class="collapse-extraWrapper">
      <div class="collapse-extraRender">
        <slot name="extraRender"></slot>
      </div>
    </view>
    <view class="collapse-wrapper" ref="wrapperRef">
      <view :class="['collapse-content', emptyContent]" ref="contentRef">
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
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse-item');

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
  setup(props, ctx: any) {
    const collapse: any = inject('collapseParent');
    const parent: any = reactive(collapse);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        // [`${prefixCls}-left`]: parent.props.classDirection === 'left',
        [`${prefixCls}-icon`]: parent.props.icon
      };
    });

    const relation = (child: ComponentInternalInstance): void => {
      if (child.proxy) {
        parent.children.push(child.proxy);
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    const proxyData = reactive({
      icon: parent.props.icon,
      iconSize: parent.props.iconSize,
      iconColor: parent.props.iconColor,
      openExpanded: false,
      // classDirection: 'right',
      iconStyle: {
        transform: 'rotate(0deg)',
        marginTop: parent.props.iconHeght ? '-' + parent.props.iconHeght / 2 + 'px' : '-10px'
      }
    });

    const titleIconStyle = reactive({
      titleIcon: parent.props.titleIcon,
      titleIconSize: parent.props.titleIconSize,
      titleIconColor: parent.props.titleIconColor,
      titleIconPosition: parent.props.titleIconPosition
      // titleIconWH: {
      //   width: '13px',
      //   height: '13px'
      // }
    });

    // 获取 Dom 元素
    const wrapperRef: any = ref(null);
    const contentRef: any = ref(null);

    // 清除 willChange 减少性能浪费
    const onTransitionEnd = () => {
      const wrapperRefEle: any = document.getElementsByClassName('collapse-wrapper')[0];
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
        if (parent.props.icon && !proxyData.openExpanded) {
          proxyData.iconStyle['transform'] = 'rotate(0deg)';
        } else {
          proxyData.iconStyle['transform'] = 'rotate(' + parent.props.rotate + 'deg)';
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
      if (parent.props.icon) {
        proxyData['iconStyle']['transform'] = 'rotate(' + parent.props.rotate + 'deg)';
      }
    };

    const currentName = computed(() => props.name);
    const toggleOpen = () => {
      if (parent.props.accordion) {
        // parent.children.forEach((item: any, index: number) => {
        //   if (currentName.value == item.name) {
        //     item.changeOpen(!item.openExpanded);
        //   } else {
        //     item.changeOpen(false);
        //     item.animation();
        //   }
        // });
        nextTick(() => {
          if (currentName.value == parent.props.active) {
            open();
          } else {
            parent.changeVal(currentName.value);
          }
          // parent.changeVal(currentName.value);
          // animation();
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

    // watch(
    //   () => ctx?.slots?.default?.(),
    //   (val) => {
    //     setTimeout(() => {
    //       animation();
    //     }, 300);
    //   },
    //   {
    //     deep: true,
    //     immediate: true
    //   }
    // );

    const init = () => {
      const { name } = props;
      const active = parent && parent.props.active;
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
      const MutationObserver: any =
        window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      var observer = new MutationObserver(() => {
        animation();
      });
      const ele = document.getElementsByClassName('collapse-wrapper')[0];
      if (ele) {
        observer.observe(ele, {
          childList: true,
          subtree: true
        });
      }

      init();
      // proxyData.classDirection = parent.props.expandIconPosition;
      // if (parent.props.icon && parent.props.icon != 'none') {
      //   proxyData.iconStyle['background-image'] =
      //     'url(' + parent.props.icon + ')';
      // }
      // if (parent.props.iconWidth && parent.props.icon != 'none') {
      //   proxyData.iconStyle['width'] = parent.props.conWidth;
      // }
      // if (parent.props.iconHeght && parent.props.icon != 'none') {
      //   proxyData.iconStyle['height'] = parent.props.iconHeight;
      // }
    });
    const emptyContent = computed(() => {
      let ele = contentRef.value;
      let _class = '';
      if (!ele?.innerText) {
        _class = 'empty';
      }
      return _class;
    });
    return {
      classes,
      emptyContent,
      ...toRefs(proxyData),
      ...toRefs(parent.props),
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
